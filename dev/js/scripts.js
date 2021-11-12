import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

function circle1roll(){

    const tl = gsap.timeline();

    tl.from("#circle1",{duration:1, rotation: 360, x: 503, transformOrigin: "50% 50%"},"same")
      .from("#dropshadow",{duration:1, x: 503},"same");

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

    tl.to("#circle1",{duration:1, alpha:0},"same")
      .from("#circle2",{duration:1, alpha:0},"same")
      .from(".inside1",{duration:1, scaleX:0, scaleY: 0, transformOrigin: "50% 50%", ease: "none"})
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

    tl.to("#extraspark",{duration:1, rotation: 360, transformOrigin: "50% 50%", ease: "none"},"same")
      .to("#extraspark2",{duration:1, rotation: -360, transformOrigin: "50% 50%", ease: "none"},"same")
      .to("#insidespark",{duration:1, rotation: -360, transformOrigin: "50% 50%", ease: "none"},"same")
      .to("#outsidespark",{duration:1, rotation: -360, transformOrigin: "50% 50%", ease: "none"},"same");

    return tl;
}

mainTL.add(circle1roll())
      .add(circle1bounce())
      .add(insidesparkscale())
      .add(outsidesparkscale(), ">-=50%")
      .add(extrasparkenter(), ">-=50%")
      .add(sparkrotate());

GSDevTools.create();