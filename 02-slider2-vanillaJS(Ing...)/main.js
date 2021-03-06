const sldierElements = document.querySelectorAll('.slider');
const mainSlider = document.querySelector('.main-slider');
const mainVisual = document.querySelector('.main-visual');
const width = 1200;
const margin = "0 auto";
const sliderWidth = width * sldierElements.length;
const sliderDots = document.querySelector('.slider-dots');

mainVisual.style.width = width + "px";
mainVisual.style.margin = margin;
mainVisual.style.overflow = "hidden";
mainSlider.style.width = sliderWidth + "px";

for (let i = 0; i < sldierElements.length; i++) {
	sldierElements[i].style.width = `${width}px`;
	sldierElements[i].style.float = "left";
	const _dotElement = document.createElement('div');
	_dotElement.classList.add('dot');
	sliderDots.appendChild(_dotElement);
}

let moveSlider = 0;
let sliderIndex = 0;
const dots = document.querySelector('.slider-dots').querySelectorAll('.dot');
dots[0].classList.add('on');

setInterval(() => {
	moveSlider += width;
	if ( moveSlider < sliderWidth ) {
		sliderIndex = moveSlider/width;
		mainSlider.style.transform = `translateX(-${moveSlider}px)`;
	} else {
		moveSlider = 0;
		sliderIndex = moveSlider/width;
		mainSlider.style.transform = `translateX(-${moveSlider}px)`;
	}

	for (let i = 0; i < sldierElements.length; i++) {
		if ( sliderIndex === i ) {
			if ( dots[i].previousElementSibling === null ) {
				dots[sldierElements.length-1].classList.remove('on'); 
				dots[0].classList.add('on');
				return;
			} 
			dots[i].previousElementSibling.classList.remove('on');
			dots[i].classList.add('on');
			return;
		}
	}
}, 1000);

// slider arrow test 2018-12-06
const sliderArrows = document.querySelector('.slider-arrow');
let ttt = function () { console.log(moveSlider); }
sliderArrows.querySelector('.btn-previous').addEventListener('click', function () { 
	moveSlider -= width;
	// console.log(moveSlider); 
});

