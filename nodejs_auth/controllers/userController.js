import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


// Setup nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
    port: process.env.EMAIL_PORT,
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    },
    secure: false, // Use true for port 465, false for 587
    tls: {
        rejectUnauthorized: false
    }
});

class UserController {
    // User registration with email verification
    static userRegistration = async (req, res) => {
        const { username, email, password, password_confirmation, phone_number, role } = req.body;
        const allowedRoles = ['customer', 'owner', 'employee', 'staff']; // Add other roles if needed

        if (!role || !allowedRoles.includes(role)) {
            return res.status(400).json({ "status": "failed", "message": "Invalid role provided" });
        }

        try {
            const existingUser = await User.findOne({ email: email });
            if (existingUser) {
                return res.status(400).json({ "status": "failed", "message": "Email already exists" });
            }

            if (password !== password_confirmation) {
                return res.status(400).json({ "status": "failed", "message": "Password and Password Confirmation do not match!" });
            }

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const newUser = new User({
                username: username,
                email: email,
                password_hash: hashPassword,
                phone_number: phone_number,
                role: role
            });
            await newUser.save();

            // Send verification email
            const token = jwt.sign({ userID: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
            const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

            transporter.sendMail({
                from: process.env.EMAIL_USER, // Make sure the 'from' field is set
                to: newUser.email,
                subject: 'Email Verification',
                html: `<h2>Please verify your email</h2>
                       <p>Click the link below to verify your email:</p>
                       <a href="${verificationLink}">Verify Email</a>`,
            }, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    return res.status(500).json({
                        status: 'failed',
                        message: 'Unable to send verification email. Please try again later.',
                    });
                } else {
                    console.log('Email sent:', info.response);
                    return res.status(201).json({
                        status: 'success',
                        message: 'Registration successful. Please check your email to verify your account.',
                    });
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ "status": "failed", "message": "Registration failed" });
        }
    }

    // Email verification
    static verifyEmail = async (req, res) => {
        const token = req.query.token;

        if (!token) {
            return res.status(400).json({ "status": "failed", "message": "No token provided" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const user = await User.findById(decoded.userID);

            if (!user) {
                return res.status(400).json({ "status": "failed", "message": "Invalid token" });
            }

            user.is_verified = true;
            user.email_verification_token = undefined; // Clear the token if stored
            await user.save();

            // Redirect or show a success message
            res.status(200).json({ "status": "success", "message": "Email verified successfully" });

            // res.redirect(`${process.env.CLIENT_URL}/verify-email`);
        } catch (error) {
            console.error(error);
            res.status(500).json({ "status": "failed", "message": "Unable to verify email" });
        }
    }

    // User login
    static userLogin = async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ "status": "failed", "message": "All fields are required!" });
        }

        try {
            const user = await User.findOne({ email: email });
            if (!user) {
                return res.status(404).json({ "status": "failed", "message": "Email does not exist. Please register." });
            }

            if (!user.is_verified) {
                return res.status(403).json({ "status": "failed", "message": "Please verify your email before logging in." });
            }

            const isMatch = await bcrypt.compare(password, user.password_hash);
            if (!isMatch) {
                return res.status(400).json({ "status": "failed", "message": "Password or Email does not match!" });
            }

            const token = jwt.sign({ userID: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "10h" });
            res.json({ "status": "Success", "message": "Login successfully", "token": token, "role": user.role });
        } catch (error) {
            console.error(error);
            res.status(500).json({ "status": "failed", "message": "Unable to login!" });
        }
    }

    // Password reset request
    static forgotPassword = async (req, res) => {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ "status": "failed", "message": "Email is required!" });
        }

        try {
            const user = await User.findOne({ email: email });
            if (!user) {
                return res.status(404).json({ "status": "failed", "message": "Email does not exist. Please register." });
            }

            const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
            const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${token}`;

            await transporter.sendMail({
                to: user.email,
                subject: 'Password Reset',
                html: `<h2>Reset your password</h2><p>Click the link below to reset your password:</p><a href="${resetLink}">Reset Password</a>`
            });

            res.json({ "status": "Success", "message": "Password reset link sent to your email" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ "status": "failed", "message": "Unable to send password reset link" });
        }
    };

    // Reset password
    static resetPassword = async (req, res) => {
        const { password, password_confirmation } = req.body;
        const token = req.query.token;

        if (!password || !password_confirmation) {
            return res.status(400).json({ "status": "failed", "message": "All fields are required!" });
        }

        if (password !== password_confirmation) {
            return res.status(400).json({ "status": "failed", "message": "Password and Password Confirmation do not match!" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const user = await User.findById(decoded.userID);

            if (!user) {
                return res.status(400).json({ "status": "failed", "message": "Invalid token" });
            }

            const salt = await bcrypt.genSalt(10);
            user.password_hash = await bcrypt.hash(password, salt);
            await user.save();

            res.json({ "status": "Success", "message": "Password reset successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ "status": "failed", "message": "Unable to reset password" });
        }
    }
}

export default UserController;
