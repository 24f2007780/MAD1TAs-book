import {
  hn
} from "./chunk-LE2HILBM.js";
import {
  d,
  g,
  x,
  y
} from "./chunk-W7VYVKM6.js";
import {
  l
} from "./chunk-4WOSXGHD.js";
import {
  $f,
  Db,
  Fb,
  Ib,
  Nb,
  Ob,
  Pb,
  Rb,
  dt,
  g as g2,
  gt
} from "./chunk-SCO4KOO5.js";
import "./chunk-LE5NDSFD.js";
import "./chunk-V6TY7KAL.js";

// node_modules/vitepress-mermaid-preview/dist/journeyDiagram-EWQZEKCU-BjR7C_P7.js
var U = function() {
  var t = g2(function(h, i, a, l2) {
    for (a = a || {}, l2 = h.length; l2--; a[h[l2]] = i) ;
    return a;
  }, "o"), e = [6, 8, 10, 11, 12, 14, 16, 17, 18], s = [1, 9], c = [1, 10], r = [1, 11], f = [1, 12], u = [1, 13], y2 = [1, 14], g3 = {
    trace: g2(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, journey: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NEWLINE: 10, title: 11, acc_title: 12, acc_title_value: 13, acc_descr: 14, acc_descr_value: 15, acc_descr_multiline_value: 16, section: 17, taskName: 18, taskData: 19, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "journey", 6: "EOF", 8: "SPACE", 10: "NEWLINE", 11: "title", 12: "acc_title", 13: "acc_title_value", 14: "acc_descr", 15: "acc_descr_value", 16: "acc_descr_multiline_value", 17: "section", 18: "taskName", 19: "taskData" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2]],
    performAction: g2(function(i, a, l2, d2, p, o, b) {
      var k = o.length - 1;
      switch (p) {
        case 1:
          return o[k - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          o[k - 1].push(o[k]), this.$ = o[k - 1];
          break;
        case 4:
        case 5:
          this.$ = o[k];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          d2.setDiagramTitle(o[k].substr(6)), this.$ = o[k].substr(6);
          break;
        case 9:
          this.$ = o[k].trim(), d2.setAccTitle(this.$);
          break;
        case 10:
        case 11:
          this.$ = o[k].trim(), d2.setAccDescription(this.$);
          break;
        case 12:
          d2.addSection(o[k].substr(8)), this.$ = o[k].substr(8);
          break;
        case 13:
          d2.addTask(o[k - 1], o[k]), this.$ = "task";
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, t(e, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: s, 12: c, 14: r, 16: f, 17: u, 18: y2 }, t(e, [2, 7], { 1: [2, 1] }), t(e, [2, 3]), { 9: 15, 11: s, 12: c, 14: r, 16: f, 17: u, 18: y2 }, t(e, [2, 5]), t(e, [2, 6]), t(e, [2, 8]), { 13: [1, 16] }, { 15: [1, 17] }, t(e, [2, 11]), t(e, [2, 12]), { 19: [1, 18] }, t(e, [2, 4]), t(e, [2, 9]), t(e, [2, 10]), t(e, [2, 13])],
    defaultActions: {},
    parseError: g2(function(i, a) {
      if (a.recoverable)
        this.trace(i);
      else {
        var l2 = new Error(i);
        throw l2.hash = a, l2;
      }
    }, "parseError"),
    parse: g2(function(i) {
      var a = this, l2 = [0], d2 = [], p = [null], o = [], b = this.table, k = "", C = 0, K = 0, dt2 = 2, Q = 1, yt = o.slice.call(arguments, 1), _ = Object.create(this.lexer), I = { yy: {} };
      for (var O in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, O) && (I.yy[O] = this.yy[O]);
      _.setInput(i, I.yy), I.yy.lexer = _, I.yy.parser = this, typeof _.yylloc > "u" && (_.yylloc = {});
      var Y = _.yylloc;
      o.push(Y);
      var ft = _.options && _.options.ranges;
      typeof I.yy.parseError == "function" ? this.parseError = I.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function pt(w) {
        l2.length = l2.length - 2 * w, p.length = p.length - w, o.length = o.length - w;
      }
      g2(pt, "popStack");
      function D() {
        var w;
        return w = d2.pop() || _.lex() || Q, typeof w != "number" && (w instanceof Array && (d2 = w, w = d2.pop()), w = a.symbols_[w] || w), w;
      }
      g2(D, "lex");
      for (var v, A, T, q, F = {}, N, M, tt, z; ; ) {
        if (A = l2[l2.length - 1], this.defaultActions[A] ? T = this.defaultActions[A] : ((v === null || typeof v > "u") && (v = D()), T = b[A] && b[A][v]), typeof T > "u" || !T.length || !T[0]) {
          var X = "";
          z = [];
          for (N in b[A])
            this.terminals_[N] && N > dt2 && z.push("'" + this.terminals_[N] + "'");
          _.showPosition ? X = "Parse error on line " + (C + 1) + `:
` + _.showPosition() + `
Expecting ` + z.join(", ") + ", got '" + (this.terminals_[v] || v) + "'" : X = "Parse error on line " + (C + 1) + ": Unexpected " + (v == Q ? "end of input" : "'" + (this.terminals_[v] || v) + "'"), this.parseError(X, {
            text: _.match,
            token: this.terminals_[v] || v,
            line: _.yylineno,
            loc: Y,
            expected: z
          });
        }
        if (T[0] instanceof Array && T.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + A + ", token: " + v);
        switch (T[0]) {
          case 1:
            l2.push(v), p.push(_.yytext), o.push(_.yylloc), l2.push(T[1]), v = null, K = _.yyleng, k = _.yytext, C = _.yylineno, Y = _.yylloc;
            break;
          case 2:
            if (M = this.productions_[T[1]][1], F.$ = p[p.length - M], F._$ = {
              first_line: o[o.length - (M || 1)].first_line,
              last_line: o[o.length - 1].last_line,
              first_column: o[o.length - (M || 1)].first_column,
              last_column: o[o.length - 1].last_column
            }, ft && (F._$.range = [
              o[o.length - (M || 1)].range[0],
              o[o.length - 1].range[1]
            ]), q = this.performAction.apply(F, [
              k,
              K,
              C,
              I.yy,
              T[1],
              p,
              o
            ].concat(yt)), typeof q < "u")
              return q;
            M && (l2 = l2.slice(0, -1 * M * 2), p = p.slice(0, -1 * M), o = o.slice(0, -1 * M)), l2.push(this.productions_[T[1]][0]), p.push(F.$), o.push(F._$), tt = b[l2[l2.length - 2]][l2[l2.length - 1]], l2.push(tt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, m = function() {
    var h = {
      EOF: 1,
      parseError: g2(function(a, l2) {
        if (this.yy.parser)
          this.yy.parser.parseError(a, l2);
        else
          throw new Error(a);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: g2(function(i, a) {
        return this.yy = a || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: g2(function() {
        var i = this._input[0];
        this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i;
        var a = i.match(/(?:\r\n?|\n).*/g);
        return a ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: g2(function(i) {
        var a = i.length, l2 = i.split(/(?:\r\n?|\n)/g);
        this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - a), this.offset -= a;
        var d2 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), l2.length - 1 && (this.yylineno -= l2.length - 1);
        var p = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: l2 ? (l2.length === d2.length ? this.yylloc.first_column : 0) + d2[d2.length - l2.length].length - l2[0].length : this.yylloc.first_column - a
        }, this.options.ranges && (this.yylloc.range = [p[0], p[0] + this.yyleng - a]), this.yyleng = this.yytext.length, this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: g2(function() {
        return this._more = true, this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: g2(function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: g2(function(i) {
        this.unput(this.match.slice(i));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: g2(function() {
        var i = this.matched.substr(0, this.matched.length - this.match.length);
        return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: g2(function() {
        var i = this.match;
        return i.length < 20 && (i += this._input.substr(0, 20 - i.length)), (i.substr(0, 20) + (i.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: g2(function() {
        var i = this.pastInput(), a = new Array(i.length + 1).join("-");
        return i + this.upcomingInput() + `
` + a + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: g2(function(i, a) {
        var l2, d2, p;
        if (this.options.backtrack_lexer && (p = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (p.yylloc.range = this.yylloc.range.slice(0))), d2 = i[0].match(/(?:\r\n?|\n).*/g), d2 && (this.yylineno += d2.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: d2 ? d2[d2.length - 1].length - d2[d2.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
        }, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(i[0].length), this.matched += i[0], l2 = this.performAction.call(this, this.yy, this, a, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), l2)
          return l2;
        if (this._backtrack) {
          for (var o in p)
            this[o] = p[o];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: g2(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var i, a, l2, d2;
        this._more || (this.yytext = "", this.match = "");
        for (var p = this._currentRules(), o = 0; o < p.length; o++)
          if (l2 = this._input.match(this.rules[p[o]]), l2 && (!a || l2[0].length > a[0].length)) {
            if (a = l2, d2 = o, this.options.backtrack_lexer) {
              if (i = this.test_match(l2, p[o]), i !== false)
                return i;
              if (this._backtrack) {
                a = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return a ? (i = this.test_match(a, p[d2]), i !== false ? i : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: g2(function() {
        var a = this.next();
        return a || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: g2(function(a) {
        this.conditionStack.push(a);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: g2(function() {
        var a = this.conditionStack.length - 1;
        return a > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: g2(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: g2(function(a) {
        return a = this.conditionStack.length - 1 - Math.abs(a || 0), a >= 0 ? this.conditionStack[a] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: g2(function(a) {
        this.begin(a);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: g2(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: g2(function(a, l2, d2, p) {
        switch (d2) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return 10;
          case 3:
            break;
          case 4:
            break;
          case 5:
            return 4;
          case 6:
            return 11;
          case 7:
            return this.begin("acc_title"), 12;
          case 8:
            return this.popState(), "acc_title_value";
          case 9:
            return this.begin("acc_descr"), 14;
          case 10:
            return this.popState(), "acc_descr_value";
          case 11:
            this.begin("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 17;
          case 15:
            return 18;
          case 16:
            return 19;
          case 17:
            return ":";
          case 18:
            return 6;
          case 19:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:journey\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19], inclusive: true } }
    };
    return h;
  }();
  g3.lexer = m;
  function x2() {
    this.yy = {};
  }
  return g2(x2, "Parser"), x2.prototype = g3, g3.Parser = x2, new x2();
}();
U.parser = U;
var Et = U;
var V = "";
var Z = [];
var L = [];
var B = [];
var Ct = g2(function() {
  Z.length = 0, L.length = 0, V = "", B.length = 0, Fb();
}, "clear");
var Pt = g2(function(t) {
  V = t, Z.push(t);
}, "addSection");
var It = g2(function() {
  return Z;
}, "getSections");
var At = g2(function() {
  let t = it();
  const e = 100;
  let s = 0;
  for (; !t && s < e; )
    t = it(), s++;
  return L.push(...B), L;
}, "getTasks");
var Ft = g2(function() {
  const t = [];
  return L.forEach((s) => {
    s.people && t.push(...s.people);
  }), [...new Set(t)].sort();
}, "updateActors");
var Vt = g2(function(t, e) {
  const s = e.substr(1).split(":");
  let c = 0, r = [];
  s.length === 1 ? (c = Number(s[0]), r = []) : (c = Number(s[0]), r = s[1].split(","));
  const f = r.map((y2) => y2.trim()), u = {
    section: V,
    type: V,
    people: f,
    task: t,
    score: c
  };
  B.push(u);
}, "addTask");
var Rt = g2(function(t) {
  const e = {
    section: V,
    type: V,
    description: t,
    task: t,
    classes: []
  };
  L.push(e);
}, "addTaskOrg");
var it = g2(function() {
  const t = g2(function(s) {
    return B[s].processed;
  }, "compileTask");
  let e = true;
  for (const [s, c] of B.entries())
    t(s), e = e && c.processed;
  return e;
}, "compileTasks");
var Lt = g2(function() {
  return Ft();
}, "getActors");
var rt = {
  getConfig: g2(() => gt().journey, "getConfig"),
  clear: Ct,
  setDiagramTitle: Pb,
  getDiagramTitle: Nb,
  setAccTitle: Ob,
  getAccTitle: Db,
  setAccDescription: Ib,
  getAccDescription: Rb,
  addSection: Pt,
  getSections: It,
  getTasks: At,
  addTask: Vt,
  addTaskOrg: Rt,
  getActors: Lt
};
var Bt = g2((t) => `.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor ? `fill: ${t.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0 ? `fill: ${t.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0 ? `fill: ${t.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0 ? `fill: ${t.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0 ? `fill: ${t.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0 ? `fill: ${t.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0 ? `fill: ${t.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0 ? `fill: ${t.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0 ? `fill: ${t.fillType7}` : ""};
  }

  .actor-0 {
    ${t.actor0 ? `fill: ${t.actor0}` : ""};
  }
  .actor-1 {
    ${t.actor1 ? `fill: ${t.actor1}` : ""};
  }
  .actor-2 {
    ${t.actor2 ? `fill: ${t.actor2}` : ""};
  }
  .actor-3 {
    ${t.actor3 ? `fill: ${t.actor3}` : ""};
  }
  .actor-4 {
    ${t.actor4 ? `fill: ${t.actor4}` : ""};
  }
  .actor-5 {
    ${t.actor5 ? `fill: ${t.actor5}` : ""};
  }
  ${l()}
`, "getStyles");
var jt = Bt;
var J = g2(function(t, e) {
  return x(t, e);
}, "drawRect");
var Nt = g2(function(t, e) {
  const c = t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), r = t.append("g");
  r.append("circle").attr("cx", e.cx - 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), r.append("circle").attr("cx", e.cx + 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
  function f(g3) {
    const m = hn().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    g3.append("path").attr("class", "mouth").attr("d", m).attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
  }
  g2(f, "smile");
  function u(g3) {
    const m = hn().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    g3.append("path").attr("class", "mouth").attr("d", m).attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
  }
  g2(u, "sad");
  function y2(g3) {
    g3.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
  }
  return g2(y2, "ambivalent"), e.score > 3 ? f(r) : e.score < 3 ? u(r) : y2(r), c;
}, "drawFace");
var ot = g2(function(t, e) {
  const s = t.append("circle");
  return s.attr("cx", e.cx), s.attr("cy", e.cy), s.attr("class", "actor-" + e.pos), s.attr("fill", e.fill), s.attr("stroke", e.stroke), s.attr("r", e.r), s.class !== void 0 && s.attr("class", s.class), e.title !== void 0 && s.append("title").text(e.title), s;
}, "drawCircle");
var ct = g2(function(t, e) {
  return g(t, e);
}, "drawText");
var zt = g2(function(t, e) {
  function s(r, f, u, y2, g3) {
    return r + "," + f + " " + (r + u) + "," + f + " " + (r + u) + "," + (f + y2 - g3) + " " + (r + u - g3 * 1.2) + "," + (f + y2) + " " + r + "," + (f + y2);
  }
  g2(s, "genPoints");
  const c = t.append("polygon");
  c.attr("points", s(e.x, e.y, 50, 20, 7)), c.attr("class", "labelBox"), e.y = e.y + e.labelMargin, e.x = e.x + 0.5 * e.labelMargin, ct(t, e);
}, "drawLabel");
var Wt = g2(function(t, e, s) {
  const c = t.append("g"), r = y();
  r.x = e.x, r.y = e.y, r.fill = e.fill, r.width = s.width * e.taskCount + // width of the tasks
  s.diagramMarginX * (e.taskCount - 1), r.height = s.height, r.class = "journey-section section-type-" + e.num, r.rx = 3, r.ry = 3, J(c, r), ht(s)(
    e.text,
    c,
    r.x,
    r.y,
    r.width,
    r.height,
    { class: "journey-section section-type-" + e.num },
    s,
    e.colour
  );
}, "drawSection");
var nt = -1;
var Ot = g2(function(t, e, s) {
  const c = e.x + s.width / 2, r = t.append("g");
  nt++;
  const f = 300 + 5 * 30;
  r.append("line").attr("id", "task" + nt).attr("x1", c).attr("y1", e.y).attr("x2", c).attr("y2", f).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), Nt(r, {
    cx: c,
    cy: 300 + (5 - e.score) * 30,
    score: e.score
  });
  const u = y();
  u.x = e.x, u.y = e.y, u.fill = e.fill, u.width = s.width, u.height = s.height, u.class = "task task-type-" + e.num, u.rx = 3, u.ry = 3, J(r, u);
  let y2 = e.x + 14;
  e.people.forEach((g3) => {
    const m = e.actors[g3].color, x2 = {
      cx: y2,
      cy: e.y,
      r: 7,
      fill: m,
      stroke: "#000",
      title: g3,
      pos: e.actors[g3].position
    };
    ot(r, x2), y2 += 10;
  }), ht(s)(
    e.task,
    r,
    u.x,
    u.y,
    u.width,
    u.height,
    { class: "task" },
    s,
    e.colour
  );
}, "drawTask");
var Yt = g2(function(t, e) {
  d(t, e);
}, "drawBackgroundRect");
var ht = function() {
  function t(r, f, u, y2, g3, m, x2, h) {
    const i = f.append("text").attr("x", u + g3 / 2).attr("y", y2 + m / 2 + 5).style("font-color", h).style("text-anchor", "middle").text(r);
    c(i, x2);
  }
  g2(t, "byText");
  function e(r, f, u, y2, g3, m, x2, h, i) {
    const { taskFontSize: a, taskFontFamily: l2 } = h, d2 = r.split(/<br\s*\/?>/gi);
    for (let p = 0; p < d2.length; p++) {
      const o = p * a - a * (d2.length - 1) / 2, b = f.append("text").attr("x", u + g3 / 2).attr("y", y2).attr("fill", i).style("text-anchor", "middle").style("font-size", a).style("font-family", l2);
      b.append("tspan").attr("x", u + g3 / 2).attr("dy", o).text(d2[p]), b.attr("y", y2 + m / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), c(b, x2);
    }
  }
  g2(e, "byTspan");
  function s(r, f, u, y2, g3, m, x2, h) {
    const i = f.append("switch"), l2 = i.append("foreignObject").attr("x", u).attr("y", y2).attr("width", g3).attr("height", m).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    l2.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(r), e(r, i, u, y2, g3, m, x2, h), c(l2, x2);
  }
  g2(s, "byFo");
  function c(r, f) {
    for (const u in f)
      u in f && r.attr(u, f[u]);
  }
  return g2(c, "_setTextAttrs"), function(r) {
    return r.textPlacement === "fo" ? s : r.textPlacement === "old" ? t : e;
  };
}();
var qt = g2(function(t) {
  t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics");
var j = {
  drawRect: J,
  drawCircle: ot,
  drawSection: Wt,
  drawText: ct,
  drawLabel: zt,
  drawTask: Ot,
  drawBackgroundRect: Yt,
  initGraphics: qt
};
var Xt = g2(function(t) {
  Object.keys(t).forEach(function(s) {
    $[s] = t[s];
  });
}, "setConf");
var E = {};
var W = 0;
function ut(t) {
  const e = gt().journey, s = e.maxLabelWidth;
  W = 0;
  let c = 60;
  Object.keys(E).forEach((r) => {
    const f = E[r].color, u = {
      cx: 20,
      cy: c,
      r: 7,
      fill: f,
      stroke: "#000",
      pos: E[r].position
    };
    j.drawCircle(t, u);
    let y2 = t.append("text").attr("visibility", "hidden").text(r);
    const g3 = y2.node().getBoundingClientRect().width;
    y2.remove();
    let m = [];
    if (g3 <= s)
      m = [r];
    else {
      const x2 = r.split(" ");
      let h = "";
      y2 = t.append("text").attr("visibility", "hidden"), x2.forEach((i) => {
        const a = h ? `${h} ${i}` : i;
        if (y2.text(a), y2.node().getBoundingClientRect().width > s) {
          if (h && m.push(h), h = i, y2.text(i), y2.node().getBoundingClientRect().width > s) {
            let d2 = "";
            for (const p of i)
              d2 += p, y2.text(d2 + "-"), y2.node().getBoundingClientRect().width > s && (m.push(d2.slice(0, -1) + "-"), d2 = p);
            h = d2;
          }
        } else
          h = a;
      }), h && m.push(h), y2.remove();
    }
    m.forEach((x2, h) => {
      const i = {
        x: 40,
        y: c + 7 + h * 20,
        fill: "#666",
        text: x2,
        textMargin: e.boxTextMargin ?? 5
      }, l2 = j.drawText(t, i).node().getBoundingClientRect().width;
      l2 > W && l2 > e.leftMargin - l2 && (W = l2);
    }), c += Math.max(20, m.length * 20);
  });
}
g2(ut, "drawActorLegend");
var $ = gt().journey;
var P = 0;
var Gt = g2(function(t, e, s, c) {
  const r = gt(), f = r.journey.titleColor, u = r.journey.titleFontSize, y2 = r.journey.titleFontFamily, g3 = r.securityLevel;
  let m;
  g3 === "sandbox" && (m = dt("#i" + e));
  const x2 = g3 === "sandbox" ? dt(m.nodes()[0].contentDocument.body) : dt("body");
  S.init();
  const h = x2.select("#" + e);
  j.initGraphics(h);
  const i = c.db.getTasks(), a = c.db.getDiagramTitle(), l2 = c.db.getActors();
  for (const C in E)
    delete E[C];
  let d2 = 0;
  l2.forEach((C) => {
    E[C] = {
      color: $.actorColours[d2 % $.actorColours.length],
      position: d2
    }, d2++;
  }), ut(h), P = $.leftMargin + W, S.insert(0, 0, P, Object.keys(E).length * 50), Ht(h, i, 0);
  const p = S.getBounds();
  a && h.append("text").text(a).attr("x", P).attr("font-size", u).attr("font-weight", "bold").attr("y", 25).attr("fill", f).attr("font-family", y2);
  const o = p.stopy - p.starty + 2 * $.diagramMarginY, b = P + p.stopx + 2 * $.diagramMarginX;
  $f(h, o, b, $.useMaxWidth), h.append("line").attr("x1", P).attr("y1", $.height * 4).attr("x2", b - P - 4).attr("y2", $.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
  const k = a ? 70 : 0;
  h.attr("viewBox", `${p.startx} -25 ${b} ${o + k}`), h.attr("preserveAspectRatio", "xMinYMin meet"), h.attr("height", o + k + 25);
}, "draw");
var S = {
  data: {
    startx: void 0,
    stopx: void 0,
    starty: void 0,
    stopy: void 0
  },
  verticalPos: 0,
  sequenceItems: [],
  init: g2(function() {
    this.sequenceItems = [], this.data = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    }, this.verticalPos = 0;
  }, "init"),
  updateVal: g2(function(t, e, s, c) {
    t[e] === void 0 ? t[e] = s : t[e] = c(s, t[e]);
  }, "updateVal"),
  updateBounds: g2(function(t, e, s, c) {
    const r = gt().journey, f = this;
    let u = 0;
    function y2(g3) {
      return g2(function(x2) {
        u++;
        const h = f.sequenceItems.length - u + 1;
        f.updateVal(x2, "starty", e - h * r.boxMargin, Math.min), f.updateVal(x2, "stopy", c + h * r.boxMargin, Math.max), f.updateVal(S.data, "startx", t - h * r.boxMargin, Math.min), f.updateVal(S.data, "stopx", s + h * r.boxMargin, Math.max), g3 !== "activation" && (f.updateVal(x2, "startx", t - h * r.boxMargin, Math.min), f.updateVal(x2, "stopx", s + h * r.boxMargin, Math.max), f.updateVal(S.data, "starty", e - h * r.boxMargin, Math.min), f.updateVal(S.data, "stopy", c + h * r.boxMargin, Math.max));
      }, "updateItemBounds");
    }
    g2(y2, "updateFn"), this.sequenceItems.forEach(y2());
  }, "updateBounds"),
  insert: g2(function(t, e, s, c) {
    const r = Math.min(t, s), f = Math.max(t, s), u = Math.min(e, c), y2 = Math.max(e, c);
    this.updateVal(S.data, "startx", r, Math.min), this.updateVal(S.data, "starty", u, Math.min), this.updateVal(S.data, "stopx", f, Math.max), this.updateVal(S.data, "stopy", y2, Math.max), this.updateBounds(r, u, f, y2);
  }, "insert"),
  bumpVerticalPos: g2(function(t) {
    this.verticalPos = this.verticalPos + t, this.data.stopy = this.verticalPos;
  }, "bumpVerticalPos"),
  getVerticalPos: g2(function() {
    return this.verticalPos;
  }, "getVerticalPos"),
  getBounds: g2(function() {
    return this.data;
  }, "getBounds")
};
var H = $.sectionFills;
var st = $.sectionColours;
var Ht = g2(function(t, e, s) {
  const c = gt().journey;
  let r = "";
  const f = c.height * 2 + c.diagramMarginY, u = s + f;
  let y2 = 0, g3 = "#CCC", m = "black", x2 = 0;
  for (const [h, i] of e.entries()) {
    if (r !== i.section) {
      g3 = H[y2 % H.length], x2 = y2 % H.length, m = st[y2 % st.length];
      let l2 = 0;
      const d2 = i.section;
      for (let o = h; o < e.length && e[o].section == d2; o++)
        l2 = l2 + 1;
      const p = {
        x: h * c.taskMargin + h * c.width + P,
        y: 50,
        text: i.section,
        fill: g3,
        num: x2,
        colour: m,
        taskCount: l2
      };
      j.drawSection(t, p, c), r = i.section, y2++;
    }
    const a = i.people.reduce((l2, d2) => (E[d2] && (l2[d2] = E[d2]), l2), {});
    i.x = h * c.taskMargin + h * c.width + P, i.y = u, i.width = c.diagramMarginX, i.height = c.diagramMarginY, i.colour = m, i.fill = g3, i.num = x2, i.actors = a, j.drawTask(t, i, c), S.insert(i.x, i.y, i.x + i.width + c.taskMargin, 300 + 5 * 30);
  }
}, "drawTasks");
var at = {
  setConf: Xt,
  draw: Gt
};
var Qt = {
  parser: Et,
  db: rt,
  renderer: at,
  styles: jt,
  init: g2((t) => {
    at.setConf(t.journey), rt.clear();
  }, "init")
};
export {
  Qt as diagram
};
//# sourceMappingURL=journeyDiagram-EWQZEKCU-BjR7C_P7-L65RTQSS.js.map
