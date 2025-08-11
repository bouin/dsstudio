$(document).ready(function() {

    console.log('Made with ❤️‍🔥🔥✨💖 in Bern');

    /*Close navbar collapse on clink on menu item*/
    function closeMenu(){
        var widthme = $(window).width();
        if(widthme<991.9){
            $('.nav-item').on('click',function (){
                $('body').removeClass('modal-open');
                $('.navbar-collapse').removeClass('show');
            })
        }
    }
    closeMenu();

    $('#navbarSupportedContent').on('show.bs.collapse',function (){
        $('body').addClass('modal-open');
    })
    $('#navbarSupportedContent').on('hide.bs.collapse',function (){
        $('body').removeClass('modal-open');
    })

    /*Change color of menu items on dark background*/
    function checkmenu(){
        let menu = $('.from-here').offset().top;
        let footer = $('#footer_kontakt').offset().top-13;
        if(menu >= footer){
            $('.navbar').addClass('new-colors');
        } else {
            $('.navbar').removeClass('new-colors');
        }
    }
    checkmenu();


    /*Smmooth Scroll*/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $(window).on('scroll resize', function (){
        checkmenu();
        closeMenu();
    })

});