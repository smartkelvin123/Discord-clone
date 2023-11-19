import * as api from "../../api";

export const authAction = {
  SET_USER_DETAILS: `AUTH.SET_USER_DETAILS`,
};

export const getAction = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
  };
};

const setUserDetails = (userDetails) => ({
  type: authAction.SET_USER_DETAILS,
  payload: userDetails,
});

const login = (userDetails, history) => {
  return async (dispatch) => {
    const response = api.login(userDetails);
    if (response.error) {
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify("userDetails"));
      dispatch(setUserDetails(userDetails));
      history.push("/dashBoard");
    }
  };
};

const register = (userDetails, history) => {
  return async (dispatch) => {
    const response = api.register(userDetails);
    if (response.error) {
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify("userDetails"));
      dispatch(setUserDetails(userDetails));
      history.push("/dashBoard");
    }
  };
};
