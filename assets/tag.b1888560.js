import{p as c,g as d,r as u,I as m,q as g,t as p,v as i,x as f,s as l,o as v,c as R}from"./index.c939d199.js";const B=c({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function S(e){const n=d("useRender");n.render=e}function h(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const r=u(),s=u();if(m){const o=new ResizeObserver(t=>{e==null||e(t,o),t.length&&(n==="content"?s.value=t[0].contentRect:s.value=t[0].target.getBoundingClientRect())});g(()=>{o.disconnect()}),p(r,(t,a)=>{a&&(o.unobserve(i(a)),s.value=void 0),t&&o.observe(i(t))},{flush:"post"})}return{resizeRef:r,contentRect:f(s)}}function b(){const e=l(!1);return v(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:R(()=>e.value?void 0:{transition:"none !important"}),isBooted:f(e)}}const w=c({tag:{type:String,default:"div"}},"tag");export{w as a,b,S as c,B as m,h as u};
