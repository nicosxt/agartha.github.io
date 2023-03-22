const body = document.querySelector('body');

let hue1, hue2, color1, color2;
let lerpTime = 0;


const animate = () => {

    //LERP COLORs
    lerpTime += 0.001;
    lerpTime %= 1;
    hue1 = lerp(0, 1, lerpTime);
    hue2 = lerp(1, 0, lerpTime);
    color1 = hsvToRgb(hue1, 0.5, 1);
    color2 = hsvToRgb(hue2, 0.5, 1);
    body.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;

    requestAnimationFrame(animate);
}
animate();


function lerp(a, b, t) {
    return a + (b - a) * t;
}

function hsvToRgb(h, s, v) {
    let r, g, b;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
        r = v, g = t, b = p;
        break;
        case 1:
        r = q, g = v, b = p;
        break;
        case 2:
        r = p, g = v, b = t;
        break;
        case 3:
        r = p, g = q, b = v;
        break;
        case 4:
        r = t, g = p, b = v;
        break;
        case 5:
        r = v, g = p, b = q;
        break;
    }
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

function update() {
    requestAnimationFrame(update); // Request the next frame
}

update();