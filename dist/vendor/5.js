(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{270:function(n,t,e){var r=e(271);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(26)(r,o);r.locals&&(n.exports=r.locals)},271:function(n,t,e){(n.exports=e(25)(!1)).push([n.i,".mapping .canvas-wrapper {\r\n  width: 2000%;\r\n  height: 2000vh;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.mapping {\r\n  /* overflow: hidden; */\r\n}",""])},329:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return v});e(267);var r=e(321),o=e.n(r),i=e(0),a=e.n(i),c=(e(270),e(82)),u=e(272),s=e(330),f=e(331);function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(n,t){return(d=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function y(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function h(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var v=function(n){function t(n){var e,r,i;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=p(t).call(this,n),e=!i||"object"!==l(i)&&"function"!=typeof i?y(r):i,h(y(y(e)),"componentDidMount",function(){e.bindKeyDown(),e.getMapping()}),h(y(y(e)),"bindKeyDown",function(){document.onkeydown=function(n){var t=n.ctrlKey,r=n.keyCode;if(t&&83===r){n.preventDefault();var o=DataCollector.getAll();e.send(o)}else n.stopPropagation()}}),h(y(y(e)),"send",function(n){var t=e.getMappingId();Object(c.a)({url:"save",params:{method:"POST",body:JSON.stringify({layout:n,id:t}),mode:"cors",headers:{"Content-Type":"application/json"}},success:function(n){n?location.reload():o.a.error("error with save")}})}),h(y(y(e)),"getMapping",function(){var n=e.getMappingId();Object(c.a)({url:"dist/layout/".concat(n,".json"),success:function(n){var t=Object(s.a)(new Date,"a HH:mm:ss",{locale:f.a});o.a.success("更新时间：".concat(t)),e.setState({data:n})}})}),h(y(y(e)),"getMappingId",function(){var n=location.hash.split("/"),t=n[n.length-1];if(t.includes("?")){var e=t.split("?");return e[e.length-1]}return t}),h(y(y(e)),"render",function(){var n=e.state.data;return a.a.createElement("div",{className:"mapping"},a.a.createElement(u.Toolbar,null),a.a.createElement(u.Canvas,{data:n,className:"canvas-wrapper",orientation:"v"}))}),e.state={data:{}},e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&d(n,t)}(t,i["Component"]),t}()},82:function(n,t,e){"use strict";var r={};e.d(t,"a",function(){return a});var o=["json","html","text"],i=["GET","POST","PUT","DELETE"],a=function(n){var t,e,o=n.url,i=n.key,a=n.method,f=void 0===a?"GET":a,p=n.data,d=n.type,y=void 0===d?"json":d,h=n.success,v=n.params,b=n.fix,m=void 0===b?"&":b,g=n.isProxy,w=void 0!==g&&g,O=n.error,j={};u(y),c(f),t=l(i,r,null,w)||o,e=s(t,p,m),"GET"!=f&&(j={body:JSON.stringify(p),method:f,headers:{"Content-Type":"application/json"}}),j=Object.assign({},j,v),fetch(t+e,j).then(function(n){return n[y]()}).then(function(n){return h&&h(n)}).catch(function(n){return O&&O(n)})},c=function(n){if(n){if(n=n.toUpperCase(),i.includes(n))return n;console.error("fetch method error.")}else console.error("fetch method is undefined.")},u=function(n){if(n){if(n=n.toLowerCase(),o.includes(n))return n;console.error("fetch type error.")}else console.error("fetch type is undefined.")},s=function(n,t,e){if(!n||!t)return"";var r=n.includes("?")?e:"?",o=f(t,e);return o?r+o:o},f=function(n,t){if(!n||0==Object.keys(n).lenght||n instanceof Array)return"";if("string"==typeof n)return n;var e="";for(var r in n)e+="".concat(r,"=").concat(n[r]).concat(t);return e=e.substr(0,e.length-("&"==t?1:3))},l=function(n,t,e,r){var o;for(var i in t)if(n==i){o=t[i];break}if(o)return e&&r&&(o=e+o),o}}}]);