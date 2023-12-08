const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: { type: String },
  password: { type: String },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("User", userSchema);

// const mongoose = require("mongoose");

// const schema = mongoose.Schema;

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   username: { type: String },
//   password: { type: String },
//   friends: [{ type: schema.Types.object, ref: "User" }],
// });

// module.exports = mongoose.model("User", userSchema);
