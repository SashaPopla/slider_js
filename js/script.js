'use strict';

const objSlider = {  
    nameClassSlider: '',

    namePrev: document.querySelector('.prev') || document.querySelector('#prev'),
    nameNext: document.querySelector('.next') || document.querySelector('#next'),
    
    animationSlider: false,
    /* swapSlider: false, */

    showCountSlider: 1,
    timeAnimationSlider: 5000,

    showSlider: function(){
        const imgArray = Array.from(this.nameClassSlider.querySelectorAll('img')),
            sliderCount = imgArray.length;
        let index = 0;

        if(this.animationSlider){
            this.animationSlider = true;
            this.showCountSlider = 1;
            let time = setInterval(function log(){
                    if(index == sliderCount) {
                        index = 0;
                    }
                    else{
                        index = (index + 1) % sliderCount;
                        slide();                     
                    }
            }, this.timeAnimationSlider);

        }
        else{
            switch(this.showCountSlider){
                case 1: {
                    this.nameNext.addEventListener('click', () => {
                        index = (index + 1) % sliderCount;
                        slide();
                    });

                    this.namePrev.addEventListener('click', () => {
                        index = (index - 1 + sliderCount) % sliderCount;
                        slide();
                    });

                    /* window.addEventListener('load', () => {
                        slide();
                    }); */
                    
                    break;
                }
                case 2:{
                    this.nameClassSlider.parentElement.style.width = '1200px';

                    this.nameNext.addEventListener('click', () => {
                        index = (index + 1) % (sliderCount-1);
                        slide();
                    });
                    
                    this.namePrev.addEventListener('click', () => {
                        index = (index - 1 + sliderCount) % sliderCount;
                        slide();
                    });

                    break;
                }
                default:
                    break;
            }
        }

        const slide = () => {
            const imgWidth = this.nameClassSlider.clientWidth;
            let slideOffset = -index * imgWidth;
            this.nameClassSlider.style.transform = `translateX(${slideOffset}px)`;
        }
    }
};

objSlider.nameClassSlider = document.querySelector('.slider');
console.log(objSlider);
objSlider.showSlider();
