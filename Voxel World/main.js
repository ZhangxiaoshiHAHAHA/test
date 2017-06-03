!
function(A) {
    function i(t) {
        if (o[t]) return o[t].exports;
        var e = o[t] = {
            exports: {},
            id: t,
            loaded: !1
        };
        return A[t].call(e.exports, e, e.exports, i),
        e.loaded = !0,
        e.exports
    }
    var t = window.webpackJsonp;
    window.webpackJsonp = function(o, n) {
        for (var s, a, r = 0,
        g = []; r < o.length; r++) a = o[r],
        e[a] && g.push.apply(g, e[a]),
        e[a] = 0;
        for (s in n) A[s] = n[s];
        for (t && t(o, n); g.length;) g.shift().call(null, i)
    };
    var o = {},
    e = {
        1 : 0
    };
    return i.e = function(A, t) {
        if (0 === e[A]) return t.call(null, i);
        if (void 0 !== e[A]) e[A].push(t);
        else {
            e[A] = [t];
            var o = document.getElementsByTagName("head")[0],
            n = document.createElement("script");
            n.type = "text/javascript",
            n.charset = "utf-8",
            n.async = !0,
            n.src = i.p + "" + A + ".main.js",
            o.appendChild(n)
        }
    },
    i.m = A,
    i.c = o,
    i.p = "htt://static.im20.com.cn/v1460027595!/crazylight.adidasevent.com/impublic/built/",
    i(0)
} ({
    0 : function(A, i, t) { (function(A, i, o) {
            t(18),
            t(1),
            t(2),
            t(5),
            t(4);
            var e, n, s, a = t(22),
            r = t(23),
            g = t(6),
            h = t(13),
            C = t(7),
            F = A.extend({},
            A.Events, {
                init: function() {
                    var A = this;
                    if (g.init(), h.init(), this.bgm = $("#bgm")[0], this.stage = new i.Stage, this.stage.camera.fov = 100, this.stage.size(640, window.innerHeight).update(), $("#three").append(this.stage.el), this.main = new i.Sprite, this.main.position(0, 0, -440).update(), this.stage.addChild(this.main), g.ua.ios) this.bg = i.create({
                        type: "plane",
                        size: [1400, 1200],
                        position: [0, 0, -2e4],
                        scale: [40],
                        material: [{
                            image: t(15)
                        }],
                        visibility: [{
                            alpha: .5
                        }]
                    }),
                    this.main.addChild(this.bg);
                    else {
                        this.bg = $('<img src="' + t(15) + '" />');
                        var o = 1400 / 1200 * window.innerHeight,
                        r = (640 - o) / 2;
                        this.bg.css({
                            height: "100%",
                            marginLeft: r
                        }),
                        $("#main").prepend(this.bg)
                    }
                    a.init(this.main),
                    !
                    function() {
                        t.e(0,
                        function(i) {
                            var t = [i(19), i(20), i(21)]; (function(i, t, o) {
                                e = i,
                                n = t,
                                s = o,
                                A.complete()
                            }).apply(null, t)
                        })
                    } (t),
                    $(window).on("resize",
                    function() {
                        A.resize()
                    }),
                    this.resize(),
                    $(window).on("touchmove",
                    function() {
                        return ! 1
                    })
                },
                complete: function() {
                    var A = this;
                    g.initOrientation(),
                    g.on("orient_change",
                    function(i) {
                        A.main.rotationZ += .3 * (4 * i - A.main.rotationZ),
                        A.main.rotationY += .3 * (.5 * i - A.main.rotationY),
                        A.main.updateT()
                    }),
                    a["in"](),
                    e.init(A.main),
                    e["in"](),
                    n.init(A.main),
                    $("#main").on("touchstart",
                    function() {
                        a.isOpen && (C.all(C.EVENT, ["Click", "Home-Video-Play", "Home-Video-Play"]), _mz_wx_custom(1), $("#main").off("touchstart"), a.out(), e.out(), n["in"](), A.bgm.play())
                    }),
                    n.on("end",
                    function() {
                        n.out(),
                        s.init(A.main),
                        s["in"](),
                        g.ua.ios ? (o.kill(A.bg), o.to(A.bg, 1, {
                            alpha: 0,
                            onUpdate: function() {
                                this.target.updateV()
                            }
                        })) : o.to(A.bg, 1, {
                            opacity: 0
                        })
                    }),
                    r.init(),
                    s.on("dot1",
                    function() {
                      C.all(C.EVENT, ["Click", "Product-Detail", "非凡贴合"]),
                        _mz_wx_custom(5),
                        r.showOn(0)
                    }),
                    s.on("dot2",
                    function() {
                        C.all(C.EVENT, ["Click", "Product-Detail", "稳定支撑"]),
                        _mz_wx_custom(6),
                        r.showOn(1)
                    }),
                    s.on("dot3",
                    function() {
                        C.all(C.EVENT, ["Click", "Product-Detail", "灵巧反转"]),
                        _mz_wx_custom(7),
                        r.showOn(2)
                    }),
                    s.on("share",
                    function() {
                        if (C.all(C.EVENT, ["Click", "To-Share", "To-Share"]), _mz_wx_custom(4), g.ua.weixin) A.shareOn();
                        else {
                            var i = "http://" + location.host + "/",
                            t = "Magic Voxel World",
                            o = i + "ttp://static.im20.com.cn/v1460027595!/crazylight.adidasevent.com/impublic/images/share.jpg";
                            window.open("http://v.t.sina.com.cn/share/share.php?url=" + encodeURIComponent(i) + "&title=" + encodeURIComponent(t) + "&source=&sourceUrl=&content=utf-8&pic=" + encodeURIComponent(o))
                        }
                    }),
                    $("#share").on("touchstart",
                    function() {
                        A.shareOff()
                    })
                },
                resize: function() {
                    this.stage.size(640, window.innerHeight).update()
                },
                shareOn: function() {
                    C.all(C.PAGE, ["To-share-Page"]);
                    var A = $("#share");
                    A.css({
                        display: "block"
                    }),
                    o.to(A, .3, {
                        opacity: 1
                    })
                },
                shareOff: function() {
                    var A = $("#share");
                    o.to(A, .3, {
                        opacity: 0,
                        onEnd: function() {
                            this.target.style.display = "none"
                        }
                    })
                }
            });
            F.init()
        }).call(i, t(1), t(4), t(2))
    },
    1 : function(A, i, t) {
        var o, e; (function(n) {
            /*!
	 * VERSION: 0.2.0
	 * DATE: 2015-03-31
	 * GIT:https://github.com/shrekshrek/bone
	 *
	 * @author: Shrek.wang, shrekshrek@gmail.com
	 **/
            !
            function(s) {
                var a = "object" == typeof self && self.self == self && self || "object" == typeof n && n.global == n && n;
                o = [t(18), i],
                e = function(A, i) {
                    a.Bone = s(a, i, A)
                }.apply(i, o),
                !(void 0 !== e && (A.exports = e))
            } (function(A, i, t) {
                var o = A.Bone,
                e = [].slice;
                i.VERSION = "0.2.0",
                i.$ = t,
                i.noConflict = function() {
                    return A.Bone = o,
                    this
                };
                var n = function(A) {
                    return "function" == typeof A || !1
                },
                s = function(A, i, t) {
                    var o = null == A ? void 0 : A[i];
                    return void 0 === o && (o = t),
                    n(o) ? o.call(A) : o
                },
                a = function(A) {
                    return Function.prototype.bind.apply(A, e.call(arguments, 1))
                };
                i.bind = a;
                var r = function(A) {
                    var i = arguments.length;
                    if (2 > i || null == A) return A;
                    for (var t = 1; i > t; t++) for (var o = arguments[t], e = g(o), n = e.length, s = 0; n > s; s++) {
                        var a = e[s];
                        A[a] = o[a]
                    }
                    return A
                };
                i.extend = r;
                var g = function(A) {
                    var i = [];
                    for (var t in A) i.push(t);
                    return i
                },
                h = function(A) {
                    return null == A ? 0 : void 0 !== A.length ? A.length: g(A).length
                },
                C = function(A) {
                    return null == A ? !0 : void 0 !== A.length ? 0 === A.length: 0 === g(A).length
                },
                F = 0,
                Q = function(A) {
                    var i = ++F + "";
                    return A ? A + i: i
                },
                B = i.Events = {},
                E = /\s+/,
                U = function(A, i, t, o, e) {
                    var n, s = 0;
                    if (t && "object" == typeof t) {
                        void 0 !== o && "context" in e && void 0 === e.context && (e.context = o);
                        for (n = g(t); s < n.length; s++) i = A(i, n[s], t[n[s]], e)
                    } else if (t && E.test(t)) for (n = t.split(E); s < n.length; s++) i = A(i, n[s], o, e);
                    else i = A(i, t, o, e);
                    return i
                };
                B.on = function(A, i, t) {
                    return l(this, A, i, t)
                };
                var l = function(A, i, t, o, e) {
                    if (A._events = U(u, A._events || {},
                    i, t, {
                        context: o,
                        ctx: A,
                        listening: e
                    }), e) {
                        var n = A._listeners || (A._listeners = {});
                        n[e.id] = e
                    }
                    return A
                };
                B.listenTo = function(A, i, t) {
                    if (!A) return this;
                    var o = A._listenId || (A._listenId = Q("l")),
                    e = this._listeningTo || (this._listeningTo = {}),
                    n = e[o];
                    if (!n) {
                        var s = this._listenId || (this._listenId = Q("l"));
                        n = e[o] = {
                            obj: A,
                            objId: o,
                            id: s,
                            listeningTo: e,
                            count: 0
                        }
                    }
                    return l(A, i, t, this, n),
                    this
                };
                var u = function(A, i, t, o) {
                    if (t) {
                        var e = A[i] || (A[i] = []),
                        n = o.context,
                        s = o.ctx,
                        a = o.listening;
                        a && a.count++,
                        e.push({
                            callback: t,
                            context: n,
                            ctx: n || s,
                            listening: a
                        })
                    }
                    return A
                };
                B.off = function(A, i, t) {
                    return this._events ? (this._events = U(q, this._events, A, i, {
                        context: t,
                        listeners: this._listeners
                    }), this) : this
                },
                B.stopListening = function(A, i, t) {
                    var o = this._listeningTo;
                    if (!o) return this;
                    for (var e = A ? [A._listenId] : g(o), n = 0; n < e.length; n++) {
                        var s = o[e[n]];
                        if (!s) break;
                        s.obj.off(i, t, this)
                    }
                    return C(o) && (this._listeningTo = void 0),
                    this
                };
                var q = function(A, i, t, o) {
                    if (A) {
                        var e, n = 0,
                        s = o.context,
                        a = o.listeners;
                        if (i || t || s) {
                            for (var r = i ? [i] : g(A); n < r.length; n++) {
                                i = r[n];
                                var C = A[i];
                                if (!C) break;
                                for (var F = [], Q = 0; Q < C.length; Q++) {
                                    var B = C[Q];
                                    t && t !== B.callback && t !== B.callback._callback || s && s !== B.context ? F.push(B) : (e = B.listening, e && 0 === --e.count && (delete a[e.id], delete e.listeningTo[e.objId]))
                                }
                                F.length ? A[i] = F: delete A[i]
                            }
                            return h(A) ? A: void 0
                        }
                        for (var E = g(a); n < E.length; n++) e = a[E[n]],
                        delete a[e.id],
                        delete e.listeningTo[e.objId]
                    }
                };
                B.once = function(A, i, t) {
                    var o = U(K, {},
                    A, i, a(this.off, this));
                    return this.on(o, void 0, t)
                },
                B.listenToOnce = function(A, i, t) {
                    var o = U(K, {},
                    i, t, a(this.stopListening, this, A));
                    return this.listenTo(A, o)
                };
                var K = function(A, i, t, o) {
                    if (t) {
                        var e = A[i] = function() {
                            o(i, e),
                            t.apply(this, arguments)
                        };
                        e._callback = t
                    }
                    return A
                };
                B.trigger = function(A) {
                    if (!this._events) return this;
                    for (var i = Math.max(0, arguments.length - 1), t = Array(i), o = 0; i > o; o++) t[o] = arguments[o + 1];
                    return U(c, this._events, A, void 0, t),
                    this
                };
                var c = function(A, i, t, o) {
                    if (A) {
                        var e = A[i],
                        n = A.all;
                        e && n && (n = n.slice()),
                        e && R(e, o),
                        n && R(n, [i].concat(o))
                    }
                    return A
                },
                R = function(A, i) {
                    var t, o = -1,
                    e = A.length,
                    n = i[0],
                    s = i[1],
                    a = i[2];
                    switch (i.length) {
                    case 0:
                        for (; ++o < e;)(t = A[o]).callback.call(t.ctx);
                        return;
                    case 1:
                        for (; ++o < e;)(t = A[o]).callback.call(t.ctx, n);
                        return;
                    case 2:
                        for (; ++o < e;)(t = A[o]).callback.call(t.ctx, n, s);
                        return;
                    case 3:
                        for (; ++o < e;)(t = A[o]).callback.call(t.ctx, n, s, a);
                        return;
                    default:
                        for (; ++o < e;)(t = A[o]).callback.apply(t.ctx, i);
                        return
                    }
                };
                r(i, B);
                var I = i.Class = function() {
                    this.initialize.apply(this, arguments)
                };
                r(I.prototype, B, {
                    initialize: function() {}
                });
                var V = i.View = function(A) {
                    this.cid = Q("view"),
                    A || (A = {});
                    for (var i in p) A[p[i]] && (this[p[i]] = A[p[i]]);
                    this._ensureElement(),
                    this.initialize.apply(this, arguments)
                },
                m = /^(\S+)\s*(.*)$/,
                p = ["el", "id", "attributes", "className", "tagName", "events"];
                r(V.prototype, B, {
                    tagName: "div",
                    $: function(A) {
                        return this.$el.find(A)
                    },
                    initialize: function() {},
                    render: function() {
                        return this
                    },
                    remove: function() {
                        return this._removeElement(),
                        this.stopListening(),
                        this
                    },
                    _removeElement: function() {
                        this.$el.remove()
                    },
                    setElement: function(A) {
                        return this.undelegateEvents(),
                        this._setElement(A),
                        this.delegateEvents(),
                        this
                    },
                    _setElement: function(A) {
                        this.$el = A instanceof i.$ ? A: i.$(A),
                        this.el = this.$el[0]
                    },
                    delegateEvents: function(A) {
                        if (A || (A = s(this, "events")), !A) return this;
                        this.undelegateEvents();
                        for (var i in A) {
                            var t = A[i];
                            if (n(t) || (t = this[t]), t) {
                                var o = i.match(m);
                                this.delegate(o[1], o[2], a(t, this))
                            }
                        }
                        return this
                    },
                    delegate: function(A, i, t) {
                        return this.$el.on(A + ".delegateEvents" + this.cid, i, t),
                        this
                    },
                    undelegateEvents: function() {
                        return this.$el && this.$el.off(".delegateEvents" + this.cid),
                        this
                    },
                    undelegate: function(A, i, t) {
                        return this.$el.off(A + ".delegateEvents" + this.cid, i, t),
                        this
                    },
                    _createElement: function(A) {
                        return document.createElement(A)
                    },
                    _ensureElement: function() {
                        if (this.el) this.setElement(s(this, "el"));
                        else {
                            var A = r({},
                            s(this, "attributes"));
                            this.id && (A.id = s(this, "id")),
                            this.className && (A["class"] = s(this, "className")),
                            this.setElement(this._createElement(s(this, "tagName"))),
                            this._setAttributes(A)
                        }
                    },
                    _setAttributes: function(A) {
                        this.$el.attr(A)
                    }
                });
                var W = i.Router = function(A) {
                    A || (A = {}),
                    A.routes && (this.routes = A.routes),
                    this._bindRoutes(),
                    this.initialize.apply(this, arguments)
                },
                f = /\((.*?)\)/g,
                d = /(\(\?)?:\w+/g,
                Y = /\*\w+/g,
                L = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                r(W.prototype, B, {
                    initialize: function() {},
                    route: function(A, t, o) {
                        A = this._routeToRegExp(A),
                        n(t) && (o = t, t = ""),
                        o || (o = this[t]);
                        var e = this;
                        return i.history.route(A,
                        function(n) {
                            var s = e._extractParameters(A, n);
                            e.execute(o, s, t) !== !1 && (e.trigger.apply(e, ["route:" + t].concat(s)), e.trigger("route", t, s), i.history.trigger("route", e, t, s))
                        }),
                        this
                    },
                    execute: function(A, i) {
                        A && A.apply(this, i)
                    },
                    navigate: function(A, t) {
                        return i.history.navigate(A, t),
                        this
                    },
                    _bindRoutes: function() {
                        if (this.routes) for (var A, i = g(this.routes); null != (A = i.pop());) this.route(A, this.routes[A])
                    },
                    _routeToRegExp: function(A) {
                        return A = A.replace(L, "\\$&").replace(f, "(?:$1)?").replace(d,
                        function(A, i) {
                            return i ? A: "([^/?]+)"
                        }).replace(Y, "([^?]*?)"),
                        new RegExp("^" + A + "(?:\\?([\\s\\S]*))?$")
                    },
                    _extractParameters: function(A, i) {
                        var t = A.exec(i).slice(1),
                        o = [];
                        for (var e in t) {
                            var n = t[e];
                            o[e] = e === t.length - 1 ? n || null: n ? decodeURIComponent(n) : null
                        }
                        return o
                    }
                });
                var w = i.History = function() {
                    this.handlers = [],
                    this.checkUrl = a(this.checkUrl, this),
                    "undefined" != typeof window && (this.location = window.location, this.history = window.history)
                },
                x = /^[#\/]|\s+$/g,
                M = /^\/+|\/+$/g,
                J = /#.*$/;
                w.started = !1,
                r(w.prototype, B, {
                    atRoot: function() {
                        var A = this.location.pathname.replace(/[^\/]$/, "$&/");
                        return A === this.root && !this.getSearch()
                    },
                    matchRoot: function() {
                        var A = this.decodeFragment(this.location.pathname),
                        i = A.slice(0, this.root.length - 1) + "/";
                        return i === this.root
                    },
                    decodeFragment: function(A) {
                        return decodeURI(A.replace(/%25/g, "%2525"))
                    },
                    getSearch: function() {
                        var A = this.location.href.replace(/#.*/, "").match(/\?.+/);
                        return A ? A[0] : ""
                    },
                    getHash: function(A) {
                        var i = (A || this).location.href.match(/#(.*)$/);
                        return i ? i[1] : ""
                    },
                    getPath: function() {
                        var A = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                        return "/" === A.charAt(0) ? A.slice(1) : A
                    },
                    getFragment: function(A) {
                        return null == A && (A = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()),
                        A.replace(x, "")
                    },
                    start: function(A) {
                        if (w.started) throw new Error("Bone.history has already been started");
                        if (w.started = !0, this.options = r({
                            root: "/"
                        },
                        this.options, A), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window, this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(M, "/"), this._wantsHashChange && this._wantsPushState) {
                            if (!this._hasPushState && !this.atRoot()) {
                                var i = this.root.slice(0, -1) || "/";
                                return this.location.replace(i + "#" + this.getPath()),
                                !0
                            }
                            this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                                replace: !0
                            })
                        }
                        var t = window.addEventListener ||
                        function(A, i) {
                            return attachEvent("on" + A, i)
                        };
                        return this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && t("hashchange", this.checkUrl, !1),
                        this.options.silent ? void 0 : this.loadUrl()
                    },
                    stop: function() {
                        var A = window.removeEventListener ||
                        function(A, i) {
                            return detachEvent("on" + A, i)
                        };
                        this._usePushState ? A("popstate", this.checkUrl, !1) : this._useHashChange && A("hashchange", this.checkUrl, !1),
                        this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                        w.started = !1
                    },
                    route: function(A, i) {
                        this.handlers.unshift({
                            route: A,
                            callback: i
                        })
                    },
                    checkUrl: function() {
                        var A = this.getFragment();
                        return A === this.fragment ? !1 : void this.loadUrl()
                    },
                    loadUrl: function(A) {
                        if (!this.matchRoot()) return ! 1;
                        A = this.fragment = this.getFragment(A);
                        for (var i in this.handlers) {
                            var t = this.handlers[i];
                            if (t.route.test(A)) return t.callback(A),
                            !0
                        }
                    },
                    navigate: function(A, i) {
                        if (!w.started) return ! 1;
                        i && i !== !0 || (i = {
                            trigger: !!i
                        }),
                        A = A.replace(J, "");
                        var t = this.root; ("" === A || "?" === A.charAt(0)) && (t = t.slice(0, -1) || "/");
                        var o = t + A;
                        if (A = this.decodeFragment(A.replace(J, "")), this.fragment !== A) {
                            if (this.fragment = A, this._usePushState) this.history[i.replace ? "replaceState": "pushState"]({},
                            document.title, o);
                            else {
                                if (!this._wantsHashChange) return this.location.assign(o);
                                this._updateHash(this.location, A, i.replace)
                            }
                            return i.trigger ? this.loadUrl(A) : void 0
                        }
                    },
                    _updateHash: function(A, i, t) {
                        if (t) {
                            var o = A.href.replace(/(javascript:|#).*$/, "");
                            A.replace(o + "#" + i)
                        } else A.hash = "#" + i
                    }
                }),
                i.history = new w;
                var S = function(A, i) {
                    var t, o = this;
                    t = A && Object.prototype.hasOwnProperty.call(A, "constructor") ? A.constructor: function() {
                        return o.apply(this, arguments)
                    },
                    r(t, o, i);
                    var e = function() {
                        this.constructor = t
                    };
                    return e.prototype = o.prototype,
                    t.prototype = new e,
                    A && r(t.prototype, A),
                    t.__super__ = o.prototype,
                    t
                };
                return W.extend = w.extend = I.extend = V.extend = S,
                i
            })
        }).call(i,
        function() {
            return this
        } ())
    },
    2 : function(A, i, t) {
        var o, e; (function(t) {
            /*!
	 * VERSION: 0.5.0
	 * DATE: 2016-2-21
	 * GIT:https://github.com/shrekshrek/jstween
	 *
	 * @author: Shrek.wang, shrekshrek@gmail.com
	 **/
            !
            function(n) {
                var s = "object" == typeof self && self.self == self && self || "object" == typeof t && t.global == t && t;
                o = [i],
                e = function(A) {
                    s.JT = n(s, A)
                }.apply(i, o),
                !(void 0 !== e && (A.exports = e))
            } (function(A, i) {
                function t(A, i) {
                    for (var t in i) A[t] = i[t]
                }
                function o(A, i) {
                    if ("function" == typeof A) i.call(A, 0, A);
                    else if (void 0 === A.length) i.call(A, 0, A);
                    else for (var t = 0; t < A.length; t++) i.call(A[t], t, A[t])
                }
                function e(A) {
                    return A.replace(/([A-Z])/g, "-$1").toLowerCase()
                }
                function n(A) {
                    return A.replace(/\b(\w)|\s(\w)/g,
                    function(A) {
                        return A.toUpperCase()
                    })
                }
                function s(A) {
                    return A ? w + n(A) : w
                }
                function a(A) {
                    if (!A) throw "target is undefined, can't tween!!!";
                    return "string" == typeof A ? "undefined" == typeof document ? A: document.querySelectorAll ? document.querySelectorAll(A) : document.getElementById("#" === A.charAt(0) ? A.substr(1) : A) : A
                }
                function r(A, i) {
                    return void 0 !== A._jt_obj[i] ? i: void 0 !== A.style[i] ? i: (i = s(i), void 0 !== A.style[i] ? i: void 0)
                }
                function g(A, i, t, o) {
                    if (i instanceof Array) {
                        for (var e in i) i[e] = h(A, i[e]);
                        void 0 != t && (o ? i.push(t) : i.unshift(t))
                    } else i = h(A, i);
                    return i
                }
                function h(A, i) {
                    switch (typeof i) {
                    case "string":
                        var t = i.substr(0, 2),
                        o = parseFloat(i.substr(2));
                        switch (t) {
                        case "+=":
                            i = A + o;
                            break;
                        case "-=":
                            i = A - o
                        }
                    }
                    return i
                }
                function C(A, i) {
                    switch (A) {
                    case "opacity":
                    case "fontWeight":
                    case "lineHeight":
                    case "zoom":
                        return i;
                    default:
                        return "number" == typeof i ? Math.round(i) + "px": i
                    }
                }
                function F(A) {
                    void 0 == A._jt_obj && (A._jt_obj = {
                        x: 0,
                        y: 0,
                        z: 0,
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0,
                        scaleX: 1,
                        scaleY: 1,
                        scaleZ: 1
                    })
                }
                function Q(A, i) {
                    switch (i) {
                    case "x":
                    case "y":
                    case "z":
                    case "rotationX":
                    case "rotationY":
                    case "rotationZ":
                    case "scaleX":
                    case "scaleY":
                    case "scaleZ":
                        return A._jt_obj[i];
                    default:
                        return B(A, i)
                    }
                }
                function B(A, i) {
                    if (document.defaultView && document.defaultView.getComputedStyle) {
                        var t = e(i),
                        o = document.defaultView.getComputedStyle(A, "");
                        return o && o.getPropertyValue(t)
                    }
                    return A.currentStyle ? A.currentStyle[i] : null
                }
                function E(A, i, t) {
                    switch (i) {
                    case "x":
                    case "y":
                    case "z":
                    case "rotationX":
                    case "rotationY":
                    case "rotationZ":
                    case "scaleX":
                    case "scaleY":
                    case "scaleZ":
                        return A._jt_obj[i] = t,
                        !0;
                    default:
                        return U(A, i, t),
                        !1
                    }
                }
                function U(A, i, t) {
                    A.style[i] = C(i, t)
                }
                function l(A) {
                    return "object" == typeof A && 1 === A.nodeType
                }
                function u() {
                    J = !0;
                    var A, i, t = M.length,
                    o = S.length;
                    if (0 === t && 0 === o) return void(J = !1);
                    var e = L();
                    for (A = t - 1; A >= 0; A--) if (M[A] && !M[A]._update(e)) {
                        var n = M.splice(A, 1)[0];
                        n.onUpdate && n.onUpdate.apply(n, n.onUpdateParams),
                        n.onEnd && n.onEnd.apply(n, n.onEndParams),
                        n.target = null
                    }
                    for (i = o - 1; i >= 0; i--) if (S[i] && !S[i]._update(e)) {
                        var s = S.splice(i, 1)[0];
                        s.onEnd && s.onEnd.apply(s, s.onEndParams)
                    }
                    x(u)
                }
                function q() {
                    this.initialize.apply(this, arguments)
                }
                function K(A, i) {
                    var t = a(A),
                    e = M.length;
                    o(t,
                    function(A, t) {
                        for (var o = e - 1; o >= 0; o--) {
                            var n = M[o];
                            n.target === t && n[i]()
                        }
                    })
                }
                function c(A) {
                    for (var i = M.length,
                    t = i - 1; t >= 0; t--) {
                        var o = M[t];
                        o[A]()
                    }
                }
                function R() {
                    this.initialize.apply(this, arguments)
                }
                function I(A, i) {
                    var t = A,
                    e = S.length;
                    o(t,
                    function(A, t) {
                        for (var o = e - 1; o >= 0; o--) {
                            var n = S[o];
                            n.onEnd === t && n[i]()
                        }
                    })
                }
                function V(A) {
                    for (var i = S.length,
                    t = i - 1; t >= 0; t--) {
                        var o = S[t];
                        o[A]()
                    }
                }
                function m(A) {
                    A.bezier && (p(A, A.bezier), A.interpolation = f, delete A.bezier),
                    A.through && (p(A, A.through), A.interpolation = d, delete A.through),
                    A.linear && (p(A, A.linear), A.interpolation = W, delete A.linear)
                }
                function p(A, i) {
                    for (var t in i) for (var o in i[t]) 0 == t ? A[o] = [i[t][o]] : A[o].push(i[t][o])
                }
                function W(A, i) {
                    var t = A.length - 1,
                    o = t * i,
                    e = Math.floor(o),
                    n = y.Linear;
                    return 0 > i ? n(A[0], A[1], o) : i > 1 ? n(A[t], A[t - 1], t - o) : n(A[e], A[e + 1 > t ? t: e + 1], o - e)
                }
                function f(A, i) {
                    var t, o = 0,
                    e = A.length - 1,
                    n = Math.pow,
                    s = y.Bernstein;
                    for (t = 0; e >= t; t++) o += n(1 - i, e - t) * n(i, t) * A[t] * s(e, t);
                    return o
                }
                function d(A, i) {
                    var t = A.length - 1,
                    o = t * i,
                    e = Math.floor(o),
                    n = y.Through;
                    return A[0] === A[t] ? (0 > i && (e = Math.floor(o = t * (1 + i))), n(A[(e - 1 + t) % t], A[e], A[(e + 1) % t], A[(e + 2) % t], o - e)) : 0 > i ? A[0] - (n(A[0], A[0], A[1], A[1], -o) - A[0]) : i > 1 ? A[t] - (n(A[t], A[t], A[t - 1], A[t - 1], o - t) - A[t]) : n(A[e ? e - 1 : 0], A[e], A[e + 1 > t ? t: e + 1], A[e + 2 > t ? t: e + 2], o - e)
                }
                Date.now = Date.now ||
                function() {
                    return (new Date).getTime()
                };
                var Y = Date.now(),
                L = function() {
                    return Date.now() - Y
                },
                w = ""; !
                function() {
                    var A = document.createElement("div"),
                    i = ["Webkit", "Moz", "Ms", "O"];
                    for (var t in i) if (i[t] + "Transform" in A.style) {
                        w = i[t];
                        break
                    }
                } ();
                var x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
                function(A) {
                    window.setTimeout(A, 1e3 / 60)
                },
                M = [],
                J = !1;
                t(q.prototype, {
                    initialize: function(A, t, o, e, n) {
                        this.fromVars = o,
                        this.curVars = {},
                        this.toVars = e,
                        this.target = A,
                        this.duration = 1e3 * Math.max(t, 0),
                        this.ease = e.ease || i.Linear.None,
                        this.delay = 1e3 * Math.max(e.delay || 0, 0),
                        this.yoyo = e.yoyo || !1,
                        this.repeat = this.curRepeat = Math.floor(e.repeat || 0),
                        this.repeatDelay = 1e3 * Math.max(e.repeatDelay || 0, 0),
                        this.onStart = e.onStart || null,
                        this.onStartParams = e.onStartParams || [],
                        this.onRepeat = e.onRepeat || null,
                        this.onRepeatParams = e.onRepeatParams || [],
                        this.onEnd = e.onEnd || null,
                        this.onEndParams = e.onEndParams || [],
                        this.onUpdate = e.onUpdate || null,
                        this.onUpdateParams = e.onUpdateParams || [],
                        this.isPlaying = e.isPlaying || !0,
                        this.interpolation = e.interpolation || null,
                        this.isReverse = !1,
                        this.isDom = n,
                        this.curTime = 0,
                        this.lastTime = L(),
                        this.isStart = !1,
                        this.startTime = this.delay,
                        this.endTime = this.startTime + this.repeatDelay + this.duration,
                        0 != this.delay && (this._updateProp(), this.onUpdate && this.onUpdate.apply(this, this.onUpdateParams)),
                        M.unshift(this),
                        J ? this._update(this.lastTime) : u()
                    },
                    _update: function(A) {
                        var i = A - this.lastTime;
                        if (this.lastTime = A, !this.isPlaying) return ! 0;
                        if (i %= this.duration, this.curTime += i, this.curTime < this.startTime) return ! 0;
                        if (this.isStart || (this.isStart = !0, this.onStart && this.onStart.apply(this, this.onStartParams)), this.curTime < this.startTime + this.repeatDelay) return ! 0;
                        if (this.curTime < this.endTime) this._updateProp(),
                        this.onUpdate && this.onUpdate.apply(this, this.onUpdateParams);
                        else {
                            if (0 == this.curRepeat) return this._updateProp(),
                            !1;
                            this.yoyo && (this.isReverse = !this.isReverse),
                            0 == this.repeatDelay ? (this.curTime = this.curTime - this.duration - this.repeatDelay, this._updateProp()) : (this._updateProp(), this.curTime = this.curTime - this.duration - this.repeatDelay),
                            this.onUpdate && this.onUpdate.apply(this, this.onUpdateParams),
                            this.onRepeat && this.onRepeat.apply(this, this.onRepeatParams),
                            this.curRepeat > 0 && this.curRepeat--
                        }
                        return ! 0
                    },
                    _updateProp: function() {
                        var A = 0 == this.duration ? 1 : (this.curTime - this.startTime - this.repeatDelay) / this.duration;
                        A = Math.max(0, Math.min(1, A)),
                        this.isReverse && (A = 1 - A);
                        var i = this.ease(A),
                        t = !1;
                        for (var o in this.fromVars) {
                            var e, n = this.fromVars[o],
                            a = this.toVars[o] || 0;
                            e = a instanceof Array ? this.interpolation(a, i) : n instanceof Array ? this.interpolation(n, i) : n + (a - n) * i,
                            e = Math.round(100 * e) / 100,
                            this.curVars[o] = e,
                            this.isDom ? E(this.target, o, e) && (t = !0) : this.target[o] = e
                        }
                        t && (this.target.style[s("transform")] = "translate3d(" + this.target._jt_obj.x + "px," + this.target._jt_obj.y + "px," + this.target._jt_obj.z + "px) rotateX(" + this.target._jt_obj.rotationX % 360 + "deg) rotateY(" + this.target._jt_obj.rotationY % 360 + "deg) rotateZ(" + this.target._jt_obj.rotationZ % 360 + "deg) scale3d(" + this.target._jt_obj.scaleX + ", " + this.target._jt_obj.scaleY + ", " + this.target._jt_obj.scaleZ + ") ")
                    },
                    play: function() {
                        this.target && (this.isPlaying = !0)
                    },
                    pause: function() {
                        this.target && (this.isPlaying = !1)
                    },
                    destroy: function(A) {
                        if (this.target) {
                            var i = M.indexOf(this);
                            if ( - 1 !== i) {
                                var t = M.splice(i, 1)[0];
                                A && t.onEnd && t.onEnd.apply(t, t.onEndParams),
                                this.target = null
                            }
                        }
                    }
                }),
                t(i, {
                    get: function(A, i) {
                        var t = a(A);
                        if (void 0 !== t.length && (t = t[0]), l(t)) {
                            F(t);
                            var o = r(t, i);
                            return o ? Q(t, o) : null
                        }
                        return t[i]
                    },
                    set: function(A, i) {
                        var t = a(A);
                        o(t,
                        function(A, t) {
                            if (l(t)) {
                                F(t);
                                var o = !1;
                                for (var e in i) {
                                    var n = r(t, e);
                                    if (n) {
                                        var a = g(parseFloat(Q(t, n)), i[e]);
                                        E(t, n, a) && (o = !0)
                                    }
                                }
                                o && (t.style[s("transform")] = "translate3d(" + t._jt_obj.x + "px," + t._jt_obj.y + "px," + t._jt_obj.z + "px) rotateX(" + t._jt_obj.rotationX % 360 + "deg) rotateY(" + t._jt_obj.rotationY % 360 + "deg) rotateZ(" + t._jt_obj.rotationZ % 360 + "deg) scale3d(" + t._jt_obj.scaleX + ", " + t._jt_obj.scaleY + ", " + t._jt_obj.scaleZ + ") ")
                            } else for (var h in i) t[h] = g(t[h], i[h])
                        })
                    },
                    fromTo: function(A, i, t, e) {
                        m(e);
                        var n = a(A),
                        s = [];
                        return o(n,
                        function(A, o) {
                            var n = {},
                            a = {},
                            h = l(o);
                            if (h) {
                                F(o);
                                for (var C in e) {
                                    var B = r(o, C);
                                    if (B) {
                                        var E = parseFloat(Q(o, B));
                                        n[B] = g(E, t[C]),
                                        a[B] = g(E, e[C], n[B], !1)
                                    } else a[C] = e[C]
                                }
                            } else for (var C in e) if (void 0 !== o[C]) {
                                var E = parseFloat(o[C]);
                                n[C] = g(E, t[C]),
                                a[C] = g(E, e[C], n[C], !1)
                            } else a[C] = e[C];
                            var U = new q(o, i, n, a, h);
                            s.push(U)
                        }),
                        1 == s.length ? s[0] : s
                    },
                    from: function(A, i, t) {
                        m(t);
                        var e = a(A),
                        n = [];
                        return o(e,
                        function(A, o) {
                            var e = {},
                            s = {},
                            a = l(o);
                            if (a) {
                                F(o);
                                for (var h in t) {
                                    var C = r(o, h);
                                    if (C) {
                                        var B = parseFloat(Q(o, C));
                                        e[C] = g(B, t[h], B, !0),
                                        s[C] = B
                                    } else s[h] = t[h]
                                }
                            } else for (var h in t) if (void 0 !== o[h]) {
                                var B = parseFloat(o[h]);
                                e[h] = g(B, t[h], B, !0),
                                s[h] = B
                            } else s[h] = t[h];
                            var E = new q(o, i, e, s, a);
                            n.push(E)
                        }),
                        1 == n.length ? n[0] : n
                    },
                    to: function(A, i, t) {
                        m(t);
                        var e = a(A),
                        n = [];
                        return o(e,
                        function(A, o) {
                            var e = {},
                            s = {},
                            a = l(o);
                            if (a) {
                                F(o);
                                for (var h in t) {
                                    var C = r(o, h);
                                    if (C) {
                                        var B = parseFloat(Q(o, C));
                                        e[C] = B,
                                        s[C] = g(B, t[h], B, !1)
                                    } else s[h] = t[h]
                                }
                            } else for (var h in t) if (void 0 !== o[h]) {
                                var B = parseFloat(o[h]);
                                e[h] = B,
                                s[h] = g(B, t[h], B, !1)
                            } else s[h] = t[h];
                            var E = new q(o, i, e, s, a);
                            n.push(E)
                        }),
                        1 == n.length ? n[0] : n
                    },
                    kill: function(A, i) {
                        var t = a(A);
                        o(t,
                        function(A, t) {
                            for (var o = M.length,
                            e = o - 1; e >= 0; e--) {
                                var n = M[e];
                                n.target === t && (M.splice(e, 1), i && n.onEnd && n.onEnd.apply(n, n.onEndParams), n.target = null)
                            }
                        })
                    },
                    killAll: function(A) {
                        if (!A) return void(M = []);
                        for (var i = M.length,
                        t = i - 1; t >= 0; t--) {
                            var o = M.splice(t, 1);
                            A && o.onEnd && o.onEnd.apply(o, o.onEndParams),
                            o.target = null
                        }
                    },
                    play: function(A) {
                        K(A, "play")
                    },
                    playAll: function() {
                        c("play")
                    },
                    pause: function(A) {
                        K(A, "pause")
                    },
                    pauseAll: function() {
                        c("pause")
                    }
                });
                var S = [];
                t(R.prototype, {
                    initialize: function(A, i, t, o) {
                        this.delay = 1e3 * A,
                        this.onEnd = i || null,
                        this.onEndParams = t || [],
                        this.curTime = 0,
                        this.lastTime = L(),
                        this.endTime = this.delay,
                        this.isPlaying = o || !0,
                        S.unshift(this),
                        J ? this._update(this.lastTime) : u()
                    },
                    _update: function(A) {
                        var i = A - this.lastTime;
                        return this.lastTime = A,
                        this.isPlaying ? (this.curTime += i, this.curTime < this.endTime) : !0
                    },
                    play: function() {
                        this.isPlaying = !0
                    },
                    pause: function() {
                        this.isPlaying = !1
                    },
                    destroy: function(A) {
                        var i = S.indexOf(this);
                        if ( - 1 !== i) {
                            var t = S.splice(i, 1)[0];
                            A && t.onEnd && t.onEnd.apply(t, t.onEndParams)
                        }
                    }
                }),
                t(i, {
                    call: function(A, i, t) {
                        return new R(A, i, t)
                    },
                    killCall: function(A, i) {
                        var t = A,
                        e = S.length;
                        o(t,
                        function(A, t) {
                            for (var o = e - 1; o >= 0; o--) {
                                var n = S[o];
                                n.onEnd === t && (S.splice(o, 1), i && n.onEnd && n.onEnd.apply(n, n.onEndParams))
                            }
                        })
                    },
                    killAllCalls: function(A) {
                        if (!A) return void(S = []);
                        for (var i = S.length,
                        t = i - 1; t >= 0; t--) {
                            var o = S.splice(t, 1);
                            A && o.onEnd && o.onEnd.apply(o, o.onEndParams)
                        }
                    },
                    playCall: function(A) {
                        I(A, "play")
                    },
                    playAllCalls: function() {
                        V("play")
                    },
                    pauseCall: function(A) {
                        I(A, "pause")
                    },
                    pauseAllCalls: function() {
                        V("pause")
                    }
                }),
                t(i, {
                    path: function(A) {
                        m(A);
                        for (var t, o = A.ease || i.Linear.None,
                        e = A.step || 1,
                        n = [], s = 0; e >= s; s++) {
                            t = o(s / e);
                            var a = {};
                            for (var r in A) A[r] instanceof Array && (a[r] = A.interpolation(A[r], t));
                            n.push(a)
                        }
                        return n
                    }
                });
                var y = {
                    Linear: function(A, i, t) {
                        return (i - A) * t + A
                    },
                    Bernstein: function(A, i) {
                        var t = y.Factorial;
                        return t(A) / t(i) / t(A - i)
                    },
                    Factorial: function() {
                        var A = [1];
                        return function(i) {
                            var t, o = 1;
                            if (A[i]) return A[i];
                            for (t = i; t > 1; t--) o *= t;
                            return A[i] = o
                        }
                    } (),
                    Through: function(A, i, t, o, e) {
                        var n = .5 * (t - A),
                        s = .5 * (o - i),
                        a = e * e,
                        r = e * a;
                        return (2 * i - 2 * t + n + s) * r + ( - 3 * i + 3 * t - 2 * n - s) * a + n * e + i
                    }
                };
                return t(i, {
                    Linear: {
                        None: function(A) {
                            return A
                        }
                    },
                    Quad: {
                        In: function(A) {
                            return A * A
                        },
                        Out: function(A) {
                            return A * (2 - A)
                        },
                        InOut: function(A) {
                            return (A *= 2) < 1 ? .5 * A * A: -.5 * (--A * (A - 2) - 1)
                        }
                    },
                    Cubic: {
                        In: function(A) {
                            return A * A * A
                        },
                        Out: function(A) {
                            return--A * A * A + 1
                        },
                        InOut: function(A) {
                            return (A *= 2) < 1 ? .5 * A * A * A: .5 * ((A -= 2) * A * A + 2)
                        }
                    },
                    Quart: {
                        In: function(A) {
                            return A * A * A * A
                        },
                        Out: function(A) {
                            return 1 - --A * A * A * A
                        },
                        InOut: function(A) {
                            return (A *= 2) < 1 ? .5 * A * A * A * A: -.5 * ((A -= 2) * A * A * A - 2)
                        }
                    },
                    Quint: {
                        In: function(A) {
                            return A * A * A * A * A
                        },
                        Out: function(A) {
                            return--A * A * A * A * A + 1
                        },
                        InOut: function(A) {
                            return (A *= 2) < 1 ? .5 * A * A * A * A * A: .5 * ((A -= 2) * A * A * A * A + 2)
                        }
                    },
                    Sine: {
                        In: function(A) {
                            return 1 - Math.cos(A * Math.PI / 2)
                        },
                        Out: function(A) {
                            return Math.sin(A * Math.PI / 2)
                        },
                        InOut: function(A) {
                            return.5 * (1 - Math.cos(Math.PI * A))
                        }
                    },
                    Expo: {
                        In: function(A) {
                            return 0 === A ? 0 : Math.pow(1024, A - 1)
                        },
                        Out: function(A) {
                            return 1 === A ? 1 : 1 - Math.pow(2, -10 * A)
                        },
                        InOut: function(A) {
                            return 0 === A ? 0 : 1 === A ? 1 : (A *= 2) < 1 ? .5 * Math.pow(1024, A - 1) : .5 * ( - Math.pow(2, -10 * (A - 1)) + 2)
                        }
                    },
                    Circ: {
                        In: function(A) {
                            return 1 - Math.sqrt(1 - A * A)
                        },
                        Out: function(A) {
                            return Math.sqrt(1 - --A * A)
                        },
                        InOut: function(A) {
                            return (A *= 2) < 1 ? -.5 * (Math.sqrt(1 - A * A) - 1) : .5 * (Math.sqrt(1 - (A -= 2) * A) + 1)
                        }
                    },
                    Elastic: {
                        In: function(A) {
                            var i, t = .1,
                            o = .4;
                            return 0 === A ? 0 : 1 === A ? 1 : (!t || 1 > t ? (t = 1, i = o / 4) : i = o * Math.asin(1 / t) / (2 * Math.PI), -(t * Math.pow(2, 10 * (A -= 1)) * Math.sin(2 * (A - i) * Math.PI / o)))
                        },
                        Out: function(A) {
                            var i, t = .1,
                            o = .4;
                            return 0 === A ? 0 : 1 === A ? 1 : (!t || 1 > t ? (t = 1, i = o / 4) : i = o * Math.asin(1 / t) / (2 * Math.PI), t * Math.pow(2, -10 * A) * Math.sin(2 * (A - i) * Math.PI / o) + 1)
                        },
                        InOut: function(A) {
                            var i, t = .1,
                            o = .4;
                            return 0 === A ? 0 : 1 === A ? 1 : (!t || 1 > t ? (t = 1, i = o / 4) : i = o * Math.asin(1 / t) / (2 * Math.PI), (A *= 2) < 1 ? -.5 * t * Math.pow(2, 10 * (A -= 1)) * Math.sin(2 * (A - i) * Math.PI / o) : t * Math.pow(2, -10 * (A -= 1)) * Math.sin(2 * (A - i) * Math.PI / o) * .5 + 1)
                        }
                    },
                    Back: {
                        In: function(A) {
                            var i = 1.70158;
                            return A * A * ((i + 1) * A - i)
                        },
                        Out: function(A) {
                            var i = 1.70158;
                            return--A * A * ((i + 1) * A + i) + 1
                        },
                        InOut: function(A) {
                            var i = 2.5949095;
                            return (A *= 2) < 1 ? .5 * A * A * ((i + 1) * A - i) : .5 * ((A -= 2) * A * ((i + 1) * A + i) + 2)
                        }
                    },
                    Bounce: {
                        In: function(A) {
                            return 1 - i.Bounce.Out(1 - A)
                        },
                        Out: function(A) {
                            return 1 / 2.75 > A ? 7.5625 * A * A: 2 / 2.75 > A ? 7.5625 * (A -= 1.5 / 2.75) * A + .75 : 2.5 / 2.75 > A ? 7.5625 * (A -= 2.25 / 2.75) * A + .9375 : 7.5625 * (A -= 2.625 / 2.75) * A + .984375
                        },
                        InOut: function(A) {
                            return.5 > A ? .5 * i.Bounce.In(2 * A) : .5 * i.Bounce.Out(2 * A - 1) + .5
                        }
                    }
                }),
                i.now = L,
                i
            })
        }).call(i,
        function() {
            return this
        } ())
    },
    4 : function(A, i, t) {
        var o, e; (function(t) {
            /*!
	 * VERSION: 0.7.0
	 * DATE: 2015-12-20
	 * GIT:https://github.com/shrekshrek/css3d-engine
	 *
	 * @author: Shrek.wang, shrekshrek@gmail.com
	 **/
            !
            function(n) {
                var s = "object" == typeof self && self.self == self && self || "object" == typeof t && t.global == t && t;
                o = [i],
                e = function(A) {
                    s.C3D = n(s, A)
                }.apply(i, o),
                !(void 0 !== e && (A.exports = e))
            } (function(A, i) {
                function t(A) {
                    return Math.round(A)
                }
                function o(A) {
                    return A.replace(/\b(\w)|\s(\w)/g,
                    function(A) {
                        return A.toUpperCase()
                    })
                }
                function e(A) {
                    var t;
                    switch (A.type) {
                    case "sprite":
                        t = new i.Sprite(A.el ? {
                            el: A.el
                        }: void 0);
                        break;
                    case "plane":
                        t = new i.Plane(A.el ? {
                            el: A.el
                        }: void 0);
                        break;
                    case "cube":
                        t = new i.Cube(A.el ? {
                            el: A.el
                        }: void 0)
                    }
                    if (A.size && t.size.apply(t, A.size), A.position && t.position.apply(t, A.position), A.rotation && t.rotation.apply(t, A.rotation), A.scale && t.scale.apply(t, A.scale), A.origin && t.origin.apply(t, A.origin), A.visibility && t.visibility.apply(t, A.visibility), A.material && t.material.apply(t, A.material), A.filter && t.filter.apply(t, A.filter), A.name && t.name.apply(t, [A.name]), t.update(), A.children) for (var o = 0,
                    n = A.children.length; n > o; o++) {
                        var s = A.children[o],
                        a = e(s);
                        t.addChild(a)
                    }
                    return t
                }
                var n = function(A) {
                    var i = [];
                    for (var t in A) i.push(t);
                    return i
                },
                s = function(A) {
                    var i = arguments.length;
                    if (2 > i || null == A) return A;
                    for (var t = 1; i > t; t++) for (var o = arguments[t], e = n(o), s = e.length, a = 0; s > a; a++) {
                        var r = e[a];
                        A[r] = o[r]
                    }
                    return A
                },
                a = function(A, i) {
                    var t, o = this;
                    t = A && Object.prototype.hasOwnProperty.call(A, "constructor") ? A.constructor: function() {
                        return o.apply(this, arguments)
                    },
                    s(t, o, i);
                    var e = function() {
                        this.constructor = t
                    };
                    return e.prototype = o.prototype,
                    t.prototype = new e,
                    A && s(t.prototype, A),
                    t.__super__ = o.prototype,
                    t
                },
                r = "";
                return function() {
                    var A = document.createElement("div"),
                    i = ["Webkit", "Moz", "Ms", "O"];
                    for (var t in i) if (i[t] + "Transform" in A.style) {
                        r = i[t];
                        break
                    }
                } (),
                i.getRandomColor = function() {
                    return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice( - 6)
                },
                i.rgb2hex = function(A, i, t) {
                    return (A << 16 | i << 8 | t).toString(16)
                },
                i.hex2rgb = function(A) {
                    var i = Math.floor("0x" + A),
                    t = i >> 16 & 255,
                    o = i >> 8 & 255,
                    e = 255 & i;
                    return [t, o, e]
                },
                i.Object = function() {
                    this.initialize.apply(this, arguments)
                },
                s(i.Object.prototype, {
                    x: 0,
                    y: 0,
                    z: 0,
                    position: function(A, i, t) {
                        switch (arguments.length) {
                        case 1:
                            this.x = A,
                            this.y = A,
                            this.z = A;
                            break;
                        case 2:
                            this.x = A,
                            this.y = i;
                            break;
                        case 3:
                            this.x = A,
                            this.y = i,
                            this.z = t
                        }
                        return this
                    },
                    move: function(A, i, t) {
                        switch (arguments.length) {
                        case 1:
                            this.x += A,
                            this.y += A,
                            this.z += A;
                            break;
                        case 2:
                            this.x += A,
                            this.y += i;
                            break;
                        case 3:
                            this.x += A,
                            this.y += i,
                            this.z += t
                        }
                        return this
                    },
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    rotation: function(A, i, t) {
                        switch (arguments.length) {
                        case 1:
                            this.rotationX = A,
                            this.rotationY = A,
                            this.rotationZ = A;
                            break;
                        case 2:
                            this.rotationX = A,
                            this.rotationY = i;
                            break;
                        case 3:
                            this.rotationX = A,
                            this.rotationY = i,
                            this.rotationZ = t
                        }
                        return this
                    },
                    rotate: function(A, i, t) {
                        switch (arguments.length) {
                        case 1:
                            this.rotationX += A,
                            this.rotationY += A,
                            this.rotationZ += A;
                            break;
                        case 2:
                            this.rotationX += A,
                            this.rotationY += i;
                            break;
                        case 3:
                            this.rotationX += A,
                            this.rotationY += i,
                            this.rotationZ += t
                        }
                        return this
                    },
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1,
                    scale: function(A, i, t) {
                        switch (arguments.length) {
                        case 1:
                            this.scaleX = A,
                            this.scaleY = A,
                            this.scaleZ = A;
                            break;
                        case 2:
                            this.scaleX = A,
                            this.scaleY = i;
                            break;
                        case 3:
                            this.scaleX = A,
                            this.scaleY = i,
                            this.scaleZ = t
                        }
                        return this
                    },
                    width: 0,
                    height: 0,
                    depth: 0,
                    size: function(A, i, t) {
                        switch (arguments.length) {
                        case 1:
                            this.width = A,
                            this.height = A,
                            this.depth = A;
                            break;
                        case 2:
                            this.width = A,
                            this.height = i;
                            break;
                        case 3:
                            this.width = A,
                            this.height = i,
                            this.depth = t
                        }
                        return this
                    },
                    originX: 0,
                    originY: 0,
                    originZ: 0,
                    _orgO: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    _orgT: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    _orgF: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    origin: function(A, i, t) {
                        switch (arguments.length) {
                        case 1:
                            this.originX = A,
                            this.originY = A,
                            this.originZ = A;
                            break;
                        case 2:
                            this.originX = A,
                            this.originY = i;
                            break;
                        case 3:
                            this.originX = A,
                            this.originY = i,
                            this.originZ = t
                        }
                        return this
                    },
                    _name: "",
                    name: function(A) {
                        return this._name = A,
                        this
                    },
                    initialize: function() {
                        this.x = 0,
                        this.y = 0,
                        this.z = 0,
                        this.rotationX = 0,
                        this.rotationY = 0,
                        this.rotationZ = 0,
                        this.scaleX = 1,
                        this.scaleY = 1,
                        this.scaleZ = 1,
                        this.width = 0,
                        this.height = 0,
                        this.depth = 0,
                        this.originX = "50%",
                        this.originY = "50%",
                        this.originZ = "0px",
                        this._orgO = {
                            x: "50%",
                            y: "50%",
                            z: "0px"
                        },
                        this._orgT = {
                            x: "-50%",
                            y: "-50%",
                            z: "0px"
                        },
                        this._orgF = {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        this.children = [],
                        this._name = ""
                    },
                    parent: null,
                    children: null,
                    addChild: function(A) {
                        if (null != A.parent && A.parent.removeChild(A), "" != A._name) {
                            if (void 0 !== this[A._name]) throw A._name + " already exist!";
                            this[A._name] = A
                        }
                        return this.children.push(A),
                        A.parent = this,
                        this
                    },
                    removeChild: function(A) {
                        for (var i = this.children.length - 1; i >= 0; i--) if (this.children[i] === A) return "" != A._name && delete this[A._name],
                        this.children.splice(i, 1),
                        A.parent = null,
                        this;
                        return this
                    },
                    removeAllChild: function() {
                        for (var A = this.children.length - 1; A >= 0; A--) {
                            var i = this.children[A];
                            "" != i._name && delete this[i._name],
                            i.parent = null
                        }
                        return this.children = [],
                        this
                    },
                    remove: function() {
                        return null != this.parent && this.parent.removeChild(this),
                        this
                    }
                }),
                i.Object.extend = a,
                i.Sprite = i.Object.extend({
                    el: null,
                    alpha: 1,
                    visible: !0,
                    mat: null,
                    initialize: function(A) {
                        i.Sprite.__super__.initialize.apply(this, [A]),
                        this.alpha = 1,
                        this.visible = !0;
                        var t;
                        if (A && A.el) switch (typeof A.el) {
                        case "string":
                            t = document.createElement("div"),
                            t.innerHTML = A.el;
                            break;
                        case "object":
                            1 === A.el.nodeType && (t = A.el)
                        }
                        t || (t = document.createElement("div")),
                        t.style.position = "absolute",
                        t.style[r + "Transform"] = "translateZ(0px)",
                        t.style[r + "TransformStyle"] = "preserve-3d",
                        this.el = t,
                        t.le = this
                    },
                    update: function() {
                        return this.updateS(),
                        this.updateM(),
                        this.updateO(),
                        this.updateT(),
                        this.updateV(),
                        this
                    },
                    updateS: function() {
                        return this
                    },
                    updateM: function() {
                        if (!this.mat) return this;
                        for (var A in this.mat) switch (A) {
                        case "bothsides":
                            this.el.style[r + "BackfaceVisibility"] = this.mat[A] ? "visible": "hidden";
                            break;
                        case "image":
                            this.el.style["background" + o(A)] = "" !== this.mat[A] ? "url(" + this.mat[A] + ")": "";
                            break;
                        default:
                            this.el.style["background" + o(A)] = this.mat[A]
                        }
                        return this
                    },
                    updateO: function() {
                        if ("number" == typeof this.originX) {
                            var A = this.originX - this._orgF.x;
                            this._orgO.x = A + "px",
                            this._orgT.x = -A + "px"
                        } else this._orgO.x = this.originX,
                        this._orgT.x = "-" + this.originX;
                        if ("number" == typeof this.originY) {
                            var i = this.originY - this._orgF.y;
                            this._orgO.y = i + "px",
                            this._orgT.y = -i + "px"
                        } else this._orgO.y = this.originY,
                        this._orgT.y = "-" + this.originY;
                        if ("number" == typeof this.originZ) {
                            var t = this.originZ - this._orgF.z;
                            this._orgO.z = t + "px",
                            this._orgT.z = -t + "px"
                        } else this._orgO.z = this._orgT.z = "0px";
                        return this.el.style[r + "TransformOrigin"] = this._orgO.x + " " + this._orgO.y + " " + this._orgO.z,
                        this
                    },
                    updateT: function() {
                        return this.el.style[r + "Transform"] = "translate3d(" + this._orgT.x + ", " + this._orgT.y + ", " + this._orgT.z + ") translate3d(" + this.x + "px," + this.y + "px," + this.z + "px) rotateX(" + this.rotationX % 360 + "deg) rotateY(" + this.rotationY % 360 + "deg) rotateZ(" + this.rotationZ % 360 + "deg) scale3d(" + this.scaleX + ", " + this.scaleY + ", " + this.scaleZ + ") ",
                        this
                    },
                    updateV: function() {
                        return this.el.style.opacity = this.alpha,
                        this.el.style.display = this.visible ? "block": "none",
                        this
                    },
                    addChild: function(A) {
                        return i.Sprite.__super__.addChild.apply(this, [A]),
                        this.el && A.el && this.el.appendChild(A.el),
                        this
                    },
                    removeChild: function(A) {
                        for (var i = this.children.length - 1; i >= 0; i--) if (this.children[i] === A) return "" != A._name && delete this[A._name],
                        this.children.splice(i, 1),
                        A.parent = null,
                        this.el.removeChild(A.el),
                        this;
                        return this
                    },
                    removeAllChild: function() {
                        for (var A = this.children.length - 1; A >= 0; A--) {
                            var i = this.children[A];
                            "" != i._name && delete this[i._name],
                            i.parent = null,
                            this.el.removeChild(i.el)
                        }
                        return this.children = [],
                        this
                    },
                    on: function(A) {
                        if ("object" == typeof A) for (var i in A) this.el.addEventListener(i, A[i], !1);
                        else 2 === arguments.length ? this.el.addEventListener(arguments[0], arguments[1], !1) : 3 === arguments.length && this.el.addEventListener(arguments[0], arguments[1], arguments[2]);
                        return this
                    },
                    off: function(A) {
                        if ("object" == typeof A) for (var i in A) this.el.removeEventListener(i, A[i], !1);
                        else 2 === arguments.length && this.el.removeEventListener(arguments[0], arguments[1], !1);
                        return this
                    },
                    buttonMode: function(A) {
                        return this.el.style.cursor = A ? "pointer": "auto",
                        this
                    },
                    material: function(A) {
                        return this.mat = A,
                        this
                    },
                    visibility: function(A) {
                        return void 0 !== A.visible && (this.visible = A.visible),
                        void 0 !== A.alpha && (this.alpha = A.alpha),
                        this
                    }
                }),
                i.Stage = i.Sprite.extend({
                    camera: null,
                    fov: null,
                    __rfix: null,
                    __pfix: null,
                    initialize: function(A) {
                        i.Stage.__super__.initialize.apply(this, [A]),
                        A && A.el || (this.el.style.top = "0px", this.el.style.left = "0px", this.el.style.width = "0px", this.el.style.height = "0px"),
                        this.el.style[r + "Perspective"] = "800px",
                        this.el.style[r + "TransformStyle"] = "flat",
                        this.el.style[r + "Transform"] = "",
                        this.el.style.overflow = "hidden",
                        this.__rfix = new i.Sprite,
                        this.el.appendChild(this.__rfix.el),
                        this.__pfix = new i.Sprite,
                        this.__rfix.el.appendChild(this.__pfix.el),
                        this.setCamera(new i.Camera)
                    },
                    updateS: function() {
                        return this.el.style.width = t(this.width) + "px",
                        this.el.style.height = t(this.height) + "px",
                        this
                    },
                    updateT: function() {
                        return this.fov = t(.5 / Math.tan(.5 * this.camera.fov / 180 * Math.PI) * this.height),
                        this.el.style[r + "Perspective"] = this.fov + "px",
                        this.__rfix.position(t(this.width / 2), t(this.height / 2), this.fov).rotation( - this.camera.rotationX, -this.camera.rotationY, -this.camera.rotationZ).updateT(),
                        this.__pfix.position( - this.camera.x, -this.camera.y, -this.camera.z).updateT(),
                        this
                    },
                    addChild: function(A) {
                        return this.__pfix.addChild(A),
                        this
                    },
                    removeChild: function(A) {
                        return this.__pfix.removeChild(A),
                        this
                    },
                    setCamera: function(A) {
                        return this.camera && (this.camera.stage = null),
                        this.camera = A,
                        this.camera.stage = this,
                        this
                    }
                }),
                i.Camera = i.Object.extend({
                    fov: null,
                    stage: null,
                    initialize: function(A) {
                        i.Camera.__super__.initialize.apply(this, [A]),
                        this.fov = 75
                    },
                    update: function() {
                        return this.updateT(),
                        this
                    },
                    updateS: function() {
                        return this
                    },
                    updateM: function() {
                        return this
                    },
                    updateT: function() {
                        return this.stage && this.stage.updateT(),
                        this
                    },
                    updateV: function() {
                        return this
                    }
                }),
                i.Plane = i.Sprite.extend({
                    flt: null,
                    initialize: function(A) {
                        i.Plane.__super__.initialize.apply(this, [A])
                    },
                    update: function() {
                        return i.Plane.__super__.update.apply(this),
                        this.updateF(),
                        this
                    },
                    updateS: function() {
                        return this.el.style.width = t(this.width) + "px",
                        this.el.style.height = t(this.height) + "px",
                        this
                    },
                    updateF: function() {
                        if (!this.flt) return this;
                        var A = "";
                        for (var i in this.flt) A += "" !== this.flt[i] ? i + "(" + this.flt[i].join(",") + ")": "";
                        return "" !== A && (this.el.style[r + "Filter"] = A),
                        this
                    },
                    filter: function(A) {
                        return this.flt = A,
                        this
                    }
                }),
                i.Cube = i.Sprite.extend({
                    front: null,
                    back: null,
                    left: null,
                    right: null,
                    up: null,
                    down: null,
                    flt: null,
                    initialize: function(A) {
                        i.Cube.__super__.initialize.apply(this, [A]),
                        this.front = new i.Plane,
                        this.addChild(this.front),
                        this.back = new i.Plane,
                        this.addChild(this.back),
                        this.left = new i.Plane,
                        this.addChild(this.left),
                        this.right = new i.Plane,
                        this.addChild(this.right),
                        this.up = new i.Plane,
                        this.addChild(this.up),
                        this.down = new i.Plane,
                        this.addChild(this.down)
                    },
                    update: function() {
                        return i.Cube.__super__.update.apply(this),
                        this.updateF(),
                        this
                    },
                    updateS: function() {
                        var A = t(this.width),
                        i = t(this.height),
                        o = t(this.depth);
                        return this._orgF.x = this.width / 2,
                        this._orgF.y = this.height / 2,
                        this._orgF.z = this.depth / 2,
                        this.front.size(A, i, 0).position(0, 0, -o / 2).rotation(0, 0, 0).updateS().updateT(),
                        this.back.size(A, i, 0).position(0, 0, o / 2).rotation(0, 180, 0).updateS().updateT(),
                        this.left.size(o, i, 0).position( - A / 2, 0, 0).rotation(0, 90, 0).updateS().updateT(),
                        this.right.size(o, i, 0).position(A / 2, 0, 0).rotation(0, -90, 0).updateS().updateT(),
                        this.up.size(A, o, 0).position(0, -i / 2, 0).rotation( - 90, 0, 0).updateS().updateT(),
                        this.down.size(A, o, 0).position(0, i / 2, 0).rotation(90, 0, 0).updateS().updateT(),
                        this
                    },
                    updateM: function() {
                        if (!this.mat) return this;
                        for (var A in this.mat) switch (A) {
                        case "front":
                        case "back":
                        case "left":
                        case "right":
                        case "up":
                        case "down":
                            this[A].material({
                                image:
                                this.mat[A]
                            }).updateM();
                            break;
                        default:
                            this.front.material(this.mat).updateM(),
                            this.back.material(this.mat).updateM(),
                            this.left.material(this.mat).updateM(),
                            this.right.material(this.mat).updateM(),
                            this.up.material(this.mat).updateM(),
                            this.down.material(this.mat).updateM()
                        }
                        return this
                    },
                    updateF: function() {
                        return this.flt ? (this.front.filter(this.flt).updateF(), this.back.filter(this.flt).updateF(), this.left.filter(this.flt).updateF(), this.right.filter(this.flt).updateF(), this.up.filter(this.flt).updateF(), this.down.filter(this.flt).updateF(), this) : this
                    },
                    filter: function(A) {
                        return this.flt = A,
                        this
                    }
                }),
                i.create = function(A) {
                    var i;
                    switch (typeof A) {
                    case "array":
                        i = {
                            type: "sprite",
                            children: A
                        };
                        break;
                    case "object":
                        i = A;
                        break;
                    default:
                        return
                    }
                    return e(i)
                },
                i
            })
        }).call(i,
        function() {
            return this
        } ())
    },
    5 : function(A, i, t) {
        var o, e; (function(n) {
            /*!
	 * VERSION: 0.1.0
	 * DATE: 2015-11-10
	 * GIT:https://github.com/shrekshrek/jstimeline
	 *
	 * @author: Shrek.wang, shrekshrek@gmail.com
	 **/
            !
            function(s) {
                var a = "object" == typeof self && self.self == self && self || "object" == typeof n && n.global == n && n;
                o = [t(2), i],
                e = function(A, i) {
                    a.JTL = s(a, i, A)
                }.apply(i, o),
                !(void 0 !== e && (A.exports = e))
            } (function(A, i, t) {
                function o(A, i) {
                    for (var t in i) A[t] = i[t]
                }
                function e() {
                    r = !0;
                    var A = a.length;
                    if (0 === A) return void(r = !1);
                    for (var i = t.now(), o = A - 1; o >= 0; o--) a[o]._update(i);
                    s(e)
                }
                function n() {
                    this.initialize.apply(this, arguments)
                }
                var s = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
                function(A) {
                    window.setTimeout(A, 1e3 / 60)
                },
                a = [],
                r = !1;
                return o(n.prototype, {
                    initialize: function() {
                        this.labels = [],
                        this.labelTime = 0,
                        this.anchors = [],
                        this.anchorId = 0,
                        this.tweens = [],
                        this.isPlaying = !1,
                        this.curTime = 0,
                        this.lastTime = 0
                    },
                    _update: function(A) {
                        var i = A - this.lastTime;
                        return this.lastTime = A,
                        this.isPlaying ? (this.curTime += i, void this._checkHandler()) : !0
                    },
                    _addSelf: function() {
                        a.unshift(this),
                        this.lastTime = t.now(),
                        r ? this._update(this.lastTime) : e()
                    },
                    _removeSelf: function() {
                        var A = a.indexOf(this); - 1 !== A && a.splice(A, 1)
                    },
                    _checkHandler: function() {
                        var A = this.anchors.length;
                        if (! (this.anchorId >= A)) {
                            var i = this.anchors[this.anchorId];
                            this.curTime >= 1e3 * i.time && (this.anchorId == A - 1 ? (this._removeSelf(), this.isPlaying = !1, i.handler.apply()) : (i.handler.apply(), this.anchorId++, this._checkHandler()))
                        }
                    },
                    _parseTweenTime: function(A, i, t) {
                        var o = Math.max(A, 0),
                        e = Math.max(i.delay || 0, 0),
                        n = Math.max(0, Math.floor(i.repeat || 0)),
                        s = Math.max(i.repeatDelay || 0, 0),
                        a = e + (s + o) * (n + 1),
                        r = this._parsePosition(t);
                        return this.labelTime = Math.max(this.labelTime, r + a),
                        r
                    },
                    _parsePosition: function(A) {
                        if (void 0 == A) return this.labelTime;
                        var i = 0;
                        switch (typeof A) {
                        case "string":
                            var t = Math.max(A.indexOf("+="), A.indexOf("-="));
                            if ( - 1 != t) {
                                var o = A.substr(0, t),
                                e = A.substr(t, 2),
                                n = parseFloat(A.substr(t + 2));
                                switch (e) {
                                case "+=":
                                    i = this.getLabelTime(o) + n;
                                    break;
                                case "-=":
                                    i = this.getLabelTime(o) - n
                                }
                            } else i = this.getLabelTime(A);
                            break;
                        case "number":
                            i = A
                        }
                        return i
                    },
                    _addAnchor: function(A, i) {
                        var t = this.anchors.length;
                        if (0 == t) return void this.anchors.push({
                            time: i,
                            handler: A
                        });
                        if (t > 0) for (var o = t - 1; o >= 0; o--) {
                            var e = this.anchors[o];
                            if (i >= e.time) return void this.anchors.splice(o + 1, 0, {
                                time: i,
                                handler: A
                            })
                        }
                    },
                    _addTween: function(A) {
                        if (void 0 != A.length) for (var i in A) this.tweens.unshift(A[i]);
                        else this.tweens.unshift(A)
                    },
                    _removeTween: function(A) {
                        var i = this.tweens.indexOf(A); - 1 !== i && this.tweens.splice(i, 1)
                    },
                    fromTo: function(A, i, o, e, n) {
                        var s = this,
                        a = e.onEnd;
                        e.onEnd = function(A) {
                            s._removeTween(this),
                            a && a.apply(this, A)
                        };
                        var r = function() {
                            var n = t.fromTo(A, i, o, e);
                            s._addTween(n)
                        },
                        g = this._parseTweenTime(i, e, n);
                        return this._addAnchor(r, g),
                        this
                    },
                    from: function(A, i, o, e) {
                        var n = this,
                        s = o.onEnd;
                        o.onEnd = function(A) {
                            n._removeTween(this),
                            s && s.apply(this, A)
                        };
                        var a = function() {
                            var e = t.from(A, i, o);
                            n._addTween(e)
                        },
                        r = this._parseTweenTime(i, o, e);
                        return this._addAnchor(a, r),
                        this
                    },
                    to: function(A, i, o, e) {
                        var n = this,
                        s = o.onEnd;
                        o.onEnd = function(A) {
                            n._removeTween(this),
                            s && s.apply(this, A)
                        };
                        var a = function() {
                            var e = t.to(A, i, o);
                            n._addTween(e)
                        },
                        r = this._parseTweenTime(i, o, e);
                        return this._addAnchor(a, r),
                        this
                    },
                    kill: function(A, i) {
                        var o = function() {
                            t.kill(A, !0)
                        },
                        e = this._parseTweenTime(0, {},
                        i);
                        return this._addAnchor(o, e),
                        this
                    },
                    add: function(A, i) {
                        var t = this._parsePosition(i);
                        switch (typeof A) {
                        case "function":
                            this._addAnchor(A, t);
                            break;
                        case "string":
                            this.addLabel(A, t);
                            break;
                        default:
                            throw "add action is wrong!!!"
                        }
                        return this
                    },
                    addLabel: function(A, i) {
                        this.removeLabel(A);
                        var t = this._parsePosition(i);
                        return this.labels.push({
                            name: A,
                            time: t
                        }),
                        this
                    },
                    removeLabel: function(A) {
                        for (var i = this.labels.length,
                        t = i - 1; t >= 0; t--) {
                            var o = this.labels[t];
                            if (A == o.name) return this.labels.splice(t, 1),
                            this
                        }
                        return this
                    },
                    getLabelTime: function(A) {
                        for (var i = this.labels.length,
                        t = i - 1; t >= 0; t--) {
                            var o = this.labels[t];
                            if (A == o.name) return o.time
                        }
                        return this.labelTime
                    },
                    totalTime: function() {
                        return this.labelTime
                    },
                    play: function(A) {
                        if (!this.isPlaying) {
                            for (var i = this.tweens.length,
                            o = i - 1; o >= 0; o--) this.tweens[o].play();
                            this._addSelf(),
                            this.isPlaying = !0,
                            this.lastTime = t.now(),
                            void 0 !== A && (this.seek(A), this._update(this.lastTime))
                        }
                    },
                    pause: function() {
                        if (this.isPlaying) {
                            for (var A = this.tweens.length,
                            i = A - 1; i >= 0; i--) this.tweens[i].pause();
                            this._removeSelf(),
                            this.isPlaying = !1
                        }
                    },
                    seek: function(A) {
                        var i = this._parsePosition(A);
                        this.curTime = 1e3 * i;
                        for (var t = this.anchors.length,
                        o = 0; t > o; o++) {
                            var e = this.anchors[o];
                            if (1e3 * e.time >= this.curTime) return void(this.anchorId = o)
                        }
                    },
                    clear: function() {
                        for (var A = this.tweens.length,
                        i = A - 1; i >= 0; i--) this.tweens[i].kill();
                        this.tweens = [],
                        this.curTime = 0,
                        this.lastTime = 0,
                        this.labels = [],
                        this.labelTime = 0,
                        this.anchors = [],
                        this.anchorId = 0
                    }
                }),
                o(i, {
                    create: function() {
                        return new n
                    },
                    kill: function(A) {
                        A.destroy()
                    }
                }),
                i
            })
        }).call(i,
        function() {
            return this
        } ())
    },
    6 : function(A, i, t) { (function(i) {
            var t = i.extend({},
            i.Events, {
                init: function() {
                    this.parseUA()
                },
                ua: null,
                parseUA: function() {
                    var A = navigator.userAgent,
                    i = navigator.userAgent.toLowerCase();
                    this.ua = {
                        trident: A.indexOf("Trident") > -1,
                        presto: A.indexOf("Presto") > -1,
                        webKit: A.indexOf("AppleWebKit") > -1,
                        gecko: A.indexOf("Gecko") > -1 && -1 == A.indexOf("KHTML"),
                        mobile: !!A.match(/AppleWebKit.*Mobile.*/),
                        ios: !!A.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                        android: A.indexOf("Android") > -1 || A.indexOf("Linux") > -1,
                        iPhone: A.indexOf("iPhone") > -1,
                        iPad: A.indexOf("iPad") > -1,
                        webApp: -1 == A.indexOf("Safari"),
                        iosv: A.substr(A.indexOf("iPhone OS") + 9, 3),
                        weixin: "micromessenger" == i.match(/MicroMessenger/i)
                    }
                },
                initOrientation: function() {
                    var A = this,
                    i = 0;
                    window.addEventListener("deviceorientation",
                    function(A) {
                        i = A.gamma > 90 ? .3 * (A.gamma - 180) : .3 * A.gamma,
                        i = Math.max(Math.min(i, 15), -15)
                    },
                    !1),
                    setInterval(function() {
                        A.trigger("orient_change", i)
                    },
                    1e3 / 30)
                }
            });
            A.exports = t
        }).call(i, t(1))
    },
    7 : function(A, i, t) { (function(i) {
            var t = i.extend({},
            {
                PAGE: "page",
                PAGE2: "page2",
                EVENT: "event",
                all: function(A, i) {
                    this.ga(A, i),
                    this.mz(A, i)
                },
                ga: function(A, i) {
                    if ("function" == typeof ga) switch (A) {
                    case this.PAGE:
                        ga("send", "pageview", i[0]);
                        break;
                    case this.PAGE2:
                        ga("send", "event", i[0], i[0], {
                            nonInteraction: 1
                        });
                        break;
                    case this.EVENT:
                        switch (i.length) {
                        case 1:
                            ga("send", "event", i[0]);
                            break;
                        case 2:
                            ga("send", "event", i[0], i[1]);
                            break;
                        case 3:
                            ga("send", "event", i[0], i[1], i[2])
                        }
                    }
                },
                mz: function(A, i) {
                    switch (A) {
                    case this.EVENT:
                        window._CiQ11541 = window._CiQ11541 || [],
                        window._CiQ11541.push(["_trackEvent", {
                            type: 1,
                            labels: [{
                                "按钮名称": i[2]
                            }],
                            values: [{
                                "数量": 1
                            }]
                        }]),
                        window.CClickiV3 && window.CClickiV3[11541] && window.CClickiV3[11541]._flushObserver(function() {})
                    }
                }
            });
            A.exports = t
        }).call(i, t(1))
    },
    8 : function(A, i) {
        A.exports = "data:image/png;base64,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"
                      },//白圆环
    13 : function(A, i, t) { (function(i) {
            var t = i.extend({},
            i.Events, {
                START: "start",
                UP: "up",
                DOWN: "down",
                LEFT: "left",
                RIGHT: "right",
                TAP: "tap",
                MOVE: "move",
                stage: null,
                oldTouchPos: {
                    x: 0,
                    y: 0
                },
                newTouchPos: {
                    x: 0,
                    y: 0
                },
                init: function() {
                    this.stage = $("body"),
                    this.stage.on("touchstart", this.onTouchStart)
                },
                clear: function() {
                    this.stage.off("touchstart", this.onTouchStart),
                    this.stage.off("touchmove", this.onTouchMove),
                    this.stage.off("touchend", this.onTouchEnd)
                },
                onTouchStart: function(A) {
                    return A = A.touches[0],
                    t.oldTouchPos.x = A.clientX,
                    t.oldTouchPos.y = A.clientY,
                    t.newTouchPos.x = A.clientX,
                    t.newTouchPos.y = A.clientY,
                    t.stage.on("touchmove", t.onTouchMove),
                    t.stage.on("touchend", t.onTouchEnd),
                    t.trigger(t.START),
                    !1
                },
                onTouchMove: function(A) {
                    return A = A.touches[0],
                    t.newTouchPos.x = A.clientX,
                    t.newTouchPos.y = A.clientY,
                    t.checkGesture(),
                    !1
                },
                onTouchEnd: function() {
                    t.checkGesture(),
                    t.stage.off("touchmove", t.onTouchMove),
                    t.stage.off("touchend", t.onTouchEnd)
                },
                checkGesture: function() {
                    var A = 100,
                    i = 10,
                    t = this.newTouchPos.x - this.oldTouchPos.x,
                    o = this.newTouchPos.y - this.oldTouchPos.y,
                    e = "";
                    Math.abs(t) > Math.abs(o) ? -A > t ? e = this.LEFT: t > A ? e = this.RIGHT: Math.abs(t) < i && (e = this.TAP) : -A > o ? e = this.UP: o > A ? e = this.DOWN: Math.abs(o) < i && (e = this.TAP),
                    this.trigger(this.MOVE, {
                        deltaX: t,
                        deltaY: o
                    }),
                    "" !== e && this.trigger(e, {
                        deltaX: t,
                        deltaY: o
                    })
                }
            });
            A.exports = t
        }).call(i, t(1))
    },
    15 : function(A, i) {
        A.exports = "data:image/jpg;base64,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+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAAAAAAAAAIAAThCSU0EAgAAAAAABAAAAAA4QklNBDAAAAAAAAIBAThCSU0ELQAAAAAABgABAAAAAzhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAAM/AAAABgAAAAAAAAAAAAAEsAAABXgAAAAFZypoB5iYAC0AMQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAFeAAABLAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAABLAAAAAAUmdodGxvbmcAAAV4AAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVlbnVtAAAACkVTbGljZVR5cGUAAAAASW1nIAAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAASwAAAAAFJnaHRsb25nAAAFeAAAAAN1cmxURVhUAAAAAQAAAAAAAG51bGxURVhUAAAAAQAAAAAAAE1zZ2VURVhUAAAAAQAAAAAABmFsdFRhZ1RFWFQAAAABAAAAAAAOY2VsbFRleHRJc0hUTUxib29sAQAAAAhjZWxsVGV4dFRFWFQAAAABAAAAAAAJaG9yekFsaWduZW51bQAAAA9FU2xpY2VIb3J6QWxpZ24AAAAHZGVmYXVsdAAAAAl2ZXJ0QWxpZ25lbnVt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b2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxNy0wNS0xNVQyMjoxOToyOSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxNy0wNS0xNVQyMjoxOToyOSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTctMDUtMTVUMjI6MTk6MjkrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzMxNUMyRTc3NzM5RTcxMUJERjdEQjc2NTM5N0JDMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzIxNUMyRTc3NzM5RTcxMUJERjdEQjc2NTM5N0JDMDMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MjE1QzJFNzc3MzlFNzExQkRGN0RCNzY1Mzk3QkMwMyIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjcyMTVDMkU3NzczOUU3MTFCREY3REI3NjUzOTdCQzAzIiBzdEV2dDp3aGVuPSIyMDE3LTA1LTE1VDIyOjE5OjI5KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzMxNUMyRTc3NzM5RTcxMUJERjdEQjc2NTM5N0JDMDMiIHN0RXZ0OndoZW49IjIwMTctMDUtMTVUMjI6MTk6MjkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+IMWElDQ19QUk9GSUxFAAEBAAAMSExpbm8CEAAAbW50clJHQiBYWVogB84AAgAJAAYAMQAAYWNzcE1TRlQAAAAASUVDIHNSR0IAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1IUCAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARY3BydAAAAVAAAAAzZGVz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"
                           },//背景深蓝
    18 : function(A, i) {
        A.exports = $
    },
    22 : function(A, i, t) { (function(i, o, e, n) {
            var s = t(7);
            A.exports = i.extend({},
            i.Events, {
                init: function(A) {
                    var i = this;
                    s.all(s.PAGE2, ["Loading"]),
                    _mz_wx_view(1),
                    this.stage = A,
                    this.isOpen = !1,
                    this.main = o.create({
                        type: "sprite",
                        children: [{
                            type: "plane",
                            name: "circle",
                            size: [270, 270],
                            scale: [.4],
                            origin: [132, 135],
                            material: [{
                                image: t(8)
                            }]
                        },
                        {
                            type: "plane",
                            name: "arrow",
                            size: [40, 40],
                            visibility: [{
                                alpha: 0
                            }],
                            material: [{
                                image: t(60)
                            }]
                        },
                        {
                            type: "plane",
                            name: "info",
                            size: [100, 24],
                            origin: [50, 14]
                        },
                        {
                            type: "plane",
                            name: "circle2",
                            size: [270, 270],
                            origin: [132, 135],
                            visibility: [{
                                visible: !1
                            }],
                            material: [{
                                image: t(8)
                            }]
                        },
                        {
                            type: "plane",
                            name: "circle3",
                            size: [270, 270],
                            origin: [132, 135],
                            visibility: [{
                                visible: !1
                            }],
                            material: [{
                                image: t(8)
                            }]
                        }]
                    }),
                    this.stage.addChild(this.main),
                    e.set(this.main.info.el, {
                        textAlign: "center",
                        fontSize: 20
                    }),
                    this.main.info.el.innerHTML = "loading";
                    var a = n.create();
                    this.tl = a,
                    a.add("l1", .5),
                    a.to(this.main.circle, 1, {
                        scaleX: 1,
                        scaleY: 1,
                        ease: e.Quad.InOut,
                        onUpdate: function() {
                            this.target.updateT()
                        }
                    },
                    "l1+=0.05"),
                    a.to(this.main.arrow, .5, {
                        alpha: 1,
                        onUpdate: function() {
                            this.target.updateV()
                        }
                    },
                    "l1+=0.2"),
                    a.to(this.main.info, .5, {
                        alpha: 0,
                        onUpdate: function() {
                            this.target.updateV()
                        }
                    },
                    "l1+=0.2"),
                    a.add(function() {
                        i.isOpen = !0
                    });
                    var r = n.create();
                    this.tl2 = r,
                    r.add("l1", 0),
                    r.add(function() {},
                    "l1"),
                    r.add(function() {
                        e.to(i.main.circle, 1, {
                            z: 1e3,
                            ease: e.Quad.In,
                            onUpdate: function() {
                                this.target.updateT()
                            }
                        }),
                        i.main.circle2.visibility({
                            visible: !0
                        }).updateV(),
                        e.to(i.main.circle2, .5, {
                            z: -2e3,
                            ease: e.Quad.InOut,
                            onUpdate: function() {
                                this.target.updateT()
                            },
                            onEnd: function() {
                                e.to(this.target, .5, {
                                    z: 1e3,
                                    ease: e.Quad.In,
                                    onUpdate: function() {
                                        this.target.updateT()
                                    },
                                    onEnd: function() {
                                        this.target.remove()
                                    }
                                })
                            }
                        }),
                        i.main.circle3.visibility({
                            visible: !0
                        }).updateV(),
                        e.to(i.main.circle3, .7, {
                            z: -4e3,
                            ease: e.Quad.InOut,
                            onUpdate: function() {
                                this.target.updateT()
                            },
                            onEnd: function() {
                                e.to(this.target, .7, {
                                    z: 1e3,
                                    ease: e.Quad.In,
                                    onUpdate: function() {
                                        this.target.updateT()
                                    },
                                    onEnd: function() {
                                        this.target.remove(),
                                        i.stage.removeChild(i.main)
                                    }
                                })
                            }
                        })
                    },
                    "l1+=0.05"),
                    r.to(this.main.arrow, .5, {
                        alpha: 0,
                        onUpdate: function() {
                            this.target.updateV()
                        }
                    },
                    "l1+=0.2"),
                    r.add(function() {
                        clearInterval(i.iv)
                    }),
                    this.iv = setInterval(function() {
                        i.main.circle.rotationZ = Math.floor(360 * Math.random());.1 * Math.random() + .95;
                        i.main.circle.updateT()
                    },
                    1e3 / 30)
                },
                "in": function() {
                    this.tl.play()
                },
                out: function() {
                    this.isOpen = !1,
                    this.tl2.play()
                },
                progress: function(A) {
                    this.main.info.el.innerHTML = Math.floor(100 * A)
                }
            })
        }).call(i, t(1), t(4), t(2), t(5))
    },
    23 : function(A, i, t) { (function(i, t) {
            A.exports = i.extend({},
            i.Events, {
                showId: null,
                showMax: 3,
                init: function() {
                    var A = this;
                    $("#show .close").on("touchend",
                    function() {
                        A.showOff()
                    }),
                    $("#show .left").on("touchend",
                    function() {
                        ga("send", "event", "Click", "Product-Detail-Left", "Product-Detail-Left"),
                        A.showPrev()
                    }),
                    $("#show .right").on("touchend",
                    function() {
                        ga("send", "event", "Click", "Product-Detail-Right", "Product-Detail-Right"),
                        A.showNext()
                    })
                },
                showNext: function() {
                    var A = this.showId + 1;
                    this.showOn(A)
                },
                showPrev: function() {
                    var A = this.showId - 1;
                    this.showOn(A)
                },
                isShowing: !1,
                showOn: function(A) {
                    if (!this.isShowing && this.showId != A) {
                        ga("send", "pageview", "Product-Detail");
                        var i = this,
                        o = $("#show ul");
                        this.isShowing = !0,
                        -1 == A ? (o.css({
                            left: 640 * -this.showMax
                        }), this.showId = this.showMax - 1) : this.showId = A;
                        var e = $("#show"),
                        n = 0;
                        "none" == e.css("display") ? (e.css({
                            display: "block"
                        }), t.to(e, .3, {
                            opacity: 1
                        })) : n = .3,
                        t.to($("#show ul"), n, {
                            left: 640 * -this.showId,
                            ease: t.Quad.InOut,
                            onEnd: function() {
                                A == i.showMax && (this.target.style.left = 0, i.showId = 0),
                                i.isShowing = !1
                            }
                        })
                    }
                },
                showOff: function() {
                    this.showId = null,
                    t.to($("#show"), .3, {
                        opacity: 0,
                        onEnd: function() {
                            this.target.style.display = "none"
                        }
                    })
                }
            })
        }).call(i, t(1), t(2))
    },
    60 : function(A, i) {
        A.exports = "data:image/png;base64,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"
                    }//开始btn
});