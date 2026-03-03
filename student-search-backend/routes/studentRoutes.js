const QRCode = require("qrcode");

router.post("/add", async (req, res) => {
  try {
    const { rollNo, name, branch, year, email, phone, cgpa } = req.body;

    // Create profile URL (FRONTEND URL)
    const profileURL = `https://your-frontend.vercel.app/student/${rollNo}`;

    // Generate QR code as base64
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