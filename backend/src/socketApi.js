const { io } = require("socket.io-client");

let socket;

export function init() {
  socket = io("http://localhost:3000", {
    transports: ["websocket"]
  });

  socket.on("connect", () => {
    console.log("a user connected");
  });
}

export function send(message) {
  socket.emit("new-message", message);
}

export function subscribeChat(cb) {
  socket.on("receive-message", (message) => {
    console.log(message);
    cb(message);
  });
}

export function messageList(cb) {
  socket.on("message-list", (data) => {
    console.log(data);

    cb(data);
  });
}
