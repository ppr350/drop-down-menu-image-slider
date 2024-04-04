import { forEach, omit } from "lodash";
import "./style.css";
import { addListenersToTopMenus } from "./dropDownMenu"
import { addImage, addArrow } from "./imageSlider"
import { AllThat } from "./AllThat.jpg"
import { Emotion } from "./Emotion.jpg"
import { MakingTheMostOfTheNight } from './MakingTheMostOfTheNight.jpg'
import { RunAwayWithMe } from './RunAwayWithMe.jpg'
import { YourType } from './YourType.jpg'

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



export { topMenus, imageContainer, dotContainer, arrowContainer, AllThat, Emotion, MakingTheMostOfTheNight, RunAwayWithMe, YourType }