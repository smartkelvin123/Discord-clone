import { friendsActions } from "../actions/friendsAction";

const initialState = {
  friends: [],
  pendingFriendsInvitation: [],
  onLineUser: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case friendsActions.SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };
    case friendsActions.SET_PENDING_FRIENDS_INVITATION:
      return {
        ...state,
        pendingFriendsInvitation: action.pendingFriendsInvitation,
      };
    case friendsActions.SET_ONLINE_USER:
      return {
        ...state,
        onLineUser: action.onLineUser,
      };
    default:
      return state;
  }
};

export default reducer;
