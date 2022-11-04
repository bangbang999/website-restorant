let burger = document.querySelector('.burgerMenu');
let sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    sidebar.classList.toggle('active');
});