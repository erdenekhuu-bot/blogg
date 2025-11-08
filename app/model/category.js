module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  return mongoose.model('Category', new Schema({
    name: String,
    description: String,
  }));
};
