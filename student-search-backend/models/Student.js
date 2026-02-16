const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  branch: String,
  year: String,
  email: String,
  phone: String,
  cgpa: Number
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
