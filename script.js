
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

let a = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
console.log(a);
