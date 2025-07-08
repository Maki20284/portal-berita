const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const artikelRoutes = require("./routes/artikelRoutes");

const app = express();
app.use(cors());

app.use("/api/artikel", artikelRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));