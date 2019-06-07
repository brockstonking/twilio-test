const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');
require('dotenv').config();

const app = express();

const { SERVER_PORT, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;

app.use(cors());
app.use(bodyParser.json());

app.use(express.json());

const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);



// Twilio number is +12085161808

app.post('/api/sendtext', (req, res, next) => {
    const { message, number } = req.body;
    client.messages
  .create({
     body: message,
     from: '+12085161808',
     to: number
   })
  .then(message => console.log(message.sid));
});


app.listen(SERVER_PORT, () => {
    console.log(`Listening in on port ${ SERVER_PORT }`)
})