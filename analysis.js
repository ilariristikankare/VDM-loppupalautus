const commentContainer = document.getElementById("allComments");

/* Funktio joka etsii HTML-elementit ja lisää niiden joukkoon uuden tekstiosio, jonka sisältö on sama kuin 
tekstikentällä ja uuden napin. */

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
    alert("Comment field can't be empty.");
  } else commentContainer.appendChild(wrapDiv);
}

/*hakee juuri luodun napin ja lisää sen arvoa painamalla sitä*/

document.getElementById("allComments").addEventListener("click", function (e) {
  const likeBtnValue = e.target.innerHTML;
  e.target.innerHTML =
    likeBtnValue !== "Like" ? Number.parseInt(likeBtnValue) + 1 : 1;
});
