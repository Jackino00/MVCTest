/**
 * Kendo UI v2024.4.1112 (http://www.telerik.com/kendo-ui)
 * Copyright 2024 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";const __meta__={id:"aiprompt.views",name:"AipromptViews",category:"web",description:"A reusable outputed chunk of code",depends:["core","icons","textarea","button","panelbar"],hidden:!0,chunk:!0};import"./kendo.icons.js";import"./kendo.textarea.js";import"./kendo.button.js";import"./kendo.panelbar.js";!function(t){let e=kendo.ui.Widget,n=kendo.ui.AIPromptBaseView=e.extend({init:function(t,n){let o=this;e.fn.init.call(o,t,n),o.aiprompt=t.getKendoAIPrompt(),o.contentElement=o.options.contentElement,o.footerElement=o.options.footerElement,o.buttonText=o.options.buttonText,o.buttonIcon=o.options.buttonIcon},options:{name:"AIPromptBaseView",buttonText:"",buttonIcon:""},render:function(){this._renderContent(),this._renderFooter()},_renderContentElement:function(){let e=this,n=t("<div></div>").addClass("k-prompt-content");return e.contentElement=n,e.element.append(n),e.contentElement},_renderFooterElement:function(){let e=this,n=t("<div></div>").addClass("k-prompt-footer");return e.footerElement=n,e.element.append(n),e.footerElement},destroy:function(){let t=this;e.fn.destroy.call(t),t.contentElement&&(t.contentElement.off(),kendo.destroy(t.contentElement),t.contentElement.remove()),t.footerElement&&(t.footerElement.off(),kendo.destroy(t.footerElement),t.footerElement.remove())}}),o=({suggestions:t,promptSuggestionItemTemplate:e,messages:n})=>`<div class="k-prompt-view">\n        <textarea ref-prompt-input></textarea>\n        ${t?.length?`<div class="k-prompt-expander">\n                <button ref-prompt-suggestions-button aria-expanded="true">${n.promptSuggestions}</button>\n                <div class="k-prompt-expander-content" role="list">\n                    ${t.map((t=>e({suggestion:t}))).join("")}\n                </div>\n            </div>`:""}\n    </div>`,i=({messages:t})=>`<div class="k-actions k-actions-start k-actions-horizontal k-prompt-actions">\n        <button ref-generate-output-button>${t.generateOutput}</button>\n    </div>`,r=({suggestion:t})=>`<div role="listitem" class="k-prompt-suggestion">${t}</div>`;kendo.ui.AIPromptPromptView=n.extend({init:function(t,e){let o=this;n.fn.init.call(o,t,e),o.promptSuggestions=o.options.promptSuggestions,o.promptSuggestionItemTemplate=kendo.template(o.options.promptSuggestionItemTemplate||r)},options:{name:"AIPromptPromptView",buttonIcon:"sparkles"},_renderContent:function(){let t=this,e=t.promptSuggestions,n=t.promptSuggestionItemTemplate,i=kendo.template(t.options.viewTemplate||o)({suggestions:e,promptSuggestionItemTemplate:n,messages:t.options.messages});t._renderContentElement(),t.contentElement.append(i)},_renderFooter:function(){let t=this,e=kendo.template(t.options.footerTemplate||i)({messages:t.options.messages});t._renderFooterElement(),t.footerElement.append(e)},setTextAreaValue:function(t){this.contentElement.find("textarea[ref-prompt-input]").getKendoTextArea().value(t)},_focusSuggestion(t){t&&t.length&&(this.contentElement.find(".k-prompt-suggestion[tabindex=0]").attr("tabindex","-1"),t.attr("tabindex","0").trigger("focus"))},initializeComponents:function(){let e=this,n=e.promptSuggestions;if(e.contentElement.find("textarea[ref-prompt-input]").kendoTextArea({resize:"vertical",placeholder:e.options.messages.promptPlaceholder}),e.footerElement.find("button[ref-generate-output-button]").kendoButton({icon:"sparkles",themeColor:"primary",rounded:"full",click:function(t){e.aiprompt.trigger("promptRequest",{isRetry:!1,prompt:e.contentElement.find("textarea[ref-prompt-input]").getKendoTextArea().value()})}}),n?.length){e.contentElement.find(".k-prompt-suggestion").first().attr("tabindex","0");let n=kendo.guid(),o=e.contentElement.find(".k-prompt-expander button[ref-prompt-suggestions-button]");e.contentElement.find(".k-prompt-expander button[ref-prompt-suggestions-button]").attr("aria-controls",n),o.next(".k-prompt-expander-content").attr("id",n),e.contentElement.find(".k-prompt-expander button[ref-prompt-suggestions-button]").kendoButton({icon:"chevron-up",fillMode:"flat",click:function(e){let n=t(e.target).closest(".k-prompt-expander").find(".k-prompt-expander-content"),o=e.sender.element.find(".k-icon");kendo.ui.icon(o,n.is(":visible")?"chevron-down":"chevron-up"),n.toggle(),e.sender.element.attr("aria-expanded",n.is(":visible"))}}),e.contentElement.on("click",".k-prompt-suggestion",(function(n){e.setTextAreaValue(t(n.target).text())})),e.contentElement.on("keydown",".k-prompt-suggestion",(function(n){if(40===n.keyCode||38===n.keyCode||36===n.keyCode||35===n.keyCode||13===n.keyCode||32===n.keyCode){n.preventDefault();let o,i,r=t(n.target),p=r.siblings();40===n.keyCode&&(o=r.next(),e._focusSuggestion(o)),38===n.keyCode&&(i=r.prev(),e._focusSuggestion(i)),36===n.keyCode&&(i=p.first(),e._focusSuggestion(i)),35===n.keyCode&&(o=p.last(),e._focusSuggestion(o)),13!==n.keyCode&&32!==n.keyCode||e.setTextAreaValue(t(n.target).text())}}))}},render:function(){let t=this;t._renderContent(),t._renderFooter(),t.initializeComponents()}});let p=({output:t,showOutputRating:e,messages:n})=>`\n    <div role="listitem" tabindex="0" class="k-card" data-id="${t.id}" >\n        <div class="k-card-header">\n            <div class="k-card-title">${n.outputTitle}</div>\n            <div class="k-card-subtitle">${t.prompt}</div>\n        </div>\n        <div class="k-card-body">\n            <p class="k-white-space-pre-line">${t.output}</p>\n        </div>\n        <div class="k-actions k-actions-start k-actions-horizontal k-card-actions">\n            <button ref-copy-button>${n.copyOutput}</button>\n            <button ref-retry-button>${n.retryGeneration}</button>\n\n            <span class="k-spacer"></span>\n            ${e?`\n            <button ref-rate-positive title=${n.ratePositive?n.ratePositive:"Helpful"}>${n.ratePositive}</button>\n            <button ref-rate-negative title=${n.rateNegative?n.rateNegative:"Unhelpful"}>${n.rateNegative}</button>\n            `:""}\n        </div>\n    </div>`,s=({promptOutputs:t,showOutputRating:e,messages:n})=>`<div class="k-prompt-view"><div role="list" class="k-card-list">\n    ${t?t.map((t=>p({output:t,showOutputRating:e,messages:n}))).join(""):""}\n    </div></div>`;kendo.ui.AIPromptOutputView=n.extend({init:function(t,e){let o=this;n.fn.init.call(o,t,e),o.promptOutputs=(o.options.promptOutputs||[]).map((t=>(t.id=t.id||kendo.guid(),t))),o.showOutputRating=o.options.showOutputRating},options:{name:"AIPromptOutputView",buttonIcon:"comment",promptOutputs:[]},addPromptOutput:function(t){t.id=t.id||kendo.guid(),this.promptOutputs.unshift(t),this.renderPromptOutput(t)},renderPromptOutput:function(e){let n=this,o=n.options.showOutputRating,i=n.options.messages,r=t(kendo.template(p)({output:e,showOutputRating:o,messages:i}));n.outputsContainer.append(r),n.initializeComponents(r)},_renderContent:function(){let e=this,n=e.promptOutputs,o=e.options.showOutputRating,i=e.options.messages,r=kendo.template(e.viewTemplate||s)({promptOutputs:n,showOutputRating:o,messages:i});e.outputsContainer=t(r),e._renderContentElement(),e.contentElement.append(e.outputsContainer)},_getOutputFromElement:function(e){let n=t(e).closest(".k-card").data("id");return this.promptOutputs.find((t=>t.id===n))},initializeComponents:function(t){let e=this;(t=t||e.contentElement).find("[ref-copy-button]").kendoButton({icon:"copy",fillMode:"flat",themeColor:"primary",click:function(t){let n=e._getOutputFromElement(t.target);e.aiprompt.trigger("outputCopy",{output:n,prompt:n.prompt})||navigator.clipboard&&"function"==typeof navigator.clipboard.writeText&&navigator.clipboard.writeText(n.output)}}),t.find("[ref-retry-button]").kendoButton({icon:"arrow-rotate-cw",fillMode:"flat",click:function(t){let n=e._getOutputFromElement(t.target);e.aiprompt.trigger("promptRequest",{isRetry:!0,prompt:n.prompt,output:n})}}),e.options.showOutputRating&&(t.find("[ref-rate-positive]").kendoButton({icon:"thumb-up-outline",fillMode:"flat",click:function(t){let n=e._getOutputFromElement(t.target);e.aiprompt.trigger("outputRatingChange",{rateType:"positive",output:n}),kendo.ui.icon(t.sender.element.find(".k-icon"),"thumb-up"),kendo.ui.icon(t.target.next("[ref-rate-negative]").find(".k-icon"),"thumb-down-outline")}}),t.find("[ref-rate-negative]").kendoButton({icon:"thumb-down-outline",fillMode:"flat",click:function(t){let n=e._getOutputFromElement(t.target);e.aiprompt.trigger("outputRatingChange",{rateType:"negative",output:n}),kendo.ui.icon(t.sender.element.find(".k-icon"),"thumb-down"),kendo.ui.icon(t.target.prev("[ref-rate-positive]").find(".k-icon"),"thumb-up-outline")}}))},render:function(){let e=this;e._renderContent(),e.initializeComponents(),e.contentElement.on("keydown",".k-card",(function(n){let o=t(n.target);40!==n.keyCode&&38!==n.keyCode&&36!==n.keyCode&&35!==n.keyCode||(n.preventDefault(),40===n.keyCode&&o.next(".k-card").trigger("focus"),38===n.keyCode&&o.prev(".k-card").trigger("focus"),36===n.keyCode&&e.contentElement.find(".k-card").first().trigger("focus"),35===n.keyCode&&e.contentElement.find(".k-card").last().trigger("focus"))}))}}),kendo.ui.AIPromptCommandsView=n.extend({options:{name:"AIPromptCommandsView",buttonText:"",buttonIcon:"more-horizontal",promptCommands:[]},initializeComponents:function(){let e=this,n=e.options.promptCommands,o=t("<div></div>").kendoPanelBar({animation:!1,dataSource:n,selectable:!1,select:function(n){let o=t(n.item),i=this.dataItem(o);i.hasChildren||e.aiprompt.trigger("commandExecute",{sender:e.aiprompt,item:i})}});const i=t("<div class='k-prompt-view'>");i.append(o),e.contentElement.append(i)},render:function(){this._renderContentElement(),this.initializeComponents()}});let a=()=>"";kendo.ui.AIPromptCustomView=n.extend({options:{name:"AIPromptCustomView",buttonText:"",buttonIcon:"",viewTemplate:a,footerTemplate:a},initializeComponents:function(){let t=this;"function"==typeof t.options.initializeComponents&&t.options.initializeComponents.call(t)},_renderContent:function(){let t=this,e=kendo.template(t.options.viewTemplate)({aiprompt:t});t._renderContentElement(),t.contentElement.append(e)},_renderFooter:function(){let t=this;if(t.options.footerTemplate===a)return;let e=kendo.template(t.options.footerTemplate)({messages:t.options.messages});t._renderFooterElement(),t.footerElement.append(e)},render:function(){let t=this;t._renderContent(),t._renderFooter(),t.initializeComponents()}})}(window.kendo.jQuery);var kendo$1=kendo;export{kendo$1 as default};export{__meta__};
//# sourceMappingURL=kendo.aiprompt.views.js.map