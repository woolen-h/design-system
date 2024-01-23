import './assets/css/accordion.css';

export const createAccordion = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const accordionButtons = document.querySelectorAll('.accordion-button');
      
        accordionButtons.forEach(function (button) {
          button.addEventListener('click', () => {
            const accordionContent = this.nextElementSibling.querySelector('.accordion-content');
            const accordionItem = this.parentElement;
              const openItem = document.querySelector('.accordion-item.open');
      
              if (openItem && openItem !== accordionItem) {
                closeAccordion(openItem);
              }
      
              if (accordionItem.classList.contains('open')) {
                closeAccordion(accordionItem);
              } else {
                openAccordion(accordionItem);
              }
            });
      });
      
      function openAccordion(accordionItem) {
        const content = accordionItem.querySelector('.accordion-content');
        accordionItem.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
      
      function closeAccordion(accordionItem) {
        const content = accordionItem.querySelector('.accordion-content');
          accordionItem.classList.remove('open');
          content.style.maxHeight = null;
        }
      });

    return '<div class="accordion"><div class="accordion-item"><button class="accordion-button">아코디언 1</button><div class="accordion-content"><p>아코디언 1의 내용입니다.</p></div></div><div class="accordion-item"><button class="accordion-button">아코디언 2</button><div class="accordion-content"><p>아코디언 2의 내용입니다.</p></div></div></div>'
};
