(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"16l3":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("7oih"),s=a("DxCv");t.default=function(){var e=Object(l.useStaticQuery)("826311754");return r.a.createElement(c.a,null,r.a.createElement("section",{className:"projects-page"},r.a.createElement(s.a,{projects:e.allWpPost.edges,title:"all projects"})))}},"7oih":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=(a("Szx7"),a("Wbzz")),c=a("ma3e"),s=[{id:2,text:"about",url:"/about/"},{id:3,text:"projects",url:"/projects/"},{id:4,text:"blogs",url:"/blogs/"},{id:5,text:"contact",url:"/contact/"}].map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l.Link,{activeClassName:"active-nav-link",to:e.url},e.text))})),i=function(e){var t=e.styleClass,a=e.toggleSidebar,n=e.isOpen;return r.a.createElement("ul",{className:"page-links "+(t||"")},n&&s,!n&&r.a.createElement("button",{type:"button",className:n?"toggle-btn":"toggle-btn-desktop",onClick:a},r.a.createElement(c.a,null)))},o=function(e){var t=e.toggleSidebar;return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-center"},r.a.createElement("div",{className:"nav-header"},r.a.createElement(l.Link,{to:"/",style:{fontWeight:"bold",fontSize:"25px"}},r.a.createElement("span",{style:{color:"#102A42"}},"Gaurav")," ",r.a.createElement("span",{style:{color:"#2CAEBA"}},"Adhikari")),r.a.createElement("button",{type:"button",className:"toggle-btn",onClick:t},r.a.createElement(c.a,null))),r.a.createElement(i,{toggleSidebar:t,styleClass:"nav-links"})))},m=a("PNo/"),u=function(e){var t=e.isOpen,a=e.toggleSidebar;return r.a.createElement("aside",{className:"sidebar "+(t?"show-sidebar":"")+" "},r.a.createElement("button",{className:"close-btn",onClick:a},r.a.createElement(c.j,null)),r.a.createElement("div",{className:"side-container"},r.a.createElement(i,{isOpen:t,styleClass:t?"sidebar-links":""}),r.a.createElement(m.a,{styleClass:t?"sidebar-icons":""})))},d=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null,r.a.createElement(m.a,{styleClass:"footer-links"}),r.a.createElement("h4",null,"copyright©",(new Date).getFullYear(),r.a.createElement("span",null," Gaurav"),"Adhikari all rights reserved")))};t.a=function(e){var t=e.children,a=r.a.useState(!1),n=a[0],l=a[1],c=function(){l(!n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{toggleSidebar:c}),r.a.createElement(u,{isOpen:n,toggleSidebar:c}),t,r.a.createElement(d,null))}},DxCv:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("ap0H"),s=a("9eSz"),i=a.n(s),o=a("ma3e"),m=function(e){var t=e.content,a=e.title,n=e.tags.nodes,l=e.excerpt,c=e.featuredImage,s=e.index,m=l.indexOf(">"),u=l.indexOf("<",1),d=l.slice(m+1,u);return r.a.createElement("article",{className:"project"},c&&r.a.createElement(i.a,{fluid:c.node.localFile.childImageSharp.fluid,className:"project-img"}),r.a.createElement("div",{className:"project-info"},r.a.createElement("span",{className:"project-number"},"0",s+1,"."),r.a.createElement("h3",{style:{color:"#2caeba"},"data-sal":"slide-up","data-sal-delay":"400","data-sal-easing":"easeInSine"},a),r.a.createElement("div",{"data-sal":"slide-left","data-sal-delay":"800","data-sal-easing":"easeOutCubic",dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("div",{className:"project-stack"},n&&n.map((function(e){return r.a.createElement("span",{key:e.name},e.name)}))),r.a.createElement("div",{className:"project-links"},r.a.createElement("a",{href:d},r.a.createElement(o.e,{className:"project-icon"})),r.a.createElement("a",{href:d},r.a.createElement(o.i,{className:"project-icon"})))))};t.a=function(e){var t=e.projects,a=e.title,n=e.showLink;return r.a.createElement("section",{className:"section projects"},r.a.createElement(c.a,{title:a}),r.a.createElement("div",{className:"section-center projects-center"},t.map((function(e,t){return r.a.createElement(m,Object.assign({key:e.node.id,index:t},e.node))}))),n&&r.a.createElement(l.Link,{to:"/projects",className:"btn center-btn"},"projects"))}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(r),c=function(){return(c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};function i(e){return function(t){return n.createElement(o,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return n.createElement(t.tag,c({key:a},t.attr),e(t.child))}))}(e.child))}}function o(e){var t=function(t){var a,r=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var l=e.attr,i=e.title,o=s(e,["attr","title"]);return n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,o,{className:a,style:c({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},"PNo/":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("ma3e"),c=[{id:1,icon:r.a.createElement(l.e,{className:"social-icon"}),url:"https://github.com/gauravadhikari1997"},{id:2,icon:r.a.createElement(l.g,{className:"social-icon"}),url:"https://www.linkedin.com/in/gauravadhikari1997/"},{id:3,icon:r.a.createElement(l.d,{className:"social-icon"}),url:"https://www.facebook.com/whoisgauravadhikari"},{id:4,icon:r.a.createElement(l.f,{className:"social-icon"}),url:"https://www.instagram.com/_gaurav.adhikari_/"},{id:5,icon:r.a.createElement(l.k,{className:"social-icon"}),url:"https://www.twitter.com/gauravadhikari_"}].map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:e.url,className:"social-link"},e.icon))}));t.a=function(e){var t=e.styleClass;return r.a.createElement("ul",{className:"social-links "+(t||"")},c)}},Szx7:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-projects-js-4aaf130cf0f3ac73a559.js.map