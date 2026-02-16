(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/providers/SmoothScroll.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SmoothScroll(param) {
    var children = param.children;
    _s();
    var lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": function() {
            // Initialize Lenis
            var lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "SmoothScroll.useEffect": function(t) {
                        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
                    }
                }["SmoothScroll.useEffect"],
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2
            });
            lenisRef.current = lenis;
            // Animation frame loop
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            // Handle anchor links for smooth scrolling
            var handleAnchorClick = {
                "SmoothScroll.useEffect.handleAnchorClick": function(e) {
                    var target = e.target.closest('a[href^="#"]');
                    if (target) {
                        var href = target.getAttribute('href');
                        if (href && href.startsWith('#')) {
                            e.preventDefault();
                            var element = document.querySelector(href);
                            if (element) {
                                lenis.scrollTo(element, {
                                    offset: -60,
                                    duration: 1.2
                                });
                            }
                        }
                    }
                }
            }["SmoothScroll.useEffect.handleAnchorClick"];
            // Handle button clicks that scroll to sections
            var handleButtonClick = {
                "SmoothScroll.useEffect.handleButtonClick": function(e) {
                    var target = e.target.closest('button');
                    if (target) {
                    // Check if there's an onclick that calls scrollToSection
                    // This is handled by the component itself
                    }
                }
            }["SmoothScroll.useEffect.handleButtonClick"];
            document.addEventListener('click', handleAnchorClick);
            // Expose lenis to window for debugging and external access
            window.lenis = lenis;
            // Cleanup
            return ({
                "SmoothScroll.useEffect": function() {
                    document.removeEventListener('click', handleAnchorClick);
                    lenis.destroy();
                    lenisRef.current = null;
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], []);
    return children;
}
_s(SmoothScroll, "EGg8JqRqiLdZLNuaMV97MRehwwE=");
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_spread
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target, key, source[key]);
        });
    }
    return target;
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_object_without_properties_loose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_without_properties_loose
]);
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_object_without_properties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties_loose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_without_properties_loose.js [app-client] (ecmascript)");
;
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties_loose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_array_with_holes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_array_with_holes
]);
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_iterable_to_array_limit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_iterable_to_array_limit
]);
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_non_iterable_rest.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_non_iterable_rest
]);
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_array_like_to_array
]);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_unsupported_iterable_to_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)");
;
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(o, minLen);
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_sliced_to_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_with_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_array_with_holes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array_limit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_iterable_to_array_limit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_non_iterable_rest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)");
;
;
;
;
function _sliced_to_array(arr, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_with_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array_limit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr, i) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr, i) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])();
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_to_primitive.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_to_primitive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
function _to_primitive(input, hint) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_to_property_key.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_to_property_key
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_primitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_primitive.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
function _to_property_key(arg) {
    var key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_primitive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arg, "string");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(key) === "symbol" ? key : String(key);
}
;
}),
"[project]/node_modules/@vercel/analytics/dist/react/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics,
    "track",
    ()=>track
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_property_key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_property_key.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
// src/react/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// package.json
var name = "@vercel/analytics";
var version = "1.5.0";
// src/queue.ts
var initQueue = function() {
    if (window.va) return;
    window.va = function a() {
        for(var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++){
            params[_key] = arguments[_key];
        }
        (window.vaq = window.vaq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return typeof window !== "undefined";
}
function detectEnvironment() {
    try {
        var env = ("TURBOPACK compile-time value", "development");
        if (env === "development" || env === "test") {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function setMode() {
    var mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "auto";
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    var mode = isBrowser() ? window.vam : detectEnvironment();
    return mode || "production";
}
function isProduction() {
    return getMode() === "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function removeKey(key, _1) {
    var _ = _1[key], rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_1, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_property_key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(key)
    ]);
    return rest;
}
function parseProperties(properties, options) {
    if (!properties) return void 0;
    var props = properties;
    var errorProperties = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(properties)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 2), key = _step_value[0], value = _step_value[1];
            if ((typeof value === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(value)) === "object" && value !== null) {
                if (options.strip) {
                    props = removeKey(key, props);
                } else {
                    errorProperties.push(key);
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (errorProperties.length > 0 && !options.strip) {
        throw Error("The following properties are not valid: ".concat(errorProperties.join(", "), ". Only strings, numbers, booleans, and null are allowed."));
    }
    return props;
}
function getScriptSrc(props) {
    if (props.scriptSrc) {
        return props.scriptSrc;
    }
    if (isDevelopment()) {
        return "https://va.vercel-scripts.com/v1/script.debug.js";
    }
    if (props.basePath) {
        return "".concat(props.basePath, "/insights/script.js");
    }
    return "/_vercel/insights/script.js";
}
// src/generic.ts
function inject() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        debug: true
    };
    var _a;
    if (!isBrowser()) return;
    setMode(props.mode);
    initQueue();
    if (props.beforeSend) {
        (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
    }
    var src = getScriptSrc(props);
    if (document.head.querySelector('script[src*="'.concat(src, '"]'))) return;
    var script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.sdkn = name + (props.framework ? "/".concat(props.framework) : "");
    script.dataset.sdkv = version;
    if (props.disableAutoTrack) {
        script.dataset.disableAutoTrack = "1";
    }
    if (props.endpoint) {
        script.dataset.endpoint = props.endpoint;
    } else if (props.basePath) {
        script.dataset.endpoint = "".concat(props.basePath, "/insights");
    }
    if (props.dsn) {
        script.dataset.dsn = props.dsn;
    }
    script.onerror = function() {
        var errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log("[Vercel Web Analytics] Failed to load script from ".concat(src, ". ").concat(errorMessage));
    };
    if (isDevelopment() && props.debug === false) {
        script.dataset.debug = "false";
    }
    document.head.appendChild(script);
}
function track(name2, properties, options) {
    var _a, _b;
    if (!isBrowser()) {
        var msg = "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
        if (isProduction()) {
            console.warn(msg);
        } else {
            throw new Error(msg);
        }
        return;
    }
    if (!properties) {
        (_a = window.va) == null ? void 0 : _a.call(window, "event", {
            name: name2,
            options: options
        });
        return;
    }
    try {
        var props = parseProperties(properties, {
            strip: isProduction()
        });
        (_b = window.va) == null ? void 0 : _b.call(window, "event", {
            name: name2,
            data: props,
            options: options
        });
    } catch (err) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(err, Error) && isDevelopment()) {
            console.error(err);
        }
    }
}
function pageview(param) {
    var route = param.route, path = param.path;
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route: route,
        path: path
    });
}
// src/react/utils.ts
function getBasePath() {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined" || typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env === "undefined") {
        return void 0;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/react/index.tsx
function Analytics(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": function() {
            var _a;
            if (props.beforeSend) {
                (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
            }
        }
    }["Analytics.useEffect"], [
        props.beforeSend
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": function() {
            var _props_basePath;
            inject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                framework: props.framework || "react",
                basePath: (_props_basePath = props.basePath) !== null && _props_basePath !== void 0 ? _props_basePath : getBasePath()
            }, props.route !== void 0 && {
                disableAutoTrack: true
            }, props));
        }
    }["Analytics.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": function() {
            if (props.route && props.path) {
                pageview({
                    route: props.route,
                    path: props.path
                });
            }
        }
    }["Analytics.useEffect"], [
        props.route,
        props.path
    ]);
    return null;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_call_check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
;
function _class_call_check(instance, Constructor) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(instance, Constructor)) throw new TypeError("Cannot call a class as a function");
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_create_class
]);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_array_without_holes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_array_without_holes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)");
;
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr);
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_iterable_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_iterable_to_array
]);
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) {
        return Array.from(iter);
    }
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_non_iterable_spread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_non_iterable_spread
]);
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_to_consumable_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_without_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_array_without_holes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_iterable_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_non_iterable_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)");
;
;
;
;
function _to_consumable_array(arr) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_without_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])();
}
;
}),
"[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lenis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
// package.json
var version = "1.3.17";
// packages/core/src/maths.ts
function clamp(min, input, max) {
    return Math.max(min, Math.min(input, max));
}
function lerp(x, y, t) {
    return (1 - t) * x + t * y;
}
function damp(x, y, lambda, deltaTime) {
    return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
}
function modulo(n, d) {
    return (n % d + d) % d;
}
// packages/core/src/animate.ts
var Animate = /*#__PURE__*/ function() {
    "use strict";
    function Animate() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Animate);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isRunning", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "value", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "from", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "to", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "currentTime", 0);
        // These are instanciated in the fromTo method
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "lerp", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "duration", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "easing", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onUpdate", void 0);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Animate, [
        {
            /**
   * Advance the animation by the given delta time
   *
   * @param deltaTime - The time in seconds to advance the animation
   */ key: "advance",
            value: function advance(deltaTime) {
                var _this_onUpdate, _this;
                if (!this.isRunning) return;
                var completed = false;
                if (this.duration && this.easing) {
                    this.currentTime += deltaTime;
                    var linearProgress = clamp(0, this.currentTime / this.duration, 1);
                    completed = linearProgress >= 1;
                    var easedProgress = completed ? 1 : this.easing(linearProgress);
                    this.value = this.from + (this.to - this.from) * easedProgress;
                } else if (this.lerp) {
                    this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
                    if (Math.round(this.value) === this.to) {
                        this.value = this.to;
                        completed = true;
                    }
                } else {
                    this.value = this.to;
                    completed = true;
                }
                if (completed) {
                    this.stop();
                }
                (_this_onUpdate = (_this = this).onUpdate) === null || _this_onUpdate === void 0 ? void 0 : _this_onUpdate.call(_this, this.value, completed);
            }
        },
        {
            /** Stop the animation */ key: "stop",
            value: function stop() {
                this.isRunning = false;
            }
        },
        {
            /**
   * Set up the animation from a starting value to an ending value
   * with optional parameters for lerping, duration, easing, and onUpdate callback
   *
   * @param from - The starting value
   * @param to - The ending value
   * @param options - Options for the animation
   */ key: "fromTo",
            value: function fromTo(from, to, param) {
                var lerp2 = param.lerp, duration = param.duration, easing = param.easing, onStart = param.onStart, onUpdate = param.onUpdate;
                this.from = this.value = from;
                this.to = to;
                this.lerp = lerp2;
                this.duration = duration;
                this.easing = easing;
                this.currentTime = 0;
                this.isRunning = true;
                onStart === null || onStart === void 0 ? void 0 : onStart();
                this.onUpdate = onUpdate;
            }
        }
    ]);
    return Animate;
}();
// packages/core/src/debounce.ts
function debounce(callback, delay) {
    var timer;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function() {
            timer = void 0;
            callback.apply(context, args);
        }, delay);
    };
}
// packages/core/src/dimensions.ts
var Dimensions = /*#__PURE__*/ function() {
    "use strict";
    function Dimensions(wrapper, content) {
        var _this = this;
        var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref_autoResize = _ref.autoResize, autoResize = _ref_autoResize === void 0 ? true : _ref_autoResize, tmp = _ref.debounce, debounceValue = tmp === void 0 ? 250 : tmp;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Dimensions);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "width", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "height", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "scrollHeight", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "scrollWidth", 0);
        // These are instanciated in the constructor as they need information from the options
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "debouncedResize", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "wrapperResizeObserver", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "contentResizeObserver", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "resize", function() {
            _this.onWrapperResize();
            _this.onContentResize();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onWrapperResize", function() {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this.wrapper, Window)) {
                _this.width = window.innerWidth;
                _this.height = window.innerHeight;
            } else {
                _this.width = _this.wrapper.clientWidth;
                _this.height = _this.wrapper.clientHeight;
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onContentResize", function() {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this.wrapper, Window)) {
                _this.scrollHeight = _this.content.scrollHeight;
                _this.scrollWidth = _this.content.scrollWidth;
            } else {
                _this.scrollHeight = _this.wrapper.scrollHeight;
                _this.scrollWidth = _this.wrapper.scrollWidth;
            }
        });
        this.wrapper = wrapper;
        this.content = content;
        if (autoResize) {
            this.debouncedResize = debounce(this.resize, debounceValue);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this.wrapper, Window)) {
                window.addEventListener("resize", this.debouncedResize, false);
            } else {
                this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
                this.wrapperResizeObserver.observe(this.wrapper);
            }
            this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
            this.contentResizeObserver.observe(this.content);
        }
        this.resize();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Dimensions, [
        {
            key: "destroy",
            value: function destroy() {
                var _this_wrapperResizeObserver, _this_contentResizeObserver;
                (_this_wrapperResizeObserver = this.wrapperResizeObserver) === null || _this_wrapperResizeObserver === void 0 ? void 0 : _this_wrapperResizeObserver.disconnect();
                (_this_contentResizeObserver = this.contentResizeObserver) === null || _this_contentResizeObserver === void 0 ? void 0 : _this_contentResizeObserver.disconnect();
                if (this.wrapper === window && this.debouncedResize) {
                    window.removeEventListener("resize", this.debouncedResize, false);
                }
            }
        },
        {
            key: "limit",
            get: function get() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                };
            }
        }
    ]);
    return Dimensions;
}();
// packages/core/src/emitter.ts
var Emitter = /*#__PURE__*/ function() {
    "use strict";
    function Emitter() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Emitter);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "events", {});
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Emitter, [
        {
            /**
   * Emit an event with the given data
   * @param event Event name
   * @param args Data to pass to the event handlers
   */ key: "emit",
            value: function emit(event) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                var callbacks = this.events[event] || [];
                for(var i = 0, length = callbacks.length; i < length; i++){
                    var _callbacks_i;
                    var _callbacks_i1;
                    (_callbacks_i1 = callbacks[i]) === null || _callbacks_i1 === void 0 ? void 0 : (_callbacks_i = _callbacks_i1).call.apply(_callbacks_i, [
                        callbacks
                    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(args)));
                }
            }
        },
        {
            /**
   * Add a callback to the event
   * @param event Event name
   * @param cb Callback function
   * @returns Unsubscribe function
   */ key: "on",
            value: function on(event, cb) {
                var _this = this;
                var _this_events_event;
                ((_this_events_event = this.events[event]) === null || _this_events_event === void 0 ? void 0 : _this_events_event.push(cb)) || (this.events[event] = [
                    cb
                ]);
                return function() {
                    var _this_events_event;
                    _this.events[event] = (_this_events_event = _this.events[event]) === null || _this_events_event === void 0 ? void 0 : _this_events_event.filter(function(i) {
                        return cb !== i;
                    });
                };
            }
        },
        {
            /**
   * Remove a callback from the event
   * @param event Event name
   * @param callback Callback function
   */ key: "off",
            value: function off(event, callback) {
                var _this_events_event;
                this.events[event] = (_this_events_event = this.events[event]) === null || _this_events_event === void 0 ? void 0 : _this_events_event.filter(function(i) {
                    return callback !== i;
                });
            }
        },
        {
            /**
   * Remove all event listeners and clean up
   */ key: "destroy",
            value: function destroy() {
                this.events = {};
            }
        }
    ]);
    return Emitter;
}();
// packages/core/src/virtual-scroll.ts
var LINE_HEIGHT = 100 / 6;
var listenerOptions = {
    passive: false
};
var VirtualScroll = /*#__PURE__*/ function() {
    "use strict";
    function VirtualScroll(element) {
        var _this = this;
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            wheelMultiplier: 1,
            touchMultiplier: 1
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, VirtualScroll);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "touchStart", {
            x: 0,
            y: 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "lastDelta", {
            x: 0,
            y: 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "window", {
            width: 0,
            height: 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "emitter", new Emitter());
        /**
   * Event handler for 'touchstart' event
   *
   * @param event Touch event
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTouchStart", function(event) {
            var _ref = event.targetTouches ? event.targetTouches[0] : event, clientX = _ref.clientX, clientY = _ref.clientY;
            _this.touchStart.x = clientX;
            _this.touchStart.y = clientY;
            _this.lastDelta = {
                x: 0,
                y: 0
            };
            _this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: event
            });
        });
        /** Event handler for 'touchmove' event */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTouchMove", function(event) {
            var _ref = event.targetTouches ? event.targetTouches[0] : event, clientX = _ref.clientX, clientY = _ref.clientY;
            var deltaX = -(clientX - _this.touchStart.x) * _this.options.touchMultiplier;
            var deltaY = -(clientY - _this.touchStart.y) * _this.options.touchMultiplier;
            _this.touchStart.x = clientX;
            _this.touchStart.y = clientY;
            _this.lastDelta = {
                x: deltaX,
                y: deltaY
            };
            _this.emitter.emit("scroll", {
                deltaX: deltaX,
                deltaY: deltaY,
                event: event
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTouchEnd", function(event) {
            _this.emitter.emit("scroll", {
                deltaX: _this.lastDelta.x,
                deltaY: _this.lastDelta.y,
                event: event
            });
        });
        /** Event handler for 'wheel' event */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onWheel", function(event) {
            var deltaX = event.deltaX, deltaY = event.deltaY, deltaMode = event.deltaMode;
            var multiplierX = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? _this.window.width : 1;
            var multiplierY = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? _this.window.height : 1;
            deltaX *= multiplierX;
            deltaY *= multiplierY;
            deltaX *= _this.options.wheelMultiplier;
            deltaY *= _this.options.wheelMultiplier;
            _this.emitter.emit("scroll", {
                deltaX: deltaX,
                deltaY: deltaY,
                event: event
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onWindowResize", function() {
            _this.window = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        });
        this.element = element;
        this.options = options;
        window.addEventListener("resize", this.onWindowResize, false);
        this.onWindowResize();
        this.element.addEventListener("wheel", this.onWheel, listenerOptions);
        this.element.addEventListener("touchstart", this.onTouchStart, listenerOptions);
        this.element.addEventListener("touchmove", this.onTouchMove, listenerOptions);
        this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(VirtualScroll, [
        {
            /**
   * Add an event listener for the given event and callback
   *
   * @param event Event name
   * @param callback Callback function
   */ key: "on",
            value: function on(event, callback) {
                return this.emitter.on(event, callback);
            }
        },
        {
            /** Remove all event listeners and clean up */ key: "destroy",
            value: function destroy() {
                this.emitter.destroy();
                window.removeEventListener("resize", this.onWindowResize, false);
                this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
                this.element.removeEventListener("touchstart", this.onTouchStart, listenerOptions);
                this.element.removeEventListener("touchmove", this.onTouchMove, listenerOptions);
                this.element.removeEventListener("touchend", this.onTouchEnd, listenerOptions);
            }
        }
    ]);
    return VirtualScroll;
}();
// packages/core/src/lenis.ts
var defaultEasing = function(t) {
    return Math.min(1, 1.001 - Math.pow(2, -10 * t));
};
var Lenis = /*#__PURE__*/ function() {
    "use strict";
    function Lenis() {
        var _this = this;
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref_wrapper = _ref.wrapper, wrapper = _ref_wrapper === void 0 ? window : _ref_wrapper, _ref_content = _ref.content, content = _ref_content === void 0 ? document.documentElement : _ref_content, _ref_eventsTarget = _ref.eventsTarget, eventsTarget = _ref_eventsTarget === void 0 ? wrapper : _ref_eventsTarget, _ref_smoothWheel = _ref.smoothWheel, smoothWheel = _ref_smoothWheel === void 0 ? true : _ref_smoothWheel, _ref_syncTouch = _ref.syncTouch, syncTouch = _ref_syncTouch === void 0 ? false : _ref_syncTouch, _ref_syncTouchLerp = _ref.syncTouchLerp, syncTouchLerp = _ref_syncTouchLerp === void 0 ? 0.075 : _ref_syncTouchLerp, _ref_touchInertiaExponent = _ref.touchInertiaExponent, touchInertiaExponent = _ref_touchInertiaExponent === void 0 ? 1.7 : _ref_touchInertiaExponent, duration = _ref.duration, // in seconds
        easing = _ref.easing, tmp = _ref.lerp, lerp2 = tmp === void 0 ? 0.1 : tmp, _ref_infinite = _ref.infinite, infinite = _ref_infinite === void 0 ? false : _ref_infinite, _ref_orientation = _ref.orientation, orientation = _ref_orientation === void 0 ? "vertical" : _ref_orientation, _ref_gestureOrientation = _ref.// vertical, horizontal
        gestureOrientation, gestureOrientation = _ref_gestureOrientation === void 0 ? orientation === "horizontal" ? "both" : "vertical" : _ref_gestureOrientation, _ref_touchMultiplier = _ref.// vertical, horizontal, both
        touchMultiplier, touchMultiplier = _ref_touchMultiplier === void 0 ? 1 : _ref_touchMultiplier, _ref_wheelMultiplier = _ref.wheelMultiplier, wheelMultiplier = _ref_wheelMultiplier === void 0 ? 1 : _ref_wheelMultiplier, _ref_autoResize = _ref.autoResize, autoResize = _ref_autoResize === void 0 ? true : _ref_autoResize, prevent = _ref.prevent, virtualScroll = _ref.virtualScroll, _ref_overscroll = _ref.overscroll, overscroll = _ref_overscroll === void 0 ? true : _ref_overscroll, _ref_autoRaf = _ref.autoRaf, autoRaf = _ref_autoRaf === void 0 ? false : _ref_autoRaf, _ref_anchors = _ref.anchors, anchors = _ref_anchors === void 0 ? false : _ref_anchors, _ref_autoToggle = _ref.autoToggle, autoToggle = _ref_autoToggle === void 0 ? false : _ref_autoToggle, _ref_allowNestedScroll = _ref.// https://caniuse.com/?search=transition-behavior
        allowNestedScroll, allowNestedScroll = _ref_allowNestedScroll === void 0 ? false : _ref_allowNestedScroll, _ref___experimental__naiveDimensions = _ref.// @ts-ignore: this will be deprecated in the future
        __experimental__naiveDimensions, __experimental__naiveDimensions = _ref___experimental__naiveDimensions === void 0 ? false : _ref___experimental__naiveDimensions, _ref_naiveDimensions = _ref.naiveDimensions, naiveDimensions = _ref_naiveDimensions === void 0 ? __experimental__naiveDimensions : _ref_naiveDimensions, _ref_stopInertiaOnNavigate = _ref.stopInertiaOnNavigate, stopInertiaOnNavigate = _ref_stopInertiaOnNavigate === void 0 ? false : _ref_stopInertiaOnNavigate;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Lenis);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_isScrolling", false);
        // true when scroll is animating
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_isStopped", false);
        // true if user should not be able to scroll - enable/disable programmatically
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_isLocked", false);
        // same as isStopped but enabled/disabled when scroll reaches target
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_preventNextNativeScrollEvent", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_resetVelocityTimeout", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_rafId", null);
        /**
   * Whether or not the user is touching the screen
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isTouching", void 0);
        /**
   * The time in ms since the lenis instance was created
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "time", 0);
        /**
   * User data that will be forwarded through the scroll event
   *
   * @example
   * lenis.scrollTo(100, {
   *   userData: {
   *     foo: 'bar'
   *   }
   * })
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "userData", {});
        /**
   * The last velocity of the scroll
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "lastVelocity", 0);
        /**
   * The current velocity of the scroll
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "velocity", 0);
        /**
   * The direction of the scroll
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "direction", 0);
        /**
   * The options passed to the lenis instance
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "options", void 0);
        /**
   * The target scroll value
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "targetScroll", void 0);
        /**
   * The animated scroll value
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "animatedScroll", void 0);
        // These are instanciated here as they don't need information from the options
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "animate", new Animate());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "emitter", new Emitter());
        // These are instanciated in the constructor as they need information from the options
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "dimensions", void 0);
        // This is not private because it's used in the Snap class
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "virtualScroll", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onScrollEnd", function(e) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(e, CustomEvent)) {
                if (_this.isScrolling === "smooth" || _this.isScrolling === false) {
                    e.stopPropagation();
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "dispatchScrollendEvent", function() {
            _this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                bubbles: _this.options.wrapper === window,
                // cancelable: false,
                detail: {
                    lenisScrollEnd: true
                }
            }));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTransitionEnd", function(event) {
            if (event.propertyName.includes("overflow")) {
                _this.checkOverflow();
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onClick", function(event) {
            var path = event.composedPath();
            var anchorElements = path.filter(function(node) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(node, HTMLAnchorElement) && node.getAttribute("href");
            });
            if (_this.options.anchors) {
                var anchor = anchorElements.find(function(node) {
                    var _node_getAttribute;
                    return (_node_getAttribute = node.getAttribute("href")) === null || _node_getAttribute === void 0 ? void 0 : _node_getAttribute.includes("#");
                });
                if (anchor) {
                    var href = anchor.getAttribute("href");
                    if (href) {
                        var options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_this.options.anchors) === "object" && _this.options.anchors ? _this.options.anchors : void 0;
                        var target = "#".concat(href.split("#")[1]);
                        _this.scrollTo(target, options);
                    }
                }
            }
            if (_this.options.stopInertiaOnNavigate) {
                var internalLink = anchorElements.find(function(node) {
                    return node.host === window.location.host;
                });
                if (internalLink) {
                    _this.reset();
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onPointerDown", function(event) {
            if (event.button === 1) {
                _this.reset();
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onVirtualScroll", function(data) {
            if (typeof _this.options.virtualScroll === "function" && _this.options.virtualScroll(data) === false) return;
            var deltaX = data.deltaX, deltaY = data.deltaY, event = data.event;
            _this.emitter.emit("virtual-scroll", {
                deltaX: deltaX,
                deltaY: deltaY,
                event: event
            });
            if (event.ctrlKey) return;
            if (event.lenisStopPropagation) return;
            var isTouch = event.type.includes("touch");
            var isWheel = event.type.includes("wheel");
            _this.isTouching = event.type === "touchstart" || event.type === "touchmove";
            var isClickOrTap = deltaX === 0 && deltaY === 0;
            var isTapToStop = _this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !_this.isStopped && !_this.isLocked;
            if (isTapToStop) {
                _this.reset();
                return;
            }
            var isUnknownGesture = _this.options.gestureOrientation === "vertical" && deltaY === 0 || _this.options.gestureOrientation === "horizontal" && deltaX === 0;
            if (isClickOrTap || isUnknownGesture) {
                return;
            }
            var composedPath = event.composedPath();
            composedPath = composedPath.slice(0, composedPath.indexOf(_this.rootElement));
            var prevent = _this.options.prevent;
            if (!!composedPath.find(function(node) {
                var _node_hasAttribute, _node_hasAttribute1, _node_hasAttribute2;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(node, HTMLElement) && (typeof prevent === "function" && (prevent === null || prevent === void 0 ? void 0 : prevent(node)) || ((_node_hasAttribute = node.hasAttribute) === null || _node_hasAttribute === void 0 ? void 0 : _node_hasAttribute.call(node, "data-lenis-prevent")) || isTouch && ((_node_hasAttribute1 = node.hasAttribute) === null || _node_hasAttribute1 === void 0 ? void 0 : _node_hasAttribute1.call(node, "data-lenis-prevent-touch")) || isWheel && ((_node_hasAttribute2 = node.hasAttribute) === null || _node_hasAttribute2 === void 0 ? void 0 : _node_hasAttribute2.call(node, "data-lenis-prevent-wheel")) || _this.options.allowNestedScroll && _this.checkNestedScroll(node, {
                    deltaX: deltaX,
                    deltaY: deltaY
                }));
            })) return;
            if (_this.isStopped || _this.isLocked) {
                if (event.cancelable) {
                    event.preventDefault();
                }
                return;
            }
            var isSmooth = _this.options.syncTouch && isTouch || _this.options.smoothWheel && isWheel;
            if (!isSmooth) {
                _this.isScrolling = "native";
                _this.animate.stop();
                event.lenisStopPropagation = true;
                return;
            }
            var delta = deltaY;
            if (_this.options.gestureOrientation === "both") {
                delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
            } else if (_this.options.gestureOrientation === "horizontal") {
                delta = deltaX;
            }
            if (!_this.options.overscroll || _this.options.infinite || _this.options.wrapper !== window && _this.limit > 0 && (_this.animatedScroll > 0 && _this.animatedScroll < _this.limit || _this.animatedScroll === 0 && deltaY > 0 || _this.animatedScroll === _this.limit && deltaY < 0)) {
                event.lenisStopPropagation = true;
            }
            if (event.cancelable) {
                event.preventDefault();
            }
            var isSyncTouch = isTouch && _this.options.syncTouch;
            var isTouchEnd = isTouch && event.type === "touchend";
            var hasTouchInertia = isTouchEnd;
            if (hasTouchInertia) {
                delta = Math.sign(_this.velocity) * Math.pow(Math.abs(_this.velocity), _this.options.touchInertiaExponent);
            }
            _this.scrollTo(_this.targetScroll + delta, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                programmatic: false
            }, isSyncTouch ? {
                lerp: hasTouchInertia ? _this.options.syncTouchLerp : 1
            } : {
                lerp: _this.options.lerp,
                duration: _this.options.duration,
                easing: _this.options.easing
            }));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onNativeScroll", function() {
            if (_this._resetVelocityTimeout !== null) {
                clearTimeout(_this._resetVelocityTimeout);
                _this._resetVelocityTimeout = null;
            }
            if (_this._preventNextNativeScrollEvent) {
                _this._preventNextNativeScrollEvent = false;
                return;
            }
            if (_this.isScrolling === false || _this.isScrolling === "native") {
                var lastScroll = _this.animatedScroll;
                _this.animatedScroll = _this.targetScroll = _this.actualScroll;
                _this.lastVelocity = _this.velocity;
                _this.velocity = _this.animatedScroll - lastScroll;
                _this.direction = Math.sign(_this.animatedScroll - lastScroll);
                if (!_this.isStopped) {
                    _this.isScrolling = "native";
                }
                _this.emit();
                if (_this.velocity !== 0) {
                    _this._resetVelocityTimeout = setTimeout(function() {
                        _this.lastVelocity = _this.velocity;
                        _this.velocity = 0;
                        _this.isScrolling = false;
                        _this.emit();
                    }, 400);
                }
            }
        });
        /**
   * RequestAnimationFrame for lenis
   *
   * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "raf", function(time) {
            var deltaTime = time - (_this.time || time);
            _this.time = time;
            _this.animate.advance(deltaTime * 1e-3);
            if (_this.options.autoRaf) {
                _this._rafId = requestAnimationFrame(_this.raf);
            }
        });
        window.lenisVersion = version;
        if (!wrapper || wrapper === document.documentElement) {
            wrapper = window;
        }
        if (typeof duration === "number" && typeof easing !== "function") {
            easing = defaultEasing;
        } else if (typeof easing === "function" && typeof duration !== "number") {
            duration = 1;
        }
        this.options = {
            wrapper: wrapper,
            content: content,
            eventsTarget: eventsTarget,
            smoothWheel: smoothWheel,
            syncTouch: syncTouch,
            syncTouchLerp: syncTouchLerp,
            touchInertiaExponent: touchInertiaExponent,
            duration: duration,
            easing: easing,
            lerp: lerp2,
            infinite: infinite,
            gestureOrientation: gestureOrientation,
            orientation: orientation,
            touchMultiplier: touchMultiplier,
            wheelMultiplier: wheelMultiplier,
            autoResize: autoResize,
            prevent: prevent,
            virtualScroll: virtualScroll,
            overscroll: overscroll,
            autoRaf: autoRaf,
            anchors: anchors,
            autoToggle: autoToggle,
            allowNestedScroll: allowNestedScroll,
            naiveDimensions: naiveDimensions,
            stopInertiaOnNavigate: stopInertiaOnNavigate
        };
        this.dimensions = new Dimensions(wrapper, content, {
            autoResize: autoResize
        });
        this.updateClassName();
        this.targetScroll = this.animatedScroll = this.actualScroll;
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false);
        this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: true
        });
        if (this.options.anchors || this.options.stopInertiaOnNavigate) {
            this.options.wrapper.addEventListener("click", this.onClick, false);
        }
        this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, false);
        this.virtualScroll = new VirtualScroll(eventsTarget, {
            touchMultiplier: touchMultiplier,
            wheelMultiplier: wheelMultiplier
        });
        this.virtualScroll.on("scroll", this.onVirtualScroll);
        if (this.options.autoToggle) {
            this.checkOverflow();
            this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
                passive: true
            });
        }
        if (this.options.autoRaf) {
            this._rafId = requestAnimationFrame(this.raf);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Lenis, [
        {
            /**
   * Destroy the lenis instance, remove all event listeners and clean up the class name
   */ key: "destroy",
            value: function destroy() {
                this.emitter.destroy();
                this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false);
                this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
                    capture: true
                });
                this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, false);
                if (this.options.anchors || this.options.stopInertiaOnNavigate) {
                    this.options.wrapper.removeEventListener("click", this.onClick, false);
                }
                this.virtualScroll.destroy();
                this.dimensions.destroy();
                this.cleanUpClassName();
                if (this._rafId) {
                    cancelAnimationFrame(this._rafId);
                }
            }
        },
        {
            key: "on",
            value: function on(event, callback) {
                return this.emitter.on(event, callback);
            }
        },
        {
            key: "off",
            value: function off(event, callback) {
                return this.emitter.off(event, callback);
            }
        },
        {
            key: "overflow",
            get: function get() {
                var property = this.isHorizontal ? "overflow-x" : "overflow-y";
                return getComputedStyle(this.rootElement)[property];
            }
        },
        {
            key: "checkOverflow",
            value: function checkOverflow() {
                if ([
                    "hidden",
                    "clip"
                ].includes(this.overflow)) {
                    this.internalStop();
                } else {
                    this.internalStart();
                }
            }
        },
        {
            key: "setScroll",
            value: function setScroll(scroll) {
                if (this.isHorizontal) {
                    this.options.wrapper.scrollTo({
                        left: scroll,
                        behavior: "instant"
                    });
                } else {
                    this.options.wrapper.scrollTo({
                        top: scroll,
                        behavior: "instant"
                    });
                }
            }
        },
        {
            /**
   * Force lenis to recalculate the dimensions
   */ key: "resize",
            value: function resize() {
                this.dimensions.resize();
                this.animatedScroll = this.targetScroll = this.actualScroll;
                this.emit();
            }
        },
        {
            key: "emit",
            value: function emit() {
                this.emitter.emit("scroll", this);
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.isLocked = false;
                this.isScrolling = false;
                this.animatedScroll = this.targetScroll = this.actualScroll;
                this.lastVelocity = this.velocity = 0;
                this.animate.stop();
            }
        },
        {
            /**
   * Start lenis scroll after it has been stopped
   */ key: "start",
            value: function start() {
                if (!this.isStopped) return;
                if (this.options.autoToggle) {
                    this.rootElement.style.removeProperty("overflow");
                    return;
                }
                this.internalStart();
            }
        },
        {
            key: "internalStart",
            value: function internalStart() {
                if (!this.isStopped) return;
                this.reset();
                this.isStopped = false;
                this.emit();
            }
        },
        {
            /**
   * Stop lenis scroll
   */ key: "stop",
            value: function stop() {
                if (this.isStopped) return;
                if (this.options.autoToggle) {
                    this.rootElement.style.setProperty("overflow", "clip");
                    return;
                }
                this.internalStop();
            }
        },
        {
            key: "internalStop",
            value: function internalStop() {
                if (this.isStopped) return;
                this.reset();
                this.isStopped = true;
                this.emit();
            }
        },
        {
            /**
   * Scroll to a target value
   *
   * @param target The target value to scroll to
   * @param options The options for the scroll
   *
   * @example
   * lenis.scrollTo(100, {
   *   offset: 100,
   *   duration: 1,
   *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
   *   lerp: 0.1,
   *   onStart: () => {
   *     console.log('onStart')
   *   },
   *   onComplete: () => {
   *     console.log('onComplete')
   *   },
   * })
   */ key: "scrollTo",
            value: function scrollTo(target) {
                var _this = this;
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_offset = _ref.offset, offset = _ref_offset === void 0 ? 0 : _ref_offset, _ref_immediate = _ref.immediate, immediate = _ref_immediate === void 0 ? false : _ref_immediate, _ref_lock = _ref.lock, lock = _ref_lock === void 0 ? false : _ref_lock, _ref_programmatic = _ref.programmatic, programmatic = _ref_programmatic === void 0 ? true : _ref_programmatic, tmp = _ref.// called from outside of the class
                lerp, lerp2 = tmp === void 0 ? programmatic ? this.options.lerp : void 0 : tmp, _ref_duration = _ref.duration, duration = _ref_duration === void 0 ? programmatic ? this.options.duration : void 0 : _ref_duration, _ref_easing = _ref.easing, easing = _ref_easing === void 0 ? programmatic ? this.options.easing : void 0 : _ref_easing, onStart = _ref.onStart, onComplete = _ref.onComplete, _ref_force = _ref.force, force = _ref_force === void 0 ? false : _ref_force, // scroll even if stopped
                userData = _ref.userData;
                if ((this.isStopped || this.isLocked) && !force) return;
                if (typeof target === "string" && [
                    "top",
                    "left",
                    "start",
                    "#"
                ].includes(target)) {
                    target = 0;
                } else if (typeof target === "string" && [
                    "bottom",
                    "right",
                    "end"
                ].includes(target)) {
                    target = this.limit;
                } else {
                    var node;
                    if (typeof target === "string") {
                        node = document.querySelector(target);
                        if (!node) {
                            if (target === "#top") {
                                target = 0;
                            } else {
                                console.warn("Lenis: Target not found", target);
                            }
                        }
                    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target, HTMLElement) && (target === null || target === void 0 ? void 0 : target.nodeType)) {
                        node = target;
                    }
                    if (node) {
                        if (this.options.wrapper !== window) {
                            var wrapperRect = this.rootElement.getBoundingClientRect();
                            offset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
                        }
                        var rect = node.getBoundingClientRect();
                        target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll;
                    }
                }
                if (typeof target !== "number") return;
                target += offset;
                target = Math.round(target);
                if (this.options.infinite) {
                    if (programmatic) {
                        this.targetScroll = this.animatedScroll = this.scroll;
                        var distance = target - this.animatedScroll;
                        if (distance > this.limit / 2) {
                            target = target - this.limit;
                        } else if (distance < -this.limit / 2) {
                            target = target + this.limit;
                        }
                    }
                } else {
                    target = clamp(0, target, this.limit);
                }
                if (target === this.targetScroll) {
                    onStart === null || onStart === void 0 ? void 0 : onStart(this);
                    onComplete === null || onComplete === void 0 ? void 0 : onComplete(this);
                    return;
                }
                this.userData = userData !== null && userData !== void 0 ? userData : {};
                if (immediate) {
                    this.animatedScroll = this.targetScroll = target;
                    this.setScroll(this.scroll);
                    this.reset();
                    this.preventNextNativeScrollEvent();
                    this.emit();
                    onComplete === null || onComplete === void 0 ? void 0 : onComplete(this);
                    this.userData = {};
                    requestAnimationFrame(function() {
                        _this.dispatchScrollendEvent();
                    });
                    return;
                }
                if (!programmatic) {
                    this.targetScroll = target;
                }
                if (typeof duration === "number" && typeof easing !== "function") {
                    easing = defaultEasing;
                } else if (typeof easing === "function" && typeof duration !== "number") {
                    duration = 1;
                }
                this.animate.fromTo(this.animatedScroll, target, {
                    duration: duration,
                    easing: easing,
                    lerp: lerp2,
                    onStart: function() {
                        if (lock) _this.isLocked = true;
                        _this.isScrolling = "smooth";
                        onStart === null || onStart === void 0 ? void 0 : onStart(_this);
                    },
                    onUpdate: function(value, completed) {
                        _this.isScrolling = "smooth";
                        _this.lastVelocity = _this.velocity;
                        _this.velocity = value - _this.animatedScroll;
                        _this.direction = Math.sign(_this.velocity);
                        _this.animatedScroll = value;
                        _this.setScroll(_this.scroll);
                        if (programmatic) {
                            _this.targetScroll = value;
                        }
                        if (!completed) _this.emit();
                        if (completed) {
                            _this.reset();
                            _this.emit();
                            onComplete === null || onComplete === void 0 ? void 0 : onComplete(_this);
                            _this.userData = {};
                            requestAnimationFrame(function() {
                                _this.dispatchScrollendEvent();
                            });
                            _this.preventNextNativeScrollEvent();
                        }
                    }
                });
            }
        },
        {
            key: "preventNextNativeScrollEvent",
            value: function preventNextNativeScrollEvent() {
                var _this = this;
                this._preventNextNativeScrollEvent = true;
                requestAnimationFrame(function() {
                    _this._preventNextNativeScrollEvent = false;
                });
            }
        },
        {
            key: "checkNestedScroll",
            value: function checkNestedScroll(node, param) {
                var deltaX = param.deltaX, deltaY = param.deltaY;
                var _node, __lenis, _cache_time;
                var time = Date.now();
                var cache = (__lenis = (_node = node)._lenis) !== null && __lenis !== void 0 ? __lenis : _node._lenis = {};
                var hasOverflowX, hasOverflowY, isScrollableX, isScrollableY, scrollWidth, scrollHeight, clientWidth, clientHeight;
                var gestureOrientation = this.options.gestureOrientation;
                if (time - ((_cache_time = cache.time) !== null && _cache_time !== void 0 ? _cache_time : 0) > 2e3) {
                    cache.time = Date.now();
                    var computedStyle = window.getComputedStyle(node);
                    cache.computedStyle = computedStyle;
                    var overflowXString = computedStyle.overflowX;
                    var overflowYString = computedStyle.overflowY;
                    hasOverflowX = [
                        "auto",
                        "overlay",
                        "scroll"
                    ].includes(overflowXString);
                    hasOverflowY = [
                        "auto",
                        "overlay",
                        "scroll"
                    ].includes(overflowYString);
                    cache.hasOverflowX = hasOverflowX;
                    cache.hasOverflowY = hasOverflowY;
                    if (!hasOverflowX && !hasOverflowY) return false;
                    if (gestureOrientation === "vertical" && !hasOverflowY) return false;
                    if (gestureOrientation === "horizontal" && !hasOverflowX) return false;
                    scrollWidth = node.scrollWidth;
                    scrollHeight = node.scrollHeight;
                    clientWidth = node.clientWidth;
                    clientHeight = node.clientHeight;
                    isScrollableX = scrollWidth > clientWidth;
                    isScrollableY = scrollHeight > clientHeight;
                    cache.isScrollableX = isScrollableX;
                    cache.isScrollableY = isScrollableY;
                    cache.scrollWidth = scrollWidth;
                    cache.scrollHeight = scrollHeight;
                    cache.clientWidth = clientWidth;
                    cache.clientHeight = clientHeight;
                } else {
                    isScrollableX = cache.isScrollableX;
                    isScrollableY = cache.isScrollableY;
                    hasOverflowX = cache.hasOverflowX;
                    hasOverflowY = cache.hasOverflowY;
                    scrollWidth = cache.scrollWidth;
                    scrollHeight = cache.scrollHeight;
                    clientWidth = cache.clientWidth;
                    clientHeight = cache.clientHeight;
                }
                if (!hasOverflowX && !hasOverflowY || !isScrollableX && !isScrollableY) {
                    return false;
                }
                if (gestureOrientation === "vertical" && (!hasOverflowY || !isScrollableY)) return false;
                if (gestureOrientation === "horizontal" && (!hasOverflowX || !isScrollableX)) return false;
                var orientation;
                if (gestureOrientation === "horizontal") {
                    orientation = "x";
                } else if (gestureOrientation === "vertical") {
                    orientation = "y";
                } else {
                    var isScrollingX = deltaX !== 0;
                    var isScrollingY = deltaY !== 0;
                    if (isScrollingX && hasOverflowX && isScrollableX) {
                        orientation = "x";
                    }
                    if (isScrollingY && hasOverflowY && isScrollableY) {
                        orientation = "y";
                    }
                }
                if (!orientation) return false;
                var scroll, maxScroll, delta, hasOverflow, isScrollable;
                if (orientation === "x") {
                    scroll = node.scrollLeft;
                    maxScroll = scrollWidth - clientWidth;
                    delta = deltaX;
                    hasOverflow = hasOverflowX;
                    isScrollable = isScrollableX;
                } else if (orientation === "y") {
                    scroll = node.scrollTop;
                    maxScroll = scrollHeight - clientHeight;
                    delta = deltaY;
                    hasOverflow = hasOverflowY;
                    isScrollable = isScrollableY;
                } else {
                    return false;
                }
                var willScroll = delta > 0 ? scroll < maxScroll : scroll > 0;
                return willScroll && hasOverflow && isScrollable;
            }
        },
        {
            key: "rootElement",
            get: /**
   * The root element on which lenis is instanced
   */ function get() {
                return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
            }
        },
        {
            key: "limit",
            get: /**
   * The limit which is the maximum scroll value
   */ function get() {
                if (this.options.naiveDimensions) {
                    if (this.isHorizontal) {
                        return this.rootElement.scrollWidth - this.rootElement.clientWidth;
                    } else {
                        return this.rootElement.scrollHeight - this.rootElement.clientHeight;
                    }
                } else {
                    return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
                }
            }
        },
        {
            key: "isHorizontal",
            get: /**
   * Whether or not the scroll is horizontal
   */ function get() {
                return this.options.orientation === "horizontal";
            }
        },
        {
            key: "actualScroll",
            get: /**
   * The actual scroll value
   */ function get() {
                var _wrapper_scrollX, _wrapper_scrollY;
                var wrapper = this.options.wrapper;
                return this.isHorizontal ? (_wrapper_scrollX = wrapper.scrollX) !== null && _wrapper_scrollX !== void 0 ? _wrapper_scrollX : wrapper.scrollLeft : (_wrapper_scrollY = wrapper.scrollY) !== null && _wrapper_scrollY !== void 0 ? _wrapper_scrollY : wrapper.scrollTop;
            }
        },
        {
            key: "scroll",
            get: /**
   * The current scroll value
   */ function get() {
                return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
            }
        },
        {
            key: "progress",
            get: /**
   * The progress of the scroll relative to the limit
   */ function get() {
                return this.limit === 0 ? 1 : this.scroll / this.limit;
            }
        },
        {
            key: "isScrolling",
            get: /**
   * Current scroll state
   */ function get() {
                return this._isScrolling;
            },
            set: function set(value) {
                if (this._isScrolling !== value) {
                    this._isScrolling = value;
                    this.updateClassName();
                }
            }
        },
        {
            key: "isStopped",
            get: /**
   * Check if lenis is stopped
   */ function get() {
                return this._isStopped;
            },
            set: function set(value) {
                if (this._isStopped !== value) {
                    this._isStopped = value;
                    this.updateClassName();
                }
            }
        },
        {
            key: "isLocked",
            get: /**
   * Check if lenis is locked
   */ function get() {
                return this._isLocked;
            },
            set: function set(value) {
                if (this._isLocked !== value) {
                    this._isLocked = value;
                    this.updateClassName();
                }
            }
        },
        {
            key: "isSmooth",
            get: /**
   * Check if lenis is smooth scrolling
   */ function get() {
                return this.isScrolling === "smooth";
            }
        },
        {
            key: "className",
            get: /**
   * The class name applied to the wrapper element
   */ function get() {
                var className = "lenis";
                if (this.options.autoToggle) className += " lenis-autoToggle";
                if (this.isStopped) className += " lenis-stopped";
                if (this.isLocked) className += " lenis-locked";
                if (this.isScrolling) className += " lenis-scrolling";
                if (this.isScrolling === "smooth") className += " lenis-smooth";
                return className;
            }
        },
        {
            key: "updateClassName",
            value: function updateClassName() {
                this.cleanUpClassName();
                this.rootElement.className = "".concat(this.rootElement.className, " ").concat(this.className).trim();
            }
        },
        {
            key: "cleanUpClassName",
            value: function cleanUpClassName() {
                this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
            }
        }
    ]);
    return Lenis;
}();
;
 //# sourceMappingURL=lenis.mjs.map
}),
]);

//# sourceMappingURL=_73070399._.js.map