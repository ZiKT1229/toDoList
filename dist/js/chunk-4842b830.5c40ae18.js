(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4842b830"],{"9f30":function(e,t,n){"use strict";var o=n("c39d"),c=n.n(o);c.a},b972:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",e._l(e.taskList,function(t,o){return n("section",{key:o,staticClass:"row"},[t.done?n("div",{staticClass:"col-1 text-center d-flex justify-content-center align-items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.done,expression:"task.done"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.done)?e._i(t.done,null)>-1:t.done},on:{change:function(n){var o=t.done,c=n.target,r=!!c.checked;if(Array.isArray(o)){var s=null,a=e._i(o,s);c.checked?a<0&&e.$set(t,"done",o.concat([s])):a>-1&&e.$set(t,"done",o.slice(0,a).concat(o.slice(a+1)))}else e.$set(t,"done",r)}}})]):e._e(),t.done?n("div",{staticClass:"col font-weight-bold border border-dark",class:{del:t.done}},[e._v(e._s(t.title))]):e._e(),t.done?n("div",{staticClass:"col-1 text-center",on:{click:function(t){return e.removeTodo(o)}}},[e._v("✕")]):e._e()])}),0)},c=[],r=n("2f62"),s=Object(r["b"])(["removeTodo"]),a=s.removeTodo,d={name:"done",props:{taskList:Array},methods:{removeTodo:a}},i=d,l=(n("9f30"),n("2877")),u=Object(l["a"])(i,o,c,!1,null,"67d08877",null);t["default"]=u.exports},c39d:function(e,t,n){}}]);
//# sourceMappingURL=chunk-4842b830.5c40ae18.js.map