module.exports = [
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_typeof
]);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPrimitive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
;
function toPrimitive(t, r) {
    if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toPropertyKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/toPrimitive.js [app-ssr] (ecmascript)");
;
;
function toPropertyKey(t) {
    var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPrimitive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t, "string");
    return "symbol" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(i) ? i : i + "";
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_defineProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-ssr] (ecmascript)");
;
function _defineProperty(e, r, t) {
    return (r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectSpread2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
;
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutPropertiesLoose
]);
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_objectWithoutProperties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
;
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_classCallCheck
]);
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/createClass.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_createClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js [app-ssr] (ecmascript)");
;
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toPropertyKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_getPrototypeOf
]);
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_isNativeReflectConstruct
]);
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_assertThisInitialized
]);
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_possibleConstructorReturn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js [app-ssr] (ecmascript)");
;
;
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$assertThisInitialized$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t);
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/callSuper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_callSuper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js [app-ssr] (ecmascript)");
;
;
;
function _callSuper(t, o, e) {
    return o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(o), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$possibleConstructorReturn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$isNativeReflectConstruct$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])() ? Reflect.construct(o, e || [], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$getPrototypeOf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t).constructor) : o.apply(t, e));
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_setPrototypeOf
]);
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/inherits.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inherits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-ssr] (ecmascript)");
;
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t, e);
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_arrayWithHoles
]);
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_iterableToArrayLimit
]);
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_arrayLikeToArray
]);
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_unsupportedIterableToArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js [app-ssr] (ecmascript)");
;
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r, a) : void 0;
    }
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_nonIterableRest
]);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_slicedToArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithHoles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArrayLimit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableRest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js [app-ssr] (ecmascript)");
;
;
;
;
function _slicedToArray(r, e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithHoles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArrayLimit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r, e) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r, e) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableRest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_inheritsLoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js [app-ssr] (ecmascript)");
;
function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$setPrototypeOf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t, o);
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_arrayWithoutHoles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js [app-ssr] (ecmascript)");
;
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayLikeToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r);
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/iterableToArray.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_iterableToArray
]);
function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_nonIterableSpread
]);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_toConsumableArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithoutHoles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/iterableToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableSpread$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js [app-ssr] (ecmascript)");
;
;
;
;
function _toConsumableArray(r) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithoutHoles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableSpread$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/toArray.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_toArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithHoles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/iterableToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableRest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js [app-ssr] (ecmascript)");
;
;
;
;
function _toArray(r) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$arrayWithHoles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$iterableToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$unsupportedIterableToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(r) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$nonIterableRest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/react-big-calendar/node_modules/clsx/dist/clsx.m.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) for(t = 0; t < e.length; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else for(t in e)e[t] && (n && (n += " "), n += t);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = ""; f < arguments.length;)(e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/invariant/invariant.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var NODE_ENV = ("TURBOPACK compile-time value", "development");
var invariant = function(condition, format, a, b, c, d, e, f) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }
    if (!condition) {
        var error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
            var args = [
                a,
                b,
                c,
                d,
                e,
                f
            ];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
module.exports = invariant;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/uncontrollable/lib/esm/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canAcceptRef",
    ()=>canAcceptRef,
    "defaultKey",
    ()=>defaultKey,
    "isProp",
    ()=>isProp,
    "uncontrolledPropTypes",
    ()=>uncontrolledPropTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$invariant$2f$invariant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/invariant/invariant.js [app-ssr] (ecmascript)");
;
var noop = function noop() {};
function readOnlyPropType(handler, name) {
    return function(props, propName) {
        if (props[propName] !== undefined) {
            if (!props[handler]) {
                return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
            }
        }
    };
}
function uncontrolledPropTypes(controlledValues, displayName) {
    var propTypes = {};
    Object.keys(controlledValues).forEach(function(prop) {
        // add default propTypes for folks that use runtime checks
        propTypes[defaultKey(prop)] = noop;
        if ("TURBOPACK compile-time truthy", 1) {
            var handler = controlledValues[prop];
            !(typeof handler === 'string' && handler.trim().length) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$invariant$2f$invariant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : "TURBOPACK unreachable" : void 0;
            propTypes[prop] = readOnlyPropType(handler, displayName);
        }
    });
    return propTypes;
}
function isProp(props, prop) {
    return props[prop] !== undefined;
}
function defaultKey(key) {
    return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
function canAcceptRef(component) {
    return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/uncontrollable/lib/esm/hook.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useUncontrolled,
    "useUncontrolledProp",
    ()=>useUncontrolledProp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/uncontrollable/lib/esm/utils.js [app-ssr] (ecmascript)");
;
;
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
;
;
function useUncontrolledProp(propValue, defaultValue, handler) {
    var wasPropRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(propValue !== undefined);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultValue), stateValue = _useState[0], setState = _useState[1];
    var isProp = propValue !== undefined;
    var wasProp = wasPropRef.current;
    wasPropRef.current = isProp;
    /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */ if (!isProp && wasProp && stateValue !== defaultValue) {
        setState(defaultValue);
    }
    return [
        isProp ? propValue : stateValue,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(value) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            if (handler) handler.apply(void 0, [
                value
            ].concat(args));
            setState(value);
        }, [
            handler
        ])
    ];
}
;
function useUncontrolled(props, config) {
    return Object.keys(config).reduce(function(result, fieldName) {
        var _extends2;
        var _ref = result, defaultValue = _ref[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultKey"](fieldName)], propsValue = _ref[fieldName], rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_ref, [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultKey"](fieldName),
            fieldName
        ].map(_toPropertyKey));
        var handlerName = config[fieldName];
        var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
    }, props);
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/uncontrollable/lib/esm/uncontrollable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>uncontrollable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$lifecycles$2d$compat$2f$react$2d$lifecycles$2d$compat$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$invariant$2f$invariant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/invariant/invariant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/uncontrollable/lib/esm/utils.js [app-ssr] (ecmascript)");
;
;
;
var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
;
;
;
;
function uncontrollable(Component, controlledValues, methods) {
    if (methods === void 0) {
        methods = [];
    }
    var displayName = Component.displayName || Component.name || 'Component';
    var canAcceptRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canAcceptRef"](Component);
    var controlledProps = Object.keys(controlledValues);
    var PROPS_TO_OMIT = controlledProps.map(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultKey"]);
    !(canAcceptRef || !methods.length) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$invariant$2f$invariant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : "TURBOPACK unreachable" : void 0;
    var UncontrolledComponent = /*#__PURE__*/ function(_React$Component) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$inheritsLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(UncontrolledComponent, _React$Component);
        function UncontrolledComponent() {
            var _this;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            _this = _React$Component.call.apply(_React$Component, [
                this
            ].concat(args)) || this;
            _this.handlers = Object.create(null);
            controlledProps.forEach(function(propName) {
                var handlerName = controlledValues[propName];
                var handleChange = function handleChange(value) {
                    if (_this.props[handlerName]) {
                        var _this$props;
                        _this._notifying = true;
                        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                            args[_key2 - 1] = arguments[_key2];
                        }
                        (_this$props = _this.props)[handlerName].apply(_this$props, [
                            value
                        ].concat(args));
                        _this._notifying = false;
                    }
                    if (!_this.unmounted) _this.setState(function(_ref) {
                        var _extends2;
                        var values = _ref.values;
                        return {
                            values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
                        };
                    });
                };
                _this.handlers[handlerName] = handleChange;
            });
            if (methods.length) _this.attachRef = function(ref) {
                _this.inner = ref;
            };
            var values = Object.create(null);
            controlledProps.forEach(function(key) {
                values[key] = _this.props[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultKey"](key)];
            });
            _this.state = {
                values: values,
                prevProps: {}
            };
            return _this;
        }
        var _proto = UncontrolledComponent.prototype;
        _proto.shouldComponentUpdate = function shouldComponentUpdate() {
            //let setState trigger the update
            return !this._notifying;
        };
        UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
            var values = _ref2.values, prevProps = _ref2.prevProps;
            var nextState = {
                values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Object.create(null), values),
                prevProps: {}
            };
            controlledProps.forEach(function(key) {
                /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */ nextState.prevProps[key] = props[key];
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProp"](props, key) && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProp"](prevProps, key)) {
                    nextState.values[key] = props[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultKey"](key)];
                }
            });
            return nextState;
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
            this.unmounted = true;
        };
        _proto.render = function render() {
            var _this2 = this;
            var _this$props2 = this.props, innerRef = _this$props2.innerRef, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this$props2, [
                "innerRef"
            ]);
            PROPS_TO_OMIT.forEach(function(prop) {
                delete props[prop];
            });
            var newProps = {};
            controlledProps.forEach(function(propName) {
                var propValue = _this2.props[propName];
                newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, newProps, this.handlers, {
                ref: innerRef || this.attachRef
            }));
        };
        return UncontrolledComponent;
    }(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$lifecycles$2d$compat$2f$react$2d$lifecycles$2d$compat$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polyfill"])(UncontrolledComponent);
    UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
    UncontrolledComponent.propTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        innerRef: function innerRef() {}
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uncontrolledPropTypes"](controlledValues, displayName));
    methods.forEach(function(method) {
        UncontrolledComponent.prototype[method] = function $proxiedMethod() {
            var _this$inner;
            return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
        };
    });
    var WrappedComponent = UncontrolledComponent;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef) {
        WrappedComponent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(function(props, ref) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(UncontrolledComponent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props, {
                innerRef: ref,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                },
                __self: this
            }));
        });
        WrappedComponent.propTypes = UncontrolledComponent.propTypes;
    }
    WrappedComponent.ControlledComponent = Component;
    /**
   * useful when wrapping a Component and you want to control
   * everything
   */ WrappedComponent.deferControlTo = function(newComponent, additions, nextMethods) {
        if (additions === void 0) {
            additions = {};
        }
        return uncontrollable(newComponent, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, controlledValues, additions), nextMethods);
    };
    return WrappedComponent;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/uncontrollable/lib/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/uncontrollable/lib/esm/hook.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$uncontrollable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/uncontrollable/lib/esm/uncontrollable.js [app-ssr] (ecmascript)");
;
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/uncontrollable/lib/esm/uncontrollable.js [app-ssr] (ecmascript) <export default as uncontrollable>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uncontrollable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$uncontrollable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$uncontrollable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/uncontrollable/lib/esm/uncontrollable.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "polyfill",
    ()=>polyfill
]);
function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) {
        this.setState(state);
    }
}
function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
        var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
        return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
    try {
        var prevProps = this.props;
        var prevState = this.state;
        this.props = nextProps;
        this.state = nextState;
        this.__reactInternalSnapshotFlag = true;
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
    } finally{
        this.props = prevProps;
        this.state = prevState;
    }
}
// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
    var prototype = Component.prototype;
    if (!prototype || !prototype.isReactComponent) {
        throw new Error('Can only polyfill class components');
    }
    if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
        return Component;
    }
    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === 'function') {
        foundWillMountName = 'componentWillMount';
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
    }
    if (typeof prototype.componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'componentWillReceiveProps';
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
    }
    if (typeof prototype.componentWillUpdate === 'function') {
        foundWillUpdateName = 'componentWillUpdate';
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
    }
    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var componentName = Component.displayName || Component.name;
        var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
        throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
    }
    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === 'function') {
        prototype.componentWillMount = componentWillMount;
        prototype.componentWillReceiveProps = componentWillReceiveProps;
    }
    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
        if (typeof prototype.componentDidUpdate !== 'function') {
            throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
        }
        prototype.componentWillUpdate = componentWillUpdate;
        var componentDidUpdate = prototype.componentDidUpdate;
        prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
            // 16.3+ will not execute our will-update method;
            // It will pass a snapshot value to did-update though.
            // Older versions will require our polyfilled will-update value.
            // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
            // Because for <= 15.x versions this might be a "prevContext" object.
            // We also can't just check "__reactInternalSnapshot",
            // Because get-snapshot might return a falsy value.
            // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
            var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
            componentDidUpdate.call(this, prevProps, prevState, snapshot);
        };
    }
    return Component;
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/react-is/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/WEBSITE/MedApp/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/object-assign/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++){
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from){
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++){
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/Desktop/WEBSITE/MedApp/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/Desktop/WEBSITE/MedApp/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactIs = __turbopack_context__.r("[project]/Desktop/WEBSITE/MedApp/node_modules/react-is/index.js [app-ssr] (ecmascript)");
var assign = __turbopack_context__.r("[project]/Desktop/WEBSITE/MedApp/node_modules/object-assign/index.js [app-ssr] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/Desktop/WEBSITE/MedApp/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
var has = __turbopack_context__.r("[project]/Desktop/WEBSITE/MedApp/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/Desktop/WEBSITE/MedApp/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/prop-types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/Desktop/WEBSITE/MedApp/node_modules/react-is/index.js [app-ssr] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/Desktop/WEBSITE/MedApp/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/date-arithmetic/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "century",
    ()=>century,
    "date",
    ()=>date,
    "day",
    ()=>day,
    "decade",
    ()=>decade,
    "diff",
    ()=>diff,
    "endOf",
    ()=>endOf,
    "eq",
    ()=>eq,
    "gt",
    ()=>gt,
    "gte",
    ()=>gte,
    "hours",
    ()=>hours,
    "inRange",
    ()=>inRange,
    "lt",
    ()=>lt,
    "lte",
    ()=>lte,
    "max",
    ()=>max,
    "milliseconds",
    ()=>milliseconds,
    "min",
    ()=>min,
    "minutes",
    ()=>minutes,
    "month",
    ()=>month,
    "neq",
    ()=>neq,
    "seconds",
    ()=>seconds,
    "startOf",
    ()=>startOf,
    "subtract",
    ()=>subtract,
    "weekday",
    ()=>weekday,
    "year",
    ()=>year
]);
var MILI = 'milliseconds', SECONDS = 'seconds', MINUTES = 'minutes', HOURS = 'hours', DAY = 'day', WEEK = 'week', MONTH = 'month', YEAR = 'year', DECADE = 'decade', CENTURY = 'century';
var multiplierMilli = {
    'milliseconds': 1,
    'seconds': 1000,
    'minutes': 60 * 1000,
    'hours': 60 * 60 * 1000,
    'day': 24 * 60 * 60 * 1000,
    'week': 7 * 24 * 60 * 60 * 1000
};
var multiplierMonth = {
    'month': 1,
    'year': 12,
    'decade': 10 * 12,
    'century': 100 * 12
};
function daysOf(year) {
    return [
        31,
        daysInFeb(year),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
}
function daysInFeb(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 29 : 28;
}
function add(d, num, unit) {
    d = new Date(d);
    switch(unit){
        case MILI:
        case SECONDS:
        case MINUTES:
        case HOURS:
        case DAY:
        case WEEK:
            return addMillis(d, num * multiplierMilli[unit]);
        case MONTH:
        case YEAR:
        case DECADE:
        case CENTURY:
            return addMonths(d, num * multiplierMonth[unit]);
    }
    throw new TypeError('Invalid units: "' + unit + '"');
}
function addMillis(d, num) {
    var nextDate = new Date(+d + num);
    return solveDST(d, nextDate);
}
function addMonths(d, num) {
    var year = d.getFullYear(), month = d.getMonth(), day = d.getDate(), totalMonths = year * 12 + month + num, nextYear = Math.trunc(totalMonths / 12), nextMonth = totalMonths % 12, nextDay = Math.min(day, daysOf(nextYear)[nextMonth]);
    var nextDate = new Date(d);
    nextDate.setFullYear(nextYear);
    // To avoid a bug when sets the Feb month
    // with a date > 28 or date > 29 (leap year)
    nextDate.setDate(1);
    nextDate.setMonth(nextMonth);
    nextDate.setDate(nextDay);
    return nextDate;
}
function solveDST(currentDate, nextDate) {
    var currentOffset = currentDate.getTimezoneOffset(), nextOffset = nextDate.getTimezoneOffset();
    // if is DST, add the difference in minutes
    // else the difference is zero
    var diffMinutes = nextOffset - currentOffset;
    return new Date(+nextDate + diffMinutes * multiplierMilli['minutes']);
}
function subtract(d, num, unit) {
    return add(d, -num, unit);
}
function startOf(d, unit, firstOfWeek) {
    d = new Date(d);
    switch(unit){
        case CENTURY:
        case DECADE:
        case YEAR:
            d = month(d, 0);
        case MONTH:
            d = date(d, 1);
        case WEEK:
        case DAY:
            d = hours(d, 0);
        case HOURS:
            d = minutes(d, 0);
        case MINUTES:
            d = seconds(d, 0);
        case SECONDS:
            d = milliseconds(d, 0);
    }
    if (unit === DECADE) d = subtract(d, year(d) % 10, 'year');
    if (unit === CENTURY) d = subtract(d, year(d) % 100, 'year');
    if (unit === WEEK) d = weekday(d, 0, firstOfWeek);
    return d;
}
function endOf(d, unit, firstOfWeek) {
    d = new Date(d);
    d = startOf(d, unit, firstOfWeek);
    switch(unit){
        case CENTURY:
        case DECADE:
        case YEAR:
        case MONTH:
        case WEEK:
            d = add(d, 1, unit);
            d = subtract(d, 1, DAY);
            d.setHours(23, 59, 59, 999);
            break;
        case DAY:
            d.setHours(23, 59, 59, 999);
            break;
        case HOURS:
        case MINUTES:
        case SECONDS:
            d = add(d, 1, unit);
            d = subtract(d, 1, MILI);
    }
    return d;
}
var eq = createComparer(function(a, b) {
    return a === b;
});
var neq = createComparer(function(a, b) {
    return a !== b;
});
var gt = createComparer(function(a, b) {
    return a > b;
});
var gte = createComparer(function(a, b) {
    return a >= b;
});
var lt = createComparer(function(a, b) {
    return a < b;
});
var lte = createComparer(function(a, b) {
    return a <= b;
});
function min() {
    return new Date(Math.min.apply(Math, arguments));
}
function max() {
    return new Date(Math.max.apply(Math, arguments));
}
function inRange(day, min, max, unit) {
    unit = unit || 'day';
    return (!min || gte(day, min, unit)) && (!max || lte(day, max, unit));
}
var milliseconds = createAccessor('Milliseconds');
var seconds = createAccessor('Seconds');
var minutes = createAccessor('Minutes');
var hours = createAccessor('Hours');
var day = createAccessor('Day');
var date = createAccessor('Date');
var month = createAccessor('Month');
var year = createAccessor('FullYear');
function decade(d, val) {
    return val === undefined ? year(startOf(d, DECADE)) : add(d, val + 10, YEAR);
}
function century(d, val) {
    return val === undefined ? year(startOf(d, CENTURY)) : add(d, val + 100, YEAR);
}
function weekday(d, val, firstDay) {
    var w = (day(d) + 7 - (firstDay || 0)) % 7;
    return val === undefined ? w : add(d, val - w, DAY);
}
function diff(date1, date2, unit, asFloat) {
    var dividend, divisor, result;
    switch(unit){
        case MILI:
        case SECONDS:
        case MINUTES:
        case HOURS:
        case DAY:
        case WEEK:
            dividend = date2.getTime() - date1.getTime();
            break;
        case MONTH:
        case YEAR:
        case DECADE:
        case CENTURY:
            dividend = (year(date2) - year(date1)) * 12 + month(date2) - month(date1);
            break;
        default:
            throw new TypeError('Invalid units: "' + unit + '"');
    }
    switch(unit){
        case MILI:
            divisor = 1;
            break;
        case SECONDS:
            divisor = 1000;
            break;
        case MINUTES:
            divisor = 1000 * 60;
            break;
        case HOURS:
            divisor = 1000 * 60 * 60;
            break;
        case DAY:
            divisor = 1000 * 60 * 60 * 24;
            break;
        case WEEK:
            divisor = 1000 * 60 * 60 * 24 * 7;
            break;
        case MONTH:
            divisor = 1;
            break;
        case YEAR:
            divisor = 12;
            break;
        case DECADE:
            divisor = 120;
            break;
        case CENTURY:
            divisor = 1200;
            break;
        default:
            throw new TypeError('Invalid units: "' + unit + '"');
    }
    result = dividend / divisor;
    return asFloat ? result : Math.round(result);
}
function createAccessor(method) {
    var hourLength = function(method) {
        switch(method){
            case 'Milliseconds':
                return 3600000;
            case 'Seconds':
                return 3600;
            case 'Minutes':
                return 60;
            case 'Hours':
                return 1;
            default:
                return null;
        }
    }(method);
    return function(d, val) {
        if (val === undefined) return d['get' + method]();
        var dateOut = new Date(d);
        dateOut['set' + method](val);
        if (hourLength && dateOut['get' + method]() != val && (method === 'Hours' || val >= hourLength && dateOut.getHours() - d.getHours() < Math.floor(val / hourLength))) {
            //Skip DST hour, if it occurs
            dateOut['set' + method](val + hourLength);
        }
        return dateOut;
    };
}
function createComparer(operator) {
    return function(a, b, unit) {
        return operator(+startOf(a, unit), +startOf(b, unit));
    };
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/ownerDocument.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */ __turbopack_context__.s([
    "default",
    ()=>ownerDocument
]);
function ownerDocument(node) {
    return node && node.ownerDocument || document;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/ownerWindow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ownerWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/ownerDocument.js [app-ssr] (ecmascript)");
;
function ownerWindow(node) {
    var doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node);
    return doc && doc.defaultView || window;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/getComputedStyle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getComputedStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/ownerWindow.js [app-ssr] (ecmascript)");
;
function getComputedStyle(node, psuedoElement) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node).getComputedStyle(node, psuedoElement);
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/hyphenate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>hyphenate
]);
var rUpper = /([A-Z])/g;
function hyphenate(string) {
    return string.replace(rUpper, '-$1').toLowerCase();
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/hyphenateStyle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */ __turbopack_context__.s([
    "default",
    ()=>hyphenateStyleName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/hyphenate.js [app-ssr] (ecmascript)");
;
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(string).replace(msPattern, '-ms-');
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/isTransform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isTransform
]);
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
    return !!(value && supportedTransforms.test(value));
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$getComputedStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/getComputedStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenateStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/hyphenateStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isTransform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/isTransform.js [app-ssr] (ecmascript)");
;
;
;
function style(node, property) {
    var css = '';
    var transforms = '';
    if (typeof property === 'string') {
        return node.style.getPropertyValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenateStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(property)) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$getComputedStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node).getPropertyValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenateStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(property));
    }
    Object.keys(property).forEach(function(key) {
        var value = property[key];
        if (!value && value !== 0) {
            node.style.removeProperty((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenateStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key));
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isTransform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key)) {
            transforms += key + "(" + value + ") ";
        } else {
            css += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hyphenateStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key) + ": " + value + ";";
        }
    });
    if (transforms) {
        css += "transform: " + transforms + ";";
    }
    node.style.cssText += ";" + css;
}
const __TURBOPACK__default__export__ = style;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/contains.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-bitwise, no-cond-assign */ /**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */ __turbopack_context__.s([
    "default",
    ()=>contains
]);
function contains(context, node) {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    if (context.contains) return context.contains(node);
    if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/isDocument.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isDocument
]);
function isDocument(element) {
    return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/isWindow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/isDocument.js [app-ssr] (ecmascript)");
;
function isWindow(node) {
    if ('window' in node && node.window === node) return node;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node)) return node.defaultView || false;
    return false;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/getScrollAccessor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getscrollAccessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/isWindow.js [app-ssr] (ecmascript)");
;
function getscrollAccessor(offset) {
    var prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';
    function scrollAccessor(node, val) {
        var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node);
        if (val === undefined) {
            return win ? win[offset] : node[prop];
        }
        if (win) {
            win.scrollTo(win[offset], val);
        } else {
            node[prop] = val;
        }
    }
    return scrollAccessor;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/scrollLeft.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$getScrollAccessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/getScrollAccessor.js [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$getScrollAccessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('pageXOffset');
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/scrollTop.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$getScrollAccessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/getScrollAccessor.js [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$getScrollAccessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('pageYOffset');
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/offset.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>offset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$contains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/contains.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/ownerDocument.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollLeft$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/scrollLeft.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollTop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/scrollTop.js [app-ssr] (ecmascript)");
;
;
;
;
function offset(node) {
    var doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node);
    var box = {
        top: 0,
        left: 0,
        height: 0,
        width: 0
    };
    var docElem = doc && doc.documentElement; // Make sure it's not a disconnected DOM node
    if (!docElem || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$contains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(docElem, node)) return box;
    if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
    box = {
        top: box.top + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollTop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(docElem) - (docElem.clientTop || 0),
        left: box.left + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollLeft$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(docElem) - (docElem.clientLeft || 0),
        width: box.width,
        height: box.height
    };
    return box;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/offsetParent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>offsetParent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/ownerDocument.js [app-ssr] (ecmascript)");
;
;
var isHTMLElement = function isHTMLElement(e) {
    return !!e && 'offsetParent' in e;
};
function offsetParent(node) {
    var doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node);
    var parent = node && node.offsetParent;
    while(isHTMLElement(parent) && parent.nodeName !== 'HTML' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(parent, 'position') === 'static'){
        parent = parent.offsetParent;
    }
    return parent || doc.documentElement;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/position.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>position
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/offset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offsetParent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/offsetParent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollLeft$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/scrollLeft.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollTop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/scrollTop.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var nodeName = function nodeName(node) {
    return node.nodeName && node.nodeName.toLowerCase();
};
function position(node, offsetParent) {
    var parentOffset = {
        top: 0,
        left: 0
    };
    var offset; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
    // because it is its only offset parent
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, 'position') === 'fixed') {
        offset = node.getBoundingClientRect();
    } else {
        var parent = offsetParent || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offsetParent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node);
        offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node);
        if (nodeName(parent) !== 'html') parentOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(parent);
        var borderTop = String((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(parent, 'borderTopWidth') || 0);
        parentOffset.top += parseInt(borderTop, 10) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollTop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(parent) || 0;
        var borderLeft = String((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(parent, 'borderLeftWidth') || 0);
        parentOffset.left += parseInt(borderLeft, 10) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$scrollLeft$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(parent) || 0;
    }
    var marginTop = String((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, 'marginTop') || 0);
    var marginLeft = String((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, 'marginLeft') || 0); // Subtract parent offsets and node margins
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, offset, {
        top: offset.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
        left: offset.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
    });
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/canUseDOM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = !!(("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.document && window.document.createElement);
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/animationFrame.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancel",
    ()=>cancel,
    "request",
    ()=>request
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$canUseDOM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/canUseDOM.js [app-ssr] (ecmascript)");
;
/* https://github.com/component/raf */ var prev = new Date().getTime();
function fallback(fn) {
    var curr = new Date().getTime();
    var ms = Math.max(0, 16 - (curr - prev));
    var handle = setTimeout(fn, ms);
    prev = curr;
    return handle;
}
var vendors = [
    '',
    'webkit',
    'moz',
    'o',
    'ms'
];
var cancelMethod = 'clearTimeout';
var rafImpl = fallback; // eslint-disable-next-line import/no-mutable-exports
var getKey = function getKey(vendor, k) {
    return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + "AnimationFrame";
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$canUseDOM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]) {
    vendors.some(function(vendor) {
        var rafMethod = getKey(vendor, 'request');
        if (rafMethod in window) {
            cancelMethod = getKey(vendor, 'cancel'); // @ts-ignore
            rafImpl = function rafImpl(cb) {
                return window[rafMethod](cb);
            };
        }
        return !!rafImpl;
    });
}
var cancel = function cancel(id) {
    // @ts-ignore
    if (typeof window[cancelMethod] === 'function') window[cancelMethod](id);
};
var request = rafImpl;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/addEventListener.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-return-assign */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "onceSupported",
    ()=>onceSupported,
    "optionsSupported",
    ()=>optionsSupported
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$canUseDOM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/canUseDOM.js [app-ssr] (ecmascript)");
;
var optionsSupported = false;
var onceSupported = false;
try {
    var options = {
        get passive () {
            return optionsSupported = true;
        },
        get once () {
            // eslint-disable-next-line no-multi-assign
            return onceSupported = optionsSupported = true;
        }
    };
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$canUseDOM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]) {
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, true);
    }
} catch (e) {
/* */ }
/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */ function addEventListener(node, eventName, handler, options) {
    if (options && typeof options !== 'boolean' && !onceSupported) {
        var once = options.once, capture = options.capture;
        var wrappedHandler = handler;
        if (!onceSupported && once) {
            wrappedHandler = handler.__once || function onceHandler(event) {
                this.removeEventListener(eventName, onceHandler, capture);
                handler.call(this, event);
            };
            handler.__once = wrappedHandler;
        }
        node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
    }
    node.addEventListener(eventName, handler, options);
}
const __TURBOPACK__default__export__ = addEventListener;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/removeEventListener.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function removeEventListener(node, eventName, handler, options) {
    var capture = options && typeof options !== 'boolean' ? options.capture : options;
    node.removeEventListener(eventName, handler, capture);
    if (handler.__once) {
        node.removeEventListener(eventName, handler.__once, capture);
    }
}
const __TURBOPACK__default__export__ = removeEventListener;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/listen.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/addEventListener.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/removeEventListener.js [app-ssr] (ecmascript)");
;
;
function listen(node, eventName, handler, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$addEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, eventName, handler, options);
    return function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$removeEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, eventName, handler, options);
    };
}
const __TURBOPACK__default__export__ = listen;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/height.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>height
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/isWindow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/offset.js [app-ssr] (ecmascript)");
;
;
function height(node, client) {
    var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node);
    return win ? win.innerHeight : client ? node.clientHeight : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node).height;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/querySelectorAll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>qsa
]);
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
    return toArray(element.querySelectorAll(selector));
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/matches.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>matches
]);
var matchesImpl;
function matches(node, selector) {
    if (!matchesImpl) {
        var body = document.body;
        var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
        matchesImpl = function matchesImpl(n, s) {
            return nativeMatch.call(n, s);
        };
    }
    return matchesImpl(node, selector);
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/closest.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>closest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$matches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/matches.js [app-ssr] (ecmascript)");
;
function closest(node, selector, stopAt) {
    if (node.closest && !stopAt) node.closest(selector);
    var nextNode = node;
    do {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$matches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(nextNode, selector)) return nextNode;
        nextNode = nextNode.parentElement;
    }while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE)
    return null;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/width.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getWidth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/isWindow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/offset.js [app-ssr] (ecmascript)");
;
;
function getWidth(node, client) {
    var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$isWindow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node);
    return win ? win.innerWidth : client ? node.clientWidth : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$offset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node).width;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/scrollbarSize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>scrollbarSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$canUseDOM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/canUseDOM.js [app-ssr] (ecmascript)");
;
var size;
function scrollbarSize(recalc) {
    if (!size && size !== 0 || recalc) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$canUseDOM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]) {
            var scrollDiv = document.createElement('div');
            scrollDiv.style.position = 'absolute';
            scrollDiv.style.top = '-9999px';
            scrollDiv.style.width = '50px';
            scrollDiv.style.height = '50px';
            scrollDiv.style.overflow = 'scroll';
            document.body.appendChild(scrollDiv);
            size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
        }
    }
    return size;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/hasClass.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */ __turbopack_context__.s([
    "default",
    ()=>hasClass
]);
function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/addClass.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>addClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hasClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/hasClass.js [app-ssr] (ecmascript)");
;
function addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$hasClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;
    else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/removeClass.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>removeClass
]);
function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    } else if (typeof element.className === 'string') {
        element.className = replaceClassName(element.className, className);
    } else {
        element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
    }
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@restart/hooks/esm/useCallbackRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCallbackRef() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@restart/hooks/esm/useMergedRefs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "mergeRefs",
    ()=>mergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const toFnRef = (ref)=>!ref || typeof ref === 'function' ? ref : (value)=>{
        ref.current = value;
    };
function mergeRefs(refA, refB) {
    const a = toFnRef(refA);
    const b = toFnRef(refB);
    return (value)=>{
        if (a) a(value);
        if (b) b(value);
    };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */ function useMergedRefs(refA, refB) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>mergeRefs(refA, refB), [
        refA,
        refB
    ]);
}
const __TURBOPACK__default__export__ = useMergedRefs;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@restart/hooks/esm/useMounted.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useMounted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useMounted() {
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(()=>mounted.current);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        mounted.current = true;
        return ()=>{
            mounted.current = false;
        };
    }, []);
    return isMounted.current;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@restart/hooks/esm/useSafeState.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMounted$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@restart/hooks/esm/useMounted.js [app-ssr] (ecmascript)");
;
;
/**
 * `useSafeState` takes the return value of a `useState` hook and wraps the
 * setter to prevent updates onces the component has unmounted. Can used
 * with `useMergeState` and `useStateAsync` as well
 *
 * @param state The return value of a useStateHook
 *
 * ```ts
 * const [show, setShow] = useSafeState(useState(true));
 * ```
 */ function useSafeState(state) {
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMounted$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    return [
        state[0],
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((nextState)=>{
            if (!isMounted()) return;
            return state[1](nextState);
        }, [
            isMounted,
            state[1]
        ])
    ];
}
const __TURBOPACK__default__export__ = useSafeState;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@restart/hooks/esm/useCommittedRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */ function useCommittedRef(value) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref;
}
const __TURBOPACK__default__export__ = useCommittedRef;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@restart/hooks/esm/useEventCallback.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useEventCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@restart/hooks/esm/useCommittedRef.js [app-ssr] (ecmascript)");
;
;
function useEventCallback(fn) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCommittedRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(fn);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(...args) {
        return ref.current && ref.current(...args);
    }, [
        ref
    ]);
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/popper.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPopper",
    ()=>createPopper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$arrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@popperjs/core/lib/modifiers/arrow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$computeStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@popperjs/core/lib/modifiers/computeStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$eventListeners$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@popperjs/core/lib/modifiers/eventListeners.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$flip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@popperjs/core/lib/modifiers/flip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$hide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@popperjs/core/lib/modifiers/hide.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$offset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@popperjs/core/lib/modifiers/offset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$popperOffsets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$preventOverflow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@popperjs/core/lib/enums.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$createPopper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@popperjs/core/lib/createPopper.js [app-ssr] (ecmascript) <locals>"); // For the common JS build we will turn this file into a bundle with no imports.
;
;
;
;
;
;
;
;
;
;
var createPopper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$createPopper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["popperGenerator"])({
    defaultModifiers: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$hide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$popperOffsets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$computeStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$eventListeners$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$offset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$flip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$preventOverflow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$arrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    ]
});
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/usePopper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useSafeState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@restart/hooks/esm/useSafeState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/popper.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
var initialPopperStyles = function initialPopperStyles(position) {
    return {
        position: position,
        top: '0',
        left: '0',
        opacity: '0',
        pointerEvents: 'none'
    };
};
var disabledApplyStylesModifier = {
    name: 'applyStyles',
    enabled: false
}; // In order to satisfy the current usage of options, including undefined
var ariaDescribedByModifier = {
    name: 'ariaDescribedBy',
    enabled: true,
    phase: 'afterWrite',
    effect: function effect(_ref) {
        var state = _ref.state;
        return function() {
            var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
            if ('removeAttribute' in reference) {
                var ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(function(id) {
                    return id.trim() !== popper.id;
                });
                if (!ids.length) reference.removeAttribute('aria-describedby');
                else reference.setAttribute('aria-describedby', ids.join(','));
            }
        };
    },
    fn: function fn(_ref2) {
        var _popper$getAttribute;
        var state = _ref2.state;
        var _state$elements2 = state.elements, popper = _state$elements2.popper, reference = _state$elements2.reference;
        var role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();
        if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
            var ids = reference.getAttribute('aria-describedby');
            if (ids && ids.split(',').indexOf(popper.id) !== -1) {
                return;
            }
            reference.setAttribute('aria-describedby', ids ? ids + "," + popper.id : popper.id);
        }
    }
};
var EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {boolean=}    options.eventsEnabled have Popper listen on window resize events to reposition the element
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */ function usePopper(referenceElement, popperElement, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp, _ref3$enabled = _ref3.enabled, enabled = _ref3$enabled === void 0 ? true : _ref3$enabled, _ref3$placement = _ref3.placement, placement = _ref3$placement === void 0 ? 'bottom' : _ref3$placement, _ref3$strategy = _ref3.strategy, strategy = _ref3$strategy === void 0 ? 'absolute' : _ref3$strategy, _ref3$modifiers = _ref3.modifiers, modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers, config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_ref3, [
        "enabled",
        "placement",
        "strategy",
        "modifiers"
    ]);
    var popperInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    var update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        var _popperInstanceRef$cu;
        (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
    }, []);
    var forceUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        var _popperInstanceRef$cu2;
        (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
    }, []);
    var _useSafeState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useSafeState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        placement: placement,
        update: update,
        forceUpdate: forceUpdate,
        attributes: {},
        styles: {
            popper: initialPopperStyles(strategy),
            arrow: {}
        }
    })), popperState = _useSafeState[0], setState = _useSafeState[1];
    var updateModifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return {
            name: 'updateStateModifier',
            enabled: true,
            phase: 'write',
            requires: [
                'computeStyles'
            ],
            fn: function fn(_ref4) {
                var state = _ref4.state;
                var styles = {};
                var attributes = {};
                Object.keys(state.elements).forEach(function(element) {
                    styles[element] = state.styles[element];
                    attributes[element] = state.attributes[element];
                });
                setState({
                    state: state,
                    styles: styles,
                    attributes: attributes,
                    update: update,
                    forceUpdate: forceUpdate,
                    placement: state.placement
                });
            }
        };
    }, [
        update,
        forceUpdate,
        setState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (!popperInstanceRef.current || !enabled) return;
        popperInstanceRef.current.setOptions({
            placement: placement,
            strategy: strategy,
            modifiers: [].concat(modifiers, [
                updateModifier,
                disabledApplyStylesModifier
            ])
        }); // intentionally NOT re-running on new modifiers
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        strategy,
        placement,
        updateModifier,
        enabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (!enabled || referenceElement == null || popperElement == null) {
            return undefined;
        }
        popperInstanceRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createPopper"])(referenceElement, popperElement, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, config, {
            placement: placement,
            strategy: strategy,
            modifiers: [].concat(modifiers, [
                ariaDescribedByModifier,
                updateModifier
            ])
        }));
        return function() {
            if (popperInstanceRef.current != null) {
                popperInstanceRef.current.destroy();
                popperInstanceRef.current = undefined;
                setState(function(s) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, s, {
                        attributes: {},
                        styles: {
                            popper: initialPopperStyles(strategy)
                        }
                    });
                });
            }
        }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        enabled,
        referenceElement,
        popperElement
    ]);
    return popperState;
}
const __TURBOPACK__default__export__ = usePopper;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/safeFindDOMNode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>safeFindDOMNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
;
function safeFindDOMNode(componentOrElement) {
    if (componentOrElement && 'setState' in componentOrElement) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].findDOMNode(componentOrElement);
    }
    return componentOrElement != null ? componentOrElement : null;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/ownerDocument.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/ownerDocument.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$safeFindDOMNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/safeFindDOMNode.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = function(componentOrElement) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$safeFindDOMNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(componentOrElement));
};
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/useRootClose.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$contains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/contains.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$listen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/listen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@restart/hooks/esm/useEventCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/warning/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/ownerDocument.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var escapeKeyCode = 27;
var noop = function noop() {};
function isLeftClickEvent(event) {
    return event.button === 0;
}
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var getRefTarget = function getRefTarget(ref) {
    return ref && ('current' in ref ? ref.current : ref);
};
/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */ function useRootClose(ref, onRootClose, _temp) {
    var _ref = _temp === void 0 ? {} : _temp, disabled = _ref.disabled, _ref$clickTrigger = _ref.clickTrigger, clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;
    var preventMouseRootCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    var onClose = onRootClose || noop;
    var handleMouseCapture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        var _e$composedPath$;
        var currentTarget = getRefTarget(ref);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$warning$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
        preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$contains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(currentTarget, (_e$composedPath$ = e.composedPath == null ? void 0 : e.composedPath()[0]) != null ? _e$composedPath$ : e.target);
    }, [
        ref
    ]);
    var handleMouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(e) {
        if (!preventMouseRootCloseRef.current) {
            onClose(e);
        }
    });
    var handleKeyUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useEventCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(e) {
        if (e.keyCode === escapeKeyCode) {
            onClose(e);
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately
        // https://github.com/facebook/react/issues/20074
        var currentEvent = window.event;
        var doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
        // avoid false positives in the contains() check below if the target DOM
        // element is removed in the React mouse callback.
        var removeMouseCaptureListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$listen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(doc, clickTrigger, handleMouseCapture, true);
        var removeMouseListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$listen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(doc, clickTrigger, function(e) {
            // skip if this event is the same as the one running when we added the handlers
            if (e === currentEvent) {
                currentEvent = undefined;
                return;
            }
            handleMouse(e);
        });
        var removeKeyupListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$listen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(doc, 'keyup', function(e) {
            // skip if this event is the same as the one running when we added the handlers
            if (e === currentEvent) {
                currentEvent = undefined;
                return;
            }
            handleKeyUp(e);
        });
        var mobileSafariHackListeners = [];
        if ('ontouchstart' in doc.documentElement) {
            mobileSafariHackListeners = [].slice.call(doc.body.children).map(function(el) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$listen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(el, 'mousemove', noop);
            });
        }
        return function() {
            removeMouseCaptureListener();
            removeMouseListener();
            removeKeyupListener();
            mobileSafariHackListeners.forEach(function(remove) {
                return remove();
            });
        };
    }, [
        ref,
        disabled,
        clickTrigger,
        handleMouseCapture,
        handleMouse,
        handleKeyUp
    ]);
}
const __TURBOPACK__default__export__ = useRootClose;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/useWaitForDOMRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useWaitForDOMRef,
    "resolveContainerRef",
    ()=>resolveContainerRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/dom-helpers/esm/ownerDocument.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var resolveContainerRef = function resolveContainerRef(ref) {
    var _ref;
    if (typeof document === 'undefined') return null;
    if (ref == null) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$dom$2d$helpers$2f$esm$2f$ownerDocument$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().body;
    if (typeof ref === 'function') ref = ref();
    if (ref && 'current' in ref) ref = ref.current;
    if ((_ref = ref) != null && _ref.nodeType) return ref || null;
    return null;
};
function useWaitForDOMRef(ref, onResolved) {
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return resolveContainerRef(ref);
    }), resolvedRef = _useState[0], setRef = _useState[1];
    if (!resolvedRef) {
        var earlyRef = resolveContainerRef(ref);
        if (earlyRef) setRef(earlyRef);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (onResolved && resolvedRef) {
            onResolved(resolvedRef);
        }
    }, [
        onResolved,
        resolvedRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var nextRef = resolveContainerRef(ref);
        if (nextRef !== resolvedRef) {
            setRef(nextRef);
        }
    }, [
        ref,
        resolvedRef
    ]);
    return resolvedRef;
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mergeOptionsWithPopperConfig,
    "toModifierArray",
    ()=>toModifierArray,
    "toModifierMap",
    ()=>toModifierMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
;
function toModifierMap(modifiers) {
    var result = {};
    if (!Array.isArray(modifiers)) {
        return modifiers || result;
    } // eslint-disable-next-line no-unused-expressions
    modifiers == null ? void 0 : modifiers.forEach(function(m) {
        result[m.name] = m;
    });
    return result;
}
function toModifierArray(map) {
    if (map === void 0) {
        map = {};
    }
    if (Array.isArray(map)) return map;
    return Object.keys(map).map(function(k) {
        map[k].name = k;
        return map[k];
    });
}
function mergeOptionsWithPopperConfig(_ref) {
    var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
    var enabled = _ref.enabled, enableEvents = _ref.enableEvents, placement = _ref.placement, flip = _ref.flip, offset = _ref.offset, fixed = _ref.fixed, containerPadding = _ref.containerPadding, arrowElement = _ref.arrowElement, _ref$popperConfig = _ref.popperConfig, popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
    var modifiers = toModifierMap(popperConfig.modifiers);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, popperConfig, {
        placement: placement,
        enabled: enabled,
        strategy: fixed ? 'fixed' : popperConfig.strategy,
        modifiers: toModifierArray((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, modifiers, {
            eventListeners: {
                enabled: enableEvents
            },
            preventOverflow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, modifiers.preventOverflow, {
                options: containerPadding ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                    padding: containerPadding
                }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
            }),
            offset: {
                options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                    offset: offset
                }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
            },
            arrow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, modifiers.arrow, {
                enabled: !!arrowElement,
                options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
                    element: arrowElement
                })
            }),
            flip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                enabled: !!flip
            }, modifiers.flip)
        }))
    });
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/Overlay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCallbackRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@restart/hooks/esm/useCallbackRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@restart/hooks/esm/useMergedRefs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@popperjs/core/lib/enums.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$usePopper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/usePopper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$useRootClose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/useRootClose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$useWaitForDOMRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/useWaitForDOMRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$mergeOptionsWithPopperConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */ var Overlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(function(props, outerRef) {
    var flip = props.flip, offset = props.offset, placement = props.placement, _props$containerPaddi = props.containerPadding, containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi, _props$popperConfig = props.popperConfig, popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig, Transition = props.transition;
    var _useCallbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCallbackRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(), rootElement = _useCallbackRef[0], attachRef = _useCallbackRef[1];
    var _useCallbackRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useCallbackRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(), arrowElement = _useCallbackRef2[0], attachArrowRef = _useCallbackRef2[1];
    var mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$restart$2f$hooks$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(attachRef, outerRef);
    var container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$useWaitForDOMRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props.container);
    var target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$useWaitForDOMRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props.target);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!props.show), exited = _useState[0], setExited = _useState[1];
    var _usePopper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$usePopper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(target, rootElement, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$mergeOptionsWithPopperConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        placement: placement,
        enableEvents: !!props.show,
        containerPadding: containerPadding || 5,
        flip: flip,
        offset: offset,
        arrowElement: arrowElement,
        popperConfig: popperConfig
    })), styles = _usePopper.styles, attributes = _usePopper.attributes, popper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutPropertiesLoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_usePopper, [
        "styles",
        "attributes"
    ]);
    if (props.show) {
        if (exited) setExited(false);
    } else if (!props.transition && !exited) {
        setExited(true);
    }
    var handleHidden = function handleHidden() {
        setExited(true);
        if (props.onExited) {
            props.onExited.apply(props, arguments);
        }
    }; // Don't un-render the overlay while it's transitioning out.
    var mountOverlay = props.show || Transition && !exited;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$useRootClose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(rootElement, props.onHide, {
        disabled: !props.rootClose || props.rootCloseDisabled,
        clickTrigger: props.rootCloseEvent
    });
    if (!mountOverlay) {
        // Don't bother showing anything if we don't have to.
        return null;
    }
    var child = props.children((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, popper, {
        show: !!props.show,
        props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, attributes.popper, {
            style: styles.popper,
            ref: mergedRef
        }),
        arrowProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, attributes.arrow, {
            style: styles.arrow,
            ref: attachArrowRef
        })
    }));
    if (Transition) {
        var onExit = props.onExit, onExiting = props.onExiting, onEnter = props.onEnter, onEntering = props.onEntering, onEntered = props.onEntered;
        child = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Transition, {
            "in": props.show,
            appear: true,
            onExit: onExit,
            onExiting: onExiting,
            onExited: handleHidden,
            onEnter: onEnter,
            onEntering: onEntering,
            onEntered: onEntered
        }, child);
    }
    return container ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
Overlay.propTypes = {
    /**
   * Set the visibility of the Overlay
   */ show: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /** Specify where the overlay element is positioned in relation to the target element */ placement: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["placements"]),
    /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */ target: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */ container: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */ flip: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired,
    /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */ containerPadding: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */ popperConfig: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */ rootClose: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Specify event for toggling overlay
   */ rootCloseEvent: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        'click',
        'mousedown'
    ]),
    /**
   * Specify disabled for disable RootCloseWrapper
   */ rootCloseDisabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */ onHide: function onHide(props) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (props.rootClose) {
            var _PropTypes$func;
            return (_PropTypes$func = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func).isRequired.apply(_PropTypes$func, [
                props
            ].concat(args));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.apply(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], [
            props
        ].concat(args));
    },
    /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */ // @ts-ignore
    transition: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * Callback fired before the Overlay transitions in
   */ onEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired as the Overlay begins to transition in
   */ onEntering: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the Overlay finishes transitioning in
   */ onEntered: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired right before the Overlay transitions out
   */ onExit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired as the Overlay begins to transition out
   */ onExiting: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Callback fired after the Overlay finishes transitioning out
   */ onExited: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func
};
const __TURBOPACK__default__export__ = Overlay;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/Overlay.js [app-ssr] (ecmascript) <export default as Overlay>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overlay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$Overlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$overlays$2f$esm$2f$Overlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/react-overlays/esm/Overlay.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/warning/warning.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
var warning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for(var key = 1; key < len; key++){
            args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++){
            args[key - 2] = arguments[key];
        }
        if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
            printWarning.apply(null, [
                format
            ].concat(args));
        }
    };
}
module.exports = warning;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/memoize-one/dist/memoize-one.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>memoizeOne
]);
var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === 'number' && value !== value;
};
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for(var i = 0; i < newInputs.length; i++){
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}
function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) {
        isEqual = areInputsEqual;
    }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for(var _i = 0; _i < arguments.length; _i++){
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}
;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dayjs/plugin/isBetween.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, i) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = i() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(e, i, t) {
        i.prototype.isBetween = function(e, i, s, f) {
            var n = t(e), o = t(i), r = "(" === (f = f || "()")[0], u = ")" === f[1];
            return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
        };
    };
});
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dayjs/plugin/isSameOrAfter.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = t() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(e, t) {
        t.prototype.isSameOrAfter = function(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
        };
    };
});
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dayjs/plugin/isSameOrBefore.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, i) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = i() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(e, i) {
        i.prototype.isSameOrBefore = function(e, i) {
            return this.isSame(e, i) || this.isBefore(e, i);
        };
    };
});
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dayjs/plugin/localeData.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(n, e) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = e() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(n, e, t) {
        var r = e.prototype, o = function(n) {
            return n && (n.indexOf ? n : n.s);
        }, u = function(n, e, t, r, u) {
            var i = n.name ? n : n.$locale(), a = o(i[e]), s = o(i[t]), f = a || s.map(function(n) {
                return n.slice(0, r);
            });
            if (!u) return f;
            var d = i.weekStart;
            return f.map(function(n, e) {
                return f[(e + (d || 0)) % 7];
            });
        }, i = function() {
            return t.Ls[t.locale()];
        }, a = function(n, e) {
            return n.formats[e] || function(n) {
                return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n, e, t) {
                    return e || t.slice(1);
                });
            }(n.formats[e.toUpperCase()]);
        }, s = function() {
            var n = this;
            return {
                months: function(e) {
                    return e ? e.format("MMMM") : u(n, "months");
                },
                monthsShort: function(e) {
                    return e ? e.format("MMM") : u(n, "monthsShort", "months", 3);
                },
                firstDayOfWeek: function() {
                    return n.$locale().weekStart || 0;
                },
                weekdays: function(e) {
                    return e ? e.format("dddd") : u(n, "weekdays");
                },
                weekdaysMin: function(e) {
                    return e ? e.format("dd") : u(n, "weekdaysMin", "weekdays", 2);
                },
                weekdaysShort: function(e) {
                    return e ? e.format("ddd") : u(n, "weekdaysShort", "weekdays", 3);
                },
                longDateFormat: function(e) {
                    return a(n.$locale(), e);
                },
                meridiem: this.$locale().meridiem,
                ordinal: this.$locale().ordinal
            };
        };
        r.localeData = function() {
            return s.bind(this)();
        }, t.localeData = function() {
            var n = i();
            return {
                firstDayOfWeek: function() {
                    return n.weekStart || 0;
                },
                weekdays: function() {
                    return t.weekdays();
                },
                weekdaysShort: function() {
                    return t.weekdaysShort();
                },
                weekdaysMin: function() {
                    return t.weekdaysMin();
                },
                months: function() {
                    return t.months();
                },
                monthsShort: function() {
                    return t.monthsShort();
                },
                longDateFormat: function(e) {
                    return a(n, e);
                },
                meridiem: n.meridiem,
                ordinal: n.ordinal
            };
        }, t.months = function() {
            return u(i(), "months");
        }, t.monthsShort = function() {
            return u(i(), "monthsShort", "months", 3);
        }, t.weekdays = function(n) {
            return u(i(), "weekdays", null, null, n);
        }, t.weekdaysShort = function(n) {
            return u(i(), "weekdaysShort", "weekdays", 3, n);
        }, t.weekdaysMin = function(n) {
            return u(i(), "weekdaysMin", "weekdays", 2, n);
        };
    };
});
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dayjs/plugin/localizedFormat.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = t() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    var e = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    return function(t, o, n) {
        var r = o.prototype, i = r.format;
        n.en.formats = e, r.format = function(t) {
            void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
            var o = this.$locale().formats, n = function(t, o) {
                return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t, n, r) {
                    var i = r && r.toUpperCase();
                    return n || o[r] || e[r] || o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e, t, o) {
                        return t || o.slice(1);
                    });
                });
            }(t, void 0 === o ? {} : o);
            return i.call(this, n);
        };
    };
});
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dayjs/plugin/minMax.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, n) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = n() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(e, n, t) {
        var i = function(e, n) {
            if (!n || !n.length || 1 === n.length && !n[0] || 1 === n.length && Array.isArray(n[0]) && !n[0].length) return null;
            var t;
            1 === n.length && n[0].length > 0 && (n = n[0]);
            t = (n = n.filter(function(e) {
                return e;
            }))[0];
            for(var i = 1; i < n.length; i += 1)n[i].isValid() && !n[i][e](t) || (t = n[i]);
            return t;
        };
        t.max = function() {
            var e = [].slice.call(arguments, 0);
            return i("isAfter", e);
        }, t.min = function() {
            var e = [].slice.call(arguments, 0);
            return i("isBefore", e);
        };
    };
});
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dayjs/plugin/utc.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(t, i) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = i() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
    return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t) {
            var i = {
                date: t,
                utc: !0,
                args: arguments
            };
            return new f(i);
        }, u.utc = function(i) {
            var e = n(this.toDate(), {
                locale: this.$L,
                utc: !0
            });
            return i ? e.add(this.utcOffset(), t) : e;
        }, u.local = function() {
            return n(this.toDate(), {
                locale: this.$L,
                utc: !1
            });
        };
        var o = u.parse;
        u.parse = function(t) {
            t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), o.call(this, t);
        };
        var r = u.init;
        u.init = function() {
            if (this.$u) {
                var t = this.$d;
                this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds();
            } else r.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s, f) {
            var n = this.$utils().u;
            if (n(s)) return this.$u ? 0 : n(this.$offset) ? a.call(this) : this.$offset;
            if ("string" == typeof s && (s = function(t) {
                void 0 === t && (t = "");
                var s = t.match(i);
                if (!s) return null;
                var f = ("" + s[0]).match(e) || [
                    "-",
                    0,
                    0
                ], n = f[0], u = 60 * +f[1] + +f[2];
                return 0 === u ? 0 : "+" === n ? u : -u;
            }(s), null === s)) return this;
            var u = Math.abs(s) <= 16 ? 60 * s : s, o = this;
            if (f) return o.$offset = u, o.$u = 0 === s, o;
            if (0 !== s) {
                var r = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                (o = this.local().add(u + r, t)).$offset = u, o.$x.$localOffset = r;
            } else o = this.utc();
            return o;
        };
        var h = u.format;
        u.format = function(t) {
            var i = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return h.call(this, i);
        }, u.valueOf = function() {
            var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
            return this.$d.valueOf() - 6e4 * t;
        }, u.isUTC = function() {
            return !!this.$u;
        }, u.toISOString = function() {
            return this.toDate().toISOString();
        }, u.toString = function() {
            return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t) {
            return "s" === t && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t, i, e) {
            if (t && this.$u === t.$u) return c.call(this, t, i, e);
            var s = this.local(), f = n(t).local();
            return c.call(s, f, i, e);
        };
    };
});
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/dayjs/plugin/isLeapYear.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = t() : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    "use strict";
    return function(e, t) {
        t.prototype.isLeapYear = function() {
            return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
        };
    };
});
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/native.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomUUID"]
};
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/rng.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256);
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomFillSync"])(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/regex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/validate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/regex.js [app-ssr] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/validate.js [app-ssr] (ecmascript)");
;
const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/v4.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$native$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/native.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/rng.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/stringify.js [app-ssr] (ecmascript)");
;
;
;
function _v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$native$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$native$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    return _v4(options, buf, offset);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/v4.js [app-ssr] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/v4.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 5h16",
            key: "1tepv9"
        }
    ],
    [
        "path",
        {
            d: "M4 12h16",
            key: "1lakjw"
        }
    ],
    [
        "path",
        {
            d: "M4 19h16",
            key: "1djgab"
        }
    ]
];
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("menu", __iconNode);
;
 //# sourceMappingURL=menu.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>User
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
];
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("user", __iconNode);
;
 //# sourceMappingURL=user.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MessageCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
            key: "1sd12s"
        }
    ]
];
const MessageCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("message-circle", __iconNode);
;
 //# sourceMappingURL=message-circle.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Calendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("calendar", __iconNode);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/pill.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Pill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",
            key: "wa1lgi"
        }
    ],
    [
        "path",
        {
            d: "m8.5 8.5 7 7",
            key: "rvfmvr"
        }
    ]
];
const Pill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("pill", __iconNode);
;
 //# sourceMappingURL=pill.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/pill.js [app-ssr] (ecmascript) <export default as Pill>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pill",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/pill.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
            key: "1i5ecw"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const Settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("settings", __iconNode);
;
 //# sourceMappingURL=settings.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Bell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10.268 21a2 2 0 0 0 3.464 0",
            key: "vwvbt9"
        }
    ],
    [
        "path",
        {
            d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
            key: "11g9vi"
        }
    ]
];
const Bell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("bell", __iconNode);
;
 //# sourceMappingURL=bell.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bell",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/message-square-heart.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MessageSquareHeart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
            key: "18887p"
        }
    ],
    [
        "path",
        {
            d: "M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5",
            key: "1faxuh"
        }
    ]
];
const MessageSquareHeart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("message-square-heart", __iconNode);
;
 //# sourceMappingURL=message-square-heart.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/message-square-heart.js [app-ssr] (ecmascript) <export default as MessageSquareHeart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageSquareHeart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/message-square-heart.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Info
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 16v-4",
            key: "1dtifu"
        }
    ],
    [
        "path",
        {
            d: "M12 8h.01",
            key: "e9boi3"
        }
    ]
];
const Info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("info", __iconNode);
;
 //# sourceMappingURL=info.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Info",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Plus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CirclePlus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M8 12h8",
            key: "1wcyev"
        }
    ],
    [
        "path",
        {
            d: "M12 8v8",
            key: "napkw2"
        }
    ]
];
const CirclePlus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-plus", __iconNode);
;
 //# sourceMappingURL=circle-plus.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlusCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/trash.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Trash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }
    ],
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }
    ]
];
const Trash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("trash", __iconNode);
;
 //# sourceMappingURL=trash.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/trash.js [app-ssr] (ecmascript) <export default as Trash>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/trash.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@tanstack/virtual-core/dist/esm/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "approxEqual",
    ()=>approxEqual,
    "debounce",
    ()=>debounce,
    "memo",
    ()=>memo,
    "notUndefined",
    ()=>notUndefined
]);
function memo(getDeps, fn, opts) {
    let deps = opts.initialDeps ?? [];
    let result;
    function memoizedFunction() {
        var _a, _b, _c, _d;
        let depTime;
        if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
        const newDeps = getDeps();
        const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index)=>deps[index] !== dep);
        if (!depsChanged) {
            return result;
        }
        deps = newDeps;
        let resultTime;
        if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
        result = fn(...newDeps);
        if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
            const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
            const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
            const resultFpsPercentage = resultEndTime / 16;
            const pad = (str, num)=>{
                str = String(str);
                while(str.length < num){
                    str = " " + str;
                }
                return str;
            };
            console.info(`%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
        }
        (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
        return result;
    }
    memoizedFunction.updateDeps = (newDeps)=>{
        deps = newDeps;
    };
    return memoizedFunction;
}
function notUndefined(value, msg) {
    if (value === void 0) {
        throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
    } else {
        return value;
    }
}
const approxEqual = (a, b)=>Math.abs(a - b) < 1.01;
const debounce = (targetWindow, fn, ms)=>{
    let timeoutId;
    return function(...args) {
        targetWindow.clearTimeout(timeoutId);
        timeoutId = targetWindow.setTimeout(()=>fn.apply(this, args), ms);
    };
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@tanstack/virtual-core/dist/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Virtualizer",
    ()=>Virtualizer,
    "defaultKeyExtractor",
    ()=>defaultKeyExtractor,
    "defaultRangeExtractor",
    ()=>defaultRangeExtractor,
    "elementScroll",
    ()=>elementScroll,
    "measureElement",
    ()=>measureElement,
    "observeElementOffset",
    ()=>observeElementOffset,
    "observeElementRect",
    ()=>observeElementRect,
    "observeWindowOffset",
    ()=>observeWindowOffset,
    "observeWindowRect",
    ()=>observeWindowRect,
    "windowScroll",
    ()=>windowScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@tanstack/virtual-core/dist/esm/utils.js [app-ssr] (ecmascript)");
;
const getRect = (element)=>{
    const { offsetWidth, offsetHeight } = element;
    return {
        width: offsetWidth,
        height: offsetHeight
    };
};
const defaultKeyExtractor = (index)=>index;
const defaultRangeExtractor = (range)=>{
    const start = Math.max(range.startIndex - range.overscan, 0);
    const end = Math.min(range.endIndex + range.overscan, range.count - 1);
    const arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
};
const observeElementRect = (instance, cb)=>{
    const element = instance.scrollElement;
    if (!element) {
        return;
    }
    const targetWindow = instance.targetWindow;
    if (!targetWindow) {
        return;
    }
    const handler = (rect)=>{
        const { width, height } = rect;
        cb({
            width: Math.round(width),
            height: Math.round(height)
        });
    };
    handler(getRect(element));
    if (!targetWindow.ResizeObserver) {
        return ()=>{};
    }
    const observer = new targetWindow.ResizeObserver((entries)=>{
        const run = ()=>{
            const entry = entries[0];
            if (entry == null ? void 0 : entry.borderBoxSize) {
                const box = entry.borderBoxSize[0];
                if (box) {
                    handler({
                        width: box.inlineSize,
                        height: box.blockSize
                    });
                    return;
                }
            }
            handler(getRect(element));
        };
        instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
    });
    observer.observe(element, {
        box: "border-box"
    });
    return ()=>{
        observer.unobserve(element);
    };
};
const addEventListenerOptions = {
    passive: true
};
const observeWindowRect = (instance, cb)=>{
    const element = instance.scrollElement;
    if (!element) {
        return;
    }
    const handler = ()=>{
        cb({
            width: element.innerWidth,
            height: element.innerHeight
        });
    };
    handler();
    element.addEventListener("resize", handler, addEventListenerOptions);
    return ()=>{
        element.removeEventListener("resize", handler);
    };
};
const supportsScrollend = ("TURBOPACK compile-time truthy", 1) ? true : "TURBOPACK unreachable";
const observeElementOffset = (instance, cb)=>{
    const element = instance.scrollElement;
    if (!element) {
        return;
    }
    const targetWindow = instance.targetWindow;
    if (!targetWindow) {
        return;
    }
    let offset = 0;
    const fallback = instance.options.useScrollendEvent && supportsScrollend ? ()=>void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["debounce"])(targetWindow, ()=>{
        cb(offset, false);
    }, instance.options.isScrollingResetDelay);
    const createHandler = (isScrolling)=>()=>{
            const { horizontal, isRtl } = instance.options;
            offset = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
            fallback();
            cb(offset, isScrolling);
        };
    const handler = createHandler(true);
    const endHandler = createHandler(false);
    endHandler();
    element.addEventListener("scroll", handler, addEventListenerOptions);
    const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
    if (registerScrollendEvent) {
        element.addEventListener("scrollend", endHandler, addEventListenerOptions);
    }
    return ()=>{
        element.removeEventListener("scroll", handler);
        if (registerScrollendEvent) {
            element.removeEventListener("scrollend", endHandler);
        }
    };
};
const observeWindowOffset = (instance, cb)=>{
    const element = instance.scrollElement;
    if (!element) {
        return;
    }
    const targetWindow = instance.targetWindow;
    if (!targetWindow) {
        return;
    }
    let offset = 0;
    const fallback = instance.options.useScrollendEvent && supportsScrollend ? ()=>void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["debounce"])(targetWindow, ()=>{
        cb(offset, false);
    }, instance.options.isScrollingResetDelay);
    const createHandler = (isScrolling)=>()=>{
            offset = element[instance.options.horizontal ? "scrollX" : "scrollY"];
            fallback();
            cb(offset, isScrolling);
        };
    const handler = createHandler(true);
    const endHandler = createHandler(false);
    endHandler();
    element.addEventListener("scroll", handler, addEventListenerOptions);
    const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
    if (registerScrollendEvent) {
        element.addEventListener("scrollend", endHandler, addEventListenerOptions);
    }
    return ()=>{
        element.removeEventListener("scroll", handler);
        if (registerScrollendEvent) {
            element.removeEventListener("scrollend", endHandler);
        }
    };
};
const measureElement = (element, entry, instance)=>{
    if (entry == null ? void 0 : entry.borderBoxSize) {
        const box = entry.borderBoxSize[0];
        if (box) {
            const size = Math.round(box[instance.options.horizontal ? "inlineSize" : "blockSize"]);
            return size;
        }
    }
    return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
};
const windowScroll = (offset, { adjustments = 0, behavior }, instance)=>{
    var _a, _b;
    const toOffset = offset + adjustments;
    (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
        [instance.options.horizontal ? "left" : "top"]: toOffset,
        behavior
    });
};
const elementScroll = (offset, { adjustments = 0, behavior }, instance)=>{
    var _a, _b;
    const toOffset = offset + adjustments;
    (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
        [instance.options.horizontal ? "left" : "top"]: toOffset,
        behavior
    });
};
class Virtualizer {
    constructor(opts){
        this.unsubs = [];
        this.scrollElement = null;
        this.targetWindow = null;
        this.isScrolling = false;
        this.measurementsCache = [];
        this.itemSizeCache = /* @__PURE__ */ new Map();
        this.pendingMeasuredCacheIndexes = [];
        this.scrollRect = null;
        this.scrollOffset = null;
        this.scrollDirection = null;
        this.scrollAdjustments = 0;
        this.elementsCache = /* @__PURE__ */ new Map();
        this.observer = /* @__PURE__ */ (()=>{
            let _ro = null;
            const get = ()=>{
                if (_ro) {
                    return _ro;
                }
                if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
                    return null;
                }
                return _ro = new this.targetWindow.ResizeObserver((entries)=>{
                    entries.forEach((entry)=>{
                        const run = ()=>{
                            this._measureElement(entry.target, entry);
                        };
                        this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
                    });
                });
            };
            return {
                disconnect: ()=>{
                    var _a;
                    (_a = get()) == null ? void 0 : _a.disconnect();
                    _ro = null;
                },
                observe: (target)=>{
                    var _a;
                    return (_a = get()) == null ? void 0 : _a.observe(target, {
                        box: "border-box"
                    });
                },
                unobserve: (target)=>{
                    var _a;
                    return (_a = get()) == null ? void 0 : _a.unobserve(target);
                }
            };
        })();
        this.range = null;
        this.setOptions = (opts2)=>{
            Object.entries(opts2).forEach(([key, value])=>{
                if (typeof value === "undefined") delete opts2[key];
            });
            this.options = {
                debug: false,
                initialOffset: 0,
                overscan: 1,
                paddingStart: 0,
                paddingEnd: 0,
                scrollPaddingStart: 0,
                scrollPaddingEnd: 0,
                horizontal: false,
                getItemKey: defaultKeyExtractor,
                rangeExtractor: defaultRangeExtractor,
                onChange: ()=>{},
                measureElement,
                initialRect: {
                    width: 0,
                    height: 0
                },
                scrollMargin: 0,
                gap: 0,
                indexAttribute: "data-index",
                initialMeasurementsCache: [],
                lanes: 1,
                isScrollingResetDelay: 150,
                enabled: true,
                isRtl: false,
                useScrollendEvent: false,
                useAnimationFrameWithResizeObserver: false,
                ...opts2
            };
        };
        this.notify = (sync)=>{
            var _a, _b;
            (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
        };
        this.maybeNotify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(()=>{
            this.calculateRange();
            return [
                this.isScrolling,
                this.range ? this.range.startIndex : null,
                this.range ? this.range.endIndex : null
            ];
        }, (isScrolling)=>{
            this.notify(isScrolling);
        }, {
            key: ("TURBOPACK compile-time value", "development") !== "production" && "maybeNotify",
            debug: ()=>this.options.debug,
            initialDeps: [
                this.isScrolling,
                this.range ? this.range.startIndex : null,
                this.range ? this.range.endIndex : null
            ]
        });
        this.cleanup = ()=>{
            this.unsubs.filter(Boolean).forEach((d)=>d());
            this.unsubs = [];
            this.observer.disconnect();
            this.scrollElement = null;
            this.targetWindow = null;
        };
        this._didMount = ()=>{
            return ()=>{
                this.cleanup();
            };
        };
        this._willUpdate = ()=>{
            var _a;
            const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
            if (this.scrollElement !== scrollElement) {
                this.cleanup();
                if (!scrollElement) {
                    this.maybeNotify();
                    return;
                }
                this.scrollElement = scrollElement;
                if (this.scrollElement && "ownerDocument" in this.scrollElement) {
                    this.targetWindow = this.scrollElement.ownerDocument.defaultView;
                } else {
                    this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
                }
                this.elementsCache.forEach((cached)=>{
                    this.observer.observe(cached);
                });
                this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0
                });
                this.unsubs.push(this.options.observeElementRect(this, (rect)=>{
                    this.scrollRect = rect;
                    this.maybeNotify();
                }));
                this.unsubs.push(this.options.observeElementOffset(this, (offset, isScrolling)=>{
                    this.scrollAdjustments = 0;
                    this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
                    this.scrollOffset = offset;
                    this.isScrolling = isScrolling;
                    this.maybeNotify();
                }));
            }
        };
        this.getSize = ()=>{
            if (!this.options.enabled) {
                this.scrollRect = null;
                return 0;
            }
            this.scrollRect = this.scrollRect ?? this.options.initialRect;
            return this.scrollRect[this.options.horizontal ? "width" : "height"];
        };
        this.getScrollOffset = ()=>{
            if (!this.options.enabled) {
                this.scrollOffset = null;
                return 0;
            }
            this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
            return this.scrollOffset;
        };
        this.getFurthestMeasurement = (measurements, index)=>{
            const furthestMeasurementsFound = /* @__PURE__ */ new Map();
            const furthestMeasurements = /* @__PURE__ */ new Map();
            for(let m = index - 1; m >= 0; m--){
                const measurement = measurements[m];
                if (furthestMeasurementsFound.has(measurement.lane)) {
                    continue;
                }
                const previousFurthestMeasurement = furthestMeasurements.get(measurement.lane);
                if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
                    furthestMeasurements.set(measurement.lane, measurement);
                } else if (measurement.end < previousFurthestMeasurement.end) {
                    furthestMeasurementsFound.set(measurement.lane, true);
                }
                if (furthestMeasurementsFound.size === this.options.lanes) {
                    break;
                }
            }
            return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b)=>{
                if (a.end === b.end) {
                    return a.index - b.index;
                }
                return a.end - b.end;
            })[0] : void 0;
        };
        this.getMeasurementOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(()=>[
                this.options.count,
                this.options.paddingStart,
                this.options.scrollMargin,
                this.options.getItemKey,
                this.options.enabled
            ], (count, paddingStart, scrollMargin, getItemKey, enabled)=>{
            this.pendingMeasuredCacheIndexes = [];
            return {
                count,
                paddingStart,
                scrollMargin,
                getItemKey,
                enabled
            };
        }, {
            key: false
        });
        this.getMeasurements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(()=>[
                this.getMeasurementOptions(),
                this.itemSizeCache
            ], ({ count, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache)=>{
            if (!enabled) {
                this.measurementsCache = [];
                this.itemSizeCache.clear();
                return [];
            }
            if (this.measurementsCache.length === 0) {
                this.measurementsCache = this.options.initialMeasurementsCache;
                this.measurementsCache.forEach((item)=>{
                    this.itemSizeCache.set(item.key, item.size);
                });
            }
            const min = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
            this.pendingMeasuredCacheIndexes = [];
            const measurements = this.measurementsCache.slice(0, min);
            for(let i = min; i < count; i++){
                const key = getItemKey(i);
                const furthestMeasurement = this.options.lanes === 1 ? measurements[i - 1] : this.getFurthestMeasurement(measurements, i);
                const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
                const measuredSize = itemSizeCache.get(key);
                const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
                const end = start + size;
                const lane = furthestMeasurement ? furthestMeasurement.lane : i % this.options.lanes;
                measurements[i] = {
                    index: i,
                    start,
                    size,
                    end,
                    key,
                    lane
                };
            }
            this.measurementsCache = measurements;
            return measurements;
        }, {
            key: ("TURBOPACK compile-time value", "development") !== "production" && "getMeasurements",
            debug: ()=>this.options.debug
        });
        this.calculateRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(()=>[
                this.getMeasurements(),
                this.getSize(),
                this.getScrollOffset(),
                this.options.lanes
            ], (measurements, outerSize, scrollOffset, lanes)=>{
            return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
                measurements,
                outerSize,
                scrollOffset,
                lanes
            }) : null;
        }, {
            key: ("TURBOPACK compile-time value", "development") !== "production" && "calculateRange",
            debug: ()=>this.options.debug
        });
        this.getVirtualIndexes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(()=>{
            let startIndex = null;
            let endIndex = null;
            const range = this.calculateRange();
            if (range) {
                startIndex = range.startIndex;
                endIndex = range.endIndex;
            }
            this.maybeNotify.updateDeps([
                this.isScrolling,
                startIndex,
                endIndex
            ]);
            return [
                this.options.rangeExtractor,
                this.options.overscan,
                this.options.count,
                startIndex,
                endIndex
            ];
        }, (rangeExtractor, overscan, count, startIndex, endIndex)=>{
            return startIndex === null || endIndex === null ? [] : rangeExtractor({
                startIndex,
                endIndex,
                overscan,
                count
            });
        }, {
            key: ("TURBOPACK compile-time value", "development") !== "production" && "getVirtualIndexes",
            debug: ()=>this.options.debug
        });
        this.indexFromElement = (node)=>{
            const attributeName = this.options.indexAttribute;
            const indexStr = node.getAttribute(attributeName);
            if (!indexStr) {
                console.warn(`Missing attribute name '${attributeName}={index}' on measured element.`);
                return -1;
            }
            return parseInt(indexStr, 10);
        };
        this._measureElement = (node, entry)=>{
            const index = this.indexFromElement(node);
            const item = this.measurementsCache[index];
            if (!item) {
                return;
            }
            const key = item.key;
            const prevNode = this.elementsCache.get(key);
            if (prevNode !== node) {
                if (prevNode) {
                    this.observer.unobserve(prevNode);
                }
                this.observer.observe(node);
                this.elementsCache.set(key, node);
            }
            if (node.isConnected) {
                this.resizeItem(index, this.options.measureElement(node, entry, this));
            }
        };
        this.resizeItem = (index, size)=>{
            const item = this.measurementsCache[index];
            if (!item) {
                return;
            }
            const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
            const delta = size - itemSize;
            if (delta !== 0) {
                if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
                    if (("TURBOPACK compile-time value", "development") !== "production" && this.options.debug) {
                        console.info("correction", delta);
                    }
                    this._scrollToOffset(this.getScrollOffset(), {
                        adjustments: this.scrollAdjustments += delta,
                        behavior: void 0
                    });
                }
                this.pendingMeasuredCacheIndexes.push(item.index);
                this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
                this.notify(false);
            }
        };
        this.measureElement = (node)=>{
            if (!node) {
                this.elementsCache.forEach((cached, key)=>{
                    if (!cached.isConnected) {
                        this.observer.unobserve(cached);
                        this.elementsCache.delete(key);
                    }
                });
                return;
            }
            this._measureElement(node, void 0);
        };
        this.getVirtualItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(()=>[
                this.getVirtualIndexes(),
                this.getMeasurements()
            ], (indexes, measurements)=>{
            const virtualItems = [];
            for(let k = 0, len = indexes.length; k < len; k++){
                const i = indexes[k];
                const measurement = measurements[i];
                virtualItems.push(measurement);
            }
            return virtualItems;
        }, {
            key: ("TURBOPACK compile-time value", "development") !== "production" && "getVirtualItems",
            debug: ()=>this.options.debug
        });
        this.getVirtualItemForOffset = (offset)=>{
            const measurements = this.getMeasurements();
            if (measurements.length === 0) {
                return void 0;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notUndefined"])(measurements[findNearestBinarySearch(0, measurements.length - 1, (index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notUndefined"])(measurements[index]).start, offset)]);
        };
        this.getOffsetForAlignment = (toOffset, align, itemSize = 0)=>{
            const size = this.getSize();
            const scrollOffset = this.getScrollOffset();
            if (align === "auto") {
                align = toOffset >= scrollOffset + size ? "end" : "start";
            }
            if (align === "center") {
                toOffset += (itemSize - size) / 2;
            } else if (align === "end") {
                toOffset -= size;
            }
            const maxOffset = this.getTotalSize() + this.options.scrollMargin - size;
            return Math.max(Math.min(maxOffset, toOffset), 0);
        };
        this.getOffsetForIndex = (index, align = "auto")=>{
            index = Math.max(0, Math.min(index, this.options.count - 1));
            const item = this.measurementsCache[index];
            if (!item) {
                return void 0;
            }
            const size = this.getSize();
            const scrollOffset = this.getScrollOffset();
            if (align === "auto") {
                if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
                    align = "end";
                } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
                    align = "start";
                } else {
                    return [
                        scrollOffset,
                        align
                    ];
                }
            }
            const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
            return [
                this.getOffsetForAlignment(toOffset, align, item.size),
                align
            ];
        };
        this.isDynamicMode = ()=>this.elementsCache.size > 0;
        this.scrollToOffset = (toOffset, { align = "start", behavior } = {})=>{
            if (behavior === "smooth" && this.isDynamicMode()) {
                console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
            }
            this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
                adjustments: void 0,
                behavior
            });
        };
        this.scrollToIndex = (index, { align: initialAlign = "auto", behavior } = {})=>{
            if (behavior === "smooth" && this.isDynamicMode()) {
                console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
            }
            index = Math.max(0, Math.min(index, this.options.count - 1));
            let attempts = 0;
            const maxAttempts = 10;
            const tryScroll = (currentAlign)=>{
                if (!this.targetWindow) return;
                const offsetInfo = this.getOffsetForIndex(index, currentAlign);
                if (!offsetInfo) {
                    console.warn("Failed to get offset for index:", index);
                    return;
                }
                const [offset, align] = offsetInfo;
                this._scrollToOffset(offset, {
                    adjustments: void 0,
                    behavior
                });
                this.targetWindow.requestAnimationFrame(()=>{
                    const currentOffset = this.getScrollOffset();
                    const afterInfo = this.getOffsetForIndex(index, align);
                    if (!afterInfo) {
                        console.warn("Failed to get offset for index:", index);
                        return;
                    }
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["approxEqual"])(afterInfo[0], currentOffset)) {
                        scheduleRetry(align);
                    }
                });
            };
            const scheduleRetry = (align)=>{
                if (!this.targetWindow) return;
                attempts++;
                if (attempts < maxAttempts) {
                    if (("TURBOPACK compile-time value", "development") !== "production" && this.options.debug) {
                        console.info("Schedule retry", attempts, maxAttempts);
                    }
                    this.targetWindow.requestAnimationFrame(()=>tryScroll(align));
                } else {
                    console.warn(`Failed to scroll to index ${index} after ${maxAttempts} attempts.`);
                }
            };
            tryScroll(initialAlign);
        };
        this.scrollBy = (delta, { behavior } = {})=>{
            if (behavior === "smooth" && this.isDynamicMode()) {
                console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
            }
            this._scrollToOffset(this.getScrollOffset() + delta, {
                adjustments: void 0,
                behavior
            });
        };
        this.getTotalSize = ()=>{
            var _a;
            const measurements = this.getMeasurements();
            let end;
            if (measurements.length === 0) {
                end = this.options.paddingStart;
            } else if (this.options.lanes === 1) {
                end = ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0;
            } else {
                const endByLane = Array(this.options.lanes).fill(null);
                let endIndex = measurements.length - 1;
                while(endIndex >= 0 && endByLane.some((val)=>val === null)){
                    const item = measurements[endIndex];
                    if (endByLane[item.lane] === null) {
                        endByLane[item.lane] = item.end;
                    }
                    endIndex--;
                }
                end = Math.max(...endByLane.filter((val)=>val !== null));
            }
            return Math.max(end - this.options.scrollMargin + this.options.paddingEnd, 0);
        };
        this._scrollToOffset = (offset, { adjustments, behavior })=>{
            this.options.scrollToFn(offset, {
                behavior,
                adjustments
            }, this);
        };
        this.measure = ()=>{
            this.itemSizeCache = /* @__PURE__ */ new Map();
            this.notify(false);
        };
        this.setOptions(opts);
    }
}
const findNearestBinarySearch = (low, high, getCurrentValue, value)=>{
    while(low <= high){
        const middle = (low + high) / 2 | 0;
        const currentValue = getCurrentValue(middle);
        if (currentValue < value) {
            low = middle + 1;
        } else if (currentValue > value) {
            high = middle - 1;
        } else {
            return middle;
        }
    }
    if (low > 0) {
        return low - 1;
    } else {
        return 0;
    }
};
function calculateRange({ measurements, outerSize, scrollOffset, lanes }) {
    const lastIndex = measurements.length - 1;
    const getOffset = (index)=>measurements[index].start;
    if (measurements.length <= lanes) {
        return {
            startIndex: 0,
            endIndex: lastIndex
        };
    }
    let startIndex = findNearestBinarySearch(0, lastIndex, getOffset, scrollOffset);
    let endIndex = startIndex;
    if (lanes === 1) {
        while(endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize){
            endIndex++;
        }
    } else if (lanes > 1) {
        const endPerLane = Array(lanes).fill(0);
        while(endIndex < lastIndex && endPerLane.some((pos)=>pos < scrollOffset + outerSize)){
            const item = measurements[endIndex];
            endPerLane[item.lane] = item.end;
            endIndex++;
        }
        const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
        while(startIndex >= 0 && startPerLane.some((pos)=>pos >= scrollOffset)){
            const item = measurements[startIndex];
            startPerLane[item.lane] = item.start;
            startIndex--;
        }
        startIndex = Math.max(0, startIndex - startIndex % lanes);
        endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
    }
    return {
        startIndex,
        endIndex
    };
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/WEBSITE/MedApp/node_modules/@tanstack/react-virtual/dist/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVirtualizer",
    ()=>useVirtualizer,
    "useWindowVirtualizer",
    ()=>useWindowVirtualizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@tanstack/virtual-core/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
const useIsomorphicLayoutEffect = typeof document !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
function useVirtualizerBase(options) {
    const rerender = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"](()=>({}), {})[1];
    const resolvedOptions = {
        ...options,
        onChange: (instance2, sync)=>{
            var _a;
            if (sync) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(rerender);
            } else {
                rerender();
            }
            (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
        }
    };
    const [instance] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Virtualizer"](resolvedOptions));
    instance.setOptions(resolvedOptions);
    useIsomorphicLayoutEffect(()=>{
        return instance._didMount();
    }, []);
    useIsomorphicLayoutEffect(()=>{
        return instance._willUpdate();
    });
    return instance;
}
function useVirtualizer(options) {
    return useVirtualizerBase({
        observeElementRect: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["observeElementRect"],
        observeElementOffset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["observeElementOffset"],
        scrollToFn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["elementScroll"],
        ...options
    });
}
function useWindowVirtualizer(options) {
    return useVirtualizerBase({
        getScrollElement: ()=>typeof document !== "undefined" ? window : null,
        observeElementRect: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["observeWindowRect"],
        observeElementOffset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["observeWindowOffset"],
        scrollToFn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$virtual$2d$core$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["windowScroll"],
        initialOffset: ()=>typeof document !== "undefined" ? window.scrollY : 0,
        ...options
    });
}
;
 //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=c869f_82836611._.js.map