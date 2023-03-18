'use strict'

function themeSelector(x){
    var cname = document.body.className;

    if(cname == "dark-theme"){
        x.textContent = "Light";
    }
    else{
        x.textContent = "Dark";
    }
}

function themeDefault(x){
    var cname = x.className;

    x.textContent = "Switch";
}

//var switcher = document.querySelector('light-theme');

var xScroll = window.scrollX;

var linkedIn = document.getElementById("linkedIn");
var whatsapp = document.getElementById("whatsapp");
var discord = document.getElementById("discord");

function themeClick(x){
    var cname = document.body.className;

    if(document.body.className == "dark-theme"){
        document.body.className = "light-theme";
        linkedIn.className = "linkedin-light";
        whatsapp.className = "whatsapp-light";
        discord.className = "discord-light";
    }
    else{
        document.body.className = "dark-theme";
        linkedIn.className = "linkedin-dark";
        whatsapp.className = "whatsapp-dark";
        discord.className = "discord-dark";
    }
}

function dwBtnOver(x){
    x.className = "dwBtn-over";
}

function dwBtnOut(x){
    x.className = "dwBtn-out";
}

function goTop(x){
    var cn = x.className;

    if(cn == "top1"){
        x.className = "top2";
    }
    else{
        x.className = "top1";
    }
}

const btnScrollToTop = document.querySelector(".top");

// scroll to top of page when button clicked
btnScrollToTop.addEventListener("click", e => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

// toggle 'scroll to top' based on scroll position
window.addEventListener('scroll', e => {
  btnScrollToTop.className = window.scrollY > 700 ? 'top1' : 'top';
});

function upS(x){
    x.textContent = window.screenY;
}

function openWeb(link){
    window.open(link);
}

var socialbtn = document.getElementById("social-button");

function copyClipboard(text){
    
    navigator.clipboard.writeText(text);

    socialbtn.textContent = "Copiado!";
    socialbtn.className = "social-btn-copied";
}

function showSocialBtn(text, text2, x, y){
    socialbtn.className = text;
    socialbtn.textContent = text2;

    socialbtn.style.left = x;
    socialbtn.style.top = y;
}