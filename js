// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__c",
                "vtp_value": ""
            }, {
                "function": "__c",
                "vtp_value": 0
            }, {
                "vtp_signal": 0,
                "function": "__c",
                "vtp_value": 0
            }],
            "tags": [{
                "function": "__gct",
                "vtp_trackingId": "G-G91F3J3HWN",
                "vtp_sessionDuration": 0,
                "tag_id": 1
            }, {
                "function": "__ccd_conversion_marking",
                "vtp_conversionRules": ["list", ["map", "matchingRules", "{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]],
                "vtp_instanceDestinationId": "G-G91F3J3HWN",
                "tag_id": 3
            }, {
                "function": "__set_product_settings",
                "vtp_instanceDestinationId": "G-G91F3J3HWN",
                "vtp_foreignTldMacroResult": ["macro", 1],
                "vtp_isChinaVipRegionMacroResult": ["macro", 2],
                "tag_id": 5
            }, {
                "function": "__ogt_google_signals",
                "vtp_googleSignals": "DISABLED",
                "vtp_instanceDestinationId": "G-G91F3J3HWN",
                "vtp_serverMacroResult": ["macro", 3],
                "tag_id": 6
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init"
            }],
            "rules": [[["if", 0], ["add", 0]], [["if", 1], ["add", 1, 2, 3]]]
        },
        "runtime": [[50, "__ccd_conversion_marking", [46, "a"], [50, "t", [46, "u"], [52, "v", [2, [15, "q"], "parse", [7, [15, "u"]]]], [22, [30, [30, [28, [15, "v"]], [28, [16, [15, "v"], "args"]]], [21, [17, [16, [15, "v"], "args"], "length"], 2]], [46, [36]]], [52, "w", [16, [16, [16, [15, "v"], "args"], 1], "contextValue"]], [22, [30, [30, [30, [28, [15, "w"]], [21, [16, [15, "w"], "namespaceType"], 1]], [21, [17, [16, [15, "w"], "keyParts"], "length"], 1]], [21, [16, [16, [15, "w"], "keyParts"], 0], "eventName"]], [46, [36, [44]]]], [52, "x", [16, [16, [15, "v"], "args"], 0]], [36, [1, [15, "x"], [16, [15, "x"], "stringValue"]]]], [22, [30, [28, [17, [15, "a"], "conversionRules"]], [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", ["require", "internal.copyPreHit"]], [52, "c", ["require", "internal.evaluateBooleanExpression"]], [52, "d", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "e", ["require", "internal.registerCcdCallback"]], [52, "f", "is_conversion"], [52, "g", "is_first_visit"], [52, "h", "is_first_visit_conversion"], [52, "i", "is_session_start"], [52, "j", "is_session_start_conversion"], [52, "k", "syn_or_mod"], [52, "l", "first_visit"], [52, "m", "session_start"], [22, [16, [15, "d"], "enableCcdGaConversions"], [46, [53, [41, "u"], [41, "v"], ["e", [17, [15, "a"], "instanceDestinationId"], [51, "", [7, "w"], [22, [2, [15, "w"], "getMetadata", [7, [15, "k"]]], [46, [36]]], [52, "x", [8, "preHit", [15, "w"]]], [65, "y", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "y"], "matchingRules"], [15, "x"]], [46, [2, [15, "w"], "setMetadata", [7, [15, "f"], true]], [4]]]]], [22, [2, [15, "w"], "getMetadata", [7, [15, "g"]]], [46, [22, [28, [15, "u"]], [46, [53, [52, "y", ["b", [15, "w"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "y"], "setEventName", [7, [15, "l"]]], [3, "u", [8, "preHit", [15, "y"]]]]]], [65, "y", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "y"], "matchingRules"], [15, "u"]], [46, [2, [15, "w"], "setMetadata", [7, [15, "h"], true]], [4]]]]]]], [22, [2, [15, "w"], "getMetadata", [7, [15, "i"]]], [46, [22, [28, [15, "v"]], [46, [53, [52, "y", ["b", [15, "w"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "y"], "setEventName", [7, [15, "m"]]], [3, "v", [8, "preHit", [15, "y"]]]]]], [65, "y", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "y"], "matchingRules"], [15, "v"]], [46, [2, [15, "w"], "setMetadata", [7, [15, "j"], true]], [4]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]], [36]]]], [52, "n", ["require", "internal.setProductSettingsParameter"]], [52, "o", ["require", "internal.getProductSettingsParameter"]], [52, "p", ["require", "getContainerVersion"]], [52, "q", ["require", "JSON"]], [52, "r", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["p"], "containerId"]]], [52, "s", [30, ["o", [15, "r"], "event_settings"], [8]]], [53, [41, "u"], [3, "u", 0], [63, [7, "u"], [23, [15, "u"], [17, [17, [15, "a"], "conversionRules"], "length"]], [33, [15, "u"], [3, "u", [0, [15, "u"], 1]]], [46, [53, [52, "v", ["t", [16, [16, [17, [15, "a"], "conversionRules"], [15, "u"]], "matchingRules"]]], [22, [28, [15, "v"]], [46, [6]]], [41, "w"], [3, "w", [16, [15, "s"], [15, "v"]]], [22, [28, [15, "w"]], [46, [3, "w", [8]], [43, [15, "s"], [15, "v"], [15, "w"]]]], [43, [15, "w"], "conversion", true]]]]], ["n", [15, "r"], "event_settings", [15, "s"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_google_signals", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "e", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]], ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]], [22, [17, [15, "d"], "enableGa4OnoRemarketing"], [46, ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__set_product_settings", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]], ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]], ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]], [2, [15, "a"], "gtmOnSuccess", [7]]]]
        ,
        "permissions": {
            "__ccd_conversion_marking": {
                "read_container_data": {}
            },
            "__ogt_google_signals": {
                "read_container_data": {}
            },
            "__set_product_settings": {
                "read_container_data": {}
            }
        }

        ,
        "security_groups": {
            "google": ["__ccd_conversion_marking", "__ogt_google_signals", "__set_product_settings"]
        }
        ,
        "infra": ["__ccd_conversion_marking", "__ogt_google_signals", "__set_product_settings"]

    };

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ba,
        da = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = function(a) {
            return a.raw = a
        },
        fa = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ha;
    if ("function" == typeof Object.setPrototypeOf)
        ha = Object.setPrototypeOf;
    else {
        var ia;
        a:
        {
            var ja = {
                    a: !0
                },
                la = {};
            try {
                la.__proto__ = ja;
                ia = la.a;
                break a
            } catch (a) {}
            ia = !1
        }ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ma = ha,
        na = function(a, b) {
            a.prototype = fa(b.prototype);
            a.prototype.constructor = a;
            if (ma)
                ma(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else
                            a[c] = b[c];
            a.Kl = b.prototype
        },
        pa = this || self,
        qa = function(a) {
            return a
        };
    var ra = function(a, b) {
        this.h = a;
        this.B = b
    };
    var sa = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        },
        ta = function() {
            this.D = {};
            this.F = !1;
            this.N = {}
        },
        ua = function(a, b) {
            var c = [],
                d;
            for (d in a.D)
                if (a.D.hasOwnProperty(d))
                    switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d);
                        break;
                    case 2:
                        c.push(a.get(d));
                        break;
                    case 3:
                        c.push([d, a.get(d)])
                    }
            return c
        };
    ta.prototype.get = function(a) {
        return this.D["dust." + a]
    };
    ta.prototype.set = function(a, b) {
        this.F || (a = "dust." + a, this.N.hasOwnProperty(a) || (this.D[a] = b))
    };
    ta.prototype.has = function(a) {
        return this.D.hasOwnProperty("dust." + a)
    };
    var va = function(a, b) {
        b = "dust." + b;
        a.F || a.N.hasOwnProperty(b) || delete a.D[b]
    };
    ta.prototype.Qb = function() {
        this.F = !0
    };
    ta.prototype.Je = function() {
        return this.F
    };
    var wa = function(a) {
        this.B = new ta;
        this.h = [];
        this.D = !1;
        a = a || [];
        for (var b in a)
            a.hasOwnProperty(b) && (sa(b) ? this.h[Number(b)] = a[Number(b)] : this.B.set(b, a[b]))
    };
    ba = wa.prototype;
    ba.toString = function(a) {
        if (a && 0 <= a.indexOf(this))
            return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof wa ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    ba.set = function(a, b) {
        if (!this.D)
            if ("length" === a) {
                if (!sa(b))
                    throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else
                sa(a) ? this.h[Number(a)] = b : this.B.set(a, b)
    };
    ba.get = function(a) {
        return "length" === a ? this.length() : sa(a) ? this.h[Number(a)] : this.B.get(a)
    };
    ba.length = function() {
        return this.h.length
    };
    ba.Pb = function() {
        for (var a = ua(this.B, 1), b = 0; b < this.h.length; b++)
            a.push(b + "");
        return new wa(a)
    };
    var xa = function(a, b) {
        sa(b) ? delete a.h[Number(b)] : va(a.B, b)
    };
    ba = wa.prototype;
    ba.pop = function() {
        return this.h.pop()
    };
    ba.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    };
    ba.shift = function() {
        return this.h.shift()
    };
    ba.splice = function(a, b, c) {
        return new wa(this.h.splice.apply(this.h, arguments))
    };
    ba.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    };
    ba.has = function(a) {
        return sa(a) && this.h.hasOwnProperty(a) || this.B.has(a)
    };
    ba.Qb = function() {
        this.D = !0;
        Object.freeze(this.h);
        this.B.Qb()
    };
    ba.Je = function() {
        return this.D
    };
    var ya = function() {
        this.quota = {}
    };
    ya.prototype.reset = function() {
        this.quota = {}
    };
    var za = function(a, b) {
        this.U = a;
        this.N = function(c, d, e) {
            return c.apply(d, e)
        };
        this.D = b;
        this.B = new ta;
        this.h = this.F = void 0
    };
    za.prototype.add = function(a, b) {
        Aa(this, a, b, !1)
    };
    var Aa = function(a, b, c, d) {
        if (!a.B.Je())
            if (d) {
                var e = a.B;
                e.set(b, c);
                e.N["dust." + b] = !0
            } else
                a.B.set(b, c)
    };
    za.prototype.set = function(a, b) {
        this.B.Je() || (!this.B.has(a) && this.D && this.D.has(a) ? this.D.set(a, b) : this.B.set(a, b))
    };
    za.prototype.get = function(a) {
        return this.B.has(a) ? this.B.get(a) : this.D ? this.D.get(a) : void 0
    };
    za.prototype.has = function(a) {
        return !!this.B.has(a) || !(!this.D || !this.D.has(a))
    };
    var Ba = function(a) {
        var b = new za(a.U, a);
        a.F && (b.F = a.F);
        b.N = a.N;
        b.h = a.h;
        return b
    };
    var Ca = function() {},
        Da = function(a) {
            return "function" === typeof a
        },
        k = function(a) {
            return "string" === typeof a
        },
        Ea = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        Ga = Array.isArray,
        Ia = function(a, b) {
            if (a && Ga(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c]))
                        return a[c]
        },
        Ka = function(a, b) {
            if (!Ea(a) || !Ea(b) || a > b)
                a = 0,
                b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Ma = function(a, b) {
            for (var c = new La, d = 0; d < a.length; d++)
                c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e]))
                    return !0;
            return !1
        },
        m = function(a,
        b) {
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Na = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Oa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Pa = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Qa = function(a) {
            var b = [];
            if (Ga(a))
                for (var c = 0; c < a.length; c++)
                    b.push(String(a[c]));
            return b
        },
        Ra = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Sa = function() {
            return new Date(Date.now())
        },
        Ta = function() {
            return Sa().getTime()
        },
        La = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    La.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    La.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ua = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Va = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Xa = function(a, b) {
            for (var c in b)
                b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ya = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b))
                    return !0;
            return !1
        },
        Za = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d]),
                c.push.apply(c, b[a[d]] || []);
            return c
        },
        $a = function(a, b) {
            var c = z;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e]))
                    return;
                d = d[a[e]];
                if (0 <=
                b.indexOf(d))
                    return
            }
            return d
        },
        bb = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
                d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        cb = /^\w{1,9}$/,
        db = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            m(a, function(d, e) {
                cb.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        eb = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    var fb = function(a, b) {
        ta.call(this);
        this.U = a;
        this.eb = b
    };
    na(fb, ta);
    fb.prototype.toString = function() {
        return this.U
    };
    fb.prototype.Pb = function() {
        return new wa(ua(this, 1))
    };
    fb.prototype.h = function(a, b) {
        return this.eb.apply(new gb(this, a), Array.prototype.slice.call(arguments, 1))
    };
    fb.prototype.B = function(a, b) {
        try {
            return this.h.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var ib = function(a, b) {
            for (var c, d = 0; d < b.length && !(c = hb(a, b[d]), c instanceof ra); d++)
                ;
            return c
        },
        hb = function(a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof fb))
                    throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.h.apply(c, [a].concat(b.slice(1)))
            } catch (e) {
                var d = a.F;
                d && d(e, b.context ? {
                    id: b[0],
                    line: b.context.line
                } : null);
                throw e;
            }
        },
        gb = function(a, b) {
            this.B = a;
            this.h = b
        },
        E = function(a, b) {
            return Ga(b) ? hb(a.h, b) : b
        },
        F = function(a) {
            return a.B.U
        };
    var jb = function() {
        ta.call(this)
    };
    na(jb, ta);
    jb.prototype.Pb = function() {
        return new wa(ua(this, 1))
    };
    var kb = {
        map: function(a) {
            for (var b = new jb, c = 0; c < arguments.length - 1; c += 2) {
                var d = E(this, arguments[c]) + "",
                    e = E(this, arguments[c + 1]);
                b.set(d, e)
            }
            return b
        },
        list: function(a) {
            for (var b = new wa, c = 0; c < arguments.length; c++) {
                var d = E(this, arguments[c]);
                b.push(d)
            }
            return b
        },
        fn: function(a, b, c) {
            var d = this.h,
                e = E(this, b);
            if (!(e instanceof wa))
                throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            return new fb(a, function() {
                return function(g) {
                    var h = Ba(d);
                    void 0 ===
                    h.h && (h.h = this.h.h);
                    for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++)
                        if (l[n] = E(this, l[n]), l[n] instanceof ra)
                            return l[n];
                    for (var p = e.get("length"), q = 0; q < p; q++)
                        q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new wa(l));
                    var r = ib(h, f);
                    if (r instanceof ra)
                        return "return" === r.h ? r.B : r
                }
            }())
        },
        control: function(a, b) {
            return new ra(a, E(this, b))
        },
        undefined: function() {}
    };
    var lb = function() {
            this.D = new ya;
            this.h = new za(this.D)
        },
        mb = function(a, b, c) {
            var d = new fb(b, c);
            d.Qb();
            a.h.set(b, d)
        },
        nb = function(a, b, c) {
            kb.hasOwnProperty(b) && mb(a, c || b, kb[b])
        };
    lb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.B(c)
    };
    lb.prototype.B = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = hb(this.h, arguments[c]);
        return b
    };
    lb.prototype.F = function(a, b) {
        var c = Ba(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++)
            d = d = hb(c, arguments[e]);
        return d
    };
    function ob() {
        for (var a = pb, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function qb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var pb,
        rb;
    function sb(a) {
        pb = pb || qb();
        rb = rb || ob();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                h = e ? a.charCodeAt(c + 2) : 0,
                l = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | h >> 6,
                q = h & 63;
            e || (q = 64, d || (p = 64));
            b.push(pb[l], pb[n], pb[p], pb[q])
        }
        return b.join("")
    }
    function tb(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = rb[n];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        pb = pb || qb();
        rb = rb || ob();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    }
    ;
    var ub = {},
        vb = function(a, b) {
            ub[a] = ub[a] || [];
            ub[a][b] = !0
        },
        wb = function() {
            delete ub.GA4_EVENT
        },
        xb = function(a) {
            var b = ub[a];
            if (!b || 0 === b.length)
                return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++)
                0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0),
                b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return sb(c.join("")).replace(/\.+$/, "")
        };
    var yb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    };
    var zb,
        Ab = function() {
            if (void 0 === zb) {
                var a = null,
                    b = pa.trustedTypes;
                if (b && b.createPolicy) {
                    try {
                        a = b.createPolicy("goog#html", {
                            createHTML: qa,
                            createScript: qa,
                            createScriptURL: qa
                        })
                    } catch (c) {
                        pa.console && pa.console.error(c.message)
                    }
                    zb = a
                } else
                    zb = a
            }
            return zb
        };
    var Cb = function(a, b) {
        this.h = b === Bb ? a : ""
    };
    Cb.prototype.toString = function() {
        return this.h + ""
    };
    var Db = function(a) {
            return a instanceof Cb && a.constructor === Cb ? a.h : "type_error:TrustedResourceUrl"
        },
        Bb = {},
        Eb = function(a) {
            var b = a,
                c = Ab(),
                d = c ? c.createScriptURL(b) : b;
            return new Cb(d, Bb)
        };
    var Fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Gb() {
        var a = pa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b)
                return b
        }
        return ""
    }
    function Hb(a) {
        return -1 != Gb().indexOf(a)
    }
    ;
    function Ib() {
        return Hb("Firefox") || Hb("FxiOS")
    }
    function Jb() {
        return (Hb("Chrome") || Hb("CriOS")) && !Hb("Edge") || Hb("Silk")
    }
    ;
    var Kb = {},
        Lb = function(a, b) {
            this.h = b === Kb ? a : ""
        };
    Lb.prototype.toString = function() {
        return this.h.toString()
    }; /*

     SPDX-License-Identifier: Apache-2.0
    */



    var Mb = {};
    var Nb = function() {},
        Ob = function(a) {
            this.h = a
        };
    na(Ob, Nb);
    Ob.prototype.toString = function() {
        return this.h
    };
    function Pb(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase())
                throw Error("");
            if ("style" === a.tagName.toLowerCase())
                throw Error("");
        }
        a.innerHTML = b instanceof Lb && b.constructor === Lb ? b.h : "type_error:SafeHtml"
    }
    function Qb(a, b) {
        var c = [new Ob(Rb[0].toLowerCase(), Mb)];
        if (0 === c.length)
            throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof Ob)
                    g = f.h;
                else
                    throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
            return 0 !== e.indexOf(f)
        }))
            throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }
    ;
    function Sb(a) {
        var b = a = Tb(a),
            c = Ab(),
            d = c ? c.createHTML(b) : b;
        return new Lb(d, Kb)
    }
    function Tb(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    }
    ;
    var Ub = {},
        z = window,
        I = document,
        Vb = navigator,
        Wb = I.currentScript && I.currentScript.src,
        Xb = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Yb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Zb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        $b = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };
    function ac(a, b, c) {
        b && m(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var bc = function(a, b, c, d, e) {
            var f = I.createElement("script");
            ac(f, d, Zb);
            f.type = "text/javascript";
            f.async = !0;
            var g;
            g = Eb(Tb(a));
            f.src = Db(g);
            var h,
                l,
                n,
                p = null == (n = (l = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(l, "script[nonce]");
            (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
            Yb(f, b);
            c && (f.onerror = c);
            if (e)
                e.appendChild(f);
            else {
                var q = I.getElementsByTagName("script")[0] || I.body || I.head;
                q.parentNode.insertBefore(f, q)
            }
            return f
        },
        cc = function() {
            if (Wb) {
                var a =
                Wb.toLowerCase();
                if (0 === a.indexOf("https://"))
                    return 2;
                if (0 === a.indexOf("http://"))
                    return 3
            }
            return 1
        },
        dc = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                h = !1;
            g || (g = I.createElement("iframe"), h = !0);
            ac(g, c, $b);
            d && m(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (h) {
                var l = I.body && I.body.lastChild || I.body || I.head;
                l.parentNode.insertBefore(g, l)
            }
            Yb(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        ec = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload =
            function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a
        },
        fc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        gc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        J = function(a) {
            z.setTimeout(a, 0)
        },
        hc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        ic = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,
            ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        jc = function(a) {
            var b = I.createElement("div");
            Pb(b, Sb("A<div>" + a + "</div>"));
            b = b.lastChild;
            for (var c = []; b.firstChild;)
                c.push(b.removeChild(b.firstChild));
            return c
        },
        kc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++)
                d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()])
                    return f;
                f = f.parentElement
            }
            return null
        },
        lc = function(a) {
            var b;
            try {
                b = Vb.sendBeacon && Vb.sendBeacon(a)
            } catch (c) {
                vb("TAGGING", 15)
            }
            b || ec(a)
        },
        mc = function(a,
        b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        nc = function() {
            var a = z.performance;
            if (a && Da(a.now))
                return a.now()
        },
        oc = function() {
            return z.performance || void 0
        };
    var pc = function(a, b) {
            return E(this, a) && E(this, b)
        },
        qc = function(a, b) {
            return E(this, a) === E(this, b)
        },
        rc = function(a, b) {
            return E(this, a) || E(this, b)
        },
        sc = function(a, b) {
            a = E(this, a);
            b = E(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        tc = function(a, b) {
            a = String(E(this, a));
            b = String(E(this, b));
            return a.substring(0, b.length) === b
        },
        uc = function(a, b) {
            a = E(this, a);
            b = E(this, b);
            switch (a) {
            case "pageLocation":
                var c = z.location.href;
                b instanceof jb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                return c
            }
        };
    var wc = function() {
        this.h = new lb;
        vc(this)
    };
    wc.prototype.execute = function(a) {
        return this.h.B(a)
    };
    var vc = function(a) {
        nb(a.h, "map");
        var b = function(c, d) {
            mb(a.h, c, d)
        };
        b("and", pc);
        b("contains", sc);
        b("equals", qc);
        b("or", rc);
        b("startsWith", tc);
        b("variable", uc)
    };
    var yc = function(a) {
        if (a instanceof yc)
            return a;
        this.Qa = a
    };
    yc.prototype.toString = function() {
        return String(this.Qa)
    };
    var Ac = function(a) {
        ta.call(this);
        this.h = a;
        this.set("then", zc(this));
        this.set("catch", zc(this, !0));
        this.set("finally", zc(this, !1, !0))
    };
    na(Ac, jb);
    var zc = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new fb("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof fb || (d = void 0);
            e instanceof fb || (e = void 0);
            var f = Ba(this.h),
                g = function(l) {
                    return function(n) {
                        return c ? (l.h(f), a.h) : l.h(f, n)
                    }
                },
                h = a.h.then(d && g(d), e && g(e));
            return new Ac(h)
        })
    }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */

    var Bc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Cc = function(a) {
            if (null == a)
                return String(a);
            var b = Bc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Dc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ec = function(a) {
            if (!a || "object" != Cc(a) || a.nodeType || a == a.window)
                return !1;
            try {
                if (a.constructor && !Dc(a, "constructor") && !Dc(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            for (var b in a)
                ;
            return void 0 ===
                b || Dc(a, b)
        },
        K = function(a, b) {
            var c = b || ("array" == Cc(a) ? [] : {}),
                d;
            for (d in a)
                if (Dc(a, d)) {
                    var e = a[d];
                    "array" == Cc(e) ? ("array" != Cc(c[d]) && (c[d] = []), c[d] = K(e, c[d])) : Ec(e) ? (Ec(c[d]) || (c[d] = {}), c[d] = K(e, c[d])) : c[d] = e
                }
            return c
        };
    var Gc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, l) {
                    for (var n = ua(h, 1), p = 0; p < n.length; p++)
                        l[n[p]] = g(h.get(n[p]))
                },
                g = function(h) {
                    var l = d.indexOf(h);
                    if (-1 < l)
                        return e[l];
                    if (h instanceof wa) {
                        var n = [];
                        d.push(h);
                        e.push(n);
                        for (var p = h.Pb(), q = 0; q < p.length(); q++)
                            n[p.get(q)] = g(h.get(p.get(q)));
                        return n
                    }
                    if (h instanceof Ac)
                        return h.h;
                    if (h instanceof jb) {
                        var r = {};
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    if (h instanceof fb) {
                        var u = function() {
                            for (var v = Array.prototype.slice.call(arguments, 0), w = 0; w < v.length; w++)
                                v[w] = Fc(v[w],
                                b, c);
                            var y = new za(b ? b.U : new ya);
                            b && (y.h = b.h);
                            return g(h.h.apply(h, [y].concat(v)))
                        };
                        d.push(h);
                        e.push(u);
                        f(h, u);
                        return u
                    }
                    var t = !1;
                    switch (c) {
                    case 1:
                        t = !0;
                        break;
                    case 2:
                        t = !1;
                        break;
                    case 3:
                        t = !1;
                        break;
                    default:
                    }
                    if (h instanceof yc && t)
                        return h.Qa;
                    switch (typeof h) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                        return h;
                    case "object":
                        if (null === h)
                            return null
                    }
                };
            return g(a)
        },
        Fc = function(a,
        b, c) {
            var d = [],
                e = [],
                f = function(h, l) {
                    for (var n in h)
                        h.hasOwnProperty(n) && l.set(n, g(h[n]))
                },
                g = function(h) {
                    var l = d.indexOf(h);
                    if (-1 < l)
                        return e[l];
                    if (Ga(h) || Na(h)) {
                        var n = new wa([]);
                        d.push(h);
                        e.push(n);
                        for (var p in h)
                            h.hasOwnProperty(p) && n.set(p, g(h[p]));
                        return n
                    }
                    if (Ec(h)) {
                        var q = new jb;
                        d.push(h);
                        e.push(q);
                        f(h, q);
                        return q
                    }
                    if ("function" === typeof h) {
                        var r = new fb("", function(x) {
                            for (var A = Array.prototype.slice.call(arguments, 0), B = 0; B < A.length; B++)
                                A[B] = Gc(E(this, A[B]), b, c);
                            return g((0, this.h.N)(h, h, A))
                        });
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    var w = typeof h;
                    if (null === h || "string" === w || "number" === w || "boolean" === w)
                        return h;
                    var y = !1;
                    switch (c) {
                    case 1:
                        y =
                        !0;
                        break;
                    case 2:
                        y = !1;
                        break;
                    default:
                    }
                    if (void 0 !== h && y)
                        return new yc(h)
                };
            return g(a)
        };
    var Hc = function(a) {
            for (var b = [], c = 0; c < a.length(); c++)
                a.has(c) && (b[c] = a.get(c));
            return b
        },
        Ic = function(a) {
            if (void 0 === a || Ga(a) || Ec(a))
                return !0;
            switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
            }
            return !1
        };
    var Jc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof wa)
                    for (var f = arguments[e], g = 0; g < f.length(); g++)
                        c.push(f.get(g));
                else
                    c.push(arguments[e]);
            return new wa(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
            d < c; d++)
                if (this.has(d) && !b.h(a, this.get(d), d, this))
                    return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
            return new wa(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                this.has(d) && b.h(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                this.get(f) === b)
                    return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
            return new wa(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this,
            Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e,
                f = 0;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d)
                    throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++)
                this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e,
                f = d - 1;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--)
                this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = Hc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
                a.hasOwnProperty(b) ? this.set(c, a[b]) : xa(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
            Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++)
                e.push(this.get(f));
            return new wa(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.h(a, this.get(d), d, this))
                    return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Hc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.h(a, e, f))
            });
            for (var d = 0; d < c.length; d++)
                c.hasOwnProperty(d) ? this.set(d, c[d]) : xa(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
            1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var Kc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Lc = new ra("break"),
        Mc = new ra("continue"),
        Nc = function(a, b) {
            return E(this, a) + E(this, b)
        },
        Oc = function(a, b) {
            return E(this, a) && E(this, b)
        },
        Pc = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            if (!(c instanceof wa))
                throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a)
                throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = Gc(c.get(0));
                        try {
                            return a.toString(e)
                        } catch (q) {}
                    }
                    return a.toString()
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (0 <= Kc.indexOf(b)) {
                    var f = Gc(c);
                    return Fc(a[b].apply(a, f), this.h)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (a instanceof wa) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof fb) {
                        var h = Hc(c);
                        h.unshift(this.h);
                        return g.h.apply(g, h)
                    }
                    throw Error("TypeError: " +
                    b + " is not a function");
                }
                if (0 <= Jc.supportedMethods.indexOf(b)) {
                    var l = Hc(c);
                    l.unshift(this.h);
                    return Jc[b].apply(a, l)
                }
            }
            if (a instanceof fb || a instanceof jb) {
                if (a.has(b)) {
                    var n = a.get(b);
                    if (n instanceof fb) {
                        var p = Hc(c);
                        p.unshift(this.h);
                        return n.h.apply(n, p)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b)
                    return a instanceof fb ? a.U : a.toString();
                if ("hasOwnProperty" === b)
                    return a.has.apply(a, Hc(c))
            }
            if (a instanceof yc && "toString" === b)
                return a.toString();
            throw Error("TypeError: Object has no '" +
            b + "' property.");
        },
        Qc = function(a, b) {
            a = E(this, a);
            if ("string" !== typeof a)
                throw Error("Invalid key name given for assignment.");
            var c = this.h;
            if (!c.has(a))
                throw Error("Attempting to assign to undefined value " + b);
            var d = E(this, b);
            c.set(a, d);
            return d
        },
        Rc = function(a) {
            var b = Ba(this.h),
                c = ib(b, Array.prototype.slice.apply(arguments));
            if (c instanceof ra)
                return c
        },
        Sc = function() {
            return Lc
        },
        Tc = function(a) {
            for (var b = E(this, a), c = 0; c < b.length; c++) {
                var d = E(this, b[c]);
                if (d instanceof ra)
                    return d
            }
        },
        Uc = function(a) {
            for (var b =
                this.h, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = E(this, arguments[c + 1]);
                    Aa(b, d, e, !0)
                }
            }
        },
        Vc = function() {
            return Mc
        },
        Wc = function(a, b, c) {
            var d = new wa;
            b = E(this, b);
            for (var e = 0; e < b.length; e++)
                d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.h.add(a, E(this, f))
        },
        Xc = function(a, b) {
            return E(this, a) / E(this, b)
        },
        Yc = function(a, b) {
            a = E(this, a);
            b = E(this, b);
            var c = a instanceof yc,
                d = b instanceof yc;
            return c || d ? c && d ? a.Qa == b.Qa : !1 : a ==
            b
        },
        Zc = function(a) {
            for (var b, c = 0; c < arguments.length; c++)
                b = E(this, arguments[c]);
            return b
        };
    function $c(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = ib(f, d);
            if (g instanceof ra) {
                if ("break" === g.h)
                    break;
                if ("return" === g.h)
                    return g
            }
        }
    }
    function ad(a, b, c) {
        if ("string" === typeof b)
            return $c(a, function() {
                return b.length
            }, function(f) {
                return f
            }, c);
        if (b instanceof jb || b instanceof wa || b instanceof fb) {
            var d = b.Pb(),
                e = d.length();
            return $c(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var bd = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            var d = this.h;
            return ad(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        cd = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            var d = this.h;
            return ad(function(e) {
                var f = Ba(d);
                Aa(f, a, e, !0);
                return f
            }, b, c)
        },
        dd = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            var d = this.h;
            return ad(function(e) {
                var f = Ba(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        fd = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            var d = this.h;
            return ed(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        gd =
        function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            var d = this.h;
            return ed(function(e) {
                var f = Ba(d);
                Aa(f, a, e, !0);
                return f
            }, b, c)
        },
        hd = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            var d = this.h;
            return ed(function(e) {
                var f = Ba(d);
                f.add(a, e);
                return f
            }, b, c)
        };
    function ed(a, b, c) {
        if ("string" === typeof b)
            return $c(a, function() {
                return b.length
            }, function(d) {
                return b[d]
            }, c);
        if (b instanceof wa)
            return $c(a, function() {
                return b.length()
            }, function(d) {
                return b.get(d)
            }, c);
        throw new TypeError("The value is not iterable.");
    }
    var id = function(a, b, c, d) {
            function e(p, q) {
                for (var r = 0; r < f.length(); r++) {
                    var u = f.get(r);
                    q.add(u, p.get(u))
                }
            }
            var f = E(this, a);
            if (!(f instanceof wa))
                throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.h;
            d = E(this, d);
            var h = Ba(g);
            for (e(g, h); hb(h, b);) {
                var l = ib(h, d);
                if (l instanceof ra) {
                    if ("break" === l.h)
                        break;
                    if ("return" === l.h)
                        return l
                }
                var n = Ba(g);
                e(h, n);
                hb(n, c);
                h = n
            }
        },
        jd = function(a) {
            a = E(this, a);
            var b = this.h,
                c = !1;
            if (c && !b.has(a))
                throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        kd = function(a, b) {
            var c;
            a = E(this, a);
            b = E(this, b);
            if (void 0 === a || null === a)
                throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof jb || a instanceof wa || a instanceof fb)
                c = a.get(b);
            else if ("string" === typeof a)
                "length" === b ? c = a.length : sa(b) && (c = a[b]);
            else if (a instanceof yc)
                return;
            return c
        },
        ld = function(a, b) {
            return E(this, a) > E(this,
            b)
        },
        md = function(a, b) {
            return E(this, a) >= E(this, b)
        },
        nd = function(a, b) {
            a = E(this, a);
            b = E(this, b);
            a instanceof yc && (a = a.Qa);
            b instanceof yc && (b = b.Qa);
            return a === b
        },
        od = function(a, b) {
            return !nd.call(this, a, b)
        },
        pd = function(a, b, c) {
            var d = [];
            E(this, a) ? d = E(this, b) : c && (d = E(this, c));
            var e = ib(this.h, d);
            if (e instanceof ra)
                return e
        },
        qd = function(a, b) {
            return E(this, a) < E(this, b)
        },
        rd = function(a, b) {
            return E(this, a) <= E(this, b)
        },
        sd = function(a, b) {
            return E(this, a) % E(this, b)
        },
        td = function(a, b) {
            return E(this, a) * E(this, b)
        },
        ud = function(a) {
            return -E(this,
            a)
        },
        vd = function(a) {
            return !E(this, a)
        },
        wd = function(a, b) {
            return !Yc.call(this, a, b)
        },
        xd = function() {
            return null
        },
        yd = function(a, b) {
            return E(this, a) || E(this, b)
        },
        zd = function(a, b) {
            var c = E(this, a);
            E(this, b);
            return c
        },
        Ad = function(a) {
            return E(this, a)
        },
        Bd = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        Cd = function(a) {
            return new ra("return", E(this, a))
        },
        Dd = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            if (null === a || void 0 === a)
                throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof
            fb || a instanceof wa || a instanceof jb) && a.set(b, c);
            return c
        },
        Ed = function(a, b) {
            return E(this, a) - E(this, b)
        },
        Fd = function(a, b, c) {
            a = E(this, a);
            var d = E(this, b),
                e = E(this, c);
            if (!Ga(d) || !Ga(e))
                throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === E(this, d[h]))
                    if (f = E(this, e[h]), f instanceof ra) {
                        var l = f.h;
                        if ("break" === l)
                            return;
                        if ("return" === l || "continue" === l)
                            return f
                    } else
                        g = !0;
            if (e.length === d.length + 1 && (f = E(this, e[e.length - 1]), f instanceof ra && ("return" === f.h || "continue" ===
            f.h)))
                return f
        },
        Gd = function(a, b, c) {
            return E(this, a) ? E(this, b) : E(this, c)
        },
        Hd = function(a) {
            a = E(this, a);
            return a instanceof fb ? "function" : typeof a
        },
        Id = function(a) {
            for (var b = this.h, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        Jd = function(a, b, c, d) {
            var e = E(this, d);
            if (E(this, c)) {
                var f = ib(this.h, e);
                if (f instanceof ra) {
                    if ("break" === f.h)
                        return;
                    if ("return" === f.h)
                        return f
                }
            }
            for (; E(this, a);) {
                var g = ib(this.h, e);
                if (g instanceof ra) {
                    if ("break" === g.h)
                        break;
                    if ("return" === g.h)
                        return g
                }
                E(this,
                b)
            }
        },
        Kd = function(a) {
            return ~Number(E(this, a))
        },
        Od = function(a, b) {
            return Number(E(this, a)) << Number(E(this, b))
        },
        Pd = function(a, b) {
            return Number(E(this, a)) >> Number(E(this, b))
        },
        Qd = function(a, b) {
            return Number(E(this, a)) >>> Number(E(this, b))
        },
        Rd = function(a, b) {
            return Number(E(this, a)) & Number(E(this, b))
        },
        Sd = function(a, b) {
            return Number(E(this, a)) ^ Number(E(this, b))
        },
        Td = function(a, b) {
            return Number(E(this, a)) | Number(E(this, b))
        };
    var Vd = function() {
        this.h = new lb;
        Ud(this)
    };
    Vd.prototype.execute = function(a) {
        return Wd(this.h.B(a))
    };
    var Xd = function(a, b, c) {
            return Wd(a.h.F(b, c))
        },
        Ud = function(a) {
            var b = function(d, e) {
                nb(a.h, d, String(e))
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) {
                mb(a.h, String(d), e)
            };
            c(0, Nc);
            c(1, Oc);
            c(2, Pc);
            c(3, Qc);
            c(53, Rc);
            c(4, Sc);
            c(5, Tc);
            c(52, Uc);
            c(6, Vc);
            c(9, Tc);
            c(50, Wc);
            c(10, Xc);
            c(12, Yc);
            c(13, Zc);
            c(47, bd);
            c(54, cd);
            c(55, dd);
            c(63, id);
            c(64, fd);
            c(65, gd);
            c(66, hd);
            c(15, jd);
            c(16, kd);
            c(17, kd);
            c(18, ld);
            c(19, md);
            c(20, nd);
            c(21, od);
            c(22, pd);
            c(23, qd);
            c(24, rd);
            c(25, sd);
            c(26, td);
            c(27,
            ud);
            c(28, vd);
            c(29, wd);
            c(45, xd);
            c(30, yd);
            c(32, zd);
            c(33, zd);
            c(34, Ad);
            c(35, Ad);
            c(46, Bd);
            c(36, Cd);
            c(43, Dd);
            c(37, Ed);
            c(38, Fd);
            c(39, Gd);
            c(40, Hd);
            c(41, Id);
            c(42, Jd);
            c(58, Kd);
            c(57, Od);
            c(60, Pd);
            c(61, Qd);
            c(56, Rd);
            c(62, Sd);
            c(59, Td)
        };
    function Wd(a) {
        if (a instanceof ra || a instanceof fb || a instanceof wa || a instanceof jb || a instanceof yc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a)
            return a
    }
    ;
    var Yd = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Li: a("consent"),
            Eg: a("convert_case_to"),
            Fg: a("convert_false_to"),
            Gg: a("convert_null_to"),
            Hg: a("convert_true_to"),
            Ig: a("convert_undefined_to"),
            yl: a("debug_mode_metadata"),
            Wa: a("function"),
            Cf: a("instance_name"),
            Aj: a("live_only"),
            Bj: a("malware_disabled"),
            Cj: a("metadata"),
            Fj: a("original_activity_id"),
            Cl: a("original_vendor_template_id"),
            Bl: a("once_on_load"),
            Ej: a("once_per_event"),
            Ih: a("once_per_load"),
            El: a("priority_override"),
            Fl: a("respected_consent_types"),
            Mh: a("setup_tags"),
            Bb: a("tag_id"),
            Rh: a("teardown_tags")
        }
    }();
    var te;
    var ue = [],
        ve = [],
        we = [],
        xe = [],
        ye = [],
        ze = {},
        Ae,
        Be,
        De = function() {
            var a = Ce;
            Be = Be || a
        },
        Ee,
        Fe = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b)
                b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        He = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c)
                throw Error("Error: No function name given for function call.");
            var e = ze[c],
                f = {},
                g;
            for (g in a)
                a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.Wh && d.Wh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
            e && d && d.Vh && (f.vtp_gtmCachedValues = d.Vh);
            if (b) {
                if (null ==
                b.name) {
                    var h;
                    a:
                    {
                        var l = b.index;
                        if (null == l)
                            h = "";
                        else {
                            var n;
                            switch (b.type) {
                            case 2:
                                n = ue[l];
                                break;
                            case 1:
                                n = xe[l];
                                break;
                            default:
                                h = "";
                                break a
                            }
                            var p = n && n[Yd.Cf];
                            h = p ? String(p) : ""
                        }
                    }b.name = h
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : te(c, f, b)
        },
        Je = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a)
                a.hasOwnProperty(e) && (d[e] = Ie(a[e], b, c));
            return d
        },
        Ie = function(a, b, c) {
            if (Ga(a)) {
                var d;
                switch (a[0]) {
                case "function_id":
                    return a[1];
                case "list":
                    d = [];
                    for (var e = 1; e < a.length; e++)
                        d.push(Ie(a[e],
                        b, c));
                    return d;
                case "macro":
                    var f = a[1];
                    if (c[f])
                        return;
                    var g = ue[f];
                    if (!g || b.Zf(g))
                        return;
                    c[f] = !0;
                    var h = String(g[Yd.Cf]);
                    try {
                        var l = Je(g, b, c);
                        l.vtp_gtmEventId = b.id;
                        b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
                        d = He(l, {
                            event: b,
                            index: f,
                            type: 2,
                            name: h
                        });
                        Ee && (d = Ee.Sj(d, l))
                    } catch (x) {
                        b.ii && b.ii(x, Number(f), h),
                        d = !1
                    }
                    c[f] = !1;
                    return d;
                case "map":
                    d = {};
                    for (var n = 1; n < a.length; n += 2)
                        d[Ie(a[n], b, c)] = Ie(a[n + 1], b, c);
                    return d;
                case "template":
                    d = [];
                    for (var p = !1, q = 1; q < a.length; q++) {
                        var r = Ie(a[q], b, c);
                        Be && (p = p || r === Be.te);
                        d.push(r)
                    }
                    return Be && p ? Be.Uj(d) : d.join("");
                case "escape":
                    d = Ie(a[1], b, c);
                    if (Be && Ga(a[1]) && "macro" === a[1][0] && Be.wk(a))
                        return Be.Pk(d);
                    d = String(d);
                    for (var u = 2; u < a.length; u++)
                        Zd[a[u]] && (d = Zd[a[u]](d));
                    return d;
                case "tag":
                    var t = a[1];
                    if (!xe[t])
                        throw Error("Unable to resolve tag reference " + t + ".");
                    return d = {
                        bi: a[2],
                        index: t
                    };
                case "zb":
                    var v = {
                        arg0: a[2],
                        arg1: a[3],
                        ignore_case: a[5]
                    };
                    v["function"] = a[1];
                    var w = Ke(v, b, c),
                        y = !!a[4];
                    return y || 2 !== w ? y !== (1 === w) : null;
                default:
                    throw Error("Attempting to expand unknown Value type: " +
                    a[0] + ".");
                }
            }
            return a
        },
        Ke = function(a, b, c) {
            try {
                return Ae(Je(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Le = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.B = a;
        this.h = c
    };
    na(Le, Error);
    function Me(a, b) {
        if (Ga(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++)
                Me(a[c], b[c])
        }
    }
    ;
    var Ne = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.Lk = a;
        this.B = b;
        this.h = []
    };
    na(Ne, Error);
    var Pe = function() {
        return function(a, b) {
            a instanceof Ne || (a = new Ne(a, Oe));
            b && a.h.push(b);
            throw a;
        }
    };
    function Oe(a) {
        if (!a.length)
            return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--)
            Ea(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--)
            a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    }
    ;
    var Se = function(a) {
            function b(r) {
                for (var u = 0; u < r.length; u++)
                    d[r[u]] = !0
            }
            for (var c = [], d = [], e = Qe(a), f = 0; f < ve.length; f++) {
                var g = ve[f],
                    h = Re(g, e);
                if (h) {
                    for (var l = g.add || [], n = 0; n < l.length; n++)
                        c[l[n]] = !0;
                    b(g.block || [])
                } else
                    null === h && b(g.block || []);
            }
            for (var p = [], q = 0; q < xe.length; q++)
                c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Re = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e)
                    return !1;
                if (2 === e)
                    return null
            }
            for (var f =
                a.unless || [], g = 0; g < f.length; g++) {
                var h = b(f[g]);
                if (2 === h)
                    return null;
                if (1 === h)
                    return !1
            }
            return !0
        },
        Qe = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Ke(we[c], a));
                return b[c]
            }
        };
    var Te = {
        Sj: function(a, b) {
            b[Yd.Eg] && "string" === typeof a && (a = 1 == b[Yd.Eg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Yd.Gg) && null === a && (a = b[Yd.Gg]);
            b.hasOwnProperty(Yd.Ig) && void 0 === a && (a = b[Yd.Ig]);
            b.hasOwnProperty(Yd.Hg) && !0 === a && (a = b[Yd.Hg]);
            b.hasOwnProperty(Yd.Fg) && !1 === a && (a = b[Yd.Fg]);
            return a
        }
    };
    var Ue = function() {
        this.h = {}
    };
    function Ve(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d),
                    g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f)
                    throw new Le(c, d, g);
            }
    }
    function We(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d],
                    f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Ve(e, b, d, g);
                    Ve(f, b, d, g)
                }
            }
        }
    }
    ;
    var $e = function() {
            var a = data.permissions || {},
                b = Xe.H,
                c = this;
            this.B = new Ue;
            this.h = {};
            var d = {},
                e = We(this.B, b, function() {
                    var f = arguments[0];
                    return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            m(a, function(f, g) {
                var h = {};
                m(g, function(l, n) {
                    var p = Ye(l, n);
                    h[l] = p.assert;
                    d[l] || (d[l] = p.ba)
                });
                c.h[f] = function(l, n) {
                    var p = h[l];
                    if (!p)
                        throw Ze(l, {}, "The requested permission " + l + " is not configured.");
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q)
                }
            })
        },
        bf =
        function(a) {
            return af.h[a] || function() {}
        };
    function Ye(a, b) {
        var c = Fe(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Ze;
        try {
            return He(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Le(e, {}, "Permission " + e + " is unknown.");
                },
                ba: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f)
                        e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }
    function Ze(a, b, c) {
        return new Le(a, b, c)
    }
    ;
    var cf = !1;
    var df = {};
    df.wl = Pa('');
    df.Xj = Pa('');
    var ef = cf,
        ff = df.Xj,
        gf = df.wl;
    var hf = function(a, b) {
        var c = String(a);
        return c
    };
    var of = function(a) {
            var b = {},
                c = 0,
                d = jf ? 27 : 10;
            m(a, function(f, g) {
                if (void 0 !== g)
                    if (g = hf(g, 100), kf.hasOwnProperty(f))
                        b[kf[f]] = lf(g);
                    else if (mf.hasOwnProperty(f)) {
                        var h = mf[f],
                            l = lf(g);
                        b.hasOwnProperty(h) || (b[h] = l)
                    } else if ("category" === f)
                        for (var n = lf(g).split("/", 5), p = 0; p < n.length; p++) {
                            var q = nf[p],
                                r = n[p];
                            b.hasOwnProperty(q) || (b[q] = r)
                        }
                    else if (c < d) {
                        var u = 10 > c ? "" + c : String.fromCharCode(65 + c - 10);
                        b["k" + u] = lf(hf(f, 40));
                        b["v" + u] = lf(g);
                        c++
                    }
            });
            var e = [];
            m(b, function(f, g) {
                e.push("" + f + g)
            });
            return e.join("~")
        },
        lf = function(a) {
            return ("" +
            a).replace(/~/g, function() {
                return "~~"
            })
        },
        jf = !1;
    jf = !0;
    var kf = {
            item_id: "id",
            item_name: "nm",
            item_brand: "br",
            item_category: "ca",
            item_category2: "c2",
            item_category3: "c3",
            item_category4: "c4",
            item_category5: "c5",
            item_variant: "va",
            price: "pr",
            quantity: "qt",
            coupon: "cp",
            item_list_name: "ln",
            index: "lp",
            item_list_id: "li",
            discount: "ds",
            affiliation: "af",
            promotion_id: "pi",
            promotion_name: "pn",
            creative_name: "cn",
            creative_slot: "cs",
            location_id: "lo"
        },
        mf = {
            id: "id",
            name: "nm",
            brand: "br",
            variant: "va",
            list_name: "ln",
            list_position: "lp",
            list: "ln",
            position: "lp",
            creative: "cn"
        },
        nf = ["ca", "c2", "c3", "c4", "c5"];
    var pf = function(a) {
            var b = [];
            m(a, function(c, d) {
                null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
            });
            return b.join("&")
        },
        qf = function(a, b, c, d) {
            this.Ba = a.Ba;
            this.Ub = a.Ub;
            this.Sf = a.Sf;
            this.h = b;
            this.F = c;
            this.D = pf(a.Ba);
            this.B = pf(a.Sf);
            this.N = this.B.length;
            if (d && 16384 < this.N)
                throw Error("EVENT_TOO_LARGE");
        };
    var rf = function() {
        this.events = [];
        this.h = this.Ba = "";
        this.D = 0;
        this.B = !1
    };
    rf.prototype.add = function(a) {
        return this.F(a) ? (this.events.push(a), this.Ba = a.D, this.h = a.h, this.D += a.N, this.B = a.F, !0) : !1
    };
    rf.prototype.F = function(a) {
        var b = 20 > this.events.length && 16384 > a.N + this.D,
            c = this.Ba === a.D && this.h === a.h && this.B === a.F;
        return 0 == this.events.length || b && c
    };
    var sf = function(a, b) {
            m(a, function(c, d) {
                null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            })
        },
        tf = function(a, b) {
            var c = [];
            a.D && c.push(a.D);
            b && c.push("_s=" + b);
            sf(a.Ub, c);
            var d = !1;
            a.B && (c.push(a.B), d = !0);
            var e = c.join("&"),
                f = "",
                g = e.length + a.h.length + 1;
            d && 2048 < g && (f = c.pop(), e = c.join("&"));
            return {
                mg: e,
                body: f
            }
        },
        uf = function(a, b) {
            var c = a.events;
            if (1 == c.length)
                return tf(c[0], b);
            var d = [];
            a.Ba && d.push(a.Ba);
            for (var e = {}, f = 0; f < c.length; f++)
                m(c[f].Ub, function(u, t) {
                    null != t && (e[u] = e[u] || {}, e[u][String(t)] =
                    e[u][String(t)] + 1 || 1)
                });
            var g = {};
            m(e, function(u, t) {
                var v,
                    w = -1,
                    y = 0;
                m(t, function(x, A) {
                    y += A;
                    var B = (x.length + u.length + 2) * (A - 1);
                    B > w && (v = x, w = B)
                });
                y == c.length && (g[u] = v)
            });
            sf(g, d);
            b && d.push("_s=" + b);
            for (var h = d.join("&"), l = [], n = {}, p = 0; p < c.length; n = {
                Jd: n.Jd
            }, p++) {
                var q = [];
                n.Jd = {};
                m(c[p].Ub, function(u) {
                    return function(t, v) {
                        g[t] != "" + v && (u.Jd[t] = v)
                    }
                }(n));
                c[p].B && q.push(c[p].B);
                sf(n.Jd, q);
                l.push(q.join("&"))
            }
            var r = l.join("\r\n");
            return {
                mg: h,
                body: r
            }
        };
    var Ef = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
    function Ff(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a << 2 | b]
    }
    ;
    var Gf = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        Hf = {
            Fn: "function",
            DustMap: "Object",
            List: "Array"
        },
        L = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = Gf.exec(b[d]);
                if (!e)
                    throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    l = c[d];
                if (null == l) {
                    if (g)
                        throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== h) {
                    var n = typeof l;
                    l instanceof fb ? n = "Fn" : l instanceof wa ? n = "List" : l instanceof jb ? n = "DustMap" : l instanceof yc && (n = "OpaqueValue");
                    if (n != h)
                        throw Error("Error in " + a + ". Argument " + f + " has type " + (Hf[n] || n) + ", which does not match required type " + (Hf[h] || h) + ".");
                }
            }
        };
    function If(a) {
        return "" + a
    }
    function Jf(a, b) {
        var c = [];
        return c
    }
    ;
    var Kf = function(a, b) {
            var c = new fb(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
                    d[e] = E(this, d[e]);
                return b.apply(this, d)
            });
            c.Qb();
            return c
        },
        Lf = function(a, b) {
            var c = new jb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Da(e) ? c.set(d, Kf(a + "_" + d, e)) : (Ea(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
                }
            c.Qb();
            return c
        };
    var Mf = function(a, b) {
        L(F(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new jb;
        return d = Lf("AssertApiSubject", c)
    };
    var Nf = function(a, b) {
        L(F(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof Ac)
            throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new jb;
        return d = Lf("AssertThatSubject", c)
    };
    function Qf(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
                b.push(Gc(arguments[d], c));
            return Fc(a.apply(null, b))
        }
    }
    var Sf = function() {
        for (var a = Math, b = Rf, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Qf(a[e].bind(a)))
        }
        return c
    };
    var Tf = function(a) {
        var b;
        return b
    };
    var Uf = function(a) {
        var b;
        return b
    };
    var Vf = function(a) {
        return encodeURI(a)
    };
    var Wf = function(a) {
        return encodeURIComponent(a)
    };
    var Xf = function(a) {
        L(F(this), ["message:?string"], arguments);
    };
    var Yf = function(a, b) {
        L(F(this), ["min:!number", "max:!number"], arguments);
        return Ka(a, b)
    };
    var M = function(a, b, c) {
        var d = a.h.h;
        if (!d)
            throw Error("Missing program state.");
        d.Qj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Zf = function() {
        M(this, "read_container_data");
        var a = new jb;
        a.set("containerId", 'G-G91F3J3HWN');
        a.set("version", '1');
        a.set("environmentName", '');
        a.set("debugMode", ef);
        a.set("previewMode", gf);
        a.set("environmentMode", ff);
        a.Qb();
        return a
    };
    var $f = function() {
        return (new Date).getTime()
    };
    var ag = function(a) {
        if (null === a)
            return "null";
        if (a instanceof wa)
            return "array";
        if (a instanceof fb)
            return "function";
        if (a instanceof yc) {
            a = a.Qa;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var bg = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (ef || gf) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return Fc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(Gc(c))
            })
        }
    };
    var cg = function(a) {
        return Oa(Gc(a, this.h))
    };
    var dg = function(a) {
        return Number(Gc(a, this.h))
    };
    var eg = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var fg = function(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null
    };
    var Rf = "floor ceil round max min abs pow sqrt".split(" ");
    var gg = function() {
            var a = {};
            return {
                jk: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                ml: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        hg = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return fb.prototype.h.apply(a, c)
            }
        },
        ig = function(a, b) {
            L(F(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var jg = {};
    jg.keys = function(a) {
        return new wa
    };
    jg.values = function(a) {
        return new wa
    };
    jg.entries = function(a) {
        return new wa
    };
    jg.freeze = function(a) {
        return a
    };
    jg.delete = function(a, b) {
        return !1
    };
    var lg = function() {
        this.h = {};
        this.B = {};
    };
    lg.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    };
    lg.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a))
            throw "Attempting to add a function which already exists: " + a + ".";
        if (this.B.hasOwnProperty(a))
            throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Da(b) ? Kf(a, b) : Lf(a, b)
    };
    function mg(a, b) {
        var c = void 0;
        return c
    }
    ;
    function ng() {
        var a = {};
        return a
    }
    ;
    var pg = function(a) {
            return og ? I.querySelectorAll(a) : null
        },
        qg = function(a, b) {
            if (!og)
                return null;
            if (Element.prototype.closest)
                try {
                    return a.closest(b)
                } catch (e) {
                    return null
                }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!I.documentElement.contains(d))
                return null;
            do {
                try {
                    if (c.call(d, b))
                        return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        rg = !1;
    if (I.querySelectorAll)
        try {
            var sg = I.querySelectorAll(":root");
            sg && 1 == sg.length && sg[0] == I.documentElement && (rg = !0)
        } catch (a) {}
    var og = rg;
    var N = function(a) {
        vb("GTM", a)
    };
    var tg = function(a) {
            return null == a ? "" : k(a) ? Ra(String(a)) : "e0"
        },
        vg = function(a) {
            return a.replace(ug, "")
        },
        xg = function(a) {
            return wg(a.replace(/\s/g, ""))
        },
        wg = function(a) {
            return Ra(a.replace(yg, "").toLowerCase())
        },
        Ag = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return zg.test(a) ? a : "e0"
        },
        Cg = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (Bg.test(c))
                    return c
            }
            return "e0"
        },
        Fg = function(a,
        b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== Dg.indexOf(c.name) ? Eg(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        Eg = function(a) {
            if ("" === a || "e0" === a)
                return Promise.resolve(a);
            if (z.crypto && z.crypto.subtle) {
                if (Gg.test(a))
                    return Promise.resolve(a);
                try {
                    var b = Hg(a);
                    return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                        var d = Array.from(new Uint8Array(c)).map(function(e) {
                            return String.fromCharCode(e)
                        }).join("");
                        return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }).catch(function() {
                        return "e2"
                    })
                } catch (c) {
                    return Promise.resolve("e2")
                }
            } else
                return Promise.resolve("e1")
        },
        Hg = function(a) {
            var b;
            if (z.TextEncoder)
                b = (new TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
                    e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        yg = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        Bg = /^\S+@\S+\.\S+$/,
        zg = /^\+\d{10,15}$/,
        ug = /[.~]/g,
        Ig = /^[0-9A-Za-z_-]{43}$/,
        Gg = /^[0-9A-Fa-f]{64}$/,
        Jg = {},
        Kg = (Jg.email = "em", Jg.phone_number = "pn", Jg.first_name = "fn", Jg.last_name = "ln", Jg.street = "sa", Jg.city = "ct", Jg.region = "rg", Jg.country = "co", Jg.postal_code = "pc", Jg.error_code = "ec", Jg),
        Lg = {},
        Mg = (Lg.email = "sha256_email_address", Lg.phone_number = "sha256_phone_number", Lg.first_name = "sha256_first_name", Lg.last_name =
        "sha256_last_name", Lg.street = "sha256_street", Lg),
        Ng = function(a, b) {
            function c(u, t, v, w) {
                var y = tg(u);
                "" !== y && (Gg.test(y) ? l.push({
                    name: t,
                    value: y,
                    index: w
                }) : l.push({
                    name: t,
                    value: v(y),
                    index: w
                }))
            }
            function d(u, t) {
                var v = u;
                if (k(v) || Ga(v)) {
                    v = Ga(u) ? u : [u];
                    for (var w = 0; w < v.length; ++w) {
                        var y = tg(v[w]),
                            x = Gg.test(y);
                        t && !x && N(89);
                        !t && x && N(88)
                    }
                }
            }
            function e(u, t) {
                var v = u[t];
                d(v, !1);
                var w = Mg[t];
                u.hasOwnProperty(w) && (u.hasOwnProperty(t) && N(90), v = u[w], d(v, !0));
                return v
            }
            function f(u, t, v) {
                var w = e(u, t);
                w = Ga(w) ? w : [w];
                for (var y =
                0; y < w.length; ++y)
                    c(w[y], t, v)
            }
            function g(u, t, v, w) {
                var y = e(u, t);
                c(y, t, v, w)
            }
            function h(u) {
                return function(t) {
                    N(64);
                    return u(t)
                }
            }
            var l = [];
            if ("https:" === z.location.protocol) {
                f(a, "email", Cg);
                f(a, "phone_number", Ag);
                f(a, "first_name", h(xg));
                f(a, "last_name", h(xg));
                var n = a.home_address || {};
                f(n, "street", h(wg));
                f(n, "city", h(wg));
                f(n, "postal_code", h(vg));
                f(n, "region", h(wg));
                f(n, "country", h(vg));
                var p = a.address || {};
                p = Ga(p) ? p : [p];
                for (var q = 0; q < p.length; q++) {
                    var r = p[q];
                    g(r, "first_name", xg, q);
                    g(r, "last_name", xg, q);
                    g(r, "street", wg, q);
                    g(r, "city", wg, q);
                    g(r, "postal_code", vg, q);
                    g(r, "region", wg, q);
                    g(r, "country", vg, q)
                }
                Fg(l, b)
            } else
                l.push({
                    name: "error_code",
                    value: "e3",
                    index: void 0
                }),
                b(l)
        },
        Og = function(a, b) {
            Ng(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        h = c[f].value,
                        l = c[f].index,
                        n = Kg[g];
                    n && h && (-1 === Dg.indexOf(g) || /^e\d+$/.test(h) || Ig.test(h) || Gg.test(h)) && (void 0 !== l && (n += l), d.push(n + "." + h), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        Pg = function(a) {
            if (z.Promise)
                try {
                    return new Promise(function(b) {
                        Og(a,
                        function(c, d) {
                            b({
                                lg: c,
                                Ok: d
                            })
                        })
                    })
                } catch (b) {}
        },
        Dg = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var S = {
            g: {
                K: "ad_storage",
                W: "analytics_storage",
                Te: "region",
                Ag: "consent_updated",
                Ue: "wait_for_update",
                Pi: "app_remove",
                Qi: "app_store_refund",
                Ri: "app_store_subscription_cancel",
                Si: "app_store_subscription_convert",
                Ti: "app_store_subscription_renew",
                Jg: "add_payment_info",
                Kg: "add_shipping_info",
                Hc: "add_to_cart",
                Ic: "remove_from_cart",
                Lg: "view_cart",
                Yb: "begin_checkout",
                Jc: "select_item",
                Gb: "view_item_list",
                Zb: "select_promotion",
                Hb: "view_promotion",
                Ha: "purchase",
                Kc: "refund",
                Ia: "view_item",
                Mg: "add_to_wishlist",
                Ui: "first_open",
                Vi: "first_visit",
                Ea: "gtag.config",
                Ja: "gtag.get",
                Wi: "in_app_purchase",
                Lc: "page_view",
                Xi: "session_start",
                Xe: "user_engagement",
                ac: "gclid",
                na: "ads_data_redaction",
                da: "allow_ad_personalization_signals",
                Ye: "allow_custom_scripts",
                Yi: "allow_display_features",
                Nd: "allow_enhanced_conversions",
                Ib: "allow_google_signals",
                Fa: "allow_interest_groups",
                Od: "auid",
                Zi: "auto_detection_enabled",
                Jb: "aw_remarketing",
                Ze: "aw_remarketing_only",
                Pd: "discount",
                Qd: "aw_feed_country",
                Rd: "aw_feed_language",
                ja: "items",
                Sd: "aw_merchant_id",
                Ng: "aw_basket_type",
                Td: "campaign_content",
                Ud: "campaign_id",
                Vd: "campaign_medium",
                Wd: "campaign_name",
                Mc: "campaign",
                Xd: "campaign_source",
                Yd: "campaign_term",
                ub: "client_id",
                aj: "content_group",
                bj: "content_type",
                Ka: "conversion_cookie_prefix",
                Nc: "conversion_id",
                xa: "conversion_linker",
                Oc: "conversion_api",
                vb: "cookie_domain",
                Ra: "cookie_expires",
                wb: "cookie_flags",
                Pc: "cookie_name",
                af: "cookie_path",
                hb: "cookie_prefix",
                bc: "cookie_update",
                Qc: "country",
                sa: "currency",
                Zd: "customer_lifetime_value",
                Rc: "custom_map",
                cj: "debug_mode",
                fa: "developer_id",
                dj: "disable_merchant_reported_purchases",
                ej: "dc_custom_params",
                fj: "dc_natural_search",
                bf: "dynamic_event_settings",
                gj: "affiliation",
                Og: "checkout_option",
                Pg: "checkout_step",
                ij: "coupon",
                cf: "item_list_name",
                df: "list_name",
                jj: "promotions",
                ae: "shipping",
                Qg: "tax",
                be: "engagement_time_msec",
                Sc: "enhanced_client_id",
                Tc: "enhanced_conversions",
                Rg: "enhanced_conversions_automatic_settings",
                ce: "estimated_delivery_date",
                ef: "euid_logged_in_state",
                cc: "event_callback",
                fc: "event_developer_id_string",
                Sg: "event",
                de: "event_settings",
                ee: "event_timeout",
                kj: "experiments",
                ff: "firebase_id",
                fe: "first_party_collection",
                he: "_x_20",
                Kb: "_x_19",
                Tg: "fledge",
                Ug: "flight_error_code",
                Vg: "flight_error_message",
                Wg: "gac_gclid",
                ie: "gac_wbraid",
                Xg: "gac_wbraid_multiple_conversions",
                hf: "ga_restrict_domain",
                jf: "ga_temp_client_id",
                Yg: "gdpr_applies",
                Zg: "geo_granularity",
                xb: "value_callback",
                ib: "value_key",
                zl: "google_ono",
                jb: "google_signals",
                Uc: "google_tld",
                je: "groups",
                ah: "gsa_experiment_id",
                bh: "iframe_state",
                ke: "ignore_referrer",
                kf: "internal_traffic_results",
                me: "is_legacy_loaded",
                dh: "is_passthrough",
                Sa: "language",
                lf: "legacy_developer_id_string",
                ya: "linker",
                ic: "accept_incoming",
                Lb: "decorate_forms",
                V: "domains",
                jc: "url_position",
                eh: "method",
                Vc: "new_customer",
                fh: "non_interaction",
                lj: "optimize_id",
                ne: "page_path",
                Ua: "page_referrer",
                kc: "page_title",
                gh: "passengers",
                hh: "phone_conversion_callback",
                mj: "phone_conversion_country_code",
                ih: "phone_conversion_css_class",
                nj: "phone_conversion_ids",
                jh: "phone_conversion_number",
                kh: "phone_conversion_options",
                lh: "quantity",
                Wc: "redact_device_info",
                nf: "redact_enhanced_user_id",
                oj: "redact_ga_client_id",
                pj: "redact_user_id",
                oe: "referral_exclusion_definition",
                Mb: "restricted_data_processing",
                qj: "retoken",
                mh: "screen_name",
                Nb: "screen_resolution",
                rj: "search_term",
                La: "send_page_view",
                Ob: "send_to",
                Xc: "session_duration",
                pe: "session_engaged",
                pf: "session_engaged_time",
                yb: "session_id",
                qe: "session_number",
                Yc: "delivery_postal_code",
                oh: "temporary_client_id",
                sj: "tracking_id",
                qf: "traffic_type",
                Va: "transaction_id",
                za: "transport_url",
                ph: "trip_type",
                Zc: "update",
                zb: "url_passthrough",
                rf: "_user_agent_architecture",
                sf: "_user_agent_bitness",
                tf: "_user_agent_full_version_list",
                uf: "_user_agent_mobile",
                vf: "_user_agent_model",
                wf: "_user_agent_platform",
                xf: "_user_agent_platform_version",
                qh: "_user_agent_wait",
                yf: "_user_agent_wow64",
                va: "user_data",
                rh: "user_data_auto_latency",
                sh: "user_data_auto_meta",
                th: "user_data_auto_multi",
                uh: "user_data_auto_selectors",
                vh: "user_data_auto_status",
                wh: "user_data_mode",
                zf: "user_data_settings",
                Aa: "user_id",
                Ma: "user_properties",
                xh: "us_privacy_string",
                qa: "value",
                se: "wbraid",
                yh: "wbraid_multiple_conversions",
                Eh: "_host_name",
                Fh: "_in_page_command",
                Df: "_is_linker_valid",
                Gh: "_is_passthrough_cid",
                Hh: "non_personalized_ads",
                ed: "_sst_parameters",
                fb: "conversion_label",
                Ta: "page_location",
                hc: "global_developer_id_string",
                nh: "tc_privacy_string"
            }
        },
        Qg = {},
        Rg = Object.freeze((Qg[S.g.da] = 1, Qg[S.g.Nd] = 1, Qg[S.g.Ib] = 1, Qg[S.g.ja] = 1, Qg[S.g.vb] = 1, Qg[S.g.Ra] = 1, Qg[S.g.wb] = 1, Qg[S.g.Pc] = 1, Qg[S.g.af] = 1, Qg[S.g.hb] = 1, Qg[S.g.bc] =
        1, Qg[S.g.Rc] = 1, Qg[S.g.fa] = 1, Qg[S.g.bf] = 1, Qg[S.g.cc] = 1, Qg[S.g.de] = 1, Qg[S.g.ee] = 1, Qg[S.g.fe] = 1, Qg[S.g.hf] = 1, Qg[S.g.jb] = 1, Qg[S.g.Uc] = 1, Qg[S.g.je] = 1, Qg[S.g.kf] = 1, Qg[S.g.me] = 1, Qg[S.g.ya] = 1, Qg[S.g.nf] = 1, Qg[S.g.oe] = 1, Qg[S.g.Mb] = 1, Qg[S.g.La] = 1, Qg[S.g.Ob] = 1, Qg[S.g.Xc] = 1, Qg[S.g.pf] = 1, Qg[S.g.Yc] = 1, Qg[S.g.za] = 1, Qg[S.g.Zc] = 1, Qg[S.g.zf] = 1, Qg[S.g.Ma] = 1, Qg[S.g.ed] = 1, Qg));
    Object.freeze([S.g.Ta, S.g.Ua, S.g.kc, S.g.Sa, S.g.mh, S.g.Aa, S.g.ff, S.g.aj]);
    var Sg = {},
        Tg = Object.freeze((Sg[S.g.Pi] = 1, Sg[S.g.Qi] = 1, Sg[S.g.Ri] = 1, Sg[S.g.Si] = 1, Sg[S.g.Ti] = 1, Sg[S.g.Ui] = 1, Sg[S.g.Vi] = 1, Sg[S.g.Wi] = 1, Sg[S.g.Xi] = 1, Sg[S.g.Xe] = 1, Sg)),
        Ug = {},
        Vg = Object.freeze((Ug[S.g.Jg] = 1, Ug[S.g.Kg] = 1, Ug[S.g.Hc] = 1, Ug[S.g.Ic] = 1, Ug[S.g.Lg] = 1, Ug[S.g.Yb] = 1, Ug[S.g.Jc] = 1, Ug[S.g.Gb] = 1, Ug[S.g.Zb] = 1, Ug[S.g.Hb] = 1, Ug[S.g.Ha] = 1, Ug[S.g.Kc] = 1, Ug[S.g.Ia] = 1, Ug[S.g.Mg] = 1, Ug)),
        Wg = Object.freeze([S.g.da, S.g.Ib, S.g.bc]),
        Xg = Object.freeze([].concat(Wg)),
        Yg = Object.freeze([S.g.Ra, S.g.ee, S.g.Xc, S.g.pf, S.g.be]),
        Zg = Object.freeze([].concat(Yg)),
        $g = {},
        ah = ($g[S.g.K] = "1", $g[S.g.W] = "2", $g),
        bh = {},
        ch = Object.freeze((bh[S.g.da] = 1, bh[S.g.Nd] = 1, bh[S.g.Fa] = 1, bh[S.g.Jb] = 1, bh[S.g.Ze] = 1, bh[S.g.Pd] = 1, bh[S.g.Qd] = 1, bh[S.g.Rd] = 1, bh[S.g.ja] = 1, bh[S.g.Sd] = 1, bh[S.g.Ka] = 1, bh[S.g.xa] = 1, bh[S.g.vb] = 1, bh[S.g.Ra] = 1, bh[S.g.wb] = 1, bh[S.g.hb] = 1, bh[S.g.sa] = 1, bh[S.g.Zd] = 1, bh[S.g.fa] = 1, bh[S.g.dj] = 1, bh[S.g.Tc] = 1, bh[S.g.ce] = 1, bh[S.g.ff] = 1, bh[S.g.fe] = 1, bh[S.g.me] = 1, bh[S.g.Sa] = 1, bh[S.g.Vc] = 1, bh[S.g.Ta] = 1, bh[S.g.Ua] = 1, bh[S.g.hh] = 1, bh[S.g.ih] = 1,
        bh[S.g.jh] = 1, bh[S.g.kh] = 1, bh[S.g.Mb] = 1, bh[S.g.La] = 1, bh[S.g.Ob] = 1, bh[S.g.Yc] = 1, bh[S.g.Va] = 1, bh[S.g.za] = 1, bh[S.g.Zc] = 1, bh[S.g.zb] = 1, bh[S.g.va] = 1, bh[S.g.Aa] = 1, bh[S.g.qa] = 1, bh));
    Object.freeze(S.g);
    var dh = {},
        eh = z.google_tag_manager = z.google_tag_manager || {},
        fh = Math.random();
    dh.oc = "31u0";
    dh.dd = Number("0") || 0;
    dh.ka = "dataLayer";
    dh.Ni = "ChAIgJXjngYQppagg5qE8ud4EiUAVM2xmMyj6fECi9zF1wbFJxqIhLx9Qmurm+zalALvxXsQoRQ2GgJ/Lg\x3d\x3d";
    var gh = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        hh = {
            __paused: !0,
            __tg: !0
        },
        ih;
    for (ih in gh)
        gh.hasOwnProperty(ih) && (hh[ih] = !0);
    var jh = Pa(""),
        kh,
        lh = !1;
    lh = !0;
    kh = lh;
    var mh,
        nh = !1;
    mh = nh;
    var oh,
        ph = !1;
    oh = ph;
    var qh,
        rh = !1;
    qh = rh;
    dh.Md = "www.googletagmanager.com";
    var sh = "" + dh.Md + (kh ? "/gtag/js" : "/gtm.js"),
        th = null,
        uh = null,
        vh = {},
        wh = {},
        xh = {},
        yh = function() {
            var a = eh.sequence || 1;
            eh.sequence = a + 1;
            return a
        };
    dh.Mi = "true";
    var zh = "";
    dh.xe = zh;
    var Ah = new La,
        Bh = {},
        Ch = {},
        Fh = {
            name: dh.ka,
            set: function(a, b) {
                K(bb(a, b), Bh);
                Dh()
            },
            get: function(a) {
                return Eh(a, 2)
            },
            reset: function() {
                Ah = new La;
                Bh = {};
                Dh()
            }
        },
        Eh = function(a, b) {
            return 2 != b ? Ah.get(a) : Nh(a)
        },
        Nh = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = Bh, e = 0; e < c.length; e++) {
                if (null === d)
                    return !1;
                if (void 0 === d)
                    break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d))
                    return
            }
            return d
        },
        Oh = function(a, b) {
            Ch.hasOwnProperty(a) || (Ah.set(a, b), K(bb(a, b), Bh), Dh())
        },
        Ph = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = Eh(c, 1);
                if (Ga(d) || Ec(d))
                    d = K(d);
                Ch[c] = d
            }
        },
        Dh = function(a) {
            m(Ch, function(b, c) {
                Ah.set(b, c);
                K(bb(b), Bh);
                K(bb(b, c), Bh);
                a && delete Ch[b]
            })
        },
        Qh = function(a, b) {
            var c,
                d = 1 !== (void 0 === b ? 2 : b) ? Nh(a) : Ah.get(a);
            "array" === Cc(d) || "object" === Cc(d) ? c = K(d) : c = d;
            return c
        };
    var Rh,
        Sh = !1;
    function Th() {
        Sh = !0;
        Rh = Rh || {}
    }
    var Uh = function(a) {
        Sh || Th();
        return Rh[a]
    };
    var Vh = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        Wh = function(a) {
            if (I.hidden)
                return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
                return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility)
                return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display)
                    return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var h = g.indexOf("opacity(");
                    0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                    f))
                }
                if (void 0 !== f && 0 >= f)
                    return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var ei = /:[0-9]+$/,
        fi = /^\d+\.fls\.doubleclick\.net$/,
        gi = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var l = h.slice(1).join("=");
                    if (!c)
                        return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                    e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        ji = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b)
                a.protocol = hi(a.protocol) || hi(z.location.protocol);
            "port" === b ? a.port =
            String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(ei, "").toLowerCase());
            return ii(a, b, c, d, e)
        },
        ii = function(a, b, c, d, e) {
            var f,
                g = hi(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
            case "url_no_fragment":
                f = ki(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(ei, "").toLowerCase();
                if (c) {
                    var h = /^www\d*\./.exec(f);
                    h && h[0] && (f = f.substr(h[0].length))
                }
                break;
            case "port":
                f =
                String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || vb("TAGGING", 1);
                f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var l = f.split("/");
                0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
                f = l.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = gi(f, e, !1));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = 1 < n.length ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
            }
            return f
        },
        hi = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        ki = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        li = function(a) {
            var b = I.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || vb("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(ei, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        mi = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n :
                p + "=0"
            }
            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = li(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var l = "" + f + g + h;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        },
        ni = function(a) {
            var b = li(z.location.href),
                c = ji(b, "host", !1);
            if (c && c.match(fi)) {
                var d = ji(b,
                "path").split(a + "=");
                if (1 < d.length)
                    return d[1].split(";")[0].split("?")[0]
            }
        };
    var oi = {};
    var qi = function(a, b, c) {
            if (a) {
                var d = a.element,
                    e = {
                        cb: a.cb,
                        tagName: d.tagName,
                        type: 1
                    };
                b && (e.querySelector = pi(d));
                c && (e.isVisible = !Wh(d));
                return e
            }
        },
        ti = function(a) {
            if (0 != a.length) {
                var b;
                b = ri(a, function(c) {
                    return !si.test(c.cb)
                });
                b = ri(b, function(c) {
                    return "INPUT" === c.element.tagName.toUpperCase()
                });
                b = ri(b, function(c) {
                    return !Wh(c.element)
                });
                return b[0]
            }
        },
        ri = function(a, b) {
            if (1 >= a.length)
                return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        pi = function(a) {
            var b;
            if (a === I.body)
                b = "body";
            else {
                var c;
                if (a.id)
                    c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a:
                        {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else
                                e = 1
                        }d = pi(a.parentElement) + ">:nth-child(" + e + ")"
                    } else
                        d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        ui = !0,
        vi = !1;
    oi.Ji = "true";
    var wi = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        xi = /@(gmail|googlemail)\./i,
        si = /support|noreply/i,
        yi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        zi = ["BR"],
        Ai = {},
        Bi = function(a) {
            a = a || {
                wc: !0,
                xc: !0
            };
            a.lb = a.lb || {
                email: !0,
                phone: !0,
                address: !0
            };
            var b,
                c = a,
                d = !!c.wc + "." + !!c.xc;
            c && c.kd && c.kd.length && (d += "." + c.kd.join("."));
            c && c.lb && (d += "." + c.lb.email + "." + c.lb.phone + "." + c.lb.address);
            b = d;
            var e = Ai[b];
            if (e && 200 > Ta() - e.timestamp)
                return e.result;
            var f;
            var g = [],
                h = I.body;
            if (h) {
                for (var l = h.querySelectorAll("*"),
                    n = 0; n < l.length && 1E4 > n; n++) {
                    var p = l[n];
                    if (!(0 <= yi.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)
                            if (!(0 <= zi.indexOf(p.children[r].tagName.toUpperCase()))) {
                                q = !0;
                                break
                            }
                        q || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < l.length ? "2" : "1"
                }
            } else
                f = {
                    elements: g,
                    status: "4"
                };
            var u = f,
                t = u.status,
                v = [],
                w;
            if (a.lb && a.lb.email) {
                for (var y = u.elements, x = [], A = 0; A < y.length; A++) {
                    var B = y[A],
                        C = B.textContent;
                    "INPUT" === B.tagName.toUpperCase() && B.value && (C = B.value);
                    if (C) {
                        var D = C.match(wi);
                        if (D) {
                            var H = D[0],
                                G;
                            if (z.location) {
                                var O = ii(z.location, "host", !0);
                                G = 0 <= H.toLowerCase().indexOf(O)
                            } else
                                G = !1;
                            G || x.push({
                                element: B,
                                cb: H
                            })
                        }
                    }
                }
                var Q = a && a.kd;
                if (Q && 0 !== Q.length) {
                    for (var Z = [], oa = 0; oa < x.length; oa++) {
                        for (var P = !0, R = 0; R < Q.length; R++) {
                            var ka = Q[R];
                            if (ka && qg(x[oa].element, ka)) {
                                P = !1;
                                break
                            }
                        }
                        P && Z.push(x[oa])
                    }
                    v = Z
                } else
                    v = x;
                w = ti(v);
                10 < x.length && (t = "3")
            }
            var ca = [];
            !a.wi && w && (v = [w]);
            for (var aa = 0; aa < v.length; aa++)
                ca.push(qi(v[aa], a.wc, a.xc));
            var Fa = {
                elements: ca.slice(0, 10),
                og: qi(w,
                a.wc, a.xc),
                status: t
            };
            Ai[b] = {
                timestamp: Ta(),
                result: Fa
            };
            return Fa
        },
        Ci = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.cb.length + ":" + xi.test(a.cb)
        };
    var Di = function(a, b, c) {
            if (!c)
                return !1;
            var d = c.selector_type,
                e = String(c.value),
                f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var g = e.split(","), h = 0; h < g.length; h++) {
                    var l = g[h].trim();
                    if (l) {
                        if (0 === l.indexOf("dataLayer."))
                            f = Eh(l.substring(10));
                        else {
                            var n = l.split(".");
                            f = z[n.shift()];
                            for (var p = 0; p < n.length; p++)
                                f = f && f[n[p]]
                        }
                        if (void 0 !== f)
                            break
                    }
                }
            } else if ("css_selector" === d && og) {
                var q = pg(e);
                if (q && 0 < q.length) {
                    f = [];
                    for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++)
                        f.push(ic(q[r]) ||
                        Ra(q[r].value));
                    f = 1 === f.length ? f[0] : f
                }
            }
            return f ? (a[b] = f, !0) : !1
        },
        Ei = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = Di(b, "email", a.email) || c;
                c = Di(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = Di(f, "first_name", d[e].first_name) || c;
                    c = Di(f, "last_name", d[e].last_name) || c;
                    c = Di(f, "street", d[e].street) || c;
                    c = Di(f, "city", d[e].city) || c;
                    c = Di(f, "region", d[e].region) || c;
                    c = Di(f, "country", d[e].country) || c;
                    c = Di(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ?
                b : void 0
            }
        },
        Fi = function(a) {
            return a.D[S.g.zf]
        },
        Gi = function(a) {
            var b = T(a, S.g.Tc) || {},
                c = !1;
            m(b, function(d, e) {
                var f = e.enhanced_conversions_mode;
                if ("automatic" === f || "manual" === f)
                    c = !0
            });
            return c
        },
        Hi = function(a) {
            if (!Ec(a))
                return !1;
            var b = a.mode;
            return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code
        },
        Ii = function(a) {
            if (a) {
                if ("selectors" === a.mode || Ec(a.selectors))
                    return Ei(a.selectors);
                if ("auto_detect" === a.mode || Ec(a.auto_detect)) {
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Bi({
                                wc: !1,
                                xc: !1,
                                kd: c.exclude_element_selectors,
                                lb: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    address: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.cb;
                                    break
                                }
                            }
                        b = e
                    } else
                        b = void 0;
                    return b
                }
            }
        };
    var Mi = {
        De: "US",
        ri: "US-NJ"
    };
    var Ni = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Oi = function(a) {
        Oi[" "](a);
        return a
    };
    Oi[" "] = function() {};
    var Qi = function() {
        var a = Pi,
            b = "Xf";
        if (a.Xf && a.hasOwnProperty(b))
            return a.Xf;
        var c = new a;
        return a.Xf = c
    };
    var Pi = function() {
        var a = {};
        this.h = function() {
            var b = Ni.h,
                c = Ni.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.B = function() {
            a[Ni.h] = !0
        }
    };
    var Ri = [];
    function Si() {
        var a = Xb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Ti,
            update: Ui,
            addListener: Vi,
            notifyListeners: Wi,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }
    function Ti(a, b, c, d, e, f) {
        var g = Si();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries,
                l = h[a] || {},
                n = l.region,
                p = c && k(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === l.update),
                    r = {
                        region: p,
                        initial: "granted" === b,
                        update: l.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== l.initial)
                    h[a] = r;
                q && z.setTimeout(function() {
                    h[a] === r && r.quiet && (r.quiet = !1, Xi(a), Wi(), vb("TAGGING",
                    2))
                }, f)
            }
        }
    }
    function Ui(a, b) {
        var c = Si();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Yi(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Yi(c, a);
            f.quiet ? (f.quiet = !1, Xi(a)) : g !== d && Xi(a)
        }
    }
    function Vi(a, b) {
        Ri.push({
            Mf: a,
            dk: b
        })
    }
    function Xi(a) {
        for (var b = 0; b < Ri.length; ++b) {
            var c = Ri[b];
            Ga(c.Mf) && -1 !== c.Mf.indexOf(a) && (c.mi = !0)
        }
    }
    function Wi(a, b) {
        for (var c = 0; c < Ri.length; ++c) {
            var d = Ri[c];
            if (d.mi) {
                d.mi = !1;
                try {
                    d.dk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }
    function Yi(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var Zi = function(a) {
            var b = Si();
            b.accessedAny = !0;
            return Yi(b, a)
        },
        $i = function(a) {
            var b = Si();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        aj = function(a) {
            var b = Si();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        bj = function() {
            if (!Qi().h())
                return !1;
            var a = Si();
            a.accessedAny = !0;
            return a.active
        },
        cj = function() {
            var a = Si();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        dj = function(a, b) {
            Si().addListener(a, b)
        },
        ej = function(a, b) {
            Si().notifyListeners(a, b)
        },
        fj = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!aj(b[e]))
                        return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                dj(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else
                a({})
        },
        gj = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var h = d[g];
                    !1 === Zi(h) || e[h] || (f.push(h), e[h] = !0)
                }
                return f
            }
            var d = k(b) ? [b] : b,
                e = {};
            c().length !== d.length && dj(d, function(f) {
                var g = c();
                0 < g.length && (f.Mf = g, a(f))
            })
        };
    function hj() {}
    function ij() {}
    ;
    function jj(a) {
        for (var b = [], c = 0; c < kj.length; c++) {
            var d = a(kj[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var kj = [S.g.K, S.g.W],
        lj = function(a) {
            var b = a[S.g.Te];
            b && N(40);
            var c = a[S.g.Ue];
            c && N(41);
            for (var d = Ga(b) ? b : [b], e = {
                    Cc: 0
                }; e.Cc < d.length; e = {
                Cc: e.Cc
            }, ++e.Cc)
                m(a, function(f) {
                    return function(g, h) {
                        if (g !== S.g.Te && g !== S.g.Ue) {
                            var l = d[f.Cc],
                                n = Mi.De,
                                p = Mi.ri;
                            Si().set(g, h, l, n, p, c)
                        }
                    }
                }(e))
        },
        mj = function(a, b) {
            m(a, function(c, d) {
                Si().update(c, d)
            });
            ej(b.eventId, b.priorityId)
        },
        nj = function(a) {
            var b = Zi(a);
            return void 0 != b ? b : !0
        },
        oj = function() {
            return "G1" + jj(Zi)
        },
        pj = function(a, b) {
            dj(a, b)
        },
        qj = function(a, b) {
            gj(a, b)
        },
        rj = function(a,
        b) {
            fj(a, b)
        };
    var sj = function(a) {
        var b = 1,
            c,
            d,
            e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--)
                e = a.charCodeAt(d),
                b = (b << 6 & 268435455) + e + (e << 14),
                c = b & 266338304,
                b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var tj = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };
    var uj = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        vj = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    function wj(a) {
        return "null" !== a.origin
    }
    ;
    var zj = function(a, b, c, d) {
            return xj(d) ? tj(a, String(b || yj()), c) : []
        },
        Cj = function(a, b, c, d, e) {
            if (xj(e)) {
                var f = Aj(a, d, e);
                if (1 === f.length)
                    return f[0].id;
                if (0 !== f.length) {
                    f = Bj(f, function(g) {
                        return g.Ee
                    }, b);
                    if (1 === f.length)
                        return f[0].id;
                    f = Bj(f, function(g) {
                        return g.yd
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };
    function Dj(a, b, c, d) {
        var e = yj(),
            f = window;
        wj(f) && (f.document.cookie = a);
        var g = yj();
        return e != g || void 0 != c && 0 <= zj(b, g, !1, d).indexOf(c)
    }
    var Hj = function(a, b, c, d) {
            function e(w, y, x) {
                if (null == x)
                    return delete h[y], w;
                h[y] = x;
                return w + "; " + y + "=" + x
            }
            function f(w, y) {
                if (null == y)
                    return delete h[y], w;
                h[y] = !0;
                return w + "; " + y
            }
            if (!xj(c.pb))
                return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Ej(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            g = e(g, "expires", l);
            g = e(g, "max-age", c.Hk);
            g = e(g, "samesite",
            c.Zk);
            c.bl && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = Fj(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
                    var t = "none" !== p[u] ? p[u] : void 0,
                        v = e(g, "domain", t);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (w) {
                        q = w;
                        continue
                    }
                    r = !0;
                    if (!Gj(t, c.path) && Dj(v, a, b, c.pb))
                        return 0
                }
                if (q && !r)
                    throw q;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return Gj(n, c.path) ? 1 : Dj(g, a, b, c.pb) ? 0 : 1
        },
        Ij = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Hj(a,
            b, c)
        };
    function Bj(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                l = b(h);
            l === c ? d.push(h) : void 0 === f || l < f ? (e = [h], f = l) : l === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }
    function Aj(a, b, c) {
        for (var d = [], e = zj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var l = g.shift();
                l && (l = l.split("-"), d.push({
                    id: g.join("."),
                    Ee: 1 * l[0] || 1,
                    yd: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var Ej = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Jj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Kj = /(^|\.)doubleclick\.net$/i,
        Gj = function(a, b) {
            return Kj.test(window.document.location.hostname) || "/" === b && Jj.test(a)
        },
        yj = function() {
            return wj(window) ? window.document.cookie : ""
        },
        Fj = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c)
                    return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--)
                a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Kj.test(e) || Jj.test(e) || a.push("none");
            return a
        },
        xj = function(a) {
            if (!Qi().h() || !a || !bj())
                return !0;
            if (!aj(a))
                return !1;
            var b = Zi(a);
            return null == b ? !0 : !!b
        };
    var Lj = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ sj(a) & 2147483647) : String(b)
        },
        Mj = function(a) {
            return [Lj(a), Math.round(Ta() / 1E3)].join(".")
        },
        Pj = function(a, b, c, d, e) {
            var f = Nj(b);
            return Cj(a, f, Oj(c), d, e)
        },
        Qj = function(a, b, c, d) {
            var e = "" + Nj(c),
                f = Oj(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Nj = function(a) {
            if (!a)
                return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Oj = function(a) {
            if (!a || "/" === a)
                return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
            1
        };
    function Rj(a, b, c, d) {
        var e,
            f = Number(null != a.Db ? a.Db : void 0);
        0 !== f && (e = new Date((b || Ta()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            pb: d
        }
    }
    ;
    var Sj;
    var Wj = function() {
            var a = Tj,
                b = Uj,
                c = Vj(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                fc(I, "mousedown", d);
                fc(I, "keyup", d);
                fc(I, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Xj = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Vj().decorators.push(f)
        },
        Yj = function(a, b, c) {
            for (var d = Vj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms)
                    a:
                    {
                        var l = g.domains,
                            n = a,
                            p = !!g.sameHost;
                        if (l && (p || n !== I.location.hostname))
                            for (var q = 0; q < l.length; q++)
                                if (l[q] instanceof RegExp) {
                                    if (l[q].test(n)) {
                                        h = !0;
                                        break a
                                    }
                                } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
                                    h = !0;
                                    break a
                                }
                        h = !1
                    }if (h) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Xa(e, g.callback())
                }
            }
            return e
        };
    function Vj() {
        var a = Xb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    }
    ;
    var Zj = /(.*?)\*(.*?)\*(.*)/,
        ak = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        bk = /^(?:www\.|m\.|amp\.)+/,
        ck = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function dk(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var fk = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(sb(String(d))))
            }
        var e = b.join("*");
        return ["1", ek(e), e].join("*")
    };
    function ek(a, b) {
        var c = [Vb.userAgent, (new Date).getTimezoneOffset(), Vb.userLanguage || Vb.language, Math.floor(Ta() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Sj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++)
                    g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Sj = d;
        for (var l = 4294967295, n = 0; n < c.length; n++)
            l = l >>> 8 ^ Sj[(l ^ c.charCodeAt(n)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }
    function gk() {
        return function(a) {
            var b = li(z.location.href),
                c = b.search.replace("?", ""),
                d = gi(c, "_gl", !1, !0) || "";
            a.query = hk(d) || {};
            var e = ji(b, "fragment").match(dk("_gl"));
            a.fragment = hk(e && e[3] || "") || {}
        }
    }
    function ik(a, b) {
        var c = dk(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var jk = function(a, b) {
            b || (b = "_gl");
            var c = ck.exec(a);
            if (!c)
                return "";
            var d = c[1],
                e = ik(b, (c[2] || "").slice(1)),
                f = ik(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        kk = function(a) {
            var b = gk(),
                c = Vj();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Xa(d, e.query), a && Xa(d, e.fragment));
            return d
        },
        hk = function(a) {
            try {
                var b = lk(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = tb(d[e + 1]);
                        c[f] = g
                    }
                    vb("TAGGING", 6);
                    return c
                }
            } catch (h) {
                vb("TAGGING",
                8)
            }
        };
    function lk(a, b) {
        if (a) {
            var c;
            a:
            {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Zj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }var g = c;
            if (g && "1" === g[1]) {
                var h = g[3],
                    l;
                a:
                {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === ek(h, p)) {
                            l = !0;
                            break a
                        }
                    l = !1
                }if (l)
                    return h;
                vb("TAGGING", 7)
            }
        }
    }
    function mk(a, b, c, d) {
        function e(p) {
            p = ik(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = ck.exec(c);
        if (!f)
            return "";
        var g = f[1],
            h = f[2] || "",
            l = f[3] || "",
            n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + l
    }
    function nk(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Yj(b, 1, c),
            e = Yj(b, 2, c),
            f = Yj(b, 3, c);
        if (Ya(d)) {
            var g = fk(d);
            c ? ok("_gl", g, a) : pk("_gl", g, a, !1)
        }
        if (!c && Ya(e)) {
            var h = fk(e);
            pk("_gl", h, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l))
                a:
                {
                    var n = l,
                        p = f[l],
                        q = a;
                    if (q.tagName) {
                        if ("a" === q.tagName.toLowerCase()) {
                            pk(n, p, q);
                            break a
                        }
                        if ("form" === q.tagName.toLowerCase()) {
                            ok(n, p, q);
                            break a
                        }
                    }
                    "string" == typeof q && mk(n, p, q)
                }
    }
    function pk(a, b, c, d) {
        if (c.href) {
            var e = mk(a, b, c.href, void 0 === d ? !1 : d);
            Fb.test(e) && (c.href = e)
        }
    }
    function ok(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = I.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = mk(a, b, c.action);
                Fb.test(n) && (c.action = n)
            }
        }
    }
    function Tj(a) {
        try {
            var b;
            a:
            {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || nk(e, e.hostname)
            }
        } catch (g) {}
    }
    function Uj(a) {
        try {
            if (a.action) {
                var b = ji(li(a.action), "host");
                nk(a, b)
            }
        } catch (c) {}
    }
    var qk = function(a, b, c, d) {
            Wj();
            Xj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        rk = function(a, b) {
            Wj();
            Xj(a, [ii(z.location, "host", !0)], b, !0, !0)
        },
        sk = function() {
            var a = I.location.hostname,
                b = ak.exec(I.referrer);
            if (!b)
                return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--"))
                    return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(bk, ""),
                l = e.replace(bk, ""),
                n;
            if (!(n = h === l)) {
                var p = "." + l;
                n = h.substring(h.length - p.length,
                h.length) === p
            }
            return n
        },
        tk = function(a, b) {
            return !1 === a ? !1 : a || b || sk()
        };
    var uk = {};
    var vk = ["1"],
        wk = {},
        xk = {},
        Bk = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = yk(a.prefix);
            if (!wk[c] && !zk(c, a.path, a.domain)) {
                if (void 0 == uk.enable_auid_fl_iframe ? 0 : uk.enable_auid_fl_iframe) {
                    var d = ni("auiddc");
                    if (d) {
                        vb("TAGGING", 17);
                        wk[c] = d;
                        return
                    }
                }
                if (b) {
                    var e = yk(a.prefix),
                        f = Mj();
                    if (0 === Ak(e, f, a)) {
                        var g = Xb("google_tag_data", {});
                        g._gcl_au || (g._gcl_au = f)
                    }
                    zk(c, a.path, a.domain)
                }
            }
        };
    function Ak(a, b, c, d) {
        var e = Qj(b, "1", c.domain, c.path),
            f = Rj(c, d);
        f.pb = "ad_storage";
        return Ij(a, e, f)
    }
    function zk(a, b, c) {
        var d = Pj(a, b, c, vk, "ad_storage");
        if (!d)
            return !1;
        Ck(a, d);
        return !0
    }
    function Ck(a, b) {
        var c = b.split(".");
        5 === c.length ? (wk[a] = c.slice(0, 2).join("."), xk[a] = {
            id: c.slice(2, 4).join("."),
            gi: Number(c[4]) || 0
        }) : 3 === c.length ? xk[a] = {
            id: c.slice(0, 2).join("."),
            gi: Number(c[2]) || 0
        } : wk[a] = b
    }
    function yk(a) {
        return (a || "_gcl") + "_au"
    }
    function Dk(a) {
        bj() || a();
        fj(function() {
            Zi("ad_storage") && a();
            gj(a, "ad_storage")
        }, ["ad_storage"])
    }
    function Ek(a) {
        var b = kk(!0),
            c = yk(a.prefix);
        Dk(function() {
            var d = b[c];
            if (d) {
                Ck(c, d);
                var e = 1E3 * Number(wk[c].split(".")[1]);
                if (e) {
                    vb("TAGGING", 16);
                    var f = Rj(a, e);
                    f.pb = "ad_storage";
                    var g = Qj(d, "1", a.domain, a.path);
                    Ij(c, g, f)
                }
            }
        })
    }
    function Fk(a, b, c, d) {
        d = d || {};
        var e = function() {
            var f = yk(d.prefix),
                g = {},
                h = Pj(f, d.path, d.domain, vk, "ad_storage");
            if (!h)
                return g;
            g[f] = h;
            return g
        };
        Dk(function() {
            qk(e, a, b, c)
        })
    }
    ;
    var Gk = [];
    Gk[7] = !0;
    Gk[9] = !0;
    Gk[27] = !0;
    Gk[11] = !0;
    Gk[13] = !0;
    Gk[15] = !0;
    Gk[25] = !0;
    Gk[36] = !0;
    Gk[38] = !0;
    Gk[43] = !0;
    a:
    {
        for (var Hk, Ik, Jk = 0; Hk === Ik;)
            if (Hk = Math.floor(2 * Math.random()), Ik = Math.floor(2 * Math.random()), Jk++, 20 < Jk)
                break a;
        Hk ? Gk[46] = !0 : Gk[47] = !0
    }Gk[52] = !0;
    Gk[57] = !0;
    Gk[58] = !0;
    Gk[60] = !0;
    Gk[65] = !0;
    Gk[68] = !0;
    Gk[72] = !0;

    var U = function(a) {
        return !!Gk[a]
    };
    var Kk = function() {
        eh.dedupe_gclid || (eh.dedupe_gclid = "" + Mj());
        return eh.dedupe_gclid
    };
    var Lk = function() {
        var a = !1;
        return a
    };
    var Xe = {
            H: "G-G91F3J3HWN",
            tb: "77750866"
        },
        Mk = {
            ki: "G-G91F3J3HWN",
            li: "G-G91F3J3HWN"
        };
    Xe.Ef = Pa("");
    var Nk = function() {
            return Mk.ki ? Mk.ki.split("|") : [Xe.H]
        },
        Ok = function() {
            return Mk.li ? Mk.li.split("|") : []
        },
        Pk = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        Rk = function() {
            for (var a = Qk(), b = Nk(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                !d || Ea(d) ? a.container[b[c]] = {
                    state: 2
                } : d.state = 2
            }
            for (var e = Ok(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && N(93);
                g ? g.state = 2 : a.destination[e[f]] = {
                    state: 2
                }
            }
            a.canonical[Xe.tb] = 2
        },
        Sk = function(a) {
            return !!Qk().container[a]
        },
        Tk = function() {
            var a =
                Qk().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b)) {
                    var c = a[b];
                    if (Ea(c)) {
                        if (1 === c)
                            return !0
                    } else if (1 === c.state)
                        return !0
                }
            return !1
        },
        Uk = function() {
            var a = {};
            m(Qk().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };
    function Qk() {
        var a = eh.tidr;
        a || (a = new Pk, eh.tidr = a);
        return a
    }
    var Vk = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            GT: "t",
            HA: "h",
            MC: "m",
            GTM: "g",
            OPT: "o"
        },
        Wk = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        Xk = function(a) {
            var b = Xe.H.split("-"),
                c = b[0].toUpperCase();
            if (U(45)) {
                var d = {};
                d.Vj = Xe.H;
                d.Wk = dh.dd;
                d.Yk = dh.oc;
                d.Fk = Xe.Ef ? 2 : 1;
                kh ? (d.Oe = Wk[c], d.Oe || (d.Oe = 0)) : d.Oe = qh ? 13 : 10;
                oh ? d.gg = 1 : Lk() ? d.gg = 2 : d.gg = 3;
                var e;
                var f = d.Oe,
                    g = d.gg;
                void 0 === f ? e = "" : (g || (g = 0), e = "" + Ff(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f << 2 | g]);
                var h = d.Gl,
                    l = 4 + e + (h ? "" + Ff(2,
                    1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h] : ""),
                    n,
                    p = d.Yk;
                n = p && Ef.test(p) ? "" + Ff(3, 2) + p : "";
                var q,
                    r = d.Wk;
                q = r ? "" + Ff(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[r] : "";
                var u;
                var t = d.Vj;
                if (t && a) {
                    var v = t.split("-"),
                        w = v[0].toUpperCase();
                    if ("GTM" !== w && "OPT" !== w)
                        u = "";
                    else {
                        var y = v[1];
                        u = "" + Ff(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + y.length] + (d.Fk || 0) + y
                    }
                } else
                    u = "";
                return l + n + q + u
            }
            var x = Vk[c] || "i",
                A = a && "GTM" === c ? b[1] : "OPT" ===
                c ? b[1] : "",
                B = "w";
            kh && (B = Lk() ? "s" : "o");
            mh ? ("w" === B && (B = "x"), "o" === B && (B = "q")) : oh ? ("w" === B && (B = "y"), "o" === B && (B = "r")) : qh && (B = "z");
            return "2" + B + x + (4 === dh.oc.length ? dh.oc.slice(1) : dh.oc) + A
        };
    function Yk(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;
    var Zk = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    function $k() {
        return Hb("iPhone") && !Hb("iPod") && !Hb("iPad")
    }
    function al() {
        $k() || Hb("iPad") || Hb("iPod")
    }
    ;
    Hb("Opera");
    Hb("Trident") || Hb("MSIE");
    Hb("Edge");
    !Hb("Gecko") || -1 != Gb().toLowerCase().indexOf("webkit") && !Hb("Edge") || Hb("Trident") || Hb("MSIE") || Hb("Edge");
    -1 != Gb().toLowerCase().indexOf("webkit") && !Hb("Edge") && Hb("Mobile");
    Hb("Macintosh");
    Hb("Windows");
    Hb("Linux") || Hb("CrOS");
    var bl = pa.navigator || null;
    bl && (bl.appVersion || "").indexOf("X11");
    Hb("Android");
    $k();
    Hb("iPad");
    Hb("iPod");
    al();
    Gb().toLowerCase().indexOf("kaios");
    var cl = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var h = a.charCodeAt(e + f);
                    if (!h || 61 == h || 38 == h || 35 == h)
                        return e
                }
                e += f + 1
            }
            return -1
        },
        dl = /#|$/,
        el = function(a, b) {
            var c = a.search(dl),
                d = cl(a, 0, b, c);
            if (0 > d)
                return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c)
                e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        fl = /[?&]($|#)/,
        gl = function(a, b, c) {
            for (var d, e = a.search(dl), f = 0, g, h = []; 0 <= (g = cl(a, f, b, e));)
                h.push(a.substring(f,
                g)),
                f = Math.min(a.indexOf("&", g) + 1 || e, e);
            h.push(a.slice(f));
            d = h.join("").replace(fl, "$1");
            var l,
                n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q,
                    r = d.indexOf("#");
                0 > r && (r = d.length);
                var u = d.indexOf("?"),
                    t;
                0 > u || u > r ? (u = r, t = "") : t = d.substring(u + 1, r);
                q = [d.slice(0, u), t, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                l = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else
                l = d;
            return l
        };
    var hl = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    function il(a) {
        if (!a || !I.head)
            return null;
        var b = jl("META");
        I.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var kl = function() {
            if (z.top == z)
                return 0;
            var a = z.location.ancestorOrigins;
            if (a)
                return a[a.length - 1] == z.location.origin ? 1 : 2;
            var b;
            var c = z.top;
            try {
                var d;
                if (d = !!c && null != c.location.href)
                    b:
                    {
                        try {
                            Oi(c.foo);
                            d = !0;
                            break b
                        } catch (e) {}
                        d = !1
                    }b = d
            } catch (e) {
                b = !1
            }
            return b ? 1 : 2
        },
        jl = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };
    function ll(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = jl("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        h = yb(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Zk(e, "load", f);
            Zk(e, "error", f)
        }
        d && (e.attributionsrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var El = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            hl(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            Dl(c, b)
        },
        Dl = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", e.headers = {
                    "Attribution-Reporting-Eligible": "event-source"
                });
                c.fetch(a, e)
            } else
                ll(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Fl = function() {};
    var Gl = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Hl = function(a, b) {
            b = void 0 === b ? {} : b;
            this.B = a;
            this.h = null;
            this.N = {};
            this.eb = 0;
            var c;
            this.U = null != (c = b.ql) ? c : 500;
            var d;
            this.F = null != (d = b.Hl) ? d : !1;
            this.D = null
        };
    na(Hl, Fl);
    Hl.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.F
            },
            d = vj(function() {
                return a(c)
            }),
            e = 0;
        -1 !== this.U && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.U));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Gl(c), c.internalBlockOnErrors = b.F, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Il(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
            "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e), e = 0),
            d()
        }
    };
    Hl.prototype.removeEventListener = function(a) {
        a && a.listenerId && Il(this, "removeEventListener", null, a.listenerId)
    };
    var Kl = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a:
            {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }var g = e;
            if (0 === g)
                return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var l;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = Jl(a.vendor.consents, void 0 === d ? "755" : d);
                    l = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Jl(a.purpose.consents, b)
                } else
                    l = !0;
            else
                l = 1 === h ? a.purpose && a.vendor ? Jl(a.purpose.legitimateInterests,
                b) && Jl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        },
        Jl = function(a, b) {
            return !(!a || !a[b])
        },
        Il = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.B.__tcfapi) {
                var e = a.B.__tcfapi;
                e(b, 2, c, d)
            } else if (Ll(a)) {
                Ml(a);
                var f = ++a.eb;
                a.N[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else
                c({}, !1)
        },
        Ll = function(a) {
            if (a.h)
                return a.h;
            var b;
            a:
            {
                for (var c = a.B, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (h) {
                        e =
                        !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b:
                    {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (h) {}
                        f = null
                    }if (!(c = f))
                        break
                }
                b = null
            }a.h = b;
            return a.h
        },
        Ml = function(a) {
            a.D || (a.D = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.N[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Zk(a.B, "message", a.D))
        },
        Nl = function(a) {
            if (!1 === a.gdprApplies)
                return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Gl(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
            (El({
                e: String(a.internalErrorState)
            }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Ol = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Pl = Yk('', 500);
    function Ql() {
        var a = eh.tcf || {};
        return eh.tcf = a
    }
    var Ul = function() {
        var a = Ql(),
            b = new Hl(z, {
                ql: -1
            });
        if (!0 === z.gtag_enable_tcf_support && !a.active && ("function" === typeof z.__tcfapi || "function" === typeof b.B.__tcfapi || null != Ll(b))) {
            a.active = !0;
            a.Ke = {};
            Rl();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState)
                        Sl(a),
                        Tl(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in Ol)
                                Ol.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" ===
                        c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {},
                                h;
                            for (h in Ol)
                                if (Ol.hasOwnProperty(h))
                                    if ("1" === h) {
                                        var l,
                                            n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        l = Nl(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Kl(n, "1", 0) : !1;
                                        g["1"] = l
                                    } else
                                        g[h] = Kl(c, h, Ol[h]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.Ke = d, Tl(a))
                    }
                })
            } catch (c) {
                Sl(a),
                Tl(a)
            }
        }
    };
    function Sl(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }
    function Rl() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Pl, a);
        lj(b)
    }
    function Tl(a) {
        var b = {},
            c = (b.ad_storage = a.Ke["1"] ? "granted" : "denied", b);
        mj(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Vl()
        })
    }
    var Vl = function() {
            var a = Ql();
            return a.active ? a.tcString || "" : ""
        },
        Wl = function() {
            var a = Ql();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        Xl = function(a) {
            if (!Ol.hasOwnProperty(String(a)))
                return !0;
            var b = Ql();
            return b.active && b.Ke ? !!b.Ke[String(a)] : !0
        };
    var Yl = function(a) {
        var b = String(a[Yd.Wa] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    };
    var Zl = ["L", "S", "Y"],
        $l = ["S", "E"],
        am = {
            sampleRate: "0.005000",
            Hi: "",
            Gi: Number("5"),
            Fi: Number("")
        },
        bm = 0 <= I.location.search.indexOf("?gtm_latency=") || 0 <= I.location.search.indexOf("&gtm_latency="),
        cm;
    if (!(cm = bm)) {
        var dm = Math.random(),
            em = am.sampleRate;
        cm = dm < em
    }
    var fm = cm,
        gm = "https://www.googletagmanager.com/a?id=" + Xe.H + "&cv=1",
        hm = {
            label: Xe.H + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        };
    function im() {
        return [gm, "&v=3&t=t", "&pid=" + Ka(), "&rv=" + dh.oc].join("")
    }
    var jm = im();
    function km() {
        jm = im()
    }
    var lm = {},
        mm = "",
        nm = "",
        om = "",
        pm = "",
        qm = [],
        rm = "",
        sm = {},
        tm = !1,
        um = {},
        vm = {},
        wm = {},
        xm = "",
        ym = void 0,
        zm = {},
        Am = {},
        Bm = void 0,
        Cm = 5;
    0 < am.Gi && (Cm = am.Gi);
    var Dm = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e)
                d.push(0);
            return {
                xk: function() {
                    return c < a ? !1 : Ta() - d[c % a] < b
                },
                Tk: function() {
                    var f = c++ % a;
                    d[f] = Ta()
                }
            }
        }(Cm, 1E3),
        Em = 1E3,
        Fm = "";
    function Gm(a) {
        var b = ym;
        if (void 0 === b)
            return "";
        var c = xb("GTM"),
            d = xb("TAGGING"),
            e = xb("HEALTH"),
            f = jm,
            g = lm[b] ? "" : "&es=1",
            h = zm[b],
            l = Hm(b),
            n = Im(),
            p = mm,
            q = nm,
            r = xm,
            u = Jm(a),
            t = om,
            v = pm,
            w;
        return [f, g, h, l, c ? "&u=" + c : "", d ? "&ut=" + d : "", e ? "&h=" + e : "", n, p, q, r, u, t, v, w, rm ? "&dl=" + encodeURIComponent(rm) : "", 0 < qm.length ? "&tdp=" + qm.join(".") : "", dh.dd ?
        "&x=" + dh.dd : "", "&z=0"].join("")
    }
    function Lm() {
        Bm && (z.clearTimeout(Bm), Bm = void 0);
        if (void 0 !== ym && (!lm[ym] || mm || nm))
            if (Am[ym] || Dm.xk() || 0 >= Em--)
                N(1),
                Am[ym] = !0;
            else {
                Dm.Tk();
                var a = Gm(!0);
                ec(a);
                if (pm || rm && 0 < qm.length) {
                    var b = a.replace("/a?", "/td?");
                    ec(b)
                }
                lm[ym] = !0;
                rm = pm = om = xm = nm = mm = "";
                qm = []
            }
    }
    function Mm() {
        Bm || (Bm = z.setTimeout(Lm, 500))
    }
    function Nm(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }
    function Om() {
        2022 <= Gm().length && Lm()
    }
    function Im() {
        return "&tc=" + xe.filter(function(a) {
            return a
        }).length
    }
    var Qm = function(a, b) {
            if (fm && !Am[a] && ym !== a) {
                Lm();
                ym = a;
                om = mm = "";
                zm[a] = "&e=" + Nm(b) + "&eid=" + a;
                Mm();
            }
        },
        Rm = function(a, b, c, d) {
            if (fm && b) {
                var e = Yl(b),
                    f = c + e;
                if (!Am[a]) {
                    a !== ym && (Lm(), ym = a);
                    mm = mm ? mm + "." + f : "&tr=" + f;
                    var g = b["function"];
                    if (!g)
                        throw Error("Error: No function name given for function call.");
                    var h = (ze[g] ? "1" : "2") + e;
                    om = om ? om + "." + h : "&ti=" + h;
                    Mm();
                    Om()
                }
            }
        },
        Sm = function(a, b, c) {
            if (fm && a && a[Yd.Bb]) {
                var d = b + "." + a[Yd.Bb];
                wm[d] = c;
                "html" == Yl(a) && Fm == d && (mm += ":" + Math.floor(c))
            }
        };
    function Jm(a) {}
    function Hm(a) {}
    var Zm = function(a, b, c) {
            if (fm && void 0 !== a && !Am[a]) {
                a !== ym && (Lm(), ym = a);
                var d = c + b;
                nm = nm ? nm + "." + d : "&epr=" + d;
                Mm();
                Om()
            }
        },
        $m = function(a, b, c) {},
        Km = void 0;
    var an = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    Ib();
    $k() || Hb("iPod");
    Hb("iPad");
    !Hb("Android") || Jb() || Ib() || Hb("Opera") || Hb("Silk");
    Jb();
    !Hb("Safari") || Jb() || Hb("Coast") || Hb("Opera") || Hb("Edge") || Hb("Edg/") || Hb("OPR") || Ib() || Hb("Silk") || Hb("Android") || al();
    var bn = {},
        cn = null,
        dn = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!cn) {
                cn = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], l = 0; 5 > l; l++) {
                    var n = g.concat(h[l].split(""));
                    bn[l] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === cn[q] && (cn[q] = p)
                    }
                }
            }
            for (var r = bn[f], u = Array(Math.floor(b.length / 3)), t = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var y = b[v],
                    x = b[v + 1],
                    A = b[v + 2],
                    B = r[y >> 2],
                    C = r[(y & 3) << 4 | x >> 4],
                    D = r[(x & 15) << 2 | A >> 6],
                    H = r[A & 63];
                u[w++] = "" + B + C + D + H
            }
            var G = 0,
                O = t;
            switch (b.length - v) {
            case 2:
                G = b[v + 1],
                O = r[(G & 15) << 2] || t;
            case 1:
                var Q = b[v];
                u[w] = "" + r[Q >> 2] + r[(Q & 3) << 4 | G >> 4] + O + t
            }
            return u.join("")
        };
    var en = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function fn(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }
    function gn() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else
            b = null;
        return b
    }
    function hn() {
        var a,
            b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }
    function jn(a) {
        var b,
            c;
        return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }
    function kn() {
        var a = z;
        if (!jn(a))
            return null;
        var b = fn(a);
        if (b.uach_promise)
            return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(en).then(function(d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    }
    ;
    var ln,
        mn = function() {
            if (jn(z) && (ln = Ta(), !hn())) {
                var a = kn();
                a && (a.then(function() {
                    N(95);
                }), a.catch(function() {
                    N(96)
                }))
            }
        },
        on = function(a) {
            var b = nn.vl,
                c = function(g, h) {
                    try {
                        a(g, h)
                    } catch (l) {}
                },
                d = gn();
            if (d)
                c(d);
            else {
                var e = hn();
                if (e) {
                    b =
                    Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = z.setTimeout(function() {
                        c.vd || (c.vd = !0, N(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.vd || (c.vd = !0, N(104), z.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.vd || (c.vd = !0, N(105), z.clearTimeout(f), c(null, g))
                    })
                } else
                    c(null)
            }
        },
        pn = function(a, b) {
            a && (b.C[S.g.rf] = a.architecture, b.C[S.g.sf] = a.bitness, a.fullVersionList && (b.C[S.g.tf] = a.fullVersionList.map(function(c) {
                return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
            }).join("|")),
            b.C[S.g.uf] = a.mobile ? "1" : "0", b.C[S.g.vf] = a.model, b.C[S.g.wf] = a.platform, b.C[S.g.xf] = a.platformVersion, b.C[S.g.yf] = a.wow64 ? "1" : "0")
        };
    var qn = function(a) {
        for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                xg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };
    function rn(a, b) {
        var c = qn(a),
            d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].xg] || (d[c[e].xg] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    ia: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].xg].push(g)
            }
        }
        return d
    }
    ;
    var sn = /^\w+$/,
        tn = /^[\w-]+$/,
        un = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        vn = function() {
            if (!Qi().h() || !bj())
                return !0;
            var a = Zi("ad_storage");
            return null == a ? !0 : !!a
        },
        wn = function(a, b) {
            aj("ad_storage") ? vn() ? a() : gj(a, "ad_storage") : b ? vb("TAGGING", 3) : fj(function() {
                wn(a, !0)
            }, ["ad_storage"])
        },
        yn = function(a) {
            return xn(a).map(function(b) {
                return b.ia
            })
        },
        xn = function(a) {
            var b = [];
            if (!wj(z) || !I.cookie)
                return b;
            var c = zj(a, I.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length)
                return b;
            for (var d = {}, e = 0; e < c.length; d =
            {
                Hd: d.Hd
            }, e++) {
                var f = zn(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.Hd = g.ia;
                    var l = g.timestamp,
                        n = g.labels,
                        p = Ia(b, function(q) {
                            return function(r) {
                                return r.ia === q.Hd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = An(p.labels, n || [])) : b.push({
                        version: h,
                        ia: d.Hd,
                        timestamp: l,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Bn(b)
        };
    function An(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            c[a[e]] = !0,
            d.push(a[e]);
        for (var f = 0; f < b.length; f++)
            c[b[f]] || d.push(b[f]);
        return d
    }
    function Cn(a) {
        return a && "string" == typeof a && a.match(sn) ? a : "_gcl"
    }
    var En = function() {
            var a = li(z.location.href),
                b = ji(a, "query", !1, void 0, "gclid"),
                c = ji(a, "query", !1, void 0, "gclsrc"),
                d = ji(a, "query", !1, void 0, "wbraid"),
                e = ji(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || gi(f, "gclid", !1);
                c = c || gi(f, "gclsrc", !1);
                d = d || gi(f, "wbraid", !1)
            }
            return Dn(b, c, e, d)
        },
        Dn = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && tn.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(tn))
                switch (b) {
                case void 0:
                    f(a,
                    "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
                }
            c && f(c, "dc");
            return e
        },
        Gn = function(a) {
            var b = En();
            wn(function() {
                Fn(b, !1, a)
            })
        };
    function Fn(a, b, c, d, e) {
        function f(w, y) {
            var x = Hn(w, g);
            x && (Ij(x, y, h), l = !0)
        }
        c = c || {};
        e = e || [];
        var g = Cn(c.prefix);
        d = d || Ta();
        var h = Rj(c, d, !0);
        h.pb = "ad_storage";
        var l = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!l && a.gb) {
            var q = a.gb[0],
                r = Hn("gb", g),
                u = !1;
            if (!b)
                for (var t = xn(r), v = 0; v < t.length; v++)
                    t[v].ia === q && t[v].labels &&
                    0 < t[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var Jn = function(a, b) {
            var c = kk(!0);
            wn(function() {
                for (var d = Cn(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== un[f]) {
                        var g = Hn(f, d),
                            h = c[g];
                        if (h) {
                            var l = Math.min(In(h), Ta()),
                                n;
                            b:
                            {
                                var p = l;
                                if (wj(z))
                                    for (var q = zj(g, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (In(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }if (!n) {
                                var u = Rj(b, l, !0);
                                u.pb = "ad_storage";
                                Ij(g, h, u)
                            }
                        }
                    }
                }
                Fn(Dn(c.gclid, c.gclsrc), !1, b)
            })
        },
        Hn = function(a, b) {
            var c = un[a];
            if (void 0 !== c)
                return b + c
        },
        In = function(a) {
            return 0 !== Kn(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
            0) : 0
        };
    function zn(a) {
        var b = Kn(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            ia: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }
    function Kn(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !tn.test(a[2]) ? [] : a
    }
    var Ln = function(a, b, c, d, e) {
            if (Ga(b) && wj(z)) {
                var f = Cn(e),
                    g = function() {
                        for (var h = {}, l = 0; l < a.length; ++l) {
                            var n = Hn(a[l], f);
                            if (n) {
                                var p = zj(n, I.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                wn(function() {
                    qk(g, b, c, d)
                })
            }
        },
        Bn = function(a) {
            return a.filter(function(b) {
                return tn.test(b.ia)
            })
        },
        Mn = function(a, b) {
            if (wj(z)) {
                for (var c = Cn(b.prefix), d = {}, e = 0; e < a.length; e++)
                    un[a[e]] && (d[a[e]] = un[a[e]]);
                wn(function() {
                    m(d, function(f, g) {
                        var h = zj(c + g, I.cookie, void 0, "ad_storage");
                        h.sort(function(u,
                        t) {
                            return In(t) - In(u)
                        });
                        if (h.length) {
                            var l = h[0],
                                n = In(l),
                                p = 0 !== Kn(l.split(".")).length ? l.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== Kn(l.split(".")).length ? l.split(".")[2] : void 0;
                            q[f] = [r];
                            Fn(q, !0, b, n, p)
                        }
                    })
                })
            }
        };
    function Nn(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var On = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (bj()) {
                var c = En();
                if (Nn(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    rk(function() {
                        return d
                    }, 3);
                    rk(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        Pn = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!vn())
                return e;
            var f = xn(a);
            if (!f.length)
                return e;
            for (var g = 0; g < f.length; g++)
                -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d)
                return e;
            if (1 !== e[0]) {
                var h = f[0],
                    l = f[0].timestamp,
                    n = [h.version, Math.round(l /
                    1E3), h.ia].concat(h.labels || [], [b]).join("."),
                    p = Rj(c, l, !0);
                p.pb = "ad_storage";
                Ij(a, n, p)
            }
            return e
        };
    function Qn(a, b) {
        var c = Cn(b),
            d = Hn(a, c);
        if (!d)
            return 0;
        for (var e = xn(d), f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f
    }
    function Rn(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Sn = function(a) {
        var b = Math.max(Qn("aw", a), Rn(vn() ? rn() : {}));
        return Math.max(Qn("gb", a), Rn(vn() ? rn("_gac_gb", !0) : {})) > b
    };
    var Xn = /[A-Z]+/,
        Yn = /\s/,
        Zn = function(a) {
            if (k(a)) {
                a = Ra(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Xn.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || Yn.test(d[e]) && ("AW" !== c || 1 !== e))
                                return;
                        return {
                            id: a,
                            prefix: c,
                            X: c + "-" + d[0],
                            O: d
                        }
                    }
                }
            }
        },
        ao = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Zn(a[c]);
                d && (b[d.id] = d)
            }
            $n(b);
            var e = [];
            m(b, function(f, g) {
                e.push(g)
            });
            return e
        };
    function $n(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.O[1] && b.push(d.X)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;
    var bo = function(a, b, c, d) {
        var e = cc(),
            f;
        if (1 === e)
            a:
            {
                var g = sh;
                g = g.toLowerCase();
                for (var h = "https://" + g, l = "http://" + g, n = 1, p = I.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                    var r = p[q].src;
                    if (r) {
                        r = r.toLowerCase();
                        if (0 === r.indexOf(l)) {
                            f = 3;
                            break a
                        }
                        1 === n && 0 === r.indexOf(h) && (n = 2)
                    }
                }
                f = n
            } else
            f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var oo = function(a, b, c) {
            this.target = a;
            this.eventName = b;
            this.s = c;
            this.C = {};
            this.metadata = K(c.eventMetadata || {});
            this.M = !1
        },
        po = function(a, b, c) {
            var d = T(a.s, b);
            void 0 !== d ? a.C[b] = d : void 0 !== c && (a.C[b] = c)
        },
        qo = function(a, b, c) {
            var d = Uh(a.target.X);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };
    function ro(a) {
        return {
            getDestinationId: function() {
                return a.target.X
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void (a.eventName = b)
            },
            getHitData: function(b) {
                return a.C[b]
            },
            setHitData: function(b, c) {
                return void (a.C[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.C[b] && (a.C[b] = c)
            },
            copyToHitData: function(b, c) {
                po(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void (a.metadata[b] = c)
            },
            abort: function() {
                return void (a.M = !0)
            },
            getProcessedEvent: function() {
                return a
            },
            getFromEventContext: function(b) {
                return T(a.s, b)
            }
        }
    }
    ;
    var to = function(a) {
            var b = so[a.target.X];
            if (!a.M && b)
                for (var c = ro(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.M = !0
                    }
                    if (a.M)
                        break
                }
        },
        uo = function(a, b) {
            var c = so[a];
            c || (c = so[a] = []);
            c.push(b)
        },
        so = {};
    var Jo = function(a, b, c, d, e, f, g, h, l, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.N = d;
            this.B = e;
            this.F = f;
            this.U = g;
            this.D = h;
            this.eventMetadata = l;
            this.aa = n;
            this.Z = p;
            this.J = q
        },
        T = function(a, b, c) {
            if (void 0 !== a.h[b])
                return a.h[b];
            if (void 0 !== a.N[b])
                return a.N[b];
            if (void 0 !== a.B[b])
                return a.B[b];
            fm && Ko(a, a.F[b], a.U[b]) && (N(71), N(79));
            return void 0 !== a.F[b] ? a.F[b] : void 0 !== a.D[b] ? a.D[b] : c
        },
        Lo = function(a) {
            function b(g) {
                for (var h = Object.keys(g), l = 0; l < h.length; ++l)
                    c[h[l]] = 1
            }
            var c = {};
            b(a.h);
            b(a.N);
            b(a.B);
            b(a.F);
            if (fm)
                for (var d = Object.keys(a.U), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        N(71);
                        N(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        Mo = function(a, b, c) {
            function d(l) {
                Ec(l) && m(l, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.D[b]), d(a.F[b]), d(a.B[b]), d(a.N[b]));
            c && 2 !== c || d(a.h[b]);
            if (fm) {
                var g = f,
                    h = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.D[b]), d(a.U[b]), d(a.B[b]), d(a.N[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || Ko(a, e, h))
                    N(71),
                    N(81);
                f = g;
                e = h
            }
            return f ? e : void 0
        },
        No = function(a) {
            var b = [S.g.Mc, S.g.Td, S.g.Ud, S.g.Vd, S.g.Wd, S.g.Xd, S.g.Yd],
                c = {},
                d = !1,
                e = function(h) {
                    for (var l = 0; l < b.length; l++)
                        void 0 !== h[b[l]] && (c[b[l]] = h[b[l]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.N) || e(a.B))
                return c;
            e(a.F);
            if (fm) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.U);
                Ko(a, c, f) && (N(71), N(82));
                c = f;
                d = g
            }
            if (d)
                return c;
            e(a.D);
            return c
        },
        Ko = function(a, b, c) {
            if (!fm)
                return !1;
            try {
                if (b === c)
                    return !1;
                var d = Cc(b);
                if (d !== Cc(c) || !(Ec(b) && Ec(c) || "array" === d))
                    return !0;
                if ("array" === d) {
                    if (b.length !== c.length)
                        return !0;
                    for (var e = 0; e < b.length; e++)
                        if (Ko(a,
                        b[e], c[e]))
                            return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f))
                            return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || Ko(a, b[g], c[g]))
                            return !0
                }
            } catch (h) {
                N(72)
            }
            return !1
        },
        Oo = function(a, b) {
            this.vj = a;
            this.wj = b;
            this.F = {};
            this.Ch = {};
            this.h = {};
            this.N = {};
            this.B = {};
            this.bd = {};
            this.D = {};
            this.Gc = function() {};
            this.eb = function() {};
            this.U = !1
        },
        Po = function(a, b) {
            a.F = b;
            return a
        },
        Qo = function(a, b) {
            a.Ch = b;
            return a
        },
        Ro = function(a, b) {
            a.h = b;
            return a
        },
        So = function(a, b) {
            a.N = b;
            return a
        },
        To = function(a, b) {
            a.B = b;
            return a
        },
        Uo = function(a,
        b) {
            a.bd = b;
            return a
        },
        Vo = function(a, b) {
            a.D = b || {};
            return a
        },
        Wo = function(a, b) {
            a.Gc = b;
            return a
        },
        Xo = function(a, b) {
            a.eb = b;
            return a
        },
        Yo = function(a) {
            a.U = !0;
            return a
        },
        Zo = function(a) {
            return new Jo(a.vj, a.wj, a.F, a.Ch, a.h, a.N, a.B, a.bd, a.D, a.Gc, a.eb, a.U)
        };
    function dp() {
        return "attribution-reporting"
    }
    function ep(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    }
    ;
    var fp = !1;
    function gp() {
        if (ep("join-ad-interest-group") && Da(Vb.joinAdInterestGroup))
            return !0;
        fp || (il('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), fp = !0);
        return ep("join-ad-interest-group") && Da(Vb.joinAdInterestGroup)
    }
    function hp(a, b) {
        var c = void 0;
        try {
            c = I.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ta() - d) {
                vb("TAGGING", 9);
                return
            }
        } else
            try {
                if (50 <= I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    vb("TAGGING", 10);
                    return
                }
            } catch (e) {}
        dc(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ta()
        }, c)
    }
    function ip() {
        return U(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net"
    }
    ;
    var jp = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        kp = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        lp = /^\d+\.fls\.doubleclick\.net$/,
        mp = /;gac=([^;?]+)/,
        np = /;gacgb=([^;?]+)/,
        op = /;gclaw=([^;?]+)/,
        pp = /;gclgb=([^;?]+)/;
    function qp(a, b) {
        if (lp.test(I.location.host)) {
            var c = I.location.href.match(b);
            return c && 2 == c.length && c[1].match(jp) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], h = 0; h < g.length; h++)
                f.push(g[h].ia);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var rp = function(a, b, c) {
        var d = vn() ? rn("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var h = Pn("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function(l) {
                return 1 === l
            });
            e.push(g + ":" + h.join(","))
        }
        return {
            gk: f ? e.join(";") : "",
            fk: qp(d, np)
        }
    };
    function sp(a, b, c) {
        if (lp.test(I.location.host)) {
            var d = I.location.href.match(c);
            if (d && 2 == d.length && d[1].match(kp))
                return [{
                    ia: d[1]
                }]
        } else
            return xn((a || "_gcl") + b);
        return []
    }
    var tp = function(a) {
            return sp(a, "_aw", op).map(function(b) {
                return b.ia
            }).join(".")
        },
        up = function(a) {
            return sp(a, "_gb", pp).map(function(b) {
                return b.ia
            }).join(".")
        },
        vp = function(a, b) {
            var c = Pn((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var wp = function() {
        if (Da(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var fq = {
        I: {
            zg: "ads_conversion_hit",
            xl: "container_execute_start",
            Cg: "container_setup_end",
            Fc: "container_setup_start",
            Bg: "container_execute_end",
            Dg: "container_yield_end",
            Ve: "container_yield_start",
            zh: "event_execute_end",
            Ah: "event_setup_end",
            ad: "event_setup_start",
            Bh: "ga4_conversion_hit",
            nc: "page_load",
            Dl: "pageview",
            Ab: "snippet_load",
            Nh: "tag_callback_error",
            Oh: "tag_callback_failure",
            Ph: "tag_callback_success",
            Qh: "tag_execute_end",
            qc: "tag_execute_start"
        }
    };
    var gq = !1,
        hq = "L S Y E TC HTC".split(" "),
        iq = ["S", "E"],
        jq = ["TS", "TE"];
    var Gq = function(a, b, c, d, e, f) {
            var g = {};
            return g
        },
        Hq = function(a) {
            var b = !1;
            return b
        },
        Iq = function(a, b) {},
        Jq = function() {
            var a = {};
            return a
        },
        zq = function() {
            var a = {};
            return a
        },
        Kq = function() {},
        Lq = function(a, b, c) {},
        Mq = function(a) {
            oc() && oc().mark(Xe.H + "_" + a + "_start")
        },
        Nq = function(a) {
            if (oc()) {
                var b = oc(),
                    c = Xe.H + "_" + a + "_start",
                    d = Xe.H + "_" + a + "_duration";
                b.measure(d, c);
                var e =
                oc().getEntriesByName(d)[0];
                b.clearMarks(c);
                b.clearMeasures(d);
                var f = eh._p || {};
                void 0 === f[a] && (f[a] = e.duration, eh._p = f);
                return e.duration
            }
        },
        Oq = function() {
            var a = Gq("PAGEVIEW");
            if (rq(a.kb, "mark")[0]) {
                var b = oc();
                b.clearMarks(a.kb);
                b.clearMeasures("GTM-" + fq.I.nc + ":to:PAGEVIEW")
            }
            var c = Gq(fq.I.nc);
            Hq(a) && Iq(a, c)
        };
    var Pq = function(a, b) {
        var c = z,
            d,
            e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a])
            return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var Qq = function(a, b) {
        var c = el(a, "fmt");
        if (b) {
            var d = el(a, "random"),
                e = el(a, "label") || "";
            if (!d)
                return !1;
            var f = dn(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
            if (!Pq(f, b))
                return !1
        }
        c && 4 != c && (a = gl(a, "rfmt", c));
        var g = gl(a, "fmt", 4);
        bc(g, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, void 0, I.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var fr = function() {
            this.h = {}
        },
        gr = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        hr = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        jr = function(a, b, c, d) {};
    function lr(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return li("" + c + b).href
        }
    }
    function mr() {
        return !!dh.xe && "SGTM_TOKEN" !== dh.xe.split("@@").join("")
    }
    ;
    var or = function(a, b, c, d) {
            if (!nr() && !Sk(a)) {
                var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + dh.ka,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                var h = mr();
                h && (f += "&sign=" + dh.xe);
                var l = mh || oh ? lr(b, e + f) : void 0;
                if (!l) {
                    var n = dh.Md + e;
                    h && Wb && g && (n = Wb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    l = bo("https://", "http://", n + f)
                }
                Qk().container[a] = {
                    state: 1,
                    context: d
                };
                bc(l)
            }
        },
        pr = function(a, b, c) {
            var d;
            if (d = !nr()) {
                var e = Qk().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Tk())
                    Qk().destination[a] = {
                        state: 0,
                        transportUrl: b,
                        context: c
                    },
                    N(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + dh.ka + "&cx=c";
                    mr() && (f += "&sign=" + dh.xe);
                    var g = mh || oh ? lr(b, f) : void 0;
                    g || (g = bo("https://", "http://", dh.Md + f));
                    Qk().destination[a] = {
                        state: 1,
                        context: c
                    };
                    bc(g)
                }
        };
    function nr() {
        if (Lk()) {
            return !0
        }
        return !1
    }
    ;
    var qr = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        rr = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        sr = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        tr = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        wr = function(a) {
            var b = Eh("gtm.allowlist") || Eh("gtm.whitelist");
            b && N(9);
            kh && (b = ["google", "gtagfl", "lcl", "zone"]);
            ur() && (kh ?
            N(116) : N(117), vr && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && Za(Qa(b), rr),
                d = Eh("gtm.blocklist") || Eh("gtm.blacklist");
            d || (d = Eh("tagTypeBlacklist")) && N(3);
            d ? N(8) : d = [];
            ur() && (d = Qa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Qa(d).indexOf("google") && N(2);
            var e = d && Za(Qa(d), sr),
                f = {};
            return function(g) {
                var h = g && g[Yd.Wa];
                if (!h || "string" != typeof h)
                    return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h])
                    return f[h];
                var l = wh[h] ||
                    [],
                    n = a(h, l);
                if (b) {
                    var p;
                    if (p = n)
                        a:
                        {
                            if (0 > c.indexOf(h))
                                if (l && 0 < l.length)
                                    for (var q = 0; q < l.length; q++) {
                                        if (0 > c.indexOf(l[q])) {
                                            N(11);
                                            p = !1;
                                            break a
                                        }
                                    }
                                else {
                                    p = !1;
                                    break a
                                }
                            p = !0
                        }n = p
                }
                var r = !1;
                if (d) {
                    var u = 0 <= e.indexOf(h);
                    if (u)
                        r = u;
                    else {
                        var t = Ma(e, l || []);
                        t && N(10);
                        r = t
                    }
                }
                var v = !n || r;
                v || !(0 <= l.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Ma(e, tr));
                return f[h] = v
            }
        },
        vr = !1;
    var ur = function() {
        return qr.test(z.location && z.location.hostname)
    };
    var xr = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        yr = {},
        zr = Object.freeze((yr[S.g.La] = !0, yr)),
        Ar = 0 <= I.location.search.indexOf("?gtm_diagnostics=") || 0 <= I.location.search.indexOf("&gtm_diagnostics="),
        Cr = function(a, b, c) {
            if (fm && "config" === a && !(1 < Zn(b).O.length)) {
                var d,
                    e = Xb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = K(c.F);
                K(c.h, f);
                var g = [],
                    h;
                for (h in d) {
                    var l = Br(d[h], f);
                    l.length && (Ar && console.log(l), g.push(h))
                }
                if (g.length) {
                    if (g.length) {
                        var n = b + "*" + g.join(".");
                        pm = pm ? pm + "!" + n : "&tdc=" + n
                    }
                    vb("TAGGING",
                    xr[I.readyState] || 14)
                }
                d[b] = f
            }
        };
    function Dr(a, b) {
        var c = {},
            d;
        for (d in b)
            b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a)
            a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }
    function Br(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b)
            return [];
        var e = function(q, r) {
                var u = r[q];
                return void 0 === u ? zr[q] : u
            },
            f;
        for (f in Dr(a, b)) {
            var g = (d ? d + "." : "") + f,
                h = e(f, a),
                l = e(f, b),
                n = "object" === Cc(h) || "array" === Cc(h),
                p = "object" === Cc(l) || "array" === Cc(l);
            if (n && p)
                Br(h, l, c, g);
            else if (n || p || h !== l)
                c[g] = !0
        }
        return Object.keys(c)
    }
    ;
    var Er = !1,
        Fr = 0,
        Gr = [];
    function Hr(a) {
        if (!Er) {
            var b = I.createEventObject,
                c = "complete" == I.readyState,
                d = "interactive" == I.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Er = !0;
                for (var e = 0; e < Gr.length; e++)
                    J(Gr[e])
            }
            Gr.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    J(arguments[f]);
                return 0
            }
        }
    }
    function Ir() {
        if (!Er && 140 > Fr) {
            Fr++;
            try {
                I.documentElement.doScroll("left"),
                Hr()
            } catch (a) {
                z.setTimeout(Ir, 50)
            }
        }
    }
    var Jr = function(a) {
        Er ? a() : Gr.push(a)
    };
    var Lr = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Xe.H
        }
    };
    var Nr = function(a, b) {
            this.h = !1;
            this.F = [];
            this.N = {
                tags: []
            };
            this.U = !1;
            this.B = this.D = 0;
            Mr(this, a, b)
        },
        Or = function(a, b, c, d) {
            if (hh.hasOwnProperty(b) || "__zone" === b)
                return -1;
            var e = {};
            Ec(d) && (e = K(d, e));
            e.id = c;
            e.status = "timeout";
            return a.N.tags.push(e) - 1
        },
        Pr = function(a, b, c, d) {
            var e = a.N.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Qr = function(a) {
            if (!a.h) {
                for (var b = a.F, c = 0; c < b.length; c++)
                    b[c]();
                a.h = !0;
                a.F.length = 0
            }
        },
        Mr = function(a, b, c) {
            void 0 !== b && a.ze(b);
            c && z.setTimeout(function() {
                return Qr(a)
            }, Number(c))
        };
    Nr.prototype.ze = function(a) {
        var b = this,
            c = Va(function() {
                return J(function() {
                    a(Xe.H, b.N)
                })
            });
        this.h ? c() : this.F.push(c)
    };
    var Rr = function(a) {
            a.D++;
            return Va(function() {
                a.B++;
                a.U && a.B >= a.D && Qr(a)
            })
        },
        Sr = function(a) {
            a.U = !0;
            a.B >= a.D && Qr(a)
        };
    var Tr = {},
        Ur = function() {
            return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
        },
        Vr = !1;
    function Yr() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var Zr = function(a) {},
        $r = function(a, b) {
            return function() {
                var c = Ur(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            l = 0 > g.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload",
                        g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    function es(a, b, c, d) {
        var e = xe[a],
            f = fs(a, b, c, d);
        if (!f)
            return null;
        var g = Ie(e[Yd.Mh], c, []);
        if (g && g.length) {
            var h = g[0];
            f = es(h.index, {
                aa: f,
                Z: 1 === h.bi ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function fs(a, b, c, d) {
        function e() {
            if (f[Yd.Bj])
                h();
            else {
                var w = Je(f, c, []),
                    y = w[Yd.Li];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!nj(y[x])) {
                            h();
                            return
                        }
                var A = Or(c.Cb, String(f[Yd.Wa]), Number(f[Yd.Bb]), w[Yd.Cj]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var G = Ta() - H;
                        Rm(c.id, xe[a], "5", G);
                        Pr(c.Cb, A, "success", G);
                        U(70) && Lq(c, f, fq.I.Ph);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var G = Ta() - H;
                        Rm(c.id, xe[a], "6", G);
                        Pr(c.Cb, A, "failure", G);
                        U(70) && Lq(c, f, fq.I.Oh);
                        h()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Rm(c.id, f, "1");
                var C = function() {
                    var G = Ta() - H;
                    Rm(c.id, f, "7", G);
                    Pr(c.Cb, A, "exception", G);
                    U(70) && Lq(c, f, fq.I.Nh);
                    B || (B = !0, h())
                };
                if (U(70)) {
                    var D = Gq(fq.I.qc, Xe.H, c.id, Number(f[Yd.Bb]), c.name, Yl(f));
                    Hq(D)
                }
                var H = Ta();
                try {
                    He(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (G) {
                    C(G)
                }
                U(70) && Lq(c, f, fq.I.Qh)
            }
        }
        var f = xe[a],
            g = b.aa,
            h = b.Z,
            l = b.terminate;
        if (c.Zf(f))
            return null;
        var n = Ie(f[Yd.Rh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = es(p.index, {
                    aa: g,
                    Z: h,
                    terminate: l
                }, c, d);
            if (!q)
                return null;
            g = q;
            h = 2 === p.bi ? l : q
        }
        if (f[Yd.Ih] || f[Yd.Ej]) {
            var r = f[Yd.Ih] ? ye : c.nl,
                u = g,
                t = h;
            if (!r[a]) {
                e = Va(e);
                var v = gs(a, r, e);
                g =
                v.aa;
                h = v.Z
            }
            return function() {
                r[a](u, t)
            }
        }
        return e
    }
    function gs(a, b, c) {
        var d = [],
            e = [];
        b[a] = hs(d, e, c);
        return {
            aa: function() {
                b[a] = is;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            Z: function() {
                b[a] = js;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function hs(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function is(a) {
        a()
    }
    function js(a, b) {
        b()
    }
    ;
    var ls = function(a, b) {
            return 1 === arguments.length ? ks("set", a) : ks("set", a, b)
        },
        ms = function(a, b) {
            return 1 === arguments.length ? ks("config", a) : ks("config", a, b)
        },
        ns = function(a, b, c) {
            c = c || {};
            c[S.g.Ob] = a;
            return ks("event", b, c)
        };
    function ks(a) {
        return arguments
    }
    var os = function() {
        this.h = [];
        this.B = []
    };
    os.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.B.length; f++)
            try {
                this.B[f](e)
            } catch (g) {}
    };
    os.prototype.listen = function(a) {
        this.B.push(a)
    };
    os.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    os.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var qs = function(a, b, c) {
            ps().enqueue(a, b, c)
        },
        ss = function() {
            var a = rs;
            ps().listen(a)
        };
    function ps() {
        var a = eh.mb;
        a || (a = new os, eh.mb = a);
        return a
    }
    var As = function(a) {
            var b = eh.zones;
            return b ? b.getIsAllowedFn(Nk(), a) : function() {
                return !0
            }
        },
        Bs = function(a) {
            var b = eh.zones;
            return b ? b.isActive(Nk(), a) : !0
        };
    var Es = function(a, b) {
        for (var c = [], d = 0; d < xe.length; d++)
            if (a[d]) {
                var e = xe[d];
                var f = Rr(b.Cb);
                try {
                    var g = es(d, {
                        aa: f,
                        Z: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = c,
                            l = h.push,
                            n = d,
                            p = e["function"];
                        if (!p)
                            throw "Error: No function name given for function call.";
                        var q = ze[p];
                        l.call(h, {
                            zi: n,
                            ni: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else
                        Cs(d, b),
                        f()
                } catch (u) {
                    f()
                }
            }
        c.sort(Ds);
        for (var r = 0; r < c.length; r++)
            c[r].execute();
        return 0 < c.length
    };
    function Ds(a, b) {
        var c,
            d = b.ni,
            e = a.ni;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var g = a.zi,
                h = b.zi;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }
    function Cs(a, b) {
        if (fm) {
            var c = function(d) {
                var e = b.Zf(xe[d]) ? "3" : "4",
                    f = Ie(xe[d][Yd.Mh], b, []);
                f && f.length && c(f[0].index);
                Rm(b.id, xe[d], e);
                var g = Ie(xe[d][Yd.Rh], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var Hs = !1,
        Fs;
    var Ns = function(a) {
        var b = Ta(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if (U(70)) {
            var f = Gq(fq.I.ad, Xe.H, c, void 0, e);
            Hq(f)
        }
        if ("gtm.js" === e) {
            if (Hs)
                return !1;
            Hs = !0;
        }
        var l,
            n = !1;
        if (Bs(c))
            l = As(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
                return !1;
            n = !0;
            l = As(Number.MAX_SAFE_INTEGER)
        }
        Qm(c,
        e);
        var p = a.eventCallback,
            q = a.eventTimeout,
            r = {
                id: c,
                priorityId: d,
                name: e,
                Zf: wr(l),
                nl: [],
                ii: function() {
                    N(6);
                    vb("HEALTH", 0)
                },
                Vh: Js(),
                Wh: Ks(c),
                Cb: new Nr(function() {
                    if (U(70)) {
                        var x = Gq(fq.I.ad, Xe.H, c, void 0, e),
                            A = Gq(fq.I.zh, Xe.H, c, void 0, e);
                        Hq(A);
                        Iq(A, x);
                        if ("gtm.load" === e) {
                            var B = Gq(fq.I.Fc, Xe.H),
                                C = Gq(fq.I.Bg, Xe.H);
                            Hq(C);
                            Iq(C, B);
                            Kq();
                        }
                    }
                    p && p.apply(p, [].slice.call(arguments, 0))
                }, q)
            },
            u = Se(r);
        n && (u = Ls(u));
        if (U(70)) {
            var t = Gq(fq.I.ad, Xe.H, c, void 0, e),
                v = Gq(fq.I.Ah, Xe.H, c, void 0, e);
            Hq(v);
            Iq(v, t)
        }
        var w = Es(u, r),
            y = !1;
        Sr(r.Cb);
        "gtm.js" !== e && "gtm.sync" !== e || Zr(Xe.H);
        return Ms(u, w) || y
    };
    function Ks(a) {
        return function(b) {
            fm && (Ic(b) || $m(a, "input", b))
        }
    }
    function Js() {
        var a = {};
        a.event = Qh("event", 1);
        a.ecommerce = Qh("ecommerce", 1);
        a.gtm = Qh("gtm");
        a.eventModel = Qh("eventModel");
        return a
    }
    function Ls(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(xe[c][Yd.Wa]);
                if (gh[d] || void 0 !== xe[c][Yd.Fj] || xh[d])
                    b[c] = !0;
                U(58) || 0 !== xe[c][Yd.Wa].indexOf("__ccd") && 0 !== xe[c][Yd.Wa].indexOf("__ogt") && "__set_product_settings" !== xe[c][Yd.Wa] || (b[c] = !0)
            }
        return b
    }
    function Ms(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && xe[c] && !hh[String(xe[c][Yd.Wa])])
                return !0;
        return !1
    }
    var Ps = function(a, b, c, d) {
            Os.push("event", [b, a], c, d)
        },
        Qs = function(a, b, c, d) {
            Os.push("get", [a, b], c, d)
        },
        Rs = function() {
            this.status = 1;
            this.N = {};
            this.h = {};
            this.B = {};
            this.U = null;
            this.F = {};
            this.D = !1
        },
        Ss = function(a, b, c, d) {
            var e = Ta();
            this.type = a;
            this.B = e;
            this.ca = b || "";
            this.h = c;
            this.messageContext = d
        },
        Ts = function() {
            this.B = {};
            this.D = {};
            this.h = []
        },
        Us = function(a, b) {
            var c = Zn(b);
            return a.B[c.X] = a.B[c.X] || new Rs
        },
        Vs = function(a, b, c, d) {
            if (d.ca) {
                var e = Us(a, d.ca),
                    f = e.U;
                if (f) {
                    var g = K(c),
                        h = K(e.N[d.ca]),
                        l = K(e.F),
                        n = K(e.h),
                        p = K(a.D),
                        q = {};
                    if (fm)
                        try {
                            q = K(Bh)
                        } catch (v) {
                            N(72)
                        }
                    var r = Zn(d.ca).prefix,
                        u = function(v) {
                            Zm(d.messageContext.eventId, r, v);
                            var w = g[S.g.cc];
                            w && J(w)
                        },
                        t = Zo(Xo(Wo(Vo(To(So(Uo(Ro(Qo(Po(new Oo(d.messageContext.eventId, d.messageContext.priorityId), g), h), l), n), p), q), d.messageContext.eventMetadata), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("2")
                            }
                        }), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("3")
                            }
                        }));
                    try {
                        Zm(d.messageContext.eventId, r, "1"),
                        Cr(d.type, d.ca, t),
                        f(d.ca, b, d.B, t)
                    } catch (v) {
                        Zm(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    Ts.prototype.register = function(a, b, c) {
        var d = Us(this, a);
        3 !== d.status && (d.U = b, d.status = 3, c && (K(d.h, c), d.h = c), this.flush())
    };
    Ts.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!Zn(c))
                return;
            if (c) {
                var e = Zn(c);
                e && 1 === Us(this, c).status && (Us(this, c).status = 2, this.push("require", [{}], e.X, {}))
            }
            Us(this, c).D && (d.deferrable = !1)
        }
        this.h.push(new Ss(a, c, b, d));
        d.deferrable || this.flush()
    };
    Ts.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable)
                !f.ca || Us(this, f.ca).D ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f),
                this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                case "require":
                    g = Us(this, f.ca);
                    if (3 !== g.status && !a) {
                        this.h.push.apply(this.h, c);
                        return
                    }
                    break;
                case "set":
                    m(f.h[0], function(r, u) {
                        K(bb(r, u), b.D)
                    });
                    break;
                case "config":
                    g = Us(this, f.ca);
                    e.qb = {};
                    m(f.h[0], function(r) {
                        return function(u, t) {
                            K(bb(u, t), r.qb)
                        }
                    }(e));
                    var h = !!e.qb[S.g.Zc];
                    delete e.qb[S.g.Zc];
                    var l = Zn(f.ca),
                        n = l.X === l.id;
                    h || (n ? g.F = {} : g.N[f.ca] = {});
                    g.D && h || Vs(this, S.g.Ea, e.qb, f);
                    g.D = !0;
                    n ? K(e.qb, g.F) : (K(e.qb, g.N[f.ca]), N(70));
                    d = !0;
                    break;
                case "event":
                    g = Us(this, f.ca);
                    e.Gd = {};
                    m(f.h[0], function(r) {
                        return function(u, t) {
                            K(bb(u, t), r.Gd)
                        }
                    }(e));
                    Vs(this, f.h[1], e.Gd, f);
                    break;
                case "get":
                    g = Us(this, f.ca);
                    var p = {},
                        q = (p[S.g.ib] = f.h[0], p[S.g.xb] = f.h[1], p);
                    Vs(this, S.g.Ja, q, f)
                }
                this.h.shift();
                Ws(this, f)
            }
            e = {
                qb: e.qb,
                Gd: e.Gd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var Ws = function(a, b) {
            if ("require" !== b.type)
                if (b.ca)
                    for (var c = Us(a, b.ca).B[b.type] || [], d = 0; d < c.length; d++)
                        c[d]();
                else
                    for (var e in a.B)
                        if (a.B.hasOwnProperty(e)) {
                            var f = a.B[e];
                            if (f && f.B)
                                for (var g = f.B[b.type] || [], h = 0; h < g.length; h++)
                                    g[h]()
                        }
        },
        Xs = function(a, b) {
            var c = Os,
                d = K(b);
            K(Us(c, a).h, d);
            Us(c, a).h = d
        },
        Os = new Ts;
    var af;
    var nt = {},
        Bt = {},
        Ct = function(a) {
            for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
                Ld: d.Ld,
                Id: d.Id
            }, e++) {
                var f = a[e];
                if (0 <= f.indexOf("-"))
                    d.Ld = Zn(f),
                    d.Ld && (Ia(Ok(), function(p) {
                        return function(q) {
                            return p.Ld.X === q
                        }
                    }(d)) ? b.push(f) : c.push(f));
                else {
                    var g = nt[f] || [];
                    d.Id = {};
                    g.forEach(function(p) {
                        return function(q) {
                            return p.Id[q] = !0
                        }
                    }(d));
                    for (var h = Nk(), l = 0; l < h.length; l++)
                        if (d.Id[h[l]]) {
                            b = b.concat(Ok());
                            break
                        }
                    var n = Bt[f] || [];
                    n.length && (b = b.concat(n))
                }
            }
            return {
                Gk: b,
                Jk: c
            }
        },
        Dt = function(a) {
            m(nt, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Et = function(a) {
            m(Bt, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Ft = "HA GF G UA AW DC MC".split(" "),
        Gt = !1,
        Ht = !1;
    function It(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: yh()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Jt = {
            config: function(a, b) {
                var c = It(a, b);
                if (!(2 > a.length) && k(a[1])) {
                    var d = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Ec(a[2]) || 3 < a.length)
                            return;
                        d = a[2]
                    }
                    var e = Zn(a[1]);
                    if (e) {
                        Qm(c.eventId, "gtag.config");
                        var f = e.X,
                            g = e.id !== f;
                        if (g ? -1 === Ok().indexOf(f) : -1 === Nk().indexOf(f)) {
                            if (!U(61) || !d[S.g.me]) {
                                var h = d[S.g.za] || Os.D[S.g.za];
                                g ? pr(f, h, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                }) : or(f, h, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (jh && !g && !d[S.g.Zc]) {
                                var l = Ht;
                                Ht = !0;
                                if (l)
                                    return
                            }
                            Gt || N(43);
                            if (!b.noTargetGroup)
                                if (g) {
                                    Et(e.id);
                                    var n = e.id,
                                        p = d[S.g.je] || "default";
                                    p = String(p).split(",");
                                    for (var q = 0; q < p.length; q++) {
                                        var r = Bt[p[q]] || [];
                                        Bt[p[q]] = r;
                                        0 > r.indexOf(n) && r.push(n)
                                    }
                                } else {
                                    Dt(e.id);
                                    var u = e.id,
                                        t = d[S.g.je] || "default";
                                    t = t.toString().split(",");
                                    for (var v = 0; v < t.length; v++) {
                                        var w = nt[t[v]] || [];
                                        nt[t[v]] = w;
                                        0 > w.indexOf(u) && w.push(u)
                                    }
                                }
                            delete d[S.g.je];
                            var y = b.eventMetadata || {};
                            y.hasOwnProperty("is_external_event") || (y.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata =
                            y;
                            delete d[S.g.cc];
                            for (var x = g ? [e.id] : Ok(), A = 0; A < x.length; A++) {
                                var B = K(b);
                                Os.push("config", [d], x[A], B)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    N(39);
                    var c = It(a, b),
                        d = a[1];
                    "default" === d ? lj(a[2]) : "update" === d && mj(a[2], c)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && k(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Ec(a[2]) && void 0 != a[2] || 3 < a.length)
                            return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = K(e), e[S.g.cc] && (g.eventCallback = e[S.g.cc]), e[S.g.ee] && (g.eventTimeout = e[S.g.ee]));
                    var h = It(a, b),
                        l = h.eventId,
                        n = h.priorityId;
                    g["gtm.uniqueEventId"] = l;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c)
                        return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[S.g.Ob];
                    void 0 === r && (r = Eh(S.g.Ob, 2), void 0 === r && (r = "default"));
                    if (k(r) || Ga(r)) {
                        var u = r.toString().replace(/\s+/g, "").split(","),
                            t = Ct(u),
                            v = t.Gk,
                            w = t.Jk;
                        if (w.length)
                            for (var y = q && q[S.g.za] || Os.D[S.g.za], x = 0; x < w.length; x++) {
                                var A = Zn(w[x]);
                                A && pr(A.X, y, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = ao(v)
                    } else
                        p = void 0;
                    var B = p;
                    if (B) {
                        Qm(l,
                        c);
                        for (var C = [], D = 0; D < B.length; D++) {
                            var H = B[D],
                                G = K(b);
                            if (-1 !== Ft.indexOf(H.prefix)) {
                                var O = K(d),
                                    Q = G.eventMetadata || {};
                                Q.hasOwnProperty("is_external_event") || (Q.is_external_event = !G.fromContainerExecution);
                                G.eventMetadata = Q;
                                delete O[S.g.cc];
                                Ps(c, O, H.id, G)
                            }
                            C.push(H.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < B.length ? g.eventModel[S.g.Ob] = C.join() : delete g.eventModel[S.g.Ob];
                        Gt || N(43);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                N(53);
                if (4 === a.length && k(a[1]) && k(a[2]) && Da(a[3])) {
                    var c = Zn(a[1]),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        Gt || N(43);
                        var f = Os.D[S.g.za];
                        if (!Ia(Ok(), function(h) {
                            return c.X === h
                        }))
                            pr(c.X, f, {
                                source: 4,
                                fromContainerExecution: b.fromContainerExecution
                            });
                        else if (-1 !== Ft.indexOf(c.prefix)) {
                            It(a, b);
                            var g = {};
                            hj(K((g[S.g.ib] = d, g[S.g.xb] = e, g)));
                            Qs(d, function(h) {
                                J(function() {
                                    return e(h)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    Gt = !0;
                    var c = It(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (3 ===
                a.length && k(a[1]) && Da(a[2])) {
                    var b = a[1],
                        c = a[2],
                        d = af.B;
                    d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
                    if (N(74), "all" === a[1]) {
                        N(75);
                        var e = !1;
                        try {
                            e = a[2](Xe.H, "unknown", {})
                        } catch (f) {}
                        e || N(76)
                    }
                } else {
                    N(73);
                }
            },
            set: function(a, b) {
                var c;
                2 == a.length && Ec(a[1]) ? c = K(a[1]) : 3 == a.length && k(a[1]) &&
                (c = {}, Ec(a[2]) || Ga(a[2]) ? c[a[1]] = K(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = It(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    K(c);
                    var g = K(c);
                    Os.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    U(30) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        Kt = {
            policy: !0
        };
    var Lt = function(a) {
            var b = z[dh.ka].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Mt = function(a) {
            var b = z[dh.ka],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Nt = !1,
        Ot = [];
    function Pt() {
        if (!Nt) {
            Nt = !0;
            for (var a = 0; a < Ot.length; a++)
                J(Ot[a])
        }
    }
    var Qt = function(a) {
        Nt ? J(a) : Ot.push(a)
    };
    var gu = function(a) {
        if (fu(a))
            return a;
        this.Qa = a
    };
    gu.prototype.getUntrustedMessageValue = function() {
        return this.Qa
    };
    var fu = function(a) {
        return !a || "object" !== Cc(a) || Ec(a) ? !1 : "getUntrustedMessageValue" in a
    };
    gu.prototype.getUntrustedMessageValue = gu.prototype.getUntrustedMessageValue;
    var hu = 0,
        iu = {},
        ju = [],
        ku = [],
        lu = !1,
        mu = !1;
    function nu(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var ou = function(a) {
            return z[dh.ka].push(a)
        },
        pu = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return ou(a)
        },
        qu = function(a, b) {
            var c = eh[dh.ka],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };
    function ru(a, b) {
        var c = a._clear || b.overwriteModelFields;
        m(a, function(e, f) {
            "_clear" !== e && (c && Oh(e), Oh(e, f))
        });
        th || (th = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        "number" !== typeof d && (d = yh(), a["gtm.uniqueEventId"] = d, Oh("gtm.uniqueEventId", d));
        return Ns(a)
    }
    function su(a) {
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (Na(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b)
                return !0
        }
        return !1
    }
    function tu() {
        var a;
        if (ku.length)
            a = ku.shift();
        else if (ju.length)
            a = ju.shift();
        else
            return;
        var b;
        var c = a;
        if (lu || !su(c.message))
            b = c;
        else {
            lu = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = yh());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                h = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            ju.unshift(h, c);
            if (fm && Xe.H) {
                var l;
                if (Xe.Ef) {
                    var n = Xe.H,
                        p = Qk().destination[n];
                    l = p && p.context
                } else {
                    var q = Xe.H,
                        r = Qk().container[q];
                    l = r && r.context
                }
                var u = l,
                    t,
                    v = li(z.location.href);
                t = v.hostname + v.pathname;
                var w = u && u.fromContainerExecution,
                    y = u && u.source,
                    x = Xe.H,
                    A = Xe.tb,
                    B = Xe.Ef;
                rm || (rm = t);
                qm.push(x + ";" + A + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (B ? 1 : 0))
            }
            b = f
        }
        return b
    }
    function uu() {
        for (var a = !1, b; !mu && (b = tu());) {
            mu = !0;
            delete Bh.eventModel;
            Dh();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d)
                mu = !1;
            else {
                e.fromContainerExecution && Ph();
                try {
                    if (Da(d))
                        try {
                            d.call(Fh)
                        } catch (y) {}
                    else if (Ga(d)) {
                        var f = d;
                        if (k(f[0])) {
                            var g = f[0].split("."),
                                h = g.pop(),
                                l = f.slice(1),
                                n = Eh(g.join("."), 2);
                            if (null != n)
                                try {
                                    n[h].apply(n, l)
                                } catch (y) {}
                        }
                    } else {
                        var p = void 0,
                            q = !1;
                        if (Na(d)) {
                            a:
                            {
                                if (d.length &&
                                k(d[0])) {
                                    var r = Jt[d[0]];
                                    if (r && (!e.fromContainerExecution || !Kt[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }(q = p && "set" === d[0] && !!p.event) && N(101)
                        } else
                            p = d;
                        if (p) {
                            var u = ru(p, e);
                            a = u || a;
                            q && u && N(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Dh(!0);
                    var t = d["gtm.uniqueEventId"];
                    if ("number" === typeof t) {
                        for (var v = iu[String(t)] || [], w = 0; w < v.length; w++)
                            ku.push(vu(v[w]));
                        v.length && ku.sort(nu);
                        delete iu[String(t)];
                        t > hu && (hu = t)
                    }
                    mu = !1
                }
            }
        }
        return !a
    }
    function wu() {
        if (U(70) && xu()) {
            var b = Gq(fq.I.Ve, Xe.H),
                c = Gq(fq.I.Dg, Xe.H);
            Hq(c) && Iq(c, b)
        }
        var d = uu();
        try {
            Lt(Xe.H)
        } catch (e) {}
        return d
    }
    function rs(a) {
        if (hu < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            iu[b] = iu[b] || [];
            iu[b].push(a)
        } else
            ku.push(vu(a)),
            ku.sort(nu),
            J(function() {
                mu || uu()
            })
    }
    function vu(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var yu = function() {
            function a(g) {
                var h = {};
                if (fu(g)) {
                    var l = g;
                    g = fu(l) ? l.getUntrustedMessageValue() : void 0;
                    h.fromContainerExecution = !0
                }
                return {
                    message: g,
                    messageContext: h
                }
            }
            var b = Xb(dh.ka, []),
                c = eh[dh.ka] = eh[dh.ka] || {};
            !0 === c.pruned && N(83);
            iu = ps().get();
            ss();
            Jr(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var g = {};
                    b.push((g.event = "gtm.dom", g))
                }
            });
            Qt(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var g = {};
                    b.push((g.event = "gtm.load", g))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var g;
                if (0 < eh.SANDBOXED_JS_SEMAPHORE) {
                    g =
                    [];
                    for (var h = 0; h < arguments.length; h++)
                        g[h] = new gu(arguments[h])
                } else
                    g = [].slice.call(arguments, 0);
                var l = g.map(function(r) {
                    return a(r)
                });
                ju.push.apply(ju, l);
                var n = d.apply(b, g),
                    p = Math.max(100, Number("1000") || 300);
                if (this.length > p)
                    for (N(4), c.pruned = !0; this.length > p;)
                        this.shift();
                var q = "boolean" !== typeof n || n;
                return uu() && q
            };
            var e = b.slice(0).map(function(g) {
                return a(g)
            });
            ju.push.apply(ju, e);
            if (xu()) {
                if (U(70)) {
                    var f = Gq(fq.I.Ve, Xe.H);
                    Hq(f)
                }
                J(wu)
            }
        },
        xu = function() {
            var a = !0;
            a = !1;
            return a
        };
    function zu(a) {
        if (null == a || 0 === a.length)
            return !1;
        var b = Number(a),
            c = Ta();
        return b < c + 3E5 && b > c - 9E5
    }
    function Au(a) {
        return a && 0 === a.indexOf("pending:") ? zu(a.substr(8)) : !1
    }
    ;
    var Ce = {};
    Ce.te = new String("undefined");
    var bv = z.clearTimeout,
        cv = z.setTimeout,
        V = function(a, b, c, d) {
            if (Lk()) {
                b && J(b)
            } else
                return bc(a, b, c, d)
        },
        dv = function() {
            return new Date
        },
        ev = function() {
            return z.location.href
        },
        fv = function(a) {
            return ji(li(a), "fragment")
        },
        gv = function(a) {
            return ki(li(a))
        },
        hv = function(a, b) {
            return Eh(a, b || 2)
        },
        iv = function(a, b, c) {
            return b ? pu(a, b, c) : ou(a)
        },
        jv = function(a, b) {
            z[a] = b
        },
        W = function(a, b, c) {
            b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        kv = function(a, b, c) {
            return zj(a, b, void 0 === c ? !0 : !!c)
        },
        lv = function(a, b, c) {
            return 0 === Ij(a, b, c)
        },
        mv = function(a, b) {
            if (Lk()) {
                b && J(b)
            } else
                dc(a, b)
        },
        nv = function(a) {
            return !!Hu(a, "init", !1)
        },
        ov = function(a) {
            Fu(a, "init", !0)
        },
        pv = function(a, b, c) {
            fm && (Ic(a) || $m(c, b, a))
        };
    var Nv = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
    function Ov(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Pv = new La;
    function Qv(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Pv.get(e);
            f || (f = new RegExp(b, d), Pv.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }
    function Rv(a, b) {
        function c(g) {
            var h = li(g),
                l = ji(h, "protocol"),
                n = ji(h, "host", !0),
                p = ji(h, "port"),
                q = ji(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" === l && "80" === p || "https" === l && "443" === p)
                l = "web",
                p = "default";
            return [l, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function Sv(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }
    function Tv(a, b) {
        return String(a) === String(b)
    }
    function Uv(a, b) {
        return Number(a) >= Number(b)
    }
    function Vv(a, b) {
        return Number(a) <= Number(b)
    }
    function Wv(a, b) {
        return Number(a) > Number(b)
    }
    function Xv(a, b) {
        return Number(a) < Number(b)
    }
    function Yv(a, b) {
        return 0 === String(a).indexOf(String(b))
    }
    function Zv(a) {
        return $v(a) ? 1 : 0
    }
    function $v(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = K(a, {});
                K({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Zv(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return Sv(b, c);
        case "_css":
            var f;
            a:
            {
                if (b)
                    try {
                        for (var g = 0; g < Nv.length; g++) {
                            var h = Nv[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (l) {}
                f = !1
            }return f;
        case "_ew":
            return Ov(b, c);
        case "_eq":
            return Tv(b, c);
        case "_ge":
            return Uv(b, c);
        case "_gt":
            return Wv(b, c);
        case "_lc":
            return 0 <= String(b).split(",").indexOf(String(c));
        case "_le":
            return Vv(b, c);
        case "_lt":
            return Xv(b, c);
        case "_re":
            return Qv(b, c, a.ignore_case);
        case "_sw":
            return Yv(b, c);
        case "_um":
            return Rv(b, c)
        }
        return !1
    }
    ;
    function aw(a, b) {
        var c = this;
    }
    aw.R = "addConsentListener";
    var bw;
    var cw = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (bw)
                try {
                    a[b]()
                } catch (c) {
                    N(77)
                }
            else
                a[b]()
    };
    function dw(a, b, c) {
        var d = this,
            e;
        return e
    }
    dw.P = "internal.addDataLayerEventListener";
    function ew(a, b, c) {}
    ew.R = "addDocumentEventListener";
    function fw(a, b, c, d) {}
    fw.R = "addElementEventListener";
    function gw(a) {}
    gw.R = "addEventCallback";
    function kw(a) {}
    kw.P = "internal.addFormAbandonmentListener";
    var lw = {},
        mw = [],
        nw = {},
        ow = 0,
        pw = 0;
    function ww(a, b) {}
    ww.P = "internal.addFormInteractionListener";
    function Dw(a, b) {}
    Dw.P = "internal.addFormSubmitListener";
    function Iw(a) {}
    Iw.P = "internal.addGaSendListener";
    var Jw = {},
        Kw = [];
    var Rw = function(a, b) {};
    Rw.P = "internal.addHistoryChangeListener";
    function Sw(a, b, c) {}
    Sw.R = "addWindowEventListener";
    function Tw(a, b) {
        return !0
    }
    Tw.R = "aliasInWindow";
    function Uw(a, b, c) {}
    Uw.P = "internal.appendRemoteConfigParameter";
    function Vw() {
        var a = 2;
        return a
    }
    ;
    function Ww(a, b) {
        var c;
        return c
    }
    Ww.R = "callInWindow";
    function Xw(a) {}
    Xw.R = "callLater";
    function Yw(a) {}
    Yw.P = "callOnDomReady";
    function Zw(a) {}
    Zw.P = "callOnWindowLoad";
    function $w(a) {
        var b;
        return b
    }
    $w.P = "internal.computeGtmParameter";
    function ax(a, b) {
        var c;
        var d = Fc(c, this.h, Vw());
        void 0 === d && void 0 !== c && N(45);
        return d
    }
    ax.R = "copyFromDataLayer";
    function bx(a) {
        var b;
        return b
    }
    bx.R = "copyFromWindow";
    function cx(a, b) {
        var c;
        L(F(this), ["preHit:!DustMap", "dustOptions:?DustMap"], arguments);
        var d = Gc(b) || {},
            e = Gc(a, this.h, 1).getProcessedEvent(),
            f = new oo(e.target, e.eventName, e.s);
        d.omitHitData || K(e.C, f.C);
        d.omitMetadata ? f.metadata = {} : K(e.metadata, f.metadata);
        f.M = e.M;
        c = Fc(ro(f), this.h, 1);
        return c
    }
    cx.P = "internal.copyPreHit";
    function dx(a, b) {
        var c = null,
            d = Vw();
        return Fc(c, this.h, d)
    }
    dx.R = "createArgumentsQueue";
    function ex(a) {
        var b;
        return Fc(b, this.h,
        Vw())
    }
    ex.R = "createQueue";
    var fx = {},
        gx = [],
        hx = {},
        ix = 0,
        jx = 0;
    function px(a, b) {
        var c = this;
        return b
    }
    px.P = "internal.enableAutoEventOnFormInteraction";
    function ux(a, b) {
        var c = this;
        return b
    }
    ux.P = "internal.enableAutoEventOnFormSubmit";
    function zx() {
        var a = this;
    }
    zx.P = "internal.enableAutoEventOnGaSend";
    var Ax = {},
        Bx = [];
    function Ix(a, b) {
        var c = this;
        return b
    }
    Ix.P = "internal.enableAutoEventOnHistoryChange";
    function Mx(a, b) {
        var c = this;
        return b
    }
    Mx.P = "internal.enableAutoEventOnLinkClick";
    var Nx,
        Ox;
    function Xx(a, b) {
        var c = this;
        return b
    }
    Xx.P = "internal.enableAutoEventOnScroll";
    var Rb = ea(["data-gtm-yt-inspected-"]),
        Yx = ["www.youtube.com", "www.youtube-nocookie.com"],
        Zx,
        $x = !1;
    function jy(a, b) {
        var c = this;
        return b
    }
    jy.P = "internal.enableAutoEventOnYouTubeActivity";
    function ky(a, b) {
        var c = !1;
        L(F(this), ["booleanExpression:!string", "context:?DustMap"], arguments);
        var d = JSON.parse(a);
        if (!d)
            throw Error("Invalid boolean expression string was given.");
        var e = b ? Gc(b) : {};
        c = ly(d, e);
        return c
    }
    var my = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                if (void 0 === a)
                    return;
                a = a[b[c]]
            }
            return a
        },
        ny = function(a, b) {
            if (1 === a.namespaceType) {
                var c = b.preHit;
                if (!c)
                    return;
                var d = a.keyParts;
                if (!d || 0 === d.length)
                    return;
                var e = d[0];
                switch (e) {
                case "hitData":
                    return 2 > d.length ? void 0 : my(c.getHitData(d[1]), d.slice(2));
                case "metadata":
                    return 2 > d.length ? void 0 : my(c.getMetadata(d[1]), d.slice(2));
                case "eventName":
                    return c.getEventName();
                case "destinationId":
                    return c.getDestinationId();
                default:
                    throw Error(e + " is not a valid field that can be accessed\n                        from PreHit data.");
                }
            }
            throw Error("Unknown Namespace Type used:\n                      " + a.namespaceType);
        },
        oy = function(a, b) {
            if (a) {
                if (void 0 !== a.contextValue)
                    return ny(a.contextValue, b);
                if (void 0 !== a.booleanExpressionValue)
                    return ly(a.booleanExpressionValue, b);
                if (void 0 !== a.booleanValue)
                    return !!a.booleanValue;
                if (void 0 !== a.stringValue)
                    return String(a.stringValue);
                if (void 0 !== a.integerValue)
                    return Number(a.integerValue);
                if (void 0 !== a.doubleValue)
                    return Number(a.doubleValue);
                throw Error("Unknown field used for variable of type ExpressionValue:" +
                a);
            }
        },
        ly = function(a, b) {
            var c = a.args;
            if (!Ga(c) || 0 === c.length)
                throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
            var d = function(g) {
                return oy(g, b)
            };
            switch (a.type) {
            case 1:
                for (var e = 0; e < c.length; e++)
                    if (d(c[e]))
                        return !0;
                return !1;
            case 2:
                for (var f = 0; f < c.length; f++)
                    if (!d(c[f]))
                        return !1;
                return 0 < c.length;
            case 3:
                return !d(c[0]);
            case 4:
                return Qv(d(c[0]), d(c[1]), !1);
            case 5:
                return Tv(d(c[0]), d(c[1]));
            case 6:
                return Yv(d(c[0]), d(c[1]));
            case 7:
                return Ov(d(c[0]),
                d(c[1]));
            case 8:
                return Sv(d(c[0]), d(c[1]));
            case 9:
                return Xv(d(c[0]), d(c[1]));
            case 10:
                return Vv(d(c[0]), d(c[1]));
            case 11:
                return Wv(d(c[0]), d(c[1]));
            case 12:
                return Uv(d(c[0]), d(c[1]));
            default:
                throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');
            }
        };
    ky.P = "internal.evaluateBooleanExpression";
    var py;
    function qy(a) {
        var b = !1;
        return b
    }
    qy.P = "internal.evaluateMatchingRules";
    var sy = function(a, b, c) {
            if (c)
                switch (c.type) {
                case "event_name":
                    return a;
                case "const":
                    return c.const_value;
                case "event_param":
                    var d = c.event_param.param_name;
                    if (d === S.g.ne)
                        return ry(b);
                    return b[d]
                }
        },
        wy = function(a, b, c, d) {
            ty = !1;
            if (c && !uy(a, b, c))
                return !1;
            if (!d || 0 === d.length)
                return !0;
            for (var e = 0; e < d.length; e++)
                if (vy(a, b, d[e].predicates || []))
                    return !0;
            return !1
        },
        vy = function(a, b, c) {
            for (var d = 0; d < c.length; d++)
                if (!uy(a,
                b, c[d]))
                    return !1;
            return !0
        },
        uy = function(a, b, c) {
            var d = c.values || [],
                e = sy(a, b, d[0]),
                f = sy(a, b, d[1]),
                g = c.type;
            if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g)
                k(e) && (e = e.toLowerCase()),
                k(f) && (f = f.toLowerCase());
            var h = !1;
            switch (g) {
            case "eq":
            case "eqi":
                h = Tv(e, f);
                break;
            case "sw":
            case "swi":
                h = Yv(e, f);
                break;
            case "ew":
            case "ewi":
                h = Ov(e, f);
                break;
            case "cn":
            case "cni":
                h = Sv(e, f);
                break;
            case "lt":
                h = Xv(e, f);
                break;
            case "le":
                h = Vv(e, f);
                break;
            case "gt":
                h = Wv(e, f);
                break;
            case "ge":
                h = Uv(e, f);
                break;
            case "re":
            case "rei":
                h = Qv(e,
                f, "rei" === g)
            }
            return !!c.negate !== h
        },
        ty = !1;
    var ry = function(a) {
            var b = a[S.g.ne];
            if (b)
                return b;
            ty = !0;
            var c = a[S.g.Ta];
            if (k(c)) {
                var d = U(57);
                if (Da(URL))
                    try {
                        var e = new URL(c);
                        return e.pathname + xy(d ? e.search : "")
                    } catch (h) {
                        return
                    }
                var f = li(c);
                if (f.hostname) {
                    var g = d ? ji(f, "query") : "";
                    g && (g = "?" + g);
                    return ji(f, "path") + xy(g)
                }
            }
        },
        xy = function(a) {
            if (!U(72) || !a)
                return a;
            var b = a.split("&"),
                c = [];
            b[0] = b[0].substring(1);
            for (var d = 0; d < b.length; d++) {
                var e = b[d],
                    f = e.indexOf("=");
                yy[0 <= f ? e.substring(0, f) : e] || c.push(b[d])
            }
            return c.length ? "?" + c.join("&") : ""
        },
        yy = Object.freeze({
            __utma: 1,
            __utmb: 1,
            __utmc: 1,
            __utmk: 1,
            __utmv: 1,
            __utmx: 1,
            __utmz: 1,
            __ga: 1,
            _gac: 1,
            _gl: 1,
            dclid: 1,
            gbraid: 1,
            gclid: 1,
            gclsrc: 1,
            utm_campaign: 1,
            utm_content: 1,
            utm_expid: 1,
            utm_id: 1,
            utm_medium: 1,
            utm_nooverride: 1,
            utm_referrer: 1,
            utm_source: 1,
            utm_term: 1,
            wbraid: 1
        });
    function zy(a, b) {
        var c = !1;
        return c
    }
    zy.P = "internal.evaluatePredicates";
    var Ay = function(a) {
        var b;
        return b
    };
    function By(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    By.R = "getCookieValues";
    function Cy() {
        return Mi.De
    }
    Cy.P = "internal.getCountryCode";
    function Dy() {
        var a = [];
        return Fc(a)
    }
    Dy.P = "internal.getDestinationIds";
    function Ey(a) {
        var b = null;
        return b
    }
    Ey.R = "getElementById";
    var Fy = {};
    Fy.enableAdsHistoryChangeEvents = U(36);
    Fy.enableAlwaysSendFormStart = U(38);
    Fy.enableCcdEnhancedMeasurement = U(41);
    Fy.enableCcdEventBlocking = U(40);
    Fy.enableCcdEventEditingAndCreation = U(26);
    Fy.enableCcdGaConversions = U(39);
    Fy.enableCcdPreAutoPiiDetection = U(49);
    Fy.enableCcdUserData = U(16);
    Fy.enableEesPagePath = U(43);
    Fy.enableEuidAutoMode = U(37);
    Fy.enableGa4OnoRemarketing = U(34);
    Fy.enableGaGamWindowSet = U(67);
    Fy.autoPiiEligible = !0;
    function Gy() {
        return Fc(Fy)
    }
    Gy.P = "internal.getFlags";
    function Hy(a, b) {
        var c;
        L(F(this), ["targetId:!string", "name:!string"], arguments);
        var d = Uh(a) || {};
        c = Fc(d[b], this.h);
        return c
    }
    Hy.P = "internal.getProductSettingsParameter";
    function Iy(a, b) {
        var c;
        return c
    }
    Iy.R = "getQueryParameters";
    function Jy(a, b) {
        var c;
        return c
    }
    Jy.R = "getReferrerQueryParameters";
    function Ky(a) {
        var b = "";
        return b
    }
    Ky.R = "getReferrerUrl";
    function Ly() {
        return Mi.ri
    }
    Ly.P = "internal.getRegionCode";
    function My(a, b) {
        var c;
        return c
    }
    My.P = "internal.getRemoteConfigParameter";
    function Ny(a) {
        var b = "";
        return b
    }
    Ny.R = "getUrl";
    function Oy() {
        M(this, "get_user_agent");
        return Vb.userAgent
    }
    Oy.R = "getUserAgent";
    function Py(a) {
        if (!a)
            return {};
        var b = a.ck;
        return Lr(b.type, b.index, b.name)
    }
    function Qy(a) {
        return a ? {
            originatingEntity: Py(a)
        } : {}
    }
    ;
    function Sy(a, b) {}
    Sy.R = "gtagSet";
    function Ty(a, b) {}
    Ty.R = "injectHiddenIframe";
    var Uy = {};
    function Wy(a, b, c, d) {}
    var Xy = Object.freeze({
            dl: 1,
            id: 1
        }),
        Yy = {};
    function Zy(a, b, c, d) {}
    Wy.R = "injectScript";
    Zy.P = "internal.injectScript";
    function $y(a) {
        var b = !0;
        return b
    }
    $y.R = "isConsentGranted";
    var az = function() {
        var a = bg(function(b) {
            this.h.h.log("error", b)
        });
        a.R = "JSON";
        return a
    };
    var bz = function() {
            return !1
        },
        cz = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
            b) {
                return !1
            },
            removeItem: function(a) {}
        };
    var dz = ["textContent", "value", "tagName", "children", "childElementCount"];
    function ez(a) {
        var b;
        return b
    }
    ez.P = "internal.locateUserData";
    function gz() {}
    gz.R = "logToConsole";
    function hz(a) {
        var b = void 0;
        return b
    }
    hz.R = "parseUrl";
    function iz(a) {}
    iz.P = "internal.processAsNewEvent";
    function jz(a, b) {
        var c = !1;
        return c
    }
    jz.R = "queryPermission";
    function kz() {
        var a = "";
        return a
    }
    kz.R = "readCharacterSet";
    function lz() {
        var a = "";
        return a
    }
    lz.R = "readTitle";
    function mz(a, b) {
        var c = this;
        L(F(this), ["destinationId:!string", "callback:!Fn"], arguments),
        uo(a, function(d) {
            b.h(c.h, Fc(d, c.h, 1))
        });
    }
    mz.P = "internal.registerCcdCallback";
    var nz = Object.freeze(["config", "event", "get", "set"]);
    function oz(a, b, c) {}
    oz.P = "internal.registerGtagCommandListener";
    function pz(a, b) {
        var c = !1;
        return c
    }
    pz.P = "internal.removeDataLayerEventListener";
    function qz() {}
    qz.R = "resetDataLayer";
    var rz = function(a) {
            var b = !1;
            return b
        },
        sz = function(a) {
            return qo(a, S.g.hf, !1)
        },
        tz = function(a) {
            if (a.metadata.is_merchant_center)
                return !1;
            var b = T(a.s, S.g.fe);
            return !(!0 !== b && "true" !== b || !T(a.s, S.g.za))
        },
        uz = function(a) {
            var b = a.metadata.user_data;
            if (Ec(b))
                return b
        },
        vz = function(a, b) {
            var c = qo(a, S.g.de, a.s.D[S.g.de]);
            if (c && void 0 !== c[b || a.eventName])
                return c[b || a.eventName]
        },
        wz = function(a, b, c) {
            a.C[S.g.ed] || (a.C[S.g.ed] = {});
            a.C[S.g.ed][b] = c
        };
    var xz = !1,
        yz = function(a) {
            var b = a.eventName === S.g.Lc && bj() && tz(a),
                c = a.metadata.batch_on_navigation,
                d = a.metadata.is_conversion,
                e = a.metadata.is_session_start,
                f = a.metadata.create_dc_join,
                g = a.metadata.create_google_join,
                h = a.metadata.euid_mode_enabled && !!uz(a);
            return !(!Vb.sendBeacon || d || h || e || f || g || b || !c && xz)
        };
    var zz = function(a) {
        vb("GA4_EVENT", a)
    };
    var Bz = function(a) {
            return !a || Az.test(a) || Tg.hasOwnProperty(a)
        },
        Cz = function(a, b, c) {
            for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
                var f = d[e];
                if (f.edit_param) {
                    var g = f.edit_param.param_name,
                        h = sy(a, b, f.edit_param.param_value),
                        l;
                    if (h) {
                        var n = Number(h);
                        l = isNaN(n) ? h : n
                    } else
                        l = h;
                    b[g] = l
                } else
                    f.delete_param && delete b[f.delete_param.param_name]
            }
        },
        Az = /^(_|ga_|google_|gtag\.|firebase_).*$/;
    var Dz = function(a) {
            var b = 0,
                c = 0;
            return {
                start: function() {
                    b = Ta()
                },
                stop: function() {
                    c = this.get()
                },
                get: function() {
                    var d = 0;
                    a.dg() && (d = Ta() - b);
                    return d + c
                }
            }
        },
        Ez = function() {
            this.h = void 0;
            this.B = 0;
            this.isActive = this.isVisible = this.D = !1;
            this.N = this.F = void 0
        };
    ba = Ez.prototype;
    ba.xj = function(a) {
        var b = this;
        if (!this.h) {
            this.D = I.hasFocus();
            this.isVisible = !I.hidden;
            this.isActive = !0;
            var c = function(d, e, f) {
                fc(d, e, function(g) {
                    b.h.stop();
                    f(g);
                    b.dg() && b.h.start()
                })
            };
            c(z, "focus", function() {
                b.D = !0
            });
            c(z, "blur", function() {
                b.D =
                !1
            });
            c(z, "pageshow", function(d) {
                b.isActive = !0;
                d.persisted && N(56);
                b.N && b.N()
            });
            c(z, "pagehide", function() {
                b.isActive = !1;
                b.F && b.F()
            });
            c(I, "visibilitychange", function() {
                b.isVisible = !I.hidden
            });
            tz(a) && -1 === (Vb.userAgent || "").indexOf("Firefox") && -1 === (Vb.userAgent || "").indexOf("FxiOS") && c(z, "beforeunload", function() {
                xz = !0
            });
            this.sg();
            this.B = 0
        }
    };
    ba.sg = function() {
        this.B += this.Ge();
        this.h = Dz(this);
        this.dg() && this.h.start()
    };
    ba.rl = function(a) {
        var b = this.Ge();
        0 < b && (a.C[S.g.be] = b)
    };
    ba.qk = function(a) {
        a.C[S.g.be] =
        void 0;
        this.sg();
        this.B = 0
    };
    ba.dg = function() {
        return this.D && this.isVisible && this.isActive
    };
    ba.mk = function() {
        return this.B + this.Ge()
    };
    ba.Ge = function() {
        return this.h && this.h.get() || 0
    };
    ba.Vk = function(a) {
        this.F = a
    };
    ba.si = function(a) {
        this.N = a
    };
    function Fz() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var Gz = function() {
            var a = Fz();
            a.hid = a.hid || Ka();
            return a.hid
        },
        Hz = function(a, b) {
            var c = Fz();
            if (void 0 == c.vid || b && !c.from_cookie)
                c.vid = a,
                c.from_cookie = b
        };
    var Iz = function(a, b, c) {
            var d = a.metadata.client_id_source;
            if (void 0 === d || c <= d)
                a.C[S.g.ub] = b,
                a.metadata.client_id_source = c
        },
        Lz = function(a, b) {
            var c;
            var d = b.metadata.cookie_options,
                e = d.prefix + "_ga",
                f = Rj(d, void 0, void 0, S.g.W);
            if (!1 === T(b.s, S.g.bc) && Jz(b) === a)
                c = !0;
            else {
                var g = Qj(a, Kz[0], d.domain, d.path);
                c = 1 !== Ij(e, g, f)
            }
            return c
        },
        Jz = function(a) {
            var b = a.metadata.cookie_options,
                c = b.prefix + "_ga",
                d = Pj(c, b.domain, b.path, Kz, S.g.W);
            if (!d) {
                var e = String(T(a.s, S.g.Pc, ""));
                e && e != c && (d = Pj(e, b.domain, b.path, Kz, S.g.W))
            }
            return d
        },
        Kz = ["GA1"],
        Mz = function(a, b) {
            var c = a.C[S.g.ub];
            if (b && c === b)
                return c;
            if (c) {
                c = "" + c;
                if (!Lz(c, a))
                    return N(31), a.M = !0, "";
                Hz(c, nj(S.g.W));
                return c
            }
            N(32);
            a.M = !0;
            return ""
        };
    var Pz = function(a, b, c) {
            if (!b)
                return a;
            if (!a)
                return b;
            var d = Nz(a);
            if (!d)
                return b;
            var e,
                f = Oa(null != (e = T(c.s, S.g.Xc)) ? e : 30);
            if (!(Math.floor(c.metadata.event_start_timestamp_ms / 1E3) > d.wd + 60 * f))
                return a;
            var g = Nz(b);
            if (!g)
                return a;
            g.Tb = d.Tb + 1;
            var h;
            return null != (h = Oz(g.sessionId, g.Tb, g.zc, g.wd, g.eg, g.Rb, g.jd)) ? h : b
        },
        Sz = function(a, b) {
            var c = b.metadata.cookie_options,
                d = Qz(b, c),
                e = Qj(a, Rz[0], c.domain, c.path),
                f = {
                    pb: S.g.W,
                    domain: c.domain,
                    path: c.path,
                    expires: c.Db ? new Date(Ta() + 1E3 * c.Db) : void 0,
                    flags: c.flags
                };
            U(52) &&
            Ij(d, void 0, f);
            return 1 !== Ij(d, e, f)
        },
        Tz = function(a) {
            var b = a.metadata.cookie_options,
                c = Qz(a, b),
                d = Pj(c, b.domain, b.path, Rz, S.g.W);
            if (!d || !fm && !U(52))
                return d;
            var e = zj(c, void 0, void 0, S.g.W);
            if (d && 1 < e.length) {
                N(114);
                for (var f = void 0, g = void 0, h = 0; h < e.length; h++) {
                    var l = e[h].split(".");
                    if (!(7 > l.length)) {
                        var n = Number(l[5]);
                        n && (!g || n > g) && (g = n, f = e[h])
                    }
                }
                f && !f.endsWith(d) && (N(115), U(52) && (d = f.split(".").slice(2).join(".")))
            }
            return d
        },
        Oz = function(a, b, c, d, e, f, g) {
            if (a && b) {
                var h = [a, b, Oa(c), d, e];
                h.push(f ? "1" : "0");
                h.push(g || "0");
                return h.join(".")
            }
        },
        Rz = ["GS1"],
        Qz = function(a, b) {
            return b.prefix + "_ga_" + a.target.O[0]
        },
        Nz = function(a) {
            if (a) {
                var b = a.split(".");
                if (!(5 > b.length || 7 < b.length)) {
                    7 > b.length && N(67);
                    var c = Number(b[1]),
                        d = Number(b[3]),
                        e = Number(b[4] || 0);
                    if (!U(74) || c && d && !isNaN(e))
                        return {
                            sessionId: b[0],
                            Tb: c,
                            zc: !!Number(b[2]),
                            wd: d,
                            eg: e,
                            Rb: "1" === b[5],
                            jd: "0" !== b[6] ? b[6] : void 0
                        };
                    c || N(118);
                    d || N(119);
                    isNaN(e) && N(120)
                }
            }
        },
        Uz = function(a) {
            return Oz(a.C[S.g.yb], a.C[S.g.qe], a.C[S.g.pe], Math.floor(a.metadata.event_start_timestamp_ms /
            1E3), a.metadata.join_timer_sec || 0, !!a.metadata[S.g.ef], a.C[S.g.Sc])
        };
    var Vz = function(a) {
            var b = T(a.s, S.g.ya),
                c = a.s.D[S.g.ya];
            if (c === b)
                return c;
            var d = K(b);
            c && c[S.g.V] && (d[S.g.V] = (d[S.g.V] || []).concat(c[S.g.V]));
            return d
        },
        Wz = function(a, b) {
            var c = kk(!0);
            return "1" !== c._up ? {} : {
                clientId: c[a],
                xi: c[b]
            }
        },
        Xz = function(a, b, c) {
            var d = kk(!0),
                e = d[b];
            e && (Iz(a, e, 2), Lz(e, a));
            var f = d[c];
            f && Sz(f, a);
            return !(!e || !f)
        },
        Yz = !1,
        Zz = function(a) {
            var b = Vz(a) || {},
                c = a.metadata.cookie_options,
                d = c.prefix + "_ga",
                e = Qz(a, c);
            tk(b[S.g.ic], !!b[S.g.V]) && Xz(a, d, e) && (Yz = !0);
            b[S.g.V] && qk(function() {
                var f = {},
                    g = Jz(a);
                g && (f[d] = g);
                var h = Tz(a);
                h && (f[e] = h);
                var l = zj("FPLC", void 0, void 0, S.g.W);
                l.length && (f._fplc = l[0]);
                return f
            }, b[S.g.V], b[S.g.jc], !!b[S.g.Lb])
        },
        aA = function(a) {
            if (!T(a.s, S.g.zb))
                return {};
            var b = a.metadata.cookie_options,
                c = b.prefix + "_ga",
                d = Qz(a, b);
            rk(function() {
                var e;
                if (nj("analytics_storage"))
                    e = {};
                else {
                    var f = {};
                    e = (f._up = "1", f[c] = a.C[S.g.ub], f[d] = Uz(a), f)
                }
                return e
            }, 1);
            return !nj("analytics_storage") && $z() ? Wz(c, d) : {}
        },
        $z = function() {
            var a = ii(z.location, "host"),
                b = ii(li(I.referrer), "host");
            return a && b ? a === b ||
            0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
        },
        bA = function(a) {
            if (!a)
                return a;
            var b = String(a);
            b = jk(b);
            return b = jk(b, "_ga")
        };
    var cA = function() {
            var a = !0;
            Xl(7) && Xl(9) && Xl(10) || (a = !1);
            return a
        },
        dA = function() {
            var a = !0;
            Xl(3) && Xl(4) || (a = !1);
            return a
        };
    var eA = function(a, b) {
            if (!U(65) && tz(b)) {
                var c = wp();
                c && (a.us_privacy = c);
                var d = Wl();
                d && (a.gdpr = d);
                var e = Vl();
                e && (a.gdpr_consent = e)
            }
        },
        fA = function(a, b) {
            if (bj()) {
                a.gcs = oj();
                var c = b.metadata.is_consent_update;
                c && (a.gcu = "1");
                if (!U(65) && tz(b)) {
                    cj() && (a.gcd = "G1" + jj($i));
                    var d = T(b.s, S.g.na);
                    a.adr = void 0 !== d && !1 !== d ? "1" : "0";
                    c && (a.gcut = ah[b.metadata.consent_update_type || ""])
                }
            }
        },
        iA = function(a) {
            if (a.metadata.is_merchant_center)
                return "https://www.merchant-center-analytics.goog/mc/collect";
            var b = lr(T(a.s, S.g.za),
            "/g/collect");
            if (b)
                return b;
            var c = qo(a, S.g.jb, T(a.s, S.g.jb));
            var d = T(a.s, S.g.Ib);
            return c && !sz(a) && !1 !== d && cA() && nj(S.g.K) && nj(S.g.W) ? gA() : hA()
        },
        jA = "",
        kA = !1;
    kA = !0;
    var lA = {};
    lA[S.g.sj] = "tid";
    lA[S.g.ub] = "cid";
    lA[S.g.Sa] = "ul";
    lA[S.g.ff] = "_fid";
    lA[S.g.qf] = "tt";
    lA[S.g.ke] = "ir";
    lA[S.g.Nb] = "sr";
    lA[S.g.hc] = "gdid";
    lA[S.g.Wc] = "_rdi";
    lA[S.g.Zg] = "_geo";
    lA[S.g.Gh] = "gtm_up";
    lA[S.g.Df] = "_glv";
    lA[S.g.rf] = "uaa",
    lA[S.g.sf] = "uab",
    lA[S.g.tf] = "uafvl",
    lA[S.g.uf] = "uamb",
    lA[S.g.vf] =
    "uam",
    lA[S.g.wf] = "uap",
    lA[S.g.xf] = "uapv",
    lA[S.g.qh] = "uaW",
    lA[S.g.yf] = "uaw";
    var mA = {};
    mA[S.g.yb] = "sid";
    mA[S.g.qe] = "sct";
    mA[S.g.pe] = "seg";
    mA[S.g.Ta] = "dl";
    U(80) && (mA[S.g.ne] = "dp");
    mA[S.g.Ua] = "dr";
    mA[S.g.kc] = "dt";
    mA[S.g.sa] = "cu";
    mA[S.g.Aa] = "uid";
    mA[S.g.Td] = "cc";
    mA[S.g.Ud] = "ci";
    mA[S.g.Vd] = "cm";
    mA[S.g.Wd] = "cn";
    mA[S.g.Xd] = "cs";
    mA[S.g.Yd] =
    "ck";
    var nA = {};
    nA[S.g.be] = "_et";
    nA[S.g.fc] = "edid";
    var oA = {};
    oA[S.g.Td] = "cc";
    oA[S.g.Ud] = "ci";
    oA[S.g.Vd] = "cm";
    oA[S.g.Wd] = "cn";
    oA[S.g.Xd] = "cs";
    oA[S.g.Yd] = "ck";
    var pA = {},
        qA = Object.freeze((pA[S.g.va] = !0, pA)),
        hA = function() {
            var a = "www";
            kA && jA && (a = jA);
            return "https://" + a + ".google-analytics.com/g/collect"
        },
        gA = function() {
            var a;
            kA && jA && (a = jA);
            return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect"
        },
        rA = function(a, b, c) {
            var d = {},
                e = {},
                f = {};
            d.v = "2";
            d.tid = a.target.X;
            d.gtm = Xk();
            d._p = Gz();
            c && (d.em = c);
            a.metadata.create_google_join && (d._gaz = 1);
            fA(d, a);
            eA(d, a);
            var g = a.C[S.g.hc];
            g && (d.gdid = g);
            e.en = hf(a.eventName, 40);
            a.metadata.is_first_visit && (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
            a.metadata.is_new_to_site &&
            (e._nsi = 1);
            a.metadata.is_session_start && (e._ss = a.metadata.is_session_start_conversion ? 2 : 1);
            a.metadata.is_conversion && (e._c = 1);
            a.metadata.is_external_event && (e._ee = 1);
            if (a.metadata.is_ecommerce) {
                var h = a.C[S.g.ja] || T(a.s, S.g.ja);
                if (Ga(h))
                    for (var l = 0; l < h.length && 200 > l; l++)
                        e["pr" + (l + 1)] = of(h[l])
            }
            var n = a.C[S.g.fc];
            n && (e.edid = n);
            var p = function(t, v) {
                    if ("object" !== typeof v || !qA[t]) {
                        t = hf(t, 40);
                        var w = "ep." + t,
                            y = "epn." + t;
                        t = Ea(v) ? y : w;
                        var x = Ea(v) ? w : y;
                        e.hasOwnProperty(x) && delete e[x];
                        e[t] = hf(v, 100)
                    }
                },
                q = function(t) {
                    tz(a) &&
                    "object" === typeof t && m(t || {}, function(v, w) {
                        "object" !== typeof w && (d["sst." + v] = hf(w, 420))
                    })
                };
            m(a.C, function(t, v) {
                if (void 0 !== v && !Rg.hasOwnProperty(t)) {
                    null === v && (v = "");
                    var w;
                    t !== S.g.Sc ? w = !1 : a.metadata.euid_mode_enabled ? (d.ecid = v, w = !0) : w = void 0;
                    if (!w && t !== S.g.ef) {
                        var y = v;
                        !0 === v && (y = "1");
                        !1 === v && (y = "0");
                        var x;
                        if (lA[t])
                            x = lA[t],
                            U(65) && t === S.g.Df || (d[x] = hf(y, 420));
                        else if (mA[t])
                            x = mA[t],
                            f[x] = hf(y, "dl" === x && U(81) ? 1E3 : 420);
                        else if (nA[t])
                            x = nA[t],
                            e[x] = hf(y, 420);
                        else if ("_" === t.charAt(0))
                            d[t] = hf(y, 420);
                        else {
                            var A;
                            oA[t] ? A = !0 : t !== S.g.Mc ? A = !1 : ("object" !== typeof v && p(t, v), A = !0);
                            A || p(t, v)
                        }
                    }
                }
            });
            U(65) && q(a.C[S.g.ed]);
            var r = a.C[S.g.Ma] || {};
            !1 !== T(a.s, S.g.da) && dA() || (r._npa = "1");
            U(28) && !1 === T(a.s, S.g.Ib) && (d.ngs = "1");
            m(r, function(t, v) {
                if (void 0 !== v)
                    if (null === v && (v = ""), t === S.g.Aa && !f.uid)
                        f.uid = hf(v, 36);
                    else if (b[t] !== v) {
                        var w = (Ea(v) ? "upn." : "up.") + hf(t, 24);
                        e[w] = hf(v, 36);
                        b[t] = v
                    }
            });
            var u = !1;
            return qf.call(this,
                {
                    Ba: d,
                    Ub: f,
                    Sf: e
                }, iA(a), tz(a), u) || this
        };
    na(rA, qf);
    var sA = function() {
        var a = Ta(),
            b = a + 864E5,
            c = 20,
            d = 5E3;
        return function() {
            var e = Ta();
            e >= b && (b = e + 864E5, d = 5E3);
            if (1 > d)
                return !1;
            c = Math.min(c + (e - a) / 1E3 * 5, 20);
            a = e;
            if (1 > c)
                return !1;
            d--;
            c--;
            return !0
        }
    };
    var tA = function(a, b) {
            return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
                return b[d] || c
            })
        },
        uA = function(a) {
            var b = a.search;
            return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
        },
        vA = function(a) {
            var b = {},
                c = "",
                d = a.pathname.indexOf("/g/collect");
            0 <= d && (c = a.pathname.substring(0, d));
            b.transport_url = a.protocol + "//" + a.hostname + c;
            return b
        },
        wA = function(a, b) {
            var c = new z.XMLHttpRequest;
            c.withCredentials = !0;
            var d = b ? "POST" : "GET",
                e = "",
                f = 0,
                g = li(a),
                h = vA(g),
                l = uA(g);
            c.onprogress = function(n) {
                if (200 ===
                c.status) {
                    e += c.responseText.substring(f);
                    f = n.loaded;
                    for (var p = tA(e, h), q = p.indexOf("\n\n"); -1 !== q;) {
                        var r;
                        a:
                        {
                            var u,
                                t = p.substring(0, q).split("\n"),
                                v = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
                            u = v ? v.call(t) : {
                                next: da(t)
                            };
                            var w = u.next().value,
                                y = u.next().value;
                            if (w.startsWith("event: message") && y.startsWith("data: "))
                                try {
                                    r = JSON.parse(y.substring(y.indexOf(":") + 1));
                                    break a
                                } catch (H) {}
                            r = void 0
                        }var x = r;
                        if (x) {
                            var A = x.send_pixel || [];
                            if (Array.isArray(A))
                                for (var B = 0; B < A.length; B++)
                                    ec(A[B]);
                            if (U(66)) {
                                var C = x.send_beacon || [];
                                if (Array.isArray(C))
                                    for (var D = 0; D < C.length; D++)
                                        lc(C[D])
                            }
                        }
                        p = p.substring(q + 2);
                        q = p.indexOf("\n\n")
                    }
                    e = p
                }
            };
            c.open(d, l);
            c.send(b)
        };
    var zA = function(a, b, c, d) {
            var e = a + "?" + b;
            xA && (d = !(0 === e.indexOf(hA()) || 0 === e.indexOf(gA())));
            d && !xz ? wA(e, c) : yA(a, b, c)
        },
        AA = function(a) {},
        BA = function(a, b) {
            function c(u) {
                q.push(u + "=" + encodeURIComponent("" + a.Ba[u]))
            }
            var d = b.fl,
                e = b.il,
                f = b.pk,
                g = b.Nj,
                h = b.Mj,
                l = b.vk,
                n = b.jl,
                p = b.uk;
            if (d || e || n) {
                var q = [];
                c("tid");
                c("cid");
                c("gtm");
                q.push("aip=1");
                a.Ub.uid && !p && q.push("uid=" + encodeURIComponent("" + a.Ub.uid));
                d && (yA("https://stats.g.doubleclick.net/g/collect", "v=2&" + q.join("&")), ij("https://stats.g.doubleclick.net/g/collect?v=2&" +
                q.join("&")));
                if (e) {
                    q.push("z=" + Ka());
                    if (!l) {
                        var r = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                        r && ec(r + q.join("&"))
                    }
                    U(28) && g && h && gp() && function() {
                        var u = ip() + "/td/ga/rul?";
                        q = [];
                        c("tid");
                        q.push("gacid=" + encodeURIComponent(String(a.Ba.cid)));
                        c("gtm");
                        q.push("aip=1");
                        q.push("fledge=1");
                        q.push("z=" + Ka());
                        hp(u + q.join("&"), a.Ba.tid)
                    }()
                }
                n && AA(a)
            }
        },
        xA = !1;
    var CA = function() {
        this.F = 1;
        this.N = {};
        this.h = new rf;
        this.B = -1
    };
    CA.prototype.D = function(a, b) {
        var c = this,
            d;
        d = new rA(a, this.N, b);
        var e = yz(a);
        e && this.h.F(d) || this.flush();
        if (e && this.h.add(d)) {
            if (0 > this.B) {
                var f = z.setTimeout,
                    g;
                tz(a) ? DA ? (DA = !1, g = EA) : g = FA : g = 5E3;
                this.B = f.call(z, function() {
                    return c.flush()
                }, g)
            }
        } else {
            var h = tf(d, this.F++);
            zA(d.h, h.mg, h.body, d.F);
            var l = a.metadata.create_dc_join,
                n = a.metadata.create_google_join,
                p = !1 !== T(a.s, S.g.Fa),
                q = !1 !== T(a.s, S.g.da),
                r = {
                    eventId: a.s.eventId,
                    priorityId: a.s.priorityId
                },
                u = {
                    fl: l,
                    il: n,
                    pk: String(qo(a, S.g.Uc, T(a.s, S.g.Uc))),
                    Nj: p,
                    Mj: q,
                    vk: sz(a),
                    uk: a.metadata.euid_mode_enabled,
                    Jl: r
                };
            BA(d, u)
        }
        if (U(70)) {
            var t = Gq(fq.I.Bh, Xe.tb, a.s.eventId, void 0, a.eventName);
            Hq(t) && Iq(t)
        }
    };
    CA.prototype.add = function(a) {
        a.metadata.euid_mode_enabled && !xz ? this.U(a) :
        this.D(a)
    };
    CA.prototype.flush = function() {
        if (this.h.events.length) {
            var a = uf(this.h, this.F++);
            zA(this.h.h, a.mg, a.body, this.h.B);
            this.h = new rf;
            0 <= this.B && (z.clearTimeout(this.B), this.B = -1)
        }
    };
    CA.prototype.U = function(a) {
        var b = this,
            c = uz(a);
        c ? Og(c, function(d) {
            b.D(a, 1 === d.split("~").length ? void 0 : d)
        }) : this.D(a)
    };
    var yA = function(a, b, c) {
            var d = a + "?" + b;
            if (c)
                try {
                    Vb.sendBeacon && Vb.sendBeacon(d, c)
                } catch (e) {
                    vb("TAGGING", 15)
                }
            else
                lc(d)
        },
        EA = Yk('', 500),
        FA = Yk('',
        5E3),
        DA = !0;
    var GA = window,
        HA = document,
        IA = function(a) {
            var b = GA._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === GA["ga-disable-" + a])
                return !0;
            try {
                var c = GA.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                    return !0
            } catch (f) {}
            for (var d = tj("AMP_TOKEN", String(HA.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e])
                    return !0;
            return HA.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var JA = function(a, b, c) {
            c || (c = function() {});
            void 0 !== a.C[b] && (a.C[b] = c(a.C[b]))
        },
        KA = function(a, b) {
            var c = S.g.K;
            nj(c) || qj(function() {
                b.metadata.is_consent_update = !0;
                b.metadata.consent_update_type = c;
                if (U(65)) {
                    var d = ah[c || ""];
                    d && wz(b, "gcut", d)
                }
                a.Th(b)
            }, c)
        },
        LA = function(a, b, c) {
            void 0 === c && (c = {});
            if ("object" === typeof b)
                for (var d in b)
                    LA(a + "." + d, b[d], c);
            else
                c[a] = b;
            return c
        },
        MA = !1;
    var nn = {
            Zj: "",
            vl: Number("")
        },
        NA = {},
        OA = (NA[S.g.Td] = !0, NA[S.g.Ud] = !0, NA[S.g.Vd] = !0, NA[S.g.Wd] = !0, NA[S.g.Xd] = !0, NA[S.g.Yd] = !0, NA),
        PA = function(a) {
            this.U = a;
            this.eb = new CA;
            this.h = void 0;
            this.F = new Ez;
            this.B = this.D = void 0;
            this.N = !1;
            this.bd = void 0;
            this.Gc = !1
        };
    ba = PA.prototype;
    ba.Qk = function(a, b, c) {
        var d = this,
            e = Zn(this.U);
        if (e)
            if (c.eventMetadata.is_external_event && "_" === a.charAt(0))
                c.Z();
            else {
                a !== S.g.Ea && a !== S.g.Ja && Bz(a) && N(58);
                QA(c.h);
                var f = new oo(e, a, c);
                f.metadata.event_start_timestamp_ms = b;
                var g = [S.g.W];
                (qo(f, S.g.jb, T(f.s, S.g.jb)) || tz(f)) && g.push(S.g.K);
                var h = function() {
                    rj(function() {
                        d.Rk(f)
                    }, g)
                };
                U(11) && U(25) ? on(h) : h()
            }
        else
            c.Z()
    };
    ba.Rk = function(a) {
        this.B = a;
        try {
            IA(a.target.X) && (N(28), a.M = !0);
            if (0 <= nn.Zj.replace(/\s+/g, "").split(",").indexOf(a.eventName))
                a.M = !0;
            else {
                var b = vz(a);
                b && b.blacklisted && (a.M = !0)
            }
            var c =
            I.location.protocol;
            "http:" != c && "https:" != c && (N(29), a.M = !0);
            Vb && "preview" == Vb.loadPurpose && (N(30), a.M = !0);
            var d = eh.grl;
            d || (d = sA(), eh.grl = d);
            d() || (N(35), a.M = !0);
            if (a.M) {
                a.s.Z();
                wb();
                return
            }
            var e = {
                prefix: String(T(a.s, S.g.hb, "")),
                path: String(T(a.s, S.g.af, "/")),
                flags: String(T(a.s, S.g.wb, "")),
                domain: String(T(a.s, S.g.vb, "auto")),
                Db: Number(T(a.s, S.g.Ra, 63072E3))
            };
            a.metadata.cookie_options = e;
            RA(a);
            this.yj(a);
            this.F.rl(a);
            a.metadata.is_merchant_center ? a.metadata.euid_mode_enabled = !1 : T(a.s, S.g.nf) ? a.metadata.euid_mode_enabled =
            !1 : qo(a, "ccd_add_1p_data", !1) ? a.metadata.euid_mode_enabled = !0 : a.metadata.euid_mode_enabled = U(16) ? !1 : Hi(Fi(a.s));
            if (a.metadata.euid_mode_enabled) {
                var f = Fi(a.s);
                if (Hi(f)) {
                    var g = T(a.s, S.g.va);
                    if (qo(a, "ccd_add_1p_data", !1))
                        null === g ? a.metadata.user_data_from_code = null : (f.enable_code && Ec(g) && (a.metadata.user_data_from_code = g), Ec(f.selectors) && !a.metadata.user_data_from_manual && (a.metadata.user_data_from_manual = Ei(f.selectors)));
                    else if (void 0 !== g)
                        a.metadata.user_data = g,
                        a.C._udm = "c";
                    else {
                        var h = Ii(f);
                        a.metadata.user_data =
                        h;
                        if ("selectors" === f.mode || Ec(f.selectors))
                            a.C._udm = "s";
                        else if ("auto_detect" === f.mode || Ec(f.auto_detect))
                            a.C._udm = "a"
                    }
                }
            }
            var l = this.oi,
                n;
            T(a.s, S.g.zb) && (nj(S.g.W) || T(a.s, S.g.ub) || (a.C[S.g.Gh] = !0));
            var p;
            var q;
            q = void 0 === q ? 3 : q;
            var r = z.location.href;
            if (r) {
                var u = li(r).search.replace("?", ""),
                    t = gi(u, "_gl", !1, !0) || "";
                p = t ? void 0 !== lk(t, q) : !1
            } else
                p = !1;
            p && tz(a) && (U(65) ? wz(a, "glv", 1) : a.C[S.g.Df] = !0);
            a.eventName === S.g.Ea ? (T(a.s, S.g.zb) && On(["aw", "dc"]), Zz(a), n = aA(a)) : n = {};
            l.call(this, n);
            a.eventName == S.g.Ea &&
            (T(a.s, S.g.La, !0) ? (a.s.h[S.g.fa] && (a.s.B[S.g.fa] = a.s.h[S.g.fa], a.s.h[S.g.fa] = void 0, a.C[S.g.fa] = void 0), a.eventName = S.g.Lc) : a.M = !0);
            var v = db(Mo(a.s, S.g.fa, 1), ".");
            v && (a.C[S.g.hc] = v);
            var w = db(Mo(a.s, S.g.fa, 2), ".");
            w && (a.C[S.g.fc] = w);
            var y = this.D,
                x = this.F,
                A = !this.Gc,
                B = this.h,
                C = T(a.s, S.g.ub),
                D = C ? 1 : 8;
            a.metadata.is_new_to_site = !1;
            C || (C = Jz(a), D = 3);
            C || (C = B, D = 5);
            if (!C) {
                var H = nj(S.g.W),
                    G = Fz();
                C = !G.from_cookie || H ? G.vid : void 0;
                D = 6
            }
            C ? C = "" + C : (C = Mj(), D = 7, a.metadata.is_first_visit = a.metadata.is_new_to_site = !0);
            Iz(a, C, D);
            var O = Math.floor(a.metadata.event_start_timestamp_ms / 1E3),
                Q = void 0;
            a.metadata.is_new_to_site || (Q = Tz(a) || y);
            var Z = Oa(T(a.s, S.g.Xc, 30));
            Z = Math.min(475, Z);
            Z = Math.max(5, Z);
            var oa = Oa(T(a.s, S.g.pf, 1E4)),
                P = Nz(Q);
            a.metadata.is_first_visit = !1;
            a.metadata.is_session_start = !1;
            a.metadata.join_timer_sec = 0;
            P && P.eg && (a.metadata.join_timer_sec = Math.max(0, P.eg - Math.max(0, O - P.wd)));
            var R = !1;
            P || (R = a.metadata.is_first_visit = !0, P = {
                sessionId: String(O),
                Tb: 1,
                zc: !1,
                wd: O,
                Rb: !1,
                jd: void 0
            });
            O > P.wd + 60 * Z && (R = !0, P.sessionId =
            String(O), P.Tb++, P.zc = !1, P.jd = void 0);
            if (R)
                a.metadata.is_session_start = !0,
                x.qk(a);
            else if (x.mk() > oa || a.eventName == S.g.Lc)
                P.zc = !0;
            a.metadata.euid_mode_enabled ? T(a.s, S.g.Aa) ? P.Rb = !0 : (P.Rb && (P.jd = void 0), P.Rb = !1) : P.Rb = !1;
            var ka = P.jd;
            if (a.metadata.euid_mode_enabled) {
                var ca = T(a.s, S.g.Sc),
                    aa = ca ? 1 : 8;
                ca || (ca = ka, aa = 4);
                ca || (ca = Lj(), aa = 7);
                var Fa = aa,
                    Wa = a.metadata.enhanced_client_id_source;
                if (void 0 === Wa || Fa <= Wa)
                    a.C[S.g.Sc] = ca.toString(),
                    a.metadata.enhanced_client_id_source = Fa
            }
            A ? (po(a, S.g.yb, P.sessionId), po(a,
            S.g.qe, P.Tb), po(a, S.g.pe, P.zc ? 1 : 0)) : (a.C[S.g.yb] = P.sessionId, a.C[S.g.qe] = P.Tb, a.C[S.g.pe] = P.zc ? 1 : 0);
            a.metadata[S.g.ef] = P.Rb ? 1 : 0;
            SA(a);
            var Ha = "",
                Ja = I.location;
            if (Ja) {
                var ab = Ja.pathname || "";
                "/" != ab.charAt(0) && (ab = "/" + ab);
                Ha = Ja.protocol + "//" + Ja.hostname + ab + Ja.search
            }
            po(a, S.g.Ta, Ha);
            var Ld = S.g.Ua,
                xc;
            a:
            {
                var Ge = zj("_opt_expid", void 0, void 0, S.g.W)[0];
                if (Ge) {
                    var Ys = decodeURIComponent(Ge).split("$");
                    if (3 === Ys.length) {
                        xc = Ys[2];
                        break a
                    }
                }
                if (void 0 !== eh.ga4_referrer_override)
                    xc = eh.ga4_referrer_override;
                else {
                    var Zs =
                    Eh("gtm.gtagReferrer." + a.target.X);
                    xc = Zs ? "" + Zs : I.referrer
                }
            }po(a, Ld, xc || void 0);
            po(a, S.g.kc, I.title);
            po(a, S.g.Sa, (Vb.language || "").toLowerCase());
            var $s = Vh();
            po(a, S.g.Nb, $s.width + "x" + $s.height);
            a.metadata.create_dc_join = !1;
            a.metadata.create_google_join = !1;
            if (!(U(66) && tz(a) || a.metadata.is_merchant_center || !1 === T(a.s, S.g.Ib)) && cA() && nj(S.g.K)) {
                var Gh = qo(a, S.g.jb, T(a.s, S.g.jb));
                if (a.metadata.is_session_start || T(a.s, S.g.jf)) {
                    a.metadata.create_dc_join = !!Gh;
                }
                var at;
                at = a.metadata.join_timer_sec;
                Gh && 0 === (at || 0) && (a.metadata.join_timer_sec = 60, a.metadata.create_google_join = !0)
            }
            TA(a);
            Vg.hasOwnProperty(a.eventName) && (a.metadata.is_ecommerce = !0, po(a, S.g.ja), po(a, S.g.sa));
            po(a, S.g.qf);
            for (var bt =
                T(a.s, S.g.kf) || [], ml = 0; ml < bt.length; ml++) {
                var ct = bt[ml];
                if (ct.rule_result) {
                    po(a, S.g.qf, ct.traffic_type);
                    zz(3);
                    break
                }
            }
            if (!a.metadata.is_merchant_center && T(a.s, S.g.za)) {
                var dt = Vz(a) || {},
                    mD = (tk(dt[S.g.ic], !!dt[S.g.V]) ? kk(!0)._fplc : void 0) || (0 < zj("FPLC", void 0, void 0, S.g.W).length ? void 0 : "0");
                a.C._fplc = mD
            }
            if (void 0 !== T(a.s, S.g.ke))
                po(a, S.g.ke);
            else {
                var et = T(a.s, S.g.oe),
                    nl,
                    Hh;
                a:
                {
                    if (Yz) {
                        var ol = Vz(a) || {};
                        if (ol && ol[S.g.V])
                            for (var ft = ji(li(a.C[S.g.Ua]), "host", !0), Ih = ol[S.g.V], Of = 0; Of < Ih.length; Of++)
                                if (Ih[Of] instanceof
                                RegExp) {
                                    if (Ih[Of].test(ft)) {
                                        Hh = !0;
                                        break a
                                    }
                                } else if (0 <= ft.indexOf(Ih[Of])) {
                                    Hh = !0;
                                    break a
                                }
                    }
                    Hh = !1
                }if (!(nl = Hh)) {
                    var Jh;
                    if (Jh = et)
                        a:
                        {
                            for (var gt = et.include_conditions || [], nD = ji(li(a.C[S.g.Ua]), "host", !0), pl = 0; pl < gt.length; pl++)
                                if (gt[pl].test(nD)) {
                                    Jh = !0;
                                    break a
                                }
                            Jh = !1
                        }nl = Jh
                }
                nl && (a.C[S.g.ke] = "1", zz(4))
            }
            tz(a) && (mr() || (U(65) ? wz(a, "uc", Mi.De) : a.C._uc = Mi.De), bj() && (U(65) ? wz(a, "rnd", Kk()) : a.C._rnd = Kk()));
            if (U(66) && U(65) && tz(a)) {
                qo(a, S.g.jb, !1) && wz(a, "gse", 1);
                !1 === T(a.s, S.g.Ib) && wz(a, "ngs", 1);
                sz(a) && wz(a, "ga_rd",
                1);
                cA() || wz(a, "ngst", 1);
                var ht = qo(a, S.g.Uc);
                ht && wz(a, "etld", ht);
                var it = kA ? jA : "";
                it && wz(a, "gcsub", it)
            }
            U(65) && tz(a) && bj() && (cj() && wz(a, "gcd", "G1" + jj($i)), T(a.s, S.g.na) && wz(a, "adr", 1));
            if (U(65) && tz(a)) {
                var jt = wp();
                jt && wz(a, "us_privacy", jt);
                var kt = Wl();
                kt && wz(a, "gdpr", kt);
                var lt = Vl();
                lt && wz(a, "gdpr_consent", lt)
            }
            a:
            if (U(11))
                if (U(25) && (a.C[S.g.qh] = "1"), !jn(z))
                    N(87);
                else if (void 0 !== ln) {
                    N(85);
                    var mt = gn();
                    if (mt) {
                        if (U(59)) {
                            if (T(a.s, S.g.Wc) && !tz(a))
                                break a
                        } else if (T(a.s, S.g.Wc))
                            break a;
                        pn(mt, a)
                    } else
                        N(86)
                }
            U(61) &&
            T(a.s, S.g.me) && zz(12);
            if (U(78)) {
                var ql = ep(dp());
                ql || UA || (UA = !0, il('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), ql = ep(dp()));
                ql && (a.C[S.g.Oc] = "1")
            }
            if (a.eventName == S.g.Ja) {
                var ot = T(a.s, S.g.ib),
                    oD = T(a.s, S.g.xb),
                    pt = void 0;
                pt = a.C[ot];
                oD(pt || T(a.s, ot));
                a.M = !0
            }
            if (!U(26) && !a.s.eventMetadata.syn_or_mod) {
                var rl = T(a.s, S.g.bf);
                if (rl) {
                    var Md = K(a.s.h);
                    K(a.C, Md);
                    for (var qt = rl.edit_rules || [], rt = !1, sl = 0; sl < qt.length; sl++) {
                        var Kh;
                        a:
                        {
                            var Lh = a,
                                Nd = qt[sl];
                            if (wy(Lh.eventName, Md, Nd.event_name_predicate, Nd.conditions ||
                            [])) {
                                if (Nd.new_event_name) {
                                    var st = k(Nd.new_event_name) ? String(Nd.new_event_name) : sy(Lh.eventName, Md, Nd.new_event_name);
                                    if (Bz(st)) {
                                        Kh = !1;
                                        break a
                                    }
                                    Lh.eventName = String(st)
                                }
                                Cz(Lh.eventName, Md, Nd);
                                zz(2);
                                Kh = !0
                            } else
                                Kh = !1
                        }Kh && (rt = !0)
                    }
                    for (var tt = rl.synthesis_rules || [], tl = 0; tl < tt.length; tl++) {
                        var ul = a,
                            Pf = tt[tl];
                        if (wy(ul.eventName, Md, Pf.event_name_predicate, Pf.conditions || [])) {
                            var vl = Pf.new_event_name;
                            if (!Bz(vl)) {
                                var ut = Pf.merge_source_event_params ? K(Md) : {};
                                Cz(vl, ut, Pf);
                                var vt = {},
                                    wl = {
                                        eventMetadata: (vt.syn_or_mod =
                                        !0, vt)
                                    };
                                wl.eventMetadata.event_usage = [11];
                                ty && wl.eventMetadata.event_usage.push(10);
                                var pD = ns(ul.target.X, vl, ut);
                                qs(pD, ul.s.eventId, wl);
                                zz(1)
                            }
                        }
                    }
                    if (rt) {
                        for (var xl = {}, wt = {
                                eventMetadata: (xl.syn_or_mod = !0, xl.is_external_event = !!a.s.eventMetadata.is_external_event, xl)
                            }, xt, yl = [], yt = ub.GA4_EVENT || [], Mh = 0; Mh < yt.length; Mh++)
                            yt[Mh] && yl.push(Mh);
                        (xt = 0 < yl.length ? yl : void 0) && (wt.eventMetadata.event_usage = xt);
                        var qD = ns(a.target.X, a.eventName, Md);
                        qs(qD, a.s.eventId, wt);
                        a.M = !0
                    }
                }
            }
            to(a);
            VA(a);
            var zl = a.metadata.event_usage;
            if (Ga(zl))
                for (var Al = 0; Al < zl.length; Al++)
                    zz(zl[Al]);
            var zt = xb("GA4_EVENT");
            zt && (a.C._eu = zt);
            po(a, S.g.Aa);
            po(a, S.g.Ma);
            if (a.metadata.speculative || a.M) {
                a.s.Z();
                wb();
                return
            }
            var sD = this.oi,
                At,
                tD = this.h,
                Bl;
            a:
            {
                var Cl = Uz(a);
                if (Cl) {
                    if (Sz(Cl, a)) {
                        Bl = Cl;
                        break a
                    }
                    N(25);
                    a.M = !0
                }
                Bl = void 0
            }var uD = Bl;
            At = {
                clientId: Mz(a, tD),
                xi: uD
            };
            sD.call(this, At);
            this.Gc = !0;
            this.ol(a);
            if (tz(a)) {
                var vD = a.metadata.is_conversion;
                ("page_view" === a.eventName || vD) && KA(this, a)
            }
            this.F.sg();
            this.bd = WA(a, this.bd);
            po(a, S.g.Zg);
            T(a.s, S.g.Wc) && (a.C[S.g.Wc] =
            !0, U(75) && tz(a) || JA(a, S.g.Nb));
            if (a.M) {
                a.s.Z();
                wb();
                return
            }
            this.Th(a);
            a.s.aa()
        } catch (rE) {
            a.s.Z()
        }
        wb()
    };
    ba.Th = function(a) {
        this.eb.add(a)
    };
    ba.oi = function(a) {
        var b = a.clientId,
            c = a.xi;
        b && c && (this.h = b, this.D = c)
    };
    ba.flush = function() {
        this.eb.flush()
    };
    ba.ol = function(a) {
        var b = this;
        if (!this.N) {
            var c = nj(S.g.W);
            pj([S.g.W], function() {
                var d = nj(S.g.W);
                if (c ^ d && b.B && b.D && b.h) {
                    var e = b.h;
                    if (d) {
                        var f = Jz(b.B);
                        if (f) {
                            b.h = f;
                            var g = Tz(b.B);
                            g && (b.D = Pz(g, b.D, b.B))
                        } else
                            Lz(b.h, b.B),
                            Hz(b.h, !0);
                        Sz(b.D, b.B);
                        var h = {};
                        h[S.g.jf] = e;
                        var l = ns(b.U, S.g.Xe, h);
                        qs(l, a.s.eventId, {});
                    } else {
                        b.D = void 0;
                        b.h = void 0;
                        z.gaGlobal = {};
                    }
                    c = d
                }
            });
            this.N = !0
        }
    };
    ba.yj = function(a) {
        a.eventName !== S.g.Ja && this.F.xj(a)
    };
    var VA = function(a) {
            if (tz(a)) {
                var b = function(d) {
                        var e = LA(S.g.va, d);
                        m(e, function(f, g) {
                            a.C[f] = g
                        })
                    },
                    c = T(a.s, S.g.va);
                void 0 !== c ? b(c) : b(a.metadata.user_data);
                a.metadata.user_data =
                void 0
            }
        },
        RA = function(a) {
            function b(c, d) {
                Rg[c] || void 0 === d || (a.C[c] = d)
            }
            m(a.s.B, b);
            m(a.s.h, b)
        },
        SA = function(a) {
            var b = No(a.s),
                c = function(d, e) {
                    OA[d] && (a.C[d] = e)
                };
            Ec(b[S.g.Mc]) ? m(b[S.g.Mc], function(d, e) {
                c((S.g.Mc + "_" + d).toLowerCase(), e)
            }) : m(b, c)
        },
        TA = function(a) {
            var b = function(c) {
                return !!c && c.conversion
            };
            a.metadata.is_conversion = b(vz(a));
            a.metadata.is_first_visit && (a.metadata.is_first_visit_conversion = b(vz(a, "first_visit")));
            a.metadata.is_session_start && (a.metadata.is_session_start_conversion = b(vz(a, "session_start")))
        },
        WA = function(a, b) {
            var c = void 0;
            return c
        },
        UA = !1;
    function QA(a) {
        m(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[S.g.Ma] || {};
        m(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    }
    ;
    var XA = function(a) {
            if ("prerender" == I.visibilityState)
                return !1;
            a();
            return !0
        },
        YA = function(a) {
            if (!XA(a)) {
                var b = !1,
                    c = function() {
                        !b && XA(a) && (b = !0, gc(Ub.document, "visibilitychange", c), N(55))
                    };
                fc(Ub.document, "visibilitychange", c);
                N(54)
            }
        };
    var $A = function(a, b) {
        YA(function() {
            var c = Zn(a);
            if (c) {
                var d = ZA(c, b);
                Os.register(a, d)
            }
        });
    };
    function ZA(a, b) {
        var c = function() {};
        var d = new PA(a.id),
            e = "MC" === a.prefix;
        c = function(f, g, h, l) {
            e && (l.eventMetadata.is_merchant_center = !0);
            d.Qk(g, h, l)
        };
        aB(a, d, b);
        return c
    }
    function aB(a, b, c) {
        var d = b.F,
            e = {},
            f = {
                eventId: c,
                eventMetadata: (e.batch_on_navigation = !0, e)
            };
        d.Vk(function() {
            xz = !0;
            Os.flush();
            1E3 <= d.Ge() && Vb.sendBeacon && Ps(S.g.Xe, {}, a.id, f);
            b.flush();
            d.si(function() {
                xz = !1;
                d.si()
            })
        });
    }
    ;
    var yC = ZA;
    function AC(a, b, c, d) {}
    AC.P = "internal.sendGtagEvent";
    function BC(a, b, c) {}
    BC.R = "sendPixel";
    function CC(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    CC.R = "setCookie";
    function DC(a) {
        L(F(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.Pb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e === S.g.Te || U(17) && e === S.g.Ue || M(this, "access_consent", e, "write")
        }
        var f = this.h.h,
            g = f.eventId,
            h = Qy(f),
            l = ks("consent", "default", Gc(a));
        qs(l, g, h)
    }
    DC.R = "setDefaultConsentState";
    function EC(a, b, c) {
        return !1
    }
    EC.R = "setInWindow";
    function FC(a, b, c) {
        L(F(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        var d = Uh(a) || {};
        d[b] = Gc(c, this.h);
        var e = a;
        Sh || Th();
        Rh[e] = d;
    }
    FC.P = "internal.setProductSettingsParameter";
    function GC(a, b, c) {}
    GC.P = "internal.setRemoteConfigParameter";
    function HC(a, b, c, d) {
        var e = this;
    }
    HC.R = "sha256";
    function IC(a, b, c) {}
    IC.P = "internal.sortRemoteConfigParameters";
    var JC = {},
        KC = {};
    JC.R = "templateStorage";
    JC.getItem = function(a) {
        var b = null;
        return b
    };
    JC.setItem = function(a, b) {};
    JC.removeItem = function(a) {};
    JC.clear = function() {};
    var LC = function(a) {
        var b;
        return b
    };
    function MC(a) {
        L(F(this), ["consentSettings:!DustMap"], arguments);
        var b = Gc(a),
            c;
        for (c in b)
            b.hasOwnProperty(c) && M(this, "access_consent", c, "write");
        var d = this.h.h;
        qs(ks("consent", "update", b), d.eventId, Qy(d))
    }
    MC.R = "updateConsentState";
    var NC = function() {
        var a = new lg,
            b = function(d) {
                var e = d.P;
                if (a.B.hasOwnProperty(e))
                    throw "Attempting to add a private function which already exists: " + e + ".";
                if (a.h.hasOwnProperty(e))
                    throw "Attempting to add a private function with an existing API name: " + e + ".";
                a.B[e] = Da(d) ? Kf(e, d) : Lf(e, d)
            },
            c = function(d) {
                return a.add(d.R, d)
            };
        c(aw);
        c(gw);
        c(Tw);
        c(Ww);
        c(Xw);
        c(ax);
        c(bx);
        c(dx);
        c(az());
        c(ex);
        c(By);
        c(Iy);
        c(Jy);
        c(Ky);
        c(Ny);
        c(Sy);
        c(Ty);
        c(Wy);
        c($y);
        c(gz);
        c(hz);
        c(jz);
        c(kz);
        c(lz);
        c(BC);
        c(CC);
        c(DC);
        c(EC);
        c(HC);
        c(JC);
        c(MC);
        a.add("Math", Sf());
        a.add("Object", jg);
        a.add("TestHelper", ng());
        a.add("assertApi", Mf);
        a.add("assertThat", Nf);
        a.add("decodeUri", Tf);
        a.add("decodeUriComponent", Uf);
        a.add("encodeUri", Vf);
        a.add("encodeUriComponent", Wf);
        a.add("fail", Xf);
        a.add("generateRandom", Yf);
        a.add("getContainerVersion", Zf);
        a.add("getTimestamp", $f);
        a.add("getTimestampMillis", $f);
        a.add("getType", ag);
        a.add("makeInteger", cg);
        a.add("makeNumber", dg);
        a.add("makeString", eg);
        a.add("makeTableMap", fg);
        a.add("mock", ig);
        a.add("fromBase64",
        Ay, !("atob" in z));
        a.add("localStorage", cz, !bz());
        a.add("toBase64", LC, !("btoa" in z));
        b(dw);
        b(ww);
        b(Dw);
        b(Iw);
        b(Rw);
        b(Uw);
        b(Zw);
        b(cx);
        b(px);
        b(ux);
        b(zx);
        b(Ix);
        b(Mx);
        b(Xx);
        b(jy);
        b(ky);
        b(qy);
        b(Cy);
        b(Dy);
        b(Gy);
        b(Hy);
        b(Ly);
        b(My);
        b(Zy);
        b(ez);
        b(iz);
        b(mz);
        b(oz);
        b(pz);
        b(AC);
        b(FC);
        b(GC);
        b(IC);
        return function(d) {
            var e;
            if (a.h.hasOwnProperty(d))
                e = a.get(d, this);
            else {
                var f;
                if (f = a.B.hasOwnProperty(d)) {
                    var g = !1,
                        h = this.h.h;
                    if (h) {
                        var l = h.pd();
                        if (l) {
                            0 !== l.indexOf("__cvt_") && (g = !0);
                        }
                    }
                    f =
                    g
                }
                if (f) {
                    var n = a.B.hasOwnProperty(d) ? a.B[d] : void 0;
                    e = n
                } else
                    throw Error(d + " is not a valid API name.");
            }
            return e
        }
    };
    var OC = function() {
            return !1
        },
        PC = function() {
            var a = {};
            return function(b, c, d) {}
        };
    var QC;
    function RC() {
        var a = QC;
        return function(b, c, d) {
            var e = d && d.event;
            SC(c);
            var f = new jb;
            m(c, function(q, r) {
                var u = Fc(r);
                void 0 === u && void 0 !== r && N(44);
                f.set(q, u)
            });
            a.h.h.F = Pe();
            var g = {
                Qj: bf(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                ze: void 0 !== e ? function(q) {
                    return e.Cb.ze(q)
                } : void 0,
                pd: function() {
                    return b
                },
                log: function() {},
                ck: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                }
            };
            if (OC()) {
                var h = PC(),
                    l = void 0,
                    n = void 0;
                g.Pa = {
                    wg: [],
                    fd: {},
                    Ya: function(q, r, u) {
                        1 === r && (l = q);
                        7 === r && (n =
                        u);
                        h(q, r, u)
                    },
                    hg: gg()
                };
                g.log = function(q, r) {
                    if (l) {
                        var u = Array.prototype.slice.call(arguments, 1);
                        h(l, 4, {
                            level: q,
                            source: n,
                            message: u
                        })
                    }
                }
            }
            var p = Xd(a, g, [b, f]);
            a.h.h.F = void 0;
            p instanceof ra && "return" === p.h && (p = p.B);
            return Gc(p)
        }
    }
    function SC(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Da(b) && (a.gtmOnSuccess = function() {
            J(b)
        });
        Da(c) && (a.gtmOnFailure = function() {
            J(c)
        })
    }
    function TC() {
        QC.h.h.N = function(a, b, c) {
            eh.SANDBOXED_JS_SEMAPHORE = eh.SANDBOXED_JS_SEMAPHORE || 0;
            eh.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                eh.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }
    function UC(a) {
        void 0 !== a && m(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                wh[e] = wh[e] || [];
                wh[e].push(b)
            }
        })
    }
    ;
    var VC = encodeURI,
        X = encodeURIComponent,
        WC = function(a, b, c) {
            ec(a, b, c)
        },
        XC = function(a, b) {
            if (!a)
                return !1;
            var c = ji(li(a), "host");
            if (!c)
                return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f)
                        return !0
                }
            }
            return !1
        },
        YC = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
                a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Y = {
        m: {}
    };
    Y.m.c = ["google"],
    function() {
        (function(a) {
            Y.__c = a;
            Y.__c.o = "c";
            Y.__c.isVendorTemplate = !0;
            Y.__c.priorityOverride = 0;
            Y.__c.isInfrastructure = !1
        })(function(a) {
            pv(a.vtp_value, "c", a.vtp_gtmEventId);
            return a.vtp_value
        })
    }();
    Y.m.e = ["google"],
    function() {
        (function(a) {
            Y.__e = a;
            Y.__e.o = "e";
            Y.__e.isVendorTemplate = !0;
            Y.__e.priorityOverride = 0;
            Y.__e.isInfrastructure = !1
        })(function(a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();
    Y.m.v = ["google"],
    function() {
        (function(a) {
            Y.__v = a;
            Y.__v.o = "v";
            Y.__v.isVendorTemplate = !0;
            Y.__v.priorityOverride = 0;
            Y.__v.isInfrastructure = !1
        })(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = hv(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                d = void 0 !== c ? c : a.vtp_defaultValue;
            pv(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();







    Y.m.read_container_data = ["google"],
    function() {
        (function(a) {
            Y.__read_container_data = a;
            Y.__read_container_data.o = "read_container_data";
            Y.__read_container_data.isVendorTemplate = !0;
            Y.__read_container_data.priorityOverride = 0;
            Y.__read_container_data.isInfrastructure = !1
        })(function() {
            return {
                assert: function() {},
                ba: function() {
                    return {}
                }
            }
        })
    }();


    Y.m.gct = ["google"],
    function() {
        function a(d) {
            for (var e = [], f = 0; f < d.length; f++)
                try {
                    e.push(new RegExp(d[f]))
                } catch (g) {}
            return e
        }
        function b(d) {
            return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
        }
        function c(d) {
            for (var e = [], f = 0; f < d.length; f++) {
                var g = d[f].matchValue,
                    h;
                switch (d[f].matchType) {
                case "BEGINS_WITH":
                    h = "^" + b(g);
                    break;
                case "ENDS_WITH":
                    h = b(g) + "$";
                    break;
                case "EQUALS":
                    h = "^" + b(g) + "$";
                    break;
                case "REGEX":
                    h = g;
                    break;
                default:
                    h = b(g)
                }
                e.push(h)
            }
            return e
        }
        (function(d) {
            Y.__gct = d;
            Y.__gct.o = "gct";
            Y.__gct.isVendorTemplate =
            !0;
            Y.__gct.priorityOverride = 0;
            Y.__gct.isInfrastructure = !1
        })(function(d) {
            var e = {},
                f = d.vtp_sessionDuration;
            0 < f && (e[S.g.Xc] = f);
            e[S.g.de] = d.vtp_eventSettings;
            e[S.g.bf] = d.vtp_dynamicEventSettings;
            e[S.g.jb] = 1 === d.vtp_googleSignals;
            e[S.g.Uc] = d.vtp_foreignTld;
            e[S.g.hf] = 1 === d.vtp_restrictDomain;
            e[S.g.kf] = d.vtp_internalTrafficResults;
            var g = S.g.ya,
                h = d.vtp_linker;
            h && h[S.g.V] && (h[S.g.V] = a(h[S.g.V]));
            e[g] = h;
            var l = S.g.oe,
                n = d.vtp_referralExclusionDefinition;
            n && n.include_conditions && (n.include_conditions = a(n.include_conditions));
            e[l] = n;
            var p = d.vtp_trackingId,
                q = Us(Os, p).h,
                r = q.referral_exclusion_conditions;
            r && (r.length && "object" === typeof r[0] && (r = c(r)), e[S.g.oe] = {
                include_conditions: a(r)
            });
            var u = q.cross_domain_conditions;
            if (u) {
                u.length && "object" === typeof u[0] && (u = c(u));
                var t = {};
                e[S.g.ya] = (t[S.g.V] = a(u), t[S.g.Lb] = !0, t[S.g.ic] = !0, t[S.g.jc] = "query", t)
            }
            Xs(p, e);
            $A(p, d.vtp_gtmEventId);
            J(d.vtp_gtmOnSuccess)
        })
    }();

    Y.m.get = ["google"],
    function() {
        (function(a) {
            Y.__get = a;
            Y.__get.o = "get";
            Y.__get.isVendorTemplate = !0;
            Y.__get.priorityOverride = 0;
            Y.__get.isInfrastructure = !1
        })(function(a) {
            var b = a.vtp_settings,
                c = b.eventParameters || {},
                d = String(a.vtp_eventName),
                e = {};
            e.eventId = a.vtp_gtmEventId;
            e.priorityId = a.vtp_gtmPriorityId;
            a.vtp_deferrable && (e.deferrable = !0);
            var f = ns(String(b.streamId), d, c);
            qs(f, e.eventId, e);
            a.vtp_gtmOnSuccess()
        })
    }();





    var pE = {};
    pE.dataLayer = Fh;
    pE.callback = function(a) {
        vh.hasOwnProperty(a) && Da(vh[a]) && vh[a]();
        delete vh[a]
    };
    pE.bootstrap = 0;
    pE._spx = !1;
    function qE() {
        eh[Xe.H] = eh[Xe.H] || pE;
        Xe.tb && (eh["ctid_" + Xe.tb] = pE);
        Rk();
        Tk() || m(Uk(), function(a, b) {
            pr(a, b.transportUrl, b.context);
            N(92)
        });
        Xa(wh, Y.m);
        Ee = Te
    }
    (function(a) {
        function b() {
            l = I.documentElement.getAttribute("data-tag-assistant-present");
            zu(l) && (h = g.tj)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (I.referrer) {
                var d = li(I.referrer);
                c = "cct.google" === ii(d, "host")
            }
            if (!c) {
                var e = zj("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, bc("https://cct.google/taggy/agent.js"))
        }
        if (qh)
            a();
        else {
            var f = function(t) {
                    var v = "GTM",
                        w = "GTM";
                    kh ? (v = "OGT", w = "GTAG") : qh && (w = v = "OPT");
                    var y = z["google.tagmanager.debugui2.queue"];
                    y || (y = [],
                    z["google.tagmanager.debugui2.queue"] = y, bc("https://" + dh.Md + "/debug/bootstrap?id=" + Xe.H + "&src=" + w + "&cond=" + t + "&gtm=" + Xk()));
                    var x = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Wb,
                            containerProduct: v,
                            debug: !1,
                            id: Xe.H,
                            isGte: jh
                        }
                    };
                    x.data.resume = function() {
                        a()
                    };
                    dh.Mi && (x.data.initialPublish = !0);
                    y.push(x)
                },
                g = {
                    Al: 1,
                    uj: 2,
                    Gj: 3,
                    Oi: 4,
                    tj: 5
                },
                h = void 0,
                l = void 0,
                n = ji(z.location, "query", !1, void 0, "gtm_debug");
            zu(n) && (h = g.uj);
            if (!h && I.referrer) {
                var p = li(I.referrer);
                "tagassistant.google.com" === ii(p, "host") && (h = g.Gj)
            }
            if (!h) {
                var q =
                zj("__TAG_ASSISTANT");
                q.length && q[0].length && (h = g.Oi)
            }
            h || b();
            if (!h && Au(l)) {
                var r = function() {
                        if (u)
                            return !0;
                        u = !0;
                        b();
                        h && Wb ? f(h) : a()
                    },
                    u = !1;
                fc(I, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else
                h && Wb ? f(h) : a()
        }
    })(function() {
        var a = !1;
        a && Mq("INIT");
        if (U(70)) {
            var b =
            Gq(fq.I.Fc, Xe.H);
            Hq(b)
        }
        Qi().B();
        Ul();
        if (Xe.tb ? eh["ctid_" + Xe.tb] : eh[Xe.H]) {
            var c = eh.zones;
            c && c.unregisterChild(Nk());
        } else {
            (U(11) || U(13) || U(55) || U(48)) && mn();
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++)
                ue.push(e[f]);
            for (var g = d.tags || [], h = 0; h < g.length; h++)
                xe.push(g[h]);
            for (var l = d.predicates || [], n = 0; n < l.length; n++)
                we.push(l[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var r = p[q], u = {}, t = 0; t < r.length; t++)
                    u[r[t][0]] = Array.prototype.slice.call(r[t], 1);
                ve.push(u)
            }
            ze = Y;
            Ae = Zv;
            af = new $e;
            var v = data.sandboxed_scripts,
                w = data.security_groups,
                y = data.infra,
                x = data.runtime || [],
                A = data.runtime_lines;
            QC = new Vd;
            TC();
            te = RC();
            var B = QC,
                C = NC();
            mb(B.h, "require", C);
            for (var D = 0; D < x.length; D++) {
                var H = x[D];
                if (!Ga(H) || 3 > H.length) {
                    if (0 === H.length)
                        continue;
                    break
                }
                A && A[D] && A[D].length && Me(H, A[D]);
                QC.execute(H)
            }
            if (void 0 !== v)
                for (var G = ["sandboxedScripts"],
                    O = 0; O < v.length; O++) {
                    var Q = v[O].replace(/^_*/, "");
                    wh[Q] = G
                }
            UC(w);
            if (void 0 !== y)
                for (var Z = 0; Z < y.length; Z++)
                    xh[y[Z]] = !0;
            qE();
            yu();
            Er = !1;
            Fr = 0;
            if ("interactive" == I.readyState && !I.createEventObject || "complete" == I.readyState)
                Hr();
            else {
                fc(I, "DOMContentLoaded", Hr);
                fc(I, "readystatechange", Hr);
                if (I.createEventObject && I.documentElement.doScroll) {
                    var oa = !0;
                    try {
                        oa = !z.frameElement
                    } catch (Wa) {}
                    oa && Ir()
                }
                fc(z, "load", Hr)
            }
            Nt = !1;
            "complete" === I.readyState ? Pt() : fc(z, "load", Pt);
            fm && z.setInterval(km, 864E5);
            U(46) && (N(111), vb("HEALTH", 1));
            U(47) && (N(112), vb("HEALTH", 2));
            uh =
            Ta();
            pE.bootstrap = uh;
            pE._spx = !0,
            wu();
            if (a) {
                var ca = Nq("INIT");
            }
            if (U(70)) {
                var aa = Gq(fq.I.Cg, Xe.H);
                if (Hq(aa)) {
                    var Fa = Gq(fq.I.Fc, Xe.H);
                    Iq(aa, Fa)
                }
            }
        }
    });

})()
