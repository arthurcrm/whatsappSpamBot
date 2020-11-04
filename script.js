require("dotenv").config();

const wa = require("@open-wa/wa-automate");

wa.create().then((client) => start(client));

function start(client) {
  client.onMessage(async (message) => {
    if (message.body === "eae") {
      while (true) {
        await client.sendText(
          message.from,
          "👋 Spam bot Created by Arthur Carneiro da Rocha 👋"
        );
      }
    } else if (message.body === "Trava") {
      await client.kill();
      wa.create().then((client) => start(client));
    }
  });
}
