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
(()=>{
    const e = new Error("Cannot find module '@/components/Templates/Page/PageQuery'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
        const { page } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$src$2f$utils$2f$fetchGraphQL$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchGraphQL"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Truepathdigital_Build$2f$true_path_digital_new$2f$node_modules$2f$graphql$2f$language$2f$printer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["print"])(PageQuery), {
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
"[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/characterClasses.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.isDigit = isDigit;
exports.isLetter = isLetter;
exports.isNameContinue = isNameContinue;
exports.isNameStart = isNameStart;
exports.isWhiteSpace = isWhiteSpace;
/**
 * ```
 * WhiteSpace ::
 *   - "Horizontal Tab (U+0009)"
 *   - "Space (U+0020)"
 * ```
 * @internal
 */ function isWhiteSpace(code) {
    return code === 0x0009 || code === 0x0020;
}
/**
 * ```
 * Digit :: one of
 *   - `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`
 * ```
 * @internal
 */ function isDigit(code) {
    return code >= 0x0030 && code <= 0x0039;
}
/**
 * ```
 * Letter :: one of
 *   - `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M`
 *   - `N` `O` `P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z`
 *   - `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m`
 *   - `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z`
 * ```
 * @internal
 */ function isLetter(code) {
    return code >= 0x0061 && code <= 0x007a || code >= 0x0041 && code <= 0x005a // a-z
    ;
}
/**
 * ```
 * NameStart ::
 *   - Letter
 *   - `_`
 * ```
 * @internal
 */ function isNameStart(code) {
    return isLetter(code) || code === 0x005f;
}
/**
 * ```
 * NameContinue ::
 *   - Letter
 *   - Digit
 *   - `_`
 * ```
 * @internal
 */ function isNameContinue(code) {
    return isLetter(code) || isDigit(code) || code === 0x005f;
}
}),
"[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/blockString.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.dedentBlockStringLines = dedentBlockStringLines;
exports.isPrintableAsBlockString = isPrintableAsBlockString;
exports.printBlockString = printBlockString;
var _characterClasses = __turbopack_context__.r("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/characterClasses.js [app-rsc] (ecmascript)");
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */ function dedentBlockStringLines(lines) {
    var _firstNonEmptyLine2;
    let commonIndent = Number.MAX_SAFE_INTEGER;
    let firstNonEmptyLine = null;
    let lastNonEmptyLine = -1;
    for(let i = 0; i < lines.length; ++i){
        var _firstNonEmptyLine;
        const line = lines[i];
        const indent = leadingWhitespace(line);
        if (indent === line.length) {
            continue; // skip empty lines
        }
        firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
        lastNonEmptyLine = i;
        if (i !== 0 && indent < commonIndent) {
            commonIndent = indent;
        }
    }
    return lines // Remove common indentation from all lines but first.
    .map((line, i)=>i === 0 ? line : line.slice(commonIndent)) // Remove leading and trailing blank lines.
    .slice((_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0, lastNonEmptyLine + 1);
}
function leadingWhitespace(str) {
    let i = 0;
    while(i < str.length && (0, _characterClasses.isWhiteSpace)(str.charCodeAt(i))){
        ++i;
    }
    return i;
}
/**
 * @internal
 */ function isPrintableAsBlockString(value) {
    if (value === '') {
        return true; // empty string is printable
    }
    let isEmptyLine = true;
    let hasIndent = false;
    let hasCommonIndent = true;
    let seenNonEmptyLine = false;
    for(let i = 0; i < value.length; ++i){
        switch(value.codePointAt(i)){
            case 0x0000:
            case 0x0001:
            case 0x0002:
            case 0x0003:
            case 0x0004:
            case 0x0005:
            case 0x0006:
            case 0x0007:
            case 0x0008:
            case 0x000b:
            case 0x000c:
            case 0x000e:
            case 0x000f:
                return false;
            // Has non-printable characters
            case 0x000d:
                //  \r
                return false;
            // Has \r or \r\n which will be replaced as \n
            case 10:
                //  \n
                if (isEmptyLine && !seenNonEmptyLine) {
                    return false; // Has leading new line
                }
                seenNonEmptyLine = true;
                isEmptyLine = true;
                hasIndent = false;
                break;
            case 9:
            case 32:
                //  <space>
                hasIndent || (hasIndent = isEmptyLine);
                break;
            default:
                hasCommonIndent && (hasCommonIndent = hasIndent);
                isEmptyLine = false;
        }
    }
    if (isEmptyLine) {
        return false; // Has trailing empty lines
    }
    if (hasCommonIndent && seenNonEmptyLine) {
        return false; // Has internal indent
    }
    return true;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */ function printBlockString(value, options) {
    const escapedValue = value.replace(/"""/g, '\\"""'); // Expand a block string's raw value into independent lines.
    const lines = escapedValue.split(/\r\n|[\n\r]/g);
    const isSingleLine = lines.length === 1; // If common indentation is found we can fix some of those cases by adding leading new line
    const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line)=>line.length === 0 || (0, _characterClasses.isWhiteSpace)(line.charCodeAt(0))); // Trailing triple quotes just looks confusing but doesn't force trailing new line
    const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""'); // Trailing quote (single or double) or slash forces trailing new line
    const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
    const hasTrailingSlash = value.endsWith('\\');
    const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
    const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
    (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
    let result = ''; // Format a multi-line block quote to account for leading space.
    const skipLeadingNewLine = isSingleLine && (0, _characterClasses.isWhiteSpace)(value.charCodeAt(0));
    if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
        result += '\n';
    }
    result += escapedValue;
    if (printAsMultipleLines || forceTrailingNewline) {
        result += '\n';
    }
    return '"""' + result + '"""';
}
}),
"[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/printString.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.printString = printString;
/**
 * Prints a string as a GraphQL StringValue literal. Replaces control characters
 * and excluded characters (" U+0022 and \\ U+005C) with escape sequences.
 */ function printString(str) {
    return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
} // eslint-disable-next-line no-control-regex
const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
    return escapeSequences[str.charCodeAt(0)];
} // prettier-ignore
const escapeSequences = [
    '\\u0000',
    '\\u0001',
    '\\u0002',
    '\\u0003',
    '\\u0004',
    '\\u0005',
    '\\u0006',
    '\\u0007',
    '\\b',
    '\\t',
    '\\n',
    '\\u000B',
    '\\f',
    '\\r',
    '\\u000E',
    '\\u000F',
    '\\u0010',
    '\\u0011',
    '\\u0012',
    '\\u0013',
    '\\u0014',
    '\\u0015',
    '\\u0016',
    '\\u0017',
    '\\u0018',
    '\\u0019',
    '\\u001A',
    '\\u001B',
    '\\u001C',
    '\\u001D',
    '\\u001E',
    '\\u001F',
    '',
    '',
    '\\"',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\\\',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\u007F',
    '\\u0080',
    '\\u0081',
    '\\u0082',
    '\\u0083',
    '\\u0084',
    '\\u0085',
    '\\u0086',
    '\\u0087',
    '\\u0088',
    '\\u0089',
    '\\u008A',
    '\\u008B',
    '\\u008C',
    '\\u008D',
    '\\u008E',
    '\\u008F',
    '\\u0090',
    '\\u0091',
    '\\u0092',
    '\\u0093',
    '\\u0094',
    '\\u0095',
    '\\u0096',
    '\\u0097',
    '\\u0098',
    '\\u0099',
    '\\u009A',
    '\\u009B',
    '\\u009C',
    '\\u009D',
    '\\u009E',
    '\\u009F'
];
}),
"[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/jsutils/devAssert.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.devAssert = devAssert;
function devAssert(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
        throw new Error(message);
    }
}
}),
"[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/jsutils/inspect.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.inspect = inspect;
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */ function inspect(value) {
    return formatValue(value, []);
}
function formatValue(value, seenValues) {
    switch(typeof value){
        case 'string':
            return JSON.stringify(value);
        case 'function':
            return value.name ? `[function ${value.name}]` : '[function]';
        case 'object':
            return formatObjectValue(value, seenValues);
        default:
            return String(value);
    }
}
function formatObjectValue(value, previouslySeenValues) {
    if (value === null) {
        return 'null';
    }
    if (previouslySeenValues.includes(value)) {
        return '[Circular]';
    }
    const seenValues = [
        ...previouslySeenValues,
        value
    ];
    if (isJSONable(value)) {
        const jsonValue = value.toJSON(); // check for infinite recursion
        if (jsonValue !== value) {
            return typeof jsonValue === 'string' ? jsonValue : formatValue(jsonValue, seenValues);
        }
    } else if (Array.isArray(value)) {
        return formatArray(value, seenValues);
    }
    return formatObject(value, seenValues);
}
function isJSONable(value) {
    return typeof value.toJSON === 'function';
}
function formatObject(object, seenValues) {
    const entries = Object.entries(object);
    if (entries.length === 0) {
        return '{}';
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return '[' + getObjectTag(object) + ']';
    }
    const properties = entries.map(([key, value])=>key + ': ' + formatValue(value, seenValues));
    return '{ ' + properties.join(', ') + ' }';
}
function formatArray(array, seenValues) {
    if (array.length === 0) {
        return '[]';
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return '[Array]';
    }
    const len = Math.min(MAX_ARRAY_LENGTH, array.length);
    const remaining = array.length - len;
    const items = [];
    for(let i = 0; i < len; ++i){
        items.push(formatValue(array[i], seenValues));
    }
    if (remaining === 1) {
        items.push('... 1 more item');
    } else if (remaining > 1) {
        items.push(`... ${remaining} more items`);
    }
    return '[' + items.join(', ') + ']';
}
function getObjectTag(object) {
    const tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');
    if (tag === 'Object' && typeof object.constructor === 'function') {
        const name = object.constructor.name;
        if (typeof name === 'string' && name !== '') {
            return name;
        }
    }
    return tag;
}
}),
"[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/ast.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.Token = exports.QueryDocumentKeys = exports.OperationTypeNode = exports.Location = void 0;
exports.isNode = isNode;
/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */ class Location {
    /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The Token at which this Node begins.
   */ /**
   * The Token at which this Node ends.
   */ /**
   * The Source document the AST represents.
   */ constructor(startToken, endToken, source){
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
    }
    get [Symbol.toStringTag]() {
        return 'Location';
    }
    toJSON() {
        return {
            start: this.start,
            end: this.end
        };
    }
}
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */ exports.Location = Location;
class Token {
    /**
   * The kind of Token.
   */ /**
   * The character offset at which this Node begins.
   */ /**
   * The character offset at which this Node ends.
   */ /**
   * The 1-indexed line number on which this Token appears.
   */ /**
   * The 1-indexed column number at which this Token begins.
   */ /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */ /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */ constructor(kind, start, end, line, column, value){
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    get [Symbol.toStringTag]() {
        return 'Token';
    }
    toJSON() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        };
    }
}
/**
 * The list of all possible AST node types.
 */ exports.Token = Token;
/**
 * @internal
 */ const QueryDocumentKeys = {
    Name: [],
    Document: [
        'definitions'
    ],
    OperationDefinition: [
        'description',
        'name',
        'variableDefinitions',
        'directives',
        'selectionSet'
    ],
    VariableDefinition: [
        'description',
        'variable',
        'type',
        'defaultValue',
        'directives'
    ],
    Variable: [
        'name'
    ],
    SelectionSet: [
        'selections'
    ],
    Field: [
        'alias',
        'name',
        'arguments',
        'directives',
        'selectionSet'
    ],
    Argument: [
        'name',
        'value'
    ],
    FragmentSpread: [
        'name',
        'directives'
    ],
    InlineFragment: [
        'typeCondition',
        'directives',
        'selectionSet'
    ],
    FragmentDefinition: [
        'description',
        'name',
        'variableDefinitions',
        'typeCondition',
        'directives',
        'selectionSet'
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: [
        'values'
    ],
    ObjectValue: [
        'fields'
    ],
    ObjectField: [
        'name',
        'value'
    ],
    Directive: [
        'name',
        'arguments'
    ],
    NamedType: [
        'name'
    ],
    ListType: [
        'type'
    ],
    NonNullType: [
        'type'
    ],
    SchemaDefinition: [
        'description',
        'directives',
        'operationTypes'
    ],
    OperationTypeDefinition: [
        'type'
    ],
    ScalarTypeDefinition: [
        'description',
        'name',
        'directives'
    ],
    ObjectTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    FieldDefinition: [
        'description',
        'name',
        'arguments',
        'type',
        'directives'
    ],
    InputValueDefinition: [
        'description',
        'name',
        'type',
        'defaultValue',
        'directives'
    ],
    InterfaceTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    UnionTypeDefinition: [
        'description',
        'name',
        'directives',
        'types'
    ],
    EnumTypeDefinition: [
        'description',
        'name',
        'directives',
        'values'
    ],
    EnumValueDefinition: [
        'description',
        'name',
        'directives'
    ],
    InputObjectTypeDefinition: [
        'description',
        'name',
        'directives',
        'fields'
    ],
    DirectiveDefinition: [
        'description',
        'name',
        'arguments',
        'locations'
    ],
    SchemaExtension: [
        'directives',
        'operationTypes'
    ],
    ScalarTypeExtension: [
        'name',
        'directives'
    ],
    ObjectTypeExtension: [
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    InterfaceTypeExtension: [
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    UnionTypeExtension: [
        'name',
        'directives',
        'types'
    ],
    EnumTypeExtension: [
        'name',
        'directives',
        'values'
    ],
    InputObjectTypeExtension: [
        'name',
        'directives',
        'fields'
    ],
    TypeCoordinate: [
        'name'
    ],
    MemberCoordinate: [
        'name',
        'memberName'
    ],
    ArgumentCoordinate: [
        'name',
        'fieldName',
        'argumentName'
    ],
    DirectiveCoordinate: [
        'name'
    ],
    DirectiveArgumentCoordinate: [
        'name',
        'argumentName'
    ]
};
exports.QueryDocumentKeys = QueryDocumentKeys;
const kindValues = new Set(Object.keys(QueryDocumentKeys));
/**
 * @internal
 */ function isNode(maybeNode) {
    const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
    return typeof maybeKind === 'string' && kindValues.has(maybeKind);
}
/** Name */ var OperationTypeNode;
exports.OperationTypeNode = OperationTypeNode;
(function(OperationTypeNode) {
    OperationTypeNode['QUERY'] = 'query';
    OperationTypeNode['MUTATION'] = 'mutation';
    OperationTypeNode['SUBSCRIPTION'] = 'subscription';
})(OperationTypeNode || (exports.OperationTypeNode = OperationTypeNode = {}));
}),
"[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/kinds.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.Kind = void 0;
/**
 * The set of allowed kind values for AST nodes.
 */ var Kind;
exports.Kind = Kind;
(function(Kind) {
    Kind['NAME'] = 'Name';
    Kind['DOCUMENT'] = 'Document';
    Kind['OPERATION_DEFINITION'] = 'OperationDefinition';
    Kind['VARIABLE_DEFINITION'] = 'VariableDefinition';
    Kind['SELECTION_SET'] = 'SelectionSet';
    Kind['FIELD'] = 'Field';
    Kind['ARGUMENT'] = 'Argument';
    Kind['FRAGMENT_SPREAD'] = 'FragmentSpread';
    Kind['INLINE_FRAGMENT'] = 'InlineFragment';
    Kind['FRAGMENT_DEFINITION'] = 'FragmentDefinition';
    Kind['VARIABLE'] = 'Variable';
    Kind['INT'] = 'IntValue';
    Kind['FLOAT'] = 'FloatValue';
    Kind['STRING'] = 'StringValue';
    Kind['BOOLEAN'] = 'BooleanValue';
    Kind['NULL'] = 'NullValue';
    Kind['ENUM'] = 'EnumValue';
    Kind['LIST'] = 'ListValue';
    Kind['OBJECT'] = 'ObjectValue';
    Kind['OBJECT_FIELD'] = 'ObjectField';
    Kind['DIRECTIVE'] = 'Directive';
    Kind['NAMED_TYPE'] = 'NamedType';
    Kind['LIST_TYPE'] = 'ListType';
    Kind['NON_NULL_TYPE'] = 'NonNullType';
    Kind['SCHEMA_DEFINITION'] = 'SchemaDefinition';
    Kind['OPERATION_TYPE_DEFINITION'] = 'OperationTypeDefinition';
    Kind['SCALAR_TYPE_DEFINITION'] = 'ScalarTypeDefinition';
    Kind['OBJECT_TYPE_DEFINITION'] = 'ObjectTypeDefinition';
    Kind['FIELD_DEFINITION'] = 'FieldDefinition';
    Kind['INPUT_VALUE_DEFINITION'] = 'InputValueDefinition';
    Kind['INTERFACE_TYPE_DEFINITION'] = 'InterfaceTypeDefinition';
    Kind['UNION_TYPE_DEFINITION'] = 'UnionTypeDefinition';
    Kind['ENUM_TYPE_DEFINITION'] = 'EnumTypeDefinition';
    Kind['ENUM_VALUE_DEFINITION'] = 'EnumValueDefinition';
    Kind['INPUT_OBJECT_TYPE_DEFINITION'] = 'InputObjectTypeDefinition';
    Kind['DIRECTIVE_DEFINITION'] = 'DirectiveDefinition';
    Kind['SCHEMA_EXTENSION'] = 'SchemaExtension';
    Kind['SCALAR_TYPE_EXTENSION'] = 'ScalarTypeExtension';
    Kind['OBJECT_TYPE_EXTENSION'] = 'ObjectTypeExtension';
    Kind['INTERFACE_TYPE_EXTENSION'] = 'InterfaceTypeExtension';
    Kind['UNION_TYPE_EXTENSION'] = 'UnionTypeExtension';
    Kind['ENUM_TYPE_EXTENSION'] = 'EnumTypeExtension';
    Kind['INPUT_OBJECT_TYPE_EXTENSION'] = 'InputObjectTypeExtension';
    Kind['TYPE_COORDINATE'] = 'TypeCoordinate';
    Kind['MEMBER_COORDINATE'] = 'MemberCoordinate';
    Kind['ARGUMENT_COORDINATE'] = 'ArgumentCoordinate';
    Kind['DIRECTIVE_COORDINATE'] = 'DirectiveCoordinate';
    Kind['DIRECTIVE_ARGUMENT_COORDINATE'] = 'DirectiveArgumentCoordinate';
})(Kind || (exports.Kind = Kind = {})); /**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */ 
}),
"[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/visitor.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.BREAK = void 0;
exports.getEnterLeaveForKind = getEnterLeaveForKind;
exports.getVisitFn = getVisitFn;
exports.visit = visit;
exports.visitInParallel = visitInParallel;
var _devAssert = __turbopack_context__.r("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/jsutils/devAssert.js [app-rsc] (ecmascript)");
var _inspect = __turbopack_context__.r("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/jsutils/inspect.js [app-rsc] (ecmascript)");
var _ast = __turbopack_context__.r("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/ast.js [app-rsc] (ecmascript)");
var _kinds = __turbopack_context__.r("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/kinds.js [app-rsc] (ecmascript)");
const BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 * ```ts
 * const editedAST = visit(ast, {
 *   enter(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: skip visiting this node
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   },
 *   leave(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: no action
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   }
 * });
 * ```
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to three permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind(node) {
 *     // enter the "Kind" node
 *   }
 * })
 * ```
 *
 * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind: {
 *     enter(node) {
 *       // enter the "Kind" node
 *     }
 *     leave(node) {
 *       // leave the "Kind" node
 *     }
 *   }
 * })
 * ```
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 * ```ts
 * visit(ast, {
 *   enter(node) {
 *     // enter any node
 *   },
 *   leave(node) {
 *     // leave any node
 *   }
 * })
 * ```
 */ exports.BREAK = BREAK;
function visit(root, visitor, visitorKeys = _ast.QueryDocumentKeys) {
    const enterLeaveMap = new Map();
    for (const kind of Object.values(_kinds.Kind)){
        enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
    }
    /* eslint-disable no-undef-init */ let stack = undefined;
    let inArray = Array.isArray(root);
    let keys = [
        root
    ];
    let index = -1;
    let edits = [];
    let node = root;
    let key = undefined;
    let parent = undefined;
    const path = [];
    const ancestors = [];
    /* eslint-enable no-undef-init */ do {
        index++;
        const isLeaving = index === keys.length;
        const isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
            key = ancestors.length === 0 ? undefined : path[path.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
                if (inArray) {
                    node = node.slice();
                    let editOffset = 0;
                    for (const [editKey, editValue] of edits){
                        const arrayKey = editKey - editOffset;
                        if (editValue === null) {
                            node.splice(arrayKey, 1);
                            editOffset++;
                        } else {
                            node[arrayKey] = editValue;
                        }
                    }
                } else {
                    node = {
                        ...node
                    };
                    for (const [editKey, editValue] of edits){
                        node[editKey] = editValue;
                    }
                }
            }
            index = stack.index;
            keys = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
        } else if (parent) {
            key = inArray ? index : keys[index];
            node = parent[key];
            if (node === null || node === undefined) {
                continue;
            }
            path.push(key);
        }
        let result;
        if (!Array.isArray(node)) {
            var _enterLeaveMap$get, _enterLeaveMap$get2;
            (0, _ast.isNode)(node) || (0, _devAssert.devAssert)(false, `Invalid AST Node: ${(0, _inspect.inspect)(node)}.`);
            const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
            result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
            if (result === BREAK) {
                break;
            }
            if (result === false) {
                if (!isLeaving) {
                    path.pop();
                    continue;
                }
            } else if (result !== undefined) {
                edits.push([
                    key,
                    result
                ]);
                if (!isLeaving) {
                    if ((0, _ast.isNode)(result)) {
                        node = result;
                    } else {
                        path.pop();
                        continue;
                    }
                }
            }
        }
        if (result === undefined && isEdited) {
            edits.push([
                key,
                node
            ]);
        }
        if (isLeaving) {
            path.pop();
        } else {
            var _node$kind;
            stack = {
                inArray,
                index,
                keys,
                edits,
                prev: stack
            };
            inArray = Array.isArray(node);
            keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
            index = -1;
            edits = [];
            if (parent) {
                ancestors.push(parent);
            }
            parent = node;
        }
    }while (stack !== undefined)
    if (edits.length !== 0) {
        // New root
        return edits[edits.length - 1][1];
    }
    return root;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */ function visitInParallel(visitors) {
    const skipping = new Array(visitors.length).fill(null);
    const mergedVisitor = Object.create(null);
    for (const kind of Object.values(_kinds.Kind)){
        let hasVisitor = false;
        const enterList = new Array(visitors.length).fill(undefined);
        const leaveList = new Array(visitors.length).fill(undefined);
        for(let i = 0; i < visitors.length; ++i){
            const { enter, leave } = getEnterLeaveForKind(visitors[i], kind);
            hasVisitor || (hasVisitor = enter != null || leave != null);
            enterList[i] = enter;
            leaveList[i] = leave;
        }
        if (!hasVisitor) {
            continue;
        }
        const mergedEnterLeave = {
            enter (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++){
                    if (skipping[i] === null) {
                        var _enterList$i;
                        const result = (_enterList$i = enterList[i]) === null || _enterList$i === void 0 ? void 0 : _enterList$i.apply(visitors[i], args);
                        if (result === false) {
                            skipping[i] = node;
                        } else if (result === BREAK) {
                            skipping[i] = BREAK;
                        } else if (result !== undefined) {
                            return result;
                        }
                    }
                }
            },
            leave (...args) {
                const node = args[0];
                for(let i = 0; i < visitors.length; i++){
                    if (skipping[i] === null) {
                        var _leaveList$i;
                        const result = (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0 ? void 0 : _leaveList$i.apply(visitors[i], args);
                        if (result === BREAK) {
                            skipping[i] = BREAK;
                        } else if (result !== undefined && result !== false) {
                            return result;
                        }
                    } else if (skipping[i] === node) {
                        skipping[i] = null;
                    }
                }
            }
        };
        mergedVisitor[kind] = mergedEnterLeave;
    }
    return mergedVisitor;
}
/**
 * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
 */ function getEnterLeaveForKind(visitor, kind) {
    const kindVisitor = visitor[kind];
    if (typeof kindVisitor === 'object') {
        // { Kind: { enter() {}, leave() {} } }
        return kindVisitor;
    } else if (typeof kindVisitor === 'function') {
        // { Kind() {} }
        return {
            enter: kindVisitor,
            leave: undefined
        };
    } // { enter() {}, leave() {} }
    return {
        enter: visitor.enter,
        leave: visitor.leave
    };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 *
 * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
 */ /* c8 ignore next 8 */ function getVisitFn(visitor, kind, isLeaving) {
    const { enter, leave } = getEnterLeaveForKind(visitor, kind);
    return isLeaving ? leave : enter;
}
}),
"[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/printer.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.print = print;
var _blockString = __turbopack_context__.r("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/blockString.js [app-rsc] (ecmascript)");
var _printString = __turbopack_context__.r("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/printString.js [app-rsc] (ecmascript)");
var _visitor = __turbopack_context__.r("[project]/Truepathdigital_Build/true_path_digital_new/node_modules/graphql/language/visitor.js [app-rsc] (ecmascript)");
/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */ function print(ast) {
    return (0, _visitor.visit)(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
    Name: {
        leave: (node)=>node.value
    },
    Variable: {
        leave: (node)=>'$' + node.name
    },
    // Document
    Document: {
        leave: (node)=>join(node.definitions, '\n\n')
    },
    OperationDefinition: {
        leave (node) {
            const varDefs = hasMultilineItems(node.variableDefinitions) ? wrap('(\n', join(node.variableDefinitions, '\n'), '\n)') : wrap('(', join(node.variableDefinitions, ', '), ')');
            const prefix = wrap('', node.description, '\n') + join([
                node.operation,
                join([
                    node.name,
                    varDefs
                ]),
                join(node.directives, ' ')
            ], ' '); // Anonymous queries with no directives or variable definitions can use
            // the query short form.
            return (prefix === 'query' ? '' : prefix + ' ') + node.selectionSet;
        }
    },
    VariableDefinition: {
        leave: ({ variable, type, defaultValue, directives, description })=>wrap('', description, '\n') + variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '))
    },
    SelectionSet: {
        leave: ({ selections })=>block(selections)
    },
    Field: {
        leave ({ alias, name, arguments: args, directives, selectionSet }) {
            const prefix = wrap('', alias, ': ') + name;
            let argsLine = prefix + wrap('(', join(args, ', '), ')');
            if (argsLine.length > MAX_LINE_LENGTH) {
                argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
            }
            return join([
                argsLine,
                join(directives, ' '),
                selectionSet
            ], ' ');
        }
    },
    Argument: {
        leave: ({ name, value })=>name + ': ' + value
    },
    // Fragments
    FragmentSpread: {
        leave: ({ name, directives })=>'...' + name + wrap(' ', join(directives, ' '))
    },
    InlineFragment: {
        leave: ({ typeCondition, directives, selectionSet })=>join([
                '...',
                wrap('on ', typeCondition),
                join(directives, ' '),
                selectionSet
            ], ' ')
    },
    FragmentDefinition: {
        leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet, description })=>wrap('', description, '\n') + // Note: fragment variable definitions are experimental and may be changed
            // or removed in the future.
            `fragment ${name}${wrap('(', join(variableDefinitions, ', '), ')')} ` + `on ${typeCondition} ${wrap('', join(directives, ' '), ' ')}` + selectionSet
    },
    // Value
    IntValue: {
        leave: ({ value })=>value
    },
    FloatValue: {
        leave: ({ value })=>value
    },
    StringValue: {
        leave: ({ value, block: isBlockString })=>isBlockString ? (0, _blockString.printBlockString)(value) : (0, _printString.printString)(value)
    },
    BooleanValue: {
        leave: ({ value })=>value ? 'true' : 'false'
    },
    NullValue: {
        leave: ()=>'null'
    },
    EnumValue: {
        leave: ({ value })=>value
    },
    ListValue: {
        leave: ({ values })=>'[' + join(values, ', ') + ']'
    },
    ObjectValue: {
        leave: ({ fields })=>'{' + join(fields, ', ') + '}'
    },
    ObjectField: {
        leave: ({ name, value })=>name + ': ' + value
    },
    // Directive
    Directive: {
        leave: ({ name, arguments: args })=>'@' + name + wrap('(', join(args, ', '), ')')
    },
    // Type
    NamedType: {
        leave: ({ name })=>name
    },
    ListType: {
        leave: ({ type })=>'[' + type + ']'
    },
    NonNullType: {
        leave: ({ type })=>type + '!'
    },
    // Type System Definitions
    SchemaDefinition: {
        leave: ({ description, directives, operationTypes })=>wrap('', description, '\n') + join([
                'schema',
                join(directives, ' '),
                block(operationTypes)
            ], ' ')
    },
    OperationTypeDefinition: {
        leave: ({ operation, type })=>operation + ': ' + type
    },
    ScalarTypeDefinition: {
        leave: ({ description, name, directives })=>wrap('', description, '\n') + join([
                'scalar',
                name,
                join(directives, ' ')
            ], ' ')
    },
    ObjectTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields })=>wrap('', description, '\n') + join([
                'type',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    FieldDefinition: {
        leave: ({ description, name, arguments: args, type, directives })=>wrap('', description, '\n') + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '))
    },
    InputValueDefinition: {
        leave: ({ description, name, type, defaultValue, directives })=>wrap('', description, '\n') + join([
                name + ': ' + type,
                wrap('= ', defaultValue),
                join(directives, ' ')
            ], ' ')
    },
    InterfaceTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields })=>wrap('', description, '\n') + join([
                'interface',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    UnionTypeDefinition: {
        leave: ({ description, name, directives, types })=>wrap('', description, '\n') + join([
                'union',
                name,
                join(directives, ' '),
                wrap('= ', join(types, ' | '))
            ], ' ')
    },
    EnumTypeDefinition: {
        leave: ({ description, name, directives, values })=>wrap('', description, '\n') + join([
                'enum',
                name,
                join(directives, ' '),
                block(values)
            ], ' ')
    },
    EnumValueDefinition: {
        leave: ({ description, name, directives })=>wrap('', description, '\n') + join([
                name,
                join(directives, ' ')
            ], ' ')
    },
    InputObjectTypeDefinition: {
        leave: ({ description, name, directives, fields })=>wrap('', description, '\n') + join([
                'input',
                name,
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    DirectiveDefinition: {
        leave: ({ description, name, arguments: args, repeatable, locations })=>wrap('', description, '\n') + 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ')
    },
    SchemaExtension: {
        leave: ({ directives, operationTypes })=>join([
                'extend schema',
                join(directives, ' '),
                block(operationTypes)
            ], ' ')
    },
    ScalarTypeExtension: {
        leave: ({ name, directives })=>join([
                'extend scalar',
                name,
                join(directives, ' ')
            ], ' ')
    },
    ObjectTypeExtension: {
        leave: ({ name, interfaces, directives, fields })=>join([
                'extend type',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    InterfaceTypeExtension: {
        leave: ({ name, interfaces, directives, fields })=>join([
                'extend interface',
                name,
                wrap('implements ', join(interfaces, ' & ')),
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    UnionTypeExtension: {
        leave: ({ name, directives, types })=>join([
                'extend union',
                name,
                join(directives, ' '),
                wrap('= ', join(types, ' | '))
            ], ' ')
    },
    EnumTypeExtension: {
        leave: ({ name, directives, values })=>join([
                'extend enum',
                name,
                join(directives, ' '),
                block(values)
            ], ' ')
    },
    InputObjectTypeExtension: {
        leave: ({ name, directives, fields })=>join([
                'extend input',
                name,
                join(directives, ' '),
                block(fields)
            ], ' ')
    },
    // Schema Coordinates
    TypeCoordinate: {
        leave: ({ name })=>name
    },
    MemberCoordinate: {
        leave: ({ name, memberName })=>join([
                name,
                wrap('.', memberName)
            ])
    },
    ArgumentCoordinate: {
        leave: ({ name, fieldName, argumentName })=>join([
                name,
                wrap('.', fieldName),
                wrap('(', argumentName, ':)')
            ])
    },
    DirectiveCoordinate: {
        leave: ({ name })=>join([
                '@',
                name
            ])
    },
    DirectiveArgumentCoordinate: {
        leave: ({ name, argumentName })=>join([
                '@',
                name,
                wrap('(', argumentName, ':)')
            ])
    }
};
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */ function join(maybeArray, separator = '') {
    var _maybeArray$filter$jo;
    return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x)=>x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an indented `{ }` block.
 */ function block(array) {
    return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */ function wrap(start, maybeString, end = '') {
    return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}
function indent(str) {
    return wrap('  ', str.replace(/\n/g, '\n  '));
}
function hasMultilineItems(maybeArray) {
    var _maybeArray$some;
    // FIXME: https://github.com/graphql/graphql-js/issues/2203
    /* c8 ignore next */ return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str)=>str.includes('\n'))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}
}),
];

//# sourceMappingURL=Truepathdigital_Build_true_path_digital_new_c0ef85aa._.js.map