const express = require("express");
const router = express.Router();

const { eventEmitter } = require('../helpers/event.helper');
const { USER_CREATOR_EVENT } = require('../constants/event.constant');

(() => {
  eventEmitter.on(USER_CREATOR_EVENT, (data) => {
    // console.log(`event received from notifications: ${data}`);
    const user = JSON.parse(data);
    // throw new Error('Error sending the email');
    sendWelcomeEmail(user.name);
  });
})();

// Home page route
router.get("/", function (req, res) {
  res.send("Hello notifications - GET");
});

router.post("/", function (req, res) {
  const payload = req.body;
  sendEmail(payload.name);
  res.send(`Notification sent to ${payload.name}`);
});

function sendEmail(name) {
  console.log(`Email sent to ${name}`);
}

function sendWelcomeEmail(name) {
  console.log(`Welcome email sent to ${name}`);
}

module.exports = {
  router,
  sendEmail,
};
