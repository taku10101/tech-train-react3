import { getToken } from "../utils/auth";
const baseURL = "https://railway.bookreview.techtrain.dev";
export const publicBook = () => {
  const response = fetch(`${baseURL}/public/books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const privateBook = (offset) => {
  const token = getToken();
  const response = fetch(`${baseURL}/books`, {
    method: "GET",
    query: {
      offset: offset,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

export const getBookById = (id) => {
  const response = fetch(`${baseURL}/books/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export const createBook = (title, url, detail, review) => {
  const token = getToken();
  const response = fetch(`${baseURL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, url, detail, review }),
  });
  return response.json();
};

export const updateBook = (id, title, url, detail, review) => {
  const token = getToken();
  const response = fetch(`${baseURL}/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, url, detail, review }),
  });
  return response.json();
};
export const deleteBook = (id) => {
  const token = getToken();
  const response = fetch(`${baseURL}/books/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
