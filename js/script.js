const darkModeButton = document.querySelector('.grey')
const logo = document.querySelector('header p')
const titleh1 = document.querySelector('h1')
const body = document.querySelector('body')
const darkModeText = document.querySelector('.darkModebutton p')
const paragraphs = document.querySelectorAll('.report p')
const elementGrey = document.querySelector('.grey')

const logoclass = logo.classList
const titleh1Class = titleh1.classList
const bodyClass = body.classList
const darkModeTextClass = darkModeText.classList
const elementGreyClass = elementGrey.classList

let dia = true;
let solLuna
let yellowBlue
darkModeButton.addEventListener('click', () => {
    dia=!dia
    if (dia == true) {
        solLuna = "sol"
        yellowBlue = "yellow"
    } else {
        solLuna = "luna"
        yellowBlue = "blue"
    }
    logoclass.toggle("dark")
    elementGrey.innerHTML = `<div class="${yellowBlue}">
    <img src="./assets/img/${solLuna}.png"/>
</div>`
    titleh1Class.toggle("dark")
    bodyClass.toggle("dark")
    elementGreyClass.toggle("dark")
    darkModeTextClass.toggle("dark")
    paragraphs.forEach((paragraph) => {
        paragraph.classList.toggle("dark")
    })
})