const u=()=>(document.addEventListener("DOMContentLoaded",()=>{const l=document.querySelector("#bar"),s=document.querySelectorAll(".progress-step"),r=document.querySelector("#prev"),o=document.querySelector("#next");let e=1;o.addEventListener("click",()=>{e++,e>s.length&&(e=s.length),d()}),r.addEventListener("click",()=>{e--,e<1&&(e=1),d()});const d=()=>{s.forEach((a,v)=>{v<e?a.classList.add("active"):a.classList.remove("active")});const p=document.querySelectorAll(".active");l.style.width=(p.length-1)/(s.length-1)*100+"%",e===1?r.disabled=!0:e===s.length?o.disabled=!0:(o.disabled=!1,r.disabled=!1)}}),'<div class="container"><div class="progress-container"><div class="progress-bar" id="bar"></div><div class="progress-step active" id="step">1</div><div class="progress-step" id="step">2</div><div class="progress-step" id="step">3</div><div class="progress-step" id="step">4</div></div><button type="button" class="btn" id="prev" disabled>Prev</button><button type="button" class="btn" id="next">Next</button></div>'),b={title:"Components/Progress"},t=u;var c,i,n;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"StepProgressBar",...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const g=["Step_Progress_Bar"];export{t as Step_Progress_Bar,g as __namedExportsOrder,b as default};