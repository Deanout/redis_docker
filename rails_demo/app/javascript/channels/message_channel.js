import consumer from "channels/consumer";

consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    this.perform("speak", {
      message: "I just connected, how's it goin' ya'll?",
    });
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data);
  },
});
