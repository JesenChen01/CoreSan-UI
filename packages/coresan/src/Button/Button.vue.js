/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import { defineProps, defineEmits } from "vue";
const props = defineProps();
console.log("👊 ~ props:", props);
const emit = defineEmits();
const handleClick = (event) => {
    emit("click", event);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.handleClick) },
    ...{ class: (['m-button', `m-button--${__VLS_ctx.type}`]) },
});
// @ts-ignore
[handleClick, type,];
var __VLS_0 = {};
/** @type {__VLS_StyleScopedClasses['m-button']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
const __VLS_base = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
const __VLS_export = {};
export default {};
