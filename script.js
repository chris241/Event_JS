
let e = document.querySelector('footer');
e.addEventListener('click',(function(event){
let i = 1;
console.log("clique", + i);
i++; 
}));

let navParent = document.getElementsByClassName('navbar-toggler')[0];
let navCollapse = document.getElementById('navbarHeader');
navParent.addEventListener('click',function(){
    navCollapse.classList.toggle('collapse');
});

let textCard1 = document.getElementsByClassName('card-text')[0];
let editCard1 = document.querySelector('button.btn.btn-outline-secondary')[0];
console.log(textCard1.innerHTML);
addEventListener('click',function(){
    if(textCard1.style.color === "red"){
        textCard1.style.color = "";
    }
    else{
        textCard1.style.color = "red";
    }
});



let textCard2 = document.getElementsByClassName('card-text')[1];
let editCard2 = document.querySelector('button.btn.btn-outline-secondary')[1];
console.log(textCard2.innerHTML);
addEventListener('click',function(){
    if(textCard2.style.color === "green"){
        textCard2.style.color = "";
    }
    else{
        textCard2.style.color = "green";
    }
});
