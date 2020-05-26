/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Font Awesome Free 5.13.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Currency.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Currency.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      chart: null,
      chartBar: {
        date: null,
        o: 0,
        h: 0,
        l: 0,
        c: 0
      },
      barCount: 60,
      initialDateStr: '01 Apr 2017 00:00 Z'
    };
  },
  methods: {
    createChart: function createChart(data) {
      this.chart = new Chart(document.getElementById('chart').getContext('2d'), {
        type: 'candlestick',
        data: {
          datasets: [{
            label: this.$route.params.currency.toUpperCase() + ' - Price chart',
            data: data
          }]
        },
        options: {
          scales: {
            x: {
              afterBuildTicks: function afterBuildTicks(scale) {
                var majorUnit = scale._majorUnit;
                var ticks = scale.ticks;
                var firstTick = ticks[0];
                var i, ilen, val, tick, currMajor, lastMajor;
                val = luxon.DateTime.fromMillis(ticks[0].value);
                firstTick.major = majorUnit === 'minute' && val.second === 0 || majorUnit === 'hour' && val.minute === 0 || majorUnit === 'day' && val.hour === 9 || majorUnit === 'month' && val.day <= 3 && val.weekday === 1 || majorUnit === 'year' && val.month === 0;
                lastMajor = val.get(majorUnit);

                for (i = 1, ilen = ticks.length; i < ilen; i++) {
                  tick = ticks[i];
                  val = luxon.DateTime.fromMillis(tick.value);
                  currMajor = val.get(majorUnit);
                  tick.major = currMajor !== lastMajor;
                  lastMajor = currMajor;
                }

                return ticks;
              }
            }
          }
        }
      });
    },
    update: function update() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var dataset = this.chart.config.data.datasets[0]; // candlestick vs ohlc

      var type = document.getElementById('type').value;
      dataset.type = type;

      if (data !== null) {
        this.chart.config.data = data;
      } // linear vs log


      var scaleType = document.getElementById('scale-type').value;
      this.chart.config.options.scales.y.type = scaleType; // color

      var colorScheme = document.getElementById('color-scheme').value;

      if (colorScheme === 'neon') {
        dataset.color = {
          up: '#01ff01',
          down: '#fe0000',
          unchanged: '#999'
        };
      } else {
        delete dataset.color;
      } // border


      var border = document.getElementById('border').value;
      var defaultOpts = Chart.defaults.elements[type];

      if (border === 'true') {
        dataset.borderColor = defaultOpts.borderColor;
      } else {
        dataset.borderColor = {
          up: defaultOpts.color.up,
          down: defaultOpts.color.down,
          unchanged: defaultOpts.color.up
        };
      }

      this.chart.update();
    },
    getData: function getData(baseSymbol, quoteSymbol, interval, callback) {
      var data = [];
      var startTime = luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"].local().setZone('America/New_York').minus({
        month: 2
      }).toISO();
      var proxyurl = "https://cors-anywhere.herokuapp.com/";
      var that = this;
      axios.get(proxyurl + "https://dev-api.shrimpy.io/v1/exchanges/coinbasepro/candles?quoteTradingSymbol=".concat(quoteSymbol, "&baseTradingSymbol=").concat(baseSymbol, "&interval=").concat(interval, "&startTime=").concat(startTime), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Credentials": "true"
        }
      }).then(function (response) {
        for (var d in response.data) {
          var bar = response.data[d];
          data.push({
            t: bar.time,
            o: bar.open,
            h: bar.high,
            l: bar.low,
            c: bar.close
          });
        }

        callback(data);
      });
    }
  },
  mounted: function mounted() {
    var that = this;
    this.getData('BTC', 'USD', '1D', function (data) {
      that.createChart(data);
    });
    /*setInterval(function(){
      that.getData('BTC', 'USD', '1D', function(data){
        if(that.chart !== null){
          that.chart.destroy();
        }
        that.createChart(data);
      })
    }, 20000);*/
  },
  watch: {
    $route: function $route(to, from) {
      console.log('lol');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted');
    new Chart(document.getElementById("chartjs-0"), {
      "type": "line",
      "data": {
        "labels": ["January", "February", "March", "April", "May", "June", "July"],
        "datasets": [{
          "label": "Views",
          "data": [65, 59, 80, 81, 56, 55, 40],
          "fill": false,
          "borderColor": "rgb(75, 192, 192)",
          "lineTension": 0.1
        }]
      },
      "options": {}
    });
    new Chart(document.getElementById("chartjs-1"), {
      "type": "bar",
      "data": {
        "labels": ["January", "February", "March", "April", "May", "June", "July"],
        "datasets": [{
          "label": "Likes",
          "data": [65, 59, 80, 81, 56, 55, 40],
          "fill": false,
          "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
          "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
          "borderWidth": 1
        }]
      },
      "options": {
        "scales": {
          "yAxes": [{
            "ticks": {
              "beginAtZero": true
            }
          }]
        }
      }
    });
    new Chart(document.getElementById("chartjs-4"), {
      "type": "doughnut",
      "data": {
        "labels": ["P1", "P2", "P3"],
        "datasets": [{
          "label": "Issues",
          "data": [300, 50, 100],
          "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
        }]
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/errors/NotFound.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/errors/NotFound.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/Footer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/Footer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/Navbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/Navbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted');
  }
});

/***/ }),

/***/ "./node_modules/chart.js/dist/Chart.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/chart.js/dist/Chart.esm.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Chart.js v3.0.0-alpha
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function noop() {}
var uid = function () {
  var id = 0;
  return function () {
    return id++;
  };
}();
function isNullOrUndef(value) {
  return value === null || typeof value === 'undefined';
}
function isArray(value) {
  if (Array.isArray && Array.isArray(value)) {
    return true;
  }
  var type = Object.prototype.toString.call(value);
  if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
    return true;
  }
  return false;
}
function isObject(value) {
  return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}
var isNumberFinite = value => (typeof value === 'number' || value instanceof Number) && isFinite(+value);
function valueOrDefault(value, defaultValue) {
  return typeof value === 'undefined' ? defaultValue : value;
}
function valueAtIndexOrDefault(value, index, defaultValue) {
  return valueOrDefault(isArray(value) ? value[index] : value, defaultValue);
}
function callback(fn, args, thisArg) {
  if (fn && typeof fn.call === 'function') {
    return fn.apply(thisArg, args);
  }
}
function each(loopable, fn, thisArg, reverse) {
  var i, len, keys;
  if (isArray(loopable)) {
    len = loopable.length;
    if (reverse) {
      for (i = len - 1; i >= 0; i--) {
        fn.call(thisArg, loopable[i], i);
      }
    } else {
      for (i = 0; i < len; i++) {
        fn.call(thisArg, loopable[i], i);
      }
    }
  } else if (isObject(loopable)) {
    keys = Object.keys(loopable);
    len = keys.length;
    for (i = 0; i < len; i++) {
      fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
  }
}
function arrayEquals(a0, a1) {
  var i, ilen, v0, v1;
  if (!a0 || !a1 || a0.length !== a1.length) {
    return false;
  }
  for (i = 0, ilen = a0.length; i < ilen; ++i) {
    v0 = a0[i];
    v1 = a1[i];
    if (v0 instanceof Array && v1 instanceof Array) {
      if (!arrayEquals(v0, v1)) {
        return false;
      }
    } else if (v0 !== v1) {
      return false;
    }
  }
  return true;
}
function _elementsEqual(a0, a1) {
  var i, ilen, v0, v1;
  if (!a0 || !a1 || a0.length !== a1.length) {
    return false;
  }
  for (i = 0, ilen = a0.length; i < ilen; ++i) {
    v0 = a0[i];
    v1 = a1[i];
    if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
      return false;
    }
  }
  return true;
}
function clone(source) {
  if (isArray(source)) {
    return source.map(clone);
  }
  if (isObject(source)) {
    var target = {};
    var keys = Object.keys(source);
    var klen = keys.length;
    var k = 0;
    for (; k < klen; ++k) {
      target[keys[k]] = clone(source[keys[k]]);
    }
    return target;
  }
  return source;
}
function _merger(key, target, source, options) {
  var tval = target[key];
  var sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    merge(tval, sval, options);
  } else {
    target[key] = clone(sval);
  }
}
function merge(target, source, options) {
  var sources = isArray(source) ? source : [source];
  var ilen = sources.length;
  if (!isObject(target)) {
    return target;
  }
  options = options || {};
  var merger = options.merger || _merger;
  for (var i = 0; i < ilen; ++i) {
    source = sources[i];
    if (!isObject(source)) {
      continue;
    }
    var keys = Object.keys(source);
    for (var k = 0, klen = keys.length; k < klen; ++k) {
      merger(keys[k], target, source, options);
    }
  }
  return target;
}
function mergeIf(target, source) {
  return merge(target, source, {
    merger: _mergerIf
  });
}
function _mergerIf(key, target, source) {
  var tval = target[key];
  var sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    mergeIf(tval, sval);
  } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
    target[key] = clone(sval);
  }
}
function inherits(extensions) {
  var me = this;
  var ChartElement = extensions && Object.prototype.hasOwnProperty.call(extensions, 'constructor') ? extensions.constructor : function () {
    return me.apply(this, arguments);
  };
  var Surrogate = function Surrogate() {
    this.constructor = ChartElement;
  };
  Surrogate.prototype = me.prototype;
  ChartElement.prototype = new Surrogate();
  ChartElement.extend = inherits;
  if (extensions) {
    _extends(ChartElement.prototype, extensions);
  }
  ChartElement.__super__ = me.prototype;
  return ChartElement;
}
function _deprecated(scope, value, previous, current) {
  if (value !== undefined) {
    console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
  }
}

var coreHelpers = /*#__PURE__*/Object.freeze({
__proto__: null,
noop: noop,
uid: uid,
isNullOrUndef: isNullOrUndef,
isArray: isArray,
isObject: isObject,
isFinite: isNumberFinite,
valueOrDefault: valueOrDefault,
valueAtIndexOrDefault: valueAtIndexOrDefault,
callback: callback,
each: each,
arrayEquals: arrayEquals,
_elementsEqual: _elementsEqual,
clone: clone,
_merger: _merger,
merge: merge,
mergeIf: mergeIf,
_mergerIf: _mergerIf,
inherits: inherits,
_deprecated: _deprecated
});

var PI = Math.PI;
var RAD_PER_DEG = PI / 180;
var DOUBLE_PI = PI * 2;
var HALF_PI = PI / 2;
var QUARTER_PI = PI / 4;
var TWO_THIRDS_PI = PI * 2 / 3;
function _measureText(ctx, data, gc, longest, string) {
  var textWidth = data[string];
  if (!textWidth) {
    textWidth = data[string] = ctx.measureText(string).width;
    gc.push(string);
  }
  if (textWidth > longest) {
    longest = textWidth;
  }
  return longest;
}
function _longestText(ctx, font, arrayOfThings, cache) {
  cache = cache || {};
  var data = cache.data = cache.data || {};
  var gc = cache.garbageCollect = cache.garbageCollect || [];
  if (cache.font !== font) {
    data = cache.data = {};
    gc = cache.garbageCollect = [];
    cache.font = font;
  }
  ctx.save();
  ctx.font = font;
  var longest = 0;
  var ilen = arrayOfThings.length;
  var i, j, jlen, thing, nestedThing;
  for (i = 0; i < ilen; i++) {
    thing = arrayOfThings[i];
    if (thing !== undefined && thing !== null && isArray(thing) !== true) {
      longest = _measureText(ctx, data, gc, longest, thing);
    } else if (isArray(thing)) {
      for (j = 0, jlen = thing.length; j < jlen; j++) {
        nestedThing = thing[j];
        if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) {
          longest = _measureText(ctx, data, gc, longest, nestedThing);
        }
      }
    }
  }
  ctx.restore();
  var gcLen = gc.length / 2;
  if (gcLen > arrayOfThings.length) {
    for (i = 0; i < gcLen; i++) {
      delete data[gc[i]];
    }
    gc.splice(0, gcLen);
  }
  return longest;
}
function _alignPixel(chart, pixel, width) {
  var devicePixelRatio = chart.currentDevicePixelRatio;
  var halfWidth = width / 2;
  return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
function clear(chart) {
  chart.ctx.clearRect(0, 0, chart.width, chart.height);
}
function drawPoint(ctx, options, x, y) {
  var type, xOffset, yOffset, size, cornerRadius;
  var style = options.pointStyle;
  var rotation = options.rotation;
  var radius = options.radius;
  var rad = (rotation || 0) * RAD_PER_DEG;
  if (style && typeof style === 'object') {
    type = style.toString();
    if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rad);
      ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
      ctx.restore();
      return;
    }
  }
  if (isNaN(radius) || radius <= 0) {
    return;
  }
  ctx.beginPath();
  switch (style) {
    default:
      ctx.arc(x, y, radius, 0, DOUBLE_PI);
      ctx.closePath();
      break;
    case 'triangle':
      ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
      rad += TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
      rad += TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
      ctx.closePath();
      break;
    case 'rectRounded':
      cornerRadius = radius * 0.516;
      size = radius - cornerRadius;
      xOffset = Math.cos(rad + QUARTER_PI) * size;
      yOffset = Math.sin(rad + QUARTER_PI) * size;
      ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
      ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
      ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
      ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
      ctx.closePath();
      break;
    case 'rect':
      if (!rotation) {
        size = Math.SQRT1_2 * radius;
        ctx.rect(x - size, y - size, 2 * size, 2 * size);
        break;
      }
      rad += QUARTER_PI;
    case 'rectRot':
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + yOffset, y - xOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.lineTo(x - yOffset, y + xOffset);
      ctx.closePath();
      break;
    case 'crossRot':
      rad += QUARTER_PI;
    case 'cross':
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.moveTo(x + yOffset, y - xOffset);
      ctx.lineTo(x - yOffset, y + xOffset);
      break;
    case 'star':
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.moveTo(x + yOffset, y - xOffset);
      ctx.lineTo(x - yOffset, y + xOffset);
      rad += QUARTER_PI;
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      ctx.moveTo(x + yOffset, y - xOffset);
      ctx.lineTo(x - yOffset, y + xOffset);
      break;
    case 'line':
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      break;
    case 'dash':
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
      break;
  }
  ctx.fill();
  if (options.borderWidth > 0) {
    ctx.stroke();
  }
}
function _isPointInArea(point, area) {
  var epsilon = 0.5;
  return point.x > area.left - epsilon && point.x < area.right + epsilon && point.y > area.top - epsilon && point.y < area.bottom + epsilon;
}
function clipArea(ctx, area) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
  ctx.clip();
}
function unclipArea(ctx) {
  ctx.restore();
}
function _steppedLineTo(ctx, previous, target, flip, mode) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  if (mode === 'middle') {
    var midpoint = (previous.x + target.x) / 2.0;
    ctx.lineTo(midpoint, previous.y);
    ctx.lineTo(midpoint, target.y);
  } else if (mode === 'after' !== !!flip) {
    ctx.lineTo(previous.x, target.y);
  } else {
    ctx.lineTo(target.x, previous.y);
  }
  ctx.lineTo(target.x, target.y);
}
function _bezierCurveTo(ctx, previous, target, flip) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  ctx.bezierCurveTo(flip ? previous.controlPointPreviousX : previous.controlPointNextX, flip ? previous.controlPointPreviousY : previous.controlPointNextY, flip ? target.controlPointNextX : target.controlPointPreviousX, flip ? target.controlPointNextY : target.controlPointPreviousY, target.x, target.y);
}

var canvas = /*#__PURE__*/Object.freeze({
__proto__: null,
_measureText: _measureText,
_longestText: _longestText,
_alignPixel: _alignPixel,
clear: clear,
drawPoint: drawPoint,
_isPointInArea: _isPointInArea,
clipArea: clipArea,
unclipArea: unclipArea,
_steppedLineTo: _steppedLineTo,
_bezierCurveTo: _bezierCurveTo
});

var PI$1 = Math.PI;
var TAU = 2 * PI$1;
var PITAU = TAU + PI$1;
function _factorize(value) {
  var result = [];
  var sqrt = Math.sqrt(value);
  var i;
  for (i = 1; i < sqrt; i++) {
    if (value % i === 0) {
      result.push(i);
      result.push(value / i);
    }
  }
  if (sqrt === (sqrt | 0)) {
    result.push(sqrt);
  }
  result.sort((a, b) => a - b).pop();
  return result;
}
var log10 = Math.log10 || function (x) {
  var exponent = Math.log(x) * Math.LOG10E;
  var powerOf10 = Math.round(exponent);
  var isPowerOf10 = x === Math.pow(10, powerOf10);
  return isPowerOf10 ? powerOf10 : exponent;
};
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function almostEquals(x, y, epsilon) {
  return Math.abs(x - y) < epsilon;
}
function almostWhole(x, epsilon) {
  var rounded = Math.round(x);
  return rounded - epsilon <= x && rounded + epsilon >= x;
}
function _setMinAndMaxByKey(array, target, property) {
  var i, ilen, value;
  for (i = 0, ilen = array.length; i < ilen; i++) {
    value = array[i][property];
    if (!isNaN(value)) {
      target.min = Math.min(target.min, value);
      target.max = Math.max(target.max, value);
    }
  }
}
var sign = Math.sign ? function (x) {
  return Math.sign(x);
} : function (x) {
  x = +x;
  if (x === 0 || isNaN(x)) {
    return x;
  }
  return x > 0 ? 1 : -1;
};
function toRadians(degrees) {
  return degrees * (PI$1 / 180);
}
function toDegrees(radians) {
  return radians * (180 / PI$1);
}
function _decimalPlaces(x) {
  if (!isNumberFinite(x)) {
    return;
  }
  var e = 1;
  var p = 0;
  while (Math.round(x * e) / e !== x) {
    e *= 10;
    p++;
  }
  return p;
}
function getAngleFromPoint(centrePoint, anglePoint) {
  var distanceFromXCenter = anglePoint.x - centrePoint.x;
  var distanceFromYCenter = anglePoint.y - centrePoint.y;
  var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
  var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
  if (angle < -0.5 * PI$1) {
    angle += TAU;
  }
  return {
    angle,
    distance: radialDistanceFromCenter
  };
}
function distanceBetweenPoints(pt1, pt2) {
  return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
function _angleDiff(a, b) {
  return (a - b + PITAU) % TAU - PI$1;
}
function _normalizeAngle(a) {
  return (a % TAU + TAU) % TAU;
}
function _angleBetween(angle, start, end) {
  var a = _normalizeAngle(angle);
  var s = _normalizeAngle(start);
  var e = _normalizeAngle(end);
  var angleToStart = _normalizeAngle(s - a);
  var angleToEnd = _normalizeAngle(e - a);
  var startToAngle = _normalizeAngle(a - s);
  var endToAngle = _normalizeAngle(a - e);
  return a === s || a === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
function _limitValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

var math = /*#__PURE__*/Object.freeze({
__proto__: null,
_factorize: _factorize,
log10: log10,
isNumber: isNumber,
almostEquals: almostEquals,
almostWhole: almostWhole,
_setMinAndMaxByKey: _setMinAndMaxByKey,
sign: sign,
toRadians: toRadians,
toDegrees: toDegrees,
_decimalPlaces: _decimalPlaces,
getAngleFromPoint: getAngleFromPoint,
distanceBetweenPoints: distanceBetweenPoints,
_angleDiff: _angleDiff,
_normalizeAngle: _normalizeAngle,
_angleBetween: _angleBetween,
_limitValue: _limitValue
});

var EPSILON = Number.EPSILON || 1e-14;
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
  var previous = firstPoint.skip ? middlePoint : firstPoint;
  var current = middlePoint;
  var next = afterPoint.skip ? middlePoint : afterPoint;
  var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
  var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));
  var s01 = d01 / (d01 + d12);
  var s12 = d12 / (d01 + d12);
  s01 = isNaN(s01) ? 0 : s01;
  s12 = isNaN(s12) ? 0 : s12;
  var fa = t * s01;
  var fb = t * s12;
  return {
    previous: {
      x: current.x - fa * (next.x - previous.x),
      y: current.y - fa * (next.y - previous.y)
    },
    next: {
      x: current.x + fb * (next.x - previous.x),
      y: current.y + fb * (next.y - previous.y)
    }
  };
}
function splineCurveMonotone(points) {
  var pointsWithTangents = (points || []).map(point => ({
    model: point,
    deltaK: 0,
    mK: 0
  }));
  var pointsLen = pointsWithTangents.length;
  var i, pointBefore, pointCurrent, pointAfter;
  for (i = 0; i < pointsLen; ++i) {
    pointCurrent = pointsWithTangents[i];
    if (pointCurrent.model.skip) {
      continue;
    }
    pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
    pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
    if (pointAfter && !pointAfter.model.skip) {
      var slopeDeltaX = pointAfter.model.x - pointCurrent.model.x;
      pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
    }
    if (!pointBefore || pointBefore.model.skip) {
      pointCurrent.mK = pointCurrent.deltaK;
    } else if (!pointAfter || pointAfter.model.skip) {
      pointCurrent.mK = pointBefore.deltaK;
    } else if (sign(pointBefore.deltaK) !== sign(pointCurrent.deltaK)) {
      pointCurrent.mK = 0;
    } else {
      pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
    }
  }
  var alphaK, betaK, tauK, squaredMagnitude;
  for (i = 0; i < pointsLen - 1; ++i) {
    pointCurrent = pointsWithTangents[i];
    pointAfter = pointsWithTangents[i + 1];
    if (pointCurrent.model.skip || pointAfter.model.skip) {
      continue;
    }
    if (almostEquals(pointCurrent.deltaK, 0, EPSILON)) {
      pointCurrent.mK = pointAfter.mK = 0;
      continue;
    }
    alphaK = pointCurrent.mK / pointCurrent.deltaK;
    betaK = pointAfter.mK / pointCurrent.deltaK;
    squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
    if (squaredMagnitude <= 9) {
      continue;
    }
    tauK = 3 / Math.sqrt(squaredMagnitude);
    pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
    pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
  }
  var deltaX;
  for (i = 0; i < pointsLen; ++i) {
    pointCurrent = pointsWithTangents[i];
    if (pointCurrent.model.skip) {
      continue;
    }
    pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
    pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
    if (pointBefore && !pointBefore.model.skip) {
      deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
      pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
      pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
    }
    if (pointAfter && !pointAfter.model.skip) {
      deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
      pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
      pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
    }
  }
}
function capControlPoint(pt, min, max) {
  return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
  var i, ilen, point;
  for (i = 0, ilen = points.length; i < ilen; ++i) {
    point = points[i];
    if (!_isPointInArea(point, area)) {
      continue;
    }
    if (i > 0 && _isPointInArea(points[i - 1], area)) {
      point.controlPointPreviousX = capControlPoint(point.controlPointPreviousX, area.left, area.right);
      point.controlPointPreviousY = capControlPoint(point.controlPointPreviousY, area.top, area.bottom);
    }
    if (i < points.length - 1 && _isPointInArea(points[i + 1], area)) {
      point.controlPointNextX = capControlPoint(point.controlPointNextX, area.left, area.right);
      point.controlPointNextY = capControlPoint(point.controlPointNextY, area.top, area.bottom);
    }
  }
}
function _updateBezierControlPoints(points, options, area, loop) {
  var i, ilen, point, controlPoints;
  if (options.spanGaps) {
    points = points.filter(pt => !pt.skip);
  }
  if (options.cubicInterpolationMode === 'monotone') {
    splineCurveMonotone(points);
  } else {
    var prev = loop ? points[points.length - 1] : points[0];
    for (i = 0, ilen = points.length; i < ilen; ++i) {
      point = points[i];
      controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
      point.controlPointPreviousX = controlPoints.previous.x;
      point.controlPointPreviousY = controlPoints.previous.y;
      point.controlPointNextX = controlPoints.next.x;
      point.controlPointNextY = controlPoints.next.y;
      prev = point;
    }
  }
  if (options.capBezierPoints) {
    capBezierPoints(points, area);
  }
}

var curve = /*#__PURE__*/Object.freeze({
__proto__: null,
splineCurve: splineCurve,
splineCurveMonotone: splineCurveMonotone,
_updateBezierControlPoints: _updateBezierControlPoints
});

function isConstrainedValue(value) {
  return value !== undefined && value !== null && value !== 'none';
}
function _getParentNode(domNode) {
  var parent = domNode.parentNode;
  if (parent && parent.toString() === '[object ShadowRoot]') {
    parent = parent.host;
  }
  return parent;
}
function parseMaxStyle(styleValue, node, parentProperty) {
  var valueInPixels;
  if (typeof styleValue === 'string') {
    valueInPixels = parseInt(styleValue, 10);
    if (styleValue.indexOf('%') !== -1) {
      valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    }
  } else {
    valueInPixels = styleValue;
  }
  return valueInPixels;
}
function getConstraintDimension(domNode, maxStyle, percentageProperty) {
  var view = document.defaultView;
  var parentNode = _getParentNode(domNode);
  var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
  var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
  var hasCNode = isConstrainedValue(constrainedNode);
  var hasCContainer = isConstrainedValue(constrainedContainer);
  var infinity = Number.POSITIVE_INFINITY;
  if (hasCNode || hasCContainer) {
    return Math.min(hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity, hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
  }
}
function getStyle(el, property) {
  return el.currentStyle ? el.currentStyle[property] : document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
}
function getConstraintWidth(domNode) {
  return getConstraintDimension(domNode, 'max-width', 'clientWidth');
}
function getConstraintHeight(domNode) {
  return getConstraintDimension(domNode, 'max-height', 'clientHeight');
}
function _calculatePadding(container, padding, parentDimension) {
  padding = getStyle(container, padding);
  return padding.indexOf('%') > -1 ? parentDimension * parseInt(padding, 10) / 100 : parseInt(padding, 10);
}
function getRelativePosition(evt, chart) {
  var mouseX, mouseY;
  var e = evt.originalEvent || evt;
  var canvasElement = evt.target || evt.srcElement;
  var boundingRect = canvasElement.getBoundingClientRect();
  var touches = e.touches;
  if (touches && touches.length > 0) {
    mouseX = touches[0].clientX;
    mouseY = touches[0].clientY;
  } else {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }
  var paddingLeft = parseFloat(getStyle(canvasElement, 'padding-left'));
  var paddingTop = parseFloat(getStyle(canvasElement, 'padding-top'));
  var paddingRight = parseFloat(getStyle(canvasElement, 'padding-right'));
  var paddingBottom = parseFloat(getStyle(canvasElement, 'padding-bottom'));
  var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
  var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;
  mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / width * canvasElement.width / chart.currentDevicePixelRatio);
  mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / height * canvasElement.height / chart.currentDevicePixelRatio);
  return {
    x: mouseX,
    y: mouseY
  };
}
function getMaximumWidth(domNode) {
  var container = _getParentNode(domNode);
  if (!container) {
    if (typeof domNode.clientWidth === 'number') {
      return domNode.clientWidth;
    }
    return domNode.width;
  }
  var clientWidth = container.clientWidth;
  var paddingLeft = _calculatePadding(container, 'padding-left', clientWidth);
  var paddingRight = _calculatePadding(container, 'padding-right', clientWidth);
  var w = clientWidth - paddingLeft - paddingRight;
  var cw = getConstraintWidth(domNode);
  return isNaN(cw) ? w : Math.min(w, cw);
}
function getMaximumHeight(domNode) {
  var container = _getParentNode(domNode);
  if (!container) {
    if (typeof domNode.clientHeight === 'number') {
      return domNode.clientHeight;
    }
    return domNode.height;
  }
  var clientHeight = container.clientHeight;
  var paddingTop = _calculatePadding(container, 'padding-top', clientHeight);
  var paddingBottom = _calculatePadding(container, 'padding-bottom', clientHeight);
  var h = clientHeight - paddingTop - paddingBottom;
  var ch = getConstraintHeight(domNode);
  return isNaN(ch) ? h : Math.min(h, ch);
}
function retinaScale(chart, forceRatio) {
  var pixelRatio = chart.currentDevicePixelRatio = forceRatio || typeof window !== 'undefined' && window.devicePixelRatio || 1;
  var {
    canvas,
    width,
    height
  } = chart;
  canvas.height = height * pixelRatio;
  canvas.width = width * pixelRatio;
  chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  if (canvas.style && !canvas.style.height && !canvas.style.width) {
    canvas.style.height = height + 'px';
    canvas.style.width = width + 'px';
  }
}

var dom = /*#__PURE__*/Object.freeze({
__proto__: null,
_getParentNode: _getParentNode,
getStyle: getStyle,
getRelativePosition: getRelativePosition,
getMaximumWidth: getMaximumWidth,
getMaximumHeight: getMaximumHeight,
retinaScale: retinaScale
});

var effects = {
  linear(t) {
    return t;
  },
  easeInQuad(t) {
    return t * t;
  },
  easeOutQuad(t) {
    return -t * (t - 2);
  },
  easeInOutQuad(t) {
    if ((t /= 0.5) < 1) {
      return 0.5 * t * t;
    }
    return -0.5 * (--t * (t - 2) - 1);
  },
  easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic(t) {
    return (t -= 1) * t * t + 1;
  },
  easeInOutCubic(t) {
    if ((t /= 0.5) < 1) {
      return 0.5 * t * t * t;
    }
    return 0.5 * ((t -= 2) * t * t + 2);
  },
  easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart(t) {
    return -((t -= 1) * t * t * t - 1);
  },
  easeInOutQuart(t) {
    if ((t /= 0.5) < 1) {
      return 0.5 * t * t * t * t;
    }
    return -0.5 * ((t -= 2) * t * t * t - 2);
  },
  easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint(t) {
    return (t -= 1) * t * t * t * t + 1;
  },
  easeInOutQuint(t) {
    if ((t /= 0.5) < 1) {
      return 0.5 * t * t * t * t * t;
    }
    return 0.5 * ((t -= 2) * t * t * t * t + 2);
  },
  easeInSine(t) {
    return -Math.cos(t * (Math.PI / 2)) + 1;
  },
  easeOutSine(t) {
    return Math.sin(t * (Math.PI / 2));
  },
  easeInOutSine(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
  },
  easeInExpo(t) {
    return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
  },
  easeOutExpo(t) {
    return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
  },
  easeInOutExpo(t) {
    if (t === 0) {
      return 0;
    }
    if (t === 1) {
      return 1;
    }
    if ((t /= 0.5) < 1) {
      return 0.5 * Math.pow(2, 10 * (t - 1));
    }
    return 0.5 * (-Math.pow(2, -10 * --t) + 2);
  },
  easeInCirc(t) {
    if (t >= 1) {
      return t;
    }
    return -(Math.sqrt(1 - t * t) - 1);
  },
  easeOutCirc(t) {
    return Math.sqrt(1 - (t -= 1) * t);
  },
  easeInOutCirc(t) {
    if ((t /= 0.5) < 1) {
      return -0.5 * (Math.sqrt(1 - t * t) - 1);
    }
    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  },
  easeInElastic(t) {
    var s = 1.70158;
    var p = 0;
    var a = 1;
    if (t === 0) {
      return 0;
    }
    if (t === 1) {
      return 1;
    }
    if (!p) {
      p = 0.3;
    }
    {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
  },
  easeOutElastic(t) {
    var s = 1.70158;
    var p = 0;
    var a = 1;
    if (t === 0) {
      return 0;
    }
    if (t === 1) {
      return 1;
    }
    if (!p) {
      p = 0.3;
    }
    {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
  },
  easeInOutElastic(t) {
    var s = 1.70158;
    var p = 0;
    var a = 1;
    if (t === 0) {
      return 0;
    }
    if ((t /= 0.5) === 2) {
      return 1;
    }
    if (!p) {
      p = 0.45;
    }
    {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
  },
  easeInBack(t) {
    var s = 1.70158;
    return t * t * ((s + 1) * t - s);
  },
  easeOutBack(t) {
    var s = 1.70158;
    return (t -= 1) * t * ((s + 1) * t + s) + 1;
  },
  easeInOutBack(t) {
    var s = 1.70158;
    if ((t /= 0.5) < 1) {
      return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
    }
    return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
  },
  easeInBounce(t) {
    return 1 - effects.easeOutBounce(1 - t);
  },
  easeOutBounce(t) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    }
    if (t < 2 / 2.75) {
      return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    }
    if (t < 2.5 / 2.75) {
      return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    }
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  easeInOutBounce(t) {
    if (t < 0.5) {
      return effects.easeInBounce(t * 2) * 0.5;
    }
    return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
  }
};

class Defaults {
  constructor() {
    this.color = 'rgba(0,0,0,0.1)';
    this.elements = {};
    this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'];
    this.fontColor = '#666';
    this.fontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
    this.fontSize = 12;
    this.fontStyle = 'normal';
    this.lineHeight = 1.2;
    this.hover = {
      onHover: null,
      mode: 'nearest',
      intersect: true
    };
    this.maintainAspectRatio = true;
    this.onClick = null;
    this.responsive = true;
    this.showLines = true;
    this.plugins = undefined;
    this.scale = undefined;
    this.legend = undefined;
    this.title = undefined;
    this.tooltips = undefined;
    this.doughnut = undefined;
  }
  set(scope, values) {
    return merge(this[scope] || (this[scope] = {}), values);
  }
}
var defaults = new Defaults();

function toFontString(font) {
  if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
    return null;
  }
  return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
}
function toLineHeight(value, size) {
  var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
  if (!matches || matches[1] === 'normal') {
    return size * 1.2;
  }
  value = +matches[2];
  switch (matches[3]) {
    case 'px':
      return value;
    case '%':
      value /= 100;
      break;
  }
  return size * value;
}
function toPadding(value) {
  var t, r, b, l;
  if (isObject(value)) {
    t = +value.top || 0;
    r = +value.right || 0;
    b = +value.bottom || 0;
    l = +value.left || 0;
  } else {
    t = r = b = l = +value || 0;
  }
  return {
    top: t,
    right: r,
    bottom: b,
    left: l,
    height: t + b,
    width: l + r
  };
}
function _parseFont(options) {
  var size = valueOrDefault(options.fontSize, defaults.fontSize);
  if (typeof size === 'string') {
    size = parseInt(size, 10);
  }
  var font = {
    family: valueOrDefault(options.fontFamily, defaults.fontFamily),
    lineHeight: toLineHeight(valueOrDefault(options.lineHeight, defaults.lineHeight), size),
    size,
    style: valueOrDefault(options.fontStyle, defaults.fontStyle),
    weight: null,
    string: ''
  };
  font.string = toFontString(font);
  return font;
}
function resolve(inputs, context, index, info) {
  var cacheable = true;
  var i, ilen, value;
  for (i = 0, ilen = inputs.length; i < ilen; ++i) {
    value = inputs[i];
    if (value === undefined) {
      continue;
    }
    if (context !== undefined && typeof value === 'function') {
      value = value(context);
      cacheable = false;
    }
    if (index !== undefined && isArray(value)) {
      value = value[index];
      cacheable = false;
    }
    if (value !== undefined) {
      if (info && !cacheable) {
        info.cacheable = false;
      }
      return value;
    }
  }
}

var options = /*#__PURE__*/Object.freeze({
__proto__: null,
toLineHeight: toLineHeight,
toPadding: toPadding,
_parseFont: _parseFont,
resolve: resolve
});

var getRightToLeftAdapter = function getRightToLeftAdapter(rectX, width) {
  return {
    x(x) {
      return rectX + rectX + width - x;
    },
    setWidth(w) {
      width = w;
    },
    textAlign(align) {
      if (align === 'center') {
        return align;
      }
      return align === 'right' ? 'left' : 'right';
    },
    xPlus(x, value) {
      return x - value;
    },
    leftForLtr(x, itemWidth) {
      return x - itemWidth;
    }
  };
};
var getLeftToRightAdapter = function getLeftToRightAdapter() {
  return {
    x(x) {
      return x;
    },
    setWidth(w) {
    },
    textAlign(align) {
      return align;
    },
    xPlus(x, value) {
      return x + value;
    },
    leftForLtr(x, _itemWidth) {
      return x;
    }
  };
};
function getRtlAdapter(rtl, rectX, width) {
  return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
  var style, original;
  if (direction === 'ltr' || direction === 'rtl') {
    style = ctx.canvas.style;
    original = [style.getPropertyValue('direction'), style.getPropertyPriority('direction')];
    style.setProperty('direction', direction, 'important');
    ctx.prevTextDirection = original;
  }
}
function restoreTextDirection(ctx, original) {
  if (original !== undefined) {
    delete ctx.prevTextDirection;
    ctx.canvas.style.setProperty('direction', original[0], original[1]);
  }
}

var rtl = /*#__PURE__*/Object.freeze({
__proto__: null,
getRtlAdapter: getRtlAdapter,
overrideTextDirection: overrideTextDirection,
restoreTextDirection: restoreTextDirection
});

/*!
 * @kurkle/color v0.1.6
 * https://github.com/kurkle/color#readme
 * (c) 2020 Jukka Kurkela
 * Released under the MIT License
 */
var map = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
};
var hex = '0123456789ABCDEF';
var h1 = b => hex[b & 0xF];
var h2 = b => hex[(b & 0xF0) >> 4] + hex[b & 0xF];
var eq = b => (b & 0xF0) >> 4 === (b & 0xF);
function isShort(v) {
  return eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
}
function hexParse(str) {
  var len = str.length;
  var ret;
  if (str[0] === '#') {
    if (len === 4 || len === 5) {
      ret = {
        r: 255 & map[str[1]] * 17,
        g: 255 & map[str[2]] * 17,
        b: 255 & map[str[3]] * 17,
        a: len === 5 ? map[str[4]] * 17 : 255
      };
    } else if (len === 7 || len === 9) {
      ret = {
        r: map[str[1]] << 4 | map[str[2]],
        g: map[str[3]] << 4 | map[str[4]],
        b: map[str[5]] << 4 | map[str[6]],
        a: len === 9 ? map[str[7]] << 4 | map[str[8]] : 255
      };
    }
  }
  return ret;
}
function hexString(v) {
  var f = isShort(v) ? h1 : h2;
  return v ? '#' + f(v.r) + f(v.g) + f(v.b) + (v.a < 255 ? f(v.a) : '') : v;
}
function round(v) {
  return v + 0.5 | 0;
}
var lim = (v, l, h) => Math.max(Math.min(v, h), l);
function p2b(v) {
  return lim(round(v * 2.55), 0, 255);
}
function n2b(v) {
  return lim(round(v * 255), 0, 255);
}
function b2n(v) {
  return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
  return lim(round(v * 100), 0, 100);
}
var RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
  var m = RGB_RE.exec(str);
  var a = 255;
  var r, g, b;
  if (!m) {
    return;
  }
  if (m[7] !== r) {
    var v = +m[7];
    a = 255 & (m[8] ? p2b(v) : v * 255);
  }
  r = +m[1];
  g = +m[3];
  b = +m[5];
  r = 255 & (m[2] ? p2b(r) : r);
  g = 255 & (m[4] ? p2b(g) : g);
  b = 255 & (m[6] ? p2b(b) : b);
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}
function rgbString(v) {
  return v && (v.a < 255 ? "rgba(".concat(v.r, ", ").concat(v.g, ", ").concat(v.b, ", ").concat(b2n(v.a), ")") : "rgb(".concat(v.r, ", ").concat(v.g, ", ").concat(v.b, ")"));
}
var HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
  var a = s * Math.min(l, 1 - l);
  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  return [f(0), f(8), f(4)];
}
function hsv2rgbn(h, s, v) {
  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };
  return [f(5), f(3), f(1)];
}
function hwb2rgbn(h, w, b) {
  var rgb = hsl2rgbn(h, 1, 0.5);
  var i;
  if (w + b > 1) {
    i = 1 / (w + b);
    w *= i;
    b *= i;
  }
  for (i = 0; i < 3; i++) {
    rgb[i] *= 1 - w - b;
    rgb[i] += w;
  }
  return rgb;
}
function rgb2hsl(v) {
  var range = 255;
  var r = v.r / range;
  var g = v.g / range;
  var b = v.b / range;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var l = (max + min) / 2;
  var h, s, d;
  if (max !== min) {
    d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    h = h * 60 + 0.5;
  }
  return [h | 0, s || 0, l];
}
function calln(f, a, b, c) {
  return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
}
function hsl2rgb(h, s, l) {
  return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
  return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
  return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
  return (h % 360 + 360) % 360;
}
function hueParse(str) {
  var m = HUE_RE.exec(str);
  var a = 255;
  var v;
  if (!m) {
    return;
  }
  if (m[5] !== v) {
    a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
  }
  var h = hue(+m[2]);
  var p1 = +m[3] / 100;
  var p2 = +m[4] / 100;
  if (m[1] === 'hwb') {
    v = hwb2rgb(h, p1, p2);
  } else if (m[1] === 'hsv') {
    v = hsv2rgb(h, p1, p2);
  } else {
    v = hsl2rgb(h, p1, p2);
  }
  return {
    r: v[0],
    g: v[1],
    b: v[2],
    a: a
  };
}
function rotate(v, deg) {
  var h = rgb2hsl(v);
  h[0] = hue(h[0] + deg);
  h = hsl2rgb(h);
  v.r = h[0];
  v.g = h[1];
  v.b = h[2];
}
function hslString(v) {
  if (!v) {
    return;
  }
  var a = rgb2hsl(v);
  var h = a[0];
  var s = n2p(a[1]);
  var l = n2p(a[2]);
  return v.a < 255 ? "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(b2n(v.a), ")") : "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)");
}
var map$1 = {
  x: 'dark',
  Z: 'light',
  Y: 're',
  X: 'blu',
  W: 'gr',
  V: 'medium',
  U: 'slate',
  A: 'ee',
  T: 'ol',
  S: 'or',
  B: 'ra',
  C: 'lateg',
  D: 'ights',
  R: 'in',
  Q: 'turquois',
  E: 'hi',
  P: 'ro',
  O: 'al',
  N: 'le',
  M: 'de',
  L: 'yello',
  F: 'en',
  K: 'ch',
  G: 'arks',
  H: 'ea',
  I: 'ightg',
  J: 'wh'
};
function unpack(obj) {
  var unpacked = {};
  var keys = Object.keys(obj);
  var tkeys = Object.keys(map$1);
  var i, j, k, ok, nk;
  for (i = 0; i < keys.length; i++) {
    ok = nk = keys[i];
    for (j = 0; j < tkeys.length; j++) {
      k = tkeys[j];
      nk = nk.replace(k, map$1[k]);
    }
    k = parseInt(obj[ok], 16);
    unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
  }
  return unpacked;
}
var names = unpack({
  OiceXe: 'f0f8ff',
  antiquewEte: 'faebd7',
  aqua: 'ffff',
  aquamarRe: '7fffd4',
  azuY: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '0',
  blanKedOmond: 'ffebcd',
  Xe: 'ff',
  XeviTet: '8a2be2',
  bPwn: 'a52a2a',
  burlywood: 'deb887',
  caMtXe: '5f9ea0',
  KartYuse: '7fff00',
  KocTate: 'd2691e',
  cSO: 'ff7f50',
  cSnflowerXe: '6495ed',
  cSnsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: 'ffff',
  xXe: '8b',
  xcyan: '8b8b',
  xgTMnPd: 'b8860b',
  xWay: 'a9a9a9',
  xgYF: '6400',
  xgYy: 'a9a9a9',
  xkhaki: 'bdb76b',
  xmagFta: '8b008b',
  xTivegYF: '556b2f',
  xSange: 'ff8c00',
  xScEd: '9932cc',
  xYd: '8b0000',
  xsOmon: 'e9967a',
  xsHgYF: '8fbc8f',
  xUXe: '483d8b',
  xUWay: '2f4f4f',
  xUgYy: '2f4f4f',
  xQe: 'ced1',
  xviTet: '9400d3',
  dAppRk: 'ff1493',
  dApskyXe: 'bfff',
  dimWay: '696969',
  dimgYy: '696969',
  dodgerXe: '1e90ff',
  fiYbrick: 'b22222',
  flSOwEte: 'fffaf0',
  foYstWAn: '228b22',
  fuKsia: 'ff00ff',
  gaRsbSo: 'dcdcdc',
  ghostwEte: 'f8f8ff',
  gTd: 'ffd700',
  gTMnPd: 'daa520',
  Way: '808080',
  gYF: '8000',
  gYFLw: 'adff2f',
  gYy: '808080',
  honeyMw: 'f0fff0',
  hotpRk: 'ff69b4',
  RdianYd: 'cd5c5c',
  Rdigo: '4b0082',
  ivSy: 'fffff0',
  khaki: 'f0e68c',
  lavFMr: 'e6e6fa',
  lavFMrXsh: 'fff0f5',
  lawngYF: '7cfc00',
  NmoncEffon: 'fffacd',
  ZXe: 'add8e6',
  ZcSO: 'f08080',
  Zcyan: 'e0ffff',
  ZgTMnPdLw: 'fafad2',
  ZWay: 'd3d3d3',
  ZgYF: '90ee90',
  ZgYy: 'd3d3d3',
  ZpRk: 'ffb6c1',
  ZsOmon: 'ffa07a',
  ZsHgYF: '20b2aa',
  ZskyXe: '87cefa',
  ZUWay: '778899',
  ZUgYy: '778899',
  ZstAlXe: 'b0c4de',
  ZLw: 'ffffe0',
  lime: 'ff00',
  limegYF: '32cd32',
  lRF: 'faf0e6',
  magFta: 'ff00ff',
  maPon: '800000',
  VaquamarRe: '66cdaa',
  VXe: 'cd',
  VScEd: 'ba55d3',
  VpurpN: '9370db',
  VsHgYF: '3cb371',
  VUXe: '7b68ee',
  VsprRggYF: 'fa9a',
  VQe: '48d1cc',
  VviTetYd: 'c71585',
  midnightXe: '191970',
  mRtcYam: 'f5fffa',
  mistyPse: 'ffe4e1',
  moccasR: 'ffe4b5',
  navajowEte: 'ffdead',
  navy: '80',
  Tdlace: 'fdf5e6',
  Tive: '808000',
  TivedBb: '6b8e23',
  Sange: 'ffa500',
  SangeYd: 'ff4500',
  ScEd: 'da70d6',
  pOegTMnPd: 'eee8aa',
  pOegYF: '98fb98',
  pOeQe: 'afeeee',
  pOeviTetYd: 'db7093',
  papayawEp: 'ffefd5',
  pHKpuff: 'ffdab9',
  peru: 'cd853f',
  pRk: 'ffc0cb',
  plum: 'dda0dd',
  powMrXe: 'b0e0e6',
  purpN: '800080',
  YbeccapurpN: '663399',
  Yd: 'ff0000',
  Psybrown: 'bc8f8f',
  PyOXe: '4169e1',
  saddNbPwn: '8b4513',
  sOmon: 'fa8072',
  sandybPwn: 'f4a460',
  sHgYF: '2e8b57',
  sHshell: 'fff5ee',
  siFna: 'a0522d',
  silver: 'c0c0c0',
  skyXe: '87ceeb',
  UXe: '6a5acd',
  UWay: '708090',
  UgYy: '708090',
  snow: 'fffafa',
  sprRggYF: 'ff7f',
  stAlXe: '4682b4',
  tan: 'd2b48c',
  teO: '8080',
  tEstN: 'd8bfd8',
  tomato: 'ff6347',
  Qe: '40e0d0',
  viTet: 'ee82ee',
  JHt: 'f5deb3',
  wEte: 'ffffff',
  wEtesmoke: 'f5f5f5',
  Lw: 'ffff00',
  LwgYF: '9acd32'
});
names.transparent = [0, 0, 0, 0];
function nameParse(str) {
  var a = names[str];
  return a && {
    r: a[0],
    g: a[1],
    b: a[2],
    a: a.length === 4 ? a[3] : 255
  };
}
function modHSL(v, i, ratio) {
  if (v) {
    var tmp = rgb2hsl(v);
    tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
    tmp = hsl2rgb(tmp);
    v.r = tmp[0];
    v.g = tmp[1];
    v.b = tmp[2];
  }
}
function clone$1(v, proto) {
  return v ? _extends(proto || {}, v) : v;
}
function fromObject(input) {
  var v = {
    r: 0,
    g: 0,
    b: 0,
    a: 255
  };
  if (Array.isArray(input)) {
    if (input.length >= 3) {
      v = {
        r: input[0],
        g: input[1],
        b: input[2],
        a: 255
      };
      if (input.length > 3) {
        v.a = n2b(input[3]);
      }
    }
  } else {
    v = clone$1(input, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    });
    v.a = n2b(v.a);
  }
  return v;
}
function functionParse(str) {
  if (str.charAt(0) === 'r') {
    return rgbParse(str);
  }
  return hueParse(str);
}
class Color {
  constructor(input) {
    if (input instanceof Color) {
      return input;
    }
    var type = typeof input;
    var v;
    if (type === 'object') {
      v = fromObject(input);
    } else if (type === 'string') {
      v = hexParse(input) || nameParse(input) || functionParse(input);
    }
    this._rgb = v;
    this._valid = !!v;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var v = clone$1(this._rgb);
    if (v) {
      v.a = b2n(v.a);
    }
    return v;
  }
  set rgb(obj) {
    this._rgb = fromObject(obj);
  }
  rgbString() {
    return rgbString(this._rgb);
  }
  hexString() {
    return hexString(this._rgb);
  }
  hslString() {
    return hslString(this._rgb);
  }
  mix(color, weight) {
    var me = this;
    if (color) {
      var c1 = me.rgb;
      var c2 = color.rgb;
      var w2;
      var p = weight === w2 ? 0.5 : weight;
      var w = 2 * p - 1;
      var a = c1.a - c2.a;
      var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
      w2 = 1 - w1;
      c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
      c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
      c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
      c1.a = p * c1.a + (1 - p) * c2.a;
      me.rgb = c1;
    }
    return me;
  }
  clone() {
    return new Color(this.rgb);
  }
  alpha(a) {
    this._rgb.a = n2b(a);
    return this;
  }
  clearer(ratio) {
    var rgb = this._rgb;
    rgb.a *= 1 - ratio;
    return this;
  }
  greyscale() {
    var rgb = this._rgb;
    var val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
    rgb.r = rgb.g = rgb.b = val;
    return this;
  }
  opaquer(ratio) {
    var rgb = this._rgb;
    rgb.a *= 1 + ratio;
    return this;
  }
  negate() {
    var v = this._rgb;
    v.r = 255 - v.r;
    v.g = 255 - v.g;
    v.b = 255 - v.b;
    return this;
  }
  lighten(ratio) {
    modHSL(this._rgb, 2, ratio);
    return this;
  }
  darken(ratio) {
    modHSL(this._rgb, 2, -ratio);
    return this;
  }
  saturate(ratio) {
    modHSL(this._rgb, 1, ratio);
    return this;
  }
  desaturate(ratio) {
    modHSL(this._rgb, 1, -ratio);
    return this;
  }
  rotate(deg) {
    rotate(this._rgb, deg);
    return this;
  }
}
function index(input) {
  return new Color(input);
}

var isPatternOrGradient = value => value instanceof CanvasGradient || value instanceof CanvasPattern;
function color(value) {
  return isPatternOrGradient(value) ? value : index(value);
}
function getHoverColor(value) {
  return isPatternOrGradient(value) ? value : index(value).saturate(0.5).darken(0.1).hexString();
}

var helpers = _objectSpread2({}, coreHelpers, {
  canvas,
  curve,
  dom,
  easing: {
    effects
  },
  options,
  math,
  rtl,
  requestAnimFrame: function () {
    if (typeof window === 'undefined') {
      return function (callback) {
        callback();
      };
    }
    return window.requestAnimationFrame;
  }(),
  fontString(pixelSize, fontStyle, fontFamily) {
    return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
  },
  color,
  getHoverColor
});

function drawFPS(chart, count, date, lastDate) {
  var fps = 1000 / (date - lastDate) | 0;
  var ctx = chart.ctx;
  ctx.save();
  ctx.clearRect(0, 0, 50, 24);
  ctx.fillStyle = 'black';
  ctx.textAlign = 'right';
  if (count) {
    ctx.fillText(count, 50, 8);
    ctx.fillText(fps + ' fps', 50, 18);
  }
  ctx.restore();
}
class Animator {
  constructor() {
    this._request = null;
    this._charts = new Map();
    this._running = false;
    this._lastDate = undefined;
  }
  _notify(chart, anims, date, type) {
    var callbacks = anims.listeners[type] || [];
    var numSteps = anims.duration;
    callbacks.forEach(fn => fn({
      chart,
      numSteps,
      currentStep: date - anims.start
    }));
  }
  _refresh() {
    var me = this;
    if (me._request) {
      return;
    }
    me._running = true;
    me._request = helpers.requestAnimFrame.call(window, () => {
      me._update();
      me._request = null;
      if (me._running) {
        me._refresh();
      }
    });
  }
  _update() {
    var me = this;
    var date = Date.now();
    var remaining = 0;
    me._charts.forEach((anims, chart) => {
      if (!anims.running || !anims.items.length) {
        return;
      }
      var items = anims.items;
      var i = items.length - 1;
      var draw = false;
      var item;
      for (; i >= 0; --i) {
        item = items[i];
        if (item._active) {
          item.tick(date);
          draw = true;
        } else {
          items[i] = items[items.length - 1];
          items.pop();
        }
      }
      if (draw) {
        chart.draw();
      }
      if (chart.options.animation.debug) {
        drawFPS(chart, items.length, date, me._lastDate);
      }
      me._notify(chart, anims, date, 'progress');
      if (!items.length) {
        anims.running = false;
        me._notify(chart, anims, date, 'complete');
      }
      remaining += items.length;
    });
    me._lastDate = date;
    if (remaining === 0) {
      me._running = false;
    }
  }
  _getAnims(chart) {
    var charts = this._charts;
    var anims = charts.get(chart);
    if (!anims) {
      anims = {
        running: false,
        items: [],
        listeners: {
          complete: [],
          progress: []
        }
      };
      charts.set(chart, anims);
    }
    return anims;
  }
  listen(chart, event, cb) {
    this._getAnims(chart).listeners[event].push(cb);
  }
  add(chart, items) {
    if (!items || !items.length) {
      return;
    }
    this._getAnims(chart).items.push(...items);
  }
  has(chart) {
    return this._getAnims(chart).items.length > 0;
  }
  start(chart) {
    var anims = this._charts.get(chart);
    if (!anims) {
      return;
    }
    anims.running = true;
    anims.start = Date.now();
    anims.duration = anims.items.reduce((acc, cur) => Math.max(acc, cur._duration), 0);
    this._refresh();
  }
  running(chart) {
    if (!this._running) {
      return false;
    }
    var anims = this._charts.get(chart);
    if (!anims || !anims.running || !anims.items.length) {
      return false;
    }
    return true;
  }
  stop(chart) {
    var anims = this._charts.get(chart);
    if (!anims || !anims.items.length) {
      return;
    }
    var items = anims.items;
    var i = items.length - 1;
    for (; i >= 0; --i) {
      items[i].cancel();
    }
    anims.items = [];
    this._notify(chart, anims, Date.now(), 'complete');
  }
  remove(chart) {
    return this._charts.delete(chart);
  }
}
var Animator$1 = new Animator();

var transparent = 'transparent';
var interpolators = {
  boolean(from, to, factor) {
    return factor > 0.5 ? to : from;
  },
  color(from, to, factor) {
    var c0 = helpers.color(from || transparent);
    var c1 = c0.valid && helpers.color(to || transparent);
    return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
  },
  number(from, to, factor) {
    return from + (to - from) * factor;
  }
};
class Animation {
  constructor(cfg, target, prop, to) {
    var currentValue = target[prop];
    to = resolve([cfg.to, to, currentValue, cfg.from]);
    var from = resolve([cfg.from, currentValue, to]);
    this._active = true;
    this._fn = cfg.fn || interpolators[cfg.type || typeof from];
    this._easing = effects[cfg.easing || 'linear'];
    this._start = Math.floor(Date.now() + (cfg.delay || 0));
    this._duration = Math.floor(cfg.duration);
    this._loop = !!cfg.loop;
    this._target = target;
    this._prop = prop;
    this._from = from;
    this._to = to;
  }
  active() {
    return this._active;
  }
  cancel() {
    var me = this;
    if (me._active) {
      me.tick(Date.now());
      me._active = false;
    }
  }
  tick(date) {
    var me = this;
    var elapsed = date - me._start;
    var duration = me._duration;
    var prop = me._prop;
    var from = me._from;
    var loop = me._loop;
    var to = me._to;
    var factor;
    me._active = from !== to && (loop || elapsed < duration);
    if (!me._active) {
      me._target[prop] = to;
      return;
    }
    if (elapsed < 0) {
      me._target[prop] = from;
      return;
    }
    factor = elapsed / duration % 2;
    factor = loop && factor > 1 ? 2 - factor : factor;
    factor = me._easing(Math.min(1, Math.max(0, factor)));
    me._target[prop] = me._fn(from, to, factor);
  }
}

var numbers = ['x', 'y', 'borderWidth', 'radius', 'tension'];
var colors = ['borderColor', 'backgroundColor'];
defaults.set('animation', {
  duration: 1000,
  easing: 'easeOutQuart',
  onProgress: noop,
  onComplete: noop,
  colors: {
    type: 'color',
    properties: colors
  },
  numbers: {
    type: 'number',
    properties: numbers
  },
  active: {
    duration: 400
  },
  resize: {
    duration: 0
  },
  show: {
    colors: {
      type: 'color',
      properties: colors,
      from: 'transparent'
    },
    visible: {
      type: 'boolean',
      duration: 0
    }
  },
  hide: {
    colors: {
      type: 'color',
      properties: colors,
      to: 'transparent'
    },
    visible: {
      type: 'boolean',
      easing: 'easeInExpo'
    }
  }
});
function copyOptions(target, values) {
  var oldOpts = target.options;
  var newOpts = values.options;
  if (!oldOpts || !newOpts || newOpts.$shared) {
    return;
  }
  if (oldOpts.$shared) {
    target.options = _extends({}, oldOpts, newOpts, {
      $shared: false
    });
  } else {
    _extends(oldOpts, newOpts);
  }
  delete values.options;
}
function extensibleConfig(animations) {
  var result = {};
  Object.keys(animations).forEach(key => {
    var value = animations[key];
    if (!isObject(value)) {
      result[key] = value;
    }
  });
  return result;
}
class Animations {
  constructor(chart, animations) {
    this._chart = chart;
    this._properties = new Map();
    this.configure(animations);
  }
  configure(animations) {
    if (!isObject(animations)) {
      return;
    }
    var animatedProps = this._properties;
    var animDefaults = extensibleConfig(animations);
    Object.keys(animations).forEach(key => {
      var cfg = animations[key];
      if (!isObject(cfg)) {
        return;
      }
      (cfg.properties || [key]).forEach(prop => {
        if (!animatedProps.has(prop)) {
          animatedProps.set(prop, _extends({}, animDefaults, cfg));
        } else if (prop === key) {
          animatedProps.set(prop, _extends({}, animatedProps.get(prop), cfg));
        }
      });
    });
  }
  _animateOptions(target, values) {
    var newOptions = values.options;
    var animations = [];
    if (!newOptions) {
      return animations;
    }
    var options = target.options;
    if (options) {
      if (options.$shared) {
        target.options = options = _extends({}, options, {
          $shared: false,
          $animations: {}
        });
      }
      animations = this._createAnimations(options, newOptions);
    } else {
      target.options = newOptions;
    }
    return animations;
  }
  _createAnimations(target, values) {
    var animatedProps = this._properties;
    var animations = [];
    var running = target.$animations || (target.$animations = {});
    var props = Object.keys(values);
    var i;
    for (i = props.length - 1; i >= 0; --i) {
      var prop = props[i];
      if (prop.charAt(0) === '$') {
        continue;
      }
      if (prop === 'options') {
        animations.push(...this._animateOptions(target, values));
        continue;
      }
      var value = values[prop];
      var animation = running[prop];
      if (animation) {
        animation.cancel();
      }
      var cfg = animatedProps.get(prop);
      if (!cfg || !cfg.duration) {
        target[prop] = value;
        continue;
      }
      running[prop] = animation = new Animation(cfg, target, prop, value);
      animations.push(animation);
    }
    return animations;
  }
  update(target, values) {
    if (this._properties.size === 0) {
      copyOptions(target, values);
      _extends(target, values);
      return;
    }
    var animations = this._createAnimations(target, values);
    if (animations.length) {
      Animator$1.add(this._chart, animations);
      return true;
    }
  }
}

var resolve$1 = helpers.options.resolve;
var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
function listenArrayEvents(array, listener) {
  if (array._chartjs) {
    array._chartjs.listeners.push(listener);
    return;
  }
  Object.defineProperty(array, '_chartjs', {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [listener]
    }
  });
  arrayEvents.forEach(key => {
    var method = '_onData' + key.charAt(0).toUpperCase() + key.slice(1);
    var base = array[key];
    Object.defineProperty(array, key, {
      configurable: true,
      enumerable: false,
      value() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var res = base.apply(this, args);
        array._chartjs.listeners.forEach(object => {
          if (typeof object[method] === 'function') {
            object[method](...args);
          }
        });
        return res;
      }
    });
  });
}
function scaleClip(scale, allowedOverflow) {
  var opts = scale && scale.options || {};
  var reverse = opts.reverse;
  var min = opts.min === undefined ? allowedOverflow : 0;
  var max = opts.max === undefined ? allowedOverflow : 0;
  return {
    start: reverse ? max : min,
    end: reverse ? min : max
  };
}
function defaultClip(xScale, yScale, allowedOverflow) {
  if (allowedOverflow === false) {
    return false;
  }
  var x = scaleClip(xScale, allowedOverflow);
  var y = scaleClip(yScale, allowedOverflow);
  return {
    top: y.end,
    right: x.end,
    bottom: y.start,
    left: x.start
  };
}
function toClip(value) {
  var t, r, b, l;
  if (helpers.isObject(value)) {
    t = value.top;
    r = value.right;
    b = value.bottom;
    l = value.left;
  } else {
    t = r = b = l = value;
  }
  return {
    top: t,
    right: r,
    bottom: b,
    left: l
  };
}
function unlistenArrayEvents(array, listener) {
  var stub = array._chartjs;
  if (!stub) {
    return;
  }
  var listeners = stub.listeners;
  var index = listeners.indexOf(listener);
  if (index !== -1) {
    listeners.splice(index, 1);
  }
  if (listeners.length > 0) {
    return;
  }
  arrayEvents.forEach(key => {
    delete array[key];
  });
  delete array._chartjs;
}
function getSortedDatasetIndices(chart, filterVisible) {
  var keys = [];
  var metasets = chart._getSortedDatasetMetas(filterVisible);
  var i, ilen;
  for (i = 0, ilen = metasets.length; i < ilen; ++i) {
    keys.push(metasets[i].index);
  }
  return keys;
}
function applyStack(stack, value, dsIndex, allOther) {
  var keys = stack.keys;
  var i, ilen, datasetIndex, otherValue;
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    datasetIndex = +keys[i];
    if (datasetIndex === dsIndex) {
      if (allOther) {
        continue;
      }
      break;
    }
    otherValue = stack.values[datasetIndex];
    if (!isNaN(otherValue) && (value === 0 || helpers.math.sign(value) === helpers.math.sign(otherValue))) {
      value += otherValue;
    }
  }
  return value;
}
function convertObjectDataToArray(data) {
  var keys = Object.keys(data);
  var adata = new Array(keys.length);
  var i, ilen, key;
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    key = keys[i];
    adata[i] = {
      x: key,
      y: data[key]
    };
  }
  return adata;
}
function isStacked(scale, meta) {
  var stacked = scale && scale.options.stacked;
  return stacked || stacked === undefined && meta.stack !== undefined;
}
function getStackKey(indexScale, valueScale, meta) {
  return indexScale.id + '.' + valueScale.id + '.' + meta.stack + '.' + meta.type;
}
function getUserBounds(scale) {
  var {
    min,
    max,
    minDefined,
    maxDefined
  } = scale.getUserBounds();
  return {
    min: minDefined ? min : Number.NEGATIVE_INFINITY,
    max: maxDefined ? max : Number.POSITIVE_INFINITY
  };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
  var subStack = stacks[stackKey] || (stacks[stackKey] = {});
  return subStack[indexValue] || (subStack[indexValue] = {});
}
function updateStacks(controller, parsed) {
  var {
    chart,
    _cachedMeta: meta
  } = controller;
  var stacks = chart._stacks || (chart._stacks = {});
  var {
    iScale,
    vScale,
    index: datasetIndex
  } = meta;
  var iAxis = iScale.axis;
  var vAxis = vScale.axis;
  var key = getStackKey(iScale, vScale, meta);
  var ilen = parsed.length;
  var stack;
  for (var i = 0; i < ilen; ++i) {
    var item = parsed[i];
    var {
      [iAxis]: index,
      [vAxis]: value
    } = item;
    var itemStacks = item._stacks || (item._stacks = {});
    stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
    stack[datasetIndex] = value;
  }
}
function getFirstScaleId(chart, axis) {
  var scales = chart.scales;
  return Object.keys(scales).filter(key => scales[key].axis === axis).shift();
}
class DatasetController {
  constructor(chart, datasetIndex) {
    this.chart = chart;
    this._ctx = chart.ctx;
    this.index = datasetIndex;
    this._cachedAnimations = {};
    this._cachedDataOpts = {};
    this._cachedMeta = this.getMeta();
    this._type = this._cachedMeta.type;
    this._config = undefined;
    this._parsing = false;
    this._data = undefined;
    this._dataCopy = undefined;
    this._objectData = undefined;
    this._labels = undefined;
    this._scaleStacked = {};
    this.initialize();
  }
  initialize() {
    var me = this;
    var meta = me._cachedMeta;
    me.configure();
    me.linkScales();
    meta._stacked = isStacked(meta.vScale, meta);
    me.addElements();
  }
  updateIndex(datasetIndex) {
    this.index = datasetIndex;
  }
  linkScales() {
    var me = this;
    var chart = me.chart;
    var meta = me._cachedMeta;
    var dataset = me.getDataset();
    var xid = meta.xAxisID = dataset.xAxisID || getFirstScaleId(chart, 'x');
    var yid = meta.yAxisID = dataset.yAxisID || getFirstScaleId(chart, 'y');
    var rid = meta.rAxisID = dataset.rAxisID || getFirstScaleId(chart, 'r');
    meta.xScale = me.getScaleForId(xid);
    meta.yScale = me.getScaleForId(yid);
    meta.rScale = me.getScaleForId(rid);
    meta.iScale = me._getIndexScale();
    meta.vScale = me._getValueScale();
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(scaleID) {
    return this.chart.scales[scaleID];
  }
  getValueScaleId() {
    return this._cachedMeta.yAxisID;
  }
  getIndexScaleId() {
    return this._cachedMeta.xAxisID;
  }
  _getValueScale() {
    return this.getScaleForId(this.getValueScaleId());
  }
  _getIndexScale() {
    return this.getScaleForId(this.getIndexScaleId());
  }
  _getOtherScale(scale) {
    var meta = this._cachedMeta;
    return scale === meta.iScale ? meta.vScale : meta.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    if (this._data) {
      unlistenArrayEvents(this._data, this);
    }
  }
  _dataCheck() {
    var me = this;
    var dataset = me.getDataset();
    var data = dataset.data || (dataset.data = []);
    if (helpers.isObject(data)) {
      if (me._objectData === data) {
        return false;
      }
      me._data = convertObjectDataToArray(data);
      me._objectData = data;
    } else {
      if (me._data === data && helpers.arrayEquals(data, me._dataCopy)) {
        return false;
      }
      if (me._data) {
        unlistenArrayEvents(me._data, me);
      }
      me._dataCopy = data.slice(0);
      if (data && Object.isExtensible(data)) {
        listenArrayEvents(data, me);
      }
      me._data = data;
    }
    return true;
  }
  _labelCheck() {
    var me = this;
    var iScale = me._cachedMeta.iScale;
    var labels = iScale ? iScale.getLabels() : me.chart.data.labels;
    if (me._labels === labels) {
      return false;
    }
    me._labels = labels;
    return true;
  }
  addElements() {
    var me = this;
    var meta = me._cachedMeta;
    me._dataCheck();
    var data = me._data;
    var metaData = meta.data = new Array(data.length);
    for (var i = 0, ilen = data.length; i < ilen; ++i) {
      metaData[i] = new me.dataElementType();
    }
    if (me.datasetElementType) {
      meta.dataset = new me.datasetElementType();
    }
  }
  buildOrUpdateElements() {
    var me = this;
    var dataChanged = me._dataCheck();
    var labelsChanged = me._labelCheck();
    var scaleChanged = me._scaleCheck();
    var meta = me._cachedMeta;
    var dataset = me.getDataset();
    var stackChanged = false;
    meta._stacked = isStacked(meta.vScale, meta);
    if (meta.stack !== dataset.stack) {
      stackChanged = true;
      meta._parsed.forEach(parsed => {
        delete parsed._stacks[meta.vScale.id][meta.index];
      });
      meta.stack = dataset.stack;
    }
    me._resyncElements(dataChanged || labelsChanged || scaleChanged || stackChanged);
    if (stackChanged) {
      updateStacks(me, meta._parsed);
    }
  }
  configure() {
    var me = this;
    me._config = helpers.merge({}, [me.chart.options[me._type].datasets, me.getDataset()], {
      merger(key, target, source) {
        if (key !== 'data') {
          helpers._merger(key, target, source);
        }
      }
    });
    me._parsing = resolve$1([me._config.parsing, me.chart.options.parsing, true]);
  }
  parse(start, count) {
    var me = this;
    var {
      _cachedMeta: meta,
      _data: data
    } = me;
    var {
      iScale,
      vScale,
      _stacked
    } = meta;
    var iAxis = iScale.axis;
    var sorted = true;
    var i, parsed, cur, prev;
    if (start > 0) {
      sorted = meta._sorted;
      prev = meta._parsed[start - 1];
    }
    if (me._parsing === false) {
      meta._parsed = data;
      meta._sorted = true;
    } else {
      if (helpers.isArray(data[start])) {
        parsed = me.parseArrayData(meta, data, start, count);
      } else if (helpers.isObject(data[start])) {
        parsed = me.parseObjectData(meta, data, start, count);
      } else {
        parsed = me.parsePrimitiveData(meta, data, start, count);
      }
      for (i = 0; i < count; ++i) {
        meta._parsed[i + start] = cur = parsed[i];
        if (sorted) {
          if (prev && cur[iAxis] < prev[iAxis]) {
            sorted = false;
          }
          prev = cur;
        }
      }
      meta._sorted = sorted;
    }
    if (_stacked) {
      updateStacks(me, parsed);
    }
    iScale.invalidateCaches();
    vScale.invalidateCaches();
  }
  parsePrimitiveData(meta, data, start, count) {
    var {
      iScale,
      vScale
    } = meta;
    var iAxis = iScale.axis;
    var vAxis = vScale.axis;
    var labels = iScale.getLabels();
    var singleScale = iScale === vScale;
    var parsed = new Array(count);
    var i, ilen, index;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      parsed[i] = {
        [iAxis]: singleScale || iScale.parse(labels[index], index),
        [vAxis]: vScale.parse(data[index], index)
      };
    }
    return parsed;
  }
  parseArrayData(meta, data, start, count) {
    var {
      xScale,
      yScale
    } = meta;
    var parsed = new Array(count);
    var i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse(item[0], index),
        y: yScale.parse(item[1], index)
      };
    }
    return parsed;
  }
  parseObjectData(meta, data, start, count) {
    var {
      xScale,
      yScale
    } = meta;
    var parsed = new Array(count);
    var i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parseObject(item, 'x', index),
        y: yScale.parseObject(item, 'y', index)
      };
    }
    return parsed;
  }
  getParsed(index) {
    return this._cachedMeta._parsed[index];
  }
  applyStack(scale, parsed) {
    var chart = this.chart;
    var meta = this._cachedMeta;
    var value = parsed[scale.axis];
    var stack = {
      keys: getSortedDatasetIndices(chart, true),
      values: parsed._stacks[scale.axis]
    };
    return applyStack(stack, value, meta.index);
  }
  getMinMax(scale, canStack) {
    var meta = this._cachedMeta;
    var _parsed = meta._parsed;
    var sorted = meta._sorted && scale === meta.iScale;
    var ilen = _parsed.length;
    var otherScale = this._getOtherScale(scale);
    var stack = canStack && meta._stacked && {
      keys: getSortedDatasetIndices(this.chart, true),
      values: null
    };
    var min = Number.POSITIVE_INFINITY;
    var max = Number.NEGATIVE_INFINITY;
    var {
      min: otherMin,
      max: otherMax
    } = getUserBounds(otherScale);
    var i, value, parsed, otherValue;
    function _compute() {
      if (stack) {
        stack.values = parsed._stacks[scale.axis];
        min = Math.min(min, value);
        max = Math.max(max, value);
        value = applyStack(stack, value, meta.index, true);
      }
      min = Math.min(min, value);
      max = Math.max(max, value);
    }
    function _skip() {
      parsed = _parsed[i];
      value = parsed[scale.axis];
      otherValue = parsed[otherScale.axis];
      return isNaN(value) || otherMin > otherValue || otherMax < otherValue;
    }
    for (i = 0; i < ilen; ++i) {
      if (_skip()) {
        continue;
      }
      _compute();
      if (sorted) {
        break;
      }
    }
    if (sorted) {
      for (i = ilen - 1; i >= 0; --i) {
        if (_skip()) {
          continue;
        }
        _compute();
        break;
      }
    }
    return {
      min,
      max
    };
  }
  getAllParsedValues(scale) {
    var parsed = this._cachedMeta._parsed;
    var values = [];
    var i, ilen, value;
    for (i = 0, ilen = parsed.length; i < ilen; ++i) {
      value = parsed[i][scale.axis];
      if (!isNaN(value)) {
        values.push(value);
      }
    }
    return values;
  }
  _cacheScaleStackStatus() {
    var me = this;
    var meta = me._cachedMeta;
    var iScale = meta.iScale;
    var vScale = meta.vScale;
    var cache = me._scaleStacked = {};
    if (iScale && vScale) {
      cache[iScale.id] = iScale.options.stacked;
      cache[vScale.id] = vScale.options.stacked;
    }
  }
  _scaleCheck() {
    var me = this;
    var meta = me._cachedMeta;
    var iScale = meta.iScale;
    var vScale = meta.vScale;
    var cache = me._scaleStacked;
    return !cache || !iScale || !vScale || cache[iScale.id] !== iScale.options.stacked || cache[vScale.id] !== vScale.options.stacked;
  }
  getMaxOverflow() {
    return false;
  }
  getLabelAndValue(index) {
    var me = this;
    var meta = me._cachedMeta;
    var iScale = meta.iScale;
    var vScale = meta.vScale;
    var parsed = me.getParsed(index);
    return {
      label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
      value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
    };
  }
  _update(mode) {
    var me = this;
    var meta = me._cachedMeta;
    me.configure();
    me._cachedAnimations = {};
    me._cachedDataOpts = {};
    me.update(mode);
    meta._clip = toClip(helpers.valueOrDefault(me._config.clip, defaultClip(meta.xScale, meta.yScale, me.getMaxOverflow())));
    me._cacheScaleStackStatus();
  }
  update(mode) {}
  draw() {
    var ctx = this._ctx;
    var meta = this._cachedMeta;
    var elements = meta.data || [];
    var ilen = elements.length;
    var i = 0;
    if (meta.dataset) {
      meta.dataset.draw(ctx);
    }
    for (; i < ilen; ++i) {
      elements[i].draw(ctx);
    }
  }
  _addAutomaticHoverColors(index, options) {
    var me = this;
    var getHoverColor = helpers.getHoverColor;
    var normalOptions = me.getStyle(index);
    var missingColors = Object.keys(normalOptions).filter(key => key.indexOf('Color') !== -1 && !(key in options));
    var i = missingColors.length - 1;
    var color;
    for (; i >= 0; i--) {
      color = missingColors[i];
      options[color] = getHoverColor(normalOptions[color]);
    }
  }
  getStyle(index, active) {
    var me = this;
    var meta = me._cachedMeta;
    var dataset = meta.dataset;
    if (!me._config) {
      me.configure();
    }
    var options = dataset && index === undefined ? me.resolveDatasetElementOptions(active) : me.resolveDataElementOptions(index || 0, active && 'active');
    if (active) {
      me._addAutomaticHoverColors(index, options);
    }
    return options;
  }
  _getContext(index, active) {
    return {
      chart: this.chart,
      dataIndex: index,
      dataset: this.getDataset(),
      datasetIndex: this.index,
      active
    };
  }
  resolveDatasetElementOptions(active) {
    var me = this;
    var chart = me.chart;
    var datasetOpts = me._config;
    var options = chart.options.elements[me.datasetElementType._type] || {};
    var elementOptions = me.datasetElementOptions;
    var values = {};
    var context = me._getContext(undefined, active);
    var i, ilen, key, readKey, value;
    for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
      key = elementOptions[i];
      readKey = active ? 'hover' + key.charAt(0).toUpperCase() + key.slice(1) : key;
      value = resolve$1([datasetOpts[readKey], options[readKey]], context);
      if (value !== undefined) {
        values[key] = value;
      }
    }
    return values;
  }
  resolveDataElementOptions(index, mode) {
    var me = this;
    var active = mode === 'active';
    var cached = me._cachedDataOpts;
    if (cached[mode]) {
      return cached[mode];
    }
    var chart = me.chart;
    var datasetOpts = me._config;
    var options = chart.options.elements[me.dataElementType._type] || {};
    var elementOptions = me.dataElementOptions;
    var values = {};
    var context = me._getContext(index, active);
    var info = {
      cacheable: !active
    };
    var keys, i, ilen, key, value, readKey;
    if (helpers.isArray(elementOptions)) {
      for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
        key = elementOptions[i];
        readKey = active ? 'hover' + key.charAt(0).toUpperCase() + key.slice(1) : key;
        value = resolve$1([datasetOpts[readKey], options[readKey]], context, index, info);
        if (value !== undefined) {
          values[key] = value;
        }
      }
    } else {
      keys = Object.keys(elementOptions);
      for (i = 0, ilen = keys.length; i < ilen; ++i) {
        key = keys[i];
        readKey = active ? 'hover' + key.charAt(0).toUpperCase() + key.slice(1) : key;
        value = resolve$1([datasetOpts[elementOptions[readKey]], datasetOpts[readKey], options[readKey]], context, index, info);
        if (value !== undefined) {
          values[key] = value;
        }
      }
    }
    if (info.cacheable) {
      values.$shared = true;
      cached[mode] = values;
    }
    return values;
  }
  _resolveAnimations(index, mode, active) {
    var me = this;
    var chart = me.chart;
    var cached = me._cachedAnimations;
    mode = mode || 'default';
    if (cached[mode]) {
      return cached[mode];
    }
    var info = {
      cacheable: true
    };
    var context = me._getContext(index, active);
    var datasetAnim = resolve$1([me._config.animation], context, index, info);
    var chartAnim = resolve$1([chart.options.animation], context, index, info);
    var config = helpers.mergeIf({}, [datasetAnim, chartAnim]);
    if (config[mode]) {
      config = _extends({}, config, config[mode]);
    }
    var animations = new Animations(chart, config);
    if (info.cacheable) {
      cached[mode] = animations && Object.freeze(animations);
    }
    return animations;
  }
  getSharedOptions(mode, el, options) {
    if (!mode) {
      this._sharedOptions = options && options.$shared;
    }
    if (mode !== 'reset' && options && options.$shared && el && el.options && el.options.$shared) {
      return {
        target: el.options,
        options
      };
    }
  }
  includeOptions(mode, sharedOptions) {
    if (mode === 'hide' || mode === 'show') {
      return true;
    }
    return mode !== 'resize' && !sharedOptions;
  }
  updateElement(element, index, properties, mode) {
    if (mode === 'reset' || mode === 'none') {
      _extends(element, properties);
    } else {
      this._resolveAnimations(index, mode).update(element, properties);
    }
  }
  updateSharedOptions(sharedOptions, mode) {
    if (sharedOptions) {
      this._resolveAnimations(undefined, mode).update(sharedOptions.target, sharedOptions.options);
    }
  }
  _setStyle(element, index, mode, active) {
    element.active = active;
    this._resolveAnimations(index, mode, active).update(element, {
      options: this.getStyle(index, active)
    });
  }
  removeHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', false);
  }
  setHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', true);
  }
  _removeDatasetHoverStyle() {
    var element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', false);
    }
  }
  _setDatasetHoverStyle() {
    var element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', true);
    }
  }
  _resyncElements(changed) {
    var me = this;
    var meta = me._cachedMeta;
    var numMeta = meta.data.length;
    var numData = me._data.length;
    if (numData > numMeta) {
      me._insertElements(numMeta, numData - numMeta);
      if (changed && numMeta) {
        me.parse(0, numMeta);
      }
    } else if (numData < numMeta) {
      meta.data.splice(numData, numMeta - numData);
      meta._parsed.splice(numData, numMeta - numData);
      me.parse(0, numData);
    } else if (changed) {
      me.parse(0, numData);
    }
  }
  _insertElements(start, count) {
    var me = this;
    var elements = new Array(count);
    var meta = me._cachedMeta;
    var data = meta.data;
    var i;
    for (i = 0; i < count; ++i) {
      elements[i] = new me.dataElementType();
    }
    data.splice(start, 0, ...elements);
    if (me._parsing) {
      meta._parsed.splice(start, 0, ...new Array(count));
    }
    me.parse(start, count);
    me.updateElements(elements, start, 'reset');
  }
  updateElements(element, start, mode) {}
  _removeElements(start, count) {
    var me = this;
    if (me._parsing) {
      me._cachedMeta._parsed.splice(start, count);
    }
    me._cachedMeta.data.splice(start, count);
  }
  _onDataPush() {
    var count = arguments.length;
    this._insertElements(this.getDataset().data.length - count, count);
  }
  _onDataPop() {
    this._removeElements(this._cachedMeta.data.length - 1, 1);
  }
  _onDataShift() {
    this._removeElements(0, 1);
  }
  _onDataSplice(start, count) {
    this._removeElements(start, count);
    this._insertElements(start, arguments.length - 2);
  }
  _onDataUnshift() {
    this._insertElements(0, arguments.length);
  }
}
_defineProperty(DatasetController, "extend", helpers.inherits);
DatasetController.prototype.datasetElementType = null;
DatasetController.prototype.dataElementType = null;
DatasetController.prototype.datasetElementOptions = ['backgroundColor', 'borderCapStyle', 'borderColor', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'borderWidth'];
DatasetController.prototype.dataElementOptions = ['backgroundColor', 'borderColor', 'borderWidth', 'pointStyle'];

class Element$1 {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.active = false;
    this.options = undefined;
    this.$animations = undefined;
  }
  tooltipPosition(useFinalPosition) {
    var {
      x,
      y
    } = this.getProps(['x', 'y'], useFinalPosition);
    return {
      x,
      y
    };
  }
  hasValue() {
    return isNumber(this.x) && isNumber(this.y);
  }
  getProps(props, final) {
    var me = this;
    var anims = this.$animations;
    if (!final || !anims) {
      return me;
    }
    var ret = {};
    props.forEach(prop => {
      ret[prop] = anims[prop] && anims[prop].active ? anims[prop]._to : me[prop];
    });
    return ret;
  }
}
_defineProperty(Element$1, "extend", inherits);

var TAU$1 = Math.PI * 2;
defaults.set('elements', {
  arc: {
    backgroundColor: defaults.color,
    borderAlign: 'center',
    borderColor: '#fff',
    borderWidth: 2
  }
});
function clipArc(ctx, arc) {
  var {
    startAngle,
    endAngle,
    pixelMargin,
    x,
    y
  } = arc;
  var angleMargin = pixelMargin / arc.outerRadius;
  ctx.beginPath();
  ctx.arc(x, y, arc.outerRadius, startAngle - angleMargin, endAngle + angleMargin);
  if (arc.innerRadius > pixelMargin) {
    angleMargin = pixelMargin / arc.innerRadius;
    ctx.arc(x, y, arc.innerRadius - pixelMargin, endAngle + angleMargin, startAngle - angleMargin, true);
  } else {
    ctx.arc(x, y, pixelMargin, endAngle + Math.PI / 2, startAngle - Math.PI / 2);
  }
  ctx.closePath();
  ctx.clip();
}
function drawFullCircleBorders(ctx, vm, arc, inner) {
  var endAngle = arc.endAngle;
  var i;
  if (inner) {
    arc.endAngle = arc.startAngle + TAU$1;
    clipArc(ctx, arc);
    arc.endAngle = endAngle;
    if (arc.endAngle === arc.startAngle && arc.fullCircles) {
      arc.endAngle += TAU$1;
      arc.fullCircles--;
    }
  }
  ctx.beginPath();
  ctx.arc(arc.x, arc.y, arc.innerRadius, arc.startAngle + TAU$1, arc.startAngle, true);
  for (i = 0; i < arc.fullCircles; ++i) {
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.startAngle + TAU$1);
  for (i = 0; i < arc.fullCircles; ++i) {
    ctx.stroke();
  }
}
function drawBorder(ctx, vm, arc) {
  var options = vm.options;
  var inner = options.borderAlign === 'inner';
  if (inner) {
    ctx.lineWidth = options.borderWidth * 2;
    ctx.lineJoin = 'round';
  } else {
    ctx.lineWidth = options.borderWidth;
    ctx.lineJoin = 'bevel';
  }
  if (arc.fullCircles) {
    drawFullCircleBorders(ctx, vm, arc, inner);
  }
  if (inner) {
    clipArc(ctx, arc);
  }
  ctx.beginPath();
  ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.endAngle);
  ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
  ctx.closePath();
  ctx.stroke();
}
class Arc extends Element$1 {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.circumference = undefined;
    this.startAngle = undefined;
    this.endAngle = undefined;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    if (cfg) {
      _extends(this, cfg);
    }
  }
  inRange(chartX, chartY, useFinalPosition) {
    var point = this.getProps(['x', 'y'], useFinalPosition);
    var {
      angle,
      distance
    } = getAngleFromPoint(point, {
      x: chartX,
      y: chartY
    });
    var {
      startAngle,
      endAngle,
      innerRadius,
      outerRadius,
      circumference
    } = this.getProps(['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'], useFinalPosition);
    var betweenAngles = circumference >= TAU$1 || _angleBetween(angle, startAngle, endAngle);
    var withinRadius = distance >= innerRadius && distance <= outerRadius;
    return betweenAngles && withinRadius;
  }
  getCenterPoint(useFinalPosition) {
    var {
      x,
      y,
      startAngle,
      endAngle,
      innerRadius,
      outerRadius
    } = this.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'], useFinalPosition);
    var halfAngle = (startAngle + endAngle) / 2;
    var halfRadius = (innerRadius + outerRadius) / 2;
    return {
      x: x + Math.cos(halfAngle) * halfRadius,
      y: y + Math.sin(halfAngle) * halfRadius
    };
  }
  tooltipPosition(useFinalPosition) {
    return this.getCenterPoint(useFinalPosition);
  }
  draw(ctx) {
    var me = this;
    var options = me.options;
    var pixelMargin = options.borderAlign === 'inner' ? 0.33 : 0;
    var arc = {
      x: me.x,
      y: me.y,
      innerRadius: me.innerRadius,
      outerRadius: Math.max(me.outerRadius - pixelMargin, 0),
      pixelMargin,
      startAngle: me.startAngle,
      endAngle: me.endAngle,
      fullCircles: Math.floor(me.circumference / TAU$1)
    };
    var i;
    ctx.save();
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    if (arc.fullCircles) {
      arc.endAngle = arc.startAngle + TAU$1;
      ctx.beginPath();
      ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
      ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
      ctx.closePath();
      for (i = 0; i < arc.fullCircles; ++i) {
        ctx.fill();
      }
      arc.endAngle = arc.startAngle + me.circumference % TAU$1;
    }
    ctx.beginPath();
    ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
    ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
    ctx.closePath();
    ctx.fill();
    if (options.borderWidth) {
      drawBorder(ctx, me, arc);
    }
    ctx.restore();
  }
}
_defineProperty(Arc, "_type", 'arc');

function _pointInLine(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: p1.y + t * (p2.y - p1.y)
  };
}
function _steppedInterpolation(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y : mode === 'after' ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
  };
}
function _bezierInterpolation(p1, p2, t, mode) {
  var cp1 = {
    x: p1.controlPointNextX,
    y: p1.controlPointNextY
  };
  var cp2 = {
    x: p2.controlPointPreviousX,
    y: p2.controlPointPreviousY
  };
  var a = _pointInLine(p1, cp1, t);
  var b = _pointInLine(cp1, cp2, t);
  var c = _pointInLine(cp2, p2, t);
  var d = _pointInLine(a, b, t);
  var e = _pointInLine(b, c, t);
  return _pointInLine(d, e, t);
}

function propertyFn(property) {
  if (property === 'angle') {
    return {
      between: _angleBetween,
      compare: _angleDiff,
      normalize: _normalizeAngle
    };
  }
  return {
    between: (n, s, e) => n >= s && n <= e,
    compare: (a, b) => a - b,
    normalize: x => x
  };
}
function makeSubSegment(start, end, loop, count) {
  return {
    start: start % count,
    end: end % count,
    loop: loop && (end - start + 1) % count === 0
  };
}
function getSegment(segment, points, bounds) {
  var {
    property,
    start: startBound,
    end: endBound
  } = bounds;
  var {
    between,
    normalize
  } = propertyFn(property);
  var count = points.length;
  var {
    start,
    end,
    loop
  } = segment;
  var i, ilen;
  if (loop) {
    start += count;
    end += count;
    for (i = 0, ilen = count; i < ilen; ++i) {
      if (!between(normalize(points[start % count][property]), startBound, endBound)) {
        break;
      }
      start--;
      end--;
    }
    start %= count;
    end %= count;
  }
  if (end < start) {
    end += count;
  }
  return {
    start,
    end,
    loop
  };
}
function _boundSegment(segment, points, bounds) {
  if (!bounds) {
    return [segment];
  }
  var {
    property,
    start: startBound,
    end: endBound
  } = bounds;
  var count = points.length;
  var {
    compare,
    between,
    normalize
  } = propertyFn(property);
  var {
    start,
    end,
    loop
  } = getSegment(segment, points, bounds);
  var result = [];
  var inside = false;
  var subStart = null;
  var i, value, point, prev;
  for (i = start; i <= end; ++i) {
    point = points[i % count];
    if (point.skip) {
      continue;
    }
    value = normalize(point[property]);
    inside = between(value, startBound, endBound);
    if (subStart === null && inside) {
      subStart = i > start && compare(value, startBound) > 0 ? prev : i;
    }
    if (subStart !== null && (!inside || compare(value, endBound) === 0)) {
      result.push(makeSubSegment(subStart, i, loop, count));
      subStart = null;
    }
    prev = i;
  }
  if (subStart !== null) {
    result.push(makeSubSegment(subStart, end, loop, count));
  }
  return result;
}
function _boundSegments(line, bounds) {
  var result = [];
  var segments = line.segments;
  for (var i = 0; i < segments.length; i++) {
    var sub = _boundSegment(segments[i], line.points, bounds);
    if (sub.length) {
      result.push(...sub);
    }
  }
  return result;
}
function findStartAndEnd(points, count, loop, spanGaps) {
  var start = 0;
  var end = count - 1;
  if (loop && !spanGaps) {
    while (start < count && !points[start].skip) {
      start++;
    }
  }
  while (start < count && points[start].skip) {
    start++;
  }
  start %= count;
  if (loop) {
    end += start;
  }
  while (end > start && points[end % count].skip) {
    end--;
  }
  end %= count;
  return {
    start,
    end
  };
}
function solidSegments(points, start, max, loop) {
  var count = points.length;
  var result = [];
  var last = start;
  var prev = points[start];
  var end;
  for (end = start + 1; end <= max; ++end) {
    var cur = points[end % count];
    if (cur.skip || cur.stop) {
      if (!prev.skip) {
        loop = false;
        result.push({
          start: start % count,
          end: (end - 1) % count,
          loop
        });
        start = last = cur.stop ? end : null;
      }
    } else {
      last = end;
      if (prev.skip) {
        start = end;
      }
    }
    prev = cur;
  }
  if (last !== null) {
    result.push({
      start: start % count,
      end: last % count,
      loop
    });
  }
  return result;
}
function _computeSegments(line) {
  var points = line.points;
  var spanGaps = line.options.spanGaps;
  var count = points.length;
  if (!count) {
    return [];
  }
  var loop = !!line._loop;
  var {
    start,
    end
  } = findStartAndEnd(points, count, loop, spanGaps);
  if (spanGaps === true) {
    return [{
      start,
      end,
      loop
    }];
  }
  var max = end < start ? end + count : end;
  var completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
  return solidSegments(points, start, max, completeLoop);
}

var defaultColor = defaults.color;
defaults.set('elements', {
  line: {
    backgroundColor: defaultColor,
    borderCapStyle: 'butt',
    borderColor: defaultColor,
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: true,
    fill: true,
    tension: 0.4
  }
});
function setStyle(ctx, vm) {
  ctx.lineCap = vm.borderCapStyle;
  ctx.setLineDash(vm.borderDash);
  ctx.lineDashOffset = vm.borderDashOffset;
  ctx.lineJoin = vm.borderJoinStyle;
  ctx.lineWidth = vm.borderWidth;
  ctx.strokeStyle = vm.borderColor;
}
function lineTo(ctx, previous, target) {
  ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
  if (options.stepped) {
    return _steppedLineTo;
  }
  if (options.tension) {
    return _bezierCurveTo;
  }
  return lineTo;
}
function pathSegment(ctx, line, segment, params) {
  var {
    start,
    end,
    loop
  } = segment;
  var {
    points,
    options
  } = line;
  var lineMethod = getLineMethod(options);
  var count = points.length;
  var {
    move = true,
    reverse
  } = params || {};
  var ilen = end < start ? count + end - start : end - start;
  var i, point, prev;
  for (i = 0; i <= ilen; ++i) {
    point = points[(start + (reverse ? ilen - i : i)) % count];
    if (point.skip) {
      continue;
    } else if (move) {
      ctx.moveTo(point.x, point.y);
      move = false;
    } else {
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    prev = point;
  }
  if (loop) {
    point = points[(start + (reverse ? ilen : 0)) % count];
    lineMethod(ctx, prev, point, reverse, options.stepped);
  }
  return !!loop;
}
function fastPathSegment(ctx, line, segment, params) {
  var points = line.points;
  var count = points.length;
  var {
    start,
    end
  } = segment;
  var {
    move = true,
    reverse
  } = params || {};
  var ilen = end < start ? count + end - start : end - start;
  var avgX = 0;
  var countX = 0;
  var i, point, prevX, minY, maxY, lastY;
  if (move) {
    point = points[(start + (reverse ? ilen : 0)) % count];
    ctx.moveTo(point.x, point.y);
  }
  for (i = 0; i <= ilen; ++i) {
    point = points[(start + (reverse ? ilen - i : i)) % count];
    if (point.skip) {
      continue;
    }
    var x = point.x;
    var y = point.y;
    var truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
      } else if (y > maxY) {
        maxY = y;
      }
      avgX = (countX * avgX + x) / ++countX;
    } else {
      if (minY !== maxY) {
        ctx.lineTo(avgX, maxY);
        ctx.lineTo(avgX, minY);
        ctx.lineTo(avgX, lastY);
      }
      ctx.lineTo(x, y);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
    }
    lastY = y;
  }
}
function _getSegmentMethod(line) {
  var opts = line.options;
  var borderDash = opts.borderDash && opts.borderDash.length;
  var useFastPath = !line._loop && !opts.tension && !opts.stepped && !borderDash;
  return useFastPath ? fastPathSegment : pathSegment;
}
function _getInterpolationMethod(options) {
  if (options.stepped) {
    return _steppedInterpolation;
  }
  if (options.tension) {
    return _bezierInterpolation;
  }
  return _pointInLine;
}
class Line extends Element$1 {
  constructor(cfg) {
    super();
    this.options = undefined;
    this._loop = undefined;
    this._fullLoop = undefined;
    this._controlPointsUpdated = undefined;
    this._points = undefined;
    this._segments = undefined;
    if (cfg) {
      _extends(this, cfg);
    }
  }
  updateControlPoints(chartArea) {
    var me = this;
    if (me._controlPointsUpdated) {
      return;
    }
    var options = me.options;
    if (options.tension && !options.stepped) {
      var loop = options.spanGaps ? me._loop : me._fullLoop;
      _updateBezierControlPoints(me._points, options, chartArea, loop);
    }
  }
  set points(points) {
    this._points = points;
    delete this._segments;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = _computeSegments(this));
  }
  first() {
    var segments = this.segments;
    var points = this.points;
    return segments.length && points[segments[0].start];
  }
  last() {
    var segments = this.segments;
    var points = this.points;
    var count = segments.length;
    return count && points[segments[count - 1].end];
  }
  interpolate(point, property) {
    var me = this;
    var options = me.options;
    var value = point[property];
    var points = me.points;
    var segments = _boundSegments(me, {
      property,
      start: value,
      end: value
    });
    if (!segments.length) {
      return;
    }
    var result = [];
    var _interpolate = _getInterpolationMethod(options);
    var i, ilen;
    for (i = 0, ilen = segments.length; i < ilen; ++i) {
      var {
        start,
        end
      } = segments[i];
      var p1 = points[start];
      var p2 = points[end];
      if (p1 === p2) {
        result.push(p1);
        continue;
      }
      var t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
      var interpolated = _interpolate(p1, p2, t, options.stepped);
      interpolated[property] = point[property];
      result.push(interpolated);
    }
    return result.length === 1 ? result[0] : result;
  }
  pathSegment(ctx, segment, params) {
    var segmentMethod = _getSegmentMethod(this);
    return segmentMethod(ctx, this, segment, params);
  }
  path(ctx) {
    var me = this;
    var segments = me.segments;
    var ilen = segments.length;
    var segmentMethod = _getSegmentMethod(me);
    var loop = me._loop;
    for (var i = 0; i < ilen; ++i) {
      loop &= segmentMethod(ctx, me, segments[i]);
    }
    return !!loop;
  }
  draw(ctx) {
    var me = this;
    if (!me.points.length) {
      return;
    }
    ctx.save();
    setStyle(ctx, me.options);
    ctx.beginPath();
    if (me.path(ctx)) {
      ctx.closePath();
    }
    ctx.stroke();
    ctx.restore();
  }
}
_defineProperty(Line, "_type", 'line');

var defaultColor$1 = defaults.color;
defaults.set('elements', {
  point: {
    backgroundColor: defaultColor$1,
    borderColor: defaultColor$1,
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3
  }
});
class Point extends Element$1 {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.skip = undefined;
    this.stop = undefined;
    if (cfg) {
      _extends(this, cfg);
    }
  }
  inRange(mouseX, mouseY, useFinalPosition) {
    var options = this.options;
    var {
      x,
      y
    } = this.getProps(['x', 'y'], useFinalPosition);
    return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
  }
  inXRange(mouseX, useFinalPosition) {
    var options = this.options;
    var {
      x
    } = this.getProps(['x'], useFinalPosition);
    return Math.abs(mouseX - x) < options.radius + options.hitRadius;
  }
  inYRange(mouseY, useFinalPosition) {
    var options = this.options;
    var {
      y
    } = this.getProps(['x'], useFinalPosition);
    return Math.abs(mouseY - y) < options.radius + options.hitRadius;
  }
  getCenterPoint(useFinalPosition) {
    var {
      x,
      y
    } = this.getProps(['x', 'y'], useFinalPosition);
    return {
      x,
      y
    };
  }
  size() {
    var options = this.options || {};
    var radius = Math.max(options.radius, options.hoverRadius) || 0;
    var borderWidth = radius && options.borderWidth || 0;
    return (radius + borderWidth) * 2;
  }
  draw(ctx, chartArea) {
    var me = this;
    var options = me.options;
    if (me.skip || options.radius <= 0) {
      return;
    }
    if (chartArea === undefined || _isPointInArea(me, chartArea)) {
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.fillStyle = options.backgroundColor;
      drawPoint(ctx, options, me.x, me.y);
    }
  }
  getRange() {
    var options = this.options || {};
    return options.radius + options.hitRadius;
  }
}
_defineProperty(Point, "_type", 'point');

var defaultColor$2 = defaults.color;
defaults.set('elements', {
  rectangle: {
    backgroundColor: defaultColor$2,
    borderColor: defaultColor$2,
    borderSkipped: 'bottom',
    borderWidth: 0
  }
});
function getBarBounds(bar, useFinalPosition) {
  var {
    x,
    y,
    base,
    width,
    height
  } = bar.getProps(['x', 'y', 'base', 'width', 'height'], useFinalPosition);
  var left, right, top, bottom, half;
  if (bar.horizontal) {
    half = height / 2;
    left = Math.min(x, base);
    right = Math.max(x, base);
    top = y - half;
    bottom = y + half;
  } else {
    half = width / 2;
    left = x - half;
    right = x + half;
    top = Math.min(y, base);
    bottom = Math.max(y, base);
  }
  return {
    left,
    top,
    right,
    bottom
  };
}
function swap(orig, v1, v2) {
  return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function parseBorderSkipped(bar) {
  var edge = bar.options.borderSkipped;
  var res = {};
  if (!edge) {
    return res;
  }
  if (bar.horizontal) {
    if (bar.base > bar.x) {
      edge = swap(edge, 'left', 'right');
    }
  } else if (bar.base < bar.y) {
    edge = swap(edge, 'bottom', 'top');
  }
  res[edge] = true;
  return res;
}
function skipOrLimit(skip, value, min, max) {
  return skip ? 0 : Math.max(Math.min(value, max), min);
}
function parseBorderWidth(bar, maxW, maxH) {
  var value = bar.options.borderWidth;
  var skip = parseBorderSkipped(bar);
  var t, r, b, l;
  if (isObject(value)) {
    t = +value.top || 0;
    r = +value.right || 0;
    b = +value.bottom || 0;
    l = +value.left || 0;
  } else {
    t = r = b = l = +value || 0;
  }
  return {
    t: skipOrLimit(skip.top, t, 0, maxH),
    r: skipOrLimit(skip.right, r, 0, maxW),
    b: skipOrLimit(skip.bottom, b, 0, maxH),
    l: skipOrLimit(skip.left, l, 0, maxW)
  };
}
function boundingRects(bar) {
  var bounds = getBarBounds(bar);
  var width = bounds.right - bounds.left;
  var height = bounds.bottom - bounds.top;
  var border = parseBorderWidth(bar, width / 2, height / 2);
  return {
    outer: {
      x: bounds.left,
      y: bounds.top,
      w: width,
      h: height
    },
    inner: {
      x: bounds.left + border.l,
      y: bounds.top + border.t,
      w: width - border.l - border.r,
      h: height - border.t - border.b
    }
  };
}
function inRange(bar, x, y, useFinalPosition) {
  var skipX = x === null;
  var skipY = y === null;
  var bounds = !bar || skipX && skipY ? false : getBarBounds(bar, useFinalPosition);
  return bounds && (skipX || x >= bounds.left && x <= bounds.right) && (skipY || y >= bounds.top && y <= bounds.bottom);
}
class Rectangle extends Element$1 {
  constructor(cfg) {
    super();
    this.options = undefined;
    this.horizontal = undefined;
    this.base = undefined;
    this.width = undefined;
    this.height = undefined;
    if (cfg) {
      _extends(this, cfg);
    }
  }
  draw(ctx) {
    var options = this.options;
    var {
      inner,
      outer
    } = boundingRects(this);
    ctx.save();
    if (outer.w !== inner.w || outer.h !== inner.h) {
      ctx.beginPath();
      ctx.rect(outer.x, outer.y, outer.w, outer.h);
      ctx.clip();
      ctx.rect(inner.x, inner.y, inner.w, inner.h);
      ctx.fillStyle = options.borderColor;
      ctx.fill('evenodd');
    }
    ctx.fillStyle = options.backgroundColor;
    ctx.fillRect(inner.x, inner.y, inner.w, inner.h);
    ctx.restore();
  }
  inRange(mouseX, mouseY, useFinalPosition) {
    return inRange(this, mouseX, mouseY, useFinalPosition);
  }
  inXRange(mouseX, useFinalPosition) {
    return inRange(this, mouseX, null, useFinalPosition);
  }
  inYRange(mouseY, useFinalPosition) {
    return inRange(this, null, mouseY, useFinalPosition);
  }
  getCenterPoint(useFinalPosition) {
    var {
      x,
      y,
      base,
      horizontal
    } = this.getProps(['x', 'y', 'base', 'horizontal', useFinalPosition]);
    return {
      x: horizontal ? (x + base) / 2 : x,
      y: horizontal ? y : (y + base) / 2
    };
  }
  getRange(axis) {
    return axis === 'x' ? this.width / 2 : this.height / 2;
  }
}
_defineProperty(Rectangle, "_type", 'rectangle');



var elements = /*#__PURE__*/Object.freeze({
__proto__: null,
Arc: Arc,
Line: Line,
Point: Point,
Rectangle: Rectangle
});

defaults.set('bar', {
  hover: {
    mode: 'index'
  },
  datasets: {
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    animation: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'base', 'width', 'height']
      }
    }
  },
  scales: {
    x: {
      type: 'category',
      offset: true,
      gridLines: {
        offsetGridLines: true
      }
    },
    y: {
      type: 'linear',
      beginAtZero: true
    }
  }
});
function computeMinSampleSize(scale, pixels) {
  var min = scale._length;
  var prev, curr, i, ilen;
  for (i = 1, ilen = pixels.length; i < ilen; ++i) {
    min = Math.min(min, Math.abs(pixels[i] - pixels[i - 1]));
  }
  for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
    curr = scale.getPixelForTick(i);
    min = i > 0 ? Math.min(min, Math.abs(curr - prev)) : min;
    prev = curr;
  }
  return min;
}
function computeFitCategoryTraits(index, ruler, options) {
  var thickness = options.barThickness;
  var count = ruler.stackCount;
  var curr = ruler.pixels[index];
  var min = isNullOrUndef(thickness) ? computeMinSampleSize(ruler.scale, ruler.pixels) : -1;
  var size, ratio;
  if (isNullOrUndef(thickness)) {
    size = min * options.categoryPercentage;
    ratio = options.barPercentage;
  } else {
    size = thickness * count;
    ratio = 1;
  }
  return {
    chunk: size / count,
    ratio,
    start: curr - size / 2
  };
}
function computeFlexCategoryTraits(index, ruler, options) {
  var pixels = ruler.pixels;
  var curr = pixels[index];
  var prev = index > 0 ? pixels[index - 1] : null;
  var next = index < pixels.length - 1 ? pixels[index + 1] : null;
  var percent = options.categoryPercentage;
  if (prev === null) {
    prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
  }
  if (next === null) {
    next = curr + curr - prev;
  }
  var start = curr - (curr - Math.min(prev, next)) / 2 * percent;
  var size = Math.abs(next - prev) / 2 * percent;
  return {
    chunk: size / ruler.stackCount,
    ratio: options.barPercentage,
    start
  };
}
function parseFloatBar(arr, item, vScale, i) {
  var startValue = vScale.parse(arr[0], i);
  var endValue = vScale.parse(arr[1], i);
  var min = Math.min(startValue, endValue);
  var max = Math.max(startValue, endValue);
  var barStart = min;
  var barEnd = max;
  if (Math.abs(min) > Math.abs(max)) {
    barStart = max;
    barEnd = min;
  }
  item[vScale.axis] = barEnd;
  item._custom = {
    barStart,
    barEnd,
    start: startValue,
    end: endValue,
    min,
    max
  };
}
function parseArrayOrPrimitive(meta, data, start, count) {
  var iScale = meta.iScale;
  var vScale = meta.vScale;
  var labels = iScale.getLabels();
  var singleScale = iScale === vScale;
  var parsed = [];
  var i, ilen, item, entry;
  for (i = start, ilen = start + count; i < ilen; ++i) {
    entry = data[i];
    item = {};
    item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
    if (isArray(entry)) {
      parseFloatBar(entry, item, vScale, i);
    } else {
      item[vScale.axis] = vScale.parse(entry, i);
    }
    parsed.push(item);
  }
  return parsed;
}
function isFloatBar(custom) {
  return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
class BarController extends DatasetController {
  parsePrimitiveData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }
  parseArrayData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }
  parseObjectData(meta, data, start, count) {
    var {
      iScale,
      vScale
    } = meta;
    var vProp = vScale.axis;
    var parsed = [];
    var i, ilen, item, obj, value;
    for (i = start, ilen = start + count; i < ilen; ++i) {
      obj = data[i];
      item = {};
      item[iScale.axis] = iScale.parseObject(obj, iScale.axis, i);
      value = obj[vProp];
      if (isArray(value)) {
        parseFloatBar(value, item, vScale, i);
      } else {
        item[vScale.axis] = vScale.parseObject(obj, vProp, i);
      }
      parsed.push(item);
    }
    return parsed;
  }
  getLabelAndValue(index) {
    var me = this;
    var meta = me._cachedMeta;
    var {
      iScale,
      vScale
    } = meta;
    var parsed = me.getParsed(index);
    var custom = parsed._custom;
    var value = isFloatBar(custom) ? '[' + custom.start + ', ' + custom.end + ']' : '' + vScale.getLabelForValue(parsed[vScale.axis]);
    return {
      label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
      value
    };
  }
  initialize() {
    var me = this;
    super.initialize();
    var meta = me._cachedMeta;
    meta.stack = me.getDataset().stack;
    meta.bar = true;
  }
  update(mode) {
    var me = this;
    var meta = me._cachedMeta;
    me.updateElements(meta.data, 0, mode);
  }
  updateElements(rectangles, start, mode) {
    var me = this;
    var reset = mode === 'reset';
    var vscale = me._cachedMeta.vScale;
    var base = vscale.getBasePixel();
    var horizontal = vscale.isHorizontal();
    var ruler = me._getRuler();
    var firstOpts = me.resolveDataElementOptions(start, mode);
    var sharedOptions = me.getSharedOptions(mode, rectangles[start], firstOpts);
    var includeOptions = me.includeOptions(mode, sharedOptions);
    var i;
    for (i = 0; i < rectangles.length; i++) {
      var index = start + i;
      var options = me.resolveDataElementOptions(index, mode);
      var vpixels = me._calculateBarValuePixels(index, options);
      var ipixels = me._calculateBarIndexPixels(index, ruler, options);
      var properties = {
        horizontal,
        base: reset ? base : vpixels.base,
        x: horizontal ? reset ? base : vpixels.head : ipixels.center,
        y: horizontal ? ipixels.center : reset ? base : vpixels.head,
        height: horizontal ? ipixels.size : undefined,
        width: horizontal ? undefined : ipixels.size
      };
      if (includeOptions) {
        properties.options = options;
      }
      me.updateElement(rectangles[i], index, properties, mode);
    }
    me.updateSharedOptions(sharedOptions, mode);
  }
  _getStacks(last) {
    var me = this;
    var meta = me._cachedMeta;
    var iScale = meta.iScale;
    var metasets = iScale.getMatchingVisibleMetas(me._type);
    var stacked = iScale.options.stacked;
    var ilen = metasets.length;
    var stacks = [];
    var i, item;
    for (i = 0; i < ilen; ++i) {
      item = metasets[i];
      if (stacked === false || stacks.indexOf(item.stack) === -1 || stacked === undefined && item.stack === undefined) {
        stacks.push(item.stack);
      }
      if (item.index === last) {
        break;
      }
    }
    if (!stacks.length) {
      stacks.push(undefined);
    }
    return stacks;
  }
  _getStackCount() {
    return this._getStacks().length;
  }
  _getStackIndex(datasetIndex, name) {
    var stacks = this._getStacks(datasetIndex);
    var index = name !== undefined ? stacks.indexOf(name) : -1;
    return index === -1 ? stacks.length - 1 : index;
  }
  _getRuler() {
    var me = this;
    var meta = me._cachedMeta;
    var iScale = meta.iScale;
    var pixels = [];
    var i, ilen;
    for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
      pixels.push(iScale.getPixelForValue(me.getParsed(i)[iScale.axis]));
    }
    return {
      pixels,
      start: iScale._startPixel,
      end: iScale._endPixel,
      stackCount: me._getStackCount(),
      scale: iScale
    };
  }
  _calculateBarValuePixels(index, options) {
    var me = this;
    var meta = me._cachedMeta;
    var vScale = meta.vScale;
    var minBarLength = options.minBarLength;
    var parsed = me.getParsed(index);
    var custom = parsed._custom;
    var value = parsed[vScale.axis];
    var start = 0;
    var length = meta._stacked ? me.applyStack(vScale, parsed) : value;
    var head, size;
    if (length !== value) {
      start = length - value;
      length = value;
    }
    if (isFloatBar(custom)) {
      value = custom.barStart;
      length = custom.barEnd - custom.barStart;
      if (value !== 0 && sign(value) !== sign(custom.barEnd)) {
        start = 0;
      }
      start += value;
    }
    var base = _limitValue(vScale.getPixelForValue(start), vScale._startPixel - 10, vScale._endPixel + 10);
    head = vScale.getPixelForValue(start + length);
    size = head - base;
    if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
      size = size < 0 ? -minBarLength : minBarLength;
      head = base + size;
    }
    return {
      size,
      base,
      head,
      center: head + size / 2
    };
  }
  _calculateBarIndexPixels(index, ruler, options) {
    var me = this;
    var range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options) : computeFitCategoryTraits(index, ruler, options);
    var stackIndex = me._getStackIndex(me.index, me._cachedMeta.stack);
    var center = range.start + range.chunk * stackIndex + range.chunk / 2;
    var size = Math.min(valueOrDefault(options.maxBarThickness, Infinity), range.chunk * range.ratio);
    return {
      base: center - size / 2,
      head: center + size / 2,
      center,
      size
    };
  }
  draw() {
    var me = this;
    var chart = me.chart;
    var meta = me._cachedMeta;
    var vScale = meta.vScale;
    var rects = meta.data;
    var ilen = rects.length;
    var i = 0;
    clipArea(chart.ctx, chart.chartArea);
    for (; i < ilen; ++i) {
      if (!isNaN(me.getParsed(i)[vScale.axis])) {
        rects[i].draw(me._ctx);
      }
    }
    unclipArea(chart.ctx);
  }
}
BarController.prototype.dataElementType = Rectangle;
BarController.prototype.dataElementOptions = ['backgroundColor', 'borderColor', 'borderSkipped', 'borderWidth', 'barPercentage', 'barThickness', 'categoryPercentage', 'maxBarThickness', 'minBarLength'];

defaults.set('bubble', {
  animation: {
    numbers: {
      properties: ['x', 'y', 'borderWidth', 'radius']
    }
  },
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  },
  tooltips: {
    callbacks: {
      title() {
        return '';
      }
    }
  }
});
class BubbleController extends DatasetController {
  parseObjectData(meta, data, start, count) {
    var {
      xScale,
      yScale
    } = meta;
    var parsed = [];
    var i, ilen, item;
    for (i = start, ilen = start + count; i < ilen; ++i) {
      item = data[i];
      parsed.push({
        x: xScale.parseObject(item, 'x', i),
        y: yScale.parseObject(item, 'y', i),
        _custom: item && item.r && +item.r
      });
    }
    return parsed;
  }
  getMaxOverflow() {
    var me = this;
    var meta = me._cachedMeta;
    var i = (meta.data || []).length - 1;
    var max = 0;
    for (; i >= 0; --i) {
      max = Math.max(max, me.getStyle(i, true).radius);
    }
    return max > 0 && max;
  }
  getLabelAndValue(index) {
    var me = this;
    var meta = me._cachedMeta;
    var {
      xScale,
      yScale
    } = meta;
    var parsed = me.getParsed(index);
    var x = xScale.getLabelForValue(parsed.x);
    var y = yScale.getLabelForValue(parsed.y);
    var r = parsed._custom;
    return {
      label: meta.label,
      value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
    };
  }
  update(mode) {
    var me = this;
    var points = me._cachedMeta.data;
    me.updateElements(points, 0, mode);
  }
  updateElements(points, start, mode) {
    var me = this;
    var reset = mode === 'reset';
    var {
      xScale,
      yScale
    } = me._cachedMeta;
    var firstOpts = me.resolveDataElementOptions(start, mode);
    var sharedOptions = me.getSharedOptions(mode, points[start], firstOpts);
    var includeOptions = me.includeOptions(mode, sharedOptions);
    for (var i = 0; i < points.length; i++) {
      var point = points[i];
      var index = start + i;
      var parsed = !reset && me.getParsed(index);
      var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(parsed.x);
      var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(parsed.y);
      var properties = {
        x,
        y,
        skip: isNaN(x) || isNaN(y)
      };
      if (includeOptions) {
        properties.options = me.resolveDataElementOptions(i, mode);
        if (reset) {
          properties.options.radius = 0;
        }
      }
      me.updateElement(point, index, properties, mode);
    }
    me.updateSharedOptions(sharedOptions, mode);
  }
  resolveDataElementOptions(index, mode) {
    var me = this;
    var chart = me.chart;
    var dataset = me.getDataset();
    var parsed = me.getParsed(index);
    var values = super.resolveDataElementOptions(index, mode);
    var context = {
      chart,
      dataIndex: index,
      dataset,
      datasetIndex: me.index
    };
    if (values.$shared) {
      values = _extends({}, values, {
        $shared: false
      });
    }
    if (mode !== 'active') {
      values.radius = 0;
    }
    values.radius += resolve([parsed && parsed._custom, me._config.radius, chart.options.elements.point.radius], context, index);
    return values;
  }
}
BubbleController.prototype.dataElementType = Point;
BubbleController.prototype.dataElementOptions = ['backgroundColor', 'borderColor', 'borderWidth', 'hitRadius', 'radius', 'pointStyle', 'rotation'];

var PI$2 = Math.PI;
var DOUBLE_PI$1 = PI$2 * 2;
var HALF_PI$1 = PI$2 / 2;
defaults.set('doughnut', {
  animation: {
    numbers: {
      type: 'number',
      properties: ['circumference', 'endAngle', 'innerRadius', 'outerRadius', 'startAngle', 'x', 'y']
    },
    animateRotate: true,
    animateScale: false
  },
  legend: {
    labels: {
      generateLabels(chart) {
        var data = chart.data;
        if (data.labels.length && data.datasets.length) {
          return data.labels.map((label, i) => {
            var meta = chart.getDatasetMeta(0);
            var style = meta.controller.getStyle(i);
            return {
              text: label,
              fillStyle: style.backgroundColor,
              strokeStyle: style.borderColor,
              lineWidth: style.borderWidth,
              hidden: !chart.getDataVisibility(i),
              index: i
            };
          });
        }
        return [];
      }
    },
    onClick(e, legendItem) {
      this.chart.toggleDataVisibility(legendItem.index);
      this.chart.update();
    }
  },
  cutoutPercentage: 50,
  rotation: -HALF_PI$1,
  circumference: DOUBLE_PI$1,
  tooltips: {
    callbacks: {
      title() {
        return '';
      },
      label(tooltipItem, data) {
        var dataLabel = data.labels[tooltipItem.index];
        var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
        if (isArray(dataLabel)) {
          dataLabel = dataLabel.slice();
          dataLabel[0] += value;
        } else {
          dataLabel += value;
        }
        return dataLabel;
      }
    }
  }
});
function getRatioAndOffset(rotation, circumference, cutout) {
  var ratioX = 1;
  var ratioY = 1;
  var offsetX = 0;
  var offsetY = 0;
  if (circumference < DOUBLE_PI$1) {
    var startAngle = rotation % DOUBLE_PI$1;
    startAngle += startAngle >= PI$2 ? -DOUBLE_PI$1 : startAngle < -PI$2 ? DOUBLE_PI$1 : 0;
    var endAngle = startAngle + circumference;
    var startX = Math.cos(startAngle);
    var startY = Math.sin(startAngle);
    var endX = Math.cos(endAngle);
    var endY = Math.sin(endAngle);
    var contains0 = startAngle <= 0 && endAngle >= 0 || endAngle >= DOUBLE_PI$1;
    var contains90 = startAngle <= HALF_PI$1 && endAngle >= HALF_PI$1 || endAngle >= DOUBLE_PI$1 + HALF_PI$1;
    var contains180 = startAngle === -PI$2 || endAngle >= PI$2;
    var contains270 = startAngle <= -HALF_PI$1 && endAngle >= -HALF_PI$1 || endAngle >= PI$2 + HALF_PI$1;
    var minX = contains180 ? -1 : Math.min(startX, startX * cutout, endX, endX * cutout);
    var minY = contains270 ? -1 : Math.min(startY, startY * cutout, endY, endY * cutout);
    var maxX = contains0 ? 1 : Math.max(startX, startX * cutout, endX, endX * cutout);
    var maxY = contains90 ? 1 : Math.max(startY, startY * cutout, endY, endY * cutout);
    ratioX = (maxX - minX) / 2;
    ratioY = (maxY - minY) / 2;
    offsetX = -(maxX + minX) / 2;
    offsetY = -(maxY + minY) / 2;
  }
  return {
    ratioX,
    ratioY,
    offsetX,
    offsetY
  };
}
class DoughnutController extends DatasetController {
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.offsetX = undefined;
    this.offsetY = undefined;
  }
  linkScales() {}
  parse(start, count) {
    var data = this.getDataset().data;
    var meta = this._cachedMeta;
    var i, ilen;
    for (i = start, ilen = start + count; i < ilen; ++i) {
      meta._parsed[i] = +data[i];
    }
  }
  getRingIndex(datasetIndex) {
    var ringIndex = 0;
    for (var j = 0; j < datasetIndex; ++j) {
      if (this.chart.isDatasetVisible(j)) {
        ++ringIndex;
      }
    }
    return ringIndex;
  }
  update(mode) {
    var me = this;
    var chart = me.chart;
    var {
      chartArea,
      options
    } = chart;
    var meta = me._cachedMeta;
    var arcs = meta.data;
    var cutout = options.cutoutPercentage / 100 || 0;
    var chartWeight = me._getRingWeight(me.index);
    var {
      ratioX,
      ratioY,
      offsetX,
      offsetY
    } = getRatioAndOffset(options.rotation, options.circumference, cutout);
    var borderWidth = me.getMaxBorderWidth();
    var maxWidth = (chartArea.right - chartArea.left - borderWidth) / ratioX;
    var maxHeight = (chartArea.bottom - chartArea.top - borderWidth) / ratioY;
    var outerRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
    var innerRadius = Math.max(outerRadius * cutout, 0);
    var radiusLength = (outerRadius - innerRadius) / me._getVisibleDatasetWeightTotal();
    me.offsetX = offsetX * outerRadius;
    me.offsetY = offsetY * outerRadius;
    meta.total = me.calculateTotal();
    me.outerRadius = outerRadius - radiusLength * me._getRingWeightOffset(me.index);
    me.innerRadius = Math.max(me.outerRadius - radiusLength * chartWeight, 0);
    me.updateElements(arcs, 0, mode);
  }
  _circumference(i, reset) {
    var me = this;
    var opts = me.chart.options;
    var meta = me._cachedMeta;
    return reset && opts.animation.animateRotate ? 0 : this.chart.getDataVisibility(i) ? me.calculateCircumference(meta._parsed[i] * opts.circumference / DOUBLE_PI$1) : 0;
  }
  updateElements(arcs, start, mode) {
    var me = this;
    var reset = mode === 'reset';
    var chart = me.chart;
    var chartArea = chart.chartArea;
    var opts = chart.options;
    var animationOpts = opts.animation;
    var centerX = (chartArea.left + chartArea.right) / 2;
    var centerY = (chartArea.top + chartArea.bottom) / 2;
    var animateScale = reset && animationOpts.animateScale;
    var innerRadius = animateScale ? 0 : me.innerRadius;
    var outerRadius = animateScale ? 0 : me.outerRadius;
    var firstOpts = me.resolveDataElementOptions(start, mode);
    var sharedOptions = me.getSharedOptions(mode, arcs[start], firstOpts);
    var includeOptions = me.includeOptions(mode, sharedOptions);
    var startAngle = opts.rotation;
    var i;
    for (i = 0; i < start; ++i) {
      startAngle += me._circumference(i, reset);
    }
    for (i = 0; i < arcs.length; ++i) {
      var index = start + i;
      var circumference = me._circumference(index, reset);
      var arc = arcs[i];
      var properties = {
        x: centerX + me.offsetX,
        y: centerY + me.offsetY,
        startAngle,
        endAngle: startAngle + circumference,
        circumference,
        outerRadius,
        innerRadius
      };
      if (includeOptions) {
        properties.options = me.resolveDataElementOptions(index, mode);
      }
      startAngle += circumference;
      me.updateElement(arc, index, properties, mode);
    }
    me.updateSharedOptions(sharedOptions, mode);
  }
  calculateTotal() {
    var meta = this._cachedMeta;
    var metaData = meta.data;
    var total = 0;
    var i;
    for (i = 0; i < metaData.length; i++) {
      var value = meta._parsed[i];
      if (!isNaN(value) && this.chart.getDataVisibility(i)) {
        total += Math.abs(value);
      }
    }
    return total;
  }
  calculateCircumference(value) {
    var total = this._cachedMeta.total;
    if (total > 0 && !isNaN(value)) {
      return DOUBLE_PI$1 * (Math.abs(value) / total);
    }
    return 0;
  }
  getMaxBorderWidth(arcs) {
    var me = this;
    var max = 0;
    var chart = me.chart;
    var i, ilen, meta, controller, options;
    if (!arcs) {
      for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          meta = chart.getDatasetMeta(i);
          arcs = meta.data;
          controller = meta.controller;
          if (controller !== me) {
            controller.configure();
          }
          break;
        }
      }
    }
    if (!arcs) {
      return 0;
    }
    for (i = 0, ilen = arcs.length; i < ilen; ++i) {
      options = controller.resolveDataElementOptions(i);
      if (options.borderAlign !== 'inner') {
        max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
      }
    }
    return max;
  }
  _getRingWeightOffset(datasetIndex) {
    var ringWeightOffset = 0;
    for (var i = 0; i < datasetIndex; ++i) {
      if (this.chart.isDatasetVisible(i)) {
        ringWeightOffset += this._getRingWeight(i);
      }
    }
    return ringWeightOffset;
  }
  _getRingWeight(datasetIndex) {
    return Math.max(valueOrDefault(this.chart.data.datasets[datasetIndex].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
DoughnutController.prototype.dataElementType = Arc;
DoughnutController.prototype.dataElementOptions = ['backgroundColor', 'borderColor', 'borderWidth', 'borderAlign', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth'];

defaults.set('horizontalBar', {
  hover: {
    mode: 'index',
    axis: 'y'
  },
  scales: {
    x: {
      type: 'linear',
      beginAtZero: true
    },
    y: {
      type: 'category',
      offset: true,
      gridLines: {
        offsetGridLines: true
      }
    }
  },
  datasets: {
    categoryPercentage: 0.8,
    barPercentage: 0.9
  },
  elements: {
    rectangle: {
      borderSkipped: 'left'
    }
  },
  tooltips: {
    mode: 'index',
    axis: 'y'
  }
});
class HorizontalBarController extends BarController {
  getValueScaleId() {
    return this._cachedMeta.xAxisID;
  }
  getIndexScaleId() {
    return this._cachedMeta.yAxisID;
  }
}

defaults.set('line', {
  showLines: true,
  spanGaps: false,
  hover: {
    mode: 'index'
  },
  scales: {
    x: {
      type: 'category'
    },
    y: {
      type: 'linear'
    }
  }
});
class LineController extends DatasetController {
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this._showLine = false;
  }
  update(mode) {
    var me = this;
    var meta = me._cachedMeta;
    var line = meta.dataset;
    var points = meta.data || [];
    var options = me.chart.options;
    var config = me._config;
    var showLine = me._showLine = valueOrDefault(config.showLine, options.showLines);
    if (showLine && mode !== 'resize') {
      var properties = {
        points,
        options: me.resolveDatasetElementOptions()
      };
      me.updateElement(line, undefined, properties, mode);
    }
    me.updateElements(points, 0, mode);
  }
  updateElements(points, start, mode) {
    var me = this;
    var reset = mode === 'reset';
    var {
      xScale,
      yScale,
      _stacked
    } = me._cachedMeta;
    var firstOpts = me.resolveDataElementOptions(start, mode);
    var sharedOptions = me.getSharedOptions(mode, points[start], firstOpts);
    var includeOptions = me.includeOptions(mode, sharedOptions);
    var spanGaps = valueOrDefault(me._config.spanGaps, me.chart.options.spanGaps);
    var maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
    var prevParsed;
    for (var i = 0; i < points.length; ++i) {
      var index = start + i;
      var point = points[i];
      var parsed = me.getParsed(index);
      var x = xScale.getPixelForValue(parsed.x);
      var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(_stacked ? me.applyStack(yScale, parsed) : parsed.y);
      var properties = {
        x,
        y,
        skip: isNaN(x) || isNaN(y),
        stop: i > 0 && parsed.x - prevParsed.x > maxGapLength
      };
      if (includeOptions) {
        properties.options = me.resolveDataElementOptions(index, mode);
      }
      me.updateElement(point, index, properties, mode);
      prevParsed = parsed;
    }
    me.updateSharedOptions(sharedOptions, mode);
  }
  resolveDatasetElementOptions(active) {
    var me = this;
    var config = me._config;
    var options = me.chart.options;
    var lineOptions = options.elements.line;
    var values = super.resolveDatasetElementOptions(active);
    values.spanGaps = valueOrDefault(config.spanGaps, options.spanGaps);
    values.tension = valueOrDefault(config.lineTension, lineOptions.tension);
    values.stepped = resolve([config.stepped, lineOptions.stepped]);
    return values;
  }
  getMaxOverflow() {
    var me = this;
    var meta = me._cachedMeta;
    var border = me._showLine && meta.dataset.options.borderWidth || 0;
    var data = meta.data || [];
    if (!data.length) {
      return border;
    }
    var firstPoint = data[0].size();
    var lastPoint = data[data.length - 1].size();
    return Math.max(border, firstPoint, lastPoint) / 2;
  }
  draw() {
    var me = this;
    var ctx = me._ctx;
    var chart = me.chart;
    var meta = me._cachedMeta;
    var points = meta.data || [];
    var area = chart.chartArea;
    var active = [];
    var ilen = points.length;
    var i, point;
    if (me._showLine) {
      meta.dataset.draw(ctx, area);
    }
    for (i = 0; i < ilen; ++i) {
      point = points[i];
      if (point.active) {
        active.push(point);
      } else {
        point.draw(ctx, area);
      }
    }
    for (i = 0, ilen = active.length; i < ilen; ++i) {
      active[i].draw(ctx, area);
    }
  }
}
LineController.prototype.datasetElementType = Line;
LineController.prototype.dataElementType = Point;
LineController.prototype.datasetElementOptions = ['backgroundColor', 'borderCapStyle', 'borderColor', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'borderWidth', 'capBezierPoints', 'cubicInterpolationMode', 'fill'];
LineController.prototype.dataElementOptions = {
  backgroundColor: 'pointBackgroundColor',
  borderColor: 'pointBorderColor',
  borderWidth: 'pointBorderWidth',
  hitRadius: 'pointHitRadius',
  hoverHitRadius: 'pointHitRadius',
  hoverBackgroundColor: 'pointHoverBackgroundColor',
  hoverBorderColor: 'pointHoverBorderColor',
  hoverBorderWidth: 'pointHoverBorderWidth',
  hoverRadius: 'pointHoverRadius',
  pointStyle: 'pointStyle',
  radius: 'pointRadius',
  rotation: 'pointRotation'
};

defaults.set('polarArea', {
  animation: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
    },
    animateRotate: true,
    animateScale: true
  },
  scales: {
    r: {
      type: 'radialLinear',
      angleLines: {
        display: false
      },
      beginAtZero: true,
      gridLines: {
        circular: true
      },
      pointLabels: {
        display: false
      }
    }
  },
  startAngle: 0,
  legend: {
    labels: {
      generateLabels(chart) {
        var data = chart.data;
        if (data.labels.length && data.datasets.length) {
          return data.labels.map((label, i) => {
            var meta = chart.getDatasetMeta(0);
            var style = meta.controller.getStyle(i);
            return {
              text: label,
              fillStyle: style.backgroundColor,
              strokeStyle: style.borderColor,
              lineWidth: style.borderWidth,
              hidden: !chart.getDataVisibility(i),
              index: i
            };
          });
        }
        return [];
      }
    },
    onClick(e, legendItem) {
      this.chart.toggleDataVisibility(legendItem.index);
      this.chart.update();
    }
  },
  tooltips: {
    callbacks: {
      title() {
        return '';
      },
      label(item, data) {
        return data.labels[item.index] + ': ' + item.value;
      }
    }
  }
});
function getStartAngleRadians(deg) {
  return toRadians(deg) - 0.5 * Math.PI;
}
class PolarAreaController extends DatasetController {
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.innerRadius = undefined;
    this.outerRadius = undefined;
  }
  getIndexScaleId() {
    return this._cachedMeta.rAxisID;
  }
  getValueScaleId() {
    return this._cachedMeta.rAxisID;
  }
  update(mode) {
    var arcs = this._cachedMeta.data;
    this._updateRadius();
    this.updateElements(arcs, 0, mode);
  }
  _updateRadius() {
    var me = this;
    var chart = me.chart;
    var chartArea = chart.chartArea;
    var opts = chart.options;
    var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    var outerRadius = Math.max(minSize / 2, 0);
    var innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
    var radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
    me.outerRadius = outerRadius - radiusLength * me.index;
    me.innerRadius = me.outerRadius - radiusLength;
  }
  updateElements(arcs, start, mode) {
    var me = this;
    var reset = mode === 'reset';
    var chart = me.chart;
    var dataset = me.getDataset();
    var opts = chart.options;
    var animationOpts = opts.animation;
    var scale = chart.scales.r;
    var centerX = scale.xCenter;
    var centerY = scale.yCenter;
    var datasetStartAngle = getStartAngleRadians(opts.startAngle);
    var angle = datasetStartAngle;
    var i;
    me._cachedMeta.count = me.countVisibleElements();
    for (i = 0; i < start; ++i) {
      angle += me._computeAngle(i);
    }
    for (i = 0; i < arcs.length; i++) {
      var arc = arcs[i];
      var index = start + i;
      var startAngle = angle;
      var endAngle = angle + me._computeAngle(index);
      var outerRadius = this.chart.getDataVisibility(index) ? scale.getDistanceFromCenterForValue(dataset.data[index]) : 0;
      angle = endAngle;
      if (reset) {
        if (animationOpts.animateScale) {
          outerRadius = 0;
        }
        if (animationOpts.animateRotate) {
          startAngle = datasetStartAngle;
          endAngle = datasetStartAngle;
        }
      }
      var properties = {
        x: centerX,
        y: centerY,
        innerRadius: 0,
        outerRadius,
        startAngle,
        endAngle,
        options: me.resolveDataElementOptions(index)
      };
      me.updateElement(arc, index, properties, mode);
    }
  }
  countVisibleElements() {
    var dataset = this.getDataset();
    var meta = this._cachedMeta;
    var count = 0;
    meta.data.forEach((element, index) => {
      if (!isNaN(dataset.data[index]) && this.chart.getDataVisibility(index)) {
        count++;
      }
    });
    return count;
  }
  _computeAngle(index) {
    var me = this;
    var meta = me._cachedMeta;
    var count = meta.count;
    var dataset = me.getDataset();
    if (isNaN(dataset.data[index]) || !this.chart.getDataVisibility(index)) {
      return 0;
    }
    var context = {
      chart: me.chart,
      dataIndex: index,
      dataset,
      datasetIndex: me.index
    };
    return resolve([me.chart.options.elements.arc.angle, 2 * Math.PI / count], context, index);
  }
}
PolarAreaController.prototype.dataElementType = Arc;
PolarAreaController.prototype.dataElementOptions = ['backgroundColor', 'borderColor', 'borderWidth', 'borderAlign', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth'];

defaults.set('pie', clone(defaults.doughnut));
defaults.set('pie', {
  cutoutPercentage: 0
});

defaults.set('radar', {
  spanGaps: false,
  scales: {
    r: {
      type: 'radialLinear'
    }
  },
  elements: {
    line: {
      tension: 0
    }
  }
});
class RadarController extends DatasetController {
  getIndexScaleId() {
    return this._cachedMeta.rAxisID;
  }
  getValueScaleId() {
    return this._cachedMeta.rAxisID;
  }
  getLabelAndValue(index) {
    var me = this;
    var vScale = me._cachedMeta.vScale;
    var parsed = me.getParsed(index);
    return {
      label: vScale.getLabels()[index],
      value: '' + vScale.getLabelForValue(parsed[vScale.axis])
    };
  }
  update(mode) {
    var me = this;
    var meta = me._cachedMeta;
    var line = meta.dataset;
    var points = meta.data || [];
    var labels = meta.iScale.getLabels();
    var properties = {
      points,
      _loop: true,
      _fullLoop: labels.length === points.length,
      options: me.resolveDatasetElementOptions()
    };
    me.updateElement(line, undefined, properties, mode);
    me.updateElements(points, 0, mode);
    line.updateControlPoints(me.chart.chartArea);
  }
  updateElements(points, start, mode) {
    var me = this;
    var dataset = me.getDataset();
    var scale = me.chart.scales.r;
    var reset = mode === 'reset';
    var i;
    for (i = 0; i < points.length; i++) {
      var point = points[i];
      var index = start + i;
      var options = me.resolveDataElementOptions(index);
      var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);
      var x = reset ? scale.xCenter : pointPosition.x;
      var y = reset ? scale.yCenter : pointPosition.y;
      var properties = {
        x,
        y,
        angle: pointPosition.angle,
        skip: isNaN(x) || isNaN(y),
        options
      };
      me.updateElement(point, index, properties, mode);
    }
  }
  resolveDatasetElementOptions(active) {
    var me = this;
    var config = me._config;
    var options = me.chart.options;
    var values = super.resolveDatasetElementOptions(active);
    values.spanGaps = valueOrDefault(config.spanGaps, options.spanGaps);
    values.tension = valueOrDefault(config.lineTension, options.elements.line.tension);
    return values;
  }
}
RadarController.prototype.datasetElementType = Line;
RadarController.prototype.dataElementType = Point;
RadarController.prototype.datasetElementOptions = ['backgroundColor', 'borderColor', 'borderCapStyle', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'borderWidth', 'fill'];
RadarController.prototype.dataElementOptions = {
  backgroundColor: 'pointBackgroundColor',
  borderColor: 'pointBorderColor',
  borderWidth: 'pointBorderWidth',
  hitRadius: 'pointHitRadius',
  hoverBackgroundColor: 'pointHoverBackgroundColor',
  hoverBorderColor: 'pointHoverBorderColor',
  hoverBorderWidth: 'pointHoverBorderWidth',
  hoverRadius: 'pointHoverRadius',
  pointStyle: 'pointStyle',
  radius: 'pointRadius',
  rotation: 'pointRotation'
};

defaults.set('scatter', {
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  },
  datasets: {
    showLine: false
  },
  tooltips: {
    callbacks: {
      title() {
        return '';
      },
      label(item) {
        return '(' + item.label + ', ' + item.value + ')';
      }
    }
  }
});

var controllers = {
  bar: BarController,
  bubble: BubbleController,
  doughnut: DoughnutController,
  horizontalBar: HorizontalBarController,
  line: LineController,
  polarArea: PolarAreaController,
  pie: DoughnutController,
  radar: RadarController,
  scatter: LineController
};

function _lookup(table, value) {
  var hi = table.length - 1;
  var lo = 0;
  var mid;
  while (hi - lo > 1) {
    mid = lo + hi >> 1;
    if (table[mid] < value) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return {
    lo,
    hi
  };
}
function _lookupByKey(table, key, value) {
  var hi = table.length - 1;
  var lo = 0;
  var mid;
  while (hi - lo > 1) {
    mid = lo + hi >> 1;
    if (table[mid][key] < value) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return {
    lo,
    hi
  };
}
function _rlookupByKey(table, key, value) {
  var hi = table.length - 1;
  var lo = 0;
  var mid;
  while (hi - lo > 1) {
    mid = lo + hi >> 1;
    if (table[mid][key] < value) {
      hi = mid;
    } else {
      lo = mid;
    }
  }
  return {
    lo,
    hi
  };
}

function getRelativePosition$1(e, chart) {
  if ('native' in e) {
    return {
      x: e.x,
      y: e.y
    };
  }
  return helpers.dom.getRelativePosition(e, chart);
}
function evaluateAllVisibleItems(chart, handler) {
  var metasets = chart.getSortedVisibleDatasetMetas();
  var index, data, element;
  for (var i = 0, ilen = metasets.length; i < ilen; ++i) {
    ({
      index,
      data
    } = metasets[i]);
    for (var j = 0, jlen = data.length; j < jlen; ++j) {
      element = data[j];
      if (!element.skip) {
        handler(element, index, j);
      }
    }
  }
}
function binarySearch(metaset, axis, value, intersect) {
  var {
    controller,
    data,
    _sorted
  } = metaset;
  var iScale = controller._cachedMeta.iScale;
  if (iScale && axis === iScale.axis && _sorted && data.length) {
    var lookupMethod = iScale._reversePixels ? _rlookupByKey : _lookupByKey;
    if (!intersect) {
      return lookupMethod(data, axis, value);
    } else if (controller._sharedOptions) {
      var el = data[0];
      var range = typeof el.getRange === 'function' && el.getRange(axis);
      if (range) {
        var start = lookupMethod(data, axis, value - range);
        var end = lookupMethod(data, axis, value + range);
        return {
          lo: start.lo,
          hi: end.hi
        };
      }
    }
  }
  return {
    lo: 0,
    hi: data.length - 1
  };
}
function optimizedEvaluateItems(chart, axis, position, handler, intersect) {
  var metasets = chart.getSortedVisibleDatasetMetas();
  var value = position[axis];
  for (var i = 0, ilen = metasets.length; i < ilen; ++i) {
    var {
      index,
      data
    } = metasets[i];
    var {
      lo,
      hi
    } = binarySearch(metasets[i], axis, value, intersect);
    for (var j = lo; j <= hi; ++j) {
      var element = data[j];
      if (!element.skip) {
        handler(element, index, j);
      }
    }
  }
}
function getDistanceMetricForAxis(axis) {
  var useX = axis.indexOf('x') !== -1;
  var useY = axis.indexOf('y') !== -1;
  return function (pt1, pt2) {
    var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
    var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  };
}
function getIntersectItems(chart, position, axis, useFinalPosition) {
  var items = [];
  if (!_isPointInArea(position, chart.chartArea)) {
    return items;
  }
  var evaluationFunc = function evaluationFunc(element, datasetIndex, index) {
    if (element.inRange(position.x, position.y, useFinalPosition)) {
      items.push({
        element,
        datasetIndex,
        index
      });
    }
  };
  optimizedEvaluateItems(chart, axis, position, evaluationFunc, true);
  return items;
}
function getNearestItems(chart, position, axis, intersect, useFinalPosition) {
  var distanceMetric = getDistanceMetricForAxis(axis);
  var minDistance = Number.POSITIVE_INFINITY;
  var items = [];
  if (!_isPointInArea(position, chart.chartArea)) {
    return items;
  }
  var evaluationFunc = function evaluationFunc(element, datasetIndex, index) {
    if (intersect && !element.inRange(position.x, position.y, useFinalPosition)) {
      return;
    }
    var center = element.getCenterPoint(useFinalPosition);
    var distance = distanceMetric(position, center);
    if (distance < minDistance) {
      items = [{
        element,
        datasetIndex,
        index
      }];
      minDistance = distance;
    } else if (distance === minDistance) {
      items.push({
        element,
        datasetIndex,
        index
      });
    }
  };
  optimizedEvaluateItems(chart, axis, position, evaluationFunc);
  return items;
}
var Interaction = {
  modes: {
    index(chart, e, options, useFinalPosition) {
      var position = getRelativePosition$1(e, chart);
      var axis = options.axis || 'x';
      var items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition) : getNearestItems(chart, position, axis, false, useFinalPosition);
      var elements = [];
      if (!items.length) {
        return [];
      }
      chart.getSortedVisibleDatasetMetas().forEach(meta => {
        var index = items[0].index;
        var element = meta.data[index];
        if (element && !element.skip) {
          elements.push({
            element,
            datasetIndex: meta.index,
            index
          });
        }
      });
      return elements;
    },
    dataset(chart, e, options, useFinalPosition) {
      var position = getRelativePosition$1(e, chart);
      var axis = options.axis || 'xy';
      var items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition) : getNearestItems(chart, position, axis, false, useFinalPosition);
      if (items.length > 0) {
        var datasetIndex = items[0].datasetIndex;
        var data = chart.getDatasetMeta(datasetIndex).data;
        items = [];
        for (var i = 0; i < data.length; ++i) {
          items.push({
            element: data[i],
            datasetIndex,
            index: i
          });
        }
      }
      return items;
    },
    point(chart, e, options, useFinalPosition) {
      var position = getRelativePosition$1(e, chart);
      var axis = options.axis || 'xy';
      return getIntersectItems(chart, position, axis, useFinalPosition);
    },
    nearest(chart, e, options, useFinalPosition) {
      var position = getRelativePosition$1(e, chart);
      var axis = options.axis || 'xy';
      return getNearestItems(chart, position, axis, options.intersect, useFinalPosition);
    },
    x(chart, e, options, useFinalPosition) {
      var position = getRelativePosition$1(e, chart);
      var items = [];
      var intersectsItem = false;
      evaluateAllVisibleItems(chart, (element, datasetIndex, index) => {
        if (element.inXRange(position.x, useFinalPosition)) {
          items.push({
            element,
            datasetIndex,
            index
          });
        }
        if (element.inRange(position.x, position.y, useFinalPosition)) {
          intersectsItem = true;
        }
      });
      if (options.intersect && !intersectsItem) {
        return [];
      }
      return items;
    },
    y(chart, e, options, useFinalPosition) {
      var position = getRelativePosition$1(e, chart);
      var items = [];
      var intersectsItem = false;
      evaluateAllVisibleItems(chart, (element, datasetIndex, index) => {
        if (element.inYRange(position.y, useFinalPosition)) {
          items.push({
            element,
            datasetIndex,
            index
          });
        }
        if (element.inRange(position.x, position.y, useFinalPosition)) {
          intersectsItem = true;
        }
      });
      if (options.intersect && !intersectsItem) {
        return [];
      }
      return items;
    }
  }
};

var STATIC_POSITIONS = ['left', 'top', 'right', 'bottom'];
function filterByPosition(array, position) {
  return array.filter(v => v.pos === position);
}
function filterDynamicPositionByAxis(array, axis) {
  return array.filter(v => STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function sortByWeight(array, reverse) {
  return array.sort((a, b) => {
    var v0 = reverse ? b : a;
    var v1 = reverse ? a : b;
    return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
  });
}
function wrapBoxes(boxes) {
  var layoutBoxes = [];
  var i, ilen, box;
  for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
    box = boxes[i];
    layoutBoxes.push({
      index: i,
      box,
      pos: box.position,
      horizontal: box.isHorizontal(),
      weight: box.weight
    });
  }
  return layoutBoxes;
}
function setLayoutDims(layouts, params) {
  var i, ilen, layout;
  for (i = 0, ilen = layouts.length; i < ilen; ++i) {
    layout = layouts[i];
    layout.width = layout.horizontal ? layout.box.fullWidth && params.availableWidth : params.vBoxMaxWidth;
    layout.height = layout.horizontal && params.hBoxMaxHeight;
  }
}
function buildLayoutBoxes(boxes) {
  var layoutBoxes = wrapBoxes(boxes);
  var left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
  var right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
  var top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
  var bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
  var centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
  var centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
  return {
    leftAndTop: left.concat(top),
    rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
    chartArea: filterByPosition(layoutBoxes, 'chartArea'),
    vertical: left.concat(right).concat(centerVertical),
    horizontal: top.concat(bottom).concat(centerHorizontal)
  };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
  return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateDims(chartArea, params, layout) {
  var box = layout.box;
  var maxPadding = chartArea.maxPadding;
  if (layout.size) {
    chartArea[layout.pos] -= layout.size;
  }
  layout.size = layout.horizontal ? box.height : box.width;
  chartArea[layout.pos] += layout.size;
  if (box.getPadding) {
    var boxPadding = box.getPadding();
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
  }
  var newWidth = params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right');
  var newHeight = params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom');
  if (newWidth !== chartArea.w || newHeight !== chartArea.h) {
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? newWidth !== chartArea.w : newHeight !== chartArea.h;
  }
}
function handleMaxPadding(chartArea) {
  var maxPadding = chartArea.maxPadding;
  function updatePos(pos) {
    var change = Math.max(maxPadding[pos] - chartArea[pos], 0);
    chartArea[pos] += change;
    return change;
  }
  chartArea.y += updatePos('top');
  chartArea.x += updatePos('left');
  updatePos('right');
  updatePos('bottom');
}
function getMargins(horizontal, chartArea) {
  var maxPadding = chartArea.maxPadding;
  function marginForPositions(positions) {
    var margin = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    positions.forEach(pos => {
      margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
    });
    return margin;
  }
  return horizontal ? marginForPositions(['left', 'right']) : marginForPositions(['top', 'bottom']);
}
function fitBoxes(boxes, chartArea, params) {
  var refitBoxes = [];
  var i, ilen, layout, box, refit, changed;
  for (i = 0, ilen = boxes.length; i < ilen; ++i) {
    layout = boxes[i];
    box = layout.box;
    box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
    if (updateDims(chartArea, params, layout)) {
      changed = true;
      if (refitBoxes.length) {
        refit = true;
      }
    }
    if (!box.fullWidth) {
      refitBoxes.push(layout);
    }
  }
  return refit ? fitBoxes(refitBoxes, chartArea, params) || changed : changed;
}
function placeBoxes(boxes, chartArea, params) {
  var userPadding = params.padding;
  var x = chartArea.x;
  var y = chartArea.y;
  var i, ilen, layout, box;
  for (i = 0, ilen = boxes.length; i < ilen; ++i) {
    layout = boxes[i];
    box = layout.box;
    if (layout.horizontal) {
      box.left = box.fullWidth ? userPadding.left : chartArea.left;
      box.right = box.fullWidth ? params.outerWidth - userPadding.right : chartArea.left + chartArea.w;
      box.top = y;
      box.bottom = y + box.height;
      box.width = box.right - box.left;
      y = box.bottom;
    } else {
      box.left = x;
      box.right = x + box.width;
      box.top = chartArea.top;
      box.bottom = chartArea.top + chartArea.h;
      box.height = box.bottom - box.top;
      x = box.right;
    }
  }
  chartArea.x = x;
  chartArea.y = y;
}
defaults.set('layout', {
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});
var layouts = {
  defaults: {},
  addBox(chart, item) {
    if (!chart.boxes) {
      chart.boxes = [];
    }
    item.fullWidth = item.fullWidth || false;
    item.position = item.position || 'top';
    item.weight = item.weight || 0;
    item._layers = item._layers || function () {
      return [{
        z: 0,
        draw(chartArea) {
          item.draw(chartArea);
        }
      }];
    };
    chart.boxes.push(item);
  },
  removeBox(chart, layoutItem) {
    var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
    if (index !== -1) {
      chart.boxes.splice(index, 1);
    }
  },
  configure(chart, item, options) {
    var props = ['fullWidth', 'position', 'weight'];
    var ilen = props.length;
    var i = 0;
    var prop;
    for (; i < ilen; ++i) {
      prop = props[i];
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        item[prop] = options[prop];
      }
    }
  },
  update(chart, width, height) {
    if (!chart) {
      return;
    }
    var layoutOptions = chart.options.layout || {};
    var padding = toPadding(layoutOptions.padding);
    var availableWidth = width - padding.width;
    var availableHeight = height - padding.height;
    var boxes = buildLayoutBoxes(chart.boxes);
    var verticalBoxes = boxes.vertical;
    var horizontalBoxes = boxes.horizontal;
    var params = Object.freeze({
      outerWidth: width,
      outerHeight: height,
      padding,
      availableWidth,
      vBoxMaxWidth: availableWidth / 2 / verticalBoxes.length,
      hBoxMaxHeight: availableHeight / 2
    });
    var chartArea = _extends({
      maxPadding: _extends({}, padding),
      w: availableWidth,
      h: availableHeight,
      x: padding.left,
      y: padding.top
    }, padding);
    setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
    fitBoxes(verticalBoxes, chartArea, params);
    if (fitBoxes(horizontalBoxes, chartArea, params)) {
      fitBoxes(verticalBoxes, chartArea, params);
    }
    handleMaxPadding(chartArea);
    placeBoxes(boxes.leftAndTop, chartArea, params);
    chartArea.x += chartArea.w;
    chartArea.y += chartArea.h;
    placeBoxes(boxes.rightAndBottom, chartArea, params);
    chart.chartArea = {
      left: chartArea.left,
      top: chartArea.top,
      right: chartArea.left + chartArea.w,
      bottom: chartArea.top + chartArea.h,
      height: chartArea.h,
      width: chartArea.w
    };
    each(boxes.chartArea, layout => {
      var box = layout.box;
      _extends(box, chart.chartArea);
      box.update(chartArea.w, chartArea.h);
    });
  }
};

class BasePlatform {
  acquireContext(canvas, options) {}
  releaseContext(context) {
    return false;
  }
  addEventListener(chart, type, listener) {}
  removeEventListener(chart, type, listener) {}
  getDevicePixelRatio() {
    return 1;
  }
}

class BasicPlatform extends BasePlatform {
  acquireContext(item) {
    return item && item.getContext && item.getContext('2d') || null;
  }
}

var MapShim = function () {
  if (typeof Map !== 'undefined') {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function (entry, index) {
      if (entry[0] === key) {
        result = index;
        return true;
      }
      return false;
    });
    return result;
  }
  return (
    function () {
      function class_1() {
        this.__entries__ = [];
      }
      Object.defineProperty(class_1.prototype, "size", {
        get: function get() {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      class_1.prototype.get = function (key) {
        var index = getIndex(this.__entries__, key);
        var entry = this.__entries__[index];
        return entry && entry[1];
      };
      class_1.prototype.set = function (key, value) {
        var index = getIndex(this.__entries__, key);
        if (~index) {
          this.__entries__[index][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      class_1.prototype.delete = function (key) {
        var entries = this.__entries__;
        var index = getIndex(entries, key);
        if (~index) {
          entries.splice(index, 1);
        }
      };
      class_1.prototype.has = function (key) {
        return !!~getIndex(this.__entries__, key);
      };
      class_1.prototype.clear = function () {
        this.__entries__.splice(0);
      };
      class_1.prototype.forEach = function (callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };
      return class_1;
    }()
  );
}();
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;
var global$1 = function () {
  if (typeof global !== 'undefined' && global.Math === Math) {
    return global;
  }
  if (typeof self !== 'undefined' && self.Math === Math) {
    return self;
  }
  if (typeof window !== 'undefined' && window.Math === Math) {
    return window;
  }
  return Function('return this')();
}();
var requestAnimationFrame$1 = function () {
  if (typeof requestAnimationFrame === 'function') {
    return requestAnimationFrame.bind(global$1);
  }
  return function (callback) {
    return setTimeout(function () {
      return callback(Date.now());
    }, 1000 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false,
      trailingCall = false,
      lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
var ResizeObserverController =
function () {
  function ResizeObserverController() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    if (!this.connected_) {
      this.connect_();
    }
  };
  ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);
    if (~index) {
      observers.splice(index, 1);
    }
    if (!observers.length && this.connected_) {
      this.disconnect_();
    }
  };
  ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();
    if (changesDetected) {
      this.refresh();
    }
  };
  ResizeObserverController.prototype.updateObservers_ = function () {
    var activeObservers = this.observers_.filter(function (observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    activeObservers.forEach(function (observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  ResizeObserverController.prototype.connect_ = function () {
    if (!isBrowser || this.connected_) {
      return;
    }
    document.addEventListener('transitionend', this.onTransitionEnd_);
    window.addEventListener('resize', this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener('DOMSubtreeModified', this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  ResizeObserverController.prototype.disconnect_ = function () {
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener('DOMSubtreeModified', this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
    var _b = _a.propertyName,
        propertyName = _b === void 0 ? '' : _b;
    var isReflowProperty = transitionKeys.some(function (key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController();
    }
    return this.instance_;
  };
  ResizeObserverController.instance_ = null;
  return ResizeObserverController;
}();
var defineConfigurable = function defineConfigurable(target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};
var getWindowOf = function getWindowOf(target) {
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function (size, position) {
    var value = styles['border-' + position + '-width'];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ['top', 'right', 'bottom', 'left'];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles['padding-' + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth,
      clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width),
      height = toFloat(styles.height);
  if (styles.boxSizing === 'border-box') {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, 'left', 'right') + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function () {
  if (typeof SVGGraphicsElement !== 'undefined') {
    return function (target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  return function (target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
  };
}();
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x = _a.x,
      y = _a.y,
      width = _a.width,
      height = _a.height;
  var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x: x,
    y: y,
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return {
    x: x,
    y: y,
    width: width,
    height: height
  };
}
var ResizeObservation =
function () {
  function ResizeObservation(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation;
}();
var ResizeObserverEntry =
function () {
  function ResizeObserverEntry(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    defineConfigurable(this, {
      target: target,
      contentRect: contentRect
    });
  }
  return ResizeObserverEntry;
}();
var ResizeObserverSPI =
function () {
  function ResizeObserverSPI(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();
    if (typeof callback !== 'function') {
      throw new TypeError('The callback provided as parameter 1 is not a function.');
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (observations.has(target)) {
      return;
    }
    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this);
    this.controller_.refresh();
  };
  ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (!observations.has(target)) {
      return;
    }
    observations.delete(target);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  ResizeObserverSPI.prototype.gatherActive = function () {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function (observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  ResizeObserverSPI.prototype.broadcastActive = function () {
    if (!this.hasActive()) {
      return;
    }
    var ctx = this.callbackCtx_;
    var entries = this.activeObservations_.map(function (observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI;
}();
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
var ResizeObserver =
function () {
  function ResizeObserver(callback) {
    if (!(this instanceof ResizeObserver)) {
      throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver;
}();
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
  ResizeObserver.prototype[method] = function () {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index$1 = function () {
  if (typeof global$1.ResizeObserver !== 'undefined') {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
}();

var EXPANDO_KEY = '$chartjs';
var EVENT_TYPES = {
  touchstart: 'mousedown',
  touchmove: 'mousemove',
  touchend: 'mouseup',
  pointerenter: 'mouseenter',
  pointerdown: 'mousedown',
  pointermove: 'mousemove',
  pointerup: 'mouseup',
  pointerleave: 'mouseout',
  pointerout: 'mouseout'
};
function readUsedSize(element, property) {
  var value = helpers.dom.getStyle(element, property);
  var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
  return matches ? +matches[1] : undefined;
}
function initCanvas(canvas, config) {
  var style = canvas.style;
  var renderHeight = canvas.getAttribute('height');
  var renderWidth = canvas.getAttribute('width');
  canvas[EXPANDO_KEY] = {
    initial: {
      height: renderHeight,
      width: renderWidth,
      style: {
        display: style.display,
        height: style.height,
        width: style.width
      }
    }
  };
  style.display = style.display || 'block';
  style.boxSizing = style.boxSizing || 'border-box';
  if (renderWidth === null || renderWidth === '') {
    var displayWidth = readUsedSize(canvas, 'width');
    if (displayWidth !== undefined) {
      canvas.width = displayWidth;
    }
  }
  if (renderHeight === null || renderHeight === '') {
    if (canvas.style.height === '') {
      canvas.height = canvas.width / (config.options.aspectRatio || 2);
    } else {
      var displayHeight = readUsedSize(canvas, 'height');
      if (displayHeight !== undefined) {
        canvas.height = displayHeight;
      }
    }
  }
  return canvas;
}
var supportsEventListenerOptions = function () {
  var passiveSupported = false;
  try {
    var options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch (e) {
  }
  return passiveSupported;
}();
var eventListenerOptions = supportsEventListenerOptions ? {
  passive: true
} : false;
function addListener(node, type, listener) {
  node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(node, type, listener) {
  node.removeEventListener(type, listener, eventListenerOptions);
}
function createEvent(type, chart, x, y, nativeEvent) {
  return {
    type,
    chart,
    native: nativeEvent || null,
    x: x !== undefined ? x : null,
    y: y !== undefined ? y : null
  };
}
function fromNativeEvent(event, chart) {
  var type = EVENT_TYPES[event.type] || event.type;
  var pos = helpers.dom.getRelativePosition(event, chart);
  return createEvent(type, chart, pos.x, pos.y, event);
}
function throttled(fn, thisArg) {
  var ticking = false;
  var args = [];
  return function () {
    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }
    args = Array.prototype.slice.call(rest);
    if (!ticking) {
      ticking = true;
      helpers.requestAnimFrame.call(window, () => {
        ticking = false;
        fn.apply(thisArg, args);
      });
    }
  };
}
function watchForResize(element, fn) {
  var resize = throttled((width, height) => {
    var w = element.clientWidth;
    fn(width, height);
    if (w < element.clientWidth) {
      fn();
    }
  }, window);
  var observer = new index$1(entries => {
    var entry = entries[0];
    resize(entry.contentRect.width, entry.contentRect.height);
  });
  observer.observe(element);
  return observer;
}
function watchForAttachment(element, fn) {
  var observer = new MutationObserver(entries => {
    var parent = _getParentNode(element);
    entries.forEach(entry => {
      for (var i = 0; i < entry.addedNodes.length; i++) {
        var added = entry.addedNodes[i];
        if (added === element || added === parent) {
          fn(entry.target);
        }
      }
    });
  });
  observer.observe(document, {
    childList: true,
    subtree: true
  });
  return observer;
}
function watchForDetachment(element, fn) {
  var parent = _getParentNode(element);
  if (!parent) {
    return;
  }
  var observer = new MutationObserver(entries => {
    entries.forEach(entry => {
      for (var i = 0; i < entry.removedNodes.length; i++) {
        if (entry.removedNodes[i] === element) {
          fn();
          break;
        }
      }
    });
  });
  observer.observe(parent, {
    childList: true
  });
  return observer;
}
function removeObserver(proxies, type) {
  var observer = proxies[type];
  if (observer) {
    observer.disconnect();
    proxies[type] = undefined;
  }
}
function unlistenForResize(proxies) {
  removeObserver(proxies, 'attach');
  removeObserver(proxies, 'detach');
  removeObserver(proxies, 'resize');
}
function listenForResize(canvas, proxies, listener) {
  var detached = () => listenForResize(canvas, proxies, listener);
  unlistenForResize(proxies);
  var container = _getParentNode(canvas);
  if (container) {
    proxies.resize = watchForResize(container, listener);
    proxies.detach = watchForDetachment(canvas, detached);
  } else {
    proxies.attach = watchForAttachment(canvas, () => {
      removeObserver(proxies, 'attach');
      var parent = _getParentNode(canvas);
      proxies.resize = watchForResize(parent, listener);
      proxies.detach = watchForDetachment(canvas, detached);
    });
  }
}
class DomPlatform extends BasePlatform {
  acquireContext(canvas, config) {
    var context = canvas && canvas.getContext && canvas.getContext('2d');
    if (context && context.canvas === canvas) {
      initCanvas(canvas, config);
      return context;
    }
    return null;
  }
  releaseContext(context) {
    var canvas = context.canvas;
    if (!canvas[EXPANDO_KEY]) {
      return false;
    }
    var initial = canvas[EXPANDO_KEY].initial;
    ['height', 'width'].forEach(prop => {
      var value = initial[prop];
      if (helpers.isNullOrUndef(value)) {
        canvas.removeAttribute(prop);
      } else {
        canvas.setAttribute(prop, value);
      }
    });
    var style = initial.style || {};
    Object.keys(style).forEach(key => {
      canvas.style[key] = style[key];
    });
    canvas.width = canvas.width;
    delete canvas[EXPANDO_KEY];
    return true;
  }
  addEventListener(chart, type, listener) {
    this.removeEventListener(chart, type);
    var canvas = chart.canvas;
    var proxies = chart.$proxies || (chart.$proxies = {});
    if (type === 'resize') {
      return listenForResize(canvas, proxies, listener);
    }
    var proxy = proxies[type] = throttled(event => {
      listener(fromNativeEvent(event, chart));
    }, chart);
    addListener(canvas, type, proxy);
  }
  removeEventListener(chart, type) {
    var canvas = chart.canvas;
    var proxies = chart.$proxies || (chart.$proxies = {});
    if (type === 'resize') {
      return unlistenForResize(proxies);
    }
    var proxy = proxies[type];
    if (!proxy) {
      return;
    }
    removeListener(canvas, type, proxy);
    proxies[type] = undefined;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
}

var platforms = {
  BasicPlatform,
  DomPlatform,
  BasePlatform
};

defaults.set('plugins', {});
class PluginService {
  constructor() {
    this._plugins = [];
    this._cacheId = 0;
  }
  register(plugins) {
    var p = this._plugins;
    [].concat(plugins).forEach(plugin => {
      if (p.indexOf(plugin) === -1) {
        p.push(plugin);
      }
    });
    this._cacheId++;
  }
  unregister(plugins) {
    var p = this._plugins;
    [].concat(plugins).forEach(plugin => {
      var idx = p.indexOf(plugin);
      if (idx !== -1) {
        p.splice(idx, 1);
      }
    });
    this._cacheId++;
  }
  clear() {
    this._plugins = [];
    this._cacheId++;
  }
  count() {
    return this._plugins.length;
  }
  getAll() {
    return this._plugins;
  }
  notify(chart, hook, args) {
    var descriptors = this._descriptors(chart);
    var ilen = descriptors.length;
    var i, descriptor, plugin, params, method;
    for (i = 0; i < ilen; ++i) {
      descriptor = descriptors[i];
      plugin = descriptor.plugin;
      method = plugin[hook];
      if (typeof method === 'function') {
        params = [chart].concat(args || []);
        params.push(descriptor.options);
        if (method.apply(plugin, params) === false) {
          return false;
        }
      }
    }
    return true;
  }
  _descriptors(chart) {
    var cache = chart.$plugins || (chart.$plugins = {});
    if (cache.id === this._cacheId) {
      return cache.descriptors;
    }
    var plugins = [];
    var descriptors = [];
    var config = chart && chart.config || {};
    var options = config.options && config.options.plugins || {};
    this._plugins.concat(config.plugins || []).forEach(plugin => {
      var idx = plugins.indexOf(plugin);
      if (idx !== -1) {
        return;
      }
      var id = plugin.id;
      var opts = options[id];
      if (opts === false) {
        return;
      }
      if (opts === true) {
        opts = clone(defaults.plugins[id]);
      }
      plugins.push(plugin);
      descriptors.push({
        plugin,
        options: opts || {}
      });
    });
    cache.descriptors = descriptors;
    cache.id = this._cacheId;
    return descriptors;
  }
  invalidate(chart) {
    delete chart.$plugins;
  }
}
var pluginsCore = new PluginService();

var scaleService = {
  constructors: {},
  defaults: {},
  registerScale(scaleConstructor) {
    var me = this;
    var type = scaleConstructor.id;
    me.constructors[type] = scaleConstructor;
    me.defaults[type] = clone(scaleConstructor.defaults);
  },
  getScaleConstructor(type) {
    return Object.prototype.hasOwnProperty.call(this.constructors, type) ? this.constructors[type] : undefined;
  },
  getScaleDefaults(type) {
    return Object.prototype.hasOwnProperty.call(this.defaults, type) ? merge({}, [defaults.scale, this.defaults[type]]) : {};
  },
  updateScaleDefaults(type, additions) {
    var me = this;
    if (Object.prototype.hasOwnProperty.call(me.defaults, type)) {
      me.defaults[type] = _extends(me.defaults[type], additions);
    }
  },
  addScalesToLayout(chart) {
    each(chart.scales, scale => {
      scale.fullWidth = scale.options.fullWidth;
      scale.position = scale.options.position;
      scale.weight = scale.options.weight;
      layouts.addBox(chart, scale);
    });
  }
};

var version = "3.0.0-alpha";

var valueOrDefault$1 = helpers.valueOrDefault;
function mergeScaleConfig(config, options) {
  options = options || {};
  var chartDefaults = defaults[config.type] || {
    scales: {}
  };
  var configScales = options.scales || {};
  var firstIDs = {};
  var scales = {};
  Object.keys(configScales).forEach(id => {
    var axis = id[0];
    firstIDs[axis] = firstIDs[axis] || id;
    scales[id] = helpers.mergeIf({}, [configScales[id], chartDefaults.scales[axis]]);
  });
  if (options.scale) {
    scales[options.scale.id || 'r'] = helpers.mergeIf({}, [options.scale, chartDefaults.scales.r]);
    firstIDs.r = firstIDs.r || options.scale.id || 'r';
  }
  config.data.datasets.forEach(dataset => {
    var datasetDefaults = defaults[dataset.type || config.type] || {
      scales: {}
    };
    var defaultScaleOptions = datasetDefaults.scales || {};
    Object.keys(defaultScaleOptions).forEach(defaultID => {
      var id = dataset[defaultID + 'AxisID'] || firstIDs[defaultID] || defaultID;
      scales[id] = scales[id] || {};
      helpers.mergeIf(scales[id], [configScales[id], defaultScaleOptions[defaultID]]);
    });
  });
  Object.keys(scales).forEach(key => {
    var scale = scales[key];
    helpers.mergeIf(scale, scaleService.getScaleDefaults(scale.type));
  });
  return scales;
}
function mergeConfig()
{
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return helpers.merge({}, args, {
    merger(key, target, source, options) {
      if (key !== 'scales' && key !== 'scale') {
        helpers._merger(key, target, source, options);
      }
    }
  });
}
function initConfig(config) {
  config = config || {};
  var data = config.data = config.data || {
    datasets: [],
    labels: []
  };
  data.datasets = data.datasets || [];
  data.labels = data.labels || [];
  var scaleConfig = mergeScaleConfig(config, config.options);
  config.options = mergeConfig(defaults, defaults[config.type], config.options || {});
  config.options.scales = scaleConfig;
  return config;
}
function isAnimationDisabled(config) {
  return !config.animation;
}
function updateConfig(chart) {
  var newOptions = chart.options;
  helpers.each(chart.scales, scale => {
    layouts.removeBox(chart, scale);
  });
  var scaleConfig = mergeScaleConfig(chart.config, newOptions);
  newOptions = mergeConfig(defaults, defaults[chart.config.type], newOptions);
  chart.options = chart.config.options = newOptions;
  chart.options.scales = scaleConfig;
  chart._animationsDisabled = isAnimationDisabled(newOptions);
  chart.ensureScalesHaveIDs();
  chart.buildOrUpdateScales();
}
var KNOWN_POSITIONS = new Set(['top', 'bottom', 'left', 'right', 'chartArea']);
function positionIsHorizontal(position, axis) {
  return position === 'top' || position === 'bottom' || !KNOWN_POSITIONS.has(position) && axis === 'x';
}
function compare2Level(l1, l2) {
  return function (a, b) {
    return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
  };
}
function onAnimationsComplete(ctx) {
  var chart = ctx.chart;
  var animationOptions = chart.options.animation;
  pluginsCore.notify(chart, 'afterRender');
  helpers.callback(animationOptions && animationOptions.onComplete, [ctx], chart);
}
function onAnimationProgress(ctx) {
  var chart = ctx.chart;
  var animationOptions = chart.options.animation;
  helpers.callback(animationOptions && animationOptions.onProgress, [ctx], chart);
}
function isDomSupported() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
function getCanvas(item) {
  if (isDomSupported() && typeof item === 'string') {
    item = document.getElementById(item);
  } else if (item.length) {
    item = item[0];
  }
  if (item && item.canvas) {
    item = item.canvas;
  }
  return item;
}
class Chart {
  constructor(item, config) {
    var me = this;
    config = initConfig(config);
    var initialCanvas = getCanvas(item);
    this.platform = me._initializePlatform(initialCanvas, config);
    var context = me.platform.acquireContext(initialCanvas, config);
    var canvas = context && context.canvas;
    var height = canvas && canvas.height;
    var width = canvas && canvas.width;
    this.id = helpers.uid();
    this.ctx = context;
    this.canvas = canvas;
    this.config = config;
    this.width = width;
    this.height = height;
    this.aspectRatio = height ? width / height : null;
    this.options = config.options;
    this._bufferedRender = false;
    this._layers = [];
    this._metasets = [];
    this.boxes = [];
    this.currentDevicePixelRatio = undefined;
    this.chartArea = undefined;
    this.data = undefined;
    this.active = undefined;
    this.lastActive = [];
    this._lastEvent = undefined;
    this._listeners = {};
    this._sortedMetasets = [];
    this._updating = false;
    this.scales = {};
    this.scale = undefined;
    this.$plugins = undefined;
    this.$proxies = {};
    this._hiddenIndices = {};
    Chart.instances[me.id] = me;
    Object.defineProperty(me, 'data', {
      get() {
        return me.config.data;
      },
      set(value) {
        me.config.data = value;
      }
    });
    if (!context || !canvas) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Animator$1.listen(me, 'complete', onAnimationsComplete);
    Animator$1.listen(me, 'progress', onAnimationProgress);
    me._initialize();
    me.update();
  }
  _initialize() {
    var me = this;
    pluginsCore.notify(me, 'beforeInit');
    if (me.options.responsive) {
      me.resize(true);
    } else {
      helpers.dom.retinaScale(me, me.options.devicePixelRatio);
    }
    me.bindEvents();
    pluginsCore.notify(me, 'afterInit');
    return me;
  }
  _initializePlatform(canvas, config) {
    if (config.platform) {
      return new config.platform();
    } else if (!isDomSupported() || typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas) {
      return new BasicPlatform();
    }
    return new DomPlatform();
  }
  clear() {
    helpers.canvas.clear(this);
    return this;
  }
  stop() {
    Animator$1.stop(this);
    return this;
  }
  resize(silent, width, height) {
    var me = this;
    var options = me.options;
    var canvas = me.canvas;
    var aspectRatio = options.maintainAspectRatio && me.aspectRatio;
    if (width === undefined || height === undefined) {
      width = getMaximumWidth(canvas);
      height = getMaximumHeight(canvas);
    }
    var newWidth = Math.max(0, Math.floor(width));
    var newHeight = Math.max(0, Math.floor(aspectRatio ? newWidth / aspectRatio : height));
    var oldRatio = me.currentDevicePixelRatio;
    var newRatio = options.devicePixelRatio || me.platform.getDevicePixelRatio();
    if (me.width === newWidth && me.height === newHeight && oldRatio === newRatio) {
      return;
    }
    canvas.width = me.width = newWidth;
    canvas.height = me.height = newHeight;
    if (canvas.style) {
      canvas.style.width = newWidth + 'px';
      canvas.style.height = newHeight + 'px';
    }
    helpers.dom.retinaScale(me, newRatio);
    if (!silent) {
      var newSize = {
        width: newWidth,
        height: newHeight
      };
      pluginsCore.notify(me, 'resize', [newSize]);
      if (options.onResize) {
        options.onResize(me, newSize);
      }
      me.stop();
      me.update('resize');
    }
  }
  ensureScalesHaveIDs() {
    var options = this.options;
    var scalesOptions = options.scales || {};
    var scaleOptions = options.scale;
    helpers.each(scalesOptions, (axisOptions, axisID) => {
      axisOptions.id = axisID;
    });
    if (scaleOptions) {
      scaleOptions.id = scaleOptions.id || 'scale';
    }
  }
  buildOrUpdateScales() {
    var me = this;
    var options = me.options;
    var scaleOpts = options.scales;
    var scales = me.scales || {};
    var updated = Object.keys(scales).reduce((obj, id) => {
      obj[id] = false;
      return obj;
    }, {});
    var items = [];
    if (scaleOpts) {
      items = items.concat(Object.keys(scaleOpts).map(axisID => {
        var axisOptions = scaleOpts[axisID];
        var isRadial = axisID.charAt(0).toLowerCase() === 'r';
        var isHorizontal = axisID.charAt(0).toLowerCase() === 'x';
        return {
          options: axisOptions,
          dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
          dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
        };
      }));
    }
    helpers.each(items, item => {
      var scaleOptions = item.options;
      var id = scaleOptions.id;
      var scaleType = valueOrDefault$1(scaleOptions.type, item.dtype);
      if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, scaleOptions.axis || id[0]) !== positionIsHorizontal(item.dposition)) {
        scaleOptions.position = item.dposition;
      }
      updated[id] = true;
      var scale = null;
      if (id in scales && scales[id].type === scaleType) {
        scale = scales[id];
        scale.options = scaleOptions;
        scale.ctx = me.ctx;
        scale.chart = me;
      } else {
        var scaleClass = scaleService.getScaleConstructor(scaleType);
        if (!scaleClass) {
          return;
        }
        scale = new scaleClass({
          id,
          type: scaleType,
          options: scaleOptions,
          ctx: me.ctx,
          chart: me
        });
        scales[scale.id] = scale;
      }
      scale.axis = scale.options.position === 'chartArea' ? 'r' : scale.isHorizontal() ? 'x' : 'y';
      scale._userMin = scale.parse(scale.options.min);
      scale._userMax = scale.parse(scale.options.max);
      if (item.isDefault) {
        me.scale = scale;
      }
    });
    helpers.each(updated, (hasUpdated, id) => {
      if (!hasUpdated) {
        delete scales[id];
      }
    });
    me.scales = scales;
    scaleService.addScalesToLayout(this);
  }
  _updateMetasetIndex(meta, index) {
    var metasets = this._metasets;
    var oldIndex = meta.index;
    if (oldIndex !== index) {
      metasets[oldIndex] = metasets[index];
      metasets[index] = meta;
      meta.index = index;
    }
  }
  _updateMetasets() {
    var me = this;
    var metasets = me._metasets;
    var numData = me.data.datasets.length;
    var numMeta = metasets.length;
    if (numMeta > numData) {
      for (var i = numData; i < numMeta; ++i) {
        me._destroyDatasetMeta(i);
      }
      metasets.splice(numData, numMeta - numData);
    }
    me._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
  }
  buildOrUpdateControllers() {
    var me = this;
    var newControllers = [];
    var datasets = me.data.datasets;
    var i, ilen;
    for (i = 0, ilen = datasets.length; i < ilen; i++) {
      var dataset = datasets[i];
      var meta = me.getDatasetMeta(i);
      var type = dataset.type || me.config.type;
      if (meta.type && meta.type !== type) {
        me._destroyDatasetMeta(i);
        meta = me.getDatasetMeta(i);
      }
      meta.type = type;
      meta.order = dataset.order || 0;
      me._updateMetasetIndex(meta, i);
      meta.label = '' + dataset.label;
      meta.visible = me.isDatasetVisible(i);
      if (meta.controller) {
        meta.controller.updateIndex(i);
        meta.controller.linkScales();
      } else {
        var ControllerClass = controllers[meta.type];
        if (ControllerClass === undefined) {
          throw new Error('"' + meta.type + '" is not a chart type.');
        }
        meta.controller = new ControllerClass(me, i);
        newControllers.push(meta.controller);
      }
    }
    me._updateMetasets();
    return newControllers;
  }
  _resetElements() {
    var me = this;
    helpers.each(me.data.datasets, (dataset, datasetIndex) => {
      me.getDatasetMeta(datasetIndex).controller.reset();
    }, me);
  }
  reset() {
    this._resetElements();
    pluginsCore.notify(this, 'reset');
  }
  update(mode) {
    var me = this;
    var i, ilen;
    me._updating = true;
    updateConfig(me);
    pluginsCore.invalidate(me);
    if (pluginsCore.notify(me, 'beforeUpdate') === false) {
      return;
    }
    var newControllers = me.buildOrUpdateControllers();
    for (i = 0, ilen = me.data.datasets.length; i < ilen; i++) {
      me.getDatasetMeta(i).controller.buildOrUpdateElements();
    }
    me._updateLayout();
    if (me.options.animation) {
      helpers.each(newControllers, controller => {
        controller.reset();
      });
    }
    me._updateDatasets(mode);
    pluginsCore.notify(me, 'afterUpdate');
    me._layers.sort(compare2Level('z', '_idx'));
    if (me._lastEvent) {
      me._eventHandler(me._lastEvent, true);
    }
    me.render();
    me._updating = false;
  }
  _updateLayout() {
    var me = this;
    if (pluginsCore.notify(me, 'beforeLayout') === false) {
      return;
    }
    layouts.update(me, me.width, me.height);
    me._layers = [];
    helpers.each(me.boxes, box => {
      if (box.configure) {
        box.configure();
      }
      me._layers.push(...box._layers());
    }, me);
    me._layers.forEach((item, index) => {
      item._idx = index;
    });
    pluginsCore.notify(me, 'afterLayout');
  }
  _updateDatasets(mode) {
    var me = this;
    var isFunction = typeof mode === 'function';
    if (pluginsCore.notify(me, 'beforeDatasetsUpdate') === false) {
      return;
    }
    for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
      me._updateDataset(i, isFunction ? mode({
        datasetIndex: i
      }) : mode);
    }
    pluginsCore.notify(me, 'afterDatasetsUpdate');
  }
  _updateDataset(index, mode) {
    var me = this;
    var meta = me.getDatasetMeta(index);
    var args = {
      meta,
      index,
      mode
    };
    if (pluginsCore.notify(me, 'beforeDatasetUpdate', [args]) === false) {
      return;
    }
    meta.controller._update(mode);
    pluginsCore.notify(me, 'afterDatasetUpdate', [args]);
  }
  render() {
    var me = this;
    var animationOptions = me.options.animation;
    if (pluginsCore.notify(me, 'beforeRender') === false) {
      return;
    }
    var onComplete = function onComplete() {
      pluginsCore.notify(me, 'afterRender');
      helpers.callback(animationOptions && animationOptions.onComplete, [], me);
    };
    if (Animator$1.has(me)) {
      if (!Animator$1.running(me)) {
        Animator$1.start(me);
      }
    } else {
      me.draw();
      onComplete();
    }
  }
  draw() {
    var me = this;
    var i;
    me.clear();
    if (me.width <= 0 || me.height <= 0) {
      return;
    }
    if (pluginsCore.notify(me, 'beforeDraw') === false) {
      return;
    }
    var layers = me._layers;
    for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
      layers[i].draw(me.chartArea);
    }
    me._drawDatasets();
    for (; i < layers.length; ++i) {
      layers[i].draw(me.chartArea);
    }
    pluginsCore.notify(me, 'afterDraw');
  }
  _getSortedDatasetMetas(filterVisible) {
    var me = this;
    var metasets = me._sortedMetasets;
    var result = [];
    var i, ilen;
    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      var meta = metasets[i];
      if (!filterVisible || meta.visible) {
        result.push(meta);
      }
    }
    return result;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(true);
  }
  _drawDatasets() {
    var me = this;
    if (pluginsCore.notify(me, 'beforeDatasetsDraw') === false) {
      return;
    }
    var metasets = me.getSortedVisibleDatasetMetas();
    for (var i = metasets.length - 1; i >= 0; --i) {
      me._drawDataset(metasets[i]);
    }
    pluginsCore.notify(me, 'afterDatasetsDraw');
  }
  _drawDataset(meta) {
    var me = this;
    var ctx = me.ctx;
    var clip = meta._clip;
    var area = me.chartArea;
    var args = {
      meta,
      index: meta.index
    };
    if (pluginsCore.notify(me, 'beforeDatasetDraw', [args]) === false) {
      return;
    }
    helpers.canvas.clipArea(ctx, {
      left: clip.left === false ? 0 : area.left - clip.left,
      right: clip.right === false ? me.width : area.right + clip.right,
      top: clip.top === false ? 0 : area.top - clip.top,
      bottom: clip.bottom === false ? me.height : area.bottom + clip.bottom
    });
    meta.controller.draw();
    helpers.canvas.unclipArea(ctx);
    pluginsCore.notify(me, 'afterDatasetDraw', [args]);
  }
  getElementAtEvent(e) {
    return Interaction.modes.nearest(this, e, {
      intersect: true
    });
  }
  getElementsAtEvent(e) {
    return Interaction.modes.index(this, e, {
      intersect: true
    });
  }
  getElementsAtXAxis(e) {
    return Interaction.modes.index(this, e, {
      intersect: false
    });
  }
  getElementsAtEventForMode(e, mode, options, useFinalPosition) {
    var method = Interaction.modes[mode];
    if (typeof method === 'function') {
      return method(this, e, options, useFinalPosition);
    }
    return [];
  }
  getDatasetAtEvent(e) {
    return Interaction.modes.dataset(this, e, {
      intersect: true
    });
  }
  getDatasetMeta(datasetIndex) {
    var me = this;
    var dataset = me.data.datasets[datasetIndex];
    var metasets = me._metasets;
    var meta = metasets.filter(x => x._dataset === dataset).pop();
    if (!meta) {
      meta = metasets[datasetIndex] = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null,
        order: dataset.order || 0,
        index: datasetIndex,
        _dataset: dataset,
        _parsed: [],
        _sorted: false
      };
    }
    return meta;
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(datasetIndex) {
    var meta = this.getDatasetMeta(datasetIndex);
    return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
  }
  setDatasetVisibility(datasetIndex, visible) {
    var meta = this.getDatasetMeta(datasetIndex);
    meta.hidden = !visible;
  }
  toggleDataVisibility(index) {
    this._hiddenIndices[index] = !this._hiddenIndices[index];
  }
  getDataVisibility(index) {
    return !this._hiddenIndices[index];
  }
  _updateDatasetVisibility(datasetIndex, visible) {
    var me = this;
    var mode = visible ? 'show' : 'hide';
    var meta = me.getDatasetMeta(datasetIndex);
    var anims = meta.controller._resolveAnimations(undefined, mode);
    me.setDatasetVisibility(datasetIndex, visible);
    anims.update(meta, {
      visible
    });
    me.update(ctx => ctx.datasetIndex === datasetIndex ? mode : undefined);
  }
  hide(datasetIndex) {
    this._updateDatasetVisibility(datasetIndex, false);
  }
  show(datasetIndex) {
    this._updateDatasetVisibility(datasetIndex, true);
  }
  _destroyDatasetMeta(datasetIndex) {
    var me = this;
    var meta = me._metasets && me._metasets[datasetIndex];
    if (meta) {
      meta.controller._destroy();
      delete me._metasets[datasetIndex];
    }
  }
  destroy() {
    var me = this;
    var canvas = me.canvas;
    var i, ilen;
    me.stop();
    Animator$1.remove(me);
    for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
      me._destroyDatasetMeta(i);
    }
    if (canvas) {
      me.unbindEvents();
      helpers.canvas.clear(me);
      me.platform.releaseContext(me.ctx);
      me.canvas = null;
      me.ctx = null;
    }
    pluginsCore.notify(me, 'destroy');
    delete Chart.instances[me.id];
  }
  toBase64Image() {
    return this.canvas.toDataURL(...arguments);
  }
  bindEvents() {
    var me = this;
    var listeners = me._listeners;
    var listener = function listener(e) {
      me._eventHandler(e);
    };
    helpers.each(me.options.events, type => {
      me.platform.addEventListener(me, type, listener);
      listeners[type] = listener;
    });
    if (me.options.responsive) {
      listener = function listener(width, height) {
        if (me.canvas) {
          me.resize(false, width, height);
        }
      };
      me.platform.addEventListener(me, 'resize', listener);
      listeners.resize = listener;
    }
  }
  unbindEvents() {
    var me = this;
    var listeners = me._listeners;
    if (!listeners) {
      return;
    }
    delete me._listeners;
    helpers.each(listeners, (listener, type) => {
      me.platform.removeEventListener(me, type, listener);
    });
  }
  updateHoverStyle(items, mode, enabled) {
    var prefix = enabled ? 'set' : 'remove';
    var meta, item, i, ilen;
    if (mode === 'dataset') {
      meta = this.getDatasetMeta(items[0].datasetIndex);
      meta.controller['_' + prefix + 'DatasetHoverStyle']();
    }
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      item = items[i];
      if (item) {
        this.getDatasetMeta(item.datasetIndex).controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
      }
    }
  }
  _updateHoverStyles() {
    var me = this;
    var options = me.options || {};
    var hoverOptions = options.hover;
    if (me.lastActive.length) {
      me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
    }
    if (me.active.length && hoverOptions.mode) {
      me.updateHoverStyle(me.active, hoverOptions.mode, true);
    }
  }
  _eventHandler(e, replay) {
    var me = this;
    if (pluginsCore.notify(me, 'beforeEvent', [e, replay]) === false) {
      return;
    }
    me._handleEvent(e, replay);
    pluginsCore.notify(me, 'afterEvent', [e, replay]);
    me.render();
    return me;
  }
  _handleEvent(e, replay) {
    var me = this;
    var options = me.options;
    var hoverOptions = options.hover;
    var useFinalPosition = replay;
    var changed = false;
    if (e.type === 'mouseout') {
      me.active = [];
      me._lastEvent = null;
    } else {
      me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
      me._lastEvent = e.type === 'click' ? me._lastEvent : e;
    }
    helpers.callback(options.onHover || options.hover.onHover, [e.native, me.active], me);
    if (e.type === 'mouseup' || e.type === 'click') {
      if (options.onClick && helpers.canvas._isPointInArea(e, me.chartArea)) {
        options.onClick.call(me, e.native, me.active);
      }
    }
    changed = !helpers._elementsEqual(me.active, me.lastActive);
    if (changed || replay) {
      me._updateHoverStyles();
    }
    me.lastActive = me.active;
    return changed;
  }
}
_defineProperty(Chart, "version", version);
_defineProperty(Chart, "instances", {});

function abstract() {
  throw new Error('This method is not implemented: either no adapter can be found or an incomplete integration was provided.');
}
class DateAdapter {
  constructor(options) {
    this.options = options || {};
  }
  formats() {
    return abstract();
  }
  parse(value, format) {
    return abstract();
  }
  format(timestamp, format) {
    return abstract();
  }
  add(timestamp, amount, unit) {
    return abstract();
  }
  diff(a, b, unit) {
    return abstract();
  }
  startOf(timestamp, unit, weekday) {
    return abstract();
  }
  endOf(timestamp, unit) {
    return abstract();
  }
}
DateAdapter.override = function (members) {
  _extends(DateAdapter.prototype, members);
};
var _adapters = {
  _date: DateAdapter
};

var Ticks = {
  formatters: {
    values(value) {
      return isArray(value) ? value : '' + value;
    },
    numeric(tickValue, index, ticks) {
      if (tickValue === 0) {
        return '0';
      }
      var delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
      if (Math.abs(delta) > 1 && tickValue !== Math.floor(tickValue)) {
        delta = tickValue - Math.floor(tickValue);
      }
      var logDelta = log10(Math.abs(delta));
      var maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
      var minTick = Math.min(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
      var locale = this.chart.options.locale;
      if (maxTick < 1e-4 || minTick > 1e+7) {
        var logTick = log10(Math.abs(tickValue));
        var numExponential = Math.floor(logTick) - Math.floor(logDelta);
        numExponential = Math.max(Math.min(numExponential, 20), 0);
        return tickValue.toExponential(numExponential);
      }
      var numDecimal = -1 * Math.floor(logDelta);
      numDecimal = Math.max(Math.min(numDecimal, 20), 0);
      return new Intl.NumberFormat(locale, {
        minimumFractionDigits: numDecimal,
        maximumFractionDigits: numDecimal
      }).format(tickValue);
    }
  }
};

defaults.set('scale', {
  display: true,
  offset: false,
  reverse: false,
  beginAtZero: false,
  gridLines: {
    display: true,
    color: 'rgba(0,0,0,0.1)',
    lineWidth: 1,
    drawBorder: true,
    drawOnChartArea: true,
    drawTicks: true,
    tickMarkLength: 10,
    offsetGridLines: false,
    borderDash: [],
    borderDashOffset: 0.0
  },
  scaleLabel: {
    display: false,
    labelString: '',
    padding: {
      top: 4,
      bottom: 4
    }
  },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: false,
    lineWidth: 0,
    strokeStyle: '',
    padding: 0,
    display: true,
    autoSkip: true,
    autoSkipPadding: 0,
    labelOffset: 0,
    callback: Ticks.formatters.values,
    minor: {},
    major: {}
  }
});
function sample(arr, numItems) {
  var result = [];
  var increment = arr.length / numItems;
  var len = arr.length;
  var i = 0;
  for (; i < len; i += increment) {
    result.push(arr[Math.floor(i)]);
  }
  return result;
}
function getPixelForGridLine(scale, index, offsetGridLines) {
  var length = scale.ticks.length;
  var validIndex = Math.min(index, length - 1);
  var start = scale._startPixel;
  var end = scale._endPixel;
  var epsilon = 1e-6;
  var lineValue = scale.getPixelForTick(validIndex);
  var offset;
  if (offsetGridLines) {
    if (length === 1) {
      offset = Math.max(lineValue - start, end - lineValue);
    } else if (index === 0) {
      offset = (scale.getPixelForTick(1) - lineValue) / 2;
    } else {
      offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
    }
    lineValue += validIndex < index ? offset : -offset;
    if (lineValue < start - epsilon || lineValue > end + epsilon) {
      return;
    }
  }
  return lineValue;
}
function garbageCollect(caches, length) {
  each(caches, cache => {
    var gc = cache.gc;
    var gcLen = gc.length / 2;
    var i;
    if (gcLen > length) {
      for (i = 0; i < gcLen; ++i) {
        delete cache.data[gc[i]];
      }
      gc.splice(0, gcLen);
    }
  });
}
function getTickMarkLength(options) {
  return options.drawTicks ? options.tickMarkLength : 0;
}
function getScaleLabelHeight(options) {
  if (!options.display) {
    return 0;
  }
  var font = _parseFont(options);
  var padding = toPadding(options.padding);
  return font.lineHeight + padding.height;
}
function getEvenSpacing(arr) {
  var len = arr.length;
  var i, diff;
  if (len < 2) {
    return false;
  }
  for (diff = arr[0], i = 1; i < len; ++i) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return diff;
}
function calculateSpacing(majorIndices, ticks, axisLength, ticksLimit) {
  var evenMajorSpacing = getEvenSpacing(majorIndices);
  var spacing = ticks.length / ticksLimit;
  if (!evenMajorSpacing) {
    return Math.max(spacing, 1);
  }
  var factors = _factorize(evenMajorSpacing);
  for (var i = 0, ilen = factors.length - 1; i < ilen; i++) {
    var factor = factors[i];
    if (factor > spacing) {
      return factor;
    }
  }
  return Math.max(spacing, 1);
}
function getMajorIndices(ticks) {
  var result = [];
  var i, ilen;
  for (i = 0, ilen = ticks.length; i < ilen; i++) {
    if (ticks[i].major) {
      result.push(i);
    }
  }
  return result;
}
function skipMajors(ticks, newTicks, majorIndices, spacing) {
  var count = 0;
  var next = majorIndices[0];
  var i;
  spacing = Math.ceil(spacing);
  for (i = 0; i < ticks.length; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = majorIndices[count * spacing];
    }
  }
}
function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
  var start = valueOrDefault(majorStart, 0);
  var end = Math.min(valueOrDefault(majorEnd, ticks.length), ticks.length);
  var count = 0;
  var length, i, next;
  spacing = Math.ceil(spacing);
  if (majorEnd) {
    length = majorEnd - majorStart;
    spacing = length / Math.floor(length / spacing);
  }
  next = start;
  while (next < 0) {
    count++;
    next = Math.round(start + count * spacing);
  }
  for (i = Math.max(start, 0); i < end; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = Math.round(start + count * spacing);
    }
  }
}
class Scale extends Element$1 {
  constructor(cfg) {
    super();
    this.id = cfg.id;
    this.type = cfg.type;
    this.options = cfg.options;
    this.ctx = cfg.ctx;
    this.chart = cfg.chart;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    this.maxWidth = undefined;
    this.maxHeight = undefined;
    this.paddingTop = undefined;
    this.paddingBottom = undefined;
    this.paddingLeft = undefined;
    this.paddingRight = undefined;
    this.axis = undefined;
    this.labelRotation = undefined;
    this.min = undefined;
    this.max = undefined;
    this.ticks = [];
    this._gridLineItems = null;
    this._labelItems = null;
    this._labelSizes = null;
    this._length = 0;
    this._longestTextCache = {};
    this._startPixel = undefined;
    this._endPixel = undefined;
    this._reversePixels = false;
    this._userMax = undefined;
    this._userMin = undefined;
    this._ticksLength = 0;
    this._borderValue = 0;
  }
  parse(raw, index) {
    return raw;
  }
  parseObject(obj, axis, index) {
    if (obj[axis] !== undefined) {
      return this.parse(obj[axis], index);
    }
    return null;
  }
  getUserBounds() {
    var min = this._userMin;
    var max = this._userMax;
    if (isNullOrUndef(min) || isNaN(min)) {
      min = Number.POSITIVE_INFINITY;
    }
    if (isNullOrUndef(max) || isNaN(max)) {
      max = Number.NEGATIVE_INFINITY;
    }
    return {
      min,
      max,
      minDefined: isNumberFinite(min),
      maxDefined: isNumberFinite(max)
    };
  }
  getMinMax(canStack) {
    var me = this;
    var {
      min,
      max,
      minDefined,
      maxDefined
    } = me.getUserBounds();
    var minmax;
    if (minDefined && maxDefined) {
      return {
        min,
        max
      };
    }
    var metas = me.getMatchingVisibleMetas();
    for (var i = 0, ilen = metas.length; i < ilen; ++i) {
      minmax = metas[i].controller.getMinMax(me, canStack);
      if (!minDefined) {
        min = Math.min(min, minmax.min);
      }
      if (!maxDefined) {
        max = Math.max(max, minmax.max);
      }
    }
    return {
      min,
      max
    };
  }
  invalidateCaches() {}
  getPadding() {
    var me = this;
    return {
      left: me.paddingLeft || 0,
      top: me.paddingTop || 0,
      right: me.paddingRight || 0,
      bottom: me.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    var data = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
  }
  beforeUpdate() {
    callback(this.options.beforeUpdate, [this]);
  }
  update(maxWidth, maxHeight, margins) {
    var me = this;
    var tickOpts = me.options.ticks;
    var sampleSize = tickOpts.sampleSize;
    me.beforeUpdate();
    me.maxWidth = maxWidth;
    me.maxHeight = maxHeight;
    me._margins = _extends({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, margins);
    me.ticks = null;
    me._labelSizes = null;
    me._gridLineItems = null;
    me._labelItems = null;
    me.beforeSetDimensions();
    me.setDimensions();
    me.afterSetDimensions();
    me.beforeDataLimits();
    me.determineDataLimits();
    me.afterDataLimits();
    me.beforeBuildTicks();
    me.ticks = me.buildTicks() || [];
    me.afterBuildTicks();
    var samplingEnabled = sampleSize < me.ticks.length;
    me._convertTicksToLabels(samplingEnabled ? sample(me.ticks, sampleSize) : me.ticks);
    me.configure();
    me.beforeCalculateLabelRotation();
    me.calculateLabelRotation();
    me.afterCalculateLabelRotation();
    me.beforeFit();
    me.fit();
    me.afterFit();
    me.ticks = tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto') ? me._autoSkip(me.ticks) : me.ticks;
    if (samplingEnabled) {
      me._convertTicksToLabels(me.ticks);
    }
    me.afterUpdate();
  }
  configure() {
    var me = this;
    var reversePixels = me.options.reverse;
    var startPixel, endPixel;
    if (me.isHorizontal()) {
      startPixel = me.left;
      endPixel = me.right;
    } else {
      startPixel = me.top;
      endPixel = me.bottom;
      reversePixels = !reversePixels;
    }
    me._startPixel = startPixel;
    me._endPixel = endPixel;
    me._reversePixels = reversePixels;
    me._length = endPixel - startPixel;
  }
  afterUpdate() {
    callback(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    callback(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    var me = this;
    if (me.isHorizontal()) {
      me.width = me.maxWidth;
      me.left = 0;
      me.right = me.width;
    } else {
      me.height = me.maxHeight;
      me.top = 0;
      me.bottom = me.height;
    }
    me.paddingLeft = 0;
    me.paddingTop = 0;
    me.paddingRight = 0;
    me.paddingBottom = 0;
  }
  afterSetDimensions() {
    callback(this.options.afterSetDimensions, [this]);
  }
  beforeDataLimits() {
    callback(this.options.beforeDataLimits, [this]);
  }
  determineDataLimits() {}
  afterDataLimits() {
    callback(this.options.afterDataLimits, [this]);
  }
  beforeBuildTicks() {
    callback(this.options.beforeBuildTicks, [this]);
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    callback(this.options.afterBuildTicks, [this]);
  }
  beforeTickToLabelConversion() {
    callback(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(ticks) {
    var me = this;
    var tickOpts = me.options.ticks;
    var i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      tick = ticks[i];
      tick.label = callback(tickOpts.callback, [tick.value, i, ticks], me);
    }
  }
  afterTickToLabelConversion() {
    callback(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    callback(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    var me = this;
    var options = me.options;
    var tickOpts = options.ticks;
    var numTicks = me.ticks.length;
    var minRotation = tickOpts.minRotation || 0;
    var maxRotation = tickOpts.maxRotation;
    var labelRotation = minRotation;
    var tickWidth, maxHeight, maxLabelDiagonal;
    if (!me._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !me.isHorizontal()) {
      me.labelRotation = minRotation;
      return;
    }
    var labelSizes = me._getLabelSizes();
    var maxLabelWidth = labelSizes.widest.width;
    var maxLabelHeight = labelSizes.highest.height - labelSizes.highest.offset;
    var maxWidth = Math.min(me.maxWidth, me.chart.width - maxLabelWidth);
    tickWidth = options.offset ? me.maxWidth / numTicks : maxWidth / (numTicks - 1);
    if (maxLabelWidth + 6 > tickWidth) {
      tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
      maxHeight = me.maxHeight - getTickMarkLength(options.gridLines) - tickOpts.padding - getScaleLabelHeight(options.scaleLabel);
      maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
      labelRotation = toDegrees(Math.min(Math.asin(Math.min((labelSizes.highest.height + 6) / tickWidth, 1)), Math.asin(Math.min(maxHeight / maxLabelDiagonal, 1)) - Math.asin(maxLabelHeight / maxLabelDiagonal)));
      labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
    }
    me.labelRotation = labelRotation;
  }
  afterCalculateLabelRotation() {
    callback(this.options.afterCalculateLabelRotation, [this]);
  }
  beforeFit() {
    callback(this.options.beforeFit, [this]);
  }
  fit() {
    var me = this;
    var minSize = {
      width: 0,
      height: 0
    };
    var chart = me.chart;
    var opts = me.options;
    var tickOpts = opts.ticks;
    var scaleLabelOpts = opts.scaleLabel;
    var gridLineOpts = opts.gridLines;
    var display = me._isVisible();
    var labelsBelowTicks = opts.position !== 'top' && me.axis === 'x';
    var isHorizontal = me.isHorizontal();
    if (isHorizontal) {
      minSize.width = me.maxWidth;
    } else if (display) {
      minSize.width = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
    }
    if (!isHorizontal) {
      minSize.height = me.maxHeight;
    } else if (display) {
      minSize.height = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
    }
    if (tickOpts.display && display) {
      var labelSizes = me._getLabelSizes();
      var firstLabelSize = labelSizes.first;
      var lastLabelSize = labelSizes.last;
      var widestLabelSize = labelSizes.widest;
      var highestLabelSize = labelSizes.highest;
      var lineSpace = highestLabelSize.offset * 0.8;
      var tickPadding = tickOpts.padding;
      if (isHorizontal) {
        var isRotated = me.labelRotation !== 0;
        var angleRadians = toRadians(me.labelRotation);
        var cosRotation = Math.cos(angleRadians);
        var sinRotation = Math.sin(angleRadians);
        var labelHeight = sinRotation * widestLabelSize.width + cosRotation * (highestLabelSize.height - (isRotated ? highestLabelSize.offset : 0)) + (isRotated ? 0 : lineSpace);
        minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);
        var offsetLeft = me.getPixelForTick(0) - me.left;
        var offsetRight = me.right - me.getPixelForTick(me.ticks.length - 1);
        var paddingLeft, paddingRight;
        if (isRotated) {
          paddingLeft = labelsBelowTicks ? cosRotation * firstLabelSize.width + sinRotation * firstLabelSize.offset : sinRotation * (firstLabelSize.height - firstLabelSize.offset);
          paddingRight = labelsBelowTicks ? sinRotation * (lastLabelSize.height - lastLabelSize.offset) : cosRotation * lastLabelSize.width + sinRotation * lastLabelSize.offset;
        } else {
          paddingLeft = firstLabelSize.width / 2;
          paddingRight = lastLabelSize.width / 2;
        }
        me.paddingLeft = Math.max((paddingLeft - offsetLeft) * me.width / (me.width - offsetLeft), 0) + 3;
        me.paddingRight = Math.max((paddingRight - offsetRight) * me.width / (me.width - offsetRight), 0) + 3;
      } else {
        var labelWidth = tickOpts.mirror ? 0 :
        widestLabelSize.width + tickPadding + lineSpace;
        minSize.width = Math.min(me.maxWidth, minSize.width + labelWidth);
        me.paddingTop = firstLabelSize.height / 2;
        me.paddingBottom = lastLabelSize.height / 2;
      }
    }
    me._handleMargins();
    if (isHorizontal) {
      me.width = me._length = chart.width - me._margins.left - me._margins.right;
      me.height = minSize.height;
    } else {
      me.width = minSize.width;
      me.height = me._length = chart.height - me._margins.top - me._margins.bottom;
    }
  }
  _handleMargins() {
    var me = this;
    if (me._margins) {
      me._margins.left = Math.max(me.paddingLeft, me._margins.left);
      me._margins.top = Math.max(me.paddingTop, me._margins.top);
      me._margins.right = Math.max(me.paddingRight, me._margins.right);
      me._margins.bottom = Math.max(me.paddingBottom, me._margins.bottom);
    }
  }
  afterFit() {
    callback(this.options.afterFit, [this]);
  }
  isHorizontal() {
    var {
      axis,
      position
    } = this.options;
    return position === 'top' || position === 'bottom' || axis === 'x';
  }
  isFullWidth() {
    return this.options.fullWidth;
  }
  _convertTicksToLabels(ticks) {
    var me = this;
    me.beforeTickToLabelConversion();
    me.generateTickLabels(ticks);
    me.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    var me = this;
    var labelSizes = me._labelSizes;
    if (!labelSizes) {
      me._labelSizes = labelSizes = me._computeLabelSizes();
    }
    return labelSizes;
  }
  _computeLabelSizes() {
    var me = this;
    var ctx = me.ctx;
    var caches = me._longestTextCache;
    var sampleSize = me.options.ticks.sampleSize;
    var widths = [];
    var heights = [];
    var offsets = [];
    var ticks = me.ticks;
    if (sampleSize < ticks.length) {
      ticks = sample(ticks, sampleSize);
    }
    var length = ticks.length;
    var i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
    for (i = 0; i < length; ++i) {
      label = ticks[i].label;
      tickFont = me._resolveTickFontOptions(i);
      ctx.font = fontString = tickFont.string;
      cache = caches[fontString] = caches[fontString] || {
        data: {},
        gc: []
      };
      lineHeight = tickFont.lineHeight;
      width = height = 0;
      if (!isNullOrUndef(label) && !isArray(label)) {
        width = _measureText(ctx, cache.data, cache.gc, width, label);
        height = lineHeight;
      } else if (isArray(label)) {
        for (j = 0, jlen = label.length; j < jlen; ++j) {
          nestedLabel = label[j];
          if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
            width = _measureText(ctx, cache.data, cache.gc, width, nestedLabel);
            height += lineHeight;
          }
        }
      }
      widths.push(width);
      heights.push(height);
      offsets.push(lineHeight / 2);
    }
    garbageCollect(caches, length);
    var widest = widths.indexOf(Math.max.apply(null, widths));
    var highest = heights.indexOf(Math.max.apply(null, heights));
    function valueAt(idx) {
      return {
        width: widths[idx] || 0,
        height: heights[idx] || 0,
        offset: offsets[idx] || 0
      };
    }
    return {
      first: valueAt(0),
      last: valueAt(length - 1),
      widest: valueAt(widest),
      highest: valueAt(highest)
    };
  }
  getLabelForValue(value) {
    return value;
  }
  getPixelForValue(value) {
    return NaN;
  }
  getValueForPixel(pixel) {}
  getPixelForTick(index) {
    var me = this;
    var offset = me.options.offset;
    var numTicks = me.ticks.length;
    var tickWidth = 1 / Math.max(numTicks - (offset ? 0 : 1), 1);
    return index < 0 || index > numTicks - 1 ? null : me.getPixelForDecimal(index * tickWidth + (offset ? tickWidth / 2 : 0));
  }
  getPixelForDecimal(decimal) {
    var me = this;
    if (me._reversePixels) {
      decimal = 1 - decimal;
    }
    return me._startPixel + decimal * me._length;
  }
  getDecimalForPixel(pixel) {
    var decimal = (pixel - this._startPixel) / this._length;
    return this._reversePixels ? 1 - decimal : decimal;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    var {
      min,
      max
    } = this;
    return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
  }
  _autoSkip(ticks) {
    var me = this;
    var tickOpts = me.options.ticks;
    var axisLength = me._length;
    var ticksLimit = tickOpts.maxTicksLimit || axisLength / me._tickSize();
    var majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
    var numMajorIndices = majorIndices.length;
    var first = majorIndices[0];
    var last = majorIndices[numMajorIndices - 1];
    var newTicks = [];
    if (numMajorIndices > ticksLimit) {
      skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
      return newTicks;
    }
    var spacing = calculateSpacing(majorIndices, ticks, axisLength, ticksLimit);
    if (numMajorIndices > 0) {
      var i, ilen;
      var avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
      skip(ticks, newTicks, spacing, isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
      for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
        skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
      }
      skip(ticks, newTicks, spacing, last, isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
      return newTicks;
    }
    skip(ticks, newTicks, spacing);
    return newTicks;
  }
  _tickSize() {
    var me = this;
    var optionTicks = me.options.ticks;
    var rot = toRadians(me.labelRotation);
    var cos = Math.abs(Math.cos(rot));
    var sin = Math.abs(Math.sin(rot));
    var labelSizes = me._getLabelSizes();
    var padding = optionTicks.autoSkipPadding || 0;
    var w = labelSizes ? labelSizes.widest.width + padding : 0;
    var h = labelSizes ? labelSizes.highest.height + padding : 0;
    return me.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
  }
  _isVisible() {
    var display = this.options.display;
    if (display !== 'auto') {
      return !!display;
    }
    return this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(chartArea) {
    var me = this;
    var axis = me.axis;
    var chart = me.chart;
    var options = me.options;
    var {
      gridLines,
      position
    } = options;
    var offsetGridLines = gridLines.offsetGridLines;
    var isHorizontal = me.isHorizontal();
    var ticks = me.ticks;
    var ticksLength = ticks.length + (offsetGridLines ? 1 : 0);
    var tl = getTickMarkLength(gridLines);
    var items = [];
    var context = {
      scale: me,
      tick: ticks[0]
    };
    var axisWidth = gridLines.drawBorder ? resolve([gridLines.borderWidth, gridLines.lineWidth, 0], context, 0) : 0;
    var axisHalfWidth = axisWidth / 2;
    var alignBorderValue = function alignBorderValue(pixel) {
      return _alignPixel(chart, pixel, axisWidth);
    };
    var borderValue, i, lineValue, alignedLineValue;
    var tx1, ty1, tx2, ty2, x1, y1, x2, y2;
    if (position === 'top') {
      borderValue = alignBorderValue(me.bottom);
      ty1 = me.bottom - tl;
      ty2 = borderValue - axisHalfWidth;
      y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
      y2 = chartArea.bottom;
    } else if (position === 'bottom') {
      borderValue = alignBorderValue(me.top);
      y1 = chartArea.top;
      y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
      ty1 = borderValue + axisHalfWidth;
      ty2 = me.top + tl;
    } else if (position === 'left') {
      borderValue = alignBorderValue(me.right);
      tx1 = me.right - tl;
      tx2 = borderValue - axisHalfWidth;
      x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
      x2 = chartArea.right;
    } else if (position === 'right') {
      borderValue = alignBorderValue(me.left);
      x1 = chartArea.left;
      x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
      tx1 = borderValue + axisHalfWidth;
      tx2 = me.left + tl;
    } else if (axis === 'x') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2);
      } else if (isObject(position)) {
        var positionAxisID = Object.keys(position)[0];
        var value = position[positionAxisID];
        borderValue = alignBorderValue(me.chart.scales[positionAxisID].getPixelForValue(value));
      }
      y1 = chartArea.top;
      y2 = chartArea.bottom;
      ty1 = borderValue + axisHalfWidth;
      ty2 = ty1 + tl;
    } else if (axis === 'y') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
      } else if (isObject(position)) {
        var _positionAxisID = Object.keys(position)[0];
        var _value = position[_positionAxisID];
        borderValue = alignBorderValue(me.chart.scales[_positionAxisID].getPixelForValue(_value));
      }
      tx1 = borderValue - axisHalfWidth;
      tx2 = tx1 - tl;
      x1 = chartArea.left;
      x2 = chartArea.right;
    }
    for (i = 0; i < ticksLength; ++i) {
      var tick = ticks[i] || {};
      context = {
        scale: me,
        tick
      };
      var lineWidth = resolve([gridLines.lineWidth], context, i);
      var lineColor = resolve([gridLines.color], context, i);
      var borderDash = gridLines.borderDash || [];
      var borderDashOffset = resolve([gridLines.borderDashOffset], context, i);
      lineValue = getPixelForGridLine(me, i, offsetGridLines);
      if (lineValue === undefined) {
        continue;
      }
      alignedLineValue = _alignPixel(chart, lineValue, lineWidth);
      if (isHorizontal) {
        tx1 = tx2 = x1 = x2 = alignedLineValue;
      } else {
        ty1 = ty2 = y1 = y2 = alignedLineValue;
      }
      items.push({
        tx1,
        ty1,
        tx2,
        ty2,
        x1,
        y1,
        x2,
        y2,
        width: lineWidth,
        color: lineColor,
        borderDash,
        borderDashOffset
      });
    }
    me._ticksLength = ticksLength;
    me._borderValue = borderValue;
    return items;
  }
  _computeLabelItems(chartArea) {
    var me = this;
    var axis = me.axis;
    var options = me.options;
    var {
      position,
      ticks: optionTicks
    } = options;
    var isMirrored = optionTicks.mirror;
    var isHorizontal = me.isHorizontal();
    var ticks = me.ticks;
    var tickPadding = optionTicks.padding;
    var tl = getTickMarkLength(options.gridLines);
    var rotation = -toRadians(me.labelRotation);
    var items = [];
    var i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
    if (position === 'top') {
      y = me.bottom - tl - tickPadding;
      textAlign = !rotation ? 'center' : 'left';
    } else if (position === 'bottom') {
      y = me.top + tl + tickPadding;
      textAlign = !rotation ? 'center' : 'right';
    } else if (position === 'left') {
      x = me.right - (isMirrored ? 0 : tl) - tickPadding;
      textAlign = isMirrored ? 'left' : 'right';
    } else if (position === 'right') {
      x = me.left + (isMirrored ? 0 : tl) + tickPadding;
      textAlign = isMirrored ? 'right' : 'left';
    } else if (axis === 'x') {
      if (position === 'center') {
        y = (chartArea.top + chartArea.bottom) / 2 + tl + tickPadding;
      } else if (isObject(position)) {
        var positionAxisID = Object.keys(position)[0];
        var value = position[positionAxisID];
        y = me.chart.scales[positionAxisID].getPixelForValue(value) + tl + tickPadding;
      }
      textAlign = !rotation ? 'center' : 'right';
    } else if (axis === 'y') {
      if (position === 'center') {
        x = (chartArea.left + chartArea.right) / 2 - tl - tickPadding;
      } else if (isObject(position)) {
        var _positionAxisID2 = Object.keys(position)[0];
        var _value2 = position[_positionAxisID2];
        x = me.chart.scales[_positionAxisID2].getPixelForValue(_value2);
      }
      textAlign = 'right';
    }
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      label = tick.label;
      pixel = me.getPixelForTick(i) + optionTicks.labelOffset;
      font = me._resolveTickFontOptions(i);
      lineHeight = font.lineHeight;
      lineCount = isArray(label) ? label.length : 1;
      if (isHorizontal) {
        x = pixel;
        if (position === 'top') {
          textOffset = (Math.sin(rotation) * (lineCount / 2) + 0.5) * lineHeight;
          textOffset -= (rotation === 0 ? lineCount - 0.5 : Math.cos(rotation) * (lineCount / 2)) * lineHeight;
        } else {
          textOffset = Math.sin(rotation) * (lineCount / 2) * lineHeight;
          textOffset += (rotation === 0 ? 0.5 : Math.cos(rotation) * (lineCount / 2)) * lineHeight;
        }
      } else {
        y = pixel;
        textOffset = (1 - lineCount) * lineHeight / 2;
      }
      items.push({
        x,
        y,
        rotation,
        label,
        font,
        textOffset,
        textAlign
      });
    }
    return items;
  }
  drawGrid(chartArea) {
    var me = this;
    var gridLines = me.options.gridLines;
    var ctx = me.ctx;
    var chart = me.chart;
    var context = {
      scale: me,
      tick: me.ticks[0]
    };
    var axisWidth = gridLines.drawBorder ? resolve([gridLines.borderWidth, gridLines.lineWidth, 0], context, 0) : 0;
    var items = me._gridLineItems || (me._gridLineItems = me._computeGridLineItems(chartArea));
    var i, ilen;
    if (gridLines.display) {
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        var item = items[i];
        var width = item.width;
        var color = item.color;
        if (width && color) {
          ctx.save();
          ctx.lineWidth = width;
          ctx.strokeStyle = color;
          if (ctx.setLineDash) {
            ctx.setLineDash(item.borderDash);
            ctx.lineDashOffset = item.borderDashOffset;
          }
          ctx.beginPath();
          if (gridLines.drawTicks) {
            ctx.moveTo(item.tx1, item.ty1);
            ctx.lineTo(item.tx2, item.ty2);
          }
          if (gridLines.drawOnChartArea) {
            ctx.moveTo(item.x1, item.y1);
            ctx.lineTo(item.x2, item.y2);
          }
          ctx.stroke();
          ctx.restore();
        }
      }
    }
    if (axisWidth) {
      var firstLineWidth = axisWidth;
      context = {
        scale: me,
        tick: me.ticks[me._ticksLength - 1]
      };
      var lastLineWidth = resolve([gridLines.lineWidth, 1], context, me._ticksLength - 1);
      var borderValue = me._borderValue;
      var x1, x2, y1, y2;
      if (me.isHorizontal()) {
        x1 = _alignPixel(chart, me.left, firstLineWidth) - firstLineWidth / 2;
        x2 = _alignPixel(chart, me.right, lastLineWidth) + lastLineWidth / 2;
        y1 = y2 = borderValue;
      } else {
        y1 = _alignPixel(chart, me.top, firstLineWidth) - firstLineWidth / 2;
        y2 = _alignPixel(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
        x1 = x2 = borderValue;
      }
      ctx.lineWidth = axisWidth;
      ctx.strokeStyle = resolve([gridLines.borderColor, gridLines.color], context, 0);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }
  drawLabels(chartArea) {
    var me = this;
    var optionTicks = me.options.ticks;
    if (!optionTicks.display) {
      return;
    }
    var ctx = me.ctx;
    var items = me._labelItems || (me._labelItems = me._computeLabelItems(chartArea));
    var i, j, ilen, jlen;
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      var item = items[i];
      var tickFont = item.font;
      var useStroke = tickFont.lineWidth > 0 && tickFont.strokeStyle !== '';
      ctx.save();
      ctx.translate(item.x, item.y);
      ctx.rotate(item.rotation);
      ctx.font = tickFont.string;
      ctx.fillStyle = tickFont.color;
      ctx.textBaseline = 'middle';
      ctx.textAlign = item.textAlign;
      if (useStroke) {
        ctx.strokeStyle = tickFont.strokeStyle;
        ctx.lineWidth = tickFont.lineWidth;
      }
      var label = item.label;
      var y = item.textOffset;
      if (isArray(label)) {
        for (j = 0, jlen = label.length; j < jlen; ++j) {
          if (useStroke) {
            ctx.strokeText('' + label[j], 0, y);
          }
          ctx.fillText('' + label[j], 0, y);
          y += tickFont.lineHeight;
        }
      } else {
        if (useStroke) {
          ctx.strokeText(label, 0, y);
        }
        ctx.fillText(label, 0, y);
      }
      ctx.restore();
    }
  }
  drawTitle(chartArea) {
    var me = this;
    var ctx = me.ctx;
    var options = me.options;
    var scaleLabel = options.scaleLabel;
    if (!scaleLabel.display) {
      return;
    }
    var scaleLabelFontColor = valueOrDefault(scaleLabel.fontColor, defaults.fontColor);
    var scaleLabelFont = _parseFont(scaleLabel);
    var scaleLabelPadding = toPadding(scaleLabel.padding);
    var halfLineHeight = scaleLabelFont.lineHeight / 2;
    var scaleLabelAlign = scaleLabel.align;
    var position = options.position;
    var isReverse = me.options.reverse;
    var rotation = 0;
    var textAlign;
    var scaleLabelX, scaleLabelY;
    if (me.isHorizontal()) {
      switch (scaleLabelAlign) {
        case 'start':
          scaleLabelX = me.left + (isReverse ? me.width : 0);
          textAlign = isReverse ? 'right' : 'left';
          break;
        case 'end':
          scaleLabelX = me.left + (isReverse ? 0 : me.width);
          textAlign = isReverse ? 'left' : 'right';
          break;
        default:
          scaleLabelX = me.left + me.width / 2;
          textAlign = 'center';
      }
      scaleLabelY = position === 'top' ? me.top + halfLineHeight + scaleLabelPadding.top : me.bottom - halfLineHeight - scaleLabelPadding.bottom;
    } else {
      var isLeft = position === 'left';
      scaleLabelX = isLeft ? me.left + halfLineHeight + scaleLabelPadding.top : me.right - halfLineHeight - scaleLabelPadding.top;
      switch (scaleLabelAlign) {
        case 'start':
          scaleLabelY = me.top + (isReverse ? 0 : me.height);
          textAlign = isReverse === isLeft ? 'right' : 'left';
          break;
        case 'end':
          scaleLabelY = me.top + (isReverse ? me.height : 0);
          textAlign = isReverse === isLeft ? 'left' : 'right';
          break;
        default:
          scaleLabelY = me.top + me.height / 2;
          textAlign = 'center';
      }
      rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
    }
    ctx.save();
    ctx.translate(scaleLabelX, scaleLabelY);
    ctx.rotate(rotation);
    ctx.textAlign = textAlign;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = scaleLabelFontColor;
    ctx.font = scaleLabelFont.string;
    ctx.fillText(scaleLabel.labelString, 0, 0);
    ctx.restore();
  }
  draw(chartArea) {
    var me = this;
    if (!me._isVisible()) {
      return;
    }
    me.drawGrid(chartArea);
    me.drawTitle();
    me.drawLabels(chartArea);
  }
  _layers() {
    var me = this;
    var opts = me.options;
    var tz = opts.ticks && opts.ticks.z || 0;
    var gz = opts.gridLines && opts.gridLines.z || 0;
    if (!me._isVisible() || tz === gz || me.draw !== me._draw) {
      return [{
        z: tz,
        draw(chartArea) {
          me.draw(chartArea);
        }
      }];
    }
    return [{
      z: gz,
      draw(chartArea) {
        me.drawGrid(chartArea);
        me.drawTitle();
      }
    }, {
      z: tz,
      draw(chartArea) {
        me.drawLabels(chartArea);
      }
    }];
  }
  getMatchingVisibleMetas(type) {
    var me = this;
    var metas = me.chart.getSortedVisibleDatasetMetas();
    var axisID = me.axis + 'AxisID';
    var result = [];
    var i, ilen;
    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      var meta = metas[i];
      if (meta[axisID] === me.id && (!type || meta.type === type)) {
        result.push(meta);
      }
    }
    return result;
  }
  _resolveTickFontOptions(index) {
    var me = this;
    var options = me.options.ticks;
    var context = {
      chart: me.chart,
      scale: me,
      tick: me.ticks[index],
      index
    };
    return _extends(_parseFont({
      fontFamily: resolve([options.fontFamily], context),
      fontSize: resolve([options.fontSize], context),
      fontStyle: resolve([options.fontStyle], context),
      lineHeight: resolve([options.lineHeight], context)
    }), {
      color: resolve([options.fontColor, defaults.fontColor], context),
      lineWidth: resolve([options.lineWidth], context),
      strokeStyle: resolve([options.strokeStyle], context)
    });
  }
}
Scale.prototype._draw = Scale.prototype.draw;

var defaultConfig = {};
class CategoryScale extends Scale {
  constructor(cfg) {
    super(cfg);
    this._numLabels = 0;
    this._startValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    var labels = this.getLabels();
    if (labels[index] === raw) {
      return index;
    }
    var first = labels.indexOf(raw);
    var last = labels.lastIndexOf(raw);
    return first === -1 || first !== last ? index : first;
  }
  determineDataLimits() {
    var me = this;
    var max = me.getLabels().length - 1;
    me.min = Math.max(me._userMin || 0, 0);
    me.max = Math.min(me._userMax || max, max);
  }
  buildTicks() {
    var me = this;
    var min = me.min;
    var max = me.max;
    var offset = me.options.offset;
    var labels = me.getLabels();
    labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
    me._numLabels = labels.length;
    me._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
    me._startValue = me.min - (offset ? 0.5 : 0);
    return labels.map(l => ({
      value: l
    }));
  }
  getLabelForValue(value) {
    var me = this;
    var labels = me.getLabels();
    if (value >= 0 && value < labels.length) {
      return labels[value];
    }
    return value;
  }
  configure() {
    var me = this;
    super.configure();
    if (!me.isHorizontal()) {
      me._reversePixels = !me._reversePixels;
    }
  }
  getPixelForValue(value) {
    var me = this;
    if (typeof value !== 'number') {
      value = me.parse(value);
    }
    return me.getPixelForDecimal((value - me._startValue) / me._valueRange);
  }
  getPixelForTick(index) {
    var me = this;
    var ticks = me.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return me.getPixelForValue(index * me._numLabels / ticks.length + me.min);
  }
  getValueForPixel(pixel) {
    var me = this;
    var value = Math.round(me._startValue + me.getDecimalForPixel(pixel) * me._valueRange);
    return Math.min(Math.max(value, 0), me.ticks.length - 1);
  }
  getBasePixel() {
    return this.bottom;
  }
}
_defineProperty(CategoryScale, "id", 'category');
_defineProperty(CategoryScale, "defaults", defaultConfig);

function niceNum(range, round) {
  var exponent = Math.floor(log10(range));
  var fraction = range / Math.pow(10, exponent);
  var niceFraction;
  if (round) {
    if (fraction < 1.5) {
      niceFraction = 1;
    } else if (fraction < 3) {
      niceFraction = 2;
    } else if (fraction < 7) {
      niceFraction = 5;
    } else {
      niceFraction = 10;
    }
  } else if (fraction <= 1.0) {
    niceFraction = 1;
  } else if (fraction <= 2) {
    niceFraction = 2;
  } else if (fraction <= 5) {
    niceFraction = 5;
  } else {
    niceFraction = 10;
  }
  return niceFraction * Math.pow(10, exponent);
}
function generateTicks(generationOptions, dataRange) {
  var ticks = [];
  var MIN_SPACING = 1e-14;
  var {
    stepSize,
    min,
    max,
    precision
  } = generationOptions;
  var unit = stepSize || 1;
  var maxNumSpaces = generationOptions.maxTicks - 1;
  var {
    min: rmin,
    max: rmax
  } = dataRange;
  var spacing = niceNum((rmax - rmin) / maxNumSpaces / unit) * unit;
  var factor, niceMin, niceMax, numSpaces;
  if (spacing < MIN_SPACING && isNullOrUndef(min) && isNullOrUndef(max)) {
    return [{
      value: rmin
    }, {
      value: rmax
    }];
  }
  numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
  if (numSpaces > maxNumSpaces) {
    spacing = niceNum(numSpaces * spacing / maxNumSpaces / unit) * unit;
  }
  if (stepSize || isNullOrUndef(precision)) {
    factor = Math.pow(10, _decimalPlaces(spacing));
  } else {
    factor = Math.pow(10, precision);
    spacing = Math.ceil(spacing * factor) / factor;
  }
  niceMin = Math.floor(rmin / spacing) * spacing;
  niceMax = Math.ceil(rmax / spacing) * spacing;
  if (stepSize && !isNullOrUndef(min) && !isNullOrUndef(max)) {
    if (almostWhole((max - min) / stepSize, spacing / 1000)) {
      niceMin = min;
      niceMax = max;
    }
  }
  numSpaces = (niceMax - niceMin) / spacing;
  if (almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
    numSpaces = Math.round(numSpaces);
  } else {
    numSpaces = Math.ceil(numSpaces);
  }
  niceMin = Math.round(niceMin * factor) / factor;
  niceMax = Math.round(niceMax * factor) / factor;
  ticks.push({
    value: isNullOrUndef(min) ? niceMin : min
  });
  for (var j = 1; j < numSpaces; ++j) {
    ticks.push({
      value: Math.round((niceMin + j * spacing) * factor) / factor
    });
  }
  ticks.push({
    value: isNullOrUndef(max) ? niceMax : max
  });
  return ticks;
}
class LinearScaleBase extends Scale {
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._endValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    if (isNullOrUndef(raw)) {
      return NaN;
    }
    if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) {
      return NaN;
    }
    return +raw;
  }
  handleTickRangeOptions() {
    var me = this;
    var opts = me.options;
    if (opts.beginAtZero) {
      var minSign = sign(me.min);
      var maxSign = sign(me.max);
      if (minSign < 0 && maxSign < 0) {
        me.max = 0;
      } else if (minSign > 0 && maxSign > 0) {
        me.min = 0;
      }
    }
    var setMin = opts.min !== undefined || opts.suggestedMin !== undefined;
    var setMax = opts.max !== undefined || opts.suggestedMax !== undefined;
    if (opts.min !== undefined) {
      me.min = opts.min;
    } else if (opts.suggestedMin !== undefined) {
      if (me.min === null) {
        me.min = opts.suggestedMin;
      } else {
        me.min = Math.min(me.min, opts.suggestedMin);
      }
    }
    if (opts.max !== undefined) {
      me.max = opts.max;
    } else if (opts.suggestedMax !== undefined) {
      if (me.max === null) {
        me.max = opts.suggestedMax;
      } else {
        me.max = Math.max(me.max, opts.suggestedMax);
      }
    }
    if (setMin !== setMax) {
      if (me.min >= me.max) {
        if (setMin) {
          me.max = me.min + 1;
        } else {
          me.min = me.max - 1;
        }
      }
    }
    if (me.min === me.max) {
      me.max++;
      if (!opts.beginAtZero) {
        me.min--;
      }
    }
  }
  getTickLimit() {
    var me = this;
    var tickOpts = me.options.ticks;
    var {
      maxTicksLimit,
      stepSize
    } = tickOpts;
    var maxTicks;
    if (stepSize) {
      maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
    } else {
      maxTicks = me.computeTickLimit();
      maxTicksLimit = maxTicksLimit || 11;
    }
    if (maxTicksLimit) {
      maxTicks = Math.min(maxTicksLimit, maxTicks);
    }
    return maxTicks;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  handleDirectionalChanges(ticks) {
    return ticks;
  }
  buildTicks() {
    var me = this;
    var opts = me.options;
    var tickOpts = opts.ticks;
    var maxTicks = me.getTickLimit();
    maxTicks = Math.max(2, maxTicks);
    var numericGeneratorOptions = {
      maxTicks,
      min: opts.min,
      max: opts.max,
      precision: tickOpts.precision,
      stepSize: valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
    };
    var ticks = generateTicks(numericGeneratorOptions, me);
    ticks = me.handleDirectionalChanges(ticks);
    _setMinAndMaxByKey(ticks, me, 'value');
    if (opts.reverse) {
      ticks.reverse();
      me.start = me.max;
      me.end = me.min;
    } else {
      me.start = me.min;
      me.end = me.max;
    }
    return ticks;
  }
  configure() {
    var me = this;
    var ticks = me.ticks;
    var start = me.min;
    var end = me.max;
    super.configure();
    if (me.options.offset && ticks.length) {
      var offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
      start -= offset;
      end += offset;
    }
    me._startValue = start;
    me._endValue = end;
    me._valueRange = end - start;
  }
  getLabelForValue(value) {
    return new Intl.NumberFormat(this.options.locale).format(value);
  }
}

var defaultConfig$1 = {
  ticks: {
    callback: Ticks.formatters.numeric
  }
};
class LinearScale extends LinearScaleBase {
  determineDataLimits() {
    var me = this;
    var options = me.options;
    var minmax = me.getMinMax(true);
    var min = minmax.min;
    var max = minmax.max;
    me.min = isNumberFinite(min) ? min : valueOrDefault(options.suggestedMin, 0);
    me.max = isNumberFinite(max) ? max : valueOrDefault(options.suggestedMax, 1);
    if (options.stacked && min > 0) {
      me.min = 0;
    }
    me.handleTickRangeOptions();
  }
  computeTickLimit() {
    var me = this;
    if (me.isHorizontal()) {
      return Math.ceil(me.width / 40);
    }
    var tickFont = _parseFont(me.options.ticks);
    return Math.ceil(me.height / tickFont.lineHeight);
  }
  handleDirectionalChanges(ticks) {
    return this.isHorizontal() ? ticks : ticks.reverse();
  }
  getPixelForValue(value) {
    var me = this;
    return me.getPixelForDecimal((value - me._startValue) / me._valueRange);
  }
  getValueForPixel(pixel) {
    return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
  }
  getPixelForTick(index) {
    var ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  }
}
_defineProperty(LinearScale, "id", 'linear');
_defineProperty(LinearScale, "defaults", defaultConfig$1);

function isMajor(tickVal) {
  var remain = tickVal / Math.pow(10, Math.floor(log10(tickVal)));
  return remain === 1;
}
function finiteOrDefault(value, def) {
  return isNumberFinite(value) ? value : def;
}
function generateTicks$1(generationOptions, dataRange) {
  var endExp = Math.floor(log10(dataRange.max));
  var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
  var ticks = [];
  var tickVal = finiteOrDefault(generationOptions.min, Math.pow(10, Math.floor(log10(dataRange.min))));
  var exp = Math.floor(log10(tickVal));
  var significand = Math.floor(tickVal / Math.pow(10, exp));
  var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
  do {
    ticks.push({
      value: tickVal,
      major: isMajor(tickVal)
    });
    ++significand;
    if (significand === 10) {
      significand = 1;
      ++exp;
      precision = exp >= 0 ? 1 : precision;
    }
    tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
  } while (exp < endExp || exp === endExp && significand < endSignificand);
  var lastTick = finiteOrDefault(generationOptions.max, tickVal);
  ticks.push({
    value: lastTick,
    major: isMajor(tickVal)
  });
  return ticks;
}
var defaultConfig$2 = {
  ticks: {
    callback: Ticks.formatters.numeric,
    major: {
      enabled: true
    }
  }
};
class LogarithmicScale extends Scale {
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    var value = LinearScaleBase.prototype.parse.apply(this, [raw, index]);
    if (value === 0) {
      return undefined;
    }
    return isNumberFinite(value) && value > 0 ? value : NaN;
  }
  determineDataLimits() {
    var me = this;
    var minmax = me.getMinMax(true);
    var min = minmax.min;
    var max = minmax.max;
    me.min = isNumberFinite(min) ? Math.max(0, min) : null;
    me.max = isNumberFinite(max) ? Math.max(0, max) : null;
    me.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    var me = this;
    var DEFAULT_MIN = 1;
    var DEFAULT_MAX = 10;
    var min = me.min;
    var max = me.max;
    if (min === max) {
      if (min <= 0) {
        min = DEFAULT_MIN;
        max = DEFAULT_MAX;
      } else {
        min = Math.pow(10, Math.floor(log10(min)) - 1);
        max = Math.pow(10, Math.floor(log10(max)) + 1);
      }
    }
    if (min <= 0) {
      min = Math.pow(10, Math.floor(log10(max)) - 1);
    }
    if (max <= 0) {
      max = Math.pow(10, Math.floor(log10(min)) + 1);
    }
    me.min = min;
    me.max = max;
  }
  buildTicks() {
    var me = this;
    var opts = me.options;
    var generationOptions = {
      min: me._userMin,
      max: me._userMax
    };
    var ticks = generateTicks$1(generationOptions, me);
    var reverse = !me.isHorizontal();
    _setMinAndMaxByKey(ticks, me, 'value');
    if (opts.reverse) {
      reverse = !reverse;
      me.start = me.max;
      me.end = me.min;
    } else {
      me.start = me.min;
      me.end = me.max;
    }
    if (reverse) {
      ticks.reverse();
    }
    return ticks;
  }
  getLabelForValue(value) {
    return value === undefined ? '0' : new Intl.NumberFormat(this.options.locale).format(value);
  }
  getPixelForTick(index) {
    var ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  }
  configure() {
    var me = this;
    var start = me.min;
    super.configure();
    me._startValue = log10(start);
    me._valueRange = log10(me.max) - log10(start);
  }
  getPixelForValue(value) {
    var me = this;
    if (value === undefined || value === 0) {
      value = me.min;
    }
    return me.getPixelForDecimal(value === me.min ? 0 : (log10(value) - me._startValue) / me._valueRange);
  }
  getValueForPixel(pixel) {
    var me = this;
    var decimal = me.getDecimalForPixel(pixel);
    return Math.pow(10, me._startValue + decimal * me._valueRange);
  }
}
_defineProperty(LogarithmicScale, "id", 'logarithmic');
_defineProperty(LogarithmicScale, "defaults", defaultConfig$2);

var valueOrDefault$2 = helpers.valueOrDefault;
var valueAtIndexOrDefault$1 = helpers.valueAtIndexOrDefault;
var resolve$2 = helpers.options.resolve;
var defaultConfig$3 = {
  display: true,
  animate: true,
  position: 'chartArea',
  angleLines: {
    display: true,
    color: 'rgba(0,0,0,0.1)',
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0.0
  },
  gridLines: {
    circular: false
  },
  ticks: {
    showLabelBackdrop: true,
    backdropColor: 'rgba(255,255,255,0.75)',
    backdropPaddingY: 2,
    backdropPaddingX: 2,
    callback: Ticks.formatters.numeric
  },
  pointLabels: {
    display: true,
    fontSize: 10,
    callback(label) {
      return label;
    }
  }
};
function getTickBackdropHeight(opts) {
  var tickOpts = opts.ticks;
  if (tickOpts.display && opts.display) {
    return valueOrDefault$2(tickOpts.fontSize, defaults.fontSize) + tickOpts.backdropPaddingY * 2;
  }
  return 0;
}
function measureLabelSize(ctx, lineHeight, label) {
  if (helpers.isArray(label)) {
    return {
      w: _longestText(ctx, ctx.font, label),
      h: label.length * lineHeight
    };
  }
  return {
    w: ctx.measureText(label).width,
    h: lineHeight
  };
}
function determineLimits(angle, pos, size, min, max) {
  if (angle === min || angle === max) {
    return {
      start: pos - size / 2,
      end: pos + size / 2
    };
  } else if (angle < min || angle > max) {
    return {
      start: pos - size,
      end: pos
    };
  }
  return {
    start: pos,
    end: pos + size
  };
}
function fitWithPointLabels(scale) {
  var plFont = helpers.options._parseFont(scale.options.pointLabels);
  var furthestLimits = {
    l: 0,
    r: scale.width,
    t: 0,
    b: scale.height - scale.paddingTop
  };
  var furthestAngles = {};
  var i, textSize, pointPosition;
  scale.ctx.font = plFont.string;
  scale._pointLabelSizes = [];
  var valueCount = scale.chart.data.labels.length;
  for (i = 0; i < valueCount; i++) {
    pointPosition = scale.getPointPosition(i, scale.drawingArea + 5);
    textSize = measureLabelSize(scale.ctx, plFont.lineHeight, scale.pointLabels[i]);
    scale._pointLabelSizes[i] = textSize;
    var angleRadians = scale.getIndexAngle(i);
    var angle = toDegrees(angleRadians);
    var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
    var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
    if (hLimits.start < furthestLimits.l) {
      furthestLimits.l = hLimits.start;
      furthestAngles.l = angleRadians;
    }
    if (hLimits.end > furthestLimits.r) {
      furthestLimits.r = hLimits.end;
      furthestAngles.r = angleRadians;
    }
    if (vLimits.start < furthestLimits.t) {
      furthestLimits.t = vLimits.start;
      furthestAngles.t = angleRadians;
    }
    if (vLimits.end > furthestLimits.b) {
      furthestLimits.b = vLimits.end;
      furthestAngles.b = angleRadians;
    }
  }
  scale._setReductions(scale.drawingArea, furthestLimits, furthestAngles);
}
function getTextAlignForAngle(angle) {
  if (angle === 0 || angle === 180) {
    return 'center';
  } else if (angle < 180) {
    return 'left';
  }
  return 'right';
}
function fillText(ctx, text, position, lineHeight) {
  var y = position.y + lineHeight / 2;
  var i, ilen;
  if (helpers.isArray(text)) {
    for (i = 0, ilen = text.length; i < ilen; ++i) {
      ctx.fillText(text[i], position.x, y);
      y += lineHeight;
    }
  } else {
    ctx.fillText(text, position.x, y);
  }
}
function adjustPointPositionForLabelHeight(angle, textSize, position) {
  if (angle === 90 || angle === 270) {
    position.y -= textSize.h / 2;
  } else if (angle > 270 || angle < 90) {
    position.y -= textSize.h;
  }
}
function drawPointLabels(scale) {
  var ctx = scale.ctx;
  var opts = scale.options;
  var pointLabelOpts = opts.pointLabels;
  var tickBackdropHeight = getTickBackdropHeight(opts);
  var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);
  var plFont = helpers.options._parseFont(pointLabelOpts);
  ctx.save();
  ctx.font = plFont.string;
  ctx.textBaseline = 'middle';
  for (var i = scale.chart.data.labels.length - 1; i >= 0; i--) {
    var extra = i === 0 ? tickBackdropHeight / 2 : 0;
    var pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + 5);
    var pointLabelFontColor = valueAtIndexOrDefault$1(pointLabelOpts.fontColor, i, defaults.fontColor);
    ctx.fillStyle = pointLabelFontColor;
    var angleRadians = scale.getIndexAngle(i);
    var angle = toDegrees(angleRadians);
    ctx.textAlign = getTextAlignForAngle(angle);
    adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
    fillText(ctx, scale.pointLabels[i], pointLabelPosition, plFont.lineHeight);
  }
  ctx.restore();
}
function drawRadiusLine(scale, gridLineOpts, radius, index) {
  var ctx = scale.ctx;
  var circular = gridLineOpts.circular;
  var valueCount = scale.chart.data.labels.length;
  var lineColor = valueAtIndexOrDefault$1(gridLineOpts.color, index - 1, undefined);
  var lineWidth = valueAtIndexOrDefault$1(gridLineOpts.lineWidth, index - 1, undefined);
  var pointPosition;
  if (!circular && !valueCount || !lineColor || !lineWidth) {
    return;
  }
  ctx.save();
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWidth;
  if (ctx.setLineDash) {
    ctx.setLineDash(gridLineOpts.borderDash || []);
    ctx.lineDashOffset = gridLineOpts.borderDashOffset || 0.0;
  }
  ctx.beginPath();
  if (circular) {
    ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
  } else {
    pointPosition = scale.getPointPosition(0, radius);
    ctx.moveTo(pointPosition.x, pointPosition.y);
    for (var i = 1; i < valueCount; i++) {
      pointPosition = scale.getPointPosition(i, radius);
      ctx.lineTo(pointPosition.x, pointPosition.y);
    }
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
function numberOrZero(param) {
  return isNumber(param) ? param : 0;
}
class RadialLinearScale extends LinearScaleBase {
  constructor(cfg) {
    super(cfg);
    this.xCenter = undefined;
    this.yCenter = undefined;
    this.drawingArea = undefined;
    this.pointLabels = [];
  }
  setDimensions() {
    var me = this;
    me.width = me.maxWidth;
    me.height = me.maxHeight;
    me.paddingTop = getTickBackdropHeight(me.options) / 2;
    me.xCenter = Math.floor(me.width / 2);
    me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
    me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
  }
  determineDataLimits() {
    var me = this;
    var minmax = me.getMinMax(false);
    var min = minmax.min;
    var max = minmax.max;
    me.min = helpers.isFinite(min) && !isNaN(min) ? min : 0;
    me.max = helpers.isFinite(max) && !isNaN(max) ? max : 0;
    me.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
  }
  generateTickLabels(ticks) {
    var me = this;
    LinearScaleBase.prototype.generateTickLabels.call(me, ticks);
    me.pointLabels = me.chart.data.labels.map((value, index) => {
      var label = helpers.callback(me.options.pointLabels.callback, [value, index], me);
      return label || label === 0 ? label : '';
    });
  }
  fit() {
    var me = this;
    var opts = me.options;
    if (opts.display && opts.pointLabels.display) {
      fitWithPointLabels(me);
    } else {
      me.setCenterPoint(0, 0, 0, 0);
    }
  }
  _setReductions(largestPossibleRadius, furthestLimits, furthestAngles) {
    var me = this;
    var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
    var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
    var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
    var radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);
    radiusReductionLeft = numberOrZero(radiusReductionLeft);
    radiusReductionRight = numberOrZero(radiusReductionRight);
    radiusReductionTop = numberOrZero(radiusReductionTop);
    radiusReductionBottom = numberOrZero(radiusReductionBottom);
    me.drawingArea = Math.min(Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2), Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
    me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
  }
  setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
    var me = this;
    var maxRight = me.width - rightMovement - me.drawingArea;
    var maxLeft = leftMovement + me.drawingArea;
    var maxTop = topMovement + me.drawingArea;
    var maxBottom = me.height - me.paddingTop - bottomMovement - me.drawingArea;
    me.xCenter = Math.floor((maxLeft + maxRight) / 2 + me.left);
    me.yCenter = Math.floor((maxTop + maxBottom) / 2 + me.top + me.paddingTop);
  }
  getIndexAngle(index) {
    var chart = this.chart;
    var angleMultiplier = Math.PI * 2 / chart.data.labels.length;
    var options = chart.options || {};
    var startAngle = options.startAngle || 0;
    return _normalizeAngle(index * angleMultiplier + toRadians(startAngle));
  }
  getDistanceFromCenterForValue(value) {
    var me = this;
    if (helpers.isNullOrUndef(value)) {
      return NaN;
    }
    var scalingFactor = me.drawingArea / (me.max - me.min);
    if (me.options.reverse) {
      return (me.max - value) * scalingFactor;
    }
    return (value - me.min) * scalingFactor;
  }
  getPointPosition(index, distanceFromCenter) {
    var me = this;
    var angle = me.getIndexAngle(index) - Math.PI / 2;
    return {
      x: Math.cos(angle) * distanceFromCenter + me.xCenter,
      y: Math.sin(angle) * distanceFromCenter + me.yCenter,
      angle
    };
  }
  getPointPositionForValue(index, value) {
    return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
  }
  getBasePosition(index) {
    return this.getPointPositionForValue(index || 0, this.getBaseValue());
  }
  drawGrid() {
    var me = this;
    var ctx = me.ctx;
    var opts = me.options;
    var gridLineOpts = opts.gridLines;
    var angleLineOpts = opts.angleLines;
    var lineWidth = valueOrDefault$2(angleLineOpts.lineWidth, gridLineOpts.lineWidth);
    var lineColor = valueOrDefault$2(angleLineOpts.color, gridLineOpts.color);
    var i, offset, position;
    if (opts.pointLabels.display) {
      drawPointLabels(me);
    }
    if (gridLineOpts.display) {
      me.ticks.forEach((tick, index) => {
        if (index !== 0) {
          offset = me.getDistanceFromCenterForValue(me.ticks[index].value);
          drawRadiusLine(me, gridLineOpts, offset, index);
        }
      });
    }
    if (angleLineOpts.display && lineWidth && lineColor) {
      ctx.save();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = lineColor;
      if (ctx.setLineDash) {
        ctx.setLineDash(resolve$2([angleLineOpts.borderDash, gridLineOpts.borderDash, []]));
        ctx.lineDashOffset = resolve$2([angleLineOpts.borderDashOffset, gridLineOpts.borderDashOffset, 0.0]);
      }
      for (i = me.chart.data.labels.length - 1; i >= 0; i--) {
        offset = me.getDistanceFromCenterForValue(opts.ticks.reverse ? me.min : me.max);
        position = me.getPointPosition(i, offset);
        ctx.beginPath();
        ctx.moveTo(me.xCenter, me.yCenter);
        ctx.lineTo(position.x, position.y);
        ctx.stroke();
      }
      ctx.restore();
    }
  }
  drawLabels() {
    var me = this;
    var ctx = me.ctx;
    var opts = me.options;
    var tickOpts = opts.ticks;
    if (!tickOpts.display) {
      return;
    }
    var startAngle = me.getIndexAngle(0);
    var tickFont = helpers.options._parseFont(tickOpts);
    var tickFontColor = valueOrDefault$2(tickOpts.fontColor, defaults.fontColor);
    var offset, width;
    ctx.save();
    ctx.font = tickFont.string;
    ctx.translate(me.xCenter, me.yCenter);
    ctx.rotate(startAngle);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    me.ticks.forEach((tick, index) => {
      if (index === 0 && !opts.reverse) {
        return;
      }
      offset = me.getDistanceFromCenterForValue(me.ticks[index].value);
      if (tickOpts.showLabelBackdrop) {
        width = ctx.measureText(tick.label).width;
        ctx.fillStyle = tickOpts.backdropColor;
        ctx.fillRect(-width / 2 - tickOpts.backdropPaddingX, -offset - tickFont.size / 2 - tickOpts.backdropPaddingY, width + tickOpts.backdropPaddingX * 2, tickFont.size + tickOpts.backdropPaddingY * 2);
      }
      ctx.fillStyle = tickFontColor;
      ctx.fillText(tick.label, 0, -offset);
    });
    ctx.restore();
  }
  drawTitle() {}
}
_defineProperty(RadialLinearScale, "id", 'radialLinear');
_defineProperty(RadialLinearScale, "defaults", defaultConfig$3);

var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
var INTERVALS = {
  millisecond: {
    common: true,
    size: 1,
    steps: 1000
  },
  second: {
    common: true,
    size: 1000,
    steps: 60
  },
  minute: {
    common: true,
    size: 60000,
    steps: 60
  },
  hour: {
    common: true,
    size: 3600000,
    steps: 24
  },
  day: {
    common: true,
    size: 86400000,
    steps: 30
  },
  week: {
    common: false,
    size: 604800000,
    steps: 4
  },
  month: {
    common: true,
    size: 2.628e9,
    steps: 12
  },
  quarter: {
    common: false,
    size: 7.884e9,
    steps: 4
  },
  year: {
    common: true,
    size: 3.154e10
  }
};
var UNITS =
Object.keys(INTERVALS);
function sorter(a, b) {
  return a - b;
}
function arrayUnique(items) {
  var set = new Set();
  var i, ilen;
  for (i = 0, ilen = items.length; i < ilen; ++i) {
    set.add(items[i]);
  }
  if (set.size === ilen) {
    return items;
  }
  return [...set];
}
function parse(scale, input) {
  if (isNullOrUndef(input)) {
    return null;
  }
  var adapter = scale._adapter;
  var options = scale.options.time;
  var parser = options.parser;
  var value = input;
  if (typeof parser === 'function') {
    value = parser(value);
  }
  if (!isNumberFinite(value)) {
    value = typeof parser === 'string' ? adapter.parse(value, parser) : adapter.parse(value);
  }
  if (value === null) {
    return value;
  }
  if (options.round) {
    value = scale._adapter.startOf(value, options.round);
  }
  return +value;
}
function getDataTimestamps(scale) {
  var isSeries = scale.options.distribution === 'series';
  var timestamps = scale._cache.data || [];
  var i, ilen;
  if (timestamps.length) {
    return timestamps;
  }
  var metas = scale.getMatchingVisibleMetas();
  if (isSeries && metas.length) {
    return metas[0].controller.getAllParsedValues(scale);
  }
  for (i = 0, ilen = metas.length; i < ilen; ++i) {
    timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(scale));
  }
  return scale._cache.data = arrayUnique(timestamps.sort(sorter));
}
function getLabelTimestamps(scale) {
  var isSeries = scale.options.distribution === 'series';
  var timestamps = scale._cache.labels || [];
  var i, ilen;
  if (timestamps.length) {
    return timestamps;
  }
  var labels = scale.getLabels();
  for (i = 0, ilen = labels.length; i < ilen; ++i) {
    timestamps.push(parse(scale, labels[i]));
  }
  return scale._cache.labels = isSeries ? timestamps : arrayUnique(timestamps.sort(sorter));
}
function getAllTimestamps(scale) {
  var timestamps = scale._cache.all || [];
  if (timestamps.length) {
    return timestamps;
  }
  var data = getDataTimestamps(scale);
  var label = getLabelTimestamps(scale);
  if (data.length && label.length) {
    timestamps = arrayUnique(data.concat(label).sort(sorter));
  } else {
    timestamps = data.length ? data : label;
  }
  timestamps = scale._cache.all = timestamps;
  return timestamps;
}
function buildLookupTable(timestamps, min, max, distribution) {
  if (distribution === 'linear' || !timestamps.length) {
    return [{
      time: min,
      pos: 0
    }, {
      time: max,
      pos: 1
    }];
  }
  var table = [];
  var items = [min];
  var i, ilen, prev, curr, next;
  for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
    curr = timestamps[i];
    if (curr > min && curr < max) {
      items.push(curr);
    }
  }
  items.push(max);
  for (i = 0, ilen = items.length; i < ilen; ++i) {
    next = items[i + 1];
    prev = items[i - 1];
    curr = items[i];
    if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {
      table.push({
        time: curr,
        pos: i / (ilen - 1)
      });
    }
  }
  return table;
}
function interpolate(table, skey, sval, tkey) {
  var {
    lo,
    hi
  } = _lookupByKey(table, skey, sval);
  var prev = table[lo];
  var next = table[hi];
  var span = next[skey] - prev[skey];
  var ratio = span ? (sval - prev[skey]) / span : 0;
  var offset = (next[tkey] - prev[tkey]) * ratio;
  return prev[tkey] + offset;
}
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
  var ilen = UNITS.length;
  for (var i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
    var interval = INTERVALS[UNITS[i]];
    var factor = interval.steps ? interval.steps : MAX_INTEGER;
    if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
      return UNITS[i];
    }
  }
  return UNITS[ilen - 1];
}
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
  for (var i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
    var unit = UNITS[i];
    if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
      return unit;
    }
  }
  return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
function determineMajorUnit(unit) {
  for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
    if (INTERVALS[UNITS[i]].common) {
      return UNITS[i];
    }
  }
}
function addTick(timestamps, ticks, time) {
  if (!timestamps.length) {
    return;
  }
  var {
    lo,
    hi
  } = _lookup(timestamps, time);
  var timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
  ticks.add(timestamp);
}
function generate(scale) {
  var adapter = scale._adapter;
  var min = scale.min;
  var max = scale.max;
  var options = scale.options;
  var timeOpts = options.time;
  var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, scale._getLabelCapacity(min));
  var stepSize = valueOrDefault(timeOpts.stepSize, 1);
  var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
  var ticks = new Set();
  var first = min;
  var time;
  if (weekday) {
    first = +adapter.startOf(first, 'isoWeek', weekday);
  }
  first = +adapter.startOf(first, weekday ? 'day' : minor);
  if (adapter.diff(max, min, minor) > 100000 * stepSize) {
    throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
  }
  if (scale.options.ticks.source === 'data') {
    var timestamps = getDataTimestamps(scale);
    for (time = first; time < max; time = +adapter.add(time, stepSize, minor)) {
      addTick(timestamps, ticks, time);
    }
    if (time === max || options.bounds === 'ticks') {
      addTick(timestamps, ticks, time);
    }
  } else {
    for (time = first; time < max; time = +adapter.add(time, stepSize, minor)) {
      ticks.add(time);
    }
    if (time === max || options.bounds === 'ticks') {
      ticks.add(time);
    }
  }
  return [...ticks];
}
function computeOffsets(table, timestamps, min, max, options) {
  var start = 0;
  var end = 0;
  var first, last;
  if (options.offset && timestamps.length) {
    first = interpolate(table, 'time', timestamps[0], 'pos');
    if (timestamps.length === 1) {
      start = 1 - first;
    } else {
      start = (interpolate(table, 'time', timestamps[1], 'pos') - first) / 2;
    }
    last = interpolate(table, 'time', timestamps[timestamps.length - 1], 'pos');
    if (timestamps.length === 1) {
      end = last;
    } else {
      end = (last - interpolate(table, 'time', timestamps[timestamps.length - 2], 'pos')) / 2;
    }
  }
  return {
    start,
    end,
    factor: 1 / (start + 1 + end)
  };
}
function setMajorTicks(scale, ticks, map, majorUnit) {
  var adapter = scale._adapter;
  var first = +adapter.startOf(ticks[0].value, majorUnit);
  var last = ticks[ticks.length - 1].value;
  var major, index;
  for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
    index = map[major];
    if (index >= 0) {
      ticks[index].major = true;
    }
  }
  return ticks;
}
function ticksFromTimestamps(scale, values, majorUnit) {
  var ticks = [];
  var map = {};
  var ilen = values.length;
  var i, value;
  for (i = 0; i < ilen; ++i) {
    value = values[i];
    map[value] = i;
    ticks.push({
      value,
      major: false
    });
  }
  return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
function getTimestampsForTicks(scale) {
  if (scale.options.ticks.source === 'labels') {
    return getLabelTimestamps(scale);
  }
  return generate(scale);
}
function getTimestampsForTable(scale) {
  return scale.options.distribution === 'series' ? getAllTimestamps(scale) : [scale.min, scale.max];
}
function getLabelBounds(scale) {
  var arr = getLabelTimestamps(scale);
  var min = Number.POSITIVE_INFINITY;
  var max = Number.NEGATIVE_INFINITY;
  if (arr.length) {
    min = arr[0];
    max = arr[arr.length - 1];
  }
  return {
    min,
    max
  };
}
function filterBetween(timestamps, min, max) {
  var start = 0;
  var end = timestamps.length - 1;
  while (start < end && timestamps[start] < min) {
    start++;
  }
  while (end > start && timestamps[end] > max) {
    end--;
  }
  end++;
  return start > 0 || end < timestamps.length ? timestamps.slice(start, end) : timestamps;
}
var defaultConfig$4 = {
  distribution: 'linear',
  bounds: 'data',
  adapters: {},
  time: {
    parser: false,
    unit: false,
    round: false,
    isoWeekday: false,
    minUnit: 'millisecond',
    displayFormats: {}
  },
  ticks: {
    autoSkip: false,
    source: 'auto',
    major: {
      enabled: false
    }
  }
};
class TimeScale extends Scale {
  constructor(props) {
    super(props);
    var options = this.options;
    var time = options.time || (options.time = {});
    var adapter = this._adapter = new _adapters._date(options.adapters.date);
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
    this._unit = 'day';
    this._majorUnit = undefined;
    this._offsets = {};
    this._table = [];
    mergeIf(time.displayFormats, adapter.formats());
  }
  parse(raw, index) {
    if (raw === undefined) {
      return NaN;
    }
    return parse(this, raw);
  }
  parseObject(obj, axis, index) {
    if (obj && obj.t) {
      return this.parse(obj.t, index);
    }
    if (obj[axis] !== undefined) {
      return this.parse(obj[axis], index);
    }
    return null;
  }
  invalidateCaches() {
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    var me = this;
    var options = me.options;
    var adapter = me._adapter;
    var unit = options.time.unit || 'day';
    var {
      min,
      max,
      minDefined,
      maxDefined
    } = me.getUserBounds();
    function _applyBounds(bounds) {
      if (!minDefined && !isNaN(bounds.min)) {
        min = Math.min(min, bounds.min);
      }
      if (!maxDefined && !isNaN(bounds.max)) {
        max = Math.max(max, bounds.max);
      }
    }
    if (!minDefined || !maxDefined) {
      _applyBounds(getLabelBounds(me));
      if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
        _applyBounds(me.getMinMax(false));
      }
    }
    min = isNumberFinite(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
    max = isNumberFinite(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
    me.min = Math.min(min, max);
    me.max = Math.max(min + 1, max);
  }
  buildTicks() {
    var me = this;
    var options = me.options;
    var timeOpts = options.time;
    var tickOpts = options.ticks;
    var distribution = options.distribution;
    var timestamps = getTimestampsForTicks(me);
    if (options.bounds === 'ticks' && timestamps.length) {
      me.min = me._userMin || timestamps[0];
      me.max = me._userMax || timestamps[timestamps.length - 1];
    }
    var min = me.min;
    var max = me.max;
    var ticks = filterBetween(timestamps, min, max);
    me._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, me.min, me.max, me._getLabelCapacity(min)) : determineUnitForFormatting(me, ticks.length, timeOpts.minUnit, me.min, me.max));
    me._majorUnit = !tickOpts.major.enabled || me._unit === 'year' ? undefined : determineMajorUnit(me._unit);
    me._table = buildLookupTable(getTimestampsForTable(me), min, max, distribution);
    me._offsets = computeOffsets(me._table, getDataTimestamps(me), min, max, options);
    if (options.reverse) {
      ticks.reverse();
    }
    return ticksFromTimestamps(me, ticks, me._majorUnit);
  }
  getLabelForValue(value) {
    var me = this;
    var adapter = me._adapter;
    var timeOpts = me.options.time;
    if (timeOpts.tooltipFormat) {
      return adapter.format(value, timeOpts.tooltipFormat);
    }
    return adapter.format(value, timeOpts.displayFormats.datetime);
  }
  _tickFormatFunction(time, index, ticks, format) {
    var me = this;
    var options = me.options;
    var formats = options.time.displayFormats;
    var unit = me._unit;
    var majorUnit = me._majorUnit;
    var minorFormat = unit && formats[unit];
    var majorFormat = majorUnit && formats[majorUnit];
    var tick = ticks[index];
    var major = majorUnit && majorFormat && tick && tick.major;
    var label = me._adapter.format(time, format || (major ? majorFormat : minorFormat));
    var formatter = options.ticks.callback;
    return formatter ? formatter(label, index, ticks) : label;
  }
  generateTickLabels(ticks) {
    var i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      tick.label = this._tickFormatFunction(tick.value, i, ticks);
    }
  }
  getPixelForValue(value) {
    var me = this;
    var offsets = me._offsets;
    var pos = interpolate(me._table, 'time', value, 'pos');
    return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
  }
  getPixelForTick(index) {
    var ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  }
  getValueForPixel(pixel) {
    var me = this;
    var offsets = me._offsets;
    var pos = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return interpolate(me._table, 'pos', pos, 'time');
  }
  _getLabelSize(label) {
    var me = this;
    var ticksOpts = me.options.ticks;
    var tickLabelWidth = me.ctx.measureText(label).width;
    var angle = toRadians(me.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
    var cosRotation = Math.cos(angle);
    var sinRotation = Math.sin(angle);
    var tickFontSize = valueOrDefault(ticksOpts.fontSize, defaults.fontSize);
    return {
      w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
      h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
    };
  }
  _getLabelCapacity(exampleTime) {
    var me = this;
    var timeOpts = me.options.time;
    var displayFormats = timeOpts.displayFormats;
    var format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
    var exampleLabel = me._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(me, [exampleTime], me._majorUnit), format);
    var size = me._getLabelSize(exampleLabel);
    var capacity = Math.floor(me.isHorizontal() ? me.width / size.w : me.height / size.h) - 1;
    return capacity > 0 ? capacity : 1;
  }
}
_defineProperty(TimeScale, "id", 'time');
_defineProperty(TimeScale, "defaults", defaultConfig$4);



var scales = /*#__PURE__*/Object.freeze({
__proto__: null,
CategoryScale: CategoryScale,
LinearScale: LinearScale,
LogarithmicScale: LogarithmicScale,
RadialLinearScale: RadialLinearScale,
TimeScale: TimeScale
});

defaults.set('plugins', {
  filler: {
    propagate: true
  }
});
function getLineByIndex(chart, index) {
  var meta = chart.getDatasetMeta(index);
  var visible = meta && chart.isDatasetVisible(index);
  return visible ? meta.dataset : null;
}
function parseFillOption(line) {
  var options = line.options;
  var fillOption = options.fill;
  var fill = valueOrDefault(fillOption && fillOption.target, fillOption);
  if (fill === undefined) {
    fill = !!options.backgroundColor;
  }
  if (fill === false || fill === null) {
    return false;
  }
  if (fill === true) {
    return 'origin';
  }
  return fill;
}
function decodeFill(line, index, count) {
  var fill = parseFillOption(line);
  var target = parseFloat(fill);
  if (isNumberFinite(target) && Math.floor(target) === target) {
    if (fill[0] === '-' || fill[0] === '+') {
      target = index + target;
    }
    if (target === index || target < 0 || target >= count) {
      return false;
    }
    return target;
  }
  return ['origin', 'start', 'end'].indexOf(fill) >= 0 ? fill : false;
}
function computeLinearBoundary(source) {
  var {
    scale = {},
    fill
  } = source;
  var target = null;
  var horizontal;
  if (fill === 'start') {
    target = scale.bottom;
  } else if (fill === 'end') {
    target = scale.top;
  } else if (scale.getBasePixel) {
    target = scale.getBasePixel();
  }
  if (isNumberFinite(target)) {
    horizontal = scale.isHorizontal();
    return {
      x: horizontal ? target : null,
      y: horizontal ? null : target
    };
  }
  return null;
}
class simpleArc {
  constructor(opts) {
    this.x = opts.x;
    this.y = opts.y;
    this.radius = opts.radius;
  }
  pathSegment(ctx, bounds, opts) {
    var {
      x,
      y,
      radius
    } = this;
    bounds = bounds || {
      start: 0,
      end: Math.PI * 2
    };
    if (opts.reverse) {
      ctx.arc(x, y, radius, bounds.end, bounds.start, true);
    } else {
      ctx.arc(x, y, radius, bounds.start, bounds.end);
    }
    return !opts.bounds;
  }
  interpolate(point, property) {
    var {
      x,
      y,
      radius
    } = this;
    var angle = point.angle;
    if (property === 'angle') {
      return {
        x: x + Math.cos(angle) * radius,
        y: y + Math.sin(angle) * radius,
        angle
      };
    }
  }
}
function computeCircularBoundary(source) {
  var {
    scale,
    fill
  } = source;
  var options = scale.options;
  var length = scale.getLabels().length;
  var target = [];
  var start = options.reverse ? scale.max : scale.min;
  var end = options.reverse ? scale.min : scale.max;
  var value = fill === 'start' ? start : fill === 'end' ? end : scale.getBaseValue();
  var i, center;
  if (options.gridLines.circular) {
    center = scale.getPointPositionForValue(0, start);
    return new simpleArc({
      x: center.x,
      y: center.y,
      radius: scale.getDistanceFromCenterForValue(value)
    });
  }
  for (i = 0; i < length; ++i) {
    target.push(scale.getPointPositionForValue(i, value));
  }
  return target;
}
function computeBoundary(source) {
  var scale = source.scale || {};
  if (scale.getPointPositionForValue) {
    return computeCircularBoundary(source);
  }
  return computeLinearBoundary(source);
}
function pointsFromSegments(boundary, line) {
  var {
    x = null,
    y = null
  } = boundary || {};
  var linePoints = line.points;
  var points = [];
  line.segments.forEach(segment => {
    var first = linePoints[segment.start];
    var last = linePoints[segment.end];
    if (y !== null) {
      points.push({
        x: first.x,
        y,
        _prop: 'x',
        _ref: first
      });
      points.push({
        x: last.x,
        y,
        _prop: 'x',
        _ref: last
      });
    } else if (x !== null) {
      points.push({
        x,
        y: first.y,
        _prop: 'y',
        _ref: first
      });
      points.push({
        x,
        y: last.y,
        _prop: 'y',
        _ref: last
      });
    }
  });
  return points;
}
function getTarget(source) {
  var {
    chart,
    fill,
    line
  } = source;
  if (isNumberFinite(fill)) {
    return getLineByIndex(chart, fill);
  }
  var boundary = computeBoundary(source);
  var points = [];
  var _loop = false;
  var _refPoints = false;
  if (boundary instanceof simpleArc) {
    return boundary;
  }
  if (isArray(boundary)) {
    _loop = true;
    points = boundary;
  } else {
    points = pointsFromSegments(boundary, line);
    _refPoints = true;
  }
  return points.length ? new Line({
    points,
    options: {
      tension: 0
    },
    _loop,
    _fullLoop: _loop,
    _refPoints
  }) : null;
}
function resolveTarget(sources, index, propagate) {
  var source = sources[index];
  var fill = source.fill;
  var visited = [index];
  var target;
  if (!propagate) {
    return fill;
  }
  while (fill !== false && visited.indexOf(fill) === -1) {
    if (!isNumberFinite(fill)) {
      return fill;
    }
    target = sources[fill];
    if (!target) {
      return false;
    }
    if (target.visible) {
      return fill;
    }
    visited.push(fill);
    fill = target.fill;
  }
  return false;
}
function _clip(ctx, target, clipY) {
  ctx.beginPath();
  target.path(ctx);
  ctx.lineTo(target.last().x, clipY);
  ctx.lineTo(target.first().x, clipY);
  ctx.closePath();
  ctx.clip();
}
function getBounds(property, first, last, loop) {
  if (loop) {
    return;
  }
  var start = first[property];
  var end = last[property];
  if (property === 'angle') {
    start = _normalizeAngle(start);
    end = _normalizeAngle(end);
  }
  return {
    property,
    start,
    end
  };
}
function _getEdge(a, b, prop, fn) {
  if (a && b) {
    return fn(a[prop], b[prop]);
  }
  return a ? a[prop] : b ? b[prop] : 0;
}
function _segments(line, target, property) {
  var segments = line.segments;
  var points = line.points;
  var tpoints = target.points;
  var parts = [];
  if (target._refPoints) {
    for (var i = 0, ilen = tpoints.length; i < ilen; ++i) {
      var point = tpoints[i];
      var prop = point._prop;
      if (prop) {
        point[prop] = point._ref[prop];
      }
    }
  }
  for (var _i = 0; _i < segments.length; _i++) {
    var segment = segments[_i];
    var bounds = getBounds(property, points[segment.start], points[segment.end], segment.loop);
    if (!target.segments) {
      parts.push({
        source: segment,
        target: bounds,
        start: points[segment.start],
        end: points[segment.end]
      });
      continue;
    }
    var subs = _boundSegments(target, bounds);
    for (var j = 0; j < subs.length; ++j) {
      var sub = subs[j];
      var subBounds = getBounds(property, tpoints[sub.start], tpoints[sub.end], sub.loop);
      var fillSources = _boundSegment(segment, points, subBounds);
      for (var k = 0; k < fillSources.length; k++) {
        parts.push({
          source: fillSources[k],
          target: sub,
          start: {
            [property]: _getEdge(bounds, subBounds, 'start', Math.max)
          },
          end: {
            [property]: _getEdge(bounds, subBounds, 'end', Math.min)
          }
        });
      }
    }
  }
  return parts;
}
function clipBounds(ctx, scale, bounds) {
  var {
    top,
    bottom
  } = scale.chart.chartArea;
  var {
    property,
    start,
    end
  } = bounds || {};
  if (property === 'x') {
    ctx.beginPath();
    ctx.rect(start, top, end - start, bottom - top);
    ctx.clip();
  }
}
function interpolatedLineTo(ctx, target, point, property) {
  var interpolatedPoint = target.interpolate(point, property);
  if (interpolatedPoint) {
    ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
  }
}
function _fill(ctx, cfg) {
  var {
    line,
    target,
    property,
    color,
    scale
  } = cfg;
  var segments = _segments(cfg.line, cfg.target, property);
  ctx.fillStyle = color;
  for (var i = 0, ilen = segments.length; i < ilen; ++i) {
    var {
      source: src,
      target: tgt,
      start,
      end
    } = segments[i];
    ctx.save();
    clipBounds(ctx, scale, getBounds(property, start, end));
    ctx.beginPath();
    var lineLoop = !!line.pathSegment(ctx, src);
    if (lineLoop) {
      ctx.closePath();
    } else {
      interpolatedLineTo(ctx, target, end, property);
    }
    var targetLoop = !!target.pathSegment(ctx, tgt, {
      move: lineLoop,
      reverse: true
    });
    var loop = lineLoop && targetLoop;
    if (!loop) {
      interpolatedLineTo(ctx, target, start, property);
    }
    ctx.closePath();
    ctx.fill(loop ? 'evenodd' : 'nonzero');
    ctx.restore();
  }
}
function doFill(ctx, cfg) {
  var {
    line,
    target,
    above,
    below,
    area,
    scale
  } = cfg;
  var property = line._loop ? 'angle' : 'x';
  ctx.save();
  if (property === 'x' && below !== above) {
    _clip(ctx, target, area.top);
    _fill(ctx, {
      line,
      target,
      color: above,
      scale,
      property
    });
    ctx.restore();
    ctx.save();
    _clip(ctx, target, area.bottom);
  }
  _fill(ctx, {
    line,
    target,
    color: below,
    scale,
    property
  });
  ctx.restore();
}
var filler = {
  id: 'filler',
  afterDatasetsUpdate(chart, options) {
    var count = (chart.data.datasets || []).length;
    var propagate = options.propagate;
    var sources = [];
    var meta, i, line, source;
    for (i = 0; i < count; ++i) {
      meta = chart.getDatasetMeta(i);
      line = meta.dataset;
      source = null;
      if (line && line.options && line instanceof Line) {
        source = {
          visible: chart.isDatasetVisible(i),
          fill: decodeFill(line, i, count),
          chart,
          scale: meta.vScale,
          line,
          target: undefined
        };
      }
      meta.$filler = source;
      sources.push(source);
    }
    for (i = 0; i < count; ++i) {
      source = sources[i];
      if (!source || source.fill === false) {
        continue;
      }
      source.fill = resolveTarget(sources, i, propagate);
      source.target = source.fill !== false && getTarget(source);
    }
  },
  beforeDatasetsDraw(chart) {
    var metasets = chart.getSortedVisibleDatasetMetas();
    var area = chart.chartArea;
    var i, meta;
    for (i = metasets.length - 1; i >= 0; --i) {
      meta = metasets[i].$filler;
      if (meta) {
        meta.line.updateControlPoints(area);
      }
    }
  },
  beforeDatasetDraw(chart, args) {
    var area = chart.chartArea;
    var ctx = chart.ctx;
    var meta = args.meta.$filler;
    if (!meta || meta.fill === false) {
      return;
    }
    var {
      line,
      target,
      scale
    } = meta;
    var lineOpts = line.options;
    var fillOption = lineOpts.fill;
    var color = lineOpts.backgroundColor || defaults.color;
    var {
      above = color,
      below = color
    } = fillOption || {};
    if (target && line.points.length) {
      clipArea(ctx, area);
      doFill(ctx, {
        line,
        target,
        above,
        below,
        area,
        scale
      });
      unclipArea(ctx);
    }
  }
};

defaults.set('legend', {
  display: true,
  position: 'top',
  align: 'center',
  fullWidth: true,
  reverse: false,
  weight: 1000,
  onClick(e, legendItem) {
    var index = legendItem.datasetIndex;
    var ci = this.chart;
    if (ci.isDatasetVisible(index)) {
      ci.hide(index);
      legendItem.hidden = true;
    } else {
      ci.show(index);
      legendItem.hidden = false;
    }
  },
  onHover: null,
  onLeave: null,
  labels: {
    boxWidth: 40,
    padding: 10,
    generateLabels(chart) {
      var datasets = chart.data.datasets;
      var options = chart.options.legend || {};
      var usePointStyle = options.labels && options.labels.usePointStyle;
      return chart._getSortedDatasetMetas().map(meta => {
        var style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
        return {
          text: datasets[meta.index].label,
          fillStyle: style.backgroundColor,
          hidden: !meta.visible,
          lineCap: style.borderCapStyle,
          lineDash: style.borderDash,
          lineDashOffset: style.borderDashOffset,
          lineJoin: style.borderJoinStyle,
          lineWidth: style.borderWidth,
          strokeStyle: style.borderColor,
          pointStyle: style.pointStyle,
          rotation: style.rotation,
          datasetIndex: meta.index
        };
      }, this);
    }
  },
  title: {
    display: false,
    position: 'center',
    text: ''
  }
});
function getBoxWidth(labelOpts, fontSize) {
  return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ? fontSize : labelOpts.boxWidth;
}
class Legend extends Element$1 {
  constructor(config) {
    super();
    _extends(this, config);
    this.legendHitBoxes = [];
    this._hoveredItem = null;
    this.doughnutMode = false;
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this.legendItems = undefined;
    this.columnWidths = undefined;
    this.columnHeights = undefined;
    this.lineWidths = undefined;
    this._minSize = undefined;
    this.maxHeight = undefined;
    this.maxWidth = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.height = undefined;
    this.width = undefined;
    this._margins = undefined;
    this.paddingTop = undefined;
    this.paddingBottom = undefined;
    this.paddingLeft = undefined;
    this.paddingRight = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullWidth = undefined;
  }
  beforeUpdate() {}
  update(maxWidth, maxHeight, margins) {
    var me = this;
    me.beforeUpdate();
    me.maxWidth = maxWidth;
    me.maxHeight = maxHeight;
    me._margins = margins;
    me.beforeSetDimensions();
    me.setDimensions();
    me.afterSetDimensions();
    me.beforeBuildLabels();
    me.buildLabels();
    me.afterBuildLabels();
    me.beforeFit();
    me.fit();
    me.afterFit();
    me.afterUpdate();
  }
  afterUpdate() {}
  beforeSetDimensions() {}
  setDimensions() {
    var me = this;
    if (me.isHorizontal()) {
      me.width = me.maxWidth;
      me.left = 0;
      me.right = me.width;
    } else {
      me.height = me.maxHeight;
      me.top = 0;
      me.bottom = me.height;
    }
    me.paddingLeft = 0;
    me.paddingTop = 0;
    me.paddingRight = 0;
    me.paddingBottom = 0;
    me._minSize = {
      width: 0,
      height: 0
    };
  }
  afterSetDimensions() {}
  beforeBuildLabels() {}
  buildLabels() {
    var me = this;
    var labelOpts = me.options.labels || {};
    var legendItems = callback(labelOpts.generateLabels, [me.chart], me) || [];
    if (labelOpts.filter) {
      legendItems = legendItems.filter(item => labelOpts.filter(item, me.chart.data));
    }
    if (me.options.reverse) {
      legendItems.reverse();
    }
    me.legendItems = legendItems;
  }
  afterBuildLabels() {}
  beforeFit() {}
  fit() {
    var me = this;
    var opts = me.options;
    var labelOpts = opts.labels;
    var display = opts.display;
    var ctx = me.ctx;
    var labelFont = _parseFont(labelOpts);
    var fontSize = labelFont.size;
    var hitboxes = me.legendHitBoxes = [];
    var minSize = me._minSize;
    var isHorizontal = me.isHorizontal();
    var titleHeight = me._computeTitleHeight();
    if (isHorizontal) {
      minSize.width = me.maxWidth;
      minSize.height = display ? 10 : 0;
    } else {
      minSize.width = display ? 10 : 0;
      minSize.height = me.maxHeight;
    }
    if (!display) {
      me.width = minSize.width = me.height = minSize.height = 0;
      return;
    }
    ctx.font = labelFont.string;
    if (isHorizontal) {
      var lineWidths = me.lineWidths = [0];
      var totalHeight = titleHeight;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      me.legendItems.forEach((legendItem, i) => {
        var boxWidth = getBoxWidth(labelOpts, fontSize);
        var width = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
        if (i === 0 || lineWidths[lineWidths.length - 1] + width + 2 * labelOpts.padding > minSize.width) {
          totalHeight += fontSize + labelOpts.padding;
          lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
        }
        hitboxes[i] = {
          left: 0,
          top: 0,
          width,
          height: fontSize
        };
        lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
      });
      minSize.height += totalHeight;
    } else {
      var vPadding = labelOpts.padding;
      var columnWidths = me.columnWidths = [];
      var columnHeights = me.columnHeights = [];
      var totalWidth = labelOpts.padding;
      var currentColWidth = 0;
      var currentColHeight = 0;
      var heightLimit = minSize.height - titleHeight;
      me.legendItems.forEach((legendItem, i) => {
        var boxWidth = getBoxWidth(labelOpts, fontSize);
        var itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
        if (i > 0 && currentColHeight + fontSize + 2 * vPadding > heightLimit) {
          totalWidth += currentColWidth + labelOpts.padding;
          columnWidths.push(currentColWidth);
          columnHeights.push(currentColHeight);
          currentColWidth = 0;
          currentColHeight = 0;
        }
        currentColWidth = Math.max(currentColWidth, itemWidth);
        currentColHeight += fontSize + vPadding;
        hitboxes[i] = {
          left: 0,
          top: 0,
          width: itemWidth,
          height: fontSize
        };
      });
      totalWidth += currentColWidth;
      columnWidths.push(currentColWidth);
      columnHeights.push(currentColHeight);
      minSize.width += totalWidth;
    }
    me.width = minSize.width;
    me.height = minSize.height;
  }
  afterFit() {}
  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom';
  }
  draw() {
    var me = this;
    var opts = me.options;
    var labelOpts = opts.labels;
    var defaultColor = defaults.color;
    var lineDefault = defaults.elements.line;
    var legendHeight = me.height;
    var columnHeights = me.columnHeights;
    var legendWidth = me.width;
    var lineWidths = me.lineWidths;
    if (!opts.display) {
      return;
    }
    me.drawTitle();
    var rtlHelper = getRtlAdapter(opts.rtl, me.left, me._minSize.width);
    var ctx = me.ctx;
    var fontColor = valueOrDefault(labelOpts.fontColor, defaults.fontColor);
    var labelFont = _parseFont(labelOpts);
    var fontSize = labelFont.size;
    var cursor;
    ctx.textAlign = rtlHelper.textAlign('left');
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = fontColor;
    ctx.fillStyle = fontColor;
    ctx.font = labelFont.string;
    var boxWidth = getBoxWidth(labelOpts, fontSize);
    var hitboxes = me.legendHitBoxes;
    var drawLegendBox = function drawLegendBox(x, y, legendItem) {
      if (isNaN(boxWidth) || boxWidth <= 0) {
        return;
      }
      ctx.save();
      var lineWidth = valueOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
      ctx.fillStyle = valueOrDefault(legendItem.fillStyle, defaultColor);
      ctx.lineCap = valueOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
      ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
      ctx.lineJoin = valueOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, defaultColor);
      if (ctx.setLineDash) {
        ctx.setLineDash(valueOrDefault(legendItem.lineDash, lineDefault.borderDash));
      }
      if (labelOpts && labelOpts.usePointStyle) {
        var drawOptions = {
          radius: boxWidth * Math.SQRT2 / 2,
          pointStyle: legendItem.pointStyle,
          rotation: legendItem.rotation,
          borderWidth: lineWidth
        };
        var centerX = rtlHelper.xPlus(x, boxWidth / 2);
        var centerY = y + fontSize / 2;
        drawPoint(ctx, drawOptions, centerX, centerY);
      } else {
        ctx.fillRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
        if (lineWidth !== 0) {
          ctx.strokeRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
        }
      }
      ctx.restore();
    };
    var fillText = function fillText(x, y, legendItem, textWidth) {
      var halfFontSize = fontSize / 2;
      var xLeft = rtlHelper.xPlus(x, boxWidth + halfFontSize);
      var yMiddle = y + halfFontSize;
      ctx.fillText(legendItem.text, xLeft, yMiddle);
      if (legendItem.hidden) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(xLeft, yMiddle);
        ctx.lineTo(rtlHelper.xPlus(xLeft, textWidth), yMiddle);
        ctx.stroke();
      }
    };
    var alignmentOffset = function alignmentOffset(dimension, blockSize) {
      switch (opts.align) {
        case 'start':
          return labelOpts.padding;
        case 'end':
          return dimension - blockSize;
        default:
          return (dimension - blockSize + labelOpts.padding) / 2;
      }
    };
    var isHorizontal = me.isHorizontal();
    var titleHeight = this._computeTitleHeight();
    if (isHorizontal) {
      cursor = {
        x: me.left + alignmentOffset(legendWidth, lineWidths[0]),
        y: me.top + labelOpts.padding + titleHeight,
        line: 0
      };
    } else {
      cursor = {
        x: me.left + labelOpts.padding,
        y: me.top + alignmentOffset(legendHeight, columnHeights[0]) + titleHeight,
        line: 0
      };
    }
    overrideTextDirection(me.ctx, opts.textDirection);
    var itemHeight = fontSize + labelOpts.padding;
    me.legendItems.forEach((legendItem, i) => {
      var textWidth = ctx.measureText(legendItem.text).width;
      var width = boxWidth + fontSize / 2 + textWidth;
      var x = cursor.x;
      var y = cursor.y;
      rtlHelper.setWidth(me._minSize.width);
      if (isHorizontal) {
        if (i > 0 && x + width + labelOpts.padding > me.left + me._minSize.width) {
          y = cursor.y += itemHeight;
          cursor.line++;
          x = cursor.x = me.left + alignmentOffset(legendWidth, lineWidths[cursor.line]);
        }
      } else if (i > 0 && y + itemHeight > me.top + me._minSize.height) {
        x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
        cursor.line++;
        y = cursor.y = me.top + alignmentOffset(legendHeight, columnHeights[cursor.line]);
      }
      var realX = rtlHelper.x(x);
      drawLegendBox(realX, y, legendItem);
      hitboxes[i].left = rtlHelper.leftForLtr(realX, hitboxes[i].width);
      hitboxes[i].top = y;
      fillText(realX, y, legendItem, textWidth);
      if (isHorizontal) {
        cursor.x += width + labelOpts.padding;
      } else {
        cursor.y += itemHeight;
      }
    });
    restoreTextDirection(me.ctx, opts.textDirection);
  }
  drawTitle() {
    var me = this;
    var opts = me.options;
    var titleOpts = opts.title;
    var titleFont = _parseFont(titleOpts);
    var titlePadding = toPadding(titleOpts.padding);
    if (!titleOpts.display) {
      return;
    }
    var rtlHelper = getRtlAdapter(opts.rtl, me.left, me._minSize.width);
    var ctx = me.ctx;
    var fontColor = valueOrDefault(titleOpts.fontColor, defaults.fontColor);
    var position = titleOpts.position;
    var x, textAlign;
    var halfFontSize = titleFont.size / 2;
    var y = me.top + titlePadding.top + halfFontSize;
    var left = me.left;
    var maxWidth = me.width;
    if (this.isHorizontal()) {
      maxWidth = Math.max(...me.lineWidths);
      switch (opts.align) {
        case 'start':
          break;
        case 'end':
          left = me.right - maxWidth;
          break;
        default:
          left = (me.left + me.right) / 2 - maxWidth / 2;
          break;
      }
    } else {
      var maxHeight = Math.max(...me.columnHeights);
      switch (opts.align) {
        case 'start':
          break;
        case 'end':
          y += me.height - maxHeight;
          break;
        default:
          y += (me.height - maxHeight) / 2;
          break;
      }
    }
    switch (position) {
      case 'start':
        x = left;
        textAlign = 'left';
        break;
      case 'end':
        x = left + maxWidth;
        textAlign = 'right';
        break;
      default:
        x = left + maxWidth / 2;
        textAlign = 'center';
        break;
    }
    ctx.textAlign = rtlHelper.textAlign(textAlign);
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = fontColor;
    ctx.fillStyle = fontColor;
    ctx.font = titleFont.string;
    ctx.fillText(titleOpts.text, x, y);
  }
  _computeTitleHeight() {
    var titleOpts = this.options.title;
    var titleFont = _parseFont(titleOpts);
    var titlePadding = toPadding(titleOpts.padding);
    return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
  }
  _getLegendItemAt(x, y) {
    var me = this;
    var i, hitBox, lh;
    if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
      lh = me.legendHitBoxes;
      for (i = 0; i < lh.length; ++i) {
        hitBox = lh[i];
        if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
          return me.legendItems[i];
        }
      }
    }
    return null;
  }
  handleEvent(e) {
    var me = this;
    var opts = me.options;
    var type = e.type === 'mouseup' ? 'click' : e.type;
    if (type === 'mousemove') {
      if (!opts.onHover && !opts.onLeave) {
        return;
      }
    } else if (type === 'click') {
      if (!opts.onClick) {
        return;
      }
    } else {
      return;
    }
    var hoveredItem = me._getLegendItemAt(e.x, e.y);
    if (type === 'click') {
      if (hoveredItem && opts.onClick) {
        opts.onClick.call(me, e.native, hoveredItem);
      }
    } else {
      if (opts.onLeave && hoveredItem !== me._hoveredItem) {
        if (me._hoveredItem) {
          opts.onLeave.call(me, e.native, me._hoveredItem);
        }
        me._hoveredItem = hoveredItem;
      }
      if (opts.onHover && hoveredItem) {
        opts.onHover.call(me, e.native, hoveredItem);
      }
    }
  }
}
function createNewLegendAndAttach(chart, legendOpts) {
  var legend = new Legend({
    ctx: chart.ctx,
    options: legendOpts,
    chart
  });
  layouts.configure(chart, legend, legendOpts);
  layouts.addBox(chart, legend);
  chart.legend = legend;
}
var legend = {
  id: 'legend',
  _element: Legend,
  beforeInit(chart) {
    var legendOpts = chart.options.legend;
    if (legendOpts) {
      createNewLegendAndAttach(chart, legendOpts);
    }
  },
  afterUpdate(chart) {
    var legendOpts = chart.options.legend;
    var legend = chart.legend;
    if (legendOpts) {
      mergeIf(legendOpts, defaults.legend);
      if (legend) {
        layouts.configure(chart, legend, legendOpts);
        legend.options = legendOpts;
        legend.buildLabels();
      } else {
        createNewLegendAndAttach(chart, legendOpts);
      }
    } else if (legend) {
      layouts.removeBox(chart, legend);
      delete chart.legend;
    }
  },
  afterEvent(chart, e) {
    var legend = chart.legend;
    if (legend) {
      legend.handleEvent(e);
    }
  }
};

defaults.set('title', {
  align: 'center',
  display: false,
  fontStyle: 'bold',
  fullWidth: true,
  padding: 10,
  position: 'top',
  text: '',
  weight: 2000
});
class Title extends Element$1 {
  constructor(config) {
    super();
    _extends(this, config);
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this._margins = undefined;
    this._padding = undefined;
    this.legendHitBoxes = [];
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this.maxWidth = undefined;
    this.maxHeight = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullWidth = undefined;
  }
  beforeUpdate() {}
  update(maxWidth, maxHeight, margins) {
    var me = this;
    me.beforeUpdate();
    me.maxWidth = maxWidth;
    me.maxHeight = maxHeight;
    me._margins = margins;
    me.beforeSetDimensions();
    me.setDimensions();
    me.afterSetDimensions();
    me.beforeBuildLabels();
    me.buildLabels();
    me.afterBuildLabels();
    me.beforeFit();
    me.fit();
    me.afterFit();
    me.afterUpdate();
  }
  afterUpdate() {}
  beforeSetDimensions() {}
  setDimensions() {
    var me = this;
    if (me.isHorizontal()) {
      me.width = me.maxWidth;
      me.left = 0;
      me.right = me.width;
    } else {
      me.height = me.maxHeight;
      me.top = 0;
      me.bottom = me.height;
    }
  }
  afterSetDimensions() {}
  beforeBuildLabels() {}
  buildLabels() {}
  afterBuildLabels() {}
  beforeFit() {}
  fit() {
    var me = this;
    var opts = me.options;
    var minSize = {};
    var isHorizontal = me.isHorizontal();
    if (!opts.display) {
      me.width = minSize.width = me.height = minSize.height = 0;
      return;
    }
    var lineCount = helpers.isArray(opts.text) ? opts.text.length : 1;
    me._padding = helpers.options.toPadding(opts.padding);
    var textSize = lineCount * helpers.options._parseFont(opts).lineHeight + me._padding.height;
    me.width = minSize.width = isHorizontal ? me.maxWidth : textSize;
    me.height = minSize.height = isHorizontal ? textSize : me.maxHeight;
  }
  afterFit() {}
  isHorizontal() {
    var pos = this.options.position;
    return pos === 'top' || pos === 'bottom';
  }
  draw() {
    var me = this;
    var ctx = me.ctx;
    var opts = me.options;
    if (!opts.display) {
      return;
    }
    var fontOpts = helpers.options._parseFont(opts);
    var lineHeight = fontOpts.lineHeight;
    var offset = lineHeight / 2 + me._padding.top;
    var rotation = 0;
    var top = me.top;
    var left = me.left;
    var bottom = me.bottom;
    var right = me.right;
    var maxWidth, titleX, titleY;
    var align;
    if (me.isHorizontal()) {
      switch (opts.align) {
        case 'start':
          titleX = left;
          align = 'left';
          break;
        case 'end':
          titleX = right;
          align = 'right';
          break;
        default:
          titleX = left + (right - left) / 2;
          align = 'center';
          break;
      }
      titleY = top + offset;
      maxWidth = right - left;
    } else {
      titleX = opts.position === 'left' ? left + offset : right - offset;
      switch (opts.align) {
        case 'start':
          titleY = opts.position === 'left' ? bottom : top;
          align = 'left';
          break;
        case 'end':
          titleY = opts.position === 'left' ? top : bottom;
          align = 'right';
          break;
        default:
          titleY = top + (bottom - top) / 2;
          align = 'center';
          break;
      }
      maxWidth = bottom - top;
      rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
    }
    ctx.save();
    ctx.fillStyle = helpers.valueOrDefault(opts.fontColor, defaults.fontColor);
    ctx.font = fontOpts.string;
    ctx.translate(titleX, titleY);
    ctx.rotate(rotation);
    ctx.textAlign = align;
    ctx.textBaseline = 'middle';
    var text = opts.text;
    if (helpers.isArray(text)) {
      var y = 0;
      for (var i = 0; i < text.length; ++i) {
        ctx.fillText(text[i], 0, y, maxWidth);
        y += lineHeight;
      }
    } else {
      ctx.fillText(text, 0, 0, maxWidth);
    }
    ctx.restore();
  }
}
function createNewTitleBlockAndAttach(chart, titleOpts) {
  var title = new Title({
    ctx: chart.ctx,
    options: titleOpts,
    chart
  });
  layouts.configure(chart, title, titleOpts);
  layouts.addBox(chart, title);
  chart.titleBlock = title;
}
var title = {
  id: 'title',
  _element: Title,
  beforeInit(chart) {
    var titleOpts = chart.options.title;
    if (titleOpts) {
      createNewTitleBlockAndAttach(chart, titleOpts);
    }
  },
  beforeUpdate(chart) {
    var titleOpts = chart.options.title;
    var titleBlock = chart.titleBlock;
    if (titleOpts) {
      helpers.mergeIf(titleOpts, defaults.title);
      if (titleBlock) {
        layouts.configure(chart, titleBlock, titleOpts);
        titleBlock.options = titleOpts;
      } else {
        createNewTitleBlockAndAttach(chart, titleOpts);
      }
    } else if (titleBlock) {
      layouts.removeBox(chart, titleBlock);
      delete chart.titleBlock;
    }
  }
};

var valueOrDefault$3 = helpers.valueOrDefault;
var getRtlHelper = helpers.rtl.getRtlAdapter;
defaults.set('tooltips', {
  enabled: true,
  custom: null,
  mode: 'nearest',
  position: 'average',
  intersect: true,
  backgroundColor: 'rgba(0,0,0,0.8)',
  titleFontStyle: 'bold',
  titleSpacing: 2,
  titleMarginBottom: 6,
  titleFontColor: '#fff',
  titleAlign: 'left',
  bodySpacing: 2,
  bodyFontColor: '#fff',
  bodyAlign: 'left',
  footerFontStyle: 'bold',
  footerSpacing: 2,
  footerMarginTop: 6,
  footerFontColor: '#fff',
  footerAlign: 'left',
  yPadding: 6,
  xPadding: 6,
  caretPadding: 2,
  caretSize: 5,
  cornerRadius: 6,
  multiKeyBackground: '#fff',
  displayColors: true,
  borderColor: 'rgba(0,0,0,0)',
  borderWidth: 0,
  animation: {
    duration: 400,
    easing: 'easeOutQuart',
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'width', 'height']
    },
    opacity: {
      easing: 'linear',
      duration: 200
    }
  },
  callbacks: {
    beforeTitle: helpers.noop,
    title(tooltipItems, data) {
      var title = '';
      var labels = data.labels;
      var labelCount = labels ? labels.length : 0;
      if (tooltipItems.length > 0) {
        var item = tooltipItems[0];
        if (item.label) {
          title = item.label;
        } else if (labelCount > 0 && item.index < labelCount) {
          title = labels[item.index];
        }
      }
      return title;
    },
    afterTitle: helpers.noop,
    beforeBody: helpers.noop,
    beforeLabel: helpers.noop,
    label(tooltipItem, data) {
      var label = data.datasets[tooltipItem.datasetIndex].label || '';
      if (label) {
        label += ': ';
      }
      var value = tooltipItem.value;
      if (!helpers.isNullOrUndef(value)) {
        label += value;
      }
      return label;
    },
    labelColor(tooltipItem, chart) {
      var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
      var options = meta.controller.getStyle(tooltipItem.index);
      return {
        borderColor: options.borderColor,
        backgroundColor: options.backgroundColor
      };
    },
    labelTextColor() {
      return this.options.bodyFontColor;
    },
    afterLabel: helpers.noop,
    afterBody: helpers.noop,
    beforeFooter: helpers.noop,
    footer: helpers.noop,
    afterFooter: helpers.noop
  }
});
var positioners = {
  average(items) {
    if (!items.length) {
      return false;
    }
    var i, len;
    var x = 0;
    var y = 0;
    var count = 0;
    for (i = 0, len = items.length; i < len; ++i) {
      var el = items[i].element;
      if (el && el.hasValue()) {
        var pos = el.tooltipPosition();
        x += pos.x;
        y += pos.y;
        ++count;
      }
    }
    return {
      x: x / count,
      y: y / count
    };
  },
  nearest(items, eventPosition) {
    var x = eventPosition.x;
    var y = eventPosition.y;
    var minDistance = Number.POSITIVE_INFINITY;
    var i, len, nearestElement;
    for (i = 0, len = items.length; i < len; ++i) {
      var el = items[i].element;
      if (el && el.hasValue()) {
        var center = el.getCenterPoint();
        var d = helpers.math.distanceBetweenPoints(eventPosition, center);
        if (d < minDistance) {
          minDistance = d;
          nearestElement = el;
        }
      }
    }
    if (nearestElement) {
      var tp = nearestElement.tooltipPosition();
      x = tp.x;
      y = tp.y;
    }
    return {
      x,
      y
    };
  }
};
function pushOrConcat(base, toPush) {
  if (toPush) {
    if (helpers.isArray(toPush)) {
      Array.prototype.push.apply(base, toPush);
    } else {
      base.push(toPush);
    }
  }
  return base;
}
function splitNewlines(str) {
  if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
    return str.split('\n');
  }
  return str;
}
function createTooltipItem(chart, item) {
  var {
    datasetIndex,
    index
  } = item;
  var {
    label,
    value
  } = chart.getDatasetMeta(datasetIndex).controller.getLabelAndValue(index);
  return {
    label,
    value,
    index,
    datasetIndex
  };
}
function resolveOptions(options) {
  options = _extends({}, defaults.tooltips, options);
  options.bodyFontFamily = valueOrDefault$3(options.bodyFontFamily, defaults.fontFamily);
  options.bodyFontStyle = valueOrDefault$3(options.bodyFontStyle, defaults.fontStyle);
  options.bodyFontSize = valueOrDefault$3(options.bodyFontSize, defaults.fontSize);
  options.boxHeight = valueOrDefault$3(options.boxHeight, options.bodyFontSize);
  options.boxWidth = valueOrDefault$3(options.boxWidth, options.bodyFontSize);
  options.titleFontFamily = valueOrDefault$3(options.titleFontFamily, defaults.fontFamily);
  options.titleFontStyle = valueOrDefault$3(options.titleFontStyle, defaults.fontStyle);
  options.titleFontSize = valueOrDefault$3(options.titleFontSize, defaults.fontSize);
  options.footerFontFamily = valueOrDefault$3(options.footerFontFamily, defaults.fontFamily);
  options.footerFontStyle = valueOrDefault$3(options.footerFontStyle, defaults.fontStyle);
  options.footerFontSize = valueOrDefault$3(options.footerFontSize, defaults.fontSize);
  return options;
}
function getTooltipSize(tooltip) {
  var ctx = tooltip._chart.ctx;
  var {
    body,
    footer,
    options,
    title
  } = tooltip;
  var {
    bodyFontSize,
    footerFontSize,
    titleFontSize,
    boxWidth,
    boxHeight
  } = options;
  var titleLineCount = title.length;
  var footerLineCount = footer.length;
  var bodyLineItemCount = body.length;
  var height = options.yPadding * 2;
  var width = 0;
  var combinedBodyLength = body.reduce((count, bodyItem) => count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
  combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
  if (titleLineCount) {
    height += titleLineCount * titleFontSize + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
  }
  if (combinedBodyLength) {
    var bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFontSize) : bodyFontSize;
    height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFontSize + (combinedBodyLength - 1) * options.bodySpacing;
  }
  if (footerLineCount) {
    height += options.footerMarginTop + footerLineCount * footerFontSize + (footerLineCount - 1) * options.footerSpacing;
  }
  var widthPadding = 0;
  var maxLineWidth = function maxLineWidth(line) {
    width = Math.max(width, ctx.measureText(line).width + widthPadding);
  };
  ctx.save();
  ctx.font = helpers.fontString(titleFontSize, options.titleFontStyle, options.titleFontFamily);
  helpers.each(tooltip.title, maxLineWidth);
  ctx.font = helpers.fontString(bodyFontSize, options.bodyFontStyle, options.bodyFontFamily);
  helpers.each(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
  widthPadding = options.displayColors ? boxWidth + 2 : 0;
  helpers.each(body, bodyItem => {
    helpers.each(bodyItem.before, maxLineWidth);
    helpers.each(bodyItem.lines, maxLineWidth);
    helpers.each(bodyItem.after, maxLineWidth);
  });
  widthPadding = 0;
  ctx.font = helpers.fontString(footerFontSize, options.footerFontStyle, options.footerFontFamily);
  helpers.each(tooltip.footer, maxLineWidth);
  ctx.restore();
  width += 2 * options.xPadding;
  return {
    width,
    height
  };
}
function determineAlignment(chart, options, size) {
  var {
    x,
    y,
    width,
    height
  } = size;
  var chartArea = chart.chartArea;
  var xAlign = 'center';
  var yAlign = 'center';
  if (y < height) {
    yAlign = 'top';
  } else if (y > chart.height - height) {
    yAlign = 'bottom';
  }
  var lf, rf;
  var midX = (chartArea.left + chartArea.right) / 2;
  var midY = (chartArea.top + chartArea.bottom) / 2;
  if (yAlign === 'center') {
    lf = value => value <= midX;
    rf = value => value > midX;
  } else {
    lf = value => value <= width / 2;
    rf = value => value >= chart.width - width / 2;
  }
  var olf = value => value + width + options.caretSize + options.caretPadding > chart.width;
  var orf = value => value - width - options.caretSize - options.caretPadding < 0;
  var yf = value => value <= midY ? 'top' : 'bottom';
  if (lf(x)) {
    xAlign = 'left';
    if (olf(x)) {
      xAlign = 'center';
      yAlign = yf(y);
    }
  } else if (rf(x)) {
    xAlign = 'right';
    if (orf(x)) {
      xAlign = 'center';
      yAlign = yf(y);
    }
  }
  return {
    xAlign: options.xAlign ? options.xAlign : xAlign,
    yAlign: options.yAlign ? options.yAlign : yAlign
  };
}
function alignX(size, xAlign, chartWidth) {
  var {
    x,
    width
  } = size;
  if (xAlign === 'right') {
    x -= width;
  } else if (xAlign === 'center') {
    x -= width / 2;
    if (x + width > chartWidth) {
      x = chartWidth - width;
    }
    if (x < 0) {
      x = 0;
    }
  }
  return x;
}
function alignY(size, yAlign, paddingAndSize) {
  var {
    y,
    height
  } = size;
  if (yAlign === 'top') {
    y += paddingAndSize;
  } else if (yAlign === 'bottom') {
    y -= height + paddingAndSize;
  } else {
    y -= height / 2;
  }
  return y;
}
function getBackgroundPoint(options, size, alignment, chart) {
  var {
    caretSize,
    caretPadding,
    cornerRadius
  } = options;
  var {
    xAlign,
    yAlign
  } = alignment;
  var paddingAndSize = caretSize + caretPadding;
  var radiusAndPadding = cornerRadius + caretPadding;
  var x = alignX(size, xAlign, chart.width);
  var y = alignY(size, yAlign, paddingAndSize);
  if (yAlign === 'center') {
    if (xAlign === 'left') {
      x += paddingAndSize;
    } else if (xAlign === 'right') {
      x -= paddingAndSize;
    }
  } else if (xAlign === 'left') {
    x -= radiusAndPadding;
  } else if (xAlign === 'right') {
    x += radiusAndPadding;
  }
  return {
    x,
    y
  };
}
function getAlignedX(tooltip, align) {
  var options = tooltip.options;
  return align === 'center' ? tooltip.x + tooltip.width / 2 : align === 'right' ? tooltip.x + tooltip.width - options.xPadding : tooltip.x + options.xPadding;
}
function getBeforeAfterBodyLines(callback) {
  return pushOrConcat([], splitNewlines(callback));
}
class Tooltip extends Element$1 {
  constructor(config) {
    super();
    this.opacity = 0;
    this._active = [];
    this._chart = config._chart;
    this._eventPosition = undefined;
    this._size = undefined;
    this._cachedAnimations = undefined;
    this.$animations = undefined;
    this.options = undefined;
    this.dataPoints = undefined;
    this.title = undefined;
    this.beforeBody = undefined;
    this.body = undefined;
    this.afterBody = undefined;
    this.footer = undefined;
    this.xAlign = undefined;
    this.yAlign = undefined;
    this.x = undefined;
    this.y = undefined;
    this.height = undefined;
    this.width = undefined;
    this.caretX = undefined;
    this.caretY = undefined;
    this.labelColors = undefined;
    this.labelTextColors = undefined;
    this.initialize();
  }
  initialize() {
    var me = this;
    me.options = resolveOptions(me._chart.options.tooltips);
  }
  _resolveAnimations() {
    var me = this;
    var cached = me._cachedAnimations;
    if (cached) {
      return cached;
    }
    var chart = me._chart;
    var opts = chart.options.animation && me.options.animation;
    var animations = new Animations(me._chart, opts);
    me._cachedAnimations = Object.freeze(animations);
    return animations;
  }
  getTitle(tooltipitem, data) {
    var me = this;
    var opts = me.options;
    var callbacks = opts.callbacks;
    var beforeTitle = callbacks.beforeTitle.apply(me, [tooltipitem, data]);
    var title = callbacks.title.apply(me, [tooltipitem, data]);
    var afterTitle = callbacks.afterTitle.apply(me, [tooltipitem, data]);
    var lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeTitle));
    lines = pushOrConcat(lines, splitNewlines(title));
    lines = pushOrConcat(lines, splitNewlines(afterTitle));
    return lines;
  }
  getBeforeBody(tooltipitem, data) {
    return getBeforeAfterBodyLines(this.options.callbacks.beforeBody.apply(this, [tooltipitem, data]));
  }
  getBody(tooltipItems, data) {
    var me = this;
    var callbacks = me.options.callbacks;
    var bodyItems = [];
    helpers.each(tooltipItems, tooltipItem => {
      var bodyItem = {
        before: [],
        lines: [],
        after: []
      };
      pushOrConcat(bodyItem.before, splitNewlines(callbacks.beforeLabel.call(me, tooltipItem, data)));
      pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
      pushOrConcat(bodyItem.after, splitNewlines(callbacks.afterLabel.call(me, tooltipItem, data)));
      bodyItems.push(bodyItem);
    });
    return bodyItems;
  }
  getAfterBody(tooltipitem, data) {
    return getBeforeAfterBodyLines(this.options.callbacks.afterBody.apply(this, [tooltipitem, data]));
  }
  getFooter(tooltipitem, data) {
    var me = this;
    var callbacks = me.options.callbacks;
    var beforeFooter = callbacks.beforeFooter.apply(me, [tooltipitem, data]);
    var footer = callbacks.footer.apply(me, [tooltipitem, data]);
    var afterFooter = callbacks.afterFooter.apply(me, [tooltipitem, data]);
    var lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeFooter));
    lines = pushOrConcat(lines, splitNewlines(footer));
    lines = pushOrConcat(lines, splitNewlines(afterFooter));
    return lines;
  }
  _createItems() {
    var me = this;
    var active = me._active;
    var options = me.options;
    var data = me._chart.data;
    var labelColors = [];
    var labelTextColors = [];
    var tooltipItems = [];
    var i, len;
    for (i = 0, len = active.length; i < len; ++i) {
      tooltipItems.push(createTooltipItem(me._chart, active[i]));
    }
    if (options.filter) {
      tooltipItems = tooltipItems.filter(a => options.filter(a, data));
    }
    if (options.itemSort) {
      tooltipItems = tooltipItems.sort((a, b) => options.itemSort(a, b, data));
    }
    helpers.each(tooltipItems, tooltipItem => {
      labelColors.push(options.callbacks.labelColor.call(me, tooltipItem, me._chart));
      labelTextColors.push(options.callbacks.labelTextColor.call(me, tooltipItem, me._chart));
    });
    me.labelColors = labelColors;
    me.labelTextColors = labelTextColors;
    me.dataPoints = tooltipItems;
    return tooltipItems;
  }
  update(changed) {
    var me = this;
    var options = me.options;
    var active = me._active;
    var properties;
    if (!active.length) {
      if (me.opacity !== 0) {
        properties = {
          opacity: 0
        };
      }
    } else {
      var data = me._chart.data;
      var position = positioners[options.position].call(me, active, me._eventPosition);
      var tooltipItems = me._createItems();
      me.title = me.getTitle(tooltipItems, data);
      me.beforeBody = me.getBeforeBody(tooltipItems, data);
      me.body = me.getBody(tooltipItems, data);
      me.afterBody = me.getAfterBody(tooltipItems, data);
      me.footer = me.getFooter(tooltipItems, data);
      var size = me._size = getTooltipSize(me);
      var positionAndSize = _extends({}, position, size);
      var alignment = determineAlignment(me._chart, options, positionAndSize);
      var backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, me._chart);
      me.xAlign = alignment.xAlign;
      me.yAlign = alignment.yAlign;
      properties = {
        opacity: 1,
        x: backgroundPoint.x,
        y: backgroundPoint.y,
        width: size.width,
        height: size.height,
        caretX: position.x,
        caretY: position.y
      };
    }
    if (properties) {
      me._resolveAnimations().update(me, properties);
    }
    if (changed && options.custom) {
      options.custom.call(me);
    }
  }
  drawCaret(tooltipPoint, ctx, size) {
    var caretPosition = this.getCaretPosition(tooltipPoint, size);
    ctx.lineTo(caretPosition.x1, caretPosition.y1);
    ctx.lineTo(caretPosition.x2, caretPosition.y2);
    ctx.lineTo(caretPosition.x3, caretPosition.y3);
  }
  getCaretPosition(tooltipPoint, size) {
    var {
      xAlign,
      yAlign,
      options
    } = this;
    var {
      cornerRadius,
      caretSize
    } = options;
    var {
      x: ptX,
      y: ptY
    } = tooltipPoint;
    var {
      width,
      height
    } = size;
    var x1, x2, x3, y1, y2, y3;
    if (yAlign === 'center') {
      y2 = ptY + height / 2;
      if (xAlign === 'left') {
        x1 = ptX;
        x2 = x1 - caretSize;
      } else {
        x1 = ptX + width;
        x2 = x1 + caretSize;
      }
      x3 = x1;
      y1 = y2 + caretSize;
      y3 = y2 - caretSize;
    } else {
      if (xAlign === 'left') {
        x2 = ptX + cornerRadius + caretSize;
      } else if (xAlign === 'right') {
        x2 = ptX + width - cornerRadius - caretSize;
      } else {
        x2 = this.caretX;
      }
      x1 = x2 - caretSize;
      x3 = x2 + caretSize;
      if (yAlign === 'top') {
        y1 = ptY;
        y2 = y1 - caretSize;
      } else {
        y1 = ptY + height;
        y2 = y1 + caretSize;
      }
      y3 = y1;
    }
    return {
      x1,
      x2,
      x3,
      y1,
      y2,
      y3
    };
  }
  drawTitle(pt, ctx) {
    var me = this;
    var options = me.options;
    var title = me.title;
    var length = title.length;
    var titleFontSize, titleSpacing, i;
    if (length) {
      var rtlHelper = getRtlHelper(options.rtl, me.x, me.width);
      pt.x = getAlignedX(me, options.titleAlign);
      ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
      ctx.textBaseline = 'middle';
      titleFontSize = options.titleFontSize;
      titleSpacing = options.titleSpacing;
      ctx.fillStyle = options.titleFontColor;
      ctx.font = helpers.fontString(titleFontSize, options.titleFontStyle, options.titleFontFamily);
      for (i = 0; i < length; ++i) {
        ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFontSize / 2);
        pt.y += titleFontSize + titleSpacing;
        if (i + 1 === length) {
          pt.y += options.titleMarginBottom - titleSpacing;
        }
      }
    }
  }
  _drawColorBox(ctx, pt, i, rtlHelper) {
    var me = this;
    var options = me.options;
    var labelColors = me.labelColors[i];
    var {
      boxHeight,
      boxWidth,
      bodyFontSize
    } = options;
    var colorX = getAlignedX(me, 'left');
    var rtlColorX = rtlHelper.x(colorX);
    var yOffSet = boxHeight < bodyFontSize ? (bodyFontSize - boxHeight) / 2 : 0;
    var colorY = pt.y + yOffSet;
    ctx.fillStyle = options.multiKeyBackground;
    ctx.fillRect(rtlHelper.leftForLtr(rtlColorX, boxWidth), colorY, boxWidth, boxHeight);
    ctx.lineWidth = 1;
    ctx.strokeStyle = labelColors.borderColor;
    ctx.strokeRect(rtlHelper.leftForLtr(rtlColorX, boxWidth), colorY, boxWidth, boxHeight);
    ctx.fillStyle = labelColors.backgroundColor;
    ctx.fillRect(rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2), colorY + 1, boxWidth - 2, boxHeight - 2);
    ctx.fillStyle = me.labelTextColors[i];
  }
  drawBody(pt, ctx) {
    var me = this;
    var {
      body,
      options
    } = me;
    var {
      bodyFontSize,
      bodySpacing,
      bodyAlign,
      displayColors,
      boxHeight,
      boxWidth
    } = options;
    var bodyLineHeight = bodyFontSize;
    var xLinePadding = 0;
    var rtlHelper = getRtlHelper(options.rtl, me.x, me.width);
    var fillLineOfText = function fillLineOfText(line) {
      ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
      pt.y += bodyLineHeight + bodySpacing;
    };
    var bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
    var bodyItem, textColor, lines, i, j, ilen, jlen;
    ctx.textAlign = bodyAlign;
    ctx.textBaseline = 'middle';
    ctx.font = helpers.fontString(bodyFontSize, options.bodyFontStyle, options.bodyFontFamily);
    pt.x = getAlignedX(me, bodyAlignForCalculation);
    ctx.fillStyle = options.bodyFontColor;
    helpers.each(me.beforeBody, fillLineOfText);
    xLinePadding = displayColors && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? boxWidth / 2 + 1 : boxWidth + 2 : 0;
    for (i = 0, ilen = body.length; i < ilen; ++i) {
      bodyItem = body[i];
      textColor = me.labelTextColors[i];
      ctx.fillStyle = textColor;
      helpers.each(bodyItem.before, fillLineOfText);
      lines = bodyItem.lines;
      if (displayColors && lines.length) {
        me._drawColorBox(ctx, pt, i, rtlHelper);
        bodyLineHeight = Math.max(bodyFontSize, boxHeight);
      }
      for (j = 0, jlen = lines.length; j < jlen; ++j) {
        fillLineOfText(lines[j]);
        bodyLineHeight = bodyFontSize;
      }
      helpers.each(bodyItem.after, fillLineOfText);
    }
    xLinePadding = 0;
    bodyLineHeight = bodyFontSize;
    helpers.each(me.afterBody, fillLineOfText);
    pt.y -= bodySpacing;
  }
  drawFooter(pt, ctx) {
    var me = this;
    var options = me.options;
    var footer = me.footer;
    var length = footer.length;
    var footerFontSize, i;
    if (length) {
      var rtlHelper = getRtlHelper(options.rtl, me.x, me.width);
      pt.x = getAlignedX(me, options.footerAlign);
      pt.y += options.footerMarginTop;
      ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
      ctx.textBaseline = 'middle';
      footerFontSize = options.footerFontSize;
      ctx.fillStyle = options.footerFontColor;
      ctx.font = helpers.fontString(footerFontSize, options.footerFontStyle, options.footerFontFamily);
      for (i = 0; i < length; ++i) {
        ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFontSize / 2);
        pt.y += footerFontSize + options.footerSpacing;
      }
    }
  }
  drawBackground(pt, ctx, tooltipSize) {
    var {
      xAlign,
      yAlign,
      options
    } = this;
    var {
      x,
      y
    } = pt;
    var {
      width,
      height
    } = tooltipSize;
    var radius = options.cornerRadius;
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    if (yAlign === 'top') {
      this.drawCaret(pt, ctx, tooltipSize);
    }
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    if (yAlign === 'center' && xAlign === 'right') {
      this.drawCaret(pt, ctx, tooltipSize);
    }
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    if (yAlign === 'bottom') {
      this.drawCaret(pt, ctx, tooltipSize);
    }
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    if (yAlign === 'center' && xAlign === 'left') {
      this.drawCaret(pt, ctx, tooltipSize);
    }
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
    if (options.borderWidth > 0) {
      ctx.stroke();
    }
  }
  _updateAnimationTarget() {
    var me = this;
    var chart = me._chart;
    var options = me.options;
    var anims = me.$animations;
    var animX = anims && anims.x;
    var animY = anims && anims.y;
    if (animX || animY) {
      var position = positioners[options.position].call(me, me._active, me._eventPosition);
      if (!position) {
        return;
      }
      var size = me._size = getTooltipSize(me);
      var positionAndSize = _extends({}, position, me._size);
      var alignment = determineAlignment(chart, options, positionAndSize);
      var point = getBackgroundPoint(options, positionAndSize, alignment, chart);
      if (animX._to !== point.x || animY._to !== point.y) {
        me.xAlign = alignment.xAlign;
        me.yAlign = alignment.yAlign;
        me.width = size.width;
        me.height = size.height;
        me.caretX = position.x;
        me.caretY = position.y;
        me._resolveAnimations().update(me, point);
      }
    }
  }
  draw(ctx) {
    var me = this;
    var options = me.options;
    var opacity = me.opacity;
    if (!opacity) {
      return;
    }
    me._updateAnimationTarget();
    var tooltipSize = {
      width: me.width,
      height: me.height
    };
    var pt = {
      x: me.x,
      y: me.y
    };
    opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
    var hasTooltipContent = me.title.length || me.beforeBody.length || me.body.length || me.afterBody.length || me.footer.length;
    if (options.enabled && hasTooltipContent) {
      ctx.save();
      ctx.globalAlpha = opacity;
      me.drawBackground(pt, ctx, tooltipSize);
      helpers.rtl.overrideTextDirection(ctx, options.textDirection);
      pt.y += options.yPadding;
      me.drawTitle(pt, ctx);
      me.drawBody(pt, ctx);
      me.drawFooter(pt, ctx);
      helpers.rtl.restoreTextDirection(ctx, options.textDirection);
      ctx.restore();
    }
  }
  handleEvent(e, replay) {
    var me = this;
    var options = me.options;
    var lastActive = me._active || [];
    var changed = false;
    var active = [];
    if (e.type !== 'mouseout') {
      active = me._chart.getElementsAtEventForMode(e, options.mode, options, replay);
      if (options.reverse) {
        active.reverse();
      }
    }
    changed = replay || !helpers._elementsEqual(active, lastActive);
    if (changed) {
      me._active = active;
      if (options.enabled || options.custom) {
        me._eventPosition = {
          x: e.x,
          y: e.y
        };
        me.update(true);
      }
    }
    return changed;
  }
}
Tooltip.positioners = positioners;
var tooltip = {
  id: 'tooltip',
  _element: Tooltip,
  positioners,
  afterInit(chart) {
    var tooltipOpts = chart.options.tooltips;
    if (tooltipOpts) {
      chart.tooltip = new Tooltip({
        _chart: chart
      });
    }
  },
  beforeUpdate(chart) {
    if (chart.tooltip) {
      chart.tooltip.initialize();
    }
  },
  reset(chart) {
    if (chart.tooltip) {
      chart.tooltip.initialize();
    }
  },
  afterDraw(chart) {
    var tooltip = chart.tooltip;
    var args = {
      tooltip
    };
    if (pluginsCore.notify(chart, 'beforeTooltipDraw', [args]) === false) {
      return;
    }
    tooltip.draw(chart.ctx);
    pluginsCore.notify(chart, 'afterTooltipDraw', [args]);
  },
  afterEvent(chart, e, replay) {
    if (chart.tooltip) {
      var useFinalPosition = replay;
      chart.tooltip.handleEvent(e, useFinalPosition);
    }
  }
};

var plugins = {
  filler,
  legend,
  title,
  tooltip
};

Chart.helpers = helpers;
Chart._adapters = _adapters;
Chart.Animation = Animation;
Chart.Animator = Animator$1;
Chart.animationService = Animations;
Chart.controllers = controllers;
Chart.DatasetController = DatasetController;
Chart.defaults = defaults;
Chart.Element = Element$1;
Chart.elements = elements;
Chart.Interaction = Interaction;
Chart.layouts = layouts;
Chart.platforms = platforms;
Chart.plugins = pluginsCore;
Chart.Scale = Scale;
Chart.scaleService = scaleService;
Chart.Ticks = Ticks;
Object.keys(scales).forEach(key => Chart.scaleService.registerScale(scales[key]));
for (var k in plugins) {
  if (Object.prototype.hasOwnProperty.call(plugins, k)) {
    Chart.plugins.register(plugins[k]);
  }
}
if (typeof window !== 'undefined') {
  window.Chart = Chart;
}

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/chart.js/dist/Chart.min.js":
/*!*************************************************!*\
  !*** ./node_modules/chart.js/dist/Chart.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Chart.js v3.0.0-alpha
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?c(t):e}function d(t,e,i){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(n){var a=Object.getOwnPropertyDescriptor(n,e);return a.get?a.get.call(i):a.value}})(t,e,i||t)}function f(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(){}var p,g=(p=0,function(){return p++});function y(t){return null==t}function m(t){if(Array.isArray&&Array.isArray(t))return!0;var e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)}function b(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}var x=function(t){return("number"==typeof t||t instanceof Number)&&isFinite(+t)};function _(t,e){return void 0===t?e:t}function k(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function M(t,e,i,n){var a,r,o;if(m(t))if(r=t.length,n)for(a=r-1;a>=0;a--)e.call(i,t[a],a);else for(a=0;a<r;a++)e.call(i,t[a],a);else if(b(t))for(r=(o=Object.keys(t)).length,a=0;a<r;a++)e.call(i,t[o[a]],o[a])}function w(t){if(m(t))return t.map(w);if(b(t)){for(var e={},i=Object.keys(t),n=i.length,a=0;a<n;++a)e[i[a]]=w(t[i[a]]);return e}return t}function S(t,e,i,n){var a=e[t],r=i[t];b(a)&&b(r)?P(a,r,n):e[t]=w(r)}function P(t,e,i){var n=m(e)?e:[e],a=n.length;if(!b(t))return t;for(var r=(i=i||{}).merger||S,o=0;o<a;++o)if(b(e=n[o]))for(var s=Object.keys(e),l=0,u=s.length;l<u;++l)r(s[l],t,e,i);return t}function D(t,e){return P(t,e,{merger:O})}function O(t,e,i){var n=e[t],a=i[t];b(n)&&b(a)?D(n,a):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=w(a))}function A(t){var e=this,i=t&&Object.prototype.hasOwnProperty.call(t,"constructor")?t.constructor:function(){return e.apply(this,arguments)},n=function(){this.constructor=i};return n.prototype=e.prototype,i.prototype=new n,i.extend=A,t&&r(i.prototype,t),i.__super__=e.prototype,i}var T=Object.freeze({__proto__:null,noop:v,uid:g,isNullOrUndef:y,isArray:m,isObject:b,isFinite:x,valueOrDefault:_,valueAtIndexOrDefault:function(t,e,i){return _(m(t)?t[e]:t,i)},callback:k,each:M,arrayEquals:function t(e,i){var n,a,r,o;if(!e||!i||e.length!==i.length)return!1;for(n=0,a=e.length;n<a;++n)if(r=e[n],o=i[n],r instanceof Array&&o instanceof Array){if(!t(r,o))return!1}else if(r!==o)return!1;return!0},_elementsEqual:function(t,e){var i,n,a,r;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(a=t[i],r=e[i],a.datasetIndex!==r.datasetIndex||a.index!==r.index)return!1;return!0},clone:w,_merger:S,merge:P,mergeIf:D,_mergerIf:O,inherits:A,_deprecated:function(t,e,i,n){void 0!==e&&console.warn(t+': "'+i+'" is deprecated. Please use "'+n+'" instead')}}),C=Math.PI,F=C/180,E=2*C,I=C/2,L=C/4,R=2*C/3;function z(t,e,i,n,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,i.push(a)),r>n&&(n=r),n}function B(t,e,i,n){var a=(n=n||{}).data=n.data||{},r=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(a=n.data={},r=n.garbageCollect=[],n.font=e),t.save(),t.font=e;var o,s,l,u,c,h=0,d=i.length;for(o=0;o<d;o++)if(null!=(u=i[o])&&!0!==m(u))h=z(t,a,r,h,u);else if(m(u))for(s=0,l=u.length;s<l;s++)null==(c=u[s])||m(c)||(h=z(t,a,r,h,c));t.restore();var f=r.length/2;if(f>i.length){for(o=0;o<f;o++)delete a[r[o]];r.splice(0,f)}return h}function V(t,e,i){var n=t.currentDevicePixelRatio,a=i/2;return Math.round((e-a)*n)/n+a}function W(e,i,n,a){var r,o,s,l,u,c=i.pointStyle,h=i.rotation,d=i.radius,f=(h||0)*F;if(c&&"object"===t(c)&&("[object HTMLImageElement]"===(r=c.toString())||"[object HTMLCanvasElement]"===r))return e.save(),e.translate(n,a),e.rotate(f),e.drawImage(c,-c.width/2,-c.height/2,c.width,c.height),void e.restore();if(!(isNaN(d)||d<=0)){switch(e.beginPath(),c){default:e.arc(n,a,d,0,E),e.closePath();break;case"triangle":e.moveTo(n+Math.sin(f)*d,a-Math.cos(f)*d),f+=R,e.lineTo(n+Math.sin(f)*d,a-Math.cos(f)*d),f+=R,e.lineTo(n+Math.sin(f)*d,a-Math.cos(f)*d),e.closePath();break;case"rectRounded":l=d-(u=.516*d),o=Math.cos(f+L)*l,s=Math.sin(f+L)*l,e.arc(n-o,a-s,u,f-C,f-I),e.arc(n+s,a-o,u,f-I,f),e.arc(n+o,a+s,u,f,f+I),e.arc(n-s,a+o,u,f+I,f+C),e.closePath();break;case"rect":if(!h){l=Math.SQRT1_2*d,e.rect(n-l,a-l,2*l,2*l);break}f+=L;case"rectRot":o=Math.cos(f)*d,s=Math.sin(f)*d,e.moveTo(n-o,a-s),e.lineTo(n+s,a-o),e.lineTo(n+o,a+s),e.lineTo(n-s,a+o),e.closePath();break;case"crossRot":f+=L;case"cross":o=Math.cos(f)*d,s=Math.sin(f)*d,e.moveTo(n-o,a-s),e.lineTo(n+o,a+s),e.moveTo(n+s,a-o),e.lineTo(n-s,a+o);break;case"star":o=Math.cos(f)*d,s=Math.sin(f)*d,e.moveTo(n-o,a-s),e.lineTo(n+o,a+s),e.moveTo(n+s,a-o),e.lineTo(n-s,a+o),f+=L,o=Math.cos(f)*d,s=Math.sin(f)*d,e.moveTo(n-o,a-s),e.lineTo(n+o,a+s),e.moveTo(n+s,a-o),e.lineTo(n-s,a+o);break;case"line":o=Math.cos(f)*d,s=Math.sin(f)*d,e.moveTo(n-o,a-s),e.lineTo(n+o,a+s);break;case"dash":e.moveTo(n,a),e.lineTo(n+Math.cos(f)*d,a+Math.sin(f)*d)}e.fill(),i.borderWidth>0&&e.stroke()}}function N(t,e){return t.x>e.left-.5&&t.x<e.right+.5&&t.y>e.top-.5&&t.y<e.bottom+.5}function H(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function j(t){t.restore()}function Y(t,e,i,n,a){if(!e)return t.lineTo(i.x,i.y);if("middle"===a){var r=(e.x+i.x)/2;t.lineTo(r,e.y),t.lineTo(r,i.y)}else"after"===a!=!!n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function U(t,e,i,n){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(n?e.controlPointPreviousX:e.controlPointNextX,n?e.controlPointPreviousY:e.controlPointNextY,n?i.controlPointNextX:i.controlPointPreviousX,n?i.controlPointNextY:i.controlPointPreviousY,i.x,i.y)}var X=Object.freeze({__proto__:null,_measureText:z,_longestText:B,_alignPixel:V,clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},drawPoint:W,_isPointInArea:N,clipArea:H,unclipArea:j,_steppedLineTo:Y,_bezierCurveTo:U}),q=Math.PI,$=2*q,G=$+q;function K(t){var e,i=[],n=Math.sqrt(t);for(e=1;e<n;e++)t%e==0&&(i.push(e),i.push(t/e));return n===(0|n)&&i.push(n),i.sort((function(t,e){return t-e})).pop(),i}var Z=Math.log10||function(t){var e=Math.log(t)*Math.LOG10E,i=Math.round(e);return t===Math.pow(10,i)?i:e};function Q(t){return!isNaN(parseFloat(t))&&isFinite(t)}function J(t,e,i){return Math.abs(t-e)<i}function tt(t,e){var i=Math.round(t);return i-e<=t&&i+e>=t}function et(t,e,i){var n,a,r;for(n=0,a=t.length;n<a;n++)r=t[n][i],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}var it=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1};function nt(t){return t*(q/180)}function at(t){return t*(180/q)}function rt(t){if(x(t)){for(var e=1,i=0;Math.round(t*e)/e!==t;)e*=10,i++;return i}}function ot(t,e){var i=e.x-t.x,n=e.y-t.y,a=Math.sqrt(i*i+n*n),r=Math.atan2(n,i);return r<-.5*q&&(r+=$),{angle:r,distance:a}}function st(t,e){return(t-e+G)%$-q}function lt(t){return(t%$+$)%$}function ut(t,e,i){var n=lt(t),a=lt(e),r=lt(i),o=lt(a-n),s=lt(r-n),l=lt(n-a),u=lt(n-r);return n===a||n===r||o>s&&l<u}function ct(t,e,i){return Math.max(e,Math.min(i,t))}var ht=Object.freeze({__proto__:null,_factorize:K,log10:Z,isNumber:Q,almostEquals:J,almostWhole:tt,_setMinAndMaxByKey:et,sign:it,toRadians:nt,toDegrees:at,_decimalPlaces:rt,getAngleFromPoint:ot,distanceBetweenPoints:function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},_angleDiff:st,_normalizeAngle:lt,_angleBetween:ut,_limitValue:ct}),dt=Number.EPSILON||1e-14;function ft(t,e,i,n){var a=t.skip?e:t,r=e,o=i.skip?e:i,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),c=l/(s+l),h=n*(u=isNaN(u)?0:u),d=n*(c=isNaN(c)?0:c);return{previous:{x:r.x-h*(o.x-a.x),y:r.y-h*(o.y-a.y)},next:{x:r.x+d*(o.x-a.x),y:r.y+d*(o.y-a.y)}}}function vt(t){var e,i,n,a,r,o,s,l,u,c=(t||[]).map((function(t){return{model:t,deltaK:0,mK:0}})),h=c.length;for(e=0;e<h;++e)if(!(n=c[e]).model.skip){if(i=e>0?c[e-1]:null,(a=e<h-1?c[e+1]:null)&&!a.model.skip){var d=a.model.x-n.model.x;n.deltaK=0!==d?(a.model.y-n.model.y)/d:0}!i||i.model.skip?n.mK=n.deltaK:!a||a.model.skip?n.mK=i.deltaK:it(i.deltaK)!==it(n.deltaK)?n.mK=0:n.mK=(i.deltaK+n.deltaK)/2}for(e=0;e<h-1;++e)n=c[e],a=c[e+1],n.model.skip||a.model.skip||(J(n.deltaK,0,dt)?n.mK=a.mK=0:(r=n.mK/n.deltaK,o=a.mK/n.deltaK,(l=Math.pow(r,2)+Math.pow(o,2))<=9||(s=3/Math.sqrt(l),n.mK=r*s*n.deltaK,a.mK=o*s*n.deltaK)));for(e=0;e<h;++e)(n=c[e]).model.skip||(i=e>0?c[e-1]:null,a=e<h-1?c[e+1]:null,i&&!i.model.skip&&(u=(n.model.x-i.model.x)/3,n.model.controlPointPreviousX=n.model.x-u,n.model.controlPointPreviousY=n.model.y-u*n.mK),a&&!a.model.skip&&(u=(a.model.x-n.model.x)/3,n.model.controlPointNextX=n.model.x+u,n.model.controlPointNextY=n.model.y+u*n.mK))}function pt(t,e,i){return Math.max(Math.min(t,i),e)}function gt(t,e,i,n){var a,r,o,s;if(e.spanGaps&&(t=t.filter((function(t){return!t.skip}))),"monotone"===e.cubicInterpolationMode)vt(t);else{var l=n?t[t.length-1]:t[0];for(a=0,r=t.length;a<r;++a)s=ft(l,o=t[a],t[Math.min(a+1,r-(n?0:1))%r],e.tension),o.controlPointPreviousX=s.previous.x,o.controlPointPreviousY=s.previous.y,o.controlPointNextX=s.next.x,o.controlPointNextY=s.next.y,l=o}e.capBezierPoints&&function(t,e){var i,n,a;for(i=0,n=t.length;i<n;++i)N(a=t[i],e)&&(i>0&&N(t[i-1],e)&&(a.controlPointPreviousX=pt(a.controlPointPreviousX,e.left,e.right),a.controlPointPreviousY=pt(a.controlPointPreviousY,e.top,e.bottom)),i<t.length-1&&N(t[i+1],e)&&(a.controlPointNextX=pt(a.controlPointNextX,e.left,e.right),a.controlPointNextY=pt(a.controlPointNextY,e.top,e.bottom)))}(t,i)}var yt=Object.freeze({__proto__:null,splineCurve:ft,splineCurveMonotone:vt,_updateBezierControlPoints:gt});function mt(t){return null!=t&&"none"!==t}function bt(t){var e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function xt(t,e,i){var n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}function _t(t,e,i){var n=document.defaultView,a=bt(t),r=n.getComputedStyle(t)[e],o=n.getComputedStyle(a)[e],s=mt(r),l=mt(o),u=Number.POSITIVE_INFINITY;if(s||l)return Math.min(s?xt(r,t,i):u,l?xt(o,a,i):u)}function kt(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)}function Mt(t,e,i){return(e=kt(t,e)).indexOf("%")>-1?i*parseInt(e,10)/100:parseInt(e,10)}function wt(t){var e=bt(t);if(!e)return"number"==typeof t.clientWidth?t.clientWidth:t.width;var i=e.clientWidth,n=i-Mt(e,"padding-left",i)-Mt(e,"padding-right",i),a=function(t){return _t(t,"max-width","clientWidth")}(t);return isNaN(a)?n:Math.min(n,a)}function St(t){var e=bt(t);if(!e)return"number"==typeof t.clientHeight?t.clientHeight:t.height;var i=e.clientHeight,n=i-Mt(e,"padding-top",i)-Mt(e,"padding-bottom",i),a=function(t){return _t(t,"max-height","clientHeight")}(t);return isNaN(a)?n:Math.min(n,a)}var Pt=Object.freeze({__proto__:null,_getParentNode:bt,getStyle:kt,getRelativePosition:function(t,e){var i,n,a=t.originalEvent||t,r=t.target||t.srcElement,o=r.getBoundingClientRect(),s=a.touches;s&&s.length>0?(i=s[0].clientX,n=s[0].clientY):(i=a.clientX,n=a.clientY);var l=parseFloat(kt(r,"padding-left")),u=parseFloat(kt(r,"padding-top")),c=parseFloat(kt(r,"padding-right")),h=parseFloat(kt(r,"padding-bottom")),d=o.right-o.left-l-c,f=o.bottom-o.top-u-h;return{x:i=Math.round((i-o.left-l)/d*r.width/e.currentDevicePixelRatio),y:n=Math.round((n-o.top-u)/f*r.height/e.currentDevicePixelRatio)}},getMaximumWidth:wt,getMaximumHeight:St,retinaScale:function(t,e){var i=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1,n=t.canvas,a=t.width,r=t.height;n.height=r*i,n.width=a*i,t.ctx.setTransform(i,0,0,i,0,0),!n.style||n.style.height||n.style.width||(n.style.height=r+"px",n.style.width=a+"px")}}),Dt={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e,i=0;return 0===t?0:1===t?1:(i||(i=.3),e=i/(2*Math.PI)*Math.asin(1),-1*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i))},easeOutElastic:function(t){var e,i=0;return 0===t?0:1===t?1:(i||(i=.3),e=i/(2*Math.PI)*Math.asin(1),1*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e,i=0;return 0===t?0:2==(t/=.5)?1:(i||(i=.45),e=i/(2*Math.PI)*Math.asin(1),t<1?1*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*-.5:1*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-Dt.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*Dt.easeInBounce(2*t):.5*Dt.easeOutBounce(2*t-1)+.5}},Ot=new(function(){function t(){e(this,t),this.color="rgba(0,0,0,0.1)",this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.fontColor="#666",this.fontFamily="'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",this.fontSize=12,this.fontStyle="normal",this.lineHeight=1.2,this.hover={onHover:null,mode:"nearest",intersect:!0},this.maintainAspectRatio=!0,this.onClick=null,this.responsive=!0,this.showLines=!0,this.plugins=void 0,this.scale=void 0,this.legend=void 0,this.title=void 0,this.tooltips=void 0,this.doughnut=void 0}return n(t,[{key:"set",value:function(t,e){return P(this[t]||(this[t]={}),e)}}]),t}());function At(t,e){var i=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}function Tt(t){var e,i,n,a;return b(t)?(e=+t.top||0,i=+t.right||0,n=+t.bottom||0,a=+t.left||0):e=i=n=a=+t||0,{top:e,right:i,bottom:n,left:a,height:e+n,width:a+i}}function Ct(t){var e=_(t.fontSize,Ot.fontSize);"string"==typeof e&&(e=parseInt(e,10));var i={family:_(t.fontFamily,Ot.fontFamily),lineHeight:At(_(t.lineHeight,Ot.lineHeight),e),size:e,style:_(t.fontStyle,Ot.fontStyle),weight:null,string:""};return i.string=function(t){return!t||y(t.size)||y(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(i),i}function Ft(t,e,i,n){var a,r,o,s=!0;for(a=0,r=t.length;a<r;++a)if(void 0!==(o=t[a])&&(void 0!==e&&"function"==typeof o&&(o=o(e),s=!1),void 0!==i&&m(o)&&(o=o[i],s=!1),void 0!==o))return n&&!s&&(n.cacheable=!1),o}var Et=Object.freeze({__proto__:null,toLineHeight:At,toPadding:Tt,_parseFont:Ct,resolve:Ft});function It(t,e,i){return t?function(t,e){return{x:function(i){return t+t+e-i},setWidth:function(t){e=t},textAlign:function(t){return"center"===t?t:"right"===t?"left":"right"},xPlus:function(t,e){return t-e},leftForLtr:function(t,e){return t-e}}}(e,i):{x:function(t){return t},setWidth:function(t){},textAlign:function(t){return t},xPlus:function(t,e){return t+e},leftForLtr:function(t,e){return t}}}function Lt(t,e){var i,n;"ltr"!==e&&"rtl"!==e||(n=[(i=t.canvas.style).getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=n)}function Rt(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}var zt=Object.freeze({__proto__:null,getRtlAdapter:It,overrideTextDirection:Lt,restoreTextDirection:Rt}),Bt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Vt="0123456789ABCDEF",Wt=function(t){return Vt[15&t]},Nt=function(t){return Vt[(240&t)>>4]+Vt[15&t]},Ht=function(t){return(240&t)>>4==(15&t)};
/*!
 * @kurkle/color v0.1.6
 * https://github.com/kurkle/color#readme
 * (c) 2020 Jukka Kurkela
 * Released under the MIT License
 */function jt(t){var e=function(t){return Ht(t.r)&&Ht(t.g)&&Ht(t.b)&&Ht(t.a)}(t)?Wt:Nt;return t?"#"+e(t.r)+e(t.g)+e(t.b)+(t.a<255?e(t.a):""):t}function Yt(t){return t+.5|0}var Ut=function(t,e,i){return Math.max(Math.min(t,i),e)};function Xt(t){return Ut(Yt(2.55*t),0,255)}function qt(t){return Ut(Yt(255*t),0,255)}function $t(t){return Ut(Yt(t/2.55)/100,0,1)}function Gt(t){return Ut(Yt(100*t),0,100)}var Kt=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;var Zt=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Qt(t,e,i){var n=e*Math.min(i,1-i),a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+t/30)%12;return i-n*Math.max(Math.min(a-3,9-a,1),-1)};return[a(0),a(8),a(4)]}function Jt(t,e,i){var n=function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(n+t/60)%6;return i-i*e*Math.max(Math.min(a,4-a,1),0)};return[n(5),n(3),n(1)]}function te(t,e,i){var n,a=Qt(t,1,.5);for(e+i>1&&(e*=n=1/(e+i),i*=n),n=0;n<3;n++)a[n]*=1-e-i,a[n]+=e;return a}function ee(t){var e,i,n,a=t.r/255,r=t.g/255,o=t.b/255,s=Math.max(a,r,o),l=Math.min(a,r,o),u=(s+l)/2;return s!==l&&(n=s-l,i=u>.5?n/(2-s-l):n/(s+l),e=60*(e=s===a?(r-o)/n+(r<o?6:0):s===r?(o-a)/n+2:(a-r)/n+4)+.5),[0|e,i||0,u]}function ie(t,e,i,n){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,n)).map(qt)}function ne(t,e,i){return ie(Qt,t,e,i)}function ae(t){return(t%360+360)%360}function re(t){var e,i=Zt.exec(t),n=255;if(i){i[5]!==e&&(n=i[6]?Xt(+i[5]):qt(+i[5]));var a=ae(+i[2]),r=+i[3]/100,o=+i[4]/100;return{r:(e="hwb"===i[1]?function(t,e,i){return ie(te,t,e,i)}(a,r,o):"hsv"===i[1]?function(t,e,i){return ie(Jt,t,e,i)}(a,r,o):ne(a,r,o))[0],g:e[1],b:e[2],a:n}}}var oe={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"};var se=function(t){var e,i,n,a,r,o={},s=Object.keys(t),l=Object.keys(oe);for(e=0;e<s.length;e++){for(a=r=s[e],i=0;i<l.length;i++)n=l[i],r=r.replace(n,oe[n]);n=parseInt(t[a],16),o[r]=[n>>16&255,n>>8&255,255&n]}return o}({OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"});function le(t,e,i){if(t){var n=ee(t);n[e]=Math.max(0,Math.min(n[e]+n[e]*i,0===e?360:1)),n=ne(n),t.r=n[0],t.g=n[1],t.b=n[2]}}function ue(t,e){return t?r(e||{},t):t}function ce(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=qt(t[3]))):(e=ue(t,{r:0,g:0,b:0,a:1})).a=qt(e.a),e}function he(t){return"r"===t.charAt(0)?function(t){var e,i,n,a=Kt.exec(t),r=255;if(a){if(a[7]!==e){var o=+a[7];r=255&(a[8]?Xt(o):255*o)}return e=+a[1],i=+a[3],n=+a[5],{r:e=255&(a[2]?Xt(e):e),g:i=255&(a[4]?Xt(i):i),b:n=255&(a[6]?Xt(n):n),a:r}}}(t):re(t)}se.transparent=[0,0,0,0];var de=function(){function i(n){if(e(this,i),n instanceof i)return n;var a,r,o,s,l=t(n);"object"===l?a=ce(n):"string"===l&&(s=(r=n).length,"#"===r[0]&&(4===s||5===s?o={r:255&17*Bt[r[1]],g:255&17*Bt[r[2]],b:255&17*Bt[r[3]],a:5===s?17*Bt[r[4]]:255}:7!==s&&9!==s||(o={r:Bt[r[1]]<<4|Bt[r[2]],g:Bt[r[3]]<<4|Bt[r[4]],b:Bt[r[5]]<<4|Bt[r[6]],a:9===s?Bt[r[7]]<<4|Bt[r[8]]:255})),a=o||function(t){var e=se[t];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}(n)||he(n)),this._rgb=a,this._valid=!!a}return n(i,[{key:"rgbString",value:function(){return(t=this._rgb)&&(t.a<255?"rgba(".concat(t.r,", ").concat(t.g,", ").concat(t.b,", ").concat($t(t.a),")"):"rgb(".concat(t.r,", ").concat(t.g,", ").concat(t.b,")"));var t}},{key:"hexString",value:function(){return jt(this._rgb)}},{key:"hslString",value:function(){return function(t){if(t){var e=ee(t),i=e[0],n=Gt(e[1]),a=Gt(e[2]);return t.a<255?"hsla(".concat(i,", ").concat(n,"%, ").concat(a,"%, ").concat($t(t.a),")"):"hsl(".concat(i,", ").concat(n,"%, ").concat(a,"%)")}}(this._rgb)}},{key:"mix",value:function(t,e){if(t){var i,n=this.rgb,a=t.rgb,r=e===i?.5:e,o=2*r-1,s=n.a-a.a,l=((o*s==-1?o:(o+s)/(1+o*s))+1)/2;i=1-l,n.r=255&l*n.r+i*a.r+.5,n.g=255&l*n.g+i*a.g+.5,n.b=255&l*n.b+i*a.b+.5,n.a=r*n.a+(1-r)*a.a,this.rgb=n}return this}},{key:"clone",value:function(){return new i(this.rgb)}},{key:"alpha",value:function(t){return this._rgb.a=qt(t),this}},{key:"clearer",value:function(t){return this._rgb.a*=1-t,this}},{key:"greyscale",value:function(){var t=this._rgb,e=Yt(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}},{key:"opaquer",value:function(t){return this._rgb.a*=1+t,this}},{key:"negate",value:function(){var t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}},{key:"lighten",value:function(t){return le(this._rgb,2,t),this}},{key:"darken",value:function(t){return le(this._rgb,2,-t),this}},{key:"saturate",value:function(t){return le(this._rgb,1,t),this}},{key:"desaturate",value:function(t){return le(this._rgb,1,-t),this}},{key:"rotate",value:function(t){return function(t,e){var i=ee(t);i[0]=ae(i[0]+e),i=ne(i),t.r=i[0],t.g=i[1],t.b=i[2]}(this._rgb,t),this}},{key:"valid",get:function(){return this._valid}},{key:"rgb",get:function(){var t=ue(this._rgb);return t&&(t.a=$t(t.a)),t},set:function(t){this._rgb=ce(t)}}]),i}();function fe(t){return new de(t)}var ve=function(t){return t instanceof CanvasGradient||t instanceof CanvasPattern};var pe=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},T,{canvas:X,curve:yt,dom:Pt,easing:{effects:Dt},options:Et,math:ht,rtl:zt,requestAnimFrame:"undefined"==typeof window?function(t){t()}:window.requestAnimationFrame,fontString:function(t,e,i){return e+" "+t+"px "+i},color:function(t){return ve(t)?t:fe(t)},getHoverColor:function(t){return ve(t)?t:fe(t).saturate(.5).darken(.1).hexString()}});var ge=new(function(){function t(){e(this,t),this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}return n(t,[{key:"_notify",value:function(t,e,i,n){var a=e.listeners[n]||[],r=e.duration;a.forEach((function(n){return n({chart:t,numSteps:r,currentStep:i-e.start})}))}},{key:"_refresh",value:function(){var t=this;t._request||(t._running=!0,t._request=pe.requestAnimFrame.call(window,(function(){t._update(),t._request=null,t._running&&t._refresh()})))}},{key:"_update",value:function(){var t=this,e=Date.now(),i=0;t._charts.forEach((function(n,a){if(n.running&&n.items.length){for(var r,o=n.items,s=o.length-1,l=!1;s>=0;--s)(r=o[s])._active?(r.tick(e),l=!0):(o[s]=o[o.length-1],o.pop());l&&a.draw(),a.options.animation.debug&&function(t,e,i,n){var a=1e3/(i-n)|0,r=t.ctx;r.save(),r.clearRect(0,0,50,24),r.fillStyle="black",r.textAlign="right",e&&(r.fillText(e,50,8),r.fillText(a+" fps",50,18)),r.restore()}(a,o.length,e,t._lastDate),t._notify(a,n,e,"progress"),o.length||(n.running=!1,t._notify(a,n,e,"complete")),i+=o.length}})),t._lastDate=e,0===i&&(t._running=!1)}},{key:"_getAnims",value:function(t){var e=this._charts,i=e.get(t);return i||(i={running:!1,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}},{key:"listen",value:function(t,e,i){this._getAnims(t).listeners[e].push(i)}},{key:"add",value:function(t,e){var i;e&&e.length&&(i=this._getAnims(t).items).push.apply(i,f(e))}},{key:"has",value:function(t){return this._getAnims(t).items.length>0}},{key:"start",value:function(t){var e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((function(t,e){return Math.max(t,e._duration)}),0),this._refresh())}},{key:"running",value:function(t){if(!this._running)return!1;var e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}},{key:"stop",value:function(t){var e=this._charts.get(t);if(e&&e.items.length){for(var i=e.items,n=i.length-1;n>=0;--n)i[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}}},{key:"remove",value:function(t){return this._charts.delete(t)}}]),t}()),ye={boolean:function(t,e,i){return i>.5?e:t},color:function(t,e,i){var n=pe.color(t||"transparent"),a=n.valid&&pe.color(e||"transparent");return a&&a.valid?a.mix(n,i).hexString():e},number:function(t,e,i){return t+(e-t)*i}},me=function(){function i(n,a,r,o){e(this,i);var s=a[r];o=Ft([n.to,o,s,n.from]);var l=Ft([n.from,s,o]);this._active=!0,this._fn=n.fn||ye[n.type||t(l)],this._easing=Dt[n.easing||"linear"],this._start=Math.floor(Date.now()+(n.delay||0)),this._duration=Math.floor(n.duration),this._loop=!!n.loop,this._target=a,this._prop=r,this._from=l,this._to=o}return n(i,[{key:"active",value:function(){return this._active}},{key:"cancel",value:function(){this._active&&(this.tick(Date.now()),this._active=!1)}},{key:"tick",value:function(t){var e,i=this,n=t-i._start,a=i._duration,r=i._prop,o=i._from,s=i._loop,l=i._to;i._active=o!==l&&(s||n<a),i._active?n<0?i._target[r]=o:(e=n/a%2,e=s&&e>1?2-e:e,e=i._easing(Math.min(1,Math.max(0,e))),i._target[r]=i._fn(o,l,e)):i._target[r]=l}}]),i}(),be=["borderColor","backgroundColor"];Ot.set("animation",{duration:1e3,easing:"easeOutQuart",onProgress:v,onComplete:v,colors:{type:"color",properties:be},numbers:{type:"number",properties:["x","y","borderWidth","radius","tension"]},active:{duration:400},resize:{duration:0},show:{colors:{type:"color",properties:be,from:"transparent"},visible:{type:"boolean",duration:0}},hide:{colors:{type:"color",properties:be,to:"transparent"},visible:{type:"boolean",easing:"easeInExpo"}}});var xe=function(){function t(i,n){e(this,t),this._chart=i,this._properties=new Map,this.configure(n)}return n(t,[{key:"configure",value:function(t){if(b(t)){var e=this._properties,i=function(t){var e={};return Object.keys(t).forEach((function(i){var n=t[i];b(n)||(e[i]=n)})),e}(t);Object.keys(t).forEach((function(n){var a=t[n];b(a)&&(a.properties||[n]).forEach((function(t){e.has(t)?t===n&&e.set(t,r({},e.get(t),a)):e.set(t,r({},i,a))}))}))}}},{key:"_animateOptions",value:function(t,e){var i=e.options,n=[];if(!i)return n;var a=t.options;return a?(a.$shared&&(t.options=a=r({},a,{$shared:!1,$animations:{}})),n=this._createAnimations(a,i)):t.options=i,n}},{key:"_createAnimations",value:function(t,e){var i,n=this._properties,a=[],r=t.$animations||(t.$animations={}),o=Object.keys(e);for(i=o.length-1;i>=0;--i){var s=o[i];if("$"!==s.charAt(0))if("options"!==s){var l=e[s],u=r[s];u&&u.cancel();var c=n.get(s);c&&c.duration?(r[s]=u=new me(c,t,s,l),a.push(u)):t[s]=l}else a.push.apply(a,f(this._animateOptions(t,e)))}return a}},{key:"update",value:function(t,e){if(0===this._properties.size)return function(t,e){var i=t.options,n=e.options;i&&n&&!n.$shared&&(i.$shared?t.options=r({},i,n,{$shared:!1}):r(i,n),delete e.options)}(t,e),void r(t,e);var i=this._createAnimations(t,e);return i.length?(ge.add(this._chart,i),!0):void 0}}]),t}(),_e=pe.options.resolve,ke=["push","pop","shift","splice","unshift"];function Me(t,e){var i=t&&t.options||{},n=i.reverse,a=void 0===i.min?e:0,r=void 0===i.max?e:0;return{start:n?r:a,end:n?a:r}}function we(t,e){var i=t._chartjs;if(i){var n=i.listeners,a=n.indexOf(e);-1!==a&&n.splice(a,1),n.length>0||(ke.forEach((function(e){delete t[e]})),delete t._chartjs)}}function Se(t,e){var i,n,a=[],r=t._getSortedDatasetMetas(e);for(i=0,n=r.length;i<n;++i)a.push(r[i].index);return a}function Pe(t,e,i,n){var a,r,o,s,l=t.keys;for(a=0,r=l.length;a<r;++a){if((o=+l[a])===i){if(n)continue;break}s=t.values[o],isNaN(s)||0!==e&&pe.math.sign(e)!==pe.math.sign(s)||(e+=s)}return e}function De(t,e){var i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function Oe(t,e,i){var n=t[e]||(t[e]={});return n[i]||(n[i]={})}function Ae(t,e){for(var i=t.chart,n=t._cachedMeta,a=i._stacks||(i._stacks={}),r=n.iScale,o=n.vScale,s=n.index,l=r.axis,u=o.axis,c=function(t,e,i){return t.id+"."+e.id+"."+i.stack+"."+i.type}(r,o,n),h=e.length,d=0;d<h;++d){var f=e[d],v=f[l],p=f[u];((f._stacks||(f._stacks={}))[u]=Oe(a,c,v))[s]=p}}function Te(t,e){var i=t.scales;return Object.keys(i).filter((function(t){return i[t].axis===e})).shift()}var Ce=function(){function t(i,n){e(this,t),this.chart=i,this._ctx=i.ctx,this.index=n,this._cachedAnimations={},this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this._config=void 0,this._parsing=!1,this._data=void 0,this._dataCopy=void 0,this._objectData=void 0,this._labels=void 0,this._scaleStacked={},this.initialize()}return n(t,[{key:"initialize",value:function(){var t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=De(t.vScale,t),this.addElements()}},{key:"updateIndex",value:function(t){this.index=t}},{key:"linkScales",value:function(){var t=this,e=t.chart,i=t._cachedMeta,n=t.getDataset(),a=i.xAxisID=n.xAxisID||Te(e,"x"),r=i.yAxisID=n.yAxisID||Te(e,"y"),o=i.rAxisID=n.rAxisID||Te(e,"r");i.xScale=t.getScaleForId(a),i.yScale=t.getScaleForId(r),i.rScale=t.getScaleForId(o),i.iScale=t._getIndexScale(),i.vScale=t._getValueScale()}},{key:"getDataset",value:function(){return this.chart.data.datasets[this.index]}},{key:"getMeta",value:function(){return this.chart.getDatasetMeta(this.index)}},{key:"getScaleForId",value:function(t){return this.chart.scales[t]}},{key:"getValueScaleId",value:function(){return this._cachedMeta.yAxisID}},{key:"getIndexScaleId",value:function(){return this._cachedMeta.xAxisID}},{key:"_getValueScale",value:function(){return this.getScaleForId(this.getValueScaleId())}},{key:"_getIndexScale",value:function(){return this.getScaleForId(this.getIndexScaleId())}},{key:"_getOtherScale",value:function(t){var e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}},{key:"reset",value:function(){this._update("reset")}},{key:"_destroy",value:function(){this._data&&we(this._data,this)}},{key:"_dataCheck",value:function(){var t,e,i=this,n=i.getDataset(),a=n.data||(n.data=[]);if(pe.isObject(a)){if(i._objectData===a)return!1;i._data=function(t){var e,i,n,a=Object.keys(t),r=new Array(a.length);for(e=0,i=a.length;e<i;++e)n=a[e],r[e]={x:n,y:t[n]};return r}(a),i._objectData=a}else{if(i._data===a&&pe.arrayEquals(a,i._dataCopy))return!1;i._data&&we(i._data,i),i._dataCopy=a.slice(0),a&&Object.isExtensible(a)&&(e=i,(t=a)._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),ke.forEach((function(e){var i="_onData"+e.charAt(0).toUpperCase()+e.slice(1),n=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];var o=n.apply(this,a);return t._chartjs.listeners.forEach((function(t){"function"==typeof t[i]&&t[i].apply(t,a)})),o}})})))),i._data=a}return!0}},{key:"_labelCheck",value:function(){var t=this._cachedMeta.iScale,e=t?t.getLabels():this.chart.data.labels;return this._labels!==e&&(this._labels=e,!0)}},{key:"addElements",value:function(){var t=this,e=t._cachedMeta;t._dataCheck();for(var i=t._data,n=e.data=new Array(i.length),a=0,r=i.length;a<r;++a)n[a]=new t.dataElementType;t.datasetElementType&&(e.dataset=new t.datasetElementType)}},{key:"buildOrUpdateElements",value:function(){var t=this,e=t._dataCheck(),i=t._labelCheck(),n=t._scaleCheck(),a=t._cachedMeta,r=t.getDataset(),o=!1;a._stacked=De(a.vScale,a),a.stack!==r.stack&&(o=!0,a._parsed.forEach((function(t){delete t._stacks[a.vScale.id][a.index]})),a.stack=r.stack),t._resyncElements(e||i||n||o),o&&Ae(t,a._parsed)}},{key:"configure",value:function(){var t=this;t._config=pe.merge({},[t.chart.options[t._type].datasets,t.getDataset()],{merger:function(t,e,i){"data"!==t&&pe._merger(t,e,i)}}),t._parsing=_e([t._config.parsing,t.chart.options.parsing,!0])}},{key:"parse",value:function(t,e){var i,n,a,r,o=this,s=o._cachedMeta,l=o._data,u=s.iScale,c=s.vScale,h=s._stacked,d=u.axis,f=!0;if(t>0&&(f=s._sorted,r=s._parsed[t-1]),!1===o._parsing)s._parsed=l,s._sorted=!0;else{for(n=pe.isArray(l[t])?o.parseArrayData(s,l,t,e):pe.isObject(l[t])?o.parseObjectData(s,l,t,e):o.parsePrimitiveData(s,l,t,e),i=0;i<e;++i)s._parsed[i+t]=a=n[i],f&&(r&&a[d]<r[d]&&(f=!1),r=a);s._sorted=f}h&&Ae(o,n),u.invalidateCaches(),c.invalidateCaches()}},{key:"parsePrimitiveData",value:function(t,e,i,n){var r,o,s,l=t.iScale,u=t.vScale,c=l.axis,h=u.axis,d=l.getLabels(),f=l===u,v=new Array(n);for(r=0,o=n;r<o;++r){var p;s=r+i,v[r]=(a(p={},c,f||l.parse(d[s],s)),a(p,h,u.parse(e[s],s)),p)}return v}},{key:"parseArrayData",value:function(t,e,i,n){var a,r,o,s,l=t.xScale,u=t.yScale,c=new Array(n);for(a=0,r=n;a<r;++a)s=e[o=a+i],c[a]={x:l.parse(s[0],o),y:u.parse(s[1],o)};return c}},{key:"parseObjectData",value:function(t,e,i,n){var a,r,o,s,l=t.xScale,u=t.yScale,c=new Array(n);for(a=0,r=n;a<r;++a)s=e[o=a+i],c[a]={x:l.parseObject(s,"x",o),y:u.parseObject(s,"y",o)};return c}},{key:"getParsed",value:function(t){return this._cachedMeta._parsed[t]}},{key:"applyStack",value:function(t,e){var i=this.chart,n=this._cachedMeta,a=e[t.axis];return Pe({keys:Se(i,!0),values:e._stacks[t.axis]},a,n.index)}},{key:"getMinMax",value:function(t,e){var i,n,a,r,o=this._cachedMeta,s=o._parsed,l=o._sorted&&t===o.iScale,u=s.length,c=this._getOtherScale(t),h=e&&o._stacked&&{keys:Se(this.chart,!0),values:null},d=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,v=function(t){var e=t.getUserBounds(),i=e.min,n=e.max,a=e.minDefined,r=e.maxDefined;return{min:a?i:Number.NEGATIVE_INFINITY,max:r?n:Number.POSITIVE_INFINITY}}(c),p=v.min,g=v.max;function y(){h&&(h.values=a._stacks[t.axis],d=Math.min(d,n),f=Math.max(f,n),n=Pe(h,n,o.index,!0)),d=Math.min(d,n),f=Math.max(f,n)}function m(){return a=s[i],n=a[t.axis],r=a[c.axis],isNaN(n)||p>r||g<r}for(i=0;i<u&&(m()||(y(),!l));++i);if(l)for(i=u-1;i>=0;--i)if(!m()){y();break}return{min:d,max:f}}},{key:"getAllParsedValues",value:function(t){var e,i,n,a=this._cachedMeta._parsed,r=[];for(e=0,i=a.length;e<i;++e)n=a[e][t.axis],isNaN(n)||r.push(n);return r}},{key:"_cacheScaleStackStatus",value:function(){var t=this._cachedMeta,e=t.iScale,i=t.vScale,n=this._scaleStacked={};e&&i&&(n[e.id]=e.options.stacked,n[i.id]=i.options.stacked)}},{key:"_scaleCheck",value:function(){var t=this._cachedMeta,e=t.iScale,i=t.vScale,n=this._scaleStacked;return!n||!e||!i||n[e.id]!==e.options.stacked||n[i.id]!==i.options.stacked}},{key:"getMaxOverflow",value:function(){return!1}},{key:"getLabelAndValue",value:function(t){var e=this._cachedMeta,i=e.iScale,n=e.vScale,a=this.getParsed(t);return{label:i?""+i.getLabelForValue(a[i.axis]):"",value:n?""+n.getLabelForValue(a[n.axis]):""}}},{key:"_update",value:function(t){var e,i,n,a,r,o=this,s=o._cachedMeta;o.configure(),o._cachedAnimations={},o._cachedDataOpts={},o.update(t),s._clip=(e=pe.valueOrDefault(o._config.clip,function(t,e,i){if(!1===i)return!1;var n=Me(t,i),a=Me(e,i);return{top:a.end,right:n.end,bottom:a.start,left:n.start}}(s.xScale,s.yScale,o.getMaxOverflow())),pe.isObject(e)?(i=e.top,n=e.right,a=e.bottom,r=e.left):i=n=a=r=e,{top:i,right:n,bottom:a,left:r}),o._cacheScaleStackStatus()}},{key:"update",value:function(t){}},{key:"draw",value:function(){var t=this._ctx,e=this._cachedMeta,i=e.data||[],n=i.length,a=0;for(e.dataset&&e.dataset.draw(t);a<n;++a)i[a].draw(t)}},{key:"_addAutomaticHoverColors",value:function(t,e){for(var i,n=pe.getHoverColor,a=this.getStyle(t),r=Object.keys(a).filter((function(t){return-1!==t.indexOf("Color")&&!(t in e)})),o=r.length-1;o>=0;o--)i=r[o],e[i]=n(a[i])}},{key:"getStyle",value:function(t,e){var i=this,n=i._cachedMeta.dataset;i._config||i.configure();var a=n&&void 0===t?i.resolveDatasetElementOptions(e):i.resolveDataElementOptions(t||0,e&&"active");return e&&i._addAutomaticHoverColors(t,a),a}},{key:"_getContext",value:function(t,e){return{chart:this.chart,dataIndex:t,dataset:this.getDataset(),datasetIndex:this.index,active:e}}},{key:"resolveDatasetElementOptions",value:function(t){var e,i,n,a,r,o=this,s=o.chart,l=o._config,u=s.options.elements[o.datasetElementType._type]||{},c=o.datasetElementOptions,h={},d=o._getContext(void 0,t);for(e=0,i=c.length;e<i;++e)n=c[e],a=t?"hover"+n.charAt(0).toUpperCase()+n.slice(1):n,void 0!==(r=_e([l[a],u[a]],d))&&(h[n]=r);return h}},{key:"resolveDataElementOptions",value:function(t,e){var i=this,n="active"===e,a=i._cachedDataOpts;if(a[e])return a[e];var r,o,s,l,u,c,h=i.chart,d=i._config,f=h.options.elements[i.dataElementType._type]||{},v=i.dataElementOptions,p={},g=i._getContext(t,n),y={cacheable:!n};if(pe.isArray(v))for(o=0,s=v.length;o<s;++o)l=v[o],c=n?"hover"+l.charAt(0).toUpperCase()+l.slice(1):l,void 0!==(u=_e([d[c],f[c]],g,t,y))&&(p[l]=u);else for(o=0,s=(r=Object.keys(v)).length;o<s;++o)l=r[o],c=n?"hover"+l.charAt(0).toUpperCase()+l.slice(1):l,void 0!==(u=_e([d[v[c]],d[c],f[c]],g,t,y))&&(p[l]=u);return y.cacheable&&(p.$shared=!0,a[e]=p),p}},{key:"_resolveAnimations",value:function(t,e,i){var n=this.chart,a=this._cachedAnimations;if(a[e=e||"default"])return a[e];var o={cacheable:!0},s=this._getContext(t,i),l=_e([this._config.animation],s,t,o),u=_e([n.options.animation],s,t,o),c=pe.mergeIf({},[l,u]);c[e]&&(c=r({},c,c[e]));var h=new xe(n,c);return o.cacheable&&(a[e]=h&&Object.freeze(h)),h}},{key:"getSharedOptions",value:function(t,e,i){if(t||(this._sharedOptions=i&&i.$shared),"reset"!==t&&i&&i.$shared&&e&&e.options&&e.options.$shared)return{target:e.options,options:i}}},{key:"includeOptions",value:function(t,e){return"hide"===t||"show"===t||"resize"!==t&&!e}},{key:"updateElement",value:function(t,e,i,n){"reset"===n||"none"===n?r(t,i):this._resolveAnimations(e,n).update(t,i)}},{key:"updateSharedOptions",value:function(t,e){t&&this._resolveAnimations(void 0,e).update(t.target,t.options)}},{key:"_setStyle",value:function(t,e,i,n){t.active=n,this._resolveAnimations(e,i,n).update(t,{options:this.getStyle(e,n)})}},{key:"removeHoverStyle",value:function(t,e,i){this._setStyle(t,i,"active",!1)}},{key:"setHoverStyle",value:function(t,e,i){this._setStyle(t,i,"active",!0)}},{key:"_removeDatasetHoverStyle",value:function(){var t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}},{key:"_setDatasetHoverStyle",value:function(){var t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}},{key:"_resyncElements",value:function(t){var e=this,i=e._cachedMeta,n=i.data.length,a=e._data.length;a>n?(e._insertElements(n,a-n),t&&n&&e.parse(0,n)):a<n?(i.data.splice(a,n-a),i._parsed.splice(a,n-a),e.parse(0,a)):t&&e.parse(0,a)}},{key:"_insertElements",value:function(t,e){var i,n,a=this,r=new Array(e),o=a._cachedMeta,s=o.data;for(i=0;i<e;++i)r[i]=new a.dataElementType;(s.splice.apply(s,[t,0].concat(r)),a._parsing)&&(n=o._parsed).splice.apply(n,[t,0].concat(f(new Array(e))));a.parse(t,e),a.updateElements(r,t,"reset")}},{key:"updateElements",value:function(t,e,i){}},{key:"_removeElements",value:function(t,e){this._parsing&&this._cachedMeta._parsed.splice(t,e),this._cachedMeta.data.splice(t,e)}},{key:"_onDataPush",value:function(){var t=arguments.length;this._insertElements(this.getDataset().data.length-t,t)}},{key:"_onDataPop",value:function(){this._removeElements(this._cachedMeta.data.length-1,1)}},{key:"_onDataShift",value:function(){this._removeElements(0,1)}},{key:"_onDataSplice",value:function(t,e){this._removeElements(t,e),this._insertElements(t,arguments.length-2)}},{key:"_onDataUnshift",value:function(){this._insertElements(0,arguments.length)}}]),t}();a(Ce,"extend",pe.inherits),Ce.prototype.datasetElementType=null,Ce.prototype.dataElementType=null,Ce.prototype.datasetElementOptions=["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth"],Ce.prototype.dataElementOptions=["backgroundColor","borderColor","borderWidth","pointStyle"];var Fe=function(){function t(){e(this,t),this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}return n(t,[{key:"tooltipPosition",value:function(t){var e=this.getProps(["x","y"],t);return{x:e.x,y:e.y}}},{key:"hasValue",value:function(){return Q(this.x)&&Q(this.y)}},{key:"getProps",value:function(t,e){var i=this,n=this.$animations;if(!e||!n)return i;var a={};return t.forEach((function(t){a[t]=n[t]&&n[t].active?n[t]._to:i[t]})),a}}]),t}();a(Fe,"extend",A);var Ee=2*Math.PI;function Ie(t,e){var i=e.startAngle,n=e.endAngle,a=e.pixelMargin,r=e.x,o=e.y,s=a/e.outerRadius;t.beginPath(),t.arc(r,o,e.outerRadius,i-s,n+s),e.innerRadius>a?(s=a/e.innerRadius,t.arc(r,o,e.innerRadius-a,n+s,i-s,!0)):t.arc(r,o,a,n+Math.PI/2,i-Math.PI/2),t.closePath(),t.clip()}function Le(t,e,i){var n=e.options,a="inner"===n.borderAlign;a?(t.lineWidth=2*n.borderWidth,t.lineJoin="round"):(t.lineWidth=n.borderWidth,t.lineJoin="bevel"),i.fullCircles&&function(t,e,i,n){var a,r=i.endAngle;for(n&&(i.endAngle=i.startAngle+Ee,Ie(t,i),i.endAngle=r,i.endAngle===i.startAngle&&i.fullCircles&&(i.endAngle+=Ee,i.fullCircles--)),t.beginPath(),t.arc(i.x,i.y,i.innerRadius,i.startAngle+Ee,i.startAngle,!0),a=0;a<i.fullCircles;++a)t.stroke();for(t.beginPath(),t.arc(i.x,i.y,e.outerRadius,i.startAngle,i.startAngle+Ee),a=0;a<i.fullCircles;++a)t.stroke()}(t,e,i,a),a&&Ie(t,i),t.beginPath(),t.arc(i.x,i.y,e.outerRadius,i.startAngle,i.endAngle),t.arc(i.x,i.y,i.innerRadius,i.endAngle,i.startAngle,!0),t.closePath(),t.stroke()}Ot.set("elements",{arc:{backgroundColor:Ot.color,borderAlign:"center",borderColor:"#fff",borderWidth:2}});var Re=function(t){function i(t){var n;return e(this,i),(n=h(this,l(i).call(this))).options=void 0,n.circumference=void 0,n.startAngle=void 0,n.endAngle=void 0,n.innerRadius=void 0,n.outerRadius=void 0,t&&r(c(n),t),n}return s(i,t),n(i,[{key:"inRange",value:function(t,e,i){var n=ot(this.getProps(["x","y"],i),{x:t,y:e}),a=n.angle,r=n.distance,o=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),s=o.startAngle,l=o.endAngle,u=o.innerRadius,c=o.outerRadius;return(o.circumference>=Ee||ut(a,s,l))&&(r>=u&&r<=c)}},{key:"getCenterPoint",value:function(t){var e=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),i=e.x,n=e.y,a=(e.startAngle+e.endAngle)/2,r=(e.innerRadius+e.outerRadius)/2;return{x:i+Math.cos(a)*r,y:n+Math.sin(a)*r}}},{key:"tooltipPosition",value:function(t){return this.getCenterPoint(t)}},{key:"draw",value:function(t){var e,i=this,n=i.options,a="inner"===n.borderAlign?.33:0,r={x:i.x,y:i.y,innerRadius:i.innerRadius,outerRadius:Math.max(i.outerRadius-a,0),pixelMargin:a,startAngle:i.startAngle,endAngle:i.endAngle,fullCircles:Math.floor(i.circumference/Ee)};if(t.save(),t.fillStyle=n.backgroundColor,t.strokeStyle=n.borderColor,r.fullCircles){for(r.endAngle=r.startAngle+Ee,t.beginPath(),t.arc(r.x,r.y,r.outerRadius,r.startAngle,r.endAngle),t.arc(r.x,r.y,r.innerRadius,r.endAngle,r.startAngle,!0),t.closePath(),e=0;e<r.fullCircles;++e)t.fill();r.endAngle=r.startAngle+i.circumference%Ee}t.beginPath(),t.arc(r.x,r.y,r.outerRadius,r.startAngle,r.endAngle),t.arc(r.x,r.y,r.innerRadius,r.endAngle,r.startAngle,!0),t.closePath(),t.fill(),n.borderWidth&&Le(t,i,r),t.restore()}}]),i}(Fe);function ze(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function Be(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:"middle"===n?i<.5?t.y:e.y:"after"===n?i<1?t.y:e.y:i>0?e.y:t.y}}function Ve(t,e,i,n){var a={x:t.controlPointNextX,y:t.controlPointNextY},r={x:e.controlPointPreviousX,y:e.controlPointPreviousY},o=ze(t,a,i),s=ze(a,r,i),l=ze(r,e,i),u=ze(o,s,i),c=ze(s,l,i);return ze(u,c,i)}function We(t){return"angle"===t?{between:ut,compare:st,normalize:lt}:{between:function(t,e,i){return t>=e&&t<=i},compare:function(t,e){return t-e},normalize:function(t){return t}}}function Ne(t,e,i,n){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n==0}}function He(t,e,i){if(!i)return[t];var n,a,r,o,s=i.property,l=i.start,u=i.end,c=e.length,h=We(s),d=h.compare,f=h.between,v=h.normalize,p=function(t,e,i){var n,a,r=i.property,o=i.start,s=i.end,l=We(r),u=l.between,c=l.normalize,h=e.length,d=t.start,f=t.end,v=t.loop;if(v){for(d+=h,f+=h,n=0,a=h;n<a&&u(c(e[d%h][r]),o,s);++n)d--,f--;d%=h,f%=h}return f<d&&(f+=h),{start:d,end:f,loop:v}}(t,e,i),g=p.start,y=p.end,m=p.loop,b=[],x=!1,_=null;for(n=g;n<=y;++n)(r=e[n%c]).skip||(x=f(a=v(r[s]),l,u),null===_&&x&&(_=n>g&&d(a,l)>0?o:n),null===_||x&&0!==d(a,u)||(b.push(Ne(_,n,m,c)),_=null),o=n);return null!==_&&b.push(Ne(_,y,m,c)),b}function je(t,e){for(var i=[],n=t.segments,a=0;a<n.length;a++){var r=He(n[a],t.points,e);r.length&&i.push.apply(i,f(r))}return i}a(Re,"_type","arc");var Ye=Ot.color;function Ue(t,e,i){t.lineTo(i.x,i.y)}function Xe(t,e,i,n){var a,r,o,s=i.start,l=i.end,u=i.loop,c=e.points,h=e.options,d=function(t){return t.stepped?Y:t.tension?U:Ue}(h),f=c.length,v=n||{},p=v.move,g=void 0===p||p,y=v.reverse,m=l<s?f+l-s:l-s;for(a=0;a<=m;++a)(r=c[(s+(y?m-a:a))%f]).skip||(g?(t.moveTo(r.x,r.y),g=!1):d(t,o,r,y,h.stepped),o=r);return u&&d(t,o,r=c[(s+(y?m:0))%f],y,h.stepped),!!u}function qe(t,e,i,n){var a,r,o,s,l,u,c=e.points,h=c.length,d=i.start,f=i.end,v=n||{},p=v.move,g=void 0===p||p,y=v.reverse,m=f<d?h+f-d:f-d,b=0,x=0;for(g&&(r=c[(d+(y?m:0))%h],t.moveTo(r.x,r.y)),a=0;a<=m;++a)if(!(r=c[(d+(y?m-a:a))%h]).skip){var _=r.x,k=r.y,M=0|_;M===o?(k<s?s=k:k>l&&(l=k),b=(x*b+_)/++x):(s!==l&&(t.lineTo(b,l),t.lineTo(b,s),t.lineTo(b,u)),t.lineTo(_,k),o=M,x=0,s=l=k),u=k}}function $e(t){var e=t.options,i=e.borderDash&&e.borderDash.length;return!(t._loop||e.tension||e.stepped||i)?qe:Xe}Ot.set("elements",{line:{backgroundColor:Ye,borderCapStyle:"butt",borderColor:Ye,borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,fill:!0,tension:.4}});var Ge=function(t){function i(t){var n;return e(this,i),(n=h(this,l(i).call(this))).options=void 0,n._loop=void 0,n._fullLoop=void 0,n._controlPointsUpdated=void 0,n._points=void 0,n._segments=void 0,t&&r(c(n),t),n}return s(i,t),n(i,[{key:"updateControlPoints",value:function(t){var e=this;if(!e._controlPointsUpdated){var i=e.options;if(i.tension&&!i.stepped){var n=i.spanGaps?e._loop:e._fullLoop;gt(e._points,i,t,n)}}}},{key:"first",value:function(){var t=this.segments,e=this.points;return t.length&&e[t[0].start]}},{key:"last",value:function(){var t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}},{key:"interpolate",value:function(t,e){var i=this.options,n=t[e],a=this.points,r=je(this,{property:e,start:n,end:n});if(r.length){var o,s,l=[],u=function(t){return t.stepped?Be:t.tension?Ve:ze}(i);for(o=0,s=r.length;o<s;++o){var c=r[o],h=c.start,d=c.end,f=a[h],v=a[d];if(f!==v){var p=u(f,v,Math.abs((n-f[e])/(v[e]-f[e])),i.stepped);p[e]=t[e],l.push(p)}else l.push(f)}return 1===l.length?l[0]:l}}},{key:"pathSegment",value:function(t,e,i){return $e(this)(t,this,e,i)}},{key:"path",value:function(t){for(var e=this.segments,i=e.length,n=$e(this),a=this._loop,r=0;r<i;++r)a&=n(t,this,e[r]);return!!a}},{key:"draw",value:function(t){this.points.length&&(t.save(),function(t,e){t.lineCap=e.borderCapStyle,t.setLineDash(e.borderDash),t.lineDashOffset=e.borderDashOffset,t.lineJoin=e.borderJoinStyle,t.lineWidth=e.borderWidth,t.strokeStyle=e.borderColor}(t,this.options),t.beginPath(),this.path(t)&&t.closePath(),t.stroke(),t.restore())}},{key:"points",set:function(t){this._points=t,delete this._segments},get:function(){return this._points}},{key:"segments",get:function(){return this._segments||(this._segments=function(t){var e=t.points,i=t.options.spanGaps,n=e.length;if(!n)return[];var a=!!t._loop,r=function(t,e,i,n){var a=0,r=e-1;if(i&&!n)for(;a<e&&!t[a].skip;)a++;for(;a<e&&t[a].skip;)a++;for(a%=e,i&&(r+=a);r>a&&t[r%e].skip;)r--;return{start:a,end:r%=e}}(e,n,a,i),o=r.start,s=r.end;return!0===i?[{start:o,end:s,loop:a}]:function(t,e,i,n){var a,r=t.length,o=[],s=e,l=t[e];for(a=e+1;a<=i;++a){var u=t[a%r];u.skip||u.stop?l.skip||(n=!1,o.push({start:e%r,end:(a-1)%r,loop:n}),e=s=u.stop?a:null):(s=a,l.skip&&(e=a)),l=u}return null!==s&&o.push({start:e%r,end:s%r,loop:n}),o}(e,o,s<o?s+n:s,!!t._fullLoop&&0===o&&s===n-1)}(this))}}]),i}(Fe);a(Ge,"_type","line");var Ke=Ot.color;Ot.set("elements",{point:{backgroundColor:Ke,borderColor:Ke,borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3}});var Ze=function(t){function i(t){var n;return e(this,i),(n=h(this,l(i).call(this))).options=void 0,n.skip=void 0,n.stop=void 0,t&&r(c(n),t),n}return s(i,t),n(i,[{key:"inRange",value:function(t,e,i){var n=this.options,a=this.getProps(["x","y"],i),r=a.x,o=a.y;return Math.pow(t-r,2)+Math.pow(e-o,2)<Math.pow(n.hitRadius+n.radius,2)}},{key:"inXRange",value:function(t,e){var i=this.options,n=this.getProps(["x"],e).x;return Math.abs(t-n)<i.radius+i.hitRadius}},{key:"inYRange",value:function(t,e){var i=this.options,n=this.getProps(["x"],e).y;return Math.abs(t-n)<i.radius+i.hitRadius}},{key:"getCenterPoint",value:function(t){var e=this.getProps(["x","y"],t);return{x:e.x,y:e.y}}},{key:"size",value:function(){var t=this.options||{},e=Math.max(t.radius,t.hoverRadius)||0;return 2*(e+(e&&t.borderWidth||0))}},{key:"draw",value:function(t,e){var i=this,n=i.options;i.skip||n.radius<=0||(void 0===e||N(i,e))&&(t.strokeStyle=n.borderColor,t.lineWidth=n.borderWidth,t.fillStyle=n.backgroundColor,W(t,n,i.x,i.y))}},{key:"getRange",value:function(){var t=this.options||{};return t.radius+t.hitRadius}}]),i}(Fe);a(Ze,"_type","point");var Qe=Ot.color;function Je(t,e){var i,n,a,r,o,s=t.getProps(["x","y","base","width","height"],e),l=s.x,u=s.y,c=s.base,h=s.width,d=s.height;return t.horizontal?(o=d/2,i=Math.min(l,c),n=Math.max(l,c),a=u-o,r=u+o):(i=l-(o=h/2),n=l+o,a=Math.min(u,c),r=Math.max(u,c)),{left:i,top:a,right:n,bottom:r}}function ti(t,e,i){return t===e?i:t===i?e:t}function ei(t,e,i,n){return t?0:Math.max(Math.min(e,n),i)}function ii(t,e,i){var n,a,r,o,s=t.options.borderWidth,l=function(t){var e=t.options.borderSkipped,i={};return e?(t.horizontal?t.base>t.x&&(e=ti(e,"left","right")):t.base<t.y&&(e=ti(e,"bottom","top")),i[e]=!0,i):i}(t);return b(s)?(n=+s.top||0,a=+s.right||0,r=+s.bottom||0,o=+s.left||0):n=a=r=o=+s||0,{t:ei(l.top,n,0,i),r:ei(l.right,a,0,e),b:ei(l.bottom,r,0,i),l:ei(l.left,o,0,e)}}function ni(t,e,i,n){var a=null===e,r=null===i,o=!(!t||a&&r)&&Je(t,n);return o&&(a||e>=o.left&&e<=o.right)&&(r||i>=o.top&&i<=o.bottom)}Ot.set("elements",{rectangle:{backgroundColor:Qe,borderColor:Qe,borderSkipped:"bottom",borderWidth:0}});var ai=function(t){function i(t){var n;return e(this,i),(n=h(this,l(i).call(this))).options=void 0,n.horizontal=void 0,n.base=void 0,n.width=void 0,n.height=void 0,t&&r(c(n),t),n}return s(i,t),n(i,[{key:"draw",value:function(t){var e,i,n,a,r,o=this.options,s=(i=Je(e=this),n=i.right-i.left,a=i.bottom-i.top,r=ii(e,n/2,a/2),{outer:{x:i.left,y:i.top,w:n,h:a},inner:{x:i.left+r.l,y:i.top+r.t,w:n-r.l-r.r,h:a-r.t-r.b}}),l=s.inner,u=s.outer;t.save(),u.w===l.w&&u.h===l.h||(t.beginPath(),t.rect(u.x,u.y,u.w,u.h),t.clip(),t.rect(l.x,l.y,l.w,l.h),t.fillStyle=o.borderColor,t.fill("evenodd")),t.fillStyle=o.backgroundColor,t.fillRect(l.x,l.y,l.w,l.h),t.restore()}},{key:"inRange",value:function(t,e,i){return ni(this,t,e,i)}},{key:"inXRange",value:function(t,e){return ni(this,t,null,e)}},{key:"inYRange",value:function(t,e){return ni(this,null,t,e)}},{key:"getCenterPoint",value:function(t){var e=this.getProps(["x","y","base","horizontal",t]),i=e.x,n=e.y,a=e.base,r=e.horizontal;return{x:r?(i+a)/2:i,y:r?n:(n+a)/2}}},{key:"getRange",value:function(t){return"x"===t?this.width/2:this.height/2}}]),i}(Fe);a(ai,"_type","rectangle");var ri=Object.freeze({__proto__:null,Arc:Re,Line:Ge,Point:Ze,Rectangle:ai});function oi(t,e,i){var n,a,r=i.barThickness,o=e.stackCount,s=e.pixels[t],l=y(r)?function(t,e){var i,n,a,r,o=t._length;for(a=1,r=e.length;a<r;++a)o=Math.min(o,Math.abs(e[a]-e[a-1]));for(a=0,r=t.ticks.length;a<r;++a)n=t.getPixelForTick(a),o=a>0?Math.min(o,Math.abs(n-i)):o,i=n;return o}(e.scale,e.pixels):-1;return y(r)?(n=l*i.categoryPercentage,a=i.barPercentage):(n=r*o,a=1),{chunk:n/o,ratio:a,start:s-n/2}}function si(t,e,i,n){var a=i.parse(t[0],n),r=i.parse(t[1],n),o=Math.min(a,r),s=Math.max(a,r),l=o,u=s;Math.abs(o)>Math.abs(s)&&(l=s,u=o),e[i.axis]=u,e._custom={barStart:l,barEnd:u,start:a,end:r,min:o,max:s}}function li(t,e,i,n){var a,r,o,s,l=t.iScale,u=t.vScale,c=l.getLabels(),h=l===u,d=[];for(a=i,r=i+n;a<r;++a)s=e[a],(o={})[l.axis]=h||l.parse(c[a],a),m(s)?si(s,o,u,a):o[u.axis]=u.parse(s,a),d.push(o);return d}function ui(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}Ot.set("bar",{hover:{mode:"index"},datasets:{categoryPercentage:.8,barPercentage:.9,animation:{numbers:{type:"number",properties:["x","y","base","width","height"]}}},scales:{x:{type:"category",offset:!0,gridLines:{offsetGridLines:!0}},y:{type:"linear",beginAtZero:!0}}});var ci=function(t){function i(){return e(this,i),h(this,l(i).apply(this,arguments))}return s(i,t),n(i,[{key:"parsePrimitiveData",value:function(t,e,i,n){return li(t,e,i,n)}},{key:"parseArrayData",value:function(t,e,i,n){return li(t,e,i,n)}},{key:"parseObjectData",value:function(t,e,i,n){var a,r,o,s,l,u=t.iScale,c=t.vScale,h=c.axis,d=[];for(a=i,r=i+n;a<r;++a)s=e[a],(o={})[u.axis]=u.parseObject(s,u.axis,a),m(l=s[h])?si(l,o,c,a):o[c.axis]=c.parseObject(s,h,a),d.push(o);return d}},{key:"getLabelAndValue",value:function(t){var e=this._cachedMeta,i=e.iScale,n=e.vScale,a=this.getParsed(t),r=a._custom,o=ui(r)?"["+r.start+", "+r.end+"]":""+n.getLabelForValue(a[n.axis]);return{label:""+i.getLabelForValue(a[i.axis]),value:o}}},{key:"initialize",value:function(){d(l(i.prototype),"initialize",this).call(this);var t=this._cachedMeta;t.stack=this.getDataset().stack,t.bar=!0}},{key:"update",value:function(t){var e=this._cachedMeta;this.updateElements(e.data,0,t)}},{key:"updateElements",value:function(t,e,i){var n,a=this,r="reset"===i,o=a._cachedMeta.vScale,s=o.getBasePixel(),l=o.isHorizontal(),u=a._getRuler(),c=a.resolveDataElementOptions(e,i),h=a.getSharedOptions(i,t[e],c),d=a.includeOptions(i,h);for(n=0;n<t.length;n++){var f=e+n,v=a.resolveDataElementOptions(f,i),p=a._calculateBarValuePixels(f,v),g=a._calculateBarIndexPixels(f,u,v),y={horizontal:l,base:r?s:p.base,x:l?r?s:p.head:g.center,y:l?g.center:r?s:p.head,height:l?g.size:void 0,width:l?void 0:g.size};d&&(y.options=v),a.updateElement(t[n],f,y,i)}a.updateSharedOptions(h,i)}},{key:"_getStacks",value:function(t){var e,i,n=this._cachedMeta.iScale,a=n.getMatchingVisibleMetas(this._type),r=n.options.stacked,o=a.length,s=[];for(e=0;e<o&&(i=a[e],(!1===r||-1===s.indexOf(i.stack)||void 0===r&&void 0===i.stack)&&s.push(i.stack),i.index!==t);++e);return s.length||s.push(void 0),s}},{key:"_getStackCount",value:function(){return this._getStacks().length}},{key:"_getStackIndex",value:function(t,e){var i=this._getStacks(t),n=void 0!==e?i.indexOf(e):-1;return-1===n?i.length-1:n}},{key:"_getRuler",value:function(){var t,e,i=this._cachedMeta,n=i.iScale,a=[];for(t=0,e=i.data.length;t<e;++t)a.push(n.getPixelForValue(this.getParsed(t)[n.axis]));return{pixels:a,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n}}},{key:"_calculateBarValuePixels",value:function(t,e){var i,n,a=this._cachedMeta,r=a.vScale,o=e.minBarLength,s=this.getParsed(t),l=s._custom,u=s[r.axis],c=0,h=a._stacked?this.applyStack(r,s):u;h!==u&&(c=h-u,h=u),ui(l)&&(u=l.barStart,h=l.barEnd-l.barStart,0!==u&&it(u)!==it(l.barEnd)&&(c=0),c+=u);var d=ct(r.getPixelForValue(c),r._startPixel-10,r._endPixel+10);return n=(i=r.getPixelForValue(c+h))-d,void 0!==o&&Math.abs(n)<o&&(i=d+(n=n<0?-o:o)),{size:n,base:d,head:i,center:i+n/2}}},{key:"_calculateBarIndexPixels",value:function(t,e,i){var n="flex"===i.barThickness?function(t,e,i){var n=e.pixels,a=n[t],r=t>0?n[t-1]:null,o=t<n.length-1?n[t+1]:null,s=i.categoryPercentage;null===r&&(r=a-(null===o?e.end-e.start:o-a)),null===o&&(o=a+a-r);var l=a-(a-Math.min(r,o))/2*s;return{chunk:Math.abs(o-r)/2*s/e.stackCount,ratio:i.barPercentage,start:l}}(t,e,i):oi(t,e,i),a=this._getStackIndex(this.index,this._cachedMeta.stack),r=n.start+n.chunk*a+n.chunk/2,o=Math.min(_(i.maxBarThickness,1/0),n.chunk*n.ratio);return{base:r-o/2,head:r+o/2,center:r,size:o}}},{key:"draw",value:function(){var t=this.chart,e=this._cachedMeta,i=e.vScale,n=e.data,a=n.length,r=0;for(H(t.ctx,t.chartArea);r<a;++r)isNaN(this.getParsed(r)[i.axis])||n[r].draw(this._ctx);j(t.ctx)}}]),i}(Ce);ci.prototype.dataElementType=ai,ci.prototype.dataElementOptions=["backgroundColor","borderColor","borderSkipped","borderWidth","barPercentage","barThickness","categoryPercentage","maxBarThickness","minBarLength"],Ot.set("bubble",{animation:{numbers:{properties:["x","y","borderWidth","radius"]}},scales:{x:{type:"linear"},y:{type:"linear"}},tooltips:{callbacks:{title:function(){return""}}}});var hi=function(t){function i(){return e(this,i),h(this,l(i).apply(this,arguments))}return s(i,t),n(i,[{key:"parseObjectData",value:function(t,e,i,n){var a,r,o,s=t.xScale,l=t.yScale,u=[];for(a=i,r=i+n;a<r;++a)o=e[a],u.push({x:s.parseObject(o,"x",a),y:l.parseObject(o,"y",a),_custom:o&&o.r&&+o.r});return u}},{key:"getMaxOverflow",value:function(){for(var t=(this._cachedMeta.data||[]).length-1,e=0;t>=0;--t)e=Math.max(e,this.getStyle(t,!0).radius);return e>0&&e}},{key:"getLabelAndValue",value:function(t){var e=this._cachedMeta,i=e.xScale,n=e.yScale,a=this.getParsed(t),r=i.getLabelForValue(a.x),o=n.getLabelForValue(a.y),s=a._custom;return{label:e.label,value:"("+r+", "+o+(s?", "+s:"")+")"}}},{key:"update",value:function(t){var e=this._cachedMeta.data;this.updateElements(e,0,t)}},{key:"updateElements",value:function(t,e,i){for(var n=this,a="reset"===i,r=n._cachedMeta,o=r.xScale,s=r.yScale,l=n.resolveDataElementOptions(e,i),u=n.getSharedOptions(i,t[e],l),c=n.includeOptions(i,u),h=0;h<t.length;h++){var d=t[h],f=e+h,v=!a&&n.getParsed(f),p=a?o.getPixelForDecimal(.5):o.getPixelForValue(v.x),g=a?s.getBasePixel():s.getPixelForValue(v.y),y={x:p,y:g,skip:isNaN(p)||isNaN(g)};c&&(y.options=n.resolveDataElementOptions(h,i),a&&(y.options.radius=0)),n.updateElement(d,f,y,i)}n.updateSharedOptions(u,i)}},{key:"resolveDataElementOptions",value:function(t,e){var n=this,a=n.chart,o=n.getDataset(),s=n.getParsed(t),u=d(l(i.prototype),"resolveDataElementOptions",this).call(this,t,e),c={chart:a,dataIndex:t,dataset:o,datasetIndex:n.index};return u.$shared&&(u=r({},u,{$shared:!1})),"active"!==e&&(u.radius=0),u.radius+=Ft([s&&s._custom,n._config.radius,a.options.elements.point.radius],c,t),u}}]),i}(Ce);hi.prototype.dataElementType=Ze,hi.prototype.dataElementOptions=["backgroundColor","borderColor","borderWidth","hitRadius","radius","pointStyle","rotation"];var di=Math.PI,fi=2*di,vi=di/2;Ot.set("doughnut",{animation:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y"]},animateRotate:!0,animateScale:!1},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(e,i){var n=t.getDatasetMeta(0).controller.getStyle(i);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,hidden:!t.getDataVisibility(i),index:i}})):[]}},onClick:function(t,e){this.chart.toggleDataVisibility(e.index),this.chart.update()}},cutoutPercentage:50,rotation:-vi,circumference:fi,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.labels[t.index],n=": "+e.datasets[t.datasetIndex].data[t.index];return m(i)?(i=i.slice())[0]+=n:i+=n,i}}}});var pi=function(t){function i(t,n){var a;return e(this,i),(a=h(this,l(i).call(this,t,n))).innerRadius=void 0,a.outerRadius=void 0,a.offsetX=void 0,a.offsetY=void 0,a}return s(i,t),n(i,[{key:"linkScales",value:function(){}},{key:"parse",value:function(t,e){var i,n,a=this.getDataset().data,r=this._cachedMeta;for(i=t,n=t+e;i<n;++i)r._parsed[i]=+a[i]}},{key:"getRingIndex",value:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&++e;return e}},{key:"update",value:function(t){var e=this,i=e.chart,n=i.chartArea,a=i.options,r=e._cachedMeta,o=r.data,s=a.cutoutPercentage/100||0,l=e._getRingWeight(e.index),u=function(t,e,i){var n=1,a=1,r=0,o=0;if(e<fi){var s=t%fi,l=(s+=s>=di?-fi:s<-di?fi:0)+e,u=Math.cos(s),c=Math.sin(s),h=Math.cos(l),d=Math.sin(l),f=s<=0&&l>=0||l>=fi,v=s<=vi&&l>=vi||l>=fi+vi,p=s<=-vi&&l>=-vi||l>=di+vi,g=s===-di||l>=di?-1:Math.min(u,u*i,h,h*i),y=p?-1:Math.min(c,c*i,d,d*i),m=f?1:Math.max(u,u*i,h,h*i),b=v?1:Math.max(c,c*i,d,d*i);n=(m-g)/2,a=(b-y)/2,r=-(m+g)/2,o=-(b+y)/2}return{ratioX:n,ratioY:a,offsetX:r,offsetY:o}}(a.rotation,a.circumference,s),c=u.ratioX,h=u.ratioY,d=u.offsetX,f=u.offsetY,v=e.getMaxBorderWidth(),p=(n.right-n.left-v)/c,g=(n.bottom-n.top-v)/h,y=Math.max(Math.min(p,g)/2,0),m=(y-Math.max(y*s,0))/e._getVisibleDatasetWeightTotal();e.offsetX=d*y,e.offsetY=f*y,r.total=e.calculateTotal(),e.outerRadius=y-m*e._getRingWeightOffset(e.index),e.innerRadius=Math.max(e.outerRadius-m*l,0),e.updateElements(o,0,t)}},{key:"_circumference",value:function(t,e){var i=this.chart.options,n=this._cachedMeta;return e&&i.animation.animateRotate?0:this.chart.getDataVisibility(t)?this.calculateCircumference(n._parsed[t]*i.circumference/fi):0}},{key:"updateElements",value:function(t,e,i){var n,a=this,r="reset"===i,o=a.chart,s=o.chartArea,l=o.options,u=l.animation,c=(s.left+s.right)/2,h=(s.top+s.bottom)/2,d=r&&u.animateScale,f=d?0:a.innerRadius,v=d?0:a.outerRadius,p=a.resolveDataElementOptions(e,i),g=a.getSharedOptions(i,t[e],p),y=a.includeOptions(i,g),m=l.rotation;for(n=0;n<e;++n)m+=a._circumference(n,r);for(n=0;n<t.length;++n){var b=e+n,x=a._circumference(b,r),_=t[n],k={x:c+a.offsetX,y:h+a.offsetY,startAngle:m,endAngle:m+x,circumference:x,outerRadius:v,innerRadius:f};y&&(k.options=a.resolveDataElementOptions(b,i)),m+=x,a.updateElement(_,b,k,i)}a.updateSharedOptions(g,i)}},{key:"calculateTotal",value:function(){var t,e=this._cachedMeta,i=e.data,n=0;for(t=0;t<i.length;t++){var a=e._parsed[t];!isNaN(a)&&this.chart.getDataVisibility(t)&&(n+=Math.abs(a))}return n}},{key:"calculateCircumference",value:function(t){var e=this._cachedMeta.total;return e>0&&!isNaN(t)?fi*(Math.abs(t)/e):0}},{key:"getMaxBorderWidth",value:function(t){var e,i,n,a,r,o=0,s=this.chart;if(!t)for(e=0,i=s.data.datasets.length;e<i;++e)if(s.isDatasetVisible(e)){t=(n=s.getDatasetMeta(e)).data,(a=n.controller)!==this&&a.configure();break}if(!t)return 0;for(e=0,i=t.length;e<i;++e)"inner"!==(r=a.resolveDataElementOptions(e)).borderAlign&&(o=Math.max(o,r.borderWidth||0,r.hoverBorderWidth||0));return o}},{key:"_getRingWeightOffset",value:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}},{key:"_getRingWeight",value:function(t){return Math.max(_(this.chart.data.datasets[t].weight,1),0)}},{key:"_getVisibleDatasetWeightTotal",value:function(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}]),i}(Ce);pi.prototype.dataElementType=Re,pi.prototype.dataElementOptions=["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],Ot.set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{x:{type:"linear",beginAtZero:!0},y:{type:"category",offset:!0,gridLines:{offsetGridLines:!0}}},datasets:{categoryPercentage:.8,barPercentage:.9},elements:{rectangle:{borderSkipped:"left"}},tooltips:{mode:"index",axis:"y"}});var gi=function(t){function i(){return e(this,i),h(this,l(i).apply(this,arguments))}return s(i,t),n(i,[{key:"getValueScaleId",value:function(){return this._cachedMeta.xAxisID}},{key:"getIndexScaleId",value:function(){return this._cachedMeta.yAxisID}}]),i}(ci);Ot.set("line",{showLines:!0,spanGaps:!1,hover:{mode:"index"},scales:{x:{type:"category"},y:{type:"linear"}}});var yi=function(t){function i(t,n){var a;return e(this,i),(a=h(this,l(i).call(this,t,n)))._showLine=!1,a}return s(i,t),n(i,[{key:"update",value:function(t){var e=this,i=e._cachedMeta,n=i.dataset,a=i.data||[],r=e.chart.options,o=e._config;if((e._showLine=_(o.showLine,r.showLines))&&"resize"!==t){var s={points:a,options:e.resolveDatasetElementOptions()};e.updateElement(n,void 0,s,t)}e.updateElements(a,0,t)}},{key:"updateElements",value:function(t,e,i){for(var n,a=this,r="reset"===i,o=a._cachedMeta,s=o.xScale,l=o.yScale,u=o._stacked,c=a.resolveDataElementOptions(e,i),h=a.getSharedOptions(i,t[e],c),d=a.includeOptions(i,h),f=_(a._config.spanGaps,a.chart.options.spanGaps),v=Q(f)?f:Number.POSITIVE_INFINITY,p=0;p<t.length;++p){var g=e+p,y=t[p],m=a.getParsed(g),b=s.getPixelForValue(m.x),x=r?l.getBasePixel():l.getPixelForValue(u?a.applyStack(l,m):m.y),k={x:b,y:x,skip:isNaN(b)||isNaN(x),stop:p>0&&m.x-n.x>v};d&&(k.options=a.resolveDataElementOptions(g,i)),a.updateElement(y,g,k,i),n=m}a.updateSharedOptions(h,i)}},{key:"resolveDatasetElementOptions",value:function(t){var e=this._config,n=this.chart.options,a=n.elements.line,r=d(l(i.prototype),"resolveDatasetElementOptions",this).call(this,t);return r.spanGaps=_(e.spanGaps,n.spanGaps),r.tension=_(e.lineTension,a.tension),r.stepped=Ft([e.stepped,a.stepped]),r}},{key:"getMaxOverflow",value:function(){var t=this._cachedMeta,e=this._showLine&&t.dataset.options.borderWidth||0,i=t.data||[];if(!i.length)return e;var n=i[0].size(),a=i[i.length-1].size();return Math.max(e,n,a)/2}},{key:"draw",value:function(){var t,e,i=this._ctx,n=this.chart,a=this._cachedMeta,r=a.data||[],o=n.chartArea,s=[],l=r.length;for(this._showLine&&a.dataset.draw(i,o),t=0;t<l;++t)(e=r[t]).active?s.push(e):e.draw(i,o);for(t=0,l=s.length;t<l;++t)s[t].draw(i,o)}}]),i}(Ce);yi.prototype.datasetElementType=Ge,yi.prototype.dataElementType=Ze,yi.prototype.datasetElementOptions=["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth","capBezierPoints","cubicInterpolationMode","fill"],yi.prototype.dataElementOptions={backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverHitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},Ot.set("polarArea",{animation:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]},animateRotate:!0,animateScale:!0},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,gridLines:{circular:!0},pointLabels:{display:!1}}},startAngle:0,legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(e,i){var n=t.getDatasetMeta(0).controller.getStyle(i);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,hidden:!t.getDataVisibility(i),index:i}})):[]}},onClick:function(t,e){this.chart.toggleDataVisibility(e.index),this.chart.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.value}}}});var mi=function(t){function i(t,n){var a;return e(this,i),(a=h(this,l(i).call(this,t,n))).innerRadius=void 0,a.outerRadius=void 0,a}return s(i,t),n(i,[{key:"getIndexScaleId",value:function(){return this._cachedMeta.rAxisID}},{key:"getValueScaleId",value:function(){return this._cachedMeta.rAxisID}},{key:"update",value:function(t){var e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,t)}},{key:"_updateRadius",value:function(){var t=this,e=t.chart,i=e.chartArea,n=e.options,a=Math.min(i.right-i.left,i.bottom-i.top),r=Math.max(a/2,0),o=(r-Math.max(n.cutoutPercentage?r/100*n.cutoutPercentage:1,0))/e.getVisibleDatasetCount();t.outerRadius=r-o*t.index,t.innerRadius=t.outerRadius-o}},{key:"updateElements",value:function(t,e,i){var n,a=this,r="reset"===i,o=a.chart,s=a.getDataset(),l=o.options,u=l.animation,c=o.scales.r,h=c.xCenter,d=c.yCenter,f=nt(l.startAngle)-.5*Math.PI,v=f;for(a._cachedMeta.count=a.countVisibleElements(),n=0;n<e;++n)v+=a._computeAngle(n);for(n=0;n<t.length;n++){var p=t[n],g=e+n,y=v,m=v+a._computeAngle(g),b=this.chart.getDataVisibility(g)?c.getDistanceFromCenterForValue(s.data[g]):0;v=m,r&&(u.animateScale&&(b=0),u.animateRotate&&(y=f,m=f));var x={x:h,y:d,innerRadius:0,outerRadius:b,startAngle:y,endAngle:m,options:a.resolveDataElementOptions(g)};a.updateElement(p,g,x,i)}}},{key:"countVisibleElements",value:function(){var t=this,e=this.getDataset(),i=this._cachedMeta,n=0;return i.data.forEach((function(i,a){!isNaN(e.data[a])&&t.chart.getDataVisibility(a)&&n++})),n}},{key:"_computeAngle",value:function(t){var e=this,i=e._cachedMeta.count,n=e.getDataset();if(isNaN(n.data[t])||!this.chart.getDataVisibility(t))return 0;var a={chart:e.chart,dataIndex:t,dataset:n,datasetIndex:e.index};return Ft([e.chart.options.elements.arc.angle,2*Math.PI/i],a,t)}}]),i}(Ce);mi.prototype.dataElementType=Re,mi.prototype.dataElementOptions=["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],Ot.set("pie",w(Ot.doughnut)),Ot.set("pie",{cutoutPercentage:0}),Ot.set("radar",{spanGaps:!1,scales:{r:{type:"radialLinear"}},elements:{line:{tension:0}}});var bi=function(t){function i(){return e(this,i),h(this,l(i).apply(this,arguments))}return s(i,t),n(i,[{key:"getIndexScaleId",value:function(){return this._cachedMeta.rAxisID}},{key:"getValueScaleId",value:function(){return this._cachedMeta.rAxisID}},{key:"getLabelAndValue",value:function(t){var e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}},{key:"update",value:function(t){var e=this,i=e._cachedMeta,n=i.dataset,a=i.data||[],r={points:a,_loop:!0,_fullLoop:i.iScale.getLabels().length===a.length,options:e.resolveDatasetElementOptions()};e.updateElement(n,void 0,r,t),e.updateElements(a,0,t),n.updateControlPoints(e.chart.chartArea)}},{key:"updateElements",value:function(t,e,i){var n,a=this.getDataset(),r=this.chart.scales.r,o="reset"===i;for(n=0;n<t.length;n++){var s=t[n],l=e+n,u=this.resolveDataElementOptions(l),c=r.getPointPositionForValue(l,a.data[l]),h=o?r.xCenter:c.x,d=o?r.yCenter:c.y,f={x:h,y:d,angle:c.angle,skip:isNaN(h)||isNaN(d),options:u};this.updateElement(s,l,f,i)}}},{key:"resolveDatasetElementOptions",value:function(t){var e=this._config,n=this.chart.options,a=d(l(i.prototype),"resolveDatasetElementOptions",this).call(this,t);return a.spanGaps=_(e.spanGaps,n.spanGaps),a.tension=_(e.lineTension,n.elements.line.tension),a}}]),i}(Ce);bi.prototype.datasetElementType=Ge,bi.prototype.dataElementType=Ze,bi.prototype.datasetElementOptions=["backgroundColor","borderColor","borderCapStyle","borderDash","borderDashOffset","borderJoinStyle","borderWidth","fill"],bi.prototype.dataElementOptions={backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},Ot.set("scatter",{scales:{x:{type:"linear"},y:{type:"linear"}},datasets:{showLine:!1},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.label+", "+t.value+")"}}}});var xi={bar:ci,bubble:hi,doughnut:pi,horizontalBar:gi,line:yi,polarArea:mi,pie:pi,radar:bi,scatter:yi};function _i(t,e,i){for(var n,a=t.length-1,r=0;a-r>1;)t[n=r+a>>1][e]<i?r=n:a=n;return{lo:r,hi:a}}function ki(t,e,i){for(var n,a=t.length-1,r=0;a-r>1;)t[n=r+a>>1][e]<i?a=n:r=n;return{lo:r,hi:a}}function Mi(t,e){return"native"in t?{x:t.x,y:t.y}:pe.dom.getRelativePosition(t,e)}function wi(t,e){for(var i,n,a,r=t.getSortedVisibleDatasetMetas(),o=0,s=r.length;o<s;++o){var l=r[o];i=l.index;for(var u=0,c=(n=l.data).length;u<c;++u)(a=n[u]).skip||e(a,i,u)}}function Si(t,e,i,n){var a=t.controller,r=t.data,o=t._sorted,s=a._cachedMeta.iScale;if(s&&e===s.axis&&o&&r.length){var l=s._reversePixels?ki:_i;if(!n)return l(r,e,i);if(a._sharedOptions){var u=r[0],c="function"==typeof u.getRange&&u.getRange(e);if(c){var h=l(r,e,i-c),d=l(r,e,i+c);return{lo:h.lo,hi:d.hi}}}}return{lo:0,hi:r.length-1}}function Pi(t,e,i,n,a){for(var r=t.getSortedVisibleDatasetMetas(),o=i[e],s=0,l=r.length;s<l;++s)for(var u=r[s],c=u.index,h=u.data,d=Si(r[s],e,o,a),f=d.lo,v=d.hi,p=f;p<=v;++p){var g=h[p];g.skip||n(g,c,p)}}function Di(t,e,i,n){var a=[];if(!N(e,t.chartArea))return a;return Pi(t,i,e,(function(t,i,r){t.inRange(e.x,e.y,n)&&a.push({element:t,datasetIndex:i,index:r})}),!0),a}function Oi(t,e,i,n,a){var r=function(t){var e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){var a=e?Math.abs(t.x-n.x):0,r=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}(i),o=Number.POSITIVE_INFINITY,s=[];if(!N(e,t.chartArea))return s;return Pi(t,i,e,(function(t,i,l){if(!n||t.inRange(e.x,e.y,a)){var u=t.getCenterPoint(a),c=r(e,u);c<o?(s=[{element:t,datasetIndex:i,index:l}],o=c):c===o&&s.push({element:t,datasetIndex:i,index:l})}})),s}var Ai={modes:{index:function(t,e,i,n){var a=Mi(e,t),r=i.axis||"x",o=i.intersect?Di(t,a,r,n):Oi(t,a,r,!1,n),s=[];return o.length?(t.getSortedVisibleDatasetMetas().forEach((function(t){var e=o[0].index,i=t.data[e];i&&!i.skip&&s.push({element:i,datasetIndex:t.index,index:e})})),s):[]},dataset:function(t,e,i,n){var a=Mi(e,t),r=i.axis||"xy",o=i.intersect?Di(t,a,r,n):Oi(t,a,r,!1,n);if(o.length>0){var s=o[0].datasetIndex,l=t.getDatasetMeta(s).data;o=[];for(var u=0;u<l.length;++u)o.push({element:l[u],datasetIndex:s,index:u})}return o},point:function(t,e,i,n){return Di(t,Mi(e,t),i.axis||"xy",n)},nearest:function(t,e,i,n){return Oi(t,Mi(e,t),i.axis||"xy",i.intersect,n)},x:function(t,e,i,n){var a=Mi(e,t),r=[],o=!1;return wi(t,(function(t,e,i){t.inXRange(a.x,n)&&r.push({element:t,datasetIndex:e,index:i}),t.inRange(a.x,a.y,n)&&(o=!0)})),i.intersect&&!o?[]:r},y:function(t,e,i,n){var a=Mi(e,t),r=[],o=!1;return wi(t,(function(t,e,i){t.inYRange(a.y,n)&&r.push({element:t,datasetIndex:e,index:i}),t.inRange(a.x,a.y,n)&&(o=!0)})),i.intersect&&!o?[]:r}}},Ti=["left","top","right","bottom"];function Ci(t,e){return t.filter((function(t){return t.pos===e}))}function Fi(t,e){return t.filter((function(t){return-1===Ti.indexOf(t.pos)&&t.box.axis===e}))}function Ei(t,e){return t.sort((function(t,i){var n=e?i:t,a=e?t:i;return n.weight===a.weight?n.index-a.index:n.weight-a.weight}))}function Ii(t,e,i,n){return Math.max(t[i],e[i])+Math.max(t[n],e[n])}function Li(t,e,i){var n=i.box,a=t.maxPadding;if(i.size&&(t[i.pos]-=i.size),i.size=i.horizontal?n.height:n.width,t[i.pos]+=i.size,n.getPadding){var r=n.getPadding();a.top=Math.max(a.top,r.top),a.left=Math.max(a.left,r.left),a.bottom=Math.max(a.bottom,r.bottom),a.right=Math.max(a.right,r.right)}var o=e.outerWidth-Ii(a,t,"left","right"),s=e.outerHeight-Ii(a,t,"top","bottom");if(o!==t.w||s!==t.h)return t.w=o,t.h=s,i.horizontal?o!==t.w:s!==t.h}function Ri(t,e){var i=e.maxPadding;function n(t){var n={left:0,top:0,right:0,bottom:0};return t.forEach((function(t){n[t]=Math.max(e[t],i[t])})),n}return n(t?["left","right"]:["top","bottom"])}function zi(t,e,i){var n,a,r,o,s,l,u=[];for(n=0,a=t.length;n<a;++n)(o=(r=t[n]).box).update(r.width||e.w,r.height||e.h,Ri(r.horizontal,e)),Li(e,i,r)&&(l=!0,u.length&&(s=!0)),o.fullWidth||u.push(r);return s&&zi(u,e,i)||l}function Bi(t,e,i){var n,a,r,o,s=i.padding,l=e.x,u=e.y;for(n=0,a=t.length;n<a;++n)o=(r=t[n]).box,r.horizontal?(o.left=o.fullWidth?s.left:e.left,o.right=o.fullWidth?i.outerWidth-s.right:e.left+e.w,o.top=u,o.bottom=u+o.height,o.width=o.right-o.left,u=o.bottom):(o.left=l,o.right=l+o.width,o.top=e.top,o.bottom=e.top+e.h,o.height=o.bottom-o.top,l=o.right);e.x=l,e.y=u}Ot.set("layout",{padding:{top:0,right:0,bottom:0,left:0}});var Vi={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw:function(t){e.draw(t)}}]},t.boxes.push(e)},removeBox:function(t,e){var i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure:function(t,e,i){for(var n,a=["fullWidth","position","weight"],r=a.length,o=0;o<r;++o)n=a[o],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])},update:function(t,e,i){if(t){var n=Tt((t.options.layout||{}).padding),a=e-n.width,o=i-n.height,s=function(t){var e=function(t){var e,i,n,a=[];for(e=0,i=(t||[]).length;e<i;++e)n=t[e],a.push({index:e,box:n,pos:n.position,horizontal:n.isHorizontal(),weight:n.weight});return a}(t),i=Ei(Ci(e,"left"),!0),n=Ei(Ci(e,"right")),a=Ei(Ci(e,"top"),!0),r=Ei(Ci(e,"bottom")),o=Fi(e,"x"),s=Fi(e,"y");return{leftAndTop:i.concat(a),rightAndBottom:n.concat(s).concat(r).concat(o),chartArea:Ci(e,"chartArea"),vertical:i.concat(n).concat(s),horizontal:a.concat(r).concat(o)}}(t.boxes),l=s.vertical,u=s.horizontal,c=Object.freeze({outerWidth:e,outerHeight:i,padding:n,availableWidth:a,vBoxMaxWidth:a/2/l.length,hBoxMaxHeight:o/2}),h=r({maxPadding:r({},n),w:a,h:o,x:n.left,y:n.top},n);!function(t,e){var i,n,a;for(i=0,n=t.length;i<n;++i)(a=t[i]).width=a.horizontal?a.box.fullWidth&&e.availableWidth:e.vBoxMaxWidth,a.height=a.horizontal&&e.hBoxMaxHeight}(l.concat(u),c),zi(l,h,c),zi(u,h,c)&&zi(l,h,c),function(t){var e=t.maxPadding;function i(i){var n=Math.max(e[i]-t[i],0);return t[i]+=n,n}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(h),Bi(s.leftAndTop,h,c),h.x+=h.w,h.y+=h.h,Bi(s.rightAndBottom,h,c),t.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h,height:h.h,width:h.w},M(s.chartArea,(function(e){var i=e.box;r(i,t.chartArea),i.update(h.w,h.h)}))}}},Wi=function(){function t(){e(this,t)}return n(t,[{key:"acquireContext",value:function(t,e){}},{key:"releaseContext",value:function(t){return!1}},{key:"addEventListener",value:function(t,e,i){}},{key:"removeEventListener",value:function(t,e,i){}},{key:"getDevicePixelRatio",value:function(){return 1}}]),t}(),Ni=function(t){function i(){return e(this,i),h(this,l(i).apply(this,arguments))}return s(i,t),n(i,[{key:"acquireContext",value:function(t){return t&&t.getContext&&t.getContext("2d")||null}}]),i}(Wi),Hi=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some((function(t,n){return t[0]===e&&(i=n,!0)})),i}return(function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),n=this.__entries__[i];return n&&n[1]},e.prototype.set=function(e,i){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,n=t(i,e);~n&&i.splice(n,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,n=this.__entries__;i<n.length;i++){var a=n[i];t.call(e,a[1],a[0])}},e}())}(),ji="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Yi="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Ui="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Yi):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var Xi=["top","right","bottom","left","width","height","size","weight"],qi="undefined"!=typeof MutationObserver,$i=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,n=!1,a=0;function r(){i&&(i=!1,t()),n&&s()}function o(){Ui(r)}function s(){var t=Date.now();if(i){if(t-a<2)return;n=!0}else i=!0,n=!1,setTimeout(o,e);a=t}return s}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){ji&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),qi?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){ji&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;Xi.some((function(t){return!!~i.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Gi=function(t,e){for(var i=0,n=Object.keys(e);i<n.length;i++){var a=n[i];Object.defineProperty(t,a,{value:e[a],enumerable:!1,writable:!1,configurable:!0})}return t},Ki=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||Yi},Zi=an(0,0,0,0);function Qi(t){return parseFloat(t)||0}function Ji(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce((function(e,i){return e+Qi(t["border-"+i+"-width"])}),0)}function tn(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return Zi;var n=Ki(t).getComputedStyle(t),a=function(t){for(var e={},i=0,n=["top","right","bottom","left"];i<n.length;i++){var a=n[i],r=t["padding-"+a];e[a]=Qi(r)}return e}(n),r=a.left+a.right,o=a.top+a.bottom,s=Qi(n.width),l=Qi(n.height);if("border-box"===n.boxSizing&&(Math.round(s+r)!==e&&(s-=Ji(n,"left","right")+r),Math.round(l+o)!==i&&(l-=Ji(n,"top","bottom")+o)),!function(t){return t===Ki(t).document.documentElement}(t)){var u=Math.round(s+r)-e,c=Math.round(l+o)-i;1!==Math.abs(u)&&(s-=u),1!==Math.abs(c)&&(l-=c)}return an(a.left,a.top,s,l)}var en="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Ki(t).SVGGraphicsElement}:function(t){return t instanceof Ki(t).SVGElement&&"function"==typeof t.getBBox};function nn(t){return ji?en(t)?function(t){var e=t.getBBox();return an(0,0,e.width,e.height)}(t):tn(t):Zi}function an(t,e,i,n){return{x:t,y:e,width:i,height:n}}var rn=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=an(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=nn(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),on=function(t,e){var i,n,a,r,o,s,l,u=(n=(i=e).x,a=i.y,r=i.width,o=i.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(s.prototype),Gi(l,{x:n,y:a,width:r,height:o,top:a,right:n+r,bottom:o+a,left:n}),l);Gi(this,{target:t,contentRect:u})},sn=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new Hi,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Ki(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new rn(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Ki(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new on(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),ln="undefined"!=typeof WeakMap?new WeakMap:new Hi,un=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=$i.getInstance(),n=new sn(e,i,this);ln.set(this,n)};["observe","unobserve","disconnect"].forEach((function(t){un.prototype[t]=function(){var e;return(e=ln.get(this))[t].apply(e,arguments)}}));var cn=void 0!==Yi.ResizeObserver?Yi.ResizeObserver:un,hn={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function dn(t,e){var i=pe.dom.getStyle(t,e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}var fn=!!function(){var t=!1;try{var e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}()&&{passive:!0};function vn(t,e){var i=!1,n=[];return function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n=Array.prototype.slice.call(r),i||(i=!0,pe.requestAnimFrame.call(window,(function(){i=!1,t.apply(e,n)})))}}function pn(t,e){var i=vn((function(i,n){var a=t.clientWidth;e(i,n),a<t.clientWidth&&e()}),window),n=new cn((function(t){var e=t[0];i(e.contentRect.width,e.contentRect.height)}));return n.observe(t),n}function gn(t,e){var i=bt(t);if(i){var n=new MutationObserver((function(i){i.forEach((function(i){for(var n=0;n<i.removedNodes.length;n++)if(i.removedNodes[n]===t){e();break}}))}));return n.observe(i,{childList:!0}),n}}function yn(t,e){var i=t[e];i&&(i.disconnect(),t[e]=void 0)}function mn(t){yn(t,"attach"),yn(t,"detach"),yn(t,"resize")}function bn(t,e,i){var n=function(){return bn(t,e,i)};mn(e);var a,r,o,s=bt(t);s?(e.resize=pn(s,i),e.detach=gn(t,n)):e.attach=(a=t,r=function(){yn(e,"attach");var a=bt(t);e.resize=pn(a,i),e.detach=gn(t,n)},(o=new MutationObserver((function(t){var e=bt(a);t.forEach((function(t){for(var i=0;i<t.addedNodes.length;i++){var n=t.addedNodes[i];n!==a&&n!==e||r(t.target)}}))}))).observe(document,{childList:!0,subtree:!0}),o)}var xn=function(t){function i(){return e(this,i),h(this,l(i).apply(this,arguments))}return s(i,t),n(i,[{key:"acquireContext",value:function(t,e){var i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){var i=t.style,n=t.getAttribute("height"),a=t.getAttribute("width");if(t.$chartjs={initial:{height:n,width:a,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",null===a||""===a){var r=dn(t,"width");void 0!==r&&(t.width=r)}if(null===n||""===n)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var o=dn(t,"height");void 0!==o&&(t.height=o)}}(t,e),i):null}},{key:"releaseContext",value:function(t){var e=t.canvas;if(!e.$chartjs)return!1;var i=e.$chartjs.initial;["height","width"].forEach((function(t){var n=i[t];pe.isNullOrUndef(n)?e.removeAttribute(t):e.setAttribute(t,n)}));var n=i.style||{};return Object.keys(n).forEach((function(t){e.style[t]=n[t]})),e.width=e.width,delete e.$chartjs,!0}},{key:"addEventListener",value:function(t,e,i){this.removeEventListener(t,e);var n=t.canvas,a=t.$proxies||(t.$proxies={});if("resize"===e)return bn(n,a,i);!function(t,e,i){t.addEventListener(e,i,fn)}(n,e,a[e]=vn((function(e){i(function(t,e){var i=hn[t.type]||t.type,n=pe.dom.getRelativePosition(t,e);return function(t,e,i,n,a){return{type:t,chart:e,native:a||null,x:void 0!==i?i:null,y:void 0!==n?n:null}}(i,e,n.x,n.y,t)}(e,t))}),t))}},{key:"removeEventListener",value:function(t,e){var i=t.canvas,n=t.$proxies||(t.$proxies={});if("resize"===e)return mn(n);var a=n[e];a&&(!function(t,e,i){t.removeEventListener(e,i,fn)}(i,e,a),n[e]=void 0)}},{key:"getDevicePixelRatio",value:function(){return window.devicePixelRatio}}]),i}(Wi),_n={BasicPlatform:Ni,DomPlatform:xn,BasePlatform:Wi};Ot.set("plugins",{});var kn=new(function(){function t(){e(this,t),this._plugins=[],this._cacheId=0}return n(t,[{key:"register",value:function(t){var e=this._plugins;[].concat(t).forEach((function(t){-1===e.indexOf(t)&&e.push(t)})),this._cacheId++}},{key:"unregister",value:function(t){var e=this._plugins;[].concat(t).forEach((function(t){var i=e.indexOf(t);-1!==i&&e.splice(i,1)})),this._cacheId++}},{key:"clear",value:function(){this._plugins=[],this._cacheId++}},{key:"count",value:function(){return this._plugins.length}},{key:"getAll",value:function(){return this._plugins}},{key:"notify",value:function(t,e,i){var n,a,r,o,s,l=this._descriptors(t),u=l.length;for(n=0;n<u;++n)if("function"==typeof(s=(r=(a=l[n]).plugin)[e])&&((o=[t].concat(i||[])).push(a.options),!1===s.apply(r,o)))return!1;return!0}},{key:"_descriptors",value:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var i=[],n=[],a=t&&t.config||{},r=a.options&&a.options.plugins||{};return this._plugins.concat(a.plugins||[]).forEach((function(t){if(-1===i.indexOf(t)){var e=t.id,a=r[e];!1!==a&&(!0===a&&(a=w(Ot.plugins[e])),i.push(t),n.push({plugin:t,options:a||{}}))}})),e.descriptors=n,e.id=this._cacheId,n}},{key:"invalidate",value:function(t){delete t.$plugins}}]),t}()),Mn={constructors:{},defaults:{},registerScale:function(t){var e=t.id;this.constructors[e]=t,this.defaults[e]=w(t.defaults)},getScaleConstructor:function(t){return Object.prototype.hasOwnProperty.call(this.constructors,t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return Object.prototype.hasOwnProperty.call(this.defaults,t)?P({},[Ot.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){Object.prototype.hasOwnProperty.call(this.defaults,t)&&(this.defaults[t]=r(this.defaults[t],e))},addScalesToLayout:function(t){M(t.scales,(function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,Vi.addBox(t,e)}))}},wn=pe.valueOrDefault;function Sn(t,e){e=e||{};var i=Ot[t.type]||{scales:{}},n=e.scales||{},a={},r={};return Object.keys(n).forEach((function(t){var e=t[0];a[e]=a[e]||t,r[t]=pe.mergeIf({},[n[t],i.scales[e]])})),e.scale&&(r[e.scale.id||"r"]=pe.mergeIf({},[e.scale,i.scales.r]),a.r=a.r||e.scale.id||"r"),t.data.datasets.forEach((function(e){var i=(Ot[e.type||t.type]||{scales:{}}).scales||{};Object.keys(i).forEach((function(t){var o=e[t+"AxisID"]||a[t]||t;r[o]=r[o]||{},pe.mergeIf(r[o],[n[o],i[t]])}))})),Object.keys(r).forEach((function(t){var e=r[t];pe.mergeIf(e,Mn.getScaleDefaults(e.type))})),r}function Pn(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return pe.merge({},e,{merger:function(t,e,i,n){"scales"!==t&&"scale"!==t&&pe._merger(t,e,i,n)}})}var Dn=new Set(["top","bottom","left","right","chartArea"]);function On(t,e){return"top"===t||"bottom"===t||!Dn.has(t)&&"x"===e}function An(t,e){return function(i,n){return i[t]===n[t]?i[e]-n[e]:i[t]-n[t]}}function Tn(t){var e=t.chart,i=e.options.animation;kn.notify(e,"afterRender"),pe.callback(i&&i.onComplete,[t],e)}function Cn(t){var e=t.chart,i=e.options.animation;pe.callback(i&&i.onProgress,[t],e)}function Fn(){return"undefined"!=typeof window&&"undefined"!=typeof document}var En=function(){function t(i,n){e(this,t);var a=this;n=function(t){var e=(t=t||{}).data=t.data||{datasets:[],labels:[]};e.datasets=e.datasets||[],e.labels=e.labels||[];var i=Sn(t,t.options);return t.options=Pn(Ot,Ot[t.type],t.options||{}),t.options.scales=i,t}(n);var r=function(t){return Fn()&&"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}(i);this.platform=a._initializePlatform(r,n);var o=a.platform.acquireContext(r,n),s=o&&o.canvas,l=s&&s.height,u=s&&s.width;this.id=pe.uid(),this.ctx=o,this.canvas=s,this.config=n,this.width=u,this.height=l,this.aspectRatio=l?u/l:null,this.options=n.options,this._bufferedRender=!1,this._layers=[],this._metasets=[],this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this.data=void 0,this.active=void 0,this.lastActive=[],this._lastEvent=void 0,this._listeners={},this._sortedMetasets=[],this._updating=!1,this.scales={},this.scale=void 0,this.$plugins=void 0,this.$proxies={},this._hiddenIndices={},t.instances[a.id]=a,Object.defineProperty(a,"data",{get:function(){return a.config.data},set:function(t){a.config.data=t}}),o&&s?(ge.listen(a,"complete",Tn),ge.listen(a,"progress",Cn),a._initialize(),a.update()):console.error("Failed to create chart: can't acquire context from the given item")}return n(t,[{key:"_initialize",value:function(){var t=this;return kn.notify(t,"beforeInit"),t.options.responsive?t.resize(!0):pe.dom.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),kn.notify(t,"afterInit"),t}},{key:"_initializePlatform",value:function(t,e){return e.platform?new e.platform:!Fn()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?new Ni:new xn}},{key:"clear",value:function(){return pe.canvas.clear(this),this}},{key:"stop",value:function(){return ge.stop(this),this}},{key:"resize",value:function(t,e,i){var n=this,a=n.options,r=n.canvas,o=a.maintainAspectRatio&&n.aspectRatio;void 0!==e&&void 0!==i||(e=wt(r),i=St(r));var s=Math.max(0,Math.floor(e)),l=Math.max(0,Math.floor(o?s/o:i)),u=n.currentDevicePixelRatio,c=a.devicePixelRatio||n.platform.getDevicePixelRatio();if((n.width!==s||n.height!==l||u!==c)&&(r.width=n.width=s,r.height=n.height=l,r.style&&(r.style.width=s+"px",r.style.height=l+"px"),pe.dom.retinaScale(n,c),!t)){var h={width:s,height:l};kn.notify(n,"resize",[h]),a.onResize&&a.onResize(n,h),n.stop(),n.update("resize")}}},{key:"ensureScalesHaveIDs",value:function(){var t=this.options,e=t.scales||{},i=t.scale;pe.each(e,(function(t,e){t.id=e})),i&&(i.id=i.id||"scale")}},{key:"buildOrUpdateScales",value:function(){var t=this,e=t.options.scales,i=t.scales||{},n=Object.keys(i).reduce((function(t,e){return t[e]=!1,t}),{}),a=[];e&&(a=a.concat(Object.keys(e).map((function(t){var i=e[t],n="r"===t.charAt(0).toLowerCase(),a="x"===t.charAt(0).toLowerCase();return{options:i,dposition:n?"chartArea":a?"bottom":"left",dtype:n?"radialLinear":a?"category":"linear"}})))),pe.each(a,(function(e){var a=e.options,r=a.id,o=wn(a.type,e.dtype);void 0!==a.position&&On(a.position,a.axis||r[0])===On(e.dposition)||(a.position=e.dposition),n[r]=!0;var s=null;if(r in i&&i[r].type===o)(s=i[r]).options=a,s.ctx=t.ctx,s.chart=t;else{var l=Mn.getScaleConstructor(o);if(!l)return;s=new l({id:r,type:o,options:a,ctx:t.ctx,chart:t}),i[s.id]=s}s.axis="chartArea"===s.options.position?"r":s.isHorizontal()?"x":"y",s._userMin=s.parse(s.options.min),s._userMax=s.parse(s.options.max),e.isDefault&&(t.scale=s)})),pe.each(n,(function(t,e){t||delete i[e]})),t.scales=i,Mn.addScalesToLayout(this)}},{key:"_updateMetasetIndex",value:function(t,e){var i=this._metasets,n=t.index;n!==e&&(i[n]=i[e],i[e]=t,t.index=e)}},{key:"_updateMetasets",value:function(){var t=this._metasets,e=this.data.datasets.length,i=t.length;if(i>e){for(var n=e;n<i;++n)this._destroyDatasetMeta(n);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(An("order","index"))}},{key:"buildOrUpdateControllers",value:function(){var t,e,i=this,n=[],a=i.data.datasets;for(t=0,e=a.length;t<e;t++){var r=a[t],o=i.getDatasetMeta(t),s=r.type||i.config.type;if(o.type&&o.type!==s&&(i._destroyDatasetMeta(t),o=i.getDatasetMeta(t)),o.type=s,o.order=r.order||0,i._updateMetasetIndex(o,t),o.label=""+r.label,o.visible=i.isDatasetVisible(t),o.controller)o.controller.updateIndex(t),o.controller.linkScales();else{var l=xi[o.type];if(void 0===l)throw new Error('"'+o.type+'" is not a chart type.');o.controller=new l(i,t),n.push(o.controller)}}return i._updateMetasets(),n}},{key:"_resetElements",value:function(){var t=this;pe.each(t.data.datasets,(function(e,i){t.getDatasetMeta(i).controller.reset()}),t)}},{key:"reset",value:function(){this._resetElements(),kn.notify(this,"reset")}},{key:"update",value:function(t){var e,i,n=this;if(n._updating=!0,function(t){var e=t.options;pe.each(t.scales,(function(e){Vi.removeBox(t,e)}));var i=Sn(t.config,e);e=Pn(Ot,Ot[t.config.type],e),t.options=t.config.options=e,t.options.scales=i,t._animationsDisabled=!e.animation,t.ensureScalesHaveIDs(),t.buildOrUpdateScales()}(n),kn.invalidate(n),!1!==kn.notify(n,"beforeUpdate")){var a=n.buildOrUpdateControllers();for(e=0,i=n.data.datasets.length;e<i;e++)n.getDatasetMeta(e).controller.buildOrUpdateElements();n._updateLayout(),n.options.animation&&pe.each(a,(function(t){t.reset()})),n._updateDatasets(t),kn.notify(n,"afterUpdate"),n._layers.sort(An("z","_idx")),n._lastEvent&&n._eventHandler(n._lastEvent,!0),n.render(),n._updating=!1}}},{key:"_updateLayout",value:function(){var t=this;!1!==kn.notify(t,"beforeLayout")&&(Vi.update(t,t.width,t.height),t._layers=[],pe.each(t.boxes,(function(e){var i;e.configure&&e.configure(),(i=t._layers).push.apply(i,f(e._layers()))}),t),t._layers.forEach((function(t,e){t._idx=e})),kn.notify(t,"afterLayout"))}},{key:"_updateDatasets",value:function(t){var e="function"==typeof t;if(!1!==kn.notify(this,"beforeDatasetsUpdate")){for(var i=0,n=this.data.datasets.length;i<n;++i)this._updateDataset(i,e?t({datasetIndex:i}):t);kn.notify(this,"afterDatasetsUpdate")}}},{key:"_updateDataset",value:function(t,e){var i=this.getDatasetMeta(t),n={meta:i,index:t,mode:e};!1!==kn.notify(this,"beforeDatasetUpdate",[n])&&(i.controller._update(e),kn.notify(this,"afterDatasetUpdate",[n]))}},{key:"render",value:function(){var t=this,e=t.options.animation;if(!1!==kn.notify(t,"beforeRender")){ge.has(t)?ge.running(t)||ge.start(t):(t.draw(),kn.notify(t,"afterRender"),pe.callback(e&&e.onComplete,[],t))}}},{key:"draw",value:function(){var t,e=this;if(e.clear(),!(e.width<=0||e.height<=0)&&!1!==kn.notify(e,"beforeDraw")){var i=e._layers;for(t=0;t<i.length&&i[t].z<=0;++t)i[t].draw(e.chartArea);for(e._drawDatasets();t<i.length;++t)i[t].draw(e.chartArea);kn.notify(e,"afterDraw")}}},{key:"_getSortedDatasetMetas",value:function(t){var e,i,n=this._sortedMetasets,a=[];for(e=0,i=n.length;e<i;++e){var r=n[e];t&&!r.visible||a.push(r)}return a}},{key:"getSortedVisibleDatasetMetas",value:function(){return this._getSortedDatasetMetas(!0)}},{key:"_drawDatasets",value:function(){if(!1!==kn.notify(this,"beforeDatasetsDraw")){for(var t=this.getSortedVisibleDatasetMetas(),e=t.length-1;e>=0;--e)this._drawDataset(t[e]);kn.notify(this,"afterDatasetsDraw")}}},{key:"_drawDataset",value:function(t){var e=this,i=e.ctx,n=t._clip,a=e.chartArea,r={meta:t,index:t.index};!1!==kn.notify(e,"beforeDatasetDraw",[r])&&(pe.canvas.clipArea(i,{left:!1===n.left?0:a.left-n.left,right:!1===n.right?e.width:a.right+n.right,top:!1===n.top?0:a.top-n.top,bottom:!1===n.bottom?e.height:a.bottom+n.bottom}),t.controller.draw(),pe.canvas.unclipArea(i),kn.notify(e,"afterDatasetDraw",[r]))}},{key:"getElementAtEvent",value:function(t){return Ai.modes.nearest(this,t,{intersect:!0})}},{key:"getElementsAtEvent",value:function(t){return Ai.modes.index(this,t,{intersect:!0})}},{key:"getElementsAtXAxis",value:function(t){return Ai.modes.index(this,t,{intersect:!1})}},{key:"getElementsAtEventForMode",value:function(t,e,i,n){var a=Ai.modes[e];return"function"==typeof a?a(this,t,i,n):[]}},{key:"getDatasetAtEvent",value:function(t){return Ai.modes.dataset(this,t,{intersect:!0})}},{key:"getDatasetMeta",value:function(t){var e=this.data.datasets[t],i=this._metasets,n=i.filter((function(t){return t._dataset===e})).pop();return n||(n=i[t]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1}),n}},{key:"getVisibleDatasetCount",value:function(){return this.getSortedVisibleDatasetMetas().length}},{key:"isDatasetVisible",value:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden}},{key:"setDatasetVisibility",value:function(t,e){this.getDatasetMeta(t).hidden=!e}},{key:"toggleDataVisibility",value:function(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}},{key:"getDataVisibility",value:function(t){return!this._hiddenIndices[t]}},{key:"_updateDatasetVisibility",value:function(t,e){var i=e?"show":"hide",n=this.getDatasetMeta(t),a=n.controller._resolveAnimations(void 0,i);this.setDatasetVisibility(t,e),a.update(n,{visible:e}),this.update((function(e){return e.datasetIndex===t?i:void 0}))}},{key:"hide",value:function(t){this._updateDatasetVisibility(t,!1)}},{key:"show",value:function(t){this._updateDatasetVisibility(t,!0)}},{key:"_destroyDatasetMeta",value:function(t){var e=this._metasets&&this._metasets[t];e&&(e.controller._destroy(),delete this._metasets[t])}},{key:"destroy",value:function(){var e,i,n=this,a=n.canvas;for(n.stop(),ge.remove(n),e=0,i=n.data.datasets.length;e<i;++e)n._destroyDatasetMeta(e);a&&(n.unbindEvents(),pe.canvas.clear(n),n.platform.releaseContext(n.ctx),n.canvas=null,n.ctx=null),kn.notify(n,"destroy"),delete t.instances[n.id]}},{key:"toBase64Image",value:function(){var t;return(t=this.canvas).toDataURL.apply(t,arguments)}},{key:"bindEvents",value:function(){var t=this,e=t._listeners,i=function(e){t._eventHandler(e)};pe.each(t.options.events,(function(n){t.platform.addEventListener(t,n,i),e[n]=i})),t.options.responsive&&(i=function(e,i){t.canvas&&t.resize(!1,e,i)},t.platform.addEventListener(t,"resize",i),e.resize=i)}},{key:"unbindEvents",value:function(){var t=this,e=t._listeners;e&&(delete t._listeners,pe.each(e,(function(e,i){t.platform.removeEventListener(t,i,e)})))}},{key:"updateHoverStyle",value:function(t,e,i){var n,a,r,o=i?"set":"remove";for("dataset"===e&&this.getDatasetMeta(t[0].datasetIndex).controller["_"+o+"DatasetHoverStyle"](),a=0,r=t.length;a<r;++a)(n=t[a])&&this.getDatasetMeta(n.datasetIndex).controller[o+"HoverStyle"](n.element,n.datasetIndex,n.index)}},{key:"_updateHoverStyles",value:function(){var t=this,e=(t.options||{}).hover;t.lastActive.length&&t.updateHoverStyle(t.lastActive,e.mode,!1),t.active.length&&e.mode&&t.updateHoverStyle(t.active,e.mode,!0)}},{key:"_eventHandler",value:function(t,e){var i=this;if(!1!==kn.notify(i,"beforeEvent",[t,e]))return i._handleEvent(t,e),kn.notify(i,"afterEvent",[t,e]),i.render(),i}},{key:"_handleEvent",value:function(t,e){var i,n=this,a=n.options,r=a.hover,o=e;return"mouseout"===t.type?(n.active=[],n._lastEvent=null):(n.active=n.getElementsAtEventForMode(t,r.mode,r,o),n._lastEvent="click"===t.type?n._lastEvent:t),pe.callback(a.onHover||a.hover.onHover,[t.native,n.active],n),"mouseup"!==t.type&&"click"!==t.type||a.onClick&&pe.canvas._isPointInArea(t,n.chartArea)&&a.onClick.call(n,t.native,n.active),((i=!pe._elementsEqual(n.active,n.lastActive))||e)&&n._updateHoverStyles(),n.lastActive=n.active,i}}]),t}();function In(){throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")}a(En,"version","3.0.0-alpha"),a(En,"instances",{});var Ln=function(){function t(i){e(this,t),this.options=i||{}}return n(t,[{key:"formats",value:function(){return In()}},{key:"parse",value:function(t,e){return In()}},{key:"format",value:function(t,e){return In()}},{key:"add",value:function(t,e,i){return In()}},{key:"diff",value:function(t,e,i){return In()}},{key:"startOf",value:function(t,e,i){return In()}},{key:"endOf",value:function(t,e){return In()}}]),t}();Ln.override=function(t){r(Ln.prototype,t)};var Rn={_date:Ln},zn={formatters:{values:function(t){return m(t)?t:""+t},numeric:function(t,e,i){if(0===t)return"0";var n=i.length>3?i[2].value-i[1].value:i[1].value-i[0].value;Math.abs(n)>1&&t!==Math.floor(t)&&(n=t-Math.floor(t));var a=Z(Math.abs(n)),r=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value)),o=Math.min(Math.abs(i[0].value),Math.abs(i[i.length-1].value)),s=this.chart.options.locale;if(r<1e-4||o>1e7){var l=Z(Math.abs(t)),u=Math.floor(l)-Math.floor(a);return u=Math.max(Math.min(u,20),0),t.toExponential(u)}var c=-1*Math.floor(a);return c=Math.max(Math.min(c,20),0),new Intl.NumberFormat(s,{minimumFractionDigits:c,maximumFractionDigits:c}).format(t)}}};function Bn(t,e){for(var i=[],n=t.length/e,a=t.length,r=0;r<a;r+=n)i.push(t[Math.floor(r)]);return i}function Vn(t,e,i){var n,a=t.ticks.length,r=Math.min(e,a-1),o=t._startPixel,s=t._endPixel,l=t.getPixelForTick(r);if(!(i&&(n=1===a?Math.max(l-o,s-l):0===e?(t.getPixelForTick(1)-l)/2:(l-t.getPixelForTick(r-1))/2,(l+=r<e?n:-n)<o-1e-6||l>s+1e-6)))return l}function Wn(t){return t.drawTicks?t.tickMarkLength:0}function Nn(t){if(!t.display)return 0;var e=Ct(t),i=Tt(t.padding);return e.lineHeight+i.height}function Hn(t,e,i,n,a){var r,o,s,l=_(n,0),u=Math.min(_(a,t.length),t.length),c=0;for(i=Math.ceil(i),a&&(i=(r=a-n)/Math.floor(r/i)),s=l;s<0;)c++,s=Math.round(l+c*i);for(o=Math.max(l,0);o<u;o++)o===s&&(e.push(t[o]),c++,s=Math.round(l+c*i))}Ot.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,gridLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,lineWidth:0,strokeStyle:"",padding:0,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:zn.formatters.values,minor:{},major:{}}});var jn=function(t){function i(t){var n;return e(this,i),(n=h(this,l(i).call(this))).id=t.id,n.type=t.type,n.options=t.options,n.ctx=t.ctx,n.chart=t.chart,n.top=void 0,n.bottom=void 0,n.left=void 0,n.right=void 0,n.width=void 0,n.height=void 0,n._margins={left:0,right:0,top:0,bottom:0},n.maxWidth=void 0,n.maxHeight=void 0,n.paddingTop=void 0,n.paddingBottom=void 0,n.paddingLeft=void 0,n.paddingRight=void 0,n.axis=void 0,n.labelRotation=void 0,n.min=void 0,n.max=void 0,n.ticks=[],n._gridLineItems=null,n._labelItems=null,n._labelSizes=null,n._length=0,n._longestTextCache={},n._startPixel=void 0,n._endPixel=void 0,n._reversePixels=!1,n._userMax=void 0,n._userMin=void 0,n._ticksLength=0,n._borderValue=0,n}return s(i,t),n(i,[{key:"parse",value:function(t,e){return t}},{key:"parseObject",value:function(t,e,i){return void 0!==t[e]?this.parse(t[e],i):null}},{key:"getUserBounds",value:function(){var t=this._userMin,e=this._userMax;return(y(t)||isNaN(t))&&(t=Number.POSITIVE_INFINITY),(y(e)||isNaN(e))&&(e=Number.NEGATIVE_INFINITY),{min:t,max:e,minDefined:x(t),maxDefined:x(e)}}},{key:"getMinMax",value:function(t){var e,i=this.getUserBounds(),n=i.min,a=i.max,r=i.minDefined,o=i.maxDefined;if(r&&o)return{min:n,max:a};for(var s=this.getMatchingVisibleMetas(),l=0,u=s.length;l<u;++l)e=s[l].controller.getMinMax(this,t),r||(n=Math.min(n,e.min)),o||(a=Math.max(a,e.max));return{min:n,max:a}}},{key:"invalidateCaches",value:function(){}},{key:"getPadding",value:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}},{key:"getTicks",value:function(){return this.ticks}},{key:"getLabels",value:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}},{key:"beforeUpdate",value:function(){k(this.options.beforeUpdate,[this])}},{key:"update",value:function(t,e,i){var n=this,a=n.options.ticks,o=a.sampleSize;n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n._margins=r({left:0,right:0,top:0,bottom:0},i),n.ticks=null,n._labelSizes=null,n._gridLineItems=null,n._labelItems=null,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeDataLimits(),n.determineDataLimits(),n.afterDataLimits(),n.beforeBuildTicks(),n.ticks=n.buildTicks()||[],n.afterBuildTicks();var s=o<n.ticks.length;n._convertTicksToLabels(s?Bn(n.ticks,o):n.ticks),n.configure(),n.beforeCalculateLabelRotation(),n.calculateLabelRotation(),n.afterCalculateLabelRotation(),n.beforeFit(),n.fit(),n.afterFit(),n.ticks=a.display&&(a.autoSkip||"auto"===a.source)?n._autoSkip(n.ticks):n.ticks,s&&n._convertTicksToLabels(n.ticks),n.afterUpdate()}},{key:"configure",value:function(){var t,e,i=this,n=i.options.reverse;i.isHorizontal()?(t=i.left,e=i.right):(t=i.top,e=i.bottom,n=!n),i._startPixel=t,i._endPixel=e,i._reversePixels=n,i._length=e-t}},{key:"afterUpdate",value:function(){k(this.options.afterUpdate,[this])}},{key:"beforeSetDimensions",value:function(){k(this.options.beforeSetDimensions,[this])}},{key:"setDimensions",value:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0}},{key:"afterSetDimensions",value:function(){k(this.options.afterSetDimensions,[this])}},{key:"beforeDataLimits",value:function(){k(this.options.beforeDataLimits,[this])}},{key:"determineDataLimits",value:function(){}},{key:"afterDataLimits",value:function(){k(this.options.afterDataLimits,[this])}},{key:"beforeBuildTicks",value:function(){k(this.options.beforeBuildTicks,[this])}},{key:"buildTicks",value:function(){return[]}},{key:"afterBuildTicks",value:function(){k(this.options.afterBuildTicks,[this])}},{key:"beforeTickToLabelConversion",value:function(){k(this.options.beforeTickToLabelConversion,[this])}},{key:"generateTickLabels",value:function(t){var e,i,n,a=this.options.ticks;for(e=0,i=t.length;e<i;e++)(n=t[e]).label=k(a.callback,[n.value,e,t],this)}},{key:"afterTickToLabelConversion",value:function(){k(this.options.afterTickToLabelConversion,[this])}},{key:"beforeCalculateLabelRotation",value:function(){k(this.options.beforeCalculateLabelRotation,[this])}},{key:"calculateLabelRotation",value:function(){var t,e,i,n=this,a=n.options,r=a.ticks,o=n.ticks.length,s=r.minRotation||0,l=r.maxRotation,u=s;if(!n._isVisible()||!r.display||s>=l||o<=1||!n.isHorizontal())n.labelRotation=s;else{var c=n._getLabelSizes(),h=c.widest.width,d=c.highest.height-c.highest.offset,f=Math.min(n.maxWidth,n.chart.width-h);h+6>(t=a.offset?n.maxWidth/o:f/(o-1))&&(t=f/(o-(a.offset?.5:1)),e=n.maxHeight-Wn(a.gridLines)-r.padding-Nn(a.scaleLabel),i=Math.sqrt(h*h+d*d),u=at(Math.min(Math.asin(Math.min((c.highest.height+6)/t,1)),Math.asin(Math.min(e/i,1))-Math.asin(d/i))),u=Math.max(s,Math.min(l,u))),n.labelRotation=u}}},{key:"afterCalculateLabelRotation",value:function(){k(this.options.afterCalculateLabelRotation,[this])}},{key:"beforeFit",value:function(){k(this.options.beforeFit,[this])}},{key:"fit",value:function(){var t=this,e={width:0,height:0},i=t.chart,n=t.options,a=n.ticks,r=n.scaleLabel,o=n.gridLines,s=t._isVisible(),l="top"!==n.position&&"x"===t.axis,u=t.isHorizontal();if(u?e.width=t.maxWidth:s&&(e.width=Wn(o)+Nn(r)),u?s&&(e.height=Wn(o)+Nn(r)):e.height=t.maxHeight,a.display&&s){var c=t._getLabelSizes(),h=c.first,d=c.last,f=c.widest,v=c.highest,p=.8*v.offset,g=a.padding;if(u){var y=0!==t.labelRotation,m=nt(t.labelRotation),b=Math.cos(m),x=Math.sin(m),_=x*f.width+b*(v.height-(y?v.offset:0))+(y?0:p);e.height=Math.min(t.maxHeight,e.height+_+g);var k,M,w=t.getPixelForTick(0)-t.left,S=t.right-t.getPixelForTick(t.ticks.length-1);y?(k=l?b*h.width+x*h.offset:x*(h.height-h.offset),M=l?x*(d.height-d.offset):b*d.width+x*d.offset):(k=h.width/2,M=d.width/2),t.paddingLeft=Math.max((k-w)*t.width/(t.width-w),0)+3,t.paddingRight=Math.max((M-S)*t.width/(t.width-S),0)+3}else{var P=a.mirror?0:f.width+g+p;e.width=Math.min(t.maxWidth,e.width+P),t.paddingTop=h.height/2,t.paddingBottom=d.height/2}}t._handleMargins(),u?(t.width=t._length=i.width-t._margins.left-t._margins.right,t.height=e.height):(t.width=e.width,t.height=t._length=i.height-t._margins.top-t._margins.bottom)}},{key:"_handleMargins",value:function(){var t=this;t._margins&&(t._margins.left=Math.max(t.paddingLeft,t._margins.left),t._margins.top=Math.max(t.paddingTop,t._margins.top),t._margins.right=Math.max(t.paddingRight,t._margins.right),t._margins.bottom=Math.max(t.paddingBottom,t._margins.bottom))}},{key:"afterFit",value:function(){k(this.options.afterFit,[this])}},{key:"isHorizontal",value:function(){var t=this.options,e=t.axis,i=t.position;return"top"===i||"bottom"===i||"x"===e}},{key:"isFullWidth",value:function(){return this.options.fullWidth}},{key:"_convertTicksToLabels",value:function(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t),this.afterTickToLabelConversion()}},{key:"_getLabelSizes",value:function(){var t=this._labelSizes;return t||(this._labelSizes=t=this._computeLabelSizes()),t}},{key:"_computeLabelSizes",value:function(){var t=this,e=t.ctx,i=t._longestTextCache,n=t.options.ticks.sampleSize,a=[],r=[],o=[],s=t.ticks;n<s.length&&(s=Bn(s,n));var l,u,c,h,d,f,v,p,g,b,x,_=s.length;for(l=0;l<_;++l){if(h=s[l].label,d=t._resolveTickFontOptions(l),e.font=f=d.string,v=i[f]=i[f]||{data:{},gc:[]},p=d.lineHeight,g=b=0,y(h)||m(h)){if(m(h))for(u=0,c=h.length;u<c;++u)y(x=h[u])||m(x)||(g=z(e,v.data,v.gc,g,x),b+=p)}else g=z(e,v.data,v.gc,g,h),b=p;a.push(g),r.push(b),o.push(p/2)}!function(t,e){M(t,(function(t){var i,n=t.gc,a=n.length/2;if(a>e){for(i=0;i<a;++i)delete t.data[n[i]];n.splice(0,a)}}))}(i,_);var k=a.indexOf(Math.max.apply(null,a)),w=r.indexOf(Math.max.apply(null,r));function S(t){return{width:a[t]||0,height:r[t]||0,offset:o[t]||0}}return{first:S(0),last:S(_-1),widest:S(k),highest:S(w)}}},{key:"getLabelForValue",value:function(t){return t}},{key:"getPixelForValue",value:function(t){return NaN}},{key:"getValueForPixel",value:function(t){}},{key:"getPixelForTick",value:function(t){var e=this.options.offset,i=this.ticks.length,n=1/Math.max(i-(e?0:1),1);return t<0||t>i-1?null:this.getPixelForDecimal(t*n+(e?n/2:0))}},{key:"getPixelForDecimal",value:function(t){return this._reversePixels&&(t=1-t),this._startPixel+t*this._length}},{key:"getDecimalForPixel",value:function(t){var e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}},{key:"getBasePixel",value:function(){return this.getPixelForValue(this.getBaseValue())}},{key:"getBaseValue",value:function(){var t=this.min,e=this.max;return t<0&&e<0?e:t>0&&e>0?t:0}},{key:"_autoSkip",value:function(t){var e=this.options.ticks,i=this._length,n=e.maxTicksLimit||i/this._tickSize(),a=e.major.enabled?function(t){var e,i,n=[];for(e=0,i=t.length;e<i;e++)t[e].major&&n.push(e);return n}(t):[],r=a.length,o=a[0],s=a[r-1],l=[];if(r>n)return function(t,e,i,n){var a,r=0,o=i[0];for(n=Math.ceil(n),a=0;a<t.length;a++)a===o&&(e.push(t[a]),o=i[++r*n])}(t,l,a,r/n),l;var u=function(t,e,i,n){var a=function(t){var e,i,n=t.length;if(n<2)return!1;for(i=t[0],e=1;e<n;++e)if(t[e]-t[e-1]!==i)return!1;return i}(t),r=e.length/n;if(!a)return Math.max(r,1);for(var o=K(a),s=0,l=o.length-1;s<l;s++){var u=o[s];if(u>r)return u}return Math.max(r,1)}(a,t,0,n);if(r>0){var c,h,d=r>1?Math.round((s-o)/(r-1)):null;for(Hn(t,l,u,y(d)?0:o-d,o),c=0,h=r-1;c<h;c++)Hn(t,l,u,a[c],a[c+1]);return Hn(t,l,u,s,y(d)?t.length:s+d),l}return Hn(t,l,u),l}},{key:"_tickSize",value:function(){var t=this.options.ticks,e=nt(this.labelRotation),i=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,s=a?a.highest.height+r:0;return this.isHorizontal()?s*i>o*n?o/i:s/n:s*n<o*i?s/i:o/n}},{key:"_isVisible",value:function(){var t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}},{key:"_computeGridLineItems",value:function(t){var e,i,n,a,r,o,s,l,u,c,h,d,f=this,v=f.axis,p=f.chart,g=f.options,y=g.gridLines,m=g.position,x=y.offsetGridLines,_=f.isHorizontal(),k=f.ticks,M=k.length+(x?1:0),w=Wn(y),S=[],P={scale:f,tick:k[0]},D=y.drawBorder?Ft([y.borderWidth,y.lineWidth,0],P,0):0,O=D/2,A=function(t){return V(p,t,D)};if("top"===m)e=A(f.bottom),o=f.bottom-w,l=e-O,c=A(t.top)+O,d=t.bottom;else if("bottom"===m)e=A(f.top),c=t.top,d=A(t.bottom)-O,o=e+O,l=f.top+w;else if("left"===m)e=A(f.right),r=f.right-w,s=e-O,u=A(t.left)+O,h=t.right;else if("right"===m)e=A(f.left),u=t.left,h=A(t.right)-O,r=e+O,s=f.left+w;else if("x"===v){if("center"===m)e=A((t.top+t.bottom)/2);else if(b(m)){var T=Object.keys(m)[0],C=m[T];e=A(f.chart.scales[T].getPixelForValue(C))}c=t.top,d=t.bottom,l=(o=e+O)+w}else if("y"===v){if("center"===m)e=A((t.left+t.right)/2);else if(b(m)){var F=Object.keys(m)[0],E=m[F];e=A(f.chart.scales[F].getPixelForValue(E))}s=(r=e-O)-w,u=t.left,h=t.right}for(i=0;i<M;++i){P={scale:f,tick:k[i]||{}};var I=Ft([y.lineWidth],P,i),L=Ft([y.color],P,i),R=y.borderDash||[],z=Ft([y.borderDashOffset],P,i);void 0!==(n=Vn(f,i,x))&&(a=V(p,n,I),_?r=s=u=h=a:o=l=c=d=a,S.push({tx1:r,ty1:o,tx2:s,ty2:l,x1:u,y1:c,x2:h,y2:d,width:I,color:L,borderDash:R,borderDashOffset:z}))}return f._ticksLength=M,f._borderValue=e,S}},{key:"_computeLabelItems",value:function(t){var e,i,n,a,r,o,s,l,u,c,h,d=this,f=d.axis,v=d.options,p=v.position,g=v.ticks,y=g.mirror,x=d.isHorizontal(),_=d.ticks,k=g.padding,M=Wn(v.gridLines),w=-nt(d.labelRotation),S=[];if("top"===p)r=d.bottom-M-k,o=w?"left":"center";else if("bottom"===p)r=d.top+M+k,o=w?"right":"center";else if("left"===p)a=d.right-(y?0:M)-k,o=y?"left":"right";else if("right"===p)a=d.left+(y?0:M)+k,o=y?"right":"left";else if("x"===f){if("center"===p)r=(t.top+t.bottom)/2+M+k;else if(b(p)){var P=Object.keys(p)[0],D=p[P];r=d.chart.scales[P].getPixelForValue(D)+M+k}o=w?"right":"center"}else if("y"===f){if("center"===p)a=(t.left+t.right)/2-M-k;else if(b(p)){var O=Object.keys(p)[0],A=p[O];a=d.chart.scales[O].getPixelForValue(A)}o="right"}for(e=0,i=_.length;e<i;++e)n=_[e].label,s=d.getPixelForTick(e)+g.labelOffset,u=(l=d._resolveTickFontOptions(e)).lineHeight,c=m(n)?n.length:1,x?(a=s,"top"===p?(h=(Math.sin(w)*(c/2)+.5)*u,h-=(0===w?c-.5:Math.cos(w)*(c/2))*u):(h=Math.sin(w)*(c/2)*u,h+=(0===w?.5:Math.cos(w)*(c/2))*u)):(r=s,h=(1-c)*u/2),S.push({x:a,y:r,rotation:w,label:n,font:l,textOffset:h,textAlign:o});return S}},{key:"drawGrid",value:function(t){var e,i,n=this,a=n.options.gridLines,r=n.ctx,o=n.chart,s={scale:n,tick:n.ticks[0]},l=a.drawBorder?Ft([a.borderWidth,a.lineWidth,0],s,0):0,u=n._gridLineItems||(n._gridLineItems=n._computeGridLineItems(t));if(a.display)for(e=0,i=u.length;e<i;++e){var c=u[e],h=c.width,d=c.color;h&&d&&(r.save(),r.lineWidth=h,r.strokeStyle=d,r.setLineDash&&(r.setLineDash(c.borderDash),r.lineDashOffset=c.borderDashOffset),r.beginPath(),a.drawTicks&&(r.moveTo(c.tx1,c.ty1),r.lineTo(c.tx2,c.ty2)),a.drawOnChartArea&&(r.moveTo(c.x1,c.y1),r.lineTo(c.x2,c.y2)),r.stroke(),r.restore())}if(l){var f=l;s={scale:n,tick:n.ticks[n._ticksLength-1]};var v,p,g,y,m=Ft([a.lineWidth,1],s,n._ticksLength-1),b=n._borderValue;n.isHorizontal()?(v=V(o,n.left,f)-f/2,p=V(o,n.right,m)+m/2,g=y=b):(g=V(o,n.top,f)-f/2,y=V(o,n.bottom,m)+m/2,v=p=b),r.lineWidth=l,r.strokeStyle=Ft([a.borderColor,a.color],s,0),r.beginPath(),r.moveTo(v,g),r.lineTo(p,y),r.stroke()}}},{key:"drawLabels",value:function(t){var e=this;if(e.options.ticks.display){var i,n,a,r,o=e.ctx,s=e._labelItems||(e._labelItems=e._computeLabelItems(t));for(i=0,a=s.length;i<a;++i){var l=s[i],u=l.font,c=u.lineWidth>0&&""!==u.strokeStyle;o.save(),o.translate(l.x,l.y),o.rotate(l.rotation),o.font=u.string,o.fillStyle=u.color,o.textBaseline="middle",o.textAlign=l.textAlign,c&&(o.strokeStyle=u.strokeStyle,o.lineWidth=u.lineWidth);var h=l.label,d=l.textOffset;if(m(h))for(n=0,r=h.length;n<r;++n)c&&o.strokeText(""+h[n],0,d),o.fillText(""+h[n],0,d),d+=u.lineHeight;else c&&o.strokeText(h,0,d),o.fillText(h,0,d);o.restore()}}}},{key:"drawTitle",value:function(t){var e=this,i=e.ctx,n=e.options,a=n.scaleLabel;if(a.display){var r,o,s,l=_(a.fontColor,Ot.fontColor),u=Ct(a),c=Tt(a.padding),h=u.lineHeight/2,d=a.align,f=n.position,v=e.options.reverse,p=0;if(e.isHorizontal()){switch(d){case"start":o=e.left+(v?e.width:0),r=v?"right":"left";break;case"end":o=e.left+(v?0:e.width),r=v?"left":"right";break;default:o=e.left+e.width/2,r="center"}s="top"===f?e.top+h+c.top:e.bottom-h-c.bottom}else{var g="left"===f;switch(o=g?e.left+h+c.top:e.right-h-c.top,d){case"start":s=e.top+(v?0:e.height),r=v===g?"right":"left";break;case"end":s=e.top+(v?e.height:0),r=v===g?"left":"right";break;default:s=e.top+e.height/2,r="center"}p=g?-.5*Math.PI:.5*Math.PI}i.save(),i.translate(o,s),i.rotate(p),i.textAlign=r,i.textBaseline="middle",i.fillStyle=l,i.font=u.string,i.fillText(a.labelString,0,0),i.restore()}}},{key:"draw",value:function(t){this._isVisible()&&(this.drawGrid(t),this.drawTitle(),this.drawLabels(t))}},{key:"_layers",value:function(){var t=this,e=t.options,i=e.ticks&&e.ticks.z||0,n=e.gridLines&&e.gridLines.z||0;return t._isVisible()&&i!==n&&t.draw===t._draw?[{z:n,draw:function(e){t.drawGrid(e),t.drawTitle()}},{z:i,draw:function(e){t.drawLabels(e)}}]:[{z:i,draw:function(e){t.draw(e)}}]}},{key:"getMatchingVisibleMetas",value:function(t){var e,i,n=this.chart.getSortedVisibleDatasetMetas(),a=this.axis+"AxisID",r=[];for(e=0,i=n.length;e<i;++e){var o=n[e];o[a]!==this.id||t&&o.type!==t||r.push(o)}return r}},{key:"_resolveTickFontOptions",value:function(t){var e=this.options.ticks,i={chart:this.chart,scale:this,tick:this.ticks[t],index:t};return r(Ct({fontFamily:Ft([e.fontFamily],i),fontSize:Ft([e.fontSize],i),fontStyle:Ft([e.fontStyle],i),lineHeight:Ft([e.lineHeight],i)}),{color:Ft([e.fontColor,Ot.fontColor],i),lineWidth:Ft([e.lineWidth],i),strokeStyle:Ft([e.strokeStyle],i)})}}]),i}(Fe);jn.prototype._draw=jn.prototype.draw;var Yn=function(t){function i(t){var n;return e(this,i),(n=h(this,l(i).call(this,t)))._numLabels=0,n._startValue=void 0,n._valueRange=0,n}return s(i,t),n(i,[{key:"parse",value:function(t,e){var i=this.getLabels();if(i[e]===t)return e;var n=i.indexOf(t),a=i.lastIndexOf(t);return-1===n||n!==a?e:n}},{key:"determineDataLimits",value:function(){var t=this,e=t.getLabels().length-1;t.min=Math.max(t._userMin||0,0),t.max=Math.min(t._userMax||e,e)}},{key:"buildTicks",value:function(){var t=this,e=t.min,i=t.max,n=t.options.offset,a=t.getLabels();return a=0===e&&i===a.length-1?a:a.slice(e,i+1),t._numLabels=a.length,t._valueRange=Math.max(a.length-(n?0:1),1),t._startValue=t.min-(n?.5:0),a.map((function(t){return{value:t}}))}},{key:"getLabelForValue",value:function(t){var e=this.getLabels();return t>=0&&t<e.length?e[t]:t}},{key:"configure",value:function(){d(l(i.prototype),"configure",this).call(this),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}},{key:"getPixelForValue",value:function(t){return"number"!=typeof t&&(t=this.parse(t)),this.getPixelForDecimal((t-this._startValue)/this._valueRange)}},{key:"getPixelForTick",value:function(t){var e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(t*this._numLabels/e.length+this.min)}},{key:"getValueForPixel",value:function(t){var e=Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange);return Math.min(Math.max(e,0),this.ticks.length-1)}},{key:"getBasePixel",value:function(){return this.bottom}}]),i}(jn);function Un(t,e){var i=Math.floor(Z(t)),n=t/Math.pow(10,i);return(e?n<1.5?1:n<3?2:n<7?5:10:n<=1?1:n<=2?2:n<=5?5:10)*Math.pow(10,i)}a(Yn,"id","category"),a(Yn,"defaults",{});var Xn=function(t){function i(t){var n;return e(this,i),(n=h(this,l(i).call(this,t))).start=void 0,n.end=void 0,n._startValue=void 0,n._endValue=void 0,n._valueRange=0,n}return s(i,t),n(i,[{key:"parse",value:function(t,e){return y(t)?NaN:("number"==typeof t||t instanceof Number)&&!isFinite(+t)?NaN:+t}},{key:"handleTickRangeOptions",value:function(){var t=this,e=t.options;if(e.beginAtZero){var i=it(t.min),n=it(t.max);i<0&&n<0?t.max=0:i>0&&n>0&&(t.min=0)}var a=void 0!==e.min||void 0!==e.suggestedMin,r=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),a!==r&&t.min>=t.max&&(a?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)}},{key:"getTickLimit",value:function(){var t,e=this.options.ticks,i=e.maxTicksLimit,n=e.stepSize;return n?t=Math.ceil(this.max/n)-Math.floor(this.min/n)+1:(t=this.computeTickLimit(),i=i||11),i&&(t=Math.min(i,t)),t}},{key:"computeTickLimit",value:function(){return Number.POSITIVE_INFINITY}},{key:"handleDirectionalChanges",value:function(t){return t}},{key:"buildTicks",value:function(){var t=this,e=t.options,i=e.ticks,n=t.getTickLimit(),a=function(t,e){var i,n,a,r,o=[],s=t.stepSize,l=t.min,u=t.max,c=t.precision,h=s||1,d=t.maxTicks-1,f=e.min,v=e.max,p=Un((v-f)/d/h)*h;if(p<1e-14&&y(l)&&y(u))return[{value:f},{value:v}];(r=Math.ceil(v/p)-Math.floor(f/p))>d&&(p=Un(r*p/d/h)*h),s||y(c)?i=Math.pow(10,rt(p)):(i=Math.pow(10,c),p=Math.ceil(p*i)/i),n=Math.floor(f/p)*p,a=Math.ceil(v/p)*p,!s||y(l)||y(u)||tt((u-l)/s,p/1e3)&&(n=l,a=u),r=J(r=(a-n)/p,Math.round(r),p/1e3)?Math.round(r):Math.ceil(r),n=Math.round(n*i)/i,a=Math.round(a*i)/i,o.push({value:y(l)?n:l});for(var g=1;g<r;++g)o.push({value:Math.round((n+g*p)*i)/i});return o.push({value:y(u)?a:u}),o}({maxTicks:n=Math.max(2,n),min:e.min,max:e.max,precision:i.precision,stepSize:_(i.fixedStepSize,i.stepSize)},t);return et(a=t.handleDirectionalChanges(a),t,"value"),e.reverse?(a.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),a}},{key:"configure",value:function(){var t=this,e=t.ticks,n=t.min,a=t.max;if(d(l(i.prototype),"configure",this).call(this),t.options.offset&&e.length){var r=(a-n)/Math.max(e.length-1,1)/2;n-=r,a+=r}t._startValue=n,t._endValue=a,t._valueRange=a-n}},{key:"getLabelForValue",value:function(t){return new Intl.NumberFormat(this.options.locale).format(t)}}]),i}(jn),qn={ticks:{callback:zn.formatters.numeric}},$n=function(t){function i(){return e(this,i),h(this,l(i).apply(this,arguments))}return s(i,t),n(i,[{key:"determineDataLimits",value:function(){var t=this,e=t.options,i=t.getMinMax(!0),n=i.min,a=i.max;t.min=x(n)?n:_(e.suggestedMin,0),t.max=x(a)?a:_(e.suggestedMax,1),e.stacked&&n>0&&(t.min=0),t.handleTickRangeOptions()}},{key:"computeTickLimit",value:function(){if(this.isHorizontal())return Math.ceil(this.width/40);var t=Ct(this.options.ticks);return Math.ceil(this.height/t.lineHeight)}},{key:"handleDirectionalChanges",value:function(t){return this.isHorizontal()?t:t.reverse()}},{key:"getPixelForValue",value:function(t){return this.getPixelForDecimal((t-this._startValue)/this._valueRange)}},{key:"getValueForPixel",value:function(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}},{key:"getPixelForTick",value:function(t){var e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}}]),i}(Xn);function Gn(t){return 1===t/Math.pow(10,Math.floor(Z(t)))}function Kn(t,e){return x(t)?t:e}a($n,"id","linear"),a($n,"defaults",qn);var Zn={ticks:{callback:zn.formatters.numeric,major:{enabled:!0}}},Qn=function(t){function i(t){var n;return e(this,i),(n=h(this,l(i).call(this,t))).start=void 0,n.end=void 0,n._startValue=void 0,n._valueRange=0,n}return s(i,t),n(i,[{key:"parse",value:function(t,e){var i=Xn.prototype.parse.apply(this,[t,e]);if(0!==i)return x(i)&&i>0?i:NaN}},{key:"determineDataLimits",value:function(){var t=this.getMinMax(!0),e=t.min,i=t.max;this.min=x(e)?Math.max(0,e):null,this.max=x(i)?Math.max(0,i):null,this.handleTickRangeOptions()}},{key:"handleTickRangeOptions",value:function(){var t=this.min,e=this.max;t===e&&(t<=0?(t=1,e=10):(t=Math.pow(10,Math.floor(Z(t))-1),e=Math.pow(10,Math.floor(Z(e))+1))),t<=0&&(t=Math.pow(10,Math.floor(Z(e))-1)),e<=0&&(e=Math.pow(10,Math.floor(Z(t))+1)),this.min=t,this.max=e}},{key:"buildTicks",value:function(){var t=this,e=t.options,i=function(t,e){var i=Math.floor(Z(e.max)),n=Math.ceil(e.max/Math.pow(10,i)),a=[],r=Kn(t.min,Math.pow(10,Math.floor(Z(e.min)))),o=Math.floor(Z(r)),s=Math.floor(r/Math.pow(10,o)),l=o<0?Math.pow(10,Math.abs(o)):1;do{a.push({value:r,major:Gn(r)}),10===++s&&(s=1,l=++o>=0?1:l),r=Math.round(s*Math.pow(10,o)*l)/l}while(o<i||o===i&&s<n);var u=Kn(t.max,r);return a.push({value:u,major:Gn(r)}),a}({min:t._userMin,max:t._userMax},t),n=!t.isHorizontal();return et(i,t,"value"),e.reverse?(n=!n,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),n&&i.reverse(),i}},{key:"getLabelForValue",value:function(t){return void 0===t?"0":new Intl.NumberFormat(this.options.locale).format(t)}},{key:"getPixelForTick",value:function(t){var e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}},{key:"configure",value:function(){var t=this.min;d(l(i.prototype),"configure",this).call(this),this._startValue=Z(t),this._valueRange=Z(this.max)-Z(t)}},{key:"getPixelForValue",value:function(t){var e=this;return void 0!==t&&0!==t||(t=e.min),e.getPixelForDecimal(t===e.min?0:(Z(t)-e._startValue)/e._valueRange)}},{key:"getValueForPixel",value:function(t){var e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}]),i}(jn);a(Qn,"id","logarithmic"),a(Qn,"defaults",Zn);var Jn=pe.valueOrDefault,ta=pe.valueAtIndexOrDefault,ea=pe.options.resolve,ia={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,borderDash:[],borderDashOffset:0},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:zn.formatters.numeric},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function na(t){var e=t.ticks;return e.display&&t.display?Jn(e.fontSize,Ot.fontSize)+2*e.backdropPaddingY:0}function aa(t,e,i,n,a){return t===n||t===a?{start:e-i/2,end:e+i/2}:t<n||t>a?{start:e-i,end:e}:{start:e,end:e+i}}function ra(t){return 0===t||180===t?"center":t<180?"left":"right"}function oa(t,e,i,n){var a,r,o=i.y+n/2;if(pe.isArray(e))for(a=0,r=e.length;a<r;++a)t.fillText(e[a],i.x,o),o+=n;else t.fillText(e,i.x,o)}function sa(t,e,i){90===t||270===t?i.y-=e.h/2:(t>270||t<90)&&(i.y-=e.h)}function la(t){return Q(t)?t:0}var ua=function(t){function i(t){var n;return e(this,i),(n=h(this,l(i).call(this,t))).xCenter=void 0,n.yCenter=void 0,n.drawingArea=void 0,n.pointLabels=[],n}return s(i,t),n(i,[{key:"setDimensions",value:function(){var t=this;t.width=t.maxWidth,t.height=t.maxHeight,t.paddingTop=na(t.options)/2,t.xCenter=Math.floor(t.width/2),t.yCenter=Math.floor((t.height-t.paddingTop)/2),t.drawingArea=Math.min(t.height-t.paddingTop,t.width)/2}},{key:"determineDataLimits",value:function(){var t=this.getMinMax(!1),e=t.min,i=t.max;this.min=pe.isFinite(e)&&!isNaN(e)?e:0,this.max=pe.isFinite(i)&&!isNaN(i)?i:0,this.handleTickRangeOptions()}},{key:"computeTickLimit",value:function(){return Math.ceil(this.drawingArea/na(this.options))}},{key:"generateTickLabels",value:function(t){var e=this;Xn.prototype.generateTickLabels.call(e,t),e.pointLabels=e.chart.data.labels.map((function(t,i){var n=pe.callback(e.options.pointLabels.callback,[t,i],e);return n||0===n?n:""}))}},{key:"fit",value:function(){var t=this.options;t.display&&t.pointLabels.display?function(t){var e,i,n,a=pe.options._parseFont(t.options.pointLabels),r={l:0,r:t.width,t:0,b:t.height-t.paddingTop},o={};t.ctx.font=a.string,t._pointLabelSizes=[];var s,l,u,c=t.chart.data.labels.length;for(e=0;e<c;e++){n=t.getPointPosition(e,t.drawingArea+5),s=t.ctx,l=a.lineHeight,u=t.pointLabels[e],i=pe.isArray(u)?{w:B(s,s.font,u),h:u.length*l}:{w:s.measureText(u).width,h:l},t._pointLabelSizes[e]=i;var h=t.getIndexAngle(e),d=at(h),f=aa(d,n.x,i.w,0,180),v=aa(d,n.y,i.h,90,270);f.start<r.l&&(r.l=f.start,o.l=h),f.end>r.r&&(r.r=f.end,o.r=h),v.start<r.t&&(r.t=v.start,o.t=h),v.end>r.b&&(r.b=v.end,o.b=h)}t._setReductions(t.drawingArea,r,o)}(this):this.setCenterPoint(0,0,0,0)}},{key:"_setReductions",value:function(t,e,i){var n=this,a=e.l/Math.sin(i.l),r=Math.max(e.r-n.width,0)/Math.sin(i.r),o=-e.t/Math.cos(i.t),s=-Math.max(e.b-(n.height-n.paddingTop),0)/Math.cos(i.b);a=la(a),r=la(r),o=la(o),s=la(s),n.drawingArea=Math.min(Math.floor(t-(a+r)/2),Math.floor(t-(o+s)/2)),n.setCenterPoint(a,r,o,s)}},{key:"setCenterPoint",value:function(t,e,i,n){var a=this,r=a.width-e-a.drawingArea,o=t+a.drawingArea,s=i+a.drawingArea,l=a.height-a.paddingTop-n-a.drawingArea;a.xCenter=Math.floor((o+r)/2+a.left),a.yCenter=Math.floor((s+l)/2+a.top+a.paddingTop)}},{key:"getIndexAngle",value:function(t){var e=this.chart;return lt(t*(2*Math.PI/e.data.labels.length)+nt((e.options||{}).startAngle||0))}},{key:"getDistanceFromCenterForValue",value:function(t){var e=this;if(pe.isNullOrUndef(t))return NaN;var i=e.drawingArea/(e.max-e.min);return e.options.reverse?(e.max-t)*i:(t-e.min)*i}},{key:"getPointPosition",value:function(t,e){var i=this.getIndexAngle(t)-Math.PI/2;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}},{key:"getPointPositionForValue",value:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}},{key:"getBasePosition",value:function(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}},{key:"drawGrid",value:function(){var t,e,i,n=this,a=n.ctx,r=n.options,o=r.gridLines,s=r.angleLines,l=Jn(s.lineWidth,o.lineWidth),u=Jn(s.color,o.color);if(r.pointLabels.display&&function(t){var e=t.ctx,i=t.options,n=i.pointLabels,a=na(i),r=t.getDistanceFromCenterForValue(i.ticks.reverse?t.min:t.max),o=pe.options._parseFont(n);e.save(),e.font=o.string,e.textBaseline="middle";for(var s=t.chart.data.labels.length-1;s>=0;s--){var l=0===s?a/2:0,u=t.getPointPosition(s,r+l+5),c=ta(n.fontColor,s,Ot.fontColor);e.fillStyle=c;var h=at(t.getIndexAngle(s));e.textAlign=ra(h),sa(h,t._pointLabelSizes[s],u),oa(e,t.pointLabels[s],u,o.lineHeight)}e.restore()}(n),o.display&&n.ticks.forEach((function(t,i){0!==i&&(e=n.getDistanceFromCenterForValue(n.ticks[i].value),function(t,e,i,n){var a,r=t.ctx,o=e.circular,s=t.chart.data.labels.length,l=ta(e.color,n-1,void 0),u=ta(e.lineWidth,n-1,void 0);if((o||s)&&l&&u){if(r.save(),r.strokeStyle=l,r.lineWidth=u,r.setLineDash&&(r.setLineDash(e.borderDash||[]),r.lineDashOffset=e.borderDashOffset||0),r.beginPath(),o)r.arc(t.xCenter,t.yCenter,i,0,2*Math.PI);else{a=t.getPointPosition(0,i),r.moveTo(a.x,a.y);for(var c=1;c<s;c++)a=t.getPointPosition(c,i),r.lineTo(a.x,a.y)}r.closePath(),r.stroke(),r.restore()}}(n,o,e,i))})),s.display&&l&&u){for(a.save(),a.lineWidth=l,a.strokeStyle=u,a.setLineDash&&(a.setLineDash(ea([s.borderDash,o.borderDash,[]])),a.lineDashOffset=ea([s.borderDashOffset,o.borderDashOffset,0])),t=n.chart.data.labels.length-1;t>=0;t--)e=n.getDistanceFromCenterForValue(r.ticks.reverse?n.min:n.max),i=n.getPointPosition(t,e),a.beginPath(),a.moveTo(n.xCenter,n.yCenter),a.lineTo(i.x,i.y),a.stroke();a.restore()}}},{key:"drawLabels",value:function(){var t=this,e=t.ctx,i=t.options,n=i.ticks;if(n.display){var a,r,o=t.getIndexAngle(0),s=pe.options._parseFont(n),l=Jn(n.fontColor,Ot.fontColor);e.save(),e.font=s.string,e.translate(t.xCenter,t.yCenter),e.rotate(o),e.textAlign="center",e.textBaseline="middle",t.ticks.forEach((function(o,u){(0!==u||i.reverse)&&(a=t.getDistanceFromCenterForValue(t.ticks[u].value),n.showLabelBackdrop&&(r=e.measureText(o.label).width,e.fillStyle=n.backdropColor,e.fillRect(-r/2-n.backdropPaddingX,-a-s.size/2-n.backdropPaddingY,r+2*n.backdropPaddingX,s.size+2*n.backdropPaddingY)),e.fillStyle=l,e.fillText(o.label,0,-a))})),e.restore()}}},{key:"drawTitle",value:function(){}}]),i}(Xn);a(ua,"id","radialLinear"),a(ua,"defaults",ia);var ca=Number.MAX_SAFE_INTEGER||9007199254740991,ha={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},da=Object.keys(ha);function fa(t,e){return t-e}function va(t){var e,i,n=new Set;for(e=0,i=t.length;e<i;++e)n.add(t[e]);return n.size===i?t:f(n)}function pa(t,e){if(y(e))return null;var i=t._adapter,n=t.options.time,a=n.parser,r=e;return"function"==typeof a&&(r=a(r)),x(r)||(r="string"==typeof a?i.parse(r,a):i.parse(r)),null===r?r:(n.round&&(r=t._adapter.startOf(r,n.round)),+r)}function ga(t){var e,i,n="series"===t.options.distribution,a=t._cache.data||[];if(a.length)return a;var r=t.getMatchingVisibleMetas();if(n&&r.length)return r[0].controller.getAllParsedValues(t);for(e=0,i=r.length;e<i;++e)a=a.concat(r[e].controller.getAllParsedValues(t));return t._cache.data=va(a.sort(fa))}function ya(t){var e,i,n="series"===t.options.distribution,a=t._cache.labels||[];if(a.length)return a;var r=t.getLabels();for(e=0,i=r.length;e<i;++e)a.push(pa(t,r[e]));return t._cache.labels=n?a:va(a.sort(fa))}function ma(t,e,i,n){var a=_i(t,e,i),r=a.lo,o=a.hi,s=t[r],l=t[o],u=l[e]-s[e],c=u?(i-s[e])/u:0,h=(l[n]-s[n])*c;return s[n]+h}function ba(t,e,i,n){for(var a=da.length,r=da.indexOf(t);r<a-1;++r){var o=ha[da[r]],s=o.steps?o.steps:ca;if(o.common&&Math.ceil((i-e)/(s*o.size))<=n)return da[r]}return da[a-1]}function xa(t,e,i){if(t.length){var n=function(t,e){for(var i,n=t.length-1,a=0;n-a>1;)t[i=a+n>>1]<e?a=i:n=i;return{lo:a,hi:n}}(t,i),a=n.lo,r=n.hi,o=t[a]>=i?t[a]:t[r];e.add(o)}}function _a(t,e,i){var n,a,r=[],o={},s=e.length;for(n=0;n<s;++n)o[a=e[n]]=n,r.push({value:a,major:!1});return 0!==s&&i?function(t,e,i,n){var a,r,o=t._adapter,s=+o.startOf(e[0].value,n),l=e[e.length-1].value;for(a=s;a<=l;a=+o.add(a,1,n))(r=i[a])>=0&&(e[r].major=!0);return e}(t,r,o,i):r}function ka(t){return"labels"===t.options.ticks.source?ya(t):function(t){var e,i=t._adapter,n=t.min,a=t.max,r=t.options,o=r.time,s=o.unit||ba(o.minUnit,n,a,t._getLabelCapacity(n)),l=_(o.stepSize,1),u="week"===s&&o.isoWeekday,c=new Set,h=n;if(u&&(h=+i.startOf(h,"isoWeek",u)),h=+i.startOf(h,u?"day":s),i.diff(a,n,s)>1e5*l)throw new Error(n+" and "+a+" are too far apart with stepSize of "+l+" "+s);if("data"===t.options.ticks.source){var d=ga(t);for(e=h;e<a;e=+i.add(e,l,s))xa(d,c,e);e!==a&&"ticks"!==r.bounds||xa(d,c,e)}else{for(e=h;e<a;e=+i.add(e,l,s))c.add(e);e!==a&&"ticks"!==r.bounds||c.add(e)}return f(c)}(t)}function Ma(t){return"series"===t.options.distribution?function(t){var e=t._cache.all||[];if(e.length)return e;var i=ga(t),n=ya(t);return e=i.length&&n.length?va(i.concat(n).sort(fa)):i.length?i:n,e=t._cache.all=e}(t):[t.min,t.max]}var wa=function(t){function i(t){var n;e(this,i);var a=(n=h(this,l(i).call(this,t))).options,r=a.time||(a.time={}),o=n._adapter=new Rn._date(a.adapters.date);return n._cache={data:[],labels:[],all:[]},n._unit="day",n._majorUnit=void 0,n._offsets={},n._table=[],D(r.displayFormats,o.formats()),n}return s(i,t),n(i,[{key:"parse",value:function(t,e){return void 0===t?NaN:pa(this,t)}},{key:"parseObject",value:function(t,e,i){return t&&t.t?this.parse(t.t,i):void 0!==t[e]?this.parse(t[e],i):null}},{key:"invalidateCaches",value:function(){this._cache={data:[],labels:[],all:[]}}},{key:"determineDataLimits",value:function(){var t=this,e=t.options,i=t._adapter,n=e.time.unit||"day",a=t.getUserBounds(),r=a.min,o=a.max,s=a.minDefined,l=a.maxDefined;function u(t){s||isNaN(t.min)||(r=Math.min(r,t.min)),l||isNaN(t.max)||(o=Math.max(o,t.max))}s&&l||(u(function(t){var e=ya(t),i=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return e.length&&(i=e[0],n=e[e.length-1]),{min:i,max:n}}(t)),"ticks"===e.bounds&&"labels"===e.ticks.source||u(t.getMinMax(!1))),r=x(r)&&!isNaN(r)?r:+i.startOf(Date.now(),n),o=x(o)&&!isNaN(o)?o:+i.endOf(Date.now(),n)+1,t.min=Math.min(r,o),t.max=Math.max(r+1,o)}},{key:"buildTicks",value:function(){var t=this,e=t.options,i=e.time,n=e.ticks,a=e.distribution,r=ka(t);"ticks"===e.bounds&&r.length&&(t.min=t._userMin||r[0],t.max=t._userMax||r[r.length-1]);var o=t.min,s=t.max,l=function(t,e,i){for(var n=0,a=t.length-1;n<a&&t[n]<e;)n++;for(;a>n&&t[a]>i;)a--;return a++,n>0||a<t.length?t.slice(n,a):t}(r,o,s);return t._unit=i.unit||(n.autoSkip?ba(i.minUnit,t.min,t.max,t._getLabelCapacity(o)):function(t,e,i,n,a){for(var r=da.length-1;r>=da.indexOf(i);r--){var o=da[r];if(ha[o].common&&t._adapter.diff(a,n,o)>=e-1)return o}return da[i?da.indexOf(i):0]}(t,l.length,i.minUnit,t.min,t.max)),t._majorUnit=n.major.enabled&&"year"!==t._unit?function(t){for(var e=da.indexOf(t)+1,i=da.length;e<i;++e)if(ha[da[e]].common)return da[e]}(t._unit):void 0,t._table=function(t,e,i,n){if("linear"===n||!t.length)return[{time:e,pos:0},{time:i,pos:1}];var a,r,o,s,l,u=[],c=[e];for(a=0,r=t.length;a<r;++a)(s=t[a])>e&&s<i&&c.push(s);for(c.push(i),a=0,r=c.length;a<r;++a)l=c[a+1],o=c[a-1],s=c[a],void 0!==o&&void 0!==l&&Math.round((l+o)/2)===s||u.push({time:s,pos:a/(r-1)});return u}(Ma(t),o,s,a),t._offsets=function(t,e,i,n,a){var r,o,s=0,l=0;return a.offset&&e.length&&(r=ma(t,"time",e[0],"pos"),s=1===e.length?1-r:(ma(t,"time",e[1],"pos")-r)/2,o=ma(t,"time",e[e.length-1],"pos"),l=1===e.length?o:(o-ma(t,"time",e[e.length-2],"pos"))/2),{start:s,end:l,factor:1/(s+1+l)}}(t._table,ga(t),0,0,e),e.reverse&&l.reverse(),_a(t,l,t._majorUnit)}},{key:"getLabelForValue",value:function(t){var e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}},{key:"_tickFormatFunction",value:function(t,e,i,n){var a=this.options,r=a.time.displayFormats,o=this._unit,s=this._majorUnit,l=o&&r[o],u=s&&r[s],c=i[e],h=s&&u&&c&&c.major,d=this._adapter.format(t,n||(h?u:l)),f=a.ticks.callback;return f?f(d,e,i):d}},{key:"generateTickLabels",value:function(t){var e,i,n;for(e=0,i=t.length;e<i;++e)(n=t[e]).label=this._tickFormatFunction(n.value,e,t)}},{key:"getPixelForValue",value:function(t){var e=this._offsets,i=ma(this._table,"time",t,"pos");return this.getPixelForDecimal((e.start+i)*e.factor)}},{key:"getPixelForTick",value:function(t){var e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}},{key:"getValueForPixel",value:function(t){var e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return ma(this._table,"pos",i,"time")}},{key:"_getLabelSize",value:function(t){var e=this.options.ticks,i=this.ctx.measureText(t).width,n=nt(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(n),r=Math.sin(n),o=_(e.fontSize,Ot.fontSize);return{w:i*a+o*r,h:i*r+o*a}}},{key:"_getLabelCapacity",value:function(t){var e=this,i=e.options.time,n=i.displayFormats,a=n[i.unit]||n.millisecond,r=e._tickFormatFunction(t,0,_a(e,[t],e._majorUnit),a),o=e._getLabelSize(r),s=Math.floor(e.isHorizontal()?e.width/o.w:e.height/o.h)-1;return s>0?s:1}}]),i}(jn);a(wa,"id","time"),a(wa,"defaults",{distribution:"linear",bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}});var Sa=Object.freeze({__proto__:null,CategoryScale:Yn,LinearScale:$n,LogarithmicScale:Qn,RadialLinearScale:ua,TimeScale:wa});function Pa(t,e,i){var n=function(t){var e=t.options,i=e.fill,n=_(i&&i.target,i);return void 0===n&&(n=!!e.backgroundColor),!1!==n&&null!==n&&(!0===n?"origin":n)}(t),a=parseFloat(n);return x(a)&&Math.floor(a)===a?("-"!==n[0]&&"+"!==n[0]||(a=e+a),!(a===e||a<0||a>=i)&&a):["origin","start","end"].indexOf(n)>=0&&n}Ot.set("plugins",{filler:{propagate:!0}});var Da=function(){function t(i){e(this,t),this.x=i.x,this.y=i.y,this.radius=i.radius}return n(t,[{key:"pathSegment",value:function(t,e,i){var n=this.x,a=this.y,r=this.radius;return e=e||{start:0,end:2*Math.PI},i.reverse?t.arc(n,a,r,e.end,e.start,!0):t.arc(n,a,r,e.start,e.end),!i.bounds}},{key:"interpolate",value:function(t,e){var i=this.x,n=this.y,a=this.radius,r=t.angle;if("angle"===e)return{x:i+Math.cos(r)*a,y:n+Math.sin(r)*a,angle:r}}}]),t}();function Oa(t){return(t.scale||{}).getPointPositionForValue?function(t){var e,i,n=t.scale,a=t.fill,r=n.options,o=n.getLabels().length,s=[],l=r.reverse?n.max:n.min,u=r.reverse?n.min:n.max,c="start"===a?l:"end"===a?u:n.getBaseValue();if(r.gridLines.circular)return i=n.getPointPositionForValue(0,l),new Da({x:i.x,y:i.y,radius:n.getDistanceFromCenterForValue(c)});for(e=0;e<o;++e)s.push(n.getPointPositionForValue(e,c));return s}(t):function(t){var e,i=t.scale,n=void 0===i?{}:i,a=t.fill,r=null;return"start"===a?r=n.bottom:"end"===a?r=n.top:n.getBasePixel&&(r=n.getBasePixel()),x(r)?{x:(e=n.isHorizontal())?r:null,y:e?null:r}:null}(t)}function Aa(t){var e=t.chart,i=t.fill,n=t.line;if(x(i))return function(t,e){var i=t.getDatasetMeta(e);return i&&t.isDatasetVisible(e)?i.dataset:null}(e,i);var a=Oa(t),r=[],o=!1,s=!1;return a instanceof Da?a:(m(a)?(o=!0,r=a):(r=function(t,e){var i=t||{},n=i.x,a=void 0===n?null:n,r=i.y,o=void 0===r?null:r,s=e.points,l=[];return e.segments.forEach((function(t){var e=s[t.start],i=s[t.end];null!==o?(l.push({x:e.x,y:o,_prop:"x",_ref:e}),l.push({x:i.x,y:o,_prop:"x",_ref:i})):null!==a&&(l.push({x:a,y:e.y,_prop:"y",_ref:e}),l.push({x:a,y:i.y,_prop:"y",_ref:i}))})),l}(a,n),s=!0),r.length?new Ge({points:r,options:{tension:0},_loop:o,_fullLoop:o,_refPoints:s}):null)}function Ta(t,e,i){var n,a=t[e].fill,r=[e];if(!i)return a;for(;!1!==a&&-1===r.indexOf(a);){if(!x(a))return a;if(!(n=t[a]))return!1;if(n.visible)return a;r.push(a),a=n.fill}return!1}function Ca(t,e,i){t.beginPath(),e.path(t),t.lineTo(e.last().x,i),t.lineTo(e.first().x,i),t.closePath(),t.clip()}function Fa(t,e,i,n){if(!n){var a=e[t],r=i[t];return"angle"===t&&(a=lt(a),r=lt(r)),{property:t,start:a,end:r}}}function Ea(t,e,i,n){return t&&e?n(t[i],e[i]):t?t[i]:e?e[i]:0}function Ia(t,e,i){var n=e.chart.chartArea,a=n.top,r=n.bottom,o=i||{},s=o.property,l=o.start,u=o.end;"x"===s&&(t.beginPath(),t.rect(l,a,u-l,r-a),t.clip())}function La(t,e,i,n){var a=e.interpolate(i,n);a&&t.lineTo(a.x,a.y)}function Ra(t,e){var i=e.line,n=e.target,r=e.property,o=e.color,s=e.scale,l=function(t,e,i){var n=t.segments,r=t.points,o=e.points,s=[];if(e._refPoints)for(var l=0,u=o.length;l<u;++l){var c=o[l],h=c._prop;h&&(c[h]=c._ref[h])}for(var d=0;d<n.length;d++){var f=n[d],v=Fa(i,r[f.start],r[f.end],f.loop);if(e.segments)for(var p=je(e,v),g=0;g<p.length;++g)for(var y=p[g],m=Fa(i,o[y.start],o[y.end],y.loop),b=He(f,r,m),x=0;x<b.length;x++)s.push({source:b[x],target:y,start:a({},i,Ea(v,m,"start",Math.max)),end:a({},i,Ea(v,m,"end",Math.min))});else s.push({source:f,target:v,start:r[f.start],end:r[f.end]})}return s}(e.line,e.target,r);t.fillStyle=o;for(var u=0,c=l.length;u<c;++u){var h=l[u],d=h.source,f=h.target,v=h.start,p=h.end;t.save(),Ia(t,s,Fa(r,v,p)),t.beginPath();var g=!!i.pathSegment(t,d);g?t.closePath():La(t,n,p,r);var y=!!n.pathSegment(t,f,{move:g,reverse:!0}),m=g&&y;m||La(t,n,v,r),t.closePath(),t.fill(m?"evenodd":"nonzero"),t.restore()}}var za={id:"filler",afterDatasetsUpdate:function(t,e){var i,n,a,r,o=(t.data.datasets||[]).length,s=e.propagate,l=[];for(n=0;n<o;++n)r=null,(a=(i=t.getDatasetMeta(n)).dataset)&&a.options&&a instanceof Ge&&(r={visible:t.isDatasetVisible(n),fill:Pa(a,n,o),chart:t,scale:i.vScale,line:a,target:void 0}),i.$filler=r,l.push(r);for(n=0;n<o;++n)(r=l[n])&&!1!==r.fill&&(r.fill=Ta(l,n,s),r.target=!1!==r.fill&&Aa(r))},beforeDatasetsDraw:function(t){var e,i,n=t.getSortedVisibleDatasetMetas(),a=t.chartArea;for(e=n.length-1;e>=0;--e)(i=n[e].$filler)&&i.line.updateControlPoints(a)},beforeDatasetDraw:function(t,e){var i=t.chartArea,n=t.ctx,a=e.meta.$filler;if(a&&!1!==a.fill){var r=a.line,o=a.target,s=a.scale,l=r.options,u=l.fill,c=l.backgroundColor||Ot.color,h=u||{},d=h.above,f=void 0===d?c:d,v=h.below,p=void 0===v?c:v;o&&r.points.length&&(H(n,i),function(t,e){var i=e.line,n=e.target,a=e.above,r=e.below,o=e.area,s=e.scale,l=i._loop?"angle":"x";t.save(),"x"===l&&r!==a&&(Ca(t,n,o.top),Ra(t,{line:i,target:n,color:a,scale:s,property:l}),t.restore(),t.save(),Ca(t,n,o.bottom)),Ra(t,{line:i,target:n,color:r,scale:s,property:l}),t.restore()}(n,{line:r,target:o,above:f,below:p,area:i,scale:s}),j(n))}}};function Ba(t,e){return t.usePointStyle&&t.boxWidth>e?e:t.boxWidth}Ot.set("legend",{display:!0,position:"top",align:"center",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var i=e.datasetIndex,n=this.chart;n.isDatasetVisible(i)?(n.hide(i),e.hidden=!0):(n.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data.datasets,i=t.options.legend||{},n=i.labels&&i.labels.usePointStyle;return t._getSortedDatasetMetas().map((function(t){var i=t.controller.getStyle(n?0:void 0);return{text:e[t.index].label,fillStyle:i.backgroundColor,hidden:!t.visible,lineCap:i.borderCapStyle,lineDash:i.borderDash,lineDashOffset:i.borderDashOffset,lineJoin:i.borderJoinStyle,lineWidth:i.borderWidth,strokeStyle:i.borderColor,pointStyle:i.pointStyle,rotation:i.rotation,datasetIndex:t.index}}),this)}},title:{display:!1,position:"center",text:""}});var Va=function(t){function i(t){var n;return e(this,i),r(c(n=h(this,l(i).call(this))),t),n.legendHitBoxes=[],n._hoveredItem=null,n.doughnutMode=!1,n.chart=t.chart,n.options=t.options,n.ctx=t.ctx,n.legendItems=void 0,n.columnWidths=void 0,n.columnHeights=void 0,n.lineWidths=void 0,n._minSize=void 0,n.maxHeight=void 0,n.maxWidth=void 0,n.top=void 0,n.bottom=void 0,n.left=void 0,n.right=void 0,n.height=void 0,n.width=void 0,n._margins=void 0,n.paddingTop=void 0,n.paddingBottom=void 0,n.paddingLeft=void 0,n.paddingRight=void 0,n.position=void 0,n.weight=void 0,n.fullWidth=void 0,n}return s(i,t),n(i,[{key:"beforeUpdate",value:function(){}},{key:"update",value:function(t,e,i){var n=this;n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n._margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate()}},{key:"afterUpdate",value:function(){}},{key:"beforeSetDimensions",value:function(){}},{key:"setDimensions",value:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t._minSize={width:0,height:0}}},{key:"afterSetDimensions",value:function(){}},{key:"beforeBuildLabels",value:function(){}},{key:"buildLabels",value:function(){var t=this,e=t.options.labels||{},i=k(e.generateLabels,[t.chart],t)||[];e.filter&&(i=i.filter((function(i){return e.filter(i,t.chart.data)}))),t.options.reverse&&i.reverse(),t.legendItems=i}},{key:"afterBuildLabels",value:function(){}},{key:"beforeFit",value:function(){}},{key:"fit",value:function(){var t=this,e=t.options,i=e.labels,n=e.display,a=t.ctx,r=Ct(i),o=r.size,s=t.legendHitBoxes=[],l=t._minSize,u=t.isHorizontal(),c=t._computeTitleHeight();if(u?(l.width=t.maxWidth,l.height=n?10:0):(l.width=n?10:0,l.height=t.maxHeight),n){if(a.font=r.string,u){var h=t.lineWidths=[0],d=c;a.textAlign="left",a.textBaseline="middle",t.legendItems.forEach((function(t,e){var n=Ba(i,o)+o/2+a.measureText(t.text).width;(0===e||h[h.length-1]+n+2*i.padding>l.width)&&(d+=o+i.padding,h[h.length-(e>0?0:1)]=0),s[e]={left:0,top:0,width:n,height:o},h[h.length-1]+=n+i.padding})),l.height+=d}else{var f=i.padding,v=t.columnWidths=[],p=t.columnHeights=[],g=i.padding,y=0,m=0,b=l.height-c;t.legendItems.forEach((function(t,e){var n=Ba(i,o)+o/2+a.measureText(t.text).width;e>0&&m+o+2*f>b&&(g+=y+i.padding,v.push(y),p.push(m),y=0,m=0),y=Math.max(y,n),m+=o+f,s[e]={left:0,top:0,width:n,height:o}})),g+=y,v.push(y),p.push(m),l.width+=g}t.width=l.width,t.height=l.height}else t.width=l.width=t.height=l.height=0}},{key:"afterFit",value:function(){}},{key:"isHorizontal",value:function(){return"top"===this.options.position||"bottom"===this.options.position}},{key:"draw",value:function(){var t=this,e=t.options,i=e.labels,n=Ot.color,a=Ot.elements.line,r=t.height,o=t.columnHeights,s=t.width,l=t.lineWidths;if(e.display){t.drawTitle();var u,c=It(e.rtl,t.left,t._minSize.width),h=t.ctx,d=_(i.fontColor,Ot.fontColor),f=Ct(i),v=f.size;h.textAlign=c.textAlign("left"),h.textBaseline="middle",h.lineWidth=.5,h.strokeStyle=d,h.fillStyle=d,h.font=f.string;var p=Ba(i,v),g=t.legendHitBoxes,y=function(t,n){switch(e.align){case"start":return i.padding;case"end":return t-n;default:return(t-n+i.padding)/2}},m=t.isHorizontal(),b=this._computeTitleHeight();u=m?{x:t.left+y(s,l[0]),y:t.top+i.padding+b,line:0}:{x:t.left+i.padding,y:t.top+y(r,o[0])+b,line:0},Lt(t.ctx,e.textDirection);var x=v+i.padding;t.legendItems.forEach((function(e,d){var f=h.measureText(e.text).width,b=p+v/2+f,k=u.x,M=u.y;c.setWidth(t._minSize.width),m?d>0&&k+b+i.padding>t.left+t._minSize.width&&(M=u.y+=x,u.line++,k=u.x=t.left+y(s,l[u.line])):d>0&&M+x>t.top+t._minSize.height&&(k=u.x=k+t.columnWidths[u.line]+i.padding,u.line++,M=u.y=t.top+y(r,o[u.line]));var w=c.x(k);!function(t,e,r){if(!(isNaN(p)||p<=0)){h.save();var o=_(r.lineWidth,a.borderWidth);if(h.fillStyle=_(r.fillStyle,n),h.lineCap=_(r.lineCap,a.borderCapStyle),h.lineDashOffset=_(r.lineDashOffset,a.borderDashOffset),h.lineJoin=_(r.lineJoin,a.borderJoinStyle),h.lineWidth=o,h.strokeStyle=_(r.strokeStyle,n),h.setLineDash&&h.setLineDash(_(r.lineDash,a.borderDash)),i&&i.usePointStyle){var s={radius:p*Math.SQRT2/2,pointStyle:r.pointStyle,rotation:r.rotation,borderWidth:o},l=c.xPlus(t,p/2);W(h,s,l,e+v/2)}else h.fillRect(c.leftForLtr(t,p),e,p,v),0!==o&&h.strokeRect(c.leftForLtr(t,p),e,p,v);h.restore()}}(w,M,e),g[d].left=c.leftForLtr(w,g[d].width),g[d].top=M,function(t,e,i,n){var a=v/2,r=c.xPlus(t,p+a),o=e+a;h.fillText(i.text,r,o),i.hidden&&(h.beginPath(),h.lineWidth=2,h.moveTo(r,o),h.lineTo(c.xPlus(r,n),o),h.stroke())}(w,M,e,f),m?u.x+=b+i.padding:u.y+=x})),Rt(t.ctx,e.textDirection)}}},{key:"drawTitle",value:function(){var t=this,e=t.options,i=e.title,n=Ct(i),a=Tt(i.padding);if(i.display){var r,o,s=It(e.rtl,t.left,t._minSize.width),l=t.ctx,u=_(i.fontColor,Ot.fontColor),c=i.position,h=n.size/2,d=t.top+a.top+h,v=t.left,p=t.width;if(this.isHorizontal())switch(p=Math.max.apply(Math,f(t.lineWidths)),e.align){case"start":break;case"end":v=t.right-p;break;default:v=(t.left+t.right)/2-p/2}else{var g=Math.max.apply(Math,f(t.columnHeights));switch(e.align){case"start":break;case"end":d+=t.height-g;break;default:d+=(t.height-g)/2}}switch(c){case"start":r=v,o="left";break;case"end":r=v+p,o="right";break;default:r=v+p/2,o="center"}l.textAlign=s.textAlign(o),l.textBaseline="middle",l.strokeStyle=u,l.fillStyle=u,l.font=n.string,l.fillText(i.text,r,d)}}},{key:"_computeTitleHeight",value:function(){var t=this.options.title,e=Ct(t),i=Tt(t.padding);return t.display?e.lineHeight+i.height:0}},{key:"_getLegendItemAt",value:function(t,e){var i,n,a,r=this;if(t>=r.left&&t<=r.right&&e>=r.top&&e<=r.bottom)for(a=r.legendHitBoxes,i=0;i<a.length;++i)if(t>=(n=a[i]).left&&t<=n.left+n.width&&e>=n.top&&e<=n.top+n.height)return r.legendItems[i];return null}},{key:"handleEvent",value:function(t){var e=this,i=e.options,n="mouseup"===t.type?"click":t.type;if("mousemove"===n){if(!i.onHover&&!i.onLeave)return}else{if("click"!==n)return;if(!i.onClick)return}var a=e._getLegendItemAt(t.x,t.y);"click"===n?a&&i.onClick&&i.onClick.call(e,t.native,a):(i.onLeave&&a!==e._hoveredItem&&(e._hoveredItem&&i.onLeave.call(e,t.native,e._hoveredItem),e._hoveredItem=a),i.onHover&&a&&i.onHover.call(e,t.native,a))}}]),i}(Fe);function Wa(t,e){var i=new Va({ctx:t.ctx,options:e,chart:t});Vi.configure(t,i,e),Vi.addBox(t,i),t.legend=i}var Na={id:"legend",_element:Va,beforeInit:function(t){var e=t.options.legend;e&&Wa(t,e)},afterUpdate:function(t){var e=t.options.legend,i=t.legend;e?(D(e,Ot.legend),i?(Vi.configure(t,i,e),i.options=e,i.buildLabels()):Wa(t,e)):i&&(Vi.removeBox(t,i),delete t.legend)},afterEvent:function(t,e){var i=t.legend;i&&i.handleEvent(e)}};Ot.set("title",{align:"center",display:!1,fontStyle:"bold",fullWidth:!0,padding:10,position:"top",text:"",weight:2e3});var Ha=function(t){function i(t){var n;return e(this,i),r(c(n=h(this,l(i).call(this))),t),n.chart=t.chart,n.options=t.options,n.ctx=t.ctx,n._margins=void 0,n._padding=void 0,n.legendHitBoxes=[],n.top=void 0,n.bottom=void 0,n.left=void 0,n.right=void 0,n.width=void 0,n.height=void 0,n.maxWidth=void 0,n.maxHeight=void 0,n.position=void 0,n.weight=void 0,n.fullWidth=void 0,n}return s(i,t),n(i,[{key:"beforeUpdate",value:function(){}},{key:"update",value:function(t,e,i){var n=this;n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n._margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate()}},{key:"afterUpdate",value:function(){}},{key:"beforeSetDimensions",value:function(){}},{key:"setDimensions",value:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height)}},{key:"afterSetDimensions",value:function(){}},{key:"beforeBuildLabels",value:function(){}},{key:"buildLabels",value:function(){}},{key:"afterBuildLabels",value:function(){}},{key:"beforeFit",value:function(){}},{key:"fit",value:function(){var t=this,e=t.options,i={},n=t.isHorizontal();if(e.display){var a=pe.isArray(e.text)?e.text.length:1;t._padding=pe.options.toPadding(e.padding);var r=a*pe.options._parseFont(e).lineHeight+t._padding.height;t.width=i.width=n?t.maxWidth:r,t.height=i.height=n?r:t.maxHeight}else t.width=i.width=t.height=i.height=0}},{key:"afterFit",value:function(){}},{key:"isHorizontal",value:function(){var t=this.options.position;return"top"===t||"bottom"===t}},{key:"draw",value:function(){var t=this,e=t.ctx,i=t.options;if(i.display){var n,a,r,o,s=pe.options._parseFont(i),l=s.lineHeight,u=l/2+t._padding.top,c=0,h=t.top,d=t.left,f=t.bottom,v=t.right;if(t.isHorizontal()){switch(i.align){case"start":a=d,o="left";break;case"end":a=v,o="right";break;default:a=d+(v-d)/2,o="center"}r=h+u,n=v-d}else{switch(a="left"===i.position?d+u:v-u,i.align){case"start":r="left"===i.position?f:h,o="left";break;case"end":r="left"===i.position?h:f,o="right";break;default:r=h+(f-h)/2,o="center"}n=f-h,c=Math.PI*("left"===i.position?-.5:.5)}e.save(),e.fillStyle=pe.valueOrDefault(i.fontColor,Ot.fontColor),e.font=s.string,e.translate(a,r),e.rotate(c),e.textAlign=o,e.textBaseline="middle";var p=i.text;if(pe.isArray(p))for(var g=0,y=0;y<p.length;++y)e.fillText(p[y],0,g,n),g+=l;else e.fillText(p,0,0,n);e.restore()}}}]),i}(Fe);function ja(t,e){var i=new Ha({ctx:t.ctx,options:e,chart:t});Vi.configure(t,i,e),Vi.addBox(t,i),t.titleBlock=i}var Ya={id:"title",_element:Ha,beforeInit:function(t){var e=t.options.title;e&&ja(t,e)},beforeUpdate:function(t){var e=t.options.title,i=t.titleBlock;e?(pe.mergeIf(e,Ot.title),i?(Vi.configure(t,i,e),i.options=e):ja(t,e)):i&&(Vi.removeBox(t,i),delete t.titleBlock)}},Ua=pe.valueOrDefault,Xa=pe.rtl.getRtlAdapter;Ot.set("tooltips",{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart",numbers:{type:"number",properties:["x","y","width","height"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:pe.noop,title:function(t,e){var i="",n=e.labels,a=n?n.length:0;if(t.length>0){var r=t[0];r.label?i=r.label:a>0&&r.index<a&&(i=n[r.index])}return i},afterTitle:pe.noop,beforeBody:pe.noop,beforeLabel:pe.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";i&&(i+=": ");var n=t.value;return pe.isNullOrUndef(n)||(i+=n),i},labelColor:function(t,e){var i=e.getDatasetMeta(t.datasetIndex).controller.getStyle(t.index);return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},labelTextColor:function(){return this.options.bodyFontColor},afterLabel:pe.noop,afterBody:pe.noop,beforeFooter:pe.noop,footer:pe.noop,afterFooter:pe.noop}});var qa={average:function(t){if(!t.length)return!1;var e,i,n=0,a=0,r=0;for(e=0,i=t.length;e<i;++e){var o=t[e].element;if(o&&o.hasValue()){var s=o.tooltipPosition();n+=s.x,a+=s.y,++r}}return{x:n/r,y:a/r}},nearest:function(t,e){var i,n,a,r=e.x,o=e.y,s=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){var l=t[i].element;if(l&&l.hasValue()){var u=l.getCenterPoint(),c=pe.math.distanceBetweenPoints(e,u);c<s&&(s=c,a=l)}}if(a){var h=a.tooltipPosition();r=h.x,o=h.y}return{x:r,y:o}}};function $a(t,e){return e&&(pe.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Ga(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function Ka(t,e){var i=e.datasetIndex,n=e.index,a=t.getDatasetMeta(i).controller.getLabelAndValue(n);return{label:a.label,value:a.value,index:n,datasetIndex:i}}function Za(t){var e=t._chart.ctx,i=t.body,n=t.footer,a=t.options,r=t.title,o=a.bodyFontSize,s=a.footerFontSize,l=a.titleFontSize,u=a.boxWidth,c=a.boxHeight,h=r.length,d=n.length,f=i.length,v=2*a.yPadding,p=0,g=i.reduce((function(t,e){return t+e.before.length+e.lines.length+e.after.length}),0);(g+=t.beforeBody.length+t.afterBody.length,h&&(v+=h*l+(h-1)*a.titleSpacing+a.titleMarginBottom),g)&&(v+=f*(a.displayColors?Math.max(c,o):o)+(g-f)*o+(g-1)*a.bodySpacing);d&&(v+=a.footerMarginTop+d*s+(d-1)*a.footerSpacing);var y=0,m=function(t){p=Math.max(p,e.measureText(t).width+y)};return e.save(),e.font=pe.fontString(l,a.titleFontStyle,a.titleFontFamily),pe.each(t.title,m),e.font=pe.fontString(o,a.bodyFontStyle,a.bodyFontFamily),pe.each(t.beforeBody.concat(t.afterBody),m),y=a.displayColors?u+2:0,pe.each(i,(function(t){pe.each(t.before,m),pe.each(t.lines,m),pe.each(t.after,m)})),y=0,e.font=pe.fontString(s,a.footerFontStyle,a.footerFontFamily),pe.each(t.footer,m),e.restore(),{width:p+=2*a.xPadding,height:v}}function Qa(t,e,i){var n,a,r=i.x,o=i.y,s=i.width,l=i.height,u=t.chartArea,c="center",h="center";o<l?h="top":o>t.height-l&&(h="bottom");var d=(u.left+u.right)/2,f=(u.top+u.bottom)/2;"center"===h?(n=function(t){return t<=d},a=function(t){return t>d}):(n=function(t){return t<=s/2},a=function(e){return e>=t.width-s/2});var v=function(t){return t<=f?"top":"bottom"};return n(r)?(c="left",r+s+e.caretSize+e.caretPadding>t.width&&(c="center",h=v(o))):a(r)&&(c="right",function(t){return t-s-e.caretSize-e.caretPadding<0}(r)&&(c="center",h=v(o))),{xAlign:e.xAlign?e.xAlign:c,yAlign:e.yAlign?e.yAlign:h}}function Ja(t,e,i,n){var a=t.caretSize,r=t.caretPadding,o=t.cornerRadius,s=i.xAlign,l=i.yAlign,u=a+r,c=o+r,h=function(t,e,i){var n=t.x,a=t.width;return"right"===e?n-=a:"center"===e&&((n-=a/2)+a>i&&(n=i-a),n<0&&(n=0)),n}(e,s,n.width);return"center"===l?"left"===s?h+=u:"right"===s&&(h-=u):"left"===s?h-=c:"right"===s&&(h+=c),{x:h,y:function(t,e,i){var n=t.y,a=t.height;return"top"===e?n+=i:n-="bottom"===e?a+i:a/2,n}(e,l,u)}}function tr(t,e){var i=t.options;return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-i.xPadding:t.x+i.xPadding}function er(t){return $a([],Ga(t))}var ir=function(t){function i(t){var n;return e(this,i),(n=h(this,l(i).call(this))).opacity=0,n._active=[],n._chart=t._chart,n._eventPosition=void 0,n._size=void 0,n._cachedAnimations=void 0,n.$animations=void 0,n.options=void 0,n.dataPoints=void 0,n.title=void 0,n.beforeBody=void 0,n.body=void 0,n.afterBody=void 0,n.footer=void 0,n.xAlign=void 0,n.yAlign=void 0,n.x=void 0,n.y=void 0,n.height=void 0,n.width=void 0,n.caretX=void 0,n.caretY=void 0,n.labelColors=void 0,n.labelTextColors=void 0,n.initialize(),n}return s(i,t),n(i,[{key:"initialize",value:function(){this.options=function(t){return(t=r({},Ot.tooltips,t)).bodyFontFamily=Ua(t.bodyFontFamily,Ot.fontFamily),t.bodyFontStyle=Ua(t.bodyFontStyle,Ot.fontStyle),t.bodyFontSize=Ua(t.bodyFontSize,Ot.fontSize),t.boxHeight=Ua(t.boxHeight,t.bodyFontSize),t.boxWidth=Ua(t.boxWidth,t.bodyFontSize),t.titleFontFamily=Ua(t.titleFontFamily,Ot.fontFamily),t.titleFontStyle=Ua(t.titleFontStyle,Ot.fontStyle),t.titleFontSize=Ua(t.titleFontSize,Ot.fontSize),t.footerFontFamily=Ua(t.footerFontFamily,Ot.fontFamily),t.footerFontStyle=Ua(t.footerFontStyle,Ot.fontStyle),t.footerFontSize=Ua(t.footerFontSize,Ot.fontSize),t}(this._chart.options.tooltips)}},{key:"_resolveAnimations",value:function(){var t=this,e=t._cachedAnimations;if(e)return e;var i=t._chart.options.animation&&t.options.animation,n=new xe(t._chart,i);return t._cachedAnimations=Object.freeze(n),n}},{key:"getTitle",value:function(t,e){var i=this.options.callbacks,n=i.beforeTitle.apply(this,[t,e]),a=i.title.apply(this,[t,e]),r=i.afterTitle.apply(this,[t,e]),o=[];return o=$a(o,Ga(n)),o=$a(o,Ga(a)),o=$a(o,Ga(r))}},{key:"getBeforeBody",value:function(t,e){return er(this.options.callbacks.beforeBody.apply(this,[t,e]))}},{key:"getBody",value:function(t,e){var i=this,n=i.options.callbacks,a=[];return pe.each(t,(function(t){var r={before:[],lines:[],after:[]};$a(r.before,Ga(n.beforeLabel.call(i,t,e))),$a(r.lines,n.label.call(i,t,e)),$a(r.after,Ga(n.afterLabel.call(i,t,e))),a.push(r)})),a}},{key:"getAfterBody",value:function(t,e){return er(this.options.callbacks.afterBody.apply(this,[t,e]))}},{key:"getFooter",value:function(t,e){var i=this.options.callbacks,n=i.beforeFooter.apply(this,[t,e]),a=i.footer.apply(this,[t,e]),r=i.afterFooter.apply(this,[t,e]),o=[];return o=$a(o,Ga(n)),o=$a(o,Ga(a)),o=$a(o,Ga(r))}},{key:"_createItems",value:function(){var t,e,i=this,n=i._active,a=i.options,r=i._chart.data,o=[],s=[],l=[];for(t=0,e=n.length;t<e;++t)l.push(Ka(i._chart,n[t]));return a.filter&&(l=l.filter((function(t){return a.filter(t,r)}))),a.itemSort&&(l=l.sort((function(t,e){return a.itemSort(t,e,r)}))),pe.each(l,(function(t){o.push(a.callbacks.labelColor.call(i,t,i._chart)),s.push(a.callbacks.labelTextColor.call(i,t,i._chart))})),i.labelColors=o,i.labelTextColors=s,i.dataPoints=l,l}},{key:"update",value:function(t){var e,i=this,n=i.options,a=i._active;if(a.length){var o=i._chart.data,s=qa[n.position].call(i,a,i._eventPosition),l=i._createItems();i.title=i.getTitle(l,o),i.beforeBody=i.getBeforeBody(l,o),i.body=i.getBody(l,o),i.afterBody=i.getAfterBody(l,o),i.footer=i.getFooter(l,o);var u=i._size=Za(i),c=r({},s,u),h=Qa(i._chart,n,c),d=Ja(n,c,h,i._chart);i.xAlign=h.xAlign,i.yAlign=h.yAlign,e={opacity:1,x:d.x,y:d.y,width:u.width,height:u.height,caretX:s.x,caretY:s.y}}else 0!==i.opacity&&(e={opacity:0});e&&i._resolveAnimations().update(i,e),t&&n.custom&&n.custom.call(i)}},{key:"drawCaret",value:function(t,e,i){var n=this.getCaretPosition(t,i);e.lineTo(n.x1,n.y1),e.lineTo(n.x2,n.y2),e.lineTo(n.x3,n.y3)}},{key:"getCaretPosition",value:function(t,e){var i,n,a,r,o,s,l=this.xAlign,u=this.yAlign,c=this.options,h=c.cornerRadius,d=c.caretSize,f=t.x,v=t.y,p=e.width,g=e.height;return"center"===u?(n="left"===l?(i=f)-d:(i=f+p)+d,a=i,r=(o=v+g/2)+d,s=o-d):(i=(n="left"===l?f+h+d:"right"===l?f+p-h-d:this.caretX)-d,a=n+d,o="top"===u?(r=v)-d:(r=v+g)+d,s=r),{x1:i,x2:n,x3:a,y1:r,y2:o,y3:s}}},{key:"drawTitle",value:function(t,e){var i,n,a,r=this,o=r.options,s=r.title,l=s.length;if(l){var u=Xa(o.rtl,r.x,r.width);for(t.x=tr(r,o.titleAlign),e.textAlign=u.textAlign(o.titleAlign),e.textBaseline="middle",i=o.titleFontSize,n=o.titleSpacing,e.fillStyle=o.titleFontColor,e.font=pe.fontString(i,o.titleFontStyle,o.titleFontFamily),a=0;a<l;++a)e.fillText(s[a],u.x(t.x),t.y+i/2),t.y+=i+n,a+1===l&&(t.y+=o.titleMarginBottom-n)}}},{key:"_drawColorBox",value:function(t,e,i,n){var a=this.options,r=this.labelColors[i],o=a.boxHeight,s=a.boxWidth,l=a.bodyFontSize,u=tr(this,"left"),c=n.x(u),h=o<l?(l-o)/2:0,d=e.y+h;t.fillStyle=a.multiKeyBackground,t.fillRect(n.leftForLtr(c,s),d,s,o),t.lineWidth=1,t.strokeStyle=r.borderColor,t.strokeRect(n.leftForLtr(c,s),d,s,o),t.fillStyle=r.backgroundColor,t.fillRect(n.leftForLtr(n.xPlus(c,1),s-2),d+1,s-2,o-2),t.fillStyle=this.labelTextColors[i]}},{key:"drawBody",value:function(t,e){var i,n,a,r,o,s,l,u=this,c=u.body,h=u.options,d=h.bodyFontSize,f=h.bodySpacing,v=h.bodyAlign,p=h.displayColors,g=h.boxHeight,y=h.boxWidth,m=d,b=0,x=Xa(h.rtl,u.x,u.width),_=function(i){e.fillText(i,x.x(t.x+b),t.y+m/2),t.y+=m+f},k=x.textAlign(v);for(e.textAlign=v,e.textBaseline="middle",e.font=pe.fontString(d,h.bodyFontStyle,h.bodyFontFamily),t.x=tr(u,k),e.fillStyle=h.bodyFontColor,pe.each(u.beforeBody,_),b=p&&"right"!==k?"center"===v?y/2+1:y+2:0,r=0,s=c.length;r<s;++r){for(i=c[r],n=u.labelTextColors[r],e.fillStyle=n,pe.each(i.before,_),a=i.lines,p&&a.length&&(u._drawColorBox(e,t,r,x),m=Math.max(d,g)),o=0,l=a.length;o<l;++o)_(a[o]),m=d;pe.each(i.after,_)}b=0,m=d,pe.each(u.afterBody,_),t.y-=f}},{key:"drawFooter",value:function(t,e){var i,n,a=this,r=a.options,o=a.footer,s=o.length;if(s){var l=Xa(r.rtl,a.x,a.width);for(t.x=tr(a,r.footerAlign),t.y+=r.footerMarginTop,e.textAlign=l.textAlign(r.footerAlign),e.textBaseline="middle",i=r.footerFontSize,e.fillStyle=r.footerFontColor,e.font=pe.fontString(i,r.footerFontStyle,r.footerFontFamily),n=0;n<s;++n)e.fillText(o[n],l.x(t.x),t.y+i/2),t.y+=i+r.footerSpacing}}},{key:"drawBackground",value:function(t,e,i){var n=this.xAlign,a=this.yAlign,r=this.options,o=t.x,s=t.y,l=i.width,u=i.height,c=r.cornerRadius;e.fillStyle=r.backgroundColor,e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.beginPath(),e.moveTo(o+c,s),"top"===a&&this.drawCaret(t,e,i),e.lineTo(o+l-c,s),e.quadraticCurveTo(o+l,s,o+l,s+c),"center"===a&&"right"===n&&this.drawCaret(t,e,i),e.lineTo(o+l,s+u-c),e.quadraticCurveTo(o+l,s+u,o+l-c,s+u),"bottom"===a&&this.drawCaret(t,e,i),e.lineTo(o+c,s+u),e.quadraticCurveTo(o,s+u,o,s+u-c),"center"===a&&"left"===n&&this.drawCaret(t,e,i),e.lineTo(o,s+c),e.quadraticCurveTo(o,s,o+c,s),e.closePath(),e.fill(),r.borderWidth>0&&e.stroke()}},{key:"_updateAnimationTarget",value:function(){var t=this,e=t._chart,i=t.options,n=t.$animations,a=n&&n.x,o=n&&n.y;if(a||o){var s=qa[i.position].call(t,t._active,t._eventPosition);if(!s)return;var l=t._size=Za(t),u=r({},s,t._size),c=Qa(e,i,u),h=Ja(i,u,c,e);a._to===h.x&&o._to===h.y||(t.xAlign=c.xAlign,t.yAlign=c.yAlign,t.width=l.width,t.height=l.height,t.caretX=s.x,t.caretY=s.y,t._resolveAnimations().update(t,h))}}},{key:"draw",value:function(t){var e=this,i=e.options,n=e.opacity;if(n){e._updateAnimationTarget();var a={width:e.width,height:e.height},r={x:e.x,y:e.y};n=Math.abs(n)<.001?0:n;var o=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;i.enabled&&o&&(t.save(),t.globalAlpha=n,e.drawBackground(r,t,a),pe.rtl.overrideTextDirection(t,i.textDirection),r.y+=i.yPadding,e.drawTitle(r,t),e.drawBody(r,t),e.drawFooter(r,t),pe.rtl.restoreTextDirection(t,i.textDirection),t.restore())}}},{key:"handleEvent",value:function(t,e){var i,n=this,a=n.options,r=n._active||[],o=[];return"mouseout"!==t.type&&(o=n._chart.getElementsAtEventForMode(t,a.mode,a,e),a.reverse&&o.reverse()),(i=e||!pe._elementsEqual(o,r))&&(n._active=o,(a.enabled||a.custom)&&(n._eventPosition={x:t.x,y:t.y},n.update(!0))),i}}]),i}(Fe);ir.positioners=qa;var nr={filler:za,legend:Na,title:Ya,tooltip:{id:"tooltip",_element:ir,positioners:qa,afterInit:function(t){t.options.tooltips&&(t.tooltip=new ir({_chart:t}))},beforeUpdate:function(t){t.tooltip&&t.tooltip.initialize()},reset:function(t){t.tooltip&&t.tooltip.initialize()},afterDraw:function(t){var e=t.tooltip,i={tooltip:e};!1!==kn.notify(t,"beforeTooltipDraw",[i])&&(e.draw(t.ctx),kn.notify(t,"afterTooltipDraw",[i]))},afterEvent:function(t,e,i){if(t.tooltip){var n=i;t.tooltip.handleEvent(e,n)}}}};for(var ar in En.helpers=pe,En._adapters=Rn,En.Animation=me,En.Animator=ge,En.animationService=xe,En.controllers=xi,En.DatasetController=Ce,En.defaults=Ot,En.Element=Fe,En.elements=ri,En.Interaction=Ai,En.layouts=Vi,En.platforms=_n,En.plugins=kn,En.Scale=jn,En.scaleService=Mn,En.Ticks=zn,Object.keys(Sa).forEach((function(t){return En.scaleService.registerScale(Sa[t])})),nr)Object.prototype.hasOwnProperty.call(nr,ar)&&En.plugins.register(nr[ar]);return"undefined"!=typeof window&&(window.Chart=En),En}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/chartjs-adapter-luxon/dist/chartjs-adapter-luxon.min.js":
/*!******************************************************************************!*\
  !*** ./node_modules/chartjs-adapter-luxon/dist/chartjs-adapter-luxon.min.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chartjs-adapter-luxon v0.2.1
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT license
 */
!function(e,t){ true?t(__webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.esm.js"),__webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js")):undefined}(this,(function(e,t){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;const r={datetime:t.DateTime.DATETIME_MED_WITH_SECONDS,millisecond:"h:mm:ss.SSS a",second:t.DateTime.TIME_WITH_SECONDS,minute:t.DateTime.TIME_SIMPLE,hour:{hour:"numeric"},day:{day:"numeric",month:"short"},week:"DD",month:{month:"short",year:"numeric"},quarter:"'Q'q - yyyy",year:{year:"numeric"}};e._adapters._date.override({_id:"luxon",_create:function(e){return t.DateTime.fromMillis(e,this.options)},formats:function(){return r},parse:function(r,n){const i=this.options;if(e.helpers.isNullOrUndef(r))return null;const o=typeof r;return"number"===o?r=this._create(r):"string"===o?r="string"==typeof n?t.DateTime.fromFormat(r,n,i):t.DateTime.fromISO(r,i):"object"!==o||r instanceof t.DateTime?r instanceof Date&&(r=t.DateTime.fromJSDate(r,i)):r=t.DateTime.fromObject(r),r.isValid?r.valueOf():null},format:function(e,t){const r=this._create(e);return"string"==typeof t?r.toFormat(t,this.options):r.toLocaleString(t)},add:function(e,t,r){const n={};return n[r]=t,this._create(e).plus(n).valueOf()},diff:function(e,t,r){return this._create(e).diff(this._create(t)).as(r).valueOf()},startOf:function(e,t,r){return"isoWeek"===t?this._create(e).isoWeekday(r).valueOf():t?this._create(e).startOf(t).valueOf():e},endOf:function(e,t){return this._create(e).endOf(t).valueOf()}})}));


/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.15';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array == null ? 0 : array.length,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     */
      var index = -1,

      });