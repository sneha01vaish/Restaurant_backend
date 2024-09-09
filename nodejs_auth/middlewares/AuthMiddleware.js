import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { Restaurant } from '../models/User.js';

export const authenticateUser = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).send({ "status": "failed", "message": "Access Denied. No Token Provided!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userID = decoded.userID;
        req.role = decoded.role;
        next();
    } catch (error) {
        res.status(400).send({ "status": "failed", "message": "Invalid Token" });
    }
};

export const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.role !== role) {
            return res.status(403).send({ "status": "failed", "message": "Access Denied. You do not have the required role!" });
        }
        next();
    };
};

export const setRestaurantID = async (req, res, next) => {
    try {
        // Use the userID from the authenticated user
        const userID = req.userID;
        
        // Find the restaurant associated with this user
        const restaurant = await Restaurant.findOne({ owner_id: userID });

        if (!restaurant) {
            return res.status(404).send({ "status": "failed", "message": "Restaurant not found for the user" });
        }

        // Attach the restaurant ID to the request object
        req.restaurantID = restaurant._id;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).send({ "status": "failed", "message": "Server error" });
    }
};

export const verifyEmployeeRestaurant = async (req, res, next) => {
    try {
        const { restaurant_id } = req.body;
        const userID = req.userID; // User ID from authentication middleware
  
        // Fetch the user details (you can add additional checks here if needed)
        const user = await User.findById(userID);
  
        if (!user || user.role !== 'employee') {
            return res.status(403).json({
                status: 'failed',
                message: 'Unauthorized access'
            });
        }
  
        // Check if the provided restaurant_id exists in the database
        const restaurant = await Restaurant.findById(restaurant_id);
  
        if (!restaurant) {
            return res.status(404).json({
                status: 'failed',
                message: 'Restaurant not found'
            });
        }
  
        // Proceed if the checks pass
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'failed',
            message: 'Internal server error'
        });
    }
};


