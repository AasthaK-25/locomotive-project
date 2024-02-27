const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function videoanimation() {
    var video = document.querySelector("#video-container")
    var play = document.querySelector("#play")
    video.addEventListener("mouseenter", function () {
        gsap.to(play, {
            scale: 1,
            opacity: 1
        })
    })
    video.addEventListener("mouseleave", function () {
        gsap.to(play, {
            scale: 0,
            opacity: 0
        })
    })
    video.addEventListener("mousemove", function (dets) {
        gsap.to(play, {
            left: dets.x - 80,
            top: dets.y - 80
        })
    })
}
videoanimation()

function headanimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        duration:0.8,
        stagger:0.2,
        delay:1 })}
headanimation()

gsap.from("#video-container",{
    scale:0.9,
    opacity:0,
    delay:1.3,
    duration:0.5
})

document.addEventListener("mousemove",function(dets){
gsap.to("#cursor",{
    left:dets.x,
    top:dets.y
})
})

var a = document.querySelectorAll(".child")
a.forEach(function(elem){
    elem.addEventListener("mouseenter",function()
    { gsap.to("#cursor",{
        transform:`translate(-50%,-50%) scale(1)`
    })
 })
})

var a = document.querySelectorAll(".child")
a.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform:`translate(-50%,-50%) scale(0)`
        })
    })
})