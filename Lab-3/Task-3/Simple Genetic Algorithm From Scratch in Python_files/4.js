!function(t){var e="advads_procfp",a="advanced_ads_ad_clicks",n=null,o=null;function r(t){try{return JSON.parse(t)}catch(t){return null}}t(document).on("advads-passive-cb-conditions",(function(t,e){e.conditions.ad_clicks="check_ad_clicks",e.check_ad_clicks=function(t,e){if(advads.cookie_exists(a+"_"+e.id)){var n=advads.get_cookie(a+"_"+e.id);n=r(n)}if(n){var o=parseInt((new Date).getTime()/1e3);for(var i in n)if("_"+t.expiration==i&&n[i].ttl>=o&&n[i].count>=parseInt(t.limit))return!1}return!0}}));var i=function(){this.$elements={},this.currentIFrame=!1,this.focusLost=!1,this.wrappers=[".google-auto-placed"],this.attributes={"data-anchor-status":"displayed","data-vignette-loaded":"true"},this.lastClick=0,this.init()};i.prototype={constructor:i,init:function(){const e=this;let a;t(document).on("click","a[data-cfpa]",(function(){e.onClick(parseInt(t(this).attr("data-cfpa")))})),t(window).on("blur",(function(t){setTimeout((function(){if(!e.currentIFrame)for(let t=document.activeElement;t&&t!==this&&t!==document&&(e.currentIFrame=e.checkWrappers(t),!e.currentIFrame);t=t.parentNode);e.currentIFrame&&(e.onClick(e.currentIFrame),e.focusLost=!0,top.focus())}),0)})),t(document).on("mouseenter","div[data-cfpa]",(function(){var a=parseInt(t(this).attr("data-cfpa"));e.addElement(a)})),document.addEventListener("touchmove",(function(){a=!0}),!1),document.addEventListener("touchstart",(function(){a=!1}),!1),["click","touchend"].forEach((function(t){document.addEventListener(t,(function(t){if(a||e.getTimestamp()-e.lastClick<1)return;let n=null;for(let a=t.target;a&&a!==this&&a!==document;a=a.parentNode){if(n=e.checkWrappers(a),n){e.onClick(n);break}if(a.hasAttribute("data-cfpa")&&a.hasAttribute("data-cfptl")){n=parseInt(a.getAttribute("data-cfpa"),10),e.onClick(n);break}}}))}))},getTimestamp:function(){return Math.floor(Date.now()/1e3)},checkWrappers:function(t){for(let e=0,a=this.wrappers.length,n=null;e<a;e++)if(n=this.wrappers[e],t.matches&&t.matches(n))return".google-auto-placed"===n?"google-auto-placed":null;for(const[e,a]of Object.entries(this.attributes))if(t.hasAttribute(e)&&t.getAttribute(e)===a)return"google-auto-placed";return null},addElement:function(e){!1==e instanceof jQuery&&(e=t('div[data-cfpa="'+e+'"]').first());var i=!!e.find("iframe").length;if(i||e.find("a").length){var c=parseInt(e.attr("data-cfpa"));if(this.$elements[c]=e,e.removeAttr("data-cfpa"),i?(e.find("iframe").first().attr({"data-cfpa":c}),e.attr("data-cfph")&&e.find("iframe").first().attr({"data-cfph":e.attr("data-cfph")})):(e.find("a").not(".advads-edit-button").first().attr({"data-cfpa":c}),e.attr("data-cfph")&&e.find("a").not(".advads-edit-button").first().attr({"data-cfph":e.attr("data-cfph")})),e.removeAttr("data-cfph"),advads.cookie_exists(a+"_"+c)){var s=advads.get_cookie(a+"_"+c);if(s=r(s)){var d=parseInt((new Date).getTime()/1e3),f=!1;for(var p in s)if(s.hasOwnProperty(p)&&"exp"!=p&&s[p].ttl<d){for(var u=parseFloat(p.substr(1)),l=s[p].ttl;l<d;)l+=60*u*60;s[p].ttl=l,s[p].count=0,f=!0}if(f){var v=new Date(s.exp);advads.set_cookie_sec(a+"_"+c,JSON.stringify(s,"false",!1),parseInt(v.getTime()/1e3),n,o)}}}}},_banVisitor:function(){var t=new Date,e=new Date;e.setTime(e.getTime()+24*advadsCfpInfo.cfpBan*60*60*1e3);var a=(e.getTime()-t.getTime())/1e3;advads.set_cookie_sec("advads_pro_cfp_ban",1,a,n,o),document.querySelectorAll("[data-cfpw]:not([data-cfp-exclude])").forEach((function(t){t.remove()})),this.removeEmptyWrappers(),this.wrappers.forEach((function(t){jQuery(t).remove()}));for(const[t,e]of Object.entries(this.attributes))jQuery("["+t+'="'+e+'"]').remove()},removeEmptyWrappers:function(){document.querySelectorAll("[data-cfptl]:not([data-cfpw])").forEach((function(t){t.querySelectorAll("[data-cfpw]").length||t.remove()}))},onClick:function(i){var c=this,s=!1,d=!1;if(this.lastClick=this.getTimestamp(),"google-auto-placed"!==i&&t('[data-cfpa="'+i+'"]').attr("data-cfph")){advads.cookie_exists(a+"_"+i)&&(d=r(advads.get_cookie(a+"_"+i)));const e=r(t('[data-cfpa="'+i+'"]').attr("data-cfph"));if(d){const t=parseInt((new Date).getTime()/1e3,10),r=document.querySelectorAll('[data-cfpw="'+i+'"]');for(var f in d)d.hasOwnProperty(f)&&"exp"!==f&&(d[f].count=parseInt(d[f].count,10)+1,d[f].ttl>=t&&d[f].count>=parseInt(e[f],10)&&(r.forEach((function(t){t.remove()})),c.removeEmptyWrappers()));var p=new Date,u=new Date(d.exp),l=parseInt((u.getTime()-p.getTime())/1e3);advads.set_cookie_sec(a+"_"+i,JSON.stringify(d,"false",!1),l,n,o)}else{var v={},m=0,h=new Date;p=new Date;for(var f in e)f=f.substring(1),parseFloat(f)>m&&(m=parseFloat(f)),v["_"+f]={count:1,ttl:parseInt(p.getTime()/1e3+3600*parseFloat(f),10)};h.setTime(h.getTime()+60*m*60*1e3);var g="expires="+h.toUTCString();l=parseInt((h.getTime()-p.getTime())/1e3);v.exp=g,advads.set_cookie_sec(a+"_"+i,JSON.stringify(v,"false",!1),l,n,o)}}if(advads.cookie_exists(e+"_"+i)&&(s=r(advads.get_cookie(e+"_"+i))),s){s.count=parseInt(s.count,10)+1;p=new Date,l=((u=new Date(s.exp)).getTime()-p.getTime())/1e3;advads.set_cookie_sec(e+"_"+i,JSON.stringify(s,"false",!1),l,n,o),advadsCfpInfo.cfpClickLimit<=s.count&&void 0!==advadsCfpInfo.cfpBan&&c._banVisitor()}else{h=new Date,p=new Date;h.setTime(h.getTime()+60*advadsCfpInfo.cfpExpHours*60*1e3);g="expires="+h.toUTCString(),l=(h.getTime()-p.getTime())/1e3;advads.set_cookie_sec(e+"_"+i,'{"count":1,"exp":"'+g+'"}',l,n,o),1===advadsCfpInfo.cfpClickLimit&&void 0!==advadsCfpInfo.cfpBan&&c._banVisitor()}}},t((function(){for(var e in window.advadsProCfp=new i,t(document).on("mouseenter","iframe[data-cfpa]",(function(e){var a=parseInt(t(this).attr("data-cfpa"));advadsProCfp.currentIFrame=a})).on("mouseenter",".google-auto-placed",(function(t){advadsProCfp.currentIFrame="google-auto-placed"})).on("mouseleave mouseout","[data-cfpa], .google-auto-placed",(function(){advadsProCfp.currentIFrame=!1,advadsProCfp.focusLost&&(advadsProCfp.focusLost=!1,t(window).trigger("focus"))})),advadsCfpQueue)advadsCfpQueue.hasOwnProperty(e)&&advadsProCfp.addElement(advadsCfpQueue[e]);advadsCfpQueue=[],void 0!==window.advadsCfpInfo.cfpPath&&(""!=advadsCfpInfo.cfpPath&&(n=advadsCfpInfo.cfpPath),""!=advadsCfpInfo.cfpDomain&&(o=advadsCfpInfo.cfpDomain))}))}(window.jQuery)