window.addEventListener('DOMContentLoaded', function () {


    $('#section01 .bg_text').addClass('on')
    $('#section01 .mockup01').addClass('on')


    const video01 = document.querySelector('#scrapbook_video')
    const video02 = document.querySelector('#upload_video')

    /* scroll event section */
    container.addListener((e) => {


        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if (scrollTop >= 400 && scrollTop <= 2200) {
            $('#section01 .mockup02').addClass('on')
        } else {
            $('#section01 .mockup02').removeClass('on')
        }

        if (scrollTop >= 7800 && scrollTop <= 8200){


        } else {


        }


        if (scrollTop >= 5000 && scrollTop <= 6600) {
            $('#section01 .plus').addClass('on')
            $('#section01 .plus_eng').addClass('on')
        } else {
            $('#section01 .plus').removeClass('on')
            $('#section01 .plus_eng').removeClass('on')
        }

        if (scrollTop >= 11000 && scrollTop <= 13000) {
            $('#section02 .journeymap_feeling img').addClass('on')
        } else {
            $('#section02 .journeymap_feeling img').removeClass('on')
        }

        if (scrollTop >= 12100 && scrollTop <= 14000) {
            $('#section02 .tobe').addClass('on')
        } else {
            $('#section02 .tobe').removeClass('on')
        }

        if (scrollTop >= 18100 && scrollTop <= 19100) {
            $('#section02 .hola').addClass('on')
            $('#section02 .weare').addClass('on')
        }

        if (scrollTop >= 18200 && scrollTop <= 19200) {
            $('#section02 .faus').addClass('on')
        }

        if (scrollTop >= 19300 && scrollTop <= 21000) {
            $('#section03 .circle').addClass('on')
            $('#section03 .home_screen').addClass('on')
        }

        if (scrollTop >= 20700 && scrollTop <= 23000) {
            $('#section03 .main_screen').addClass('on')
            $('#section03 .main_screen_text').addClass('on')
        } else {
            $('#section03 .main_screen').removeClass('on')
            $('#section03 .main_screen_text').removeClass('on')
        }

        if (scrollTop >= 21400 && scrollTop <= 22200) {
            $('#section03 .menu').addClass('on')
            $('#section03 .menu_text').addClass('on')
        } else {
            $('#section03 .menu').removeClass('on')
            $('#section03 .menu_text').removeClass('on')
        }

        if (scrollTop >= 24600 && scrollTop <= 25700) {
            $('#section03 .time_img01').addClass('on')
            $('#section03 .time_img02').addClass('on')
            $('#section03 .time_img03').addClass('on')
        } else {
            $('#section03 .time_img01').removeClass('on')
            $('#section03 .time_img02').removeClass('on')
            $('#section03 .time_img03').removeClass('on')
        }

        if (scrollTop >= 26400 && scrollTop <= 29000) {
            $('#section03 .editmode').addClass('on')
        } else {
            $('#section03 .editmode').removeClass('on')
        }

        if (scrollTop >= 28800 && scrollTop <= 30000) {
            $('#section04 .category').addClass('on')
        } else {
            $('#section04 .category').removeClass('on')
        }

        if (scrollTop >= 29300 && scrollTop <= 32000) {
            $('#section04 .category_text1').addClass('on')
        } else {
            $('#section04 .category_text1').removeClass('on')
        }

        if (scrollTop >= 29700 && scrollTop <= 32000) {
            $('#section04 .category_text2').addClass('on')
        } else {
            $('#section04 .category_text2').removeClass('on')

        }
        if (scrollTop >= 31200 && scrollTop <= 34000) {
            $('#section04 .question01').addClass('on')
            $('#section04 .question02').addClass('on')
            $('#section04 .question03').addClass('on')
        } else {
            $('#section04 .question01').removeClass('on')
            $('#section04 .question02').removeClass('on')
            $('#section04 .question03').removeClass('on')
        }

        if (scrollTop >= 32700 && scrollTop <= 34000) {
            $('#section04 .edit_mode').addClass('on')
        } else {
            $('#section04 .edit_mode').removeClass('on')
        }

        if (scrollTop >= 33600 && scrollTop <= 35000) {
            $('#section04 .scrapboard').addClass('on')
        } else {
            $('#section04 .scrapboard').removeClass('on')
        }


        if (scrollTop >= 32200) {
            video01.play();
        }

        if (scrollTop >= 34500) {
            video02.play();
        }


    });


    /*  slide,click event section */
    gsap.to('.ask_mockup', {
        y: 25,

        yoyo: true, //왕복
        repeat: -1, //반복
        duration: 2, //속도
        ease: 'none' //가속도
    })


    let se01_move01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se01_move01,
        trigger: "#section01",
        start: "2300px top",
        end: "3700px bottom",
        scrub: 1,
    });

    se01_move01.to(".text01", {opacity: 1, y: 0}, 0);

    let se01_move02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se01_move02,
        trigger: "#section01",
        start: "3300px top",
        end: "4700px bottom",
        scrub: 1,
    });

    se01_move02.to(".graph01_text", {opacity: 1, y: 0}, 0);

    let se01_move03 = gsap.timeline();
    ScrollTrigger.create({
        animation: se01_move03,
        trigger: "#section01",
        start: "4100px top",
        end: "5500px bottom",
        scrub: 1,
    });

    se01_move03.to(".graph02_text", {opacity: 1, y: 0}, 0);

    let se01_move04 = gsap.timeline();
    ScrollTrigger.create({
        animation: se01_move04,
        trigger: "#section01",
        start: "6000px top",
        end: "7600px bottom",
        scrub: 1,
    });

    se01_move04.to(".user_reserch_content", {opacity: 1, y: 0}, 0);

    let se02_move01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move01,
        trigger: "#section02",
        start: "-400px top",
        end: "1200px bottom",
        scrub: 1,
    });

    se02_move01.to(".persona_box01", {opacity: 1, y: 0}, 0);

    let se02_move02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move02,
        trigger: "#section02",
        start: "-100px top",
        end: "1600px bottom",
        scrub: 1,
    });

    se02_move02.to(".persona_box02", {opacity: 1, y: 0}, 0);

    let se02_move03 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move03,
        trigger: "#section02",
        start: "1300px top",
        end: "2800px bottom",
        scrub: 1,
    });

    se02_move03.to(".journeymap_text", {opacity: 1, y: 0}, 0);


    let se02_move05 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move05,
        trigger: "#section02",
        start: "2600px top",
        end: "4000px bottom",
        scrub: 1,
    });

    se02_move05.to(".asis", {opacity: 1, y: 0}, 0);

    let se02_move07 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move07,
        trigger: "#section02",
        start: "4100px top",
        end: "5500px bottom",
        scrub: 1,
    });

    se02_move07.to(".brand_keyword_text01", {opacity: 1, y: 0}, 0);

    let se02_move08 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move08,
        trigger: "#section02",
        start: "4500px top",
        end: "6000px bottom",
        scrub: 1,
    });

    se02_move08.to(".brand_keyword_text02", {opacity: 1, y: 0}, 0);
    se02_move08.to(".brand_keyword_text03", {opacity: 1, y: 0}, 0.2);

    let se02_move09 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move09,
        trigger: "#section02",
        start: "5800px top",
        end: "7100px bottom",
        scrub: 1,
    });

    se02_move09.to(".flow_chart_graph", {opacity: 1, y: 0, filter: 'blur(0px)'}, 0);

    let se02_move10 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move10,
        trigger: "#section02",
        start: "7100px top",
        end: "8800px bottom",
        scrub: 1,
    });

    se02_move10.to(".color01", {opacity: 1, x: 0}, 0);
    se02_move10.to(".color02", {opacity: 1, x: 0}, 0.8);

    let se02_move11 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move11,
        trigger: "#section02",
        start: "8000px top",
        end: "9100px bottom",
        scrub: 1,
    });

    se02_move11.to(".color03", {opacity: 1, x: 0}, 0);

    let se02_move12 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move12,
        trigger: "#section02",
        start: "8100px top",
        end: "9500px bottom",
        scrub: 1,
    });

    se02_move12.to(".typography_text", {opacity: 1, y: 0}, 0);

    let se03_move1 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move1,
        trigger: "#section03",
        start: "400px top",
        end: "1800px bottom",
        scrub: 1,
    });

    se03_move1.to(".home_screen_text", {opacity: 1, y: 0}, 0);

    let se03_move2 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move2,
        trigger: "#section03",
        start: "2600px top",
        end: "3900px bottom",
        scrub: 1,
    });

    se03_move2.to(".magagine_subscribe", {opacity: 1, y: 0}, 0);

    let se03_move3 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move3,
        trigger: "#section03",
        start: "3800px top",
        end: "5100px bottom",
        scrub: 1,
    });

    se03_move3.to(".bottom_text", {opacity: 1, x: 0}, 0);

    let se03_move4 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move4,
        trigger: "#section03",
        start: "5600px top",
        end: "7000px bottom",
        scrub: 1,
    });

    se03_move4.to(".timeline", {opacity: 1, x: 0}, 0);

    let se03_move5 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move5,
        trigger: "#section03",
        start: "6400px top",
        end: "7700px bottom",
        scrub: 1,
    });

    se03_move5.to(".like", {opacity: 1, x: 0}, 0);

    let se03_move6 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move6,
        trigger: "#section03",
        start: "7900px top",
        end: "9200px bottom",
        scrub: 1,
    });

    se03_move6.to(".mypage", {opacity: 1, x: 0}, 0);


    let se04_move1 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move1,
        trigger: "#section04",
        start: "1500px top",
        end: "2800px bottom",
        scrub: 1,
    });

    se04_move1.to(".ask_ai", {opacity: 1, y: 0}, 0);

    let se04_move2 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move2,
        trigger: "#section04",
        start: "3000px top",
        end: "4300px bottom",
        scrub: 1,
    });

    se04_move2.to(".scrapbook", {opacity: 1, x: 0}, 0);

    let se04_move3 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move3,
        trigger: "#section04",
        start: "5300px top",
        end: "6600px bottom",
        scrub: 1,
    });

    se04_move3.to(".upload", {opacity: 1, y: 0}, 0);

    /*
        let se04_move3 = gsap.timeline();
        ScrollTrigger.create({
            animation: se04_move3,
            trigger: "#section04",
            start: "3000px top",
            end: "4500px bottom",
            scrub: 1,
        });

        se04_move3.to(".edit_mode", {opacity: 1, y: 0, filter:'blur(0px)'}, 0);
    */


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 35,
        speed: 1230, //슬라이드가 들어오는 속도
        loop: true,
        // autoplay: {
        //     delay: 1800, //슬라이드가 자리에서 기다리는 속도
        //     disableOnInteraction: false,
        // },
    });




















})


