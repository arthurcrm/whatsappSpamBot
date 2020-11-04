const wa = require("@open-wa/wa-automate");

wa.create().then((client) => start(client));

function start(client) {
  client.onMessage(async (message) => {
    try {
      if (message.body === "Hi") {
        while (true) {
          await client.sendText(
            message.from,
            "👋 Spam bot Created by Arthur Carneiro da Rocha 👋"
          );
        }
      }
    } catch (err) {
      console.log(err);
    }
  });
}
