var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradiant");

color1.addEventListener("input", function() {
    console.log(color1.value);
    changeColors(color1.value,color2.value);
});

color2.addEventListener("input", function() {
    console.log(color2.value);
    changeColors(color1.value,color2.value);
});

function changeColors(c1,c2) {
    body.style.background = 
    "linear-gradient(to right, "
    + c1 
    + ", " 
    + c2
    + ")";
}