/* empty css               */const he=({state:F="",backgroundColor:v="",border:Be="",borderColor:Ce="",label:Se="Button",onClick:ke,dataBack:_e="",dataFront:Oe=""})=>{const e=document.createElement("button");return e.className=[`btn ${F}-btn`],e.style.backgroundColor=v,e.style.border=Be,e.style.borderColor=Ce,e.innerHTML=Se,e.addEventListener("click",ke),e.dataset.back=_e,e.dataset.front=Oe,e},fe={title:"Components/Button"},r=({state:F,...v})=>he({state:F,...v}),a=r.bind({});a.args={state:"default",label:"Default Button",backgroundColor:"",border:"",borderColor:""};const t=r.bind({});t.args={state:"primary",label:"Primary Button",backgroundColor:"",border:"",borderColor:""};const o=r.bind({});o.args={state:"success",label:"Success Button",backgroundColor:"",border:"",borderColor:""};const n=r.bind({});n.args={state:"danger",label:"Danger Button",backgroundColor:"",border:"",borderColor:""};const s=r.bind({});s.args={state:"warning",label:"Warning Button",backgroundColor:"",border:"",borderColor:""};const c=r.bind({});c.args={state:"info",label:"Info Button",backgroundColor:"",border:"",borderColor:""};const u=r.bind({});u.args={state:"light",label:"Light Button",backgroundColor:"",border:"",borderColor:""};const d=r.bind({});d.args={state:"dark",label:"Dark Button",backgroundColor:"",border:"",borderColor:""};const l=r.bind({});l.args={state:"link",label:"Link Button",backgroundColor:"",border:"",borderColor:""};const i=r.bind({});i.args={state:"outline primary",label:"Outline Primary Button",backgroundColor:"",border:"",borderColor:""};const g=r.bind({});g.args={state:"outline success",label:"Outline Success Button",backgroundColor:"",border:"",borderColor:""};const b=r.bind({});b.args={state:"outline danger",label:"Outline Danger Button",backgroundColor:"",border:"",borderColor:""};const p=r.bind({});p.args={state:"outline warning",label:"Outline Warning Button",backgroundColor:"",border:"",borderColor:""};const m=r.bind({});m.args={state:"outline info",label:"Outline Info Button",backgroundColor:"",border:"",borderColor:""};const B=r.bind({});B.args={state:"outline light",label:"Outline Light Button",backgroundColor:"",border:"",borderColor:""};const C=r.bind({});C.args={state:"outline dark",label:"Outline Dark Button",backgroundColor:"",border:"",borderColor:""};const S=r.bind({});S.args={state:"swipe",label:"Swipe Button",backgroundColor:"",border:"",borderColor:""};const k=r.bind({});k.args={state:"diagonal-swipe",label:"<span>Diagonal Swipe Button</span>",backgroundColor:"",border:"",borderColor:""};const _=r.bind({});_.args={state:"bubble",label:"Bubble Button",backgroundColor:"",border:"",borderColor:""};const O=r.bind({});O.args={state:"border-01",label:"<svg><rect x='0' y='0' fill='none' width='100%' height='100%'><p>Border Button 01</p></rect></svg>",backgroundColor:"",border:"",borderColor:""};const h=r.bind({});h.args={state:"border-02",label:"Border Button 02",backgroundColor:"",border:"",borderColor:""};const w=r.bind({});w.args={state:"border-03",label:"Border Button 03",backgroundColor:"",border:"",borderColor:""};const f=r.bind({});f.args={state:"border-04",label:"Border Button 04",backgroundColor:"",border:"",borderColor:""};const D=r.bind({});D.args={state:"shadow",label:"Shadow Button",backgroundColor:"",border:"",borderColor:""};const y=r.bind({});y.args={state:"shining",label:"Shining Button",backgroundColor:"",border:"",borderColor:""};const L=r.bind({});L.args={state:"glow",label:"Glow Button",backgroundColor:"",border:"",borderColor:""};const I=r.bind({});I.args={state:"flip",label:"",backgroundColor:"",border:"",borderColor:"",dataFront:"Front",dataBack:"Back"};const x=r.bind({});x.args={state:"linebox",label:"Linebox Button",backgroundColor:"",border:"",borderColor:""};const P=r.bind({});P.args={state:"icon-animate",label:"<span class='circle'><span class='icon arrow'></span></span><span class='btn-text'>Icon Button</span>",backgroundColor:"",border:"",borderColor:""};const W=r.bind({});W.args={state:"icon-only",label:"<i class='fi fi-sr-heart'></i>",backgroundColor:"",border:"",borderColor:""};var E,G,A;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(A=(G=a.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var T,H,M;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(M=(H=t.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var N,$,j;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(j=($=o.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var q,z,J;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(J=(z=n.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,Q,R;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(R=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,V,X;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(X=(V=c.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,rr;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(rr=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:rr.source}}};var er,ar,tr;d.parameters={...d.parameters,docs:{...(er=d.parameters)==null?void 0:er.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(tr=(ar=d.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var or,nr,sr;l.parameters={...l.parameters,docs:{...(or=l.parameters)==null?void 0:or.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(sr=(nr=l.parameters)==null?void 0:nr.docs)==null?void 0:sr.source}}};var cr,ur,dr;i.parameters={...i.parameters,docs:{...(cr=i.parameters)==null?void 0:cr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(dr=(ur=i.parameters)==null?void 0:ur.docs)==null?void 0:dr.source}}};var lr,ir,gr;g.parameters={...g.parameters,docs:{...(lr=g.parameters)==null?void 0:lr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(gr=(ir=g.parameters)==null?void 0:ir.docs)==null?void 0:gr.source}}};var br,pr,mr;b.parameters={...b.parameters,docs:{...(br=b.parameters)==null?void 0:br.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(mr=(pr=b.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var Br,Cr,Sr;p.parameters={...p.parameters,docs:{...(Br=p.parameters)==null?void 0:Br.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(Sr=(Cr=p.parameters)==null?void 0:Cr.docs)==null?void 0:Sr.source}}};var kr,_r,Or;m.parameters={...m.parameters,docs:{...(kr=m.parameters)==null?void 0:kr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(Or=(_r=m.parameters)==null?void 0:_r.docs)==null?void 0:Or.source}}};var hr,wr,fr;B.parameters={...B.parameters,docs:{...(hr=B.parameters)==null?void 0:hr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(fr=(wr=B.parameters)==null?void 0:wr.docs)==null?void 0:fr.source}}};var Dr,yr,Lr;C.parameters={...C.parameters,docs:{...(Dr=C.parameters)==null?void 0:Dr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(Lr=(yr=C.parameters)==null?void 0:yr.docs)==null?void 0:Lr.source}}};var Ir,xr,Pr;S.parameters={...S.parameters,docs:{...(Ir=S.parameters)==null?void 0:Ir.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(Pr=(xr=S.parameters)==null?void 0:xr.docs)==null?void 0:Pr.source}}};var Wr,Fr,vr;k.parameters={...k.parameters,docs:{...(Wr=k.parameters)==null?void 0:Wr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(vr=(Fr=k.parameters)==null?void 0:Fr.docs)==null?void 0:vr.source}}};var Er,Gr,Ar;_.parameters={..._.parameters,docs:{...(Er=_.parameters)==null?void 0:Er.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(Ar=(Gr=_.parameters)==null?void 0:Gr.docs)==null?void 0:Ar.source}}};var Tr,Hr,Mr;O.parameters={...O.parameters,docs:{...(Tr=O.parameters)==null?void 0:Tr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(Mr=(Hr=O.parameters)==null?void 0:Hr.docs)==null?void 0:Mr.source}}};var Nr,$r,jr;h.parameters={...h.parameters,docs:{...(Nr=h.parameters)==null?void 0:Nr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(jr=($r=h.parameters)==null?void 0:$r.docs)==null?void 0:jr.source}}};var qr,zr,Jr;w.parameters={...w.parameters,docs:{...(qr=w.parameters)==null?void 0:qr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(Jr=(zr=w.parameters)==null?void 0:zr.docs)==null?void 0:Jr.source}}};var Kr,Qr,Rr;f.parameters={...f.parameters,docs:{...(Kr=f.parameters)==null?void 0:Kr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(Rr=(Qr=f.parameters)==null?void 0:Qr.docs)==null?void 0:Rr.source}}};var Ur,Vr,Xr;D.parameters={...D.parameters,docs:{...(Ur=D.parameters)==null?void 0:Ur.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(Xr=(Vr=D.parameters)==null?void 0:Vr.docs)==null?void 0:Xr.source}}};var Yr,Zr,re;y.parameters={...y.parameters,docs:{...(Yr=y.parameters)==null?void 0:Yr.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(re=(Zr=y.parameters)==null?void 0:Zr.docs)==null?void 0:re.source}}};var ee,ae,te;L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(te=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ne,se;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(se=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ce,ue,de;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(de=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var le,ie,ge;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(ge=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:ge.source}}};var be,pe,me;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`({
  state,
  ...args
}) => {
  return createButton({
    state,
    ...args
  });
}`,...(me=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const De=["Default","Primary","Success","Danger","Warning","Info","Light","Dark","Link","Outline_Primary","Outline_Success","Outline_Danger","Outline_Warning","Outline_Info","Outline_Light","Outline_Dark","Swipe","DiagonalSwipe","Bubble","Border_01","Border_02","Border_03","Border_04","Shadow","Shining","Glow","Flip","Linebox","Icon_Animate","Icon_Only"];export{O as Border_01,h as Border_02,w as Border_03,f as Border_04,_ as Bubble,n as Danger,d as Dark,a as Default,k as DiagonalSwipe,I as Flip,L as Glow,P as Icon_Animate,W as Icon_Only,c as Info,u as Light,x as Linebox,l as Link,b as Outline_Danger,C as Outline_Dark,m as Outline_Info,B as Outline_Light,i as Outline_Primary,g as Outline_Success,p as Outline_Warning,t as Primary,D as Shadow,y as Shining,o as Success,S as Swipe,s as Warning,De as __namedExportsOrder,fe as default};
