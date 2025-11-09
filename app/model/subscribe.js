

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  return mongoose.model('Subscribe', new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
  }));
};
