if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const f=e=>a(e,c),r={module:{uri:c},exports:t,require:f};s[c]=Promise.all(n.map((e=>r[e]||f(e)))).then((e=>(i(...e),t)))}}define(["./workbox-2e6be583"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"70a3fd4bfcf7ed44727776e873516277"},{url:"/_next/static/Tvdh5J7FEmwdCxfZIfQjF/_buildManifest.js",revision:"c30de627c6e1c5428e93b99cae061c91"},{url:"/_next/static/Tvdh5J7FEmwdCxfZIfQjF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/20.df4304bdb0729f28.js",revision:"df4304bdb0729f28"},{url:"/_next/static/chunks/285-4c3bf9eec2748ef7.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/37e5948f-395f6b7ff4c8465b.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/564-071c033abe0f0722.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/663.a4681ba5cce910e5.js",revision:"a4681ba5cce910e5"},{url:"/_next/static/chunks/761.2616a89e8ff6a924.js",revision:"2616a89e8ff6a924"},{url:"/_next/static/chunks/891c1ab7.0fb14e07ca625af8.js",revision:"0fb14e07ca625af8"},{url:"/_next/static/chunks/913-f36335be3ead45f1.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/976-ce59bd7b8d6f8fae.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/app/_not-found-8d459a7ede980b65.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/app/layout-810c80ee6f315fa7.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/app/page-7811e7a65e8ede90.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/f923c8e2-509efca7c2f942fd.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/framework-c25027af42eb8c45.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/main-app-7ee95fa098c5aed6.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/main-daf19ed2b6103e20.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/pages/_app-40274b2a7dc5fe77.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/pages/_error-6150b857d13bda4e.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-c63bf4cead94cd14.js",revision:"Tvdh5J7FEmwdCxfZIfQjF"},{url:"/_next/static/css/771a9c599a94b676.css",revision:"771a9c599a94b676"},{url:"/_next/static/media/06f84bbfa4dc529c-s.woff2",revision:"1ed8ac111e2c06931a212bea88cd3db5"},{url:"/_next/static/media/103fb0c975d13c4f-s.p.woff2",revision:"6cd3f6ed33be1e6cf658812a0dba1e7f"},{url:"/_next/static/media/2d1c7424b9e2e78a-s.woff2",revision:"8c340790bb5a3bcb551cfeb4009ccc40"},{url:"/_next/static/media/36095f092c2dc4d2-s.woff2",revision:"8dd83912f98b42acd1bd4b445fa50ebb"},{url:"/_next/static/media/40e0cf09fb9cf950-s.woff2",revision:"10eca784720724fb8426e5ed5a08a00a"},{url:"/_next/static/media/9c4616764b12faa0-s.woff2",revision:"f9499dcf592984f86d5e4805aaddd2ac"},{url:"/_next/static/media/af332a3f052c7177-s.woff2",revision:"a6b121c7438024f99905d6b58cb1a88e"},{url:"/_next/static/media/b9e089430e7bb7f5-s.woff2",revision:"1c42933561de0cb206175c159990e404"},{url:"/apple-touch-icon.png",revision:"cd7d4b81dd46b59df1db19a2f77ba583"},{url:"/favicon-16x16.png",revision:"73412e45b5d6c6869247d7208907496f"},{url:"/favicon-32x32.png",revision:"db390518af795d982b7f70f530486384"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pwa-192x192.png",revision:"5356e620c3f893cbed4a3b46af522b48"},{url:"/pwa-512x512.png",revision:"94376d63384b342efef46f050a36f731"},{url:"/pwa-maskable-192x192.png",revision:"23898ab236260992e43aaa9421af6924"},{url:"/pwa-maskable-512x512.png",revision:"3520b08f875148027c840956afa3cf33"},{url:"/robots.txt",revision:"cc82fea14a75a25eedc657dcbf93163e"},{url:"/site.webmanifest",revision:"7911120c5e3eb9ef5cf12a4c40f28a70"},{url:"/sitemap-0.xml",revision:"9dcf89779492e2d83dada713d9c816e8"},{url:"/sitemap.xml",revision:"d6bf0336c97af28283652fe889e5af61"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
