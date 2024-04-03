import { forEach } from "lodash";
import "./style.css";

// Drop Drop Menu

const topMenus = document.querySelectorAll('.top-menus')

window.addEventListener('load', () => {
    topMenus.forEach(menu => {
        menu.children[1].style.display = 'none'
    })
    addListenersToTopMenus()
    addImage()
    addArrow()
})

document.addEventListener('click', (e) => {
    if (!e.target.closest('.top-menus')) {
        topMenus.forEach(menu => {
            menu.children[1].style.display = 'none'
        })
    }
})

function addListenersToTopMenus() {
    for (let i = 0; i < topMenus.length; i++) {
        topMenus[i].addEventListener('mouseover', () => {
            showOrHideDropDown(topMenus[i])
        })
        topMenus[i].addEventListener('mouseout', () => {
            showOrHideDropDown(topMenus[i])
        })

    }
}

function showOrHideDropDown(menus) {
    const dropDown = menus.children[1]
    dropDown.style.display = dropDown.style.display == 'none' ? 'block' : 'none'
}

// Image Slider
const imageContainer = document.querySelector('#images')
const dotContainer = document.querySelector('#dots')
const arrowContainer = document.querySelector('#arrows')

let currentImage = 0

const images = [
    '../AllThat.jpg',
    '../Emotion.jpg',
    '../MakingTheMostOfTheNight.jpg',
    '../RunAwayWithMe.jpg',
    '../YourType.jpg'
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


const countDown = 3000
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
            console.log(e.target)
        })
        arrowContainer.appendChild(arrow)
    })
}

function clearSlide() {
    //  hide images
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
            console.log(getActiveDot.indexOf(slide))
            const activeDot = getActiveDot.indexOf(slide)
            console.log(getActiveDot[activeDot])
            currentImage = activeDot
    } 
    // else {
    //     ++currentImage
    // }

    // show current image
    imageContainer.children[currentImage].style.opacity = 1
    dotContainer.children[currentImage].classList.add('active')

    setTimeout(timer, 3000)
    // reRunTimer()

}

function reRunTimer() {
    setTimeout(function() {
        console.log('run')
    }, 1000);
}

function autoRun() {

    clearSlide()
    nextSlide()
    imageContainer.children[currentImage].style.opacity = 1
    dotContainer.children[currentImage].classList.add('active')
}

