document.addEventListener
    const showmenu = document.getElementById("toggles");
    const menumain = document.getElementById("menumain");
    const hidemenu = document.getElementById("close")
    showmenu.addEventListener("click", () => {
      menumain.style.display = "block";
    });
    hidemenu.addEventListener("click", ()=>{
        menumain.style.display= "none";
    })



    

    function animateCount(element, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(() => {
    current += increment;
    element.textContent = current;
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

const counters = document.querySelectorAll('.expert-text h2');
const duration = 3000; // Duration in milliseconds

counters.forEach((counter) => {
  const start = 0;
  const end = parseInt(counter.textContent);
  animateCount(counter, start, end, duration);
});













window.addEventListener("scroll" , scollEffect)


    function scollEffect(){
        const container = document.querySelectorAll(".animate-show")


        container.forEach(function (container){
          var counterPosition = container.getBoundingClientRect().top
          var screenPosition = window.innerHeight / 1.9
          
          if(counterPosition < screenPosition){
            container.classList.add("show")
          }
        })
    }




function showContent( event ,id){
  event.preventDefault()
  const project = document.getElementsByClassName('project-container')
  for (var i = 0; i < project.length; i++){
    project[i].style.display = "none"
  }
  document.getElementById(id).style.display = "flex"
}


var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var relatedContainer = document.querySelector('.related');

prevButton.addEventListener('click', slidePrev)
nextButton.addEventListener('click', slideNext)

function slidePrev(){
  relatedContainer.scrollBy({
    left: -relatedContainer.offsetWidth,
    behavior: 'smooth'
  
  })
}

function slideNext(){
relatedContainer.scrollBy({
    left: relatedContainer.offsetWidth,
    behavior: 'smooth'
  })
}

const postComment = document.getElementById("postComment");
const names = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const newCommentSection = document.querySelector(".new-comment");

// Load comments from local storage
const comments = JSON.parse(localStorage.getItem("comments")) || [];

// Render existing comments on page load
renderComments();

postComment.addEventListener("click", function(event) {
  event.preventDefault();

  const namesValue = names.value;
  const emailValue = email.value;
  const messageValue = message.value;
  const postDate = new Date().toLocaleString();

  const newComment = {
    name: namesValue,
    email: emailValue,
    message: messageValue,
    date: postDate
  };

  comments.push(newComment); // Add new comment to the comments array
  saveCommentsToLocalStorage(); // Save comments to local storage
  renderComments(); // Render comments on the page

  names.value = "";
  email.value = "";
  message.value = "";
});

function saveCommentsToLocalStorage() {
  localStorage.setItem("comments", JSON.stringify(comments));
}

function renderComments() {
  newCommentSection.innerHTML = ""; // Clear existing comments

  comments.forEach(function(comment) {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comments");
    commentElement.innerHTML = `
      <h3>${comment.name}</h3>
      <p>${comment.date}</p>
      <p>${comment.message}</p>
      <p>${comment.email}</p>
    `;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Comment";
    deleteButton.addEventListener("click", function() {
      deleteComment(comment); // Delete the comment from the comments array
      renderComments(); // Render comments on the page after deletion
    });

    commentElement.appendChild(deleteButton); // Append delete button to the comment element
    newCommentSection.appendChild(commentElement); // Append the comment to the comments section
  });
}

function deleteComment(comment) {
  const commentIndex = comments.indexOf(comment);
  if (commentIndex !== -1) {
    comments.splice(commentIndex, 1); // Remove the comment from the comments array
    saveCommentsToLocalStorage(); // Save updated comments to local storage
  }
}
