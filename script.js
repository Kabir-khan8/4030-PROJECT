var imagePreview = document.getElementsByClassName("image-preview");
var mainImage = document.getElementById("main-image");

var backgroundImg = new Array("https://muranga.go.ke/wp-content/uploads/2017/06/web-education2.jpg","https://muranga.go.ke/wp-content/uploads/2017/06/web-education.jpg","https://muranga.go.ke/wp-content/uploads/2017/06/scholarship.png","https://upload.wikimedia.org/wikipedia/commons/c/c9/Kenya09-Murang%27a-contesto-COSV.jpg"
);

let i = 0;
function onClickRight(){
  if(i < 3){
    mainImage.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
    imagePreview[i+1].classList.add("active");
    imagePreview[i].classList.remove("active");
  i++;
  }
}

function onClickLeft(){
  if(i>0){
    mainImage.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
    imagePreview[i-1].classList.add("active");
    imagePreview[i].classList.remove("active");
    i--;
  }
}

  //Get the button:
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function
  scrollFunction() {
  if (document.body.scrollTop > 20 ||
  document.documentElement.scrollTop > 20) {
   
  mybutton.style.display = "block";
  } else {
   
  mybutton.style.display
  = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
