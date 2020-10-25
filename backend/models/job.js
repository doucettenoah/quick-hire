const mongoose = require('mongoose');
const jobSchema = mongoose.Schema({
  jobTitle: { type: string, required: true },
  jobDescription: { type: string, required: true },
  salary: { type: number },
  applicants: { type: [String] },
  employer: { type: mongoose.Schema.Types.ObjectId, ref: "Employer", required: true }
});

module.exports = mongoose.model('Job', jobSchema);
