module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/09-auth/lib/api/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nextServer",
    ()=>nextServer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const nextServer = __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://localhost:3000") + "/api",
    withCredentials: true
});
}),
"[project]/09-auth/lib/api/clientApi.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkSession",
    ()=>checkSession,
    "createNote",
    ()=>createNote,
    "deleteNote",
    ()=>deleteNote,
    "fetchNoteById",
    ()=>fetchNoteById,
    "fetchNotes",
    ()=>fetchNotes,
    "getMe",
    ()=>getMe,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "register",
    ()=>register,
    "updateMe",
    ()=>updateMe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/lib/api/api.ts [app-rsc] (ecmascript)");
;
const register = async (data)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextServer"].post("/auth/register", data);
    return res.data;
};
const updateMe = async (data)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextServer"].patch("users/me", data);
    return res.data;
};
const login = async (data)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextServer"].post("/auth/login", data);
    return res.data;
};
const logout = async ()=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextServer"].post("/auth/logout");
};
const checkSession = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextServer"].get("/auth/session");
    return res.data.success;
};
const getMe = async ()=>{
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextServer"].get("/users/me");
    return data;
};
const fetchNotes = async (page, query, tag)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextServer"].get("/notes", {
        params: {
            page: page,
            perPage: 12,
            search: query,
            tag: tag
        },
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
const fetchNoteById = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextServer"].get(`/notes/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
const createNote = async (newNote)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextServer"].post(`/notes`, newNote, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
const deleteNote = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$lib$2f$api$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextServer"].delete(`/notes/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.data;
};
}),
"[project]/09-auth/app/(private routes)/notes/filter/[...slug]/Notes.client.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/09-auth/app/(private routes)/notes/filter/[...slug]/Notes.client.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/09-auth/app/(private routes)/notes/filter/[...slug]/Notes.client.tsx <module evaluation>", "default");
}),
"[project]/09-auth/app/(private routes)/notes/filter/[...slug]/Notes.client.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/09-auth/app/(private routes)/notes/filter/[...slug]/Notes.client.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/09-auth/app/(private routes)/notes/filter/[...slug]/Notes.client.tsx", "default");
}),
"[project]/09-auth/app/(private routes)/notes/filter/[...slug]/Notes.client.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$app$2f28$private__routes$292f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$Notes$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/09-auth/app/(private routes)/notes/filter/[...slug]/Notes.client.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$app$2f28$private__routes$292f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$Notes$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/09-auth/app/(private routes)/notes/filter/[...slug]/Notes.client.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$app$2f28$private__routes$292f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$Notes$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/09-auth/app/(private routes)/notes/filter/[...slug]/NotesPage.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "app": "NotesPage-module__y6T_Na__app",
  "button": "NotesPage-module__y6T_Na__button",
  "toolbar": "NotesPage-module__y6T_Na__toolbar",
});
}),
"[project]/09-auth/app/(private routes)/notes/filter/[...slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Notes,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/hydration.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/lib/api/clientApi.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$app$2f28$private__routes$292f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$Notes$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/app/(private routes)/notes/filter/[...slug]/Notes.client.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$app$2f28$private__routes$292f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$NotesPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/09-auth/app/(private routes)/notes/filter/[...slug]/NotesPage.module.css [app-rsc] (css module)");
;
;
;
;
;
async function generateMetadata({ params }) {
    const { slug } = params;
    const filterNote = slug[0];
    return {
        title: `Notes with ${filterNote} filter`,
        description: `All your notes in one app`,
        openGraph: {
            title: `Notes with ${filterNote} filter`,
            description: `All your notes in one app`,
            url: `https://08-zustand-theta-blue.vercel.app/notes/filter/${filterNote}`,
            siteName: "NoteHub",
            images: [
                {
                    url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                    width: 1200,
                    height: 630
                }
            ]
        }
    };
}
async function Notes({ params }) {
    const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QueryClient"]();
    const { slug } = params;
    const tag = slug[0] === "All" ? undefined : slug[0];
    await queryClient.prefetchQuery({
        queryKey: [
            "notes",
            {
                query: "",
                page: 1,
                tag: tag
            }
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$lib$2f$api$2f$clientApi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchNotes"])(1, "", tag)
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$app$2f28$private__routes$292f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$NotesPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].app,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HydrationBoundary"], {
            state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dehydrate"])(queryClient),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$app$2f28$private__routes$292f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$Notes$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                tag: tag
            }, void 0, false, {
                fileName: "[project]/09-auth/app/(private routes)/notes/filter/[...slug]/page.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/09-auth/app/(private routes)/notes/filter/[...slug]/page.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/09-auth/app/(private routes)/notes/filter/[...slug]/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3f1cd81d._.js.map