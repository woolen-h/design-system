import './assets/css/link.css';

export const LinkHover = () => '<ul class="link-hover"><li><a href="">Home</a></li><li><a href="">About</a></li><li><a href="">Work</a></li><li><a href="">Services</a></li><li><a href="">Contact</a></li></ul>';


export const LinkCursor = () => {
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
return '<div class="cursor"></div><nav class="link-cursor"><ul><li>Home</li><li>About</li><li>Services</li><li>Contact</li></ul></nav>'
};
