const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// 🔹 Add Student
router.post("/add", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: "Student added successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 Search by Roll No
router.get("/:rollno", async (req, res) => {
  try {
    const student = await Student.findOne({ rollNo: req.params.rollno });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
