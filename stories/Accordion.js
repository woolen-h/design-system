import './assets/css/accordion.css';

export const createAccordion = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');
      
    accordionButtons.forEach(function (button) {
      button.addEventListener('click', function() {
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

  const accordion = document.createElement('div');
  accordion.classList.add('accordion');

  const accordionItem1 = document.createElement('div');
  accordionItem1.classList.add('accordion-item');

  const button1 = document.createElement('button');
  button1.classList.add('accordion-button');
  button1.innerText = '아코디언 1';

  const accordionContent1 = document.createElement('div');
  accordionContent1.classList.add('accordion-content');
  const paragraph1 = document.createElement('p');
  paragraph1.innerText = '아코디언 1의 내용입니다.';
  accordionContent1.appendChild(paragraph1);

  accordionItem1.appendChild(button1);
  accordionItem1.appendChild(accordionContent1);

  const accordionItem2 = document.createElement('div');
  accordionItem2.classList.add('accordion-item');

  const button2 = document.createElement('button');
  button2.classList.add('accordion-button');
  button2.innerText = '아코디언 2';

  const accordionContent2 = document.createElement('div');
  accordionContent2.classList.add('accordion-content');
  const paragraph2 = document.createElement('p');
  paragraph2.innerText = '아코디언 2의 내용입니다.';
  accordionContent2.appendChild(paragraph2);

  accordionItem2.appendChild(button2);
  accordionItem2.appendChild(accordionContent2);

  accordion.appendChild(accordionItem1);
  accordion.appendChild(accordionItem2);

  return accordion;
};
