import { Order, Table } from '../models/User.js';

class DashboardController {
    // Get dashboard data (number of completed and pending orders, etc.)
    static getDashboardData = async (req, res) => {
        const restaurantID = req.restaurantID;

        try {
            const completedOrders = await Order.countDocuments({ restaurant_id: restaurantID, status: 'completed' });
            const pendingOrders = await Order.countDocuments({ restaurant_id: restaurantID, status: 'pending' });

            const orders = await Order.find({ restaurant_id: restaurantID })
                .populate('table_id customer_id')
                .exec();

            res.send({
                "status": "Success",
                "completedOrders": completedOrders,
                "pendingOrders": pendingOrders,
                "orders": orders
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "failed", "message": "Unable to fetch dashboard data" });
        }
    }
}

export default DashboardController;
