const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const jobSeekerSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  appliedJobs: { type: [String] },
  role: { type: String, required: true },
  phone: { type: String }
});

jobSeekerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('JobSeeker', jobSeekerSchema);
