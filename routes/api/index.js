const router = require("express").Router();
const projectRoutes = require("./projects");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

// Project routes
router.use("/projects", projectRoutes);

router.post("/sendmail", (req, res) => {
  let data = req.body;
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID || "Your ClientID Here", // ClientID
    process.env.CLIENT_SECRET || "Your Client Secret Here", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
  // send mail with defined transport object
  transporter.sendMail(
    {
      from: `"${data.name || `Name`}" <${data.email || "email@example.com"}>`,
      to: "gusrvalenzuela@gmail.com", // list of receivers
      subject: "Email from gusvalenzuela.com",
      text: data.message || "Hello world?", // plain text body
      // html: "<b>Hello world?</b>", // html body
    },
    (err, resp) => {
      err ? res.json(err) : res.json(`success`);

      transporter.close();
    }
  );
});

module.exports = router;
