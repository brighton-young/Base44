var kg = t => {
    throw TypeError(t)
};
var sd = (t, e, r) => e.has(t) || kg("Cannot " + r);
var C = (t, e, r) => (sd(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
    ce = (t, e, r) => e.has(t) ? kg("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r),
    G = (t, e, r, i) => (sd(t, e, "write to private field"), i ? i.call(t, r) : e.set(t, r), r),
    be = (t, e, r) => (sd(t, e, "access private method"), r);
var ml = (t, e, r, i) => ({
    set _(a) {
        G(t, e, a, r)
    },
    get _() {
        return C(t, e, i)
    }
});

function bb(t, e) {
    for (var r = 0; r < e.length; r++) {
        const i = e[r];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const a in i)
                if (a !== "default" && !(a in t)) {
                    const l = Object.getOwnPropertyDescriptor(i, a);
                    l && Object.defineProperty(t, a, l.get ? l : {
                        enumerable: !0,
                        get: () => i[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver(a => {
        for (const l of a)
            if (l.type === "childList")
                for (const u of l.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && i(u)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(a) {
        const l = {};
        return a.integrity && (l.integrity = a.integrity), a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? l.credentials = "include" : a.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
    }

    function i(a) {
        if (a.ep) return;
        a.ep = !0;
        const l = r(a);
        fetch(a.href, l)
    }
})();

function vv(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var id = {
        exports: {}
    },
    yo = {},
    od = {
        exports: {}
    },
    ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _g;

function Eb() {
    if (_g) return ke;
    _g = 1;
    var t = Symbol.for("react.element"),
        e = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        d = Symbol.for("react.forward_ref"),
        h = Symbol.for("react.suspense"),
        p = Symbol.for("react.memo"),
        g = Symbol.for("react.lazy"),
        y = Symbol.iterator;

    function x(O) {
        return O === null || typeof O != "object" ? null : (O = y && O[y] || O["@@iterator"], typeof O == "function" ? O : null)
    }
    var E = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        T = Object.assign,
        b = {};

    function S(O, U, xe) {
        this.props = O, this.context = U, this.refs = b, this.updater = xe || E
    }
    S.prototype.isReactComponent = {}, S.prototype.setState = function(O, U) {
        if (typeof O != "object" && typeof O != "function" && O != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, O, U, "setState")
    }, S.prototype.forceUpdate = function(O) {
        this.updater.enqueueForceUpdate(this, O, "forceUpdate")
    };

    function k() {}
    k.prototype = S.prototype;

    function j(O, U, xe) {
        this.props = O, this.context = U, this.refs = b, this.updater = xe || E
    }
    var R = j.prototype = new k;
    R.constructor = j, T(R, S.prototype), R.isPureReactComponent = !0;
    var M = Array.isArray,
        B = Object.prototype.hasOwnProperty,
        W = {
            current: null
        },
        Y = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function I(O, U, xe) {
        var Z, le = {},
            pe = null,
            Pe = null;
        if (U != null)
            for (Z in U.ref !== void 0 && (Pe = U.ref), U.key !== void 0 && (pe = "" + U.key), U) B.call(U, Z) && !Y.hasOwnProperty(Z) && (le[Z] = U[Z]);
        var Se = arguments.length - 2;
        if (Se === 1) le.children = xe;
        else if (1 < Se) {
            for (var ve = Array(Se), De = 0; De < Se; De++) ve[De] = arguments[De + 2];
            le.children = ve
        }
        if (O && O.defaultProps)
            for (Z in Se = O.defaultProps, Se) le[Z] === void 0 && (le[Z] = Se[Z]);
        return {
            $$typeof: t,
            type: O,
            key: pe,
            ref: Pe,
            props: le,
            _owner: W.current
        }
    }

    function J(O, U) {
        return {
            $$typeof: t,
            type: O.type,
            key: U,
            ref: O.ref,
            props: O.props,
            _owner: O._owner
        }
    }

    function de(O) {
        return typeof O == "object" && O !== null && O.$$typeof === t
    }

    function ue(O) {
        var U = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + O.replace(/[=:]/g, function(xe) {
            return U[xe]
        })
    }
    var Re = /\/+/g;

    function Ue(O, U) {
        return typeof O == "object" && O !== null && O.key != null ? ue("" + O.key) : U.toString(36)
    }

    function Te(O, U, xe, Z, le) {
        var pe = typeof O;
        (pe === "undefined" || pe === "boolean") && (O = null);
        var Pe = !1;
        if (O === null) Pe = !0;
        else switch (pe) {
            case "string":
            case "number":
                Pe = !0;
                break;
            case "object":
                switch (O.$$typeof) {
                    case t:
                    case e:
                        Pe = !0
                }
        }
        if (Pe) return Pe = O, le = le(Pe), O = Z === "" ? "." + Ue(Pe, 0) : Z, M(le) ? (xe = "", O != null && (xe = O.replace(Re, "$&/") + "/"), Te(le, U, xe, "", function(De) {
            return De
        })) : le != null && (de(le) && (le = J(le, xe + (!le.key || Pe && Pe.key === le.key ? "" : ("" + le.key).replace(Re, "$&/") + "/") + O)), U.push(le)), 1;
        if (Pe = 0, Z = Z === "" ? "." : Z + ":", M(O))
            for (var Se = 0; Se < O.length; Se++) {
                pe = O[Se];
                var ve = Z + Ue(pe, Se);
                Pe += Te(pe, U, xe, ve, le)
            } else if (ve = x(O), typeof ve == "function")
                for (O = ve.call(O), Se = 0; !(pe = O.next()).done;) pe = pe.value, ve = Z + Ue(pe, Se++), Pe += Te(pe, U, xe, ve, le);
            else if (pe === "object") throw U = String(O), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.");
        return Pe
    }

    function Ne(O, U, xe) {
        if (O == null) return O;
        var Z = [],
            le = 0;
        return Te(O, Z, "", "", function(pe) {
            return U.call(xe, pe, le++)
        }), Z
    }

    function Ae(O) {
        if (O._status === -1) {
            var U = O._result;
            U = U(), U.then(function(xe) {
                (O._status === 0 || O._status === -1) && (O._status = 1, O._result = xe)
            }, function(xe) {
                (O._status === 0 || O._status === -1) && (O._status = 2, O._result = xe)
            }), O._status === -1 && (O._status = 0, O._result = U)
        }
        if (O._status === 1) return O._result.default;
        throw O._result
    }
    var ge = {
            current: null
        },
        Q = {
            transition: null
        },
        oe = {
            ReactCurrentDispatcher: ge,
            ReactCurrentBatchConfig: Q,
            ReactCurrentOwner: W
        };

    function V() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return ke.Children = {
        map: Ne,
        forEach: function(O, U, xe) {
            Ne(O, function() {
                U.apply(this, arguments)
            }, xe)
        },
        count: function(O) {
            var U = 0;
            return Ne(O, function() {
                U++
            }), U
        },
        toArray: function(O) {
            return Ne(O, function(U) {
                return U
            }) || []
        },
        only: function(O) {
            if (!de(O)) throw Error("React.Children.only expected to receive a single React element child.");
            return O
        }
    }, ke.Component = S, ke.Fragment = r, ke.Profiler = a, ke.PureComponent = j, ke.StrictMode = i, ke.Suspense = h, ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe, ke.act = V, ke.cloneElement = function(O, U, xe) {
        if (O == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
        var Z = T({}, O.props),
            le = O.key,
            pe = O.ref,
            Pe = O._owner;
        if (U != null) {
            if (U.ref !== void 0 && (pe = U.ref, Pe = W.current), U.key !== void 0 && (le = "" + U.key), O.type && O.type.defaultProps) var Se = O.type.defaultProps;
            for (ve in U) B.call(U, ve) && !Y.hasOwnProperty(ve) && (Z[ve] = U[ve] === void 0 && Se !== void 0 ? Se[ve] : U[ve])
        }
        var ve = arguments.length - 2;
        if (ve === 1) Z.children = xe;
        else if (1 < ve) {
            Se = Array(ve);
            for (var De = 0; De < ve; De++) Se[De] = arguments[De + 2];
            Z.children = Se
        }
        return {
            $$typeof: t,
            type: O.type,
            key: le,
            ref: pe,
            props: Z,
            _owner: Pe
        }
    }, ke.createContext = function(O) {
        return O = {
            $$typeof: u,
            _currentValue: O,
            _currentValue2: O,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, O.Provider = {
            $$typeof: l,
            _context: O
        }, O.Consumer = O
    }, ke.createElement = I, ke.createFactory = function(O) {
        var U = I.bind(null, O);
        return U.type = O, U
    }, ke.createRef = function() {
        return {
            current: null
        }
    }, ke.forwardRef = function(O) {
        return {
            $$typeof: d,
            render: O
        }
    }, ke.isValidElement = de, ke.lazy = function(O) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: O
            },
            _init: Ae
        }
    }, ke.memo = function(O, U) {
        return {
            $$typeof: p,
            type: O,
            compare: U === void 0 ? null : U
        }
    }, ke.startTransition = function(O) {
        var U = Q.transition;
        Q.transition = {};
        try {
            O()
        } finally {
            Q.transition = U
        }
    }, ke.unstable_act = V, ke.useCallback = function(O, U) {
        return ge.current.useCallback(O, U)
    }, ke.useContext = function(O) {
        return ge.current.useContext(O)
    }, ke.useDebugValue = function() {}, ke.useDeferredValue = function(O) {
        return ge.current.useDeferredValue(O)
    }, ke.useEffect = function(O, U) {
        return ge.current.useEffect(O, U)
    }, ke.useId = function() {
        return ge.current.useId()
    }, ke.useImperativeHandle = function(O, U, xe) {
        return ge.current.useImperativeHandle(O, U, xe)
    }, ke.useInsertionEffect = function(O, U) {
        return ge.current.useInsertionEffect(O, U)
    }, ke.useLayoutEffect = function(O, U) {
        return ge.current.useLayoutEffect(O, U)
    }, ke.useMemo = function(O, U) {
        return ge.current.useMemo(O, U)
    }, ke.useReducer = function(O, U, xe) {
        return ge.current.useReducer(O, U, xe)
    }, ke.useRef = function(O) {
        return ge.current.useRef(O)
    }, ke.useState = function(O) {
        return ge.current.useState(O)
    }, ke.useSyncExternalStore = function(O, U, xe) {
        return ge.current.useSyncExternalStore(O, U, xe)
    }, ke.useTransition = function() {
        return ge.current.useTransition()
    }, ke.version = "18.3.1", ke
}
var Cg;

function Mf() {
    return Cg || (Cg = 1, od.exports = Eb()), od.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tg;

function kb() {
    if (Tg) return yo;
    Tg = 1;
    var t = Mf(),
        e = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function u(d, h, p) {
        var g, y = {},
            x = null,
            E = null;
        p !== void 0 && (x = "" + p), h.key !== void 0 && (x = "" + h.key), h.ref !== void 0 && (E = h.ref);
        for (g in h) i.call(h, g) && !l.hasOwnProperty(g) && (y[g] = h[g]);
        if (d && d.defaultProps)
            for (g in h = d.defaultProps, h) y[g] === void 0 && (y[g] = h[g]);
        return {
            $$typeof: e,
            type: d,
            key: x,
            ref: E,
            props: y,
            _owner: a.current
        }
    }
    return yo.Fragment = r, yo.jsx = u, yo.jsxs = u, yo
}
var Pg;

function _b() {
    return Pg || (Pg = 1, id.exports = kb()), id.exports
}
var v = _b(),
    F = Mf();
const Cb = vv(F),
    Tb = bb({
        __proto__: null,
        default: Cb
    }, [F]);
var gl = {},
    ad = {
        exports: {}
    },
    Dt = {},
    ld = {
        exports: {}
    },
    ud = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rg;

function Pb() {
    return Rg || (Rg = 1, (function(t) {
        function e(Q, oe) {
            var V = Q.length;
            Q.push(oe);
            e: for (; 0 < V;) {
                var O = V - 1 >>> 1,
                    U = Q[O];
                if (0 < a(U, oe)) Q[O] = oe, Q[V] = U, V = O;
                else break e
            }
        }

        function r(Q) {
            return Q.length === 0 ? null : Q[0]
        }

        function i(Q) {
            if (Q.length === 0) return null;
            var oe = Q[0],
                V = Q.pop();
            if (V !== oe) {
                Q[0] = V;
                e: for (var O = 0, U = Q.length, xe = U >>> 1; O < xe;) {
                    var Z = 2 * (O + 1) - 1,
                        le = Q[Z],
                        pe = Z + 1,
                        Pe = Q[pe];
                    if (0 > a(le, V)) pe < U && 0 > a(Pe, le) ? (Q[O] = Pe, Q[pe] = V, O = pe) : (Q[O] = le, Q[Z] = V, O = Z);
                    else if (pe < U && 0 > a(Pe, V)) Q[O] = Pe, Q[pe] = V, O = pe;
                    else break e
                }
            }
            return oe
        }

        function a(Q, oe) {
            var V = Q.sortIndex - oe.sortIndex;
            return V !== 0 ? V : Q.id - oe.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            t.unstable_now = function() {
                return l.now()
            }
        } else {
            var u = Date,
                d = u.now();
            t.unstable_now = function() {
                return u.now() - d
            }
        }
        var h = [],
            p = [],
            g = 1,
            y = null,
            x = 3,
            E = !1,
            T = !1,
            b = !1,
            S = typeof setTimeout == "function" ? setTimeout : null,
            k = typeof clearTimeout == "function" ? clearTimeout : null,
            j = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function R(Q) {
            for (var oe = r(p); oe !== null;) {
                if (oe.callback === null) i(p);
                else if (oe.startTime <= Q) i(p), oe.sortIndex = oe.expirationTime, e(h, oe);
                else break;
                oe = r(p)
            }
        }

        function M(Q) {
            if (b = !1, R(Q), !T)
                if (r(h) !== null) T = !0, Ae(B);
                else {
                    var oe = r(p);
                    oe !== null && ge(M, oe.startTime - Q)
                }
        }

        function B(Q, oe) {
            T = !1, b && (b = !1, k(I), I = -1), E = !0;
            var V = x;
            try {
                for (R(oe), y = r(h); y !== null && (!(y.expirationTime > oe) || Q && !ue());) {
                    var O = y.callback;
                    if (typeof O == "function") {
                        y.callback = null, x = y.priorityLevel;
                        var U = O(y.expirationTime <= oe);
                        oe = t.unstable_now(), typeof U == "function" ? y.callback = U : y === r(h) && i(h), R(oe)
                    } else i(h);
                    y = r(h)
                }
                if (y !== null) var xe = !0;
                else {
                    var Z = r(p);
                    Z !== null && ge(M, Z.startTime - oe), xe = !1
                }
                return xe
            } finally {
                y = null, x = V, E = !1
            }
        }
        var W = !1,
            Y = null,
            I = -1,
            J = 5,
            de = -1;

        function ue() {
            return !(t.unstable_now() - de < J)
        }

        function Re() {
            if (Y !== null) {
                var Q = t.unstable_now();
                de = Q;
                var oe = !0;
                try {
                    oe = Y(!0, Q)
                } finally {
                    oe ? Ue() : (W = !1, Y = null)
                }
            } else W = !1
        }
        var Ue;
        if (typeof j == "function") Ue = function() {
            j(Re)
        };
        else if (typeof MessageChannel < "u") {
            var Te = new MessageChannel,
                Ne = Te.port2;
            Te.port1.onmessage = Re, Ue = function() {
                Ne.postMessage(null)
            }
        } else Ue = function() {
            S(Re, 0)
        };

        function Ae(Q) {
            Y = Q, W || (W = !0, Ue())
        }

        function ge(Q, oe) {
            I = S(function() {
                Q(t.unstable_now())
            }, oe)
        }
        t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(Q) {
            Q.callback = null
        }, t.unstable_continueExecution = function() {
            T || E || (T = !0, Ae(B))
        }, t.unstable_forceFrameRate = function(Q) {
            0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < Q ? Math.floor(1e3 / Q) : 5
        }, t.unstable_getCurrentPriorityLevel = function() {
            return x
        }, t.unstable_getFirstCallbackNode = function() {
            return r(h)
        }, t.unstable_next = function(Q) {
            switch (x) {
                case 1:
                case 2:
                case 3:
                    var oe = 3;
                    break;
                default:
                    oe = x
            }
            var V = x;
            x = oe;
            try {
                return Q()
            } finally {
                x = V
            }
        }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(Q, oe) {
            switch (Q) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    Q = 3
            }
            var V = x;
            x = Q;
            try {
                return oe()
            } finally {
                x = V
            }
        }, t.unstable_scheduleCallback = function(Q, oe, V) {
            var O = t.unstable_now();
            switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? O + V : O) : V = O, Q) {
                case 1:
                    var U = -1;
                    break;
                case 2:
                    U = 250;
                    break;
                case 5:
                    U = 1073741823;
                    break;
                case 4:
                    U = 1e4;
                    break;
                default:
                    U = 5e3
            }
            return U = V + U, Q = {
                id: g++,
                callback: oe,
                priorityLevel: Q,
                startTime: V,
                expirationTime: U,
                sortIndex: -1
            }, V > O ? (Q.sortIndex = V, e(p, Q), r(h) === null && Q === r(p) && (b ? (k(I), I = -1) : b = !0, ge(M, V - O))) : (Q.sortIndex = U, e(h, Q), T || E || (T = !0, Ae(B))), Q
        }, t.unstable_shouldYield = ue, t.unstable_wrapCallback = function(Q) {
            var oe = x;
            return function() {
                var V = x;
                x = oe;
                try {
                    return Q.apply(this, arguments)
                } finally {
                    x = V
                }
            }
        }
    })(ud)), ud
}
var Ag;

function Rb() {
    return Ag || (Ag = 1, ld.exports = Pb()), ld.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mg;

function Ab() {
    if (Mg) return Dt;
    Mg = 1;
    var t = Mf(),
        e = Rb();

    function r(n) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) s += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set,
        a = {};

    function l(n, s) {
        u(n, s), u(n + "Capture", s)
    }

    function u(n, s) {
        for (a[n] = s, n = 0; n < s.length; n++) i.add(s[n])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        h = Object.prototype.hasOwnProperty,
        p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        g = {},
        y = {};

    function x(n) {
        return h.call(y, n) ? !0 : h.call(g, n) ? !1 : p.test(n) ? y[n] = !0 : (g[n] = !0, !1)
    }

    function E(n, s, o, c) {
        if (o !== null && o.type === 0) return !1;
        switch (typeof s) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return c ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
            default:
                return !1
        }
    }

    function T(n, s, o, c) {
        if (s === null || typeof s > "u" || E(n, s, o, c)) return !0;
        if (c) return !1;
        if (o !== null) switch (o.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
        }
        return !1
    }

    function b(n, s, o, c, f, m, w) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = c, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = n, this.type = s, this.sanitizeURL = m, this.removeEmptyString = w
    }
    var S = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
        S[n] = new b(n, 0, !1, n, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(n) {
        var s = n[0];
        S[s] = new b(s, 1, !1, n[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
        S[n] = new b(n, 2, !1, n.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
        S[n] = new b(n, 2, !1, n, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
        S[n] = new b(n, 3, !1, n.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
        S[n] = new b(n, 3, !0, n, null, !1, !1)
    }), ["capture", "download"].forEach(function(n) {
        S[n] = new b(n, 4, !1, n, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(n) {
        S[n] = new b(n, 6, !1, n, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(n) {
        S[n] = new b(n, 5, !1, n.toLowerCase(), null, !1, !1)
    });
    var k = /[\-:]([a-z])/g;

    function j(n) {
        return n[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
        var s = n.replace(k, j);
        S[s] = new b(s, 1, !1, n, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
        var s = n.replace(k, j);
        S[s] = new b(s, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
        var s = n.replace(k, j);
        S[s] = new b(s, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(n) {
        S[n] = new b(n, 1, !1, n.toLowerCase(), null, !1, !1)
    }), S.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
        S[n] = new b(n, 1, !1, n.toLowerCase(), null, !0, !0)
    });

    function R(n, s, o, c) {
        var f = S.hasOwnProperty(s) ? S[s] : null;
        (f !== null ? f.type !== 0 : c || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (T(s, o, f, c) && (o = null), c || f === null ? x(s) && (o === null ? n.removeAttribute(s) : n.setAttribute(s, "" + o)) : f.mustUseProperty ? n[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (s = f.attributeName, c = f.attributeNamespace, o === null ? n.removeAttribute(s) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, c ? n.setAttributeNS(c, s, o) : n.setAttribute(s, o))))
    }
    var M = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        B = Symbol.for("react.element"),
        W = Symbol.for("react.portal"),
        Y = Symbol.for("react.fragment"),
        I = Symbol.for("react.strict_mode"),
        J = Symbol.for("react.profiler"),
        de = Symbol.for("react.provider"),
        ue = Symbol.for("react.context"),
        Re = Symbol.for("react.forward_ref"),
        Ue = Symbol.for("react.suspense"),
        Te = Symbol.for("react.suspense_list"),
        Ne = Symbol.for("react.memo"),
        Ae = Symbol.for("react.lazy"),
        ge = Symbol.for("react.offscreen"),
        Q = Symbol.iterator;

    function oe(n) {
        return n === null || typeof n != "object" ? null : (n = Q && n[Q] || n["@@iterator"], typeof n == "function" ? n : null)
    }
    var V = Object.assign,
        O;

    function U(n) {
        if (O === void 0) try {
            throw Error()
        } catch (o) {
            var s = o.stack.trim().match(/\n( *(at )?)/);
            O = s && s[1] || ""
        }
        return `
` + O + n
    }
    var xe = !1;

    function Z(n, s) {
        if (!n || xe) return "";
        xe = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                        throw Error()
                    }, Object.defineProperty(s.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (z) {
                        var c = z
                    }
                    Reflect.construct(n, [], s)
                } else {
                    try {
                        s.call()
                    } catch (z) {
                        c = z
                    }
                    n.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (z) {
                    c = z
                }
                n()
            }
        } catch (z) {
            if (z && c && typeof z.stack == "string") {
                for (var f = z.stack.split(`
`), m = c.stack.split(`
`), w = f.length - 1, _ = m.length - 1; 1 <= w && 0 <= _ && f[w] !== m[_];) _--;
                for (; 1 <= w && 0 <= _; w--, _--)
                    if (f[w] !== m[_]) {
                        if (w !== 1 || _ !== 1)
                            do
                                if (w--, _--, 0 > _ || f[w] !== m[_]) {
                                    var P = `
` + f[w].replace(" at new ", " at ");
                                    return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), P
                                }
                        while (1 <= w && 0 <= _);
                        break
                    }
            }
        } finally {
            xe = !1, Error.prepareStackTrace = o
        }
        return (n = n ? n.displayName || n.name : "") ? U(n) : ""
    }

    function le(n) {
        switch (n.tag) {
            case 5:
                return U(n.type);
            case 16:
                return U("Lazy");
            case 13:
                return U("Suspense");
            case 19:
                return U("SuspenseList");
            case 0:
            case 2:
            case 15:
                return n = Z(n.type, !1), n;
            case 11:
                return n = Z(n.type.render, !1), n;
            case 1:
                return n = Z(n.type, !0), n;
            default:
                return ""
        }
    }

    function pe(n) {
        if (n == null) return null;
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
        switch (n) {
            case Y:
                return "Fragment";
            case W:
                return "Portal";
            case J:
                return "Profiler";
            case I:
                return "StrictMode";
            case Ue:
                return "Suspense";
            case Te:
                return "SuspenseList"
        }
        if (typeof n == "object") switch (n.$$typeof) {
            case ue:
                return (n.displayName || "Context") + ".Consumer";
            case de:
                return (n._context.displayName || "Context") + ".Provider";
            case Re:
                var s = n.render;
                return n = n.displayName, n || (n = s.displayName || s.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
            case Ne:
                return s = n.displayName || null, s !== null ? s : pe(n.type) || "Memo";
            case Ae:
                s = n._payload, n = n._init;
                try {
                    return pe(n(s))
                } catch {}
        }
        return null
    }

    function Pe(n) {
        var s = n.type;
        switch (n.tag) {
            case 24:
                return "Cache";
            case 9:
                return (s.displayName || "Context") + ".Consumer";
            case 10:
                return (s._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return n = s.render, n = n.displayName || n.name || "", s.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return s;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return pe(s);
            case 8:
                return s === I ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof s == "function") return s.displayName || s.name || null;
                if (typeof s == "string") return s
        }
        return null
    }

    function Se(n) {
        switch (typeof n) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return n;
            case "object":
                return n;
            default:
                return ""
        }
    }

    function ve(n) {
        var s = n.type;
        return (n = n.nodeName) && n.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }

    function De(n) {
        var s = ve(n) ? "checked" : "value",
            o = Object.getOwnPropertyDescriptor(n.constructor.prototype, s),
            c = "" + n[s];
        if (!n.hasOwnProperty(s) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var f = o.get,
                m = o.set;
            return Object.defineProperty(n, s, {
                configurable: !0,
                get: function() {
                    return f.call(this)
                },
                set: function(w) {
                    c = "" + w, m.call(this, w)
                }
            }), Object.defineProperty(n, s, {
                enumerable: o.enumerable
            }), {
                getValue: function() {
                    return c
                },
                setValue: function(w) {
                    c = "" + w
                },
                stopTracking: function() {
                    n._valueTracker = null, delete n[s]
                }
            }
        }
    }

    function ye(n) {
        n._valueTracker || (n._valueTracker = De(n))
    }

    function at(n) {
        if (!n) return !1;
        var s = n._valueTracker;
        if (!s) return !0;
        var o = s.getValue(),
            c = "";
        return n && (c = ve(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== o ? (s.setValue(n), !0) : !1
    }

    function kt(n) {
        if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
        try {
            return n.activeElement || n.body
        } catch {
            return n.body
        }
    }

    function Ut(n, s) {
        var o = s.checked;
        return V({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ? ? n._wrapperState.initialChecked
        })
    }

    function Ai(n, s) {
        var o = s.defaultValue == null ? "" : s.defaultValue,
            c = s.checked != null ? s.checked : s.defaultChecked;
        o = Se(s.value != null ? s.value : o), n._wrapperState = {
            initialChecked: c,
            initialValue: o,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }

    function oa(n, s) {
        s = s.checked, s != null && R(n, "checked", s, !1)
    }

    function jn(n, s) {
        oa(n, s);
        var o = Se(s.value),
            c = s.type;
        if (o != null) c === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
        else if (c === "submit" || c === "reset") {
            n.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? hu(n, s.type, o) : s.hasOwnProperty("defaultValue") && hu(n, s.type, Se(s.defaultValue)), s.checked == null && s.defaultChecked != null && (n.defaultChecked = !!s.defaultChecked)
    }

    function jh(n, s, o) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var c = s.type;
            if (!(c !== "submit" && c !== "reset" || s.value !== void 0 && s.value !== null)) return;
            s = "" + n._wrapperState.initialValue, o || s === n.value || (n.value = s), n.defaultValue = s
        }
        o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o)
    }

    function hu(n, s, o) {
        (s !== "number" || kt(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o))
    }
    var Mi = Array.isArray;

    function Cs(n, s, o, c) {
        if (n = n.options, s) {
            s = {};
            for (var f = 0; f < o.length; f++) s["$" + o[f]] = !0;
            for (o = 0; o < n.length; o++) f = s.hasOwnProperty("$" + n[o].value), n[o].selected !== f && (n[o].selected = f), f && c && (n[o].defaultSelected = !0)
        } else {
            for (o = "" + Se(o), s = null, f = 0; f < n.length; f++) {
                if (n[f].value === o) {
                    n[f].selected = !0, c && (n[f].defaultSelected = !0);
                    return
                }
                s !== null || n[f].disabled || (s = n[f])
            }
            s !== null && (s.selected = !0)
        }
    }

    function pu(n, s) {
        if (s.dangerouslySetInnerHTML != null) throw Error(r(91));
        return V({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + n._wrapperState.initialValue
        })
    }

    function Fh(n, s) {
        var o = s.value;
        if (o == null) {
            if (o = s.children, s = s.defaultValue, o != null) {
                if (s != null) throw Error(r(92));
                if (Mi(o)) {
                    if (1 < o.length) throw Error(r(93));
                    o = o[0]
                }
                s = o
            }
            s == null && (s = ""), o = s
        }
        n._wrapperState = {
            initialValue: Se(o)
        }
    }

    function Nh(n, s) {
        var o = Se(s.value),
            c = Se(s.defaultValue);
        o != null && (o = "" + o, o !== n.value && (n.value = o), s.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), c != null && (n.defaultValue = "" + c)
    }

    function Lh(n) {
        var s = n.textContent;
        s === n._wrapperState.initialValue && s !== "" && s !== null && (n.value = s)
    }

    function Dh(n) {
        switch (n) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function mu(n, s) {
        return n == null || n === "http://www.w3.org/1999/xhtml" ? Dh(s) : n === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n
    }
    var aa, Bh = (function(n) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, o, c, f) {
            MSApp.execUnsafeLocalFunction(function() {
                return n(s, o, c, f)
            })
        } : n
    })(function(n, s) {
        if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = s;
        else {
            for (aa = aa || document.createElement("div"), aa.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>", s = aa.firstChild; n.firstChild;) n.removeChild(n.firstChild);
            for (; s.firstChild;) n.appendChild(s.firstChild)
        }
    });

    function Oi(n, s) {
        if (s) {
            var o = n.firstChild;
            if (o && o === n.lastChild && o.nodeType === 3) {
                o.nodeValue = s;
                return
            }
        }
        n.textContent = s
    }
    var ji = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        C1 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ji).forEach(function(n) {
        C1.forEach(function(s) {
            s = s + n.charAt(0).toUpperCase() + n.substring(1), ji[s] = ji[n]
        })
    });

    function Ih(n, s, o) {
        return s == null || typeof s == "boolean" || s === "" ? "" : o || typeof s != "number" || s === 0 || ji.hasOwnProperty(n) && ji[n] ? ("" + s).trim() : s + "px"
    }

    function zh(n, s) {
        n = n.style;
        for (var o in s)
            if (s.hasOwnProperty(o)) {
                var c = o.indexOf("--") === 0,
                    f = Ih(o, s[o], c);
                o === "float" && (o = "cssFloat"), c ? n.setProperty(o, f) : n[o] = f
            }
    }
    var T1 = V({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function gu(n, s) {
        if (s) {
            if (T1[n] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(r(137, n));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null) throw Error(r(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) throw Error(r(61))
            }
            if (s.style != null && typeof s.style != "object") throw Error(r(62))
        }
    }

    function yu(n, s) {
        if (n.indexOf("-") === -1) return typeof s.is == "string";
        switch (n) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var vu = null;

    function wu(n) {
        return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n
    }
    var xu = null,
        Ts = null,
        Ps = null;

    function Vh(n) {
        if (n = to(n)) {
            if (typeof xu != "function") throw Error(r(280));
            var s = n.stateNode;
            s && (s = Aa(s), xu(n.stateNode, n.type, s))
        }
    }

    function Uh(n) {
        Ts ? Ps ? Ps.push(n) : Ps = [n] : Ts = n
    }

    function $h() {
        if (Ts) {
            var n = Ts,
                s = Ps;
            if (Ps = Ts = null, Vh(n), s)
                for (n = 0; n < s.length; n++) Vh(s[n])
        }
    }

    function Wh(n, s) {
        return n(s)
    }

    function qh() {}
    var Su = !1;

    function Hh(n, s, o) {
        if (Su) return n(s, o);
        Su = !0;
        try {
            return Wh(n, s, o)
        } finally {
            Su = !1, (Ts !== null || Ps !== null) && (qh(), $h())
        }
    }

    function Fi(n, s) {
        var o = n.stateNode;
        if (o === null) return null;
        var c = Aa(o);
        if (c === null) return null;
        o = c[s];
        e: switch (s) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (c = !c.disabled) || (n = n.type, c = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !c;
                break e;
            default:
                n = !1
        }
        if (n) return null;
        if (o && typeof o != "function") throw Error(r(231, s, typeof o));
        return o
    }
    var bu = !1;
    if (d) try {
        var Ni = {};
        Object.defineProperty(Ni, "passive", {
            get: function() {
                bu = !0
            }
        }), window.addEventListener("test", Ni, Ni), window.removeEventListener("test", Ni, Ni)
    } catch {
        bu = !1
    }

    function P1(n, s, o, c, f, m, w, _, P) {
        var z = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(o, z)
        } catch (q) {
            this.onError(q)
        }
    }
    var Li = !1,
        la = null,
        ua = !1,
        Eu = null,
        R1 = {
            onError: function(n) {
                Li = !0, la = n
            }
        };

    function A1(n, s, o, c, f, m, w, _, P) {
        Li = !1, la = null, P1.apply(R1, arguments)
    }

    function M1(n, s, o, c, f, m, w, _, P) {
        if (A1.apply(this, arguments), Li) {
            if (Li) {
                var z = la;
                Li = !1, la = null
            } else throw Error(r(198));
            ua || (ua = !0, Eu = z)
        }
    }

    function Vr(n) {
        var s = n,
            o = n;
        if (n.alternate)
            for (; s.return;) s = s.return;
        else {
            n = s;
            do s = n, (s.flags & 4098) !== 0 && (o = s.return), n = s.return; while (n)
        }
        return s.tag === 3 ? o : null
    }

    function Kh(n) {
        if (n.tag === 13) {
            var s = n.memoizedState;
            if (s === null && (n = n.alternate, n !== null && (s = n.memoizedState)), s !== null) return s.dehydrated
        }
        return null
    }

    function Qh(n) {
        if (Vr(n) !== n) throw Error(r(188))
    }

    function O1(n) {
        var s = n.alternate;
        if (!s) {
            if (s = Vr(n), s === null) throw Error(r(188));
            return s !== n ? null : n
        }
        for (var o = n, c = s;;) {
            var f = o.return;
            if (f === null) break;
            var m = f.alternate;
            if (m === null) {
                if (c = f.return, c !== null) {
                    o = c;
                    continue
                }
                break
            }
            if (f.child === m.child) {
                for (m = f.child; m;) {
                    if (m === o) return Qh(f), n;
                    if (m === c) return Qh(f), s;
                    m = m.sibling
                }
                throw Error(r(188))
            }
            if (o.return !== c.return) o = f, c = m;
            else {
                for (var w = !1, _ = f.child; _;) {
                    if (_ === o) {
                        w = !0, o = f, c = m;
                        break
                    }
                    if (_ === c) {
                        w = !0, c = f, o = m;
                        break
                    }
                    _ = _.sibling
                }
                if (!w) {
                    for (_ = m.child; _;) {
                        if (_ === o) {
                            w = !0, o = m, c = f;
                            break
                        }
                        if (_ === c) {
                            w = !0, c = m, o = f;
                            break
                        }
                        _ = _.sibling
                    }
                    if (!w) throw Error(r(189))
                }
            }
            if (o.alternate !== c) throw Error(r(190))
        }
        if (o.tag !== 3) throw Error(r(188));
        return o.stateNode.current === o ? n : s
    }

    function Gh(n) {
        return n = O1(n), n !== null ? Yh(n) : null
    }

    function Yh(n) {
        if (n.tag === 5 || n.tag === 6) return n;
        for (n = n.child; n !== null;) {
            var s = Yh(n);
            if (s !== null) return s;
            n = n.sibling
        }
        return null
    }
    var Xh = e.unstable_scheduleCallback,
        Jh = e.unstable_cancelCallback,
        j1 = e.unstable_shouldYield,
        F1 = e.unstable_requestPaint,
        Ye = e.unstable_now,
        N1 = e.unstable_getCurrentPriorityLevel,
        ku = e.unstable_ImmediatePriority,
        Zh = e.unstable_UserBlockingPriority,
        ca = e.unstable_NormalPriority,
        L1 = e.unstable_LowPriority,
        ep = e.unstable_IdlePriority,
        da = null,
        xn = null;

    function D1(n) {
        if (xn && typeof xn.onCommitFiberRoot == "function") try {
            xn.onCommitFiberRoot(da, n, void 0, (n.current.flags & 128) === 128)
        } catch {}
    }
    var ln = Math.clz32 ? Math.clz32 : z1,
        B1 = Math.log,
        I1 = Math.LN2;

    function z1(n) {
        return n >>>= 0, n === 0 ? 32 : 31 - (B1(n) / I1 | 0) | 0
    }
    var fa = 64,
        ha = 4194304;

    function Di(n) {
        switch (n & -n) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return n & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return n & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return n
        }
    }

    function pa(n, s) {
        var o = n.pendingLanes;
        if (o === 0) return 0;
        var c = 0,
            f = n.suspendedLanes,
            m = n.pingedLanes,
            w = o & 268435455;
        if (w !== 0) {
            var _ = w & ~f;
            _ !== 0 ? c = Di(_) : (m &= w, m !== 0 && (c = Di(m)))
        } else w = o & ~f, w !== 0 ? c = Di(w) : m !== 0 && (c = Di(m));
        if (c === 0) return 0;
        if (s !== 0 && s !== c && (s & f) === 0 && (f = c & -c, m = s & -s, f >= m || f === 16 && (m & 4194240) !== 0)) return s;
        if ((c & 4) !== 0 && (c |= o & 16), s = n.entangledLanes, s !== 0)
            for (n = n.entanglements, s &= c; 0 < s;) o = 31 - ln(s), f = 1 << o, c |= n[o], s &= ~f;
        return c
    }

    function V1(n, s) {
        switch (n) {
            case 1:
            case 2:
            case 4:
                return s + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return s + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function U1(n, s) {
        for (var o = n.suspendedLanes, c = n.pingedLanes, f = n.expirationTimes, m = n.pendingLanes; 0 < m;) {
            var w = 31 - ln(m),
                _ = 1 << w,
                P = f[w];
            P === -1 ? ((_ & o) === 0 || (_ & c) !== 0) && (f[w] = V1(_, s)) : P <= s && (n.expiredLanes |= _), m &= ~_
        }
    }

    function _u(n) {
        return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    }

    function tp() {
        var n = fa;
        return fa <<= 1, (fa & 4194240) === 0 && (fa = 64), n
    }

    function Cu(n) {
        for (var s = [], o = 0; 31 > o; o++) s.push(n);
        return s
    }

    function Bi(n, s, o) {
        n.pendingLanes |= s, s !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, s = 31 - ln(s), n[s] = o
    }

    function $1(n, s) {
        var o = n.pendingLanes & ~s;
        n.pendingLanes = s, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= s, n.mutableReadLanes &= s, n.entangledLanes &= s, s = n.entanglements;
        var c = n.eventTimes;
        for (n = n.expirationTimes; 0 < o;) {
            var f = 31 - ln(o),
                m = 1 << f;
            s[f] = 0, c[f] = -1, n[f] = -1, o &= ~m
        }
    }

    function Tu(n, s) {
        var o = n.entangledLanes |= s;
        for (n = n.entanglements; o;) {
            var c = 31 - ln(o),
                f = 1 << c;
            f & s | n[c] & s && (n[c] |= s), o &= ~f
        }
    }
    var Fe = 0;

    function np(n) {
        return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var rp, Pu, sp, ip, op, Ru = !1,
        ma = [],
        er = null,
        tr = null,
        nr = null,
        Ii = new Map,
        zi = new Map,
        rr = [],
        W1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function ap(n, s) {
        switch (n) {
            case "focusin":
            case "focusout":
                er = null;
                break;
            case "dragenter":
            case "dragleave":
                tr = null;
                break;
            case "mouseover":
            case "mouseout":
                nr = null;
                break;
            case "pointerover":
            case "pointerout":
                Ii.delete(s.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                zi.delete(s.pointerId)
        }
    }

    function Vi(n, s, o, c, f, m) {
        return n === null || n.nativeEvent !== m ? (n = {
            blockedOn: s,
            domEventName: o,
            eventSystemFlags: c,
            nativeEvent: m,
            targetContainers: [f]
        }, s !== null && (s = to(s), s !== null && Pu(s)), n) : (n.eventSystemFlags |= c, s = n.targetContainers, f !== null && s.indexOf(f) === -1 && s.push(f), n)
    }

    function q1(n, s, o, c, f) {
        switch (s) {
            case "focusin":
                return er = Vi(er, n, s, o, c, f), !0;
            case "dragenter":
                return tr = Vi(tr, n, s, o, c, f), !0;
            case "mouseover":
                return nr = Vi(nr, n, s, o, c, f), !0;
            case "pointerover":
                var m = f.pointerId;
                return Ii.set(m, Vi(Ii.get(m) || null, n, s, o, c, f)), !0;
            case "gotpointercapture":
                return m = f.pointerId, zi.set(m, Vi(zi.get(m) || null, n, s, o, c, f)), !0
        }
        return !1
    }

    function lp(n) {
        var s = Ur(n.target);
        if (s !== null) {
            var o = Vr(s);
            if (o !== null) {
                if (s = o.tag, s === 13) {
                    if (s = Kh(o), s !== null) {
                        n.blockedOn = s, op(n.priority, function() {
                            sp(o)
                        });
                        return
                    }
                } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        n.blockedOn = null
    }

    function ga(n) {
        if (n.blockedOn !== null) return !1;
        for (var s = n.targetContainers; 0 < s.length;) {
            var o = Mu(n.domEventName, n.eventSystemFlags, s[0], n.nativeEvent);
            if (o === null) {
                o = n.nativeEvent;
                var c = new o.constructor(o.type, o);
                vu = c, o.target.dispatchEvent(c), vu = null
            } else return s = to(o), s !== null && Pu(s), n.blockedOn = o, !1;
            s.shift()
        }
        return !0
    }

    function up(n, s, o) {
        ga(n) && o.delete(s)
    }

    function H1() {
        Ru = !1, er !== null && ga(er) && (er = null), tr !== null && ga(tr) && (tr = null), nr !== null && ga(nr) && (nr = null), Ii.forEach(up), zi.forEach(up)
    }

    function Ui(n, s) {
        n.blockedOn === s && (n.blockedOn = null, Ru || (Ru = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, H1)))
    }

    function $i(n) {
        function s(f) {
            return Ui(f, n)
        }
        if (0 < ma.length) {
            Ui(ma[0], n);
            for (var o = 1; o < ma.length; o++) {
                var c = ma[o];
                c.blockedOn === n && (c.blockedOn = null)
            }
        }
        for (er !== null && Ui(er, n), tr !== null && Ui(tr, n), nr !== null && Ui(nr, n), Ii.forEach(s), zi.forEach(s), o = 0; o < rr.length; o++) c = rr[o], c.blockedOn === n && (c.blockedOn = null);
        for (; 0 < rr.length && (o = rr[0], o.blockedOn === null);) lp(o), o.blockedOn === null && rr.shift()
    }
    var Rs = M.ReactCurrentBatchConfig,
        ya = !0;

    function K1(n, s, o, c) {
        var f = Fe,
            m = Rs.transition;
        Rs.transition = null;
        try {
            Fe = 1, Au(n, s, o, c)
        } finally {
            Fe = f, Rs.transition = m
        }
    }

    function Q1(n, s, o, c) {
        var f = Fe,
            m = Rs.transition;
        Rs.transition = null;
        try {
            Fe = 4, Au(n, s, o, c)
        } finally {
            Fe = f, Rs.transition = m
        }
    }

    function Au(n, s, o, c) {
        if (ya) {
            var f = Mu(n, s, o, c);
            if (f === null) Qu(n, s, c, va, o), ap(n, c);
            else if (q1(f, n, s, o, c)) c.stopPropagation();
            else if (ap(n, c), s & 4 && -1 < W1.indexOf(n)) {
                for (; f !== null;) {
                    var m = to(f);
                    if (m !== null && rp(m), m = Mu(n, s, o, c), m === null && Qu(n, s, c, va, o), m === f) break;
                    f = m
                }
                f !== null && c.stopPropagation()
            } else Qu(n, s, c, null, o)
        }
    }
    var va = null;

    function Mu(n, s, o, c) {
        if (va = null, n = wu(c), n = Ur(n), n !== null)
            if (s = Vr(n), s === null) n = null;
            else if (o = s.tag, o === 13) {
            if (n = Kh(s), n !== null) return n;
            n = null
        } else if (o === 3) {
            if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
            n = null
        } else s !== n && (n = null);
        return va = n, null
    }

    function cp(n) {
        switch (n) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (N1()) {
                    case ku:
                        return 1;
                    case Zh:
                        return 4;
                    case ca:
                    case L1:
                        return 16;
                    case ep:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var sr = null,
        Ou = null,
        wa = null;

    function dp() {
        if (wa) return wa;
        var n, s = Ou,
            o = s.length,
            c, f = "value" in sr ? sr.value : sr.textContent,
            m = f.length;
        for (n = 0; n < o && s[n] === f[n]; n++);
        var w = o - n;
        for (c = 1; c <= w && s[o - c] === f[m - c]; c++);
        return wa = f.slice(n, 1 < c ? 1 - c : void 0)
    }

    function xa(n) {
        var s = n.keyCode;
        return "charCode" in n ? (n = n.charCode, n === 0 && s === 13 && (n = 13)) : n = s, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0
    }

    function Sa() {
        return !0
    }

    function fp() {
        return !1
    }

    function $t(n) {
        function s(o, c, f, m, w) {
            this._reactName = o, this._targetInst = f, this.type = c, this.nativeEvent = m, this.target = w, this.currentTarget = null;
            for (var _ in n) n.hasOwnProperty(_) && (o = n[_], this[_] = o ? o(m) : m[_]);
            return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Sa : fp, this.isPropagationStopped = fp, this
        }
        return V(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Sa)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Sa)
            },
            persist: function() {},
            isPersistent: Sa
        }), s
    }
    var As = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(n) {
                return n.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        ju = $t(As),
        Wi = V({}, As, {
            view: 0,
            detail: 0
        }),
        G1 = $t(Wi),
        Fu, Nu, qi, ba = V({}, Wi, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Du,
            button: 0,
            buttons: 0,
            relatedTarget: function(n) {
                return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget
            },
            movementX: function(n) {
                return "movementX" in n ? n.movementX : (n !== qi && (qi && n.type === "mousemove" ? (Fu = n.screenX - qi.screenX, Nu = n.screenY - qi.screenY) : Nu = Fu = 0, qi = n), Fu)
            },
            movementY: function(n) {
                return "movementY" in n ? n.movementY : Nu
            }
        }),
        hp = $t(ba),
        Y1 = V({}, ba, {
            dataTransfer: 0
        }),
        X1 = $t(Y1),
        J1 = V({}, Wi, {
            relatedTarget: 0
        }),
        Lu = $t(J1),
        Z1 = V({}, As, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        eS = $t(Z1),
        tS = V({}, As, {
            clipboardData: function(n) {
                return "clipboardData" in n ? n.clipboardData : window.clipboardData
            }
        }),
        nS = $t(tS),
        rS = V({}, As, {
            data: 0
        }),
        pp = $t(rS),
        sS = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        iS = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        oS = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function aS(n) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(n) : (n = oS[n]) ? !!s[n] : !1
    }

    function Du() {
        return aS
    }
    var lS = V({}, Wi, {
            key: function(n) {
                if (n.key) {
                    var s = sS[n.key] || n.key;
                    if (s !== "Unidentified") return s
                }
                return n.type === "keypress" ? (n = xa(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? iS[n.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Du,
            charCode: function(n) {
                return n.type === "keypress" ? xa(n) : 0
            },
            keyCode: function(n) {
                return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
            },
            which: function(n) {
                return n.type === "keypress" ? xa(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
            }
        }),
        uS = $t(lS),
        cS = V({}, ba, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        mp = $t(cS),
        dS = V({}, Wi, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Du
        }),
        fS = $t(dS),
        hS = V({}, As, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        pS = $t(hS),
        mS = V({}, ba, {
            deltaX: function(n) {
                return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0
            },
            deltaY: function(n) {
                return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        gS = $t(mS),
        yS = [9, 13, 27, 32],
        Bu = d && "CompositionEvent" in window,
        Hi = null;
    d && "documentMode" in document && (Hi = document.documentMode);
    var vS = d && "TextEvent" in window && !Hi,
        gp = d && (!Bu || Hi && 8 < Hi && 11 >= Hi),
        yp = " ",
        vp = !1;

    function wp(n, s) {
        switch (n) {
            case "keyup":
                return yS.indexOf(s.keyCode) !== -1;
            case "keydown":
                return s.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function xp(n) {
        return n = n.detail, typeof n == "object" && "data" in n ? n.data : null
    }
    var Ms = !1;

    function wS(n, s) {
        switch (n) {
            case "compositionend":
                return xp(s);
            case "keypress":
                return s.which !== 32 ? null : (vp = !0, yp);
            case "textInput":
                return n = s.data, n === yp && vp ? null : n;
            default:
                return null
        }
    }

    function xS(n, s) {
        if (Ms) return n === "compositionend" || !Bu && wp(n, s) ? (n = dp(), wa = Ou = sr = null, Ms = !1, n) : null;
        switch (n) {
            case "paste":
                return null;
            case "keypress":
                if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                    if (s.char && 1 < s.char.length) return s.char;
                    if (s.which) return String.fromCharCode(s.which)
                }
                return null;
            case "compositionend":
                return gp && s.locale !== "ko" ? null : s.data;
            default:
                return null
        }
    }
    var SS = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Sp(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s === "input" ? !!SS[n.type] : s === "textarea"
    }

    function bp(n, s, o, c) {
        Uh(c), s = Ta(s, "onChange"), 0 < s.length && (o = new ju("onChange", "change", null, o, c), n.push({
            event: o,
            listeners: s
        }))
    }
    var Ki = null,
        Qi = null;

    function bS(n) {
        zp(n, 0)
    }

    function Ea(n) {
        var s = Ls(n);
        if (at(s)) return n
    }

    function ES(n, s) {
        if (n === "change") return s
    }
    var Ep = !1;
    if (d) {
        var Iu;
        if (d) {
            var zu = "oninput" in document;
            if (!zu) {
                var kp = document.createElement("div");
                kp.setAttribute("oninput", "return;"), zu = typeof kp.oninput == "function"
            }
            Iu = zu
        } else Iu = !1;
        Ep = Iu && (!document.documentMode || 9 < document.documentMode)
    }

    function _p() {
        Ki && (Ki.detachEvent("onpropertychange", Cp), Qi = Ki = null)
    }

    function Cp(n) {
        if (n.propertyName === "value" && Ea(Qi)) {
            var s = [];
            bp(s, Qi, n, wu(n)), Hh(bS, s)
        }
    }

    function kS(n, s, o) {
        n === "focusin" ? (_p(), Ki = s, Qi = o, Ki.attachEvent("onpropertychange", Cp)) : n === "focusout" && _p()
    }

    function _S(n) {
        if (n === "selectionchange" || n === "keyup" || n === "keydown") return Ea(Qi)
    }

    function CS(n, s) {
        if (n === "click") return Ea(s)
    }

    function TS(n, s) {
        if (n === "input" || n === "change") return Ea(s)
    }

    function PS(n, s) {
        return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s
    }
    var un = typeof Object.is == "function" ? Object.is : PS;

    function Gi(n, s) {
        if (un(n, s)) return !0;
        if (typeof n != "object" || n === null || typeof s != "object" || s === null) return !1;
        var o = Object.keys(n),
            c = Object.keys(s);
        if (o.length !== c.length) return !1;
        for (c = 0; c < o.length; c++) {
            var f = o[c];
            if (!h.call(s, f) || !un(n[f], s[f])) return !1
        }
        return !0
    }

    function Tp(n) {
        for (; n && n.firstChild;) n = n.firstChild;
        return n
    }

    function Pp(n, s) {
        var o = Tp(n);
        n = 0;
        for (var c; o;) {
            if (o.nodeType === 3) {
                if (c = n + o.textContent.length, n <= s && c >= s) return {
                    node: o,
                    offset: s - n
                };
                n = c
            }
            e: {
                for (; o;) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = Tp(o)
        }
    }

    function Rp(n, s) {
        return n && s ? n === s ? !0 : n && n.nodeType === 3 ? !1 : s && s.nodeType === 3 ? Rp(n, s.parentNode) : "contains" in n ? n.contains(s) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(s) & 16) : !1 : !1
    }

    function Ap() {
        for (var n = window, s = kt(); s instanceof n.HTMLIFrameElement;) {
            try {
                var o = typeof s.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o) n = s.contentWindow;
            else break;
            s = kt(n.document)
        }
        return s
    }

    function Vu(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s && (s === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || s === "textarea" || n.contentEditable === "true")
    }

    function RS(n) {
        var s = Ap(),
            o = n.focusedElem,
            c = n.selectionRange;
        if (s !== o && o && o.ownerDocument && Rp(o.ownerDocument.documentElement, o)) {
            if (c !== null && Vu(o)) {
                if (s = c.start, n = c.end, n === void 0 && (n = s), "selectionStart" in o) o.selectionStart = s, o.selectionEnd = Math.min(n, o.value.length);
                else if (n = (s = o.ownerDocument || document) && s.defaultView || window, n.getSelection) {
                    n = n.getSelection();
                    var f = o.textContent.length,
                        m = Math.min(c.start, f);
                    c = c.end === void 0 ? m : Math.min(c.end, f), !n.extend && m > c && (f = c, c = m, m = f), f = Pp(o, m);
                    var w = Pp(o, c);
                    f && w && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== w.node || n.focusOffset !== w.offset) && (s = s.createRange(), s.setStart(f.node, f.offset), n.removeAllRanges(), m > c ? (n.addRange(s), n.extend(w.node, w.offset)) : (s.setEnd(w.node, w.offset), n.addRange(s)))
                }
            }
            for (s = [], n = o; n = n.parentNode;) n.nodeType === 1 && s.push({
                element: n,
                left: n.scrollLeft,
                top: n.scrollTop
            });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < s.length; o++) n = s[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top
        }
    }
    var AS = d && "documentMode" in document && 11 >= document.documentMode,
        Os = null,
        Uu = null,
        Yi = null,
        $u = !1;

    function Mp(n, s, o) {
        var c = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        $u || Os == null || Os !== kt(c) || (c = Os, "selectionStart" in c && Vu(c) ? c = {
            start: c.selectionStart,
            end: c.selectionEnd
        } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
            anchorNode: c.anchorNode,
            anchorOffset: c.anchorOffset,
            focusNode: c.focusNode,
            focusOffset: c.focusOffset
        }), Yi && Gi(Yi, c) || (Yi = c, c = Ta(Uu, "onSelect"), 0 < c.length && (s = new ju("onSelect", "select", null, s, o), n.push({
            event: s,
            listeners: c
        }), s.target = Os)))
    }

    function ka(n, s) {
        var o = {};
        return o[n.toLowerCase()] = s.toLowerCase(), o["Webkit" + n] = "webkit" + s, o["Moz" + n] = "moz" + s, o
    }
    var js = {
            animationend: ka("Animation", "AnimationEnd"),
            animationiteration: ka("Animation", "AnimationIteration"),
            animationstart: ka("Animation", "AnimationStart"),
            transitionend: ka("Transition", "TransitionEnd")
        },
        Wu = {},
        Op = {};
    d && (Op = document.createElement("div").style, "AnimationEvent" in window || (delete js.animationend.animation, delete js.animationiteration.animation, delete js.animationstart.animation), "TransitionEvent" in window || delete js.transitionend.transition);

    function _a(n) {
        if (Wu[n]) return Wu[n];
        if (!js[n]) return n;
        var s = js[n],
            o;
        for (o in s)
            if (s.hasOwnProperty(o) && o in Op) return Wu[n] = s[o];
        return n
    }
    var jp = _a("animationend"),
        Fp = _a("animationiteration"),
        Np = _a("animationstart"),
        Lp = _a("transitionend"),
        Dp = new Map,
        Bp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function ir(n, s) {
        Dp.set(n, s), l(s, [n])
    }
    for (var qu = 0; qu < Bp.length; qu++) {
        var Hu = Bp[qu],
            MS = Hu.toLowerCase(),
            OS = Hu[0].toUpperCase() + Hu.slice(1);
        ir(MS, "on" + OS)
    }
    ir(jp, "onAnimationEnd"), ir(Fp, "onAnimationIteration"), ir(Np, "onAnimationStart"), ir("dblclick", "onDoubleClick"), ir("focusin", "onFocus"), ir("focusout", "onBlur"), ir(Lp, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Xi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        jS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));

    function Ip(n, s, o) {
        var c = n.type || "unknown-event";
        n.currentTarget = o, M1(c, s, void 0, n), n.currentTarget = null
    }

    function zp(n, s) {
        s = (s & 4) !== 0;
        for (var o = 0; o < n.length; o++) {
            var c = n[o],
                f = c.event;
            c = c.listeners;
            e: {
                var m = void 0;
                if (s)
                    for (var w = c.length - 1; 0 <= w; w--) {
                        var _ = c[w],
                            P = _.instance,
                            z = _.currentTarget;
                        if (_ = _.listener, P !== m && f.isPropagationStopped()) break e;
                        Ip(f, _, z), m = P
                    } else
                        for (w = 0; w < c.length; w++) {
                            if (_ = c[w], P = _.instance, z = _.currentTarget, _ = _.listener, P !== m && f.isPropagationStopped()) break e;
                            Ip(f, _, z), m = P
                        }
            }
        }
        if (ua) throw n = Eu, ua = !1, Eu = null, n
    }

    function Ie(n, s) {
        var o = s[ec];
        o === void 0 && (o = s[ec] = new Set);
        var c = n + "__bubble";
        o.has(c) || (Vp(s, n, 2, !1), o.add(c))
    }

    function Ku(n, s, o) {
        var c = 0;
        s && (c |= 4), Vp(o, n, c, s)
    }
    var Ca = "_reactListening" + Math.random().toString(36).slice(2);

    function Ji(n) {
        if (!n[Ca]) {
            n[Ca] = !0, i.forEach(function(o) {
                o !== "selectionchange" && (jS.has(o) || Ku(o, !1, n), Ku(o, !0, n))
            });
            var s = n.nodeType === 9 ? n : n.ownerDocument;
            s === null || s[Ca] || (s[Ca] = !0, Ku("selectionchange", !1, s))
        }
    }

    function Vp(n, s, o, c) {
        switch (cp(s)) {
            case 1:
                var f = K1;
                break;
            case 4:
                f = Q1;
                break;
            default:
                f = Au
        }
        o = f.bind(null, s, o, n), f = void 0, !bu || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (f = !0), c ? f !== void 0 ? n.addEventListener(s, o, {
            capture: !0,
            passive: f
        }) : n.addEventListener(s, o, !0) : f !== void 0 ? n.addEventListener(s, o, {
            passive: f
        }) : n.addEventListener(s, o, !1)
    }

    function Qu(n, s, o, c, f) {
        var m = c;
        if ((s & 1) === 0 && (s & 2) === 0 && c !== null) e: for (;;) {
            if (c === null) return;
            var w = c.tag;
            if (w === 3 || w === 4) {
                var _ = c.stateNode.containerInfo;
                if (_ === f || _.nodeType === 8 && _.parentNode === f) break;
                if (w === 4)
                    for (w = c.return; w !== null;) {
                        var P = w.tag;
                        if ((P === 3 || P === 4) && (P = w.stateNode.containerInfo, P === f || P.nodeType === 8 && P.parentNode === f)) return;
                        w = w.return
                    }
                for (; _ !== null;) {
                    if (w = Ur(_), w === null) return;
                    if (P = w.tag, P === 5 || P === 6) {
                        c = m = w;
                        continue e
                    }
                    _ = _.parentNode
                }
            }
            c = c.return
        }
        Hh(function() {
            var z = m,
                q = wu(o),
                H = [];
            e: {
                var $ = Dp.get(n);
                if ($ !== void 0) {
                    var X = ju,
                        te = n;
                    switch (n) {
                        case "keypress":
                            if (xa(o) === 0) break e;
                        case "keydown":
                        case "keyup":
                            X = uS;
                            break;
                        case "focusin":
                            te = "focus", X = Lu;
                            break;
                        case "focusout":
                            te = "blur", X = Lu;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            X = Lu;
                            break;
                        case "click":
                            if (o.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            X = hp;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            X = X1;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            X = fS;
                            break;
                        case jp:
                        case Fp:
                        case Np:
                            X = eS;
                            break;
                        case Lp:
                            X = pS;
                            break;
                        case "scroll":
                            X = G1;
                            break;
                        case "wheel":
                            X = gS;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            X = nS;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            X = mp
                    }
                    var ie = (s & 4) !== 0,
                        Xe = !ie && n === "scroll",
                        L = ie ? $ !== null ? $ + "Capture" : null : $;
                    ie = [];
                    for (var A = z, D; A !== null;) {
                        D = A;
                        var K = D.stateNode;
                        if (D.tag === 5 && K !== null && (D = K, L !== null && (K = Fi(A, L), K != null && ie.push(Zi(A, K, D)))), Xe) break;
                        A = A.return
                    }
                    0 < ie.length && ($ = new X($, te, null, o, q), H.push({
                        event: $,
                        listeners: ie
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if ($ = n === "mouseover" || n === "pointerover", X = n === "mouseout" || n === "pointerout", $ && o !== vu && (te = o.relatedTarget || o.fromElement) && (Ur(te) || te[Fn])) break e;
                    if ((X || $) && ($ = q.window === q ? q : ($ = q.ownerDocument) ? $.defaultView || $.parentWindow : window, X ? (te = o.relatedTarget || o.toElement, X = z, te = te ? Ur(te) : null, te !== null && (Xe = Vr(te), te !== Xe || te.tag !== 5 && te.tag !== 6) && (te = null)) : (X = null, te = z), X !== te)) {
                        if (ie = hp, K = "onMouseLeave", L = "onMouseEnter", A = "mouse", (n === "pointerout" || n === "pointerover") && (ie = mp, K = "onPointerLeave", L = "onPointerEnter", A = "pointer"), Xe = X == null ? $ : Ls(X), D = te == null ? $ : Ls(te), $ = new ie(K, A + "leave", X, o, q), $.target = Xe, $.relatedTarget = D, K = null, Ur(q) === z && (ie = new ie(L, A + "enter", te, o, q), ie.target = D, ie.relatedTarget = Xe, K = ie), Xe = K, X && te) t: {
                            for (ie = X, L = te, A = 0, D = ie; D; D = Fs(D)) A++;
                            for (D = 0, K = L; K; K = Fs(K)) D++;
                            for (; 0 < A - D;) ie = Fs(ie),
                            A--;
                            for (; 0 < D - A;) L = Fs(L),
                            D--;
                            for (; A--;) {
                                if (ie === L || L !== null && ie === L.alternate) break t;
                                ie = Fs(ie), L = Fs(L)
                            }
                            ie = null
                        }
                        else ie = null;
                        X !== null && Up(H, $, X, ie, !1), te !== null && Xe !== null && Up(H, Xe, te, ie, !0)
                    }
                }
                e: {
                    if ($ = z ? Ls(z) : window, X = $.nodeName && $.nodeName.toLowerCase(), X === "select" || X === "input" && $.type === "file") var ae = ES;
                    else if (Sp($))
                        if (Ep) ae = TS;
                        else {
                            ae = _S;
                            var fe = kS
                        }
                    else(X = $.nodeName) && X.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ae = CS);
                    if (ae && (ae = ae(n, z))) {
                        bp(H, ae, o, q);
                        break e
                    }
                    fe && fe(n, $, z),
                    n === "focusout" && (fe = $._wrapperState) && fe.controlled && $.type === "number" && hu($, "number", $.value)
                }
                switch (fe = z ? Ls(z) : window, n) {
                    case "focusin":
                        (Sp(fe) || fe.contentEditable === "true") && (Os = fe, Uu = z, Yi = null);
                        break;
                    case "focusout":
                        Yi = Uu = Os = null;
                        break;
                    case "mousedown":
                        $u = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        $u = !1, Mp(H, o, q);
                        break;
                    case "selectionchange":
                        if (AS) break;
                    case "keydown":
                    case "keyup":
                        Mp(H, o, q)
                }
                var he;
                if (Bu) e: {
                    switch (n) {
                        case "compositionstart":
                            var we = "onCompositionStart";
                            break e;
                        case "compositionend":
                            we = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            we = "onCompositionUpdate";
                            break e
                    }
                    we = void 0
                }
                else Ms ? wp(n, o) && (we = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (we = "onCompositionStart");we && (gp && o.locale !== "ko" && (Ms || we !== "onCompositionStart" ? we === "onCompositionEnd" && Ms && (he = dp()) : (sr = q, Ou = "value" in sr ? sr.value : sr.textContent, Ms = !0)), fe = Ta(z, we), 0 < fe.length && (we = new pp(we, n, null, o, q), H.push({
                    event: we,
                    listeners: fe
                }), he ? we.data = he : (he = xp(o), he !== null && (we.data = he)))),
                (he = vS ? wS(n, o) : xS(n, o)) && (z = Ta(z, "onBeforeInput"), 0 < z.length && (q = new pp("onBeforeInput", "beforeinput", null, o, q), H.push({
                    event: q,
                    listeners: z
                }), q.data = he))
            }
            zp(H, s)
        })
    }

    function Zi(n, s, o) {
        return {
            instance: n,
            listener: s,
            currentTarget: o
        }
    }

    function Ta(n, s) {
        for (var o = s + "Capture", c = []; n !== null;) {
            var f = n,
                m = f.stateNode;
            f.tag === 5 && m !== null && (f = m, m = Fi(n, o), m != null && c.unshift(Zi(n, m, f)), m = Fi(n, s), m != null && c.push(Zi(n, m, f))), n = n.return
        }
        return c
    }

    function Fs(n) {
        if (n === null) return null;
        do n = n.return; while (n && n.tag !== 5);
        return n || null
    }

    function Up(n, s, o, c, f) {
        for (var m = s._reactName, w = []; o !== null && o !== c;) {
            var _ = o,
                P = _.alternate,
                z = _.stateNode;
            if (P !== null && P === c) break;
            _.tag === 5 && z !== null && (_ = z, f ? (P = Fi(o, m), P != null && w.unshift(Zi(o, P, _))) : f || (P = Fi(o, m), P != null && w.push(Zi(o, P, _)))), o = o.return
        }
        w.length !== 0 && n.push({
            event: s,
            listeners: w
        })
    }
    var FS = /\r\n?/g,
        NS = /\u0000|\uFFFD/g;

    function $p(n) {
        return (typeof n == "string" ? n : "" + n).replace(FS, `
`).replace(NS, "")
    }

    function Pa(n, s, o) {
        if (s = $p(s), $p(n) !== s && o) throw Error(r(425))
    }

    function Ra() {}
    var Gu = null,
        Yu = null;

    function Xu(n, s) {
        return n === "textarea" || n === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var Ju = typeof setTimeout == "function" ? setTimeout : void 0,
        LS = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Wp = typeof Promise == "function" ? Promise : void 0,
        DS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wp < "u" ? function(n) {
            return Wp.resolve(null).then(n).catch(BS)
        } : Ju;

    function BS(n) {
        setTimeout(function() {
            throw n
        })
    }

    function Zu(n, s) {
        var o = s,
            c = 0;
        do {
            var f = o.nextSibling;
            if (n.removeChild(o), f && f.nodeType === 8)
                if (o = f.data, o === "/$") {
                    if (c === 0) {
                        n.removeChild(f), $i(s);
                        return
                    }
                    c--
                } else o !== "$" && o !== "$?" && o !== "$!" || c++;
            o = f
        } while (o);
        $i(s)
    }

    function or(n) {
        for (; n != null; n = n.nextSibling) {
            var s = n.nodeType;
            if (s === 1 || s === 3) break;
            if (s === 8) {
                if (s = n.data, s === "$" || s === "$!" || s === "$?") break;
                if (s === "/$") return null
            }
        }
        return n
    }

    function qp(n) {
        n = n.previousSibling;
        for (var s = 0; n;) {
            if (n.nodeType === 8) {
                var o = n.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (s === 0) return n;
                    s--
                } else o === "/$" && s++
            }
            n = n.previousSibling
        }
        return null
    }
    var Ns = Math.random().toString(36).slice(2),
        Sn = "__reactFiber$" + Ns,
        eo = "__reactProps$" + Ns,
        Fn = "__reactContainer$" + Ns,
        ec = "__reactEvents$" + Ns,
        IS = "__reactListeners$" + Ns,
        zS = "__reactHandles$" + Ns;

    function Ur(n) {
        var s = n[Sn];
        if (s) return s;
        for (var o = n.parentNode; o;) {
            if (s = o[Fn] || o[Sn]) {
                if (o = s.alternate, s.child !== null || o !== null && o.child !== null)
                    for (n = qp(n); n !== null;) {
                        if (o = n[Sn]) return o;
                        n = qp(n)
                    }
                return s
            }
            n = o, o = n.parentNode
        }
        return null
    }

    function to(n) {
        return n = n[Sn] || n[Fn], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n
    }

    function Ls(n) {
        if (n.tag === 5 || n.tag === 6) return n.stateNode;
        throw Error(r(33))
    }

    function Aa(n) {
        return n[eo] || null
    }
    var tc = [],
        Ds = -1;

    function ar(n) {
        return {
            current: n
        }
    }

    function ze(n) {
        0 > Ds || (n.current = tc[Ds], tc[Ds] = null, Ds--)
    }

    function Be(n, s) {
        Ds++, tc[Ds] = n.current, n.current = s
    }
    var lr = {},
        yt = ar(lr),
        Ot = ar(!1),
        $r = lr;

    function Bs(n, s) {
        var o = n.type.contextTypes;
        if (!o) return lr;
        var c = n.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === s) return c.__reactInternalMemoizedMaskedChildContext;
        var f = {},
            m;
        for (m in o) f[m] = s[m];
        return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = s, n.__reactInternalMemoizedMaskedChildContext = f), f
    }

    function jt(n) {
        return n = n.childContextTypes, n != null
    }

    function Ma() {
        ze(Ot), ze(yt)
    }

    function Hp(n, s, o) {
        if (yt.current !== lr) throw Error(r(168));
        Be(yt, s), Be(Ot, o)
    }

    function Kp(n, s, o) {
        var c = n.stateNode;
        if (s = s.childContextTypes, typeof c.getChildContext != "function") return o;
        c = c.getChildContext();
        for (var f in c)
            if (!(f in s)) throw Error(r(108, Pe(n) || "Unknown", f));
        return V({}, o, c)
    }

    function Oa(n) {
        return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || lr, $r = yt.current, Be(yt, n), Be(Ot, Ot.current), !0
    }

    function Qp(n, s, o) {
        var c = n.stateNode;
        if (!c) throw Error(r(169));
        o ? (n = Kp(n, s, $r), c.__reactInternalMemoizedMergedChildContext = n, ze(Ot), ze(yt), Be(yt, n)) : ze(Ot), Be(Ot, o)
    }
    var Nn = null,
        ja = !1,
        nc = !1;

    function Gp(n) {
        Nn === null ? Nn = [n] : Nn.push(n)
    }

    function VS(n) {
        ja = !0, Gp(n)
    }

    function ur() {
        if (!nc && Nn !== null) {
            nc = !0;
            var n = 0,
                s = Fe;
            try {
                var o = Nn;
                for (Fe = 1; n < o.length; n++) {
                    var c = o[n];
                    do c = c(!0); while (c !== null)
                }
                Nn = null, ja = !1
            } catch (f) {
                throw Nn !== null && (Nn = Nn.slice(n + 1)), Xh(ku, ur), f
            } finally {
                Fe = s, nc = !1
            }
        }
        return null
    }
    var Is = [],
        zs = 0,
        Fa = null,
        Na = 0,
        Gt = [],
        Yt = 0,
        Wr = null,
        Ln = 1,
        Dn = "";

    function qr(n, s) {
        Is[zs++] = Na, Is[zs++] = Fa, Fa = n, Na = s
    }

    function Yp(n, s, o) {
        Gt[Yt++] = Ln, Gt[Yt++] = Dn, Gt[Yt++] = Wr, Wr = n;
        var c = Ln;
        n = Dn;
        var f = 32 - ln(c) - 1;
        c &= ~(1 << f), o += 1;
        var m = 32 - ln(s) + f;
        if (30 < m) {
            var w = f - f % 5;
            m = (c & (1 << w) - 1).toString(32), c >>= w, f -= w, Ln = 1 << 32 - ln(s) + f | o << f | c, Dn = m + n
        } else Ln = 1 << m | o << f | c, Dn = n
    }

    function rc(n) {
        n.return !== null && (qr(n, 1), Yp(n, 1, 0))
    }

    function sc(n) {
        for (; n === Fa;) Fa = Is[--zs], Is[zs] = null, Na = Is[--zs], Is[zs] = null;
        for (; n === Wr;) Wr = Gt[--Yt], Gt[Yt] = null, Dn = Gt[--Yt], Gt[Yt] = null, Ln = Gt[--Yt], Gt[Yt] = null
    }
    var Wt = null,
        qt = null,
        $e = !1,
        cn = null;

    function Xp(n, s) {
        var o = en(5, null, null, 0);
        o.elementType = "DELETED", o.stateNode = s, o.return = n, s = n.deletions, s === null ? (n.deletions = [o], n.flags |= 16) : s.push(o)
    }

    function Jp(n, s) {
        switch (n.tag) {
            case 5:
                var o = n.type;
                return s = s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase() ? null : s, s !== null ? (n.stateNode = s, Wt = n, qt = or(s.firstChild), !0) : !1;
            case 6:
                return s = n.pendingProps === "" || s.nodeType !== 3 ? null : s, s !== null ? (n.stateNode = s, Wt = n, qt = null, !0) : !1;
            case 13:
                return s = s.nodeType !== 8 ? null : s, s !== null ? (o = Wr !== null ? {
                    id: Ln,
                    overflow: Dn
                } : null, n.memoizedState = {
                    dehydrated: s,
                    treeContext: o,
                    retryLane: 1073741824
                }, o = en(18, null, null, 0), o.stateNode = s, o.return = n, n.child = o, Wt = n, qt = null, !0) : !1;
            default:
                return !1
        }
    }

    function ic(n) {
        return (n.mode & 1) !== 0 && (n.flags & 128) === 0
    }

    function oc(n) {
        if ($e) {
            var s = qt;
            if (s) {
                var o = s;
                if (!Jp(n, s)) {
                    if (ic(n)) throw Error(r(418));
                    s = or(o.nextSibling);
                    var c = Wt;
                    s && Jp(n, s) ? Xp(c, o) : (n.flags = n.flags & -4097 | 2, $e = !1, Wt = n)
                }
            } else {
                if (ic(n)) throw Error(r(418));
                n.flags = n.flags & -4097 | 2, $e = !1, Wt = n
            }
        }
    }

    function Zp(n) {
        for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;) n = n.return;
        Wt = n
    }

    function La(n) {
        if (n !== Wt) return !1;
        if (!$e) return Zp(n), $e = !0, !1;
        var s;
        if ((s = n.tag !== 3) && !(s = n.tag !== 5) && (s = n.type, s = s !== "head" && s !== "body" && !Xu(n.type, n.memoizedProps)), s && (s = qt)) {
            if (ic(n)) throw em(), Error(r(418));
            for (; s;) Xp(n, s), s = or(s.nextSibling)
        }
        if (Zp(n), n.tag === 13) {
            if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
            e: {
                for (n = n.nextSibling, s = 0; n;) {
                    if (n.nodeType === 8) {
                        var o = n.data;
                        if (o === "/$") {
                            if (s === 0) {
                                qt = or(n.nextSibling);
                                break e
                            }
                            s--
                        } else o !== "$" && o !== "$!" && o !== "$?" || s++
                    }
                    n = n.nextSibling
                }
                qt = null
            }
        } else qt = Wt ? or(n.stateNode.nextSibling) : null;
        return !0
    }

    function em() {
        for (var n = qt; n;) n = or(n.nextSibling)
    }

    function Vs() {
        qt = Wt = null, $e = !1
    }

    function ac(n) {
        cn === null ? cn = [n] : cn.push(n)
    }
    var US = M.ReactCurrentBatchConfig;

    function no(n, s, o) {
        if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
            if (o._owner) {
                if (o = o._owner, o) {
                    if (o.tag !== 1) throw Error(r(309));
                    var c = o.stateNode
                }
                if (!c) throw Error(r(147, n));
                var f = c,
                    m = "" + n;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === m ? s.ref : (s = function(w) {
                    var _ = f.refs;
                    w === null ? delete _[m] : _[m] = w
                }, s._stringRef = m, s)
            }
            if (typeof n != "string") throw Error(r(284));
            if (!o._owner) throw Error(r(290, n))
        }
        return n
    }

    function Da(n, s) {
        throw n = Object.prototype.toString.call(s), Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : n))
    }

    function tm(n) {
        var s = n._init;
        return s(n._payload)
    }

    function nm(n) {
        function s(L, A) {
            if (n) {
                var D = L.deletions;
                D === null ? (L.deletions = [A], L.flags |= 16) : D.push(A)
            }
        }

        function o(L, A) {
            if (!n) return null;
            for (; A !== null;) s(L, A), A = A.sibling;
            return null
        }

        function c(L, A) {
            for (L = new Map; A !== null;) A.key !== null ? L.set(A.key, A) : L.set(A.index, A), A = A.sibling;
            return L
        }

        function f(L, A) {
            return L = yr(L, A), L.index = 0, L.sibling = null, L
        }

        function m(L, A, D) {
            return L.index = D, n ? (D = L.alternate, D !== null ? (D = D.index, D < A ? (L.flags |= 2, A) : D) : (L.flags |= 2, A)) : (L.flags |= 1048576, A)
        }

        function w(L) {
            return n && L.alternate === null && (L.flags |= 2), L
        }

        function _(L, A, D, K) {
            return A === null || A.tag !== 6 ? (A = Jc(D, L.mode, K), A.return = L, A) : (A = f(A, D), A.return = L, A)
        }

        function P(L, A, D, K) {
            var ae = D.type;
            return ae === Y ? q(L, A, D.props.children, K, D.key) : A !== null && (A.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === Ae && tm(ae) === A.type) ? (K = f(A, D.props), K.ref = no(L, A, D), K.return = L, K) : (K = al(D.type, D.key, D.props, null, L.mode, K), K.ref = no(L, A, D), K.return = L, K)
        }

        function z(L, A, D, K) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== D.containerInfo || A.stateNode.implementation !== D.implementation ? (A = Zc(D, L.mode, K), A.return = L, A) : (A = f(A, D.children || []), A.return = L, A)
        }

        function q(L, A, D, K, ae) {
            return A === null || A.tag !== 7 ? (A = Zr(D, L.mode, K, ae), A.return = L, A) : (A = f(A, D), A.return = L, A)
        }

        function H(L, A, D) {
            if (typeof A == "string" && A !== "" || typeof A == "number") return A = Jc("" + A, L.mode, D), A.return = L, A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                    case B:
                        return D = al(A.type, A.key, A.props, null, L.mode, D), D.ref = no(L, null, A), D.return = L, D;
                    case W:
                        return A = Zc(A, L.mode, D), A.return = L, A;
                    case Ae:
                        var K = A._init;
                        return H(L, K(A._payload), D)
                }
                if (Mi(A) || oe(A)) return A = Zr(A, L.mode, D, null), A.return = L, A;
                Da(L, A)
            }
            return null
        }

        function $(L, A, D, K) {
            var ae = A !== null ? A.key : null;
            if (typeof D == "string" && D !== "" || typeof D == "number") return ae !== null ? null : _(L, A, "" + D, K);
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                    case B:
                        return D.key === ae ? P(L, A, D, K) : null;
                    case W:
                        return D.key === ae ? z(L, A, D, K) : null;
                    case Ae:
                        return ae = D._init, $(L, A, ae(D._payload), K)
                }
                if (Mi(D) || oe(D)) return ae !== null ? null : q(L, A, D, K, null);
                Da(L, D)
            }
            return null
        }

        function X(L, A, D, K, ae) {
            if (typeof K == "string" && K !== "" || typeof K == "number") return L = L.get(D) || null, _(A, L, "" + K, ae);
            if (typeof K == "object" && K !== null) {
                switch (K.$$typeof) {
                    case B:
                        return L = L.get(K.key === null ? D : K.key) || null, P(A, L, K, ae);
                    case W:
                        return L = L.get(K.key === null ? D : K.key) || null, z(A, L, K, ae);
                    case Ae:
                        var fe = K._init;
                        return X(L, A, D, fe(K._payload), ae)
                }
                if (Mi(K) || oe(K)) return L = L.get(D) || null, q(A, L, K, ae, null);
                Da(A, K)
            }
            return null
        }

        function te(L, A, D, K) {
            for (var ae = null, fe = null, he = A, we = A = 0, ct = null; he !== null && we < D.length; we++) {
                he.index > we ? (ct = he, he = null) : ct = he.sibling;
                var Oe = $(L, he, D[we], K);
                if (Oe === null) {
                    he === null && (he = ct);
                    break
                }
                n && he && Oe.alternate === null && s(L, he), A = m(Oe, A, we), fe === null ? ae = Oe : fe.sibling = Oe, fe = Oe, he = ct
            }
            if (we === D.length) return o(L, he), $e && qr(L, we), ae;
            if (he === null) {
                for (; we < D.length; we++) he = H(L, D[we], K), he !== null && (A = m(he, A, we), fe === null ? ae = he : fe.sibling = he, fe = he);
                return $e && qr(L, we), ae
            }
            for (he = c(L, he); we < D.length; we++) ct = X(he, L, we, D[we], K), ct !== null && (n && ct.alternate !== null && he.delete(ct.key === null ? we : ct.key), A = m(ct, A, we), fe === null ? ae = ct : fe.sibling = ct, fe = ct);
            return n && he.forEach(function(vr) {
                return s(L, vr)
            }), $e && qr(L, we), ae
        }

        function ie(L, A, D, K) {
            var ae = oe(D);
            if (typeof ae != "function") throw Error(r(150));
            if (D = ae.call(D), D == null) throw Error(r(151));
            for (var fe = ae = null, he = A, we = A = 0, ct = null, Oe = D.next(); he !== null && !Oe.done; we++, Oe = D.next()) {
                he.index > we ? (ct = he, he = null) : ct = he.sibling;
                var vr = $(L, he, Oe.value, K);
                if (vr === null) {
                    he === null && (he = ct);
                    break
                }
                n && he && vr.alternate === null && s(L, he), A = m(vr, A, we), fe === null ? ae = vr : fe.sibling = vr, fe = vr, he = ct
            }
            if (Oe.done) return o(L, he), $e && qr(L, we), ae;
            if (he === null) {
                for (; !Oe.done; we++, Oe = D.next()) Oe = H(L, Oe.value, K), Oe !== null && (A = m(Oe, A, we), fe === null ? ae = Oe : fe.sibling = Oe, fe = Oe);
                return $e && qr(L, we), ae
            }
            for (he = c(L, he); !Oe.done; we++, Oe = D.next()) Oe = X(he, L, we, Oe.value, K), Oe !== null && (n && Oe.alternate !== null && he.delete(Oe.key === null ? we : Oe.key), A = m(Oe, A, we), fe === null ? ae = Oe : fe.sibling = Oe, fe = Oe);
            return n && he.forEach(function(Sb) {
                return s(L, Sb)
            }), $e && qr(L, we), ae
        }

        function Xe(L, A, D, K) {
            if (typeof D == "object" && D !== null && D.type === Y && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                    case B:
                        e: {
                            for (var ae = D.key, fe = A; fe !== null;) {
                                if (fe.key === ae) {
                                    if (ae = D.type, ae === Y) {
                                        if (fe.tag === 7) {
                                            o(L, fe.sibling), A = f(fe, D.props.children), A.return = L, L = A;
                                            break e
                                        }
                                    } else if (fe.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === Ae && tm(ae) === fe.type) {
                                        o(L, fe.sibling), A = f(fe, D.props), A.ref = no(L, fe, D), A.return = L, L = A;
                                        break e
                                    }
                                    o(L, fe);
                                    break
                                } else s(L, fe);
                                fe = fe.sibling
                            }
                            D.type === Y ? (A = Zr(D.props.children, L.mode, K, D.key), A.return = L, L = A) : (K = al(D.type, D.key, D.props, null, L.mode, K), K.ref = no(L, A, D), K.return = L, L = K)
                        }
                        return w(L);
                    case W:
                        e: {
                            for (fe = D.key; A !== null;) {
                                if (A.key === fe)
                                    if (A.tag === 4 && A.stateNode.containerInfo === D.containerInfo && A.stateNode.implementation === D.implementation) {
                                        o(L, A.sibling), A = f(A, D.children || []), A.return = L, L = A;
                                        break e
                                    } else {
                                        o(L, A);
                                        break
                                    }
                                else s(L, A);
                                A = A.sibling
                            }
                            A = Zc(D, L.mode, K),
                            A.return = L,
                            L = A
                        }
                        return w(L);
                    case Ae:
                        return fe = D._init, Xe(L, A, fe(D._payload), K)
                }
                if (Mi(D)) return te(L, A, D, K);
                if (oe(D)) return ie(L, A, D, K);
                Da(L, D)
            }
            return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, A !== null && A.tag === 6 ? (o(L, A.sibling), A = f(A, D), A.return = L, L = A) : (o(L, A), A = Jc(D, L.mode, K), A.return = L, L = A), w(L)) : o(L, A)
        }
        return Xe
    }
    var Us = nm(!0),
        rm = nm(!1),
        Ba = ar(null),
        Ia = null,
        $s = null,
        lc = null;

    function uc() {
        lc = $s = Ia = null
    }

    function cc(n) {
        var s = Ba.current;
        ze(Ba), n._currentValue = s
    }

    function dc(n, s, o) {
        for (; n !== null;) {
            var c = n.alternate;
            if ((n.childLanes & s) !== s ? (n.childLanes |= s, c !== null && (c.childLanes |= s)) : c !== null && (c.childLanes & s) !== s && (c.childLanes |= s), n === o) break;
            n = n.return
        }
    }

    function Ws(n, s) {
        Ia = n, lc = $s = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & s) !== 0 && (Ft = !0), n.firstContext = null)
    }

    function Xt(n) {
        var s = n._currentValue;
        if (lc !== n)
            if (n = {
                    context: n,
                    memoizedValue: s,
                    next: null
                }, $s === null) {
                if (Ia === null) throw Error(r(308));
                $s = n, Ia.dependencies = {
                    lanes: 0,
                    firstContext: n
                }
            } else $s = $s.next = n;
        return s
    }
    var Hr = null;

    function fc(n) {
        Hr === null ? Hr = [n] : Hr.push(n)
    }

    function sm(n, s, o, c) {
        var f = s.interleaved;
        return f === null ? (o.next = o, fc(s)) : (o.next = f.next, f.next = o), s.interleaved = o, Bn(n, c)
    }

    function Bn(n, s) {
        n.lanes |= s;
        var o = n.alternate;
        for (o !== null && (o.lanes |= s), o = n, n = n.return; n !== null;) n.childLanes |= s, o = n.alternate, o !== null && (o.childLanes |= s), o = n, n = n.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var cr = !1;

    function hc(n) {
        n.updateQueue = {
            baseState: n.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function im(n, s) {
        n = n.updateQueue, s.updateQueue === n && (s.updateQueue = {
            baseState: n.baseState,
            firstBaseUpdate: n.firstBaseUpdate,
            lastBaseUpdate: n.lastBaseUpdate,
            shared: n.shared,
            effects: n.effects
        })
    }

    function In(n, s) {
        return {
            eventTime: n,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function dr(n, s, o) {
        var c = n.updateQueue;
        if (c === null) return null;
        if (c = c.shared, (Me & 2) !== 0) {
            var f = c.pending;
            return f === null ? s.next = s : (s.next = f.next, f.next = s), c.pending = s, Bn(n, o)
        }
        return f = c.interleaved, f === null ? (s.next = s, fc(c)) : (s.next = f.next, f.next = s), c.interleaved = s, Bn(n, o)
    }

    function za(n, s, o) {
        if (s = s.updateQueue, s !== null && (s = s.shared, (o & 4194240) !== 0)) {
            var c = s.lanes;
            c &= n.pendingLanes, o |= c, s.lanes = o, Tu(n, o)
        }
    }

    function om(n, s) {
        var o = n.updateQueue,
            c = n.alternate;
        if (c !== null && (c = c.updateQueue, o === c)) {
            var f = null,
                m = null;
            if (o = o.firstBaseUpdate, o !== null) {
                do {
                    var w = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    m === null ? f = m = w : m = m.next = w, o = o.next
                } while (o !== null);
                m === null ? f = m = s : m = m.next = s
            } else f = m = s;
            o = {
                baseState: c.baseState,
                firstBaseUpdate: f,
                lastBaseUpdate: m,
                shared: c.shared,
                effects: c.effects
            }, n.updateQueue = o;
            return
        }
        n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = s : n.next = s, o.lastBaseUpdate = s
    }

    function Va(n, s, o, c) {
        var f = n.updateQueue;
        cr = !1;
        var m = f.firstBaseUpdate,
            w = f.lastBaseUpdate,
            _ = f.shared.pending;
        if (_ !== null) {
            f.shared.pending = null;
            var P = _,
                z = P.next;
            P.next = null, w === null ? m = z : w.next = z, w = P;
            var q = n.alternate;
            q !== null && (q = q.updateQueue, _ = q.lastBaseUpdate, _ !== w && (_ === null ? q.firstBaseUpdate = z : _.next = z, q.lastBaseUpdate = P))
        }
        if (m !== null) {
            var H = f.baseState;
            w = 0, q = z = P = null, _ = m;
            do {
                var $ = _.lane,
                    X = _.eventTime;
                if ((c & $) === $) {
                    q !== null && (q = q.next = {
                        eventTime: X,
                        lane: 0,
                        tag: _.tag,
                        payload: _.payload,
                        callback: _.callback,
                        next: null
                    });
                    e: {
                        var te = n,
                            ie = _;
                        switch ($ = s, X = o, ie.tag) {
                            case 1:
                                if (te = ie.payload, typeof te == "function") {
                                    H = te.call(X, H, $);
                                    break e
                                }
                                H = te;
                                break e;
                            case 3:
                                te.flags = te.flags & -65537 | 128;
                            case 0:
                                if (te = ie.payload, $ = typeof te == "function" ? te.call(X, H, $) : te, $ == null) break e;
                                H = V({}, H, $);
                                break e;
                            case 2:
                                cr = !0
                        }
                    }
                    _.callback !== null && _.lane !== 0 && (n.flags |= 64, $ = f.effects, $ === null ? f.effects = [_] : $.push(_))
                } else X = {
                    eventTime: X,
                    lane: $,
                    tag: _.tag,
                    payload: _.payload,
                    callback: _.callback,
                    next: null
                }, q === null ? (z = q = X, P = H) : q = q.next = X, w |= $;
                if (_ = _.next, _ === null) {
                    if (_ = f.shared.pending, _ === null) break;
                    $ = _, _ = $.next, $.next = null, f.lastBaseUpdate = $, f.shared.pending = null
                }
            } while (!0);
            if (q === null && (P = H), f.baseState = P, f.firstBaseUpdate = z, f.lastBaseUpdate = q, s = f.shared.interleaved, s !== null) {
                f = s;
                do w |= f.lane, f = f.next; while (f !== s)
            } else m === null && (f.shared.lanes = 0);
            Gr |= w, n.lanes = w, n.memoizedState = H
        }
    }

    function am(n, s, o) {
        if (n = s.effects, s.effects = null, n !== null)
            for (s = 0; s < n.length; s++) {
                var c = n[s],
                    f = c.callback;
                if (f !== null) {
                    if (c.callback = null, c = o, typeof f != "function") throw Error(r(191, f));
                    f.call(c)
                }
            }
    }
    var ro = {},
        bn = ar(ro),
        so = ar(ro),
        io = ar(ro);

    function Kr(n) {
        if (n === ro) throw Error(r(174));
        return n
    }

    function pc(n, s) {
        switch (Be(io, s), Be(so, n), Be(bn, ro), n = s.nodeType, n) {
            case 9:
            case 11:
                s = (s = s.documentElement) ? s.namespaceURI : mu(null, "");
                break;
            default:
                n = n === 8 ? s.parentNode : s, s = n.namespaceURI || null, n = n.tagName, s = mu(s, n)
        }
        ze(bn), Be(bn, s)
    }

    function qs() {
        ze(bn), ze(so), ze(io)
    }

    function lm(n) {
        Kr(io.current);
        var s = Kr(bn.current),
            o = mu(s, n.type);
        s !== o && (Be(so, n), Be(bn, o))
    }

    function mc(n) {
        so.current === n && (ze(bn), ze(so))
    }
    var We = ar(0);

    function Ua(n) {
        for (var s = n; s !== null;) {
            if (s.tag === 13) {
                var o = s.memoizedState;
                if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0) return s
            } else if (s.child !== null) {
                s.child.return = s, s = s.child;
                continue
            }
            if (s === n) break;
            for (; s.sibling === null;) {
                if (s.return === null || s.return === n) return null;
                s = s.return
            }
            s.sibling.return = s.return, s = s.sibling
        }
        return null
    }
    var gc = [];

    function yc() {
        for (var n = 0; n < gc.length; n++) gc[n]._workInProgressVersionPrimary = null;
        gc.length = 0
    }
    var $a = M.ReactCurrentDispatcher,
        vc = M.ReactCurrentBatchConfig,
        Qr = 0,
        qe = null,
        rt = null,
        lt = null,
        Wa = !1,
        oo = !1,
        ao = 0,
        $S = 0;

    function vt() {
        throw Error(r(321))
    }

    function wc(n, s) {
        if (s === null) return !1;
        for (var o = 0; o < s.length && o < n.length; o++)
            if (!un(n[o], s[o])) return !1;
        return !0
    }

    function xc(n, s, o, c, f, m) {
        if (Qr = m, qe = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, $a.current = n === null || n.memoizedState === null ? KS : QS, n = o(c, f), oo) {
            m = 0;
            do {
                if (oo = !1, ao = 0, 25 <= m) throw Error(r(301));
                m += 1, lt = rt = null, s.updateQueue = null, $a.current = GS, n = o(c, f)
            } while (oo)
        }
        if ($a.current = Ka, s = rt !== null && rt.next !== null, Qr = 0, lt = rt = qe = null, Wa = !1, s) throw Error(r(300));
        return n
    }

    function Sc() {
        var n = ao !== 0;
        return ao = 0, n
    }

    function En() {
        var n = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return lt === null ? qe.memoizedState = lt = n : lt = lt.next = n, lt
    }

    function Jt() {
        if (rt === null) {
            var n = qe.alternate;
            n = n !== null ? n.memoizedState : null
        } else n = rt.next;
        var s = lt === null ? qe.memoizedState : lt.next;
        if (s !== null) lt = s, rt = n;
        else {
            if (n === null) throw Error(r(310));
            rt = n, n = {
                memoizedState: rt.memoizedState,
                baseState: rt.baseState,
                baseQueue: rt.baseQueue,
                queue: rt.queue,
                next: null
            }, lt === null ? qe.memoizedState = lt = n : lt = lt.next = n
        }
        return lt
    }

    function lo(n, s) {
        return typeof s == "function" ? s(n) : s
    }

    function bc(n) {
        var s = Jt(),
            o = s.queue;
        if (o === null) throw Error(r(311));
        o.lastRenderedReducer = n;
        var c = rt,
            f = c.baseQueue,
            m = o.pending;
        if (m !== null) {
            if (f !== null) {
                var w = f.next;
                f.next = m.next, m.next = w
            }
            c.baseQueue = f = m, o.pending = null
        }
        if (f !== null) {
            m = f.next, c = c.baseState;
            var _ = w = null,
                P = null,
                z = m;
            do {
                var q = z.lane;
                if ((Qr & q) === q) P !== null && (P = P.next = {
                    lane: 0,
                    action: z.action,
                    hasEagerState: z.hasEagerState,
                    eagerState: z.eagerState,
                    next: null
                }), c = z.hasEagerState ? z.eagerState : n(c, z.action);
                else {
                    var H = {
                        lane: q,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    };
                    P === null ? (_ = P = H, w = c) : P = P.next = H, qe.lanes |= q, Gr |= q
                }
                z = z.next
            } while (z !== null && z !== m);
            P === null ? w = c : P.next = _, un(c, s.memoizedState) || (Ft = !0), s.memoizedState = c, s.baseState = w, s.baseQueue = P, o.lastRenderedState = c
        }
        if (n = o.interleaved, n !== null) {
            f = n;
            do m = f.lane, qe.lanes |= m, Gr |= m, f = f.next; while (f !== n)
        } else f === null && (o.lanes = 0);
        return [s.memoizedState, o.dispatch]
    }

    function Ec(n) {
        var s = Jt(),
            o = s.queue;
        if (o === null) throw Error(r(311));
        o.lastRenderedReducer = n;
        var c = o.dispatch,
            f = o.pending,
            m = s.memoizedState;
        if (f !== null) {
            o.pending = null;
            var w = f = f.next;
            do m = n(m, w.action), w = w.next; while (w !== f);
            un(m, s.memoizedState) || (Ft = !0), s.memoizedState = m, s.baseQueue === null && (s.baseState = m), o.lastRenderedState = m
        }
        return [m, c]
    }

    function um() {}

    function cm(n, s) {
        var o = qe,
            c = Jt(),
            f = s(),
            m = !un(c.memoizedState, f);
        if (m && (c.memoizedState = f, Ft = !0), c = c.queue, kc(hm.bind(null, o, c, n), [n]), c.getSnapshot !== s || m || lt !== null && lt.memoizedState.tag & 1) {
            if (o.flags |= 2048, uo(9, fm.bind(null, o, c, f, s), void 0, null), ut === null) throw Error(r(349));
            (Qr & 30) !== 0 || dm(o, s, f)
        }
        return f
    }

    function dm(n, s, o) {
        n.flags |= 16384, n = {
            getSnapshot: s,
            value: o
        }, s = qe.updateQueue, s === null ? (s = {
            lastEffect: null,
            stores: null
        }, qe.updateQueue = s, s.stores = [n]) : (o = s.stores, o === null ? s.stores = [n] : o.push(n))
    }

    function fm(n, s, o, c) {
        s.value = o, s.getSnapshot = c, pm(s) && mm(n)
    }

    function hm(n, s, o) {
        return o(function() {
            pm(s) && mm(n)
        })
    }

    function pm(n) {
        var s = n.getSnapshot;
        n = n.value;
        try {
            var o = s();
            return !un(n, o)
        } catch {
            return !0
        }
    }

    function mm(n) {
        var s = Bn(n, 1);
        s !== null && pn(s, n, 1, -1)
    }

    function gm(n) {
        var s = En();
        return typeof n == "function" && (n = n()), s.memoizedState = s.baseState = n, n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: lo,
            lastRenderedState: n
        }, s.queue = n, n = n.dispatch = HS.bind(null, qe, n), [s.memoizedState, n]
    }

    function uo(n, s, o, c) {
        return n = {
            tag: n,
            create: s,
            destroy: o,
            deps: c,
            next: null
        }, s = qe.updateQueue, s === null ? (s = {
            lastEffect: null,
            stores: null
        }, qe.updateQueue = s, s.lastEffect = n.next = n) : (o = s.lastEffect, o === null ? s.lastEffect = n.next = n : (c = o.next, o.next = n, n.next = c, s.lastEffect = n)), n
    }

    function ym() {
        return Jt().memoizedState
    }

    function qa(n, s, o, c) {
        var f = En();
        qe.flags |= n, f.memoizedState = uo(1 | s, o, void 0, c === void 0 ? null : c)
    }

    function Ha(n, s, o, c) {
        var f = Jt();
        c = c === void 0 ? null : c;
        var m = void 0;
        if (rt !== null) {
            var w = rt.memoizedState;
            if (m = w.destroy, c !== null && wc(c, w.deps)) {
                f.memoizedState = uo(s, o, m, c);
                return
            }
        }
        qe.flags |= n, f.memoizedState = uo(1 | s, o, m, c)
    }

    function vm(n, s) {
        return qa(8390656, 8, n, s)
    }

    function kc(n, s) {
        return Ha(2048, 8, n, s)
    }

    function wm(n, s) {
        return Ha(4, 2, n, s)
    }

    function xm(n, s) {
        return Ha(4, 4, n, s)
    }

    function Sm(n, s) {
        if (typeof s == "function") return n = n(), s(n),
            function() {
                s(null)
            };
        if (s != null) return n = n(), s.current = n,
            function() {
                s.current = null
            }
    }

    function bm(n, s, o) {
        return o = o != null ? o.concat([n]) : null, Ha(4, 4, Sm.bind(null, s, n), o)
    }

    function _c() {}

    function Em(n, s) {
        var o = Jt();
        s = s === void 0 ? null : s;
        var c = o.memoizedState;
        return c !== null && s !== null && wc(s, c[1]) ? c[0] : (o.memoizedState = [n, s], n)
    }

    function km(n, s) {
        var o = Jt();
        s = s === void 0 ? null : s;
        var c = o.memoizedState;
        return c !== null && s !== null && wc(s, c[1]) ? c[0] : (n = n(), o.memoizedState = [n, s], n)
    }

    function _m(n, s, o) {
        return (Qr & 21) === 0 ? (n.baseState && (n.baseState = !1, Ft = !0), n.memoizedState = o) : (un(o, s) || (o = tp(), qe.lanes |= o, Gr |= o, n.baseState = !0), s)
    }

    function WS(n, s) {
        var o = Fe;
        Fe = o !== 0 && 4 > o ? o : 4, n(!0);
        var c = vc.transition;
        vc.transition = {};
        try {
            n(!1), s()
        } finally {
            Fe = o, vc.transition = c
        }
    }

    function Cm() {
        return Jt().memoizedState
    }

    function qS(n, s, o) {
        var c = mr(n);
        if (o = {
                lane: c,
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Tm(n)) Pm(s, o);
        else if (o = sm(n, s, o, c), o !== null) {
            var f = Ct();
            pn(o, n, c, f), Rm(o, s, c)
        }
    }

    function HS(n, s, o) {
        var c = mr(n),
            f = {
                lane: c,
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (Tm(n)) Pm(s, f);
        else {
            var m = n.alternate;
            if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = s.lastRenderedReducer, m !== null)) try {
                var w = s.lastRenderedState,
                    _ = m(w, o);
                if (f.hasEagerState = !0, f.eagerState = _, un(_, w)) {
                    var P = s.interleaved;
                    P === null ? (f.next = f, fc(s)) : (f.next = P.next, P.next = f), s.interleaved = f;
                    return
                }
            } catch {} finally {}
            o = sm(n, s, f, c), o !== null && (f = Ct(), pn(o, n, c, f), Rm(o, s, c))
        }
    }

    function Tm(n) {
        var s = n.alternate;
        return n === qe || s !== null && s === qe
    }

    function Pm(n, s) {
        oo = Wa = !0;
        var o = n.pending;
        o === null ? s.next = s : (s.next = o.next, o.next = s), n.pending = s
    }

    function Rm(n, s, o) {
        if ((o & 4194240) !== 0) {
            var c = s.lanes;
            c &= n.pendingLanes, o |= c, s.lanes = o, Tu(n, o)
        }
    }
    var Ka = {
            readContext: Xt,
            useCallback: vt,
            useContext: vt,
            useEffect: vt,
            useImperativeHandle: vt,
            useInsertionEffect: vt,
            useLayoutEffect: vt,
            useMemo: vt,
            useReducer: vt,
            useRef: vt,
            useState: vt,
            useDebugValue: vt,
            useDeferredValue: vt,
            useTransition: vt,
            useMutableSource: vt,
            useSyncExternalStore: vt,
            useId: vt,
            unstable_isNewReconciler: !1
        },
        KS = {
            readContext: Xt,
            useCallback: function(n, s) {
                return En().memoizedState = [n, s === void 0 ? null : s], n
            },
            useContext: Xt,
            useEffect: vm,
            useImperativeHandle: function(n, s, o) {
                return o = o != null ? o.concat([n]) : null, qa(4194308, 4, Sm.bind(null, s, n), o)
            },
            useLayoutEffect: function(n, s) {
                return qa(4194308, 4, n, s)
            },
            useInsertionEffect: function(n, s) {
                return qa(4, 2, n, s)
            },
            useMemo: function(n, s) {
                var o = En();
                return s = s === void 0 ? null : s, n = n(), o.memoizedState = [n, s], n
            },
            useReducer: function(n, s, o) {
                var c = En();
                return s = o !== void 0 ? o(s) : s, c.memoizedState = c.baseState = s, n = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: n,
                    lastRenderedState: s
                }, c.queue = n, n = n.dispatch = qS.bind(null, qe, n), [c.memoizedState, n]
            },
            useRef: function(n) {
                var s = En();
                return n = {
                    current: n
                }, s.memoizedState = n
            },
            useState: gm,
            useDebugValue: _c,
            useDeferredValue: function(n) {
                return En().memoizedState = n
            },
            useTransition: function() {
                var n = gm(!1),
                    s = n[0];
                return n = WS.bind(null, n[1]), En().memoizedState = n, [s, n]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(n, s, o) {
                var c = qe,
                    f = En();
                if ($e) {
                    if (o === void 0) throw Error(r(407));
                    o = o()
                } else {
                    if (o = s(), ut === null) throw Error(r(349));
                    (Qr & 30) !== 0 || dm(c, s, o)
                }
                f.memoizedState = o;
                var m = {
                    value: o,
                    getSnapshot: s
                };
                return f.queue = m, vm(hm.bind(null, c, m, n), [n]), c.flags |= 2048, uo(9, fm.bind(null, c, m, o, s), void 0, null), o
            },
            useId: function() {
                var n = En(),
                    s = ut.identifierPrefix;
                if ($e) {
                    var o = Dn,
                        c = Ln;
                    o = (c & ~(1 << 32 - ln(c) - 1)).toString(32) + o, s = ":" + s + "R" + o, o = ao++, 0 < o && (s += "H" + o.toString(32)), s += ":"
                } else o = $S++, s = ":" + s + "r" + o.toString(32) + ":";
                return n.memoizedState = s
            },
            unstable_isNewReconciler: !1
        },
        QS = {
            readContext: Xt,
            useCallback: Em,
            useContext: Xt,
            useEffect: kc,
            useImperativeHandle: bm,
            useInsertionEffect: wm,
            useLayoutEffect: xm,
            useMemo: km,
            useReducer: bc,
            useRef: ym,
            useState: function() {
                return bc(lo)
            },
            useDebugValue: _c,
            useDeferredValue: function(n) {
                var s = Jt();
                return _m(s, rt.memoizedState, n)
            },
            useTransition: function() {
                var n = bc(lo)[0],
                    s = Jt().memoizedState;
                return [n, s]
            },
            useMutableSource: um,
            useSyncExternalStore: cm,
            useId: Cm,
            unstable_isNewReconciler: !1
        },
        GS = {
            readContext: Xt,
            useCallback: Em,
            useContext: Xt,
            useEffect: kc,
            useImperativeHandle: bm,
            useInsertionEffect: wm,
            useLayoutEffect: xm,
            useMemo: km,
            useReducer: Ec,
            useRef: ym,
            useState: function() {
                return Ec(lo)
            },
            useDebugValue: _c,
            useDeferredValue: function(n) {
                var s = Jt();
                return rt === null ? s.memoizedState = n : _m(s, rt.memoizedState, n)
            },
            useTransition: function() {
                var n = Ec(lo)[0],
                    s = Jt().memoizedState;
                return [n, s]
            },
            useMutableSource: um,
            useSyncExternalStore: cm,
            useId: Cm,
            unstable_isNewReconciler: !1
        };

    function dn(n, s) {
        if (n && n.defaultProps) {
            s = V({}, s), n = n.defaultProps;
            for (var o in n) s[o] === void 0 && (s[o] = n[o]);
            return s
        }
        return s
    }

    function Cc(n, s, o, c) {
        s = n.memoizedState, o = o(c, s), o = o == null ? s : V({}, s, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o)
    }
    var Qa = {
        isMounted: function(n) {
            return (n = n._reactInternals) ? Vr(n) === n : !1
        },
        enqueueSetState: function(n, s, o) {
            n = n._reactInternals;
            var c = Ct(),
                f = mr(n),
                m = In(c, f);
            m.payload = s, o != null && (m.callback = o), s = dr(n, m, f), s !== null && (pn(s, n, f, c), za(s, n, f))
        },
        enqueueReplaceState: function(n, s, o) {
            n = n._reactInternals;
            var c = Ct(),
                f = mr(n),
                m = In(c, f);
            m.tag = 1, m.payload = s, o != null && (m.callback = o), s = dr(n, m, f), s !== null && (pn(s, n, f, c), za(s, n, f))
        },
        enqueueForceUpdate: function(n, s) {
            n = n._reactInternals;
            var o = Ct(),
                c = mr(n),
                f = In(o, c);
            f.tag = 2, s != null && (f.callback = s), s = dr(n, f, c), s !== null && (pn(s, n, c, o), za(s, n, c))
        }
    };

    function Am(n, s, o, c, f, m, w) {
        return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, m, w) : s.prototype && s.prototype.isPureReactComponent ? !Gi(o, c) || !Gi(f, m) : !0
    }

    function Mm(n, s, o) {
        var c = !1,
            f = lr,
            m = s.contextType;
        return typeof m == "object" && m !== null ? m = Xt(m) : (f = jt(s) ? $r : yt.current, c = s.contextTypes, m = (c = c != null) ? Bs(n, f) : lr), s = new s(o, m), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Qa, n.stateNode = s, s._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = m), s
    }

    function Om(n, s, o, c) {
        n = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(o, c), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(o, c), s.state !== n && Qa.enqueueReplaceState(s, s.state, null)
    }

    function Tc(n, s, o, c) {
        var f = n.stateNode;
        f.props = o, f.state = n.memoizedState, f.refs = {}, hc(n);
        var m = s.contextType;
        typeof m == "object" && m !== null ? f.context = Xt(m) : (m = jt(s) ? $r : yt.current, f.context = Bs(n, m)), f.state = n.memoizedState, m = s.getDerivedStateFromProps, typeof m == "function" && (Cc(n, s, m, o), f.state = n.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (s = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), s !== f.state && Qa.enqueueReplaceState(f, f.state, null), Va(n, o, f, c), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308)
    }

    function Hs(n, s) {
        try {
            var o = "",
                c = s;
            do o += le(c), c = c.return; while (c);
            var f = o
        } catch (m) {
            f = `
Error generating stack: ` + m.message + `
` + m.stack
        }
        return {
            value: n,
            source: s,
            stack: f,
            digest: null
        }
    }

    function Pc(n, s, o) {
        return {
            value: n,
            source: null,
            stack: o ? ? null,
            digest: s ? ? null
        }
    }

    function Rc(n, s) {
        try {
            console.error(s.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var YS = typeof WeakMap == "function" ? WeakMap : Map;

    function jm(n, s, o) {
        o = In(-1, o), o.tag = 3, o.payload = {
            element: null
        };
        var c = s.value;
        return o.callback = function() {
            tl || (tl = !0, Wc = c), Rc(n, s)
        }, o
    }

    function Fm(n, s, o) {
        o = In(-1, o), o.tag = 3;
        var c = n.type.getDerivedStateFromError;
        if (typeof c == "function") {
            var f = s.value;
            o.payload = function() {
                return c(f)
            }, o.callback = function() {
                Rc(n, s)
            }
        }
        var m = n.stateNode;
        return m !== null && typeof m.componentDidCatch == "function" && (o.callback = function() {
            Rc(n, s), typeof c != "function" && (hr === null ? hr = new Set([this]) : hr.add(this));
            var w = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: w !== null ? w : ""
            })
        }), o
    }

    function Nm(n, s, o) {
        var c = n.pingCache;
        if (c === null) {
            c = n.pingCache = new YS;
            var f = new Set;
            c.set(s, f)
        } else f = c.get(s), f === void 0 && (f = new Set, c.set(s, f));
        f.has(o) || (f.add(o), n = cb.bind(null, n, s, o), s.then(n, n))
    }

    function Lm(n) {
        do {
            var s;
            if ((s = n.tag === 13) && (s = n.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return n;
            n = n.return
        } while (n !== null);
        return null
    }

    function Dm(n, s, o, c, f) {
        return (n.mode & 1) === 0 ? (n === s ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (s = In(-1, 1), s.tag = 2, dr(o, s, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = f, n)
    }
    var XS = M.ReactCurrentOwner,
        Ft = !1;

    function _t(n, s, o, c) {
        s.child = n === null ? rm(s, null, o, c) : Us(s, n.child, o, c)
    }

    function Bm(n, s, o, c, f) {
        o = o.render;
        var m = s.ref;
        return Ws(s, f), c = xc(n, s, o, c, m, f), o = Sc(), n !== null && !Ft ? (s.updateQueue = n.updateQueue, s.flags &= -2053, n.lanes &= ~f, zn(n, s, f)) : ($e && o && rc(s), s.flags |= 1, _t(n, s, c, f), s.child)
    }

    function Im(n, s, o, c, f) {
        if (n === null) {
            var m = o.type;
            return typeof m == "function" && !Xc(m) && m.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (s.tag = 15, s.type = m, zm(n, s, m, c, f)) : (n = al(o.type, null, c, s, s.mode, f), n.ref = s.ref, n.return = s, s.child = n)
        }
        if (m = n.child, (n.lanes & f) === 0) {
            var w = m.memoizedProps;
            if (o = o.compare, o = o !== null ? o : Gi, o(w, c) && n.ref === s.ref) return zn(n, s, f)
        }
        return s.flags |= 1, n = yr(m, c), n.ref = s.ref, n.return = s, s.child = n
    }

    function zm(n, s, o, c, f) {
        if (n !== null) {
            var m = n.memoizedProps;
            if (Gi(m, c) && n.ref === s.ref)
                if (Ft = !1, s.pendingProps = c = m, (n.lanes & f) !== 0)(n.flags & 131072) !== 0 && (Ft = !0);
                else return s.lanes = n.lanes, zn(n, s, f)
        }
        return Ac(n, s, o, c, f)
    }

    function Vm(n, s, o) {
        var c = s.pendingProps,
            f = c.children,
            m = n !== null ? n.memoizedState : null;
        if (c.mode === "hidden")
            if ((s.mode & 1) === 0) s.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, Be(Qs, Ht), Ht |= o;
            else {
                if ((o & 1073741824) === 0) return n = m !== null ? m.baseLanes | o : o, s.lanes = s.childLanes = 1073741824, s.memoizedState = {
                    baseLanes: n,
                    cachePool: null,
                    transitions: null
                }, s.updateQueue = null, Be(Qs, Ht), Ht |= n, null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, c = m !== null ? m.baseLanes : o, Be(Qs, Ht), Ht |= c
            }
        else m !== null ? (c = m.baseLanes | o, s.memoizedState = null) : c = o, Be(Qs, Ht), Ht |= c;
        return _t(n, s, f, o), s.child
    }

    function Um(n, s) {
        var o = s.ref;
        (n === null && o !== null || n !== null && n.ref !== o) && (s.flags |= 512, s.flags |= 2097152)
    }

    function Ac(n, s, o, c, f) {
        var m = jt(o) ? $r : yt.current;
        return m = Bs(s, m), Ws(s, f), o = xc(n, s, o, c, m, f), c = Sc(), n !== null && !Ft ? (s.updateQueue = n.updateQueue, s.flags &= -2053, n.lanes &= ~f, zn(n, s, f)) : ($e && c && rc(s), s.flags |= 1, _t(n, s, o, f), s.child)
    }

    function $m(n, s, o, c, f) {
        if (jt(o)) {
            var m = !0;
            Oa(s)
        } else m = !1;
        if (Ws(s, f), s.stateNode === null) Ya(n, s), Mm(s, o, c), Tc(s, o, c, f), c = !0;
        else if (n === null) {
            var w = s.stateNode,
                _ = s.memoizedProps;
            w.props = _;
            var P = w.context,
                z = o.contextType;
            typeof z == "object" && z !== null ? z = Xt(z) : (z = jt(o) ? $r : yt.current, z = Bs(s, z));
            var q = o.getDerivedStateFromProps,
                H = typeof q == "function" || typeof w.getSnapshotBeforeUpdate == "function";
            H || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (_ !== c || P !== z) && Om(s, w, c, z), cr = !1;
            var $ = s.memoizedState;
            w.state = $, Va(s, c, w, f), P = s.memoizedState, _ !== c || $ !== P || Ot.current || cr ? (typeof q == "function" && (Cc(s, o, q, c), P = s.memoizedState), (_ = cr || Am(s, o, _, c, $, P, z)) ? (H || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = c, s.memoizedState = P), w.props = c, w.state = P, w.context = z, c = _) : (typeof w.componentDidMount == "function" && (s.flags |= 4194308), c = !1)
        } else {
            w = s.stateNode, im(n, s), _ = s.memoizedProps, z = s.type === s.elementType ? _ : dn(s.type, _), w.props = z, H = s.pendingProps, $ = w.context, P = o.contextType, typeof P == "object" && P !== null ? P = Xt(P) : (P = jt(o) ? $r : yt.current, P = Bs(s, P));
            var X = o.getDerivedStateFromProps;
            (q = typeof X == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (_ !== H || $ !== P) && Om(s, w, c, P), cr = !1, $ = s.memoizedState, w.state = $, Va(s, c, w, f);
            var te = s.memoizedState;
            _ !== H || $ !== te || Ot.current || cr ? (typeof X == "function" && (Cc(s, o, X, c), te = s.memoizedState), (z = cr || Am(s, o, z, c, $, te, P) || !1) ? (q || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(c, te, P), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(c, te, P)), typeof w.componentDidUpdate == "function" && (s.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || _ === n.memoizedProps && $ === n.memoizedState || (s.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && $ === n.memoizedState || (s.flags |= 1024), s.memoizedProps = c, s.memoizedState = te), w.props = c, w.state = te, w.context = P, c = z) : (typeof w.componentDidUpdate != "function" || _ === n.memoizedProps && $ === n.memoizedState || (s.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && $ === n.memoizedState || (s.flags |= 1024), c = !1)
        }
        return Mc(n, s, o, c, m, f)
    }

    function Mc(n, s, o, c, f, m) {
        Um(n, s);
        var w = (s.flags & 128) !== 0;
        if (!c && !w) return f && Qp(s, o, !1), zn(n, s, m);
        c = s.stateNode, XS.current = s;
        var _ = w && typeof o.getDerivedStateFromError != "function" ? null : c.render();
        return s.flags |= 1, n !== null && w ? (s.child = Us(s, n.child, null, m), s.child = Us(s, null, _, m)) : _t(n, s, _, m), s.memoizedState = c.state, f && Qp(s, o, !0), s.child
    }

    function Wm(n) {
        var s = n.stateNode;
        s.pendingContext ? Hp(n, s.pendingContext, s.pendingContext !== s.context) : s.context && Hp(n, s.context, !1), pc(n, s.containerInfo)
    }

    function qm(n, s, o, c, f) {
        return Vs(), ac(f), s.flags |= 256, _t(n, s, o, c), s.child
    }
    var Oc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function jc(n) {
        return {
            baseLanes: n,
            cachePool: null,
            transitions: null
        }
    }

    function Hm(n, s, o) {
        var c = s.pendingProps,
            f = We.current,
            m = !1,
            w = (s.flags & 128) !== 0,
            _;
        if ((_ = w) || (_ = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), _ ? (m = !0, s.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), Be(We, f & 1), n === null) return oc(s), n = s.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : n.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824, null) : (w = c.children, n = c.fallback, m ? (c = s.mode, m = s.child, w = {
            mode: "hidden",
            children: w
        }, (c & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = w) : m = ll(w, c, 0, null), n = Zr(n, c, o, null), m.return = s, n.return = s, m.sibling = n, s.child = m, s.child.memoizedState = jc(o), s.memoizedState = Oc, n) : Fc(s, w));
        if (f = n.memoizedState, f !== null && (_ = f.dehydrated, _ !== null)) return JS(n, s, w, c, _, f, o);
        if (m) {
            m = c.fallback, w = s.mode, f = n.child, _ = f.sibling;
            var P = {
                mode: "hidden",
                children: c.children
            };
            return (w & 1) === 0 && s.child !== f ? (c = s.child, c.childLanes = 0, c.pendingProps = P, s.deletions = null) : (c = yr(f, P), c.subtreeFlags = f.subtreeFlags & 14680064), _ !== null ? m = yr(_, m) : (m = Zr(m, w, o, null), m.flags |= 2), m.return = s, c.return = s, c.sibling = m, s.child = c, c = m, m = s.child, w = n.child.memoizedState, w = w === null ? jc(o) : {
                baseLanes: w.baseLanes | o,
                cachePool: null,
                transitions: w.transitions
            }, m.memoizedState = w, m.childLanes = n.childLanes & ~o, s.memoizedState = Oc, c
        }
        return m = n.child, n = m.sibling, c = yr(m, {
            mode: "visible",
            children: c.children
        }), (s.mode & 1) === 0 && (c.lanes = o), c.return = s, c.sibling = null, n !== null && (o = s.deletions, o === null ? (s.deletions = [n], s.flags |= 16) : o.push(n)), s.child = c, s.memoizedState = null, c
    }

    function Fc(n, s) {
        return s = ll({
            mode: "visible",
            children: s
        }, n.mode, 0, null), s.return = n, n.child = s
    }

    function Ga(n, s, o, c) {
        return c !== null && ac(c), Us(s, n.child, null, o), n = Fc(s, s.pendingProps.children), n.flags |= 2, s.memoizedState = null, n
    }

    function JS(n, s, o, c, f, m, w) {
        if (o) return s.flags & 256 ? (s.flags &= -257, c = Pc(Error(r(422))), Ga(n, s, w, c)) : s.memoizedState !== null ? (s.child = n.child, s.flags |= 128, null) : (m = c.fallback, f = s.mode, c = ll({
            mode: "visible",
            children: c.children
        }, f, 0, null), m = Zr(m, f, w, null), m.flags |= 2, c.return = s, m.return = s, c.sibling = m, s.child = c, (s.mode & 1) !== 0 && Us(s, n.child, null, w), s.child.memoizedState = jc(w), s.memoizedState = Oc, m);
        if ((s.mode & 1) === 0) return Ga(n, s, w, null);
        if (f.data === "$!") {
            if (c = f.nextSibling && f.nextSibling.dataset, c) var _ = c.dgst;
            return c = _, m = Error(r(419)), c = Pc(m, c, void 0), Ga(n, s, w, c)
        }
        if (_ = (w & n.childLanes) !== 0, Ft || _) {
            if (c = ut, c !== null) {
                switch (w & -w) {
                    case 4:
                        f = 2;
                        break;
                    case 16:
                        f = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        f = 32;
                        break;
                    case 536870912:
                        f = 268435456;
                        break;
                    default:
                        f = 0
                }
                f = (f & (c.suspendedLanes | w)) !== 0 ? 0 : f, f !== 0 && f !== m.retryLane && (m.retryLane = f, Bn(n, f), pn(c, n, f, -1))
            }
            return Yc(), c = Pc(Error(r(421))), Ga(n, s, w, c)
        }
        return f.data === "$?" ? (s.flags |= 128, s.child = n.child, s = db.bind(null, n), f._reactRetry = s, null) : (n = m.treeContext, qt = or(f.nextSibling), Wt = s, $e = !0, cn = null, n !== null && (Gt[Yt++] = Ln, Gt[Yt++] = Dn, Gt[Yt++] = Wr, Ln = n.id, Dn = n.overflow, Wr = s), s = Fc(s, c.children), s.flags |= 4096, s)
    }

    function Km(n, s, o) {
        n.lanes |= s;
        var c = n.alternate;
        c !== null && (c.lanes |= s), dc(n.return, s, o)
    }

    function Nc(n, s, o, c, f) {
        var m = n.memoizedState;
        m === null ? n.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: c,
            tail: o,
            tailMode: f
        } : (m.isBackwards = s, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = o, m.tailMode = f)
    }

    function Qm(n, s, o) {
        var c = s.pendingProps,
            f = c.revealOrder,
            m = c.tail;
        if (_t(n, s, c.children, o), c = We.current, (c & 2) !== 0) c = c & 1 | 2, s.flags |= 128;
        else {
            if (n !== null && (n.flags & 128) !== 0) e: for (n = s.child; n !== null;) {
                if (n.tag === 13) n.memoizedState !== null && Km(n, o, s);
                else if (n.tag === 19) Km(n, o, s);
                else if (n.child !== null) {
                    n.child.return = n, n = n.child;
                    continue
                }
                if (n === s) break e;
                for (; n.sibling === null;) {
                    if (n.return === null || n.return === s) break e;
                    n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
            }
            c &= 1
        }
        if (Be(We, c), (s.mode & 1) === 0) s.memoizedState = null;
        else switch (f) {
            case "forwards":
                for (o = s.child, f = null; o !== null;) n = o.alternate, n !== null && Ua(n) === null && (f = o), o = o.sibling;
                o = f, o === null ? (f = s.child, s.child = null) : (f = o.sibling, o.sibling = null), Nc(s, !1, f, o, m);
                break;
            case "backwards":
                for (o = null, f = s.child, s.child = null; f !== null;) {
                    if (n = f.alternate, n !== null && Ua(n) === null) {
                        s.child = f;
                        break
                    }
                    n = f.sibling, f.sibling = o, o = f, f = n
                }
                Nc(s, !0, o, null, m);
                break;
            case "together":
                Nc(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
        }
        return s.child
    }

    function Ya(n, s) {
        (s.mode & 1) === 0 && n !== null && (n.alternate = null, s.alternate = null, s.flags |= 2)
    }

    function zn(n, s, o) {
        if (n !== null && (s.dependencies = n.dependencies), Gr |= s.lanes, (o & s.childLanes) === 0) return null;
        if (n !== null && s.child !== n.child) throw Error(r(153));
        if (s.child !== null) {
            for (n = s.child, o = yr(n, n.pendingProps), s.child = o, o.return = s; n.sibling !== null;) n = n.sibling, o = o.sibling = yr(n, n.pendingProps), o.return = s;
            o.sibling = null
        }
        return s.child
    }

    function ZS(n, s, o) {
        switch (s.tag) {
            case 3:
                Wm(s), Vs();
                break;
            case 5:
                lm(s);
                break;
            case 1:
                jt(s.type) && Oa(s);
                break;
            case 4:
                pc(s, s.stateNode.containerInfo);
                break;
            case 10:
                var c = s.type._context,
                    f = s.memoizedProps.value;
                Be(Ba, c._currentValue), c._currentValue = f;
                break;
            case 13:
                if (c = s.memoizedState, c !== null) return c.dehydrated !== null ? (Be(We, We.current & 1), s.flags |= 128, null) : (o & s.child.childLanes) !== 0 ? Hm(n, s, o) : (Be(We, We.current & 1), n = zn(n, s, o), n !== null ? n.sibling : null);
                Be(We, We.current & 1);
                break;
            case 19:
                if (c = (o & s.childLanes) !== 0, (n.flags & 128) !== 0) {
                    if (c) return Qm(n, s, o);
                    s.flags |= 128
                }
                if (f = s.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Be(We, We.current), c) break;
                return null;
            case 22:
            case 23:
                return s.lanes = 0, Vm(n, s, o)
        }
        return zn(n, s, o)
    }
    var Gm, Lc, Ym, Xm;
    Gm = function(n, s) {
        for (var o = s.child; o !== null;) {
            if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue
            }
            if (o === s) break;
            for (; o.sibling === null;) {
                if (o.return === null || o.return === s) return;
                o = o.return
            }
            o.sibling.return = o.return, o = o.sibling
        }
    }, Lc = function() {}, Ym = function(n, s, o, c) {
        var f = n.memoizedProps;
        if (f !== c) {
            n = s.stateNode, Kr(bn.current);
            var m = null;
            switch (o) {
                case "input":
                    f = Ut(n, f), c = Ut(n, c), m = [];
                    break;
                case "select":
                    f = V({}, f, {
                        value: void 0
                    }), c = V({}, c, {
                        value: void 0
                    }), m = [];
                    break;
                case "textarea":
                    f = pu(n, f), c = pu(n, c), m = [];
                    break;
                default:
                    typeof f.onClick != "function" && typeof c.onClick == "function" && (n.onclick = Ra)
            }
            gu(o, c);
            var w;
            o = null;
            for (z in f)
                if (!c.hasOwnProperty(z) && f.hasOwnProperty(z) && f[z] != null)
                    if (z === "style") {
                        var _ = f[z];
                        for (w in _) _.hasOwnProperty(w) && (o || (o = {}), o[w] = "")
                    } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (a.hasOwnProperty(z) ? m || (m = []) : (m = m || []).push(z, null));
            for (z in c) {
                var P = c[z];
                if (_ = f != null ? f[z] : void 0, c.hasOwnProperty(z) && P !== _ && (P != null || _ != null))
                    if (z === "style")
                        if (_) {
                            for (w in _) !_.hasOwnProperty(w) || P && P.hasOwnProperty(w) || (o || (o = {}), o[w] = "");
                            for (w in P) P.hasOwnProperty(w) && _[w] !== P[w] && (o || (o = {}), o[w] = P[w])
                        } else o || (m || (m = []), m.push(z, o)), o = P;
                else z === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, _ = _ ? _.__html : void 0, P != null && _ !== P && (m = m || []).push(z, P)) : z === "children" ? typeof P != "string" && typeof P != "number" || (m = m || []).push(z, "" + P) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (a.hasOwnProperty(z) ? (P != null && z === "onScroll" && Ie("scroll", n), m || _ === P || (m = [])) : (m = m || []).push(z, P))
            }
            o && (m = m || []).push("style", o);
            var z = m;
            (s.updateQueue = z) && (s.flags |= 4)
        }
    }, Xm = function(n, s, o, c) {
        o !== c && (s.flags |= 4)
    };

    function co(n, s) {
        if (!$e) switch (n.tailMode) {
            case "hidden":
                s = n.tail;
                for (var o = null; s !== null;) s.alternate !== null && (o = s), s = s.sibling;
                o === null ? n.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = n.tail;
                for (var c = null; o !== null;) o.alternate !== null && (c = o), o = o.sibling;
                c === null ? s || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null
        }
    }

    function wt(n) {
        var s = n.alternate !== null && n.alternate.child === n.child,
            o = 0,
            c = 0;
        if (s)
            for (var f = n.child; f !== null;) o |= f.lanes | f.childLanes, c |= f.subtreeFlags & 14680064, c |= f.flags & 14680064, f.return = n, f = f.sibling;
        else
            for (f = n.child; f !== null;) o |= f.lanes | f.childLanes, c |= f.subtreeFlags, c |= f.flags, f.return = n, f = f.sibling;
        return n.subtreeFlags |= c, n.childLanes = o, s
    }

    function eb(n, s, o) {
        var c = s.pendingProps;
        switch (sc(s), s.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return wt(s), null;
            case 1:
                return jt(s.type) && Ma(), wt(s), null;
            case 3:
                return c = s.stateNode, qs(), ze(Ot), ze(yt), yc(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (n === null || n.child === null) && (La(s) ? s.flags |= 4 : n === null || n.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, cn !== null && (Kc(cn), cn = null))), Lc(n, s), wt(s), null;
            case 5:
                mc(s);
                var f = Kr(io.current);
                if (o = s.type, n !== null && s.stateNode != null) Ym(n, s, o, c, f), n.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
                else {
                    if (!c) {
                        if (s.stateNode === null) throw Error(r(166));
                        return wt(s), null
                    }
                    if (n = Kr(bn.current), La(s)) {
                        c = s.stateNode, o = s.type;
                        var m = s.memoizedProps;
                        switch (c[Sn] = s, c[eo] = m, n = (s.mode & 1) !== 0, o) {
                            case "dialog":
                                Ie("cancel", c), Ie("close", c);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ie("load", c);
                                break;
                            case "video":
                            case "audio":
                                for (f = 0; f < Xi.length; f++) Ie(Xi[f], c);
                                break;
                            case "source":
                                Ie("error", c);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ie("error", c), Ie("load", c);
                                break;
                            case "details":
                                Ie("toggle", c);
                                break;
                            case "input":
                                Ai(c, m), Ie("invalid", c);
                                break;
                            case "select":
                                c._wrapperState = {
                                    wasMultiple: !!m.multiple
                                }, Ie("invalid", c);
                                break;
                            case "textarea":
                                Fh(c, m), Ie("invalid", c)
                        }
                        gu(o, m), f = null;
                        for (var w in m)
                            if (m.hasOwnProperty(w)) {
                                var _ = m[w];
                                w === "children" ? typeof _ == "string" ? c.textContent !== _ && (m.suppressHydrationWarning !== !0 && Pa(c.textContent, _, n), f = ["children", _]) : typeof _ == "number" && c.textContent !== "" + _ && (m.suppressHydrationWarning !== !0 && Pa(c.textContent, _, n), f = ["children", "" + _]) : a.hasOwnProperty(w) && _ != null && w === "onScroll" && Ie("scroll", c)
                            }
                        switch (o) {
                            case "input":
                                ye(c), jh(c, m, !0);
                                break;
                            case "textarea":
                                ye(c), Lh(c);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof m.onClick == "function" && (c.onclick = Ra)
                        }
                        c = f, s.updateQueue = c, c !== null && (s.flags |= 4)
                    } else {
                        w = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Dh(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = w.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = w.createElement(o, {
                            is: c.is
                        }) : (n = w.createElement(o), o === "select" && (w = n, c.multiple ? w.multiple = !0 : c.size && (w.size = c.size))) : n = w.createElementNS(n, o), n[Sn] = s, n[eo] = c, Gm(n, s, !1, !1), s.stateNode = n;
                        e: {
                            switch (w = yu(o, c), o) {
                                case "dialog":
                                    Ie("cancel", n), Ie("close", n), f = c;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Ie("load", n), f = c;
                                    break;
                                case "video":
                                case "audio":
                                    for (f = 0; f < Xi.length; f++) Ie(Xi[f], n);
                                    f = c;
                                    break;
                                case "source":
                                    Ie("error", n), f = c;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Ie("error", n), Ie("load", n), f = c;
                                    break;
                                case "details":
                                    Ie("toggle", n), f = c;
                                    break;
                                case "input":
                                    Ai(n, c), f = Ut(n, c), Ie("invalid", n);
                                    break;
                                case "option":
                                    f = c;
                                    break;
                                case "select":
                                    n._wrapperState = {
                                        wasMultiple: !!c.multiple
                                    }, f = V({}, c, {
                                        value: void 0
                                    }), Ie("invalid", n);
                                    break;
                                case "textarea":
                                    Fh(n, c), f = pu(n, c), Ie("invalid", n);
                                    break;
                                default:
                                    f = c
                            }
                            gu(o, f),
                            _ = f;
                            for (m in _)
                                if (_.hasOwnProperty(m)) {
                                    var P = _[m];
                                    m === "style" ? zh(n, P) : m === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && Bh(n, P)) : m === "children" ? typeof P == "string" ? (o !== "textarea" || P !== "") && Oi(n, P) : typeof P == "number" && Oi(n, "" + P) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (a.hasOwnProperty(m) ? P != null && m === "onScroll" && Ie("scroll", n) : P != null && R(n, m, P, w))
                                }
                            switch (o) {
                                case "input":
                                    ye(n), jh(n, c, !1);
                                    break;
                                case "textarea":
                                    ye(n), Lh(n);
                                    break;
                                case "option":
                                    c.value != null && n.setAttribute("value", "" + Se(c.value));
                                    break;
                                case "select":
                                    n.multiple = !!c.multiple, m = c.value, m != null ? Cs(n, !!c.multiple, m, !1) : c.defaultValue != null && Cs(n, !!c.multiple, c.defaultValue, !0);
                                    break;
                                default:
                                    typeof f.onClick == "function" && (n.onclick = Ra)
                            }
                            switch (o) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    c = !!c.autoFocus;
                                    break e;
                                case "img":
                                    c = !0;
                                    break e;
                                default:
                                    c = !1
                            }
                        }
                        c && (s.flags |= 4)
                    }
                    s.ref !== null && (s.flags |= 512, s.flags |= 2097152)
                }
                return wt(s), null;
            case 6:
                if (n && s.stateNode != null) Xm(n, s, n.memoizedProps, c);
                else {
                    if (typeof c != "string" && s.stateNode === null) throw Error(r(166));
                    if (o = Kr(io.current), Kr(bn.current), La(s)) {
                        if (c = s.stateNode, o = s.memoizedProps, c[Sn] = s, (m = c.nodeValue !== o) && (n = Wt, n !== null)) switch (n.tag) {
                            case 3:
                                Pa(c.nodeValue, o, (n.mode & 1) !== 0);
                                break;
                            case 5:
                                n.memoizedProps.suppressHydrationWarning !== !0 && Pa(c.nodeValue, o, (n.mode & 1) !== 0)
                        }
                        m && (s.flags |= 4)
                    } else c = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(c), c[Sn] = s, s.stateNode = c
                }
                return wt(s), null;
            case 13:
                if (ze(We), c = s.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
                    if ($e && qt !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) em(), Vs(), s.flags |= 98560, m = !1;
                    else if (m = La(s), c !== null && c.dehydrated !== null) {
                        if (n === null) {
                            if (!m) throw Error(r(318));
                            if (m = s.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(r(317));
                            m[Sn] = s
                        } else Vs(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
                        wt(s), m = !1
                    } else cn !== null && (Kc(cn), cn = null), m = !0;
                    if (!m) return s.flags & 65536 ? s : null
                }
                return (s.flags & 128) !== 0 ? (s.lanes = o, s) : (c = c !== null, c !== (n !== null && n.memoizedState !== null) && c && (s.child.flags |= 8192, (s.mode & 1) !== 0 && (n === null || (We.current & 1) !== 0 ? st === 0 && (st = 3) : Yc())), s.updateQueue !== null && (s.flags |= 4), wt(s), null);
            case 4:
                return qs(), Lc(n, s), n === null && Ji(s.stateNode.containerInfo), wt(s), null;
            case 10:
                return cc(s.type._context), wt(s), null;
            case 17:
                return jt(s.type) && Ma(), wt(s), null;
            case 19:
                if (ze(We), m = s.memoizedState, m === null) return wt(s), null;
                if (c = (s.flags & 128) !== 0, w = m.rendering, w === null)
                    if (c) co(m, !1);
                    else {
                        if (st !== 0 || n !== null && (n.flags & 128) !== 0)
                            for (n = s.child; n !== null;) {
                                if (w = Ua(n), w !== null) {
                                    for (s.flags |= 128, co(m, !1), c = w.updateQueue, c !== null && (s.updateQueue = c, s.flags |= 4), s.subtreeFlags = 0, c = o, o = s.child; o !== null;) m = o, n = c, m.flags &= 14680066, w = m.alternate, w === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = w.childLanes, m.lanes = w.lanes, m.child = w.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = w.memoizedProps, m.memoizedState = w.memoizedState, m.updateQueue = w.updateQueue, m.type = w.type, n = w.dependencies, m.dependencies = n === null ? null : {
                                        lanes: n.lanes,
                                        firstContext: n.firstContext
                                    }), o = o.sibling;
                                    return Be(We, We.current & 1 | 2), s.child
                                }
                                n = n.sibling
                            }
                        m.tail !== null && Ye() > Gs && (s.flags |= 128, c = !0, co(m, !1), s.lanes = 4194304)
                    }
                else {
                    if (!c)
                        if (n = Ua(w), n !== null) {
                            if (s.flags |= 128, c = !0, o = n.updateQueue, o !== null && (s.updateQueue = o, s.flags |= 4), co(m, !0), m.tail === null && m.tailMode === "hidden" && !w.alternate && !$e) return wt(s), null
                        } else 2 * Ye() - m.renderingStartTime > Gs && o !== 1073741824 && (s.flags |= 128, c = !0, co(m, !1), s.lanes = 4194304);
                    m.isBackwards ? (w.sibling = s.child, s.child = w) : (o = m.last, o !== null ? o.sibling = w : s.child = w, m.last = w)
                }
                return m.tail !== null ? (s = m.tail, m.rendering = s, m.tail = s.sibling, m.renderingStartTime = Ye(), s.sibling = null, o = We.current, Be(We, c ? o & 1 | 2 : o & 1), s) : (wt(s), null);
            case 22:
            case 23:
                return Gc(), c = s.memoizedState !== null, n !== null && n.memoizedState !== null !== c && (s.flags |= 8192), c && (s.mode & 1) !== 0 ? (Ht & 1073741824) !== 0 && (wt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : wt(s), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(r(156, s.tag))
    }

    function tb(n, s) {
        switch (sc(s), s.tag) {
            case 1:
                return jt(s.type) && Ma(), n = s.flags, n & 65536 ? (s.flags = n & -65537 | 128, s) : null;
            case 3:
                return qs(), ze(Ot), ze(yt), yc(), n = s.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (s.flags = n & -65537 | 128, s) : null;
            case 5:
                return mc(s), null;
            case 13:
                if (ze(We), n = s.memoizedState, n !== null && n.dehydrated !== null) {
                    if (s.alternate === null) throw Error(r(340));
                    Vs()
                }
                return n = s.flags, n & 65536 ? (s.flags = n & -65537 | 128, s) : null;
            case 19:
                return ze(We), null;
            case 4:
                return qs(), null;
            case 10:
                return cc(s.type._context), null;
            case 22:
            case 23:
                return Gc(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var Xa = !1,
        xt = !1,
        nb = typeof WeakSet == "function" ? WeakSet : Set,
        ee = null;

    function Ks(n, s) {
        var o = n.ref;
        if (o !== null)
            if (typeof o == "function") try {
                o(null)
            } catch (c) {
                Ke(n, s, c)
            } else o.current = null
    }

    function Dc(n, s, o) {
        try {
            o()
        } catch (c) {
            Ke(n, s, c)
        }
    }
    var Jm = !1;

    function rb(n, s) {
        if (Gu = ya, n = Ap(), Vu(n)) {
            if ("selectionStart" in n) var o = {
                start: n.selectionStart,
                end: n.selectionEnd
            };
            else e: {
                o = (o = n.ownerDocument) && o.defaultView || window;
                var c = o.getSelection && o.getSelection();
                if (c && c.rangeCount !== 0) {
                    o = c.anchorNode;
                    var f = c.anchorOffset,
                        m = c.focusNode;
                    c = c.focusOffset;
                    try {
                        o.nodeType, m.nodeType
                    } catch {
                        o = null;
                        break e
                    }
                    var w = 0,
                        _ = -1,
                        P = -1,
                        z = 0,
                        q = 0,
                        H = n,
                        $ = null;
                    t: for (;;) {
                        for (var X; H !== o || f !== 0 && H.nodeType !== 3 || (_ = w + f), H !== m || c !== 0 && H.nodeType !== 3 || (P = w + c), H.nodeType === 3 && (w += H.nodeValue.length), (X = H.firstChild) !== null;) $ = H, H = X;
                        for (;;) {
                            if (H === n) break t;
                            if ($ === o && ++z === f && (_ = w), $ === m && ++q === c && (P = w), (X = H.nextSibling) !== null) break;
                            H = $, $ = H.parentNode
                        }
                        H = X
                    }
                    o = _ === -1 || P === -1 ? null : {
                        start: _,
                        end: P
                    }
                } else o = null
            }
            o = o || {
                start: 0,
                end: 0
            }
        } else o = null;
        for (Yu = {
                focusedElem: n,
                selectionRange: o
            }, ya = !1, ee = s; ee !== null;)
            if (s = ee, n = s.child, (s.subtreeFlags & 1028) !== 0 && n !== null) n.return = s, ee = n;
            else
                for (; ee !== null;) {
                    s = ee;
                    try {
                        var te = s.alternate;
                        if ((s.flags & 1024) !== 0) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (te !== null) {
                                    var ie = te.memoizedProps,
                                        Xe = te.memoizedState,
                                        L = s.stateNode,
                                        A = L.getSnapshotBeforeUpdate(s.elementType === s.type ? ie : dn(s.type, ie), Xe);
                                    L.__reactInternalSnapshotBeforeUpdate = A
                                }
                                break;
                            case 3:
                                var D = s.stateNode.containerInfo;
                                D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(r(163))
                        }
                    } catch (K) {
                        Ke(s, s.return, K)
                    }
                    if (n = s.sibling, n !== null) {
                        n.return = s.return, ee = n;
                        break
                    }
                    ee = s.return
                }
        return te = Jm, Jm = !1, te
    }

    function fo(n, s, o) {
        var c = s.updateQueue;
        if (c = c !== null ? c.lastEffect : null, c !== null) {
            var f = c = c.next;
            do {
                if ((f.tag & n) === n) {
                    var m = f.destroy;
                    f.destroy = void 0, m !== void 0 && Dc(s, o, m)
                }
                f = f.next
            } while (f !== c)
        }
    }

    function Ja(n, s) {
        if (s = s.updateQueue, s = s !== null ? s.lastEffect : null, s !== null) {
            var o = s = s.next;
            do {
                if ((o.tag & n) === n) {
                    var c = o.create;
                    o.destroy = c()
                }
                o = o.next
            } while (o !== s)
        }
    }

    function Bc(n) {
        var s = n.ref;
        if (s !== null) {
            var o = n.stateNode;
            switch (n.tag) {
                case 5:
                    n = o;
                    break;
                default:
                    n = o
            }
            typeof s == "function" ? s(n) : s.current = n
        }
    }

    function Zm(n) {
        var s = n.alternate;
        s !== null && (n.alternate = null, Zm(s)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (s = n.stateNode, s !== null && (delete s[Sn], delete s[eo], delete s[ec], delete s[IS], delete s[zS])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null
    }

    function eg(n) {
        return n.tag === 5 || n.tag === 3 || n.tag === 4
    }

    function tg(n) {
        e: for (;;) {
            for (; n.sibling === null;) {
                if (n.return === null || eg(n.return)) return null;
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18;) {
                if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
                n.child.return = n, n = n.child
            }
            if (!(n.flags & 2)) return n.stateNode
        }
    }

    function Ic(n, s, o) {
        var c = n.tag;
        if (c === 5 || c === 6) n = n.stateNode, s ? o.nodeType === 8 ? o.parentNode.insertBefore(n, s) : o.insertBefore(n, s) : (o.nodeType === 8 ? (s = o.parentNode, s.insertBefore(n, o)) : (s = o, s.appendChild(n)), o = o._reactRootContainer, o != null || s.onclick !== null || (s.onclick = Ra));
        else if (c !== 4 && (n = n.child, n !== null))
            for (Ic(n, s, o), n = n.sibling; n !== null;) Ic(n, s, o), n = n.sibling
    }

    function zc(n, s, o) {
        var c = n.tag;
        if (c === 5 || c === 6) n = n.stateNode, s ? o.insertBefore(n, s) : o.appendChild(n);
        else if (c !== 4 && (n = n.child, n !== null))
            for (zc(n, s, o), n = n.sibling; n !== null;) zc(n, s, o), n = n.sibling
    }
    var ft = null,
        fn = !1;

    function fr(n, s, o) {
        for (o = o.child; o !== null;) ng(n, s, o), o = o.sibling
    }

    function ng(n, s, o) {
        if (xn && typeof xn.onCommitFiberUnmount == "function") try {
            xn.onCommitFiberUnmount(da, o)
        } catch {}
        switch (o.tag) {
            case 5:
                xt || Ks(o, s);
            case 6:
                var c = ft,
                    f = fn;
                ft = null, fr(n, s, o), ft = c, fn = f, ft !== null && (fn ? (n = ft, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : ft.removeChild(o.stateNode));
                break;
            case 18:
                ft !== null && (fn ? (n = ft, o = o.stateNode, n.nodeType === 8 ? Zu(n.parentNode, o) : n.nodeType === 1 && Zu(n, o), $i(n)) : Zu(ft, o.stateNode));
                break;
            case 4:
                c = ft, f = fn, ft = o.stateNode.containerInfo, fn = !0, fr(n, s, o), ft = c, fn = f;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!xt && (c = o.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
                    f = c = c.next;
                    do {
                        var m = f,
                            w = m.destroy;
                        m = m.tag, w !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && Dc(o, s, w), f = f.next
                    } while (f !== c)
                }
                fr(n, s, o);
                break;
            case 1:
                if (!xt && (Ks(o, s), c = o.stateNode, typeof c.componentWillUnmount == "function")) try {
                    c.props = o.memoizedProps, c.state = o.memoizedState, c.componentWillUnmount()
                } catch (_) {
                    Ke(o, s, _)
                }
                fr(n, s, o);
                break;
            case 21:
                fr(n, s, o);
                break;
            case 22:
                o.mode & 1 ? (xt = (c = xt) || o.memoizedState !== null, fr(n, s, o), xt = c) : fr(n, s, o);
                break;
            default:
                fr(n, s, o)
        }
    }

    function rg(n) {
        var s = n.updateQueue;
        if (s !== null) {
            n.updateQueue = null;
            var o = n.stateNode;
            o === null && (o = n.stateNode = new nb), s.forEach(function(c) {
                var f = fb.bind(null, n, c);
                o.has(c) || (o.add(c), c.then(f, f))
            })
        }
    }

    function hn(n, s) {
        var o = s.deletions;
        if (o !== null)
            for (var c = 0; c < o.length; c++) {
                var f = o[c];
                try {
                    var m = n,
                        w = s,
                        _ = w;
                    e: for (; _ !== null;) {
                        switch (_.tag) {
                            case 5:
                                ft = _.stateNode, fn = !1;
                                break e;
                            case 3:
                                ft = _.stateNode.containerInfo, fn = !0;
                                break e;
                            case 4:
                                ft = _.stateNode.containerInfo, fn = !0;
                                break e
                        }
                        _ = _.return
                    }
                    if (ft === null) throw Error(r(160));
                    ng(m, w, f), ft = null, fn = !1;
                    var P = f.alternate;
                    P !== null && (P.return = null), f.return = null
                } catch (z) {
                    Ke(f, s, z)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null;) sg(s, n), s = s.sibling
    }

    function sg(n, s) {
        var o = n.alternate,
            c = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (hn(s, n), kn(n), c & 4) {
                    try {
                        fo(3, n, n.return), Ja(3, n)
                    } catch (ie) {
                        Ke(n, n.return, ie)
                    }
                    try {
                        fo(5, n, n.return)
                    } catch (ie) {
                        Ke(n, n.return, ie)
                    }
                }
                break;
            case 1:
                hn(s, n), kn(n), c & 512 && o !== null && Ks(o, o.return);
                break;
            case 5:
                if (hn(s, n), kn(n), c & 512 && o !== null && Ks(o, o.return), n.flags & 32) {
                    var f = n.stateNode;
                    try {
                        Oi(f, "")
                    } catch (ie) {
                        Ke(n, n.return, ie)
                    }
                }
                if (c & 4 && (f = n.stateNode, f != null)) {
                    var m = n.memoizedProps,
                        w = o !== null ? o.memoizedProps : m,
                        _ = n.type,
                        P = n.updateQueue;
                    if (n.updateQueue = null, P !== null) try {
                        _ === "input" && m.type === "radio" && m.name != null && oa(f, m), yu(_, w);
                        var z = yu(_, m);
                        for (w = 0; w < P.length; w += 2) {
                            var q = P[w],
                                H = P[w + 1];
                            q === "style" ? zh(f, H) : q === "dangerouslySetInnerHTML" ? Bh(f, H) : q === "children" ? Oi(f, H) : R(f, q, H, z)
                        }
                        switch (_) {
                            case "input":
                                jn(f, m);
                                break;
                            case "textarea":
                                Nh(f, m);
                                break;
                            case "select":
                                var $ = f._wrapperState.wasMultiple;
                                f._wrapperState.wasMultiple = !!m.multiple;
                                var X = m.value;
                                X != null ? Cs(f, !!m.multiple, X, !1) : $ !== !!m.multiple && (m.defaultValue != null ? Cs(f, !!m.multiple, m.defaultValue, !0) : Cs(f, !!m.multiple, m.multiple ? [] : "", !1))
                        }
                        f[eo] = m
                    } catch (ie) {
                        Ke(n, n.return, ie)
                    }
                }
                break;
            case 6:
                if (hn(s, n), kn(n), c & 4) {
                    if (n.stateNode === null) throw Error(r(162));
                    f = n.stateNode, m = n.memoizedProps;
                    try {
                        f.nodeValue = m
                    } catch (ie) {
                        Ke(n, n.return, ie)
                    }
                }
                break;
            case 3:
                if (hn(s, n), kn(n), c & 4 && o !== null && o.memoizedState.isDehydrated) try {
                    $i(s.containerInfo)
                } catch (ie) {
                    Ke(n, n.return, ie)
                }
                break;
            case 4:
                hn(s, n), kn(n);
                break;
            case 13:
                hn(s, n), kn(n), f = n.child, f.flags & 8192 && (m = f.memoizedState !== null, f.stateNode.isHidden = m, !m || f.alternate !== null && f.alternate.memoizedState !== null || ($c = Ye())), c & 4 && rg(n);
                break;
            case 22:
                if (q = o !== null && o.memoizedState !== null, n.mode & 1 ? (xt = (z = xt) || q, hn(s, n), xt = z) : hn(s, n), kn(n), c & 8192) {
                    if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !q && (n.mode & 1) !== 0)
                        for (ee = n, q = n.child; q !== null;) {
                            for (H = ee = q; ee !== null;) {
                                switch ($ = ee, X = $.child, $.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        fo(4, $, $.return);
                                        break;
                                    case 1:
                                        Ks($, $.return);
                                        var te = $.stateNode;
                                        if (typeof te.componentWillUnmount == "function") {
                                            c = $, o = $.return;
                                            try {
                                                s = c, te.props = s.memoizedProps, te.state = s.memoizedState, te.componentWillUnmount()
                                            } catch (ie) {
                                                Ke(c, o, ie)
                                            }
                                        }
                                        break;
                                    case 5:
                                        Ks($, $.return);
                                        break;
                                    case 22:
                                        if ($.memoizedState !== null) {
                                            ag(H);
                                            continue
                                        }
                                }
                                X !== null ? (X.return = $, ee = X) : ag(H)
                            }
                            q = q.sibling
                        }
                    e: for (q = null, H = n;;) {
                        if (H.tag === 5) {
                            if (q === null) {
                                q = H;
                                try {
                                    f = H.stateNode, z ? (m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (_ = H.stateNode, P = H.memoizedProps.style, w = P != null && P.hasOwnProperty("display") ? P.display : null, _.style.display = Ih("display", w))
                                } catch (ie) {
                                    Ke(n, n.return, ie)
                                }
                            }
                        } else if (H.tag === 6) {
                            if (q === null) try {
                                H.stateNode.nodeValue = z ? "" : H.memoizedProps
                            } catch (ie) {
                                Ke(n, n.return, ie)
                            }
                        } else if ((H.tag !== 22 && H.tag !== 23 || H.memoizedState === null || H === n) && H.child !== null) {
                            H.child.return = H, H = H.child;
                            continue
                        }
                        if (H === n) break e;
                        for (; H.sibling === null;) {
                            if (H.return === null || H.return === n) break e;
                            q === H && (q = null), H = H.return
                        }
                        q === H && (q = null), H.sibling.return = H.return, H = H.sibling
                    }
                }
                break;
            case 19:
                hn(s, n), kn(n), c & 4 && rg(n);
                break;
            case 21:
                break;
            default:
                hn(s, n), kn(n)
        }
    }

    function kn(n) {
        var s = n.flags;
        if (s & 2) {
            try {
                e: {
                    for (var o = n.return; o !== null;) {
                        if (eg(o)) {
                            var c = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(r(160))
                }
                switch (c.tag) {
                    case 5:
                        var f = c.stateNode;
                        c.flags & 32 && (Oi(f, ""), c.flags &= -33);
                        var m = tg(n);
                        zc(n, m, f);
                        break;
                    case 3:
                    case 4:
                        var w = c.stateNode.containerInfo,
                            _ = tg(n);
                        Ic(n, _, w);
                        break;
                    default:
                        throw Error(r(161))
                }
            }
            catch (P) {
                Ke(n, n.return, P)
            }
            n.flags &= -3
        }
        s & 4096 && (n.flags &= -4097)
    }

    function sb(n, s, o) {
        ee = n, ig(n)
    }

    function ig(n, s, o) {
        for (var c = (n.mode & 1) !== 0; ee !== null;) {
            var f = ee,
                m = f.child;
            if (f.tag === 22 && c) {
                var w = f.memoizedState !== null || Xa;
                if (!w) {
                    var _ = f.alternate,
                        P = _ !== null && _.memoizedState !== null || xt;
                    _ = Xa;
                    var z = xt;
                    if (Xa = w, (xt = P) && !z)
                        for (ee = f; ee !== null;) w = ee, P = w.child, w.tag === 22 && w.memoizedState !== null ? lg(f) : P !== null ? (P.return = w, ee = P) : lg(f);
                    for (; m !== null;) ee = m, ig(m), m = m.sibling;
                    ee = f, Xa = _, xt = z
                }
                og(n)
            } else(f.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = f, ee = m) : og(n)
        }
    }

    function og(n) {
        for (; ee !== null;) {
            var s = ee;
            if ((s.flags & 8772) !== 0) {
                var o = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0) switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            xt || Ja(5, s);
                            break;
                        case 1:
                            var c = s.stateNode;
                            if (s.flags & 4 && !xt)
                                if (o === null) c.componentDidMount();
                                else {
                                    var f = s.elementType === s.type ? o.memoizedProps : dn(s.type, o.memoizedProps);
                                    c.componentDidUpdate(f, o.memoizedState, c.__reactInternalSnapshotBeforeUpdate)
                                }
                            var m = s.updateQueue;
                            m !== null && am(s, m, c);
                            break;
                        case 3:
                            var w = s.updateQueue;
                            if (w !== null) {
                                if (o = null, s.child !== null) switch (s.child.tag) {
                                    case 5:
                                        o = s.child.stateNode;
                                        break;
                                    case 1:
                                        o = s.child.stateNode
                                }
                                am(s, w, o)
                            }
                            break;
                        case 5:
                            var _ = s.stateNode;
                            if (o === null && s.flags & 4) {
                                o = _;
                                var P = s.memoizedProps;
                                switch (s.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        P.autoFocus && o.focus();
                                        break;
                                    case "img":
                                        P.src && (o.src = P.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (s.memoizedState === null) {
                                var z = s.alternate;
                                if (z !== null) {
                                    var q = z.memoizedState;
                                    if (q !== null) {
                                        var H = q.dehydrated;
                                        H !== null && $i(H)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(r(163))
                    }
                    xt || s.flags & 512 && Bc(s)
                } catch ($) {
                    Ke(s, s.return, $)
                }
            }
            if (s === n) {
                ee = null;
                break
            }
            if (o = s.sibling, o !== null) {
                o.return = s.return, ee = o;
                break
            }
            ee = s.return
        }
    }

    function ag(n) {
        for (; ee !== null;) {
            var s = ee;
            if (s === n) {
                ee = null;
                break
            }
            var o = s.sibling;
            if (o !== null) {
                o.return = s.return, ee = o;
                break
            }
            ee = s.return
        }
    }

    function lg(n) {
        for (; ee !== null;) {
            var s = ee;
            try {
                switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var o = s.return;
                        try {
                            Ja(4, s)
                        } catch (P) {
                            Ke(s, o, P)
                        }
                        break;
                    case 1:
                        var c = s.stateNode;
                        if (typeof c.componentDidMount == "function") {
                            var f = s.return;
                            try {
                                c.componentDidMount()
                            } catch (P) {
                                Ke(s, f, P)
                            }
                        }
                        var m = s.return;
                        try {
                            Bc(s)
                        } catch (P) {
                            Ke(s, m, P)
                        }
                        break;
                    case 5:
                        var w = s.return;
                        try {
                            Bc(s)
                        } catch (P) {
                            Ke(s, w, P)
                        }
                }
            } catch (P) {
                Ke(s, s.return, P)
            }
            if (s === n) {
                ee = null;
                break
            }
            var _ = s.sibling;
            if (_ !== null) {
                _.return = s.return, ee = _;
                break
            }
            ee = s.return
        }
    }
    var ib = Math.ceil,
        Za = M.ReactCurrentDispatcher,
        Vc = M.ReactCurrentOwner,
        Zt = M.ReactCurrentBatchConfig,
        Me = 0,
        ut = null,
        et = null,
        ht = 0,
        Ht = 0,
        Qs = ar(0),
        st = 0,
        ho = null,
        Gr = 0,
        el = 0,
        Uc = 0,
        po = null,
        Nt = null,
        $c = 0,
        Gs = 1 / 0,
        Vn = null,
        tl = !1,
        Wc = null,
        hr = null,
        nl = !1,
        pr = null,
        rl = 0,
        mo = 0,
        qc = null,
        sl = -1,
        il = 0;

    function Ct() {
        return (Me & 6) !== 0 ? Ye() : sl !== -1 ? sl : sl = Ye()
    }

    function mr(n) {
        return (n.mode & 1) === 0 ? 1 : (Me & 2) !== 0 && ht !== 0 ? ht & -ht : US.transition !== null ? (il === 0 && (il = tp()), il) : (n = Fe, n !== 0 || (n = window.event, n = n === void 0 ? 16 : cp(n.type)), n)
    }

    function pn(n, s, o, c) {
        if (50 < mo) throw mo = 0, qc = null, Error(r(185));
        Bi(n, o, c), ((Me & 2) === 0 || n !== ut) && (n === ut && ((Me & 2) === 0 && (el |= o), st === 4 && gr(n, ht)), Lt(n, c), o === 1 && Me === 0 && (s.mode & 1) === 0 && (Gs = Ye() + 500, ja && ur()))
    }

    function Lt(n, s) {
        var o = n.callbackNode;
        U1(n, s);
        var c = pa(n, n === ut ? ht : 0);
        if (c === 0) o !== null && Jh(o), n.callbackNode = null, n.callbackPriority = 0;
        else if (s = c & -c, n.callbackPriority !== s) {
            if (o != null && Jh(o), s === 1) n.tag === 0 ? VS(cg.bind(null, n)) : Gp(cg.bind(null, n)), DS(function() {
                (Me & 6) === 0 && ur()
            }), o = null;
            else {
                switch (np(c)) {
                    case 1:
                        o = ku;
                        break;
                    case 4:
                        o = Zh;
                        break;
                    case 16:
                        o = ca;
                        break;
                    case 536870912:
                        o = ep;
                        break;
                    default:
                        o = ca
                }
                o = vg(o, ug.bind(null, n))
            }
            n.callbackPriority = s, n.callbackNode = o
        }
    }

    function ug(n, s) {
        if (sl = -1, il = 0, (Me & 6) !== 0) throw Error(r(327));
        var o = n.callbackNode;
        if (Ys() && n.callbackNode !== o) return null;
        var c = pa(n, n === ut ? ht : 0);
        if (c === 0) return null;
        if ((c & 30) !== 0 || (c & n.expiredLanes) !== 0 || s) s = ol(n, c);
        else {
            s = c;
            var f = Me;
            Me |= 2;
            var m = fg();
            (ut !== n || ht !== s) && (Vn = null, Gs = Ye() + 500, Xr(n, s));
            do try {
                lb();
                break
            } catch (_) {
                dg(n, _)
            }
            while (!0);
            uc(), Za.current = m, Me = f, et !== null ? s = 0 : (ut = null, ht = 0, s = st)
        }
        if (s !== 0) {
            if (s === 2 && (f = _u(n), f !== 0 && (c = f, s = Hc(n, f))), s === 1) throw o = ho, Xr(n, 0), gr(n, c), Lt(n, Ye()), o;
            if (s === 6) gr(n, c);
            else {
                if (f = n.current.alternate, (c & 30) === 0 && !ob(f) && (s = ol(n, c), s === 2 && (m = _u(n), m !== 0 && (c = m, s = Hc(n, m))), s === 1)) throw o = ho, Xr(n, 0), gr(n, c), Lt(n, Ye()), o;
                switch (n.finishedWork = f, n.finishedLanes = c, s) {
                    case 0:
                    case 1:
                        throw Error(r(345));
                    case 2:
                        Jr(n, Nt, Vn);
                        break;
                    case 3:
                        if (gr(n, c), (c & 130023424) === c && (s = $c + 500 - Ye(), 10 < s)) {
                            if (pa(n, 0) !== 0) break;
                            if (f = n.suspendedLanes, (f & c) !== c) {
                                Ct(), n.pingedLanes |= n.suspendedLanes & f;
                                break
                            }
                            n.timeoutHandle = Ju(Jr.bind(null, n, Nt, Vn), s);
                            break
                        }
                        Jr(n, Nt, Vn);
                        break;
                    case 4:
                        if (gr(n, c), (c & 4194240) === c) break;
                        for (s = n.eventTimes, f = -1; 0 < c;) {
                            var w = 31 - ln(c);
                            m = 1 << w, w = s[w], w > f && (f = w), c &= ~m
                        }
                        if (c = f, c = Ye() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * ib(c / 1960)) - c, 10 < c) {
                            n.timeoutHandle = Ju(Jr.bind(null, n, Nt, Vn), c);
                            break
                        }
                        Jr(n, Nt, Vn);
                        break;
                    case 5:
                        Jr(n, Nt, Vn);
                        break;
                    default:
                        throw Error(r(329))
                }
            }
        }
        return Lt(n, Ye()), n.callbackNode === o ? ug.bind(null, n) : null
    }

    function Hc(n, s) {
        var o = po;
        return n.current.memoizedState.isDehydrated && (Xr(n, s).flags |= 256), n = ol(n, s), n !== 2 && (s = Nt, Nt = o, s !== null && Kc(s)), n
    }

    function Kc(n) {
        Nt === null ? Nt = n : Nt.push.apply(Nt, n)
    }

    function ob(n) {
        for (var s = n;;) {
            if (s.flags & 16384) {
                var o = s.updateQueue;
                if (o !== null && (o = o.stores, o !== null))
                    for (var c = 0; c < o.length; c++) {
                        var f = o[c],
                            m = f.getSnapshot;
                        f = f.value;
                        try {
                            if (!un(m(), f)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = s.child, s.subtreeFlags & 16384 && o !== null) o.return = s, s = o;
            else {
                if (s === n) break;
                for (; s.sibling === null;) {
                    if (s.return === null || s.return === n) return !0;
                    s = s.return
                }
                s.sibling.return = s.return, s = s.sibling
            }
        }
        return !0
    }

    function gr(n, s) {
        for (s &= ~Uc, s &= ~el, n.suspendedLanes |= s, n.pingedLanes &= ~s, n = n.expirationTimes; 0 < s;) {
            var o = 31 - ln(s),
                c = 1 << o;
            n[o] = -1, s &= ~c
        }
    }

    function cg(n) {
        if ((Me & 6) !== 0) throw Error(r(327));
        Ys();
        var s = pa(n, 0);
        if ((s & 1) === 0) return Lt(n, Ye()), null;
        var o = ol(n, s);
        if (n.tag !== 0 && o === 2) {
            var c = _u(n);
            c !== 0 && (s = c, o = Hc(n, c))
        }
        if (o === 1) throw o = ho, Xr(n, 0), gr(n, s), Lt(n, Ye()), o;
        if (o === 6) throw Error(r(345));
        return n.finishedWork = n.current.alternate, n.finishedLanes = s, Jr(n, Nt, Vn), Lt(n, Ye()), null
    }

    function Qc(n, s) {
        var o = Me;
        Me |= 1;
        try {
            return n(s)
        } finally {
            Me = o, Me === 0 && (Gs = Ye() + 500, ja && ur())
        }
    }

    function Yr(n) {
        pr !== null && pr.tag === 0 && (Me & 6) === 0 && Ys();
        var s = Me;
        Me |= 1;
        var o = Zt.transition,
            c = Fe;
        try {
            if (Zt.transition = null, Fe = 1, n) return n()
        } finally {
            Fe = c, Zt.transition = o, Me = s, (Me & 6) === 0 && ur()
        }
    }

    function Gc() {
        Ht = Qs.current, ze(Qs)
    }

    function Xr(n, s) {
        n.finishedWork = null, n.finishedLanes = 0;
        var o = n.timeoutHandle;
        if (o !== -1 && (n.timeoutHandle = -1, LS(o)), et !== null)
            for (o = et.return; o !== null;) {
                var c = o;
                switch (sc(c), c.tag) {
                    case 1:
                        c = c.type.childContextTypes, c != null && Ma();
                        break;
                    case 3:
                        qs(), ze(Ot), ze(yt), yc();
                        break;
                    case 5:
                        mc(c);
                        break;
                    case 4:
                        qs();
                        break;
                    case 13:
                        ze(We);
                        break;
                    case 19:
                        ze(We);
                        break;
                    case 10:
                        cc(c.type._context);
                        break;
                    case 22:
                    case 23:
                        Gc()
                }
                o = o.return
            }
        if (ut = n, et = n = yr(n.current, null), ht = Ht = s, st = 0, ho = null, Uc = el = Gr = 0, Nt = po = null, Hr !== null) {
            for (s = 0; s < Hr.length; s++)
                if (o = Hr[s], c = o.interleaved, c !== null) {
                    o.interleaved = null;
                    var f = c.next,
                        m = o.pending;
                    if (m !== null) {
                        var w = m.next;
                        m.next = f, c.next = w
                    }
                    o.pending = c
                }
            Hr = null
        }
        return n
    }

    function dg(n, s) {
        do {
            var o = et;
            try {
                if (uc(), $a.current = Ka, Wa) {
                    for (var c = qe.memoizedState; c !== null;) {
                        var f = c.queue;
                        f !== null && (f.pending = null), c = c.next
                    }
                    Wa = !1
                }
                if (Qr = 0, lt = rt = qe = null, oo = !1, ao = 0, Vc.current = null, o === null || o.return === null) {
                    st = 1, ho = s, et = null;
                    break
                }
                e: {
                    var m = n,
                        w = o.return,
                        _ = o,
                        P = s;
                    if (s = ht, _.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
                        var z = P,
                            q = _,
                            H = q.tag;
                        if ((q.mode & 1) === 0 && (H === 0 || H === 11 || H === 15)) {
                            var $ = q.alternate;
                            $ ? (q.updateQueue = $.updateQueue, q.memoizedState = $.memoizedState, q.lanes = $.lanes) : (q.updateQueue = null, q.memoizedState = null)
                        }
                        var X = Lm(w);
                        if (X !== null) {
                            X.flags &= -257, Dm(X, w, _, m, s), X.mode & 1 && Nm(m, z, s), s = X, P = z;
                            var te = s.updateQueue;
                            if (te === null) {
                                var ie = new Set;
                                ie.add(P), s.updateQueue = ie
                            } else te.add(P);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                Nm(m, z, s), Yc();
                                break e
                            }
                            P = Error(r(426))
                        }
                    } else if ($e && _.mode & 1) {
                        var Xe = Lm(w);
                        if (Xe !== null) {
                            (Xe.flags & 65536) === 0 && (Xe.flags |= 256), Dm(Xe, w, _, m, s), ac(Hs(P, _));
                            break e
                        }
                    }
                    m = P = Hs(P, _),
                    st !== 4 && (st = 2),
                    po === null ? po = [m] : po.push(m),
                    m = w;do {
                        switch (m.tag) {
                            case 3:
                                m.flags |= 65536, s &= -s, m.lanes |= s;
                                var L = jm(m, P, s);
                                om(m, L);
                                break e;
                            case 1:
                                _ = P;
                                var A = m.type,
                                    D = m.stateNode;
                                if ((m.flags & 128) === 0 && (typeof A.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (hr === null || !hr.has(D)))) {
                                    m.flags |= 65536, s &= -s, m.lanes |= s;
                                    var K = Fm(m, _, s);
                                    om(m, K);
                                    break e
                                }
                        }
                        m = m.return
                    } while (m !== null)
                }
                pg(o)
            } catch (ae) {
                s = ae, et === o && o !== null && (et = o = o.return);
                continue
            }
            break
        } while (!0)
    }

    function fg() {
        var n = Za.current;
        return Za.current = Ka, n === null ? Ka : n
    }

    function Yc() {
        (st === 0 || st === 3 || st === 2) && (st = 4), ut === null || (Gr & 268435455) === 0 && (el & 268435455) === 0 || gr(ut, ht)
    }

    function ol(n, s) {
        var o = Me;
        Me |= 2;
        var c = fg();
        (ut !== n || ht !== s) && (Vn = null, Xr(n, s));
        do try {
            ab();
            break
        } catch (f) {
            dg(n, f)
        }
        while (!0);
        if (uc(), Me = o, Za.current = c, et !== null) throw Error(r(261));
        return ut = null, ht = 0, st
    }

    function ab() {
        for (; et !== null;) hg(et)
    }

    function lb() {
        for (; et !== null && !j1();) hg(et)
    }

    function hg(n) {
        var s = yg(n.alternate, n, Ht);
        n.memoizedProps = n.pendingProps, s === null ? pg(n) : et = s, Vc.current = null
    }

    function pg(n) {
        var s = n;
        do {
            var o = s.alternate;
            if (n = s.return, (s.flags & 32768) === 0) {
                if (o = eb(o, s, Ht), o !== null) {
                    et = o;
                    return
                }
            } else {
                if (o = tb(o, s), o !== null) {
                    o.flags &= 32767, et = o;
                    return
                }
                if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
                else {
                    st = 6, et = null;
                    return
                }
            }
            if (s = s.sibling, s !== null) {
                et = s;
                return
            }
            et = s = n
        } while (s !== null);
        st === 0 && (st = 5)
    }

    function Jr(n, s, o) {
        var c = Fe,
            f = Zt.transition;
        try {
            Zt.transition = null, Fe = 1, ub(n, s, o, c)
        } finally {
            Zt.transition = f, Fe = c
        }
        return null
    }

    function ub(n, s, o, c) {
        do Ys(); while (pr !== null);
        if ((Me & 6) !== 0) throw Error(r(327));
        o = n.finishedWork;
        var f = n.finishedLanes;
        if (o === null) return null;
        if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(r(177));
        n.callbackNode = null, n.callbackPriority = 0;
        var m = o.lanes | o.childLanes;
        if ($1(n, m), n === ut && (et = ut = null, ht = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || nl || (nl = !0, vg(ca, function() {
                return Ys(), null
            })), m = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || m) {
            m = Zt.transition, Zt.transition = null;
            var w = Fe;
            Fe = 1;
            var _ = Me;
            Me |= 4, Vc.current = null, rb(n, o), sg(o, n), RS(Yu), ya = !!Gu, Yu = Gu = null, n.current = o, sb(o), F1(), Me = _, Fe = w, Zt.transition = m
        } else n.current = o;
        if (nl && (nl = !1, pr = n, rl = f), m = n.pendingLanes, m === 0 && (hr = null), D1(o.stateNode), Lt(n, Ye()), s !== null)
            for (c = n.onRecoverableError, o = 0; o < s.length; o++) f = s[o], c(f.value, {
                componentStack: f.stack,
                digest: f.digest
            });
        if (tl) throw tl = !1, n = Wc, Wc = null, n;
        return (rl & 1) !== 0 && n.tag !== 0 && Ys(), m = n.pendingLanes, (m & 1) !== 0 ? n === qc ? mo++ : (mo = 0, qc = n) : mo = 0, ur(), null
    }

    function Ys() {
        if (pr !== null) {
            var n = np(rl),
                s = Zt.transition,
                o = Fe;
            try {
                if (Zt.transition = null, Fe = 16 > n ? 16 : n, pr === null) var c = !1;
                else {
                    if (n = pr, pr = null, rl = 0, (Me & 6) !== 0) throw Error(r(331));
                    var f = Me;
                    for (Me |= 4, ee = n.current; ee !== null;) {
                        var m = ee,
                            w = m.child;
                        if ((ee.flags & 16) !== 0) {
                            var _ = m.deletions;
                            if (_ !== null) {
                                for (var P = 0; P < _.length; P++) {
                                    var z = _[P];
                                    for (ee = z; ee !== null;) {
                                        var q = ee;
                                        switch (q.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                fo(8, q, m)
                                        }
                                        var H = q.child;
                                        if (H !== null) H.return = q, ee = H;
                                        else
                                            for (; ee !== null;) {
                                                q = ee;
                                                var $ = q.sibling,
                                                    X = q.return;
                                                if (Zm(q), q === z) {
                                                    ee = null;
                                                    break
                                                }
                                                if ($ !== null) {
                                                    $.return = X, ee = $;
                                                    break
                                                }
                                                ee = X
                                            }
                                    }
                                }
                                var te = m.alternate;
                                if (te !== null) {
                                    var ie = te.child;
                                    if (ie !== null) {
                                        te.child = null;
                                        do {
                                            var Xe = ie.sibling;
                                            ie.sibling = null, ie = Xe
                                        } while (ie !== null)
                                    }
                                }
                                ee = m
                            }
                        }
                        if ((m.subtreeFlags & 2064) !== 0 && w !== null) w.return = m, ee = w;
                        else e: for (; ee !== null;) {
                            if (m = ee, (m.flags & 2048) !== 0) switch (m.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    fo(9, m, m.return)
                            }
                            var L = m.sibling;
                            if (L !== null) {
                                L.return = m.return, ee = L;
                                break e
                            }
                            ee = m.return
                        }
                    }
                    var A = n.current;
                    for (ee = A; ee !== null;) {
                        w = ee;
                        var D = w.child;
                        if ((w.subtreeFlags & 2064) !== 0 && D !== null) D.return = w, ee = D;
                        else e: for (w = A; ee !== null;) {
                            if (_ = ee, (_.flags & 2048) !== 0) try {
                                switch (_.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ja(9, _)
                                }
                            } catch (ae) {
                                Ke(_, _.return, ae)
                            }
                            if (_ === w) {
                                ee = null;
                                break e
                            }
                            var K = _.sibling;
                            if (K !== null) {
                                K.return = _.return, ee = K;
                                break e
                            }
                            ee = _.return
                        }
                    }
                    if (Me = f, ur(), xn && typeof xn.onPostCommitFiberRoot == "function") try {
                        xn.onPostCommitFiberRoot(da, n)
                    } catch {}
                    c = !0
                }
                return c
            } finally {
                Fe = o, Zt.transition = s
            }
        }
        return !1
    }

    function mg(n, s, o) {
        s = Hs(o, s), s = jm(n, s, 1), n = dr(n, s, 1), s = Ct(), n !== null && (Bi(n, 1, s), Lt(n, s))
    }

    function Ke(n, s, o) {
        if (n.tag === 3) mg(n, n, o);
        else
            for (; s !== null;) {
                if (s.tag === 3) {
                    mg(s, n, o);
                    break
                } else if (s.tag === 1) {
                    var c = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (hr === null || !hr.has(c))) {
                        n = Hs(o, n), n = Fm(s, n, 1), s = dr(s, n, 1), n = Ct(), s !== null && (Bi(s, 1, n), Lt(s, n));
                        break
                    }
                }
                s = s.return
            }
    }

    function cb(n, s, o) {
        var c = n.pingCache;
        c !== null && c.delete(s), s = Ct(), n.pingedLanes |= n.suspendedLanes & o, ut === n && (ht & o) === o && (st === 4 || st === 3 && (ht & 130023424) === ht && 500 > Ye() - $c ? Xr(n, 0) : Uc |= o), Lt(n, s)
    }

    function gg(n, s) {
        s === 0 && ((n.mode & 1) === 0 ? s = 1 : (s = ha, ha <<= 1, (ha & 130023424) === 0 && (ha = 4194304)));
        var o = Ct();
        n = Bn(n, s), n !== null && (Bi(n, s, o), Lt(n, o))
    }

    function db(n) {
        var s = n.memoizedState,
            o = 0;
        s !== null && (o = s.retryLane), gg(n, o)
    }

    function fb(n, s) {
        var o = 0;
        switch (n.tag) {
            case 13:
                var c = n.stateNode,
                    f = n.memoizedState;
                f !== null && (o = f.retryLane);
                break;
            case 19:
                c = n.stateNode;
                break;
            default:
                throw Error(r(314))
        }
        c !== null && c.delete(s), gg(n, o)
    }
    var yg;
    yg = function(n, s, o) {
        if (n !== null)
            if (n.memoizedProps !== s.pendingProps || Ot.current) Ft = !0;
            else {
                if ((n.lanes & o) === 0 && (s.flags & 128) === 0) return Ft = !1, ZS(n, s, o);
                Ft = (n.flags & 131072) !== 0
            }
        else Ft = !1, $e && (s.flags & 1048576) !== 0 && Yp(s, Na, s.index);
        switch (s.lanes = 0, s.tag) {
            case 2:
                var c = s.type;
                Ya(n, s), n = s.pendingProps;
                var f = Bs(s, yt.current);
                Ws(s, o), f = xc(null, s, c, n, f, o);
                var m = Sc();
                return s.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, jt(c) ? (m = !0, Oa(s)) : m = !1, s.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, hc(s), f.updater = Qa, s.stateNode = f, f._reactInternals = s, Tc(s, c, n, o), s = Mc(null, s, c, !0, m, o)) : (s.tag = 0, $e && m && rc(s), _t(null, s, f, o), s = s.child), s;
            case 16:
                c = s.elementType;
                e: {
                    switch (Ya(n, s), n = s.pendingProps, f = c._init, c = f(c._payload), s.type = c, f = s.tag = pb(c), n = dn(c, n), f) {
                        case 0:
                            s = Ac(null, s, c, n, o);
                            break e;
                        case 1:
                            s = $m(null, s, c, n, o);
                            break e;
                        case 11:
                            s = Bm(null, s, c, n, o);
                            break e;
                        case 14:
                            s = Im(null, s, c, dn(c.type, n), o);
                            break e
                    }
                    throw Error(r(306, c, ""))
                }
                return s;
            case 0:
                return c = s.type, f = s.pendingProps, f = s.elementType === c ? f : dn(c, f), Ac(n, s, c, f, o);
            case 1:
                return c = s.type, f = s.pendingProps, f = s.elementType === c ? f : dn(c, f), $m(n, s, c, f, o);
            case 3:
                e: {
                    if (Wm(s), n === null) throw Error(r(387));c = s.pendingProps,
                    m = s.memoizedState,
                    f = m.element,
                    im(n, s),
                    Va(s, c, null, o);
                    var w = s.memoizedState;
                    if (c = w.element, m.isDehydrated)
                        if (m = {
                                element: c,
                                isDehydrated: !1,
                                cache: w.cache,
                                pendingSuspenseBoundaries: w.pendingSuspenseBoundaries,
                                transitions: w.transitions
                            }, s.updateQueue.baseState = m, s.memoizedState = m, s.flags & 256) {
                            f = Hs(Error(r(423)), s), s = qm(n, s, c, o, f);
                            break e
                        } else if (c !== f) {
                        f = Hs(Error(r(424)), s), s = qm(n, s, c, o, f);
                        break e
                    } else
                        for (qt = or(s.stateNode.containerInfo.firstChild), Wt = s, $e = !0, cn = null, o = rm(s, null, c, o), s.child = o; o;) o.flags = o.flags & -3 | 4096, o = o.sibling;
                    else {
                        if (Vs(), c === f) {
                            s = zn(n, s, o);
                            break e
                        }
                        _t(n, s, c, o)
                    }
                    s = s.child
                }
                return s;
            case 5:
                return lm(s), n === null && oc(s), c = s.type, f = s.pendingProps, m = n !== null ? n.memoizedProps : null, w = f.children, Xu(c, f) ? w = null : m !== null && Xu(c, m) && (s.flags |= 32), Um(n, s), _t(n, s, w, o), s.child;
            case 6:
                return n === null && oc(s), null;
            case 13:
                return Hm(n, s, o);
            case 4:
                return pc(s, s.stateNode.containerInfo), c = s.pendingProps, n === null ? s.child = Us(s, null, c, o) : _t(n, s, c, o), s.child;
            case 11:
                return c = s.type, f = s.pendingProps, f = s.elementType === c ? f : dn(c, f), Bm(n, s, c, f, o);
            case 7:
                return _t(n, s, s.pendingProps, o), s.child;
            case 8:
                return _t(n, s, s.pendingProps.children, o), s.child;
            case 12:
                return _t(n, s, s.pendingProps.children, o), s.child;
            case 10:
                e: {
                    if (c = s.type._context, f = s.pendingProps, m = s.memoizedProps, w = f.value, Be(Ba, c._currentValue), c._currentValue = w, m !== null)
                        if (un(m.value, w)) {
                            if (m.children === f.children && !Ot.current) {
                                s = zn(n, s, o);
                                break e
                            }
                        } else
                            for (m = s.child, m !== null && (m.return = s); m !== null;) {
                                var _ = m.dependencies;
                                if (_ !== null) {
                                    w = m.child;
                                    for (var P = _.firstContext; P !== null;) {
                                        if (P.context === c) {
                                            if (m.tag === 1) {
                                                P = In(-1, o & -o), P.tag = 2;
                                                var z = m.updateQueue;
                                                if (z !== null) {
                                                    z = z.shared;
                                                    var q = z.pending;
                                                    q === null ? P.next = P : (P.next = q.next, q.next = P), z.pending = P
                                                }
                                            }
                                            m.lanes |= o, P = m.alternate, P !== null && (P.lanes |= o), dc(m.return, o, s), _.lanes |= o;
                                            break
                                        }
                                        P = P.next
                                    }
                                } else if (m.tag === 10) w = m.type === s.type ? null : m.child;
                                else if (m.tag === 18) {
                                    if (w = m.return, w === null) throw Error(r(341));
                                    w.lanes |= o, _ = w.alternate, _ !== null && (_.lanes |= o), dc(w, o, s), w = m.sibling
                                } else w = m.child;
                                if (w !== null) w.return = m;
                                else
                                    for (w = m; w !== null;) {
                                        if (w === s) {
                                            w = null;
                                            break
                                        }
                                        if (m = w.sibling, m !== null) {
                                            m.return = w.return, w = m;
                                            break
                                        }
                                        w = w.return
                                    }
                                m = w
                            }
                    _t(n, s, f.children, o),
                    s = s.child
                }
                return s;
            case 9:
                return f = s.type, c = s.pendingProps.children, Ws(s, o), f = Xt(f), c = c(f), s.flags |= 1, _t(n, s, c, o), s.child;
            case 14:
                return c = s.type, f = dn(c, s.pendingProps), f = dn(c.type, f), Im(n, s, c, f, o);
            case 15:
                return zm(n, s, s.type, s.pendingProps, o);
            case 17:
                return c = s.type, f = s.pendingProps, f = s.elementType === c ? f : dn(c, f), Ya(n, s), s.tag = 1, jt(c) ? (n = !0, Oa(s)) : n = !1, Ws(s, o), Mm(s, c, f), Tc(s, c, f, o), Mc(null, s, c, !0, n, o);
            case 19:
                return Qm(n, s, o);
            case 22:
                return Vm(n, s, o)
        }
        throw Error(r(156, s.tag))
    };

    function vg(n, s) {
        return Xh(n, s)
    }

    function hb(n, s, o, c) {
        this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function en(n, s, o, c) {
        return new hb(n, s, o, c)
    }

    function Xc(n) {
        return n = n.prototype, !(!n || !n.isReactComponent)
    }

    function pb(n) {
        if (typeof n == "function") return Xc(n) ? 1 : 0;
        if (n != null) {
            if (n = n.$$typeof, n === Re) return 11;
            if (n === Ne) return 14
        }
        return 2
    }

    function yr(n, s) {
        var o = n.alternate;
        return o === null ? (o = en(n.tag, s, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = s, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, s = n.dependencies, o.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o
    }

    function al(n, s, o, c, f, m) {
        var w = 2;
        if (c = n, typeof n == "function") Xc(n) && (w = 1);
        else if (typeof n == "string") w = 5;
        else e: switch (n) {
            case Y:
                return Zr(o.children, f, m, s);
            case I:
                w = 8, f |= 8;
                break;
            case J:
                return n = en(12, o, s, f | 2), n.elementType = J, n.lanes = m, n;
            case Ue:
                return n = en(13, o, s, f), n.elementType = Ue, n.lanes = m, n;
            case Te:
                return n = en(19, o, s, f), n.elementType = Te, n.lanes = m, n;
            case ge:
                return ll(o, f, m, s);
            default:
                if (typeof n == "object" && n !== null) switch (n.$$typeof) {
                    case de:
                        w = 10;
                        break e;
                    case ue:
                        w = 9;
                        break e;
                    case Re:
                        w = 11;
                        break e;
                    case Ne:
                        w = 14;
                        break e;
                    case Ae:
                        w = 16, c = null;
                        break e
                }
                throw Error(r(130, n == null ? n : typeof n, ""))
        }
        return s = en(w, o, s, f), s.elementType = n, s.type = c, s.lanes = m, s
    }

    function Zr(n, s, o, c) {
        return n = en(7, n, c, s), n.lanes = o, n
    }

    function ll(n, s, o, c) {
        return n = en(22, n, c, s), n.elementType = ge, n.lanes = o, n.stateNode = {
            isHidden: !1
        }, n
    }

    function Jc(n, s, o) {
        return n = en(6, n, null, s), n.lanes = o, n
    }

    function Zc(n, s, o) {
        return s = en(4, n.children !== null ? n.children : [], n.key, s), s.lanes = o, s.stateNode = {
            containerInfo: n.containerInfo,
            pendingChildren: null,
            implementation: n.implementation
        }, s
    }

    function mb(n, s, o, c, f) {
        this.tag = s, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Cu(0), this.expirationTimes = Cu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cu(0), this.identifierPrefix = c, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null
    }

    function ed(n, s, o, c, f, m, w, _, P) {
        return n = new mb(n, s, o, _, P), s === 1 ? (s = 1, m === !0 && (s |= 8)) : s = 0, m = en(3, null, null, s), n.current = m, m.stateNode = n, m.memoizedState = {
            element: c,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, hc(m), n
    }

    function gb(n, s, o) {
        var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: W,
            key: c == null ? null : "" + c,
            children: n,
            containerInfo: s,
            implementation: o
        }
    }

    function wg(n) {
        if (!n) return lr;
        n = n._reactInternals;
        e: {
            if (Vr(n) !== n || n.tag !== 1) throw Error(r(170));
            var s = n;do {
                switch (s.tag) {
                    case 3:
                        s = s.stateNode.context;
                        break e;
                    case 1:
                        if (jt(s.type)) {
                            s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                s = s.return
            } while (s !== null);
            throw Error(r(171))
        }
        if (n.tag === 1) {
            var o = n.type;
            if (jt(o)) return Kp(n, o, s)
        }
        return s
    }

    function xg(n, s, o, c, f, m, w, _, P) {
        return n = ed(o, c, !0, n, f, m, w, _, P), n.context = wg(null), o = n.current, c = Ct(), f = mr(o), m = In(c, f), m.callback = s ? ? null, dr(o, m, f), n.current.lanes = f, Bi(n, f, c), Lt(n, c), n
    }

    function ul(n, s, o, c) {
        var f = s.current,
            m = Ct(),
            w = mr(f);
        return o = wg(o), s.context === null ? s.context = o : s.pendingContext = o, s = In(m, w), s.payload = {
            element: n
        }, c = c === void 0 ? null : c, c !== null && (s.callback = c), n = dr(f, s, w), n !== null && (pn(n, f, w, m), za(n, f, w)), w
    }

    function cl(n) {
        if (n = n.current, !n.child) return null;
        switch (n.child.tag) {
            case 5:
                return n.child.stateNode;
            default:
                return n.child.stateNode
        }
    }

    function Sg(n, s) {
        if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
            var o = n.retryLane;
            n.retryLane = o !== 0 && o < s ? o : s
        }
    }

    function td(n, s) {
        Sg(n, s), (n = n.alternate) && Sg(n, s)
    }

    function yb() {
        return null
    }
    var bg = typeof reportError == "function" ? reportError : function(n) {
        console.error(n)
    };

    function nd(n) {
        this._internalRoot = n
    }
    dl.prototype.render = nd.prototype.render = function(n) {
        var s = this._internalRoot;
        if (s === null) throw Error(r(409));
        ul(n, s, null, null)
    }, dl.prototype.unmount = nd.prototype.unmount = function() {
        var n = this._internalRoot;
        if (n !== null) {
            this._internalRoot = null;
            var s = n.containerInfo;
            Yr(function() {
                ul(null, n, null, null)
            }), s[Fn] = null
        }
    };

    function dl(n) {
        this._internalRoot = n
    }
    dl.prototype.unstable_scheduleHydration = function(n) {
        if (n) {
            var s = ip();
            n = {
                blockedOn: null,
                target: n,
                priority: s
            };
            for (var o = 0; o < rr.length && s !== 0 && s < rr[o].priority; o++);
            rr.splice(o, 0, n), o === 0 && lp(n)
        }
    };

    function rd(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
    }

    function fl(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    }

    function Eg() {}

    function vb(n, s, o, c, f) {
        if (f) {
            if (typeof c == "function") {
                var m = c;
                c = function() {
                    var z = cl(w);
                    m.call(z)
                }
            }
            var w = xg(s, c, n, 0, null, !1, !1, "", Eg);
            return n._reactRootContainer = w, n[Fn] = w.current, Ji(n.nodeType === 8 ? n.parentNode : n), Yr(), w
        }
        for (; f = n.lastChild;) n.removeChild(f);
        if (typeof c == "function") {
            var _ = c;
            c = function() {
                var z = cl(P);
                _.call(z)
            }
        }
        var P = ed(n, 0, !1, null, null, !1, !1, "", Eg);
        return n._reactRootContainer = P, n[Fn] = P.current, Ji(n.nodeType === 8 ? n.parentNode : n), Yr(function() {
            ul(s, P, o, c)
        }), P
    }

    function hl(n, s, o, c, f) {
        var m = o._reactRootContainer;
        if (m) {
            var w = m;
            if (typeof f == "function") {
                var _ = f;
                f = function() {
                    var P = cl(w);
                    _.call(P)
                }
            }
            ul(s, w, n, f)
        } else w = vb(o, s, n, f, c);
        return cl(w)
    }
    rp = function(n) {
        switch (n.tag) {
            case 3:
                var s = n.stateNode;
                if (s.current.memoizedState.isDehydrated) {
                    var o = Di(s.pendingLanes);
                    o !== 0 && (Tu(s, o | 1), Lt(s, Ye()), (Me & 6) === 0 && (Gs = Ye() + 500, ur()))
                }
                break;
            case 13:
                Yr(function() {
                    var c = Bn(n, 1);
                    if (c !== null) {
                        var f = Ct();
                        pn(c, n, 1, f)
                    }
                }), td(n, 1)
        }
    }, Pu = function(n) {
        if (n.tag === 13) {
            var s = Bn(n, 134217728);
            if (s !== null) {
                var o = Ct();
                pn(s, n, 134217728, o)
            }
            td(n, 134217728)
        }
    }, sp = function(n) {
        if (n.tag === 13) {
            var s = mr(n),
                o = Bn(n, s);
            if (o !== null) {
                var c = Ct();
                pn(o, n, s, c)
            }
            td(n, s)
        }
    }, ip = function() {
        return Fe
    }, op = function(n, s) {
        var o = Fe;
        try {
            return Fe = n, s()
        } finally {
            Fe = o
        }
    }, xu = function(n, s, o) {
        switch (s) {
            case "input":
                if (jn(n, o), s = o.name, o.type === "radio" && s != null) {
                    for (o = n; o.parentNode;) o = o.parentNode;
                    for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'), s = 0; s < o.length; s++) {
                        var c = o[s];
                        if (c !== n && c.form === n.form) {
                            var f = Aa(c);
                            if (!f) throw Error(r(90));
                            at(c), jn(c, f)
                        }
                    }
                }
                break;
            case "textarea":
                Nh(n, o);
                break;
            case "select":
                s = o.value, s != null && Cs(n, !!o.multiple, s, !1)
        }
    }, Wh = Qc, qh = Yr;
    var wb = {
            usingClientEntryPoint: !1,
            Events: [to, Ls, Aa, Uh, $h, Qc]
        },
        go = {
            findFiberByHostInstance: Ur,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        xb = {
            bundleType: go.bundleType,
            version: go.version,
            rendererPackageName: go.rendererPackageName,
            rendererConfig: go.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: M.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(n) {
                return n = Gh(n), n === null ? null : n.stateNode
            },
            findFiberByHostInstance: go.findFiberByHostInstance || yb,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!pl.isDisabled && pl.supportsFiber) try {
            da = pl.inject(xb), xn = pl
        } catch {}
    }
    return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wb, Dt.createPortal = function(n, s) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!rd(s)) throw Error(r(200));
        return gb(n, s, null, o)
    }, Dt.createRoot = function(n, s) {
        if (!rd(n)) throw Error(r(299));
        var o = !1,
            c = "",
            f = bg;
        return s != null && (s.unstable_strictMode === !0 && (o = !0), s.identifierPrefix !== void 0 && (c = s.identifierPrefix), s.onRecoverableError !== void 0 && (f = s.onRecoverableError)), s = ed(n, 1, !1, null, null, o, !1, c, f), n[Fn] = s.current, Ji(n.nodeType === 8 ? n.parentNode : n), new nd(s)
    }, Dt.findDOMNode = function(n) {
        if (n == null) return null;
        if (n.nodeType === 1) return n;
        var s = n._reactInternals;
        if (s === void 0) throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","), Error(r(268, n)));
        return n = Gh(s), n = n === null ? null : n.stateNode, n
    }, Dt.flushSync = function(n) {
        return Yr(n)
    }, Dt.hydrate = function(n, s, o) {
        if (!fl(s)) throw Error(r(200));
        return hl(null, n, s, !0, o)
    }, Dt.hydrateRoot = function(n, s, o) {
        if (!rd(n)) throw Error(r(405));
        var c = o != null && o.hydratedSources || null,
            f = !1,
            m = "",
            w = bg;
        if (o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (m = o.identifierPrefix), o.onRecoverableError !== void 0 && (w = o.onRecoverableError)), s = xg(s, null, n, 1, o ? ? null, f, !1, m, w), n[Fn] = s.current, Ji(n), c)
            for (n = 0; n < c.length; n++) o = c[n], f = o._getVersion, f = f(o._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [o, f] : s.mutableSourceEagerHydrationData.push(o, f);
        return new dl(s)
    }, Dt.render = function(n, s, o) {
        if (!fl(s)) throw Error(r(200));
        return hl(null, n, s, !1, o)
    }, Dt.unmountComponentAtNode = function(n) {
        if (!fl(n)) throw Error(r(40));
        return n._reactRootContainer ? (Yr(function() {
            hl(null, null, n, !1, function() {
                n._reactRootContainer = null, n[Fn] = null
            })
        }), !0) : !1
    }, Dt.unstable_batchedUpdates = Qc, Dt.unstable_renderSubtreeIntoContainer = function(n, s, o, c) {
        if (!fl(o)) throw Error(r(200));
        if (n == null || n._reactInternals === void 0) throw Error(r(38));
        return hl(n, s, o, !1, c)
    }, Dt.version = "18.3.1-next-f1338f8080-20240426", Dt
}
var Og;

function wv() {
    if (Og) return ad.exports;
    Og = 1;

    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch (e) {
            console.error(e)
        }
    }
    return t(), ad.exports = Ab(), ad.exports
}
var jg;

function Mb() {
    if (jg) return gl;
    jg = 1;
    var t = wv();
    return gl.createRoot = t.createRoot, gl.hydrateRoot = t.hydrateRoot, gl
}
var Ob = Mb();
const jb = vv(Ob),
    Fb = 20,
    Nb = 1e6,
    Gn = {
        ADD_TOAST: "ADD_TOAST",
        UPDATE_TOAST: "UPDATE_TOAST",
        DISMISS_TOAST: "DISMISS_TOAST",
        REMOVE_TOAST: "REMOVE_TOAST"
    };
let cd = 0;

function Lb() {
    return cd = (cd + 1) % Number.MAX_VALUE, cd.toString()
}
const dd = new Map,
    Fg = t => {
        if (dd.has(t)) return;
        const e = setTimeout(() => {
            dd.delete(t), Ao({
                type: Gn.REMOVE_TOAST,
                toastId: t
            })
        }, Nb);
        dd.set(t, e)
    },
    Db = (t, e) => {
        switch (e.type) {
            case Gn.ADD_TOAST:
                return { ...t,
                    toasts: [e.toast, ...t.toasts].slice(0, Fb)
                };
            case Gn.UPDATE_TOAST:
                return { ...t,
                    toasts: t.toasts.map(r => r.id === e.toast.id ? { ...r,
                        ...e.toast
                    } : r)
                };
            case Gn.DISMISS_TOAST:
                {
                    const {
                        toastId: r
                    } = e;
                    return r ? Fg(r) : t.toasts.forEach(i => {
                        Fg(i.id)
                    }),
                    { ...t,
                        toasts: t.toasts.map(i => i.id === r || r === void 0 ? { ...i,
                            open: !1
                        } : i)
                    }
                }
            case Gn.REMOVE_TOAST:
                return e.toastId === void 0 ? { ...t,
                    toasts: []
                } : { ...t,
                    toasts: t.toasts.filter(r => r.id !== e.toastId)
                }
        }
    },
    Tl = [];
let Pl = {
    toasts: []
};

function Ao(t) {
    Pl = Db(Pl, t), Tl.forEach(e => {
        e(Pl)
    })
}

function Bb({ ...t
}) {
    const e = Lb(),
        r = a => Ao({
            type: Gn.UPDATE_TOAST,
            toast: { ...a,
                id: e
            }
        }),
        i = () => Ao({
            type: Gn.DISMISS_TOAST,
            toastId: e
        });
    return Ao({
        type: Gn.ADD_TOAST,
        toast: { ...t,
            id: e,
            open: !0,
            onOpenChange: a => {
                a || i()
            }
        }
    }), {
        id: e,
        dismiss: i,
        update: r
    }
}

function Ib() {
    const [t, e] = F.useState(Pl);
    return F.useEffect(() => (Tl.push(e), () => {
        const r = Tl.indexOf(e);
        r > -1 && Tl.splice(r, 1)
    }), [t]), { ...t,
        toast: Bb,
        dismiss: r => Ao({
            type: Gn.DISMISS_TOAST,
            toastId: r
        })
    }
}

function xv(t) {
    var e, r, i = "";
    if (typeof t == "string" || typeof t == "number") i += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var a = t.length;
            for (e = 0; e < a; e++) t[e] && (r = xv(t[e])) && (i && (i += " "), i += r)
        } else
            for (r in t) t[r] && (i && (i += " "), i += r);
    return i
}

function Sv() {
    for (var t, e, r = 0, i = "", a = arguments.length; r < a; r++)(t = arguments[r]) && (e = xv(t)) && (i && (i += " "), i += e);
    return i
}
const Ng = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t,
    Lg = Sv,
    zb = (t, e) => r => {
        var i;
        if ((e == null ? void 0 : e.variants) == null) return Lg(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
        const {
            variants: a,
            defaultVariants: l
        } = e, u = Object.keys(a).map(p => {
            const g = r == null ? void 0 : r[p],
                y = l == null ? void 0 : l[p];
            if (g === null) return null;
            const x = Ng(g) || Ng(y);
            return a[p][x]
        }), d = r && Object.entries(r).reduce((p, g) => {
            let [y, x] = g;
            return x === void 0 || (p[y] = x), p
        }, {}), h = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((p, g) => {
            let {
                class: y,
                className: x,
                ...E
            } = g;
            return Object.entries(E).every(T => {
                let [b, S] = T;
                return Array.isArray(S) ? S.includes({ ...l,
                    ...d
                }[b]) : { ...l,
                    ...d
                }[b] === S
            }) ? [...p, y, x] : p
        }, []);
        return Lg(t, u, h, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
    };
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vb = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    bv = (...t) => t.filter((e, r, i) => !!e && e.trim() !== "" && i.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ub = {
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
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $b = F.forwardRef(({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: i,
    className: a = "",
    children: l,
    iconNode: u,
    ...d
}, h) => F.createElement("svg", {
    ref: h,
    ...Ub,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(r) * 24 / Number(e) : r,
    className: bv("lucide", a),
    ...d
}, [...u.map(([p, g]) => F.createElement(p, g)), ...Array.isArray(l) ? l : [l]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const an = (t, e) => {
    const r = F.forwardRef(({
        className: i,
        ...a
    }, l) => F.createElement($b, {
        ref: l,
        iconNode: e,
        className: bv(`lucide-${Vb(t)}`, i),
        ...a
    }));
    return r.displayName = `${t}`, r
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wb = [
        ["path", {
            d: "M12 5v14",
            key: "s699le"
        }],
        ["path", {
            d: "m19 12-7 7-7-7",
            key: "1idqje"
        }]
    ],
    qb = an("ArrowDown", Wb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hb = [
        ["path", {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }],
        ["path", {
            d: "M19 12H5",
            key: "x3x0zl"
        }]
    ],
    Kb = an("ArrowLeft", Hb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qb = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ],
    Ev = an("ArrowRight", Qb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gb = [
        ["rect", {
            width: "16",
            height: "20",
            x: "4",
            y: "2",
            rx: "2",
            key: "1nb95v"
        }],
        ["line", {
            x1: "8",
            x2: "16",
            y1: "6",
            y2: "6",
            key: "x4nwl0"
        }],
        ["line", {
            x1: "16",
            x2: "16",
            y1: "14",
            y2: "18",
            key: "wjye3r"
        }],
        ["path", {
            d: "M16 10h.01",
            key: "1m94wz"
        }],
        ["path", {
            d: "M12 10h.01",
            key: "1nrarc"
        }],
        ["path", {
            d: "M8 10h.01",
            key: "19clt8"
        }],
        ["path", {
            d: "M12 14h.01",
            key: "1etili"
        }],
        ["path", {
            d: "M8 14h.01",
            key: "6423bh"
        }],
        ["path", {
            d: "M12 18h.01",
            key: "mhygvu"
        }],
        ["path", {
            d: "M8 18h.01",
            key: "lrp35t"
        }]
    ],
    Yb = an("Calculator", Gb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xb = [
        ["path", {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }],
        ["path", {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }]
    ],
    Jb = an("CircleCheckBig", Xb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zb = [
        ["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]
    ],
    eE = an("Menu", Zb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tE = [
        ["circle", {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w"
        }],
        ["circle", {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f"
        }],
        ["circle", {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn"
        }],
        ["circle", {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx"
        }],
        ["path", {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
            key: "12rzf8"
        }]
    ],
    nE = an("Palette", tE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rE = [
        ["path", {
            d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
            key: "icamh8"
        }],
        ["path", {
            d: "m14.5 12.5 2-2",
            key: "inckbg"
        }],
        ["path", {
            d: "m11.5 9.5 2-2",
            key: "fmmyf7"
        }],
        ["path", {
            d: "m8.5 6.5 2-2",
            key: "vc6u1g"
        }],
        ["path", {
            d: "m17.5 15.5 2-2",
            key: "wo5hmg"
        }]
    ],
    sE = an("Ruler", rE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iE = [
        ["path", {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }],
        ["path", {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }]
    ],
    oE = an("Send", iE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aE = [
        ["path", {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }],
        ["path", {
            d: "M20 3v4",
            key: "1olli1"
        }],
        ["path", {
            d: "M22 5h-4",
            key: "1gvqau"
        }],
        ["path", {
            d: "M4 17v2",
            key: "vumght"
        }],
        ["path", {
            d: "M5 18H3",
            key: "zchphs"
        }]
    ],
    lE = an("Sparkles", aE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uE = [
        ["path", {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
            key: "cbrjhi"
        }]
    ],
    cE = an("Wrench", uE);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dE = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    kv = an("X", dE),
    fE = (t, e) => {
        const r = new Array(t.length + e.length);
        for (let i = 0; i < t.length; i++) r[i] = t[i];
        for (let i = 0; i < e.length; i++) r[t.length + i] = e[i];
        return r
    },
    hE = (t, e) => ({
        classGroupId: t,
        validator: e
    }),
    _v = (t = new Map, e = null, r) => ({
        nextPart: t,
        validators: e,
        classGroupId: r
    }),
    zl = "-",
    Dg = [],
    pE = "arbitrary..",
    mE = t => {
        const e = yE(t),
            {
                conflictingClassGroups: r,
                conflictingClassGroupModifiers: i
            } = t;
        return {
            getClassGroupId: u => {
                if (u.startsWith("[") && u.endsWith("]")) return gE(u);
                const d = u.split(zl),
                    h = d[0] === "" && d.length > 1 ? 1 : 0;
                return Cv(d, h, e)
            },
            getConflictingClassGroupIds: (u, d) => {
                if (d) {
                    const h = i[u],
                        p = r[u];
                    return h ? p ? fE(p, h) : h : p || Dg
                }
                return r[u] || Dg
            }
        }
    },
    Cv = (t, e, r) => {
        if (t.length - e === 0) return r.classGroupId;
        const a = t[e],
            l = r.nextPart.get(a);
        if (l) {
            const p = Cv(t, e + 1, l);
            if (p) return p
        }
        const u = r.validators;
        if (u === null) return;
        const d = e === 0 ? t.join(zl) : t.slice(e).join(zl),
            h = u.length;
        for (let p = 0; p < h; p++) {
            const g = u[p];
            if (g.validator(d)) return g.classGroupId
        }
    },
    gE = t => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
        const e = t.slice(1, -1),
            r = e.indexOf(":"),
            i = e.slice(0, r);
        return i ? pE + i : void 0
    })(),
    yE = t => {
        const {
            theme: e,
            classGroups: r
        } = t;
        return vE(r, e)
    },
    vE = (t, e) => {
        const r = _v();
        for (const i in t) {
            const a = t[i];
            Of(a, r, i, e)
        }
        return r
    },
    Of = (t, e, r, i) => {
        const a = t.length;
        for (let l = 0; l < a; l++) {
            const u = t[l];
            wE(u, e, r, i)
        }
    },
    wE = (t, e, r, i) => {
        if (typeof t == "string") {
            xE(t, e, r);
            return
        }
        if (typeof t == "function") {
            SE(t, e, r, i);
            return
        }
        bE(t, e, r, i)
    },
    xE = (t, e, r) => {
        const i = t === "" ? e : Tv(e, t);
        i.classGroupId = r
    },
    SE = (t, e, r, i) => {
        if (EE(t)) {
            Of(t(i), e, r, i);
            return
        }
        e.validators === null && (e.validators = []), e.validators.push(hE(r, t))
    },
    bE = (t, e, r, i) => {
        const a = Object.entries(t),
            l = a.length;
        for (let u = 0; u < l; u++) {
            const [d, h] = a[u];
            Of(h, Tv(e, d), r, i)
        }
    },
    Tv = (t, e) => {
        let r = t;
        const i = e.split(zl),
            a = i.length;
        for (let l = 0; l < a; l++) {
            const u = i[l];
            let d = r.nextPart.get(u);
            d || (d = _v(), r.nextPart.set(u, d)), r = d
        }
        return r
    },
    EE = t => "isThemeGetter" in t && t.isThemeGetter === !0,
    kE = t => {
        if (t < 1) return {
            get: () => {},
            set: () => {}
        };
        let e = 0,
            r = Object.create(null),
            i = Object.create(null);
        const a = (l, u) => {
            r[l] = u, e++, e > t && (e = 0, i = r, r = Object.create(null))
        };
        return {
            get(l) {
                let u = r[l];
                if (u !== void 0) return u;
                if ((u = i[l]) !== void 0) return a(l, u), u
            },
            set(l, u) {
                l in r ? r[l] = u : a(l, u)
            }
        }
    },
    Dd = "!",
    Bg = ":",
    _E = [],
    Ig = (t, e, r, i, a) => ({
        modifiers: t,
        hasImportantModifier: e,
        baseClassName: r,
        maybePostfixModifierPosition: i,
        isExternal: a
    }),
    CE = t => {
        const {
            prefix: e,
            experimentalParseClassName: r
        } = t;
        let i = a => {
            const l = [];
            let u = 0,
                d = 0,
                h = 0,
                p;
            const g = a.length;
            for (let b = 0; b < g; b++) {
                const S = a[b];
                if (u === 0 && d === 0) {
                    if (S === Bg) {
                        l.push(a.slice(h, b)), h = b + 1;
                        continue
                    }
                    if (S === "/") {
                        p = b;
                        continue
                    }
                }
                S === "[" ? u++ : S === "]" ? u-- : S === "(" ? d++ : S === ")" && d--
            }
            const y = l.length === 0 ? a : a.slice(h);
            let x = y,
                E = !1;
            y.endsWith(Dd) ? (x = y.slice(0, -1), E = !0) : y.startsWith(Dd) && (x = y.slice(1), E = !0);
            const T = p && p > h ? p - h : void 0;
            return Ig(l, E, x, T)
        };
        if (e) {
            const a = e + Bg,
                l = i;
            i = u => u.startsWith(a) ? l(u.slice(a.length)) : Ig(_E, !1, u, void 0, !0)
        }
        if (r) {
            const a = i;
            i = l => r({
                className: l,
                parseClassName: a
            })
        }
        return i
    },
    TE = t => {
        const e = new Map;
        return t.orderSensitiveModifiers.forEach((r, i) => {
            e.set(r, 1e6 + i)
        }), r => {
            const i = [];
            let a = [];
            for (let l = 0; l < r.length; l++) {
                const u = r[l],
                    d = u[0] === "[",
                    h = e.has(u);
                d || h ? (a.length > 0 && (a.sort(), i.push(...a), a = []), i.push(u)) : a.push(u)
            }
            return a.length > 0 && (a.sort(), i.push(...a)), i
        }
    },
    PE = t => ({
        cache: kE(t.cacheSize),
        parseClassName: CE(t),
        sortModifiers: TE(t),
        ...mE(t)
    }),
    RE = /\s+/,
    AE = (t, e) => {
        const {
            parseClassName: r,
            getClassGroupId: i,
            getConflictingClassGroupIds: a,
            sortModifiers: l
        } = e, u = [], d = t.trim().split(RE);
        let h = "";
        for (let p = d.length - 1; p >= 0; p -= 1) {
            const g = d[p],
                {
                    isExternal: y,
                    modifiers: x,
                    hasImportantModifier: E,
                    baseClassName: T,
                    maybePostfixModifierPosition: b
                } = r(g);
            if (y) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            let S = !!b,
                k = i(S ? T.substring(0, b) : T);
            if (!k) {
                if (!S) {
                    h = g + (h.length > 0 ? " " + h : h);
                    continue
                }
                if (k = i(T), !k) {
                    h = g + (h.length > 0 ? " " + h : h);
                    continue
                }
                S = !1
            }
            const j = x.length === 0 ? "" : x.length === 1 ? x[0] : l(x).join(":"),
                R = E ? j + Dd : j,
                M = R + k;
            if (u.indexOf(M) > -1) continue;
            u.push(M);
            const B = a(k, S);
            for (let W = 0; W < B.length; ++W) {
                const Y = B[W];
                u.push(R + Y)
            }
            h = g + (h.length > 0 ? " " + h : h)
        }
        return h
    },
    ME = (...t) => {
        let e = 0,
            r, i, a = "";
        for (; e < t.length;)(r = t[e++]) && (i = Pv(r)) && (a && (a += " "), a += i);
        return a
    },
    Pv = t => {
        if (typeof t == "string") return t;
        let e, r = "";
        for (let i = 0; i < t.length; i++) t[i] && (e = Pv(t[i])) && (r && (r += " "), r += e);
        return r
    },
    OE = (t, ...e) => {
        let r, i, a, l;
        const u = h => {
                const p = e.reduce((g, y) => y(g), t());
                return r = PE(p), i = r.cache.get, a = r.cache.set, l = d, d(h)
            },
            d = h => {
                const p = i(h);
                if (p) return p;
                const g = AE(h, r);
                return a(h, g), g
            };
        return l = u, (...h) => l(ME(...h))
    },
    jE = [],
    it = t => {
        const e = r => r[t] || jE;
        return e.isThemeGetter = !0, e
    },
    Rv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    Av = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    FE = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    NE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    LE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    DE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    BE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    IE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    wr = t => FE.test(t),
    Ee = t => !!t && !Number.isNaN(Number(t)),
    xr = t => !!t && Number.isInteger(Number(t)),
    fd = t => t.endsWith("%") && Ee(t.slice(0, -1)),
    Un = t => NE.test(t),
    Mv = () => !0,
    zE = t => LE.test(t) && !DE.test(t),
    jf = () => !1,
    VE = t => BE.test(t),
    UE = t => IE.test(t),
    $E = t => !ne(t) && !re(t),
    WE = t => Ir(t, Fv, jf),
    ne = t => Rv.test(t),
    es = t => Ir(t, Nv, zE),
    zg = t => Ir(t, JE, Ee),
    qE = t => Ir(t, Dv, Mv),
    HE = t => Ir(t, Lv, jf),
    Vg = t => Ir(t, Ov, jf),
    KE = t => Ir(t, jv, UE),
    yl = t => Ir(t, Bv, VE),
    re = t => Av.test(t),
    vo = t => bs(t, Nv),
    QE = t => bs(t, Lv),
    Ug = t => bs(t, Ov),
    GE = t => bs(t, Fv),
    YE = t => bs(t, jv),
    vl = t => bs(t, Bv, !0),
    XE = t => bs(t, Dv, !0),
    Ir = (t, e, r) => {
        const i = Rv.exec(t);
        return i ? i[1] ? e(i[1]) : r(i[2]) : !1
    },
    bs = (t, e, r = !1) => {
        const i = Av.exec(t);
        return i ? i[1] ? e(i[1]) : r : !1
    },
    Ov = t => t === "position" || t === "percentage",
    jv = t => t === "image" || t === "url",
    Fv = t => t === "length" || t === "size" || t === "bg-size",
    Nv = t => t === "length",
    JE = t => t === "number",
    Lv = t => t === "family-name",
    Dv = t => t === "number" || t === "weight",
    Bv = t => t === "shadow",
    ZE = () => {
        const t = it("color"),
            e = it("font"),
            r = it("text"),
            i = it("font-weight"),
            a = it("tracking"),
            l = it("leading"),
            u = it("breakpoint"),
            d = it("container"),
            h = it("spacing"),
            p = it("radius"),
            g = it("shadow"),
            y = it("inset-shadow"),
            x = it("text-shadow"),
            E = it("drop-shadow"),
            T = it("blur"),
            b = it("perspective"),
            S = it("aspect"),
            k = it("ease"),
            j = it("animate"),
            R = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            M = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            B = () => [...M(), re, ne],
            W = () => ["auto", "hidden", "clip", "visible", "scroll"],
            Y = () => ["auto", "contain", "none"],
            I = () => [re, ne, h],
            J = () => [wr, "full", "auto", ...I()],
            de = () => [xr, "none", "subgrid", re, ne],
            ue = () => ["auto", {
                span: ["full", xr, re, ne]
            }, xr, re, ne],
            Re = () => [xr, "auto", re, ne],
            Ue = () => ["auto", "min", "max", "fr", re, ne],
            Te = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            Ne = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            Ae = () => ["auto", ...I()],
            ge = () => [wr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...I()],
            Q = () => [wr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...I()],
            oe = () => [wr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...I()],
            V = () => [t, re, ne],
            O = () => [...M(), Ug, Vg, {
                position: [re, ne]
            }],
            U = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            xe = () => ["auto", "cover", "contain", GE, WE, {
                size: [re, ne]
            }],
            Z = () => [fd, vo, es],
            le = () => ["", "none", "full", p, re, ne],
            pe = () => ["", Ee, vo, es],
            Pe = () => ["solid", "dashed", "dotted", "double"],
            Se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            ve = () => [Ee, fd, Ug, Vg],
            De = () => ["", "none", T, re, ne],
            ye = () => ["none", Ee, re, ne],
            at = () => ["none", Ee, re, ne],
            kt = () => [Ee, re, ne],
            Ut = () => [wr, "full", ...I()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [Un],
                breakpoint: [Un],
                color: [Mv],
                container: [Un],
                "drop-shadow": [Un],
                ease: ["in", "out", "in-out"],
                font: [$E],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [Un],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [Un],
                shadow: [Un],
                spacing: ["px", Ee],
                text: [Un],
                "text-shadow": [Un],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", wr, ne, re, S]
                }],
                container: ["container"],
                columns: [{
                    columns: [Ee, ne, re, d]
                }],
                "break-after": [{
                    "break-after": R()
                }],
                "break-before": [{
                    "break-before": R()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: B()
                }],
                overflow: [{
                    overflow: W()
                }],
                "overflow-x": [{
                    "overflow-x": W()
                }],
                "overflow-y": [{
                    "overflow-y": W()
                }],
                overscroll: [{
                    overscroll: Y()
                }],
                "overscroll-x": [{
                    "overscroll-x": Y()
                }],
                "overscroll-y": [{
                    "overscroll-y": Y()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: J()
                }],
                "inset-x": [{
                    "inset-x": J()
                }],
                "inset-y": [{
                    "inset-y": J()
                }],
                start: [{
                    "inset-s": J(),
                    start: J()
                }],
                end: [{
                    "inset-e": J(),
                    end: J()
                }],
                "inset-bs": [{
                    "inset-bs": J()
                }],
                "inset-be": [{
                    "inset-be": J()
                }],
                top: [{
                    top: J()
                }],
                right: [{
                    right: J()
                }],
                bottom: [{
                    bottom: J()
                }],
                left: [{
                    left: J()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [xr, "auto", re, ne]
                }],
                basis: [{
                    basis: [wr, "full", "auto", d, ...I()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [Ee, wr, "auto", "initial", "none", ne]
                }],
                grow: [{
                    grow: ["", Ee, re, ne]
                }],
                shrink: [{
                    shrink: ["", Ee, re, ne]
                }],
                order: [{
                    order: [xr, "first", "last", "none", re, ne]
                }],
                "grid-cols": [{
                    "grid-cols": de()
                }],
                "col-start-end": [{
                    col: ue()
                }],
                "col-start": [{
                    "col-start": Re()
                }],
                "col-end": [{
                    "col-end": Re()
                }],
                "grid-rows": [{
                    "grid-rows": de()
                }],
                "row-start-end": [{
                    row: ue()
                }],
                "row-start": [{
                    "row-start": Re()
                }],
                "row-end": [{
                    "row-end": Re()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": Ue()
                }],
                "auto-rows": [{
                    "auto-rows": Ue()
                }],
                gap: [{
                    gap: I()
                }],
                "gap-x": [{
                    "gap-x": I()
                }],
                "gap-y": [{
                    "gap-y": I()
                }],
                "justify-content": [{
                    justify: [...Te(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...Ne(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...Ne()]
                }],
                "align-content": [{
                    content: ["normal", ...Te()]
                }],
                "align-items": [{
                    items: [...Ne(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...Ne(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": Te()
                }],
                "place-items": [{
                    "place-items": [...Ne(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...Ne()]
                }],
                p: [{
                    p: I()
                }],
                px: [{
                    px: I()
                }],
                py: [{
                    py: I()
                }],
                ps: [{
                    ps: I()
                }],
                pe: [{
                    pe: I()
                }],
                pbs: [{
                    pbs: I()
                }],
                pbe: [{
                    pbe: I()
                }],
                pt: [{
                    pt: I()
                }],
                pr: [{
                    pr: I()
                }],
                pb: [{
                    pb: I()
                }],
                pl: [{
                    pl: I()
                }],
                m: [{
                    m: Ae()
                }],
                mx: [{
                    mx: Ae()
                }],
                my: [{
                    my: Ae()
                }],
                ms: [{
                    ms: Ae()
                }],
                me: [{
                    me: Ae()
                }],
                mbs: [{
                    mbs: Ae()
                }],
                mbe: [{
                    mbe: Ae()
                }],
                mt: [{
                    mt: Ae()
                }],
                mr: [{
                    mr: Ae()
                }],
                mb: [{
                    mb: Ae()
                }],
                ml: [{
                    ml: Ae()
                }],
                "space-x": [{
                    "space-x": I()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": I()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: ge()
                }],
                "inline-size": [{
                    inline: ["auto", ...Q()]
                }],
                "min-inline-size": [{
                    "min-inline": ["auto", ...Q()]
                }],
                "max-inline-size": [{
                    "max-inline": ["none", ...Q()]
                }],
                "block-size": [{
                    block: ["auto", ...oe()]
                }],
                "min-block-size": [{
                    "min-block": ["auto", ...oe()]
                }],
                "max-block-size": [{
                    "max-block": ["none", ...oe()]
                }],
                w: [{
                    w: [d, "screen", ...ge()]
                }],
                "min-w": [{
                    "min-w": [d, "screen", "none", ...ge()]
                }],
                "max-w": [{
                    "max-w": [d, "screen", "none", "prose", {
                        screen: [u]
                    }, ...ge()]
                }],
                h: [{
                    h: ["screen", "lh", ...ge()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...ge()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...ge()]
                }],
                "font-size": [{
                    text: ["base", r, vo, es]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [i, XE, qE]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", fd, ne]
                }],
                "font-family": [{
                    font: [QE, HE, e]
                }],
                "font-features": [{
                    "font-features": [ne]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [a, re, ne]
                }],
                "line-clamp": [{
                    "line-clamp": [Ee, "none", re, zg]
                }],
                leading: [{
                    leading: [l, ...I()]
                }],
                "list-image": [{
                    "list-image": ["none", re, ne]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", re, ne]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: V()
                }],
                "text-color": [{
                    text: V()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...Pe(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [Ee, "from-font", "auto", re, es]
                }],
                "text-decoration-color": [{
                    decoration: V()
                }],
                "underline-offset": [{
                    "underline-offset": [Ee, "auto", re, ne]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: I()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", re, ne]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", re, ne]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: O()
                }],
                "bg-repeat": [{
                    bg: U()
                }],
                "bg-size": [{
                    bg: xe()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, xr, re, ne],
                        radial: ["", re, ne],
                        conic: [xr, re, ne]
                    }, YE, KE]
                }],
                "bg-color": [{
                    bg: V()
                }],
                "gradient-from-pos": [{
                    from: Z()
                }],
                "gradient-via-pos": [{
                    via: Z()
                }],
                "gradient-to-pos": [{
                    to: Z()
                }],
                "gradient-from": [{
                    from: V()
                }],
                "gradient-via": [{
                    via: V()
                }],
                "gradient-to": [{
                    to: V()
                }],
                rounded: [{
                    rounded: le()
                }],
                "rounded-s": [{
                    "rounded-s": le()
                }],
                "rounded-e": [{
                    "rounded-e": le()
                }],
                "rounded-t": [{
                    "rounded-t": le()
                }],
                "rounded-r": [{
                    "rounded-r": le()
                }],
                "rounded-b": [{
                    "rounded-b": le()
                }],
                "rounded-l": [{
                    "rounded-l": le()
                }],
                "rounded-ss": [{
                    "rounded-ss": le()
                }],
                "rounded-se": [{
                    "rounded-se": le()
                }],
                "rounded-ee": [{
                    "rounded-ee": le()
                }],
                "rounded-es": [{
                    "rounded-es": le()
                }],
                "rounded-tl": [{
                    "rounded-tl": le()
                }],
                "rounded-tr": [{
                    "rounded-tr": le()
                }],
                "rounded-br": [{
                    "rounded-br": le()
                }],
                "rounded-bl": [{
                    "rounded-bl": le()
                }],
                "border-w": [{
                    border: pe()
                }],
                "border-w-x": [{
                    "border-x": pe()
                }],
                "border-w-y": [{
                    "border-y": pe()
                }],
                "border-w-s": [{
                    "border-s": pe()
                }],
                "border-w-e": [{
                    "border-e": pe()
                }],
                "border-w-bs": [{
                    "border-bs": pe()
                }],
                "border-w-be": [{
                    "border-be": pe()
                }],
                "border-w-t": [{
                    "border-t": pe()
                }],
                "border-w-r": [{
                    "border-r": pe()
                }],
                "border-w-b": [{
                    "border-b": pe()
                }],
                "border-w-l": [{
                    "border-l": pe()
                }],
                "divide-x": [{
                    "divide-x": pe()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": pe()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...Pe(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...Pe(), "hidden", "none"]
                }],
                "border-color": [{
                    border: V()
                }],
                "border-color-x": [{
                    "border-x": V()
                }],
                "border-color-y": [{
                    "border-y": V()
                }],
                "border-color-s": [{
                    "border-s": V()
                }],
                "border-color-e": [{
                    "border-e": V()
                }],
                "border-color-bs": [{
                    "border-bs": V()
                }],
                "border-color-be": [{
                    "border-be": V()
                }],
                "border-color-t": [{
                    "border-t": V()
                }],
                "border-color-r": [{
                    "border-r": V()
                }],
                "border-color-b": [{
                    "border-b": V()
                }],
                "border-color-l": [{
                    "border-l": V()
                }],
                "divide-color": [{
                    divide: V()
                }],
                "outline-style": [{
                    outline: [...Pe(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [Ee, re, ne]
                }],
                "outline-w": [{
                    outline: ["", Ee, vo, es]
                }],
                "outline-color": [{
                    outline: V()
                }],
                shadow: [{
                    shadow: ["", "none", g, vl, yl]
                }],
                "shadow-color": [{
                    shadow: V()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", y, vl, yl]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": V()
                }],
                "ring-w": [{
                    ring: pe()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: V()
                }],
                "ring-offset-w": [{
                    "ring-offset": [Ee, es]
                }],
                "ring-offset-color": [{
                    "ring-offset": V()
                }],
                "inset-ring-w": [{
                    "inset-ring": pe()
                }],
                "inset-ring-color": [{
                    "inset-ring": V()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", x, vl, yl]
                }],
                "text-shadow-color": [{
                    "text-shadow": V()
                }],
                opacity: [{
                    opacity: [Ee, re, ne]
                }],
                "mix-blend": [{
                    "mix-blend": [...Se(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": Se()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [Ee]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": ve()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": ve()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": V()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": V()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": ve()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": ve()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": V()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": V()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": ve()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": ve()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": V()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": V()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": ve()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": ve()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": V()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": V()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": ve()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": ve()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": V()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": V()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": ve()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": ve()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": V()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": V()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": ve()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": ve()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": V()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": V()
                }],
                "mask-image-radial": [{
                    "mask-radial": [re, ne]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": ve()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": ve()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": V()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": V()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": M()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [Ee]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": ve()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": ve()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": V()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": V()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: O()
                }],
                "mask-repeat": [{
                    mask: U()
                }],
                "mask-size": [{
                    mask: xe()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", re, ne]
                }],
                filter: [{
                    filter: ["", "none", re, ne]
                }],
                blur: [{
                    blur: De()
                }],
                brightness: [{
                    brightness: [Ee, re, ne]
                }],
                contrast: [{
                    contrast: [Ee, re, ne]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", E, vl, yl]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": V()
                }],
                grayscale: [{
                    grayscale: ["", Ee, re, ne]
                }],
                "hue-rotate": [{
                    "hue-rotate": [Ee, re, ne]
                }],
                invert: [{
                    invert: ["", Ee, re, ne]
                }],
                saturate: [{
                    saturate: [Ee, re, ne]
                }],
                sepia: [{
                    sepia: ["", Ee, re, ne]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", re, ne]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": De()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [Ee, re, ne]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [Ee, re, ne]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", Ee, re, ne]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [Ee, re, ne]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", Ee, re, ne]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [Ee, re, ne]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [Ee, re, ne]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", Ee, re, ne]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": I()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": I()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": I()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", re, ne]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [Ee, "initial", re, ne]
                }],
                ease: [{
                    ease: ["linear", "initial", k, re, ne]
                }],
                delay: [{
                    delay: [Ee, re, ne]
                }],
                animate: [{
                    animate: ["none", j, re, ne]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [b, re, ne]
                }],
                "perspective-origin": [{
                    "perspective-origin": B()
                }],
                rotate: [{
                    rotate: ye()
                }],
                "rotate-x": [{
                    "rotate-x": ye()
                }],
                "rotate-y": [{
                    "rotate-y": ye()
                }],
                "rotate-z": [{
                    "rotate-z": ye()
                }],
                scale: [{
                    scale: at()
                }],
                "scale-x": [{
                    "scale-x": at()
                }],
                "scale-y": [{
                    "scale-y": at()
                }],
                "scale-z": [{
                    "scale-z": at()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: kt()
                }],
                "skew-x": [{
                    "skew-x": kt()
                }],
                "skew-y": [{
                    "skew-y": kt()
                }],
                transform: [{
                    transform: [re, ne, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: B()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: Ut()
                }],
                "translate-x": [{
                    "translate-x": Ut()
                }],
                "translate-y": [{
                    "translate-y": Ut()
                }],
                "translate-z": [{
                    "translate-z": Ut()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: V()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: V()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", re, ne]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": I()
                }],
                "scroll-mx": [{
                    "scroll-mx": I()
                }],
                "scroll-my": [{
                    "scroll-my": I()
                }],
                "scroll-ms": [{
                    "scroll-ms": I()
                }],
                "scroll-me": [{
                    "scroll-me": I()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": I()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": I()
                }],
                "scroll-mt": [{
                    "scroll-mt": I()
                }],
                "scroll-mr": [{
                    "scroll-mr": I()
                }],
                "scroll-mb": [{
                    "scroll-mb": I()
                }],
                "scroll-ml": [{
                    "scroll-ml": I()
                }],
                "scroll-p": [{
                    "scroll-p": I()
                }],
                "scroll-px": [{
                    "scroll-px": I()
                }],
                "scroll-py": [{
                    "scroll-py": I()
                }],
                "scroll-ps": [{
                    "scroll-ps": I()
                }],
                "scroll-pe": [{
                    "scroll-pe": I()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": I()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": I()
                }],
                "scroll-pt": [{
                    "scroll-pt": I()
                }],
                "scroll-pr": [{
                    "scroll-pr": I()
                }],
                "scroll-pb": [{
                    "scroll-pb": I()
                }],
                "scroll-pl": [{
                    "scroll-pl": I()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", re, ne]
                }],
                fill: [{
                    fill: ["none", ...V()]
                }],
                "stroke-w": [{
                    stroke: [Ee, vo, es, zg]
                }],
                stroke: [{
                    stroke: ["none", ...V()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    ek = OE(ZE);

function Yo(...t) {
    return ek(Sv(t))
}
const Iv = F.forwardRef(({ ...t
}, e) => v.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
Iv.displayName = "ToastProvider";
const zv = F.forwardRef(({ ...t
}, e) => v.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
zv.displayName = "ToastViewport";
const tk = zb("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    Vv = F.forwardRef(({
        className: t,
        variant: e,
        ...r
    }, i) => v.jsx("div", {
        ref: i,
        className: Yo(tk({
            variant: e
        }), t),
        ...r
    }));
Vv.displayName = "Toast";
const nk = F.forwardRef(({
    className: t,
    ...e
}, r) => v.jsx("div", {
    ref: r,
    className: Yo("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
nk.displayName = "ToastAction";
const Uv = F.forwardRef(({
    className: t,
    ...e
}, r) => v.jsx("button", {
    ref: r,
    className: Yo("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: v.jsx(kv, {
        className: "h-4 w-4"
    })
}));
Uv.displayName = "ToastClose";
const $v = F.forwardRef(({
    className: t,
    ...e
}, r) => v.jsx("div", {
    ref: r,
    className: Yo("text-sm font-semibold", t),
    ...e
}));
$v.displayName = "ToastTitle";
const Wv = F.forwardRef(({
    className: t,
    ...e
}, r) => v.jsx("div", {
    ref: r,
    className: Yo("text-sm opacity-90", t),
    ...e
}));
Wv.displayName = "ToastDescription";

function rk() {
    const {
        toasts: t
    } = Ib();
    return v.jsxs(Iv, {
        children: [t.map(function({
            id: e,
            title: r,
            description: i,
            action: a,
            ...l
        }) {
            return v.jsxs(Vv, { ...l,
                children: [v.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && v.jsx($v, {
                        children: r
                    }), i && v.jsx(Wv, {
                        children: i
                    })]
                }), a, v.jsx(Uv, {})]
            }, e)
        }), v.jsx(zv, {})]
    })
}
var Si = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(t) {
            return this.listeners.add(t), this.onSubscribe(), () => {
                this.listeners.delete(t), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    sk = {
        setTimeout: (t, e) => setTimeout(t, e),
        clearTimeout: t => clearTimeout(t),
        setInterval: (t, e) => setInterval(t, e),
        clearInterval: t => clearInterval(t)
    },
    kr, Af, av, ik = (av = class {
        constructor() {
            ce(this, kr, sk);
            ce(this, Af, !1)
        }
        setTimeoutProvider(t) {
            G(this, kr, t)
        }
        setTimeout(t, e) {
            return C(this, kr).setTimeout(t, e)
        }
        clearTimeout(t) {
            C(this, kr).clearTimeout(t)
        }
        setInterval(t, e) {
            return C(this, kr).setInterval(t, e)
        }
        clearInterval(t) {
            C(this, kr).clearInterval(t)
        }
    }, kr = new WeakMap, Af = new WeakMap, av),
    ss = new ik;

function ok(t) {
    setTimeout(t, 0)
}
var vs = typeof window > "u" || "Deno" in globalThis;

function Pt() {}

function ak(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Bd(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}

function qv(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}

function Fr(t, e) {
    return typeof t == "function" ? t(e) : t
}

function sn(t, e) {
    return typeof t == "function" ? t(e) : t
}

function $g(t, e) {
    const {
        type: r = "all",
        exact: i,
        fetchStatus: a,
        predicate: l,
        queryKey: u,
        stale: d
    } = t;
    if (u) {
        if (i) {
            if (e.queryHash !== Ff(u, e.options)) return !1
        } else if (!Lo(e.queryKey, u)) return !1
    }
    if (r !== "all") {
        const h = e.isActive();
        if (r === "active" && !h || r === "inactive" && h) return !1
    }
    return !(typeof d == "boolean" && e.isStale() !== d || a && a !== e.state.fetchStatus || l && !l(e))
}

function Wg(t, e) {
    const {
        exact: r,
        status: i,
        predicate: a,
        mutationKey: l
    } = t;
    if (l) {
        if (!e.options.mutationKey) return !1;
        if (r) {
            if (ws(e.options.mutationKey) !== ws(l)) return !1
        } else if (!Lo(e.options.mutationKey, l)) return !1
    }
    return !(i && e.state.status !== i || a && !a(e))
}

function Ff(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || ws)(t)
}

function ws(t) {
    return JSON.stringify(t, (e, r) => Id(r) ? Object.keys(r).sort().reduce((i, a) => (i[a] = r[a], i), {}) : r)
}

function Lo(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(r => Lo(t[r], e[r])) : !1
}
var lk = Object.prototype.hasOwnProperty;

function Hv(t, e, r = 0) {
    if (t === e) return t;
    if (r > 500) return e;
    const i = qg(t) && qg(e);
    if (!i && !(Id(t) && Id(e))) return e;
    const l = (i ? t : Object.keys(t)).length,
        u = i ? e : Object.keys(e),
        d = u.length,
        h = i ? new Array(d) : {};
    let p = 0;
    for (let g = 0; g < d; g++) {
        const y = i ? g : u[g],
            x = t[y],
            E = e[y];
        if (x === E) {
            h[y] = x, (i ? g < l : lk.call(t, y)) && p++;
            continue
        }
        if (x === null || E === null || typeof x != "object" || typeof E != "object") {
            h[y] = E;
            continue
        }
        const T = Hv(x, E, r + 1);
        h[y] = T, T === x && p++
    }
    return l === d && p === l ? t : h
}

function Vl(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const r in t)
        if (t[r] !== e[r]) return !1;
    return !0
}

function qg(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}

function Id(t) {
    if (!Hg(t)) return !1;
    const e = t.constructor;
    if (e === void 0) return !0;
    const r = e.prototype;
    return !(!Hg(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}

function Hg(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function uk(t) {
    return new Promise(e => {
        ss.setTimeout(e, t)
    })
}

function zd(t, e, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? Hv(t, e) : e
}

function ck(t, e, r = 0) {
    const i = [...t, e];
    return r && i.length > r ? i.slice(1) : i
}

function dk(t, e, r = 0) {
    const i = [e, ...t];
    return r && i.length > r ? i.slice(0, -1) : i
}
var Nf = Symbol();

function Kv(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Nf ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}

function Lf(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}

function fk(t, e, r) {
    let i = !1,
        a;
    return Object.defineProperty(t, "signal", {
        enumerable: !0,
        get: () => (a ? ? (a = e()), i || (i = !0, a.aborted ? r() : a.addEventListener("abort", r, {
            once: !0
        })), a)
    }), t
}
var as, _r, ii, lv, hk = (lv = class extends Si {
        constructor() {
            super();
            ce(this, as);
            ce(this, _r);
            ce(this, ii);
            G(this, ii, e => {
                if (!vs && window.addEventListener) {
                    const r = () => e();
                    return window.addEventListener("visibilitychange", r, !1), () => {
                        window.removeEventListener("visibilitychange", r)
                    }
                }
            })
        }
        onSubscribe() {
            C(this, _r) || this.setEventListener(C(this, ii))
        }
        onUnsubscribe() {
            var e;
            this.hasListeners() || ((e = C(this, _r)) == null || e.call(this), G(this, _r, void 0))
        }
        setEventListener(e) {
            var r;
            G(this, ii, e), (r = C(this, _r)) == null || r.call(this), G(this, _r, e(i => {
                typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
            }))
        }
        setFocused(e) {
            C(this, as) !== e && (G(this, as, e), this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(r => {
                r(e)
            })
        }
        isFocused() {
            var e;
            return typeof C(this, as) == "boolean" ? C(this, as) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
        }
    }, as = new WeakMap, _r = new WeakMap, ii = new WeakMap, lv),
    Df = new hk;

function Vd() {
    let t, e;
    const r = new Promise((a, l) => {
        t = a, e = l
    });
    r.status = "pending", r.catch(() => {});

    function i(a) {
        Object.assign(r, a), delete r.resolve, delete r.reject
    }
    return r.resolve = a => {
        i({
            status: "fulfilled",
            value: a
        }), t(a)
    }, r.reject = a => {
        i({
            status: "rejected",
            reason: a
        }), e(a)
    }, r
}
var pk = ok;

function mk() {
    let t = [],
        e = 0,
        r = d => {
            d()
        },
        i = d => {
            d()
        },
        a = pk;
    const l = d => {
            e ? t.push(d) : a(() => {
                r(d)
            })
        },
        u = () => {
            const d = t;
            t = [], d.length && a(() => {
                i(() => {
                    d.forEach(h => {
                        r(h)
                    })
                })
            })
        };
    return {
        batch: d => {
            let h;
            e++;
            try {
                h = d()
            } finally {
                e--, e || u()
            }
            return h
        },
        batchCalls: d => (...h) => {
            l(() => {
                d(...h)
            })
        },
        schedule: l,
        setNotifyFunction: d => {
            r = d
        },
        setBatchNotifyFunction: d => {
            i = d
        },
        setScheduler: d => {
            a = d
        }
    }
}
var ot = mk(),
    oi, Cr, ai, uv, gk = (uv = class extends Si {
        constructor() {
            super();
            ce(this, oi, !0);
            ce(this, Cr);
            ce(this, ai);
            G(this, ai, e => {
                if (!vs && window.addEventListener) {
                    const r = () => e(!0),
                        i = () => e(!1);
                    return window.addEventListener("online", r, !1), window.addEventListener("offline", i, !1), () => {
                        window.removeEventListener("online", r), window.removeEventListener("offline", i)
                    }
                }
            })
        }
        onSubscribe() {
            C(this, Cr) || this.setEventListener(C(this, ai))
        }
        onUnsubscribe() {
            var e;
            this.hasListeners() || ((e = C(this, Cr)) == null || e.call(this), G(this, Cr, void 0))
        }
        setEventListener(e) {
            var r;
            G(this, ai, e), (r = C(this, Cr)) == null || r.call(this), G(this, Cr, e(this.setOnline.bind(this)))
        }
        setOnline(e) {
            C(this, oi) !== e && (G(this, oi, e), this.listeners.forEach(i => {
                i(e)
            }))
        }
        isOnline() {
            return C(this, oi)
        }
    }, oi = new WeakMap, Cr = new WeakMap, ai = new WeakMap, uv),
    Ul = new gk;

function yk(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}

function Qv(t) {
    return (t ? ? "online") === "online" ? Ul.isOnline() : !0
}
var Ud = class extends Error {
    constructor(t) {
        super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent
    }
};

function Gv(t) {
    let e = !1,
        r = 0,
        i;
    const a = Vd(),
        l = () => a.status !== "pending",
        u = b => {
            var S;
            if (!l()) {
                const k = new Ud(b);
                x(k), (S = t.onCancel) == null || S.call(t, k)
            }
        },
        d = () => {
            e = !0
        },
        h = () => {
            e = !1
        },
        p = () => Df.isFocused() && (t.networkMode === "always" || Ul.isOnline()) && t.canRun(),
        g = () => Qv(t.networkMode) && t.canRun(),
        y = b => {
            l() || (i == null || i(), a.resolve(b))
        },
        x = b => {
            l() || (i == null || i(), a.reject(b))
        },
        E = () => new Promise(b => {
            var S;
            i = k => {
                (l() || p()) && b(k)
            }, (S = t.onPause) == null || S.call(t)
        }).then(() => {
            var b;
            i = void 0, l() || (b = t.onContinue) == null || b.call(t)
        }),
        T = () => {
            if (l()) return;
            let b;
            const S = r === 0 ? t.initialPromise : void 0;
            try {
                b = S ? ? t.fn()
            } catch (k) {
                b = Promise.reject(k)
            }
            Promise.resolve(b).then(y).catch(k => {
                var W;
                if (l()) return;
                const j = t.retry ? ? (vs ? 0 : 3),
                    R = t.retryDelay ? ? yk,
                    M = typeof R == "function" ? R(r, k) : R,
                    B = j === !0 || typeof j == "number" && r < j || typeof j == "function" && j(r, k);
                if (e || !B) {
                    x(k);
                    return
                }
                r++, (W = t.onFail) == null || W.call(t, r, k), uk(M).then(() => p() ? void 0 : E()).then(() => {
                    e ? x(k) : T()
                })
            })
        };
    return {
        promise: a,
        status: () => a.status,
        cancel: u,
        continue: () => (i == null || i(), a),
        cancelRetry: d,
        continueRetry: h,
        canStart: g,
        start: () => (g() ? T() : E().then(T), a)
    }
}
var ls, cv, Yv = (cv = class {
        constructor() {
            ce(this, ls)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), Bd(this.gcTime) && G(this, ls, ss.setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ? ? (vs ? 1 / 0 : 300 * 1e3))
        }
        clearGcTimeout() {
            C(this, ls) && (ss.clearTimeout(C(this, ls)), G(this, ls, void 0))
        }
    }, ls = new WeakMap, cv),
    us, li, rn, cs, dt, qo, ds, gn, Wn, dv, vk = (dv = class extends Yv {
        constructor(e) {
            super();
            ce(this, gn);
            ce(this, us);
            ce(this, li);
            ce(this, rn);
            ce(this, cs);
            ce(this, dt);
            ce(this, qo);
            ce(this, ds);
            G(this, ds, !1), G(this, qo, e.defaultOptions), this.setOptions(e.options), this.observers = [], G(this, cs, e.client), G(this, rn, C(this, cs).getQueryCache()), this.queryKey = e.queryKey, this.queryHash = e.queryHash, G(this, us, Qg(this.options)), this.state = e.state ? ? C(this, us), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var e;
            return (e = C(this, dt)) == null ? void 0 : e.promise
        }
        setOptions(e) {
            if (this.options = { ...C(this, qo),
                    ...e
                }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
                const r = Qg(this.options);
                r.data !== void 0 && (this.setState(Kg(r.data, r.dataUpdatedAt)), G(this, us, r))
            }
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && C(this, rn).remove(this)
        }
        setData(e, r) {
            const i = zd(this.state.data, e, this.options);
            return be(this, gn, Wn).call(this, {
                data: i,
                type: "success",
                dataUpdatedAt: r == null ? void 0 : r.updatedAt,
                manual: r == null ? void 0 : r.manual
            }), i
        }
        setState(e, r) {
            be(this, gn, Wn).call(this, {
                type: "setState",
                state: e,
                setStateOptions: r
            })
        }
        cancel(e) {
            var i, a;
            const r = (i = C(this, dt)) == null ? void 0 : i.promise;
            return (a = C(this, dt)) == null || a.cancel(e), r ? r.then(Pt).catch(Pt) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(C(this, us))
        }
        isActive() {
            return this.observers.some(e => sn(e.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Nf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(e => Fr(e.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(e = 0) {
            return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !qv(this.state.dataUpdatedAt, e)
        }
        onFocus() {
            var r;
            const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
            e == null || e.refetch({
                cancelRefetch: !1
            }), (r = C(this, dt)) == null || r.continue()
        }
        onOnline() {
            var r;
            const e = this.observers.find(i => i.shouldFetchOnReconnect());
            e == null || e.refetch({
                cancelRefetch: !1
            }), (r = C(this, dt)) == null || r.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), C(this, rn).notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(r => r !== e), this.observers.length || (C(this, dt) && (C(this, ds) ? C(this, dt).cancel({
                revert: !0
            }) : C(this, dt).cancelRetry()), this.scheduleGc()), C(this, rn).notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || be(this, gn, Wn).call(this, {
                type: "invalidate"
            })
        }
        async fetch(e, r) {
            var h, p, g, y, x, E, T, b, S, k, j, R;
            if (this.state.fetchStatus !== "idle" && ((h = C(this, dt)) == null ? void 0 : h.status()) !== "rejected") {
                if (this.state.data !== void 0 && (r != null && r.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (C(this, dt)) return C(this, dt).continueRetry(), C(this, dt).promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                const M = this.observers.find(B => B.options.queryFn);
                M && this.setOptions(M.options)
            }
            const i = new AbortController,
                a = M => {
                    Object.defineProperty(M, "signal", {
                        enumerable: !0,
                        get: () => (G(this, ds, !0), i.signal)
                    })
                },
                l = () => {
                    const M = Kv(this.options, r),
                        W = (() => {
                            const Y = {
                                client: C(this, cs),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return a(Y), Y
                        })();
                    return G(this, ds, !1), this.options.persister ? this.options.persister(M, W, this) : M(W)
                },
                d = (() => {
                    const M = {
                        fetchOptions: r,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: C(this, cs),
                        state: this.state,
                        fetchFn: l
                    };
                    return a(M), M
                })();
            (p = this.options.behavior) == null || p.onFetch(d, this), G(this, li, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((g = d.fetchOptions) == null ? void 0 : g.meta)) && be(this, gn, Wn).call(this, {
                type: "fetch",
                meta: (y = d.fetchOptions) == null ? void 0 : y.meta
            }), G(this, dt, Gv({
                initialPromise: r == null ? void 0 : r.initialPromise,
                fn: d.fetchFn,
                onCancel: M => {
                    M instanceof Ud && M.revert && this.setState({ ...C(this, li),
                        fetchStatus: "idle"
                    }), i.abort()
                },
                onFail: (M, B) => {
                    be(this, gn, Wn).call(this, {
                        type: "failed",
                        failureCount: M,
                        error: B
                    })
                },
                onPause: () => {
                    be(this, gn, Wn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    be(this, gn, Wn).call(this, {
                        type: "continue"
                    })
                },
                retry: d.options.retry,
                retryDelay: d.options.retryDelay,
                networkMode: d.options.networkMode,
                canRun: () => !0
            }));
            try {
                const M = await C(this, dt).start();
                if (M === void 0) throw new Error(`${this.queryHash} data is undefined`);
                return this.setData(M), (E = (x = C(this, rn).config).onSuccess) == null || E.call(x, M, this), (b = (T = C(this, rn).config).onSettled) == null || b.call(T, M, this.state.error, this), M
            } catch (M) {
                if (M instanceof Ud) {
                    if (M.silent) return C(this, dt).promise;
                    if (M.revert) {
                        if (this.state.data === void 0) throw M;
                        return this.state.data
                    }
                }
                throw be(this, gn, Wn).call(this, {
                    type: "error",
                    error: M
                }), (k = (S = C(this, rn).config).onError) == null || k.call(S, M, this), (R = (j = C(this, rn).config).onSettled) == null || R.call(j, this.state.data, M, this), M
            } finally {
                this.scheduleGc()
            }
        }
    }, us = new WeakMap, li = new WeakMap, rn = new WeakMap, cs = new WeakMap, dt = new WeakMap, qo = new WeakMap, ds = new WeakMap, gn = new WeakSet, Wn = function(e) {
        const r = i => {
            switch (e.type) {
                case "failed":
                    return { ...i,
                        fetchFailureCount: e.failureCount,
                        fetchFailureReason: e.error
                    };
                case "pause":
                    return { ...i,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...i,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...i,
                        ...Xv(i.data, this.options),
                        fetchMeta: e.meta ? ? null
                    };
                case "success":
                    const a = { ...i,
                        ...Kg(e.data, e.dataUpdatedAt),
                        dataUpdateCount: i.dataUpdateCount + 1,
                        ...!e.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return G(this, li, e.manual ? a : void 0), a;
                case "error":
                    const l = e.error;
                    return { ...i,
                        error: l,
                        errorUpdateCount: i.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: i.fetchFailureCount + 1,
                        fetchFailureReason: l,
                        fetchStatus: "idle",
                        status: "error",
                        isInvalidated: !0
                    };
                case "invalidate":
                    return { ...i,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...i,
                        ...e.state
                    }
            }
        };
        this.state = r(this.state), ot.batch(() => {
            this.observers.forEach(i => {
                i.onQueryUpdate()
            }), C(this, rn).notify({
                query: this,
                type: "updated",
                action: e
            })
        })
    }, dv);

function Xv(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Qv(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function Kg(t, e) {
    return {
        data: t,
        dataUpdatedAt: e ? ? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}

function Qg(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData,
        r = e !== void 0,
        i = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? i ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var It, _e, Ho, Tt, fs, ui, qn, Tr, Ko, ci, di, hs, ps, Pr, fi, je, Eo, $d, Wd, qd, Hd, Kd, Qd, Gd, Jv, fv, wk = (fv = class extends Si {
    constructor(e, r) {
        super();
        ce(this, je);
        ce(this, It);
        ce(this, _e);
        ce(this, Ho);
        ce(this, Tt);
        ce(this, fs);
        ce(this, ui);
        ce(this, qn);
        ce(this, Tr);
        ce(this, Ko);
        ce(this, ci);
        ce(this, di);
        ce(this, hs);
        ce(this, ps);
        ce(this, Pr);
        ce(this, fi, new Set);
        this.options = r, G(this, It, e), G(this, Tr, null), G(this, qn, Vd()), this.bindMethods(), this.setOptions(r)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (C(this, _e).addObserver(this), Gg(C(this, _e), this.options) ? be(this, je, Eo).call(this) : this.updateResult(), be(this, je, Hd).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Yd(C(this, _e), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Yd(C(this, _e), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, be(this, je, Kd).call(this), be(this, je, Qd).call(this), C(this, _e).removeObserver(this)
    }
    setOptions(e) {
        const r = this.options,
            i = C(this, _e);
        if (this.options = C(this, It).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof sn(this.options.enabled, C(this, _e)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        be(this, je, Gd).call(this), C(this, _e).setOptions(this.options), r._defaulted && !Vl(this.options, r) && C(this, It).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: C(this, _e),
            observer: this
        });
        const a = this.hasListeners();
        a && Yg(C(this, _e), i, this.options, r) && be(this, je, Eo).call(this), this.updateResult(), a && (C(this, _e) !== i || sn(this.options.enabled, C(this, _e)) !== sn(r.enabled, C(this, _e)) || Fr(this.options.staleTime, C(this, _e)) !== Fr(r.staleTime, C(this, _e))) && be(this, je, $d).call(this);
        const l = be(this, je, Wd).call(this);
        a && (C(this, _e) !== i || sn(this.options.enabled, C(this, _e)) !== sn(r.enabled, C(this, _e)) || l !== C(this, Pr)) && be(this, je, qd).call(this, l)
    }
    getOptimisticResult(e) {
        const r = C(this, It).getQueryCache().build(C(this, It), e),
            i = this.createResult(r, e);
        return Sk(this, i) && (G(this, Tt, i), G(this, ui, this.options), G(this, fs, C(this, _e).state)), i
    }
    getCurrentResult() {
        return C(this, Tt)
    }
    trackResult(e, r) {
        return new Proxy(e, {
            get: (i, a) => (this.trackProp(a), r == null || r(a), a === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && C(this, qn).status === "pending" && C(this, qn).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(i, a))
        })
    }
    trackProp(e) {
        C(this, fi).add(e)
    }
    getCurrentQuery() {
        return C(this, _e)
    }
    refetch({ ...e
    } = {}) {
        return this.fetch({ ...e
        })
    }
    fetchOptimistic(e) {
        const r = C(this, It).defaultQueryOptions(e),
            i = C(this, It).getQueryCache().build(C(this, It), r);
        return i.fetch().then(() => this.createResult(i, r))
    }
    fetch(e) {
        return be(this, je, Eo).call(this, { ...e,
            cancelRefetch: e.cancelRefetch ? ? !0
        }).then(() => (this.updateResult(), C(this, Tt)))
    }
    createResult(e, r) {
        var J;
        const i = C(this, _e),
            a = this.options,
            l = C(this, Tt),
            u = C(this, fs),
            d = C(this, ui),
            p = e !== i ? e.state : C(this, Ho),
            {
                state: g
            } = e;
        let y = { ...g
            },
            x = !1,
            E;
        if (r._optimisticResults) {
            const de = this.hasListeners(),
                ue = !de && Gg(e, r),
                Re = de && Yg(e, i, r, a);
            (ue || Re) && (y = { ...y,
                ...Xv(g.data, e.options)
            }), r._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {
            error: T,
            errorUpdatedAt: b,
            status: S
        } = y;
        E = y.data;
        let k = !1;
        if (r.placeholderData !== void 0 && E === void 0 && S === "pending") {
            let de;
            l != null && l.isPlaceholderData && r.placeholderData === (d == null ? void 0 : d.placeholderData) ? (de = l.data, k = !0) : de = typeof r.placeholderData == "function" ? r.placeholderData((J = C(this, di)) == null ? void 0 : J.state.data, C(this, di)) : r.placeholderData, de !== void 0 && (S = "success", E = zd(l == null ? void 0 : l.data, de, r), x = !0)
        }
        if (r.select && E !== void 0 && !k)
            if (l && E === (u == null ? void 0 : u.data) && r.select === C(this, Ko)) E = C(this, ci);
            else try {
                G(this, Ko, r.select), E = r.select(E), E = zd(l == null ? void 0 : l.data, E, r), G(this, ci, E), G(this, Tr, null)
            } catch (de) {
                G(this, Tr, de)
            }
        C(this, Tr) && (T = C(this, Tr), E = C(this, ci), b = Date.now(), S = "error");
        const j = y.fetchStatus === "fetching",
            R = S === "pending",
            M = S === "error",
            B = R && j,
            W = E !== void 0,
            I = {
                status: S,
                fetchStatus: y.fetchStatus,
                isPending: R,
                isSuccess: S === "success",
                isError: M,
                isInitialLoading: B,
                isLoading: B,
                data: E,
                dataUpdatedAt: y.dataUpdatedAt,
                error: T,
                errorUpdatedAt: b,
                failureCount: y.fetchFailureCount,
                failureReason: y.fetchFailureReason,
                errorUpdateCount: y.errorUpdateCount,
                isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                isFetchedAfterMount: y.dataUpdateCount > p.dataUpdateCount || y.errorUpdateCount > p.errorUpdateCount,
                isFetching: j,
                isRefetching: j && !R,
                isLoadingError: M && !W,
                isPaused: y.fetchStatus === "paused",
                isPlaceholderData: x,
                isRefetchError: M && W,
                isStale: Bf(e, r),
                refetch: this.refetch,
                promise: C(this, qn),
                isEnabled: sn(r.enabled, e) !== !1
            };
        if (this.options.experimental_prefetchInRender) {
            const de = I.data !== void 0,
                ue = I.status === "error" && !de,
                Re = Ne => {
                    ue ? Ne.reject(I.error) : de && Ne.resolve(I.data)
                },
                Ue = () => {
                    const Ne = G(this, qn, I.promise = Vd());
                    Re(Ne)
                },
                Te = C(this, qn);
            switch (Te.status) {
                case "pending":
                    e.queryHash === i.queryHash && Re(Te);
                    break;
                case "fulfilled":
                    (ue || I.data !== Te.value) && Ue();
                    break;
                case "rejected":
                    (!ue || I.error !== Te.reason) && Ue();
                    break
            }
        }
        return I
    }
    updateResult() {
        const e = C(this, Tt),
            r = this.createResult(C(this, _e), this.options);
        if (G(this, fs, C(this, _e).state), G(this, ui, this.options), C(this, fs).data !== void 0 && G(this, di, C(this, _e)), Vl(r, e)) return;
        G(this, Tt, r);
        const i = () => {
            if (!e) return !0;
            const {
                notifyOnChangeProps: a
            } = this.options, l = typeof a == "function" ? a() : a;
            if (l === "all" || !l && !C(this, fi).size) return !0;
            const u = new Set(l ? ? C(this, fi));
            return this.options.throwOnError && u.add("error"), Object.keys(C(this, Tt)).some(d => {
                const h = d;
                return C(this, Tt)[h] !== e[h] && u.has(h)
            })
        };
        be(this, je, Jv).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && be(this, je, Hd).call(this)
    }
}, It = new WeakMap, _e = new WeakMap, Ho = new WeakMap, Tt = new WeakMap, fs = new WeakMap, ui = new WeakMap, qn = new WeakMap, Tr = new WeakMap, Ko = new WeakMap, ci = new WeakMap, di = new WeakMap, hs = new WeakMap, ps = new WeakMap, Pr = new WeakMap, fi = new WeakMap, je = new WeakSet, Eo = function(e) {
    be(this, je, Gd).call(this);
    let r = C(this, _e).fetch(this.options, e);
    return e != null && e.throwOnError || (r = r.catch(Pt)), r
}, $d = function() {
    be(this, je, Kd).call(this);
    const e = Fr(this.options.staleTime, C(this, _e));
    if (vs || C(this, Tt).isStale || !Bd(e)) return;
    const i = qv(C(this, Tt).dataUpdatedAt, e) + 1;
    G(this, hs, ss.setTimeout(() => {
        C(this, Tt).isStale || this.updateResult()
    }, i))
}, Wd = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(C(this, _e)) : this.options.refetchInterval) ? ? !1
}, qd = function(e) {
    be(this, je, Qd).call(this), G(this, Pr, e), !(vs || sn(this.options.enabled, C(this, _e)) === !1 || !Bd(C(this, Pr)) || C(this, Pr) === 0) && G(this, ps, ss.setInterval(() => {
        (this.options.refetchIntervalInBackground || Df.isFocused()) && be(this, je, Eo).call(this)
    }, C(this, Pr)))
}, Hd = function() {
    be(this, je, $d).call(this), be(this, je, qd).call(this, be(this, je, Wd).call(this))
}, Kd = function() {
    C(this, hs) && (ss.clearTimeout(C(this, hs)), G(this, hs, void 0))
}, Qd = function() {
    C(this, ps) && (ss.clearInterval(C(this, ps)), G(this, ps, void 0))
}, Gd = function() {
    const e = C(this, It).getQueryCache().build(C(this, It), this.options);
    if (e === C(this, _e)) return;
    const r = C(this, _e);
    G(this, _e, e), G(this, Ho, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this))
}, Jv = function(e) {
    ot.batch(() => {
        e.listeners && this.listeners.forEach(r => {
            r(C(this, Tt))
        }), C(this, It).getQueryCache().notify({
            query: C(this, _e),
            type: "observerResultsUpdated"
        })
    })
}, fv);

function xk(t, e) {
    return sn(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1)
}

function Gg(t, e) {
    return xk(t, e) || t.state.data !== void 0 && Yd(t, e, e.refetchOnMount)
}

function Yd(t, e, r) {
    if (sn(e.enabled, t) !== !1 && Fr(e.staleTime, t) !== "static") {
        const i = typeof r == "function" ? r(t) : r;
        return i === "always" || i !== !1 && Bf(t, e)
    }
    return !1
}

function Yg(t, e, r, i) {
    return (t !== e || sn(i.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && Bf(t, r)
}

function Bf(t, e) {
    return sn(e.enabled, t) !== !1 && t.isStaleByTime(Fr(e.staleTime, t))
}

function Sk(t, e) {
    return !Vl(t.getCurrentResult(), e)
}

function Xg(t) {
    return {
        onFetch: (e, r) => {
            var g, y, x, E, T;
            const i = e.options,
                a = (x = (y = (g = e.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : x.direction,
                l = ((E = e.state.data) == null ? void 0 : E.pages) || [],
                u = ((T = e.state.data) == null ? void 0 : T.pageParams) || [];
            let d = {
                    pages: [],
                    pageParams: []
                },
                h = 0;
            const p = async () => {
                let b = !1;
                const S = R => {
                        fk(R, () => e.signal, () => b = !0)
                    },
                    k = Kv(e.options, e.fetchOptions),
                    j = async (R, M, B) => {
                        if (b) return Promise.reject();
                        if (M == null && R.pages.length) return Promise.resolve(R);
                        const Y = (() => {
                                const ue = {
                                    client: e.client,
                                    queryKey: e.queryKey,
                                    pageParam: M,
                                    direction: B ? "backward" : "forward",
                                    meta: e.options.meta
                                };
                                return S(ue), ue
                            })(),
                            I = await k(Y),
                            {
                                maxPages: J
                            } = e.options,
                            de = B ? dk : ck;
                        return {
                            pages: de(R.pages, I, J),
                            pageParams: de(R.pageParams, M, J)
                        }
                    };
                if (a && l.length) {
                    const R = a === "backward",
                        M = R ? bk : Jg,
                        B = {
                            pages: l,
                            pageParams: u
                        },
                        W = M(i, B);
                    d = await j(B, W, R)
                } else {
                    const R = t ? ? l.length;
                    do {
                        const M = h === 0 ? u[0] ? ? i.initialPageParam : Jg(i, d);
                        if (h > 0 && M == null) break;
                        d = await j(d, M), h++
                    } while (h < R)
                }
                return d
            };
            e.options.persister ? e.fetchFn = () => {
                var b, S;
                return (S = (b = e.options).persister) == null ? void 0 : S.call(b, p, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, r)
            } : e.fetchFn = p
        }
    }
}

function Jg(t, {
    pages: e,
    pageParams: r
}) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, r[i], r) : void 0
}

function bk(t, {
    pages: e,
    pageParams: r
}) {
    var i;
    return e.length > 0 ? (i = t.getPreviousPageParam) == null ? void 0 : i.call(t, e[0], e, r[0], r) : void 0
}
var Qo, Cn, St, ms, Tn, Sr, hv, Ek = (hv = class extends Yv {
    constructor(e) {
        super();
        ce(this, Tn);
        ce(this, Qo);
        ce(this, Cn);
        ce(this, St);
        ce(this, ms);
        G(this, Qo, e.client), this.mutationId = e.mutationId, G(this, St, e.mutationCache), G(this, Cn, []), this.state = e.state || Zv(), this.setOptions(e.options), this.scheduleGc()
    }
    setOptions(e) {
        this.options = e, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        C(this, Cn).includes(e) || (C(this, Cn).push(e), this.clearGcTimeout(), C(this, St).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        G(this, Cn, C(this, Cn).filter(r => r !== e)), this.scheduleGc(), C(this, St).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        C(this, Cn).length || (this.state.status === "pending" ? this.scheduleGc() : C(this, St).remove(this))
    }
    continue () {
        var e;
        return ((e = C(this, ms)) == null ? void 0 : e.continue()) ? ? this.execute(this.state.variables)
    }
    async execute(e) {
        var u, d, h, p, g, y, x, E, T, b, S, k, j, R, M, B, W, Y;
        const r = () => {
                be(this, Tn, Sr).call(this, {
                    type: "continue"
                })
            },
            i = {
                client: C(this, Qo),
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
        G(this, ms, Gv({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (I, J) => {
                be(this, Tn, Sr).call(this, {
                    type: "failed",
                    failureCount: I,
                    error: J
                })
            },
            onPause: () => {
                be(this, Tn, Sr).call(this, {
                    type: "pause"
                })
            },
            onContinue: r,
            retry: this.options.retry ? ? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => C(this, St).canRun(this)
        }));
        const a = this.state.status === "pending",
            l = !C(this, ms).canStart();
        try {
            if (a) r();
            else {
                be(this, Tn, Sr).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: l
                }), C(this, St).config.onMutate && await C(this, St).config.onMutate(e, this, i);
                const J = await ((d = (u = this.options).onMutate) == null ? void 0 : d.call(u, e, i));
                J !== this.state.context && be(this, Tn, Sr).call(this, {
                    type: "pending",
                    context: J,
                    variables: e,
                    isPaused: l
                })
            }
            const I = await C(this, ms).start();
            return await ((p = (h = C(this, St).config).onSuccess) == null ? void 0 : p.call(h, I, e, this.state.context, this, i)), await ((y = (g = this.options).onSuccess) == null ? void 0 : y.call(g, I, e, this.state.context, i)), await ((E = (x = C(this, St).config).onSettled) == null ? void 0 : E.call(x, I, null, this.state.variables, this.state.context, this, i)), await ((b = (T = this.options).onSettled) == null ? void 0 : b.call(T, I, null, e, this.state.context, i)), be(this, Tn, Sr).call(this, {
                type: "success",
                data: I
            }), I
        } catch (I) {
            try {
                await ((k = (S = C(this, St).config).onError) == null ? void 0 : k.call(S, I, e, this.state.context, this, i))
            } catch (J) {
                Promise.reject(J)
            }
            try {
                await ((R = (j = this.options).onError) == null ? void 0 : R.call(j, I, e, this.state.context, i))
            } catch (J) {
                Promise.reject(J)
            }
            try {
                await ((B = (M = C(this, St).config).onSettled) == null ? void 0 : B.call(M, void 0, I, this.state.variables, this.state.context, this, i))
            } catch (J) {
                Promise.reject(J)
            }
            try {
                await ((Y = (W = this.options).onSettled) == null ? void 0 : Y.call(W, void 0, I, e, this.state.context, i))
            } catch (J) {
                Promise.reject(J)
            }
            throw be(this, Tn, Sr).call(this, {
                type: "error",
                error: I
            }), I
        } finally {
            C(this, St).runNext(this)
        }
    }
}, Qo = new WeakMap, Cn = new WeakMap, St = new WeakMap, ms = new WeakMap, Tn = new WeakSet, Sr = function(e) {
    const r = i => {
        switch (e.type) {
            case "failed":
                return { ...i,
                    failureCount: e.failureCount,
                    failureReason: e.error
                };
            case "pause":
                return { ...i,
                    isPaused: !0
                };
            case "continue":
                return { ...i,
                    isPaused: !1
                };
            case "pending":
                return { ...i,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return { ...i,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return { ...i,
                    data: void 0,
                    error: e.error,
                    failureCount: i.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error"
                }
        }
    };
    this.state = r(this.state), ot.batch(() => {
        C(this, Cn).forEach(i => {
            i.onMutationUpdate(e)
        }), C(this, St).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    })
}, hv);

function Zv() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Hn, yn, Go, pv, kk = (pv = class extends Si {
    constructor(e = {}) {
        super();
        ce(this, Hn);
        ce(this, yn);
        ce(this, Go);
        this.config = e, G(this, Hn, new Set), G(this, yn, new Map), G(this, Go, 0)
    }
    build(e, r, i) {
        const a = new Ek({
            client: e,
            mutationCache: this,
            mutationId: ++ml(this, Go)._,
            options: e.defaultMutationOptions(r),
            state: i
        });
        return this.add(a), a
    }
    add(e) {
        C(this, Hn).add(e);
        const r = wl(e);
        if (typeof r == "string") {
            const i = C(this, yn).get(r);
            i ? i.push(e) : C(this, yn).set(r, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (C(this, Hn).delete(e)) {
            const r = wl(e);
            if (typeof r == "string") {
                const i = C(this, yn).get(r);
                if (i)
                    if (i.length > 1) {
                        const a = i.indexOf(e);
                        a !== -1 && i.splice(a, 1)
                    } else i[0] === e && C(this, yn).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const r = wl(e);
        if (typeof r == "string") {
            const i = C(this, yn).get(r),
                a = i == null ? void 0 : i.find(l => l.state.status === "pending");
            return !a || a === e
        } else return !0
    }
    runNext(e) {
        var i;
        const r = wl(e);
        if (typeof r == "string") {
            const a = (i = C(this, yn).get(r)) == null ? void 0 : i.find(l => l !== e && l.state.isPaused);
            return (a == null ? void 0 : a.continue()) ? ? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        ot.batch(() => {
            C(this, Hn).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }), C(this, Hn).clear(), C(this, yn).clear()
        })
    }
    getAll() {
        return Array.from(C(this, Hn))
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => Wg(r, i))
    }
    findAll(e = {}) {
        return this.getAll().filter(r => Wg(e, r))
    }
    notify(e) {
        ot.batch(() => {
            this.listeners.forEach(r => {
                r(e)
            })
        })
    }
    resumePausedMutations() {
        const e = this.getAll().filter(r => r.state.isPaused);
        return ot.batch(() => Promise.all(e.map(r => r.continue().catch(Pt))))
    }
}, Hn = new WeakMap, yn = new WeakMap, Go = new WeakMap, pv);

function wl(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
var Kn, Rr, zt, Qn, Jn, Rl, Xd, mv, _k = (mv = class extends Si {
        constructor(r, i) {
            super();
            ce(this, Jn);
            ce(this, Kn);
            ce(this, Rr);
            ce(this, zt);
            ce(this, Qn);
            G(this, Kn, r), this.setOptions(i), this.bindMethods(), be(this, Jn, Rl).call(this)
        }
        bindMethods() {
            this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
        }
        setOptions(r) {
            var a;
            const i = this.options;
            this.options = C(this, Kn).defaultMutationOptions(r), Vl(this.options, i) || C(this, Kn).getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: C(this, zt),
                observer: this
            }), i != null && i.mutationKey && this.options.mutationKey && ws(i.mutationKey) !== ws(this.options.mutationKey) ? this.reset() : ((a = C(this, zt)) == null ? void 0 : a.state.status) === "pending" && C(this, zt).setOptions(this.options)
        }
        onUnsubscribe() {
            var r;
            this.hasListeners() || (r = C(this, zt)) == null || r.removeObserver(this)
        }
        onMutationUpdate(r) {
            be(this, Jn, Rl).call(this), be(this, Jn, Xd).call(this, r)
        }
        getCurrentResult() {
            return C(this, Rr)
        }
        reset() {
            var r;
            (r = C(this, zt)) == null || r.removeObserver(this), G(this, zt, void 0), be(this, Jn, Rl).call(this), be(this, Jn, Xd).call(this)
        }
        mutate(r, i) {
            var a;
            return G(this, Qn, i), (a = C(this, zt)) == null || a.removeObserver(this), G(this, zt, C(this, Kn).getMutationCache().build(C(this, Kn), this.options)), C(this, zt).addObserver(this), C(this, zt).execute(r)
        }
    }, Kn = new WeakMap, Rr = new WeakMap, zt = new WeakMap, Qn = new WeakMap, Jn = new WeakSet, Rl = function() {
        var i;
        const r = ((i = C(this, zt)) == null ? void 0 : i.state) ? ? Zv();
        G(this, Rr, { ...r,
            isPending: r.status === "pending",
            isSuccess: r.status === "success",
            isError: r.status === "error",
            isIdle: r.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        })
    }, Xd = function(r) {
        ot.batch(() => {
            var i, a, l, u, d, h, p, g;
            if (C(this, Qn) && this.hasListeners()) {
                const y = C(this, Rr).variables,
                    x = C(this, Rr).context,
                    E = {
                        client: C(this, Kn),
                        meta: this.options.meta,
                        mutationKey: this.options.mutationKey
                    };
                if ((r == null ? void 0 : r.type) === "success") {
                    try {
                        (a = (i = C(this, Qn)).onSuccess) == null || a.call(i, r.data, y, x, E)
                    } catch (T) {
                        Promise.reject(T)
                    }
                    try {
                        (u = (l = C(this, Qn)).onSettled) == null || u.call(l, r.data, null, y, x, E)
                    } catch (T) {
                        Promise.reject(T)
                    }
                } else if ((r == null ? void 0 : r.type) === "error") {
                    try {
                        (h = (d = C(this, Qn)).onError) == null || h.call(d, r.error, y, x, E)
                    } catch (T) {
                        Promise.reject(T)
                    }
                    try {
                        (g = (p = C(this, Qn)).onSettled) == null || g.call(p, void 0, r.error, y, x, E)
                    } catch (T) {
                        Promise.reject(T)
                    }
                }
            }
            this.listeners.forEach(y => {
                y(C(this, Rr))
            })
        })
    }, mv),
    Pn, gv, Ck = (gv = class extends Si {
        constructor(e = {}) {
            super();
            ce(this, Pn);
            this.config = e, G(this, Pn, new Map)
        }
        build(e, r, i) {
            const a = r.queryKey,
                l = r.queryHash ? ? Ff(a, r);
            let u = this.get(l);
            return u || (u = new vk({
                client: e,
                queryKey: a,
                queryHash: l,
                options: e.defaultQueryOptions(r),
                state: i,
                defaultOptions: e.getQueryDefaults(a)
            }), this.add(u)), u
        }
        add(e) {
            C(this, Pn).has(e.queryHash) || (C(this, Pn).set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }))
        }
        remove(e) {
            const r = C(this, Pn).get(e.queryHash);
            r && (e.destroy(), r === e && C(this, Pn).delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }))
        }
        clear() {
            ot.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return C(this, Pn).get(e)
        }
        getAll() {
            return [...C(this, Pn).values()]
        }
        find(e) {
            const r = {
                exact: !0,
                ...e
            };
            return this.getAll().find(i => $g(r, i))
        }
        findAll(e = {}) {
            const r = this.getAll();
            return Object.keys(e).length > 0 ? r.filter(i => $g(e, i)) : r
        }
        notify(e) {
            ot.batch(() => {
                this.listeners.forEach(r => {
                    r(e)
                })
            })
        }
        onFocus() {
            ot.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            ot.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    }, Pn = new WeakMap, gv),
    Qe, Ar, Mr, hi, pi, Or, mi, gi, yv, Tk = (yv = class {
        constructor(t = {}) {
            ce(this, Qe);
            ce(this, Ar);
            ce(this, Mr);
            ce(this, hi);
            ce(this, pi);
            ce(this, Or);
            ce(this, mi);
            ce(this, gi);
            G(this, Qe, t.queryCache || new Ck), G(this, Ar, t.mutationCache || new kk), G(this, Mr, t.defaultOptions || {}), G(this, hi, new Map), G(this, pi, new Map), G(this, Or, 0)
        }
        mount() {
            ml(this, Or)._++, C(this, Or) === 1 && (G(this, mi, Df.subscribe(async t => {
                t && (await this.resumePausedMutations(), C(this, Qe).onFocus())
            })), G(this, gi, Ul.subscribe(async t => {
                t && (await this.resumePausedMutations(), C(this, Qe).onOnline())
            })))
        }
        unmount() {
            var t, e;
            ml(this, Or)._--, C(this, Or) === 0 && ((t = C(this, mi)) == null || t.call(this), G(this, mi, void 0), (e = C(this, gi)) == null || e.call(this), G(this, gi, void 0))
        }
        isFetching(t) {
            return C(this, Qe).findAll({ ...t,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(t) {
            return C(this, Ar).findAll({ ...t,
                status: "pending"
            }).length
        }
        getQueryData(t) {
            var r;
            const e = this.defaultQueryOptions({
                queryKey: t
            });
            return (r = C(this, Qe).get(e.queryHash)) == null ? void 0 : r.state.data
        }
        ensureQueryData(t) {
            const e = this.defaultQueryOptions(t),
                r = C(this, Qe).build(this, e),
                i = r.state.data;
            return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(Fr(e.staleTime, r)) && this.prefetchQuery(e), Promise.resolve(i))
        }
        getQueriesData(t) {
            return C(this, Qe).findAll(t).map(({
                queryKey: e,
                state: r
            }) => {
                const i = r.data;
                return [e, i]
            })
        }
        setQueryData(t, e, r) {
            const i = this.defaultQueryOptions({
                    queryKey: t
                }),
                a = C(this, Qe).get(i.queryHash),
                l = a == null ? void 0 : a.state.data,
                u = ak(e, l);
            if (u !== void 0) return C(this, Qe).build(this, i).setData(u, { ...r,
                manual: !0
            })
        }
        setQueriesData(t, e, r) {
            return ot.batch(() => C(this, Qe).findAll(t).map(({
                queryKey: i
            }) => [i, this.setQueryData(i, e, r)]))
        }
        getQueryState(t) {
            var r;
            const e = this.defaultQueryOptions({
                queryKey: t
            });
            return (r = C(this, Qe).get(e.queryHash)) == null ? void 0 : r.state
        }
        removeQueries(t) {
            const e = C(this, Qe);
            ot.batch(() => {
                e.findAll(t).forEach(r => {
                    e.remove(r)
                })
            })
        }
        resetQueries(t, e) {
            const r = C(this, Qe);
            return ot.batch(() => (r.findAll(t).forEach(i => {
                i.reset()
            }), this.refetchQueries({
                type: "active",
                ...t
            }, e)))
        }
        cancelQueries(t, e = {}) {
            const r = {
                    revert: !0,
                    ...e
                },
                i = ot.batch(() => C(this, Qe).findAll(t).map(a => a.cancel(r)));
            return Promise.all(i).then(Pt).catch(Pt)
        }
        invalidateQueries(t, e = {}) {
            return ot.batch(() => (C(this, Qe).findAll(t).forEach(r => {
                r.invalidate()
            }), (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...t,
                type: (t == null ? void 0 : t.refetchType) ? ? (t == null ? void 0 : t.type) ? ? "active"
            }, e)))
        }
        refetchQueries(t, e = {}) {
            const r = { ...e,
                    cancelRefetch: e.cancelRefetch ? ? !0
                },
                i = ot.batch(() => C(this, Qe).findAll(t).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
                    let l = a.fetch(void 0, r);
                    return r.throwOnError || (l = l.catch(Pt)), a.state.fetchStatus === "paused" ? Promise.resolve() : l
                }));
            return Promise.all(i).then(Pt)
        }
        fetchQuery(t) {
            const e = this.defaultQueryOptions(t);
            e.retry === void 0 && (e.retry = !1);
            const r = C(this, Qe).build(this, e);
            return r.isStaleByTime(Fr(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
        }
        prefetchQuery(t) {
            return this.fetchQuery(t).then(Pt).catch(Pt)
        }
        fetchInfiniteQuery(t) {
            return t.behavior = Xg(t.pages), this.fetchQuery(t)
        }
        prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(Pt).catch(Pt)
        }
        ensureInfiniteQueryData(t) {
            return t.behavior = Xg(t.pages), this.ensureQueryData(t)
        }
        resumePausedMutations() {
            return Ul.isOnline() ? C(this, Ar).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return C(this, Qe)
        }
        getMutationCache() {
            return C(this, Ar)
        }
        getDefaultOptions() {
            return C(this, Mr)
        }
        setDefaultOptions(t) {
            G(this, Mr, t)
        }
        setQueryDefaults(t, e) {
            C(this, hi).set(ws(t), {
                queryKey: t,
                defaultOptions: e
            })
        }
        getQueryDefaults(t) {
            const e = [...C(this, hi).values()],
                r = {};
            return e.forEach(i => {
                Lo(t, i.queryKey) && Object.assign(r, i.defaultOptions)
            }), r
        }
        setMutationDefaults(t, e) {
            C(this, pi).set(ws(t), {
                mutationKey: t,
                defaultOptions: e
            })
        }
        getMutationDefaults(t) {
            const e = [...C(this, pi).values()],
                r = {};
            return e.forEach(i => {
                Lo(t, i.mutationKey) && Object.assign(r, i.defaultOptions)
            }), r
        }
        defaultQueryOptions(t) {
            if (t._defaulted) return t;
            const e = { ...C(this, Mr).queries,
                ...this.getQueryDefaults(t.queryKey),
                ...t,
                _defaulted: !0
            };
            return e.queryHash || (e.queryHash = Ff(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === Nf && (e.enabled = !1), e
        }
        defaultMutationOptions(t) {
            return t != null && t._defaulted ? t : { ...C(this, Mr).mutations,
                ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
                ...t,
                _defaulted: !0
            }
        }
        clear() {
            C(this, Qe).clear(), C(this, Ar).clear()
        }
    }, Qe = new WeakMap, Ar = new WeakMap, Mr = new WeakMap, hi = new WeakMap, pi = new WeakMap, Or = new WeakMap, mi = new WeakMap, gi = new WeakMap, yv),
    ew = F.createContext(void 0),
    tw = t => {
        const e = F.useContext(ew);
        if (!e) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return e
    },
    Pk = ({
        client: t,
        children: e
    }) => (F.useEffect(() => (t.mount(), () => {
        t.unmount()
    }), [t]), v.jsx(ew.Provider, {
        value: t,
        children: e
    })),
    nw = F.createContext(!1),
    Rk = () => F.useContext(nw);
nw.Provider;

function Ak() {
    let t = !1;
    return {
        clearReset: () => {
            t = !1
        },
        reset: () => {
            t = !0
        },
        isReset: () => t
    }
}
var Mk = F.createContext(Ak()),
    Ok = () => F.useContext(Mk),
    jk = (t, e, r) => {
        const i = r != null && r.state.error && typeof t.throwOnError == "function" ? Lf(t.throwOnError, [r.state.error, r]) : t.throwOnError;
        (t.suspense || t.experimental_prefetchInRender || i) && (e.isReset() || (t.retryOnMount = !1))
    },
    Fk = t => {
        F.useEffect(() => {
            t.clearReset()
        }, [t])
    },
    Nk = ({
        result: t,
        errorResetBoundary: e,
        throwOnError: r,
        query: i,
        suspense: a
    }) => t.isError && !e.isReset() && !t.isFetching && i && (a && t.data === void 0 || Lf(r, [t.error, i])),
    Lk = t => {
        if (t.suspense) {
            const r = a => a === "static" ? a : Math.max(a ? ? 1e3, 1e3),
                i = t.staleTime;
            t.staleTime = typeof i == "function" ? (...a) => r(i(...a)) : r(i), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3))
        }
    },
    Dk = (t, e) => t.isLoading && t.isFetching && !e,
    Bk = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending,
    Zg = (t, e, r) => e.fetchOptimistic(t).catch(() => {
        r.clearReset()
    });

function Ik(t, e, r) {
    var x, E, T, b;
    const i = Rk(),
        a = Ok(),
        l = tw(),
        u = l.defaultQueryOptions(t);
    (E = (x = l.getDefaultOptions().queries) == null ? void 0 : x._experimental_beforeQuery) == null || E.call(x, u);
    const d = l.getQueryCache().get(u.queryHash);
    u._optimisticResults = i ? "isRestoring" : "optimistic", Lk(u), jk(u, a, d), Fk(a);
    const h = !l.getQueryCache().get(u.queryHash),
        [p] = F.useState(() => new e(l, u)),
        g = p.getOptimisticResult(u),
        y = !i && t.subscribed !== !1;
    if (F.useSyncExternalStore(F.useCallback(S => {
            const k = y ? p.subscribe(ot.batchCalls(S)) : Pt;
            return p.updateResult(), k
        }, [p, y]), () => p.getCurrentResult(), () => p.getCurrentResult()), F.useEffect(() => {
            p.setOptions(u)
        }, [u, p]), Bk(u, g)) throw Zg(u, p, a);
    if (Nk({
            result: g,
            errorResetBoundary: a,
            throwOnError: u.throwOnError,
            query: d,
            suspense: u.suspense
        })) throw g.error;
    if ((b = (T = l.getDefaultOptions().queries) == null ? void 0 : T._experimental_afterQuery) == null || b.call(T, u, g), u.experimental_prefetchInRender && !vs && Dk(g, i)) {
        const S = h ? Zg(u, p, a) : d == null ? void 0 : d.promise;
        S == null || S.catch(Pt).finally(() => {
            p.updateResult()
        })
    }
    return u.notifyOnChangeProps ? g : p.trackResult(g)
}

function zk(t, e) {
    return Ik(t, wk)
}

function Vk(t, e) {
    const r = tw(),
        [i] = F.useState(() => new _k(r, t));
    F.useEffect(() => {
        i.setOptions(t)
    }, [i, t]);
    const a = F.useSyncExternalStore(F.useCallback(u => i.subscribe(ot.batchCalls(u)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult()),
        l = F.useCallback((u, d) => {
            i.mutate(u, d).catch(Pt)
        }, [i]);
    if (a.error && Lf(i.options.throwOnError, [a.error])) throw a.error;
    return { ...a,
        mutate: l,
        mutateAsync: a.mutate
    }
}
const Uk = new Tk({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});
wv();
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Do() {
    return Do = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }, Do.apply(this, arguments)
}
var jr;
(function(t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
})(jr || (jr = {}));
const ey = "popstate";

function $k(t) {
    t === void 0 && (t = {});

    function e(i, a) {
        let {
            pathname: l,
            search: u,
            hash: d
        } = i.location;
        return Jd("", {
            pathname: l,
            search: u,
            hash: d
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }

    function r(i, a) {
        return typeof a == "string" ? a : $l(a)
    }
    return qk(e, r, null, t)
}

function nt(t, e) {
    if (t === !1 || t === null || typeof t > "u") throw new Error(e)
}

function If(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}

function Wk() {
    return Math.random().toString(36).substr(2, 8)
}

function ty(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}

function Jd(t, e, r, i) {
    return r === void 0 && (r = null), Do({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? bi(e) : e, {
        state: r,
        key: e && e.key || i || Wk()
    })
}

function $l(t) {
    let {
        pathname: e = "/",
        search: r = "",
        hash: i = ""
    } = t;
    return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r), i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i), e
}

function bi(t) {
    let e = {};
    if (t) {
        let r = t.indexOf("#");
        r >= 0 && (e.hash = t.substr(r), t = t.substr(0, r));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substr(i), t = t.substr(0, i)), t && (e.pathname = t)
    }
    return e
}

function qk(t, e, r, i) {
    i === void 0 && (i = {});
    let {
        window: a = document.defaultView,
        v5Compat: l = !1
    } = i, u = a.history, d = jr.Pop, h = null, p = g();
    p == null && (p = 0, u.replaceState(Do({}, u.state, {
        idx: p
    }), ""));

    function g() {
        return (u.state || {
            idx: null
        }).idx
    }

    function y() {
        d = jr.Pop;
        let S = g(),
            k = S == null ? null : S - p;
        p = S, h && h({
            action: d,
            location: b.location,
            delta: k
        })
    }

    function x(S, k) {
        d = jr.Push;
        let j = Jd(b.location, S, k);
        p = g() + 1;
        let R = ty(j, p),
            M = b.createHref(j);
        try {
            u.pushState(R, "", M)
        } catch (B) {
            if (B instanceof DOMException && B.name === "DataCloneError") throw B;
            a.location.assign(M)
        }
        l && h && h({
            action: d,
            location: b.location,
            delta: 1
        })
    }

    function E(S, k) {
        d = jr.Replace;
        let j = Jd(b.location, S, k);
        p = g();
        let R = ty(j, p),
            M = b.createHref(j);
        u.replaceState(R, "", M), l && h && h({
            action: d,
            location: b.location,
            delta: 0
        })
    }

    function T(S) {
        let k = a.location.origin !== "null" ? a.location.origin : a.location.href,
            j = typeof S == "string" ? S : $l(S);
        return j = j.replace(/ $/, "%20"), nt(k, "No window.location.(origin|href) available to create URL for href: " + j), new URL(j, k)
    }
    let b = {
        get action() {
            return d
        },
        get location() {
            return t(a, u)
        },
        listen(S) {
            if (h) throw new Error("A history only accepts one active listener");
            return a.addEventListener(ey, y), h = S, () => {
                a.removeEventListener(ey, y), h = null
            }
        },
        createHref(S) {
            return e(a, S)
        },
        createURL: T,
        encodeLocation(S) {
            let k = T(S);
            return {
                pathname: k.pathname,
                search: k.search,
                hash: k.hash
            }
        },
        push: x,
        replace: E,
        go(S) {
            return u.go(S)
        }
    };
    return b
}
var ny;
(function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error"
})(ny || (ny = {}));

function Hk(t, e, r) {
    return r === void 0 && (r = "/"), Kk(t, e, r)
}

function Kk(t, e, r, i) {
    let a = typeof e == "string" ? bi(e) : e,
        l = zf(a.pathname || "/", r);
    if (l == null) return null;
    let u = rw(t);
    Qk(u);
    let d = null;
    for (let h = 0; d == null && h < u.length; ++h) {
        let p = o2(l);
        d = r2(u[h], p)
    }
    return d
}

function rw(t, e, r, i) {
    e === void 0 && (e = []), r === void 0 && (r = []), i === void 0 && (i = "");
    let a = (l, u, d) => {
        let h = {
            relativePath: d === void 0 ? l.path || "" : d,
            caseSensitive: l.caseSensitive === !0,
            childrenIndex: u,
            route: l
        };
        h.relativePath.startsWith("/") && (nt(h.relativePath.startsWith(i), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), h.relativePath = h.relativePath.slice(i.length));
        let p = Nr([i, h.relativePath]),
            g = r.concat(h);
        l.children && l.children.length > 0 && (nt(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + p + '".')), rw(l.children, e, g, p)), !(l.path == null && !l.index) && e.push({
            path: p,
            score: t2(p, l.index),
            routesMeta: g
        })
    };
    return t.forEach((l, u) => {
        var d;
        if (l.path === "" || !((d = l.path) != null && d.includes("?"))) a(l, u);
        else
            for (let h of sw(l.path)) a(l, u, h)
    }), e
}

function sw(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [r, ...i] = e, a = r.endsWith("?"), l = r.replace(/\?$/, "");
    if (i.length === 0) return a ? [l, ""] : [l];
    let u = sw(i.join("/")),
        d = [];
    return d.push(...u.map(h => h === "" ? l : [l, h].join("/"))), a && d.push(...u), d.map(h => t.startsWith("/") && h === "" ? "/" : h)
}

function Qk(t) {
    t.sort((e, r) => e.score !== r.score ? r.score - e.score : n2(e.routesMeta.map(i => i.childrenIndex), r.routesMeta.map(i => i.childrenIndex)))
}
const Gk = /^:[\w-]+$/,
    Yk = 3,
    Xk = 2,
    Jk = 1,
    Zk = 10,
    e2 = -2,
    ry = t => t === "*";

function t2(t, e) {
    let r = t.split("/"),
        i = r.length;
    return r.some(ry) && (i += e2), e && (i += Xk), r.filter(a => !ry(a)).reduce((a, l) => a + (Gk.test(l) ? Yk : l === "" ? Jk : Zk), i)
}

function n2(t, e) {
    return t.length === e.length && t.slice(0, -1).every((i, a) => i === e[a]) ? t[t.length - 1] - e[e.length - 1] : 0
}

function r2(t, e, r) {
    let {
        routesMeta: i
    } = t, a = {}, l = "/", u = [];
    for (let d = 0; d < i.length; ++d) {
        let h = i[d],
            p = d === i.length - 1,
            g = l === "/" ? e : e.slice(l.length) || "/",
            y = s2({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: p
            }, g),
            x = h.route;
        if (!y) return null;
        Object.assign(a, y.params), u.push({
            params: a,
            pathname: Nr([l, y.pathname]),
            pathnameBase: d2(Nr([l, y.pathnameBase])),
            route: x
        }), y.pathnameBase !== "/" && (l = Nr([l, y.pathnameBase]))
    }
    return u
}

function s2(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let [r, i] = i2(t.path, t.caseSensitive, t.end), a = e.match(r);
    if (!a) return null;
    let l = a[0],
        u = l.replace(/(.)\/+$/, "$1"),
        d = a.slice(1);
    return {
        params: i.reduce((p, g, y) => {
            let {
                paramName: x,
                isOptional: E
            } = g;
            if (x === "*") {
                let b = d[y] || "";
                u = l.slice(0, l.length - b.length).replace(/(.)\/+$/, "$1")
            }
            const T = d[y];
            return E && !T ? p[x] = void 0 : p[x] = (T || "").replace(/%2F/g, "/"), p
        }, {}),
        pathname: l,
        pathnameBase: u,
        pattern: t
    }
}

function i2(t, e, r) {
    e === void 0 && (e = !1), r === void 0 && (r = !0), If(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = [],
        a = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (u, d, h) => (i.push({
            paramName: d,
            isOptional: h != null
        }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
        paramName: "*"
    }), a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, e ? void 0 : "i"), i]
}

function o2(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return If(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t
    }
}

function zf(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let r = e.endsWith("/") ? e.length - 1 : e.length,
        i = t.charAt(r);
    return i && i !== "/" ? null : t.slice(r) || "/"
}
const a2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    l2 = t => a2.test(t);

function u2(t, e) {
    e === void 0 && (e = "/");
    let {
        pathname: r,
        search: i = "",
        hash: a = ""
    } = typeof t == "string" ? bi(t) : t, l;
    if (r)
        if (l2(r)) l = r;
        else {
            if (r.includes("//")) {
                let u = r;
                r = r.replace(/\/\/+/g, "/"), If(!1, "Pathnames cannot have embedded double slashes - normalizing " + (u + " -> " + r))
            }
            r.startsWith("/") ? l = sy(r.substring(1), "/") : l = sy(r, e)
        }
    else l = e;
    return {
        pathname: l,
        search: f2(i),
        hash: h2(a)
    }
}

function sy(t, e) {
    let r = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach(a => {
        a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a)
    }), r.length > 1 ? r.join("/") : "/"
}

function hd(t, e, r, i) {
    return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function c2(t) {
    return t.filter((e, r) => r === 0 || e.route.path && e.route.path.length > 0)
}

function iw(t, e) {
    let r = c2(t);
    return e ? r.map((i, a) => a === r.length - 1 ? i.pathname : i.pathnameBase) : r.map(i => i.pathnameBase)
}

function ow(t, e, r, i) {
    i === void 0 && (i = !1);
    let a;
    typeof t == "string" ? a = bi(t) : (a = Do({}, t), nt(!a.pathname || !a.pathname.includes("?"), hd("?", "pathname", "search", a)), nt(!a.pathname || !a.pathname.includes("#"), hd("#", "pathname", "hash", a)), nt(!a.search || !a.search.includes("#"), hd("#", "search", "hash", a)));
    let l = t === "" || a.pathname === "",
        u = l ? "/" : a.pathname,
        d;
    if (u == null) d = r;
    else {
        let y = e.length - 1;
        if (!i && u.startsWith("..")) {
            let x = u.split("/");
            for (; x[0] === "..";) x.shift(), y -= 1;
            a.pathname = x.join("/")
        }
        d = y >= 0 ? e[y] : "/"
    }
    let h = u2(a, d),
        p = u && u !== "/" && u.endsWith("/"),
        g = (l || u === ".") && r.endsWith("/");
    return !h.pathname.endsWith("/") && (p || g) && (h.pathname += "/"), h
}
const Nr = t => t.join("/").replace(/\/\/+/g, "/"),
    d2 = t => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
    f2 = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t,
    h2 = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;

function p2(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t
}
const aw = ["post", "put", "patch", "delete"];
new Set(aw);
const m2 = ["get", ...aw];
new Set(m2);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Bo() {
    return Bo = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }, Bo.apply(this, arguments)
}
const Vf = F.createContext(null),
    g2 = F.createContext(null),
    Es = F.createContext(null),
    Jl = F.createContext(null),
    ks = F.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    lw = F.createContext(null);

function y2(t, e) {
    let {
        relative: r
    } = e === void 0 ? {} : e;
    Xo() || nt(!1);
    let {
        basename: i,
        navigator: a
    } = F.useContext(Es), {
        hash: l,
        pathname: u,
        search: d
    } = cw(t, {
        relative: r
    }), h = u;
    return i !== "/" && (h = u === "/" ? i : Nr([i, u])), a.createHref({
        pathname: h,
        search: d,
        hash: l
    })
}

function Xo() {
    return F.useContext(Jl) != null
}

function Ei() {
    return Xo() || nt(!1), F.useContext(Jl).location
}

function uw(t) {
    F.useContext(Es).static || F.useLayoutEffect(t)
}

function v2() {
    let {
        isDataRoute: t
    } = F.useContext(ks);
    return t ? M2() : w2()
}

function w2() {
    Xo() || nt(!1);
    let t = F.useContext(Vf),
        {
            basename: e,
            future: r,
            navigator: i
        } = F.useContext(Es),
        {
            matches: a
        } = F.useContext(ks),
        {
            pathname: l
        } = Ei(),
        u = JSON.stringify(iw(a, r.v7_relativeSplatPath)),
        d = F.useRef(!1);
    return uw(() => {
        d.current = !0
    }), F.useCallback(function(p, g) {
        if (g === void 0 && (g = {}), !d.current) return;
        if (typeof p == "number") {
            i.go(p);
            return
        }
        let y = ow(p, JSON.parse(u), l, g.relative === "path");
        t == null && e !== "/" && (y.pathname = y.pathname === "/" ? e : Nr([e, y.pathname])), (g.replace ? i.replace : i.push)(y, g.state, g)
    }, [e, i, u, l, t])
}

function cw(t, e) {
    let {
        relative: r
    } = e === void 0 ? {} : e, {
        future: i
    } = F.useContext(Es), {
        matches: a
    } = F.useContext(ks), {
        pathname: l
    } = Ei(), u = JSON.stringify(iw(a, i.v7_relativeSplatPath));
    return F.useMemo(() => ow(t, JSON.parse(u), l, r === "path"), [t, u, l, r])
}

function x2(t, e) {
    return S2(t, e)
}

function S2(t, e, r, i) {
    Xo() || nt(!1);
    let {
        navigator: a
    } = F.useContext(Es), {
        matches: l
    } = F.useContext(ks), u = l[l.length - 1], d = u ? u.params : {};
    u && u.pathname;
    let h = u ? u.pathnameBase : "/";
    u && u.route;
    let p = Ei(),
        g;
    if (e) {
        var y;
        let S = typeof e == "string" ? bi(e) : e;
        h === "/" || (y = S.pathname) != null && y.startsWith(h) || nt(!1), g = S
    } else g = p;
    let x = g.pathname || "/",
        E = x;
    if (h !== "/") {
        let S = h.replace(/^\//, "").split("/");
        E = "/" + x.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let T = Hk(t, {
            pathname: E
        }),
        b = C2(T && T.map(S => Object.assign({}, S, {
            params: Object.assign({}, d, S.params),
            pathname: Nr([h, a.encodeLocation ? a.encodeLocation(S.pathname).pathname : S.pathname]),
            pathnameBase: S.pathnameBase === "/" ? h : Nr([h, a.encodeLocation ? a.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
        })), l, r, i);
    return e && b ? F.createElement(Jl.Provider, {
        value: {
            location: Bo({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, g),
            navigationType: jr.Pop
        }
    }, b) : b
}

function b2() {
    let t = A2(),
        e = p2(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
        r = t instanceof Error ? t.stack : null,
        a = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return F.createElement(F.Fragment, null, F.createElement("h2", null, "Unexpected Application Error!"), F.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), r ? F.createElement("pre", {
        style: a
    }, r) : null, null)
}
const E2 = F.createElement(b2, null);
class k2 extends F.Component {
    constructor(e) {
        super(e), this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, r) {
        return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation
        }
    }
    componentDidCatch(e, r) {
        console.error("React Router caught the following error during render", e, r)
    }
    render() {
        return this.state.error !== void 0 ? F.createElement(ks.Provider, {
            value: this.props.routeContext
        }, F.createElement(lw.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function _2(t) {
    let {
        routeContext: e,
        match: r,
        children: i
    } = t, a = F.useContext(Vf);
    return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), F.createElement(ks.Provider, {
        value: e
    }, i)
}

function C2(t, e, r, i) {
    var a;
    if (e === void 0 && (e = []), r === void 0 && (r = null), i === void 0 && (i = null), t == null) {
        var l;
        if (!r) return null;
        if (r.errors) t = r.matches;
        else if ((l = i) != null && l.v7_partialHydration && e.length === 0 && !r.initialized && r.matches.length > 0) t = r.matches;
        else return null
    }
    let u = t,
        d = (a = r) == null ? void 0 : a.errors;
    if (d != null) {
        let g = u.findIndex(y => y.route.id && (d == null ? void 0 : d[y.route.id]) !== void 0);
        g >= 0 || nt(!1), u = u.slice(0, Math.min(u.length, g + 1))
    }
    let h = !1,
        p = -1;
    if (r && i && i.v7_partialHydration)
        for (let g = 0; g < u.length; g++) {
            let y = u[g];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (p = g), y.route.id) {
                let {
                    loaderData: x,
                    errors: E
                } = r, T = y.route.loader && x[y.route.id] === void 0 && (!E || E[y.route.id] === void 0);
                if (y.route.lazy || T) {
                    h = !0, p >= 0 ? u = u.slice(0, p + 1) : u = [u[0]];
                    break
                }
            }
        }
    return u.reduceRight((g, y, x) => {
        let E, T = !1,
            b = null,
            S = null;
        r && (E = d && y.route.id ? d[y.route.id] : void 0, b = y.route.errorElement || E2, h && (p < 0 && x === 0 ? (O2("route-fallback"), T = !0, S = null) : p === x && (T = !0, S = y.route.hydrateFallbackElement || null)));
        let k = e.concat(u.slice(0, x + 1)),
            j = () => {
                let R;
                return E ? R = b : T ? R = S : y.route.Component ? R = F.createElement(y.route.Component, null) : y.route.element ? R = y.route.element : R = g, F.createElement(_2, {
                    match: y,
                    routeContext: {
                        outlet: g,
                        matches: k,
                        isDataRoute: r != null
                    },
                    children: R
                })
            };
        return r && (y.route.ErrorBoundary || y.route.errorElement || x === 0) ? F.createElement(k2, {
            location: r.location,
            revalidation: r.revalidation,
            component: b,
            error: E,
            children: j(),
            routeContext: {
                outlet: null,
                matches: k,
                isDataRoute: !0
            }
        }) : j()
    }, null)
}
var dw = (function(t) {
        return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t
    })(dw || {}),
    fw = (function(t) {
        return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t
    })(fw || {});

function T2(t) {
    let e = F.useContext(Vf);
    return e || nt(!1), e
}

function P2(t) {
    let e = F.useContext(g2);
    return e || nt(!1), e
}

function R2(t) {
    let e = F.useContext(ks);
    return e || nt(!1), e
}

function hw(t) {
    let e = R2(),
        r = e.matches[e.matches.length - 1];
    return r.route.id || nt(!1), r.route.id
}

function A2() {
    var t;
    let e = F.useContext(lw),
        r = P2(),
        i = hw();
    return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[i]
}

function M2() {
    let {
        router: t
    } = T2(dw.UseNavigateStable), e = hw(fw.UseNavigateStable), r = F.useRef(!1);
    return uw(() => {
        r.current = !0
    }), F.useCallback(function(a, l) {
        l === void 0 && (l = {}), r.current && (typeof a == "number" ? t.navigate(a) : t.navigate(a, Bo({
            fromRouteId: e
        }, l)))
    }, [t, e])
}
const iy = {};

function O2(t, e, r) {
    iy[t] || (iy[t] = !0)
}

function j2(t, e) {
    t == null || t.v7_startTransition, t == null || t.v7_relativeSplatPath
}

function br(t) {
    nt(!1)
}

function F2(t) {
    let {
        basename: e = "/",
        children: r = null,
        location: i,
        navigationType: a = jr.Pop,
        navigator: l,
        static: u = !1,
        future: d
    } = t;
    Xo() && nt(!1);
    let h = e.replace(/^\/*/, "/"),
        p = F.useMemo(() => ({
            basename: h,
            navigator: l,
            static: u,
            future: Bo({
                v7_relativeSplatPath: !1
            }, d)
        }), [h, d, l, u]);
    typeof i == "string" && (i = bi(i));
    let {
        pathname: g = "/",
        search: y = "",
        hash: x = "",
        state: E = null,
        key: T = "default"
    } = i, b = F.useMemo(() => {
        let S = zf(g, h);
        return S == null ? null : {
            location: {
                pathname: S,
                search: y,
                hash: x,
                state: E,
                key: T
            },
            navigationType: a
        }
    }, [h, g, y, x, E, T, a]);
    return b == null ? null : F.createElement(Es.Provider, {
        value: p
    }, F.createElement(Jl.Provider, {
        children: r,
        value: b
    }))
}

function N2(t) {
    let {
        children: e,
        location: r
    } = t;
    return x2(Zd(e), r)
}
new Promise(() => {});

function Zd(t, e) {
    e === void 0 && (e = []);
    let r = [];
    return F.Children.forEach(t, (i, a) => {
        if (!F.isValidElement(i)) return;
        let l = [...e, a];
        if (i.type === F.Fragment) {
            r.push.apply(r, Zd(i.props.children, l));
            return
        }
        i.type !== br && nt(!1), !i.props.index || !i.props.children || nt(!1);
        let u = {
            id: i.props.id || l.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (u.children = Zd(i.props.children, l)), r.push(u)
    }), r
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ef() {
    return ef = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }, ef.apply(this, arguments)
}

function L2(t, e) {
    if (t == null) return {};
    var r = {},
        i = Object.keys(t),
        a, l;
    for (l = 0; l < i.length; l++) a = i[l], !(e.indexOf(a) >= 0) && (r[a] = t[a]);
    return r
}

function D2(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}

function B2(t, e) {
    return t.button === 0 && (!e || e === "_self") && !D2(t)
}
const I2 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
    z2 = "6";
try {
    window.__reactRouterVersion = z2
} catch {}
const V2 = "startTransition",
    oy = Tb[V2];

function U2(t) {
    let {
        basename: e,
        children: r,
        future: i,
        window: a
    } = t, l = F.useRef();
    l.current == null && (l.current = $k({
        window: a,
        v5Compat: !0
    }));
    let u = l.current,
        [d, h] = F.useState({
            action: u.action,
            location: u.location
        }),
        {
            v7_startTransition: p
        } = i || {},
        g = F.useCallback(y => {
            p && oy ? oy(() => h(y)) : h(y)
        }, [h, p]);
    return F.useLayoutEffect(() => u.listen(g), [u, g]), F.useEffect(() => j2(i), [i]), F.createElement(F2, {
        basename: e,
        children: r,
        location: d.location,
        navigationType: d.action,
        navigator: u,
        future: i
    })
}
const $2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    W2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Rt = F.forwardRef(function(e, r) {
        let {
            onClick: i,
            relative: a,
            reloadDocument: l,
            replace: u,
            state: d,
            target: h,
            to: p,
            preventScrollReset: g,
            viewTransition: y
        } = e, x = L2(e, I2), {
            basename: E
        } = F.useContext(Es), T, b = !1;
        if (typeof p == "string" && W2.test(p) && (T = p, $2)) try {
            let R = new URL(window.location.href),
                M = p.startsWith("//") ? new URL(R.protocol + p) : new URL(p),
                B = zf(M.pathname, E);
            M.origin === R.origin && B != null ? p = B + M.search + M.hash : b = !0
        } catch {}
        let S = y2(p, {
                relative: a
            }),
            k = q2(p, {
                replace: u,
                state: d,
                target: h,
                preventScrollReset: g,
                relative: a,
                viewTransition: y
            });

        function j(R) {
            i && i(R), R.defaultPrevented || k(R)
        }
        return F.createElement("a", ef({}, x, {
            href: T || S,
            onClick: b || l ? i : j,
            ref: r,
            target: h
        }))
    });
var ay;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState"
})(ay || (ay = {}));
var ly;
(function(t) {
    t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration"
})(ly || (ly = {}));

function q2(t, e) {
    let {
        target: r,
        replace: i,
        state: a,
        preventScrollReset: l,
        relative: u,
        viewTransition: d
    } = e === void 0 ? {} : e, h = v2(), p = Ei(), g = cw(t, {
        relative: u
    });
    return F.useCallback(y => {
        if (B2(y, r)) {
            y.preventDefault();
            let x = i !== void 0 ? i : $l(p) === $l(g);
            h(t, {
                replace: x,
                state: a,
                preventScrollReset: l,
                relative: u,
                viewTransition: d
            })
        }
    }, [p, h, g, i, a, r, t, l, u, d])
}

function pw(t, e) {
    return function() {
        return t.apply(e, arguments)
    }
}
const {
    toString: H2
} = Object.prototype, {
    getPrototypeOf: Zl
} = Object, {
    iterator: eu,
    toStringTag: mw
} = Symbol, tu = (t => e => {
    const r = H2.call(e);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase())
})(Object.create(null)), wn = t => (t = t.toLowerCase(), e => tu(e) === t), nu = t => e => typeof e === t, {
    isArray: xs
} = Array, yi = nu("undefined");

function ki(t) {
    return t !== null && !yi(t) && t.constructor !== null && !yi(t.constructor) && Vt(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const gw = wn("ArrayBuffer");

function K2(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && gw(t.buffer), e
}
const Q2 = nu("string"),
    Vt = nu("function"),
    yw = nu("number"),
    Jo = t => t !== null && typeof t == "object",
    G2 = t => t === !0 || t === !1,
    Al = t => {
        if (tu(t) !== "object") return !1;
        const e = Zl(t);
        return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(mw in t) && !(eu in t)
    },
    Y2 = t => {
        if (!Jo(t) || ki(t)) return !1;
        try {
            return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype
        } catch {
            return !1
        }
    },
    X2 = wn("Date"),
    J2 = wn("File"),
    Z2 = t => !!(t && typeof t.uri < "u"),
    e_ = t => t && typeof t.getParts < "u",
    t_ = wn("Blob"),
    n_ = wn("FileList"),
    r_ = t => Jo(t) && Vt(t.pipe);

function s_() {
    return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}
}
const uy = s_(),
    cy = typeof uy.FormData < "u" ? uy.FormData : void 0,
    i_ = t => {
        if (!t) return !1;
        if (cy && t instanceof cy) return !0;
        const e = Zl(t);
        if (!e || e === Object.prototype || !Vt(t.append)) return !1;
        const r = tu(t);
        return r === "formdata" || r === "object" && Vt(t.toString) && t.toString() === "[object FormData]"
    },
    o_ = wn("URLSearchParams"),
    [a_, l_, u_, c_] = ["ReadableStream", "Request", "Response", "Headers"].map(wn),
    d_ = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Zo(t, e, {
    allOwnKeys: r = !1
} = {}) {
    if (t === null || typeof t > "u") return;
    let i, a;
    if (typeof t != "object" && (t = [t]), xs(t))
        for (i = 0, a = t.length; i < a; i++) e.call(null, t[i], i, t);
    else {
        if (ki(t)) return;
        const l = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
            u = l.length;
        let d;
        for (i = 0; i < u; i++) d = l[i], e.call(null, t[d], d, t)
    }
}

function vw(t, e) {
    if (ki(t)) return null;
    e = e.toLowerCase();
    const r = Object.keys(t);
    let i = r.length,
        a;
    for (; i-- > 0;)
        if (a = r[i], e === a.toLowerCase()) return a;
    return null
}
const is = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    ww = t => !yi(t) && t !== is;

function tf(...t) {
    const {
        caseless: e,
        skipUndefined: r
    } = ww(this) && this || {}, i = {}, a = (l, u) => {
        if (u === "__proto__" || u === "constructor" || u === "prototype") return;
        const d = e && typeof u == "string" && vw(i, u) || u,
            h = nf(i, d) ? i[d] : void 0;
        Al(h) && Al(l) ? i[d] = tf(h, l) : Al(l) ? i[d] = tf({}, l) : xs(l) ? i[d] = l.slice() : (!r || !yi(l)) && (i[d] = l)
    };
    for (let l = 0, u = t.length; l < u; l++) {
        const d = t[l];
        if (!d || ki(d) || (Zo(d, a), typeof d != "object" || xs(d))) continue;
        const h = Object.getOwnPropertySymbols(d);
        for (let p = 0; p < h.length; p++) {
            const g = h[p];
            E_.call(d, g) && a(d[g], g)
        }
    }
    return i
}
const f_ = (t, e, r, {
        allOwnKeys: i
    } = {}) => (Zo(e, (a, l) => {
        r && Vt(a) ? Object.defineProperty(t, l, {
            __proto__: null,
            value: pw(a, r),
            writable: !0,
            enumerable: !0,
            configurable: !0
        }) : Object.defineProperty(t, l, {
            __proto__: null,
            value: a,
            writable: !0,
            enumerable: !0,
            configurable: !0
        })
    }, {
        allOwnKeys: i
    }), t),
    h_ = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
    p_ = (t, e, r, i) => {
        t.prototype = Object.create(e.prototype, i), Object.defineProperty(t.prototype, "constructor", {
            __proto__: null,
            value: t,
            writable: !0,
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "super", {
            __proto__: null,
            value: e.prototype
        }), r && Object.assign(t.prototype, r)
    },
    m_ = (t, e, r, i) => {
        let a, l, u;
        const d = {};
        if (e = e || {}, t == null) return e;
        do {
            for (a = Object.getOwnPropertyNames(t), l = a.length; l-- > 0;) u = a[l], (!i || i(u, t, e)) && !d[u] && (e[u] = t[u], d[u] = !0);
            t = r !== !1 && Zl(t)
        } while (t && (!r || r(t, e)) && t !== Object.prototype);
        return e
    },
    g_ = (t, e, r) => {
        t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
        const i = t.indexOf(e, r);
        return i !== -1 && i === r
    },
    y_ = t => {
        if (!t) return null;
        if (xs(t)) return t;
        let e = t.length;
        if (!yw(e)) return null;
        const r = new Array(e);
        for (; e-- > 0;) r[e] = t[e];
        return r
    },
    v_ = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && Zl(Uint8Array)),
    w_ = (t, e) => {
        const i = (t && t[eu]).call(t);
        let a;
        for (;
            (a = i.next()) && !a.done;) {
            const l = a.value;
            e.call(t, l[0], l[1])
        }
    },
    x_ = (t, e) => {
        let r;
        const i = [];
        for (;
            (r = t.exec(e)) !== null;) i.push(r);
        return i
    },
    S_ = wn("HTMLFormElement"),
    b_ = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, i, a) {
        return i.toUpperCase() + a
    }),
    nf = (({
        hasOwnProperty: t
    }) => (e, r) => t.call(e, r))(Object.prototype),
    {
        propertyIsEnumerable: E_
    } = Object.prototype,
    k_ = wn("RegExp"),
    xw = (t, e) => {
        const r = Object.getOwnPropertyDescriptors(t),
            i = {};
        Zo(r, (a, l) => {
            let u;
            (u = e(a, l, t)) !== !1 && (i[l] = u || a)
        }), Object.defineProperties(t, i)
    },
    __ = t => {
        xw(t, (e, r) => {
            if (Vt(t) && ["arguments", "caller", "callee"].includes(r)) return !1;
            const i = t[r];
            if (Vt(i)) {
                if (e.enumerable = !1, "writable" in e) {
                    e.writable = !1;
                    return
                }
                e.set || (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'")
                })
            }
        })
    },
    C_ = (t, e) => {
        const r = {},
            i = a => {
                a.forEach(l => {
                    r[l] = !0
                })
            };
        return xs(t) ? i(t) : i(String(t).split(e)), r
    },
    T_ = () => {},
    P_ = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;

function R_(t) {
    return !!(t && Vt(t.append) && t[mw] === "FormData" && t[eu])
}
const A_ = t => {
        const e = new WeakSet,
            r = i => {
                if (Jo(i)) {
                    if (e.has(i)) return;
                    if (ki(i)) return i;
                    if (!("toJSON" in i)) {
                        e.add(i);
                        const a = xs(i) ? [] : {};
                        return Zo(i, (l, u) => {
                            const d = r(l);
                            !yi(d) && (a[u] = d)
                        }), e.delete(i), a
                    }
                }
                return i
            };
        return r(t)
    },
    M_ = wn("AsyncFunction"),
    O_ = t => t && (Jo(t) || Vt(t)) && Vt(t.then) && Vt(t.catch),
    Sw = ((t, e) => t ? setImmediate : e ? ((r, i) => (is.addEventListener("message", ({
        source: a,
        data: l
    }) => {
        a === is && l === r && i.length && i.shift()()
    }, !1), a => {
        i.push(a), is.postMessage(r, "*")
    }))(`axios@${Math.random()}`, []) : r => setTimeout(r))(typeof setImmediate == "function", Vt(is.postMessage)),
    j_ = typeof queueMicrotask < "u" ? queueMicrotask.bind(is) : typeof process < "u" && process.nextTick || Sw,
    F_ = t => t != null && Vt(t[eu]),
    N = {
        isArray: xs,
        isArrayBuffer: gw,
        isBuffer: ki,
        isFormData: i_,
        isArrayBufferView: K2,
        isString: Q2,
        isNumber: yw,
        isBoolean: G2,
        isObject: Jo,
        isPlainObject: Al,
        isEmptyObject: Y2,
        isReadableStream: a_,
        isRequest: l_,
        isResponse: u_,
        isHeaders: c_,
        isUndefined: yi,
        isDate: X2,
        isFile: J2,
        isReactNativeBlob: Z2,
        isReactNative: e_,
        isBlob: t_,
        isRegExp: k_,
        isFunction: Vt,
        isStream: r_,
        isURLSearchParams: o_,
        isTypedArray: v_,
        isFileList: n_,
        forEach: Zo,
        merge: tf,
        extend: f_,
        trim: d_,
        stripBOM: h_,
        inherits: p_,
        toFlatObject: m_,
        kindOf: tu,
        kindOfTest: wn,
        endsWith: g_,
        toArray: y_,
        forEachEntry: w_,
        matchAll: x_,
        isHTMLForm: S_,
        hasOwnProperty: nf,
        hasOwnProp: nf,
        reduceDescriptors: xw,
        freezeMethods: __,
        toObjectSet: C_,
        toCamelCase: b_,
        noop: T_,
        toFiniteNumber: P_,
        findKey: vw,
        global: is,
        isContextDefined: ww,
        isSpecCompliantForm: R_,
        toJSONObject: A_,
        isAsyncFn: M_,
        isThenable: O_,
        setImmediate: Sw,
        asap: j_,
        isIterable: F_
    },
    N_ = N.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    L_ = t => {
        const e = {};
        let r, i, a;
        return t && t.split(`
`).forEach(function(u) {
            a = u.indexOf(":"), r = u.substring(0, a).trim().toLowerCase(), i = u.substring(a + 1).trim(), !(!r || e[r] && N_[r]) && (r === "set-cookie" ? e[r] ? e[r].push(i) : e[r] = [i] : e[r] = e[r] ? e[r] + ", " + i : i)
        }), e
    };

function D_(t) {
    let e = 0,
        r = t.length;
    for (; e < r;) {
        const i = t.charCodeAt(e);
        if (i !== 9 && i !== 32) break;
        e += 1
    }
    for (; r > e;) {
        const i = t.charCodeAt(r - 1);
        if (i !== 9 && i !== 32) break;
        r -= 1
    }
    return e === 0 && r === t.length ? t : t.slice(e, r)
}
const B_ = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"),
    I_ = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");

function Uf(t, e) {
    return N.isArray(t) ? t.map(r => Uf(r, e)) : D_(String(t).replace(e, ""))
}
const z_ = t => Uf(t, B_),
    V_ = t => Uf(t, I_);

function bw(t) {
    const e = Object.create(null);
    return N.forEach(t.toJSON(), (r, i) => {
        e[i] = V_(r)
    }), e
}
const dy = Symbol("internals");

function wo(t) {
    return t && String(t).trim().toLowerCase()
}

function Ml(t) {
    return t === !1 || t == null ? t : N.isArray(t) ? t.map(Ml) : z_(String(t))
}

function U_(t) {
    const e = Object.create(null),
        r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = r.exec(t);) e[i[1]] = i[2];
    return e
}
const $_ = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());

function pd(t, e, r, i, a) {
    if (N.isFunction(i)) return i.call(this, e, r);
    if (a && (e = r), !!N.isString(e)) {
        if (N.isString(i)) return e.indexOf(i) !== -1;
        if (N.isRegExp(i)) return i.test(e)
    }
}

function W_(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, i) => r.toUpperCase() + i)
}

function q_(t, e) {
    const r = N.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(t, i + r, {
            __proto__: null,
            value: function(a, l, u) {
                return this[i].call(this, e, a, l, u)
            },
            configurable: !0
        })
    })
}
let At = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, r, i) {
        const a = this;

        function l(d, h, p) {
            const g = wo(h);
            if (!g) return;
            const y = N.findKey(a, g);
            (!y || a[y] === void 0 || p === !0 || p === void 0 && a[y] !== !1) && (a[y || h] = Ml(d))
        }
        const u = (d, h) => N.forEach(d, (p, g) => l(p, g, h));
        if (N.isPlainObject(e) || e instanceof this.constructor) u(e, r);
        else if (N.isString(e) && (e = e.trim()) && !$_(e)) u(L_(e), r);
        else if (N.isObject(e) && N.isIterable(e)) {
            let d = {},
                h, p;
            for (const g of e) {
                if (!N.isArray(g)) throw new TypeError("Object iterator must return a key-value pair");
                d[p = g[0]] = (h = d[p]) ? N.isArray(h) ? [...h, g[1]] : [h, g[1]] : g[1]
            }
            u(d, r)
        } else e != null && l(r, e, i);
        return this
    }
    get(e, r) {
        if (e = wo(e), e) {
            const i = N.findKey(this, e);
            if (i) {
                const a = this[i];
                if (!r) return a;
                if (r === !0) return U_(a);
                if (N.isFunction(r)) return r.call(this, a, i);
                if (N.isRegExp(r)) return r.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, r) {
        if (e = wo(e), e) {
            const i = N.findKey(this, e);
            return !!(i && this[i] !== void 0 && (!r || pd(this, this[i], i, r)))
        }
        return !1
    }
    delete(e, r) {
        const i = this;
        let a = !1;

        function l(u) {
            if (u = wo(u), u) {
                const d = N.findKey(i, u);
                d && (!r || pd(i, i[d], d, r)) && (delete i[d], a = !0)
            }
        }
        return N.isArray(e) ? e.forEach(l) : l(e), a
    }
    clear(e) {
        const r = Object.keys(this);
        let i = r.length,
            a = !1;
        for (; i--;) {
            const l = r[i];
            (!e || pd(this, this[l], l, e, !0)) && (delete this[l], a = !0)
        }
        return a
    }
    normalize(e) {
        const r = this,
            i = {};
        return N.forEach(this, (a, l) => {
            const u = N.findKey(i, l);
            if (u) {
                r[u] = Ml(a), delete r[l];
                return
            }
            const d = e ? W_(l) : String(l).trim();
            d !== l && delete r[l], r[d] = Ml(a), i[d] = !0
        }), this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const r = Object.create(null);
        return N.forEach(this, (i, a) => {
            i != null && i !== !1 && (r[a] = e && N.isArray(i) ? i.join(", ") : i)
        }), r
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...r) {
        const i = new this(e);
        return r.forEach(a => i.set(a)), i
    }
    static accessor(e) {
        const i = (this[dy] = this[dy] = {
                accessors: {}
            }).accessors,
            a = this.prototype;

        function l(u) {
            const d = wo(u);
            i[d] || (q_(a, u), i[d] = !0)
        }
        return N.isArray(e) ? e.forEach(l) : l(e), this
    }
};
At.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.reduceDescriptors(At.prototype, ({
    value: t
}, e) => {
    let r = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(i) {
            this[r] = i
        }
    }
});
N.freezeMethods(At);
const H_ = "[REDACTED ****]";

function K_(t) {
    if (N.hasOwnProp(t, "toJSON")) return !0;
    let e = Object.getPrototypeOf(t);
    for (; e && e !== Object.prototype;) {
        if (N.hasOwnProp(e, "toJSON")) return !0;
        e = Object.getPrototypeOf(e)
    }
    return !1
}

function Q_(t, e) {
    const r = new Set(e.map(l => String(l).toLowerCase())),
        i = [],
        a = l => {
            if (l === null || typeof l != "object" || N.isBuffer(l)) return l;
            if (i.indexOf(l) !== -1) return;
            l instanceof At && (l = l.toJSON()), i.push(l);
            let u;
            if (N.isArray(l)) u = [], l.forEach((d, h) => {
                const p = a(d);
                N.isUndefined(p) || (u[h] = p)
            });
            else {
                if (!N.isPlainObject(l) && K_(l)) return i.pop(), l;
                u = Object.create(null);
                for (const [d, h] of Object.entries(l)) {
                    const p = r.has(d.toLowerCase()) ? H_ : a(h);
                    N.isUndefined(p) || (u[d] = p)
                }
            }
            return i.pop(), u
        };
    return a(t)
}
let se = class Ew extends Error {
    static from(e, r, i, a, l, u) {
        const d = new Ew(e.message, r || e.code, i, a, l);
        return d.cause = e, d.name = e.name, e.status != null && d.status == null && (d.status = e.status), u && Object.assign(d, u), d
    }
    constructor(e, r, i, a, l) {
        super(e), Object.defineProperty(this, "message", {
            __proto__: null,
            value: e,
            enumerable: !0,
            writable: !0,
            configurable: !0
        }), this.name = "AxiosError", this.isAxiosError = !0, r && (this.code = r), i && (this.config = i), a && (this.request = a), l && (this.response = l, this.status = l.status)
    }
    toJSON() {
        const e = this.config,
            r = e && N.hasOwnProp(e, "redact") ? e.redact : void 0,
            i = N.isArray(r) && r.length > 0 ? Q_(e, r) : N.toJSONObject(e);
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: i,
            code: this.code,
            status: this.status
        }
    }
};
se.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
se.ERR_BAD_OPTION = "ERR_BAD_OPTION";
se.ECONNABORTED = "ECONNABORTED";
se.ETIMEDOUT = "ETIMEDOUT";
se.ECONNREFUSED = "ECONNREFUSED";
se.ERR_NETWORK = "ERR_NETWORK";
se.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
se.ERR_DEPRECATED = "ERR_DEPRECATED";
se.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
se.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
se.ERR_CANCELED = "ERR_CANCELED";
se.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
se.ERR_INVALID_URL = "ERR_INVALID_URL";
se.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const G_ = null;

function rf(t) {
    return N.isPlainObject(t) || N.isArray(t)
}

function kw(t) {
    return N.endsWith(t, "[]") ? t.slice(0, -2) : t
}

function md(t, e, r) {
    return t ? t.concat(e).map(function(a, l) {
        return a = kw(a), !r && l ? "[" + a + "]" : a
    }).join(r ? "." : "") : e
}

function Y_(t) {
    return N.isArray(t) && !t.some(rf)
}
const X_ = N.toFlatObject(N, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});

function ru(t, e, r) {
    if (!N.isObject(t)) throw new TypeError("target must be an object");
    e = e || new FormData, r = N.toFlatObject(r, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(S, k) {
        return !N.isUndefined(k[S])
    });
    const i = r.metaTokens,
        a = r.visitor || y,
        l = r.dots,
        u = r.indexes,
        d = r.Blob || typeof Blob < "u" && Blob,
        h = r.maxDepth === void 0 ? 100 : r.maxDepth,
        p = d && N.isSpecCompliantForm(e);
    if (!N.isFunction(a)) throw new TypeError("visitor must be a function");

    function g(b) {
        if (b === null) return "";
        if (N.isDate(b)) return b.toISOString();
        if (N.isBoolean(b)) return b.toString();
        if (!p && N.isBlob(b)) throw new se("Blob is not supported. Use a Buffer instead.");
        return N.isArrayBuffer(b) || N.isTypedArray(b) ? p && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b
    }

    function y(b, S, k) {
        let j = b;
        if (N.isReactNative(e) && N.isReactNativeBlob(b)) return e.append(md(k, S, l), g(b)), !1;
        if (b && !k && typeof b == "object") {
            if (N.endsWith(S, "{}")) S = i ? S : S.slice(0, -2), b = JSON.stringify(b);
            else if (N.isArray(b) && Y_(b) || (N.isFileList(b) || N.endsWith(S, "[]")) && (j = N.toArray(b))) return S = kw(S), j.forEach(function(M, B) {
                !(N.isUndefined(M) || M === null) && e.append(u === !0 ? md([S], B, l) : u === null ? S : S + "[]", g(M))
            }), !1
        }
        return rf(b) ? !0 : (e.append(md(k, S, l), g(b)), !1)
    }
    const x = [],
        E = Object.assign(X_, {
            defaultVisitor: y,
            convertValue: g,
            isVisitable: rf
        });

    function T(b, S, k = 0) {
        if (!N.isUndefined(b)) {
            if (k > h) throw new se("Object is too deeply nested (" + k + " levels). Max depth: " + h, se.ERR_FORM_DATA_DEPTH_EXCEEDED);
            if (x.indexOf(b) !== -1) throw new Error("Circular reference detected in " + S.join("."));
            x.push(b), N.forEach(b, function(R, M) {
                (!(N.isUndefined(R) || R === null) && a.call(e, R, N.isString(M) ? M.trim() : M, S, E)) === !0 && T(R, S ? S.concat(M) : [M], k + 1)
            }), x.pop()
        }
    }
    if (!N.isObject(t)) throw new TypeError("data must be an object");
    return T(t), e
}

function fy(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20/g, function(i) {
        return e[i]
    })
}

function $f(t, e) {
    this._pairs = [], t && ru(t, this, e)
}
const _w = $f.prototype;
_w.append = function(e, r) {
    this._pairs.push([e, r])
};
_w.toString = function(e) {
    const r = e ? function(i) {
        return e.call(this, i, fy)
    } : fy;
    return this._pairs.map(function(a) {
        return r(a[0]) + "=" + r(a[1])
    }, "").join("&")
};

function J_(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}

function Cw(t, e, r) {
    if (!e) return t;
    const i = r && r.encode || J_,
        a = N.isFunction(r) ? {
            serialize: r
        } : r,
        l = a && a.serialize;
    let u;
    if (l ? u = l(e, a) : u = N.isURLSearchParams(e) ? e.toString() : new $f(e, a).toString(i), u) {
        const d = t.indexOf("#");
        d !== -1 && (t = t.slice(0, d)), t += (t.indexOf("?") === -1 ? "?" : "&") + u
    }
    return t
}
class hy {
    constructor() {
        this.handlers = []
    }
    use(e, r, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: r,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }), this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        N.forEach(this.handlers, function(i) {
            i !== null && e(i)
        })
    }
}
const Wf = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
        legacyInterceptorReqResOrdering: !0,
        advertiseZstdAcceptEncoding: !1
    },
    Z_ = typeof URLSearchParams < "u" ? URLSearchParams : $f,
    eC = typeof FormData < "u" ? FormData : null,
    tC = typeof Blob < "u" ? Blob : null,
    nC = {
        isBrowser: !0,
        classes: {
            URLSearchParams: Z_,
            FormData: eC,
            Blob: tC
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    qf = typeof window < "u" && typeof document < "u",
    sf = typeof navigator == "object" && navigator || void 0,
    rC = qf && (!sf || ["ReactNative", "NativeScript", "NS"].indexOf(sf.product) < 0),
    sC = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    iC = qf && window.location.href || "http://localhost",
    oC = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: qf,
        hasStandardBrowserEnv: rC,
        hasStandardBrowserWebWorkerEnv: sC,
        navigator: sf,
        origin: iC
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    gt = { ...oC,
        ...nC
    };

function aC(t, e) {
    return ru(t, new gt.classes.URLSearchParams, {
        visitor: function(r, i, a, l) {
            return gt.isNode && N.isBuffer(r) ? (this.append(i, r.toString("base64")), !1) : l.defaultVisitor.apply(this, arguments)
        },
        ...e
    })
}

function lC(t) {
    return N.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}

function uC(t) {
    const e = {},
        r = Object.keys(t);
    let i;
    const a = r.length;
    let l;
    for (i = 0; i < a; i++) l = r[i], e[l] = t[l];
    return e
}

function Tw(t) {
    function e(r, i, a, l) {
        let u = r[l++];
        if (u === "__proto__") return !0;
        const d = Number.isFinite(+u),
            h = l >= r.length;
        return u = !u && N.isArray(a) ? a.length : u, h ? (N.hasOwnProp(a, u) ? a[u] = N.isArray(a[u]) ? a[u].concat(i) : [a[u], i] : a[u] = i, !d) : ((!N.hasOwnProp(a, u) || !N.isObject(a[u])) && (a[u] = []), e(r, i, a[u], l) && N.isArray(a[u]) && (a[u] = uC(a[u])), !d)
    }
    if (N.isFormData(t) && N.isFunction(t.entries)) {
        const r = {};
        return N.forEachEntry(t, (i, a) => {
            e(lC(i), a, r, 0)
        }), r
    }
    return null
}
const Xs = (t, e) => t != null && N.hasOwnProp(t, e) ? t[e] : void 0;

function cC(t, e, r) {
    if (N.isString(t)) try {
        return (e || JSON.parse)(t), N.trim(t)
    } catch (i) {
        if (i.name !== "SyntaxError") throw i
    }
    return (r || JSON.stringify)(t)
}
const ea = {
    transitional: Wf,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, r) {
        const i = r.getContentType() || "",
            a = i.indexOf("application/json") > -1,
            l = N.isObject(e);
        if (l && N.isHTMLForm(e) && (e = new FormData(e)), N.isFormData(e)) return a ? JSON.stringify(Tw(e)) : e;
        if (N.isArrayBuffer(e) || N.isBuffer(e) || N.isStream(e) || N.isFile(e) || N.isBlob(e) || N.isReadableStream(e)) return e;
        if (N.isArrayBufferView(e)) return e.buffer;
        if (N.isURLSearchParams(e)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
        let d;
        if (l) {
            const h = Xs(this, "formSerializer");
            if (i.indexOf("application/x-www-form-urlencoded") > -1) return aC(e, h).toString();
            if ((d = N.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const p = Xs(this, "env"),
                    g = p && p.FormData;
                return ru(d ? {
                    "files[]": e
                } : e, g && new g, h)
            }
        }
        return l || a ? (r.setContentType("application/json", !1), cC(e)) : e
    }],
    transformResponse: [function(e) {
        const r = Xs(this, "transitional") || ea.transitional,
            i = r && r.forcedJSONParsing,
            a = Xs(this, "responseType"),
            l = a === "json";
        if (N.isResponse(e) || N.isReadableStream(e)) return e;
        if (e && N.isString(e) && (i && !a || l)) {
            const d = !(r && r.silentJSONParsing) && l;
            try {
                return JSON.parse(e, Xs(this, "parseReviver"))
            } catch (h) {
                if (d) throw h.name === "SyntaxError" ? se.from(h, se.ERR_BAD_RESPONSE, this, null, Xs(this, "response")) : h
            }
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: gt.classes.FormData,
        Blob: gt.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
N.forEach(["delete", "get", "head", "post", "put", "patch", "query"], t => {
    ea.headers[t] = {}
});

function gd(t, e) {
    const r = this || ea,
        i = e || r,
        a = At.from(i.headers);
    let l = i.data;
    return N.forEach(t, function(d) {
        l = d.call(r, l, a.normalize(), e ? e.status : void 0)
    }), a.normalize(), l
}

function Pw(t) {
    return !!(t && t.__CANCEL__)
}
let ta = class extends se {
    constructor(e, r, i) {
        super(e ? ? "canceled", se.ERR_CANCELED, r, i), this.name = "CanceledError", this.__CANCEL__ = !0
    }
};

function Rw(t, e, r) {
    const i = r.config.validateStatus;
    !r.status || !i || i(r.status) ? t(r) : e(new se("Request failed with status code " + r.status, r.status >= 400 && r.status < 500 ? se.ERR_BAD_REQUEST : se.ERR_BAD_RESPONSE, r.config, r.request, r))
}

function dC(t) {
    const e = /^([-+\w]{1,25}):(?:\/\/)?/.exec(t);
    return e && e[1] || ""
}

function fC(t, e) {
    t = t || 10;
    const r = new Array(t),
        i = new Array(t);
    let a = 0,
        l = 0,
        u;
    return e = e !== void 0 ? e : 1e3,
        function(h) {
            const p = Date.now(),
                g = i[l];
            u || (u = p), r[a] = h, i[a] = p;
            let y = l,
                x = 0;
            for (; y !== a;) x += r[y++], y = y % t;
            if (a = (a + 1) % t, a === l && (l = (l + 1) % t), p - u < e) return;
            const E = g && p - g;
            return E ? Math.round(x * 1e3 / E) : void 0
        }
}

function hC(t, e) {
    let r = 0,
        i = 1e3 / e,
        a, l;
    const u = (p, g = Date.now()) => {
        r = g, a = null, l && (clearTimeout(l), l = null), t(...p)
    };
    return [(...p) => {
        const g = Date.now(),
            y = g - r;
        y >= i ? u(p, g) : (a = p, l || (l = setTimeout(() => {
            l = null, u(a)
        }, i - y)))
    }, () => a && u(a)]
}
const Wl = (t, e, r = 3) => {
        let i = 0;
        const a = fC(50, 250);
        return hC(l => {
            if (!l || typeof l.loaded != "number") return;
            const u = l.loaded,
                d = l.lengthComputable ? l.total : void 0,
                h = d != null ? Math.min(u, d) : u,
                p = Math.max(0, h - i),
                g = a(p);
            i = Math.max(i, h);
            const y = {
                loaded: h,
                total: d,
                progress: d ? h / d : void 0,
                bytes: p,
                rate: g || void 0,
                estimated: g && d ? (d - h) / g : void 0,
                event: l,
                lengthComputable: d != null,
                [e ? "download" : "upload"]: !0
            };
            t(y)
        }, r)
    },
    py = (t, e) => {
        const r = t != null;
        return [i => e[0]({
            lengthComputable: r,
            total: t,
            loaded: i
        }), e[1]]
    },
    my = t => (...e) => N.asap(() => t(...e)),
    pC = gt.hasStandardBrowserEnv ? ((t, e) => r => (r = new URL(r, gt.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(new URL(gt.origin), gt.navigator && /(msie|trident)/i.test(gt.navigator.userAgent)) : () => !0,
    mC = gt.hasStandardBrowserEnv ? {
        write(t, e, r, i, a, l, u) {
            if (typeof document > "u") return;
            const d = [`${t}=${encodeURIComponent(e)}`];
            N.isNumber(r) && d.push(`expires=${new Date(r).toUTCString()}`), N.isString(i) && d.push(`path=${i}`), N.isString(a) && d.push(`domain=${a}`), l === !0 && d.push("secure"), N.isString(u) && d.push(`SameSite=${u}`), document.cookie = d.join("; ")
        },
        read(t) {
            if (typeof document > "u") return null;
            const e = document.cookie.split(";");
            for (let r = 0; r < e.length; r++) {
                const i = e[r].replace(/^\s+/, ""),
                    a = i.indexOf("=");
                if (a !== -1 && i.slice(0, a) === t) return decodeURIComponent(i.slice(a + 1))
            }
            return null
        },
        remove(t) {
            this.write(t, "", Date.now() - 864e5, "/")
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function gC(t) {
    return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}

function yC(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
}

function Aw(t, e, r) {
    let i = !gC(e);
    return t && (i || r === !1) ? yC(t, e) : e
}
const gy = t => t instanceof At ? { ...t
} : t;

function Ss(t, e) {
    e = e || {};
    const r = Object.create(null);
    Object.defineProperty(r, "hasOwnProperty", {
        __proto__: null,
        value: Object.prototype.hasOwnProperty,
        enumerable: !1,
        writable: !0,
        configurable: !0
    });

    function i(p, g, y, x) {
        return N.isPlainObject(p) && N.isPlainObject(g) ? N.merge.call({
            caseless: x
        }, p, g) : N.isPlainObject(g) ? N.merge({}, g) : N.isArray(g) ? g.slice() : g
    }

    function a(p, g, y, x) {
        if (N.isUndefined(g)) {
            if (!N.isUndefined(p)) return i(void 0, p, y, x)
        } else return i(p, g, y, x)
    }

    function l(p, g) {
        if (!N.isUndefined(g)) return i(void 0, g)
    }

    function u(p, g) {
        if (N.isUndefined(g)) {
            if (!N.isUndefined(p)) return i(void 0, p)
        } else return i(void 0, g)
    }

    function d(p, g, y) {
        if (N.hasOwnProp(e, y)) return i(p, g);
        if (N.hasOwnProp(t, y)) return i(void 0, p)
    }
    const h = {
        url: l,
        method: l,
        data: l,
        baseURL: u,
        transformRequest: u,
        transformResponse: u,
        paramsSerializer: u,
        timeout: u,
        timeoutMessage: u,
        withCredentials: u,
        withXSRFToken: u,
        adapter: u,
        responseType: u,
        xsrfCookieName: u,
        xsrfHeaderName: u,
        onUploadProgress: u,
        onDownloadProgress: u,
        decompress: u,
        maxContentLength: u,
        maxBodyLength: u,
        beforeRedirect: u,
        transport: u,
        httpAgent: u,
        httpsAgent: u,
        cancelToken: u,
        socketPath: u,
        allowedSocketPaths: u,
        responseEncoding: u,
        validateStatus: d,
        headers: (p, g, y) => a(gy(p), gy(g), y, !0)
    };
    return N.forEach(Object.keys({ ...t,
        ...e
    }), function(g) {
        if (g === "__proto__" || g === "constructor" || g === "prototype") return;
        const y = N.hasOwnProp(h, g) ? h[g] : a,
            x = N.hasOwnProp(t, g) ? t[g] : void 0,
            E = N.hasOwnProp(e, g) ? e[g] : void 0,
            T = y(x, E, g);
        N.isUndefined(T) && y !== d || (r[g] = T)
    }), r
}
const vC = ["content-type", "content-length"];

function wC(t, e, r) {
    if (r !== "content-only") {
        t.set(e);
        return
    }
    Object.entries(e).forEach(([i, a]) => {
        vC.includes(i.toLowerCase()) && t.set(i, a)
    })
}
const xC = t => encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi, (e, r) => String.fromCharCode(parseInt(r, 16)));

function Mw(t) {
    const e = Ss({}, t),
        r = x => N.hasOwnProp(e, x) ? e[x] : void 0,
        i = r("data");
    let a = r("withXSRFToken");
    const l = r("xsrfHeaderName"),
        u = r("xsrfCookieName");
    let d = r("headers");
    const h = r("auth"),
        p = r("baseURL"),
        g = r("allowAbsoluteUrls"),
        y = r("url");
    if (e.headers = d = At.from(d), e.url = Cw(Aw(p, y, g), r("params"), r("paramsSerializer")), h && d.set("Authorization", "Basic " + btoa((h.username || "") + ":" + (h.password ? xC(h.password) : ""))), N.isFormData(i) && (gt.hasStandardBrowserEnv || gt.hasStandardBrowserWebWorkerEnv || N.isReactNative(i) ? d.setContentType(void 0) : N.isFunction(i.getHeaders) && wC(d, i.getHeaders(), r("formDataHeaderPolicy"))), gt.hasStandardBrowserEnv && (N.isFunction(a) && (a = a(e)), a === !0 || a == null && pC(e.url))) {
        const E = l && u && mC.read(u);
        E && d.set(l, E)
    }
    return e
}
const SC = typeof XMLHttpRequest < "u",
    bC = SC && function(t) {
        return new Promise(function(r, i) {
            const a = Mw(t);
            let l = a.data;
            const u = At.from(a.headers).normalize();
            let {
                responseType: d,
                onUploadProgress: h,
                onDownloadProgress: p
            } = a, g, y, x, E, T;

            function b() {
                E && E(), T && T(), a.cancelToken && a.cancelToken.unsubscribe(g), a.signal && a.signal.removeEventListener("abort", g)
            }
            let S = new XMLHttpRequest;
            S.open(a.method.toUpperCase(), a.url, !0), S.timeout = a.timeout;

            function k() {
                if (!S) return;
                const R = At.from("getAllResponseHeaders" in S && S.getAllResponseHeaders()),
                    B = {
                        data: !d || d === "text" || d === "json" ? S.responseText : S.response,
                        status: S.status,
                        statusText: S.statusText,
                        headers: R,
                        config: t,
                        request: S
                    };
                Rw(function(Y) {
                    r(Y), b()
                }, function(Y) {
                    i(Y), b()
                }, B), S = null
            }
            "onloadend" in S ? S.onloadend = k : S.onreadystatechange = function() {
                !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.startsWith("file:")) || setTimeout(k)
            }, S.onabort = function() {
                S && (i(new se("Request aborted", se.ECONNABORTED, t, S)), b(), S = null)
            }, S.onerror = function(M) {
                const B = M && M.message ? M.message : "Network Error",
                    W = new se(B, se.ERR_NETWORK, t, S);
                W.event = M || null, i(W), b(), S = null
            }, S.ontimeout = function() {
                let M = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
                const B = a.transitional || Wf;
                a.timeoutErrorMessage && (M = a.timeoutErrorMessage), i(new se(M, B.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED, t, S)), b(), S = null
            }, l === void 0 && u.setContentType(null), "setRequestHeader" in S && N.forEach(bw(u), function(M, B) {
                S.setRequestHeader(B, M)
            }), N.isUndefined(a.withCredentials) || (S.withCredentials = !!a.withCredentials), d && d !== "json" && (S.responseType = a.responseType), p && ([x, T] = Wl(p, !0), S.addEventListener("progress", x)), h && S.upload && ([y, E] = Wl(h), S.upload.addEventListener("progress", y), S.upload.addEventListener("loadend", E)), (a.cancelToken || a.signal) && (g = R => {
                S && (i(!R || R.type ? new ta(null, t, S) : R), S.abort(), b(), S = null)
            }, a.cancelToken && a.cancelToken.subscribe(g), a.signal && (a.signal.aborted ? g() : a.signal.addEventListener("abort", g)));
            const j = dC(a.url);
            if (j && !gt.protocols.includes(j)) {
                i(new se("Unsupported protocol " + j + ":", se.ERR_BAD_REQUEST, t));
                return
            }
            S.send(l || null)
        })
    },
    EC = (t, e) => {
        if (t = t ? t.filter(Boolean) : [], !e && !t.length) return;
        const r = new AbortController;
        let i = !1;
        const a = function(h) {
            if (!i) {
                i = !0, u();
                const p = h instanceof Error ? h : this.reason;
                r.abort(p instanceof se ? p : new ta(p instanceof Error ? p.message : p))
            }
        };
        let l = e && setTimeout(() => {
            l = null, a(new se(`timeout of ${e}ms exceeded`, se.ETIMEDOUT))
        }, e);
        const u = () => {
            t && (l && clearTimeout(l), l = null, t.forEach(h => {
                h.unsubscribe ? h.unsubscribe(a) : h.removeEventListener("abort", a)
            }), t = null)
        };
        t.forEach(h => h.addEventListener("abort", a));
        const {
            signal: d
        } = r;
        return d.unsubscribe = () => N.asap(u), d
    },
    kC = function*(t, e) {
        let r = t.byteLength;
        if (r < e) {
            yield t;
            return
        }
        let i = 0,
            a;
        for (; i < r;) a = i + e, yield t.slice(i, a), i = a
    },
    _C = async function*(t, e) {
        for await (const r of CC(t)) yield* kC(r, e)
    },
    CC = async function*(t) {
        if (t[Symbol.asyncIterator]) {
            yield* t;
            return
        }
        const e = t.getReader();
        try {
            for (;;) {
                const {
                    done: r,
                    value: i
                } = await e.read();
                if (r) break;
                yield i
            }
        } finally {
            await e.cancel()
        }
    },
    yy = (t, e, r, i) => {
        const a = _C(t, e);
        let l = 0,
            u, d = h => {
                u || (u = !0, i && i(h))
            };
        return new ReadableStream({
            async pull(h) {
                try {
                    const {
                        done: p,
                        value: g
                    } = await a.next();
                    if (p) {
                        d(), h.close();
                        return
                    }
                    let y = g.byteLength;
                    if (r) {
                        let x = l += y;
                        r(x)
                    }
                    h.enqueue(new Uint8Array(g))
                } catch (p) {
                    throw d(p), p
                }
            },
            cancel(h) {
                return d(h), a.return()
            }
        }, {
            highWaterMark: 2
        })
    };

function TC(t) {
    if (!t || typeof t != "string" || !t.startsWith("data:")) return 0;
    const e = t.indexOf(",");
    if (e < 0) return 0;
    const r = t.slice(5, e),
        i = t.slice(e + 1);
    if (/;base64/i.test(r)) {
        let u = i.length;
        const d = i.length;
        for (let E = 0; E < d; E++)
            if (i.charCodeAt(E) === 37 && E + 2 < d) {
                const T = i.charCodeAt(E + 1),
                    b = i.charCodeAt(E + 2);
                (T >= 48 && T <= 57 || T >= 65 && T <= 70 || T >= 97 && T <= 102) && (b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102) && (u -= 2, E += 2)
            }
        let h = 0,
            p = d - 1;
        const g = E => E >= 2 && i.charCodeAt(E - 2) === 37 && i.charCodeAt(E - 1) === 51 && (i.charCodeAt(E) === 68 || i.charCodeAt(E) === 100);
        p >= 0 && (i.charCodeAt(p) === 61 ? (h++, p--) : g(p) && (h++, p -= 3)), h === 1 && p >= 0 && (i.charCodeAt(p) === 61 || g(p)) && h++;
        const x = Math.floor(u / 4) * 3 - (h || 0);
        return x > 0 ? x : 0
    }
    if (typeof Buffer < "u" && typeof Buffer.byteLength == "function") return Buffer.byteLength(i, "utf8");
    let l = 0;
    for (let u = 0, d = i.length; u < d; u++) {
        const h = i.charCodeAt(u);
        if (h < 128) l += 1;
        else if (h < 2048) l += 2;
        else if (h >= 55296 && h <= 56319 && u + 1 < d) {
            const p = i.charCodeAt(u + 1);
            p >= 56320 && p <= 57343 ? (l += 4, u++) : l += 3
        } else l += 3
    }
    return l
}
const Hf = "1.17.0",
    vy = 64 * 1024,
    {
        isFunction: xl
    } = N,
    PC = t => encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi, (e, r) => String.fromCharCode(parseInt(r, 16))),
    wy = t => {
        if (!N.isString(t)) return t;
        try {
            return decodeURIComponent(t)
        } catch {
            return t
        }
    },
    xy = (t, ...e) => {
        try {
            return !!t(...e)
        } catch {
            return !1
        }
    },
    RC = t => {
        const e = t.indexOf("://");
        let r = t;
        return e !== -1 && (r = r.slice(e + 3)), r.includes("@") || r.includes(":")
    },
    AC = t => {
        const e = N.global !== void 0 && N.global !== null ? N.global : globalThis,
            {
                ReadableStream: r,
                TextEncoder: i
            } = e;
        t = N.merge.call({
            skipUndefined: !0
        }, {
            Request: e.Request,
            Response: e.Response
        }, t);
        const {
            fetch: a,
            Request: l,
            Response: u
        } = t, d = a ? xl(a) : typeof fetch == "function", h = xl(l), p = xl(u);
        if (!d) return !1;
        const g = d && xl(r),
            y = d && (typeof i == "function" ? (k => j => k.encode(j))(new i) : async k => new Uint8Array(await new l(k).arrayBuffer())),
            x = h && g && xy(() => {
                let k = !1;
                const j = new l(gt.origin, {
                        body: new r,
                        method: "POST",
                        get duplex() {
                            return k = !0, "half"
                        }
                    }),
                    R = j.headers.has("Content-Type");
                return j.body != null && j.body.cancel(), k && !R
            }),
            E = p && g && xy(() => N.isReadableStream(new u("").body)),
            T = {
                stream: E && (k => k.body)
            };
        d && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(k => {
            !T[k] && (T[k] = (j, R) => {
                let M = j && j[k];
                if (M) return M.call(j);
                throw new se(`Response type '${k}' is not supported`, se.ERR_NOT_SUPPORT, R)
            })
        });
        const b = async k => {
                if (k == null) return 0;
                if (N.isBlob(k)) return k.size;
                if (N.isSpecCompliantForm(k)) return (await new l(gt.origin, {
                    method: "POST",
                    body: k
                }).arrayBuffer()).byteLength;
                if (N.isArrayBufferView(k) || N.isArrayBuffer(k)) return k.byteLength;
                if (N.isURLSearchParams(k) && (k = k + ""), N.isString(k)) return (await y(k)).byteLength
            },
            S = async (k, j) => {
                const R = N.toFiniteNumber(k.getContentLength());
                return R ? ? b(j)
            };
        return async k => {
            let {
                url: j,
                method: R,
                data: M,
                signal: B,
                cancelToken: W,
                timeout: Y,
                onDownloadProgress: I,
                onUploadProgress: J,
                responseType: de,
                headers: ue,
                withCredentials: Re = "same-origin",
                fetchOptions: Ue,
                maxContentLength: Te,
                maxBodyLength: Ne
            } = Mw(k);
            const Ae = N.isNumber(Te) && Te > -1,
                ge = N.isNumber(Ne) && Ne > -1,
                Q = Z => N.hasOwnProp(k, Z) ? k[Z] : void 0;
            let oe = a || fetch;
            de = de ? (de + "").toLowerCase() : "text";
            let V = EC([B, W && W.toAbortSignal()], Y),
                O = null;
            const U = V && V.unsubscribe && (() => {
                V.unsubscribe()
            });
            let xe;
            try {
                let Z;
                const le = Q("auth");
                if (le) {
                    const ye = le.username || "",
                        at = le.password || "";
                    Z = {
                        username: ye,
                        password: at
                    }
                }
                if (RC(j)) {
                    const ye = new URL(j, gt.origin);
                    if (!Z && (ye.username || ye.password)) {
                        const at = wy(ye.username),
                            kt = wy(ye.password);
                        Z = {
                            username: at,
                            password: kt
                        }
                    }(ye.username || ye.password) && (ye.username = "", ye.password = "", j = ye.href)
                }
                if (Z && (ue.delete("authorization"), ue.set("Authorization", "Basic " + btoa(PC((Z.username || "") + ":" + (Z.password || ""))))), Ae && typeof j == "string" && j.startsWith("data:") && TC(j) > Te) throw new se("maxContentLength size of " + Te + " exceeded", se.ERR_BAD_RESPONSE, k, O);
                if (ge && R !== "get" && R !== "head") {
                    const ye = await S(ue, M);
                    if (typeof ye == "number" && isFinite(ye) && ye > Ne) throw new se("Request body larger than maxBodyLength limit", se.ERR_BAD_REQUEST, k, O)
                }
                if (J && x && R !== "get" && R !== "head" && (xe = await S(ue, M)) !== 0) {
                    let ye = new l(j, {
                            method: "POST",
                            body: M,
                            duplex: "half"
                        }),
                        at;
                    if (N.isFormData(M) && (at = ye.headers.get("content-type")) && ue.setContentType(at), ye.body) {
                        const [kt, Ut] = py(xe, Wl(my(J)));
                        M = yy(ye.body, vy, kt, Ut)
                    }
                }
                N.isString(Re) || (Re = Re ? "include" : "omit");
                const pe = h && "credentials" in l.prototype;
                if (N.isFormData(M)) {
                    const ye = ue.getContentType();
                    ye && /^multipart\/form-data/i.test(ye) && !/boundary=/i.test(ye) && ue.delete("content-type")
                }
                ue.set("User-Agent", "axios/" + Hf, !1);
                const Pe = { ...Ue,
                    signal: V,
                    method: R.toUpperCase(),
                    headers: bw(ue.normalize()),
                    body: M,
                    duplex: "half",
                    credentials: pe ? Re : void 0
                };
                O = h && new l(j, Pe);
                let Se = await (h ? oe(O, Ue) : oe(j, Pe));
                if (Ae) {
                    const ye = N.toFiniteNumber(Se.headers.get("content-length"));
                    if (ye != null && ye > Te) throw new se("maxContentLength size of " + Te + " exceeded", se.ERR_BAD_RESPONSE, k, O)
                }
                const ve = E && (de === "stream" || de === "response");
                if (E && Se.body && (I || Ae || ve && U)) {
                    const ye = {};
                    ["status", "statusText", "headers"].forEach(jn => {
                        ye[jn] = Se[jn]
                    });
                    const at = N.toFiniteNumber(Se.headers.get("content-length")),
                        [kt, Ut] = I && py(at, Wl(my(I), !0)) || [];
                    let Ai = 0;
                    const oa = jn => {
                        if (Ae && (Ai = jn, Ai > Te)) throw new se("maxContentLength size of " + Te + " exceeded", se.ERR_BAD_RESPONSE, k, O);
                        kt && kt(jn)
                    };
                    Se = new u(yy(Se.body, vy, oa, () => {
                        Ut && Ut(), U && U()
                    }), ye)
                }
                de = de || "text";
                let De = await T[N.findKey(T, de) || "text"](Se, k);
                if (Ae && !E && !ve) {
                    let ye;
                    if (De != null && (typeof De.byteLength == "number" ? ye = De.byteLength : typeof De.size == "number" ? ye = De.size : typeof De == "string" && (ye = typeof i == "function" ? new i().encode(De).byteLength : De.length)), typeof ye == "number" && ye > Te) throw new se("maxContentLength size of " + Te + " exceeded", se.ERR_BAD_RESPONSE, k, O)
                }
                return !ve && U && U(), await new Promise((ye, at) => {
                    Rw(ye, at, {
                        data: De,
                        headers: At.from(Se.headers),
                        status: Se.status,
                        statusText: Se.statusText,
                        config: k,
                        request: O
                    })
                })
            } catch (Z) {
                if (U && U(), V && V.aborted && V.reason instanceof se) {
                    const le = V.reason;
                    throw le.config = k, O && (le.request = O), Z !== le && (le.cause = Z), le
                }
                throw Z && Z.name === "TypeError" && /Load failed|fetch/i.test(Z.message) ? Object.assign(new se("Network Error", se.ERR_NETWORK, k, O, Z && Z.response), {
                    cause: Z.cause || Z
                }) : se.from(Z, Z && Z.code, k, O, Z && Z.response)
            }
        }
    },
    MC = new Map,
    Ow = t => {
        let e = t && t.env || {};
        const {
            fetch: r,
            Request: i,
            Response: a
        } = e, l = [i, a, r];
        let u = l.length,
            d = u,
            h, p, g = MC;
        for (; d--;) h = l[d], p = g.get(h), p === void 0 && g.set(h, p = d ? new Map : AC(e)), g = p;
        return p
    };
Ow();
const Kf = {
    http: G_,
    xhr: bC,
    fetch: {
        get: Ow
    }
};
N.forEach(Kf, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                __proto__: null,
                value: e
            })
        } catch {}
        Object.defineProperty(t, "adapterName", {
            __proto__: null,
            value: e
        })
    }
});
const Sy = t => `- ${t}`,
    OC = t => N.isFunction(t) || t === null || t === !1;

function jC(t, e) {
    t = N.isArray(t) ? t : [t];
    const {
        length: r
    } = t;
    let i, a;
    const l = {};
    for (let u = 0; u < r; u++) {
        i = t[u];
        let d;
        if (a = i, !OC(i) && (a = Kf[(d = String(i)).toLowerCase()], a === void 0)) throw new se(`Unknown adapter '${d}'`);
        if (a && (N.isFunction(a) || (a = a.get(e)))) break;
        l[d || "#" + u] = a
    }
    if (!a) {
        const u = Object.entries(l).map(([h, p]) => `adapter ${h} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build"));
        let d = r ? u.length > 1 ? `since :
` + u.map(Sy).join(`
`) : " " + Sy(u[0]) : "as no adapter specified";
        throw new se("There is no suitable adapter to dispatch the request " + d, "ERR_NOT_SUPPORT")
    }
    return a
}
const jw = {
    getAdapter: jC,
    adapters: Kf
};

function yd(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new ta(null, t)
}

function by(t) {
    return yd(t), t.headers = At.from(t.headers), t.data = gd.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), jw.getAdapter(t.adapter || ea.adapter, t)(t).then(function(i) {
        yd(t), t.response = i;
        try {
            i.data = gd.call(t, t.transformResponse, i)
        } finally {
            delete t.response
        }
        return i.headers = At.from(i.headers), i
    }, function(i) {
        if (!Pw(i) && (yd(t), i && i.response)) {
            t.response = i.response;
            try {
                i.response.data = gd.call(t, t.transformResponse, i.response)
            } finally {
                delete t.response
            }
            i.response.headers = At.from(i.response.headers)
        }
        return Promise.reject(i)
    })
}
const su = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
    su[t] = function(i) {
        return typeof i === t || "a" + (e < 1 ? "n " : " ") + t
    }
});
const Ey = {};
su.transitional = function(e, r, i) {
    function a(l, u) {
        return "[Axios v" + Hf + "] Transitional option '" + l + "'" + u + (i ? ". " + i : "")
    }
    return (l, u, d) => {
        if (e === !1) throw new se(a(u, " has been removed" + (r ? " in " + r : "")), se.ERR_DEPRECATED);
        return r && !Ey[u] && (Ey[u] = !0, console.warn(a(u, " has been deprecated since v" + r + " and will be removed in the near future"))), e ? e(l, u, d) : !0
    }
};
su.spelling = function(e) {
    return (r, i) => (console.warn(`${i} is likely a misspelling of ${e}`), !0)
};

function FC(t, e, r) {
    if (typeof t != "object") throw new se("options must be an object", se.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(t);
    let a = i.length;
    for (; a-- > 0;) {
        const l = i[a],
            u = Object.prototype.hasOwnProperty.call(e, l) ? e[l] : void 0;
        if (u) {
            const d = t[l],
                h = d === void 0 || u(d, l, t);
            if (h !== !0) throw new se("option " + l + " must be " + h, se.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (r !== !0) throw new se("Unknown option " + l, se.ERR_BAD_OPTION)
    }
}
const Ol = {
        assertOptions: FC,
        validators: su
    },
    Bt = Ol.validators;
let gs = class {
    constructor(e) {
        this.defaults = e || {}, this.interceptors = {
            request: new hy,
            response: new hy
        }
    }
    async request(e, r) {
        try {
            return await this._request(e, r)
        } catch (i) {
            if (i instanceof Error) {
                let a = {};
                Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error;
                const l = (() => {
                    if (!a.stack) return "";
                    const u = a.stack.indexOf(`
`);
                    return u === -1 ? "" : a.stack.slice(u + 1)
                })();
                try {
                    if (!i.stack) i.stack = l;
                    else if (l) {
                        const u = l.indexOf(`
`),
                            d = u === -1 ? -1 : l.indexOf(`
`, u + 1),
                            h = d === -1 ? "" : l.slice(d + 1);
                        String(i.stack).endsWith(h) || (i.stack += `
` + l)
                    }
                } catch {}
            }
            throw i
        }
    }
    _request(e, r) {
        typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Ss(this.defaults, r);
        const {
            transitional: i,
            paramsSerializer: a,
            headers: l
        } = r;
        i !== void 0 && Ol.assertOptions(i, {
            silentJSONParsing: Bt.transitional(Bt.boolean),
            forcedJSONParsing: Bt.transitional(Bt.boolean),
            clarifyTimeoutError: Bt.transitional(Bt.boolean),
            legacyInterceptorReqResOrdering: Bt.transitional(Bt.boolean),
            advertiseZstdAcceptEncoding: Bt.transitional(Bt.boolean)
        }, !1), a != null && (N.isFunction(a) ? r.paramsSerializer = {
            serialize: a
        } : Ol.assertOptions(a, {
            encode: Bt.function,
            serialize: Bt.function
        }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Ol.assertOptions(r, {
            baseUrl: Bt.spelling("baseURL"),
            withXsrfToken: Bt.spelling("withXSRFToken")
        }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
        let u = l && N.merge(l.common, l[r.method]);
        l && N.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], T => {
            delete l[T]
        }), r.headers = At.concat(u, l);
        const d = [];
        let h = !0;
        this.interceptors.request.forEach(function(b) {
            if (typeof b.runWhen == "function" && b.runWhen(r) === !1) return;
            h = h && b.synchronous;
            const S = r.transitional || Wf;
            S && S.legacyInterceptorReqResOrdering ? d.unshift(b.fulfilled, b.rejected) : d.push(b.fulfilled, b.rejected)
        });
        const p = [];
        this.interceptors.response.forEach(function(b) {
            p.push(b.fulfilled, b.rejected)
        });
        let g, y = 0,
            x;
        if (!h) {
            const T = [by.bind(this), void 0];
            for (T.unshift(...d), T.push(...p), x = T.length, g = Promise.resolve(r); y < x;) g = g.then(T[y++], T[y++]);
            return g
        }
        x = d.length;
        let E = r;
        for (; y < x;) {
            const T = d[y++],
                b = d[y++];
            try {
                E = T(E)
            } catch (S) {
                b.call(this, S);
                break
            }
        }
        try {
            g = by.call(this, E)
        } catch (T) {
            return Promise.reject(T)
        }
        for (y = 0, x = p.length; y < x;) g = g.then(p[y++], p[y++]);
        return g
    }
    getUri(e) {
        e = Ss(this.defaults, e);
        const r = Aw(e.baseURL, e.url, e.allowAbsoluteUrls);
        return Cw(r, e.params, e.paramsSerializer)
    }
};
N.forEach(["delete", "get", "head", "options"], function(e) {
    gs.prototype[e] = function(r, i) {
        return this.request(Ss(i || {}, {
            method: e,
            url: r,
            data: (i || {}).data
        }))
    }
});
N.forEach(["post", "put", "patch", "query"], function(e) {
    function r(i) {
        return function(l, u, d) {
            return this.request(Ss(d || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: l,
                data: u
            }))
        }
    }
    gs.prototype[e] = r(), e !== "query" && (gs.prototype[e + "Form"] = r(!0))
});
let NC = class Fw {
    constructor(e) {
        if (typeof e != "function") throw new TypeError("executor must be a function.");
        let r;
        this.promise = new Promise(function(l) {
            r = l
        });
        const i = this;
        this.promise.then(a => {
            if (!i._listeners) return;
            let l = i._listeners.length;
            for (; l-- > 0;) i._listeners[l](a);
            i._listeners = null
        }), this.promise.then = a => {
            let l;
            const u = new Promise(d => {
                i.subscribe(d), l = d
            }).then(a);
            return u.cancel = function() {
                i.unsubscribe(l)
            }, u
        }, e(function(l, u, d) {
            i.reason || (i.reason = new ta(l, u, d), r(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const r = this._listeners.indexOf(e);
        r !== -1 && this._listeners.splice(r, 1)
    }
    toAbortSignal() {
        const e = new AbortController,
            r = i => {
                e.abort(i)
            };
        return this.subscribe(r), e.signal.unsubscribe = () => this.unsubscribe(r), e.signal
    }
    static source() {
        let e;
        return {
            token: new Fw(function(a) {
                e = a
            }),
            cancel: e
        }
    }
};

function LC(t) {
    return function(r) {
        return t.apply(null, r)
    }
}

function DC(t) {
    return N.isObject(t) && t.isAxiosError === !0
}
const of = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries( of ).forEach(([t, e]) => { of [e] = t
});

function Nw(t) {
    const e = new gs(t),
        r = pw(gs.prototype.request, e);
    return N.extend(r, gs.prototype, e, {
        allOwnKeys: !0
    }), N.extend(r, e, null, {
        allOwnKeys: !0
    }), r.create = function(a) {
        return Nw(Ss(t, a))
    }, r
}
const Ze = Nw(ea);
Ze.Axios = gs;
Ze.CanceledError = ta;
Ze.CancelToken = NC;
Ze.isCancel = Pw;
Ze.VERSION = Hf;
Ze.toFormData = ru;
Ze.AxiosError = se;
Ze.Cancel = Ze.CanceledError;
Ze.all = function(e) {
    return Promise.all(e)
};
Ze.spread = LC;
Ze.isAxiosError = DC;
Ze.mergeConfig = Ss;
Ze.AxiosHeaders = At;
Ze.formToJSON = t => Tw(N.isHTMLForm(t) ? new FormData(t) : t);
Ze.getAdapter = jw.getAdapter;
Ze.HttpStatusCode = of ;
Ze.default = Ze;
const {
    Axios: _M,
    AxiosError: CM,
    CanceledError: TM,
    isCancel: PM,
    CancelToken: RM,
    VERSION: AM,
    all: MM,
    Cancel: OM,
    isAxiosError: jM,
    spread: FM,
    toFormData: NM,
    AxiosHeaders: LM,
    HttpStatusCode: DM,
    formToJSON: BM,
    getAdapter: IM,
    mergeConfig: zM,
    create: VM
} = Ze, BC = typeof window > "u", ky = !BC && window.self !== window.top, vd = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), pt = [];
for (let t = 0; t < 256; ++t) pt.push((t + 256).toString(16).slice(1));

function IC(t, e = 0) {
    return (pt[t[e + 0]] + pt[t[e + 1]] + pt[t[e + 2]] + pt[t[e + 3]] + "-" + pt[t[e + 4]] + pt[t[e + 5]] + "-" + pt[t[e + 6]] + pt[t[e + 7]] + "-" + pt[t[e + 8]] + pt[t[e + 9]] + "-" + pt[t[e + 10]] + pt[t[e + 11]] + pt[t[e + 12]] + pt[t[e + 13]] + pt[t[e + 14]] + pt[t[e + 15]]).toLowerCase()
}
let wd;
const zC = new Uint8Array(16);

function VC() {
    if (!wd) {
        if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        wd = crypto.getRandomValues.bind(crypto)
    }
    return wd(zC)
}
const UC = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    _y = {
        randomUUID: UC
    };

function $C(t, e, r) {
    var a;
    t = t || {};
    const i = t.random ? ? ((a = t.rng) == null ? void 0 : a.call(t)) ? ? VC();
    if (i.length < 16) throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, IC(i)
}

function WC(t, e, r) {
    return _y.randomUUID && !t ? _y.randomUUID() : $C(t)
}
class qC extends Error {
    constructor(e, r, i, a, l) {
        super(e), this.name = "Base44Error", this.status = r, this.code = i, this.data = a, this.originalError = l
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}

function ko({
    baseURL: t,
    headers: e = {},
    token: r,
    interceptResponses: i = !0,
    onError: a
}) {
    const l = Ze.create({
        baseURL: t,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...e
        }
    });
    return r && (l.defaults.headers.common.Authorization = `Bearer ${r}`), l.interceptors.request.use(u => {
        typeof window < "u" && u.headers.set("X-Origin-URL", window.location.href);
        const d = WC();
        if (u.requestId = d, ky) try {
            window.parent.postMessage({
                type: "api-request-start",
                requestId: d,
                data: {
                    url: t + u.url,
                    method: u.method,
                    body: u.data instanceof FormData ? "[FormData object]" : u.data
                }
            }, "*")
        } catch {}
        return u
    }), i && l.interceptors.response.use(u => {
        var d;
        const h = (d = u.config) === null || d === void 0 ? void 0 : d.requestId;
        try {
            ky && h && window.parent.postMessage({
                type: "api-request-end",
                requestId: h,
                data: {
                    statusCode: u.status,
                    response: u.data
                }
            }, "*")
        } catch {}
        return u.data
    }, u => {
        var d, h, p, g, y, x, E, T;
        const b = ((h = (d = u.response) === null || d === void 0 ? void 0 : d.data) === null || h === void 0 ? void 0 : h.message) || ((g = (p = u.response) === null || p === void 0 ? void 0 : p.data) === null || g === void 0 ? void 0 : g.detail) || u.message,
            S = new qC(b, (y = u.response) === null || y === void 0 ? void 0 : y.status, (E = (x = u.response) === null || x === void 0 ? void 0 : x.data) === null || E === void 0 ? void 0 : E.code, (T = u.response) === null || T === void 0 ? void 0 : T.data, u);
        return a == null || a(S), Promise.reject(S)
    }), l
}

function Cy(t) {
    const {
        axios: e,
        appId: r,
        getSocket: i
    } = t;
    return new Proxy({}, {
        get(a, l) {
            if (!(typeof l != "string" || l === "then" || l.startsWith("_"))) return KC(e, r, l, i)
        }
    })
}

function HC(t) {
    var e;
    try {
        const r = JSON.parse(t);
        return {
            type: r.type,
            data: r.data,
            id: r.id || ((e = r.data) === null || e === void 0 ? void 0 : e.id),
            timestamp: r.timestamp || new Date().toISOString()
        }
    } catch (r) {
        return console.warn("[Base44 SDK] Failed to parse realtime message:", r), null
    }
}

function KC(t, e, r, i) {
    const a = `/apps/${e}/entities/${r}`;
    return {
        async list(l, u, d, h) {
            const p = {};
            return l && (p.sort = l), u && (p.limit = u), d && (p.skip = d), h && (p.fields = Array.isArray(h) ? h.join(",") : h), t.get(a, {
                params: p
            })
        },
        async filter(l, u, d, h, p) {
            const g = {
                q: JSON.stringify(l)
            };
            return u && (g.sort = u), d && (g.limit = d), h && (g.skip = h), p && (g.fields = Array.isArray(p) ? p.join(",") : p), t.get(a, {
                params: g
            })
        },
        async get(l) {
            return t.get(`${a}/${l}`)
        },
        async create(l) {
            return t.post(a, l)
        },
        async update(l, u) {
            return t.put(`${a}/${l}`, u)
        },
        async delete(l) {
            return t.delete(`${a}/${l}`)
        },
        async deleteMany(l) {
            return t.delete(a, {
                data: l
            })
        },
        async bulkCreate(l) {
            return t.post(`${a}/bulk`, l)
        },
        async updateMany(l, u) {
            return t.patch(`${a}/update-many`, {
                query: l,
                data: u
            })
        },
        async bulkUpdate(l) {
            return t.put(`${a}/bulk`, l)
        },
        async importEntities(l) {
            const u = new FormData;
            return u.append("file", l, l.name), t.post(`${a}/import`, u, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
        subscribe(l) {
            const u = `entities:${e}:${r}`;
            return i().subscribeToRoom(u, {
                update_model: p => {
                    var g;
                    const y = HC(p.data);
                    if (y) {
                        y.type !== "delete" && (!((g = y.data) === null || g === void 0) && g._oversize) && console.error(`[Base44 SDK] Realtime broadcast for ${r}#${y.id} was oversize and got slimmed for transport. Fields >10 KB are empty and the rest of the record may be a stub. Call \`entities.${r}.get("${y.id}")\` to fetch the full record.`);
                        try {
                            l(y)
                        } catch (x) {
                            console.error("[Base44 SDK] Subscription callback error:", x)
                        }
                    }
                }
            })
        }
    }
}

function QC(t, e) {
    return {
        async call(r, i, a) {
            if (!(r != null && r.trim())) throw new Error("Integration slug is required and cannot be empty");
            if (!(i != null && i.trim())) throw new Error("Operation ID is required and cannot be empty");
            const {
                pathParams: l,
                queryParams: u,
                ...d
            } = a ? ? {}, h = { ...d,
                ...l && {
                    path_params: l
                },
                ...u && {
                    query_params: u
                }
            };
            return await t.post(`/apps/${e}/integrations/custom/${r}/${i}`, h)
        }
    }
}

function Ty(t, e) {
    const r = QC(t, e);
    return new Proxy({}, {
        get(i, a) {
            if (!(typeof a != "string" || a === "then" || a.startsWith("_"))) return a === "custom" ? r : new Proxy({}, {
                get(l, u) {
                    if (!(typeof u != "string" || u === "then" || u.startsWith("_"))) return async d => {
                        if (typeof d == "string") throw new Error(`Integration ${u} must receive an object with named parameters, received: ${d}`);
                        let h, p;
                        return d instanceof FormData || d && Object.values(d).some(g => g instanceof File) ? (h = new FormData, Object.keys(d).forEach(g => {
                            d[g] instanceof File ? h.append(g, d[g], d[g].name) : typeof d[g] == "object" && d[g] !== null ? h.append(g, JSON.stringify(d[g])) : h.append(g, d[g])
                        }), p = "multipart/form-data") : (h = d, p = "application/json"), a === "Core" ? t.post(`/apps/${e}/integration-endpoints/Core/${u}`, h || d, {
                            headers: {
                                "Content-Type": p
                            }
                        }) : t.post(`/apps/${e}/integration-endpoints/installable/${a}/integration-endpoints/${u}`, h || d, {
                            headers: {
                                "Content-Type": p
                            }
                        })
                    }
                }
            })
        }
    })
}

function GC() {
    return typeof window > "u" ? !1 : window !== window.parent
}

function YC(t, e, r) {
    const l = Math.round(window.screenX + (window.outerWidth - 500) / 2),
        u = Math.round(window.screenY + (window.outerHeight - 600) / 2),
        d = window.open(t, "base44_auth", `width=500,height=600,left=${l},top=${u},resizable=yes,scrollbars=yes`);
    if (!d) return;
    const h = () => {
            window.removeEventListener("message", p), clearInterval(g), d.closed || d.close()
        },
        p = y => {
            var x;
            if (y.origin !== r || y.source !== d || !(!((x = y.data) === null || x === void 0) && x.access_token)) return;
            h();
            const E = new URL(e),
                {
                    access_token: T,
                    is_new_user: b
                } = y.data;
            E.searchParams.set("access_token", T), b != null && E.searchParams.set("is_new_user", String(b)), window.location.href = E.toString()
        },
        g = setInterval(() => {
            d.closed && h()
        }, 500);
    window.addEventListener("message", p)
}

function XC(t, e, r, i) {
    return {
        async me() {
            return t.get(`/apps/${r}/entities/User/me`)
        },
        async updateMe(a) {
            return t.put(`/apps/${r}/entities/User/me`, a)
        },
        redirectToLogin(a) {
            if (typeof window > "u") throw new Error("Login method can only be used in a browser environment");
            const l = a ? new URL(a, window.location.origin).toString() : window.location.href,
                u = `${i.appBaseUrl}/login?from_url=${encodeURIComponent(l)}`;
            window.location.href = u
        },
        loginWithProvider(a, l = "/") {
            const u = new URL(l, window.location.origin).toString(),
                d = `app_id=${r}&from_url=${encodeURIComponent(u)}`;
            let h;
            a === "sso" ? h = `/apps/${r}/auth/sso/login` : h = `/apps/auth${a==="google"?"":`/${a}`}/login`;
            const p = `${i.appBaseUrl}/api${h}?${d}`;
            if (GC()) {
                const g = `${p}&popup_origin=${encodeURIComponent(window.location.origin)}`;
                return YC(g, u, window.location.origin)
            }
            window.location.href = p
        },
        logout(a) {
            if (delete t.defaults.headers.common.Authorization, typeof window < "u") {
                if (window.localStorage) try {
                    window.localStorage.removeItem("base44_access_token"), window.localStorage.removeItem("token")
                } catch (d) {
                    console.error("Failed to remove token from localStorage:", d)
                }
                const l = a || window.location.href,
                    u = `${i.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(l)}`;
                window.location.href = u
            }
        },
        setToken(a, l = !0) {
            if (a && (t.defaults.headers.common.Authorization = `Bearer ${a}`, e.defaults.headers.common.Authorization = `Bearer ${a}`, l && typeof window < "u" && window.localStorage)) try {
                window.localStorage.setItem("base44_access_token", a), window.localStorage.setItem("token", a)
            } catch (u) {
                console.error("Failed to save token to localStorage:", u)
            }
        },
        async loginViaEmailPassword(a, l, u) {
            var d;
            try {
                const h = await t.post(`/apps/${r}/auth/login`, {
                        email: a,
                        password: l,
                        ...u && {
                            turnstile_token: u
                        }
                    }),
                    {
                        access_token: p,
                        user: g
                    } = h;
                return p && this.setToken(p), {
                    access_token: p,
                    user: g
                }
            } catch (h) {
                throw ((d = h.response) === null || d === void 0 ? void 0 : d.status) === 401 && await this.logout(), h
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(), !0
            } catch {
                return !1
            }
        },
        inviteUser(a, l) {
            return t.post(`/apps/${r}/users/invite-user`, {
                user_email: a,
                role: l
            })
        },
        register(a) {
            return t.post(`/apps/${r}/auth/register`, a)
        },
        verifyOtp({
            email: a,
            otpCode: l
        }) {
            return t.post(`/apps/${r}/auth/verify-otp`, {
                email: a,
                otp_code: l
            })
        },
        resendOtp(a) {
            return t.post(`/apps/${r}/auth/resend-otp`, {
                email: a
            })
        },
        resetPasswordRequest(a) {
            return t.post(`/apps/${r}/auth/reset-password-request`, {
                email: a
            })
        },
        resetPassword({
            resetToken: a,
            newPassword: l
        }) {
            return t.post(`/apps/${r}/auth/reset-password`, {
                reset_token: a,
                new_password: l
            })
        },
        changePassword({
            userId: a,
            currentPassword: l,
            newPassword: u
        }) {
            return t.post(`/apps/${r}/auth/change-password`, {
                user_id: a,
                current_password: l,
                new_password: u
            })
        }
    }
}

function JC(t, e) {
    return {
        async getAccessToken(r) {
            const i = `/apps/${e}/auth/sso/accesstoken/${r}`;
            return t.get(i)
        }
    }
}

function ZC(t, e) {
    return {
        async getAccessToken(r) {
            if (!r || typeof r != "string") throw new Error("Integration type is required and must be a string");
            return (await t.get(`/apps/${e}/external-auth/tokens/${r}`)).access_token
        },
        async getConnection(r) {
            var i;
            if (!r || typeof r != "string") throw new Error("Integration type is required and must be a string");
            const l = await t.get(`/apps/${e}/external-auth/tokens/${r}`);
            return {
                accessToken: l.access_token,
                connectionConfig: (i = l.connection_config) !== null && i !== void 0 ? i : null
            }
        },
        async getWorkspaceConnection(r) {
            var i;
            if (!r || typeof r != "string") throw new Error("Connector ID is required and must be a string");
            const l = await t.get(`/apps/${e}/external-auth/tokens/connectors/${r}`);
            return {
                accessToken: l.access_token,
                connectionConfig: (i = l.connection_config) !== null && i !== void 0 ? i : null
            }
        },
        async getCurrentAppUserAccessToken(r) {
            if (!r || typeof r != "string") throw new Error("Connector ID is required and must be a string");
            return (await t.get(`/apps/${e}/app-user-auth/connectors/${r}/token`)).access_token
        },
        async getCurrentAppUserConnection(r) {
            var i;
            if (!r || typeof r != "string") throw new Error("Connector ID is required and must be a string");
            const l = await t.get(`/apps/${e}/app-user-auth/connectors/${r}/token`);
            return {
                accessToken: l.access_token,
                connectionConfig: (i = l.connection_config) !== null && i !== void 0 ? i : null
            }
        }
    }
}

function eT(t, e) {
    return {
        async connectAppUser(r) {
            if (!r || typeof r != "string") throw new Error("Connector ID is required and must be a string");
            return (await t.post(`/apps/${e}/app-user-auth/connectors/${r}/initiate`)).redirect_url
        },
        async disconnectAppUser(r) {
            if (!r || typeof r != "string") throw new Error("Connector ID is required and must be a string");
            await t.delete(`/apps/${e}/app-user-auth/connectors/${r}`)
        }
    }
}

function Io(t = {}) {
    const {
        storageKey: e = "base44_access_token",
        paramName: r = "access_token",
        saveToStorage: i = !0,
        removeFromUrl: a = !0
    } = t;
    let l = null;
    if (typeof window < "u" && window.location) try {
        const u = new URLSearchParams(window.location.search);
        if (l = u.get(r), l) {
            if (i && tT(l, {
                    storageKey: e
                }), a) {
                u.delete(r);
                const d = `${window.location.pathname}${u.toString()?`?${u.toString()}`:""}${window.location.hash}`;
                window.history.replaceState({}, document.title, d)
            }
            return l
        }
    } catch (u) {
        console.error("Error retrieving token from URL:", u)
    }
    if (typeof window < "u" && window.localStorage) try {
        return l = window.localStorage.getItem(e), l
    } catch (u) {
        console.error("Error retrieving token from local storage:", u)
    }
    return null
}

function tT(t, e) {
    const {
        storageKey: r = "base44_access_token"
    } = e;
    if (typeof window > "u" || !window.localStorage || !t) return !1;
    try {
        return window.localStorage.setItem(r, t), window.localStorage.setItem("token", t), !0
    } catch (i) {
        return console.error("Error saving token to local storage:", i), !1
    }
}

function Py(t, e, r) {
    const i = (l, u) => l ? `${String(l).replace(/\/$/,"")}${u}` : u,
        a = l => {
            const u = new Headers;
            if (r != null && r.getAuthHeaders) {
                const d = r.getAuthHeaders();
                Object.entries(d).forEach(([h, p]) => {
                    p != null && u.set(h, String(p))
                })
            }
            return l && new Headers(l).forEach((d, h) => {
                u.set(h, d)
            }), u
        };
    return {
        async invoke(l, u) {
            if (typeof u == "string") throw new Error(`Function ${l} must receive an object with named parameters, received: ${u}`);
            let d, h;
            return u instanceof FormData || u && Object.values(u).some(p => p instanceof File) ? (d = new FormData, Object.keys(u).forEach(p => {
                u[p] instanceof File ? d.append(p, u[p], u[p].name) : typeof u[p] == "object" && u[p] !== null ? d.append(p, JSON.stringify(u[p])) : d.append(p, u[p])
            }), h = "multipart/form-data") : (d = u, h = "application/json"), t.post(`/apps/${e}/functions/${l}`, d || u, {
                headers: {
                    "Content-Type": h
                }
            })
        },
        async fetch(l, u = {}) {
            const h = `/functions${l.startsWith("/")?l:`/${l}`}`,
                p = a(u.headers),
                g = { ...u,
                    headers: p
                };
            return await fetch(i(r == null ? void 0 : r.baseURL, h), g)
        }
    }
}

function Ry({
    axios: t,
    getSocket: e,
    appId: r,
    serverUrl: i,
    token: a
}) {
    const l = `/apps/${r}/agents`,
        u = {},
        d = () => t.get(`${l}/conversations`),
        h = b => t.get(`${l}/conversations/${b}`);
    return {
        getConversations: d,
        getConversation: h,
        listConversations: b => t.get(`${l}/conversations`, {
            params: b
        }),
        createConversation: b => t.post(`${l}/conversations`, b),
        addMessage: async (b, S) => t.post(`${l}/conversations/v2/${b.id}/messages`, S),
        subscribeToConversation: (b, S) => {
            const k = `/agent-conversations/${b}`,
                j = e(),
                R = h(b).then(M => (u[b] = M, M));
            return j.subscribeToRoom(k, {
                connect: () => {},
                update_model: async ({
                    data: M
                }) => {
                    const B = JSON.parse(M);
                    if (B._message) {
                        await R;
                        const W = B._message,
                            Y = u[b];
                        if (Y) {
                            const I = Y.messages || [],
                                J = I.findIndex(ue => ue.id === W.id),
                                de = J !== -1 ? I.map((ue, Re) => Re === J ? W : ue) : [...I, W];
                            u[b] = { ...Y,
                                messages: de
                            }, S == null || S(u[b])
                        }
                    }
                }
            })
        },
        getWhatsAppConnectURL: b => {
            const S = `${i}/api/apps/${r}/agents/${encodeURIComponent(b)}/whatsapp`,
                k = a ? ? Io();
            return k ? `${S}?token=${k}` : S
        },
        getTelegramConnectURL: b => {
            const S = `${i}/api/apps/${r}/agents/${encodeURIComponent(b)}/telegram`,
                k = a ? ? Io();
            return k ? `${S}?token=${k}` : S
        }
    }
}

function Ay(t, e) {
    const r = `/app-logs/${e}`;
    return {
        async logUserInApp(i) {
            await t.post(`${r}/log-user-in-app/${i}`)
        },
        async fetchLogs(i = {}) {
            return await t.get(r, {
                params: i
            })
        },
        async getStats(i = {}) {
            return await t.get(`${r}/stats`, {
                params: i
            })
        }
    }
}

function nT(t, e) {
    return {
        async inviteUser(r, i) {
            if (i !== "user" && i !== "admin") throw new Error(`Invalid role: "${i}". Role must be either "user" or "admin".`);
            return await t.post(`/apps/${e}/runtime/users/invite-user`, {
                user_email: r,
                role: i
            })
        }
    }
}
const On = Object.create(null);
On.open = "0";
On.close = "1";
On.ping = "2";
On.pong = "3";
On.message = "4";
On.upgrade = "5";
On.noop = "6";
const jl = Object.create(null);
Object.keys(On).forEach(t => {
    jl[On[t]] = t
});
const af = {
        type: "error",
        data: "parser error"
    },
    Lw = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
    Dw = typeof ArrayBuffer == "function",
    Bw = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer,
    Qf = ({
        type: t,
        data: e
    }, r, i) => Lw && e instanceof Blob ? r ? i(e) : My(e, i) : Dw && (e instanceof ArrayBuffer || Bw(e)) ? r ? i(e) : My(new Blob([e]), i) : i(On[t] + (e || "")),
    My = (t, e) => {
        const r = new FileReader;
        return r.onload = function() {
            const i = r.result.split(",")[1];
            e("b" + (i || ""))
        }, r.readAsDataURL(t)
    };

function Oy(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
}
let xd;

function rT(t, e) {
    if (Lw && t.data instanceof Blob) return t.data.arrayBuffer().then(Oy).then(e);
    if (Dw && (t.data instanceof ArrayBuffer || Bw(t.data))) return e(Oy(t.data));
    Qf(t, !1, r => {
        xd || (xd = new TextEncoder), e(xd.encode(r))
    })
}
const jy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    _o = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < jy.length; t++) _o[jy.charCodeAt(t)] = t;
const sT = t => {
        let e = t.length * .75,
            r = t.length,
            i, a = 0,
            l, u, d, h;
        t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
        const p = new ArrayBuffer(e),
            g = new Uint8Array(p);
        for (i = 0; i < r; i += 4) l = _o[t.charCodeAt(i)], u = _o[t.charCodeAt(i + 1)], d = _o[t.charCodeAt(i + 2)], h = _o[t.charCodeAt(i + 3)], g[a++] = l << 2 | u >> 4, g[a++] = (u & 15) << 4 | d >> 2, g[a++] = (d & 3) << 6 | h & 63;
        return p
    },
    iT = typeof ArrayBuffer == "function",
    Gf = (t, e) => {
        if (typeof t != "string") return {
            type: "message",
            data: Iw(t, e)
        };
        const r = t.charAt(0);
        return r === "b" ? {
            type: "message",
            data: oT(t.substring(1), e)
        } : jl[r] ? t.length > 1 ? {
            type: jl[r],
            data: t.substring(1)
        } : {
            type: jl[r]
        } : af
    },
    oT = (t, e) => {
        if (iT) {
            const r = sT(t);
            return Iw(r, e)
        } else return {
            base64: !0,
            data: t
        }
    },
    Iw = (t, e) => {
        switch (e) {
            case "blob":
                return t instanceof Blob ? t : new Blob([t]);
            case "arraybuffer":
            default:
                return t instanceof ArrayBuffer ? t : t.buffer
        }
    },
    zw = "",
    aT = (t, e) => {
        const r = t.length,
            i = new Array(r);
        let a = 0;
        t.forEach((l, u) => {
            Qf(l, !1, d => {
                i[u] = d, ++a === r && e(i.join(zw))
            })
        })
    },
    lT = (t, e) => {
        const r = t.split(zw),
            i = [];
        for (let a = 0; a < r.length; a++) {
            const l = Gf(r[a], e);
            if (i.push(l), l.type === "error") break
        }
        return i
    };

function uT() {
    return new TransformStream({
        transform(t, e) {
            rT(t, r => {
                const i = r.length;
                let a;
                if (i < 126) a = new Uint8Array(1), new DataView(a.buffer).setUint8(0, i);
                else if (i < 65536) {
                    a = new Uint8Array(3);
                    const l = new DataView(a.buffer);
                    l.setUint8(0, 126), l.setUint16(1, i)
                } else {
                    a = new Uint8Array(9);
                    const l = new DataView(a.buffer);
                    l.setUint8(0, 127), l.setBigUint64(1, BigInt(i))
                }
                t.data && typeof t.data != "string" && (a[0] |= 128), e.enqueue(a), e.enqueue(r)
            })
        }
    })
}
let Sd;

function Sl(t) {
    return t.reduce((e, r) => e + r.length, 0)
}

function bl(t, e) {
    if (t[0].length === e) return t.shift();
    const r = new Uint8Array(e);
    let i = 0;
    for (let a = 0; a < e; a++) r[a] = t[0][i++], i === t[0].length && (t.shift(), i = 0);
    return t.length && i < t[0].length && (t[0] = t[0].slice(i)), r
}

function cT(t, e) {
    Sd || (Sd = new TextDecoder);
    const r = [];
    let i = 0,
        a = -1,
        l = !1;
    return new TransformStream({
        transform(u, d) {
            for (r.push(u);;) {
                if (i === 0) {
                    if (Sl(r) < 1) break;
                    const h = bl(r, 1);
                    l = (h[0] & 128) === 128, a = h[0] & 127, a < 126 ? i = 3 : a === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (Sl(r) < 2) break;
                    const h = bl(r, 2);
                    a = new DataView(h.buffer, h.byteOffset, h.length).getUint16(0), i = 3
                } else if (i === 2) {
                    if (Sl(r) < 8) break;
                    const h = bl(r, 8),
                        p = new DataView(h.buffer, h.byteOffset, h.length),
                        g = p.getUint32(0);
                    if (g > Math.pow(2, 21) - 1) {
                        d.enqueue(af);
                        break
                    }
                    a = g * Math.pow(2, 32) + p.getUint32(4), i = 3
                } else {
                    if (Sl(r) < a) break;
                    const h = bl(r, a);
                    d.enqueue(Gf(l ? h : Sd.decode(h), e)), i = 0
                }
                if (a === 0 || a > t) {
                    d.enqueue(af);
                    break
                }
            }
        }
    })
}
const Vw = 4;

function tt(t) {
    if (t) return dT(t)
}

function dT(t) {
    for (var e in tt.prototype) t[e] = tt.prototype[e];
    return t
}
tt.prototype.on = tt.prototype.addEventListener = function(t, e) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
};
tt.prototype.once = function(t, e) {
    function r() {
        this.off(t, r), e.apply(this, arguments)
    }
    return r.fn = e, this.on(t, r), this
};
tt.prototype.off = tt.prototype.removeListener = tt.prototype.removeAllListeners = tt.prototype.removeEventListener = function(t, e) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
    var r = this._callbacks["$" + t];
    if (!r) return this;
    if (arguments.length == 1) return delete this._callbacks["$" + t], this;
    for (var i, a = 0; a < r.length; a++)
        if (i = r[a], i === e || i.fn === e) {
            r.splice(a, 1);
            break
        }
    return r.length === 0 && delete this._callbacks["$" + t], this
};
tt.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
    if (r) {
        r = r.slice(0);
        for (var i = 0, a = r.length; i < a; ++i) r[i].apply(this, e)
    }
    return this
};
tt.prototype.emitReserved = tt.prototype.emit;
tt.prototype.listeners = function(t) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
};
tt.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length
};
const iu = typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, r) => r(e, 0),
    on = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(),
    fT = "arraybuffer";

function Uw(t, ...e) {
    return e.reduce((r, i) => (t.hasOwnProperty(i) && (r[i] = t[i]), r), {})
}
const hT = on.setTimeout,
    pT = on.clearTimeout;

function ou(t, e) {
    e.useNativeTimers ? (t.setTimeoutFn = hT.bind(on), t.clearTimeoutFn = pT.bind(on)) : (t.setTimeoutFn = on.setTimeout.bind(on), t.clearTimeoutFn = on.clearTimeout.bind(on))
}
const mT = 1.33;

function gT(t) {
    return typeof t == "string" ? yT(t) : Math.ceil((t.byteLength || t.size) * mT)
}

function yT(t) {
    let e = 0,
        r = 0;
    for (let i = 0, a = t.length; i < a; i++) e = t.charCodeAt(i), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (i++, r += 4);
    return r
}

function $w() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}

function vT(t) {
    let e = "";
    for (let r in t) t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
    return e
}

function wT(t) {
    let e = {},
        r = t.split("&");
    for (let i = 0, a = r.length; i < a; i++) {
        let l = r[i].split("=");
        e[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
    }
    return e
}
class xT extends Error {
    constructor(e, r, i) {
        super(e), this.description = r, this.context = i, this.type = "TransportError"
    }
}
class Yf extends tt {
    constructor(e) {
        super(), this.writable = !1, ou(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64
    }
    onError(e, r, i) {
        return super.emitReserved("error", new xT(e, r, i)), this
    }
    open() {
        return this.readyState = "opening", this.doOpen(), this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }
    send(e) {
        this.readyState === "open" && this.write(e)
    }
    onOpen() {
        this.readyState = "open", this.writable = !0, super.emitReserved("open")
    }
    onData(e) {
        const r = Gf(e, this.socket.binaryType);
        this.onPacket(r)
    }
    onPacket(e) {
        super.emitReserved("packet", e)
    }
    onClose(e) {
        this.readyState = "closed", super.emitReserved("close", e)
    }
    pause(e) {}
    createUri(e, r = {}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r)
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(e) {
        const r = vT(e);
        return r.length ? "?" + r : ""
    }
}
class ST extends Yf {
    constructor() {
        super(...arguments), this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(e) {
        this.readyState = "pausing";
        const r = () => {
            this.readyState = "paused", e()
        };
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++, this.once("pollComplete", function() {
                --i || r()
            })), this.writable || (i++, this.once("drain", function() {
                --i || r()
            }))
        } else r()
    }
    _poll() {
        this._polling = !0, this.doPoll(), this.emitReserved("poll")
    }
    onData(e) {
        const r = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(), i.type === "close") return this.onClose({
                description: "transport closed by the server"
            }), !1;
            this.onPacket(i)
        };
        lT(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll())
    }
    doClose() {
        const e = () => {
            this.write([{
                type: "close"
            }])
        };
        this.readyState === "open" ? e() : this.once("open", e)
    }
    write(e) {
        this.writable = !1, aT(e, r => {
            this.doWrite(r, () => {
                this.writable = !0, this.emitReserved("drain")
            })
        })
    }
    uri() {
        const e = this.opts.secure ? "https" : "http",
            r = this.query || {};
        return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = $w()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(e, r)
    }
}
let Ww = !1;
try {
    Ww = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {}
const bT = Ww;

function ET() {}
class kT extends ST {
    constructor(e) {
        if (super(e), typeof location < "u") {
            const r = location.protocol === "https:";
            let i = location.port;
            i || (i = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port
        }
    }
    doWrite(e, r) {
        const i = this.request({
            method: "POST",
            data: e
        });
        i.on("success", r), i.on("error", (a, l) => {
            this.onError("xhr post error", a, l)
        })
    }
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)), e.on("error", (r, i) => {
            this.onError("xhr poll error", r, i)
        }), this.pollXhr = e
    }
}
class Rn extends tt {
    constructor(e, r, i) {
        super(), this.createRequest = e, ou(this, i), this._opts = i, this._method = i.method || "GET", this._uri = r, this._data = i.data !== void 0 ? i.data : null, this._create()
    }
    _create() {
        var e;
        const r = Uw(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        r.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(r);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let a in this._opts.extraHeaders) this._opts.extraHeaders.hasOwnProperty(a) && i.setRequestHeader(a, this._opts.extraHeaders[a])
                }
            } catch {}
            if (this._method === "POST") try {
                i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
            } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}(e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(i), "withCredentials" in i && (i.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout), i.onreadystatechange = () => {
                var a;
                i.readyState === 3 && ((a = this._opts.cookieJar) === null || a === void 0 || a.parseCookies(i.getResponseHeader("set-cookie"))), i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }, 0))
            }, i.send(this._data)
        } catch (a) {
            this.setTimeoutFn(() => {
                this._onError(a)
            }, 0);
            return
        }
        typeof document < "u" && (this._index = Rn.requestsCount++, Rn.requests[this._index] = this)
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr), this._cleanup(!0)
    }
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = ET, e) try {
                this._xhr.abort()
            } catch {}
            typeof document < "u" && delete Rn.requests[this._index], this._xhr = null
        }
    }
    _onLoad() {
        const e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
Rn.requestsCount = 0;
Rn.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", Fy);
    else if (typeof addEventListener == "function") {
        const t = "onpagehide" in on ? "pagehide" : "unload";
        addEventListener(t, Fy, !1)
    }
}

function Fy() {
    for (let t in Rn.requests) Rn.requests.hasOwnProperty(t) && Rn.requests[t].abort()
}
const _T = (function() {
    const t = qw({
        xdomain: !1
    });
    return t && t.responseType !== null
})();
class CT extends kT {
    constructor(e) {
        super(e);
        const r = e && e.forceBase64;
        this.supportsBinary = _T && !r
    }
    request(e = {}) {
        return Object.assign(e, {
            xd: this.xd
        }, this.opts), new Rn(qw, this.uri(), e)
    }
}

function qw(t) {
    const e = t.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || bT)) return new XMLHttpRequest
    } catch {}
    if (!e) try {
        return new on[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
    } catch {}
}
const Hw = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class TT extends Yf {
    get name() {
        return "websocket"
    }
    doOpen() {
        const e = this.uri(),
            r = this.opts.protocols,
            i = Hw ? {} : Uw(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, r, i)
        } catch (a) {
            return this.emitReserved("error", a)
        }
        this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
        }, this.ws.onclose = e => this.onClose({
            description: "websocket connection closed",
            context: e
        }), this.ws.onmessage = e => this.onData(e.data), this.ws.onerror = e => this.onError("websocket error", e)
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r],
                a = r === e.length - 1;
            Qf(i, this.supportsBinary, l => {
                try {
                    this.doWrite(i, l)
                } catch {}
                a && iu(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}, this.ws.close(), this.ws = null)
    }
    uri() {
        const e = this.opts.secure ? "wss" : "ws",
            r = this.query || {};
        return this.opts.timestampRequests && (r[this.opts.timestampParam] = $w()), this.supportsBinary || (r.b64 = 1), this.createUri(e, r)
    }
}
const bd = on.WebSocket || on.MozWebSocket;
class PT extends TT {
    createSocket(e, r, i) {
        return Hw ? new bd(e, r, i) : r ? new bd(e, r) : new bd(e)
    }
    doWrite(e, r) {
        this.ws.send(r)
    }
}
class RT extends Yf {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name])
        } catch (e) {
            return this.emitReserved("error", e)
        }
        this._transport.closed.then(() => {
            this.onClose()
        }).catch(e => {
            this.onError("webtransport error", e)
        }), this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then(e => {
                const r = cT(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                    i = e.readable.pipeThrough(r).getReader(),
                    a = uT();
                a.readable.pipeTo(e.writable), this._writer = a.writable.getWriter();
                const l = () => {
                    i.read().then(({
                        done: d,
                        value: h
                    }) => {
                        d || (this.onPacket(h), l())
                    }).catch(d => {})
                };
                l();
                const u = {
                    type: "open"
                };
                this.query.sid && (u.data = `{"sid":"${this.query.sid}"}`), this._writer.write(u).then(() => this.onOpen())
            })
        })
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r],
                a = r === e.length - 1;
            this._writer.write(i).then(() => {
                a && iu(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close()
    }
}
const AT = {
        websocket: PT,
        webtransport: RT,
        polling: CT
    },
    MT = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    OT = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

function lf(t) {
    if (t.length > 8e3) throw "URI too long";
    const e = t,
        r = t.indexOf("["),
        i = t.indexOf("]");
    r != -1 && i != -1 && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
    let a = MT.exec(t || ""),
        l = {},
        u = 14;
    for (; u--;) l[OT[u]] = a[u] || "";
    return r != -1 && i != -1 && (l.source = e, l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"), l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), l.ipv6uri = !0), l.pathNames = jT(l, l.path), l.queryKey = FT(l, l.query), l
}

function jT(t, e) {
    const r = /\/{2,9}/g,
        i = e.replace(r, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1), e.slice(-1) == "/" && i.splice(i.length - 1, 1), i
}

function FT(t, e) {
    const r = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, a, l) {
        a && (r[a] = l)
    }), r
}
const uf = typeof addEventListener == "function" && typeof removeEventListener == "function",
    Fl = [];
uf && addEventListener("offline", () => {
    Fl.forEach(t => t())
}, !1);
class Lr extends tt {
    constructor(e, r) {
        if (super(), this.binaryType = fT, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (r = e, e = null), e) {
            const i = lf(e);
            r.hostname = i.host, r.secure = i.protocol === "https" || i.protocol === "wss", r.port = i.port, i.query && (r.query = i.query)
        } else r.host && (r.hostname = lf(r.host).host);
        ou(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach(i => {
            const a = i.prototype.name;
            this.transports.push(a), this._transportsByName[a] = i
        }), this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = wT(this.opts.query)), uf && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close())
        }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }, Fl.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open()
    }
    createTransport(e) {
        const r = Object.assign({}, this.opts.query);
        r.EIO = Vw, r.transport = e, this.id && (r.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: r,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available")
            }, 0);
            return
        }
        const e = this.opts.rememberUpgrade && Lr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const r = this.createTransport(e);
        r.open(), this.setTransport(r)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", r => this._onClose("transport close", r))
    }
    onOpen() {
        this.readyState = "open", Lr.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush()
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "ping":
                this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
                break;
            case "error":
                const r = new Error("server error");
                r.code = e.data, this._onError(r);
                break;
            case "message":
                this.emitReserved("data", e.data), this.emitReserved("message", e.data);
                break
        }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout")
        }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this._getWritablePackets();
            this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
        let r = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const a = this.writeBuffer[i].data;
            if (a && (r += gT(a)), i > 0 && r > this._maxPayload) return this.writeBuffer.slice(0, i);
            r += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime) return !0;
        const e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0, iu(() => {
            this._onClose("ping timeout")
        }, this.setTimeoutFn)), e
    }
    write(e, r, i) {
        return this._sendPacket("message", e, r, i), this
    }
    send(e, r, i) {
        return this._sendPacket("message", e, r, i), this
    }
    _sendPacket(e, r, i, a) {
        if (typeof r == "function" && (a = r, r = void 0), typeof i == "function" && (a = i, i = null), this.readyState === "closing" || this.readyState === "closed") return;
        i = i || {}, i.compress = i.compress !== !1;
        const l = {
            type: e,
            data: r,
            options: i
        };
        this.emitReserved("packetCreate", l), this.writeBuffer.push(l), a && this.once("flush", a), this.flush()
    }
    close() {
        const e = () => {
                this._onClose("forced close"), this.transport.close()
            },
            r = () => {
                this.off("upgrade", r), this.off("upgradeError", r), e()
            },
            i = () => {
                this.once("upgrade", r), this.once("upgradeError", r)
            };
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : e()
        }) : this.upgrading ? i() : e()), this
    }
    _onError(e) {
        if (Lr.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") return this.transports.shift(), this._open();
        this.emitReserved("error", e), this._onClose("transport error", e)
    }
    _onClose(e, r) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), uf && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
                const i = Fl.indexOf(this._offlineEventListener);
                i !== -1 && Fl.splice(i, 1)
            }
            this.readyState = "closed", this.id = null, this.emitReserved("close", e, r), this.writeBuffer = [], this._prevBufferLen = 0
        }
    }
}
Lr.protocol = Vw;
class NT extends Lr {
    constructor() {
        super(...arguments), this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
            for (let e = 0; e < this._upgrades.length; e++) this._probe(this._upgrades[e])
    }
    _probe(e) {
        let r = this.createTransport(e),
            i = !1;
        Lr.priorWebsocketSuccess = !1;
        const a = () => {
            i || (r.send([{
                type: "ping",
                data: "probe"
            }]), r.once("packet", y => {
                if (!i)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0, this.emitReserved("upgrading", r), !r) return;
                        Lr.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
                            i || this.readyState !== "closed" && (g(), this.setTransport(r), r.send([{
                                type: "upgrade"
                            }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush())
                        })
                    } else {
                        const x = new Error("probe error");
                        x.transport = r.name, this.emitReserved("upgradeError", x)
                    }
            }))
        };

        function l() {
            i || (i = !0, g(), r.close(), r = null)
        }
        const u = y => {
            const x = new Error("probe error: " + y);
            x.transport = r.name, l(), this.emitReserved("upgradeError", x)
        };

        function d() {
            u("transport closed")
        }

        function h() {
            u("socket closed")
        }

        function p(y) {
            r && y.name !== r.name && l()
        }
        const g = () => {
            r.removeListener("open", a), r.removeListener("error", u), r.removeListener("close", d), this.off("close", h), this.off("upgrading", p)
        };
        r.once("open", a), r.once("error", u), r.once("close", d), this.once("close", h), this.once("upgrading", p), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
            i || r.open()
        }, 200) : r.open()
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e)
    }
    _filterUpgrades(e) {
        const r = [];
        for (let i = 0; i < e.length; i++) ~this.transports.indexOf(e[i]) && r.push(e[i]);
        return r
    }
}
let LT = class extends NT {
    constructor(e, r = {}) {
        const i = typeof e == "object" ? e : r;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(a => AT[a]).filter(a => !!a)), super(e, i)
    }
};

function DT(t, e = "", r) {
    let i = t;
    r = r || typeof location < "u" && location, t == null && (t = r.protocol + "//" + r.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t), /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t), i = lf(t)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
    const l = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + l + ":" + i.port + e, i.href = i.protocol + "://" + l + (r && r.port === i.port ? "" : ":" + i.port), i
}
const BT = typeof ArrayBuffer == "function",
    IT = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer,
    Kw = Object.prototype.toString,
    zT = typeof Blob == "function" || typeof Blob < "u" && Kw.call(Blob) === "[object BlobConstructor]",
    VT = typeof File == "function" || typeof File < "u" && Kw.call(File) === "[object FileConstructor]";

function Xf(t) {
    return BT && (t instanceof ArrayBuffer || IT(t)) || zT && t instanceof Blob || VT && t instanceof File
}

function Nl(t, e) {
    if (!t || typeof t != "object") return !1;
    if (Array.isArray(t)) {
        for (let r = 0, i = t.length; r < i; r++)
            if (Nl(t[r])) return !0;
        return !1
    }
    if (Xf(t)) return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1) return Nl(t.toJSON(), !0);
    for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r) && Nl(t[r])) return !0;
    return !1
}

function UT(t) {
    const e = [],
        r = t.data,
        i = t;
    return i.data = cf(r, e), i.attachments = e.length, {
        packet: i,
        buffers: e
    }
}

function cf(t, e) {
    if (!t) return t;
    if (Xf(t)) {
        const r = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(t), r
    } else if (Array.isArray(t)) {
        const r = new Array(t.length);
        for (let i = 0; i < t.length; i++) r[i] = cf(t[i], e);
        return r
    } else if (typeof t == "object" && !(t instanceof Date)) {
        const r = {};
        for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = cf(t[i], e));
        return r
    }
    return t
}

function $T(t, e) {
    return t.data = df(t.data, e), delete t.attachments, t
}

function df(t, e) {
    if (!t) return t;
    if (t && t._placeholder === !0) {
        if (typeof t.num == "number" && t.num >= 0 && t.num < e.length) return e[t.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(t))
        for (let r = 0; r < t.length; r++) t[r] = df(t[r], e);
    else if (typeof t == "object")
        for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (t[r] = df(t[r], e));
    return t
}
const WT = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var Ce;
(function(t) {
    t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK"
})(Ce || (Ce = {}));
class qT {
    constructor(e) {
        this.replacer = e
    }
    encode(e) {
        return (e.type === Ce.EVENT || e.type === Ce.ACK) && Nl(e) ? this.encodeAsBinary({
            type: e.type === Ce.EVENT ? Ce.BINARY_EVENT : Ce.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)]
    }
    encodeAsString(e) {
        let r = "" + e.type;
        return (e.type === Ce.BINARY_EVENT || e.type === Ce.BINARY_ACK) && (r += e.attachments + "-"), e.nsp && e.nsp !== "/" && (r += e.nsp + ","), e.id != null && (r += e.id), e.data != null && (r += JSON.stringify(e.data, this.replacer)), r
    }
    encodeAsBinary(e) {
        const r = UT(e),
            i = this.encodeAsString(r.packet),
            a = r.buffers;
        return a.unshift(i), a
    }
}
class Jf extends tt {
    constructor(e) {
        super(), this.reviver = e
    }
    add(e) {
        let r;
        if (typeof e == "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(e);
            const i = r.type === Ce.BINARY_EVENT;
            i || r.type === Ce.BINARY_ACK ? (r.type = i ? Ce.EVENT : Ce.ACK, this.reconstructor = new HT(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r)
        } else if (Xf(e) || e.base64)
            if (this.reconstructor) r = this.reconstructor.takeBinaryData(e), r && (this.reconstructor = null, super.emitReserved("decoded", r));
            else throw new Error("got binary data when not reconstructing a packet");
        else throw new Error("Unknown type: " + e)
    }
    decodeString(e) {
        let r = 0;
        const i = {
            type: Number(e.charAt(0))
        };
        if (Ce[i.type] === void 0) throw new Error("unknown packet type " + i.type);
        if (i.type === Ce.BINARY_EVENT || i.type === Ce.BINARY_ACK) {
            const l = r + 1;
            for (; e.charAt(++r) !== "-" && r != e.length;);
            const u = e.substring(l, r);
            if (u != Number(u) || e.charAt(r) !== "-") throw new Error("Illegal attachments");
            i.attachments = Number(u)
        }
        if (e.charAt(r + 1) === "/") {
            const l = r + 1;
            for (; ++r && !(e.charAt(r) === "," || r === e.length););
            i.nsp = e.substring(l, r)
        } else i.nsp = "/";
        const a = e.charAt(r + 1);
        if (a !== "" && Number(a) == a) {
            const l = r + 1;
            for (; ++r;) {
                const u = e.charAt(r);
                if (u == null || Number(u) != u) {
                    --r;
                    break
                }
                if (r === e.length) break
            }
            i.id = Number(e.substring(l, r + 1))
        }
        if (e.charAt(++r)) {
            const l = this.tryParse(e.substr(r));
            if (Jf.isPayloadValid(i.type, l)) i.data = l;
            else throw new Error("invalid payload")
        }
        return i
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(e, r) {
        switch (e) {
            case Ce.CONNECT:
                return Ny(r);
            case Ce.DISCONNECT:
                return r === void 0;
            case Ce.CONNECT_ERROR:
                return typeof r == "string" || Ny(r);
            case Ce.EVENT:
            case Ce.BINARY_EVENT:
                return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && WT.indexOf(r[0]) === -1);
            case Ce.ACK:
            case Ce.BINARY_ACK:
                return Array.isArray(r)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
    }
}
class HT {
    constructor(e) {
        this.packet = e, this.buffers = [], this.reconPack = e
    }
    takeBinaryData(e) {
        if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
            const r = $T(this.reconPack, this.buffers);
            return this.finishedReconstruction(), r
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null, this.buffers = []
    }
}

function Ny(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
const KT = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: Jf,
    Encoder: qT,
    get PacketType() {
        return Ce
    }
}, Symbol.toStringTag, {
    value: "Module"
}));

function vn(t, e, r) {
    return t.on(e, r),
        function() {
            t.off(e, r)
        }
}
const QT = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class Qw extends tt {
    constructor(e, r, i) {
        super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = r, i && i.auth && (this.auth = i.auth), this._opts = Object.assign({}, i), this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs) return;
        const e = this.io;
        this.subs = [vn(e, "open", this.onopen.bind(this)), vn(e, "packet", this.onpacket.bind(this)), vn(e, "error", this.onerror.bind(this)), vn(e, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this)
    }
    open() {
        return this.connect()
    }
    send(...e) {
        return e.unshift("message"), this.emit.apply(this, e), this
    }
    emit(e, ...r) {
        var i, a, l;
        if (QT.hasOwnProperty(e)) throw new Error('"' + e.toString() + '" is a reserved event name');
        if (r.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(r), this;
        const u = {
            type: Ce.EVENT,
            data: r
        };
        if (u.options = {}, u.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
            const g = this.ids++,
                y = r.pop();
            this._registerAckCallback(g, y), u.id = g
        }
        const d = (a = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || a === void 0 ? void 0 : a.writable,
            h = this.connected && !(!((l = this.io.engine) === null || l === void 0) && l._hasPingExpired());
        return this.flags.volatile && !d || (h ? (this.notifyOutgoingListeners(u), this.packet(u)) : this.sendBuffer.push(u)), this.flags = {}, this
    }
    _registerAckCallback(e, r) {
        var i;
        const a = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (a === void 0) {
            this.acks[e] = r;
            return
        }
        const l = this.io.setTimeoutFn(() => {
                delete this.acks[e];
                for (let d = 0; d < this.sendBuffer.length; d++) this.sendBuffer[d].id === e && this.sendBuffer.splice(d, 1);
                r.call(this, new Error("operation has timed out"))
            }, a),
            u = (...d) => {
                this.io.clearTimeoutFn(l), r.apply(this, d)
            };
        u.withError = !0, this.acks[e] = u
    }
    emitWithAck(e, ...r) {
        return new Promise((i, a) => {
            const l = (u, d) => u ? a(u) : i(d);
            l.withError = !0, r.push(l), this.emit(e, ...r)
        })
    }
    _addToQueue(e) {
        let r;
        typeof e[e.length - 1] == "function" && (r = e.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push((a, ...l) => (this._queue[0], a !== null ? i.tryCount > this._opts.retries && (this._queue.shift(), r && r(a)) : (this._queue.shift(), r && r(null, ...l)), i.pending = !1, this._drainQueue())), this._queue.push(i), this._drainQueue()
    }
    _drainQueue(e = !1) {
        if (!this.connected || this._queue.length === 0) return;
        const r = this._queue[0];
        r.pending && !e || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args))
    }
    packet(e) {
        e.nsp = this.nsp, this.io._packet(e)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(e => {
            this._sendConnectPacket(e)
        }) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(e) {
        this.packet({
            type: Ce.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        })
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e)
    }
    onclose(e, r) {
        this.connected = !1, delete this.id, this.emitReserved("disconnect", e, r), this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(e => {
            if (!this.sendBuffer.some(i => String(i.id) === e)) {
                const i = this.acks[e];
                delete this.acks[e], i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        })
    }
    onpacket(e) {
        if (e.nsp === this.nsp) switch (e.type) {
            case Ce.CONNECT:
                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case Ce.EVENT:
            case Ce.BINARY_EVENT:
                this.onevent(e);
                break;
            case Ce.ACK:
            case Ce.BINARY_ACK:
                this.onack(e);
                break;
            case Ce.DISCONNECT:
                this.ondisconnect();
                break;
            case Ce.CONNECT_ERROR:
                this.destroy();
                const i = new Error(e.data.message);
                i.data = e.data.data, this.emitReserved("connect_error", i);
                break
        }
    }
    onevent(e) {
        const r = e.data || [];
        e.id != null && r.push(this.ack(e.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r))
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const r = this._anyListeners.slice();
            for (const i of r) i.apply(this, e)
        }
        super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
    }
    ack(e) {
        const r = this;
        let i = !1;
        return function(...a) {
            i || (i = !0, r.packet({
                type: Ce.ACK,
                id: e,
                data: a
            }))
        }
    }
    onack(e) {
        const r = this.acks[e.id];
        typeof r == "function" && (delete this.acks[e.id], r.withError && e.data.unshift(null), r.apply(this, e.data))
    }
    onconnect(e, r) {
        this.id = e, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this._drainQueue(!0), this.emitReserved("connect")
    }
    emitBuffered() {
        this.receiveBuffer.forEach(e => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach(e => {
            this.notifyOutgoingListeners(e), this.packet(e)
        }), this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(e => e()), this.subs = void 0), this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: Ce.DISCONNECT
        }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }
    close() {
        return this.disconnect()
    }
    compress(e) {
        return this.flags.compress = e, this
    }
    get volatile() {
        return this.flags.volatile = !0, this
    }
    timeout(e) {
        return this.flags.timeout = e, this
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this
    }
    offAny(e) {
        if (!this._anyListeners) return this;
        if (e) {
            const r = this._anyListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i]) return r.splice(i, 1), this
        } else this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners) return this;
        if (e) {
            const r = this._anyOutgoingListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i]) return r.splice(i, 1), this
        } else this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const r = this._anyOutgoingListeners.slice();
            for (const i of r) i.apply(this, e.data)
        }
    }
}

function _i(t) {
    t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
}
_i.prototype.duration = function() {
    var t = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random(),
            r = Math.floor(e * this.jitter * t);
        t = (Math.floor(e * 10) & 1) == 0 ? t - r : t + r
    }
    return Math.min(t, this.max) | 0
};
_i.prototype.reset = function() {
    this.attempts = 0
};
_i.prototype.setMin = function(t) {
    this.ms = t
};
_i.prototype.setMax = function(t) {
    this.max = t
};
_i.prototype.setJitter = function(t) {
    this.jitter = t
};
class ff extends tt {
    constructor(e, r) {
        var i;
        super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (r = e, e = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, ou(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((i = r.randomizationFactor) !== null && i !== void 0 ? i : .5), this.backoff = new _i({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = e;
        const a = r.parser || KT;
        this.encoder = new a.Encoder, this.decoder = new a.Decoder, this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open()
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
    }
    reconnectionDelay(e) {
        var r;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (r = this.backoff) === null || r === void 0 || r.setMin(e), this)
    }
    randomizationFactor(e) {
        var r;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (r = this.backoff) === null || r === void 0 || r.setJitter(e), this)
    }
    reconnectionDelayMax(e) {
        var r;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (r = this.backoff) === null || r === void 0 || r.setMax(e), this)
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e, this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(e) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new LT(this.uri, this.opts);
        const r = this.engine,
            i = this;
        this._readyState = "opening", this.skipReconnect = !1;
        const a = vn(r, "open", function() {
                i.onopen(), e && e()
            }),
            l = d => {
                this.cleanup(), this._readyState = "closed", this.emitReserved("error", d), e ? e(d) : this.maybeReconnectOnOpen()
            },
            u = vn(r, "error", l);
        if (this._timeout !== !1) {
            const d = this._timeout,
                h = this.setTimeoutFn(() => {
                    a(), l(new Error("timeout")), r.close()
                }, d);
            this.opts.autoUnref && h.unref(), this.subs.push(() => {
                this.clearTimeoutFn(h)
            })
        }
        return this.subs.push(a), this.subs.push(u), this
    }
    connect(e) {
        return this.open(e)
    }
    onopen() {
        this.cleanup(), this._readyState = "open", this.emitReserved("open");
        const e = this.engine;
        this.subs.push(vn(e, "ping", this.onping.bind(this)), vn(e, "data", this.ondata.bind(this)), vn(e, "error", this.onerror.bind(this)), vn(e, "close", this.onclose.bind(this)), vn(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(e) {
        try {
            this.decoder.add(e)
        } catch (r) {
            this.onclose("parse error", r)
        }
    }
    ondecoded(e) {
        iu(() => {
            this.emitReserved("packet", e)
        }, this.setTimeoutFn)
    }
    onerror(e) {
        this.emitReserved("error", e)
    }
    socket(e, r) {
        let i = this.nsps[e];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new Qw(this, e, r), this.nsps[e] = i), i
    }
    _destroy(e) {
        const r = Object.keys(this.nsps);
        for (const i of r)
            if (this.nsps[i].active) return;
        this._close()
    }
    _packet(e) {
        const r = this.encoder.encode(e);
        for (let i = 0; i < r.length; i++) this.engine.write(r[i], e.options)
    }
    cleanup() {
        this.subs.forEach(e => e()), this.subs.length = 0, this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(e, r) {
        var i;
        this.cleanup(), (i = this.engine) === null || i === void 0 || i.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, r), this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
        else {
            const r = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn(() => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open(a => {
                    a ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", a)) : e.onreconnect()
                }))
            }, r);
            this.opts.autoUnref && i.unref(), this.subs.push(() => {
                this.clearTimeoutFn(i)
            })
        }
    }
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e)
    }
}
const xo = {};

function Ll(t, e) {
    typeof t == "object" && (e = t, t = void 0), e = e || {};
    const r = DT(t, e.path || "/socket.io"),
        i = r.source,
        a = r.id,
        l = r.path,
        u = xo[a] && l in xo[a].nsps,
        d = e.forceNew || e["force new connection"] || e.multiplex === !1 || u;
    let h;
    return d ? h = new ff(i, e) : (xo[a] || (xo[a] = new ff(i, e)), h = xo[a]), r.query && !e.query && (e.query = r.queryKey), h.socket(r.path, e)
}
Object.assign(Ll, {
    Manager: ff,
    Socket: Qw,
    io: Ll,
    connect: Ll
});
const GT = 250;

function Ly(t, e) {
    var r;
    const i = Ll(t.serverUrl, {
        path: t.mountPath,
        transports: t.transports,
        query: {
            app_id: t.appId,
            token: (r = t.token) !== null && r !== void 0 ? r : Io()
        }
    });
    return i.on("connect", async () => {
        var a;
        return console.log("connect", i.id), (a = e.connect) === null || a === void 0 ? void 0 : a.call(e)
    }), i.on("update_model", async a => {
        var l;
        return (l = e.update_model) === null || l === void 0 ? void 0 : l.call(e, a)
    }), i.on("error", async a => {
        var l;
        return (l = e.error) === null || l === void 0 ? void 0 : l.call(e, a)
    }), i.on("connect_error", async a => {
        var l;
        return console.error("connect_error", a), (l = e.error) === null || l === void 0 ? void 0 : l.call(e, a)
    }), i
}

function YT({
    config: t
}) {
    let e = { ...t
    };
    const r = {},
        i = {},
        a = {
            connect: async () => {
                const k = [];
                Object.keys(r).forEach(j => {
                    const R = x(j);
                    R.length !== 0 && (p(j), R.forEach(({
                        connect: M
                    }) => {
                        const B = async () => M == null ? void 0 : M();
                        k.push(B())
                    }))
                }), await Promise.all(k)
            },
            update_model: async k => {
                const R = x(k.room).map(M => {
                    var B;
                    return (B = M.update_model) === null || B === void 0 ? void 0 : B.call(M, k)
                });
                await Promise.all(R)
            },
            error: async k => {
                console.error("error", k);
                const j = Object.values(r).flat().map(R => {
                    var M;
                    return (M = R.error) === null || M === void 0 ? void 0 : M.call(R, k)
                });
                await Promise.all(j)
            }
        };
    let l = Ly(t, a);

    function u() {
        d()
    }

    function d() {
        T(), l && l.disconnect()
    }

    function h(k) {
        u(), e = { ...e,
            ...k
        }, l = Ly(e, a)
    }

    function p(k) {
        l.emit("join", k)
    }

    function g(k) {
        l.emit("leave", k)
    }
    async function y(k, j) {
        var R;
        const M = JSON.stringify(j);
        return (R = a.update_model) === null || R === void 0 ? void 0 : R.call(a, {
            room: k,
            data: M
        })
    }

    function x(k) {
        var j;
        return (j = r[k]) !== null && j !== void 0 ? j : []
    }

    function E(k) {
        const j = i[k];
        j && (clearTimeout(j), delete i[k])
    }

    function T() {
        Object.keys(i).forEach(k => {
            var j, R;
            clearTimeout(i[k]), delete i[k], ((R = (j = r[k]) === null || j === void 0 ? void 0 : j.length) !== null && R !== void 0 ? R : 0) === 0 && delete r[k]
        })
    }

    function b(k) {
        E(k), i[k] = setTimeout(() => {
            var j, R;
            delete i[k], !(((R = (j = r[k]) === null || j === void 0 ? void 0 : j.length) !== null && R !== void 0 ? R : 0) > 0) && (g(k), delete r[k])
        }, GT)
    }
    return {
        socket: l,
        subscribeToRoom: (k, j) => {
            r[k] ? E(k) : (p(k), r[k] = []), r[k].push(j);
            let R = !1;
            return () => {
                var M, B;
                R || (R = !0, r[k] = (B = (M = r[k]) === null || M === void 0 ? void 0 : M.filter(W => W !== j)) !== null && B !== void 0 ? B : [], r[k].length === 0 && b(k))
            }
        },
        updateConfig: h,
        updateModel: y,
        disconnect: d
    }
}
const So = typeof window < "u" ? window : {
    base44SharedInstances: {}
};

function XT(t, e) {
    return So.base44SharedInstances || (So.base44SharedInstances = {}), So.base44SharedInstances[t] || (So.base44SharedInstances[t] = {
        instance: e()
    }), So.base44SharedInstances[t].instance
}
const JT = "__user_heartbeat_event__",
    ZT = "__initialization_event__",
    eP = "__session_duration_event__",
    Dy = "analytics-enable",
    By = "base44_analytics_session_id",
    tP = {
        enabled: !0,
        maxQueueSize: 1e3,
        throttleTime: 1e3,
        batchSize: 30,
        heartBeatInterval: 60 * 1e3
    },
    nP = "analytics",
    Le = XT(nP, () => ({
        requestsQueue: [],
        isProcessing: !1,
        isHeartBeatProcessing: !1,
        wasInitializationTracked: !1,
        sessionContext: null,
        sessionStartTime: null,
        config: { ...tP,
            ...cP()
        }
    })),
    rP = ({
        axiosClient: t,
        serverUrl: e,
        appId: r,
        userAuthModule: i
    }) => {
        var a;
        const {
            maxQueueSize: l,
            throttleTime: u,
            batchSize: d
        } = Le.config;
        if (!(!((a = Le.config) === null || a === void 0) && a.enabled)) return {
            track: () => {},
            cleanup: () => {}
        };
        let h;
        const p = `${e}/api/apps/${r}/analytics/track/batch`,
            g = async R => {
                await t.request({
                    method: "POST",
                    url: `/apps/${r}/analytics/track/batch`,
                    data: {
                        events: R
                    }
                })
            },
            y = R => {
                try {
                    const M = JSON.stringify({
                            events: R
                        }),
                        B = new Blob([M], {
                            type: "application/json"
                        });
                    return typeof navigator > "u" || M.length > 6e4 || !navigator.sendBeacon(p, B)
                } catch {
                    return !1
                }
            },
            x = async (R, M = {}) => {
                if (R.length === 0) return;
                const B = await uP(i),
                    W = R.map(lP(B));
                try {
                    (!M.isBeacon || !y(W)) && await g(W)
                } catch {}
            },
            E = () => {
                zy(x, {
                    throttleTime: u,
                    batchSize: d
                })
            },
            T = R => {
                if (Le.requestsQueue.length >= l) return;
                const M = aP();
                Le.requestsQueue.push({ ...R,
                    ...M
                }), E()
            },
            b = () => {
                zy(x, {
                    throttleTime: u,
                    batchSize: d
                }), h = Vy(T), iP()
            },
            S = () => {
                Iy(), h == null || h(), oP(T);
                const R = Le.requestsQueue.splice(0);
                x(R, {
                    isBeacon: !0
                })
            },
            k = () => {
                typeof window > "u" || (document.visibilityState === "hidden" ? S() : document.visibilityState === "visible" && b())
            },
            j = () => {
                Iy(), h == null || h(), typeof window < "u" && window.removeEventListener("visibilitychange", k)
            };
        return E(), h = Vy(T), sP(T), typeof window < "u" && window.addEventListener("visibilitychange", k), {
            track: T,
            cleanup: j
        }
    };

function Iy() {
    Le.isProcessing = !1
}
async function zy(t, e) {
    if (Le.isProcessing) return;
    Le.isProcessing = !0;
    const {
        throttleTime: r = 1e3,
        batchSize: i = 30
    } = e ? ? {};
    for (; Le.isProcessing && Le.requestsQueue.length > 0;) {
        const a = Le.requestsQueue.splice(0, i);
        a.length && await t(a), await new Promise(l => setTimeout(l, r))
    }
    Le.isProcessing = !1
}

function Vy(t) {
    var e;
    if (Le.isHeartBeatProcessing || ((e = Le.config.heartBeatInterval) !== null && e !== void 0 ? e : 0) < 10) return () => {};
    Le.isHeartBeatProcessing = !0;
    const r = setInterval(() => {
        t({
            eventName: JT
        })
    }, Le.config.heartBeatInterval);
    return () => {
        clearInterval(r), Le.isHeartBeatProcessing = !1
    }
}

function sP(t) {
    typeof window > "u" || Le.wasInitializationTracked || (Le.wasInitializationTracked = !0, t({
        eventName: ZT,
        properties: {
            referrer: document == null ? void 0 : document.referrer
        }
    }))
}

function iP() {
    typeof window > "u" || Le.sessionStartTime !== null || (Le.sessionStartTime = new Date().toISOString())
}

function oP(t) {
    if (typeof window > "u" || Le.sessionStartTime === null) return;
    const e = new Date().getTime() - new Date(Le.sessionStartTime).getTime();
    Le.sessionStartTime = null, t({
        eventName: eP,
        properties: {
            sessionDuration: e
        }
    })
}

function aP() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window < "u" ? window.location.pathname : null
    }
}

function lP(t) {
    return e => ({
        event_name: e.eventName,
        properties: e.properties,
        timestamp: e.timestamp,
        page_url: e.pageUrl,
        ...t
    })
}
let Ed = null;
async function uP(t) {
    if (!Le.sessionContext) {
        if (!Ed) {
            const e = dP();
            Ed = t.me().then(r => ({
                user_id: r.id,
                session_id: e
            })).catch(() => ({
                user_id: null,
                session_id: e
            }))
        }
        Le.sessionContext = await Ed
    }
    return Le.sessionContext
}

function cP() {
    if (typeof window > "u") return;
    const e = new URLSearchParams(window.location.search).get(Dy);
    if (e == null || !e.length) return;
    const r = new URLSearchParams(window.location.search);
    r.delete(Dy);
    const i = window.location.pathname + (r.toString() ? "?" + r.toString() : "");
    return window.history.replaceState({}, "", i), {
        enabled: e === "true"
    }
}

function dP() {
    if (typeof window > "u") return vd();
    try {
        const t = localStorage.getItem(By);
        if (!t) {
            const e = vd();
            return localStorage.setItem(By, e), e
        }
        return t
    } catch {
        return vd()
    }
}

function fP(t) {
    var e, r;
    const {
        serverUrl: i = "https://base44.app",
        appId: a,
        token: l,
        serviceToken: u,
        requiresAuth: d = !1,
        appBaseUrl: h,
        options: p,
        functionsVersion: g,
        headers: y
    } = t, x = typeof h == "string" ? h : "", E = {
        serverUrl: i,
        mountPath: "/ws-user-apps/socket.io/",
        transports: ["websocket"],
        appId: a,
        token: l
    };
    let T = null;
    const b = () => (T || (T = YT({
            config: E
        })), T),
        S = { ...y,
            "X-App-Id": String(a)
        },
        k = g ? { ...S,
            "Base44-Functions-Version": g
        } : S,
        j = ko({
            baseURL: `${i}/api`,
            headers: S,
            token: l,
            onError: p == null ? void 0 : p.onError
        }),
        R = ko({
            baseURL: `${i}/api`,
            headers: k,
            token: l,
            interceptResponses: !1,
            onError: p == null ? void 0 : p.onError
        }),
        M = { ...S,
            ...l ? {
                "on-behalf-of": `Bearer ${l}`
            } : {}
        },
        B = ko({
            baseURL: `${i}/api`,
            headers: M,
            token: u,
            onError: p == null ? void 0 : p.onError
        }),
        W = ko({
            baseURL: `${i}/api`,
            headers: k,
            token: u,
            interceptResponses: !1
        }),
        Y = XC(j, R, a, {
            appBaseUrl: x
        });
    if (typeof window < "u") {
        const ue = l || Io();
        ue && Y.setToken(ue)
    }
    const I = {
            entities: Cy({
                axios: j,
                appId: a,
                getSocket: b
            }),
            integrations: Ty(j, a),
            connectors: eT(j, a),
            auth: Y,
            functions: Py(R, a, {
                getAuthHeaders: () => {
                    const ue = {},
                        Re = l || Io();
                    return Re && (ue.Authorization = `Bearer ${Re}`), ue
                },
                baseURL: (e = R.defaults) === null || e === void 0 ? void 0 : e.baseURL
            }),
            agents: Ry({
                axios: j,
                getSocket: b,
                appId: a,
                serverUrl: i,
                token: l
            }),
            appLogs: Ay(j, a),
            users: nT(j, a),
            analytics: rP({
                axiosClient: j,
                serverUrl: i,
                appId: a,
                userAuthModule: Y
            }),
            cleanup: () => {
                I.analytics.cleanup(), T && T.disconnect()
            }
        },
        J = {
            entities: Cy({
                axios: B,
                appId: a,
                getSocket: b
            }),
            integrations: Ty(B, a),
            sso: JC(B, a),
            connectors: ZC(B, a),
            functions: Py(W, a, {
                getAuthHeaders: () => {
                    const ue = {};
                    return u && (ue.Authorization = `Bearer ${u}`), ue
                },
                baseURL: (r = W.defaults) === null || r === void 0 ? void 0 : r.baseURL
            }),
            agents: Ry({
                axios: B,
                getSocket: b,
                appId: a,
                serverUrl: i,
                token: l
            }),
            appLogs: Ay(B, a),
            cleanup: () => {
                T && T.disconnect()
            }
        };
    return d && typeof window < "u" && setTimeout(async () => {
        try {
            await I.auth.isAuthenticated() || I.auth.redirectToLogin(window.location.href)
        } catch (ue) {
            console.error("Authentication check failed:", ue), I.auth.redirectToLogin(window.location.href)
        }
    }, 0), { ...I,
        setToken(ue) {
            I.auth.setToken(ue), T && T.updateConfig({
                token: ue
            }), E.token = ue
        },
        getConfig() {
            return {
                serverUrl: i,
                appId: a,
                requiresAuth: d
            }
        },
        get asServiceRole() {
            if (!u) throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return J
        }
    }
}
const Gw = typeof window > "u",
    hP = Gw ? {
        localStorage: new Map
    } : window,
    Mo = hP.localStorage,
    pP = t => t.replace(/([A-Z])/g, "_$1").toLowerCase(),
    Js = (t, {
        defaultValue: e = void 0,
        removeFromUrl: r = !1
    } = {}) => {
        if (Gw) return e;
        const i = `base44_${pP(t)}`,
            a = new URLSearchParams(window.location.search),
            l = a.get(t);
        if (r) {
            a.delete(t);
            const d = `${window.location.pathname}${a.toString()?`?${a.toString()}`:""}${window.location.hash}`;
            window.history.replaceState({}, document.title, d)
        }
        if (l) return Mo.setItem(i, l), l;
        if (e) return Mo.setItem(i, e), e;
        const u = Mo.getItem(i);
        return u || null
    },
    mP = () => (Js("clear_access_token") === "true" && (Mo.removeItem("base44_access_token"), Mo.removeItem("token")), {
        appId: Js("app_id", {
            defaultValue: "6a04505df8f07c3e6a4918fe"
        }),
        token: Js("access_token", {
            removeFromUrl: !0
        }),
        fromUrl: Js("from_url", {
            defaultValue: window.location.href
        }),
        functionsVersion: Js("functions_version", {
            defaultValue: "prod"
        }),
        appBaseUrl: Js("app_base_url", {
            defaultValue: void 0
        })
    }),
    Co = { ...mP()
    },
    {
        appId: gP,
        token: yP,
        functionsVersion: vP,
        appBaseUrl: wP
    } = Co,
    Zs = fP({
        appId: gP,
        token: yP,
        functionsVersion: vP,
        serverUrl: "",
        requiresAuth: !1,
        appBaseUrl: wP
    });

function xP({}) {
    var a;
    const e = Ei().pathname.substring(1),
        {
            data: r,
            isFetched: i
        } = zk({
            queryKey: ["user"],
            queryFn: async () => {
                try {
                    return {
                        user: await Zs.auth.me(),
                        isAuthenticated: !0
                    }
                } catch {
                    return {
                        user: null,
                        isAuthenticated: !1
                    }
                }
            }
        });
    return v.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: v.jsx("div", {
            className: "max-w-md w-full",
            children: v.jsxs("div", {
                className: "text-center space-y-6",
                children: [v.jsxs("div", {
                    className: "space-y-2",
                    children: [v.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), v.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), v.jsxs("div", {
                    className: "space-y-3",
                    children: [v.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), v.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", v.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', e, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && r.isAuthenticated && ((a = r.user) == null ? void 0 : a.role) === "admin" && v.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: v.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [v.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: v.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), v.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [v.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), v.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), v.jsx("div", {
                    className: "pt-6",
                    children: v.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [v.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: v.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const Yw = F.createContext(),
    SP = ({
        children: t
    }) => {
        const [e, r] = F.useState(null), [i, a] = F.useState(!1), [l, u] = F.useState(!0), [d, h] = F.useState(!0), [p, g] = F.useState(null), [y, x] = F.useState(!1), [E, T] = F.useState(null);
        F.useEffect(() => {
            b()
        }, []);
        const b = async () => {
                var R, M;
                try {
                    h(!0), g(null);
                    const B = ko({
                        baseURL: "/api/apps/public",
                        headers: {
                            "X-App-Id": Co.appId
                        },
                        token: Co.token,
                        interceptResponses: !0
                    });
                    try {
                        const W = await B.get(`/prod/public-settings/by-id/${Co.appId}`);
                        T(W), Co.token ? await S() : (u(!1), a(!1), x(!0)), h(!1)
                    } catch (W) {
                        if (console.error("App state check failed:", W), W.status === 403 && ((M = (R = W.data) == null ? void 0 : R.extra_data) != null && M.reason)) {
                            const Y = W.data.extra_data.reason;
                            g(Y === "auth_required" ? {
                                type: "auth_required",
                                message: "Authentication required"
                            } : Y === "user_not_registered" ? {
                                type: "user_not_registered",
                                message: "User not registered for this app"
                            } : {
                                type: Y,
                                message: W.message
                            })
                        } else g({
                            type: "unknown",
                            message: W.message || "Failed to load app"
                        });
                        h(!1), u(!1)
                    }
                } catch (B) {
                    console.error("Unexpected error:", B), g({
                        type: "unknown",
                        message: B.message || "An unexpected error occurred"
                    }), h(!1), u(!1)
                }
            },
            S = async () => {
                try {
                    u(!0);
                    const R = await Zs.auth.me();
                    r(R), a(!0), u(!1), x(!0)
                } catch (R) {
                    console.error("User auth check failed:", R), u(!1), a(!1), x(!0), (R.status === 401 || R.status === 403) && g({
                        type: "auth_required",
                        message: "Authentication required"
                    })
                }
            },
            k = (R = !0) => {
                r(null), a(!1), R ? Zs.auth.logout(window.location.href) : Zs.auth.logout()
            },
            j = () => {
                Zs.auth.redirectToLogin(window.location.href)
            };
        return v.jsx(Yw.Provider, {
            value: {
                user: e,
                isAuthenticated: i,
                isLoadingAuth: l,
                isLoadingPublicSettings: d,
                authError: p,
                appPublicSettings: E,
                authChecked: y,
                logout: k,
                navigateToLogin: j,
                checkUserAuth: S,
                checkAppState: b
            },
            children: t
        })
    },
    bP = () => {
        const t = F.useContext(Yw);
        if (!t) throw new Error("useAuth must be used within an AuthProvider");
        return t
    },
    EP = () => v.jsx("div", {
        className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
        children: v.jsx("div", {
            className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
            children: v.jsxs("div", {
                className: "text-center",
                children: [v.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                    children: v.jsx("svg", {
                        className: "w-8 h-8 text-orange-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: v.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        })
                    })
                }), v.jsx("h1", {
                    className: "text-3xl font-bold text-slate-900 mb-4",
                    children: "Access Restricted"
                }), v.jsx("p", {
                    className: "text-slate-600 mb-8",
                    children: "You are not registered to use this application. Please contact the app administrator to request access."
                }), v.jsxs("div", {
                    className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                    children: [v.jsx("p", {
                        children: "If you believe this is an error, you can:"
                    }), v.jsxs("ul", {
                        className: "list-disc list-inside mt-2 space-y-1",
                        children: [v.jsx("li", {
                            children: "Verify you are logged in with the correct account"
                        }), v.jsx("li", {
                            children: "Contact the app administrator for access"
                        }), v.jsx("li", {
                            children: "Try logging out and back in again"
                        })]
                    })]
                })]
            })
        })
    }),
    Zf = F.createContext({});

function eh(t) {
    const e = F.useRef(null);
    return e.current === null && (e.current = t()), e.current
}
const au = F.createContext(null),
    th = F.createContext({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });
class kP extends F.Component {
    getSnapshotBeforeUpdate(e) {
        const r = this.props.childRef.current;
        if (r && e.isPresent && !this.props.isPresent) {
            const i = this.props.sizeRef.current;
            i.height = r.offsetHeight || 0, i.width = r.offsetWidth || 0, i.top = r.offsetTop, i.left = r.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function _P({
    children: t,
    isPresent: e
}) {
    const r = F.useId(),
        i = F.useRef(null),
        a = F.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: l
        } = F.useContext(th);
    return F.useInsertionEffect(() => {
        const {
            width: u,
            height: d,
            top: h,
            left: p
        } = a.current;
        if (e || !i.current || !u || !d) return;
        i.current.dataset.motionPopId = r;
        const g = document.createElement("style");
        return l && (g.nonce = l), document.head.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${d}px !important;
            top: ${h}px !important;
            left: ${p}px !important;
          }
        `), () => {
            document.head.removeChild(g)
        }
    }, [e]), v.jsx(kP, {
        isPresent: e,
        childRef: i,
        sizeRef: a,
        children: F.cloneElement(t, {
            ref: i
        })
    })
}
const CP = ({
    children: t,
    initial: e,
    isPresent: r,
    onExitComplete: i,
    custom: a,
    presenceAffectsLayout: l,
    mode: u
}) => {
    const d = eh(TP),
        h = F.useId(),
        p = F.useCallback(y => {
            d.set(y, !0);
            for (const x of d.values())
                if (!x) return;
            i && i()
        }, [d, i]),
        g = F.useMemo(() => ({
            id: h,
            initial: e,
            isPresent: r,
            custom: a,
            onExitComplete: p,
            register: y => (d.set(y, !1), () => d.delete(y))
        }), l ? [Math.random(), p] : [r, p]);
    return F.useMemo(() => {
        d.forEach((y, x) => d.set(x, !1))
    }, [r]), F.useEffect(() => {
        !r && !d.size && i && i()
    }, [r]), u === "popLayout" && (t = v.jsx(_P, {
        isPresent: r,
        children: t
    })), v.jsx(au.Provider, {
        value: g,
        children: t
    })
};

function TP() {
    return new Map
}

function Xw(t = !0) {
    const e = F.useContext(au);
    if (e === null) return [!0, null];
    const {
        isPresent: r,
        onExitComplete: i,
        register: a
    } = e, l = F.useId();
    F.useEffect(() => {
        t && a(l)
    }, [t]);
    const u = F.useCallback(() => t && i && i(l), [l, i, t]);
    return !r && i ? [!1, u] : [!0]
}
const El = t => t.key || "";

function Uy(t) {
    const e = [];
    return F.Children.forEach(t, r => {
        F.isValidElement(r) && e.push(r)
    }), e
}
const nh = typeof window < "u",
    Jw = nh ? F.useLayoutEffect : F.useEffect,
    hf = ({
        children: t,
        custom: e,
        initial: r = !0,
        onExitComplete: i,
        presenceAffectsLayout: a = !0,
        mode: l = "sync",
        propagate: u = !1
    }) => {
        const [d, h] = Xw(u), p = F.useMemo(() => Uy(t), [t]), g = u && !d ? [] : p.map(El), y = F.useRef(!0), x = F.useRef(p), E = eh(() => new Map), [T, b] = F.useState(p), [S, k] = F.useState(p);
        Jw(() => {
            y.current = !1, x.current = p;
            for (let M = 0; M < S.length; M++) {
                const B = El(S[M]);
                g.includes(B) ? E.delete(B) : E.get(B) !== !0 && E.set(B, !1)
            }
        }, [S, g.length, g.join("-")]);
        const j = [];
        if (p !== T) {
            let M = [...p];
            for (let B = 0; B < S.length; B++) {
                const W = S[B],
                    Y = El(W);
                g.includes(Y) || (M.splice(B, 0, W), j.push(W))
            }
            l === "wait" && j.length && (M = j), k(Uy(M)), b(p);
            return
        }
        const {
            forceRender: R
        } = F.useContext(Zf);
        return v.jsx(v.Fragment, {
            children: S.map(M => {
                const B = El(M),
                    W = u && !d ? !1 : p === S || g.includes(B),
                    Y = () => {
                        if (E.has(B)) E.set(B, !0);
                        else return;
                        let I = !0;
                        E.forEach(J => {
                            J || (I = !1)
                        }), I && (R == null || R(), k(x.current), u && (h == null || h()), i && i())
                    };
                return v.jsx(CP, {
                    isPresent: W,
                    initial: !y.current || r ? void 0 : !1,
                    custom: W ? void 0 : e,
                    presenceAffectsLayout: a,
                    mode: l,
                    onExitComplete: W ? void 0 : Y,
                    children: M
                }, B)
            })
        })
    },
    Kt = t => t;
let Zw = Kt;

function rh(t) {
    let e;
    return () => (e === void 0 && (e = t()), e)
}
const vi = (t, e, r) => {
        const i = e - t;
        return i === 0 ? 1 : (r - t) / i
    },
    Yn = t => t * 1e3,
    Xn = t => t / 1e3,
    PP = {
        useManualTiming: !1
    };

function RP(t) {
    let e = new Set,
        r = new Set,
        i = !1,
        a = !1;
    const l = new WeakSet;
    let u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function d(p) {
        l.has(p) && (h.schedule(p), t()), p(u)
    }
    const h = {
        schedule: (p, g = !1, y = !1) => {
            const E = y && i ? e : r;
            return g && l.add(p), E.has(p) || E.add(p), p
        },
        cancel: p => {
            r.delete(p), l.delete(p)
        },
        process: p => {
            if (u = p, i) {
                a = !0;
                return
            }
            i = !0, [e, r] = [r, e], e.forEach(d), e.clear(), i = !1, a && (a = !1, h.process(p))
        }
    };
    return h
}
const kl = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    AP = 40;

function ex(t, e) {
    let r = !1,
        i = !0;
    const a = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        l = () => r = !0,
        u = kl.reduce((k, j) => (k[j] = RP(l), k), {}),
        {
            read: d,
            resolveKeyframes: h,
            update: p,
            preRender: g,
            render: y,
            postRender: x
        } = u,
        E = () => {
            const k = performance.now();
            r = !1, a.delta = i ? 1e3 / 60 : Math.max(Math.min(k - a.timestamp, AP), 1), a.timestamp = k, a.isProcessing = !0, d.process(a), h.process(a), p.process(a), g.process(a), y.process(a), x.process(a), a.isProcessing = !1, r && e && (i = !1, t(E))
        },
        T = () => {
            r = !0, i = !0, a.isProcessing || t(E)
        };
    return {
        schedule: kl.reduce((k, j) => {
            const R = u[j];
            return k[j] = (M, B = !1, W = !1) => (r || T(), R.schedule(M, B, W)), k
        }, {}),
        cancel: k => {
            for (let j = 0; j < kl.length; j++) u[kl[j]].cancel(k)
        },
        state: a,
        steps: u
    }
}
const {
    schedule: Ve,
    cancel: Dr,
    state: mt,
    steps: kd
} = ex(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Kt, !0), tx = F.createContext({
    strict: !1
}), $y = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}, wi = {};
for (const t in $y) wi[t] = {
    isEnabled: e => $y[t].some(r => !!e[r])
};

function MP(t) {
    for (const e in t) wi[e] = { ...wi[e],
        ...t[e]
    }
}
const OP = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function ql(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || OP.has(t)
}
let nx = t => !ql(t);

function jP(t) {
    t && (nx = e => e.startsWith("on") ? !ql(e) : t(e))
}
try {
    jP(require("@emotion/is-prop-valid").default)
} catch {}

function FP(t, e, r) {
    const i = {};
    for (const a in t) a === "values" && typeof t.values == "object" || (nx(a) || r === !0 && ql(a) || !e && !ql(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i
}

function NP(t) {
    if (typeof Proxy > "u") return t;
    const e = new Map,
        r = (...i) => t(...i);
    return new Proxy(r, {
        get: (i, a) => a === "create" ? t : (e.has(a) || e.set(a, t(a)), e.get(a))
    })
}
const lu = F.createContext({});

function zo(t) {
    return typeof t == "string" || Array.isArray(t)
}

function uu(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const sh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    ih = ["initial", ...sh];

function cu(t) {
    return uu(t.animate) || ih.some(e => zo(t[e]))
}

function rx(t) {
    return !!(cu(t) || t.variants)
}

function LP(t, e) {
    if (cu(t)) {
        const {
            initial: r,
            animate: i
        } = t;
        return {
            initial: r === !1 || zo(r) ? r : void 0,
            animate: zo(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}

function DP(t) {
    const {
        initial: e,
        animate: r
    } = LP(t, F.useContext(lu));
    return F.useMemo(() => ({
        initial: e,
        animate: r
    }), [Wy(e), Wy(r)])
}

function Wy(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const BP = Symbol.for("motionComponentSymbol");

function ei(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}

function IP(t, e, r) {
    return F.useCallback(i => {
        i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), r && (typeof r == "function" ? r(i) : ei(r) && (r.current = i))
    }, [e])
}
const oh = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    zP = "framerAppearId",
    sx = "data-" + oh(zP),
    {
        schedule: ah
    } = ex(queueMicrotask, !1),
    ix = F.createContext({});

function VP(t, e, r, i, a) {
    var l, u;
    const {
        visualElement: d
    } = F.useContext(lu), h = F.useContext(tx), p = F.useContext(au), g = F.useContext(th).reducedMotion, y = F.useRef(null);
    i = i || h.renderer, !y.current && i && (y.current = i(t, {
        visualState: e,
        parent: d,
        props: r,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const x = y.current,
        E = F.useContext(ix);
    x && !x.projection && a && (x.type === "html" || x.type === "svg") && UP(y.current, r, a, E);
    const T = F.useRef(!1);
    F.useInsertionEffect(() => {
        x && T.current && x.update(r, p)
    });
    const b = r[sx],
        S = F.useRef(!!b && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, b)) && ((u = window.MotionHasOptimisedAnimation) === null || u === void 0 ? void 0 : u.call(window, b)));
    return Jw(() => {
        x && (T.current = !0, window.MotionIsMounted = !0, x.updateFeatures(), ah.render(x.render), S.current && x.animationState && x.animationState.animateChanges())
    }), F.useEffect(() => {
        x && (!S.current && x.animationState && x.animationState.animateChanges(), S.current && (queueMicrotask(() => {
            var k;
            (k = window.MotionHandoffMarkAsComplete) === null || k === void 0 || k.call(window, b)
        }), S.current = !1))
    }), x
}

function UP(t, e, r, i) {
    const {
        layoutId: a,
        layout: l,
        drag: u,
        dragConstraints: d,
        layoutScroll: h,
        layoutRoot: p
    } = e;
    t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : ox(t.parent)), t.projection.setOptions({
        layoutId: a,
        layout: l,
        alwaysMeasureLayout: !!u || d && ei(d),
        visualElement: t,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: p
    })
}

function ox(t) {
    if (t) return t.options.allowProjection !== !1 ? t.projection : ox(t.parent)
}

function $P({
    preloadedFeatures: t,
    createVisualElement: e,
    useRender: r,
    useVisualState: i,
    Component: a
}) {
    var l, u;
    t && MP(t);

    function d(p, g) {
        let y;
        const x = { ...F.useContext(th),
                ...p,
                layoutId: WP(p)
            },
            {
                isStatic: E
            } = x,
            T = DP(p),
            b = i(p, E);
        if (!E && nh) {
            qP();
            const S = HP(x);
            y = S.MeasureLayout, T.visualElement = VP(a, b, x, e, S.ProjectionNode)
        }
        return v.jsxs(lu.Provider, {
            value: T,
            children: [y && T.visualElement ? v.jsx(y, {
                visualElement: T.visualElement,
                ...x
            }) : null, r(a, p, IP(b, T.visualElement, g), b, E, T.visualElement)]
        })
    }
    d.displayName = `motion.${typeof a=="string"?a:`create(${(u=(l=a.displayName)!==null&&l!==void 0?l:a.name)!==null&&u!==void 0?u:""})`}`;
    const h = F.forwardRef(d);
    return h[BP] = a, h
}

function WP({
    layoutId: t
}) {
    const e = F.useContext(Zf).id;
    return e && t !== void 0 ? e + "-" + t : t
}

function qP(t, e) {
    F.useContext(tx).strict
}

function HP(t) {
    const {
        drag: e,
        layout: r
    } = wi;
    if (!e && !r) return {};
    const i = { ...e,
        ...r
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || r != null && r.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const KP = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function lh(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(KP.indexOf(t) > -1 || /[A-Z]/u.test(t))
}

function qy(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach((r, i) => {
        e[0][i] = r.get(), e[1][i] = r.getVelocity()
    }), e
}

function uh(t, e, r, i) {
    if (typeof e == "function") {
        const [a, l] = qy(i);
        e = e(r !== void 0 ? r : t.custom, a, l)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
        const [a, l] = qy(i);
        e = e(r !== void 0 ? r : t.custom, a, l)
    }
    return e
}
const pf = t => Array.isArray(t),
    QP = t => !!(t && typeof t == "object" && t.mix && t.toValue),
    GP = t => pf(t) ? t[t.length - 1] || 0 : t,
    Et = t => !!(t && t.getVelocity);

function Dl(t) {
    const e = Et(t) ? t.get() : t;
    return QP(e) ? e.toValue() : e
}

function YP({
    scrapeMotionValuesFromProps: t,
    createRenderState: e,
    onUpdate: r
}, i, a, l) {
    const u = {
        latestValues: XP(i, a, l, t),
        renderState: e()
    };
    return r && (u.onMount = d => r({
        props: i,
        current: d,
        ...u
    }), u.onUpdate = d => r(d)), u
}
const ax = t => (e, r) => {
    const i = F.useContext(lu),
        a = F.useContext(au),
        l = () => YP(t, e, i, a);
    return r ? l() : eh(l)
};

function XP(t, e, r, i) {
    const a = {},
        l = i(t, {});
    for (const x in l) a[x] = Dl(l[x]);
    let {
        initial: u,
        animate: d
    } = t;
    const h = cu(t),
        p = rx(t);
    e && p && !h && t.inherit !== !1 && (u === void 0 && (u = e.initial), d === void 0 && (d = e.animate));
    let g = r ? r.initial === !1 : !1;
    g = g || u === !1;
    const y = g ? d : u;
    if (y && typeof y != "boolean" && !uu(y)) {
        const x = Array.isArray(y) ? y : [y];
        for (let E = 0; E < x.length; E++) {
            const T = uh(t, x[E]);
            if (T) {
                const {
                    transitionEnd: b,
                    transition: S,
                    ...k
                } = T;
                for (const j in k) {
                    let R = k[j];
                    if (Array.isArray(R)) {
                        const M = g ? R.length - 1 : 0;
                        R = R[M]
                    }
                    R !== null && (a[j] = R)
                }
                for (const j in b) a[j] = b[j]
            }
        }
    }
    return a
}
const Ci = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    _s = new Set(Ci),
    lx = t => e => typeof e == "string" && e.startsWith(t),
    ux = lx("--"),
    JP = lx("var(--"),
    ch = t => JP(t) ? ZP.test(t.split("/*")[0].trim()) : !1,
    ZP = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    cx = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
    Zn = (t, e, r) => r > e ? e : r < t ? t : r,
    Ti = {
        test: t => typeof t == "number",
        parse: parseFloat,
        transform: t => t
    },
    Vo = { ...Ti,
        transform: t => Zn(0, 1, t)
    },
    _l = { ...Ti,
        default: 1
    },
    na = t => ({
        test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    Er = na("deg"),
    An = na("%"),
    me = na("px"),
    eR = na("vh"),
    tR = na("vw"),
    Hy = { ...An,
        parse: t => An.parse(t) / 100,
        transform: t => An.transform(t * 100)
    },
    nR = {
        borderWidth: me,
        borderTopWidth: me,
        borderRightWidth: me,
        borderBottomWidth: me,
        borderLeftWidth: me,
        borderRadius: me,
        radius: me,
        borderTopLeftRadius: me,
        borderTopRightRadius: me,
        borderBottomRightRadius: me,
        borderBottomLeftRadius: me,
        width: me,
        maxWidth: me,
        height: me,
        maxHeight: me,
        top: me,
        right: me,
        bottom: me,
        left: me,
        padding: me,
        paddingTop: me,
        paddingRight: me,
        paddingBottom: me,
        paddingLeft: me,
        margin: me,
        marginTop: me,
        marginRight: me,
        marginBottom: me,
        marginLeft: me,
        backgroundPositionX: me,
        backgroundPositionY: me
    },
    rR = {
        rotate: Er,
        rotateX: Er,
        rotateY: Er,
        rotateZ: Er,
        scale: _l,
        scaleX: _l,
        scaleY: _l,
        scaleZ: _l,
        skew: Er,
        skewX: Er,
        skewY: Er,
        distance: me,
        translateX: me,
        translateY: me,
        translateZ: me,
        x: me,
        y: me,
        z: me,
        perspective: me,
        transformPerspective: me,
        opacity: Vo,
        originX: Hy,
        originY: Hy,
        originZ: me
    },
    Ky = { ...Ti,
        transform: Math.round
    },
    dh = { ...nR,
        ...rR,
        zIndex: Ky,
        size: me,
        fillOpacity: Vo,
        strokeOpacity: Vo,
        numOctaves: Ky
    },
    sR = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    iR = Ci.length;

function oR(t, e, r) {
    let i = "",
        a = !0;
    for (let l = 0; l < iR; l++) {
        const u = Ci[l],
            d = t[u];
        if (d === void 0) continue;
        let h = !0;
        if (typeof d == "number" ? h = d === (u.startsWith("scale") ? 1 : 0) : h = parseFloat(d) === 0, !h || r) {
            const p = cx(d, dh[u]);
            if (!h) {
                a = !1;
                const g = sR[u] || u;
                i += `${g}(${p}) `
            }
            r && (e[u] = p)
        }
    }
    return i = i.trim(), r ? i = r(e, a ? "" : i) : a && (i = "none"), i
}

function fh(t, e, r) {
    const {
        style: i,
        vars: a,
        transformOrigin: l
    } = t;
    let u = !1,
        d = !1;
    for (const h in e) {
        const p = e[h];
        if (_s.has(h)) {
            u = !0;
            continue
        } else if (ux(h)) {
            a[h] = p;
            continue
        } else {
            const g = cx(p, dh[h]);
            h.startsWith("origin") ? (d = !0, l[h] = g) : i[h] = g
        }
    }
    if (e.transform || (u || r ? i.transform = oR(e, t.transform, r) : i.transform && (i.transform = "none")), d) {
        const {
            originX: h = "50%",
            originY: p = "50%",
            originZ: g = 0
        } = l;
        i.transformOrigin = `${h} ${p} ${g}`
    }
}
const aR = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    lR = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function uR(t, e, r = 1, i = 0, a = !0) {
    t.pathLength = 1;
    const l = a ? aR : lR;
    t[l.offset] = me.transform(-i);
    const u = me.transform(e),
        d = me.transform(r);
    t[l.array] = `${u} ${d}`
}

function Qy(t, e, r) {
    return typeof t == "string" ? t : me.transform(e + r * t)
}

function cR(t, e, r) {
    const i = Qy(e, t.x, t.width),
        a = Qy(r, t.y, t.height);
    return `${i} ${a}`
}

function hh(t, {
    attrX: e,
    attrY: r,
    attrScale: i,
    originX: a,
    originY: l,
    pathLength: u,
    pathSpacing: d = 1,
    pathOffset: h = 0,
    ...p
}, g, y) {
    if (fh(t, p, y), g) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style, t.style = {};
    const {
        attrs: x,
        style: E,
        dimensions: T
    } = t;
    x.transform && (T && (E.transform = x.transform), delete x.transform), T && (a !== void 0 || l !== void 0 || E.transform) && (E.transformOrigin = cR(T, a !== void 0 ? a : .5, l !== void 0 ? l : .5)), e !== void 0 && (x.x = e), r !== void 0 && (x.y = r), i !== void 0 && (x.scale = i), u !== void 0 && uR(x, u, d, h, !1)
}
const ph = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    dx = () => ({ ...ph(),
        attrs: {}
    }),
    mh = t => typeof t == "string" && t.toLowerCase() === "svg";

function fx(t, {
    style: e,
    vars: r
}, i, a) {
    Object.assign(t.style, e, a && a.getProjectionStyles(i));
    for (const l in r) t.style.setProperty(l, r[l])
}
const hx = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function px(t, e, r, i) {
    fx(t, e, void 0, i);
    for (const a in e.attrs) t.setAttribute(hx.has(a) ? a : oh(a), e.attrs[a])
}
const Hl = {};

function dR(t) {
    Object.assign(Hl, t)
}

function mx(t, {
    layout: e,
    layoutId: r
}) {
    return _s.has(t) || t.startsWith("origin") || (e || r !== void 0) && (!!Hl[t] || t === "opacity")
}

function gh(t, e, r) {
    var i;
    const {
        style: a
    } = t, l = {};
    for (const u in a)(Et(a[u]) || e.style && Et(e.style[u]) || mx(u, t) || ((i = r == null ? void 0 : r.getValue(u)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (l[u] = a[u]);
    return l
}

function gx(t, e, r) {
    const i = gh(t, e, r);
    for (const a in t)
        if (Et(t[a]) || Et(e[a])) {
            const l = Ci.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            i[l] = t[a]
        }
    return i
}

function fR(t, e) {
    try {
        e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
    } catch {
        e.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const Gy = ["x", "y", "width", "height", "cx", "cy", "r"],
    hR = {
        useVisualState: ax({
            scrapeMotionValuesFromProps: gx,
            createRenderState: dx,
            onUpdate: ({
                props: t,
                prevProps: e,
                current: r,
                renderState: i,
                latestValues: a
            }) => {
                if (!r) return;
                let l = !!t.drag;
                if (!l) {
                    for (const d in a)
                        if (_s.has(d)) {
                            l = !0;
                            break
                        }
                }
                if (!l) return;
                let u = !e;
                if (e)
                    for (let d = 0; d < Gy.length; d++) {
                        const h = Gy[d];
                        t[h] !== e[h] && (u = !0)
                    }
                u && Ve.read(() => {
                    fR(r, i), Ve.render(() => {
                        hh(i, a, mh(r.tagName), t.transformTemplate), px(r, i)
                    })
                })
            }
        })
    },
    pR = {
        useVisualState: ax({
            scrapeMotionValuesFromProps: gh,
            createRenderState: ph
        })
    };

function yx(t, e, r) {
    for (const i in e) !Et(e[i]) && !mx(i, r) && (t[i] = e[i])
}

function mR({
    transformTemplate: t
}, e) {
    return F.useMemo(() => {
        const r = ph();
        return fh(r, e, t), Object.assign({}, r.vars, r.style)
    }, [e])
}

function gR(t, e) {
    const r = t.style || {},
        i = {};
    return yx(i, r, t), Object.assign(i, mR(t, e)), i
}

function yR(t, e) {
    const r = {},
        i = gR(t, e);
    return t.drag && t.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = i, r
}

function vR(t, e, r, i) {
    const a = F.useMemo(() => {
        const l = dx();
        return hh(l, e, mh(i), t.transformTemplate), { ...l.attrs,
            style: { ...l.style
            }
        }
    }, [e]);
    if (t.style) {
        const l = {};
        yx(l, t.style, t), a.style = { ...l,
            ...a.style
        }
    }
    return a
}

function wR(t = !1) {
    return (r, i, a, {
        latestValues: l
    }, u) => {
        const h = (lh(r) ? vR : yR)(i, l, u, r),
            p = FP(i, typeof r == "string", t),
            g = r !== F.Fragment ? { ...p,
                ...h,
                ref: a
            } : {},
            {
                children: y
            } = i,
            x = F.useMemo(() => Et(y) ? y.get() : y, [y]);
        return F.createElement(r, { ...g,
            children: x
        })
    }
}

function xR(t, e) {
    return function(i, {
        forwardMotionProps: a
    } = {
        forwardMotionProps: !1
    }) {
        const u = { ...lh(i) ? hR : pR,
            preloadedFeatures: t,
            useRender: wR(a),
            createVisualElement: e,
            Component: i
        };
        return $P(u)
    }
}

function vx(t, e) {
    if (!Array.isArray(e)) return !1;
    const r = e.length;
    if (r !== t.length) return !1;
    for (let i = 0; i < r; i++)
        if (e[i] !== t[i]) return !1;
    return !0
}

function du(t, e, r) {
    const i = t.getProps();
    return uh(i, e, r !== void 0 ? r : i.custom, t)
}
const SR = rh(() => window.ScrollTimeline !== void 0);
class bR {
    constructor(e) {
        this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(e => "finished" in e ? e.finished : e))
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, r) {
        for (let i = 0; i < this.animations.length; i++) this.animations[i][e] = r
    }
    attachTimeline(e, r) {
        const i = this.animations.map(a => {
            if (SR() && a.attachTimeline) return a.attachTimeline(e);
            if (typeof r == "function") return r(a)
        });
        return () => {
            i.forEach((a, l) => {
                a && a(), this.animations[l].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let r = 0; r < this.animations.length; r++) e = Math.max(e, this.animations[r].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(r => r[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class ER extends bR {
    then(e, r) {
        return Promise.all(this.animations).then(e).catch(r)
    }
}

function yh(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const mf = 2e4;

function wx(t) {
    let e = 0;
    const r = 50;
    let i = t.next(e);
    for (; !i.done && e < mf;) e += r, i = t.next(e);
    return e >= mf ? 1 / 0 : e
}

function vh(t) {
    return typeof t == "function"
}

function Yy(t, e) {
    t.timeline = e, t.onfinish = null
}
const wh = t => Array.isArray(t) && typeof t[0] == "number",
    kR = {
        linearEasing: void 0
    };

function _R(t, e) {
    const r = rh(t);
    return () => {
        var i;
        return (i = kR[e]) !== null && i !== void 0 ? i : r()
    }
}
const Kl = _R(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    xx = (t, e, r = 10) => {
        let i = "";
        const a = Math.max(Math.round(e / r), 2);
        for (let l = 0; l < a; l++) i += t(vi(0, a - 1, l)) + ", ";
        return `linear(${i.substring(0,i.length-2)})`
    };

function Sx(t) {
    return !!(typeof t == "function" && Kl() || !t || typeof t == "string" && (t in gf || Kl()) || wh(t) || Array.isArray(t) && t.every(Sx))
}
const To = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
    gf = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: To([0, .65, .55, 1]),
        circOut: To([.55, 0, 1, .45]),
        backIn: To([.31, .01, .66, -.59]),
        backOut: To([.33, 1.53, .69, .99])
    };

function bx(t, e) {
    if (t) return typeof t == "function" && Kl() ? xx(t, e) : wh(t) ? To(t) : Array.isArray(t) ? t.map(r => bx(r, e) || gf.easeOut) : gf[t]
}
const mn = {
    x: !1,
    y: !1
};

function Ex() {
    return mn.x || mn.y
}

function CR(t, e, r) {
    var i;
    if (t instanceof Element) return [t];
    if (typeof t == "string") {
        let a = document;
        const l = (i = void 0) !== null && i !== void 0 ? i : a.querySelectorAll(t);
        return l ? Array.from(l) : []
    }
    return Array.from(t)
}

function kx(t, e) {
    const r = CR(t),
        i = new AbortController,
        a = {
            passive: !0,
            ...e,
            signal: i.signal
        };
    return [r, a, () => i.abort()]
}

function Xy(t) {
    return e => {
        e.pointerType === "touch" || Ex() || t(e)
    }
}

function TR(t, e, r = {}) {
    const [i, a, l] = kx(t, r), u = Xy(d => {
        const {
            target: h
        } = d, p = e(d);
        if (typeof p != "function" || !h) return;
        const g = Xy(y => {
            p(y), h.removeEventListener("pointerleave", g)
        });
        h.addEventListener("pointerleave", g, a)
    });
    return i.forEach(d => {
        d.addEventListener("pointerenter", u, a)
    }), l
}
const _x = (t, e) => e ? t === e ? !0 : _x(t, e.parentElement) : !1,
    xh = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1,
    PR = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function RR(t) {
    return PR.has(t.tagName) || t.tabIndex !== -1
}
const Po = new WeakSet;

function Jy(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}

function _d(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const AR = (t, e) => {
    const r = t.currentTarget;
    if (!r) return;
    const i = Jy(() => {
        if (Po.has(r)) return;
        _d(r, "down");
        const a = Jy(() => {
                _d(r, "up")
            }),
            l = () => _d(r, "cancel");
        r.addEventListener("keyup", a, e), r.addEventListener("blur", l, e)
    });
    r.addEventListener("keydown", i, e), r.addEventListener("blur", () => r.removeEventListener("keydown", i), e)
};

function Zy(t) {
    return xh(t) && !Ex()
}

function MR(t, e, r = {}) {
    const [i, a, l] = kx(t, r), u = d => {
        const h = d.currentTarget;
        if (!Zy(d) || Po.has(h)) return;
        Po.add(h);
        const p = e(d),
            g = (E, T) => {
                window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", x), !(!Zy(E) || !Po.has(h)) && (Po.delete(h), typeof p == "function" && p(E, {
                    success: T
                }))
            },
            y = E => {
                g(E, r.useGlobalTarget || _x(h, E.target))
            },
            x = E => {
                g(E, !1)
            };
        window.addEventListener("pointerup", y, a), window.addEventListener("pointercancel", x, a)
    };
    return i.forEach(d => {
        !RR(d) && d.getAttribute("tabindex") === null && (d.tabIndex = 0), (r.useGlobalTarget ? window : d).addEventListener("pointerdown", u, a), d.addEventListener("focus", p => AR(p, a), a)
    }), l
}

function OR(t) {
    return t === "x" || t === "y" ? mn[t] ? null : (mn[t] = !0, () => {
        mn[t] = !1
    }) : mn.x || mn.y ? null : (mn.x = mn.y = !0, () => {
        mn.x = mn.y = !1
    })
}
const Cx = new Set(["width", "height", "top", "left", "right", "bottom", ...Ci]);
let Bl;

function jR() {
    Bl = void 0
}
const Mn = {
    now: () => (Bl === void 0 && Mn.set(mt.isProcessing || PP.useManualTiming ? mt.timestamp : performance.now()), Bl),
    set: t => {
        Bl = t, queueMicrotask(jR)
    }
};

function Sh(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function bh(t, e) {
    const r = t.indexOf(e);
    r > -1 && t.splice(r, 1)
}
class Eh {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return Sh(this.subscriptions, e), () => bh(this.subscriptions, e)
    }
    notify(e, r, i) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1) this.subscriptions[0](e, r, i);
            else
                for (let l = 0; l < a; l++) {
                    const u = this.subscriptions[l];
                    u && u(e, r, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}

function Tx(t, e) {
    return e ? t * (1e3 / e) : 0
}
const e0 = 30,
    FR = t => !isNaN(parseFloat(t));
class NR {
    constructor(e, r = {}) {
        this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, a = !0) => {
            const l = Mn.now();
            this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(e), this.owner = r.owner
    }
    setCurrent(e) {
        this.current = e, this.updatedAt = Mn.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = FR(this.current))
    }
    setPrevFrameValue(e = this.current) {
        this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, r) {
        this.events[e] || (this.events[e] = new Eh);
        const i = this.events[e].add(r);
        return e === "change" ? () => {
            i(), Ve.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : i
    }
    clearListeners() {
        for (const e in this.events) this.events[e].clear()
    }
    attach(e, r) {
        this.passiveEffect = e, this.stopPassiveEffect = r
    }
    set(e, r = !0) {
        !r || !this.passiveEffect ? this.updateAndNotify(e, r) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, r, i) {
        this.set(r), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, r = !0) {
        this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = Mn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > e0) return 0;
        const r = Math.min(this.updatedAt - this.prevUpdatedAt, e0);
        return Tx(parseFloat(this.current) - parseFloat(this.prevFrameValue), r)
    }
    start(e) {
        return this.stop(), new Promise(r => {
            this.hasAnimated = !0, this.animation = e(r), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Uo(t, e) {
    return new NR(t, e)
}

function LR(t, e, r) {
    t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, Uo(r))
}

function DR(t, e) {
    const r = du(t, e);
    let {
        transitionEnd: i = {},
        transition: a = {},
        ...l
    } = r || {};
    l = { ...l,
        ...i
    };
    for (const u in l) {
        const d = GP(l[u]);
        LR(t, u, d)
    }
}

function BR(t) {
    return !!(Et(t) && t.add)
}

function yf(t, e) {
    const r = t.getValue("willChange");
    if (BR(r)) return r.add(e)
}

function Px(t) {
    return t.props[sx]
}
const Rx = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t,
    IR = 1e-7,
    zR = 12;

function VR(t, e, r, i, a) {
    let l, u, d = 0;
    do u = e + (r - e) / 2, l = Rx(u, i, a) - t, l > 0 ? r = u : e = u; while (Math.abs(l) > IR && ++d < zR);
    return u
}

function ra(t, e, r, i) {
    if (t === e && r === i) return Kt;
    const a = l => VR(l, 0, 1, t, r);
    return l => l === 0 || l === 1 ? l : Rx(a(l), e, i)
}
const Ax = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    Mx = t => e => 1 - t(1 - e),
    Ox = ra(.33, 1.53, .69, .99),
    kh = Mx(Ox),
    jx = Ax(kh),
    Fx = t => (t *= 2) < 1 ? .5 * kh(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    _h = t => 1 - Math.sin(Math.acos(t)),
    Nx = Mx(_h),
    Lx = Ax(_h),
    Dx = t => /^0[^.\s]+$/u.test(t);

function UR(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Dx(t) : !0
}
const Oo = t => Math.round(t * 1e5) / 1e5,
    Ch = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function $R(t) {
    return t == null
}
const WR = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Th = (t, e) => r => !!(typeof r == "string" && WR.test(r) && r.startsWith(t) || e && !$R(r) && Object.prototype.hasOwnProperty.call(r, e)),
    Bx = (t, e, r) => i => {
        if (typeof i != "string") return i;
        const [a, l, u, d] = i.match(Ch);
        return {
            [t]: parseFloat(a),
            [e]: parseFloat(l),
            [r]: parseFloat(u),
            alpha: d !== void 0 ? parseFloat(d) : 1
        }
    },
    qR = t => Zn(0, 255, t),
    Cd = { ...Ti,
        transform: t => Math.round(qR(t))
    },
    os = {
        test: Th("rgb", "red"),
        parse: Bx("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: r,
            alpha: i = 1
        }) => "rgba(" + Cd.transform(t) + ", " + Cd.transform(e) + ", " + Cd.transform(r) + ", " + Oo(Vo.transform(i)) + ")"
    };

function HR(t) {
    let e = "",
        r = "",
        i = "",
        a = "";
    return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), i = t.substring(5, 7), a = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), i = t.substring(3, 4), a = t.substring(4, 5), e += e, r += r, i += i, a += a), {
        red: parseInt(e, 16),
        green: parseInt(r, 16),
        blue: parseInt(i, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const vf = {
        test: Th("#"),
        parse: HR,
        transform: os.transform
    },
    ti = {
        test: Th("hsl", "hue"),
        parse: Bx("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: r,
            alpha: i = 1
        }) => "hsla(" + Math.round(t) + ", " + An.transform(Oo(e)) + ", " + An.transform(Oo(r)) + ", " + Oo(Vo.transform(i)) + ")"
    },
    bt = {
        test: t => os.test(t) || vf.test(t) || ti.test(t),
        parse: t => os.test(t) ? os.parse(t) : ti.test(t) ? ti.parse(t) : vf.parse(t),
        transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? os.transform(t) : ti.transform(t)
    },
    KR = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function QR(t) {
    var e, r;
    return isNaN(t) && typeof t == "string" && (((e = t.match(Ch)) === null || e === void 0 ? void 0 : e.length) || 0) + (((r = t.match(KR)) === null || r === void 0 ? void 0 : r.length) || 0) > 0
}
const Ix = "number",
    zx = "color",
    GR = "var",
    YR = "var(",
    t0 = "${}",
    XR = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function $o(t) {
    const e = t.toString(),
        r = [],
        i = {
            color: [],
            number: [],
            var: []
        },
        a = [];
    let l = 0;
    const d = e.replace(XR, h => (bt.test(h) ? (i.color.push(l), a.push(zx), r.push(bt.parse(h))) : h.startsWith(YR) ? (i.var.push(l), a.push(GR), r.push(h)) : (i.number.push(l), a.push(Ix), r.push(parseFloat(h))), ++l, t0)).split(t0);
    return {
        values: r,
        split: d,
        indexes: i,
        types: a
    }
}

function Vx(t) {
    return $o(t).values
}

function Ux(t) {
    const {
        split: e,
        types: r
    } = $o(t), i = e.length;
    return a => {
        let l = "";
        for (let u = 0; u < i; u++)
            if (l += e[u], a[u] !== void 0) {
                const d = r[u];
                d === Ix ? l += Oo(a[u]) : d === zx ? l += bt.transform(a[u]) : l += a[u]
            }
        return l
    }
}
const JR = t => typeof t == "number" ? 0 : t;

function ZR(t) {
    const e = Vx(t);
    return Ux(t)(e.map(JR))
}
const Br = {
        test: QR,
        parse: Vx,
        createTransformer: Ux,
        getAnimatableNone: ZR
    },
    eA = new Set(["brightness", "contrast", "saturate", "opacity"]);

function tA(t) {
    const [e, r] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [i] = r.match(Ch) || [];
    if (!i) return t;
    const a = r.replace(i, "");
    let l = eA.has(e) ? 1 : 0;
    return i !== r && (l *= 100), e + "(" + l + a + ")"
}
const nA = /\b([a-z-]*)\(.*?\)/gu,
    wf = { ...Br,
        getAnimatableNone: t => {
            const e = t.match(nA);
            return e ? e.map(tA).join(" ") : t
        }
    },
    rA = { ...dh,
        color: bt,
        backgroundColor: bt,
        outlineColor: bt,
        fill: bt,
        stroke: bt,
        borderColor: bt,
        borderTopColor: bt,
        borderRightColor: bt,
        borderBottomColor: bt,
        borderLeftColor: bt,
        filter: wf,
        WebkitFilter: wf
    },
    Ph = t => rA[t];

function $x(t, e) {
    let r = Ph(t);
    return r !== wf && (r = Br), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
}
const sA = new Set(["auto", "none", "0"]);

function iA(t, e, r) {
    let i = 0,
        a;
    for (; i < t.length && !a;) {
        const l = t[i];
        typeof l == "string" && !sA.has(l) && $o(l).values.length && (a = t[i]), i++
    }
    if (a && r)
        for (const l of e) t[l] = $x(r, a)
}
const n0 = t => t === Ti || t === me,
    r0 = (t, e) => parseFloat(t.split(", ")[e]),
    s0 = (t, e) => (r, {
        transform: i
    }) => {
        if (i === "none" || !i) return 0;
        const a = i.match(/^matrix3d\((.+)\)$/u);
        if (a) return r0(a[1], e); {
            const l = i.match(/^matrix\((.+)\)$/u);
            return l ? r0(l[1], t) : 0
        }
    },
    oA = new Set(["x", "y", "z"]),
    aA = Ci.filter(t => !oA.has(t));

function lA(t) {
    const e = [];
    return aA.forEach(r => {
        const i = t.getValue(r);
        i !== void 0 && (e.push([r, i.get()]), i.set(r.startsWith("scale") ? 1 : 0))
    }), e
}
const xi = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: r = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: r = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: s0(4, 13),
    y: s0(5, 14)
};
xi.translateX = xi.x;
xi.translateY = xi.y;
const ys = new Set;
let xf = !1,
    Sf = !1;

function Wx() {
    if (Sf) {
        const t = Array.from(ys).filter(i => i.needsMeasurement),
            e = new Set(t.map(i => i.element)),
            r = new Map;
        e.forEach(i => {
            const a = lA(i);
            a.length && (r.set(i, a), i.render())
        }), t.forEach(i => i.measureInitialState()), e.forEach(i => {
            i.render();
            const a = r.get(i);
            a && a.forEach(([l, u]) => {
                var d;
                (d = i.getValue(l)) === null || d === void 0 || d.set(u)
            })
        }), t.forEach(i => i.measureEndState()), t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        })
    }
    Sf = !1, xf = !1, ys.forEach(t => t.complete()), ys.clear()
}

function qx() {
    ys.forEach(t => {
        t.readKeyframes(), t.needsMeasurement && (Sf = !0)
    })
}

function uA() {
    qx(), Wx()
}
class Rh {
    constructor(e, r, i, a, l, u = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = r, this.name = i, this.motionValue = a, this.element = l, this.isAsync = u
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (ys.add(this), xf || (xf = !0, Ve.read(qx), Ve.resolveKeyframes(Wx))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: r,
            element: i,
            motionValue: a
        } = this;
        for (let l = 0; l < e.length; l++)
            if (e[l] === null)
                if (l === 0) {
                    const u = a == null ? void 0 : a.get(),
                        d = e[e.length - 1];
                    if (u !== void 0) e[0] = u;
                    else if (i && r) {
                        const h = i.readValue(r, d);
                        h != null && (e[0] = h)
                    }
                    e[0] === void 0 && (e[0] = d), a && u === void 0 && a.set(e[0])
                } else e[l] = e[l - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), ys.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, ys.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Hx = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
    cA = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function dA(t) {
    const e = cA.exec(t);
    if (!e) return [, ];
    const [, r, i, a] = e;
    return [`--${r??i}`, a]
}

function Kx(t, e, r = 1) {
    const [i, a] = dA(t);
    if (!i) return;
    const l = window.getComputedStyle(e).getPropertyValue(i);
    if (l) {
        const u = l.trim();
        return Hx(u) ? parseFloat(u) : u
    }
    return ch(a) ? Kx(a, e, r + 1) : a
}
const Qx = t => e => e.test(t),
    fA = {
        test: t => t === "auto",
        parse: t => t
    },
    Gx = [Ti, me, An, Er, tR, eR, fA],
    i0 = t => Gx.find(Qx(t));
class Yx extends Rh {
    constructor(e, r, i, a, l) {
        super(e, r, i, a, l, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            element: r,
            name: i
        } = this;
        if (!r || !r.current) return;
        super.readKeyframes();
        for (let h = 0; h < e.length; h++) {
            let p = e[h];
            if (typeof p == "string" && (p = p.trim(), ch(p))) {
                const g = Kx(p, r.current);
                g !== void 0 && (e[h] = g), h === e.length - 1 && (this.finalKeyframe = p)
            }
        }
        if (this.resolveNoneKeyframes(), !Cx.has(i) || e.length !== 2) return;
        const [a, l] = e, u = i0(a), d = i0(l);
        if (u !== d)
            if (n0(u) && n0(d))
                for (let h = 0; h < e.length; h++) {
                    const p = e[h];
                    typeof p == "string" && (e[h] = parseFloat(p))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: r
        } = this, i = [];
        for (let a = 0; a < e.length; a++) UR(e[a]) && i.push(a);
        i.length && iA(e, i, r)
    }
    measureInitialState() {
        const {
            element: e,
            unresolvedKeyframes: r,
            name: i
        } = this;
        if (!e || !e.current) return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = xi[i](e.measureViewportBox(), window.getComputedStyle(e.current)), r[0] = this.measuredOrigin;
        const a = r[r.length - 1];
        a !== void 0 && e.getValue(i, a).jump(a, !1)
    }
    measureEndState() {
        var e;
        const {
            element: r,
            name: i,
            unresolvedKeyframes: a
        } = this;
        if (!r || !r.current) return;
        const l = r.getValue(i);
        l && l.jump(this.measuredOrigin, !1);
        const u = a.length - 1,
            d = a[u];
        a[u] = xi[i](r.measureViewportBox(), window.getComputedStyle(r.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([h, p]) => {
            r.getValue(h).set(p)
        }), this.resolveNoneKeyframes()
    }
}
const o0 = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Br.test(t) || t === "0") && !t.startsWith("url("));

function hA(t) {
    const e = t[0];
    if (t.length === 1) return !0;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== e) return !0
}

function pA(t, e, r, i) {
    const a = t[0];
    if (a === null) return !1;
    if (e === "display" || e === "visibility") return !0;
    const l = t[t.length - 1],
        u = o0(a, e),
        d = o0(l, e);
    return !u || !d ? !1 : hA(t) || (r === "spring" || vh(r)) && i
}
const mA = t => t !== null;

function fu(t, {
    repeat: e,
    repeatType: r = "loop"
}, i) {
    const a = t.filter(mA),
        l = e && r !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
    return !l || i === void 0 ? a[l] : i
}
const gA = 40;
class Xx {
    constructor({
        autoplay: e = !0,
        delay: r = 0,
        type: i = "keyframes",
        repeat: a = 0,
        repeatDelay: l = 0,
        repeatType: u = "loop",
        ...d
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Mn.now(), this.options = {
            autoplay: e,
            delay: r,
            type: i,
            repeat: a,
            repeatDelay: l,
            repeatType: u,
            ...d
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > gA ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && uA(), this._resolved
    }
    onKeyframesResolved(e, r) {
        this.resolvedAt = Mn.now(), this.hasAttemptedResolve = !0;
        const {
            name: i,
            type: a,
            velocity: l,
            delay: u,
            onComplete: d,
            onUpdate: h,
            isGenerator: p
        } = this.options;
        if (!p && !pA(e, i, a, l))
            if (u) this.options.duration = 0;
            else {
                h && h(fu(e, this.options, r)), d && d(), this.resolveFinishedPromise();
                return
            }
        const g = this.initPlayback(e, r);
        g !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: r,
            ...g
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(e, r) {
        return this.currentFinishedPromise.then(e, r)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        })
    }
}
const He = (t, e, r) => t + (e - t) * r;

function Td(t, e, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
}

function yA({
    hue: t,
    saturation: e,
    lightness: r,
    alpha: i
}) {
    t /= 360, e /= 100, r /= 100;
    let a = 0,
        l = 0,
        u = 0;
    if (!e) a = l = u = r;
    else {
        const d = r < .5 ? r * (1 + e) : r + e - r * e,
            h = 2 * r - d;
        a = Td(h, d, t + 1 / 3), l = Td(h, d, t), u = Td(h, d, t - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(l * 255),
        blue: Math.round(u * 255),
        alpha: i
    }
}

function Ql(t, e) {
    return r => r > 0 ? e : t
}
const Pd = (t, e, r) => {
        const i = t * t,
            a = r * (e * e - i) + i;
        return a < 0 ? 0 : Math.sqrt(a)
    },
    vA = [vf, os, ti],
    wA = t => vA.find(e => e.test(t));

function a0(t) {
    const e = wA(t);
    if (!e) return !1;
    let r = e.parse(t);
    return e === ti && (r = yA(r)), r
}
const l0 = (t, e) => {
        const r = a0(t),
            i = a0(e);
        if (!r || !i) return Ql(t, e);
        const a = { ...r
        };
        return l => (a.red = Pd(r.red, i.red, l), a.green = Pd(r.green, i.green, l), a.blue = Pd(r.blue, i.blue, l), a.alpha = He(r.alpha, i.alpha, l), os.transform(a))
    },
    xA = (t, e) => r => e(t(r)),
    sa = (...t) => t.reduce(xA),
    bf = new Set(["none", "hidden"]);

function SA(t, e) {
    return bf.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t
}

function bA(t, e) {
    return r => He(t, e, r)
}

function Ah(t) {
    return typeof t == "number" ? bA : typeof t == "string" ? ch(t) ? Ql : bt.test(t) ? l0 : _A : Array.isArray(t) ? Jx : typeof t == "object" ? bt.test(t) ? l0 : EA : Ql
}

function Jx(t, e) {
    const r = [...t],
        i = r.length,
        a = t.map((l, u) => Ah(l)(l, e[u]));
    return l => {
        for (let u = 0; u < i; u++) r[u] = a[u](l);
        return r
    }
}

function EA(t, e) {
    const r = { ...t,
            ...e
        },
        i = {};
    for (const a in r) t[a] !== void 0 && e[a] !== void 0 && (i[a] = Ah(t[a])(t[a], e[a]));
    return a => {
        for (const l in i) r[l] = i[l](a);
        return r
    }
}

function kA(t, e) {
    var r;
    const i = [],
        a = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let l = 0; l < e.values.length; l++) {
        const u = e.types[l],
            d = t.indexes[u][a[u]],
            h = (r = t.values[d]) !== null && r !== void 0 ? r : 0;
        i[l] = h, a[u]++
    }
    return i
}
const _A = (t, e) => {
    const r = Br.createTransformer(e),
        i = $o(t),
        a = $o(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? bf.has(t) && !a.values.length || bf.has(e) && !i.values.length ? SA(t, e) : sa(Jx(kA(i, a), a.values), r) : Ql(t, e)
};

function Zx(t, e, r) {
    return typeof t == "number" && typeof e == "number" && typeof r == "number" ? He(t, e, r) : Ah(t)(t, e)
}
const CA = 5;

function e1(t, e, r) {
    const i = Math.max(e - CA, 0);
    return Tx(r - t(i), e - i)
}
const Ge = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    Rd = .001;

function TA({
    duration: t = Ge.duration,
    bounce: e = Ge.bounce,
    velocity: r = Ge.velocity,
    mass: i = Ge.mass
}) {
    let a, l, u = 1 - e;
    u = Zn(Ge.minDamping, Ge.maxDamping, u), t = Zn(Ge.minDuration, Ge.maxDuration, Xn(t)), u < 1 ? (a = p => {
        const g = p * u,
            y = g * t,
            x = g - r,
            E = Ef(p, u),
            T = Math.exp(-y);
        return Rd - x / E * T
    }, l = p => {
        const y = p * u * t,
            x = y * r + r,
            E = Math.pow(u, 2) * Math.pow(p, 2) * t,
            T = Math.exp(-y),
            b = Ef(Math.pow(p, 2), u);
        return (-a(p) + Rd > 0 ? -1 : 1) * ((x - E) * T) / b
    }) : (a = p => {
        const g = Math.exp(-p * t),
            y = (p - r) * t + 1;
        return -Rd + g * y
    }, l = p => {
        const g = Math.exp(-p * t),
            y = (r - p) * (t * t);
        return g * y
    });
    const d = 5 / t,
        h = RA(a, l, d);
    if (t = Yn(t), isNaN(h)) return {
        stiffness: Ge.stiffness,
        damping: Ge.damping,
        duration: t
    }; {
        const p = Math.pow(h, 2) * i;
        return {
            stiffness: p,
            damping: u * 2 * Math.sqrt(i * p),
            duration: t
        }
    }
}
const PA = 12;

function RA(t, e, r) {
    let i = r;
    for (let a = 1; a < PA; a++) i = i - t(i) / e(i);
    return i
}

function Ef(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const AA = ["duration", "bounce"],
    MA = ["stiffness", "damping", "mass"];

function u0(t, e) {
    return e.some(r => t[r] !== void 0)
}

function OA(t) {
    let e = {
        velocity: Ge.velocity,
        stiffness: Ge.stiffness,
        damping: Ge.damping,
        mass: Ge.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!u0(t, MA) && u0(t, AA))
        if (t.visualDuration) {
            const r = t.visualDuration,
                i = 2 * Math.PI / (r * 1.2),
                a = i * i,
                l = 2 * Zn(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
            e = { ...e,
                mass: Ge.mass,
                stiffness: a,
                damping: l
            }
        } else {
            const r = TA(t);
            e = { ...e,
                ...r,
                mass: Ge.mass
            }, e.isResolvedFromDuration = !0
        }
    return e
}

function t1(t = Ge.visualDuration, e = Ge.bounce) {
    const r = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {
        restSpeed: i,
        restDelta: a
    } = r;
    const l = r.keyframes[0],
        u = r.keyframes[r.keyframes.length - 1],
        d = {
            done: !1,
            value: l
        },
        {
            stiffness: h,
            damping: p,
            mass: g,
            duration: y,
            velocity: x,
            isResolvedFromDuration: E
        } = OA({ ...r,
            velocity: -Xn(r.velocity || 0)
        }),
        T = x || 0,
        b = p / (2 * Math.sqrt(h * g)),
        S = u - l,
        k = Xn(Math.sqrt(h / g)),
        j = Math.abs(S) < 5;
    i || (i = j ? Ge.restSpeed.granular : Ge.restSpeed.default), a || (a = j ? Ge.restDelta.granular : Ge.restDelta.default);
    let R;
    if (b < 1) {
        const B = Ef(k, b);
        R = W => {
            const Y = Math.exp(-b * k * W);
            return u - Y * ((T + b * k * S) / B * Math.sin(B * W) + S * Math.cos(B * W))
        }
    } else if (b === 1) R = B => u - Math.exp(-k * B) * (S + (T + k * S) * B);
    else {
        const B = k * Math.sqrt(b * b - 1);
        R = W => {
            const Y = Math.exp(-b * k * W),
                I = Math.min(B * W, 300);
            return u - Y * ((T + b * k * S) * Math.sinh(I) + B * S * Math.cosh(I)) / B
        }
    }
    const M = {
        calculatedDuration: E && y || null,
        next: B => {
            const W = R(B);
            if (E) d.done = B >= y;
            else {
                let Y = 0;
                b < 1 && (Y = B === 0 ? Yn(T) : e1(R, B, W));
                const I = Math.abs(Y) <= i,
                    J = Math.abs(u - W) <= a;
                d.done = I && J
            }
            return d.value = d.done ? u : W, d
        },
        toString: () => {
            const B = Math.min(wx(M), mf),
                W = xx(Y => M.next(B * Y).value, B, 30);
            return B + "ms " + W
        }
    };
    return M
}

function c0({
    keyframes: t,
    velocity: e = 0,
    power: r = .8,
    timeConstant: i = 325,
    bounceDamping: a = 10,
    bounceStiffness: l = 500,
    modifyTarget: u,
    min: d,
    max: h,
    restDelta: p = .5,
    restSpeed: g
}) {
    const y = t[0],
        x = {
            done: !1,
            value: y
        },
        E = I => d !== void 0 && I < d || h !== void 0 && I > h,
        T = I => d === void 0 ? h : h === void 0 || Math.abs(d - I) < Math.abs(h - I) ? d : h;
    let b = r * e;
    const S = y + b,
        k = u === void 0 ? S : u(S);
    k !== S && (b = k - y);
    const j = I => -b * Math.exp(-I / i),
        R = I => k + j(I),
        M = I => {
            const J = j(I),
                de = R(I);
            x.done = Math.abs(J) <= p, x.value = x.done ? k : de
        };
    let B, W;
    const Y = I => {
        E(x.value) && (B = I, W = t1({
            keyframes: [x.value, T(x.value)],
            velocity: e1(R, I, x.value),
            damping: a,
            stiffness: l,
            restDelta: p,
            restSpeed: g
        }))
    };
    return Y(0), {
        calculatedDuration: null,
        next: I => {
            let J = !1;
            return !W && B === void 0 && (J = !0, M(I), Y(I)), B !== void 0 && I >= B ? W.next(I - B) : (!J && M(I), x)
        }
    }
}
const jA = ra(.42, 0, 1, 1),
    FA = ra(0, 0, .58, 1),
    n1 = ra(.42, 0, .58, 1),
    NA = t => Array.isArray(t) && typeof t[0] != "number",
    LA = {
        linear: Kt,
        easeIn: jA,
        easeInOut: n1,
        easeOut: FA,
        circIn: _h,
        circInOut: Lx,
        circOut: Nx,
        backIn: kh,
        backInOut: jx,
        backOut: Ox,
        anticipate: Fx
    },
    d0 = t => {
        if (wh(t)) {
            Zw(t.length === 4);
            const [e, r, i, a] = t;
            return ra(e, r, i, a)
        } else if (typeof t == "string") return LA[t];
        return t
    };

function DA(t, e, r) {
    const i = [],
        a = r || Zx,
        l = t.length - 1;
    for (let u = 0; u < l; u++) {
        let d = a(t[u], t[u + 1]);
        if (e) {
            const h = Array.isArray(e) ? e[u] || Kt : e;
            d = sa(h, d)
        }
        i.push(d)
    }
    return i
}

function BA(t, e, {
    clamp: r = !0,
    ease: i,
    mixer: a
} = {}) {
    const l = t.length;
    if (Zw(l === e.length), l === 1) return () => e[0];
    if (l === 2 && e[0] === e[1]) return () => e[1];
    const u = t[0] === t[1];
    t[0] > t[l - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const d = DA(e, i, a),
        h = d.length,
        p = g => {
            if (u && g < t[0]) return e[0];
            let y = 0;
            if (h > 1)
                for (; y < t.length - 2 && !(g < t[y + 1]); y++);
            const x = vi(t[y], t[y + 1], g);
            return d[y](x)
        };
    return r ? g => p(Zn(t[0], t[l - 1], g)) : p
}

function IA(t, e) {
    const r = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const a = vi(0, e, i);
        t.push(He(r, 1, a))
    }
}

function zA(t) {
    const e = [0];
    return IA(e, t.length - 1), e
}

function VA(t, e) {
    return t.map(r => r * e)
}

function UA(t, e) {
    return t.map(() => e || n1).splice(0, t.length - 1)
}

function Gl({
    duration: t = 300,
    keyframes: e,
    times: r,
    ease: i = "easeInOut"
}) {
    const a = NA(i) ? i.map(d0) : d0(i),
        l = {
            done: !1,
            value: e[0]
        },
        u = VA(r && r.length === e.length ? r : zA(e), t),
        d = BA(u, e, {
            ease: Array.isArray(a) ? a : UA(e, a)
        });
    return {
        calculatedDuration: t,
        next: h => (l.value = d(h), l.done = h >= t, l)
    }
}
const $A = t => {
        const e = ({
            timestamp: r
        }) => t(r);
        return {
            start: () => Ve.update(e, !0),
            stop: () => Dr(e),
            now: () => mt.isProcessing ? mt.timestamp : Mn.now()
        }
    },
    WA = {
        decay: c0,
        inertia: c0,
        tween: Gl,
        keyframes: Gl,
        spring: t1
    },
    qA = t => t / 100;
class Mh extends Xx {
    constructor(e) {
        super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: h
            } = this.options;
            h && h()
        };
        const {
            name: r,
            motionValue: i,
            element: a,
            keyframes: l
        } = this.options, u = (a == null ? void 0 : a.KeyframeResolver) || Rh, d = (h, p) => this.onKeyframesResolved(h, p);
        this.resolver = new u(l, d, r, i, a), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {
            type: r = "keyframes",
            repeat: i = 0,
            repeatDelay: a = 0,
            repeatType: l,
            velocity: u = 0
        } = this.options, d = vh(r) ? r : WA[r] || Gl;
        let h, p;
        d !== Gl && typeof e[0] != "number" && (h = sa(qA, Zx(e[0], e[1])), e = [0, 100]);
        const g = d({ ...this.options,
            keyframes: e
        });
        l === "mirror" && (p = d({ ...this.options,
            keyframes: [...e].reverse(),
            velocity: -u
        })), g.calculatedDuration === null && (g.calculatedDuration = wx(g));
        const {
            calculatedDuration: y
        } = g, x = y + a, E = x * (i + 1) - a;
        return {
            generator: g,
            mirroredGenerator: p,
            mapPercentToKeyframes: h,
            calculatedDuration: y,
            resolvedDuration: x,
            totalDuration: E
        }
    }
    onPostResolved() {
        const {
            autoplay: e = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, r = !1) {
        const {
            resolved: i
        } = this;
        if (!i) {
            const {
                keyframes: I
            } = this.options;
            return {
                done: !0,
                value: I[I.length - 1]
            }
        }
        const {
            finalKeyframe: a,
            generator: l,
            mirroredGenerator: u,
            mapPercentToKeyframes: d,
            keyframes: h,
            calculatedDuration: p,
            totalDuration: g,
            resolvedDuration: y
        } = i;
        if (this.startTime === null) return l.next(0);
        const {
            delay: x,
            repeat: E,
            repeatType: T,
            repeatDelay: b,
            onUpdate: S
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - g / this.speed, this.startTime)), r ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const k = this.currentTime - x * (this.speed >= 0 ? 1 : -1),
            j = this.speed >= 0 ? k < 0 : k > g;
        this.currentTime = Math.max(k, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let R = this.currentTime,
            M = l;
        if (E) {
            const I = Math.min(this.currentTime, g) / y;
            let J = Math.floor(I),
                de = I % 1;
            !de && I >= 1 && (de = 1), de === 1 && J--, J = Math.min(J, E + 1), !!(J % 2) && (T === "reverse" ? (de = 1 - de, b && (de -= b / y)) : T === "mirror" && (M = u)), R = Zn(0, 1, de) * y
        }
        const B = j ? {
            done: !1,
            value: h[0]
        } : M.next(R);
        d && (B.value = d(B.value));
        let {
            done: W
        } = B;
        !j && p !== null && (W = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const Y = this.holdTime === null && (this.state === "finished" || this.state === "running" && W);
        return Y && a !== void 0 && (B.value = fu(h, this.options, a)), S && S(B.value), Y && this.finish(), B
    }
    get duration() {
        const {
            resolved: e
        } = this;
        return e ? Xn(e.calculatedDuration) : 0
    }
    get time() {
        return Xn(this.currentTime)
    }
    set time(e) {
        e = Yn(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const r = this.playbackSpeed !== e;
        this.playbackSpeed = e, r && (this.time = Xn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: e = $A,
            onPlay: r,
            startTime: i
        } = this.options;
        this.driver || (this.driver = e(l => this.tick(l))), r && r();
        const a = this.driver.now();
        this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = i ? ? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: e
        } = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0, this.tick(e, !0)
    }
}
const HA = new Set(["opacity", "clipPath", "filter", "transform"]);

function KA(t, e, r, {
    delay: i = 0,
    duration: a = 300,
    repeat: l = 0,
    repeatType: u = "loop",
    ease: d = "easeInOut",
    times: h
} = {}) {
    const p = {
        [e]: r
    };
    h && (p.offset = h);
    const g = bx(d, a);
    return Array.isArray(g) && (p.easing = g), t.animate(p, {
        delay: i,
        duration: a,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: l + 1,
        direction: u === "reverse" ? "alternate" : "normal"
    })
}
const QA = rh(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Yl = 10,
    GA = 2e4;

function YA(t) {
    return vh(t.type) || t.type === "spring" || !Sx(t.ease)
}

function XA(t, e) {
    const r = new Mh({ ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const a = [];
    let l = 0;
    for (; !i.done && l < GA;) i = r.sample(l), a.push(i.value), l += Yl;
    return {
        times: void 0,
        keyframes: a,
        duration: l - Yl,
        ease: "linear"
    }
}
const r1 = {
    anticipate: Fx,
    backInOut: jx,
    circInOut: Lx
};

function JA(t) {
    return t in r1
}
class f0 extends Xx {
    constructor(e) {
        super(e);
        const {
            name: r,
            motionValue: i,
            element: a,
            keyframes: l
        } = this.options;
        this.resolver = new Yx(l, (u, d) => this.onKeyframesResolved(u, d), r, i, a), this.resolver.scheduleResolve()
    }
    initPlayback(e, r) {
        let {
            duration: i = 300,
            times: a,
            ease: l,
            type: u,
            motionValue: d,
            name: h,
            startTime: p
        } = this.options;
        if (!d.owner || !d.owner.current) return !1;
        if (typeof l == "string" && Kl() && JA(l) && (l = r1[l]), YA(this.options)) {
            const {
                onComplete: y,
                onUpdate: x,
                motionValue: E,
                element: T,
                ...b
            } = this.options, S = XA(e, b);
            e = S.keyframes, e.length === 1 && (e[1] = e[0]), i = S.duration, a = S.times, l = S.ease, u = "keyframes"
        }
        const g = KA(d.owner.current, h, e, { ...this.options,
            duration: i,
            times: a,
            ease: l
        });
        return g.startTime = p ? ? this.calcStartTime(), this.pendingTimeline ? (Yy(g, this.pendingTimeline), this.pendingTimeline = void 0) : g.onfinish = () => {
            const {
                onComplete: y
            } = this.options;
            d.set(fu(e, this.options, r)), y && y(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: g,
            duration: i,
            times: a,
            type: u,
            ease: l,
            keyframes: e
        }
    }
    get duration() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            duration: r
        } = e;
        return Xn(r)
    }
    get time() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            animation: r
        } = e;
        return Xn(r.currentTime || 0)
    }
    set time(e) {
        const {
            resolved: r
        } = this;
        if (!r) return;
        const {
            animation: i
        } = r;
        i.currentTime = Yn(e)
    }
    get speed() {
        const {
            resolved: e
        } = this;
        if (!e) return 1;
        const {
            animation: r
        } = e;
        return r.playbackRate
    }
    set speed(e) {
        const {
            resolved: r
        } = this;
        if (!r) return;
        const {
            animation: i
        } = r;
        i.playbackRate = e
    }
    get state() {
        const {
            resolved: e
        } = this;
        if (!e) return "idle";
        const {
            animation: r
        } = e;
        return r.playState
    }
    get startTime() {
        const {
            resolved: e
        } = this;
        if (!e) return null;
        const {
            animation: r
        } = e;
        return r.startTime
    }
    attachTimeline(e) {
        if (!this._resolved) this.pendingTimeline = e;
        else {
            const {
                resolved: r
            } = this;
            if (!r) return Kt;
            const {
                animation: i
            } = r;
            Yy(i, e)
        }
        return Kt
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: r
        } = e;
        r.playState === "finished" && this.updateFinishedPromise(), r.play()
    }
    pause() {
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: r
        } = e;
        r.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: r,
            keyframes: i,
            duration: a,
            type: l,
            ease: u,
            times: d
        } = e;
        if (r.playState === "idle" || r.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: p,
                onUpdate: g,
                onComplete: y,
                element: x,
                ...E
            } = this.options, T = new Mh({ ...E,
                keyframes: i,
                duration: a,
                type: l,
                ease: u,
                times: d,
                isGenerator: !0
            }), b = Yn(this.time);
            p.setWithVelocity(T.sample(b - Yl).value, T.sample(b).value, Yl)
        }
        const {
            onStop: h
        } = this.options;
        h && h(), this.cancel()
    }
    complete() {
        const {
            resolved: e
        } = this;
        e && e.animation.finish()
    }
    cancel() {
        const {
            resolved: e
        } = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {
            motionValue: r,
            name: i,
            repeatDelay: a,
            repeatType: l,
            damping: u,
            type: d
        } = e;
        if (!r || !r.owner || !(r.owner.current instanceof HTMLElement)) return !1;
        const {
            onUpdate: h,
            transformTemplate: p
        } = r.owner.getProps();
        return QA() && i && HA.has(i) && !h && !p && !a && l !== "mirror" && u !== 0 && d !== "inertia"
    }
}
const ZA = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    e4 = t => ({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    t4 = {
        type: "keyframes",
        duration: .8
    },
    n4 = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    r4 = (t, {
        keyframes: e
    }) => e.length > 2 ? t4 : _s.has(t) ? t.startsWith("scale") ? e4(e[1]) : ZA : n4;

function s4({
    when: t,
    delay: e,
    delayChildren: r,
    staggerChildren: i,
    staggerDirection: a,
    repeat: l,
    repeatType: u,
    repeatDelay: d,
    from: h,
    elapsed: p,
    ...g
}) {
    return !!Object.keys(g).length
}
const Oh = (t, e, r, i = {}, a, l) => u => {
    const d = yh(i, t) || {},
        h = d.delay || i.delay || 0;
    let {
        elapsed: p = 0
    } = i;
    p = p - Yn(h);
    let g = {
        keyframes: Array.isArray(r) ? r : [null, r],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...d,
        delay: -p,
        onUpdate: x => {
            e.set(x), d.onUpdate && d.onUpdate(x)
        },
        onComplete: () => {
            u(), d.onComplete && d.onComplete()
        },
        name: t,
        motionValue: e,
        element: l ? void 0 : a
    };
    s4(d) || (g = { ...g,
        ...r4(t, g)
    }), g.duration && (g.duration = Yn(g.duration)), g.repeatDelay && (g.repeatDelay = Yn(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0, g.delay === 0 && (y = !0)), y && !l && e.get() !== void 0) {
        const x = fu(g.keyframes, d);
        if (x !== void 0) return Ve.update(() => {
            g.onUpdate(x), g.onComplete()
        }), new ER([])
    }
    return !l && f0.supports(g) ? new f0(g) : new Mh(g)
};

function i4({
    protectedKeys: t,
    needsAnimating: e
}, r) {
    const i = t.hasOwnProperty(r) && e[r] !== !0;
    return e[r] = !1, i
}

function s1(t, e, {
    delay: r = 0,
    transitionOverride: i,
    type: a
} = {}) {
    var l;
    let {
        transition: u = t.getDefaultTransition(),
        transitionEnd: d,
        ...h
    } = e;
    i && (u = i);
    const p = [],
        g = a && t.animationState && t.animationState.getState()[a];
    for (const y in h) {
        const x = t.getValue(y, (l = t.latestValues[y]) !== null && l !== void 0 ? l : null),
            E = h[y];
        if (E === void 0 || g && i4(g, y)) continue;
        const T = {
            delay: r,
            ...yh(u || {}, y)
        };
        let b = !1;
        if (window.MotionHandoffAnimation) {
            const k = Px(t);
            if (k) {
                const j = window.MotionHandoffAnimation(k, y, Ve);
                j !== null && (T.startTime = j, b = !0)
            }
        }
        yf(t, y), x.start(Oh(y, x, E, t.shouldReduceMotion && Cx.has(y) ? {
            type: !1
        } : T, t, b));
        const S = x.animation;
        S && p.push(S)
    }
    return d && Promise.all(p).then(() => {
        Ve.update(() => {
            d && DR(t, d)
        })
    }), p
}

function kf(t, e, r = {}) {
    var i;
    const a = du(t, e, r.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {
        transition: l = t.getDefaultTransition() || {}
    } = a || {};
    r.transitionOverride && (l = r.transitionOverride);
    const u = a ? () => Promise.all(s1(t, a, r)) : () => Promise.resolve(),
        d = t.variantChildren && t.variantChildren.size ? (p = 0) => {
            const {
                delayChildren: g = 0,
                staggerChildren: y,
                staggerDirection: x
            } = l;
            return o4(t, e, g + p, y, x, r)
        } : () => Promise.resolve(),
        {
            when: h
        } = l;
    if (h) {
        const [p, g] = h === "beforeChildren" ? [u, d] : [d, u];
        return p().then(() => g())
    } else return Promise.all([u(), d(r.delay)])
}

function o4(t, e, r = 0, i = 0, a = 1, l) {
    const u = [],
        d = (t.variantChildren.size - 1) * i,
        h = a === 1 ? (p = 0) => p * i : (p = 0) => d - p * i;
    return Array.from(t.variantChildren).sort(a4).forEach((p, g) => {
        p.notify("AnimationStart", e), u.push(kf(p, e, { ...l,
            delay: r + h(g)
        }).then(() => p.notify("AnimationComplete", e)))
    }), Promise.all(u)
}

function a4(t, e) {
    return t.sortNodePosition(e)
}

function l4(t, e, r = {}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const a = e.map(l => kf(t, l, r));
        i = Promise.all(a)
    } else if (typeof e == "string") i = kf(t, e, r);
    else {
        const a = typeof e == "function" ? du(t, e, r.custom) : e;
        i = Promise.all(s1(t, a, r))
    }
    return i.then(() => {
        t.notify("AnimationComplete", e)
    })
}
const u4 = ih.length;

function i1(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
        const r = t.parent ? i1(t.parent) || {} : {};
        return t.props.initial !== void 0 && (r.initial = t.props.initial), r
    }
    const e = {};
    for (let r = 0; r < u4; r++) {
        const i = ih[r],
            a = t.props[i];
        (zo(a) || a === !1) && (e[i] = a)
    }
    return e
}
const c4 = [...sh].reverse(),
    d4 = sh.length;

function f4(t) {
    return e => Promise.all(e.map(({
        animation: r,
        options: i
    }) => l4(t, r, i)))
}

function h4(t) {
    let e = f4(t),
        r = h0(),
        i = !0;
    const a = h => (p, g) => {
        var y;
        const x = du(t, g, h === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (x) {
            const {
                transition: E,
                transitionEnd: T,
                ...b
            } = x;
            p = { ...p,
                ...b,
                ...T
            }
        }
        return p
    };

    function l(h) {
        e = h(t)
    }

    function u(h) {
        const {
            props: p
        } = t, g = i1(t.parent) || {}, y = [], x = new Set;
        let E = {},
            T = 1 / 0;
        for (let S = 0; S < d4; S++) {
            const k = c4[S],
                j = r[k],
                R = p[k] !== void 0 ? p[k] : g[k],
                M = zo(R),
                B = k === h ? j.isActive : null;
            B === !1 && (T = S);
            let W = R === g[k] && R !== p[k] && M;
            if (W && i && t.manuallyAnimateOnMount && (W = !1), j.protectedKeys = { ...E
                }, !j.isActive && B === null || !R && !j.prevProp || uu(R) || typeof R == "boolean") continue;
            const Y = p4(j.prevProp, R);
            let I = Y || k === h && j.isActive && !W && M || S > T && M,
                J = !1;
            const de = Array.isArray(R) ? R : [R];
            let ue = de.reduce(a(k), {});
            B === !1 && (ue = {});
            const {
                prevResolvedValues: Re = {}
            } = j, Ue = { ...Re,
                ...ue
            }, Te = ge => {
                I = !0, x.has(ge) && (J = !0, x.delete(ge)), j.needsAnimating[ge] = !0;
                const Q = t.getValue(ge);
                Q && (Q.liveStyle = !1)
            };
            for (const ge in Ue) {
                const Q = ue[ge],
                    oe = Re[ge];
                if (E.hasOwnProperty(ge)) continue;
                let V = !1;
                pf(Q) && pf(oe) ? V = !vx(Q, oe) : V = Q !== oe, V ? Q != null ? Te(ge) : x.add(ge) : Q !== void 0 && x.has(ge) ? Te(ge) : j.protectedKeys[ge] = !0
            }
            j.prevProp = R, j.prevResolvedValues = ue, j.isActive && (E = { ...E,
                ...ue
            }), i && t.blockInitialAnimation && (I = !1), I && (!(W && Y) || J) && y.push(...de.map(ge => ({
                animation: ge,
                options: {
                    type: k
                }
            })))
        }
        if (x.size) {
            const S = {};
            x.forEach(k => {
                const j = t.getBaseTarget(k),
                    R = t.getValue(k);
                R && (R.liveStyle = !0), S[k] = j ? ? null
            }), y.push({
                animation: S
            })
        }
        let b = !!y.length;
        return i && (p.initial === !1 || p.initial === p.animate) && !t.manuallyAnimateOnMount && (b = !1), i = !1, b ? e(y) : Promise.resolve()
    }

    function d(h, p) {
        var g;
        if (r[h].isActive === p) return Promise.resolve();
        (g = t.variantChildren) === null || g === void 0 || g.forEach(x => {
            var E;
            return (E = x.animationState) === null || E === void 0 ? void 0 : E.setActive(h, p)
        }), r[h].isActive = p;
        const y = u(h);
        for (const x in r) r[x].protectedKeys = {};
        return y
    }
    return {
        animateChanges: u,
        setActive: d,
        setAnimateFunction: l,
        getState: () => r,
        reset: () => {
            r = h0(), i = !0
        }
    }
}

function p4(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !vx(e, t) : !1
}

function ts(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function h0() {
    return {
        animate: ts(!0),
        whileInView: ts(),
        whileHover: ts(),
        whileTap: ts(),
        whileDrag: ts(),
        whileFocus: ts(),
        exit: ts()
    }
}
class zr {
    constructor(e) {
        this.isMounted = !1, this.node = e
    }
    update() {}
}
class m4 extends zr {
    constructor(e) {
        super(e), e.animationState || (e.animationState = h4(e))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: e
        } = this.node.getProps();
        uu(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: e
        } = this.node.getProps(), {
            animate: r
        } = this.node.prevProps || {};
        e !== r && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let g4 = 0;
class y4 extends zr {
    constructor() {
        super(...arguments), this.id = g4++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: e,
            onExitComplete: r
        } = this.node.presenceContext, {
            isPresent: i
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i) return;
        const a = this.node.animationState.setActive("exit", !e);
        r && !e && a.then(() => r(this.id))
    }
    mount() {
        const {
            register: e
        } = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const v4 = {
    animation: {
        Feature: m4
    },
    exit: {
        Feature: y4
    }
};

function Wo(t, e, r, i = {
    passive: !0
}) {
    return t.addEventListener(e, r, i), () => t.removeEventListener(e, r)
}

function ia(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const w4 = t => e => xh(e) && t(e, ia(e));

function jo(t, e, r, i) {
    return Wo(t, e, w4(r), i)
}
const p0 = (t, e) => Math.abs(t - e);

function x4(t, e) {
    const r = p0(t.x, e.x),
        i = p0(t.y, e.y);
    return Math.sqrt(r ** 2 + i ** 2)
}
class o1 {
    constructor(e, r, {
        transformPagePoint: i,
        contextWindow: a,
        dragSnapToOrigin: l = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const y = Md(this.lastMoveEventInfo, this.history),
                    x = this.startEvent !== null,
                    E = x4(y.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!x && !E) return;
                const {
                    point: T
                } = y, {
                    timestamp: b
                } = mt;
                this.history.push({ ...T,
                    timestamp: b
                });
                const {
                    onStart: S,
                    onMove: k
                } = this.handlers;
                x || (S && S(this.lastMoveEvent, y), this.startEvent = this.lastMoveEvent), k && k(this.lastMoveEvent, y)
            }, this.handlePointerMove = (y, x) => {
                this.lastMoveEvent = y, this.lastMoveEventInfo = Ad(x, this.transformPagePoint), Ve.update(this.updatePoint, !0)
            }, this.handlePointerUp = (y, x) => {
                this.end();
                const {
                    onEnd: E,
                    onSessionEnd: T,
                    resumeAnimation: b
                } = this.handlers;
                if (this.dragSnapToOrigin && b && b(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const S = Md(y.type === "pointercancel" ? this.lastMoveEventInfo : Ad(x, this.transformPagePoint), this.history);
                this.startEvent && E && E(y, S), T && T(y, S)
            }, !xh(e)) return;
        this.dragSnapToOrigin = l, this.handlers = r, this.transformPagePoint = i, this.contextWindow = a || window;
        const u = ia(e),
            d = Ad(u, this.transformPagePoint),
            {
                point: h
            } = d,
            {
                timestamp: p
            } = mt;
        this.history = [{ ...h,
            timestamp: p
        }];
        const {
            onSessionStart: g
        } = r;
        g && g(e, Md(d, this.history)), this.removeListeners = sa(jo(this.contextWindow, "pointermove", this.handlePointerMove), jo(this.contextWindow, "pointerup", this.handlePointerUp), jo(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(), Dr(this.updatePoint)
    }
}

function Ad(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function m0(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function Md({
    point: t
}, e) {
    return {
        point: t,
        delta: m0(t, a1(e)),
        offset: m0(t, S4(e)),
        velocity: b4(e, .1)
    }
}

function S4(t) {
    return t[0]
}

function a1(t) {
    return t[t.length - 1]
}

function b4(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let r = t.length - 1,
        i = null;
    const a = a1(t);
    for (; r >= 0 && (i = t[r], !(a.timestamp - i.timestamp > Yn(e)));) r--;
    if (!i) return {
        x: 0,
        y: 0
    };
    const l = Xn(a.timestamp - i.timestamp);
    if (l === 0) return {
        x: 0,
        y: 0
    };
    const u = {
        x: (a.x - i.x) / l,
        y: (a.y - i.y) / l
    };
    return u.x === 1 / 0 && (u.x = 0), u.y === 1 / 0 && (u.y = 0), u
}
const l1 = 1e-4,
    E4 = 1 - l1,
    k4 = 1 + l1,
    u1 = .01,
    _4 = 0 - u1,
    C4 = 0 + u1;

function Qt(t) {
    return t.max - t.min
}

function T4(t, e, r) {
    return Math.abs(t - e) <= r
}

function g0(t, e, r, i = .5) {
    t.origin = i, t.originPoint = He(e.min, e.max, t.origin), t.scale = Qt(r) / Qt(e), t.translate = He(r.min, r.max, t.origin) - t.originPoint, (t.scale >= E4 && t.scale <= k4 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= _4 && t.translate <= C4 || isNaN(t.translate)) && (t.translate = 0)
}

function Fo(t, e, r, i) {
    g0(t.x, e.x, r.x, i ? i.originX : void 0), g0(t.y, e.y, r.y, i ? i.originY : void 0)
}

function y0(t, e, r) {
    t.min = r.min + e.min, t.max = t.min + Qt(e)
}

function P4(t, e, r) {
    y0(t.x, e.x, r.x), y0(t.y, e.y, r.y)
}

function v0(t, e, r) {
    t.min = e.min - r.min, t.max = t.min + Qt(e)
}

function No(t, e, r) {
    v0(t.x, e.x, r.x), v0(t.y, e.y, r.y)
}

function R4(t, {
    min: e,
    max: r
}, i) {
    return e !== void 0 && t < e ? t = i ? He(e, t, i.min) : Math.max(t, e) : r !== void 0 && t > r && (t = i ? He(r, t, i.max) : Math.min(t, r)), t
}

function w0(t, e, r) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
    }
}

function A4(t, {
    top: e,
    left: r,
    bottom: i,
    right: a
}) {
    return {
        x: w0(t.x, r, a),
        y: w0(t.y, e, i)
    }
}

function x0(t, e) {
    let r = e.min - t.min,
        i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([r, i] = [i, r]), {
        min: r,
        max: i
    }
}

function M4(t, e) {
    return {
        x: x0(t.x, e.x),
        y: x0(t.y, e.y)
    }
}

function O4(t, e) {
    let r = .5;
    const i = Qt(t),
        a = Qt(e);
    return a > i ? r = vi(e.min, e.max - i, t.min) : i > a && (r = vi(t.min, t.max - a, e.min)), Zn(0, 1, r)
}

function j4(t, e) {
    const r = {};
    return e.min !== void 0 && (r.min = e.min - t.min), e.max !== void 0 && (r.max = e.max - t.min), r
}
const _f = .35;

function F4(t = _f) {
    return t === !1 ? t = 0 : t === !0 && (t = _f), {
        x: S0(t, "left", "right"),
        y: S0(t, "top", "bottom")
    }
}

function S0(t, e, r) {
    return {
        min: b0(t, e),
        max: b0(t, r)
    }
}

function b0(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const E0 = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    ni = () => ({
        x: E0(),
        y: E0()
    }),
    k0 = () => ({
        min: 0,
        max: 0
    }),
    Je = () => ({
        x: k0(),
        y: k0()
    });

function nn(t) {
    return [t("x"), t("y")]
}

function c1({
    top: t,
    left: e,
    right: r,
    bottom: i
}) {
    return {
        x: {
            min: e,
            max: r
        },
        y: {
            min: t,
            max: i
        }
    }
}

function N4({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function L4(t, e) {
    if (!e) return t;
    const r = e({
            x: t.left,
            y: t.top
        }),
        i = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: r.y,
        left: r.x,
        bottom: i.y,
        right: i.x
    }
}

function Od(t) {
    return t === void 0 || t === 1
}

function Cf({
    scale: t,
    scaleX: e,
    scaleY: r
}) {
    return !Od(t) || !Od(e) || !Od(r)
}

function ns(t) {
    return Cf(t) || d1(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function d1(t) {
    return _0(t.x) || _0(t.y)
}

function _0(t) {
    return t && t !== "0%"
}

function Xl(t, e, r) {
    const i = t - r,
        a = e * i;
    return r + a
}

function C0(t, e, r, i, a) {
    return a !== void 0 && (t = Xl(t, a, i)), Xl(t, r, i) + e
}

function Tf(t, e = 0, r = 1, i, a) {
    t.min = C0(t.min, e, r, i, a), t.max = C0(t.max, e, r, i, a)
}

function f1(t, {
    x: e,
    y: r
}) {
    Tf(t.x, e.translate, e.scale, e.originPoint), Tf(t.y, r.translate, r.scale, r.originPoint)
}
const T0 = .999999999999,
    P0 = 1.0000000000001;

function D4(t, e, r, i = !1) {
    const a = r.length;
    if (!a) return;
    e.x = e.y = 1;
    let l, u;
    for (let d = 0; d < a; d++) {
        l = r[d], u = l.projectionDelta;
        const {
            visualElement: h
        } = l.options;
        h && h.props.style && h.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && si(t, {
            x: -l.scroll.offset.x,
            y: -l.scroll.offset.y
        }), u && (e.x *= u.x.scale, e.y *= u.y.scale, f1(t, u)), i && ns(l.latestValues) && si(t, l.latestValues))
    }
    e.x < P0 && e.x > T0 && (e.x = 1), e.y < P0 && e.y > T0 && (e.y = 1)
}

function ri(t, e) {
    t.min = t.min + e, t.max = t.max + e
}

function R0(t, e, r, i, a = .5) {
    const l = He(t.min, t.max, a);
    Tf(t, e, r, l, i)
}

function si(t, e) {
    R0(t.x, e.x, e.scaleX, e.scale, e.originX), R0(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function h1(t, e) {
    return c1(L4(t.getBoundingClientRect(), e))
}

function B4(t, e, r) {
    const i = h1(t, r),
        {
            scroll: a
        } = e;
    return a && (ri(i.x, a.offset.x), ri(i.y, a.offset.y)), i
}
const p1 = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null,
    I4 = new WeakMap;
class z4 {
    constructor(e) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Je(), this.visualElement = e
    }
    start(e, {
        snapToCursor: r = !1
    } = {}) {
        const {
            presenceContext: i
        } = this.visualElement;
        if (i && i.isPresent === !1) return;
        const a = g => {
                const {
                    dragSnapToOrigin: y
                } = this.getProps();
                y ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(ia(g).point)
            },
            l = (g, y) => {
                const {
                    drag: x,
                    dragPropagation: E,
                    onDragStart: T
                } = this.getProps();
                if (x && !E && (this.openDragLock && this.openDragLock(), this.openDragLock = OR(x), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), nn(S => {
                    let k = this.getAxisMotionValue(S).get() || 0;
                    if (An.test(k)) {
                        const {
                            projection: j
                        } = this.visualElement;
                        if (j && j.layout) {
                            const R = j.layout.layoutBox[S];
                            R && (k = Qt(R) * (parseFloat(k) / 100))
                        }
                    }
                    this.originPoint[S] = k
                }), T && Ve.postRender(() => T(g, y)), yf(this.visualElement, "transform");
                const {
                    animationState: b
                } = this.visualElement;
                b && b.setActive("whileDrag", !0)
            },
            u = (g, y) => {
                const {
                    dragPropagation: x,
                    dragDirectionLock: E,
                    onDirectionLock: T,
                    onDrag: b
                } = this.getProps();
                if (!x && !this.openDragLock) return;
                const {
                    offset: S
                } = y;
                if (E && this.currentDirection === null) {
                    this.currentDirection = V4(S), this.currentDirection !== null && T && T(this.currentDirection);
                    return
                }
                this.updateAxis("x", y.point, S), this.updateAxis("y", y.point, S), this.visualElement.render(), b && b(g, y)
            },
            d = (g, y) => this.stop(g, y),
            h = () => nn(g => {
                var y;
                return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
            }),
            {
                dragSnapToOrigin: p
            } = this.getProps();
        this.panSession = new o1(e, {
            onSessionStart: a,
            onStart: l,
            onMove: u,
            onSessionEnd: d,
            resumeAnimation: h
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: p,
            contextWindow: p1(this.visualElement)
        })
    }
    stop(e, r) {
        const i = this.isDragging;
        if (this.cancel(), !i) return;
        const {
            velocity: a
        } = r;
        this.startAnimation(a);
        const {
            onDragEnd: l
        } = this.getProps();
        l && Ve.postRender(() => l(e, r))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: e,
            animationState: r
        } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: i
        } = this.getProps();
        !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1)
    }
    updateAxis(e, r, i) {
        const {
            drag: a
        } = this.getProps();
        if (!i || !Cl(e, a, this.currentDirection)) return;
        const l = this.getAxisMotionValue(e);
        let u = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (u = R4(u, this.constraints[e], this.elastic[e])), l.set(u)
    }
    resolveConstraints() {
        var e;
        const {
            dragConstraints: r,
            dragElastic: i
        } = this.getProps(), a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, l = this.constraints;
        r && ei(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && a ? this.constraints = A4(a.layoutBox, r) : this.constraints = !1, this.elastic = F4(i), l !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && nn(u => {
            this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = j4(a.layoutBox[u], this.constraints[u]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: e,
            onMeasureDragConstraints: r
        } = this.getProps();
        if (!e || !ei(e)) return !1;
        const i = e.current,
            {
                projection: a
            } = this.visualElement;
        if (!a || !a.layout) return !1;
        const l = B4(i, a.root, this.visualElement.getTransformPagePoint());
        let u = M4(a.layout.layoutBox, l);
        if (r) {
            const d = r(N4(u));
            this.hasMutatedConstraints = !!d, d && (u = c1(d))
        }
        return u
    }
    startAnimation(e) {
        const {
            drag: r,
            dragMomentum: i,
            dragElastic: a,
            dragTransition: l,
            dragSnapToOrigin: u,
            onDragTransitionEnd: d
        } = this.getProps(), h = this.constraints || {}, p = nn(g => {
            if (!Cl(g, r, this.currentDirection)) return;
            let y = h && h[g] || {};
            u && (y = {
                min: 0,
                max: 0
            });
            const x = a ? 200 : 1e6,
                E = a ? 40 : 1e7,
                T = {
                    type: "inertia",
                    velocity: i ? e[g] : 0,
                    bounceStiffness: x,
                    bounceDamping: E,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...l,
                    ...y
                };
            return this.startAxisValueAnimation(g, T)
        });
        return Promise.all(p).then(d)
    }
    startAxisValueAnimation(e, r) {
        const i = this.getAxisMotionValue(e);
        return yf(this.visualElement, e), i.start(Oh(e, i, 0, r, this.visualElement, !1))
    }
    stopAnimation() {
        nn(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        nn(e => {
            var r;
            return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.pause()
        })
    }
    getAnimationState(e) {
        var r;
        return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.state
    }
    getAxisMotionValue(e) {
        const r = `_drag${e.toUpperCase()}`,
            i = this.visualElement.getProps(),
            a = i[r];
        return a || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        nn(r => {
            const {
                drag: i
            } = this.getProps();
            if (!Cl(r, i, this.currentDirection)) return;
            const {
                projection: a
            } = this.visualElement, l = this.getAxisMotionValue(r);
            if (a && a.layout) {
                const {
                    min: u,
                    max: d
                } = a.layout.layoutBox[r];
                l.set(e[r] - He(u, d, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: e,
            dragConstraints: r
        } = this.getProps(), {
            projection: i
        } = this.visualElement;
        if (!ei(r) || !i || !this.constraints) return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        nn(u => {
            const d = this.getAxisMotionValue(u);
            if (d && this.constraints !== !1) {
                const h = d.get();
                a[u] = O4({
                    min: h,
                    max: h
                }, this.constraints[u])
            }
        });
        const {
            transformTemplate: l
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = l ? l({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), nn(u => {
            if (!Cl(u, e, null)) return;
            const d = this.getAxisMotionValue(u),
                {
                    min: h,
                    max: p
                } = this.constraints[u];
            d.set(He(h, p, a[u]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        I4.set(this.visualElement, this);
        const e = this.visualElement.current,
            r = jo(e, "pointerdown", h => {
                const {
                    drag: p,
                    dragListener: g = !0
                } = this.getProps();
                p && g && this.start(h)
            }),
            i = () => {
                const {
                    dragConstraints: h
                } = this.getProps();
                ei(h) && h.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: a
            } = this.visualElement,
            l = a.addEventListener("measure", i);
        a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), Ve.read(i);
        const u = Wo(window, "resize", () => this.scalePositionWithinConstraints()),
            d = a.addEventListener("didUpdate", (({
                delta: h,
                hasLayoutChanged: p
            }) => {
                this.isDragging && p && (nn(g => {
                    const y = this.getAxisMotionValue(g);
                    y && (this.originPoint[g] += h[g].translate, y.set(y.get() + h[g].translate))
                }), this.visualElement.render())
            }));
        return () => {
            u(), r(), l(), d && d()
        }
    }
    getProps() {
        const e = this.visualElement.getProps(),
            {
                drag: r = !1,
                dragDirectionLock: i = !1,
                dragPropagation: a = !1,
                dragConstraints: l = !1,
                dragElastic: u = _f,
                dragMomentum: d = !0
            } = e;
        return { ...e,
            drag: r,
            dragDirectionLock: i,
            dragPropagation: a,
            dragConstraints: l,
            dragElastic: u,
            dragMomentum: d
        }
    }
}

function Cl(t, e, r) {
    return (e === !0 || e === t) && (r === null || r === t)
}

function V4(t, e = 10) {
    let r = null;
    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
}
class U4 extends zr {
    constructor(e) {
        super(e), this.removeGroupControls = Kt, this.removeListeners = Kt, this.controls = new z4(e)
    }
    mount() {
        const {
            dragControls: e
        } = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Kt
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const A0 = t => (e, r) => {
    t && Ve.postRender(() => t(e, r))
};
class $4 extends zr {
    constructor() {
        super(...arguments), this.removePointerDownListener = Kt
    }
    onPointerDown(e) {
        this.session = new o1(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: p1(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: e,
            onPanStart: r,
            onPan: i,
            onPanEnd: a
        } = this.node.getProps();
        return {
            onSessionStart: A0(e),
            onStart: A0(r),
            onMove: i,
            onEnd: (l, u) => {
                delete this.session, a && Ve.postRender(() => a(l, u))
            }
        }
    }
    mount() {
        this.removePointerDownListener = jo(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Il = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function M0(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const bo = {
        correct: (t, e) => {
            if (!e.target) return t;
            if (typeof t == "string")
                if (me.test(t)) t = parseFloat(t);
                else return t;
            const r = M0(t, e.target.x),
                i = M0(t, e.target.y);
            return `${r}% ${i}%`
        }
    },
    W4 = {
        correct: (t, {
            treeScale: e,
            projectionDelta: r
        }) => {
            const i = t,
                a = Br.parse(t);
            if (a.length > 5) return i;
            const l = Br.createTransformer(t),
                u = typeof a[0] != "number" ? 1 : 0,
                d = r.x.scale * e.x,
                h = r.y.scale * e.y;
            a[0 + u] /= d, a[1 + u] /= h;
            const p = He(d, h, .5);
            return typeof a[2 + u] == "number" && (a[2 + u] /= p), typeof a[3 + u] == "number" && (a[3 + u] /= p), l(a)
        }
    };
class q4 extends F.Component {
    componentDidMount() {
        const {
            visualElement: e,
            layoutGroup: r,
            switchLayoutGroup: i,
            layoutId: a
        } = this.props, {
            projection: l
        } = e;
        dR(H4), l && (r.group && r.group.add(l), i && i.register && a && i.register(l), l.root.didUpdate(), l.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), l.setOptions({ ...l.options,
            onExitComplete: () => this.safeToRemove()
        })), Il.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {
            layoutDependency: r,
            visualElement: i,
            drag: a,
            isPresent: l
        } = this.props, u = i.projection;
        return u && (u.isPresent = l, a || e.layoutDependency !== r || r === void 0 ? u.willUpdate() : this.safeToRemove(), e.isPresent !== l && (l ? u.promote() : u.relegate() || Ve.postRender(() => {
            const d = u.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: e
        } = this.props.visualElement;
        e && (e.root.didUpdate(), ah.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: e,
            layoutGroup: r,
            switchLayoutGroup: i
        } = this.props, {
            projection: a
        } = e;
        a && (a.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(a), i && i.deregister && i.deregister(a))
    }
    safeToRemove() {
        const {
            safeToRemove: e
        } = this.props;
        e && e()
    }
    render() {
        return null
    }
}

function m1(t) {
    const [e, r] = Xw(), i = F.useContext(Zf);
    return v.jsx(q4, { ...t,
        layoutGroup: i,
        switchLayoutGroup: F.useContext(ix),
        isPresent: e,
        safeToRemove: r
    })
}
const H4 = {
    borderRadius: { ...bo,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: bo,
    borderTopRightRadius: bo,
    borderBottomLeftRadius: bo,
    borderBottomRightRadius: bo,
    boxShadow: W4
};

function K4(t, e, r) {
    const i = Et(t) ? t : Uo(t);
    return i.start(Oh("", i, e, r)), i.animation
}

function Q4(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
const G4 = (t, e) => t.depth - e.depth;
class Y4 {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(e) {
        Sh(this.children, e), this.isDirty = !0
    }
    remove(e) {
        bh(this.children, e), this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(G4), this.isDirty = !1, this.children.forEach(e)
    }
}

function X4(t, e) {
    const r = Mn.now(),
        i = ({
            timestamp: a
        }) => {
            const l = a - r;
            l >= e && (Dr(i), t(l - e))
        };
    return Ve.read(i, !0), () => Dr(i)
}
const g1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    J4 = g1.length,
    O0 = t => typeof t == "string" ? parseFloat(t) : t,
    j0 = t => typeof t == "number" || me.test(t);

function Z4(t, e, r, i, a, l) {
    a ? (t.opacity = He(0, r.opacity !== void 0 ? r.opacity : 1, e3(i)), t.opacityExit = He(e.opacity !== void 0 ? e.opacity : 1, 0, t3(i))) : l && (t.opacity = He(e.opacity !== void 0 ? e.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, i));
    for (let u = 0; u < J4; u++) {
        const d = `border${g1[u]}Radius`;
        let h = F0(e, d),
            p = F0(r, d);
        if (h === void 0 && p === void 0) continue;
        h || (h = 0), p || (p = 0), h === 0 || p === 0 || j0(h) === j0(p) ? (t[d] = Math.max(He(O0(h), O0(p), i), 0), (An.test(p) || An.test(h)) && (t[d] += "%")) : t[d] = p
    }(e.rotate || r.rotate) && (t.rotate = He(e.rotate || 0, r.rotate || 0, i))
}

function F0(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const e3 = y1(0, .5, Nx),
    t3 = y1(.5, .95, Kt);

function y1(t, e, r) {
    return i => i < t ? 0 : i > e ? 1 : r(vi(t, e, i))
}

function N0(t, e) {
    t.min = e.min, t.max = e.max
}

function tn(t, e) {
    N0(t.x, e.x), N0(t.y, e.y)
}

function L0(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function D0(t, e, r, i, a) {
    return t -= e, t = Xl(t, 1 / r, i), a !== void 0 && (t = Xl(t, 1 / a, i)), t
}

function n3(t, e = 0, r = 1, i = .5, a, l = t, u = t) {
    if (An.test(e) && (e = parseFloat(e), e = He(u.min, u.max, e / 100) - u.min), typeof e != "number") return;
    let d = He(l.min, l.max, i);
    t === l && (d -= e), t.min = D0(t.min, e, r, d, a), t.max = D0(t.max, e, r, d, a)
}

function B0(t, e, [r, i, a], l, u) {
    n3(t, e[r], e[i], e[a], e.scale, l, u)
}
const r3 = ["x", "scaleX", "originX"],
    s3 = ["y", "scaleY", "originY"];

function I0(t, e, r, i) {
    B0(t.x, e, r3, r ? r.x : void 0, i ? i.x : void 0), B0(t.y, e, s3, r ? r.y : void 0, i ? i.y : void 0)
}

function z0(t) {
    return t.translate === 0 && t.scale === 1
}

function v1(t) {
    return z0(t.x) && z0(t.y)
}

function V0(t, e) {
    return t.min === e.min && t.max === e.max
}

function i3(t, e) {
    return V0(t.x, e.x) && V0(t.y, e.y)
}

function U0(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function w1(t, e) {
    return U0(t.x, e.x) && U0(t.y, e.y)
}

function $0(t) {
    return Qt(t.x) / Qt(t.y)
}

function W0(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class o3 {
    constructor() {
        this.members = []
    }
    add(e) {
        Sh(this.members, e), e.scheduleRender()
    }
    remove(e) {
        if (bh(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const r = this.members[this.members.length - 1];
            r && this.promote(r)
        }
    }
    relegate(e) {
        const r = this.members.findIndex(a => e === a);
        if (r === 0) return !1;
        let i;
        for (let a = r; a >= 0; a--) {
            const l = this.members[a];
            if (l.isPresent !== !1) {
                i = l;
                break
            }
        }
        return i ? (this.promote(i), !0) : !1
    }
    promote(e, r) {
        const i = this.lead;
        if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
            i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, r && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {
                crossfade: a
            } = e.options;
            a === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {
                options: r,
                resumingFrom: i
            } = e;
            r.onExitComplete && r.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function a3(t, e, r) {
    let i = "";
    const a = t.x.translate / e.x,
        l = t.y.translate / e.y,
        u = (r == null ? void 0 : r.z) || 0;
    if ((a || l || u) && (i = `translate3d(${a}px, ${l}px, ${u}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1/e.x}, ${1/e.y}) `), r) {
        const {
            transformPerspective: p,
            rotate: g,
            rotateX: y,
            rotateY: x,
            skewX: E,
            skewY: T
        } = r;
        p && (i = `perspective(${p}px) ${i}`), g && (i += `rotate(${g}deg) `), y && (i += `rotateX(${y}deg) `), x && (i += `rotateY(${x}deg) `), E && (i += `skewX(${E}deg) `), T && (i += `skewY(${T}deg) `)
    }
    const d = t.x.scale * e.x,
        h = t.y.scale * e.y;
    return (d !== 1 || h !== 1) && (i += `scale(${d}, ${h})`), i || "none"
}
const rs = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    Ro = typeof window < "u" && window.MotionDebug !== void 0,
    jd = ["", "X", "Y", "Z"],
    l3 = {
        visibility: "hidden"
    },
    q0 = 1e3;
let u3 = 0;

function Fd(t, e, r, i) {
    const {
        latestValues: a
    } = e;
    a[t] && (r[t] = a[t], e.setStaticValue(t, 0), i && (i[t] = 0))
}

function x1(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
    const {
        visualElement: e
    } = t.options;
    if (!e) return;
    const r = Px(e);
    if (window.MotionHasOptimisedAnimation(r, "transform")) {
        const {
            layout: a,
            layoutId: l
        } = t.options;
        window.MotionCancelOptimisedAnimation(r, "transform", Ve, !(a || l))
    }
    const {
        parent: i
    } = t;
    i && !i.hasCheckedOptimisedAppear && x1(i)
}

function S1({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: r,
    checkIsScrollRoot: i,
    resetTransform: a
}) {
    return class {
        constructor(u = {}, d = e == null ? void 0 : e()) {
            this.id = u3++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, Ro && (rs.totalNodes = rs.resolvedTargetDeltas = rs.recalculatedProjection = 0), this.nodes.forEach(f3), this.nodes.forEach(y3), this.nodes.forEach(v3), this.nodes.forEach(h3), Ro && window.MotionDebug.record(rs)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = u, this.root = d ? d.root || d : this, this.path = d ? [...d.path, d] : [], this.parent = d, this.depth = d ? d.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++) this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Y4)
        }
        addEventListener(u, d) {
            return this.eventHandlers.has(u) || this.eventHandlers.set(u, new Eh), this.eventHandlers.get(u).add(d)
        }
        notifyListeners(u, ...d) {
            const h = this.eventHandlers.get(u);
            h && h.notify(...d)
        }
        hasListeners(u) {
            return this.eventHandlers.has(u)
        }
        mount(u, d = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = Q4(u), this.instance = u;
            const {
                layoutId: h,
                layout: p,
                visualElement: g
            } = this.options;
            if (g && !g.current && g.mount(u), this.root.nodes.add(this), this.parent && this.parent.children.add(this), d && (p || h) && (this.isLayoutDirty = !0), t) {
                let y;
                const x = () => this.root.updateBlockedByResize = !1;
                t(u, () => {
                    this.root.updateBlockedByResize = !0, y && y(), y = X4(x, 250), Il.hasAnimatedSinceResize && (Il.hasAnimatedSinceResize = !1, this.nodes.forEach(K0))
                })
            }
            h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && g && (h || p) && this.addEventListener("didUpdate", ({
                delta: y,
                hasLayoutChanged: x,
                hasRelativeTargetChanged: E,
                layout: T
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const b = this.options.transition || g.getDefaultTransition() || E3,
                    {
                        onLayoutAnimationStart: S,
                        onLayoutAnimationComplete: k
                    } = g.getProps(),
                    j = !this.targetLayout || !w1(this.targetLayout, T) || E,
                    R = !x && E;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || R || x && (j || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(y, R);
                    const M = { ...yh(b, "layout"),
                        onPlay: S,
                        onComplete: k
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (M.delay = 0, M.type = !1), this.startAnimation(M)
                } else x || K0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = T
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const u = this.getStack();
            u && u.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Dr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(w3), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: u
            } = this.options;
            return u && u.getProps().transformTemplate
        }
        willUpdate(u = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && x1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0, y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1)
            }
            const {
                layoutId: d,
                layout: h
            } = this.options;
            if (d === void 0 && !h) return;
            const p = this.getTransformTemplate();
            this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0, this.updateSnapshot(), u && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(H0);
                return
            }
            this.isUpdating || this.nodes.forEach(m3), this.isUpdating = !1, this.nodes.forEach(g3), this.nodes.forEach(c3), this.nodes.forEach(d3), this.clearAllSnapshots();
            const d = Mn.now();
            mt.delta = Zn(0, 1e3 / 60, d - mt.timestamp), mt.timestamp = d, mt.isProcessing = !0, kd.update.process(mt), kd.preRender.process(mt), kd.render.process(mt), mt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, ah.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(p3), this.sharedNodes.forEach(x3)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ve.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ve.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
            const u = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Je(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: d
            } = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, u ? u.layoutBox : void 0)
        }
        updateScroll(u = "measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === u && (d = !1), d) {
                const h = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: u,
                    isRoot: h,
                    offset: r(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!a) return;
            const u = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                d = this.projectionDelta && !v1(this.projectionDelta),
                h = this.getTransformTemplate(),
                p = h ? h(this.latestValues, "") : void 0,
                g = p !== this.prevTransformTemplateValue;
            u && (d || ns(this.latestValues) || g) && (a(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(u = !0) {
            const d = this.measurePageBox();
            let h = this.removeElementScroll(d);
            return u && (h = this.removeTransform(h)), k3(h), {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {
                visualElement: d
            } = this.options;
            if (!d) return Je();
            const h = d.measureViewportBox();
            if (!(((u = this.scroll) === null || u === void 0 ? void 0 : u.wasRoot) || this.path.some(_3))) {
                const {
                    scroll: g
                } = this.root;
                g && (ri(h.x, g.offset.x), ri(h.y, g.offset.y))
            }
            return h
        }
        removeElementScroll(u) {
            var d;
            const h = Je();
            if (tn(h, u), !((d = this.scroll) === null || d === void 0) && d.wasRoot) return h;
            for (let p = 0; p < this.path.length; p++) {
                const g = this.path[p],
                    {
                        scroll: y,
                        options: x
                    } = g;
                g !== this.root && y && x.layoutScroll && (y.wasRoot && tn(h, u), ri(h.x, y.offset.x), ri(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(u, d = !1) {
            const h = Je();
            tn(h, u);
            for (let p = 0; p < this.path.length; p++) {
                const g = this.path[p];
                !d && g.options.layoutScroll && g.scroll && g !== g.root && si(h, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }), ns(g.latestValues) && si(h, g.latestValues)
            }
            return ns(this.latestValues) && si(h, this.latestValues), h
        }
        removeTransform(u) {
            const d = Je();
            tn(d, u);
            for (let h = 0; h < this.path.length; h++) {
                const p = this.path[h];
                if (!p.instance || !ns(p.latestValues)) continue;
                Cf(p.latestValues) && p.updateSnapshot();
                const g = Je(),
                    y = p.measurePageBox();
                tn(g, y), I0(d, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, g)
            }
            return ns(this.latestValues) && I0(d, this.latestValues), d
        }
        setTargetDelta(u) {
            this.targetDelta = u, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(u) {
            this.options = { ...this.options,
                ...u,
                crossfade: u.crossfade !== void 0 ? u.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== mt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(u = !1) {
            var d;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== h;
            if (!(u || p && this.isSharedProjectionDirty || this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: y,
                layoutId: x
            } = this.options;
            if (!(!this.layout || !(y || x))) {
                if (this.resolvedRelativeTargetAt = mt.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const E = this.getClosestProjectingParent();
                    E && E.layout && this.animationProgress !== 1 ? (this.relativeParent = E, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Je(), this.relativeTargetOrigin = Je(), No(this.relativeTargetOrigin, this.layout.layoutBox, E.layout.layoutBox), tn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Je(), this.targetWithTransforms = Je()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), P4(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tn(this.target, this.layout.layoutBox), f1(this.target, this.targetDelta)) : tn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const E = this.getClosestProjectingParent();
                        E && !!E.resumingFrom == !!this.resumingFrom && !E.options.layoutScroll && E.target && this.animationProgress !== 1 ? (this.relativeParent = E, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Je(), this.relativeTargetOrigin = Je(), No(this.relativeTargetOrigin, this.target, E.target), tn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Ro && rs.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Cf(this.parent.latestValues) || d1(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var u;
            const d = this.getLead(),
                h = !!this.resumingFrom || this !== d;
            let p = !0;
            if ((this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty) && (p = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1), this.resolvedRelativeTargetAt === mt.timestamp && (p = !1), p) return;
            const {
                layout: g,
                layoutId: y
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || y)) return;
            tn(this.layoutCorrected, this.layout.layoutBox);
            const x = this.treeScale.x,
                E = this.treeScale.y;
            D4(this.layoutCorrected, this.treeScale, this.path, h), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = Je());
            const {
                target: T
            } = d;
            if (!T) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (L0(this.prevProjectionDelta.x, this.projectionDelta.x), L0(this.prevProjectionDelta.y, this.projectionDelta.y)), Fo(this.projectionDelta, this.layoutCorrected, T, this.latestValues), (this.treeScale.x !== x || this.treeScale.y !== E || !W0(this.projectionDelta.x, this.prevProjectionDelta.x) || !W0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", T)), Ro && rs.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(u = !0) {
            var d;
            if ((d = this.options.visualElement) === null || d === void 0 || d.scheduleRender(), u) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ni(), this.projectionDelta = ni(), this.projectionDeltaWithTransform = ni()
        }
        setAnimationOrigin(u, d = !1) {
            const h = this.snapshot,
                p = h ? h.latestValues : {},
                g = { ...this.latestValues
                },
                y = ni();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !d;
            const x = Je(),
                E = h ? h.source : void 0,
                T = this.layout ? this.layout.source : void 0,
                b = E !== T,
                S = this.getStack(),
                k = !S || S.members.length <= 1,
                j = !!(b && !k && this.options.crossfade === !0 && !this.path.some(b3));
            this.animationProgress = 0;
            let R;
            this.mixTargetDelta = M => {
                const B = M / 1e3;
                Q0(y.x, u.x, B), Q0(y.y, u.y, B), this.setTargetDelta(y), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (No(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox), S3(this.relativeTarget, this.relativeTargetOrigin, x, B), R && i3(this.relativeTarget, R) && (this.isProjectionDirty = !1), R || (R = Je()), tn(R, this.relativeTarget)), b && (this.animationValues = g, Z4(g, p, this.latestValues, B, j, k)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = B
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(u) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Dr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ve.update(() => {
                Il.hasAnimatedSinceResize = !0, this.currentAnimation = K4(0, q0, { ...u,
                    onUpdate: d => {
                        this.mixTargetDelta(d), u.onUpdate && u.onUpdate(d)
                    },
                    onComplete: () => {
                        u.onComplete && u.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const u = this.getStack();
            u && u.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(q0), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const u = this.getLead();
            let {
                targetWithTransforms: d,
                target: h,
                layout: p,
                latestValues: g
            } = u;
            if (!(!d || !h || !p)) {
                if (this !== u && this.layout && p && b1(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
                    h = this.target || Je();
                    const y = Qt(this.layout.layoutBox.x);
                    h.x.min = u.target.x.min, h.x.max = h.x.min + y;
                    const x = Qt(this.layout.layoutBox.y);
                    h.y.min = u.target.y.min, h.y.max = h.y.min + x
                }
                tn(d, h), si(d, g), Fo(this.projectionDeltaWithTransform, this.layoutCorrected, d, g)
            }
        }
        registerSharedNode(u, d) {
            this.sharedNodes.has(u) || this.sharedNodes.set(u, new o3), this.sharedNodes.get(u).add(d);
            const p = d.options.initialPromotionConfig;
            d.promote({
                transition: p ? p.transition : void 0,
                preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const u = this.getStack();
            return u ? u.lead === this : !0
        }
        getLead() {
            var u;
            const {
                layoutId: d
            } = this.options;
            return d ? ((u = this.getStack()) === null || u === void 0 ? void 0 : u.lead) || this : this
        }
        getPrevLead() {
            var u;
            const {
                layoutId: d
            } = this.options;
            return d ? (u = this.getStack()) === null || u === void 0 ? void 0 : u.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: u
            } = this.options;
            if (u) return this.root.sharedNodes.get(u)
        }
        promote({
            needsReset: u,
            transition: d,
            preserveFollowOpacity: h
        } = {}) {
            const p = this.getStack();
            p && p.promote(this, h), u && (this.projectionDelta = void 0, this.needsReset = !0), d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const u = this.getStack();
            return u ? u.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: u
            } = this.options;
            if (!u) return;
            let d = !1;
            const {
                latestValues: h
            } = u;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (d = !0), !d) return;
            const p = {};
            h.z && Fd("z", u, p, this.animationValues);
            for (let g = 0; g < jd.length; g++) Fd(`rotate${jd[g]}`, u, p, this.animationValues), Fd(`skew${jd[g]}`, u, p, this.animationValues);
            u.render();
            for (const g in p) u.setStaticValue(g, p[g]), this.animationValues && (this.animationValues[g] = p[g]);
            u.scheduleRender()
        }
        getProjectionStyles(u) {
            var d, h;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return l3;
            const p = {
                    visibility: ""
                },
                g = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, p.opacity = "", p.pointerEvents = Dl(u == null ? void 0 : u.pointerEvents) || "", p.transform = g ? g(this.latestValues, "") : "none", p;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const b = {};
                return this.options.layoutId && (b.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, b.pointerEvents = Dl(u == null ? void 0 : u.pointerEvents) || ""), this.hasProjected && !ns(this.latestValues) && (b.transform = g ? g({}, "") : "none", this.hasProjected = !1), b
            }
            const x = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(), p.transform = a3(this.projectionDeltaWithTransform, this.treeScale, x), g && (p.transform = g(x, p.transform));
            const {
                x: E,
                y: T
            } = this.projectionDelta;
            p.transformOrigin = `${E.origin*100}% ${T.origin*100}% 0`, y.animationValues ? p.opacity = y === this ? (h = (d = x.opacity) !== null && d !== void 0 ? d : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : p.opacity = y === this ? x.opacity !== void 0 ? x.opacity : "" : x.opacityExit !== void 0 ? x.opacityExit : 0;
            for (const b in Hl) {
                if (x[b] === void 0) continue;
                const {
                    correct: S,
                    applyTo: k
                } = Hl[b], j = p.transform === "none" ? x[b] : S(x[b], y);
                if (k) {
                    const R = k.length;
                    for (let M = 0; M < R; M++) p[k[M]] = j
                } else p[b] = j
            }
            return this.options.layoutId && (p.pointerEvents = y === this ? Dl(u == null ? void 0 : u.pointerEvents) || "" : "none"), p
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(u => {
                var d;
                return (d = u.currentAnimation) === null || d === void 0 ? void 0 : d.stop()
            }), this.root.nodes.forEach(H0), this.root.sharedNodes.clear()
        }
    }
}

function c3(t) {
    t.updateLayout()
}

function d3(t) {
    var e;
    const r = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
        const {
            layoutBox: i,
            measuredBox: a
        } = t.layout, {
            animationType: l
        } = t.options, u = r.source !== t.layout.source;
        l === "size" ? nn(y => {
            const x = u ? r.measuredBox[y] : r.layoutBox[y],
                E = Qt(x);
            x.min = i[y].min, x.max = x.min + E
        }) : b1(l, r.layoutBox, i) && nn(y => {
            const x = u ? r.measuredBox[y] : r.layoutBox[y],
                E = Qt(i[y]);
            x.max = x.min + E, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[y].max = t.relativeTarget[y].min + E)
        });
        const d = ni();
        Fo(d, i, r.layoutBox);
        const h = ni();
        u ? Fo(h, t.applyTransform(a, !0), r.measuredBox) : Fo(h, i, r.layoutBox);
        const p = !v1(d);
        let g = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {
                    snapshot: x,
                    layout: E
                } = y;
                if (x && E) {
                    const T = Je();
                    No(T, r.layoutBox, x.layoutBox);
                    const b = Je();
                    No(b, i, E.layoutBox), w1(T, b) || (g = !0), y.options.layoutRoot && (t.relativeTarget = b, t.relativeTargetOrigin = T, t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: r,
            delta: h,
            layoutDelta: d,
            hasLayoutChanged: p,
            hasRelativeTargetChanged: g
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: i
        } = t.options;
        i && i()
    }
    t.options.transition = void 0
}

function f3(t) {
    Ro && rs.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function h3(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function p3(t) {
    t.clearSnapshot()
}

function H0(t) {
    t.clearMeasurements()
}

function m3(t) {
    t.isLayoutDirty = !1
}

function g3(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function K0(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function y3(t) {
    t.resolveTargetDelta()
}

function v3(t) {
    t.calcProjection()
}

function w3(t) {
    t.resetSkewAndRotation()
}

function x3(t) {
    t.removeLeadSnapshot()
}

function Q0(t, e, r) {
    t.translate = He(e.translate, 0, r), t.scale = He(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
}

function G0(t, e, r, i) {
    t.min = He(e.min, r.min, i), t.max = He(e.max, r.max, i)
}

function S3(t, e, r, i) {
    G0(t.x, e.x, r.x, i), G0(t.y, e.y, r.y, i)
}

function b3(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const E3 = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Y0 = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    X0 = Y0("applewebkit/") && !Y0("chrome/") ? Math.round : Kt;

function J0(t) {
    t.min = X0(t.min), t.max = X0(t.max)
}

function k3(t) {
    J0(t.x), J0(t.y)
}

function b1(t, e, r) {
    return t === "position" || t === "preserve-aspect" && !T4($0(e), $0(r), .2)
}

function _3(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const C3 = S1({
        attachResizeListener: (t, e) => Wo(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Nd = {
        current: void 0
    },
    E1 = S1({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!Nd.current) {
                const t = new C3({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), Nd.current = t
            }
            return Nd.current
        },
        resetTransform: (t, e) => {
            t.style.transform = e !== void 0 ? e : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    }),
    T3 = {
        pan: {
            Feature: $4
        },
        drag: {
            Feature: U4,
            ProjectionNode: E1,
            MeasureLayout: m1
        }
    };

function Z0(t, e, r) {
    const {
        props: i
    } = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", r === "Start");
    const a = "onHover" + r,
        l = i[a];
    l && Ve.postRender(() => l(e, ia(e)))
}
class P3 extends zr {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = TR(e, r => (Z0(this.node, r, "Start"), i => Z0(this.node, i, "End"))))
    }
    unmount() {}
}
class R3 extends zr {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = sa(Wo(this.node.current, "focus", () => this.onFocus()), Wo(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function ev(t, e, r) {
    const {
        props: i
    } = t;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", r === "Start");
    const a = "onTap" + (r === "End" ? "" : r),
        l = i[a];
    l && Ve.postRender(() => l(e, ia(e)))
}
class A3 extends zr {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = MR(e, r => (ev(this.node, r, "Start"), (i, {
            success: a
        }) => ev(this.node, i, a ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Pf = new WeakMap,
    Ld = new WeakMap,
    M3 = t => {
        const e = Pf.get(t.target);
        e && e(t)
    },
    O3 = t => {
        t.forEach(M3)
    };

function j3({
    root: t,
    ...e
}) {
    const r = t || document;
    Ld.has(r) || Ld.set(r, {});
    const i = Ld.get(r),
        a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(O3, {
        root: t,
        ...e
    })), i[a]
}

function F3(t, e, r) {
    const i = j3(e);
    return Pf.set(t, r), i.observe(t), () => {
        Pf.delete(t), i.unobserve(t)
    }
}
const N3 = {
    some: 0,
    all: 1
};
class L3 extends zr {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: e = {}
        } = this.node.getProps(), {
            root: r,
            margin: i,
            amount: a = "some",
            once: l
        } = e, u = {
            root: r ? r.current : void 0,
            rootMargin: i,
            threshold: typeof a == "number" ? a : N3[a]
        }, d = h => {
            const {
                isIntersecting: p
            } = h;
            if (this.isInView === p || (this.isInView = p, l && !p && this.hasEnteredView)) return;
            p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p);
            const {
                onViewportEnter: g,
                onViewportLeave: y
            } = this.node.getProps(), x = p ? g : y;
            x && x(h)
        };
        return F3(this.node.current, u, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: e,
            prevProps: r
        } = this.node;
        ["amount", "margin", "root"].some(D3(e, r)) && this.startObserver()
    }
    unmount() {}
}

function D3({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return r => t[r] !== e[r]
}
const B3 = {
        inView: {
            Feature: L3
        },
        tap: {
            Feature: A3
        },
        focus: {
            Feature: R3
        },
        hover: {
            Feature: P3
        }
    },
    I3 = {
        layout: {
            ProjectionNode: E1,
            MeasureLayout: m1
        }
    },
    Rf = {
        current: null
    },
    k1 = {
        current: !1
    };

function z3() {
    if (k1.current = !0, !!nh)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => Rf.current = t.matches;
            t.addListener(e), e()
        } else Rf.current = !1
}
const V3 = [...Gx, bt, Br],
    U3 = t => V3.find(Qx(t)),
    tv = new WeakMap;

function $3(t, e, r) {
    for (const i in e) {
        const a = e[i],
            l = r[i];
        if (Et(a)) t.addValue(i, a);
        else if (Et(l)) t.addValue(i, Uo(a, {
            owner: t
        }));
        else if (l !== a)
            if (t.hasValue(i)) {
                const u = t.getValue(i);
                u.liveStyle === !0 ? u.jump(a) : u.hasAnimated || u.set(a)
            } else {
                const u = t.getStaticValue(i);
                t.addValue(i, Uo(u !== void 0 ? u : a, {
                    owner: t
                }))
            }
    }
    for (const i in r) e[i] === void 0 && t.removeValue(i);
    return e
}
const nv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class W3 {
    scrapeMotionValuesFromProps(e, r, i) {
        return {}
    }
    constructor({
        parent: e,
        props: r,
        presenceContext: i,
        reducedMotionConfig: a,
        blockInitialAnimation: l,
        visualState: u
    }, d = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Rh, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const E = Mn.now();
            this.renderScheduledAt < E && (this.renderScheduledAt = E, Ve.render(this.render, !1, !0))
        };
        const {
            latestValues: h,
            renderState: p,
            onUpdate: g
        } = u;
        this.onUpdate = g, this.latestValues = h, this.baseTarget = { ...h
        }, this.initialValues = r.initial ? { ...h
        } : {}, this.renderState = p, this.parent = e, this.props = r, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = a, this.options = d, this.blockInitialAnimation = !!l, this.isControllingVariants = cu(r), this.isVariantNode = rx(r), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
        const {
            willChange: y,
            ...x
        } = this.scrapeMotionValuesFromProps(r, {}, this);
        for (const E in x) {
            const T = x[E];
            h[E] !== void 0 && Et(T) && T.set(h[E], !1)
        }
    }
    mount(e) {
        this.current = e, tv.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, i) => this.bindToMotionValue(i, r)), k1.current || z3(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Rf.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        tv.delete(this.current), this.projection && this.projection.unmount(), Dr(this.notifyUpdate), Dr(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const e in this.events) this.events[e].clear();
        for (const e in this.features) {
            const r = this.features[e];
            r && (r.unmount(), r.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, r) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const i = _s.has(e),
            a = r.on("change", d => {
                this.latestValues[e] = d, this.props.onUpdate && Ve.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0)
            }),
            l = r.on("renderRequest", this.scheduleRender);
        let u;
        window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, e, r)), this.valueSubscriptions.set(e, () => {
            a(), l(), u && u(), r.owner && r.stop()
        })
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in wi) {
            const r = wi[e];
            if (!r) continue;
            const {
                isEnabled: i,
                Feature: a
            } = r;
            if (!this.features[e] && a && i(this.props) && (this.features[e] = new a(this)), this.features[e]) {
                const l = this.features[e];
                l.isMounted ? l.update() : (l.mount(), l.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Je()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, r) {
        this.latestValues[e] = r
    }
    update(e, r) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
        for (let i = 0; i < nv.length; i++) {
            const a = nv[i];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
            const l = "on" + a,
                u = e[l];
            u && (this.propEventSubscriptions[a] = this.on(a, u))
        }
        this.prevMotionValues = $3(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const r = this.getClosestVariantNode();
        if (r) return r.variantChildren && r.variantChildren.add(e), () => r.variantChildren.delete(e)
    }
    addValue(e, r) {
        const i = this.values.get(e);
        r !== i && (i && this.removeValue(e), this.bindToMotionValue(e, r), this.values.set(e, r), this.latestValues[e] = r.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const r = this.valueSubscriptions.get(e);
        r && (r(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, r) {
        if (this.props.values && this.props.values[e]) return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && r !== void 0 && (i = Uo(r === null ? void 0 : r, {
            owner: this
        }), this.addValue(e, i)), i
    }
    readValue(e, r) {
        var i;
        let a = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
        return a != null && (typeof a == "string" && (Hx(a) || Dx(a)) ? a = parseFloat(a) : !U3(a) && Br.test(r) && (a = $x(e, r)), this.setBaseTarget(e, Et(a) ? a.get() : a)), Et(a) ? a.get() : a
    }
    setBaseTarget(e, r) {
        this.baseTarget[e] = r
    }
    getBaseTarget(e) {
        var r;
        const {
            initial: i
        } = this.props;
        let a;
        if (typeof i == "string" || typeof i == "object") {
            const u = uh(this.props, i, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
            u && (a = u[e])
        }
        if (i && a !== void 0) return a;
        const l = this.getBaseTargetFromProps(this.props, e);
        return l !== void 0 && !Et(l) ? l : this.initialValues[e] !== void 0 && a === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, r) {
        return this.events[e] || (this.events[e] = new Eh), this.events[e].add(r)
    }
    notify(e, ...r) {
        this.events[e] && this.events[e].notify(...r)
    }
}
class _1 extends W3 {
    constructor() {
        super(...arguments), this.KeyframeResolver = Yx
    }
    sortInstanceNodePosition(e, r) {
        return e.compareDocumentPosition(r) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, r) {
        return e.style ? e.style[r] : void 0
    }
    removeValueFromRenderState(e, {
        vars: r,
        style: i
    }) {
        delete r[e], delete i[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: e
        } = this.props;
        Et(e) && (this.childSubscription = e.on("change", r => {
            this.current && (this.current.textContent = `${r}`)
        }))
    }
}

function q3(t) {
    return window.getComputedStyle(t)
}
class H3 extends _1 {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = fx
    }
    readValueFromInstance(e, r) {
        if (_s.has(r)) {
            const i = Ph(r);
            return i && i.default || 0
        } else {
            const i = q3(e),
                a = (ux(r) ? i.getPropertyValue(r) : i[r]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(e, {
        transformPagePoint: r
    }) {
        return h1(e, r)
    }
    build(e, r, i) {
        fh(e, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return gh(e, r, i)
    }
}
class K3 extends _1 {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Je
    }
    getBaseTargetFromProps(e, r) {
        return e[r]
    }
    readValueFromInstance(e, r) {
        if (_s.has(r)) {
            const i = Ph(r);
            return i && i.default || 0
        }
        return r = hx.has(r) ? r : oh(r), e.getAttribute(r)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return gx(e, r, i)
    }
    build(e, r, i) {
        hh(e, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, r, i, a) {
        px(e, r, i, a)
    }
    mount(e) {
        this.isSVGTag = mh(e.tagName), super.mount(e)
    }
}
const Q3 = (t, e) => lh(t) ? new K3(e) : new H3(e, {
        allowProjection: t !== F.Fragment
    }),
    G3 = xR({ ...v4,
        ...B3,
        ...T3,
        ...I3
    }, Q3),
    Mt = NP(G3),
    rv = [{
        label: "01 — Home",
        path: "/"
    }, {
        label: "02 — Collection",
        path: "/products"
    }, {
        label: "03 — Gallery",
        path: "/gallery"
    }, {
        label: "04 — Guide",
        path: "/guide"
    }, {
        label: "05 — Contact",
        path: "/contact"
    }];

function Pi() {
    const [t, e] = F.useState(!1), r = Ei();
    return v.jsxs("nav", {
        className: "fixed top-0 left-0 right-0 z-50",
        children: [v.jsx("div", {
            style: {
                backdropFilter: "blur(20px)",
                background: "rgba(10,10,11,0.7)",
                borderBottom: "1px solid rgba(30,41,59,0.5)"
            },
            children: v.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between",
                children: [v.jsxs(Rt, {
                    to: "/",
                    style: {
                        fontFamily: "Inter Tight, sans-serif",
                        fontWeight: 800,
                        fontSize: "1.1rem",
                        letterSpacing: "-0.02em",
                        color: "#E2E8F0"
                    },
                    children: ["LUMEN", v.jsx("span", {
                        style: {
                            color: "#FFB347"
                        },
                        children: "."
                    }), "HAUS"]
                }), v.jsx("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: rv.map(i => v.jsx(Rt, {
                        to: i.path,
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.7rem",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: r.pathname === i.path ? "#FFB347" : "rgba(226,232,240,0.5)",
                            transition: "color 0.2s",
                            textDecoration: "none"
                        },
                        children: i.label
                    }, i.path))
                }), v.jsx("button", {
                    className: "md:hidden",
                    style: {
                        color: "#E2E8F0",
                        background: "none",
                        border: "none",
                        cursor: "pointer"
                    },
                    onClick: () => e(!t),
                    children: t ? v.jsx(kv, {
                        size: 20
                    }) : v.jsx(eE, {
                        size: 20
                    })
                })]
            })
        }), v.jsx(hf, {
            children: t && v.jsx(Mt.div, {
                initial: {
                    opacity: 0,
                    x: "100%"
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                exit: {
                    opacity: 0,
                    x: "100%"
                },
                transition: {
                    type: "spring",
                    damping: 30,
                    stiffness: 300
                },
                style: {
                    position: "fixed",
                    inset: 0,
                    top: 64,
                    zIndex: 40,
                    backdropFilter: "blur(20px)",
                    background: "rgba(10,10,11,0.95)"
                },
                className: "md:hidden",
                children: v.jsx("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        padding: "2rem"
                    },
                    children: rv.map((i, a) => v.jsx(Mt.div, {
                        initial: {
                            opacity: 0,
                            x: 40
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: a * .08
                        },
                        children: v.jsx(Rt, {
                            to: i.path,
                            onClick: () => e(!1),
                            style: {
                                display: "block",
                                padding: "1rem 0",
                                fontFamily: "IBM Plex Mono, monospace",
                                fontSize: "0.75rem",
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                borderBottom: "1px solid rgba(30,41,59,0.3)",
                                color: r.pathname === i.path ? "#FFB347" : "#E2E8F0",
                                textDecoration: "none"
                            },
                            children: i.label
                        })
                    }, i.path))
                })
            })
        })]
    })
}
const Y3 = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80";

function X3() {
    return v.jsxs("section", {
        style: {
            position: "relative",
            height: "100vh",
            minHeight: 600,
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden"
        },
        children: [v.jsxs("div", {
            style: {
                position: "absolute",
                inset: 0
            },
            children: [v.jsx("img", {
                src: Y3,
                alt: "Luxury home at twilight",
                style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }
            }), v.jsx("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, #0A0A0B 30%, rgba(10,10,11,0.5) 70%, rgba(10,10,11,0.2) 100%)"
                }
            }), v.jsx("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, rgba(10,10,11,0.8) 0%, transparent 60%)"
                }
            })]
        }), v.jsxs("div", {
            style: {
                position: "relative",
                zIndex: 10,
                maxWidth: "80rem",
                margin: "0 auto",
                padding: "0 3rem 6rem",
                width: "100%"
            },
            children: [v.jsxs(Mt.div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1,
                    delay: .3
                },
                children: [v.jsx("p", {
                    style: {
                        fontFamily: "IBM Plex Mono, monospace",
                        fontSize: "0.7rem",
                        letterSpacing: "0.3em",
                        color: "#FFB347",
                        textTransform: "uppercase",
                        marginBottom: "1rem"
                    },
                    children: "Architectural Illumination"
                }), v.jsxs("h1", {
                    style: {
                        fontFamily: "Inter Tight, sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(2.5rem, 7vw, 5rem)",
                        letterSpacing: "-0.05em",
                        lineHeight: .95,
                        color: "#E2E8F0",
                        maxWidth: "36rem",
                        marginBottom: "1.5rem"
                    },
                    children: ["The First", v.jsx("br", {}), "Impression", v.jsx("br", {}), v.jsx("span", {
                        style: {
                            color: "#FFB347"
                        },
                        children: "at Dusk"
                    })]
                }), v.jsx("p", {
                    style: {
                        fontFamily: "IBM Plex Mono, monospace",
                        fontSize: "0.85rem",
                        color: "rgba(226,232,240,0.6)",
                        maxWidth: "28rem",
                        lineHeight: 1.7,
                        marginBottom: "2rem"
                    },
                    children: "Custom LED house numbers engineered for the modern estate. Where luminous precision meets architectural identity."
                }), v.jsxs("div", {
                    style: {
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap"
                    },
                    children: [v.jsx(Rt, {
                        to: "/products",
                        style: {
                            padding: "0.875rem 2rem",
                            background: "#FFB347",
                            color: "#0A0A0B",
                            fontFamily: "Inter Tight, sans-serif",
                            fontWeight: 600,
                            fontSize: "0.75rem",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            transition: "transform 0.2s, box-shadow 0.2s"
                        },
                        children: "Explore Collection"
                    }), v.jsx(Rt, {
                        to: "/contact",
                        style: {
                            padding: "0.875rem 2rem",
                            border: "1px solid rgba(226,232,240,0.2)",
                            color: "#E2E8F0",
                            fontFamily: "Inter Tight, sans-serif",
                            fontWeight: 500,
                            fontSize: "0.75rem",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            textDecoration: "none"
                        },
                        children: "Get a Quote"
                    })]
                })]
            }), v.jsxs(Mt.div, {
                style: {
                    position: "absolute",
                    bottom: "2rem",
                    right: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem"
                },
                animate: {
                    y: [0, 8, 0]
                },
                transition: {
                    repeat: 1 / 0,
                    duration: 2
                },
                children: [v.jsx("span", {
                    style: {
                        fontFamily: "IBM Plex Mono, monospace",
                        fontSize: "0.6rem",
                        color: "rgba(226,232,240,0.3)",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase"
                    },
                    children: "Scroll"
                }), v.jsx(qb, {
                    size: 14,
                    style: {
                        color: "rgba(226,232,240,0.3)"
                    }
                })]
            })]
        }), v.jsx("div", {
            style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "0.5px",
                background: "linear-gradient(90deg, transparent, rgba(30,41,59,0.8), transparent)"
            }
        })]
    })
}
const J3 = [{
    title: "LED Backlit Numbers",
    desc: "Floating illuminated digits with warm ambient glow. IP65 rated for all weather.",
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/3cefdceeb_Screenshot2026-05-05092931.png",
    specs: "2700K–6000K / IP65 / 316 Steel"
}, {
    title: "Wooden Address Plaques",
    desc: "Solid walnut & oak address plaques with raised metal numbers.",
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/af72d062e_Screenshot_20260510-155527.png",
    specs: "Solid Walnut / Self-Adhesive / Custom Text"
}, {
    title: "Illuminated Address Bars",
    desc: "Full address plates with LED edge-lit warm backlighting.",
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/706b24bf9_Screenshot_20260510-155933.png",
    specs: "Custom Address / Edge-Lit / Weather Sealed"
}, {
    title: "Metal Cutout Signs",
    desc: "Laser-cut steel address signs with street name integration.",
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/50c08a543_Screenshot2026-05-05093239.png",
    specs: "Powder Coated / Laser Cut / UV Resistant"
}];

function Z3() {
    return v.jsx("section", {
        style: {
            padding: "6rem 0"
        },
        children: v.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-12",
            children: [v.jsxs("div", {
                style: {
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    marginBottom: "4rem"
                },
                children: [v.jsxs("div", {
                    children: [v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.7rem",
                            letterSpacing: "0.3em",
                            color: "#FFB347",
                            textTransform: "uppercase",
                            marginBottom: "0.75rem"
                        },
                        children: "The Collection"
                    }), v.jsx("h2", {
                        style: {
                            fontFamily: "Inter Tight, sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                            letterSpacing: "-0.04em",
                            color: "#E2E8F0"
                        },
                        children: "Signature Series"
                    })]
                }), v.jsxs(Rt, {
                    to: "/products",
                    style: {
                        display: "none",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontFamily: "IBM Plex Mono, monospace",
                        fontSize: "0.7rem",
                        color: "rgba(226,232,240,0.5)",
                        textDecoration: "none",
                        letterSpacing: "0.1em"
                    },
                    className: "md:!flex",
                    children: ["View All ", v.jsx(Ev, {
                        size: 14
                    })]
                })]
            }), v.jsx("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1px",
                    background: "rgba(30,41,59,0.3)"
                },
                children: J3.map((t, e) => v.jsx(Mt.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: e * .1
                    },
                    children: v.jsxs(Rt, {
                        to: "/products",
                        style: {
                            display: "block",
                            background: "#0A0A0B",
                            padding: "2rem",
                            textDecoration: "none"
                        },
                        className: "group",
                        children: [v.jsx("div", {
                            style: {
                                aspectRatio: "4/3",
                                overflow: "hidden",
                                marginBottom: "1.5rem",
                                background: "rgba(30,41,59,0.2)"
                            },
                            children: v.jsx("img", {
                                src: t.image,
                                alt: t.title,
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.7s"
                                },
                                className: "group-hover:scale-105"
                            })
                        }), v.jsx("p", {
                            style: {
                                fontFamily: "IBM Plex Mono, monospace",
                                fontSize: "0.65rem",
                                letterSpacing: "0.15em",
                                color: "rgba(226,232,240,0.4)",
                                textTransform: "uppercase",
                                marginBottom: "0.5rem"
                            },
                            children: t.specs
                        }), v.jsx("h3", {
                            style: {
                                fontFamily: "Inter Tight, sans-serif",
                                fontWeight: 600,
                                fontSize: "1.1rem",
                                letterSpacing: "-0.02em",
                                color: "#E2E8F0",
                                marginBottom: "0.5rem",
                                transition: "color 0.2s"
                            },
                            className: "group-hover:!text-[#FFB347]",
                            children: t.title
                        }), v.jsx("p", {
                            style: {
                                fontFamily: "IBM Plex Mono, monospace",
                                fontSize: "0.75rem",
                                color: "rgba(226,232,240,0.5)",
                                lineHeight: 1.7
                            },
                            children: t.desc
                        })]
                    })
                }, t.title))
            })]
        })
    })
}
const eM = [{
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/a3650f659_Screenshot2026-05-05094104.png",
    style: "Modernist",
    finish: "Cool White",
    wide: !0
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/d6cda69ce_Screenshot2026-05-05092738.png",
    style: "Heritage",
    finish: "Brushed Gold"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/0bf48a983_Screenshot2026-05-05094121.png",
    style: "Industrial",
    finish: "Oxide Copper"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/51a4331bf_Screenshot2026-05-05093517.png",
    style: "Minimal",
    finish: "Brushed Silver"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/26ef7a186_Screenshot2026-05-05093319.png",
    style: "Contemporary",
    finish: "Matte Black"
}];

function tM() {
    return v.jsx("section", {
        style: {
            padding: "6rem 0",
            borderTop: "1px solid rgba(30,41,59,0.3)"
        },
        children: v.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-12",
            children: [v.jsxs("div", {
                style: {
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    marginBottom: "4rem"
                },
                children: [v.jsxs("div", {
                    children: [v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.7rem",
                            letterSpacing: "0.3em",
                            color: "#FFB347",
                            textTransform: "uppercase",
                            marginBottom: "0.75rem"
                        },
                        children: "Installations"
                    }), v.jsx("h2", {
                        style: {
                            fontFamily: "Inter Tight, sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                            letterSpacing: "-0.04em",
                            color: "#E2E8F0"
                        },
                        children: "In the Field"
                    })]
                }), v.jsxs(Rt, {
                    to: "/gallery",
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontFamily: "IBM Plex Mono, monospace",
                        fontSize: "0.7rem",
                        color: "rgba(226,232,240,0.5)",
                        textDecoration: "none",
                        letterSpacing: "0.1em"
                    },
                    children: ["Full Gallery ", v.jsx(Ev, {
                        size: 14
                    })]
                })]
            }), v.jsx("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridAutoRows: "240px",
                    gap: "2px"
                },
                children: eM.map((t, e) => v.jsxs(Mt.div, {
                    style: {
                        position: "relative",
                        overflow: "hidden",
                        cursor: "pointer",
                        gridColumn: t.wide ? "span 2" : "span 1"
                    },
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: e * .08
                    },
                    className: "group",
                    children: [v.jsx("img", {
                        src: t.image,
                        alt: t.style,
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.7s"
                        },
                        className: "group-hover:scale-105"
                    }), v.jsx("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to top, rgba(10,10,11,0.9), transparent)",
                            opacity: 0,
                            transition: "opacity 0.3s"
                        },
                        className: "group-hover:!opacity-100"
                    }), v.jsxs("div", {
                        style: {
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: "1.25rem",
                            transform: "translateY(1rem)",
                            opacity: 0,
                            transition: "all 0.3s"
                        },
                        className: "group-hover:!translate-y-0 group-hover:!opacity-100",
                        children: [v.jsx("p", {
                            style: {
                                fontFamily: "Inter Tight, sans-serif",
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                color: "#E2E8F0"
                            },
                            children: t.style
                        }), v.jsx("p", {
                            style: {
                                fontFamily: "IBM Plex Mono, monospace",
                                fontSize: "0.65rem",
                                color: "rgba(226,232,240,0.6)",
                                letterSpacing: "0.1em",
                                marginTop: "0.25rem"
                            },
                            children: t.finish
                        })]
                    })]
                }, e))
            })]
        })
    })
}
const nM = [{
    Icon: sE,
    num: "01",
    title: "Measure",
    desc: "We assess your entrance dimensions and surface material for a perfect fit."
}, {
    Icon: nE,
    num: "02",
    title: "Design",
    desc: "Choose your style, finish, and lighting temperature from our range."
}, {
    Icon: cE,
    num: "03",
    title: "Fabricate",
    desc: "Each piece is precision-milled to your exact specifications."
}, {
    Icon: lE,
    num: "04",
    title: "Install",
    desc: "Professional mounting with concealed wiring and full weatherproofing."
}];

function rM() {
    return v.jsx("section", {
        style: {
            padding: "6rem 0",
            borderTop: "1px solid rgba(30,41,59,0.3)"
        },
        children: v.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-12",
            children: [v.jsxs("div", {
                style: {
                    textAlign: "center",
                    marginBottom: "4rem"
                },
                children: [v.jsx("p", {
                    style: {
                        fontFamily: "IBM Plex Mono, monospace",
                        fontSize: "0.7rem",
                        letterSpacing: "0.3em",
                        color: "#FFB347",
                        textTransform: "uppercase",
                        marginBottom: "0.75rem"
                    },
                    children: "The Process"
                }), v.jsx("h2", {
                    style: {
                        fontFamily: "Inter Tight, sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        letterSpacing: "-0.04em",
                        color: "#E2E8F0"
                    },
                    children: "From Vision to Luminance"
                })]
            }), v.jsx("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1px",
                    background: "rgba(30,41,59,0.3)"
                },
                children: nM.map((t, e) => v.jsxs(Mt.div, {
                    style: {
                        background: "#0A0A0B",
                        padding: "2rem",
                        textAlign: "center"
                    },
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: e * .12
                    },
                    className: "group",
                    children: [v.jsx("div", {
                        style: {
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "3rem",
                            height: "3rem",
                            border: "1px solid rgba(30,41,59,0.5)",
                            marginBottom: "1.5rem",
                            transition: "border-color 0.3s, box-shadow 0.3s"
                        },
                        className: "group-hover:!border-[rgba(255,179,71,0.4)] group-hover:shadow-[0_0_20px_rgba(255,179,71,0.1)]",
                        children: v.jsx(t.Icon, {
                            size: 18,
                            style: {
                                color: "rgba(226,232,240,0.4)",
                                transition: "color 0.3s"
                            },
                            className: "group-hover:!text-[#FFB347]"
                        })
                    }), v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.65rem",
                            color: "#FFB347",
                            letterSpacing: "0.2em",
                            marginBottom: "0.5rem"
                        },
                        children: t.num
                    }), v.jsx("h3", {
                        style: {
                            fontFamily: "Inter Tight, sans-serif",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            letterSpacing: "-0.02em",
                            color: "#E2E8F0",
                            marginBottom: "0.5rem"
                        },
                        children: t.title
                    }), v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.75rem",
                            color: "rgba(226,232,240,0.5)",
                            lineHeight: 1.7
                        },
                        children: t.desc
                    })]
                }, t.num))
            })]
        })
    })
}

function Ri() {
    return v.jsxs("footer", {
        style: {
            borderTop: "1px solid rgba(30,41,59,0.5)"
        },
        children: [v.jsx("div", {
            style: {
                borderBottom: "1px solid rgba(30,41,59,0.3)"
            },
            children: v.jsx("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-8",
                children: [{
                    label: "IP65",
                    desc: "Weatherproof Rating"
                }, {
                    label: "CRI 90+",
                    desc: "Premium LED Optics"
                }, {
                    label: "316 Grade",
                    desc: "Marine Steel Construction"
                }].map(t => v.jsxs("div", {
                    className: "text-center",
                    children: [v.jsx("p", {
                        style: {
                            fontFamily: "Inter Tight, sans-serif",
                            fontWeight: 800,
                            fontSize: "2.5rem",
                            letterSpacing: "-0.04em",
                            color: "#E2E8F0"
                        },
                        children: t.label
                    }), v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.7rem",
                            color: "rgba(226,232,240,0.4)",
                            marginTop: "0.5rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase"
                        },
                        children: t.desc
                    })]
                }, t.label))
            })
        }), v.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-12 py-16 text-center",
            children: [v.jsx("p", {
                style: {
                    fontFamily: "Inter Tight, sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(1.5rem, 4vw, 3rem)",
                    color: "#E2E8F0",
                    letterSpacing: "-0.02em",
                    marginBottom: "2rem"
                },
                children: "Ready to illuminate your threshold?"
            }), v.jsx(Rt, {
                to: "/contact",
                style: {
                    display: "inline-block",
                    padding: "1rem 2.5rem",
                    background: "#FFB347",
                    color: "#0A0A0B",
                    fontFamily: "Inter Tight, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    cursor: "pointer"
                },
                children: "Start Your Project"
            })]
        }), v.jsxs("div", {
            style: {
                borderTop: "1px solid rgba(30,41,59,0.3)"
            },
            children: [v.jsx("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-8",
                children: [{
                    heading: "Products",
                    links: [{
                        label: "LED Backlit",
                        to: "/products"
                    }, {
                        label: "Wooden Plaques",
                        to: "/products"
                    }, {
                        label: "Metal Cutouts",
                        to: "/products"
                    }]
                }, {
                    heading: "Resources",
                    links: [{
                        label: "Installation Gallery",
                        to: "/gallery"
                    }, {
                        label: "Design Consultation",
                        to: "/contact"
                    }]
                }, {
                    heading: "Commercial",
                    links: [{
                        label: "Bulk Orders",
                        to: "/contact"
                    }, {
                        label: "Commercial Inquiries",
                        to: "/contact"
                    }]
                }, {
                    heading: "Company",
                    links: [{
                        label: "About Lumen Haus",
                        to: "/"
                    }, {
                        label: "Privacy Policy",
                        to: "/"
                    }]
                }].map(t => v.jsxs("div", {
                    children: [v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.65rem",
                            color: "rgba(226,232,240,0.4)",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            marginBottom: "1rem"
                        },
                        children: t.heading
                    }), v.jsx("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem"
                        },
                        children: t.links.map(e => v.jsx(Rt, {
                            to: e.to,
                            style: {
                                fontFamily: "IBM Plex Mono, monospace",
                                fontSize: "0.7rem",
                                color: "rgba(226,232,240,0.6)",
                                textDecoration: "none"
                            },
                            children: e.label
                        }, e.label))
                    })]
                }, t.heading))
            }), v.jsx("div", {
                style: {
                    borderTop: "1px solid rgba(30,41,59,0.2)",
                    padding: "1.5rem 3rem",
                    textAlign: "center"
                },
                children: v.jsx("p", {
                    style: {
                        fontFamily: "IBM Plex Mono, monospace",
                        fontSize: "0.65rem",
                        color: "rgba(226,232,240,0.3)",
                        letterSpacing: "0.15em"
                    },
                    children: "© 2026 LUMEN.HAUS — Architectural Illumination Systems"
                })
            })]
        })]
    })
}

function sM() {
    return v.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [v.jsx(Pi, {}), v.jsx(X3, {}), v.jsx(Z3, {}), v.jsx(rM, {}), v.jsx(tM, {}), v.jsx(Ri, {})]
    })
}
const sv = [{
        value: "led_backlit",
        label: "LED Backlit Numbers",
        basePrice: 89,
        priceNote: "per digit"
    }, {
        value: "wooden_plaque",
        label: "Wooden Address Plaque",
        basePrice: 149,
        priceNote: "per plaque"
    }, {
        value: "metal_cutout",
        label: "Metal Cutout Sign",
        basePrice: 175,
        priceNote: "per sign"
    }, {
        value: "acrylic_glass",
        label: "Acrylic & Glass Plaque",
        basePrice: 129,
        priceNote: "per plaque"
    }, {
        value: "planter_sign",
        label: "Planter Sign",
        basePrice: 220,
        priceNote: "per unit"
    }, {
        value: "vertical_plaque",
        label: "Vertical Plaque",
        basePrice: 189,
        priceNote: "per plaque"
    }, {
        value: "address_bar",
        label: "Illuminated Address Bar",
        basePrice: 249,
        priceNote: "per bar"
    }],
    iv = [{
        value: "brushed_steel",
        label: "Brushed Stainless",
        multiplier: 1,
        tag: "Standard"
    }, {
        value: "matte_black",
        label: "Matte Black",
        multiplier: 1,
        tag: "Standard"
    }, {
        value: "antique_bronze",
        label: "Antique Bronze",
        multiplier: 1.15,
        tag: "+15%"
    }, {
        value: "brushed_gold",
        label: "Brushed Gold",
        multiplier: 1.25,
        tag: "+25%"
    }, {
        value: "natural_walnut",
        label: "Natural Walnut",
        multiplier: 1.1,
        tag: "+10%"
    }, {
        value: "white_acrylic",
        label: "White Acrylic",
        multiplier: .9,
        tag: "−10%"
    }],
    iM = [2, 3, 4, 5, 6];

function oM() {
    const [t, e] = F.useState(null), [r, i] = F.useState(null), [a, l] = F.useState(3), u = sv.find(x => x.value === t), d = iv.find(x => x.value === r), h = (u == null ? void 0 : u.priceNote) === "per digit", p = u ? u.basePrice * (h ? a : 1) : 0, g = d ? Math.round(p * d.multiplier) : p, y = t && r;
    return v.jsxs("div", {
        style: {
            background: "rgba(30,41,59,0.08)",
            border: "1px solid rgba(30,41,59,0.5)",
            padding: "2.5rem",
            marginTop: "4rem",
            marginBottom: "2rem"
        },
        children: [v.jsxs("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid rgba(30,41,59,0.3)"
            },
            children: [v.jsx(Yb, {
                size: 18,
                color: "#FFB347"
            }), v.jsxs("div", {
                children: [v.jsx("h2", {
                    style: {
                        fontFamily: "Inter Tight, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        letterSpacing: "-0.02em",
                        color: "#E2E8F0",
                        margin: 0
                    },
                    children: "Price Estimator"
                }), v.jsx("p", {
                    style: {
                        fontFamily: "IBM Plex Mono, monospace",
                        fontSize: "0.65rem",
                        color: "rgba(226,232,240,0.35)",
                        letterSpacing: "0.1em",
                        margin: 0,
                        marginTop: "0.2rem"
                    },
                    children: "Instant estimate — no obligation"
                })]
            })]
        }), v.jsxs("div", {
            style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2.5rem"
            },
            className: "grid-cols-1 lg:!grid-cols-2",
            children: [v.jsxs("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.75rem"
                },
                children: [v.jsxs("div", {
                    children: [v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.65rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "rgba(226,232,240,0.4)",
                            marginBottom: "0.75rem"
                        },
                        children: "01 — Choose Style"
                    }), v.jsx("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.4rem"
                        },
                        children: sv.map(x => v.jsxs("button", {
                            onClick: () => e(x.value),
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "0.6rem 0.9rem",
                                fontFamily: "IBM Plex Mono, monospace",
                                fontSize: "0.72rem",
                                border: t === x.value ? "1px solid #FFB347" : "1px solid rgba(30,41,59,0.4)",
                                background: t === x.value ? "rgba(255,179,71,0.08)" : "transparent",
                                color: t === x.value ? "#FFB347" : "rgba(226,232,240,0.6)",
                                cursor: "pointer",
                                textAlign: "left",
                                transition: "all 0.15s"
                            },
                            children: [v.jsx("span", {
                                children: x.label
                            }), v.jsxs("span", {
                                style: {
                                    color: t === x.value ? "#FFB347" : "rgba(226,232,240,0.3)",
                                    fontSize: "0.65rem"
                                },
                                children: ["from $", x.basePrice]
                            })]
                        }, x.value))
                    })]
                }), v.jsxs("div", {
                    children: [v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.65rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "rgba(226,232,240,0.4)",
                            marginBottom: "0.75rem"
                        },
                        children: "02 — Choose Finish"
                    }), v.jsx("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "0.4rem"
                        },
                        children: iv.map(x => v.jsxs("button", {
                            onClick: () => i(x.value),
                            style: {
                                padding: "0.55rem 0.75rem",
                                fontFamily: "IBM Plex Mono, monospace",
                                fontSize: "0.68rem",
                                border: r === x.value ? "1px solid #FFB347" : "1px solid rgba(30,41,59,0.4)",
                                background: r === x.value ? "rgba(255,179,71,0.08)" : "transparent",
                                color: r === x.value ? "#FFB347" : "rgba(226,232,240,0.6)",
                                cursor: "pointer",
                                textAlign: "left",
                                transition: "all 0.15s",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            children: [v.jsx("span", {
                                children: x.label
                            }), v.jsx("span", {
                                style: {
                                    fontSize: "0.58rem",
                                    opacity: .6
                                },
                                children: x.tag
                            })]
                        }, x.value))
                    })]
                }), v.jsx(hf, {
                    children: h && v.jsxs(Mt.div, {
                        initial: {
                            opacity: 0,
                            height: 0
                        },
                        animate: {
                            opacity: 1,
                            height: "auto"
                        },
                        exit: {
                            opacity: 0,
                            height: 0
                        },
                        children: [v.jsx("p", {
                            style: {
                                fontFamily: "IBM Plex Mono, monospace",
                                fontSize: "0.65rem",
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: "rgba(226,232,240,0.4)",
                                marginBottom: "0.75rem"
                            },
                            children: "03 — Number of Digits"
                        }), v.jsx("div", {
                            style: {
                                display: "flex",
                                gap: "0.4rem"
                            },
                            children: iM.map(x => v.jsx("button", {
                                onClick: () => l(x),
                                style: {
                                    width: "2.5rem",
                                    height: "2.5rem",
                                    fontFamily: "Inter Tight, sans-serif",
                                    fontWeight: 700,
                                    fontSize: "0.9rem",
                                    border: a === x ? "1px solid #FFB347" : "1px solid rgba(30,41,59,0.4)",
                                    background: a === x ? "rgba(255,179,71,0.08)" : "transparent",
                                    color: a === x ? "#FFB347" : "rgba(226,232,240,0.6)",
                                    cursor: "pointer",
                                    transition: "all 0.15s"
                                },
                                children: x
                            }, x))
                        })]
                    })
                })]
            }), v.jsx("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                },
                children: v.jsx(hf, {
                    mode: "wait",
                    children: y ? v.jsxs(Mt.div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0
                        },
                        style: {
                            border: "1px solid rgba(255,179,71,0.25)",
                            padding: "2rem",
                            background: "rgba(255,179,71,0.04)"
                        },
                        children: [v.jsx("p", {
                            style: {
                                fontFamily: "IBM Plex Mono, monospace",
                                fontSize: "0.65rem",
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: "rgba(226,232,240,0.4)",
                                marginBottom: "1.5rem"
                            },
                            children: "Your Estimate"
                        }), v.jsxs("div", {
                            style: {
                                marginBottom: "1.5rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem"
                            },
                            children: [v.jsxs("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [v.jsx("span", {
                                    style: {
                                        fontFamily: "IBM Plex Mono, monospace",
                                        fontSize: "0.7rem",
                                        color: "rgba(226,232,240,0.4)"
                                    },
                                    children: "Style"
                                }), v.jsx("span", {
                                    style: {
                                        fontFamily: "IBM Plex Mono, monospace",
                                        fontSize: "0.7rem",
                                        color: "rgba(226,232,240,0.7)"
                                    },
                                    children: u == null ? void 0 : u.label
                                })]
                            }), v.jsxs("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [v.jsx("span", {
                                    style: {
                                        fontFamily: "IBM Plex Mono, monospace",
                                        fontSize: "0.7rem",
                                        color: "rgba(226,232,240,0.4)"
                                    },
                                    children: "Finish"
                                }), v.jsx("span", {
                                    style: {
                                        fontFamily: "IBM Plex Mono, monospace",
                                        fontSize: "0.7rem",
                                        color: "rgba(226,232,240,0.7)"
                                    },
                                    children: d == null ? void 0 : d.label
                                })]
                            }), h && v.jsxs("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [v.jsx("span", {
                                    style: {
                                        fontFamily: "IBM Plex Mono, monospace",
                                        fontSize: "0.7rem",
                                        color: "rgba(226,232,240,0.4)"
                                    },
                                    children: "Digits"
                                }), v.jsx("span", {
                                    style: {
                                        fontFamily: "IBM Plex Mono, monospace",
                                        fontSize: "0.7rem",
                                        color: "rgba(226,232,240,0.7)"
                                    },
                                    children: a
                                })]
                            })]
                        }), v.jsxs("div", {
                            style: {
                                borderTop: "1px solid rgba(30,41,59,0.4)",
                                paddingTop: "1.25rem",
                                marginBottom: "1.75rem"
                            },
                            children: [v.jsx("p", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.65rem",
                                    color: "rgba(226,232,240,0.35)",
                                    marginBottom: "0.4rem"
                                },
                                children: "Estimated total from"
                            }), v.jsxs("p", {
                                style: {
                                    fontFamily: "Inter Tight, sans-serif",
                                    fontWeight: 800,
                                    fontSize: "3rem",
                                    letterSpacing: "-0.05em",
                                    color: "#FFB347",
                                    lineHeight: 1
                                },
                                children: ["$", g]
                            }), v.jsx("p", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.6rem",
                                    color: "rgba(226,232,240,0.25)",
                                    marginTop: "0.4rem"
                                },
                                children: "Indicative price incl. standard hardware. Excludes installation."
                            })]
                        }), v.jsx(Rt, {
                            to: "/contact",
                            style: {
                                display: "block",
                                textAlign: "center",
                                padding: "0.875rem",
                                background: "#FFB347",
                                color: "#0A0A0B",
                                fontFamily: "Inter Tight, sans-serif",
                                fontWeight: 600,
                                fontSize: "0.75rem",
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                textDecoration: "none"
                            },
                            children: "Get a Formal Quote →"
                        })]
                    }, "result") : v.jsx(Mt.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        style: {
                            textAlign: "center",
                            padding: "3rem 1rem",
                            border: "1px dashed rgba(30,41,59,0.4)"
                        },
                        children: v.jsxs("p", {
                            style: {
                                fontFamily: "IBM Plex Mono, monospace",
                                fontSize: "0.75rem",
                                color: "rgba(226,232,240,0.25)",
                                lineHeight: 1.8
                            },
                            children: ["Select a style and finish", v.jsx("br", {}), "to see your estimate"]
                        })
                    }, "empty")
                })
            })]
        })]
    })
}

function aM({
    product: t
}) {
    var a;
    const e = t.images || [t.image_url],
        [r, i] = F.useState(0);
    return v.jsxs(Rt, {
        to: "/contact",
        style: {
            textDecoration: "none"
        },
        className: "group",
        children: [v.jsxs("div", {
            style: {
                position: "relative",
                aspectRatio: "4/3",
                overflow: "hidden",
                background: "rgba(30,41,59,0.2)",
                marginBottom: "1rem",
                border: "1px solid rgba(30,41,59,0.2)"
            },
            children: [v.jsx("img", {
                src: e[r],
                alt: t.name,
                style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.7s"
                },
                className: "group-hover:scale-105 opacity-100"
            }), e.length > 1 && v.jsx("div", {
                style: {
                    position: "absolute",
                    bottom: "0.6rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "0.35rem"
                },
                children: e.map((l, u) => v.jsx("button", {
                    onClick: d => {
                        d.preventDefault(), i(u)
                    },
                    style: {
                        width: u === r ? "1.4rem" : "0.45rem",
                        height: "0.45rem",
                        borderRadius: "9999px",
                        background: u === r ? "#FFB347" : "rgba(226,232,240,0.4)",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        transition: "all 0.2s"
                    }
                }, u))
            })]
        }), v.jsx("p", {
            style: {
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                color: "rgba(226,232,240,0.4)",
                textTransform: "uppercase",
                marginBottom: "0.4rem"
            },
            children: (a = t.category) == null ? void 0 : a.replace(/_/g, " ")
        }), v.jsx("h3", {
            style: {
                fontFamily: "Inter Tight, sans-serif",
                fontWeight: 600,
                fontSize: "1.1rem",
                letterSpacing: "-0.02em",
                color: "#E2E8F0",
                marginBottom: "0.4rem",
                transition: "color 0.2s"
            },
            className: "group-hover:!text-[#FFB347]",
            children: t.name
        }), v.jsx("p", {
            style: {
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "0.75rem",
                color: "rgba(226,232,240,0.5)",
                lineHeight: 1.6,
                marginBottom: "0.5rem"
            },
            children: t.description
        }), t.addon_line && v.jsx("p", {
            style: {
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "0.65rem",
                color: "rgba(255,179,71,0.7)",
                letterSpacing: "0.05em",
                marginBottom: "0.6rem",
                borderLeft: "2px solid rgba(255,179,71,0.4)",
                paddingLeft: "0.5rem"
            },
            children: "+ Add divider line between number & street name at checkout"
        }), v.jsxs("p", {
            style: {
                fontFamily: "Inter Tight, sans-serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#FFB347"
            },
            children: ["From $", t.base_price]
        })]
    })
}
const lM = [{
        value: "all",
        label: "All Styles"
    }, {
        value: "led_backlit",
        label: "LED Backlit"
    }, {
        value: "wooden_plaque",
        label: "Wooden Plaques"
    }, {
        value: "metal_cutout",
        label: "Metal Cutouts"
    }, {
        value: "acrylic_glass",
        label: "Acrylic & Glass"
    }, {
        value: "planter_sign",
        label: "Planter Signs"
    }, {
        value: "vertical_plaque",
        label: "Vertical Plaques"
    }, {
        value: "address_bar",
        label: "Address Bars"
    }],
    ov = [{
        id: "s1",
        name: "Backlit Halo Numbers",
        category: "led_backlit",
        base_price: 89,
        description: "Individual LED backlit metal numbers with warm halo glow effect. IP65 rated.",
        image_url: "https://media.base44.com/images/public/6a04505df8f07c3e6a4918fe/d862a6573_71JZNcTzqHL_AC_SL1500_.jpg",
        images: ["https://media.base44.com/images/public/6a04505df8f07c3e6a4918fe/d862a6573_71JZNcTzqHL_AC_SL1500_.jpg", "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/3cefdceeb_Screenshot2026-05-05092931.png"],
        addon_line: !0,
        specs: `Material: 316 Marine Steel
LED: 2700K Warm White
Size: 4"–12" per digit
Mount: Standoff / Flush`
    }, {
        id: "s2",
        name: "Cool White LED Numbers",
        category: "led_backlit",
        base_price: 95,
        description: "Contemporary backlit numbers with cool white 6000K lighting for modern homes.",
        image_url: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/a3650f659_Screenshot2026-05-05094104.png",
        specs: `Material: Aluminum
LED: 6000K Cool White
Size: 6"–18" per digit
Mount: Standoff`
    }, {
        id: "s3",
        name: "Day/Night Dual Mode",
        category: "led_backlit",
        base_price: 110,
        description: "Bold matte numbers by day, stunning backlit signage by night. Auto dusk-to-dawn sensor.",
        image_url: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/b3e7ccf3a_Screenshot2026-05-05094204.png",
        specs: `Material: Powder Coated Steel
LED: Auto-switching sensor
Size: 8"–20" per digit
Mount: Flush Wall`
    }, {
        id: "s4",
        name: "Walnut Address Plaque",
        category: "wooden_plaque",
        base_price: 149,
        description: "Solid walnut plaque with raised matte black 3D numbers. Personalized to your address.",
        image_url: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/af72d062e_Screenshot_20260510-155527.png",
        specs: `Material: Solid Black Walnut
Numbers: Powder Black Steel
Size: 30x16cm standard
Mount: Self-Adhesive / Screw`
    }, {
        id: "s5",
        name: "Two-Tone Wood & Black",
        category: "wooden_plaque",
        base_price: 165,
        description: "Walnut base with matte black backing for a dramatic double-layer effect.",
        image_url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        specs: `Material: Walnut + Powder Black
Numbers: 3D Raised Metal
Size: 40x16cm
Mount: Dual Screw`
    }, {
        id: "s6",
        name: "Diagonal Geometric Plaque",
        category: "wooden_plaque",
        base_price: 145,
        description: "Contemporary plaque with geometric diagonal wood grain reveal and raised numbers.",
        image_url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&q=80",
        specs: `Material: Engineered Wood + ABS
Numbers: Cut-out Letters
Size: 40x16cm
Mount: Screw`
    }, {
        id: "s7",
        name: "Brushed Gold on Matte Black",
        category: "metal_cutout",
        base_price: 195,
        description: "Luxury matte black plaque with brushed gold number cutouts and matching frame.",
        image_url: "https://media.base44.com/images/public/6a04505df8f07c3e6a4918fe/0fef14e66_2.jpg",
        specs: `Material: Powder Black + Gold PVD
Finish: Brushed Gold Frame
Size: Custom
Mount: Standoff Pins`
    }, {
        id: "s8",
        name: "Vertical Street Number",
        category: "metal_cutout",
        base_price: 175,
        description: "Vertical laser-cut steel sign with street name integration. Bold architectural statement.",
        image_url: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/d6cda69ce_Screenshot2026-05-05092738.png",
        specs: `Material: 3mm CNC Steel
Finish: Powder Black
Size: Custom vertical
Mount: 2x Screws`
    }, {
        id: "s9",
        name: "Acrylic Glass Plaque",
        category: "acrylic_glass",
        base_price: 129,
        description: "Curved brushed aluminum backing with black acrylic panel. Chrome standoff hardware.",
        image_url: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/50c08a543_Screenshot2026-05-05093239.png",
        specs: `Material: Acrylic + Brushed Aluminium
Finish: Chrome Standoffs
Size: Custom
Mount: 4x Chrome Bolts`
    }, {
        id: "s10",
        name: "Brushed Steel Vertical",
        category: "vertical_plaque",
        base_price: 189,
        description: "Tall vertical brushed stainless steel plaque with cut-through numbers.",
        image_url: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/f109edf51_Screenshot2026-05-05092617.png",
        specs: `Material: 316 Brushed Steel
Numbers: Cut-Through
Size: 15x45cm
Mount: Black Backing Frame`
    }, {
        id: "s11",
        name: "Patina Planter Sign",
        category: "planter_sign",
        base_price: 220,
        description: "Rustic corten steel plaque with built-in planter box and brushed gold numbers.",
        image_url: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/003fba7b5_Screenshot2026-05-05092653.png",
        specs: `Material: Corten Steel
Numbers: Brushed Gold Brass
Planter: 30x8cm trough
Mount: Wall Screw`
    }, {
        id: "s12",
        name: "Illuminated Address Bar",
        category: "address_bar",
        base_price: 249,
        description: "Full backlit address bar with number and street name on dark panel. Warm edge glow.",
        image_url: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/0bf48a983_Screenshot2026-05-05094121.png",
        specs: `Panel: Dark Acrylic
LED: 3000K Edge-Lit
Size: 25x15cm
Mount: Flush Wall`
    }, {
        id: "s13",
        name: "Solar Mailbox Numbers",
        category: "address_bar",
        base_price: 89,
        description: "Solar-powered LED numbers for mailbox posts. Auto-illuminates at dusk.",
        image_url: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/706b24bf9_Screenshot_20260510-155933.png",
        specs: `Power: Solar + Battery backup
LED: Warm 2700K
Size: 3" digits
Mount: Post Clamp`
    }, {
        id: "s14",
        name: "Floating LED Backlit Sign",
        category: "address_bar",
        base_price: 279,
        description: "Premium floating address sign with full LED backlighting and warm amber glow.",
        image_url: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/69f0f31cc_Screenshot2026-05-05094536.png",
        specs: `Panel: Frosted Acrylic
LED: 3000K Full backlit
Size: Custom
Mount: Standoff 15mm`
    }];

function uM() {
    const [t, e] = F.useState("all"), r = t === "all" ? ov : ov.filter(i => i.category === t);
    return v.jsxs("div", {
        style: {
            minHeight: "100vh",
            background: "#0A0A0B"
        },
        children: [v.jsx(Pi, {}), v.jsx("div", {
            style: {
                paddingTop: "7rem",
                paddingBottom: "6rem"
            },
            children: v.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12",
                children: [v.jsxs("div", {
                    style: {
                        marginBottom: "4rem"
                    },
                    children: [v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.7rem",
                            letterSpacing: "0.3em",
                            color: "#FFB347",
                            textTransform: "uppercase",
                            marginBottom: "0.75rem"
                        },
                        children: "Products"
                    }), v.jsx("h1", {
                        style: {
                            fontFamily: "Inter Tight, sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(2.5rem, 6vw, 5rem)",
                            letterSpacing: "-0.05em",
                            color: "#E2E8F0"
                        },
                        children: "The Collection"
                    })]
                }), v.jsx("div", {
                    style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginBottom: "3rem",
                        paddingBottom: "1.5rem",
                        borderBottom: "1px solid rgba(30,41,59,0.3)"
                    },
                    children: lM.map(i => v.jsx("button", {
                        onClick: () => e(i.value),
                        style: {
                            padding: "0.5rem 1rem",
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.7rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            border: t === i.value ? "none" : "1px solid rgba(30,41,59,0.4)",
                            background: t === i.value ? "#FFB347" : "transparent",
                            color: t === i.value ? "#0A0A0B" : "rgba(226,232,240,0.5)",
                            cursor: "pointer",
                            transition: "all 0.2s"
                        },
                        children: i.label
                    }, i.value))
                }), v.jsx("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "2rem"
                    },
                    children: r.map(i => v.jsx(aM, {
                        product: i
                    }, i.id))
                })]
            })
        }), v.jsx("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-12",
            children: v.jsx(oM, {})
        }), v.jsx(Ri, {})]
    })
}

function cM() {
    return v.jsxs("div", {
        style: {
            minHeight: "100vh",
            background: "#0A0A0B"
        },
        children: [v.jsx(Pi, {}), v.jsx("div", {
            style: {
                paddingTop: "7rem",
                paddingBottom: "6rem"
            },
            children: v.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12",
                children: [v.jsxs(Rt, {
                    to: "/products",
                    style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontFamily: "IBM Plex Mono, monospace",
                        fontSize: "0.7rem",
                        color: "rgba(226,232,240,0.5)",
                        textDecoration: "none",
                        marginBottom: "2rem"
                    },
                    children: [v.jsx(Kb, {
                        size: 14
                    }), " Back to Collection"]
                }), v.jsx("p", {
                    style: {
                        fontFamily: "IBM Plex Mono, monospace",
                        fontSize: "0.85rem",
                        color: "rgba(226,232,240,0.5)"
                    },
                    children: "Product details coming soon. Please contact us for a custom quote."
                }), v.jsx(Rt, {
                    to: "/contact",
                    style: {
                        display: "inline-block",
                        marginTop: "2rem",
                        padding: "0.875rem 2rem",
                        background: "#FFB347",
                        color: "#0A0A0B",
                        fontFamily: "Inter Tight, sans-serif",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        textDecoration: "none"
                    },
                    children: "Get a Quote"
                })]
            })
        }), v.jsx(Ri, {})]
    })
}
const dM = [{
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/a3650f659_Screenshot2026-05-05094104.png",
    style: "Backlit Numbers",
    finish: "Cool White",
    light: "6000K",
    size: "wide"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/3cefdceeb_Screenshot2026-05-05092931.png",
    style: "LED Halo",
    finish: "Matte Black",
    light: "4000K"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/d6cda69ce_Screenshot2026-05-05092738.png",
    style: "Gold Accent Plaque",
    finish: "Matte Black & Gold",
    light: "N/A"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/af72d062e_Screenshot_20260510-155527.png",
    style: "Walnut Plaque",
    finish: "Natural Walnut",
    light: "N/A",
    size: "wide"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/8c5bdf2a3_Screenshot_20260510-155541.png",
    style: "Modern Plaque",
    finish: "Walnut & Black",
    light: "N/A"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/51a4331bf_Screenshot2026-05-05093517.png",
    style: "Vertical Mount",
    finish: "Brushed Silver",
    light: "3000K"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/a106efdb4_Screenshot2026-05-05095008.png",
    style: "Residential LED",
    finish: "Silver",
    light: "Warm 2700K",
    size: "wide"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/0bf48a983_Screenshot2026-05-05094121.png",
    style: "Rustic Planter",
    finish: "Patina Copper",
    light: "N/A"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/706b24bf9_Screenshot_20260510-155933.png",
    style: "Address Bar",
    finish: "Matte Black",
    light: "Warm Edge-Lit"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/26ef7a186_Screenshot2026-05-05093319.png",
    style: "Metal Cutout",
    finish: "Powder Black",
    light: "N/A",
    size: "wide"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/f109edf51_Screenshot2026-05-05092617.png",
    style: "Acrylic Glass",
    finish: "Clear & Black",
    light: "N/A"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/69f0f31cc_Screenshot2026-05-05094536.png",
    style: "Mailbox Numbers",
    finish: "Cedar & Gold",
    light: "Solar LED"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/5dc43ea7a_Screenshot_20260510-155546.png",
    style: "Diagonal Plaque",
    finish: "Matte Black & Wood",
    light: "N/A"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/d6280777f_Screenshot_20260510-155818.png",
    style: "Oak & Metal",
    finish: "Natural Oak & Black",
    light: "N/A",
    size: "wide"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/003fba7b5_Screenshot2026-05-05092653.png",
    style: "Brushed Metal Vertical",
    finish: "Brushed Steel",
    light: "N/A"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/50c08a543_Screenshot2026-05-05093239.png",
    style: "Street Sign",
    finish: "Powder Black",
    light: "N/A"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/b3e7ccf3a_Screenshot2026-05-05094204.png",
    style: "Day/Night Numbers",
    finish: "Matte Black",
    light: "Dual-Mode LED",
    size: "wide"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/7fa79fa22_Screenshot2026-05-05092600.png",
    style: "Floating LED",
    finish: "Silver",
    light: "Warm 3000K"
}, {
    image: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/f2a06047b_Screenshot2026-05-05093026.png",
    style: "Address Plate",
    finish: "Black & Warm White",
    light: "Edge-Lit 3000K"
}];

function fM() {
    return v.jsxs("div", {
        style: {
            minHeight: "100vh",
            background: "#0A0A0B"
        },
        children: [v.jsx(Pi, {}), v.jsx("div", {
            style: {
                paddingTop: "7rem",
                paddingBottom: "6rem"
            },
            children: v.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12",
                children: [v.jsxs("div", {
                    style: {
                        marginBottom: "4rem"
                    },
                    children: [v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.7rem",
                            letterSpacing: "0.3em",
                            color: "#FFB347",
                            textTransform: "uppercase",
                            marginBottom: "0.75rem"
                        },
                        children: "Portfolio"
                    }), v.jsx("h1", {
                        style: {
                            fontFamily: "Inter Tight, sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(2.5rem, 6vw, 5rem)",
                            letterSpacing: "-0.05em",
                            color: "#E2E8F0"
                        },
                        children: "Installation Gallery"
                    }), v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.85rem",
                            color: "rgba(226,232,240,0.5)",
                            marginTop: "1rem",
                            maxWidth: "32rem",
                            lineHeight: 1.7
                        },
                        children: "Every installation is a bespoke light sculpture. Browse our portfolio of residential and commercial projects."
                    })]
                }), v.jsx("div", {
                    style: {
                        columns: "1",
                        gap: "4px"
                    },
                    className: "md:columns-3",
                    children: dM.map((t, e) => v.jsxs(Mt.div, {
                        style: {
                            marginBottom: "4px",
                            breakInside: "avoid",
                            position: "relative",
                            overflow: "hidden",
                            cursor: "pointer"
                        },
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: e % 6 * .05
                        },
                        className: "group",
                        children: [v.jsx("img", {
                            src: "https://media.base44.com/images/public/user_6a044fd389b50cea32caeac3/af72d062e_Screenshot_20260510-155527.png",
                            alt: t.style,
                            style: {
                                width: "100%",
                                display: "block",
                                transition: "transform 0.7s"
                            },
                            className: "group-hover:scale-105"
                        }), v.jsx("div", {
                            style: {
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(to top, rgba(10,10,11,0.9), transparent)",
                                opacity: 0,
                                transition: "opacity 0.3s"
                            },
                            className: "group-hover:!opacity-100"
                        }), v.jsxs("div", {
                            style: {
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: "1.25rem",
                                transform: "translateY(1rem)",
                                opacity: 0,
                                transition: "all 0.3s"
                            },
                            className: "group-hover:!translate-y-0 group-hover:!opacity-100",
                            children: [v.jsx("p", {
                                style: {
                                    fontFamily: "Inter Tight, sans-serif",
                                    fontWeight: 600,
                                    fontSize: "0.85rem",
                                    color: "#E2E8F0"
                                },
                                children: t.style
                            }), v.jsxs("p", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.65rem",
                                    color: "rgba(226,232,240,0.6)",
                                    letterSpacing: "0.1em",
                                    marginTop: "0.25rem"
                                },
                                children: [t.finish, " / ", t.light]
                            })]
                        })]
                    }, e))
                })]
            })
        }), v.jsx(Ri, {})]
    })
}
const $n = {
        width: "100%",
        padding: "0.75rem 1rem",
        background: "rgba(30,41,59,0.2)",
        border: "1px solid rgba(30,41,59,0.6)",
        color: "#E2E8F0",
        fontFamily: "IBM Plex Mono, monospace",
        fontSize: "0.8rem",
        outline: "none",
        boxSizing: "border-box"
    },
    _n = {
        display: "block",
        fontFamily: "IBM Plex Mono, monospace",
        fontSize: "0.65rem",
        color: "rgba(226,232,240,0.4)",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        marginBottom: "0.5rem"
    };

function hM() {
    const [t, e] = F.useState({
        name: "",
        email: "",
        phone: "",
        address_numbers: "",
        street_name: "",
        product_interest: "",
        finish: "",
        wants_installation: "",
        install_surface: "",
        notes: ""
    }), [r, i] = F.useState(!1), a = Vk({
        mutationFn: d => Zs.entities.Inquiry.create(d),
        onSuccess: () => i(!0)
    }), l = d => {
        d.preventDefault(), a.mutate({ ...t,
            wants_installation: t.wants_installation === "yes"
        })
    }, u = (d, h) => e(p => ({ ...p,
        [d]: h
    }));
    return v.jsxs("div", {
        style: {
            minHeight: "100vh",
            background: "#0A0A0B"
        },
        children: [v.jsx(Pi, {}), v.jsx("div", {
            style: {
                paddingTop: "7rem",
                paddingBottom: "6rem"
            },
            children: v.jsx("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12",
                children: v.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16",
                    children: [v.jsxs("div", {
                        children: [v.jsx("p", {
                            style: {
                                fontFamily: "IBM Plex Mono, monospace",
                                fontSize: "0.7rem",
                                letterSpacing: "0.3em",
                                color: "#FFB347",
                                textTransform: "uppercase",
                                marginBottom: "0.75rem"
                            },
                            children: "Get in Touch"
                        }), v.jsxs("h1", {
                            style: {
                                fontFamily: "Inter Tight, sans-serif",
                                fontWeight: 800,
                                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                                letterSpacing: "-0.05em",
                                color: "#E2E8F0",
                                lineHeight: .95,
                                marginBottom: "1.5rem"
                            },
                            children: ["Design", v.jsx("br", {}), "Consultation"]
                        }), v.jsx("p", {
                            style: {
                                fontFamily: "IBM Plex Mono, monospace",
                                fontSize: "0.85rem",
                                color: "rgba(226,232,240,0.5)",
                                lineHeight: 1.7,
                                maxWidth: "28rem",
                                marginBottom: "3rem"
                            },
                            children: "Tell us about your project and we'll craft a custom proposal. Every installation begins with understanding your space, your style, and your vision."
                        }), [{
                            label: "Response Time",
                            value: "Within 24 hours"
                        }, {
                            label: "Free Consultation",
                            value: "Virtual or on-site"
                        }, {
                            label: "Service Area",
                            value: "Nationwide"
                        }].map(d => v.jsxs("div", {
                            style: {
                                borderLeft: "2px solid rgba(255,179,71,0.3)",
                                paddingLeft: "1rem",
                                marginBottom: "2rem"
                            },
                            children: [v.jsx("p", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.65rem",
                                    color: "rgba(226,232,240,0.4)",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase"
                                },
                                children: d.label
                            }), v.jsx("p", {
                                style: {
                                    fontFamily: "Inter Tight, sans-serif",
                                    fontWeight: 600,
                                    color: "#E2E8F0",
                                    marginTop: "0.25rem"
                                },
                                children: d.value
                            })]
                        }, d.label))]
                    }), v.jsx("div", {
                        children: r ? v.jsxs(Mt.div, {
                            initial: {
                                opacity: 0,
                                scale: .95
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                padding: "4rem 2rem",
                                border: "1px solid rgba(30,41,59,0.4)",
                                background: "rgba(30,41,59,0.1)",
                                minHeight: "400px"
                            },
                            children: [v.jsx(Jb, {
                                size: 48,
                                style: {
                                    color: "#FFB347",
                                    marginBottom: "1.5rem"
                                }
                            }), v.jsx("h2", {
                                style: {
                                    fontFamily: "Inter Tight, sans-serif",
                                    fontWeight: 700,
                                    fontSize: "1.75rem",
                                    color: "#E2E8F0",
                                    marginBottom: "0.75rem"
                                },
                                children: "Inquiry Received"
                            }), v.jsx("p", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.8rem",
                                    color: "rgba(226,232,240,0.5)"
                                },
                                children: "We'll be in touch within 24 hours with your custom proposal."
                            })]
                        }) : v.jsxs("form", {
                            onSubmit: l,
                            style: {
                                border: "1px solid rgba(30,41,59,0.4)",
                                background: "rgba(30,41,59,0.05)",
                                padding: "2rem"
                            },
                            children: [v.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                style: {
                                    marginBottom: "1rem"
                                },
                                children: [v.jsxs("div", {
                                    children: [v.jsx("label", {
                                        style: _n,
                                        children: "Full Name *"
                                    }), v.jsx("input", {
                                        required: !0,
                                        style: $n,
                                        value: t.name,
                                        onChange: d => u("name", d.target.value),
                                        placeholder: "John Smith"
                                    })]
                                }), v.jsxs("div", {
                                    children: [v.jsx("label", {
                                        style: _n,
                                        children: "Email *"
                                    }), v.jsx("input", {
                                        required: !0,
                                        type: "email",
                                        style: $n,
                                        value: t.email,
                                        onChange: d => u("email", d.target.value),
                                        placeholder: "john@example.com"
                                    })]
                                })]
                            }), v.jsxs("div", {
                                style: {
                                    marginBottom: "1rem"
                                },
                                children: [v.jsx("label", {
                                    style: _n,
                                    children: "Phone"
                                }), v.jsx("input", {
                                    style: $n,
                                    value: t.phone,
                                    onChange: d => u("phone", d.target.value),
                                    placeholder: "(555) 000-0000"
                                })]
                            }), v.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                style: {
                                    marginBottom: "1rem"
                                },
                                children: [v.jsxs("div", {
                                    children: [v.jsx("label", {
                                        style: _n,
                                        children: "House Numbers *"
                                    }), v.jsx("input", {
                                        required: !0,
                                        style: $n,
                                        value: t.address_numbers,
                                        onChange: d => u("address_numbers", d.target.value),
                                        placeholder: "1847"
                                    })]
                                }), v.jsxs("div", {
                                    children: [v.jsx("label", {
                                        style: _n,
                                        children: "Street Name"
                                    }), v.jsx("input", {
                                        style: $n,
                                        value: t.street_name,
                                        onChange: d => u("street_name", d.target.value),
                                        placeholder: "Oaklands Avenue"
                                    })]
                                })]
                            }), v.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                style: {
                                    marginBottom: "1rem"
                                },
                                children: [v.jsxs("div", {
                                    children: [v.jsx("label", {
                                        style: _n,
                                        children: "Product Style"
                                    }), v.jsxs("select", {
                                        style: { ...$n
                                        },
                                        value: t.product_interest,
                                        onChange: d => u("product_interest", d.target.value),
                                        children: [v.jsx("option", {
                                            value: "",
                                            children: "Select style"
                                        }), v.jsx("option", {
                                            value: "led_backlit",
                                            children: "LED Backlit Numbers"
                                        }), v.jsx("option", {
                                            value: "wooden_plaque",
                                            children: "Wooden Plaques"
                                        }), v.jsx("option", {
                                            value: "metal_cutout",
                                            children: "Metal Cutout Signs"
                                        }), v.jsx("option", {
                                            value: "acrylic_glass",
                                            children: "Acrylic & Glass"
                                        }), v.jsx("option", {
                                            value: "address_bar",
                                            children: "Illuminated Address Bars"
                                        }), v.jsx("option", {
                                            value: "vertical_plaque",
                                            children: "Vertical Plaques"
                                        }), v.jsx("option", {
                                            value: "planter_sign",
                                            children: "Planter Signs"
                                        })]
                                    })]
                                }), v.jsxs("div", {
                                    children: [v.jsx("label", {
                                        style: _n,
                                        children: "Preferred Finish"
                                    }), v.jsxs("select", {
                                        style: { ...$n
                                        },
                                        value: t.finish,
                                        onChange: d => u("finish", d.target.value),
                                        children: [v.jsx("option", {
                                            value: "",
                                            children: "Select finish"
                                        }), v.jsx("option", {
                                            value: "matte_black",
                                            children: "Matte Black"
                                        }), v.jsx("option", {
                                            value: "brushed_gold",
                                            children: "Brushed Gold"
                                        }), v.jsx("option", {
                                            value: "brushed_silver",
                                            children: "Brushed Silver"
                                        }), v.jsx("option", {
                                            value: "natural_wood",
                                            children: "Natural Wood"
                                        }), v.jsx("option", {
                                            value: "oxide_copper",
                                            children: "Oxide Copper"
                                        })]
                                    })]
                                })]
                            }), v.jsxs("div", {
                                style: {
                                    marginBottom: "1rem"
                                },
                                children: [v.jsx("label", {
                                    style: _n,
                                    children: "Do you want it installed?"
                                }), v.jsx("div", {
                                    style: {
                                        display: "flex",
                                        gap: "0.75rem"
                                    },
                                    children: [{
                                        v: "yes",
                                        l: "Yes"
                                    }, {
                                        v: "no",
                                        l: "No"
                                    }].map(d => v.jsx("button", {
                                        type: "button",
                                        onClick: () => u("wants_installation", d.v),
                                        style: {
                                            flex: 1,
                                            padding: "0.75rem 1rem",
                                            background: t.wants_installation === d.v ? "#FFB347" : "rgba(30,41,59,0.2)",
                                            border: t.wants_installation === d.v ? "none" : "1px solid rgba(30,41,59,0.6)",
                                            color: t.wants_installation === d.v ? "#0A0A0B" : "#E2E8F0",
                                            fontFamily: "IBM Plex Mono, monospace",
                                            fontSize: "0.75rem",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            cursor: "pointer"
                                        },
                                        children: d.l
                                    }, d.v))
                                })]
                            }), t.wants_installation === "yes" && v.jsxs("div", {
                                style: {
                                    marginBottom: "1rem"
                                },
                                children: [v.jsx("label", {
                                    style: _n,
                                    children: "Install Surface Material"
                                }), v.jsxs("select", {
                                    style: { ...$n
                                    },
                                    value: t.install_surface,
                                    onChange: d => u("install_surface", d.target.value),
                                    children: [v.jsx("option", {
                                        value: "",
                                        children: "Select surface"
                                    }), v.jsx("option", {
                                        value: "wood",
                                        children: "Wood"
                                    }), v.jsx("option", {
                                        value: "brick",
                                        children: "Brick"
                                    }), v.jsx("option", {
                                        value: "stucco",
                                        children: "Stucco"
                                    }), v.jsx("option", {
                                        value: "plaster",
                                        children: "Plaster"
                                    }), v.jsx("option", {
                                        value: "stone",
                                        children: "Stone"
                                    }), v.jsx("option", {
                                        value: "other",
                                        children: "Other"
                                    })]
                                })]
                            }), v.jsxs("div", {
                                style: {
                                    marginBottom: "1.5rem"
                                },
                                children: [v.jsx("label", {
                                    style: _n,
                                    children: "Additional Notes"
                                }), v.jsx("textarea", {
                                    style: { ...$n,
                                        minHeight: "100px",
                                        resize: "vertical"
                                    },
                                    value: t.notes,
                                    onChange: d => u("notes", d.target.value),
                                    placeholder: "Tell us about your space, surface material, or any special requirements..."
                                })]
                            }), v.jsx("button", {
                                type: "submit",
                                disabled: a.isPending,
                                style: {
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.5rem",
                                    padding: "1rem 2rem",
                                    background: "#FFB347",
                                    color: "#0A0A0B",
                                    fontFamily: "Inter Tight, sans-serif",
                                    fontWeight: 600,
                                    fontSize: "0.8rem",
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                    border: "none",
                                    cursor: "pointer",
                                    opacity: a.isPending ? .6 : 1
                                },
                                children: a.isPending ? "Submitting..." : v.jsxs(v.Fragment, {
                                    children: [v.jsx("span", {
                                        children: "Submit Inquiry"
                                    }), " ", v.jsx(oE, {
                                        size: 16
                                    })]
                                })
                            })]
                        })
                    })]
                })
            })
        }), v.jsx(Ri, {})]
    })
}
const pM = [{
        name: "Brushed Stainless",
        tag: "Most Popular",
        desc: "A satin silver tone that resists fingerprints and weathering. Works with modern, contemporary, and industrial exteriors.",
        best: "New builds, rendered or brick facades",
        avoid: "Rustic or heritage homes"
    }, {
        name: "Matte Black",
        tag: "Bold & Minimal",
        desc: "Powder-coated flat black finish that absorbs light, making LED glow especially dramatic at night.",
        best: "Dark cladding, timber facades, monochromatic homes",
        avoid: "Light-coloured renders where subtlety is needed"
    }, {
        name: "Antique Bronze",
        tag: "Classic Warmth",
        desc: "Dark warm-brown tone reminiscent of aged brass. Pairs well with timber, stone, and traditional architecture.",
        best: "Heritage, Hamptons, or federation-style homes",
        avoid: "Ultra-modern minimalist exteriors"
    }, {
        name: "Natural Walnut",
        tag: "Organic & Warm",
        desc: "Solid walnut timber with a clear-coat sealant. Adds warmth and texture — no two plaques look identical.",
        best: "Coastal, Scandinavian, or natural material homes",
        avoid: "Fully exposed, very wet or tropical climates"
    }, {
        name: "White Acrylic",
        tag: "Clean & Fresh",
        desc: "Crisp white frosted acrylic panel that diffuses LED light softly for a glowing effect across the full face.",
        best: "White or light-rendered homes, scandi interiors",
        avoid: "Dark-toned contemporary facades"
    }],
    mM = [{
        name: "Standoff Mount",
        icon: "○ — ○",
        desc: "Numbers or plaques are raised 15–25 mm off the wall on stainless standoff bolts, creating a floating shadow line. Requires drilling into the wall surface.",
        difficulty: "Moderate",
        tools: "Drill, masonry bit, spirit level",
        ideal: "Rendered walls, brick, timber cladding, stone"
    }, {
        name: "Flush Surface Mount",
        icon: "▬",
        desc: "Sign sits flat against the wall using concealed screws or structural adhesive. A clean, integrated look with no visible fixings.",
        difficulty: "Easy",
        tools: "Drill or strong adhesive (e.g. CT1)",
        ideal: "Flat rendered surfaces, fibrous cement sheets"
    }, {
        name: "Self-Adhesive",
        icon: "▣",
        desc: "Pre-applied 3M VHB tape on the back of the sign. Peel-and-stick — no tools required. Best for smooth, clean surfaces.",
        difficulty: "Very Easy",
        tools: "None — clean the surface first",
        ideal: "Smooth render, glass panels, metal gates"
    }, {
        name: "Stake / Ground Mount",
        icon: "↓",
        desc: "A vertical spike or base post is driven into the ground beside your driveway or garden bed. No wall drilling needed.",
        difficulty: "Easy",
        tools: "Mallet or rubber hammer",
        ideal: "Front gardens, driveways without a suitable wall"
    }, {
        name: "Letterbox / Fence Mount",
        icon: "⊞",
        desc: "Clamps or brackets designed to attach to flat or round-tube letterboxes and metal fences. Includes adjustable hardware.",
        difficulty: "Easy",
        tools: "Screwdriver",
        ideal: "Letterboxes, pool fences, gate pillars"
    }],
    gM = {
        "Very Easy": "#4ade80",
        Easy: "#86efac",
        Moderate: "#FFB347"
    };

function yM() {
    return v.jsxs("div", {
        style: {
            minHeight: "100vh",
            background: "#0A0A0B"
        },
        children: [v.jsx(Pi, {}), v.jsx("div", {
            style: {
                paddingTop: "7rem",
                paddingBottom: "4rem",
                borderBottom: "1px solid rgba(30,41,59,0.4)"
            },
            children: v.jsx("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12",
                children: v.jsxs(Mt.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    children: [v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.7rem",
                            letterSpacing: "0.3em",
                            color: "#FFB347",
                            textTransform: "uppercase",
                            marginBottom: "0.75rem"
                        },
                        children: "Buyer's Guide"
                    }), v.jsxs("h1", {
                        style: {
                            fontFamily: "Inter Tight, sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(2rem, 5vw, 4rem)",
                            letterSpacing: "-0.04em",
                            color: "#E2E8F0",
                            marginBottom: "1.25rem"
                        },
                        children: ["Choosing the Right", v.jsx("br", {}), "Sign for Your Home"]
                    }), v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.85rem",
                            color: "rgba(226,232,240,0.5)",
                            maxWidth: "560px",
                            lineHeight: 1.8
                        },
                        children: "This guide walks you through our available finishes and mounting methods so you can order with confidence — or reach out and we'll help you decide."
                    })]
                })
            })
        }), v.jsx("section", {
            style: {
                padding: "5rem 0",
                borderBottom: "1px solid rgba(30,41,59,0.4)"
            },
            children: v.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12",
                children: [v.jsxs("div", {
                    style: {
                        marginBottom: "3rem"
                    },
                    children: [v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.65rem",
                            letterSpacing: "0.25em",
                            color: "rgba(226,232,240,0.35)",
                            textTransform: "uppercase",
                            marginBottom: "0.5rem"
                        },
                        children: "Section 01"
                    }), v.jsx("h2", {
                        style: {
                            fontFamily: "Inter Tight, sans-serif",
                            fontWeight: 700,
                            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                            letterSpacing: "-0.03em",
                            color: "#E2E8F0"
                        },
                        children: "Finish Types"
                    })]
                }), v.jsx("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "1px",
                        background: "rgba(30,41,59,0.3)"
                    },
                    children: pM.map((t, e) => v.jsxs(Mt.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: e * .07
                        },
                        style: {
                            background: "#0A0A0B",
                            padding: "2rem"
                        },
                        children: [v.jsxs("div", {
                            style: {
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                marginBottom: "1rem"
                            },
                            children: [v.jsx("h3", {
                                style: {
                                    fontFamily: "Inter Tight, sans-serif",
                                    fontWeight: 700,
                                    fontSize: "1.1rem",
                                    letterSpacing: "-0.02em",
                                    color: "#E2E8F0"
                                },
                                children: t.name
                            }), v.jsx("span", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.6rem",
                                    letterSpacing: "0.1em",
                                    color: "#FFB347",
                                    border: "1px solid rgba(255,179,71,0.3)",
                                    padding: "0.2rem 0.5rem",
                                    whiteSpace: "nowrap"
                                },
                                children: t.tag
                            })]
                        }), v.jsx("p", {
                            style: {
                                fontFamily: "IBM Plex Mono, monospace",
                                fontSize: "0.75rem",
                                color: "rgba(226,232,240,0.55)",
                                lineHeight: 1.8,
                                marginBottom: "1.25rem"
                            },
                            children: t.desc
                        }), v.jsxs("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.4rem"
                            },
                            children: [v.jsxs("p", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.65rem",
                                    color: "#4ade80"
                                },
                                children: ["✓ Best for: ", t.best]
                            }), v.jsxs("p", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.65rem",
                                    color: "rgba(226,232,240,0.3)"
                                },
                                children: ["✗ Avoid if: ", t.avoid]
                            })]
                        })]
                    }, t.name))
                })]
            })
        }), v.jsx("section", {
            style: {
                padding: "5rem 0"
            },
            children: v.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-12",
                children: [v.jsxs("div", {
                    style: {
                        marginBottom: "3rem"
                    },
                    children: [v.jsx("p", {
                        style: {
                            fontFamily: "IBM Plex Mono, monospace",
                            fontSize: "0.65rem",
                            letterSpacing: "0.25em",
                            color: "rgba(226,232,240,0.35)",
                            textTransform: "uppercase",
                            marginBottom: "0.5rem"
                        },
                        children: "Section 02"
                    }), v.jsx("h2", {
                        style: {
                            fontFamily: "Inter Tight, sans-serif",
                            fontWeight: 700,
                            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                            letterSpacing: "-0.03em",
                            color: "#E2E8F0"
                        },
                        children: "Mounting Options"
                    })]
                }), v.jsx("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "1px",
                        background: "rgba(30,41,59,0.3)"
                    },
                    children: mM.map((t, e) => v.jsxs(Mt.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: e * .08
                        },
                        style: {
                            background: "#0A0A0B",
                            padding: "2rem 2.5rem",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            gap: "2rem",
                            alignItems: "start"
                        },
                        className: "grid-cols-1 md:!grid-cols-3",
                        children: [v.jsxs("div", {
                            children: [v.jsx("p", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "1rem",
                                    color: "rgba(226,232,240,0.2)",
                                    marginBottom: "0.75rem",
                                    letterSpacing: "0.1em"
                                },
                                children: t.icon
                            }), v.jsx("h3", {
                                style: {
                                    fontFamily: "Inter Tight, sans-serif",
                                    fontWeight: 700,
                                    fontSize: "1.1rem",
                                    color: "#E2E8F0",
                                    letterSpacing: "-0.02em",
                                    marginBottom: "0.5rem"
                                },
                                children: t.name
                            }), v.jsxs("span", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.6rem",
                                    letterSpacing: "0.1em",
                                    color: gM[t.difficulty] || "#E2E8F0"
                                },
                                children: ["● ", t.difficulty]
                            })]
                        }), v.jsx("div", {
                            children: v.jsx("p", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.75rem",
                                    color: "rgba(226,232,240,0.55)",
                                    lineHeight: 1.8
                                },
                                children: t.desc
                            })
                        }), v.jsxs("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.6rem"
                            },
                            children: [v.jsx("p", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.65rem",
                                    color: "rgba(226,232,240,0.35)",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase"
                                },
                                children: "Tools needed"
                            }), v.jsx("p", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.7rem",
                                    color: "rgba(226,232,240,0.6)"
                                },
                                children: t.tools
                            }), v.jsx("p", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.65rem",
                                    color: "rgba(226,232,240,0.35)",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    marginTop: "0.5rem"
                                },
                                children: "Ideal for"
                            }), v.jsx("p", {
                                style: {
                                    fontFamily: "IBM Plex Mono, monospace",
                                    fontSize: "0.7rem",
                                    color: "rgba(226,232,240,0.6)"
                                },
                                children: t.ideal
                            })]
                        })]
                    }, t.name))
                })]
            })
        }), v.jsx("section", {
            style: {
                padding: "5rem 0",
                borderTop: "1px solid rgba(30,41,59,0.4)",
                textAlign: "center"
            },
            children: v.jsxs("div", {
                className: "max-w-2xl mx-auto px-6",
                children: [v.jsx("p", {
                    style: {
                        fontFamily: "Inter Tight, sans-serif",
                        fontWeight: 300,
                        fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                        color: "#E2E8F0",
                        letterSpacing: "-0.02em",
                        marginBottom: "0.75rem"
                    },
                    children: "Still not sure which option suits you?"
                }), v.jsx("p", {
                    style: {
                        fontFamily: "IBM Plex Mono, monospace",
                        fontSize: "0.75rem",
                        color: "rgba(226,232,240,0.4)",
                        marginBottom: "2rem",
                        lineHeight: 1.8
                    },
                    children: "Send us a photo of your facade and we'll recommend the perfect combination."
                }), v.jsx(Rt, {
                    to: "/contact",
                    style: {
                        display: "inline-block",
                        padding: "1rem 2.5rem",
                        background: "#FFB347",
                        color: "#0A0A0B",
                        fontFamily: "Inter Tight, sans-serif",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        textDecoration: "none"
                    },
                    children: "Get a Recommendation"
                })]
            })
        }), v.jsx(Ri, {})]
    })
}
const vM = () => {
    const {
        isLoadingAuth: t,
        isLoadingPublicSettings: e,
        authError: r,
        navigateToLogin: i
    } = bP();
    if (e || t) return v.jsx("div", {
        className: "fixed inset-0 flex items-center justify-center bg-[#0A0A0B]",
        children: v.jsx("div", {
            className: "w-8 h-8 border-4 border-[#1E293B] border-t-[#FFB347] rounded-full animate-spin"
        })
    });
    if (r) {
        if (r.type === "user_not_registered") return v.jsx(EP, {});
        if (r.type === "auth_required") return i(), null
    }
    return v.jsxs(N2, {
        children: [v.jsx(br, {
            path: "/",
            element: v.jsx(sM, {})
        }), v.jsx(br, {
            path: "/products",
            element: v.jsx(uM, {})
        }), v.jsx(br, {
            path: "/product",
            element: v.jsx(cM, {})
        }), v.jsx(br, {
            path: "/gallery",
            element: v.jsx(fM, {})
        }), v.jsx(br, {
            path: "/contact",
            element: v.jsx(hM, {})
        }), v.jsx(br, {
            path: "/guide",
            element: v.jsx(yM, {})
        }), v.jsx(br, {
            path: "*",
            element: v.jsx(xP, {})
        })]
    })
};

function wM() {
    return v.jsx(SP, {
        children: v.jsxs(Pk, {
            client: Uk,
            children: [v.jsx(U2, {
                children: v.jsx(vM, {})
            }), v.jsx(rk, {})]
        })
    })
}
jb.createRoot(document.getElementById("root")).render(v.jsx(wM, {}));