export function createPostApi(url, postData, callback) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Couldn't create post");
      }
    })
    .then((data) => callback(data))
    .catch((error) => console.log("Error creating post", error));
}
