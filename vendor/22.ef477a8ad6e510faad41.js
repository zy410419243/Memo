(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{119:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(64),l=n.n(o),i=n(38),c=n.n(i),u=n(0),s=n.n(u),p=n(256),y=(n(193),n(46)),d=n(57),f=n(70),m=(n(122),function(e,t){return c()(c()({},e),l()({},t.key,t.data))}),g={title:"",type:"",subType:"",category:"",key:""};t.default=function(e){var t=e.visible,n=e.loading,a=e.selectData,o=e.onCancel,l=e.onSubmit,i=e.pageInfo,c=e.dataItem,b=void 0===c?{id:"",type:"",subType:"",category:"markdown",title:""}:c,v=Object(u.useState)(b.type),h=r()(v,2),E=h[0],k=h[1],O=Object(u.useState)(!1),w=r()(O,2),x=w[0],T=w[1],j=Object(u.useReducer)(m,g),C=r()(j,2),_=C[0],P=C[1];Object(u.useEffect)((function(){P({key:"category",data:b.category}),P({key:"type",data:b.type}),P({key:"subType",data:b.subType}),P({key:"title",data:b.title})}),[t]);var S=function(){P({key:"title",data:""}),P({key:"category",data:""}),P({key:"subType",data:""}),P({key:"type",data:""})},F=function(){l(_,b)},z=function(e){var t=e.target.value;k(t),P({key:"type",data:e.target.value})};return s.a.createElement(p.a,{visible:t,title:"新建文档",onClose:function(){k(""),o()},animation:"zoom",maskAnimation:"fade",mousePosition:i,bodyStyle:{height:260},footer:s.a.createElement("div",{className:"footer-grid"},s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{onClick:function(){return T(!x)}},"编辑"),s.a.createElement("div",null),s.a.createElement(y.a,{onClick:S},"清空"),s.a.createElement(y.a,{onClick:F,disabled:n},"确定"))),className:"edit-form"},s.a.createElement("div",{className:"wrapper-grid"},s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"标题"),s.a.createElement(d.a,{style:{width:"100%"},value:_.title,onChange:function(e){return P({key:"title",data:e.target.value})}})),function(e){return s.a.createElement(s.a.Fragment,null,e?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"显示类别"),s.a.createElement(d.a,{style:{width:"100%"},value:_.category,onChange:function(e){return P({key:"category",data:e.target.value})}})):s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"显示类别"),s.a.createElement(f.a,{style:{width:"100%"},value:_.category,onChange:function(e){return P({key:"category",data:e.target.value})}},s.a.createElement("option",{value:"markdown"},"markdown"),s.a.createElement("option",{value:"mapping"},"mapping"),s.a.createElement("option",{value:"utils"},"utils"))))}(x),"utils"!==_.category&&s.a.createElement(s.a.Fragment,null,x?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"文档类别"),s.a.createElement(d.a,{style:{width:"100%"},value:_.type,onChange:function(e){return P({key:"type",data:e.target.value})}})):s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"文档类别"),s.a.createElement(f.a,{style:{width:"100%"},onChange:z,value:_.type},a.map((function(e){return s.a.createElement("option",{value:e.key,key:"type-".concat(e.key)},e.title)}))))),"utils"!==_.category&&s.a.createElement(s.a.Fragment,null,x?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"文档子类"),s.a.createElement(d.a,{style:{width:"100%"},value:_.subType,onChange:function(e){return P({key:"subType",data:e.target.value})}})):s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"文档子类"),s.a.createElement(f.a,{style:{width:"100%"},value:_.subType,onChange:function(e){return P({key:"subType",data:e.target.value})}},a.filter((function(e){return e.key===(E||b.type)})).map((function(e){var t=e.children;return(void 0===t?[]:t).map((function(e){return s.a.createElement("option",{value:e.key,key:e.key},e.value)}))}))))),"utils"===_.category&&s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"utils key"),s.a.createElement(d.a,{style:{width:"100%"},value:_.key,onChange:function(e){return P({key:"key",data:e.target.value})}}))))}},122:function(e,t,n){var a=n(5),r=n(123);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},l=(a(r,o),r.locals?r.locals:{});e.exports=l},123:function(e,t,n){(t=n(6)(!1)).push([e.i,".edit-form .wrapper-grid {\n  display: grid;\n  grid-template-columns: 15% 85%;\n  grid-template-rows: repeat(4, 25%);\n  grid-row-gap: 16px;\n}\n\n.edit-form .footer-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 25%);\n}\n",""]),e.exports=t},16:function(e,t,n){e.exports=n(26)()},26:function(e,t,n){"use strict";var a=n(27);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,l){if(l!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},27:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={height:32,width:80,borderRadius:"0.25em",fontSize:18}},46:function(e,t,n){"use strict";var a=n(38),r=n.n(a),o=n(0),l=n.n(o),i=n(41),c=(n(51),function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}),u=function(e){var t=e.style,n=e.children,a=c(e,["style","children"]);return l.a.createElement("button",r()({style:r()(i.a,t)},a),n)};t.a=u},51:function(e,t,n){var a=n(5),r=n(52);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},l=(a(r,o),r.locals?r.locals:{});e.exports=l},52:function(e,t,n){(t=n(6)(!1)).push([e.i,"button {\n  line-height: 20px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  color: #24292e;\n  background-color: #eff3f6;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  position: relative;\n  display: inline-block;\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-repeat: repeat-x;\n  background-position: -1px -1px;\n  background-size: 110% 110%;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\nbutton:hover {\n  background: #f5f5f5;\n}\n",""]),e.exports=t},57:function(e,t,n){"use strict";var a=n(38),r=n.n(a),o=n(0),l=n.n(o),i=n(41),c=(n(58),function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}),u=function(e){var t=e.style,n=e.children,a=c(e,["style","children"]);return l.a.createElement("input",r()({style:r()({},i.a,t)},a),n)};t.a=u},58:function(e,t,n){var a=n(5),r=n(59);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},l=(a(r,o),r.locals?r.locals:{});e.exports=l},59:function(e,t,n){(t=n(6)(!1)).push([e.i,"input {\n  border: 1px solid #e8e8e8;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\ninput:hover {\n  border: 1px solid rgb(16, 142, 233);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n",""]),e.exports=t},70:function(e,t,n){"use strict";var a=n(38),r=n.n(a),o=n(0),l=n.n(o),i=n(41),c=(n(75),function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}),u=function(e){var t=e.style,n=e.children,a=c(e,["style","children"]);return l.a.createElement("select",r()({style:r()({},i.a,t)},a),n)};t.a=u},75:function(e,t,n){var a=n(5),r=n(76);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},l=(a(r,o),r.locals?r.locals:{});e.exports=l},76:function(e,t,n){(t=n(6)(!1)).push([e.i,"select {\n  background: white;\n  border: 1px solid #e8e8e8;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\nselect:hover {\n  border: 1px solid rgb(16, 142, 233);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  cursor: pointer;\n}\n",""]),e.exports=t}}]);