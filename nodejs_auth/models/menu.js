// models/Menu.js
import mongoose from 'mongoose';

const DishSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  section: { type: String, required: true }, // e.g., South Indian, Fast Food
});

const MenuSchema = new mongoose.Schema({
  dishes: [DishSchema],
  employeeID: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
});

const MenuModel = mongoose.model('menu', MenuSchema);

export default MenuModel;
