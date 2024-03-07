const getContent = async (url: string) => {
  const response = await fetch(`http://localhost/api/${url}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/ld+json",
    }),
  });

  return response.json()
};

const getConnectedContent = async (url: string) => {
  const response = await fetch(`http://localhost/api/${url}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/ld+json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
  });

  return response.json()
};

const postContent = (url: string, body: Object) => {
  return fetch(`http://localhost/api/${url}`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/ld+json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
    body: JSON.stringify(body),
  });
};

const putContent = (url: string, body: Object) => {
  return fetch(`http://localhost/api/${url}`, {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/ld+json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
    body: JSON.stringify(body),
  });
};

const patchContent = (url: string, body: Object) => {
  return fetch(`http://localhost/api/${url}`, {
    method: "PATCH",
    headers: new Headers({
      "Content-Type": "application/merge-patch+json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
    body: JSON.stringify(body),
  });
};

const deleteContent = (url: string) => {
  return fetch(`http://localhost/api/${url}`, {
    method: "DELETE",
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
  });
};

export {deleteContent, getConnectedContent, getContent, patchContent, postContent, putContent}