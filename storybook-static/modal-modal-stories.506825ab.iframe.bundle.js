"use strict";(self.webpackChunkalfabit_web_next=self.webpackChunkalfabit_web_next||[]).push([[388],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./components/modal/modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ModalChoice:()=>ModalChoice,ModalInfo:()=>ModalInfo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),button_button=__webpack_require__("./components/button/button.tsx"),typography=__webpack_require__("./components/typography/typography.tsx"),transition=__webpack_require__("./node_modules/@headlessui/react/dist/components/transitions/transition.js"),dialog=__webpack_require__("./node_modules/@headlessui/react/dist/components/dialog/dialog.js"),XMarkIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js"),__jsx=react.createElement,Modal=function Modal(_ref){var children=_ref.children,isOpen=_ref.isOpen,onClose=_ref.onClose,title=_ref.title;return __jsx(transition.u,{appear:!0,show:isOpen,as:react.Fragment},__jsx(dialog.V,{as:"div",className:"relative z-10",onClose},__jsx(transition.u.Child,{as:react.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"},__jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})),__jsx("div",{className:"fixed inset-0 overflow-y-auto"},__jsx("div",{className:"flex min-h-full items-center justify-center p-4"},__jsx(transition.u.Child,{as:react.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},__jsx(dialog.V.Panel,{className:"flex flex-col gap-5 w-full max-w-md transform overflow-hidden rounded-lg bg-white p-7 transition-all"},__jsx("div",{className:"flex items-center justify-between"},__jsx(dialog.V.Title,{as:"h3",className:"text-lg font-semibold"},title),__jsx("button",{onClick:onClose},__jsx(XMarkIcon.Z,{className:"w-5 h-5 text-disabled"}))),children))))))};Modal.displayName="Modal";const modal_modal=Modal;try{modal.displayName="modal",modal.__docgenInfo={description:"",displayName:"modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(() => void) & ((value: boolean) => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"any"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},static:{defaultValue:null,description:"",name:"static",required:!1,type:{name:"boolean"}},unmount:{defaultValue:null,description:"",name:"unmount",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},initialFocus:{defaultValue:null,description:"",name:"initialFocus",required:!1,type:{name:"MutableRefObject<HTMLElement | null>"}},__demoMode:{defaultValue:null,description:"",name:"__demoMode",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/modal/modal.tsx#modal"]={docgenInfo:modal.__docgenInfo,name:"modal",path:"components/modal/modal.tsx#modal"})}catch(__react_docgen_typescript_loader_error){}var modal_stories_jsx=react.createElement,ModalStoryInfo=function ModalStoryInfo(args){var _useState=(0,react.useState)(args.isOpen),isOpen=_useState[0],setIsOpen=_useState[1];return modal_stories_jsx(react.Fragment,null,modal_stories_jsx(button_button.Z,{onClick:function onClick(){return setIsOpen(!0)}},"Abrir Modal"),modal_stories_jsx(modal_modal,(0,esm_extends.Z)({},args,{isOpen,onClose:function onClose(){return setIsOpen(!1)}}),modal_stories_jsx(typography.Z,null,"Today, every company I talk to wants to implement a design system from scratch. Unfortunately, the details of a design system are not explored, so often they are not used to the maximum to create a useful user experience."),modal_stories_jsx(typography.Z,null,"New designers can take a look at any of the design patterns listed below to learn best practices and make informed design decisions on their projects."),modal_stories_jsx("div",{className:" flex flex-col gap-3"},modal_stories_jsx(button_button.Z,{onClick:function onClick(){return setIsOpen(!1)}},"Primary Button"),modal_stories_jsx(button_button.Z,{variant:"secondary",onClick:function onClick(){return setIsOpen(!1)}},"Secondary Button"))))},ModalStoryChoice=function ModalStoryChoice(args){var _useState2=(0,react.useState)(args.isOpen),isOpen=_useState2[0],setIsOpen=_useState2[1];return modal_stories_jsx(react.Fragment,null,modal_stories_jsx(button_button.Z,{onClick:function onClick(){return setIsOpen(!0)}},"Abrir Modal"),modal_stories_jsx(modal_modal,(0,esm_extends.Z)({},args,{isOpen,onClose:function onClose(){return setIsOpen(!1)}}),modal_stories_jsx(typography.Z,null,"Your changes will be lost"),modal_stories_jsx("div",{className:" flex flex-col gap-3"},modal_stories_jsx(button_button.Z,null,"Save changes"),modal_stories_jsx(button_button.Z,{variant:"secondary"},"Dont save"))))};const modal_stories={title:"Design System/Molecules/Modal",component:modal_modal,decorators:[function(Story){return modal_stories_jsx("div",{style:{margin:"3em"}},modal_stories_jsx(Story,null))}]};var ModalInfo={args:{isOpen:!1,title:"Modal Info"},render:function render(args){return modal_stories_jsx(ModalStoryInfo,args)}},ModalChoice={args:{isOpen:!1,title:"Do you want to save your changes?"},render:function render(args){return modal_stories_jsx(ModalStoryChoice,args)}};ModalInfo.parameters={...ModalInfo.parameters,docs:{...ModalInfo.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: false,\n    title: 'Modal Info'\n  },\n  render: (args: ModalProps) => {\n    return <ModalStoryInfo {...args} />;\n  }\n}",...ModalInfo.parameters?.docs?.source}}},ModalChoice.parameters={...ModalChoice.parameters,docs:{...ModalChoice.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: false,\n    title: 'Do you want to save your changes?'\n  },\n  render: (args: ModalProps) => {\n    return <ModalStoryChoice {...args} />;\n  }\n}",...ModalChoice.parameters?.docs?.source}}};const __namedExportsOrder=["ModalInfo","ModalChoice"]},"./components/button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_jawa_Desktop_courses_alura_front_end_formacoes_nextjs_e_tailwind_construindo_um_design_system_06_curso_react_eleve_o_nivel_da_sua_documentacao_no_storybook_2_codigo_alfabit_web_next_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_jawa_Desktop_courses_alura_front_end_formacoes_nextjs_e_tailwind_construindo_um_design_system_06_curso_react_eleve_o_nivel_da_sua_documentacao_no_storybook_2_codigo_alfabit_web_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_excluded=["variant","children","className","disabled"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function getVariant(variant,disabled){switch(variant){case"primary":return disabled?"bg-disabled text-disabled":"bg-primary text-white";case"secondary":return disabled?"bg-disabled text-disabled":"bg-quaternary text-primary";default:return disabled?"text-disabled":"text-primary"}}var Button=function Button(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,children=_ref.children,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,disabled=_ref.disabled,rest=(0,_home_jawa_Desktop_courses_alura_front_end_formacoes_nextjs_e_tailwind_construindo_um_design_system_06_curso_react_eleve_o_nivel_da_sua_documentacao_no_storybook_2_codigo_alfabit_web_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("button",(0,_home_jawa_Desktop_courses_alura_front_end_formacoes_nextjs_e_tailwind_construindo_um_design_system_06_curso_react_eleve_o_nivel_da_sua_documentacao_no_storybook_2_codigo_alfabit_web_next_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:"rounded-md px-6 py-2 ".concat(getVariant(variant,disabled)," ").concat(className),disabled},rest),children)};Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/button/button.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"components/button/button.tsx#button"})}catch(__react_docgen_typescript_loader_error){}},"./components/typography/typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography});var _home_jawa_Desktop_courses_alura_front_end_formacoes_nextjs_e_tailwind_construindo_um_design_system_06_curso_react_eleve_o_nivel_da_sua_documentacao_no_storybook_2_codigo_alfabit_web_next_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_jawa_Desktop_courses_alura_front_end_formacoes_nextjs_e_tailwind_construindo_um_design_system_06_curso_react_eleve_o_nivel_da_sua_documentacao_no_storybook_2_codigo_alfabit_web_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_excluded=["children","element","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,textVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)("text-gray-primary text-sm font-normal",{variants:{variant:{primary:"text-gray-primary",secondary:"text-gray-secondary",tertiary:"text-gray-tertiary"},size:{xs:"text-xs",sm:"text-sm",md:"text-md",xl:"text-xl",title1:"text-txl",title2:"text-tlg",title3:"text-tmd"},defaultVariants:{variant:"primary",size:"md"}}}),Typography=function Typography(_ref){var children=_ref.children,_ref$element=_ref.element,element=void 0===_ref$element?"p":_ref$element,className=_ref.className,rest=(0,_home_jawa_Desktop_courses_alura_front_end_formacoes_nextjs_e_tailwind_construindo_um_design_system_06_curso_react_eleve_o_nivel_da_sua_documentacao_no_storybook_2_codigo_alfabit_web_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(element,(0,_home_jawa_Desktop_courses_alura_front_end_formacoes_nextjs_e_tailwind_construindo_um_design_system_06_curso_react_eleve_o_nivel_da_sua_documentacao_no_storybook_2_codigo_alfabit_web_next_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:"".concat(textVariants(rest)," ").concat(className)},rest),children)};Typography.displayName="Typography";try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "tertiary" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "xl" | "title1" | "title2" | "title3" | null'}},defaultVariants:{defaultValue:null,description:"",name:"defaultVariants",required:!1,type:{name:'"variant" | "size" | null'}},element:{defaultValue:{value:"p"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/typography/typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"components/typography/typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}}}]);