// Menu for small screens

const hamburger = document.querySelector(".hamburger");
const dropdownMenuButton = document.querySelector(".dropdown-hamburger");
const navMenu = document.querySelector(".responsive-dropdown-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    dropdownMenuButton.classList.toggle("active");
    navMenu.classList.toggle("active");
})

dropdownMenuButton.addEventListener("click", () => {
    hamburger.classList.remove("active");
    dropdownMenuButton.classList.remove("active");
    navMenu.classList.remove("active");
})

document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    dropdownMenuButton.classList.remove("active");
    navMenu.classList.remove("active");
}))

// onclick function to the logo

var logos = document.getElementsByClassName('logo');
        
        for (var i = 0; i < logos.length; i++) {
            logos[i].onclick = function() {
                // Redirect to the index page
                window.location.href = 'index.html';
            };
        }

// Slides section 6 of Homepage

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 5000);


// Accordion faq page

const accordion = document.getElementsByClassName('contentBx');

for(i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

// Copyright - year update

document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    document.getElementById("copyright-year").innerHTML = "&copy; " + currentYear + " Garden Mantis Landscaping. All Rights Reserved.";
  });



