# Drop-down Menu and Image Slider Using HTML and JavaScript

## This small project is a part of The Odin Project’s JavaScript course.

## JavaScript 
The codes inside this project is designed to be as reusable as possible. Each of them (both drop-down menu and image slider) have functions are designed to be as generic as possible and that most of them do one thing only.

## CSS
The CSS part of this small project is relatively simple. However I did implement some basic animations such as when user hover their mouse on the image slider’s arrows, and a small animation when user hovers on one of the menus.

## Template Repositories
This project is my first time using GitHub Template Repositories. It comes in very handy to use my existing project as the template when setting this project up. For this project I use Project To Do List as its template.

## Prettier and ESLint together
It is also my first project using both Prettier and ESLint to make my code easier to read.
Using Prettier and ESLint together can cause conflict, I use eslint-config-prettier for this project. It turns off all ESLint rules that might conflict with Prettier.

## The project:

### Drop-down menu 
- The drop-down menu is responsive
- When viewed on a bigger screen, the menu stay on the top, and the drop-down menu drawers open from the top.
- When viewed on a smaller screen, the menu instead goes to the bottom of the screen to enhance reachibility, and drop-down menu drawers open from the bottom.
- The code uses an arrow function to "open or close the menu drawer" when user hovers the mouse over or leave the menu section.

### Image Slider
- All image sources are stored in an array, when I need to change or add new images, I can just simply adding or removing the image source from the array.
- The total number of corresponding dots that represents the image are generated dynamically. 
- Next (<) and previous (>) arrows to change slide to next or previous slide.
- Slide automatically advance to the next slide every 5 seconds.
- The auto-slide function stops for 5 seconds when user clicks on either one of the dots or arrows.
- 1 second fade in effect that supports different browsers

## Special Thanks
Discord users Mao && Don't rush learning! on TOP's Javascript-help-1 for advice
The Odin Project Team for providing such amazing free course.

