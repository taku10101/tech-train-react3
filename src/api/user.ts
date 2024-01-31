const url = "http://localhost:3000";
export const createUser = async () => {
  const response = await fetch(`${url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "",
      password: "",
      name: "",
    }),
  });
  return response.json();
};

export const getUser = async () => {
  const response = await fetch(`${url}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const updateUserName = async () => {
  const response = await fetch(`${url}/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "",
    }),
  });
  return response.json();
};

export const uploadUserImage = async () => {
  const response = await fetch(`${url}/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      iconUrl: "",
    }),
  });
  return response.json();
};
