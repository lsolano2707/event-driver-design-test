const express = require('express');
const app = express();

// Modules
const usersModule = require('./modules/users');
const notificationsModule = require('./modules/notifications');
const subscriptionsModule = require('./modules/subscriptions');

const port = 3000;
app.use(express.json());

app.use('/notifications/', notificationsModule.router);
app.use('/users/', usersModule.router);
app.use('/subscriptions/', subscriptionsModule.router);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
