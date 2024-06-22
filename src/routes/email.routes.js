const router = require("express").Router();
const sendEmail = require("../email/email");



router.post("/send-email", (req, res) => {

  const {
    name,
    email,
    phone,
    subject,
    date
  } = req.body;


  const mail = {
    from: name,
    to: process.env.USER,
    subject: "לקוח מחכה לך!",
    html: `
      <div style="text-align:end">
      <h1> פרטי לקוח מהאתר</h1>
              <p><span style="font-weight: bold">שם:</span> ${name}</p>
              <p><span style="font-weight: bold">Email:</span> ${email}</p>
              <p><span style="font-weight: bold">מספר טלפון:</span> ${phone}</p>
              <p><span style="font-weight: bold">חבילה:</span> ${subject}</p>
              <p><span style="font-weight: bold">תאריך:</span> ${date}</p>
              <p>MessageP: ${date}</p>
              </div>
              `,
  };
  sendEmail(mail);
  res.status(200).json({
    ok: true,
    message: "The mail has been sent"
  })
});

module.exports = router;