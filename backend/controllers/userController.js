const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JobSeeker = require("../models/jobSeeker");
const Employer = require("../models/employer");
const { userInfo } = require('os');

exports.createAccount = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then( hash => {
    const jobSeeker = new JobSeeker({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      role: req.body.role,
      appliedJobs: req.body.appliedJobs,
      password: hash
    });

    jobSeeker.save().then( result => {
      res.status(201).json({
        message: 'Job seeker account created',
        result: result
      });
    }).catch( err => {
      res.status(500).json({
        error: {message: 'Invalid athentification credentials'}
      });
    });
  });
}

exports.login = (req, res, next) => {
  let fetchedJobSeeker;
  // checks for the jobSeeker int he db using the email address
  JobSeeker.findOne({ email: req.body.email }).then( jobSeeker => {
    if(!jobSeeker) {
      return res.status(401).json({
        message: 'Job Seeker does not exist'
      });
    }
    fetchedJobSeeker = jobSeeker;
    // compares the hashed user pw in the db with the request pw to check if they both produce the same hash
    return bcrypt.compare(req.body.password, jobSeeker.password);
  }).then( result => {
    if (!result) {
      return res.status(401).json({
        message:'Password does not match'
      });
    }
    const token = jwt.sign(
      { email: fetchedJobSeeker.email, jobSeekerId: fetchedJobSeeker._id},
      process.env.JWT_KEY,
      {expiresIn: '1h'}
    );
    res.status(200).json({
      token: token,
      expiresIn: 3600,
      jobSeekerId: fetchedJobSeeker._id,
      message: 'login successful'
    })
  }).catch( err => {
    console.log('LOGIN ERROR:', err);
    return res.status(401).json({
      message: "Invalid authetication credentials"
    })
  })
}
