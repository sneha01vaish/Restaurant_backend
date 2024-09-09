import mongoose from 'mongoose';

// 1.1 Users Schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password_hash: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone_number: { type: String },
  role: { type: String, enum: ['customer', 'owner', 'staff', 'employee'], required: true },
  is_verified: { type: Boolean, default: false }
}, { timestamps: true });

// 1.2 Restaurants Schema
const restaurantSchema = new mongoose.Schema({
  owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact_number: { type: String, required: true },
  social_media_links: { type: Object },
  description: { type: String },
  type: { type: String, enum: ['restaurant', 'hotel', 'takeaway'], required: true },
  logo_url: { type: String }
});

// 1.3 Tables Schema
const tableSchema = new mongoose.Schema({
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  table_number: { type: String, required: true },
  capacity: { type: Number, required: true }
});

// 1.4 Menu Categories Schema
const categorySchema = new mongoose.Schema({
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  category_name: { type: String, required: true }
});

// 1.5 Menu Items Schema
const itemSchema = new mongoose.Schema({
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuCategory', required: true },
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  item_name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image_url: { type: String }
});

// 1.6 Orders Schema
const orderSchema = new mongoose.Schema({
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  table_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      item_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuItem', // Reference to your MenuItem schema
        required: true,
      },
      item_name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      }
    }
  ],
  order_date: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'preparing', 'served', 'completed', 'cancelled'], required: true },
  total_amount: { type: Number, required: true }
}, { timestamps: true });

// 1.7 Order Items Schema
const orderItemSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});

// 1.8 Payments Schema
const paymentSchema = new mongoose.Schema({
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  payment_method: { type: String, enum: ['credit_card', 'debit_card', 'UPI', 'wallet'], required: true },
  amount: { type: Number, required: true },
  payment_status: { type: String, enum: ['pending', 'completed', 'failed'], required: true },
  payment_date: { type: Date, default: Date.now }
});

// 1.9 QR Codes Schema
const qrCodeSchema = new mongoose.Schema({
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  table_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
  qr_code_url: { type: String, required: true }
});

// Export the models
const User = mongoose.model('User', userSchema);
const Table = mongoose.model('Table', tableSchema);
const MenuItem = mongoose.model('MenuItem', itemSchema);
const Order = mongoose.model('Order', orderSchema);
const OrderItem = mongoose.model('OrderItem', orderItemSchema);
const Payment = mongoose.model('Payment', paymentSchema);
const QRCode = mongoose.model('QRCode', qrCodeSchema);
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const MenuCategory = mongoose.model('MenuCategory', categorySchema);

export { User, Table, MenuItem, Order, OrderItem, Payment, QRCode, Restaurant, MenuCategory};