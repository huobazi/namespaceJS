usingNamespace = window.usingNamespace || function(ns, callback, scope) {
	if (scope) {
		if (typeof (scope) === "string") {
			var scopeObject = usingNamespace(scope);
		} else {
			var scopeObject = scope;
		}
	}

	var __namespace = scopeObject || window || {};
	var nsp = ns.split(".");
	for (var i = 0; i < nsp.length; i++) {
		var temp = nsp[i];
		if ((typeof __namespace[temp] !== "object" || __namespace[temp] === null)
		&& typeof __namespace[temp] !== "function") {
			__namespace[temp] = {};
		}
		__namespace = __namespace[temp];
	}

	if (callback) {
		callback.call(__namespace);
	}

	return __namespace;
};
