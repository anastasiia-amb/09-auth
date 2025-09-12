(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__da0e3d89._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/09-auth/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/cookie/dist/index.js [middleware-edge] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './lib/serverApi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const privateRoutes = [
    "/profile"
];
const publicRoutes = [
    "/sign-in",
    "/sign-up"
];
async function middleware(request) {
    const { pathname } = request.nextUrl;
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;
    const isPublicRoute = publicRoutes.some((route)=>pathname.startsWith(route));
    const isPrivateRoute = privateRoutes.some((route)=>pathname.startsWith(route));
    if (!accessToken) {
        if (refreshToken) {
            // Якщо accessToken відсутній, але є refreshToken — потрібно перевірити сесію навіть для публічного маршруту,
            // адже сесія може залишатися активною, і тоді потрібно заборонити доступ до публічного маршруту.
            const data = await checkServerSession();
            const setCookie = data.headers["set-cookie"];
            if (setCookie) {
                const cookieArray = Array.isArray(setCookie) ? setCookie : [
                    setCookie
                ];
                for (const cookieStr of cookieArray){
                    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parse"])(cookieStr);
                    const options = {
                        expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
                        path: parsed.Path,
                        maxAge: Number(parsed["Max-Age"])
                    };
                    if (parsed.accessToken) cookieStore.set("accessToken", parsed.accessToken, options);
                    if (parsed.refreshToken) cookieStore.set("refreshToken", parsed.refreshToken, options);
                }
                // Якщо сесія все ще активна:
                // для публічного маршруту — виконуємо редірект на головну.
                if (isPublicRoute) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", request.url), {
                        headers: {
                            Cookie: cookieStore.toString()
                        }
                    });
                }
                // для приватного маршруту — дозволяємо доступ
                if (isPrivateRoute) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
                        headers: {
                            Cookie: cookieStore.toString()
                        }
                    });
                }
            }
        }
        // Якщо refreshToken або сесії немає:
        // публічний маршрут — дозволяємо доступ
        if (isPublicRoute) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
        // приватний маршрут — редірект на сторінку входу
        if (isPrivateRoute) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/sign-in", request.url));
        }
    }
    // Якщо accessToken існує:
    // публічний маршрут — виконуємо редірект на головну
    if (isPublicRoute) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", request.url));
    }
    // приватний маршрут — дозволяємо доступ
    if (isPrivateRoute) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
}
const config = {
    matcher: [
        "/profile/:path*",
        "/sign-in",
        "/sign-up"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__da0e3d89._.js.map