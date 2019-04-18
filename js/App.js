/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "9173ab5b8c43c775ddf4";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/apps/sources/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/entry-dev.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _redux_reducers_providers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./redux/reducers/providers */ "./src/redux/reducers/providers.js");
/* harmony import */ var _redux_reducers_listing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./redux/reducers/listing */ "./src/redux/reducers/listing.js");
/* harmony import */ var _redux_reducers_topology__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./redux/reducers/topology */ "./src/redux/reducers/topology.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Routes */ "./src/Routes.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_17__);


















var registry;

var App =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component);

  function App(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('getStore()');
      console.log(App.getRegistry().getStore());
      App.getRegistry().register({
        providers: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["applyReducerHash"])(_redux_reducers_providers__WEBPACK_IMPORTED_MODULE_13__["default"], _redux_reducers_providers__WEBPACK_IMPORTED_MODULE_13__["defaultProvidersState"])
      });
      App.getRegistry().register({
        listing: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["applyReducerHash"])(_redux_reducers_listing__WEBPACK_IMPORTED_MODULE_14__["default"], _redux_reducers_listing__WEBPACK_IMPORTED_MODULE_14__["defaultListingState"])
      });
      App.getRegistry().register({
        topology: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["applyReducerHash"])(_redux_reducers_topology__WEBPACK_IMPORTED_MODULE_15__["default"], {})
      });
      App.getRegistry().register({
        notifications: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_10__["notifications"]
      });
      insights.chrome.init();

      try {
        var pathName = window.location.pathname.split('/');
        var appName = pathName[0] === 'beta' ? pathName[3] : pathName[2];
        insights.chrome.identifyApp(appName);
      } catch (_exception) {
        this.appNav = null;
        console.warn('Failed to initialize chrome navigation.');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.appNav) {
        this.appNav();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_10__["NotificationsPortal"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_16__["Routes"], {
        childProps: this.props
      }));
    }
  }], [{
    key: "getRegistry",
    value: function getRegistry() {
      if (!registry) {
        registry = new _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["ReducerRegistry"]({}, [redux_thunk__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_10__["notificationsMiddleware"])({
          errorTitleKey: 'error',
          errorDescriptionKey: 'error'
        }), redux_logger__WEBPACK_IMPORTED_MODULE_11___default.a]);
      }

      return registry;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

App.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
/**
 * withRouter: https://reacttraining.com/react-router/web/api/withRouter
 * connect: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *          https://reactjs.org/docs/higher-order-components.html
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])()(App)));

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/PresentationalComponents/DetailView/DetailView.js":
/*!***************************************************************!*\
  !*** ./src/PresentationalComponents/DetailView/DetailView.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__);








 // import { TagView } from '@manageiq/react-ui-components/dist/tagging-pf4';

var DetailView =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DetailView, _Component);

  function DetailView() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DetailView);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DetailView).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DetailView, [{
    key: "render",
    value: function render() {
      var sourceId = this.props.sourceId;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
        sm: 6,
        md: 4,
        lg: 4,
        xl: 4
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["Pie"], {
        withLegend: true,
        identifier: "donut-".concat(sourceId),
        values: [['Red Hat', 100], ['Google', 10]]
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
        sm: 6,
        md: 4,
        lg: 4,
        xl: 4
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dl", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dt", null, "IP Address"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dd", null, "192.168.2.1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dt", null, "Location"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dd", null, "Brno"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dt", null, "Status"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dd", null, "Ready for Fredie"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dt", null, "Licence"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dd", null, "Apache Licence 2.0"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
        sm: 6,
        md: 4,
        lg: 4,
        xl: 3
      }));
    }
  }]);

  return DetailView;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

DetailView.propTypes = {
  sourceId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DetailView);

/***/ }),

/***/ "./src/PresentationalComponents/ListingView/ListingView.js":
/*!*****************************************************************!*\
  !*** ./src/PresentationalComponents/ListingView/ListingView.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_actions_listing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/listing */ "./src/redux/actions/listing.js");














/* FIXME */

/*eslint react/prop-types: 1*/

var ListingView =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ListingView, _Component);

  function ListingView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ListingView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ListingView).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "state", {
      itemsPerPage: 10,
      onPage: 1,
      sortBy: {}
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "componentDidMount", function () {
      return _this.props.loadListingData(_this.props.viewDefinition, _this.props.sourceId);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onSort", function (_event, key, direction) {
      _this.props.sortListingData(_this.filteredColumns[key].value, direction);

      _this.setState({
        sortBy: {
          index: key,
          direction: direction
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "mapDataToRows", function (data) {
      return data.map(function (row) {
        return {
          id: row.id,
          cells: _this.filteredColumns.map(function (col) {
            return row[col.value] || '';
          })
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onSetPage", function (number) {
      _this.setState({
        onPage: number
      });

      _this.props.pageAndSize(number, _this.state.itemsPerPage);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onPerPageSelect", function (count) {
      _this.setState({
        onPage: 1,
        itemsPerPage: count
      });

      _this.props.pageAndSize(1, count);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      return _this.props.loaded ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        sortBy: _this.state.sortBy,
        header: _this.headers,
        onSort: _this.onSort,
        rows: _this.mapDataToRows(_this.props.listingRows),
        footer: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["Pagination"], {
          itemsPerPage: _this.state.itemsPerPage,
          page: _this.state.onPage,
          direction: "up",
          onSetPage: _this.onSetPage,
          onPerPageSelect: _this.onPerPageSelect,
          numberOfItems: _this.props.rawRows ? _this.props.rawRows.length : 0
        })
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "Loading data...");
    });

    _this.filteredColumns = lodash_filter__WEBPACK_IMPORTED_MODULE_12___default()(_this.props.viewDefinition.columns, function (c) {
      return c.title;
    });
    _this.headers = _this.filteredColumns.map(function (col) {
      return col.title;
    });
    return _this;
  }

  return ListingView;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(ListingView, "propTypes", {
  sourceId: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,
  viewDefinition: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any.isRequired
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])({
    loadListingData: _redux_actions_listing__WEBPACK_IMPORTED_MODULE_13__["loadListingData"],
    sortListingData: _redux_actions_listing__WEBPACK_IMPORTED_MODULE_13__["sortListingData"],
    pageAndSize: _redux_actions_listing__WEBPACK_IMPORTED_MODULE_13__["pageAndSize"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$listing = _ref.listing,
      _ref$listing$loaded = _ref$listing.loaded,
      loaded = _ref$listing$loaded === void 0 ? false : _ref$listing$loaded,
      _ref$listing$listingR = _ref$listing.listingRows,
      listingRows = _ref$listing$listingR === void 0 ? [] : _ref$listing$listingR,
      _ref$listing$rawRows = _ref$listing.rawRows,
      rawRows = _ref$listing$rawRows === void 0 ? [] : _ref$listing$rawRows;
  return {
    loaded: loaded,
    listingRows: listingRows,
    rawRows: rawRows
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(ListingView)));

/***/ }),

/***/ "./src/PresentationalComponents/SourcesListView/SourcesFilter.js":
/*!***********************************************************************!*\
  !*** ./src/PresentationalComponents/SourcesListView/SourcesFilter.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__);










var SourcesFilter =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SourcesFilter, _Component);

  function SourcesFilter(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SourcesFilter);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(SourcesFilter).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onFilterButtonClick", function (filterValue, column) {
      console.log('filter click', column.value, filterValue);

      _this.props.onFilter(column.value, filterValue);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["SimpleTableFilter"], {
        options: {
          title: 'Filter By',
          items: _this.props.columns
        },
        onButtonClick: _this.onFilterButtonClick
      });
    });

    return _this;
  }

  return SourcesFilter;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

SourcesFilter.propTypes = {
  columns: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
  })).isRequired,
  onFilter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SourcesFilter);

/***/ }),

/***/ "./src/PresentationalComponents/SourcesListView/SourcesListView.js":
/*!*************************************************************************!*\
  !*** ./src/PresentationalComponents/SourcesListView/SourcesListView.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var _redux_actions_providers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../redux/actions/providers */ "./src/redux/actions/providers.js");
/* harmony import */ var _PresentationalComponents_DetailView_DetailView__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../PresentationalComponents/DetailView/DetailView */ "./src/PresentationalComponents/DetailView/DetailView.js");
/* harmony import */ var _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../views/sourcesViewDefinition */ "./src/views/sourcesViewDefinition.js");
/* harmony import */ var _views_viewDefinitions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../views/viewDefinitions */ "./src/views/viewDefinitions.js");

























var RowLoader = function RowLoader(props) {
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_19__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({
    height: 20,
    width: 480
  }, props), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "30",
    y: "0",
    rx: "3",
    ry: "3",
    width: "250",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "300",
    y: "0",
    rx: "3",
    ry: "3",
    width: "70",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "385",
    y: "0",
    rx: "3",
    ry: "3",
    width: "95",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "50",
    y: "12",
    rx: "3",
    ry: "3",
    width: "80",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "150",
    y: "12",
    rx: "3",
    ry: "3",
    width: "200",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "360",
    y: "12",
    rx: "3",
    ry: "3",
    width: "120",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "20",
    height: "20"
  }));
};

var SourcesListView =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SourcesListView, _React$Component);

  function SourcesListView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SourcesListView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(SourcesListView).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "componentDidMount", function () {
      return _this.props.loadEntities();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "onItemSelect", function (_event, key, checked) {
      return _this.props.selectEntity(key, checked);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "onSort", function (_event, key, direction) {
      // -1 for the expander column
      _this.props.sortEntities(_this.filteredColumns[key - 1].value, direction);

      _this.setState({
        sortBy: {
          index: key,
          direction: direction
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "onExpandClick", function (_event, _row, rowKey) {
      return _this.props.expandEntity(rowKey, true);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "onCollapse", function (_event, i, isOpen) {
      return _this.props.expandEntity(_this.sourceIndexToId(i), isOpen);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "sourceIndexToId", function (i) {
      return _this.props.entities[i / 2].id;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "renderActions", function () {
      return [{
        title: 'Show Details',
        onClick: function onClick(_ev, i) {
          return _this.props.history.push("/".concat(_this.sourceIndexToId(i)));
        }
      }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_this.renderViewLinks()));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "renderViewLinks", function () {
      return lodash_reduce__WEBPACK_IMPORTED_MODULE_18___default()(Object.keys(_views_viewDefinitions__WEBPACK_IMPORTED_MODULE_23__["viewDefinitions"]), function (acc, viewName) {
        return acc.push({
          title: "Show ".concat(_views_viewDefinitions__WEBPACK_IMPORTED_MODULE_23__["viewDefinitions"][viewName].displayName),
          onClick: function onClick(_ev, i) {
            return _this.props.history.push("/".concat(_this.sourceIndexToId(i), "/").concat(viewName));
          }
        }) && acc;
      }, []);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "render", function () {
      var _this$props = _this.props,
          entities = _this$props.entities,
          loaded = _this$props.loaded;
      var rowData = lodash_flatten__WEBPACK_IMPORTED_MODULE_16___default()(entities.map(function (item, index) {
        return [_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
          isOpen: !!item.expanded,
          cells: _this.filteredColumns.map(function (col) {
            return item[col.value] || '';
          }).concat({
            title: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
              key: "bar",
              to: "/".concat(item.id, "/topology")
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_14__["TopologyIcon"], null))
          })
        }), {
          id: item.id + '_detail',
          parent: index,
          cells: [{
            title: item.expanded ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_DetailView_DetailView__WEBPACK_IMPORTED_MODULE_21__["default"], {
              sourceId: item.id
            }) : 'collapsed content',
            colSpan: 6
          }]
        }];
      })); // console.log(rowData);

      if (loaded) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__["Table"], {
          "aria-label": "List of Sources",
          onCollapse: _this.onCollapse,
          onSort: _this.onSort,
          sortBy: _this.state.sortBy,
          rows: rowData,
          cells: _this.headers,
          actions: _this.renderActions()
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__["TableHeader"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__["TableBody"], null));
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("table", {
        className: "sources-placeholder-table pf-m-compact ins-entity-table"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(RowLoader, null))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(RowLoader, null)))));
    });

    _this.filteredColumns = lodash_filter__WEBPACK_IMPORTED_MODULE_17___default()(_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_22__["sourcesViewDefinition"].columns, function (c) {
      return c.title;
    });
    _this.headers = _this.filteredColumns.map(function (col) {
      return {
        title: col.title,
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__["sortable"]]
      };
    }).concat('');
    _this.state = {
      sortBy: {}
    };
    return _this;
  }

  return SourcesListView;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

;
SourcesListView.propTypes = {
  columns: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
  })).isRequired,
  loadEntities: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  selectEntity: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  expandEntity: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  sortEntities: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  entities: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any),
  numberOfEntities: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number.isRequired,
  loaded: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired
};
SourcesListView.defaultProps = {
  entities: [],
  numberOfEntities: 0,
  loaded: false
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])({
    loadEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_20__["loadEntities"],
    selectEntity: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_20__["selectEntity"],
    expandEntity: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_20__["expandEntity"],
    sortEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_20__["sortEntities"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$providers = _ref.providers,
      entities = _ref$providers.entities,
      numberOfEntities = _ref$providers.numberOfEntities,
      loaded = _ref$providers.loaded;
  return {
    entities: entities,
    numberOfEntities: numberOfEntities,
    loaded: loaded
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(SourcesListView)));

/***/ }),

/***/ "./src/PresentationalComponents/TopologyView/NodeDetails.js":
/*!******************************************************************!*\
  !*** ./src/PresentationalComponents/TopologyView/NodeDetails.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);











var NodeDetails =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NodeDetails, _Component);

  function NodeDetails(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NodeDetails);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NodeDetails).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NodeDetails, [{
    key: "render",
    value: function render() {
      //{id: 3, title: "Yang", size: 24, fonticon: "fa fa-cloud", depth: 3}
      if (this.props.node === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], null, "Select a node"));
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], null, "Details go ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, "here")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dl", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dt", null, "ID"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dd", null, this.props.node.id), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dt", null, "Title"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dd", null, this.props.node.title))));
    }
  }]);

  return NodeDetails;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(NodeDetails, "propTypes", {
  node: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
  })).isRequired
});

var mapStateToProps = function mapStateToProps(_ref) {
  var node = _ref.topology.activeNode;
  return {
    node: node
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(NodeDetails));

/***/ }),

/***/ "./src/PresentationalComponents/TopologyView/TopologyView.js":
/*!*******************************************************************!*\
  !*** ./src/PresentationalComponents/TopologyView/TopologyView.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_topology__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/topology */ "./src/redux/actions/topology.js");
/* harmony import */ var _NodeDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NodeDetails */ "./src/PresentationalComponents/TopologyView/NodeDetails.js");








 // import { TopologyCanvas } from '@manageiq/react-ui-components/dist/topology';
// import '@manageiq/react-ui-components/dist/topology.css';






var TopologyView =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(TopologyView, _Component);

  function TopologyView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TopologyView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(TopologyView).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "handleNodeClick", function (node) {
      console.log('handleNodeClick', node);

      _this.props.nodeClick(node);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "componentDidMount", function () {
      _this.props.loadTopology();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      //const { nodes, edges } = this.props;
      var nodes = _this.props.nodes;

      if (nodes.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "Loading");
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Split"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["SplitItem"], {
        isMain: true
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["SplitItem"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_NodeDetails__WEBPACK_IMPORTED_MODULE_12__["default"], null)));
    });

    return _this;
  }

  return TopologyView;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(TopologyView, "propTypes", {
  nodes: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any).isRequired,
  edges: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any).isRequired,
  loadTopology: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  nodeClick: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    loadTopology: _redux_actions_topology__WEBPACK_IMPORTED_MODULE_11__["loadTopology"],
    nodeClick: _redux_actions_topology__WEBPACK_IMPORTED_MODULE_11__["nodeClick"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$topology = _ref.topology,
      _ref$topology$nodes = _ref$topology.nodes,
      nodes = _ref$topology$nodes === void 0 ? [] : _ref$topology$nodes,
      _ref$topology$edges = _ref$topology.edges,
      edges = _ref$topology$edges === void 0 ? [] : _ref$topology$edges;
  return {
    nodes: nodes,
    edges: edges
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(TopologyView));

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: paths, Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paths", function() { return paths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utilities/asyncComponent */ "./src/Utilities/asyncComponent.js");
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/some */ "./node_modules/lodash/some.js");
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_some__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _views_viewDefinitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/viewDefinitions */ "./src/views/viewDefinitions.js");









/**
 * Aysnc imports of components
 *
 * https://webpack.js.org/guides/code-splitting/
 * https://reactjs.org/docs/code-splitting.html
 *
 * pros:
 *      1) code splitting
 *      2) can be used in server-side rendering
 * cons:
 *      1) nameing chunk names adds unnecessary docs to code,
 *         see the difference with DashboardMap and InventoryDeployments.
 *
 */

var ProviderPage = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./SmartComponents/ProviderPage/ProviderPage */ "./src/SmartComponents/ProviderPage/ProviderPage.js"));
  });
});
var ListingPage = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./SmartComponents/ListingPage/ListingPage */ "./src/SmartComponents/ListingPage/ListingPage.js"));
  });
});
var DetailPage = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./SmartComponents/DetailPage/DetailPage */ "./src/SmartComponents/DetailPage/DetailPage.js"));
  });
});
var TopologyPage = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./SmartComponents/TopologyPage/TopologyPage */ "./src/SmartComponents/TopologyPage/TopologyPage.js"));
  });
});
var SourcesPage = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./pages/SourcesPage */ "./src/pages/SourcesPage.js"));
  });
});
var paths = {
  sources: '/',
  sourcesNew: '/new',
  sourcesEdit: '/edit/:id',
  sourcesRemove: '/remove/:id',
  providers: '/providers',
  providerNew: '/providers/new',
  providerDetail: '/:id',
  topology: '/:id/topology'
};

var InsightsRoute = function InsightsRoute(_ref) {
  var rootClass = _ref.rootClass,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["rootClass"]);

  var root = document.getElementById('root');
  root.removeAttribute('class');
  root.classList.add("page__".concat(rootClass), 'pf-c-page__main', 'pf-l-page__main');
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], rest);
};

InsightsRoute.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  rootClass: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};

var dynamicRoutes = function dynamicRoutes(viewDefinitions) {
  return lodash_reduce__WEBPACK_IMPORTED_MODULE_7___default()(Object.keys(viewDefinitions), function (acc, viewName) {
    return acc.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
      path: "/:id/".concat(viewName),
      key: viewName,
      component: ListingPage,
      rootClass: "listing"
    })) && acc;
  }, []);
};
/**
 * the Switch component changes routes depending on the path.
 *
 * Route properties:
 *      exact - path must match exactly,
 *      path - https://prod.foo.redhat.com:1337/insights/advisor/rules
 *      component - component to be rendered when a route has been chosen.
 */


var Routes = function Routes(props) {
  var path = props.childProps.location.pathname;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    exact: true,
    path: paths.sources,
    component: SourcesPage,
    rootClass: "providers"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    exact: true,
    path: paths.sourcesNew,
    component: SourcesPage,
    rootClass: "providers"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.sourcesEdit,
    component: SourcesPage,
    rootClass: "providers"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.sourcesRemove,
    component: SourcesPage,
    rootClass: "providers"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    exact: true,
    path: paths.providers,
    component: ProviderPage,
    rootClass: "providers"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    exact: true,
    path: paths.providerNew,
    component: ProviderPage,
    rootClass: "providers"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.topology,
    component: TopologyPage,
    rootClass: "provider"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    exact: true,
    path: paths.providerDetail,
    component: DetailPage,
    rootClass: "provider"
  }), dynamicRoutes(_views_viewDefinitions__WEBPACK_IMPORTED_MODULE_8__["viewDefinitions"]), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    render: function render() {
      return lodash_some__WEBPACK_IMPORTED_MODULE_6___default()(paths, function (p) {
        return p === path;
      }) ? null : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: paths.providers
      });
    }
  }));
};
Routes.propTypes = {
  childProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired
};

/***/ }),

/***/ "./src/SmartComponents/DetailPage/DetailPage.js":
/*!******************************************************!*\
  !*** ./src/SmartComponents/DetailPage/DetailPage.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _PresentationalComponents_DetailView_DetailView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../PresentationalComponents/DetailView/DetailView */ "./src/PresentationalComponents/DetailView/DetailView.js");












var DetailPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(DetailPage, _Component);

  function DetailPage() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DetailPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(DetailPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Section"], {
        type: "content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "Details of a Provider"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PresentationalComponents_DetailView_DetailView__WEBPACK_IMPORTED_MODULE_10__["default"], {
        sourceId: parseInt(_this.props.match.params.id, 10)
      })));
    });

    return _this;
  }

  return DetailPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(DetailPage, "propTypes", {
  match: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
});

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(DetailPage));

/***/ }),

/***/ "./src/SmartComponents/ListingPage/FilterDropdown.js":
/*!***********************************************************!*\
  !*** ./src/SmartComponents/ListingPage/FilterDropdown.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterDropdown; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");









var FilterDropdown =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(FilterDropdown, _Component);

  function FilterDropdown(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FilterDropdown);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(FilterDropdown).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onToggle", function (isOpen) {
      return _this.setState({
        isOpen: isOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onSelect", function (_event) {
      return _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "dropdownItems", function () {
      return [react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], null, "Link"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        component: "button"
      }, "Action"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        isDisabled: true
      }, "Disabled Link"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        isDisabled: true,
        component: "button"
      }, "Disabled Action"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownSeparator"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], null, "Separated Link"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        component: "button"
      }, "Separated Action")];
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
        onToggle: _this.onToggle,
        onSelect: _this.onSelect,
        toggle: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
          onToggle: _this.onToggle
        }, "All"),
        isOpen: _this.state.isOpen,
        dropdownItems: _this.dropdownItems()
      });
    });

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  return FilterDropdown;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/SmartComponents/ListingPage/ListingPage.js":
/*!********************************************************!*\
  !*** ./src/SmartComponents/ListingPage/ListingPage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _FilterDropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FilterDropdown */ "./src/SmartComponents/ListingPage/FilterDropdown.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _PresentationalComponents_ListingView_ListingView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../PresentationalComponents/ListingView/ListingView */ "./src/PresentationalComponents/ListingView/ListingView.js");
/* harmony import */ var _SimpleKebab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SimpleKebab */ "./src/SmartComponents/ListingPage/SimpleKebab.js");
/* harmony import */ var _views_viewDefinitions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../views/viewDefinitions */ "./src/views/viewDefinitions.js");
















var ListingPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ListingPage, _Component);

  function ListingPage(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ListingPage);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ListingPage).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onNavigate", function (_event, navigate, _index) {
      _this.props.history.push(navigate);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "loadDefinition", function () {
      return _views_viewDefinitions__WEBPACK_IMPORTED_MODULE_14__["viewDefinitions"][_this.props.location.pathname.split('/').pop()];
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "parseSourceId", function () {
      var parts = _this.props.location.pathname.split('/');

      return parseInt(parts[parts.length - 2], 10);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "locationToState", function () {
      return {
        viewDefinition: _this.loadDefinition(),
        sourceId: _this.parseSourceId()
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "componentDidUpdate", function (prevProps, _prevState) {
      if (_this.props.location.pathname !== prevProps.location.pathname) {
        _this.setState(_this.locationToState());
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["PageHeaderTitle"], {
        title: "Providers"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["Breadcrumbs"], {
        items: [{
          title: 'Sources',
          navigate: '/'
        }],
        current: _this.state.viewDefinition.displayName,
        onNavigate: _this.onNavigate
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["Section"], {
        type: "content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pf-c-input-group"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_FilterDropdown__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextInput"], {
        id: "filter_text",
        value: ""
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Button"], null, "Action"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SimpleKebab__WEBPACK_IMPORTED_MODULE_13__["default"], {
        dropdownItems: [react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownItem"], {
          key: "foo",
          component: "div"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          to: '/'
        }, "Back to Sources"))]
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PresentationalComponents_ListingView_ListingView__WEBPACK_IMPORTED_MODULE_12__["default"], {
        viewDefinition: _this.state.viewDefinition,
        sourceId: _this.state.sourceId
      })));
    });

    _this.state = _this.locationToState();
    return _this;
  }

  return ListingPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(ListingPage, "propTypes", {
  location: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any.isRequired
});

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(ListingPage));

/***/ }),

/***/ "./src/SmartComponents/ListingPage/SimpleKebab.js":
/*!********************************************************!*\
  !*** ./src/SmartComponents/ListingPage/SimpleKebab.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleKebab; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);











var SimpleKebab =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SimpleKebab, _Component);

  function SimpleKebab() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SimpleKebab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SimpleKebab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "state", {
      isOpen: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onToggle", function (opened) {
      return _this.setState({
        isOpen: opened
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SimpleKebab, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["DropdownPosition"].right,
        toggle: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["KebabToggle"], {
          onToggle: this.onToggle
        }),
        isOpen: this.state.isOpen,
        dropdownItems: this.props.dropdownItems
      });
    }
  }]);

  return SimpleKebab;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(SimpleKebab, "propTypes", {
  dropdownItems: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired
});



/***/ }),

/***/ "./src/SmartComponents/ProviderPage/ProviderPage.js":
/*!**********************************************************!*\
  !*** ./src/SmartComponents/ProviderPage/ProviderPage.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _provider_page_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./provider-page.scss */ "./src/SmartComponents/ProviderPage/provider-page.scss");
/* harmony import */ var _provider_page_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_provider_page_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redux_actions_providers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/actions/providers */ "./src/redux/actions/providers.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _PresentationalComponents_SourcesListView_SourcesListView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../PresentationalComponents/SourcesListView/SourcesListView */ "./src/PresentationalComponents/SourcesListView/SourcesListView.js");
/* harmony import */ var _PresentationalComponents_SourcesListView_SourcesFilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../PresentationalComponents/SourcesListView/SourcesFilter */ "./src/PresentationalComponents/SourcesListView/SourcesFilter.js");
/* harmony import */ var _SmartComponents_ProviderPage_providerColumns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../SmartComponents/ProviderPage/providerColumns */ "./src/SmartComponents/ProviderPage/providerColumns.js");
/* harmony import */ var _Utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../Utilities/SourcesFormRenderer */ "./src/Utilities/SourcesFormRenderer.js");



















 //import { wizardForm } from './providerForm';



/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */

var ProviderPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ProviderPage, _Component);

  function ProviderPage(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProviderPage);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(ProviderPage).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "submitProvider", function (values, formState) {
      console.log('submitProvider', values, formState); //this.props.addProvider(values);

      _this.props.createSource(values).then(function () {
        //this.props.addAlert('Source added', 'success');
        _this.props.history.replace('/');
      }).catch(function (error) {
        console.debug('CATCH:');
        console.debug(error); //this.props.addAlert('Source adding failed', 'danger');

        _this.props.history.replace('/');
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onFilter", function (filterColumn, filterValue) {
      console.log('onFilter', filterColumn, filterValue);

      _this.props.filterProviders(filterColumn, filterValue);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onSetPage", function (number) {
      _this.setState({
        onPage: number
      });

      _this.props.pageAndSize(number, _this.state.itemsPerPage);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onPerPageSelect", function (count) {
      _this.setState({
        onPage: 1,
        itemsPerPage: count
      });

      _this.props.pageAndSize(1, count);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      var filterColumns = lodash_filter__WEBPACK_IMPORTED_MODULE_13___default()(_SmartComponents_ProviderPage_providerColumns__WEBPACK_IMPORTED_MODULE_18__["providerColumns"], function (c) {
        return c.value;
      });
      var form = null; //wizardForm;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Modal"], {
        className: "add-source",
        isLarge: true,
        title: "Add New Provider",
        isOpen: _this.props.location.pathname === '/new',
        onClose: _this.props.history.goBack
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_19__["default"], {
        initialValues: form.initialValues,
        schemaType: form.schemaType,
        schema: form.schema,
        uiSchema: form.uiSchema,
        showFormControls: form.showFormControls,
        onSubmit: _this.submitProvider
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["PageHeaderTitle"], {
        title: "Providers"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Section"], {
        type: "content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Gallery"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardHeader"], null, "Karta"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Donut"], {
        withLegend: true,
        identifier: "orech",
        values: [['Red Hat', 100], ['Google', 10]]
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardFooter"], null, "Footer")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "5 Cloud"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "2 Virtual Infrastructure"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "1 Physical Infrastructure"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "1 Network"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "0 Storage"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "0 Automation"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Section"], {
        type: "button-group"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "/new"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        variant: "primary"
      }, " Add a New Source ")))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PresentationalComponents_SourcesListView_SourcesFilter__WEBPACK_IMPORTED_MODULE_17__["default"], {
        columns: filterColumns,
        onFilter: _this.onFilter
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PresentationalComponents_SourcesListView_SourcesListView__WEBPACK_IMPORTED_MODULE_16__["default"], {
        columns: _SmartComponents_ProviderPage_providerColumns__WEBPACK_IMPORTED_MODULE_18__["providerColumns"]
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Pagination"], {
        itemsPerPage: _this.state.itemsPerPage,
        page: _this.state.onPage,
        direction: "up",
        onSetPage: _this.onSetPage,
        onPerPageSelect: _this.onPerPageSelect,
        numberOfItems: _this.props.numberOfEntities || 0
      })))));
    });

    _this.state = {
      itemsPerPage: 10,
      onPage: 1
    };
    return _this;
  }

  return ProviderPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(ProviderPage, "propTypes", {
  addProvider: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  createSource: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  filterProviders: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  pageAndSize: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  numberOfEntities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    addProvider: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_14__["addProvider"],
    createSource: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_14__["createSource"],
    filterProviders: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_14__["filterProviders"],
    pageAndSize: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_14__["pageAndSize"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var numberOfEntities = _ref.providers.numberOfEntities;
  return {
    numberOfEntities: numberOfEntities
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(ProviderPage)));

/***/ }),

/***/ "./src/SmartComponents/ProviderPage/provider-page.scss":
/*!*************************************************************!*\
  !*** ./src/SmartComponents/ProviderPage/provider-page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/SmartComponents/ProviderPage/providerColumns.js":
/*!*************************************************************!*\
  !*** ./src/SmartComponents/ProviderPage/providerColumns.js ***!
  \*************************************************************/
/*! exports provided: providerColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providerColumns", function() { return providerColumns; });
var providerColumns = [{
  title: 'Provider',
  value: 'name'
}, {
  title: 'Status',
  value: null
}, {
  title: 'Type',
  value: 'type'
}, {
  title: 'Last Updated',
  value: null
}];

/***/ }),

/***/ "./src/SmartComponents/ProviderPage/providerForm.js":
/*!**********************************************************!*\
  !*** ./src/SmartComponents/ProviderPage/providerForm.js ***!
  \**********************************************************/
/*! exports provided: sourceEditForm, sourceNewForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceEditForm", function() { return sourceEditForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceNewForm", function() { return sourceNewForm; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/zipObject */ "./node_modules/lodash/zipObject.js");
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _components_SSLFormLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/SSLFormLabel */ "./src/components/SSLFormLabel.js");









var compileSourcesComboOptions = function compileSourcesComboOptions(sourceTypes) {
  return [{
    label: 'Please Choose'
  }].concat(sourceTypes.map(function (t) {
    return {
      value: t.name,
      label: t.product_name
    };
  }));
};

var fieldsToStep = function fieldsToStep(fields, stepName, nextStep) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, fields, {
    // expected to include title and fields
    name: stepName,
    stepKey: stepName,
    nextStep: nextStep
  });
};

var indexedStepName = function indexedStepName(base, index) {
  return index === 0 ? base : "".concat(base, "_").concat(index);
};

var fieldsToSteps = function fieldsToSteps(fields, stepNamePrefix, lastStep) {
  return Array.isArray(fields) ? fields.map(function (page, index) {
    return fieldsToSteps(page, indexedStepName(stepNamePrefix, index), index < fields.length - 1 ? indexedStepName(stepNamePrefix, index + 1) : lastStep);
  }) : fieldsToStep(fields, stepNamePrefix, lastStep);
};

var temporaryHardcodedSourceSchemas = {
  openshift: [{
    title: 'Obtain your login credentials',
    description: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["TextContent"], null, "To gather Red Hat OpenShift Container Platform data, your need to obtain the login token. ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      href: "http://help.me"
    }, "Learn more"), "."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["TextList"], {
      component: "ul"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["TextListItem"], {
      component: "li",
      key: "1"
    }, "Log in to the Red Hat OpenShift Container Platform cluster with an account that has access to the namespace"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["TextListItem"], {
      component: "li",
      key: "2"
    }, "Run the following command to obtain your login token:", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, "\xA0# oc sa get-token -n management-infra management-admin")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["TextListItem"], {
      component: "li",
      key: "3"
    }, "Enter the token in below")))),
    fields: [{
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].TEXTAREA_FIELD,
      name: 'token',
      label: 'Token'
    }]
  }, {
    title: 'Enter OpenShift Container Platform information',
    description: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Provide OpenShift Container Platform URL and SSL certificate."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "All fields are required.")),
    fields: [{
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].TEXT_FIELD,
      name: 'role',
      type: 'hidden',
      initialValue: 'kubernetes' // value of 'role' for the endpoint

    }, {
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].TEXT_FIELD,
      name: 'url',
      label: 'URL',
      helperText: 'For example, https://myopenshiftcluster.mycompany.com',
      isRequired: true
    }, {
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].TEXTAREA_FIELD,
      name: 'certificate_authority',
      label: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_SSLFormLabel__WEBPACK_IMPORTED_MODULE_7__["default"], null),
      condition: {
        when: 'verify_ssl',
        is: true
      }
    }, {
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].CHECKBOX,
      name: 'verify_ssl',
      label: 'Verify SSL'
    }]
  }],
  amazon: {
    title: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Configure account access"), "\xA0", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Popover"], {
      position: "bottom",
      maxWidth: "50%",
      bodyContent: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, "Red Had recommends using the Power User AWS Identity and Access Management (IAM) policy when adding an AWS account as a source. This Policy allows the user full access to API functionality and AWS services for user administration.", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", null), "Create an access key in the ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", null, "Security Credentials"), " area of your AWS user account. To add your account as a source, enter the access key ID and secret access key to act as your user ID and password.")),
      footerContent: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "http://foo.bar"
      }, "Learn more")
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircleIcon"], null))),
    description: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Create an access key in your AWS user account and enter the details below."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "For sufficient access and security, Red Har recommends using the Power User IAM polocy for your AWS user account."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "All fields are required.")),
    fields: [{
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].TEXT_FIELD,
      name: 'role',
      type: 'hidden',
      initialValue: 'aws' // value of 'role' for the endpoint

    }, {
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].TEXT_FIELD,
      name: 'user_name',
      label: 'Access Key ID',
      helperText: 'For example, AKIAIOSFODNN7EXAMPLE',
      isRequired: true
    }, {
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].TEXT_FIELD,
      name: 'password',
      label: 'Secret Key',
      type: 'password',
      helperText: 'For example, wJairXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      isRequired: true
    }]
  },
  'mock-source': {
    title: 'Configure Mock Source',
    fields: [// Save to Endpoint
    {
      component: 'select-field',
      name: 'host',
      label: 'Config',
      validate: [{
        type: 'required-validator'
      }],
      isRequired: true,
      initialValue: 'default',
      options: [{
        label: 'Multi-threaded with events',
        value: 'default'
      }, {
        label: 'Single-threaded full refresh',
        value: 'simple'
      }]
    }, // Save to endpoint
    // FIXME: name => 'path'?
    {
      component: 'select-field',
      name: 'path',
      label: 'Amount',
      validate: [{
        type: 'required-validator'
      }],
      isRequired: true,
      initialValue: 'default',
      options: [{
        label: 'All collections | Small',
        value: 'small'
      }, {
        label: 'All collections | Medium',
        value: 'default'
      }, {
        label: 'All collections | Large',
        value: 'large'
      }, {
        label: 'Amazon | Small',
        value: 'amazon/small'
      }, {
        label: 'Amazon | Medium',
        value: 'amazon/default'
      }, {
        label: 'Amazon | Large',
        value: 'amazon/large'
      }, {
        label: 'Openshift | Small',
        value: 'openshift/small'
      }, {
        label: 'Openshift | Medium',
        value: 'openshift/default'
      }, {
        label: 'Openshift | Large',
        value: 'openshift/large'
      }]
    }]
  }
};
/* Switch between using hard-coded provider schemas and schemas from the api/source_types */

var sourceTypeSchemaHardcodedWithFallback = function sourceTypeSchemaHardcodedWithFallback(t) {
  return temporaryHardcodedSourceSchemas[t.name] || t.schema;
};

var sourceTypeSchemaWithFallback = function sourceTypeSchemaWithFallback(t) {
  return t.schema || temporaryHardcodedSourceSchemas[t.name];
};

var sourceTypeSchemaHardcoded = function sourceTypeSchemaHardcoded(t) {
  return temporaryHardcodedSourceSchemas[t.name];
};

var sourceTypeSchemaServer = function sourceTypeSchemaServer(t) {
  return t.schema;
};

var schemaMode = 4; // defaults to 0

var sourceTypeSchema = {
  0: sourceTypeSchemaWithFallback,
  1: sourceTypeSchemaHardcoded,
  2: sourceTypeSchemaServer,
  4: sourceTypeSchemaHardcodedWithFallback
}[schemaMode];
/* return hash of form: { amazon: 'amazon', google: 'google', openshift: 'openshift' } */

var compileStepMapper = function compileStepMapper(sourceTypes) {
  var names = sourceTypes.map(function (t) {
    return t.name;
  });
  return lodash_zipObject__WEBPACK_IMPORTED_MODULE_2___default()(names, names);
};

var firstStepNew = function firstStepNew(sourceTypes) {
  return {
    title: 'Select a source type',
    description: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "To import data for an application, you need to connect to a data source. To begin, input a name and select the type of source you want to collect data from."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "All fields are required.")),
    name: 'step_1',
    stepKey: 'step_1',
    nextStep: {
      when: 'source_type',
      stepMapper: compileStepMapper(sourceTypes)
    },
    fields: [{
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].TEXT_FIELD,
      name: 'source_name',
      type: 'text',
      label: 'Name',
      helperText: 'For example, Source_1',
      isRequired: true,
      validate: [{
        type: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["validatorTypes"].REQUIRED
      }]
    }, {
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].SELECT_COMPONENT,
      name: 'source_type',
      label: 'Type',
      isRequired: true,
      options: compileSourcesComboOptions(sourceTypes),
      validate: [{
        type: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["validatorTypes"].REQUIRED
      }]
    }]
  };
};

var firstStepEdit = function firstStepEdit(sourceTypes, type) {
  return {
    title: 'Edit a source',
    name: 'step_1',
    stepKey: 'step_1',
    nextStep: type,
    fields: [{
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].TEXT_FIELD,
      name: 'source_name',
      type: 'text',
      label: 'Name'
    }, {
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].SELECT_COMPONENT,
      name: 'source_type',
      label: 'Source type',
      isRequired: true,
      isDisabled: true,
      readOnly: true,
      // make it grey ;-)
      options: compileSourcesComboOptions(sourceTypes),
      validate: [{
        type: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["validatorTypes"].REQUIRED
      }]
    }]
  };
};

var summaryStep = function summaryStep() {
  return {
    fields: [{
      name: 'summary',
      component: 'summary'
    }],
    stepKey: 'summary',
    name: 'summary',
    title: 'Confirm source details',
    description: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["TextContent"], null, "Confirm the details of your source or click Back to revise.")
  };
};

var sourceTypeSteps = function sourceTypeSteps(sourceTypes) {
  return sourceTypes.map(function (t) {
    return fieldsToSteps(sourceTypeSchema(t), t.name, 'summary');
  }).flat(1);
};

var endpointToUrl = function endpointToUrl(endpoint) {
  return "".concat(endpoint.scheme, "://").concat(endpoint.host, ":").concat(endpoint.port).concat(endpoint.path || '');
};

var initialValues = function initialValues(source) {
  var url = endpointToUrl(source.endpoint);
  var _source$endpoint = source.endpoint,
      scheme = _source$endpoint.scheme,
      host = _source$endpoint.host,
      port = _source$endpoint.port,
      path = _source$endpoint.path,
      verify_ssl = _source$endpoint.verify_ssl,
      certificate_authority = _source$endpoint.certificate_authority,
      role = _source$endpoint.role;
  return {
    source_name: source.name,
    source_type: source.source_type,
    url: url,
    scheme: scheme,
    host: host,
    port: port,
    path: path,
    verify_ssl: verify_ssl,
    certificate_authority: certificate_authority,
    role: role,
    token: 'FIXME',
    // AWS?
    user_name: 'FIXME',
    password: 'FIXME' // same as token

  };
};

function sourceEditForm(sourceTypes, source) {
  /* editing form:
   * 1st page: editable name + non-editable source type
   * 2nd, 3rd... page: provider specific
   * last page: summary */
  var sourceType = lodash_find__WEBPACK_IMPORTED_MODULE_3___default()(sourceTypes, {
    id: source.source_type_id
  });
  var typeName = sourceType.name;
  return {
    initialValues: initialValues(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
      source_type: sourceType.name
    }, source)),
    schemaType: 'default',
    showFormControls: false,
    schema: {
      fields: [{
        component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].WIZARD,
        name: 'wizard',
        fields: [firstStepEdit(sourceTypes, typeName)].concat(sourceType && fieldsToSteps(sourceTypeSchema(sourceType), typeName, 'summary'), summaryStep())
      }]
    }
  };
}
function sourceNewForm(sourceTypes) {
  /* For now we assume that each source has a schema with exactly 1 step.
   *
   * We prepend a page with source type choice and name.
   * And we append a page with a summary
   * */
  return {
    initialValues: {
      verify_ssl: true // for OpenShift

    },
    schemaType: 'default',
    showFormControls: false,
    schema: {
      fields: [{
        component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_1__["componentTypes"].WIZARD,
        name: 'wizard',
        fields: [firstStepNew(sourceTypes)].concat(sourceTypeSteps(sourceTypes), summaryStep())
      }]
    }
  };
}

/***/ }),

/***/ "./src/SmartComponents/TopologyPage/TopologyPage.js":
/*!**********************************************************!*\
  !*** ./src/SmartComponents/TopologyPage/TopologyPage.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PresentationalComponents_TopologyView_TopologyView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../PresentationalComponents/TopologyView/TopologyView */ "./src/PresentationalComponents/TopologyView/TopologyView.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__);










var TopologyPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(TopologyPage, _Component);

  function TopologyPage() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TopologyPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(TopologyPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["PageHeaderTitle"], {
        title: "Topology"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["Section"], {
        type: "content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PresentationalComponents_TopologyView_TopologyView__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
    });

    return _this;
  }

  return TopologyPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TopologyPage);

/***/ }),

/***/ "./src/Utilities/Constants.js":
/*!************************************!*\
  !*** ./src/Utilities/Constants.js ***!
  \************************************/
/*! exports provided: TOPOLOGICAL_INVENTORY_API_BASE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOPOLOGICAL_INVENTORY_API_BASE", function() { return TOPOLOGICAL_INVENTORY_API_BASE; });
/* If BASE_PATH ends with '/', append just the version. This is useful for local debugging:
 *
 * BASE_PATH=http://lucifer.usersys.redhat.com:4000/api/ npm run start
 *
 * Will correctly work with a local running Inventory API (bundle exec rails s -b 0.0.0.0 -p 4000).
 *
 *
 * Else append the microservice path and version. This behavior is compatible with Service Catalog.
 */
var calculateApiBase = function calculateApiBase(b) {
  return b.endsWith('/') && "".concat(b, "v0.1") || "".concat(b, "/topological-inventory/v0.1");
};

var TOPOLOGICAL_INVENTORY_API_BASE = calculateApiBase("/api" || '');

/***/ }),

/***/ "./src/Utilities/SourcesFormRenderer.js":
/*!**********************************************!*\
  !*** ./src/Utilities/SourcesFormRenderer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/index.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SourceWizardSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SourceWizardSummary */ "./src/components/SourceWizardSummary.js");







var SourcesFormRenderer = function SourcesFormRenderer(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_3___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    layoutMapper: _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_4__["layoutMapper"],
    formFieldsMapper: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_4__["formFieldsMapper"], {
      summary: _components_SourceWizardSummary__WEBPACK_IMPORTED_MODULE_5__["default"]
    })
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (SourcesFormRenderer);

/***/ }),

/***/ "./src/Utilities/asyncComponent.js":
/*!*****************************************!*\
  !*** ./src/Utilities/asyncComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return asyncComponent; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








/**
 * Webpack allows loading components asynchronously by using import().
 *
 *      Ex) const Component = asyncComponent(() => import('component');
 *
 *          class aClass extends React.Component {
 *              render() {
 *                  return (<Component prop1="prop1" prop2="prop2" ... />);
 *              }
 *          }
 *
 *  https://reactjs.org/docs/higher-order-components.html
 *
 * @param importComponent a function that contains and async import statement
 *      Ex) () => import('react-component')
 *
 * @returns {AsyncComponent} The imported component or can return a loading
 */

function asyncComponent(importComponent) {
  var AsyncComponent =
  /*#__PURE__*/
  function (_Component) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(AsyncComponent, _Component);

    function AsyncComponent(props) {
      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AsyncComponent);

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(AsyncComponent).call(this, props));
      _this.state = {
        component: null
      };
      return _this;
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AsyncComponent, [{
      key: "componentDidMount",
      value: function () {
        var _componentDidMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var _ref, component;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return importComponent();

                case 2:
                  _ref = _context.sent;
                  component = _ref.default;
                  this.setState({
                    component: component
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function componentDidMount() {
          return _componentDidMount.apply(this, arguments);
        }

        return componentDidMount;
      }()
    }, {
      key: "render",
      value: function render() {
        var C = this.state.component;
        return C ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(C, this.props) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Loading...");
      }
    }]);

    return AsyncComponent;
  }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

  return AsyncComponent;
}

/***/ }),

/***/ "./src/Utilities/listHelpers.js":
/*!**************************************!*\
  !*** ./src/Utilities/listHelpers.js ***!
  \**************************************/
/*! exports provided: sortList, paginateList, filterList, processList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortList", function() { return sortList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginateList", function() { return paginateList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterList", function() { return filterList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processList", function() { return processList; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/drop */ "./node_modules/lodash/drop.js");
/* harmony import */ var lodash_drop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_drop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/take */ "./node_modules/lodash/take.js");
/* harmony import */ var lodash_take__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_take__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_lowerCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/lowerCase */ "./node_modules/lodash/lowerCase.js");
/* harmony import */ var lodash_lowerCase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_lowerCase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_fp_flow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/fp/flow */ "./node_modules/lodash/fp/flow.js");
/* harmony import */ var lodash_fp_flow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_flow__WEBPACK_IMPORTED_MODULE_6__);







var sortList = function sortList(list, column, direction) {
  return !column ? list : lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()(list, [function (element) {
    return lodash_lowerCase__WEBPACK_IMPORTED_MODULE_4___default()('' + lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(element, column));
  }], [direction]);
};
var paginateList = function paginateList(list, pageNumber, pageSize) {
  return lodash_take__WEBPACK_IMPORTED_MODULE_2___default()(lodash_drop__WEBPACK_IMPORTED_MODULE_1___default()(list, pageSize * (pageNumber - 1)), pageSize);
};
var filterList = function filterList(list, column, value) {
  return !value || !column ? list : lodash_filter__WEBPACK_IMPORTED_MODULE_5___default()(list, function (element) {
    return lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(element, column).match(RegExp(value));
  });
};
var processList = function processList(list, options) {
  var filtered = filterList(list, options.filterColumn, options.filterValue);
  return {
    length: filtered.length,
    list: lodash_fp_flow__WEBPACK_IMPORTED_MODULE_6___default()(function (l) {
      return sortList(l, options.sortBy, options.sortDirection);
    }, function (l) {
      return paginateList(l, options.pageNumber, options.pageSize);
    })(filtered)
  };
};

/***/ }),

/***/ "./src/api/entities.js":
/*!*****************************!*\
  !*** ./src/api/entities.js ***!
  \*****************************/
/*! exports provided: getApiInstance, getEntities, doRemoveSource, doLoadSourceForEdit, doCreateSource, doUpdateSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiInstance", function() { return getApiInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRemoveSource", function() { return doRemoveSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLoadSourceForEdit", function() { return doLoadSourceForEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCreateSource", function() { return doCreateSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUpdateSource", function() { return doUpdateSource; });
/* harmony import */ var _Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Constants */ "./src/Utilities/Constants.js");
/* harmony import */ var _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/sourcesViewDefinition */ "./src/views/sourcesViewDefinition.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_2__);



/*global require*/

var TopologicalInventory = __webpack_require__(/*! @manageiq/topological_inventory */ "./node_modules/@manageiq/topological_inventory/dist/main.js");

var apiInstance;
function getApiInstance() {
  if (apiInstance) {
    return apiInstance;
  }

  apiInstance = new TopologicalInventory.DefaultApi();
  var defaultClient = TopologicalInventory.ApiClient.instance;
  defaultClient.basePath = _Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["TOPOLOGICAL_INVENTORY_API_BASE"];
  return apiInstance;
}
function getEntities(_pagination, _filter) {
  return fetch(_Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["TOPOLOGICAL_INVENTORY_API_BASE"] + _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_1__["sourcesViewDefinition"].url).then(function (r) {
    if (r.ok || r.type === 'opaque') {
      return r.json();
    }

    throw new Error("Unexpected response code ".concat(r.status));
  });
}
function doRemoveSource(sourceId) {
  return getApiInstance().deleteSource(sourceId).then(function (sourceDataOut) {
    console.log('API call deleteSource returned data: ', sourceDataOut);
  }, function (_error) {
    console.error('Source removal failed.');
    throw {
      error: 'Source removal failed.'
    };
  });
}
function doLoadSourceForEdit(sourceId) {
  return getApiInstance().showSource(sourceId).then(function (sourceData) {
    console.log('API call showSource returned: ', sourceData);
    return getApiInstance().listSourceEndpoints(sourceId, {}).then(function (endpoints) {
      console.log('API call listSourceEndpoints returned: ', endpoints); // we take just the first endpoint

      var endpoint = endpoints && endpoints.data && endpoints.data[0];

      if (!endpoint) {
        // bail out
        return sourceData;
      }

      sourceData.endpoint = endpoint;
      return getApiInstance().listEndpointAuthentications(endpoint.id, {}).then(function (authentications) {
        console.log('API call listEndpointAuthentications returned: ', authentications); // we take just the first authentication

        var authentication = authentications && authentications.data && authentications.data[0];

        if (authentication) {
          sourceData.authentication = authentication;
        }

        return sourceData;
      });
    });
  });
}

var parseUrl = function parseUrl(url) {
  if (!url) {
    return {};
  }

  try {
    var u = new URL(url);
    return {
      scheme: u.protocol.replace(/:$/, ''),
      host: u.hostname,
      port: u.port,
      path: u.pathname
    };
  } catch (error) {
    console.log(error);
    return {};
  }
};
/*
 * If there's an URL in the formData, parse it and use it,
 * else use individual fields (scheme, host, port, path).
 */


var urlOrHost = function urlOrHost(formData) {
  return formData.url ? parseUrl(formData.url) : formData;
};

function doCreateSource(formData, sourceTypes) {
  var sourceData = {
    tenant_id: 1,

    /* FIXME: remove this */
    name: formData.source_name,
    source_type_id: lodash_find__WEBPACK_IMPORTED_MODULE_2___default()(sourceTypes, {
      name: formData.source_type
    }).id
  };
  return getApiInstance().createSource(sourceData).then(function (sourceDataOut) {
    var _urlOrHost = urlOrHost(formData),
        scheme = _urlOrHost.scheme,
        host = _urlOrHost.host,
        port = _urlOrHost.port,
        path = _urlOrHost.path;

    var endpointData = {
      source_id: parseInt(sourceDataOut.id, 10),
      tenant_id: parseInt(sourceDataOut.tenant_id, 10),
      role: formData.role,
      scheme: scheme,
      host: host,
      port: parseInt(port, 10),
      path: path,
      verify_ssl: formData.verify_ssl,
      certificate_authority: formData.certificate_authority
    };
    return getApiInstance().createEndpoint(endpointData).then(function (endpointDataOut) {
      var authenticationData = {
        resource_id: parseInt(endpointDataOut.id, 10),
        resource_type: 'Endpoint',
        tenant_id: parseInt(sourceDataOut.tenant_id, 10),
        password: formData.token || formData.password
      };
      return getApiInstance().createAuthentication(authenticationData).then(function (authenticationDataOut) {
        return authenticationDataOut;
      }, function (_error) {
        console.error('Authentication creation failure.');
        throw {
          error: 'Authentication creation failure.'
        };
      });
    }, function (_error) {
      console.error('Endpoint creation failure.');
      throw {
        error: 'Endpoint creation failure.'
      };
    });
  }, function (_error) {
    console.error('Source creation failure.');
    throw {
      error: 'Source creation failure.'
    };
  });
}
function doUpdateSource(source, formData) {
  var inst = getApiInstance();
  var sourceData = {
    name: formData.source_name
  };
  return inst.updateSource(source.id, sourceData).then(function (_sourceDataOut) {
    var _urlOrHost2 = urlOrHost(formData),
        scheme = _urlOrHost2.scheme,
        host = _urlOrHost2.host,
        port = _urlOrHost2.port,
        path = _urlOrHost2.path;

    var endpointData = {
      scheme: scheme,
      host: host,
      port: parseInt(port, 10),
      path: path,
      verify_ssl: formData.verify_ssl,
      certificate_authority: formData.certificate_authority
    };
    return inst.updateEndpoint(source.endpoint.id, endpointData).then(function (_endpointDataOut) {
      var authenticationData = {
        // FIXME: missing USER here?
        password: formData.token || formData.password // FIXME: unify

      };
      return inst.updateAuthentication(source.authentication.id, authenticationData).then(function (authenticationDataOut) {
        return authenticationDataOut;
      }, function (_error) {
        console.error('Authentication update failure.');
        throw {
          error: 'Authentication update failure.'
        };
      });
    }, function (_error) {
      console.error('Endpoint update failure.');
      throw {
        error: 'Endpoint update failure.'
      };
    });
  }, function (_error) {
    console.error('Source update failure.');
    throw {
      error: 'Source update failure.'
    };
  });
}

/***/ }),

/***/ "./src/api/listing_view.js":
/*!*********************************!*\
  !*** ./src/api/listing_view.js ***!
  \*********************************/
/*! exports provided: generateRandomData, doLoadListingData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomData", function() { return generateRandomData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLoadListingData", function() { return doLoadListingData; });
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/times */ "./node_modules/lodash/times.js");
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/join */ "./node_modules/lodash/join.js");
/* harmony import */ var lodash_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_join__WEBPACK_IMPORTED_MODULE_1__);


function generateRandomData(num) {
  var rows = [];

  for (var i = 1; i <= num; i++) {
    rows.push({
      id: i,
      name: "foobar ".concat(Math.round(Math.random() * 1000)),
      cluster: 'Default',
      host: "foo.bar.host".concat(Math.round(Math.random() * 1000)),
      ip_address: lodash_join__WEBPACK_IMPORTED_MODULE_1___default()(lodash_times__WEBPACK_IMPORTED_MODULE_0___default()(4, function () {
        return Math.round(Math.random() * 256);
      }), '.'),
      datastore: 'My store'
    });
  }

  return rows;
}
function doLoadListingData(viewDefinition, sourceId) {
  console.log('doLoadListingData', sourceId);
  var url = viewDefinition.url.replace(/:id/, sourceId);
  return fetch(url).then(function (r) {
    if (r.ok || r.type === 'opaque') {
      return r.json();
    }

    throw new Error("Unexpected response code ".concat(r.status));
  });
}

/***/ }),

/***/ "./src/api/source_types.js":
/*!*********************************!*\
  !*** ./src/api/source_types.js ***!
  \*********************************/
/*! exports provided: doLoadSourceTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLoadSourceTypes", function() { return doLoadSourceTypes; });
/* harmony import */ var _Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Constants */ "./src/Utilities/Constants.js");
 // import { getApiInstance } from './entities.js';

function doLoadSourceTypes() {
  return fetch(_Utilities_Constants__WEBPACK_IMPORTED_MODULE_0__["TOPOLOGICAL_INVENTORY_API_BASE"] + '/source_types/').then(function (r) {
    return r.json();
  }).then(function (data) {
    return data.data;
  });
  /*  FIXME: the API is broken now, data is returned as "Object object" so switching
   *  to fetch() for now.
   *
   *  let opts = {
   *      limit: 100,
   *      offset: 0
   *  };
   *
   *  return getApiInstance().listSourceTypes(opts).then((data) => {
   *      console.log('data: ', data.data);
   *      return data.data;
   *  }, (error) => {
   *      console.error(error);
   *      return [];
   *  });
  */
}
;

/***/ }),

/***/ "./src/api/topology.js":
/*!*****************************!*\
  !*** ./src/api/topology.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*eslint max-len: 0*/
var topologyData = {
  nodes: [{
    id: 3,
    title: 'Yang',
    size: 24,
    fonticon: 'fa fa-cloud',
    depth: 3,
    status: 'valid',
    highlight: false,
    x: 600,
    y: 161.60000000000002
  }, {
    id: 4,
    title: 'Gray',
    size: 24,
    fonticon: 'fa fa-cloud',
    depth: 3,
    status: 'valid',
    highlight: false,
    x: 600,
    y: 161.60000000000002
  }, {
    id: 5,
    title: 'Maddox',
    size: 24,
    fileicon: 'https://www.svgrepo.com/show/5386/speedometer.svg',
    depth: 3,
    status: 'warning',
    highlight: false,
    x: 600,
    y: 161.60000000000002
  }, {
    id: 0,
    title: 'Levy',
    size: 24,
    fonticon: 'fa fa-cog',
    depth: 1,
    status: 'valid',
    highlight: false,
    x: 50,
    y: 161.60000000000002,
    fx: 61,
    fy: null
  }, {
    id: 1,
    title: 'Celina',
    size: 24,
    fonticon: 'fa fa-cloud',
    depth: 2,
    status: 'warning',
    highlight: false,
    x: 400,
    y: 161.60000000000002
  }, {
    id: 2,
    title: 'Nancy',
    size: 24,
    fonticon: 'fa fa-cloud',
    depth: 2,
    status: 'critical',
    highlight: false,
    x: 400,
    y: 161.60000000000002
  }],
  edges: [{
    source: 1,
    target: 4
  }, {
    source: 2,
    target: 5
  }, {
    source: 0,
    target: 1
  }, {
    source: 0,
    target: 2
  }, {
    source: 1,
    target: 3
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (topologyData);

/***/ }),

/***/ "./src/components/SSLFormLabel.js":
/*!****************************************!*\
  !*** ./src/components/SSLFormLabel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




var SSLFormLabel = function SSLFormLabel() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "SSL Certificate\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    maxWidth: "50%",
    bodyContent: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].p
    }, "You can obtain your OpenShift Container Platform provider\u2019s CA certificate for all endpoints (default, metrics, alerts) from", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "/etc/origin/master/ca.crt"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].p
    }, "Paste the output (a block of text starting with --BEGIN CERTIFICATE--) into the Trusted CA Certificates field."))
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_1__["QuestionCircleIcon"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (SSLFormLabel);

/***/ }),

/***/ "./src/components/SourceEditModal.js":
/*!*******************************************!*\
  !*** ./src/components/SourceEditModal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _SmartComponents_ProviderPage_providerForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SmartComponents/ProviderPage/providerForm */ "./src/SmartComponents/ProviderPage/providerForm.js");
/* harmony import */ var _Utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Utilities/SourcesFormRenderer */ "./src/Utilities/SourcesFormRenderer.js");
/* harmony import */ var _redux_actions_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/providers */ "./src/redux/actions/providers.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Routes */ "./src/Routes.js");











var SourceEditModal = function SourceEditModal(props) {
  var editorNew = props.location.pathname === _Routes__WEBPACK_IMPORTED_MODULE_9__["paths"].sourcesNew;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!editorNew) {
      props.loadSourceForEdit(parseInt(props.match.params.id, 10));
    }
  }, []);

  var submitProvider = function submitProvider(values, _formState) {
    var promise = editorNew ? props.createSource(values, props.sourceTypes) : props.updateSource(props.source, values);
    promise.then(function () {
      props.history.replace('/');
      props.loadEntities();
    }).catch(function (_error) {
      props.history.replace('/');
    });
  };

  if (!props.sourceTypes || !editorNew && !props.source) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
  }

  var form = editorNew ? Object(_SmartComponents_ProviderPage_providerForm__WEBPACK_IMPORTED_MODULE_6__["sourceNewForm"])(props.sourceTypes) : Object(_SmartComponents_ProviderPage_providerForm__WEBPACK_IMPORTED_MODULE_6__["sourceEditForm"])(props.sourceTypes, props.source);
  console.log('Form schema: ', form);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    title: editorNew ? 'Add a Source' : 'Edit Source',
    isOpen: true,
    onClose: props.history.goBack,
    isLarge: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    initialValues: form.initialValues,
    schemaType: form.schemaType,
    schema: form.schema,
    uiSchema: form.uiSchema,
    showFormControls: form.showFormControls,
    onSubmit: submitProvider,
    onCancel: props.history.goBack
  }));
};

SourceEditModal.propTypes = {
  createSource: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  loadSourceForEdit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  loadEntities: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  updateSource: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  sourceTypes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any),
  // list of all SourceTypes
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  // a Source for editing
  location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,
  match: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    createSource: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_8__["createSource"],
    loadEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_8__["loadEntities"],
    loadSourceForEdit: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_8__["loadSourceForEdit"],
    updateSource: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_8__["updateSource"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$providers = _ref.providers,
      source = _ref$providers.source,
      sourceTypes = _ref$providers.sourceTypes;
  return {
    source: source,
    sourceTypes: sourceTypes
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(SourceEditModal)));

/***/ }),

/***/ "./src/components/SourceExpandedView.js":
/*!**********************************************!*\
  !*** ./src/components/SourceExpandedView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




var SourceExpandedView = function SourceExpandedView() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dl", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dt", null, "Access Key ID (User ID)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dd", null, "TO BE ADDED"))));
};

SourceExpandedView.propTypes = {
  source: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]).isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SourceExpandedView);

/***/ }),

/***/ "./src/components/SourceRemoveModal.js":
/*!*********************************************!*\
  !*** ./src/components/SourceRemoveModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redux_actions_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/providers */ "./src/redux/actions/providers.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");









var SourceRemoveModal = function SourceRemoveModal(_ref) {
  var push = _ref.history.push,
      removeSource = _ref.removeSource,
      loadEntities = _ref.loadEntities,
      source = _ref.source;

  var onSubmit = function onSubmit() {
    return removeSource(source.id).then(function () {
      loadEntities();
      push('/');
    });
  };

  var onCancel = function onCancel() {
    return push('/');
  };

  if (!source) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    className: "ins-c-sources__dialog--warning",
    title: " ",
    isOpen: true,
    isSmall: true,
    hideTitle: true,
    onClose: onCancel,
    actions: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      key: "cancel",
      variant: "primary",
      type: "button",
      onClick: onCancel
    }, "No, do not delete."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      key: "submit",
      variant: "danger",
      type: "button",
      onClick: onSubmit
    }, "Yes, delete the data.")]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Bullseye"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h1
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ins-c-source__delete-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_7__["ExclamationCircleIcon"], null)), "Delete ", source.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].p
  }, "Are you sure you want to delete \"", source.name, "\"? This action cannot be undone."))));
};

SourceRemoveModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired,
  removeSource: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  loadEntities: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  source: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })
};

var sourceDetailsFromState = function sourceDetailsFromState(state, id) {
  return state.providers.entities.find(function (source) {
    return source.id === id;
  });
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var id = _ref2.match.params.id;
  return {
    source: sourceDetailsFromState(state, id)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    loadEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_6__["loadEntities"],
    removeSource: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_6__["removeSource"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(SourceRemoveModal)));

/***/ }),

/***/ "./src/components/SourceWizardSummary.js":
/*!***********************************************!*\
  !*** ./src/components/SourceWizardSummary.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_5__);







var openShiftSummary = function openShiftSummary(_ref) {
  var url = _ref.url,
      certificate_authority = _ref.certificate_authority;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    label: "URL",
    fieldId: "summary-url"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    isDisabled: true,
    type: "text",
    id: "summary-url",
    value: url
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    label: "SSL Certificate",
    fieldId: "summary-ssl-cert"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    isDisabled: true,
    type: "text",
    id: "summary-ssl-cert",
    value: certificate_authority
  })));
};

openShiftSummary.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  certificate_authority: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

var awsSummary = function awsSummary(_ref2) {
  var user_name = _ref2.user_name,
      password = _ref2.password;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    label: "Access Key ID",
    fieldId: "summary-id"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    isDisabled: true,
    type: "text",
    id: "summary-id",
    value: user_name
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    label: "Secret access key",
    fieldId: "summary-ssl-cert"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    isDisabled: true,
    type: "text",
    id: "summary-ssl-cert",
    value: password
  })));
};

awsSummary.propTypes = {
  user_name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  password: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

var typeSpecificSummary = function typeSpecificSummary(type, props) {
  return type === 'openshift' ? openShiftSummary(props) : type === 'amazon' ? awsSummary(props) : null;
};

var niceTypeName = function niceTypeName(name, types) {
  var sourceType = lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(types, {
    name: name
  });
  return sourceType && sourceType.product_name || name;
};

var SourceWizardSummary = function SourceWizardSummary(_ref3) {
  var sourceTypes = _ref3.sourceTypes,
      formOptions = _ref3.formOptions;

  var _formOptions$getState = formOptions.getState().values,
      source_name = _formOptions$getState.source_name,
      source_type = _formOptions$getState.source_type,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_formOptions$getState, ["source_name", "source_type"]);

  console.log('source_type: ', source_type);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    label: "Name",
    fieldId: "summary-name"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    isDisabled: true,
    type: "text",
    id: "summary-name",
    value: source_name
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    label: "Type",
    fieldId: "summary-type"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    isDisabled: true,
    type: "text",
    id: "summary-type",
    value: niceTypeName(source_type, sourceTypes)
  })), typeSpecificSummary(source_type, rest));
};

SourceWizardSummary.propTypes = {
  formOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
  sourceTypes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any).isRequired
};

var mapStateToProps = function mapStateToProps(_ref4) {
  var sourceTypes = _ref4.providers.sourceTypes;
  return {
    sourceTypes: sourceTypes
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(SourceWizardSummary));

/***/ }),

/***/ "./src/components/SourcesEmptyState.js":
/*!*********************************************!*\
  !*** ./src/components/SourcesEmptyState.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Routes */ "./src/Routes.js");


 // FIXME: different icon




var SourcesEmptyState = function SourcesEmptyState() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Bullseye"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateIcon"], {
    icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["CubesIcon"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    headingLevel: "h5",
    size: "lg"
  }, "No Sources"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateBody"], null, "No Sources have been defined. To start define a Source."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: _Routes__WEBPACK_IMPORTED_MODULE_4__["paths"].sourcesNew
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: {
      marginTop: 'var(--pf-c-empty-state--c-button--MarginTop)'
    },
    variant: "primary"
  }, "Add a Source"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SourcesEmptyState);

/***/ }),

/***/ "./src/components/SourcesFilter.js":
/*!*****************************************!*\
  !*** ./src/components/SourcesFilter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__);










var SourcesFilter =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SourcesFilter, _Component);

  function SourcesFilter(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SourcesFilter);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(SourcesFilter).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["SimpleTableFilter"], {
        buttonTitle: null,
        placeholder: "Filter by source name",
        xoptions: {
          title: 'Filter By',
          items: _this.props.columns
        },
        onOptionSelect: _this.props.onFilterSelect,
        onButtonClick: _this.props.onFilter,
        onFilterChange: _this.props.onFilter
      });
    });

    return _this;
  }

  return SourcesFilter;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

SourcesFilter.propTypes = {
  columns: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
  })).isRequired,
  onFilter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  onFilterSelect: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SourcesFilter);

/***/ }),

/***/ "./src/components/SourcesSimpleView.js":
/*!*********************************************!*\
  !*** ./src/components/SourcesSimpleView.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var _SourceExpandedView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SourceExpandedView */ "./src/components/SourceExpandedView.js");
/* harmony import */ var _redux_actions_providers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../redux/actions/providers */ "./src/redux/actions/providers.js");




















var RowLoader = function RowLoader(props) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_16__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default()({
    height: 20,
    width: 480
  }, props), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "30",
    y: "0",
    rx: "3",
    ry: "3",
    width: "250",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "300",
    y: "0",
    rx: "3",
    ry: "3",
    width: "70",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "385",
    y: "0",
    rx: "3",
    ry: "3",
    width: "95",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "50",
    y: "12",
    rx: "3",
    ry: "3",
    width: "80",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "150",
    y: "12",
    rx: "3",
    ry: "3",
    width: "200",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "360",
    y: "12",
    rx: "3",
    ry: "3",
    width: "120",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "20",
    height: "20"
  }));
};

var SourcesSimpleView =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SourcesSimpleView, _React$Component);

  function SourcesSimpleView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SourcesSimpleView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SourcesSimpleView).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onItemSelect", function (_event, key, checked) {
      return _this.props.selectEntity(key, checked);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onSort", function (_event, key, direction) {
      _this.props.sortEntities(_this.filteredColumns[key].value, direction);

      _this.setState({
        sortBy: {
          index: key,
          direction: direction
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "sourceIndexToId", function (i) {
      return _this.props.entities[i / 2].id;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "renderActions", function () {
      return [{
        title: 'Delete',
        onClick: function onClick(_ev, i) {
          return _this.props.history.push("/remove/".concat(_this.sourceIndexToId(i)));
        }
      }, {
        title: 'Edit',
        onClick: function onClick(_ev, i) {
          return _this.props.history.push("/edit/".concat(_this.sourceIndexToId(i)));
        }
      }];
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "sourceTypeFormatter", function (sourceType) {
      return _this.sourceTypeMap.get(sourceType) || sourceType || '';
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "itemToCells", function (item) {
      return _this.filteredColumns.map(function (col) {
        return col.formatter ? _this[col.formatter](item[col.value]) : item[col.value] || '';
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "render", function () {
      var _this$props = _this.props,
          entities = _this$props.entities,
          loaded = _this$props.loaded,
          sourceTypes = _this$props.sourceTypes;
      var rowData = lodash_flatten__WEBPACK_IMPORTED_MODULE_14___default()(entities.map(function (item, index) {
        return [_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
          isOpen: !!item.expanded,
          cells: _this.itemToCells(item)
        }), {
          // expanded content
          id: item.id + '_detail',
          parent: index * 2,
          cells: [item.expanded ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            key: "".concat(item.id, "_detail")
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_SourceExpandedView__WEBPACK_IMPORTED_MODULE_17__["default"], {
            source: item
          })) : 'collapsed content']
        }];
      }));
      _this.sourceTypeMap = new Map(sourceTypes.map(function (t) {
        return [t.id, t.name];
      }));

      if (loaded) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__["Table"], {
          gridBreakPoint: "grid-lg",
          "aria-label": "List of Sources",
          onCollapse: _this.onCollapse,
          onSort: _this.onSort,
          sortBy: _this.state.sortBy,
          rows: rowData,
          cells: _this.headers,
          actions: _this.renderActions()
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__["TableHeader"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__["TableBody"], null));
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
        className: "sources-placeholder-table pf-m-compact ins-entity-table"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(RowLoader, null))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(RowLoader, null)))));
    });

    _this.filteredColumns = lodash_filter__WEBPACK_IMPORTED_MODULE_15___default()(_this.props.columns, function (c) {
      return c.title;
    });
    _this.headers = _this.filteredColumns.map(function (col) {
      return {
        title: col.title,
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__["sortable"]]
      };
    });
    _this.state = {
      sortBy: {}
    };
    return _this;
  }

  return SourcesSimpleView;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

;
SourcesSimpleView.propTypes = {
  columns: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
  })).isRequired,
  loadEntities: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  selectEntity: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  expandEntity: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  removeSource: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  sortEntities: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  entities: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any),
  numberOfEntities: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  loaded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  sourceTypes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any),
  history: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any.isRequired
};
SourcesSimpleView.defaultProps = {
  entities: [],
  numberOfEntities: 0,
  loaded: false,
  sourceTypes: []
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])({
    loadEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_18__["loadEntities"],
    selectEntity: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_18__["selectEntity"],
    expandEntity: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_18__["expandEntity"],
    sortEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_18__["sortEntities"],
    removeSource: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_18__["removeSource"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$providers = _ref.providers,
      entities = _ref$providers.entities,
      loaded = _ref$providers.loaded,
      numberOfEntities = _ref$providers.numberOfEntities,
      sourceTypes = _ref$providers.sourceTypes;
  return {
    entities: entities,
    loaded: loaded,
    numberOfEntities: numberOfEntities,
    sourceTypes: sourceTypes
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(SourcesSimpleView)));

/***/ }),

/***/ "./src/entry-dev.js":
/*!**************************!*\
  !*** ./src/entry-dev.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");



 //import ReducerRegistry from './Utilities/ReducerRegistry';


var pathName = window.location.pathname.split('/');
pathName.shift();
var release = '/';

if (pathName[0] === 'beta') {
  release = "/".concat(pathName.shift(), "/");
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _App__WEBPACK_IMPORTED_MODULE_4__["default"].getRegistry().getStore()
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  basename: "".concat(release).concat(pathName[0], "/").concat(pathName[1], "/").concat(pathName[2])
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/SourcesPage.js":
/*!**********************************!*\
  !*** ./src/pages/SourcesPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/providers */ "./src/redux/actions/providers.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_SourcesSimpleView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/SourcesSimpleView */ "./src/components/SourcesSimpleView.js");
/* harmony import */ var _components_SourcesFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/SourcesFilter */ "./src/components/SourcesFilter.js");
/* harmony import */ var _components_SourcesEmptyState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/SourcesEmptyState */ "./src/components/SourcesEmptyState.js");
/* harmony import */ var _components_SourceEditModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/SourceEditModal */ "./src/components/SourceEditModal.js");
/* harmony import */ var _components_SourceRemoveModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/SourceRemoveModal */ "./src/components/SourceRemoveModal.js");
/* harmony import */ var _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/sourcesViewDefinition */ "./src/views/sourcesViewDefinition.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Routes */ "./src/Routes.js");
























/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */

var SourcesPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SourcesPage, _Component);

  function SourcesPage(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SourcesPage);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(SourcesPage).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "componentDidMount", function () {
      _this.props.loadSourceTypes();

      _this.props.loadEntities();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onFilter", function (filterValue) {
      console.log('onFilter', filterValue);

      _this.props.filterProviders(filterValue);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onFilterSelect", function (_component, column) {
      console.log('onFilter', column);

      _this.props.setProviderFilterColumn(column.value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onSetPage", function (number) {
      _this.setState({
        onPage: number
      });

      _this.props.pageAndSize(number, _this.state.itemsPerPage);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onPerPageSelect", function (count) {
      _this.setState({
        onPage: 1,
        itemsPerPage: count
      });

      _this.props.pageAndSize(1, count);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "renderMainContent", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["TableToolbar"], {
        xresults: _this.props.numberOfEntities
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Split"], {
        gutter: "md",
        style: {
          flexGrow: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["SplitItem"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SourcesFilter__WEBPACK_IMPORTED_MODULE_16__["default"], {
        columns: lodash_filter__WEBPACK_IMPORTED_MODULE_14___default()(_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_20__["sourcesViewDefinition"].columns, function (c) {
          return c.searchable;
        }),
        onFilter: _this.onFilter,
        onFilterSelect: _this.onFilterSelect
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["SplitItem"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: _Routes__WEBPACK_IMPORTED_MODULE_21__["paths"].sourcesNew
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        variant: "primary"
      }, " Add a New Source "))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["SplitItem"], {
        style: {
          flexGrow: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Pagination"], {
        itemsPerPage: _this.state.itemsPerPage,
        page: _this.state.onPage,
        direction: "up",
        onSetPage: _this.onSetPage,
        onPerPageSelect: _this.onPerPageSelect,
        numberOfItems: _this.props.numberOfEntities || 0
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SourcesSimpleView__WEBPACK_IMPORTED_MODULE_15__["default"], {
        columns: _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_20__["sourcesViewDefinition"].columns
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["TableToolbar"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Pagination"], {
        itemsPerPage: _this.state.itemsPerPage,
        page: _this.state.onPage,
        direction: "up",
        onSetPage: _this.onSetPage,
        onPerPageSelect: _this.onPerPageSelect,
        numberOfItems: _this.props.numberOfEntities || 0
      })));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      var numberOfEntities = _this.props.numberOfEntities;
      var displayEmptyState = _this.props.loaded && // already loaded
      !_this.props.filterValue && ( // no filter active
      !numberOfEntities || numberOfEntities === 0); // no records do display

      var editorNew = _this.props.location.pathname === _Routes__WEBPACK_IMPORTED_MODULE_21__["paths"].sourcesNew;
      var editorEdit = _this.props.match.path === _Routes__WEBPACK_IMPORTED_MODULE_21__["paths"].sourcesEdit;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Route"], {
        exact: true,
        path: _Routes__WEBPACK_IMPORTED_MODULE_21__["paths"].sourcesRemove,
        component: _components_SourceRemoveModal__WEBPACK_IMPORTED_MODULE_19__["default"]
      }), editorNew || editorEdit ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SourceEditModal__WEBPACK_IMPORTED_MODULE_18__["default"], null) : '', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["PageHeaderTitle"], {
        title: "Sources"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Section"], {
        type: "content"
      }, displayEmptyState ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SourcesEmptyState__WEBPACK_IMPORTED_MODULE_17__["default"], null) : _this.renderMainContent()));
    });

    _this.state = {
      itemsPerPage: 10,
      onPage: 1
    };
    return _this;
  }

  return SourcesPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

SourcesPage.propTypes = {
  filterProviders: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  setProviderFilterColumn: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  loadEntities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  loadSourceTypes: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  pageAndSize: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  filterValue: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  loaded: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired,
  numberOfEntities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired,
  // total number of Sources
  location: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired,
  match: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    filterProviders: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["filterProviders"],
    loadEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["loadEntities"],
    loadSourceTypes: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["loadSourceTypes"],
    pageAndSize: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["pageAndSize"],
    setProviderFilterColumn: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["setProviderFilterColumn"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$providers = _ref.providers,
      filterValue = _ref$providers.filterValue,
      loaded = _ref$providers.loaded,
      numberOfEntities = _ref$providers.numberOfEntities;
  return {
    filterValue: filterValue,
    loaded: loaded,
    numberOfEntities: numberOfEntities
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(SourcesPage)));

/***/ }),

/***/ "./src/redux/action-types-listing.js":
/*!*******************************************!*\
  !*** ./src/redux/action-types-listing.js ***!
  \*******************************************/
/*! exports provided: ASYNC_ACTION_TYPES, SORT_LISTING_DATA, PAGE_AND_SIZE_LISTING_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASYNC_ACTION_TYPES", function() { return ASYNC_ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_LISTING_DATA", function() { return SORT_LISTING_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_AND_SIZE_LISTING_DATA", function() { return PAGE_AND_SIZE_LISTING_DATA; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

var asyncActions = ['LOAD_LISTING_DATA'].reduce(function (acc, curr) {
  return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), [curr, "".concat(curr, "_PENDING"), "".concat(curr, "_FULFILLED"), "".concat(curr, "_REJECTED")]);
}, []);
var ASYNC_ACTION_TYPES = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(asyncActions).reduce(function (acc, curr) {
  acc[curr] = curr;
  return acc;
}, {});
var SORT_LISTING_DATA = 'SORT_LISTING_DATA';
var PAGE_AND_SIZE_LISTING_DATA = 'PAGE_AND_SIZE_LISTING_DATA';

/***/ }),

/***/ "./src/redux/action-types-providers.js":
/*!*********************************************!*\
  !*** ./src/redux/action-types-providers.js ***!
  \*********************************************/
/*! exports provided: ACTION_TYPES, SELECT_ENTITY, EXPAND_ENTITY, SORT_ENTITIES, PAGE_AND_SIZE, ADD_PROVIDER, FILTER_PROVIDERS, SET_FILTER_COLUMN, CLOSE_ALERT, ADD_ALERT, SOURCE_EDIT_REQUEST, SOURCE_FOR_EDIT_LOADED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ENTITY", function() { return SELECT_ENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPAND_ENTITY", function() { return EXPAND_ENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_ENTITIES", function() { return SORT_ENTITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_AND_SIZE", function() { return PAGE_AND_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PROVIDER", function() { return ADD_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_PROVIDERS", function() { return FILTER_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FILTER_COLUMN", function() { return SET_FILTER_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_ALERT", function() { return CLOSE_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ALERT", function() { return ADD_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOURCE_EDIT_REQUEST", function() { return SOURCE_EDIT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOURCE_FOR_EDIT_LOADED", function() { return SOURCE_FOR_EDIT_LOADED; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

var asyncActions = ['LOAD_ENTITIES', 'CREATE_SOURCE', 'REMOVE_SOURCE', 'LOAD_SOURCE_TYPES'].reduce(function (acc, curr) {
  return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), [curr, "".concat(curr, "_PENDING"), "".concat(curr, "_FULFILLED"), "".concat(curr, "_REJECTED")]);
}, []);
var ACTION_TYPES = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(asyncActions).reduce(function (acc, curr) {
  acc[curr] = curr;
  return acc;
}, {});
var SELECT_ENTITY = 'SELECT_ENTITY';
var EXPAND_ENTITY = 'EXPAND_ENTITY';
var SORT_ENTITIES = 'SORT_ENTITIES';
var PAGE_AND_SIZE = 'PAGE_AND_SIZE';
var ADD_PROVIDER = 'ADD_PROVIDER';
var FILTER_PROVIDERS = 'FILTER_PROVIDERS';
var SET_FILTER_COLUMN = 'SET_FILTER_COLUMN';
var CLOSE_ALERT = 'CLOSE_ALERT';
var ADD_ALERT = 'ADD_ALERT';
var SOURCE_EDIT_REQUEST = 'SOURCE_EDIT_REQUEST';
var SOURCE_FOR_EDIT_LOADED = 'SOURCE_FOR_EDIT_LOADED';

/***/ }),

/***/ "./src/redux/action-types-topology.js":
/*!********************************************!*\
  !*** ./src/redux/action-types-topology.js ***!
  \********************************************/
/*! exports provided: LOAD_TOPOLOGY, NODE_CLICK_TOPOLOGY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_TOPOLOGY", function() { return LOAD_TOPOLOGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_CLICK_TOPOLOGY", function() { return NODE_CLICK_TOPOLOGY; });
var LOAD_TOPOLOGY = 'LOAD_TOPOLOGY';
var NODE_CLICK_TOPOLOGY = 'NODE_CLICK_TOPOLOGY';

/***/ }),

/***/ "./src/redux/actions/listing.js":
/*!**************************************!*\
  !*** ./src/redux/actions/listing.js ***!
  \**************************************/
/*! exports provided: loadListingData, sortListingData, pageAndSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListingData", function() { return loadListingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortListingData", function() { return sortListingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageAndSize", function() { return pageAndSize; });
/* harmony import */ var _action_types_listing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types-listing */ "./src/redux/action-types-listing.js");
/* harmony import */ var _api_listing_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/listing_view */ "./src/api/listing_view.js");


var loadListingData = function loadListingData(viewDefinition, sourceId) {
  return {
    type: _action_types_listing__WEBPACK_IMPORTED_MODULE_0__["ASYNC_ACTION_TYPES"].LOAD_LISTING_DATA,
    payload: Object(_api_listing_view__WEBPACK_IMPORTED_MODULE_1__["doLoadListingData"])(viewDefinition, sourceId)
  };
};
var sortListingData = function sortListingData(column, direction) {
  return {
    type: _action_types_listing__WEBPACK_IMPORTED_MODULE_0__["SORT_LISTING_DATA"],
    payload: {
      column: column,
      direction: direction
    }
  };
};
var pageAndSize = function pageAndSize(page, size) {
  return {
    type: _action_types_listing__WEBPACK_IMPORTED_MODULE_0__["PAGE_AND_SIZE_LISTING_DATA"],
    payload: {
      page: page,
      size: size
    }
  };
};

/***/ }),

/***/ "./src/redux/actions/providers.js":
/*!****************************************!*\
  !*** ./src/redux/actions/providers.js ***!
  \****************************************/
/*! exports provided: loadEntities, loadSourceTypes, selectEntity, expandEntity, sortEntities, pageAndSize, addProvider, filterProviders, setProviderFilterColumn, closeAlert, addAlert, createSource, updateSource, removeSource, loadSourceForEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEntities", function() { return loadEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSourceTypes", function() { return loadSourceTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntity", function() { return selectEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandEntity", function() { return expandEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortEntities", function() { return sortEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageAndSize", function() { return pageAndSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProvider", function() { return addProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterProviders", function() { return filterProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProviderFilterColumn", function() { return setProviderFilterColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAlert", function() { return closeAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAlert", function() { return addAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSource", function() { return createSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSource", function() { return updateSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSource", function() { return removeSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSourceForEdit", function() { return loadSourceForEdit; });
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-types-providers */ "./src/redux/action-types-providers.js");
/* harmony import */ var _api_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/entities */ "./src/api/entities.js");
/* harmony import */ var _api_source_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/source_types */ "./src/api/source_types.js");




var loadEntities = function loadEntities() {
  return function (dispatch) {
    dispatch({
      type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].LOAD_ENTITIES_PENDING
    });
    return Object(_api_entities__WEBPACK_IMPORTED_MODULE_2__["getEntities"])({}, {}).then(function (response) {
      return dispatch({
        type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].LOAD_ENTITIES_FULFILLED,
        payload: response
      });
    });
  };
};
var loadSourceTypes = function loadSourceTypes() {
  return function (dispatch) {
    dispatch({
      type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].LOAD_SOURCE_TYPES_PENDING
    });
    return Object(_api_source_types__WEBPACK_IMPORTED_MODULE_3__["doLoadSourceTypes"])().then(function (sourceTypes) {
      return dispatch({
        type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].LOAD_SOURCE_TYPES_FULFILLED,
        payload: sourceTypes
      });
    });
  };
};
var selectEntity = function selectEntity(id, selected) {
  return {
    type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["SELECT_ENTITY"],
    payload: {
      id: id,
      selected: selected
    }
  };
};
var expandEntity = function expandEntity(id, expanded) {
  return {
    type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["EXPAND_ENTITY"],
    payload: {
      id: id,
      expanded: expanded
    }
  };
};
var sortEntities = function sortEntities(column, direction) {
  return {
    type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["SORT_ENTITIES"],
    payload: {
      column: column,
      direction: direction
    }
  };
};
var pageAndSize = function pageAndSize(page, size) {
  return {
    type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["PAGE_AND_SIZE"],
    payload: {
      page: page,
      size: size
    }
  };
};
var addProvider = function addProvider(formData) {
  return {
    type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["ADD_PROVIDER"],
    payload: {
      formData: formData
    }
  };
};
var filterProviders = function filterProviders(value) {
  return {
    type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["FILTER_PROVIDERS"],
    payload: {
      value: value
    }
  };
};
var setProviderFilterColumn = function setProviderFilterColumn(column) {
  return {
    type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["SET_FILTER_COLUMN"],
    payload: {
      column: column
    }
  };
};
var closeAlert = function closeAlert() {
  return {
    type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["CLOSE_ALERT"]
  };
};
var addAlert = function addAlert(message, type) {
  return {
    type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["ADD_ALERT"],
    payload: {
      message: message,
      type: type
    }
  };
};
var createSource = function createSource(formData, sourceTypes) {
  return function (dispatch) {
    return Object(_api_entities__WEBPACK_IMPORTED_MODULE_2__["doCreateSource"])(formData, sourceTypes).then(function (_finished) {
      return dispatch({
        type: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_0__["ADD_NOTIFICATION"],
        payload: {
          variant: 'success',
          title: 'Source was created.',
          description: 'The new source was successfully created.'
        }
      });
    }).catch(function (error) {
      return dispatch({
        type: 'FOOBAR_REJECTED',
        payload: error
      });
    });
  };
};
var updateSource = function updateSource(source, formData) {
  return function (dispatch) {
    return Object(_api_entities__WEBPACK_IMPORTED_MODULE_2__["doUpdateSource"])(source, formData).then(function (_finished) {
      return dispatch({
        type: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_0__["ADD_NOTIFICATION"],
        payload: {
          variant: 'success',
          title: "\"".concat(formData.source_name, "\" was modified successfully."),
          description: 'The source was successfully modified.'
        }
      });
    }).catch(function (error) {
      return dispatch({
        type: 'FOOBAR_REJECTED',
        payload: error
      });
    });
  };
};
var removeSource = function removeSource(sourceId) {
  return function (dispatch) {
    return Object(_api_entities__WEBPACK_IMPORTED_MODULE_2__["doRemoveSource"])(sourceId).then(function (_finished) {
      return dispatch({
        type: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_0__["ADD_NOTIFICATION"],
        payload: {
          variant: 'success',
          title: 'Source was removed.',
          description: 'The selected source was removed.'
        }
      });
    }).catch(function (error) {
      return dispatch({
        type: 'FOOBAR_REJECTED',
        payload: error
      });
    });
  };
};
var loadSourceForEdit = function loadSourceForEdit(sourceId) {
  return function (dispatch) {
    dispatch({
      type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["SOURCE_EDIT_REQUEST"]
    });
    return Object(_api_entities__WEBPACK_IMPORTED_MODULE_2__["doLoadSourceForEdit"])(sourceId).then(function (sourceData) {
      return dispatch({
        type: _action_types_providers__WEBPACK_IMPORTED_MODULE_1__["SOURCE_FOR_EDIT_LOADED"],
        payload: sourceData
      });
    }).catch(function (error) {
      return dispatch({
        type: 'FOOBAR_REJECTED',
        payload: error
      });
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/topology.js":
/*!***************************************!*\
  !*** ./src/redux/actions/topology.js ***!
  \***************************************/
/*! exports provided: loadTopology, nodeClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTopology", function() { return loadTopology; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeClick", function() { return nodeClick; });
/* harmony import */ var _action_types_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types-topology */ "./src/redux/action-types-topology.js");

var loadTopology = function loadTopology() {
  return {
    type: _action_types_topology__WEBPACK_IMPORTED_MODULE_0__["LOAD_TOPOLOGY"],
    payload: {}
  };
};
var nodeClick = function nodeClick(node) {
  return {
    type: _action_types_topology__WEBPACK_IMPORTED_MODULE_0__["NODE_CLICK_TOPOLOGY"],
    payload: {
      node: node
    }
  };
};

/***/ }),

/***/ "./src/redux/reducers/listing.js":
/*!***************************************!*\
  !*** ./src/redux/reducers/listing.js ***!
  \***************************************/
/*! exports provided: defaultListingState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultListingState", function() { return defaultListingState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types_listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types-listing */ "./src/redux/action-types-listing.js");
/* harmony import */ var _Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities/listHelpers */ "./src/Utilities/listHelpers.js");



var _ASYNC_ACTION_TYPES$L;



var defaultListingState = {
  loaded: false,
  pageSize: 10,
  pageNumber: 1 // PF numbers pages from 1. Seriously.

};

function loadedListingData(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    loaded: true,
    listingRows: Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["paginateList"])(Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["sortList"])(payload, state.sortBy, state.sortDirection), state.pageNumber, state.pageSize),
    rawRows: payload,
    pageNumber: 1,
    pageSize: 10
  });
}

function sortListingData(state, _ref2) {
  var _ref2$payload = _ref2.payload,
      column = _ref2$payload.column,
      direction = _ref2$payload.direction;
  console.log('sortListingData');
  console.log(column);
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    listingRows: Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["paginateList"])(Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["sortList"])(state.rawRows, column, direction), state.pageNumber, state.pageSize),
    sortBy: column,
    sortDirection: direction
  });
}

function setPageAndSize(state, _ref3) {
  var _ref3$payload = _ref3.payload,
      page = _ref3$payload.page,
      size = _ref3$payload.size;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    listingRows: Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["paginateList"])(Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["sortList"])(state.rawRows, state.sortBy, state.sortDirection), page, size),
    pageSize: size,
    pageNumber: page
  });
}

var listingPending = function listingPending(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    loaded: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_ASYNC_ACTION_TYPES$L = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ASYNC_ACTION_TYPES$L, _action_types_listing__WEBPACK_IMPORTED_MODULE_2__["ASYNC_ACTION_TYPES"].LOAD_LISTING_DATA_FULFILLED, loadedListingData), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ASYNC_ACTION_TYPES$L, _action_types_listing__WEBPACK_IMPORTED_MODULE_2__["ASYNC_ACTION_TYPES"].LOAD_LISTING_DATA_PENDING, listingPending), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ASYNC_ACTION_TYPES$L, _action_types_listing__WEBPACK_IMPORTED_MODULE_2__["SORT_LISTING_DATA"], sortListingData), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ASYNC_ACTION_TYPES$L, _action_types_listing__WEBPACK_IMPORTED_MODULE_2__["PAGE_AND_SIZE_LISTING_DATA"], setPageAndSize), _ASYNC_ACTION_TYPES$L);

/***/ }),

/***/ "./src/redux/reducers/providers.js":
/*!*****************************************!*\
  !*** ./src/redux/reducers/providers.js ***!
  \*****************************************/
/*! exports provided: defaultProvidersState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProvidersState", function() { return defaultProvidersState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types-providers */ "./src/redux/action-types-providers.js");
/* harmony import */ var _Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities/listHelpers */ "./src/Utilities/listHelpers.js");



var _ACTION_TYPES$LOAD_EN;



var defaultProvidersState = {
  loaded: false,
  pageSize: 10,
  pageNumber: 1,
  // PF numbers pages from 1. Seriously.
  entities: [],
  numberOfEntities: 0,
  filterColumn: 'name' // temporary hard-coded filtering by name

};

var processListInState = function processListInState(state) {
  var _processList = Object(_Utilities_listHelpers__WEBPACK_IMPORTED_MODULE_3__["processList"])(state.rows, state),
      length = _processList.length,
      list = _processList.list;

  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    entities: list,
    numberOfEntities: length
  });
};

var entitiesPending = function entitiesPending(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    loaded: false,
    expanded: null
  });
};

var entitiesLoaded = function entitiesLoaded(state, _ref) {
  var rows = _ref.payload.data;
  return processListInState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    loaded: true,
    rows: rows
  }));
};

var sourceTypesPending = function sourceTypesPending(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    sourceTypes: []
  });
};

var sourceTypesLoaded = function sourceTypesLoaded(state, _ref2) {
  var sourceTypes = _ref2.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    sourceTypes: sourceTypes
  });
};

var selectEntity = function selectEntity(state, _ref3) {
  var _ref3$payload = _ref3.payload,
      id = _ref3$payload.id,
      selected = _ref3$payload.selected;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    entities: state.entities.map(function (entity) {
      return entity.id === id ? _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, entity, {
        selected: selected
      }) : entity;
    })
  });
};

var expandEntity = function expandEntity(state, _ref4) {
  var _ref4$payload = _ref4.payload,
      id = _ref4$payload.id,
      _expanded = _ref4$payload._expanded;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    entities: state.entities.map(function (entity) {
      return entity.id === id ? _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, entity, {
        expanded: !entity.expanded
      }) : entity;
    })
  });
};

var sortEntities = function sortEntities(state, _ref5) {
  var _ref5$payload = _ref5.payload,
      column = _ref5$payload.column,
      direction = _ref5$payload.direction;
  return processListInState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    sortBy: column,
    sortDirection: direction
  }));
};

var setPageAndSize = function setPageAndSize(state, _ref6) {
  var _ref6$payload = _ref6.payload,
      page = _ref6$payload.page,
      size = _ref6$payload.size;
  return processListInState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    pageSize: size,
    pageNumber: page
  }));
};

var addProvider = function addProvider(state, _ref7) {
  var formData = _ref7.payload.formData;
  console.log('R: addProvider', formData);
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    // for now just add an alert
    alert: {
      message: 'New source was succesfully added.',
      type: 'success'
    }
  });
};

var filterProviders = function filterProviders(state, _ref8) {
  var value = _ref8.payload.value;
  return processListInState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    filterValue: value,
    pageNumber: 1
  }));
};

var setFilterColumn = function setFilterColumn(state, _ref9) {
  var column = _ref9.payload.column;
  return processListInState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    filterColumn: column,
    pageNumber: 1
  }));
};

var sourceForEditLoaded = function sourceForEditLoaded(state, _ref10) {
  var payload = _ref10.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    source: payload
  });
};

var sourceEditRequest = function sourceEditRequest(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    source: null
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_ACTION_TYPES$LOAD_EN = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["ACTION_TYPES"].LOAD_ENTITIES_PENDING, entitiesPending), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["ACTION_TYPES"].LOAD_ENTITIES_FULFILLED, entitiesLoaded), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["ACTION_TYPES"].LOAD_SOURCE_TYPES_PENDING, sourceTypesPending), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["ACTION_TYPES"].LOAD_SOURCE_TYPES_FULFILLED, sourceTypesLoaded), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["SELECT_ENTITY"], selectEntity), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["EXPAND_ENTITY"], expandEntity), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["SORT_ENTITIES"], sortEntities), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["PAGE_AND_SIZE"], setPageAndSize), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["ADD_PROVIDER"], addProvider), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["FILTER_PROVIDERS"], filterProviders), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["SET_FILTER_COLUMN"], setFilterColumn), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["SOURCE_FOR_EDIT_LOADED"], sourceForEditLoaded), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ACTION_TYPES$LOAD_EN, _action_types_providers__WEBPACK_IMPORTED_MODULE_2__["SOURCE_EDIT_REQUEST"], sourceEditRequest), _ACTION_TYPES$LOAD_EN);

/***/ }),

/***/ "./src/redux/reducers/topology.js":
/*!****************************************!*\
  !*** ./src/redux/reducers/topology.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types_topology__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types-topology */ "./src/redux/action-types-topology.js");
/* harmony import */ var _api_topology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/topology */ "./src/api/topology.js");



var _LOAD_TOPOLOGY$NODE_C;




function loadTopologyData(state) {
  console.log('R: loadTopologyData');
  var nodes = _api_topology__WEBPACK_IMPORTED_MODULE_3__["default"].nodes,
      edges = _api_topology__WEBPACK_IMPORTED_MODULE_3__["default"].edges; // static example data for now

  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    nodes: nodes,
    edges: edges
  });
}

function nodeClickTopology(state, _ref) {
  var node = _ref.payload.node;
  console.log('R: nodeClickTopology', node);
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    activeNode: node
  });
}

/* harmony default export */ __webpack_exports__["default"] = (_LOAD_TOPOLOGY$NODE_C = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_LOAD_TOPOLOGY$NODE_C, _action_types_topology__WEBPACK_IMPORTED_MODULE_2__["LOAD_TOPOLOGY"], loadTopologyData), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_LOAD_TOPOLOGY$NODE_C, _action_types_topology__WEBPACK_IMPORTED_MODULE_2__["NODE_CLICK_TOPOLOGY"], nodeClickTopology), _LOAD_TOPOLOGY$NODE_C);

/***/ }),

/***/ "./src/views/sourcesViewDefinition.js":
/*!********************************************!*\
  !*** ./src/views/sourcesViewDefinition.js ***!
  \********************************************/
/*! exports provided: sourcesViewDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourcesViewDefinition", function() { return sourcesViewDefinition; });
var sourcesViewDefinition = {
  displayName: 'Sources',
  url: '/sources/',

  /* [{"id":"1","name":"OCP","uid":"29e1facc-c769-48d2-914f-c6682314cf54","created_at":"2018-10-25T14:19:27.252Z",
      "updated_at":"2018-10-25T14:19:27.252Z","tenant_id":1}, {"id":"2","name":"foo","uid":null,
      "created_at":"2018-11-01T11:24:24.767Z","updated_at":"2018-11-01T11:24:24.767Z","tenant_id":1}] */
  columns: [{
    title: null,
    value: 'id'
  }, //{ title: null, value: 'source_id', },
  //{ title: null, value: 'source_ref', },
  //{ title: 'Resource version', value: 'resource_version', },
  {
    title: null,
    value: 'uid'
  }, {
    title: 'Name',
    value: 'name',
    searchable: true
  }, {
    title: 'Type',
    value: 'source_type_id',
    searchable: false,
    formatter: 'sourceTypeFormatter'
  }, // this column does not actually exist in the API, but is required by the design
  {
    title: 'Application',
    value: 'applications',
    searchable: false
  }, //{ title: 'Tags', value: 'tags', },
  //{ title: null, value: 'display_name', },
  {
    title: 'Date added',
    value: 'created_at'
  }, //{ title: 'Updated at', value: 'updated_at' },
  //{ title: null, value: 'source_deleted_at', },
  {
    title: null,
    value: 'tenant_id' //{ title: null, value: 'source_created_at', },
    //{ title: 'Archived on', value: 'archived_on', },

  }]
};

/***/ }),

/***/ "./src/views/viewDefinitions.js":
/*!**************************************!*\
  !*** ./src/views/viewDefinitions.js ***!
  \**************************************/
/*! exports provided: viewDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewDefinitions", function() { return viewDefinitions; });
var viewDefinitions = {
  container_projects: {
    displayName: 'Container Projects',
    //url: 'https://topological-inventory-api-topological-inventory-ci.10.8.96.54.nip.io/api/v0.0/sources/1/container_projects/',
    // FIXME
    url: '/r/insights/platform/topological-inventory/v0.0/sources/:id/container_projects/',
    columns: [{
      title: 'ID',
      value: 'id'
    }, {
      title: null,
      value: 'source_id'
    }, {
      title: null,
      value: 'source_ref'
    }, {
      title: 'Resource version',
      value: 'resource_version'
    }, {
      title: 'Name',
      value: 'name'
    }, {
      title: null,
      value: 'display_name'
    }, {
      title: 'Created at',
      value: 'created_at'
    }, {
      title: 'Updated at',
      value: 'updated_at'
    }, {
      title: null,
      value: 'source_deleted_at'
    }, {
      title: null,
      value: 'tenant_id'
    }, {
      title: null,
      value: 'source_created_at'
    }, {
      title: 'Archived on',
      value: 'archived_on'
    }]
  },
  container_groups: {
    // test data for pagination?
    //{"id":"725","source_id":1,"source_ref":"0c478b50-babb-11e8-ba7e-d094660d31fb","resource_version":"42398462","name":"my-ruby-project-2-build","container_project_id":19,"ipaddress":null,"created_at":"2018-10-17T15:59:02.689Z","updated_at":"2018-10-17T15:59:02.689Z","source_deleted_at":null,"tenant_id":null,"container_node_id":4,"source_created_at":"2018-09-17T20:48:36.000Z","archived_on":null}
    displayName: 'Container Groups',
    //url: 'https://topological-inventory-api-topological-inventory-ci.10.8.96.54.nip.io/api/v0.0/sources/1/container_groups/',
    url: '/r/insights/platform/topological-inventory/v0.0/sources/:id/container_groups/',
    columns: [{
      title: 'ID',
      value: 'id'
    }, {
      title: null,
      value: 'source_id'
    }, {
      title: null,
      value: 'source_ref'
    }, {
      title: 'Resource version',
      value: 'resource_version'
    }, {
      title: 'Name',
      value: 'name'
    }, {
      title: 'Container project',
      value: 'container_project_id'
    }, {
      title: 'IP address',
      value: 'ipaddress'
    }, {
      title: 'Created at',
      value: 'created_at'
    }, {
      title: 'Updated at',
      value: 'updated_at'
    }, {
      title: null,
      value: 'source_deleted_at'
    }, {
      title: null,
      value: 'tenant_id'
    }, {
      title: null,
      value: 'source_created_at'
    }, {
      title: 'Archived on',
      value: 'archived_on'
    }]
  },
  container_nodes: {
    displayName: 'Container Nodes',
    //url: 'https://topological-inventory-api-topological-inventory-ci.10.8.96.54.nip.io/api/v0.0/sources/1/container_nodes/',
    url: '/r/insights/platform/topological-inventory/v0.0/sources/:id/container_nodes/',
    // {"id":"4","source_id":1,"source_ref":"a03e9454-0d11-11e8-906a-d094660d31fb","resource_version":"51499636","name":"dell-r430-20.cloudforms.lab.eng.rdu2.redhat.com","cpus":48,"memory":134906109952,"tenant_id":null,"created_at":"2018-10-17T15:32:12.633Z","updated_at":"2018-10-24T03:35:19.656Z","source_deleted_at":null,"source_created_at":"2018-02-08T20:49:58.000Z","archived_on":null}
    columns: [{
      title: 'ID',
      value: 'id'
    }, {
      title: null,
      value: 'source_id'
    }, {
      title: null,
      value: 'source_ref'
    }, {
      title: 'Resource version',
      value: 'resource_version'
    }, {
      title: 'Name',
      value: 'name'
    }, {
      title: '# of CPUs',
      value: 'cpus'
    }, {
      title: 'Memory',
      value: 'memory'
    }, {
      title: 'Created at',
      value: 'created_at'
    }, {
      title: 'Updated at',
      value: 'updated_at'
    }, {
      title: null,
      value: 'source_deleted_at'
    }, {
      title: null,
      value: 'tenant_id'
    }, {
      title: null,
      value: 'source_created_at'
    }, {
      title: 'Archived on',
      value: 'archived_on'
    }]
  },
  container_templates: {
    displayName: 'Container Templates',
    //url: 'https://topological-inventory-api-topological-inventory-ci.10.8.96.54.nip.io/api/v0.0/sources/1/container_templates/',
    url: '/r/insights/platform/topological-inventory/v0.0/sources/:id/container_templates/',
    // {"id":"131","source_id":1,"source_ref":"1e443dec-594a-11e8-ba7e-d094660d31fb","resource_version":"1689429","container_project_id":null,"created_at":"2018-10-17T15:32:12.764Z","updated_at":"2018-10-24T03:24:50.980Z","source_deleted_at":null,"tenant_id":null,"source_created_at":"2018-05-16T20:45:50.000Z","name":"nginx-example","archived_on":null}
    columns: [{
      title: 'ID',
      value: 'id'
    }, {
      title: null,
      value: 'source_id'
    }, {
      title: null,
      value: 'source_ref'
    }, {
      title: 'Resource version',
      value: 'resource_version'
    }, {
      title: 'Name',
      value: 'name'
    }, {
      title: 'Container project',
      value: 'container_project_id'
    }, {
      title: '# of CPUs',
      value: 'cpus'
    }, {
      title: 'Memory',
      value: 'memory'
    }, {
      title: 'Created at',
      value: 'created_at'
    }, {
      title: 'Updated at',
      value: 'updated_at'
    }, {
      title: null,
      value: 'source_deleted_at'
    }, {
      title: null,
      value: 'tenant_id'
    }, {
      title: null,
      value: 'source_created_at'
    }, {
      title: 'Archived on',
      value: 'archived_on'
    }]
  }
};

/***/ })

/******/ });
//# sourceMappingURL=../sourcemaps/App.js.map