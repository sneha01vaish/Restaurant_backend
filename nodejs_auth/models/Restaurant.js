import mongoose from 'mongoose';

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

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export { Restaurant };
