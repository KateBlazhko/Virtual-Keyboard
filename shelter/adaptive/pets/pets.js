(()=>{var t={524:()=>{function t(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];for(var r=0,i=n;r<i.length;r++){var c=i[r];c.classList.remove(t)}}function e(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];for(var r=0,i=n;r<i.length;r++){var c=i[r];c.classList.toggle(t)}}function n(e){(e.target.classList.contains("nav-link")||e.target.classList.contains("lock"))&&(t("active",r,a,i),t("lock",o,c))}var o=document.body,r=document.querySelector(".menu-toggle"),i=document.querySelector(".double"),c=document.querySelector(".main"),a=document.querySelector(".nav");r.addEventListener("click",(function(){r.onmousedown=function(){return!1},e("active",r,a,i),e("lock",o,c);var t=document.querySelector(".lock");t&&t.addEventListener("click",n)})),a.addEventListener("click",n)}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}function o(t,e){return o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=c(t);if(e){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}function i(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n(524);var l=u((function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";s(this,t);var i=document.createElement(n);i.className=o,i.innerHTML=r,this.node=i,e.append(i)})),f=function(t){e(o,t);var n=r(o);function o(t,e,r,i){var c;return s(this,o),(c=n.call(this,t,"a",e)).node.textContent=r,c.node.href=i,c}return u(o)}(l),d=function(t){e(o,t);var n=r(o);function o(t,e,r,i){var c;return s(this,o),(c=n.call(this,t,"img",e)).node.src=r,c.node.alt=i,c}return u(o)}(l),p=function(t){e(o,t);var n=r(o);function o(t,e,r){var i;return s(this,o),(i=n.call(this,t,"div",e)).cardNumber=r,i.img=new d(i.node,"card-img","assets/img/".concat(r,".png"),"pets-img"),i.name=new l(i.node,"div","card-name","".concat(y[r-1])),i.button=new f(i.node,"card-button","Learn more","#slider"),i}return u(o)}(l),y=["Katrine","Jennifer","Woody","Sophia","Timmy","Charly","Scarlett","Freddie"];function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}function m(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(o);if(r){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m(this,t)});function c(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,t,"div",e)).cardList=[],n.paginationControls=new l(n.node,"div","pagination-controls"),n.leftScroll=new f(n.paginationControls.node,"controls-button","<<","#"),n.prev=new f(n.paginationControls.node,"controls-button","<","#"),n.page=new f(n.paginationControls.node,"controls-button","1","#"),n.next=new f(n.paginationControls.node,"controls-button",">","#"),n.rightScroll=new f(n.paginationControls.node,"controls-button",">>","#"),n.paginationPets=new l(n.node,"div","pagination-pets"),n}return e=c,n=[{key:"createCards",value:function(t){this.setViewControls(),this.cardQuantity=t;for(var e=1;e<=this.cardQuantity;e++)this.cardList.push(new p(this.paginationPets.node,"card",e))}},{key:"recreateCards",value:function(t){this.paginationPets.node.innerHTML="",this.cardQuantity=t;for(var e=1;e<=this.cardQuantity;e++)this.cardList.push(new p(this.paginationPets.node,"card",e))}},{key:"setViewControls",value:function(){this.page.node.style.pointerEvents="none",this.page.node.classList.add("active"),console.log(this.page.node.textContent),"1"===this.page.node.textContent?(this.leftScroll.node.classList.add("inactive"),this.prev.node.classList.add("inactive")):(this.leftScroll.node.classList.delete("inactive"),this.prev.node.classList.delete("inactive"))}},{key:"updateCards",value:function(){}}],n&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(l),O=new w(document.querySelector(".pets-content"),"pagination"),S=j();function j(){return window.innerWidth>=1280?8:window.innerWidth>=768?6:3}O.createCards(S),window.addEventListener("resize",(function(){var t;t||(t=setTimeout((function(){t=null,S=j(),O.recreateCards(S)}),50))}))})()})();
//# sourceMappingURL=pets.js.map