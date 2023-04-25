const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(errorHandler)

// routes
app.use("/api/contacts", require("./routes/contactsRoutes"));
app.use("/api/users", require("./routes/userRoutes"));


app.get("/", (req, res) => {
  res.send("Wenn Mark Recopelacion");
});

// app.get("/api/contacts", (req, res) => {
//   res.status(200).json( { message: "Get All contacts"} );
// });



// app listerner
app.listen(port || 5000, () => {
  console.log(`Server is running on port ${port}`);
});
