const express = require('express');
const path = require('path');
require('dotenv').config()
const app = express()
const port = 3001
const nodemailer = require("nodemailer");

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({
  extended: true
}))

app.get('/', function (req, res) {
  const {success, error} = req.query;

  res.render(path.resolve("src/index.ejs"),{success, error})
})

app.post('/message', async function (req, res) {

  
  const {name, email, subject, message} = req.body;

  const transporter = nodemailer.createTransport({
    host: "mail.serce.az",
    port: 465,
    secure: true,
    auth: {
      user: "info@serce.az",
      pass: process.env.Mail_Password,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: email,
    to: "info@serce.az",
    subject: subject,
    text: `
    Website'dan yeni mesaj var!

    Ad: ${name},
    Mesaj: ${message}

    Serce.Az
    `
  };

  const mail = await transporter.sendMail(mailOptions)

  mail.rejected.length > 0 ? res.redirect("/?error=1") : res.redirect("/?success=1")

})

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`)
})
