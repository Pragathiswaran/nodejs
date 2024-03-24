var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mpragathiswaran@gmail.com',
    pass: 'uedj wtkx kxef jkny'
  }
});

var mailOptions = {
  from: 'mpragathiswaran@gmail.com',
  to: 'mkm822213@gmail.com , mihaan59@gmail.com',
  subject: 'Sending Email using Node.js by Pragathiswaran',
  text: 'That was too easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
