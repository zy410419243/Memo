(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{34:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e.n(r),o=e(36),c=e.n(o),u=e(0),i=e.n(u),s=e(52),f=e(98),d=e.n(f),l=(e(72),e(74),function(n){return n.children}),v=function(n){var t=n.value,e=n.onChange;return i.a.createElement("div",{className:"markdown-editor-wrapper"},i.a.createElement(l,null,i.a.createElement("textarea",{className:"markdown-body",onChange:e,value:t,onKeyUp:function(n){var t=n.currentTarget.value.substr(0,n.currentTarget.selectionStart).split("\n"),e=t.length,r=t[t.length-1].length;console.log(e+", "+r)}})),i.a.createElement("div",{className:"content markdown-body",style:{overflow:"auto"},dangerouslySetInnerHTML:{__html:d()(t||"")}}))},p=e(43);e.d(t,"showMessageAfterFetching",(function(){return w}));var h=function(n,t,e,r){return new(e||(e=Promise))((function(a,o){function c(n){try{i(r.next(n))}catch(n){o(n)}}function u(n){try{i(r.throw(n))}catch(n){o(n)}}function i(n){var t;n.done?a(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}i((r=r.apply(n,t||[])).next())}))};function w(n){n?alert("保存成功"):alert("保存失败")}t.default=function(){var n=Object(p.a)(),t=function(){return h(void 0,void 0,void 0,c.a.mark((function t(){var e,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={id:n,layout:o,category:"markdown",format:!0},t.next=3,fetch("/api/memo/document/update/content",{body:JSON.stringify(e),method:"POST",headers:{"Content-Type":"application/json"}});case 3:return r=t.sent,t.next=6,r.text();case 6:w(t.sent);case 8:case"end":return t.stop()}}),t)})))},e=Object(s.a)(n,"markdown-editor",t),r=a()(e,2),o=r[0],u=r[1];return i.a.createElement(v,{value:o,onChange:function(n){u(n.target.value)},onSave:t})}},43:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(n){var t=n||location.pathname;return t.endsWith("/")&&(t=t.substr(0,t.length-1)),t.substr(t.lastIndexOf("/")+1)}},52:function(n,t,e){"use strict";var r=e(36),a=e.n(r),o=e(1),c=e.n(o),u=e(0),i=function(n,t,e,r){return new(e||(e=Promise))((function(a,o){function c(n){try{i(r.next(n))}catch(n){o(n)}}function u(n){try{i(r.throw(n))}catch(n){o(n)}}function i(n){var t;n.done?a(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}i((r=r.apply(n,t||[])).next())}))};function s(n,t,e){return i(this,void 0,void 0,a.a.mark((function r(){var o,c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=n.ctrlKey,c=n.keyCode,!o||83!==c){r.next=9;break}if(n.preventDefault(),r.t0=e,!r.t0){r.next=7;break}return r.next=7,e(t);case 7:r.next=10;break;case 9:n.stopPropagation();case 10:case"end":return r.stop()}}),r)})))}e.d(t,"a",(function(){return d}));var f=function(n,t,e,r){return new(e||(e=Promise))((function(a,o){function c(n){try{i(r.next(n))}catch(n){o(n)}}function u(n){try{i(r.throw(n))}catch(n){o(n)}}function i(n){var t;n.done?a(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}i((r=r.apply(n,t||[])).next())}))};function d(n,t,e){var r=this,o="mapping"===t?"json":"md",i="./".concat(t,"/").concat(n,"/").concat(n,".").concat(o),d=Object(u.useState)(),l=c()(d,2),v=l[0],p=l[1];return function(n,t){Object(u.useEffect)((function(){var e=function(e){return s(e,n,t)};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[n,t])}(v,e),Object(u.useEffect)((function(){f(r,void 0,void 0,a.a.mark((function n(){var e,r,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="mapping"===t?"json":"text",n.next=3,fetch(i);case 3:return r=n.sent,n.next=6,r[e]();case 6:o=n.sent,p(o);case 8:case"end":return n.stop()}}),n)})))}),[n,t,i]),[v,p]}},74:function(n,t,e){var r=e(5),a=e(75);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1},c=(r(n.i,a,o),a.locals?a.locals:{});n.exports=c},75:function(n,t,e){(t=e(6)(!1)).push([n.i,".markdown-editor-wrapper {\n  display: grid;\n  font-size: 16px;\n  grid-template-columns: 50% 50%;\n  padding: 24px;\n  height: calc(100vh - 48px);\n  overflow: auto;\n}\n",""]),n.exports=t}}]);