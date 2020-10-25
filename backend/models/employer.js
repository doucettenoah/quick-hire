const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const employerSchema = mongoose.Schema({
  companyName: {type: String, required: true},
  phone: {type: String},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

employerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Employer', employerSchema);
