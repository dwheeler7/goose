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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/AuthPage/AuthPage */ "./src/pages/AuthPage/AuthPage.js");
/* harmony import */ var _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/HomePage/HomePage */ "./src/pages/HomePage/HomePage.js");
/* harmony import */ var _pages_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ForgotPassword/ForgotPassword */ "./src/pages/ForgotPassword/ForgotPassword.js");
/* harmony import */ var _components_ResetPassword_ResetPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ResetPassword/ResetPassword */ "./src/components/ResetPassword/ResetPassword.js");
/* harmony import */ var _pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/ProfilePage/ProfilePage */ "./src/pages/ProfilePage/ProfilePage.js");
/* harmony import */ var _utilities_posts_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utilities/posts-service */ "./src/utilities/posts-service.js");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _components_CustomerSupport_CustomerSupport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CustomerSupport/CustomerSupport */ "./src/components/CustomerSupport/CustomerSupport.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.module.scss */ "./src/App.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

 // Import useLocation










function App() {
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_9__.getUser)());
  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation)();
  const shouldNotDisplayNavBar = !['/auth', '/auth/forgot-password'].includes(location.pathname);

  // function to fetch posts to pass to compontents
  const fetchPosts = async () => {
    console.log('fetch posts use effect...');
    try {
      const postsData = await (0,_utilities_posts_service__WEBPACK_IMPORTED_MODULE_11__.getAllPosts)();
      setPosts(postsData);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  // function to fetch users
  const fetchUsers = async () => {
    try {
      const foundUsers = await (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_9__.indexUsers)();
      setUsers(foundUsers);
    } catch (error) {
      console.error('Error finding users', error);
    }
  };

  // use effect to fetch all posts
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchPosts();
  }, []);

  // use effect to fetch all users
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchUsers();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].App
  }, shouldNotDisplayNavBar && /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].NavBar,
    setUser: setUser,
    user: user,
    users: users
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: user,
      setUser: setUser,
      posts: posts,
      fetchPosts: fetchPosts,
      users: users,
      setUsers: setUsers
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/customer-support",
    element: /*#__PURE__*/React.createElement(_components_CustomerSupport_CustomerSupport__WEBPACK_IMPORTED_MODULE_7__.SupportTicketForm, null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/auth",
    element: /*#__PURE__*/React.createElement(_pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: user,
      setUser: setUser
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/auth/forgot-password",
    element: /*#__PURE__*/React.createElement(_pages_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setUser: setUser
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/reset-password/:token",
    element: /*#__PURE__*/React.createElement(_components_ResetPassword_ResetPassword__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: user,
      setUser: setUser
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/profile/:userId",
    element: /*#__PURE__*/React.createElement(_pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      user: user,
      setUser: setUser
      // posts={posts}                                                              
    })
  }))));
}

/***/ }),

/***/ "./src/components/CustomerSupport/CustomerSupport.js":
/*!***********************************************************!*\
  !*** ./src/components/CustomerSupport/CustomerSupport.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportTicketForm: () => (/* binding */ SupportTicketForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerSupport.module.scss */ "./src/components/CustomerSupport/CustomerSupport.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");

 // Import SCSS module

const SupportTicketForm = () => {
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [attachment, setAttachment] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // State for attachment
  const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Call customerSupportRequest function from usersService and pass attachment
      await _utilities_users_service__WEBPACK_IMPORTED_MODULE_2__.customerSupportRequest(name, email, message, attachment);
      setSubmitted(true); // Update submitted state if submission successful
    } catch (error) {
      console.error('Error submitting support ticket:', error);
      setError(error.message || 'Failed to submit support ticket, invalid email 👎');
    } finally {
      setSubmitting(false);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['support-ticket-form']
  }, submitted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['success-message']
  }, "Support ticket submitted successfully! \uD83D\uDC4D") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Your Name",
    value: name,
    onChange: e => setName(e.target.value),
    required: true,
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['input-field']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    placeholder: "Your Email",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['input-field']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    placeholder: "Your Message (You can paste images here)",
    value: message,
    onChange: e => setMessage(e.target.value),
    required: true,
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['textarea-field']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "attachment"
  }, "Attach Image:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    id: "attachment",
    accept: ".jpg, .jpeg, .png",
    onChange: e => setAttachment(e.target.files[0])
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    disabled: submitting,
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['submit-button']
  }, submitting ? 'Submitting...' : 'Submit'), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['error-message']
  }, error, " \u274C\uD83D\uDC4E\uD83D\uDC4E\uD83D\uDC4E")));
};

/***/ }),

/***/ "./src/components/Follow/Follow.js":
/*!*****************************************!*\
  !*** ./src/components/Follow/Follow.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Follow)
/* harmony export */ });
/* harmony import */ var _Follow_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Follow.module.scss */ "./src/components/Follow/Follow.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Follow(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: _Follow_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].Follow
  }, props.likes.map(like => /*#__PURE__*/React.createElement("div", {
    key: like._id
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: _Follow_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].follows,
    to: "/profile/".concat(like._id)
  }, /*#__PURE__*/React.createElement("li", null, like.name, " - ", like.userType.toUpperCase()))))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FollowList.module.scss */ "./src/components/FollowList/FollowList.module.scss");
/* harmony import */ var _Follow_Follow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Follow/Follow */ "./src/components/Follow/Follow.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");




const EmptyState = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].emptyState
}, "No posts available.");
function FollowList(_ref) {
  let {
    posts
  } = _ref;
  console.log(posts);
  const {
    userId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)();

  // Check if there are any followers
  const hasFollowers = posts.some(postData => postData.user === userId);

  // Display appropriate header based on whether there are followers
  const header = hasFollowers ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Followers") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "No Followers Yet");

  // Check if posts array is empty
  if (posts.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmptyState, null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].FollowList
  }, header, posts.map(postData =>
  // Check if postData.user exists and is not null/undefined
  postData.user === userId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Follow_Follow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: postData._id,
    user: postData.user,
    likes: postData.likes
  }) : null));
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
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPasswordForm.module.scss */ "./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss");




function ForgotPasswordForm() {
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const handleSubmit = async evt => {
    evt.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    try {
      // Call resetPassword function from usersService
      await _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.resetPassword({
        email
      });
      setSuccessMessage('Password reset successful. Check your email for further instructions.');
      setError('');
    } catch (error) {
      setError(error.message || 'Failed to reset password');
      setSuccessMessage('');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, "Forgot Password?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input
  })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].error
  }, error), successMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].success
  }, successMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Reset Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].link,
    onClick: () => navigate('/auth')
  }, "Back To Login"));
}

/***/ }),

/***/ "./src/components/LikeBtn/LikeBtn.js":
/*!*******************************************!*\
  !*** ./src/components/LikeBtn/LikeBtn.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LikeBtn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LikeBtn.module.scss */ "./src/components/LikeBtn/LikeBtn.module.scss");
/* harmony import */ var _utilities_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/posts-service */ "./src/utilities/posts-service.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function LikeBtn(_ref) {
  let {
    post,
    user,
    setPost
  } = _ref;
  // state for number of likes  
  const [likesNum, setLikesNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [likedPostBool, setLikedPostBool] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getLikedPostBool());

  // helper function to get likes num
  const getLikesNum = () => post.likes.length;

  // helper function to determine whether user liked post
  function getLikedPostBool() {
    // return post.likes.some(userLike => userLike === user._id);
    return post.likes.some(userLike => userLike._id === user._id || userLike === user._id);
  }

  // handle click
  const handleClick = async e => {
    e.preventDefault();
    try {
      let updatedPost;
      if (likedPostBool) {
        updatedPost = await (0,_utilities_posts_service__WEBPACK_IMPORTED_MODULE_2__.unlikePost)(post._id);
      } else {
        updatedPost = await (0,_utilities_posts_service__WEBPACK_IMPORTED_MODULE_2__.likePost)(post._id);
      }
      setPost(updatedPost);
    } catch (err) {
      console.error(err);
    }
  };

  // use effect to update likesNum and likedPostBool
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLikesNum(getLikesNum());
    setLikedPostBool(getLikedPostBool());
  }, [post]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLikesNum(getLikesNum());
    setLikedPostBool(getLikedPostBool());
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].LikeBtnContainer
  }, /*#__PURE__*/React.createElement("button", {
    className: _LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button,
    onClick: handleClick
  }, likedPostBool ? /*#__PURE__*/React.createElement("span", null, "Unlike") : /*#__PURE__*/React.createElement("span", null, "Like")), /*#__PURE__*/React.createElement("span", {
    className: _LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].likesSum
  }, likesNum)));
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
      // window.location.reload()
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
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].boxc
  }, /*#__PURE__*/React.createElement("form", {
    autoComplete: "off",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, /*#__PURE__*/React.createElement("h1", null, "DevHive")), /*#__PURE__*/React.createElement("div", {
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _components_SearchUsersForm_SearchUsersForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SearchUsersForm/SearchUsersForm */ "./src/components/SearchUsersForm/SearchUsersForm.js");





function NavBar(_ref) {
  let {
    user,
    setUser,
    users
  } = _ref;
  const navigateTo = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Nav
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].searchBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SearchUsersForm_SearchUsersForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    users: users
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ul
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/",
    className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].home)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btnLogo,
    src: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/home-circle-green-64.png",
    alt: "Home"
  }))), !user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/auth",
    className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].login)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].logSignup,
    src: "https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/253990/141-64.png",
    alt: "Log/Signup"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, user && user._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/profile/".concat(user._id),
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btnLogo,
    src: "https://cdn-icons-png.flaticon.com/128/14026/14026766.png",
    alt: "Profile"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/settings",
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btnLogo,
    src: "https://cdn-icons-png.flaticon.com/128/14025/14025429.png",
    alt: "Settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem,
    onClick: () => {
      _utilities_users_service__WEBPACK_IMPORTED_MODULE_5__.logOut();
      setUser(null);
      navigateTo('/auth');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btnLogo,
    src: "https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/253990/141-512.png",
    alt: "Logout"
  }))))));
}

/***/ }),

/***/ "./src/components/NewPostForm/NewPostForm.js":
/*!***************************************************!*\
  !*** ./src/components/NewPostForm/NewPostForm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewPostForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/posts-service */ "./src/utilities/posts-service.js");
/* harmony import */ var _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewPostForm.module.scss */ "./src/components/NewPostForm/NewPostForm.module.scss");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



function NewPostForm(_ref) {
  let {
    fetchPosts,
    user
  } = _ref;
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [useReadmeAsDescription, setUseReadmeAsDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    projectTitle: '',
    githubLink: '',
    image: '',
    projectDescription: ''
  });
  const handleChange = evt => {
    const {
      name,
      value
    } = evt.target;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [name]: value
    }));
    setError('');
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    formData.useReadmeAsDescription = useReadmeAsDescription;
    if (useReadmeAsDescription) {
      formData.projectDescription = '';
    }
    try {
      if (!user) throw new Error('Cannot create a post when user is not logged in');
      const createdPost = await (0,_utilities_posts_service__WEBPACK_IMPORTED_MODULE_2__.createPost)(formData);
      if (!createdPost) throw new Error('Could not create new post');
      await fetchPosts();
      setUseReadmeAsDescription(false);
      setFormData({
        // Reset form data
        projectTitle: '',
        githubLink: '',
        image: '',
        projectDescription: ''
      });
    } catch (err) {
      setError(err.message);
    }
  };
  const {
    projectTitle,
    projectDescription,
    githubLink,
    image
  } = formData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NewPostForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].heading
  }, "Create a New Post"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NewPostFormContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Form,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].textInput,
    type: "text",
    name: "projectTitle",
    value: projectTitle,
    onChange: handleChange,
    placeholder: "Title"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].textAreaInput,
    type: "text",
    name: "projectDescription",
    value: projectDescription,
    onChange: handleChange,
    placeholder: "Description"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].checkboxContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].checkInput,
    type: "checkbox",
    checked: useReadmeAsDescription,
    onChange: e => setUseReadmeAsDescription(e.target.checked)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
    htmlFor: "useReadmeAsDescription"
  }, "Use README as Description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].textInput,
    type: "text",
    name: "githubLink",
    value: githubLink,
    onChange: handleChange,
    placeholder: "Github link"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].textInput,
    type: "text",
    name: "image",
    value: image,
    onChange: handleChange,
    placeholder: "Image URL"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button,
    type: "submit"
  }, "Add project"))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorMsg
  }, error));
}

/***/ }),

/***/ "./src/components/Post/Post.js":
/*!*************************************!*\
  !*** ./src/components/Post/Post.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.module.scss */ "./src/components/Post/Post.module.scss");
/* harmony import */ var _LikeBtn_LikeBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LikeBtn/LikeBtn */ "./src/components/LikeBtn/LikeBtn.js");




function Post(_ref) {
  let {
    postData,
    isLoggedInUser,
    user
  } = _ref;
  const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(postData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Post
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].TitleImgContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectTitle
  }, post.projectTitle), post.image === '' || post.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectImage,
    src: post.image
  }) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].projectDescription
  }, post.projectDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btnContainer
  }, user && !isLoggedInUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LikeBtn_LikeBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].LikeBtn,
    post: post,
    user: user,
    setPost: setPost
  }) : null, user && isLoggedInUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Delete")) : null));
}

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




// Component to display when there are no posts available
const EmptyState = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: _PostList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].emptyState
}, "No posts available.");
function PostList(_ref) {
  let {
    posts,
    user
  } = _ref;
  // Check if there are no posts
  if (posts.length === 0) {
    // If no posts, render the EmptyState component
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmptyState, null);
  }

  // If there are posts, render the list
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: _PostList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].postList
  }, posts.map(postData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Post_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {
    postData: postData,
    key: postData._id,
    isLoggedInUser: user && user._id === postData.user,
    user: user
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
  }, user.picture ? /*#__PURE__*/React.createElement("img", {
    className: _ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProfileImage,
    src: user.picture
  }) : /*#__PURE__*/React.createElement("img", {
    className: _ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProfileImage,
    src: "https://i.imgur.com/C2VpXHd.png"
  }));
}

/***/ }),

/***/ "./src/components/ResetPassword/ResetPassword.js":
/*!*******************************************************!*\
  !*** ./src/components/ResetPassword/ResetPassword.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetPassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.module.scss */ "./src/components/ResetPassword/ResetPassword.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");




function ResetPassword(_ref) {
  let {
    user,
    setUser
  } = _ref;
  const {
    token
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(); // Extract the token parameter from the URL
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const handleSubmit = async evt => {
    evt.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      // Call the updatePasswordWithToken function from usersService
      await _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.updatePasswordWithToken(token, {
        newPassword: password
      });
      setSuccessMessage('Password updated successfully');
      setError('');
    } catch (error) {
      setError(error.message || 'Failed to update password');
      setSuccessMessage('');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Reset Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit,
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].resetPassword
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "New Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    id: "password",
    value: password,
    onChange: e => setPassword(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Confirm Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    id: "confirm-password",
    value: confirmPassword,
    onChange: e => setConfirmPassword(e.target.value)
  })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].error
  }, error), successMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].success
  }, successMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Reset Password")));
}

/***/ }),

/***/ "./src/components/SearchUsersForm/SearchUsersForm.js":
/*!***********************************************************!*\
  !*** ./src/components/SearchUsersForm/SearchUsersForm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchUserForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserList_UserList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UserList/UserList */ "./src/components/UserList/UserList.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");



function SearchUserForm(_ref) {
  let {
    users
  } = _ref;
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const handleSearch = query => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
      setSearchResults(filteredUsers);
    } else {
      setSearchResults([]);
    }
  };
  const handleUserClick = user => {
    navigate("/profile/".concat(user._id));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: searchQuery,
    onChange: e => handleSearch(e.target.value),
    placeholder: "Search for users"
  })), searchResults.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UserList_UserList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    users: searchResults,
    onUserClick: handleUserClick
  }));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpForm.module.scss */ "./src/components/SignUpForm/SignUpForm.module.scss");
/* harmony import */ var _User_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../User/User */ "./src/components/User/User.js");
const _excluded = ["userType"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




 // Import User component

function SignUpForm(_ref) {
  let {
    setUser,
    setShowLogin
  } = _ref;
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    email: '',
    password: '',
    userType: '',
    // Added userType field
    picture: '' // Added picture field
  });
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // State to track password visibility
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)(); // Corrected

  const handleChange = evt => {
    const {
      name,
      value
    } = evt.target;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [name]: value
    }));
    setError('');
  };
  const handlePictureChange = evt => {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        picture: reader.result
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      // Omit userType from formData when calling signUp function
      const {
          userType
        } = formData,
        userData = _objectWithoutProperties(formData, _excluded);
      const user = await (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_4__.signUp)(userData);
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
    userType,
    picture
  } = formData;
  const disable = !name || !email || !password || !userType;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].body
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].boxc
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "DevHive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Employer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: handlePictureChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    disabled: disable
  }, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].login
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    onClick: () => setShowLogin(true),
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].loginLink
  }, "Already have an account? Log In")))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorMessage
  }, error), picture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: picture,
    alt: "User",
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].previewImage
  }));
}

/***/ }),

/***/ "./src/components/User/User.js":
/*!*************************************!*\
  !*** ./src/components/User/User.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const User = _ref => {
  let {
    user
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, user.name));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./src/components/UserList/UserList.js":
/*!*********************************************!*\
  !*** ./src/components/UserList/UserList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../User/User */ "./src/components/User/User.js");


const UserList = _ref => {
  let {
    users,
    onUserClick
  } = _ref;
  const handleUserClick = user => {
    onUserClick(user);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, users.map((user, index) => {
    const key = user._id || user.username || index; // Use id, username, or index as the key
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: key,
      onClick: () => handleUserClick(user)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_User_User__WEBPACK_IMPORTED_MODULE_1__["default"], {
      user: user
    }));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);

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
/* harmony import */ var _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthPage.module.scss */ "./src/pages/AuthPage/AuthPage.module.scss");
/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LoginForm/LoginForm */ "./src/components/LoginForm/LoginForm.js");
/* harmony import */ var _components_SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SignUpForm/SignUpForm */ "./src/components/SignUpForm/SignUpForm.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




function AuthPage(_ref) {
  let {
    setUser
  } = _ref;
  const [showLogin, setShowLogin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  return /*#__PURE__*/React.createElement("main", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].AuthPage
  }, /*#__PURE__*/React.createElement("div", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].logo
  }), /*#__PURE__*/React.createElement("div", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].credentialsContainer
  }, showLogin ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setUser: setUser,
    setShowLogin: setShowLogin
  })) : /*#__PURE__*/React.createElement(_components_SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
/* harmony import */ var _components_ForgotPasswordForm_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ForgotPasswordForm/ForgotPasswordForm */ "./src/components/ForgotPasswordForm/ForgotPasswordForm.js");
/* harmony import */ var _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgotPassword.module.scss */ "./src/pages/ForgotPassword/ForgotPassword.module.scss");

 // Adjust the import path as needed
 // Adjust the import path as needed

function ForgotPasswordPage(_ref) {
  let {
    setUser
  } = _ref;
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
/* harmony import */ var _components_NewPostForm_NewPostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NewPostForm/NewPostForm */ "./src/components/NewPostForm/NewPostForm.js");




function HomePage(_ref) {
  let {
    posts,
    fetchPosts,
    users,
    user
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].HomePage
  }, user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NewPostForm_NewPostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fetchPosts: fetchPosts,
    user: user
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PostList_PostList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    posts: posts,
    user: user
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
/* harmony import */ var _components_PostList_PostList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostList/PostList */ "./src/components/PostList/PostList.js");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _utilities_posts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/posts-service */ "./src/utilities/posts-service.js");





// import ProfilePostList from '../../components/ProfilePostList/ProfilePostList';



const ensureHttps = url => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
};
function ProfilePage(_ref) {
  let {
    user
  } = _ref;
  const [profileUser, setProfileUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [profilePosts, setProfilePosts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isLoadingUser, setIsLoadingUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isLoadingPosts, setIsLoadingPosts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isLoggedInUser, setIsLoggedInUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // save profile user from params
  const {
    userId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)();
  // get loggedInuser from props
  const loggedInUser = user;

  // get posts of user from db
  const fetchProfilePosts = async () => {
    setIsLoadingPosts(true);
    console.log('USer Id:', userId);
    console.log('About to call API');
    const foundPosts = await (0,_utilities_posts_service__WEBPACK_IMPORTED_MODULE_6__.getAllPostsByUser)(userId);
    console.log(foundPosts);
    setProfilePosts(foundPosts);
    setIsLoadingPosts(false);
  };

  // get profile user
  const fetchProfileUser = async () => {
    setIsLoadingUser(true);
    const foundUser = await (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_7__.getProfileUser)(userId);
    setProfileUser(foundUser);
    setIsLoadingUser(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsLoggedInUser(!!(userId === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id)));
  }, [userId, loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchProfilePosts();
  }, [userId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchProfileUser();
  }, [userId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProfilePage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].topContainer
  }, isLoadingUser || isLoadingPosts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userHeading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userName
  }, profileUser.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imgContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ProfileImage_ProfileImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProfileImage,
    user: profileUser
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userLinks
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghLink,
    href: profileUser.gitHubLink ? ensureHttps(profileUser.gitHubLink) : '#',
    target: profileUser.gitHubLink ? '_blank' : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghLogo,
    src: "https://i.imgur.com/F796Bnt.png",
    alt: "GitHub"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portfolioLink,
    href: profileUser.portfolioLink ? ensureHttps(profileUser.portfolioLink) : '#'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portfolioLogo,
    src: "https://i.imgur.com/FZvlk3y.png",
    alt: "Portfolio"
  })))), profileUser.bio ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userBio
  }, profileUser.bio) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userBio
  }, "No bio at this time.")), isLoggedInUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FollowList_FollowList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    posts: profilePosts
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PostList_PostList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    posts: profilePosts,
    user: loggedInUser
  }))));
}

/***/ }),

/***/ "./src/utilities/posts-api.js":
/*!************************************!*\
  !*** ./src/utilities/posts-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   getAll: () => (/* binding */ getAll),
/* harmony export */   getAllByUser: () => (/* binding */ getAllByUser),
/* harmony export */   getById: () => (/* binding */ getById),
/* harmony export */   likePost: () => (/* binding */ likePost),
/* harmony export */   unlikePost: () => (/* binding */ unlikePost)
/* harmony export */ });
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/posts';
function create(postData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL, 'POST', postData);
}
function getAll() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL);
}
function getAllByUser(userId) {
  console.log('Post API', userId);
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/user/").concat(userId));
}
function getById(id) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(id));
}
function likePost(id) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(id, "/like"), 'POST');
}
function unlikePost(id) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(id, "/unlike"), 'POST');
}

/***/ }),

/***/ "./src/utilities/posts-service.js":
/*!****************************************!*\
  !*** ./src/utilities/posts-service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPost: () => (/* binding */ createPost),
/* harmony export */   getAllPosts: () => (/* binding */ getAllPosts),
/* harmony export */   getAllPostsByUser: () => (/* binding */ getAllPostsByUser),
/* harmony export */   likePost: () => (/* binding */ likePost),
/* harmony export */   unlikePost: () => (/* binding */ unlikePost)
/* harmony export */ });
/* unused harmony export getPost */
/* harmony import */ var _posts_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts-api */ "./src/utilities/posts-api.js");

async function createPost(postData) {
  console.log('Post data:', postData);
  try {
    const createdPost = await _posts_api__WEBPACK_IMPORTED_MODULE_0__.create(postData);
    return createdPost;
  } catch (error) {
    console.error("Error getting posts", error);
    return null;
  }
}
async function getAllPosts() {
  try {
    const postsData = await _posts_api__WEBPACK_IMPORTED_MODULE_0__.getAll();
    if (!postsData) throw new Error('Could not get posts');
    return postsData;
  } catch (error) {
    console.error("Error getting posts", error);
    return null; // Return null if there's an error parsing the token
  }
}
async function getAllPostsByUser(userID) {
  try {
    console.log(userID);
    const postsData = await _posts_api__WEBPACK_IMPORTED_MODULE_0__.getAllByUser(userID);
    console.log(postsData);
    if (!postsData) throw new Error('Could not get posts');
    return postsData;
  } catch (err) {
    console.error("Error getting posts", err);
    return null;
  }
}
async function likePost(postId) {
  try {
    const likedPost = await _posts_api__WEBPACK_IMPORTED_MODULE_0__.likePost(postId);
    if (!likedPost) throw new Error('Could not like post');
    return likedPost;
  } catch (err) {
    console.error("Error liking posts", err);
    return null;
  }
}
async function unlikePost(postId) {
  try {
    const unlikedPost = await _posts_api__WEBPACK_IMPORTED_MODULE_0__.unlikePost(postId);
    if (!unlikedPost) throw new Error('Could not like post');
    console.log(unlikedPost);
    return unlikedPost;
  } catch (err) {
    console.error("Error liking posts", err);
    return null;
  }
}
async function getPost(postId) {
  try {
    const foundPost = await _posts_api__WEBPACK_IMPORTED_MODULE_0__.getById(postId);
    if (!foundPost) throw new Error('Could not find post');
    return foundPost;
  } catch (err) {
    console.error("Error finding post", err);
    return null;
  }
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
    // Ensure options.headers is initialized if it doesn't exist
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
/* harmony export */   customerSupportRequest: () => (/* binding */ customerSupportRequest),
/* harmony export */   findUser: () => (/* binding */ findUser),
/* harmony export */   index: () => (/* binding */ index),
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
function findUser(userId) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(userId));
}
function index() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/"));
}
async function customerSupportRequest(name, email, message, attachment) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/support"), 'POST', {
    name,
    email,
    message,
    attachment
  });
}

/***/ }),

/***/ "./src/utilities/users-service.js":
/*!****************************************!*\
  !*** ./src/utilities/users-service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customerSupportRequest: () => (/* binding */ customerSupportRequest),
/* harmony export */   getProfileUser: () => (/* binding */ getProfileUser),
/* harmony export */   getToken: () => (/* binding */ getToken),
/* harmony export */   getUser: () => (/* binding */ getUser),
/* harmony export */   indexUsers: () => (/* binding */ indexUsers),
/* harmony export */   logOut: () => (/* binding */ logOut),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   resetPassword: () => (/* binding */ resetPassword),
/* harmony export */   signUp: () => (/* binding */ signUp),
/* harmony export */   updatePasswordWithToken: () => (/* binding */ updatePasswordWithToken)
/* harmony export */ });
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
async function getProfileUser(userId) {
  try {
    const foundUser = await _users_api__WEBPACK_IMPORTED_MODULE_0__.findUser(userId);
    return foundUser;
  } catch (error) {
    console.error("Error finding users", error);
  }
}
async function indexUsers() {
  console.log('indexing users');
  try {
    const foundUsers = await _users_api__WEBPACK_IMPORTED_MODULE_0__.index();
    return foundUsers;
  } catch (error) {
    console.error("Error finding users", error);
  }
}
function logOut() {
  localStorage.removeItem('token');
}

// Password reset functions
async function resetPassword(emailData) {
  try {
    await _users_api__WEBPACK_IMPORTED_MODULE_0__.resetPassword(emailData);
    return true;
  } catch (error) {
    console.error("Password Reset Error:", error);
    throw new Error("Failed to reset password.");
  }
}
async function updatePasswordWithToken(token, passwordData) {
  try {
    const response = await fetch("/api/users/reset-password/".concat(token), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(passwordData)
    });
    if (!response.ok) {
      throw new Error('Failed to update password');
    }
    return true; // Password update successful
  } catch (error) {
    console.error('Password Update Error:', error);
    throw new Error('Failed to update password.');
  }
}

// New function for support ticket request
async function customerSupportRequest(name, email, message, attachment) {
  try {
    // Make POST request for support ticket
    await _users_api__WEBPACK_IMPORTED_MODULE_0__.customerSupportRequest(name, email, message, attachment);
    return true; // Support ticket request successful
  } catch (error) {
    console.error('Support Ticket Request Error:', error);
    throw new Error('Failed to submit support ticket.');
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
  height: 100%;
  padding-top: 4rem;
}
.IMqMrT2eGOGeFiLbCAGg .z1Y52ButKREXXJL8AqTW {
  position: fixed;
  top: 0;
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
  height: 2.5rem;
  border-radius: 1rem;
  margin-left: 1rem;
  font-size: 1rem;
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
}`, "",{"version":3,"sources":["webpack://./src/App.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,YAAA;EACA,iBAAA;AACJ;AAAI;EACI,eAAA;EACA,MAAA;AAER;;AAEA;EACI,gBAAA;EACA,uBAAA;EACA,8BAAA;AACJ;;AAEA;EACI,cAAA;EACA,uBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,cAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,yBAAA;AACJ;;AAEA;EACI,aAAA;EACA,qCAAA;AACJ;;AAEA;EACI,iBAAA;EACA,aAAA;AACJ","sourcesContent":[".App {\n    width: 100vw;\n    height: 100%;\n    padding-top: 4rem;\n    .NavBar {\n        position: fixed;\n        top: 0;\n    }\n}\n\nh1 {\n    font-size: 7vmin;\n    color: var(--text-dark);\n    text-shadow: 1px 1px 2px black;\n}\n\nh2 {\n    font-size: 2vw;\n    color: var(--text-dark);\n}\n\nh3 {\n    font-size: 1.3vw;\n}\n\np {\n    font-size: .8vw;\n}\n\ninput {\n    height: 2.5rem;\n    border-radius: 1rem;\n    margin-left: 1rem;\n    font-size: 1rem;\n    padding: 1rem;\n    color: var(--input-color);\n}\n\ninput:focus {\n    outline: none;\n    box-shadow: 0 0 1rem var(--btn-color);\n}\n\nlabel {\n    font-size: 2.3rem;\n    padding: 1rem;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"App": `IMqMrT2eGOGeFiLbCAGg`,
	"NavBar": `z1Y52ButKREXXJL8AqTW`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CustomerSupport/CustomerSupport.module.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CustomerSupport/CustomerSupport.module.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.CWk_HHs9sL2udvAl3Opz {
  max-width: 400px;
  margin: 0 auto;
}
.CWk_HHs9sL2udvAl3Opz form {
  display: flex;
  flex-direction: column;
}
.CWk_HHs9sL2udvAl3Opz form input,
.CWk_HHs9sL2udvAl3Opz form textarea {
  margin-bottom: 10px;
  margin-left: 0;
  padding: 8px;
  background-color: rgb(240, 240, 240);
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1.15rem;
  color: black;
  transition: border-color 0.3s ease;
}
.CWk_HHs9sL2udvAl3Opz form input:focus,
.CWk_HHs9sL2udvAl3Opz form textarea:focus {
  border-color: #007bff;
  outline: none;
}
.CWk_HHs9sL2udvAl3Opz form textarea {
  height: 12rem;
}
.CWk_HHs9sL2udvAl3Opz form button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.CWk_HHs9sL2udvAl3Opz form button:hover {
  background-color: #0056b3;
}
.CWk_HHs9sL2udvAl3Opz form button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.CWk_HHs9sL2udvAl3Opz .clpZRsRNz0U5RD1sFacV {
  color: red;
  font-size: 1.25rem;
  font-weight: bolder;
}
.CWk_HHs9sL2udvAl3Opz .dmjQ_O5RCbXYtStXWxr0 {
  color: limegreen;
  font-size: 3rem;
  font-weight: bolder;
}`, "",{"version":3,"sources":["webpack://./src/components/CustomerSupport/CustomerSupport.module.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,cAAA;AACJ;AACI;EACE,aAAA;EACA,sBAAA;AACN;AACM;;EAEE,mBAAA;EACA,cAAA;EACA,YAAA;EACA,oCAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,kCAAA;AACR;AACQ;;EACE,qBAAA;EACA,aAAA;AAEV;AACM;EACE,aAAA;AACR;AAEM;EACE,aAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,sCAAA;AAAR;AAEQ;EACE,yBAAA;AAAV;AAGQ;EACE,sBAAA;EACA,mBAAA;AADV;AAKI;EACE,UAAA;EACA,kBAAA;EACA,mBAAA;AAHN;AAKI;EACE,gBAAA;EACA,eAAA;EACA,mBAAA;AAHN","sourcesContent":[".support-ticket-form {\n    max-width: 400px;\n    margin: 0 auto;\n  \n    form {\n      display: flex;\n      flex-direction: column;\n  \n      input,\n      textarea {\n        margin-bottom: 10px;\n        margin-left: 0;\n        padding: 8px;\n        background-color: rgb(240, 240, 240);\n        border: 2px solid #ccc;\n        border-radius: 4px;\n        font-size: 1.15rem;\n        color: black;\n        transition: border-color 0.3s ease;\n  \n        &:focus {\n          border-color: #007bff;\n          outline: none;\n        }\n      }\n      textarea {\n        height: 12rem;\n      }\n  \n      button {\n        padding: 10px;\n        background-color: #007bff;\n        color: #fff;\n        border: none;\n        border-radius: 4px;\n        font-size: 16px;\n        cursor: pointer;\n        transition: background-color 0.3s ease;\n  \n        &:hover {\n          background-color: #0056b3;\n        }\n  \n        &:disabled {\n          background-color: #ccc;\n          cursor: not-allowed;\n        }\n      }\n    }\n    .error-message {\n      color: red;\n      font-size: 1.25rem;\n      font-weight: bolder;\n    }\n    .success-message {\n      color: limegreen;\n      font-size: 3rem;\n      font-weight: bolder;\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"support-ticket-form": `CWk_HHs9sL2udvAl3Opz`,
	"error-message": `clpZRsRNz0U5RD1sFacV`,
	"success-message": `dmjQ_O5RCbXYtStXWxr0`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Follow/Follow.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Follow/Follow.module.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.k_z3E_52ZfboqViZqStf ul {
  list-style-type: none;
  margin: 0.5rem;
}
.k_z3E_52ZfboqViZqStf ul .vBvFXqvo2bwXnANkAzWG {
  text-decoration: none;
  color: blue;
}
.k_z3E_52ZfboqViZqStf ul .vBvFXqvo2bwXnANkAzWG:hover {
  color: cornflowerblue;
}`, "",{"version":3,"sources":["webpack://./src/components/Follow/Follow.module.scss"],"names":[],"mappings":"AAAA;EACI,qBAAA;EACA,cAAA;AACJ;AAAI;EACI,qBAAA;EACA,WAAA;AAER;AADQ;EACI,qBAAA;AAGZ","sourcesContent":[".Follow ul {\n    list-style-type: none;\n    margin: .5rem;\n    .follows {\n        text-decoration: none;\n        color: blue;\n        &:hover {\n            color: cornflowerblue;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Follow": `k_z3E_52ZfboqViZqStf`,
	"follows": `vBvFXqvo2bwXnANkAzWG`
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
___CSS_LOADER_EXPORT___.push([module.id, `.n58utOoGOui0H9E8hTMP {
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 5rem;
  background-color: white;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  padding: 2rem;
  border: 0.1rem solid lightgrey;
  box-shadow: 0 0 0.3rem darkgreen;
  margin: 2rem 0 2rem;
}`, "",{"version":3,"sources":["webpack://./src/components/FollowList/FollowList.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,UAAA;EACA,gBAAA;EACA,uBAAA;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,gCAAA;EACA,mBAAA;AACJ","sourcesContent":[".FollowList {\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    min-height: 5rem;\n    background-color: white;\n    border-radius: .5rem;\n    margin-bottom: 2rem;\n    padding: 2rem;\n    border: .1rem solid lightgrey;\n    box-shadow: 0 0 .3rem darkgreen;\n    margin: 2rem 0 2rem;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"FollowList": `n58utOoGOui0H9E8hTMP`
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
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes Zc6uiYv2ixSANn506Sh4 {
  0%, 100% {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  25% {
    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
.IFrs_wH6ZfFHkHIS8B6M {
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border-bottom: 2px solid #ccc;
  box-shadow: none;
  min-width: 30vh;
  max-width: 70vh;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 2rem 3rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  user-select: none;
  overflow: hidden;
  animation: Zc6uiYv2ixSANn506Sh4 5s infinite linear;
}
.IFrs_wH6ZfFHkHIS8B6M .UTc0JEGiUZqz7lXpMPGP {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Inter Tight";
  color: white;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 {
  margin-bottom: 20px;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 .zRVbsS04lV0e_b5a7FRh {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: white;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 .xofrtecfoEYsMc4ph_4G {
  min-width: 30vw;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0;
  color: white;
  transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */
  width: 30vh;
  font-weight: bolder;
  padding: 0;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 .xofrtecfoEYsMc4ph_4G:focus {
  border-bottom-color: gold; /* Change border-bottom color on focus */
}
.IFrs_wH6ZfFHkHIS8B6M .wqDD0RnwvlD8OebalB57 {
  color: #ff0000;
  font-size: 1rem;
  margin-top: 3px;
  margin-left: 5px;
}
.IFrs_wH6ZfFHkHIS8B6M .dkaYBCIu5vx4QlxGCyHi {
  color: #00cc00;
  font-size: 1rem;
  margin-top: 5px;
}
.IFrs_wH6ZfFHkHIS8B6M .SQ6pFGLe9fdptuyzihAv {
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.4s ease;
  margin-bottom: 1rem;
}
.IFrs_wH6ZfFHkHIS8B6M .SQ6pFGLe9fdptuyzihAv:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
.IFrs_wH6ZfFHkHIS8B6M ._uR7x4NFZTbsc3UtpAtZ {
  color: white;
  border-radius: 40px;
  background-color: rgb(87, 163, 115);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  width: 100%;
  transition: all 0.4s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.IFrs_wH6ZfFHkHIS8B6M ._uR7x4NFZTbsc3UtpAtZ:hover {
  background-color: rgba(255, 255, 255, 0.5);
}`, "",{"version":3,"sources":["webpack://./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,iFAAA;EACF;EAEA;IACE,qFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,uFAAA;EAFF;AACF;AAMA;EACI,iBAAA;EACA,kBAAA;EACA,6BAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,0CAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,iBAAA;EACA,gBAAA;EACA,kDAAA;AAJJ;AAMI;EACE,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,YAAA;AAJN;AAOI;EACE,mBAAA;AALN;AAOM;EACE,iBAAA;EACA,kBAAA;EACA,YAAA;AALR;AAQM;EACE,eAAA;EACA,uBAAA;EACA,YAAA;EACA,8BAAA;EACA,iBAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;EACA,yCAAA,EAAA,2CAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;AANR;AASM;EACE,yBAAA,EAAA,wCAAA;AAPR;AAWI;EACE,cAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AATN;AAYI;EACE,cAAA;EACA,eAAA;EACA,eAAA;AAVN;AAaI;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;AAXN;AAaM;EACE,0CAAA;AAXR;AAeI;EACE,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,yBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;AAbN;AAeM;EACE,0CAAA;AAbR","sourcesContent":["@keyframes shine {\n  0%, 100% {\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  25% {\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  50% {\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  75% {\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n}\n\n.container {\n    margin-left: auto;\n    margin-right: auto;\n    background-color: transparent;\n    border-bottom: 2px solid #ccc;\n    box-shadow: none;\n    min-width: 30vh;\n    max-width: 70vh;\n    border: 2px solid rgba(255, 255, 255, 0.5);\n    border-radius: 20px;\n    padding: 2rem 3rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    user-select: none;\n    overflow: hidden;\n    animation: shine 5s infinite linear;\n  \n    .title {\n      font-size: 2rem;\n      text-align: center;\n      margin-bottom: 20px;\n      font-family: \"Inter Tight\";\n      color: white;\n    }\n  \n    .formGroup {\n      margin-bottom: 20px;\n  \n      .label {\n        font-size: 1.2rem;\n        margin-bottom: 5px;\n        color: white;\n      }\n  \n      .input {\n        min-width: 30vw;\n        background: transparent;\n        border: none;\n        border-bottom: 1px solid white;\n        font-size: 1.2rem;\n        padding: 1rem;\n        border-radius: 0;\n        color: white;\n        transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */\n        width: 30vh;\n        font-weight: bolder;\n        padding: 0;\n      }\n  \n      .input:focus {\n        border-bottom-color: gold; /* Change border-bottom color on focus */\n      }\n    }\n  \n    .error {\n      color: #ff0000;\n      font-size: 1rem;\n      margin-top: 3px;\n      margin-left: 5px;\n    }\n  \n    .success {\n      color: #00cc00;\n      font-size: 1rem;\n      margin-top: 5px;\n    }\n  \n    .button {\n      color: white;\n      width: 100%;\n      height: 40px;\n      border-radius: 40px;\n      background-color: rgb(87, 163, 115);\n      border: none;\n      outline: none;\n      cursor: pointer;\n      font-size: 1.25rem;\n      font-weight: 600;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      text-decoration: none;\n      transition: all 0.4s ease;\n      margin-bottom: 1rem;\n    \n      &:hover {\n        background-color: rgba(255, 255, 255, 0.5);\n      }\n    }\n  \n    .link {\n      color: white;\n      border-radius: 40px;\n      background-color: rgb(87, 163, 115);\n      border: none;\n      outline: none;\n      cursor: pointer;\n      font-size: 1.25rem;\n      font-weight: 600;\n      padding-top: .4rem;\n      padding-bottom: .4rem;\n      width: 100%;\n      transition: all 0.4s ease;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n  \n      &:hover {\n        background-color: rgba(255, 255, 255, 0.5);\n      }\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `IFrs_wH6ZfFHkHIS8B6M`,
	"shine": `Zc6uiYv2ixSANn506Sh4`,
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LikeBtn/LikeBtn.module.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LikeBtn/LikeBtn.module.scss ***!
  \*******************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.HQz_aJWGEJ_QTsm2PCvM {
  position: relative;
}
.HQz_aJWGEJ_QTsm2PCvM .bkEyFKmi8gKCaQS4WJ6p {
  width: 5rem;
}
.HQz_aJWGEJ_QTsm2PCvM .bkEyFKmi8gKCaQS4WJ6p:hover {
  background-color: green;
}
.HQz_aJWGEJ_QTsm2PCvM .nbZ6eV9LWt5Z4uODx8f7 {
  position: absolute;
  top: 0;
  right: -0.5rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: rgb(185, 228, 178);
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/components/LikeBtn/LikeBtn.module.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;AACF;AAAE;EACE,WAAA;AAEJ;AADI;EACE,uBAAA;AAGN;AAAE;EACE,kBAAA;EACA,MAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,oCAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAEJ","sourcesContent":[".LikeBtnContainer {\n  position: relative;\n  .button {\n    width: 5rem;\n    &:hover {\n      background-color: green;\n    }\n  }\n  .likesSum {\n    position: absolute;\n    top: 0;\n    right: -.5rem;\n    font-size: 1rem;\n    font-weight: bold;\n    background-color: rgb(185, 228, 178);\n    width: 1.3rem;\n    height: 1.3rem;\n    border-radius: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"LikeBtnContainer": `HQz_aJWGEJ_QTsm2PCvM`,
	"button": `bkEyFKmi8gKCaQS4WJ6p`,
	"likesSum": `nbZ6eV9LWt5Z4uODx8f7`
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
@keyframes XRJ4HljCDLmOJmSxDLVQ {
  0%, 100% {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  25% {
    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);
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
  transform: translateY(-40%);
  color: #fff;
  font-size: 1.25rem;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
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
.mdJKUsO6IVB_KHxsorxg {
  min-width: 30vh;
  max-width: 50vh;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  overflow: hidden;
  animation: XRJ4HljCDLmOJmSxDLVQ 5s infinite linear;
}
.mdJKUsO6IVB_KHxsorxg .duhWcPoiFKzflZYTW6qA {
  width: 100%;
  color: #fff;
  padding: 10px;
  text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);
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
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.1rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  margin-right: 1rem;
  margin-left: -1.25rem;
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
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
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
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.4s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
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
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}`, "",{"version":3,"sources":["webpack://./src/components/LoginForm/LoginForm.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,cAAA;IACA,mBAAA;EACF;EACA;IACE,cAAA;IACA,qBAAA;EACF;EACA;IACE,cAAA;IACA,mBAAA;EACF;AACF;AAEA;EACE;IACE,iFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,qFAAA;EAFF;EAKA;IACE,uFAAA;EAHF;AACF;AAOA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AALF;;AASA,gBAAA;AACA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,8DAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;AANF;;AASA;EACE,eAAA;AANF;;AASA,oBAAA;AACA;EACE,kBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,6BAAA;AANF;AAOE;EACE,oCAAA,EAAA,iCAAA;AALJ;AAQE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,gCAAA;AANJ;AASE;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,WAAA;AAPJ;AASI;EAEE,gBAAA;EACA,SAAA;AARN;;AAaA,uBAAA;AAEA;EACE,eAAA;EACA,eAAA;EACA,kBAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,gBAAA;EACA,kDAAA;AAXF;AAaE;EACE,WAAA;EACA,WAAA;EACA,aAAA;EACA,8CAAA;AAXJ;AAcE;EACE,eAAA;EACA,WAAA;EACA,kBAAA;AAZJ;AAeE;EACE,cAAA;AAbJ;AAgBE;EACE,cAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAdJ;AAgBI;EACE,eAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,kBAAA;EACA,qBAAA;AAdN;AAgBM;EACE,gBAAA;EACA,mBAAA;EACA,kDAAA;AAdR;AAkBM;EACE,iBAAA;EACA,eAAA;AAhBR;AAsBI;EACE,eAAA;EACA,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,2BAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AApBd;AAqBM;EACE,0BAAA;EACA,WAAA;EACA,eAAA;AAnBR;AAyBE;EACE,iBAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AAvBJ;AAyBI;EACE,0BAAA;EACA,eAAA;AAvBN;AA2BM;EACE,qBAAA;EACA,WAAA;EACA,gBAAA;AAzBR;AA2BQ;EACE,0BAAA;AAzBV;AA+BE;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AA7BZ;AA8BI;EACE,0CAAA;AA5BN;AAgCE;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,iBAAA;EACA,2BAAA;EACA,eAAA;EACA,WAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AA9BZ","sourcesContent":["@keyframes labelCheckedAnimation {\n  0% {\n    color: #c3ffb3; \n    transform: scale(1);\n  }\n  50% {\n    color: #98fb98; \n    transform: scale(1.1);\n  }\n  100% {\n    color: #c3ffb3;\n    transform: scale(1);\n  }\n}\n\n@keyframes shine {\n  0%, 100% {\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  25% {\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  50% {\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  75% {\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n}\n\n.LoginForm {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n}\n\n/* Body styles */\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: linear-gradient(to bottom right, #7bbd86, #16523c);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\nh4 {\n  font-size: 3rem;\n}\n\n/* Inputbox styles */\n.inputbox {\n  position: relative;\n  margin: 30px 0;\n  min-width: 30vh;\n  max-width: 40vh;\n  border-bottom: 2px solid #fff;\n  &:focus-within {\n    border-bottom-color: gold !important; /* Change border color on focus */\n  }\n\n  label {\n    position: absolute;\n    top: 50%;\n    left: 5px;\n    transform: translateY(-40%);\n    color: #fff;\n    font-size: 1.25rem;\n    pointer-events: none;\n    transition: all 0.3s ease-in-out;\n  }\n\n  input {\n    width: 100%;\n    height: 60px;\n    background: transparent;\n    border: none;\n    outline: none;\n    font-size: 1.25rem;\n    font-weight: bolder;\n    padding: 0 35px 0 5px;\n    color: #fff;\n\n    &:focus ~ label,\n    &:valid ~ label {\n      color: lightgray;\n      top: -5px;\n    }\n  }\n}\n\n/* Rest of the styles */\n\n.boxc {\n  min-width: 30vh;\n  max-width: 50vh;\n  position: relative;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 3rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  animation: shine 5s infinite linear;\n\n  .title {\n    width: 100%;\n    color: #fff;\n    padding: 10px;\n    text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);\n  }\n\n  h1 {\n    font-size: 3rem;\n    color: #fff;\n    text-align: center;\n  }\n\n  .errorSign {\n    display: block;\n  }\n\n  .lost {\n    margin: 35px 0;\n    font-size: 0.85rem;\n    color: #fff;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    label {\n      font-size: 1rem;\n      display: flex;\n      align-items: center;\n      padding: .1rem;\n      cursor: pointer;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n              user-select: none;\n      margin-right: 1rem;\n      margin-left: -1.25rem;\n      \n      &:has(input:checked) {\n        color: darkgreen;\n        font-weight: bolder;\n        animation: labelCheckedAnimation 0.5s ease forwards;\n      }\n\n\n      input {\n        margin-right: 5px;\n        cursor: pointer;\n      }\n\n      \n    }\n\n    .forgotPassword {\n      font-size: 1rem;\n      color: #fff;\n      text-decoration: none;\n      font-weight: 600;\n      transition: color 0.3s ease;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n              user-select: none;\n      &:hover {\n        text-decoration: underline;\n        color: #ccc;\n        cursor: pointer;\n      }\n    }\n  }\n\n  \n  .register {\n    font-size: 0.9rem;\n    color: #fff;\n    text-align: center;\n    margin: 25px 0 10px;\n\n    &:hover {\n      text-decoration: underline;\n      cursor: pointer;\n    }\n\n    p {\n      .forgotPassword {\n        text-decoration: none;\n        color: #fff;\n        font-weight: 600;\n\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n\n  button {\n    color: white;\n    width: 100%;\n    height: 40px;\n    border-radius: 40px;\n    background-color: rgb(87, 163, 115);\n    border: none;\n    outline: none;\n    cursor: pointer;\n    font-size: 1.25rem;\n    font-weight: 600;\n    transition: all 0.4s ease;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    &:hover {\n      background-color: rgba(255, 255, 255, 0.5);\n    }\n  }\n\n  .showPasswordIcon {\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    font-size: 1.5rem;\n    transform: translateY(-50%);\n    cursor: pointer;\n    color: #ccc;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"LoginForm": `aOctDy4BV7cS3A3FgdnO`,
	"inputbox": `slJPwttFXbjZj3iK5tpD`,
	"boxc": `mdJKUsO6IVB_KHxsorxg`,
	"shine": `XRJ4HljCDLmOJmSxDLVQ`,
	"title": `duhWcPoiFKzflZYTW6qA`,
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: none;
  width: 100%;
  padding: 0 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input {
  border: 2px solid rgb(58, 163, 49);
}

.y9nMRtKLACz8uMKjMe86 {
  padding: 10px;
}

.VhefOyE6KqL2INmTvax_ {
  display: flex;
  align-items: center;
  list-style: none;
}

.Vi729QB0vR8fTZ0UgVAQ {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  text-decoration: none;
}
.Vi729QB0vR8fTZ0UgVAQ .XmTS1C8VIV547MbqjHFC {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
}
.Vi729QB0vR8fTZ0UgVAQ .XmTS1C8VIV547MbqjHFC .J9UnnftTHXUkwLRjgCwj {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
}
.Vi729QB0vR8fTZ0UgVAQ .XmTS1C8VIV547MbqjHFC .IVj3kljTpbWeopBe4tgh {
  width: 32px;
  height: 32px;
}

@media (max-width: 768px) {
  .SLZXaJInmBusSKJAiC7A {
    flex-direction: column;
  }
  .SLZXaJInmBusSKJAiC7A .y9nMRtKLACz8uMKjMe86,
  .SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ {
    width: 100%;
  }
  .Vi729QB0vR8fTZ0UgVAQ .XmTS1C8VIV547MbqjHFC .J9UnnftTHXUkwLRjgCwj {
    width: 1.5rem;
    height: 1.5rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/NavBar/NavBar.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;EACA,wCAAA;AACJ;;AAEA;EACI,kCAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EACA,qBAAA;AACJ;AACI;EACI,aAAA;EACA,mBAAA;EACA,0CAAA;AACR;AACQ;EACI,WAAA;EACA,YAAA;EACA,oBAAA;AACZ;AAEQ;EACI,WAAA;EACA,YAAA;AAAZ;;AAKA;EACI;IACI,sBAAA;EAFN;EAIM;;IAEI,WAAA;EAFV;EAQU;IACI,aAAA;IACA,cAAA;EANd;AACF","sourcesContent":[".Nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: none;\n    width: 100%;\n    padding: 0 1rem;\n    background-color: #ffffff;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\ninput {\n    border: 2px solid rgb(58, 163, 49);\n}\n\n.searchBar {\n    padding: 10px;\n}\n\n.ul {\n    display: flex;\n    align-items: center;\n    list-style: none;\n}\n\n.navItem {\n    display: flex;\n    align-items: center;\n    padding: 0 1rem;\n    text-decoration: none;\n\n    .listItem {\n        display: flex;\n        align-items: center;\n        background-color: rgba(255, 255, 255, 0.5);\n\n        .btnLogo {\n            width: 2rem; \n            height: 2rem; \n            margin-right: 0.5rem;\n        }\n\n        .logSignup {\n            width: 32px;\n            height: 32px;\n        }\n    }\n}\n\n@media (max-width: 768px) {\n    .Nav {\n        flex-direction: column;\n\n        .searchBar,\n        .ul {\n            width: 100%; \n        }\n    }\n\n    .navItem {\n        .listItem {\n            .btnLogo {\n                width: 1.5rem; \n                height: 1.5rem;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Nav": `SLZXaJInmBusSKJAiC7A`,
	"searchBar": `y9nMRtKLACz8uMKjMe86`,
	"ul": `VhefOyE6KqL2INmTvax_`,
	"navItem": `Vi729QB0vR8fTZ0UgVAQ`,
	"listItem": `XmTS1C8VIV547MbqjHFC`,
	"btnLogo": `J9UnnftTHXUkwLRjgCwj`,
	"logSignup": `IVj3kljTpbWeopBe4tgh`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NewPostForm/NewPostForm.module.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NewPostForm/NewPostForm.module.scss ***!
  \***************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.wekziSaaqwOLRFMJXHQ2 {
  width: 90%;
  background-color: #7bbd86;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  margin: 0 auto;
  padding: 2rem;
}
.wekziSaaqwOLRFMJXHQ2 .q83xVIpdN9plzwBHguVi {
  margin: 0 0 1rem;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .oIfat_Ocs4SldBNG2mHX {
  height: 2rem;
  border-radius: 0;
  border: 0.01rem solid black;
  width: 80%;
  margin: 0.1rem 0;
  font-size: 1rem;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .oIfat_Ocs4SldBNG2mHX:focus {
  outline: 0.1rem solid green;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .DRQjw5t79oTsny9CdCMF {
  height: 6rem;
  border-radius: 0;
  width: 80%;
  margin: 0;
  padding: 0.5rem 1rem;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .DRQjw5t79oTsny9CdCMF:focus {
  outline: 0.1rem solid green;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .cgJh9_cI3zRlHT3nHVWG {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .cgJh9_cI3zRlHT3nHVWG .GdWlXhkOK38PU0rT8j_A {
  font-size: 1.5rem;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .jTc77r50RjSsdPdWZC0t {
  margin-top: 1rem;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .jTc77r50RjSsdPdWZC0t:hover {
  color: black;
}`, "",{"version":3,"sources":["webpack://./src/components/NewPostForm/NewPostForm.module.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,yBAAA;EACA,0BAAA;EACA,qBAAA;EACA,cAAA;EACA,aAAA;AACJ;AAAI;EACI,gBAAA;AAER;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAER;AADQ;EACI,YAAA;EACA,gBAAA;EACA,2BAAA;EACA,UAAA;EACA,gBAAA;EACA,eAAA;AAGZ;AAFY;EACI,2BAAA;AAIhB;AADQ;EACI,YAAA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;EACA,oBAAA;AAGZ;AAFY;EACI,2BAAA;AAIhB;AADQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAGZ;AAFY;EACI,iBAAA;AAIhB;AADQ;EACI,gBAAA;AAGZ;AAFY;EACI,YAAA;AAIhB","sourcesContent":[".NewPostForm {\n    width: 90%;\n    background-color: #7bbd86;\n    border: .1rem solid black;\n    border-radius: .5rem;\n    margin: 0 auto;\n    padding: 2rem;\n    .heading {\n        margin: 0 0 1rem;\n    }\n    .Form {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        .textInput {\n            height: 2rem;\n            border-radius: 0;\n            border: .01rem solid black;\n            width: 80%;\n            margin: .1rem 0;\n            font-size: 1rem;\n            &:focus {\n                outline: .1rem solid green;\n            }\n        }\n        .textAreaInput {\n            height: 6rem;\n            border-radius: 0;\n            width: 80%;\n            margin: 0;\n            padding: .5rem 1rem;\n            &:focus {\n                outline: .1rem solid green;\n            }\n        }\n        .checkboxContainer {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            .label {\n                font-size: 1.5rem;\n            }\n        }\n        .button {\n            margin-top: 1rem;\n            &:hover {\n                color: black;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"NewPostForm": `wekziSaaqwOLRFMJXHQ2`,
	"heading": `q83xVIpdN9plzwBHguVi`,
	"Form": `aJu0J6aP6lo4xM7cgqBJ`,
	"textInput": `oIfat_Ocs4SldBNG2mHX`,
	"textAreaInput": `DRQjw5t79oTsny9CdCMF`,
	"checkboxContainer": `cgJh9_cI3zRlHT3nHVWG`,
	"label": `GdWlXhkOK38PU0rT8j_A`,
	"button": `jTc77r50RjSsdPdWZC0t`
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
  margin: 1rem 0;
  padding: 2rem;
  min-height: 35vh;
  border: 0.1rem solid rgba(51, 86, 51, 0.3);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: black;
  box-shadow: 0 0 0.3rem var(--text-green);
}
.kQzjKpTiHJLJ5WNNtTAD .Ejt48lsnoA4ZbmXQ9mEH {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 30%;
}
.kQzjKpTiHJLJ5WNNtTAD .Ejt48lsnoA4ZbmXQ9mEH .GNEIaR8qK7NBA02JzXtR {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.kQzjKpTiHJLJ5WNNtTAD .TFpNeZbQzatEa_RWFlAg {
  border: 1px solid grey;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 40%;
  font-size: 1.2rem;
  background-color: #f1f1f1;
}
.kQzjKpTiHJLJ5WNNtTAD .gIEF2c3lJWXfotyd8LAW {
  width: 5rem;
}
.kQzjKpTiHJLJ5WNNtTAD .Tv1PiRERxjOLRorlaY3P {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.kQzjKpTiHJLJ5WNNtTAD .Tv1PiRERxjOLRorlaY3P .KKxm2e5dQLBmqHKANXwO {
  width: 5rem;
  margin: 1rem;
}
.kQzjKpTiHJLJ5WNNtTAD .Tv1PiRERxjOLRorlaY3P .KKxm2e5dQLBmqHKANXwO:hover {
  background-color: green;
}`, "",{"version":3,"sources":["webpack://./src/components/Post/Post.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,cAAA;EACA,aAAA;EACA,gBAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,YAAA;EACA,wCAAA;AACJ;AAAI;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,UAAA;AAER;AADQ;EACI,eAAA;EACA,mBAAA;AAGZ;AAAI;EACI,sBAAA;EACA,qBAAA;EACA,eAAA;EACA,UAAA;EACA,iBAAA;EACA,yBAAA;AAER;AAAI;EACI,WAAA;AAER;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;AAER;AADQ;EACI,WAAA;EACA,YAAA;AAGZ;AAFY;EACI,uBAAA;AAIhB","sourcesContent":[".Post {\n    width: 100%;\n    margin: 1rem 0;\n    padding: 2rem;\n    min-height: 35vh;\n    border: .1rem solid rgb(51, 86, 51, 0.3);\n    border-radius: 20px;\n    display: flex;\n    justify-content: space-between;\n    background-color: white;\n    color: black;\n    box-shadow: 0 0 .3rem var(--text-green);\n    .TitleImgContainer {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        width: 30%;\n        .projectTitle {\n            font-size: 2rem;\n            margin-bottom: 2rem;\n        }\n    }\n    .projectDescription {\n        border: 1px solid grey;\n        border-radius: .5rem;\n        padding: .5rem;\n        width: 40%;\n        font-size: 1.2rem;\n        background-color: #f1f1f1;\n    }\n    .LikeBtn {\n        width: 5rem;\n    }\n    .btnContainer {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        .button {\n            width: 5rem;\n            margin: 1rem;\n            &:hover {\n                background-color: green;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Post": `kQzjKpTiHJLJ5WNNtTAD`,
	"TitleImgContainer": `Ejt48lsnoA4ZbmXQ9mEH`,
	"projectTitle": `GNEIaR8qK7NBA02JzXtR`,
	"projectDescription": `TFpNeZbQzatEa_RWFlAg`,
	"LikeBtn": `gIEF2c3lJWXfotyd8LAW`,
	"btnContainer": `Tv1PiRERxjOLRorlaY3P`,
	"button": `KKxm2e5dQLBmqHKANXwO`
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
___CSS_LOADER_EXPORT___.push([module.id, `.kzarDYEms6C4W3RidlsQ {
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 2rem;
  margin: 0 auto;
}

.xh5wRMlVK8Fl6xr_VBPV {
  margin: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/components/PostList/PostList.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,UAAA;EACA,sBAAA;EACA,aAAA;EACA,cAAA;AACJ;;AAEA;EACI,YAAA;AACJ","sourcesContent":[".postList {\n    display: flex;\n    width: 90%;\n    flex-direction: column;\n    padding: 2rem;\n    margin: 0 auto;\n}\n\n.emptyState {\n    margin: 1rem;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"postList": `kzarDYEms6C4W3RidlsQ`,
	"emptyState": `xh5wRMlVK8Fl6xr_VBPV`
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
  height: 10rem;
  width: 10rem;
  border-radius: 40%;
  overflow: hidden;
}
.xsUAsrpL8C1WDeULMZqQ .g6ofyX0Nm0_6YhkDlr9M {
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/components/ProfileImage/ProfileImage.module.scss"],"names":[],"mappings":"AAAA;EACI,iCAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AACJ;AAAI;EACI,WAAA;AAER","sourcesContent":[".imgContainer {\n    border: 3px solid var(--bg-color);\n    height: 10rem;\n    width: 10rem;\n    border-radius: 40%;\n    overflow: hidden;\n    .ProfileImage {\n        width: 100%;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"imgContainer": `xsUAsrpL8C1WDeULMZqQ`,
	"ProfileImage": `g6ofyX0Nm0_6YhkDlr9M`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ResetPassword/ResetPassword.module.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ResetPassword/ResetPassword.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes WBWlcBCjwwKL4hZmRqIS {
  0%, 100% {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  25% {
    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
.YgECdOP6ynMaHqn_K8cT {
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border-bottom: 2px solid #ccc;
  box-shadow: none;
  min-width: 30vh;
  max-width: 70vh;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 2rem 3rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  user-select: none;
  overflow: hidden;
  animation: WBWlcBCjwwKL4hZmRqIS 5s infinite linear;
}
.YgECdOP6ynMaHqn_K8cT h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Inter Tight";
  color: white;
}
.YgECdOP6ynMaHqn_K8cT .SpwWq6spR4t_4XdWlyRG {
  margin-bottom: 20px;
}
.YgECdOP6ynMaHqn_K8cT .SpwWq6spR4t_4XdWlyRG label {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: white;
}
.YgECdOP6ynMaHqn_K8cT .SpwWq6spR4t_4XdWlyRG input {
  min-width: 30vw;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0;
  color: white;
  transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */
  width: 30vh;
  font-weight: bolder;
  padding: 0;
}
.YgECdOP6ynMaHqn_K8cT .SpwWq6spR4t_4XdWlyRG input:focus {
  border-bottom-color: gold; /* Change border-bottom color on focus */
}
.YgECdOP6ynMaHqn_K8cT .x8jPB_4eVclrHccPXSI_ {
  color: #ff0000;
  font-size: 1rem;
  margin-top: 3px;
  margin-left: 5px;
}
.YgECdOP6ynMaHqn_K8cT .MVTgnJEz0qLPUgZcJaVM {
  color: #00cc00;
  font-size: 1rem;
  margin-top: 5px;
}
.YgECdOP6ynMaHqn_K8cT .fxZR2_j5SbykUaJYKkyH {
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.4s ease;
  margin-bottom: 1rem;
}
.YgECdOP6ynMaHqn_K8cT .fxZR2_j5SbykUaJYKkyH:hover {
  background-color: rgba(255, 255, 255, 0.5);
}`, "",{"version":3,"sources":["webpack://./src/components/ResetPassword/ResetPassword.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,iFAAA;EACF;EAEA;IACE,qFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,uFAAA;EAFF;AACF;AAMA;EACI,iBAAA;EACA,kBAAA;EACA,6BAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,0CAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,iBAAA;EACA,gBAAA;EACA,kDAAA;AAJJ;AAMI;EACE,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,YAAA;AAJN;AAOI;EACE,mBAAA;AALN;AAOM;EACE,iBAAA;EACA,kBAAA;EACA,YAAA;AALR;AAQM;EACE,eAAA;EACA,uBAAA;EACA,YAAA;EACA,8BAAA;EACA,iBAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;EACA,yCAAA,EAAA,2CAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;AANR;AASM;EACE,yBAAA,EAAA,wCAAA;AAPR;AAWI;EACE,cAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AATN;AAYI;EACE,cAAA;EACA,eAAA;EACA,eAAA;AAVN;AAaI;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;AAXN;AAaM;EACE,0CAAA;AAXR","sourcesContent":["@keyframes shine {\n  0%, 100% {\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  25% {\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  50% {\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  75% {\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n}\n\n.container {\n    margin-left: auto;\n    margin-right: auto;\n    background-color: transparent;\n    border-bottom: 2px solid #ccc;\n    box-shadow: none;\n    min-width: 30vh;\n    max-width: 70vh;\n    border: 2px solid rgba(255, 255, 255, 0.5);\n    border-radius: 20px;\n    padding: 2rem 3rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    user-select: none;\n    overflow: hidden;\n    animation: shine 5s infinite linear;\n  \n    h1 {\n      font-size: 2rem;\n      text-align: center;\n      margin-bottom: 20px;\n      font-family: \"Inter Tight\";\n      color: white;\n    }\n  \n    .formGroup {\n      margin-bottom: 20px;\n  \n      label {\n        font-size: 1.2rem;\n        margin-bottom: 5px;\n        color: white;\n      }\n  \n      input {\n        min-width: 30vw;\n        background: transparent;\n        border: none;\n        border-bottom: 1px solid white;\n        font-size: 1.2rem;\n        padding: 1rem;\n        border-radius: 0;\n        color: white;\n        transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */\n        width: 30vh;\n        font-weight: bolder;\n        padding: 0;\n      }\n  \n      input:focus {\n        border-bottom-color: gold; /* Change border-bottom color on focus */\n      }\n    }\n  \n    .error {\n      color: #ff0000;\n      font-size: 1rem;\n      margin-top: 3px;\n      margin-left: 5px;\n    }\n  \n    .success {\n      color: #00cc00;\n      font-size: 1rem;\n      margin-top: 5px;\n    }\n  \n    .button {\n      color: white;\n      width: 100%;\n      height: 40px;\n      border-radius: 40px;\n      background-color: rgb(87, 163, 115);\n      border: none;\n      outline: none;\n      cursor: pointer;\n      font-size: 1.25rem;\n      font-weight: 600;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      text-decoration: none;\n      transition: all 0.4s ease;\n      margin-bottom: 1rem;\n    \n      &:hover {\n        background-color: rgba(255, 255, 255, 0.5);\n      }\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `YgECdOP6ynMaHqn_K8cT`,
	"shine": `WBWlcBCjwwKL4hZmRqIS`,
	"formGroup": `SpwWq6spR4t_4XdWlyRG`,
	"error": `x8jPB_4eVclrHccPXSI_`,
	"success": `MVTgnJEz0qLPUgZcJaVM`,
	"button": `fxZR2_j5SbykUaJYKkyH`
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
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes KiN27HiRvEoQXCiZZer1 {
  0%, 100% {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  25% {
    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
.O3kJQXyeVBVPoVbc0TQA {
  min-width: 30vh;
  max-width: 43.3vh;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  animation: KiN27HiRvEoQXCiZZer1 5s infinite linear;
}
.O3kJQXyeVBVPoVbc0TQA h1 {
  font-size: 3rem;
  color: #fff;
  text-align: center;
  padding-top: 0.64rem;
}

.G5WQETTTkTlRpPef5KUY {
  position: relative;
  margin: 30px 0;
  border-bottom: 2px solid #fff;
  position: relative;
  margin: 30px 0;
  min-width: 30vh;
  width: 30vh;
  border-bottom: 2px solid #fff;
}
.G5WQETTTkTlRpPef5KUY:focus-within {
  border-bottom-color: gold !important;
}

.G5WQETTTkTlRpPef5KUY label {
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  color: #fff;
  font-size: 1.25rem;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.G5WQETTTkTlRpPef5KUY select {
  width: 100%;
  height: 80px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
  color: #fff;
}

.G5WQETTTkTlRpPef5KUY select option {
  font-size: 1.25rem;
  background-color: #081C15;
  border-radius: 2px;
  color: #fff;
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
  font-size: 1.25rem;
  color: #fff;
  font-weight: bolder;
  padding: 0;
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
  font-size: 1.5rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #ccc;
}`, "",{"version":3,"sources":["webpack://./src/components/SignUpForm/SignUpForm.module.scss"],"names":[],"mappings":"AAEA;EACE;IACE,iFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,qFAAA;EAFF;EAKA;IACE,uFAAA;EAHF;AACF;AAOA;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kDAAA;AALF;AAOE;EACE,eAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;AALJ;;AASA;EACE,kBAAA;EACA,cAAA;EACA,6BAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,WAAA;EACA,6BAAA;AANF;AAQE;EACE,oCAAA;AANJ;;AAUA;EACE,kBAAA;EACA,QAAA;EACA,2BAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,gCAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AAPV;;AAUA;EACI,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;AAPJ;;AAUE;EACE,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,WAAA;AAPJ;;AAUE;;EAEE,gBAAA;EACA,SAAA;AAPJ;;AAUA;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;AAPF;;AAUA;EACE,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;AAPF;;AAUA;EACE,WAAA;EACA,qBAAA;EACA,gBAAA;AAPF;;AAUA;EACI,0BAAA;EACA,eAAA;AAPJ;;AAUA;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;AAPF;;AAUA;EACE,0CAAA;AAPF;;AAUA;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;AAPF;;AAUA;EACE,eAAA;AAPF;;AAUA;EACE,YAAA;AAPF;;AAUA;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;AAPF;;AAUA;EACE,qBAAA;EACA,WAAA;EACA,gBAAA;AAPF;;AAUA;EACE,0BAAA;AAPF;;AAUA;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,iBAAA;EACA,2BAAA;EACA,eAAA;EACA,WAAA;AAPF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');\n\n@keyframes shine {\n  0%, 100% {\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  25% {\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  50% {\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  75% {\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n}\n\n.boxc {\n  min-width: 30vh;\n  max-width: 43.3vh;\n  position: relative;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 3rem;\n  margin-left: auto;\n  margin-right: auto;\n  overflow: hidden; \n  animation: shine 5s infinite linear;\n\n  h1 {\n    font-size: 3rem; \n    color: #fff;\n    text-align: center;\n    padding-top: .64rem;\n  }\n}\n\n.inputbox {\n  position: relative;\n  margin: 30px 0;\n  border-bottom: 2px solid #fff;\n  position: relative;\n  margin: 30px 0;\n  min-width: 30vh;\n  width: 30vh;\n  border-bottom: 2px solid #fff;\n  \n  &:focus-within {\n    border-bottom-color: gold !important; \n  }\n}\n\n.inputbox label {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-40%);\n  color: #fff;\n  font-size: 1.25rem; \n  pointer-events: none;\n  transition: all 0.3s ease-in-out;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.inputbox select {\n    width: 100%;\n    height: 80px;\n    background: transparent;\n    border: none;\n    outline: none;\n    font-size: 1.25rem;\n    color: #fff;\n  }\n  \n  .inputbox select option {\n    font-size: 1.25rem;\n    background-color: #081C15; \n    border-radius: 2px;\n    color: #fff; \n  }\n\n  .inputbox input:focus ~ label,\n  .inputbox input:valid ~ label {\n    color: lightgray;\n    top: -5px;\n  }\n  \n.inputbox input {\n  width: 100%;\n  height: 60px;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 1.25rem;\n  color: #fff;\n  font-weight: bolder;\n  padding: 0;\n}\n\n.login {\n  margin-top: 20px; \n  font-size: 0.85rem;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n}\n\n.login p a {\n  color: #fff;\n  text-decoration: none;\n  font-weight: 600;\n}\n\n.login p:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\nbutton {\n  color: white;\n  width: 100%;\n  height: 40px;\n  border-radius: 40px;\n  background-color: rgb(87, 163, 115);\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 1.25rem;\n  font-weight: 600;\n  transition: all 0.4s ease;\n}\n\nbutton:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.inputbox select {\n  width: 100%;\n  height: 60px;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 1.25rem;\n  color: #fff;\n}\n\nselect:hover {\n  cursor: pointer;\n}\n\noption {\n  color: black;\n}\n\n.register {\n  font-size: 1.25rem;\n  color: #fff;\n  text-align: center;\n}\n\n.register p a {\n  text-decoration: none;\n  color: #fff;\n  font-weight: 600;\n}\n\n.register p a:hover {\n  text-decoration: underline;\n}\n\n.showPasswordIcon {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  font-size: 1.5rem;\n  transform: translateY(-50%);\n  cursor: pointer;\n  color: #ccc;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"boxc": `O3kJQXyeVBVPoVbc0TQA`,
	"shine": `KiN27HiRvEoQXCiZZer1`,
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
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #7bbd86, #16523c);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}`, "",{"version":3,"sources":["webpack://./src/index.module.scss"],"names":[],"mappings":"AAEA;EACI,gCAAA;EACA,8BAAA;EACA,yCAAA;EACA,4BAAA;EACA,sCAAA;EACA,8BAAA;EACA,6BAAA;AACJ;;AAEA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,uDAAA;AACJ;;AAEA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,8DAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Asap+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Galdeano&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Buginese&family=Sulphur+Point:wght@300;400;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');\n:root {\n    --heading-color: rgb(78, 91, 49);\n    --bg-color: rgb(244, 246, 240);\n    --btn-animation: rgba(219, 171, 171, 0.3);\n    --input-color: rgb(87, 8, 8);\n    --nav-border: rgba(219, 171, 171, 0.3);\n    --text-red: rgb(237, 100, 100);\n    --text-green: rgb(51, 86, 51);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: \"Inter Tight\", Verdana, Tahoma, sans-serif;\n}\n\nbody {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    background: linear-gradient(to bottom right, #7bbd86, #16523c);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n  }"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `.luBJirBC3AbIwQNsEypk {
  width: 95%;
  height: 100%;
  background-color: #f1f1f1;
  margin: 0 auto;
  padding: 1rem 0;
}

.CgjxyfEdobTkp_s1g1uU {
  background-color: white;
  padding: 20px;
  border: none;
}

.dEySatDVVilAzS3bqI9Z {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid rgb(58, 163, 49);
  border-radius: 5px;
  resize: none;
}

button {
  padding: 10px;
  background-color: rgb(250, 250, 250);
  color: rgb(88, 85, 85);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: auto;
  margin: 0 auto;
}

button:hover {
  background-color: #6acf66;
}

.XPxNjc5GISdopuQ98rk6 {
  margin-top: 20px;
}

.vCHNX8UaVIhE3i6IOusO {
  background-color: white;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

.vCHNX8UaVIhE3i6IOusO h3, .vCHNX8UaVIhE3i6IOusO p {
  color: black;
}

.vCHNX8UaVIhE3i6IOusO img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

._NMlzyl2SLslAiokZ3aS {
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}

.HPoDdNDxi0HMP2hrM9Ts {
  color: black;
  cursor: pointer;
}

.HPoDdNDxi0HMP2hrM9Ts:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .dEySatDVVilAzS3bqI9Z {
    flex-direction: column;
  }
  button {
    width: 100%;
    margin-left: 0;
  }
  .CgjxyfEdobTkp_s1g1uU, .vCHNX8UaVIhE3i6IOusO, ._NMlzyl2SLslAiokZ3aS {
    padding: 10px;
    margin-bottom: 10px;
  }
  .vCHNX8UaVIhE3i6IOusO h3, .vCHNX8UaVIhE3i6IOusO p, .HPoDdNDxi0HMP2hrM9Ts {
    font-size: smaller;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/HomePage/HomePage.module.scss"],"names":[],"mappings":"AACA;EACI,UAAA;EACA,YAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;AAAJ;;AAGA;EACI,uBAAA;EACA,aAAA;EACA,YAAA;AAAJ;;AAGA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AAAJ;;AAGA;EACI,WAAA;EACA,aAAA;EACA,mBAAA;EACA,kCAAA;EACA,kBAAA;EACA,YAAA;AAAJ;;AAGA;EACI,aAAA;EACA,oCAAA;EACA,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,sCAAA;EACA,WAAA;EACA,cAAA;AAAJ;;AAGA;EACI,yBAAA;AAAJ;;AAGA;EACI,gBAAA;AAAJ;;AAGA;EACI,uBAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;AAAJ;;AAGA;EACI,YAAA;AAAJ;;AAGA;EACI,eAAA;EACA,YAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,uBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;AAAJ;;AAGA;EACI,YAAA;EACA,eAAA;AAAJ;;AAGA;EACI,0BAAA;AAAJ;;AAIA;EACI;IACI,sBAAA;EADN;EAIE;IACI,WAAA;IACA,cAAA;EAFN;EAME;IACI,aAAA;IACA,mBAAA;EAJN;EAQE;IACI,kBAAA;EANN;AACF","sourcesContent":["\n.HomePage {\n    width: 95%;\n    height: 100%;\n    background-color: #f1f1f1;\n    margin: 0 auto;\n    padding: 1rem 0;\n}\n\n.homePage {\n    background-color: white;\n    padding: 20px;\n    border: none;\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 2rem;\n}\n\ntextarea {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 10px;\n    border: 2px solid rgb(58, 163, 49);\n    border-radius: 5px;\n    resize: none;\n}\n\nbutton {\n    padding: 10px;\n    background-color: rgb(250, 250, 250);\n    color: rgb(88, 85, 85);\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n    width: auto; \n    margin: 0 auto; \n}\n\nbutton:hover {\n    background-color: #6acf66;\n}\n\n.postList {\n    margin-top: 20px;\n}\n\n.post {\n    background-color: white;\n    border: 2px solid rgb(0, 0, 0);\n    border-radius: 10px;\n    padding: 20px;\n    margin-bottom: 20px;\n}\n\n.post h3, .post p {\n    color: black;\n}\n\n.post img {\n    max-width: 100%;\n    height: auto;\n    border-radius: 5px;\n}\n\n.userList {\n    background-color: white;\n    border: 2px solid black;\n    border-radius: 10px;\n    padding: 20px;\n    margin-top: 20px;\n}\n\n.user {\n    color: black;\n    cursor: pointer;\n}\n\n.user:hover {\n    text-decoration: underline;\n}\n\n\n@media (max-width: 768px) {\n    .form {\n        flex-direction: column;\n    }\n\n    button {\n        width: 100%; \n        margin-left: 0;\n    }\n\n   \n    .homePage, .post, .userList {\n        padding: 10px;\n        margin-bottom: 10px;\n    }\n\n   \n    .post h3, .post p, .user {\n        font-size: smaller; \n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"HomePage": `luBJirBC3AbIwQNsEypk`,
	"homePage": `CgjxyfEdobTkp_s1g1uU`,
	"form": `dEySatDVVilAzS3bqI9Z`,
	"postList": `XPxNjc5GISdopuQ98rk6`,
	"post": `vCHNX8UaVIhE3i6IOusO`,
	"userList": `_NMlzyl2SLslAiokZ3aS`,
	"user": `HPoDdNDxi0HMP2hrM9Ts`
};
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
  width: 100%;
  height: 100%;
  padding: 2rem 10rem;
  display: flex;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg {
  width: 60%;
  max-height: 50rem;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  max-height: 40rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  border: 0.1rem solid lightgrey;
  box-shadow: 0 0 0.3rem darkgreen;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .syKW9dLz4EwS_wpHk6_0 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
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
  filter: invert(100%);
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
  filter: invert(100%);
  transition: 0.3s ease;
}`, "",{"version":3,"sources":["webpack://./src/pages/ProfilePage/ProfilePage.module.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;AACJ;AAAI;EACI,UAAA;EACA,iBAAA;AAER;AADQ;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;EACA,UAAA;EACA,iBAAA;EACA,uBAAA;EACA,qBAAA;EACA,aAAA;EACA,8BAAA;EACA,gCAAA;AAGZ;AAFY;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAIhB;AAFY;EACI,YAAA;AAIhB;AAFY;EACI,YAAA;EACA,aAAA;EACA,6BAAA;EACA,qBAAA;AAIhB;AAHgB;EACI,2BAAA;EACA,mBAAA;EACA,WAAA;EACA,qBAAA;AAKpB;AAJoB;EACI,oBAAA;EACA,qBAAA;AAMxB;AAHgB;EACI,2BAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,qBAAA;AAKpB;AAJoB;EACI,oBAAA;EACA,qBAAA;AAMxB","sourcesContent":[".ProfilePage {\n    margin: 0 auto;\n    width: 100%;\n    height: 100%;\n    padding: 2rem 10rem;\n    display: flex;\n    .topContainer {\n        width: 60%;\n        max-height: 50rem;\n        .userContainer {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-around;\n            align-items: center;\n            width: 90%;\n            max-height: 40rem;\n            background-color: white;\n            border-radius: .5rem;\n            padding: 2rem;\n            border: .1rem solid lightgrey;\n            box-shadow: 0 0 .3rem darkgreen;\n            .imgContainer {\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                width: 15rem;\n            }\n            .userBio {\n                color: black;\n            }\n            .userLinks {\n                width: 15rem;\n                display: flex;\n                justify-content: space-evenly;\n                margin-bottom: 1.5rem;\n                .ghLogo {\n                    background-color: lightgrey;\n                    border-radius: 100%;\n                    width: 4rem;\n                    transition: .3s ease;\n                    &:hover {\n                        filter: invert(100%);\n                        transition: .3s ease;\n                    }\n                }\n                .portfolioLogo {\n                    background-color: lightgrey;\n                    border-radius: 100%;\n                    width: 4rem;\n                    padding: 1rem;\n                    transition: .3s ease;\n                    &:hover {\n                        filter: invert(100%);\n                        transition: .3s ease;\n                    }\n                }\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ProfilePage": `z1XFB0qbBjHblp8c_F5M`,
	"topContainer": `Fn3Y8z6cyE3sFTgZXhsg`,
	"userContainer": `C3y4TdU4vKMpvL4_wj8H`,
	"imgContainer": `syKW9dLz4EwS_wpHk6_0`,
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

/***/ "./src/components/CustomerSupport/CustomerSupport.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/CustomerSupport/CustomerSupport.module.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./CustomerSupport.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CustomerSupport/CustomerSupport.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Follow/Follow.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Follow/Follow.module.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Follow_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Follow.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Follow/Follow.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Follow_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Follow_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Follow_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Follow_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/LikeBtn/LikeBtn.module.scss":
/*!****************************************************!*\
  !*** ./src/components/LikeBtn/LikeBtn.module.scss ***!
  \****************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./LikeBtn.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LikeBtn/LikeBtn.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/NewPostForm/NewPostForm.module.scss":
/*!************************************************************!*\
  !*** ./src/components/NewPostForm/NewPostForm.module.scss ***!
  \************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NewPostForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NewPostForm/NewPostForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/ResetPassword/ResetPassword.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/ResetPassword/ResetPassword.module.scss ***!
  \****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ResetPassword.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ResetPassword/ResetPassword.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
//# sourceMappingURL=App.af223b423c262d350f9136616ded5987.js.map