function init_carousel() {
    H = +($(window).height() 300px); // or $('.carousel-inner') as you want ...
    W = +($(window).width() 300px);
    $('.carousel-inner').css('height', H + 'px');
}
window.onload = init_carousel;
init_carousel();