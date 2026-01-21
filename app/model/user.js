module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  return mongoose.model(
    "User",
    new Schema({
      username: String,
      password: String,
    }),
  );
};
