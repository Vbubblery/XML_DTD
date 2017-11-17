(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var HomeAction = (function () {
  function HomeAction() {
    _classCallCheck(this, HomeAction);

    this.generateActions('sendDone', 'sendFail', 'updateData', 'updateDTD');
  }

  _createClass(HomeAction, [{
    key: 'checkInServer',
    value: function checkInServer(data, dtd) {
      var _this = this;

      var d = { "data": JSON.stringify(data), "dtd": JSON.stringify(dtd) };
      $.ajax({
        type: 'POST',
        url: '/api/check',
        data: d
      }).done(function (data) {
        _this.actions.sendDone(data);
      }).fail(function (jqXhr) {
        _this.actions.sendFail(jqXhr);
      });
    }
  }]);

  return HomeAction;
})();

exports['default'] = _alt2['default'].createActions(HomeAction);
module.exports = exports['default'];

},{"../alt":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_reactRouter.RouteHandler, null)
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsHomeAction = require('../actions/HomeAction');

var _actionsHomeAction2 = _interopRequireDefault(_actionsHomeAction);

var _storesHomeStore = require('../stores/HomeStore');

var _storesHomeStore2 = _interopRequireDefault(_storesHomeStore);

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
    this.state = _storesHomeStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesHomeStore2['default'].listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesHomeStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleDataChange',
    value: function handleDataChange(e) {
      var reader = new FileReader();
      reader.readAsText(document.getElementById("input-b1").files[0], "UTF-8");
      reader.onload = function (evt) {
        var fileString = evt.target.result;
        var arr = fileString.split(/\r\n|[\r\n]/);
        arr = arr.filter(function (i) {
          return i != '';
        });
        _actionsHomeAction2['default'].updateData(arr);
      };
    }
  }, {
    key: 'handleDTDChange',
    value: function handleDTDChange(e) {
      var reader = new FileReader();
      reader.readAsText(document.getElementById("input-b2").files[0], "UTF-8");
      reader.onload = function (evt) {
        var fileString = evt.target.result;
        var arr = fileString.split(/\r\n|[\r\n]/);
        arr = arr.filter(function (i) {
          return i != '';
        });
        _actionsHomeAction2['default'].updateDTD(arr);
      };
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      _actionsHomeAction2['default'].checkInServer(this.state.data, this.state.dtd);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'ul',
          { className: 'list-group' },
          _react2['default'].createElement(
            'li',
            { className: 'list-group-item' },
            'XML'
          ),
          _react2['default'].createElement(
            'li',
            { className: 'list-group-item' },
            _react2['default'].createElement('input', { id: 'input-b1', name: 'input-b1', type: 'file', onChange: this.handleDataChange.bind(this), className: 'file' })
          ),
          _react2['default'].createElement(
            'li',
            { className: 'lis t-group-item' },
            'DTD'
          ),
          _react2['default'].createElement(
            'li',
            { className: 'list-group-item' },
            _react2['default'].createElement('input', { id: 'input-b2', name: 'input-b2', type: 'file', onChange: this.handleDTDChange.bind(this), className: 'file' })
          )
        ),
        _react2['default'].createElement(
          'button',
          { type: 'button', className: 'btn btn-primary', onClick: this.handleClick.bind(this) },
          'Check'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'alert alert-info alert-dismissable' },
          this.state.msg
        )
      );
    }
  }]);

  return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"../actions/HomeAction":1,"../stores/HomeStore":7,"react":"react"}],5:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":6,"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] })
);
module.exports = exports['default'];

},{"./components/App":3,"./components/Home":4,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsHomeAction = require('../actions/HomeAction');

var _actionsHomeAction2 = _interopRequireDefault(_actionsHomeAction);

var HomeStore = (function () {
  function HomeStore() {
    _classCallCheck(this, HomeStore);

    this.bindActions(_actionsHomeAction2['default']);
    this.data = null;
    this.dtd = null;
    this.msg = '';
  }

  _createClass(HomeStore, [{
    key: 'onUpdateData',
    value: function onUpdateData(arr) {
      this.data = arr;
    }
  }, {
    key: 'onUpdateDTD',
    value: function onUpdateDTD(arr) {
      this.dtd = arr;
    }
  }, {
    key: 'onSendDone',
    value: function onSendDone(data) {
      this.msg = data;
    }
  }, {
    key: 'onSendfail',
    value: function onSendfail(data) {
      console.log(data);
    }
  }]);

  return HomeStore;
})();

exports['default'] = _alt2['default'].createStore(HomeStore);
module.exports = exports['default'];

},{"../actions/HomeAction":1,"../alt":2}]},{},[5]);
