require("dotenv").config();
var twilio = require("twilio");

var client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

client.messages
  .create({
    body: "Hello from Node",
    to: "+14703380182", // your real-world cell number
    from: "+17753838706", // your Twilio phone number
  })
  .catch((err) => console.log("ERR", err))
  .then((message) => console.log(message.sid));
