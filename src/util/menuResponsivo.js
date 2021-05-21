

//$ é usado pra dar referencia ao termo vindo do html
document.addEventListener("DOMContentLoaded", async function (event) {
const $header = document.querySelector('header');
// const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];
//evento scrool
window.addEventListener('scroll', toggleHeader, false);
function toggleHeader() {
    
    //  console.log($logo);
    if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
       
        $header.classList.remove('max-header');
        $header.classList.add('min-header');

        //aqui é pra configurar o tamanho da logo,scroll
        // $logo.classList.remove('max-logo');
        // $logo.classList.add('min-logo');

        //aqui é para configurar alteração do menu no scroll
        $navBar.classList.remove('max-nav');
        $navBar.classList.add('min-nav');
        //mobile
        $menu.firstElementChild.classList.remove('max-hamburguer');
        $menu.firstElementChild.classList.add('min-hamburguer');





    } else if (window.pageYOffset <= 60 && $header.classList.contains('min-header')) {
        $header.classList.add('max-header');
        $header.classList.remove('min-header');

        //aqui é pra configurar o tamanho da logo scroll
        // $logo.classList.add('max-logo');
        // $logo.classList.remove('min-logo');

        //aqui é para configurar alteração do menu no scroll
        $navBar.classList.add('max-nav');
        $navBar.classList.remove('min-nav');
        //mobile
        $menu.firstElementChild.classList.add('max-hamburguer');
        $menu.firstElementChild.classList.remove('min-hamburguer');


    }
    
    //mobile
    $menu.addEventListener('click', toggleMenu, false);
    var isopen = false;
    console.log(isopen);
    function toggleMenu() {
        
        $navBar.classList.toggle('menu-opened');
        if (isopen == false) {
            $navBar.classList.add('menu-opened');
            $menu.firstElementChild.classList.add('close-btn');
            isopen = true;

        } else {
            $navBar.classList.remove('menu-opened');
            $menu.firstElementChild.classList.remove('close-btn');
            isopen = false;
        }
    }
    $navBar.addEventListener('click', navClick, false);
    function navClick(evt) {
        if (evt.target.tagName == 'A') {
            toggleMenu();
        }
    }
    
}
const $intLinks = document.querySelectorAll('.int-link a');


$intLinks.forEach(function (cur) {
    cur.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.scrollTo({
            top: document.querySelector(cur.getAttribute('href')).offsetTop,
            left: 0,
            behavior: 'smooth'
        })

    }, false)
})

});

export default {
    // bind() {
    //     toggleHeader();
    // }
  }