import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;
  socket = io("http://localhost:8000", {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    console.log("succesfully connected with socket io server");
    socket.emit(socket.id);
  });
};
