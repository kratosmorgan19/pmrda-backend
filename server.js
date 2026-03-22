const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

// Middleware
app.use(cors());

// Route to serve PDF
app.get("/certificate/:appNo", (req, res) => {
  const appNo = req.params.appNo;

  // Build file path
  const filePath = path.join(__dirname, "pdfs", `${appNo}.pdf`);

  // Check if file exists
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send("Certificate not found ❌");
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
