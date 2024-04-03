import { topMenus } from "./index";

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

export { addListenersToTopMenus, showOrHideDropDown }