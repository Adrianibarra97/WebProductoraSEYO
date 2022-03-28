// HEADER: 

window.onscroll = function() {scrollHeader()}

function scrollHeader() {
    let header  = document.getElementById('header');
    if(document.documentElement.scrollTop > 100) {
        header.style.background = "rgba(0, 0, 0, 0.2)";
    }else {
        header.style.background = "transparent";
    }
}

function menuResponsive() {
    let status = document.getElementById("nav_responsive").style.display;
    if(status == "none") {
        document.getElementById("nav_responsive").style.display = "block";
    }else {
        document.getElementById("nav_responsive").style.display = "none";
    }
}


if (screen.width >= 650) {
    document.getElementById("nav_responsive").id = "nav";
    let header = document.getElementById("header");
    let button1 = document.getElementById("button1");
    let nav = document.getElementById("nav");
    let button2 = document.getElementById("button2");
    header.removeChild(button1);
    nav.removeChild(button2);
    if (screen.width >= 900) document.getElementById("nav").style.left = "50%";
}


function beforeNavOption(childNumber) {
    let i = 1;
    headerSelectionNumber = childNumber;
    while (i < 7) {
        let element = document.getElementById("a" + i);
        element.style.setProperty('--bg-display', 'none');
        i++;
    }
    let element = document.getElementById("a"+childNumber);
    element.style.setProperty('--bg-display', 'block');
}

// MAIN: 

var i = 0;
var heightDevice = screen.height + "px";
var widthDevice = screen.width + "px";
var lenBanner = [0, 100, 200, 300, 400, 500];
var Interval = 3000;
var positionImage = 1;
var slider = document.getElementById("conteinerBanner");

window.addEventListener("resize", function() {
    heightDevice = screen.height + "px";
    widthDevice = screen.width + "px";
});

slider.style.height = heightDevice;
slider.style.width = widthDevice;


while(i < 6) {
    let element = document.getElementById("AdvertisingBanner" + i);
    element.style.height = heightDevice;
    element.style.width = widthDevice;
    element.style.background = "#333";
    element.style.position = "absolute";
    element.style.top = "0px";
    element.style.left = lenBanner[i] + "%";
    element.style.display = "flex";
    element.style.justifyContent = "space-around";
    element.style.zIndex = "0";
    i++;
}

setInterval(function() {
    slides();
}, Interval);

function slides() {
    slider.style.transform = "translate(" + -lenBanner[positionImage] + "%)";
    slider.style.transition = "transform .8s";
    positionImage++;
    
    if(positionImage == lenBanner.length) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            positionImage = 1;
        }, 1500);
    }
    console.log("se ejecuto slides!!");
}

// ASIDE: 


