


document.querySelectorAll(".card").forEach(card=>{
    gsap.to(card,{
        opacity:0.5,
        scale:0,
        scrollTrigger:{
            trigger:card,
            start:"top 15%",
            end:"bottom 15%",
            scrub:true,
        },
        
    })
})