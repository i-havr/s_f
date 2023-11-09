import axios from "axios";

import { FormInputs } from "@/components/Form/Form.props";

// axios.defaults.baseURL = "https://63df862d8b24964ae0ef2a08.mockapi.io";
axios.defaults.baseURL = "http://localhost:4000";

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Token ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerUser = async (credentials: FormInputs) => {
  const { userName, userEmail, userPassword } = credentials;

  const body = {
    user: { username: userName, email: userEmail, password: userPassword },
  };

  const { data } = await axios.post("/users/signup", body);
  token.set(data.user.token);

  return data.user;
};

export const loginUser = async (credentials: FormInputs) => {
  const { userEmail, userPassword } = credentials;

  const body = {
    user: { email: userEmail, password: userPassword },
  };

  const { data } = await axios.post("/users/login", body);
  token.set(data.user.token);

  return data.user;
};

export const getCurrentUser = async () => {
  const { data } = await axios.get("user");

  console.log(data.user);
  return data.user;
};

// export const getUsers = async (limit: number, page = 1) => {
//   const response = await axios.get("/users", {
//     params: {
//       limit,
//       page,
//     },
//   });
//   return response.data;
// };

// export const editFollowing = async (id, body) => {
//   const response = await axios.put(`/users/${id}`, body);
//   return response.data;
// };
