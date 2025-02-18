window.addEventListener('DOMContentLoaded', function () {

    $('#section01 .title').addClass('on')
    $('#section01 .part2_bg').addClass('on')
    $('#section01 .part2').addClass('on')
    $('#section01 .part2_title').addClass('on')

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >= 4800 && scrollTop <= 6500){
            $('#section02 .se2_subtitle1').addClass('on')
        } else {
            $('#section02 .se2_subtitle1').removeClass('on')
        }









    });

    // loop
    gsap.to('.rotate',{
        rotate: 360,
        duration: 10, //속도
        ease: 'none', //가속도
        repeat:-1, //횟수
    })

    gsap.to('.actor01',{
        rotate: -10,

        duration: 3, //속도
        yoyo: true,
        ease: 'none', //가속도
        repeat:-1, //횟수
    })

    gsap.to('.actor05',{
        rotate: -15,

        duration: 5, //속도
        yoyo: true,
        ease: 'none', //가속도
        repeat:-1, //횟수
    })

    gsap.to('.actor07',{
        rotate: -12,

        delay: 2,
        yoyo: true,
        duration: 0.8, //속도
        ease: 'none', //가속도
        repeat:-1, //횟수
    })

    gsap.to('.actor08',{
        rotate: -5,

        delay: 2,
        yoyo: true,
        duration: 1, //속도
        ease: 'none', //가속도
        repeat:-1, //횟수
    })



    /*  slide,click event section */

    let move01 = gsap.timeline();
    ScrollTrigger.create({
        animation: move01,
        trigger: "#section01",
        start: "800px top",
        end: "2500px bottom",
        scrub: 1,
    });

    move01.to(".main_img",{x:0},0);
    move01.to(".main_text",{opacity:1, y:0},0);
    move01.to(".main_text02",{opacity:1, y:0},0.8);

    let move02 = gsap.timeline();
    ScrollTrigger.create({
        animation: move02,
        trigger: "#section01",
        start: "1500px top",
        end: "3200px bottom",
        scrub: 1,
    });

    move02.to(".module_title img",{x:0},0);
    move02.to(".module_text01",{opacity:1, y:0},0.4);
    move02.to(".module_01",{x:0},0.4);
    move02.to(".module_02",{x:0},0.4);

    let flex01 = gsap.timeline();
    ScrollTrigger.create({
        animation: flex01,
        trigger: "#section01",
        start: "2400px top",
        end: "3700px bottom",
        scrub: 1,
    });

    flex01.to("#small_box",{width:699},0);
    flex01.to(".module_03",{x:0},0);

    let move03 = gsap.timeline();
    ScrollTrigger.create({
        animation: move03,
        trigger: "#section01",
        start: "2900px top",
        end: "4300px bottom",
        scrub: 1,
    });

    move03.to(".module_text02",{opacity:1, y:0},0);
    move03.to(".module_07",{x:0},0);

    let module01 = gsap.timeline();
    ScrollTrigger.create({
        animation: module01,
        trigger: "#section01",
        start: "4000px top",
        end: "5500px bottom",
        scrub: 1,
    });

    module01.to("#module_box .contents_list01",{x:0},0);
    module01.to("#module_box .contents_list02",{y:0},0.1);
    module01.to("#module_box .contents_list03",{y:0},0.2);
    module01.to("#module_box .contents_list04",{x:0},0.3);

    let move04 = gsap.timeline();
    ScrollTrigger.create({
        animation: move04,
        trigger: "#section02",
        start: "100px top",
        end: "1700px bottom",
        scrub: 1,
    });

    move04.to(".sub_text01",{opacity:1, y:0},0.1);
    move04.to(".sub_img01",{y:0,ease: "bounce.out"},0);

    let move05 = gsap.timeline();
    ScrollTrigger.create({
        animation: move05,
        trigger: "#section02",
        start: "800px top",
        end: "2300px bottom",
        scrub: 1,
    });

    move05.to(".sub_text02",{opacity:1, y:0},0.1);
    move05.to(".sub_img02",{y:0,ease: "bounce.out"},0);
    /*https://greensock.com/docs/v3/Eases*/

// move04.to(".sub_img01",{rotateY:360},0); //회전

    let move06 = gsap.timeline();
    ScrollTrigger.create({
        animation: move06,
        trigger: "#section02",
        start: "1300px top",
        end: "2700px bottom",
        scrub: 1,
    });

    move06.to(".frame",{x:0},0);

    let overflow = gsap.timeline();
    ScrollTrigger.create({
        animation: overflow,
        trigger: "#section02",
        start: "1400px top",
        end: "2800px bottom",
        scrub: 1,
    });

    overflow.to(".gustave img",{y:0},0);
    overflow.to(".gustave_line img",{x:0},0.3);

    let move07 = gsap.timeline();
    ScrollTrigger.create({
        animation: move07,
        trigger: "#section02",
        start: "1800px top",
        end: "3300px bottom",
        scrub: 1,
    });

    move07.to(".text_bg01",{opacity:1, y:0},0);
    move07.to(".text_bg02",{opacity:1, y:0},0.2);

    let move08 = gsap.timeline();
    ScrollTrigger.create({
        animation: move08,
        trigger: "#section02",
        start: "2000px top",
        end: "3800px bottom",
        scrub: 1,
    });

    move08.to(".module_01",{y:30},0.5);
    move08.to(".module_02",{y:100},0.3);
    move08.to(".module_03",{y:200},0);

    let overflow02 = gsap.timeline();
    ScrollTrigger.create({
        animation: overflow02,
        trigger: "#section02",
        start: "3000px top",
        end: "4400px bottom",
        scrub: 1,
    });

    overflow02.to(".murder img",{y:0},0);
    overflow02.to(".murder_line img",{x:0},0.3);






























})


