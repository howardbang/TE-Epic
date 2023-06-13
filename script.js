document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
  
    var newComment = document.createElement("div");
    newComment.classList.add("comment-container");
  
    var commentHeader = document.createElement("h3");
    commentHeader.textContent = name;
    newComment.appendChild(commentHeader);
  
    var commentText = document.createElement("p");
    commentText.textContent = comment;
    newComment.appendChild(commentText);
  
    document.getElementById("comments").appendChild(newComment);
  
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  });
  