module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  return mongoose.model('Product', new Schema({
    name: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: Number,
    image: String,
    size: Number,
    about: String,
  }));
};
