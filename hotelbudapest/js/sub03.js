window.addEventListener('DOMContentLoaded', function () {

    $('#section01 .top_title').addClass('on')
    $('#section01 .part_bg').addClass('on')
    $('#section01 .part_title01').addClass('on')
    $('#section01 .part_title02').addClass('on')
    $('#section01 .part_title19').addClass('on')

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)







        
        










    });



    /*  slide,click event section */

    let se02_move05 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move05,
        trigger: "#section02",
        start: "2400px top",
        end: "3700px bottom",
        scrub: 1,
    });
    se02_move05.to(".escape img",{y:0},0);
    se02_move05.to(".escape_line img",{x:0},0.3);


    let se02_move06 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move06,
        trigger: "#section02",
        start: "4000px top",
        end: "5300px bottom",
        scrub: 1,
    });
    se02_move06.to(".request img",{y:0},0);
    se02_move06.to(".request_line img",{x:0},0.3);


})


