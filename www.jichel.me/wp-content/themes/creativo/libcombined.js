function gf_reset_to_default(targetId, defaultValue) {
	var dateFields = jQuery(targetId).find(".gfield_date_month input, .gfield_date_day input, .gfield_date_year input, .gfield_date_dropdown_month select, .gfield_date_dropdown_day select, .gfield_date_dropdown_year select");
	if (dateFields.length > 0) return void dateFields.each(function () {
		var element = jQuery(this);
		if (defaultValue) {
			var key = "d";
			element.parents().hasClass("gfield_date_month") || element.parents().hasClass("gfield_date_dropdown_month") ? key = "m" : (element.parents().hasClass("gfield_date_year") || element.parents().hasClass("gfield_date_dropdown_year")) && (key = "y"), val = defaultValue[key]
		} else val = "";
		"SELECT" == element.prop("tagName") && "" != val && (val = parseInt(val)), element.val() != val ? element.val(val).trigger("change") : element.val(val)
	});
	var target = jQuery(targetId).find('select, input[type="text"]:not([id*="_shim"]), input[type="number"], textarea'),
		target_index = 0;
	target.each(function () {
		var val = "",
			element = jQuery(this);
		if ("gf_other_choice" == element.prev("input").attr("value")) val = element.attr("value");
		else if (jQuery.isArray(defaultValue)) val = defaultValue[target_index];
		else if (jQuery.isPlainObject(defaultValue)) {
			if (!(val = defaultValue[element.attr("name")])) {
				var inputId = element.attr("id").split("_").slice(2).join(".");
				val = defaultValue[inputId]
			}
		} else defaultValue && (val = defaultValue);
		element.is("select:not([multiple])") && !val && (val = element.find("option").not(":disabled").eq(0).val()), element.val() != val ? (element.val(val).trigger("change"), element.is("select") && element.next().hasClass("chosen-container") && element.trigger("chosen:updated")) : element.val(val), target_index++
	}), jQuery(targetId).find('input[type="radio"], input[type="checkbox"]:not(".copy_values_activated")').each(function () {
		var isChecked = !!jQuery(this).is(":checked"),
			doCheck = !!defaultValue && jQuery.inArray(jQuery(this).attr("id"), defaultValue) > -1;
		isChecked != doCheck && ("checkbox" == jQuery(this).attr("type") ? jQuery(this).trigger("click") : (jQuery(this).prop("checked", doCheck), jQuery(this).trigger("click").prop("checked", doCheck)))
	})
}! function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
	function s(a) {
		var b = a.length,
			c = n.type(a);
		return "function" !== c && !n.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
	}

	function x(a, b, c) {
		if (n.isFunction(b)) return n.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return n.grep(a, function (a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (w.test(b)) return n.filter(b, a, c);
			b = n.filter(b, a)
		}
		return n.grep(a, function (a) {
			return g.call(b, a) >= 0 !== c
		})
	}

	function D(a, b) {
		for (;
			(a = a[b]) && 1 !== a.nodeType;);
		return a
	}

	function G(a) {
		var b = F[a] = {};
		return n.each(a.match(E) || [], function (a, c) {
			b[c] = !0
		}), b
	}

	function I() {
		l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
	}

	function K() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function () {
				return {}
			}
		}), this.expando = n.expando + Math.random()
	}

	function P(a, b, c) {
		var d;
		if (void 0 === c && 1 === a.nodeType)
			if (d = "data-" + b.replace(O, "-$1").toLowerCase(), "string" == typeof (c = a.getAttribute(d))) {
				try {
					c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c)
				} catch (e) {}
				M.set(a, b, c)
			} else c = void 0;
		return c
	}

	function Z() {
		return !0
	}

	function $() {
		return !1
	}

	function _() {
		try {
			return l.activeElement
		} catch (a) {}
	}

	function jb(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function kb(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
	}

	function lb(a) {
		var b = gb.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function mb(a, b) {
		for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
	}

	function nb(a, b) {
		var c, d, e, f, g, h, i, j;
		if (1 === b.nodeType) {
			if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};
				for (e in j)
					for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
			}
			M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
		}
	}

	function ob(a, b) {
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
		return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
	}

	function pb(a, b) {
		var c = b.nodeName.toLowerCase();
		"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
	}

	function sb(b, c) {
		var d, e = n(c.createElement(b)).appendTo(c.body),
			f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
		return e.detach(), f
	}

	function tb(a) {
		var b = l,
			c = rb[a];
		return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
	}

	function xb(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]),
			c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
	}

	function yb(a, b) {
		return {
			get: function () {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}

	function Fb(a, b) {
		if (b in a) return b;
		for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length; e--;)
			if ((b = Eb[e] + c) in a) return b;
		return d
	}

	function Gb(a, b, c) {
		var d = Ab.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function Hb(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
		return g
	}

	function Ib(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = wb(a),
			g = "border-box" === n.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e;
			d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}

	function Jb(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}

	function Kb(a, b, c, d, e) {
		return new Kb.prototype.init(a, b, c, d, e)
	}

	function Sb() {
		return setTimeout(function () {
			Lb = void 0
		}), Lb = n.now()
	}

	function Tb(a, b) {
		var c, d = 0,
			e = {
				height: a
			};
		for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
		return b && (e.opacity = e.width = a), e
	}

	function Ub(a, b, c) {
		for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)
			if (d = e[f].call(c, b, a)) return d
	}

	function Vb(a, b, c) {
		var d, e, f, g, h, i, j, l = this,
			m = {},
			o = a.style,
			p = a.nodeType && S(a),
			q = L.get(a, "fxshow");
		c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
			h.unqueued || i()
		}), h.unqueued++, l.always(function () {
			l.always(function () {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), "inline" === ("none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j) && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
			o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
		}));
		for (d in b)
			if (e = b[d], Nb.exec(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
					if ("show" !== e || !q || void 0 === q[d]) continue;
					p = !0
				}
				m[d] = q && q[d] || n.style(a, d)
			} else j = void 0;
		if (n.isEmptyObject(m)) "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
		else {
			q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
				n(a).hide()
			}), l.done(function () {
				var b;
				L.remove(a, "fxshow");
				for (b in m) n.style(a, b, m[b])
			});
			for (d in m) g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function Wb(a, b) {
		var c, d, e, f, g;
		for (c in a)
			if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = n.cssHooks[d]) && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
	}

	function Xb(a, b, c) {
		var d, e, f = 0,
			g = Qb.length,
			h = n.Deferred().always(function () {
				delete i.elem
			}),
			i = function () {
				if (e) return !1;
				for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: n.extend({}, b),
				opts: n.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: Lb || Sb(),
				duration: c.duration,
				tweens: [],
				createTween: function (b, c) {
					var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function (b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (Wb(k, j.opts.specialEasing); g > f; f++)
			if (d = Qb[f].call(j, a, k, j.opts)) return d;
		return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}

	function rc(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(E) || [];
			if (n.isFunction(c))
				for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function sc(a, b, c, d) {
		function g(h) {
			var i;
			return e[h] = !0, n.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}
		var e = {},
			f = a === oc;
		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}

	function tc(a, b) {
		var c, d, e = n.ajaxSettings.flatOptions || {};
		for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		return d && n.extend(!0, a, d), a
	}

	function uc(a, b, c) {
		for (var d, e, f, g, h = a.contents, i = a.dataTypes;
			"*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		if (d)
			for (e in h)
				if (h[e] && h[e].test(d)) {
					i.unshift(e);
					break
				}
		if (i[0] in c) f = i[0];
		else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;
					break
				}
				g || (g = e)
			}
			f = f || g
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function vc(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1])
			for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		for (f = k.shift(); f;)
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if ("*" === f) f = i;
				else if ("*" !== i && i !== f) {
			if (!(g = j[i + " " + f] || j["* " + f]))
				for (e in j)
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						!0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
						break
					}
			if (!0 !== g)
				if (g && a.throws) b = g(b);
				else try {
					b = g(b)
				} catch (l) {
					return {
						state: "parsererror",
						error: g ? l : "No conversion from " + i + " to " + f
					}
				}
		}
		return {
			state: "success",
			data: b
		}
	}

	function Bc(a, b, c, d) {
		var e;
		if (n.isArray(b)) n.each(b, function (b, e) {
			c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== n.type(b)) d(a, b);
		else
			for (e in b) Bc(a + "[" + e + "]", b[e], c, d)
	}

	function Kc(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
	}
	var c = [],
		d = c.slice,
		e = c.concat,
		f = c.push,
		g = c.indexOf,
		h = {},
		i = h.toString,
		j = h.hasOwnProperty,
		k = {},
		l = a.document,
		m = "2.1.1",
		n = function (a, b) {
			return new n.fn.init(a, b)
		},
		r = function (a, b) {
			return b.toUpperCase()
		};
	n.fn = n.prototype = {
		jquery: m,
		constructor: n,
		selector: "",
		length: 0,
		toArray: function () {
			return d.call(this)
		},
		get: function (a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
		},
		pushStack: function (a) {
			var b = n.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function (a, b) {
			return n.each(this, a, b)
		},
		map: function (a) {
			return this.pushStack(n.map(this, function (b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function () {
			return this.pushStack(d.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor(null)
		},
		push: f,
		sort: c.sort,
		splice: c.splice
	}, n.extend = n.fn.extend = function () {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
			if (null != (a = arguments[h]))
				for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
		return g
	}, n.extend({
		expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (a) {
			throw new Error(a)
		},
		noop: function () {},
		isFunction: function (a) {
			return "function" === n.type(a)
		},
		isArray: Array.isArray,
		isWindow: function (a) {
			return null != a && a === a.window
		},
		isNumeric: function (a) {
			return !n.isArray(a) && a - parseFloat(a) >= 0
		},
		isPlainObject: function (a) {
			return "object" === n.type(a) && !a.nodeType && !n.isWindow(a) && !(a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf"))
		},
		isEmptyObject: function (a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		type: function (a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
		},
		globalEval: function (a) {
			var b, c = eval;
			(a = n.trim(a)) && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
		},
		camelCase: function (a) {
			return a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, r)
		},
		nodeName: function (a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function (a, b, c) {
			var e = 0,
				f = a.length,
				g = s(a);
			if (c) {
				if (g)
					for (; f > e && !1 !== b.apply(a[e], c); e++);
				else
					for (e in a)
						if (!1 === b.apply(a[e], c)) break
			} else if (g)
				for (; f > e && !1 !== b.call(a[e], e, a[e]); e++);
			else
				for (e in a)
					if (!1 === b.call(a[e], e, a[e])) break;
			return a
		},
		trim: function (a) {
			return null == a ? "" : (a + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
		},
		makeArray: function (a, b) {
			var c = b || [];
			return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
		},
		inArray: function (a, b, c) {
			return null == b ? -1 : g.call(b, a, c)
		},
		merge: function (a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
			return a.length = e, a
		},
		grep: function (a, b, c) {
			for (var e = [], f = 0, g = a.length, h = !c; g > f; f++) !b(a[f], f) !== h && e.push(a[f]);
			return e
		},
		map: function (a, b, c) {
			var d, f = 0,
				g = a.length,
				h = s(a),
				i = [];
			if (h)
				for (; g > f; f++) null != (d = b(a[f], f, c)) && i.push(d);
			else
				for (f in a) null != (d = b(a[f], f, c)) && i.push(d);
			return e.apply([], i)
		},
		guid: 1,
		proxy: function (a, b) {
			var c, e, f;
			return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
				return a.apply(b || this, e.concat(d.call(arguments)))
			}, f.guid = a.guid = a.guid || n.guid++, f) : void 0
		},
		now: Date.now,
		support: k
	}), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
		h["[object " + b + "]"] = b.toLowerCase()
	});
	var t = function (a) {
		function fb(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w, x;
			if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
			if (1 !== (k = b.nodeType) && 9 !== k) return [];
			if (p && !e) {
				if (f = _.exec(a))
					if (j = f[1]) {
						if (9 === k) {
							if (!(h = b.getElementById(j)) || !h.parentNode) return d;
							if (h.id === j) return d.push(h), d
						} else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
					} else {
						if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
						if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d
					}
				if (c.qsa && (!q || !q.test(a))) {
					if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
						for (o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length; l--;) o[l] = s + qb(o[l]);
						w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
					}
					if (x) try {
						return I.apply(d, w.querySelectorAll(x)), d
					} catch (y) {} finally {
						r || b.removeAttribute("id")
					}
				}
			}
			return i(a.replace(R, "$1"), b, d, e)
		}

		function gb() {
			function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
			}
			var a = [];
			return b
		}

		function hb(a) {
			return a[u] = !0, a
		}

		function ib(a) {
			var b = n.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function jb(a, b) {
			for (var c = a.split("|"), e = a.length; e--;) d.attrHandle[c[e]] = b
		}

		function kb(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
			if (d) return d;
			if (c)
				for (; c = c.nextSibling;)
					if (c === b) return -1;
			return a ? 1 : -1
		}

		function nb(a) {
			return hb(function (b) {
				return b = +b, hb(function (c, d) {
					for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function ob(a) {
			return a && typeof a.getElementsByTagName !== C && a
		}

		function pb() {}

		function qb(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
			return d
		}

		function rb(a, b, c) {
			var d = b.dir,
				e = c && "parentNode" === d,
				f = x++;
			return b.first ? function (b, c, f) {
				for (; b = b[d];)
					if (1 === b.nodeType || e) return a(b, c, f)
			} : function (b, c, g) {
				var h, i, j = [w, f];
				if (g) {
					for (; b = b[d];)
						if ((1 === b.nodeType || e) && a(b, c, g)) return !0
				} else
					for (; b = b[d];)
						if (1 === b.nodeType || e) {
							if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
							if (i[d] = j, j[2] = a(b, c, g)) return !0
						}
			}
		}

		function sb(a) {
			return a.length > 1 ? function (b, c, d) {
				for (var e = a.length; e--;)
					if (!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}

		function tb(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
			return c
		}

		function ub(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function vb(a, b, c, d, e, f) {
			return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					p = f || tb(b || "*", h.nodeType ? [h] : h, []),
					q = !a || !f && b ? p : ub(p, m, a, h, i),
					r = c ? e || (f ? a : o || d) ? [] : g : q;
				if (c && c(q, r, h, i), d)
					for (j = ub(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
				if (f) {
					if (e || a) {
						if (e) {
							for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
							e(null, r = [], j, i)
						}
						for (k = r.length; k--;)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
					}
				} else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
			})
		}

		function wb(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
					return a === b
				}, h, !0), l = rb(function (a) {
					return K.call(b, a) > -1
				}, h, !0), m = [function (a, c, d) {
					return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
				}]; f > i; i++)
				if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];
				else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e && !d.relative[a[e].type]; e++);
						return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
							value: " " === a[i - 2].type ? "*" : ""
						})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
					}
					m.push(c)
				}
			return sb(m)
		}

		function xb(a, b) {
			var c = b.length > 0,
				e = a.length > 0,
				f = function (f, g, h, i, k) {
					var l, m, o, p = 0,
						q = "0",
						r = f && [],
						s = [],
						t = j,
						u = f || e && d.find.TAG("*", k),
						v = w += null == t ? 1 : Math.random() || .1,
						x = u.length;
					for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
						if (e && l) {
							for (m = 0; o = a[m++];)
								if (o(l, g, h)) {
									i.push(l);
									break
								}
							k && (w = v)
						}
						c && ((l = !o && l) && p--, f && r.push(l))
					}
					if (p += q, c && q !== p) {
						for (m = 0; o = b[m++];) o(r, s, g, h);
						if (f) {
							if (p > 0)
								for (; q--;) r[q] || s[q] || (s[q] = G.call(i));
							s = ub(s)
						}
						I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
					}
					return k && (w = v, j = t), r
				};
			return c ? hb(f) : f
		}
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
			v = a.document,
			w = 0,
			x = 0,
			y = gb(),
			z = gb(),
			A = gb(),
			B = function (a, b) {
				return a === b && (l = !0), 0
			},
			C = "undefined",
			D = 1 << 31,
			E = {}.hasOwnProperty,
			F = [],
			G = F.pop,
			H = F.push,
			I = F.push,
			J = F.slice,
			K = F.indexOf || function (a) {
				for (var b = 0, c = this.length; c > b; b++)
					if (this[b] === a) return b;
				return -1
			},
			L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			M = "[\\x20\\t\\r\\n\\f]",
			N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			O = N.replace("w", "w#"),
			P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
			Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
			R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
			S = new RegExp("^" + M + "*," + M + "*"),
			T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
			U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
			V = new RegExp(Q),
			W = new RegExp("^" + O + "$"),
			X = {
				ID: new RegExp("^#(" + N + ")"),
				CLASS: new RegExp("^\\.(" + N + ")"),
				TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + P),
				PSEUDO: new RegExp("^" + Q),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + L + ")$", "i"),
				needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
			},
			Y = /^(?:input|select|textarea|button)$/i,
			Z = /^h\d$/i,
			$ = /^[^{]+\{\s*\[native \w/,
			_ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ab = /[+~]/,
			bb = /'|\\/g,
			cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
			db = function (a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			};
		try {
			I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
		} catch (eb) {
			I = {
				apply: F.length ? function (a, b) {
					H.apply(a, J.call(b))
				} : function (a, b) {
					for (var c = a.length, d = 0; a[c++] = b[d++];);
					a.length = c - 1
				}
			}
		}
		c = fb.support = {}, f = fb.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return !!b && "HTML" !== b.nodeName
		}, m = fb.setDocument = function (a) {
			var b, e = a ? a.ownerDocument || a : v,
				g = e.defaultView;
			return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
				m()
			}, !1) : g.attachEvent && g.attachEvent("onunload", function () {
				m()
			})), c.attributes = ib(function (a) {
				return a.className = "i", !a.getAttribute("className")
			}), c.getElementsByTagName = ib(function (a) {
				return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
			}), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
				return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
			}), c.getById = ib(function (a) {
				return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
			}), c.getById ? (d.find.ID = function (a, b) {
				if (typeof b.getElementById !== C && p) {
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(cb, db);
				return function (a) {
					return a.getAttribute("id") === b
				}
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(cb, db);
				return function (a) {
					var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
			} : function (a, b) {
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if ("*" === a) {
					for (; c = f[e++];) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
			}, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
				a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
			}), ib(function (a) {
				var b = e.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
			})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function (a, b) {
				if (b)
					for (; b = b.parentNode;)
						if (b === a) return !0;
				return !1
			}, B = b ? function (a, b) {
				if (a === b) return l = !0, 0;
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d || (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
			} : function (a, b) {
				if (a === b) return l = !0, 0;
				var c, d = 0,
					f = a.parentNode,
					g = b.parentNode,
					h = [a],
					i = [b];
				if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
				if (f === g) return kb(a, b);
				for (c = a; c = c.parentNode;) h.unshift(c);
				for (c = b; c = c.parentNode;) i.unshift(c);
				for (; h[d] === i[d];) d++;
				return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
			}, e) : n
		}, fb.matches = function (a, b) {
			return fb(a, null, null, b)
		}, fb.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
				var d = s.call(a, b);
				if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
			} catch (e) {}
			return fb(b, n, null, [a]).length > 0
		}, fb.contains = function (a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b)
		}, fb.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);
			var e = d.attrHandle[b.toLowerCase()],
				f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
			return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
		}, fb.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, fb.uniqueSort = function (a) {
			var b, d = [],
				e = 0,
				f = 0;
			if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				for (; b = a[f++];) b === a[f] && (e = d.push(f));
				for (; e--;) a.splice(d[e], 1)
			}
			return k = null, a
		}, e = fb.getText = function (a) {
			var b, c = "",
				d = 0,
				f = a.nodeType;
			if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
				} else if (3 === f || 4 === f) return a.nodeValue
			} else
				for (; b = a[d++];) c += e(b);
			return c
		}, d = fb.selectors = {
			cacheLength: 50,
			createPseudo: hb,
			match: X,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function (a) {
					return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function (a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
				},
				PSEUDO: function (a) {
					var b, c = !a[6] && a[2];
					return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function (a) {
					var b = a.replace(cb, db).toLowerCase();
					return "*" === a ? function () {
						return !0
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function (a) {
					var b = y[a + " "];
					return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
						return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
					})
				},
				ATTR: function (a, b, c) {
					return function (d) {
						var e = fb.attr(d, a);
						return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
					}
				},
				CHILD: function (a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode
					} : function (b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h;
						if (q) {
							if (f) {
								for (; p;) {
									for (l = b; l = l[p];)
										if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								for (k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
									if (1 === l.nodeType && ++m && l === b) {
										k[a] = [w, n, m];
										break
									}
							} else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
							else
								for (;
									(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l !== b)););
							return (m -= e) === d || m % d == 0 && m / d >= 0
						}
					}
				},
				PSEUDO: function (a, b) {
					var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
					return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
						for (var d, f = e(a, b), g = f.length; g--;) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
					}) : function (a) {
						return e(a, 0, c)
					}) : e
				}
			},
			pseudos: {
				not: hb(function (a) {
					var b = [],
						c = [],
						d = h(a.replace(R, "$1"));
					return d[u] ? hb(function (a, b, c, e) {
						for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function (a, e, f) {
						return b[0] = a, d(b, null, f, c), !c.pop()
					}
				}),
				has: hb(function (a) {
					return function (b) {
						return fb(a, b).length > 0
					}
				}),
				contains: hb(function (a) {
					return function (b) {
						return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
					}
				}),
				lang: hb(function (a) {
					return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
						function (b) {
							var c;
							do {
								if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
							} while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
				}),
				target: function (b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function (a) {
					return a === o
				},
				focus: function (a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled: function (a) {
					return !1 === a.disabled
				},
				disabled: function (a) {
					return !0 === a.disabled
				},
				checked: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function (a) {
					return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
				},
				empty: function (a) {
					for (a = a.firstChild; a; a = a.nextSibling)
						if (a.nodeType < 6) return !1;
					return !0
				},
				parent: function (a) {
					return !d.pseudos.empty(a)
				},
				header: function (a) {
					return Z.test(a.nodeName)
				},
				input: function (a) {
					return Y.test(a.nodeName)
				},
				button: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function (a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: nb(function () {
					return [0]
				}),
				last: nb(function (a, b) {
					return [b - 1]
				}),
				eq: nb(function (a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even: nb(function (a, b) {
					for (var c = 0; b > c; c += 2) a.push(c);
					return a
				}),
				odd: nb(function (a, b) {
					for (var c = 1; b > c; c += 2) a.push(c);
					return a
				}),
				lt: nb(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: nb(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, d.pseudos.nth = d.pseudos.eq;
		for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) d.pseudos[b] = function (a) {
			return function (b) {
				return "input" === b.nodeName.toLowerCase() && b.type === a
			}
		}(b);
		for (b in {
				submit: !0,
				reset: !0
			}) d.pseudos[b] = function (a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}(b);
		return pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
			var c, e, f, g, h, i, j, k = z[a + " "];
			if (k) return b ? 0 : k.slice(0);
			for (h = a, i = [], j = d.preFilter; h;) {
				(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
					value: c,
					type: e[0].replace(R, " ")
				}), h = h.slice(c.length));
				for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
					value: c,
					type: g,
					matches: e
				}), h = h.slice(c.length));
				if (!c) break
			}
			return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
		}, h = fb.compile = function (a, b) {
			var c, d = [],
				e = [],
				f = A[a + " "];
			if (!f) {
				for (b || (b = g(a)), c = b.length; c--;) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
				f = A(a, xb(e, d)), f.selector = a
			}
			return f
		}, i = fb.select = function (a, b, e, f) {
			var i, j, k, l, m, n = "function" == typeof a && a,
				o = !f && g(a = n.selector || a);
			if (e = e || [], 1 === o.length) {
				if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if (!(b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0])) return e;
					n && (b = b.parentNode), a = a.slice(j.shift().value.length)
				}
				for (i = X.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]);)
					if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
						if (j.splice(i, 1), !(a = f.length && qb(j))) return I.apply(e, f), e;
						break
					}
			}
			return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"))
		}), ib(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || jb("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), c.attributes && ib(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || jb("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), ib(function (a) {
			return null == a.getAttribute("disabled")
		}) || jb(L, function (a, b, c) {
			var d;
			return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), fb
	}(a);
	n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
	var u = n.expr.match.needsContext,
		v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		w = /^.[^:#\[\.,]*$/;
	n.filter = function (a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
			return 1 === a.nodeType
		}))
	}, n.fn.extend({
		find: function (a) {
			var b, c = this.length,
				d = [],
				e = this;
			if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
				for (b = 0; c > b; b++)
					if (n.contains(e[b], this)) return !0
			}));
			for (b = 0; c > b; b++) n.find(a, e[b], d);
			return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
		},
		filter: function (a) {
			return this.pushStack(x(this, a || [], !1))
		},
		not: function (a) {
			return this.pushStack(x(this, a || [], !0))
		},
		is: function (a) {
			return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
		}
	});
	var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	(n.fn.init = function (a, b) {
		var c, d;
		if (!a) return this;
		if ("string" == typeof a) {
			if (!(c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a)) || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
			if (c[1]) {
				if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
					for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
				return this
			}
			return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
		}
		return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
	}).prototype = n.fn, y = n(l);
	var B = /^(?:parents|prev(?:Until|All))/,
		C = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	n.extend({
		dir: function (a, b, c) {
			for (var d = [], e = void 0 !== c;
				(a = a[b]) && 9 !== a.nodeType;)
				if (1 === a.nodeType) {
					if (e && n(a).is(c)) break;
					d.push(a)
				}
			return d
		},
		sibling: function (a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), n.fn.extend({
		has: function (a) {
			var b = n(a, this),
				c = b.length;
			return this.filter(function () {
				for (var a = 0; c > a; a++)
					if (n.contains(this, b[a])) return !0
			})
		},
		closest: function (a, b) {
			for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
				for (c = this[d]; c && c !== b; c = c.parentNode)
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
						f.push(c);
						break
					}
			return this.pushStack(f.length > 1 ? n.unique(f) : f)
		},
		index: function (a) {
			return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (a, b) {
			return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
		},
		addBack: function (a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	}), n.each({
		parent: function (a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function (a) {
			return n.dir(a, "parentNode")
		},
		parentsUntil: function (a, b, c) {
			return n.dir(a, "parentNode", c)
		},
		next: function (a) {
			return D(a, "nextSibling")
		},
		prev: function (a) {
			return D(a, "previousSibling")
		},
		nextAll: function (a) {
			return n.dir(a, "nextSibling")
		},
		prevAll: function (a) {
			return n.dir(a, "previousSibling")
		},
		nextUntil: function (a, b, c) {
			return n.dir(a, "nextSibling", c)
		},
		prevUntil: function (a, b, c) {
			return n.dir(a, "previousSibling", c)
		},
		siblings: function (a) {
			return n.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function (a) {
			return n.sibling(a.firstChild)
		},
		contents: function (a) {
			return a.contentDocument || n.merge([], a.childNodes)
		}
	}, function (a, b) {
		n.fn[a] = function (c, d) {
			var e = n.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
		}
	});
	var E = /\S+/g,
		F = {};
	n.Callbacks = function (a) {
		a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
		var b, c, d, e, f, g, h = [],
			i = !a.once && [],
			j = function (l) {
				for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
					if (!1 === h[g].apply(l[0], l[1]) && a.stopOnFalse) {
						b = !1;
						break
					}
				d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
			},
			k = {
				add: function () {
					if (h) {
						var c = h.length;
						! function g(b) {
							n.each(b, function (b, c) {
								var d = n.type(c);
								"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
							})
						}(arguments), d ? f = h.length : b && (e = c, j(b))
					}
					return this
				},
				remove: function () {
					return h && n.each(arguments, function (a, b) {
						for (var c;
							(c = n.inArray(b, h, c)) > -1;) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
					}), this
				},
				has: function (a) {
					return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
				},
				empty: function () {
					return h = [], f = 0, this
				},
				disable: function () {
					return h = i = b = void 0, this
				},
				disabled: function () {
					return !h
				},
				lock: function () {
					return i = void 0, b || k.disable(), this
				},
				locked: function () {
					return !i
				},
				fireWith: function (a, b) {
					return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
				},
				fire: function () {
					return k.fireWith(this, arguments), this
				},
				fired: function () {
					return !!c
				}
			};
		return k
	}, n.extend({
		Deferred: function (a) {
			var b = [
					["resolve", "done", n.Callbacks("once memory"), "resolved"],
					["reject", "fail", n.Callbacks("once memory"), "rejected"],
					["notify", "progress", n.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function () {
						return c
					},
					always: function () {
						return e.done(arguments).fail(arguments), this
					},
					then: function () {
						var a = arguments;
						return n.Deferred(function (c) {
							n.each(b, function (b, f) {
								var g = n.isFunction(a[b]) && a[b];
								e[f[1]](function () {
									var a = g && g.apply(this, arguments);
									a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function (a) {
						return null != a ? n.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, n.each(b, function (a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function () {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function (a) {
			var i, j, k, b = 0,
				c = d.call(arguments),
				e = c.length,
				f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
				g = 1 === f ? a : n.Deferred(),
				h = function (a, b, c) {
					return function (e) {
						b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
					}
				};
			if (e > 1)
				for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
			return f || g.resolveWith(k, c), g.promise()
		}
	});
	var H;
	n.fn.ready = function (a) {
		return n.ready.promise().done(a), this
	}, n.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function (a) {
			a ? n.readyWait++ : n.ready(!0)
		},
		ready: function (a) {
			(!0 === a ? --n.readyWait : n.isReady) || (n.isReady = !0, !0 !== a && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
		}
	}), n.ready.promise = function (b) {
		return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
	}, n.ready.promise();
	var J = n.access = function (a, b, c, d, e, f, g) {
		var h = 0,
			i = a.length,
			j = null == c;
		if ("object" === n.type(c)) {
			e = !0;
			for (h in c) n.access(a, b, h, c[h], !0, f, g)
		} else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
				return j.call(n(a), c)
			})), b))
			for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	};
	n.acceptData = function (a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
	}, K.uid = 1, K.accepts = n.acceptData, K.prototype = {
		key: function (a) {
			if (!K.accepts(a)) return 0;
			var b = {},
				c = a[this.expando];
			if (!c) {
				c = K.uid++;
				try {
					b[this.expando] = {
						value: c
					}, Object.defineProperties(a, b)
				} catch (d) {
					b[this.expando] = c, n.extend(a, b)
				}
			}
			return this.cache[c] || (this.cache[c] = {}), c
		},
		set: function (a, b, c) {
			var d, e = this.key(a),
				f = this.cache[e];
			if ("string" == typeof b) f[b] = c;
			else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
			else
				for (d in b) f[d] = b[d];
			return f
		},
		get: function (a, b) {
			var c = this.cache[this.key(a)];
			return void 0 === b ? c : c[b]
		},
		access: function (a, b, c) {
			var d;
			return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
		},
		remove: function (a, b) {
			var c, d, e, f = this.key(a),
				g = this.cache[f];
			if (void 0 === b) this.cache[f] = {};
			else {
				n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
				for (; c--;) delete g[d[c]]
			}
		},
		hasData: function (a) {
			return !n.isEmptyObject(this.cache[a[this.expando]] || {})
		},
		discard: function (a) {
			a[this.expando] && delete this.cache[a[this.expando]]
		}
	};
	var L = new K,
		M = new K,
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		O = /([A-Z])/g;
	n.extend({
		hasData: function (a) {
			return M.hasData(a) || L.hasData(a)
		},
		data: function (a, b, c) {
			return M.access(a, b, c)
		},
		removeData: function (a, b) {
			M.remove(a, b)
		},
		_data: function (a, b, c) {
			return L.access(a, b, c)
		},
		_removeData: function (a, b) {
			L.remove(a, b)
		}
	}), n.fn.extend({
		data: function (a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
					for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
					L.set(f, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function () {
				M.set(this, a)
			}) : J(this, function (b) {
				var c, d = n.camelCase(a);
				if (f && void 0 === b) {
					if (void 0 !== (c = M.get(f, a))) return c;
					if (void 0 !== (c = M.get(f, d))) return c;
					if (void 0 !== (c = P(f, d, void 0))) return c
				} else this.each(function () {
					var c = M.get(this, d);
					M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
				})
			}, null, b, arguments.length > 1, null, !0)
		},
		removeData: function (a) {
			return this.each(function () {
				M.remove(this, a)
			})
		}
	}), n.extend({
		queue: function (a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function (a, b) {
			b = b || "fx";
			var c = n.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = n._queueHooks(a, b),
				g = function () {
					n.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function (a, b) {
			var c = b + "queueHooks";
			return L.get(a, c) || L.access(a, c, {
				empty: n.Callbacks("once memory").add(function () {
					L.remove(a, [b + "queue", c])
				})
			})
		}
	}), n.fn.extend({
		queue: function (a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = n.queue(this, a, b);
				n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
			})
		},
		dequeue: function (a) {
			return this.each(function () {
				n.dequeue(this, a)
			})
		},
		clearQueue: function (a) {
			return this.queue(a || "fx", [])
		},
		promise: function (a, b) {
			var c, d = 1,
				e = n.Deferred(),
				f = this,
				g = this.length,
				h = function () {
					--d || e.resolveWith(f, [f])
				};
			for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)(c = L.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		R = ["Top", "Right", "Bottom", "Left"],
		S = function (a, b) {
			return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
		},
		T = /^(?:checkbox|radio)$/i;
	! function () {
		var a = l.createDocumentFragment(),
			b = a.appendChild(l.createElement("div")),
			c = l.createElement("input");
		c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
	}();
	var U = "undefined";
	k.focusinBubbles = "onfocusin" in a;
	var V = /^key/,
		W = /^(?:mouse|pointer|contextmenu)|click/,
		X = /^(?:focusinfocus|focusoutblur)$/,
		Y = /^([^.]*)(?:\.(.+)|)$/;
	n.event = {
		global: {},
		add: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
			if (r)
				for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
						return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
					}), b = (b || "").match(E) || [""], j = b.length; j--;) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
					type: o,
					origType: q,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && n.expr.match.needsContext.test(e),
					namespace: p.join(".")
				}, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, p, g) || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
		},
		remove: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
			if (r && (i = r.events)) {
				for (b = (b || "").match(E) || [""], j = b.length; j--;)
					if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
						for (l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						g && !m.length && (l.teardown && !1 !== l.teardown.call(a, p, r.handle) || n.removeEvent(a, o, r.handle), delete i[o])
					} else
						for (o in i) n.event.remove(a, o + b[j], c, d, !0);
				n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
			}
		},
		trigger: function (b, c, d, e) {
			var f, g, h, i, k, m, o, p = [d || l],
				q = j.call(b, "type") ? b.type : b,
				r = j.call(b, "namespace") ? b.namespace.split(".") : [];
			if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || !1 !== o.trigger.apply(d, c))) {
				if (!e && !o.noBubble && !n.isWindow(d)) {
					for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
					h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
				}
				for (f = 0;
					(g = p[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), (m = k && g[k]) && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), !1 === b.result && b.preventDefault());
				return b.type = q, e || b.isDefaultPrevented() || o._default && !1 !== o._default.apply(p.pop(), c) || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
			}
		},
		dispatch: function (a) {
			a = n.event.fix(a);
			var b, c, e, f, g, h = [],
				i = d.call(arguments),
				j = (L.get(this, "events") || {})[a.type] || [],
				k = n.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
				for (h = n.event.handlers.call(this, a, j), b = 0;
					(f = h[b++]) && !a.isPropagationStopped();)
					for (a.currentTarget = f.elem, c = 0;
						(g = f.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, void 0 !== (e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)) && !1 === (a.result = e) && (a.preventDefault(), a.stopPropagation()));
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function (a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type))
				for (; i !== this; i = i.parentNode || this)
					if (!0 !== i.disabled || "click" !== a.type) {
						for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
						d.length && g.push({
							elem: i,
							handlers: d
						})
					}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (a, b) {
				var c, d, e, f = b.button;
				return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		},
		fix: function (a) {
			if (a[n.expando]) return a;
			var b, c, d, e = a.type,
				f = a,
				g = this.fixHooks[e];
			for (g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
			return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					return this !== _() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === _() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function (a) {
					return n.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function (a, b, c, d) {
			var e = n.extend(new n.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, n.removeEvent = function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}, n.Event = function (a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
	}, n.Event.prototype = {
		isDefaultPrevented: $,
		isPropagationStopped: $,
		isImmediatePropagationStopped: $,
		preventDefault: function () {
			var a = this.originalEvent;
			this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
		},
		stopPropagation: function () {
			var a = this.originalEvent;
			this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, n.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (a, b) {
		n.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function (a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), k.focusinBubbles || n.each({
		focus: "focusin",
		blur: "focusout"
	}, function (a, b) {
		var c = function (a) {
			n.event.simulate(b, a.target, n.event.fix(a), !0)
		};
		n.event.special[b] = {
			setup: function () {
				var d = this.ownerDocument || this,
					e = L.access(d, b);
				e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
			},
			teardown: function () {
				var d = this.ownerDocument || this,
					e = L.access(d, b) - 1;
				e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
			}
		}
	}), n.fn.extend({
		on: function (a, b, c, d, e) {
			var f, g;
			if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);
				for (g in a) this.on(g, b, c, a[g], e);
				return this
			}
			if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), !1 === d) d = $;
			else if (!d) return this;
			return 1 === e && (f = d, d = function (a) {
				return n().off(a), f.apply(this, arguments)
			}, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
				n.event.add(this, a, d, c, b)
			})
		},
		one: function (a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function (a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return (!1 === b || "function" == typeof b) && (c = b, b = void 0), !1 === c && (c = $), this.each(function () {
				n.event.remove(this, a, c, b)
			})
		},
		trigger: function (a, b) {
			return this.each(function () {
				n.event.trigger(a, b, this)
			})
		},
		triggerHandler: function (a, b) {
			var c = this[0];
			return c ? n.event.trigger(a, b, c, !0) : void 0
		}
	});
	var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		bb = /<([\w:]+)/,
		cb = /<|&#?\w+;/,
		db = /<(?:script|style|link)/i,
		eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
		fb = /^$|\/(?:java|ecma)script/i,
		gb = /^true\/(.*)/,
		ib = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td, n.extend({
		clone: function (a, b, c) {
			var d, e, f, g, h = a.cloneNode(!0),
				i = n.contains(a.ownerDocument, a);
			if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
				for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++) pb(f[d], g[d]);
			if (b)
				if (c)
					for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) nb(f[d], g[d]);
				else nb(a, h);
			return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
		},
		buildFragment: function (a, b, c, d) {
			for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
				if ((e = a[m]) || 0 === e)
					if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
					else if (cb.test(e)) {
				for (f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
				n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
			} else l.push(b.createTextNode(e));
			for (k.textContent = "", m = 0; e = l[m++];)
				if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c))
					for (j = 0; e = f[j++];) fb.test(e.type || "") && c.push(e);
			return k
		},
		cleanData: function (a) {
			for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
				if (n.acceptData(c) && (e = c[L.expando]) && (b = L.cache[e])) {
					if (b.events)
						for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
					L.cache[e] && delete L.cache[e]
				}
				delete M.cache[c[M.expando]]
			}
		}
	}), n.fn.extend({
		text: function (a) {
			return J(this, function (a) {
				return void 0 === a ? n.text(this) : this.empty().each(function () {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
				})
			}, null, a, arguments.length)
		},
		append: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					jb(this, a).appendChild(a)
				}
			})
		},
		prepend: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = jb(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove: function (a, b) {
			for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
			return this
		},
		empty: function () {
			for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
			return this
		},
		clone: function (a, b) {
			return a = null != a && a, b = null == b ? a : b, this.map(function () {
				return n.clone(this, a, b)
			})
		},
		html: function (a) {
			return J(this, function (a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
				if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(ab, "<$1></$2>");
					try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function () {
			var a = arguments[0];
			return this.domManip(arguments, function (b) {
				a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
			}), a && (a.length || a.nodeType) ? this : this.remove()
		},
		detach: function (a) {
			return this.remove(a, !0)
		},
		domManip: function (a, b) {
			a = e.apply([], a);
			var c, d, f, g, h, i, j = 0,
				l = this.length,
				m = this,
				o = l - 1,
				p = a[0],
				q = n.isFunction(p);
			if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)) return this.each(function (c) {
				var d = m.eq(c);
				q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
			});
			if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
				for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
				if (g)
					for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++) h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "")))
			}
			return this
		}
	}), n.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (a, b) {
		n.fn[a] = function (a) {
			for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
			return this.pushStack(d)
		}
	});
	var qb, rb = {},
		ub = /^margin/,
		vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
		wb = function (a) {
			return a.ownerDocument.defaultView.getComputedStyle(a, null)
		};
	! function () {
		function g() {
			f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
			var g = a.getComputedStyle(f, null);
			b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
		}
		var b, c, d = l.documentElement,
			e = l.createElement("div"),
			f = l.createElement("div");
		f.style && (f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f), a.getComputedStyle && n.extend(k, {
			pixelPosition: function () {
				return g(), b
			},
			boxSizingReliable: function () {
				return null == c && g(), c
			},
			reliableMarginRight: function () {
				var b, c = f.appendChild(l.createElement("div"));
				return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b
			}
		}))
	}(), n.swap = function (a, b, c, d) {
		var e, f, g = {};
		for (f in b) g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b) a.style[f] = g[f];
		return e
	};
	var zb = /^(none|table(?!-c[ea]).+)/,
		Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
		Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
		Cb = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Db = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Eb = ["Webkit", "O", "Moz", "ms"];
	n.extend({
		cssHooks: {
			opacity: {
				get: function (a, b) {
					if (b) {
						var c = xb(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: "cssFloat"
		},
		style: function (a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = n.camelCase(b),
					i = a.style;
				return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
			}
		},
		css: function (a, b, c, d) {
			var e, f, g, h = n.camelCase(b);
			return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), !0 === c || n.isNumeric(f) ? f || 0 : e) : e
		}
	}), n.each(["height", "width"], function (a, b) {
		n.cssHooks[b] = {
			get: function (a, c, d) {
				return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function () {
					return Ib(a, b, d)
				}) : Ib(a, b, d) : void 0
			},
			set: function (a, c, d) {
				var e = d && wb(a);
				return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
		return b ? n.swap(a, {
			display: "inline-block"
		}, xb, [a, "marginRight"]) : void 0
	}), n.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (a, b) {
		n.cssHooks[a + b] = {
			expand: function (c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, ub.test(a) || (n.cssHooks[a + b].set = Gb)
	}), n.fn.extend({
		css: function (a, b) {
			return J(this, function (a, b, c) {
				var d, e, f = {},
					g = 0;
				if (n.isArray(b)) {
					for (d = wb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function () {
			return Jb(this, !0)
		},
		hide: function () {
			return Jb(this)
		},
		toggle: function (a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				S(this) ? n(this).show() : n(this).hide()
			})
		}
	}), n.Tween = Kb, Kb.prototype = {
		constructor: Kb,
		init: function (a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
		},
		cur: function () {
			var a = Kb.propHooks[this.prop];
			return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
		},
		run: function (a) {
			var b, c = Kb.propHooks[this.prop];
			return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
		}
	}, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
		_default: {
			get: function (a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set: function (a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
		set: function (a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, n.easing = {
		linear: function (a) {
			return a
		},
		swing: function (a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, n.fx = Kb.prototype.init, n.fx.step = {};
	var Lb, Mb, Nb = /^(?:toggle|show|hide)$/,
		Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
		Pb = /queueHooks$/,
		Qb = [Vb],
		Rb = {
			"*": [function (a, b) {
				var c = this.createTween(a, b),
					d = c.cur(),
					e = Ob.exec(b),
					f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
					g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)),
					h = 1,
					i = 20;
				if (g && g[3] !== f) {
					f = f || g[3], e = e || [], g = +d || 1;
					do {
						h = h || ".5", g /= h, n.style(c.elem, a, g + f)
					} while (h !== (h = c.cur() / d) && 1 !== h && --i)
				}
				return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
			}]
		};
	n.Animation = n.extend(Xb, {
			tweener: function (a, b) {
				n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
				for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
			},
			prefilter: function (a, b) {
				b ? Qb.unshift(a) : Qb.push(a)
			}
		}), n.speed = function (a, b, c) {
			var d = a && "object" == typeof a ? n.extend({}, a) : {
				complete: c || !c && b || n.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !n.isFunction(b) && b
			};
			return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || !0 === d.queue) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
				n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
			}, d
		}, n.fn.extend({
			fadeTo: function (a, b, c, d) {
				return this.filter(S).css("opacity", 0).show().end().animate({
					opacity: b
				}, a, c, d)
			},
			animate: function (a, b, c, d) {
				var e = n.isEmptyObject(a),
					f = n.speed(b, c, d),
					g = function () {
						var b = Xb(this, n.extend({}, a), f);
						(e || L.get(this, "finish")) && b.stop(!0)
					};
				return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
			},
			stop: function (a, b, c) {
				var d = function (a) {
					var b = a.stop;
					delete a.stop, b(c)
				};
				return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
					var b = !0,
						e = null != a && a + "queueHooks",
						f = n.timers,
						g = L.get(this);
					if (e) g[e] && g[e].stop && d(g[e]);
					else
						for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
					for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
					(b || !c) && n.dequeue(this, a)
				})
			},
			finish: function (a) {
				return !1 !== a && (a = a || "fx"), this.each(function () {
					var b, c = L.get(this),
						d = c[a + "queue"],
						e = c[a + "queueHooks"],
						f = n.timers,
						g = d ? d.length : 0;
					for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
					for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
					delete c.finish
				})
			}
		}), n.each(["toggle", "show", "hide"], function (a, b) {
			var c = n.fn[b];
			n.fn[b] = function (a, d, e) {
				return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
			}
		}), n.each({
			slideDown: Tb("show"),
			slideUp: Tb("hide"),
			slideToggle: Tb("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (a, b) {
			n.fn[a] = function (a, c, d) {
				return this.animate(b, a, c, d)
			}
		}), n.timers = [], n.fx.tick = function () {
			var a, b = 0,
				c = n.timers;
			for (Lb = n.now(); b < c.length; b++)(a = c[b])() || c[b] !== a || c.splice(b--, 1);
			c.length || n.fx.stop(), Lb = void 0
		}, n.fx.timer = function (a) {
			n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
		}, n.fx.interval = 13, n.fx.start = function () {
			Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
		}, n.fx.stop = function () {
			clearInterval(Mb), Mb = null
		}, n.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, n.fn.delay = function (a, b) {
			return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
				var d = setTimeout(b, a);
				c.stop = function () {
					clearTimeout(d)
				}
			})
		},
		function () {
			var a = l.createElement("input"),
				b = l.createElement("select"),
				c = b.appendChild(l.createElement("option"));
			a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
		}();
	var Zb, $b = n.expr.attrHandle;
	n.fn.extend({
		attr: function (a, b) {
			return J(this, n.attr, a, b, arguments.length > 1)
		},
		removeAttr: function (a) {
			return this.each(function () {
				n.removeAttr(this, a)
			})
		}
	}), n.extend({
		attr: function (a, b, c) {
			var d, e, f = a.nodeType;
			if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : void 0)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
		},
		removeAttr: function (a, b) {
			var c, d, e = 0,
				f = b && b.match(E);
			if (f && 1 === a.nodeType)
				for (; c = f[e++];) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
		},
		attrHooks: {
			type: {
				set: function (a, b) {
					if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		}
	}), Zb = {
		set: function (a, b, c) {
			return !1 === b ? n.removeAttr(a, c) : a.setAttribute(c, c), c
		}
	}, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = $b[b] || n.find.attr;
		$b[b] = function (a, b, d) {
			var e, f;
			return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
		}
	});
	var _b = /^(?:input|select|textarea|button)$/i;
	n.fn.extend({
			prop: function (a, b) {
				return J(this, n.prop, a, b, arguments.length > 1)
			},
			removeProp: function (a) {
				return this.each(function () {
					delete this[n.propFix[a] || a]
				})
			}
		}), n.extend({
			propFix: {
				for: "htmlFor",
				class: "className"
			},
			prop: function (a, b, c) {
				var d, e, f, g = a.nodeType;
				if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
			},
			propHooks: {
				tabIndex: {
					get: function (a) {
						return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
					}
				}
			}
		}),
		k.optSelected || (n.propHooks.selected = {
			get: function (a) {
				var b = a.parentNode;
				return b && b.parentNode && b.parentNode.selectedIndex, null
			}
		}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			n.propFix[this.toLowerCase()] = this
		});
	var ac = /[\t\r\n\f]/g;
	n.fn.extend({
		addClass: function (a) {
			var b, c, d, e, f, g, h = "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (n.isFunction(a)) return this.each(function (b) {
				n(this).addClass(a.call(this, b, this.className))
			});
			if (h)
				for (b = (a || "").match(E) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
						for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
						g = n.trim(d), c.className !== g && (c.className = g)
					}
			return this
		},
		removeClass: function (a) {
			var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (n.isFunction(a)) return this.each(function (b) {
				n(this).removeClass(a.call(this, b, this.className))
			});
			if (h)
				for (b = (a || "").match(E) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
						for (f = 0; e = b[f++];)
							for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
						g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
					}
			return this
		},
		toggleClass: function (a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
				n(this).toggleClass(a.call(this, c, this.className, b), b)
			} : function () {
				if ("string" === c)
					for (var b, d = 0, e = n(this), f = a.match(E) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
				else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : L.get(this, "__className__") || "")
			})
		},
		hasClass: function (a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) return !0;
			return !1
		}
	});
	n.fn.extend({
		val: function (a) {
			var b, c, d, e = this[0];
			return arguments.length ? (d = n.isFunction(a), this.each(function (c) {
				var e;
				1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
					return null == a ? "" : a + ""
				})), (b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
			})) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(/\r/g, "") : null == c ? "" : c)) : void 0
		}
	}), n.extend({
		valHooks: {
			option: {
				get: function (a) {
					var b = n.find.attr(a, "value");
					return null != b ? b : n.trim(n.text(a))
				}
			},
			select: {
				get: function (a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
							if (b = n(c).val(), f) return b;
							g.push(b)
						}
					return g
				},
				set: function (a, b) {
					for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
					return c || (a.selectedIndex = -1), f
				}
			}
		}
	}), n.each(["radio", "checkbox"], function () {
		n.valHooks[this] = {
			set: function (a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
			}
		}, k.checkOn || (n.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		n.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), n.fn.extend({
		hover: function (a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		},
		bind: function (a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function (a, b) {
			return this.off(a, null, b)
		},
		delegate: function (a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function (a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var cc = n.now(),
		dc = /\?/;
	n.parseJSON = function (a) {
		return JSON.parse(a + "")
	}, n.parseXML = function (a) {
		var b, c;
		if (!a || "string" != typeof a) return null;
		try {
			c = new DOMParser, b = c.parseFromString(a, "text/xml")
		} catch (d) {
			b = void 0
		}
		return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
	};
	var ec, fc, hc = /([?&])_=[^&]*/,
		ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		kc = /^(?:GET|HEAD)$/,
		mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		nc = {},
		oc = {},
		pc = "*/".concat("*");
	try {
		fc = location.href
	} catch (qc) {
		fc = l.createElement("a"), fc.href = "", fc = fc.href
	}
	ec = mc.exec(fc.toLowerCase()) || [], n.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: fc,
			type: "GET",
			isLocal: jc.test(ec[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": pc,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": n.parseJSON,
				"text xml": n.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (a, b) {
			return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a)
		},
		ajaxPrefilter: rc(nc),
		ajaxTransport: rc(oc),
		ajax: function (a, b) {
			function x(a, b, f, h) {
				var j, r, s, u, w, x = b;
				2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), (w = v.getResponseHeader("etag")) && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
			}
			"object" == typeof a && (b = a, a = void 0), b = b || {};
			var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
				l = k.context || k,
				m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
				o = n.Deferred(),
				p = n.Callbacks("once memory"),
				q = k.statusCode || {},
				r = {},
				s = {},
				t = 0,
				u = "canceled",
				v = {
					readyState: 0,
					getResponseHeader: function (a) {
						var b;
						if (2 === t) {
							if (!f)
								for (f = {}; b = ic.exec(e);) f[b[1].toLowerCase()] = b[2];
							b = f[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function () {
						return 2 === t ? e : null
					},
					setRequestHeader: function (a, b) {
						var c = a.toLowerCase();
						return t || (a = s[c] = s[c] || a, r[a] = b), this
					},
					overrideMimeType: function (a) {
						return t || (k.mimeType = a), this
					},
					statusCode: function (a) {
						var b;
						if (a)
							if (2 > t)
								for (b in a) q[b] = [q[b], a[b]];
							else v.always(a[v.status]);
						return this
					},
					abort: function (a) {
						var b = a || u;
						return c && c.abort(b), x(0, b), this
					}
				};
			if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(/#.*$/, "").replace(/^\/\//, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t) return v;
			i = k.global, i && 0 == n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), !1 === k.cache && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && !1 !== k.contentType || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
			for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
			if (k.beforeSend && (!1 === k.beforeSend.call(l, v, k) || 2 === t)) return v.abort();
			u = "abort";
			for (j in {
					success: 1,
					error: 1,
					complete: 1
				}) v[j](k[j]);
			if (c = sc(oc, k, b, v)) {
				v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
					v.abort("timeout")
				}, k.timeout));
				try {
					t = 1, c.send(r, x)
				} catch (w) {
					if (!(2 > t)) throw w;
					x(-1, w)
				}
			} else x(-1, "No Transport");
			return v
		},
		getJSON: function (a, b, c) {
			return n.get(a, b, c, "json")
		},
		getScript: function (a, b) {
			return n.get(a, void 0, b, "script")
		}
	}), n.each(["get", "post"], function (a, b) {
		n[b] = function (a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			})
		}
	}), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		n.fn[b] = function (a) {
			return this.on(b, a)
		}
	}), n._evalUrl = function (a) {
		return n.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			throws: !0
		})
	}, n.fn.extend({
		wrapAll: function (a) {
			var b;
			return n.isFunction(a) ? this.each(function (b) {
				n(this).wrapAll(a.call(this, b))
			}) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
				for (var a = this; a.firstElementChild;) a = a.firstElementChild;
				return a
			}).append(this)), this)
		},
		wrapInner: function (a) {
			return this.each(n.isFunction(a) ? function (b) {
				n(this).wrapInner(a.call(this, b))
			} : function () {
				var b = n(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function (a) {
			var b = n.isFunction(a);
			return this.each(function (c) {
				n(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
			}).end()
		}
	}), n.expr.filters.hidden = function (a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0
	}, n.expr.filters.visible = function (a) {
		return !n.expr.filters.hidden(a)
	};
	var xc = /\[\]$/,
		zc = /^(?:submit|button|image|reset|file)$/i,
		Ac = /^(?:input|select|textarea|keygen)/i;
	n.param = function (a, b) {
		var c, d = [],
			e = function (a, b) {
				b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
			e(this.name, this.value)
		});
		else
			for (c in a) Bc(c, a[c], b, e);
		return d.join("&").replace(/%20/g, "+")
	}, n.fn.extend({
		serialize: function () {
			return n.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var a = n.prop(this, "elements");
				return a ? n.makeArray(a) : this
			}).filter(function () {
				var a = this.type;
				return this.name && !n(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a))
			}).map(function (a, b) {
				var c = n(this).val();
				return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
					return {
						name: b.name,
						value: a.replace(/\r?\n/g, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(/\r?\n/g, "\r\n")
				}
			}).get()
		}
	}), n.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest
		} catch (a) {}
	};
	var Cc = 0,
		Dc = {},
		Ec = {
			0: 200,
			1223: 204
		},
		Fc = n.ajaxSettings.xhr();
	a.ActiveXObject && n(a).on("unload", function () {
		for (var a in Dc) Dc[a]()
	}), k.cors = !!Fc && "withCredentials" in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function (a) {
		var b;
		return k.cors || Fc && !a.crossDomain ? {
			send: function (c, d) {
				var e, f = a.xhr(),
					g = ++Cc;
				if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
					for (e in a.xhrFields) f[e] = a.xhrFields[e];
				a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
				for (e in c) f.setRequestHeader(e, c[e]);
				b = function (a) {
					return function () {
						b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
							text: f.responseText
						} : void 0, f.getAllResponseHeaders()))
					}
				}, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
				try {
					f.send(a.hasContent && a.data || null)
				} catch (h) {
					if (b) throw h
				}
			},
			abort: function () {
				b && b()
			}
		} : void 0
	}), n.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (a) {
				return n.globalEval(a), a
			}
		}
	}), n.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
	}), n.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, c;
			return {
				send: function (d, e) {
					b = n("<script>").prop({
						async: !0,
						charset: a.scriptCharset,
						src: a.url
					}).on("load error", c = function (a) {
						b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
					}), l.head.appendChild(b[0])
				},
				abort: function () {
					c && c()
				}
			}
		}
	});
	var Gc = [],
		Hc = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var a = Gc.pop() || n.expando + "_" + cc++;
			return this[a] = !0, a
		}
	}), n.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e, f, g, h = !1 !== b.jsonp && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : !1 !== b.jsonp && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || n.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments
		}, d.always(function () {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), n.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a) return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || l;
		var d = v.exec(a),
			e = !c && [];
		return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
	};
	var Ic = n.fn.load;
	n.fn.load = function (a, b, c) {
		if ("string" != typeof a && Ic) return Ic.apply(this, arguments);
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
			url: a,
			type: e,
			dataType: "html",
			data: b
		}).done(function (a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
		}).complete(c && function (a, b) {
			g.each(c, f || [a.responseText, b, a])
		}), this
	}, n.expr.filters.animated = function (a) {
		return n.grep(n.timers, function (b) {
			return a === b.elem
		}).length
	};
	var Jc = a.document.documentElement;
	n.offset = {
		setOffset: function (a, b, c) {
			var d, e, f, g, h, i, j, k = n.css(a, "position"),
				l = n(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, n.fn.extend({
		offset: function (a) {
			if (arguments.length) return void 0 === a ? this : this.each(function (b) {
				n.offset.setOffset(this, a, b)
			});
			var b, c, d = this[0],
				e = {
					top: 0,
					left: 0
				},
				f = d && d.ownerDocument;
			return f ? (b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
				top: e.top + c.pageYOffset - b.clientTop,
				left: e.left + c.pageXOffset - b.clientLeft
			}) : e) : void 0
		},
		position: function () {
			if (this[0]) {
				var a, b, c = this[0],
					d = {
						top: 0,
						left: 0
					};
				return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - d.top - n.css(c, "marginTop", !0),
					left: b.left - d.left - n.css(c, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var a = this.offsetParent || Jc; a && !n.nodeName(a, "html") && "static" === n.css(a, "position");) a = a.offsetParent;
				return a || Jc
			})
		}
	}), n.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (b, c) {
		var d = "pageYOffset" === c;
		n.fn[b] = function (e) {
			return J(this, function (b, e, f) {
				var g = Kc(b);
				return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
			}, b, e, arguments.length, null)
		}
	}), n.each(["top", "left"], function (a, b) {
		n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
			return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
		})
	}), n.each({
		Height: "height",
		Width: "width"
	}, function (a, b) {
		n.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function (c, d) {
			n.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (!0 === d || !0 === e ? "margin" : "border");
				return J(this, function (b, c, d) {
					var e;
					return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), n.fn.size = function () {
		return this.length
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return n
	});
	var Lc = a.jQuery,
		Mc = a.$;
	return n.noConflict = function (b) {
		return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n
	}, typeof b === U && (a.jQuery = a.$ = n), n
}),
function () {
	var root = this,
		previousUnderscore = root._,
		breaker = {},
		ArrayProto = Array.prototype,
		ObjProto = Object.prototype,
		FuncProto = Function.prototype,
		push = ArrayProto.push,
		slice = ArrayProto.slice,
		concat = ArrayProto.concat,
		toString = ObjProto.toString,
		hasOwnProperty = ObjProto.hasOwnProperty,
		nativeForEach = ArrayProto.forEach,
		nativeMap = ArrayProto.map,
		nativeReduce = ArrayProto.reduce,
		nativeReduceRight = ArrayProto.reduceRight,
		nativeFilter = ArrayProto.filter,
		nativeEvery = ArrayProto.every,
		nativeSome = ArrayProto.some,
		nativeIndexOf = ArrayProto.indexOf,
		nativeLastIndexOf = ArrayProto.lastIndexOf,
		nativeIsArray = Array.isArray,
		nativeKeys = Object.keys,
		nativeBind = FuncProto.bind,
		_ = function (obj) {
			return obj instanceof _ ? obj : this instanceof _ ? void(this._wrapped = obj) : new _(obj)
		};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = _), exports._ = _) : root._ = _, _.VERSION = "1.6.0";
	var each = _.each = _.forEach = function (obj, iterator, context) {
		if (null == obj) return obj;
		if (nativeForEach && obj.forEach === nativeForEach) obj.forEach(iterator, context);
		else if (obj.length === +obj.length) {
			for (var i = 0, length = obj.length; i < length; i++)
				if (iterator.call(context, obj[i], i, obj) === breaker) return
		} else
			for (var keys = _.keys(obj), i = 0, length = keys.length; i < length; i++)
				if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
		return obj
	};
	_.map = _.collect = function (obj, iterator, context) {
		var results = [];
		return null == obj ? results : nativeMap && obj.map === nativeMap ? obj.map(iterator, context) : (each(obj, function (value, index, list) {
			results.push(iterator.call(context, value, index, list))
		}), results)
	};
	var reduceError = "Reduce of empty array with no initial value";
	_.reduce = _.foldl = _.inject = function (obj, iterator, memo, context) {
		var initial = arguments.length > 2;
		if (null == obj && (obj = []), nativeReduce && obj.reduce === nativeReduce) return context && (iterator = _.bind(iterator, context)), initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
		if (each(obj, function (value, index, list) {
				initial ? memo = iterator.call(context, memo, value, index, list) : (memo = value, initial = !0)
			}), !initial) throw new TypeError(reduceError);
		return memo
	}, _.reduceRight = _.foldr = function (obj, iterator, memo, context) {
		var initial = arguments.length > 2;
		if (null == obj && (obj = []), nativeReduceRight && obj.reduceRight === nativeReduceRight) return context && (iterator = _.bind(iterator, context)), initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
		var length = obj.length;
		if (length !== +length) {
			var keys = _.keys(obj);
			length = keys.length
		}
		if (each(obj, function (value, index, list) {
				index = keys ? keys[--length] : --length, initial ? memo = iterator.call(context, memo, obj[index], index, list) : (memo = obj[index], initial = !0)
			}), !initial) throw new TypeError(reduceError);
		return memo
	}, _.find = _.detect = function (obj, predicate, context) {
		var result;
		return any(obj, function (value, index, list) {
			if (predicate.call(context, value, index, list)) return result = value, !0
		}), result
	}, _.filter = _.select = function (obj, predicate, context) {
		var results = [];
		return null == obj ? results : nativeFilter && obj.filter === nativeFilter ? obj.filter(predicate, context) : (each(obj, function (value, index, list) {
			predicate.call(context, value, index, list) && results.push(value)
		}), results)
	}, _.reject = function (obj, predicate, context) {
		return _.filter(obj, function (value, index, list) {
			return !predicate.call(context, value, index, list)
		}, context)
	}, _.every = _.all = function (obj, predicate, context) {
		predicate || (predicate = _.identity);
		var result = !0;
		return null == obj ? result : nativeEvery && obj.every === nativeEvery ? obj.every(predicate, context) : (each(obj, function (value, index, list) {
			if (!(result = result && predicate.call(context, value, index, list))) return breaker
		}), !!result)
	};
	var any = _.some = _.any = function (obj, predicate, context) {
		predicate || (predicate = _.identity);
		var result = !1;
		return null == obj ? result : nativeSome && obj.some === nativeSome ? obj.some(predicate, context) : (each(obj, function (value, index, list) {
			if (result || (result = predicate.call(context, value, index, list))) return breaker
		}), !!result)
	};
	_.contains = _.include = function (obj, target) {
		return null != obj && (nativeIndexOf && obj.indexOf === nativeIndexOf ? -1 != obj.indexOf(target) : any(obj, function (value) {
			return value === target
		}))
	}, _.invoke = function (obj, method) {
		var args = slice.call(arguments, 2),
			isFunc = _.isFunction(method);
		return _.map(obj, function (value) {
			return (isFunc ? method : value[method]).apply(value, args)
		})
	}, _.pluck = function (obj, key) {
		return _.map(obj, _.property(key))
	}, _.where = function (obj, attrs) {
		return _.filter(obj, _.matches(attrs))
	}, _.findWhere = function (obj, attrs) {
		return _.find(obj, _.matches(attrs))
	}, _.max = function (obj, iterator, context) {
		if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) return Math.max.apply(Math, obj);
		var result = -1 / 0,
			lastComputed = -1 / 0;
		return each(obj, function (value, index, list) {
			var computed = iterator ? iterator.call(context, value, index, list) : value;
			computed > lastComputed && (result = value, lastComputed = computed)
		}), result
	}, _.min = function (obj, iterator, context) {
		if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) return Math.min.apply(Math, obj);
		var result = 1 / 0,
			lastComputed = 1 / 0;
		return each(obj, function (value, index, list) {
			var computed = iterator ? iterator.call(context, value, index, list) : value;
			computed < lastComputed && (result = value, lastComputed = computed)
		}), result
	}, _.shuffle = function (obj) {
		var rand, index = 0,
			shuffled = [];
		return each(obj, function (value) {
			rand = _.random(index++), shuffled[index - 1] = shuffled[rand], shuffled[rand] = value
		}), shuffled
	}, _.sample = function (obj, n, guard) {
		return null == n || guard ? (obj.length !== +obj.length && (obj = _.values(obj)), obj[_.random(obj.length - 1)]) : _.shuffle(obj).slice(0, Math.max(0, n))
	};
	var lookupIterator = function (value) {
		return null == value ? _.identity : _.isFunction(value) ? value : _.property(value)
	};
	_.sortBy = function (obj, iterator, context) {
		return iterator = lookupIterator(iterator), _.pluck(_.map(obj, function (value, index, list) {
			return {
				value: value,
				index: index,
				criteria: iterator.call(context, value, index, list)
			}
		}).sort(function (left, right) {
			var a = left.criteria,
				b = right.criteria;
			if (a !== b) {
				if (a > b || void 0 === a) return 1;
				if (a < b || void 0 === b) return -1
			}
			return left.index - right.index
		}), "value")
	};
	var group = function (behavior) {
		return function (obj, iterator, context) {
			var result = {};
			return iterator = lookupIterator(iterator), each(obj, function (value, index) {
				var key = iterator.call(context, value, index, obj);
				behavior(result, key, value)
			}), result
		}
	};
	_.groupBy = group(function (result, key, value) {
		_.has(result, key) ? result[key].push(value) : result[key] = [value]
	}), _.indexBy = group(function (result, key, value) {
		result[key] = value
	}), _.countBy = group(function (result, key) {
		_.has(result, key) ? result[key]++ : result[key] = 1
	}), _.sortedIndex = function (array, obj, iterator, context) {
		iterator = lookupIterator(iterator);
		for (var value = iterator.call(context, obj), low = 0, high = array.length; low < high;) {
			var mid = low + high >>> 1;
			iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid
		}
		return low
	}, _.toArray = function (obj) {
		return obj ? _.isArray(obj) ? slice.call(obj) : obj.length === +obj.length ? _.map(obj, _.identity) : _.values(obj) : []
	}, _.size = function (obj) {
		return null == obj ? 0 : obj.length === +obj.length ? obj.length : _.keys(obj).length
	}, _.first = _.head = _.take = function (array, n, guard) {
		if (null != array) return null == n || guard ? array[0] : n < 0 ? [] : slice.call(array, 0, n)
	}, _.initial = function (array, n, guard) {
		return slice.call(array, 0, array.length - (null == n || guard ? 1 : n))
	}, _.last = function (array, n, guard) {
		if (null != array) return null == n || guard ? array[array.length - 1] : slice.call(array, Math.max(array.length - n, 0))
	}, _.rest = _.tail = _.drop = function (array, n, guard) {
		return slice.call(array, null == n || guard ? 1 : n)
	}, _.compact = function (array) {
		return _.filter(array, _.identity)
	};
	var flatten = function (input, shallow, output) {
		return shallow && _.every(input, _.isArray) ? concat.apply(output, input) : (each(input, function (value) {
			_.isArray(value) || _.isArguments(value) ? shallow ? push.apply(output, value) : flatten(value, shallow, output) : output.push(value)
		}), output)
	};
	_.flatten = function (array, shallow) {
		return flatten(array, shallow, [])
	}, _.without = function (array) {
		return _.difference(array, slice.call(arguments, 1))
	}, _.partition = function (array, predicate, context) {
		predicate = lookupIterator(predicate);
		var pass = [],
			fail = [];
		return each(array, function (elem) {
			(predicate.call(context, elem) ? pass : fail).push(elem)
		}), [pass, fail]
	}, _.uniq = _.unique = function (array, isSorted, iterator, context) {
		_.isFunction(isSorted) && (context = iterator, iterator = isSorted, isSorted = !1);
		var initial = iterator ? _.map(array, iterator, context) : array,
			results = [],
			seen = [];
		return each(initial, function (value, index) {
			(isSorted ? index && seen[seen.length - 1] === value : _.contains(seen, value)) || (seen.push(value), results.push(array[index]))
		}), results
	}, _.union = function () {
		return _.uniq(_.flatten(arguments, !0))
	}, _.intersection = function (array) {
		var rest = slice.call(arguments, 1);
		return _.filter(_.uniq(array), function (item) {
			return _.every(rest, function (other) {
				return _.contains(other, item)
			})
		})
	}, _.difference = function (array) {
		var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
		return _.filter(array, function (value) {
			return !_.contains(rest, value)
		})
	}, _.zip = function () {
		for (var length = _.max(_.pluck(arguments, "length").concat(0)), results = new Array(length), i = 0; i < length; i++) results[i] = _.pluck(arguments, "" + i);
		return results
	}, _.object = function (list, values) {
		if (null == list) return {};
		for (var result = {}, i = 0, length = list.length; i < length; i++) values ? result[list[i]] = values[i] : result[list[i][0]] = list[i][1];
		return result
	}, _.indexOf = function (array, item, isSorted) {
		if (null == array) return -1;
		var i = 0,
			length = array.length;
		if (isSorted) {
			if ("number" != typeof isSorted) return i = _.sortedIndex(array, item), array[i] === item ? i : -1;
			i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted
		}
		if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
		for (; i < length; i++)
			if (array[i] === item) return i;
		return -1
	}, _.lastIndexOf = function (array, item, from) {
		if (null == array) return -1;
		var hasIndex = null != from;
		if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
		for (var i = hasIndex ? from : array.length; i--;)
			if (array[i] === item) return i;
		return -1
	}, _.range = function (start, stop, step) {
		arguments.length <= 1 && (stop = start || 0, start = 0), step = arguments[2] || 1;
		for (var length = Math.max(Math.ceil((stop - start) / step), 0), idx = 0, range = new Array(length); idx < length;) range[idx++] = start, start += step;
		return range
	};
	var ctor = function () {};
	_.bind = function (func, context) {
		var args, bound;
		if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
		if (!_.isFunction(func)) throw new TypeError;
		return args = slice.call(arguments, 2), bound = function () {
			if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
			ctor.prototype = func.prototype;
			var self = new ctor;
			ctor.prototype = null;
			var result = func.apply(self, args.concat(slice.call(arguments)));
			return Object(result) === result ? result : self
		}
	}, _.partial = function (func) {
		var boundArgs = slice.call(arguments, 1);
		return function () {
			for (var position = 0, args = boundArgs.slice(), i = 0, length = args.length; i < length; i++) args[i] === _ && (args[i] = arguments[position++]);
			for (; position < arguments.length;) args.push(arguments[position++]);
			return func.apply(this, args)
		}
	}, _.bindAll = function (obj) {
		var funcs = slice.call(arguments, 1);
		if (0 === funcs.length) throw new Error("bindAll must be passed function names");
		return each(funcs, function (f) {
			obj[f] = _.bind(obj[f], obj)
		}), obj
	}, _.memoize = function (func, hasher) {
		var memo = {};
		return hasher || (hasher = _.identity),
			function () {
				var key = hasher.apply(this, arguments);
				return _.has(memo, key) ? memo[key] : memo[key] = func.apply(this, arguments)
			}
	}, _.delay = function (func, wait) {
		var args = slice.call(arguments, 2);
		return setTimeout(function () {
			return func.apply(null, args)
		}, wait)
	}, _.defer = function (func) {
		return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)))
	}, _.throttle = function (func, wait, options) {
		var context, args, result, timeout = null,
			previous = 0;
		options || (options = {});
		var later = function () {
			previous = !1 === options.leading ? 0 : _.now(), timeout = null, result = func.apply(context, args), context = args = null
		};
		return function () {
			var now = _.now();
			previous || !1 !== options.leading || (previous = now);
			var remaining = wait - (now - previous);
			return context = this, args = arguments, remaining <= 0 ? (clearTimeout(timeout), timeout = null, previous = now, result = func.apply(context, args), context = args = null) : timeout || !1 === options.trailing || (timeout = setTimeout(later, remaining)), result
		}
	}, _.debounce = function (func, wait, immediate) {
		var timeout, args, context, timestamp, result, later = function () {
			var last = _.now() - timestamp;
			last < wait ? timeout = setTimeout(later, wait - last) : (timeout = null, immediate || (result = func.apply(context, args), context = args = null))
		};
		return function () {
			context = this, args = arguments, timestamp = _.now();
			var callNow = immediate && !timeout;
			return timeout || (timeout = setTimeout(later, wait)), callNow && (result = func.apply(context, args), context = args = null), result
		}
	}, _.once = function (func) {
		var memo, ran = !1;
		return function () {
			return ran ? memo : (ran = !0, memo = func.apply(this, arguments), func = null, memo)
		}
	}, _.wrap = function (func, wrapper) {
		return _.partial(wrapper, func)
	}, _.compose = function () {
		var funcs = arguments;
		return function () {
			for (var args = arguments, i = funcs.length - 1; i >= 0; i--) args = [funcs[i].apply(this, args)];
			return args[0]
		}
	}, _.after = function (times, func) {
		return function () {
			if (--times < 1) return func.apply(this, arguments)
		}
	}, _.keys = function (obj) {
		if (!_.isObject(obj)) return [];
		if (nativeKeys) return nativeKeys(obj);
		var keys = [];
		for (var key in obj) _.has(obj, key) && keys.push(key);
		return keys
	}, _.values = function (obj) {
		for (var keys = _.keys(obj), length = keys.length, values = new Array(length), i = 0; i < length; i++) values[i] = obj[keys[i]];
		return values
	}, _.pairs = function (obj) {
		for (var keys = _.keys(obj), length = keys.length, pairs = new Array(length), i = 0; i < length; i++) pairs[i] = [keys[i], obj[keys[i]]];
		return pairs
	}, _.invert = function (obj) {
		for (var result = {}, keys = _.keys(obj), i = 0, length = keys.length; i < length; i++) result[obj[keys[i]]] = keys[i];
		return result
	}, _.functions = _.methods = function (obj) {
		var names = [];
		for (var key in obj) _.isFunction(obj[key]) && names.push(key);
		return names.sort()
	}, _.extend = function (obj) {
		return each(slice.call(arguments, 1), function (source) {
			if (source)
				for (var prop in source) obj[prop] = source[prop]
		}), obj
	}, _.pick = function (obj) {
		var copy = {},
			keys = concat.apply(ArrayProto, slice.call(arguments, 1));
		return each(keys, function (key) {
			key in obj && (copy[key] = obj[key])
		}), copy
	}, _.omit = function (obj) {
		var copy = {},
			keys = concat.apply(ArrayProto, slice.call(arguments, 1));
		for (var key in obj) _.contains(keys, key) || (copy[key] = obj[key]);
		return copy
	}, _.defaults = function (obj) {
		return each(slice.call(arguments, 1), function (source) {
			if (source)
				for (var prop in source) void 0 === obj[prop] && (obj[prop] = source[prop])
		}), obj
	}, _.clone = function (obj) {
		return _.isObject(obj) ? _.isArray(obj) ? obj.slice() : _.extend({}, obj) : obj
	}, _.tap = function (obj, interceptor) {
		return interceptor(obj), obj
	};
	var eq = function (a, b, aStack, bStack) {
		if (a === b) return 0 !== a || 1 / a == 1 / b;
		if (null == a || null == b) return a === b;
		a instanceof _ && (a = a._wrapped), b instanceof _ && (b = b._wrapped);
		var className = toString.call(a);
		if (className != toString.call(b)) return !1;
		switch (className) {
			case "[object String]":
				return a == String(b);
			case "[object Number]":
				return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
			case "[object Date]":
			case "[object Boolean]":
				return +a == +b;
			case "[object RegExp]":
				return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
		}
		if ("object" != typeof a || "object" != typeof b) return !1;
		for (var length = aStack.length; length--;)
			if (aStack[length] == a) return bStack[length] == b;
		var aCtor = a.constructor,
			bCtor = b.constructor;
		if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) return !1;
		aStack.push(a), bStack.push(b);
		var size = 0,
			result = !0;
		if ("[object Array]" == className) {
			if (size = a.length, result = size == b.length)
				for (; size-- && (result = eq(a[size], b[size], aStack, bStack)););
		} else {
			for (var key in a)
				if (_.has(a, key) && (size++, !(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack)))) break;
			if (result) {
				for (key in b)
					if (_.has(b, key) && !size--) break;
				result = !size
			}
		}
		return aStack.pop(), bStack.pop(), result
	};
	_.isEqual = function (a, b) {
		return eq(a, b, [], [])
	}, _.isEmpty = function (obj) {
		if (null == obj) return !0;
		if (_.isArray(obj) || _.isString(obj)) return 0 === obj.length;
		for (var key in obj)
			if (_.has(obj, key)) return !1;
		return !0
	}, _.isElement = function (obj) {
		return !(!obj || 1 !== obj.nodeType)
	}, _.isArray = nativeIsArray || function (obj) {
		return "[object Array]" == toString.call(obj)
	}, _.isObject = function (obj) {
		return obj === Object(obj)
	}, each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (name) {
		_["is" + name] = function (obj) {
			return toString.call(obj) == "[object " + name + "]"
		}
	}), _.isArguments(arguments) || (_.isArguments = function (obj) {
		return !(!obj || !_.has(obj, "callee"))
	}), "function" != typeof /./ && (_.isFunction = function (obj) {
		return "function" == typeof obj
	}), _.isFinite = function (obj) {
		return isFinite(obj) && !isNaN(parseFloat(obj))
	}, _.isNaN = function (obj) {
		return _.isNumber(obj) && obj != +obj
	}, _.isBoolean = function (obj) {
		return !0 === obj || !1 === obj || "[object Boolean]" == toString.call(obj)
	}, _.isNull = function (obj) {
		return null === obj
	}, _.isUndefined = function (obj) {
		return void 0 === obj
	}, _.has = function (obj, key) {
		return hasOwnProperty.call(obj, key)
	}, _.noConflict = function () {
		return root._ = previousUnderscore, this
	}, _.identity = function (value) {
		return value
	}, _.constant = function (value) {
		return function () {
			return value
		}
	}, _.property = function (key) {
		return function (obj) {
			return obj[key]
		}
	}, _.matches = function (attrs) {
		return function (obj) {
			if (obj === attrs) return !0;
			for (var key in attrs)
				if (attrs[key] !== obj[key]) return !1;
			return !0
		}
	}, _.times = function (n, iterator, context) {
		for (var accum = Array(Math.max(0, n)), i = 0; i < n; i++) accum[i] = iterator.call(context, i);
		return accum
	}, _.random = function (min, max) {
		return null == max && (max = min, min = 0), min + Math.floor(Math.random() * (max - min + 1))
	}, _.now = Date.now || function () {
		return (new Date).getTime()
	};
	var entityMap = {
		escape: {
			"&": "&",
			"<": "<",
			">": ">",
			"'": "'"
		}
	};
	entityMap.unescape = _.invert(entityMap.escape);
	var entityRegexes = {
		escape: new RegExp("[" + _.keys(entityMap.escape).join("") + "]", "g"),
		unescape: new RegExp("(" + _.keys(entityMap.unescape).join("|") + ")", "g")
	};
	_.each(["escape", "unescape"], function (method) {
		_[method] = function (string) {
			return null == string ? "" : ("" + string).replace(entityRegexes[method], function (match) {
				return entityMap[method][match]
			})
		}
	}), _.result = function (object, property) {
		if (null != object) {
			var value = object[property];
			return _.isFunction(value) ? value.call(object) : value
		}
	}, _.mixin = function (obj) {
		each(_.functions(obj), function (name) {
			var func = _[name] = obj[name];
			_.prototype[name] = function () {
				var args = [this._wrapped];
				return push.apply(args, arguments), result.call(this, func.apply(_, args))
			}
		})
	};
	var idCounter = 0;
	_.uniqueId = function (prefix) {
		var id = ++idCounter + "";
		return prefix ? prefix + id : id
	}, _.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var escapes = {
		"'": "'",
		"\\": "\\",
		"\r": "r",
		"\n": "n",
		"\t": "t",
		"\u2028": "u2028",
		"\u2029": "u2029"
	};
	_.template = function (text, data, settings) {
		var render;
		settings = _.defaults({}, settings, _.templateSettings);
		var matcher = new RegExp([(settings.escape || /(.)^/).source, (settings.interpolate || /(.)^/).source, (settings.evaluate || /(.)^/).source].join("|") + "|$", "g"),
			index = 0,
			source = "__p+='";
		text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
			return source += text.slice(index, offset).replace(/\\|'|\r|\n|\t|\u2028|\u2029/g, function (match) {
				return "\\" + escapes[match]
			}), escape && (source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'"), interpolate && (source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'"), evaluate && (source += "';\n" + evaluate + "\n__p+='"), index = offset + match.length, match
		}), source += "';\n", settings.variable || (source = "with(obj||{}){\n" + source + "}\n"), source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
		try {
			render = new Function(settings.variable || "obj", "_", source)
		} catch (e) {
			throw e.source = source, e
		}
		if (data) return render(data, _);
		var template = function (data) {
			return render.call(this, data, _)
		};
		return template.source = "function(" + (settings.variable || "obj") + "){\n" + source + "}", template
	}, _.chain = function (obj) {
		return _(obj).chain()
	};
	var result = function (obj) {
		return this._chain ? _(obj).chain() : obj
	};
	_.mixin(_), each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (name) {
		var method = ArrayProto[name];
		_.prototype[name] = function () {
			var obj = this._wrapped;
			return method.apply(obj, arguments), "shift" != name && "splice" != name || 0 !== obj.length || delete obj[0], result.call(this, obj)
		}
	}), each(["concat", "join", "slice"], function (name) {
		var method = ArrayProto[name];
		_.prototype[name] = function () {
			return result.call(this, method.apply(this._wrapped, arguments))
		}
	}), _.extend(_.prototype, {
		chain: function () {
			return this._chain = !0, this
		},
		value: function () {
			return this._wrapped
		}
	}), "function" == typeof define && define.amd && define("underscore", [], function () {
		return _
	})
}.call(this),
	function (root, factory) {
		if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function (_, $, exports) {
			root.Backbone = factory(root, exports, _, $)
		});
		else if ("undefined" != typeof exports) {
			var _ = require("underscore");
			factory(root, exports, _)
		} else root.Backbone = factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$)
	}(this, function (root, Backbone, _, $) {
		var previousBackbone = root.Backbone,
			array = [],
			slice = array.slice;
		Backbone.VERSION = "1.1.2", Backbone.$ = $, Backbone.noConflict = function () {
			return root.Backbone = previousBackbone, this
		}, Backbone.emulateHTTP = !1, Backbone.emulateJSON = !1;
		var Events = Backbone.Events = {
				on: function (name, callback, context) {
					return eventsApi(this, "on", name, [callback, context]) && callback ? (this._events || (this._events = {}), (this._events[name] || (this._events[name] = [])).push({
						callback: callback,
						context: context,
						ctx: context || this
					}), this) : this
				},
				once: function (name, callback, context) {
					if (!eventsApi(this, "once", name, [callback, context]) || !callback) return this;
					var self = this,
						once = _.once(function () {
							self.off(name, once), callback.apply(this, arguments)
						});
					return once._callback = callback, this.on(name, once, context)
				},
				off: function (name, callback, context) {
					var retain, ev, events, names, i, l, j, k;
					if (!this._events || !eventsApi(this, "off", name, [callback, context])) return this;
					if (!name && !callback && !context) return this._events = void 0, this;
					for (names = name ? [name] : _.keys(this._events), i = 0, l = names.length; i < l; i++)
						if (name = names[i], events = this._events[name]) {
							if (this._events[name] = retain = [], callback || context)
								for (j = 0, k = events.length; j < k; j++) ev = events[j], (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) && retain.push(ev);
							retain.length || delete this._events[name]
						}
					return this
				},
				trigger: function (name) {
					if (!this._events) return this;
					var args = slice.call(arguments, 1);
					if (!eventsApi(this, "trigger", name, args)) return this;
					var events = this._events[name],
						allEvents = this._events.all;
					return events && triggerEvents(events, args), allEvents && triggerEvents(allEvents, arguments), this
				},
				stopListening: function (obj, name, callback) {
					var listeningTo = this._listeningTo;
					if (!listeningTo) return this;
					var remove = !name && !callback;
					callback || "object" != typeof name || (callback = this), obj && ((listeningTo = {})[obj._listenId] = obj);
					for (var id in listeningTo) obj = listeningTo[id], obj.off(name, callback, this), (remove || _.isEmpty(obj._events)) && delete this._listeningTo[id];
					return this
				}
			},
			eventSplitter = /\s+/,
			eventsApi = function (obj, action, name, rest) {
				if (!name) return !0;
				if ("object" == typeof name) {
					for (var key in name) obj[action].apply(obj, [key, name[key]].concat(rest));
					return !1
				}
				if (eventSplitter.test(name)) {
					for (var names = name.split(eventSplitter), i = 0, l = names.length; i < l; i++) obj[action].apply(obj, [names[i]].concat(rest));
					return !1
				}
				return !0
			},
			triggerEvents = function (events, args) {
				var ev, i = -1,
					l = events.length,
					a1 = args[0],
					a2 = args[1],
					a3 = args[2];
				switch (args.length) {
					case 0:
						for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx);
						return;
					case 1:
						for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx, a1);
						return;
					case 2:
						for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx, a1, a2);
						return;
					case 3:
						for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
						return;
					default:
						for (; ++i < l;)(ev = events[i]).callback.apply(ev.ctx, args);
						return
				}
			},
			listenMethods = {
				listenTo: "on",
				listenToOnce: "once"
			};
		_.each(listenMethods, function (implementation, method) {
			Events[method] = function (obj, name, callback) {
				return (this._listeningTo || (this._listeningTo = {}))[obj._listenId || (obj._listenId = _.uniqueId("l"))] = obj, callback || "object" != typeof name || (callback = this), obj[implementation](name, callback, this), this
			}
		}), Events.bind = Events.on, Events.unbind = Events.off, _.extend(Backbone, Events);
		var Model = Backbone.Model = function (attributes, options) {
			var attrs = attributes || {};
			options || (options = {}), this.cid = _.uniqueId("c"), this.attributes = {}, options.collection && (this.collection = options.collection), options.parse && (attrs = this.parse(attrs, options) || {}), attrs = _.defaults({}, attrs, _.result(this, "defaults")), this.set(attrs, options), this.changed = {}, this.initialize.apply(this, arguments)
		};
		_.extend(Model.prototype, Events, {
			changed: null,
			validationError: null,
			idAttribute: "id",
			initialize: function () {},
			toJSON: function (options) {
				return _.clone(this.attributes)
			},
			sync: function () {
				return Backbone.sync.apply(this, arguments)
			},
			get: function (attr) {
				return this.attributes[attr]
			},
			escape: function (attr) {
				return _.escape(this.get(attr))
			},
			has: function (attr) {
				return null != this.get(attr)
			},
			set: function (key, val, options) {
				var attr, attrs, unset, changes, silent, changing, prev, current;
				if (null == key) return this;
				if ("object" == typeof key ? (attrs = key, options = val) : (attrs = {})[key] = val, options || (options = {}), !this._validate(attrs, options)) return !1;
				unset = options.unset, silent = options.silent, changes = [], changing = this._changing, this._changing = !0, changing || (this._previousAttributes = _.clone(this.attributes), this.changed = {}), current = this.attributes, prev = this._previousAttributes, this.idAttribute in attrs && (this.id = attrs[this.idAttribute]);
				for (attr in attrs) val = attrs[attr], _.isEqual(current[attr], val) || changes.push(attr), _.isEqual(prev[attr], val) ? delete this.changed[attr] : this.changed[attr] = val, unset ? delete current[attr] : current[attr] = val;
				if (!silent) {
					changes.length && (this._pending = options);
					for (var i = 0, l = changes.length; i < l; i++) this.trigger("change:" + changes[i], this, current[changes[i]], options)
				}
				if (changing) return this;
				if (!silent)
					for (; this._pending;) options = this._pending, this._pending = !1, this.trigger("change", this, options);
				return this._pending = !1, this._changing = !1, this
			},
			unset: function (attr, options) {
				return this.set(attr, void 0, _.extend({}, options, {
					unset: !0
				}))
			},
			clear: function (options) {
				var attrs = {};
				for (var key in this.attributes) attrs[key] = void 0;
				return this.set(attrs, _.extend({}, options, {
					unset: !0
				}))
			},
			hasChanged: function (attr) {
				return null == attr ? !_.isEmpty(this.changed) : _.has(this.changed, attr)
			},
			changedAttributes: function (diff) {
				if (!diff) return !!this.hasChanged() && _.clone(this.changed);
				var val, changed = !1,
					old = this._changing ? this._previousAttributes : this.attributes;
				for (var attr in diff) _.isEqual(old[attr], val = diff[attr]) || ((changed || (changed = {}))[attr] = val);
				return changed
			},
			previous: function (attr) {
				return null != attr && this._previousAttributes ? this._previousAttributes[attr] : null
			},
			previousAttributes: function () {
				return _.clone(this._previousAttributes)
			},
			fetch: function (options) {
				options = options ? _.clone(options) : {}, void 0 === options.parse && (options.parse = !0);
				var model = this,
					success = options.success;
				return options.success = function (resp) {
					if (!model.set(model.parse(resp, options), options)) return !1;
					success && success(model, resp, options), model.trigger("sync", model, resp, options)
				}, wrapError(this, options), this.sync("read", this, options)
			},
			save: function (key, val, options) {
				var attrs, method, xhr, attributes = this.attributes;
				if (null == key || "object" == typeof key ? (attrs = key, options = val) : (attrs = {})[key] = val, options = _.extend({
						validate: !0
					}, options), attrs && !options.wait) {
					if (!this.set(attrs, options)) return !1
				} else if (!this._validate(attrs, options)) return !1;
				attrs && options.wait && (this.attributes = _.extend({}, attributes, attrs)), void 0 === options.parse && (options.parse = !0);
				var model = this,
					success = options.success;
				return options.success = function (resp) {
					model.attributes = attributes;
					var serverAttrs = model.parse(resp, options);
					if (options.wait && (serverAttrs = _.extend(attrs || {}, serverAttrs)), _.isObject(serverAttrs) && !model.set(serverAttrs, options)) return !1;
					success && success(model, resp, options), model.trigger("sync", model, resp, options)
				}, wrapError(this, options), method = this.isNew() ? "create" : options.patch ? "patch" : "update", "patch" === method && (options.attrs = attrs), xhr = this.sync(method, this, options), attrs && options.wait && (this.attributes = attributes), xhr
			},
			destroy: function (options) {
				options = options ? _.clone(options) : {};
				var model = this,
					success = options.success,
					destroy = function () {
						model.trigger("destroy", model, model.collection, options)
					};
				if (options.success = function (resp) {
						(options.wait || model.isNew()) && destroy(), success && success(model, resp, options), model.isNew() || model.trigger("sync", model, resp, options)
					}, this.isNew()) return options.success(), !1;
				wrapError(this, options);
				var xhr = this.sync("delete", this, options);
				return options.wait || destroy(), xhr
			},
			url: function () {
				var base = _.result(this, "urlRoot") || _.result(this.collection, "url") || urlError();
				return this.isNew() ? base : base.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
			},
			parse: function (resp, options) {
				return resp
			},
			clone: function () {
				return new this.constructor(this.attributes)
			},
			isNew: function () {
				return !this.has(this.idAttribute)
			},
			isValid: function (options) {
				return this._validate({}, _.extend(options || {}, {
					validate: !0
				}))
			},
			_validate: function (attrs, options) {
				if (!options.validate || !this.validate) return !0;
				attrs = _.extend({}, this.attributes, attrs);
				var error = this.validationError = this.validate(attrs, options) || null;
				return !error || (this.trigger("invalid", this, error, _.extend(options, {
					validationError: error
				})), !1)
			}
		});
		var modelMethods = ["keys", "values", "pairs", "invert", "pick", "omit"];
		_.each(modelMethods, function (method) {
			Model.prototype[method] = function () {
				var args = slice.call(arguments);
				return args.unshift(this.attributes), _[method].apply(_, args)
			}
		});
		var Collection = Backbone.Collection = function (models, options) {
				options || (options = {}), options.model && (this.model = options.model), void 0 !== options.comparator && (this.comparator = options.comparator), this._reset(), this.initialize.apply(this, arguments), models && this.reset(models, _.extend({
					silent: !0
				}, options))
			},
			setOptions = {
				add: !0,
				remove: !0,
				merge: !0
			},
			addOptions = {
				add: !0,
				remove: !1
			};
		_.extend(Collection.prototype, Events, {
			model: Model,
			initialize: function () {},
			toJSON: function (options) {
				return this.map(function (model) {
					return model.toJSON(options)
				})
			},
			sync: function () {
				return Backbone.sync.apply(this, arguments)
			},
			add: function (models, options) {
				return this.set(models, _.extend({
					merge: !1
				}, options, addOptions))
			},
			remove: function (models, options) {
				var singular = !_.isArray(models);
				models = singular ? [models] : _.clone(models), options || (options = {});
				var i, l, index, model;
				for (i = 0, l = models.length; i < l; i++)(model = models[i] = this.get(models[i])) && (delete this._byId[model.id], delete this._byId[model.cid], index = this.indexOf(model), this.models.splice(index, 1), this.length--, options.silent || (options.index = index, model.trigger("remove", model, this, options)), this._removeReference(model, options));
				return singular ? models[0] : models
			},
			set: function (models, options) {
				options = _.defaults({}, options, setOptions), options.parse && (models = this.parse(models, options));
				var singular = !_.isArray(models);
				models = singular ? models ? [models] : [] : _.clone(models);
				var i, l, id, model, attrs, existing, sort, at = options.at,
					targetModel = this.model,
					sortable = this.comparator && null == at && !1 !== options.sort,
					sortAttr = _.isString(this.comparator) ? this.comparator : null,
					toAdd = [],
					toRemove = [],
					modelMap = {},
					add = options.add,
					merge = options.merge,
					remove = options.remove,
					order = !(sortable || !add || !remove) && [];
				for (i = 0, l = models.length; i < l; i++) {
					if (attrs = models[i] || {}, id = attrs instanceof Model ? model = attrs : attrs[targetModel.prototype.idAttribute || "id"], existing = this.get(id)) remove && (modelMap[existing.cid] = !0), merge && (attrs = attrs === model ? model.attributes : attrs, options.parse && (attrs = existing.parse(attrs, options)), existing.set(attrs, options), sortable && !sort && existing.hasChanged(sortAttr) && (sort = !0)), models[i] = existing;
					else if (add) {
						if (!(model = models[i] = this._prepareModel(attrs, options))) continue;
						toAdd.push(model), this._addReference(model, options)
					}
					model = existing || model, !order || !model.isNew() && modelMap[model.id] || order.push(model), modelMap[model.id] = !0
				}
				if (remove) {
					for (i = 0, l = this.length; i < l; ++i) modelMap[(model = this.models[i]).cid] || toRemove.push(model);
					toRemove.length && this.remove(toRemove, options)
				}
				if (toAdd.length || order && order.length)
					if (sortable && (sort = !0), this.length += toAdd.length, null != at)
						for (i = 0, l = toAdd.length; i < l; i++) this.models.splice(at + i, 0, toAdd[i]);
					else {
						order && (this.models.length = 0);
						var orderedModels = order || toAdd;
						for (i = 0, l = orderedModels.length; i < l; i++) this.models.push(orderedModels[i])
					}
				if (sort && this.sort({
						silent: !0
					}), !options.silent) {
					for (i = 0, l = toAdd.length; i < l; i++)(model = toAdd[i]).trigger("add", model, this, options);
					(sort || order && order.length) && this.trigger("sort", this, options)
				}
				return singular ? models[0] : models
			},
			reset: function (models, options) {
				options || (options = {});
				for (var i = 0, l = this.models.length; i < l; i++) this._removeReference(this.models[i], options);
				return options.previousModels = this.models, this._reset(), models = this.add(models, _.extend({
					silent: !0
				}, options)), options.silent || this.trigger("reset", this, options), models
			},
			push: function (model, options) {
				return this.add(model, _.extend({
					at: this.length
				}, options))
			},
			pop: function (options) {
				var model = this.at(this.length - 1);
				return this.remove(model, options), model
			},
			unshift: function (model, options) {
				return this.add(model, _.extend({
					at: 0
				}, options))
			},
			shift: function (options) {
				var model = this.at(0);
				return this.remove(model, options), model
			},
			slice: function () {
				return slice.apply(this.models, arguments)
			},
			get: function (obj) {
				if (null != obj) return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid]
			},
			at: function (index) {
				return this.models[index]
			},
			where: function (attrs, first) {
				return _.isEmpty(attrs) ? first ? void 0 : [] : this[first ? "find" : "filter"](function (model) {
					for (var key in attrs)
						if (attrs[key] !== model.get(key)) return !1;
					return !0
				})
			},
			findWhere: function (attrs) {
				return this.where(attrs, !0)
			},
			sort: function (options) {
				if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
				return options || (options = {}), _.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(_.bind(this.comparator, this)), options.silent || this.trigger("sort", this, options), this
			},
			pluck: function (attr) {
				return _.invoke(this.models, "get", attr)
			},
			fetch: function (options) {
				options = options ? _.clone(options) : {}, void 0 === options.parse && (options.parse = !0);
				var success = options.success,
					collection = this;
				return options.success = function (resp) {
					var method = options.reset ? "reset" : "set";
					collection[method](resp, options), success && success(collection, resp, options), collection.trigger("sync", collection, resp, options)
				}, wrapError(this, options), this.sync("read", this, options)
			},
			create: function (model, options) {
				if (options = options ? _.clone(options) : {}, !(model = this._prepareModel(model, options))) return !1;
				options.wait || this.add(model, options);
				var collection = this,
					success = options.success;
				return options.success = function (model, resp) {
					options.wait && collection.add(model, options), success && success(model, resp, options)
				}, model.save(null, options), model
			},
			parse: function (resp, options) {
				return resp
			},
			clone: function () {
				return new this.constructor(this.models)
			},
			_reset: function () {
				this.length = 0, this.models = [], this._byId = {}
			},
			_prepareModel: function (attrs, options) {
				if (attrs instanceof Model) return attrs;
				options = options ? _.clone(options) : {}, options.collection = this;
				var model = new this.model(attrs, options);
				return model.validationError ? (this.trigger("invalid", this, model.validationError, options), !1) : model
			},
			_addReference: function (model, options) {
				this._byId[model.cid] = model, null != model.id && (this._byId[model.id] = model), model.collection || (model.collection = this), model.on("all", this._onModelEvent, this)
			},
			_removeReference: function (model, options) {
				this === model.collection && delete model.collection, model.off("all", this._onModelEvent, this)
			},
			_onModelEvent: function (event, model, collection, options) {
				("add" !== event && "remove" !== event || collection === this) && ("destroy" === event && this.remove(model, options), model && event === "change:" + model.idAttribute && (delete this._byId[model.previous(model.idAttribute)], null != model.id && (this._byId[model.id] = model)), this.trigger.apply(this, arguments))
			}
		});
		var methods = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
		_.each(methods, function (method) {
			Collection.prototype[method] = function () {
				var args = slice.call(arguments);
				return args.unshift(this.models), _[method].apply(_, args)
			}
		});
		var attributeMethods = ["groupBy", "countBy", "sortBy", "indexBy"];
		_.each(attributeMethods, function (method) {
			Collection.prototype[method] = function (value, context) {
				var iterator = _.isFunction(value) ? value : function (model) {
					return model.get(value)
				};
				return _[method](this.models, iterator, context)
			}
		});
		var View = Backbone.View = function (options) {
				this.cid = _.uniqueId("view"), options || (options = {}), _.extend(this, _.pick(options, viewOptions)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
			},
			viewOptions = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
		_.extend(View.prototype, Events, {
			tagName: "div",
			$: function (selector) {
				return this.$el.find(selector)
			},
			initialize: function () {},
			render: function () {
				return this
			},
			remove: function () {
				return this.$el.remove(), this.stopListening(), this
			},
			setElement: function (element, delegate) {
				return this.$el && this.undelegateEvents(), this.$el = element instanceof Backbone.$ ? element : Backbone.$(element), this.el = this.$el[0], !1 !== delegate && this.delegateEvents(), this
			},
			delegateEvents: function (events) {
				if (!events && !(events = _.result(this, "events"))) return this;
				this.undelegateEvents();
				for (var key in events) {
					var method = events[key];
					if (_.isFunction(method) || (method = this[events[key]]), method) {
						var match = key.match(/^(\S+)\s*(.*)$/),
							eventName = match[1],
							selector = match[2];
						method = _.bind(method, this), eventName += ".delegateEvents" + this.cid, "" === selector ? this.$el.on(eventName, method) : this.$el.on(eventName, selector, method)
					}
				}
				return this
			},
			undelegateEvents: function () {
				return this.$el.off(".delegateEvents" + this.cid), this
			},
			_ensureElement: function () {
				if (this.el) this.setElement(_.result(this, "el"), !1);
				else {
					var attrs = _.extend({}, _.result(this, "attributes"));
					this.id && (attrs.id = _.result(this, "id")), this.className && (attrs.class = _.result(this, "className"));
					var $el = Backbone.$("<" + _.result(this, "tagName") + ">").attr(attrs);
					this.setElement($el, !1)
				}
			}
		}), Backbone.sync = function (method, model, options) {
			var type = methodMap[method];
			_.defaults(options || (options = {}), {
				emulateHTTP: Backbone.emulateHTTP,
				emulateJSON: Backbone.emulateJSON
			});
			var params = {
				type: type,
				dataType: "json"
			};
			if (options.url || (params.url = _.result(model, "url") || urlError()), null != options.data || !model || "create" !== method && "update" !== method && "patch" !== method || (params.contentType = "application/json", params.data = JSON.stringify(options.attrs || model.toJSON(options))), options.emulateJSON && (params.contentType = "application/x-www-form-urlencoded", params.data = params.data ? {
					model: params.data
				} : {}), options.emulateHTTP && ("PUT" === type || "DELETE" === type || "PATCH" === type)) {
				params.type = "POST", options.emulateJSON && (params.data._method = type);
				var beforeSend = options.beforeSend;
				options.beforeSend = function (xhr) {
					if (xhr.setRequestHeader("X-HTTP-Method-Override", type), beforeSend) return beforeSend.apply(this, arguments)
				}
			}
			"GET" === params.type || options.emulateJSON || (params.processData = !1), "PATCH" === params.type && noXhrPatch && (params.xhr = function () {
				return new ActiveXObject("Microsoft.XMLHTTP")
			});
			var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
			return model.trigger("request", model, xhr, options), xhr
		};
		var noXhrPatch = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
			methodMap = {
				create: "POST",
				update: "PUT",
				patch: "PATCH",
				delete: "DELETE",
				read: "GET"
			};
		Backbone.ajax = function () {
			return Backbone.$.ajax.apply(Backbone.$, arguments)
		};
		var Router = Backbone.Router = function (options) {
			options || (options = {}), options.routes && (this.routes = options.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
		};
		_.extend(Router.prototype, Events, {
			initialize: function () {},
			route: function (route, name, callback) {
				_.isRegExp(route) || (route = this._routeToRegExp(route)), _.isFunction(name) && (callback = name, name = ""), callback || (callback = this[name]);
				var router = this;
				return Backbone.history.route(route, function (fragment) {
					var args = router._extractParameters(route, fragment);
					router.execute(callback, args), router.trigger.apply(router, ["route:" + name].concat(args)), router.trigger("route", name, args), Backbone.history.trigger("route", router, name, args)
				}), this
			},
			execute: function (callback, args) {
				callback && callback.apply(this, args)
			},
			navigate: function (fragment, options) {
				return Backbone.history.navigate(fragment, options), this
			},
			_bindRoutes: function () {
				if (this.routes) {
					this.routes = _.result(this, "routes");
					for (var route, routes = _.keys(this.routes); null != (route = routes.pop());) this.route(route, this.routes[route])
				}
			},
			_routeToRegExp: function (route) {
				return route = route.replace(/[\-{}\[\]+?.,\\\^$|#\s]/g, "\\$&").replace(/\((.*?)\)/g, "(?:$1)?").replace(/(\(\?)?:\w+/g, function (match, optional) {
					return optional ? match : "([^/?]+)"
				}).replace(/\*\w+/g, "([^?]*?)"), new RegExp("^" + route + "(?:\\?([\\s\\S]*))?$")
			},
			_extractParameters: function (route, fragment) {
				var params = route.exec(fragment).slice(1);
				return _.map(params, function (param, i) {
					return i === params.length - 1 ? param || null : param ? decodeURIComponent(param) : null
				})
			}
		});
		var History = Backbone.History = function () {
				this.handlers = [], _.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
			},
			isExplorer = /msie [\w.]+/;
		History.started = !1, _.extend(History.prototype, Events, {
			interval: 50,
			atRoot: function () {
				return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
			},
			getHash: function (window) {
				var match = (window || this).location.href.match(/#(.*)$/);
				return match ? match[1] : ""
			},
			getFragment: function (fragment, forcePushState) {
				if (null == fragment)
					if (this._hasPushState || !this._wantsHashChange || forcePushState) {
						fragment = decodeURI(this.location.pathname + this.location.search);
						var root = this.root.replace(/\/$/, "");
						fragment.indexOf(root) || (fragment = fragment.slice(root.length))
					} else fragment = this.getHash();
				return fragment.replace(/^[#\/]|\s+$/g, "")
			},
			start: function (options) {
				if (History.started) throw new Error("Backbone.history has already been started");
				History.started = !0, this.options = _.extend({
					root: "/"
				}, this.options, options), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
				var fragment = this.getFragment(),
					docMode = document.documentMode,
					oldIE = isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7);
				if (this.root = ("/" + this.root + "/").replace(/^\/+|\/+$/g, "/"), oldIE && this._wantsHashChange) {
					var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
					this.iframe = frame.hide().appendTo("body")[0].contentWindow, this.navigate(fragment)
				}
				this._hasPushState ? Backbone.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !oldIE ? Backbone.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = fragment;
				var loc = this.location;
				if (this._wantsHashChange && this._wantsPushState) {
					if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
					this._hasPushState && this.atRoot() && loc.hash && (this.fragment = this.getHash().replace(/^[#\/]|\s+$/g, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
				}
				if (!this.options.silent) return this.loadUrl()
			},
			stop: function () {
				Backbone.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), History.started = !1
			},
			route: function (route, callback) {
				this.handlers.unshift({
					route: route,
					callback: callback
				})
			},
			checkUrl: function (e) {
				var current = this.getFragment();
				if (current === this.fragment && this.iframe && (current = this.getFragment(this.getHash(this.iframe))), current === this.fragment) return !1;
				this.iframe && this.navigate(current), this.loadUrl()
			},
			loadUrl: function (fragment) {
				return fragment = this.fragment = this.getFragment(fragment), _.any(this.handlers, function (handler) {
					if (handler.route.test(fragment)) return handler.callback(fragment), !0
				})
			},
			navigate: function (fragment, options) {
				if (!History.started) return !1;
				options && !0 !== options || (options = {
					trigger: !!options
				});
				var url = this.root + (fragment = this.getFragment(fragment || ""));
				if (fragment = fragment.replace(/#.*$/, ""), this.fragment !== fragment) {
					if (this.fragment = fragment, "" === fragment && "/" !== url && (url = url.slice(0, -1)), this._hasPushState) this.history[options.replace ? "replaceState" : "pushState"]({}, document.title, url);
					else {
						if (!this._wantsHashChange) return this.location.assign(url);
						this._updateHash(this.location, fragment, options.replace), this.iframe && fragment !== this.getFragment(this.getHash(this.iframe)) && (options.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, fragment, options.replace))
					}
					return options.trigger ? this.loadUrl(fragment) : void 0
				}
			},
			_updateHash: function (location, fragment, replace) {
				if (replace) {
					var href = location.href.replace(/(javascript:|#).*$/, "");
					location.replace(href + "#" + fragment)
				} else location.hash = "#" + fragment
			}
		}), Backbone.history = new History;
		var extend = function (protoProps, staticProps) {
			var child, parent = this;
			child = protoProps && _.has(protoProps, "constructor") ? protoProps.constructor : function () {
				return parent.apply(this, arguments)
			}, _.extend(child, parent, staticProps);
			var Surrogate = function () {
				this.constructor = child
			};
			return Surrogate.prototype = parent.prototype, child.prototype = new Surrogate, protoProps && _.extend(child.prototype, protoProps), child.__super__ = parent.prototype, child
		};
		Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
		var urlError = function () {
				throw new Error('A "url" property or function must be specified')
			},
			wrapError = function (model, options) {
				var error = options.error;
				options.error = function (resp) {
					error && error(model, resp, options), model.trigger("error", model, resp, options)
				}
			};
		return Backbone
	}),
	function (window, undefined) {
		"use strict";

		function setup() {
			Hammer.READY || (Event.determineEventTypes(), Utils.each(Hammer.gestures, function (gesture) {
				Detection.register(gesture)
			}), Event.onTouch(Hammer.DOCUMENT, EVENT_MOVE, Detection.detect), Event.onTouch(Hammer.DOCUMENT, EVENT_END, Detection.detect), Hammer.READY = !0)
		}

		function setupPlugin(Hammer, $) {
			Date.now || (Date.now = function () {
				return (new Date).getTime()
			}), Hammer.utils.each(["on", "off"], function (method) {
				Hammer.utils[method] = function (element, type, handler) {
					$(element)[method](type, function ($ev) {
						var data = $.extend({}, $ev.originalEvent, $ev);
						data.button === undefined && (data.button = $ev.which - 1), handler.call(this, data)
					})
				}
			}), Hammer.Instance.prototype.trigger = function (gesture, eventData) {
				var el = $(this.element);
				return el.has(eventData.target).length && (el = $(eventData.target)), el.trigger({
					type: gesture,
					gesture: eventData
				})
			}, $.fn.hammer = function (options) {
				return this.each(function () {
					var el = $(this),
						inst = el.data("hammer");
					inst ? inst && options && Hammer.utils.extend(inst.options, options) : el.data("hammer", new Hammer(this, options || {}))
				})
			}
		}
		var Hammer = function Hammer(element, options) {
			return new Hammer.Instance(element, options || {})
		};
		Hammer.VERSION = "1.1.3", Hammer.defaults = {
			behavior: {
				userSelect: "none",
				touchAction: "pan-y",
				touchCallout: "none",
				contentZooming: "none",
				userDrag: "none",
				tapHighlightColor: "rgba(0,0,0,0)"
			}
		}, Hammer.DOCUMENT = document, Hammer.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, Hammer.HAS_TOUCHEVENTS = "ontouchstart" in window, Hammer.IS_MOBILE = /mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent), Hammer.NO_MOUSEEVENTS = Hammer.HAS_TOUCHEVENTS && Hammer.IS_MOBILE || Hammer.HAS_POINTEREVENTS, Hammer.CALCULATE_INTERVAL = 25;
		var EVENT_TYPES = {},
			DIRECTION_DOWN = Hammer.DIRECTION_DOWN = "down",
			DIRECTION_LEFT = Hammer.DIRECTION_LEFT = "left",
			DIRECTION_UP = Hammer.DIRECTION_UP = "up",
			DIRECTION_RIGHT = Hammer.DIRECTION_RIGHT = "right",
			POINTER_MOUSE = Hammer.POINTER_MOUSE = "mouse",
			POINTER_TOUCH = Hammer.POINTER_TOUCH = "touch",
			POINTER_PEN = Hammer.POINTER_PEN = "pen",
			EVENT_START = Hammer.EVENT_START = "start",
			EVENT_MOVE = Hammer.EVENT_MOVE = "move",
			EVENT_END = Hammer.EVENT_END = "end",
			EVENT_RELEASE = Hammer.EVENT_RELEASE = "release",
			EVENT_TOUCH = Hammer.EVENT_TOUCH = "touch";
		Hammer.READY = !1, Hammer.plugins = Hammer.plugins || {}, Hammer.gestures = Hammer.gestures || {};
		var Utils = Hammer.utils = {
			extend: function (dest, src, merge) {
				for (var key in src) !src.hasOwnProperty(key) || dest[key] !== undefined && merge || (dest[key] = src[key]);
				return dest
			},
			on: function (element, type, handler) {
				element.addEventListener(type, handler, !1)
			},
			off: function (element, type, handler) {
				element.removeEventListener(type, handler, !1)
			},
			each: function (obj, iterator, context) {
				var i, len;
				if ("forEach" in obj) obj.forEach(iterator, context);
				else if (obj.length !== undefined) {
					for (i = 0, len = obj.length; i < len; i++)
						if (!1 === iterator.call(context, obj[i], i, obj)) return
				} else
					for (i in obj)
						if (obj.hasOwnProperty(i) && !1 === iterator.call(context, obj[i], i, obj)) return
			},
			inStr: function (src, find) {
				return src.indexOf(find) > -1
			},
			inArray: function (src, find) {
				if (src.indexOf) {
					var index = src.indexOf(find);
					return -1 !== index && index
				}
				for (var i = 0, len = src.length; i < len; i++)
					if (src[i] === find) return i;
				return !1
			},
			toArray: function (obj) {
				return Array.prototype.slice.call(obj, 0)
			},
			hasParent: function (node, parent) {
				for (; node;) {
					if (node == parent) return !0;
					node = node.parentNode
				}
				return !1
			},
			getCenter: function (touches) {
				var pageX = [],
					pageY = [],
					clientX = [],
					clientY = [],
					min = Math.min,
					max = Math.max;
				return 1 === touches.length ? {
					pageX: touches[0].pageX,
					pageY: touches[0].pageY,
					clientX: touches[0].clientX,
					clientY: touches[0].clientY
				} : (Utils.each(touches, function (touch) {
					pageX.push(touch.pageX), pageY.push(touch.pageY), clientX.push(touch.clientX), clientY.push(touch.clientY)
				}), {
					pageX: (min.apply(Math, pageX) + max.apply(Math, pageX)) / 2,
					pageY: (min.apply(Math, pageY) + max.apply(Math, pageY)) / 2,
					clientX: (min.apply(Math, clientX) + max.apply(Math, clientX)) / 2,
					clientY: (min.apply(Math, clientY) + max.apply(Math, clientY)) / 2
				})
			},
			getVelocity: function (deltaTime, deltaX, deltaY) {
				return {
					x: Math.abs(deltaX / deltaTime) || 0,
					y: Math.abs(deltaY / deltaTime) || 0
				}
			},
			getAngle: function (touch1, touch2) {
				var x = touch2.clientX - touch1.clientX,
					y = touch2.clientY - touch1.clientY;
				return 180 * Math.atan2(y, x) / Math.PI
			},
			getDirection: function (touch1, touch2) {
				return Math.abs(touch1.clientX - touch2.clientX) >= Math.abs(touch1.clientY - touch2.clientY) ? touch1.clientX - touch2.clientX > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT : touch1.clientY - touch2.clientY > 0 ? DIRECTION_UP : DIRECTION_DOWN
			},
			getDistance: function (touch1, touch2) {
				var x = touch2.clientX - touch1.clientX,
					y = touch2.clientY - touch1.clientY;
				return Math.sqrt(x * x + y * y)
			},
			getScale: function (start, end) {
				return start.length >= 2 && end.length >= 2 ? this.getDistance(end[0], end[1]) / this.getDistance(start[0], start[1]) : 1
			},
			getRotation: function (start, end) {
				return start.length >= 2 && end.length >= 2 ? this.getAngle(end[1], end[0]) - this.getAngle(start[1], start[0]) : 0
			},
			isVertical: function (direction) {
				return direction == DIRECTION_UP || direction == DIRECTION_DOWN
			},
			setPrefixedCss: function (element, prop, value, toggle) {
				var prefixes = ["", "Webkit", "Moz", "O", "ms"];
				prop = Utils.toCamelCase(prop);
				for (var i = 0; i < prefixes.length; i++) {
					var p = prop;
					if (prefixes[i] && (p = prefixes[i] + p.slice(0, 1).toUpperCase() + p.slice(1)), p in element.style) {
						element.style[p] = (null == toggle || toggle) && value || "";
						break
					}
				}
			},
			toggleBehavior: function (element, props, toggle) {
				if (props && element && element.style) {
					Utils.each(props, function (value, prop) {
						Utils.setPrefixedCss(element, prop, value, toggle)
					});
					var falseFn = toggle && function () {
						return !1
					};
					"none" == props.userSelect && (element.onselectstart = falseFn), "none" == props.userDrag && (element.ondragstart = falseFn)
				}
			},
			toCamelCase: function (str) {
				return str.replace(/[_-]([a-z])/g, function (s) {
					return s[1].toUpperCase()
				})
			}
		};
		Hammer.Instance = function (element, options) {
			var self = this;
			setup(), this.element = element, this.enabled = !0, Utils.each(options, function (value, name) {
				delete options[name], options[Utils.toCamelCase(name)] = value
			}), this.options = Utils.extend(Utils.extend({}, Hammer.defaults), options || {}), this.options.behavior && Utils.toggleBehavior(this.element, this.options.behavior, !0), this.eventStartHandler = Event.onTouch(element, EVENT_START, function (ev) {
				self.enabled && ev.eventType == EVENT_START ? Detection.startDetect(self, ev) : ev.eventType == EVENT_TOUCH && Detection.detect(ev)
			}), this.eventHandlers = []
		}, Hammer.Instance.prototype = {
			on: function (gestures, handler) {
				var self = this;
				return Event.on(self.element, gestures, handler, function (type) {
					self.eventHandlers.push({
						gesture: type,
						handler: handler
					})
				}), self
			},
			off: function (gestures, handler) {
				var self = this;
				return Event.off(self.element, gestures, handler, function (type) {
					var index = Utils.inArray({
						gesture: type,
						handler: handler
					});
					!1 !== index && self.eventHandlers.splice(index, 1)
				}), self
			},
			trigger: function (gesture, eventData) {
				eventData || (eventData = {});
				var event = Hammer.DOCUMENT.createEvent("Event");
				event.initEvent(gesture, !0, !0), event.gesture = eventData;
				var element = this.element;
				return Utils.hasParent(eventData.target, element) && (element = eventData.target), element.dispatchEvent(event), this
			},
			enable: function (state) {
				return this.enabled = state, this
			},
			dispose: function () {
				var i, eh;
				for (Utils.toggleBehavior(this.element, this.options.behavior, !1), i = -1; eh = this.eventHandlers[++i];) Utils.off(this.element, eh.gesture, eh.handler);
				return this.eventHandlers = [], Event.off(this.element, EVENT_TYPES[EVENT_START], this.eventStartHandler), null
			}
		};
		var Event = Hammer.event = {
				preventMouseEvents: !1,
				started: !1,
				shouldDetect: !1,
				on: function (element, type, handler, hook) {
					var types = type.split(" ");
					Utils.each(types, function (type) {
						Utils.on(element, type, handler), hook && hook(type)
					})
				},
				off: function (element, type, handler, hook) {
					var types = type.split(" ");
					Utils.each(types, function (type) {
						Utils.off(element, type, handler), hook && hook(type)
					})
				},
				onTouch: function (element, eventType, handler) {
					var self = this,
						onTouchHandler = function (ev) {
							var triggerType, srcType = ev.type.toLowerCase(),
								isPointer = Hammer.HAS_POINTEREVENTS,
								isMouse = Utils.inStr(srcType, "mouse");
							isMouse && self.preventMouseEvents || (isMouse && eventType == EVENT_START && 0 === ev.button ? (self.preventMouseEvents = !1, self.shouldDetect = !0) : isPointer && eventType == EVENT_START ? self.shouldDetect = 1 === ev.buttons || PointerEvent.matchType(POINTER_TOUCH, ev) : isMouse || eventType != EVENT_START || (self.preventMouseEvents = !0, self.shouldDetect = !0), isPointer && eventType != EVENT_END && PointerEvent.updatePointer(eventType, ev), self.shouldDetect && (triggerType = self.doDetect.call(self, ev, eventType, element, handler)), triggerType == EVENT_END && (self.preventMouseEvents = !1, self.shouldDetect = !1, PointerEvent.reset()), isPointer && eventType == EVENT_END && PointerEvent.updatePointer(eventType, ev))
						};
					return this.on(element, EVENT_TYPES[eventType], onTouchHandler), onTouchHandler
				},
				doDetect: function (ev, eventType, element, handler) {
					var touchList = this.getTouchList(ev, eventType),
						touchListLength = touchList.length,
						triggerType = eventType,
						triggerChange = touchList.trigger,
						changedLength = touchListLength;
					eventType == EVENT_START ? triggerChange = EVENT_TOUCH : eventType == EVENT_END && (triggerChange = EVENT_RELEASE, changedLength = touchList.length - (ev.changedTouches ? ev.changedTouches.length : 1)), changedLength > 0 && this.started && (triggerType = EVENT_MOVE), this.started = !0;
					var evData = this.collectEventData(element, triggerType, touchList, ev);
					return eventType != EVENT_END && handler.call(Detection, evData), triggerChange && (evData.changedLength = changedLength, evData.eventType = triggerChange, handler.call(Detection, evData), evData.eventType = triggerType, delete evData.changedLength), triggerType == EVENT_END && (handler.call(Detection, evData), this.started = !1), triggerType
				},
				determineEventTypes: function () {
					var types;
					return types = Hammer.HAS_POINTEREVENTS ? window.PointerEvent ? ["pointerdown", "pointermove", "pointerup pointercancel lostpointercapture"] : ["MSPointerDown", "MSPointerMove", "MSPointerUp MSPointerCancel MSLostPointerCapture"] : Hammer.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], EVENT_TYPES[EVENT_START] = types[0], EVENT_TYPES[EVENT_MOVE] = types[1], EVENT_TYPES[EVENT_END] = types[2], EVENT_TYPES
				},
				getTouchList: function (ev, eventType) {
					if (Hammer.HAS_POINTEREVENTS) return PointerEvent.getTouchList();
					if (ev.touches) {
						if (eventType == EVENT_MOVE) return ev.touches;
						var identifiers = [],
							concat = [].concat(Utils.toArray(ev.touches), Utils.toArray(ev.changedTouches)),
							touchList = [];
						return Utils.each(concat, function (touch) {
							!1 === Utils.inArray(identifiers, touch.identifier) && touchList.push(touch), identifiers.push(touch.identifier)
						}), touchList
					}
					return ev.identifier = 1, [ev]
				},
				collectEventData: function (element, eventType, touches, ev) {
					var pointerType = POINTER_TOUCH;
					return Utils.inStr(ev.type, "mouse") || PointerEvent.matchType(POINTER_MOUSE, ev) ? pointerType = POINTER_MOUSE : PointerEvent.matchType(POINTER_PEN, ev) && (pointerType = POINTER_PEN), {
						center: Utils.getCenter(touches),
						timeStamp: Date.now(),
						target: ev.target,
						touches: touches,
						eventType: eventType,
						pointerType: pointerType,
						srcEvent: ev,
						preventDefault: function () {
							var srcEvent = this.srcEvent;
							srcEvent.preventManipulation && srcEvent.preventManipulation(), srcEvent.preventDefault && srcEvent.preventDefault()
						},
						stopPropagation: function () {
							this.srcEvent.stopPropagation()
						},
						stopDetect: function () {
							return Detection.stopDetect()
						}
					}
				}
			},
			PointerEvent = Hammer.PointerEvent = {
				pointers: {},
				getTouchList: function () {
					var touchlist = [];
					return Utils.each(this.pointers, function (pointer) {
						touchlist.push(pointer)
					}), touchlist
				},
				updatePointer: function (eventType, pointerEvent) {
					eventType == EVENT_END || eventType != EVENT_END && 1 !== pointerEvent.buttons ? delete this.pointers[pointerEvent.pointerId] : (pointerEvent.identifier = pointerEvent.pointerId, this.pointers[pointerEvent.pointerId] = pointerEvent)
				},
				matchType: function (pointerType, ev) {
					if (!ev.pointerType) return !1;
					var pt = ev.pointerType,
						types = {};
					return types[POINTER_MOUSE] = pt === (ev.MSPOINTER_TYPE_MOUSE || POINTER_MOUSE), types[POINTER_TOUCH] = pt === (ev.MSPOINTER_TYPE_TOUCH || POINTER_TOUCH), types[POINTER_PEN] = pt === (ev.MSPOINTER_TYPE_PEN || POINTER_PEN), types[pointerType]
				},
				reset: function () {
					this.pointers = {}
				}
			},
			Detection = Hammer.detection = {
				gestures: [],
				current: null,
				previous: null,
				stopped: !1,
				startDetect: function (inst, eventData) {
					this.current || (this.stopped = !1, this.current = {
						inst: inst,
						startEvent: Utils.extend({}, eventData),
						lastEvent: !1,
						lastCalcEvent: !1,
						futureCalcEvent: !1,
						lastCalcData: {},
						name: ""
					}, this.detect(eventData))
				},
				detect: function (eventData) {
					if (this.current && !this.stopped) {
						eventData = this.extendEventData(eventData);
						var inst = this.current.inst,
							instOptions = inst.options;
						return Utils.each(this.gestures, function (gesture) {
							!this.stopped && inst.enabled && instOptions[gesture.name] && gesture.handler.call(gesture, eventData, inst)
						}, this), this.current && (this.current.lastEvent = eventData), eventData.eventType == EVENT_END && this.stopDetect(), eventData
					}
				},
				stopDetect: function () {
					this.previous = Utils.extend({}, this.current), this.current = null, this.stopped = !0
				},
				getCalculatedData: function (ev, center, deltaTime, deltaX, deltaY) {
					var cur = this.current,
						recalc = !1,
						calcEv = cur.lastCalcEvent,
						calcData = cur.lastCalcData;
					calcEv && ev.timeStamp - calcEv.timeStamp > Hammer.CALCULATE_INTERVAL && (center = calcEv.center, deltaTime = ev.timeStamp - calcEv.timeStamp, deltaX = ev.center.clientX - calcEv.center.clientX, deltaY = ev.center.clientY - calcEv.center.clientY, recalc = !0), ev.eventType != EVENT_TOUCH && ev.eventType != EVENT_RELEASE || (cur.futureCalcEvent = ev), cur.lastCalcEvent && !recalc || (calcData.velocity = Utils.getVelocity(deltaTime, deltaX, deltaY), calcData.angle = Utils.getAngle(center, ev.center), calcData.direction = Utils.getDirection(center, ev.center), cur.lastCalcEvent = cur.futureCalcEvent || ev, cur.futureCalcEvent = ev), ev.velocityX = calcData.velocity.x, ev.velocityY = calcData.velocity.y, ev.interimAngle = calcData.angle, ev.interimDirection = calcData.direction
				},
				extendEventData: function (ev) {
					var cur = this.current,
						startEv = cur.startEvent,
						lastEv = cur.lastEvent || startEv;
					ev.eventType != EVENT_TOUCH && ev.eventType != EVENT_RELEASE || (startEv.touches = [], Utils.each(ev.touches, function (touch) {
						startEv.touches.push({
							clientX: touch.clientX,
							clientY: touch.clientY
						})
					}));
					var deltaTime = ev.timeStamp - startEv.timeStamp,
						deltaX = ev.center.clientX - startEv.center.clientX,
						deltaY = ev.center.clientY - startEv.center.clientY;
					return this.getCalculatedData(ev, lastEv.center, deltaTime, deltaX, deltaY), Utils.extend(ev, {
						startEvent: startEv,
						deltaTime: deltaTime,
						deltaX: deltaX,
						deltaY: deltaY,
						distance: Utils.getDistance(startEv.center, ev.center),
						angle: Utils.getAngle(startEv.center, ev.center),
						direction: Utils.getDirection(startEv.center, ev.center),
						scale: Utils.getScale(startEv.touches, ev.touches),
						rotation: Utils.getRotation(startEv.touches, ev.touches)
					}), ev
				},
				register: function (gesture) {
					var options = gesture.defaults || {};
					return options[gesture.name] === undefined && (options[gesture.name] = !0), Utils.extend(Hammer.defaults, options, !0), gesture.index = gesture.index || 1e3, this.gestures.push(gesture), this.gestures.sort(function (a, b) {
						return a.index < b.index ? -1 : a.index > b.index ? 1 : 0
					}), this.gestures
				}
			};
		! function (name) {
			function dragGesture(ev, inst) {
				var cur = Detection.current;
				if (!(inst.options.dragMaxTouches > 0 && ev.touches.length > inst.options.dragMaxTouches)) switch (ev.eventType) {
					case EVENT_START:
						triggered = !1;
						break;
					case EVENT_MOVE:
						if (ev.distance < inst.options.dragMinDistance && cur.name != name) return;
						var startCenter = cur.startEvent.center;
						if (cur.name != name && (cur.name = name, inst.options.dragDistanceCorrection && ev.distance > 0)) {
							var factor = Math.abs(inst.options.dragMinDistance / ev.distance);
							startCenter.pageX += ev.deltaX * factor, startCenter.pageY += ev.deltaY * factor, startCenter.clientX += ev.deltaX * factor, startCenter.clientY += ev.deltaY * factor, ev = Detection.extendEventData(ev)
						}(cur.lastEvent.dragLockToAxis || inst.options.dragLockToAxis && inst.options.dragLockMinDistance <= ev.distance) && (ev.dragLockToAxis = !0);
						var lastDirection = cur.lastEvent.direction;
						ev.dragLockToAxis && lastDirection !== ev.direction && (Utils.isVertical(lastDirection) ? ev.direction = ev.deltaY < 0 ? DIRECTION_UP : DIRECTION_DOWN : ev.direction = ev.deltaX < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT), triggered || (inst.trigger(name + "start", ev), triggered = !0), inst.trigger(name, ev), inst.trigger(name + ev.direction, ev);
						var isVertical = Utils.isVertical(ev.direction);
						(inst.options.dragBlockVertical && isVertical || inst.options.dragBlockHorizontal && !isVertical) && ev.preventDefault();
						break;
					case EVENT_RELEASE:
						triggered && ev.changedLength <= inst.options.dragMaxTouches && (inst.trigger(name + "end", ev), triggered = !1);
						break;
					case EVENT_END:
						triggered = !1
				}
			}
			var triggered = !1;
			Hammer.gestures.Drag = {
				name: name,
				index: 50,
				handler: dragGesture,
				defaults: {
					dragMinDistance: 10,
					dragDistanceCorrection: !0,
					dragMaxTouches: 1,
					dragBlockHorizontal: !1,
					dragBlockVertical: !1,
					dragLockToAxis: !1,
					dragLockMinDistance: 25
				}
			}
		}("drag"), Hammer.gestures.Gesture = {
				name: "gesture",
				index: 1337,
				handler: function (ev, inst) {
					inst.trigger(this.name, ev)
				}
			},
			function (name) {
				function holdGesture(ev, inst) {
					var options = inst.options,
						current = Detection.current;
					switch (ev.eventType) {
						case EVENT_START:
							clearTimeout(timer), current.name = name, timer = setTimeout(function () {
								current && current.name == name && inst.trigger(name, ev)
							}, options.holdTimeout);
							break;
						case EVENT_MOVE:
							ev.distance > options.holdThreshold && clearTimeout(timer);
							break;
						case EVENT_RELEASE:
							clearTimeout(timer)
					}
				}
				var timer;
				Hammer.gestures.Hold = {
					name: name,
					index: 10,
					defaults: {
						holdTimeout: 500,
						holdThreshold: 2
					},
					handler: holdGesture
				}
			}("hold"), Hammer.gestures.Release = {
				name: "release",
				index: 1 / 0,
				handler: function (ev, inst) {
					ev.eventType == EVENT_RELEASE && inst.trigger(this.name, ev)
				}
			}, Hammer.gestures.Swipe = {
				name: "swipe",
				index: 40,
				defaults: {
					swipeMinTouches: 1,
					swipeMaxTouches: 1,
					swipeVelocityX: .1,
					swipeVelocityY: .6
				},
				handler: function (ev, inst) {
					if (ev.eventType == EVENT_RELEASE) {
						var touches = ev.touches.length,
							options = inst.options;
						if (touches < options.swipeMinTouches || touches > options.swipeMaxTouches) return;
						(ev.velocityX > options.swipeVelocityX || ev.velocityY > options.swipeVelocityY) && (inst.trigger(this.name, ev), inst.trigger(this.name + ev.direction, ev))
					}
				}
			},
			function (name) {
				function tapGesture(ev, inst) {
					var sincePrev, didDoubleTap, options = inst.options,
						current = Detection.current,
						prev = Detection.previous;
					switch (ev.eventType) {
						case EVENT_START:
							hasMoved = !1;
							break;
						case EVENT_MOVE:
							hasMoved = hasMoved || ev.distance > options.tapMaxDistance;
							break;
						case EVENT_END:
							!Utils.inStr(ev.srcEvent.type, "cancel") && ev.deltaTime < options.tapMaxTime && !hasMoved && (sincePrev = prev && prev.lastEvent && ev.timeStamp - prev.lastEvent.timeStamp, didDoubleTap = !1, prev && prev.name == name && sincePrev && sincePrev < options.doubleTapInterval && ev.distance < options.doubleTapDistance && (inst.trigger("doubletap", ev), didDoubleTap = !0), didDoubleTap && !options.tapAlways || (current.name = name, inst.trigger(current.name, ev)))
					}
				}
				var hasMoved = !1;
				Hammer.gestures.Tap = {
					name: name,
					index: 100,
					handler: tapGesture,
					defaults: {
						tapMaxTime: 250,
						tapMaxDistance: 10,
						tapAlways: !0,
						doubleTapDistance: 20,
						doubleTapInterval: 300
					}
				}
			}("tap"), Hammer.gestures.Touch = {
				name: "touch",
				index: -1 / 0,
				defaults: {
					preventDefault: !1,
					preventMouse: !1
				},
				handler: function (ev, inst) {
					if (inst.options.preventMouse && ev.pointerType == POINTER_MOUSE) return void ev.stopDetect();
					inst.options.preventDefault && ev.preventDefault(), ev.eventType == EVENT_TOUCH && inst.trigger("touch", ev)
				}
			},
			function (name) {
				function transformGesture(ev, inst) {
					switch (ev.eventType) {
						case EVENT_START:
							triggered = !1;
							break;
						case EVENT_MOVE:
							if (ev.touches.length < 2) return;
							var scaleThreshold = Math.abs(1 - ev.scale),
								rotationThreshold = Math.abs(ev.rotation);
							if (scaleThreshold < inst.options.transformMinScale && rotationThreshold < inst.options.transformMinRotation) return;
							Detection.current.name = name, triggered || (inst.trigger(name + "start", ev), triggered = !0), inst.trigger(name, ev), rotationThreshold > inst.options.transformMinRotation && inst.trigger("rotate", ev), scaleThreshold > inst.options.transformMinScale && (inst.trigger("pinch", ev), inst.trigger("pinch" + (ev.scale < 1 ? "in" : "out"), ev));
							break;
						case EVENT_RELEASE:
							triggered && ev.changedLength < 2 && (inst.trigger(name + "end", ev), triggered = !1)
					}
				}
				var triggered = !1;
				Hammer.gestures.Transform = {
					name: name,
					index: 45,
					defaults: {
						transformMinScale: .01,
						transformMinRotation: 1
					},
					handler: transformGesture
				}
			}("transform"), window.Hammer = Hammer, "undefined" != typeof module && module.exports && (module.exports = Hammer), "function" == typeof define && define.amd ? define(["jquery"], function ($) {
				return setupPlugin(window.Hammer, $)
			}) : setupPlugin(window.Hammer, window.jQuery || window.Zepto)
	}(window),
	function (root, factory) {
		! function (_, Backbone) {
			if (!Backbone.$.fn.hammer) throw new Error("Hammer jQuery plugin not loaded.");
			var viewOptions = ["hammerEvents", "hammerOptions"],
				View = Backbone.View,
				delegateEvents = View.prototype.delegateEvents,
				undelegateEvents = View.prototype.undelegateEvents;
			Backbone.View = View.extend({
				constructor: function (options) {
					return options = options || {}, _.extend(this, _.pick(options, viewOptions)), View.apply(this, arguments)
				},
				_hammered: !1,
				undelegateEvents: function () {
					return this.undelegateHammerEvents(), undelegateEvents.apply(this, arguments)
				},
				undelegateHammerEvents: function () {
					return this._hammered && this.hammer().off(".hammerEvents" + this.cid), this
				},
				delegateEvents: function () {
					return delegateEvents.apply(this, arguments), this.delegateHammerEvents(), this
				},
				delegateHammerEvents: function (events) {
					var options = _.defaults(_.result(this, "hammerOptions") || {}, Backbone.hammerOptions);
					if (!events && !(events = _.result(this, "hammerEvents"))) return this;
					for (var key in events) {
						var method = events[key];
						if (_.isFunction(method) || (method = this[events[key]]), method) {
							var match = key.match(/^(\S+)\s*(.*)$/),
								eventName = match[1],
								selector = match[2];
							eventName += ".hammerEvents" + this.cid, method = _.bind(method, this), "" === selector ? this.hammer(options).on(eventName, method) : this.hammer(options).on(eventName, selector, method)
						}
					}
					return this
				},
				hammer: function (options) {
					return this._hammered = !0, this.$el.hammer(options)
				}
			})
		}(root._, root.Backbone)
	}(this),
	function (a, d, p) {
		a.fn.backstretch = function (c, b) {
			return (c === p || 0 === c.length) && a.error("No images were supplied for Backstretch"), 0 === a(d).scrollTop() && d.scrollTo(0, 0), this.each(function () {
				var d = a(this),
					g = d.data("backstretch");
				if (g) {
					if ("string" == typeof c && "function" == typeof g[c]) return void g[c](b);
					b = a.extend(g.options, b), g.destroy(!0)
				}
				g = new q(this, c, b), d.data("backstretch", g)
			})
		}, a.backstretch = function (c, b) {
			return a("body").backstretch(c, b).data("backstretch")
		}, a.expr[":"].backstretch = function (c) {
			return a(c).data("backstretch") !== p
		}, a.fn.backstretch.defaults = {
			centeredX: !0,
			centeredY: !0,
			duration: 5e3,
			fade: 0
		};
		var r = {
				left: 0,
				top: 0,
				overflow: "hidden",
				margin: 0,
				padding: 0,
				height: "100%",
				width: "100%",
				zIndex: -999999
			},
			s = {
				position: "absolute",
				display: "none",
				margin: 0,
				padding: 0,
				border: "none",
				width: "auto",
				height: "auto",
				maxHeight: "none",
				maxWidth: "none",
				zIndex: -999999
			},
			q = function (c, b, e) {
				this.options = a.extend({}, a.fn.backstretch.defaults, e || {}), this.images = a.isArray(b) ? b : [b], a.each(this.images, function () {
					a("<img />")[0].src = this
				}), this.isBody = c === document.body, this.$container = a(c), this.$root = this.isBody ? a(l ? d : document) : this.$container, c = this.$container.children(".backstretch").first(), this.$wrap = c.length ? c : a('<div class="backstretch"></div>').css(r).appendTo(this.$container), this.isBody || (c = this.$container.css("position"), b = this.$container.css("zIndex"), this.$container.css({
					position: "static" === c ? "relative" : c,
					zIndex: "auto" === b ? 0 : b,
					background: "none"
				}), this.$wrap.css({
					zIndex: -999998
				})), this.$wrap.css({
					position: this.isBody && l ? "fixed" : "absolute"
				}), this.index = 0, this.show(this.index), a(d).on("resize.backstretch", a.proxy(this.resize, this)).on("orientationchange.backstretch", a.proxy(function () {
					this.isBody && 0 === d.pageYOffset && (d.scrollTo(0, 1), this.resize())
				}, this))
			};
		q.prototype = {
			resize: function () {
				try {
					var f, a = {
							left: 0,
							top: 0
						},
						b = this.isBody ? this.$root.width() : this.$root.innerWidth(),
						e = b,
						g = this.isBody ? d.innerHeight ? d.innerHeight : this.$root.height() : this.$root.innerHeight(),
						j = e / this.$img.data("ratio");
					j >= g ? (f = (j - g) / 2, this.options.centeredY && (a.top = "-" + f + "px")) : (j = g, e = j * this.$img.data("ratio"), f = (e - b) / 2, this.options.centeredX && (a.left = "-" + f + "px")), this.$wrap.css({
						width: b,
						height: g
					}).find("img:not(.deleteable)").css({
						width: e,
						height: j
					}).css(a)
				} catch (h) {}
				return this
			},
			show: function (c) {
				if (!(Math.abs(c) > this.images.length - 1)) {
					var b = this,
						e = b.$wrap.find("img").addClass("deleteable"),
						d = {
							relatedTarget: b.$container[0]
						};
					return b.$container.trigger(a.Event("backstretch.before", d), [b, c]), this.index = c, clearInterval(b.interval), b.$img = a("<img />").css(s).bind("load", function (f) {
						var h = this.width || a(f.target).width();
						f = this.height || a(f.target).height(), a(this).data("ratio", h / f), a(this).fadeIn(b.options.speed || b.options.fade, function () {
							e.remove(), b.paused || b.cycle(), a(["after", "show"]).each(function () {
								b.$container.trigger(a.Event("backstretch." + this, d), [b, c])
							})
						}), b.resize()
					}).appendTo(b.$wrap), b.$img.attr("src", b.images[c]), b
				}
			},
			next: function () {
				return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
			},
			prev: function () {
				return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
			},
			pause: function () {
				return this.paused = !0, this
			},
			resume: function () {
				return this.paused = !1, this.next(), this
			},
			cycle: function () {
				return 1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(a.proxy(function () {
					this.paused || this.next()
				}, this), this.options.duration)), this
			},
			destroy: function (c) {
				a(d).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), c || this.$wrap.remove(), this.$container.removeData("backstretch")
			}
		};
		var l, f = navigator.userAgent,
			m = navigator.platform,
			e = f.match(/AppleWebKit\/([0-9]+)/),
			e = !!e && e[1],
			h = f.match(/Fennec\/([0-9]+)/),
			h = !!h && h[1],
			n = f.match(/Opera Mobi\/([0-9]+)/),
			t = !!n && n[1],
			k = f.match(/MSIE ([0-9]+)/),
			k = !!k && k[1];
		l = !((-1 < m.indexOf("iPhone") || -1 < m.indexOf("iPad") || -1 < m.indexOf("iPod")) && e && 534 > e || d.operamini && "[object OperaMini]" === {}.toString.call(d.operamini) || n && 7458 > t || -1 < f.indexOf("Android") && e && 533 > e || h && 6 > h || "palmGetResource" in d && e && 534 > e || -1 < f.indexOf("MeeGo") && -1 < f.indexOf("NokiaBrowser/8.5.0") || k && 6 >= k)
	}(jQuery, window),
	function (e, t) {
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
			return t(e, n, i)
		}) : "object" == typeof exports ? module.exports = t(e, require("eventEmitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
	}(window, function (e, t, n) {
		function i(e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}

		function r(e) {
			return "[object Array]" === d.call(e)
		}

		function o(e) {
			var t = [];
			if (r(e)) t = e;
			else if ("number" == typeof e.length)
				for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
			else t.push(e);
			return t
		}

		function s(e, t, n) {
			if (!(this instanceof s)) return new s(e, t);
			"string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
			var r = this;
			setTimeout(function () {
				r.check()
			})
		}

		function c(e) {
			this.img = e
		}

		function f(e) {
			this.src = e, v[e] = this
		}
		var a = e.jQuery,
			u = e.console,
			h = void 0 !== u,
			d = Object.prototype.toString;
		s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function () {
			this.images = [];
			for (var e = 0, t = this.elements.length; t > e; e++) {
				var n = this.elements[e];
				"IMG" === n.nodeName && this.addImage(n);
				var i = n.nodeType;
				if (i && (1 === i || 9 === i || 11 === i))
					for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
						var c = r[o];
						this.addImage(c)
					}
			}
		}, s.prototype.addImage = function (e) {
			var t = new c(e);
			this.images.push(t)
		}, s.prototype.check = function () {
			function e(e, r) {
				return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
			}
			var t = this,
				n = 0,
				i = this.images.length;
			if (this.hasAnyBroken = !1, !i) return void this.complete();
			for (var r = 0; i > r; r++) {
				var o = this.images[r];
				o.on("confirm", e), o.check()
			}
		}, s.prototype.progress = function (e) {
			this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
			var t = this;
			setTimeout(function () {
				t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
			})
		}, s.prototype.complete = function () {
			var e = this.hasAnyBroken ? "fail" : "done";
			this.isComplete = !0;
			var t = this;
			setTimeout(function () {
				if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
					var n = t.hasAnyBroken ? "reject" : "resolve";
					t.jqDeferred[n](t)
				}
			})
		}, a && (a.fn.imagesLoaded = function (e, t) {
			return new s(this, e, t).jqDeferred.promise(a(this))
		}), c.prototype = new t, c.prototype.check = function () {
			var e = v[this.img.src] || new f(this.img.src);
			if (e.isConfirmed) return void this.confirm(e.isLoaded, "cached was confirmed");
			if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
			var t = this;
			e.on("confirm", function (e, n) {
				return t.confirm(e.isLoaded, n), !0
			}), e.check()
		}, c.prototype.confirm = function (e, t) {
			this.isLoaded = e, this.emit("confirm", this, t)
		};
		var v = {};
		return f.prototype = new t, f.prototype.check = function () {
			if (!this.isChecked) {
				var e = new Image;
				n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
			}
		}, f.prototype.handleEvent = function (e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, f.prototype.onload = function (e) {
			this.confirm(!0, "onload"), this.unbindProxyEvents(e)
		}, f.prototype.onerror = function (e) {
			this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
		}, f.prototype.confirm = function (e, t) {
			this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
		}, f.prototype.unbindProxyEvents = function (e) {
			n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
		}, s
	}), void 0 === jQuery.fn.prop && (jQuery.fn.prop = jQuery.fn.attr), jQuery(document).ready(function () {
		jQuery(document).bind("gform_post_render")
	});
