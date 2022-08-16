const mongoose = require('mongoose');

const { Schema } = mongoose;

const catMenuItemSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: {type:String},
  category: {type:String},
  created_at: { type: Date, default: Date.now, immutable: true },
  updated_at: { type: Date },
}, { versionKey: false });

const CatMenuItem = mongoose.model('CatMenuItem', catMenuItemSchema);

module.exports = CatMenuItem;