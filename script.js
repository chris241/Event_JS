// fonctionnalité n°1
let e = document.querySelector('footer');
e.addEventListener('click',(function(event){
let i = 1;
console.log("clique", + i);
i++; 
}));

//fonctionnalité n°2
let navParent = document.getElementsByClassName('navbar-toggler')[0];
let navCollapse = document.getElementById('navbarHeader');
navParent.addEventListener('click',function(){
    navCollapse.classList.toggle('collapse');
});

//fonctionnalité n°3
let tCard1 = document.getElementsByClassName('card-text')[0];
let eCard1 = document.querySelector('button.btn.btn-outline-secondary')[0];
console.log(textCard1.innerHTML);
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


