(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=i((function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];c(this,e);var s=document.createElement(n);s.className=o,s.innerHTML=r,this.node=s,i?t.append(s):t.prepend(s)})),u=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&t(e,n)}(a,e);var r,s,u=(r=a,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=o(r);if(s){var i=o(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return n(this,e)});function a(e,t,n,o){var r;return c(this,a),(r=u.call(this,e,"img",t)).node.src=n,r.node.alt=o,r}return i(a)}(s);function a(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];for(var r=0,i=n;r<i.length;r++){var c=i[r];c.classList.remove(e)}}function l(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];for(var r=0,i=n;r<i.length;r++){var c=i[r];c.classList.toggle(e)}}function f(e,t,n){return e<t?e+=1:e=n,e}function d(e,t){return 0!==e?e-=1:e=t,e}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function m(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(r,e);var t,n,o=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=w(t);if(n){var r=w(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return m(this,e)});function r(e,t){var n;v(this,r),n=o.call(this,e);var i=new s(n.node,"div","popup-overlay"),c=new s(i.node,"div","popup-wrapper"),u=new s(c.node,"div","popup-close-button"),a=new s(c.node,"div","popup-container");new s(a.node,"div","popup-img").node.style.backgroundImage="url(".concat(t.img);var f=new s(a.node,"div","popup-data");n.name=new s(f.node,"h3","title",t.name);var d=new s(f.node,"h4","subtitle");n.type=new s(d.node,"span","text",t.type),new s(d.node,"span","text"," - "),n.breed=new s(d.node,"span","text",t.breed),n.description=new s(f.node,"p","pets-description",t.description);var p=new s(f.node,"ul","popup-list");return n.age=new s(p.node,"li","list-item","Age: <span>".concat(t.age,"<span>")),n.inoculations=new s(p.node,"li","list-item","Inoculations: <span>".concat(t.inoculations.join(", "),"</span>")),console.log(t.diseases.join(", ")),n.diseases=new s(p.node,"li","list-item","Diseases: <span>".concat(t.diseases.join(", "),"</span>")),n.parasites=new s(p.node,"li","list-item","Parasites: <span>".concat(t.parasites.join(", "),"</span>")),u.node.onclick=function(){n.onClose()},i.node.onclick=function(){n.onClose()},i.node.onmouseover=function(){l("hover",u.node)},i.node.onmouseout=function(){l("hover",u.node)},a.node.onclick=function(e){return e.stopPropagation()},a.node.onmouseover=function(e){return e.stopPropagation()},a.node.onmouseout=function(e){return e.stopPropagation()},n}return h(r)}(s),S=function(){function e(){v(this,e)}return h(e,[{key:"loadData",value:function(e){var t=this;return this.name=e,fetch("assets/json/pets.json").then((function(e){return e.json()})).then((function(e){return e.find((function(e){return e.name===t.name}))}))}}]),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function k(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(c,e);var t,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(o);if(r){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function c(e,t,n){var o,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return j(this,c),(o=i.call(this,e,"div",t,"",r)).cardNumber=n,new u(o.node,"card-img","assets/img/".concat(o.cardNumber,".png"),"pets-img"),o.name=new s(o.node,"div","card-name","".concat(E[o.cardNumber-1])),new s(o.node,"div","card-button","Learn more"),o.node.onclick=function(){document.body.style.overflow="hidden",new S(o.name.node.textContent).loadData(o.name.node.textContent).then((function(e){var t=new g(document.documentElement,e);t.onClose=function(){t.node.remove(),document.body.style.overflow="visible"}}))},o}return t=c,(n=[{key:"getCardNumber",value:function(){return this.cardNumber}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(s),E=["Katrine","Jennifer","Woody","Sophia","Scarlett","Timmy","Charly","Freddie"];function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e,t,n){return t&&T(e.prototype,t),n&&T(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function Q(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(r,e);var t,n,o=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=V(t);if(n){var r=V(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return Q(this,e)});function r(e,t,n,i){var c;C(this,r),c=o.call(this,e,"div",t);var u,a,l=new s(c.node,"div","slider-wrap"),f=new s(c.node,"div","button-arrow left"),d=new s(c.node,"div","button-arrow right");return c.slider=new s(l.node,"div","slider"),c.cardQuantity=n,c.gap=i,c.offset=0,c.slideList=[],c.delay=.5,f.node.onclick=function(){u||(c.toSlidePrev(.4),u=setTimeout((function(){u=null}),400))},d.node.onclick=function(){a||(c.toSlideNext(.4),a=setTimeout((function(){a=null}),400))},c}return M(r,[{key:"createSlides",value:function(){this.sliderMain=new s(this.slider.node,"div","slider-main");for(var e=0;e<3;e++)this.slideList.push(new s(this.sliderMain.node,"div","slide"));this.indexMovedSlide=this.slideList.length-1,this.indexVisibleSlide=0,this.indexesVisibleCard=[],this.slideSize=this.cardQuantity/3;var t=this.slideList[this.indexVisibleSlide];this.createCards(t),this.translateSlides()}},{key:"createCards",value:function(e){var t=this,n=function(e){for(var t,n=e.length;0!=n;){t=Math.floor(Math.random()*n),n--;var o=[e[t],e[n]];e[n]=o[0],e[t]=o[1]}return e}([1,2,3,4,5,6,7,8].filter((function(e){return!t.indexesVisibleCard.includes(e)})));e.node.innerHTML="",this.indexesVisibleCard=[];for(var o=0;o<this.slideSize;o++)new L(e.node,"card",n[o]),this.indexesVisibleCard.push(n[o])}},{key:"translateSlides",value:function(){var e=this;this.slideList.forEach((function(t,n){var o=e.getDelay(n),r=e.getPosition(n);0===r?(t.node.style.transform="translate(".concat(100*r,"%)"),t.node.style.transitionDuration="".concat(o,"s")):r===e.slideList.length-1?(t.node.style.transform="translate(calc(-100% - ".concat(e.gap,"px))"),t.node.style.transitionDuration="".concat(o,"s")):(t.node.style.transform="translate(calc(".concat(100*r,"% + ").concat(r*e.gap,"px))"),t.node.style.transitionDuration="".concat(o,"s"))}))}},{key:"toSlidePrev",value:function(e){var t=this;this.slider.node.style.overflow="hidden",setTimeout((function(){t.slider.node.style.overflow="visible"}),400),this.indexVisibleSlide=f(this.indexVisibleSlide,this.slideList.length-1,0),this.updateSlides(),this.isPrev=!0,this.delay=e,this.offset=d(this.offset,this.slideList.length-1),this.indexMovedSlide=f(this.indexMovedSlide,this.slideList.length,1),this.translateSlides()}},{key:"toSlideNext",value:function(e){var t=this;this.slider.node.style.overflow="hidden",setTimeout((function(){t.slider.node.style.overflow="visible"}),400),this.indexVisibleSlide=d(this.indexVisibleSlide,this.slideList.length-1),this.updateSlides(),this.isPrev=!1,this.delay=e,this.offset=f(this.offset,this.slideList.length-1,0),this.indexMovedSlide=d(this.indexMovedSlide,this.slideList.length-1),this.translateSlides()}},{key:"updateSlides",value:function(){this.createCards(this.slideList[this.indexVisibleSlide])}},{key:"resizeSlider",value:function(e,t){this.cardQuantity!==e?(this.sliderMain.node.remove(),this.cardQuantity=e,this.gap=t,this.offset=0,this.slideList=[],this.createSlides()):(this.gap=t,this.translateSlides())}},{key:"getDelay",value:function(e){var t=this.delay;return this.isPrev?e===this.indexMovedSlide-1&&(t=0):e===this.indexMovedSlide&&(t=0),t}},{key:"getPosition",value:function(e){var t=0;return e+this.offset<this.slideList.length&&(t=e+this.offset),e+this.offset>this.slideList.length&&(t=e+this.offset-this.slideList.length),t}}]),r}(s),N=function(){function e(){var t,n=this;C(this,e),this.cardQuantity=this.getcardQuantity(),this.cardGap=this.getCardGap(),this.slider=new B(G,"slider-container",this.cardQuantity,this.cardGap),window.addEventListener("resize",(function(){t||(n.cardQuantity=n.getcardQuantity(),n.cardGap=n.getCardGap(),n.slider.resizeSlider(n.cardQuantity,n.cardGap),t=setTimeout((function(){t=null}),66))}))}return M(e,[{key:"getcardQuantity",value:function(){return window.innerWidth>=1280?9:window.innerWidth>=768?6:3}},{key:"getCardGap",value:function(){return window.innerWidth>=1024?90:40}},{key:"createSlider",value:function(){this.slider.createSlides()}}]),e}(),G=document.querySelector(".pets-content");function q(e){(e.target.classList.contains("nav-link")||e.target.classList.contains("lock"))&&(z=!1,a("active",A,F,H),a("lock",W,I))}var z=!1,W=document.body,A=document.querySelector(".menu-toggle"),H=document.querySelector(".double"),I=document.querySelector(".main"),F=document.querySelector(".nav");A.addEventListener("click",(function(){A.onmousedown=function(){return!1},z=!z,l("active",A,F,H),l("lock",W,I);var e=document.querySelector(".lock");e&&e.addEventListener("click",q)})),F.addEventListener("click",q),window.addEventListener("resize",(function(){z&&(z=!1,a("active",A,F,H),a("lock",W,I))})),(new N).createSlider()})();
//# sourceMappingURL=index.js.map