module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  return mongoose.model('Post', new Schema({
    title: String,
    content: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
  }));
};
