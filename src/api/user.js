import { getToken } from "../utils/auth";
const baseURL = "https://railway.bookreview.techtrain.dev";

export const getUser = async () => {
  const token = getToken();
  const response = await fetch(`${baseURL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const updateUser = async (name) => {
  const token = getToken();
  const response = await fetch(`${baseURL}/users`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  });
  return response.json();
};

export const uploadIcon = async (iconUrl) => {
  const token = getToken();
  const response = await fetch(`${baseURL}/icon`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: iconUrl,
  });
  return response.json();
};
