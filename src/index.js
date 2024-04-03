import { forEach, omit } from "lodash";
import "./style.css";
import { addListenersToTopMenus } from "./dropDownMenu"
import { addImage, addArrow } from "./imageSlider"


window.addEventListener('load', () => {
    topMenus.forEach(menu => {
        menu.children[1].style.display = 'none'
    })
    addListenersToTopMenus()
    addImage()
    addArrow()
})

// Drop Drop Menu
const topMenus = document.querySelectorAll('.top-menus')

// Image Slider
const imageContainer = document.querySelector('#images')
const dotContainer = document.querySelector('#dots')
const arrowContainer = document.querySelector('#arrows')



export { topMenus, imageContainer, dotContainer, arrowContainer }