(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{247:function(n,t,e){var r=e(248);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(28)(r,o);r.locals&&(n.exports=r.locals)},248:function(n,t,e){(n.exports=e(27)(!1)).push([n.i,".mapping .canvas {\r\n  height: 100vh;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.mapping {\r\n  overflow: hidden;\r\n}",""])},255:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return h});var r=e(0),o=e.n(r),i=(e(247),e(73)),c=e(249),a=e.n(c),u=e(250),s=e.n(u);function f(n){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function p(n,t){return(p=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function d(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function y(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var h=function(n){function t(n){var e,r,c;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,c=l(t).call(this,n),e=!c||"object"!==f(c)&&"function"!=typeof c?d(r):c,y(d(d(e)),"componentDidMount",function(){e.bindKeyDown(),e.getMapping()}),y(d(d(e)),"bindKeyDown",function(){document.onkeydown=function(n){var t=n.ctrlKey,r=n.keyCode;if(t&&83===r){var o=DataCollector.getAll();e.send(o)}return!1}}),y(d(d(e)),"send",function(n){var t=e.getMappingId();Object(i.a)({url:"save",params:{method:"POST",body:JSON.stringify({layout:n,id:t}),mode:"cors",headers:{"Content-Type":"application/json"}},success:function(n){n?location.reload():console.error("error with save")}})}),y(d(d(e)),"getMapping",function(){var n=e.getMappingId();Object(i.a)({url:"dist/layout/".concat(n,".json"),success:function(n){return e.setState({data:n})}})}),y(d(d(e)),"getMappingId",function(){var n=location.hash.split("/"),t=n[n.length-1];if(t.includes("?")){var e=t.split("?");return e[e.length-1]}return t}),y(d(d(e)),"render",function(){var n=e.state.data;return o.a.createElement("div",{className:"mapping"},o.a.createElement(s.a,null),o.a.createElement(a.a,{data:n,className:"canvas",orientation:"v"}))}),e.state={data:{}},e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&p(n,t)}(t,r["Component"]),t}()},73:function(n,t,e){"use strict";var r={};e.d(t,"a",function(){return c});var o=["json","html","text"],i=["GET","POST","PUT","DELETE"],c=function(n){var t,e,o=n.url,i=n.key,c=n.method,f=void 0===c?"GET":c,p=n.data,d=n.type,y=void 0===d?"json":d,h=n.success,v=n.params,b=n.fix,m=void 0===b?"&":b,g=n.isProxy,w=void 0!==g&&g,O=n.error,j={};u(y),a(f),t=l(i,r,null,w)||o,e=s(t,p,m),"GET"!=f&&(j={body:JSON.stringify(p),method:f,headers:{"Content-Type":"application/json"}}),j=Object.assign({},j,v),fetch(t+e,j).then(function(n){return n[y]()}).then(function(n){return h&&h(n)}).catch(function(n){return O&&O(n)})},a=function(n){if(n){if(n=n.toUpperCase(),i.includes(n))return n;console.error("fetch method error.")}else console.error("fetch method is undefined.")},u=function(n){if(n){if(n=n.toLowerCase(),o.includes(n))return n;console.error("fetch type error.")}else console.error("fetch type is undefined.")},s=function(n,t,e){if(!n||!t)return"";var r=n.includes("?")?e:"?",o=f(t,e);return o?r+o:o},f=function(n,t){if(!n||0==Object.keys(n).lenght||n instanceof Array)return"";if("string"==typeof n)return n;var e="";for(var r in n)e+="".concat(r,"=").concat(n[r]).concat(t);return e=e.substr(0,e.length-("&"==t?1:3))},l=function(n,t,e,r){var o;for(var i in t)if(n==i){o=t[i];break}if(o)return e&&r&&(o=e+o),o}}}]);