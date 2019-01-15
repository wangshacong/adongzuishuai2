(function () {
    var l, aa = "function" == typeof Object.create ? Object.create : function (a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ba;
    if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
    else {
        var ca;
        a: {
            var da = {
                    ua: !0
                },
                ea = {};
            try {
                ea.__proto__ = da;
                ca = ea.ua;
                break a
            } catch (a) {}
            ca = !1
        }
        ba = ca ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var fa = ba;

    function ha(a, b) {
        a.prototype = aa(b.prototype);
        a.prototype.constructor = a;
        if (fa) fa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Ka = b.prototype
    }
    var ja = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ka = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function la(a, b) {
        if (b) {
            var c = ka;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ja(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    la("String.prototype.endsWith", function (a) {
        return a ? a : function (a, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (a instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            void 0 === c && (c = this.length);
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var b = a.length; 0 < b && 0 < c;)
                if (this[--c] != a[--b]) return !1;
            return 0 >= b
        }
    });
    var na = "function" == typeof Object.assign ? Object.assign : function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    la("Object.assign", function (a) {
        return a || na
    });
    la("Object.is", function (a) {
        return a ? a : function (a, c) {
            return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c
        }
    });
    la("Number.isNaN", function (a) {
        return a ? a : function (a) {
            return "number" === typeof a && isNaN(a)
        }
    });
    var r = this;

    function t(a) {
        return "string" == typeof a
    }

    function oa(a) {
        return "number" == typeof a
    }

    function pa() {
        if (null === qa) a: {
            var a = r.document;
            if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && ra.test(a)) {
                qa = a;
                break a
            }
            qa = ""
        }
        return qa
    }
    var ra = /^[\w+/_-]+[=]{0,2}$/,
        qa = null;

    function sa() {}

    function ta(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function ua(a) {
        return null === a
    }

    function va(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function wa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function xa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function ya(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ya = wa : ya = xa;
        return ya.apply(null, arguments)
    }

    function Aa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }

    function u(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ka = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Ma = function (a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
    var Ba = (new Date).getTime();

    function Ca(a, b) {
        if (t(a)) return t(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Da(a, b) {
        for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ea(a, b) {
        for (var c = a.length, d = Array(c), e = t(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Fa(a, b) {
        a: {
            for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                } b = -1
        }
        return 0 > b ? null : t(a) ? a.charAt(b) : a[b]
    }

    function Ga(a) {
        return Array.prototype.concat.apply([], arguments)
    };

    function Ha(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var Ia = /&/g,
        Ja = /</g,
        Ka = />/g,
        La = /"/g,
        Ma = /'/g,
        Na = /\x00/g,
        Oa = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "<"
        },
        Pa = {
            "'": "\\'"
        };

    function v(a, b) {
        return -1 != a.indexOf(b)
    }

    function Qa(a) {
        return String(a).replace(/\-([a-z])/g, function (a, c) {
            return c.toUpperCase()
        })
    };
    var x;
    a: {
        var Ra = r.navigator;
        if (Ra) {
            var Sa = Ra.userAgent;
            if (Sa) {
                x = Sa;
                break a
            }
        }
        x = ""
    };

    function Ta(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Ua(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };

    function Va(a) {
        Va[" "](a);
        return a
    }
    Va[" "] = sa;

    function y() {}
    var Wa = "function" == typeof Uint8Array;

    function z(a, b, c) {
        a.a = null;
        b || (b = []);
        a.H = void 0;
        a.h = -1;
        a.b = b;
        a: {
            if (b = a.b.length) {
                --b;
                var d = a.b[b];
                if (null !== d && "object" == typeof d && "array" != ta(d) && !(Wa && d instanceof Uint8Array)) {
                    a.i = b - a.h;
                    a.g = d;
                    break a
                }
            }
            a.i = Number.MAX_VALUE
        }
        a.G = {};
        if (c)
            for (b = 0; b < c.length; b++) d = c[b], d < a.i ? (d += a.h, a.b[d] = a.b[d] || Xa) : (Ya(a), a.g[d] = a.g[d] || Xa)
    }
    var Xa = [];

    function Ya(a) {
        var b = a.i + a.h;
        a.b[b] || (a.g = a.b[b] = {})
    }

    function A(a, b) {
        if (b < a.i) {
            b += a.h;
            var c = a.b[b];
            return c === Xa ? a.b[b] = [] : c
        }
        if (a.g) return c = a.g[b], c === Xa ? a.g[b] = [] : c
    }

    function Za(a, b) {
        if (b < a.i) {
            b += a.h;
            var c = a.b[b];
            return c === Xa ? a.b[b] = [] : c
        }
        c = a.g[b];
        return c === Xa ? a.g[b] = [] : c
    }

    function $a(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[c]) {
            var d = A(a, c);
            d && (a.a[c] = new b(d))
        }
        return a.a[c]
    }

    function ab(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[c]) {
            for (var d = Za(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.a[c] = e
        }
        b = a.a[c];
        b == Xa && (b = a.a[c] = []);
        return b
    }

    function bb(a) {
        if (a.a)
            for (var b in a.a) {
                var c = a.a[b];
                if ("array" == ta(c))
                    for (var d = 0; d < c.length; d++) c[d] && bb(c[d]);
                else c && bb(c)
            }
        return a.b
    };

    function cb(a) {
        z(this, a, db)
    }
    u(cb, y);

    function eb(a) {
        z(this, a, null)
    }
    u(eb, y);
    var db = [2, 3];
    var fb = document,
        B = window;
    var gb = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function hb(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function ib() {
        return function () {
            return !ua.apply(this, arguments)
        }
    }

    function jb(a) {
        var b = !1,
            c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    }

    function kb() {
        var a = sa;
        return function () {
            if (a) {
                var b = a;
                a = null;
                b()
            }
        }
    };

    function lb() {
        this.b = "";
        this.h = mb
    }
    lb.prototype.g = !0;
    lb.prototype.a = function () {
        return this.b
    };

    function nb(a) {
        if (a instanceof lb && a.constructor === lb && a.h === mb) return a.b;
        ta(a);
        return "type_error:TrustedResourceUrl"
    }
    var mb = {};

    function ob() {
        this.O = "";
        this.ta = pb
    }
    ob.prototype.g = !0;
    ob.prototype.a = function () {
        return this.O
    };
    var qb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        pb = {};

    function rb(a) {
        var b = new ob;
        b.O = a;
        return b
    }
    rb("about:blank");

    function sb(a, b) {
        a.src = nb(b);
        (b = pa()) && a.setAttribute("nonce", b)
    };

    function tb(a) {
        this.a = a || r.document || document
    }

    function ub(a, b) {
        return a.a.createElement(String(b))
    }
    tb.prototype.contains = function (a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function vb(a) {
        wb();
        var b = new lb;
        b.b = a;
        return b
    }
    var wb = sa;

    function xb() {
        return !(v(x, "iPad") || v(x, "Android") && !v(x, "Mobile") || v(x, "Silk")) && (v(x, "iPod") || v(x, "iPhone") || v(x, "Android") || v(x, "IEMobile"))
    };

    function C(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Va(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function yb(a) {
        for (var b = r, c = 0; b && 40 > c++ && (!C(b) || !a(b));) b = zb(b)
    }

    function Ab() {
        var a = r;
        yb(function (b) {
            a = b;
            return !1
        });
        return a
    }

    function zb(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    }

    function Bb(a, b) {
        var c = [r.top],
            d = [],
            e = 0;
        b = b || 1024;
        for (var f; f = c[e++];) {
            a && !C(f) || d.push(f);
            try {
                if (f.frames)
                    for (var g = f.frames.length, h = 0; h < g && c.length < b; ++h) c.push(f.frames[h])
            } catch (k) {}
        }
        return d
    }

    function Cb(a, b) {
        var c = a.createElement("script");
        sb(c, vb(b));
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function D(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Db(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }

    function Eb(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Fb(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Gb = jb(function () {
            return v(x, "Google Web Preview") || 1E-4 > Math.random()
        }),
        Hb = /^([0-9.]+)px$/,
        Ib = /^(-?[0-9.]{1,30})$/;

    function Jb(a) {
        return Ib.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }

    function Kb(a, b) {
        return b ? !/^false$/.test(a) : /^true$/.test(a)
    }

    function E(a) {
        return (a = Hb.exec(a)) ? +a[1] : null
    }

    function Lb(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }

    function Mb(a) {
        var b = {
            display: "none"
        };
        a.style.setProperty ? Eb(b, function (b, d) {
            a.style.setProperty(d, b, "important")
        }) : a.style.cssText = Nb(Ob(Pb(a.style.cssText), Qb(b, function (a) {
            return a + " !important"
        })))
    }
    var Ob = Object.assign || function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };

    function Qb(a, b) {
        var c = {},
            d;
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    }

    function Nb(a) {
        var b = [];
        Eb(a, function (a, d) {
            null != a && "" !== a && b.push(d + ":" + a)
        });
        return b.length ? b.join(";") + ";" : ""
    }

    function Pb(a) {
        var b = {};
        if (a) {
            var c = /\s*:\s*/;
            a = (a || "").split(/\s*;\s*/);
            Da(a, function (a) {
                if (a) {
                    var d = a.split(c);
                    a = d[0];
                    d = d[1];
                    a && d && (b[a.toLowerCase()] = d)
                }
            })
        }
        return b
    };

    function Rb(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function Sb(a, b) {
        var c = !1,
            d = !1;
        d = void 0 === d ? !1 : d;
        c = void 0 === c ? !1 : c;
        r.google_image_requests || (r.google_image_requests = []);
        var e = r.document.createElement("img");
        if (b || c) {
            var f = function (a) {
                b && b(a);
                if (c) {
                    a = r.google_image_requests;
                    var d = Ca(a, e);
                    0 <= d && Array.prototype.splice.call(a, d, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Rb(e, "load", f);
            Rb(e, "error", f)
        }
        d && (e.referrerPolicy = "no-referrer");
        e.src = a;
        r.google_image_requests.push(e)
    };

    function Tb(a, b) {
        a = parseInt(a, 10);
        return isNaN(a) ? b : a
    }
    var Ub = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/;

    function Vb(a, b) {
        return a ? (a = a.match(Ub)) ? a[0] : b : b
    };

    function Wb() {
        return "r20181205"
    }
    var Xb = Kb("false", !1),
        Yb = Kb("true", !1),
        Zb = Kb("false", !1),
        $b = Zb || !Yb;

    function ac() {
        return Vb("", "googleads.g.doubleclick.net")
    }

    function bc(a) {
        return a ? "pagead2.googlesyndication.com" : Vb("", "pagead2.googlesyndication.com")
    };

    function cc(a) {
        a = void 0 === a ? r : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function dc(a) {
        return (a = a || cc()) ? C(a.master) ? a.master : null : null
    };

    function ec(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function fc(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function gc(a, b) {
        if (a.indexOf) return a = a.indexOf(b), 0 < a || 0 === a;
        for (var c = 0; c < a.length; c++)
            if (a[c] === b) return !0;
        return !1
    }

    function hc(a) {
        a = dc(cc(a)) || a;
        a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
    }

    function ic(a) {
        a = dc(cc(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
    var jc = !!window.google_async_iframe_id,
        kc = jc && window.parent || window;

    function lc() {
        if (jc && !C(kc)) {
            var a = "." + fb.domain;
            try {
                for (; 2 < a.split(".").length && !C(kc);) fb.domain = a = a.substr(a.indexOf(".") + 1), kc = window.parent
            } catch (b) {}
            C(kc) || (kc = window)
        }
        return kc
    }
    var mc = /(^| )adsbygoogle($| )/;

    function nc(a) {
        return Xb && a.google_top_window || a.top
    }

    function F(a) {
        a = nc(a);
        return C(a) ? a : null
    };

    function oc(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function G(a, b) {
        return gc(oc(a).eids || [], b)
    }

    function H(a, b) {
        return gc(oc(a).loeids || [], b)
    }

    function pc(a, b) {
        a = oc(a);
        a.tag_partners = a.tag_partners || [];
        a.tag_partners.push(b)
    }

    function qc(a, b, c) {
        for (var d = 0; d < a.length; ++d)
            if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d];
        return null
    };
    var rc = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6
    };

    function tc(a) {
        z(this, a, uc)
    }
    u(tc, y);

    function vc(a) {
        z(this, a, null)
    }
    u(vc, y);

    function wc(a) {
        z(this, a, null)
    }
    u(wc, y);

    function xc(a) {
        z(this, a, yc)
    }
    u(xc, y);
    var uc = [4],
        yc = [6, 7, 9, 10, 11];

    function zc(a) {
        z(this, a, Ac)
    }
    u(zc, y);

    function Bc(a) {
        z(this, a, null)
    }
    u(Bc, y);

    function Cc(a) {
        z(this, a, Dc)
    }
    u(Cc, y);

    function Ec(a) {
        z(this, a, null)
    }
    u(Ec, y);
    var Ac = [1, 2, 5, 7],
        Dc = [2];

    function Fc(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.line = b.line || -1;
        this.msg = b.message || "";
        this.file = b.file || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Gc = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function Hc(a, b) {
        this.a = a;
        this.b = b
    }

    function Ic(a, b, c) {
        this.url = a;
        this.a = b;
        this.ba = !!c;
        this.depth = oa(void 0) ? void 0 : null
    };

    function Jc() {
        this.g = "&";
        this.h = !1;
        this.b = {};
        this.i = 0;
        this.a = []
    }

    function Kc(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Lc(a, b, c, d, e) {
        var f = [];
        Eb(a, function (a, h) {
            (a = Mc(a, b, c, d, e)) && f.push(h + "=" + a)
        });
        return f.join(b)
    }

    function Mc(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Mc(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Lc(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Nc(a, b, c, d) {
        a.a.push(b);
        a.b[b] = Kc(c, d)
    }

    function Oc(a, b, c, d) {
        b = b + "//" + c + d;
        var e = Pc(a) - d.length;
        if (0 > e) return "";
        a.a.sort(function (a, b) {
            return a - b
        });
        d = null;
        c = "";
        for (var f = 0; f < a.a.length; f++)
            for (var g = a.a[f], h = a.b[g], k = 0; k < h.length; k++) {
                if (!e) {
                    d = null == d ? g : d;
                    break
                }
                var m = Lc(h[k], a.g, ",$");
                if (m) {
                    m = c + m;
                    if (e >= m.length) {
                        e -= m.length;
                        b += m;
                        c = a.g;
                        break
                    } else a.h && (c = e, m[c - 1] == a.g && --c, b += m.substr(0, c), c = a.g, e = 0);
                    d = null == d ? g : d
                }
            }
        a = "";
        null != d && (a = c + "trn=" + d);
        return b + a
    }

    function Pc(a) {
        var b = 1,
            c;
        for (c in a.b) b = c.length > b ? c.length : b;
        return 3997 - b - a.g.length - 1
    };

    function Qc(a, b, c, d, e, f) {
        if ((d ? a.i : Math.random()) < (e || a.a)) try {
            if (c instanceof Jc) var g = c;
            else g = new Jc, Eb(c, function (a, b) {
                var c = g,
                    d = c.i++;
                a = Kc(b, a);
                c.a.push(d);
                c.b[d] = a
            });
            var h = Oc(g, a.h, a.b, a.g + b + "&");
            h && ("undefined" === typeof f ? Sb(h, void 0) : Sb(h, f))
        } catch (k) {}
    };

    function Rc(a, b) {
        this.start = a < b ? a : b;
        this.a = a < b ? b : a
    };

    function Sc(a, b) {
        this.a = b >= a ? new Rc(a, b) : null
    }

    function Tc(a) {
        var b = -1;
        try {
            a.localStorage && (b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10))
        } catch (c) {
            return null
        }
        if (0 <= b && 1E3 > b) return b;
        if (Gb()) return null;
        b = Math.floor(1E3 * Db(a));
        try {
            if (a.localStorage) return a.localStorage.setItem("google_experiment_mod", "" + b), b
        } catch (c) {}
        return null
    };
    var Uc = null;

    function Vc() {
        var a = r.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function Wc() {
        var a = void 0 === a ? r : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Xc(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
        this.slotId = void 0
    };
    var I = r.performance,
        Yc = !!(I && I.mark && I.measure && I.clearMarks),
        Zc = jb(function () {
            var a;
            if (a = Yc) {
                var b;
                if (null === Uc) {
                    Uc = "";
                    try {
                        a = "";
                        try {
                            a = r.top.location.hash
                        } catch (c) {
                            a = r.location.hash
                        }
                        a && (Uc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Uc;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function $c() {
        var a = ad;
        this.b = [];
        this.g = a || r;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = Zc() || (null != b ? b : 1 > Math.random())
    }

    function bd(a) {
        a && I && Zc() && (I.clearMarks("goog_" + a.uniqueId + "_start"), I.clearMarks("goog_" + a.uniqueId + "_end"))
    }
    $c.prototype.start = function (a, b) {
        if (!this.a) return null;
        var c = Wc() || Vc();
        a = new Xc(a, b, c);
        b = "goog_" + a.uniqueId + "_start";
        I && Zc() && I.mark(b);
        return a
    };

    function cd() {
        var a = dd;
        this.G = ed;
        this.h = !0;
        this.g = null;
        this.H = this.a;
        this.b = void 0 === a ? null : a;
        this.i = !1
    }

    function fd(a, b, c, d, e) {
        try {
            if (a.b && a.b.a) {
                var f = a.b.start(b.toString(), 3);
                var g = c();
                var h = a.b;
                c = f;
                if (h.a && oa(c.value)) {
                    var k = Wc() || Vc();
                    c.duration = k - c.value;
                    var m = "goog_" + c.uniqueId + "_end";
                    I && Zc() && I.mark(m);
                    h.a && h.b.push(c)
                }
            } else g = c()
        } catch (n) {
            h = a.h;
            try {
                bd(f), h = (e || a.H).call(a, b, new gd(hd(n), n.fileName, n.lineNumber), void 0, d)
            } catch (p) {
                a.a(217, p)
            }
            if (!h) throw n;
        }
        return g
    }

    function id(a, b) {
        var c = jd;
        return function (d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return fd(c, a, function () {
                return b.apply(void 0, e)
            }, void 0, void 0)
        }
    }
    cd.prototype.a = function (a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new Jc;
            f.h = !0;
            Nc(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new gd(hd(b), b.fileName, b.lineNumber));
            b.msg && Nc(f, 2, "msg", b.msg.substring(0, 512));
            b.file && Nc(f, 3, "file", b.file);
            0 < b.line && Nc(f, 4, "line", b.line);
            var g = b.meta || {};
            if (this.g) try {
                this.g(g)
            } catch (ia) {}
            if (d) try {
                d(g)
            } catch (ia) {}
            b = [g];
            f.a.push(5);
            f.b[5] = b;
            d = r;
            b = [];
            g = null;
            do {
                var h = d;
                if (C(h)) {
                    var k = h.location.href;
                    g = h.document && h.document.referrer || null
                } else k = g, g = null;
                b.push(new Ic(k || "", h));
                try {
                    d = h.parent
                } catch (ia) {
                    d = null
                }
            } while (d && h != d);
            k = 0;
            for (var m = b.length - 1; k <= m; ++k) b[k].depth = m - k;
            h = r;
            if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var n = b[m];
                    n.url || (n.url = h.location.ancestorOrigins[m - 1] || "", n.ba = !0)
                }
            var p = new Ic(r.location.href, r, !1);
            h = null;
            var q = b.length - 1;
            for (n = q; 0 <= n; --n) {
                var w = b[n];
                !h && Gc.test(w.url) && (h = w);
                if (w.url && !w.ba) {
                    p = w;
                    break
                }
            }
            w = null;
            var ma = b.length && b[q].url;
            0 != p.depth && ma && (w = b[q]);
            var L = new Hc(p, w);
            L.b && Nc(f, 6, "top", L.b.url || "");
            Nc(f, 7, "url", L.a.url || "");
            Qc(this.G, e, f, this.i, c)
        } catch (ia) {
            try {
                Qc(this.G, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: hd(ia),
                    url: L && L.a.url
                }, this.i, c)
            } catch (za) {}
        }
        return this.h
    };

    function hd(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    }

    function gd(a, b, c) {
        Fc.call(this, Error(a), {
            message: a,
            file: void 0 === b ? "" : b,
            line: void 0 === c ? -1 : c
        })
    }
    ha(gd, Fc);

    function J(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, J) : this.stack = Error().stack || ""
    }
    ha(J, Error);

    function kd(a) {
        return 0 == (a.error && a.meta && a.id ? a.msg || hd(a.error) : hd(a)).indexOf("TagError")
    };
    var ed, jd, ad = lc(),
        dd = new $c;

    function ld(a) {
        null != a && (ad.google_measure_js_timing = a);
        ad.google_measure_js_timing || (a = dd, a.a = !1, a.b != a.g.google_js_reporting_queue && (Zc() && Da(a.b, bd), a.b.length = 0))
    }
    ed = new function () {
        var a = void 0 === a ? B : a;
        this.h = "http:" === a.location.protocol ? "http:" : "https:";
        this.b = "pagead2.googlesyndication.com";
        this.g = "/pagead/gen_204?id=";
        this.a = .01;
        this.i = Math.random()
    };
    jd = new cd;
    "complete" == ad.document.readyState ? ld() : dd.a && Rb(ad, "load", function () {
        ld()
    });

    function md() {
        var a = [nd, od];
        jd.g = function (b) {
            Da(a, function (a) {
                a(b)
            })
        }
    }

    function pd(a, b, c, d) {
        return fd(jd, a, c, d, b)
    }

    function qd(a, b) {
        return id(a, b)
    }
    var rd = jd.a;

    function sd(a, b, c) {
        Qc(ed, a, b, "jserror" != a, c, void 0)
    }

    function td(a, b, c, d) {
        return kd(b) ? (jd.i = !0, jd.a(a, b, .1, d, "puberror"), !1) : jd.a(a, b, c, d)
    }

    function ud(a, b, c, d) {
        return kd(b) ? !1 : jd.a(a, b, c, d)
    };

    function vd(a, b) {
        this.Z = a;
        this.fa = b
    }

    function wd(a) {
        var b = [].slice.call(arguments).filter(ib());
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function (a) {
            c = c.concat(a.Z || []);
            d = Object.assign(d, a.fa)
        });
        return new vd(c, d)
    };
    var xd = new vd(["google-auto-placed"], {
        google_tag_origin: "qs"
    });

    function yd(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        sd("ama", b, .01)
    };

    function zd(a, b, c) {
        c || (c = $b ? "https" : "http");
        r.location && "https:" == r.location.protocol && "http" == c && (c = "https");
        return [c, "://", a, b].join("")
    };
    var Ad = null;

    function Bd() {
        if (!Xb) return !1;
        if (null != Ad) return Ad;
        Ad = !1;
        try {
            var a = F(r);
            a && -1 != a.location.hash.indexOf("google_logging") && (Ad = !0);
            r.localStorage.getItem("google_logging") && (Ad = !0)
        } catch (b) {}
        return Ad
    }

    function Cd(a, b) {
        b = void 0 === b ? [] : b;
        if (Bd()) {
            if (!r.google_logging_queue) {
                r.google_logging_queue = [];
                var c = zd(bc(), "/pagead/js/logging_library.js");
                Cb(r.document, c)
            }
            r.google_logging_queue.push([a, b])
        }
    };

    function Dd(a) {
        z(this, a, null)
    }
    u(Dd, y);
    var Ed = null;

    function Fd() {
        if (!Ed) {
            for (var a = r, b = a, c = 0; a && a != a.parent;)
                if (a = a.parent, c++, C(a)) b = a;
                else break;
            Ed = b
        }
        return Ed
    };
    var Gd = {
            c: "368226950",
            f: "368226951"
        },
        Hd = {
            c: "368226960",
            f: "368226961"
        },
        Id = {
            c: "332260010",
            A: "332260011",
            w: "332260012",
            D: "332260013"
        },
        Jd = {
            c: "332260020",
            A: "332260021",
            w: "332260022",
            D: "332260023"
        },
        Kd = {
            c: "368226500",
            f: "368226501"
        },
        Ld = {
            c: "36998750",
            f: "36998751"
        },
        Md = {
            c: "633794000",
            f: "633794001",
            B: "633794004"
        },
        Nd = {
            c: "633794002",
            f: "633794003",
            B: "633794005"
        },
        Od = {
            c: "221415700",
            f: "221415701"
        },
        Pd = {
            c: "221415800",
            f: "221415801"
        },
        Qd = {
            c: "4089040",
            sa: "4089042"
        },
        Rd = {
            m: "20040067",
            c: "20040068",
            R: "1337"
        },
        Sd = {
            c: "21060548",
            m: "21060549"
        },
        Td = {
            c: "21060623",
            m: "21060624"
        },
        Ud = {
            c: "22324606",
            f: "22324607"
        },
        Vd = {
            c: "21062271",
            m: "21062272"
        },
        Wd = {
            K: "62710015",
            c: "62710016"
        },
        Xd = {
            c: "21060518",
            f: "21060519"
        },
        Yd = {
            c: "21060849",
            V: "21060850",
            L: "21060851",
            U: "21060852",
            T: "21060853"
        },
        Zd = {
            c: "21061394",
            f: "21061395"
        },
        $d = {
            c: "182982000",
            f: "182982100"
        },
        ae = {
            c: "182982200",
            f: "182982300"
        },
        be = {
            c: "182983000",
            f: "182983100"
        },
        ce = {
            c: "182983200",
            f: "182983300"
        },
        de = {
            c: "182984000",
            f: "182984100",
            F: "182984400"
        },
        ee = {
            c: "182984200",
            f: "182984300",
            F: "182984500"
        },
        fe = {
            c: "10583695",
            f: "10583696"
        },
        ge = {
            c: "10593695",
            f: "10593696"
        },
        he = {
            c: "10573695",
            qa: "10573696",
            ra: "10573697"
        },
        ie = {
            c: "21062571",
            f: "21062572"
        },
        je = {
            c: "214679000",
            f: "214679100"
        },
        ke = {
            c: "214678000",
            f: "214678100"
        },
        le = {
            c: "20040012",
            f: "20040013"
        };
    var me = {
            google: 1,
            googlegroups: 1,
            gmail: 1,
            googlemail: 1,
            googleimages: 1,
            googleprint: 1
        },
        ne = /(corp|borg)\.google\.com:\d+$/;

    function oe() {
        var a = B.google_page_location || B.google_page_url;
        "EMPTY" == a && (a = B.google_page_url);
        if (Xb || !a) return !1;
        a = a.toString();
        0 == a.indexOf("http://") ? a = a.substring(7, a.length) : 0 == a.indexOf("https://") && (a = a.substring(8, a.length));
        var b = a.indexOf("/"); - 1 == b && (b = a.length);
        a = a.substring(0, b);
        if (ne.test(a)) return !1;
        a = a.split(".");
        b = !1;
        3 <= a.length && (b = a[a.length - 3] in me);
        2 <= a.length && (b = b || a[a.length - 2] in me);
        return b
    };

    function pe() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.adRegion = this.floatingAdsFillMessage = null;
        this.disablePageHeightCheck = !1;
        this.improveCollisionDetection = 0
    }

    function qe(a) {
        a.google_reactive_ads_global_state || (a.google_reactive_ads_global_state = new pe);
        return a.google_reactive_ads_global_state
    };

    function re(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function K(a) {
        return re(a).clientWidth
    };

    function se(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function te(a, b, c, d) {
        this.h = a;
        this.b = b;
        this.g = c;
        this.a = d
    }
    te.prototype.toString = function () {
        return JSON.stringify({
            nativeQuery: this.h,
            occurrenceIndex: this.b,
            paragraphIndex: this.g,
            ignoreMode: this.a
        })
    };

    function ue(a, b) {
        if (null == a.a) return b;
        switch (a.a) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.a);
        }
    }

    function ve(a) {
        var b = [];
        se(a.getElementsByTagName("p"), function (a) {
            100 <= we(a) && b.push(a)
        });
        return b
    }

    function we(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        se(a.childNodes, function (a) {
            b += we(a)
        });
        return b
    }

    function xe(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };
    var ye = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function ze(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = E(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function Ae(a, b) {
        return !((Ib.test(b.google_ad_width) || Hb.test(a.style.width)) && (Ib.test(b.google_ad_height) || Hb.test(a.style.height)))
    }

    function Be(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            var e = {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (f) {
            e = null
        }
        return (a = e) ? a.y : 0
    }

    function Ce(a, b) {
        do {
            var c = D(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    }

    function De(a) {
        var b = 0,
            c;
        for (c in ye) - 1 != a.indexOf(c) && (b |= ye[c]);
        return b
    }

    function Ee(a, b, c, d, e) {
        if (nc(a) != a) return F(a) ? 3 : 16;
        if (!(488 > K(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = K(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = K(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = D(b, a)) && (e = E(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    } c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Fe(a, b, c, d) {
        var e = Ee(b, c, a, .3, d);
        if (!0 !== e) return e;
        e = K(b);
        a = e - a;
        a = e && 0 <= a ? !0 : e ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10;
        return "true" == d.google_full_width_responsive || Ce(c, b) ? a : 9
    }

    function Ge(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = D(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function He(a, b, c, d, e, f) {
        if (a = D(c, a)) {
            var g = E(a.paddingLeft) || 0;
            a = a.direction;
            d = e - d;
            if (f.google_ad_resize) g = -1 * (d + g) + "px";
            else {
                for (var h = f = 0; 100 > h && c; h++) f += c.offsetLeft + c.clientLeft - c.scrollLeft, c = c.offsetParent;
                g = f + g;
                g = "rtl" == a ? -1 * (d - g) + "px" : -1 * g + "px"
            }
            "rtl" == a ? b.style.marginRight = g : b.style.marginLeft = g;
            b.style.width = e + "px";
            b.style.zIndex = 30
        }
    };

    function M(a, b) {
        this.b = a;
        this.a = b
    }
    l = M.prototype;
    l.minWidth = function () {
        return this.b
    };
    l.height = function () {
        return this.a
    };
    l.C = function (a) {
        return 300 < a && 300 < this.a ? this.b : Math.min(1200, Math.round(a))
    };
    l.M = function (a) {
        return this.C(a) + "x" + this.height()
    };
    l.J = function () {};

    function N(a, b, c, d) {
        d = void 0 === d ? function (a) {
            return a
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = D(a, b)) && e[c] && d(e[c]) || null
    }

    function Ie(a) {
        return function (b) {
            return b.minWidth() <= a
        }
    }

    function Je(a, b, c, d) {
        var e = a && Ke(c, b),
            f = Le(b, d);
        return function (a) {
            return !(e && a.height() >= f)
        }
    }

    function Me(a) {
        return function (b) {
            return b.height() <= a
        }
    }

    function Ke(a, b) {
        return Be(a, b) < re(b).clientHeight - 100
    }

    function Ne(a, b) {
        var c = Infinity;
        do {
            var d = N(b, a, "height", E);
            d && (c = Math.min(c, d));
            (d = N(b, a, "maxHeight", E)) && (c = Math.min(c, d))
        } while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Oe(a, b) {
        var c = N(b, a, "height", E);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = N(b, a, "height", E);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && E(b.style.height)) && (c = Math.min(c, d)), (d = N(b, a, "maxHeight", E)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Le(a, b) {
        var c = a.google_unique_id;
        return b && 0 == ("number" === typeof c ? c : 0) ? Math.max(250, 2 * re(a).clientHeight / 3) : 250
    }

    function Pe(a) {
        for (a = a.parentElement; a; a = a.parentElement) {
            var b = E(a.style.height || a.style.maxHeight);
            if (b) return b
        }
        return null
    };

    function Qe(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                } b = !0
        }
        return b
    };

    function Re(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Qa(d.Na);
            a[e] = d.value
        }
    };
    var Se = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Te(a) {
        return null != a ? Se[a] : a
    }
    var Ue = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Ve(a, b) {
        if (!a) return !1;
        a = D(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function We(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Xe(a) {
        return !!a.nextSibling || !!a.parentNode && Xe(a.parentNode)
    };

    function Ye(a, b, c) {
        this.a = r;
        this.i = a;
        this.h = b;
        this.g = c || null;
        this.b = !1
    }

    function Ze(a, b) {
        if (a.b) return !0;
        try {
            var c = a.a.localStorage.getItem("google_ama_settings");
            var d = c ? new Dd(c ? JSON.parse(c) : null) : null
        } catch (h) {
            d = null
        }
        if (c = null !== d) d = A(d, 2), c = null == d ? !1 : d;
        if (c) return a = a.a.google_ama_state = a.a.google_ama_state || {}, a.eatf = !0, Cd(7, [!0, 0, !1]), !0;
        d = 0;
        var e = ab(a.h, xc, 1);
        for (c = 0; c < e.length; c++) {
            var f = e[c];
            if (1 == A(f, 8)) {
                var g = $a(f, wc, 4);
                if (g && 2 == A(g, 1) && (d++, $e(a, f, b))) return a.b = !0, a = a.a.google_ama_state = a.a.google_ama_state || {}, a.placement = c, Cd(7, [!1, d, !0]), !0
            }
        }
        Cd(7, [!1, d, !1]);
        return !1
    }

    function $e(a, b, c) {
        if (1 != A(b, 8)) return !1;
        var d = $a(b, tc, 1);
        if (!d) return !1;
        var e = A(d, 7);
        if (A(d, 1) || A(d, 3) || 0 < Za(d, 4).length) {
            var f = A(d, 3),
                g = A(d, 1),
                h = Za(d, 4);
            e = A(d, 2);
            var k = A(d, 5);
            d = Te(A(d, 6));
            var m = "";
            g && (m += g);
            f && (m += "#" + xe(f));
            if (h)
                for (f = 0; f < h.length; f++) m += "." + xe(h[f]);
            e = (h = m) ? new te(h, e, k, d) : null
        } else e = e ? new te(e, A(d, 2), A(d, 5), Te(A(d, 6))) : null;
        if (!e) return !1;
        k = [];
        try {
            k = a.a.document.querySelectorAll(e.h)
        } catch (w) {}
        if (k.length) {
            h = k.length;
            if (0 < h) {
                d = Array(h);
                for (f = 0; f < h; f++) d[f] = k[f];
                k = d
            } else k = [];
            k = ue(e, k);
            oa(e.b) && (h = e.b, 0 > h && (h += k.length), k = 0 <= h && h < k.length ? [k[h]] : []);
            if (oa(e.g)) {
                h = [];
                for (d = 0; d < k.length; d++) f = ve(k[d]), g = e.g, 0 > g && (g += f.length), 0 <= g && g < f.length && h.push(f[g]);
                k = h
            }
            e = k
        } else e = [];
        if (0 == e.length) return !1;
        e = e[0];
        k = A(b, 2);
        k = Ue[k];
        k = void 0 !== k ? k : null;
        if (!(h = null == k)) {
            a: {
                h = a.a;
                switch (k) {
                    case 0:
                        h = Ve(We(e), h);
                        break a;
                    case 3:
                        h = Ve(e, h);
                        break a;
                    case 2:
                        d = e.lastChild;
                        h = Ve(d ? 1 == d.nodeType ? d : We(d) : null, h);
                        break a
                }
                h = !1
            }
            if (c = !h && !(!c && 2 == k && !Xe(e))) c = 1 == k || 2 == k ? e : e.parentNode,
            c = !(c && !Qe(c) && 0 >= c.offsetWidth);h = !c
        }
        if (h) return !1;
        b = $a(b, vc, 3);
        h = {};
        b && (h.la = A(b, 1), h.X = A(b, 2), h.wa = !!A(b, 3));
        b = a.a;
        c = a.g;
        d = a.i;
        f = b.document;
        a = ub(new tb(f), "DIV");
        g = a.style;
        g.textAlign = "center";
        g.width = "100%";
        g.height = "auto";
        g.clear = h.wa ? "both" : "none";
        h.Ca && Re(g, h.Ca);
        f = ub(new tb(f), "INS");
        g = f.style;
        g.display = "block";
        g.margin = "auto";
        g.backgroundColor = "transparent";
        h.la && (g.marginTop = h.la);
        h.X && (g.marginBottom = h.X);
        h.va && Re(g, h.va);
        a.appendChild(f);
        f.setAttribute("data-ad-format", "auto");
        h = [];
        if (g = c && c.Z) a.className = g.join(" ");
        f.className = "adsbygoogle";
        f.setAttribute("data-ad-client", d);
        h.length && f.setAttribute("data-ad-channel", h.join("+"));
        a: {
            try {
                switch (k) {
                    case 0:
                        e.parentNode && e.parentNode.insertBefore(a, e);
                        break;
                    case 3:
                        var n = e.parentNode;
                        if (n) {
                            var p = e.nextSibling;
                            if (p && p.parentNode != n)
                                for (; p && 8 == p.nodeType;) p = p.nextSibling;
                            n.insertBefore(a, p)
                        }
                        break;
                    case 1:
                        e.insertBefore(a, e.firstChild);
                        break;
                    case 2:
                        e.appendChild(a)
                }
                Qe(e) && (e.setAttribute("data-init-display", e.style.display), e.style.display = "block");
                b: {
                    f.setAttribute("data-adsbygoogle-status", "reserved");f.className += " adsbygoogle-noablate";n = {
                        element: f
                    };
                    var q = c && c.fa;
                    if (f.hasAttribute("data-pub-vars")) {
                        try {
                            q = JSON.parse(f.getAttribute("data-pub-vars"))
                        } catch (w) {
                            break b
                        }
                        f.removeAttribute("data-pub-vars")
                    }
                    q && (n.params = q);
                    (b.adsbygoogle = b.adsbygoogle || []).push(n)
                }
            } catch (w) {
                a && a.parentNode && (q = a.parentNode, q.removeChild(a), Qe(q) && (q.style.display = q.getAttribute("data-init-display") || "none"));
                q = !1;
                break a
            }
            q = !0
        }
        return q ? !0 : !1
    };

    function af() {
        this.b = new bf(this);
        this.a = 0
    }

    function cf(a) {
        if (0 != a.a) throw Error("Already resolved/rejected.");
    }

    function bf(a) {
        this.a = a
    }

    function df(a) {
        switch (a.a.a) {
            case 0:
                break;
            case 1:
                a.b && a.b(a.a.h);
                break;
            case 2:
                a.g && a.g(a.a.g);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function ef(a) {
        this.exception = a
    }

    function ff(a, b) {
        this.b = r;
        this.g = a;
        this.a = b
    }
    ff.prototype.start = function () {
        this.h()
    };
    ff.prototype.h = function () {
        try {
            switch (this.b.document.readyState) {
                case "complete":
                case "interactive":
                    Ze(this.g, !0);
                    gf(this);
                    break;
                default:
                    Ze(this.g, !1) ? gf(this) : this.b.setTimeout(ya(this.h, this), 100)
            }
        } catch (a) {
            gf(this, a)
        }
    };

    function gf(a, b) {
        try {
            var c = a.a,
                d = new ef(b);
            cf(c);
            c.a = 1;
            c.h = d;
            df(c.b)
        } catch (e) {
            a = a.a, b = e, cf(a), a.a = 2, a.g = b, df(a.b)
        }
    };

    function hf(a) {
        yd(a, {
            atf: 1
        })
    }

    function jf(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        yd(a, {
            atf: 0
        })
    };

    function kf() {
        this.debugCard = null;
        this.debugCardRequested = !1
    };

    function lf(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = mf(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function mf(a) {
        var b = "";
        ec(a.split("_"), function (a) {
            b += a.substr(0, 2)
        });
        return b
    };

    function nf(a) {
        if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };

    function of (a, b) {
        function c(a) {
            try {
                var b = new cb(a);
                return Fa(ab(b, eb, 2), function (a) {
                    return 1 == A(a, 1)
                })
            } catch (f) {
                return null
            }
        }
        b = void 0 === b ? "" : b;
        a = F(a) || a;
        a = pf(a);
        return b ? (b = nf(String(b)), a[b] ? c(a[b]) : null) : Fa(Ea(Ua(a), c), function (a) {
            return null != a
        })
    }

    function qf(a, b, c) {
        function d(a) {
            if (!a) return !1;
            a = new cb(a);
            var c;
            if (c = Za(a, 3)) a = Za(a, 3), c = 0 <= Ca(a, b);
            return c
        }
        c = void 0 === c ? "" : c;
        a = F(a) || a;
        if (rf(a, b)) return !0;
        a = pf(a);
        return c ? (c = nf(String(c)), d(a[c])) : Ta(a, d)
    }

    function rf(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && 0 <= Ca(a.split(","), b.toString())
    }

    function pf(a) {
        try {
            return Ob({}, JSON.parse(a.localStorage.getItem("google_adsense_settings")))
        } catch (b) {
            return {}
        }
    };

    function sf(a) {
        if (r.google_apltlad || nc(r) != r) return !1;
        if (lf(r.location, "google_ads_preview")) return !0;
        if (!qf(r, 12, a.google_ad_client) || "google_ad_host" in a) return !1;
        r.google_apltlad = !0;
        return G(r, Gd.f)
    };
    var tf = {
        9: "400",
        10: "100",
        11: "0.10",
        13: "0.001",
        19: "0.01",
        22: "0.01",
        24: "0.05",
        27: "0.001",
        28: "0.001",
        29: "0.01",
        34: "0.001",
        40: "0.15",
        47: "0.01",
        56: "0.001",
        60: "0.03",
        66: "0.0",
        67: "0.04",
        76: "0.004",
        77: "true",
        78: "0.1",
        79: "1200",
        82: "3",
        83: "1.0",
        92: "0.02",
        96: "700",
        97: "10",
        98: "0.01",
        99: "600",
        100: "100",
        103: "0.01",
        111: "0.1",
        112: "0",
        117: "0.02",
        118: "false",
        120: "0",
        121: "1000",
        126: "0.001",
        127: "0.1",
        128: "false",
        129: "0.02",
        135: "0.0",
        136: "0.02",
        137: "0.01",
        142: "1",
        143: "1",
        146: "0.10",
        148: "0.1",
        149: "0",
        150: "1000",
        152: "700",
        153: "30",
        154: "0.001",
        155: "0.06",
        157: "800",
        158: "30",
        159: "0.001",
        160: "200",
        161: "40",
        162: "0.02",
        163: "0",
        164: "100",
        165: "0.002",
        166: "100",
        167: "2"
    };
    var uf = null;

    function vf() {
        this.a = tf
    }

    function O(a, b) {
        a = parseFloat(a.a[b]);
        return isNaN(a) ? 0 : a
    }

    function wf() {
        uf || (uf = new vf);
        return uf
    };

    function xf(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        var f = a.createElement("link");
        try {
            f.rel = c;
            if (v(c.toLowerCase(), "stylesheet")) var g = nb(b);
            else {
                if (b instanceof lb) var h = nb(b);
                else {
                    if (b instanceof ob)
                        if (b instanceof ob && b.constructor === ob && b.ta === pb) var k = b.O;
                        else ta(b), k = "type_error:SafeUrl";
                    else {
                        if (b instanceof ob) var m = b;
                        else b = "object" == typeof b && b.g ? b.a() : String(b), qb.test(b) || (b = "about:invalid#zClosurez"), m = rb(b);
                        k = m.a()
                    }
                    h = k
                }
                g = h
            }
            f.href = g
        } catch (n) {
            return
        }
        d && "preload" == c && (f.as = d);
        e && (f.nonce = e);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(f)
        } catch (n) {}
    };

    function yf(a) {
        var b = {},
            c = {};
        a = (c.enable_page_level_ads = (b.pltais = !0, b), c.google_ad_client = a, c);
        a.enable_page_level_ads.google_ad_channel = "AutoInsertAutoAdCode";
        return a
    };

    function od(a) {
        try {
            var b = Ga(oc(r).eids || [], oc(r).loeids || []);
            null != b && 0 < b.length && (a.eid = b.join(","))
        } catch (c) {}
    }

    function nd(a) {
        a.shv = Wb()
    }
    jd.h = !Xb;

    function zf(a, b) {
        return Be(b, a) + N(b, a, "height", E)
    };
    var Af = new Sc(0, 99),
        Bf = new Sc(100, 199),
        Cf = new Sc(200, 399),
        Df = new Sc(400, 499),
        Ef = new Sc(600, 699),
        Ff = new Sc(700, 799),
        Gf = new Sc(800, 899);

    function P(a, b) {
        b && a.push(b)
    }

    function Hf(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        d = F(a) || a;
        d = (d = (d = d.location && d.location.hash) && (d.match(/google_plle=([\d,]+)/) || d.match(/deid=([\d,]+)/))) && d[1];
        var e;
        if (e = !!d) a: {
            d = Aa(v, d);e = c.length;
            for (var f = t(c) ? c.split("") : c, g = 0; g < e; g++)
                if (g in f && d.call(void 0, f[g], g, c)) {
                    e = !0;
                    break a
                } e = !1
        }
        return e
    }

    function Q(a, b, c) {
        for (var d = 0; d < c.length; d++)
            if (Hf(a, c[d])) return c[d];
        a: {
            if (!Gb() && (a = Math.random(), a < b)) {
                a = Db(r);
                b = c[Math.floor(a * c.length)];
                break a
            }
            b = null
        }
        return b
    }

    function If(a, b, c, d, e, f) {
        f = void 0 === f ? 1 : f;
        for (var g = 0; g < e.length; g++)
            if (Hf(a, e[g])) return e[g];
        f = void 0 === f ? 1 : f;
        0 >= d ? c = null : (g = new Rc(c, c + d - 1), (d = d % f || d / f % e.length) || (b = b.a, d = !(b.start <= g.start && b.a >= g.a)), d ? c = null : (a = Tc(a), c = null !== a && g.start <= a && g.a >= a ? e[Math.floor((a - c) / f) % e.length] : null));
        return c
    };

    function Jf(a, b, c) {
        if (C(a.document.getElementById(b).contentWindow)) a = a.document.getElementById(b).contentWindow, b = a.document, b.body && b.body.firstChild || (/Firefox/.test(navigator.userAgent) ? b.open("text/html", "replace") : b.open(), a.google_async_iframe_close = !0, b.write(c));
        else {
            a = a.document.getElementById(b).contentWindow;
            c = String(c);
            b = ['"'];
            for (var d = 0; d < c.length; d++) {
                var e = c.charAt(d),
                    f = e.charCodeAt(0),
                    g = d + 1,
                    h;
                if (!(h = Oa[e])) {
                    if (!(31 < f && 127 > f))
                        if (f = e, f in Pa) e = Pa[f];
                        else if (f in Oa) e = Pa[f] = Oa[f];
                    else {
                        h = f.charCodeAt(0);
                        if (31 < h && 127 > h) e = f;
                        else {
                            if (256 > h) {
                                if (e = "\\x", 16 > h || 256 < h) e += "0"
                            } else e = "\\u", 4096 > h && (e += "0");
                            e += h.toString(16).toUpperCase()
                        }
                        e = Pa[f] = e
                    }
                    h = e
                }
                b[g] = h
            }
            b.push('"');
            a.location.replace("javascript:" + b.join(""))
        }
    };
    var Kf = null;

    function R(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        M.call(this, a, b);
        this.I = c;
        this.Aa = d
    }
    ha(R, M);
    R.prototype.P = function () {
        return this.I
    };
    R.prototype.J = function (a, b, c, d) {
        var e = this;
        if (1 != c.google_ad_resize) {
            d.style.height = this.height() + "px";
            var f = function () {
                var a = Pe(d);
                if (a) return a < e.height()
            };
            b = (G(a, je.c) || H(a, Md.c) || H(a, Md.f)) && f();
            f = (G(a, je.f) || G(a, de.F) || H(a, Md.B)) && f();
            b ? (c.rpe = !1, c.ovlp = !0) : f && (c.rpe = !0, c.ovlp = !0);
            if (G(a, Id.c) || G(a, Id.A) || G(a, Id.w) || G(a, Id.D)) c.ovlp = !0
        }
    };

    function Lf(a) {
        return function (b) {
            return !!(b.I & a)
        }
    };

    function S(a, b, c, d, e, f, g, h, k, m, n, p, q) {
        this.pa = a;
        this.a = b;
        this.I = void 0 === c ? null : c;
        this.na = void 0 === d ? null : d;
        this.b = void 0 === e ? null : e;
        this.g = void 0 === f ? null : f;
        this.G = void 0 === g ? !1 : g;
        this.H = void 0 === h ? !1 : h;
        this.ea = void 0 === k ? null : k;
        this.ja = void 0 === m ? null : m;
        this.h = void 0 === n ? null : n;
        this.i = void 0 === p ? null : p;
        this.ma = void 0 === q ? null : q;
        this.oa = this.da = this.ca = null
    }

    function Mf(a, b, c) {
        null != a.I && (c.google_responsive_formats = a.I);
        null != a.na && (c.google_safe_for_responsive_override = a.na);
        null != a.b && (!0 === a.b ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.b));
        null != a.g && !0 !== a.g && (c.gfwrnher = a.g);
        a.G && (c.google_bfa = a.G);
        a.H && (c.ebfa = a.H);
        var d = a.a.C(b),
            e = a.a.height();
        1 != c.google_ad_resize && (c.google_ad_width = d, c.google_ad_height = e, c.google_ad_format = a.a.M(b), c.google_responsive_auto_format = a.pa, c.google_ad_resizable = !0, c.google_override_format = 1, c.google_loader_features_used = 128, !0 === a.b && (c.gfwrnh = a.a.height() + "px"));
        null != a.ea && (c.gfwroml = a.ea);
        null != a.ja && (c.gfwromr = a.ja);
        null != a.h && (c.gfwroh = a.h, c.google_resizing_height = a.h);
        null != a.i && (c.gfwrow = a.i, c.google_resizing_width = a.i);
        null != a.ma && (c.gfwroz = a.ma);
        null != a.ca && (c.gml = a.ca);
        null != a.da && (c.gmr = a.da);
        null != a.oa && (c.gzi = a.oa);
        b = lc();
        b = F(b) || b;
        if (lf(b.location, "google_responsive_slot_debug") || Hf(b, $d.c, $d.f)) c.ds = "outline:thick dashed " + (d && e ? !0 !== a.b || !0 !== a.g ? "#ffa500" : "#0f0" : "#f00") + " !important;"
    };
    var Nf = Tb("468", 0);
    var Of = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"],
        Pf = {},
        Qf = (Pf.image_stacked = 1 / 1.91, Pf.image_sidebyside = 1 / 3.82, Pf.mobile_banner_image_sidebyside = 1 / 3.82, Pf.pub_control_image_stacked = 1 / 1.91, Pf.pub_control_image_sidebyside = 1 / 3.82, Pf.pub_control_image_card_stacked = 1 / 1.91, Pf.pub_control_image_card_sidebyside = 1 / 3.74, Pf.pub_control_text = 0, Pf.pub_control_text_card = 0, Pf),
        Rf = {},
        Sf = (Rf.image_stacked = 80, Rf.image_sidebyside = 0, Rf.mobile_banner_image_sidebyside = 0, Rf.pub_control_image_stacked = 80, Rf.pub_control_image_sidebyside = 0, Rf.pub_control_image_card_stacked = 85, Rf.pub_control_image_card_sidebyside = 0, Rf.pub_control_text = 80, Rf.pub_control_text_card = 80, Rf),
        Tf = {},
        Uf = (Tf.pub_control_image_stacked = 100, Tf.pub_control_image_sidebyside = 200, Tf.pub_control_image_card_stacked = 150, Tf.pub_control_image_card_sidebyside = 250, Tf.pub_control_text = 100, Tf.pub_control_text_card = 150, Tf);

    function Vf(a, b) {
        M.call(this, a, b)
    }
    ha(Vf, M);
    Vf.prototype.C = function (a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Wf(a) {
        var b = 0;
        ec(Of, function (c) {
            null != a[c] && ++b
        });
        if (0 === b) return !1;
        if (b === Of.length) return !0;
        throw new J("Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.");
    }

    function Xf(a, b) {
        Yf(a, b);
        if (a < Nf) {
            if (xb()) {
                Zf(b, "mobile_banner_image_sidebyside", 1, 12);
                var c = +b.google_content_recommendation_columns_num;
                c = (a - 8 * c - 8) / c;
                var d = b.google_content_recommendation_ui_type;
                b = b.google_content_recommendation_rows_num - 1;
                return new S(9, new Vf(a, Math.floor(c / 1.91 + 70) + Math.floor((c * Qf[d] + Sf[d]) * b + 8 * b + 8)))
            }
            Zf(b, "image_sidebyside", 1, 13);
            return new S(9, $f(a))
        }
        Zf(b, "image_stacked", 4, 2);
        return new S(9, $f(a))
    }

    function $f(a) {
        return 1200 <= a ? new Vf(1200, 600) : 850 <= a ? new Vf(a, Math.floor(.5 * a)) : 550 <= a ? new Vf(a, Math.floor(.6 * a)) : 468 <= a ? new Vf(a, Math.floor(.7 * a)) : new Vf(a, Math.floor(3.44 * a))
    }

    function ag(a, b) {
        Yf(a, b);
        var c = b.google_content_recommendation_ui_type.split(","),
            d = b.google_content_recommendation_columns_num.split(","),
            e = b.google_content_recommendation_rows_num.split(",");
        a: {
            if (c.length == d.length && d.length == e.length) {
                if (1 == c.length) {
                    var f = 0;
                    break a
                }
                if (2 == c.length) {
                    f = a < Nf ? 0 : 1;
                    break a
                }
                throw new J("The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + ("you are providing " + c.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".'));
            }
            if (c.length != d.length) throw new J('The parameter length of data-matched-content-ui-type does not match data-matched-content-columns-num. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".');
            throw new J('The parameter length of data-matched-content-columns-num does not match data-matched-content-rows-num. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".');
        }
        c = c[f];
        c = 0 == c.lastIndexOf("pub_control_", 0) ? c : "pub_control_" + c;
        d = +d[f];
        for (var g = Uf[c], h = d; a / h < g && 1 < h;) h--;
        h !== d && r.console && r.console.warn("adsbygoogle warning: data-matched-content-columns-num " + d + " is too large. We override it to " + h + ".");
        d = h;
        e = +e[f];
        Zf(b, c, d, e);
        if (Number.isNaN(d) || 0 === d) throw new J("Wrong value for data-matched-content-columns-num");
        if (Number.isNaN(e) || 0 === e) throw new J("Wrong value for data-matched-content-rows-num");
        b = Math.floor(((a - 8 * d - 8) / d * Qf[c] + Sf[c]) * e + 8 * e + 8);
        if (1500 < a) throw new J("Calculated slot width is too large: " + a);
        if (1500 < b) throw new J("Calculated slot height is too large: " + b);
        return new S(9, new Vf(a, b))
    }

    function Yf(a, b) {
        if (0 >= a) throw new J("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Zf(a, b, c, d) {
        a.google_content_recommendation_ui_type = b;
        a.google_content_recommendation_columns_num = c;
        a.google_content_recommendation_rows_num = d
    };

    function bg(a, b) {
        M.call(this, a, b)
    }
    ha(bg, M);
    bg.prototype.C = function () {
        return this.minWidth()
    };
    bg.prototype.J = function (a, b, c, d) {
        var e = this,
            f = this.C(b);
        He(a, d, d.parentElement, b, f, c);
        1 != c.google_ad_resize && (d.style.height = this.height() + "px", f = function () {
            var a = Pe(d);
            if (a) return a < e.height()
        }, b = (G(a, je.c) || H(a, Md.c) || H(a, Md.f)) && f(), a = (G(a, je.f) || G(a, de.F) || H(a, Md.B)) && f(), b ? (c.rpe = !1, c.ovlp = !0) : a && (c.rpe = !0, c.ovlp = !0))
    };

    function cg(a) {
        return function (b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function dg(a, b, c) {
        for (var d = a.length, e = null, f = 0; f < d; ++f) {
            var g = a[f];
            if (b(g)) {
                if (!c || c(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var T = [new R(970, 90, 2), new R(728, 90, 2), new R(468, 60, 2), new R(336, 280, 1), new R(320, 100, 2), new R(320, 50, 2), new R(300, 600, 4), new R(300, 250, 1), new R(250, 250, 1), new R(234, 60, 2), new R(200, 200, 1), new R(180, 150, 1), new R(160, 600, 4), new R(125, 125, 1), new R(120, 600, 4), new R(120, 240, 4), new R(120, 120, 1, !0)],
        eg = [T[6], T[12], T[3], T[0], T[7], T[14], T[1], T[8], T[10], T[4], T[15], T[2], T[11], T[5], T[13], T[9], T[16]];

    function fg(a, b, c, d, e) {
        "false" != e.google_full_width_responsive || c.location && "#gfwrffwaifhp" == c.location.hash ? "auto" == b || 0 < (De(b) & 1) || "autorelaxed" == b && H(c, fe.f) || gg(b) || 1 == e.google_ad_resize ? (b = Fe(a, c, d, e), c = !0 !== b ? {
            j: a,
            l: b
        } : {
            j: K(c) || a,
            l: !0
        }) : c = {
            j: a,
            l: 2
        } : c = {
            j: a,
            l: 1
        };
        b = c.l;
        return !0 !== b ? {
            j: a,
            l: b
        } : d.parentElement ? {
            j: c.j,
            l: b
        } : {
            j: a,
            l: b
        }
    }

    function hg(a, b, c, d, e) {
        var f = pd(247, rd, function () {
                return fg(a, b, c, d, e)
            }),
            g = f.j;
        f = f.l;
        var h = !0 === f,
            k = E(d.style.width),
            m = E(d.style.height),
            n = ig(g, b, c, d, e, h);
        g = n.v;
        h = n.u;
        var p = n.o,
            q = n.s,
            w = n.P;
        n = n.Ba;
        var ma = jg(b, w),
            L, ia = (L = N(d, c, "marginLeft", E)) ? L + "px" : "",
            za = (L = N(d, c, "marginRight", E)) ? L + "px" : "";
        L = N(d, c, "zIndex") || "";
        return new S(ma, g, w, n, f, h, p, q, ia, za, m, k, L)
    }

    function gg(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function ig(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, K(c)) ? 4 : 3 : De(b);
        var g = !1,
            h = !1,
            k = kg(c);
        if (k && 488 > K(c) || !k && xb()) {
            var m = Ce(d, c);
            var n = Ke(d, c);
            g = !n && m;
            h = n && m
        }
        n = (g || k ? eg : T).slice(0);
        var p = 488 > K(c),
            q = [Ie(a), Je(p, c, d, h), Lf(b)];
        null != e.google_max_responsive_height && q.push(Me(e.google_max_responsive_height));
        k || q.push(lg(p));
        p = [function (a) {
            return !a.Aa
        }];
        if (g || h) g = g && !k ? Ne(c, d) : Oe(c, d), p.push(Me(g));
        var w = dg(n, cg(q), cg(p));
        if (!w) throw new J("No slot size for availableWidth=" + a);
        g = pd(248, rd, function () {
            var b;
            a: if (f) {
                if (e.gfwrnh && (b = E(e.gfwrnh))) {
                    b = {
                        v: new bg(a, b),
                        u: !0,
                        o: !1,
                        s: !1
                    };
                    break a
                }
                if (kg(c) || "true" == e.google_full_width_responsive || !Ke(d, c) || e.google_resizing_allowed) {
                    b = !1;
                    var g = re(c).clientHeight,
                        h = Be(d, c),
                        k = c.google_lpabyc;
                    var m = Be(d, c);
                    var n = re(c).clientHeight;
                    if ((m = 0 == n ? null : m / n) && 2 < m && !c.google_bfabyc && (!k || h - k > g) && (g = .9 * re(c).clientHeight, h = Math.min(g, mg(c, d, e)), g && h == g)) {
                        h = c.google_pbfabyc;
                        b = !h;
                        if (H(c, Jd.A) || H(c, Jd.w) || H(c, Jd.D)) {
                            c.google_bfabyc = Be(d, c) + g;
                            b = {
                                v: new bg(a, Math.floor(g)),
                                u: !0,
                                o: !0,
                                s: !0
                            };
                            break a
                        }
                        h || (c.google_pbfabyc = Be(d, c) + g)
                    }
                    g = a / 1.2;
                    h = Math.min(g, mg(c, d, e));
                    if (h < .5 * g || 100 > h) h = g;
                    b = {
                        v: new bg(a, Math.floor(h)),
                        u: h < g ? 102 : !0,
                        o: !1,
                        s: b
                    }
                } else b = {
                    v: new bg(a, w.height()),
                    u: 101,
                    o: !1,
                    s: !1
                }
            } else b = {
                v: w,
                u: 100,
                o: !1,
                s: !1
            };
            return b
        });
        return {
            v: g.v,
            u: g.u,
            o: g.o,
            s: g.s,
            P: b,
            Ba: m
        }
    }

    function mg(a, b, c) {
        return c.google_resizing_allowed || "true" == c.google_full_width_responsive ? Infinity : Ne(a, b)
    }

    function jg(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function lg(a) {
        return function (b) {
            return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
        }
    }

    function kg(a) {
        return H(a, Md.f) || H(a, Md.B)
    };
    var ng = {
        "image-top": function (a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function (a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function (a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function (a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function (a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function og(a, b) {
        M.call(this, a, b)
    }
    ha(og, M);
    og.prototype.C = function () {
        return Math.min(1200, this.minWidth())
    };

    function pg(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f && "false" != e.google_full_width_responsive) {
            var g = Ee(b, c, a, .2, e);
            if (!0 !== g) e.gfwrnwer = g;
            else if (g = K(b)) {
                e.google_full_width_responsive_allowed = !0;
                var h = c.parentElement;
                if (h) {
                    b: for (var k = c, m = 0; 100 > m && k.parentElement; ++m) {
                        for (var n = k.parentElement.childNodes, p = 0; p < n.length; ++p) {
                            var q = n[p];
                            if (q != k && Ge(b, q)) break b
                        }
                        k = k.parentElement;
                        k.style.width = "100%";
                        k.style.height = "auto"
                    }
                    He(b, c, h, a, g, e);a = g
                }
            }
        }
        if (250 > a) throw new J("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        b = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new J("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new S(11, new M(b, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            d = Math.pow(10, 3);
            if (c = (e = f.match(/([+-][0-9a-z]+)/g)) && e.length) {
                a = [];
                for (g = 0; g < c; g++) a.push(parseInt(e[g], 36) / d);
                d = a
            } else d = null;
            if (!d) throw new J("Invalid data-ad-layout-key value: " + f);
            f = (b + -725) / 1E3;
            e = 0;
            c = 1;
            a = d.length;
            for (g = 0; g < a; g++) e += d[g] * c, c *= f;
            f = Math.ceil(1E3 * e - -725 + 10);
            if (isNaN(f)) throw new J("Invalid height: height=" + f);
            if (50 > f) throw new J("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new J("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new S(11, new M(b, f))
        }
        d = ng[f];
        if (!d) throw new J("Invalid data-ad-layout value: " + f);
        d = Math.ceil(d(b));
        return new S(11, "in-article" == f ? new og(b, d) : new M(b, d))
    };

    function U(a, b) {
        M.call(this, a, b)
    }
    ha(U, M);
    U.prototype.C = function () {
        return this.minWidth()
    };
    U.prototype.M = function (a) {
        return M.prototype.M.call(this, a) + "_0ads_al"
    };
    var qg = [new U(728, 15), new U(468, 15), new U(200, 90), new U(180, 90), new U(160, 90), new U(120, 90)];

    function rg(a, b, c) {
        var d = 250,
            e = 90;
        d = void 0 === d ? 130 : d;
        e = void 0 === e ? 30 : e;
        var f = dg(qg, Ie(a));
        if (!f) throw new J("No link unit size for width=" + a + "px");
        a = Math.min(a, 1200);
        f = f.height();
        b = Math.max(f, b);
        d = (new S(10, new U(a, Math.min(b, 15 == f ? e : d)))).a;
        b = d.minWidth();
        d = d.height();
        15 <= c && (d = c);
        return new S(10, new U(b, d))
    }

    function sg(a, b, c, d) {
        if ("false" == d.google_full_width_responsive) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = 1, a;
        var e = Fe(a, b, c, d);
        if (!0 !== e) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = e, a;
        e = K(b);
        if (!e) return a;
        d.google_full_width_responsive_allowed = !0;
        He(b, c, c.parentElement, a, e, d);
        return e
    };

    function tg(a, b, c, d, e) {
        var f;
        (f = K(b)) ? 488 > K(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, He(b, c, c.parentElement, a, f, e), f = {
            j: f,
            l: !0
        }) : f = {
            j: a,
            l: 5
        } : f = {
            j: a,
            l: 4
        }: f = {
            j: a,
            l: 10
        };
        var g = f;
        f = g.j;
        g = g.l;
        if (!0 !== g || a == f) return new S(12, new M(a, d), null, !0, g, 100);
        a = ig(f, "auto", b, c, e, !0);
        return new S(12, a.v, a.P, !0, g, a.u, a.o, a.s)
    };

    function ug(a) {
        var b = a.google_ad_format;
        if ("autorelaxed" == b) return Wf(a) ? 9 : 5;
        if (gg(b)) return 1;
        if ("link" == b) return 4;
        if ("fluid" == b) return 8
    }

    function vg(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && N(b, d, "width", E) || c.google_ad_width || 0;
        G(d, Od.f) && 4 === a && (c.google_ad_format = "auto", c.google_ad_slot = "", a = 1);
        var f = (f = wg(a, e, b, c, d)) ? f : hg(e, c.google_ad_format, d, b, c);
        f.a.J(d, e, c, b);
        Mf(f, e, c);
        1 != a && (a = f.a.height(), b.style.height = a + "px")
    }

    function wg(a, b, c, d, e) {
        var f = d.google_ad_height || N(c, e, "height", E);
        switch (a) {
            case 5:
                return a = pd(247, rd, function () {
                    return fg(b, d.google_ad_format, e, c, d)
                }), f = a.j, a = a.l, !0 === a && b != f && He(e, c, c.parentElement, b, f, d), !0 === a ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = a), Xf(f, d);
            case 9:
                return ag(b, d);
            case 4:
                return a = sg(b, e, c, d), rg(a, Oe(e, c), f);
            case 8:
                return pg(b, e, c, f, d);
            case 10:
                return tg(b, e, c, f, d)
        }
    };

    function V(a) {
        this.h = [];
        this.b = a || window;
        this.a = 0;
        this.g = null;
        this.i = 0
    }
    var xg;
    l = V.prototype;
    l.ya = function (a, b) {
        0 != this.a || 0 != this.h.length || b && b != window ? this.$(a, b) : (this.a = 2, this.ia(new yg(a, window)))
    };
    l.$ = function (a, b) {
        this.h.push(new yg(a, b || this.b));
        zg(this)
    };
    l.Ea = function (a) {
        this.a = 1;
        if (a) {
            var b = qd(188, ya(this.ha, this, !0));
            this.g = this.b.setTimeout(b, a)
        }
    };
    l.ha = function (a) {
        a && ++this.i;
        1 == this.a && (null != this.g && (this.b.clearTimeout(this.g), this.g = null), this.a = 0);
        zg(this)
    };
    l.Ja = function () {
        return !(!window || !Array)
    };
    l.za = function () {
        return this.i
    };

    function zg(a) {
        var b = qd(189, ya(a.La, a));
        a.b.setTimeout(b, 0)
    }
    l.La = function () {
        if (0 == this.a && this.h.length) {
            var a = this.h.shift();
            this.a = 2;
            var b = qd(190, ya(this.ia, this, a));
            a.a.setTimeout(b, 0);
            zg(this)
        }
    };
    l.ia = function (a) {
        this.a = 0;
        a.b()
    };

    function Ag(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function Bg(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && Ag(a) && fc(a.nq) && fc(a.nqa) && fc(a.al) && fc(a.rl)
    }

    function Cg() {
        if (xg && Ag(xg)) return xg;
        var a = Fd(),
            b = a.google_jobrunner;
        return Bg(b) ? xg = b : a.google_jobrunner = xg = new V(a)
    }

    function Dg(a, b) {
        Cg().nq(a, b)
    }

    function Eg(a, b) {
        Cg().nqa(a, b)
    }
    V.prototype.nq = V.prototype.ya;
    V.prototype.nqa = V.prototype.$;
    V.prototype.al = V.prototype.Ea;
    V.prototype.rl = V.prototype.ha;
    V.prototype.sz = V.prototype.Ja;
    V.prototype.tc = V.prototype.za;

    function yg(a, b) {
        this.b = a;
        this.a = b
    };

    function Fg(a, b) {
        var c = F(b);
        if (c) {
            c = K(c);
            var d = D(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" != d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function Gg(a) {
        var b = this;
        this.a = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {
            handlers: {},
            upd: function (a, d) {
                var c = Hg("rx", a),
                    f = Number;
                a: {
                    if (a && (a = a.match("dt=([^&]+)")) && 2 == a.length) {
                        a = a[1];
                        break a
                    }
                    a = ""
                }
                f = f(a);
                f = (new Date).getTime() - f;
                c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= f ? "M" : 0 <= f ? f : "-M"));
                b.set(d, c);
                return c
            }
        });
        this.b = a.google_iframe_oncopy
    }
    Gg.prototype.set = function (a, b) {
        var c = this;
        this.b.handlers[a] = b;
        this.a.addEventListener && this.a.addEventListener("load", function () {
            var b = c.a.document.getElementById(a);
            try {
                var e = b.contentWindow.document;
                if (b.onload && e && (!e.body || !e.body.firstChild)) b.onload()
            } catch (f) {}
        }, !1)
    };

    function Hg(a, b) {
        var c = new RegExp("\\b" + a + "=(\\d+)"),
            d = c.exec(b);
        d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
        return b
    }
    var Ig;
    var W = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
    /[\x00&<>"']/.test(W) && (-1 != W.indexOf("&") && (W = W.replace(Ia, "&amp;")), -1 != W.indexOf("<") && (W = W.replace(Ja, "&lt;")), -1 != W.indexOf(">") && (W = W.replace(Ka, "&gt;")), -1 != W.indexOf('"') && (W = W.replace(La, "&quot;")), -1 != W.indexOf("'") && (W = W.replace(Ma, "&#39;")), -1 != W.indexOf("\x00") && (W = W.replace(Na, "&#0;")));
    Ig = W;
    var Jg = {},
        Kg = (Jg.google_ad_modifications = !0, Jg.google_analytics_domain_name = !0, Jg.google_analytics_uacct = !0, Jg.google_pause_ad_requests = !0, Jg);

    function Lg() {
        var a = r;
        this.b = a = void 0 === a ? r : a;
        this.i = "https://securepubads.g.doubleclick.net/static/3p_cookie.html";
        this.a = 2;
        this.g = [];
        this.h = !1;
        a: {
            a = Bb(!1, 50);
            var b = zb(r);b && a.unshift(b);a.unshift(r);
            var c;
            for (b = 0; b < a.length; ++b) try {
                var d = a[b],
                    e = Mg(d);
                if (e) {
                    this.a = Ng(e);
                    if (2 != this.a) break a;
                    !c && C(d) && (c = d)
                }
            } catch (f) {}
            this.b = c || this.b
        }
    }

    function Og(a) {
        if (2 != Pg(a)) {
            for (var b = 1 == Pg(a), c = 0; c < a.g.length; c++) try {
                a.g[c](b)
            } catch (d) {}
            a.g = []
        }
    }

    function Qg(a) {
        var b = Mg(a.b);
        b && 2 == a.a && (a.a = Ng(b))
    }

    function Pg(a) {
        Qg(a);
        return a.a
    }

    function Rg(a) {
        var b = Sg;
        b.g.push(a);
        if (2 != b.a) Og(b);
        else if (b.h || (Rb(b.b, "message", function (a) {
                var c = Mg(b.b);
                if (c && a.source == c && 2 == b.a) {
                    switch (a.data) {
                        case "3p_cookie_yes":
                            b.a = 1;
                            break;
                        case "3p_cookie_no":
                            b.a = 0
                    }
                    Og(b)
                }
            }), b.h = !0), Mg(b.b)) Og(b);
        else {
            a = ub(new tb(b.b.document), "IFRAME");
            a.src = b.i;
            a.name = "detect_3p_cookie";
            a.style.visibility = "hidden";
            a.style.display = "none";
            a.onload = function () {
                Qg(b);
                Og(b)
            };
            try {
                b.b.document.body.appendChild(a)
            } catch (c) {}
        }
    }

    function Mg(a) {
        return a.frames && a.frames[Va("detect_3p_cookie")] || null
    }

    function Ng(a) {
        return Lb(a, "3p_cookie_yes") ? 1 : Lb(a, "3p_cookie_no") ? 0 : 2
    };
    var Tg = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Ug = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;

    function Vg(a) {
        return Tg.test(a) && !Ug.test(a)
    }
    var Wg = r,
        Sg;

    function Xg(a) {
        a = "https://" + ("adservice" + a + "/adsid/integrator.js");
        var b = ["domain=" + encodeURIComponent(r.location.hostname)];
        X[3] >= +new Date && b.push("adsid=" + encodeURIComponent(X[1]));
        return a + "?" + b.join("&")
    }
    var X, Y;

    function Yg() {
        Wg = r;
        X = Wg.googleToken = Wg.googleToken || {};
        var a = +new Date;
        X[1] && X[3] > a && 0 < X[2] || (X[1] = "", X[2] = -1, X[3] = -1, X[4] = "", X[6] = "");
        Y = Wg.googleIMState = Wg.googleIMState || {};
        Vg(Y[1]) || (Y[1] = ".google.com");
        "array" == ta(Y[5]) || (Y[5] = []);
        "boolean" == typeof Y[6] || (Y[6] = !1);
        "array" == ta(Y[7]) || (Y[7] = []);
        oa(Y[8]) || (Y[8] = 0)
    }
    var Z = {
        N: function () {
            return 0 < Y[8]
        },
        Ga: function () {
            Y[8]++
        },
        Ha: function () {
            0 < Y[8] && Y[8]--
        },
        Ia: function () {
            Y[8] = 0
        },
        Oa: function () {
            return !1
        },
        aa: function () {
            return Y[5]
        },
        Y: function (a) {
            try {
                a()
            } catch (b) {
                r.setTimeout(function () {
                    throw b;
                }, 0)
            }
        },
        ga: function () {
            if (!Z.N()) {
                var a = r.document,
                    b = function (b) {
                        b = Xg(b);
                        a: {
                            try {
                                var c = pa();
                                break a
                            } catch (g) {}
                            c = void 0
                        }
                        xf(a, b, "preload", "script", c);
                        c = a.createElement("script");
                        c.type = "text/javascript";
                        c.onerror = function () {
                            return r.processGoogleToken({}, 2)
                        };
                        b = vb(b);
                        sb(c, b);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(c), Z.Ga()
                        } catch (g) {}
                    },
                    c = Y[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT", b);
                r.setTimeout(function () {
                    return r.processGoogleToken(d, 1)
                }, 1E3)
            }
        }
    };

    function Zg(a) {
        Yg();
        var b = Wg.googleToken[5] || 0;
        a && (0 != b || X[3] >= +new Date ? Z.Y(a) : (Z.aa().push(a), Z.ga()));
        X[3] >= +new Date && X[2] >= +new Date || Z.ga()
    }

    function $g(a) {
        r.processGoogleToken = r.processGoogleToken || function (a, c) {
            var b = a;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? 0 : c;
            a = b.newToken || "";
            var e = "NT" == a,
                f = parseInt(b.freshLifetimeSecs || "", 10),
                g = parseInt(b.validLifetimeSecs || "", 10),
                h = b["1p_jar"] || "";
            b = b.pucrd || "";
            Yg();
            1 == c ? Z.Ia() : Z.Ha();
            var k = Wg.googleToken = Wg.googleToken || {},
                m = 0 == c && a && t(a) && !e && oa(f) && 0 < f && oa(g) && 0 < g && t(h);
            e = e && !Z.N() && (!(X[3] >= +new Date) || "NT" == X[1]);
            var n = !(X[3] >= +new Date) && 0 != c;
            if (m || e || n) e = +new Date, f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && Sb("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c, void 0), k[5] = c, k[1] = a, k[2] = f, k[3] = g, k[4] = h, k[6] = b, Yg();
            if (m || !Z.N()) {
                c = Z.aa();
                for (a = 0; a < c.length; a++) Z.Y(c[a]);
                c.length = 0
            }
        };
        Zg(a)
    }

    function ah(a) {
        Sg = Sg || new Lg;
        Rg(function (b) {
            b && a()
        })
    };
    var bh = Va("script");

    function ch() {
        B.google_sa_impl && !B.document.getElementById("google_shimpl") && (B.google_sa_queue = null, B.google_sl_win = null, B.google_sa_impl = null);
        if (!B.google_sa_queue) {
            B.google_sa_queue = [];
            B.google_sl_win = B;
            B.google_process_slots = function () {
                return dh(B)
            };
            var a = eh();
            xf(B.document, a, "preload", "script");
            !v(x, "Chrome") && !v(x, "CriOS") || v(x, "Edge") ? Cb(B.document, a).id = "google_shimpl" : (a = document.createElement("IFRAME"), a.id = "google_shimpl", a.style.display = "none", B.document.documentElement.appendChild(a), Jf(B, "google_shimpl", "<!doctype html><html><body>" + ("<" + bh + ">") + "google_sl_win=window.parent;google_async_iframe_id='google_shimpl';" + ("</" + bh + ">") + ["<", bh, ' src="', eh("/show_ads_impl.js"), '"></', bh, ">"].join("") + "</body></html>"), a.contentWindow.document.close())
        }
    }
    var dh = qd(215, function (a) {
        var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || sd("shimpl", {
            t: "no_fn"
        });
        "function" == ta(c) && pd(216, rd, c);
        b.length && a.setTimeout(function () {
            return dh(a)
        }, 0)
    });

    function fh(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function eh(a) {
        a = void 0 === a ? "/show_ads_impl.js" : a;
        var b = Zb ? "https" : "http";
        a: {
            if (Xb) try {
                var c = B.google_cafe_host || B.top.google_cafe_host;
                if (c) {
                    var d = c;
                    break a
                }
            } catch (e) {}
            d = bc(void 0)
        }
        return zd(d, ["/pagead/js/", Wb(), "/r20180604", a, ""].join(""), b)
    }

    function hh(a, b, c, d) {
        return function () {
            var e = !1;
            d && Cg().al(3E4);
            try {
                Jf(a, b, c), e = !0
            } catch (g) {
                var f = Fd().google_jobrunner;
                Bg(f) && f.rl()
            }
            e && (e = Hg("google_async_rrc", c), (new Gg(a)).set(b, hh(a, b, e, !1)))
        }
    }

    function ih(a) {
        if (!Kf) a: {
            for (var b = Bb(), c = 0; c < b.length; c++) try {
                var d = b[c].frames.google_esf;
                if (d) {
                    Kf = d;
                    break a
                }
            } catch (e) {}
            Kf = null
        }
        if (!Kf) {
            if (/[^a-z0-9-]/.test(a)) return null;
            b = document.createElement("IFRAME");
            b.id = "google_esf";
            b.name = "google_esf";
            c = zd(ac(), ["/pagead/html/", Wb(), "/r20180604/zrt_lookup.html#", encodeURIComponent("")].join(""));
            b.src = c;
            b.style.display = "none";
            b.setAttribute("data-ad-client", nf(a));
            return b
        }
        return null
    }

    function jh(a, b, c) {
        kh(a, b, c, function (a, b, f) {
            a = a.document;
            for (var d = b.id, e = 0; !d || a.getElementById(d + "_anchor");) d = "aswift_" + e++;
            b.id = d;
            b.name = d;
            d = Number(f.google_ad_width || 0);
            e = Number(f.google_ad_height || 0);
            var k = f.ds || "";
            k && (k += k.endsWith(";") ? "" : ";");
            var m = "";
            if (!f.google_enable_single_iframe) {
                m = ["<iframe"];
                for (n in b) b.hasOwnProperty(n) && m.push(n + "=" + b[n]);
                m.push('style="' + ("left:0;position:absolute;top:0;border:0px;" + ("width:" + d + "px;") + ("height:" + e + "px;")) + '"');
                m.push("></iframe>");
                m = m.join(" ")
            }
            var n = b.id;
            var p = "";
            p = void 0 === p ? "" : p;
            d = "border:none;height:" + e + "px;margin:0;padding:0;" + ("position:relative;visibility:visible;width:" + d + "px;") + "background-color:transparent;";
            n = ['<ins id="' + (n + "_expand") + '"', ' style="display:inline-table;' + d + (void 0 === k ? "" : k) + '"', p ? ' data-ad-slot="' + p + '">' : ">", '<ins id="' + (n + "_anchor") + '" style="display:block;' + d + '">', m, "</ins></ins>"].join("");
            16 == f.google_reactive_ad_format ? (f = a.createElement("div"), f.innerHTML = n, c.appendChild(f.firstChild)) : c.innerHTML = n;
            return b.id
        })
    }

    function kh(a, b, c, d) {
        var e = b.google_ad_width,
            f = b.google_ad_height;
        G(a, le.f) && (b.google_enable_single_iframe = !0);
        var g = {};
        null != e && (g.width = e && '"' + e + '"');
        null != f && (g.height = f && '"' + f + '"');
        g.frameborder = '"0"';
        g.marginwidth = '"0"';
        g.marginheight = '"0"';
        g.vspace = '"0"';
        g.hspace = '"0"';
        g.allowtransparency = '"true"';
        g.scrolling = '"no"';
        g.allowfullscreen = '"true"';
        g.onload = '"' + Ig + '"';
        d = d(a, g, b);
        lh(a, c, b);
        (c = ih(b.google_ad_client)) && a.document.documentElement.appendChild(c);
        c = Ba;
        e = (new Date).getTime();
        b.google_lrv = Wb();
        b.google_async_iframe_id = d;
        b.google_unique_id = ic(a);
        b.google_start_time = c;
        b.google_bpp = e > c ? e - c : 1;
        b.google_async_rrc = 0;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[d] = b;
        a.google_t12n_vars = tf;
        if (b.google_enable_single_iframe) {
            var h = {
                pubWin: a,
                iframeWin: null,
                vars: b
            };
            fh(a, function () {
                a.google_sa_impl(h)
            }, a.document.getElementById(d + "_anchor") ? Dg : Eg)
        } else fh(a, hh(a, d, ["<!doctype html><html><body>", "<" + bh + ">", "google_sl_win=window.parent;google_iframe_start_time=new Date().getTime();", 'google_async_iframe_id="' + d + '";', "</" + bh + ">", "<" + bh + ">window.parent.google_sa_impl(" + ("{iframeWin: window, pubWin: window.parent, vars: " + ("window.parent['google_sv_map']['" + d + "']") + "}") + ");</" + bh + ">", "</body></html>"].join(""), !0), a.document.getElementById(d) ? Dg : Eg)
    }

    function lh(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !gb[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if (!oa(c.google_reactive_sra_index) || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Fb(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, m = 0, n = 0; n < k.length; ++n) {
                            var p = k[n];
                            if (p.nodeName && p.nodeName.toString().toLowerCase() === g) {
                                if (b === p) {
                                    g = "." + m;
                                    break a
                                }++m
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var q = a.parent;
                for (e = 0; q && q !== a && 25 > e; ++e) {
                    var w = q.frames;
                    for (d = 0; d < w.length; ++d)
                        if (a === w[d]) {
                            b.push(d);
                            break
                        } a = q;
                    q = a.parent
                }
            } catch (ma) {}
            c.google_ad_dom_fingerprint = Fb(h + b.join()).toString()
        }
    }

    function mh(a, b) {
        var c = navigator;
        a && b && c && (a = a.document, b = nf(b), /[^a-z0-9-]/.test(b) || ((c = Ha("r20160913")) && (c += "/"), Cb(a, zd("pagead2.googlesyndication.com", "/pub-config/" + c + b + ".js"))))
    };

    function nh(a, b) {
        a = a.attributes;
        for (var c = a.length, d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = Ha(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                if (!b.hasOwnProperty(f)) {
                    e = e.value;
                    var g = {};
                    g = (g.google_reactive_ad_format = Tb, g.google_allow_expandable_ads = Kb, g);
                    e = g.hasOwnProperty(f) ? g[f](e, null) : e;
                    null === e || (b[f] = e)
                }
            }
        }
    }

    function oh(a, b, c) {
        nh(a, b);
        if (c.document && c.document.body && !ug(b) && !b.google_reactive_ad_format) {
            var d = parseInt(a.style.width, 10),
                e = Fg(a, c);
            if (0 < e && d > e) {
                var f = parseInt(a.style.height, 10);
                d = !!gb[d + "x" + f];
                if (G(c, Wd.K)) b.google_ad_resize = 0;
                else {
                    var g = e;
                    if (d) {
                        var h = hb(e, f);
                        if (h) g = h, b.google_ad_format = h + "x" + f + "_0ads_al";
                        else throw Error("TSS=" + e);
                    }
                    b.google_ad_resize = 1;
                    b.google_ad_width = g;
                    d || (b.google_ad_format = null, b.google_override_format = !0);
                    e = g;
                    a.style.width = e + "px";
                    f = hg(e, "auto", c, a, b);
                    g = e;
                    f.a.J(c, g, b, a);
                    Mf(f, g, b);
                    f = f.a;
                    b.google_responsive_formats = null;
                    f.minWidth() > e && !d && (b.google_ad_width = f.minWidth(), a.style.width = f.minWidth() + "px")
                }
            }
        }
        d = b.google_reactive_ad_format;
        if (!b.google_enable_content_recommendations || 1 != d && 2 != d) {
            d = a.offsetWidth || N(a, c, "width", E) || b.google_ad_width || 0;
            a: {
                e = Aa(hg, d, "auto", c, a, b, !1, !0);h = G(c, $d.c);
                var k = G(c, $d.f);f = G(c, be.c);g = G(c, be.f);
                var m = qf(c, 11, b.google_ad_client),
                    n = G(c, de.f);
                var p = b.google_ad_client;p = null != of (c, void 0 === p ? "" : p);
                if (!(h || k || m || p) || !xb() || b.google_reactive_ad_format || ug(b) || Ae(a, b) || 1 == b.google_ad_resize || nc(c) != c) d = !1;
                else {
                    for (k = a; k; k = k.parentElement)
                        if (m = D(k, c), (p = !m) || (p = !(0 <= Ca(["static", "relative"], m.position))), p) {
                            d = !1;
                            break a
                        } if (!0 !== Ee(c, a, d, .3, b)) d = !1;
                    else {
                        b.google_resizing_allowed = !0;
                        k = lf(c.location, "google_responsive_slot_debug") || lf(c.location, "google_responsive_slot_preview") || Hf(c, $d.c, $d.f, be.c, be.f);
                        m = O(wf(), 142);
                        if (k || Math.random() < m) b.ovlp = !0;
                        h || g || n ? (h = {}, Mf(e(), d, h), b.google_resizing_width = h.google_ad_width, b.google_resizing_height = h.google_ad_height, h.ds && (b.ds = h.ds), b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0);
                        (d = f ? "AutoOptimizeAdSizeVariant" : g ? "AutoOptimizeAdSizeOriginal" : null) && (b.google_ad_channel = b.google_ad_channel ? [b.google_ad_channel, d].join("+") : d);
                        d = !0
                    }
                }
            }
            if (e = ug(b)) vg(e, a, b, c, d);
            else {
                if (Ae(a, b)) {
                    if (d = D(a, c)) a.style.width = d.width, a.style.height = d.height, ze(d, b);
                    b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                    b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                    b.google_loader_features_used = 256;
                    d = cc(c);
                    b.google_responsive_auto_format = d ? d.data && "rspv" == d.data.autoFormat ? 13 : 14 : 12
                } else ze(a.style, b), b.google_ad_output && "html" != b.google_ad_output || 300 != b.google_ad_width || 250 != b.google_ad_height || (d = a.style.width, a.style.width = "100%", e = a.offsetWidth, a.style.width = d, b.google_available_width = e);
                c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive && !G(c, Kd.f) ? vg(10, a, b, c, !1) : G(c, Ld.f) && 12 == b.google_responsive_auto_format && (a = Fe(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
            }
        } else b.google_ad_width = K(c), b.google_ad_height = 50, a.style.display = "none"
    };

    function ph(a) {
        null !== Jb(a.getAttribute("width")) && a.setAttribute("width", 0);
        null !== Jb(a.getAttribute("height")) && a.setAttribute("height", 0);
        a.style.width = "0px";
        a.style.height = "0px"
    };
    var qh = !1,
        rh = 0,
        sh = !1,
        th = !1,
        uh = !1,
        vh = !1;

    function wh(a) {
        return mc.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
    }

    function xh(a, b) {
        var c = window;
        a.setAttribute("data-adsbygoogle-status", "done");
        yh(a, b, c)
    }

    function yh(a, b, c) {
        var d = lc();
        d.google_spfd || (d.google_spfd = oh);
        (d = b.google_reactive_ads_config) || oh(a, b, c);
        if (!zh(a, b, c)) {
            d || (c.google_lpabyc = zf(c, a));
            if (d) {
                if (qh) {
                    if (d.page_level_pubvars && d.page_level_pubvars.pltais) return;
                    throw new J("Only one 'enable_page_level_ads' allowed per page.");
                }
                qh = !0
            } else hc(c);
            sh || (sh = !0, mh(c, b.google_ad_client));
            ec(Kg, function (a, d) {
                b[d] = b[d] || c[d]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === rh;
            if ((d = b.google_ad_output) && "html" != d) throw new J("No support for google_ad_output=" + d);
            pd(164, rd, function () {
                jh(c, b, a)
            })
        }
    }

    function zh(a, b, c) {
        var d = b.google_reactive_ads_config;
        if (d) {
            var e = d.page_level_pubvars;
            e = (va(e) ? e : {}).google_tag_origin
        }
        if ("js" === b.google_ad_output) return !1;
        var f = e || b.google_tag_origin;
        e = t(a.className) && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className);
        var g = c.google_bfabyc,
            h = c.google_pbfabyc,
            k = Be(a, c),
            m = re(c).clientHeight;
        h && !b.ebfa && (b.ebfaca = !0, k - h < m && (b.ebfana = !0));
        if ((!g || b.google_bfa ? 0 : H(c, Jd.w) || k && H(c, Jd.A) && k - g < m) && !e) return ph(a), Ah(a), !0;
        h = b.google_ad_slot;
        g = oc(c);
        qc(g.ad_whitelist || [], h, f) ? f = null : (f = g.space_collapsing || "none", f = (h = qc(g.ad_blacklist || [], h)) ? {
            W: !0,
            ka: h.space_collapsing || f
        } : g.remove_ads_by_default ? {
            W: !0,
            ka: f,
            xa: g.dont_remove_atf
        } : null);
        if (e = f && f.W && "on" != b.google_adtest && !e) {
            a: {
                try {
                    if (a.parentNode && 0 < a.offsetWidth && 0 < a.offsetHeight && a.style && "none" !== a.style.display && "hidden" !== a.style.visibility && (!a.style.opacity || 0 !== Number(a.style.opacity))) {
                        var n = a.getBoundingClientRect();
                        var p = 0 < n.right && 0 < n.bottom;
                        break a
                    }
                } catch (q) {}
                p = !1
            }
            p && (p = Be(a, c) < re(c).clientHeight);e = !(p && f.xa)
        }
        if (e) return Ah(a), c = c.google_sv_map = c.google_sv_map || {}, b.google_ad_slot && (c[b.google_ad_slot] = b, a.setAttribute("google_ad_slot", b.google_ad_slot)), "slot" == f.ka && ph(a), !0;
        if ((p = D(a, c)) && "none" == p.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (r.console && r.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Bh(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (wh(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
        }
        return null
    }

    function Ch() {
        var a = document.createElement("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        Mb(a);
        return a
    }

    function Dh(a) {
        var b = {};
        ec(rc, function (c, d) {
            !1 === a.enable_page_level_ads ? b[d] = !1 : a.hasOwnProperty(d) && (b[d] = a[d])
        });
        va(a.enable_page_level_ads) && (b.page_level_pubvars = a.enable_page_level_ads);
        var c = Ch();
        fb.body.appendChild(c);
        var d = {};
        d = (d.google_reactive_ads_config = b, d.google_ad_client = a.google_ad_client, d);
        d.google_pause_ad_requests = uh;
        xh(c, d)
    }

    function Eh(a) {
        function b() {
            return Dh(a)
        }
        var c = F(window);
        if (!c) throw new J("Page-level tag does not work inside iframes.");
        qe(c).wasPlaTagProcessed = !0;
        fb.body || "complete" == fb.readyState || "interactive" == fb.readyState ? b() : Rb(fb, "DOMContentLoaded", id(191, b))
    }

    function Fh(a) {
        var b = {};
        pd(165, td, function () {
            Gh(a, b)
        }, function (c) {
            c.client = c.client || b.google_ad_client || a.google_ad_client;
            c.slotname = c.slotname || b.google_ad_slot;
            c.tag_origin = c.tag_origin || b.google_tag_origin
        })
    }

    function Gh(a, b) {
        Ba = (new Date).getTime();
        ch();
        a: {
            if (void 0 != a.enable_page_level_ads) {
                if (t(a.google_ad_client)) {
                    var c = !0;
                    break a
                }
                throw new J("'google_ad_client' is missing from the tag config.");
            }
            c = !1
        }
        c ? Hh(a, b) : ((c = a.params) && ec(c, function (a, c) {
            b[c] = a
        }), "js" === b.google_ad_output ? console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.") : (a = Ih(a.element), nh(a, b), 0 === rh && sf(b) && (c = yf(b.google_ad_client), Hh(c), vh = !0), 0 === rh && (rh = 2), b.google_pause_ad_requests = uh, xh(a, b)))
    }

    function Hh(a, b) {
        if (vh) vh = !1;
        else {
            0 === rh && (rh = 1);
            b && a.tag_partner && (pc(r, a.tag_partner), pc(b, a.tag_partner));
            if (!th) {
                th = !0;
                try {
                    var c = r.localStorage.getItem("google_ama_config")
                } catch (sc) {
                    c = null
                }
                try {
                    var d = c ? new zc(c ? JSON.parse(c) : null) : null
                } catch (sc) {
                    d = null
                }
                if (b = d)
                    if (c = $a(b, Bc, 3), !c || A(c, 1) <= +new Date) try {
                        r.localStorage.removeItem("google_ama_config")
                    } catch (sc) {
                        yd(r, {
                            lserr: 1
                        })
                    } else {
                        if ($a(b, Ec, 13)) switch (c = !0, A($a(b, Ec, 13), 1)) {
                            case 1:
                            case 2:
                            case 3:
                                c = !1;
                            case 4:
                            case 5:
                            case 6:
                                c = void 0 === c ? !1 : c, d = oc(r), d.remove_ads_by_default = !0, d.space_collapsing = "slot", d.dont_remove_atf = c
                        }
                        Cd(3, [bb(b)]);
                        c = a.google_ad_client;
                        d = xd;
                        if (a.enable_page_level_ads && a.enable_page_level_ads.google_ad_channel) {
                            var e = {};
                            e = new vd(null, (e.google_ad_channel = a.enable_page_level_ads.google_ad_channel, e));
                            d = wd(d, e)
                        }
                        try {
                            var f = Za(b, 5);
                            if (0 < f.length) {
                                var g = new Cc,
                                    h = f || [];
                                2 < g.i ? g.b[2 + g.h] = h : (Ya(g), g.g[2] = h);
                                var k = g
                            } else b: {
                                h = r.location.pathname;
                                var m = ab(b, Cc, 7);g = {};
                                for (f = 0; f < m.length; ++f) {
                                    var n = A(m[f], 1);
                                    oa(n) && !g[n] && (g[n] = m[f])
                                }
                                for (var p = h.replace(/(^\/)|(\/$)/g, "");;) {
                                    var q = Fb(p);
                                    if (g[q]) {
                                        k = g[q];
                                        break b
                                    }
                                    if (!p) {
                                        k = null;
                                        break b
                                    }
                                    p = p.substring(0, p.lastIndexOf("/"))
                                }
                            }
                            var w;
                            if (w = k) a: {
                                var ma = Za(k, 2);
                                if (ma)
                                    for (h = 0; h < ma.length; h++)
                                        if (1 == ma[h]) {
                                            w = !0;
                                            break a
                                        } w = !1
                            }
                            if (w) {
                                if (A(k, 4)) {
                                    w = {};
                                    var L = new vd(null, (w.google_package = A(k, 4), w));
                                    d = wd(d, L)
                                }
                                var ia = new af;
                                (new ff(new Ye(c, b, d), ia)).start();
                                var za = ia.b;
                                var gh = Aa(jf, r);
                                if (za.b) throw Error("Then functions already set.");
                                za.b = Aa(hf, r);
                                za.g = gh;
                                df(za)
                            }
                        } catch (sc) {
                            yd(r, {
                                atf: -1
                            })
                        }
                    }
            }
            Eh(a)
        }
    }

    function Ih(a) {
        if (a) {
            if (!wh(a) && (a.id ? a = Bh(a.id) : a = null, !a)) throw new J("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new J("'element' is not a good DOM element.");
        } else if (a = Bh(), !a) throw new J("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Jh() {
        md();
        pd(166, ud, Kh)
    }

    function Kh() {
        var a = dc(cc(B)) || B,
            b = oc(a);
        if (!b.plle) {
            b.plle = !0;
            var c = b.eids = b.eids || [],
                d = b.loeids = b.loeids || [];
            b = wf();
            var e = wf();
            var f = F(a) || a;
            f = lf(f.location, "google_responsive_slot_debug") || lf(f.location, "google_responsive_slot_preview");
            var g = qf(a, 11),
                h = null != of (a, "");
            f ? (f = $d, g = ae, e = f.f) : h ? (f = de, g = ee, e = If(a, new Sc(0, 999), O(e, 152), O(e, 153), [f.c, f.f, f.F], 2)) : g ? (f = be, g = ce, e = If(a, new Sc(0, 999), O(e, 120), O(e, 121), [f.c, f.f], 2)) : (f = $d, g = ae, e = If(a, Ff, O(e, 96), O(e, 97), [f.c, f.f]));
            e ? (h = {}, f = (h[f.c] = g.c, h[f.f] = g.f, h[f.F] = g.F, h)[e], e = {
                Da: e,
                Fa: f
            }) : e = null;
            f = e || {};
            e = f.Da;
            g = f.Fa;
            e && g && (P(c, e), P(c, g));
            f = Kd;
            e = Q(a, O(b, 136), [f.c, f.f]);
            P(c, e);
            qf(a, 12) && (f = Hd, h = Gd, e = If(a, new Sc(0, 999), O(b, 149), O(b, 150), [f.c, f.f], 4), P(d, e), e == f.c ? g = h.c : e == f.f ? g = h.f : g = "", P(c, g));
            f = Jd;
            e = If(a, Cf, O(b, 160), O(b, 161), [f.c, f.A, f.w, f.D]);
            P(d, e);
            h = Id;
            e == f.c ? g = h.c : e == f.A ? g = h.A : e == f.w ? g = h.w : e == f.D ? g = h.D : g = "";
            P(c, g);
            f = Qd;
            P(c, If(a, Df, O(b, 9), O(b, 10), [f.c, f.sa]));
            Ha("") && P(d, "");
            f = Wd;
            e = Q(a, O(b, 11), [f.c, f.K]);
            P(c, e);
            h = "";
            e === f.c ? h = "62710018" : e === f.K && (h = "62710017");
            P(c, h);
            f = ie;
            e = Q(a, O(b, 146), [f.c, f.f]);
            P(c, e);
            f = Xd;
            e = Q(a, O(b, 56), [f.c, f.f]);
            P(c, e);
            f = Rd;
            e = Q(a, O(b, 13), [f.m, f.c]);
            P(c, e);
            e = Q(a, 0, [f.R]);
            P(c, e);
            f = Sd;
            e = Q(a, O(b, 60), [f.m, f.c]);
            P(c, e);
            e == Sd.m && (f = Td, e = Q(a, O(b, 66), [f.m, f.c]), P(c, e), f = Vd, e = Q(a, O(b, 137), [f.m, f.c]), P(c, e), e == Td.m && (f = Ud, e = Q(a, O(b, 135), [f.m, f.c]), P(c, e)));
            f = Ld;
            e = Q(a, O(b, 98), [f.c, f.f]);
            P(c, e);
            if (Kb(b.a[77], !1) || Xb) f = Yd, e = Q(a, O(b, 76), [f.c, f.V, f.L, f.U]), P(c, e), e || (e = Q(a, O(b, 83), [f.T]), P(c, e));
            f = Md;
            e = If(a, Gf, O(b, 157), O(b, 158), [f.c, f.f, f.B]);
            P(d, e);
            h = Nd;
            e == f.c ? g = h.c : e == f.f ? g = h.f : e == f.B ? g = h.B : g = "";
            P(c, g);
            f = Od;
            e = If(a, Bf, O(b, 166), O(b, 167), [f.c, f.f]);
            P(c, e);
            h = Pd;
            e == f.c ? g = h.c : e == f.f ? g = h.f : g = "";
            P(c, g);
            f = Zd;
            e = Q(a, O(b, 92), [f.c, f.f]);
            P(c, e);
            f = fe;
            e = If(a, Ef, O(b, 99), O(b, 100), [f.c, f.f]);
            P(d, e);
            h = ge;
            e == f.c ? g = h.c : e == f.f ? g = h.f : g = "";
            P(c, g);
            f = he;
            e = Q(a, O(b, 127), [f.c, f.qa, f.ra]);
            P(c, e);
            f = je;
            if (e = If(a, Af, O(b, 163), O(b, 164), [f.c, f.f])) h = ke, d = {}, g = (d[f.c] = h.c, d[f.f] = h.f, d)[e], P(c, e), P(c, g);
            f = le;
            e = Q(a, O(b, 165), [f.c, f.f]);
            P(c, e)
        }
        a = G(B, Td.m) || G(B, Rd.m) || G(B, Rd.R);
        ld(a);
        if (G(B, Yd.V) || G(B, Yd.L) || G(B, Yd.U) || G(B, Yd.T)) Yg(), Vg(".google.cn") && (Y[1] = ".google.cn"), G(B, Yd.L) ? (a = kb(), ah(a), $g(a)) : $g(null);
        G(B, Zd.f) && (a = oe() ? Vb("", "pagead2.googlesyndication.com") : ac(), xf(lc().document, a, "preconnect"));
        if (a = F(r)) a = qe(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = new kf);
        a = window.adsbygoogle;
        if (!a || !a.loaded) {
            c = {
                push: Fh,
                loaded: !0
            };
            try {
                Object.defineProperty(c, "requestNonPersonalizedAds", {
                    set: Lh
                }), Object.defineProperty(c, "pauseAdRequests", {
                    set: Mh
                }), Object.defineProperty(c, "onload", {
                    set: Nh
                })
            } catch (m) {}
            a && (void 0 !== a.requestNonPersonalizedAds && (c.requestNonPersonalizedAds = a.requestNonPersonalizedAds), void 0 !== a.pauseAdRequests && (c.pauseAdRequests = a.pauseAdRequests));
            if (a && a.shift) try {
                var k;
                for (b = 20; 0 < a.length && (k = a.shift()) && 0 < b;) Fh(k), --b
            } catch (m) {
                throw window.setTimeout(Jh, 0), m;
            }
            window.adsbygoogle = c;
            a && (c.onload = a.onload)
        }
    }

    function Ah(a) {
        a.className += " adsbygoogle-ablated-ad-slot"
    }

    function Lh(a) {
        if (+a) {
            if ((a = Ab()) && a.frames && !a.frames.GoogleSetNPA) try {
                var b = a.document,
                    c = new tb(b),
                    d = b.body || b.head && b.head.parentElement;
                if (d) {
                    var e = ub(c, "IFRAME");
                    e.name = "GoogleSetNPA";
                    e.id = "GoogleSetNPA";
                    e.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                    d.appendChild(e)
                }
            } catch (f) {}
        } else(b = Ab().document.getElementById("GoogleSetNPA")) && b.parentNode && b.parentNode.removeChild(b)
    }

    function Mh(a) {
        +a ? uh = !0 : (uh = !1, a = function () {
            if (!uh) {
                var a = lc(),
                    c = lc();
                try {
                    if (fb.createEvent) {
                        var d = fb.createEvent("CustomEvent");
                        d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                        a.dispatchEvent(d)
                    } else if (fc(c.CustomEvent)) {
                        var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1,
                            detail: ""
                        });
                        a.dispatchEvent(e)
                    } else if (fc(c.Event)) {
                        var f = new Event("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1
                        });
                        a.dispatchEvent(f)
                    }
                } catch (g) {}
            }
        }, r.setTimeout(a, 0), r.setTimeout(a, 1E3))
    }

    function Nh(a) {
        fc(a) && window.setTimeout(a, 0)
    };
    Jh();
}).call(this);