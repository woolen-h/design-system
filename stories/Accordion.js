import './assets/css/accordion.css';

export const createAccordion = () => {
  // 아코디언 함수 정의
  document.addEventListener('DOMContentLoaded', () => {
    // 문서가 완전히 로드되면 아코디언 기능 초기화
    const accordionButtons = document.querySelectorAll('.accordion-button');
    // 아코디언 버튼 요소를 모두 선택하여 노드리스트로 반환, 변수 할당
      
    accordionButtons.forEach(function (button) {
      // 노드리스트를 반복하여 각 버튼에
      button.addEventListener('click', function() {
        // 클릭 이벤트 리스너 추가
        const accordionContent = this.nextElementSibling.querySelector('.accordion-content');
        // 클릭한 아코디언 요소의 다음 형제 요소 중 클래스가 accordion-content인 요소를 찾아 변수에 할당
        // 이 요소는 아코디언이 열렸을 때 내용을 나타냄
        const accordionItem = this.parentElement;
        // 클릭한 아코디언 요소의 부모요소인 accordion-item을 찾아 변수에 할당
        // 이 요소는 아코디언 요소 전체를 나타냄
        const openItem = document.querySelector('.accordion-item.open');
        // 현재 열려 있는 아코디언 요소를 찾아 변수에 할당
  
        if (openItem && openItem !== accordionItem) {
          // 현재 다른 아코디언 요소가 열려있고, 이전에 열린 아코디언 요소가 현재 아코디언 요소가 아니라면
          closeAccordion(openItem);
          // 이전에 열렸던 아코디언 요소를 닫음
          // 여러개의 아코디언 요소가 있을 때 한 번에 하나의 아코디언만 열리도록 함
        }

        if (accordionItem.classList.contains('open')) {
          // 만약 현재 클릭된 아코디언 요소가 열려있다면
          closeAccordion(accordionItem);
          // 닫습니다
        } else {
          // 아니라면
          openAccordion(accordionItem);
          // 엽니다
        }
      });
    });
      
    function openAccordion(accordionItem) {
      // 아코디언을 열기 위한 함수를 정의
      const content = accordionItem.querySelector('.accordion-content');
      // 컨텐츠 변수 지정
      accordionItem.classList.add('open');
      // 아코디언 오픈
      content.style.maxHeight = content.scrollHeight + 'px';
      // 아코디언 요소가 열렸을 때 내용이 자연스럽게 나타남, 내용의 크기에 따라 동적 조절
    }
      
    function closeAccordion(accordionItem) {
      // 아코디언을 닫기 위한 함수 정의
      const content = accordionItem.querySelector('.accordion-content');
      // 컨텐츠 변수 지정
      accordionItem.classList.remove('open');
      // 아코디언 클로즈
      content.style.maxHeight = null;
      // 내용 높이 지정했던 것을 null로 초기화
    }
  });

  const accordion = document.createElement('div');
  // 새로운 div 요소 생성하여 accordion 변수에 할당
  accordion.classList.add('accordion');
  // 요소에 클래스 추가

  const accordionItem1 = document.createElement('div');
  // 새로운 div 생성하여 아코디언 아이템1 변수에 할당
  accordionItem1.classList.add('accordion-item');
  // 요소에 클래스 추가

  const button1 = document.createElement('button');
  // 새로운 버튼 생성하여 버튼1 변수에 추가
  button1.classList.add('accordion-button');
  // 요소에 클래스 추가
  button1.innerText = '아코디언 1';
  // 요소에 텍스트 추가

  const accordionContent1 = document.createElement('div');
  // 아코디언 내용 div 생성
  accordionContent1.classList.add('accordion-content');
  // 요소에 클래스 추가
  const paragraph1 = document.createElement('p');
  // 내용이 들어갈 p 추가
  paragraph1.innerText = '아코디언 1의 내용입니다.';
  // p 내부 내용 추가
  accordionContent1.appendChild(paragraph1);
  // 아코디언 내용 div에 p 자식 요소로 할당

  accordionItem1.appendChild(button1);
  // 아코디언 아이템1 에 버튼 요소 자식 할당
  accordionItem1.appendChild(accordionContent1);
  // 아코디언 아이템1 에 아코디언 내용 자식 할당

  // ↓ 두번째 아코디언 추가
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

  // 아코디언 요소에 아코디언 아이템 1, 2 자식 요소로 할당
  accordion.appendChild(accordionItem1);
  accordion.appendChild(accordionItem2);

  // 생성된 아코디언 반환
  return accordion;
};
