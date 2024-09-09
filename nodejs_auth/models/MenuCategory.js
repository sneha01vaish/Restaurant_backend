import mongoose from 'mongoose';

// 1.4 Menu Categories Schema
const categorySchema = new mongoose.Schema({
    restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    category_name: { type: String, required: true }
  });

const MenuCategory = mongoose.model('MenuCategory', categorySchema);
export {MenuCategory};