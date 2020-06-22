/**
 * Script for changing the display mode of the page.
 */

window.onload = init;

/**
 * Dark mode works by changing the class of the body tag from .light to .dark (and vice versa).
 */
function init () {
    document.getElementById('light-mode-button').onclick = light_mode;
    document.getElementById('dark-mode-button').onclick = dark_mode;
}

function light_mode () {
    document.getElementById("display-mode").className = "light";
}

function dark_mode () {
    document.getElementById("display-mode").className = "dark";
}