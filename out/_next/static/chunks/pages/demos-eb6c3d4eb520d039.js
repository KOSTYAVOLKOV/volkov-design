(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[528],{7386:function(a,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demos",function(){return e(9239)}])},8418:function(a,s,e){"use strict";function c(a,s){return function(a){if(Array.isArray(a))return a}(a)||function(a,s){var e=[],c=!0,d=!1,l=void 0;try{for(var n,i=a[Symbol.iterator]();!(c=(n=i.next()).done)&&(e.push(n.value),!s||e.length!==s);c=!0);}catch(r){d=!0,l=r}finally{try{c||null==i.return||i.return()}finally{if(d)throw l}}return e}(a,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}s.default=void 0;var d,l=(d=e(7294))&&d.__esModule?d:{default:d},n=e(6273),i=e(387),r=e(7190);var t={};function o(a,s,e,c){if(a&&n.isLocalURL(s)){a.prefetch(s,e,c).catch((function(a){0}));var d=c&&"undefined"!==typeof c.locale?c.locale:a&&a.locale;t[s+"%"+e+(d?"%"+d:"")]=!0}}var f=function(a){var s,e=!1!==a.prefetch,d=i.useRouter(),f=l.default.useMemo((function(){var s=c(n.resolveHref(d,a.href,!0),2),e=s[0],l=s[1];return{href:e,as:a.as?n.resolveHref(d,a.as):l||e}}),[d,a.href,a.as]),x=f.href,m=f.as,j=a.children,h=a.replace,u=a.shallow,g=a.scroll,p=a.locale;"string"===typeof j&&(j=l.default.createElement("a",null,j));var N=(s=l.default.Children.only(j))&&"object"===typeof s&&s.ref,v=c(r.useIntersection({rootMargin:"200px"}),2),w=v[0],y=v[1],b=l.default.useCallback((function(a){w(a),N&&("function"===typeof N?N(a):"object"===typeof N&&(N.current=a))}),[N,w]);l.default.useEffect((function(){var a=y&&e&&n.isLocalURL(x),s="undefined"!==typeof p?p:d&&d.locale,c=t[x+"%"+m+(s?"%"+s:"")];a&&!c&&o(d,x,m,{locale:s})}),[m,x,y,p,e,d]);var k={ref:b,onClick:function(a){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(a),a.defaultPrevented||function(a,s,e,c,d,l,i,r){("A"!==a.currentTarget.nodeName||!function(a){var s=a.currentTarget.target;return s&&"_self"!==s||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.nativeEvent&&2===a.nativeEvent.which}(a)&&n.isLocalURL(e))&&(a.preventDefault(),null==i&&c.indexOf("#")>=0&&(i=!1),s[d?"replace":"push"](e,c,{shallow:l,locale:r,scroll:i}))}(a,d,x,m,h,u,g,p)},onMouseEnter:function(a){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(a),n.isLocalURL(x)&&o(d,x,m,{priority:!0})}};if(a.passHref||"a"===s.type&&!("href"in s.props)){var I="undefined"!==typeof p?p:d&&d.locale,_=d&&d.isLocaleDomain&&n.getDomainLocale(m,I,d&&d.locales,d&&d.domainLocales);k.href=_||n.addBasePath(n.addLocale(m,I,d&&d.defaultLocale))}return l.default.cloneElement(s,k)};s.default=f},7190:function(a,s,e){"use strict";function c(a,s){return function(a){if(Array.isArray(a))return a}(a)||function(a,s){var e=[],c=!0,d=!1,l=void 0;try{for(var n,i=a[Symbol.iterator]();!(c=(n=i.next()).done)&&(e.push(n.value),!s||e.length!==s);c=!0);}catch(r){d=!0,l=r}finally{try{c||null==i.return||i.return()}finally{if(d)throw l}}return e}(a,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(a){var s=a.rootMargin,e=a.disabled||!n,r=d.useRef(),t=c(d.useState(!1),2),o=t[0],f=t[1],x=d.useCallback((function(a){r.current&&(r.current(),r.current=void 0),e||o||a&&a.tagName&&(r.current=function(a,s,e){var c=function(a){var s=a.rootMargin||"",e=i.get(s);if(e)return e;var c=new Map,d=new IntersectionObserver((function(a){a.forEach((function(a){var s=c.get(a.target),e=a.isIntersecting||a.intersectionRatio>0;s&&e&&s(e)}))}),a);return i.set(s,e={id:s,observer:d,elements:c}),e}(e),d=c.id,l=c.observer,n=c.elements;return n.set(a,s),l.observe(a),function(){n.delete(a),l.unobserve(a),0===n.size&&(l.disconnect(),i.delete(d))}}(a,(function(a){return a&&f(a)}),{rootMargin:s}))}),[e,s,o]);return d.useEffect((function(){if(!n&&!o){var a=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(a)}}}),[o]),[x,o]};var d=e(7294),l=e(9311),n="undefined"!==typeof IntersectionObserver;var i=new Map},8063:function(a,s){"use strict";s.Z=function(){var a,s=document.querySelectorAll(".gallery"),e=document.querySelector(".filtering"),c=document.querySelectorAll(".filtering");if(s.length>=1&&s.forEach((function(s){a=new Isotope(s,{itemSelector:".items"})})),e){e.addEventListener("click",(function(s){if(matchesSelector(s.target,"span")){var e=s.target.getAttribute("data-filter");e=e,a.arrange({filter:e})}}));for(var d=function(a){a.addEventListener("click",(function(s){matchesSelector(s.target,"span")&&(a.querySelector(".active").classList.remove("active"),s.target.classList.add("active"))}))},l=0,n=c.length;l<n;l++){d(c[l])}}}},9239:function(a,s,e){"use strict";e.r(s);var c=e(5893),d=e(5988),l=e(7294),n=e(9008),i=e(1664),r=e(8063);s.default=function(){return l.useEffect((function(){document.querySelector("body").classList.add("index3"),setTimeout((function(){window.Isotope&&(0,r.Z)()}),1e3)}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.default,{children:(0,c.jsx)("link",{rel:"stylesheet",href:"/assets/css/style.css",className:"jsx-a1ac9dc8d1209f77"})}),(0,c.jsx)(d.default,{id:"a1ac9dc8d1209f77",children:'.works-header.jsx-a1ac9dc8d1209f77 {min-height:85vh;\nposition:relative}\n.works-header.jsx-a1ac9dc8d1209f77:after {content:"";\nposition:absolute;\ntop:50px;\nleft:50px;\nright:50px;\nbottom:50px;\nbackground:#999;\nopacity:0.2}\n.works-header.jsx-a1ac9dc8d1209f77:before {background:#000}\n.masonery.jsx-a1ac9dc8d1209f77 .container-fluid.jsx-a1ac9dc8d1209f77 {padding:0 80px}\n.masonery.jsx-a1ac9dc8d1209f77 .item-img.jsx-a1ac9dc8d1209f77 {position:relative;\nbox-shadow:0px 5px 10px rgba(50, 50, 50, 0.2);\nbackground:#333;\npadding:15px;\nborder-radius:5px}\n.masonery.jsx-a1ac9dc8d1209f77 .item-img.jsx-a1ac9dc8d1209f77 img.jsx-a1ac9dc8d1209f77 {border-radius:10px;\noverflow:hidden}\n.masonery.jsx-a1ac9dc8d1209f77 .gallery.jsx-a1ac9dc8d1209f77 .items.jsx-a1ac9dc8d1209f77 {padding:0 40px;\nmargin-top:80px;\ntext-align:center}\n.masonery.jsx-a1ac9dc8d1209f77 .gallery.jsx-a1ac9dc8d1209f77 .items.jsx-a1ac9dc8d1209f77 h6.jsx-a1ac9dc8d1209f77 {margin:25px 0 15px;\nfont-size:17px;\nfont-weight:400;\nfont-family:"Jost", sans-serif;\ntext-align:center}\n.masonery.jsx-a1ac9dc8d1209f77 .item-img.jsx-a1ac9dc8d1209f77 .new.jsx-a1ac9dc8d1209f77 {padding:10px 30px;\nbackground:#75dab4;\nposition:absolute;\ntop:0;\nleft:-60px;\nwidth:200px;\n-webkit-transform:rotate(-30deg);\n-moz-transform:rotate(-30deg);\n-ms-transform:rotate(-30deg);\ntransform:rotate(-30deg);\nfont-size:13px}'}),(0,c.jsx)("header",{"data-background":"",style:{backgroundImage:"url(/demos/bg.png)"},"data-overlay-dark":"6",className:"jsx-a1ac9dc8d1209f77 works-header fixed-slider hfixd valign bg-img",children:(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 container",children:(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 row justify-content-center",children:(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-12 static text-center",children:(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 capt mt-50",children:(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 parlx",children:[(0,c.jsx)("h1",{className:"jsx-a1ac9dc8d1209f77 mb-10",children:"Archo Template"}),(0,c.jsx)("p",{className:"jsx-a1ac9dc8d1209f77 ls10 text-u",children:"Creative Architecture Interior Template."})]})})})})})}),(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 main-content",children:[(0,c.jsx)("section",{className:"jsx-a1ac9dc8d1209f77 masonery section-padding pt-50 sub-bg",children:(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 container-fluid",children:(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 row",children:(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 gallery full-width",children:[(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)(i.default,{href:"/home1",children:(0,c.jsx)("a",{target:"_blank",className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:[(0,c.jsx)("img",{src:"/demos/01.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Home Light"})})]})})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)(i.default,{href:"/home2",children:(0,c.jsx)("a",{target:"_blank",className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:[(0,c.jsx)("img",{src:"/demos/02.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Interiors Light"})})]})})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)(i.default,{href:"/home3",children:(0,c.jsx)("a",{target:"_blank",className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:[(0,c.jsx)("img",{src:"/demos/03.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Architecture Light"})})]})})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)(i.default,{href:"/home7",children:(0,c.jsx)("a",{target:"_blank",className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:[(0,c.jsx)("img",{src:"/demos/4.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Home Default"})})]})})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)(i.default,{href:"/home4",children:(0,c.jsx)("a",{target:"_blank",className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:[(0,c.jsx)("img",{src:"/demos/1.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Architecture Studio"})})]})})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)(i.default,{href:"/home5",children:(0,c.jsx)("a",{target:"_blank",className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:[(0,c.jsx)("img",{src:"/demos/2.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Creative Architecture"})})]})})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)(i.default,{href:"/about",children:(0,c.jsx)("a",{target:"_blank",className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:[(0,c.jsx)("img",{src:"/demos/5.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"About Us"})})]})})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)(i.default,{href:"/work1",children:(0,c.jsx)("a",{target:"_blank",className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:[(0,c.jsx)("img",{src:"/demos/6.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Works 2 Column"})})]})})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)(i.default,{href:"/home6",children:(0,c.jsx)("a",{target:"_blank",className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:[(0,c.jsx)("img",{src:"/demos/3.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Interior Agency"})})]})})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)(i.default,{href:"/work2",children:(0,c.jsx)("a",{target:"_blank",className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:[(0,c.jsx)("img",{src:"/demos/7.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Works 3 Column"})})]})})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)(i.default,{href:"/work3",children:(0,c.jsx)("a",{target:"_blank",className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:[(0,c.jsx)("img",{src:"/demos/8.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Works 4 Column"})})]})})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)(i.default,{href:"/contact",children:(0,c.jsx)("a",{target:"_blank",className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsxs)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:[(0,c.jsx)("img",{src:"/demos/9.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Contact Us"})})]})})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:(0,c.jsx)("img",{src:"/demos/more.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:(0,c.jsx)("img",{src:"/demos/more.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"})})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4 col-md-6 items",children:(0,c.jsx)("div",{"data-wow-delay":".4s",className:"jsx-a1ac9dc8d1209f77 item-img wow fadeInUp",children:(0,c.jsx)("img",{src:"/demos/more.png",alt:"image",className:"jsx-a1ac9dc8d1209f77"})})})]})})})}),(0,c.jsx)("footer",{className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 container",children:(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 row",children:[(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4",children:(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 item md-mb50",children:[(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 title",children:(0,c.jsx)("h5",{className:"jsx-a1ac9dc8d1209f77",children:"Contact Us"})}),(0,c.jsxs)("ul",{className:"jsx-a1ac9dc8d1209f77",children:[(0,c.jsxs)("li",{className:"jsx-a1ac9dc8d1209f77",children:[(0,c.jsx)("span",{className:"jsx-a1ac9dc8d1209f77 icon pe-7s-map-marker"}),(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:[(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Officeal Address"}),(0,c.jsx)("p",{className:"jsx-a1ac9dc8d1209f77",children:"504 White St . Dawsonville, GA 30534 , New York"})]})]}),(0,c.jsxs)("li",{className:"jsx-a1ac9dc8d1209f77",children:[(0,c.jsx)("span",{className:"jsx-a1ac9dc8d1209f77 icon pe-7s-mail"}),(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:[(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Email Us"}),(0,c.jsx)("p",{className:"jsx-a1ac9dc8d1209f77",children:"support@gmail.com"})]})]}),(0,c.jsxs)("li",{className:"jsx-a1ac9dc8d1209f77",children:[(0,c.jsx)("span",{className:"jsx-a1ac9dc8d1209f77 icon pe-7s-call"}),(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 cont",children:[(0,c.jsx)("h6",{className:"jsx-a1ac9dc8d1209f77",children:"Call Us"}),(0,c.jsx)("p",{className:"jsx-a1ac9dc8d1209f77",children:"+87986451666"})]})]})]})]})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4",children:(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 item md-mb50",children:[(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 title",children:(0,c.jsx)("h5",{className:"jsx-a1ac9dc8d1209f77",children:"Recent News"})}),(0,c.jsxs)("ul",{className:"jsx-a1ac9dc8d1209f77",children:[(0,c.jsxs)("li",{className:"jsx-a1ac9dc8d1209f77",children:[(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 img",children:(0,c.jsx)("img",{src:"/assets/img/blog/1.jpg",alt:"",className:"jsx-a1ac9dc8d1209f77"})}),(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 sm-post",children:[(0,c.jsx)("p",{className:"jsx-a1ac9dc8d1209f77",children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."}),(0,c.jsx)("span",{className:"jsx-a1ac9dc8d1209f77 date",children:"14 Jan 2022"})]})]}),(0,c.jsxs)("li",{className:"jsx-a1ac9dc8d1209f77",children:[(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 img",children:(0,c.jsx)("img",{src:"/assets/img/blog/2.jpg",alt:"",className:"jsx-a1ac9dc8d1209f77"})}),(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 sm-post",children:[(0,c.jsx)("p",{className:"jsx-a1ac9dc8d1209f77",children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."}),(0,c.jsx)("span",{className:"jsx-a1ac9dc8d1209f77 date",children:"14 Jan 2022"})]})]}),(0,c.jsx)("li",{className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 subscribe",children:[(0,c.jsx)("input",{type:"text",placeholder:"Type Your Email",className:"jsx-a1ac9dc8d1209f77"}),(0,c.jsx)("span",{className:"jsx-a1ac9dc8d1209f77 subs pe-7s-paper-plane"})]})})]})]})}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 col-lg-4",children:(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 item",children:[(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 logo",children:(0,c.jsx)("img",{src:"/assets/img/logo-light.png",alt:"",className:"jsx-a1ac9dc8d1209f77"})}),(0,c.jsxs)("div",{className:"jsx-a1ac9dc8d1209f77 social",children:[(0,c.jsx)(i.default,{href:"#",children:(0,c.jsx)("a",{className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsx)("i",{className:"jsx-a1ac9dc8d1209f77 fab fa-facebook-f"})})}),(0,c.jsx)(i.default,{href:"#",children:(0,c.jsx)("a",{className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsx)("i",{className:"jsx-a1ac9dc8d1209f77 fab fa-twitter"})})}),(0,c.jsx)(i.default,{href:"#",children:(0,c.jsx)("a",{className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsx)("i",{className:"jsx-a1ac9dc8d1209f77 fab fa-instagram"})})}),(0,c.jsx)(i.default,{href:"#",children:(0,c.jsx)("a",{className:"jsx-a1ac9dc8d1209f77",children:(0,c.jsx)("i",{className:"jsx-a1ac9dc8d1209f77 fab fa-youtube"})})})]}),(0,c.jsx)("div",{className:"jsx-a1ac9dc8d1209f77 copy-right",children:(0,c.jsxs)("p",{className:"jsx-a1ac9dc8d1209f77",children:["\xa9 2022, Arch Template. Made with passion by",(0,c.jsx)(i.default,{href:"#",children:"ThemesCamp"}),"."]})})]})})]})})})]})]})}},1664:function(a,s,e){a.exports=e(8418)},7884:function(a,s,e){"use strict";s.default=r;var c,d=(c=e(7294))&&c.__esModule?c:{default:c},l=e(8122),n=e(9035);var i=d.default.useInsertionEffect||d.default.useLayoutEffect;function r(a){var s=(0,l.useStyleRegistry)();return s?"undefined"===typeof window?(s.add(a),null):(i((function(){return s.add(a),function(){s.remove(a)}}),[a.id,String(a.dynamic)]),null):null}r.dynamic=function(a){return a.map((function(a){var s=a[0],e=a[1];return(0,n.computeId)(s,e)})).join(" ")}},5988:function(a,s,e){a.exports=e(7884)}},function(a){a.O(0,[774,888,179],(function(){return s=7386,a(a.s=s);var s}));var s=a.O();_N_E=s}]);