const mongoose = require('mongoose');

const { Schema } = mongoose;

const catItemSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type:String },
  photoUrl: String,
  available: {type:Boolean, default: false},
  created_at: { type: Date, default: Date.now, immutable: true },
  updated_at: { type: Date },
}, { versionKey: false });

const CatItem = mongoose.model('CatItem', catItemSchema);

module.exports = CatItem;