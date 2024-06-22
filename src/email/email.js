const nodemailer = require("nodemailer");




const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});


contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

const sendEmail = (mail) =>{

contactEmail.sendMail(mail, (error) => {
  if (error) {
    // console.log(error);
    res.status(500).send('Error sending email');
  } else {
    res.status(200).send('Email sent successfully');
  }
});

}


module.exports = sendEmail;