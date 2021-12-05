import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, MotionPathPlugin);


gsap.set("#centere path", {autoAlpha: 0});
gsap.set("#backbottome path", {autoAlpha: 0})
gsap.set("#backtope path", {autoAlpha: 0})
gsap.set("#tope path", {autoAlpha: 0})
gsap.set("#bottome path", {autoAlpha: 0})
gsap.set("#slantleftm path", {autoAlpha: 0})
gsap.set("#slantrightm path", {autoAlpha: 0})
gsap.set("#tallrightm path", {autoAlpha: 0})
gsap.set("#tallleftm path", {autoAlpha: 0})


let mainTL = gsap.timeline();

function circle1roll(){

    const tl = gsap.timeline();

    tl.from("#circle1",{duration:.75, rotation: 360, x: 503, transformOrigin: "50% 50%"},"same1")
      .from("#dropshadow",{duration:.75, x: 503},"same1");

    return tl;
}

function circle1bounce(){

    const tl = gsap.timeline();

    tl.to("#circle1",{duration:.25, y: 17})
      .to("#circle1",{duration:.5, y: -147})
      .to("#circle1",{duration:.5, y: 0, ease: "bounce.out"});

    return tl;
}

function insidesparkscale(){

    const tl = gsap.timeline();

    tl.to("#circle1",{duration:0.05, alpha:0},"same2")
      .from("#circle2", {duration:0.05, alpha:0},"same2")
      .from(".inside1",{duration:.75, alpha:0, scaleX:0, scaleY: 0, transformOrigin: "50% 50%", ease: "none"})
      .from(".inside2",{duration:.75, alpha:0, scaleX:0, scaleY: 0, transformOrigin: "50% 50%", ease: "none"}, "-=70%");

    return tl;
}

function outsidesparkscale(){

    const tl = gsap.timeline();

    tl.from(".outside1",{duration:.75, scaleX:0, scaleY: 0, x:0, y:0, transformOrigin: "50% 50%", ease: "none"})
      .from(".outside2",{duration:.75, scaleX:0, scaleY: 0, x:0, y:0, transformOrigin: "50% 50%", ease: "none"}, "-=60%");

    return tl;
}

function extrasparkenter(){

    const tl = gsap.timeline();

    tl.from(".extra1",{duration:.75, scaleX:0, scaleY: 0, x:0, y:0, transformOrigin: "50% 50%", ease: "none"})
      .from(".extra2",{duration:.75, scaleX:0, scaleY: 0, x:0, y:0, transformOrigin: "50% 50%", ease: "none"}, ">-=50%");

    return tl;
}

function sparkrotate(){

    const tl = gsap.timeline();

    tl.to("#morespark",{duration:.5, rotation: 360, transformOrigin: "50% 50%", ease: "none"},"same3")
      .to("#anotherspark",{duration:.5, rotation: -360, transformOrigin: "50% 50%", ease: "none"},"same3")
      .to("#insidespark",{duration:.5, rotation: -360, transformOrigin: "50% 50%", ease: "none"},"same3")
      .to("#outsidespark",{duration:.5, rotation: -360, transformOrigin: "50% 50%", ease: "none"},"same3");

    return tl;
}

function sparkseperate1(){

    const tl = gsap.timeline();

    tl.to("#extraspark1",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path2", align: "#self"}, ease: "none"},"same4")
      .to("#extraspark3",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path4", align: "#self"}, ease: "none"},"same4")
      .to("#extraspark5",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path5", align: "#self"}, ease: "none"},"same4")
      .to("#extraspark7",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path8", align: "#self"}, ease: "none"},"same4")
      .to("#extraspark9",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path10", align: "#self"}, ease: "none"},"same4")
      .to("#extraspark11",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path12", align: "#self"}, ease: "none"},"same4")
      .to("#finalspark1",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path13", align: "#self"}, ease: "none"},"same4")
      .to("#finalspark3",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path15", align: "#self"}, ease: "none"},"same4")
      .to("#finalspark5",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path17", align: "#self"}, ease: "none"},"same4")
      .to("#finalspark7",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path19", align: "#self"}, ease: "none"},"same4")
      .to("#finalspark9",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path21", align: "#self"}, ease: "none"},"same4")
      .to("#finalspark11",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path23", align: "#self"}, ease: "none"},"same4");

    return tl;
}

function sparkseperate2(){

  const tl = gsap.timeline();

  tl.to("#extraspark2",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path3", align: "#self"}, ease: "none"},"same5")
    .to("#extraspark4",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path6", align: "#self"}, ease: "none"},"same5")
    .to("#extraspark6",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path7", align: "#self"}, ease: "none"},"same5")
    .to("#extraspark8",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path9", align: "#self"}, ease: "none"},"same5")
    .to("#extraspark10",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path11", align: "#self"}, ease: "none"},"same5")
    .to("#extraspark12",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path1", align: "#self"}, ease: "none"},"same5")
    .to("#finalspark2",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path14", align: "#self"}, ease: "none"},"same5")
    .to("#finalspark4",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path16", align: "#self"}, ease: "none"},"same5")
    .to("#finalspark6",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path18", align: "#self"}, ease: "none"},"same5")
    .to("#finalspark8",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path20", align: "#self"}, ease: "none"},"same5")
    .to("#finalspark10",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path22", align: "#self"}, ease: "none"},"same5")
    .to("#finalspark12",{duration:.75, transformOrigin: "50% 50%", motionPath: {path:"#path24", align: "#self"}, ease: "none"},"same5");

  return tl;
}



function innsersparkgrow(){

    const tl = gsap.timeline();

     tl.to("#inspark4",{duration:.75, scaleX: 1.5, ease: "none"})

    return tl;
}

 function eform(){

     const tl = gsap.timeline();

     tl.to("#centere path", { autoAlpha: 1, duration: .45, stagger: -0.25, ease: "power4.out" })
       .to("#backbottome path", { autoAlpha: 1, duration: .45, stagger: 0.25, ease: "power4.out" },"same1")
       .to("#backtope path", { autoAlpha: 1, duration: .45, stagger: 0.25, ease: "power4.out" },"same1")
       .to("#tope path", { autoAlpha: 1, duration: .45, stagger: 0.25, ease: "power4.out" },"same2")
       .to("#bottome path", { autoAlpha: 1, duration: .45, stagger: 0.25, ease: "power4.out" },"same2")

       .timeScale(8);

     return tl;
}

 function mform(){

     const tl = gsap.timeline();

     tl.to("#slantleftm path", { autoAlpha: 1, duration: .45, stagger: 0.25, ease: "power4.out" },"same1")
       .to("#slantrightm path", { autoAlpha: 1, duration: .45, stagger: 0.25, ease: "power4.out" },"same1")
       .to("#tallrightm path", { autoAlpha: 1, duration: .45, stagger: 0.25, ease: "power4.out" },"same2")
       .to("#tallleftm path", { autoAlpha: 1, duration: .45, stagger: 0.25, ease: "power4.out" },"same2")

       .timeScale(8);

     return tl;
}

function textcomein(){

    const tl = gsap.timeline();

    tl.from("#text",{duration:.5, alpha: 0, ease: "none"});

    return tl;
}

function eandmswitch(){

    const tl = gsap.timeline();

    tl.to("#em",{duration:.5, alpha:0, ease: "none"},"same5")
      .from(".realem",{duration:.5, alpha: 0, ease: "none"},"same5")
      .to("#text",{duration:.5, fill:"#045F7D", ease: "none"},"same5");

    return tl;
}

mainTL.add(circle1roll())
      .add(circle1bounce())
      .add(insidesparkscale())
      .add(outsidesparkscale(), "-=30%")
      .add(extrasparkenter(), ">-=50%")
      .add(sparkrotate())
      .add(sparkseperate1())
      .add(sparkseperate2(),"-=70%")
      .add(innsersparkgrow())
      .add(eform(),"same6")
      .add(mform(),"same6")
      .add(textcomein())
      .add(eandmswitch(),"+=10%");

GSDevTools.create();