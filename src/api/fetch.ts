const getContent = (url: string) => {
  return fetch(`http://localhost:8000/api/${url}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/ld+json",
    }),
  });
};

const getConnectedContent = (url: string) => {
  return fetch(`http://localhost:8000/api/${url}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/ld+json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
  });
};

const postContent = (url: string, body: Object) => {
  return fetch(`http://localhost:8000/api/${url}`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/ld+json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
    body: JSON.stringify(body),
  });
};

const putContent = (url: string, body: Object) => {
  return fetch(`http://localhost:8000/api/${url}`, {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/ld+json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
    body: JSON.stringify(body),
  });
};

const patchContent = (url: string, body: Object) => {
  return fetch(`http://localhost:8000/api/${url}`, {
    method: "PATCH",
    headers: new Headers({
      "Content-Type": "application/merge-patch+json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
    body: JSON.stringify(body),
  });
};
