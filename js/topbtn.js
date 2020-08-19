//$(function () {
//    $(window).scroll(function () {
//        if($(this).scrollTop() > 500){
//            $('.topBtn').fadeIn()
//        } else {
//            $('.topBtn').fadeOut()
//        }
//    });
//});


var topBtn = document.querySelector('.topBtn');

window.addEventListener('scroll', () => {
   if( window.pageYOffset > 400) {
       topBtn.classList.add('active');
   } else {
       topBtn.classList.remove('active')
   }
});







$('.scroll').on('click', function (e) {
    e.preventDefault();
    var selector,
        delay = 1000,
        effect = 'easeInOutQuart';
    // target
    if (this.hash !== '') {
        selector = this.hash;
    } else if ($(this).data('scroll-target')) {
        selector = $(this).data('scroll-target');
    } else {
        return false;
    }
    // delay
    if ($(this).data('scroll-delay')) {
        delay = $(this).data('scroll-delay');
    }
    // effect
    if ($(this).data('scroll-effect')) {
        effect = $(this).data('scroll-effect');
    }
    // call function
    smoothScrolling(selector, delay, effect);
});

// smoothScrolling
function smoothScrolling(selector, delay, effect) {
    $('html, body').stop().animate({
        scrollTop: $(selector).offset().top,
    }, delay, effect);
}