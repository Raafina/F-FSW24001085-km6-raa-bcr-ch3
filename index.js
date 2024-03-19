const express = require("express");
const students = require("./data/cars.json");
const route = require("./route");
const expressLayouts = require("express-ejs-layouts");

/* Initiate express app */
const app = express();
const port = 3000;

// ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.static("public"));

/* Enable request body (json) */
app.use(express.json());

app.use("/", route);

/* In the end of route or after the last route */
app.use("*", (req, res) => {
  res.status(404).json({
    data: null,
    message: "Route not found",
  });
});

// Error middleware
app.use((err, req, res, next) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err.statusCode) {
    statusCode = err.statusCode;
  }
  if (err.message) {
    message = err.message;
  }

  res.status(statusCode).json({
    data: null,
    message,
  });
});

/*  
    Enable static 
    It will enable the public directory can be loaded, if not loaded we can not access the index.html in the public directory
*/

app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
