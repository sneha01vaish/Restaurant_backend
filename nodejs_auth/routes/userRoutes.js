import express from 'express';
import UserController from '../controllers/userController.js';
import RestaurantController from '../controllers/RestaurantController.js';
import OrderController from '../controllers/OrderController.js';
import { authenticateUser, authorizeRole, setRestaurantID, verifyEmployeeRestaurant } from '../middlewares/AuthMiddleware.js';
import DashboardController from '../controllers/DashboardController.js';
// import verifyEmployeeRestaurant from '../middlewares/verifyEmployeeRestaurant.js'; // Import the new middleware

const router = express.Router();

// User Routes
router.post('/register', UserController.userRegistration);
router.post('/login', UserController.userLogin);
router.get('/verify-email', UserController.verifyEmail);
router.post('/forgot-password', UserController.forgotPassword);
router.post('/reset-password', UserController.resetPassword);

// Restaurant Routes
router.post('/restaurant/profile', authenticateUser, authorizeRole('owner'), RestaurantController.completeProfile);
router.put('/restaurant/updatecategory/:categoryID', authenticateUser, authorizeRole('owner'), setRestaurantID, RestaurantController.updateCategory);
router.delete('/restaurant/category/:categoryID', authenticateUser, authorizeRole('owner'), setRestaurantID, RestaurantController.deleteCategory);
router.get('/restaurant/categories', authenticateUser, authorizeRole('owner'), setRestaurantID, RestaurantController.getCategories);
router.post('/restaurant/menu', authenticateUser, authorizeRole('owner'), setRestaurantID, RestaurantController.addMenuItem);
router.put('/restaurant/menu/:itemID', authenticateUser, authorizeRole('owner'), setRestaurantID, RestaurantController.updateMenuItem);
router.delete('/restaurant/menu/:itemID', authenticateUser, authorizeRole('owner'), setRestaurantID, RestaurantController.deleteMenuItem);
router.get('/restaurant/menu/:categoryID', authenticateUser, authorizeRole('owner'), setRestaurantID, RestaurantController.getItemsForCategory);
router.post('/restaurant/menu', authenticateUser, authorizeRole('employee'), verifyEmployeeRestaurant, RestaurantController.addMenuItem);
router.get('/restaurant/gettables', authenticateUser, authorizeRole('owner'), setRestaurantID, RestaurantController.getTables);
router.get('/restaurant/orders/details', authenticateUser, authorizeRole('owner'), RestaurantController.getOrdersWithTableDetails);
router.get('/dashboard', authenticateUser, authorizeRole('owner'), DashboardController.getDashboardData);
router.put('/order/completion-time', authenticateUser, authorizeRole('employee'), OrderController.updateOrderCompletionTime);
router.get('/orders/status', authenticateUser, authorizeRole('employee'), OrderController.getOrdersByStatus);
router.post('/restaurant/category', authenticateUser, authorizeRole('owner'), setRestaurantID, RestaurantController.addCategory);
router.post('/restaurant/table', authenticateUser, authorizeRole('owner'),setRestaurantID, RestaurantController.addTable);

// Order Routes
router.post('/order', authenticateUser, authorizeRole('customer'), OrderController.placeOrder);
// Add to Cart Route (Customers)
router.post('/cart/add', authenticateUser, authorizeRole('customer'), OrderController.addToCart);
router.put('/order/status', authenticateUser, authorizeRole('employee'), OrderController.updateOrderStatus);
router.get('/customer/orders', authenticateUser, authorizeRole('customer'), OrderController.getOrdersForCustomer);
router.get('/restaurant/orders', authenticateUser, authorizeRole('employee'), setRestaurantID, OrderController.getOrdersForRestaurant);

export default router;
