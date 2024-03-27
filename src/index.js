import { forEach } from "lodash";
import "./style.css";

const topMenus = document.querySelectorAll('.top-menus')

window.addEventListener('load', () => {
    topMenus.forEach(menu => {
        menu.children[1].style.display = 'none'
    })
    addListenersToTopMenus()
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