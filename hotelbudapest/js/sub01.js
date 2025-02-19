window.addEventListener('DOMContentLoaded', function () {


    /*화면 로드되자마자 보여지는 선택자 구동*/
    $('#section01 .title').addClass('on')
    $('#section01 .part1_bg').addClass('on')
    $('#section01 .part1').addClass('on')
    $('#section01 .part1_gustave').addClass('on')


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >= 3900 && scrollTop <= 5600){
            $('#section02 .se2_subtitle1').addClass('on')
        } else {
            $('#section02 .se2_subtitle1').removeClass('on')
        }

        if(scrollTop >= 5200 && scrollTop <= 6500){
            $('#section02 .se2_subtitle2').addClass('on')
        } else {
            $('#section02 .se2_subtitle2').removeClass('on')
        }

        if(scrollTop >= 5990 && scrollTop <= 7400){
            $('#section02 .se2_subtitle3').addClass('on')
        } else {
            $('#section02 .se2_subtitle3').removeClass('on')
        }

        // if(scrollTop >= 7000 && scrollTop <= 7200){
        //     $('#section02 .giftbox').addClass('on')
        // } else {
        //     $('#section02 .giftbox').removeClass('on')
        // }
        //
        //
        //
        //
        //
        



    });

    // loop

    gsap.to('.giftbox',{
        rotate:-12,
        x: -250,
        y: 20,

        yoyo: true, // 왕북

        duration: 2, //속도
        ease: 'none', //가속도
        repeat:-1, //횟수
    })

    gsap.to('.rotate',{
        rotate: 360,
        duration: 10, //속도
        ease: 'none', //가속도
        repeat:-1, //횟수
    })

    gsap.to('.actor03',{
        rotate: -20,

        duration: 2, //속도
        yoyo: true,
        ease: 'none', //가속도
        repeat:-1, //횟수
    })

    gsap.to('.actor05',{
        rotate: -12,

        delay: 2,
        duration: 0.8, //속도
        yoyo: true,
        ease: 'none', //가속도
        repeat:-1, //횟수
    })

    gsap.to('.actor08',{
        rotate: -8,

        delay: 2,
        duration: 2, //속도
        yoyo: true,
        ease: 'none', //가속도
        repeat:-1, //횟수
    })


    /*  slide,click event section */

    let se01_main_img = gsap.timeline();
    ScrollTrigger.create({
        animation: se01_main_img,
        trigger: "#section01",
        start: "900px top",
        end: "2200px bottom",
        scrub: 1,
    });

    se01_main_img.to(".about",{opacity:1, y:0},0);
    se01_main_img.to(".section_main_img",{x:0},0);


    let se01_move01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se01_move01,
        trigger: "#section01",
        start: "1300px top",
        end: "2800px bottom",
        scrub: 1,
    });

    se01_move01.to(".se1_text1",{opacity:1, y:0},0);
    se01_move01.to(".book",{x:0, y:0},0.4);

    let se01_move02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se01_move02,
        trigger: "#section01",
        start: "1600px top",
        end: "3000px bottom",
        scrub: 1,
    });

    se01_move02.to(".lover",{x:1, y:0},0);
    se01_move02.to(".se1_text2",{opacity:1, x:1},0);



    let se01_flex = gsap.timeline();
    ScrollTrigger.create({
        animation: se01_flex,
        trigger: "#section01",
        start: "2200px top",
        end: "3500px bottom",
        scrub: 1,
    });

    se01_flex.to("#contents",{width:1055},0);
    se01_flex.to(".se1_img1",{x:0},0);



    let se01_contents2 = gsap.timeline();
    ScrollTrigger.create({
        animation: se01_contents2,
        trigger: "#section01",
        start: "3000px top",
        end: "4500px bottom",
        scrub: 1,
    });

    se01_contents2.to("#contents2 .contents_list01",{x:0},0);
    se01_contents2.to("#contents2 .contents_list02",{x:0},0.1);
    se01_contents2.to("#contents2 .contents_list03",{y:0},0.2);
    se01_contents2.to("#contents2 .contents_list04",{y:0},0.3);
    se01_contents2.to("#contents2 .contents_list05",{y:0},0.4);
    se01_contents2.to("#contents2 .contents_list06",{x:0},0.5);
    se01_contents2.to("#contents2 .contents_list07",{x:0},0.6);





    let se02_overflow = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_overflow,
        trigger: "#section02",
        start: "200px top",
        end: "1500px bottom",
        scrub: 1,
    });

    se02_overflow.to(".se2_img1",{scale: 1.1},0);
    se02_overflow.to(".se2_text1",{x:0, opacity:1},0);

    let se02_overflow2 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_overflow2,
        trigger: "#section02",
        start: "1000px top",
        end: "2600px bottom",
        scrub: 1,
    });

    se02_overflow2.to(".se2_img2",{scale: 1.1},0);
    se02_overflow2.to(".se2_text2",{x:0, opacity:1},0);

    let se02_overflow3 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_overflow3,
        trigger: "#section02",
        start: "1700px top",
        end: "3000px bottom",
        scrub: 1,
    });

    se02_overflow3.to(".se2_img3",{scale: 1.1},0);
    se02_overflow3.to(".se2_text3",{x:0, opacity:1},0);

    let se02_move01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move01,
        trigger: "#section02",
        start: "2200px top",
        end: "3500px bottom",
        scrub: 1,
    });
    se02_move01.to(".mendles img",{y:0},0);
    se02_move01.to(".mendlesline img",{x:0},0.3);

    let se02_move02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move02,
        trigger: "#section02",
        start: "2700px top",
        end: "4200px bottom",
        scrub: 1,
    });
    se02_move02.to(".when_imet_agatha03",{opacity:1, y:0},0.4);
    se02_move02.to(".when_imet_agatha02",{opacity:1, y:0},0.2);
    se02_move02.to(".when_imet_agatha",{opacity:1, y:0},0);

    let se02_move03 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move03,
        trigger: "#section02",
        start: "3000px top",
        end: "4300px bottom",
        scrub: 1,
    });
    se02_move03.to(".se2_img22",{y:0},0);
    se02_move03.to(".se2_img33",{y:0},0.3);

    let se02_move04 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move04,
        trigger: "#section02",
        start: "3400px top",
        end: "4700px bottom",
        scrub: 1,
    });
    se02_move04.to(".se2_img11",{x:0},0);

    let se02_move05 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_move05,
        trigger: "#section02",
        start: "3600px top",
        end: "4900px bottom",
        scrub: 1,
    });
    se02_move05.to(".agatha img",{y:0},0);
    se02_move05.to(".agathaline img",{x:0},0.3);































})


