function burgerAnimation () {

}

function navShow () {
    $('.header').toggleClass('header--active');
    $('.header__nav').toggleClass('header__nav--visible');
}







$('.burger').on('click', function () {
    // console.log('klik');
    navShow();
});

