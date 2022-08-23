let title = document.querySelector("#welcome-text");

title.addEventListener("mouseover", function(){
    title.innerText="Please click on the picture";
    title.style.color="white";
    title.style.size="15px";let darkModeButton = document.querySelector("#dark-mode")
});

let darkModeButton = document.querySelector("#dark-mode");
let theme = document.querySelector("body");


darkModeButton.addEventListener("click", function() {
   if (theme.classList.contains("dark-palette")) {
    theme.classList.remove("dark-palette");
    darkModeButton.innerText="Dark Mode"
   } else {
    theme.classList.add("dark-palette");
    darkModeButton.innerText="Light Mode"
   }
});

// let LightModeButton = document.querySelector(".light-mode");

// LightModeButton.addEventListener("click", function() {
//     body.classList.remove("dark-palette");
// });

let image = document.querySelector("#value");
let text = document.querySelector("#welcome-text")

image.addEventListener("click", function(){
    image.src="./images/come-as-you-are.jpg"
    text.innerText = "Do you think you are health conscious? Keep clicking"

})