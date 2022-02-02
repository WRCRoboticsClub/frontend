"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "@theme-ui/core"
const core_namespaceObject = require("@theme-ui/core");
;// CONCATENATED MODULE: ./src/theme/index.js
/* harmony default export */ const theme = ({
  // example colors with dark mode
  colors: {
    text: "#343D48",
    // body color and primary color
    text_secondary: "#02073E",
    // secondary body color
    heading: "#0F2137",
    // primary heading color
    heading_secondary: "#0F2137",
    // heading color
    background: "#FFFFFF",
    // body background color
    background_secondary: "#F9FBFD",
    // secondary background color
    border_color: "#E5ECF4",
    // border color
    yellow: "#FFA740",
    // border color
    primary: "#57CDE2",
    // primary button and link color
    secondary: "#00008B",
    // secondary color - can be used for hover states
    muted: "#E4E4E4",
    // muted color
    accent: "#609",
    // a contrast color for emphasizing UI
    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
        secondary: "#09c",
        muted: "#111"
      }
    }
  },
  breakpoints: ["480px", "640px", "768px", "1024px", "1220px", "1366px", "1620px"],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: "normal",
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    heading: "-0.5px"
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ["100%", null, null, "780px", "1020px", "1200px", null, "1310px"],
      px: [4, 6]
    },
    header: {
      color: "#02073E",
      fontWeight: "normal",
      py: 3,
      position: "absolute",
      width: "100%"
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    main: {}
  },
  section: {
    keyFeature: {
      pt: [8, null, 9, null, null, 10],
      pb: ["90px", null, 9, null, null, 10, null, "165px"]
    },
    feature: {
      pb: [8, null, 9, null, null, 10, null, "170px"]
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, "170px"]
    },
    coreFeature: {
      pb: [8, null, 9, null, null, 10, null, "170px"],
      overflow: "hidden"
    },
    testimonial: {
      pt: [8, null, 8, "70px", null, 8, null, "145px"],
      pb: ["90px", null, 9, null, null, 10, null, "190px"],
      overflow: "hidden"
    },
    services: {
      pb: ["90px", null, 9, null, null, 10, null, "150px"]
    },
    pricing: {
      pt: [8, null, 9, null, null, 10, null, "180px"],
      pb: ["90px", null, 9, null, null, 10, null, "180px"]
    }
  },
  sectionHeader: {
    width: ["100%", null, "540px"],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: ["-3px", null, -1],
    marginBottom: ["50px", null, "60px", null, null, "65px", null, "80px"],
    mx: "auto",
    title: {
      fontSize: ["24px", null, "28px", null, null, "32px", null, "36px"],
      color: "heading",
      lineHeight: [1.3, null, null, 1.25],
      textAlign: "center",
      fontWeight: "700",
      letterSpacing: "-.5px"
    },
    subTitle: {
      fontSize: [0, "13px", null, "14px"],
      color: "primary",
      textAlign: "center",
      letterSpacing: ["1.5px", null, "2px"],
      textTransform: "uppercase",
      fontWeight: "700",
      mb: 2,
      lineHeight: 1.5
    }
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [4],
      letterSpacing: "-.55px",
      color: "heading"
    },
    heroPrimary: {
      color: "heading",
      fontSize: ["32px", "36px", "42px", "40px", "42px", "52px", "58px", "66px"],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5]
    },
    heroSecondary: {
      fontSize: [2, null, "17px", null, null, "19px", 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: "body",
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: "heading"
    },
    title: {
      // extends the text.heading styles
      variant: "text.heading",
      fontWeight: "bold",
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1
    },
    lead: {
      fontSize: 40,
      fontFamily: "DM Sans",
      fontWeight: "500",
      lineHeight: "60px",
      letterSpacing: "-1.5px",
      color: "#0F2137"
    },
    muted: {
      lineHeight: "26px",
      color: "muted"
    },
    secondary: {
      fontWeight: 500,
      color: "#00A99D",
      lineHeight: "40px"
    }
  },
  links: {
    default: {
      cursor: "pointer"
    },
    bold: {
      fontWeight: "bold"
    },
    nav: {
      display: ["none", null, "inline-block"],
      px: 25,
      fontWeight: "normal"
    },
    blog: {
      display: "block",
      px: 0,
      color: "inherit",
      textDecoration: "none",
      fontSize: "inherit",
      transition: "color 0.25s",
      "&:hover": {
        color: "primary"
      }
    },
    footer: {
      display: "block",
      px: 0,
      color: "inherit",
      textDecoration: "none"
    },
    logo: {
      display: "flex"
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, "none"]
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: "45px",
      fontSize: ["14px", null, null, 2],
      letterSpacings: "-0.15px",
      padding: ["12px 20px", null, "15px 30px"],
      fontFamily: "body",
      cursor: "pointer",
      lineHeight: 1.2,
      transition: "all 0.25s",
      fontWeight: 500,
      "&:focus": {
        outline: 0
      }
    },
    primary: {
      variant: "buttons.defaultBtn",
      color: "white",
      bg: "primary",
      "&:hover": {
        boxShadow: "rgba(233, 76, 84, 0.57) 0px 9px 20px -5px"
      }
    },
    whiteButton: {
      variant: "buttons.defaultBtn",
      color: "heading_secondary",
      bg: "white",
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 12px 24px -10px"
      }
    },
    secondary: {
      variant: "buttons.defaultBtn",
      border: "2px solid",
      borderColor: "primary",
      color: "primary",
      bg: "transparent",
      padding: ["10px 15px", null, "15px 30px"],
      "&:hover": {
        color: "white",
        bg: "primary"
      }
    },
    textButton: {
      variant: "buttons.defaultBtn",
      backgroundColor: "transparent",
      cursor: "pointer",
      color: "white",
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    offer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flex: ["1 1 calc(50% - 16px)", "1 1 20%"],
      minHeight: 130,
      m: 2,
      background: "#FFFFFF",
      border: "1px solid #EDEFF6",
      borderRadius: 5
    },
    featureCard: {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "row",
      p: 3
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold"
    },
    input: {
      borderRadius: 8,
      borderColor: "border_color",
      height: 60,
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none"
      }
    }
  },
  badges: {
    primary: {
      color: "background",
      bg: "#28A5FF",
      borderRadius: 30,
      p: "3px 11px",
      fontSize: 1,
      letterSpacing: "-0.5px"
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px"
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSmoothing: "antialiased",
      // Modal Global Style
      ".modal-video-close-btn": {
        cursor: "pointer"
      },
      ".modal-video-movie-wrap": {
        margin: 6,
        width: "auto"
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "#D9E0E7"
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: "none"
    },
    srOnly: {
      border: "0 !important",
      clip: "rect(1px, 1px, 1px, 1px) !important",
      clipPath: "inset(50%) !important",
      height: "1px !important",
      margin: "-1px !important",
      overflow: "hidden !important",
      padding: "0 !important",
      position: "absolute !important",
      width: "1px !important",
      whiteSpace: "nowrap !important"
    }
  }
});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/seo.js




function SEO({
  description = 'startup product landing page',
  author = 'JSM',
  meta,
  title = 'startup landing title'
}) {
  const metaData = [{
    name: `description`,
    content: description
  }, {
    property: `og:title`,
    content: title
  }, {
    property: `og:description`,
    content: description
  }, {
    property: `og:type`,
    content: `website`
  }, {
    name: `twitter:card`,
    content: `summary`
  }, {
    name: `twitter:creator`,
    content: author
  }, {
    name: `twitter:title`,
    content: title
  }, {
    name: `twitter:description`,
    content: description
  }].concat(meta);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: title
    }), metaData.map(({
      name,
      content
    }, i) => /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: name,
      content: content
    }, i))]
  });
}
SEO.defaultProps = {
  lang: `en`,
  meta: []
};
// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(800);
;// CONCATENATED MODULE: external "react-stickynode"
const external_react_stickynode_namespaceObject = require("react-stickynode");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "@theme-ui/core/jsx-runtime"
var core_jsx_runtime_ = __webpack_require__(355);
;// CONCATENATED MODULE: ./src/components/link.js
const _excluded = (/* unused pure expression or super */ null && (["path", "label", "children"])),
      _excluded2 = ["path", "label", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsxImportSource @theme-ui/core */



function NavLink(_ref) {
  let {
    path,
    label,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return _jsx("h1", {
    children: "NavLink"
  });
}
function Link(_ref2) {
  let {
    path,
    label,
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  return core_jsx_runtime_.jsx(external_theme_ui_.Link, _objectSpread(_objectSpread({}, rest), {}, {
    href: path,
    children: children || label
  }));
}
;// CONCATENATED MODULE: ./src/components/logo.js
const logo_excluded = ["src"];

function logo_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function logo_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { logo_ownKeys(Object(source), true).forEach(function (key) { logo_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { logo_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function logo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function logo_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = logo_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function logo_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsxImportSource @theme-ui/core */



function Logo(_ref) {
  let {
    src
  } = _ref,
      rest = logo_objectWithoutProperties(_ref, logo_excluded);

  return core_jsx_runtime_.jsx(Link, logo_objectSpread(logo_objectSpread({
    path: "/",
    sx: {
      variant: "links.logo",
      display: "flex",
      cursor: "pointer",
      mr: 15
    }
  }, rest), {}, {
    children: core_jsx_runtime_.jsx(external_theme_ui_.Image, {
      src: src,
      alt: "Landing page logo"
    })
  }));
}
;// CONCATENATED MODULE: ./src/assets/Club_logo.png
/* harmony default export */ const Club_logo = ({"src":"/_next/static/media/Club_logo.e4fcdd12.png","height":102,"width":267,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAAAAACLoxGUAAAAJklEQVR42mP48uLb/7///v1jePn42fsPnz5/Ynjz4Onf/////wcANEAW29gF2HEAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(290);
;// CONCATENATED MODULE: ./src/data/header.data.js
/* harmony default export */ const header_data = ([{
  path: "/",
  label: "Home"
}, {
  path: "/achievements",
  label: "Achievements"
}, {
  path: "/events",
  label: "Events"
}, {
  path: "/committee",
  label: "Committee"
}]);
;// CONCATENATED MODULE: ./src/components/header/mobile-drawer.js








const social = [{
  path: "https://www.facebook.com/",
  icon: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaFacebookF, {})
}, {
  path: "https://www.twitter.com",
  icon: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaTwitter, {})
}, {
  path: "/",
  icon: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaGithubAlt, {})
}, {
  path: "/",
  icon: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaDribbble, {})
}];
function MobileDrawer({
  isDrawerOpen,
  setIsDrawerOpen
}) {
  //const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_theme_ui_.Box, {
    sx: styles.handler,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_theme_ui_.Box, {
      sx: styles.burger,
      onClick: () => setIsDrawerOpen(!isDrawerOpen),
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Box, {
        sx: styles.line1
      }), /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Box, {
        sx: styles.line2
      }), /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Box, {
        sx: styles.line3
      })]
    }), isDrawerOpen === true ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_theme_ui_.Box, {
      sx: styles.content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Close, {
        sx: styles.close,
        onClick: () => setIsDrawerOpen(!isDrawerOpen)
      }), /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Box, {
        sx: styles.menu,
        children: header_data.map((menuItem, index) => /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          activeClass: "active",
          href: menuItem.path,
          spy: true,
          smooth: true,
          offset: -70,
          duration: 500,
          children: menuItem.label
        }, index))
      }), /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Box, {
        sx: styles.menuFooter,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Box, {
          sx: styles.social,
          children: social.map((socialItem, i) => /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Box, {
            as: "span",
            sx: styles.social.icon,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: socialItem.path,
              children: socialItem.icon
            })
          }, i))
        })
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx(external_theme_ui_.Box, {})]
  });
}
const drawerAnimation = react_namespaceObject.keyframes`
 0% {  width: 0px; }
 100% {  width: 40%; opacity: 1; }
`;
const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",
    "@media screen and (min-width: 1024px)": {
      display: "none"
    }
  },
  burger: {
    cursor: "pointer"
  },
  line1: {
    width: "26px",
    height: "3px",
    backgroundColor: "#AFA4DB",
    margin: "5px"
  },
  line2: {
    width: "26px",
    height: "3px",
    backgroundColor: "#AFA4DB",
    margin: "5px"
  },
  line3: {
    width: "26px",
    height: "3px",
    backgroundColor: "#AFA4DB",
    margin: "5px"
  },
  drawer: {
    width: "100%",
    height: "100%",
    backgroundColor: "dark",
    position: "fixed",
    zIndex: "1000"
  },
  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0px",
    right: "10px",
    zIndex: "1",
    cursor: "pointer",
    width: "50px",
    height: "50px"
  },
  content: {
    position: "absolute",
    right: "0px",
    top: "0",
    width: "40%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F4F5FF",
    zIndex: "1000",
    animation: `${drawerAnimation} 0.4s ease`
  },
  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    py: "30px",
    a: {
      fontSize: "16px",
      fontWeight: "500",
      color: "text_white",
      py: "20px",
      cursor: "pointer",
      borderBottom: "1px solid #e8e5e5",
      transition: "all 0.25s",
      "&:hover": {
        color: "secondary"
      },
      "&.active": {
        color: "secondary"
      }
    }
  },
  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    py: "30px" // mt: "auto",

  },
  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 20,
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0"
      },
      "&:hover": {
        color: "primary"
      }
    }
  },
  button: {
    color: "white",
    fontSize: "14px",
    fw: "700",
    height: "45px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0"
  }
};
;// CONCATENATED MODULE: ./src/components/header/header.js
/** @jsxImportSource @theme-ui/core */









function Header({
  className,
  isOpen,
  setIsOpen
}) {
  return core_jsx_runtime_.jsx("header", {
    sx: header_styles.header,
    className: className,
    children: (0,core_jsx_runtime_.jsxs)(external_theme_ui_.Container, {
      sx: header_styles.container,
      children: [core_jsx_runtime_.jsx(Logo, {
        src: Club_logo.src
      }), core_jsx_runtime_.jsx(external_theme_ui_.Flex, {
        as: "nav",
        sx: header_styles.nav,
        children: header_data.map((menuItem, index) => core_jsx_runtime_.jsx(next_link["default"], {
          activeClass: "active",
          href: menuItem.path,
          spy: true,
          smooth: true,
          offset: -70,
          duration: 500,
          children: menuItem.label
        }, index))
      }), core_jsx_runtime_.jsx(external_theme_ui_.Button, {
        className: "donate__btn",
        variant: "secondary",
        "aria-label": "Get Started",
        children: "Contact Us"
      }), core_jsx_runtime_.jsx(MobileDrawer, {
        isDrawerOpen: isOpen,
        setIsDrawerOpen: setIsOpen
      })]
    })
  });
}
const positionAnim = react_namespaceObject.keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;
const header_styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0]
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text"
      }
    }
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block"
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "secondary"
      },
      "&.active": {
        color: "secondary"
      }
    }
  }
};
;// CONCATENATED MODULE: ./src/data/footer.data.js
/* harmony default export */ const footer_data = ([{
  path: "/",
  label: "Home"
}, {
  path: "/achievements",
  label: "Achievements"
}, {
  path: "/events",
  label: "Events"
}, {
  path: "/committee",
  label: "Committee"
}]);
;// CONCATENATED MODULE: ./src/components/footer/footer.js
/** @jsxImportSource @theme-ui/core */






function Footer() {
  return core_jsx_runtime_.jsx("footer", {
    sx: footer_styles.footer,
    children: core_jsx_runtime_.jsx(external_theme_ui_.Container, {
      children: (0,core_jsx_runtime_.jsxs)(external_theme_ui_.Box, {
        sx: footer_styles.footer.footerBottomArea,
        children: [core_jsx_runtime_.jsx(Link, {
          path: "/",
          children: core_jsx_runtime_.jsx(external_theme_ui_.Image, {
            src: Club_logo.src,
            alt: "logo"
          })
        }), core_jsx_runtime_.jsx(external_theme_ui_.Box, {
          sx: footer_styles.footer,
          children: core_jsx_runtime_.jsx("nav", {
            children: footer_data.map((item, i) => core_jsx_runtime_.jsx(Link, {
              path: item.path,
              label: item.label,
              sx: footer_styles.footer.link
            }, i))
          })
        }), (0,core_jsx_runtime_.jsxs)(external_theme_ui_.Text, {
          sx: footer_styles.footer.copyright,
          children: ["Copyright by ", new Date().getFullYear()]
        })]
      })
    })
  });
}
const footer_styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column"
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
      }
    },
    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary"
      }
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%"
    }
  }
};
;// CONCATENATED MODULE: ./src/components/layout.js
/** @jsxImportSource @theme-ui/core */







function Layout({
  children
}) {
  const {
    0: isSticky,
    1: setIsSticky
  } = (0,external_react_.useState)(false);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);

  const handleStateChange = status => {
    if (status.status === (external_react_stickynode_default()).STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === (external_react_stickynode_default()).STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (0,core_jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [core_jsx_runtime_.jsx((external_react_stickynode_default()), {
      innerZ: 1001,
      top: 0,
      onStateChange: handleStateChange,
      children: core_jsx_runtime_.jsx(Header, {
        className: `${isSticky ? "sticky" : "unSticky"}`,
        isOpen: isOpen,
        setIsOpen: setIsOpen
      })
    }), core_jsx_runtime_.jsx("main", {
      id: "content",
      sx: {
        variant: "layout.main"
      } // style={
      //   isOpen ? { background: "rgba(255, 0, 0, 0.25)", zIndex: "999" } : {}
      // }
      ,
      children: children
    }), core_jsx_runtime_.jsx(Footer, {})]
  });
}
;// CONCATENATED MODULE: ./src/pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(core_namespaceObject.ThemeProvider, {
    theme: theme,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(SEO, {
        title: "Robotics Club,WRC"
      }), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 355:
/***/ ((module) => {

module.exports = require("@theme-ui/core/jsx-runtime");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 800:
/***/ ((module) => {

module.exports = require("theme-ui");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664], () => (__webpack_exec__(646)));
module.exports = __webpack_exports__;

})();