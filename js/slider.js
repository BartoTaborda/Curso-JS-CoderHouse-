/* ----------- Slider ----------- */
let propSlider = {
    slider: document.getElementById('photoSlider'),
    primerSlide: null,
}

let metSlider = {

    inicio: () => {
        setInterval(metSlider.moveSlide, 2500)
    },

    moveSlide: function () {
        propSlider.slider.style.transition = 'all 1.5s ease';
        propSlider.slider.style.marginLeft = '-100%';

        setTimeout(function () {
            propSlider.primerSlide = propSlider.slider.firstElementChild;
            propSlider.slider.appendChild(propSlider.primerSlide);
            propSlider.slider.style.transition = 'unset';
            propSlider.slider.style.marginLeft = '0%';
        }, 1500);
    },
        
}

metSlider.inicio();