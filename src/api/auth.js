const baseURL = "https://railway.bookreview.techtrain.dev";

export const signup = async (email, password) => {
  const response = await fetch(`${baseURL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
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
  return response.json();
};
