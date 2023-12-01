import axios from "axios";
import { logout } from "./shared/utilis/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 2000,
});
// attach token when login and resgister user
// apiClient.interceptors.response.use((config) => {
//   const userDetails = localStorage.getItem("user");

//   if (userDetails) {
//     const { token } = JSON.parse(userDetails);
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   }
// });

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const { token } = JSON.parse(userDetails);
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// public routes

//   login user
export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
//  register user
export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// secure route

const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;
  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
