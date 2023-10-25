




var header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { 
      header.style.backdropFilter = 'saturate(180%) blur(20px)';
      header.style.background = 'rgba(251, 251, 253, .8)';
      header.style.transition = 'all 0.5s ease-in-out';
    //   text.style.color = 'black';
    } else {
      header.style.position = 'sticky';
      
    }
  });

  // var header = document.querySelector("header");
  // gsap.to("header",{
  //   backgroundColor: "rgba(251, 251, 253, .8)",
  //   backdropFilter: "saturate(180%) blur(20px)"
  // })


  var text = document.querySelector(".text");

  gsap.from(text,{
    y:-100,
    opacity:0,
    stagger:1,
    // delay:1,
    scrollTrigger:{
      trigger:(".slider"),
      scroller:("body"),
      start:"top 30%",
      end:"top -20%",
      scrub:true,

    }
  })
  var text1 = document.querySelector(".text1");

  gsap.from(text1,{
    y:-100,
    opacity:0,
    stagger:1,
    // delay:1,
    scrollTrigger:{
      trigger:(".slider"),
      scroller:("body"),
      start:"top 30%",
      end:"top -20%",
      scrub:true,

    }
  })
  var text2 = document.querySelector(".text2");

  gsap.from(text2,{
    y:-100,
    opacity:0,
    stagger:1,
    delay:1,
    scrollTrigger:{
      trigger:(".slider"),
      scroller:("body"),
      start:"top 30%",
      end:"top -20%",
      scrub:true,

    }
  })


  var box1 = document.querySelector(".box1");
  var box2 = document.querySelector(".box2");
  var box3 = document.querySelector(".box3");


  var slide = 0;

  setInterval(() => {
    if(slide==0){
      box2.style.opacity = "1";
      box1.style.opacity = "0";
      slide = 1;
    }
    else if(slide==1){
      box3.style.opacity = "1";
      box2.style.opacity = "0";
      slide = 2;
    }
    else if(slide==2){
      box1.style.opacity = "1";
      box3.style.opacity = "0";
      slide = 0;
    }
    // else{
    //   box2.style.opacity = "1";
    //   box1.style.opacity = "0";
    //   slide = 1;
    // }
  }, 3500);