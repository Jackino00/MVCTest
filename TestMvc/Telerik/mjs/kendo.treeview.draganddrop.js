/**
 * Kendo UI v2024.4.1112 (http://www.telerik.com/kendo-ui)
 * Copyright 2024 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.data.js";import"./kendo.draganddrop.js";const __meta__={id:"treeview.draganddrop",name:"Hierarchical Drag & Drop",category:"framework",depends:["core","draganddrop"],advanced:!0};!function(t){var e=window.kendo,i=e.ui,o=t.extend,s="visibility",n="k-drag-status",r=`<span class="${n}"></span>`,a="k-hover";i.HierarchicalDragAndDrop=e.Class.extend({init:function(s,n){this.element=s,this.hovered=s,this.options=o({dragstart:t.noop,drag:t.noop,drop:t.noop,dragend:t.noop},n),this._draggable=new i.Draggable(s,{ignore:"input,a:not(.k-treeview-leaf),textarea,.k-multiselect-wrap,select,button,a.k-button>.k-icon,.k-button>.k-button-text,button.k-button>.k-icon,span.k-toggle-icon,a.k-button>.k-svg-icon,button.k-button>.k-svg-icon,.k-button>.k-svg-icon>svg,.k-button>.k-svg-icon>svg>path",filter:n.filter,autoScroll:n.autoScroll,cursorOffset:{left:10,top:e.support.mobileOS?-40/e.support.zoomLevel():10},hint:this._hint.bind(this),dragstart:this.dragstart.bind(this),dragcancel:this.dragcancel.bind(this),hintDestroyed:this.dragcancel.bind(this),drag:this.drag.bind(this),dragend:this.dragend.bind(this),holdToDrag:n.holdToDrag,clickMoveClick:n.clickMoveClick})},_hint:function(t){return"<div class='k-drag-clue'>"+r+this.options.hintText(t)+"</div>"},_removeTouchHover:function(){e.support.touch&&this.hovered&&(this.hovered.find("."+a).removeClass(a),this.hovered=!1)},_hintStatus:function(t){var e=this._draggable.hint.find(`.${n}`);t?(this.status=t,i.icon(e,{icon:t})):(this.status="",e.replaceWith(r))},dragstart:function(e){this.dropHint&&this.dropHint.remove(),this.source=e.currentTarget.closest(this.options.itemSelector),this.options.dragstart(this.source)&&e.preventDefault(),this.options.reorderable?this.dropHint=t("<div class='k-drop-hint k-drop-hint-h'><div class='k-drop-hint-start'></div><div class='k-drop-hint-line'></div></div>").css(s,"hidden").appendTo(this.element):this.dropHint=t()},drag:function(i){var o,n,r,d,l,h,c,g,p,v,u,k=this.options,m=this.source,_=this.dropTarget=t(e.eventTarget(i)),b=_.closest(k.allowedContainers);b.length?m[0]==_[0]||k.contains(m[0],_[0])||i.clickMoveClick&&i.currentTarget.hasClass("k-drag-cell")&&0===_.closest(".k-drag-cell").length||i.clickMoveClick&&i.currentTarget.hasClass("k-treeview-leaf")&&0===_.closest(".k-treeview-leaf").length?u="cancel":(u="insert-middle",(o=(p=k.itemFromTarget(_)).item).length?(this._removeTouchHover(),n=e._outerHeight(o),d=p.content,k.reorderable?(l=n/(d.length>0?4:2),r=e.getOffset(o).top,h=i.y.location<r+l,c=r+n-l<i.y.location,g=d.length&&!h&&!c):(g=!0,h=!1,c=!1),this.hovered=!!g&&b,this.dropHint.css(s,g?"hidden":"visible"),this._lastHover&&this._lastHover[0]!=d[0]&&this._lastHover.removeClass(a),this._lastHover=d.toggleClass(a,g),g?u="plus":((v=o.position()).top+=h?0:n,this.dropHint.css(v)[h?"prependTo":"appendTo"](k.dropHintContainer(o)),h&&p.first&&(u="insert-top"),c&&p.last&&(u="insert-bottom"))):_[0]!=this.dropHint[0]&&(this._lastHover&&this._lastHover.removeClass(a),u=t.contains(this.element[0],b[0])?"cancel":"plus")):(u="cancel",this._removeTouchHover()),this.options.drag({originalEvent:i.originalEvent,source:m,target:_,pageY:i.y.location,pageX:i.x.location,status:u,setStatus:function(t){u=t}}),0!==u.indexOf("insert")&&this.dropHint.css(s,"hidden"),this._hintStatus(u)},dragcancel:function(){this.dropHint&&this.dropHint.remove()},dragend:function(i){var o,n,r,d,l="over",h=this.source,c=this.dropHint,g=this.dropTarget||t(e.eventTarget(i));c&&"visible"==c.css(s)?(l=this.options.dropPositionFrom(c),o=c.closest(this.options.itemSelector),d=!0):g&&((o=g.closest(this.options.itemSelector)).length||(o=g.closest(this.options.allowedContainers))),!d||o.length?(n={originalEvent:i.originalEvent,source:h[0],destination:o[0],valid:"cancel"!=this.status,setValid:function(t){this.valid=t},dropTarget:g[0],position:l},r=this.options.drop(n),c.remove(),this._removeTouchHover(),this._lastHover&&this._lastHover.removeClass(a),n.valid&&!r?(this._draggable.dropped=!0,this.options.dragend({originalEvent:i.originalEvent,source:h,destination:o,position:l})):this._draggable.dropped=n.valid):this.dragcancel()},destroy:function(){this._lastHover=this.hovered=null,this._draggable.destroy()}})}(window.kendo.jQuery);var kendo$1=kendo;export{__meta__,kendo$1 as default};
//# sourceMappingURL=kendo.treeview.draganddrop.js.map