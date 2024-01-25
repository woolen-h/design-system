/* empty css               */const ye=({state:F="",backgroundColor:E="",border:he="",borderColor:_e="",label:we="Button",onClick:Oe,dataBack:fe="",dataFront:De=""})=>{const e=document.createElement("button");return e.className=[`btn ${F}-btn`],e.style.backgroundColor=E,e.style.border=he,e.style.borderColor=_e,e.innerHTML=we,e.addEventListener("click",Oe),e.dataset.back=fe,e.dataset.front=De,e},Le=()=>'<div class="btn switch-btn"><input type="checkbox" class="checkbox" id="checkbox"><label class="switch" for="checkbox"><span class="slider"></span></label></div>',Ie={title:"Components/Button"},r=({state:F,...E})=>ye({state:F,...E}),t=r.bind({});t.args={state:"default",label:"Default Button",backgroundColor:"",border:"",borderColor:""};const a=r.bind({});a.args={state:"primary",label:"Primary Button",backgroundColor:"",border:"",borderColor:""};const o=r.bind({});o.args={state:"success",label:"Success Button",backgroundColor:"",border:"",borderColor:""};const n=r.bind({});n.args={state:"danger",label:"Danger Button",backgroundColor:"",border:"",borderColor:""};const s=r.bind({});s.args={state:"warning",label:"Warning Button",backgroundColor:"",border:"",borderColor:""};const c=r.bind({});c.args={state:"info",label:"Info Button",backgroundColor:"",border:"",borderColor:""};const u=r.bind({});u.args={state:"light",label:"Light Button",backgroundColor:"",border:"",borderColor:""};const d=r.bind({});d.args={state:"dark",label:"Dark Button",backgroundColor:"",border:"",borderColor:""};const l=r.bind({});l.args={state:"link",label:"Link Button",backgroundColor:"",border:"",borderColor:""};const i=r.bind({});i.args={state:"outline primary",label:"Outline Primary Button",backgroundColor:"",border:"",borderColor:""};const g=r.bind({});g.args={state:"outline success",label:"Outline Success Button",backgroundColor:"",border:"",borderColor:""};const b=r.bind({});b.args={state:"outline danger",label:"Outline Danger Button",backgroundColor:"",border:"",borderColor:""};const p=r.bind({});p.args={state:"outline warning",label:"Outline Warning Button",backgroundColor:"",border:"",borderColor:""};const m=r.bind({});m.args={state:"outline info",label:"Outline Info Button",backgroundColor:"",border:"",borderColor:""};const B=r.bind({});B.args={state:"outline light",label:"Outline Light Button",backgroundColor:"",border:"",borderColor:""};const C=r.bind({});C.args={state:"outline dark",label:"Outline Dark Button",backgroundColor:"",border:"",borderColor:""};const k=r.bind({});k.args={state:"swipe",label:"Swipe Button",backgroundColor:"",border:"",borderColor:""};const S=r.bind({});S.args={state:"diagonal-swipe",label:"<span>Diagonal Swipe Button</span>",backgroundColor:"",border:"",borderColor:""};const h=r.bind({});h.args={state:"bubble",label:"Bubble Button",backgroundColor:"",border:"",borderColor:""};const _=r.bind({});_.args={state:"border-01",label:"<svg><rect x='0' y='0' fill='none' width='100%' height='100%'><p>Border Button 01</p></rect></svg>",backgroundColor:"",border:"",borderColor:""};const w=r.bind({});w.args={state:"border-02",label:"Border Button 02",backgroundColor:"",border:"",borderColor:""};const O=r.bind({});O.args={state:"border-03",label:"Border Button 03",backgroundColor:"",border:"",borderColor:""};const f=r.bind({});f.args={state:"border-04",label:"Border Button 04",backgroundColor:"",border:"",borderColor:""};const D=r.bind({});D.args={state:"shadow",label:"Shadow Button",backgroundColor:"",border:"",borderColor:""};const y=r.bind({});y.args={state:"shining",label:"Shining Button",backgroundColor:"",border:"",borderColor:""};const L=r.bind({});L.args={state:"glow",label:"Glow Button",backgroundColor:"",border:"",borderColor:""};const x=r.bind({});x.args={state:"flip",label:"",backgroundColor:"",border:"",borderColor:"",dataFront:"Front",dataBack:"Back"};const I=r.bind({});I.args={state:"linebox",label:"Linebox Button",backgroundColor:"",border:"",borderColor:""};const P=r.bind({});P.args={state:"icon-animate",label:"<span class='circle'><span class='icon arrow'></span></span><span class='btn-text'>Icon Button</span>",backgroundColor:"",border:"",borderColor:""};const W=r.bind({});W.args={state:"icon-only",label:"<i class='fi fi-sr-heart'></i>",backgroundColor:"",border:"",borderColor:""};const v=Le;var G,A,T;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(T=(A=t.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var H,M,N;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(N=(M=a.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var $,j,q;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(q=(j=o.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,J,K;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,U;s.parameters={...s.parameters,docs:{...(Q=s.parameters)==null?void 0:Q.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(U=(R=s.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var V,X,Y;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,rr,er;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(er=(rr=u.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var tr,ar,or;d.parameters={...d.parameters,docs:{...(tr=d.parameters)==null?void 0:tr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(or=(ar=d.parameters)==null?void 0:ar.docs)==null?void 0:or.source}}};var nr,sr,cr;l.parameters={...l.parameters,docs:{...(nr=l.parameters)==null?void 0:nr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(cr=(sr=l.parameters)==null?void 0:sr.docs)==null?void 0:cr.source}}};var ur,dr,lr;i.parameters={...i.parameters,docs:{...(ur=i.parameters)==null?void 0:ur.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(lr=(dr=i.parameters)==null?void 0:dr.docs)==null?void 0:lr.source}}};var ir,gr,br;g.parameters={...g.parameters,docs:{...(ir=g.parameters)==null?void 0:ir.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(br=(gr=g.parameters)==null?void 0:gr.docs)==null?void 0:br.source}}};var pr,mr,Br;b.parameters={...b.parameters,docs:{...(pr=b.parameters)==null?void 0:pr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(Br=(mr=b.parameters)==null?void 0:mr.docs)==null?void 0:Br.source}}};var Cr,kr,Sr;p.parameters={...p.parameters,docs:{...(Cr=p.parameters)==null?void 0:Cr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(Sr=(kr=p.parameters)==null?void 0:kr.docs)==null?void 0:Sr.source}}};var hr,_r,wr;m.parameters={...m.parameters,docs:{...(hr=m.parameters)==null?void 0:hr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(wr=(_r=m.parameters)==null?void 0:_r.docs)==null?void 0:wr.source}}};var Or,fr,Dr;B.parameters={...B.parameters,docs:{...(Or=B.parameters)==null?void 0:Or.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(Dr=(fr=B.parameters)==null?void 0:fr.docs)==null?void 0:Dr.source}}};var yr,Lr,xr;C.parameters={...C.parameters,docs:{...(yr=C.parameters)==null?void 0:yr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(xr=(Lr=C.parameters)==null?void 0:Lr.docs)==null?void 0:xr.source}}};var Ir,Pr,Wr;k.parameters={...k.parameters,docs:{...(Ir=k.parameters)==null?void 0:Ir.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(Wr=(Pr=k.parameters)==null?void 0:Pr.docs)==null?void 0:Wr.source}}};var vr,Fr,Er;S.parameters={...S.parameters,docs:{...(vr=S.parameters)==null?void 0:vr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(Er=(Fr=S.parameters)==null?void 0:Fr.docs)==null?void 0:Er.source}}};var Gr,Ar,Tr;h.parameters={...h.parameters,docs:{...(Gr=h.parameters)==null?void 0:Gr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(Tr=(Ar=h.parameters)==null?void 0:Ar.docs)==null?void 0:Tr.source}}};var Hr,Mr,Nr;_.parameters={..._.parameters,docs:{...(Hr=_.parameters)==null?void 0:Hr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(Nr=(Mr=_.parameters)==null?void 0:Mr.docs)==null?void 0:Nr.source}}};var $r,jr,qr;w.parameters={...w.parameters,docs:{...($r=w.parameters)==null?void 0:$r.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(qr=(jr=w.parameters)==null?void 0:jr.docs)==null?void 0:qr.source}}};var zr,Jr,Kr;O.parameters={...O.parameters,docs:{...(zr=O.parameters)==null?void 0:zr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(Kr=(Jr=O.parameters)==null?void 0:Jr.docs)==null?void 0:Kr.source}}};var Qr,Rr,Ur;f.parameters={...f.parameters,docs:{...(Qr=f.parameters)==null?void 0:Qr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(Ur=(Rr=f.parameters)==null?void 0:Rr.docs)==null?void 0:Ur.source}}};var Vr,Xr,Yr;D.parameters={...D.parameters,docs:{...(Vr=D.parameters)==null?void 0:Vr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(Yr=(Xr=D.parameters)==null?void 0:Xr.docs)==null?void 0:Yr.source}}};var Zr,re,ee;y.parameters={...y.parameters,docs:{...(Zr=y.parameters)==null?void 0:Zr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(ee=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ee.source}}};var te,ae,oe;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(oe=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,se,ce;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(ce=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ue,de,le;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(le=(de=I.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ie,ge,be;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(be=(ge=P.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var pe,me,Be;W.parameters={...W.parameters,docs:{...(pe=W.parameters)==null?void 0:pe.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return Button.createButton({
    state,
    ...args
  });
}`,...(Be=(me=W.parameters)==null?void 0:me.docs)==null?void 0:Be.source}}};var Ce,ke,Se;v.parameters={...v.parameters,docs:{...(Ce=v.parameters)==null?void 0:Ce.docs,source:{originalSource:"Button.switchButton",...(Se=(ke=v.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};const Pe=["Default","Primary","Success","Danger","Warning","Info","Light","Dark","Link","Outline_Primary","Outline_Success","Outline_Danger","Outline_Warning","Outline_Info","Outline_Light","Outline_Dark","Swipe","DiagonalSwipe","Bubble","Border_01","Border_02","Border_03","Border_04","Shadow","Shining","Glow","Flip","Linebox","Icon_Animate","Icon_Only","Switch"];export{_ as Border_01,w as Border_02,O as Border_03,f as Border_04,h as Bubble,n as Danger,d as Dark,t as Default,S as DiagonalSwipe,x as Flip,L as Glow,P as Icon_Animate,W as Icon_Only,c as Info,u as Light,I as Linebox,l as Link,b as Outline_Danger,C as Outline_Dark,m as Outline_Info,B as Outline_Light,i as Outline_Primary,g as Outline_Success,p as Outline_Warning,a as Primary,D as Shadow,y as Shining,o as Success,k as Swipe,v as Switch,s as Warning,Pe as __namedExportsOrder,Ie as default};
