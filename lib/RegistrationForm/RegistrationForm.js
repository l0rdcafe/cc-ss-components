"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextInput = require("../TextInput");

var _TextInput2 = _interopRequireDefault(_TextInput);

var _PasswordInput = require("../PasswordInput");

var _PasswordInput2 = _interopRequireDefault(_PasswordInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Registration form with built-in validation */
var RegistrationForm = function (_React$Component) {
    _inherits(RegistrationForm, _React$Component);

    function RegistrationForm(props) {
        _classCallCheck(this, RegistrationForm);

        var _this = _possibleConstructorReturn(this, (RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call(this, props));

        _this.onChange = function (e) {
            var user = _this.state.user;

            user[e.target.name] = e.target.value;
            _this.setState({ user: user });
        };

        _this.passwordQuality = function (password) {
            if (!password) {
                return null;
            }

            if (password.length >= _this.props.minPasswordLength) {
                return 100;
            }
            return parseInt(password.length / _this.props.minPasswordLength * 100, 10);
        };

        _this.validate = function (_ref) {
            var email = _ref.email,
                password = _ref.password;

            var errors = {};
            var minPasswordLength = _this.props.minPasswordLength;


            if (!email) {
                errors.email = "Email required.";
            }

            if (password.length < minPasswordLength) {
                errors.password = "Password must be at least " + minPasswordLength + " characters.";
            }

            _this.setState({ errors: errors });

            var formIsValid = Object.getOwnPropertyNames(errors).length === 0;
            return formIsValid;
        };

        _this.onSubmit = function () {
            var user = _this.state.user;

            var formIsValid = _this.validate(user);

            if (formIsValid) {
                _this.props.onSubmit(user);
                _this.setState({ submitted: true });
            }
        };

        _this.state = {
            user: {
                email: "",
                password: ""
            },
            errors: {},
            submitted: false
        };
        return _this;
    }

    _createClass(RegistrationForm, [{
        key: "render",
        value: function render() {
            var _state = this.state,
                errors = _state.errors,
                submitted = _state.submitted;
            var _state$user = this.state.user,
                email = _state$user.email,
                password = _state$user.password;


            return submitted ? _react2.default.createElement(
                "h2",
                null,
                this.props.confirmationMessage
            ) : _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_TextInput2.default, {
                    htmlId: "registration-form-email",
                    name: "email",
                    onChange: this.onChange,
                    label: "Email",
                    value: email,
                    error: errors.email,
                    required: true }),
                _react2.default.createElement(_PasswordInput2.default, {
                    htmlId: "registration-form-password",
                    name: "password",
                    value: password,
                    onChange: this.onChange,
                    quality: this.passwordQuality(password),
                    showVisibilityToggle: true,
                    maxLength: 50,
                    error: errors.password }),
                _react2.default.createElement("input", { type: "submit", value: "Register", onClick: this.onSubmit })
            );
        }
    }]);

    return RegistrationForm;
}(_react2.default.Component);

RegistrationForm.propTypes = {
    /** Message displayed upon successful submission */
    confirmationMessage: _propTypes2.default.string,
    /** Called when form is submitted */
    onSubmit: _propTypes2.default.func.isRequired,
    /** Minimum password length */
    minPasswordLength: _propTypes2.default.number
};

RegistrationForm.defaultProps = {
    confirmationMessage: "Thanks for registering!",
    minPasswordLength: 8
};

exports.default = RegistrationForm;