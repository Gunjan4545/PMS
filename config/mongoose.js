// requiring the library
const mongoose = require("mongoose");

//connecting to the database
mongoose.connect(
 
  // "mongodb+srv://admin:admin123@cluster0.ljmczch.mongodb.net/?retryWrites=true&w=majority"
  
"mongodb+srv://bhaveshc1509:wQR7FVGPKIa0nP5d@cluster0.1ggifzf.mongodb.net/mpr?retryWrites=true&w=majority"
  
  // "mongodb://127.0.0.1:27017/mpr"
);

// acquiring the connection to check if it is succesfull
const db = mongoose.connection;

// checking for the error
db.on("error", console.error.bind(console, "error in connecting the database"));

// up and running then print the statement
db.once("open", () => {
  console.log("succesfully connected to database");
});

// exporting the connection
module.exports = db;
