// fonctionnalité n°1
let e = document.getElementsByTagName('footer')[0];
var  y = 1;
function clique(){
console.log('cliquer ' +y); 
y= y+1;
}
e.addEventListener('click', clique);
//fonctionnalité n°2
let navParent = document.getElementsByClassName('navbar-toggler')[0];
let navCollapse = document.getElementById('navbarHeader');
navParent.addEventListener('click',function(){
    navCollapse.classList.toggle('collapse');
});

//fonctionnalité n°3
let tCard1 = document.getElementsByClassName('card-text')[0];
let eCard1 = document.querySelector('button.btn.btn-outline-secondary')[0];
console.log(tCard1.innerHTML);
addEventListener('click',function(){
    if(tCard1.style.color === "red"){
        tCard1.style.color = "";
    }
    else{
        tCard1.style.color = "red";
    }
});


//fonctionnalité n°4
let tCard2 = document.getElementsByClassName('card-text')[1];
let eCard2 = document.querySelector('button.btn.btn-outline-secondary')[1];
console.log(tCard2.innerHTML);
addEventListener('click',function(){
    if(tCard2.style.color === "green"){
        tCard2.style.color = "";
    }
    else{
        tCard2.style.color = "green";
    }
});

//fonctionnalité n°5
let a  = document.getElementById("navbarHeader")[0];
let b = document.getElementsByTagName('link')[0];
addEventListener('click', function(){
b.disabled = true;

});
//fonctionnalité n°6
let cardre = document.getElementsByClassName('col-md-4');
let boutons= document.getElementsByClassName('btn-group');
for(let i = 0; i<cardre.length;i++){
    boutons[i].firstElementChild.addEventListener('mouseover', function() {
     if (cardre[i].getElementsByClassName('card-img-top')[0].style.width === "20%") {
       cardre[i].getElementsByClassName('card-img-top')[0].style.width = "100%";
       cardre[i].getElementsByClassName('card-text')[0].style.display = "block";
     } else {
         cardre[i].getElementsByClassName('card-img-top')[0].style.width = "20%";
         cardre[i].getElementsByClassName('card-text')[0].style.display = "none";
       }
   });}

