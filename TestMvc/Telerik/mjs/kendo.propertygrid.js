/**
 * Kendo UI v2024.4.1112 (http://www.telerik.com/kendo-ui)
 * Copyright 2024 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.menu.js";import"./kendo.excel.js";import"./kendo.progressbar.js";import"./kendo.treelist.js";import"./kendo.dialog.js";import"./kendo.ooxml.js";import{E as ExcelExporter}from"./kendo.ooxml.cmn.chunk.js";!function(e){const t=window.kendo,o=t.ui.treelist.ContextMenu,i=e.extend;let n=o.extend({init:function(e,t){o.fn.init.call(this,e,t)},defaultItems:{separator:{name:"separator",separator:!0},copy:{name:"copy",text:"Copy",icon:"copy",command:"CopyCommand",softRules:"windowHasSelection",options:"copy:selection"},copyName:{name:"copyName",text:"Copy Name",icon:"file-txt",command:"CopyCommand",options:"copy:name"},copyDeclaration:{name:"copyDeclatarion",text:"Copy Declaration",icon:"file-data",command:"CopyCommand",options:"copy:declaration"},resize:{name:"resize",text:"Resize Column",icon:"arrows-left-right",rules:"isResizable",command:"ResizeColumnCommand",softRules:"isNotGroupColumn"},reset:{name:"reset",text:"Reset",icon:"arrow-rotate-ccw",command:"ResetCommand",rules:"isEditable",softRules:"isDirty;isNotInEditMode"},expandItem:{name:"expandItem",text:"Expand Item",icon:"folder-open",softRules:"isExpandable",command:"ToggleItemCommand",options:"expand:true"},collapseItem:{name:"collapseItem",text:"Collapse Item",icon:"folder",softRules:"isCollapsible",command:"ToggleItemCommand",options:"expand:false"}}});t.ui.propertygrid=t.ui.propertygrid||{},i(t.ui.propertygrid,{ContextMenu:n})}(window.kendo.jQuery),function(e){let t=window.kendo,o=e.extend,i=t.Class,n=t.keys,r=i.extend({init:function(e){this.options=e,this.propertyGrid=e.propertyGrid}}),a=r.extend({exec:function(){const e=this,t=e.options,o=e.propertyGrid,i=e.options.target.closest("tr"),n=o.dataItem(i);if("selection"==t.copy){let e=window.getSelection().getRangeAt(0).toString();navigator.clipboard.writeText(e)}else if("name"==t.copy)navigator.clipboard.writeText(n.field);else if("declaration"==t.copy){let t=e.propertyGrid._objectFromNodes(n),o=[n.field,JSON.stringify(t[n.field]),n.description].filter((e=>undefined!==e)).join("\t");navigator.clipboard.writeText(o)}}}),l=r.extend({exec:function(){let e=this,t=e.propertyGrid,o=e.options.target.closest("tr"),i=t.dataItem(o);t.dataSource.cancelChanges(i),t.trigger("cancel",{type:"cancel",model:i,container:e.options.target}),t._render()}}),s=r.extend({_actionButtonsTemplate:function({apply:e,cancel:o,insertButtonIcon:i,cancelButtonIcon:n}){return'<div class="k-actions k-actions-start k-actions-horizontal k-window-buttons">'+t.html.renderButton(`<button class="k-dialog-apply">${e}</button>`,{themeColor:"primary",icon:i})+t.html.renderButton(`<button class="k-dialog-close">${o}</button>`,{icon:n})+"</div>"},exec:function(){let t,o,i=this,r=i.propertyGrid,a=i.options.target.index(),l=r.grouped?a-1:a,s=`tr:not(.k-table-group-row):first > td:nth-child(${a+1})`,d=r.table.find(s).outerWidth(),c={title:"Resize Column",visible:!1,resizable:!0,minWidth:350},p=r.table.width();function u(e){let o,i=t.wrapper.find(".k-form").data("kendoForm").options.formData.columnsize,n=t.wrapper.find("#columnsize").data("kendoNumericTextBox").value();i!=n?(i>n?(o=i-n,r.table.width(p-o)):(o=n-i,r.table.width(p+o)),r.columns[l].width=n,r.table.children("colgroup").find("col").eq(a).width(n),r.trigger("columnResize",{column:r.columns[l],oldWidth:i,newWidth:n}),m(e)):m(e)}function m(e){e.preventDefault(),o.destroy(),t.destroy()}!function(t){const o=e=>`tr:not(.k-table-group-row):first > td:nth-child(${e+1})`,i=t.table.children("colgroup").find("col").length;let n=[];for(let e=0;e<i;e++)n.push(t.table.find(o(e)).outerWidth());t.table.children("colgroup").find("col").each(((t,o)=>{e(o).width(n[t])}))}(i.propertyGrid),r.table.width(p),c.close=m,t=e("<div/>").appendTo(document.body).kendoWindow(c).data("kendoWindow"),o=i._createForm(t,d),t.element.after(e(i._actionButtonsTemplate({apply:"Apply",cancel:"Cancel",insertButtonIcon:"check",cancelButtonIcon:"cancel-outline"}))),t.wrapper.find(".k-dialog-apply").on("click",u).end().find(".k-dialog-close").on("click",m).end().find(".k-form-field input").on("keydown",(function(e){e.keyCode==n.ENTER?u(e):e.keyCode==n.ESC&&m(e)})).end(),t.center().open()},_createForm:function(t,o){return e("<div/>").appendTo(t.element).kendoForm({formData:{columnsize:o},validation:{validateOnBlur:!1,validaitonSummary:!1},renderButtons:!1,items:[{field:"columnsize",label:"Set column Size",editor:"NumericTextBox",editorOptions:{min:0}}]}).data("kendoForm")}}),d=r.extend({exec:function(){let e=this,t=e.propertyGrid,o=e.options.target;"true"===e.options.expand?t.expand(o):t.collapse(o)}}),c=r.extend({exec:function(){let e=this.propertyGrid,t=e.grouped;e.grouped=!t,e.grouped||e.wrapper.find("tr:not(.k-details-box)").removeClass("k-hidden"),e._refreshLayout(),e._updateDetails()}}),p=r.extend({exec:function(){let e=this.propertyGrid,t=e.visibleDetails;e.visibleDetails=!t,e.visible||e.table.find("tr.k-details-box").toggleClass("k-hidden")}}),u=r.extend({exec:function(){this.propertyGrid.saveAsExcel()}}),m=r.extend({exec:function(){this.propertyGrid.saveAsPDF()}});t.ui.propertygrid=t.ui.propertygrid||{},o(t.ui.propertygrid,{PropertyGridCommand:r,commands:{ResetCommand:l,CopyCommand:a,ResizeColumnCommand:s,ToggleItemCommand:d,ToggleGroupLayout:c,ToggleDetails:p,ExcelExport:u,PDFExport:m}})}(window.kendo.jQuery);const __meta__={id:"propertygrid",name:"PropertyGrid",category:"web",description:"The PropertyGrid widget displays objects as hierarchical structure and provides means to edit the properties and attributes of objects.",depends:["excel","menu","treelist","ooxml.cmn.chunk"]};!function(e){const t=window.kendo,o=t.ui,i=".kendoPropertyGrid",n=e.extend,r=t.dom,a=r.element,l=r.html,s=r.text,d=e.extend({F10:121},t.keys),c=o.Editable,p=o.TreeList,u=Array.isArray,m=e.isPlainObject,h="change",f="expand",g="collapse",b="groupExpand",x="groupCollapse",y="a[class*='-i-caret-alt-down']",_="k-grouping-row",w="tr",v="td",C=["copy","copyName","copyDeclaration","separator","reset","separator","resize","separator","expandItem","collapseItem","separator"],k={group:{name:"group",type:"button",text:"Group Items",togglable:!0,showText:"overflow",icon:"categorize",commandName:"ToggleGroupLayout",attributes:{title:"Group Items"},overflow:"never"},details:{name:"details",type:"button",text:"Toggle Info box",togglable:!0,icon:"info-circle",commandName:"ToggleDetails",showText:"overflow",attributes:{title:"Toggle Info box"},overflow:"never"},sort:{name:"sort",component:"DropDownList",componentOptions:{commandOn:h,dataTextField:"text",dataValueField:"value",dataSource:[{text:"Default Sort",value:"none"},{text:"Sort A-Z",value:"asc"},{text:"Sort Z-A",value:"desc"}]},attributes:{class:"k-property-grid-sort",title:"Sort"},overflow:"never"},search:{name:"search",component:"TextBox",componentOptions:{prefixOptions:{icon:"search"},placeholder:"Search..."},attributes:{class:"k-grid-search"},overflow:"never"},separator:{name:"separator",type:"separator"},spacer:{name:"spacer",type:"spacer"},excel:{name:"excel",type:"button",text:"Export to Excel",showText:!1,icon:"file-excel",commandName:"ExcelExport",overflow:"auto"},pdf:{name:"excel",type:"button",text:"Export to PDF",showText:!1,icon:"file-pdf",commandName:"PDFExport",overflow:"auto"}};function T(e){return null==e}function D(e){return"object"!=t.type(e)&&"function"!=t.type(e)}let E=t.data.TreeListDataSource.extend({groupedItemsTree:function(e){let o=this._childrenMap(this.view())[this._defaultParentId()]||[];return new t.data.Query(o).group({field:e}).toArray()},filterGroupedItemsTree:function(e,o){let i=this,n=this.sort()||{},r=e||{filters:[],logic:"or"},a=this._childrenMap(this.data())[this._defaultParentId()]||[],l=new t.data.Query(a).sort(n).group({field:o}).toArray(),s=function(e,o){let r=[];for(let t=0;t<o.length;t++)o[t].hasChildren&&s(e,i.childNodes(o[t])).length>0&&r.push(o[t]);return 0!=r.length?r:new t.data.Query(o).sort(n).filter(e).toArray()},d=[];return l.forEach((function(e){e.items&&(e.items=s(r,e.items)),d.push(e)})),d}});const I=t.ui.treelist.editor.extend({createEditable:function(){let e=this.options;this.fields[0].editor=e.model.editor,this.fields[0].editorOptions={...e.model.editorOptions},this.editable=new c(this.wrapper,{fields:this.fields,target:e.target,clearContainer:e.clearContainer,model:this.model,change:e.change})},destroy:function(){let e=this;e.editable.destroy(),e.editable.element.off().empty().removeAttr(t.attr("role")),e.model=e.wrapper=e.element=e.columns=e.editable=null}}),R=p.extend({init:function(e,o){const i=this;i._processOptions(o),i.options=n(!0,{},i.options,o),i._processedModel=i._processModel(),i._createDataSource(),p.fn.init.call(i,e,i.options),i._wrapper(),i._detailsBox(),i._groupable(),t.notify(i)},options:{name:"PropertyGrid",model:{},items:[],columns:[{field:"field"},{field:"value",editable:function(e){return D(e.value)}}],hasHeader:!1,groupable:!0,resizable:!0,contextMenu:!1,sortable:!0,selectable:!0,scrollable:!0,showDetails:!0,editable:"incell",size:"medium",defaultTools:[k.search,k.sort,k.group,k.details],messages:{defaultGroupName:"Other"}},events:["beforeEdit","edit",h,f,g,"columnResize",b,x,"cellClose","save","cancel","pdfExport"],defaultEditors:{string:"TextBox",date:"DatePicker",number:"NumericTextBox",boolean:"CheckBox"},_groupContentTemplate:({groupName:o,action:i,icon:n})=>`<p class="k-reset">${t.ui.icon(e('<a href="#" tabindex="-1" aria-label='+i+"></a>"),n)}${o}</p>`,_detailsTemplate:({description:e})=>`<span>${e||"&nbsp;"}</span>`,_setEditable:function(e){this.options.editable=e},_processOptions:function(e){const o=this;"boolean"!==t.type(e.editMode)||e.editMode?o._setEditable("incell"):o._setEditable(!1),T(e.toolbar)&&(e.toolbar=o.options.defaultTools),o._extendColumnOptions(e)},_extendColumnOptions:function(e){const t=this;e.columns&&(t.options.columns[0]=n(!0,e.columns.fieldColumn,t.options.columns[0]),t.options.columns[1]=n(!0,e.columns.valueColumn,t.options.columns[1]),delete e.columns)},_processSettings:function(e,t){const o=this;t.forEach((t=>{e[t.field]&&(n(e[t.field],t),e[t.field].items&&o._processSettings(e[t.field].value,e[t.field].items))}))},_processModel:function(){const e=this,t=e.options.model,o=e.options;let i=e._flatten(t);return e._setDefaults(i),e._processSettings(i,o.items),n=i,Object.entries(n).map((e=>e[1]));var n},_createDataSource:function(){const e=new E({data:this._processedModel,serverGrouping:!1,schema:{model:{id:"id",parentId:"parentId",expanded:!0,fields:{field:{editable:!1},value:{editable:!0}}}}});this.options.dataSource=e},_flatten:function(e){let o=1;function i(e,t,o,i,n){T(n)?o.forEach((o=>{e[`${t}.${o}`]=i[o]})):o.forEach((o=>{e[`${t}.${n}.${o}`]=i[o],e[`${t}.${n}.${o}`].parentId=e[`${t}.${n}`].id}))}function n(e,r){const a={};return Object.keys(e||{}).forEach((l=>{if(T(e[l]))a[l]={id:o++,parentId:r,propType:typeof e[l],field:l,value:e[l]};else if("object"==typeof(s=e[l])&&u(s))!function(e,t,r,a){const l=t[r];e[r]={id:o++,parentId:a,propType:"Array",field:r,value:l};for(let a=0;a<l.length;a++){const s="object"==typeof l[a]?n(l[a],e[r].id):l[a];e[`${r}.${a}`]={id:o++,parentId:e[r].id,propType:typeof t[r],field:`${r}[${a}]`,value:s},"object"==typeof l[a]&&i(e,r,Object.keys(s),s,a)}}(a,e,l,r);else if(function(e){return"object"==typeof e&&!t.isDate(e)}(e[l])){let t=o++;const s=n(e[l],t),d=Object.keys(s);a[l]={id:t,parentId:r,propType:typeof e[l],field:l,value:s},i(a,l,d,s)}else{let i=t.parseDate(e[l].toString());a[l]={id:o++,parentId:r,propType:null!=i?typeof i:typeof e[l],field:l,value:null!=i?i:e[l]}}var s})),a}return n(e,null)},_setDefaults:function(e){const t=this;Object.keys(e).forEach((o=>{t.options.groupable&&!e[o].group&&(e[o].group=t.options.messages.defaultGroupName),t._setDefaultEditor(e[o])}))},_setDefaultEditor:function(e){const o=this;switch(t.type(e.value)){case"date":e.editor=o.defaultEditors.date;break;case"boolean":e.editor=o.defaultEditors.boolean;break;case"number":e.editor=o.defaultEditors.number;break;default:e.editor=o.defaultEditors.string}},_createIncellEditor:function(e,t){const o=this;let i=n({},t.columns[0]);return t.model.fields.value.validation=t.model.validation?t.model.validation.toJSON():{},delete i.parentColumn,new I(e,n({},{fieldRenderer:o._cellContent.bind(o),appendTo:o.wrapper,clearContainer:!1,target:o,columns:[i],model:t.model,change:t.change}))},_createDirtyTemplate:function(e){let o=this._customTemplateSettings();return t.template((function(o){return'<span class="k-dirty"></span>'+t.template(e.template)(e)}),o).bind({columnTemplate:e.template})},_cellContent:function(e,o){const i=this,n=i._isIncellEditable(),r="value"==e.field;let a,d,c;return r&&o.template?(c=o.dirty?i._createDirtyTemplate(o):t.template(o.template),a=c(o)):e.field?(a=o.get(e.field),d=n?e.dirtyIndicatorTemplate(o):"",T(a)?a=d:(o.format&&(a=t.format(o.format,a)),a=d+a)):T(a)&&(a=""),o.template?l(a):n?D(o.value)&&r?i._editableCellContent(a):l(a):s(a)},_editableCellContent:function(e){let t=a("b"),o=l(e);return t.children.push(o),t},_generateGroupRow:function(e){let o=t.template(this._groupContentTemplate)({groupName:e.value,action:e.visible?g:f,icon:e.visible?"caret-alt-down":"caret-alt-right"}),i=a(v,{className:"k-table-td",class:"k-table-td",colSpan:"3",role:"gridcell","aria-expanded":e.visible,visible:!0},[t.dom.html(o)]);return a(w,{className:"k-table-group-row k-grouping-row k-table-row",role:"row","data-uid":e.uid},[i])},_generateDetailsBox:function(){let e=a(v,{className:"k-table-td",class:"k-table-td",colSpan:this.grouped?3:2,role:"gridcell",visible:!0},[t.dom.html("<span>&nbsp;</span>")]);return a(w,{className:"k-details-box k-bottom k-sticky k-footer-template k-table-row "+(this.visibleDetails?"":"k-hidden"),role:"row"},[e])},_renderRows:function(e,t,o,i,n,r,a){const l=this;let s=i.length?i:l._selectedRowUid,d=[];l.grouped?(0===l.table.find(">colgroup>col.k-group-col").length&&l.table.find(">colgroup").prepend('<col class="k-group-col">'),l._groupedData.forEach((t=>{let i=l._generateGroupRow(t);d.push(i),d=d.concat(l._trs({columns:o,editedColumn:e.editedColumn,editedColumnIndex:e.editedColumnIndex,aggregates:e.aggregates,selected:s,data:t.items,childrenMap:n,viewChildrenMap:r,hasFooterTemplate:a,visible:t.visible,level:0}))}))):(l.table.find(">colgroup>col.k-group-col").remove(),d=d.concat(this._trs({columns:o,editedColumn:e.editedColumn,editedColumnIndex:e.editedColumnIndex,aggregates:e.aggregates,selected:s,data:t,childrenMap:n,viewChildrenMap:r,hasFooterTemplate:a,visible:!0,level:0}))),l.options.showDetails&&d.push(l._generateDetailsBox()),l._contentTree.render(d)},_generateRowOptions:function(e,t,o,i,n,r){const a=this;return{model:e,attr:t,level:o?a._renderedModelLevel(e,i):n,editedColumn:i.editedColumn,editedColumnIndex:i.editedColumnIndex,hasChildren:r,visible:i.visible,isAlt:this._absoluteIndex%2==0,grouped:a.options.groupable&&a.grouped}},_renderRow:function(e,t,o){let i=this._tds(e,t,o);if(e.grouped){let e=a(v,{class:"k-table-td k-group-cell",className:"k-table-td k-group-cell"});i.children.splice(0,0,e)}return i},editCell:function(t){const o=this;let i;t=e(t),i=o.grouped?o.cellIndex(t)-1:o.cellIndex(t);let n=o.columns[i],r=o.dataItem(t);o._isIncellEditable()&&r&&function(e,t){return!(!(e&&t&&e.field)||e.selectable||e.command||e.draggable||e.editable&&!e.editable(t))&&e.field&&t.editable&&t.editable(e.field)}(n,r)&&o._editCell(t,n,r,i)},_wrapper:function(){this.element.css("width",this.options.width),this.wrapper.addClass("k-property-grid")},_toolbar:function(){const e=this,o=e.options;let i=o.toolbar,n=this.toolbar;if(i)if(Array.isArray(i)){let t=e._processToolbarItems(i);t=e._verifyItems(t),n.kendoToolBar({size:"medium",resizable:!0,navigateOnTab:!o.navigatable,items:t}),n.find(".k-grid-search .k-input-inner").attr({placeholder:o.messages.commands.search,title:o.messages.commands.search}),e._attachToolbarHandlers()}else n.append(t.template(i)({}))},_attachToolbarHandlers:function(){const e=this;let t=e.toolbar.getKendoToolBar(),o=t.element.find('[data-command="sort"] input');t.bind("toggle",e._toolbarClick.bind(e)),t.bind("click",e._toolbarClick.bind(e)),o.length>0&&o.getKendoDropDownList().bind("change",e._sortItems.bind(e))},_verifyItems:function(e){const t=this;return t.options.groupable&&t.options.items.some((e=>e.hasOwnProperty("group")))||(e=e.filter((e=>"group"!=e.name))),t.options.showDetails&&t.options.selectable||!(e.findIndex((e=>"details"==e.name))>0)||(e=e.filter((e=>"details"!=e.name))),e},_getCommandType:function(e){return e.type?e.type:e.template?null:"button"},_processToolbarItems:function(e){const t=this,o=t.options.messages.commands;let i=[];return e.map((e=>{let r=(m(e)?e.name||"":e).toLowerCase(),a=o[r];if(!(r||m(e)&&e.template))throw new Error("Commands should have name specified");(e=n({},k[r],{name:r,text:a||(k[r]||{}).text,type:t._getCommandType(k[r]||{})},e)).imageClass&&(e.spriteCssClass=e.imageClass,e.iconClass=e.imageClass),e.attributes||(e.attributes={}),e.attributes["data-command"]=e.commandName||r,(e.menuButtons||e.buttons)&&delete e.name,e.click=e=>{let o=e.event||e.originalEvent;o&&(o.preventDefault(),o.stopPropagation()),t._commandClick({currentTarget:e.target})},e.className&&(e.attributes||(e.attributes={}),e.attributes.class=e.className),e.attributes.title=a||e.attributes.title,i.push(e)})),i},_toolbarClick:function(t){let i=e(t.target).data("command"),r=e(t.target).data("options");e(t.target).val()&&(r=n({},r,{value:e(t.target).val()})),i&&o.propertygrid.commands[i]&&this._action({command:i,options:r})},_sortItems:function(e){const t=this,o=t.dataSource,i=e.sender.value();let n="none"===i?{}:{field:"field",dir:i};o.sort(n),t._groupedData=o.filterGroupedItemsTree(o.filter(),"group").map((e=>({...e,visible:t._groupedData.filter((t=>t.value==e.value))[0].visible,uid:t._groupedData.filter((t=>t.value==e.value))[0].uid}))),t.grouped&&t.refresh()},_initContextMenu:function(){const e=this,t=e.options;if(!t.contextMenu)return;let i=m(t.contextMenu)&&u(t.contextMenu.body)?{items:t.contextMenu.body}:{items:C},r=m(t.contextMenu)?t.contextMenu:{};i=n({},{messages:t.messages,target:e.tbody,filter:".k-table-row:not(.k-grouping-row,.k-details-box) > .k-table-td",action:e._action.bind(e),states:e._buildStates()},r,i),e.tbodyContextMenu=new o.propertygrid.ContextMenu("<ul></ul>",i)},_buildStates:function(){return{isResizable:this.options.resizable,isEditable:this.options.editable,windowHasSelection:()=>void 0!==window.getSelection&&0!=window.getSelection().rangeCount&&""!=window.getSelection().getRangeAt(0).toString(),isDirty:e=>this.dataItem(e).dirty,isNotInEditMode:e=>!e.closest("td").hasClass("k-edit-cell"),isNotGroupColumn:e=>!e.closest("td").hasClass("k-group-cell"),isExpandable:e=>{let t=this.dataItem(e);return t&&t.hasChildren&&!t.expanded},isCollapsible:e=>{let t=this.dataItem(e);return t&&t.hasChildren&&t.expanded}}},_action:function(e){let t=e.command,i=n({propertyGrid:this},e.options);return new o.propertygrid.commands[t](i).exec()},_objectFromNodes:function(e){const t=this,o=Object.create(null),i=t.dataSource;return(e=u(e)?e:[e]).forEach((e=>{"Array"==e.propType?(o[e.field]=[],i.childNodes(e).forEach((n=>{o[e.field].push(n.hasChildren?t._objectFromNodes(i.childNodes(n)):n.value)}))):o[e.field]=e.hasChildren?t._objectFromNodes(i.childNodes(e)):e.value})),o},_groupable:function(){const o=this;o._groupedData=o.dataSource.groupedItemsTree("group").map((e=>({...e,visible:!0,uid:t.guid()}))),o._groupableClickHandler=function(t){let i=e(this),n=i.closest(w),r=o._groupedData.filter((e=>e.value===n.text()))[0];r.visible=!r.visible,i.is(y)?o.trigger(x,{group:r.items,element:n})||o.refresh():o.trigger(b,{group:r.items,element:n})||o.refresh(),t.preventDefault(),t.stopPropagation()},o.table.on("click"+i,".k-grouping-row a[class*='-i-caret-alt-right'], .k-grouping-row "+y,o._groupableClickHandler).on("keydown"+i,o._groupRowKeyDown.bind(o))},_groupRowKeyDown:function(e){const o=this,i=o.current();let n=!1;o.options.navigatable&&(e.keyCode==d.ENTER&&(t.focusElement(o.table),o._setCurrent(o._findCurrentCell()),n=!0),e.keyCode!=d.LEFT&&e.keyCode!=d.RIGHT||!e.altKey||(n=this._handleGroupRowExpandCollapse(i,e.keyCode)),n&&(e.preventDefault(),e.stopPropagation()))},_handleGroupRowExpandCollapse:function(e,t){const o=this,i=e.parent();if(i.is("."+_)){let e=o._groupedData.filter((e=>e.value===i.text()))[0].visible;if(e&&t==d.LEFT||!e&&t==d.RIGHT)return o._toggleGroup(i),!0}},_toggleGroup:function(e){let t=this._groupedData.filter((t=>t.value===e.text()))[0];t.visible=!t.visible,this.refresh()},_getGroupedData:function(e){let t=this;return t.dataSource.filterGroupedItemsTree(e,"group").map((e=>({...e,visible:!0,uid:t._groupedData.filter((t=>t.value==e.value))[0].uid})))},_search:function(e){let t=this,o=e.currentTarget;clearTimeout(t._searchTimeOut),t._searchTimeOut=setTimeout((function(){t._searchTimeOut=null;let e=t.options,i=e.search?e.search.fields:["field","value"],n={filters:[],logic:"or"},r=o.value;if(r)for(let e=0;e<i.length;e++)n.filters.push({field:i[e],operator:"contains",value:r});t._groupedData=t._getGroupedData(n,"group"),t.dataSource.filter(n),t._refreshLayout(),t._updateDetails()}),300)},_refreshLayout:function(){const t=this;t._selectedRowUid=t.select().removeClass("k-selected").map((function(t,o){return e(o).attr("data-uid")})),t._contentTree.render([]),t._render()},_detailsBox:function(){const e=this,t=e.options;e._detailsTemplate=t.detailsTemplate?t.detailsTemplate:e._detailsTemplate,t.showDetails&&(e.detailsContainer=e.wrapper.find("table > tr.k-details-box > td"),e.bind(h,e._updateDetails))},_updateDetails:function(){const e=this;if(!e.options.selectable)return;let o=e.dataItem(e.select());o?e.table.find("tr.k-details-box > td").html(t.template(e._detailsTemplate)(o)):e._clearDetails()},_clearDetails:function(){this.table.find("tr.k-details-box > td").html("<span>&nbsp;</span>")},model:function(e,t){const o=this;if(!e)return o._objectFromNodes(o.dataSource.rootNodes());o.options.model=e,t&&(o.options.items=t),o._processedModel=o._processModel(),o.setDataSource(new E({data:o._processedModel,serverGrouping:!1,schema:{model:{id:"id",parentId:"parentId",expanded:!0,fields:{field:{editable:!1},value:{editable:!0}}}}}))},selectItem:function(e){return this.select(e)},toggleItem:function(e){const t=this;t.dataItem(e).expanded?t.collapse(e):t.expand(e)},toggleGroup:function(t){e(t).is("."+_)&&this._toggleGroup(t)},toggleDetails:function(){this.options.showDetails&&this._action({command:"ToggleDetails"})},edit:function(e){this.editCell(e)},saveState:function(){this.saveChanges()},resetState:function(){this.cancelChanges()},setOptions:function(e){const o=this;let i=o.getOptions(),n=o.wrapper,r=o._events,a=o.element;delete i.model,t.deepExtend(i,e),o.model=o.options.model=e.model||{},o.destroy(),n[0]!==a[0]&&(n.before(a),n.remove()),a.empty(),o.init(a,i,r),o._setEvents(i)},destroy:function(){this.tbodyContextMenu&&(this.tbodyContextMenu.destroy(),this.tbodyContextMenu=null),p.fn.destroy.call(this)}});function S(){let e=this,t=this._depth(),o=this.data,i=[],n=[];if(this._hasFooterTemplate()||(this.collapsible=!1),e.options.widget.grouped){o=e.options.widget.dataSource.groupedItemsTree("group");let n=t+e.options.widget.columns.length;e.options._buildGroupedDataRows(o,i,n)}else e.options._buildDataRows(o,i,n);return this._prependHeaderRows(i),i}let G=t.Class.extend({init:function(t){t._buildDataRows=this._buildDataRows.bind(this),t._buildGroupedDataRows=this._buildGroupedDataRows.bind(this),this._instance=new ExcelExporter(t),this._instance._hierarchyRows=S.bind(this),t.columns=this._trimColumns(t.columns||[]),this.allColumns=e.map(this._leafColumns(t.columns||[]),(e=>this._prepareColumn(e))),this.columns=this._visibleColumns(this.allColumns),this.widget=t.widget,this.options=t,this.data=t.data||[],this.aggregates=t.aggregates||{},this.groups=[].concat(t.groups||[]),this.hasGroups=this.groups.length>0,this.hierarchy=t.hierarchy,this.hasGroupHeaderColumn=this.columns.some((function(e){return e.groupHeaderColumnTemplate})),this.collapsible=this.options.collapsible},_recursiveRows:function(e,t){let o=this,i=o.widget.dataSource.level(t);if(e.push(...o._dataRow(t,i+1,this._depth())),t.hasChildren){let i=o.widget.dataSource.childNodes(t);for(let t=0;t<i.length;t++){let o=i[t];this._recursiveRows(e,o)}}},_buildGroupedDataRows:function(e,t,o){for(let i=0;i<e.length;i++){let n=e[i];t.push({type:"group-header",cells:[{value:n.value,colSpan:o,background:"#dfdfdf",color:"#333"}],level:null});for(let e=0;e<n.items.length;e++){let o=n.items[e];this._recursiveRows(t,o)}}},_buildDataRows:function(e,t,o){let i,n=this,r=this._depth(),a=this.hierarchy.itemLevel,l=this.hierarchy.itemId,s=this._hasFooterTemplate(),d=0;for(let c=0;c<e.length;c++){let p=e[c],u=a(p,c);s&&(u>d?o.push({id:i,level:d}):u<d&&t.push(...n._hierarchyFooterRows(o,u,r)),d=u,i=l(p,c)),t.push(...n._dataRow(p,u+1,r))}if(s){t.push(...this._hierarchyFooterRows(o,0,r));let i=e.length?this.aggregates[e[0].parentId]:{};t.push(this._hierarchyFooter(i,0,r))}}});t.getAllMethods(ExcelExporter).forEach((e=>t.createProxyMember(G,e))),t.PropertyGridExcelExporter=t.ExcelExporter.extend({workbook:function(){return e.Deferred(function(e){this.dataSource.fetch().then(function(){let t=new G(n({},this.options,this._hierarchy(),{data:this.dataSource.view(),groups:this.dataSource.group(),aggregates:this.dataSource.aggregates()})).workbook();e.resolve(t,this.dataSource.view())}.bind(this))}.bind(this)).promise()}});let N={extend:function(t){t.events.push("excelExport"),t.options.excel=e.extend(t.options.excel,this.options),t.saveAsExcel=this.saveAsExcel},options:{proxyURL:"",filterable:!1,fileName:"Export.xlsx"},saveAsExcel:function(){let e=this.options.excel||{},o=new t.PropertyGridExcelExporter({widget:this,columns:this.columns,dataSource:this.dataSource,data:this.dataSource.data(),allPages:e.allPages,filterable:e.filterable,hierarchy:e.hierarchy,collapsible:e.collapsible});o.workbook().then(function(i,n){if(!this.trigger("excelExport",{workbook:i,data:n})){let n=new t.ooxml.Workbook(i);n.options||(n.options={}),n.options.skipCustomHeight=!0,n.toDataURLAsync().then((function(n){t.saveAs({dataURI:n,fileName:i.fileName||e.fileName,proxyURL:e.proxyURL,forceProxy:e.forceProxy}),o._restoreExpandedState()}))}}.bind(this))}};t.PropertyGridExcelMixin=N,t.ooxml&&t.ooxml.Workbook&&N.extend(R.prototype),t.ui.propertygrid=t.ui.propertygrid||{},n(t.ui.propertygrid,{defaultBodyContextMenu:C}),t.cssProperties.propertyDictionary.PropertyGrid=t.cssProperties.propertyDictionary.TreeList,t.cssProperties.registerPrefix("PropertyGrid","k-property-grid-"),t.ui.plugin(R)}(window.kendo.jQuery);var kendo$1=kendo;export{__meta__,kendo$1 as default};
//# sourceMappingURL=kendo.propertygrid.js.map