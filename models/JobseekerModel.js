const mongoose = require("mongoose");
/**
 * 
 * const submitData = {
      name: nameInputValue,
      date: dateInputValue,
      phone: phoneInputValue,
      email: emailInputValue,
      addressStreet: addressStreetInputValue,
      addressState: addressStateInputValue,
      addressZipcode: addressZipcodeInputValue,
    };
 * 
 * 
 */
const jobseekerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  addressStreet: {
    type: String,
    required: true,
  },
  addressState: {
    type: String,
    required: true,
  },
  addressState: {
    type: String,
    required: true,
  },
});

const JobseekerModel = mongoose.model("JobseekerModel", jobseekerSchema);

module.exports = JobseekerModel;
