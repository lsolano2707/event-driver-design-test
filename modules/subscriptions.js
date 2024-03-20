const express = require("express");
const router = express.Router();

const { eventEmitter } = require('../helpers/event.helper');
const { USER_CREATOR_EVENT } = require('../constants/event.constant');

(() => {
  eventEmitter.on(USER_CREATOR_EVENT, (data) => {
    // console.log(`event received from subscriptions: ${data}`);
    const user = JSON.parse(data);
    // throw new Error('Error creating the subscription');
    createSubscription(user.name);
  });
})();


function createSubscription(name) {
  console.log(`Subscription created in AWS for ${name}`);
}

module.exports = {
  router,
};
