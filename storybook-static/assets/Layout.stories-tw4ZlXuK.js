const x=()=>'<div class="img-gallery"><img src="https://images.unsplash.com/photo-1705887134848-cb615c34d83f?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><img src="https://images.unsplash.com/photo-1705861112562-17299d5850dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><img src="https://images.unsplash.com/photo-1690375097402-a5c023807ad3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><img src="https://images.unsplash.com/photo-1692041952978-6728ffc40f9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><img src="https://images.unsplash.com/photo-1705356504230-dbdd2ad28265?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"><img src="https://images.unsplash.com/photo-1699210086106-a9a0d3baa7c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div>',w=()=>(document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".menu-btn"),s=document.querySelector(".menu"),h=document.querySelectorAll(".menu-item");gsap.registerPlugin(ScrollTrigger);const c=gsap.timeline({duration:.8,ease:"power3.out"});let o=!1;function v(){o?n():(s.classList.add("active"),document.body.classList.add("sidebar-open"),c.to(s,{x:s.classList.contains("active")?"0":"100%"}),gsap.fromTo(h,{x:150},{x:0,duration:.2,stagger:.05,ease:"power4.out"}),o=!0)}function n(){s.classList.remove("active"),document.body.classList.remove("sidebar-open"),c.to(s,{x:s.classList.contains("active")?"0":"100%"}),o=!1}gsap.to(a,{scrollTrigger:{trigger:document.documentElement,start:0,end:window.innerHeight,onLeave:()=>{gsap.to(a,{scale:1})},onEnterBack:()=>{gsap.to(a,{scale:0}),n()}},duration:.25,ease:"power3.out"}),a.addEventListener("click",v)}),'<section class="gsap-menu"><aside class="menu"><div class="menu-header"><p>Navigation</p></div><div class="menu-items"><a href="#" class="menu-item">Home</a><a href="#" class="menu-item">Work</a><a href="#" class="menu-item">About Us</a><a href="#" class="menu-item">Contact</a></div></aside><button class="menu-btn"><i class="bi bi-list"></i></button><div class="container"><nav class="navbar"><div class="nav-logo"><p>@woolen_h</p></div><div class="nav-items"><a href="#" class="nav-item">Home</a><a href="#" class="nav-item">Work</a><a href="#" class="nav-item">About</a><a href="#" class="nav-item">Contact</a></div></nav><section class="landing"><h1>Menus Part 02</h1><p>Menu pop up on scroll using GSAP.</p></section></div><section class="section"><h1>Section 2</h1><p>Menu icon will Pop up in the top-right</p></section><section class="section"><h1>Section 3</h1></section></section><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>'),D=()=>(document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".toggle-btn"),s=document.querySelector(".side-bar");a.addEventListener("click",()=>{s.classList.toggle("active")})}),'<section class="side-bar"><nav><div class="sidebar-header"><a class="logo-wrapper"><i class="fi fi-brands-github"></i><h2 class="hidden">LOGO</h2></a><button class="toggle-btn"><i class="fi fi-br-angle-double-right"></i></button></div><div class="sidebar-links"><a class="link active"><i class="fi fi-br-house-blank"></i><span class="hidden">Home</span></a><a class="link"><i class="fi fi-br-folder"></i><span class="hidden">Projects</span></a><a class="link"><i class="fi fi-br-dice-d6"></i><span class="hidden">Dashboard</span></a></li><a class="link"><i class="fi fi-br-list-check"></i><span class="hidden">Tasks</span></a></div><div class="sidebar-bottom"><div class="sidebar-links"><a class="link"><i class="fi fi-br-settings-sliders"></i><span class="hidden">Settings</span></a></div><div class="user-profile"><div class="user-avatar"><img src="https://images.unsplash.com/photo-1588026193712-31163b26c043?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></div><div class="user-details hidden"><p class="username">Jane Doe</p><p class="user-email">janedoe@gmail.com</p></div></div></div></nav></section>'),M={title:"Components/Layout"},e=x,i=w,t=D;var r,l,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"Layout.imageGallery",...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,m,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"Layout.gsapMenu",...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,g,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"Layout.sideBar",...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const H=["Image_Gallery","GSAP_Menu","Side_Bar"];export{i as GSAP_Menu,e as Image_Gallery,t as Side_Bar,H as __namedExportsOrder,M as default};