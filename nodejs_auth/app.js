import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
import session from 'express-session';

// import ownerRoutes from './routes/ownerRoutes.js'

const app = express()
const port =process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
//cors policy
app.use(cors())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

//database connection
connectDB(DATABASE_URL)

//JSON
app.use(express.json())

//load Routes
// app.use("/api/owner", ownerRoutes);
app.use("/api/user", userRoutes)
// app.get('/api/user/verify-email', UserController.verifyEmail);


app.listen(port, () => {
    console.log(`Server is listening at  http://localhost:${port}`);
  });

