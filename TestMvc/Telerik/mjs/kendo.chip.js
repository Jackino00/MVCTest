/**
 * Kendo UI v2024.4.1112 (http://www.telerik.com/kendo-ui)
 * Copyright 2024 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.html.chip.js";const __meta__={id:"chip",name:"Chip",category:"web",docsCategory:"navigation",description:"Displays a Chip that represents an input, attribute or an action",depends:["core","html.chip"]};!function(e,t){var n=window.kendo,i=n.ui.Widget,r=n.html,a=n.ui,o=n.keys,s="select",l="click",p="remove",c=".kendoChip",d="k-chip-remove-action",b="k-selected",u="k-disabled",_=i.extend({init:function(a,o){var s=this;i.fn.init.call(s,a,o),r.renderChip(a,e.extend({},s.options)),o=s.options,s.wrapper=s.element.closest(".k-chip"),s._enabled=s.options.enabled=o.enabled!==t?o.enabled:!Boolean(s.element.is("[disabled]")),s._selected=s.options.selected,s._selectable=s.options.selectable,s._setTabIndex(),s._applyAriaAttributes(),s._bindEvents(),n.notify(s)},options:{name:"Chip",enabled:!0,selectable:!1,selected:!1,removable:!1,icon:"",iconClass:"",avatarClass:"",label:"",removeIcon:"x-circle",removeIconClass:"",fillMode:"solid",rounded:"medium",size:"medium",themeColor:"base"},events:[s,l,p],destroy:function(){this.wrapper.off(c),i.fn.destroy.call(this)},setOptions:function(e){var t=this;t.wrapper.off(c),t.element.insertBefore(t.wrapper),t.wrapper.remove(),i.fn.setOptions.call(t,e),t.element.empty(),r.renderChip(t.element,t.options),t.wrapper=t.element.closest(".k-chip"),t._setTabIndex(),t._applyAriaAttributes(),t._bindEvents()},enable:function(e){var n=this;if(e===t)return n._enabled;n._enabled=!1!==e,n.wrapper.toggleClass(u,!n._enabled),n.wrapper.attr("aria-disabled",!n._enabled)},select:function(e){var n=this;if(e==t)return n._selected;e=!1!==e,n._selectable&&(n._selected=e,n.wrapper.toggleClass(b,e)),n._applyAriaAttributes()},focus:function(){this._enabled&&this.wrapper.trigger("focus")},_bindEvents:function(){var e=this,t=e._click.bind(e),n=e._remove.bind(e),i=e._keydown.bind(e);e.wrapper.on(l+" touchend"+c,t).on(l+" touchend"+c,"."+d,n).on("keydown"+c,i)},_click:function(e){var t=this;t.enable()?t.trigger(l,{originalEvent:e})||t._triggerSelect(t,e):e.preventDefault()},_remove:function(e){e.preventDefault(),e.stopPropagation();this.enable()?this.trigger(p,{originalEvent:e}):e.preventDefault()},_triggerSelect:function(e,t){var n=this;n._selectable&&n._enabled&&!n.trigger(s,{originalEvent:t})&&n._toggleSelect()},_toggleSelect:function(){this.select(!this.select())},_keydown:function(t){var n=this,i=e(t.target),r=t.keyCode;if(r===o.ENTER||r===o.SPACEBAR){if(!n.enable())return void t.preventDefault();if(n.trigger(l,{originalEvent:t}))return;n._triggerSelect(i,t),r===o.SPACEBAR&&t.preventDefault()}else r!==o.DELETE&&r!==o.BACKSPACE||n.options.removable&&n.trigger(p,{originalEvent:t})},_setTabIndex:function(){var t=this,n=t.enable()?t.options.tabindex||"0":"-1";t.options.attributes&&t.options.attributes.class&&(t.options.attributes.class=`${t.wrapper.attr("class")||""} ${t.options.attributes.class}`),t.wrapper.attr(e.extend({},t.options.attributes,{tabindex:n,ariaSelectedAttributeName:null}))},_applyAriaAttributes:function(){var e=this,t=(e.options.attributes||{}).role||"button";e.wrapper.attr("role",t),e._selectable&&"button"==t&&e.wrapper.attr("aria-pressed",e._selected),e.wrapper.attr("aria-disabled",!1===e.enable())}});a.plugin(_)}(window.kendo.jQuery);var kendo$1=kendo;export{__meta__,kendo$1 as default};
//# sourceMappingURL=kendo.chip.js.map