if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,a)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const d=e=>c(e,s),n={module:{uri:s},exports:f,require:d};i[s]=Promise.all(r.map((e=>n[e]||d(e)))).then((e=>(a(...e),f)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2024/12/23/hello-world/index.html",revision:"9760172c27729f4b5c1465783b58fe41"},{url:"404.html",revision:"0973a6eb5434f4acc8ccd076063912f3"},{url:"about/index.html",revision:"9e11f3d99c3234d9aa811469caf68b63"},{url:"archives/2024/12/index.html",revision:"555f54961c383978086a2704be313b03"},{url:"archives/2024/index.html",revision:"95c40de59626ee83c47b4f1bf738a0c8"},{url:"archives/index.html",revision:"819342df54aeccd8a315e6e2ad575953"},{url:"categories/index.html",revision:"12125dfa686123ff7f08a5288fcbbbaf"},{url:"css/index.css",revision:"e2f9afe924a564f7b25a04c82df096d8"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"9e243e25f97d2edbc35af7c04bbfe87a"},{url:"galleryGroup/index.html",revision:"f684c7f0b064d1ceecb3f154fa1bff38"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"6c6e6b41693b1a56feecd844660f174d"},{url:"js/main.js",revision:"f93d9674fa0a266eefc65e92b21778be"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"link/index.html",revision:"c88b7fabcafa1cc17da445deb5c925ad"},{url:"shuoshuo/index.html",revision:"5e6b8a133b995a3ab384280fc44e25d4"},{url:"tags/index.html",revision:"8a562bf49ab63c0067872cee29c0c258"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
