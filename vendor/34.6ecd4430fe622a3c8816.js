(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{61:function(n,e,t){var a=t(8),r=t(62);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);n.exports=r.locals||{}},62:function(n,e,t){"use strict";t.r(e);var a=t(3),r=t.n(a)()(!1);r.push([n.i,".markdown-editor {\n  display: grid;\n  font-size: 16px;\n  grid-template-columns: 50% 50%;\n  padding: 24px;\n  height: calc(100vh - 48px);\n  overflow: hidden;\n}\n\n.markdown-body {\n  overflow: hidden;\n}\n\n.markdown-body:hover {\n  overflow: auto;\n}\n\np {\n  text-indent: 2em; /*首行缩进*/\n}\n",""]),e.default=r},68:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(81),l=t.n(o),d=(t(60),t(61),function(n){return n.children});e.default=function(n){var e=n.value,t=n.onChange;return r.a.createElement("div",{className:"markdown-editor"},r.a.createElement(d,null,r.a.createElement("textarea",{className:"markdown-body",onChange:t,value:e,onKeyUp:function(n){var e=n.currentTarget.value.substr(0,n.currentTarget.selectionStart).split("\n"),t=e.length,a=e[e.length-1].length;console.log(t+", "+a)}})),r.a.createElement("div",{className:"content markdown-body",dangerouslySetInnerHTML:{__html:l()(e||"")}}))}}}]);