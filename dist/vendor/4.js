(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{247:function(t,n,e){var r=e(248);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(28)(r,o);r.locals&&(t.exports=r.locals)},248:function(t,n,e){(t.exports=e(27)(!1)).push([t.i,".mapping .canvas {\r\n  width: 100%;\r\n  height: 100vh;\r\n}",""])},255:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return h});var r=e(0),o=e.n(r),i=(e(247),e(73)),c=e(249),a=e.n(c),u=e(250),s=e.n(u);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,n){return(p=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var h=function(t){function n(t){var e,r,c;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,c=l(n).call(this,t),e=!c||"object"!==f(c)&&"function"!=typeof c?d(r):c,y(d(d(e)),"componentDidMount",function(){e.bindKeyDown(),e.getMapping()}),y(d(d(e)),"bindKeyDown",function(){document.onkeydown=function(t){var n=t.ctrlKey,r=t.keyCode;if(n&&83===r){var o=DataCollector.getAll();e.send(o)}return!1}}),y(d(d(e)),"send",function(t){var n=e.getMappingId();Object(i.a)({url:"save",params:{method:"POST",body:JSON.stringify({layout:t,id:n}),mode:"cors",headers:{"Content-Type":"application/json"}},success:function(t){t||console.error("error with save")}})}),y(d(d(e)),"getMapping",function(){var t=e.getMappingId();Object(i.a)({url:"dist/layout/".concat(t,".json"),success:function(t){return e.setState({data:t})}})}),y(d(d(e)),"getMappingId",function(){var t=location.hash.split("/"),n=t[t.length-1];if(n.includes("?")){var e=n.split("?");return e[e.length-1]}return n}),y(d(d(e)),"render",function(){var t=e.state.data;return o.a.createElement("div",{className:"mapping"},o.a.createElement(s.a,null),o.a.createElement(a.a,{data:t,className:"canvas"}))}),e.state={data:{}},e}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&p(t,n)}(n,r["Component"]),n}()},73:function(t,n,e){"use strict";var r={};e.d(n,"a",function(){return c});var o=["json","html","text"],i=["GET","POST","PUT","DELETE"],c=function(t){var n,e,o=t.url,i=t.key,c=t.method,f=void 0===c?"GET":c,p=t.data,d=t.type,y=void 0===d?"json":d,h=t.success,v=t.params,b=t.fix,m=void 0===b?"&":b,g=t.isProxy,w=void 0!==g&&g,O=t.error,j={};u(y),a(f),n=l(i,r,null,w)||o,e=s(n,p,m),"GET"!=f&&(j={body:JSON.stringify(p),method:f,headers:{"Content-Type":"application/json"}}),j=Object.assign({},j,v),fetch(n+e,j).then(function(t){return t[y]()}).then(function(t){return h&&h(t)}).catch(function(t){return O&&O(t)})},a=function(t){if(t){if(t=t.toUpperCase(),i.includes(t))return t;console.error("fetch method error.")}else console.error("fetch method is undefined.")},u=function(t){if(t){if(t=t.toLowerCase(),o.includes(t))return t;console.error("fetch type error.")}else console.error("fetch type is undefined.")},s=function(t,n,e){if(!t||!n)return"";var r=t.includes("?")?e:"?",o=f(n,e);return o?r+o:o},f=function(t,n){if(!t||0==Object.keys(t).lenght||t instanceof Array)return"";if("string"==typeof t)return t;var e="";for(var r in t)e+="".concat(r,"=").concat(t[r]).concat(n);return e=e.substr(0,e.length-("&"==n?1:3))},l=function(t,n,e,r){var o;for(var i in n)if(t==i){o=n[i];break}if(o)return e&&r&&(o=e+o),o}}}]);