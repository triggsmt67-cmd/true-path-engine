(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__e231dd60._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Truepathdigital_Build/true_path_digital_new/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__ = /*#__PURE__*/ __turbopack_context__.i("[externals]/node:buffer [external] (node:buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
async function middleware(request) {
    if (!process.env.WP_USER || !process.env.WP_APP_PASS) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const basicAuth = `${process.env.WP_USER}:${process.env.WP_APP_PASS}`;
    const pathnameWithoutTrailingSlash = request.nextUrl.pathname.replace(/\/$/, "");
    const response = await fetch(`${("TURBOPACK compile-time value", "https://admin.truepath406.com")}/wp-json/redirection/v1/redirect/?filterBy%5Burl-match%5D=plain&filterBy%5Burl%5D=${pathnameWithoutTrailingSlash}`, {
        headers: {
            Authorization: `Basic ${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$buffer__$5b$external$5d$__$28$node$3a$buffer$2c$__cjs$29$__["Buffer"].from(basicAuth).toString("base64")}`,
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    if (data?.items?.length > 0) {
        const redirect = data.items.find((item)=>item.url === pathnameWithoutTrailingSlash);
        if (!redirect) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
        const newUrl = new URL(redirect.action_data.url, process.env.NEXT_PUBLIC_BASE_URL).toString();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(newUrl, {
            status: redirect.action_code === 301 ? 308 : 307
        });
    }
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__e231dd60._.js.map