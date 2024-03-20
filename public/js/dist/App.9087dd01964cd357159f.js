/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/AuthPage/AuthPage */ "./src/pages/AuthPage/AuthPage.js");
/* harmony import */ var _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/HomePage/HomePage */ "./src/pages/HomePage/HomePage.js");
/* harmony import */ var _pages_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ForgotPassword/ForgotPassword */ "./src/pages/ForgotPassword/ForgotPassword.js");
/* harmony import */ var _pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/ProfilePage/ProfilePage */ "./src/pages/ProfilePage/ProfilePage.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.module.scss */ "./src/App.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");







// import ForgotPasswordPage from './components/ForgotPasswordForm/ForgotPasswordForm';



function App() {
  // Default state for user is null
  // Default state for token is an empty string
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  // Create a signUp fn that connects to the backend
  const signUp = async credentials => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        // Headers that will be set in PostMan
        headers: {
          'Content-Type': 'application/json'
        },
        // Turn the body into a readable JavaScript object 
        body: JSON.stringify(credentials)
      });
      // Turn response back into a JavaScript object
      const data = await response.json();
      // From the "data" response received, pull out the user object and set the user state
      setUser(data.user);
      // From the "data" response received, pull out the token object and set the token state
      setToken(data.token);
      // Store the token && user in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    } catch (error) {
      console.error(error);
    }
  };

  // This function will need to be a prop passed to the LoginForm via AuthPage
  const login = async credentials => {
    try {
      // https://i.imgur.com/3quZxs4.png
      // Step 1 is complete here once someone fills out the loginForm
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      // Step 3
      const tokenData = data.token;
      localStorage.setItem('token', tokenData);
      // The below code is additional to the core features of authentication
      // You need to decide what additional things you would like to accomplish when you
      // set up your stuff
      const userData = data.user;
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  // CreatePost
  // We need token authentication in order to verify that someone can make a post
  // Now that we have the token from the signup/login above, we will pass it into the following functions for authentication
  const createPost = async (postData, token) => {
    // https://i.imgur.com/3quZxs4.png
    // Step 4
    if (!token) {
      return;
    }
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          // This part is only necessary when sending data, not when retrieving it, i.e. GET requests
          // Tell it that we're sending JSON data
          'Content-Type': 'application/json',
          // Tell it that we have a user token
          'Authorization': "Bearer ".concat(token)
        },
        body: JSON.stringify(postData)
      });
      const data = await response.json();
      localStorage.setItem('post', JSON.stringify(postData));
      setPost(postData);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  // ReadPost - we don't need authentication
  const getAllPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  // Show and individual post - no need for authentication
  const getIndividualPost = async id => {
    try {
      const response = await fetch("/api/posts/".concat(id));
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setPost(data.posts);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  // UpdatePost
  const updatePost = async (newPostData, id, token) => {
    // https://i.imgur.com/3quZxs4.png
    // Step 4
    if (!token) {
      return;
    }
    try {
      const response = await fetch("/api/posts/".concat(id), {
        method: 'PUT',
        headers: {
          // This part is only necessary when sending data, not when retrieving it, i.e. GET requests
          // Tell it that we're sending JSON data
          'Content-Type': 'application/json',
          // Tell it that we have a user token
          'Authorization': "Bearer ".concat(token)
        },
        body: JSON.stringify(newPostData)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  // DeletePost
  const deletePost = async (id, token) => {
    // https://i.imgur.com/3quZxs4.png
    // Step 4
    if (!token) {
      return;
    }
    try {
      const response = await fetch("/api/posts/".concat(id), {
        method: 'DELETE',
        headers: {
          // Don't need content-type because we are not sending any data
          'Authorization': "Bearer ".concat(token)
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (token) {
      const fetchUserData = async () => {
        console.log('fetching user data');
        try {
          // Fetch user data from your backend
          const response = await fetch('/api/user-data', {
            headers: {
              Authorization: "Bearer ".concat(token) // Assuming you're passing token as a prop
            }
          });
          if (response.ok) {
            const userData = await response.json();
            setUser(userData); // Update the user state with the fetched data
          } else {
            // Handle error
            throw new Error('response failed');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      // Call the fetchUserData function when the component mounts
      fetchUserData();
    }
  }, [token]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].App
  }, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    token: token,
    setUser: setUser,
    user: user // Pass the user prop to NavBar
    ,
    setToken: setToken
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"]
    // Pass user, token, && setToken props down to HomePage
    , {
      user: user,
      token: token
      // nameOfTheProp={nameOfTheFunction}
      ,
      setToken: setToken,
      setUser: setUser,
      createPost: createPost,
      setPost: setPost,
      post: post,
      getAllPosts: getAllPosts
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/auth",
    element: /*#__PURE__*/React.createElement(_pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_2__["default"]
    // Pass setUser, setToken && signUp props down to AuthPage
    , {
      setUser: setUser,
      setToken: setToken,
      signUp: signUp,
      login: login
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/auth/forgot-password",
    element: /*#__PURE__*/React.createElement(_pages_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setUser: setUser,
      setToken: setToken,
      signUp: signUp,
      login: login
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/profile/:userId",
    element: /*#__PURE__*/React.createElement(_pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: user,
      token: token,
      setToken: setToken,
      setUser: setUser,
      getIndividualPost: getIndividualPost,
      deletePost: deletePost,
      updatePost: updatePost,
      post: post
    })
  }))));
}

/***/ }),

/***/ "./src/components/FollowList/FollowList.js":
/*!*************************************************!*\
  !*** ./src/components/FollowList/FollowList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FollowList)
/* harmony export */ });
/* harmony import */ var _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FollowList.module.scss */ "./src/components/FollowList/FollowList.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function FollowList(user) {
  return /*#__PURE__*/React.createElement("div", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].followsContainer
  }, user && user.userType === 'employer' ? /*#__PURE__*/React.createElement("h3", null, "Following") : /*#__PURE__*/React.createElement("h3", null, "Employers"), /*#__PURE__*/React.createElement("div", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].follows
  }, /*#__PURE__*/React.createElement("div", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].followsContent
  }, /*#__PURE__*/React.createElement("img", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].followImg,
    src: "https://i.imgur.com/C2VpXHd.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].userInfo
  }, /*#__PURE__*/React.createElement("h4", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].followName
  }, "User's Name"), /*#__PURE__*/React.createElement("h5", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].followCompany
  }, "User's Company"))), /*#__PURE__*/React.createElement("div", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].followsContent
  }, /*#__PURE__*/React.createElement("img", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].followImg,
    src: "https://i.imgur.com/C2VpXHd.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].userInfo
  }, /*#__PURE__*/React.createElement("h4", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].followName
  }, "User's Name"), /*#__PURE__*/React.createElement("h5", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].followCompany
  }, "User's Company")))));
}

/***/ }),

/***/ "./src/components/ForgotPasswordForm/ForgotPasswordForm.js":
/*!*****************************************************************!*\
  !*** ./src/components/ForgotPasswordForm/ForgotPasswordForm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPasswordForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPasswordForm.module.scss */ "./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function ForgotPasswordForm() {
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const handleSubmit = async evt => {
    evt.preventDefault();
    // Validate email
    if (!email) {
      setError('Email is required');
      return;
    }
    try {
      // Call your backend API to initiate password reset
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        body: JSON.stringify({
          email
        })
      });

      // Check if request was successful
      if (response.ok) {
        // Reset form and display success message
        setEmail('');
        setError('');
        setSuccessMessage('Password reset email sent');
      } else {
        // Display error message based on response status
        const data = await response.json();
        setError(data.error || 'Failed to reset password');
        setSuccessMessage('');
      }
    } catch (error) {
      // Handle network or other errors
      setError('Failed to reset password');
      setSuccessMessage('');
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, /*#__PURE__*/React.createElement("h1", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, "Forgot Password"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/React.createElement("label", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label
  }, "Email:"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input
  })), error && /*#__PURE__*/React.createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].error
  }, error), successMessage && /*#__PURE__*/React.createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].success
  }, successMessage), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Reset Password")), /*#__PURE__*/React.createElement("span", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].link,
    onClick: () => navigate('/auth')
  }, "I know my password"));
}

/***/ }),

/***/ "./src/components/LoginForm/LoginForm.js":
/*!***********************************************!*\
  !*** ./src/components/LoginForm/LoginForm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.module.scss */ "./src/components/LoginForm/LoginForm.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




function LoginForm(_ref) {
  let {
    setUser,
    setShowLogin
  } = _ref;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: '',
    password: ''
  });
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: '',
    password: ''
  });
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [rememberMe, setRememberMe] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleChange = evt => {
    const {
      name,
      value
    } = evt.target;
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, {
      [name]: value
    }));
    setError('');
    setErrors(prevErrors => _objectSpread(_objectSpread({}, prevErrors), {}, {
      [name]: ''
    }));
    const inputContainer = evt.target.parentElement;
    if (value.trim()) {
      inputContainer.classList.add(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFilled);
    } else {
      inputContainer.classList.remove(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFilled);
    }
  };
  const handleRememberMeChange = evt => {
    const isChecked = evt.target.checked;
    setRememberMe(isChecked);
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    const emailError = validateEmail(credentials.email);
    const passwordError = validatePassword(credentials.password);
    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError
      });
      setError('Please fix the errors in the form.');
      return;
    }
    try {
      const user = await _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.login(credentials, rememberMe, navigate);
      setUser(user);
      navigate('/');
      window.location.reload();
    } catch (_unused) {
      setError('Log In Failed - Try Again');
    }
  };
  const validateEmail = email => {
    if (!email) return 'Email is required';
    return /^\S+@\S+\.\S+$/.test(email) ? '' : 'Invalid email format';
  };
  const validatePassword = password => {
    return password.length < 8 ? 'Password must be at least 8 characters long' : '';
  };
  const handleForgotPasswordClick = () => {
    navigate('/auth/forgot-password');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].LoginForm
  }, /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, /*#__PURE__*/React.createElement("h1", null, "DevHive"), /*#__PURE__*/React.createElement("h4", null, "A Group Project")), /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].boxc
  }, /*#__PURE__*/React.createElement("form", {
    autoComplete: "off",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("h1", null, "Login"), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox, " ").concat(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFilled)
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "email",
    value: credentials.email,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("label", null, "Email"), errors.email && /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorSign
  }, "\u274C", errors.email)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox, " ").concat(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFilled)
  }, /*#__PURE__*/React.createElement("input", {
    type: showPassword ? 'text' : 'password',
    name: "password",
    value: credentials.password,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("label", null, "Password"), /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].showPasswordIcon,
    onClick: () => setShowPassword(!showPassword)
  }, showPassword ? '🔑' : '🛡️'), errors.password && /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorSign
  }, "\u274C", errors.password)), /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lost
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: rememberMe,
    onChange: handleRememberMeChange
  }), "Remember Me"), /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].forgotPassword,
    onClick: handleForgotPasswordClick
  }, "Forgot Password")), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Log In"), /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].register
  }, /*#__PURE__*/React.createElement("p", {
    onClick: () => setShowLogin(false)
  }, "Don't have an account? ", /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].registerLink
  }, "Sign Up"))))), /*#__PURE__*/React.createElement("p", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorMessage
  }, error));
}

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");




function NavBar(props) {
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const navigateTo = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchUserData = async () => {
      try {
        const userData = await _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.getUser();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Nav
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ul
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/",
    className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].home)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Home")), !user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/auth",
    className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].login)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Login/Sign Up")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, user && user._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/profile/".concat(user._id),
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem,
    onClick: () => {
      _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.logOut();
      setUser(null);
      navigateTo('/');
      window.location.reload();
    }
  }, "Logout"))))));
}

/***/ }),

/***/ "./src/components/Post/Post.js":
/*!*************************************!*\
  !*** ./src/components/Post/Post.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.module.scss */ "./src/components/Post/Post.module.scss");


const GitHubLink = _ref => {
  let {
    url
  } = _ref;
  return url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "GitHub Link") : null;
};
const PostImage = _ref2 => {
  let {
    src,
    alt
  } = _ref2;
  return src ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: src,
    alt: alt,
    onError: e => e.target.style.display = 'none'
  }) : null;
};
const Post = _ref3 => {
  let {
    projectTitle,
    projectDescription,
    gitHubLink,
    image
  } = _ref3;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].post
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, projectTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, projectDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GitHubLink, {
    url: gitHubLink
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PostImage, {
    src: image,
    alt: image
  }), Post.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: image
  }) : '');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Post));

/***/ }),

/***/ "./src/components/PostList/PostList.js":
/*!*********************************************!*\
  !*** ./src/components/PostList/PostList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostList.module.scss */ "./src/components/PostList/PostList.module.scss");
/* harmony import */ var _Post_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Post/Post */ "./src/components/Post/Post.js");



const EmptyState = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: _PostList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].emptyState
}, "No posts available.");
function PostList(_ref) {
  let {
    posts
  } = _ref;
  if (posts.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmptyState, null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _PostList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].postList
  }, posts.map(postData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Post_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: postData._id,
    projectTitle: postData.projectTitle,
    projectDescription: postData.projectDescription,
    gitHubLink: postData.gitHubLink,
    image: postData.image
  })));
}

/***/ }),

/***/ "./src/components/ProfileImage/ProfileImage.js":
/*!*****************************************************!*\
  !*** ./src/components/ProfileImage/ProfileImage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfileImage)
/* harmony export */ });
/* harmony import */ var _ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileImage.module.scss */ "./src/components/ProfileImage/ProfileImage.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ProfileImage(_ref) {
  let {
    user
  } = _ref;
  // Accept user data as a prop
  return /*#__PURE__*/React.createElement("div", {
    className: _ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].imgContainer
  }, user && typeof user.picture === 'string' ? /*#__PURE__*/React.createElement("img", {
    className: _ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProfileImage,
    src: user.picture
  }) : /*#__PURE__*/React.createElement("img", {
    className: _ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProfileImage,
    src: "https://i.imgur.com/C2VpXHd.png"
  }));
}

/***/ }),

/***/ "./src/components/ProfilePost/ProfilePost.js":
/*!***************************************************!*\
  !*** ./src/components/ProfilePost/ProfilePost.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfilePost)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");


function ProfilePost(props) {
  const {
    userId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  return props.user === userId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.projectTitle) : null;
}

/***/ }),

/***/ "./src/components/ProfilePostList/ProfilePostList.js":
/*!***********************************************************!*\
  !*** ./src/components/ProfilePostList/ProfilePostList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfilePostList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProfilePostList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePostList.module.scss */ "./src/components/ProfilePostList/ProfilePostList.module.scss");
/* harmony import */ var _ProfilePost_ProfilePost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProfilePost/ProfilePost */ "./src/components/ProfilePost/ProfilePost.js");



const EmptyState = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: _ProfilePostList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].emptyState
}, "No posts available.");
function ProfilePostList(_ref) {
  let {
    posts
  } = _ref;
  // Check if posts array is empty
  if (posts.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmptyState, null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePostList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].postList
  }, posts.map(postData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProfilePost_ProfilePost__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: postData._id,
    user: postData.user,
    projectTitle: postData.projectTitle,
    projectDescription: postData.projectDescription,
    gitHubLink: postData.gitHubLink,
    image: postData.image
  })));
}

/***/ }),

/***/ "./src/components/SignUpForm/SignUpForm.js":
/*!*************************************************!*\
  !*** ./src/components/SignUpForm/SignUpForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpForm.module.scss */ "./src/components/SignUpForm/SignUpForm.module.scss");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




function SignUpForm(_ref) {
  let {
    setUser,
    setShowLogin
  } = _ref;
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    email: '',
    password: '',
    userType: '' // Added userType field
  });
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // State to track password visibility
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)(); // Corrected

  const handleChange = evt => {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [evt.target.name]: evt.target.value
    }));
    setError('');
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      const user = await (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.signUp)(formData);
      setUser(user);
      navigate("/profile/".concat(user._id)); // Corrected
    } catch (_unused) {
      setError('Sign Up Failed - Try Again');
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    name,
    email,
    password,
    userType
  } = formData;
  const disable = !name || !email || !password || !userType; // Adjusted to include userType

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].body
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Welcome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "To Our Project")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].boxc
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "name",
    value: name,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "email",
    value: email,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: showPassword ? 'text' : 'password',
    name: "password",
    value: password,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].showPasswordIcon,
    onClick: togglePasswordVisibility
  }, showPassword ? '🔑' : '🛡️')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "userType",
    value: userType,
    onChange: handleChange,
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "",
    disabled: true
  }, "Select User Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "developer"
  }, "Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "employer"
  }, "Employer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    disabled: disable
  }, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].login
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    onClick: () => setShowLogin(true),
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].loginLink
  }, "Already have an account? Login")))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorMessage
  }, error));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/index.module.scss");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))));

/***/ }),

/***/ "./src/pages/AuthPage/AuthPage.js":
/*!****************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthPage.module.scss */ "./src/pages/AuthPage/AuthPage.module.scss");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LoginForm/LoginForm */ "./src/components/LoginForm/LoginForm.js");
/* harmony import */ var _components_SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SignUpForm/SignUpForm */ "./src/components/SignUpForm/SignUpForm.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

 // Import useNavigate from react-router-dom




function AuthPage(_ref) {
  let {
    setUser
  } = _ref;
  const [showLogin, setShowLogin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)(); // Initialize the useNavigate hook

  return /*#__PURE__*/React.createElement("main", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].AuthPage
  }, /*#__PURE__*/React.createElement("div", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].logo
  }), /*#__PURE__*/React.createElement("div", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].credentialsContainer
  }, showLogin ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setUser: setUser,
    setShowLogin: setShowLogin
  })) : /*#__PURE__*/React.createElement(_components_SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setUser: setUser,
    setShowLogin: setShowLogin
  })));
}

/***/ }),

/***/ "./src/pages/ForgotPassword/ForgotPassword.js":
/*!****************************************************!*\
  !*** ./src/pages/ForgotPassword/ForgotPassword.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_ForgotPasswordForm_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ForgotPasswordForm/ForgotPasswordForm */ "./src/components/ForgotPasswordForm/ForgotPasswordForm.js");
/* harmony import */ var _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgotPassword.module.scss */ "./src/pages/ForgotPassword/ForgotPassword.module.scss");


 // Adjust the import path as needed
 // Adjust the import path as needed

function ForgotPasswordPage(_ref) {
  let {
    setUser
  } = _ref;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ForgotPasswordForm_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setUser: setUser
  }));
}

/***/ }),

/***/ "./src/pages/HomePage/HomePage.js":
/*!****************************************!*\
  !*** ./src/pages/HomePage/HomePage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.module.scss */ "./src/pages/HomePage/HomePage.module.scss");
/* harmony import */ var _components_PostList_PostList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostList/PostList */ "./src/components/PostList/PostList.js");



function HomePage() {
  const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [projectTitle, setProjectTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [projectDescription, setProjectDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [gitHubLink, setGitHubLink] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      console.log('Post Data:', data);
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchPosts();
  }, []);
  const createPost = async postData => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer ".concat(localStorage.getItem('token'))
      },
      body: JSON.stringify(postData)
    });
    return response.json();
  };
  const getAllPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const handleCreatePost = async event => {
    event.preventDefault();
    const postData = {
      projectTitle,
      projectDescription,
      gitHubLink,
      image
    };
    try {
      const newPost = await createPost(postData);
      setPosts(currentPosts => [newPost, ...currentPosts]);
      setProjectTitle('');
      setProjectDescription('');
      setGitHubLink('');
      setImage('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homePage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "This is the HomePage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleCreatePost
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: projectTitle,
    onChange: e => setProjectTitle(e.target.value),
    placeholder: "Title"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    value: projectDescription,
    onChange: e => setProjectDescription(e.target.value),
    placeholder: "Description"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: gitHubLink,
    onChange: e => setGitHubLink(e.target.value),
    placeholder: "GitHub Link"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: image,
    onChange: e => setImage(e.target.value),
    placeholder: "Image URL"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Post")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PostList_PostList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    getAllPosts: getAllPosts,
    posts: posts
  }));
}

/***/ }),

/***/ "./src/pages/ProfilePage/ProfilePage.js":
/*!**********************************************!*\
  !*** ./src/pages/ProfilePage/ProfilePage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePage.module.scss */ "./src/pages/ProfilePage/ProfilePage.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_ProfileImage_ProfileImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ProfileImage/ProfileImage */ "./src/components/ProfileImage/ProfileImage.js");
/* harmony import */ var _components_FollowList_FollowList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FollowList/FollowList */ "./src/components/FollowList/FollowList.js");
/* harmony import */ var _components_ProfilePostList_ProfilePostList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ProfilePostList/ProfilePostList */ "./src/components/ProfilePostList/ProfilePostList.js");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");







const ensureHttps = url => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
};
function ProfilePage() {
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)();
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchData() {
      try {
        // Fetch user data using getUser function
        const fetchedUser = await (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_6__.getUser)(id);
        setUser(fetchedUser);

        // Fetch all posts
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData(); // Call fetchData function
  }, [id]); // Add id to dependency array to re-fetch data when id changes

  const getAllPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProfilePage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].topContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userHeading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userName
  }, user && user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imgAndEditContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ProfileImage_ProfileImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProfileImage,
    user: user
  }), user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].editBtn
  }, "Edit User Information") : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userLinks
  }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghLink,
    href: user.gitHubLink ? ensureHttps(user.gitHubLink) : '#'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghLogo,
    src: "https://i.imgur.com/F796Bnt.png"
  })), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portfolioLink,
    href: user.portfolioLink ? ensureHttps(user.portfolioLink) : '#'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portfolioLogo,
    src: "https://i.imgur.com/FZvlk3y.png"
  })))), user && user.bio && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userBio
  }, user.bio), !user || !user.bio && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userBio
  }, "No Bio at this time.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FollowList_FollowList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: user
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ProfilePostList_ProfilePostList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    posts: posts
  })));
}

/***/ }),

/***/ "./src/utilities/send-request.js":
/*!***************************************!*\
  !*** ./src/utilities/send-request.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendRequest)
/* harmony export */ });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-service */ "./src/utilities/users-service.js");

async function sendRequest(url) {
  let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  let payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const options = {
    method
  };
  if (payload) {
    options.headers = {
      'Content-Type': 'application/json'
    };
    options.body = JSON.stringify(payload);
  }
  const token = (0,_users_service__WEBPACK_IMPORTED_MODULE_0__.getToken)();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = "Bearer ".concat(token);
  }
  const res = await fetch(url, options);
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}

/***/ }),

/***/ "./src/utilities/users-api.js":
/*!************************************!*\
  !*** ./src/utilities/users-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   resetPassword: () => (/* binding */ resetPassword),
/* harmony export */   signUp: () => (/* binding */ signUp)
/* harmony export */ });
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/users';
function signUp(userData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL, 'POST', userData);
}
function login(credentials) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/login"), 'POST', credentials);
}
function resetPassword(emailData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/reset-password"), 'POST', emailData);
}

/***/ }),

/***/ "./src/utilities/users-service.js":
/*!****************************************!*\
  !*** ./src/utilities/users-service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getToken: () => (/* binding */ getToken),
/* harmony export */   getUser: () => (/* binding */ getUser),
/* harmony export */   logOut: () => (/* binding */ logOut),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   signUp: () => (/* binding */ signUp)
/* harmony export */ });
/* unused harmony export resetPassword */
/* harmony import */ var _users_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-api */ "./src/utilities/users-api.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

async function signUp(userData) {
  const token = await _users_api__WEBPACK_IMPORTED_MODULE_0__.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}
async function login(credentials, rememberMe, navigate) {
  try {
    // Pass credentials and rememberMe option to the API call
    const token = await _users_api__WEBPACK_IMPORTED_MODULE_0__.login(_objectSpread(_objectSpread({}, credentials), {}, {
      rememberMe
    }));
    localStorage.setItem('token', token);
    const user = getUser();
    console.log("User:", user);

    // Redirect to homepage upon successful login
    navigate('/'); // Replace '/' with the path of your homepage

    return user;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
}
function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
function getUser() {
  const token = getToken();
  if (!token) return null; // Return null if token is missing
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.user; // Return user object from token payload
  } catch (error) {
    console.error("Error parsing user from token:", error);
    return null; // Return null if there's an error parsing the token
  }
}
function logOut() {
  localStorage.removeItem('token');
}
async function resetPassword(emailData) {
  try {
    // Call the resetPassword function from usersAPI
    await _users_api__WEBPACK_IMPORTED_MODULE_0__.resetPassword(emailData);
    return true; // Password reset successful
  } catch (error) {
    console.error("Password Reset Error:", error);
    throw error;
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.IMqMrT2eGOGeFiLbCAGg {
  width: 100vw;
  height: 100vh;
}

h1 {
  font-size: 7vmin;
  color: var(--text-dark);
  text-shadow: 1px 1px 2px black;
}

h2 {
  font-size: 2vw;
  color: var(--text-dark);
}

h3 {
  font-size: 1.3vw;
}

p {
  font-size: 0.8vw;
}

input {
  /* width: 25vw; */ /*Will Changed Temp */
  height: 3.5rem;
  border-radius: 1rem;
  margin-left: 1rem;
  font-size: 2rem;
  padding: 1rem;
  color: var(--input-color);
}

input:focus {
  outline: none;
  box-shadow: 0 0 1rem var(--btn-color);
}

label {
  font-size: 2.3rem;
  padding: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/App.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,aAAA;AACJ;;AAEA;EACI,gBAAA;EACA,uBAAA;EACA,8BAAA;AACJ;;AAEA;EACI,cAAA;EACA,uBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,iBAAA,EAAA,qBAAA;EACA,cAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,yBAAA;AACJ;;AAEA;EACI,aAAA;EACA,qCAAA;AACJ;;AAEA;EACI,iBAAA;EACA,aAAA;AACJ","sourcesContent":[".App {\n    width: 100vw;\n    height: 100vh;\n}\n\nh1 {\n    font-size: 7vmin;\n    color: var(--text-dark);\n    text-shadow: 1px 1px 2px black;\n}\n\nh2 {\n    font-size: 2vw;\n    color: var(--text-dark);\n}\n\nh3 {\n    font-size: 1.3vw;\n}\n\np {\n    font-size: .8vw;\n}\n\ninput {\n    /* width: 25vw; */ /*Will Changed Temp */\n    height: 3.5rem;\n    border-radius: 1rem;\n    margin-left: 1rem;\n    font-size: 2rem;\n    padding: 1rem;\n    color: var(--input-color);\n}\n\ninput:focus {\n    outline: none;\n    box-shadow: 0 0 1rem var(--btn-color);\n}\n\nlabel {\n    font-size: 2.3rem;\n    padding: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"App": `IMqMrT2eGOGeFiLbCAGg`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/FollowList/FollowList.module.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/FollowList/FollowList.module.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.AtSg2EkPDp6jd9QVI35I {
  width: 73%;
  background-color: white;
  border-radius: 1rem;
  border: 0.1rem solid lightgrey;
  box-shadow: 0 0 1rem lightgrey;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow-y: scroll;
}
.AtSg2EkPDp6jd9QVI35I .Tsfcc0AYSwPzVwCzw7NK {
  display: flex;
  flex-wrap: wrap;
}
.AtSg2EkPDp6jd9QVI35I .Tsfcc0AYSwPzVwCzw7NK .OJbXhQxC3pJ5M1ose013 {
  display: flex;
  align-items: center;
  margin-right: 2rem;
}
.AtSg2EkPDp6jd9QVI35I .Tsfcc0AYSwPzVwCzw7NK .OJbXhQxC3pJ5M1ose013 .hPv7IuPVo2GvSQG1SWo6 {
  width: 8rem;
  border-radius: 1rem;
  margin-right: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/components/FollowList/FollowList.module.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,uBAAA;EACA,mBAAA;EACA,8BAAA;EACA,8BAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,kBAAA;AACJ;AAAI;EACI,aAAA;EACA,eAAA;AAER;AADQ;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;AAGZ;AAFY;EACI,WAAA;EACA,mBAAA;EACA,kBAAA;AAIhB","sourcesContent":[".followsContainer {\n    width: 73%;\n    background-color: white;\n    border-radius: 1rem;\n    border: .1rem solid lightgrey;\n    box-shadow: 0 0 1rem lightgrey;\n    padding: 3rem;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    overflow-y: scroll;\n    .follows {\n        display: flex;\n        flex-wrap: wrap;\n        .followsContent {\n            display: flex;\n            align-items: center;\n            margin-right: 2rem;\n            .followImg {\n                width: 8rem;\n                border-radius: 1rem;\n                margin-right: 2rem;\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"followsContainer": `AtSg2EkPDp6jd9QVI35I`,
	"follows": `Tsfcc0AYSwPzVwCzw7NK`,
	"followsContent": `OJbXhQxC3pJ5M1ose013`,
	"followImg": `hPv7IuPVo2GvSQG1SWo6`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.IFrs_wH6ZfFHkHIS8B6M {
  max-width: 40vh;
  margin: auto;
  padding: 20px;
  background-color: transparent;
  border-bottom: 2px solid #ccc;
  box-shadow: none;
}
.IFrs_wH6ZfFHkHIS8B6M .UTc0JEGiUZqz7lXpMPGP {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 {
  margin-bottom: 20px;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 .zRVbsS04lV0e_b5a7FRh {
  font-size: 1.2rem;
  margin-bottom: 5px;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 .xofrtecfoEYsMc4ph_4G {
  min-width: 20vw;
  max-width: 26vw;
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  height: 3.5rem;
  margin-left: 1rem;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0;
  color: var(--input-color);
  transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 .xofrtecfoEYsMc4ph_4G:focus {
  border-bottom-color: gold; /* Change border-bottom color on focus */
}
.IFrs_wH6ZfFHkHIS8B6M .wqDD0RnwvlD8OebalB57 {
  color: #ff0000;
  font-size: 1rem;
  margin-top: 5px;
}
.IFrs_wH6ZfFHkHIS8B6M .dkaYBCIu5vx4QlxGCyHi {
  color: #00cc00;
  font-size: 1rem;
  margin-top: 5px;
}
.IFrs_wH6ZfFHkHIS8B6M .SQ6pFGLe9fdptuyzihAv {
  width: 15vh; /* Set width to auto */
  padding: 8px 16px; /* Adjust padding */
  font-size: 1rem; /* Adjust font-size */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.IFrs_wH6ZfFHkHIS8B6M .SQ6pFGLe9fdptuyzihAv:hover {
  background-color: #0056b3;
}
.IFrs_wH6ZfFHkHIS8B6M ._uR7x4NFZTbsc3UtpAtZ {
  display: block;
  text-align: center;
  margin-top: 20px;
  width: 15vh; /* Set width to auto */
  color: #007bff;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #f8f9fa;
  transition: background-color 0.3s ease;
  text-transform: capitalize;
}
.IFrs_wH6ZfFHkHIS8B6M ._uR7x4NFZTbsc3UtpAtZ:hover {
  text-decoration: underline;
  color: #0056b3;
  background-color: #e2e6ea;
}`, "",{"version":3,"sources":["webpack://./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,6BAAA;EACA,gBAAA;AACJ;AACI;EACE,eAAA;EACA,kBAAA;EACA,mBAAA;AACN;AAEI;EACE,mBAAA;AAAN;AAEM;EACE,iBAAA;EACA,kBAAA;AAAR;AAGM;EACE,eAAA;EACA,eAAA;EACA,uBAAA;EACA,YAAA;EACA,8BAAA;EACA,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,gBAAA;EACA,yBAAA;EACA,yCAAA,EAAA,2CAAA;AADR;AAIM;EACE,yBAAA,EAAA,wCAAA;AAFR;AAMI;EACE,cAAA;EACA,eAAA;EACA,eAAA;AAJN;AAOI;EACE,cAAA;EACA,eAAA;EACA,eAAA;AALN;AAQI;EACE,WAAA,EAAA,sBAAA;EACA,iBAAA,EAAA,mBAAA;EACA,eAAA,EAAA,qBAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,sCAAA;AANN;AAQM;EACE,yBAAA;AANR;AAUI;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA,EAAA,sBAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,sCAAA;EACA,0BAAA;AARN;AAUM;EACE,0BAAA;EACA,cAAA;EACA,yBAAA;AARR","sourcesContent":[".container {\n    max-width: 40vh;\n    margin: auto;\n    padding: 20px;\n    background-color: transparent;\n    border-bottom: 2px solid #ccc;\n    box-shadow: none;\n  \n    .title {\n      font-size: 2rem;\n      text-align: center;\n      margin-bottom: 20px;\n    }\n  \n    .formGroup {\n      margin-bottom: 20px;\n  \n      .label {\n        font-size: 1.2rem;\n        margin-bottom: 5px;\n      }\n  \n      .input {\n        min-width: 20vw;\n        max-width: 26vw;\n        background: transparent;\n        border: none;\n        border-bottom: 1px solid black;\n        height: 3.5rem;\n        margin-left: 1rem;\n        font-size: 1.2rem;\n        padding: 1rem;\n        border-radius: 0;\n        color: var(--input-color);\n        transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */\n      }\n  \n      .input:focus {\n        border-bottom-color: gold; /* Change border-bottom color on focus */\n      }\n    }\n  \n    .error {\n      color: #ff0000;\n      font-size: 1rem;\n      margin-top: 5px;\n    }\n  \n    .success {\n      color: #00cc00;\n      font-size: 1rem;\n      margin-top: 5px;\n    }\n  \n    .button {\n      width: 15vh; /* Set width to auto */\n      padding: 8px 16px; /* Adjust padding */\n      font-size: 1rem; /* Adjust font-size */\n      background-color: #007bff;\n      color: #fff;\n      border: none;\n      border-radius: 5px;\n      cursor: pointer;\n      transition: background-color 0.3s ease;\n  \n      &:hover {\n        background-color: #0056b3;\n      }\n    }\n  \n    .link {\n      display: block;\n      text-align: center;\n      margin-top: 20px;\n      width: 15vh; /* Set width to auto */\n      color: #007bff;\n      cursor: pointer;\n      padding: 8px 16px;\n      border-radius: 4px;\n      background-color: #f8f9fa;\n      transition: background-color 0.3s ease;\n      text-transform: capitalize;\n  \n      &:hover {\n        text-decoration: underline;\n        color: #0056b3;\n        background-color: #e2e6ea;\n      }\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `IFrs_wH6ZfFHkHIS8B6M`,
	"title": `UTc0JEGiUZqz7lXpMPGP`,
	"formGroup": `nBEjfZACLKijxcoaL9J7`,
	"label": `zRVbsS04lV0e_b5a7FRh`,
	"input": `xofrtecfoEYsMc4ph_4G`,
	"error": `wqDD0RnwvlD8OebalB57`,
	"success": `dkaYBCIu5vx4QlxGCyHi`,
	"button": `SQ6pFGLe9fdptuyzihAv`,
	"link": `_uR7x4NFZTbsc3UtpAtZ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes iB4SfQWGw0ZOCqRfypCd {
  0% {
    color: #c3ffb3;
    transform: scale(1);
  }
  50% {
    color: #98fb98;
    transform: scale(1.1);
  }
  100% {
    color: #c3ffb3;
    transform: scale(1);
  }
}
.aOctDy4BV7cS3A3FgdnO {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Body styles */
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #7bbd86, #16523c);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

h4 {
  font-size: 3rem;
}

/* Inputbox styles */
.slJPwttFXbjZj3iK5tpD {
  position: relative;
  margin: 30px 0;
  min-width: 30vh;
  max-width: 40vh;
  border-bottom: 2px solid #fff;
}
.slJPwttFXbjZj3iK5tpD:focus-within {
  border-bottom-color: gold !important; /* Change border color on focus */
}
.slJPwttFXbjZj3iK5tpD label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1.25rem;
  pointer-events: none;
  transition: all 0.5s ease-in-out;
}
.slJPwttFXbjZj3iK5tpD input {
  width: 100%;
  height: 60px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
  font-weight: bolder;
  padding: 0 35px 0 5px;
  color: #fff;
}
.slJPwttFXbjZj3iK5tpD input:focus ~ label, .slJPwttFXbjZj3iK5tpD input:valid ~ label {
  color: lightgray;
  top: -5px;
}

/* Rest of the styles */
.duhWcPoiFKzflZYTW6qA {
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 10px;
  text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);
}

.mdJKUsO6IVB_KHxsorxg {
  min-width: 25vh;
  max-width: 700px;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
}
.mdJKUsO6IVB_KHxsorxg h1 {
  font-size: 3rem;
  color: #fff;
  text-align: center;
}
.mdJKUsO6IVB_KHxsorxg .PWpsrepqIxsSicJWBQv9 {
  display: block;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL {
  margin: 35px 0;
  font-size: 0.85rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL label {
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  padding: 0.1rem;
  cursor: pointer;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL label:has(input:checked) {
  color: darkgreen;
  font-weight: bolder;
  animation: iB4SfQWGw0ZOCqRfypCd 0.5s ease forwards;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL label input {
  margin-right: 5px;
  cursor: pointer;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL .j6uBnf0W_ruy9sK_SIO4 {
  font-size: 1.25rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL .j6uBnf0W_ruy9sK_SIO4:hover {
  text-decoration: underline;
  color: #ccc;
  cursor: pointer;
}
.mdJKUsO6IVB_KHxsorxg .YtX40q4kPgyY1kLWHR5i {
  font-size: 0.9rem;
  color: #fff;
  text-align: center;
  margin: 25px 0 10px;
}
.mdJKUsO6IVB_KHxsorxg .YtX40q4kPgyY1kLWHR5i:hover {
  text-decoration: underline;
  cursor: pointer;
}
.mdJKUsO6IVB_KHxsorxg .YtX40q4kPgyY1kLWHR5i p .j6uBnf0W_ruy9sK_SIO4 {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}
.mdJKUsO6IVB_KHxsorxg .YtX40q4kPgyY1kLWHR5i p .j6uBnf0W_ruy9sK_SIO4:hover {
  text-decoration: underline;
}
.mdJKUsO6IVB_KHxsorxg button {
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(87, 163, 115);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  transition: all 0.4s ease;
}
.mdJKUsO6IVB_KHxsorxg button:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
.mdJKUsO6IVB_KHxsorxg .ZUKc8FFOJWWao8EDdobQ {
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 1.5rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #ccc;
}`, "",{"version":3,"sources":["webpack://./src/components/LoginForm/LoginForm.module.scss"],"names":[],"mappings":"AACA;EACE;IACE,cAAA;IACA,mBAAA;EAAF;EAEA;IACE,cAAA;IACA,qBAAA;EAAF;EAEA;IACE,cAAA;IACA,mBAAA;EAAF;AACF;AAGA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AADF;;AAKA,gBAAA;AACA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,8DAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;AAFF;;AAKA;EACE,eAAA;AAFF;;AAKA,oBAAA;AACA;EACE,kBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,6BAAA;AAFF;AAGE;EACE,oCAAA,EAAA,iCAAA;AADJ;AAIE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,gCAAA;AAFJ;AAKE;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,WAAA;AAHJ;AAKI;EAEE,gBAAA;EACA,SAAA;AAJN;;AASA,uBAAA;AACA;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,8CAAA;AANF;;AASA;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AANF;AAQE;EACE,eAAA;EACA,WAAA;EACA,kBAAA;AANJ;AASE;EACE,cAAA;AAPJ;AAUE;EACE,cAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AARJ;AAUI;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;AARN;AAUM;EACE,gBAAA;EACA,mBAAA;EACA,kDAAA;AARR;AAYM;EACE,iBAAA;EACA,eAAA;AAVR;AAgBI;EACE,kBAAA;EACA,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,2BAAA;AAdN;AAgBM;EACE,0BAAA;EACA,WAAA;EACA,eAAA;AAdR;AAoBE;EACE,iBAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AAlBJ;AAoBI;EACE,0BAAA;EACA,eAAA;AAlBN;AAsBM;EACE,qBAAA;EACA,WAAA;EACA,gBAAA;AApBR;AAsBQ;EACE,0BAAA;AApBV;AA0BE;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;AAxBJ;AA0BI;EACE,0CAAA;AAxBN;AA4BE;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,iBAAA;EACA,2BAAA;EACA,eAAA;EACA,WAAA;AA1BJ","sourcesContent":["\n@keyframes labelCheckedAnimation {\n  0% {\n    color: #c3ffb3; \n    transform: scale(1);\n  }\n  50% {\n    color: #98fb98; \n    transform: scale(1.1);\n  }\n  100% {\n    color: #c3ffb3;\n    transform: scale(1);\n  }\n}\n\n.LoginForm {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n}\n\n/* Body styles */\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: linear-gradient(to bottom right, #7bbd86, #16523c);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\nh4 {\n  font-size: 3rem;\n}\n\n/* Inputbox styles */\n.inputbox {\n  position: relative;\n  margin: 30px 0;\n  min-width: 30vh;\n  max-width: 40vh;\n  border-bottom: 2px solid #fff;\n  &:focus-within {\n    border-bottom-color: gold !important; /* Change border color on focus */\n  }\n\n  label {\n    position: absolute;\n    top: 50%;\n    left: 5px;\n    transform: translateY(-50%);\n    color: #fff;\n    font-size: 1.25rem;\n    pointer-events: none;\n    transition: all 0.5s ease-in-out;\n  }\n\n  input {\n    width: 100%;\n    height: 60px;\n    background: transparent;\n    border: none;\n    outline: none;\n    font-size: 1.25rem;\n    font-weight: bolder;\n    padding: 0 35px 0 5px;\n    color: #fff;\n\n    &:focus ~ label,\n    &:valid ~ label {\n      color: lightgray;\n      top: -5px;\n    }\n  }\n}\n\n/* Rest of the styles */\n.title {\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  padding: 10px;\n  text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);\n}\n\n.boxc {\n  min-width: 25vh;\n  max-width: 700px;\n  position: relative;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 3rem;\n\n  h1 {\n    font-size: 3rem;\n    color: #fff;\n    text-align: center;\n  }\n\n  .errorSign {\n    display: block;\n  }\n\n  .lost {\n    margin: 35px 0;\n    font-size: 0.85rem;\n    color: #fff;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    label {\n      font-size: 1.25rem;\n      display: flex;\n      align-items: center;\n      padding: .1rem;\n      cursor: pointer;\n      \n      &:has(input:checked) {\n        color: darkgreen;\n        font-weight: bolder;\n        animation: labelCheckedAnimation 0.5s ease forwards;\n      }\n\n\n      input {\n        margin-right: 5px;\n        cursor: pointer;\n      }\n\n      \n    }\n\n    .forgotPassword {\n      font-size: 1.25rem;\n      color: #fff;\n      text-decoration: none;\n      font-weight: 600;\n      transition: color 0.3s ease;\n\n      &:hover {\n        text-decoration: underline;\n        color: #ccc;\n        cursor: pointer;\n      }\n    }\n  }\n\n  \n  .register {\n    font-size: 0.9rem;\n    color: #fff;\n    text-align: center;\n    margin: 25px 0 10px;\n\n    &:hover {\n      text-decoration: underline;\n      cursor: pointer;\n    }\n\n    p {\n      .forgotPassword {\n        text-decoration: none;\n        color: #fff;\n        font-weight: 600;\n\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n\n  button {\n    color: white;\n    width: 100%;\n    height: 40px;\n    border-radius: 40px;\n    background-color: rgb(87, 163, 115);\n    border: none;\n    outline: none;\n    cursor: pointer;\n    font-size: 2rem;\n    font-weight: 600;\n    transition: all 0.4s ease;\n\n    &:hover {\n      background-color: rgba(255, 255, 255, 0.5);\n    }\n  }\n\n  .showPasswordIcon {\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    font-size: 1.5rem;\n    transform: translateY(-50%);\n    cursor: pointer;\n    color: #ccc;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"LoginForm": `aOctDy4BV7cS3A3FgdnO`,
	"inputbox": `slJPwttFXbjZj3iK5tpD`,
	"title": `duhWcPoiFKzflZYTW6qA`,
	"boxc": `mdJKUsO6IVB_KHxsorxg`,
	"errorSign": `PWpsrepqIxsSicJWBQv9`,
	"lost": `JAm91a8tmBcEN_9D7mVL`,
	"labelCheckedAnimation": `iB4SfQWGw0ZOCqRfypCd`,
	"forgotPassword": `j6uBnf0W_ruy9sK_SIO4`,
	"register": `YtX40q4kPgyY1kLWHR5i`,
	"showPasswordIcon": `ZUKc8FFOJWWao8EDdobQ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.SLZXaJInmBusSKJAiC7A {
  width: 100%;
  background-color: white;
  opacity: 0.6;
  height: 4rem;
}
.SLZXaJInmBusSKJAiC7A .Ycc7rx7800IPJaI2UyOo {
  width: 20vw;
  margin-left: 2rem;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .Vi729QB0vR8fTZ0UgVAQ {
  text-decoration: none;
  border: 0.1rem solid var(--nav-border);
  width: 10vw;
  height: 100%;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .Vi729QB0vR8fTZ0UgVAQ:hover {
  background-color: green;
  cursor: pointer;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .Vi729QB0vR8fTZ0UgVAQ .XmTS1C8VIV547MbqjHFC {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: black;
  font-size: 2rem;
  list-style: none;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .Vi729QB0vR8fTZ0UgVAQ .XmTS1C8VIV547MbqjHFC:hover {
  color: white;
}`, "",{"version":3,"sources":["webpack://./src/components/NavBar/NavBar.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;AACJ;AAAI;EACI,WAAA;EACA,iBAAA;AAER;AAAI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;AAER;AADQ;EACI,qBAAA;EACA,sCAAA;EACA,WAAA;EACA,YAAA;AAGZ;AAFY;EACI,uBAAA;EACA,eAAA;AAIhB;AAFY;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;AAIhB;AAHgB;EACI,YAAA;AAKpB","sourcesContent":[".Nav {\n    width: 100%;\n    background-color: white;\n    opacity: .6;\n    height: 4rem;\n    .image {\n        width: 20vw;\n        margin-left: 2rem;\n    }\n    .ul {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        .navItem {\n            text-decoration: none;\n            border: .1rem solid var(--nav-border);\n            width: 10vw;\n            height: 100%;\n            &:hover{\n                background-color: green;\n                cursor: pointer;\n            }\n            .listItem {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                width: 100%;\n                height: 100%;\n                color: black;\n                font-size: 2rem;\n                list-style: none;\n                &:hover {\n                    color: white;\n                }\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Nav": `SLZXaJInmBusSKJAiC7A`,
	"image": `Ycc7rx7800IPJaI2UyOo`,
	"ul": `VhefOyE6KqL2INmTvax_`,
	"navItem": `Vi729QB0vR8fTZ0UgVAQ`,
	"listItem": `XmTS1C8VIV547MbqjHFC`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Post/Post.module.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Post/Post.module.scss ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.kQzjKpTiHJLJ5WNNtTAD {
  width: 100%;
  padding: 2rem;
  min-height: 25vh;
  border: 0.1rem solid rgba(51, 86, 51, 0.3);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: black;
  box-shadow: 0 0 0.3rem var(--text-green);
}

.cxO_ngSGPeT7TF8HthZe {
  font-size: 3rem;
  font-weight: bold;
  color: var(--text-green);
  letter-spacing: 1px;
  padding-bottom: 0.5rem;
}

._ibScGpDo_0RxtdWctb4 {
  font-size: 2.3rem;
  color: black;
  letter-spacing: 2px;
  text-decoration: none;
}

.ycpCjprELliy8RQqWAsq {
  font-size: 1.5rem;
  color: black;
  padding-top: 8rem;
  max-width: 75%;
  letter-spacing: 2px;
}

.BHR4ILMA2bTJlnREoS18 {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/components/Post/Post.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,aAAA;EACA,gBAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,YAAA;EACA,wCAAA;AACJ;;AAEA;EACI,eAAA;EACA,iBAAA;EACA,wBAAA;EACA,mBAAA;EACA,sBAAA;AACJ;;AAEA;EACI,iBAAA;EACA,YAAA;EACA,mBAAA;EACA,qBAAA;AACJ;;AAEA;EACI,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,cAAA;EACA,mBAAA;AACJ;;AAEA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AACJ","sourcesContent":[".Post {\n    width: 100%;\n    padding: 2rem;\n    min-height: 25vh;\n    border: .1rem solid rgb(51, 86, 51, 0.3);\n    border-radius: 20px;\n    display: flex;\n    justify-content: space-between;\n    background-color: white;\n    color: black;\n    box-shadow: 0 0 .3rem var(--text-green);\n}\n\n.title {\n    font-size: 3rem;\n    font-weight: bold;\n    color: var(--text-green);\n    letter-spacing: 1px;\n    padding-bottom: .5rem; \n}\n\n.user {\n    font-size: 2.3rem;\n    color: black;\n    letter-spacing: 2px;\n    text-decoration: none;\n}\n\n.description {\n    font-size: 1.5rem;\n    color: black;\n    padding-top: 8rem;\n    max-width: 75%;\n    letter-spacing: 2px;\n}\n\n.imageContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-width: 100%;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Post": `kQzjKpTiHJLJ5WNNtTAD`,
	"title": `cxO_ngSGPeT7TF8HthZe`,
	"user": `_ibScGpDo_0RxtdWctb4`,
	"description": `ycpCjprELliy8RQqWAsq`,
	"imageContainer": `BHR4ILMA2bTJlnREoS18`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/PostList/PostList.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/PostList/PostList.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.frwmGgIXMP1Gp_WSYbrf {
  margin: 2rem auto;
  width: 70vw;
  height: 100vh;
}`, "",{"version":3,"sources":["webpack://./src/components/PostList/PostList.module.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;EACA,WAAA;EACA,aAAA;AACJ","sourcesContent":[".PostList {\n    margin: 2rem auto;\n    width: 70vw;\n    height: 100vh;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"PostList": `frwmGgIXMP1Gp_WSYbrf`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProfileImage/ProfileImage.module.scss":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProfileImage/ProfileImage.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.xsUAsrpL8C1WDeULMZqQ {
  border: 3px solid var(--bg-color);
  height: 15rem;
  width: 15rem;
  border-radius: 100%;
  overflow: hidden;
}
.xsUAsrpL8C1WDeULMZqQ .g6ofyX0Nm0_6YhkDlr9M {
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/components/ProfileImage/ProfileImage.module.scss"],"names":[],"mappings":"AAAA;EACI,iCAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;AACJ;AAAI;EACI,WAAA;AAER","sourcesContent":[".imgContainer {\n    border: 3px solid var(--bg-color);\n    height: 15rem;\n    width: 15rem;\n    border-radius: 100%;\n    overflow: hidden;\n    .ProfileImage {\n        width: 100%;   \n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"imgContainer": `xsUAsrpL8C1WDeULMZqQ`,
	"ProfileImage": `g6ofyX0Nm0_6YhkDlr9M`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProfilePostList/ProfilePostList.module.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProfilePostList/ProfilePostList.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.yvQBXs8UNZrzFQYNhhJZ {
  margin-top: 3rem;
  background-color: white;
  width: 100%;
  min-height: 60rem;
  border-radius: 1rem;
  padding: 2rem;
  border: 0.1rem solid lightgrey;
  box-shadow: 0 0 1rem lightgrey;
}

.mANOG7uhC7F8tZZxgeqE {
  margin-top: 3rem;
  background-color: white;
  width: 100%;
  border-radius: 1rem;
  padding: 2rem;
  border: 0.1rem solid lightgrey;
  box-shadow: 0 0 1rem lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mANOG7uhC7F8tZZxgeqE .U1aixfpx6a3LIa0leIu7 .k1EPxlm_O2L5cOf3N2Jo {
  max-height: 40rem;
  border-radius: 1rem;
  border: 0.2rem solid lightgrey;
}
.mANOG7uhC7F8tZZxgeqE .xXpT1wCFVQGqiwixd1b0 {
  padding: 1rem;
  margin-left: 1rem;
  min-height: 50rem;
  border: 1px solid lightgrey;
  display: flex;
  width: 50%;
  border-radius: 1rem;
  background-color: var(--bg-color);
  box-shadow: 0 0 1rem lightgrey;
}
.mANOG7uhC7F8tZZxgeqE .WzWGyhvoiCxWrepDuuZN {
  width: 20%;
  min-height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.mANOG7uhC7F8tZZxgeqE .WzWGyhvoiCxWrepDuuZN .wgPWHyTx4ee2dIX7sCHL {
  width: 9rem;
  height: 9rem;
  border-radius: 100%;
  background-color: var(--bg-color);
}`, "",{"version":3,"sources":["webpack://./src/components/ProfilePostList/ProfilePostList.module.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,uBAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,8BAAA;AACJ;;AACA;EACI,gBAAA;EACA,uBAAA;EACA,WAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,8BAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAEJ;AAAQ;EACI,iBAAA;EACA,mBAAA;EACA,8BAAA;AAEZ;AACI;EACI,aAAA;EACA,iBAAA;EACA,iBAAA;EACA,2BAAA;EACA,aAAA;EACA,UAAA;EACA,mBAAA;EACA,iCAAA;EACA,8BAAA;AACR;AACI;EACI,UAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;AACR;AAAQ;EACI,WAAA;EACA,YAAA;EACA,mBAAA;EACA,iCAAA;AAEZ","sourcesContent":[".PostContainer {\n    margin-top: 3rem;\n    background-color: white;\n    width: 100%;\n    min-height: 60rem;\n    border-radius: 1rem;\n    padding: 2rem;\n    border: .1rem solid lightgrey;\n    box-shadow: 0 0 1rem lightgrey;\n}\n.PostItems {\n    margin-top: 3rem;\n    background-color: white;\n    width: 100%;\n    border-radius: 1rem;\n    padding: 2rem;\n    border: .1rem solid lightgrey;\n    box-shadow: 0 0 1rem lightgrey;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    .imgContainer {\n        .image {\n            max-height: 40rem;\n            border-radius: 1rem;\n            border: .2rem solid lightgrey;\n        }\n    }\n    .postDescription {\n        padding: 1rem;\n        margin-left: 1rem;\n        min-height: 50rem;\n        border: 1px solid lightgrey;\n        display: flex;\n        width: 50%;\n        border-radius: 1rem;\n        background-color: var(--bg-color);\n        box-shadow: 0 0 1rem lightgrey;\n    }\n    .iconContainer {\n        width: 20%;\n        min-height: 50rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n        .icon {\n            width: 9rem;\n            height: 9rem;\n            border-radius: 100%;\n            background-color: var(--bg-color);\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"PostContainer": `yvQBXs8UNZrzFQYNhhJZ`,
	"PostItems": `mANOG7uhC7F8tZZxgeqE`,
	"imgContainer": `U1aixfpx6a3LIa0leIu7`,
	"image": `k1EPxlm_O2L5cOf3N2Jo`,
	"postDescription": `xXpT1wCFVQGqiwixd1b0`,
	"iconContainer": `WzWGyhvoiCxWrepDuuZN`,
	"icon": `wgPWHyTx4ee2dIX7sCHL`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SignUpForm/SignUpForm.module.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SignUpForm/SignUpForm.module.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Body styles */
.AZyVy8LqmhkdEsCxUMdf {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #7bbd86, #16523c);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.G2ijX8bHTJbg8fG7Xvdl {
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 10px;
  text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);
}

.O3kJQXyeVBVPoVbc0TQA {
  min-width: 25vh; /* Adjust as needed */
  max-width: 700px; /* Adjust as needed */
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
}
.O3kJQXyeVBVPoVbc0TQA h1 {
  font-size: 3rem; /* Match the font size here */
  color: #fff;
  text-align: center;
}

.G5WQETTTkTlRpPef5KUY {
  position: relative;
  margin: 30px 0;
  min-width: 30vh;
  max-width: 40vh;
  border-bottom: 2px solid #fff;
}
.G5WQETTTkTlRpPef5KUY:focus-within {
  border-bottom-color: gold !important; /* Change border color on focus */
}

.G5WQETTTkTlRpPef5KUY label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-size: 1.25rem; /* Match the font size here */
  pointer-events: none;
  transition: all 0.5s ease-in-out;
}

.G5WQETTTkTlRpPef5KUY select {
  width: 100%;
  height: 80px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
  padding: 0 35px 0 5px;
  color: #fff;
}

.G5WQETTTkTlRpPef5KUY select option {
  font-size: 1.25rem;
  background-color: #081C15; /* Background color for options */
  border-radius: 2px;
  color: #fff; /* Text color for options */
}

.G5WQETTTkTlRpPef5KUY input:focus ~ label,
.G5WQETTTkTlRpPef5KUY input:valid ~ label {
  color: lightgray;
  top: -5px;
}

.G5WQETTTkTlRpPef5KUY input {
  width: 100%;
  height: 60px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem; /* Match the font size here */
  padding: 0 35px 0 5px;
  color: #fff;
}

.emIz9U5VSVFVmZPhEvKw {
  margin-top: 20px;
  font-size: 0.85rem;
  color: #fff;
  display: flex;
  justify-content: center;
}

.emIz9U5VSVFVmZPhEvKw p a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.emIz9U5VSVFVmZPhEvKw p:hover {
  text-decoration: underline;
  cursor: pointer;
}

button {
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(87, 163, 115);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.4s ease;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.G5WQETTTkTlRpPef5KUY select {
  width: 100%;
  height: 60px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
  padding: 0 5px;
  color: #fff;
}

select:hover {
  cursor: pointer;
}

option {
  color: black;
}

.JtQI_Hm4R0_7b5aQ1Jdw {
  font-size: 1.25rem;
  color: #fff;
  text-align: center;
  margin: 25px 0 10px;
}

.JtQI_Hm4R0_7b5aQ1Jdw p a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}

.JtQI_Hm4R0_7b5aQ1Jdw p a:hover {
  text-decoration: underline;
}

.XEq2Dm2tfurQtGWxCT44 {
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 1.75rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #ccc;
}`, "",{"version":3,"sources":["webpack://./src/components/SignUpForm/SignUpForm.module.scss"],"names":[],"mappings":"AAGA,gBAAA;AACA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AADF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,8DAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;AAAF;;AAGA;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,8CAAA;AAAF;;AAGA;EACE,eAAA,EAAA,qBAAA;EACA,gBAAA,EAAA,qBAAA;EACA,kBAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAAF;AAEE;EACE,eAAA,EAAA,6BAAA;EACA,WAAA;EACA,kBAAA;AAAJ;;AAIA;EACE,kBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,6BAAA;AADF;AAGE;EACE,oCAAA,EAAA,iCAAA;AADJ;;AAKA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;EACA,WAAA;EACA,kBAAA,EAAA,6BAAA;EACA,oBAAA;EACA,gCAAA;AAFF;;AAKA;EACI,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,qBAAA;EACA,WAAA;AAFJ;;AAKE;EACE,kBAAA;EACA,yBAAA,EAAA,iCAAA;EACA,kBAAA;EACA,WAAA,EAAA,2BAAA;AAFJ;;AAKE;;EAEE,gBAAA;EACA,SAAA;AAFJ;;AAKA;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA,EAAA,6BAAA;EACA,qBAAA;EACA,WAAA;AAFF;;AAKA;EACE,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;AAFF;;AAKA;EACE,WAAA;EACA,qBAAA;EACA,gBAAA;AAFF;;AAKA;EACI,0BAAA;EACA,eAAA;AAFJ;;AAKA;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;AAFF;;AAKA;EACE,0CAAA;AAFF;;AAKA;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;AAFF;;AAKA;EACE,eAAA;AAFF;;AAKA;EACE,YAAA;AAFF;;AAKA;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AAFF;;AAKA;EACE,qBAAA;EACA,WAAA;EACA,gBAAA;AAFF;;AAKA;EACE,0BAAA;AAFF;;AAKA;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,kBAAA;EACA,2BAAA;EACA,eAAA;EACA,WAAA;AAFF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');\n\n\n/* Body styles */\n.SignUpForm {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: linear-gradient(to bottom right, #7bbd86, #16523c);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.title {\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  padding: 10px;\n  text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);\n}\n\n.boxc {\n  min-width: 25vh; /* Adjust as needed */\n  max-width: 700px; /* Adjust as needed */\n  position: relative;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 3rem;\n\n  h1 {\n    font-size: 3rem; /* Match the font size here */\n    color: #fff;\n    text-align: center;\n  }\n}\n\n.inputbox {\n  position: relative;\n  margin: 30px 0;\n  min-width: 30vh;\n  max-width: 40vh;\n  border-bottom: 2px solid #fff;\n\n  &:focus-within {\n    border-bottom-color: gold !important; /* Change border color on focus */\n  }\n}\n\n.inputbox label {\n  position: absolute;\n  top: 50%;\n  left: 5px;\n  transform: translateY(-50%);\n  color: #fff;\n  font-size: 1.25rem; /* Match the font size here */\n  pointer-events: none;\n  transition: all 0.5s ease-in-out;\n}\n\n.inputbox select {\n    width: 100%;\n    height: 80px;\n    background: transparent;\n    border: none;\n    outline: none;\n    font-size: 1.25rem;\n    padding: 0 35px 0 5px;\n    color: #fff;\n  }\n  \n  .inputbox select option {\n    font-size: 1.25rem;\n    background-color: #081C15; /* Background color for options */\n    border-radius: 2px;\n    color: #fff; /* Text color for options */\n  }\n\n  .inputbox input:focus ~ label,\n  .inputbox input:valid ~ label {\n    color: lightgray;\n    top: -5px;\n  }\n  \n.inputbox input {\n  width: 100%;\n  height: 60px;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 1.25rem; /* Match the font size here */\n  padding: 0 35px 0 5px;\n  color: #fff;\n}\n\n.login {\n  margin-top: 20px; \n  font-size: 0.85rem;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n}\n\n.login p a {\n  color: #fff;\n  text-decoration: none;\n  font-weight: 600;\n}\n\n.login p:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\nbutton {\n  color: white;\n  width: 100%;\n  height: 40px;\n  border-radius: 40px;\n  background-color: rgb(87, 163, 115);\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 1.25rem;\n  font-weight: 600;\n  transition: all 0.4s ease;\n}\n\nbutton:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.inputbox select {\n  width: 100%;\n  height: 60px;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 1.25rem;\n  padding: 0 5px;\n  color: #fff;\n}\n\nselect:hover {\n  cursor: pointer;\n}\n\noption {\n  color: black;\n}\n\n.register {\n  font-size: 1.25rem;\n  color: #fff;\n  text-align: center;\n  margin: 25px 0 10px;\n}\n\n.register p a {\n  text-decoration: none;\n  color: #fff;\n  font-weight: 600;\n}\n\n.register p a:hover {\n  text-decoration: underline;\n}\n\n.showPasswordIcon {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  font-size: 1.75rem;\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: #ccc;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"SignUpForm": `AZyVy8LqmhkdEsCxUMdf`,
	"title": `G2ijX8bHTJbg8fG7Xvdl`,
	"boxc": `O3kJQXyeVBVPoVbc0TQA`,
	"inputbox": `G5WQETTTkTlRpPef5KUY`,
	"login": `emIz9U5VSVFVmZPhEvKw`,
	"register": `JtQI_Hm4R0_7b5aQ1Jdw`,
	"showPasswordIcon": `XEq2Dm2tfurQtGWxCT44`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Asap+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Galdeano&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Buginese&family=Sulphur+Point:wght@300;400;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --heading-color: rgb(78, 91, 49);
  --bg-color: rgb(244, 246, 240);
  --btn-animation: rgba(219, 171, 171, 0.3);
  --input-color: rgb(87, 8, 8);
  --nav-border: rgba(219, 171, 171, 0.3);
  --text-red: rgb(237, 100, 100);
  --text-green: rgb(51, 86, 51);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter Tight", Verdana, Tahoma, sans-serif;
}

body {
  background-color: var(--bg-color);
}`, "",{"version":3,"sources":["webpack://./src/index.module.scss"],"names":[],"mappings":"AAEA;EACI,gCAAA;EACA,8BAAA;EACA,yCAAA;EACA,4BAAA;EACA,sCAAA;EACA,8BAAA;EACA,6BAAA;AACJ;;AAEA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,uDAAA;AACJ;;AAEA;EACI,iCAAA;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Asap+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Galdeano&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Buginese&family=Sulphur+Point:wght@300;400;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');\n:root {\n    --heading-color: rgb(78, 91, 49);\n    --bg-color: rgb(244, 246, 240);\n    --btn-animation: rgba(219, 171, 171, 0.3);\n    --input-color: rgb(87, 8, 8);\n    --nav-border: rgba(219, 171, 171, 0.3);\n    --text-red: rgb(237, 100, 100);\n    --text-green: rgb(51, 86, 51);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: \"Inter Tight\", Verdana, Tahoma, sans-serif;\n}\n\nbody {\n    background-color: var(--bg-color);\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ForgotPassword/ForgotPassword.module.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ForgotPassword/ForgotPassword.module.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.z1XFB0qbBjHblp8c_F5M {
  margin: 0 auto;
  width: 80%;
  height: 100%;
  padding: 5rem 10rem;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-height: 50rem;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H {
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  border: 0.1rem solid lightgrey;
  box-shadow: 0 0 1rem lightgrey;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .uK8D5va6yweSFDp9V9EA {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .uK8D5va6yweSFDp9V9EA .XLulKpjU3oXLNW5wNTQy {
  font-size: 1.2rem;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .uK8D5va6yweSFDp9V9EA .XLulKpjU3oXLNW5wNTQy:hover {
  color: blue;
  text-decoration: underline;
  transition: none;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .dbIMdhqIGQg9JtZeKmrK {
  color: black;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH {
  width: 15rem;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.5rem;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH .VTiGYB_vr7yJA7Vk5uTj {
  background-color: lightgrey;
  border-radius: 100%;
  width: 4rem;
  transition: 0.3s ease;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH .VTiGYB_vr7yJA7Vk5uTj:hover {
  background-color: green;
  transition: 0.3s ease;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH .f9PniY17HdeQBxVJqbhw {
  background-color: lightgrey;
  border-radius: 100%;
  width: 4rem;
  padding: 1rem;
  transition: 0.3s ease;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH .f9PniY17HdeQBxVJqbhw:hover {
  background-color: green;
  transition: 0.3s ease;
}`, "",{"version":3,"sources":["webpack://./src/pages/ProfilePage/ProfilePage.module.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,UAAA;EACA,YAAA;EACA,mBAAA;AACJ;AAAI;EACI,aAAA;EACA,8BAAA;EACA,WAAA;EACA,iBAAA;AAER;AADQ;EACI,aAAA;EACA,sBAAA;EACA,UAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,8BAAA;AAGZ;AAFY;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAIhB;AAHgB;EACI,iBAAA;AAKpB;AAJoB;EACI,WAAA;EACA,0BAAA;EACA,gBAAA;AAMxB;AAFY;EACI,YAAA;AAIhB;AAFY;EACI,YAAA;EACA,aAAA;EACA,6BAAA;EACA,qBAAA;AAIhB;AAHgB;EACI,2BAAA;EACA,mBAAA;EACA,WAAA;EACA,qBAAA;AAKpB;AAJoB;EACI,uBAAA;EACA,qBAAA;AAMxB;AAHgB;EACI,2BAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,qBAAA;AAKpB;AAJoB;EACI,uBAAA;EACA,qBAAA;AAMxB","sourcesContent":[".ProfilePage {\n    margin: 0 auto;\n    width: 80%;\n    height: 100%;\n    padding: 5rem 10rem;\n    .topContainer {\n        display: flex;\n        justify-content: space-between;\n        width: 100%;\n        max-height: 50rem;\n        .userContainer {\n            display: flex;\n            flex-direction: column;\n            width: 25%;\n            background-color: white;\n            border-radius: 1rem;\n            padding: 2rem;\n            border: .1rem solid lightgrey;\n            box-shadow: 0 0 1rem lightgrey;\n            .imgAndEditContainer {\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                width: 15rem;\n                .editBtn {\n                    font-size: 1.2rem;\n                    &:hover {\n                        color: blue;\n                        text-decoration: underline;\n                        transition: none;\n                    }\n                }\n            }\n            .userBio {\n                color: black;\n            }\n            .userLinks {\n                width: 15rem;\n                display: flex;\n                justify-content: space-evenly;\n                margin-bottom: 1.5rem;\n                .ghLogo {\n                    background-color: lightgrey;\n                    border-radius: 100%;\n                    width: 4rem;\n                    transition: .3s ease;\n                    &:hover {\n                        background-color: green;\n                        transition: .3s ease;\n                    }\n                }\n                .portfolioLogo {\n                    background-color: lightgrey;\n                    border-radius: 100%;\n                    width: 4rem;\n                    padding: 1rem;\n                    transition: .3s ease;\n                    &:hover {\n                        background-color: green;\n                        transition: .3s ease;\n                    }\n                }\n            }\n        }\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ProfilePage": `z1XFB0qbBjHblp8c_F5M`,
	"topContainer": `Fn3Y8z6cyE3sFTgZXhsg`,
	"userContainer": `C3y4TdU4vKMpvL4_wj8H`,
	"imgAndEditContainer": `uK8D5va6yweSFDp9V9EA`,
	"editBtn": `XLulKpjU3oXLNW5wNTQy`,
	"userBio": `dbIMdhqIGQg9JtZeKmrK`,
	"userLinks": `LG29adQOef4sgu1x7iuH`,
	"ghLogo": `VTiGYB_vr7yJA7Vk5uTj`,
	"portfolioLogo": `f9PniY17HdeQBxVJqbhw`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.module.scss":
/*!*****************************!*\
  !*** ./src/App.module.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./App.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/FollowList/FollowList.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/FollowList/FollowList.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./FollowList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/FollowList/FollowList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss":
/*!**************************************************************************!*\
  !*** ./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ForgotPasswordForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/LoginForm/LoginForm.module.scss":
/*!********************************************************!*\
  !*** ./src/components/LoginForm/LoginForm.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NavBar/NavBar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/NavBar/NavBar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavBar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Post/Post.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Post/Post.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Post_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Post.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Post/Post.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Post_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Post_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Post_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Post_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PostList/PostList.module.scss":
/*!******************************************************!*\
  !*** ./src/components/PostList/PostList.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PostList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./PostList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/PostList/PostList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PostList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PostList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PostList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PostList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ProfileImage/ProfileImage.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/ProfileImage/ProfileImage.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProfileImage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProfileImage/ProfileImage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ProfilePostList/ProfilePostList.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/ProfilePostList/ProfilePostList.module.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePostList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProfilePostList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProfilePostList/ProfilePostList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePostList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePostList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePostList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePostList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SignUpForm/SignUpForm.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/SignUpForm/SignUpForm.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SignUpForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SignUpForm/SignUpForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.module.scss":
/*!*******************************!*\
  !*** ./src/index.module.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/AuthPage/AuthPage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AuthPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ForgotPassword/ForgotPassword.module.scss":
/*!*************************************************************!*\
  !*** ./src/pages/ForgotPassword/ForgotPassword.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ForgotPassword.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ForgotPassword/ForgotPassword.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/HomePage/HomePage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/HomePage/HomePage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./HomePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ProfilePage/ProfilePage.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/ProfilePage/ProfilePage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProfilePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-354ecd"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.c5dc43c72932299f186808e3ca3aad6e.js.map