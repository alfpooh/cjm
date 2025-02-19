window.addEventListener('DOMContentLoaded', function () {

    /*화면 로드되자마자 보여지는 선택자 구동*/
    $('#section01 .logo01').addClass('on')
    $('#section01 .logo02').addClass('on')
    $('#section01 .logo03').addClass('on')
    $('#section01 .hotel').addClass('on')





    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        /*$('구동이 필요한 해당 선택자').메서드()*/
        /*$(addClass가 필요한 선택자).addClass('on')*/
        if(scrollTop >= 1420 && scrollTop <= 2500){
            $('#section01 .car').addClass('on')
        } else {
            $('#section01 .car').removeClass('on')
        }





        
        










    });



    /*  slide,click event section */

    let move01 = gsap.timeline();
    ScrollTrigger.create({
        animation: move01,
        trigger: "#section01", //기준(해당 section)
        start: "300px top", //기준점, 브라우저
        end: "2400px bottom", //기준점, 브라우저
        scrub: 1,
    });
            //('선택자',{구동},듀레이션(0~1))
    move01.to(".mountain01",{y:0,x:0},0);
    move01.to(".mountain02",{y:0},0);


    let move02 = gsap.timeline();
    ScrollTrigger.create({
        animation: move02,
        trigger: "#section01", //기준(해당 section)
        start: "600px top", //기준점, 브라우저
        end: "2700px bottom", //기준점, 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    move02.to(".house",{x:0,y:0,scale:1},0);
    move02.to(".part1",{y:-200},0);


    let move03 = gsap.timeline();
    ScrollTrigger.create({
        animation: move03,
        trigger: "#section01", //기준(해당 section)
        start: "1000px top", //기준점, 브라우저
        end: "2800px bottom", //기준점, 브라우저
        scrub: 1,
    });

    move03.to(".mountain03",{x:0,y:0},0.1);
    move03.to(".cablecar_tree",{x:0,y:0},0);

    let move04 = gsap.timeline();
    ScrollTrigger.create({
        animation: move04,
        trigger: "#section01", //기준(해당 section)
        start: "800px top", //기준점, 브라우저
        end: "2500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    move04.to(".tree01",{x:0,y:0},0);

 let move05 = gsap.timeline();
    ScrollTrigger.create({
        animation: move05,
        trigger: "#section01", //기준(해당 section)
        start: "1000px top", //기준점, 브라우저
        end: "2800px bottom", //기준점, 브라우저
        scrub: 1,
    });

    move05.to(".point19",{x:0,y:0},0);

    let move06 = gsap.timeline();
    ScrollTrigger.create({
        animation: move06,
        trigger: "#section01", //기준(해당 section)
        start: "1000px top", //기준점, 브라우저
        end: "2800px bottom", //기준점, 브라우저
        scrub: 1,
    });

    move06.to(".left_house",{x:0,y:0,scale:1},0);
    move06.to(".part2",{x:0,y:0},0);


    let move08 = gsap.timeline();
    ScrollTrigger.create({
        animation: move08,
        trigger: "#section01", //기준(해당 section)
        start: "1200px top", //기준점, 브라우저
        end: "2800px bottom", //기준점, 브라우저
        scrub: 1,
    });

    move08.to(".mountain04",{x:0,y:0},0);

    let move09 = gsap.timeline();
    ScrollTrigger.create({
        animation: move09,
        trigger: "#section01", //기준(해당 section)
        start: "2000px top", //기준점, 브라우저
        end: "3700px bottom", //기준점, 브라우저
        scrub: 1,
    });

    move09.to(".mountain06",{x:0,y:0},0);

    let move10 = gsap.timeline();
    ScrollTrigger.create({
        animation: move10,
        trigger: "#section01", //기준(해당 section)
        start: "2400px top", //기준점, 브라우저
        end: "4400px bottom", //기준점, 브라우저
        scrub: 1,
    });

    move10.to(".building",{x:0,y:0,scale:1},0);
    move10.to(".tree03",{x:0,y:0},0.2);

    let move11 = gsap.timeline();
    ScrollTrigger.create({
        animation: move11,
        trigger: "#section01", //기준(해당 section)
        start: "1800px top", //기준점, 브라우저
        end: "3800px bottom", //기준점, 브라우저
        scrub: 1,
    });

    move11.to(".funicular",{x:0,y:0,scale:1},0);

    let move12 = gsap.timeline();
    ScrollTrigger.create({
        animation: move12,
        trigger: "#section01", //기준(해당 section)
        start: "1400px top", //기준점, 브라우저
        end: "3500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    move12.to(".part3",{x:0,y:0},0);

    let move13 = gsap.timeline();
    ScrollTrigger.create({
        animation: move13,
        trigger: "#section01", //기준(해당 section)
        start: "2400px top", //기준점, 브라우저
        end: "4100px bottom", //기준점, 브라우저
        scrub: 1,
    });

    move13.to(".part4",{x:0,y:0},0);

    let move14 = gsap.timeline();
    ScrollTrigger.create({
        animation: move14,
        trigger: "#section01", //기준(해당 section)
        start: "3000px top", //기준점, 브라우저
        end: "4800px bottom", //기준점, 브라우저
        scrub: 1,
    });

    move14.to(".top_box02",{x:0,y:0},0);
    move14.to(".top_box",{x:0,y:0},0.1);

    move14.to(".part5",{x:0,y:0},0.3);

    let move15 = gsap.timeline();
    ScrollTrigger.create({
        animation: move15,
        trigger: "#section01", //기준(해당 section)
        start: "3000px top", //기준점, 브라우저
        end: "5000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    move15.to(".middle_box",{x:0,y:0},0.2);

    let move16 = gsap.timeline();
    ScrollTrigger.create({
        animation: move16,
        trigger: "#section01", //기준(해당 section)
        start: "4200px top", //기준점, 브라우저
        end: "bottom bottom", //기준점, 브라우저
        scrub: 1,
    });

    move16.to(".front_box",{x:0,y:0},0);



































})


