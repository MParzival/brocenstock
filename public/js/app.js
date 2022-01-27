// Ekko lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(e){
    e.preventDefault();
    $(this).ekkoLightbox();
})

// Animation imput page contact
const formGroupe = document.querySelector('.formGroupe');
const inputs = document.querySelectorAll('.form-control');
inputs.forEach(item => {
    item.addEventListener('input', function(e){
        console.log(e.target.value)
        if (e.target.value != "") {
            e.target.parentNode.classList.add('animation-input')
        } else if (e.target.value === ""){
            e.target.parentNode.classList.remove('animation-input')
        }
    })
})


// Input VichUploader
// (Pour que le nom de l'image que vous avez selectionné soit inscrite dans l'input)

$(document).ready(function(){
    $("form").on("change", ".custom-file-input", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
})

// animation navbar

$(window).scroll(function(){
    if ($(this).scrollTop() > 30) {
        $('.navbar').addClass('opaque');
    } else {
        $('.navbar').removeClass('opaque');
    }
})

// Animation page principale

const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo-image-principale');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {
    
    const TL = gsap.timeline({paused: true});

    TL
        .staggerFrom(titreSpans, 1 , { top: -50, opacity: 0, ease: "power2.out" }, 0.3)
        .staggerFrom(btns, 1 , { opacity: 0, ease: "power2.out" }, 0.3, '-=1')
        .from(l1 , 1 , {width: 0, ease: "power2.out"}, '-=2')
        .from(l2 , 1 , {width: 0, ease: "power2.out"}, '-=2')
        .from(logo , 0.4 , {transform: "scale(0)", ease: "power2.out"}, '-=2')
        .from(l2 , 1 , {width: 0, ease: "power2.out"}, '-=2')
        .staggerFrom(medias, 1 , { right: -200, ease: "power2.out" }, 0.3, '-=1');

    TL.play();
})

// Animation scroll Magic

const controller = new ScrollMagic.Controller();

let tweenLi1 = TweenMax.staggerFromTo('.solLi1', 0.75, 
        {opacity: 0, y: -100, ease: Power4.easeIn},
        {opacity: 1, y: 0, ease: Power4.easeIn},
        0.1
);
let tweenLi2 = TweenMax.staggerFromTo('.solLi2', 0.75, 
        {opacity: 0, y: -100, ease: Power4.easeIn},
        {opacity: 1, y: 0, ease: Power4.easeIn},
        0.1
);
let tweenLi3 = TweenMax.staggerFromTo('.solLi3', 0.75, 
        {opacity: 0, y: -100, ease: Power4.easeIn},
        {opacity: 1, y: 0, ease: Power4.easeIn},
        0.1
);

let scene = new ScrollMagic.Scene({ triggerElement: '#solution-debarras', offset: -75 })
                                .triggerHook(0.5)
                                // .addIndicators({name: 'li1', colorTrigger: 'blue', indent: 100})
                                .setTween(tweenLi1)
                                .reverse(false)
                                .addTo(controller)

let scene2 = new ScrollMagic.Scene({ triggerElement: '#solution-debarras', offset: -50 })
                                .triggerHook(0.5)
                                // .addIndicators({name: 'li2', colorTrigger: 'red', indent: 200})
                                .setTween(tweenLi2)
                                .reverse(false)
                                .addTo(controller)

let scene3 = new ScrollMagic.Scene({ triggerElement: '#solution-debarras', offset: -25 })
                                .triggerHook(0.5)
                                // .addIndicators({name: 'li3', colorTrigger: 'green', indent: 300})
                                .setTween(tweenLi3)
                                .reverse(false)
                                .addTo(controller)

