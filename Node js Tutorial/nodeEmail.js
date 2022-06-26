var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "s.m.gajera.sg@gmail.com",
    pass: "Gajera@123",
  },
});

var mailOptions = {
  from: "s.m.gajera.sg@gmail.com",
  to: "s.m.gajera@hotmail.com",
  subject: "Sending Email using Node.js",
  text: "Hello World",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
