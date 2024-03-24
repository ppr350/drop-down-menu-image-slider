import { forEach } from "lodash";
import "./style.css";

const topMenus = document.querySelectorAll('.top-menus')
const portfolio = document.querySelector('#portfolio')
const portfolioOptions = portfolio.querySelectorAll('li')
const contact = document.querySelector('#contact')
const contactOptions = contact.querySelectorAll('li')

window.addEventListener('load', (e) => {
    // hidePortfolioByDefault()
    // hidecontactByDefault()
    // showPortfolioDropDown()
    // showContactDropDown()
    // topMenus[i].children[1].style.display = 'none'
    optionMenu()
})

function optionMenu() {
    for (let i = 0; i < topMenus.length; i++) {
        // console.log(topMenus[i])
        topMenus[i].addEventListener('mouseover', () => {
            topMenus[i].children[1].style.display = 'block'

        })
        topMenus[i].addEventListener('mouseout', () => {
            topMenus[i].children[1].style.display = 'none'
            // topMenus[i].children[1].classList.add
            // showOrHide(topMenus[i].children[1])

        })

    }
}

function showOrHide(menuOptions) {

    // if (topMenus[i].children[1].style.display = 'block') {

    // }
}

// function hidePortfolioByDefault() {
//     hide(portfolioOptions)
// }

// function hidecontactByDefault() {
//     hide(contactOptions)
// }

// function hide(dropDownMenu) {
//     dropDownMenu.forEach(option => {
//         option.addEventListener('mouseout', (e) => {
//             // console.log(option)
//             option.style.display = 'none'
//         })
//     })
// }

// function showPortfolioDropDown() {
//     console.log('show portfolio')
//     portfolio.addEventListener('mouseover', (e) => {
//         show(portfolioOptions)
//         portfolio.style.backgroundColor = 'grey'
//     })
// }

// function showContactDropDown() {
//     console.log('show contact')
    
// }

// function show(dropDownMenu) {
//     dropDownMenu.forEach(option => {
//         option.style.display = 'block'
//     })
// }