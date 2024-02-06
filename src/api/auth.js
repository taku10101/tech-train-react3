const baseURL = "https://railway.bookreview.techtrain.dev";

export const signup = async (name, email, password) => {
  const response = await fetch(`${baseURL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  console.log(response);
  setToken(response.token);
  return response.json();
};

export const signin = async (email, password) => {
  const response = await fetch(`${baseURL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  setToken(response.token);
  return response.json();
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};
