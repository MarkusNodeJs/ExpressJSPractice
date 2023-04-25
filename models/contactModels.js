const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add Email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add Phone Number"],
    },
  },
  {
    timestamps: true,
  }
);
// name of the table 
module.exports = mongoose.model("Contact", contactSchema);