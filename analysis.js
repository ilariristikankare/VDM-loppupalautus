const commentContainer = document.getElementById("allComments");

function addComment() {
  const textBox = document.createElement("p");
  textBox.className = "comment-text";
  const likeButton = document.createElement("button");
  likeButton.innerHTML = "Like";
  likeButton.className = "like-button";
  const wrapDiv = document.createElement("div");
  wrapDiv.className = "wrapper";
  wrapDiv.style.marginLeft = 0;
  commentText = document.getElementById("newComment").value;
  document.getElementById("newComment").value = "";
  textBox.innerHTML = commentText;
  wrapDiv.append(textBox, likeButton);
  if (commentText === "") {
    alert("Comment field can't be empty");
  } else commentContainer.appendChild(wrapDiv);
}

function hasClass(elem, className) {
  return elem.className.split(" ").indexOf(className) > -1;
}
document.getElementById("allComments").addEventListener("click", function (e) {
  if (hasClass(e.target, "like-button")) {
    const likeBtnValue = e.target.innerHTML;
    e.target.innerHTML =
      likeBtnValue !== "Like" ? Number.parseInt(likeBtnValue) + 1 : 1;
  }
});
