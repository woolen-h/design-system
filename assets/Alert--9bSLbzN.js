const r=({state:s="",label:a="This is Alert!"})=>{const t=document.createElement("div");return t.className=[`alert alert-${s}`],t.innerText=a,t},i=({state:s="",label:a="This is Alert!",icon_name:t=""})=>{const e=document.createElement("div"),n=document.createElement("i"),c=document.createElement("span");return e.classList.add("alert"),e.classList.add("alert-icon"),t.split(" ").forEach(l=>n.classList.add(l)),s&&e.classList.add(s),e.appendChild(n),e.appendChild(c),c.innerText=a,e.outerHTML};export{r as D,i as I};