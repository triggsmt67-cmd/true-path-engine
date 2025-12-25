module.exports = [
"[project]/Truepathdigital_Build/true_path_digital_new/src/utils/fetchGraphQL.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchGraphQL",
    ()=>fetchGraphQL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
async function fetchGraphQL(query, variables, headers) {
    const { isEnabled: preview } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["draftMode"])();
    try {
        let authHeader = "";
        if (preview) {
            const auth = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get("wp_jwt")?.value;
            if (auth) {
                authHeader = `Bearer ${auth}`;
            }
        }
        const body = JSON.stringify({
            query,
            variables: {
                preview,
                ...variables
            }
        });
        const response = await fetch(`${("TURBOPACK compile-time value", "https://admin.truepath406.com")}/graphql`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...authHeader && {
                    Authorization: authHeader
                },
                ...headers
            },
            body,
            cache: preview ? "no-cache" : "default",
            next: {
                tags: [
                    "wordpress"
                ]
            }
        });
        if (!response.ok) {
            console.error("Response Status:", response);
            throw new Error(response.statusText);
        }
        const data = await response.json();
        if (data.errors) {
            console.error("GraphQL Errors:", data.errors);
            console.error("Failed Query:", query);
            console.error("GraphQL Errors:", data.errors);
            console.error("Failed Query:", query);
            throw new Error(JSON.stringify(data.errors));
        }
        return data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
}),
"[project]/Truepathdigital_Build/true_path_digital_new/src/components/Templates/Page/PageQuery.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageQuery",
    ()=>PageQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql-tag/lib/index.js [app-rsc] (ecmascript)");
;
const PageQuery = __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]`
  query PageQuery($id: ID!, $preview: Boolean = false) {
    page(id: $id, idType: DATABASE_ID, asPreview: $preview) {
      content
    }
  }
`;
}),
"[project]/Truepathdigital_Build/true_path_digital_new/src/app/not-found.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotFound,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$graphql$2f$language$2f$printer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/printer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$src$2f$utils$2f$fetchGraphQL$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Truepathdigital_Build/true_path_digital_new/src/utils/fetchGraphQL.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$src$2f$components$2f$Templates$2f$Page$2f$PageQuery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Truepathdigital_Build/true_path_digital_new/src/components/Templates/Page/PageQuery.ts [app-rsc] (ecmascript)");
;
;
;
;
const notFoundPageWordPressId = 501;
async function generateMetadata() {
    return {
        title: "404 - Not Found",
        description: "Page not found",
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/404-not-found/`
        }
    };
}
async function NotFound() {
    try {
        const { page } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$src$2f$utils$2f$fetchGraphQL$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchGraphQL"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$graphql$2f$language$2f$printer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["print"])(__TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$src$2f$components$2f$Templates$2f$Page$2f$PageQuery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageQuery"]), {
            id: notFoundPageWordPressId
        });
        if (!page) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "404 - Page Not Found"
                    }, void 0, false, {
                        fileName: "[project]/Truepathdigital_Build/true_path_digital_new/src/app/not-found.tsx",
                        lineNumber: 30,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "The requested page could not be found."
                    }, void 0, false, {
                        fileName: "[project]/Truepathdigital_Build/true_path_digital_new/src/app/not-found.tsx",
                        lineNumber: 30,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Truepathdigital_Build/true_path_digital_new/src/app/not-found.tsx",
                lineNumber: 30,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            dangerouslySetInnerHTML: {
                __html: page.content || " "
            }
        }, void 0, false, {
            fileName: "[project]/Truepathdigital_Build/true_path_digital_new/src/app/not-found.tsx",
            lineNumber: 33,
            columnNumber: 12
        }, this);
    } catch (e) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "404 - Page Not Found"
                }, void 0, false, {
                    fileName: "[project]/Truepathdigital_Build/true_path_digital_new/src/app/not-found.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "The requested page could not be found."
                }, void 0, false, {
                    fileName: "[project]/Truepathdigital_Build/true_path_digital_new/src/app/not-found.tsx",
                    lineNumber: 35,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Truepathdigital_Build/true_path_digital_new/src/app/not-found.tsx",
            lineNumber: 35,
            columnNumber: 12
        }, this);
    }
}
}),
];

//# sourceMappingURL=Truepathdigital_Build_true_path_digital_new_src_2416057d._.js.map