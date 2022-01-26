/*
const linkDown = document.querySelector('.link--down');
const secondSection = document.querySelector('.section--about');
const secondSectionY = secondSection.offsetTop;

let inervalID;

const trackScroll = function() {
    window.scrollBy(0, 15)
    if (window.pageYOffset >= secondSectionY) {
        clearInterval (intervalID)
    }
}

linkDown.addEventListener('click', function(e) {
    e.preventDefault()
    intervalID = setInterval(trackScroll, 10)
})