const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({
    message: "AI Business Consultant backend is working!"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/api/consultation", (req, res) => {
  const business = req.body;

  console.log("Business received:", business);

  res.json({
    message: "Consultation received successfully!",
    business: business
  });
});