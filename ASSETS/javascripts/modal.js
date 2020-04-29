//
var modalone = document.getElementsByClassName("modal1")[0];
var govFirst = document.getElementsByClassName("gov-first")[0]

function firstannouncement(){
    modalone.style.display = "block";
};
function closeFirst(){
    modalone.style.display = "none";
};

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modalone.style.display = 'none'
    }
})
//

//
var modaltwo = document.getElementsByClassName("modal2")[0];
var govSecond = document.getElementsByClassName("gov-second")[0]

function secondannouncement(){
    modaltwo.style.display = "block";
};
function closeSecond(){
    modaltwo.style.display = "none";
};

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modaltwo.style.display = 'none'
    }
})
//

//
var modalthree = document.getElementsByClassName("modal3")[0];
var govThird = document.getElementsByClassName("gov-third")[0]

function thirdannouncement(){
    modalthree.style.display = "block";
};
function closeThird(){
    modalthree.style.display = "none";
};

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modalthree.style.display = 'none'
    }
})
//

//
var modalfour = document.getElementsByClassName("modal4")[0];
var govFourth = document.getElementsByClassName("gov-fourth")[0]

function fourthannouncement(){
    modalfour.style.display = "block";
};
function closeFourth(){
    modalfour.style.display = "none";
};

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modalfour.style.display = 'none'
    }
})
//

//
var modalfive = document.getElementsByClassName("modal5")[0];
var govFifth = document.getElementsByClassName("gov-fifth")[0]

function fifthannouncement(){
    modalfive.style.display = "block";
};
function closeFifth(){
    modalfive.style.display = "none";
};

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modalfive.style.display = 'none'
    }
})
//

//
var modalsix = document.getElementsByClassName("modal6")[0];
var govSixth = document.getElementsByClassName("gov-sixth")[0]

function sixthannouncement(){
    modalsix.style.display = "block";
};
function closeSixth(){
    modalsix.style.display = "none";
};

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modalsix.style.display = 'none'
    }
})
//

//
var modalseven = document.getElementsByClassName("modal7")[0];
var govSeventh = document.getElementsByClassName("gov-seventh")[0]

function seventhannouncement(){
    modalseven.style.display = "block";
};
function closeSeventh(){
    modalseven.style.display = "none";
};

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modalseven.style.display = 'none'
    }
})
//


window.onclick = function(e) {
    if (e.target == govFirst) {
        modalone.style.display = "none";
    }
    else if(e.target == govSecond){
        modaltwo.style.display = "none";
    }
    else if(e.target == govThird){
        modalthree.style.display = "none";
    }
    else if(e.target == govFourth){
        modalfour.style.display = "none";
    }
    else if(e.target == govFifth){
        modalfive.style.display = "none";
    }
    else if(e.target == govSixth){
        modalsix.style.display = "none";
    }
    else if(e.target == govSeventh){
        modalseven.style.display = "none";
    }
}