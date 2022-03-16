// var color1HEX = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
// //var color1 = hexToRgb(color1HEX);
// var color2HEX = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
// var color2 = hexToRgb(color2HEX);

// var color1 = 'hsv(100,100,100)';

const body = document.getElementById("a-backgroundbody");

let h1 = 0.8;
let h2 = 0.62;
let color1 = HSVtoRGB(h1, 0.5, 0.8);
let color2 = HSVtoRGB(h2, 0.5, 0.8);
let increment = 0.01;

function setGradient(){
    h1 += increment;
    h2 += increment;
    h1 %= 1;
    h2 %= 1;
    color1 = HSVtoRGB(h1, 0.5, 0.8);
    color2 = HSVtoRGB(h2, 0.5, 0.8);

    let bgColor = "linear-gradient(135deg, " + color1 + "0%,"+ color2 +" 100%)";
    body.style.background = bgColor;
}


//setGradient();

setInterval(setGradient, 100);


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let stringResult = 'rgb(' + parseInt(result[1],16).toString() + ','
        + parseInt(result[2],16).toString() + ','
        + parseInt(result[3],16).toString() + ')';
    return result ? stringResult : null;
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    
    var rgb = 'rgb(' +
    Math.round(r * 255).toString() +','+
    Math.round(g * 255).toString() +','+
    Math.round(b * 255).toString() +')';
    
    return rgb;

};
