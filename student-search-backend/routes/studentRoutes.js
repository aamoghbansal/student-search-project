const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const QRCode = require("qrcode");

// Add Student with QR
router.post("/add", async (req, res) => {
  try {
    const { rollNo, name, branch, year, email, phone, cgpa } = req.body;

    const profileURL = `https://student-search-project.vercel.app/student/${rollNo}`;

    const qrCode = await QRCode.toDataURL(profileURL);

    const student = new Student({
      rollNo,
      name,
      branch,
      year,
      email,
      phone,
      cgpa,
      qrCode
    });

    await student.save();

    res.status(201).json({ message: "Student added with QR code" });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Student by Roll No
router.get("/:rollNo", async (req, res) => {
  try {
    const student = await Student.findOne({ rollNo: req.params.rollNo });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;