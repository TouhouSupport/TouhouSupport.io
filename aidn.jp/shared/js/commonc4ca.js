var hr=location.href;function gtag(){dataLayer.push(arguments)}hr.indexOf("nore=1")<=0&&0<hr.indexOf("a.aidn")&&(location.href=hr.split("a.aidn").join("aidn")),0<hr.indexOf("www.aidn")&&(location.href=hr.split("www.aidn").join("aidn")),0<hr.indexOf("daniwell.com")&&(location.href="https://aidn.jp"+hr.split("daniwell.com")[1]),0<=hr.indexOf("aidn.jp")&&(function(){var e=document.createElement("script");e.async=1,e.src="https://www.googletagmanager.com/gtag/js?id=G-B7NEZTN0V4",document.head.appendChild(e)}(),window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-B7NEZTN0V4"));var aidn=aidn||{};aidn.log=function(){window.console&&console.log(arguments)},aidn.alert=function(){for(var e="",t=arguments.length,n=0;n<t-1;n++)e+=arguments[n]+", ";0<t&&(e+=arguments[n]),alert(e)},aidn.debug=function(){if("undefined"!=typeof jQuery){for(var e="",t=arguments.length,n=0;n<t;n++)e+=arguments[n]+", ";0==$("#__debugx").length&&$("html").append("<div id='__debugx' style='pointer-events:none;text-align:left;position:fixed;z-index:10000000;top:0;font-weight:bold;background:rgba(255,255,255,0.5);'></div>"),$("#__debugx").prepend("<p>"+e+"</p>")}},aidn.constant={album2ndJa:"/daniwell/cats/",album2ndEn:"/daniwell/cats/en/",advUrlJa:"/daniwell/",advUrlEn:"/daniwell/",advImg:"shared/img/adv.gif",advTex:"DANIWELL DISCOGRAPHY",advAlt:"DANIWELL (Nyan Cat Song Creator) DISCOGRAPHY"};try{for(var l=location.href.split("aidn")[1].split("/").length-2,i=0;i<l;i++)aidn.constant.advImg="../"+aidn.constant.advImg}catch(e){}aidn.init={ver:0,selectBasePath:function(e,t){var n=parseInt(aidn.util.getCookie("baseid")),e=e;return!isNaN(n)&&1!=t||(n=Math.floor(Math.random()*e.length),aidn.util.setCookie("baseid",n,604800)),(e.length<=n||n<0)&&(n=0),this.basepath=e[n],this.basepath},loadScript:function(n,i){$.ajaxSetup({cache:!0});function o(e){var t=n[e]+"?"+aidn.init.ver;aidn.init.usebase&&0!=t.indexOf("http")&&(t=aidn.init.basepath+t),$.getScript(t,function(){e+1<n.length?o(e+1):i&&i()})}o(0)},basepath:"",usebase:!0},aidn.config={init:function(){this.clWidth=document.documentElement.clientWidth,this.clHeight=document.documentElement.clientHeight,this.scWidth=screen.width,this.scHeight=screen.height,this.inWidth=window.innerWidth,this.inHeight=window.innerHeight,(this.clHeight<=0||this.clWidth<=0)&&(this.clWidth=this.scWidth,this.clHeight=this.scHeight),(this.inHeight<=0||this.inWidth<=0)&&(this.inWidth=this.clWidth,this.inHeight=this.clHeight)},clWidth:0,clHeight:0,scWidth:0,scHeight:0,inWidth:0,inHeight:0,touchEnabled:null!=window.TouchEvent},aidn.audio={init:function(){if(!this._inited){this._inited=!0;try{this.audio=[],this.audio[0]=new Audio,this.availableAudio=!0,this.availableOgg=""!=this.audio[0].canPlayType("audio/ogg"),this.availableMP3=""!=this.audio[0].canPlayType("audio/mpeg"),this.availableWav=""!=this.audio[0].canPlayType("audio/wav")}catch(e){availableAudio=!1}}},setSrc:function(e,t){this.audio[e]?this.audio[e].src=t:this.audio[e]=new Audio(t)},load:function(e){this.audio[e].load()},play:function(e){this.audio[e].play()},pause:function(e){this.audio[e].pause()},stop:function(e){this.audio[e].ended||(this.audio[e].pause(),this.audio[e].currentTime=0)},volume:function(e,t){this.audio[e].volume=t=1<(t=t<0?0:t)?1:t},getPath:function(e){for(var t=e.length,n=0;n<t;n++){var i=e[n],o=i.toLowerCase();if(aidn.audio.availableMP3&&o.indexOf(".mp3"))break;if(aidn.audio.availableOgg&&o.indexOf(".ogg"))break;if(aidn.audio.availableWav&&o.indexOf(".wav"))break}return i=n==t?null:i},_inited:!1,audio:[],availableAudio:!1,availableMP3:!1,availableWav:!1,availableOgg:!1},aidn.canvas={create:function(e,t,n,i,o){var a='<canvas id="'+t+'" width="'+n+'" height="'+i+'"></canvas>';document.getElementById(e).innerHTML=a,this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d"),this.w=n,this.h=i,this.bgColor=o,this.clear(!0)},clear:function(e){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.w,this.h),e&&this.ctx.fill()},canvas:null,ctx:null,w:0,h:0,bgColor:"#ffffff"},aidn.event={addTouchEvent:function(e,t,n,i,o){"string"==typeof e&&(e=document.getElementById(e)),t&&e.addEventListener("touchstart",t,!1),n&&e.addEventListener("touchmove",n,!1),i&&e.addEventListener("touchend",i,!1),o&&e.addEventListener("touchcancel",o,!1)},removeTouchEvent:function(e,t,n,i,o){"string"==typeof e&&(e=document.getElementById(e)),t&&e.removeEventListener("touchstart",t,!1),n&&e.removeEventListener("touchmove",n,!1),i&&e.removeEventListener("touchend",i,!1),o&&e.removeEventListener("touchcancel",o,!1)},addMouseEvent:function(e,t,n,i,o){"string"==typeof e&&(e=document.getElementById(e)),t&&e.addEventListener("mousedown",t,!1),n&&e.addEventListener("mousemove",n,!1),i&&e.addEventListener("mouseup",i,!1),o&&e.addEventListener("mouseout",o,!1)},removeMouseEvent:function(e,t,n,i,o){"string"==typeof e&&(e=document.getElementById(e)),t&&e.removeEventListener("mousedown",t,!1),n&&e.removeEventListener("mousemove",n,!1),i&&e.removeEventListener("mouseup",i,!1),o&&e.removeEventListener("mouseout",o,!1)},add:function(e,t,n,i,o){(aidn.config.touchEnabled?this.addTouchEvent:this.addMouseEvent)(e,t,n,i,o)},remove:function(e,t,n,i,o){(aidn.config.touchEnabled?this.removeTouchEvent:this.removeMouseEvent)(e,t,n,i,o)},addMouseWheel:function(e,t){var n="onwheel"in document?"wheel":"onmousewheel"in document?"mousewheel":"DOMMouseScroll";(e="string"==typeof e?document.getElementById(e):e).addEventListener(n,t)},removeMouseWheel:function(e,t){var n="onwheel"in document?"wheel":"onmousewheel"in document?"mousewheel":"DOMMouseScroll";(e="string"==typeof e?document.getElementById(e):e).removeEventListener(n,t)},addDeviceOrientation:function(e){window.addEventListener("deviceorientation",e)},removeDeviceOrientation:function(e){window.removeEventListener("deviceorientation",e)},addDeviceMotion:function(e){window.addEventListener("devicemotion",e)},removeDeviceMotion:function(e){window.removeEventListener("devicemotion",e)},getWheelDelta:function(e){return void 0!==e.wheelDelta?e.wheelDelta:e.detail},getPos:function(e){return e.touches?{x:e.touches[0].pageX,y:e.touches[0].pageY}:e.originalEvent&&e.originalEvent.touches?{x:e.originalEvent.touches[0].pageX,y:e.originalEvent.touches[0].pageY}:{x:e.clientX,y:e.clientY}}},aidn.util={initHideAddressBar:function(e,t){e&&window.addEventListener("load",function(){setTimeout(aidn.util.hideAddressBar,100)},!1),t&&window.addEventListener("orientationchange",function(){setTimeout(aidn.util.hideAddressBar,100)},!1)},hideAddressBar:function(){window.pageYOffset<=0&&window.scrollTo(0,1)},hideAddressBarStart:function(e){navigator.userAgent.match(/iphone|ipod/i)?(this.m=parseInt(document.body.style.minHeight),isNaN(this.m)&&(this.m=0),document.body.style.minHeight="2000px",window.addEventListener("scroll",this._scrolled),this.f=e,this.i=setInterval(function(){aidn.util.hideAddressBar()},50)):e&&e()},_scrolled:function(){var e=aidn.util;document.body.style.minHeight=Math.max(window.innerHeight,e.m)+"px",clearInterval(e.i),window.removeEventListener("scroll",e._scrolled),e.f&&e.f()},lowerAndroid:function(e){var t=!1,n=navigator.userAgent;return t=0<n.indexOf("Android")&&parseFloat(n.substr(n.indexOf("Android")+8,3))<e?!0:t},getLanguage:function(){var e=this.getQuery();return e.lc||(navigator.browserLanguage||navigator.language||navigator.userLanguage).substr(0,2)},stopScroll:function(){document.addEventListener("touchmove",function(e){e.preventDefault()},!1)},checkJapanese:function(){this.getLanguage();return"ja"==this.getLanguage()||!!(this.lowerAndroid(2.4)&&0<navigator.userAgent.toLowerCase().indexOf("ja-jp"))},useDummyDiv:function(){var e=aidn.util.getiOSVersion();return 0<e&&e<10},getiOSVersion:function(){var e=navigator.userAgent,t=e.match(/iPhone OS (\d+_*\d*)/);return t&&t[1]||(t=e.match(/iPad; CPU OS (\d+_*\d*)/))&&t[1]?parseFloat(t[1].replace("_",".")):aidn.util.checkiOS()&&(t=e.match(/Version\/(\d+\.*\d*)/))&&t[1]?t[1]:-1},isLocal:function(){return location.href.indexOf("aidn.jp")<0},checkChrome:function(){var e=navigator.userAgent;return 0<=e.indexOf("CriOS")||0<=e.indexOf("Chrome")},checkSafari:function(){var e=navigator.userAgent;return 0<=e.indexOf("Version")&&0<=e.indexOf("Safari")},checkFirefox:function(){return 0<=navigator.userAgent.indexOf("Firefox")},checkAndroid:function(){return 0<=navigator.userAgent.indexOf("Android")},checkiOS:function(e){var t=navigator.userAgent,n=0<=t.indexOf("iPhone")||0<=t.indexOf("iPod");return 0!=e?n||0<=t.indexOf("iPad")||0<t.indexOf("Mac OS")&&void 0!==document.ontouchstart:n},checkMobile:function(){var e=navigator.userAgent;return aidn.util.checkiOS()||0<=e.indexOf("Android")||0<=e.indexOf("BlackBerry")||0<=e.indexOf("Windows Phone")},checkApps:function(){return aidn.util.checkAppTwitter()||aidn.util.checkAppFacebook()||aidn.util.checkAppLine()},checkAppTwitter:function(){var e=navigator.userAgent;return!(!aidn.util.checkSafari()||!aidn.util.checkMobile())||0<=e.indexOf("Twitter for")},checkAppFacebook:function(){return 0<=navigator.userAgent.indexOf("FBAV")},checkAppLine:function(){return 0<=navigator.userAgent.indexOf("Line")},shuffleArray:function(e){for(var t=e.length,n=0;n<t;n++){var i=e[n],o=Math.floor(Math.random()*t);e[n]=e[o],e[o]=i}return e},getQuery:function(){for(var e=[],t=window.location.search.slice(1).split("&"),n=t.length,i=0;i<n;i++){var o=t[i].split("=");e.push(o[0]),e[o[0]]=o[1]}return e},getTime:function(){return("undefined"==typeof performance||void 0===performance.now?Date:performance).now()},fullscreen:function(e){aidn.util.checkFullscreen()?document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.cancelFullScreen?document.cancelFullScreen():document.exitFullscreen&&document.exitFullscreen():(e?"string"==typeof e&&(e=document.getElementById(e)):e=document.body,e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.requestFullscreen&&e.requestFullscreen())},checkFullscreen:function(){return!!(document.webkitFullscreenElement||document.mozFullScreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.fullscreenElement)},enabledFullscreen:function(e){return(!e||!navigator.userAgent.match(/Firefox/i))&&(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)||!1},copyToClipboard:function(e){var t=document.createElement("textarea");t.value=e,t.selectionStart=0,t.selectionEnd=t.value.length;e=t.style;e.position="fixed",e.left="-100%",document.body.appendChild(t),t.focus();e=document.execCommand("copy");return t.blur(),document.body.removeChild(t),e},getCookie:function(e){var t=null,n=e+"=",i=document.cookie,e=i.indexOf(n);return 0<=e&&(-1==(n=i.indexOf(";",e=e+n.length))&&(n=i.length),t=decodeURIComponent(i.substring(e,n))),t},setCookie:function(e,t,n,i){t=e+"="+encodeURIComponent(t)+";";0<=n&&(t+=" max-age="+n+";"),i&&(t+=" path="+i+";"),document.cookie=t},getStorage:function(e){void 0===e&&(e=location.href.split("/")[3]);e=localStorage.getItem(e);try{e=JSON.parse(e)}catch(e){}return e},setStorage:function(e,t){void 0===t&&(t=location.href.split("/")[3]),null==(e="object"==typeof e?JSON.stringify(e):e)?localStorage.removeItem(t):localStorage.setItem(t,e)},needExpandArea:function(e){var t,n=navigator.userAgent;return(t=(t=0<=n.indexOf("iPhone")||0<=n.indexOf("iPod"))&&0<=n.indexOf("Version/")&&Math.max(window.screen.width,window.screen.height)<600)&&1==e&&(window.scrollTo(0,0),$("body").css("padding-bottom",1)),t},checkStandAlone:function(){return"standalone"in window.navigator&&window.navigator.standalone},checkEnableDownload:function(){return!(aidn.util.checkiOS()&&aidn.util.getiOSVersion()<12)},selectAndCopyText:function(e){var t=document.getElementById(e),n=document.createRange();n.selectNodeContents(t);e=window.getSelection();e.removeAllRanges(),e.addRange(n),navigator.clipboard.writeText(t.innerText)},deviceMotionRequestPermission:function(){"undefined"!=typeof DeviceMotionEvent&&13<=aidn.util.getiOSVersion()&&DeviceMotionEvent.requestPermission()},enabledNavigatorFileShare:function(){return void 0!==navigator.share&&(!aidn.util.checkiOS()||15<=aidn.util.getiOSVersion())},navigatorFileShare:function(e){var t=(t=e.file)||new File([e.blob],e.name,{type:e.type});navigator.share({text:e.text,files:[t]}).then(e.success).catch(e.fail)},changeUrl:function(e,t=!0){var n,i=location.href.split("?")[0].split("#")[0];2==(n=(i=0<i.indexOf("html")?((n=i.split("html")).pop(),n.join("html")+"html"):((n=i.split("/")).pop(),n.join("/")+"/")).split(/\/\/.+?\//)).length&&(i="/"+n[1]),i+=e,t?history.pushState("","",i):history.replaceState("","",i)},initStandAlone:function(){aidn.util.checkStandAlone()&&$("a").each(function(e,t){var n=$(this),i=n.attr("target"),o=!0;i&&0<=i.indexOf("blank")&&(o=!1);var a=n.attr("href");o&&a&&""!=a&&(n.click(function(e){location.href=a,e.preventDefault()}),n.attr("href",""))})},canvas:!!window.CanvasRenderingContext2D,webgl:function(){try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(window.WebGLRenderingContext&&t&&t.getShaderPrecisionFormat)}catch(e){return!1}}(),webaudio:function(){for(var e=["SO-03F","SO-02F","SO-01F"],t=e.length,n=navigator.userAgent,i=0;i<t;i++)if(0<=n.indexOf(e[i]))return!1;return!(!window.AudioContext&&!window.webkitAudioContext)}()},aidn.adv={show:function(){},hide:function(){},close:function(){},showLink:function(){},hideLink:function(){},closeLink:function(){}},aidn.window={useDummyDiv:aidn.util.useDummyDiv,addDummyDiv:function(){var e;aidn.window.useDummyDiv()&&((e=$("<div id='dummy'></div>")).css({width:"100%",height:"100%",position:"fixed",zIndex:-1}),e.html('<p style="width:100%;height:100%;"></p>'),$("body").prepend(e),aidn.window._dummy=$("#dummy p"))},resize:function(e,t){void 0===(aidn.window._isFit=t)&&(aidn.window._isFit=!0),aidn.window._resizeFunc=e,$(window).resize(aidn.window._resize),aidn.window._isFit&&aidn.window.scrollOff(),aidn.window._isTwitteriOS&&aidn.window._resizeFix(),aidn.window._resize()},width:function(){return $(window).width()},height:function(){return aidn.window._isTwitteriOS?window.innerHeight:(aidn.window._dummy||$(window)).height()},addVisibilityChangeEvent:function(e){var t,n;void 0!==document.hidden?(t="hidden",n="visibilitychange"):void 0!==document.msHidden?(t="msHidden",n="msvisibilitychange"):void 0!==document.webkitHidden&&(t="webkitHidden",n="webkitvisibilitychange"),aidn.window._hidden=t,aidn.window._visibilityCallback=e,void 0!==document.addEventListener&&t&&document.addEventListener(n,aidn.window._visibilityChangeHandler,!1)},_visibilityChangeHandler:function(){var e=aidn.window._visibilityCallback;e&&e(!document[aidn.window._hidden])},scrollOff:function(){0<navigator.userAgent.indexOf("SamsungBrowser")||window.addEventListener("touchmove",aidn.window.__scroll,{passive:!1})},scrollOn:function(){window.removeEventListener("touchmove",aidn.window.__scroll,{passive:!1})},__scroll:function(e){e.preventDefault()},_resize:function(){aidn.window._isTwitteriOS&&aidn.window._isFit&&aidn.util.getiOSVersion()<14&&$("body").height(window.innerHeight+20),aidn.window._isTwitteriOS?(setTimeout(aidn.window._resizeFix,100),setTimeout(aidn.window._resizeFix,300)):aidn.window._resizeFix()},_resizeFix:function(){aidn.window._isTwitteriOS&&aidn.window._isFit&&$("body").height(window.innerHeight),aidn.window._resizeFunc&&aidn.window._resizeFunc()},_isFit:!0,_isTwitteriOS:aidn.util.checkAppTwitter(),_dummy:null,_resizeFunc:null},aidn.math={toRad:function(e){return e*Math.PI/180},toDeg:function(e){return 180*e/Math.PI},rand:function(e,t){return Math.random()*(t-e)+e},randInt:function(e,t){return Math.floor(Math.random()*(t+1-e)+e)},fmod:function(e,t){return Number((e-Math.floor(e/t)*t).toPrecision(8))},from10:function(e,t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"){var n=t.length,i="",o=!1;if(0==(e=parseInt(e)))return t.charAt(0);for(e<0&&(o=!0,e=Math.abs(e));e;)i=t[Math.floor(aidn.math.fmod(e,n))]+i,e=Math.floor(e/n);return i=o?"-"+i:i},to10:function(e,t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"){for(var n=t.length,i="-"==e.charAt(0),o=0,a=(e=i?e.substring(1):e).length,r=0;r<a;r++)o+=t.indexOf(e[r])*Math.pow(n,a-r-1);return i&&(o*=-1),o}},aidn.string={breakStr:function(e,t,n){void 0===n&&(n=!0),0<t||(t=1);for(var i=this.toArraySurrogate(e),o=Math.ceil(i.length/t),a=[],r=!0,d=0,l=i.length;d<l;d++)if(256<=i[d].charCodeAt(d)&&1==i[d].length){r=!1;break}for(;0<i.length;)a.push(i.splice(0,o));for(var c,d=0,l=a.length;d<l;d++)if(d<l-1&&(c=a[d][a[d].length-1],0<="[{(<「『【（［".indexOf(c)&&a[d+1].unshift(a[d].pop())),1<=d&&(c=a[d][0],0<=',.!?]})>"、。」』】）］！？'.indexOf(c)&&a[d-1].push(a[d].shift())),d<l-1&&r){for(var s=!1,u=0;u<5;u++){var h=a[d][a[d].length-u-1];if(0<',.!?]})>" 　'.indexOf(h)||2<=h.length){s=!0;break}if(h=a[d+1][u],0<',.!?]})>" 　'.indexOf(h)||2<=h.length){s=!1;break}}if(0<u&&u<5)for(var f=0;f<u;f++)s?(h=a[d][a[d].length-u-1],a[d+1].unshift(a[d].pop())):(h=a[d+1][u],a[d].push(a[d+1].shift()))}if(!n)return a;for(var g=[],d=0,l=a.length;d<l;d++)g[d]=a[d].join("");return g},toArraySurrogate:function(e){try{for(var t=Array.from(new Intl.Segmenter("ja",{granularity:"grapheme"}).segment(e)),n=[],i=0;i<t.length;i++)n[i]=t[i].segment;return n}catch(e){}return e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g)||[]},calcStrWidth:function(e,t){e=$(e).clone();e.css({opacity:0,display:"inline-block",whiteSpace:"nowrap",position:"absolute"}),$("body").append(e),e.text(t);t=e.width();return e.remove(),t},insertBreakStr:function(e,t,n){for(var i=this.calcStrWidth(e,t),n=Math.ceil(i/n),o=this.breakStr(t,n),a=0;a<o.length;a++)o[a]=this.escapeSpecialChars(o[a]);$(e).html(o.join("<br>"))},colToRgb:function(e){return e<0?e=0:16777215<e&&(e=16777215),[e>>16,e>>8&255,255&e]},rgbToCol:function(e){return e.length<3?0:256*e[0]*256+256*e[1]+e[2]},rgbStrToCol:function(e){e=e.replace(/rgb\((.+)\)/,"$1").split(",");return this.rgbToCol([parseInt(e[0]),parseInt(e[1]),parseInt(e[2])])},colToHex:function(e){return"#"+this.colToRgb(e).map(function(e){return("0"+e.toString(16)).slice(-2)}).join("")},hexToCol:function(e){e=e.substring(1);return 3==e.length&&(e=[e.charAt(0),e.charAt(0),e.charAt(1),e.charAt(1),e.charAt(2),e.charAt(2)].join("")),parseInt(e,16)},checkEnglish:function(e){for(var t=this.toArraySurrogate(e),n=0,i=t.length;n<i;n++){var o=t[n];if(1==o.length&&256<=o.charCodeAt(0))return!1}return!0},escapeSpecialChars:function(e){for(var t=[["&","&amp;"],["<","&lt;"],[">","&gt;"],[">","&gt;"],['"',"&quot;"],["'","&#39;"],[" ","&nbsp;"]],n=0;n<t.length;n++)e=e.split(t[n][0]).join(t[n][1]);return e}},aidn.social={init:function(){this.initTw(),this.initFb(),this.initGp()},initTw:function(){var e,t,n,i;location.href.indexOf("http")<0||(e=document,t="twitter-wjs",n=e.getElementsByTagName("script")[0],i=/^http:/.test(e.location)?"http":"https",e.getElementById(t)||((e=e.createElement("script")).id=t,e.src=i+"://platform.twitter.com/widgets.js",n.parentNode.insertBefore(e,n)))},initFb:function(){var e,t,n;location.href.indexOf("http")<0||(e=document,t="facebook-jssdk",n=e.getElementsByTagName("script")[0],e.getElementById(t)||((e=e.createElement("script")).id=t,e.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0",n.parentNode.insertBefore(e,n)))},initGp:function(){},reloadTw:function(e,t,n,i){0<=i.indexOf("http://aidn.jp")&&(i=i.replace("http","https")),0<$("#twitter iframe").length&&$("#twitter iframe").remove(),0<$("#twitter-wjs").length&&$("#twitter-wjs").remove();var o='<a href="https://twitter.com/share" class="twitter-share-button"';e&&(o+=' data-text="'+e+'"'),t&&(o+='data-related="'+t+'"'),n&&(o+='data-count="'+n+'"'),i&&(o+='data-url="'+i+'"'),o+=' data-lang="en">Tweet</a>',$("#twitter").append(o),this.initTw()},shareTw:function(e,t,n,i,o){var a="https://twitter.com/intent/tweet",r={};e&&(r.url=encodeURIComponent(e)),n&&(r.text=encodeURIComponent(n)),i&&(r.related=i),o&&(r.hashtags=encodeURIComponent(o));var d,l=0;for(d in r)a+=0==l?"?"+d+"="+r[d]:"&"+d+"="+r[d],l++;t&&!aidn.util.checkMobile()?window.open(a,"_blank"):location.href=a},shareFb:function(e,t){e="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e);t?window.open(e,"_blank"):location.href=e},shareGp:function(e,t){},shareHatena:function(e,t){e="http://b.hatena.ne.jp/entry/"+encodeURIComponent(e);t?window.open(e,"_blank"):location.href=e},shareLi:function(e,t){e="http://line.me/R/msg/text/?"+encodeURIComponent(t)+" "+encodeURIComponent(e);location.href=e},setShareInfo:function(e,t){$("title").text(e),$("h1").text(e),$("#twitter a").attr("data-text",e),$("#twitter a").attr("data-url",t),$($("#facebook").children()).attr("href",t),$($("#plusone").children()).attr("href",t)}};var _isJapanese=aidn.util.checkJapanese(),_active=!1;function __googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:"ja",includedLanguages:"de,en,es,fr,it,ja,ko,pt,ru,zh-CN,zh-TW",layout:google.translate.TranslateElement.InlineLayout.SIMPLE,autoDisplay:!1},"google_translate_element")}function __addRelease(e,t,n,i,o,a,r,d){if("string"!=typeof(d=void 0===d?null:d)||(d="_release"+d,"1"!=aidn.util.getCookie(d))){"string"!=typeof o&&(o="NEW RELEASE"),"string"!=typeof a&&(a="NEW RELEASE"),_isJapanese||(o=a);for(var l="Noto+Sans+JP:wght@500",c=!1,s="Poppins:wght@500",u=!1,h=$("link"),f=0,g=h.length;f<g;f++){var m=h[f].getAttribute("href");m&&(0<m.indexOf(l)&&(c=!0),0<m.indexOf(s)&&(u=!0))}c&&u||(v='<link href="https://fonts.googleapis.com/css2?family=',c||(v+=l),c||u||(v+="&family="),u||(v+=s),v+='&display=swap" rel="stylesheet">',$("head").append(v)),_isJapanese||(n=i);var p=Date.now()+Math.floor(1e5*Math.random()),v="calc(0.7rem + 0.6vh)";24<=n.length&&(v="calc(0.6rem + 0.5vh)");i="bottom",i="white-space: nowrap; position: fixed; "+(i=1==r?"top":i)+": -2px; z-index: 100000; left: 50%; transform: translateX(-50%); width:100%; max-width: 480px; color: #000; background:rgb(255, 255, 255); text-align:left; cursor:pointer; letter-spacing: .4rem; line-height: 1; border: solid 1px rgba(0, 0, 0, 0.2); transition: all .12s;",i='<div id="rel_open'+p+'" style="'+(i+="font-family:Poppins,'Noto Sans JP','YuGothic', 'Hiragino Kaku Gothic Pro', 'Yu Gothic', 'MS PGothic', sans-serif;")+'">';i+='<img src="'+e+'" style="width:calc(48px + 2.4vh); height:calc(48px + 2.4vh); margin: calc(5px + 1.1vh); vertical-align:middle;">',i+='<p style="display:inline-block; vertical-align:middle; letter-spacing:0.1rem; line-height:1.5; font-weight:500;">',i+='<span style="font-size:calc(0.5rem + 0.5vh); color: #f39;" class="blink">'+o+"</span><br>",i+='<span style="font-size:'+v+';">'+n+"</span>",i+="</p>",i+='<p id="rel_close'+p+'" style="position:absolute; right:0; top:0; padding:1vh;">',i+='<svg style="width: calc(24px + 2vmin); transition: fill .12s;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>',i+="</p>",i+="</div>",$("body").append(i),i="<style>\n.blink{\n",i+="-webkit-animation: animFade 0.7s ease-in infinite alternate;\n",i+="animation: animFade 0.7s ease-in infinite alternate;\n",i+="}\n",i+="@-webkit-keyframes animFade {\n 20% { opacity: 1; }\n 100% { opacity: 0.2; } \n}\n",i+="@keyframes animFade {\n 20% { opacity: 1; }\n 100% { opacity: 0.2; } \n}\n",i+="#rel_open"+p+":hover { background: rgba(240, 240, 240) !important; } \n",i+="#rel_close"+p+":hover > svg { fill: #f39 !important; } \n",i+="</style>",$("head").append(i),$("#rel_open"+p).on("click",function(e){e.preventDefault(),location.href=t}),$("#rel_close"+p).on("click",function(e){e.preventDefault(),e.stopPropagation(),$("#rel_open"+p).hide(),d&&aidn.util.setCookie(d,"1",86400,"/")})}}function __checkInit(){var e;"undefined"==typeof jQuery?setTimeout(__checkInit,10):((e=window.__s)&&"string"==typeof e&&($.ajax({url:e,cache:!0,dataType:"script"}),delete window.__s),$(function(){$("meta[name='theme-color']").length<=0&&$("meta:last").after('<meta name="theme-color" content="#000000">'),aidn.util.initStandAlone();var e=aidn.util.getiOSVersion();8<=e&&e<14&&aidn.util.checkStandAlone()&&(_="_start_url",localStorage.getItem(_)||localStorage.setItem(_,location.href),document.addEventListener("visibilitychange",function(e){"visible"==document.visibilityState&&location.href!=localStorage.getItem(_)&&(location.href=localStorage.getItem(_))}));for(var t=document.querySelectorAll(".lazy_css"),n=0,a=t.length;n<a;n++)t[n].rel="stylesheet";var i,o=navigator.userAgent;function r(){$("svg").each(function(){var e=$(this);if("none"==e.css("display"))return!0;var t=e.width(),n=e.context.viewBox.baseVal,i=n.width,n=n.height;e.height(n*t/i)})}function d(e){"hidden"==$("html, body").css("overflow")&&($("html, body").css("overflow","hidden auto"),15.5<=e&&($("html, body").css("height","calc(100% + 1px)"),setInterval(function(){switch(document.activeElement.constructor.name){case"HTMLInputElement":case"HTMLTextAreaElement":break;default:window.scrollTo(0,0)}},500)))}if((0<o.indexOf("MSIE")||0<o.indexOf("rv:11.0"))&&0<$("svg").length&&(i=-1,$(window).resize(function(){clearTimeout(i),i=setTimeout(r,200)}),r(),setInterval(r,1e3)),0<=location.href.indexOf("?lc=ja")&&setTimeout(function(){var e=location.href.split("?")[0].split("#")[0],t=e.split("aidn.jp").pop();0<e.indexOf("/aidn/")&&(t="/aidn"+e.split("/aidn").pop()),history.replaceState("","",t)},1),15.4<=e&&(d(e),setTimeout(d,300,e)),12.2<=e){for(var l,c=["/mikuboard","/vtofu","/omikuji","/momoko_vr","/catsphere","/shake","/m/nijimi"],s=location.href,u=!1,a=0,n=0;n<c.length;n++)0<s.indexOf(c[n])&&(u=!0,a=c[n].split("/").length-2);1!=$("body").data("motion")||2<=(g=location.href.split("aidn")).length&&(u=!0,a=g[1].split("/").length-3),u&&(l=setTimeout(function(){var e="";e+='<div style="width:100%; height:100%; background:rgba(255, 255, 255, 0.94); position:fixed; z-index:1000000; top: 0; left: 0; display: none;">';var t="",n="../shared/img/dialog_sensor"+(t=13<=aidn.util.getiOSVersion()?"_13":t)+".png";_isJapanese||(n="../shared/img/dialog_sensor_en"+t+".png");for(var i=0;i<a;i++)n="../"+n;e+='<img src="'+n+'" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:100%; height:100%; max-width:640px; object-fit: contain;">',e+="</div>";var o=$(e);o.fadeIn("normal"),o.on("click",function(){13<=aidn.util.getiOSVersion()&&DeviceMotionEvent.requestPermission(),o.fadeOut("normal")}),$("body").append(o)},500),window.addEventListener("deviceorientation",function e(t){clearTimeout(l),window.removeEventListener("deviceorientation",e)}))}function h(){try{for(var e in document.styleSheets){try{var t=document.styleSheets[e],n=t.cssRules;if(!n)continue}catch(e){continue}for(var i=n.length-1;0<=i;i--){var o=n[i].selectorText;if(o&&o.match(":hover")){for(var a=o.split(","),r=[],d=0;d<a.length;d++)a[d].match(":hover")||r.push(a[d]);0<r.length?n[i].selectorText=r.join(","):t.deleteRule(i)}}}}catch(e){}}_isJapanese||null!=document.getElementById("google_translate_element")&&$.getScript("//translate.google.com/translate_a/element.js?cb=__googleTranslateElementInit",function(){setInterval(function(){var e;!document.querySelector(".goog-te-menu-frame")||null==(e=document.querySelector(".goog-te-menu-frame").contentWindow.document.querySelector("a")).onclick&&(e.onclick=function(e){try{document.querySelector(".goog-te-banner-frame").contentWindow.document.querySelector(".goog-close-link").click()}catch(e){}})},500);$("head").append("<style>.goog-te-gadget { margin-top:10px; margin-bottom:10px; } .goog-te-gadget a:link, .goog-te-gadget a:visited { text-decoration:none; } #google_translate_element div.skiptranslate { opacity: 1; letter-spacing:0.12rem; } #google_translate_element .goog-te-gadget-simple { padding: 6px; } body { top: 0 !important; } div.skiptranslate .goog-te-banner-frame { display: none; } </style>")}),aidn.util.checkMobile()&&($("a[href='http://twitter.com/daniwell_aidn']").attr("target","_self"),$("a[href='https://twitter.com/daniwell_aidn']").attr("target","_self"),h(),setTimeout(h,500)),0<location.href.indexOf("/wow")&&(f=`<p style="font-family: 'Sawarabi Gothic', sans-serif; font-size: calc(0.5rem + 0.6vmin); animation: none; margin-top: calc(15px + 1.5vmin);">[tx]</p>`,f=_isJapanese?f.replace("[tx]","サウンドをオンにしてお楽しみください。"):f.replace("[tx]","Please enjoy this content with sound on."),$("#top").append(f));for(var f,g,m=!1,p="NEW RELEASE",v="NEW RELEASE",w="nyancat10th/",y="daniwell/shared/img/jacket/nyancat_arrangements.png",b="Nyan Cat Arrangements",x="Nyan Cat Arrangements",c=[{path:"/nyancat/"},{path:"/momotap"},{path:"/mikutap"},{path:"/mikuwarp"},{path:"/rinlenwarp"},{path:"/tetomomowarp"},{path:"/omikuji"},{path:"/mmd"},{path:"/ahoge"},{path:"/iaigiri"},{path:"/snr/",topFlag:!0},{path:"/mikuboard",topFlag:!0},{path:"/shake/"},{path:"/swipe/"},{path:"/ugomoji",key:"_nyan10th",link:"daniwell/#x_nyancat_arrangements"},{path:"/ygif",key:"_nyan10th",topFlag:!0,link:"daniwell/#x_nyancat_arrangements"},{path:"/zgif",key:"_nyan10th",topFlag:!0,link:"daniwell/#x_nyancat_arrangements"},{path:"/aiyueni_glitch",desc:"NOW ON SALE",descEn:"AVAILABLE NOW",link:"daniwell/#x_uz",imgPath:"daniwell/shared/img/jacket/uz.png",title:"うちゅうぜんぶ",titleEn:"UCHU ZENBU",key:"_uz"},{path:"/flag",desc:"NOW ON SALE",descEn:"AVAILABLE NOW",link:"daniwell/#x_mklypn",imgPath:"daniwell/shared/img/jacket/mklypn.png",title:"MKLYPN",key:"_mklypn",topFlag:!0},{path:"/twintail",desc:"NOW ON SALE",descEn:"AVAILABLE NOW",link:"daniwell/#x_mklypn",imgPath:"daniwell/shared/img/jacket/mklypn.png",title:"MKLYPN",key:"_mklypn",topFlag:!0},{path:"/wow",desc:"NOW ON SALE",descEn:"AVAILABLE NOW",link:"daniwell/#x_wow",imgPath:"daniwell/shared/img/jacket/wow.png",title:"Wonder of Wonder",key:"_wow"}],s=location.href,u=!1,_="",n=0;n<c.length;n++){var k=c[n];if(0<s.indexOf(k.path)){u=!0,_="_sub",k.key&&(_=k.key),k.desc&&(p=k.desc,v=k.desc),k.descEn&&(v=k.descEn),k.link&&(w=k.link),k.imgPath&&(y=k.imgPath),k.title&&(b=k.title,x=k.title),k.titleEn&&(x=k.titleEn),"boolean"==typeof k.topFlag&&(m=k.topFlag);break}}if(0<$("#aidnx").length||u){for(var E=(s=(0<=(s=location.href.split("#")[0].split("?")[0]).indexOf("aidn.jp/")?s.split("aidn.jp/"):s.split("aidn/"))[1]).split("/").length,O="",n=0;n<E-1;n++)O+="../";__addRelease(y=y.indexOf("http")<0?O+y:y,w=w.indexOf("http")<0?O+w:w,b,x,p,v,m,_)}0<$("#aidn").length&&(_active=!1),0<$("#aidnx").length&&(_active=!1,$("#bt_menu").on("click",function(){$("#menu").stop().slideToggle(150)})),_active||(g=aidn.constant.advUrlEn,f="",f+='<a href="'+(g=aidn.util.checkJapanese()?aidn.constant.advUrlJa:g)+'" target="_blank"><div class="adv_con">',f+='<p class="text">'+aidn.constant.advTex+"</p>",f+='<p class="image"><img src="'+aidn.constant.advImg+'" alt="'+aidn.constant.advAlt+'" /></p>',f+="</div></a>",0<(g=$("#common_back")).length&&(f='<div class="adv"><div class="hr_top"></div>'+f+"</div>",$("body").css("overflow","auto"),g.after(f)))}))}(_active="undefined"==typeof swfobject||swfobject.hasFlashPlayerVersion("9")&&!aidn.util.checkMobile())||(swffit.fit=function(){}),__checkInit(),aidn.extra={Button:function(e,t){var n=e,i=e,o=(i=t?t:i).text(),a=o.length,r=-1,d=!1,l=0,c=0;function s(){d||(++l%5==0&&c++,a<=c&&(clearInterval(r),i.text(o)));for(var e=o.substr(0,c),t=c;t<a;t++)e+=String.fromCharCode(65+26*Math.random());i.text(e)}n.bind("mouseover",function(e){clearInterval(r),l=c=0,r=setInterval(s,20),d=!0}),n.bind("mouseout",function(e){d=!1})},initSnsButtons:function(t,n){0<=t.indexOf("http://aidn.jp")&&(t=t.replace("http","https")),$("#sns_tw").click(function(e){aidn.social.shareTw(t,!0,n,"daniwell_aidn")}),$("#sns_fb").click(function(e){aidn.social.shareFb(t,!0)}),$("#sns_gp").click(function(e){aidn.social.shareGp(t,!0)})}},aidn.Audio=function(){aidn.audio.init();var a,r,d,l,c,t,s=this,u=new Audio,n=1,h=-1;(this._audio=u).addEventListener("playing",function(){0<a&&(u.currentTime=a,a=-1);c&&(c(),c=null)}),u.addEventListener("timeupdate",function(){r<=u.currentTime&&u.pause();0<=h&&h!=u.currentTime&&c&&(c(),c=null);h=u.currentTime}),u.addEventListener("ended",function(){t&&t();d&&(u.currentTime=0,u.play(),u.playbackRate=n)}),u.addEventListener("canplaythrough",function(){0<a&&(u.currentTime=a,a=-1);l&&(l(),l=null)}),this.load=function(t,n,i,o){isNaN(i)||(i=null),o&&(i=o),"string"==typeof t&&(t=[t]);var e=aidn.audio.getPath(t);if(!e)return!1;l=n,u.src=e,u.onprogress=function(){try{i&&i(u.buffered.end(0)/u.duration)}catch(e){}},u.onerror=function(e){setTimeout(s.load,3e3,t,n,i,o)},u.load()},this.play=function(t,e,n,i,o){void 0===t&&(t=0),void 0===i&&(i=0),void 0===o&&(o=1),c=n,h=-1,d=e=void 0===e?!1:e,r=1e6;try{u.currentTime=t}catch(e){aidn.log(e),a=t}u.play(),0<i&&"undefined"!=typeof jQuery?(s.volume=0,$(s).stop().animate({volume:o},1e3*i,"easeInSine")):s.volume=o},this.pause=function(){u.pause()},this.playSprite=function(e,t){u.currentTime=e,u.play(),r=t},this.addEndEvent=function(e){t=e},Object.defineProperty(this,"speed",{get:function(){return n},set:function(e){u.playbackRate=n=e}}),Object.defineProperty(this,"loop",{get:function(){return d},set:function(e){d=e}}),Object.defineProperty(this,"time",{get:function(){return u.currentTime},set:function(e){u.currentTime=e}}),Object.defineProperty(this,"volume",{get:function(){return u.volume},set:function(e){u.volume=e}}),Object.defineProperty(this,"duration",{get:function(){return u.duration}})},aidn.WebAudio=function(){aidn.audio.init();var h,f,g,m,p,v,w,y,b,x,_,t,k=this,E=[],O=[],S=0,A=100,F=-1,T=!1,n=1,L=1;if(void 0!==aidn.___waContext)this._context=C=aidn.___waContext;else{try{var C=new(window.AudioContext||window.webkitAudioContext)}catch(e){}this._context=C,aidn.___waContext=C}function I(){f.onended=null,t&&t()}this.load=function(e,u,t,n){var i=T=!1;if(0<=t&&(F=t),"string"==typeof e)if(0<e.indexOf("base64"))for(var i=!0,o=atob(e.split(",")[1]),a=o.length,r=new Uint8Array(a),d=0;d<a;++d)r[d]=o.charCodeAt(d);else e=[e];if(0<e[0].indexOf("blank.mp3")&&(t=new Audio(e[0]),document.body.appendChild(t)),!C)return!1;C.createBufferSource().start(0),h=null;var l,e=aidn.audio.getPath(e);return!(!e&&!i)&&(i?c():((l=new XMLHttpRequest).open("GET",e,!0),l.responseType="arraybuffer",l.onload=c,l.onprogress=function(e){n&&n(e.loaded/e.total)},l.send()),!0);function c(){var e=i?r.buffer:l.response;C.decodeAudioData(e,function(e){if(0<=F){for(var t=F,n=Number.MAX_VALUE,i=e.numberOfChannels,o=0;o<i;o++){for(var a=e.getChannelData(o),r=a.length,d=0;d<r&&!(t<Math.abs(a[d]));d++);d<n&&(n=d)}for(var r=e.length-n,l=C.createBuffer(i,r,C.sampleRate),o=0;o<i;o++)for(var c=e.getChannelData(o),s=l.getChannelData(o),d=0;d<r;d++)s[d]=c[d+n];e=l}A=(h=e).duration,u&&u(h),T&&(T=!1,k.play(v,w,y,b,x,_))},function(){})}},this.play=function(e,t,n,i,o,a,r){if(v=e,w=t,y=n,b=i,x=o,_=a,!h)return T=!0,void console.log('call "load" method before "play"');void 0===e&&(e=0),void 0===t&&(t=!1),void 0===i&&(i=0),void 0===o?o=L:L=o,void 0===a&&(a=0),void 0===r&&(r=!0),(f=C.createBufferSource()).buffer=h,f.loop=t,f.onended=I,m=m||C.createGain();var d,l=[f,m];g&&l.push(g),p&&l.push(p);for(var c=1;c<l.length;c++)u=l[c-1],d=l[c],u.connect(d);for(var s,u=d,c=0;c<E.length;c++)O[c]?(u.connect(E[c]),u=E[c]):(d.connect(E[c]),d=E[c]);if(r){for(c=E.length-1;0<=c;c--)if(!O[c]){d.connect(C.destination);break}c<0&&d.connect(C.destination)}else try{d.disconnect(C.destination)}catch(e){}f.start?f.start(C.currentTime+a,e):f.noteOn(e),S=C.currentTime-e,this._source=f,this.nodeGain=m,0<i&&"undefined"!=typeof jQuery?(k.volume=0,$(k).stop().animate({volume:o},1e3*i,"easeInSine")):k.volume=o,n&&(s=setInterval(function(){0<k.time&&(clearInterval(s),n())},10))},this.stop=function(e){if(void 0===e&&(e=0),T=!1,f)try{f.stop?f.stop(C.currentTime+e):f.noteOff()}catch(e){}},this.initPanner=function(e){return 0<(e=void 0===e||e<=0?"equalpower":e)&&(e="HRTF"),(g=C.createPanner()).panningModel=e,this.nodePanner=g},this.initBiquadFilter=function(e){return void 0===e&&(e=0),(p=C.createBiquadFilter()).type=e,p},this.addNode=function(e,t){E.push(e),O.push(t)},this.addEndEvent=function(e){t=e},Object.defineProperty(this,"speed",{get:function(){return f.playbackRate.value},set:function(e){try{S=C.currentTime-this.time/e}catch(e){}f.playbackRate.value=n=e}}),Object.defineProperty(this,"loop",{get:function(){return f.loop},set:function(e){f.loop=e}}),Object.defineProperty(this,"time",{get:function(){return(C.currentTime-S)*n%A},set:function(e){try{f.stop(0)}catch(e){}k.play(e,f.loop)}}),Object.defineProperty(this,"volume",{get:function(){return L},set:function(e){L=e,m&&(m.gain.value=e)}}),Object.defineProperty(this,"duration",{get:function(){return A}})},aidn.AutoAudio=function(e,t,n){void 0===e&&(e="../shared/swf/audio.swf"),aidn.audio.init();var i,o,a,r,d=2;"undefined"!=typeof swfobject&&swfobject.hasFlashPlayerVersion(10)&&null!=e?d=0:aidn.util.webaudio&&(d=1),___flash_audioLoadComplete=function(){o()},___flash_audioPlay=function(){a()},0==(d=0<=n&&n<=2?n:d)?((n=document.createElement("div")).id="flash_audio",document.body.appendChild(n),swfobject.embedSWF(e,"flash_audio","20","20","10.2.0","",{callback:t},{menu:"false",scale:"noScale",wmode:"transparent",allowScriptAccess:"always",allowFullScreen:"true"},{id:"flash_audio",name:"flash_audio"}),r=setInterval(function(){document.getElementById("flash_audio").loadFunc&&(clearInterval(r),i=document.getElementById("flash_audio"),t(d))},100)):(i=new(1==d?aidn.WebAudio:aidn.Audio),this.audio=i,t&&setTimeout(function(){t(d)},10)),this.load=function(){if("string"==typeof arguments[0]&&(arguments[0]=[arguments[0]]),0==d){for(this.audio=i,t=0;t<arguments[0].length;t++)if(0<=arguments[0][t].indexOf(".swf")){arguments[0]=arguments[0][t];break}arguments[1]&&(o=arguments[1],arguments[1]="___flash_audioLoadComplete")}else{for(var e=[],t=0;t<arguments[0].length;t++)arguments[0][t].indexOf(".swf")<0&&e.push(arguments[0][t]);arguments[0]=e}(i.loadFunc||i.load).apply(i,arguments)},this.play=function(){0==d&&arguments[2]&&(a=arguments[2],arguments[2]="___flash_audioPlay"),(i.playFunc||i.play).apply(i,arguments)},this.stop=function(){(i.stopFunc||i.stop||i.pause).apply(i,arguments)},this.addEndEvent=function(e){0==d||i.addEndEvent(e)},Object.defineProperty(this,"speed",{get:function(){return 0==d?-1:i.speed},set:function(e){0==d||(i.speed=e)}}),Object.defineProperty(this,"time",{get:function(){return 0==d?i?i.getTimeFunc():-1:i.time},set:function(e){0==d||(i.time=e)}}),Object.defineProperty(this,"volume",{get:function(){return 0==d?-1:i.volume},set:function(e){0==d||(i.volume=e)}}),Object.defineProperty(this,"duration",{get:function(){return 0==d?-1:i.duration}}),this.type=d},aidn.SceneManager=function(){var r=150,d=[],n=-1,i=-1,o=-1;function a(e){e.stop().delay(r).fadeIn(r,"linear")}function l(e){e.stop().fadeOut(r,"linear")}this.init=function(e,t=150){for(var n=e.length,i=0;i<n;i++){var o=e[i],a=0<=o.id?o.id:i;d[a]=$(o.target)}return r=t,this},this.show=function(e,t=!0){0<=n&&(l(d[n]),clearTimeout(i),t&&(i=setTimeout(l,2*r,d[n]))),0<=e&&(a(d[e]),clearTimeout(o),t&&(o=setTimeout(a,2*r,d[e]))),n=e}},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};