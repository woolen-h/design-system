/* empty css               */const c=()=>(document.addEventListener("DOMContentLoaded",()=>{function t(){let n="";for(let o=1;o<=6;o++)n+=Math.floor(Math.random()*10);document.querySelector("#otpTextBox").value=n}t(),document.querySelector("#generateButton").addEventListener("click",t)}),'<div class="otp"><input type="text" id="otpTextBox" readonly /><button class="btn primary-btn" id="generateButton">Generate</button></div>'),u={title:"Components/Function"},e=c;var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"generateOTP",...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const i=["generate_OTP"];export{i as __namedExportsOrder,u as default,e as generate_OTP};
