const AddComment = () => {

  var comment = document.getElementById('comment_id').value;
  var newP = document.createElement("p");
  var content = document.createTextNode(comment);
  newP.appendChild(content);
  document.getElementById('div_id').appendChild(newP);

};