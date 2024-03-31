import { forEach } from "lodash";
import "./style.css";

// Drop Drop Menu

const topMenus = document.querySelectorAll('.top-menus')

window.addEventListener('load', () => {
    topMenus.forEach(menu => {
        menu.children[1].style.display = 'none'
    })
    addListenersToTopMenus()
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
const images = document.querySelectorAll('#image-slider img')
const dots = document.querySelectorAll('.dot')
let currentImage = 0
const interval = 3000

function changeImage(toCurrentImage) {
    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = 0
        dots[i].classList.remove('active')
    }
    currentImage = (currentImage + 1) % images.length

    images[currentImage].style.opacity = 1
    dots[currentImage].classList.add('active')

    if (toCurrentImage != undefined) {
        clearInterval(timer)
        timer = setInterval(changeImage, interval)
        currentImage = toCurrentImage
    }
}

const timer = setInterval(changeImage, interval)
