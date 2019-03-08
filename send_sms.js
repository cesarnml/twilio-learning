require('dotenv').config();

const accountSid = process.env.ACCOUNT_SID;
console.log('accountSid:', accountSid);
const authToken = process.env.AUTH_TOKEN;
console.log('authToken:', authToken);
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: `Elizabeth Warren 2020!!! Boom!`,
    from: '+13236132729',
    to: '+13235526377',
  })
  .then(message => console.log(message));
