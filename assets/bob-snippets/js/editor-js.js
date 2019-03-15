!function(){return function t(e,n,r){function i(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(o)return o(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){return i(e[a][1][t]||t)},u,u.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}}()({1:[function(t,e,n){!function(){"use strict";var e,n,r=t("./editor-libs/feature-detector.js"),i=t("./editor-libs/console"),o=t("./editor-libs/events.js"),a=(t("./editor-libs/mce-utils"),document.getElementById("static-js")),s=a.dataset.feature,c=document.getElementById("execute"),l=document.querySelector("#console code"),u=document.getElementById("reset");function d(){!function(t){l.classList.add("fade-in");try{new Function(t)()}catch(t){l.textContent="Error: "+t.message}l.addEventListener("animationend",function(){l.classList.remove("fade-in")})}(e.getDoc().getValue())}!document.all&&r.isDefined(s)&&(document.documentElement.classList.add("js"),a.dataset.height&&document.getElementById("editor").classList.add(a.dataset.height),document.getElementById("static").classList.add("hidden"),document.getElementById("live").classList.remove("hidden"),i(),o.register(),n=document.getElementById("editor"),e=CodeMirror(n,{autofocus:!0,inputStyle:"contenteditable",lineNumbers:!0,mode:"javascript",undoDepth:5,tabindex:0,value:a.textContent}),c.addEventListener("click",function(){l.textContent="",d()}),u.addEventListener("click",function(){window.location.reload()}))}()},{"./editor-libs/console":5,"./editor-libs/events.js":7,"./editor-libs/feature-detector.js":8,"./editor-libs/mce-utils":9}],2:[function(t,e,n){e.exports={trackEvent:function(t){"use strict";window.parent.postMessage(t,window.ieConfig&&window.ieConfig.origin?window.ieConfig.origin:"https://aesthetecoding.io")},trackCSSExampleSelection:function(){"use strict";this.trackEvent({category:"Interactive Example - CSS",action:"New CSS example selected",label:"Interaction Events"})},trackRunClicks:function(){"use strict";this.trackEvent({category:"Interactive Example - JS",action:"Clicked run",label:"Interaction Events"})}}},{}],3:[function(t,e,n){var r=t("./mce-utils");e.exports={addClippy:function(){"use strict";new Clipboard(".copy",{target:function(t){var e=t.dataset.clipboardTarget;return e?document.querySelector(e):r.findParentChoiceElem(t).getElementsByTagName("code")[0]}}).on("success",function(t){var e=document.getElementById("user-message");e.classList.add("show"),e.setAttribute("aria-hidden",!1),function(t,e){var n=t.trigger,r=n.offsetParent.offsetTop+n.clientHeight+10+"px",i=n.offsetLeft+"px";e.style.top=r,e.style.left=i}(t,e),window.setTimeout(function(){e.classList.remove("show"),e.setAttribute("aria-hidden",!0)},1e3),t.clearSelection()})},toggleClippy:function(t){"use strict";for(var e=t.querySelector(".copy"),n=document.querySelectorAll(".copy"),r=0,i=n.length;r<i;r++)n[r].classList.add("hidden"),n[r].setAttribute("aria-hidden",!0);e.classList.remove("hidden"),e.setAttribute("aria-hidden",!1)}}},{"./mce-utils":9}],4:[function(t,e,n){e.exports={formatArray:function(t){"use strict";for(var e="",n=0,r=t.length;n<r;n++)"string"==typeof t[n]?e+='"'+t[n]+'"':Array.isArray(t[n])?(e+="Array [",e+=this.formatArray(t[n]),e+="]"):e+=this.formatOutput(t[n]),n<t.length-1&&(e+=", ");return e},formatObject:function(t){"use strict";var e=t.constructor.name;if("String"===e)return`String { "${t.valueOf()}" }`;if(e.match(/^(ArrayBuffer|SharedArrayBuffer|DataView)$/))return e+" {}";if(e.match(/^(Int8Array|Int16Array|Int32Array|Uint8Array|Uint16Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array)$/))return t.length>0?e+" ["+this.formatArray(t)+"]":e+" []";if("Symbol"===e&&void 0!==t)return t.toString();if("Object"===e){var n="",r=!0;for(var i in t)t.hasOwnProperty(i)&&(r?r=!1:n+=", ",n=n+i+": "+this.formatOutput(t[i]));return e+" { "+n+" }"}return t},formatOutput:function(t){"use strict";return void 0===t||null===t||"boolean"==typeof t?String(t):"number"==typeof t?Object.is(t,-0)?"-0":String(t):"string"==typeof t?'"'+t+'"':Array.isArray(t)?"Array ["+this.formatArray(t)+"]":this.formatObject(t)},writeOutput:function(t){"use strict";var e=document.querySelector("#console code"),n=e.textContent,r="> "+t+"\n";e.textContent=n+r}}},{}],5:[function(t,e,n){e.exports=function(){"use strict";var e=t("./console-utils"),n=console.log,r=console.error;console.error=function(t){e.writeOutput(t),r.apply(console,arguments)},console.log=function(){for(var t=[],r=0,i=arguments.length;r<i;r++){var o=e.formatOutput(arguments[r]);t.push(o)}var a=t.join(" ");e.writeOutput(a),n.apply(console,arguments)}}},{"./console-utils":4}],6:[function(t,e,n){e.exports={editTimer:void 0,applyCode:function(t,e,n){var r=n||document.getElementById("example-element");t.replace(/(\/\*)[\s\S]+(\*\/)/g,""),r.style.cssText=t,clearTimeout(this.editTimer),this.editTimer=setTimeout(function(){r.style.cssText?e.parentNode.classList.remove("invalid"):e.parentNode.classList.add("invalid")},500)},choose:function(t){var n=t.querySelector("code");t.classList.add("selected"),n.setAttribute("contentEditable",!0),n.setAttribute("spellcheck",!1),e.exports.applyCode(n.textContent,t)},resetDefault:function(){var t=document.getElementById("default-example"),n=document.getElementById("output");if(t.classList.contains("hidden")){for(var r=n.querySelectorAll("section"),i=0,o=r.length;i<o;i++)r[i].classList.add("hidden"),r[i].setAttribute("aria-hidden",!0);t.classList.remove("hidden"),t.setAttribute("aria-hidden",!1)}e.exports.resetUIState()},resetUIState:function(){for(var t=document.getElementById("example-choice-list").querySelectorAll(".example-choice"),e=0,n=t.length;e<n;e++)t[e].classList.remove("selected")}}},{}],7:[function(t,e,n){var r=t("./clippy"),i=t("./css-editor-utils"),o=t("./analytics"),a=t("./mce-utils");function s(t){"use strict";var e=window.getSelection().getRangeAt(0);t.preventDefault(),t.stopPropagation(),t.clipboardData.setData("text/plain",e.toString()),t.clipboardData.setData("text/html",e.toString())}function c(t){"use strict";var e=t.clipboardData.getData("text/plain"),n=t.target.offsetParent.querySelector("code"),r=n.textContent;t.preventDefault(),t.stopPropagation(),n.innerText=r+"\n"+e,Prism.highlightElement(n)}e.exports={onChoose:function(t){var e=document.querySelector(".selected");if(e&&!t.classList.contains("selected")){var n=Prism.highlight(e.firstChild.textContent,Prism.languages.css);e.firstChild.innerHTML=n,o.trackCSSExampleSelection(),i.resetDefault()}i.choose(t),r.toggleClippy(t)},register:function(){"use strict";var t=document.getElementById("example-choice-list"),n=document.getElementById("editor");!function(){window.onerror=function(t,e,n,r,i){var a=["URL: "+e,"Line: "+n,"Column: "+r,"Error object: "+JSON.stringify(i)].join(" - ");o.trackEvent({category:"Interactive Example - JavaScript Errors",action:a,label:t})}}(),t&&(addPostMessageListener(),function(t){t.addEventListener("cut",s),t.addEventListener("copy",s),t.addEventListener("paste",c),t.addEventListener("keyup",function(t){var e=t.target.parentElement;i.applyCode(e.textContent,e)}),t.addEventListener("click",function(t){var n=t.target;n.classList.contains("example-choice")||(n=a.findParentChoiceElem(n)),n.classList.contains("copy")&&o.trackEvent({category:"Interactive Example - CSS",action:"Copy to clipboard clicked",label:"Interaction Events"}),e.exports.onChoose(n)})}(t)),n&&function(t){t.addEventListener("click",function(t){"execute"===t.target.id&&o.trackRunClicks()})}(n)},trackloadEventEnd:function(t,e){o.trackEvent({category:"Interactive Examples",action:t,label:"Performance Events",value:e})}}},{"./analytics":2,"./clippy":3,"./css-editor-utils":6,"./mce-utils":9}],8:[function(t,e,n){e.exports={isDefined:function(t){"use strict";return void 0===t||void 0!==function(t){var e=void 0;switch(t){case"array-entries":e=Array.prototype.entries;break;case"shared-array-buffer":e=window.SharedArrayBuffer}return e}(t)}}},{}],9:[function(t,e,n){e.exports={findParentChoiceElem:function(t){"use strict";for(var e=t.parentElement,n=e.classList;e&&!n.contains("example-choice");)n=(e=e.parentElement).classList;return e},isPropertySupported:function(t){"use strict";if(void 0===t.property)return!0;for(var e=t.property.split(" "),n=!1,r=document.createElement("div"),i=0,o=e.length;i<o;i++)void 0!==r.style[e[i]]&&(n=!0);return n},openLinksInNewTab:function(t){t.forEach(function(t){t.addEventListener("click",function(e){e.preventDefault(),window.open(t.href)})})},scrollToAnchors:function(t,e){e.forEach(function(e){e.addEventListener("click",function(n){n.preventDefault(),t.querySelector(e.hash).scrollIntoView()})})},showCustomExampleHTML:function(t){"use strict";var e=document.getElementById("default-example");e.classList.add("hidden"),e.setAttribute("aria-hidden",!0),t.classList.remove("hidden"),t.setAttribute("aria-hidden",!1)}}},{}]},{},[1]);