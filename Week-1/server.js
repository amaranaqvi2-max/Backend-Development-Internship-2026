const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Backend Development Internship 2026",
    dateTime: new Date().toISOString(),
    version: "1.0.0"
  });
});

app.get("/student", (req, res) => {
  res.json({
    name: "Amara Naqvi",
    studentId: "IITCP-20459",
    program: "BS Computer Science",
    semester: 6,
    email: "naqviammara7@gmail.com"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});