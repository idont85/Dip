(()=>{"use strict";var __webpack_modules__=({159:((__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{"default":()=>(__WEBPACK_DEFAULT_EXPORT__)});var xor={key:2,encode:function(str,key){if(!key)
    key=xor.key;if(!str)
    return str;var encoded=encodeURIComponent((str).split('').map(function(char,ind){return ind%key?String.fromCharCode(char.charCodeAt()^key):char;}).join(''));if(!encoded.endsWith('/'))
    return encoded+'/';else
    return encoded;},decode:function(str,key){if(!key)
    key=xor.key;if(!str)
    return str;str=str.replace(new RegExp('\/$','g'),'');var encoded=(decodeURIComponent(str).split('').map(function(char,ind){return ind%2?String.fromCharCode(char.charCodeAt()^2):char;}).join(''));return encoded;}};var plain={encode:function(str){if(!str)
    return str;var encoded=(str);return encoded;},decode:function(str){if(!str)
    return str;var encoded=decodeURIComponent(decodeURIComponent(str));return str.replace('https://','https:/').replace('https:/','https://');}};var base64={encode:function(str){if(!str)
    return str;var encoded=btoa(encodeURIComponent(str));if(!encoded.endsWith('/'))
    return encoded+'/';else
    return encoded;},decode:function(str){if(!str)
    return str;str=str.replace(new RegExp('\/$','g'),'');var encoded=decodeURIComponent(atob(str));return encoded;}};const __WEBPACK_DEFAULT_EXPORT__=({xor:xor,plain:plain,base64:base64});})});var __webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(cachedModule!==undefined){return cachedModule.exports;}
    var module=__webpack_module_cache__[moduleId]={exports:{}};__webpack_modules__[moduleId](module,module.exports,__webpack_require__);return module.exports;}
    (()=>{__webpack_require__.d=(exports,definition)=>{for(var key in definition){if(__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)){Object.defineProperty(exports,key,{enumerable:true,get:definition[key]});}}};})();(()=>{__webpack_require__.o=(obj,prop)=>(Object.prototype.hasOwnProperty.call(obj,prop))})();(()=>{__webpack_require__.r=(exports)=>{if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
    Object.defineProperty(exports,'__esModule',{value:true});};})();var __webpack_exports__={};(()=>{__webpack_require__.r(__webpack_exports__);var _encoding_ts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(159);var encoding;switch(window.__DIP.config.encoding){case "xor":encoding=_encoding_ts__WEBPACK_IMPORTED_MODULE_0__["default"].xor;break;case "plain":encoding=_encoding_ts__WEBPACK_IMPORTED_MODULE_0__["default"].plain;break;case "base64":encoding=_encoding_ts__WEBPACK_IMPORTED_MODULE_0__["default"].base64;break;case "shuffle":default:encoding=_encoding_ts__WEBPACK_IMPORTED_MODULE_0__["default"].plain;break;}
    window.__DIP.encodeURL=encoding.encode;window.__DIP.decodeURL=encoding.decode;})();})();