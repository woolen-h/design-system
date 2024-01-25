const $=({state:g="",label:m="This is Alert!"})=>{const d=document.createElement("div");return d.className=[`alert alert-${g}`],d.innerText=m,d},j={title:"Components/Alert"},r=({state:g,...m})=>$({state:g,...m}),e=r.bind({});e.args={state:"default"};const a=r.bind({});a.args={state:"primary"};const s=r.bind({});s.args={state:"success"};const t=r.bind({});t.args={state:"danger"};const n=r.bind({});n.args={state:"warning"};const c=r.bind({});c.args={state:"info"};const o=r.bind({});o.args={state:"light"};const u=r.bind({});u.args={state:"dark"};var i,p,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createAlert({
    state,
    ...args
  });
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var A,S,b;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createAlert({
    state,
    ...args
  });
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var f,D,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createAlert({
    state,
    ...args
  });
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var k,x,y;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createAlert({
    state,
    ...args
  });
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var T,_,E;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createAlert({
    state,
    ...args
  });
}`,...(E=(_=n.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var I,L,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createAlert({
    state,
    ...args
  });
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var W,v,w;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createAlert({
    state,
    ...args
  });
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var C,N,O;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createAlert({
    state,
    ...args
  });
}`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const q=["Default","Primary","Success","Danger","Warning","Info","Light","Dark"];export{t as Danger,u as Dark,e as Default,c as Info,o as Light,a as Primary,s as Success,n as Warning,q as __namedExportsOrder,j as default};
