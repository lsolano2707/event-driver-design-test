const express = require("express");
const router = express.Router();

const { eventEmitter } = require('../helpers/event.helper');
const { USER_CREATOR_EVENT } = require('../constants/event.constant');

(() => {
  // eventEmitter.on('test', (data) => {
  //   console.log(`event received from users: ${data}`);
  // });
})();

router.get("/", function (req, res) {
  res.send("Hello users - GET");
});

router.post("/", function (req, res) {
  try {
    const payload = req.body;
    add(payload);
    eventEmitter.emit(USER_CREATOR_EVENT, JSON.stringify(payload));
  } catch (error) {
    console.log('ERROR::', error);
  }

  res.send("new user added");
});

function add(user) {
  console.log('new user added', user);
}

module.exports = {
  router,
};
