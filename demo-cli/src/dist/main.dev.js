"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _pk = _interopRequireDefault(require("pk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _vue.createApp)(_App["default"]);
app.use(_pk["default"]);
app.mount('#app');