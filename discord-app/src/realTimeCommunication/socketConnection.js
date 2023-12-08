import io from "socket.io-client";

import Store from "../store";

import { setPendingFriendInvitations } from "../store/actions/friendsAction";

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
    console.log(socket.id);
  });

  // socekt on friend invitation

  socket.on("friend-invitation", (data) => {
    const { pendingInvitations } = data;
    Store.dispatch(setPendingFriendInvitations(pendingInvitations));
    console.log(data);
  });
};
