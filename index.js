var button = document.querySelector('button.hamburger-btn')
var mainMenu = document.getElementById('main-menu')

function toggleMenu() {
    if (!mainMenu.classList.contains('show-menu')) {
        mainMenu.classList.add('show-menu')
        button.setAttribute('aria-expanded', true)
    } else {
        mainMenu.classList.remove('show-menu')
        button.setAttribute('aria-expanded', false)
    }
}

button.onclick = toggleMenu

document.onkeyup = function(e) {
    if (e.key === 'Escape')
    mainMenu.classList.remove('show-menu')
    button.setAttribute('aria-expanded', false)
    button.focus()
    mainMenu.focus()
}

document.onclick = function(e) {
    if (!mainMenu.contains(e.target) && !button.contains(e.target))
    mainMenu.classList.remove('show-menu')
    button.setAttribute('aria-expanded', false)
}

