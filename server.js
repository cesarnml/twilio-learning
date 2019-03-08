const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('OKAY ... I CAN RECEIVE TEXT, bitches!');

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

const PORT = process.env.PORT || 1337;
http.createServer(app).listen(PORT, () => {
  console.log(`Server Listens and Obeys on port ${PORT}`);
});
