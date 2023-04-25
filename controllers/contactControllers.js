const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels");

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    req.status(400);
    throw new Error(contact);
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json({ message: "Create Contact" });
});

//@desc Get contacts
//@route GET /api/contacts/:id
//@access public

const getoneContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Update contacts
//@route PUT /api/contacts
//@access public

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json( updatedContact );
});

//@desc DELETE contacts
//@route DELETE /api/contacts
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.findByIdAndRemove(
    req.params.id,
    req.body
  )
  res.status(200).json(deletecontact);
});

module.exports = {
  getContact,
  createContact,
  updateContact,
  getoneContact,
  deleteContact,
 
};
