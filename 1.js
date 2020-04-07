(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CommonCardFrame/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommonCardFrame/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      type: String,
      default: ''
    },
    bodyStyle: {
      type: Object,
      default: function _default() {
        return {
          padding: '20px 20px 0px 20px'
        };
      }
    },
    hoverable: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"91c57c06-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CommonCardFrame/index.vue?vue&type=template&id=78cb4ed6&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91c57c06-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommonCardFrame/index.vue?vue&type=template&id=78cb4ed6& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c(
        "a-card",
        { attrs: { title: _vm.title, hoverable: _vm.hoverable } },
        [
          _c("template", { slot: "extra" }, [_vm._t("extra")], 2),
          _vm._v(" "),
          _vm._t("body"),
          _vm._v(" "),
          _vm._t("actions")
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./src/api/article.js":
/*!****************************!*\
  !*** ./src/api/article.js ***!
  \****************************/
/*! exports provided: getArticleCategory, createArticle, getArticleList, updateArticle, showArticle, getLatestArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleCategory", function() { return getArticleCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArticle", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleList", function() { return getArticleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateArticle", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showArticle", function() { return showArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestArticle", function() { return getLatestArticle; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");

function getArticleCategory() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/api/admin/article/category",
    method: 'get'
  });
}
function createArticle(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/admin/article',
    method: 'post',
    data: data
  });
}
function getArticleList(params) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/admin/article',
    method: 'get',
    params: params
  });
}
function updateArticle(id, params) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/api/admin/article/".concat(id),
    method: 'put',
    params: params
  });
}
function showArticle(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/api/admin/article/".concat(id),
    method: 'get'
  });
}
function getLatestArticle() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/admin/article/latest',
    method: 'get'
  });
}

/***/ }),

/***/ "./src/components/CommonCardFrame/index.vue":
/*!**************************************************!*\
  !*** ./src/components/CommonCardFrame/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_78cb4ed6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=78cb4ed6& */ "./src/components/CommonCardFrame/index.vue?vue&type=template&id=78cb4ed6&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/CommonCardFrame/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_78cb4ed6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_78cb4ed6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('78cb4ed6')) {
      api.createRecord('78cb4ed6', component.options)
    } else {
      api.reload('78cb4ed6', component.options)
    }
    module.hot.accept(/*! ./index.vue?vue&type=template&id=78cb4ed6& */ "./src/components/CommonCardFrame/index.vue?vue&type=template&id=78cb4ed6&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _index_vue_vue_type_template_id_78cb4ed6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=78cb4ed6& */ "./src/components/CommonCardFrame/index.vue?vue&type=template&id=78cb4ed6&");
(function () {
      api.rerender('78cb4ed6', {
        render: _index_vue_vue_type_template_id_78cb4ed6___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _index_vue_vue_type_template_id_78cb4ed6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/components/CommonCardFrame/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/CommonCardFrame/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/components/CommonCardFrame/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CommonCardFrame/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/CommonCardFrame/index.vue?vue&type=template&id=78cb4ed6&":
/*!*********************************************************************************!*\
  !*** ./src/components/CommonCardFrame/index.vue?vue&type=template&id=78cb4ed6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91c57c06_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_78cb4ed6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"91c57c06-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=78cb4ed6& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"91c57c06-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/CommonCardFrame/index.vue?vue&type=template&id=78cb4ed6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91c57c06_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_78cb4ed6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_91c57c06_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_78cb4ed6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: removeNull, removePropertyOfNullAndBlank, easyCopyObj, countObj, isEmptyObj, isEmptyArr, deepClone, deleteEmptyProperty, isEmpty, getPathByTree, deepFind, timeFix, welcome, triggerWindowResizeEvent, handleScrollHeader, isIE, removeLoadingAnimate, dayToChinese */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNull", function() { return removeNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePropertyOfNullAndBlank", function() { return removePropertyOfNullAndBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easyCopyObj", function() { return easyCopyObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countObj", function() { return countObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObj", function() { return isEmptyObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyArr", function() { return isEmptyArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmptyProperty", function() { return deleteEmptyProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathByTree", function() { return getPathByTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepFind", function() { return deepFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFix", function() { return timeFix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "welcome", function() { return welcome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerWindowResizeEvent", function() { return triggerWindowResizeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleScrollHeader", function() { return handleScrollHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLoadingAnimate", function() { return removeLoadingAnimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayToChinese", function() { return dayToChinese; });
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_travis_build_polichan_Phako_Frontend_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");



function removeNull(option) {
  if (!option) {
    return;
  }

  for (var attr in option) {
    if (option[attr] === null) {
      delete option[attr];
      continue;
    }

    if (Object(_home_travis_build_polichan_Phako_Frontend_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(option[attr]) === 'object') {
      removeNull(option[attr]);
    }
  }
}
function removePropertyOfNullAndBlank(obj) {
  Object.keys(obj).forEach(function (item) {
    if (obj[item] === null || obj[item] === '') delete obj[item];
  });
  return obj;
}
function easyCopyObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function countObj(obj) {
  var arr = Object.keys(obj);
  return arr.length;
}
function isEmptyObj(obj) {
  // eslint-disable-next-line eqeqeq
  return JSON.stringify(obj) == '{}';
}
function isEmptyArr(arr) {
  // eslint-disable-next-line eqeqeq
  return arr.length == 0;
}
/**
 * 深拷贝对象，一种解决方案是将对象序列化为字符串，然后再将其反序列化
 * 此方法仅在原对象包含可序列化值类型且没有任何循环引用时才有效。不可序列化值类型的一个例子是 Date 对象
 * @param {*} obj
 */

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
} // 去掉空对象

function deleteEmptyProperty(object) {
  for (var i in object) {
    var value = object[i];

    if (Object(_home_travis_build_polichan_Phako_Frontend_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(value) === 'object') {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          delete object[i];
          continue;
        }
      }

      this.deleteEmptyProperty(value);

      if (this.isEmpty(value)) {
        delete object[i];
      }
    } else {
      if (value === '' || value === null || value === undefined || value === 'undefined') {
        delete object[i];
      }
    }
  }
} // 判断对象是否为空

function isEmpty(object) {
  for (var name in object) {
    return false;
  }

  return true;
}
/**
 * 寻找树的路径
 * @param {*} value 寻找的值
 * @param {*} arr 寻找的数据源
 */

function getPathByTree(value, arr) {
  var tempPath = [];

  try {
    // eslint-disable-next-line no-inner-declarations
    var getNodePath = function getNodePath(node) {
      tempPath.push(node.id);

      if (node.id === value) {
        throw tempPath;
      }

      if (node.children && node.children.length > 0) {
        for (var i = 0; i < node.children.length; i++) {
          getNodePath(node.children[i]);
        }

        tempPath.pop();
      } else {
        tempPath.pop();
      }
    };

    for (var i = 0; i < arr.length; i++) {
      getNodePath(arr[i]);
    }
  } catch (e) {
    return tempPath;
  }
}
/**
 * 深度递归搜索
 * @param {Array} arr 你要搜索的数组
 * @param {Function} condition 回调函数，必须返回谓词，判断是否找到了。会传入(item, index, level)三个参数
 * @param {String} children 子数组的key
 */

var deepFind = function deepFind(arr, condition, children) {
  // 即将返回的数组
  var main = []; // 用try方案方便直接中止所有递归的程序

  try {
    // 开始轮询
    (function poll(arr, level) {
      // 如果传入非数组
      if (!Array.isArray(arr)) return; // 遍历数组

      for (var i = 0; i < arr.length; i++) {
        // 获取当前项
        var item = arr[i]; // 先占位预设值

        main[level] = item; // 检验是否已经找到了

        var isFind = condition && condition(item, i, level) || false; // 如果已经找到了

        if (isFind) {
          // 直接抛出错误中断所有轮询
          throw Error; // 如果存在children，那么深入递归
        } else if (children && item[children] && item[children].length) {
          poll(item[children], level + 1); // 如果是最后一个且没有找到值，那么通过修改数组长度来删除当前项
        } else if (i === arr.length - 1) {
          // 删除占位预设值
          main.length = main.length - 1;
        }
      }
    })(arr, 0); // 使用try/catch是为了中止所有轮询中的任务

  } catch (err) {
    new Error(err);
  } // 返回最终数组


  return main;
};
function timeFix() {
  var time = new Date();
  var hour = time.getHours();
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好';
}
function welcome() {
  var arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了'];
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
/**
 * 触发 window.resize
 */

function triggerWindowResizeEvent() {
  var event = document.createEvent('HTMLEvents');
  event.initEvent('resize', true, true);
  event.eventType = 'message';
  window.dispatchEvent(event);
}
function handleScrollHeader(callback) {
  var timer = 0;
  var beforeScrollTop = window.pageYOffset;

  callback = callback || function () {};

  window.addEventListener('scroll', function (event) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      var direction = 'up';
      var afterScrollTop = window.pageYOffset;
      var delta = afterScrollTop - beforeScrollTop;

      if (delta === 0) {
        return false;
      }

      direction = delta > 0 ? 'down' : 'up';
      callback(direction);
      beforeScrollTop = afterScrollTop;
    }, 50);
  }, false);
}
function isIE() {
  var bw = window.navigator.userAgent;

  var compare = function compare(s) {
    return bw.indexOf(s) >= 0;
  };

  var ie11 = function () {
    return 'ActiveXObject' in window;
  }();

  return compare('MSIE') || ie11;
}
/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */

function removeLoadingAnimate() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;

  if (id === '') {
    return;
  }

  setTimeout(function () {
    document.body.removeChild(document.getElementById(id));
  }, timeout);
}
function dayToChinese(day) {
  var chinese;

  switch (day) {
    case '1':
      chinese = '周一';
      break;

    case '2':
      chinese = '周二';
      break;

    case '3':
      chinese = '周三';
      break;

    case '4':
      chinese = '周四';
      break;

    case '5':
      chinese = '周五';
      break;

    case '6':
      chinese = '周六';
      break;

    case '7':
      chinese = '周日';
  }

  return chinese;
}

/***/ })

}]);
//# sourceMappingURL=1.js.map