window.addEventListener('DOMContentLoaded', function () {

    $('#section01 .top_title').addClass('on')
    $('#section01 .part_bg').addClass('on')
    $('#section01 .part05').addClass('on')
    $('#section01 .part_name').addClass('on')


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


    });


    /*  slide,click event section */

    gsap.to('.agatha_bg1 .inner', {
        x: -3600, //이미지 하나 크기만큼

        repeat: -1,
        duration: 40,
        ease: 'none'
    })

    gsap.to('.agatha_bg2 .inner', {
        x: -3600, //이미지 하나 크기만큼

        repeat: -1,
        duration: 40,
        ease: 'none'
    })
    gsap.to('.agatha_bg3 .inner', {
        x: -3600, //이미지 하나 크기만큼

        repeat: -1,
        duration: 40,
        ease: 'none'
    })
    gsap.to('.agatha_bg4 .inner', {
        x: -3600, //이미지 하나 크기만큼

        repeat: -1,
        duration: 40,
        ease: 'none'
    })

    gsap.to('.agatha_bg5 .inner', {
        x: -3600, //이미지 하나 크기만큼

        repeat: -1,
        duration: 40,
        ease: 'none'
    })


    $(".img01").slick({
        dots: false, //navigation
        arrows: false, //arrow
        autoplay: true, // autoplay mode
        autoplaySpeed: 2200, // auto speed(머무는속도)
        pauseOnHover: false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 1000, // speed(넘어가는속도)
        infinite: true, // infinite mode
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable: true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide: 0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,
    });


})


