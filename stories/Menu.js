import './assets/css/menus.css';

export const MenuHover = () => '<section class="menu-hover"><ul class="link-hover"><li><a href="">Home</a></li><li><a href="">About</a></li><li><a href="">Work</a></li><li><a href="">Services</a></li><li><a href="">Contact</a></li></ul></section>';


export const MenuCursor = () => {
  document.addEventListener('DOMContentLoaded', () => {

    const cursor = document.querySelector(".cursor");
    // 커서 요소 변수 할당
    const links = document.querySelectorAll("nav ul li");
    // 모든 링크 요소 노드리스트 반환하여 변수 할당

    document.addEventListener("mousemove", (e) => {
      // 마우스 이동 이벤트 리스너 추가
      const posX = e.clientX;
      // 현재 마우스의 X축 위치
      const posY = e.clientY;
      // 현재 마우스의 Y축 위치

      cursor.style.left = `${posX}px`;
      // 커서 요소의 left 스타일 속성에 posX 값을 설정하여 마우스 커서의 X축 위치 업데이트
      cursor.style.top = `${posY}px`;
      // 커서 요소의 top 스타일 속성에 posY 값을 설정하여 마우스 커서의 Y축 위치 업데이트
    });

    links.forEach((link) => {
      // 각 링크 요소에 대해 forEach 반복문 실행
      link.addEventListener("mouseenter", (e) => {
        // 각 링크 요소에 마우스 진입 이벤트 리스너 추가
        cursor.classList.add("cursor-grow");
        // 이벤트 발생 시 커서 크기 확대
        link.classList.add("link-hovered");
        // 이벤트 발생 시 링크에 호버 클래스 추가
      });
    });
    links.forEach((link) => {
      // 각 링크 요소에 대해 forEach 반복문 실행
      link.addEventListener("mouseleave", (e) => {
        // 각 링크 요소에 마우스 이탈 이벤트 리스너 추가
        cursor.classList.remove("cursor-grow");
        // 이벤트 발생 시 커서 크기 원본
        link.classList.remove("link-hovered");
        // 이벤트 발생 시 링크에 호버 클래스 제거
      });
    });
  });
  
  return '<section class="menu-cursor"><div class="cursor"></div><nav class="link-cursor"><ul><li>Home</li><li>About</li><li>Services</li><li>Contact</li></ul></nav></section>'
};

export const MenuDim = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector(".menu-btn");
    // 버튼 요소 변수 설정
    const menuContent = document.querySelector(".menu");
    // 메뉴 요소 변수 설정

    menuBtn.addEventListener("click", () => {
      // 버튼에 클릭 이벤트 리스너 추가
      menuContent.classList.toggle("open");
      // 클릭시 open 클래스 추가 및 제거
    });
  });
  return '<section class="menu-dim"><div class="menu"><nav><a href="" class="link" style="animation-delay: 0.2s;">Home</a><a href="" class="link" style="animation-delay: 0.3s;">Recipes</a><a href="" class="link" style="animation-delay: 0.4s;">Favorites</a><a href="" class="link" style="animation-delay: 0.5s;">About Us</a><a href="#" class="link" style="animation-delay: 0.6s;">Contact</a></nav></div><button class="menu-btn"></button><div class="backdrop"></div></section>'
};