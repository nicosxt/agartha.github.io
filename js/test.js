var color1 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
var color2 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

var body = document.getElementById("body");

function setGradient(){
    bogy.style.background = "linear-gradient(135deg, " + color1 + "0%, " + color2 + "100%)";
}


setGradient();

console.log("SET BG");