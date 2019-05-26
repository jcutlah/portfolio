document.addEventListener("DOMContentLoaded", function() {
    console.log(document.body.scrollTop);
    var header = document.querySelector('.header-container');
    if (window.scrollY > 0) {
        if (header.classList.contains('sticky')) {
            // do nothing
        } else {
            header.classList.add('sticky');
        }
    } else {
        header.classList.remove("sticky");
    }
    window.addEventListener("scroll", function(){
        // console.log(window.scrollY);
        if (window.scrollY > 0) {
            if (header.classList.contains('sticky')) {
                // do nothing
            } else {
                header.classList.add('sticky');
            }
        } else {
            header.classList.remove("sticky");
        }
        
    })
    var menu = document.querySelector('ul.header-menu');
    var mobileTrigger = document.querySelector('#mobile-trigger');
    var body = document.querySelector('body');
    mobileTrigger.addEventListener('click',function(){
        if (body.className.indexOf('mobile-menu') > -1){
            body.classList.remove('mobile-menu');
        } else {
            body.classList.add('mobile-menu');
        }
    });
});