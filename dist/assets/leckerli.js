(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var n$2, l$2, u$3, t$3, o$2, r$3, f$1, e$2, c$1 = {}, s$1 = [], a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, v$2 = Array.isArray;
function h$3(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function p$3(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function y$1(l2, u2, i2) {
  var t2, o2, r2, f2 = {};
  for (r2 in u2)
    "key" == r2 ? t2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$2.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (r2 in l2.defaultProps)
      void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return d$1(l2, f2, t2, o2, null);
}
function d$1(n2, i2, t2, o2, r2) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u$3 : r2 };
  return null == r2 && null != l$2.vnode && l$2.vnode(f2), f2;
}
function _$2() {
  return { current: null };
}
function k$3(n2) {
  return n2.children;
}
function b$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function g$2(n2, l2) {
  if (null == l2)
    return n2.__ ? g$2(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? g$2(n2) : null;
}
function m$2(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return m$2(n2);
  }
}
function w$3(n2) {
  (!n2.__d && (n2.__d = true) && t$3.push(n2) && !x$2.__r++ || o$2 !== l$2.debounceRendering) && ((o$2 = l$2.debounceRendering) || r$3)(x$2);
}
function x$2() {
  var n2, l2, u2, i2, o2, r2, e2, c2;
  for (t$3.sort(f$1); n2 = t$3.shift(); )
    n2.__d && (l2 = t$3.length, i2 = void 0, o2 = void 0, e2 = (r2 = (u2 = n2).__v).__e, (c2 = u2.__P) && (i2 = [], (o2 = h$3({}, r2)).__v = r2.__v + 1, L$1(c2, r2, o2, u2.__n, void 0 !== c2.ownerSVGElement, null != r2.__h ? [e2] : null, i2, null == e2 ? g$2(r2) : e2, r2.__h), M$1(i2, r2), r2.__e != e2 && m$2(r2)), t$3.length > l2 && t$3.sort(f$1));
  x$2.__r = 0;
}
function P$2(n2, l2, u2, i2, t2, o2, r2, f2, e2, a2) {
  var h2, p2, y2, _2, b2, m2, w2, x2 = i2 && i2.__k || s$1, P2 = x2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (_2 = u2.__k[h2] = null == (_2 = l2[h2]) || "boolean" == typeof _2 || "function" == typeof _2 ? null : "string" == typeof _2 || "number" == typeof _2 || "bigint" == typeof _2 ? d$1(null, _2, null, null, _2) : v$2(_2) ? d$1(k$3, { children: _2 }, null, null, null) : _2.__b > 0 ? d$1(_2.type, _2.props, _2.key, _2.ref ? _2.ref : null, _2.__v) : _2)) {
      if (_2.__ = u2, _2.__b = u2.__b + 1, null === (y2 = x2[h2]) || y2 && _2.key == y2.key && _2.type === y2.type)
        x2[h2] = void 0;
      else
        for (p2 = 0; p2 < P2; p2++) {
          if ((y2 = x2[p2]) && _2.key == y2.key && _2.type === y2.type) {
            x2[p2] = void 0;
            break;
          }
          y2 = null;
        }
      L$1(n2, _2, y2 = y2 || c$1, t2, o2, r2, f2, e2, a2), b2 = _2.__e, (p2 = _2.ref) && y2.ref != p2 && (w2 || (w2 = []), y2.ref && w2.push(y2.ref, null, _2), w2.push(p2, _2.__c || b2, _2)), null != b2 ? (null == m2 && (m2 = b2), "function" == typeof _2.type && _2.__k === y2.__k ? _2.__d = e2 = C$1(_2, e2, n2) : e2 = $$1(n2, _2, y2, x2, b2, e2), "function" == typeof u2.type && (u2.__d = e2)) : e2 && y2.__e == e2 && e2.parentNode != n2 && (e2 = g$2(y2));
    }
  for (u2.__e = m2, h2 = P2; h2--; )
    null != x2[h2] && ("function" == typeof u2.type && null != x2[h2].__e && x2[h2].__e == u2.__d && (u2.__d = A$2(i2).nextSibling), q$4(x2[h2], x2[h2]));
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      O$1(w2[h2], w2[++h2], w2[++h2]);
}
function C$1(n2, l2, u2) {
  for (var i2, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i2 = t2[o2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? C$1(i2, l2, u2) : $$1(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function S(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (v$2(n2) ? n2.some(function(n3) {
    S(n3, l2);
  }) : l2.push(n2)), l2;
}
function $$1(n2, l2, u2, i2, t2, o2) {
  var r2, f2, e2;
  if (void 0 !== l2.__d)
    r2 = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != o2 || null == t2.parentNode)
    n:
      if (null == o2 || o2.parentNode !== n2)
        n2.appendChild(t2), r2 = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 1)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o2), r2 = o2;
      }
  return void 0 !== r2 ? r2 : t2.nextSibling;
}
function A$2(n2) {
  var l2, u2, i2;
  if (null == n2.type || "string" == typeof n2.type)
    return n2.__e;
  if (n2.__k) {
    for (l2 = n2.__k.length - 1; l2 >= 0; l2--)
      if ((u2 = n2.__k[l2]) && (i2 = A$2(u2)))
        return i2;
  }
  return null;
}
function H$1(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || T$2(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || T$2(n2, o2, l2[o2], u2[o2], i2);
}
function I$1(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a$1.test(l2) ? u2 : u2 + "px";
}
function T$2(n2, l2, u2, i2, t2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || I$1(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || I$1(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? z$2 : j$2, o2) : n2.removeEventListener(l2, o2 ? z$2 : j$2, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && "rowSpan" !== l2 && "colSpan" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function j$2(n2) {
  return this.l[n2.type + false](l$2.event ? l$2.event(n2) : n2);
}
function z$2(n2) {
  return this.l[n2.type + true](l$2.event ? l$2.event(n2) : n2);
}
function L$1(n2, u2, i2, t2, o2, r2, f2, e2, c2) {
  var s2, a2, p2, y2, d2, _2, g2, m2, w2, x2, C2, S2, $2, A2, H2, I2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (s2 = l$2.__b) && s2(u2);
  try {
    n:
      if ("function" == typeof I2) {
        if (m2 = u2.props, w2 = (s2 = I2.contextType) && t2[s2.__c], x2 = s2 ? w2 ? w2.props.value : s2.__ : t2, i2.__c ? g2 = (a2 = u2.__c = i2.__c).__ = a2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = a2 = new I2(m2, x2) : (u2.__c = a2 = new b$1(m2, x2), a2.constructor = I2, a2.render = B$2), w2 && w2.sub(a2), a2.props = m2, a2.state || (a2.state = {}), a2.context = x2, a2.__n = t2, p2 = a2.__d = true, a2.__h = [], a2._sb = []), null == a2.__s && (a2.__s = a2.state), null != I2.getDerivedStateFromProps && (a2.__s == a2.state && (a2.__s = h$3({}, a2.__s)), h$3(a2.__s, I2.getDerivedStateFromProps(m2, a2.__s))), y2 = a2.props, d2 = a2.state, a2.__v = u2, p2)
          null == I2.getDerivedStateFromProps && null != a2.componentWillMount && a2.componentWillMount(), null != a2.componentDidMount && a2.__h.push(a2.componentDidMount);
        else {
          if (null == I2.getDerivedStateFromProps && m2 !== y2 && null != a2.componentWillReceiveProps && a2.componentWillReceiveProps(m2, x2), !a2.__e && null != a2.shouldComponentUpdate && false === a2.shouldComponentUpdate(m2, a2.__s, x2) || u2.__v === i2.__v) {
            for (u2.__v !== i2.__v && (a2.props = m2, a2.state = a2.__s, a2.__d = false), a2.__e = false, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), C2 = 0; C2 < a2._sb.length; C2++)
              a2.__h.push(a2._sb[C2]);
            a2._sb = [], a2.__h.length && f2.push(a2);
            break n;
          }
          null != a2.componentWillUpdate && a2.componentWillUpdate(m2, a2.__s, x2), null != a2.componentDidUpdate && a2.__h.push(function() {
            a2.componentDidUpdate(y2, d2, _2);
          });
        }
        if (a2.context = x2, a2.props = m2, a2.__P = n2, S2 = l$2.__r, $2 = 0, "prototype" in I2 && I2.prototype.render) {
          for (a2.state = a2.__s, a2.__d = false, S2 && S2(u2), s2 = a2.render(a2.props, a2.state, a2.context), A2 = 0; A2 < a2._sb.length; A2++)
            a2.__h.push(a2._sb[A2]);
          a2._sb = [];
        } else
          do {
            a2.__d = false, S2 && S2(u2), s2 = a2.render(a2.props, a2.state, a2.context), a2.state = a2.__s;
          } while (a2.__d && ++$2 < 25);
        a2.state = a2.__s, null != a2.getChildContext && (t2 = h$3(h$3({}, t2), a2.getChildContext())), p2 || null == a2.getSnapshotBeforeUpdate || (_2 = a2.getSnapshotBeforeUpdate(y2, d2)), P$2(n2, v$2(H2 = null != s2 && s2.type === k$3 && null == s2.key ? s2.props.children : s2) ? H2 : [H2], u2, i2, t2, o2, r2, f2, e2, c2), a2.base = u2.__e, u2.__h = null, a2.__h.length && f2.push(a2), g2 && (a2.__E = a2.__ = null), a2.__e = false;
      } else
        null == r2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = N$1(i2.__e, u2, i2, t2, o2, r2, f2, c2);
    (s2 = l$2.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != r2) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l$2.__e(n3, u2, i2);
  }
}
function M$1(n2, u2) {
  l$2.__c && l$2.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$2.__e(n3, u3.__v);
    }
  });
}
function N$1(l2, u2, i2, t2, o2, r2, f2, e2) {
  var s2, a2, h2, y2 = i2.props, d2 = u2.props, _2 = u2.type, k2 = 0;
  if ("svg" === _2 && (o2 = true), null != r2) {
    for (; k2 < r2.length; k2++)
      if ((s2 = r2[k2]) && "setAttribute" in s2 == !!_2 && (_2 ? s2.localName === _2 : 3 === s2.nodeType)) {
        l2 = s2, r2[k2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === _2)
      return document.createTextNode(d2);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", _2) : document.createElement(_2, d2.is && d2), r2 = null, e2 = false;
  }
  if (null === _2)
    y2 === d2 || e2 && l2.data === d2 || (l2.data = d2);
  else {
    if (r2 = r2 && n$2.call(l2.childNodes), a2 = (y2 = i2.props || c$1).dangerouslySetInnerHTML, h2 = d2.dangerouslySetInnerHTML, !e2) {
      if (null != r2)
        for (y2 = {}, k2 = 0; k2 < l2.attributes.length; k2++)
          y2[l2.attributes[k2].name] = l2.attributes[k2].value;
      (h2 || a2) && (h2 && (a2 && h2.__html == a2.__html || h2.__html === l2.innerHTML) || (l2.innerHTML = h2 && h2.__html || ""));
    }
    if (H$1(l2, d2, y2, o2, e2), h2)
      u2.__k = [];
    else if (P$2(l2, v$2(k2 = u2.props.children) ? k2 : [k2], u2, i2, t2, o2 && "foreignObject" !== _2, r2, f2, r2 ? r2[0] : i2.__k && g$2(i2, 0), e2), null != r2)
      for (k2 = r2.length; k2--; )
        null != r2[k2] && p$3(r2[k2]);
    e2 || ("value" in d2 && void 0 !== (k2 = d2.value) && (k2 !== l2.value || "progress" === _2 && !k2 || "option" === _2 && k2 !== y2.value) && T$2(l2, "value", k2, y2.value, false), "checked" in d2 && void 0 !== (k2 = d2.checked) && k2 !== l2.checked && T$2(l2, "checked", k2, y2.checked, false));
  }
  return l2;
}
function O$1(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$2.__e(n3, i2);
  }
}
function q$4(n2, u2, i2) {
  var t2, o2;
  if (l$2.unmount && l$2.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || O$1(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$2.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && q$4(t2[o2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || p$3(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function B$2(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function D$1(u2, i2, t2) {
  var o2, r2, f2;
  l$2.__ && l$2.__(u2, i2), r2 = (o2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, f2 = [], L$1(i2, u2 = (!o2 && t2 || i2).__k = y$1(k$3, null, [u2]), r2 || c$1, c$1, void 0 !== i2.ownerSVGElement, !o2 && t2 ? [t2] : r2 ? null : i2.firstChild ? n$2.call(i2.childNodes) : null, f2, !o2 && t2 ? t2 : r2 ? r2.__e : i2.firstChild, o2), M$1(f2, u2);
}
function E$1(n2, l2) {
  D$1(n2, l2, E$1);
}
function F$2(l2, u2, i2) {
  var t2, o2, r2, f2, e2 = h$3({}, l2.props);
  for (r2 in l2.type && l2.type.defaultProps && (f2 = l2.type.defaultProps), u2)
    "key" == r2 ? t2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : e2[r2] = void 0 === u2[r2] && void 0 !== f2 ? f2[r2] : u2[r2];
  return arguments.length > 2 && (e2.children = arguments.length > 3 ? n$2.call(arguments, 2) : i2), d$1(l2.type, e2, t2 || l2.key, o2 || l2.ref, null);
}
function G$1(n2, l2) {
  var u2 = { __c: l2 = "__cC" + e$2++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, i2;
    return this.getChildContext || (u3 = [], (i2 = {})[l2] = this, this.getChildContext = function() {
      return i2;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(function(n5) {
        n5.__e = true, w$3(n5);
      });
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n$2 = s$1.slice, l$2 = { __e: function(n2, l2, u2, i2) {
  for (var t2, o2, r2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && null != o2.getDerivedStateFromError && (t2.setState(o2.getDerivedStateFromError(n2)), r2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), r2 = t2.__d), r2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$3 = 0, b$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h$3({}, this.state), "function" == typeof n2 && (n2 = n2(h$3({}, u2), this.props)), n2 && h$3(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), w$3(this));
}, b$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), w$3(this));
}, b$1.prototype.render = k$3, t$3 = [], r$3 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, x$2.__r = 0, e$2 = 0;
var t$2, r$2, u$2, i, o$1 = 0, f = [], c = [], e$1 = l$2.__b, a = l$2.__r, v$1 = l$2.diffed, l$1 = l$2.__c, m$1 = l$2.unmount;
function d(t2, u2) {
  l$2.__h && l$2.__h(r$2, t2, o$1 || u2), o$1 = 0;
  var i2 = r$2.__H || (r$2.__H = { __: [], __h: [] });
  return t2 >= i2.__.length && i2.__.push({ __V: c }), i2.__[t2];
}
function h$2(n2) {
  return o$1 = 1, s(B$1, n2);
}
function s(n2, u2, i2) {
  var o2 = d(t$2++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : B$1(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r$2, !r$2.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H)
        return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      }))
        return !c2 || c2.call(this, n3, t2, r2);
      var i3 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
    };
    r$2.u = true;
    var c2 = r$2.shouldComponentUpdate, e2 = r$2.componentWillUpdate;
    r$2.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r$2.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function p$2(u2, i2) {
  var o2 = d(t$2++, 3);
  !l$2.__s && z$1(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r$2.__H.__h.push(o2));
}
function y(u2, i2) {
  var o2 = d(t$2++, 4);
  !l$2.__s && z$1(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r$2.__h.push(o2));
}
function _$1(n2) {
  return o$1 = 5, F$1(function() {
    return { current: n2 };
  }, []);
}
function A$1(n2, t2, r2) {
  o$1 = 6, y(function() {
    return "function" == typeof n2 ? (n2(t2()), function() {
      return n2(null);
    }) : n2 ? (n2.current = t2(), function() {
      return n2.current = null;
    }) : void 0;
  }, null == r2 ? r2 : r2.concat(n2));
}
function F$1(n2, r2) {
  var u2 = d(t$2++, 7);
  return z$1(u2.__H, r2) ? (u2.__V = n2(), u2.i = r2, u2.__h = n2, u2.__V) : u2.__;
}
function T$1(n2, t2) {
  return o$1 = 8, F$1(function() {
    return n2;
  }, t2);
}
function q$3(n2) {
  var u2 = r$2.context[n2.__c], i2 = d(t$2++, 9);
  return i2.c = n2, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r$2)), u2.props.value) : n2.__;
}
function x$1(t2, r2) {
  l$2.useDebugValue && l$2.useDebugValue(r2 ? r2(t2) : t2);
}
function P$1(n2) {
  var u2 = d(t$2++, 10), i2 = h$2();
  return u2.__ = n2, r$2.componentDidCatch || (r$2.componentDidCatch = function(n3, t2) {
    u2.__ && u2.__(n3, t2), i2[1](n3);
  }), [i2[0], function() {
    i2[1](void 0);
  }];
}
function V$1() {
  var n2 = d(t$2++, 11);
  if (!n2.__) {
    for (var u2 = r$2.__v; null !== u2 && !u2.__m && null !== u2.__; )
      u2 = u2.__;
    var i2 = u2.__m || (u2.__m = [0, 0]);
    n2.__ = "P" + i2[0] + "-" + i2[1]++;
  }
  return n2.__;
}
function b() {
  for (var t2; t2 = f.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(k$2), t2.__H.__h.forEach(w$2), t2.__H.__h = [];
      } catch (r2) {
        t2.__H.__h = [], l$2.__e(r2, t2.__v);
      }
}
l$2.__b = function(n2) {
  r$2 = null, e$1 && e$1(n2);
}, l$2.__r = function(n2) {
  a && a(n2), t$2 = 0;
  var i2 = (r$2 = n2.__c).__H;
  i2 && (u$2 === r$2 ? (i2.__h = [], r$2.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c, n3.__N = n3.i = void 0;
  })) : (i2.__h.forEach(k$2), i2.__h.forEach(w$2), i2.__h = [], t$2 = 0)), u$2 = r$2;
}, l$2.diffed = function(t2) {
  v$1 && v$1(t2);
  var o2 = t2.__c;
  o2 && o2.__H && (o2.__H.__h.length && (1 !== f.push(o2) && i === l$2.requestAnimationFrame || ((i = l$2.requestAnimationFrame) || j$1)(b)), o2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c;
  })), u$2 = r$2 = null;
}, l$2.__c = function(t2, r2) {
  r2.some(function(t3) {
    try {
      t3.__h.forEach(k$2), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || w$2(n2);
      });
    } catch (u2) {
      r2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r2 = [], l$2.__e(u2, t3.__v);
    }
  }), l$1 && l$1(t2, r2);
}, l$2.unmount = function(t2) {
  m$1 && m$1(t2);
  var r2, u2 = t2.__c;
  u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
    try {
      k$2(n2);
    } catch (n3) {
      r2 = n3;
    }
  }), u2.__H = void 0, r2 && l$2.__e(r2, u2.__v));
};
var g$1 = "function" == typeof requestAnimationFrame;
function j$1(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), g$1 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  g$1 && (t2 = requestAnimationFrame(r2));
}
function k$2(n2) {
  var t2 = r$2, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r$2 = t2;
}
function w$2(n2) {
  var t2 = r$2;
  n2.__c = n2.__(), r$2 = t2;
}
function z$1(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function B$1(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
/*! js-cookie v3.0.5 | MIT */
function assign(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function init(converter, defaultAttributes) {
  function set(name, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
  }
  function get(name) {
    if (typeof document === "undefined" || arguments.length && !name) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i2 = 0; i2 < cookies.length; i2++) {
      var parts = cookies[i2].split("=");
      var value = parts.slice(1).join("=");
      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);
        if (name === found) {
          break;
        }
      } catch (e2) {
      }
    }
    return name ? jar[name] : jar;
  }
  return Object.create(
    {
      set,
      get,
      remove: function(name, attributes) {
        set(
          name,
          "",
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(assign({}, this.converter, converter2), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  );
}
var api = init(defaultConverter, { path: "/" });
function _isPlaceholder(a2) {
  return a2 != null && typeof a2 === "object" && a2["@@functional/placeholder"] === true;
}
function _curry1(fn2) {
  return function f1(a2) {
    if (arguments.length === 0 || _isPlaceholder(a2)) {
      return f1;
    } else {
      return fn2.apply(this, arguments);
    }
  };
}
function _curry2(fn2) {
  return function f2(a2, b2) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a2) ? f2 : _curry1(function(_b) {
          return fn2(a2, _b);
        });
      default:
        return _isPlaceholder(a2) && _isPlaceholder(b2) ? f2 : _isPlaceholder(a2) ? _curry1(function(_a) {
          return fn2(_a, b2);
        }) : _isPlaceholder(b2) ? _curry1(function(_b) {
          return fn2(a2, _b);
        }) : fn2(a2, b2);
    }
  };
}
function _curry3(fn2) {
  return function f3(a2, b2, c2) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a2) ? f3 : _curry2(function(_b, _c) {
          return fn2(a2, _b, _c);
        });
      case 2:
        return _isPlaceholder(a2) && _isPlaceholder(b2) ? f3 : _isPlaceholder(a2) ? _curry2(function(_a, _c) {
          return fn2(_a, b2, _c);
        }) : _isPlaceholder(b2) ? _curry2(function(_b, _c) {
          return fn2(a2, _b, _c);
        }) : _curry1(function(_c) {
          return fn2(a2, b2, _c);
        });
      default:
        return _isPlaceholder(a2) && _isPlaceholder(b2) && _isPlaceholder(c2) ? f3 : _isPlaceholder(a2) && _isPlaceholder(b2) ? _curry2(function(_a, _b) {
          return fn2(_a, _b, c2);
        }) : _isPlaceholder(a2) && _isPlaceholder(c2) ? _curry2(function(_a, _c) {
          return fn2(_a, b2, _c);
        }) : _isPlaceholder(b2) && _isPlaceholder(c2) ? _curry2(function(_b, _c) {
          return fn2(a2, _b, _c);
        }) : _isPlaceholder(a2) ? _curry1(function(_a) {
          return fn2(_a, b2, c2);
        }) : _isPlaceholder(b2) ? _curry1(function(_b) {
          return fn2(a2, _b, c2);
        }) : _isPlaceholder(c2) ? _curry1(function(_c) {
          return fn2(a2, b2, _c);
        }) : fn2(a2, b2, c2);
    }
  };
}
const _isArray = Array.isArray || function _isArray2(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
};
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}
function _includesWith(pred, x2, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (pred(x2, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}
function _functionName(f2) {
  var match = String(f2).match(/^function (\w*)/);
  return match == null ? "" : match[1];
}
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function _objectIs(a2, b2) {
  if (a2 === b2) {
    return a2 !== 0 || 1 / a2 === 1 / b2;
  } else {
    return a2 !== a2 && b2 !== b2;
  }
}
const _objectIs$1 = typeof Object.is === "function" ? Object.is : _objectIs;
var toString = Object.prototype.toString;
var _isArguments = /* @__PURE__ */ function() {
  return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x2) {
    return toString.call(x2) === "[object Arguments]";
  } : function _isArguments2(x2) {
    return _has("callee", x2);
  };
}();
var hasEnumBug = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString");
var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
var hasArgsEnumBug = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}();
var contains = function contains2(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};
var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /* @__PURE__ */ _curry1(function keys2(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /* @__PURE__ */ _curry1(function keys3(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== "length")) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
var type = /* @__PURE__ */ _curry1(function type2(val) {
  return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
});
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a2 = _arrayFromIterator(aIterator);
  var b2 = _arrayFromIterator(bIterator);
  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }
  return !_includesWith(function(b3, aItem) {
    return !_includesWith(eq, aItem, b3);
  }, b2, a2);
}
function _equals(a2, b2, stackA, stackB) {
  if (_objectIs$1(a2, b2)) {
    return true;
  }
  var typeA = type(a2);
  if (typeA !== type(b2)) {
    return false;
  }
  if (typeof a2["fantasy-land/equals"] === "function" || typeof b2["fantasy-land/equals"] === "function") {
    return typeof a2["fantasy-land/equals"] === "function" && a2["fantasy-land/equals"](b2) && typeof b2["fantasy-land/equals"] === "function" && b2["fantasy-land/equals"](a2);
  }
  if (typeof a2.equals === "function" || typeof b2.equals === "function") {
    return typeof a2.equals === "function" && a2.equals(b2) && typeof b2.equals === "function" && b2.equals(a2);
  }
  switch (typeA) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof a2.constructor === "function" && _functionName(a2.constructor) === "Promise") {
        return a2 === b2;
      }
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof a2 === typeof b2 && _objectIs$1(a2.valueOf(), b2.valueOf()))) {
        return false;
      }
      break;
    case "Date":
      if (!_objectIs$1(a2.valueOf(), b2.valueOf())) {
        return false;
      }
      break;
    case "Error":
      return a2.name === b2.name && a2.message === b2.message;
    case "RegExp":
      if (!(a2.source === b2.source && a2.global === b2.global && a2.ignoreCase === b2.ignoreCase && a2.multiline === b2.multiline && a2.sticky === b2.sticky && a2.unicode === b2.unicode)) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a2) {
      return stackB[idx] === b2;
    }
    idx -= 1;
  }
  switch (typeA) {
    case "Map":
      if (a2.size !== b2.size) {
        return false;
      }
      return _uniqContentEquals(a2.entries(), b2.entries(), stackA.concat([a2]), stackB.concat([b2]));
    case "Set":
      if (a2.size !== b2.size) {
        return false;
      }
      return _uniqContentEquals(a2.values(), b2.values(), stackA.concat([a2]), stackB.concat([b2]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
      break;
    default:
      return false;
  }
  var keysA = keys(a2);
  if (keysA.length !== keys(b2).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a2]);
  var extendedStackB = stackB.concat([b2]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b2) && _equals(b2[key], a2[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}
var equals = /* @__PURE__ */ _curry2(function equals2(a2, b2) {
  return _equals(a2, b2, [], []);
});
function _isObject(x2) {
  return Object.prototype.toString.call(x2) === "[object Object]";
}
function _isString(x2) {
  return Object.prototype.toString.call(x2) === "[object String]";
}
var isNil = /* @__PURE__ */ _curry1(function isNil2(x2) {
  return x2 == null;
});
function _isTypedArray(val) {
  var type3 = Object.prototype.toString.call(val);
  return type3 === "[object Uint8ClampedArray]" || type3 === "[object Int8Array]" || type3 === "[object Uint8Array]" || type3 === "[object Int16Array]" || type3 === "[object Uint16Array]" || type3 === "[object Int32Array]" || type3 === "[object Uint32Array]" || type3 === "[object Float32Array]" || type3 === "[object Float64Array]" || type3 === "[object BigInt64Array]" || type3 === "[object BigUint64Array]";
}
var empty = /* @__PURE__ */ _curry1(function empty2(x2) {
  return x2 != null && typeof x2["fantasy-land/empty"] === "function" ? x2["fantasy-land/empty"]() : x2 != null && x2.constructor != null && typeof x2.constructor["fantasy-land/empty"] === "function" ? x2.constructor["fantasy-land/empty"]() : x2 != null && typeof x2.empty === "function" ? x2.empty() : x2 != null && x2.constructor != null && typeof x2.constructor.empty === "function" ? x2.constructor.empty() : _isArray(x2) ? [] : _isString(x2) ? "" : _isObject(x2) ? {} : _isArguments(x2) ? function() {
    return arguments;
  }() : _isTypedArray(x2) ? x2.constructor.from("") : void 0;
});
var isEmpty = /* @__PURE__ */ _curry1(function isEmpty2(x2) {
  return x2 != null && equals(x2, empty(x2));
});
const isEmpty$1 = isEmpty;
var isNotNil = /* @__PURE__ */ _curry1(function isNotNil2(x2) {
  return !isNil(x2);
});
const isNotNil$1 = isNotNil;
var mergeWithKey = /* @__PURE__ */ _curry3(function mergeWithKey2(fn2, l2, r2) {
  var result = {};
  var k2;
  l2 = l2 || {};
  r2 = r2 || {};
  for (k2 in l2) {
    if (_has(k2, l2)) {
      result[k2] = _has(k2, r2) ? fn2(k2, l2[k2], r2[k2]) : l2[k2];
    }
  }
  for (k2 in r2) {
    if (_has(k2, r2) && !_has(k2, result)) {
      result[k2] = r2[k2];
    }
  }
  return result;
});
var mergeDeepWithKey = /* @__PURE__ */ _curry3(function mergeDeepWithKey2(fn2, lObj, rObj) {
  return mergeWithKey(function(k2, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey2(fn2, lVal, rVal);
    } else {
      return fn2(k2, lVal, rVal);
    }
  }, lObj, rObj);
});
var mergeDeepRight = /* @__PURE__ */ _curry2(function mergeDeepRight2(lObj, rObj) {
  return mergeDeepWithKey(function(k2, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
const mergeDeepRight$1 = mergeDeepRight;
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } && "production") !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api2 = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api2);
  return api2;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
function g(n2, t2) {
  for (var e2 in t2)
    n2[e2] = t2[e2];
  return n2;
}
function C(n2, t2) {
  for (var e2 in n2)
    if ("__source" !== e2 && !(e2 in t2))
      return true;
  for (var r2 in t2)
    if ("__source" !== r2 && n2[r2] !== t2[r2])
      return true;
  return false;
}
function E(n2, t2) {
  return n2 === t2 && (0 !== n2 || 1 / n2 == 1 / t2) || n2 != n2 && t2 != t2;
}
function w$1(n2) {
  this.props = n2;
}
function x(n2, e2) {
  function r2(n3) {
    var t2 = this.props.ref, r3 = t2 == n3.ref;
    return !r3 && t2 && (t2.call ? t2(null) : t2.current = null), e2 ? !e2(this.props, n3) || !r3 : C(this.props, n3);
  }
  function u2(e3) {
    return this.shouldComponentUpdate = r2, y$1(n2, e3);
  }
  return u2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u2.prototype.isReactComponent = true, u2.__f = true, u2;
}
(w$1.prototype = new b$1()).isPureReactComponent = true, w$1.prototype.shouldComponentUpdate = function(n2, t2) {
  return C(this.props, n2) || C(this.state, t2);
};
var R = l$2.__b;
l$2.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
};
var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function k$1(n2) {
  function t2(t3) {
    var e2 = g({}, t3);
    return delete e2.ref, n2(e2, t3.ref || null);
  }
  return t2.$$typeof = N, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
var A = function(n2, t2) {
  return null == n2 ? null : S(S(n2).map(t2));
}, O = { map: A, forEach: A, count: function(n2) {
  return n2 ? S(n2).length : 0;
}, only: function(n2) {
  var t2 = S(n2);
  if (1 !== t2.length)
    throw "Children.only";
  return t2[0];
}, toArray: S }, T = l$2.__e;
l$2.__e = function(n2, t2, e2, r2) {
  if (n2.then) {
    for (var u2, o2 = t2; o2 = o2.__; )
      if ((u2 = o2.__c) && u2.__c)
        return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
  }
  T(n2, t2, e2, r2);
};
var I = l$2.unmount;
function L(n2, t2, e2) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g({}, n2)).__c && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return L(n3, t2, e2);
  })), n2;
}
function U(n2, t2, e2) {
  return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return U(n3, t2, e2);
  }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e2)), n2;
}
function D() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__a && t2.__a(n2);
}
function M(n2) {
  var e2, r2, u2;
  function o2(o3) {
    if (e2 || (e2 = n2()).then(function(n3) {
      r2 = n3.default || n3;
    }, function(n3) {
      u2 = n3;
    }), u2)
      throw u2;
    if (!r2)
      throw e2;
    return y$1(r2, o3);
  }
  return o2.displayName = "Lazy", o2.__f = true, o2;
}
function V() {
  this.u = null, this.o = null;
}
l$2.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && true === n2.__h && (n2.type = null), I && I(n2);
}, (D.prototype = new b$1()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  null == r2.t && (r2.t = []), r2.t.push(e2);
  var u2 = F(r2.__v), o2 = false, i2 = function() {
    o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
  };
  e2.__R = i2;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var n3 = r2.state.__a;
        r2.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r2.setState({ __a: r2.__b = null }); t3 = r2.t.pop(); )
        t3.forceUpdate();
    }
  }, c2 = true === t2.__h;
  r2.__u++ || c2 || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
}, D.prototype.componentWillUnmount = function() {
  this.t = [];
}, D.prototype.render = function(n2, e2) {
  if (this.__b) {
    if (this.__v.__k) {
      var r2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
      this.__v.__k[0] = L(this.__b, r2, o2.__O = o2.__P);
    }
    this.__b = null;
  }
  var i2 = e2.__a && y$1(k$3, null, n2.fallback);
  return i2 && (i2.__h = null), [y$1(k$3, null, e2.__a ? null : n2.children), i2];
};
var W = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.o.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
    for (e2 = n2.u; e2; ) {
      for (; e2.length > 3; )
        e2.pop()();
      if (e2[1] < e2[0])
        break;
      n2.u = e2 = e2[2];
    }
};
function P(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function j(n2) {
  var e2 = this, r2 = n2.i;
  e2.componentWillUnmount = function() {
    D$1(null, e2.l), e2.l = null, e2.i = null;
  }, e2.i && e2.i !== r2 && e2.componentWillUnmount(), n2.__v ? (e2.l || (e2.i = r2, e2.l = { nodeType: 1, parentNode: r2, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), e2.i.appendChild(n3);
  }, insertBefore: function(n3, t2) {
    this.childNodes.push(n3), e2.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e2.i.removeChild(n3);
  } }), D$1(y$1(P, { context: e2.context }, n2.__v), e2.l)) : e2.l && e2.componentWillUnmount();
}
function z(n2, e2) {
  var r2 = y$1(j, { __v: n2, i: e2 });
  return r2.containerInfo = e2, r2;
}
(V.prototype = new b$1()).__a = function(n2) {
  var t2 = this, e2 = F(t2.__v), r2 = t2.o.get(n2);
  return r2[0]++, function(u2) {
    var o2 = function() {
      t2.props.revealOrder ? (r2.push(u2), W(t2, n2, r2)) : u2();
    };
    e2 ? e2(o2) : o2();
  };
}, V.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = S(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
  for (var e2 = t2.length; e2--; )
    this.o.set(t2[e2], this.u = [1, 0, this.u]);
  return n2.children;
}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t2, e2) {
    W(n2, e2, t2);
  });
};
var B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Y = /[A-Z0-9]/g, $ = "undefined" != typeof document, q$2 = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
function G(n2, t2, e2) {
  return null == t2.__k && (t2.textContent = ""), D$1(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
function J(n2, t2, e2) {
  return E$1(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
b$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
  Object.defineProperty(b$1.prototype, t2, { configurable: true, get: function() {
    return this["UNSAFE_" + t2];
  }, set: function(n2) {
    Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
  } });
});
var K = l$2.event;
function Q() {
}
function X() {
  return this.cancelBubble;
}
function nn() {
  return this.defaultPrevented;
}
l$2.event = function(n2) {
  return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
};
var tn, en = { enumerable: false, configurable: true, get: function() {
  return this.class;
} }, rn = l$2.vnode;
l$2.vnode = function(n2) {
  "string" == typeof n2.type && function(n3) {
    var t2 = n3.props, e2 = n3.type, u2 = {};
    for (var o2 in t2) {
      var i2 = t2[o2];
      if (!("value" === o2 && "defaultValue" in t2 && null == i2 || $ && "children" === o2 && "noscript" === e2 || "class" === o2 || "className" === o2)) {
        var l2 = o2.toLowerCase();
        "defaultValue" === o2 && "value" in t2 && null == t2.value ? o2 = "value" : "download" === o2 && true === i2 ? i2 = "" : "ondoubleclick" === l2 ? o2 = "ondblclick" : "onchange" !== l2 || "input" !== e2 && "textarea" !== e2 || q$2(t2.type) ? "onfocus" === l2 ? o2 = "onfocusin" : "onblur" === l2 ? o2 = "onfocusout" : Z.test(o2) ? o2 = l2 : -1 === e2.indexOf("-") && H.test(o2) ? o2 = o2.replace(Y, "-$&").toLowerCase() : null === i2 && (i2 = void 0) : l2 = o2 = "oninput", "oninput" === l2 && u2[o2 = l2] && (o2 = "oninputCapture"), u2[o2] = i2;
      }
    }
    "select" == e2 && u2.multiple && Array.isArray(u2.value) && (u2.value = S(t2.children).forEach(function(n4) {
      n4.props.selected = -1 != u2.value.indexOf(n4.props.value);
    })), "select" == e2 && null != u2.defaultValue && (u2.value = S(t2.children).forEach(function(n4) {
      n4.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n4.props.value) : u2.defaultValue == n4.props.value;
    })), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", en)) : (t2.className && !t2.class || t2.class && t2.className) && (u2.class = u2.className = t2.className), n3.props = u2;
  }(n2), n2.$$typeof = B, rn && rn(n2);
};
var un = l$2.__r;
l$2.__r = function(n2) {
  un && un(n2), tn = n2.__c;
};
var on = l$2.diffed;
l$2.diffed = function(n2) {
  on && on(n2);
  var t2 = n2.props, e2 = n2.__e;
  null != e2 && "textarea" === n2.type && "value" in t2 && t2.value !== e2.value && (e2.value = null == t2.value ? "" : t2.value), tn = null;
};
var ln = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
  return tn.__n[n2.__c].props.value;
} } } }, cn = "17.0.2";
function fn(n2) {
  return y$1.bind(null, n2);
}
function an(n2) {
  return !!n2 && n2.$$typeof === B;
}
function sn(n2) {
  return an(n2) ? F$2.apply(null, arguments) : n2;
}
function hn(n2) {
  return !!n2.__k && (D$1(null, n2), true);
}
function vn(n2) {
  return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
}
var dn = function(n2, t2) {
  return n2(t2);
}, pn = function(n2, t2) {
  return n2(t2);
}, mn = k$3;
function yn(n2) {
  n2();
}
function _n(n2) {
  return n2;
}
function bn() {
  return [false, yn];
}
var Sn = y;
function gn(n2, t2) {
  var e2 = t2(), r2 = h$2({ h: { __: e2, v: t2 } }), u2 = r2[0].h, o2 = r2[1];
  return y(function() {
    u2.__ = e2, u2.v = t2, E(u2.__, t2()) || o2({ h: u2 });
  }, [n2, e2, t2]), p$2(function() {
    return E(u2.__, u2.v()) || o2({ h: u2 }), n2(function() {
      E(u2.__, u2.v()) || o2({ h: u2 });
    });
  }, [n2]), e2;
}
var Cn = { useState: h$2, useId: V$1, useReducer: s, useEffect: p$2, useLayoutEffect: y, useInsertionEffect: Sn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: gn, startTransition: yn, useRef: _$1, useImperativeHandle: A$1, useMemo: F$1, useCallback: T$1, useContext: q$3, useDebugValue: x$1, version: "17.0.2", Children: O, render: G, hydrate: J, unmountComponentAtNode: hn, createPortal: z, createElement: y$1, createContext: G$1, createFactory: fn, cloneElement: sn, createRef: _$2, Fragment: k$3, isValidElement: an, findDOMNode: vn, Component: b$1, PureComponent: w$1, memo: x, forwardRef: k$1, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: D, SuspenseList: V, lazy: M, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln };
const compat_module = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: O,
  Component: b$1,
  Fragment: k$3,
  PureComponent: w$1,
  StrictMode: mn,
  Suspense: D,
  SuspenseList: V,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln,
  cloneElement: sn,
  createContext: G$1,
  createElement: y$1,
  createFactory: fn,
  createPortal: z,
  createRef: _$2,
  default: Cn,
  findDOMNode: vn,
  flushSync: pn,
  forwardRef: k$1,
  hydrate: J,
  isValidElement: an,
  lazy: M,
  memo: x,
  render: G,
  startTransition: yn,
  unmountComponentAtNode: hn,
  unstable_batchedUpdates: dn,
  useCallback: T$1,
  useContext: q$3,
  useDebugValue: x$1,
  useDeferredValue: _n,
  useEffect: p$2,
  useErrorBoundary: P$1,
  useId: V$1,
  useImperativeHandle: A$1,
  useInsertionEffect: Sn,
  useLayoutEffect: y,
  useMemo: F$1,
  useReducer: s,
  useRef: _$1,
  useState: h$2,
  useSyncExternalStore: gn,
  useTransition: bn,
  version: cn
}, Symbol.toStringTag, { value: "Module" }));
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var f2 = n2.default;
  if (typeof f2 == "function") {
    var a2 = function a3() {
      if (this instanceof a3) {
        var args = [null];
        args.push.apply(args, arguments);
        var Ctor = Function.bind.apply(f2, args);
        return new Ctor();
      }
      return f2.apply(this, arguments);
    };
    a2.prototype = f2.prototype;
  } else
    a2 = {};
  Object.defineProperty(a2, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a2, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a2;
}
var withSelector = { exports: {} };
var withSelector_production_min = {};
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(compat_module);
var shim = { exports: {} };
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e = require$$0;
function h$1(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var k = "function" === typeof Object.is ? Object.is : h$1, l = e.useState, m = e.useEffect, n$1 = e.useLayoutEffect, p$1 = e.useDebugValue;
function q$1(a2, b2) {
  var d2 = b2(), f2 = l({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
  n$1(function() {
    c2.value = d2;
    c2.getSnapshot = b2;
    r$1(c2) && g2({ inst: c2 });
  }, [a2, d2, b2]);
  m(function() {
    r$1(c2) && g2({ inst: c2 });
    return a2(function() {
      r$1(c2) && g2({ inst: c2 });
    });
  }, [a2]);
  p$1(d2);
  return d2;
}
function r$1(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var d2 = b2();
    return !k(a2, d2);
  } catch (f2) {
    return true;
  }
}
function t$1(a2, b2) {
  return b2();
}
var u$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$1 : q$1;
useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u$1;
{
  shim.exports = useSyncExternalStoreShim_production_min;
}
var shimExports = shim.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h = require$$0, n = shimExports;
function p(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var q = "function" === typeof Object.is ? Object.is : p, r = n.useSyncExternalStore, t = h.useRef, u = h.useEffect, v = h.useMemo, w = h.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a2, b2, e2, l2, g2) {
  var c2 = t(null);
  if (null === c2.current) {
    var f2 = { hasValue: false, value: null };
    c2.current = f2;
  } else
    f2 = c2.current;
  c2 = v(function() {
    function a3(a4) {
      if (!c3) {
        c3 = true;
        d3 = a4;
        a4 = l2(a4);
        if (void 0 !== g2 && f2.hasValue) {
          var b3 = f2.value;
          if (g2(b3, a4))
            return k2 = b3;
        }
        return k2 = a4;
      }
      b3 = k2;
      if (q(d3, a4))
        return b3;
      var e3 = l2(a4);
      if (void 0 !== g2 && g2(b3, e3))
        return b3;
      d3 = a4;
      return k2 = e3;
    }
    var c3 = false, d3, k2, m2 = void 0 === e2 ? null : e2;
    return [function() {
      return a3(b2());
    }, null === m2 ? void 0 : function() {
      return a3(m2());
    }];
  }, [b2, e2, l2, g2]);
  var d2 = r(a2, c2[0], c2[1]);
  u(function() {
    f2.hasValue = true;
    f2.value = d2;
  }, [d2]);
  w(d2);
  return d2;
};
{
  withSelector.exports = withSelector_production_min;
}
var withSelectorExports = withSelector.exports;
const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
function useStore(api2, selector = api2.getState, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api2.subscribe,
    api2.getState,
    api2.getServerState || api2.getState,
    selector,
    equalityFn
  );
  x$1(slice);
  return slice;
}
const createImpl = (createState) => {
  if (({ "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } && "production") !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api2 = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api2, selector, equalityFn);
  Object.assign(useBoundStore, api2);
  return useBoundStore;
};
const create$1 = (createState) => createState ? createImpl(createState) : createImpl;
const defaultSettings = {
  name: "leckerli",
  banner: {
    title: "This website uses cookies.",
    description: 'We use cookies to improve your browsing experience, deliver personalised advertising or content and analyse our traffic. By clicking on "Accept all", you consent to our use of cookies.',
    accept: "Accept all",
    reject: "Deny",
    customise: "Customize",
    save: "Save",
    settings: [{
      slug: "settings",
      title: "Preferences",
      description: "Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in."
    }]
  },
  permissions: ["settings"],
  baseData: {},
  cookie: {},
  choiceMade: false,
  settingsOpen: false,
  domain: window.location.hostname,
  enableGtmAutoLoad: false,
  minify: true
};
const initialState = mergeDeepRight$1(defaultSettings, window.leckerliSettings ?? {});
const expirationDate = /* @__PURE__ */ new Date();
expirationDate.setMonth(expirationDate.getMonth() + 1);
const cookieConfig = {
  sameSite: "strict",
  domain: initialState.domain,
  expires: expirationDate
  // 1 month by default
};
const initialCookie = api.get(initialState.name);
initialState.cookie = isNotNil$1(initialCookie) ? JSON.parse(initialCookie) : initialState.permissions.reduce((acc, val) => ({
  ...acc,
  [val]: false
}), initialState.baseData);
initialState.choiceMade = isNotNil$1(initialCookie);
const useSettings = create$1((set, getState) => ({
  ...initialState,
  // Write cookie if not exist and setup eventListeners
  init: () => {
    const state = getState();
    if (isNil(initialCookie) && state.choiceMade) {
      api.set(state.name, JSON.stringify(state.cookie), cookieConfig);
    }
    document.dispatchEvent(new CustomEvent("leckerli:initialised", {
      detail: {
        cookie: state.choiceMade ? state.cookie : null
      }
    }));
    document.addEventListener("leckerli:open-banner", () => getState().setChoice(false));
    document.addEventListener("leckerli:close-banner", () => getState().setChoice(true));
    document.addEventListener("leckerli:open-modal", () => getState().setModal(true));
    document.addEventListener("leckerli:close-modal", () => getState().setModal(false));
  },
  // Propagate new cookie values
  propagate(newCookie) {
    const state = getState();
    api.set(state.name, JSON.stringify(newCookie), cookieConfig);
    document.dispatchEvent(new CustomEvent("leckerli:permissions-updated", {
      detail: {
        cookie: newCookie
      }
    }));
  },
  // Manage banner display
  setChoice: (value) => set((state) => ({
    ...state,
    choiceMade: value
  })),
  // Manage modal display
  setModal: (value) => set((state) => {
    document.dispatchEvent(new CustomEvent(`leckerli:modal-${value ? "opened" : "closed"}`));
    return {
      ...state,
      settingsOpen: value
    };
  }),
  // Set cookie permission(s)
  setPermissions: (permissions) => set((state) => {
    const newCookie = state.permissions.reduce((acc, val) => ({
      ...acc,
      [val]: permissions[val] ?? false
    }), state.baseData);
    state.propagate(newCookie);
    return {
      ...state,
      choiceMade: true,
      cookie: newCookie
    };
  }),
  // Toggle cookie permission
  togglePermission: (slug) => set((state) => {
    const newCookie = state.permissions.reduce((acc, val) => {
      if (slug === val) {
        acc[val] = isNotNil$1(state.cookie[val]) ? !state.cookie[val] : true;
      } else {
        acc[val] = state.cookie[val] ?? false;
      }
      return acc;
    }, state.baseData);
    state.propagate(newCookie);
    return {
      ...state,
      choiceMade: true,
      cookie: newCookie
    };
  }),
  // All permission at true shorthand
  acceptAll: () => {
    getState().setPermissions(getState().permissions.reduce((acc, val) => ({
      ...acc,
      [val]: true
    }), {}));
  },
  // All permission at false shorthand
  rejectAll: () => {
    getState().setPermissions(getState().permissions.reduce((acc, val) => ({
      ...acc,
      [val]: false
    }), {}));
  }
}));
/*! @license DOMPurify 3.0.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.5/LICENSE */
const {
  entries,
  setPrototypeOf,
  isFrozen,
  getPrototypeOf,
  getOwnPropertyDescriptor
} = Object;
let {
  freeze,
  seal,
  create
} = Object;
let {
  apply,
  construct
} = typeof Reflect !== "undefined" && Reflect;
if (!apply) {
  apply = function apply2(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}
if (!freeze) {
  freeze = function freeze2(x2) {
    return x2;
  };
}
if (!seal) {
  seal = function seal2(x2) {
    return x2;
  };
}
if (!construct) {
  construct = function construct2(Func, args) {
    return new Func(...args);
  };
}
const arrayForEach = unapply(Array.prototype.forEach);
const arrayPop = unapply(Array.prototype.pop);
const arrayPush = unapply(Array.prototype.push);
const stringToLowerCase = unapply(String.prototype.toLowerCase);
const stringToString = unapply(String.prototype.toString);
const stringMatch = unapply(String.prototype.match);
const stringReplace = unapply(String.prototype.replace);
const stringIndexOf = unapply(String.prototype.indexOf);
const stringTrim = unapply(String.prototype.trim);
const regExpTest = unapply(RegExp.prototype.test);
const typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return construct(func, args);
  };
}
function addToSet(set, array, transformCaseFunc) {
  var _transformCaseFunc;
  transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set, null);
  }
  let l2 = array.length;
  while (l2--) {
    let element = array[l2];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l2] = lcElement;
        }
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function clone(object) {
  const newObject = create(null);
  for (const [property, value] of entries(object)) {
    newObject[property] = value;
  }
  return newObject;
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue(element) {
    console.warn("fallback value for", element);
    return null;
  }
  return fallbackValue;
}
const html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
const svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
const svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
const svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
const mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
const mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
const text = freeze(["#text"]);
const html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
const svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
const mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
const xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
const IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
const ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
const DOCTYPE_NAME = seal(/^html$/i);
var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR,
  ERB_EXPR,
  TMPLIT_EXPR,
  DATA_ATTR,
  ARIA_ATTR,
  IS_ALLOWED_URI,
  IS_SCRIPT_OR_DATA,
  ATTR_WHITESPACE,
  DOCTYPE_NAME
});
const getGlobal = () => typeof window === "undefined" ? null : window;
const _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_2) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root2) => createDOMPurify(root2);
  DOMPurify.version = "3.0.5";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== 9) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  const originalDocument = window2.document;
  const currentScript = originalDocument.currentScript;
  let {
    document: document2
  } = window2;
  const {
    DocumentFragment,
    HTMLTemplateElement,
    Node,
    Element,
    NodeFilter,
    NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
    HTMLFormElement,
    DOMParser,
    trustedTypes
  } = window2;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  const {
    implementation,
    createNodeIterator,
    createDocumentFragment,
    getElementsByTagName
  } = document2;
  const {
    importNode
  } = originalDocument;
  let hooks = {};
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: MUSTACHE_EXPR2,
    ERB_EXPR: ERB_EXPR2,
    TMPLIT_EXPR: TMPLIT_EXPR2,
    DATA_ATTR: DATA_ATTR2,
    ARIA_ATTR: ARIA_ATTR2,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
    ATTR_WHITESPACE: ATTR_WHITESPACE2
  } = EXPRESSIONS;
  let {
    IS_ALLOWED_URI: IS_ALLOWED_URI$1
  } = EXPRESSIONS;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  let PARSER_MEDIA_TYPE;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2(cfg) {
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = "ALLOWED_NAMESPACES" in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(
      clone(DEFAULT_URI_SAFE_ATTRIBUTES),
      // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      transformCaseFunc
      // eslint-disable-line indent
    ) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(
      clone(DEFAULT_DATA_URI_TAGS),
      // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      transformCaseFunc
      // eslint-disable-line indent
    ) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
    FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
    USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, [...text]);
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      emptyHTML = trustedTypesPolicy.createHTML("");
    } else {
      if (trustedTypesPolicy === void 0) {
        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      }
      if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
        emptyHTML = trustedTypesPolicy.createHTML("");
      }
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  const HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "desc", "title", "annotation-xml"]);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  const ALL_SVG_TAGS = addToSet({}, svg$1);
  addToSet(ALL_SVG_TAGS, svgFilters);
  addToSet(ALL_SVG_TAGS, svgDisallowed);
  const ALL_MATHML_TAGS = addToSet({}, mathMl$1);
  addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: "template"
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      node.parentNode.removeChild(node);
    } catch (_2) {
      node.remove();
    }
  };
  const _removeAttribute = function _removeAttribute2(name, node) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (_2) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: node
      });
    }
    node.removeAttribute(name);
    if (name === "is" && !ALLOWED_ATTR[name]) {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(node);
        } catch (_2) {
        }
      } else {
        try {
          node.setAttribute(name, "");
        } catch (_2) {
        }
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc;
    let leadingWhitespace;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_2) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_2) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createIterator = function _createIterator2(root2) {
    return createNodeIterator.call(
      root2.ownerDocument || root2,
      root2,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT,
      null,
      false
    );
  };
  const _isClobbered = function _isClobbered2(elm) {
    return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
  };
  const _isNode = function _isNode2(object) {
    return typeof Node === "object" ? object instanceof Node : object && typeof object === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
  };
  const _executeHook = function _executeHook2(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }
    arrayForEach(hooks[entryPoint], (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };
  const _sanitizeElements = function _sanitizeElements2(currentNode) {
    let content;
    _executeHook("beforeSanitizeElements", currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(currentNode.nodeName);
    _executeHook("uponSanitizeElement", currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName))
          return false;
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName))
          return false;
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        const parentNode = getParentNode(currentNode) || currentNode.parentNode;
        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          const childCount = childNodes.length;
          for (let i2 = childCount - 1; i2 >= 0; --i2) {
            parentNode.insertBefore(cloneNode(childNodes[i2], true), getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      content = currentNode.textContent;
      content = stringReplace(content, MUSTACHE_EXPR2, " ");
      content = stringReplace(content, ERB_EXPR2, " ");
      content = stringReplace(content, TMPLIT_EXPR2, " ");
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHook("afterSanitizeElements", currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
      return false;
    }
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName))
      ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName))
      ;
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
      )
        ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName])
      ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, "")))
      ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
      ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, "")))
      ;
    else if (value) {
      return false;
    } else
      ;
    return true;
  };
  const _basicCustomElementTest = function _basicCustomElementTest2(tagName) {
    return tagName.indexOf("-") > 0;
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    let attr;
    let value;
    let lcName;
    let l2;
    _executeHook("beforeSanitizeAttributes", currentNode, null);
    const {
      attributes
    } = currentNode;
    if (!attributes) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l2 = attributes.length;
    while (l2--) {
      attr = attributes[l2];
      const {
        name,
        namespaceURI
      } = attr;
      value = name === "value" ? attr.value : stringTrim(attr.value);
      lcName = transformCaseFunc(name);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      _removeAttribute(name, currentNode);
      if (!hookEvent.keepAttr) {
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        value = stringReplace(value, MUSTACHE_EXPR2, " ");
        value = stringReplace(value, ERB_EXPR2, " ");
        value = stringReplace(value, TMPLIT_EXPR2, " ");
      }
      const lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
        if (namespaceURI)
          ;
        else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case "TrustedHTML": {
              value = trustedTypesPolicy.createHTML(value);
              break;
            }
            case "TrustedScriptURL": {
              value = trustedTypesPolicy.createScriptURL(value);
              break;
            }
          }
        }
      }
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          currentNode.setAttribute(name, value);
        }
        arrayPop(DOMPurify.removed);
      } catch (_2) {
      }
    }
    _executeHook("afterSanitizeAttributes", currentNode, null);
  };
  const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
    let shadowNode;
    const shadowIterator = _createIterator(fragment);
    _executeHook("beforeSanitizeShadowDOM", fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHook("uponSanitizeShadowNode", shadowNode, null);
      if (_sanitizeElements(shadowNode)) {
        continue;
      }
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
      _sanitizeAttributes(shadowNode);
    }
    _executeHook("afterSanitizeShadowDOM", fragment, null);
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body;
    let importedNode;
    let currentNode;
    let returnNode;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      if (typeof dirty.toString === "function") {
        dirty = dirty.toString();
        if (typeof dirty !== "string") {
          throw typeErrorCreate("dirty is not a string, aborting");
        }
      } else {
        throw typeErrorCreate("toString is not a function");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      if (dirty.nodeName) {
        const tagName = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
    } else if (dirty instanceof Node) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const nodeIterator = _createIterator(IN_PLACE ? dirty : body);
    while (currentNode = nodeIterator.nextNode()) {
      if (_sanitizeElements(currentNode)) {
        continue;
      }
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
      _sanitizeAttributes(currentNode);
    }
    if (IN_PLACE) {
      return dirty;
    }
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR2, " ");
      serializedHTML = stringReplace(serializedHTML, ERB_EXPR2, " ");
      serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR2, " ");
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function(cfg) {
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    hooks[entryPoint] = hooks[entryPoint] || [];
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint) {
    if (hooks[entryPoint]) {
      return arrayPop(hooks[entryPoint]);
    }
  };
  DOMPurify.removeHooks = function(entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };
  DOMPurify.removeAllHooks = function() {
    hooks = {};
  };
  return DOMPurify;
}
var purify = createDOMPurify();
var _ = 0;
function o(o2, e2, n2, t2, f2, l2) {
  var s2, u2, a2 = {};
  for (u2 in e2)
    "ref" == u2 ? s2 = e2[u2] : a2[u2] = e2[u2];
  var i2 = { type: o2, props: a2, key: n2, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: f2, __self: l2 };
  if ("function" == typeof o2 && (s2 = o2.defaultProps))
    for (u2 in s2)
      void 0 === a2[u2] && (a2[u2] = s2[u2]);
  return l$2.vnode && l$2.vnode(i2), i2;
}
const Banner = () => {
  const {
    banner,
    acceptAll,
    rejectAll,
    setModal
  } = useSettings();
  const allowedTags = ["b", "i", "em", "strong", "p", "ul", "li", "ol", "span", "h2", "h3", "h4", "h5", "h6", "a", "div"];
  const allowedAttributes = ["href", "target"];
  return o("div", {
    className: "fixed bottom-0 left-0 max-w-md px-5 py-4 m-2 shadow-md shadow-black/25 z-[9998] bg-background space-y-4 font-primary text-foreground rounded-md banner-wrapper",
    children: [banner.title && o("h3", {
      className: "m-0 text-lg font-semibold font-primary md:text-xl banner-title",
      children: banner.title
    }), banner.description && o("p", {
      className: "m-0 text-sm leading-snug font-primary md:text-base banner-description",
      dangerouslySetInnerHTML: {
        __html: purify.sanitize(banner.description, {
          USE_PROFILES: {
            html: true
          },
          ALLOWED_TAGS: allowedTags,
          ALLOWED_ATTR: allowedAttributes
        })
      }
    }), o("div", {
      className: "pt-2 space-y-2 banner-btns",
      children: [!isEmpty$1(banner.settings) && o("button", {
        type: "button",
        className: "px-2 mr-2 text-sm font-semibold border-2 border-solid rounded bg-background font-primary text-primary md:px-3.5 py-1.5 md:py-2.5 border-primary hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active transition-colors banner-btn-customise",
        onClick: () => setModal(true),
        children: banner.customise
      }), o("button", {
        type: "button",
        className: "px-2 mr-2 text-sm font-semibold border-2 border-solid rounded bg-background font-primary text-primary md:px-3.5 py-1.5 md:py-2.5 border-primary hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active transition-colors banner-btn-reject",
        onClick: rejectAll,
        children: banner.reject
      }), o("button", {
        type: "button",
        className: "px-2 mr-2 text-sm font-semibold border-2 border-solid rounded bg-primary font-primary text-background md:px-3.5 py-1.5 md:py-2.5 border-primary hover:bg-primary-hover hover:border-primary-hover active:bg-primary-active active:border-primary-active transition-colors banner-btn-accept",
        onClick: acceptAll,
        children: banner.accept
      })]
    })]
  });
};
const Settings = () => {
  const {
    cookie,
    setPermissions,
    banner,
    setModal
  } = useSettings();
  const [cookieProxy, setCookieProxy] = h$2(cookie);
  return o("div", {
    className: "fixed bottom-0 left-0 w-full max-w-lg max-h-full px-5 py-4 m-2 overflow-y-auto text-black shadow-md shadow-black/25 z-[9999] bg-background text-foreground font-primary rounded-md",
    children: [o("div", {
      className: "space-y-6",
      children: [o("h3", {
        className: "w-10/12 m-0 text-xl font-semibold font-primary md:text-2xl",
        children: banner.customise
      }), banner.settings.map(({
        slug,
        title,
        description
      }) => o("div", {
        children: [o("div", {
          className: "flex items-start justify-between",
          children: [o("h3", {
            className: "m-0 text-lg font-semibold font-primary",
            children: title
          }), o("button", {
            type: "button",
            className: `${cookieProxy[slug] ? "bg-primary" : "bg-gray-200"} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-0.5`,
            role: "switch",
            "aria-checked": "false",
            onClick: () => setCookieProxy({
              ...cookieProxy,
              [slug]: !cookieProxy[slug]
            }),
            children: [o("span", {
              className: "sr-only",
              children: "Toggle"
            }), o("span", {
              "aria-hidden": "true",
              className: `${cookieProxy[slug] ? "translate-x-5" : "translate-x-0"} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-background shadow ring-0 transition duration-200 ease-in-out`
            })]
          })]
        }), o("p", {
          className: "m-0 mt-2 text-sm leading-snug font-primary md:text-base",
          children: description
        })]
      }, `setting-${slug}`)), o("div", {
        className: "pt-4",
        children: o("button", {
          type: "button",
          className: "px-2 mr-2 text-sm font-semibold border-2 border-solid rounded bg-primary font-primary text-background md:px-3.5 py-1.5 md:py-2.5 border-primary hover:bg-primary-hover hover:border-primary-hover active:bg-primary-active active:border-primary-active transition-colors",
          onClick: () => {
            setPermissions(cookieProxy);
            setModal(false);
          },
          children: banner.save
        })
      })]
    }), o("button", {
      type: "button",
      className: "absolute top-0 right-0 w-8 h-8 mt-0 text-xl rounded-full",
      onClick: () => setModal(false),
      children: "×"
    })]
  });
};
const App = () => {
  const {
    choiceMade,
    init: init2,
    settingsOpen
  } = useSettings();
  p$2(() => {
    init2();
  }, []);
  return o(k$3, {
    children: [!choiceMade && !settingsOpen && o(Banner, {}), settingsOpen && o(Settings, {})]
  });
};
const index = "";
const root = document.createElement("div");
root.id = "lkrl-wrapper";
document.body.appendChild(root);
D$1(o(App, {}), root);
