(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)o=r[d],s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/lk-landing-page/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"228e":function(t,e,a){},"39bf":function(t,e,a){"use strict";var n=a("228e"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("router-view")],1)},i=[],o=(a("034f"),a("2877")),r={},c=Object(o["a"])(r,s,i,!1,null,null,null),l=c.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("top-header"),a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col col-sm-10 offset-sm-1"},[a("card",{attrs:{id:"about-me"}},[a("h3",{staticClass:"text-left"},[t._v("About Me")]),a("div",{staticClass:"ml-2"},[a("p",[t._v("My name is Luke King and I'm a full stack software developer. In software there is always\n            something changing and new better ways to get things done. It an exciting field to be in and always new\n            things to learn.")]),a("p",[t._v("I have spent a lot of my life in small business. I was always looking for technology that could improve\n            efficiency and bring more consistency into the operation. These same problem solving skills have been\n            useful\n            to me in software development in the way I approach a new task, breaking it down into its basic components\n            and finding the solution. Finding new solutions to problems and learning new ways to do things is what I\n            enjoy most in life.\n          ")])])]),a("card",[a("h3",{staticClass:"mt-2"},[t._v("Tech I have experience with")]),a("ul",{staticClass:"list-unstyled d-flex flex-wrap justify-content-around white-card mt-3"},t._l(t.skills,function(e){return a("li",[t._v(t._s(e))])}),0)]),a("card",{attrs:{id:"projects"}},[a("h3",[t._v("Projects")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col col-sm-4"},[a("card")],1)])])],1)]),a("bottom",{attrs:{id:"contact"}})],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"key-background col-12 d-flex align-items-center justify-content-center pt-3 shadow-sm"},[n("div",{staticClass:"mr-2"},[n("h1",{staticClass:"font-weight-bold text-light text-shadow"},[t._v("Luke King")]),n("p",{staticClass:"text-light text-shadow"},[t._v("Full Stack Software Developer")])]),n("div",{staticClass:"d-sm-none"},[n("img",{staticClass:"rounded-circle drop-shadow img-big",attrs:{src:a("ff79"),alt:"Luke King Image"}})])])}],h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-header row sticky-top"},[n("div",{staticClass:"d-flex justify-content-between header-height bg-secondary col shadow"},[n("img",{staticClass:"d-none m-3 d-sm-inline rounded-circle shadow-sm",attrs:{src:a("ff79"),alt:"Head Shot"}}),n("div",{staticClass:"d-flex align-items-center mr-3"},[n("a",{staticClass:"text-light mr-2 txt-shadow text-decoration-none",attrs:{href:"#about-me"}},[t._v("About")]),n("a",{staticClass:"text-light mr-2 txt-shadow text-decoration-none",attrs:{href:"#projects"}},[t._v("Projects")]),n("a",{staticClass:"text-light mr-2 txt-shadow text-decoration-none",attrs:{href:"#contact"}},[t._v("Contact")]),n("a",{staticClass:"text-light mr-2 txt-shadow text-decoration-none",attrs:{href:"https://lukekinga.github.io/Luke-King-Resume/"}},[t._v("Resume")])])])])}],p={name:"top-header",data:function(){return{}},computed:{},methods:{},components:{}},v=p,g=(a("7c37"),Object(o["a"])(v,h,m,!1,null,"1c45d471",null)),b=g.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-shadow my-4 p-2"},[t._t("default")],2)},_=[],x={name:"card",data:function(){return{}},computed:{},methods:{},components:{}},C=x,y=(a("e182"),Object(o["a"])(C,w,_,!1,null,"e7dbe280",null)),k=y.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom"},[a("footer",{staticClass:"row mt-3 py-4 bg-secondary",attrs:{id:"contact"}},[a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 text-light"},[a("h4",[t._v("Get in touch")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 d-flex flex-column align-content-start"},[a("div",[a("a",{staticClass:"text-light",attrs:{href:"tel:12084028367"}},[a("h6",[a("i",{staticClass:"fas fa-mobile-alt"}),t._v(" (208)402-8367")])])]),a("div",[a("a",{staticClass:"text-light",attrs:{href:"email:lkingfrm@gmail.com"}},[t._v("lkingfrm@gmail.com")])])]),a("div",{staticClass:"col-6 d-flex justify-content-around"},[a("div",[a("a",{staticClass:"text-light",attrs:{href:"//www.linkedin.com/in/lukekinga"}},[a("h4",[a("i",{staticClass:"fab fa-linkedin"})])])]),a("div",[a("a",{staticClass:"text-light",attrs:{href:"//www.facebook.com/luke.king.31542"}},[a("h4",[a("i",{staticClass:"fab fa-facebook-square"})])])]),a("div",[a("a",{staticClass:"text-light",attrs:{href:"https://github.com/lukekingA"}},[a("h4",[a("i",{staticClass:"fab fa-github-square"})])])])])])])])])}],O={name:"bottom",data:function(){return{}},computed:{},methods:{},components:{}},E=O,$=Object(o["a"])(E,j,S,!1,null,"36e9a961",null),I=$.exports,M={name:"home",data:function(){return{skills:["JavaScript","Vue JS","C# and .NET","Node.js","Express.js","MongoDB","Mongoose","MySQL","Dapper","Bootstrap 4","jQuery","Html 5 and CSS 3","Scrum","Git"]}},computed:{},methods:{},components:{TopHeader:b,Card:k,Bottom:I}},P=M,T=(a("39bf"),Object(o["a"])(P,d,f,!1,null,"704bc4c5",null)),L=T.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],A={},B=Object(o["a"])(A,J,K,!1,null,null,null),D=B.exports;n["a"].use(u["a"]);var H=new u["a"]({routes:[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:D},{path:"*",redirect:"/"}]}),q=a("2f62");n["a"].use(q["a"]);var F=new q["a"].Store({state:{},mutations:{},actions:{}});a("4989"),a("ab8b");n["a"].config.productionTip=!1,new n["a"]({router:H,store:F,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,a){},"71e5":function(t,e,a){},"7c37":function(t,e,a){"use strict";var n=a("71e5"),s=a.n(n);s.a},d134:function(t,e,a){},e182:function(t,e,a){"use strict";var n=a("d134"),s=a.n(n);s.a},ff79:function(t,e,a){t.exports=a.p+"img/headShot.5740af53.jpg"}});
//# sourceMappingURL=app.6a93d753.js.map