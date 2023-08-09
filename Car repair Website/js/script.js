// This script handles the navigation menu toggle and the display of images when buttons are clicked.
// It also updates the background color and text color of the clicked button to make it visually distinct from other buttons.

// Select the navigation links and the menu icon from the HTML.
const navLinks = document.querySelector(".navLinks");
const menuIcon = document.querySelector(".menu-icon");

// Add an event listener to the menu icon to toggle the display of the navigation links when clicked.
menuIcon.addEventListener("click", () => {
  // If the navigation links are currently hidden, display them; otherwise, hide them.
  if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
  } else {
    navLinks.style.display = "none";
  }
});

// Function to handle the click event when a button is clicked.
function showContent(event, id) {
  // Prevent the default behavior of the anchor tags to avoid page reload.
  event.preventDefault();

  // Hide all images with the class "image1" by setting their display style property to "none".
  const service = document.getElementsByClassName("image1");
  for (let i = 0; i < service.length; i++) {
    service[i].style.display = "none";
  }

  // Display the image associated with the clicked button by setting its display style property to "block".
  document.getElementById(id).style.display = "block";

  // Reset the background color and text color of all buttons to the default values by looping through them.
  const button = document.getElementsByClassName("serviceButton");
  for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = "var(--light)";
    button[i].style.color = "var(--secondary)";
  }

  // Select the clicked button using its id and update its background color and text color to custom CSS variables.
  const clickedButton = document.getElementById("btn-" + id);
  clickedButton.style.backgroundColor = "var(--primary)";
  clickedButton.style.color = "white";
}




function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}


function checFormPosition(){
  var form = document.querySelector(".scaleOut")

  if(isElementInViewport(form)){
    form.classList.add("formScale")

    window.removeEventListener('scroll', checFormPosition)
  }
}

window.addEventListener('scroll', checFormPosition)


function slideAnimate(element) {
  var rects = element.getBoundingClientRect();
  return rects.top >= 0 && rects.bottom <= window.innerHeight;
}

function checkPosition() {
  var services = document.querySelectorAll(".overAllClass");

  services.forEach(function (service) {
    if (slideAnimate(service)) {
      service.classList.add("animate");
    }
  });

 
}

window.addEventListener("scroll", checkPosition);
