import "./assets/css/layout.css";

export const imageGallery = () => {
  return (
    '<div class="img-gallery">' +
    '<img src="https://images.unsplash.com/photo-1705887134848-cb615c34d83f?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />' +
    '<img src="https://images.unsplash.com/photo-1705861112562-17299d5850dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />' +
    '<img src="https://images.unsplash.com/photo-1690375097402-a5c023807ad3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />' +
    '<img src="https://images.unsplash.com/photo-1692041952978-6728ffc40f9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />' +
    '<img src="https://images.unsplash.com/photo-1705356504230-dbdd2ad28265?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />' +
    '<img src="https://images.unsplash.com/photo-1699210086106-a9a0d3baa7c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />' +
    "</div>"
  );
};

export const gsapMenu = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    // 메뉴 버튼 변수 할당
    const menu = document.querySelector(".menu");
    // 메뉴 변수 할당
    const menuItems = document.querySelectorAll(".menu-item");
    // 메뉴 아이템 전체 선택하여 노드 리스트로 변수 할당

    gsap.registerPlugin(ScrollTrigger);
    // ScrollTrigger 플러그인을 GSAP에 등록

    const tl = gsap.timeline({ duration: 0.8, ease: "power3.out" });
    // 타임라인 객체를 생성하여 tl 변수 할당
    // 0.8초 동안 실행, 애니메이션 이징 설정
    let isOpen = false;
    // 메뉴가 열려 있는지 여부 확인 변수 선언 및 false로 초기화

    function openMenu() {
      // 메뉴를 열기 위한 함수 정의
      if (!isOpen) {
        // isOpen 변수가 false인 경우(열려있지 않은 경우)
        menu.classList.add("active");
        // 메뉴에 active 클래스를 추가하여 활성화
        document.body.classList.add("sidebar-open");
        // 문서의 본문에 side-bar 오픈 클래스 추가

        tl.to(menu, {
          // GSAP 타임라인을 사용하여 menu 요소에 애니메이션 적용
          x: menu.classList.contains("active") ? "0" : "100%",
          // 현재 메뉴의 상태를 확인
          // 활성화된 경우 메뉴를 왼쪽에서 오른쪽으로 사라짐
          // 비활성화된 경우 오른쪽에서 왼쪽으로 나타냄
        });

        gsap.fromTo(
          // GSAP의 fromTo 메서드 사용
          menuItems,
          // 메뉴 아이템에 대한 애니메이션 적용
          {
            x: 150,
            // 오른쪽에서
          },
          {
            x: 0,
            // 왼쪽으로 이동하여 나타냄
            duration: 0.2,
            // 0.2초간 실행
            stagger: 0.05,
            // 애니메이션 지연
            ease: "power4.out",
            // 애니메이션 이징
          }
        );
        isOpen = true;
        // isOpen 변수를 true로 설정하여 메뉴 상태 업데이트
      } else {
        // isOpen 변수가 true인 경우(열려있는 경우)
        closeMenu();
        // 메뉴를 닫는 함수 호출
      }
    }
    function closeMenu() {
      // 메뉴를 닫기 위한 함수 정의
      menu.classList.remove("active");
      // 메뉴에서 active 클래스 제거하여 비활성화
      document.body.classList.remove("sidebar-open");
      // sidebar-open 클래스도 제거하여 비활성화

      tl.to(menu, {
        // GSAP의 타임라인 사용
        // menu 요소에 애니메이션 적용
        x: menu.classList.contains("active") ? "0" : "100%",
        // 메뉴의 상태 확인
        // 비활성화 시 메뉴를 오른쪽에서 왼쪽으로 나타냄
        // 활성화 시 메뉴를 왼쪽에서 오른쪽으로 닫음
      });

      isOpen = false;
      // isOpen 변수를 false로 설정하여 메뉴 상태 업데이트
    }

    gsap.to(menuBtn, {
      // GSAP을 이용하여 메뉴버튼 요소의 애니메이션 설정
      scrollTrigger: {
        // 특정 지점 스크롤시 애니메이션 발생
        trigger: document.documentElement,
        // 스크롤트리거를 활성화할 요소를 지정
        // 문서의 최상위요소를 사용하여 페이지 전체에 스크롤트리거를 적용
        start: 0,
        // 스크롤 트리거의 시작 위치 지정
        // 페이지 맨 위
        end: window.innerHeight,
        // 스크롤 트리거의 종료 위치 지정
        // 뷰포트의 높이만큼 스크롤 되었을 때 애니메이션 트리거
        onLeave: () => {
          // 스크롤이 특정 지점을 벗어나면 실행되는 콜백함수
          gsap.to(menuBtn, { scale: 1 });
          // 메뉴 버튼의 크기를 기본 크기로 변경
        },
        onEnterBack: () => {
          // 스크롤이 특정 지점에 들어오면 실행되는 콜백함수
          gsap.to(menuBtn, { scale: 0 });
          // 메뉴 버튼의 크기 축소
          closeMenu();
          // 메뉴를 닫는 함수 호출
        },
      },
      duration: 0.25,
      // 애니메이션의 지속시간 설정
      // 0.25초
      ease: "power3.out",
      // 애니메이션 이징
    });

    menuBtn.addEventListener("click", openMenu);
    // 메뉴버튼 요소에 클릭 이벤트 리스너 추가하여 메뉴 오픈 함수 호출
  });

  return (
    '<section class="gsap-menu">' +
    '<aside class="menu">' +
    '<div class="menu-header">' +
    "<p>Navigation</p>" +
    "</div>" +
    '<div class="menu-items">' +
    '<a href="#" class="menu-item">Home</a>' +
    '<a href="#" class="menu-item">Work</a>' +
    '<a href="#" class="menu-item">About Us</a>' +
    '<a href="#" class="menu-item">Contact</a>' +
    "</div>" +
    "</aside>" +
    '<button class="menu-btn">' +
    '<i class="bi bi-list"></i>' +
    "</button>" +
    '<div class="container">' +
    '<nav class="navbar">' +
    '<div class="nav-logo">' +
    "<p>@woolen_h</p>" +
    "</div>" +
    '<div class="nav-items">' +
    '<a href="#" class="nav-item">Home</a>' +
    '<a href="#" class="nav-item">Work</a>' +
    '<a href="#" class="nav-item">About</a>' +
    '<a href="#" class="nav-item">Contact</a>' +
    "</div>" +
    "</nav>" +
    '<section class="landing">' +
    "<h1>Menus Part 02</h1>" +
    "<p>Menu pop up on scroll using GSAP.</p>" +
    "</section>" +
    "</div>" +
    '<section class="section">' +
    "<h1>Section 2</h1>" +
    "<p>Menu icon will Pop up in the top-right</p>" +
    "</section>" +
    '<section class="section">' +
    "<h1>Section 3</h1>" +
    "</section>" +
    "</section>" +
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>' +
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>'
  );
};

export const sideBar = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const sidebarBtn = document.querySelector(".toggle-btn");
    const sidebar = document.querySelector(".side-bar");

    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  });

  return (
    '<section class="side-bar">' +
    "<nav>" +
    '<div class="sidebar-header">' +
    '<a class="logo-wrapper">' +
    '<i class="fi fi-brands-github"></i>' +
    '<h2 class="hidden">LOGO</h2>' +
    "</a>" +
    '<button class="toggle-btn">' +
    '<i class="fi fi-br-angle-double-right"></i>' +
    "</button>" +
    "</div>" +
    '<div class="sidebar-links">' +
    '<a class="link active">' +
    '<i class="fi fi-br-house-blank"></i>' +
    '<span class="hidden">Home</span>' +
    "</a>" +
    '<a class="link">' +
    '<i class="fi fi-br-folder"></i>' +
    '<span class="hidden">Projects</span>' +
    "</a>" +
    '<a class="link">' +
    '<i class="fi fi-br-dice-d6"></i>' +
    '<span class="hidden">Dashboard</span>' +
    "</a>" +
    '<a class="link">' +
    '<i class="fi fi-br-list-check"></i>' +
    '<span class="hidden">Tasks</span>' +
    "</a>" +
    "</div>" +
    '<div class="sidebar-bottom">' +
    '<div class="sidebar-links">' +
    '<a class="link">' +
    '<i class="fi fi-br-settings-sliders"></i>' +
    '<span class="hidden">Settings</span>' +
    "</a>" +
    "</div>" +
    '<div class="user-profile">' +
    '<div class="user-avatar">' +
    '<img src="https://images.unsplash.com/photo-1588026193712-31163b26c043?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />' +
    "</div>" +
    '<div class="user-details hidden">' +
    '<p class="username">Jane Doe</p>' +
    '<p class="user-email">janedoe@gmail.com</p>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "</nav>" +
    "</section>"
  );
};
