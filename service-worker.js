if(!self.define){let e,l={};const s=(s,i)=>(s=new URL(s+".js",i).href,l[s]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=l,document.head.appendChild(e)}else e=s,importScripts(s),l()})).then((()=>{let e=l[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(l[t])return;let r={};const o=e=>s(e,t),a={module:{uri:t},exports:r,require:o};l[t]=Promise.all(i.map((e=>a[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-4f586afe"],(function(e){"use strict";e.setCacheNameDetails({prefix:"plantilla"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/plantilla/css/app.f20eae22.css",revision:null},{url:"/plantilla/css/chunk-vendors.832cdaa5.css",revision:null},{url:"/plantilla/index.html",revision:"7d6617f92601b215b44f14ef47e15182"},{url:"/plantilla/js/about.d7241938.js",revision:null},{url:"/plantilla/js/app.6aaf9d63.js",revision:null},{url:"/plantilla/manifest.json",revision:"d953d50b0a763f2883fefdbad8e197e9"},{url:"/plantilla/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
