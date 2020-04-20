const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const from = "AdoptujZwierzaka.pl <info@adopotujzwierzaka.pl>";

const sendActivationEmail = (firstName, email) => {
  const message = {
    from,
    to: email,
    subject: "AdoptujZwierzaka.pl - aktywacja konta",
    html: `
    <h3>AdoptujZwierzaka.pl - aktywacja konta</h3>
    <a style="background: red;" href="http://localhost:3000">Aktywuj</a>
    `
  };

  transporter.sendMail(message, () => console.log("Mail sent"));
};

export { sendActivationEmail };
