const slider = document.querySelector(".slider")
const prevButton = document.getElementById("prevBtn")
const nextButton = document.getElementById("nextBtn")

let currentSliderIndex = 0
const images = document.querySelectorAll(".slider img")

function showSideImage (index){
    slider.style.transform = `translateX(-${index * 100/ images.length}%) `
}

prevButton.addEventListener("click", ()=>{
    currentSliderIndex = (currentSliderIndex -1 + images.length) % images.length;
    showSideImage(currentSliderIndex)
})

nextButton.addEventListener("click", ()=>{
    currentSliderIndex = (currentSliderIndex + 1) % images.length
    showSideImage(currentSliderIndex)
})


showSideImage(currentSliderIndex)


//show class function
 function showClass(id){
    const classes = document.getElementsByClassName("class-schedules")
    for (let i = 0; i < classes.length; i++){
        classes[i].style.display="none"
    }

   const elementToshow= document.getElementById(id)
   if(elementToshow){
    elementToshow.style.display="grid"
   
   }

   const classButtons= document.getElementsByClassName("classButtons")
   for (let i = 0; i< classButtons.length; i++){
    classButtons[i].style.backgroundColor="var(--red)"
   }
   
   const classButtonss= document.getElementById("btn-" + id)
  
    classButtonss.style.backgroundColor="var(--black)"
 }













   
// This is a function that prepares and redirects the user to a confirmation page when they click a "Purchase" button.

function redirectToConfirmation(packageId) {
    // Find the HTML container that represents the selected package on the webpage.
    const packageContainer = document.getElementById(packageId);

    // Extract the name of the package from the package container.
    const packageName = packageContainer.querySelector('h2').textContent;

    // Extract the price of the package from the package container.
    const packagePrice = packageContainer.querySelector("h3").textContent;

    // Extract the details of the package from the list inside the package container.
    // This creates an array of details.
    const packageDetail = Array.from(packageContainer.querySelectorAll("li")).map(li => li.textContent);

    // Create an object to hold all the package information, including name, price, and details.
    const packageData = {
        name: packageName,
        price: packagePrice,
        details: packageDetail
    }

    // Encode the package information as a special code (base64 encoding).
    const packageDataEncoded = btoa(JSON.stringify(packageData));

    // Redirect the user to a confirmation page along with the encoded package information as a query parameter in the URL.
    window.location.href = `confirmation.html?package=${packageDataEncoded}`;
}



//scroll effect

 window.addEventListener("scroll", scrollEffect)

 function scrollEffect(){
    const container = document.querySelectorAll(".animate-show")
    container.forEach(function(container){
        const counterPosition = container.getBoundingClientRect().top
        const currentPosition =  window.innerHeight / 1.9


        if(counterPosition < currentPosition){
            container.classList.add("show")
        }
    })
 }



 // CODE FOR THE WHATSAPP CHART ON THE PAGE
document.addEventListener("DOMContentLoaded", function() {
  var gcaMain = new GetChatApp({
    'mobileNumber' : '0558156844',
    'titleMessage' : '👋 Chat with me on WhatsApp!',
    'welcomeMessage': 'Hey there!🙌<br /> <br /> Get in touch with me by typing a message here. It will go straight to my phone! 🔥<br /> <br /> GOLD GYM GHANA',
    'position' : 'left',
    'platforms' : {
        'whatsapp' : true,
        'facebook' : false,
        'email' : false,
        'instagram' : false,
        'telegram' : false,
    },
    'facebookPageId' : '',
    'gcaEmailAddress' : '',
    'gcaEmailSubject' : '',
    'gcaInstagramUsername' : '',
    'gcaTelegramUsername' : '',
  });
});


