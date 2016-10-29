webpackJsonp([1,0],[function(e,t,i){e.exports=i(7)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.log=console.log.bind(console),t.error=console.error.bind(console),t.debug=console.debug.bind(console)},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ROTATION_VIEW=t.EVENT_NAMES=t.KEY=t.LEFT=t.OPPOSITE=t.STATES_ARRAY=t.STATES=void 0;var a=i(4),s=n(a),r={X:20,Y:30};(0,s.default)(r);var u={uf:"uf",ur:"ur",ub:"ub",ul:"ul",fu:"fu",fl:"fl",fd:"fd",fr:"fr",ru:"ru",rf:"rf",rd:"rd",rb:"rb",df:"df",dl:"dl",db:"db",dr:"dr",bu:"bu",br:"br",bd:"bd",bl:"bl",lu:"lu",lb:"lb",ld:"ld",lf:"lf"};(0,s.default)(u);var o=[];Object.keys(u).forEach(function(e,t){return o.push(e)}),(0,s.default)(o);var l={LEFT:37,UP:38,RIGHT:39,DOWN:40,a:65,d:68,e:69,q:81,s:83,w:87,x:88,y:89,z:90};(0,s.default)(l);var p={init:"init",statechange:"statechange",beforerotate:"beforerotate",afterrotate:"afterrotate"};(0,s.default)(p);var c=[];c.u="d",c.d="u",c.r="l",c.l="r",c.f="b",c.b="f";var d=[];d.uf="l",d.ur="f",d.ub="r",d.ul="b",d.fu="r",d.fl="u",d.fd="l",d.fr="d",d.ru="b",d.rf="u",d.rd="f",d.rb="d",d.df="r",d.dl="f",d.db="l",d.dr="b",d.bu="l",d.br="u",d.bd="r",d.bl="d",d.lu="f",d.lb="u",d.ld="b",d.lf="d",t.STATES=u,t.STATES_ARRAY=o,t.OPPOSITE=c,t.LEFT=d,t.KEY=l,t.EVENT_NAMES=p,t.ROTATION_VIEW=r},function(e,t){"use strict";function i(e,t){return(t||document).querySelector(e)}function n(e,t){return[].slice.call((t||document).querySelectorAll(e),0)}function a(e){return document.getElementById(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.qs=i,t.qsa=n,t.byId=a},function(e,t){e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(i){!t.hasOwnProperty(i)||null===t[i]||"object"!=typeof t[i]&&"function"!=typeof t[i]||Object.isFrozen(t[i])||e(t[i])}),t}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CUBE_COUNT=8,t.CUBE_SIZE="22vmin",t.CUBE_SIZE_HALF="11vmin"},function(e,t){},function(e,t,i){"use strict";i(6);var n=i(1),a=i(3),s=i(2),r=i(11),u=((0,a.qs)(".body-wrapper"),(0,a.byId)("cubetwo-component-1")),o=(0,a.qs)(".cubetwo-rotation-view",u),l=new r.CubeTwo({cubeComponent:u});l.addCallbackForEvent("init",function(e,t){}),l.init(),window.addEventListener("keydown",l.handleGlobalKeyEvent,!1),window.cubetwo=l;var p=(0,a.byId)("cubetwo-help");(0,a.byId)("btn-cubetwo-help").addEventListener("click",function(e){p.classList.toggle("cubetwo-show-help"),e.currentTarget.classList.toggle("cubetwo-active")}),(0,a.qs)(".cubetwo-btn-top-left",u).addEventListener("click",function(e){return o.style.transform="rotateX("+s.ROTATION_VIEW.X+"deg) rotateY(-"+s.ROTATION_VIEW.Y+"deg) rotateZ(0deg)"}),(0,a.qs)(".cubetwo-btn-top-right",u).addEventListener("click",function(e){return o.style.transform="rotateX("+s.ROTATION_VIEW.X+"deg) rotateY("+s.ROTATION_VIEW.Y+"deg) rotateZ(0deg)"}),(0,a.qs)(".cubetwo-btn-bottom-left",u).addEventListener("click",function(e){return o.style.transform="rotateX(-"+s.ROTATION_VIEW.X+"deg) rotateY(-"+s.ROTATION_VIEW.Y+"deg) rotateZ(0deg)"}),(0,a.qs)(".cubetwo-btn-bottom-right",u).addEventListener("click",function(e){return o.style.transform="rotateX(-"+s.ROTATION_VIEW.X+"deg) rotateY("+s.ROTATION_VIEW.Y+"deg) rotateZ(0deg)"}),(0,a.qs)(".cubetwo-btn-top-center",u).addEventListener("click",function(e){return l.x()}),(0,a.qs)(".cubetwo-btn-bottom-center",u).addEventListener("click",function(e){return l.x_()}),(0,a.qs)(".cubetwo-btn-center-left",u).addEventListener("click",function(e){return l.y_()}),(0,a.qs)(".cubetwo-btn-center-right",u).addEventListener("click",function(e){return l.y()}),(0,a.byId)("btn-cubetwo-rotate-1").addEventListener("click",function(e){return l.y2()}),(0,n.log)("cubetwo is available in console")},function(e,t,i){(function(e){"use strict";function n(){var t=this,i=this._touchElements[1],n=(0,c.qs)('[data-type="up"]',i),a=(0,c.qs)('[data-type="front"]',i),s=(0,c.qs)('[data-type="left"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(a,{});u.add(r),u.add(new e.Tap({event:"singletab"})),u.on("singletab swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletab":t.L_();break;case"swipeup":t.L_();break;case"swiperight":t.U_();break;case"swipedown":t.L();break;case"swipeleft":t.U()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(n,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.F_();break;case"swipeup":t.L_();break;case"swiperight":t.F();break;case"swipedown":t.L();break;case"swipeleft":t.F_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.U_();break;case"swipeup":t.F();break;case"swiperight":t.U_();break;case"swipedown":t.F_();break;case"swipeleft":t.U()}})}function a(){var t=this,i=this._touchElements[2],n=(0,c.qs)('[data-type="up"]',i),a=(0,c.qs)('[data-type="front"]',i),s=(0,c.qs)('[data-type="right"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(a,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.R();break;case"swipeup":t.R();break;case"swiperight":t.U_();break;case"swipedown":t.R_();break;case"swipeleft":t.U()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(n,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.F();break;case"swipeup":t.R();break;case"swiperight":t.F();break;case"swipedown":t.R_();break;case"swipeleft":t.F_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.U();break;case"swipeup":t.F_();break;case"swiperight":t.U_();break;case"swipedown":t.F();break;case"swipeleft":t.U()}})}function s(){var t=this,i=this._touchElements[3],n=(0,c.qs)('[data-type="down"]',i),a=(0,c.qs)('[data-type="front"]',i),s=(0,c.qs)('[data-type="left"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(a,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.L();break;case"swipeup":t.L_();break;case"swiperight":t.D();break;case"swipedown":t.L();break;case"swipeleft":t.D_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(n,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.F();break;case"swipeup":t.L_();break;case"swiperight":t.F_();break;case"swipedown":t.L();break;case"swipeleft":t.F()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.D();break;case"swipeup":t.F();break;case"swiperight":t.D();break;case"swipedown":t.F_();break;case"swipeleft":t.D_()}})}function r(){var t=this,i=this._touchElements[4],n=(0,c.qs)('[data-type="down"]',i),a=(0,c.qs)('[data-type="front"]',i),s=(0,c.qs)('[data-type="right"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(a,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.R_();break;case"swipeup":t.R();break;case"swiperight":t.D();break;case"swipedown":t.R_();break;case"swipeleft":t.D_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(n,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.F_();break;case"swipeup":t.R();break;case"swiperight":t.F_();break;case"swipedown":t.R_();break;case"swipeleft":t.F()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.D_();break;case"swipeup":t.F_();break;case"swiperight":t.D();break;case"swipedown":t.F();break;case"swipeleft":t.D_()}})}function u(){var t=this,i=this._touchElements[5],n=(0,c.qs)('[data-type="up"]',i),a=(0,c.qs)('[data-type="back"]',i),s=(0,c.qs)('[data-type="left"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(a,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.L_();break;case"swipeup":t.L_();break;case"swiperight":t.U_();break;case"swipedown":t.L();break;case"swipeleft":t.U()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(n,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.B();break;case"swipeup":t.L_();break;case"swiperight":t.B_();break;case"swipedown":t.L();break;case"swipeleft":t.B()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.U();break;case"swipeup":t.B_();break;case"swiperight":t.U_();break;case"swipedown":t.B();break;case"swipeleft":t.U()}})}function o(){var t=this,i=this._touchElements[6],n=(0,c.qs)('[data-type="up"]',i),a=(0,c.qs)('[data-type="back"]',i),s=(0,c.qs)('[data-type="right"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(a,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":break;case"swipeup":t.R();break;case"swiperight":t.U_();break;case"swipedown":t.R_();break;case"swipeleft":t.U()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(n,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.B_();break;case"swipeup":t.R();break;case"swiperight":t.B_();break;case"swipedown":t.R_();break;case"swipeleft":t.B()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.U_();break;case"swipeup":t.B();break;case"swiperight":t.U_();break;case"swipedown":t.B_();break;case"swipeleft":t.U()}})}function l(){var t=this,i=this._touchElements[7],n=(0,c.qs)('[data-type="down"]',i),a=(0,c.qs)('[data-type="back"]',i),s=(0,c.qs)('[data-type="left"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(a,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":break;case"swipeup":t.L_();break;case"swiperight":t.D();break;case"swipedown":t.L();break;case"swipeleft":t.D_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(n,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.B_();break;case"swipeup":t.L_();break;case"swiperight":t.B();break;case"swipedown":t.L();break;case"swipeleft":t.B_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.D_();break;case"swipeup":t.B_();break;case"swiperight":t.D();break;case"swipedown":t.B();break;case"swipeleft":t.D_()}})}function p(){var t=this,i=this._touchElements[8],n=(0,c.qs)('[data-type="down"]',i),a=(0,c.qs)('[data-type="back"]',i),s=(0,c.qs)('[data-type="right"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(a,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.R_();break;case"swipeup":t.R();break;case"swiperight":t.D();break;case"swipedown":t.R_();break;case"swipeleft":t.D_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(n,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.B();break;case"swipeup":t.R();break;case"swiperight":t.B();break;case"swipedown":t.R_();break;case"swipeleft":t.B_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,n=e.target;switch("cubetwo"!==n.dataset.type&&(n=n.parentElement,"cubetwo"!==n.dataset.type&&(n=n.parentElement)),i){case"singletap":t.D();break;case"swipeup":t.B();break;case"swiperight":t.D();break;case"swipedown":t.B_();break;case"swipeleft":t.D_()}})}Object.defineProperty(t,"__esModule",{value:!0}),t.setupCube1=n,t.setupCube2=a,t.setupCube3=s,t.setupCube4=r,t.setupCube5=u,t.setupCube6=o,t.setupCube7=l,t.setupCube8=p;var c=i(3);i(1)}).call(t,i(13))},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.CubeTwoUi=void 0;var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=i(5);i(1),t.CubeTwoUi=function(){function e(t){n(this,e),this.displayElements=t}return a(e,[{key:"uiF_Helper",value:function(e){this.displayElements[1].style.transformOrigin="100% 100% "+s.CUBE_SIZE_HALF,this.displayElements[2].style.transformOrigin="0% 100% "+s.CUBE_SIZE_HALF,this.displayElements[3].style.transformOrigin="100% 0% "+s.CUBE_SIZE_HALF,this.displayElements[4].style.transformOrigin="0% 0% "+s.CUBE_SIZE_HALF,this.displayElements[1].style.transform="rotateZ("+e+"deg)",this.displayElements[2].style.transform="rotateZ("+e+"deg)",this.displayElements[3].style.transform="rotateZ("+e+"deg)",this.displayElements[4].style.transform="rotateZ("+e+"deg)"}},{key:"uiF",value:function(){this.uiF_Helper("90")}},{key:"uiF_",value:function(){this.uiF_Helper("-90")}},{key:"uiF2",value:function(){this.uiF_Helper("180")}},{key:"uiF2_",value:function(){this.uiF_Helper("-180")}},{key:"uiB_Helper",value:function(e){this.displayElements[5].style.transformOrigin="100% 100% "+s.CUBE_SIZE_HALF,this.displayElements[6].style.transformOrigin="0% 100% "+s.CUBE_SIZE_HALF,this.displayElements[7].style.transformOrigin="100% 0% "+s.CUBE_SIZE_HALF,this.displayElements[8].style.transformOrigin="0% 0% "+s.CUBE_SIZE_HALF,this.displayElements[5].style.transform="rotateZ("+e+"deg)",this.displayElements[6].style.transform="rotateZ("+e+"deg)",this.displayElements[7].style.transform="rotateZ("+e+"deg)",this.displayElements[8].style.transform="rotateZ("+e+"deg)"}},{key:"uiB",value:function(){this.uiB_Helper("-90")}},{key:"uiB_",value:function(){this.uiB_Helper("90")}},{key:"uiB2",value:function(){this.uiB_Helper("-180")}},{key:"uiB2_",value:function(){this.uiB_Helper("180")}},{key:"uiU_Helper",value:function(e){this.displayElements[1].style.transformOrigin="100% 0% -"+s.CUBE_SIZE_HALF,this.displayElements[2].style.transformOrigin="0% 0% -"+s.CUBE_SIZE_HALF,this.displayElements[5].style.transformOrigin="100% 0% "+s.CUBE_SIZE_HALF,this.displayElements[6].style.transformOrigin="0% 0% "+s.CUBE_SIZE_HALF,this.displayElements[1].style.transform="rotateY("+e+"deg)",this.displayElements[2].style.transform="rotateY("+e+"deg)",this.displayElements[5].style.transform="rotateY("+e+"deg)",this.displayElements[6].style.transform="rotateY("+e+"deg)"}},{key:"uiU",value:function(){this.uiU_Helper("-90")}},{key:"uiU_",value:function(){this.uiU_Helper("90")}},{key:"uiU2",value:function(){this.uiU_Helper("-180")}},{key:"uiU2_",value:function(){this.uiU_Helper("180")}},{key:"uiD_Helper",value:function(e){this.displayElements[3].style.transformOrigin="100% 0% -"+s.CUBE_SIZE_HALF,this.displayElements[4].style.transformOrigin="0% 0% -"+s.CUBE_SIZE_HALF,this.displayElements[7].style.transformOrigin="100% 0% "+s.CUBE_SIZE_HALF,this.displayElements[8].style.transformOrigin="0% 0% "+s.CUBE_SIZE_HALF,this.displayElements[3].style.transform="rotateY("+e+"deg)",this.displayElements[4].style.transform="rotateY("+e+"deg)",this.displayElements[7].style.transform="rotateY("+e+"deg)",this.displayElements[8].style.transform="rotateY("+e+"deg)"}},{key:"uiD",value:function(){this.uiD_Helper("90")}},{key:"uiD_",value:function(){this.uiD_Helper("-90")}},{key:"uiD2",value:function(){this.uiD_Helper("180")}},{key:"uiD2_",value:function(){this.uiD_Helper("-180")}},{key:"uiR_Helper",value:function(e){this.displayElements[2].style.transformOrigin="0% 100% -"+s.CUBE_SIZE_HALF,this.displayElements[6].style.transformOrigin="0% 100% "+s.CUBE_SIZE_HALF,this.displayElements[8].style.transformOrigin="0% 0% "+s.CUBE_SIZE_HALF,this.displayElements[4].style.transformOrigin="0% 0% -"+s.CUBE_SIZE_HALF,this.displayElements[2].style.transform="rotateX("+e+"deg)",this.displayElements[6].style.transform="rotateX("+e+"deg)",this.displayElements[8].style.transform="rotateX("+e+"deg)",this.displayElements[4].style.transform="rotateX("+e+"deg)"}},{key:"uiR",value:function(){this.uiR_Helper("90")}},{key:"uiR_",value:function(){this.uiR_Helper("-90")}},{key:"uiR2",value:function(){this.uiR_Helper("180")}},{key:"uiR2_",value:function(){this.uiR_Helper("-180")}},{key:"uiL_Helper",value:function(e){this.displayElements[1].style.transformOrigin="0% 100% -"+s.CUBE_SIZE_HALF,this.displayElements[5].style.transformOrigin="0% 100% "+s.CUBE_SIZE_HALF,this.displayElements[7].style.transformOrigin="0% 0% "+s.CUBE_SIZE_HALF,this.displayElements[3].style.transformOrigin="0% 0% -"+s.CUBE_SIZE_HALF,this.displayElements[1].style.transform="rotateX("+e+"deg)",this.displayElements[5].style.transform="rotateX("+e+"deg)",this.displayElements[7].style.transform="rotateX("+e+"deg)",this.displayElements[3].style.transform="rotateX("+e+"deg)"}},{key:"uiL",value:function(){this.uiL_Helper("-90")}},{key:"uiL_",value:function(){this.uiL_Helper("90")}},{key:"uiL2",value:function(){this.uiL_Helper("-180")}},{key:"uiL2_",value:function(){this.uiL_Helper("180")}},{key:"uix",value:function(){this.uiR(),this.uiL_()}},{key:"uix_",value:function(){this.uiR_(),this.uiL()}},{key:"uix2",value:function(){this.uiR2(),this.uiL2_()}},{key:"uix2_",value:function(){this.uiR2_(),this.uiL2()}},{key:"uiy",value:function(){this.uiU_(),this.uiD()}},{key:"uiy_",value:function(){this.uiU(),this.uiD_()}},{key:"uiy2",value:function(){this.uiU2_(),this.uiD2()}},{key:"uiy2_",value:function(){this.uiU2(),this.uiD2_()}},{key:"uiz",value:function(){this.uiF(),this.uiB_()}},{key:"uiz_",value:function(){this.uiF_(),this.uiB()}},{key:"uiz2",value:function(){this.uiF2(),this.uiB2_()}},{key:"uiz2_",value:function(){this.uiF2_(),this.uiB2()}}]),e}()},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.CubeTwo=void 0;var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=i(1),u=i(3),o=i(4),l=n(o),p=i(12),c=i(8),d=i(5),w=i(9),h=i(2),_=function(){function e(t){return a(this,e),t&&t.cubeComponent?(this._appState={},this._ui=null,this._config=t,(0,l.default)(this._config),this._cubeComponentEl=t.cubeComponent,this._updateEventBindings(),this._initCallbacks(),this._setState({code:"todo impl state info for the cube",rotateEnabled:!0}),void(0,r.log)("CubeTwo constructor")):void(0,r.error)("CubeTwo element was not provided: "+t.cubeComponent)}return s(e,[{key:"_updateEventBindings",value:function(){this._handleKeyEventCube1=this._handleKeyEventCube1.bind(this),this._handleKeyEventCube2=this._handleKeyEventCube2.bind(this),this._handleKeyEventCube3=this._handleKeyEventCube3.bind(this),this._handleKeyEventCube4=this._handleKeyEventCube4.bind(this),this._handleKeyEventCube5=this._handleKeyEventCube5.bind(this),this._handleKeyEventCube6=this._handleKeyEventCube6.bind(this),this._handleKeyEventCube7=this._handleKeyEventCube7.bind(this),this._handleKeyEventCube8=this._handleKeyEventCube8.bind(this),this.handleGlobalKeyEvent=this.handleGlobalKeyEvent.bind(this),this._transitionEnd=this._transitionEnd.bind(this)}},{key:"_initCallbacks",value:function(){var e=this;this.callbacks={},Object.keys(h.EVENT_NAMES).forEach(function(t,i){return e.callbacks[t]=[]})}},{key:"addCallbackForEvent",value:function(e,t){var i=this.callbacks[e=e.toLowerCase()];i&&"function"==typeof t&&i.push(t)}},{key:"_triggerEvent",value:function(e,t){var i=this.callbacks[e]||[],n=void 0,a=void 0;for(n=0,a=i.length;n<a;n++)i[n].call(this,e,t)}},{key:"getState",value:function(){return(0,p.cloneObject)(this._appState)}},{key:"_setState",value:function(e){var t=(0,p.cloneObject)(e),i=this._appState.code,n=t.code;this._appState=t,i!==n&&this._triggerEvent("statechange",{cube:this.cubeComponentEl,previousStateCode:i,currentStateCode:n,state:t})}},{key:"F",value:function(e){this._rotationInvoke(e,this._ui.uiF)}},{key:"F_",value:function(e){this._rotationInvoke(e,this._ui.uiF_)}},{key:"F2",value:function(e){this._rotationInvoke(e,this._ui.uiF2)}},{key:"F2_",value:function(e){this._rotationInvoke(e,this._ui.uiF2_)}},{key:"B",value:function(e){this._rotationInvoke(e,this._ui.uiB)}},{key:"B_",value:function(e){this._rotationInvoke(e,this._ui.uiB_)}},{key:"B2",value:function(e){this._rotationInvoke(e,this._ui.uiB2)}},{key:"B2_",value:function(e){this._rotationInvoke(e,this._ui.uiB2_)}},{key:"U",value:function(e){this._rotationInvoke(e,this._ui.uiU)}},{key:"U_",value:function(e){this._rotationInvoke(e,this._ui.uiU_)}},{key:"U2",value:function(e){this._rotationInvoke(e,this._ui.uiU2)}},{key:"U2_",value:function(e){this._rotationInvoke(e,this._ui.uiU2_)}},{key:"D",value:function(e){this._rotationInvoke(e,this._ui.uiD)}},{key:"D_",value:function(e){this._rotationInvoke(e,this._ui.uiD_)}},{key:"D2",value:function(e){this._rotationInvoke(e,this._ui.uiD2)}},{key:"D2_",value:function(e){this._rotationInvoke(e,this._ui.uiD2_)}},{key:"R",value:function(e){this._rotationInvoke(e,this._ui.uiR)}},{key:"R_",value:function(e){this._rotationInvoke(e,this._ui.uiR_)}},{key:"R2",value:function(e){this._rotationInvoke(e,this._ui.uiR2)}},{key:"R2_",value:function(e){this._rotationInvoke(e,this._ui.uiR2_)}},{key:"L",value:function(e){this._rotationInvoke(e,this._ui.uiL)}},{key:"L_",value:function(e){this._rotationInvoke(e,this._ui.uiL_)}},{key:"L2",value:function(e){this._rotationInvoke(e,this._ui.uiL2)}},{key:"L2_",value:function(e){this._rotationInvoke(e,this._ui.uiL2_)}},{key:"x",value:function(e){this._rotationInvoke(e,this._ui.uix)}},{key:"x_",value:function(e){this._rotationInvoke(e,this._ui.uix_)}},{key:"x2",value:function(e){this._rotationInvoke(e,this._ui.uix2)}},{key:"x2_",value:function(e){this._rotationInvoke(e,this._ui.uix2_)}},{key:"y",value:function(e){this._rotationInvoke(e,this._ui.uiy)}},{key:"y_",value:function(e){this._rotationInvoke(e,this._ui.uiy_)}},{key:"y2",value:function(e){this._rotationInvoke(e,this._ui.uiy2)}},{key:"y2_",value:function(e){this._rotationInvoke(e,this._ui.uiy2_)}},{key:"z",value:function(e){this._rotationInvoke(e,this._ui.uiz)}},{key:"z2",value:function(e){this._rotationInvoke(e,this._ui.uiz2)}},{key:"z_",value:function(e){this._rotationInvoke(e,this._ui.uiz_)}},{key:"z2_",value:function(e){this._rotationInvoke(e,this._ui.uiz2_)}},{key:"_rotationInvoke",value:function(e,t){t.bind(this._ui)()}},{key:"destroy",value:function(){}},{key:"_updateUiFaces",value:function(){}},{key:"_transitionEnd",value:function(e){var t=this,i=e.currentTarget;i&&!function(){var e=i.style.transition;i.style.transition="0s",(0,p.nextFrame)(function(n){i.style.transformOrigin="",i.style.transform="",t._updateUiFaces(),i.style.transform=e,(0,p.rAF)(function(n){i.style.transition=e;var a=t.getState();a.rotateEnabled=!0,t._setState(a),t._triggerEvent("afterrotate",{state:a})})})}()}},{key:"init",value:function(){this._cubeElements=[""],this._touchElements=[""],this._displayElements=[""];for(var e=1;e<=d.CUBE_COUNT;e++){var t=(0,u.qs)(".cubetwo-cube-"+e,this._cubeComponentEl),i=(0,u.qs)('[data-type="cubetwo-touch"]',t),n=(0,u.qs)('[data-type="cubetwo-display"]',t);this._cubeElements.push(t),this._displayElements.push(n),this._touchElements.push(i)}(0,l.default)(this._cubeElements),(0,l.default)(this._touchElements),(0,l.default)(this._displayElements),this._ui=new w.CubeTwoUi(this._displayElements);for(var e=1;e<=d.CUBE_COUNT;e++){var a=this._displayElements[e];a&&a.addEventListener("transitionend",this._transitionEnd)}c.setupCube1.bind(this)(),c.setupCube2.bind(this)(),c.setupCube3.bind(this)(),c.setupCube4.bind(this)(),c.setupCube5.bind(this)(),c.setupCube6.bind(this)(),c.setupCube7.bind(this)(),c.setupCube8.bind(this)(),this._updateUiFaces(),this._cubeElements[1].addEventListener("keydown",this._handleKeyEventCube1,!1),this._cubeElements[2].addEventListener("keydown",this._handleKeyEventCube2,!1),this._cubeElements[3].addEventListener("keydown",this._handleKeyEventCube3,!1),this._cubeElements[4].addEventListener("keydown",this._handleKeyEventCube4,!1),this._cubeElements[5].addEventListener("keydown",this._handleKeyEventCube5,!1),this._cubeElements[6].addEventListener("keydown",this._handleKeyEventCube6,!1),this._cubeElements[7].addEventListener("keydown",this._handleKeyEventCube7,!1),this._cubeElements[8].addEventListener("keydown",this._handleKeyEventCube8,!1),this._triggerEvent("init",{state:this.getState()})}},{key:"_updateUiFaces",value:function(){}},{key:"_handleKeyEventCube1",value:function(e){switch(e.stopPropagation(),e.keyCode){case h.KEY.LEFT:case h.KEY.a:this.U();break;case h.KEY.UP:e.preventDefault();case h.KEY.w:this.L_();break;case h.KEY.RIGHT:case h.KEY.d:this.U_();break;case h.KEY.DOWN:e.preventDefault();case h.KEY.s:this.L();break;case h.KEY.q:this.F_();break;case h.KEY.e:this.F();break;case h.KEY.x:this.x();break;case h.KEY.y:this.y();break;case h.KEY.z:this.z()}}},{key:"_handleKeyEventCube2",value:function(e){switch(e.stopPropagation(),e.keyCode){case h.KEY.LEFT:case h.KEY.a:this.U();break;case h.KEY.UP:e.preventDefault();case h.KEY.w:this.R();break;case h.KEY.RIGHT:case h.KEY.d:this.U_();break;case h.KEY.DOWN:e.preventDefault();case h.KEY.s:this.R_();break;case h.KEY.q:this.F_();break;case h.KEY.e:this.F();break;case h.KEY.x:this.x();break;case h.KEY.y:this.y();break;case h.KEY.z:this.z()}}},{key:"_handleKeyEventCube3",value:function(e){switch(e.stopPropagation(),e.keyCode){case h.KEY.LEFT:case h.KEY.a:this.D_();break;case h.KEY.UP:e.preventDefault();case h.KEY.w:this.L_();break;case h.KEY.RIGHT:case h.KEY.d:this.D();break;case h.KEY.DOWN:e.preventDefault();case h.KEY.s:this.L();break;case h.KEY.q:this.F_();break;case h.KEY.e:this.F();break;case h.KEY.x:this.x();break;case h.KEY.y:this.y();break;case h.KEY.z:this.z()}}},{key:"_handleKeyEventCube4",value:function(e){switch(e.stopPropagation(),e.keyCode){case h.KEY.LEFT:case h.KEY.a:this.D_();break;case h.KEY.UP:e.preventDefault();case h.KEY.w:this.R();break;case h.KEY.RIGHT:case h.KEY.d:this.D();break;case h.KEY.DOWN:e.preventDefault();case h.KEY.s:this.R_();break;case h.KEY.q:this.F_();break;case h.KEY.e:this.F();break;case h.KEY.x:this.x();break;case h.KEY.y:this.y();break;case h.KEY.z:this.z()}}},{key:"_handleKeyEventCube5",value:function(e){e.stopPropagation()}},{key:"_handleKeyEventCube6",value:function(e){e.stopPropagation()}},{key:"_handleKeyEventCube7",value:function(e){e.stopPropagation()}},{key:"_handleKeyEventCube8",value:function(e){e.stopPropagation()}},{key:"handleGlobalKeyEvent",value:function(e){switch(e.keyCode){case h.KEY.LEFT:case h.KEY.a:this.y_();break;case h.KEY.UP:e.preventDefault();case h.KEY.w:case h.KEY.x:this.x();break;case h.KEY.RIGHT:case h.KEY.d:case h.KEY.y:this.y();break;case h.KEY.DOWN:e.preventDefault();case h.KEY.s:this.x_();break;case h.KEY.q:this.z_();break;case h.KEY.e:case h.KEY.z:this.z()}}}]),e}();t.CubeTwo=_},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(10);Object.defineProperty(t,"CubeTwo",{enumerable:!0,get:function(){return n.CubeTwo}})},function(e,t,i){"use strict";function n(e){window.requestAnimationFrame(e)}function a(e){window.requestAnimationFrame(function(t){window.requestAnimationFrame(e)})}function s(e){return e[0]}function r(e){return e[1]}function u(e){return w.OPPOSITE[o(e)]}function o(e){return w.LEFT[e]}function l(e){return w.OPPOSITE[e[0]];
}function p(e){return w.OPPOSITE[e[1]]}function c(e){return Object.assign({},e)}function d(){var e=w.STATES_ARRAY;this.first=w.STATES_ARRAY[0],this.last=w.STATES_ARRAY[w.STATES_ARRAY.length-1],this.stateCount=e.length,this.get=function(t){var i=e.indexOf(t);if(i>=0)return i===e.length-1?{state:e[0],index:0}:{state:e[i+1],index:i+1}}}Object.defineProperty(t,"__esModule",{value:!0}),t.nextState=void 0,t.rAF=n,t.nextFrame=a,t.getUp=s,t.getFront=r,t.getRight=u,t.getLeft=o,t.getDown=l,t.getBack=p,t.cloneObject=c;var w=i(2),h=(i(1),new d);t.nextState=h},function(e,t){e.exports=Hammer}]);