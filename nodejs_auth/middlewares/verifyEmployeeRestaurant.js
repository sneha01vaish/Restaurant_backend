import { User } from '../models/User.js'; // Adjust path as needed

const verifyEmployeeRestaurant = async (req, res, next) => {
  try {
    const { restaurant_id } = req.body;
    // const userId = req.user._id; // Assuming user is set in req.user by authentication middleware
    // const userID = req.userID;

    // Fetch the user details
    const user = await User.findById(userID).populate('restaurant_id');

    if (!user || user.role !== 'employee') {
      return res.status(403).json({
        status: 'failed',
        message: 'Unauthorized access'
      });
    }

    // Check if the employee's restaurant_id matches the provided restaurant_id
    if (user.restaurant_id.toString() !== restaurant_id) {
      return res.status(403).json({
        status: 'failed',
        message: 'Employee is not associated with the specified restaurant'
      });
    }

    // Proceed if the check passes
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'failed',
      message: 'Internal server error'
    });
  }
};

export default verifyEmployeeRestaurant;
