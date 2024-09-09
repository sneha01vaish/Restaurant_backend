import { Restaurant, MenuItem, MenuCategory, Table, Order } from '../models/User.js';


class RestaurantController {
    // Complete owner profile
    static completeProfile = async (req, res) => {
        const userID = req.userID;
        const { name, address, contact_number, social_media_links, description, type, logo_url } = req.body;

        try {
            const restaurant = await Restaurant.findOneAndUpdate(
                { owner_id: userID },
                { name, address, contact_number, social_media_links, description, type, logo_url },
                { upsert: true, new: true }
            );

            res.send({ "status": "Success", "message": "Profile completed successfully", "restaurant": restaurant });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "failed", "message": "Unable to complete profile" });
        }
    }
    // Add category of dishes
    static addCategory = async (req, res) => {
        const { restaurantID } = req;
        const { category_name } = req.body;

        try {
            const newCategory = new MenuCategory({
                restaurant_id: restaurantID,
                category_name
            });

            await newCategory.save();

            res.status(201).send({ "status": "Success", "message": "Category added successfully", "category": newCategory });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "failed", "message": "Unable to add category" });
        }
    }
    

    // Add a new menu item
    static addMenuItem = async (req, res) => {
        // const { restaurantID } = req.body;
        const { category_id, restaurant_id, item_name, description, price, image_url } = req.body;

        try {
            const newItem = new MenuItem({
                category_id: category_id,
                restaurant_id: restaurant_id,
                item_name: item_name,
                description: description,
                price: price,
                image_url: image_url
            });
            await newItem.save();

            res.status(201).send({ "status": "Success", "message": "Menu item added successfully", "item": newItem });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "failed", "message": "Unable to add menu item" });
        }
    }
    
    // Other methods like updating and deleting menu items...
    // Update Category
static updateCategory = async (req, res) => {
    const { categoryID } = req.params;
    const { category_name } = req.body;

    try {
        const category = await MenuCategory.findByIdAndUpdate(
            categoryID,
            { category_name },
            { new: true }
        );

        res.send({ "status": "Success", "message": "Category updated successfully", "category": category });
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": "failed", "message": "Unable to update category" });
    }
};

// Delete Category
static deleteCategory = async (req, res) => {
    const { categoryID } = req.params;

    try {
        await MenuCategory.findByIdAndDelete(categoryID);
        await MenuItem.deleteMany({ category_id: categoryID });

        res.send({ "status": "Success", "message": "Category and associated items deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": "failed", "message": "Unable to delete category" });
    }
};

// Update Item
    // Update Item (continued)
static updateMenuItem = async (req, res) => {
    const { itemID } = req.params;
    const { item_name, description, price, image_url } = req.body;

    try {
        const item = await MenuItem.findByIdAndUpdate(
            itemID,
            { item_name, description, price, image_url },
            { new: true }
        );

        res.send({ "status": "Success", "message": "Item updated successfully", "item": item });
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": "failed", "message": "Unable to update item" });
    }
};

// Delete Item
static deleteMenuItem = async (req, res) => {
    const { itemID } = req.params;

    try {
        await MenuItem.findByIdAndDelete(itemID);

        res.send({ "status": "Success", "message": "Item deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": "failed", "message": "Unable to delete item" });
    }
};

// Fetch Categories
static getCategories = async (req, res) => {
    try {
        const categories = await MenuCategory.find({ restaurant_id: req.restaurantID });

        res.send({ "status": "Success", "categories": categories });
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": "failed", "message": "Unable to fetch categories" });
    }
};

// Fetch Items for a Category
static getItemsForCategory = async (req, res) => {
    const { categoryID } = req.params;

    try {
        const items = await MenuItem.find({ category_id: categoryID });

        res.send({ "status": "Success", "items": items });
    } catch (error) {
        console.error(error);
        res.status(500).send({ "status": "failed", "message": "Unable to fetch items" });
    }
};

    
    // add table
    static addTable = async (req, res) => {
        const { restaurantID } = req;
        const { table_number, capacity } = req.body;

        try {
            const newTable = new Table({
                restaurant_id: restaurantID,
                table_number,
                capacity
            });

            await newTable.save();

            res.status(201).send({ "status": "Success", "message": "Table added successfully", "table": newTable });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "failed", "message": "Unable to add table" });
        }
    }
// Fetch tables for a restaurant
    static getTables = async (req, res) => {
        const restaurantID = req.restaurantID;

        try {
            const tables = await Table.find({ restaurant_id: restaurantID });
            res.send({ "status": "Success", "tables": tables });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "failed", "message": "Unable to fetch tables" });
        }
    }

    // Fetch orders for a restaurant with table details
    static getOrdersWithTableDetails = async (req, res) => {
        const restaurantID = req.restaurantID;

        try {
            const orders = await Order.find({ restaurant_id: restaurantID })
                .populate('table_id')
                .populate('customer_id')
                .exec();

            res.send({ "status": "Success", "orders": orders });
        } catch (error) {
            console.error(error);
            res.status(500).send({ "status": "failed", "message": "Unable to fetch orders" });
        }
    }
}

export default RestaurantController;
