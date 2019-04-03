document.addEventListener("DOMContentLoaded", function() {
    console.log(document.body.scrollTop);
    var header = document.querySelector('.header-container');
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
});