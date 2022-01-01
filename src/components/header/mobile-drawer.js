import React, { useState } from "react";
import { Box, Close } from "theme-ui";
import Link from "next/link";
import { keyframes } from "@emotion/react";
import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
} from "react-icons/fa";
import menuItems from "./header.data";

const social = [
  {
    path: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    path: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    path: "/",
    icon: <FaGithubAlt />,
  },
  {
    path: "/",
    icon: <FaDribbble />,
  },
];

export default function MobileDrawer({isDrawerOpen,setIsDrawerOpen}) {
  //const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Box sx={styles.handler}>
      <Box sx={styles.burger} onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        <Box sx={styles.line1}></Box>
        <Box sx={styles.line2}></Box>
        <Box sx={styles.line3}></Box>
      </Box>
      {isDrawerOpen === true ? (
        <Box sx={styles.content}>
          <Close
            sx={styles.close}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          />
          <Box sx={styles.menu}>
            {menuItems.map((menuItem, index) => (
              <Link
                activeClass="active"
                href={menuItem.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={index}
              >
                {menuItem.label}
              </Link>
            ))}
          </Box>
          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map((socialItem, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Link href={socialItem.path}>{socialItem.icon}</Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}

const drawerAnimation = keyframes`
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
      display: "none",
    },
  },
  burger: {
    cursor: "pointer",
  },
  line1: {
    width: "26px",
    height: "3px",
    backgroundColor: "#AFA4DB",
    margin: "5px",
  },
  line2: {
    width: "26px",
    height: "3px",
    backgroundColor: "#AFA4DB",
    margin: "5px",
  },
  line3: {
    width: "26px",
    height: "3px",
    backgroundColor: "#AFA4DB",
    margin: "5px",
  },
  drawer: {
    width: "100%",
    height: "100%",
    backgroundColor: "dark",
    position: "fixed",
    zIndex: "1000",
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
    height: "50px",
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
    animation: `${drawerAnimation} 0.4s ease`,
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
        color: "secondary",
      },
      "&.active": {
        color: "secondary",
      },
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    py: "30px",
    // mt: "auto",
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
        mr: "0",
      },
      "&:hover": {
        color: "primary",
      },
    },
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
    py: "0",
  },
};
