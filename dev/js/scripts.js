import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, MotionPathPlugin);

let mainTL = gsap.timeline();

function circle1roll(){

    const tl = gsap.timeline();

    tl.from("#circle1",{duration:1, rotation: 360, x: 503, transformOrigin: "50% 50%"},"same1")
      .from("#dropshadow",{duration:1, x: 503},"same1");

    return tl;
}

function circle1bounce(){

    const tl = gsap.timeline();

    tl.to("#circle1",{duration:1, y: -147})
      .to("#circle1",{duration:1, y: 0, ease: "bounce.out"});

    return tl;
}

function insidesparkscale(){

    const tl = gsap.timeline();

    tl.to("#circle1",{duration:1, alpha:0},"same2")
      .from(".inside1",{duration:1, scaleX:0, scaleY: 0, transformOrigin: "50% 50%", ease: "none"},"same2")
      .from(".inside2",{duration:1, scaleX:0, scaleY: 0, transformOrigin: "50% 50%", ease: "none"}, ">-=50%");

    return tl;
}

function outsidesparkscale(){

    const tl = gsap.timeline();

    tl.from("#circle2",{duration:1, alpha:0})
      .from(".outside1",{duration:1, scaleX:0, scaleY: 0, x:0, y:0, transformOrigin: "50% 50%", ease: "none"})
      .from(".outside2",{duration:1, scaleX:0, scaleY: 0, x:0, y:0, transformOrigin: "50% 50%", ease: "none"}, ">-=50%");

    return tl;
}

function extrasparkenter(){

    const tl = gsap.timeline();

    tl.from(".extra1",{duration:1, scaleX:0, scaleY: 0, x:0, y:0, transformOrigin: "50% 50%", ease: "none"})
      .from(".extra2",{duration:1, scaleX:0, scaleY: 0, x:0, y:0, transformOrigin: "50% 50%", ease: "none"}, ">-=50%");

    return tl;
}

function sparkrotate(){

    const tl = gsap.timeline();

    tl.to("#extraspark",{duration:1, rotation: 360, transformOrigin: "50% 50%", ease: "none"},"same3")
      .to("#anotherspark",{duration:1, rotation: -360, transformOrigin: "50% 50%", ease: "none"},"same3")
      .to("#insidespark",{duration:1, rotation: -360, transformOrigin: "50% 50%", ease: "none"},"same3")
      .to("#outsidespark",{duration:1, rotation: -360, transformOrigin: "50% 50%", ease: "none"},"same3")
      .to("#extraspark",{duration:1, rotation: 0, transformOrigin: "50% 50%", ease: "none"},"same3")
      .to("#anotherspark",{duration:1, rotation: 0, transformOrigin: "50% 50%", ease: "none"},"same3")
      .to("#insidespark",{duration:1, rotation: 0, transformOrigin: "50% 50%", ease: "none"},"same3")
      .to("#outsidespark",{duration:1, rotation: 0, transformOrigin: "50% 50%", ease: "none"},"same3");

    return tl;
}

function sparkseperate(){

    const tl = gsap.timeline();

    tl.to("#extraspark1",{duration:1, transformOrigin: "50% 50%", motionPath: {path:"#path2", align: "#path2"}, ease: "none"},"same4")
      .to("#extraspark2",{duration:1, transformOrigin: "50% 50%", motionPath: {path:"#path3", align: "#path3"}, ease: "none"},"same4")
      .to("#extraspark3",{duration:1, transformOrigin: "50% 50%", motionPath: {path:"#path4", align: "#path4"}, ease: "none"},"same4")
      .to("#extraspark4",{duration:1, transformOrigin: "50% 50%", motionPath: {path:"#path5", align: "#path5"}, ease: "none"},"same4")
      .to("#extraspark5",{duration:1, transformOrigin: "50% 50%", motionPath: {path:"#path6", align: "#path6"}, ease: "none"},"same4")
      .to("#extraspark6",{duration:1, transformOrigin: "50% 50%", motionPath: {path:"#path7", align: "#path7"}, ease: "none"},"same4")
      .to("#extraspark7",{duration:1, transformOrigin: "50% 50%", motionPath: {path:"#path8", align: "#path8"}, ease: "none"},"same4")
      .to("#extraspark8",{duration:1, transformOrigin: "50% 50%", motionPath: {path:"#path9", align: "#path9"}, ease: "none"},"same4")
      .to("#extraspark9",{duration:1, transformOrigin: "50% 50%", motionPath: {path:"#path10", align: "#path10"}, ease: "none"},"same4")
      .to("#extraspark10",{duration:1, transformOrigin: "50% 50%", motionPath: {path:"#path11", align: "#path11"}, ease: "none"},"same4")
      .to("#extraspark11",{duration:1, transformOrigin: "50% 50%", motionPath: {path:"#path12", align: "#path12"}, ease: "none"},"same4")
      .to("#extraspark12",{duration:1, transformOrigin: "50% 50%", motionPath: {path:"#path1", align: "#path1"}, ease: "none"},"same4");

    return tl;
}

function innsersparkgrow(){

    const tl = gsap.timeline();

    tl.to("#inspark4",{duration:1, scaleX: 1.5, ease: "none"});

    return tl;
}

function eform(){

    const tl = gsap.timeline();

    tl.from(".ept1",{duration:.25, alpha: 0, ease: "none"})
      .from(".ept2",{duration:.25, alpha: 0, ease: "none"})
      .from(".ept3",{duration:.25, alpha: 0, ease: "none"})
      .from(".ept4",{duration:.25, alpha: 0, ease: "none"})
      .from(".ept5",{duration:.25, alpha: 0, ease: "none"})
      .from(".ept6",{duration:.25, alpha: 0, ease: "none"})
      .from(".ept7",{duration:.25, alpha: 0, ease: "none"});

    return tl;
}

function mform(){

    const tl = gsap.timeline();

    tl.from(".mpt1",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt2",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt3",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt4",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt5",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt6",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt7",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt8",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt9",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt10",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt11",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt12",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt13",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt14",{duration:.25, alpha: 0, ease: "none"})
      .from(".mpt15",{duration:.25, alpha: 0, ease: "none"});

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
      .add(outsidesparkscale(), ">-=50%")
      .add(extrasparkenter(), ">-=50%")
      .add(sparkrotate())
      .add(sparkseperate())
      .add(innsersparkgrow())
      .add(eform(),"same6")
      .add(mform(),"same6")
      .add(textcomein())
      .add(eandmswitch());

GSDevTools.create();