import { openAlertMessage } from "./alertAction";
import * as api from "../../api";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITATION: "FRIENDS.SET_PENDING_FRIENDS_INVITATION",
  SET_ONLINE_USER: "FRIENDS.SET_ONLINE_USER",
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
    acceptFriendInvation: (data) => dispatch(acceptFriendInvation(data)),
    rejectFriendInvation: (data) => dispatch(rejectFriendInvation(data)),
  };
};
export const setPendingFriendInvitations = (pendingFriendsInvitations) => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITATION,
    payload: pendingFriendsInvitations,
  };
};

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("invation has been passed"));
      closeDialogHandler();
    }
  };
};

const acceptFriendInvation = (data) => {
  return async (dispatch) => {
    const response = await api.acceptFriendInvitation(data);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("invation has been accepted"));
    }
  };
};

const rejectFriendInvation = (data) => {
  return async (dispatch) => {
    const response = await api.rejectFriendInvitation(data);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("invation has been rejected"));
    }
  };
};

export const setFriends = (friends) => {
  return {
    type: friendsActions.SET_FRIENDS,
    payload: friends,
  };
};
