/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","hammerjs","promise","ojs/ojjquery-hammer","ojs/ojcomponentcore"],function(b,f,a){b.ze=function(){};o_("IndexerModel",b.ze,b);b.ze.PREFIX_OTHERS="__others__";o_("IndexerModel.PREFIX_OTHERS",b.ze.PREFIX_OTHERS,b);b.ze.D={CHANGE:"change"};o_("IndexerModel.EventType",b.ze.D,b);b.ze.prototype.setPrefix=function(){};b.b.g("IndexerModel.prototype.setPrefix",{setPrefix:b.ze.prototype.setPrefix});b.ze.prototype.getIndexablePrefixes=function(){};b.b.g("IndexerModel.prototype.getIndexablePrefixes",
{getIndexablePrefixes:b.ze.prototype.getIndexablePrefixes});b.ze.prototype.getPrefixes=function(){};b.b.g("IndexerModel.prototype.getPrefixes",{getPrefixes:b.ze.prototype.getPrefixes});b.fg=function(a){this.Pc=a;this.Init()};o_("ListViewIndexerModel",b.fg,b);b.b.ga(b.fg,b.Qg,"oj.ListViewIndexerModel");b.fg.prototype.getIndexablePrefixes=function(){return this.Pc.W.A("indexerCharacters").split("|")};b.b.g("ListViewIndexerModel.prototype.getIndexablePrefixes",{getIndexablePrefixes:b.fg.prototype.getIndexablePrefixes});
b.fg.prototype.getPrefixes=function(){null==this.bN&&(this.bN=this.kda());return this.bN};b.b.g("ListViewIndexerModel.prototype.getPrefixes",{getPrefixes:b.fg.prototype.getPrefixes});b.fg.prototype.kda=function(){var a=[],b=this.Pc.Jw();if(null!=b)for(var e=this.getIndexablePrefixes(),g=0;g<e.length;g++){var h=e[g];b.each(function(){if(0==f(this).text().indexOf(h))return a.push(h),!1})}return a};b.fg.prototype.setPrefix=function(a){return a==b.ze.PREFIX_OTHERS?this.hla():this.ila(a)};b.b.g("ListViewIndexerModel.prototype.setPrefix",
{setPrefix:b.fg.prototype.setPrefix});b.fg.prototype.hla=function(){var a,c=this,e,g,h,k,l;a=this.getIndexablePrefixes();return new Promise(function(m){e=null;g=c.Pc.Jw();null!=g&&g.each(function(){h=f(this).text();for(k=0;k<a.length;k++)if(l=a[k],0==h.indexOf(l))return!0;e=this;return!1});e?(c.Pc.R_(e),m(b.ze.PREFIX_OTHERS)):m(null)})};b.fg.prototype.ila=function(a){var b,e,f=this,h=null,k;b=this.getIndexablePrefixes();e=b.indexOf(a);return new Promise(function(l){if(-1==e)l(null);else{for(;e<b.length;){a=
b[e];k=f.Yca(a);if(null!=k){f.Pc.R_(k);h=a;break}e++}l(h)}})};b.fg.prototype.Yca=function(a){var b,e,g;e=this.Pc.Jw();null!=e&&e.each(function(){g=f(this).text();if(0==g.indexOf(a))return b=this,!1});return b};b.fg.prototype.C2=function(){this.bN=null;this.handleEvent(b.ze.D.CHANGE,{})};(function(){b.ya("oj.ojIndexer",f.oj.baseComponent,{defaultElement:"\x3cul\x3e",version:"1.2",widgetEventPrefix:"oj",options:{data:null},_ComponentCreate:function(){this._super();this.Aa()},nf:function(){var a;this._super();
this.pU();this.Y_();this.pba();a=this.Qn()[0];this.xj(a);this.Fja(a)},_destroy:function(){var a,c;this._super();this.rma();this.element.removeClass("oj-component-initnode");a=this.Qn()[0];this.Kk(a);this.qma(a);c=this.MB();null!=c&&this.EO&&c.off(b.ze.D.k6,this.EO);b.v.unwrap(this.element,f(a))},_setOption:function(a,b){this._superApply(arguments);"data"==a&&this.refresh()},widget:function(){return this.Qn()},refresh:function(){this._super();this.element.empty();this.pU();this.Y_();this.pr=null},
getNodeBySubId:function(a){var b,e,g,h,k;if(null==a)return this.element?this.element[0]:null;if("oj-indexer-prefix"===a.subId)for(a=a.prefix,b=this.element.children("li"),e=0;e<b.length;e++){h=b.get(e);if(f(h).attr("data-range")==a)return h;k=f(h).attr("data-includes");if(null!=k)for(k=k.split("|"),g=0;g<k.length;g++)if(k[g]==a)return h}return null},getSubIdByNode:function(a){return null!=a&&(a=f(a).attr("data-range"),null!=a)?{subId:"oj-indexer-prefix",prefix:a}:null},Y_:function(){this.element.attr("role",
"slider").attr("aria-orientation","vertical").attr("aria-describedby",this.element.prop("id")+":desc").attr("aria-valuemin",0).attr("aria-valuemax",Math.max(0,this.element.children().length-1))},rma:function(){this.element.removeAttr("role").removeAttr("aria-orientation").removeAttr("aria-describedby").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuetext")},pba:function(){var a,c;a=b.v.Rd()?"ariaTouchInstructionText":"ariaKeyboardInstructionText";c=f(document.createElement("div"));
c.prop("id",this.element.prop("id")+":desc");c.addClass("oj-helper-hidden-accessible").text(this.A(a));this.Qn().append(c)},Qn:function(){null==this.$y&&(this.$y=this.nba());return this.$y},nba:function(){var a=f(document.createElement("div"));a.addClass("oj-indexer oj-component");this.element.parent()[0].replaceChild(a[0],this.element[0]);a.prepend(this.element);return a},pU:function(){var a,b,e,f,h,k,l;a=this.MB();if(null!=a){b=this.element;e=a.getIndexablePrefixes();f=a.getPrefixes();a=this.A("indexerOthers");
h=this.widget().outerHeight();k=this.ZA(e[0],f);b.append(k);k=k.outerHeight();h=Math.floor(h/k);this.Qn().removeClass("oj-indexer-abbr");h=Math.floor((e.length+1)/h)+1;1<h&&this.Qn().addClass("oj-indexer-abbr");for(k=1+h;k<e.length;k=k+h+1)1<h?(l=this.Jba(e,k-h,k-1),b.append(l)):k--,l=e[k],l=this.ZA(l,f),b.append(l);e=this.ZA(e[e.length-1],f);b.append(e);e=this.ZA(a);e.attr("data-others","true");b.append(e)}},ZA:function(a,b){var e=f(document.createElement("li"));e.attr("data-range",a).text(a);null!=
b&&-1==b.indexOf(a)&&e.addClass("oj-disabled");return e},Jba:function(a,b,e){var g,h="";g=f(document.createElement("li"));for(g.addClass("oj-indexer-ellipsis").attr("data-range",a[b+Math.round((e-b)/2)]);b<e;b++)h=h+a[b]+"|";h+=a[e];g.attr("data-includes",h);return g},Aa:function(){var a=this,c;this.element.uniqueId().addClass("oj-component-initnode").attr("tabIndex",0);this._on(this.element,{click:function(b){a.Yea(b)},keydown:function(b){a.tq(b)},focus:function(b){a.wfa(b)},blur:function(b){a.Tea(b)}});
c=this.MB();null!=c&&(this.EO=function(){a.refresh()},c.on(b.ze.D.k6,this.EO))},Yea:function(a){0===a.button&&(a=f(a.target),this.PL(a))},wfa:function(){this.Qn().addClass("oj-focus-ancestor");null==this.pr&&this.qo(this.element.children("li").first())},Tea:function(){this.Qn().removeClass("oj-focus-ancestor")},tq:function(a){var b,e=!1;switch(a.keyCode){case 38:b=this.pr.prev();break;case 40:b=this.pr.next();break;case 13:this.PL(this.pr),e=!0}null!=b&&0<b.length&&(e=!0,this.qo(b));e&&a.preventDefault()},
qo:function(a){null!=this.pr&&this.pr.removeClass("oj-focus");a.addClass("oj-focus");this.uma(a);this.pr=a},MB:function(){var a=this.option("data");if(null!=a&&(void 0==a.setPrefix||void 0==a.getIndexablePrefixes||void 0==a.getPrefixes))throw"Invalid IndexerModel";return a},PL:function(a){var c=a.attr("data-range");a.attr("data-others")&&(c=b.ze.PREFIX_OTHERS);this.QL(c)},QL:function(a){var b=this,e;this.MB().setPrefix(a).then(function(a){null!=a&&(e=b.lj(a),null!=e&&b.qo(e))})},uma:function(a){var c,
e="";c=a.attr("data-includes");null!=c?(c=c.split("|"),0<c.length&&(e=this.A("ariaInBetweenText",{first:c[0],second:c[c.length-1]}))):(c=a.attr("data-range"),e=c===b.ze.PREFIX_OTHERS?this.A("ariaOthersLabel"):c);a.hasClass("oj-disabled")&&(e=e+". "+this.A("ariaDisabledLabel"));this.element.attr("aria-valuetext",e);this.element.attr("aria-valuenow",a.index())},lj:function(a){var b,e,g,h,k;b=this.element.children();for(e=0;e<b.length;e++)if(g=b.get(e),h=f(g).attr("data-range"),k=f(g).attr("data-includes"),
null!=h&&h==a||null!=k&&-1<k.indexOf(a))return f(g);return null},Kk:function(a){a&&this.Ke&&b.v.Pi(a,this.Ke)},xj:function(a){a&&(null==this.Ke&&(this.Ke=this.Ye.bind(this)),b.v.Oh(a,this.Ke))},qma:function(a){f(a).off("panstart panmove panend")},Fja:function(b){var c=this,e,g,h,k,l,m,n,p,r,s,q,t;e={recognizers:[[a.Pan,{direction:a.DIRECTION_VERTICAL}]]};f(b).fl(e).on("panstart",function(a){g=a.gesture.target;h=c.element[0].getBoundingClientRect().left+5;k=g.getBoundingClientRect().top;c.PL(f(g));
l=g;m=g.getAttribute("data-range");n=k}).on("panmove",function(a){p=n;n=k+a.gesture.deltaY;g=document.elementFromPoint(h,n);null!=g&&(r=n-p,l==g?(s=g.getAttribute("data-includes"),null!=s&&(s=s.split("|"),q=s.indexOf(m),t=null,0<r&&q<s.length-1?t=s[q+1]:0>r&&0<q&&(t=s[q-1]),null!=t&&(m=t,c.QL(t)))):g.hasAttribute("data-range")&&(s=g.getAttribute("data-includes"),t=null,null!=s&&(0<r&&g==l.nextElementSibling?t=s[0]:0>r&&g==l.previousElementSibling&&(t=s[s.length-1])),null==t&&(t=g.getAttribute("data-range")),
l=g,m=t,c.QL(m)))}).on("panend",function(){t=n=m=l=null})},Ye:function(a,b){0<a&&0<b&&this.refresh()}})})()});