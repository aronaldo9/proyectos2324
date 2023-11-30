import { renderPost } from "./src/components/renderPost/renderPost.js";
import { createPostApi } from "./src/helper/createPostApi.js";
import { getPostApi } from "./src/helper/getPostApi.js";

//globales
const URL = `${import.meta.env.VITE_URL_API}/posts`;
const postList = document.querySelector(".posts-list");
const addPostForm = document.querySelector(".add-post-form");
let postData = {};
const titlePost = document.querySelector("#title-post");
const contentPost = document.querySelector("#content-post");
const deleteBtn = document.querySelectorAll("#delete-btn");

function init() {
  //Get the post
  getPostApi(URL, (data) => renderPost(postList, data));
}

addPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  postData = {
    title: titlePost.value,
    content: contentPost.value,
  };

  createPostApi(URL, postData, (data) => {
    const arrayPost = [];
    arrayPost.push(data);
    renderPost(postList, arrayPost);
  });
});

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // const id =
});

//inicio de la app

document.addEventListener("DOMContentLoaded", init);
