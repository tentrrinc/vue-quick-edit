!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).QuickEdit={})}(this,function(e){"use strict";var t=function(e){return e.reduce(function(e,t){return e[t]=t,e},{})},n=t(["display","edit"]),i=t(["input","rawInput","show","close","invalid","focusin","focusout"]),u=t(["boolean","checkbox","input","password","radio","select","textarea","url","time"]),a=t(["ok","cancel","ignore"]),s={name:"QuickEdit",props:{buttonOkText:{type:String,default:"Ok"},buttonCancelText:{type:String,default:"Cancel"},emptyText:{type:String,default:"Empty"},booleanYesText:{type:String,default:"Yes"},booleanNoText:{type:String,default:"No"},type:{type:String,default:u.input},options:{type:Array,default:function(){return[]}},mode:{type:String,default:a.ok,validator:function(e){return!!a[e]}},value:{type:[String,Array,Boolean,Number],default:""},placeholderValue:{type:String,default:""},classes:{type:Object,default:function(){return null}},validator:{type:Function,default:null},showButtons:{type:Boolean,default:!0},startOpen:{type:Boolean,default:!1},keepOpen:{type:Boolean,default:!0},formatMultiple:{type:Function,default:function(e){return e.join(", ")}},prefix:{type:String,default:""}},computed:{isEmpty:function(){return""===this.prettyValue||null===this.prettyValue},isEditing:function(){return n.edit===this.inputState},isEnabled:function(){return!this.$attrs.disabled&&""!==this.$attrs.disabled},isRequired:function(){return this.$attrs.required||""===this.$attrs.required},isMultiple:function(){return this.displayOptions.length&&(this.types.select===this.type||this.types.checkbox===this.type||this.types.radio===this.type)},prettyValue:function(){return this.isMultiple?Array.isArray(this.theValue)?this.formatMultiple(this.theValue.map(this.getDisplayOption)):this.getDisplayOption(this.theValue):this.prefix?this.prefix+" "+this.theValue:this.theValue},displayOptions:function(){var e=this.options[0];return e&&"string"==typeof e?this.options.map(function(e){return{value:e,text:e}}):this.options},displayValue:function(){if(this.types.boolean===this.type)return this.theValue?this.booleanYesText:this.booleanNoText;if(this.types.password===this.type)return"•".repeat(8);if(this.types.time===this.type){var e=parseInt(this.value.substring(0,2));return this.isClient12Hour()?this.theValue+" "+(e>=12?"PM":"AM"):this.theValue}return this.isEmpty?this.emptyText:this.prettyValue},classNames:function(){return Object.assign({},this.defaultClasses,this.classes)},tabIndex:function(){return this.$attrs.tabindex||0}},watch:{value:function(e){this.setValue(e)}},data:function(){return{inputState:this.startOpen?n.edit:n.display,theValue:"",inputValue:"",types:u,defaultClasses:{buttonCancel:"vue-quick-edit__button vue-quick-edit__button--cancel",buttonOk:"vue-quick-edit__button vue-quick-edit__button--ok",buttons:"vue-quick-edit__buttons",input:"vue-quick-edit__input",inputTime:"vue-quick-edit__input-time",link:"vue-quick-edit__link",isClickable:"vue-quick-edit__link--is-clickable",isEmpty:"vue-quick-edit__link--is-empty",isRequired:"vue-quick-edit__link--is-required",wrapper:"vue-quick-edit",formGroup:"vue-quick-edit__form-group",inputIcon:"vue-quick-edit__input-icon",formControl:"vue-quick-edit__form-control"}}},methods:{handleClick:function(){this.isEnabled&&(this.types.boolean===this.type?(this.theValue=!this.theValue,this.$emit(i.input,this.theValue)):this.show())},handleFocus:function(e){var t=e.type;i.focusin===t?(clearTimeout(this._handleFocus),this.$emit(i.focusin,this)):(this._handleFocus=setTimeout(this.clickOutside,0),this.$emit(i.focusout,this))},show:function(e){void 0===e&&(e=!0),this.inputValue=this.theValue,this.inputState=n.edit,this.$emit(i.show,this.theValue),e&&this.focus()},close:function(e){void 0===e&&(e=!0),this.inputState=n.display,this.$emit(i.close,this.theValue),e&&this.focus()},autoUpdate:function(){this.showButtons||this.ok()},ok:function(e){if(void 0===e&&(e=!0),this.validator){var t=this.validator(this.inputValue);if(t)return void this.$emit(i.invalid,this.theValue,t)}this.theValue=this.inputValue,this.$emit(i.input,this.theValue),this.$emit(i.rawInput,this.inputValue),this.keepOpen||this.close(e)},focus:function(){var e=this;setTimeout(function(){var t=e.isEditing?"input,select,textarea":"span",n=e.$refs.el&&e.$refs.el.querySelector(t);n&&n.focus()},0)},setValue:function(e){this.theValue=e,this.inputValue=e},clickOutside:function(){this.inputState===n.edit&&(a.ok===this.mode?this.ok(!1):a.cancel===this.mode&&this.close(!1))},getDisplayOption:function(e){var t=this.displayOptions.find(function(t){return t.value===e});return t?t.text:""}},created:function(){this.setValue(this.value)},mounted:function(){void 0!==window.QUICKEDIT_DEFAULT_CLASSES&&(this.defaultClasses=Object.assign({},this.defaultClasses,window.QUICKEDIT_DEFAULT_CLASSES))}};var l,o=function(e,t,n,i,u,a,s,l,o,r){"boolean"!=typeof s&&(o=l,l=s,s=!1);var c,d="function"==typeof n?n.options:n;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,u&&(d.functional=!0)),i&&(d._scopeId=i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=c):t&&(c=s?function(){t.call(this,r(this.$root.$options.shadowRoot))}:function(e){t.call(this,l(e))}),c)if(d.functional){var p=d.render;d.render=function(e,t){return c.call(t),p(e,t)}}else{var y=d.beforeCreate;d.beforeCreate=y?[].concat(y,c):[c]}return n},r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var c={};var d=function(e){return function(e,t){return function(e,t){var n=r?t.media||"default":e,i=c[n]||(c[n]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var u=t.source;if(t.map&&(u+="\n/*# sourceURL="+t.map.sources[0]+" */",u+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",t.media&&i.element.setAttribute("media",t.media),void 0===l&&(l=document.head||document.getElementsByTagName("head")[0]),l.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(u),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var a=i.ids.size-1,s=document.createTextNode(u),o=i.element.childNodes;o[a]&&i.element.removeChild(o[a]),o.length?i.element.insertBefore(s,o[a]):i.element.appendChild(s)}}}(e,t)}},p=s,y=function(){var e,t,n,i,u=this,a=u.$createElement,s=u._self._c||a;return s("div",{ref:"el",class:u.classNames.wrapper},[u.isEditing&&u.isEnabled?[u.types.select===u.type?s("select",u._b({directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],class:u.classNames.input,attrs:{tabindex:u.tabIndex},on:{focusin:u.handleFocus,focusout:u.handleFocus,keypress:[function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.ok(e)},function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"escape",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:u.close(e)}],change:function(e){var t=Array.prototype.filter.call(e.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});u.inputValue=e.target.multiple?t:t[0]}}},"select",u.$attrs,!1),[s("option",{directives:[{name:"show",rawName:"v-show",value:u.$attrs.placeholder,expression:"$attrs.placeholder"}],domProps:{value:u.placeholderValue}},[u._v(u._s(u.$attrs.placeholder))]),u._v(" "),u._l(u.displayOptions,function(e){return s("option",{key:e.value,attrs:{disabled:e.disabled},domProps:{value:e.value}},[u._v("\n        "+u._s(e.text)+"\n      ")])})],2):u.types.textarea===u.type?s("textarea",u._b({directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],class:u.classNames.input,attrs:{tabindex:u.tabIndex},domProps:{value:u.inputValue},on:{focusin:u.handleFocus,focusout:u.handleFocus,keyup:u.autoUpdate,keypress:[function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey?u.ok(e):null},function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"escape",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:u.close(e)}],input:function(e){e.target.composing||(u.inputValue=e.target.value)}}},"textarea",u.$attrs,!1)):u.types.radio===u.type||u.types.checkbox===u.type?u._l(u.displayOptions,function(e){return[s("label",{key:e.value,on:{focusin:u.handleFocus,focusout:u.handleFocus}},[u._v("\n        "+u._s(e.text)+"\n        "),"checkbox"===u.type?s("input",{directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],attrs:{disabled:e.disabled,tabindex:u.tabIndex,type:"checkbox"},domProps:{value:e.value,checked:Array.isArray(u.inputValue)?u._i(u.inputValue,e.value)>-1:u.inputValue},on:{keypress:[function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.ok(e)},function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"escape",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:u.close(e)}],change:function(t){var n=u.inputValue,i=t.target,a=!!i.checked;if(Array.isArray(n)){var s=e.value,l=u._i(n,s);i.checked?l<0&&(u.inputValue=n.concat([s])):l>-1&&(u.inputValue=n.slice(0,l).concat(n.slice(l+1)))}else u.inputValue=a}}}):"radio"===u.type?s("input",{directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],attrs:{disabled:e.disabled,tabindex:u.tabIndex,type:"radio"},domProps:{value:e.value,checked:u._q(u.inputValue,e.value)},on:{keypress:[function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.ok(e)},function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"escape",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:u.close(e)}],change:function(t){u.inputValue=e.value}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],attrs:{disabled:e.disabled,tabindex:u.tabIndex,type:u.type},domProps:{value:e.value,value:u.inputValue},on:{keypress:[function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.ok(e)},function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"escape",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:u.close(e)}],input:function(e){e.target.composing||(u.inputValue=e.target.value)}}})])]}):u.prefix?s("div",{class:u.classNames.formGroup},[s("div",{class:u.classNames.inputIcon},["checkbox"===u.type?s("input",u._b({directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],class:u.classNames.formControl,attrs:{tabindex:u.tabIndex,type:"checkbox"},domProps:{checked:Array.isArray(u.inputValue)?u._i(u.inputValue,null)>-1:u.inputValue},on:{focusin:u.handleFocus,focusout:u.handleFocus,keypress:[function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.ok(e)},function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"escape",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:u.close(e)}],change:function(e){var t=u.inputValue,n=e.target,i=!!n.checked;if(Array.isArray(t)){var a=u._i(t,null);n.checked?a<0&&(u.inputValue=t.concat([null])):a>-1&&(u.inputValue=t.slice(0,a).concat(t.slice(a+1)))}else u.inputValue=i}}},"input",u.$attrs,!1)):"radio"===u.type?s("input",u._b({directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],class:u.classNames.formControl,attrs:{tabindex:u.tabIndex,type:"radio"},domProps:{checked:u._q(u.inputValue,null)},on:{focusin:u.handleFocus,focusout:u.handleFocus,keypress:[function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.ok(e)},function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"escape",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:u.close(e)}],change:function(e){u.inputValue=null}}},"input",u.$attrs,!1)):s("input",u._b({directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],class:u.classNames.formControl,attrs:{tabindex:u.tabIndex,type:u.type},domProps:{value:u.inputValue},on:{focusin:u.handleFocus,focusout:u.handleFocus,keypress:[function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.ok(e)},function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"escape",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:u.close(e)}],input:function(e){e.target.composing||(u.inputValue=e.target.value)}}},"input",u.$attrs,!1)),u._v(" "),s("i",[u._v(u._s(u.prefix))])])]):"checkbox"===u.type?s("input",u._b({directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],class:u.classNames.input,attrs:{tabindex:u.tabIndex,type:"checkbox"},domProps:{checked:Array.isArray(u.inputValue)?u._i(u.inputValue,null)>-1:u.inputValue},on:{focusin:u.handleFocus,focusout:u.handleFocus,keyup:u.autoUpdate,keypress:[function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.ok(e)},function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"escape",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:u.close(e)}],change:function(e){var t=u.inputValue,n=e.target,i=!!n.checked;if(Array.isArray(t)){var a=u._i(t,null);n.checked?a<0&&(u.inputValue=t.concat([null])):a>-1&&(u.inputValue=t.slice(0,a).concat(t.slice(a+1)))}else u.inputValue=i}}},"input",u.$attrs,!1)):"radio"===u.type?s("input",u._b({directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],class:u.classNames.input,attrs:{tabindex:u.tabIndex,type:"radio"},domProps:{checked:u._q(u.inputValue,null)},on:{focusin:u.handleFocus,focusout:u.handleFocus,keyup:u.autoUpdate,keypress:[function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.ok(e)},function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"escape",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:u.close(e)}],change:function(e){u.inputValue=null}}},"input",u.$attrs,!1)):s("input",u._b({directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],class:u.classNames.input,attrs:{tabindex:u.tabIndex,type:u.type},domProps:{value:u.inputValue},on:{focusin:u.handleFocus,focusout:u.handleFocus,keyup:u.autoUpdate,keypress:[function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.ok(e)},function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"escape",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:u.close(e)}],input:function(e){e.target.composing||(u.inputValue=e.target.value)}}},"input",u.$attrs,!1)),u._v(" "),u.showButtons?s("div",{class:u.classNames.buttons},[s("button",{class:u.classNames.buttonOk,attrs:{title:u.buttonOkText},on:{click:u.ok,focusin:u.handleFocus,focusout:u.handleFocus}},[u._t("button-ok",[u._v(u._s(u.buttonOkText))])],2),u._v(" "),s("button",{class:u.classNames.buttonCancel,attrs:{title:u.buttonCancelText},on:{click:u.close,focusin:u.handleFocus,focusout:u.handleFocus}},[u._t("button-cancel",[u._v(u._s(u.buttonCancelText))])],2)]):u._e()]:u.isEditing&&u.isEnabled||u.types.time!==u.type?[u._t("prepend"),u._v(" "),s("span",{class:(i={},i[u.classNames.link]=!0,i[u.classNames.isClickable]=u.isEnabled,i[u.classNames.isEmpty]=u.isEmpty,i[u.classNames.isRequired]=u.isRequired&&u.isEmpty,i),attrs:{tabindex:!!u.isEnabled&&u.tabIndex},on:{click:u.handleClick,keypress:function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.handleClick(e)}}},[u._t("default",[u._v(u._s(u.displayValue))],{value:u.displayValue,rawValue:u.theValue})],2),u._v(" "),u._t("append")]:["checkbox"===u.types.time?s("input",{directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],class:(e={},e[u.classNames.link]=!0,e[u.classNames.inputTime]=!0,e[u.classNames.isClickable]=u.isEnabled,e[u.classNames.isEmpty]=u.isEmpty,e[u.classNames.isRequired]=u.isRequired&&u.isEmpty,e),attrs:{disabled:"",tabindex:!!u.isEnabled&&u.tabIndex,required:"",type:"checkbox"},domProps:{checked:Array.isArray(u.inputValue)?u._i(u.inputValue,null)>-1:u.inputValue},on:{click:u.handleClick,keypress:function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.handleClick(e)},change:function(e){var t=u.inputValue,n=e.target,i=!!n.checked;if(Array.isArray(t)){var a=u._i(t,null);n.checked?a<0&&(u.inputValue=t.concat([null])):a>-1&&(u.inputValue=t.slice(0,a).concat(t.slice(a+1)))}else u.inputValue=i}}}):"radio"===u.types.time?s("input",{directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],class:(t={},t[u.classNames.link]=!0,t[u.classNames.inputTime]=!0,t[u.classNames.isClickable]=u.isEnabled,t[u.classNames.isEmpty]=u.isEmpty,t[u.classNames.isRequired]=u.isRequired&&u.isEmpty,t),attrs:{disabled:"",tabindex:!!u.isEnabled&&u.tabIndex,required:"",type:"radio"},domProps:{checked:u._q(u.inputValue,null)},on:{click:u.handleClick,keypress:function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.handleClick(e)},change:function(e){u.inputValue=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:u.inputValue,expression:"inputValue"}],class:(n={},n[u.classNames.link]=!0,n[u.classNames.inputTime]=!0,n[u.classNames.isClickable]=u.isEnabled,n[u.classNames.isEmpty]=u.isEmpty,n[u.classNames.isRequired]=u.isRequired&&u.isEmpty,n),attrs:{disabled:"",tabindex:!!u.isEnabled&&u.tabIndex,required:"",type:u.types.time},domProps:{value:u.inputValue},on:{click:u.handleClick,keypress:function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.handleClick(e)},input:function(e){e.target.composing||(u.inputValue=e.target.value)}}})]],2)};y._withStripped=!0;var f=o({render:y,staticRenderFns:[]},function(e){e&&e("data-v-74c967d8_0",{source:".vue-quick-edit__link {\n  white-space: pre-wrap;\n  color: #0088cc;\n}\n.vue-quick-edit__link--is-clickable {\n  border-bottom: 1px dashed #0088cc;\n  cursor: pointer;\n}\n.vue-quick-edit__link--is-clickable:hover {\n  color: #2a6496;\n  border-color: #2a6496;\n}\n.vue-quick-edit__link--is-empty {\n  font-style: italic;\n  color: gray;\n}\n.vue-quick-edit__link--is-required {\n  color: #dc3545;\n}\n.vue-quick-edit__input {\n  background-color: #f9f9f9;\n  color: #333;\n  border: 1px solid #ccc;\n  height: 32px;\n  padding: 0;\n}\n.vue-quick-edit__input-time {\n  color: #333;\n  padding: 0;\n}\n.vue-quick-edit__input-time:disabled {\n  background-color: #ffffff;\n  border: 0;\n}\n.vue-quick-edit__buttons {\n  margin-top: 8px;\n}\n.vue-quick-edit__button {\n  height: 34px;\n  min-width: 34px;\n  border: 1px solid #ccc;\n}\n.vue-quick-edit__button--ok {\n  color: #fff;\n  background-color: #3276b1;\n  border-color: #357ebd;\n}\n.vue-quick-edit__button--cancel {\n  color: #333;\n  margin-left: 8px;\n  background-color: #fff;\n}\n.vue-quick-edit__input-icon {\n  position: relative;\n}\n.vue-quick-edit__input-icon > i {\n  position: absolute;\n  display: block;\n  transform: translate(0, -50%);\n  top: 50%;\n  pointer-events: none;\n  width: 25px;\n  text-align: center;\n  font-style: normal;\n}\n.vue-quick-edit__input-icon > input {\n  padding-left: 25px;\n  padding-right: 0;\n}\n.vue-quick-edit__input-icon-right > i {\n  right: 0;\n}\n.vue-quick-edit__input-icon-right > input {\n  padding-left: 0;\n  padding-right: 25px;\n  text-align: right;\n}\n[multiple].vue-quick-edit__input,\ntextarea.vue-quick-edit__input {\n  height: unset;\n  min-height: 64px;\n  display: block;\n}\n.vue-quick-edit__input:not(textarea):not([multiple]) + .vue-quick-edit__buttons,\nlabel + .vue-quick-edit__buttons {\n  display: inline;\n  margin-left: 8px;\n}",map:void 0,media:void 0})},p,void 0,!1,void 0,d,void 0);function k(e){k.installed||(k.installed=!0,e.component("QuickEdit",f))}var h={install:k},m=null;"undefined"!=typeof window?m=window.Vue:"undefined"!=typeof global&&(m=global.Vue),m&&m.use(h),e.default=f,e.install=k,Object.defineProperty(e,"__esModule",{value:!0})});
