import './assets/css/menus.css';

export const MenuHover = () => '<section class="menu-hover"><ul class="link-hover"><li><a href="">Home</a></li><li><a href="">About</a></li><li><a href="">Work</a></li><li><a href="">Services</a></li><li><a href="">Contact</a></li></ul></section>';


export const MenuCursor = () => {
  document.addEventListener('DOMContentLoaded', () => {

    const cursor = document.querySelector(".cursor");
    const links = document.querySelectorAll("nav ul li");

    document.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursor.style.left = `${posX}px`;
      cursor.style.top = `${posY}px`;
    });

    links.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        cursor.classList.add("cursor-grow");
        link.classList.add("link-hovered");
      });
    });
    links.forEach((link) => {
      link.addEventListener("mouseleave", (e) => {
        cursor.classList.remove("cursor-grow");
        link.classList.remove("link-hovered");
      });
    });
  });
  
  return '<section class="menu-cursor"><div class="cursor"></div><nav class="link-cursor"><ul><li>Home</li><li>About</li><li>Services</li><li>Contact</li></ul></nav></section>'
};

export const MenuDim = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector(".menu-btn");
    const menuContent = document.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
      menuContent.classList.toggle("open");
    });
  });
  return '<section class="menu-dim"><div class="menu"><nav><a href="" class="link" style="animation-delay: 0.2s;">Home</a><a href="" class="link" style="animation-delay: 0.3s;">Recipes</a><a href="" class="link" style="animation-delay: 0.4s;">Favorites</a><a href="" class="link" style="animation-delay: 0.5s;">About Us</a><a href="#" class="link" style="animation-delay: 0.6s;">Contact</a></nav></div><button class="menu-btn"></button><div class="backdrop"></div></section>'
};