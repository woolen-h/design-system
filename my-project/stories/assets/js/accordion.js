const accordion = document.querySelector('.accordion');
const accordion_button = document.querySelector('.accordion-button');

accordion_button.addEventListener("click", () => {
    accordion.classList.toggle(".show");
})