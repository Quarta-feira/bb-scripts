function simple(node, visitors, baseVisitor, state, override) {
  if (!baseVisitor) {
    baseVisitor = base;
  }
  (function c(node2, st, override2) {
    var type = override2 || node2.type;
    baseVisitor[type](node2, st, c);
    if (visitors[type]) {
      visitors[type](node2, st);
    }
  })(node, state, override);
}
function ancestor(node, visitors, baseVisitor, state, override) {
  var ancestors = [];
  if (!baseVisitor) {
    baseVisitor = base;
  }
  (function c(node2, st, override2) {
    var type = override2 || node2.type;
    var isNew = node2 !== ancestors[ancestors.length - 1];
    if (isNew) {
      ancestors.push(node2);
    }
    baseVisitor[type](node2, st, c);
    if (visitors[type]) {
      visitors[type](node2, st || ancestors, ancestors);
    }
    if (isNew) {
      ancestors.pop();
    }
  })(node, state, override);
}
function recursive(node, state, funcs, baseVisitor, override) {
  var visitor = funcs ? make(funcs, baseVisitor || void 0) : baseVisitor;
  (function c(node2, st, override2) {
    visitor[override2 || node2.type](node2, st, c);
  })(node, state, override);
}
function makeTest(test) {
  if (typeof test === "string") {
    return function(type) {
      return type === test;
    };
  } else if (!test) {
    return function() {
      return true;
    };
  } else {
    return test;
  }
}
var Found = function Found2(node, state) {
  this.node = node;
  this.state = state;
};
function full(node, callback, baseVisitor, state, override) {
  if (!baseVisitor) {
    baseVisitor = base;
  }
  var last;
  (function c(node2, st, override2) {
    var type = override2 || node2.type;
    baseVisitor[type](node2, st, c);
    if (last !== node2) {
      callback(node2, st, type);
      last = node2;
    }
  })(node, state, override);
}
function fullAncestor(node, callback, baseVisitor, state) {
  if (!baseVisitor) {
    baseVisitor = base;
  }
  var ancestors = [], last;
  (function c(node2, st, override) {
    var type = override || node2.type;
    var isNew = node2 !== ancestors[ancestors.length - 1];
    if (isNew) {
      ancestors.push(node2);
    }
    baseVisitor[type](node2, st, c);
    if (last !== node2) {
      callback(node2, st || ancestors, ancestors, type);
      last = node2;
    }
    if (isNew) {
      ancestors.pop();
    }
  })(node, state);
}
function findNodeAt(node, start, end, test, baseVisitor, state) {
  if (!baseVisitor) {
    baseVisitor = base;
  }
  test = makeTest(test);
  try {
    (function c(node2, st, override) {
      var type = override || node2.type;
      if ((start == null || node2.start <= start) && (end == null || node2.end >= end)) {
        baseVisitor[type](node2, st, c);
      }
      if ((start == null || node2.start === start) && (end == null || node2.end === end) && test(type, node2)) {
        throw new Found(node2, st);
      }
    })(node, state);
  } catch (e) {
    if (e instanceof Found) {
      return e;
    }
    throw e;
  }
}
function findNodeAround(node, pos, test, baseVisitor, state) {
  test = makeTest(test);
  if (!baseVisitor) {
    baseVisitor = base;
  }
  try {
    (function c(node2, st, override) {
      var type = override || node2.type;
      if (node2.start > pos || node2.end < pos) {
        return;
      }
      baseVisitor[type](node2, st, c);
      if (test(type, node2)) {
        throw new Found(node2, st);
      }
    })(node, state);
  } catch (e) {
    if (e instanceof Found) {
      return e;
    }
    throw e;
  }
}
function findNodeAfter(node, pos, test, baseVisitor, state) {
  test = makeTest(test);
  if (!baseVisitor) {
    baseVisitor = base;
  }
  try {
    (function c(node2, st, override) {
      if (node2.end < pos) {
        return;
      }
      var type = override || node2.type;
      if (node2.start >= pos && test(type, node2)) {
        throw new Found(node2, st);
      }
      baseVisitor[type](node2, st, c);
    })(node, state);
  } catch (e) {
    if (e instanceof Found) {
      return e;
    }
    throw e;
  }
}
function findNodeBefore(node, pos, test, baseVisitor, state) {
  test = makeTest(test);
  if (!baseVisitor) {
    baseVisitor = base;
  }
  var max;
  (function c(node2, st, override) {
    if (node2.start > pos) {
      return;
    }
    var type = override || node2.type;
    if (node2.end <= pos && (!max || max.node.end < node2.end) && test(type, node2)) {
      max = new Found(node2, st);
    }
    baseVisitor[type](node2, st, c);
  })(node, state);
  return max;
}
function make(funcs, baseVisitor) {
  var visitor = Object.create(baseVisitor || base);
  for (var type in funcs) {
    visitor[type] = funcs[type];
  }
  return visitor;
}
function skipThrough(node, st, c) {
  c(node, st);
}
function ignore(_node, _st, _c) {
}
var base = {};
base.Program = base.BlockStatement = base.StaticBlock = function(node, st, c) {
  for (var i = 0, list = node.body; i < list.length; i += 1) {
    var stmt = list[i];
    c(stmt, st, "Statement");
  }
};
base.Statement = skipThrough;
base.EmptyStatement = ignore;
base.ExpressionStatement = base.ParenthesizedExpression = base.ChainExpression = function(node, st, c) {
  return c(node.expression, st, "Expression");
};
base.IfStatement = function(node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Statement");
  if (node.alternate) {
    c(node.alternate, st, "Statement");
  }
};
base.LabeledStatement = function(node, st, c) {
  return c(node.body, st, "Statement");
};
base.BreakStatement = base.ContinueStatement = ignore;
base.WithStatement = function(node, st, c) {
  c(node.object, st, "Expression");
  c(node.body, st, "Statement");
};
base.SwitchStatement = function(node, st, c) {
  c(node.discriminant, st, "Expression");
  for (var i$1 = 0, list$1 = node.cases; i$1 < list$1.length; i$1 += 1) {
    var cs = list$1[i$1];
    if (cs.test) {
      c(cs.test, st, "Expression");
    }
    for (var i = 0, list = cs.consequent; i < list.length; i += 1) {
      var cons = list[i];
      c(cons, st, "Statement");
    }
  }
};
base.SwitchCase = function(node, st, c) {
  if (node.test) {
    c(node.test, st, "Expression");
  }
  for (var i = 0, list = node.consequent; i < list.length; i += 1) {
    var cons = list[i];
    c(cons, st, "Statement");
  }
};
base.ReturnStatement = base.YieldExpression = base.AwaitExpression = function(node, st, c) {
  if (node.argument) {
    c(node.argument, st, "Expression");
  }
};
base.ThrowStatement = base.SpreadElement = function(node, st, c) {
  return c(node.argument, st, "Expression");
};
base.TryStatement = function(node, st, c) {
  c(node.block, st, "Statement");
  if (node.handler) {
    c(node.handler, st);
  }
  if (node.finalizer) {
    c(node.finalizer, st, "Statement");
  }
};
base.CatchClause = function(node, st, c) {
  if (node.param) {
    c(node.param, st, "Pattern");
  }
  c(node.body, st, "Statement");
};
base.WhileStatement = base.DoWhileStatement = function(node, st, c) {
  c(node.test, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForStatement = function(node, st, c) {
  if (node.init) {
    c(node.init, st, "ForInit");
  }
  if (node.test) {
    c(node.test, st, "Expression");
  }
  if (node.update) {
    c(node.update, st, "Expression");
  }
  c(node.body, st, "Statement");
};
base.ForInStatement = base.ForOfStatement = function(node, st, c) {
  c(node.left, st, "ForInit");
  c(node.right, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForInit = function(node, st, c) {
  if (node.type === "VariableDeclaration") {
    c(node, st);
  } else {
    c(node, st, "Expression");
  }
};
base.DebuggerStatement = ignore;
base.FunctionDeclaration = function(node, st, c) {
  return c(node, st, "Function");
};
base.VariableDeclaration = function(node, st, c) {
  for (var i = 0, list = node.declarations; i < list.length; i += 1) {
    var decl = list[i];
    c(decl, st);
  }
};
base.VariableDeclarator = function(node, st, c) {
  c(node.id, st, "Pattern");
  if (node.init) {
    c(node.init, st, "Expression");
  }
};
base.Function = function(node, st, c) {
  if (node.id) {
    c(node.id, st, "Pattern");
  }
  for (var i = 0, list = node.params; i < list.length; i += 1) {
    var param = list[i];
    c(param, st, "Pattern");
  }
  c(node.body, st, node.expression ? "Expression" : "Statement");
};
base.Pattern = function(node, st, c) {
  if (node.type === "Identifier") {
    c(node, st, "VariablePattern");
  } else if (node.type === "MemberExpression") {
    c(node, st, "MemberPattern");
  } else {
    c(node, st);
  }
};
base.VariablePattern = ignore;
base.MemberPattern = skipThrough;
base.RestElement = function(node, st, c) {
  return c(node.argument, st, "Pattern");
};
base.ArrayPattern = function(node, st, c) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];
    if (elt) {
      c(elt, st, "Pattern");
    }
  }
};
base.ObjectPattern = function(node, st, c) {
  for (var i = 0, list = node.properties; i < list.length; i += 1) {
    var prop = list[i];
    if (prop.type === "Property") {
      if (prop.computed) {
        c(prop.key, st, "Expression");
      }
      c(prop.value, st, "Pattern");
    } else if (prop.type === "RestElement") {
      c(prop.argument, st, "Pattern");
    }
  }
};
base.Expression = skipThrough;
base.ThisExpression = base.Super = base.MetaProperty = ignore;
base.ArrayExpression = function(node, st, c) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];
    if (elt) {
      c(elt, st, "Expression");
    }
  }
};
base.ObjectExpression = function(node, st, c) {
  for (var i = 0, list = node.properties; i < list.length; i += 1) {
    var prop = list[i];
    c(prop, st);
  }
};
base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration;
base.SequenceExpression = function(node, st, c) {
  for (var i = 0, list = node.expressions; i < list.length; i += 1) {
    var expr = list[i];
    c(expr, st, "Expression");
  }
};
base.TemplateLiteral = function(node, st, c) {
  for (var i = 0, list = node.quasis; i < list.length; i += 1) {
    var quasi = list[i];
    c(quasi, st);
  }
  for (var i$1 = 0, list$1 = node.expressions; i$1 < list$1.length; i$1 += 1) {
    var expr = list$1[i$1];
    c(expr, st, "Expression");
  }
};
base.TemplateElement = ignore;
base.UnaryExpression = base.UpdateExpression = function(node, st, c) {
  c(node.argument, st, "Expression");
};
base.BinaryExpression = base.LogicalExpression = function(node, st, c) {
  c(node.left, st, "Expression");
  c(node.right, st, "Expression");
};
base.AssignmentExpression = base.AssignmentPattern = function(node, st, c) {
  c(node.left, st, "Pattern");
  c(node.right, st, "Expression");
};
base.ConditionalExpression = function(node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Expression");
  c(node.alternate, st, "Expression");
};
base.NewExpression = base.CallExpression = function(node, st, c) {
  c(node.callee, st, "Expression");
  if (node.arguments) {
    for (var i = 0, list = node.arguments; i < list.length; i += 1) {
      var arg = list[i];
      c(arg, st, "Expression");
    }
  }
};
base.MemberExpression = function(node, st, c) {
  c(node.object, st, "Expression");
  if (node.computed) {
    c(node.property, st, "Expression");
  }
};
base.ExportNamedDeclaration = base.ExportDefaultDeclaration = function(node, st, c) {
  if (node.declaration) {
    c(node.declaration, st, node.type === "ExportNamedDeclaration" || node.declaration.id ? "Statement" : "Expression");
  }
  if (node.source) {
    c(node.source, st, "Expression");
  }
};
base.ExportAllDeclaration = function(node, st, c) {
  if (node.exported) {
    c(node.exported, st);
  }
  c(node.source, st, "Expression");
};
base.ImportDeclaration = function(node, st, c) {
  for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
    var spec = list[i];
    c(spec, st);
  }
  c(node.source, st, "Expression");
};
base.ImportExpression = function(node, st, c) {
  c(node.source, st, "Expression");
};
base.ImportSpecifier = base.ImportDefaultSpecifier = base.ImportNamespaceSpecifier = base.Identifier = base.PrivateIdentifier = base.Literal = ignore;
base.TaggedTemplateExpression = function(node, st, c) {
  c(node.tag, st, "Expression");
  c(node.quasi, st, "Expression");
};
base.ClassDeclaration = base.ClassExpression = function(node, st, c) {
  return c(node, st, "Class");
};
base.Class = function(node, st, c) {
  if (node.id) {
    c(node.id, st, "Pattern");
  }
  if (node.superClass) {
    c(node.superClass, st, "Expression");
  }
  c(node.body, st);
};
base.ClassBody = function(node, st, c) {
  for (var i = 0, list = node.body; i < list.length; i += 1) {
    var elt = list[i];
    c(elt, st);
  }
};
base.MethodDefinition = base.PropertyDefinition = base.Property = function(node, st, c) {
  if (node.computed) {
    c(node.key, st, "Expression");
  }
  if (node.value) {
    c(node.value, st, "Expression");
  }
};
export {
  ancestor,
  base,
  findNodeAfter,
  findNodeAround,
  findNodeAt,
  findNodeBefore,
  full,
  fullAncestor,
  make,
  recursive,
  simple
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2xpYnMvd2Fsay5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gQVNUIHdhbGtlciBtb2R1bGUgZm9yIEVTVHJlZSBjb21wYXRpYmxlIHRyZWVzXG5cbi8vIEEgc2ltcGxlIHdhbGsgaXMgb25lIHdoZXJlIHlvdSBzaW1wbHkgc3BlY2lmeSBjYWxsYmFja3MgdG8gYmVcbi8vIGNhbGxlZCBvbiBzcGVjaWZpYyBub2Rlcy4gVGhlIGxhc3QgdHdvIGFyZ3VtZW50cyBhcmUgb3B0aW9uYWwuIEFcbi8vIHNpbXBsZSB1c2Ugd291bGQgYmVcbi8vXG4vLyAgICAgd2Fsay5zaW1wbGUobXlUcmVlLCB7XG4vLyAgICAgICAgIEV4cHJlc3Npb246IGZ1bmN0aW9uKG5vZGUpIHsgLi4uIH1cbi8vICAgICB9KTtcbi8vXG4vLyB0byBkbyBzb21ldGhpbmcgd2l0aCBhbGwgZXhwcmVzc2lvbnMuIEFsbCBFU1RyZWUgbm9kZSB0eXBlc1xuLy8gY2FuIGJlIHVzZWQgdG8gaWRlbnRpZnkgbm9kZSB0eXBlcywgYXMgd2VsbCBhcyBFeHByZXNzaW9uIGFuZFxuLy8gU3RhdGVtZW50LCB3aGljaCBkZW5vdGUgY2F0ZWdvcmllcyBvZiBub2Rlcy5cbi8vXG4vLyBUaGUgYmFzZSBhcmd1bWVudCBjYW4gYmUgdXNlZCB0byBwYXNzIGEgY3VzdG9tIChyZWN1cnNpdmUpXG4vLyB3YWxrZXIsIGFuZCBzdGF0ZSBjYW4gYmUgdXNlZCB0byBnaXZlIHRoaXMgd2Fsa2VkIGFuIGluaXRpYWxcbi8vIHN0YXRlLlxuXG5mdW5jdGlvbiBzaW1wbGUobm9kZSwgdmlzaXRvcnMsIGJhc2VWaXNpdG9yLCBzdGF0ZSwgb3ZlcnJpZGUpIHtcbiAgaWYgKCFiYXNlVmlzaXRvcikgeyBiYXNlVmlzaXRvciA9IGJhc2VcbiAgOyB9KGZ1bmN0aW9uIGMobm9kZSwgc3QsIG92ZXJyaWRlKSB7XG4gICAgdmFyIHR5cGUgPSBvdmVycmlkZSB8fCBub2RlLnR5cGU7XG4gICAgYmFzZVZpc2l0b3JbdHlwZV0obm9kZSwgc3QsIGMpO1xuICAgIGlmICh2aXNpdG9yc1t0eXBlXSkgeyB2aXNpdG9yc1t0eXBlXShub2RlLCBzdCk7IH1cbiAgfSkobm9kZSwgc3RhdGUsIG92ZXJyaWRlKTtcbn1cblxuLy8gQW4gYW5jZXN0b3Igd2FsayBrZWVwcyBhbiBhcnJheSBvZiBhbmNlc3RvciBub2RlcyAoaW5jbHVkaW5nIHRoZVxuLy8gY3VycmVudCBub2RlKSBhbmQgcGFzc2VzIHRoZW0gdG8gdGhlIGNhbGxiYWNrIGFzIHRoaXJkIHBhcmFtZXRlclxuLy8gKGFuZCBhbHNvIGFzIHN0YXRlIHBhcmFtZXRlciB3aGVuIG5vIG90aGVyIHN0YXRlIGlzIHByZXNlbnQpLlxuZnVuY3Rpb24gYW5jZXN0b3Iobm9kZSwgdmlzaXRvcnMsIGJhc2VWaXNpdG9yLCBzdGF0ZSwgb3ZlcnJpZGUpIHtcbiAgdmFyIGFuY2VzdG9ycyA9IFtdO1xuICBpZiAoIWJhc2VWaXNpdG9yKSB7IGJhc2VWaXNpdG9yID0gYmFzZVxuICA7IH0oZnVuY3Rpb24gYyhub2RlLCBzdCwgb3ZlcnJpZGUpIHtcbiAgICB2YXIgdHlwZSA9IG92ZXJyaWRlIHx8IG5vZGUudHlwZTtcbiAgICB2YXIgaXNOZXcgPSBub2RlICE9PSBhbmNlc3RvcnNbYW5jZXN0b3JzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChpc05ldykgeyBhbmNlc3RvcnMucHVzaChub2RlKTsgfVxuICAgIGJhc2VWaXNpdG9yW3R5cGVdKG5vZGUsIHN0LCBjKTtcbiAgICBpZiAodmlzaXRvcnNbdHlwZV0pIHsgdmlzaXRvcnNbdHlwZV0obm9kZSwgc3QgfHwgYW5jZXN0b3JzLCBhbmNlc3RvcnMpOyB9XG4gICAgaWYgKGlzTmV3KSB7IGFuY2VzdG9ycy5wb3AoKTsgfVxuICB9KShub2RlLCBzdGF0ZSwgb3ZlcnJpZGUpO1xufVxuXG4vLyBBIHJlY3Vyc2l2ZSB3YWxrIGlzIG9uZSB3aGVyZSB5b3VyIGZ1bmN0aW9ucyBvdmVycmlkZSB0aGUgZGVmYXVsdFxuLy8gd2Fsa2Vycy4gVGhleSBjYW4gbW9kaWZ5IGFuZCByZXBsYWNlIHRoZSBzdGF0ZSBwYXJhbWV0ZXIgdGhhdCdzXG4vLyB0aHJlYWRlZCB0aHJvdWdoIHRoZSB3YWxrLCBhbmQgY2FuIG9wdCBob3cgYW5kIHdoZXRoZXIgdG8gd2Fsa1xuLy8gdGhlaXIgY2hpbGQgbm9kZXMgKGJ5IGNhbGxpbmcgdGhlaXIgdGhpcmQgYXJndW1lbnQgb24gdGhlc2Vcbi8vIG5vZGVzKS5cbmZ1bmN0aW9uIHJlY3Vyc2l2ZShub2RlLCBzdGF0ZSwgZnVuY3MsIGJhc2VWaXNpdG9yLCBvdmVycmlkZSkge1xuICB2YXIgdmlzaXRvciA9IGZ1bmNzID8gbWFrZShmdW5jcywgYmFzZVZpc2l0b3IgfHwgdW5kZWZpbmVkKSA6IGJhc2VWaXNpdG9yXG4gIDsoZnVuY3Rpb24gYyhub2RlLCBzdCwgb3ZlcnJpZGUpIHtcbiAgICB2aXNpdG9yW292ZXJyaWRlIHx8IG5vZGUudHlwZV0obm9kZSwgc3QsIGMpO1xuICB9KShub2RlLCBzdGF0ZSwgb3ZlcnJpZGUpO1xufVxuXG5mdW5jdGlvbiBtYWtlVGVzdCh0ZXN0KSB7XG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gXCJzdHJpbmdcIilcbiAgICB7IHJldHVybiBmdW5jdGlvbiAodHlwZSkgeyByZXR1cm4gdHlwZSA9PT0gdGVzdDsgfSB9XG4gIGVsc2UgaWYgKCF0ZXN0KVxuICAgIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0gfVxuICBlbHNlXG4gICAgeyByZXR1cm4gdGVzdCB9XG59XG5cbnZhciBGb3VuZCA9IGZ1bmN0aW9uIEZvdW5kKG5vZGUsIHN0YXRlKSB7IHRoaXMubm9kZSA9IG5vZGU7IHRoaXMuc3RhdGUgPSBzdGF0ZTsgfTtcblxuLy8gQSBmdWxsIHdhbGsgdHJpZ2dlcnMgdGhlIGNhbGxiYWNrIG9uIGVhY2ggbm9kZVxuZnVuY3Rpb24gZnVsbChub2RlLCBjYWxsYmFjaywgYmFzZVZpc2l0b3IsIHN0YXRlLCBvdmVycmlkZSkge1xuICBpZiAoIWJhc2VWaXNpdG9yKSB7IGJhc2VWaXNpdG9yID0gYmFzZTsgfVxuICB2YXIgbGFzdFxuICA7KGZ1bmN0aW9uIGMobm9kZSwgc3QsIG92ZXJyaWRlKSB7XG4gICAgdmFyIHR5cGUgPSBvdmVycmlkZSB8fCBub2RlLnR5cGU7XG4gICAgYmFzZVZpc2l0b3JbdHlwZV0obm9kZSwgc3QsIGMpO1xuICAgIGlmIChsYXN0ICE9PSBub2RlKSB7XG4gICAgICBjYWxsYmFjayhub2RlLCBzdCwgdHlwZSk7XG4gICAgICBsYXN0ID0gbm9kZTtcbiAgICB9XG4gIH0pKG5vZGUsIHN0YXRlLCBvdmVycmlkZSk7XG59XG5cbi8vIEFuIGZ1bGxBbmNlc3RvciB3YWxrIGlzIGxpa2UgYW4gYW5jZXN0b3Igd2FsaywgYnV0IHRyaWdnZXJzXG4vLyB0aGUgY2FsbGJhY2sgb24gZWFjaCBub2RlXG5mdW5jdGlvbiBmdWxsQW5jZXN0b3Iobm9kZSwgY2FsbGJhY2ssIGJhc2VWaXNpdG9yLCBzdGF0ZSkge1xuICBpZiAoIWJhc2VWaXNpdG9yKSB7IGJhc2VWaXNpdG9yID0gYmFzZTsgfVxuICB2YXIgYW5jZXN0b3JzID0gW10sIGxhc3RcbiAgOyhmdW5jdGlvbiBjKG5vZGUsIHN0LCBvdmVycmlkZSkge1xuICAgIHZhciB0eXBlID0gb3ZlcnJpZGUgfHwgbm9kZS50eXBlO1xuICAgIHZhciBpc05ldyA9IG5vZGUgIT09IGFuY2VzdG9yc1thbmNlc3RvcnMubGVuZ3RoIC0gMV07XG4gICAgaWYgKGlzTmV3KSB7IGFuY2VzdG9ycy5wdXNoKG5vZGUpOyB9XG4gICAgYmFzZVZpc2l0b3JbdHlwZV0obm9kZSwgc3QsIGMpO1xuICAgIGlmIChsYXN0ICE9PSBub2RlKSB7XG4gICAgICBjYWxsYmFjayhub2RlLCBzdCB8fCBhbmNlc3RvcnMsIGFuY2VzdG9ycywgdHlwZSk7XG4gICAgICBsYXN0ID0gbm9kZTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7IGFuY2VzdG9ycy5wb3AoKTsgfVxuICB9KShub2RlLCBzdGF0ZSk7XG59XG5cbi8vIEZpbmQgYSBub2RlIHdpdGggYSBnaXZlbiBzdGFydCwgZW5kLCBhbmQgdHlwZSAoYWxsIGFyZSBvcHRpb25hbCxcbi8vIG51bGwgY2FuIGJlIHVzZWQgYXMgd2lsZGNhcmQpLiBSZXR1cm5zIGEge25vZGUsIHN0YXRlfSBvYmplY3QsIG9yXG4vLyB1bmRlZmluZWQgd2hlbiBpdCBkb2Vzbid0IGZpbmQgYSBtYXRjaGluZyBub2RlLlxuZnVuY3Rpb24gZmluZE5vZGVBdChub2RlLCBzdGFydCwgZW5kLCB0ZXN0LCBiYXNlVmlzaXRvciwgc3RhdGUpIHtcbiAgaWYgKCFiYXNlVmlzaXRvcikgeyBiYXNlVmlzaXRvciA9IGJhc2U7IH1cbiAgdGVzdCA9IG1ha2VUZXN0KHRlc3QpO1xuICB0cnkge1xuICAgIChmdW5jdGlvbiBjKG5vZGUsIHN0LCBvdmVycmlkZSkge1xuICAgICAgdmFyIHR5cGUgPSBvdmVycmlkZSB8fCBub2RlLnR5cGU7XG4gICAgICBpZiAoKHN0YXJ0ID09IG51bGwgfHwgbm9kZS5zdGFydCA8PSBzdGFydCkgJiZcbiAgICAgICAgICAoZW5kID09IG51bGwgfHwgbm9kZS5lbmQgPj0gZW5kKSlcbiAgICAgICAgeyBiYXNlVmlzaXRvclt0eXBlXShub2RlLCBzdCwgYyk7IH1cbiAgICAgIGlmICgoc3RhcnQgPT0gbnVsbCB8fCBub2RlLnN0YXJ0ID09PSBzdGFydCkgJiZcbiAgICAgICAgICAoZW5kID09IG51bGwgfHwgbm9kZS5lbmQgPT09IGVuZCkgJiZcbiAgICAgICAgICB0ZXN0KHR5cGUsIG5vZGUpKVxuICAgICAgICB7IHRocm93IG5ldyBGb3VuZChub2RlLCBzdCkgfVxuICAgIH0pKG5vZGUsIHN0YXRlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgRm91bmQpIHsgcmV0dXJuIGUgfVxuICAgIHRocm93IGVcbiAgfVxufVxuXG4vLyBGaW5kIHRoZSBpbm5lcm1vc3Qgbm9kZSBvZiBhIGdpdmVuIHR5cGUgdGhhdCBjb250YWlucyB0aGUgZ2l2ZW5cbi8vIHBvc2l0aW9uLiBJbnRlcmZhY2Ugc2ltaWxhciB0byBmaW5kTm9kZUF0LlxuZnVuY3Rpb24gZmluZE5vZGVBcm91bmQobm9kZSwgcG9zLCB0ZXN0LCBiYXNlVmlzaXRvciwgc3RhdGUpIHtcbiAgdGVzdCA9IG1ha2VUZXN0KHRlc3QpO1xuICBpZiAoIWJhc2VWaXNpdG9yKSB7IGJhc2VWaXNpdG9yID0gYmFzZTsgfVxuICB0cnkge1xuICAgIChmdW5jdGlvbiBjKG5vZGUsIHN0LCBvdmVycmlkZSkge1xuICAgICAgdmFyIHR5cGUgPSBvdmVycmlkZSB8fCBub2RlLnR5cGU7XG4gICAgICBpZiAobm9kZS5zdGFydCA+IHBvcyB8fCBub2RlLmVuZCA8IHBvcykgeyByZXR1cm4gfVxuICAgICAgYmFzZVZpc2l0b3JbdHlwZV0obm9kZSwgc3QsIGMpO1xuICAgICAgaWYgKHRlc3QodHlwZSwgbm9kZSkpIHsgdGhyb3cgbmV3IEZvdW5kKG5vZGUsIHN0KSB9XG4gICAgfSkobm9kZSwgc3RhdGUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBGb3VuZCkgeyByZXR1cm4gZSB9XG4gICAgdGhyb3cgZVxuICB9XG59XG5cbi8vIEZpbmQgdGhlIG91dGVybW9zdCBtYXRjaGluZyBub2RlIGFmdGVyIGEgZ2l2ZW4gcG9zaXRpb24uXG5mdW5jdGlvbiBmaW5kTm9kZUFmdGVyKG5vZGUsIHBvcywgdGVzdCwgYmFzZVZpc2l0b3IsIHN0YXRlKSB7XG4gIHRlc3QgPSBtYWtlVGVzdCh0ZXN0KTtcbiAgaWYgKCFiYXNlVmlzaXRvcikgeyBiYXNlVmlzaXRvciA9IGJhc2U7IH1cbiAgdHJ5IHtcbiAgICAoZnVuY3Rpb24gYyhub2RlLCBzdCwgb3ZlcnJpZGUpIHtcbiAgICAgIGlmIChub2RlLmVuZCA8IHBvcykgeyByZXR1cm4gfVxuICAgICAgdmFyIHR5cGUgPSBvdmVycmlkZSB8fCBub2RlLnR5cGU7XG4gICAgICBpZiAobm9kZS5zdGFydCA+PSBwb3MgJiYgdGVzdCh0eXBlLCBub2RlKSkgeyB0aHJvdyBuZXcgRm91bmQobm9kZSwgc3QpIH1cbiAgICAgIGJhc2VWaXNpdG9yW3R5cGVdKG5vZGUsIHN0LCBjKTtcbiAgICB9KShub2RlLCBzdGF0ZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEZvdW5kKSB7IHJldHVybiBlIH1cbiAgICB0aHJvdyBlXG4gIH1cbn1cblxuLy8gRmluZCB0aGUgb3V0ZXJtb3N0IG1hdGNoaW5nIG5vZGUgYmVmb3JlIGEgZ2l2ZW4gcG9zaXRpb24uXG5mdW5jdGlvbiBmaW5kTm9kZUJlZm9yZShub2RlLCBwb3MsIHRlc3QsIGJhc2VWaXNpdG9yLCBzdGF0ZSkge1xuICB0ZXN0ID0gbWFrZVRlc3QodGVzdCk7XG4gIGlmICghYmFzZVZpc2l0b3IpIHsgYmFzZVZpc2l0b3IgPSBiYXNlOyB9XG4gIHZhciBtYXhcbiAgOyhmdW5jdGlvbiBjKG5vZGUsIHN0LCBvdmVycmlkZSkge1xuICAgIGlmIChub2RlLnN0YXJ0ID4gcG9zKSB7IHJldHVybiB9XG4gICAgdmFyIHR5cGUgPSBvdmVycmlkZSB8fCBub2RlLnR5cGU7XG4gICAgaWYgKG5vZGUuZW5kIDw9IHBvcyAmJiAoIW1heCB8fCBtYXgubm9kZS5lbmQgPCBub2RlLmVuZCkgJiYgdGVzdCh0eXBlLCBub2RlKSlcbiAgICAgIHsgbWF4ID0gbmV3IEZvdW5kKG5vZGUsIHN0KTsgfVxuICAgIGJhc2VWaXNpdG9yW3R5cGVdKG5vZGUsIHN0LCBjKTtcbiAgfSkobm9kZSwgc3RhdGUpO1xuICByZXR1cm4gbWF4XG59XG5cbi8vIFVzZWQgdG8gY3JlYXRlIGEgY3VzdG9tIHdhbGtlci4gV2lsbCBmaWxsIGluIGFsbCBtaXNzaW5nIG5vZGVcbi8vIHR5cGUgcHJvcGVydGllcyB3aXRoIHRoZSBkZWZhdWx0cy5cbmZ1bmN0aW9uIG1ha2UoZnVuY3MsIGJhc2VWaXNpdG9yKSB7XG4gIHZhciB2aXNpdG9yID0gT2JqZWN0LmNyZWF0ZShiYXNlVmlzaXRvciB8fCBiYXNlKTtcbiAgZm9yICh2YXIgdHlwZSBpbiBmdW5jcykgeyB2aXNpdG9yW3R5cGVdID0gZnVuY3NbdHlwZV07IH1cbiAgcmV0dXJuIHZpc2l0b3Jcbn1cblxuZnVuY3Rpb24gc2tpcFRocm91Z2gobm9kZSwgc3QsIGMpIHsgYyhub2RlLCBzdCk7IH1cbmZ1bmN0aW9uIGlnbm9yZShfbm9kZSwgX3N0LCBfYykge31cblxuLy8gTm9kZSB3YWxrZXJzLlxuXG52YXIgYmFzZSA9IHt9O1xuXG5iYXNlLlByb2dyYW0gPSBiYXNlLkJsb2NrU3RhdGVtZW50ID0gYmFzZS5TdGF0aWNCbG9jayA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xuICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IG5vZGUuYm9keTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpXG4gICAge1xuICAgIHZhciBzdG10ID0gbGlzdFtpXTtcblxuICAgIGMoc3RtdCwgc3QsIFwiU3RhdGVtZW50XCIpO1xuICB9XG59O1xuYmFzZS5TdGF0ZW1lbnQgPSBza2lwVGhyb3VnaDtcbmJhc2UuRW1wdHlTdGF0ZW1lbnQgPSBpZ25vcmU7XG5iYXNlLkV4cHJlc3Npb25TdGF0ZW1lbnQgPSBiYXNlLlBhcmVudGhlc2l6ZWRFeHByZXNzaW9uID0gYmFzZS5DaGFpbkV4cHJlc3Npb24gPVxuICBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHsgcmV0dXJuIGMobm9kZS5leHByZXNzaW9uLCBzdCwgXCJFeHByZXNzaW9uXCIpOyB9O1xuYmFzZS5JZlN0YXRlbWVudCA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xuICBjKG5vZGUudGVzdCwgc3QsIFwiRXhwcmVzc2lvblwiKTtcbiAgYyhub2RlLmNvbnNlcXVlbnQsIHN0LCBcIlN0YXRlbWVudFwiKTtcbiAgaWYgKG5vZGUuYWx0ZXJuYXRlKSB7IGMobm9kZS5hbHRlcm5hdGUsIHN0LCBcIlN0YXRlbWVudFwiKTsgfVxufTtcbmJhc2UuTGFiZWxlZFN0YXRlbWVudCA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykgeyByZXR1cm4gYyhub2RlLmJvZHksIHN0LCBcIlN0YXRlbWVudFwiKTsgfTtcbmJhc2UuQnJlYWtTdGF0ZW1lbnQgPSBiYXNlLkNvbnRpbnVlU3RhdGVtZW50ID0gaWdub3JlO1xuYmFzZS5XaXRoU3RhdGVtZW50ID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XG4gIGMobm9kZS5vYmplY3QsIHN0LCBcIkV4cHJlc3Npb25cIik7XG4gIGMobm9kZS5ib2R5LCBzdCwgXCJTdGF0ZW1lbnRcIik7XG59O1xuYmFzZS5Td2l0Y2hTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcbiAgYyhub2RlLmRpc2NyaW1pbmFudCwgc3QsIFwiRXhwcmVzc2lvblwiKTtcbiAgZm9yICh2YXIgaSQxID0gMCwgbGlzdCQxID0gbm9kZS5jYXNlczsgaSQxIDwgbGlzdCQxLmxlbmd0aDsgaSQxICs9IDEpIHtcbiAgICB2YXIgY3MgPSBsaXN0JDFbaSQxXTtcblxuICAgIGlmIChjcy50ZXN0KSB7IGMoY3MudGVzdCwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gY3MuY29uc2VxdWVudDsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpXG4gICAgICB7XG4gICAgICB2YXIgY29ucyA9IGxpc3RbaV07XG5cbiAgICAgIGMoY29ucywgc3QsIFwiU3RhdGVtZW50XCIpO1xuICAgIH1cbiAgfVxufTtcbmJhc2UuU3dpdGNoQ2FzZSA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xuICBpZiAobm9kZS50ZXN0KSB7IGMobm9kZS50ZXN0LCBzdCwgXCJFeHByZXNzaW9uXCIpOyB9XG4gIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gbm9kZS5jb25zZXF1ZW50OyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSlcbiAgICB7XG4gICAgdmFyIGNvbnMgPSBsaXN0W2ldO1xuXG4gICAgYyhjb25zLCBzdCwgXCJTdGF0ZW1lbnRcIik7XG4gIH1cbn07XG5iYXNlLlJldHVyblN0YXRlbWVudCA9IGJhc2UuWWllbGRFeHByZXNzaW9uID0gYmFzZS5Bd2FpdEV4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcbiAgaWYgKG5vZGUuYXJndW1lbnQpIHsgYyhub2RlLmFyZ3VtZW50LCBzdCwgXCJFeHByZXNzaW9uXCIpOyB9XG59O1xuYmFzZS5UaHJvd1N0YXRlbWVudCA9IGJhc2UuU3ByZWFkRWxlbWVudCA9XG4gIGZ1bmN0aW9uIChub2RlLCBzdCwgYykgeyByZXR1cm4gYyhub2RlLmFyZ3VtZW50LCBzdCwgXCJFeHByZXNzaW9uXCIpOyB9O1xuYmFzZS5UcnlTdGF0ZW1lbnQgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcbiAgYyhub2RlLmJsb2NrLCBzdCwgXCJTdGF0ZW1lbnRcIik7XG4gIGlmIChub2RlLmhhbmRsZXIpIHsgYyhub2RlLmhhbmRsZXIsIHN0KTsgfVxuICBpZiAobm9kZS5maW5hbGl6ZXIpIHsgYyhub2RlLmZpbmFsaXplciwgc3QsIFwiU3RhdGVtZW50XCIpOyB9XG59O1xuYmFzZS5DYXRjaENsYXVzZSA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xuICBpZiAobm9kZS5wYXJhbSkgeyBjKG5vZGUucGFyYW0sIHN0LCBcIlBhdHRlcm5cIik7IH1cbiAgYyhub2RlLmJvZHksIHN0LCBcIlN0YXRlbWVudFwiKTtcbn07XG5iYXNlLldoaWxlU3RhdGVtZW50ID0gYmFzZS5Eb1doaWxlU3RhdGVtZW50ID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XG4gIGMobm9kZS50ZXN0LCBzdCwgXCJFeHByZXNzaW9uXCIpO1xuICBjKG5vZGUuYm9keSwgc3QsIFwiU3RhdGVtZW50XCIpO1xufTtcbmJhc2UuRm9yU3RhdGVtZW50ID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XG4gIGlmIChub2RlLmluaXQpIHsgYyhub2RlLmluaXQsIHN0LCBcIkZvckluaXRcIik7IH1cbiAgaWYgKG5vZGUudGVzdCkgeyBjKG5vZGUudGVzdCwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxuICBpZiAobm9kZS51cGRhdGUpIHsgYyhub2RlLnVwZGF0ZSwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxuICBjKG5vZGUuYm9keSwgc3QsIFwiU3RhdGVtZW50XCIpO1xufTtcbmJhc2UuRm9ySW5TdGF0ZW1lbnQgPSBiYXNlLkZvck9mU3RhdGVtZW50ID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XG4gIGMobm9kZS5sZWZ0LCBzdCwgXCJGb3JJbml0XCIpO1xuICBjKG5vZGUucmlnaHQsIHN0LCBcIkV4cHJlc3Npb25cIik7XG4gIGMobm9kZS5ib2R5LCBzdCwgXCJTdGF0ZW1lbnRcIik7XG59O1xuYmFzZS5Gb3JJbml0ID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XG4gIGlmIChub2RlLnR5cGUgPT09IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiKSB7IGMobm9kZSwgc3QpOyB9XG4gIGVsc2UgeyBjKG5vZGUsIHN0LCBcIkV4cHJlc3Npb25cIik7IH1cbn07XG5iYXNlLkRlYnVnZ2VyU3RhdGVtZW50ID0gaWdub3JlO1xuXG5iYXNlLkZ1bmN0aW9uRGVjbGFyYXRpb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHsgcmV0dXJuIGMobm9kZSwgc3QsIFwiRnVuY3Rpb25cIik7IH07XG5iYXNlLlZhcmlhYmxlRGVjbGFyYXRpb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBub2RlLmRlY2xhcmF0aW9uczsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpXG4gICAge1xuICAgIHZhciBkZWNsID0gbGlzdFtpXTtcblxuICAgIGMoZGVjbCwgc3QpO1xuICB9XG59O1xuYmFzZS5WYXJpYWJsZURlY2xhcmF0b3IgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcbiAgYyhub2RlLmlkLCBzdCwgXCJQYXR0ZXJuXCIpO1xuICBpZiAobm9kZS5pbml0KSB7IGMobm9kZS5pbml0LCBzdCwgXCJFeHByZXNzaW9uXCIpOyB9XG59O1xuXG5iYXNlLkZ1bmN0aW9uID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XG4gIGlmIChub2RlLmlkKSB7IGMobm9kZS5pZCwgc3QsIFwiUGF0dGVyblwiKTsgfVxuICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IG5vZGUucGFyYW1zOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSlcbiAgICB7XG4gICAgdmFyIHBhcmFtID0gbGlzdFtpXTtcblxuICAgIGMocGFyYW0sIHN0LCBcIlBhdHRlcm5cIik7XG4gIH1cbiAgYyhub2RlLmJvZHksIHN0LCBub2RlLmV4cHJlc3Npb24gPyBcIkV4cHJlc3Npb25cIiA6IFwiU3RhdGVtZW50XCIpO1xufTtcblxuYmFzZS5QYXR0ZXJuID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XG4gIGlmIChub2RlLnR5cGUgPT09IFwiSWRlbnRpZmllclwiKVxuICAgIHsgYyhub2RlLCBzdCwgXCJWYXJpYWJsZVBhdHRlcm5cIik7IH1cbiAgZWxzZSBpZiAobm9kZS50eXBlID09PSBcIk1lbWJlckV4cHJlc3Npb25cIilcbiAgICB7IGMobm9kZSwgc3QsIFwiTWVtYmVyUGF0dGVyblwiKTsgfVxuICBlbHNlXG4gICAgeyBjKG5vZGUsIHN0KTsgfVxufTtcbmJhc2UuVmFyaWFibGVQYXR0ZXJuID0gaWdub3JlO1xuYmFzZS5NZW1iZXJQYXR0ZXJuID0gc2tpcFRocm91Z2g7XG5iYXNlLlJlc3RFbGVtZW50ID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7IHJldHVybiBjKG5vZGUuYXJndW1lbnQsIHN0LCBcIlBhdHRlcm5cIik7IH07XG5iYXNlLkFycmF5UGF0dGVybiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xuICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IG5vZGUuZWxlbWVudHM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsdCA9IGxpc3RbaV07XG5cbiAgICBpZiAoZWx0KSB7IGMoZWx0LCBzdCwgXCJQYXR0ZXJuXCIpOyB9XG4gIH1cbn07XG5iYXNlLk9iamVjdFBhdHRlcm4gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBub2RlLnByb3BlcnRpZXM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIHByb3AgPSBsaXN0W2ldO1xuXG4gICAgaWYgKHByb3AudHlwZSA9PT0gXCJQcm9wZXJ0eVwiKSB7XG4gICAgICBpZiAocHJvcC5jb21wdXRlZCkgeyBjKHByb3Aua2V5LCBzdCwgXCJFeHByZXNzaW9uXCIpOyB9XG4gICAgICBjKHByb3AudmFsdWUsIHN0LCBcIlBhdHRlcm5cIik7XG4gICAgfSBlbHNlIGlmIChwcm9wLnR5cGUgPT09IFwiUmVzdEVsZW1lbnRcIikge1xuICAgICAgYyhwcm9wLmFyZ3VtZW50LCBzdCwgXCJQYXR0ZXJuXCIpO1xuICAgIH1cbiAgfVxufTtcblxuYmFzZS5FeHByZXNzaW9uID0gc2tpcFRocm91Z2g7XG5iYXNlLlRoaXNFeHByZXNzaW9uID0gYmFzZS5TdXBlciA9IGJhc2UuTWV0YVByb3BlcnR5ID0gaWdub3JlO1xuYmFzZS5BcnJheUV4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBub2RlLmVsZW1lbnRzOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbHQgPSBsaXN0W2ldO1xuXG4gICAgaWYgKGVsdCkgeyBjKGVsdCwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxuICB9XG59O1xuYmFzZS5PYmplY3RFeHByZXNzaW9uID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gbm9kZS5wcm9wZXJ0aWVzOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSlcbiAgICB7XG4gICAgdmFyIHByb3AgPSBsaXN0W2ldO1xuXG4gICAgYyhwcm9wLCBzdCk7XG4gIH1cbn07XG5iYXNlLkZ1bmN0aW9uRXhwcmVzc2lvbiA9IGJhc2UuQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24gPSBiYXNlLkZ1bmN0aW9uRGVjbGFyYXRpb247XG5iYXNlLlNlcXVlbmNlRXhwcmVzc2lvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xuICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IG5vZGUuZXhwcmVzc2lvbnM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKVxuICAgIHtcbiAgICB2YXIgZXhwciA9IGxpc3RbaV07XG5cbiAgICBjKGV4cHIsIHN0LCBcIkV4cHJlc3Npb25cIik7XG4gIH1cbn07XG5iYXNlLlRlbXBsYXRlTGl0ZXJhbCA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xuICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IG5vZGUucXVhc2lzOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSlcbiAgICB7XG4gICAgdmFyIHF1YXNpID0gbGlzdFtpXTtcblxuICAgIGMocXVhc2ksIHN0KTtcbiAgfVxuXG4gIGZvciAodmFyIGkkMSA9IDAsIGxpc3QkMSA9IG5vZGUuZXhwcmVzc2lvbnM7IGkkMSA8IGxpc3QkMS5sZW5ndGg7IGkkMSArPSAxKVxuICAgIHtcbiAgICB2YXIgZXhwciA9IGxpc3QkMVtpJDFdO1xuXG4gICAgYyhleHByLCBzdCwgXCJFeHByZXNzaW9uXCIpO1xuICB9XG59O1xuYmFzZS5UZW1wbGF0ZUVsZW1lbnQgPSBpZ25vcmU7XG5iYXNlLlVuYXJ5RXhwcmVzc2lvbiA9IGJhc2UuVXBkYXRlRXhwcmVzc2lvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xuICBjKG5vZGUuYXJndW1lbnQsIHN0LCBcIkV4cHJlc3Npb25cIik7XG59O1xuYmFzZS5CaW5hcnlFeHByZXNzaW9uID0gYmFzZS5Mb2dpY2FsRXhwcmVzc2lvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xuICBjKG5vZGUubGVmdCwgc3QsIFwiRXhwcmVzc2lvblwiKTtcbiAgYyhub2RlLnJpZ2h0LCBzdCwgXCJFeHByZXNzaW9uXCIpO1xufTtcbmJhc2UuQXNzaWdubWVudEV4cHJlc3Npb24gPSBiYXNlLkFzc2lnbm1lbnRQYXR0ZXJuID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XG4gIGMobm9kZS5sZWZ0LCBzdCwgXCJQYXR0ZXJuXCIpO1xuICBjKG5vZGUucmlnaHQsIHN0LCBcIkV4cHJlc3Npb25cIik7XG59O1xuYmFzZS5Db25kaXRpb25hbEV4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcbiAgYyhub2RlLnRlc3QsIHN0LCBcIkV4cHJlc3Npb25cIik7XG4gIGMobm9kZS5jb25zZXF1ZW50LCBzdCwgXCJFeHByZXNzaW9uXCIpO1xuICBjKG5vZGUuYWx0ZXJuYXRlLCBzdCwgXCJFeHByZXNzaW9uXCIpO1xufTtcbmJhc2UuTmV3RXhwcmVzc2lvbiA9IGJhc2UuQ2FsbEV4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcbiAgYyhub2RlLmNhbGxlZSwgc3QsIFwiRXhwcmVzc2lvblwiKTtcbiAgaWYgKG5vZGUuYXJndW1lbnRzKVxuICAgIHsgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBub2RlLmFyZ3VtZW50czsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpXG4gICAgICB7XG4gICAgICAgIHZhciBhcmcgPSBsaXN0W2ldO1xuXG4gICAgICAgIGMoYXJnLCBzdCwgXCJFeHByZXNzaW9uXCIpO1xuICAgICAgfSB9XG59O1xuYmFzZS5NZW1iZXJFeHByZXNzaW9uID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XG4gIGMobm9kZS5vYmplY3QsIHN0LCBcIkV4cHJlc3Npb25cIik7XG4gIGlmIChub2RlLmNvbXB1dGVkKSB7IGMobm9kZS5wcm9wZXJ0eSwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxufTtcbmJhc2UuRXhwb3J0TmFtZWREZWNsYXJhdGlvbiA9IGJhc2UuRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XG4gIGlmIChub2RlLmRlY2xhcmF0aW9uKVxuICAgIHsgYyhub2RlLmRlY2xhcmF0aW9uLCBzdCwgbm9kZS50eXBlID09PSBcIkV4cG9ydE5hbWVkRGVjbGFyYXRpb25cIiB8fCBub2RlLmRlY2xhcmF0aW9uLmlkID8gXCJTdGF0ZW1lbnRcIiA6IFwiRXhwcmVzc2lvblwiKTsgfVxuICBpZiAobm9kZS5zb3VyY2UpIHsgYyhub2RlLnNvdXJjZSwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxufTtcbmJhc2UuRXhwb3J0QWxsRGVjbGFyYXRpb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcbiAgaWYgKG5vZGUuZXhwb3J0ZWQpXG4gICAgeyBjKG5vZGUuZXhwb3J0ZWQsIHN0KTsgfVxuICBjKG5vZGUuc291cmNlLCBzdCwgXCJFeHByZXNzaW9uXCIpO1xufTtcbmJhc2UuSW1wb3J0RGVjbGFyYXRpb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBub2RlLnNwZWNpZmllcnM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKVxuICAgIHtcbiAgICB2YXIgc3BlYyA9IGxpc3RbaV07XG5cbiAgICBjKHNwZWMsIHN0KTtcbiAgfVxuICBjKG5vZGUuc291cmNlLCBzdCwgXCJFeHByZXNzaW9uXCIpO1xufTtcbmJhc2UuSW1wb3J0RXhwcmVzc2lvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xuICBjKG5vZGUuc291cmNlLCBzdCwgXCJFeHByZXNzaW9uXCIpO1xufTtcbmJhc2UuSW1wb3J0U3BlY2lmaWVyID0gYmFzZS5JbXBvcnREZWZhdWx0U3BlY2lmaWVyID0gYmFzZS5JbXBvcnROYW1lc3BhY2VTcGVjaWZpZXIgPSBiYXNlLklkZW50aWZpZXIgPSBiYXNlLlByaXZhdGVJZGVudGlmaWVyID0gYmFzZS5MaXRlcmFsID0gaWdub3JlO1xuXG5iYXNlLlRhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvbiA9IGZ1bmN0aW9uIChub2RlLCBzdCwgYykge1xuICBjKG5vZGUudGFnLCBzdCwgXCJFeHByZXNzaW9uXCIpO1xuICBjKG5vZGUucXVhc2ksIHN0LCBcIkV4cHJlc3Npb25cIik7XG59O1xuYmFzZS5DbGFzc0RlY2xhcmF0aW9uID0gYmFzZS5DbGFzc0V4cHJlc3Npb24gPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHsgcmV0dXJuIGMobm9kZSwgc3QsIFwiQ2xhc3NcIik7IH07XG5iYXNlLkNsYXNzID0gZnVuY3Rpb24gKG5vZGUsIHN0LCBjKSB7XG4gIGlmIChub2RlLmlkKSB7IGMobm9kZS5pZCwgc3QsIFwiUGF0dGVyblwiKTsgfVxuICBpZiAobm9kZS5zdXBlckNsYXNzKSB7IGMobm9kZS5zdXBlckNsYXNzLCBzdCwgXCJFeHByZXNzaW9uXCIpOyB9XG4gIGMobm9kZS5ib2R5LCBzdCk7XG59O1xuYmFzZS5DbGFzc0JvZHkgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBub2RlLmJvZHk7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKVxuICAgIHtcbiAgICB2YXIgZWx0ID0gbGlzdFtpXTtcblxuICAgIGMoZWx0LCBzdCk7XG4gIH1cbn07XG5iYXNlLk1ldGhvZERlZmluaXRpb24gPSBiYXNlLlByb3BlcnR5RGVmaW5pdGlvbiA9IGJhc2UuUHJvcGVydHkgPSBmdW5jdGlvbiAobm9kZSwgc3QsIGMpIHtcbiAgaWYgKG5vZGUuY29tcHV0ZWQpIHsgYyhub2RlLmtleSwgc3QsIFwiRXhwcmVzc2lvblwiKTsgfVxuICBpZiAobm9kZS52YWx1ZSkgeyBjKG5vZGUudmFsdWUsIHN0LCBcIkV4cHJlc3Npb25cIik7IH1cbn07XG5cbmV4cG9ydCB7IGFuY2VzdG9yLCBiYXNlLCBmaW5kTm9kZUFmdGVyLCBmaW5kTm9kZUFyb3VuZCwgZmluZE5vZGVBdCwgZmluZE5vZGVCZWZvcmUsIGZ1bGwsIGZ1bGxBbmNlc3RvciwgbWFrZSwgcmVjdXJzaXZlLCBzaW1wbGUgfTtcbiJdLAogICJtYXBwaW5ncyI6ICJBQWtCQSxTQUFTLE9BQU8sTUFBTSxVQUFVLGFBQWEsT0FBTyxVQUFVO0FBQzVELE1BQUksQ0FBQyxhQUFhO0FBQUUsa0JB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O0FBQUUsTUFBRSxLQUFLLFFBQVEsSUFBSSxZQUFZO0FBQUEsRUFBRztBQUN2RDtBQUNBLEtBQUssdUJBQXVCLFNBQVUsTUFBTSxJQUFJLEdBQUc7QUFDakQsTUFBSSxLQUFLLFVBQ1A7QUFBRSxNQUFFLEtBQUssVUFBVSxFQUFFO0FBQUEsRUFBRztBQUMxQixJQUFFLEtBQUssUUFBUSxJQUFJLFlBQVk7QUFDakM7QUFDQSxLQUFLLG9CQUFvQixTQUFVLE1BQU0sSUFBSSxHQUFHO0FBQzlDLFdBQVMsSUFBSSxHQUFHLE9BQU8sS0FBSyxZQUFZLElBQUksS0FBSyxRQUFRLEtBQUssR0FDNUQ7QUFDQSxRQUFJLE9BQU8sS0FBSyxDQUFDO0FBRWpCLE1BQUUsTUFBTSxFQUFFO0FBQUEsRUFDWjtBQUNBLElBQUUsS0FBSyxRQUFRLElBQUksWUFBWTtBQUNqQztBQUNBLEtBQUssbUJBQW1CLFNBQVUsTUFBTSxJQUFJLEdBQUc7QUFDN0MsSUFBRSxLQUFLLFFBQVEsSUFBSSxZQUFZO0FBQ2pDO0FBQ0EsS0FBSyxrQkFBa0IsS0FBSyx5QkFBeUIsS0FBSywyQkFBMkIsS0FBSyxhQUFhLEtBQUssb0JBQW9CLEtBQUssVUFBVTtBQUUvSSxLQUFLLDJCQUEyQixTQUFVLE1BQU0sSUFBSSxHQUFHO0FBQ3JELElBQUUsS0FBSyxLQUFLLElBQUksWUFBWTtBQUM1QixJQUFFLEtBQUssT0FBTyxJQUFJLFlBQVk7QUFDaEM7QUFDQSxLQUFLLG1CQUFtQixLQUFLLGtCQUFrQixTQUFVLE1BQU0sSUFBSSxHQUFHO0FBQUUsU0FBTyxFQUFFLE1BQU0sSUFBSSxPQUFPO0FBQUc7QUFDckcsS0FBSyxRQUFRLFNBQVUsTUFBTSxJQUFJLEdBQUc7QUFDbEMsTUFBSSxLQUFLLElBQUk7QUFBRSxNQUFFLEtBQUssSUFBSSxJQUFJLFNBQVM7QUFBQSxFQUFHO0FBQzFDLE1BQUksS0FBSyxZQUFZO0FBQUUsTUFBRSxLQUFLLFlBQVksSUFBSSxZQUFZO0FBQUEsRUFBRztBQUM3RCxJQUFFLEtBQUssTUFBTSxFQUFFO0FBQ2pCO0FBQ0EsS0FBSyxZQUFZLFNBQVUsTUFBTSxJQUFJLEdBQUc7QUFDdEMsV0FBUyxJQUFJLEdBQUcsT0FBTyxLQUFLLE1BQU0sSUFBSSxLQUFLLFFBQVEsS0FBSyxHQUN0RDtBQUNBLFFBQUksTUFBTSxLQUFLLENBQUM7QUFFaEIsTUFBRSxLQUFLLEVBQUU7QUFBQSxFQUNYO0FBQ0Y7QUFDQSxLQUFLLG1CQUFtQixLQUFLLHFCQUFxQixLQUFLLFdBQVcsU0FBVSxNQUFNLElBQUksR0FBRztBQUN2RixNQUFJLEtBQUssVUFBVTtBQUFFLE1BQUUsS0FBSyxLQUFLLElBQUksWUFBWTtBQUFBLEVBQUc7QUFDcEQsTUFBSSxLQUFLLE9BQU87QUFBRSxNQUFFLEtBQUssT0FBTyxJQUFJLFlBQVk7QUFBQSxFQUFHO0FBQ3JEOyIsCiAgIm5hbWVzIjogWyJub2RlIiwgIm92ZXJyaWRlIiwgIkZvdW5kIl0KfQo=
