module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "calendar": "CalendarCard-module__UY31_q__calendar",
  "dateBox": "CalendarCard-module__UY31_q__dateBox",
  "dayName": "CalendarCard-module__UY31_q__dayName",
  "dayNumber": "CalendarCard-module__UY31_q__dayNumber",
  "eventCard": "CalendarCard-module__UY31_q__eventCard",
  "eventList": "CalendarCard-module__UY31_q__eventList",
  "infoBox": "CalendarCard-module__UY31_q__infoBox",
  "month": "CalendarCard-module__UY31_q__month",
  "subtitle": "CalendarCard-module__UY31_q__subtitle",
  "timeBox": "CalendarCard-module__UY31_q__timeBox",
  "title": "CalendarCard-module__UY31_q__title",
  "upcoming": "CalendarCard-module__UY31_q__upcoming",
});
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Desktop/WEBSITE/MedApp/utils/userToken.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>userToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/v4.js [app-ssr] (ecmascript) <export default as v4>");
;
function userToken() {
    let token = localStorage.getItem("userToken");
    if (!token) {
        token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
        localStorage.setItem("userToken", token);
    }
    return token;
}
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "modal": "AddEventModal-module__24AhsG__modal",
  "modalButtons": "AddEventModal-module__24AhsG__modalButtons",
  "modalForm": "AddEventModal-module__24AhsG__modalForm",
  "modalOverlay": "AddEventModal-module__24AhsG__modalOverlay",
});
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$AddEventModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$utils$2f$userToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/utils/userToken.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const AddEventModal = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function MedicationsModal({ isOpen, slotInfo, onClose, setEvents }, ref) {
    if (!isOpen) return;
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    function handleAddEvent(slotInfo) {
        if (!title || !time) return;
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$utils$2f$userToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        const newEvent = {
            title,
            start: slotInfo.start,
            end: slotInfo.end,
            time: time,
            userToken: token
        };
        fetch("/api/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        }).then(()=>{
            setEvents((prev)=>[
                    ...prev,
                    {
                        ...newEvent
                    }
                ]);
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$AddEventModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalOverlay,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$AddEventModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Dodaj nowe wydarzenie"
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.js",
                    lineNumber: 42,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$AddEventModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalForm,
                    onSubmit: ()=>handleAddEvent(slotInfo),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Tytuł:",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: title,
                                    onChange: (e)=>setTitle(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.js",
                                    lineNumber: 49,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.js",
                            lineNumber: 47,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: "Godzina:"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.js",
                            lineNumber: 56,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "time",
                            value: time,
                            onChange: (e)=>setTime(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.js",
                            lineNumber: 57,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$AddEventModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalButtons,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    children: "Dodaj"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.js",
                                    lineNumber: 64,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    children: "Anuluj"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.js",
                                    lineNumber: 65,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.js",
                            lineNumber: 63,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.js",
                    lineNumber: 43,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.js",
            lineNumber: 41,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.js",
        lineNumber: 40,
        columnNumber: 3
    }, this), document.body);
});
const __TURBOPACK__default__export__ = AddEventModal;
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$CalendarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/react-big-calendar/dist/react-big-calendar.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/moment/moment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$moment$2f$locale$2f$pl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/moment/locale/pl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$utils$2f$userToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/utils/userToken.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$AddEventModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/AddEventModal.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].locale("pl");
const localizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["momentLocalizer"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function CalendarCard() {
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$utils$2f$userToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        fetch(`/api/events?token=${token}`).then((res)=>res.json()).then((data)=>{
            const formatted = data.map((event1)=>({
                    ...event1,
                    start: new Date(event1.start),
                    end: new Date(event1.end)
                }));
            setEvents(formatted);
        });
    }, []);
    function eventPropGetter(event1) {
        const isPast = new Date(event1.start) < new Date();
        if (isPast) {
            return {
                className: "old"
            };
        }
        return {
            className: "accurate"
        };
    }
    function handleDeleteEvent() {
        alert("Usun event");
    }
    const [selectedSlot, setSelectedSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const modal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    function handleSelectSlot(slotInfo) {
        setSelectedSlot(slotInfo);
        setIsOpen(true);
        console.log(upcomingEvents);
    }
    function handleClose() {
        setTitle("");
        setTime("");
        onClose();
    }
    const upcomingEvents = events.filter((e)=>e.start > new Date()).sort((a, b)=>a.start - b.start).splice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$CalendarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].calendar} ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$CalendarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$react$2d$big$2d$calendar$2f$dist$2f$react$2d$big$2d$calendar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Calendar"], {
                localizer: localizer,
                events: events,
                startAccessor: "start",
                endAccessor: "end",
                selectable: true,
                eventPropGetter: eventPropGetter,
                messages: {
                    today: "Dziś",
                    next: "Dalej",
                    previous: "Wstecz",
                    week: "Week",
                    day: "Day",
                    month: "Month",
                    day: "Dzień",
                    month: "Miesiąc"
                },
                views: [
                    "month",
                    "day"
                ],
                style: {
                    height: 600
                },
                onSelectEvent: ()=>handleDeleteEvent(event.start),
                onSelectSlot: handleSelectSlot
            }, void 0, false, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
                lineNumber: 67,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$CalendarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].upcoming,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Najbliższe wydarzenia:"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
                        lineNumber: 90,
                        columnNumber: 5
                    }, this),
                    upcomingEvents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$CalendarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventList,
                        children: upcomingEvents.map((upcomingEvent, i)=>{
                            const dayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(upcomingEvent.start).format("ddd");
                            const dayNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(upcomingEvent.start).format("DD");
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$CalendarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eventCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$CalendarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateBox,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$CalendarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dayName,
                                                children: dayName
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
                                                lineNumber: 100,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$CalendarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dayNumber,
                                                children: dayNumber
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
                                                lineNumber: 101,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
                                        lineNumber: 99,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$CalendarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoBox,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$CalendarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                                children: upcomingEvent.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
                                                lineNumber: 104,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$CalendarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeBox,
                                                children: upcomingEvent.time
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
                                                lineNumber: 105,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
                                        lineNumber: 103,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
                                lineNumber: 98,
                                columnNumber: 9
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
                        lineNumber: 92,
                        columnNumber: 6
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Brak nadchodzących wydarzeń "
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
                        lineNumber: 112,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
                lineNumber: 89,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$CalendarCard$2f$AddEventModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ref: modal,
                isOpen: isOpen,
                slotInfo: selectedSlot,
                onClose: handleClose,
                setEvents: setEvents
            }, void 0, false, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
                lineNumber: 115,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/CalendarCard/CalendarCard.js",
        lineNumber: 66,
        columnNumber: 3
    }, this);
}
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "SideBar-module__FDpgia__active",
  "burger": "SideBar-module__FDpgia__burger",
  "logo": "SideBar-module__FDpgia__logo",
  "menu": "SideBar-module__FDpgia__menu",
  "sidebar": "SideBar-module__FDpgia__sidebar",
  "sidebar-header": "SideBar-module__FDpgia__sidebar-header",
  "sidebarHeader": "SideBar-module__FDpgia__sidebarHeader",
});
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SideBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$SideBar$2f$SideBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/pill.js [app-ssr] (ecmascript) <export default as Pill>");
"use client";
;
;
;
;
;
function SideBar() {
    const [menuActive, setMenuActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$SideBar$2f$SideBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$SideBar$2f$SideBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$SideBar$2f$SideBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                        children: "MedCare"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                        lineNumber: 14,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$SideBar$2f$SideBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].burger,
                        onClick: ()=>setMenuActive(!menuActive),
                        children: menuActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                            lineNumber: 19,
                            columnNumber: 20
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                            lineNumber: 19,
                            columnNumber: 38
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                        lineNumber: 15,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                lineNumber: 13,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$SideBar$2f$SideBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menu} ${menuActive ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$SideBar$2f$SideBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "#",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                                lineNumber: 25,
                                columnNumber: 6
                            }, this),
                            " Profil"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "#",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                                lineNumber: 28,
                                columnNumber: 6
                            }, this),
                            " Wiadomość"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                        lineNumber: 27,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "#",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                                lineNumber: 31,
                                columnNumber: 6
                            }, this),
                            " Kalendarz"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                        lineNumber: 30,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "#",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                                lineNumber: 34,
                                columnNumber: 6
                            }, this),
                            " Leki"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                        lineNumber: 33,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/SideBar/SideBar.js",
        lineNumber: 12,
        columnNumber: 3
    }, this);
}
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "currentDate": "WelcomeCard-module__2SY2WW__currentDate",
  "date": "WelcomeCard-module__2SY2WW__date",
  "welcome": "WelcomeCard-module__2SY2WW__welcome",
  "welcomeBtns": "WelcomeCard-module__2SY2WW__welcomeBtns",
  "welcomeText": "WelcomeCard-module__2SY2WW__welcomeText",
});
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WelcomeCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$WelcomeCard$2f$WelcomeCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
"use client";
;
;
;
;
function WelcomeCard() {
    const [formattedDate, setFormattedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const months = [
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopad",
        "Grudzień"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function updateDate() {
            const date = new Date();
            const month = months[date.getMonth()];
            const day = date.getDate();
            const year = date.getFullYear();
            const hour = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");
            setFormattedDate(`${month} ${day}, ${year} ${hour}:${minutes}`);
        }
        updateDate();
        const interval = setInterval(updateDate, 1000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$WelcomeCard$2f$WelcomeCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].welcome} ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$WelcomeCard$2f$WelcomeCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$WelcomeCard$2f$WelcomeCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].welcomeText,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$WelcomeCard$2f$WelcomeCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].currentDate,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {}, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.js",
                                lineNumber: 44,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$WelcomeCard$2f$WelcomeCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].date,
                                children: formattedDate
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.js",
                                lineNumber: 45,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.js",
                        lineNumber: 43,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Witaj w MedCare!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.js",
                        lineNumber: 47,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Miłego dnia, Łucja!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.js",
                        lineNumber: 48,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.js",
                lineNumber: 42,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$WelcomeCard$2f$WelcomeCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].welcomeBtns,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {}, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.js",
                            lineNumber: 52,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.js",
                        lineNumber: 51,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {}, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.js",
                            lineNumber: 55,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.js",
                        lineNumber: 54,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.js",
                lineNumber: 50,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/WelcomeCard/WelcomeCard.js",
        lineNumber: 41,
        columnNumber: 3
    }, this);
}
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeDot": "ContactCard-module__ZLOnEW__activeDot",
  "arrows": "ContactCard-module__ZLOnEW__arrows",
  "categories": "ContactCard-module__ZLOnEW__categories",
  "categoriesList": "ContactCard-module__ZLOnEW__categoriesList",
  "chatIcon": "ContactCard-module__ZLOnEW__chatIcon",
  "contact": "ContactCard-module__ZLOnEW__contact",
  "contactHeader": "ContactCard-module__ZLOnEW__contactHeader",
  "contactInfo": "ContactCard-module__ZLOnEW__contactInfo",
  "desktopOnly": "ContactCard-module__ZLOnEW__desktopOnly",
  "doctorCard": "ContactCard-module__ZLOnEW__doctorCard",
  "doctorImg": "ContactCard-module__ZLOnEW__doctorImg",
  "doctorInfo": "ContactCard-module__ZLOnEW__doctorInfo",
  "doctorName": "ContactCard-module__ZLOnEW__doctorName",
  "doctorSpecialty": "ContactCard-module__ZLOnEW__doctorSpecialty",
  "dot": "ContactCard-module__ZLOnEW__dot",
  "floatingClose": "ContactCard-module__ZLOnEW__floatingClose",
  "growIn": "ContactCard-module__ZLOnEW__growIn",
  "messageBtn": "ContactCard-module__ZLOnEW__messageBtn",
  "mobileOnly": "ContactCard-module__ZLOnEW__mobileOnly",
  "paginationDots": "ContactCard-module__ZLOnEW__paginationDots",
});
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "MessagesMenu-module__wQJhvq__active",
  "arrowIcon": "MessagesMenu-module__wQJhvq__arrowIcon",
  "avatar": "MessagesMenu-module__wQJhvq__avatar",
  "back": "MessagesMenu-module__wQJhvq__back",
  "chatDoctorHeader": "MessagesMenu-module__wQJhvq__chatDoctorHeader",
  "chatWindow": "MessagesMenu-module__wQJhvq__chatWindow",
  "close": "MessagesMenu-module__wQJhvq__close",
  "closeBar": "MessagesMenu-module__wQJhvq__closeBar",
  "closeBig": "MessagesMenu-module__wQJhvq__closeBig",
  "content": "MessagesMenu-module__wQJhvq__content",
  "doctorMsg": "MessagesMenu-module__wQJhvq__doctorMsg",
  "doctorName": "MessagesMenu-module__wQJhvq__doctorName",
  "floatingClose": "MessagesMenu-module__wQJhvq__floatingClose",
  "header": "MessagesMenu-module__wQJhvq__header",
  "input": "MessagesMenu-module__wQJhvq__input",
  "inputBar": "MessagesMenu-module__wQJhvq__inputBar",
  "item": "MessagesMenu-module__wQJhvq__item",
  "list": "MessagesMenu-module__wQJhvq__list",
  "name": "MessagesMenu-module__wQJhvq__name",
  "patientMsg": "MessagesMenu-module__wQJhvq__patientMsg",
  "rotateIn": "MessagesMenu-module__wQJhvq__rotateIn",
  "sendBtn": "MessagesMenu-module__wQJhvq__sendBtn",
  "shell": "MessagesMenu-module__wQJhvq__shell",
  "subtitle": "MessagesMenu-module__wQJhvq__subtitle",
  "tab": "MessagesMenu-module__wQJhvq__tab",
  "tabs": "MessagesMenu-module__wQJhvq__tabs",
  "time": "MessagesMenu-module__wQJhvq__time",
  "title": "MessagesMenu-module__wQJhvq__title",
});
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessagesMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$utils$2f$userToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/utils/userToken.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function MessagesMenu({ doctors, onCloseChat, selectedDoctor }) {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeDoctor, setActiveDoctor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(selectedDoctor);
    const [messageInput, setMessageInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeDoctor) return;
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$utils$2f$userToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        const doctorId = activeDoctor._id;
        fetch(`/api/conversations?token=${token}&doctorId=${doctorId}`).then((res)=>res.json()).then((data)=>{
            setMessages(data?.messages || []);
        });
    }, [
        activeDoctor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedDoctor !== null) {
            handleOpen(selectedDoctor);
        } else {
            setActiveDoctor(null);
        }
    }, [
        selectedDoctor
    ]);
    const handleOpen = (doc)=>{
        setActiveDoctor(doc);
    };
    async function handleSend() {
        if (!messageInput.trim()) return;
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$utils$2f$userToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        const doctorId = activeDoctor._id;
        await fetch("/api/conversations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token,
                doctorId,
                message: messageInput
            })
        });
        setMessages((prev)=>[
                ...prev,
                {
                    id: Date.now().toString(),
                    sender: "patient",
                    text: messageInput,
                    timestamp: new Date()
                }
            ]);
        setMessageInput("");
    }
    const renderChat = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "Wiadomości"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                            lineNumber: 66,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].back,
                            onClick: ()=>{
                                setActiveDoctor(null);
                                onCloseChat();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                                lineNumber: 74,
                                columnNumber: 6
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                            lineNumber: 67,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                    lineNumber: 65,
                    columnNumber: 4
                }, this),
                activeDoctor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chatDoctorHeader,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].doctorName,
                        children: [
                            "dr ",
                            activeDoctor.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                        lineNumber: 80,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                    lineNumber: 79,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chatWindow,
                    children: messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyChat,
                        children: "Brak wiadomości"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                        lineNumber: 85,
                        columnNumber: 6
                    }, this) : messages.map((msg)=>{
                        const today = new Date();
                        const msgDate = new Date(msg.timestamp);
                        const isToday = msgDate.getDate() === today.getDate() && msgDate.getMonth() === today.getMonth() && msgDate.getFullYear() === today.getFullYear();
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: msg.sender === "patient" ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].patientMsg : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].doctorMsg,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text,
                                    children: msg.text
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                                    lineNumber: 105,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].time,
                                    children: isToday ? msgDate.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    }) : msgDate.toLocaleDateString()
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                                    lineNumber: 106,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, msg.id, true, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                            lineNumber: 97,
                            columnNumber: 8
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                    lineNumber: 83,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputBar,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Napisz wiadomość...",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                            value: messageInput,
                            onChange: (e)=>setMessageInput(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                            lineNumber: 121,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sendBtn,
                            onClick: handleSend,
                            children: "Wyślij"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                            lineNumber: 128,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                    lineNumber: 120,
                    columnNumber: 4
                }, this)
            ]
        }, void 0, true);
    const renderList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "Wiadomości"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                            lineNumber: 138,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].close,
                            onClick: ()=>{
                                setActiveDoctor(null);
                                onCloseChat();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                                lineNumber: 146,
                                columnNumber: 6
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                            lineNumber: 139,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                    lineNumber: 137,
                    columnNumber: 4
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                    children: doctors.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                            onClick: ()=>handleOpen(doc),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].doctorImg,
                                        src: doc.image,
                                        alt: doc.name,
                                        width: 80,
                                        height: 80
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                                        lineNumber: 158,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                                    lineNumber: 157,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
                                            children: [
                                                "dr ",
                                                doc.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                                            lineNumber: 167,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                            children: "Kliknij, aby otworzyć"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                                            lineNumber: 168,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                                    lineNumber: 166,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, doc._id, true, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                            lineNumber: 152,
                            columnNumber: 6
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                    lineNumber: 150,
                    columnNumber: 4
                }, this)
            ]
        }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].shell,
                children: [
                    activeDoctor ? renderChat() : renderList(),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabs,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tab,
                                children: "Start"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                                lineNumber: 182,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tab} ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active}`,
                                onClick: ()=>setActiveDoctor(null),
                                children: "Wiadomości"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                                lineNumber: 183,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tab,
                                children: "Pomoc"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                                lineNumber: 189,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                        lineNumber: 181,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                lineNumber: 178,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floatingClose,
                onClick: ()=>{
                    onCloseChat();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].arrowIcon,
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                    lineNumber: 199,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js",
                lineNumber: 193,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true), document.body);
}
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/MessagesMenu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareHeart$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/message-square-heart.js [app-ssr] (ecmascript) <export default as MessageSquareHeart>");
"use client";
;
;
;
;
;
;
function ContactCard() {
    const [doctors, setDoctors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [startPositionX, setStartPositionX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    function handleTouchStart(e) {
        setStartPositionX(e.touches[0].clientX);
    }
    function handleTouchEnd(e) {
        const endPosiotionX = e.changedTouches[0].clientX;
        const movedPosition = endPosiotionX - startPositionX;
        if (movedPosition > 50 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (movedPosition < -50 && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("api/doctors").then((res)=>res.json()).then((data)=>{
            console.log("Fetched doctors:", data);
            setDoctors(data);
            setLoading(false);
        });
    }, []);
    const specialities = [
        "Wszyscy",
        "Kardiolog",
        "Stomatolog",
        "Pediatra",
        "Ortopeda"
    ];
    const [selectedSpeciality, setSelectedSpeciality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Wszyscy");
    function handleSpecialityChange(speciality) {
        setSelectedSpeciality(speciality);
        setCurrentPage(1);
    }
    const filteredDoctors = selectedSpeciality === "Wszyscy" ? doctors : doctors.filter((doctor)=>doctor.speciality === selectedSpeciality);
    const doctorsPerPage = 3;
    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
    const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
    const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
    const [isChatOpen, setIsChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDoctor, setSelectedDoctor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    function openChat() {
        setIsChatOpen(true);
    }
    function closeChat() {
        setIsChatOpen(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contact} ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Skontaktuj się z lekarzem"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                        lineNumber: 89,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].arrows,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>currentPage > 1 && setCurrentPage(currentPage - 1),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                    lineNumber: 95,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                lineNumber: 92,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>currentPage < totalPages && setCurrentPage(currentPage + 1),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                    lineNumber: 102,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                lineNumber: 97,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                        lineNumber: 91,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                lineNumber: 88,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categories,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoriesList} ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].desktopOnly}`,
                        children: specialities.map((spec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSpecialityChange(spec),
                                    children: spec
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                    lineNumber: 110,
                                    columnNumber: 8
                                }, this)
                            }, spec, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                lineNumber: 109,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                        lineNumber: 107,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileOnly}`,
                        value: selectedSpeciality,
                        onChange: (e)=>handleSpecialityChange(e.target.value),
                        children: specialities.map((spec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: spec,
                                children: spec
                            }, spec, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                lineNumber: 123,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                        lineNumber: 117,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                lineNumber: 106,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactInfo,
                onTouchStart: handleTouchStart,
                onTouchEnd: handleTouchEnd,
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Ładowanie..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                    lineNumber: 135,
                    columnNumber: 6
                }, this) : currentDoctors.map((doctor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].doctorCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].doctorImg,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: doctor.image,
                                    alt: doctor.name,
                                    width: 80,
                                    height: 80
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                    lineNumber: 140,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                lineNumber: 139,
                                columnNumber: 8
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].doctorInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].doctorName,
                                        children: doctor.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                        lineNumber: 148,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].doctorSpeciality,
                                        children: doctor.speciality
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                        lineNumber: 149,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messageBtn,
                                        onClick: ()=>{
                                            openChat();
                                            setSelectedDoctor(doctor);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {}, void 0, false, {
                                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                                lineNumber: 157,
                                                columnNumber: 10
                                            }, this),
                                            " Wiadomość"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                        lineNumber: 150,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                                lineNumber: 147,
                                columnNumber: 8
                            }, this)
                        ]
                    }, doctor._id, true, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                        lineNumber: 138,
                        columnNumber: 7
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                lineNumber: 129,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].paginationDots,
                children: Array.from({
                    length: totalPages
                }).map((_, i)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        onClick: ()=>setCurrentPage(i + 1),
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot} ${i + 1 === currentPage ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeDot : ""}`
                    }, i, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                        lineNumber: 168,
                        columnNumber: 7
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                lineNumber: 165,
                columnNumber: 4
            }, this),
            isChatOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$MessagesMenu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                doctors: doctors,
                onCloseChat: closeChat,
                selectedDoctor: selectedDoctor
            }, void 0, false, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                lineNumber: 179,
                columnNumber: 5
            }, this),
            !isChatOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floatingClose,
                onClick: ()=>{
                    setSelectedDoctor(null);
                    setIsChatOpen(true);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareHeart$3e$__["MessageSquareHeart"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$ContactCard$2f$ContactCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chatIcon,
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                    lineNumber: 193,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
                lineNumber: 186,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/ContactCard/ContactCard.js",
        lineNumber: 87,
        columnNumber: 3
    }, this);
}
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addButton": "MedicationsSection-module__bDz-7a__addButton",
  "bigBox": "MedicationsSection-module__bDz-7a__bigBox",
  "btnss": "MedicationsSection-module__bDz-7a__btnss",
  "checkbox": "MedicationsSection-module__bDz-7a__checkbox",
  "checkboxChecked": "MedicationsSection-module__bDz-7a__checkboxChecked",
  "checkboxDot": "MedicationsSection-module__bDz-7a__checkboxDot",
  "checkboxInner": "MedicationsSection-module__bDz-7a__checkboxInner",
  "dayCard": "MedicationsSection-module__bDz-7a__dayCard",
  "dayHeader": "MedicationsSection-module__bDz-7a__dayHeader",
  "dayTitle": "MedicationsSection-module__bDz-7a__dayTitle",
  "deleteBtn": "MedicationsSection-module__bDz-7a__deleteBtn",
  "medicationContent": "MedicationsSection-module__bDz-7a__medicationContent",
  "medicationInfo": "MedicationsSection-module__bDz-7a__medicationInfo",
  "medicationItem": "MedicationsSection-module__bDz-7a__medicationItem",
  "medicationTaken": "MedicationsSection-module__bDz-7a__medicationTaken",
  "medicationsList": "MedicationsSection-module__bDz-7a__medicationsList",
  "name": "MedicationsSection-module__bDz-7a__name",
  "nameRow": "MedicationsSection-module__bDz-7a__nameRow",
  "noMedications": "MedicationsSection-module__bDz-7a__noMedications",
  "sectionHeader": "MedicationsSection-module__bDz-7a__sectionHeader",
  "sectionTitle": "MedicationsSection-module__bDz-7a__sectionTitle",
  "showModalBtn": "MedicationsSection-module__bDz-7a__showModalBtn",
  "time": "MedicationsSection-module__bDz-7a__time",
  "timeRow": "MedicationsSection-module__bDz-7a__timeRow",
  "weeklyPlan": "MedicationsSection-module__bDz-7a__weeklyPlan",
  "weeklyPlanContainer": "MedicationsSection-module__bDz-7a__weeklyPlanContainer",
});
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addBtn": "MedicationsList-module__rbGx-W__addBtn",
  "buttons": "MedicationsList-module__rbGx-W__buttons",
  "cancelBtn": "MedicationsList-module__rbGx-W__cancelBtn",
  "closeBtn": "MedicationsList-module__rbGx-W__closeBtn",
  "confirmBtn": "MedicationsList-module__rbGx-W__confirmBtn",
  "content": "MedicationsList-module__rbGx-W__content",
  "dialogBackdrop": "MedicationsList-module__rbGx-W__dialogBackdrop",
  "fadeIn": "MedicationsList-module__rbGx-W__fadeIn",
  "header": "MedicationsList-module__rbGx-W__header",
  "infoBtn": "MedicationsList-module__rbGx-W__infoBtn",
  "medicationItem": "MedicationsList-module__rbGx-W__medicationItem",
  "modalContent": "MedicationsList-module__rbGx-W__modalContent",
  "modalContentActive": "MedicationsList-module__rbGx-W__modalContentActive",
  "modalOpen": "MedicationsList-module__rbGx-W__modalOpen",
  "modalWrapper": "MedicationsList-module__rbGx-W__modalWrapper",
  "modalWrapperWithDetails": "MedicationsList-module__rbGx-W__modalWrapperWithDetails",
  "selectInput": "MedicationsList-module__rbGx-W__selectInput",
  "selectedDrug": "MedicationsList-module__rbGx-W__selectedDrug",
  "selectionGroup": "MedicationsList-module__rbGx-W__selectionGroup",
  "timeInput": "MedicationsList-module__rbGx-W__timeInput",
  "timeSelection": "MedicationsList-module__rbGx-W__timeSelection",
  "timeSelectionButtons": "MedicationsList-module__rbGx-W__timeSelectionButtons",
  "virtualList": "MedicationsList-module__rbGx-W__virtualList",
});
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "closeBtn": "SelectedDrugInfo-module__knwL5G__closeBtn",
  "detailsContent": "SelectedDrugInfo-module__knwL5G__detailsContent",
  "detailsHeader": "SelectedDrugInfo-module__knwL5G__detailsHeader",
  "detailsPanel": "SelectedDrugInfo-module__knwL5G__detailsPanel",
  "mobileOverlay": "SelectedDrugInfo-module__knwL5G__mobileOverlay",
  "slideIn": "SelectedDrugInfo-module__knwL5G__slideIn",
  "slideInPhone": "SelectedDrugInfo-module__knwL5G__slideInPhone",
});
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SelectedDrugInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$SelectedDrugInfo$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.module.css [app-ssr] (css module)");
;
;
function SelectedDrugInfo({ selectedDrug, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$SelectedDrugInfo$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileOverlay,
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js",
                lineNumber: 6,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$SelectedDrugInfo$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailsPanel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$SelectedDrugInfo$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailsHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: selectedDrug.productName
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js",
                                lineNumber: 10,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$SelectedDrugInfo$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js",
                                lineNumber: 11,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js",
                        lineNumber: 9,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$SelectedDrugInfo$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailsContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Moc:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js",
                                        lineNumber: 17,
                                        columnNumber: 7
                                    }, this),
                                    " ",
                                    selectedDrug.strength
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js",
                                lineNumber: 16,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Rodzaj preparatu:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js",
                                        lineNumber: 20,
                                        columnNumber: 7
                                    }, this),
                                    " ",
                                    selectedDrug.preparationType
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js",
                                lineNumber: 19,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Kod ATC:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js",
                                        lineNumber: 23,
                                        columnNumber: 7
                                    }, this),
                                    " ",
                                    selectedDrug.atcCode
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js",
                                lineNumber: 22,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js",
                        lineNumber: 15,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js",
                lineNumber: 8,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cancelBtn": "AddMedicationSchedule-module__MAbkcG__cancelBtn",
  "confirmBtn": "AddMedicationSchedule-module__MAbkcG__confirmBtn",
  "selectInput": "AddMedicationSchedule-module__MAbkcG__selectInput",
  "selectedDrug": "AddMedicationSchedule-module__MAbkcG__selectedDrug",
  "selectionGroup": "AddMedicationSchedule-module__MAbkcG__selectionGroup",
  "timeInput": "AddMedicationSchedule-module__MAbkcG__timeInput",
  "timeSelection": "AddMedicationSchedule-module__MAbkcG__timeSelection",
  "timeSelectionButtons": "AddMedicationSchedule-module__MAbkcG__timeSelectionButtons",
});
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddMedicationSchedule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$AddMedicationSchedule$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.module.css [app-ssr] (css module)");
;
;
function AddMedicationSchedule({ onConfirm, onCanel, selectedDrug, selectedTime, setSelectedTime, selectedDay, setSelectedDay }) {
    const days = [
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota",
        "Niedziela"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$AddMedicationSchedule$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeSelection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Wybierz dzień i godzinę"
            }, void 0, false, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
                lineNumber: 24,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$AddMedicationSchedule$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectedDrug,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Lek:"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
                        lineNumber: 26,
                        columnNumber: 5
                    }, this),
                    " ",
                    selectedDrug.productName
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
                lineNumber: 25,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$AddMedicationSchedule$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectionGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Dzień tygodnia:"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
                        lineNumber: 30,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: selectedDay,
                        onChange: (e)=>setSelectedDay(e.target.value),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$AddMedicationSchedule$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectInput,
                        children: days.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: day,
                                children: day
                            }, day, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
                                lineNumber: 37,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
                        lineNumber: 31,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
                lineNumber: 29,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$AddMedicationSchedule$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectionGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Godzina:"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
                        lineNumber: 45,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "time",
                        value: selectedTime,
                        onChange: (e)=>setSelectedTime(e.target.value),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$AddMedicationSchedule$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeInput
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
                        lineNumber: 46,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
                lineNumber: 44,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$AddMedicationSchedule$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeSelectionButtons,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$AddMedicationSchedule$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelBtn,
                        onClick: onCanel,
                        children: "Anuluj"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
                        lineNumber: 55,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$AddMedicationSchedule$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].confirmBtn,
                        onClick: onConfirm,
                        children: "Potwierdź"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
                        lineNumber: 58,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
                lineNumber: 54,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js",
        lineNumber: 23,
        columnNumber: 3
    }, this);
}
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/uuid/dist-node/v4.js [app-ssr] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$SelectedDrugInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/SelectedDrugInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$AddMedicationSchedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/AddMedicationSchedule.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$react$2d$virtual$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/@tanstack/react-virtual/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
;
;
;
const Modal = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function MedicationsModal({ onAddMedication, isDuplicated }, ref) {
    const [selectedDrug, setSelectedDrug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedInfoDrug, setSelectedInfoDrug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [drugs, setDrugs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [findDrug, setFindDrug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showTimeSelection, setShowTimeSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDay, setSelectedDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Poniedziałek");
    const [selectedTime, setSelectedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("08:00");
    const parentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rowVirtualizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f40$tanstack$2f$react$2d$virtual$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useVirtualizer"])({
        count: drugs.length,
        getScrollElement: ()=>parentRef.current,
        estimateSize: ()=>70,
        overscan: 5
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchDrugs() {
            const res = await fetch(`/api/drugs?query=${findDrug}&limit=50&skip=0`);
            const data = await res.json();
            console.log("Fetched drugs:", data);
            setLoading(false);
            setDrugs(data);
        }
        fetchDrugs();
    }, [
        findDrug
    ]);
    // const results = drugs.filter((d) =>
    // 	d.productName.toLowerCase().includes(findDrug.toLowerCase())
    // );
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>{
        return {
            open: (day)=>{
                setSelectedDay(day);
                setIsOpen(true);
            },
            close: ()=>setIsOpen(false)
        };
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            dialog.current.showModal();
            document.body.style.overflow = "hidden";
        } else if (dialog.current?.open) {
            dialog.current.close();
            document.body.style.overflow = "";
        }
        return ()=>{
            document.body.style.overflow = "";
        };
    }, [
        isOpen
    ]);
    function handleClose() {
        setIsOpen(false);
        setSelectedInfoDrug(null);
        setSelectedDrug(null);
        setFindDrug("");
        setShowTimeSelection(false);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEsc = (e)=>{
            if (e.key === "Escape") {
                handleClose();
            }
        };
        document.addEventListener("keydown", handleEsc);
        return ()=>{
            document.removeEventListener("keydown", handleEsc);
        };
    }, [
        selectedInfoDrug
    ]);
    function handleAddMedication(drug) {
        setSelectedDrug(drug);
        setShowTimeSelection(true);
    }
    function handleConfirmMedication() {
        if (!selectedDrug) return;
        const medication = {
            instanceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            drugId: selectedDrug._id,
            productName: selectedDrug.productName,
            day: selectedDay,
            time: selectedTime
        };
        if (isDuplicated && isDuplicated(medication)) {
            alert("Ten lek już jest zaplanowany na ten dzień i godzinę!");
            return;
        }
        onAddMedication(medication);
        handleClose();
    }
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        ref: dialog,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dialogBackdrop,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalWrapper} ${selectedDrug ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalWrapperWithDetails : ""}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent} ${selectedInfoDrug ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContentActive : ""}`,
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Leki"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                                lineNumber: 145,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                                onClick: handleClose,
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                                lineNumber: 146,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                        lineNumber: 144,
                        columnNumber: 6
                    }, this),
                    !showTimeSelection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Wyszukaj lek...",
                                value: findDrug,
                                onChange: (e)=>setFindDrug(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                                lineNumber: 152,
                                columnNumber: 8
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Ładowanie leków..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                                lineNumber: 160,
                                columnNumber: 9
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: parentRef,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].virtualList,
                                style: {
                                    height: "435px",
                                    overflowY: "auto",
                                    width: "100%",
                                    position: "relative"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: `${rowVirtualizer.getTotalSize()}px`,
                                        width: "100%",
                                        position: "relative"
                                    },
                                    children: rowVirtualizer.getVirtualItems().map((virtualRow)=>{
                                        const drug = drugs[virtualRow.index];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].medicationItem,
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                transform: `translateY(${virtualRow.start}px)`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: drug.productName
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                                                    lineNumber: 193,
                                                    columnNumber: 14
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].buttons,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addBtn,
                                                            onClick: ()=>handleAddMedication(drug),
                                                            children: "Dodaj"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                                                            lineNumber: 195,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoBtn,
                                                            onClick: ()=>setSelectedInfoDrug(drug),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                                                                lineNumber: 205,
                                                                columnNumber: 16
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                                                            lineNumber: 201,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                                                    lineNumber: 194,
                                                    columnNumber: 14
                                                }, this)
                                            ]
                                        }, drug._id, true, {
                                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                                            lineNumber: 182,
                                            columnNumber: 13
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                                    lineNumber: 172,
                                    columnNumber: 10
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                                lineNumber: 162,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$AddMedicationSchedule$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onConfirm: handleConfirmMedication,
                        onCanel: ()=>{
                            setShowTimeSelection(false);
                            setSelectedDrug(null);
                        },
                        selectedDrug: selectedDrug,
                        selectedTime: selectedTime,
                        setSelectedTime: setSelectedTime,
                        selectedDay: selectedDay,
                        setSelectedDay: setSelectedDay
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                        lineNumber: 216,
                        columnNumber: 7
                    }, this),
                    selectedInfoDrug && !showTimeSelection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$SelectedDrugInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        selectedDrug: selectedInfoDrug,
                        onClose: ()=>setSelectedInfoDrug(null)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                        lineNumber: 230,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
                lineNumber: 138,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
            lineNumber: 133,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js",
        lineNumber: 132,
        columnNumber: 3
    }, this), document.body);
});
const __TURBOPACK__default__export__ = Modal;
}),
"[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MedicationsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$utils$2f$userToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/utils/userToken.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/pill.js [app-ssr] (ecmascript) <export default as Pill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/MedApp/node_modules/lucide-react/dist/esm/icons/trash.js [app-ssr] (ecmascript) <export default as Trash>");
"use client";
;
;
;
;
;
;
function MedicationsSection() {
    const [weeklyPlan, setWeeklyPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            day: "Poniedziałek",
            medications: []
        },
        {
            day: "Wtorek",
            medications: []
        },
        {
            day: "Środa",
            medications: []
        },
        {
            day: "Czwartek",
            medications: []
        },
        {
            day: "Piątek",
            medications: []
        },
        {
            day: "Sobota",
            medications: []
        },
        {
            day: "Niedziela",
            medications: []
        }
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$utils$2f$userToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        fetch(`/api/plan?token=${token}`).then((res)=>res.json()).then((data)=>{
            if (data?.weeklyPlan?.length) {
                setWeeklyPlan(data.weeklyPlan);
            }
        });
    }, []);
    const savePlanToBackend = (plan)=>{
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$utils$2f$userToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        fetch("/api/plan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userToken: token,
                plan
            })
        });
    };
    const modal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    function showModal(day = "Poniedziałek") {
        modal.current.open(day);
    }
    function handleAddMedication(medication) {
        setWeeklyPlan((prevPlan)=>{
            const newPlan = prevPlan.map((dayPlan)=>{
                if (dayPlan.day === medication.day) {
                    return {
                        ...dayPlan,
                        medications: [
                            {
                                instanceId: medication.instanceId,
                                drugId: medication.drugId,
                                productName: medication.productName,
                                time: medication.time,
                                taken: false
                            },
                            ...dayPlan.medications
                        ].sort((a, b)=>a.time.localeCompare(b.time))
                    };
                }
                return dayPlan;
            });
            savePlanToBackend(newPlan);
            return newPlan;
        });
    }
    const toggleMedicationTaken = (day, id)=>{
        setWeeklyPlan((prevPlan)=>{
            const newPlan = prevPlan.map((dayPlan)=>{
                if (dayPlan.day === day) {
                    return {
                        ...dayPlan,
                        medications: dayPlan.medications.map((med)=>{
                            if (med.instanceId === id) {
                                return {
                                    ...med,
                                    taken: !med.taken
                                };
                            }
                            return med;
                        })
                    };
                }
                return dayPlan;
            });
            savePlanToBackend(newPlan);
            return newPlan;
        });
    };
    const handleDeleteMedication = (id, day)=>{
        setWeeklyPlan((prevPlan)=>{
            const newPlan = prevPlan.map((dayPlan)=>{
                if (dayPlan.day === day) {
                    return {
                        ...dayPlan,
                        medications: dayPlan.medications.filter((med)=>med.instanceId !== id)
                    };
                }
                return dayPlan;
            });
            savePlanToBackend(newPlan);
            return newPlan;
        });
    };
    function isDuplicateMedication(med) {
        const findCorrectDay = weeklyPlan.find((d)=>d.day === med.day);
        return findCorrectDay.medications.some((m)=>m.productName === med.productName && m.time === med.time);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bigBox} card`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "Plan przyjmowania leków"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                        lineNumber: 120,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].showModalBtn,
                        onClick: ()=>showModal("Poniedziałek"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                            lineNumber: 125,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                        lineNumber: 121,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                lineNumber: 119,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weeklyPlanContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].weeklyPlan,
                    children: weeklyPlan.map((dayPlan)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dayCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dayHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dayTitle,
                                            children: dayPlan.day
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                            lineNumber: 135,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>showModal(dayPlan.day),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addButton,
                                            title: "Dodaj lek",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                lineNumber: 141,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                            lineNumber: 136,
                                            columnNumber: 10
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                    lineNumber: 134,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].medicationsList,
                                    children: dayPlan.medications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].noMedications,
                                        children: "Brak zaplanowanych leków"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                        lineNumber: 147,
                                        columnNumber: 11
                                    }, this) : dayPlan.medications.map((med)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].medicationItem} ${med.taken ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].medicationTaken : ""}`,
                                            onClick: ()=>{
                                                toggleMedicationTaken(dayPlan.day, med.instanceId);
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].medicationContent,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].medicationInfo,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeRow,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        size: 14,
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                                        lineNumber: 164,
                                                                        columnNumber: 16
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].time,
                                                                        children: med.time
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                                        lineNumber: 165,
                                                                        columnNumber: 16
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                                lineNumber: 163,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nameRow,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"], {
                                                                        size: 14,
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].icon
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                                        lineNumber: 168,
                                                                        columnNumber: 16
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
                                                                        children: med.productName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                                        lineNumber: 169,
                                                                        columnNumber: 16
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                                lineNumber: 167,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                        lineNumber: 162,
                                                        columnNumber: 14
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnss,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkbox} ${med.taken ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkboxChecked : ""}`,
                                                                children: med.taken && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkboxInner,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkboxDot
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                                        lineNumber: 183,
                                                                        columnNumber: 18
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                                    lineNumber: 182,
                                                                    columnNumber: 17
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                                lineNumber: 176,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteBtn,
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    handleDeleteMedication(med.instanceId, dayPlan.day);
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                                    lineNumber: 197,
                                                                    columnNumber: 16
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                                lineNumber: 187,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                        lineNumber: 175,
                                                        columnNumber: 14
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                                lineNumber: 161,
                                                columnNumber: 13
                                            }, this)
                                        }, med.instanceId, false, {
                                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                            lineNumber: 152,
                                            columnNumber: 12
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                                    lineNumber: 145,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, dayPlan.day, true, {
                            fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                            lineNumber: 133,
                            columnNumber: 8
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                    lineNumber: 130,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                lineNumber: 129,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$MedApp$2f$app$2f$components$2f$MedicationsSection$2f$MedicationsList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ref: modal,
                onAddMedication: handleAddMedication,
                isDuplicated: isDuplicateMedication
            }, void 0, false, {
                fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
                lineNumber: 210,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEBSITE/MedApp/app/components/MedicationsSection/MedicationsSection.js",
        lineNumber: 118,
        columnNumber: 3
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__40025cbb._.js.map