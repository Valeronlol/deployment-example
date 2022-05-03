const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "testsuperpower@gmail.com",
    pass: "testsuperpower123",
  },
});

exports.emailVerefication = (user) => {
  let message = {
    from: "тестовый тест <testsuperpower@gmail.com>",
    to: user.email,
    subject: "Nodemailer is unicode friendly ✔",
    text: `Привет!
    перейдите по ссылке чтобы продолжить`,
    html: `<b><a>http://localhost:3001/auth/userAct/?id=${user.activationLink}</a><b>`,
  };
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("Error occurred. " + err.message);
      return process.exit(1);
    }
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
};
