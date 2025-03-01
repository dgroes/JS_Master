window.addEventListener("load", () => {
    let btnPrev = document.querySelector(".slider__btn-prev");
    let btnNext = document.querySelector(".slider__btn-next")
    let slides = document.querySelectorAll(".slides__item");

    let counter = 0;
    let allSlides = slides.length; //3 imagenes

    //Botón siguiente
    btnNext.addEventListener("click", () => {
        counter++;
        if (counter >= allSlides) {
            counter = 0;
        }

        activeSlide(counter)
    });

    //Botón anterior
    btnPrev.addEventListener("click", () => {
        counter--;
        if (counter < 0) {
            counter = allSlides - 1; //ültima diapositiva
        }

        activeSlide(counter)
    });


    //Activar Slide
    let activeSlide = (index) => {
        clearActives();

        slides[index].classList.add("slides__item--active");
    }


    //Limpiar activados
    let clearActives = () => {
        slides.forEach(slide => {
            slide.classList.remove("slides__item--active");
        })
    }

});