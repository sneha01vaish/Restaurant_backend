// controllers/MenuController.js
import MenuModel from '../models/menu.js';

class MenuController {
  static createSection = async (req, res) => {
    const { section } = req.body;
    const employeeID = req.userID; // assuming userID is retrieved from token

    try {
      const menu = await MenuModel.findOne({ employeeID });
      if (menu) {
        // Section already exists
        const sectionExists = menu.dishes.some(dish => dish.section === section);
        if (sectionExists) {
          return res.status(400).send({ message: 'Section already exists!' });
        }
        menu.dishes.push({ section });
        await menu.save();
        res.status(201).send({ message: 'Section added successfully', menu });
      } else {
        const newMenu = new MenuModel({ employeeID, dishes: [{ section }] });
        await newMenu.save();
        res.status(201).send({ message: 'Menu created successfully', menu: newMenu });
      }
    } catch (error) {
      res.status(500).send({ message: 'Error creating section' });
    }
  };

  static addDish = async (req, res) => {
    const { section, name, price } = req.body;
    const employeeID = req.userID;

    try {
      const menu = await MenuModel.findOne({ employeeID });
      if (menu) {
        menu.dishes.push({ section, name, price });
        await menu.save();
        res.status(201).send({ message: 'Dish added successfully', menu });
      } else {
        res.status(404).send({ message: 'Menu not found' });
      }
    } catch (error) {
      res.status(500).send({ message: 'Error adding dish' });
    }
  };

  static deleteDish = async (req, res) => {
    const { dishId } = req.params;
    const employeeID = req.userID;

    try {
      const menu = await MenuModel.findOne({ employeeID });
      if (menu) {
        menu.dishes = menu.dishes.filter(dish => dish._id.toString() !== dishId);
        await menu.save();
        res.status(200).send({ message: 'Dish deleted successfully', menu });
      } else {
        res.status(404).send({ message: 'Menu not found' });
      }
    } catch (error) {
      res.status(500).send({ message: 'Error deleting dish' });
    }
  };
}

export default MenuController;
