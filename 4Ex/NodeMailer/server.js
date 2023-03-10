const express = require('express')
const router = express()
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");

router.use(bodyParser.urlencoded({ extended: true }));

router.listen(3000, () => console.log('Server fired up at port ', 4000))

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

router.post('/sendMail', async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '9698939924naveen@gmail.com',
      pass: 'xukvaxvgcxieywut'
    }
  });

  let info = await transporter.sendMail({
    from: '9698939924naveen@gmail.com',
    to: "9698939924naveen@gmail.com," + req.body.email,
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

})