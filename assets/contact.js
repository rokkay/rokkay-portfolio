const express = require('express')
const nodemailer = require('nodemailer')
const validator = require('validator')
const xssFilters = require('xss-filters')

const app = express()

app.use(express.json())

// app.get('/', function (req, res) {
//   res.status(405).json({ error: 'sorry!' })
// })

app.post('/', function (req, res) {
  const attributes = ['firstName', 'lastName', 'subject', 'email', 'message']

  sendMail(...attributes.map((n) => req.body[n])).catch(console.error)
  res.status(200).json({ message: 'OH YEAH' })
})
module.exports = {
  path: '/api/contact',
  handler: app,
}

async function sendMail(firstName, lastName, subject, email, message) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // const testAccount = await nodemailer.createTestAccount()

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    requireTLS: true,
    auth: {
      user: 'rayaleonjosecarlos@gmail.com',
      pass: 'Arkano@01', // generated ethereal password
    },
  })
  const info = await transporter.sendMail({
    from: email,
    to: 'rayaleonjosecarlos@gmail.com',
    subject: `${firstName} ${lastName} ha solicitado contacto`,
    text: `${message}. El correo de ${firstName} ${lastName} es: ${email}`,
  })

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
