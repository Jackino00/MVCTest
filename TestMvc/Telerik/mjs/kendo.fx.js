/**
 * Kendo UI v2024.4.1112 (http://www.telerik.com/kendo-ui)
 * Copyright 2024 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";const __meta__={id:"fx",name:"Effects",category:"framework",description:"Required for animation effects in all Kendo UI widgets.",depends:["core"]};!function(e){let t=window.kendo,i=t.effects,r=e.each,n=e.extend,s=t.support,o=/matrix3?d?\s*\(.*,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?,\s*([\d\.\-]+)\w*?/i,a=/translatex?$/i,c=/(zoom|fade|expand)(\w+)/,l=/(zoom|fade|expand)/,d=["perspective","rotate","rotatex","rotatey","rotatez","rotate3d","scale","scalex","scaley","scalez","scale3d","skew","skewx","skewy","translate","translatex","translatey","translatez","translate3d","matrix","matrix3d"],u=["rotate","scale","scalex","scaley","skew","skewx","skewy","translate","translatex","translatey","matrix"],f=Math.round,h="px",p="auto",v="width",m="height",_="hidden",x="origin",g="abortId",y="overflow",k="position",b="completeCallback",w="transitionend",C="transition",P="transform",z="perspective",E="1500px",R="perspective("+E+")",H={left:{reverse:"right",property:"left",transition:"translatex",vertical:!1,modifier:-1},right:{reverse:"left",property:"left",transition:"translatex",vertical:!1,modifier:1},down:{reverse:"up",property:"top",transition:"translatey",vertical:!0,modifier:1},up:{reverse:"down",property:"top",transition:"translatey",vertical:!0,modifier:-1},top:{reverse:"bottom"},bottom:{reverse:"top"},in:{reverse:"out",modifier:-1},out:{reverse:"in",modifier:1},vertical:{reverse:"vertical"},horizontal:{reverse:"horizontal"}};function T(e){return parseInt(e,10)}function D(e,t){var i,r,n,o,a=[],c={};for(r in t)i=r.toLowerCase(),o=-1!=d.indexOf(i),!s.hasHW3D&&o&&-1==u.indexOf(i)?delete t[r]:(n=t[r],o?a.push(r+"("+n+")"):c[r]=n);return a.length&&(c[P]=a.join(" ")),c}t.directions=H,n(e.fn,{kendoStop:function(e,t){return i.stopQueue(this,e||!1,t||!1)}}),t.toggleClass=function(e,t,i,s){return t&&(t=t.split(" "),i=n({exclusive:"all",duration:400,ease:"ease-out"},i),e.css(C,i.exclusive+" "+i.duration+"ms "+i.ease),setTimeout((function(){e.css(C,"").css(m)}),i.duration),r(t,(function(t,i){e.toggleClass(i,s)}))),e},t.parseEffects=function(e,t){var i={};return"string"==typeof e?r(e.split(" "),(function(e,r){var n=!l.test(r),s=r.replace(c,(function(e,t,i){return t+":"+i.toLowerCase()})).split(":"),o=s[1],a={};s.length>1&&(a.direction=t&&n?H[o].reverse:o),i[s[0]]=a})):r(e,(function(e){var r=this.direction;r&&t&&!l.test(e)&&(this.direction=H[r].reverse),i[e]=this})),i},n(i,{transition:function(t,i,r){let s,o,a=0,c=t.data("keys")||[];r=n({duration:200,ease:"ease-out",complete:null,exclusive:"all"},r);let l=!1,d=function(){l||(l=!0,o&&(clearTimeout(o),o=null),t.removeData(g).dequeue().css(C,"").css(C),r.complete.call(t))};r.duration=e.fx&&e.fx.speeds[r.duration]||r.duration,s=D(0,i),e.merge(c,function(e){var t=[];for(var i in e)t.push(i);return t}(s)),e.hasOwnProperty("uniqueSort")?t.data("keys",e.uniqueSort(c)).height():t.data("keys",e.unique(c)).height(),t.css(C,r.exclusive+" "+r.duration+"ms "+r.ease).css(C),t.css(s).css(P),t.one(w,d),0!==r.duration&&(a=500),o=setTimeout(d,r.duration+a),t.data(g,o),t.data(b,d)},stopQueue:function(e,i,r){var n,s=e.data("keys"),o=!r&&s,a=e.data(b);return o&&(n=t.getComputedStyles(e[0],s)),a&&a(),o&&e.css(n),e.removeData("keys").stop(i)}});var O=t.Class.extend({init:function(e,t){var i=this;i.element=e,i.effects=[],i.options=t,i.restore=[]},run:function(t){let r,s,o,a,c,l,d=this,u=t.length,f=d.element,h=d.options,p=e.Deferred(),v={},m={};for(d.effects=t,p.done(d.complete.bind(d)),f.data("animating",!0),s=0;s<u;s++)for(r=t[s],r.setReverse(h.reverse),r.setOptions(h),d.addRestoreProperties(r.restore),r.prepare(v,m),c=r.children(),o=0,l=c.length;o<l;o++)c[o].duration(h.duration).run();for(var _ in h.effects)n(m,h.effects[_].properties);for(f.is(":visible")||n(v,{display:f.data("olddisplay")||"block"}),h.reset||(a=f.data("targetTransform"),a&&(v=n(a,v))),v=D(0,v),f.css(v).css(P),s=0;s<u;s++)t[s].setup();return h.init&&h.init(),f.data("targetTransform",m),i.animate(f,m,n({},h,{complete:p.resolve})),p.promise()},stop:function(){e(this.element).kendoStop(!0,!0)},addRestoreProperties:function(e){for(var t,i=this.element,r=0,n=e.length;r<n;r++)t=e[r],this.restore.push(t),i.data(t)||i.data(t,i.css(t))},restoreCallback:function(){for(var e=this.element,t=0,i=this.restore.length;t<i;t++){var r=this.restore[t];e.css(r,e.data(r))}},complete:function(){let e=this,t=0,i=e.element,r=e.options,n=e.effects,s=n.length;for(i.removeData("animating").dequeue(),r.hide&&i.data("olddisplay",i.css("display")).hide(),this.restoreCallback();t<s;t++)n[t].teardown();r.completeCallback&&r.completeCallback(i)}});i.promise=function(e,r){var n,s,o=[],a=new O(e,r),c=t.parseEffects(r.effects);for(var l in r.effects=c,c)(n=i[S(l)])&&(s=new n(e,c[l].direction),o.push(s));o[0]?a.run(o):(e.is(":visible")||e.css({display:e.data("olddisplay")||"block"}).css("display"),r.init&&r.init(),e.dequeue(),a.complete())},n(i,{animate:function(e,t,r){let n=!1!==r.transition;delete r.transition,"transition"in i&&n?i.transition(e,t,r):e.animate(function(e){for(var t in e)-1!=d.indexOf(t)&&-1==u.indexOf(t)&&delete e[t];return e}(t),{queue:!1,show:!1,hide:!1,duration:r.duration,complete:r.complete})}}),i.animatedPromise=i.promise;var I=t.Class.extend({init:function(e,t){var i=this;i.element=e,i._direction=t,i.options={},i._additionalEffects=[],i.restore||(i.restore=[])},reverse:function(){return this._reverse=!0,this.run()},play:function(){return this._reverse=!1,this.run()},add:function(e){return this._additionalEffects.push(e),this},direction:function(e){return this._direction=e,this},duration:function(e){return this._duration=e,this},compositeRun:function(){var e=this,t=new O(e.element,{reverse:e._reverse,duration:e._duration}),i=e._additionalEffects.concat([e]);return t.run(i)},run:function(){if(this._additionalEffects&&this._additionalEffects[0])return this.compositeRun();let t,r,s=this,o=s.element,a=0,c=s.restore,l=c.length,d=e.Deferred(),u={},f={},h=s.children(),p=h.length;for(d.done(s._complete.bind(s)),o.data("animating",!0),a=0;a<l;a++)t=c[a],o.data(t)||o.data(t,o.css(t));for(a=0;a<p;a++)h[a].duration(s._duration).run();return s.prepare(u,f),o.is(":visible")||n(u,{display:o.data("olddisplay")||"block"}),r=o.data("targetTransform"),r&&(u=n(r,u)),u=D(0,u),o.css(u).css(P),s.setup(),o.data("targetTransform",f),i.animate(o,f,{duration:s._duration,complete:d.resolve}),d.promise()},stop:function(){var t=0,i=this.children(),r=i.length;for(t=0;t<r;t++)i[t].stop();return e(this.element).kendoStop(!0,!0),this},restoreCallback:function(){for(var e=this.element,t=0,i=this.restore.length;t<i;t++){var r=this.restore[t];e.css(r,e.data(r))}},_complete:function(){let e=this,t=e.element;t.removeData("animating").dequeue(),e.restoreCallback(),e.shouldHide()&&t.data("olddisplay",t.css("display")).hide(),e.teardown()},setOptions:function(e){n(!0,this.options,e)},children:function(){return[]},shouldHide:e.noop,setup:e.noop,prepare:e.noop,teardown:e.noop,directions:[],setReverse:function(e){return this._reverse=e,this}});function S(e){return e.charAt(0).toUpperCase()+e.substring(1)}function F(e,t){var n=I.extend(t),s=n.prototype.directions;i[S(e)]=n,i.Element.prototype[e]=function(e,t,i,r){return new n(this.element,e,t,i,r)},r(s,(function(t,r){i.Element.prototype[e+S(r)]=function(e,t,i){return new n(this.element,r,e,t,i)}}))}var q=["left","right","up","down"],A=["in","out"];function V(e,t,i,r){F(e,{directions:A,startValue:function(e){return this._startValue=e,this},endValue:function(e){return this._endValue=e,this},shouldHide:function(){return this._shouldHide},prepare:function(e,n){var s,o,a="out"===this._direction,c=this.element.data(t);s=!(isNaN(c)||c==i)?c:void 0!==this._startValue?this._startValue:a?i:r,o=void 0!==this._endValue?this._endValue:a?r:i,this._reverse?(e[t]=o,n[t]=s):(e[t]=s,n[t]=o),this._shouldHide=n[t]===r}})}F("slideIn",{directions:q,divisor:function(e){return this.options.divisor=e,this},prepare:function(e,i){let r,n=this,s=n.element,o=t._outerWidth,a=t._outerHeight,c=H[n._direction],l=-c.modifier*(c.vertical?a(s):o(s))/(n.options&&n.options.divisor||1)+h;n._reverse&&(r=e,e=i,i=r),e[c.transition]=l,i[c.transition]="0px"}}),F("tile",{directions:q,init:function(e,t,i){I.prototype.init.call(this,e,t),this.options={previous:i}},previousDivisor:function(e){return this.options.previousDivisor=e,this},children:function(){var e=this,i=e._reverse,r=e.options.previous,n=e.options.previousDivisor||1,s=e._direction,o=[t.fx(e.element).slideIn(s).setReverse(i)];return r&&o.push(t.fx(r).slideIn(H[s].reverse).divisor(n).setReverse(!i)),o}}),V("fade","opacity",1,0),V("zoom","scale",1,.01),F("slideMargin",{prepare:function(e,t){var i,r=this,n=r.element,s=r.options,o=n.data(x),a=s.offset,c=r._reverse;c||null!==o||n.data(x,parseFloat(n.css("margin-"+s.axis))),i=n.data(x)||0,t["margin-"+s.axis]=c?i:i+a}}),F("slideTo",{prepare:function(e,t){let i=this,r=i.element,n=i.options.offset.split(","),s=i._reverse;t.translatex=s?0:n[0],t.translatey=s?0:n[1],r.css("left")}}),F("expand",{directions:["horizontal","vertical"],restore:[y],prepare:function(e,t){var i=this,r=i.element,n=i.options,s=i._reverse,o="vertical"===i._direction?m:v,a=r[0].style[o],c=r.data(o),l=parseFloat(c||a),d=f(r.css(o,p)[o]());e.overflow=_,l=n&&n.reset?d||l:l||d,t[o]=(s?0:l)+h,e[o]=(s?l:0)+h,undefined===c&&r.data(o,a)},shouldHide:function(){return this._reverse},teardown:function(){var e=this.element,t="vertical"===this._direction?m:v,i=e.data(t);i!=p&&""!==i||setTimeout((function(){e.css(t,p).css(t)}),0)}});var $={position:"absolute",marginLeft:0,marginTop:0,scale:1};F("transfer",{init:function(e,t){this.element=e,this.options={target:t},this.restore=[]},setup:function(){this.element.appendTo(document.body)},prepare:function(e,t){var r=this,s=r.element,c=i.box(s),l=i.box(r.options.target),d=function(e,t){let i=e.css(P);if("none"==i)return"scale"==t?1:0;let r=i.match(new RegExp(t+"\\s*\\(([\\d\\w\\.]+)")),n=0;return r?n=T(r[1]):(r=i.match(o)||[0,0,0,0,0],t=t.toLowerCase(),a.test(t)?n=parseFloat(r[3]/r[2]):"translatey"==t?n=parseFloat(r[4]/r[2]):"scale"==t?n=parseFloat(r[2]):"rotate"==t&&(n=parseFloat(Math.atan2(r[2],r[1])))),n}(s,"scale"),u=i.fillScale(l,c),f=i.transformOrigin(l,c);n(e,$),t.scale=1,s.css(P,"scale(1)").css(P),s.css(P,"scale("+d+")"),e.top=c.top,e.left=c.left,e.transformOrigin=f.x+h+" "+f.y+h,r._reverse?e.scale=u:t.scale=u}});var M={top:"rect(auto auto $size auto)",bottom:"rect($size auto auto auto)",left:"rect(auto $size auto auto)",right:"rect(auto auto auto $size)"},N={top:{start:"rotatex(0deg)",end:"rotatex(180deg)"},bottom:{start:"rotatex(-180deg)",end:"rotatex(0deg)"},left:{start:"rotatey(0deg)",end:"rotatey(-180deg)"},right:{start:"rotatey(180deg)",end:"rotatey(0deg)"}};function L(e,i){var r=e[t.directions[i].vertical?m:v]()/2+"px";return M[i].replace("$size",r)}F("turningPage",{directions:q,init:function(e,t,i){I.prototype.init.call(this,e,t),this._container=i},prepare:function(e,i){var r=this,n=r._reverse,s=n?H[r._direction].reverse:r._direction,o=N[s];e.zIndex=1,r._clipInHalf&&(e.clip=L(r._container,t.directions[s].reverse)),e["backface-visibility"]=_,i[P]=R+(n?o.start:o.end),e[P]=R+(n?o.end:o.start)},setup:function(){this._container.append(this.element)},face:function(e){return this._face=e,this},shouldHide:function(){var e=this._reverse,t=this._face;return e&&!t||!e&&t},clipInHalf:function(e){return this._clipInHalf=e,this},temporary:function(){return this.element.addClass("temp-page"),this}}),F("staticPage",{directions:q,init:function(e,t,i){I.prototype.init.call(this,e,t),this._container=i},restore:["clip"],prepare:function(e,t){var i=this,r=i._reverse?H[i._direction].reverse:i._direction;e.clip=L(i._container,r),e.opacity=.999,t.opacity=1},shouldHide:function(){var e=this._reverse,t=this._face;return e&&!t||!e&&t},face:function(e){return this._face=e,this}}),F("pageturn",{directions:["horizontal","vertical"],init:function(e,t,i,r){I.prototype.init.call(this,e,t),this.options={},this.options.face=i,this.options.back=r},children:function(){var e,i=this,r=i.options,n="horizontal"===i._direction?"left":"top",s=t.directions[n].reverse,o=i._reverse,a=r.face.clone(!0).removeAttr("id"),c=r.back.clone(!0).removeAttr("id"),l=i.element;return o&&(e=n,n=s,s=e),[t.fx(r.face).staticPage(n,l).face(!0).setReverse(o),t.fx(r.back).staticPage(s,l).setReverse(o),t.fx(a).turningPage(n,l).face(!0).clipInHalf(!0).temporary().setReverse(o),t.fx(c).turningPage(s,l).clipInHalf(!0).temporary().setReverse(o)]},prepare:function(e,t){e[z]=E,e.transformStyle="preserve-3d",e.opacity=.999,t.opacity=1},teardown:function(){this.element.find(".temp-page").remove()}}),F("flip",{directions:["horizontal","vertical"],init:function(e,t,i,r){I.prototype.init.call(this,e,t),this.options={},this.options.face=i,this.options.back=r},children:function(){var e,i=this,r=i.options,n="horizontal"===i._direction?"left":"top",s=t.directions[n].reverse,o=i._reverse,a=i.element;return o&&(e=n,n=s,s=e),[t.fx(r.face).turningPage(n,a).face(!0).setReverse(o),t.fx(r.back).turningPage(s,a).setReverse(o)]},prepare:function(e){e[z]=E,e.transformStyle="preserve-3d"}});var j=!s.mobileOS.android;F("replace",{_before:e.noop,_after:e.noop,init:function(t,i,r){I.prototype.init.call(this,t),this._previous=e(i),this._transitionClass=r},duration:function(){throw new Error("The replace effect does not support duration setting; the effect duration may be customized through the transition class rule")},beforeTransition:function(e){return this._before=e,this},afterTransition:function(e){return this._after=e,this},_both:function(){return e().add(this._element).add(this._previous)},_containerClass:function(){var e=this._direction,t="k-fx k-fx-start k-fx-"+this._transitionClass;return e&&(t+=" k-fx-"+e),this._reverse&&(t+=" k-fx-reverse"),t},complete:function(t){if(!(!this.deferred||t&&e(t.target).is(".km-touch-scrollbar, .km-actionsheet-wrapper"))){var i=this.container;i.removeClass("k-fx-end").removeClass(this._containerClass()).off(w,this.completeProxy),this._previous.hide().removeClass("k-fx-current"),this.element.removeClass("k-fx-next"),j&&i.css(y,""),this.isAbsolute||this._both().css(k,""),this.deferred.resolve(),delete this.deferred}},run:function(){if(this._additionalEffects&&this._additionalEffects[0])return this.compositeRun();let i,r=this,n=r.element,s=r._previous,o=n.parents().filter(s.parents()).first(),a=r._both(),c=e.Deferred(),l=n.css(k);return o.length||(o=n.parent()),this.container=o,this.deferred=c,this.isAbsolute="absolute"==l,this.isAbsolute||a.css(k,"absolute"),j&&(i=o.css(y),o.css(y,"hidden")),n.addClass("k-fx-hidden"),o.addClass(this._containerClass()),this.completeProxy=this.complete.bind(this),o.on(w,this.completeProxy),t.animationFrame((function(){n.removeClass("k-fx-hidden").addClass("k-fx-next"),s.css("display","").addClass("k-fx-current"),r._before(s,n),t.animationFrame((function(){o.removeClass("k-fx-start").addClass("k-fx-end"),r._after(s,n)}))})),c.promise()},stop:function(){this.complete()}});var Q=t.Class.extend({init:function(){var e=this;e._tickProxy=e._tick.bind(e),e._started=!1},tick:e.noop,done:e.noop,onEnd:e.noop,onCancel:e.noop,start:function(){this.enabled()&&(this.done()?this.onEnd():(this._started=!0,t.animationFrame(this._tickProxy)))},enabled:function(){return!0},cancel:function(){this._started=!1,this.onCancel()},_tick:function(){var e=this;e._started&&(e.tick(),e.done()?(e._started=!1,e.onEnd()):t.animationFrame(e._tickProxy))}}),W=Q.extend({init:function(e){n(this,e),Q.fn.init.call(this)},done:function(){return this.timePassed()>=this.duration},timePassed:function(){return Math.min(this.duration,new Date-this.startDate)},moveTo:function(e){var t=this,i=t.movable;t.initial=i[t.axis],t.delta=e.location-t.initial,t.duration="number"==typeof e.duration?e.duration:300,t.tick=t._easeProxy(e.ease),t.startDate=new Date,t.start()},_easeProxy:function(e){var t=this;return function(){t.movable.moveAxis(t.axis,e(t.timePassed(),t.initial,t.delta,t.duration))}}});n(W,{easeOutExpo:function(e,t,i,r){return e==r?t+i:i*(1-Math.pow(2,-10*e/r))+t},easeOutBack:function(e,t,i,r,n){return i*((e=e/r-1)*e*(((n=1.70158)+1)*e+n)+1)+t}}),i.Animation=Q,i.Transition=W,i.createEffect=F,i.box=function(i){var r=(i=e(i)).offset();return r.width=t._outerWidth(i),r.height=t._outerHeight(i),r},i.transformOrigin=function(e,t){var i=(e.left-t.left)*t.width/(t.width-e.width),r=(e.top-t.top)*t.height/(t.height-e.height);return{x:isNaN(i)?0:i,y:isNaN(r)?0:r}},i.fillScale=function(e,t){return Math.min(e.width/t.width,e.height/t.height)},i.fitScale=function(e,t){return Math.max(e.width/t.width,e.height/t.height)}}(window.kendo.jQuery);var kendo$1=kendo;export{__meta__,kendo$1 as default};
//# sourceMappingURL=kendo.fx.js.map