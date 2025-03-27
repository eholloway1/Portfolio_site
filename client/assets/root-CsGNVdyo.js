import{u as Ke,T as Ve,R as Ne,D as Be,a as Fe,G as Ge,b as _,c as Ee,d as ze,s as He,e as qe,g as je,w as Ue,f as We}from"./DefaultPropsProvider-BM8TEHQD.js";import{r as a,l as n,M as Ye,L as Qe,S as Je,n as Xe,O as Ze,o as et}from"./chunk-K6CSEXPM-C3lO4Mx0.js";const Te=a.createContext(null);function te(){return a.useContext(Te)}const tt=typeof Symbol=="function"&&Symbol.for,ot=tt?Symbol.for("mui.nested"):"__THEME_NESTED__";function st(e,t){return typeof t=="function"?t(e):{...e,...t}}function rt(e){const{children:t,theme:o}=e,s=te(),m=a.useMemo(()=>{const d=s===null?{...o}:st(s,o);return d!=null&&(d[ot]=s!==null),d},[o,s]);return n.jsx(Te.Provider,{value:m,children:t})}const xe={};function ke(e,t,o,s=!1){return a.useMemo(()=>{const m=e&&t[e]||t;if(typeof o=="function"){const d=o(m),r=e?{...t,[e]:d}:d;return s?()=>r:r}return e?{...t,[e]:o}:{...t,...o}},[e,t,o,s])}function we(e){const{children:t,theme:o,themeId:s}=e,m=Ke(xe),d=te()||xe,r=ke(s,m,o),u=ke(s,d,o,!0),S=(s?r[s]:r).direction==="rtl";return n.jsx(rt,{theme:u,children:n.jsx(Ve.Provider,{value:r,children:n.jsx(Ne,{value:S,children:n.jsx(Be,{value:s?r[s].components:r.components,children:t})})})})}const oe="mode",se="color-scheme",nt="data-color-scheme";function ct(e){const{defaultMode:t="system",defaultLightColorScheme:o="light",defaultDarkColorScheme:s="dark",modeStorageKey:m=oe,colorSchemeStorageKey:d=se,attribute:r=nt,colorSchemeNode:u="document.documentElement",nonce:S}=e||{};let b="",g=r;if(r==="class"&&(g=".%s"),r==="data"&&(g="[data-%s]"),g.startsWith(".")){const p=g.substring(1);b+=`${u}.classList.remove('${p}'.replace('%s', light), '${p}'.replace('%s', dark));
      ${u}.classList.add('${p}'.replace('%s', colorScheme));`}const M=g.match(/\[([^\]]+)\]/);if(M){const[p,h]=M[1].split("=");h||(b+=`${u}.removeAttribute('${p}'.replace('%s', light));
      ${u}.removeAttribute('${p}'.replace('%s', dark));`),b+=`
      ${u}.setAttribute('${p}'.replace('%s', colorScheme), ${h?`${h}.replace('%s', colorScheme)`:'""'});`}else b+=`${u}.setAttribute('${g}', colorScheme);`;return n.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?S:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${m}') || '${t}';
  const dark = localStorage.getItem('${d}-dark') || '${s}';
  const light = localStorage.getItem('${d}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${b}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function it(){}const lt=({key:e,storageWindow:t})=>(!t&&typeof window<"u"&&(t=window),{get(o){if(typeof window>"u")return;if(!t)return o;let s;try{s=t.localStorage.getItem(e)}catch{}return s||o},set:o=>{if(t)try{t.localStorage.setItem(e,o)}catch{}},subscribe:o=>{if(!t)return it;const s=m=>{const d=m.newValue;m.key===e&&o(d)};return t.addEventListener("storage",s),()=>{t.removeEventListener("storage",s)}}});function X(){}function Me(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function ve(e,t){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return t("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return t("dark")}function at(e){return ve(e,t=>{if(t==="light")return e.lightColorScheme;if(t==="dark")return e.darkColorScheme})}function dt(e){const{defaultMode:t="light",defaultLightColorScheme:o,defaultDarkColorScheme:s,supportedColorSchemes:m=[],modeStorageKey:d=oe,colorSchemeStorageKey:r=se,storageWindow:u=typeof window>"u"?void 0:window,storageManager:S=lt,noSsr:b=!1}=e,g=m.join(","),M=m.length>1,p=a.useMemo(()=>S==null?void 0:S({key:d,storageWindow:u}),[S,d,u]),h=a.useMemo(()=>S==null?void 0:S({key:`${r}-light`,storageWindow:u}),[S,r,u]),C=a.useMemo(()=>S==null?void 0:S({key:`${r}-dark`,storageWindow:u}),[S,r,u]),[w,A]=a.useState(()=>{const c=(p==null?void 0:p.get(t))||t,i=(h==null?void 0:h.get(o))||o,l=(C==null?void 0:C.get(s))||s;return{mode:c,systemMode:Me(c),lightColorScheme:i,darkColorScheme:l}}),[$,H]=a.useState(b||!M);a.useEffect(()=>{H(!0)},[]);const R=at(w),I=a.useCallback(c=>{A(i=>{if(c===i.mode)return i;const l=c??t;return p==null||p.set(l),{...i,mode:l,systemMode:Me(l)}})},[p,t]),P=a.useCallback(c=>{c?typeof c=="string"?c&&!g.includes(c)?console.error(`\`${c}\` does not exist in \`theme.colorSchemes\`.`):A(i=>{const l={...i};return ve(i,f=>{f==="light"&&(h==null||h.set(c),l.lightColorScheme=c),f==="dark"&&(C==null||C.set(c),l.darkColorScheme=c)}),l}):A(i=>{const l={...i},f=c.light===null?o:c.light,L=c.dark===null?s:c.dark;return f&&(g.includes(f)?(l.lightColorScheme=f,h==null||h.set(f)):console.error(`\`${f}\` does not exist in \`theme.colorSchemes\`.`)),L&&(g.includes(L)?(l.darkColorScheme=L,C==null||C.set(L)):console.error(`\`${L}\` does not exist in \`theme.colorSchemes\`.`)),l}):A(i=>(h==null||h.set(o),C==null||C.set(s),{...i,lightColorScheme:o,darkColorScheme:s}))},[g,h,C,o,s]),K=a.useCallback(c=>{w.mode==="system"&&A(i=>{const l=c!=null&&c.matches?"dark":"light";return i.systemMode===l?i:{...i,systemMode:l}})},[w.mode]),B=a.useRef(K);return B.current=K,a.useEffect(()=>{if(typeof window.matchMedia!="function"||!M)return;const c=(...l)=>B.current(...l),i=window.matchMedia("(prefers-color-scheme: dark)");return i.addListener(c),c(i),()=>{i.removeListener(c)}},[M]),a.useEffect(()=>{if(M){const c=(p==null?void 0:p.subscribe(f=>{(!f||["light","dark","system"].includes(f))&&I(f||t)}))||X,i=(h==null?void 0:h.subscribe(f=>{(!f||g.match(f))&&P({light:f})}))||X,l=(C==null?void 0:C.subscribe(f=>{(!f||g.match(f))&&P({dark:f})}))||X;return()=>{c(),i(),l()}}},[P,I,g,t,u,M,p,h,C]),{...w,mode:$?w.mode:void 0,systemMode:$?w.systemMode:void 0,colorScheme:$?R:void 0,setMode:I,setColorScheme:P}}const mt="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function ut(e){const{themeId:t,theme:o={},modeStorageKey:s=oe,colorSchemeStorageKey:m=se,disableTransitionOnChange:d=!1,defaultColorScheme:r,resolveTheme:u}=e,S={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},b=a.createContext(void 0),g=()=>a.useContext(b)||S,M={},p={};function h($){var ye,ge,Ce,be;const{children:H,theme:R,modeStorageKey:I=s,colorSchemeStorageKey:P=m,disableTransitionOnChange:K=d,storageManager:B,storageWindow:c=typeof window>"u"?void 0:window,documentNode:i=typeof document>"u"?void 0:document,colorSchemeNode:l=typeof document>"u"?void 0:document.documentElement,disableNestedContext:f=!1,disableStyleSheetGeneration:L=!1,defaultMode:Le="system",forceThemeRerender:Oe=!1,noSsr:Ae}=$,q=a.useRef(!1),U=te(),W=a.useContext(b),Y=!!W&&!f,re=a.useMemo(()=>R||(typeof o=="function"?o():o),[R]),ne=re[t],x=ne||re,{colorSchemes:v=M,components:ce=p,cssVarPrefix:Q}=x,ie=Object.keys(v).filter(k=>!!v[k]).join(","),D=a.useMemo(()=>ie.split(","),[ie]),le=typeof r=="string"?r:r.light,ae=typeof r=="string"?r:r.dark,Pe=v[le]&&v[ae]?Le:((ge=(ye=v[x.defaultColorScheme])==null?void 0:ye.palette)==null?void 0:ge.mode)||((Ce=x.palette)==null?void 0:Ce.mode),{mode:De,setMode:de,systemMode:me,lightColorScheme:ue,darkColorScheme:he,colorScheme:_e,setColorScheme:fe}=dt({supportedColorSchemes:D,defaultLightColorScheme:le,defaultDarkColorScheme:ae,modeStorageKey:I,colorSchemeStorageKey:P,defaultMode:Pe,storageManager:B,storageWindow:c,noSsr:Ae});let J=De,E=_e;Y&&(J=W.mode,E=W.colorScheme);let F=E||x.defaultColorScheme;x.vars&&!Oe&&(F=x.defaultColorScheme);const V=a.useMemo(()=>{var O;const k=((O=x.generateThemeVars)==null?void 0:O.call(x))||x.vars,y={...x,components:ce,colorSchemes:v,cssVarPrefix:Q,vars:k};if(typeof y.generateSpacing=="function"&&(y.spacing=y.generateSpacing()),F){const T=v[F];T&&typeof T=="object"&&Object.keys(T).forEach(j=>{T[j]&&typeof T[j]=="object"?y[j]={...y[j],...T[j]}:y[j]=T[j]})}return u?u(y):y},[x,F,ce,v,Q]),N=x.colorSchemeSelector;Fe(()=>{if(E&&l&&N&&N!=="media"){const k=N;let y=N;if(k==="class"&&(y=".%s"),k==="data"&&(y="[data-%s]"),k!=null&&k.startsWith("data-")&&!k.includes("%s")&&(y=`[${k}="%s"]`),y.startsWith("."))l.classList.remove(...D.map(O=>y.substring(1).replace("%s",O))),l.classList.add(y.substring(1).replace("%s",E));else{const O=y.replace("%s",E).match(/\[([^\]]+)\]/);if(O){const[T,j]=O[1].split("=");j||D.forEach(Ie=>{l.removeAttribute(T.replace(E,Ie))}),l.setAttribute(T,j?j.replace(/"|'/g,""):"")}else l.setAttribute(y,E)}}},[E,N,l,D]),a.useEffect(()=>{let k;if(K&&q.current&&i){const y=i.createElement("style");y.appendChild(i.createTextNode(mt)),i.head.appendChild(y),window.getComputedStyle(i.body),k=setTimeout(()=>{i.head.removeChild(y)},1)}return()=>{clearTimeout(k)}},[E,K,i]),a.useEffect(()=>(q.current=!0,()=>{q.current=!1}),[]);const Re=a.useMemo(()=>({allColorSchemes:D,colorScheme:E,darkColorScheme:he,lightColorScheme:ue,mode:J,setColorScheme:fe,setMode:de,systemMode:me}),[D,E,he,ue,J,fe,de,me,V.colorSchemeSelector]);let Se=!0;(L||x.cssVariables===!1||Y&&(U==null?void 0:U.cssVarPrefix)===Q)&&(Se=!1);const pe=n.jsxs(a.Fragment,{children:[n.jsx(we,{themeId:ne?t:void 0,theme:V,children:H}),Se&&n.jsx(Ge,{styles:((be=V.generateStyleSheets)==null?void 0:be.call(V))||[]})]});return Y?pe:n.jsx(b.Provider,{value:Re,children:pe})}const C=typeof r=="string"?r:r.light,w=typeof r=="string"?r:r.dark;return{CssVarsProvider:h,useColorScheme:g,getInitColorSchemeScript:$=>ct({colorSchemeStorageKey:m,defaultLightColorScheme:C,defaultDarkColorScheme:w,modeStorageKey:s,...$})}}function Z({theme:e,...t}){const o=_ in e?e[_]:void 0;return n.jsx(we,{...t,themeId:o?_:void 0,theme:o||e})}const G={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:ht}=ut({themeId:_,theme:()=>Ee({cssVariables:!0}),colorSchemeStorageKey:G.colorSchemeStorageKey,modeStorageKey:G.modeStorageKey,defaultColorScheme:{light:G.defaultLightColorScheme,dark:G.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:ze(e.palette,e.typography)};return t.unstable_sx=function(s){return He({sx:s,theme:this})},t}}),ft=ht;function St({theme:e,...t}){if(typeof e=="function")return n.jsx(Z,{theme:e,...t});const o=_ in e?e[_]:e;return"colorSchemes"in o?n.jsx(ft,{theme:e,...t}):"vars"in o?n.jsx(Z,{theme:e,...t}):n.jsx(Z,{theme:{...e,vars:null},...t})}const ee=typeof je({})=="function",pt=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),yt=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),$e=(e,t=!1)=>{var d,r;const o={};t&&e.colorSchemes&&typeof e.getColorSchemeSelector=="function"&&Object.entries(e.colorSchemes).forEach(([u,S])=>{var g,M;const b=e.getColorSchemeSelector(u);b.startsWith("@")?o[b]={":root":{colorScheme:(g=S.palette)==null?void 0:g.mode}}:o[b.replace(/\s*&/,"")]={colorScheme:(M=S.palette)==null?void 0:M.mode}});let s={html:pt(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...yt(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...o};const m=(r=(d=e.components)==null?void 0:d.MuiCssBaseline)==null?void 0:r.styleOverrides;return m&&(s=[s,m]),s},z="mui-ecs",gt=e=>{const t=$e(e,!1),o=Array.isArray(t)?t[0]:t;return!e.vars&&o&&(o.html[`:root:has(${z})`]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([s,m])=>{var r,u;const d=e.getColorSchemeSelector(s);d.startsWith("@")?o[d]={[`:root:not(:has(.${z}))`]:{colorScheme:(r=m.palette)==null?void 0:r.mode}}:o[d.replace(/\s*&/,"")]={[`&:not(:has(.${z}))`]:{colorScheme:(u=m.palette)==null?void 0:u.mode}}}),t},Ct=je(ee?({theme:e,enableColorScheme:t})=>$e(e,t):({theme:e})=>gt(e));function bt(e){const t=qe({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:s=!1}=t;return n.jsxs(a.Fragment,{children:[ee&&n.jsx(Ct,{enableColorScheme:s}),!ee&&!s&&n.jsx("span",{className:z,style:{display:"none"}}),o]})}const Et=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}],xt=Ee({palette:{mode:"dark"}});function jt({children:e}){return n.jsxs("html",{lang:"en",children:[n.jsxs("head",{children:[n.jsx("meta",{charSet:"utf-8"}),n.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.jsx(Ye,{}),n.jsx(Qe,{})]}),n.jsxs("body",{children:[e,n.jsx(Je,{}),n.jsx(Xe,{})]})]})}const Tt=Ue(function(){return n.jsxs(St,{theme:xt,children:[n.jsx(bt,{}),n.jsx(Ze,{})]})}),wt=We(function({error:t}){let o="Oops!",s="An unexpected error occurred.",m;return et(t)&&(o=t.status===404?"404":"Error",s=t.status===404?"The requested page could not be found.":t.statusText||s),n.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[n.jsx("h1",{children:o}),n.jsx("p",{children:s}),m]})});export{wt as ErrorBoundary,jt as Layout,Tt as default,Et as links};
