module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  return mongoose.model('Types', new Schema({
    name: String,
    description: String,
    size: Number,
    product_type: { type: Schema.Types.ObjectId, ref: 'Product' },
  }));
};
