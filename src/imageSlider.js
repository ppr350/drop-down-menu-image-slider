import { imageContainer, dotContainer, arrowContainer } from "./index"
// import { AllThat } from "./index"

let currentImage = 0

const images = [
    'AllThat.jpg',
    'Emotion.jpg',
    'MakingTheMostOfTheNight.jpg',
    'RunAwayWithMe.jpg',
    'YourType.jpg'
]

const arrows = [
    {
        'sign': '<',
        'class': 'previous'
    },
    {
        'sign': '>',
        'class': 'next'
    }
]

const countDown = 5000
const timer = setInterval(autoRun, countDown)

function addImage() {
    images.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        img.classList.add('image')
        img.alt = 'image'
        imageContainer.appendChild(img)
        img.style.opacity = 0

        const dot = document.createElement('span')
        dot.classList.add('dot')
        dotContainer.appendChild(dot)
    })

    // Initialize first slide
    imageContainer.firstElementChild.style.opacity = 1
    dotContainer.firstElementChild.classList.add('active')

    for (let i = 0; i < dotContainer.children.length; i++) {
        dotContainer.children[i].addEventListener('click', (e) => {
            changeSlide(e.target)
        })
    }
}

function addArrow() {
    arrows.forEach(indicator => {
        const arrow = document.createElement('span')
        arrow.innerText = indicator.sign
        arrow.classList = indicator.class
        arrow.classList.add('arrow')
        arrow.addEventListener('click', (e) => {
            changeSlide(e.target)
        })
        arrowContainer.appendChild(arrow)
    })
}

function clearSlide() {
    for (let i = 0; i < imageContainer.children.length; i++) {
        imageContainer.children[i].style.opacity = 0
        dotContainer.children[i].classList.remove('active')
    }
}

function previousSlide() {
    if (currentImage === 0) {
        currentImage = imageContainer.children.length
    }
    --currentImage
}

function nextSlide() {
    if (currentImage === imageContainer.children.length -1) {
        currentImage = 0
    } else {
        ++currentImage
    }
}

function changeSlide(slide) {
    clearSlide()

    if (slide.parentElement.id === 'arrows') {
        if (slide.classList.contains('previous')) {
            previousSlide()
            
        } else if (slide.classList.contains('next')) {
            nextSlide()
        }   
    }
    else if (slide.classList.contains('dot')) {
            const getActiveDot = Array.from(dotContainer.children)
            const activeDot = getActiveDot.indexOf(slide)
            currentImage = activeDot
    } 

    imageContainer.children[currentImage].style.opacity = 1
    // imageContainer.children[currentImage].style.
    dotContainer.children[currentImage].classList.add('active')

    setTimeout(timer, countDown)
}

function autoRun() {
    clearSlide()
    nextSlide()
    imageContainer.children[currentImage].style.opacity = 1
    dotContainer.children[currentImage].classList.add('active')
}

export { addImage, addArrow }