const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const CORS = require("cors");
const path = require('path');

app.use(express.json());
app.use(cookieParser());

const authenticationRoutes = require("./routes/authenticationRoute");
app.use("/auth", CORS(), authenticationRoutes);
const passengerRoutes = require("./routes/passengerRoute");
app.use("/passenger", CORS(), passengerRoutes);
const adminRoutes = require("./routes/adminRoute");
app.use("/admin", CORS(), adminRoutes);


app.use(express.static(path.join(__dirname, './frontend/build')));
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, './frontend/build/index.html'));
// })

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './frontend/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
