/**
 * Kendo UI v2024.4.1112 (http://www.telerik.com/kendo-ui)
 * Copyright 2024 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.scheduler.view.js";import"./kendo.icons.js";const __meta__={id:"scheduler.agendaview",name:"Scheduler Agenda View",category:"web",description:"The Scheduler Agenda View",depends:["scheduler.view","icons"],hidden:!0};!function(e){var t=window.kendo,s=t.ui,r=t.htmlEncode,a=".kendoAgendaView",n="role",i=e=>`<div class="k-task" title="${r((e.title||"").replace(/"/g,"'"))}" ${t.attr("uid")}="${e.uid}">`+(e.resources[0]?`<span class="k-scheduler-mark" ${t.attr("style-background-color")}="${e.resources[0].color}"></span>`:"")+`${e.isException()?t.ui.icon("arrows-no-repeat"):e.isRecurring()?t.ui.icon("arrow-rotate-cw"):""}`+`<span class="k-scheduler-task-text">${t.template(e.template)(e)}</span>`+(e.showDelete?`<a href="#" class="k-link k-event-delete" title="${e.messages.destroy}" aria-label="${e.messages.destroy}">${t.ui.icon("x")}</a>`:"")+"</div>",o=t.Class.extend({init:function(e){this._view=e},_getColumns:function(e,t){return e.concat(t)},_getGroupsInDay:function(){return[]},_getSumOfItemsForDate:function(){return 0},_renderTaskGroupsCells:function(e,t,s,r){var a=this._view;0===s&&0===r&&t.length&&a._renderTaskGroupsCells(e,t)},_renderDateCell:function(e,s,r,a,n,i){var o=this._view,l=o._isMobile();e.push(t.format('<td class="k-scheduler-datecolumn{3}{2}" rowspan="{0}">{1}</td>',r.length,o._dateTemplate({date:a,isMobile:l}),s.length?"":" k-first"))},_renderDates:function(){},_getParents:function(e){return e.splice(0)},_getGroupsByDate:function(){},_renderTaskGroups:function(e,t,s){var r=this._view;e.append(r._renderTaskGroups(t,s))}}),l=t.Class.extend({init:function(e){this._view=e},_getColumns:function(e,t){if(this._view._isMobile())return e.concat(t);var s=t.slice(0,1),r=t.slice(1);return s.concat(e).concat(r)},_compareDateGroups:function(e,t,s){return e[s].text==t[s].text&&(0===s||this._compareDateGroups(e,t,s-1))},_getGroupsInDay:function(e,t){for(var s=[],r=null,a=0;a<e.length;a++)for(var n=0;n<e[a].items.length;n++){var i=0;if(0===s.length)for(;i<t[a].length;i++)s.push([1]);else for(;i<t[a].length;i++)if(this._compareDateGroups(t[a],r,i))s[i][s[i].length-1]++;else{for(var o=s[i][s[i].length-1]-1,l=0;l<o;l++)s[i].push(0);s[i].push(1)}r=t[a]}return s},_getSumOfItemsForDate:function(e){for(var t=0,s=0;s<e.length;s++)t+=e[s].items.length;return t},_renderTaskGroupsCells:function(e,s,r,a,n,i,o,l){var d=this._view,u=d._isMobile();if(u)0===r&&0===a&&s.length&&d._renderTaskGroupsCells(e,s);else{0===r&&0===a&&e.push(t.format('<td class="k-scheduler-datecolumn k-first" rowspan="{0}">{1}</td>',i,d._dateTemplate({date:o,isMobile:u})));for(var c=0;c<s[r].length;c++)n[c][l]&&e.push(t.format('<td class="k-scheduler-groupcolumn" rowspan="{0}">{1}</td>',n[c][l],d._groupTemplate({value:s[r][c].text,isMobile:u}),s[r][c].className))}},_renderDateCell:function(){},_renderDates:function(e){for(var t=this._view,s=t._groupsByDate.sort((function(e,t){return e.array[0].value.getTime()-t.array[0].value.getTime()})),r=0;r<s.length;r++)e.append(t._renderTaskGroups(s[r].array,s[r].groups))},_getParents:function(e){return e.slice(0)},_getGroupsByDate:function(e,t,s){var r=this._view;if(e[t].items)for(var a=0;a<e[t].items.length;a++){for(var n=e[t].items[a].value,i=!1,o=0;o<r._groupsByDate.length;o++)r._groupsByDate[o].array[0].value.getTime()===n.getTime()&&(i=!0,r._groupsByDate[o].array.push(e[t].items[a]),r._groupsByDate[o].groups.push(s));i||r._groupsByDate.push({array:[e[t].items[a]],groups:[s]})}},_renderTaskGroups:function(){}});function d(e){for(var t=0,s=0,r=e.length;s<r;s++)t+=e[s].items.length;return t}function u(e,s){return e.valuePrimitive&&(s=t.getter(e.dataValueField)(s)),s}function c(e){for(var t=[].concat(e),s=t.shift(),r=[],a=[].push;s;)s.groups?a.apply(t,s.groups):s.items?a.apply(t,s.items):a.call(r,s),s=t.shift();return r}t.ui.scheduler.AgendaGroupedView=o,t.ui.scheduler.AgendaGroupedByDateView=l,s.AgendaView=s.SchedulerView.extend({init:function(r,n){s.SchedulerView.fn.init.call(this,r,n),this._groupedView=this._getGroupedView(),(n=this.options).editable&&(n.editable=e.extend({delete:!0},n.editable,{create:!1,update:!1},{messages:n.messages})),this.title=n.title,this._eventTemplate=t.template(i),this._dateTemplate=t.template(n.eventDateTemplate),this._groupTemplate=t.template(n.eventGroupTemplate),this._timeTemplate=t.template(n.eventTimeTemplate),this.element.on("mouseenter"+a,".k-scheduler-content tr","_mouseenter").on("mouseleave"+a,".k-scheduler-content tr","_mouseleave").on("click"+a,".k-scheduler-content .k-link:has(.k-i-x),.k-scheduler-content .k-link:has(.k-svg-i-x)","_remove"),this._renderLayout(n.date),this.refreshLayout()},name:"agenda",_aria:function(){var e=this.table;e.attr(n,"grid"),e.children("tbody").attr(n,"none"),e.find("table").attr(n,"none"),e.find("table > tbody").attr(n,"rowgroup"),e.find("table tr").attr(n,"row"),e.find("table td").attr(n,"gridcell"),e.find(".k-scheduler-header-wrap th").attr(n,"columnheader"),e.find(".k-scheduler-content .k-scheduler-datecolumn, .k-scheduler-content .k-scheduler-groupcolumn").attr(n,"rowheader")},clearSelection:function(){this.element.find(".k-selected").attr("aria-selected",!1),t.ui.SchedulerView.fn.clearSelection.call(this)},_isVirtualized:function(){return!1},_getGroupedView:function(){return this._isGroupedByDate()?new t.ui.scheduler.AgendaGroupedByDateView(this):new t.ui.scheduler.AgendaGroupedView(this)},_mouseenter:function(t){e(t.currentTarget).addClass("k-hover")},_mouseleave:function(t){e(t.currentTarget).removeClass("k-hover")},_remove:function(s){s.preventDefault(),this.trigger("remove",{uid:e(s.currentTarget).closest(".k-task").attr(t.attr("uid"))})},nextDate:function(){return t.date.nextDay(this.startDate())},startDate:function(){return this._startDate},endDate:function(){return this._endDate},previousDate:function(){return t.date.previousDay(this.startDate())},_renderLayout:function(e){this._startDate=e,this._endDate=t.date.addDays(e,7),this.createLayout(this._layout()),this._footer()},_layout:function(){var e=[{text:this.options.messages.time,className:"k-scheduler-timecolumn"},{text:this.options.messages.event}];this._isMobile()||e.splice(0,0,{text:this.options.messages.date,className:"k-scheduler-datecolumn"});var t=this.groupedResources;if(t.length){for(var s=[],r=0;r<t.length;r++)s.push({text:"",className:"k-scheduler-groupcolumn"});e=this._groupedView._getColumns(s,e)}return{columns:e}},_tasks:function(e){for(var s=[],r=0;r<e.length;r++){var a=e[r],n=a.start,i=a.isAllDay?t.date.getDate(a.end):a.end,o=t.date.getDate(n),l=6e4*(o.getTimezoneOffset()-i.getTimezoneOffset()),d=Math.ceil((i-o+l)/t.date.MS_PER_DAY);a.isAllDay&&(d+=1);var u=a.clone();if(u.startDate=t.date.getDate(n),u.startDate>=this.startDate()&&s.push(u),d>1){u.end=t.date.nextDay(n),u.head=!0;for(var c=1;c<d;c++)n=u.end,(u=a.clone()).start=u.startDate=t.date.getDate(n),u.end=t.date.nextDay(n),c==d-1?(u.end=new Date(u.start.getFullYear(),u.start.getMonth(),u.start.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()),u.tail=!0):(u.isAllDay=!0,u.middle=!0),(t.date.getDate(u.end)<=this.endDate()&&u.start>=this.startDate()||t.date.getDate(u.start).getTime()==this.endDate().getTime())&&s.push(u)}}return new t.data.Query(s).sort([{field:"start",dir:"asc"},{field:"end",dir:"asc"}]).groupBy({field:"startDate"}).toArray()},_renderTaskGroups:function(e,s){for(var r=[],a=this.options.editable,n=a&&!1!==a.destroy&&!this._isMobile(),i=this._isMobile(),o=this._groupedView._getSumOfItemsForDate(e),l=this._groupedView._getGroupsInDay(e,s),d=0,u=0;u<e.length;u++)for(var c=e[u].value,h=e[u].items,p=t.date.isToday(c),g=0;g<h.length;g++){var m=h[g],f=[],_=i?[]:f;this._groupedView._renderTaskGroupsCells(_,s,u,g,l,o,c,d),d++,0===g&&(i?(_.push(t.format('<td class="k-scheduler-datecolumn {1}" colspan="2">{0}</td>',this._dateTemplate({date:c,isMobile:i}),this.groupedResources.length?"":"k-first")),r.push('<tr role="row" aria-selected="false"'+(p?' class="k-today">':">")+_.join("")+"</tr>")):this._groupedView._renderDateCell(f,s,h,c,u,e)),m.head?m.format="{0:t}":m.tail?m.format="{1:t}":m.format="{0:t}-{1:t}",m.resources=this.eventResources(m),f.push(t.format('<td class="k-scheduler-timecolumn {4}"><div>{0}{1}{2}</div></td><td>{3}</td>',m.tail||m.middle?t.ui.icon("caret-alt-left"):"",this._timeTemplate(m.clone({start:m._startTime||m.start,end:m.endTime||m.end,messages:this.options.messages})),m.head||m.middle?t.ui.icon("caret-alt-right"):"",this._eventTemplate(m.clone({showDelete:n,messages:this.options.messages,template:this.options.eventTemplate})),!this.groupedResources.length&&i?"k-first":"")),r.push('<tr role="row" aria-selected="false"'+(p?' class="k-today">':">")+f.join("")+"</tr>")}return r.join("")},_renderTaskGroupsCells:function(e,s){for(var r=this._isMobile(),a=0;a<s.length;a++)e.push(t.format('<td class="k-scheduler-groupcolumn{2}" rowspan="{0}">{1}</td>',s[a].rowSpan,this._groupTemplate({value:s[a].text,isMobile:r}),s[a].className))},render:function(s){var r=this.content.find("table").empty(),a=[];if(s.length>0){var n=this.groupedResources;if(r.append(e("<tbody>")),n.length)a=this._createGroupConfiguration(s,n,null),this._groupsByDate=[],this._renderGroups(a,r.find("tbody"),[]),this._groupedView._renderDates(r.find("tbody"));else{a=this._tasks(s);var i=e(this._renderTaskGroups(a,[]));t.applyStylesFromKendoAttributes(i,["background-color"]),r.find("tbody").append(i)}}this._eventsList=function(e){for(var t,s=0,r=e.length,a=[];s<r;s++)(t=e[s]).groups?(t=c(t.groups),a=a.concat(t)):a=a.concat(c(t.items));return a}(a);this._aria(),this.refreshLayout(),this.trigger("activate")},_renderGroups:function(e,t,s){for(var r=0,a=e.length;r<a;r++){var n=this._groupedView._getParents(s);n.push(e[r]),this._groupedView._getGroupsByDate(e,r,n),e[r].groups?this._renderGroups(e[r].groups,t,n):this._groupedView._renderTaskGroups(t,e[r].items,n)}},_createGroupConfiguration:function(e,r,a){var n=r[0],i=[],o=n.dataSource.view(),l=this._isMobile();o=o.filter((function(e){var s=t.getter(n.dataParentValueField)(e);return null==s||a&&s===a.value}));for(var c=0;c<o.length;c++){var h=u(n,o[c]),p=new t.data.Query(e).filter({field:n.field,operator:s.SchedulerView.groupEqFilter(h)}).toArray();if(p.length){var g=this._tasks(p),m=a?"":" k-first",f={text:t.getter(n.dataTextField)(o[c]),value:h,rowSpan:0,className:m};if(r.length>1)f.groups=this._createGroupConfiguration(p,r.slice(1),f),a&&(a.rowSpan+=f.rowSpan);else{f.items=g;var _=d(f.items);l&&(_+=f.items.length),f.rowSpan=_,a&&(a.rowSpan+=_)}i.push(f)}}return i},_resourceBySlot:function(){return{}},selectionByElement:function(t){var s,r;if(!(t=e(t)).hasClass("k-scheduler-datecolumn")&&this._eventsList.length){if(t.is(".k-task")&&(t=t.closest("td")),this._isMobile()){var a=t.parent();s=a.parent().children().filter((function(){return e(this).children(":not(.k-scheduler-datecolumn, .k-scheduler-groupcolumn)").length})).index(a)}else s=t.parent().index();return{index:s,start:(r=this._eventsList[s]).start,end:r.end,isAllDay:r.isAllDay,uid:r.uid}}},select:function(e){this.clearSelection();var t=this.table.find(".k-task").eq(e.index).closest("tr").addClass("k-selected").attr("aria-selected",!0)[0];this.current(t)},move:function(e,s){var r=!1,a=e.index;if(s==t.keys.UP?(a--,r=!0):s==t.keys.DOWN&&(a++,r=!0),r){var n=this._eventsList[a];n&&(e.start=n.start,e.end=n.end,e.isAllDay=n.isAllDay,e.events=[n.uid],e.index=a)}return r},moveToEvent:function(){return!1},constrainSelection:function(e){var t=this._eventsList[0];t&&(e.start=t.start,e.end=t.end,e.isAllDay=t.isAllDay,e.events=[t.uid],e.index=0)},isInRange:function(){return!0},destroy:function(){this.element&&this.element.off(a),s.SchedulerView.fn.destroy.call(this)},options:{title:"Agenda",name:"agenda",editable:!0,selectedDateFormat:"{0:D}-{1:D}",selectedShortDateFormat:"{0:d} - {1:d}",selectedMobileDateFormat:"{0: MMM} {0:dd} - {1:dd}",eventTemplate:({title:e})=>r(e),eventTimeTemplate:({isAllDay:e,messages:s,format:r,start:a,end:n})=>e?s.allDay:t.format(r,a,n),eventDateTemplate:e=>e.isMobile?(({date:e})=>`<div class="k-scheduler-datecolumn-wrap"><span class="k-mobile-scheduler-agendadate"><span class="k-mobile-scheduler-agendaday">${t.toString(e,"dd")}</span>&nbsp<span class="k-mobile-scheduler-agendamonth">${t.toString(e,"MMMM")}</span></span><span class="k-mobile-scheduler-agendaweekday">`+t.toString(e,"dddd")+"</span></div>")(e):(({date:e})=>'<strong class="k-scheduler-agendaday">'+t.toString(e,"dd")+'</strong><em class="k-scheduler-agendaweek">'+t.toString(e,"dddd")+'</em><span class="k-scheduler-agendadate">'+t.toString(e,"y")+"</span>")(e),eventGroupTemplate:({isMobile:e,value:t})=>e?'<span class="k-scheduler-group-text">'+t+"</span>":'<strong class="k-scheduler-adgendagroup">'+t+"</strong>",messages:{event:"Event",date:"Date",time:"Time",allDay:"all day"}}})}(window.kendo.jQuery);var kendo$1=kendo;export{__meta__,kendo$1 as default};
//# sourceMappingURL=kendo.scheduler.agendaview.js.map