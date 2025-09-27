/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var K_ = Object.create;
    var nn = Object.defineProperty;
    var Y_ = Object.getOwnPropertyDescriptor;
    var $_ = Object.getOwnPropertyNames;
    var Q_ = Object.getPrototypeOf,
        Z_ = Object.prototype.hasOwnProperty;
    var ye = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Me = (e, t) => {
            for (var r in t) nn(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Ls = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of $_(t)) !Z_.call(e, i) && i !== r && nn(e, i, {
                    get: () => t[i],
                    enumerable: !(n = Y_(t, i)) || n.enumerable
                });
            return e
        };
    var ce = (e, t, r) => (r = e != null ? K_(Q_(e)) : {}, Ls(t || !e || !e.__esModule ? nn(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        et = e => Ls(nn({}, "__esModule", {
            value: !0
        }), e);
    var Ns = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit" in document.documentElement.style && !t) {
                window.objectFitPolyfill = function() {
                    return !1
                };
                return
            }
            let n = function(a) {
                    let u = window.getComputedStyle(a, null),
                        l = u.getPropertyValue("position"),
                        g = u.getPropertyValue("overflow"),
                        d = u.getPropertyValue("display");
                    (!l || l === "static") && (a.style.position = "relative"), g !== "hidden" && (a.style.overflow = "hidden"), (!d || d === "inline") && (a.style.display = "block"), a.clientHeight === 0 && (a.style.height = "100%"), a.className.indexOf("object-fit-polyfill") === -1 && (a.className += " object-fit-polyfill")
                },
                i = function(a) {
                    let u = window.getComputedStyle(a, null),
                        l = {
                            "max-width": "none",
                            "max-height": "none",
                            "min-width": "0px",
                            "min-height": "0px",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto",
                            "margin-top": "0px",
                            "margin-right": "0px",
                            "margin-bottom": "0px",
                            "margin-left": "0px"
                        };
                    for (let g in l) u.getPropertyValue(g) !== l[g] && (a.style[g] = l[g])
                },
                o = function(a) {
                    let u = a.parentNode;
                    n(u), i(a), a.style.position = "absolute", a.style.height = "100%", a.style.width = "auto", a.clientWidth > u.clientWidth ? (a.style.top = "0", a.style.marginTop = "0", a.style.left = "50%", a.style.marginLeft = a.clientWidth / -2 + "px") : (a.style.width = "100%", a.style.height = "auto", a.style.left = "0", a.style.marginLeft = "0", a.style.top = "50%", a.style.marginTop = a.clientHeight / -2 + "px")
                },
                s = function(a) {
                    if (typeof a > "u" || a instanceof Event) a = document.querySelectorAll("[data-object-fit]");
                    else if (a && a.nodeName) a = [a];
                    else if (typeof a == "object" && a.length && a[0].nodeName) a = a;
                    else return !1;
                    for (let u = 0; u < a.length; u++) {
                        if (!a[u].nodeName) continue;
                        let l = a[u].nodeName.toLowerCase();
                        if (l === "img") {
                            if (t) continue;
                            a[u].complete ? o(a[u]) : a[u].addEventListener("load", function() {
                                o(this)
                            })
                        } else l === "video" ? a[u].readyState > 0 ? o(a[u]) : a[u].addEventListener("loadedmetadata", function() {
                            o(this)
                        }) : o(a[u])
                    }
                    return !0
                };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s(), window.addEventListener("resize", s), window.objectFitPolyfill = s
        })()
    });
    var Ps = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;

            function e(n) {
                Webflow.env("design") || ($("video").each(function() {
                    n && $(this).prop("autoplay") ? this.play() : this.pause()
                }), $(".w-background-video--control").each(function() {
                    n ? r($(this)) : t($(this))
                }))
            }

            function t(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 0)
                })
            }

            function r(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 1)
                })
            }
            $(document).ready(() => {
                let n = window.matchMedia("(prefers-reduced-motion: reduce)");
                n.addEventListener("change", i => {
                    e(!i.matches)
                }), n.matches && e(!1), $("video:not([autoplay])").each(function() {
                    $(this).parent().find(".w-background-video--control").each(function() {
                        t($(this))
                    })
                }), $(document).on("click", ".w-background-video--control", function(i) {
                    if (Webflow.env("design")) return;
                    let o = $(i.currentTarget),
                        s = $(`video#${o.attr("aria-controls")}`).get(0);
                    if (s)
                        if (s.paused) {
                            let a = s.play();
                            r(o), a && typeof a.catch == "function" && a.catch(() => {
                                t(o)
                            })
                        } else s.pause(), t(o)
                })
            })
        })()
    });
    var Li = c(() => {
        "use strict";
        window.tram = function(e) {
            function t(f, E) {
                var I = new k.Bare;
                return I.init(f, E)
            }

            function r(f) {
                return f.replace(/[A-Z]/g, function(E) {
                    return "-" + E.toLowerCase()
                })
            }

            function n(f) {
                var E = parseInt(f.slice(1), 16),
                    I = E >> 16 & 255,
                    A = E >> 8 & 255,
                    T = 255 & E;
                return [I, A, T]
            }

            function i(f, E, I) {
                return "#" + (1 << 24 | f << 16 | E << 8 | I).toString(16).slice(1)
            }

            function o() {}

            function s(f, E) {
                l("Type warning: Expected: [" + f + "] Got: [" + typeof E + "] " + E)
            }

            function a(f, E, I) {
                l("Units do not match [" + f + "]: " + E + ", " + I)
            }

            function u(f, E, I) {
                if (E !== void 0 && (I = E), f === void 0) return I;
                var A = I;
                return xt.test(f) || !lt.test(f) ? A = parseInt(f, 10) : lt.test(f) && (A = 1e3 * parseFloat(f)), 0 > A && (A = 0), A === A ? A : I
            }

            function l(f) {
                le.debug && window && window.console.warn(f)
            }

            function g(f) {
                for (var E = -1, I = f ? f.length : 0, A = []; ++E < I;) {
                    var T = f[E];
                    T && A.push(T)
                }
                return A
            }
            var d = function(f, E, I) {
                    function A(ie) {
                        return typeof ie == "object"
                    }

                    function T(ie) {
                        return typeof ie == "function"
                    }

                    function S() {}

                    function Q(ie, ge) {
                        function B() {
                            var Re = new ae;
                            return T(Re.init) && Re.init.apply(Re, arguments), Re
                        }

                        function ae() {}
                        ge === I && (ge = ie, ie = Object), B.Bare = ae;
                        var se, be = S[f] = ie[f],
                            Je = ae[f] = B[f] = new S;
                        return Je.constructor = B, B.mixin = function(Re) {
                            return ae[f] = B[f] = Q(B, Re)[f], B
                        }, B.open = function(Re) {
                            if (se = {}, T(Re) ? se = Re.call(B, Je, be, B, ie) : A(Re) && (se = Re), A(se))
                                for (var Er in se) E.call(se, Er) && (Je[Er] = se[Er]);
                            return T(Je.init) || (Je.init = ie), B
                        }, B.open(ge)
                    }
                    return Q
                }("prototype", {}.hasOwnProperty),
                p = {
                    ease: ["ease", function(f, E, I, A) {
                        var T = (f /= A) * f,
                            S = T * f;
                        return E + I * (-2.75 * S * T + 11 * T * T + -15.5 * S + 8 * T + .25 * f)
                    }],
                    "ease-in": ["ease-in", function(f, E, I, A) {
                        var T = (f /= A) * f,
                            S = T * f;
                        return E + I * (-1 * S * T + 3 * T * T + -3 * S + 2 * T)
                    }],
                    "ease-out": ["ease-out", function(f, E, I, A) {
                        var T = (f /= A) * f,
                            S = T * f;
                        return E + I * (.3 * S * T + -1.6 * T * T + 2.2 * S + -1.8 * T + 1.9 * f)
                    }],
                    "ease-in-out": ["ease-in-out", function(f, E, I, A) {
                        var T = (f /= A) * f,
                            S = T * f;
                        return E + I * (2 * S * T + -5 * T * T + 2 * S + 2 * T)
                    }],
                    linear: ["linear", function(f, E, I, A) {
                        return I * f / A + E
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(f, E, I, A) {
                        return I * (f /= A) * f + E
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(f, E, I, A) {
                        return -I * (f /= A) * (f - 2) + E
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(f, E, I, A) {
                        return (f /= A / 2) < 1 ? I / 2 * f * f + E : -I / 2 * (--f * (f - 2) - 1) + E
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(f, E, I, A) {
                        return I * (f /= A) * f * f + E
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(f, E, I, A) {
                        return I * ((f = f / A - 1) * f * f + 1) + E
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(f, E, I, A) {
                        return (f /= A / 2) < 1 ? I / 2 * f * f * f + E : I / 2 * ((f -= 2) * f * f + 2) + E
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(f, E, I, A) {
                        return I * (f /= A) * f * f * f + E
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(f, E, I, A) {
                        return -I * ((f = f / A - 1) * f * f * f - 1) + E
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(f, E, I, A) {
                        return (f /= A / 2) < 1 ? I / 2 * f * f * f * f + E : -I / 2 * ((f -= 2) * f * f * f - 2) + E
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(f, E, I, A) {
                        return I * (f /= A) * f * f * f * f + E
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(f, E, I, A) {
                        return I * ((f = f / A - 1) * f * f * f * f + 1) + E
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(f, E, I, A) {
                        return (f /= A / 2) < 1 ? I / 2 * f * f * f * f * f + E : I / 2 * ((f -= 2) * f * f * f * f + 2) + E
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(f, E, I, A) {
                        return -I * Math.cos(f / A * (Math.PI / 2)) + I + E
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(f, E, I, A) {
                        return I * Math.sin(f / A * (Math.PI / 2)) + E
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(f, E, I, A) {
                        return -I / 2 * (Math.cos(Math.PI * f / A) - 1) + E
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(f, E, I, A) {
                        return f === 0 ? E : I * Math.pow(2, 10 * (f / A - 1)) + E
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(f, E, I, A) {
                        return f === A ? E + I : I * (-Math.pow(2, -10 * f / A) + 1) + E
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(f, E, I, A) {
                        return f === 0 ? E : f === A ? E + I : (f /= A / 2) < 1 ? I / 2 * Math.pow(2, 10 * (f - 1)) + E : I / 2 * (-Math.pow(2, -10 * --f) + 2) + E
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(f, E, I, A) {
                        return -I * (Math.sqrt(1 - (f /= A) * f) - 1) + E
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(f, E, I, A) {
                        return I * Math.sqrt(1 - (f = f / A - 1) * f) + E
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(f, E, I, A) {
                        return (f /= A / 2) < 1 ? -I / 2 * (Math.sqrt(1 - f * f) - 1) + E : I / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + E
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(f, E, I, A, T) {
                        return T === void 0 && (T = 1.70158), I * (f /= A) * f * ((T + 1) * f - T) + E
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(f, E, I, A, T) {
                        return T === void 0 && (T = 1.70158), I * ((f = f / A - 1) * f * ((T + 1) * f + T) + 1) + E
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(f, E, I, A, T) {
                        return T === void 0 && (T = 1.70158), (f /= A / 2) < 1 ? I / 2 * f * f * (((T *= 1.525) + 1) * f - T) + E : I / 2 * ((f -= 2) * f * (((T *= 1.525) + 1) * f + T) + 2) + E
                    }]
                },
                h = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                b = document,
                _ = window,
                w = "bkwld-tram",
                m = /[\-\.0-9]/g,
                C = /[A-Z]/,
                O = "number",
                N = /^(rgb|#)/,
                P = /(em|cm|mm|in|pt|pc|px)$/,
                L = /(em|cm|mm|in|pt|pc|px|%)$/,
                H = /(deg|rad|turn)$/,
                X = "unitless",
                z = /(all|none) 0s ease 0s/,
                Z = /^(width|height)$/,
                G = " ",
                x = b.createElement("a"),
                v = ["Webkit", "Moz", "O", "ms"],
                R = ["-webkit-", "-moz-", "-o-", "-ms-"],
                F = function(f) {
                    if (f in x.style) return {
                        dom: f,
                        css: f
                    };
                    var E, I, A = "",
                        T = f.split("-");
                    for (E = 0; E < T.length; E++) A += T[E].charAt(0).toUpperCase() + T[E].slice(1);
                    for (E = 0; E < v.length; E++)
                        if (I = v[E] + A, I in x.style) return {
                            dom: I,
                            css: R[E] + f
                        }
                },
                D = t.support = {
                    bind: Function.prototype.bind,
                    transform: F("transform"),
                    transition: F("transition"),
                    backface: F("backface-visibility"),
                    timing: F("transition-timing-function")
                };
            if (D.transition) {
                var J = D.timing.dom;
                if (x.style[J] = p["ease-in-back"][0], !x.style[J])
                    for (var ee in h) p[ee][0] = h[ee]
            }
            var q = t.frame = function() {
                    var f = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                    return f && D.bind ? f.bind(_) : function(E) {
                        _.setTimeout(E, 16)
                    }
                }(),
                V = t.now = function() {
                    var f = _.performance,
                        E = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
                    return E && D.bind ? E.bind(f) : Date.now || function() {
                        return +new Date
                    }
                }(),
                K = d(function(f) {
                    function E(te, ue) {
                        var me = g(("" + te).split(G)),
                            fe = me[0];
                        ue = ue || {};
                        var Le = W[fe];
                        if (!Le) return l("Unsupported property: " + fe);
                        if (!ue.weak || !this.props[fe]) {
                            var We = Le[0],
                                Fe = this.props[fe];
                            return Fe || (Fe = this.props[fe] = new We.Bare), Fe.init(this.$el, me, Le, ue), Fe
                        }
                    }

                    function I(te, ue, me) {
                        if (te) {
                            var fe = typeof te;
                            if (ue || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), fe == "number" && ue) return this.timer = new pe({
                                duration: te,
                                context: this,
                                complete: S
                            }), void(this.active = !0);
                            if (fe == "string" && ue) {
                                switch (te) {
                                    case "hide":
                                        B.call(this);
                                        break;
                                    case "stop":
                                        Q.call(this);
                                        break;
                                    case "redraw":
                                        ae.call(this);
                                        break;
                                    default:
                                        E.call(this, te, me && me[1])
                                }
                                return S.call(this)
                            }
                            if (fe == "function") return void te.call(this, this);
                            if (fe == "object") {
                                var Le = 0;
                                Je.call(this, te, function(Te, z_) {
                                    Te.span > Le && (Le = Te.span), Te.stop(), Te.animate(z_)
                                }, function(Te) {
                                    "wait" in Te && (Le = u(Te.wait, 0))
                                }), be.call(this), Le > 0 && (this.timer = new pe({
                                    duration: Le,
                                    context: this
                                }), this.active = !0, ue && (this.timer.complete = S));
                                var We = this,
                                    Fe = !1,
                                    rn = {};
                                q(function() {
                                    Je.call(We, te, function(Te) {
                                        Te.active && (Fe = !0, rn[Te.name] = Te.nextStyle)
                                    }), Fe && We.$el.css(rn)
                                })
                            }
                        }
                    }

                    function A(te) {
                        te = u(te, 0), this.active ? this.queue.push({
                            options: te
                        }) : (this.timer = new pe({
                            duration: te,
                            context: this,
                            complete: S
                        }), this.active = !0)
                    }

                    function T(te) {
                        return this.active ? (this.queue.push({
                            options: te,
                            args: arguments
                        }), void(this.timer.complete = S)) : l("No active transition timer. Use start() or wait() before then().")
                    }

                    function S() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var te = this.queue.shift();
                            I.call(this, te.options, !0, te.args)
                        }
                    }

                    function Q(te) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var ue;
                        typeof te == "string" ? (ue = {}, ue[te] = 1) : ue = typeof te == "object" && te != null ? te : this.props, Je.call(this, ue, Re), be.call(this)
                    }

                    function ie(te) {
                        Q.call(this, te), Je.call(this, te, Er, X_)
                    }

                    function ge(te) {
                        typeof te != "string" && (te = "block"), this.el.style.display = te
                    }

                    function B() {
                        Q.call(this), this.el.style.display = "none"
                    }

                    function ae() {
                        this.el.offsetHeight
                    }

                    function se() {
                        Q.call(this), e.removeData(this.el, w), this.$el = this.el = null
                    }

                    function be() {
                        var te, ue, me = [];
                        this.upstream && me.push(this.upstream);
                        for (te in this.props) ue = this.props[te], ue.active && me.push(ue.string);
                        me = me.join(","), this.style !== me && (this.style = me, this.el.style[D.transition.dom] = me)
                    }

                    function Je(te, ue, me) {
                        var fe, Le, We, Fe, rn = ue !== Re,
                            Te = {};
                        for (fe in te) We = te[fe], fe in ve ? (Te.transform || (Te.transform = {}), Te.transform[fe] = We) : (C.test(fe) && (fe = r(fe)), fe in W ? Te[fe] = We : (Fe || (Fe = {}), Fe[fe] = We));
                        for (fe in Te) {
                            if (We = Te[fe], Le = this.props[fe], !Le) {
                                if (!rn) continue;
                                Le = E.call(this, fe)
                            }
                            ue.call(this, Le, We)
                        }
                        me && Fe && me.call(this, Fe)
                    }

                    function Re(te) {
                        te.stop()
                    }

                    function Er(te, ue) {
                        te.set(ue)
                    }

                    function X_(te) {
                        this.$el.css(te)
                    }

                    function He(te, ue) {
                        f[te] = function() {
                            return this.children ? j_.call(this, ue, arguments) : (this.el && ue.apply(this, arguments), this)
                        }
                    }

                    function j_(te, ue) {
                        var me, fe = this.children.length;
                        for (me = 0; fe > me; me++) te.apply(this.children[me], ue);
                        return this
                    }
                    f.init = function(te) {
                        if (this.$el = e(te), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, le.keepInherited && !le.fallback) {
                            var ue = U(this.el, "transition");
                            ue && !z.test(ue) && (this.upstream = ue)
                        }
                        D.backface && le.hideBackface && y(this.el, D.backface.css, "hidden")
                    }, He("add", E), He("start", I), He("wait", A), He("then", T), He("next", S), He("stop", Q), He("set", ie), He("show", ge), He("hide", B), He("redraw", ae), He("destroy", se)
                }),
                k = d(K, function(f) {
                    function E(I, A) {
                        var T = e.data(I, w) || e.data(I, w, new K.Bare);
                        return T.el || T.init(I), A ? T.start(A) : T
                    }
                    f.init = function(I, A) {
                        var T = e(I);
                        if (!T.length) return this;
                        if (T.length === 1) return E(T[0], A);
                        var S = [];
                        return T.each(function(Q, ie) {
                            S.push(E(ie, A))
                        }), this.children = S, this
                    }
                }),
                M = d(function(f) {
                    function E() {
                        var S = this.get();
                        this.update("auto");
                        var Q = this.get();
                        return this.update(S), Q
                    }

                    function I(S, Q, ie) {
                        return Q !== void 0 && (ie = Q), S in p ? S : ie
                    }

                    function A(S) {
                        var Q = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(S);
                        return (Q ? i(Q[1], Q[2], Q[3]) : S).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var T = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    f.init = function(S, Q, ie, ge) {
                        this.$el = S, this.el = S[0];
                        var B = Q[0];
                        ie[2] && (B = ie[2]), Y[B] && (B = Y[B]), this.name = B, this.type = ie[1], this.duration = u(Q[1], this.duration, T.duration), this.ease = I(Q[2], this.ease, T.ease), this.delay = u(Q[3], this.delay, T.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = Z.test(this.name), this.unit = ge.unit || this.unit || le.defaultUnit, this.angle = ge.angle || this.angle || le.defaultAngle, le.fallback || ge.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + G + this.duration + "ms" + (this.ease != "ease" ? G + p[this.ease][0] : "") + (this.delay ? G + this.delay + "ms" : ""))
                    }, f.set = function(S) {
                        S = this.convert(S, this.type), this.update(S), this.redraw()
                    }, f.transition = function(S) {
                        this.active = !0, S = this.convert(S, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), S == "auto" && (S = E.call(this))), this.nextStyle = S
                    }, f.fallback = function(S) {
                        var Q = this.el.style[this.name] || this.convert(this.get(), this.type);
                        S = this.convert(S, this.type), this.auto && (Q == "auto" && (Q = this.convert(this.get(), this.type)), S == "auto" && (S = E.call(this))), this.tween = new re({
                            from: Q,
                            to: S,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.get = function() {
                        return U(this.el, this.name)
                    }, f.update = function(S) {
                        y(this.el, this.name, S)
                    }, f.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, y(this.el, this.name, this.get()));
                        var S = this.tween;
                        S && S.context && S.destroy()
                    }, f.convert = function(S, Q) {
                        if (S == "auto" && this.auto) return S;
                        var ie, ge = typeof S == "number",
                            B = typeof S == "string";
                        switch (Q) {
                            case O:
                                if (ge) return S;
                                if (B && S.replace(m, "") === "") return +S;
                                ie = "number(unitless)";
                                break;
                            case N:
                                if (B) {
                                    if (S === "" && this.original) return this.original;
                                    if (Q.test(S)) return S.charAt(0) == "#" && S.length == 7 ? S : A(S)
                                }
                                ie = "hex or rgb string";
                                break;
                            case P:
                                if (ge) return S + this.unit;
                                if (B && Q.test(S)) return S;
                                ie = "number(px) or string(unit)";
                                break;
                            case L:
                                if (ge) return S + this.unit;
                                if (B && Q.test(S)) return S;
                                ie = "number(px) or string(unit or %)";
                                break;
                            case H:
                                if (ge) return S + this.angle;
                                if (B && Q.test(S)) return S;
                                ie = "number(deg) or string(angle)";
                                break;
                            case X:
                                if (ge || B && L.test(S)) return S;
                                ie = "number(unitless) or string(unit or %)"
                        }
                        return s(ie, S), S
                    }, f.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                j = d(M, function(f, E) {
                    f.init = function() {
                        E.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), N))
                    }
                }),
                oe = d(M, function(f, E) {
                    f.init = function() {
                        E.init.apply(this, arguments), this.animate = this.fallback
                    }, f.get = function() {
                        return this.$el[this.name]()
                    }, f.update = function(I) {
                        this.$el[this.name](I)
                    }
                }),
                ne = d(M, function(f, E) {
                    function I(A, T) {
                        var S, Q, ie, ge, B;
                        for (S in A) ge = ve[S], ie = ge[0], Q = ge[1] || S, B = this.convert(A[S], ie), T.call(this, Q, B, ie)
                    }
                    f.init = function() {
                        E.init.apply(this, arguments), this.current || (this.current = {}, ve.perspective && le.perspective && (this.current.perspective = le.perspective, y(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, f.set = function(A) {
                        I.call(this, A, function(T, S) {
                            this.current[T] = S
                        }), y(this.el, this.name, this.style(this.current)), this.redraw()
                    }, f.transition = function(A) {
                        var T = this.values(A);
                        this.tween = new ct({
                            current: this.current,
                            values: T,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var S, Q = {};
                        for (S in this.current) Q[S] = S in T ? T[S] : this.current[S];
                        this.active = !0, this.nextStyle = this.style(Q)
                    }, f.fallback = function(A) {
                        var T = this.values(A);
                        this.tween = new ct({
                            current: this.current,
                            values: T,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.update = function() {
                        y(this.el, this.name, this.style(this.current))
                    }, f.style = function(A) {
                        var T, S = "";
                        for (T in A) S += T + "(" + A[T] + ") ";
                        return S
                    }, f.values = function(A) {
                        var T, S = {};
                        return I.call(this, A, function(Q, ie, ge) {
                            S[Q] = ie, this.current[Q] === void 0 && (T = 0, ~Q.indexOf("scale") && (T = 1), this.current[Q] = this.convert(T, ge))
                        }), S
                    }
                }),
                re = d(function(f) {
                    function E(B) {
                        ie.push(B) === 1 && q(I)
                    }

                    function I() {
                        var B, ae, se, be = ie.length;
                        if (be)
                            for (q(I), ae = V(), B = be; B--;) se = ie[B], se && se.render(ae)
                    }

                    function A(B) {
                        var ae, se = e.inArray(B, ie);
                        se >= 0 && (ae = ie.slice(se + 1), ie.length = se, ae.length && (ie = ie.concat(ae)))
                    }

                    function T(B) {
                        return Math.round(B * ge) / ge
                    }

                    function S(B, ae, se) {
                        return i(B[0] + se * (ae[0] - B[0]), B[1] + se * (ae[1] - B[1]), B[2] + se * (ae[2] - B[2]))
                    }
                    var Q = {
                        ease: p.ease[1],
                        from: 0,
                        to: 1
                    };
                    f.init = function(B) {
                        this.duration = B.duration || 0, this.delay = B.delay || 0;
                        var ae = B.ease || Q.ease;
                        p[ae] && (ae = p[ae][1]), typeof ae != "function" && (ae = Q.ease), this.ease = ae, this.update = B.update || o, this.complete = B.complete || o, this.context = B.context || this, this.name = B.name;
                        var se = B.from,
                            be = B.to;
                        se === void 0 && (se = Q.from), be === void 0 && (be = Q.to), this.unit = B.unit || "", typeof se == "number" && typeof be == "number" ? (this.begin = se, this.change = be - se) : this.format(be, se), this.value = this.begin + this.unit, this.start = V(), B.autoplay !== !1 && this.play()
                    }, f.play = function() {
                        this.active || (this.start || (this.start = V()), this.active = !0, E(this))
                    }, f.stop = function() {
                        this.active && (this.active = !1, A(this))
                    }, f.render = function(B) {
                        var ae, se = B - this.start;
                        if (this.delay) {
                            if (se <= this.delay) return;
                            se -= this.delay
                        }
                        if (se < this.duration) {
                            var be = this.ease(se, 0, 1, this.duration);
                            return ae = this.startRGB ? S(this.startRGB, this.endRGB, be) : T(this.begin + be * this.change), this.value = ae + this.unit, void this.update.call(this.context, this.value)
                        }
                        ae = this.endHex || this.begin + this.change, this.value = ae + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, f.format = function(B, ae) {
                        if (ae += "", B += "", B.charAt(0) == "#") return this.startRGB = n(ae), this.endRGB = n(B), this.endHex = B, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var se = ae.replace(m, ""),
                                be = B.replace(m, "");
                            se !== be && a("tween", ae, B), this.unit = se
                        }
                        ae = parseFloat(ae), B = parseFloat(B), this.begin = this.value = ae, this.change = B - ae
                    }, f.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var ie = [],
                        ge = 1e3
                }),
                pe = d(re, function(f) {
                    f.init = function(E) {
                        this.duration = E.duration || 0, this.complete = E.complete || o, this.context = E.context, this.play()
                    }, f.render = function(E) {
                        var I = E - this.start;
                        I < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                ct = d(re, function(f, E) {
                    f.init = function(I) {
                        this.context = I.context, this.update = I.update, this.tweens = [], this.current = I.current;
                        var A, T;
                        for (A in I.values) T = I.values[A], this.current[A] !== T && this.tweens.push(new re({
                            name: A,
                            from: this.current[A],
                            to: T,
                            duration: I.duration,
                            delay: I.delay,
                            ease: I.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, f.render = function(I) {
                        var A, T, S = this.tweens.length,
                            Q = !1;
                        for (A = S; A--;) T = this.tweens[A], T.context && (T.render(I), this.current[T.name] = T.value, Q = !0);
                        return Q ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, f.destroy = function() {
                        if (E.destroy.call(this), this.tweens) {
                            var I, A = this.tweens.length;
                            for (I = A; I--;) this.tweens[I].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                le = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !D.transition,
                    agentTests: []
                };
            t.fallback = function(f) {
                if (!D.transition) return le.fallback = !0;
                le.agentTests.push("(" + f + ")");
                var E = new RegExp(le.agentTests.join("|"), "i");
                le.fallback = E.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(f) {
                return new re(f)
            }, t.delay = function(f, E, I) {
                return new pe({
                    complete: E,
                    duration: f,
                    context: I
                })
            }, e.fn.tram = function(f) {
                return t.call(null, this, f)
            };
            var y = e.style,
                U = e.css,
                Y = {
                    transform: D.transform && D.transform.css
                },
                W = {
                    color: [j, N],
                    background: [j, N, "background-color"],
                    "outline-color": [j, N],
                    "border-color": [j, N],
                    "border-top-color": [j, N],
                    "border-right-color": [j, N],
                    "border-bottom-color": [j, N],
                    "border-left-color": [j, N],
                    "border-width": [M, P],
                    "border-top-width": [M, P],
                    "border-right-width": [M, P],
                    "border-bottom-width": [M, P],
                    "border-left-width": [M, P],
                    "border-spacing": [M, P],
                    "letter-spacing": [M, P],
                    margin: [M, P],
                    "margin-top": [M, P],
                    "margin-right": [M, P],
                    "margin-bottom": [M, P],
                    "margin-left": [M, P],
                    padding: [M, P],
                    "padding-top": [M, P],
                    "padding-right": [M, P],
                    "padding-bottom": [M, P],
                    "padding-left": [M, P],
                    "outline-width": [M, P],
                    opacity: [M, O],
                    top: [M, L],
                    right: [M, L],
                    bottom: [M, L],
                    left: [M, L],
                    "font-size": [M, L],
                    "text-indent": [M, L],
                    "word-spacing": [M, L],
                    width: [M, L],
                    "min-width": [M, L],
                    "max-width": [M, L],
                    height: [M, L],
                    "min-height": [M, L],
                    "max-height": [M, L],
                    "line-height": [M, X],
                    "scroll-top": [oe, O, "scrollTop"],
                    "scroll-left": [oe, O, "scrollLeft"]
                },
                ve = {};
            D.transform && (W.transform = [ne], ve = {
                x: [L, "translateX"],
                y: [L, "translateY"],
                rotate: [H],
                rotateX: [H],
                rotateY: [H],
                scale: [O],
                scaleX: [O],
                scaleY: [O],
                skew: [H],
                skewX: [H],
                skewY: [H]
            }), D.transform && D.backface && (ve.z = [L, "translateZ"], ve.rotateZ = [H], ve.scaleZ = [O], ve.perspective = [P]);
            var xt = /ms/,
                lt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Fs = c((WU, qs) => {
        "use strict";
        var J_ = window.$,
            eb = Li() && J_.tram;
        qs.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                s = r.slice,
                a = r.concat,
                u = n.toString,
                l = n.hasOwnProperty,
                g = r.forEach,
                d = r.map,
                p = r.reduce,
                h = r.reduceRight,
                b = r.filter,
                _ = r.every,
                w = r.some,
                m = r.indexOf,
                C = r.lastIndexOf,
                O = Array.isArray,
                N = Object.keys,
                P = i.bind,
                L = e.each = e.forEach = function(v, R, F) {
                    if (v == null) return v;
                    if (g && v.forEach === g) v.forEach(R, F);
                    else if (v.length === +v.length) {
                        for (var D = 0, J = v.length; D < J; D++)
                            if (R.call(F, v[D], D, v) === t) return
                    } else
                        for (var ee = e.keys(v), D = 0, J = ee.length; D < J; D++)
                            if (R.call(F, v[ee[D]], ee[D], v) === t) return;
                    return v
                };
            e.map = e.collect = function(v, R, F) {
                var D = [];
                return v == null ? D : d && v.map === d ? v.map(R, F) : (L(v, function(J, ee, q) {
                    D.push(R.call(F, J, ee, q))
                }), D)
            }, e.find = e.detect = function(v, R, F) {
                var D;
                return H(v, function(J, ee, q) {
                    if (R.call(F, J, ee, q)) return D = J, !0
                }), D
            }, e.filter = e.select = function(v, R, F) {
                var D = [];
                return v == null ? D : b && v.filter === b ? v.filter(R, F) : (L(v, function(J, ee, q) {
                    R.call(F, J, ee, q) && D.push(J)
                }), D)
            };
            var H = e.some = e.any = function(v, R, F) {
                R || (R = e.identity);
                var D = !1;
                return v == null ? D : w && v.some === w ? v.some(R, F) : (L(v, function(J, ee, q) {
                    if (D || (D = R.call(F, J, ee, q))) return t
                }), !!D)
            };
            e.contains = e.include = function(v, R) {
                return v == null ? !1 : m && v.indexOf === m ? v.indexOf(R) != -1 : H(v, function(F) {
                    return F === R
                })
            }, e.delay = function(v, R) {
                var F = s.call(arguments, 2);
                return setTimeout(function() {
                    return v.apply(null, F)
                }, R)
            }, e.defer = function(v) {
                return e.delay.apply(e, [v, 1].concat(s.call(arguments, 1)))
            }, e.throttle = function(v) {
                var R, F, D;
                return function() {
                    R || (R = !0, F = arguments, D = this, eb.frame(function() {
                        R = !1, v.apply(D, F)
                    }))
                }
            }, e.debounce = function(v, R, F) {
                var D, J, ee, q, V, K = function() {
                    var k = e.now() - q;
                    k < R ? D = setTimeout(K, R - k) : (D = null, F || (V = v.apply(ee, J), ee = J = null))
                };
                return function() {
                    ee = this, J = arguments, q = e.now();
                    var k = F && !D;
                    return D || (D = setTimeout(K, R)), k && (V = v.apply(ee, J), ee = J = null), V
                }
            }, e.defaults = function(v) {
                if (!e.isObject(v)) return v;
                for (var R = 1, F = arguments.length; R < F; R++) {
                    var D = arguments[R];
                    for (var J in D) v[J] === void 0 && (v[J] = D[J])
                }
                return v
            }, e.keys = function(v) {
                if (!e.isObject(v)) return [];
                if (N) return N(v);
                var R = [];
                for (var F in v) e.has(v, F) && R.push(F);
                return R
            }, e.has = function(v, R) {
                return l.call(v, R)
            }, e.isObject = function(v) {
                return v === Object(v)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var X = /(.)^/,
                z = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                Z = /\\|'|\r|\n|\u2028|\u2029/g,
                G = function(v) {
                    return "\\" + z[v]
                },
                x = /^\s*(\w|\$)+\s*$/;
            return e.template = function(v, R, F) {
                !R && F && (R = F), R = e.defaults({}, R, e.templateSettings);
                var D = RegExp([(R.escape || X).source, (R.interpolate || X).source, (R.evaluate || X).source].join("|") + "|$", "g"),
                    J = 0,
                    ee = "__p+='";
                v.replace(D, function(k, M, j, oe, ne) {
                    return ee += v.slice(J, ne).replace(Z, G), J = ne + k.length, M ? ee += `'+
((__t=(` + M + `))==null?'':_.escape(__t))+
'` : j ? ee += `'+
((__t=(` + j + `))==null?'':__t)+
'` : oe && (ee += `';
` + oe + `
__p+='`), k
                }), ee += `';
`;
                var q = R.variable;
                if (q) {
                    if (!x.test(q)) throw new Error("variable is not a bare identifier: " + q)
                } else ee = `with(obj||{}){
` + ee + `}
`, q = "obj";
                ee = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ee + `return __p;
`;
                var V;
                try {
                    V = new Function(R.variable || "obj", "_", ee)
                } catch (k) {
                    throw k.source = ee, k
                }
                var K = function(k) {
                    return V.call(this, k, e)
                };
                return K.source = "function(" + q + `){
` + ee + "}", K
            }, e
        }()
    });
    var Ue = c((XU, Hs) => {
        "use strict";
        var de = {},
            Vt = {},
            Ut = [],
            Pi = window.Webflow || [],
            Et = window.jQuery,
            je = Et(window),
            tb = Et(document),
            tt = Et.isFunction,
            Xe = de._ = Fs(),
            Ds = de.tram = Li() && Et.tram,
            an = !1,
            qi = !1;
        Ds.config.hideBackface = !1;
        Ds.config.keepInherited = !0;
        de.define = function(e, t, r) {
            Vt[e] && ks(Vt[e]);
            var n = Vt[e] = t(Et, Xe, r) || {};
            return Gs(n), n
        };
        de.require = function(e) {
            return Vt[e]
        };

        function Gs(e) {
            de.env() && (tt(e.design) && je.on("__wf_design", e.design), tt(e.preview) && je.on("__wf_preview", e.preview)), tt(e.destroy) && je.on("__wf_destroy", e.destroy), e.ready && tt(e.ready) && rb(e)
        }

        function rb(e) {
            if (an) {
                e.ready();
                return
            }
            Xe.contains(Ut, e.ready) || Ut.push(e.ready)
        }

        function ks(e) {
            tt(e.design) && je.off("__wf_design", e.design), tt(e.preview) && je.off("__wf_preview", e.preview), tt(e.destroy) && je.off("__wf_destroy", e.destroy), e.ready && tt(e.ready) && nb(e)
        }

        function nb(e) {
            Ut = Xe.filter(Ut, function(t) {
                return t !== e.ready
            })
        }
        de.push = function(e) {
            if (an) {
                tt(e) && e();
                return
            }
            Pi.push(e)
        };
        de.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var on = navigator.userAgent.toLowerCase(),
            Vs = de.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            ib = de.env.chrome = /chrome/.test(on) && /Google/.test(navigator.vendor) && parseInt(on.match(/chrome\/(\d+)\./)[1], 10),
            ob = de.env.ios = /(ipod|iphone|ipad)/.test(on);
        de.env.safari = /safari/.test(on) && !ib && !ob;
        var Ni;
        Vs && tb.on("touchstart mousedown", function(e) {
            Ni = e.target
        });
        de.validClick = Vs ? function(e) {
            return e === Ni || Et.contains(e, Ni)
        } : function() {
            return !0
        };
        var Us = "resize.webflow orientationchange.webflow load.webflow",
            ab = "scroll.webflow " + Us;
        de.resize = Fi(je, Us);
        de.scroll = Fi(je, ab);
        de.redraw = Fi();

        function Fi(e, t) {
            var r = [],
                n = {};
            return n.up = Xe.throttle(function(i) {
                Xe.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (Xe.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Xe.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        de.location = function(e) {
            window.location = e
        };
        de.env() && (de.location = function() {});
        de.ready = function() {
            an = !0, qi ? sb() : Xe.each(Ut, Ms), Xe.each(Pi, Ms), de.resize.up()
        };

        function Ms(e) {
            tt(e) && e()
        }

        function sb() {
            qi = !1, Xe.each(Vt, Gs)
        }
        var Ct;
        de.load = function(e) {
            Ct.then(e)
        };

        function Bs() {
            Ct && (Ct.reject(), je.off("load", Ct.resolve)), Ct = new Et.Deferred, je.on("load", Ct.resolve)
        }
        de.destroy = function(e) {
            e = e || {}, qi = !0, je.triggerHandler("__wf_destroy"), e.domready != null && (an = e.domready), Xe.each(Vt, ks), de.resize.off(), de.scroll.off(), de.redraw.off(), Ut = [], Pi = [], Ct.state() === "pending" && Bs()
        };
        Et(de.ready);
        Bs();
        Hs.exports = window.Webflow = de
    });
    var js = c((jU, Xs) => {
        "use strict";
        var Ws = Ue();
        Ws.define("brand", Xs.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                s = window.location,
                a = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                l;
            t.ready = function() {
                var h = n.attr("data-wf-status"),
                    b = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(b) && s.hostname !== b && (h = !0), h && !a && (l = l || d(), p(), setTimeout(p, 500), e(r).off(u, g).on(u, g))
            };

            function g() {
                var h = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(l).attr("style", h ? "display: none !important;" : "")
            }

            // function d() {
            //     var h = e('<a class="w-webflowa-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
            //         b = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
            //             marginRight: "4px",
            //             width: "26px"
            //         }),
            //         _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
            //     return h.append(b, _), h[0]
            // }

            function d() {
                var h = e('<span></span>')
                return null
            }

            function p() {
                var h = i.children(o),
                    b = h.length && h.get(0) === l,
                    _ = Ws.env("editor");
                if (b) {
                    _ && h.remove();
                    return
                }
                h.length && h.remove(), _ || i.append(l)
            }
            return t
        })
    });
    var Ks = c((zU, zs) => {
        "use strict";
        var Mi = Ue();
        Mi.define("edit", zs.exports = function(e, t, r) {
            if (r = r || {}, (Mi.env("test") || Mi.env("frame")) && !r.fixture && !ub()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                s = document.location,
                a = "hashchange",
                u, l = r.load || p,
                g = !1;
            try {
                g = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            g ? l() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && l() : i.on(a, d).triggerHandler(a);

            function d() {
                u || /\?edit/.test(s.hash) && l()
            }

            function p() {
                u = !0, window.WebflowEditor = !0, i.off(a, d), C(function(N) {
                    e.ajax({
                        url: m("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: h(N)
                    })
                })
            }

            function h(N) {
                return function(P) {
                    if (!P) {
                        console.error("Could not load editor data");
                        return
                    }
                    P.thirdPartyCookiesSupported = N, b(w(P.scriptPath), function() {
                        window.WebflowEditor(P)
                    })
                }
            }

            function b(N, P) {
                e.ajax({
                    type: "GET",
                    url: N,
                    dataType: "script",
                    cache: !0
                }).then(P, _)
            }

            function _(N, P, L) {
                throw console.error("Could not load editor script: " + P), L
            }

            function w(N) {
                return N.indexOf("//") >= 0 ? N : m("https://editor-api.webflow.com" + N)
            }

            function m(N) {
                return N.replace(/([^:])\/\//g, "$1/")
            }

            function C(N) {
                var P = window.document.createElement("iframe");
                P.src = "https://webflow.com/site/third-party-cookie-check.html", P.style.display = "none", P.sandbox = "allow-scripts allow-same-origin";
                var L = function(H) {
                    H.data === "WF_third_party_cookies_unsupported" ? (O(P, L), N(!1)) : H.data === "WF_third_party_cookies_supported" && (O(P, L), N(!0))
                };
                P.onerror = function() {
                    O(P, L), N(!1)
                }, window.addEventListener("message", L, !1), window.document.body.appendChild(P)
            }

            function O(N, P) {
                window.removeEventListener("message", P, !1), N.remove()
            }
            return n
        });

        function ub() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var $s = c((KU, Ys) => {
        "use strict";
        var cb = Ue();
        cb.define("focus-visible", Ys.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    s = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function a(O) {
                    return !!(O && O !== document && O.nodeName !== "HTML" && O.nodeName !== "BODY" && "classList" in O && "contains" in O.classList)
                }

                function u(O) {
                    var N = O.type,
                        P = O.tagName;
                    return !!(P === "INPUT" && s[N] && !O.readOnly || P === "TEXTAREA" && !O.readOnly || O.isContentEditable)
                }

                function l(O) {
                    O.getAttribute("data-wf-focus-visible") || O.setAttribute("data-wf-focus-visible", "true")
                }

                function g(O) {
                    O.getAttribute("data-wf-focus-visible") && O.removeAttribute("data-wf-focus-visible")
                }

                function d(O) {
                    O.metaKey || O.altKey || O.ctrlKey || (a(r.activeElement) && l(r.activeElement), n = !0)
                }

                function p() {
                    n = !1
                }

                function h(O) {
                    a(O.target) && (n || u(O.target)) && l(O.target)
                }

                function b(O) {
                    a(O.target) && O.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), g(O.target))
                }

                function _() {
                    document.visibilityState === "hidden" && (i && (n = !0), w())
                }

                function w() {
                    document.addEventListener("mousemove", C), document.addEventListener("mousedown", C), document.addEventListener("mouseup", C), document.addEventListener("pointermove", C), document.addEventListener("pointerdown", C), document.addEventListener("pointerup", C), document.addEventListener("touchmove", C), document.addEventListener("touchstart", C), document.addEventListener("touchend", C)
                }

                function m() {
                    document.removeEventListener("mousemove", C), document.removeEventListener("mousedown", C), document.removeEventListener("mouseup", C), document.removeEventListener("pointermove", C), document.removeEventListener("pointerdown", C), document.removeEventListener("pointerup", C), document.removeEventListener("touchmove", C), document.removeEventListener("touchstart", C), document.removeEventListener("touchend", C)
                }

                function C(O) {
                    O.target.nodeName && O.target.nodeName.toLowerCase() === "html" || (n = !1, m())
                }
                document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", p, !0), document.addEventListener("pointerdown", p, !0), document.addEventListener("touchstart", p, !0), document.addEventListener("visibilitychange", _, !0), w(), r.addEventListener("focus", h, !0), r.addEventListener("blur", b, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var Js = c((YU, Zs) => {
        "use strict";
        var Qs = Ue();
        Qs.define("focus", Zs.exports = function() {
            var e = [],
                t = !1;

            function r(s) {
                t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
            }

            function n(s) {
                var a = s.target,
                    u = a.tagName;
                return /^a$/i.test(u) && a.href != null || /^(button|textarea)$/i.test(u) && a.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && a.controls === !0
            }

            function i(s) {
                n(s) && (t = !0, setTimeout(() => {
                    for (t = !1, s.target.focus(); e.length > 0;) {
                        var a = e.pop();
                        a.target.dispatchEvent(new MouseEvent(a.type, a))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Qs.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var ru = c(($U, tu) => {
        "use strict";
        var Di = window.jQuery,
            rt = {},
            sn = [],
            eu = ".w-ix",
            un = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Di(t).triggerHandler(rt.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Di(t).triggerHandler(rt.types.OUTRO))
                }
            };
        rt.triggers = {};
        rt.types = {
            INTRO: "w-ix-intro" + eu,
            OUTRO: "w-ix-outro" + eu
        };
        rt.init = function() {
            for (var e = sn.length, t = 0; t < e; t++) {
                var r = sn[t];
                r[0](0, r[1])
            }
            sn = [], Di.extend(rt.triggers, un)
        };
        rt.async = function() {
            for (var e in un) {
                var t = un[e];
                un.hasOwnProperty(e) && (rt.triggers[e] = function(r, n) {
                    sn.push([t, n])
                })
            }
        };
        rt.async();
        tu.exports = rt
    });
    var ln = c((QU, ou) => {
        "use strict";
        var Gi = ru();

        function nu(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var lb = window.jQuery,
            cn = {},
            iu = ".w-ix",
            fb = {
                reset: function(e, t) {
                    Gi.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Gi.triggers.intro(e, t), nu(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Gi.triggers.outro(e, t), nu(t, "COMPONENT_INACTIVE")
                }
            };
        cn.triggers = {};
        cn.types = {
            INTRO: "w-ix-intro" + iu,
            OUTRO: "w-ix-outro" + iu
        };
        lb.extend(cn.triggers, fb);
        ou.exports = cn
    });
    var au = c((ZU, ft) => {
        function ki(e) {
            return ft.exports = ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ft.exports.__esModule = !0, ft.exports.default = ft.exports, ki(e)
        }
        ft.exports = ki, ft.exports.__esModule = !0, ft.exports.default = ft.exports
    });
    var fn = c((JU, mr) => {
        var db = au().default;

        function su(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (su = function(i) {
                return i ? r : t
            })(e)
        }

        function pb(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || db(e) !== "object" && typeof e != "function") return {
                default: e
            };
            var r = su(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o]
                } return n.default = e, r && r.set(e, n), n
        }
        mr.exports = pb, mr.exports.__esModule = !0, mr.exports.default = mr.exports
    });
    var uu = c((eB, _r) => {
        function gb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        _r.exports = gb, _r.exports.__esModule = !0, _r.exports.default = _r.exports
    });
    var Ee = c((tB, cu) => {
        var dn = function(e) {
            return e && e.Math == Math && e
        };
        cu.exports = dn(typeof globalThis == "object" && globalThis) || dn(typeof window == "object" && window) || dn(typeof self == "object" && self) || dn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var Bt = c((rB, lu) => {
        lu.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Rt = c((nB, fu) => {
        var vb = Bt();
        fu.exports = !vb(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var pn = c((iB, du) => {
        var br = Function.prototype.call;
        du.exports = br.bind ? br.bind(br) : function() {
            return br.apply(br, arguments)
        }
    });
    var hu = c(vu => {
        "use strict";
        var pu = {}.propertyIsEnumerable,
            gu = Object.getOwnPropertyDescriptor,
            hb = gu && !pu.call({
                1: 2
            }, 1);
        vu.f = hb ? function(t) {
            var r = gu(this, t);
            return !!r && r.enumerable
        } : pu
    });
    var Vi = c((aB, yu) => {
        yu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var ze = c((sB, mu) => {
        var Eu = Function.prototype,
            Ui = Eu.bind,
            Bi = Eu.call,
            yb = Ui && Ui.bind(Bi);
        mu.exports = Ui ? function(e) {
            return e && yb(Bi, e)
        } : function(e) {
            return e && function() {
                return Bi.apply(e, arguments)
            }
        }
    });
    var Tu = c((uB, bu) => {
        var _u = ze(),
            Eb = _u({}.toString),
            mb = _u("".slice);
        bu.exports = function(e) {
            return mb(Eb(e), 8, -1)
        }
    });
    var wu = c((cB, Iu) => {
        var _b = Ee(),
            bb = ze(),
            Tb = Bt(),
            Ib = Tu(),
            Hi = _b.Object,
            wb = bb("".split);
        Iu.exports = Tb(function() {
            return !Hi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return Ib(e) == "String" ? wb(e, "") : Hi(e)
        } : Hi
    });
    var Wi = c((lB, Ou) => {
        var Ob = Ee(),
            Ab = Ob.TypeError;
        Ou.exports = function(e) {
            if (e == null) throw Ab("Can't call method on " + e);
            return e
        }
    });
    var Tr = c((fB, Au) => {
        var Sb = wu(),
            xb = Wi();
        Au.exports = function(e) {
            return Sb(xb(e))
        }
    });
    var nt = c((dB, Su) => {
        Su.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Ht = c((pB, xu) => {
        var Cb = nt();
        xu.exports = function(e) {
            return typeof e == "object" ? e !== null : Cb(e)
        }
    });
    var Ir = c((gB, Cu) => {
        var Xi = Ee(),
            Rb = nt(),
            Lb = function(e) {
                return Rb(e) ? e : void 0
            };
        Cu.exports = function(e, t) {
            return arguments.length < 2 ? Lb(Xi[e]) : Xi[e] && Xi[e][t]
        }
    });
    var Lu = c((vB, Ru) => {
        var Nb = ze();
        Ru.exports = Nb({}.isPrototypeOf)
    });
    var Pu = c((hB, Nu) => {
        var Pb = Ir();
        Nu.exports = Pb("navigator", "userAgent") || ""
    });
    var Vu = c((yB, ku) => {
        var Gu = Ee(),
            ji = Pu(),
            qu = Gu.process,
            Fu = Gu.Deno,
            Mu = qu && qu.versions || Fu && Fu.version,
            Du = Mu && Mu.v8,
            Ke, gn;
        Du && (Ke = Du.split("."), gn = Ke[0] > 0 && Ke[0] < 4 ? 1 : +(Ke[0] + Ke[1]));
        !gn && ji && (Ke = ji.match(/Edge\/(\d+)/), (!Ke || Ke[1] >= 74) && (Ke = ji.match(/Chrome\/(\d+)/), Ke && (gn = +Ke[1])));
        ku.exports = gn
    });
    var zi = c((EB, Bu) => {
        var Uu = Vu(),
            qb = Bt();
        Bu.exports = !!Object.getOwnPropertySymbols && !qb(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Uu && Uu < 41
        })
    });
    var Ki = c((mB, Hu) => {
        var Fb = zi();
        Hu.exports = Fb && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var Yi = c((_B, Wu) => {
        var Mb = Ee(),
            Db = Ir(),
            Gb = nt(),
            kb = Lu(),
            Vb = Ki(),
            Ub = Mb.Object;
        Wu.exports = Vb ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = Db("Symbol");
            return Gb(t) && kb(t.prototype, Ub(e))
        }
    });
    var ju = c((bB, Xu) => {
        var Bb = Ee(),
            Hb = Bb.String;
        Xu.exports = function(e) {
            try {
                return Hb(e)
            } catch {
                return "Object"
            }
        }
    });
    var Ku = c((TB, zu) => {
        var Wb = Ee(),
            Xb = nt(),
            jb = ju(),
            zb = Wb.TypeError;
        zu.exports = function(e) {
            if (Xb(e)) return e;
            throw zb(jb(e) + " is not a function")
        }
    });
    var $u = c((IB, Yu) => {
        var Kb = Ku();
        Yu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : Kb(r)
        }
    });
    var Zu = c((wB, Qu) => {
        var Yb = Ee(),
            $i = pn(),
            Qi = nt(),
            Zi = Ht(),
            $b = Yb.TypeError;
        Qu.exports = function(e, t) {
            var r, n;
            if (t === "string" && Qi(r = e.toString) && !Zi(n = $i(r, e)) || Qi(r = e.valueOf) && !Zi(n = $i(r, e)) || t !== "string" && Qi(r = e.toString) && !Zi(n = $i(r, e))) return n;
            throw $b("Can't convert object to primitive value")
        }
    });
    var ec = c((OB, Ju) => {
        Ju.exports = !1
    });
    var vn = c((AB, rc) => {
        var tc = Ee(),
            Qb = Object.defineProperty;
        rc.exports = function(e, t) {
            try {
                Qb(tc, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                tc[e] = t
            }
            return t
        }
    });
    var hn = c((SB, ic) => {
        var Zb = Ee(),
            Jb = vn(),
            nc = "__core-js_shared__",
            eT = Zb[nc] || Jb(nc, {});
        ic.exports = eT
    });
    var Ji = c((xB, ac) => {
        var tT = ec(),
            oc = hn();
        (ac.exports = function(e, t) {
            return oc[e] || (oc[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: tT ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var uc = c((CB, sc) => {
        var rT = Ee(),
            nT = Wi(),
            iT = rT.Object;
        sc.exports = function(e) {
            return iT(nT(e))
        }
    });
    var mt = c((RB, cc) => {
        var oT = ze(),
            aT = uc(),
            sT = oT({}.hasOwnProperty);
        cc.exports = Object.hasOwn || function(t, r) {
            return sT(aT(t), r)
        }
    });
    var eo = c((LB, lc) => {
        var uT = ze(),
            cT = 0,
            lT = Math.random(),
            fT = uT(1 .toString);
        lc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + fT(++cT + lT, 36)
        }
    });
    var to = c((NB, vc) => {
        var dT = Ee(),
            pT = Ji(),
            fc = mt(),
            gT = eo(),
            dc = zi(),
            gc = Ki(),
            Wt = pT("wks"),
            Lt = dT.Symbol,
            pc = Lt && Lt.for,
            vT = gc ? Lt : Lt && Lt.withoutSetter || gT;
        vc.exports = function(e) {
            if (!fc(Wt, e) || !(dc || typeof Wt[e] == "string")) {
                var t = "Symbol." + e;
                dc && fc(Lt, e) ? Wt[e] = Lt[e] : gc && pc ? Wt[e] = pc(t) : Wt[e] = vT(t)
            }
            return Wt[e]
        }
    });
    var mc = c((PB, Ec) => {
        var hT = Ee(),
            yT = pn(),
            hc = Ht(),
            yc = Yi(),
            ET = $u(),
            mT = Zu(),
            _T = to(),
            bT = hT.TypeError,
            TT = _T("toPrimitive");
        Ec.exports = function(e, t) {
            if (!hc(e) || yc(e)) return e;
            var r = ET(e, TT),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = yT(r, e, t), !hc(n) || yc(n)) return n;
                throw bT("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), mT(e, t)
        }
    });
    var ro = c((qB, _c) => {
        var IT = mc(),
            wT = Yi();
        _c.exports = function(e) {
            var t = IT(e, "string");
            return wT(t) ? t : t + ""
        }
    });
    var io = c((FB, Tc) => {
        var OT = Ee(),
            bc = Ht(),
            no = OT.document,
            AT = bc(no) && bc(no.createElement);
        Tc.exports = function(e) {
            return AT ? no.createElement(e) : {}
        }
    });
    var oo = c((MB, Ic) => {
        var ST = Rt(),
            xT = Bt(),
            CT = io();
        Ic.exports = !ST && !xT(function() {
            return Object.defineProperty(CT("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var ao = c(Oc => {
        var RT = Rt(),
            LT = pn(),
            NT = hu(),
            PT = Vi(),
            qT = Tr(),
            FT = ro(),
            MT = mt(),
            DT = oo(),
            wc = Object.getOwnPropertyDescriptor;
        Oc.f = RT ? wc : function(t, r) {
            if (t = qT(t), r = FT(r), DT) try {
                return wc(t, r)
            } catch {}
            if (MT(t, r)) return PT(!LT(NT.f, t, r), t[r])
        }
    });
    var wr = c((GB, Sc) => {
        var Ac = Ee(),
            GT = Ht(),
            kT = Ac.String,
            VT = Ac.TypeError;
        Sc.exports = function(e) {
            if (GT(e)) return e;
            throw VT(kT(e) + " is not an object")
        }
    });
    var Or = c(Rc => {
        var UT = Ee(),
            BT = Rt(),
            HT = oo(),
            xc = wr(),
            WT = ro(),
            XT = UT.TypeError,
            Cc = Object.defineProperty;
        Rc.f = BT ? Cc : function(t, r, n) {
            if (xc(t), r = WT(r), xc(n), HT) try {
                return Cc(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw XT("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var yn = c((VB, Lc) => {
        var jT = Rt(),
            zT = Or(),
            KT = Vi();
        Lc.exports = jT ? function(e, t, r) {
            return zT.f(e, t, KT(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var uo = c((UB, Nc) => {
        var YT = ze(),
            $T = nt(),
            so = hn(),
            QT = YT(Function.toString);
        $T(so.inspectSource) || (so.inspectSource = function(e) {
            return QT(e)
        });
        Nc.exports = so.inspectSource
    });
    var Fc = c((BB, qc) => {
        var ZT = Ee(),
            JT = nt(),
            eI = uo(),
            Pc = ZT.WeakMap;
        qc.exports = JT(Pc) && /native code/.test(eI(Pc))
    });
    var co = c((HB, Dc) => {
        var tI = Ji(),
            rI = eo(),
            Mc = tI("keys");
        Dc.exports = function(e) {
            return Mc[e] || (Mc[e] = rI(e))
        }
    });
    var En = c((WB, Gc) => {
        Gc.exports = {}
    });
    var Wc = c((XB, Hc) => {
        var nI = Fc(),
            Bc = Ee(),
            lo = ze(),
            iI = Ht(),
            oI = yn(),
            fo = mt(),
            po = hn(),
            aI = co(),
            sI = En(),
            kc = "Object already initialized",
            vo = Bc.TypeError,
            uI = Bc.WeakMap,
            mn, Ar, _n, cI = function(e) {
                return _n(e) ? Ar(e) : mn(e, {})
            },
            lI = function(e) {
                return function(t) {
                    var r;
                    if (!iI(t) || (r = Ar(t)).type !== e) throw vo("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        nI || po.state ? (_t = po.state || (po.state = new uI), Vc = lo(_t.get), go = lo(_t.has), Uc = lo(_t.set), mn = function(e, t) {
            if (go(_t, e)) throw new vo(kc);
            return t.facade = e, Uc(_t, e, t), t
        }, Ar = function(e) {
            return Vc(_t, e) || {}
        }, _n = function(e) {
            return go(_t, e)
        }) : (Nt = aI("state"), sI[Nt] = !0, mn = function(e, t) {
            if (fo(e, Nt)) throw new vo(kc);
            return t.facade = e, oI(e, Nt, t), t
        }, Ar = function(e) {
            return fo(e, Nt) ? e[Nt] : {}
        }, _n = function(e) {
            return fo(e, Nt)
        });
        var _t, Vc, go, Uc, Nt;
        Hc.exports = {
            set: mn,
            get: Ar,
            has: _n,
            enforce: cI,
            getterFor: lI
        }
    });
    var zc = c((jB, jc) => {
        var ho = Rt(),
            fI = mt(),
            Xc = Function.prototype,
            dI = ho && Object.getOwnPropertyDescriptor,
            yo = fI(Xc, "name"),
            pI = yo && function() {}.name === "something",
            gI = yo && (!ho || ho && dI(Xc, "name").configurable);
        jc.exports = {
            EXISTS: yo,
            PROPER: pI,
            CONFIGURABLE: gI
        }
    });
    var Zc = c((zB, Qc) => {
        var vI = Ee(),
            Kc = nt(),
            hI = mt(),
            Yc = yn(),
            yI = vn(),
            EI = uo(),
            $c = Wc(),
            mI = zc().CONFIGURABLE,
            _I = $c.get,
            bI = $c.enforce,
            TI = String(String).split("String");
        (Qc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                s = n ? !!n.noTargetGet : !1,
                a = n && n.name !== void 0 ? n.name : t,
                u;
            if (Kc(r) && (String(a).slice(0, 7) === "Symbol(" && (a = "[" + String(a).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!hI(r, "name") || mI && r.name !== a) && Yc(r, "name", a), u = bI(r), u.source || (u.source = TI.join(typeof a == "string" ? a : ""))), e === vI) {
                o ? e[t] = r : yI(t, r);
                return
            } else i ? !s && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Yc(e, t, r)
        })(Function.prototype, "toString", function() {
            return Kc(this) && _I(this).source || EI(this)
        })
    });
    var Eo = c((KB, Jc) => {
        var II = Math.ceil,
            wI = Math.floor;
        Jc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? wI : II)(t)
        }
    });
    var tl = c((YB, el) => {
        var OI = Eo(),
            AI = Math.max,
            SI = Math.min;
        el.exports = function(e, t) {
            var r = OI(e);
            return r < 0 ? AI(r + t, 0) : SI(r, t)
        }
    });
    var nl = c(($B, rl) => {
        var xI = Eo(),
            CI = Math.min;
        rl.exports = function(e) {
            return e > 0 ? CI(xI(e), 9007199254740991) : 0
        }
    });
    var ol = c((QB, il) => {
        var RI = nl();
        il.exports = function(e) {
            return RI(e.length)
        }
    });
    var mo = c((ZB, sl) => {
        var LI = Tr(),
            NI = tl(),
            PI = ol(),
            al = function(e) {
                return function(t, r, n) {
                    var i = LI(t),
                        o = PI(i),
                        s = NI(n, o),
                        a;
                    if (e && r != r) {
                        for (; o > s;)
                            if (a = i[s++], a != a) return !0
                    } else
                        for (; o > s; s++)
                            if ((e || s in i) && i[s] === r) return e || s || 0;
                    return !e && -1
                }
            };
        sl.exports = {
            includes: al(!0),
            indexOf: al(!1)
        }
    });
    var bo = c((JB, cl) => {
        var qI = ze(),
            _o = mt(),
            FI = Tr(),
            MI = mo().indexOf,
            DI = En(),
            ul = qI([].push);
        cl.exports = function(e, t) {
            var r = FI(e),
                n = 0,
                i = [],
                o;
            for (o in r) !_o(DI, o) && _o(r, o) && ul(i, o);
            for (; t.length > n;) _o(r, o = t[n++]) && (~MI(i, o) || ul(i, o));
            return i
        }
    });
    var bn = c((e5, ll) => {
        ll.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var dl = c(fl => {
        var GI = bo(),
            kI = bn(),
            VI = kI.concat("length", "prototype");
        fl.f = Object.getOwnPropertyNames || function(t) {
            return GI(t, VI)
        }
    });
    var gl = c(pl => {
        pl.f = Object.getOwnPropertySymbols
    });
    var hl = c((n5, vl) => {
        var UI = Ir(),
            BI = ze(),
            HI = dl(),
            WI = gl(),
            XI = wr(),
            jI = BI([].concat);
        vl.exports = UI("Reflect", "ownKeys") || function(t) {
            var r = HI.f(XI(t)),
                n = WI.f;
            return n ? jI(r, n(t)) : r
        }
    });
    var El = c((i5, yl) => {
        var zI = mt(),
            KI = hl(),
            YI = ao(),
            $I = Or();
        yl.exports = function(e, t) {
            for (var r = KI(t), n = $I.f, i = YI.f, o = 0; o < r.length; o++) {
                var s = r[o];
                zI(e, s) || n(e, s, i(t, s))
            }
        }
    });
    var _l = c((o5, ml) => {
        var QI = Bt(),
            ZI = nt(),
            JI = /#|\.prototype\./,
            Sr = function(e, t) {
                var r = t0[e0(e)];
                return r == n0 ? !0 : r == r0 ? !1 : ZI(t) ? QI(t) : !!t
            },
            e0 = Sr.normalize = function(e) {
                return String(e).replace(JI, ".").toLowerCase()
            },
            t0 = Sr.data = {},
            r0 = Sr.NATIVE = "N",
            n0 = Sr.POLYFILL = "P";
        ml.exports = Sr
    });
    var Tl = c((a5, bl) => {
        var To = Ee(),
            i0 = ao().f,
            o0 = yn(),
            a0 = Zc(),
            s0 = vn(),
            u0 = El(),
            c0 = _l();
        bl.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, s, a, u, l, g;
            if (n ? s = To : i ? s = To[r] || s0(r, {}) : s = (To[r] || {}).prototype, s)
                for (a in t) {
                    if (l = t[a], e.noTargetGet ? (g = i0(s, a), u = g && g.value) : u = s[a], o = c0(n ? a : r + (i ? "." : "#") + a, e.forced), !o && u !== void 0) {
                        if (typeof l == typeof u) continue;
                        u0(l, u)
                    }(e.sham || u && u.sham) && o0(l, "sham", !0), a0(s, a, l, e)
                }
        }
    });
    var wl = c((s5, Il) => {
        var l0 = bo(),
            f0 = bn();
        Il.exports = Object.keys || function(t) {
            return l0(t, f0)
        }
    });
    var Al = c((u5, Ol) => {
        var d0 = Rt(),
            p0 = Or(),
            g0 = wr(),
            v0 = Tr(),
            h0 = wl();
        Ol.exports = d0 ? Object.defineProperties : function(t, r) {
            g0(t);
            for (var n = v0(r), i = h0(r), o = i.length, s = 0, a; o > s;) p0.f(t, a = i[s++], n[a]);
            return t
        }
    });
    var xl = c((c5, Sl) => {
        var y0 = Ir();
        Sl.exports = y0("document", "documentElement")
    });
    var Ml = c((l5, Fl) => {
        var E0 = wr(),
            m0 = Al(),
            Cl = bn(),
            _0 = En(),
            b0 = xl(),
            T0 = io(),
            I0 = co(),
            Rl = ">",
            Ll = "<",
            wo = "prototype",
            Oo = "script",
            Pl = I0("IE_PROTO"),
            Io = function() {},
            ql = function(e) {
                return Ll + Oo + Rl + e + Ll + "/" + Oo + Rl
            },
            Nl = function(e) {
                e.write(ql("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            w0 = function() {
                var e = T0("iframe"),
                    t = "java" + Oo + ":",
                    r;
                return e.style.display = "none", b0.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(ql("document.F=Object")), r.close(), r.F
            },
            Tn, In = function() {
                try {
                    Tn = new ActiveXObject("htmlfile")
                } catch {}
                In = typeof document < "u" ? document.domain && Tn ? Nl(Tn) : w0() : Nl(Tn);
                for (var e = Cl.length; e--;) delete In[wo][Cl[e]];
                return In()
            };
        _0[Pl] = !0;
        Fl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Io[wo] = E0(t), n = new Io, Io[wo] = null, n[Pl] = t) : n = In(), r === void 0 ? n : m0(n, r)
        }
    });
    var Gl = c((f5, Dl) => {
        var O0 = to(),
            A0 = Ml(),
            S0 = Or(),
            Ao = O0("unscopables"),
            So = Array.prototype;
        So[Ao] == null && S0.f(So, Ao, {
            configurable: !0,
            value: A0(null)
        });
        Dl.exports = function(e) {
            So[Ao][e] = !0
        }
    });
    var kl = c(() => {
        "use strict";
        var x0 = Tl(),
            C0 = mo().includes,
            R0 = Gl();
        x0({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return C0(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        R0("includes")
    });
    var Ul = c((g5, Vl) => {
        var L0 = Ee(),
            N0 = ze();
        Vl.exports = function(e, t) {
            return N0(L0[e].prototype[t])
        }
    });
    var Hl = c((v5, Bl) => {
        kl();
        var P0 = Ul();
        Bl.exports = P0("Array", "includes")
    });
    var Xl = c((h5, Wl) => {
        var q0 = Hl();
        Wl.exports = q0
    });
    var zl = c((y5, jl) => {
        var F0 = Xl();
        jl.exports = F0
    });
    var xo = c((E5, Kl) => {
        var M0 = typeof global == "object" && global && global.Object === Object && global;
        Kl.exports = M0
    });
    var Ye = c((m5, Yl) => {
        var D0 = xo(),
            G0 = typeof self == "object" && self && self.Object === Object && self,
            k0 = D0 || G0 || Function("return this")();
        Yl.exports = k0
    });
    var Xt = c((_5, $l) => {
        var V0 = Ye(),
            U0 = V0.Symbol;
        $l.exports = U0
    });
    var ef = c((b5, Jl) => {
        var Ql = Xt(),
            Zl = Object.prototype,
            B0 = Zl.hasOwnProperty,
            H0 = Zl.toString,
            xr = Ql ? Ql.toStringTag : void 0;

        function W0(e) {
            var t = B0.call(e, xr),
                r = e[xr];
            try {
                e[xr] = void 0;
                var n = !0
            } catch {}
            var i = H0.call(e);
            return n && (t ? e[xr] = r : delete e[xr]), i
        }
        Jl.exports = W0
    });
    var rf = c((T5, tf) => {
        var X0 = Object.prototype,
            j0 = X0.toString;

        function z0(e) {
            return j0.call(e)
        }
        tf.exports = z0
    });
    var bt = c((I5, af) => {
        var nf = Xt(),
            K0 = ef(),
            Y0 = rf(),
            $0 = "[object Null]",
            Q0 = "[object Undefined]",
            of = nf ? nf.toStringTag : void 0;

        function Z0(e) {
            return e == null ? e === void 0 ? Q0 : $0 : of && of in Object(e) ? K0(e) : Y0(e)
        }
        af.exports = Z0
    });
    var Co = c((w5, sf) => {
        function J0(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        sf.exports = J0
    });
    var Ro = c((O5, uf) => {
        var ew = Co(),
            tw = ew(Object.getPrototypeOf, Object);
        uf.exports = tw
    });
    var dt = c((A5, cf) => {
        function rw(e) {
            return e != null && typeof e == "object"
        }
        cf.exports = rw
    });
    var Lo = c((S5, ff) => {
        var nw = bt(),
            iw = Ro(),
            ow = dt(),
            aw = "[object Object]",
            sw = Function.prototype,
            uw = Object.prototype,
            lf = sw.toString,
            cw = uw.hasOwnProperty,
            lw = lf.call(Object);

        function fw(e) {
            if (!ow(e) || nw(e) != aw) return !1;
            var t = iw(e);
            if (t === null) return !0;
            var r = cw.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && lf.call(r) == lw
        }
        ff.exports = fw
    });
    var df = c(No => {
        "use strict";
        Object.defineProperty(No, "__esModule", {
            value: !0
        });
        No.default = dw;

        function dw(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var pf = c((qo, Po) => {
        "use strict";
        Object.defineProperty(qo, "__esModule", {
            value: !0
        });
        var pw = df(),
            gw = vw(pw);

        function vw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var jt;
        typeof self < "u" ? jt = self : typeof window < "u" ? jt = window : typeof global < "u" ? jt = global : typeof Po < "u" ? jt = Po : jt = Function("return this")();
        var hw = (0, gw.default)(jt);
        qo.default = hw
    });
    var Fo = c(Cr => {
        "use strict";
        Cr.__esModule = !0;
        Cr.ActionTypes = void 0;
        Cr.default = yf;
        var yw = Lo(),
            Ew = hf(yw),
            mw = pf(),
            gf = hf(mw);

        function hf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var vf = Cr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function yf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(yf)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                s = [],
                a = s,
                u = !1;

            function l() {
                a === s && (a = s.slice())
            }

            function g() {
                return o
            }

            function d(_) {
                if (typeof _ != "function") throw new Error("Expected listener to be a function.");
                var w = !0;
                return l(), a.push(_),
                    function() {
                        if (w) {
                            w = !1, l();
                            var C = a.indexOf(_);
                            a.splice(C, 1)
                        }
                    }
            }

            function p(_) {
                if (!(0, Ew.default)(_)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, _)
                } finally {
                    u = !1
                }
                for (var w = s = a, m = 0; m < w.length; m++) w[m]();
                return _
            }

            function h(_) {
                if (typeof _ != "function") throw new Error("Expected the nextReducer to be a function.");
                i = _, p({
                    type: vf.INIT
                })
            }

            function b() {
                var _, w = d;
                return _ = {
                    subscribe: function(C) {
                        if (typeof C != "object") throw new TypeError("Expected the observer to be an object.");

                        function O() {
                            C.next && C.next(g())
                        }
                        O();
                        var N = w(O);
                        return {
                            unsubscribe: N
                        }
                    }
                }, _[gf.default] = function() {
                    return this
                }, _
            }
            return p({
                type: vf.INIT
            }), n = {
                dispatch: p,
                subscribe: d,
                getState: g,
                replaceReducer: h
            }, n[gf.default] = b, n
        }
    });
    var Do = c(Mo => {
        "use strict";
        Mo.__esModule = !0;
        Mo.default = _w;

        function _w(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var _f = c(Go => {
        "use strict";
        Go.__esModule = !0;
        Go.default = Ow;
        var Ef = Fo(),
            bw = Lo(),
            L5 = mf(bw),
            Tw = Do(),
            N5 = mf(Tw);

        function mf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Iw(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function ww(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: Ef.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + Ef.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function Ow(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var s;
            var a;
            try {
                ww(r)
            } catch (u) {
                a = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    g = arguments[1];
                if (a) throw a;
                if (!1) var d;
                for (var p = !1, h = {}, b = 0; b < o.length; b++) {
                    var _ = o[b],
                        w = r[_],
                        m = l[_],
                        C = w(m, g);
                    if (typeof C > "u") {
                        var O = Iw(_, g);
                        throw new Error(O)
                    }
                    h[_] = C, p = p || C !== m
                }
                return p ? h : l
            }
        }
    });
    var Tf = c(ko => {
        "use strict";
        ko.__esModule = !0;
        ko.default = Aw;

        function bf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function Aw(e, t) {
            if (typeof e == "function") return bf(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    s = e[o];
                typeof s == "function" && (n[o] = bf(s, t))
            }
            return n
        }
    });
    var Uo = c(Vo => {
        "use strict";
        Vo.__esModule = !0;
        Vo.default = Sw;

        function Sw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, s) {
                    return s(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var If = c(Bo => {
        "use strict";
        Bo.__esModule = !0;
        var xw = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Bo.default = Nw;
        var Cw = Uo(),
            Rw = Lw(Cw);

        function Lw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Nw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, s) {
                    var a = n(i, o, s),
                        u = a.dispatch,
                        l = [],
                        g = {
                            getState: a.getState,
                            dispatch: function(p) {
                                return u(p)
                            }
                        };
                    return l = t.map(function(d) {
                        return d(g)
                    }), u = Rw.default.apply(void 0, l)(a.dispatch), xw({}, a, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var Ho = c(Be => {
        "use strict";
        Be.__esModule = !0;
        Be.compose = Be.applyMiddleware = Be.bindActionCreators = Be.combineReducers = Be.createStore = void 0;
        var Pw = Fo(),
            qw = zt(Pw),
            Fw = _f(),
            Mw = zt(Fw),
            Dw = Tf(),
            Gw = zt(Dw),
            kw = If(),
            Vw = zt(kw),
            Uw = Uo(),
            Bw = zt(Uw),
            Hw = Do(),
            D5 = zt(Hw);

        function zt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Be.createStore = qw.default;
        Be.combineReducers = Mw.default;
        Be.bindActionCreators = Gw.default;
        Be.applyMiddleware = Vw.default;
        Be.compose = Bw.default
    });
    var $e, Wo, it, Ww, Xw, wn, jw, Xo = ye(() => {
        "use strict";
        $e = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Wo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, it = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, Ww = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, Xw = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, wn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, jw = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var De, zw, On = ye(() => {
        "use strict";
        De = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, zw = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var Kw, wf = ye(() => {
        "use strict";
        Kw = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var Yw, $w, Qw, Zw, Jw, eO, tO, jo, Of = ye(() => {
        "use strict";
        On();
        ({
            TRANSFORM_MOVE: Yw,
            TRANSFORM_SCALE: $w,
            TRANSFORM_ROTATE: Qw,
            TRANSFORM_SKEW: Zw,
            STYLE_SIZE: Jw,
            STYLE_FILTER: eO,
            STYLE_FONT_VARIATION: tO
        } = De), jo = {
            [Yw]: !0,
            [$w]: !0,
            [Qw]: !0,
            [Zw]: !0,
            [Jw]: !0,
            [eO]: !0,
            [tO]: !0
        }
    });
    var Ie = {};
    Me(Ie, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => EO,
        IX2_ANIMATION_FRAME_CHANGED: () => dO,
        IX2_CLEAR_REQUESTED: () => cO,
        IX2_ELEMENT_STATE_CHANGED: () => yO,
        IX2_EVENT_LISTENER_ADDED: () => lO,
        IX2_EVENT_STATE_CHANGED: () => fO,
        IX2_INSTANCE_ADDED: () => gO,
        IX2_INSTANCE_REMOVED: () => hO,
        IX2_INSTANCE_STARTED: () => vO,
        IX2_MEDIA_QUERIES_DEFINED: () => _O,
        IX2_PARAMETER_CHANGED: () => pO,
        IX2_PLAYBACK_REQUESTED: () => sO,
        IX2_PREVIEW_REQUESTED: () => aO,
        IX2_RAW_DATA_IMPORTED: () => rO,
        IX2_SESSION_INITIALIZED: () => nO,
        IX2_SESSION_STARTED: () => iO,
        IX2_SESSION_STOPPED: () => oO,
        IX2_STOP_REQUESTED: () => uO,
        IX2_TEST_FRAME_RENDERED: () => bO,
        IX2_VIEWPORT_WIDTH_CHANGED: () => mO
    });
    var rO, nO, iO, oO, aO, sO, uO, cO, lO, fO, dO, pO, gO, vO, hO, yO, EO, mO, _O, bO, Af = ye(() => {
        "use strict";
        rO = "IX2_RAW_DATA_IMPORTED", nO = "IX2_SESSION_INITIALIZED", iO = "IX2_SESSION_STARTED", oO = "IX2_SESSION_STOPPED", aO = "IX2_PREVIEW_REQUESTED", sO = "IX2_PLAYBACK_REQUESTED", uO = "IX2_STOP_REQUESTED", cO = "IX2_CLEAR_REQUESTED", lO = "IX2_EVENT_LISTENER_ADDED", fO = "IX2_EVENT_STATE_CHANGED", dO = "IX2_ANIMATION_FRAME_CHANGED", pO = "IX2_PARAMETER_CHANGED", gO = "IX2_INSTANCE_ADDED", vO = "IX2_INSTANCE_STARTED", hO = "IX2_INSTANCE_REMOVED", yO = "IX2_ELEMENT_STATE_CHANGED", EO = "IX2_ACTION_LIST_PLAYBACK_CHANGED", mO = "IX2_VIEWPORT_WIDTH_CHANGED", _O = "IX2_MEDIA_QUERIES_DEFINED", bO = "IX2_TEST_FRAME_RENDERED"
    });
    var Ce = {};
    Me(Ce, {
        ABSTRACT_NODE: () => mA,
        AUTO: () => uA,
        BACKGROUND: () => rA,
        BACKGROUND_COLOR: () => tA,
        BAR_DELIMITER: () => fA,
        BORDER_COLOR: () => nA,
        BOUNDARY_SELECTOR: () => AO,
        CHILDREN: () => dA,
        COLON_DELIMITER: () => lA,
        COLOR: () => iA,
        COMMA_DELIMITER: () => cA,
        CONFIG_UNIT: () => qO,
        CONFIG_VALUE: () => RO,
        CONFIG_X_UNIT: () => LO,
        CONFIG_X_VALUE: () => SO,
        CONFIG_Y_UNIT: () => NO,
        CONFIG_Y_VALUE: () => xO,
        CONFIG_Z_UNIT: () => PO,
        CONFIG_Z_VALUE: () => CO,
        DISPLAY: () => oA,
        FILTER: () => QO,
        FLEX: () => aA,
        FONT_VARIATION_SETTINGS: () => ZO,
        HEIGHT: () => eA,
        HTML_ELEMENT: () => yA,
        IMMEDIATE_CHILDREN: () => pA,
        IX2_ID_DELIMITER: () => TO,
        OPACITY: () => $O,
        PARENT: () => vA,
        PLAIN_OBJECT: () => EA,
        PRESERVE_3D: () => hA,
        RENDER_GENERAL: () => bA,
        RENDER_PLUGIN: () => IA,
        RENDER_STYLE: () => TA,
        RENDER_TRANSFORM: () => _A,
        ROTATE_X: () => WO,
        ROTATE_Y: () => XO,
        ROTATE_Z: () => jO,
        SCALE_3D: () => HO,
        SCALE_X: () => VO,
        SCALE_Y: () => UO,
        SCALE_Z: () => BO,
        SIBLINGS: () => gA,
        SKEW: () => zO,
        SKEW_X: () => KO,
        SKEW_Y: () => YO,
        TRANSFORM: () => FO,
        TRANSLATE_3D: () => kO,
        TRANSLATE_X: () => MO,
        TRANSLATE_Y: () => DO,
        TRANSLATE_Z: () => GO,
        WF_PAGE: () => IO,
        WIDTH: () => JO,
        WILL_CHANGE: () => sA,
        W_MOD_IX: () => OO,
        W_MOD_JS: () => wO
    });
    var TO, IO, wO, OO, AO, SO, xO, CO, RO, LO, NO, PO, qO, FO, MO, DO, GO, kO, VO, UO, BO, HO, WO, XO, jO, zO, KO, YO, $O, QO, ZO, JO, eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, gA, vA, hA, yA, EA, mA, _A, bA, TA, IA, Sf = ye(() => {
        "use strict";
        TO = "|", IO = "data-wf-page", wO = "w-mod-js", OO = "w-mod-ix", AO = ".w-dyn-item", SO = "xValue", xO = "yValue", CO = "zValue", RO = "value", LO = "xUnit", NO = "yUnit", PO = "zUnit", qO = "unit", FO = "transform", MO = "translateX", DO = "translateY", GO = "translateZ", kO = "translate3d", VO = "scaleX", UO = "scaleY", BO = "scaleZ", HO = "scale3d", WO = "rotateX", XO = "rotateY", jO = "rotateZ", zO = "skew", KO = "skewX", YO = "skewY", $O = "opacity", QO = "filter", ZO = "font-variation-settings", JO = "width", eA = "height", tA = "backgroundColor", rA = "background", nA = "borderColor", iA = "color", oA = "display", aA = "flex", sA = "willChange", uA = "AUTO", cA = ",", lA = ":", fA = "|", dA = "CHILDREN", pA = "IMMEDIATE_CHILDREN", gA = "SIBLINGS", vA = "PARENT", hA = "preserve-3d", yA = "HTML_ELEMENT", EA = "PLAIN_OBJECT", mA = "ABSTRACT_NODE", _A = "RENDER_TRANSFORM", bA = "RENDER_GENERAL", TA = "RENDER_STYLE", IA = "RENDER_PLUGIN"
    });
    var xf = {};
    Me(xf, {
        ActionAppliesTo: () => zw,
        ActionTypeConsts: () => De,
        EventAppliesTo: () => Wo,
        EventBasedOn: () => it,
        EventContinuousMouseAxes: () => Ww,
        EventLimitAffectedElements: () => Xw,
        EventTypeConsts: () => $e,
        IX2EngineActionTypes: () => Ie,
        IX2EngineConstants: () => Ce,
        InteractionTypeConsts: () => Kw,
        QuickEffectDirectionConsts: () => jw,
        QuickEffectIds: () => wn,
        ReducedMotionTypes: () => jo
    });
    var Ge = ye(() => {
        "use strict";
        Xo();
        On();
        wf();
        Of();
        Af();
        Sf();
        On();
        Xo()
    });
    var wA, Cf, Rf = ye(() => {
        "use strict";
        Ge();
        ({
            IX2_RAW_DATA_IMPORTED: wA
        } = Ie), Cf = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case wA:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Kt = c(_e => {
        "use strict";
        Object.defineProperty(_e, "__esModule", {
            value: !0
        });
        var OA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        _e.clone = Sn;
        _e.addLast = Pf;
        _e.addFirst = qf;
        _e.removeLast = Ff;
        _e.removeFirst = Mf;
        _e.insert = Df;
        _e.removeAt = Gf;
        _e.replaceAt = kf;
        _e.getIn = xn;
        _e.set = Cn;
        _e.setIn = Rn;
        _e.update = Uf;
        _e.updateIn = Bf;
        _e.merge = Hf;
        _e.mergeDeep = Wf;
        _e.mergeIn = Xf;
        _e.omit = jf;
        _e.addDefaults = zf;
        var Lf = "INVALID_ARGS";

        function Nf(e) {
            throw new Error(e)
        }

        function zo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var AA = {}.hasOwnProperty;

        function Sn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = zo(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function ke(e, t, r) {
            var n = r;
            n == null && Nf(Lf);
            for (var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3; a < o; a++) s[a - 3] = arguments[a];
            for (var u = 0; u < s.length; u++) {
                var l = s[u];
                if (l != null) {
                    var g = zo(l);
                    if (g.length)
                        for (var d = 0; d <= g.length; d++) {
                            var p = g[d];
                            if (!(e && n[p] !== void 0)) {
                                var h = l[p];
                                t && An(n[p]) && An(h) && (h = ke(e, t, n[p], h)), !(h === void 0 || h === n[p]) && (i || (i = !0, n = Sn(n)), n[p] = h)
                            }
                        }
                }
            }
            return n
        }

        function An(e) {
            var t = typeof e > "u" ? "undefined" : OA(e);
            return e != null && (t === "object" || t === "function")
        }

        function Pf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function qf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Ff(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Mf(e) {
            return e.length ? e.slice(1) : e
        }

        function Df(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Gf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function kf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function xn(e, t) {
            if (!Array.isArray(t) && Nf(Lf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r?.[i], r === void 0) return r
                }
                return r
            }
        }

        function Cn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ?? n;
            if (i[t] === r) return i;
            var o = Sn(i);
            return o[t] = r, o
        }

        function Vf(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var s = An(e) && An(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Vf(s, t, r, n + 1)
            }
            return Cn(e, o, i)
        }

        function Rn(e, t, r) {
            return t.length ? Vf(e, t, r, 0) : r
        }

        function Uf(e, t, r) {
            var n = e?.[t],
                i = r(n);
            return Cn(e, t, i)
        }

        function Bf(e, t, r) {
            var n = xn(e, t),
                i = r(n);
            return Rn(e, t, i)
        }

        function Hf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? ke.call.apply(ke, [null, !1, !1, e, t, r, n, i, o].concat(a)) : ke(!1, !1, e, t, r, n, i, o)
        }

        function Wf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? ke.call.apply(ke, [null, !1, !0, e, t, r, n, i, o].concat(a)) : ke(!1, !0, e, t, r, n, i, o)
        }

        function Xf(e, t, r, n, i, o, s) {
            var a = xn(e, t);
            a == null && (a = {});
            for (var u = void 0, l = arguments.length, g = Array(l > 7 ? l - 7 : 0), d = 7; d < l; d++) g[d - 7] = arguments[d];
            return g.length ? u = ke.call.apply(ke, [null, !1, !1, a, r, n, i, o, s].concat(g)) : u = ke(!1, !1, a, r, n, i, o, s), Rn(e, t, u)
        }

        function jf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (AA.call(e, r[i])) {
                    n = !0;
                    break
                } if (!n) return e;
            for (var o = {}, s = zo(e), a = 0; a < s.length; a++) {
                var u = s[a];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function zf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? ke.call.apply(ke, [null, !0, !1, e, t, r, n, i, o].concat(a)) : ke(!0, !1, e, t, r, n, i, o)
        }
        var SA = {
            clone: Sn,
            addLast: Pf,
            addFirst: qf,
            removeLast: Ff,
            removeFirst: Mf,
            insert: Df,
            removeAt: Gf,
            replaceAt: kf,
            getIn: xn,
            set: Cn,
            setIn: Rn,
            update: Uf,
            updateIn: Bf,
            merge: Hf,
            mergeDeep: Wf,
            mergeIn: Xf,
            omit: jf,
            addDefaults: zf
        };
        _e.default = SA
    });
    var Yf, xA, CA, RA, LA, NA, Kf, $f, Qf = ye(() => {
        "use strict";
        Ge();
        Yf = ce(Kt()), {
            IX2_PREVIEW_REQUESTED: xA,
            IX2_PLAYBACK_REQUESTED: CA,
            IX2_STOP_REQUESTED: RA,
            IX2_CLEAR_REQUESTED: LA
        } = Ie, NA = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Kf = Object.create(null, {
            [xA]: {
                value: "preview"
            },
            [CA]: {
                value: "playback"
            },
            [RA]: {
                value: "stop"
            },
            [LA]: {
                value: "clear"
            }
        }), $f = (e = NA, t) => {
            if (t.type in Kf) {
                let r = [Kf[t.type]];
                return (0, Yf.setIn)(e, [r], {
                    ...t.payload
                })
            }
            return e
        }
    });
    var Ne, PA, qA, FA, MA, DA, GA, kA, VA, UA, BA, Zf, HA, Jf, ed = ye(() => {
        "use strict";
        Ge();
        Ne = ce(Kt()), {
            IX2_SESSION_INITIALIZED: PA,
            IX2_SESSION_STARTED: qA,
            IX2_TEST_FRAME_RENDERED: FA,
            IX2_SESSION_STOPPED: MA,
            IX2_EVENT_LISTENER_ADDED: DA,
            IX2_EVENT_STATE_CHANGED: GA,
            IX2_ANIMATION_FRAME_CHANGED: kA,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: VA,
            IX2_VIEWPORT_WIDTH_CHANGED: UA,
            IX2_MEDIA_QUERIES_DEFINED: BA
        } = Ie, Zf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, HA = 20, Jf = (e = Zf, t) => {
            switch (t.type) {
                case PA: {
                    let {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    } = t.payload;
                    return (0, Ne.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
                case qA:
                    return (0, Ne.set)(e, "active", !0);
                case FA: {
                    let {
                        payload: {
                            step: r = HA
                        }
                    } = t;
                    return (0, Ne.set)(e, "tick", e.tick + r)
                }
                case MA:
                    return Zf;
                case kA: {
                    let {
                        payload: {
                            now: r
                        }
                    } = t;
                    return (0, Ne.set)(e, "tick", r)
                }
                case DA: {
                    let r = (0, Ne.addLast)(e.eventListeners, t.payload);
                    return (0, Ne.set)(e, "eventListeners", r)
                }
                case GA: {
                    let {
                        stateKey: r,
                        newState: n
                    } = t.payload;
                    return (0, Ne.setIn)(e, ["eventState", r], n)
                }
                case VA: {
                    let {
                        actionListId: r,
                        isPlaying: n
                    } = t.payload;
                    return (0, Ne.setIn)(e, ["playbackState", r], n)
                }
                case UA: {
                    let {
                        width: r,
                        mediaQueries: n
                    } = t.payload, i = n.length, o = null;
                    for (let s = 0; s < i; s++) {
                        let {
                            key: a,
                            min: u,
                            max: l
                        } = n[s];
                        if (r >= u && r <= l) {
                            o = a;
                            break
                        }
                    }
                    return (0, Ne.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: o
                    })
                }
                case BA:
                    return (0, Ne.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var rd = c((nH, td) => {
        function WA() {
            this.__data__ = [], this.size = 0
        }
        td.exports = WA
    });
    var Ln = c((iH, nd) => {
        function XA(e, t) {
            return e === t || e !== e && t !== t
        }
        nd.exports = XA
    });
    var Rr = c((oH, id) => {
        var jA = Ln();

        function zA(e, t) {
            for (var r = e.length; r--;)
                if (jA(e[r][0], t)) return r;
            return -1
        }
        id.exports = zA
    });
    var ad = c((aH, od) => {
        var KA = Rr(),
            YA = Array.prototype,
            $A = YA.splice;

        function QA(e) {
            var t = this.__data__,
                r = KA(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : $A.call(t, r, 1), --this.size, !0
        }
        od.exports = QA
    });
    var ud = c((sH, sd) => {
        var ZA = Rr();

        function JA(e) {
            var t = this.__data__,
                r = ZA(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        sd.exports = JA
    });
    var ld = c((uH, cd) => {
        var eS = Rr();

        function tS(e) {
            return eS(this.__data__, e) > -1
        }
        cd.exports = tS
    });
    var dd = c((cH, fd) => {
        var rS = Rr();

        function nS(e, t) {
            var r = this.__data__,
                n = rS(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        fd.exports = nS
    });
    var Lr = c((lH, pd) => {
        var iS = rd(),
            oS = ad(),
            aS = ud(),
            sS = ld(),
            uS = dd();

        function Yt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Yt.prototype.clear = iS;
        Yt.prototype.delete = oS;
        Yt.prototype.get = aS;
        Yt.prototype.has = sS;
        Yt.prototype.set = uS;
        pd.exports = Yt
    });
    var vd = c((fH, gd) => {
        var cS = Lr();

        function lS() {
            this.__data__ = new cS, this.size = 0
        }
        gd.exports = lS
    });
    var yd = c((dH, hd) => {
        function fS(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        hd.exports = fS
    });
    var md = c((pH, Ed) => {
        function dS(e) {
            return this.__data__.get(e)
        }
        Ed.exports = dS
    });
    var bd = c((gH, _d) => {
        function pS(e) {
            return this.__data__.has(e)
        }
        _d.exports = pS
    });
    var ot = c((vH, Td) => {
        function gS(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        Td.exports = gS
    });
    var Ko = c((hH, Id) => {
        var vS = bt(),
            hS = ot(),
            yS = "[object AsyncFunction]",
            ES = "[object Function]",
            mS = "[object GeneratorFunction]",
            _S = "[object Proxy]";

        function bS(e) {
            if (!hS(e)) return !1;
            var t = vS(e);
            return t == ES || t == mS || t == yS || t == _S
        }
        Id.exports = bS
    });
    var Od = c((yH, wd) => {
        var TS = Ye(),
            IS = TS["__core-js_shared__"];
        wd.exports = IS
    });
    var xd = c((EH, Sd) => {
        var Yo = Od(),
            Ad = function() {
                var e = /[^.]+$/.exec(Yo && Yo.keys && Yo.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function wS(e) {
            return !!Ad && Ad in e
        }
        Sd.exports = wS
    });
    var $o = c((mH, Cd) => {
        var OS = Function.prototype,
            AS = OS.toString;

        function SS(e) {
            if (e != null) {
                try {
                    return AS.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Cd.exports = SS
    });
    var Ld = c((_H, Rd) => {
        var xS = Ko(),
            CS = xd(),
            RS = ot(),
            LS = $o(),
            NS = /[\\^$.*+?()[\]{}|]/g,
            PS = /^\[object .+?Constructor\]$/,
            qS = Function.prototype,
            FS = Object.prototype,
            MS = qS.toString,
            DS = FS.hasOwnProperty,
            GS = RegExp("^" + MS.call(DS).replace(NS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function kS(e) {
            if (!RS(e) || CS(e)) return !1;
            var t = xS(e) ? GS : PS;
            return t.test(LS(e))
        }
        Rd.exports = kS
    });
    var Pd = c((bH, Nd) => {
        function VS(e, t) {
            return e?.[t]
        }
        Nd.exports = VS
    });
    var Tt = c((TH, qd) => {
        var US = Ld(),
            BS = Pd();

        function HS(e, t) {
            var r = BS(e, t);
            return US(r) ? r : void 0
        }
        qd.exports = HS
    });
    var Nn = c((IH, Fd) => {
        var WS = Tt(),
            XS = Ye(),
            jS = WS(XS, "Map");
        Fd.exports = jS
    });
    var Nr = c((wH, Md) => {
        var zS = Tt(),
            KS = zS(Object, "create");
        Md.exports = KS
    });
    var kd = c((OH, Gd) => {
        var Dd = Nr();

        function YS() {
            this.__data__ = Dd ? Dd(null) : {}, this.size = 0
        }
        Gd.exports = YS
    });
    var Ud = c((AH, Vd) => {
        function $S(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Vd.exports = $S
    });
    var Hd = c((SH, Bd) => {
        var QS = Nr(),
            ZS = "__lodash_hash_undefined__",
            JS = Object.prototype,
            ex = JS.hasOwnProperty;

        function tx(e) {
            var t = this.__data__;
            if (QS) {
                var r = t[e];
                return r === ZS ? void 0 : r
            }
            return ex.call(t, e) ? t[e] : void 0
        }
        Bd.exports = tx
    });
    var Xd = c((xH, Wd) => {
        var rx = Nr(),
            nx = Object.prototype,
            ix = nx.hasOwnProperty;

        function ox(e) {
            var t = this.__data__;
            return rx ? t[e] !== void 0 : ix.call(t, e)
        }
        Wd.exports = ox
    });
    var zd = c((CH, jd) => {
        var ax = Nr(),
            sx = "__lodash_hash_undefined__";

        function ux(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = ax && t === void 0 ? sx : t, this
        }
        jd.exports = ux
    });
    var Yd = c((RH, Kd) => {
        var cx = kd(),
            lx = Ud(),
            fx = Hd(),
            dx = Xd(),
            px = zd();

        function $t(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        $t.prototype.clear = cx;
        $t.prototype.delete = lx;
        $t.prototype.get = fx;
        $t.prototype.has = dx;
        $t.prototype.set = px;
        Kd.exports = $t
    });
    var Zd = c((LH, Qd) => {
        var $d = Yd(),
            gx = Lr(),
            vx = Nn();

        function hx() {
            this.size = 0, this.__data__ = {
                hash: new $d,
                map: new(vx || gx),
                string: new $d
            }
        }
        Qd.exports = hx
    });
    var ep = c((NH, Jd) => {
        function yx(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Jd.exports = yx
    });
    var Pr = c((PH, tp) => {
        var Ex = ep();

        function mx(e, t) {
            var r = e.__data__;
            return Ex(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        tp.exports = mx
    });
    var np = c((qH, rp) => {
        var _x = Pr();

        function bx(e) {
            var t = _x(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        rp.exports = bx
    });
    var op = c((FH, ip) => {
        var Tx = Pr();

        function Ix(e) {
            return Tx(this, e).get(e)
        }
        ip.exports = Ix
    });
    var sp = c((MH, ap) => {
        var wx = Pr();

        function Ox(e) {
            return wx(this, e).has(e)
        }
        ap.exports = Ox
    });
    var cp = c((DH, up) => {
        var Ax = Pr();

        function Sx(e, t) {
            var r = Ax(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        up.exports = Sx
    });
    var Pn = c((GH, lp) => {
        var xx = Zd(),
            Cx = np(),
            Rx = op(),
            Lx = sp(),
            Nx = cp();

        function Qt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Qt.prototype.clear = xx;
        Qt.prototype.delete = Cx;
        Qt.prototype.get = Rx;
        Qt.prototype.has = Lx;
        Qt.prototype.set = Nx;
        lp.exports = Qt
    });
    var dp = c((kH, fp) => {
        var Px = Lr(),
            qx = Nn(),
            Fx = Pn(),
            Mx = 200;

        function Dx(e, t) {
            var r = this.__data__;
            if (r instanceof Px) {
                var n = r.__data__;
                if (!qx || n.length < Mx - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new Fx(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        fp.exports = Dx
    });
    var Qo = c((VH, pp) => {
        var Gx = Lr(),
            kx = vd(),
            Vx = yd(),
            Ux = md(),
            Bx = bd(),
            Hx = dp();

        function Zt(e) {
            var t = this.__data__ = new Gx(e);
            this.size = t.size
        }
        Zt.prototype.clear = kx;
        Zt.prototype.delete = Vx;
        Zt.prototype.get = Ux;
        Zt.prototype.has = Bx;
        Zt.prototype.set = Hx;
        pp.exports = Zt
    });
    var vp = c((UH, gp) => {
        var Wx = "__lodash_hash_undefined__";

        function Xx(e) {
            return this.__data__.set(e, Wx), this
        }
        gp.exports = Xx
    });
    var yp = c((BH, hp) => {
        function jx(e) {
            return this.__data__.has(e)
        }
        hp.exports = jx
    });
    var mp = c((HH, Ep) => {
        var zx = Pn(),
            Kx = vp(),
            Yx = yp();

        function qn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new zx; ++t < r;) this.add(e[t])
        }
        qn.prototype.add = qn.prototype.push = Kx;
        qn.prototype.has = Yx;
        Ep.exports = qn
    });
    var bp = c((WH, _p) => {
        function $x(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        _p.exports = $x
    });
    var Ip = c((XH, Tp) => {
        function Qx(e, t) {
            return e.has(t)
        }
        Tp.exports = Qx
    });
    var Zo = c((jH, wp) => {
        var Zx = mp(),
            Jx = bp(),
            eC = Ip(),
            tC = 1,
            rC = 2;

        function nC(e, t, r, n, i, o) {
            var s = r & tC,
                a = e.length,
                u = t.length;
            if (a != u && !(s && u > a)) return !1;
            var l = o.get(e),
                g = o.get(t);
            if (l && g) return l == t && g == e;
            var d = -1,
                p = !0,
                h = r & rC ? new Zx : void 0;
            for (o.set(e, t), o.set(t, e); ++d < a;) {
                var b = e[d],
                    _ = t[d];
                if (n) var w = s ? n(_, b, d, t, e, o) : n(b, _, d, e, t, o);
                if (w !== void 0) {
                    if (w) continue;
                    p = !1;
                    break
                }
                if (h) {
                    if (!Jx(t, function(m, C) {
                            if (!eC(h, C) && (b === m || i(b, m, r, n, o))) return h.push(C)
                        })) {
                        p = !1;
                        break
                    }
                } else if (!(b === _ || i(b, _, r, n, o))) {
                    p = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), p
        }
        wp.exports = nC
    });
    var Ap = c((zH, Op) => {
        var iC = Ye(),
            oC = iC.Uint8Array;
        Op.exports = oC
    });
    var xp = c((KH, Sp) => {
        function aC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        Sp.exports = aC
    });
    var Rp = c((YH, Cp) => {
        function sC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Cp.exports = sC
    });
    var Fp = c(($H, qp) => {
        var Lp = Xt(),
            Np = Ap(),
            uC = Ln(),
            cC = Zo(),
            lC = xp(),
            fC = Rp(),
            dC = 1,
            pC = 2,
            gC = "[object Boolean]",
            vC = "[object Date]",
            hC = "[object Error]",
            yC = "[object Map]",
            EC = "[object Number]",
            mC = "[object RegExp]",
            _C = "[object Set]",
            bC = "[object String]",
            TC = "[object Symbol]",
            IC = "[object ArrayBuffer]",
            wC = "[object DataView]",
            Pp = Lp ? Lp.prototype : void 0,
            Jo = Pp ? Pp.valueOf : void 0;

        function OC(e, t, r, n, i, o, s) {
            switch (r) {
                case wC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case IC:
                    return !(e.byteLength != t.byteLength || !o(new Np(e), new Np(t)));
                case gC:
                case vC:
                case EC:
                    return uC(+e, +t);
                case hC:
                    return e.name == t.name && e.message == t.message;
                case mC:
                case bC:
                    return e == t + "";
                case yC:
                    var a = lC;
                case _C:
                    var u = n & dC;
                    if (a || (a = fC), e.size != t.size && !u) return !1;
                    var l = s.get(e);
                    if (l) return l == t;
                    n |= pC, s.set(e, t);
                    var g = cC(a(e), a(t), n, i, o, s);
                    return s.delete(e), g;
                case TC:
                    if (Jo) return Jo.call(e) == Jo.call(t)
            }
            return !1
        }
        qp.exports = OC
    });
    var Fn = c((QH, Mp) => {
        function AC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        Mp.exports = AC
    });
    var we = c((ZH, Dp) => {
        var SC = Array.isArray;
        Dp.exports = SC
    });
    var ea = c((JH, Gp) => {
        var xC = Fn(),
            CC = we();

        function RC(e, t, r) {
            var n = t(e);
            return CC(e) ? n : xC(n, r(e))
        }
        Gp.exports = RC
    });
    var Vp = c((eW, kp) => {
        function LC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var s = e[r];
                t(s, r, e) && (o[i++] = s)
            }
            return o
        }
        kp.exports = LC
    });
    var ta = c((tW, Up) => {
        function NC() {
            return []
        }
        Up.exports = NC
    });
    var ra = c((rW, Hp) => {
        var PC = Vp(),
            qC = ta(),
            FC = Object.prototype,
            MC = FC.propertyIsEnumerable,
            Bp = Object.getOwnPropertySymbols,
            DC = Bp ? function(e) {
                return e == null ? [] : (e = Object(e), PC(Bp(e), function(t) {
                    return MC.call(e, t)
                }))
            } : qC;
        Hp.exports = DC
    });
    var Xp = c((nW, Wp) => {
        function GC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        Wp.exports = GC
    });
    var zp = c((iW, jp) => {
        var kC = bt(),
            VC = dt(),
            UC = "[object Arguments]";

        function BC(e) {
            return VC(e) && kC(e) == UC
        }
        jp.exports = BC
    });
    var qr = c((oW, $p) => {
        var Kp = zp(),
            HC = dt(),
            Yp = Object.prototype,
            WC = Yp.hasOwnProperty,
            XC = Yp.propertyIsEnumerable,
            jC = Kp(function() {
                return arguments
            }()) ? Kp : function(e) {
                return HC(e) && WC.call(e, "callee") && !XC.call(e, "callee")
            };
        $p.exports = jC
    });
    var Zp = c((aW, Qp) => {
        function zC() {
            return !1
        }
        Qp.exports = zC
    });
    var Mn = c((Fr, Jt) => {
        var KC = Ye(),
            YC = Zp(),
            tg = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
            Jp = tg && typeof Jt == "object" && Jt && !Jt.nodeType && Jt,
            $C = Jp && Jp.exports === tg,
            eg = $C ? KC.Buffer : void 0,
            QC = eg ? eg.isBuffer : void 0,
            ZC = QC || YC;
        Jt.exports = ZC
    });
    var Dn = c((sW, rg) => {
        var JC = 9007199254740991,
            eR = /^(?:0|[1-9]\d*)$/;

        function tR(e, t) {
            var r = typeof e;
            return t = t ?? JC, !!t && (r == "number" || r != "symbol" && eR.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        rg.exports = tR
    });
    var Gn = c((uW, ng) => {
        var rR = 9007199254740991;

        function nR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= rR
        }
        ng.exports = nR
    });
    var og = c((cW, ig) => {
        var iR = bt(),
            oR = Gn(),
            aR = dt(),
            sR = "[object Arguments]",
            uR = "[object Array]",
            cR = "[object Boolean]",
            lR = "[object Date]",
            fR = "[object Error]",
            dR = "[object Function]",
            pR = "[object Map]",
            gR = "[object Number]",
            vR = "[object Object]",
            hR = "[object RegExp]",
            yR = "[object Set]",
            ER = "[object String]",
            mR = "[object WeakMap]",
            _R = "[object ArrayBuffer]",
            bR = "[object DataView]",
            TR = "[object Float32Array]",
            IR = "[object Float64Array]",
            wR = "[object Int8Array]",
            OR = "[object Int16Array]",
            AR = "[object Int32Array]",
            SR = "[object Uint8Array]",
            xR = "[object Uint8ClampedArray]",
            CR = "[object Uint16Array]",
            RR = "[object Uint32Array]",
            he = {};
        he[TR] = he[IR] = he[wR] = he[OR] = he[AR] = he[SR] = he[xR] = he[CR] = he[RR] = !0;
        he[sR] = he[uR] = he[_R] = he[cR] = he[bR] = he[lR] = he[fR] = he[dR] = he[pR] = he[gR] = he[vR] = he[hR] = he[yR] = he[ER] = he[mR] = !1;

        function LR(e) {
            return aR(e) && oR(e.length) && !!he[iR(e)]
        }
        ig.exports = LR
    });
    var sg = c((lW, ag) => {
        function NR(e) {
            return function(t) {
                return e(t)
            }
        }
        ag.exports = NR
    });
    var cg = c((Mr, er) => {
        var PR = xo(),
            ug = typeof Mr == "object" && Mr && !Mr.nodeType && Mr,
            Dr = ug && typeof er == "object" && er && !er.nodeType && er,
            qR = Dr && Dr.exports === ug,
            na = qR && PR.process,
            FR = function() {
                try {
                    var e = Dr && Dr.require && Dr.require("util").types;
                    return e || na && na.binding && na.binding("util")
                } catch {}
            }();
        er.exports = FR
    });
    var kn = c((fW, dg) => {
        var MR = og(),
            DR = sg(),
            lg = cg(),
            fg = lg && lg.isTypedArray,
            GR = fg ? DR(fg) : MR;
        dg.exports = GR
    });
    var ia = c((dW, pg) => {
        var kR = Xp(),
            VR = qr(),
            UR = we(),
            BR = Mn(),
            HR = Dn(),
            WR = kn(),
            XR = Object.prototype,
            jR = XR.hasOwnProperty;

        function zR(e, t) {
            var r = UR(e),
                n = !r && VR(e),
                i = !r && !n && BR(e),
                o = !r && !n && !i && WR(e),
                s = r || n || i || o,
                a = s ? kR(e.length, String) : [],
                u = a.length;
            for (var l in e)(t || jR.call(e, l)) && !(s && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || HR(l, u))) && a.push(l);
            return a
        }
        pg.exports = zR
    });
    var Vn = c((pW, gg) => {
        var KR = Object.prototype;

        function YR(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || KR;
            return e === r
        }
        gg.exports = YR
    });
    var hg = c((gW, vg) => {
        var $R = Co(),
            QR = $R(Object.keys, Object);
        vg.exports = QR
    });
    var Un = c((vW, yg) => {
        var ZR = Vn(),
            JR = hg(),
            eL = Object.prototype,
            tL = eL.hasOwnProperty;

        function rL(e) {
            if (!ZR(e)) return JR(e);
            var t = [];
            for (var r in Object(e)) tL.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        yg.exports = rL
    });
    var Pt = c((hW, Eg) => {
        var nL = Ko(),
            iL = Gn();

        function oL(e) {
            return e != null && iL(e.length) && !nL(e)
        }
        Eg.exports = oL
    });
    var Gr = c((yW, mg) => {
        var aL = ia(),
            sL = Un(),
            uL = Pt();

        function cL(e) {
            return uL(e) ? aL(e) : sL(e)
        }
        mg.exports = cL
    });
    var bg = c((EW, _g) => {
        var lL = ea(),
            fL = ra(),
            dL = Gr();

        function pL(e) {
            return lL(e, dL, fL)
        }
        _g.exports = pL
    });
    var wg = c((mW, Ig) => {
        var Tg = bg(),
            gL = 1,
            vL = Object.prototype,
            hL = vL.hasOwnProperty;

        function yL(e, t, r, n, i, o) {
            var s = r & gL,
                a = Tg(e),
                u = a.length,
                l = Tg(t),
                g = l.length;
            if (u != g && !s) return !1;
            for (var d = u; d--;) {
                var p = a[d];
                if (!(s ? p in t : hL.call(t, p))) return !1
            }
            var h = o.get(e),
                b = o.get(t);
            if (h && b) return h == t && b == e;
            var _ = !0;
            o.set(e, t), o.set(t, e);
            for (var w = s; ++d < u;) {
                p = a[d];
                var m = e[p],
                    C = t[p];
                if (n) var O = s ? n(C, m, p, t, e, o) : n(m, C, p, e, t, o);
                if (!(O === void 0 ? m === C || i(m, C, r, n, o) : O)) {
                    _ = !1;
                    break
                }
                w || (w = p == "constructor")
            }
            if (_ && !w) {
                var N = e.constructor,
                    P = t.constructor;
                N != P && "constructor" in e && "constructor" in t && !(typeof N == "function" && N instanceof N && typeof P == "function" && P instanceof P) && (_ = !1)
            }
            return o.delete(e), o.delete(t), _
        }
        Ig.exports = yL
    });
    var Ag = c((_W, Og) => {
        var EL = Tt(),
            mL = Ye(),
            _L = EL(mL, "DataView");
        Og.exports = _L
    });
    var xg = c((bW, Sg) => {
        var bL = Tt(),
            TL = Ye(),
            IL = bL(TL, "Promise");
        Sg.exports = IL
    });
    var Rg = c((TW, Cg) => {
        var wL = Tt(),
            OL = Ye(),
            AL = wL(OL, "Set");
        Cg.exports = AL
    });
    var oa = c((IW, Lg) => {
        var SL = Tt(),
            xL = Ye(),
            CL = SL(xL, "WeakMap");
        Lg.exports = CL
    });
    var Bn = c((wW, Gg) => {
        var aa = Ag(),
            sa = Nn(),
            ua = xg(),
            ca = Rg(),
            la = oa(),
            Dg = bt(),
            tr = $o(),
            Ng = "[object Map]",
            RL = "[object Object]",
            Pg = "[object Promise]",
            qg = "[object Set]",
            Fg = "[object WeakMap]",
            Mg = "[object DataView]",
            LL = tr(aa),
            NL = tr(sa),
            PL = tr(ua),
            qL = tr(ca),
            FL = tr(la),
            qt = Dg;
        (aa && qt(new aa(new ArrayBuffer(1))) != Mg || sa && qt(new sa) != Ng || ua && qt(ua.resolve()) != Pg || ca && qt(new ca) != qg || la && qt(new la) != Fg) && (qt = function(e) {
            var t = Dg(e),
                r = t == RL ? e.constructor : void 0,
                n = r ? tr(r) : "";
            if (n) switch (n) {
                case LL:
                    return Mg;
                case NL:
                    return Ng;
                case PL:
                    return Pg;
                case qL:
                    return qg;
                case FL:
                    return Fg
            }
            return t
        });
        Gg.exports = qt
    });
    var jg = c((OW, Xg) => {
        var fa = Qo(),
            ML = Zo(),
            DL = Fp(),
            GL = wg(),
            kg = Bn(),
            Vg = we(),
            Ug = Mn(),
            kL = kn(),
            VL = 1,
            Bg = "[object Arguments]",
            Hg = "[object Array]",
            Hn = "[object Object]",
            UL = Object.prototype,
            Wg = UL.hasOwnProperty;

        function BL(e, t, r, n, i, o) {
            var s = Vg(e),
                a = Vg(t),
                u = s ? Hg : kg(e),
                l = a ? Hg : kg(t);
            u = u == Bg ? Hn : u, l = l == Bg ? Hn : l;
            var g = u == Hn,
                d = l == Hn,
                p = u == l;
            if (p && Ug(e)) {
                if (!Ug(t)) return !1;
                s = !0, g = !1
            }
            if (p && !g) return o || (o = new fa), s || kL(e) ? ML(e, t, r, n, i, o) : DL(e, t, u, r, n, i, o);
            if (!(r & VL)) {
                var h = g && Wg.call(e, "__wrapped__"),
                    b = d && Wg.call(t, "__wrapped__");
                if (h || b) {
                    var _ = h ? e.value() : e,
                        w = b ? t.value() : t;
                    return o || (o = new fa), i(_, w, r, n, o)
                }
            }
            return p ? (o || (o = new fa), GL(e, t, r, n, i, o)) : !1
        }
        Xg.exports = BL
    });
    var da = c((AW, Yg) => {
        var HL = jg(),
            zg = dt();

        function Kg(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !zg(e) && !zg(t) ? e !== e && t !== t : HL(e, t, r, n, Kg, i)
        }
        Yg.exports = Kg
    });
    var Qg = c((SW, $g) => {
        var WL = Qo(),
            XL = da(),
            jL = 1,
            zL = 2;

        function KL(e, t, r, n) {
            var i = r.length,
                o = i,
                s = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var a = r[i];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
            }
            for (; ++i < o;) {
                a = r[i];
                var u = a[0],
                    l = e[u],
                    g = a[1];
                if (s && a[2]) {
                    if (l === void 0 && !(u in e)) return !1
                } else {
                    var d = new WL;
                    if (n) var p = n(l, g, u, e, t, d);
                    if (!(p === void 0 ? XL(g, l, jL | zL, n, d) : p)) return !1
                }
            }
            return !0
        }
        $g.exports = KL
    });
    var pa = c((xW, Zg) => {
        var YL = ot();

        function $L(e) {
            return e === e && !YL(e)
        }
        Zg.exports = $L
    });
    var ev = c((CW, Jg) => {
        var QL = pa(),
            ZL = Gr();

        function JL(e) {
            for (var t = ZL(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, QL(i)]
            }
            return t
        }
        Jg.exports = JL
    });
    var ga = c((RW, tv) => {
        function eN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        tv.exports = eN
    });
    var nv = c((LW, rv) => {
        var tN = Qg(),
            rN = ev(),
            nN = ga();

        function iN(e) {
            var t = rN(e);
            return t.length == 1 && t[0][2] ? nN(t[0][0], t[0][1]) : function(r) {
                return r === e || tN(r, e, t)
            }
        }
        rv.exports = iN
    });
    var kr = c((NW, iv) => {
        var oN = bt(),
            aN = dt(),
            sN = "[object Symbol]";

        function uN(e) {
            return typeof e == "symbol" || aN(e) && oN(e) == sN
        }
        iv.exports = uN
    });
    var Wn = c((PW, ov) => {
        var cN = we(),
            lN = kr(),
            fN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            dN = /^\w*$/;

        function pN(e, t) {
            if (cN(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || lN(e) ? !0 : dN.test(e) || !fN.test(e) || t != null && e in Object(t)
        }
        ov.exports = pN
    });
    var uv = c((qW, sv) => {
        var av = Pn(),
            gN = "Expected a function";

        function va(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(gN);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var s = e.apply(this, n);
                return r.cache = o.set(i, s) || o, s
            };
            return r.cache = new(va.Cache || av), r
        }
        va.Cache = av;
        sv.exports = va
    });
    var lv = c((FW, cv) => {
        var vN = uv(),
            hN = 500;

        function yN(e) {
            var t = vN(e, function(n) {
                    return r.size === hN && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        cv.exports = yN
    });
    var dv = c((MW, fv) => {
        var EN = lv(),
            mN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            _N = /\\(\\)?/g,
            bN = EN(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(mN, function(r, n, i, o) {
                    t.push(i ? o.replace(_N, "$1") : n || r)
                }), t
            });
        fv.exports = bN
    });
    var ha = c((DW, pv) => {
        function TN(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        pv.exports = TN
    });
    var mv = c((GW, Ev) => {
        var gv = Xt(),
            IN = ha(),
            wN = we(),
            ON = kr(),
            AN = 1 / 0,
            vv = gv ? gv.prototype : void 0,
            hv = vv ? vv.toString : void 0;

        function yv(e) {
            if (typeof e == "string") return e;
            if (wN(e)) return IN(e, yv) + "";
            if (ON(e)) return hv ? hv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -AN ? "-0" : t
        }
        Ev.exports = yv
    });
    var bv = c((kW, _v) => {
        var SN = mv();

        function xN(e) {
            return e == null ? "" : SN(e)
        }
        _v.exports = xN
    });
    var Vr = c((VW, Tv) => {
        var CN = we(),
            RN = Wn(),
            LN = dv(),
            NN = bv();

        function PN(e, t) {
            return CN(e) ? e : RN(e, t) ? [e] : LN(NN(e))
        }
        Tv.exports = PN
    });
    var rr = c((UW, Iv) => {
        var qN = kr(),
            FN = 1 / 0;

        function MN(e) {
            if (typeof e == "string" || qN(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -FN ? "-0" : t
        }
        Iv.exports = MN
    });
    var Xn = c((BW, wv) => {
        var DN = Vr(),
            GN = rr();

        function kN(e, t) {
            t = DN(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[GN(t[r++])];
            return r && r == n ? e : void 0
        }
        wv.exports = kN
    });
    var jn = c((HW, Ov) => {
        var VN = Xn();

        function UN(e, t, r) {
            var n = e == null ? void 0 : VN(e, t);
            return n === void 0 ? r : n
        }
        Ov.exports = UN
    });
    var Sv = c((WW, Av) => {
        function BN(e, t) {
            return e != null && t in Object(e)
        }
        Av.exports = BN
    });
    var Cv = c((XW, xv) => {
        var HN = Vr(),
            WN = qr(),
            XN = we(),
            jN = Dn(),
            zN = Gn(),
            KN = rr();

        function YN(e, t, r) {
            t = HN(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var s = KN(t[n]);
                if (!(o = e != null && r(e, s))) break;
                e = e[s]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && zN(i) && jN(s, i) && (XN(e) || WN(e)))
        }
        xv.exports = YN
    });
    var Lv = c((jW, Rv) => {
        var $N = Sv(),
            QN = Cv();

        function ZN(e, t) {
            return e != null && QN(e, t, $N)
        }
        Rv.exports = ZN
    });
    var Pv = c((zW, Nv) => {
        var JN = da(),
            eP = jn(),
            tP = Lv(),
            rP = Wn(),
            nP = pa(),
            iP = ga(),
            oP = rr(),
            aP = 1,
            sP = 2;

        function uP(e, t) {
            return rP(e) && nP(t) ? iP(oP(e), t) : function(r) {
                var n = eP(r, e);
                return n === void 0 && n === t ? tP(r, e) : JN(t, n, aP | sP)
            }
        }
        Nv.exports = uP
    });
    var zn = c((KW, qv) => {
        function cP(e) {
            return e
        }
        qv.exports = cP
    });
    var ya = c((YW, Fv) => {
        function lP(e) {
            return function(t) {
                return t?.[e]
            }
        }
        Fv.exports = lP
    });
    var Dv = c(($W, Mv) => {
        var fP = Xn();

        function dP(e) {
            return function(t) {
                return fP(t, e)
            }
        }
        Mv.exports = dP
    });
    var kv = c((QW, Gv) => {
        var pP = ya(),
            gP = Dv(),
            vP = Wn(),
            hP = rr();

        function yP(e) {
            return vP(e) ? pP(hP(e)) : gP(e)
        }
        Gv.exports = yP
    });
    var It = c((ZW, Vv) => {
        var EP = nv(),
            mP = Pv(),
            _P = zn(),
            bP = we(),
            TP = kv();

        function IP(e) {
            return typeof e == "function" ? e : e == null ? _P : typeof e == "object" ? bP(e) ? mP(e[0], e[1]) : EP(e) : TP(e)
        }
        Vv.exports = IP
    });
    var Ea = c((JW, Uv) => {
        var wP = It(),
            OP = Pt(),
            AP = Gr();

        function SP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!OP(t)) {
                    var o = wP(r, 3);
                    t = AP(t), r = function(a) {
                        return o(i[a], a, i)
                    }
                }
                var s = e(t, r, n);
                return s > -1 ? i[o ? t[s] : s] : void 0
            }
        }
        Uv.exports = SP
    });
    var ma = c((eX, Bv) => {
        function xP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Bv.exports = xP
    });
    var Wv = c((tX, Hv) => {
        var CP = /\s/;

        function RP(e) {
            for (var t = e.length; t-- && CP.test(e.charAt(t)););
            return t
        }
        Hv.exports = RP
    });
    var jv = c((rX, Xv) => {
        var LP = Wv(),
            NP = /^\s+/;

        function PP(e) {
            return e && e.slice(0, LP(e) + 1).replace(NP, "")
        }
        Xv.exports = PP
    });
    var Kn = c((nX, Yv) => {
        var qP = jv(),
            zv = ot(),
            FP = kr(),
            Kv = 0 / 0,
            MP = /^[-+]0x[0-9a-f]+$/i,
            DP = /^0b[01]+$/i,
            GP = /^0o[0-7]+$/i,
            kP = parseInt;

        function VP(e) {
            if (typeof e == "number") return e;
            if (FP(e)) return Kv;
            if (zv(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = zv(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = qP(e);
            var r = DP.test(e);
            return r || GP.test(e) ? kP(e.slice(2), r ? 2 : 8) : MP.test(e) ? Kv : +e
        }
        Yv.exports = VP
    });
    var Zv = c((iX, Qv) => {
        var UP = Kn(),
            $v = 1 / 0,
            BP = 17976931348623157e292;

        function HP(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = UP(e), e === $v || e === -$v) {
                var t = e < 0 ? -1 : 1;
                return t * BP
            }
            return e === e ? e : 0
        }
        Qv.exports = HP
    });
    var _a = c((oX, Jv) => {
        var WP = Zv();

        function XP(e) {
            var t = WP(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Jv.exports = XP
    });
    var th = c((aX, eh) => {
        var jP = ma(),
            zP = It(),
            KP = _a(),
            YP = Math.max;

        function $P(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : KP(r);
            return i < 0 && (i = YP(n + i, 0)), jP(e, zP(t, 3), i)
        }
        eh.exports = $P
    });
    var ba = c((sX, rh) => {
        var QP = Ea(),
            ZP = th(),
            JP = QP(ZP);
        rh.exports = JP
    });
    var oh = {};
    Me(oh, {
        ELEMENT_MATCHES: () => eq,
        FLEX_PREFIXED: () => Ta,
        IS_BROWSER_ENV: () => Qe,
        TRANSFORM_PREFIXED: () => wt,
        TRANSFORM_STYLE_PREFIXED: () => $n,
        withBrowser: () => Yn
    });
    var ih, Qe, Yn, eq, Ta, wt, nh, $n, Qn = ye(() => {
        "use strict";
        ih = ce(ba()), Qe = typeof window < "u", Yn = (e, t) => Qe ? e() : t, eq = Yn(() => (0, ih.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Ta = Yn(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), wt = Yn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), nh = wt.split("transform")[0], $n = nh ? nh + "TransformStyle" : "transformStyle"
    });
    var Ia = c((uX, lh) => {
        var tq = 4,
            rq = .001,
            nq = 1e-7,
            iq = 10,
            Ur = 11,
            Zn = 1 / (Ur - 1),
            oq = typeof Float32Array == "function";

        function ah(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function sh(e, t) {
            return 3 * t - 6 * e
        }

        function uh(e) {
            return 3 * e
        }

        function Jn(e, t, r) {
            return ((ah(t, r) * e + sh(t, r)) * e + uh(t)) * e
        }

        function ch(e, t, r) {
            return 3 * ah(t, r) * e * e + 2 * sh(t, r) * e + uh(t)
        }

        function aq(e, t, r, n, i) {
            var o, s, a = 0;
            do s = t + (r - t) / 2, o = Jn(s, n, i) - e, o > 0 ? r = s : t = s; while (Math.abs(o) > nq && ++a < iq);
            return s
        }

        function sq(e, t, r, n) {
            for (var i = 0; i < tq; ++i) {
                var o = ch(t, r, n);
                if (o === 0) return t;
                var s = Jn(t, r, n) - e;
                t -= s / o
            }
            return t
        }
        lh.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = oq ? new Float32Array(Ur) : new Array(Ur);
            if (t !== r || n !== i)
                for (var s = 0; s < Ur; ++s) o[s] = Jn(s * Zn, t, n);

            function a(u) {
                for (var l = 0, g = 1, d = Ur - 1; g !== d && o[g] <= u; ++g) l += Zn;
                --g;
                var p = (u - o[g]) / (o[g + 1] - o[g]),
                    h = l + p * Zn,
                    b = ch(h, t, n);
                return b >= rq ? sq(u, h, t, n) : b === 0 ? h : aq(u, l, l + Zn, t, n)
            }
            return function(l) {
                return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : Jn(a(l), r, i)
            }
        }
    });
    var Hr = {};
    Me(Hr, {
        bounce: () => Hq,
        bouncePast: () => Wq,
        ease: () => uq,
        easeIn: () => cq,
        easeInOut: () => fq,
        easeOut: () => lq,
        inBack: () => qq,
        inCirc: () => Rq,
        inCubic: () => vq,
        inElastic: () => Dq,
        inExpo: () => Sq,
        inOutBack: () => Mq,
        inOutCirc: () => Nq,
        inOutCubic: () => yq,
        inOutElastic: () => kq,
        inOutExpo: () => Cq,
        inOutQuad: () => gq,
        inOutQuart: () => _q,
        inOutQuint: () => Iq,
        inOutSine: () => Aq,
        inQuad: () => dq,
        inQuart: () => Eq,
        inQuint: () => bq,
        inSine: () => wq,
        outBack: () => Fq,
        outBounce: () => Pq,
        outCirc: () => Lq,
        outCubic: () => hq,
        outElastic: () => Gq,
        outExpo: () => xq,
        outQuad: () => pq,
        outQuart: () => mq,
        outQuint: () => Tq,
        outSine: () => Oq,
        swingFrom: () => Uq,
        swingFromTo: () => Vq,
        swingTo: () => Bq
    });

    function dq(e) {
        return Math.pow(e, 2)
    }

    function pq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function gq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function vq(e) {
        return Math.pow(e, 3)
    }

    function hq(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function yq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function Eq(e) {
        return Math.pow(e, 4)
    }

    function mq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function _q(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function bq(e) {
        return Math.pow(e, 5)
    }

    function Tq(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function Iq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function wq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function Oq(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function Aq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function Sq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function xq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function Cq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function Rq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function Lq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function Nq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function Pq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function qq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t)
    }

    function Fq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Mq(e) {
        let t = pt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Dq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function Gq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function kq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function Vq(e) {
        let t = pt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Uq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t)
    }

    function Bq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Hq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Wq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Br, pt, uq, cq, lq, fq, wa = ye(() => {
        "use strict";
        Br = ce(Ia()), pt = 1.70158, uq = (0, Br.default)(.25, .1, .25, 1), cq = (0, Br.default)(.42, 0, 1, 1), lq = (0, Br.default)(0, 0, .58, 1), fq = (0, Br.default)(.42, 0, .58, 1)
    });
    var dh = {};
    Me(dh, {
        applyEasing: () => jq,
        createBezierEasing: () => Xq,
        optimizeFloat: () => Wr
    });

    function Wr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function Xq(e) {
        return (0, fh.default)(...e)
    }

    function jq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Wr(r ? t > 0 ? r(t) : t : t > 0 && e && Hr[e] ? Hr[e](t) : t)
    }
    var fh, Oa = ye(() => {
        "use strict";
        wa();
        fh = ce(Ia())
    });
    var vh = {};
    Me(vh, {
        createElementState: () => gh,
        ixElements: () => aF,
        mergeActionState: () => Aa
    });

    function gh(e, t, r, n, i) {
        let o = r === zq ? (0, nr.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, nr.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function Aa(e, t, r, n, i) {
        let o = uF(i);
        return (0, nr.mergeIn)(e, [t, oF, r], n, o)
    }

    function uF(e) {
        let {
            config: t
        } = e;
        return sF.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                s = t[i],
                a = t[o];
            return s != null && a != null && (r[o] = a), r
        }, {})
    }
    var nr, lX, zq, fX, Kq, Yq, $q, Qq, Zq, Jq, eF, tF, rF, nF, iF, ph, oF, aF, sF, hh = ye(() => {
        "use strict";
        nr = ce(Kt());
        Ge();
        ({
            HTML_ELEMENT: lX,
            PLAIN_OBJECT: zq,
            ABSTRACT_NODE: fX,
            CONFIG_X_VALUE: Kq,
            CONFIG_Y_VALUE: Yq,
            CONFIG_Z_VALUE: $q,
            CONFIG_VALUE: Qq,
            CONFIG_X_UNIT: Zq,
            CONFIG_Y_UNIT: Jq,
            CONFIG_Z_UNIT: eF,
            CONFIG_UNIT: tF
        } = Ce), {
            IX2_SESSION_STOPPED: rF,
            IX2_INSTANCE_ADDED: nF,
            IX2_ELEMENT_STATE_CHANGED: iF
        } = Ie, ph = {}, oF = "refState", aF = (e = ph, t = {}) => {
            switch (t.type) {
                case rF:
                    return ph;
                case nF: {
                    let {
                        elementId: r,
                        element: n,
                        origin: i,
                        actionItem: o,
                        refType: s
                    } = t.payload, {
                        actionTypeId: a
                    } = o, u = e;
                    return (0, nr.getIn)(u, [r, n]) !== n && (u = gh(u, n, s, r, o)), Aa(u, r, a, i, o)
                }
                case iF: {
                    let {
                        elementId: r,
                        actionTypeId: n,
                        current: i,
                        actionItem: o
                    } = t.payload;
                    return Aa(e, r, n, i, o)
                }
                default:
                    return e
            }
        };
        sF = [
            [Kq, Zq],
            [Yq, Jq],
            [$q, eF],
            [Qq, tF]
        ]
    });
    var yh = c(Oe => {
        "use strict";
        Object.defineProperty(Oe, "__esModule", {
            value: !0
        });
        Oe.renderPlugin = Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
        var cF = e => e.value;
        Oe.getPluginConfig = cF;
        var lF = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        Oe.getPluginDuration = lF;
        var fF = e => e || {
            value: 0
        };
        Oe.getPluginOrigin = fF;
        var dF = e => ({
            value: e.value
        });
        Oe.getPluginDestination = dF;
        var pF = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        Oe.createPluginInstance = pF;
        var gF = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        Oe.renderPlugin = gF;
        var vF = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        Oe.clearPlugin = vF
    });
    var mh = c(Ae => {
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var hF = e => document.querySelector(`[data-w-id="${e}"]`),
            yF = () => window.Webflow.require("spline"),
            EF = (e, t) => e.filter(r => !t.includes(r)),
            mF = (e, t) => e.value[t];
        Ae.getPluginConfig = mF;
        var _F = () => null;
        Ae.getPluginDuration = _F;
        var Eh = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            bF = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        s = EF(n, o);
                    return s.length ? s.reduce((u, l) => (u[l] = Eh[l], u), e) : e
                }
                return n.reduce((o, s) => (o[s] = Eh[s], o), {})
            };
        Ae.getPluginOrigin = bF;
        var TF = e => e.value;
        Ae.getPluginDestination = TF;
        var IF = (e, t) => {
            var r;
            let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
            return n ? hF(n) : null
        };
        Ae.createPluginInstance = IF;
        var wF = (e, t, r) => {
            let n = yF(),
                i = n.getInstance(e),
                o = r.config.target.objectId,
                s = a => {
                    if (!a) throw new Error("Invalid spline app passed to renderSpline");
                    let u = o && a.findObjectById(o);
                    if (!u) return;
                    let {
                        PLUGIN_SPLINE: l
                    } = t;
                    l.positionX != null && (u.position.x = l.positionX), l.positionY != null && (u.position.y = l.positionY), l.positionZ != null && (u.position.z = l.positionZ), l.rotationX != null && (u.rotation.x = l.rotationX), l.rotationY != null && (u.rotation.y = l.rotationY), l.rotationZ != null && (u.rotation.z = l.rotationZ), l.scaleX != null && (u.scale.x = l.scaleX), l.scaleY != null && (u.scale.y = l.scaleY), l.scaleZ != null && (u.scale.z = l.scaleZ)
                };
            i ? s(i.spline) : n.setLoadHandler(e, s)
        };
        Ae.renderPlugin = wF;
        var OF = () => null;
        Ae.clearPlugin = OF
    });
    var xa = c(Sa => {
        "use strict";
        Object.defineProperty(Sa, "__esModule", {
            value: !0
        });
        Sa.normalizeColor = AF;
        var _h = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function AF(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                a = (typeof _h[o] == "string" ? _h[o].toLowerCase() : null) || o;
            if (a.startsWith("#")) {
                let u = a.substring(1);
                u.length === 3 ? (t = parseInt(u[0] + u[0], 16), r = parseInt(u[1] + u[1], 16), n = parseInt(u[2] + u[2], 16)) : u.length === 6 && (t = parseInt(u.substring(0, 2), 16), r = parseInt(u.substring(2, 4), 16), n = parseInt(u.substring(4, 6), 16))
            } else if (a.startsWith("rgba")) {
                let u = a.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (a.startsWith("rgb")) {
                let u = a.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10)
            } else if (a.startsWith("hsla")) {
                let u = a.match(/hsla\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    g = parseFloat(u[1].replace("%", "")) / 100,
                    d = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let p = (1 - Math.abs(2 * d - 1)) * g,
                    h = p * (1 - Math.abs(l / 60 % 2 - 1)),
                    b = d - p / 2,
                    _, w, m;
                l >= 0 && l < 60 ? (_ = p, w = h, m = 0) : l >= 60 && l < 120 ? (_ = h, w = p, m = 0) : l >= 120 && l < 180 ? (_ = 0, w = p, m = h) : l >= 180 && l < 240 ? (_ = 0, w = h, m = p) : l >= 240 && l < 300 ? (_ = h, w = 0, m = p) : (_ = p, w = 0, m = h), t = Math.round((_ + b) * 255), r = Math.round((w + b) * 255), n = Math.round((m + b) * 255)
            } else if (a.startsWith("hsl")) {
                let u = a.match(/hsl\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    g = parseFloat(u[1].replace("%", "")) / 100,
                    d = parseFloat(u[2].replace("%", "")) / 100,
                    p = (1 - Math.abs(2 * d - 1)) * g,
                    h = p * (1 - Math.abs(l / 60 % 2 - 1)),
                    b = d - p / 2,
                    _, w, m;
                l >= 0 && l < 60 ? (_ = p, w = h, m = 0) : l >= 60 && l < 120 ? (_ = h, w = p, m = 0) : l >= 120 && l < 180 ? (_ = 0, w = p, m = h) : l >= 180 && l < 240 ? (_ = 0, w = h, m = p) : l >= 240 && l < 300 ? (_ = h, w = 0, m = p) : (_ = p, w = 0, m = h), t = Math.round((_ + b) * 255), r = Math.round((w + b) * 255), n = Math.round((m + b) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    });
    var bh = c(Se => {
        "use strict";
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        Se.renderPlugin = Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
        var SF = xa(),
            xF = (e, t) => e.value[t];
        Se.getPluginConfig = xF;
        var CF = () => null;
        Se.getPluginDuration = CF;
        var RF = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return (0, SF.normalizeColor)(i)
        };
        Se.getPluginOrigin = RF;
        var LF = e => e.value;
        Se.getPluginDestination = LF;
        var NF = () => null;
        Se.createPluginInstance = NF;
        var PF = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: o
                } = t,
                {
                    size: s,
                    red: a,
                    green: u,
                    blue: l,
                    alpha: g
                } = o,
                d;
            s != null && (d = s + i), a != null && l != null && u != null && g != null && (d = `rgba(${a}, ${u}, ${l}, ${g})`), d != null && document.documentElement.style.setProperty(n, d)
        };
        Se.renderPlugin = PF;
        var qF = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        Se.clearPlugin = qF
    });
    var Th = c(ei => {
        "use strict";
        var Ra = fn().default;
        Object.defineProperty(ei, "__esModule", {
            value: !0
        });
        ei.pluginMethodMap = void 0;
        var Ca = (Ge(), et(xf)),
            FF = Ra(yh()),
            MF = Ra(mh()),
            DF = Ra(bh()),
            hX = ei.pluginMethodMap = new Map([
                [Ca.ActionTypeConsts.PLUGIN_LOTTIE, {
                    ...FF
                }],
                [Ca.ActionTypeConsts.PLUGIN_SPLINE, {
                    ...MF
                }],
                [Ca.ActionTypeConsts.PLUGIN_VARIABLE, {
                    ...DF
                }]
            ])
    });
    var Ih = {};
    Me(Ih, {
        clearPlugin: () => Ma,
        createPluginInstance: () => kF,
        getPluginConfig: () => Na,
        getPluginDestination: () => qa,
        getPluginDuration: () => GF,
        getPluginOrigin: () => Pa,
        isPluginType: () => Ft,
        renderPlugin: () => Fa
    });

    function Ft(e) {
        return La.pluginMethodMap.has(e)
    }
    var La, Mt, Na, Pa, GF, qa, kF, Fa, Ma, Da = ye(() => {
        "use strict";
        Qn();
        La = ce(Th());
        Mt = e => t => {
            if (!Qe) return () => null;
            let r = La.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, Na = Mt("getPluginConfig"), Pa = Mt("getPluginOrigin"), GF = Mt("getPluginDuration"), qa = Mt("getPluginDestination"), kF = Mt("createPluginInstance"), Fa = Mt("renderPlugin"), Ma = Mt("clearPlugin")
    });
    var Oh = c((mX, wh) => {
        function VF(e, t) {
            return e == null || e !== e ? t : e
        }
        wh.exports = VF
    });
    var Sh = c((_X, Ah) => {
        function UF(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        Ah.exports = UF
    });
    var Ch = c((bX, xh) => {
        function BF(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), s = n(t), a = s.length; a--;) {
                    var u = s[e ? a : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        xh.exports = BF
    });
    var Lh = c((TX, Rh) => {
        var HF = Ch(),
            WF = HF();
        Rh.exports = WF
    });
    var Ga = c((IX, Nh) => {
        var XF = Lh(),
            jF = Gr();

        function zF(e, t) {
            return e && XF(e, t, jF)
        }
        Nh.exports = zF
    });
    var qh = c((wX, Ph) => {
        var KF = Pt();

        function YF(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!KF(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, s = Object(r);
                    (t ? o-- : ++o < i) && n(s[o], o, s) !== !1;);
                return r
            }
        }
        Ph.exports = YF
    });
    var ka = c((OX, Fh) => {
        var $F = Ga(),
            QF = qh(),
            ZF = QF($F);
        Fh.exports = ZF
    });
    var Dh = c((AX, Mh) => {
        function JF(e, t, r, n, i) {
            return i(e, function(o, s, a) {
                r = n ? (n = !1, o) : t(r, o, s, a)
            }), r
        }
        Mh.exports = JF
    });
    var kh = c((SX, Gh) => {
        var eM = Sh(),
            tM = ka(),
            rM = It(),
            nM = Dh(),
            iM = we();

        function oM(e, t, r) {
            var n = iM(e) ? eM : nM,
                i = arguments.length < 3;
            return n(e, rM(t, 4), r, i, tM)
        }
        Gh.exports = oM
    });
    var Uh = c((xX, Vh) => {
        var aM = ma(),
            sM = It(),
            uM = _a(),
            cM = Math.max,
            lM = Math.min;

        function fM(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = uM(r), i = r < 0 ? cM(n + i, 0) : lM(i, n - 1)), aM(e, sM(t, 3), i, !0)
        }
        Vh.exports = fM
    });
    var Hh = c((CX, Bh) => {
        var dM = Ea(),
            pM = Uh(),
            gM = dM(pM);
        Bh.exports = gM
    });

    function Wh(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function hM(e, t) {
        if (Wh(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!vM.call(t, r[i]) || !Wh(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var vM, Va, Xh = ye(() => {
        "use strict";
        vM = Object.prototype.hasOwnProperty;
        Va = hM
    });
    var cy = {};
    Me(cy, {
        cleanupHTMLElement: () => pD,
        clearAllStyles: () => dD,
        clearObjectCache: () => PM,
        getActionListProgress: () => vD,
        getAffectedElements: () => Xa,
        getComputedStyle: () => UM,
        getDestinationValues: () => KM,
        getElementId: () => DM,
        getInstanceId: () => FM,
        getInstanceOrigin: () => WM,
        getItemConfigByKey: () => zM,
        getMaxDurationItemIndex: () => uy,
        getNamespacedParameterId: () => ED,
        getRenderType: () => oy,
        getStyleProp: () => YM,
        mediaQueriesEqual: () => _D,
        observeStore: () => VM,
        reduceListToGroup: () => hD,
        reifyState: () => GM,
        renderHTMLElement: () => $M,
        shallowEqual: () => Va,
        shouldAllowMediaQuery: () => mD,
        shouldNamespaceEventParameter: () => yD,
        stringifyTarget: () => bD
    });

    function PM() {
        ti.clear()
    }

    function FM() {
        return "i" + qM++
    }

    function DM(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + MM++
    }

    function GM({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, oi.default)(e, (s, a) => {
                let {
                    eventTypeId: u
                } = a;
                return s[u] || (s[u] = {}), s[u][a.id] = a, s
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function VM({
        store: e,
        select: t,
        onChange: r,
        comparator: n = kM
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, s = o(u), a = t(i());

        function u() {
            let l = t(i());
            if (l == null) {
                s();
                return
            }
            n(l, a) || (a = l, r(a, e))
        }
        return s
    }

    function Kh(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            }
        }
        return {}
    }

    function Xa({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((x, v) => x.concat(Xa({
            config: {
                target: v
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: s,
            getQuerySelector: a,
            queryDocument: u,
            getChildElements: l,
            getSiblingElements: g,
            matchSelector: d,
            elementContains: p,
            isSiblingNode: h
        } = i, {
            target: b
        } = e;
        if (!b) return [];
        let {
            id: _,
            objectId: w,
            selector: m,
            selectorGuids: C,
            appliesTo: O,
            useEventTarget: N
        } = Kh(b);
        if (w) return [ti.has(w) ? ti.get(w) : ti.set(w, {}).get(w)];
        if (O === Wo.PAGE) {
            let x = s(_);
            return x ? [x] : []
        }
        let L = (t?.action?.config?.affectedElements ?? {})[_ || m] || {},
            H = !!(L.id || L.selector),
            X, z, Z, G = t && a(Kh(t.target));
        if (H ? (X = L.limitAffectedElements, z = G, Z = a(L)) : z = Z = a({
                id: _,
                selector: m,
                selectorGuids: C
            }), t && N) {
            let x = r && (Z || N === !0) ? [r] : u(G);
            if (Z) {
                if (N === RM) return u(Z).filter(v => x.some(R => p(v, R)));
                if (N === jh) return u(Z).filter(v => x.some(R => p(R, v)));
                if (N === zh) return u(Z).filter(v => x.some(R => h(R, v)))
            }
            return x
        }
        return z == null || Z == null ? [] : Qe && n ? u(Z).filter(x => n.contains(x)) : X === jh ? u(z, Z) : X === CM ? l(u(z)).filter(d(Z)) : X === zh ? g(u(z)).filter(d(Z)) : u(Z)
    }

    function UM({
        element: e,
        actionItem: t
    }) {
        if (!Qe) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case ur:
            case cr:
            case lr:
            case fr:
            case si:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function WM(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: s
        } = n;
        if (Ft(s)) return Pa(s)(t[s], n);
        switch (n.actionTypeId) {
            case or:
            case ar:
            case sr:
            case Kr:
                return t[n.actionTypeId] || ja[n.actionTypeId];
            case Yr:
                return BM(t[n.actionTypeId], n.config.filters);
            case $r:
                return HM(t[n.actionTypeId], n.config.fontVariations);
            case ry:
                return {
                    value: (0, gt.default)(parseFloat(o(e, ni)), 1)
                };
            case ur: {
                let a = o(e, at),
                    u = o(e, st),
                    l, g;
                return n.config.widthUnit === Ot ? l = Yh.test(a) ? parseFloat(a) : parseFloat(r.width) : l = (0, gt.default)(parseFloat(a), parseFloat(r.width)), n.config.heightUnit === Ot ? g = Yh.test(u) ? parseFloat(u) : parseFloat(r.height) : g = (0, gt.default)(parseFloat(u), parseFloat(r.height)), {
                    widthValue: l,
                    heightValue: g
                }
            }
            case cr:
            case lr:
            case fr:
                return cD({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case si:
                return {
                    value: (0, gt.default)(o(e, ii), r.display)
                };
            case NM:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function KM({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (Ft(t.actionTypeId)) return qa(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case or:
            case ar:
            case sr:
            case Kr: {
                let {
                    xValue: n,
                    yValue: i,
                    zValue: o
                } = t.config;
                return {
                    xValue: n,
                    yValue: i,
                    zValue: o
                }
            }
            case ur: {
                let {
                    getStyle: n,
                    setStyle: i,
                    getProperty: o
                } = r, {
                    widthUnit: s,
                    heightUnit: a
                } = t.config, {
                    widthValue: u,
                    heightValue: l
                } = t.config;
                if (!Qe) return {
                    widthValue: u,
                    heightValue: l
                };
                if (s === Ot) {
                    let g = n(e, at);
                    i(e, at, ""), u = o(e, "offsetWidth"), i(e, at, g)
                }
                if (a === Ot) {
                    let g = n(e, st);
                    i(e, st, ""), l = o(e, "offsetHeight"), i(e, st, g)
                }
                return {
                    widthValue: u,
                    heightValue: l
                }
            }
            case cr:
            case lr:
            case fr: {
                let {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: s,
                    globalSwatchId: a
                } = t.config;
                if (a && a.startsWith("--")) {
                    let {
                        getStyle: u
                    } = r, l = u(e, a), g = (0, Zh.normalizeColor)(l);
                    return {
                        rValue: g.red,
                        gValue: g.green,
                        bValue: g.blue,
                        aValue: g.alpha
                    }
                }
                return {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: s
                }
            }
            case Yr:
                return t.config.filters.reduce(XM, {});
            case $r:
                return t.config.fontVariations.reduce(jM, {});
            default: {
                let {
                    value: n
                } = t.config;
                return {
                    value: n
                }
            }
        }
    }

    function oy(e) {
        if (/^TRANSFORM_/.test(e)) return ey;
        if (/^STYLE_/.test(e)) return Ha;
        if (/^GENERAL_/.test(e)) return Ba;
        if (/^PLUGIN_/.test(e)) return ty
    }

    function YM(e, t) {
        return e === Ha ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function $M(e, t, r, n, i, o, s, a, u) {
        switch (a) {
            case ey:
                return tD(e, t, r, i, s);
            case Ha:
                return lD(e, t, r, i, o, s);
            case Ba:
                return fD(e, i, s);
            case ty: {
                let {
                    actionTypeId: l
                } = i;
                if (Ft(l)) return Fa(l)(u, t, i)
            }
        }
    }

    function tD(e, t, r, n, i) {
        let o = eD.map(a => {
                let u = ja[a],
                    {
                        xValue: l = u.xValue,
                        yValue: g = u.yValue,
                        zValue: d = u.zValue,
                        xUnit: p = "",
                        yUnit: h = "",
                        zUnit: b = ""
                    } = t[a] || {};
                switch (a) {
                    case or:
                        return `${mM}(${l}${p}, ${g}${h}, ${d}${b})`;
                    case ar:
                        return `${_M}(${l}${p}, ${g}${h}, ${d}${b})`;
                    case sr:
                        return `${bM}(${l}${p}) ${TM}(${g}${h}) ${IM}(${d}${b})`;
                    case Kr:
                        return `${wM}(${l}${p}, ${g}${h})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: s
            } = i;
        Dt(e, wt, i), s(e, wt, o), iD(n, r) && s(e, $n, OM)
    }

    function rD(e, t, r, n) {
        let i = (0, oi.default)(t, (s, a, u) => `${s} ${u}(${a}${JM(u, r)})`, ""),
            {
                setStyle: o
            } = n;
        Dt(e, Xr, n), o(e, Xr, i)
    }

    function nD(e, t, r, n) {
        let i = (0, oi.default)(t, (s, a, u) => (s.push(`"${u}" ${a}`), s), []).join(", "),
            {
                setStyle: o
            } = n;
        Dt(e, jr, n), o(e, jr, i)
    }

    function iD({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === or && n !== void 0 || e === ar && n !== void 0 || e === sr && (t !== void 0 || r !== void 0)
    }

    function uD(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function cD({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = Wa[t],
            o = n(e, i),
            s = aD.test(o) ? o : r[i],
            a = uD(sD, s).split(zr);
        return {
            rValue: (0, gt.default)(parseInt(a[0], 10), 255),
            gValue: (0, gt.default)(parseInt(a[1], 10), 255),
            bValue: (0, gt.default)(parseInt(a[2], 10), 255),
            aValue: (0, gt.default)(parseFloat(a[3]), 1)
        }
    }

    function lD(e, t, r, n, i, o) {
        let {
            setStyle: s
        } = o;
        switch (n.actionTypeId) {
            case ur: {
                let {
                    widthUnit: a = "",
                    heightUnit: u = ""
                } = n.config, {
                    widthValue: l,
                    heightValue: g
                } = r;
                l !== void 0 && (a === Ot && (a = "px"), Dt(e, at, o), s(e, at, l + a)), g !== void 0 && (u === Ot && (u = "px"), Dt(e, st, o), s(e, st, g + u));
                break
            }
            case Yr: {
                rD(e, r, n.config, o);
                break
            }
            case $r: {
                nD(e, r, n.config, o);
                break
            }
            case cr:
            case lr:
            case fr: {
                let a = Wa[n.actionTypeId],
                    u = Math.round(r.rValue),
                    l = Math.round(r.gValue),
                    g = Math.round(r.bValue),
                    d = r.aValue;
                Dt(e, a, o), s(e, a, d >= 1 ? `rgb(${u},${l},${g})` : `rgba(${u},${l},${g},${d})`);
                break
            }
            default: {
                let {
                    unit: a = ""
                } = n.config;
                Dt(e, i, o), s(e, i, r.value + a);
                break
            }
        }
    }

    function fD(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case si: {
                let {
                    value: i
                } = t.config;
                i === AM && Qe ? n(e, ii, Ta) : n(e, ii, i);
                return
            }
        }
    }

    function Dt(e, t, r) {
        if (!Qe) return;
        let n = iy[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, ir);
        if (!s) {
            o(e, ir, n);
            return
        }
        let a = s.split(zr).map(ny);
        a.indexOf(n) === -1 && o(e, ir, a.concat(n).join(zr))
    }

    function ay(e, t, r) {
        if (!Qe) return;
        let n = iy[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, ir);
        !s || s.indexOf(n) === -1 || o(e, ir, s.split(zr).map(ny).filter(a => a !== n).join(zr))
    }

    function dD({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let s = n[o],
                {
                    config: a
                } = s.action,
                {
                    actionListId: u
                } = a,
                l = i[u];
            l && $h({
                actionList: l,
                event: s,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            $h({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function $h({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            Qh({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: s
            } = o;
            s.forEach(a => {
                Qh({
                    actionGroup: a,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function Qh({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: s
            } = i, a;
            Ft(o) ? a = u => Ma(o)(u, i) : a = sy({
                effect: gD,
                actionTypeId: o,
                elementApi: r
            }), Xa({
                config: s,
                event: t,
                elementApi: r
            }).forEach(a)
        })
    }

    function pD(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === ur) {
            let {
                config: s
            } = t;
            s.widthUnit === Ot && n(e, at, ""), s.heightUnit === Ot && n(e, st, "")
        }
        i(e, ir) && sy({
            effect: ay,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function gD(e, t, r) {
        let {
            setStyle: n
        } = r;
        ay(e, t, r), n(e, t, ""), t === wt && n(e, $n, "")
    }

    function uy(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, s = o.delay + o.duration;
            s >= t && (t = s, r = i)
        }), r
    }

    function vD(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, s = 0, a = 0;
        return r.forEach((u, l) => {
            if (n && l === 0) return;
            let {
                actionItems: g
            } = u, d = g[uy(g)], {
                config: p,
                actionTypeId: h
            } = d;
            i.id === d.id && (a = s + o);
            let b = oy(h) === Ba ? 0 : p.duration;
            s += p.delay + b
        }), s > 0 ? Wr(a / s) : 0
    }

    function hD({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], s = a => (o.push((0, ai.mergeIn)(a, ["config"], {
            delay: 0,
            duration: 0
        })), a.id === t);
        return n && n.some(({
            actionItems: a
        }) => a.some(s)), i && i.some(a => {
            let {
                continuousActionGroups: u
            } = a;
            return u.some(({
                actionItems: l
            }) => l.some(s))
        }), (0, ai.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function yD(e, {
        basedOn: t
    }) {
        return e === $e.SCROLLING_IN_VIEW && (t === it.ELEMENT || t == null) || e === $e.MOUSE_MOVE && t === it.ELEMENT
    }

    function ED(e, t) {
        return e + LM + t
    }

    function mD(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function _D(e, t) {
        return Va(e && e.sort(), t && t.sort())
    }

    function bD(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Ua + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Ua + r + Ua + n
    }
    var gt, oi, ri, ai, Zh, yM, EM, mM, _M, bM, TM, IM, wM, OM, AM, ni, Xr, jr, at, st, Jh, SM, xM, jh, CM, zh, RM, ii, ir, Ot, zr, LM, Ua, ey, Ba, Ha, ty, or, ar, sr, Kr, ry, Yr, $r, ur, cr, lr, fr, si, NM, ny, Wa, iy, ti, qM, MM, kM, Yh, BM, HM, XM, jM, zM, ja, QM, ZM, JM, eD, oD, aD, sD, sy, ly = ye(() => {
        "use strict";
        gt = ce(Oh()), oi = ce(kh()), ri = ce(Hh()), ai = ce(Kt());
        Ge();
        Xh();
        Oa();
        Zh = ce(xa());
        Da();
        Qn();
        ({
            BACKGROUND: yM,
            TRANSFORM: EM,
            TRANSLATE_3D: mM,
            SCALE_3D: _M,
            ROTATE_X: bM,
            ROTATE_Y: TM,
            ROTATE_Z: IM,
            SKEW: wM,
            PRESERVE_3D: OM,
            FLEX: AM,
            OPACITY: ni,
            FILTER: Xr,
            FONT_VARIATION_SETTINGS: jr,
            WIDTH: at,
            HEIGHT: st,
            BACKGROUND_COLOR: Jh,
            BORDER_COLOR: SM,
            COLOR: xM,
            CHILDREN: jh,
            IMMEDIATE_CHILDREN: CM,
            SIBLINGS: zh,
            PARENT: RM,
            DISPLAY: ii,
            WILL_CHANGE: ir,
            AUTO: Ot,
            COMMA_DELIMITER: zr,
            COLON_DELIMITER: LM,
            BAR_DELIMITER: Ua,
            RENDER_TRANSFORM: ey,
            RENDER_GENERAL: Ba,
            RENDER_STYLE: Ha,
            RENDER_PLUGIN: ty
        } = Ce), {
            TRANSFORM_MOVE: or,
            TRANSFORM_SCALE: ar,
            TRANSFORM_ROTATE: sr,
            TRANSFORM_SKEW: Kr,
            STYLE_OPACITY: ry,
            STYLE_FILTER: Yr,
            STYLE_FONT_VARIATION: $r,
            STYLE_SIZE: ur,
            STYLE_BACKGROUND_COLOR: cr,
            STYLE_BORDER: lr,
            STYLE_TEXT_COLOR: fr,
            GENERAL_DISPLAY: si,
            OBJECT_VALUE: NM
        } = De, ny = e => e.trim(), Wa = Object.freeze({
            [cr]: Jh,
            [lr]: SM,
            [fr]: xM
        }), iy = Object.freeze({
            [wt]: EM,
            [Jh]: yM,
            [ni]: ni,
            [Xr]: Xr,
            [at]: at,
            [st]: st,
            [jr]: jr
        }), ti = new Map;
        qM = 1;
        MM = 1;
        kM = (e, t) => e === t;
        Yh = /px/, BM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = QM[n.type]), r), e || {}), HM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = ZM[n.type] || n.defaultValue || 0), r), e || {});
        XM = (e, t) => (t && (e[t.type] = t.value || 0), e), jM = (e, t) => (t && (e[t.type] = t.value || 0), e), zM = (e, t, r) => {
            if (Ft(e)) return Na(e)(r, t);
            switch (e) {
                case Yr: {
                    let n = (0, ri.default)(r.filters, ({
                        type: i
                    }) => i === t);
                    return n ? n.value : 0
                }
                case $r: {
                    let n = (0, ri.default)(r.fontVariations, ({
                        type: i
                    }) => i === t);
                    return n ? n.value : 0
                }
                default:
                    return r[t]
            }
        };
        ja = {
            [or]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [ar]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [sr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Kr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, QM = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), ZM = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), JM = (e, t) => {
            let r = (0, ri.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, eD = Object.keys(ja);
        oD = "\\(([^)]+)\\)", aD = /^rgb/, sD = RegExp(`rgba?${oD}`);
        sy = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case or:
                case ar:
                case sr:
                case Kr:
                    e(n, wt, r);
                    break;
                case Yr:
                    e(n, Xr, r);
                    break;
                case $r:
                    e(n, jr, r);
                    break;
                case ry:
                    e(n, ni, r);
                    break;
                case ur:
                    e(n, at, r), e(n, st, r);
                    break;
                case cr:
                case lr:
                case fr:
                    e(n, Wa[t], r);
                    break;
                case si:
                    e(n, ii, r);
                    break
            }
        }
    });
    var Gt = c(Pe => {
        "use strict";
        var dr = fn().default;
        Object.defineProperty(Pe, "__esModule", {
            value: !0
        });
        Pe.IX2VanillaUtils = Pe.IX2VanillaPlugins = Pe.IX2ElementsReducer = Pe.IX2Easings = Pe.IX2EasingUtils = Pe.IX2BrowserSupport = void 0;
        var TD = dr((Qn(), et(oh)));
        Pe.IX2BrowserSupport = TD;
        var ID = dr((wa(), et(Hr)));
        Pe.IX2Easings = ID;
        var wD = dr((Oa(), et(dh)));
        Pe.IX2EasingUtils = wD;
        var OD = dr((hh(), et(vh)));
        Pe.IX2ElementsReducer = OD;
        var AD = dr((Da(), et(Ih)));
        Pe.IX2VanillaPlugins = AD;
        var SD = dr((ly(), et(cy)));
        Pe.IX2VanillaUtils = SD
    });
    var ci, vt, xD, CD, RD, LD, ND, PD, ui, fy, qD, FD, za, MD, DD, GD, kD, dy, py = ye(() => {
        "use strict";
        Ge();
        ci = ce(Gt()), vt = ce(Kt()), {
            IX2_RAW_DATA_IMPORTED: xD,
            IX2_SESSION_STOPPED: CD,
            IX2_INSTANCE_ADDED: RD,
            IX2_INSTANCE_STARTED: LD,
            IX2_INSTANCE_REMOVED: ND,
            IX2_ANIMATION_FRAME_CHANGED: PD
        } = Ie, {
            optimizeFloat: ui,
            applyEasing: fy,
            createBezierEasing: qD
        } = ci.IX2EasingUtils, {
            RENDER_GENERAL: FD
        } = Ce, {
            getItemConfigByKey: za,
            getRenderType: MD,
            getStyleProp: DD
        } = ci.IX2VanillaUtils, GD = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: s,
                restingValue: a,
                actionTypeId: u,
                customEasingFn: l,
                skipMotion: g,
                skipToValue: d
            } = e, {
                parameters: p
            } = t.payload, h = Math.max(1 - s, .01), b = p[n];
            b == null && (h = 1, b = a);
            let _ = Math.max(b, 0) || 0,
                w = ui(_ - r),
                m = g ? d : ui(r + w * h),
                C = m * 100;
            if (m === r && e.current) return e;
            let O, N, P, L;
            for (let X = 0, {
                    length: z
                } = i; X < z; X++) {
                let {
                    keyframe: Z,
                    actionItems: G
                } = i[X];
                if (X === 0 && (O = G[0]), C >= Z) {
                    O = G[0];
                    let x = i[X + 1],
                        v = x && C !== Z;
                    N = v ? x.actionItems[0] : null, v && (P = Z / 100, L = (x.keyframe - Z) / 100)
                }
            }
            let H = {};
            if (O && !N)
                for (let X = 0, {
                        length: z
                    } = o; X < z; X++) {
                    let Z = o[X];
                    H[Z] = za(u, Z, O.config)
                } else if (O && N && P !== void 0 && L !== void 0) {
                    let X = (m - P) / L,
                        z = O.config.easing,
                        Z = fy(z, X, l);
                    for (let G = 0, {
                            length: x
                        } = o; G < x; G++) {
                        let v = o[G],
                            R = za(u, v, O.config),
                            J = (za(u, v, N.config) - R) * Z + R;
                        H[v] = J
                    }
                } return (0, vt.merge)(e, {
                position: m,
                current: H
            })
        }, kD = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: s,
                verbose: a,
                actionItem: u,
                destination: l,
                destinationKeys: g,
                pluginDuration: d,
                instanceDelay: p,
                customEasingFn: h,
                skipMotion: b
            } = e, _ = u.config.easing, {
                duration: w,
                delay: m
            } = u.config;
            d != null && (w = d), m = p ?? m, s === FD ? w = 0 : (o || b) && (w = m = 0);
            let {
                now: C
            } = t.payload;
            if (r && n) {
                let O = C - (i + m);
                if (a) {
                    let X = C - i,
                        z = w + m,
                        Z = ui(Math.min(Math.max(0, X / z), 1));
                    e = (0, vt.set)(e, "verboseTimeElapsed", z * Z)
                }
                if (O < 0) return e;
                let N = ui(Math.min(Math.max(0, O / w), 1)),
                    P = fy(_, N, h),
                    L = {},
                    H = null;
                return g.length && (H = g.reduce((X, z) => {
                    let Z = l[z],
                        G = parseFloat(n[z]) || 0,
                        v = (parseFloat(Z) - G) * P + G;
                    return X[z] = v, X
                }, {})), L.current = H, L.position = N, N === 1 && (L.active = !1, L.complete = !0), (0, vt.merge)(e, L)
            }
            return e
        }, dy = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case xD:
                    return t.payload.ixInstances || Object.freeze({});
                case CD:
                    return Object.freeze({});
                case RD: {
                    let {
                        instanceId: r,
                        elementId: n,
                        actionItem: i,
                        eventId: o,
                        eventTarget: s,
                        eventStateKey: a,
                        actionListId: u,
                        groupIndex: l,
                        isCarrier: g,
                        origin: d,
                        destination: p,
                        immediate: h,
                        verbose: b,
                        continuous: _,
                        parameterId: w,
                        actionGroups: m,
                        smoothing: C,
                        restingValue: O,
                        pluginInstance: N,
                        pluginDuration: P,
                        instanceDelay: L,
                        skipMotion: H,
                        skipToValue: X
                    } = t.payload, {
                        actionTypeId: z
                    } = i, Z = MD(z), G = DD(Z, z), x = Object.keys(p).filter(R => p[R] != null && typeof p[R] != "string"), {
                        easing: v
                    } = i.config;
                    return (0, vt.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: d,
                        destination: p,
                        destinationKeys: x,
                        immediate: h,
                        verbose: b,
                        current: null,
                        actionItem: i,
                        actionTypeId: z,
                        eventId: o,
                        eventTarget: s,
                        eventStateKey: a,
                        actionListId: u,
                        groupIndex: l,
                        renderType: Z,
                        isCarrier: g,
                        styleProp: G,
                        continuous: _,
                        parameterId: w,
                        actionGroups: m,
                        smoothing: C,
                        restingValue: O,
                        pluginInstance: N,
                        pluginDuration: P,
                        instanceDelay: L,
                        skipMotion: H,
                        skipToValue: X,
                        customEasingFn: Array.isArray(v) && v.length === 4 ? qD(v) : void 0
                    })
                }
                case LD: {
                    let {
                        instanceId: r,
                        time: n
                    } = t.payload;
                    return (0, vt.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
                case ND: {
                    let {
                        instanceId: r
                    } = t.payload;
                    if (!e[r]) return e;
                    let n = {},
                        i = Object.keys(e),
                        {
                            length: o
                        } = i;
                    for (let s = 0; s < o; s++) {
                        let a = i[s];
                        a !== r && (n[a] = e[a])
                    }
                    return n
                }
                case PD: {
                    let r = e,
                        n = Object.keys(e),
                        {
                            length: i
                        } = n;
                    for (let o = 0; o < i; o++) {
                        let s = n[o],
                            a = e[s],
                            u = a.continuous ? GD : kD;
                        r = (0, vt.set)(r, s, u(a, t))
                    }
                    return r
                }
                default:
                    return e
            }
        }
    });
    var VD, UD, BD, gy, vy = ye(() => {
        "use strict";
        Ge();
        ({
            IX2_RAW_DATA_IMPORTED: VD,
            IX2_SESSION_STOPPED: UD,
            IX2_PARAMETER_CHANGED: BD
        } = Ie), gy = (e = {}, t) => {
            switch (t.type) {
                case VD:
                    return t.payload.ixParameters || {};
                case UD:
                    return {};
                case BD: {
                    let {
                        key: r,
                        value: n
                    } = t.payload;
                    return e[r] = n, e
                }
                default:
                    return e
            }
        }
    });
    var Ey = {};
    Me(Ey, {
        default: () => WD
    });
    var hy, yy, HD, WD, my = ye(() => {
        "use strict";
        hy = ce(Ho());
        Rf();
        Qf();
        ed();
        yy = ce(Gt());
        py();
        vy();
        ({
            ixElements: HD
        } = yy.IX2ElementsReducer), WD = (0, hy.combineReducers)({
            ixData: Cf,
            ixRequest: $f,
            ixSession: Jf,
            ixElements: HD,
            ixInstances: dy,
            ixParameters: gy
        })
    });
    var by = c((jX, _y) => {
        var XD = bt(),
            jD = we(),
            zD = dt(),
            KD = "[object String]";

        function YD(e) {
            return typeof e == "string" || !jD(e) && zD(e) && XD(e) == KD
        }
        _y.exports = YD
    });
    var Iy = c((zX, Ty) => {
        var $D = ya(),
            QD = $D("length");
        Ty.exports = QD
    });
    var Oy = c((KX, wy) => {
        var ZD = "\\ud800-\\udfff",
            JD = "\\u0300-\\u036f",
            e1 = "\\ufe20-\\ufe2f",
            t1 = "\\u20d0-\\u20ff",
            r1 = JD + e1 + t1,
            n1 = "\\ufe0e\\ufe0f",
            i1 = "\\u200d",
            o1 = RegExp("[" + i1 + ZD + r1 + n1 + "]");

        function a1(e) {
            return o1.test(e)
        }
        wy.exports = a1
    });
    var qy = c((YX, Py) => {
        var Sy = "\\ud800-\\udfff",
            s1 = "\\u0300-\\u036f",
            u1 = "\\ufe20-\\ufe2f",
            c1 = "\\u20d0-\\u20ff",
            l1 = s1 + u1 + c1,
            f1 = "\\ufe0e\\ufe0f",
            d1 = "[" + Sy + "]",
            Ka = "[" + l1 + "]",
            Ya = "\\ud83c[\\udffb-\\udfff]",
            p1 = "(?:" + Ka + "|" + Ya + ")",
            xy = "[^" + Sy + "]",
            Cy = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Ry = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            g1 = "\\u200d",
            Ly = p1 + "?",
            Ny = "[" + f1 + "]?",
            v1 = "(?:" + g1 + "(?:" + [xy, Cy, Ry].join("|") + ")" + Ny + Ly + ")*",
            h1 = Ny + Ly + v1,
            y1 = "(?:" + [xy + Ka + "?", Ka, Cy, Ry, d1].join("|") + ")",
            Ay = RegExp(Ya + "(?=" + Ya + ")|" + y1 + h1, "g");

        function E1(e) {
            for (var t = Ay.lastIndex = 0; Ay.test(e);) ++t;
            return t
        }
        Py.exports = E1
    });
    var My = c(($X, Fy) => {
        var m1 = Iy(),
            _1 = Oy(),
            b1 = qy();

        function T1(e) {
            return _1(e) ? b1(e) : m1(e)
        }
        Fy.exports = T1
    });
    var Gy = c((QX, Dy) => {
        var I1 = Un(),
            w1 = Bn(),
            O1 = Pt(),
            A1 = by(),
            S1 = My(),
            x1 = "[object Map]",
            C1 = "[object Set]";

        function R1(e) {
            if (e == null) return 0;
            if (O1(e)) return A1(e) ? S1(e) : e.length;
            var t = w1(e);
            return t == x1 || t == C1 ? e.size : I1(e).length
        }
        Dy.exports = R1
    });
    var Vy = c((ZX, ky) => {
        var L1 = "Expected a function";

        function N1(e) {
            if (typeof e != "function") throw new TypeError(L1);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        ky.exports = N1
    });
    var $a = c((JX, Uy) => {
        var P1 = Tt(),
            q1 = function() {
                try {
                    var e = P1(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Uy.exports = q1
    });
    var Qa = c((ej, Hy) => {
        var By = $a();

        function F1(e, t, r) {
            t == "__proto__" && By ? By(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Hy.exports = F1
    });
    var Xy = c((tj, Wy) => {
        var M1 = Qa(),
            D1 = Ln(),
            G1 = Object.prototype,
            k1 = G1.hasOwnProperty;

        function V1(e, t, r) {
            var n = e[t];
            (!(k1.call(e, t) && D1(n, r)) || r === void 0 && !(t in e)) && M1(e, t, r)
        }
        Wy.exports = V1
    });
    var Ky = c((rj, zy) => {
        var U1 = Xy(),
            B1 = Vr(),
            H1 = Dn(),
            jy = ot(),
            W1 = rr();

        function X1(e, t, r, n) {
            if (!jy(e)) return e;
            t = B1(t, e);
            for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o;) {
                var u = W1(t[i]),
                    l = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != s) {
                    var g = a[u];
                    l = n ? n(g, u, a) : void 0, l === void 0 && (l = jy(g) ? g : H1(t[i + 1]) ? [] : {})
                }
                U1(a, u, l), a = a[u]
            }
            return e
        }
        zy.exports = X1
    });
    var $y = c((nj, Yy) => {
        var j1 = Xn(),
            z1 = Ky(),
            K1 = Vr();

        function Y1(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var s = t[n],
                    a = j1(e, s);
                r(a, s) && z1(o, K1(s, e), a)
            }
            return o
        }
        Yy.exports = Y1
    });
    var Zy = c((ij, Qy) => {
        var $1 = Fn(),
            Q1 = Ro(),
            Z1 = ra(),
            J1 = ta(),
            e2 = Object.getOwnPropertySymbols,
            t2 = e2 ? function(e) {
                for (var t = []; e;) $1(t, Z1(e)), e = Q1(e);
                return t
            } : J1;
        Qy.exports = t2
    });
    var eE = c((oj, Jy) => {
        function r2(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        Jy.exports = r2
    });
    var rE = c((aj, tE) => {
        var n2 = ot(),
            i2 = Vn(),
            o2 = eE(),
            a2 = Object.prototype,
            s2 = a2.hasOwnProperty;

        function u2(e) {
            if (!n2(e)) return o2(e);
            var t = i2(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !s2.call(e, n)) || r.push(n);
            return r
        }
        tE.exports = u2
    });
    var iE = c((sj, nE) => {
        var c2 = ia(),
            l2 = rE(),
            f2 = Pt();

        function d2(e) {
            return f2(e) ? c2(e, !0) : l2(e)
        }
        nE.exports = d2
    });
    var aE = c((uj, oE) => {
        var p2 = ea(),
            g2 = Zy(),
            v2 = iE();

        function h2(e) {
            return p2(e, v2, g2)
        }
        oE.exports = h2
    });
    var uE = c((cj, sE) => {
        var y2 = ha(),
            E2 = It(),
            m2 = $y(),
            _2 = aE();

        function b2(e, t) {
            if (e == null) return {};
            var r = y2(_2(e), function(n) {
                return [n]
            });
            return t = E2(t), m2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        sE.exports = b2
    });
    var lE = c((lj, cE) => {
        var T2 = It(),
            I2 = Vy(),
            w2 = uE();

        function O2(e, t) {
            return w2(e, I2(T2(t)))
        }
        cE.exports = O2
    });
    var dE = c((fj, fE) => {
        var A2 = Un(),
            S2 = Bn(),
            x2 = qr(),
            C2 = we(),
            R2 = Pt(),
            L2 = Mn(),
            N2 = Vn(),
            P2 = kn(),
            q2 = "[object Map]",
            F2 = "[object Set]",
            M2 = Object.prototype,
            D2 = M2.hasOwnProperty;

        function G2(e) {
            if (e == null) return !0;
            if (R2(e) && (C2(e) || typeof e == "string" || typeof e.splice == "function" || L2(e) || P2(e) || x2(e))) return !e.length;
            var t = S2(e);
            if (t == q2 || t == F2) return !e.size;
            if (N2(e)) return !A2(e).length;
            for (var r in e)
                if (D2.call(e, r)) return !1;
            return !0
        }
        fE.exports = G2
    });
    var gE = c((dj, pE) => {
        var k2 = Qa(),
            V2 = Ga(),
            U2 = It();

        function B2(e, t) {
            var r = {};
            return t = U2(t, 3), V2(e, function(n, i, o) {
                k2(r, i, t(n, i, o))
            }), r
        }
        pE.exports = B2
    });
    var hE = c((pj, vE) => {
        function H2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        vE.exports = H2
    });
    var EE = c((gj, yE) => {
        var W2 = zn();

        function X2(e) {
            return typeof e == "function" ? e : W2
        }
        yE.exports = X2
    });
    var _E = c((vj, mE) => {
        var j2 = hE(),
            z2 = ka(),
            K2 = EE(),
            Y2 = we();

        function $2(e, t) {
            var r = Y2(e) ? j2 : z2;
            return r(e, K2(t))
        }
        mE.exports = $2
    });
    var TE = c((hj, bE) => {
        var Q2 = Ye(),
            Z2 = function() {
                return Q2.Date.now()
            };
        bE.exports = Z2
    });
    var OE = c((yj, wE) => {
        var J2 = ot(),
            Za = TE(),
            IE = Kn(),
            eG = "Expected a function",
            tG = Math.max,
            rG = Math.min;

        function nG(e, t, r) {
            var n, i, o, s, a, u, l = 0,
                g = !1,
                d = !1,
                p = !0;
            if (typeof e != "function") throw new TypeError(eG);
            t = IE(t) || 0, J2(r) && (g = !!r.leading, d = "maxWait" in r, o = d ? tG(IE(r.maxWait) || 0, t) : o, p = "trailing" in r ? !!r.trailing : p);

            function h(L) {
                var H = n,
                    X = i;
                return n = i = void 0, l = L, s = e.apply(X, H), s
            }

            function b(L) {
                return l = L, a = setTimeout(m, t), g ? h(L) : s
            }

            function _(L) {
                var H = L - u,
                    X = L - l,
                    z = t - H;
                return d ? rG(z, o - X) : z
            }

            function w(L) {
                var H = L - u,
                    X = L - l;
                return u === void 0 || H >= t || H < 0 || d && X >= o
            }

            function m() {
                var L = Za();
                if (w(L)) return C(L);
                a = setTimeout(m, _(L))
            }

            function C(L) {
                return a = void 0, p && n ? h(L) : (n = i = void 0, s)
            }

            function O() {
                a !== void 0 && clearTimeout(a), l = 0, n = u = i = a = void 0
            }

            function N() {
                return a === void 0 ? s : C(Za())
            }

            function P() {
                var L = Za(),
                    H = w(L);
                if (n = arguments, i = this, u = L, H) {
                    if (a === void 0) return b(u);
                    if (d) return clearTimeout(a), a = setTimeout(m, t), h(u)
                }
                return a === void 0 && (a = setTimeout(m, t)), s
            }
            return P.cancel = O, P.flush = N, P
        }
        wE.exports = nG
    });
    var SE = c((Ej, AE) => {
        var iG = OE(),
            oG = ot(),
            aG = "Expected a function";

        function sG(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(aG);
            return oG(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), iG(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        AE.exports = sG
    });
    var CE = {};
    Me(CE, {
        actionListPlaybackChanged: () => gr,
        animationFrameChanged: () => fi,
        clearRequested: () => NG,
        elementStateChanged: () => as,
        eventListenerAdded: () => li,
        eventStateChanged: () => ns,
        instanceAdded: () => is,
        instanceRemoved: () => os,
        instanceStarted: () => di,
        mediaQueriesDefined: () => us,
        parameterChanged: () => pr,
        playbackRequested: () => RG,
        previewRequested: () => CG,
        rawDataImported: () => Ja,
        sessionInitialized: () => es,
        sessionStarted: () => ts,
        sessionStopped: () => rs,
        stopRequested: () => LG,
        testFrameRendered: () => PG,
        viewportWidthChanged: () => ss
    });
    var xE, uG, cG, lG, fG, dG, pG, gG, vG, hG, yG, EG, mG, _G, bG, TG, IG, wG, OG, AG, SG, xG, Ja, es, ts, rs, CG, RG, LG, NG, li, PG, ns, fi, pr, is, di, os, as, gr, ss, us, pi = ye(() => {
        "use strict";
        Ge();
        xE = ce(Gt()), {
            IX2_RAW_DATA_IMPORTED: uG,
            IX2_SESSION_INITIALIZED: cG,
            IX2_SESSION_STARTED: lG,
            IX2_SESSION_STOPPED: fG,
            IX2_PREVIEW_REQUESTED: dG,
            IX2_PLAYBACK_REQUESTED: pG,
            IX2_STOP_REQUESTED: gG,
            IX2_CLEAR_REQUESTED: vG,
            IX2_EVENT_LISTENER_ADDED: hG,
            IX2_TEST_FRAME_RENDERED: yG,
            IX2_EVENT_STATE_CHANGED: EG,
            IX2_ANIMATION_FRAME_CHANGED: mG,
            IX2_PARAMETER_CHANGED: _G,
            IX2_INSTANCE_ADDED: bG,
            IX2_INSTANCE_STARTED: TG,
            IX2_INSTANCE_REMOVED: IG,
            IX2_ELEMENT_STATE_CHANGED: wG,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: OG,
            IX2_VIEWPORT_WIDTH_CHANGED: AG,
            IX2_MEDIA_QUERIES_DEFINED: SG
        } = Ie, {
            reifyState: xG
        } = xE.IX2VanillaUtils, Ja = e => ({
            type: uG,
            payload: {
                ...xG(e)
            }
        }), es = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: cG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), ts = () => ({
            type: lG
        }), rs = () => ({
            type: fG
        }), CG = ({
            rawData: e,
            defer: t
        }) => ({
            type: dG,
            payload: {
                defer: t,
                rawData: e
            }
        }), RG = ({
            actionTypeId: e = De.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: s,
            verbose: a,
            rawData: u
        }) => ({
            type: pG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: s,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: a,
                rawData: u
            }
        }), LG = e => ({
            type: gG,
            payload: {
                actionListId: e
            }
        }), NG = () => ({
            type: vG
        }), li = (e, t) => ({
            type: hG,
            payload: {
                target: e,
                listenerParams: t
            }
        }), PG = (e = 1) => ({
            type: yG,
            payload: {
                step: e
            }
        }), ns = (e, t) => ({
            type: EG,
            payload: {
                stateKey: e,
                newState: t
            }
        }), fi = (e, t) => ({
            type: mG,
            payload: {
                now: e,
                parameters: t
            }
        }), pr = (e, t) => ({
            type: _G,
            payload: {
                key: e,
                value: t
            }
        }), is = e => ({
            type: bG,
            payload: {
                ...e
            }
        }), di = (e, t) => ({
            type: TG,
            payload: {
                instanceId: e,
                time: t
            }
        }), os = e => ({
            type: IG,
            payload: {
                instanceId: e
            }
        }), as = (e, t, r, n) => ({
            type: wG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), gr = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: OG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), ss = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: AG,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), us = () => ({
            type: SG
        })
    });
    var qe = {};
    Me(qe, {
        elementContains: () => fs,
        getChildElements: () => HG,
        getClosestElement: () => Qr,
        getProperty: () => GG,
        getQuerySelector: () => ls,
        getRefType: () => ds,
        getSiblingElements: () => WG,
        getStyle: () => DG,
        getValidDocument: () => VG,
        isSiblingNode: () => BG,
        matchSelector: () => kG,
        queryDocument: () => UG,
        setStyle: () => MG
    });

    function MG(e, t, r) {
        e.style[t] = r
    }

    function DG(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function GG(e, t) {
        return e[t]
    }

    function kG(e) {
        return t => t[cs](e)
    }

    function ls({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(RE) !== -1) {
                let n = e.split(RE),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(NE)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function VG(e) {
        return e == null || e === document.documentElement.getAttribute(NE) ? document : null
    }

    function UG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function fs(e, t) {
        return e.contains(t)
    }

    function BG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function HG(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let s = 0; s < o; s++) t.push(i[s])
        }
        return t
    }

    function WG(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let s = o.firstElementChild;
            for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
        }
        return t
    }

    function ds(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? qG : FG : null
    }
    var LE, cs, RE, qG, FG, NE, Qr, PE = ye(() => {
        "use strict";
        LE = ce(Gt());
        Ge();
        ({
            ELEMENT_MATCHES: cs
        } = LE.IX2BrowserSupport), {
            IX2_ID_DELIMITER: RE,
            HTML_ELEMENT: qG,
            PLAIN_OBJECT: FG,
            WF_PAGE: NE
        } = Ce;
        Qr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[cs] && r[cs](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var ps = c((bj, FE) => {
        var XG = ot(),
            qE = Object.create,
            jG = function() {
                function e() {}
                return function(t) {
                    if (!XG(t)) return {};
                    if (qE) return qE(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        FE.exports = jG
    });
    var gi = c((Tj, ME) => {
        function zG() {}
        ME.exports = zG
    });
    var hi = c((Ij, DE) => {
        var KG = ps(),
            YG = gi();

        function vi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        vi.prototype = KG(YG.prototype);
        vi.prototype.constructor = vi;
        DE.exports = vi
    });
    var UE = c((wj, VE) => {
        var GE = Xt(),
            $G = qr(),
            QG = we(),
            kE = GE ? GE.isConcatSpreadable : void 0;

        function ZG(e) {
            return QG(e) || $G(e) || !!(kE && e && e[kE])
        }
        VE.exports = ZG
    });
    var WE = c((Oj, HE) => {
        var JG = Fn(),
            ek = UE();

        function BE(e, t, r, n, i) {
            var o = -1,
                s = e.length;
            for (r || (r = ek), i || (i = []); ++o < s;) {
                var a = e[o];
                t > 0 && r(a) ? t > 1 ? BE(a, t - 1, r, n, i) : JG(i, a) : n || (i[i.length] = a)
            }
            return i
        }
        HE.exports = BE
    });
    var jE = c((Aj, XE) => {
        var tk = WE();

        function rk(e) {
            var t = e == null ? 0 : e.length;
            return t ? tk(e, 1) : []
        }
        XE.exports = rk
    });
    var KE = c((Sj, zE) => {
        function nk(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        zE.exports = nk
    });
    var QE = c((xj, $E) => {
        var ik = KE(),
            YE = Math.max;

        function ok(e, t, r) {
            return t = YE(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = YE(n.length - t, 0), s = Array(o); ++i < o;) s[i] = n[t + i];
                    i = -1;
                    for (var a = Array(t + 1); ++i < t;) a[i] = n[i];
                    return a[t] = r(s), ik(e, this, a)
                }
        }
        $E.exports = ok
    });
    var JE = c((Cj, ZE) => {
        function ak(e) {
            return function() {
                return e
            }
        }
        ZE.exports = ak
    });
    var rm = c((Rj, tm) => {
        var sk = JE(),
            em = $a(),
            uk = zn(),
            ck = em ? function(e, t) {
                return em(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: sk(t),
                    writable: !0
                })
            } : uk;
        tm.exports = ck
    });
    var im = c((Lj, nm) => {
        var lk = 800,
            fk = 16,
            dk = Date.now;

        function pk(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = dk(),
                    i = fk - (n - r);
                if (r = n, i > 0) {
                    if (++t >= lk) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        nm.exports = pk
    });
    var am = c((Nj, om) => {
        var gk = rm(),
            vk = im(),
            hk = vk(gk);
        om.exports = hk
    });
    var um = c((Pj, sm) => {
        var yk = jE(),
            Ek = QE(),
            mk = am();

        function _k(e) {
            return mk(Ek(e, void 0, yk), e + "")
        }
        sm.exports = _k
    });
    var fm = c((qj, lm) => {
        var cm = oa(),
            bk = cm && new cm;
        lm.exports = bk
    });
    var pm = c((Fj, dm) => {
        function Tk() {}
        dm.exports = Tk
    });
    var gs = c((Mj, vm) => {
        var gm = fm(),
            Ik = pm(),
            wk = gm ? function(e) {
                return gm.get(e)
            } : Ik;
        vm.exports = wk
    });
    var ym = c((Dj, hm) => {
        var Ok = {};
        hm.exports = Ok
    });
    var vs = c((Gj, mm) => {
        var Em = ym(),
            Ak = Object.prototype,
            Sk = Ak.hasOwnProperty;

        function xk(e) {
            for (var t = e.name + "", r = Em[t], n = Sk.call(Em, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        mm.exports = xk
    });
    var Ei = c((kj, _m) => {
        var Ck = ps(),
            Rk = gi(),
            Lk = 4294967295;

        function yi(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Lk, this.__views__ = []
        }
        yi.prototype = Ck(Rk.prototype);
        yi.prototype.constructor = yi;
        _m.exports = yi
    });
    var Tm = c((Vj, bm) => {
        function Nk(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        bm.exports = Nk
    });
    var wm = c((Uj, Im) => {
        var Pk = Ei(),
            qk = hi(),
            Fk = Tm();

        function Mk(e) {
            if (e instanceof Pk) return e.clone();
            var t = new qk(e.__wrapped__, e.__chain__);
            return t.__actions__ = Fk(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        Im.exports = Mk
    });
    var Sm = c((Bj, Am) => {
        var Dk = Ei(),
            Om = hi(),
            Gk = gi(),
            kk = we(),
            Vk = dt(),
            Uk = wm(),
            Bk = Object.prototype,
            Hk = Bk.hasOwnProperty;

        function mi(e) {
            if (Vk(e) && !kk(e) && !(e instanceof Dk)) {
                if (e instanceof Om) return e;
                if (Hk.call(e, "__wrapped__")) return Uk(e)
            }
            return new Om(e)
        }
        mi.prototype = Gk.prototype;
        mi.prototype.constructor = mi;
        Am.exports = mi
    });
    var Cm = c((Hj, xm) => {
        var Wk = Ei(),
            Xk = gs(),
            jk = vs(),
            zk = Sm();

        function Kk(e) {
            var t = jk(e),
                r = zk[t];
            if (typeof r != "function" || !(t in Wk.prototype)) return !1;
            if (e === r) return !0;
            var n = Xk(r);
            return !!n && e === n[0]
        }
        xm.exports = Kk
    });
    var Pm = c((Wj, Nm) => {
        var Rm = hi(),
            Yk = um(),
            $k = gs(),
            hs = vs(),
            Qk = we(),
            Lm = Cm(),
            Zk = "Expected a function",
            Jk = 8,
            eV = 32,
            tV = 128,
            rV = 256;

        function nV(e) {
            return Yk(function(t) {
                var r = t.length,
                    n = r,
                    i = Rm.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(Zk);
                    if (i && !s && hs(o) == "wrapper") var s = new Rm([], !0)
                }
                for (n = s ? n : r; ++n < r;) {
                    o = t[n];
                    var a = hs(o),
                        u = a == "wrapper" ? $k(o) : void 0;
                    u && Lm(u[0]) && u[1] == (tV | Jk | eV | rV) && !u[4].length && u[9] == 1 ? s = s[hs(u[0])].apply(s, u[3]) : s = o.length == 1 && Lm(o) ? s[a]() : s.thru(o)
                }
                return function() {
                    var l = arguments,
                        g = l[0];
                    if (s && l.length == 1 && Qk(g)) return s.plant(g).value();
                    for (var d = 0, p = r ? t[d].apply(this, l) : g; ++d < r;) p = t[d].call(this, p);
                    return p
                }
            })
        }
        Nm.exports = nV
    });
    var Fm = c((Xj, qm) => {
        var iV = Pm(),
            oV = iV();
        qm.exports = oV
    });
    var Dm = c((jj, Mm) => {
        function aV(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        Mm.exports = aV
    });
    var km = c((zj, Gm) => {
        var sV = Dm(),
            ys = Kn();

        function uV(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ys(r), r = r === r ? r : 0), t !== void 0 && (t = ys(t), t = t === t ? t : 0), sV(ys(e), t, r)
        }
        Gm.exports = uV
    });
    var Km, Ym, $m, Qm, cV, lV, fV, dV, pV, gV, vV, hV, yV, EV, mV, _V, bV, TV, IV, Zm, Jm, wV, OV, AV, e_, SV, xV, t_, CV, Es, r_, Vm, Um, n_, Jr, RV, ut, i_, LV, Ve, Ze, en, o_, ms, Bm, _s, NV, Zr, PV, qV, FV, a_, Hm, MV, Wm, DV, GV, kV, Xm, _i, bi, jm, zm, s_, u_ = ye(() => {
        "use strict";
        Km = ce(Fm()), Ym = ce(jn()), $m = ce(km());
        Ge();
        bs();
        pi();
        Qm = ce(Gt()), {
            MOUSE_CLICK: cV,
            MOUSE_SECOND_CLICK: lV,
            MOUSE_DOWN: fV,
            MOUSE_UP: dV,
            MOUSE_OVER: pV,
            MOUSE_OUT: gV,
            DROPDOWN_CLOSE: vV,
            DROPDOWN_OPEN: hV,
            SLIDER_ACTIVE: yV,
            SLIDER_INACTIVE: EV,
            TAB_ACTIVE: mV,
            TAB_INACTIVE: _V,
            NAVBAR_CLOSE: bV,
            NAVBAR_OPEN: TV,
            MOUSE_MOVE: IV,
            PAGE_SCROLL_DOWN: Zm,
            SCROLL_INTO_VIEW: Jm,
            SCROLL_OUT_OF_VIEW: wV,
            PAGE_SCROLL_UP: OV,
            SCROLLING_IN_VIEW: AV,
            PAGE_FINISH: e_,
            ECOMMERCE_CART_CLOSE: SV,
            ECOMMERCE_CART_OPEN: xV,
            PAGE_START: t_,
            PAGE_SCROLL: CV
        } = $e, Es = "COMPONENT_ACTIVE", r_ = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: Vm
        } = Ce, {
            getNamespacedParameterId: Um
        } = Qm.IX2VanillaUtils, n_ = e => t => typeof t == "object" && e(t) ? !0 : t, Jr = n_(({
            element: e,
            nativeEvent: t
        }) => e === t.target), RV = n_(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), ut = (0, Km.default)([Jr, RV]), i_ = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !NV[i.eventTypeId]) return i
            }
            return null
        }, LV = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!i_(e, n)
        }, Ve = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: s
            } = t, {
                actionListId: a,
                autoStopEventId: u
            } = o.config, l = i_(e, u);
            return l && vr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Vm + n.split(Vm)[1],
                actionListId: (0, Ym.default)(l, "action.config.actionListId")
            }), vr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), tn({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), i
        }, Ze = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, en = {
            handler: Ze(ut, Ve)
        }, o_ = {
            ...en,
            types: [Es, r_].join(" ")
        }, ms = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], Bm = "mouseover mouseout", _s = {
            types: ms
        }, NV = {
            PAGE_START: t_,
            PAGE_FINISH: e_
        }, Zr = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, $m.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), PV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), qV = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let s = e.contains(i);
            return !!(r === "mouseout" && o && s)
        }, FV = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = Zr(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return PV(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, a_ = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [Es, r_].indexOf(n) !== -1 ? n === Es : r.isActive, o = {
                ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, Hm = e => (t, r) => {
            let n = {
                elementHovered: qV(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, MV = e => (t, r) => {
            let n = {
                ...r,
                elementVisible: FV(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, Wm = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = Zr(), {
                event: {
                    config: s,
                    eventTypeId: a
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: l
            } = s, g = l === "PX", d = i - o, p = Number((n / d).toFixed(2));
            if (r && r.percentTop === p) return r;
            let h = (g ? u : o * (u || 0) / 100) / d,
                b, _, w = 0;
            r && (b = p > r.percentTop, _ = r.scrollingDown !== b, w = _ ? p : r.anchorTop);
            let m = a === Zm ? p >= w + h : p <= w - h,
                C = {
                    ...r,
                    percentTop: p,
                    inBounds: m,
                    anchorTop: w,
                    scrollingDown: b
                };
            return r && m && (_ || C.inBounds !== r.inBounds) && e(t, C) || C
        }, DV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, GV = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, kV = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, Xm = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, _i = (e = !0) => ({
            ...o_,
            handler: Ze(e ? ut : Jr, a_((t, r) => r.isActive ? en.handler(t, r) : r))
        }), bi = (e = !0) => ({
            ...o_,
            handler: Ze(e ? ut : Jr, a_((t, r) => r.isActive ? r : en.handler(t, r)))
        }), jm = {
            ..._s,
            handler: MV((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: s
                } = o;
                return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Jm === r ? (Ve(e), {
                    ...t,
                    triggered: !0
                }) : t
            })
        }, zm = .05, s_ = {
            [yV]: _i(),
            [EV]: bi(),
            [hV]: _i(),
            [vV]: bi(),
            [TV]: _i(!1),
            [bV]: bi(!1),
            [mV]: _i(),
            [_V]: bi(),
            [xV]: {
                types: "ecommerce-cart-open",
                handler: Ze(ut, Ve)
            },
            [SV]: {
                types: "ecommerce-cart-close",
                handler: Ze(ut, Ve)
            },
            [cV]: {
                types: "click",
                handler: Ze(ut, Xm((e, {
                    clickCount: t
                }) => {
                    LV(e) ? t === 1 && Ve(e) : Ve(e)
                }))
            },
            [lV]: {
                types: "click",
                handler: Ze(ut, Xm((e, {
                    clickCount: t
                }) => {
                    t === 2 && Ve(e)
                }))
            },
            [fV]: {
                ...en,
                types: "mousedown"
            },
            [dV]: {
                ...en,
                types: "mouseup"
            },
            [pV]: {
                types: Bm,
                handler: Ze(ut, Hm((e, t) => {
                    t.elementHovered && Ve(e)
                }))
            },
            [gV]: {
                types: Bm,
                handler: Ze(ut, Hm((e, t) => {
                    t.elementHovered || Ve(e)
                }))
            },
            [IV]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: s,
                        selectedAxis: a,
                        continuousParameterGroupId: u,
                        reverse: l,
                        restingState: g = 0
                    } = r, {
                        clientX: d = o.clientX,
                        clientY: p = o.clientY,
                        pageX: h = o.pageX,
                        pageY: b = o.pageY
                    } = n, _ = a === "X_AXIS", w = n.type === "mouseout", m = g / 100, C = u, O = !1;
                    switch (s) {
                        case it.VIEWPORT: {
                            m = _ ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(p, window.innerHeight) / window.innerHeight;
                            break
                        }
                        case it.PAGE: {
                            let {
                                scrollLeft: N,
                                scrollTop: P,
                                scrollWidth: L,
                                scrollHeight: H
                            } = Zr();
                            m = _ ? Math.min(N + h, L) / L : Math.min(P + b, H) / H;
                            break
                        }
                        case it.ELEMENT:
                        default: {
                            C = Um(i, u);
                            let N = n.type.indexOf("mouse") === 0;
                            if (N && ut({
                                    element: t,
                                    nativeEvent: n
                                }) !== !0) break;
                            let P = t.getBoundingClientRect(),
                                {
                                    left: L,
                                    top: H,
                                    width: X,
                                    height: z
                                } = P;
                            if (!N && !DV({
                                    left: d,
                                    top: p
                                }, P)) break;
                            O = !0, m = _ ? (d - L) / X : (p - H) / z;
                            break
                        }
                    }
                    return w && (m > 1 - zm || m < zm) && (m = Math.round(m)), (s !== it.ELEMENT || O || O !== o.elementHovered) && (m = l ? 1 - m : m, e.dispatch(pr(C, m))), {
                        elementHovered: O,
                        clientX: d,
                        clientY: p,
                        pageX: h,
                        pageY: b
                    }
                }
            },
            [CV]: {
                types: ms,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: s
                    } = Zr(), a = i / (o - s);
                    a = n ? 1 - a : a, e.dispatch(pr(r, a))
                }
            },
            [AV]: {
                types: ms,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: s,
                        scrollWidth: a,
                        scrollHeight: u,
                        clientHeight: l
                    } = Zr(), {
                        basedOn: g,
                        selectedAxis: d,
                        continuousParameterGroupId: p,
                        startsEntering: h,
                        startsExiting: b,
                        addEndOffset: _,
                        addStartOffset: w,
                        addOffsetValue: m = 0,
                        endOffsetValue: C = 0
                    } = r, O = d === "X_AXIS";
                    if (g === it.VIEWPORT) {
                        let N = O ? o / a : s / u;
                        return N !== i.scrollPercent && t.dispatch(pr(p, N)), {
                            scrollPercent: N
                        }
                    } else {
                        let N = Um(n, p),
                            P = e.getBoundingClientRect(),
                            L = (w ? m : 0) / 100,
                            H = (_ ? C : 0) / 100;
                        L = h ? L : 1 - L, H = b ? H : 1 - H;
                        let X = P.top + Math.min(P.height * L, l),
                            Z = P.top + P.height * H - X,
                            G = Math.min(l + Z, u),
                            v = Math.min(Math.max(0, l - X), G) / G;
                        return v !== i.scrollPercent && t.dispatch(pr(N, v)), {
                            scrollPercent: v
                        }
                    }
                }
            },
            [Jm]: jm,
            [wV]: jm,
            [Zm]: {
                ..._s,
                handler: Wm((e, t) => {
                    t.scrollingDown && Ve(e)
                })
            },
            [OV]: {
                ..._s,
                handler: Wm((e, t) => {
                    t.scrollingDown || Ve(e)
                })
            },
            [e_]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ze(Jr, GV(Ve))
            },
            [t_]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ze(Jr, kV(Ve))
            }
        }
    });
    var O_ = {};
    Me(O_, {
        observeRequests: () => oU,
        startActionGroup: () => tn,
        startEngine: () => Si,
        stopActionGroup: () => vr,
        stopAllActionGroups: () => T_,
        stopEngine: () => xi
    });

    function oU(e) {
        kt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: uU
        }), kt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: cU
        }), kt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: lU
        }), kt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: fU
        })
    }

    function aU(e) {
        kt({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                xi(e), E_({
                    store: e,
                    elementApi: qe
                }), Si({
                    store: e,
                    allowEvents: !0
                }), m_()
            }
        })
    }

    function sU(e, t) {
        let r = kt({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function uU({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Si({
                store: r,
                rawData: e,
                allowEvents: !0
            }), m_()
        };
        t ? setTimeout(n, 0) : n()
    }

    function m_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function cU(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: s,
            immediate: a,
            testManual: u,
            verbose: l = !0
        } = e, {
            rawData: g
        } = e;
        if (n && i && g && a) {
            let d = g.actionLists[n];
            d && (g = KV({
                actionList: d,
                actionItemId: i,
                rawData: g
            }))
        }
        if (Si({
                store: t,
                rawData: g,
                allowEvents: s,
                testManual: u
            }), n && r === De.GENERAL_START_ACTION || Ts(r)) {
            vr({
                store: t,
                actionListId: n
            }), b_({
                store: t,
                actionListId: n,
                eventId: o
            });
            let d = tn({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: a,
                verbose: l
            });
            l && d && t.dispatch(gr({
                actionListId: n,
                isPlaying: !a
            }))
        }
    }

    function lU({
        actionListId: e
    }, t) {
        e ? vr({
            store: t,
            actionListId: e
        }) : T_({
            store: t
        }), xi(t)
    }

    function fU(e, t) {
        xi(t), E_({
            store: t,
            elementApi: qe
        })
    }

    function Si({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(Ja(t)), i.active || (e.dispatch(es({
            hasBoundaryNodes: !!document.querySelector(Ii),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (yU(e), dU(), e.getState().ixSession.hasDefinedMediaQueries && aU(e)), e.dispatch(ts()), pU(e, n))
    }

    function dU() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(c_) === -1 && (e.className += ` ${c_}`)
    }

    function pU(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(fi(n, o)), t ? sU(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function xi(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(gU), ZV(), e.dispatch(rs())
        }
    }

    function gU({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function vU({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: s,
        smoothing: a,
        restingValue: u
    }) {
        let {
            ixData: l,
            ixSession: g
        } = e.getState(), {
            events: d
        } = l, p = d[n], {
            eventTypeId: h
        } = p, b = {}, _ = {}, w = [], {
            continuousActionGroups: m
        } = s, {
            id: C
        } = s;
        YV(h, i) && (C = $V(t, C));
        let O = g.hasBoundaryNodes && r ? Qr(r, Ii) : null;
        m.forEach(N => {
            let {
                keyframe: P,
                actionItems: L
            } = N;
            L.forEach(H => {
                let {
                    actionTypeId: X
                } = H, {
                    target: z
                } = H.config;
                if (!z) return;
                let Z = z.boundaryMode ? O : null,
                    G = JV(z) + Is + X;
                if (_[G] = hU(_[G], P, H), !b[G]) {
                    b[G] = !0;
                    let {
                        config: x
                    } = H;
                    wi({
                        config: x,
                        event: p,
                        eventTarget: r,
                        elementRoot: Z,
                        elementApi: qe
                    }).forEach(v => {
                        w.push({
                            element: v,
                            key: G
                        })
                    })
                }
            })
        }), w.forEach(({
            element: N,
            key: P
        }) => {
            let L = _[P],
                H = (0, ht.default)(L, "[0].actionItems[0]", {}),
                {
                    actionTypeId: X
                } = H,
                z = Ai(X) ? Os(X)(N, H) : null,
                Z = ws({
                    element: N,
                    actionItem: H,
                    elementApi: qe
                }, z);
            As({
                store: e,
                element: N,
                eventId: n,
                actionListId: o,
                actionItem: H,
                destination: Z,
                continuous: !0,
                parameterId: C,
                actionGroups: L,
                smoothing: a,
                restingValue: u,
                pluginInstance: z
            })
        })
    }

    function hU(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, s) => o.keyframe === t ? (i = s, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function yU(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        __(e), (0, hr.default)(r, (i, o) => {
            let s = s_[o];
            if (!s) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            IU({
                logic: s,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && mU(e)
    }

    function mU(e) {
        let t = () => {
            __(e)
        };
        EU.forEach(r => {
            window.addEventListener(r, t), e.dispatch(li(window, [r, t]))
        }), t()
    }

    function __(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(ss({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function IU({
        logic: e,
        store: t,
        events: r
    }) {
        wU(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: s
        } = o, a = _U(r, TU);
        if (!(0, d_.default)(a)) return;
        (0, hr.default)(a, (d, p) => {
            let h = r[p],
                {
                    action: b,
                    id: _,
                    mediaQueries: w = o.mediaQueryKeys
                } = h,
                {
                    actionListId: m
                } = b.config;
            eU(w, o.mediaQueryKeys) || t.dispatch(us()), b.actionTypeId === De.GENERAL_CONTINUOUS_ACTION && (Array.isArray(h.config) ? h.config : [h.config]).forEach(O => {
                let {
                    continuousParameterGroupId: N
                } = O, P = (0, ht.default)(s, `${m}.continuousParameterGroups`, []), L = (0, f_.default)(P, ({
                    id: z
                }) => z === N), H = (O.smoothing || 0) / 100, X = (O.restingState || 0) / 100;
                L && d.forEach((z, Z) => {
                    let G = _ + Is + Z;
                    vU({
                        store: t,
                        eventStateKey: G,
                        eventTarget: z,
                        eventId: _,
                        eventConfig: O,
                        actionListId: m,
                        parameterGroup: L,
                        smoothing: H,
                        restingValue: X
                    })
                })
            }), (b.actionTypeId === De.GENERAL_START_ACTION || Ts(b.actionTypeId)) && b_({
                store: t,
                actionListId: m,
                eventId: _
            })
        });
        let u = d => {
                let {
                    ixSession: p
                } = t.getState();
                bU(a, (h, b, _) => {
                    let w = r[b],
                        m = p.eventState[_],
                        {
                            action: C,
                            mediaQueries: O = o.mediaQueryKeys
                        } = w;
                    if (!Oi(O, p.mediaQueryKey)) return;
                    let N = (P = {}) => {
                        let L = i({
                            store: t,
                            element: h,
                            event: w,
                            eventConfig: P,
                            nativeEvent: d,
                            eventStateKey: _
                        }, m);
                        tU(L, m) || t.dispatch(ns(_, L))
                    };
                    C.actionTypeId === De.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(w.config) ? w.config : [w.config]).forEach(N) : N()
                })
            },
            l = (0, h_.default)(u, iU),
            g = ({
                target: d = document,
                types: p,
                throttle: h
            }) => {
                p.split(" ").filter(Boolean).forEach(b => {
                    let _ = h ? l : u;
                    d.addEventListener(b, _), t.dispatch(li(d, [b, _]))
                })
            };
        Array.isArray(n) ? n.forEach(g) : typeof n == "string" && g(e)
    }

    function wU(e) {
        if (!nU) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], s = ls(o);
            t[s] || (i === $e.MOUSE_CLICK || i === $e.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function b_({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: s
        } = n, a = s[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0, ht.default)(u, "actionItemGroups[0].actionItems", []),
                g = (0, ht.default)(a, "mediaQueries", n.mediaQueryKeys);
            if (!Oi(g, i.mediaQueryKey)) return;
            l.forEach(d => {
                let {
                    config: p,
                    actionTypeId: h
                } = d, b = p?.target?.useEventTarget === !0 && p?.target?.objectId == null ? {
                    target: a.target,
                    targets: a.targets
                } : p, _ = wi({
                    config: b,
                    event: a,
                    elementApi: qe
                }), w = Ai(h);
                _.forEach(m => {
                    let C = w ? Os(h)(m, d) : null;
                    As({
                        destination: ws({
                            element: m,
                            actionItem: d,
                            elementApi: qe
                        }, C),
                        immediate: !0,
                        store: e,
                        element: m,
                        eventId: r,
                        actionItem: d,
                        actionListId: t,
                        pluginInstance: C
                    })
                })
            })
        }
    }

    function T_({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, hr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                Ss(r, e), i && e.dispatch(gr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function vr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: s
        } = e.getState(), a = s.hasBoundaryNodes && r ? Qr(r, Ii) : null;
        (0, hr.default)(o, u => {
            let l = (0, ht.default)(u, "actionItem.config.target.boundaryMode"),
                g = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && g) {
                if (a && l && !fs(a, u.element)) return;
                Ss(u, e), u.verbose && e.dispatch(gr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function tn({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: s,
        verbose: a
    }) {
        let {
            ixData: u,
            ixSession: l
        } = e.getState(), {
            events: g
        } = u, d = g[t] || {}, {
            mediaQueries: p = u.mediaQueryKeys
        } = d, h = (0, ht.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: b,
            useFirstGroupAsInitialState: _
        } = h;
        if (!b || !b.length) return !1;
        o >= b.length && (0, ht.default)(d, "config.loop") && (o = 0), o === 0 && _ && o++;
        let m = (o === 0 || o === 1 && _) && Ts(d.action?.actionTypeId) ? d.config.delay : void 0,
            C = (0, ht.default)(b, [o, "actionItems"], []);
        if (!C.length || !Oi(p, l.mediaQueryKey)) return !1;
        let O = l.hasBoundaryNodes && r ? Qr(r, Ii) : null,
            N = XV(C),
            P = !1;
        return C.forEach((L, H) => {
            let {
                config: X,
                actionTypeId: z
            } = L, Z = Ai(z), {
                target: G
            } = X;
            if (!G) return;
            let x = G.boundaryMode ? O : null;
            wi({
                config: X,
                event: d,
                eventTarget: r,
                elementRoot: x,
                elementApi: qe
            }).forEach((R, F) => {
                let D = Z ? Os(z)(R, L) : null,
                    J = Z ? rU(z)(R, L) : null;
                P = !0;
                let ee = N === H && F === 0,
                    q = jV({
                        element: R,
                        actionItem: L
                    }),
                    V = ws({
                        element: R,
                        actionItem: L,
                        elementApi: qe
                    }, D);
                As({
                    store: e,
                    element: R,
                    actionItem: L,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: ee,
                    computedStyle: q,
                    destination: V,
                    immediate: s,
                    verbose: a,
                    pluginInstance: D,
                    pluginDuration: J,
                    instanceDelay: m
                })
            })
        }), P
    }

    function As(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: s,
            pluginInstance: a,
            continuous: u,
            restingValue: l,
            eventId: g
        } = n, d = !u, p = HV(), {
            ixElements: h,
            ixSession: b,
            ixData: _
        } = t.getState(), w = BV(h, i), {
            refState: m
        } = h[w] || {}, C = ds(i), O = b.reducedMotion && jo[o.actionTypeId], N;
        if (O && u) switch (_.events[g]?.eventTypeId) {
            case $e.MOUSE_MOVE:
            case $e.MOUSE_MOVE_IN_VIEWPORT:
                N = l;
                break;
            default:
                N = .5;
                break
        }
        let P = zV(i, m, r, o, qe, a);
        if (t.dispatch(is({
                instanceId: p,
                elementId: w,
                origin: P,
                refType: C,
                skipMotion: O,
                skipToValue: N,
                ...n
            })), I_(document.body, "ix2-animation-started", p), s) {
            OU(t, p);
            return
        }
        kt({
            store: t,
            select: ({
                ixInstances: L
            }) => L[p],
            onChange: w_
        }), d && t.dispatch(di(p, b.tick))
    }

    function Ss(e, t) {
        I_(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: s
        } = i[r] || {};
        s === y_ && QV(o, n, qe), t.dispatch(os(e.id))
    }

    function I_(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function OU(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(di(t, 0)), e.dispatch(fi(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        w_(n[t], e)
    }

    function w_(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: s,
            actionTypeId: a,
            renderType: u,
            current: l,
            groupIndex: g,
            eventId: d,
            eventTarget: p,
            eventStateKey: h,
            actionListId: b,
            isCarrier: _,
            styleProp: w,
            verbose: m,
            pluginInstance: C
        } = e, {
            ixData: O,
            ixSession: N
        } = t.getState(), {
            events: P
        } = O, L = P[d] || {}, {
            mediaQueries: H = O.mediaQueryKeys
        } = L;
        if (Oi(H, N.mediaQueryKey) && (n || r || i)) {
            if (l || u === UV && i) {
                t.dispatch(as(o, a, l, s));
                let {
                    ixElements: X
                } = t.getState(), {
                    ref: z,
                    refType: Z,
                    refState: G
                } = X[o] || {}, x = G && G[a];
                (Z === y_ || Ai(a)) && WV(z, G, x, d, s, w, qe, u, C)
            }
            if (i) {
                if (_) {
                    let X = tn({
                        store: t,
                        eventId: d,
                        eventTarget: p,
                        eventStateKey: h,
                        actionListId: b,
                        groupIndex: g + 1,
                        verbose: m
                    });
                    m && !X && t.dispatch(gr({
                        actionListId: b,
                        isPlaying: !1
                    }))
                }
                Ss(e, t)
            }
        }
    }
    var f_, ht, d_, p_, g_, v_, hr, h_, Ti, VV, Ts, Is, Ii, y_, UV, c_, wi, BV, ws, kt, HV, WV, E_, XV, jV, zV, KV, YV, $V, Oi, QV, ZV, JV, eU, tU, Ai, Os, rU, l_, nU, iU, EU, _U, bU, TU, bs = ye(() => {
        "use strict";
        f_ = ce(ba()), ht = ce(jn()), d_ = ce(Gy()), p_ = ce(lE()), g_ = ce(dE()), v_ = ce(gE()), hr = ce(_E()), h_ = ce(SE());
        Ge();
        Ti = ce(Gt());
        pi();
        PE();
        u_();
        VV = Object.keys(wn), Ts = e => VV.includes(e), {
            COLON_DELIMITER: Is,
            BOUNDARY_SELECTOR: Ii,
            HTML_ELEMENT: y_,
            RENDER_GENERAL: UV,
            W_MOD_IX: c_
        } = Ce, {
            getAffectedElements: wi,
            getElementId: BV,
            getDestinationValues: ws,
            observeStore: kt,
            getInstanceId: HV,
            renderHTMLElement: WV,
            clearAllStyles: E_,
            getMaxDurationItemIndex: XV,
            getComputedStyle: jV,
            getInstanceOrigin: zV,
            reduceListToGroup: KV,
            shouldNamespaceEventParameter: YV,
            getNamespacedParameterId: $V,
            shouldAllowMediaQuery: Oi,
            cleanupHTMLElement: QV,
            clearObjectCache: ZV,
            stringifyTarget: JV,
            mediaQueriesEqual: eU,
            shallowEqual: tU
        } = Ti.IX2VanillaUtils, {
            isPluginType: Ai,
            createPluginInstance: Os,
            getPluginDuration: rU
        } = Ti.IX2VanillaPlugins, l_ = navigator.userAgent, nU = l_.match(/iPad/i) || l_.match(/iPhone/), iU = 12;
        EU = ["resize", "orientationchange"];
        _U = (e, t) => (0, p_.default)((0, v_.default)(e, t), g_.default), bU = (e, t) => {
            (0, hr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let s = n + Is + o;
                    t(i, n, s)
                })
            })
        }, TU = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return wi({
                config: t,
                elementApi: qe
            })
        }
    });
    var S_ = c(yt => {
        "use strict";
        var AU = fn().default,
            SU = uu().default;
        Object.defineProperty(yt, "__esModule", {
            value: !0
        });
        yt.actions = void 0;
        yt.destroy = A_;
        yt.init = NU;
        yt.setEnv = LU;
        yt.store = void 0;
        zl();
        var xU = Ho(),
            CU = SU((my(), et(Ey))),
            xs = (bs(), et(O_)),
            RU = AU((pi(), et(CE)));
        yt.actions = RU;
        var Cs = yt.store = (0, xU.createStore)(CU.default);

        function LU(e) {
            e() && (0, xs.observeRequests)(Cs)
        }

        function NU(e) {
            A_(), (0, xs.startEngine)({
                store: Cs,
                rawData: e,
                allowEvents: !0
            })
        }

        function A_() {
            (0, xs.stopEngine)(Cs)
        }
    });
    var L_ = c((rz, R_) => {
        "use strict";
        var x_ = Ue(),
            C_ = S_();
        C_.setEnv(x_.env);
        x_.define("ix2", R_.exports = function() {
            return C_
        })
    });
    var P_ = c((nz, N_) => {
        "use strict";
        var yr = Ue();
        yr.define("links", N_.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = yr.env(),
                s = window.location,
                a = document.createElement("a"),
                u = "w--current",
                l = /index\.(html|php)$/,
                g = /\/$/,
                d, p;
            r.ready = r.design = r.preview = h;

            function h() {
                i = o && yr.env("design"), p = yr.env("slug") || s.pathname || "", yr.scroll.off(_), d = [];
                for (var m = document.links, C = 0; C < m.length; ++C) b(m[C]);
                d.length && (yr.scroll.on(_), _())
            }

            function b(m) {
                if (!m.getAttribute("hreflang")) {
                    var C = i && m.getAttribute("href-disabled") || m.getAttribute("href");
                    if (a.href = C, !(C.indexOf(":") >= 0)) {
                        var O = e(m);
                        if (a.hash.length > 1 && a.host + a.pathname === s.host + s.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash)) return;
                            var N = e(a.hash);
                            N.length && d.push({
                                link: O,
                                sec: N,
                                active: !1
                            });
                            return
                        }
                        if (!(C === "#" || C === "")) {
                            var P = a.href === s.href || C === p || l.test(C) && g.test(p);
                            w(O, u, P)
                        }
                    }
                }
            }

            function _() {
                var m = n.scrollTop(),
                    C = n.height();
                t.each(d, function(O) {
                    if (!O.link.attr("hreflang")) {
                        var N = O.link,
                            P = O.sec,
                            L = P.offset().top,
                            H = P.outerHeight(),
                            X = C * .5,
                            z = P.is(":visible") && L + H - X >= m && L + X <= m + C;
                        O.active !== z && (O.active = z, w(N, u, z))
                    }
                })
            }

            function w(m, C, O) {
                var N = m.hasClass(C);
                O && N || !O && !N || (O ? m.addClass(C) : m.removeClass(C))
            }
            return r
        })
    });
    var F_ = c((iz, q_) => {
        "use strict";
        var Ci = Ue();
        Ci.define("scroll", q_.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = b() ? null : window.history,
                i = e(window),
                o = e(document),
                s = e(document.body),
                a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(x) {
                    window.setTimeout(x, 15)
                },
                u = Ci.env("editor") ? ".w-editor-body" : "body",
                l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                g = 'a[href="#"]',
                d = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
                p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                h = document.createElement("style");
            h.appendChild(document.createTextNode(p));

            function b() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;

            function w(x) {
                return _.test(x.hash) && x.host + x.pathname === r.host + r.pathname
            }
            let m = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function C() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || m.matches
            }

            function O(x, v) {
                var R;
                switch (v) {
                    case "add":
                        R = x.attr("tabindex"), R ? x.attr("data-wf-tabindex-swap", R) : x.attr("tabindex", "-1");
                        break;
                    case "remove":
                        R = x.attr("data-wf-tabindex-swap"), R ? (x.attr("tabindex", R), x.removeAttr("data-wf-tabindex-swap")) : x.removeAttr("tabindex");
                        break
                }
                x.toggleClass("wf-force-outline-none", v === "add")
            }

            function N(x) {
                var v = x.currentTarget;
                if (!(Ci.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(v.className))) {
                    var R = w(v) ? v.hash : "";
                    if (R !== "") {
                        var F = e(R);
                        F.length && (x && (x.preventDefault(), x.stopPropagation()), P(R, x), window.setTimeout(function() {
                            L(F, function() {
                                O(F, "add"), F.get(0).focus({
                                    preventScroll: !0
                                }), O(F, "remove")
                            })
                        }, x ? 0 : 300))
                    }
                }
            }

            function P(x) {
                if (r.hash !== x && n && n.pushState && !(Ci.env.chrome && r.protocol === "file:")) {
                    var v = n.state && n.state.hash;
                    v !== x && n.pushState({
                        hash: x
                    }, "", x)
                }
            }

            function L(x, v) {
                var R = i.scrollTop(),
                    F = H(x);
                if (R !== F) {
                    var D = X(x, R, F),
                        J = Date.now(),
                        ee = function() {
                            var q = Date.now() - J;
                            window.scroll(0, z(R, F, q, D)), q <= D ? a(ee) : typeof v == "function" && v()
                        };
                    a(ee)
                }
            }

            function H(x) {
                var v = e(l),
                    R = v.css("position") === "fixed" ? v.outerHeight() : 0,
                    F = x.offset().top - R;
                if (x.data("scroll") === "mid") {
                    var D = i.height() - R,
                        J = x.outerHeight();
                    J < D && (F -= Math.round((D - J) / 2))
                }
                return F
            }

            function X(x, v, R) {
                if (C()) return 0;
                var F = 1;
                return s.add(x).each(function(D, J) {
                    var ee = parseFloat(J.getAttribute("data-scroll-time"));
                    !isNaN(ee) && ee >= 0 && (F = ee)
                }), (472.143 * Math.log(Math.abs(v - R) + 125) - 2e3) * F
            }

            function z(x, v, R, F) {
                return R > F ? v : x + (v - x) * Z(R / F)
            }

            function Z(x) {
                return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1
            }

            function G() {
                var {
                    WF_CLICK_EMPTY: x,
                    WF_CLICK_SCROLL: v
                } = t;
                o.on(v, d, N), o.on(x, g, function(R) {
                    R.preventDefault()
                }), document.head.insertBefore(h, document.head.firstChild)
            }
            return {
                ready: G
            }
        })
    });
    var D_ = c((oz, M_) => {
        "use strict";
        var PU = Ue();
        PU.define("touch", M_.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var s = !1,
                    a = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    l, g;
                o.addEventListener("touchstart", d, !1), o.addEventListener("touchmove", p, !1), o.addEventListener("touchend", h, !1), o.addEventListener("touchcancel", b, !1), o.addEventListener("mousedown", d, !1), o.addEventListener("mousemove", p, !1), o.addEventListener("mouseup", h, !1), o.addEventListener("mouseout", b, !1);

                function d(w) {
                    var m = w.touches;
                    m && m.length > 1 || (s = !0, m ? (a = !0, l = m[0].clientX) : l = w.clientX, g = l)
                }

                function p(w) {
                    if (s) {
                        if (a && w.type === "mousemove") {
                            w.preventDefault(), w.stopPropagation();
                            return
                        }
                        var m = w.touches,
                            C = m ? m[0].clientX : w.clientX,
                            O = C - g;
                        g = C, Math.abs(O) > u && r && String(r()) === "" && (i("swipe", w, {
                            direction: O > 0 ? "right" : "left"
                        }), b())
                    }
                }

                function h(w) {
                    if (s && (s = !1, a && w.type === "mouseup")) {
                        w.preventDefault(), w.stopPropagation(), a = !1;
                        return
                    }
                }

                function b() {
                    s = !1
                }

                function _() {
                    o.removeEventListener("touchstart", d, !1), o.removeEventListener("touchmove", p, !1), o.removeEventListener("touchend", h, !1), o.removeEventListener("touchcancel", b, !1), o.removeEventListener("mousedown", d, !1), o.removeEventListener("mousemove", p, !1), o.removeEventListener("mouseup", h, !1), o.removeEventListener("mouseout", b, !1), o = null
                }
                this.destroy = _
            }

            function i(o, s, a) {
                var u = e.Event(o, {
                    originalEvent: s
                });
                e(s.target).trigger(u, a)
            }
            return t.instance = t.init(document), t
        })
    });
    var G_ = c(Rs => {
        "use strict";
        Object.defineProperty(Rs, "__esModule", {
            value: !0
        });
        Rs.default = qU;

        function qU(e, t, r, n, i, o, s, a, u, l, g, d, p) {
            return function(h) {
                e(h);
                var b = h.form,
                    _ = {
                        name: b.attr("data-name") || b.attr("name") || "Untitled Form",
                        pageId: b.attr("data-wf-page-id") || "",
                        elementId: b.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(b.html()),
                        trackingCookies: n()
                    };
                let w = b.attr("data-wf-flow");
                w && (_.wfFlow = w), i(h);
                var m = o(b, _.fields);
                if (m) return s(m);
                if (_.fileUploads = a(b), u(h), !l) {
                    g(h);
                    return
                }
                d.ajax({
                    url: p,
                    type: "POST",
                    data: _,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(C) {
                    C && C.code === 200 && (h.success = !0), g(h)
                }).fail(function() {
                    g(h)
                })
            }
        }
    });
    var V_ = c((sz, k_) => {
        "use strict";
        var Ri = Ue();
        Ri.define("forms", k_.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                s = window.XDomainRequest && !window.atob,
                a = ".w-form",
                u, l = /e(-)?mail/i,
                g = /^\S+@\S+$/,
                d = window.alert,
                p = Ri.env(),
                h, b, _, w = /list-manage[1-9]?.com/i,
                m = t.debounce(function() {
                    d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                C(), !p && !h && N()
            };

            function C() {
                u = e("html").attr("data-wf-site"), b = "https://webflow.com/api/v1/form/" + u, s && b.indexOf("https://webflow.com") >= 0 && (b = b.replace("https://webflow.com", "https://formdata.webflow.com")), _ = `${b}/signFile`, i = e(a + " form"), i.length && i.each(O)
            }

            function O(q, V) {
                var K = e(V),
                    k = e.data(V, a);
                k || (k = e.data(V, a, {
                    form: K
                })), P(k);
                var M = K.closest("div.w-form");
                k.done = M.find("> .w-form-done"), k.fail = M.find("> .w-form-fail"), k.fileUploads = M.find(".w-file-upload"), k.fileUploads.each(function(ne) {
                    D(ne, k)
                });
                var j = k.form.attr("aria-label") || k.form.attr("data-name") || "Form";
                k.done.attr("aria-label") || k.form.attr("aria-label", j), k.done.attr("tabindex", "-1"), k.done.attr("role", "region"), k.done.attr("aria-label") || k.done.attr("aria-label", j + " success"), k.fail.attr("tabindex", "-1"), k.fail.attr("role", "region"), k.fail.attr("aria-label") || k.fail.attr("aria-label", j + " failure");
                var oe = k.action = K.attr("action");
                if (k.handler = null, k.redirect = K.attr("data-redirect"), w.test(oe)) {
                    k.handler = v;
                    return
                }
                if (!oe) {
                    if (u) {
                        k.handler = (() => {
                            let ne = G_().default;
                            return ne(P, o, Ri, Z, F, H, d, X, L, u, R, e, b)
                        })();
                        return
                    }
                    m()
                }
            }

            function N() {
                h = !0, n.on("submit", a + " form", function(ne) {
                    var re = e.data(this, a);
                    re.handler && (re.evt = ne, re.handler(re))
                });
                let q = ".w-checkbox-input",
                    V = ".w-radio-input",
                    K = "w--redirected-checked",
                    k = "w--redirected-focus",
                    M = "w--redirected-focus-visible",
                    j = ":focus-visible, [data-wf-focus-visible]",
                    oe = [
                        ["checkbox", q],
                        ["radio", V]
                    ];
                n.on("change", a + ' form input[type="checkbox"]:not(' + q + ")", ne => {
                    e(ne.target).siblings(q).toggleClass(K)
                }), n.on("change", a + ' form input[type="radio"]', ne => {
                    e(`input[name="${ne.target.name}"]:not(${q})`).map((pe, ct) => e(ct).siblings(V).removeClass(K));
                    let re = e(ne.target);
                    re.hasClass("w-radio-input") || re.siblings(V).addClass(K)
                }), oe.forEach(([ne, re]) => {
                    n.on("focus", a + ` form input[type="${ne}"]:not(` + re + ")", pe => {
                        e(pe.target).siblings(re).addClass(k), e(pe.target).filter(j).siblings(re).addClass(M)
                    }), n.on("blur", a + ` form input[type="${ne}"]:not(` + re + ")", pe => {
                        e(pe.target).siblings(re).removeClass(`${k} ${M}`)
                    })
                })
            }

            function P(q) {
                var V = q.btn = q.form.find(':input[type="submit"]');
                q.wait = q.btn.attr("data-wait") || null, q.success = !1, V.prop("disabled", !1), q.label && V.val(q.label)
            }

            function L(q) {
                var V = q.btn,
                    K = q.wait;
                V.prop("disabled", !0), K && (q.label = V.val(), V.val(K))
            }

            function H(q, V) {
                var K = null;
                return V = V || {}, q.find(':input:not([type="submit"]):not([type="file"])').each(function(k, M) {
                    var j = e(M),
                        oe = j.attr("type"),
                        ne = j.attr("data-name") || j.attr("name") || "Field " + (k + 1);
                    ne = encodeURIComponent(ne);
                    var re = j.val();
                    if (oe === "checkbox") re = j.is(":checked");
                    else if (oe === "radio") {
                        if (V[ne] === null || typeof V[ne] == "string") return;
                        re = q.find('input[name="' + j.attr("name") + '"]:checked').val() || null
                    }
                    typeof re == "string" && (re = e.trim(re)), V[ne] = re, K = K || G(j, oe, ne, re)
                }), K
            }

            function X(q) {
                var V = {};
                return q.find(':input[type="file"]').each(function(K, k) {
                    var M = e(k),
                        j = M.attr("data-name") || M.attr("name") || "File " + (K + 1),
                        oe = M.attr("data-value");
                    typeof oe == "string" && (oe = e.trim(oe)), V[j] = oe
                }), V
            }
            let z = {
                _mkto_trk: "marketo"
            };

            function Z() {
                return document.cookie.split("; ").reduce(function(V, K) {
                    let k = K.split("="),
                        M = k[0];
                    if (M in z) {
                        let j = z[M],
                            oe = k.slice(1).join("=");
                        V[j] = oe
                    }
                    return V
                }, {})
            }

            function G(q, V, K, k) {
                var M = null;
                return V === "password" ? M = "Passwords cannot be submitted." : q.attr("required") ? k ? l.test(q.attr("type")) && (g.test(k) || (M = "Please enter a valid email address for: " + K)) : M = "Please fill out the required field: " + K : K === "g-recaptcha-response" && !k && (M = "Please confirm you\u2019re not a robot."), M
            }

            function x(q) {
                F(q), R(q)
            }

            function v(q) {
                P(q);
                var V = q.form,
                    K = {};
                if (/^https/.test(o.href) && !/^https/.test(q.action)) {
                    V.attr("method", "post");
                    return
                }
                F(q);
                var k = H(V, K);
                if (k) return d(k);
                L(q);
                var M;
                t.each(K, function(re, pe) {
                    l.test(pe) && (K.EMAIL = re), /^((full[ _-]?)?name)$/i.test(pe) && (M = re), /^(first[ _-]?name)$/i.test(pe) && (K.FNAME = re), /^(last[ _-]?name)$/i.test(pe) && (K.LNAME = re)
                }), M && !K.FNAME && (M = M.split(" "), K.FNAME = M[0], K.LNAME = K.LNAME || M[1]);
                var j = q.action.replace("/post?", "/post-json?") + "&c=?",
                    oe = j.indexOf("u=") + 2;
                oe = j.substring(oe, j.indexOf("&", oe));
                var ne = j.indexOf("id=") + 3;
                ne = j.substring(ne, j.indexOf("&", ne)), K["b_" + oe + "_" + ne] = "", e.ajax({
                    url: j,
                    data: K,
                    dataType: "jsonp"
                }).done(function(re) {
                    q.success = re.result === "success" || /already/.test(re.msg), q.success || console.info("MailChimp error: " + re.msg), R(q)
                }).fail(function() {
                    R(q)
                })
            }

            function R(q) {
                var V = q.form,
                    K = q.redirect,
                    k = q.success;
                if (k && K) {
                    Ri.location(K);
                    return
                }
                q.done.toggle(k), q.fail.toggle(!k), k ? q.done.focus() : q.fail.focus(), V.toggle(!k), P(q)
            }

            function F(q) {
                q.evt && q.evt.preventDefault(), q.evt = null
            }

            function D(q, V) {
                if (!V.fileUploads || !V.fileUploads[q]) return;
                var K, k = e(V.fileUploads[q]),
                    M = k.find("> .w-file-upload-default"),
                    j = k.find("> .w-file-upload-uploading"),
                    oe = k.find("> .w-file-upload-success"),
                    ne = k.find("> .w-file-upload-error"),
                    re = M.find(".w-file-upload-input"),
                    pe = M.find(".w-file-upload-label"),
                    ct = pe.children(),
                    le = ne.find(".w-file-upload-error-msg"),
                    y = oe.find(".w-file-upload-file"),
                    U = oe.find(".w-file-remove-link"),
                    Y = y.find(".w-file-upload-file-name"),
                    W = le.attr("data-w-size-error"),
                    ve = le.attr("data-w-type-error"),
                    xt = le.attr("data-w-generic-error");
                if (p || pe.on("click keydown", function(T) {
                        T.type === "keydown" && T.which !== 13 && T.which !== 32 || (T.preventDefault(), re.click())
                    }), pe.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), U.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), p) re.on("click", function(T) {
                    T.preventDefault()
                }), pe.on("click", function(T) {
                    T.preventDefault()
                }), ct.on("click", function(T) {
                    T.preventDefault()
                });
                else {
                    U.on("click keydown", function(T) {
                        if (T.type === "keydown") {
                            if (T.which !== 13 && T.which !== 32) return;
                            T.preventDefault()
                        }
                        re.removeAttr("data-value"), re.val(""), Y.html(""), M.toggle(!0), oe.toggle(!1), pe.focus()
                    }), re.on("change", function(T) {
                        K = T.target && T.target.files && T.target.files[0], K && (M.toggle(!1), ne.toggle(!1), j.toggle(!0), j.focus(), Y.text(K.name), A() || L(V), V.fileUploads[q].uploading = !0, J(K, E))
                    });
                    var lt = pe.outerHeight();
                    re.height(lt), re.width(1)
                }

                function f(T) {
                    var S = T.responseJSON && T.responseJSON.msg,
                        Q = xt;
                    typeof S == "string" && S.indexOf("InvalidFileTypeError") === 0 ? Q = ve : typeof S == "string" && S.indexOf("MaxFileSizeError") === 0 && (Q = W), le.text(Q), re.removeAttr("data-value"), re.val(""), j.toggle(!1), M.toggle(!0), ne.toggle(!0), ne.focus(), V.fileUploads[q].uploading = !1, A() || P(V)
                }

                function E(T, S) {
                    if (T) return f(T);
                    var Q = S.fileName,
                        ie = S.postData,
                        ge = S.fileId,
                        B = S.s3Url;
                    re.attr("data-value", ge), ee(B, ie, K, Q, I)
                }

                function I(T) {
                    if (T) return f(T);
                    j.toggle(!1), oe.css("display", "inline-block"), oe.focus(), V.fileUploads[q].uploading = !1, A() || P(V)
                }

                function A() {
                    var T = V.fileUploads && V.fileUploads.toArray() || [];
                    return T.some(function(S) {
                        return S.uploading
                    })
                }
            }

            function J(q, V) {
                var K = new URLSearchParams({
                    name: q.name,
                    size: q.size
                });
                e.ajax({
                    type: "GET",
                    url: `${_}?${K}`,
                    crossDomain: !0
                }).done(function(k) {
                    V(null, k)
                }).fail(function(k) {
                    V(k)
                })
            }

            function ee(q, V, K, k, M) {
                var j = new FormData;
                for (var oe in V) j.append(oe, V[oe]);
                j.append("file", K, k), e.ajax({
                    type: "POST",
                    url: q,
                    data: j,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    M(null)
                }).fail(function(ne) {
                    M(ne)
                })
            }
            return r
        })
    });
    var B_ = c((uz, U_) => {
        "use strict";
        var At = Ue(),
            FU = ln(),
            xe = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        At.define("navbar", U_.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                s = t.debounce,
                a, u, l, g, d = At.env(),
                p = '<div class="w-nav-overlay" data-wf-ignore />',
                h = ".w-nav",
                b = "w--open",
                _ = "w--nav-dropdown-open",
                w = "w--nav-dropdown-toggle-open",
                m = "w--nav-dropdown-list-open",
                C = "w--nav-link-open",
                O = FU.triggers,
                N = e();
            r.ready = r.design = r.preview = P, r.destroy = function() {
                N = e(), L(), u && u.length && u.each(Z)
            };

            function P() {
                l = d && At.env("design"), g = At.env("editor"), a = e(document.body), u = o.find(h), u.length && (u.each(z), L(), H())
            }

            function L() {
                At.resize.off(X)
            }

            function H() {
                At.resize.on(X)
            }

            function X() {
                u.each(M)
            }

            function z(y, U) {
                var Y = e(U),
                    W = e.data(U, h);
                W || (W = e.data(U, h, {
                    open: !1,
                    el: Y,
                    config: {},
                    selectedIdx: -1
                })), W.menu = Y.find(".w-nav-menu"), W.links = W.menu.find(".w-nav-link"), W.dropdowns = W.menu.find(".w-dropdown"), W.dropdownToggle = W.menu.find(".w-dropdown-toggle"), W.dropdownList = W.menu.find(".w-dropdown-list"), W.button = Y.find(".w-nav-button"), W.container = Y.find(".w-container"), W.overlayContainerId = "w-nav-overlay-" + y, W.outside = K(W);
                var ve = Y.find(".w-nav-brand");
                ve && ve.attr("href") === "/" && ve.attr("aria-label") == null && ve.attr("aria-label", "home"), W.button.attr("style", "-webkit-user-select: text;"), W.button.attr("aria-label") == null && W.button.attr("aria-label", "menu"), W.button.attr("role", "button"), W.button.attr("tabindex", "0"), W.button.attr("aria-controls", W.overlayContainerId), W.button.attr("aria-haspopup", "menu"), W.button.attr("aria-expanded", "false"), W.el.off(h), W.button.off(h), W.menu.off(h), v(W), l ? (G(W), W.el.on("setting" + h, R(W))) : (x(W), W.button.on("click" + h, q(W)), W.menu.on("click" + h, "a", V(W)), W.button.on("keydown" + h, F(W)), W.el.on("keydown" + h, D(W))), M(y, U)
            }

            function Z(y, U) {
                var Y = e.data(U, h);
                Y && (G(Y), e.removeData(U, h))
            }

            function G(y) {
                y.overlay && (le(y, !0), y.overlay.remove(), y.overlay = null)
            }

            function x(y) {
                y.overlay || (y.overlay = e(p).appendTo(y.el), y.overlay.attr("id", y.overlayContainerId), y.parent = y.menu.parent(), le(y, !0))
            }

            function v(y) {
                var U = {},
                    Y = y.config || {},
                    W = U.animation = y.el.attr("data-animation") || "default";
                U.animOver = /^over/.test(W), U.animDirect = /left$/.test(W) ? -1 : 1, Y.animation !== W && y.open && t.defer(ee, y), U.easing = y.el.attr("data-easing") || "ease", U.easing2 = y.el.attr("data-easing2") || "ease";
                var ve = y.el.attr("data-duration");
                U.duration = ve != null ? Number(ve) : 400, U.docHeight = y.el.attr("data-doc-height"), y.config = U
            }

            function R(y) {
                return function(U, Y) {
                    Y = Y || {};
                    var W = i.width();
                    v(y), Y.open === !0 && pe(y, !0), Y.open === !1 && le(y, !0), y.open && t.defer(function() {
                        W !== i.width() && ee(y)
                    })
                }
            }

            function F(y) {
                return function(U) {
                    switch (U.keyCode) {
                        case xe.SPACE:
                        case xe.ENTER:
                            return q(y)(), U.preventDefault(), U.stopPropagation();
                        case xe.ESCAPE:
                            return le(y), U.preventDefault(), U.stopPropagation();
                        case xe.ARROW_RIGHT:
                        case xe.ARROW_DOWN:
                        case xe.HOME:
                        case xe.END:
                            return y.open ? (U.keyCode === xe.END ? y.selectedIdx = y.links.length - 1 : y.selectedIdx = 0, J(y), U.preventDefault(), U.stopPropagation()) : (U.preventDefault(), U.stopPropagation())
                    }
                }
            }

            function D(y) {
                return function(U) {
                    if (y.open) switch (y.selectedIdx = y.links.index(document.activeElement), U.keyCode) {
                        case xe.HOME:
                        case xe.END:
                            return U.keyCode === xe.END ? y.selectedIdx = y.links.length - 1 : y.selectedIdx = 0, J(y), U.preventDefault(), U.stopPropagation();
                        case xe.ESCAPE:
                            return le(y), y.button.focus(), U.preventDefault(), U.stopPropagation();
                        case xe.ARROW_LEFT:
                        case xe.ARROW_UP:
                            return y.selectedIdx = Math.max(-1, y.selectedIdx - 1), J(y), U.preventDefault(), U.stopPropagation();
                        case xe.ARROW_RIGHT:
                        case xe.ARROW_DOWN:
                            return y.selectedIdx = Math.min(y.links.length - 1, y.selectedIdx + 1), J(y), U.preventDefault(), U.stopPropagation()
                    }
                }
            }

            function J(y) {
                if (y.links[y.selectedIdx]) {
                    var U = y.links[y.selectedIdx];
                    U.focus(), V(U)
                }
            }

            function ee(y) {
                y.open && (le(y, !0), pe(y, !0))
            }

            function q(y) {
                return s(function() {
                    y.open ? le(y) : pe(y)
                })
            }

            function V(y) {
                return function(U) {
                    var Y = e(this),
                        W = Y.attr("href");
                    if (!At.validClick(U.currentTarget)) {
                        U.preventDefault();
                        return
                    }
                    W && W.indexOf("#") === 0 && y.open && le(y)
                }
            }

            function K(y) {
                return y.outside && o.off("click" + h, y.outside),
                    function(U) {
                        var Y = e(U.target);
                        g && Y.closest(".w-editor-bem-EditorOverlay").length || k(y, Y)
                    }
            }
            var k = s(function(y, U) {
                if (y.open) {
                    var Y = U.closest(".w-nav-menu");
                    y.menu.is(Y) || le(y)
                }
            });

            function M(y, U) {
                var Y = e.data(U, h),
                    W = Y.collapsed = Y.button.css("display") !== "none";
                if (Y.open && !W && !l && le(Y, !0), Y.container.length) {
                    var ve = oe(Y);
                    Y.links.each(ve), Y.dropdowns.each(ve)
                }
                Y.open && ct(Y)
            }
            var j = "max-width";

            function oe(y) {
                var U = y.container.css(j);
                return U === "none" && (U = ""),
                    function(Y, W) {
                        W = e(W), W.css(j, ""), W.css(j) === "none" && W.css(j, U)
                    }
            }

            function ne(y, U) {
                U.setAttribute("data-nav-menu-open", "")
            }

            function re(y, U) {
                U.removeAttribute("data-nav-menu-open")
            }

            function pe(y, U) {
                if (y.open) return;
                y.open = !0, y.menu.each(ne), y.links.addClass(C), y.dropdowns.addClass(_), y.dropdownToggle.addClass(w), y.dropdownList.addClass(m), y.button.addClass(b);
                var Y = y.config,
                    W = Y.animation;
                (W === "none" || !n.support.transform || Y.duration <= 0) && (U = !0);
                var ve = ct(y),
                    xt = y.menu.outerHeight(!0),
                    lt = y.menu.outerWidth(!0),
                    f = y.el.height(),
                    E = y.el[0];
                if (M(0, E), O.intro(0, E), At.redraw.up(), l || o.on("click" + h, y.outside), U) {
                    T();
                    return
                }
                var I = "transform " + Y.duration + "ms " + Y.easing;
                if (y.overlay && (N = y.menu.prev(), y.overlay.show().append(y.menu)), Y.animOver) {
                    n(y.menu).add(I).set({
                        x: Y.animDirect * lt,
                        height: ve
                    }).start({
                        x: 0
                    }).then(T), y.overlay && y.overlay.width(lt);
                    return
                }
                var A = f + xt;
                n(y.menu).add(I).set({
                    y: -A
                }).start({
                    y: 0
                }).then(T);

                function T() {
                    y.button.attr("aria-expanded", "true")
                }
            }

            function ct(y) {
                var U = y.config,
                    Y = U.docHeight ? o.height() : a.height();
                return U.animOver ? y.menu.height(Y) : y.el.css("position") !== "fixed" && (Y -= y.el.outerHeight(!0)), y.overlay && y.overlay.height(Y), Y
            }

            function le(y, U) {
                if (!y.open) return;
                y.open = !1, y.button.removeClass(b);
                var Y = y.config;
                if ((Y.animation === "none" || !n.support.transform || Y.duration <= 0) && (U = !0), O.outro(0, y.el[0]), o.off("click" + h, y.outside), U) {
                    n(y.menu).stop(), E();
                    return
                }
                var W = "transform " + Y.duration + "ms " + Y.easing2,
                    ve = y.menu.outerHeight(!0),
                    xt = y.menu.outerWidth(!0),
                    lt = y.el.height();
                if (Y.animOver) {
                    n(y.menu).add(W).start({
                        x: xt * Y.animDirect
                    }).then(E);
                    return
                }
                var f = lt + ve;
                n(y.menu).add(W).start({
                    y: -f
                }).then(E);

                function E() {
                    y.menu.height(""), n(y.menu).set({
                        x: 0,
                        y: 0
                    }), y.menu.each(re), y.links.removeClass(C), y.dropdowns.removeClass(_), y.dropdownToggle.removeClass(w), y.dropdownList.removeClass(m), y.overlay && y.overlay.children().length && (N.length ? y.menu.insertAfter(N) : y.menu.prependTo(y.parent), y.overlay.attr("style", "").hide()), y.el.triggerHandler("w-close"), y.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    var W_ = c((cz, H_) => {
        "use strict";
        var St = Ue(),
            MU = ln();
        St.define("tabs", H_.exports = function(e) {
            var t = {},
                r = e.tram,
                n = e(document),
                i, o, s = St.env,
                a = s.safari,
                u = s(),
                l = "data-w-tab",
                g = "data-w-pane",
                d = ".w-tabs",
                p = "w--current",
                h = "w--tab-active",
                b = MU.triggers,
                _ = !1;
            t.ready = t.design = t.preview = w, t.redraw = function() {
                _ = !0, w(), _ = !1
            }, t.destroy = function() {
                i = n.find(d), i.length && (i.each(O), m())
            };

            function w() {
                o = u && St.env("design"), i = n.find(d), i.length && (i.each(N), St.env("preview") && !_ && i.each(O), m(), C())
            }

            function m() {
                St.redraw.off(t.redraw)
            }

            function C() {
                St.redraw.on(t.redraw)
            }

            function O(G, x) {
                var v = e.data(x, d);
                v && (v.links && v.links.each(b.reset), v.panes && v.panes.each(b.reset))
            }

            function N(G, x) {
                var v = d.substr(1) + "-" + G,
                    R = e(x),
                    F = e.data(x, d);
                if (F || (F = e.data(x, d, {
                        el: R,
                        config: {}
                    })), F.current = null, F.tabIdentifier = v + "-" + l, F.paneIdentifier = v + "-" + g, F.menu = R.children(".w-tab-menu"), F.links = F.menu.children(".w-tab-link"), F.content = R.children(".w-tab-content"), F.panes = F.content.children(".w-tab-pane"), F.el.off(d), F.links.off(d), F.menu.attr("role", "tablist"), F.links.attr("tabindex", "-1"), P(F), !o) {
                    F.links.on("click" + d, H(F)), F.links.on("keydown" + d, X(F));
                    var D = F.links.filter("." + p),
                        J = D.attr(l);
                    J && z(F, {
                        tab: J,
                        immediate: !0
                    })
                }
            }

            function P(G) {
                var x = {};
                x.easing = G.el.attr("data-easing") || "ease";
                var v = parseInt(G.el.attr("data-duration-in"), 10);
                v = x.intro = v === v ? v : 0;
                var R = parseInt(G.el.attr("data-duration-out"), 10);
                R = x.outro = R === R ? R : 0, x.immediate = !v && !R, G.config = x
            }

            function L(G) {
                var x = G.current;
                return Array.prototype.findIndex.call(G.links, v => v.getAttribute(l) === x, null)
            }

            function H(G) {
                return function(x) {
                    x.preventDefault();
                    var v = x.currentTarget.getAttribute(l);
                    v && z(G, {
                        tab: v
                    })
                }
            }

            function X(G) {
                return function(x) {
                    var v = L(G),
                        R = x.key,
                        F = {
                            ArrowLeft: v - 1,
                            ArrowUp: v - 1,
                            ArrowRight: v + 1,
                            ArrowDown: v + 1,
                            End: G.links.length - 1,
                            Home: 0
                        };
                    if (R in F) {
                        x.preventDefault();
                        var D = F[R];
                        D === -1 && (D = G.links.length - 1), D === G.links.length && (D = 0);
                        var J = G.links[D],
                            ee = J.getAttribute(l);
                        ee && z(G, {
                            tab: ee
                        })
                    }
                }
            }

            function z(G, x) {
                x = x || {};
                var v = G.config,
                    R = v.easing,
                    F = x.tab;
                if (F !== G.current) {
                    G.current = F;
                    var D;
                    G.links.each(function(M, j) {
                        var oe = e(j);
                        if (x.immediate || v.immediate) {
                            var ne = G.panes[M];
                            j.id || (j.id = G.tabIdentifier + "-" + M), ne.id || (ne.id = G.paneIdentifier + "-" + M), j.href = "#" + ne.id, j.setAttribute("role", "tab"), j.setAttribute("aria-controls", ne.id), j.setAttribute("aria-selected", "false"), ne.setAttribute("role", "tabpanel"), ne.setAttribute("aria-labelledby", j.id)
                        }
                        j.getAttribute(l) === F ? (D = j, oe.addClass(p).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(b.intro)) : oe.hasClass(p) && oe.removeClass(p).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(b.outro)
                    });
                    var J = [],
                        ee = [];
                    G.panes.each(function(M, j) {
                        var oe = e(j);
                        j.getAttribute(l) === F ? J.push(j) : oe.hasClass(h) && ee.push(j)
                    });
                    var q = e(J),
                        V = e(ee);
                    if (x.immediate || v.immediate) {
                        q.addClass(h).each(b.intro), V.removeClass(h), _ || St.redraw.up();
                        return
                    } else {
                        var K = window.scrollX,
                            k = window.scrollY;
                        D.focus(), window.scrollTo(K, k)
                    }
                    V.length && v.outro ? (V.each(b.outro), r(V).add("opacity " + v.outro + "ms " + R, {
                        fallback: a
                    }).start({
                        opacity: 0
                    }).then(() => Z(v, V, q))) : Z(v, V, q)
                }
            }

            function Z(G, x, v) {
                if (x.removeClass(h).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), v.addClass(h).each(b.intro), St.redraw.up(), !G.intro) return r(v).set({
                    opacity: 1
                });
                r(v).set({
                    opacity: 0
                }).redraw().add("opacity " + G.intro + "ms " + G.easing, {
                    fallback: a
                }).start({
                    opacity: 1
                })
            }
            return t
        })
    });
    Ns();
    Ps();
    js();
    Ks();
    $s();
    Js();
    ln();
    L_();
    P_();
    F_();
    D_();
    V_();
    B_();
    W_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-327": {
            "id": "e-327",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-328"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1684362322511
        },
        "e-329": {
            "id": "e-329",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-330"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723c2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723c2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1684362322511
        },
        "e-335": {
            "id": "e-335",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-336"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723ce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723ce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684362322511
        },
        "e-336": {
            "id": "e-336",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-335"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723ce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723ce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684362322511
        },
        "e-337": {
            "id": "e-337",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-338"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723ce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723ce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1684362322511
        },
        "e-339": {
            "id": "e-339",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-340"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1684362322511
        },
        "e-341": {
            "id": "e-341",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-342"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1684362322511
        },
        "e-343": {
            "id": "e-343",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-344"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684362322511
        },
        "e-355": {
            "id": "e-355",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-356"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be54328a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be54328a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684364995519
        },
        "e-357": {
            "id": "e-357",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-358"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be543270",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be543270",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1684365114922
        },
        "e-359": {
            "id": "e-359",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-360"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be543273",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be543273",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1684365122920
        },
        "e-361": {
            "id": "e-361",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-362"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be543276",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be543276",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1684365132425
        },
        "e-363": {
            "id": "e-363",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-364"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|55c9ac3b-97fd-0264-8863-9f987b0fa604",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|55c9ac3b-97fd-0264-8863-9f987b0fa604",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1684365140907
        },
        "e-365": {
            "id": "e-365",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-366"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|788c60c9-4bd4-cbf4-e7e5-a125802a2312",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|788c60c9-4bd4-cbf4-e7e5-a125802a2312",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 700,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1684365150441
        },
        "e-367": {
            "id": "e-367",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-368"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|43a37d4d-4f1a-252f-d23f-9819f5e8e2ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|43a37d4d-4f1a-252f-d23f-9819f5e8e2ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 800,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1684365160725
        },
        "e-369": {
            "id": "e-369",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-370"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be54326b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be54326b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1684365195376
        },
        "e-371": {
            "id": "e-371",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-372"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|a8272e16-146b-170d-0e3c-e3750c1dc10b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|a8272e16-146b-170d-0e3c-e3750c1dc10b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684365337105
        },
        "e-373": {
            "id": "e-373",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be54328b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be54328b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1684365405531
        },
        "e-374": {
            "id": "e-374",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|a8272e16-146b-170d-0e3c-e3750c1dc10c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|a8272e16-146b-170d-0e3c-e3750c1dc10c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1684365425739
        },
        "e-375": {
            "id": "e-375",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-376"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|689bf62e-73fb-1a37-1cc4-03e6e84917bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|689bf62e-73fb-1a37-1cc4-03e6e84917bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684365524672
        },
        "e-377": {
            "id": "e-377",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|689bf62e-73fb-1a37-1cc4-03e6e84917bc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|689bf62e-73fb-1a37-1cc4-03e6e84917bc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1684365524672
        },
        "e-381": {
            "id": "e-381",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-382"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|d2389e6d-37cf-a193-526e-e84e405d2098",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|d2389e6d-37cf-a193-526e-e84e405d2098",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684365965708
        },
        "e-383": {
            "id": "e-383",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|d2389e6d-37cf-a193-526e-e84e405d2099",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|d2389e6d-37cf-a193-526e-e84e405d2099",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1684365965708
        },
        "e-384": {
            "id": "e-384",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|2e701a76-72f2-6cbb-cb37-7a1d03b96253",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|2e701a76-72f2-6cbb-cb37-7a1d03b96253",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1684366567705
        },
        "e-385": {
            "id": "e-385",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-386"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|a74fbe45-80c6-8b95-59fb-fe18f35f0a61",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|a74fbe45-80c6-8b95-59fb-fe18f35f0a61",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1684366801374
        },
        "e-387": {
            "id": "e-387",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-388"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|fd869808-84f8-b1e9-b29e-5b0ea4860327",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|fd869808-84f8-b1e9-b29e-5b0ea4860327",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1684366809674
        },
        "e-389": {
            "id": "e-389",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-390"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|2819ad58-bbd8-4298-4c4d-45c00b5b13c2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|2819ad58-bbd8-4298-4c4d-45c00b5b13c2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1684366818276
        },
        "e-391": {
            "id": "e-391",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-392"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|fc988f30-cb63-c5af-bfa5-ab44e9180d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|fc988f30-cb63-c5af-bfa5-ab44e9180d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684444276416
        },
        "e-392": {
            "id": "e-392",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-391"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|fc988f30-cb63-c5af-bfa5-ab44e9180d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|fc988f30-cb63-c5af-bfa5-ab44e9180d51",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684444276418
        },
        "e-523": {
            "id": "e-523",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-524"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6481ba5a742a9244c20dec42|69bb765a-d4e5-82f3-242b-cfc2fb1cc461",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6481ba5a742a9244c20dec42|69bb765a-d4e5-82f3-242b-cfc2fb1cc461",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684513203231
        },
        "e-563": {
            "id": "e-563",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-564"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a81|d7fdbca5-f00a-ad0a-b747-6e5c8a5fb4c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a81|d7fdbca5-f00a-ad0a-b747-6e5c8a5fb4c9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1684600975630
        },
        "e-573": {
            "id": "e-573",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-574"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a81|d7fdbca5-f00a-ad0a-b747-6e5c8a5fb4d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a81|d7fdbca5-f00a-ad0a-b747-6e5c8a5fb4d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684600975630
        },
        "e-579": {
            "id": "e-579",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-407"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed858",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed858",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626227992075
        },
        "e-580": {
            "id": "e-580",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-590"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed858",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed858",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626227992075
        },
        "e-581": {
            "id": "e-581",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|39f29836-f6b3-7e0e-f2e5-07ee11c33052",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|39f29836-f6b3-7e0e-f2e5-07ee11c33052",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-23-p",
                "smoothing": 85,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1686236396303
        },
        "e-582": {
            "id": "e-582",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 85,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1686238586327
        },
        "e-583": {
            "id": "e-583",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-584"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button",
                "originalId": "6393d1b08a7e8d5fb4349c3d|b45e44b7-89d4-2d9d-5e42-693294cf4c4b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button",
                "originalId": "6393d1b08a7e8d5fb4349c3d|b45e44b7-89d4-2d9d-5e42-693294cf4c4b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652748875279
        },
        "e-584": {
            "id": "e-584",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-583"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button",
                "originalId": "6393d1b08a7e8d5fb4349c3d|b45e44b7-89d4-2d9d-5e42-693294cf4c4b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button",
                "originalId": "6393d1b08a7e8d5fb4349c3d|b45e44b7-89d4-2d9d-5e42-693294cf4c4b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652748875280
        },
        "e-585": {
            "id": "e-585",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-586"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed85d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed85d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686240416824
        },
        "e-586": {
            "id": "e-586",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-585"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed85d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed85d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686240416825
        },
        "e-587": {
            "id": "e-587",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-588"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed863",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed863",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686240584224
        },
        "e-588": {
            "id": "e-588",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-587"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed863",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed863",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686240584224
        },
        "e-589": {
            "id": "e-589",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-590"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed869",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed869",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686240584549
        },
        "e-590": {
            "id": "e-590",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-589"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed869",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed869",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686240584549
        },
        "e-591": {
            "id": "e-591",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-592"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed86f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed86f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686240584781
        },
        "e-592": {
            "id": "e-592",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-591"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed86f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed86f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686240584781
        },
        "e-593": {
            "id": "e-593",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-594"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|b17f3592-8655-1ac3-4b6d-6c855807bf1e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|b17f3592-8655-1ac3-4b6d-6c855807bf1e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686241932663
        },
        "e-594": {
            "id": "e-594",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-593"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|b17f3592-8655-1ac3-4b6d-6c855807bf1e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|b17f3592-8655-1ac3-4b6d-6c855807bf1e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686241932664
        },
        "e-595": {
            "id": "e-595",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-596"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|2f623296-9279-3d69-2d9b-31197d00599e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|2f623296-9279-3d69-2d9b-31197d00599e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242087900
        },
        "e-596": {
            "id": "e-596",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-595"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|2f623296-9279-3d69-2d9b-31197d00599e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|2f623296-9279-3d69-2d9b-31197d00599e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242087901
        },
        "e-597": {
            "id": "e-597",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-598"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|00dee188-ba09-239f-a574-71dd5896df69",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|00dee188-ba09-239f-a574-71dd5896df69",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242142218
        },
        "e-598": {
            "id": "e-598",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-597"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|00dee188-ba09-239f-a574-71dd5896df69",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|00dee188-ba09-239f-a574-71dd5896df69",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242142218
        },
        "e-599": {
            "id": "e-599",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-600"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|a740c5da-47a1-a5eb-57d8-db2a557e9e3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|a740c5da-47a1-a5eb-57d8-db2a557e9e3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242226268
        },
        "e-600": {
            "id": "e-600",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-599"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|a740c5da-47a1-a5eb-57d8-db2a557e9e3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|a740c5da-47a1-a5eb-57d8-db2a557e9e3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242226269
        },
        "e-603": {
            "id": "e-603",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-604"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|7737dff2-a053-1f54-b7cf-3d7fa01c5c5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|7737dff2-a053-1f54-b7cf-3d7fa01c5c5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242296815
        },
        "e-604": {
            "id": "e-604",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-603"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|7737dff2-a053-1f54-b7cf-3d7fa01c5c5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|7737dff2-a053-1f54-b7cf-3d7fa01c5c5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242296850
        },
        "e-605": {
            "id": "e-605",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-606"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|34a22646-6813-e601-37dc-7f0376c1e1a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|34a22646-6813-e601-37dc-7f0376c1e1a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242327878
        },
        "e-606": {
            "id": "e-606",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-605"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|34a22646-6813-e601-37dc-7f0376c1e1a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|34a22646-6813-e601-37dc-7f0376c1e1a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242327879
        },
        "e-607": {
            "id": "e-607",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-608"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|6303bad5-ef2f-9197-ffbd-17f85dbaf23d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|6303bad5-ef2f-9197-ffbd-17f85dbaf23d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242380788
        },
        "e-608": {
            "id": "e-608",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-607"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|6303bad5-ef2f-9197-ffbd-17f85dbaf23d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|6303bad5-ef2f-9197-ffbd-17f85dbaf23d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242380788
        },
        "e-609": {
            "id": "e-609",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-610"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|6303bad5-ef2f-9197-ffbd-17f85dbaf23d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|6303bad5-ef2f-9197-ffbd-17f85dbaf23d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242380788
        },
        "e-610": {
            "id": "e-610",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-609"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|6303bad5-ef2f-9197-ffbd-17f85dbaf23d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|6303bad5-ef2f-9197-ffbd-17f85dbaf23d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242380788
        },
        "e-611": {
            "id": "e-611",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-612"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|0bb0e49c-fc88-197f-bc43-b93e21ea72b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|0bb0e49c-fc88-197f-bc43-b93e21ea72b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242421048
        },
        "e-612": {
            "id": "e-612",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-611"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|0bb0e49c-fc88-197f-bc43-b93e21ea72b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|0bb0e49c-fc88-197f-bc43-b93e21ea72b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242421048
        },
        "e-613": {
            "id": "e-613",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-614"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|0bb0e49c-fc88-197f-bc43-b93e21ea72b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|0bb0e49c-fc88-197f-bc43-b93e21ea72b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242421048
        },
        "e-614": {
            "id": "e-614",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-613"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|0bb0e49c-fc88-197f-bc43-b93e21ea72b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|0bb0e49c-fc88-197f-bc43-b93e21ea72b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686242421048
        },
        "e-615": {
            "id": "e-615",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-616"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed859",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed859",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686246914818
        },
        "e-617": {
            "id": "e-617",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-618"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|51069b77-c153-c3f2-558a-e786862dcd2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|51069b77-c153-c3f2-558a-e786862dcd2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686261665335
        },
        "e-618": {
            "id": "e-618",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-617"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|51069b77-c153-c3f2-558a-e786862dcd2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|51069b77-c153-c3f2-558a-e786862dcd2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686261665335
        },
        "e-619": {
            "id": "e-619",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-620"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|51069b77-c153-c3f2-558a-e786862dcd2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|51069b77-c153-c3f2-558a-e786862dcd2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686261665335
        },
        "e-620": {
            "id": "e-620",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-619"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|51069b77-c153-c3f2-558a-e786862dcd2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|51069b77-c153-c3f2-558a-e786862dcd2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686261665335
        },
        "e-621": {
            "id": "e-621",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|a64579be-25e0-7285-6c21-327ad5c3d535",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|a64579be-25e0-7285-6c21-327ad5c3d535",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-27-p",
                "smoothing": 85,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1686263163452
        },
        "e-622": {
            "id": "e-622",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-623"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|a64579be-25e0-7285-6c21-327ad5c3d53e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|a64579be-25e0-7285-6c21-327ad5c3d53e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1686263599246
        },
        "e-626": {
            "id": "e-626",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-627"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|a64579be-25e0-7285-6c21-327ad5c3d54b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|a64579be-25e0-7285-6c21-327ad5c3d54b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686263664898
        },
        "e-628": {
            "id": "e-628",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-629"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|2a769b32-9a9b-d802-f58c-704d5378577d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|2a769b32-9a9b-d802-f58c-704d5378577d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686263674423
        },
        "e-630": {
            "id": "e-630",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-631"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|be188065-8233-c491-072d-d92d4189128a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|be188065-8233-c491-072d-d92d4189128a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686263683273
        },
        "e-632": {
            "id": "e-632",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-633"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|51069b77-c153-c3f2-558a-e786862dcd2b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|51069b77-c153-c3f2-558a-e786862dcd2b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686263697131
        },
        "e-634": {
            "id": "e-634",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-635"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|c544bfae-ff5f-7875-f0b6-179517851852",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|c544bfae-ff5f-7875-f0b6-179517851852",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1686322165480
        },
        "e-636": {
            "id": "e-636",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-637"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|2f9318b8-7094-eaab-36ea-16f531e6e0ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|2f9318b8-7094-eaab-36ea-16f531e6e0ff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1686323750775
        },
        "e-638": {
            "id": "e-638",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|b1e89fe3-51d7-eefa-1424-e3fd89c74e10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|b1e89fe3-51d7-eefa-1424-e3fd89c74e10",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-29-p",
                "smoothing": 85,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1686324432023
        },
        "e-639": {
            "id": "e-639",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-640"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|487b7e0e-edf5-06c0-e64a-ebb7303b5fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|487b7e0e-edf5-06c0-e64a-ebb7303b5fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686347773160
        },
        "e-641": {
            "id": "e-641",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-642"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|487b7e0e-edf5-06c0-e64a-ebb7303b5fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|487b7e0e-edf5-06c0-e64a-ebb7303b5fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686349635087
        },
        "e-642": {
            "id": "e-642",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-641"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|487b7e0e-edf5-06c0-e64a-ebb7303b5fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|487b7e0e-edf5-06c0-e64a-ebb7303b5fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686349635088
        },
        "e-643": {
            "id": "e-643",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-644"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|5e885c70-1760-8b29-e3b7-3b951305c2fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|5e885c70-1760-8b29-e3b7-3b951305c2fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686392019409
        },
        "e-645": {
            "id": "e-645",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-646"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|b42c4cc6-93fa-ef5f-bddd-df752169ee4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|b42c4cc6-93fa-ef5f-bddd-df752169ee4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1686393155321
        },
        "e-647": {
            "id": "e-647",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-648"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af1783d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af1783d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686396451136
        },
        "e-648": {
            "id": "e-648",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-647"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af1783d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af1783d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686396451136
        },
        "e-649": {
            "id": "e-649",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-650"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af1783d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af1783d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686396451136
        },
        "e-650": {
            "id": "e-650",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-649"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af1783d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af1783d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686396451136
        },
        "e-651": {
            "id": "e-651",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-652"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af17823",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af17823",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686396584447
        },
        "e-652": {
            "id": "e-652",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-651"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af17823",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af17823",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686396584447
        },
        "e-653": {
            "id": "e-653",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-654"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af17829",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af17829",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686396599667
        },
        "e-654": {
            "id": "e-654",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-653"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af17829",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af17829",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686396599667
        },
        "e-655": {
            "id": "e-655",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-656"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af1782f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af1782f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686396604892
        },
        "e-656": {
            "id": "e-656",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-655"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af1782f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af1782f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686396604892
        },
        "e-657": {
            "id": "e-657",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-658"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af17835",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af17835",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686396609920
        },
        "e-658": {
            "id": "e-658",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-657"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af17835",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af17835",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686396609920
        },
        "e-659": {
            "id": "e-659",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-660"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af17823",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af17823",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1686397584131
        },
        "e-661": {
            "id": "e-661",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-662"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af17829",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af17829",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1686397593888
        },
        "e-663": {
            "id": "e-663",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-664"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af1782f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af1782f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1686397604505
        },
        "e-665": {
            "id": "e-665",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-666"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af17835",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af17835",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1686397614788
        },
        "e-667": {
            "id": "e-667",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-668"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af1783d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af1783d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686397695210
        },
        "e-669": {
            "id": "e-669",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-670"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af17843",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af17843",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686397795826
        },
        "e-671": {
            "id": "e-671",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-672"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "1c454361-19b4-16ff-358f-52bf6af17846",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "1c454361-19b4-16ff-358f-52bf6af17846",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686398038348
        },
        "e-673": {
            "id": "e-673",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-674"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed85b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed85b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686436399165
        },
        "e-675": {
            "id": "e-675",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-676"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed876",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed876",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686436441119
        },
        "e-677": {
            "id": "e-677",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-678"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|39f29836-f6b3-7e0e-f2e5-07ee11c3305b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|39f29836-f6b3-7e0e-f2e5-07ee11c3305b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 700,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686436475383
        },
        "e-679": {
            "id": "e-679",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-680"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|6303bad5-ef2f-9197-ffbd-17f85dbaf23d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|6303bad5-ef2f-9197-ffbd-17f85dbaf23d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 900,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686436495983
        },
        "e-681": {
            "id": "e-681",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-682"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|0bb0e49c-fc88-197f-bc43-b93e21ea72b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|0bb0e49c-fc88-197f-bc43-b93e21ea72b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 950,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686436509480
        },
        "e-683": {
            "id": "e-683",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|39f29836-f6b3-7e0e-f2e5-07ee11c33052",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|39f29836-f6b3-7e0e-f2e5-07ee11c33052",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "smoothing": 85,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1686436581542
        },
        "e-684": {
            "id": "e-684",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a5f|a64579be-25e0-7285-6c21-327ad5c3d535",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a5f|a64579be-25e0-7285-6c21-327ad5c3d535",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 85,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1686437296665
        },
        "e-686": {
            "id": "e-686",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 85,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1686437739334
        },
        "e-715": {
            "id": "e-715",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-716"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|487b7e0e-edf5-06c0-e64a-ebb7303b5fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|487b7e0e-edf5-06c0-e64a-ebb7303b5fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437739334
        },
        "e-717": {
            "id": "e-717",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-718"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|487b7e0e-edf5-06c0-e64a-ebb7303b5fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|487b7e0e-edf5-06c0-e64a-ebb7303b5fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437739334
        },
        "e-718": {
            "id": "e-718",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-717"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|487b7e0e-edf5-06c0-e64a-ebb7303b5fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|487b7e0e-edf5-06c0-e64a-ebb7303b5fa5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437739334
        },
        "e-731": {
            "id": "e-731",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-732"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b891",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b891",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437757973
        },
        "e-732": {
            "id": "e-732",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-731"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b891",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b891",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437757973
        },
        "e-733": {
            "id": "e-733",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-734"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b896",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b896",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437757973
        },
        "e-734": {
            "id": "e-734",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-733"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b896",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b896",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437757973
        },
        "e-735": {
            "id": "e-735",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-736"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b89c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b89c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437757973
        },
        "e-736": {
            "id": "e-736",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-735"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b89c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b89c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437757973
        },
        "e-737": {
            "id": "e-737",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-738"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437757973
        },
        "e-738": {
            "id": "e-738",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-737"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8a2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437757973
        },
        "e-739": {
            "id": "e-739",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-740"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8a8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8a8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437757973
        },
        "e-740": {
            "id": "e-740",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-739"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8a8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8a8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437757973
        },
        "e-741": {
            "id": "e-741",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-742"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b892",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b892",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686437757973
        },
        "e-743": {
            "id": "e-743",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-744"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b894",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b894",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686437757973
        },
        "e-745": {
            "id": "e-745",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-746"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686437757973
        },
        "e-747": {
            "id": "e-747",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-748"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|8496a4ac-90ae-9af8-88f5-15eff0dad512",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|8496a4ac-90ae-9af8-88f5-15eff0dad512",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 550,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686438998297
        },
        "e-749": {
            "id": "e-749",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-750"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|f976b21f-fe26-3112-cdc0-8247cc4cce85",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|f976b21f-fe26-3112-cdc0-8247cc4cce85",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686439387149
        },
        "e-751": {
            "id": "e-751",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-752"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|d3a19afa-39d1-848d-c5fe-384843d00962",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|d3a19afa-39d1-848d-c5fe-384843d00962",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686439765425
        },
        "e-753": {
            "id": "e-753",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-754"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|d094a0cf-ba35-809f-437d-bda5c5cf3a87",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|d094a0cf-ba35-809f-437d-bda5c5cf3a87",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686440590005
        },
        "e-754": {
            "id": "e-754",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-753"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|d094a0cf-ba35-809f-437d-bda5c5cf3a87",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|d094a0cf-ba35-809f-437d-bda5c5cf3a87",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686440590005
        },
        "e-755": {
            "id": "e-755",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-756"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|d094a0cf-ba35-809f-437d-bda5c5cf3a87",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|d094a0cf-ba35-809f-437d-bda5c5cf3a87",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686440590005
        },
        "e-757": {
            "id": "e-757",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-758"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|e8e03da1-ccc8-5e7c-2fd3-3c511afd6c8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|e8e03da1-ccc8-5e7c-2fd3-3c511afd6c8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686440590922
        },
        "e-758": {
            "id": "e-758",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-757"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|e8e03da1-ccc8-5e7c-2fd3-3c511afd6c8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|e8e03da1-ccc8-5e7c-2fd3-3c511afd6c8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686440590922
        },
        "e-759": {
            "id": "e-759",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-760"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|e8e03da1-ccc8-5e7c-2fd3-3c511afd6c8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|e8e03da1-ccc8-5e7c-2fd3-3c511afd6c8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686440590922
        },
        "e-761": {
            "id": "e-761",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-762"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|fe76935a-b426-db1d-91de-bd38ad667fba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|fe76935a-b426-db1d-91de-bd38ad667fba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686440591687
        },
        "e-762": {
            "id": "e-762",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-761"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|fe76935a-b426-db1d-91de-bd38ad667fba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|fe76935a-b426-db1d-91de-bd38ad667fba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686440591687
        },
        "e-763": {
            "id": "e-763",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-764"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a84|fe76935a-b426-db1d-91de-bd38ad667fba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a84|fe76935a-b426-db1d-91de-bd38ad667fba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686440591687
        },
        "e-791": {
            "id": "e-791",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-792"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|c6fb3154-a649-53a6-acdc-ac8d56c9bf25",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|c6fb3154-a649-53a6-acdc-ac8d56c9bf25",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686518313273
        },
        "e-793": {
            "id": "e-793",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-794"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|448e7623-586a-97b7-890a-fd70f49781c2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|448e7623-586a-97b7-890a-fd70f49781c2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686518431965
        },
        "e-795": {
            "id": "e-795",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-796"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|f8310b97-221c-0e9d-7016-41444cada132",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|f8310b97-221c-0e9d-7016-41444cada132",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686518439500
        },
        "e-797": {
            "id": "e-797",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-798"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|1121f9d2-b2c8-aa28-b969-e25547c9ccbb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|1121f9d2-b2c8-aa28-b969-e25547c9ccbb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686518446525
        },
        "e-799": {
            "id": "e-799",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-800"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|419366ec-c9e7-f2d7-4856-af234feb7595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|419366ec-c9e7-f2d7-4856-af234feb7595",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686518453638
        },
        "e-801": {
            "id": "e-801",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-802"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|2e4772c7-7c59-983e-de3a-02a1d3f39e29",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|2e4772c7-7c59-983e-de3a-02a1d3f39e29",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686518459529
        },
        "e-804": {
            "id": "e-804",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-805"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|1f877bd2-aed6-40e9-e78a-bd1d71e0c547",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|1f877bd2-aed6-40e9-e78a-bd1d71e0c547",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686519395523
        },
        "e-806": {
            "id": "e-806",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-807"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|6d87273d-de29-4b56-5119-cbad8b907ba7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|6d87273d-de29-4b56-5119-cbad8b907ba7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686520458259
        },
        "e-808": {
            "id": "e-808",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-809"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|6d87273d-de29-4b56-5119-cbad8b907ba8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|6d87273d-de29-4b56-5119-cbad8b907ba8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686520458259
        },
        "e-809": {
            "id": "e-809",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-808"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|6d87273d-de29-4b56-5119-cbad8b907ba8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|6d87273d-de29-4b56-5119-cbad8b907ba8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686520458259
        },
        "e-810": {
            "id": "e-810",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-811"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|6d87273d-de29-4b56-5119-cbad8b907ba8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|6d87273d-de29-4b56-5119-cbad8b907ba8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686520458259
        },
        "e-811": {
            "id": "e-811",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-810"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|6d87273d-de29-4b56-5119-cbad8b907ba8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|6d87273d-de29-4b56-5119-cbad8b907ba8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686520458259
        },
        "e-812": {
            "id": "e-812",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-813"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|58b910c3-bb27-8701-7f47-6b5d5ed5ca32",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|58b910c3-bb27-8701-7f47-6b5d5ed5ca32",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521780785
        },
        "e-813": {
            "id": "e-813",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-812"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|58b910c3-bb27-8701-7f47-6b5d5ed5ca32",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|58b910c3-bb27-8701-7f47-6b5d5ed5ca32",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521780785
        },
        "e-814": {
            "id": "e-814",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-815"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|58b910c3-bb27-8701-7f47-6b5d5ed5ca32",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|58b910c3-bb27-8701-7f47-6b5d5ed5ca32",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521780785
        },
        "e-815": {
            "id": "e-815",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-814"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|58b910c3-bb27-8701-7f47-6b5d5ed5ca32",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|58b910c3-bb27-8701-7f47-6b5d5ed5ca32",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521780785
        },
        "e-816": {
            "id": "e-816",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-817"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|0db3f925-0fa0-18de-4d1a-d67eb635236d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|0db3f925-0fa0-18de-4d1a-d67eb635236d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521807334
        },
        "e-817": {
            "id": "e-817",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-816"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|0db3f925-0fa0-18de-4d1a-d67eb635236d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|0db3f925-0fa0-18de-4d1a-d67eb635236d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521807334
        },
        "e-818": {
            "id": "e-818",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-819"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|0db3f925-0fa0-18de-4d1a-d67eb635236d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|0db3f925-0fa0-18de-4d1a-d67eb635236d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521807334
        },
        "e-819": {
            "id": "e-819",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-818"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|0db3f925-0fa0-18de-4d1a-d67eb635236d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|0db3f925-0fa0-18de-4d1a-d67eb635236d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521807334
        },
        "e-820": {
            "id": "e-820",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-821"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|eff9fd86-3819-d065-e553-cdc4f7749d30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|eff9fd86-3819-d065-e553-cdc4f7749d30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521818115
        },
        "e-821": {
            "id": "e-821",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-820"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|eff9fd86-3819-d065-e553-cdc4f7749d30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|eff9fd86-3819-d065-e553-cdc4f7749d30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521818115
        },
        "e-822": {
            "id": "e-822",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-823"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|eff9fd86-3819-d065-e553-cdc4f7749d30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|eff9fd86-3819-d065-e553-cdc4f7749d30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521818115
        },
        "e-823": {
            "id": "e-823",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-822"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|eff9fd86-3819-d065-e553-cdc4f7749d30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|eff9fd86-3819-d065-e553-cdc4f7749d30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521818115
        },
        "e-824": {
            "id": "e-824",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-825"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|1eb8c443-163a-5d5d-247f-7539dd885c97",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|1eb8c443-163a-5d5d-247f-7539dd885c97",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521838025
        },
        "e-825": {
            "id": "e-825",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-824"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|1eb8c443-163a-5d5d-247f-7539dd885c97",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|1eb8c443-163a-5d5d-247f-7539dd885c97",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521838025
        },
        "e-826": {
            "id": "e-826",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-827"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|542fa46b-f92f-e351-f79b-8920b0267099",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|542fa46b-f92f-e351-f79b-8920b0267099",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521848684
        },
        "e-827": {
            "id": "e-827",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-826"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|542fa46b-f92f-e351-f79b-8920b0267099",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|542fa46b-f92f-e351-f79b-8920b0267099",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521848684
        },
        "e-828": {
            "id": "e-828",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-829"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|542fa46b-f92f-e351-f79b-8920b0267099",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|542fa46b-f92f-e351-f79b-8920b0267099",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521848684
        },
        "e-829": {
            "id": "e-829",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-828"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|542fa46b-f92f-e351-f79b-8920b0267099",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|542fa46b-f92f-e351-f79b-8920b0267099",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521848684
        },
        "e-830": {
            "id": "e-830",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-831"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|8814525d-3104-e611-3219-51ed60a56f0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|8814525d-3104-e611-3219-51ed60a56f0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521861027
        },
        "e-831": {
            "id": "e-831",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-830"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|8814525d-3104-e611-3219-51ed60a56f0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|8814525d-3104-e611-3219-51ed60a56f0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521861027
        },
        "e-832": {
            "id": "e-832",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-833"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|8814525d-3104-e611-3219-51ed60a56f0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|8814525d-3104-e611-3219-51ed60a56f0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521861027
        },
        "e-833": {
            "id": "e-833",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-832"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|8814525d-3104-e611-3219-51ed60a56f0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|8814525d-3104-e611-3219-51ed60a56f0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521861027
        },
        "e-834": {
            "id": "e-834",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-835"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|0eb4bc10-a5ad-8c0a-53b0-d9db81a16ddf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|0eb4bc10-a5ad-8c0a-53b0-d9db81a16ddf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521870342
        },
        "e-835": {
            "id": "e-835",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-834"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|0eb4bc10-a5ad-8c0a-53b0-d9db81a16ddf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|0eb4bc10-a5ad-8c0a-53b0-d9db81a16ddf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521870342
        },
        "e-836": {
            "id": "e-836",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-837"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|0eb4bc10-a5ad-8c0a-53b0-d9db81a16ddf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|0eb4bc10-a5ad-8c0a-53b0-d9db81a16ddf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521870342
        },
        "e-837": {
            "id": "e-837",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-836"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a9b|0eb4bc10-a5ad-8c0a-53b0-d9db81a16ddf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a9b|0eb4bc10-a5ad-8c0a-53b0-d9db81a16ddf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686521870342
        },
        "e-838": {
            "id": "e-838",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|4205e74b-0761-ee44-6979-4aea38315b5b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|4205e74b-0761-ee44-6979-4aea38315b5b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-45-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1653889365075
        },
        "e-839": {
            "id": "e-839",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|4205e74b-0761-ee44-6979-4aea38315b5b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|4205e74b-0761-ee44-6979-4aea38315b5b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-46-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1653897146521
        },
        "e-840": {
            "id": "e-840",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-841"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|77421bb0-f855-e77f-b9dd-59dc4e075cb6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|77421bb0-f855-e77f-b9dd-59dc4e075cb6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686564006842
        },
        "e-842": {
            "id": "e-842",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-843"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|77421bb0-f855-e77f-b9dd-59dc4e075cb8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|77421bb0-f855-e77f-b9dd-59dc4e075cb8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 550,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686564006842
        },
        "e-848": {
            "id": "e-848",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 85,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1686564949205
        },
        "e-849": {
            "id": "e-849",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-850"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|0f35a1f5-490e-726a-7997-2ac6d55cc235",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|0f35a1f5-490e-726a-7997-2ac6d55cc235",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 550,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686601257969
        },
        "e-851": {
            "id": "e-851",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-852"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|0f35a1f5-490e-726a-7997-2ac6d55cc237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|0f35a1f5-490e-726a-7997-2ac6d55cc237",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686601257969
        },
        "e-853": {
            "id": "e-853",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-854"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|0f35a1f5-490e-726a-7997-2ac6d55cc23b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|0f35a1f5-490e-726a-7997-2ac6d55cc23b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 2000,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686601257969
        },
        "e-855": {
            "id": "e-855",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-856"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|ce75df4f-4122-5484-caee-87809eb39094",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|ce75df4f-4122-5484-caee-87809eb39094",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686602452529
        },
        "e-856": {
            "id": "e-856",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-855"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|ce75df4f-4122-5484-caee-87809eb39094",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|ce75df4f-4122-5484-caee-87809eb39094",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686602452529
        },
        "e-857": {
            "id": "e-857",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-858"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|e9f1fc33-9982-b5f2-e94a-3dbabf8fd0e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|e9f1fc33-9982-b5f2-e94a-3dbabf8fd0e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686602684529
        },
        "e-858": {
            "id": "e-858",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-857"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|e9f1fc33-9982-b5f2-e94a-3dbabf8fd0e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|e9f1fc33-9982-b5f2-e94a-3dbabf8fd0e3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686602684529
        },
        "e-859": {
            "id": "e-859",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-860"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|ddbb5c58-88b8-b279-c7ec-e670d6a8291e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|ddbb5c58-88b8-b279-c7ec-e670d6a8291e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686602962715
        },
        "e-861": {
            "id": "e-861",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-862"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|ddbb5c58-88b8-b279-c7ec-e670d6a82923",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|ddbb5c58-88b8-b279-c7ec-e670d6a82923",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686603082847
        },
        "e-863": {
            "id": "e-863",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-864"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|ddbb5c58-88b8-b279-c7ec-e670d6a8292e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|ddbb5c58-88b8-b279-c7ec-e670d6a8292e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686603093022
        },
        "e-865": {
            "id": "e-865",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-866"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|ddbb5c58-88b8-b279-c7ec-e670d6a82939",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|ddbb5c58-88b8-b279-c7ec-e670d6a82939",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686603103024
        },
        "e-867": {
            "id": "e-867",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-868"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|6854d39b-ac6c-88e8-3c13-0d4b2f784ffb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|6854d39b-ac6c-88e8-3c13-0d4b2f784ffb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1700,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686603111870
        },
        "e-869": {
            "id": "e-869",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-870"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a72|0f35a1f5-490e-726a-7997-2ac6d55cc23b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a72|0f35a1f5-490e-726a-7997-2ac6d55cc23b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686604951630
        },
        "e-871": {
            "id": "e-871",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 85,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1686608227927
        },
        "e-876": {
            "id": "e-876",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-877"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|8496a4ac-90ae-9af8-88f5-15eff0dad512",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|8496a4ac-90ae-9af8-88f5-15eff0dad512",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 550,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686608227927
        },
        "e-878": {
            "id": "e-878",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-879"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|f976b21f-fe26-3112-cdc0-8247cc4cce85",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|f976b21f-fe26-3112-cdc0-8247cc4cce85",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686608227927
        },
        "e-901": {
            "id": "e-901",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-902"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|90a56362-5be5-588e-3313-55f899c514e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|90a56362-5be5-588e-3313-55f899c514e2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686608485668
        },
        "e-904": {
            "id": "e-904",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-905"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a76|32fb2dd8-0738-3877-3f73-16833f814fcb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a76|32fb2dd8-0738-3877-3f73-16833f814fcb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686609432679
        },
        "e-906": {
            "id": "e-906",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-907"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|dd14429a-fbdc-c9fd-44e9-f0bcf77d51b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|dd14429a-fbdc-c9fd-44e9-f0bcf77d51b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1686610843188
        },
        "e-908": {
            "id": "e-908",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-909"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|b262735c-0dbe-8028-e207-710c53b31f83",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|b262735c-0dbe-8028-e207-710c53b31f83",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1686611248463
        },
        "e-910": {
            "id": "e-910",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-911"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686611303875
        },
        "e-912": {
            "id": "e-912",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-913"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 550,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686611320624
        },
        "e-914": {
            "id": "e-914",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-915"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686611336561
        },
        "e-916": {
            "id": "e-916",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-917"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 650,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686611348115
        },
        "e-918": {
            "id": "e-918",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-919"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 700,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686611361238
        },
        "e-920": {
            "id": "e-920",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-921"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 800,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686611371610
        },
        "e-922": {
            "id": "e-922",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-923"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686611393522
        },
        "e-924": {
            "id": "e-924",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-925"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686611404631
        },
        "e-926": {
            "id": "e-926",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-927"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686611414646
        },
        "e-928": {
            "id": "e-928",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-929"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686611423785
        },
        "e-930": {
            "id": "e-930",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-931"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686611434662
        },
        "e-932": {
            "id": "e-932",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GROW_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "growIn",
                    "autoStopEventId": "e-933"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|307393a2-9dc6-7a6f-a74e-6d238b63a2c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 350,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1686611448389
        },
        "e-934": {
            "id": "e-934",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|530870ff-3a56-e44c-e0d8-c5b21e136e79",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|530870ff-3a56-e44c-e0d8-c5b21e136e79",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-47-p",
                "smoothing": 85,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1681735738804
        },
        "e-935": {
            "id": "e-935",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-936"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a69|60d3fa3a5a19c1169cd58c4100000000000e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a69|60d3fa3a5a19c1169cd58c4100000000000e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686673025281
        },
        "e-937": {
            "id": "e-937",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-938"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a69|60d3fa3a5a19c1169cd58c41000000000012",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a69|60d3fa3a5a19c1169cd58c41000000000012",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686673038757
        },
        "e-939": {
            "id": "e-939",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-940"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a69|60d3fa3a5a19c1169cd58c41000000000013",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a69|60d3fa3a5a19c1169cd58c41000000000013",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686673048263
        },
        "e-941": {
            "id": "e-941",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-942"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6a|60d3fe8d16a07670a7e520bf00000000000d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6a|60d3fe8d16a07670a7e520bf00000000000d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686673064166
        },
        "e-943": {
            "id": "e-943",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-944"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6a|a65a1401-941b-812d-6837-8fc27c9f4db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6a|a65a1401-941b-812d-6837-8fc27c9f4db5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686673072703
        },
        "e-945": {
            "id": "e-945",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-946"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6a|f7e51fb9-2444-74ed-f2a4-3e5338dc3f4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6a|f7e51fb9-2444-74ed-f2a4-3e5338dc3f4d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686673080490
        },
        "e-949": {
            "id": "e-949",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-950"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|664e34ad-d6a7-f6f1-6de4-eda53590dbec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|664e34ad-d6a7-f6f1-6de4-eda53590dbec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689644821
        },
        "e-950": {
            "id": "e-950",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-949"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|664e34ad-d6a7-f6f1-6de4-eda53590dbec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|664e34ad-d6a7-f6f1-6de4-eda53590dbec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689644821
        },
        "e-951": {
            "id": "e-951",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-952"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|664e34ad-d6a7-f6f1-6de4-eda53590dbec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|664e34ad-d6a7-f6f1-6de4-eda53590dbec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689644821
        },
        "e-952": {
            "id": "e-952",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-951"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|664e34ad-d6a7-f6f1-6de4-eda53590dbec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|664e34ad-d6a7-f6f1-6de4-eda53590dbec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689644821
        },
        "e-957": {
            "id": "e-957",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-958"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|c295077d-2ba3-2474-7008-85c3ac05db00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|c295077d-2ba3-2474-7008-85c3ac05db00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689724021
        },
        "e-958": {
            "id": "e-958",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-957"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|c295077d-2ba3-2474-7008-85c3ac05db00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|c295077d-2ba3-2474-7008-85c3ac05db00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689724021
        },
        "e-959": {
            "id": "e-959",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-960"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|c295077d-2ba3-2474-7008-85c3ac05db00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|c295077d-2ba3-2474-7008-85c3ac05db00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689724021
        },
        "e-960": {
            "id": "e-960",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-959"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|c295077d-2ba3-2474-7008-85c3ac05db00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|c295077d-2ba3-2474-7008-85c3ac05db00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689724021
        },
        "e-963": {
            "id": "e-963",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-964"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|015382d9-58ea-8825-0edb-2d3a195b0334",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|015382d9-58ea-8825-0edb-2d3a195b0334",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689724858
        },
        "e-964": {
            "id": "e-964",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-963"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|015382d9-58ea-8825-0edb-2d3a195b0334",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|015382d9-58ea-8825-0edb-2d3a195b0334",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689724858
        },
        "e-965": {
            "id": "e-965",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-966"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|015382d9-58ea-8825-0edb-2d3a195b0334",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|015382d9-58ea-8825-0edb-2d3a195b0334",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689724858
        },
        "e-966": {
            "id": "e-966",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-965"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|015382d9-58ea-8825-0edb-2d3a195b0334",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|015382d9-58ea-8825-0edb-2d3a195b0334",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689724858
        },
        "e-969": {
            "id": "e-969",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-970"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|ef58bb1d-919c-9648-578e-f6dfff1c9640",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|ef58bb1d-919c-9648-578e-f6dfff1c9640",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689725784
        },
        "e-970": {
            "id": "e-970",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-969"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|ef58bb1d-919c-9648-578e-f6dfff1c9640",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|ef58bb1d-919c-9648-578e-f6dfff1c9640",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689725784
        },
        "e-971": {
            "id": "e-971",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-972"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|ef58bb1d-919c-9648-578e-f6dfff1c9640",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|ef58bb1d-919c-9648-578e-f6dfff1c9640",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689725784
        },
        "e-972": {
            "id": "e-972",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-971"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|ef58bb1d-919c-9648-578e-f6dfff1c9640",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|ef58bb1d-919c-9648-578e-f6dfff1c9640",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689725784
        },
        "e-975": {
            "id": "e-975",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-976"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|11507527-9e98-622d-c524-4c6d94c1df3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|11507527-9e98-622d-c524-4c6d94c1df3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689726706
        },
        "e-976": {
            "id": "e-976",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-975"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|11507527-9e98-622d-c524-4c6d94c1df3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|11507527-9e98-622d-c524-4c6d94c1df3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689726706
        },
        "e-977": {
            "id": "e-977",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-978"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|11507527-9e98-622d-c524-4c6d94c1df3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|11507527-9e98-622d-c524-4c6d94c1df3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689726706
        },
        "e-978": {
            "id": "e-978",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-977"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|11507527-9e98-622d-c524-4c6d94c1df3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|11507527-9e98-622d-c524-4c6d94c1df3a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686689726706
        },
        "e-979": {
            "id": "e-979",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-980"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|ae251f58-813a-4bcf-69b9-a9c7c378a117",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|ae251f58-813a-4bcf-69b9-a9c7c378a117",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1686690207428
        },
        "e-981": {
            "id": "e-981",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-982"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|0b63d1ce-0dd7-a793-9e88-f5d086901992",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|0b63d1ce-0dd7-a793-9e88-f5d086901992",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686690372346
        },
        "e-983": {
            "id": "e-983",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-984"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|0b63d1ce-0dd7-a793-9e88-f5d086901998",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|0b63d1ce-0dd7-a793-9e88-f5d086901998",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686690380926
        },
        "e-985": {
            "id": "e-985",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-986"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|0b63d1ce-0dd7-a793-9e88-f5d08690199e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|0b63d1ce-0dd7-a793-9e88-f5d08690199e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686690393161
        },
        "e-987": {
            "id": "e-987",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-988"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|0b63d1ce-0dd7-a793-9e88-f5d0869019a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|0b63d1ce-0dd7-a793-9e88-f5d0869019a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686690401535
        },
        "e-989": {
            "id": "e-989",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-990"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|0b63d1ce-0dd7-a793-9e88-f5d0869019aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|0b63d1ce-0dd7-a793-9e88-f5d0869019aa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 700,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686690410529
        },
        "e-991": {
            "id": "e-991",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6494bc4fa950b338f1f69a6b|5e9d9784-e1d3-2756-2d00-85b257cf42f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a6b|5e9d9784-e1d3-2756-2d00-85b257cf42f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 85,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1686691286639
        },
        "e-992": {
            "id": "e-992",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-993"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a81|1357fc7a-0f5b-e3bc-ee6c-3bd525a3e4d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a81|1357fc7a-0f5b-e3bc-ee6c-3bd525a3e4d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1686696474353
        },
        "e-996": {
            "id": "e-996",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-997"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a71|bc425f2f-3356-1c02-e38b-bc55c5be1e2d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a71|bc425f2f-3356-1c02-e38b-bc55c5be1e2d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1684609272941
        },
        "e-998": {
            "id": "e-998",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-999"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6494bc4fa950b338f1f69a71|f0a1a900-6042-e488-5627-14fb4d3885bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6494bc4fa950b338f1f69a71|f0a1a900-6042-e488-5627-14fb4d3885bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1686698079437
        }
    },
    "actionLists": {
        "a-9": {
            "id": "a-9",
            "title": "Project card hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "heightValue": 25,
                        "widthUnit": "PX",
                        "heightUnit": "rem",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 400,
                        "target": {},
                        "xValue": 1.15,
                        "yValue": 1.15,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {},
                        "zValue": -90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {},
                        "xValue": 3,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {},
                        "heightValue": 26,
                        "widthUnit": "PX",
                        "heightUnit": "rem",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1684081937822
        },
        "a-10": {
            "id": "a-10",
            "title": "Project card hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {},
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 400,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 400,
                        "target": {},
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 500,
                        "target": {},
                        "heightValue": 25,
                        "widthUnit": "PX",
                        "heightUnit": "rem",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1684081937822
        },
        "a-12": {
            "id": "a-12",
            "title": "Quick image reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-reveal-overlay",
                            "selectorGuids": ["8fcbec6e-df6d-616c-1096-f41232c561a6"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "inOutQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-reveal-overlay",
                            "selectorGuids": ["8fcbec6e-df6d-616c-1096-f41232c561a6"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1684001551758
        },
        "a-8": {
            "id": "a-8",
            "title": "Parallax image",
            "continuousParameterGroups": [{
                "id": "a-8-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-8-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6494bc4fa950b338f1f69a76|32bd3cca-51b2-c39f-8dda-c2e81090c5b3"
                            },
                            "xValue": 1.2,
                            "yValue": 1.2,
                            "locked": true
                        }
                    }, {
                        "id": "a-8-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6494bc4fa950b338f1f69a76|32bd3cca-51b2-c39f-8dda-c2e81090c5b3"
                            },
                            "yValue": 9,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-8-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6494bc4fa950b338f1f69a76|32bd3cca-51b2-c39f-8dda-c2e81090c5b3"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-8-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6494bc4fa950b338f1f69a76|32bd3cca-51b2-c39f-8dda-c2e81090c5b3"
                            },
                            "xValue": 1.3,
                            "yValue": 1.3,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1684017216465
        },
        "a-13": {
            "id": "a-13",
            "title": "Button arrow hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["ec7a8456-e0e5-096c-9f66-872315212505"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["ec7a8456-e0e5-096c-9f66-872315212505"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1684444286667
        },
        "a-14": {
            "id": "a-14",
            "title": "Button arrow hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["ec7a8456-e0e5-096c-9f66-872315212505"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1684444286667
        },
        "a-7": {
            "id": "a-7",
            "title": "Image reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-reveal-overlay",
                            "selectorGuids": ["8fcbec6e-df6d-616c-1096-f41232c561a6"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 1000,
                        "easing": "inOutQuart",
                        "duration": 1300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-reveal-overlay",
                            "selectorGuids": ["8fcbec6e-df6d-616c-1096-f41232c561a6"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1684001551758
        },
        "a-17": {
            "id": "a-17",
            "title": "Navbar 1 menu [Close]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-middle",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271030"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-17-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-bottom",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271032"]
                        },
                        "yValue": -8,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-top",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f27102f"]
                        },
                        "yValue": 8,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-top",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f27102f"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-17-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-bottom",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271032"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168378054
        },
        "a-18": {
            "id": "a-18",
            "title": "Navbar 1 menu [Open]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-bottom",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271032"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-top",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f27102f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-bottom",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271032"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-18-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-top",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f27102f"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-18-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "inOutQuint",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-middle",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271030"]
                        },
                        "widthValue": 24,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168766736
        },
        "a-23": {
            "id": "a-23",
            "title": "Navbar scroll animation",
            "continuousParameterGroups": [{
                "id": "a-23-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-23-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navbar-logo",
                                "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271024"]
                            },
                            "widthValue": 60,
                            "widthUnit": "vw",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }, {
                        "id": "a-23-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".navbar",
                                "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271021"]
                            },
                            "globalSwatchId": "",
                            "rValue": 29,
                            "bValue": 29,
                            "gValue": 29,
                            "aValue": 0
                        }
                    }]
                }, {
                    "keyframe": 80,
                    "actionItems": [{
                        "id": "a-23-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navbar-logo",
                                "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271024"]
                            },
                            "widthValue": 6,
                            "widthUnit": "rem",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }, {
                        "id": "a-23-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".navbar",
                                "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271021"]
                            },
                            "globalSwatchId": "dccb7db6",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1686235995496
        },
        "a-24": {
            "id": "a-24",
            "title": "Button text hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text-item",
                            "selectorGuids": ["04d937fd-d783-46a7-8b6e-1fb18db4d627"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1652370520578
        },
        "a-25": {
            "id": "a-25",
            "title": "Button text hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text-item",
                            "selectorGuids": ["04d937fd-d783-46a7-8b6e-1fb18db4d627"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1652370520578
        },
        "a-34": {
            "id": "a-34",
            "title": "Navbar button text hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-text-item",
                            "selectorGuids": ["5924d06a-69b3-1b49-c5c7-74637ac4c4e6"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1652370520578
        },
        "a-35": {
            "id": "a-35",
            "title": "Navbar button text hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-text-item",
                            "selectorGuids": ["5924d06a-69b3-1b49-c5c7-74637ac4c4e6"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1652370520578
        },
        "a-26": {
            "id": "a-26",
            "title": "Hero header reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-logo",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271024"]
                        },
                        "yValue": 150,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed85d"
                        },
                        "yValue": 125,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed863"
                        },
                        "yValue": 125,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed869"
                        },
                        "yValue": 125,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed86f"
                        },
                        "yValue": 125,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6494bc4fa950b338f1f69a5f|39f29836-f6b3-7e0e-f2e5-07ee11c3305b"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6494bc4fa950b338f1f69a5f|6303bad5-ef2f-9197-ffbd-17f85dbaf23d"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6494bc4fa950b338f1f69a5f|0bb0e49c-fc88-197f-bc43-b93e21ea72b8"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6494bc4fa950b338f1f69a5f|45008344-565c-12d2-fb05-e7685dce1fa4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-21",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-logo",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271024"]
                        },
                        "xValue": null,
                        "yValue": 5,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "6494bc4fa950b338f1f69a5f|45008344-565c-12d2-fb05-e7685dce1fa4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 750,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-logo",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271024"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-22",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 750,
                        "easing": "",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navbar-logo",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271024"]
                        },
                        "yValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-26-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "outCubic",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed85d"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1050,
                        "easing": "outCubic",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed863"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1100,
                        "easing": "outCubic",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed869"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1150,
                        "easing": "outCubic",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "3c60efb1-1aa8-22d6-7cfe-1e44121ed86f"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1500,
                        "easing": "outCubic",
                        "duration": 350,
                        "target": {
                            "id": "6494bc4fa950b338f1f69a5f|39f29836-f6b3-7e0e-f2e5-07ee11c3305b"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1750,
                        "easing": "inOutCubic",
                        "duration": 350,
                        "target": {
                            "id": "6494bc4fa950b338f1f69a5f|6303bad5-ef2f-9197-ffbd-17f85dbaf23d"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-26-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1800,
                        "easing": "inOutCubic",
                        "duration": 350,
                        "target": {
                            "id": "6494bc4fa950b338f1f69a5f|0bb0e49c-fc88-197f-bc43-b93e21ea72b8"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686246727729
        },
        "a-27": {
            "id": "a-27",
            "title": "Section tighten on scroll",
            "continuousParameterGroups": [{
                "id": "a-27-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 7,
                    "actionItems": [{
                        "id": "a-27-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6494bc4fa950b338f1f69a5f|a64579be-25e0-7285-6c21-327ad5c3d535"
                            },
                            "widthValue": 100,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-27-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6494bc4fa950b338f1f69a5f|a64579be-25e0-7285-6c21-327ad5c3d535"
                            },
                            "widthValue": 97,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1686263169959
        },
        "a-29": {
            "id": "a-29",
            "title": "Section background colour in on scroll",
            "continuousParameterGroups": [{
                "id": "a-29-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-29-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6494bc4fa950b338f1f69a5f|b1e89fe3-51d7-eefa-1424-e3fd89c74e10"
                            },
                            "globalSwatchId": "",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 0
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-29-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6494bc4fa950b338f1f69a5f|b1e89fe3-51d7-eefa-1424-e3fd89c74e10"
                            },
                            "globalSwatchId": "dccb7db6",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1686324439523
        },
        "a-30": {
            "id": "a-30",
            "title": "Work image reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["d6c75ba5-88e5-3efe-5169-bb1fe9404266"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-30-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-image-overlay",
                            "selectorGuids": ["d3db52cc-5557-cf75-694c-cc40ae38a003"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 300,
                        "easing": "inCubic",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["d6c75ba5-88e5-3efe-5169-bb1fe9404266"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }, {
                    "id": "a-30-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 800,
                        "easing": "",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-image-overlay",
                            "selectorGuids": ["d3db52cc-5557-cf75-694c-cc40ae38a003"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686325087616
        },
        "a-31": {
            "id": "a-31",
            "title": "Work hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-thumbnail-image",
                            "selectorGuids": ["00c6aa8b-ee07-0db7-9732-9111d504a6c9"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "772d",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-31-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-thumbnail-image",
                            "selectorGuids": ["00c6aa8b-ee07-0db7-9732-9111d504a6c9"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-thumbnail-image",
                            "selectorGuids": ["00c6aa8b-ee07-0db7-9732-9111d504a6c9"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-31-n-5",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-thumbnail-image",
                            "selectorGuids": ["00c6aa8b-ee07-0db7-9732-9111d504a6c9"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "4fc7",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686326042536
        },
        "a-32": {
            "id": "a-32",
            "title": "Work hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n-2",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-thumbnail-image",
                            "selectorGuids": ["00c6aa8b-ee07-0db7-9732-9111d504a6c9"]
                        },
                        "filters": [{
                            "type": "grayscale",
                            "filterId": "093f",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-32-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-thumbnail-image",
                            "selectorGuids": ["00c6aa8b-ee07-0db7-9732-9111d504a6c9"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1686326042536
        },
        "a-33": {
            "id": "a-33",
            "title": "Footer logo reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-logo",
                            "selectorGuids": ["bd698a7c-62dc-a34b-473f-cd5e3f79df72"]
                        },
                        "yValue": 135,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-2",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-logo",
                            "selectorGuids": ["bd698a7c-62dc-a34b-473f-cd5e3f79df72"]
                        },
                        "yValue": 8,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-4",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 300,
                        "easing": "outCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-logo",
                            "selectorGuids": ["bd698a7c-62dc-a34b-473f-cd5e3f79df72"]
                        },
                        "yValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-33-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "outCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-logo",
                            "selectorGuids": ["bd698a7c-62dc-a34b-473f-cd5e3f79df72"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686397800372
        },
        "a-36": {
            "id": "a-36",
            "title": "Navbar scroll animation tablet/mobile",
            "continuousParameterGroups": [{
                "id": "a-36-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-36-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navbar-logo",
                                "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271024"]
                            },
                            "widthValue": 60,
                            "widthUnit": "rem",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }, {
                        "id": "a-36-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".navbar",
                                "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271021"]
                            },
                            "globalSwatchId": "",
                            "rValue": 29,
                            "bValue": 29,
                            "gValue": 29,
                            "aValue": 0
                        }
                    }]
                }, {
                    "keyframe": 80,
                    "actionItems": [{
                        "id": "a-36-n-3",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navbar-logo",
                                "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271024"]
                            },
                            "widthValue": 8,
                            "widthUnit": "rem",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }, {
                        "id": "a-36-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".navbar",
                                "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271021"]
                            },
                            "globalSwatchId": "dccb7db6",
                            "rValue": 0,
                            "bValue": 0,
                            "gValue": 0,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1686235995496
        },
        "a-37": {
            "id": "a-37",
            "title": "Section tighten on scroll mobile",
            "continuousParameterGroups": [{
                "id": "a-37-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 7,
                    "actionItems": [{
                        "id": "a-37-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6494bc4fa950b338f1f69a5f|a64579be-25e0-7285-6c21-327ad5c3d535"
                            },
                            "widthValue": 100,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-37-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "6494bc4fa950b338f1f69a5f|a64579be-25e0-7285-6c21-327ad5c3d535"
                            },
                            "widthValue": 94,
                            "widthUnit": "%",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1686263169959
        },
        "a-38": {
            "id": "a-38",
            "title": "Navbar 1 menu [Close] 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-middle",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271030"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-38-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-bottom",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271032"]
                        },
                        "yValue": -8,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-top",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f27102f"]
                        },
                        "yValue": 8,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-top",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f27102f"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-38-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-bottom",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271032"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168378054
        },
        "a-39": {
            "id": "a-39",
            "title": "Navbar 1 menu [Open] 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-bottom",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271032"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-39-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-top",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f27102f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-39-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-bottom",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271032"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-39-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-top",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f27102f"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-39-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "inOutQuint",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-line-middle",
                            "selectorGuids": ["b23ca57b-914c-2356-983a-445d8f271030"]
                        },
                        "widthValue": 24,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168766736
        },
        "a-42": {
            "id": "a-42",
            "title": "Small logo navbar reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "34c6d34f-3039-38d1-1c85-6d40fad6b894"
                        },
                        "yValue": 210,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "34c6d34f-3039-38d1-1c85-6d40fad6b896"
                        },
                        "yValue": 125,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "34c6d34f-3039-38d1-1c85-6d40fad6b89c"
                        },
                        "yValue": 125,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8a2"
                        },
                        "yValue": 125,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8a8"
                        },
                        "yValue": 125,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-10",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "34c6d34f-3039-38d1-1c85-6d40fad6b894"
                        },
                        "xValue": null,
                        "yValue": 5,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-42-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 250,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "34c6d34f-3039-38d1-1c85-6d40fad6b894"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-13",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 250,
                        "easing": "",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "34c6d34f-3039-38d1-1c85-6d40fad6b894"
                        },
                        "yValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-42-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outCubic",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "34c6d34f-3039-38d1-1c85-6d40fad6b896"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 550,
                        "easing": "outCubic",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "34c6d34f-3039-38d1-1c85-6d40fad6b89c"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "outCubic",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8a2"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 650,
                        "easing": "outCubic",
                        "duration": 350,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "34c6d34f-3039-38d1-1c85-6d40fad6b8a8"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686246727729
        },
        "a-43": {
            "id": "a-43",
            "title": "Heading title reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-h1-custom",
                            "selectorGuids": ["29f063a2-7cc3-a964-500a-ff2920c5c719"]
                        },
                        "yValue": 125,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-43-n-2",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-h1-custom",
                            "selectorGuids": ["29f063a2-7cc3-a964-500a-ff2920c5c719"]
                        },
                        "yValue": 6,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-43-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "outCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-h1-custom",
                            "selectorGuids": ["29f063a2-7cc3-a964-500a-ff2920c5c719"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-43-n-4",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 900,
                        "easing": "outCubic",
                        "duration": 550,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-h1-custom",
                            "selectorGuids": ["29f063a2-7cc3-a964-500a-ff2920c5c719"]
                        },
                        "yValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686439391574
        },
        "a-44": {
            "id": "a-44",
            "title": "Portfolio image reveal",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["d6c75ba5-88e5-3efe-5169-bb1fe9404266"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-44-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-cover",
                            "selectorGuids": ["d6c75ba5-88e5-3efe-5169-bb1fe9404266"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "%",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686518316400
        },
        "a-45": {
            "id": "a-45",
            "title": "Header [Scroll] [Desktop]",
            "continuousParameterGroups": [{
                "id": "a-45-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-45-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".portfolio-header-content",
                                "selectorGuids": ["382125d5-62c4-3cee-0bc5-a5a614123be9"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-45-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".portfolio-header-content",
                                "selectorGuids": ["382125d5-62c4-3cee-0bc5-a5a614123be9"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 16,
                    "actionItems": [{
                        "id": "a-45-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".portfolio-header-content",
                                "selectorGuids": ["382125d5-62c4-3cee-0bc5-a5a614123be9"]
                            },
                            "xValue": 0.95,
                            "yValue": 0.95,
                            "locked": true
                        }
                    }, {
                        "id": "a-45-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".portfolio-header-content",
                                "selectorGuids": ["382125d5-62c4-3cee-0bc5-a5a614123be9"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1653889375681
        },
        "a-46": {
            "id": "a-46",
            "title": "Header [Scroll] [Tablet]",
            "continuousParameterGroups": [{
                "id": "a-46-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-46-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".portfolio-header-content",
                                "selectorGuids": ["382125d5-62c4-3cee-0bc5-a5a614123be9"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-46-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".portfolio-header-content",
                                "selectorGuids": ["382125d5-62c4-3cee-0bc5-a5a614123be9"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 25,
                    "actionItems": [{
                        "id": "a-46-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".portfolio-header-content",
                                "selectorGuids": ["382125d5-62c4-3cee-0bc5-a5a614123be9"]
                            },
                            "xValue": 0.95,
                            "yValue": 0.95,
                            "locked": true
                        }
                    }, {
                        "id": "a-46-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".portfolio-header-content",
                                "selectorGuids": ["382125d5-62c4-3cee-0bc5-a5a614123be9"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1653889375681
        },
        "a-40": {
            "id": "a-40",
            "title": "Contact button text hover in",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".contact-text-item",
                            "selectorGuids": ["c0917e1c-4e09-fb00-88d5-341f3857e830"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1652370520578
        },
        "a-41": {
            "id": "a-41",
            "title": "Contact button text hover out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".contact-text-item",
                            "selectorGuids": ["c0917e1c-4e09-fb00-88d5-341f3857e830"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1652370520578
        },
        "a-47": {
            "id": "a-47",
            "title": "Gallery showcase horizontal scroll",
            "continuousParameterGroups": [{
                "id": "a-47-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-47-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".showcase-image-list.image-list-top",
                                "selectorGuids": ["d1aaa617-f71f-cd96-4c73-1d4671057607", "d1aaa617-f71f-cd96-4c73-1d467105760a"]
                            },
                            "xValue": -2,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-47-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".showcase-image-list.image-list-bottom",
                                "selectorGuids": ["d1aaa617-f71f-cd96-4c73-1d4671057607", "d1aaa617-f71f-cd96-4c73-1d467105760b"]
                            },
                            "xValue": 2,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-47-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".showcase-image-list.image-list-top",
                                "selectorGuids": ["d1aaa617-f71f-cd96-4c73-1d4671057607", "d1aaa617-f71f-cd96-4c73-1d467105760a"]
                            },
                            "xValue": 5,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-47-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".showcase-image-list.image-list-bottom",
                                "selectorGuids": ["d1aaa617-f71f-cd96-4c73-1d4671057607", "d1aaa617-f71f-cd96-4c73-1d467105760b"]
                            },
                            "xValue": -5,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1681735748815
        },
        "fadeIn": {
            "id": "fadeIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "growIn": {
            "id": "growIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0.7500000000000001,
                        "yValue": 0.7500000000000001
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 1,
                        "yValue": 1
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInRight": {
            "id": "slideInRight",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});