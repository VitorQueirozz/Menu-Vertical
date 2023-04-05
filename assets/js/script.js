$(document).ready(function(){
    $(".sub-btn").click(function(){
        $(this).next(".sub-menu").slideToggle()
        $(this).find('.dropdown').toggleClass('rotate')
    })

    $('.menu-btn').click(function(){
        $('.side-bar').addClass('ativo')
    })

    $('.close-btn').click(function(){
        $('.side-bar').removeClass('ativo')
    })

});


/*
let menuBtn = document.querySelector('.menu-btn')

menuBtn.addEventListener('click', function() {
    let sideBar = document.querySelector('.side-bar')
    sideBar.classList.add('ativo')
})

let closeBtn = document.querySelector('.close-btn')

closeBtn.addEventListener('click', function(){
    let sideBar = document.querySelector('.side-bar')
    sideBar.classList.remove('ativo')
})

*/

/*
let dro = document.querySelector('.dropdown')

dro.addEventListener('click', function(){
    dro.classList.toggle('rotate')
})
*/
