(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[275],{"+8R3":function(t,s,e){},"0cSt":function(t,s,e){},"6y3U":function(t,s,e){"use strict";var a=e("xq9U"),i=e.n(a);i.a},ElQN:function(t,s,e){"use strict";var a=e("+8R3"),i=e.n(a);i.a},OPQD:function(t,s,e){},ZAh1:function(t,s,e){"use strict";var a=e("OPQD"),i=e.n(a);i.a},eD0L:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{class:t.row},[t.nodes.length>0?e("q-scroll-area",{class:t.meta,attrs:{id:"anchor"}},[e("d-page-anchor",{attrs:{nodes:t.nodes}})],1):t._e(),e("q-scroll-area",{class:t.main,attrs:{id:"content"}},[t._t("default"),t.disableNav?t._e():e("d-page-nav"),t.nodes.length>0?e("q-scroll-observable",{on:{scroll:t.scrolling}}):t._e()],2)],1)},i=[];a._withStripped=!0;var l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-tree",{class:t.stylize,attrs:{"default-expand-all":"",nodes:t.nodes,"node-key":"id",selected:t.selected},on:{"update:selected":function(s){t.selected=s}},scopedSlots:t._u([{key:"default-header",fn:function(s){return e("div",{},[s.node.id?e("b",[t._v(t._s(t.$t("_."+t.$store.state.i18n.absolute+".headers["+(s.node.id-1)+"]")))]):e("b",[t._v(t._s(t.$t("_."+t.$store.state.i18n.base+"._")))])])}}])})},n=[];l._withStripped=!0;e("xfY5"),e("pIFo"),e("hEkN");var o=e("cDf5"),c=e.n(o),r=e("4IOb"),d=r["Ca"].getScrollTarget,p=r["Ca"].setScrollPosition,u={methods:{anchor:function(t){var s=this,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.$store.commit("page/setScrolling",!1),"string"===typeof t&&(t=Number(t.replace(/^\D+/g,""))),"number"===typeof t){t=""+t;var a=document.getElementById(t);if("object"===c()(a)){var i=d(a),l=a.offsetTop-a.scrollHeight,n=300;if(this.$q.platform.is.desktop)p(i,l+33,n);else{var o=0;if(this.$q.screen.lt.lg){var r=document.getElementById("anchor");o=r.offsetHeight,o>0&&(o+=20)}window.scrollTo(0,l+40+o)}e&&this.select(t),setTimeout(function(){s.$store.commit("page/setScrolling",!0)},600)}}},select:function(t){this.$store.commit("page/setAnchor",Number(t))},scrolling:function(t){if(this.$store.state.page.scrolling&&t.position>5){var s=t.position+60,e=this.$store.state.page.anchors,a=0;"/"!==this.$store.state.page.relative&&(a=1);for(var i=0;i<e.length;i++){if(e[i]>=s){this.select(i-1+a),this.push(i-1+a,!1);break}"undefined"===typeof e[i+1]&&s>=e[i]&&(this.select(i+a),this.push(i+a,!1))}}},push:function(t){var s=this,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){if("#"+t===this.$route.hash)return void this.anchor(t);if(null===t)return void this.anchor(this.selected,!1)}this.$router.push(this.$route.path+"#"+t),e&&(this.$q.platform.is.desktop?this.anchor(t):setTimeout(function(){s.anchor(t)},600))}}},b={name:"DPageAnchor",mixins:[u],props:{nodes:{type:Array,required:!0}},computed:{selected:{get:function(){var t=this.$store.state.page.anchor;return"/"!==this.$store.state.page.relative&&0===t?t+1:t},set:function(t){this.push(t)}},stylize:function(){return this.$q.platform.is.mobile&&!this.$q.screen.lt.lg?"fixed":null}},mounted:function(){var t=this;this.$store.commit("layout/setMetaToggle",!0),setTimeout(function(){t.$store.commit("page/setScrolling",!0)},1e3);var s=this.$route.hash.replace(/^\D+/g,"");s===Number(s)+""&&setTimeout(function(){t.anchor(s)},500)},beforeDestroy:function(){this.$store.commit("layout/setMetaToggle",!1),this.$store.commit("page/setAnchor",0),this.$store.commit("page/setAnchors",!1),this.$store.commit("page/setScrolling",!1)}},v=b,f=(e("ElQN"),e("KHd+")),C=Object(f["a"])(v,l,n,!1,null,null,null),_=C.exports,m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",[t.prev?e("router-link",{attrs:{to:""+t.prev}},[e("q-icon",{attrs:{name:"navigate_before"}}),e("span",[t._v(t._s(t.$t("_"+t.prev.replace(/\//g,".")+"._")))])],1):t._e(),t.next?e("router-link",{staticClass:"float-right",attrs:{to:""+t.next}},[e("span",[t._v(t._s(t.$t("_"+t.next.replace(/\//g,".")+"._")))]),e("q-icon",{attrs:{name:"navigate_next"}})],1):t._e()],1)},h=[];m._withStripped=!0;var g={name:"DPageNav",data:function(){return{prev:this._prev(),next:this._next()}},methods:{_prev:function(){for(var t=this.$store.state.page.base,s=this.$router.options.routes.slice(0,-1),e=0;e<s.length;e++)if("/"+t===s[e].path&&e>0)return s[e-1].path;return""},_next:function(){for(var t=this.$store.state.page.base,s=this.$router.options.routes.slice(0,-1),e=0;e<s.length;e++)if("/"+t===s[e].path&&"undefined"!==typeof s[e+e])return s[e+1].path;return""}}},j=g,L=(e("ZAh1"),Object(f["a"])(j,m,h,!1,null,"0228112c",null)),y=L.exports,$={components:{DPageAnchor:_,DPageNav:y},mixins:[u],props:{nodes:{type:Array,default:Array},disableNav:{type:Boolean,default:!1}},computed:{row:function(){var t="";return this.$q.screen.lt.lg||(t="row reverse"),t},main:function(){var t="";switch(this.$store.state.layout.meta&&this.nodes.length>0?this.$q.screen.lt.lg||(t="col-9"):t="col-12",this.$store.state.page.relative){case"/showcase":t+=" showcase";break;case"/showcase/code":t+=" showcase-code";break;default:t+=" overview"}return t},meta:function(){var t="";return t=this.$store.state.layout.meta?this.$q.screen.lt.lg?"meta-on-top":"col-3 meta-on-right":"hidden",t}}},w=$,k=(e("zGJJ"),Object(f["a"])(w,a,i,!1,null,null,null)),x=k.exports,T=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:t.stylize,attrs:{id:t.id},on:{click:function(s){t.push(t.id)}}},[t._v(t._s(t.heading))])},P=[];T._withStripped=!0;e("KKXr");var q={name:"DPageH",mixins:[u],props:{h:{type:String,required:!0}},computed:{id:function(){var t=this.h.split("-");return t[1]},stylize:function(){var t=this.h.split("-"),s="h".concat(t[0]);return"dh ".concat(s)},heading:function(){var t=this.$store.state.i18n.base,s=this.$store.state.i18n.absolute,e="";return t&&s&&(e="0"===this.id?this.$t("_.".concat(t,"._")):this.$t("_.".concat(s,".headers[").concat(this.id-1,"]"))),e}},methods:{register:function(t){var s=document.getElementById(t.id);if("object"===c()(s)){var e=this.$store.state.page.anchors;e[t.id]||this.$store.commit("page/setAnchors",s.offsetTop-s.scrollHeight+33)}}},mounted:function(){this.register(this.$el)}},S=q,H=(e("y6KF"),Object(f["a"])(S,T,P,!1,null,null,null)),D=H.exports,M=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"gist"},[e("div",{staticClass:"gist-file"},[e("div",{staticClass:"gist-data"},[e("div",{staticClass:"js-gist-file-update-container js-task-list-container file-box"},[e("div",{staticClass:"file"},[e("div",{staticClass:"blob-wrapper data",class:t.typing,attrs:{itemprop:"text"}},[e("table",{staticClass:"highlight tab-size js-file-line-container",attrs:{"data-tab-size":"8"}},[e("tbody",[t._t("default")],2)])])])])])])])},A=[];M._withStripped=!0;var E={name:"DPageCode",props:{type:String,default:"vue"},computed:{typing:function(){var t="";switch(this.type){case"styl":t="type-stylus";break;case"js":t="type-javascript";break;case"css":t="type-css";break;default:t="type-vue"}return t}}},N=E,z=(e("6y3U"),Object(f["a"])(N,M,A,!1,null,null,null)),O=z.exports,J={methods:{t:function(t){if("number"===typeof t){var s=this.$store.state.i18n.base;return this.$t("_.".concat(s,".overview.texts[").concat(--t,"]"))}if("string"===typeof t)return this.$t(t)},l:function(t){var s=this.$store.state.i18n.base,e=this.$t("_.".concat(s,".overview.links[").concat(--t,"]"));return'<a href="'.concat(e[0],'" target="_blank">').concat(e[1],"</a>")},sc:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",a=this.codes[--t];if(a.constructor===Array){var i="";switch(s){case"a":s=this.$t("_a");break;case"o":s=this.$t("_o");break}for(var l=a.length,n=0;n<l;n++)a[l-1]===a[n]?i+="<code>".concat(a[n],"</code>").concat(e):s&&a[l-2]===a[n]?i+="<code>".concat(a[n],"</code>").concat(s," "):i+="<code>".concat(a[n],"</code>, ");return i}return"<code>".concat(a,"</code>")}}};s["a"]={components:{DPage:x,DPageH:D,DPageCode:O},mixins:[J]}},ssXh:function(t,s,e){},vTfP:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("d-page",{attrs:{nodes:t.nodes}},[e("d-page-h",{attrs:{h:"1-0"}}),e("p",{domProps:{innerHTML:t._s(t.t(1)+t.l(1)+t.t("_a")+t.l(2)+t.t(2)+t.l(3)+t.t(3))}}),e("p",{domProps:{innerHTML:t._s(t.t(4)+t.l(4)+".")}}),e("p",{domProps:{innerHTML:t._s(t.t(5))}}),e("d-page-h",{attrs:{h:"2-1"}}),e("p",{domProps:{innerHTML:t._s(t.t(6)+t.sc(1)+t.t(7))}}),e("d-page-code",[e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L1","data-line-number":"1"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC1"}},[t._v("<"),e("span",{staticClass:"pl-ent"},[t._v("template")]),t._v(">")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L2","data-line-number":"2"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC2"}},[t._v("  "),e("span",{staticClass:"pl-c"},[e("span",{staticClass:"pl-c"},[t._v("\x3c!--")]),t._v(" you define your Vue template here "),e("span",{staticClass:"pl-c"},[t._v("--\x3e")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L3","data-line-number":"3"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC3"}},[t._v("</"),e("span",{staticClass:"pl-ent"},[t._v("template")]),t._v(">")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L4","data-line-number":"4"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC4"}})]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L5","data-line-number":"5"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC5"}},[e("span",{staticClass:"pl-s1"},[t._v("<"),e("span",{staticClass:"pl-ent"},[t._v("script")]),t._v(">")])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L6","data-line-number":"6"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC6"}},[e("span",{staticClass:"pl-s1"},[e("span",{staticClass:"pl-c"},[e("span",{staticClass:"pl-c"},[t._v("//")]),t._v(" This is where your Javascript goes")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L7","data-line-number":"7"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC7"}},[e("span",{staticClass:"pl-s1"},[e("span",{staticClass:"pl-c"},[e("span",{staticClass:"pl-c"},[t._v("//")]),t._v(" to define your Vue component, which")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L8","data-line-number":"8"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC8"}},[e("span",{staticClass:"pl-s1"},[e("span",{staticClass:"pl-c"},[e("span",{staticClass:"pl-c"},[t._v("//")]),t._v(" can be a Layout, a Page or your own")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L9","data-line-number":"9"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC9"}},[e("span",{staticClass:"pl-s1"},[e("span",{staticClass:"pl-c"},[e("span",{staticClass:"pl-c"},[t._v("//")]),t._v(" component used throughout the app.")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L10","data-line-number":"10"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC10"}},[e("span",{staticClass:"pl-s1"})])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L11","data-line-number":"11"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC11"}},[e("span",{staticClass:"pl-s1"},[e("span",{staticClass:"pl-k"},[t._v("export")]),t._v(" "),e("span",{staticClass:"pl-c1"},[t._v("default")]),t._v(" {")])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L12","data-line-number":"12"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC12"}},[e("span",{staticClass:"pl-s1"},[t._v("  "),e("span",{staticClass:"pl-c"},[e("span",{staticClass:"pl-c"},[t._v("//")])])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L13","data-line-number":"13"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC13"}},[e("span",{staticClass:"pl-s1"},[t._v("}")])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L14","data-line-number":"14"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC14"}},[e("span",{staticClass:"pl-s1"},[t._v("</"),e("span",{staticClass:"pl-ent"},[t._v("script")]),t._v(">")])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L15","data-line-number":"15"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC15"}})]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L16","data-line-number":"16"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC16"}},[e("span",{staticClass:"pl-s1"},[t._v("<"),e("span",{staticClass:"pl-ent"},[t._v("style")]),t._v(">")])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L17","data-line-number":"17"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC17"}},[e("span",{staticClass:"pl-s1"},[e("span",{staticClass:"pl-c"},[e("span",{staticClass:"pl-c"},[t._v("/*")]),t._v(" This is where your CSS goes "),e("span",{staticClass:"pl-c"},[t._v("*/")])])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-vue-L18","data-line-number":"18"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-vue-LC18"}},[e("span",{staticClass:"pl-s1"},[t._v("</"),e("span",{staticClass:"pl-ent"},[t._v("style")]),t._v(">")])])])]),e("d-page-h",{attrs:{h:"3-2"}}),e("p",{domProps:{innerHTML:t._s(t.t(8)+t.sc(2)+t.t(9)+t.l(5)+t.t(10)+t.sc(3)+t.t("_o")+t.sc(4)+").")}}),e("p",{domProps:{innerHTML:t._s(t.t(11))}}),e("d-page-code",[e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code2-vue-L1","data-line-number":"1"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code2-vue-LC1"}},[e("span",{staticClass:"pl-c"},[e("span",{staticClass:"pl-c"},[t._v("\x3c!--")]),t._v(' notice lang="stylus" '),e("span",{staticClass:"pl-c"},[t._v("--\x3e")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code2-vue-L2","data-line-number":"2"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code2-vue-LC2"}},[e("span",{staticClass:"pl-s1"},[t._v("<"),e("span",{staticClass:"pl-ent"},[t._v("style")]),t._v(" "),e("span",{staticClass:"pl-e"},[t._v("lang")]),t._v("="),e("span",{staticClass:"pl-s"},[e("span",{staticClass:"pl-pds"},[t._v('"')])]),e("span",{staticClass:"pl-s"},[t._v("stylus"),e("span",{staticClass:"pl-pds"},[t._v('"')])]),t._v(">")])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code2-vue-L3","data-line-number":"3"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code2-vue-LC3"}},[e("span",{staticClass:"pl-s1"},[e("span",{staticClass:"pl-e"},[t._v(".some-div")])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code2-vue-L4","data-line-number":"4"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code2-vue-LC4"}},[e("span",{staticClass:"pl-s1"},[t._v("  "),e("span",{staticClass:"pl-c1"},[t._v("font-size")]),t._v(" "),e("span",{staticClass:"pl-c1"},[t._v("15"),e("span",{staticClass:"pl-k"},[t._v("px")])])])])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code2-vue-L5","data-line-number":"5"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code2-vue-LC5"}},[e("span",{staticClass:"pl-s1"},[t._v("</"),e("span",{staticClass:"pl-ent"},[t._v("style")]),t._v(">")])])])]),e("p",{domProps:{innerHTML:t._s(t.t(12)+t.sc(2)+t.t(13))}}),e("d-page-h",{attrs:{h:"2-3"}}),e("p",{domProps:{innerHTML:t._s(t.t(14)+t.l(6)+t.t(15))}}),e("p",{domProps:{innerHTML:t._s(t.t(16))}}),e("d-page-code",[e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code3-vue-L1","data-line-number":"1"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code3-vue-LC1"}},[t._v("<"),e("span",{staticClass:"pl-ent"},[t._v("div")]),t._v(" "),e("span",{staticClass:"pl-e"},[t._v("v-ripple")]),t._v(">Click Me</"),e("span",{staticClass:"pl-ent"},[t._v("div")]),t._v(">")])])]),e("blockquote",[e("p",{domProps:{innerHTML:t._s(t.t(17)+t.sc(5)+t.t(18)+t.sc(6)+".")}})]),e("p",{domProps:{innerHTML:t._s(t.t(19)+t.sc(7)+t.t(20))}}),e("d-page-code",{attrs:{type:"js"}},[e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-js-L1","data-line-number":"1"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-js-LC1"}},[t._v("framework"),e("span",{staticClass:"pl-k"},[t._v(":")]),t._v(" {")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-js-L2","data-line-number":"2"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-js-LC2"}},[t._v("  directives"),e("span",{staticClass:"pl-k"},[t._v(":")]),t._v(" ["),e("span",{staticClass:"pl-s"},[e("span",{staticClass:"pl-pds"},[t._v("'")]),t._v("Ripple"),e("span",{staticClass:"pl-pds"},[t._v("'")])]),t._v("]")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code1-js-L3","data-line-number":"3"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code1-js-LC3"}},[t._v("}")])])]),e("p",{domProps:{innerHTML:t._s(t.t(21)+t.sc(7))}}),e("d-page-code",{attrs:{type:"js"}},[e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code2-js-L1","data-line-number":"1"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code2-js-LC1"}},[t._v("framework"),e("span",{staticClass:"pl-k"},[t._v(":")]),t._v(" {")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code2-js-L2","data-line-number":"2"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code2-js-LC2"}},[t._v("  directives"),e("span",{staticClass:"pl-k"},[t._v(":")]),t._v(" ["),e("span",{staticClass:"pl-s"},[e("span",{staticClass:"pl-pds"},[t._v("'")]),t._v("Ripple"),e("span",{staticClass:"pl-pds"},[t._v("'")])]),t._v(", "),e("span",{staticClass:"pl-s"},[e("span",{staticClass:"pl-pds"},[t._v("'")]),t._v("TouchPan"),e("span",{staticClass:"pl-pds"},[t._v("'")])]),t._v(", "),e("span",{staticClass:"pl-s"},[e("span",{staticClass:"pl-pds"},[t._v("'")]),t._v("TouchSwipe"),e("span",{staticClass:"pl-pds"},[t._v("'")])]),t._v("]")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code2-js-L3","data-line-number":"3"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code2-js-LC3"}},[t._v("}")])])]),e("p",{domProps:{innerHTML:t._s(t.t(22))}}),e("d-page-code",[e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code4-vue-L1","data-line-number":"1"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code4-vue-LC1"}},[t._v("<"),e("span",{staticClass:"pl-ent"},[t._v("div")]),t._v(" "),e("span",{staticClass:"pl-e"},[t._v("v-touch-pan")]),t._v("="),e("span",{staticClass:"pl-s1"},[e("span",{staticClass:"pl-pds"},[t._v('"')]),t._v("handler"),e("span",{staticClass:"pl-pds"},[t._v('"')])]),t._v(">...</"),e("span",{staticClass:"pl-ent"},[t._v("div")]),t._v(">")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code4-vue-L2","data-line-number":"2"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code4-vue-LC2"}},[t._v("<"),e("span",{staticClass:"pl-ent"},[t._v("div")]),t._v(" "),e("span",{staticClass:"pl-e"},[t._v("v-touch-swipe")]),t._v("="),e("span",{staticClass:"pl-s1"},[e("span",{staticClass:"pl-pds"},[t._v('"')]),t._v("handler"),e("span",{staticClass:"pl-pds"},[t._v('"')])]),t._v(">...</"),e("span",{staticClass:"pl-ent"},[t._v("div")]),t._v(">")])]),e("tr",[e("td",{staticClass:"blob-num js-line-number",attrs:{id:"file-code4-vue-L3","data-line-number":"3"}}),e("td",{staticClass:"blob-code blob-code-inner js-file-line",attrs:{id:"file-code4-vue-LC3"}},[t._v("<"),e("span",{staticClass:"pl-ent"},[t._v("div")]),t._v(" "),e("span",{staticClass:"pl-e"},[t._v("v-ripple")]),t._v(">Click me. I got ripples.</"),e("span",{staticClass:"pl-ent"},[t._v("div")]),t._v(">")])])]),e("d-page-h",{attrs:{h:"2-4"}}),e("p",{staticStyle:{color:"red"}},[t._v("... (This page is still under construction!)")])],1)},i=[];a._withStripped=!0;var l=e("eD0L"),n={mixins:[l["a"]],data:function(){return{nodes:[{id:0,children:[{id:1,children:[{id:2}]},{id:3},{id:4}]}],codes:["*.vue","&lt;style&gt;","yarn add --dev less-loader","npm install --save-dev less-loader","v-ripple","v-","/quasar.conf.js"]}}},o=n,c=e("KHd+"),r=Object(c["a"])(o,a,i,!1,null,null,null);s["default"]=r.exports},xq9U:function(t,s,e){},y6KF:function(t,s,e){"use strict";var a=e("0cSt"),i=e.n(a);i.a},zGJJ:function(t,s,e){"use strict";var a=e("ssXh"),i=e.n(a);i.a}}]);