$(function(){
    $('#nav-placeholder').load('nav.html');
})

let animation = bodymovin.loadAnimation({
    container: document.getElementById('logo'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'data.json'
})

$('#logo-container').click(function () {
    $('html, body').animate({
      scrollTop: $('#homepage-part1').offset().top
    }, 800)
})

$('#arrow-container').click(function () {
    let vid = document.querySelector('#video')
    vid.play()
})

$('body').on('click', '#hamburger-container', function() {
    $("#hamburger-container").toggleClass('active')
    $("#menu").toggleClass('active')
    $("#fade-background").toggleClass('active')
    switch (window.location.pathname.split("/").pop()) {
        case 'index.html':
        case '':
            currentPage = 'menu-item1'
            $('#menu-item1').css('color', 'var(--color-blue)')
            break;
        case 'work.html':
            currentPage = 'menu-item2'
            $('#menu-item2').css('color', 'var(--color-blue)')
            break;
        case 'about.html':
            currentPage = 'menu-item3'
            $('#menu-item3').css('color', 'var(--color-blue)')
            break;
        case 'contact.html':
            currentPage = 'menu-item4'
            $('#menu-item4').css('color', 'var(--color-blue)')
            break;
    }
});

let itemOpen = false
let timer
let currentPage
$('body').on('mouseenter', 'li', function(e) {
    timer = setTimeout(function () {
        if (!itemOpen && e.target.id !== currentPage) {
            itemOpen = true
            $(e.target).toggleClass('active')
            $(e.target).siblings('a').fadeIn("500")
            itemOpen = false
        }
    }, 200)
}).on('mouseleave', 'li', function(e){
    clearTimeout(timer)
    if(!itemOpen) {
        itemOpen = true
        $('.menu-items').removeClass('active')
        $('.menu-hidden-items').fadeOut('500')
        itemOpen = false
    }
})

$('#arrow-container').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#homepage-part2').offset().top
    }, 800);
})

$('#video-credits').click(function () {
    $('#video-credits').toggleClass('active')
    $('#drop-down-icon').toggleClass('active')
    $('#drop-down-icon:after').toggleClass('active')
    if ($('#hidden-credits').is(':visible')) {
        $('#hidden-credits').fadeOut(300)
    } else {
        $('#hidden-credits').fadeIn(900)
    }
})

