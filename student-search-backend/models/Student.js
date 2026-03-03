const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true },
  name: String,
  branch: String,
  year: String,
  email: String,
  phone: String,
  cgpa: Number,
  qrCode: String
});

module.exports = mongoose.model("Student", studentSchema);
