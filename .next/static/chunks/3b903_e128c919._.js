(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/09-auth/node_modules/@tanstack/query-core/build/modern/hydration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hydration.ts
__turbopack_context__.s([
    "defaultShouldDehydrateMutation",
    ()=>defaultShouldDehydrateMutation,
    "defaultShouldDehydrateQuery",
    ()=>defaultShouldDehydrateQuery,
    "dehydrate",
    ()=>dehydrate,
    "hydrate",
    ()=>hydrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)");
;
function defaultTransformerFn(data) {
    return data;
}
function dehydrateMutation(mutation) {
    return {
        mutationKey: mutation.options.mutationKey,
        state: mutation.state,
        ...mutation.options.scope && {
            scope: mutation.options.scope
        },
        ...mutation.meta && {
            meta: mutation.meta
        }
    };
}
function dehydrateQuery(query, serializeData, shouldRedactErrors) {
    var _query_promise;
    return {
        dehydratedAt: Date.now(),
        state: {
            ...query.state,
            ...query.state.data !== void 0 && {
                data: serializeData(query.state.data)
            }
        },
        queryKey: query.queryKey,
        queryHash: query.queryHash,
        ...query.state.status === "pending" && {
            promise: (_query_promise = query.promise) === null || _query_promise === void 0 ? void 0 : _query_promise.then(serializeData).catch((error)=>{
                if (!shouldRedactErrors(error)) {
                    return Promise.reject(error);
                }
                if ("TURBOPACK compile-time truthy", 1) {
                    console.error("A query that was dehydrated as pending ended up rejecting. [".concat(query.queryHash, "]: ").concat(error, "; The error will be redacted in production builds"));
                }
                return Promise.reject(new Error("redacted"));
            })
        },
        ...query.meta && {
            meta: query.meta
        }
    };
}
function defaultShouldDehydrateMutation(mutation) {
    return mutation.state.isPaused;
}
function defaultShouldDehydrateQuery(query) {
    return query.state.status === "success";
}
function defaultShouldRedactErrors(_) {
    return true;
}
function dehydrate(client) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _client_getDefaultOptions_dehydrate, _client_getDefaultOptions_dehydrate1, _client_getDefaultOptions_dehydrate2, _client_getDefaultOptions_dehydrate3;
    var _options_shouldDehydrateMutation, _ref;
    const filterMutation = (_ref = (_options_shouldDehydrateMutation = options.shouldDehydrateMutation) !== null && _options_shouldDehydrateMutation !== void 0 ? _options_shouldDehydrateMutation : (_client_getDefaultOptions_dehydrate = client.getDefaultOptions().dehydrate) === null || _client_getDefaultOptions_dehydrate === void 0 ? void 0 : _client_getDefaultOptions_dehydrate.shouldDehydrateMutation) !== null && _ref !== void 0 ? _ref : defaultShouldDehydrateMutation;
    const mutations = client.getMutationCache().getAll().flatMap((mutation)=>filterMutation(mutation) ? [
            dehydrateMutation(mutation)
        ] : []);
    var _options_shouldDehydrateQuery, _ref1;
    const filterQuery = (_ref1 = (_options_shouldDehydrateQuery = options.shouldDehydrateQuery) !== null && _options_shouldDehydrateQuery !== void 0 ? _options_shouldDehydrateQuery : (_client_getDefaultOptions_dehydrate1 = client.getDefaultOptions().dehydrate) === null || _client_getDefaultOptions_dehydrate1 === void 0 ? void 0 : _client_getDefaultOptions_dehydrate1.shouldDehydrateQuery) !== null && _ref1 !== void 0 ? _ref1 : defaultShouldDehydrateQuery;
    var _options_shouldRedactErrors, _ref2;
    const shouldRedactErrors = (_ref2 = (_options_shouldRedactErrors = options.shouldRedactErrors) !== null && _options_shouldRedactErrors !== void 0 ? _options_shouldRedactErrors : (_client_getDefaultOptions_dehydrate2 = client.getDefaultOptions().dehydrate) === null || _client_getDefaultOptions_dehydrate2 === void 0 ? void 0 : _client_getDefaultOptions_dehydrate2.shouldRedactErrors) !== null && _ref2 !== void 0 ? _ref2 : defaultShouldRedactErrors;
    var _options_serializeData, _ref3;
    const serializeData = (_ref3 = (_options_serializeData = options.serializeData) !== null && _options_serializeData !== void 0 ? _options_serializeData : (_client_getDefaultOptions_dehydrate3 = client.getDefaultOptions().dehydrate) === null || _client_getDefaultOptions_dehydrate3 === void 0 ? void 0 : _client_getDefaultOptions_dehydrate3.serializeData) !== null && _ref3 !== void 0 ? _ref3 : defaultTransformerFn;
    const queries = client.getQueryCache().getAll().flatMap((query)=>filterQuery(query) ? [
            dehydrateQuery(query, serializeData, shouldRedactErrors)
        ] : []);
    return {
        mutations,
        queries
    };
}
function hydrate(client, dehydratedState, options) {
    var _options_defaultOptions, _client_getDefaultOptions_hydrate;
    if (typeof dehydratedState !== "object" || dehydratedState === null) {
        return;
    }
    const mutationCache = client.getMutationCache();
    const queryCache = client.getQueryCache();
    var _options_defaultOptions_deserializeData, _ref;
    const deserializeData = (_ref = (_options_defaultOptions_deserializeData = options === null || options === void 0 ? void 0 : (_options_defaultOptions = options.defaultOptions) === null || _options_defaultOptions === void 0 ? void 0 : _options_defaultOptions.deserializeData) !== null && _options_defaultOptions_deserializeData !== void 0 ? _options_defaultOptions_deserializeData : (_client_getDefaultOptions_hydrate = client.getDefaultOptions().hydrate) === null || _client_getDefaultOptions_hydrate === void 0 ? void 0 : _client_getDefaultOptions_hydrate.deserializeData) !== null && _ref !== void 0 ? _ref : defaultTransformerFn;
    const mutations = dehydratedState.mutations || [];
    const queries = dehydratedState.queries || [];
    mutations.forEach((param)=>{
        let { state, ...mutationOptions } = param;
        var _client_getDefaultOptions_hydrate, _options_defaultOptions;
        mutationCache.build(client, {
            ...(_client_getDefaultOptions_hydrate = client.getDefaultOptions().hydrate) === null || _client_getDefaultOptions_hydrate === void 0 ? void 0 : _client_getDefaultOptions_hydrate.mutations,
            ...options === null || options === void 0 ? void 0 : (_options_defaultOptions = options.defaultOptions) === null || _options_defaultOptions === void 0 ? void 0 : _options_defaultOptions.mutations,
            ...mutationOptions
        }, state);
    });
    queries.forEach((param)=>{
        let { queryKey, state, queryHash, meta, promise, dehydratedAt } = param;
        const syncData = promise ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tryResolveSync"])(promise) : void 0;
        const rawData = state.data === void 0 ? syncData === null || syncData === void 0 ? void 0 : syncData.data : state.data;
        const data = rawData === void 0 ? rawData : deserializeData(rawData);
        let query = queryCache.get(queryHash);
        const existingQueryIsPending = (query === null || query === void 0 ? void 0 : query.state.status) === "pending";
        const existingQueryIsFetching = (query === null || query === void 0 ? void 0 : query.state.fetchStatus) === "fetching";
        if (query) {
            const hasNewerSyncData = syncData && // We only need this undefined check to handle older dehydration
            // payloads that might not have dehydratedAt
            dehydratedAt !== void 0 && dehydratedAt > query.state.dataUpdatedAt;
            if (state.dataUpdatedAt > query.state.dataUpdatedAt || hasNewerSyncData) {
                const { fetchStatus: _ignored, ...serializedState } = state;
                query.setState({
                    ...serializedState,
                    data
                });
            }
        } else {
            var _client_getDefaultOptions_hydrate, _options_defaultOptions;
            query = queryCache.build(client, {
                ...(_client_getDefaultOptions_hydrate = client.getDefaultOptions().hydrate) === null || _client_getDefaultOptions_hydrate === void 0 ? void 0 : _client_getDefaultOptions_hydrate.queries,
                ...options === null || options === void 0 ? void 0 : (_options_defaultOptions = options.defaultOptions) === null || _options_defaultOptions === void 0 ? void 0 : _options_defaultOptions.queries,
                queryKey,
                queryHash,
                meta
            }, // Reset fetch status to idle to avoid
            // query being stuck in fetching state upon hydration
            {
                ...state,
                data,
                fetchStatus: "idle",
                status: data !== void 0 ? "success" : state.status
            });
        }
        if (promise && !existingQueryIsPending && !existingQueryIsFetching && // Only hydrate if dehydration is newer than any existing data,
        // this is always true for new queries
        (dehydratedAt === void 0 || dehydratedAt > query.state.dataUpdatedAt)) {
            void query.fetch(void 0, {
                // RSC transformed promises are not thenable
                initialPromise: Promise.resolve(promise).then(deserializeData)
            });
        }
    });
}
;
 //# sourceMappingURL=hydration.js.map
}),
"[project]/09-auth/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HydrationBoundary",
    ()=>HydrationBoundary
]);
// src/HydrationBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/hydration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
"use client";
;
;
;
var HydrationBoundary = (param)=>{
    let { children, options = {}, state, queryClient } = param;
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const optionsRef = __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](options);
    optionsRef.current = options;
    const hydrationQueue = __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "HydrationBoundary.useMemo[hydrationQueue]": ()=>{
            if (state) {
                if (typeof state !== "object") {
                    return;
                }
                const queryCache = client.getQueryCache();
                const queries = state.queries || [];
                const newQueries = [];
                const existingQueries = [];
                for (const dehydratedQuery of queries){
                    const existingQuery = queryCache.get(dehydratedQuery.queryHash);
                    if (!existingQuery) {
                        newQueries.push(dehydratedQuery);
                    } else {
                        const hydrationIsNewer = dehydratedQuery.state.dataUpdatedAt > existingQuery.state.dataUpdatedAt || dehydratedQuery.promise && existingQuery.state.status !== "pending" && existingQuery.state.fetchStatus !== "fetching" && dehydratedQuery.dehydratedAt !== void 0 && dehydratedQuery.dehydratedAt > existingQuery.state.dataUpdatedAt;
                        if (hydrationIsNewer) {
                            existingQueries.push(dehydratedQuery);
                        }
                    }
                }
                if (newQueries.length > 0) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrate"])(client, {
                        queries: newQueries
                    }, optionsRef.current);
                }
                if (existingQueries.length > 0) {
                    return existingQueries;
                }
            }
            return void 0;
        }
    }["HydrationBoundary.useMemo[hydrationQueue]"], [
        client,
        state
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "HydrationBoundary.useEffect": ()=>{
            if (hydrationQueue) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrate"])(client, {
                    queries: hydrationQueue
                }, optionsRef.current);
            }
        }
    }["HydrationBoundary.useEffect"], [
        client,
        hydrationQueue
    ]);
    return children;
};
;
 //# sourceMappingURL=HydrationBoundary.js.map
}),
"[project]/09-auth/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutationObserver.ts
__turbopack_context__.s([
    "MutationObserver",
    ()=>MutationObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
;
;
var _client, _currentResult, _currentMutation, _mutateOptions, _updateResult, _notify, _class;
;
;
;
;
var MutationObserver = (_client = /*#__PURE__*/ new WeakMap(), _currentResult = /*#__PURE__*/ new WeakMap(), _currentMutation = /*#__PURE__*/ new WeakMap(), _mutateOptions = /*#__PURE__*/ new WeakMap(), _updateResult = /*#__PURE__*/ new WeakSet(), _notify = /*#__PURE__*/ new WeakSet(), _class = class extends __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    bindMethods() {
        this.mutate = this.mutate.bind(this);
        this.reset = this.reset.bind(this);
    }
    setOptions(options) {
        var _class_private_field_get;
        const prevOptions = this.options;
        this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client).defaultMutationOptions(options);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client).getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentMutation),
                observer: this
            });
        }
        if ((prevOptions === null || prevOptions === void 0 ? void 0 : prevOptions.mutationKey) && this.options.mutationKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(prevOptions.mutationKey) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(this.options.mutationKey)) {
            this.reset();
        } else if (((_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentMutation)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.state.status) === "pending") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentMutation).setOptions(this.options);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            var _class_private_field_get;
            (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentMutation)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.removeObserver(this);
        }
    }
    onMutationUpdate(action) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateResult, updateResult).call(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notify, notify).call(this, action);
    }
    getCurrentResult() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult);
    }
    reset() {
        var _class_private_field_get;
        (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentMutation)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.removeObserver(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentMutation, void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateResult, updateResult).call(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notify, notify).call(this);
    }
    mutate(variables, options) {
        var _class_private_field_get;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutateOptions, options);
        (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentMutation)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.removeObserver(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentMutation, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client).getMutationCache().build((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client), this.options));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentMutation).addObserver(this);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentMutation).execute(variables);
    }
    constructor(client, options){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateResult), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notify), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentMutation, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutateOptions, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, client);
        this.setOptions(options);
        this.bindMethods();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateResult, updateResult).call(this);
    }
}, _class);
;
function updateResult() {
    var _class_private_field_get;
    var _class_private_field_get_state;
    const state = (_class_private_field_get_state = (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentMutation)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.state) !== null && _class_private_field_get_state !== void 0 ? _class_private_field_get_state : (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult, {
        ...state,
        isPending: state.status === "pending",
        isSuccess: state.status === "success",
        isError: state.status === "error",
        isIdle: state.status === "idle",
        mutate: this.mutate,
        reset: this.reset
    });
}
function notify(action) {
    __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutateOptions) && this.hasListeners()) {
            const variables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult).variables;
            const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult).context;
            if ((action === null || action === void 0 ? void 0 : action.type) === "success") {
                var _class_private_field_get_onSuccess, _class_private_field_get, _class_private_field_get_onSettled, _class_private_field_get1;
                (_class_private_field_get_onSuccess = (_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutateOptions)).onSuccess) === null || _class_private_field_get_onSuccess === void 0 ? void 0 : _class_private_field_get_onSuccess.call(_class_private_field_get, action.data, variables, context);
                (_class_private_field_get_onSettled = (_class_private_field_get1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutateOptions)).onSettled) === null || _class_private_field_get_onSettled === void 0 ? void 0 : _class_private_field_get_onSettled.call(_class_private_field_get1, action.data, null, variables, context);
            } else if ((action === null || action === void 0 ? void 0 : action.type) === "error") {
                var _class_private_field_get_onError, _class_private_field_get2, _class_private_field_get_onSettled1, _class_private_field_get3;
                (_class_private_field_get_onError = (_class_private_field_get2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutateOptions)).onError) === null || _class_private_field_get_onError === void 0 ? void 0 : _class_private_field_get_onError.call(_class_private_field_get2, action.error, variables, context);
                (_class_private_field_get_onSettled1 = (_class_private_field_get3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _mutateOptions)).onSettled) === null || _class_private_field_get_onSettled1 === void 0 ? void 0 : _class_private_field_get_onSettled1.call(_class_private_field_get3, void 0, action.error, variables, context);
            }
        }
        this.listeners.forEach((listener)=>{
            listener((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult));
        });
    });
}
 //# sourceMappingURL=mutationObserver.js.map
}),
"[project]/09-auth/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutation",
    ()=>useMutation
]);
// src/useMutation.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
"use client";
;
;
;
function useMutation(options, queryClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useMutation.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutationObserver"](client, options)
    }["useMutation.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useMutation.useEffect": ()=>{
            observer.setOptions(options);
        }
    }["useMutation.useEffect"], [
        observer,
        options
    ]);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useSyncExternalStore[result]": (onStoreChange)=>observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange))
    }["useMutation.useSyncExternalStore[result]"], [
        observer
    ]), {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"], {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"]);
    const mutate = __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useCallback[mutate]": (variables, mutateOptions)=>{
            observer.mutate(variables, mutateOptions).catch(__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        }
    }["useMutation.useCallback[mutate]"], [
        observer
    ]);
    if (result.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(observer.options.throwOnError, [
        result.error
    ])) {
        throw result.error;
    }
    return {
        ...result,
        mutate,
        mutateAsync: result.mutate
    };
}
;
 //# sourceMappingURL=useMutation.js.map
}),
"[project]/09-auth/node_modules/react-paginate/dist/react-paginate.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, a) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = a(__turbopack_context__.r("[project]/09-auth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)")) : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, (e)=>(()=>{
        var a = {
            703: (e, a, t)=>{
                "use strict";
                var r = t(414);
                function n() {}
                function i() {}
                i.resetWarningCache = n, e.exports = function() {
                    function e(e, a, t, n, i, s) {
                        if (s !== r) {
                            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw o.name = "Invariant Violation", o;
                        }
                    }
                    function a() {
                        return e;
                    }
                    e.isRequired = e;
                    var t = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: a,
                        element: e,
                        elementType: e,
                        instanceOf: a,
                        node: e,
                        objectOf: a,
                        oneOf: a,
                        oneOfType: a,
                        shape: a,
                        exact: a,
                        checkPropTypes: i,
                        resetWarningCache: n
                    };
                    return t.PropTypes = t, t;
                };
            },
            697: (e, a, t)=>{
                e.exports = t(703)();
            },
            414: (e)=>{
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            },
            98: (a)=>{
                "use strict";
                a.exports = e;
            }
        }, t = {};
        function r(e) {
            var n = t[e];
            if (void 0 !== n) return n.exports;
            var i = t[e] = {
                exports: {}
            };
            return a[e](i, i.exports, r), i.exports;
        }
        r.n = (e)=>{
            var a = e && e.__esModule ? ()=>e.default : ()=>e;
            return r.d(a, {
                a
            }), a;
        }, r.d = (e, a)=>{
            for(var t in a)r.o(a, t) && !r.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: a[t]
            });
        }, r.o = (e, a)=>Object.prototype.hasOwnProperty.call(e, a), r.r = (e)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        };
        var n = {};
        return (()=>{
            "use strict";
            r.r(n), r.d(n, {
                default: ()=>k
            });
            var e = r(98), a = r.n(e), t = r(697), i = r.n(t);
            function s() {
                return s = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", s.apply(this, arguments);
            }
            var o = function(e) {
                var t = e.pageClassName, r = e.pageLinkClassName, n = e.page, i = e.selected, o = e.activeClassName, l = e.activeLinkClassName, c = e.getEventListener, p = e.pageSelectedHandler, u = e.href, g = e.extraAriaContext, d = e.pageLabelBuilder, f = e.rel, b = e.ariaLabel || "Page " + n + (g ? " " + g : ""), v = null;
                return i && (v = "page", b = e.ariaLabel || "Page " + n + " is your current page", t = void 0 !== t ? t + " " + o : o, void 0 !== r ? void 0 !== l && (r = r + " " + l) : r = l), a().createElement("li", {
                    className: t
                }, a().createElement("a", s({
                    rel: f,
                    role: u ? void 0 : "button",
                    className: r,
                    href: u,
                    tabIndex: i ? "-1" : "0",
                    "aria-label": b,
                    "aria-current": v,
                    onKeyPress: p
                }, c(p)), d(n)));
            };
            o.propTypes = {
                pageSelectedHandler: i().func.isRequired,
                selected: i().bool.isRequired,
                pageClassName: i().string,
                pageLinkClassName: i().string,
                activeClassName: i().string,
                activeLinkClassName: i().string,
                extraAriaContext: i().string,
                href: i().string,
                ariaLabel: i().string,
                page: i().number.isRequired,
                getEventListener: i().func.isRequired,
                pageLabelBuilder: i().func.isRequired,
                rel: i().string
            };
            const l = o;
            function c() {
                return c = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", c.apply(this, arguments);
            }
            var p = function(e) {
                var t = e.breakLabel, r = e.breakAriaLabel, n = e.breakClassName, i = e.breakLinkClassName, s = e.breakHandler, o = e.getEventListener, l = n || "break";
                return a().createElement("li", {
                    className: l
                }, a().createElement("a", c({
                    className: i,
                    role: "button",
                    tabIndex: "0",
                    "aria-label": r,
                    onKeyPress: s
                }, o(s)), t));
            };
            p.propTypes = {
                breakLabel: i().oneOfType([
                    i().string,
                    i().node
                ]),
                breakAriaLabel: i().string,
                breakClassName: i().string,
                breakLinkClassName: i().string,
                breakHandler: i().func.isRequired,
                getEventListener: i().func.isRequired
            };
            const u = p;
            function g(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return null != e ? e : a;
            }
            function d(e) {
                return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, d(e);
            }
            function f() {
                return f = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", f.apply(this, arguments);
            }
            function b(e, a) {
                for(var t = 0; t < a.length; t++){
                    var r = a[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function v(e, a) {
                return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e;
                }, v(e, a);
            }
            function h(e, a) {
                if (a && ("object" === d(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
                return m(e);
            }
            function m(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function y(e) {
                return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                }, y(e);
            }
            function C(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e;
            }
            var P = function(e) {
                !function(e, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a && v(e, a);
                }(o, e);
                var t, r, n, i, s = (n = o, i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }(), function() {
                    var e, a = y(n);
                    if (i) {
                        var t = y(this).constructor;
                        e = Reflect.construct(a, arguments, t);
                    } else e = a.apply(this, arguments);
                    return h(this, e);
                });
                function o(e) {
                    var t, r;
                    return function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
                    }(this, o), C(m(t = s.call(this, e)), "handlePreviousPage", function(e) {
                        var a = t.state.selected;
                        t.handleClick(e, null, a > 0 ? a - 1 : void 0, {
                            isPrevious: !0
                        });
                    }), C(m(t), "handleNextPage", function(e) {
                        var a = t.state.selected, r = t.props.pageCount;
                        t.handleClick(e, null, a < r - 1 ? a + 1 : void 0, {
                            isNext: !0
                        });
                    }), C(m(t), "handlePageSelected", function(e, a) {
                        if (t.state.selected === e) return t.callActiveCallback(e), void t.handleClick(a, null, void 0, {
                            isActive: !0
                        });
                        t.handleClick(a, null, e);
                    }), C(m(t), "handlePageChange", function(e) {
                        t.state.selected !== e && (t.setState({
                            selected: e
                        }), t.callCallback(e));
                    }), C(m(t), "getEventListener", function(e) {
                        return C({}, t.props.eventListener, e);
                    }), C(m(t), "handleClick", function(e, a, r) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i = n.isPrevious, s = void 0 !== i && i, o = n.isNext, l = void 0 !== o && o, c = n.isBreak, p = void 0 !== c && c, u = n.isActive, g = void 0 !== u && u;
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                        var d = t.state.selected, f = t.props.onClick, b = r;
                        if (f) {
                            var v = f({
                                index: a,
                                selected: d,
                                nextSelectedPage: r,
                                event: e,
                                isPrevious: s,
                                isNext: l,
                                isBreak: p,
                                isActive: g
                            });
                            if (!1 === v) return;
                            Number.isInteger(v) && (b = v);
                        }
                        void 0 !== b && t.handlePageChange(b);
                    }), C(m(t), "handleBreakClick", function(e, a) {
                        var r = t.state.selected;
                        t.handleClick(a, e, r < e ? t.getForwardJump() : t.getBackwardJump(), {
                            isBreak: !0
                        });
                    }), C(m(t), "callCallback", function(e) {
                        void 0 !== t.props.onPageChange && "function" == typeof t.props.onPageChange && t.props.onPageChange({
                            selected: e
                        });
                    }), C(m(t), "callActiveCallback", function(e) {
                        void 0 !== t.props.onPageActive && "function" == typeof t.props.onPageActive && t.props.onPageActive({
                            selected: e
                        });
                    }), C(m(t), "getElementPageRel", function(e) {
                        var a = t.state.selected, r = t.props, n = r.nextPageRel, i = r.prevPageRel, s = r.selectedPageRel;
                        return a - 1 === e ? i : a === e ? s : a + 1 === e ? n : void 0;
                    }), C(m(t), "pagination", function() {
                        var e = [], r = t.props, n = r.pageRangeDisplayed, i = r.pageCount, s = r.marginPagesDisplayed, o = r.breakLabel, l = r.breakClassName, c = r.breakLinkClassName, p = r.breakAriaLabels, g = t.state.selected;
                        if (i <= n) for(var d = 0; d < i; d++)e.push(t.getPageElement(d));
                        else {
                            var f = n / 2, b = n - f;
                            g > i - n / 2 ? f = n - (b = i - g) : g < n / 2 && (b = n - (f = g));
                            var v, h, m = function(e) {
                                return t.getPageElement(e);
                            }, y = [];
                            for(v = 0; v < i; v++){
                                var C = v + 1;
                                if (C <= s) y.push({
                                    type: "page",
                                    index: v,
                                    display: m(v)
                                });
                                else if (C > i - s) y.push({
                                    type: "page",
                                    index: v,
                                    display: m(v)
                                });
                                else if (v >= g - f && v <= g + (0 === g && n > 1 ? b - 1 : b)) y.push({
                                    type: "page",
                                    index: v,
                                    display: m(v)
                                });
                                else if (o && y.length > 0 && y[y.length - 1].display !== h && (n > 0 || s > 0)) {
                                    var P = v < g ? p.backward : p.forward;
                                    h = a().createElement(u, {
                                        key: v,
                                        breakAriaLabel: P,
                                        breakLabel: o,
                                        breakClassName: l,
                                        breakLinkClassName: c,
                                        breakHandler: t.handleBreakClick.bind(null, v),
                                        getEventListener: t.getEventListener
                                    }), y.push({
                                        type: "break",
                                        index: v,
                                        display: h
                                    });
                                }
                            }
                            y.forEach(function(a, t) {
                                var r = a;
                                "break" === a.type && y[t - 1] && "page" === y[t - 1].type && y[t + 1] && "page" === y[t + 1].type && y[t + 1].index - y[t - 1].index <= 2 && (r = {
                                    type: "page",
                                    index: a.index,
                                    display: m(a.index)
                                }), e.push(r.display);
                            });
                        }
                        return e;
                    }), void 0 !== e.initialPage && void 0 !== e.forcePage && console.warn("(react-paginate): Both initialPage (".concat(e.initialPage, ") and forcePage (").concat(e.forcePage, ") props are provided, which is discouraged.") + " Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"), r = e.initialPage ? e.initialPage : e.forcePage ? e.forcePage : 0, t.state = {
                        selected: r
                    }, t;
                }
                return t = o, (r = [
                    {
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props, a = e.initialPage, t = e.disableInitialCallback, r = e.extraAriaContext, n = e.pageCount, i = e.forcePage;
                            void 0 === a || t || this.callCallback(a), r && console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."), Number.isInteger(n) || console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n, "). Did you forget a Math.ceil()?")), void 0 !== a && a > n - 1 && console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a, " > ").concat(n - 1, ").")), void 0 !== i && i > n - 1 && console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i, " > ").concat(n - 1, ")."));
                        }
                    },
                    {
                        key: "componentDidUpdate",
                        value: function(e) {
                            void 0 !== this.props.forcePage && this.props.forcePage !== e.forcePage && (this.props.forcePage > this.props.pageCount - 1 && console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage, " > ").concat(this.props.pageCount - 1, ").")), this.setState({
                                selected: this.props.forcePage
                            })), Number.isInteger(e.pageCount) && !Number.isInteger(this.props.pageCount) && console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount, "). Did you forget a Math.ceil()?"));
                        }
                    },
                    {
                        key: "getForwardJump",
                        value: function() {
                            var e = this.state.selected, a = this.props, t = a.pageCount, r = e + a.pageRangeDisplayed;
                            return r >= t ? t - 1 : r;
                        }
                    },
                    {
                        key: "getBackwardJump",
                        value: function() {
                            var e = this.state.selected - this.props.pageRangeDisplayed;
                            return e < 0 ? 0 : e;
                        }
                    },
                    {
                        key: "getElementHref",
                        value: function(e) {
                            var a = this.props, t = a.hrefBuilder, r = a.pageCount, n = a.hrefAllControls;
                            if (t) return n || e >= 0 && e < r ? t(e + 1, r, this.state.selected) : void 0;
                        }
                    },
                    {
                        key: "ariaLabelBuilder",
                        value: function(e) {
                            var a = e === this.state.selected;
                            if (this.props.ariaLabelBuilder && e >= 0 && e < this.props.pageCount) {
                                var t = this.props.ariaLabelBuilder(e + 1, a);
                                return this.props.extraAriaContext && !a && (t = t + " " + this.props.extraAriaContext), t;
                            }
                        }
                    },
                    {
                        key: "getPageElement",
                        value: function(e) {
                            var t = this.state.selected, r = this.props, n = r.pageClassName, i = r.pageLinkClassName, s = r.activeClassName, o = r.activeLinkClassName, c = r.extraAriaContext, p = r.pageLabelBuilder;
                            return a().createElement(l, {
                                key: e,
                                pageSelectedHandler: this.handlePageSelected.bind(null, e),
                                selected: t === e,
                                rel: this.getElementPageRel(e),
                                pageClassName: n,
                                pageLinkClassName: i,
                                activeClassName: s,
                                activeLinkClassName: o,
                                extraAriaContext: c,
                                href: this.getElementHref(e),
                                ariaLabel: this.ariaLabelBuilder(e),
                                page: e + 1,
                                pageLabelBuilder: p,
                                getEventListener: this.getEventListener
                            });
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            var e = this.props.renderOnZeroPageCount;
                            if (0 === this.props.pageCount && void 0 !== e) return e ? e(this.props) : e;
                            var t = this.props, r = t.disabledClassName, n = t.disabledLinkClassName, i = t.pageCount, s = t.className, o = t.containerClassName, l = t.previousLabel, c = t.previousClassName, p = t.previousLinkClassName, u = t.previousAriaLabel, d = t.prevRel, b = t.nextLabel, v = t.nextClassName, h = t.nextLinkClassName, m = t.nextAriaLabel, y = t.nextRel, C = this.state.selected, P = 0 === C, k = C === i - 1, x = "".concat(g(c)).concat(P ? " ".concat(g(r)) : ""), L = "".concat(g(v)).concat(k ? " ".concat(g(r)) : ""), N = "".concat(g(p)).concat(P ? " ".concat(g(n)) : ""), O = "".concat(g(h)).concat(k ? " ".concat(g(n)) : ""), R = P ? "true" : "false", E = k ? "true" : "false";
                            return a().createElement("ul", {
                                className: s || o,
                                role: "navigation",
                                "aria-label": "Pagination"
                            }, a().createElement("li", {
                                className: x
                            }, a().createElement("a", f({
                                className: N,
                                href: this.getElementHref(C - 1),
                                tabIndex: P ? "-1" : "0",
                                role: "button",
                                onKeyPress: this.handlePreviousPage,
                                "aria-disabled": R,
                                "aria-label": u,
                                rel: d
                            }, this.getEventListener(this.handlePreviousPage)), l)), this.pagination(), a().createElement("li", {
                                className: L
                            }, a().createElement("a", f({
                                className: O,
                                href: this.getElementHref(C + 1),
                                tabIndex: k ? "-1" : "0",
                                role: "button",
                                onKeyPress: this.handleNextPage,
                                "aria-disabled": E,
                                "aria-label": m,
                                rel: y
                            }, this.getEventListener(this.handleNextPage)), b)));
                        }
                    }
                ]) && b(t.prototype, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), o;
            }(e.Component);
            C(P, "propTypes", {
                pageCount: i().number.isRequired,
                pageRangeDisplayed: i().number,
                marginPagesDisplayed: i().number,
                previousLabel: i().node,
                previousAriaLabel: i().string,
                prevPageRel: i().string,
                prevRel: i().string,
                nextLabel: i().node,
                nextAriaLabel: i().string,
                nextPageRel: i().string,
                nextRel: i().string,
                breakLabel: i().oneOfType([
                    i().string,
                    i().node
                ]),
                breakAriaLabels: i().shape({
                    forward: i().string,
                    backward: i().string
                }),
                hrefBuilder: i().func,
                hrefAllControls: i().bool,
                onPageChange: i().func,
                onPageActive: i().func,
                onClick: i().func,
                initialPage: i().number,
                forcePage: i().number,
                disableInitialCallback: i().bool,
                containerClassName: i().string,
                className: i().string,
                pageClassName: i().string,
                pageLinkClassName: i().string,
                pageLabelBuilder: i().func,
                activeClassName: i().string,
                activeLinkClassName: i().string,
                previousClassName: i().string,
                nextClassName: i().string,
                previousLinkClassName: i().string,
                nextLinkClassName: i().string,
                disabledClassName: i().string,
                disabledLinkClassName: i().string,
                breakClassName: i().string,
                breakLinkClassName: i().string,
                extraAriaContext: i().string,
                ariaLabelBuilder: i().func,
                eventListener: i().string,
                renderOnZeroPageCount: i().func,
                selectedPageRel: i().string
            }), C(P, "defaultProps", {
                pageRangeDisplayed: 2,
                marginPagesDisplayed: 3,
                activeClassName: "selected",
                previousLabel: "Previous",
                previousClassName: "previous",
                previousAriaLabel: "Previous page",
                prevPageRel: "prev",
                prevRel: "prev",
                nextLabel: "Next",
                nextClassName: "next",
                nextAriaLabel: "Next page",
                nextPageRel: "next",
                nextRel: "next",
                breakLabel: "...",
                breakAriaLabels: {
                    forward: "Jump forward",
                    backward: "Jump backward"
                },
                disabledClassName: "disabled",
                disableInitialCallback: !1,
                pageLabelBuilder: function(e) {
                    return e;
                },
                eventListener: "onClick",
                renderOnZeroPageCount: void 0,
                selectedPageRel: "canonical",
                hrefAllControls: !1
            });
            const k = P;
        })(), n;
    })()); //# sourceMappingURL=react-paginate.js.map
}),
"[project]/09-auth/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryObserver.ts
__turbopack_context__.s([
    "QueryObserver",
    ()=>QueryObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@swc/helpers/esm/_class_private_method_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@swc/helpers/esm/_class_private_method_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
;
;
var _client, _currentQuery, _currentQueryInitialState, _currentResult, _currentResultState, _currentResultOptions, _currentThenable, _selectError, _selectFn, _selectResult, // This property keeps track of the last query with defined data.
// It will be used to pass the previous data and query to the placeholder function between renders.
_lastQueryWithDefinedData, _staleTimeoutId, _refetchIntervalId, _currentRefetchInterval, _trackedProps, _executeFetch, _updateStaleTimeout, _computeRefetchInterval, _updateRefetchInterval, _updateTimers, _clearStaleTimeout, _clearRefetchInterval, _updateQuery, _notify, _class;
;
;
;
;
;
;
var QueryObserver = (_client = /*#__PURE__*/ new WeakMap(), _currentQuery = /*#__PURE__*/ new WeakMap(), _currentQueryInitialState = /*#__PURE__*/ new WeakMap(), _currentResult = /*#__PURE__*/ new WeakMap(), _currentResultState = /*#__PURE__*/ new WeakMap(), _currentResultOptions = /*#__PURE__*/ new WeakMap(), _currentThenable = /*#__PURE__*/ new WeakMap(), _selectError = /*#__PURE__*/ new WeakMap(), _selectFn = /*#__PURE__*/ new WeakMap(), _selectResult = /*#__PURE__*/ new WeakMap(), _lastQueryWithDefinedData = /*#__PURE__*/ new WeakMap(), _staleTimeoutId = /*#__PURE__*/ new WeakMap(), _refetchIntervalId = /*#__PURE__*/ new WeakMap(), _currentRefetchInterval = /*#__PURE__*/ new WeakMap(), _trackedProps = /*#__PURE__*/ new WeakMap(), _executeFetch = /*#__PURE__*/ new WeakSet(), _updateStaleTimeout = /*#__PURE__*/ new WeakSet(), _computeRefetchInterval = /*#__PURE__*/ new WeakSet(), _updateRefetchInterval = /*#__PURE__*/ new WeakSet(), _updateTimers = /*#__PURE__*/ new WeakSet(), _clearStaleTimeout = /*#__PURE__*/ new WeakSet(), _clearRefetchInterval = /*#__PURE__*/ new WeakSet(), _updateQuery = /*#__PURE__*/ new WeakSet(), _notify = /*#__PURE__*/ new WeakSet(), _class = class extends __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    bindMethods() {
        this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
        if (this.listeners.size === 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery).addObserver(this);
            if (shouldFetchOnMount((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery), this.options)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _executeFetch, executeFetch).call(this);
            } else {
                this.updateResult();
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateTimers, updateTimers).call(this);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.destroy();
        }
    }
    shouldFetchOnReconnect() {
        return shouldFetchOn((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery), this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
        return shouldFetchOn((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery), this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
        this.listeners = /* @__PURE__ */ new Set();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clearStaleTimeout, clearStaleTimeout).call(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clearRefetchInterval, clearRefetchInterval).call(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery).removeObserver(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        const prevQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery);
        this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client).defaultQueryOptions(options);
        if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery)) !== "boolean") {
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateQuery, updateQuery).call(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery).setOptions(this.options);
        if (prevOptions._defaulted && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client).getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery),
                observer: this
            });
        }
        const mounted = this.hasListeners();
        if (mounted && shouldFetchOptionally((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery), prevQuery, this.options, prevOptions)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _executeFetch, executeFetch).call(this);
        }
        this.updateResult();
        if (mounted && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery) !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery)) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery)) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery)) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(prevOptions.staleTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery)))) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateStaleTimeout, updateStaleTimeout).call(this);
        }
        const nextRefetchInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _computeRefetchInterval, computeRefetchInterval).call(this);
        if (mounted && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery) !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery)) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery)) || nextRefetchInterval !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentRefetchInterval))) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateRefetchInterval, updateRefetchInterval).call(this, nextRefetchInterval);
        }
    }
    getOptimisticResult(options) {
        const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client).getQueryCache().build((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client), options);
        const result = this.createResult(query, options);
        if (shouldAssignObserverCurrentProperties(this, result)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult, result);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResultOptions, this.options);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResultState, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery).state);
        }
        return result;
    }
    getCurrentResult() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult);
    }
    trackResult(result, onPropTracked) {
        return new Proxy(result, {
            get: (target, key)=>{
                this.trackProp(key);
                onPropTracked === null || onPropTracked === void 0 ? void 0 : onPropTracked(key);
                if (key === "promise" && !this.options.experimental_prefetchInRender && (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentThenable).status === "pending") {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentThenable).reject(new Error("experimental_prefetchInRender feature flag is not enabled"));
                }
                return Reflect.get(target, key);
            }
        });
    }
    trackProp(key) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _trackedProps).add(key);
    }
    getCurrentQuery() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery);
    }
    refetch() {
        let { ...options } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return this.fetch({
            ...options
        });
    }
    fetchOptimistic(options) {
        const defaultedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client).defaultQueryOptions(options);
        const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client).getQueryCache().build((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client), defaultedOptions);
        return query.fetch().then(()=>this.createResult(query, defaultedOptions));
    }
    fetch(fetchOptions) {
        var _fetchOptions_cancelRefetch;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _executeFetch, executeFetch).call(this, {
            ...fetchOptions,
            cancelRefetch: (_fetchOptions_cancelRefetch = fetchOptions.cancelRefetch) !== null && _fetchOptions_cancelRefetch !== void 0 ? _fetchOptions_cancelRefetch : true
        }).then(()=>{
            this.updateResult();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult);
        });
    }
    createResult(query, options) {
        const prevQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery);
        const prevOptions = this.options;
        const prevResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult);
        const prevResultState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResultState);
        const prevResultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResultOptions);
        const queryChange = query !== prevQuery;
        const queryInitialState = queryChange ? query.state : (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQueryInitialState);
        const { state } = query;
        let newState = {
            ...state
        };
        let isPlaceholderData = false;
        let data;
        if (options._optimisticResults) {
            const mounted = this.hasListeners();
            const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
            const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
            if (fetchOnMount || fetchOptionally) {
                newState = {
                    ...newState,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchState"])(state.data, query.options)
                };
            }
            if (options._optimisticResults === "isRestoring") {
                newState.fetchStatus = "idle";
            }
        }
        let { error, errorUpdatedAt, status } = newState;
        data = newState.data;
        let skipSelect = false;
        if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
            let placeholderData;
            if ((prevResult === null || prevResult === void 0 ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions === null || prevResultOptions === void 0 ? void 0 : prevResultOptions.placeholderData)) {
                placeholderData = prevResult.data;
                skipSelect = true;
            } else {
                var _class_private_field_get;
                placeholderData = typeof options.placeholderData === "function" ? options.placeholderData((_class_private_field_get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastQueryWithDefinedData)) === null || _class_private_field_get === void 0 ? void 0 : _class_private_field_get.state.data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastQueryWithDefinedData)) : options.placeholderData;
            }
            if (placeholderData !== void 0) {
                status = "success";
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult === null || prevResult === void 0 ? void 0 : prevResult.data, placeholderData, options);
                isPlaceholderData = true;
            }
        }
        if (options.select && data !== void 0 && !skipSelect) {
            if (prevResult && data === (prevResultState === null || prevResultState === void 0 ? void 0 : prevResultState.data) && options.select === (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selectFn)) {
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selectResult);
            } else {
                try {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selectFn, options.select);
                    data = options.select(data);
                    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult === null || prevResult === void 0 ? void 0 : prevResult.data, data, options);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selectResult, data);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selectError, null);
                } catch (selectError) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selectError, selectError);
                }
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selectError)) {
            error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selectError);
            data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selectResult);
            errorUpdatedAt = Date.now();
            status = "error";
        }
        const isFetching = newState.fetchStatus === "fetching";
        const isPending = status === "pending";
        const isError = status === "error";
        const isLoading = isPending && isFetching;
        const hasData = data !== void 0;
        const result = {
            status,
            fetchStatus: newState.fetchStatus,
            isPending,
            isSuccess: status === "success",
            isError,
            isInitialLoading: isLoading,
            isLoading,
            data,
            dataUpdatedAt: newState.dataUpdatedAt,
            error,
            errorUpdatedAt,
            failureCount: newState.fetchFailureCount,
            failureReason: newState.fetchFailureReason,
            errorUpdateCount: newState.errorUpdateCount,
            isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
            isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
            isFetching,
            isRefetching: isFetching && !isPending,
            isLoadingError: isError && !hasData,
            isPaused: newState.fetchStatus === "paused",
            isPlaceholderData,
            isRefetchError: isError && hasData,
            isStale: isStale(query, options),
            refetch: this.refetch,
            promise: (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentThenable),
            isEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false
        };
        const nextResult = result;
        if (this.options.experimental_prefetchInRender) {
            const finalizeThenableIfPossible = (thenable)=>{
                if (nextResult.status === "error") {
                    thenable.reject(nextResult.error);
                } else if (nextResult.data !== void 0) {
                    thenable.resolve(nextResult.data);
                }
            };
            const recreateThenable = ()=>{
                const pending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentThenable, nextResult.promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])());
                finalizeThenableIfPossible(pending);
            };
            const prevThenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentThenable);
            switch(prevThenable.status){
                case "pending":
                    if (query.queryHash === prevQuery.queryHash) {
                        finalizeThenableIfPossible(prevThenable);
                    }
                    break;
                case "fulfilled":
                    if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
                        recreateThenable();
                    }
                    break;
                case "rejected":
                    if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
                        recreateThenable();
                    }
                    break;
            }
        }
        return nextResult;
    }
    updateResult() {
        const prevResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult);
        const nextResult = this.createResult((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery), this.options);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResultState, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery).state);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResultOptions, this.options);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResultState).data !== void 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastQueryWithDefinedData, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery));
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(nextResult, prevResult)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult, nextResult);
        const shouldNotifyListeners = ()=>{
            if (!prevResult) {
                return true;
            }
            const { notifyOnChangeProps } = this.options;
            const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
            if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _trackedProps).size) {
                return true;
            }
            const includedProps = new Set(notifyOnChangePropsValue !== null && notifyOnChangePropsValue !== void 0 ? notifyOnChangePropsValue : (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _trackedProps));
            if (this.options.throwOnError) {
                includedProps.add("error");
            }
            return Object.keys((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult)).some((key)=>{
                const typedKey = key;
                const changed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult)[typedKey] !== prevResult[typedKey];
                return changed && includedProps.has(typedKey);
            });
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notify, notify).call(this, {
            listeners: shouldNotifyListeners()
        });
    }
    onQueryUpdate() {
        this.updateResult();
        if (this.hasListeners()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateTimers, updateTimers).call(this);
        }
    }
    constructor(client, options){
        super(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _executeFetch), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateStaleTimeout), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _computeRefetchInterval), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateRefetchInterval), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateTimers), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clearStaleTimeout), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clearRefetchInterval), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateQuery), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _notify), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQueryInitialState, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResultState, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResultOptions, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentThenable, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selectError, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selectFn, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selectResult, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _lastQueryWithDefinedData, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _staleTimeoutId, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _refetchIntervalId, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentRefetchInterval, {
            writable: true,
            value: void 0
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _trackedProps, {
            writable: true,
            value: /* @__PURE__ */ new Set()
        });
        this.options = options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client, client);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _selectError, null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentThenable, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])());
        this.bindMethods();
        this.setOptions(options);
    }
}, _class);
function shouldLoadOnMount(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query) !== "static") {
        const value = typeof field === "function" ? field(query) : field;
        return value === "always" || value !== false && isStale(query, options);
    }
    return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(observer.getCurrentResult(), optimisticResult)) {
        return true;
    }
    return false;
}
;
function executeFetch(fetchOptions) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateQuery, updateQuery).call(this);
    let promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery).fetch(this.options, fetchOptions);
    if (!(fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.throwOnError)) {
        promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    }
    return promise;
}
function updateStaleTimeout() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clearStaleTimeout, clearStaleTimeout).call(this);
    const staleTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery));
    if (__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult).isStale || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(staleTime)) {
        return;
    }
    const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeUntilStale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult).dataUpdatedAt, staleTime);
    const timeout = time + 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _staleTimeoutId, setTimeout(()=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult).isStale) {
            this.updateResult();
        }
    }, timeout));
}
function computeRefetchInterval() {
    var _ref;
    return (_ref = typeof this.options.refetchInterval === "function" ? this.options.refetchInterval((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery)) : this.options.refetchInterval) !== null && _ref !== void 0 ? _ref : false;
}
function updateRefetchInterval(nextInterval) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _clearRefetchInterval, clearRefetchInterval).call(this);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentRefetchInterval, nextInterval);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery)) === false || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentRefetchInterval)) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentRefetchInterval) === 0) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _refetchIntervalId, setInterval(()=>{
        if (this.options.refetchIntervalInBackground || __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusManager"].isFocused()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _executeFetch, executeFetch).call(this);
        }
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentRefetchInterval)));
}
function updateTimers() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateStaleTimeout, updateStaleTimeout).call(this);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _updateRefetchInterval, updateRefetchInterval).call(this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_method_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _computeRefetchInterval, computeRefetchInterval).call(this));
}
function clearStaleTimeout() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _staleTimeoutId)) {
        clearTimeout((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _staleTimeoutId));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _staleTimeoutId, void 0);
    }
}
function clearRefetchInterval() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _refetchIntervalId)) {
        clearInterval((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _refetchIntervalId));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _refetchIntervalId, void 0);
    }
}
function updateQuery() {
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client).getQueryCache().build((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client), this.options);
    if (query === (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery)) {
        return;
    }
    const prevQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery, query);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQueryInitialState, query.state);
    if (this.hasListeners()) {
        prevQuery === null || prevQuery === void 0 ? void 0 : prevQuery.removeObserver(this);
        query.addObserver(this);
    }
}
function notify(notifyOptions) {
    __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
        if (notifyOptions.listeners) {
            this.listeners.forEach((listener)=>{
                listener((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentResult));
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _client).getQueryCache().notify({
            query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _currentQuery),
            type: "observerResultsUpdated"
        });
    });
}
 //# sourceMappingURL=queryObserver.js.map
}),
"[project]/09-auth/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
// src/QueryErrorResetBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function createValue() {
    let isReset = false;
    return {
        clearReset: ()=>{
            isReset = false;
        },
        reset: ()=>{
            isReset = true;
        },
        isReset: ()=>{
            return isReset;
        }
    };
}
var QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](createValue());
var useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = (param)=>{
    let { children } = param;
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "QueryErrorResetBoundary.useState": ()=>createValue()
    }["QueryErrorResetBoundary.useState"]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
 //# sourceMappingURL=QueryErrorResetBoundary.js.map
}),
"[project]/09-auth/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensurePreventErrorBoundaryRetry",
    ()=>ensurePreventErrorBoundaryRetry,
    "getHasError",
    ()=>getHasError,
    "useClearResetErrorBoundary",
    ()=>useClearResetErrorBoundary
]);
// src/errorBoundaryUtils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
"use client";
;
;
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary)=>{
    if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
        if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
        }
    }
};
var useClearResetErrorBoundary = (errorResetBoundary)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useClearResetErrorBoundary.useEffect": ()=>{
            errorResetBoundary.clearReset();
        }
    }["useClearResetErrorBoundary.useEffect"], [
        errorResetBoundary
    ]);
};
var getHasError = (param)=>{
    let { result, errorResetBoundary, throwOnError, query, suspense } = param;
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
 //# sourceMappingURL=errorBoundaryUtils.js.map
}),
"[project]/09-auth/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
// src/IsRestoringProvider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](false);
var useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
;
 //# sourceMappingURL=IsRestoringProvider.js.map
}),
"[project]/09-auth/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/suspense.ts
__turbopack_context__.s([
    "defaultThrowOnError",
    ()=>defaultThrowOnError,
    "ensureSuspenseTimers",
    ()=>ensureSuspenseTimers,
    "fetchOptimistic",
    ()=>fetchOptimistic,
    "shouldSuspend",
    ()=>shouldSuspend,
    "willFetch",
    ()=>willFetch
]);
var defaultThrowOnError = (_error, query)=>query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const clamp = (value)=>value === "static" ? value : Math.max(value !== null && value !== void 0 ? value : 1e3, 1e3);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return clamp(originalStaleTime(...args));
        } : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, 1e3);
        }
    }
};
var willFetch = (result, isRestoring)=>result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result)=>(defaultedOptions === null || defaultedOptions === void 0 ? void 0 : defaultedOptions.suspense) && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });
;
 //# sourceMappingURL=suspense.js.map
}),
"[project]/09-auth/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useBaseQuery(options, Observer, queryClient) {
    var _client_getDefaultOptions_queries__experimental_beforeQuery, _client_getDefaultOptions_queries, _client_getDefaultOptions_queries__experimental_afterQuery, _client_getDefaultOptions_queries1;
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof options !== "object" || Array.isArray(options)) {
            throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
        }
    }
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    (_client_getDefaultOptions_queries = client.getDefaultOptions().queries) === null || _client_getDefaultOptions_queries === void 0 ? void 0 : (_client_getDefaultOptions_queries__experimental_beforeQuery = _client_getDefaultOptions_queries._experimental_beforeQuery) === null || _client_getDefaultOptions_queries__experimental_beforeQuery === void 0 ? void 0 : _client_getDefaultOptions_queries__experimental_beforeQuery.call(_client_getDefaultOptions_queries, defaultedOptions);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) {
            console.error("[".concat(defaultedOptions.queryHash, "]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function"));
        }
    }
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useBaseQuery.useState": ()=>new Observer(client, defaultedOptions)
    }["useBaseQuery.useState"]);
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && options.subscribed !== false;
    __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useBaseQuery.useSyncExternalStore.useCallback": (onStoreChange)=>{
            const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
            observer.updateResult();
            return unsubscribe;
        }
    }["useBaseQuery.useSyncExternalStore.useCallback"], [
        observer,
        shouldSubscribe
    ]), {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"], {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useBaseQuery.useEffect": ()=>{
            observer.setOptions(defaultedOptions);
        }
    }["useBaseQuery.useEffect"], [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHasError"])({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query: client.getQueryCache().get(defaultedOptions.queryHash),
        suspense: defaultedOptions.suspense
    })) {
        throw result.error;
    }
    ;
    (_client_getDefaultOptions_queries1 = client.getDefaultOptions().queries) === null || _client_getDefaultOptions_queries1 === void 0 ? void 0 : (_client_getDefaultOptions_queries__experimental_afterQuery = _client_getDefaultOptions_queries1._experimental_afterQuery) === null || _client_getDefaultOptions_queries__experimental_afterQuery === void 0 ? void 0 : _client_getDefaultOptions_queries__experimental_afterQuery.call(_client_getDefaultOptions_queries1, defaultedOptions, result);
    if (defaultedOptions.experimental_prefetchInRender && !__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["willFetch"])(result, isRestoring)) {
        var // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        _client_getQueryCache_get;
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary) : (_client_getQueryCache_get = client.getQueryCache().get(defaultedOptions.queryHash)) === null || _client_getQueryCache_get === void 0 ? void 0 : _client_getQueryCache_get.promise;
        promise === null || promise === void 0 ? void 0 : promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
 //# sourceMappingURL=useBaseQuery.js.map
}),
"[project]/09-auth/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
// src/useQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)");
"use client";
;
;
function useQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useQuery.js.map
}),
"[project]/09-auth/node_modules/use-debounce/dist/index.module.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebounce",
    ()=>a,
    "useDebouncedCallback",
    ()=>c,
    "useThrottledCallback",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/09-auth/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function c(e, u, c, i) {
    var a = this, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(e), w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!0);
    p.current = e;
    var s = "undefined" != typeof window, x = !u && 0 !== u && s;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    u = +u || 0;
    var h = !!(c = c || {}).leading, y = !("trailing" in c) || !!c.trailing, F = "maxWait" in c, A = "debounceOnServer" in c && !!c.debounceOnServer, D = F ? Math.max(+c.maxWait || 0, u) : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return w.current = !0, function() {
            w.current = !1;
        };
    }, []);
    var T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var r = function(r) {
            var n = m.current, t = d.current;
            return m.current = d.current = null, f.current = r, l.current = l.current || r, g.current = p.current.apply(t, n);
        }, n = function(r, n) {
            x && cancelAnimationFrame(v.current), v.current = x ? requestAnimationFrame(r) : setTimeout(r, n);
        }, t = function(r) {
            if (!w.current) return !1;
            var n = r - o.current;
            return !o.current || n >= u || n < 0 || F && r - f.current >= D;
        }, e = function(n) {
            return v.current = null, y && m.current ? r(n) : (m.current = d.current = null, g.current);
        }, c = function r() {
            var c = Date.now();
            if (h && l.current === f.current && T(), t(c)) return e(c);
            if (w.current) {
                var i = u - (c - o.current), a = F ? Math.min(i, D - (c - f.current)) : i;
                n(r, a);
            }
        }, T = function() {
            i && i({});
        }, W = function() {
            if (s || A) {
                var e = Date.now(), i = t(e);
                if (m.current = [].slice.call(arguments), d.current = a, o.current = e, i) {
                    if (!v.current && w.current) return f.current = o.current, n(c, u), h ? r(o.current) : g.current;
                    if (F) return n(c, u), r(o.current);
                }
                return v.current || n(c, u), g.current;
            }
        };
        return W.cancel = function() {
            v.current && (x ? cancelAnimationFrame(v.current) : clearTimeout(v.current)), f.current = 0, m.current = o.current = d.current = v.current = null;
        }, W.isPending = function() {
            return !!v.current;
        }, W.flush = function() {
            return v.current ? e(Date.now()) : g.current;
        }, W;
    }, [
        h,
        F,
        u,
        D,
        y,
        x,
        s,
        A,
        i
    ]);
    return T;
}
function i(r, n) {
    return r === n;
}
function a(n, t, a) {
    var o = a && a.equalityFn || i, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(n), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({})[1], v = c((0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(r) {
        f.current = r, l({});
    }, [
        l
    ]), t, a, l), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$09$2d$auth$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(n);
    return o(m.current, n) || (v(n), m.current = n), [
        f.current,
        v
    ];
}
function o(r, n, t) {
    var e = void 0 === t ? {} : t, u = e.leading, i = e.trailing;
    return c(r, n, {
        maxWait: n,
        leading: void 0 === u || u,
        trailing: void 0 === i || i
    });
}
;
 //# sourceMappingURL=index.module.js.map
}),
]);

//# sourceMappingURL=3b903_e128c919._.js.map