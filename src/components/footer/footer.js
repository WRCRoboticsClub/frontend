/** @jsxImportSource @theme-ui/core */
import { jsx, Box, Container, Image, Text, Heading } from "theme-ui";
import { Link } from "../link";
import menuItems from "../../data/footer.data";
import FooterLogo from "../../assets/Club_logo.png";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const social = [
  {
    path: "https://www.facebook.com/wrcrobo",
    icon: <FaFacebook />,
    color: "#4267B2",
  },
  {
    path: "https://www.twitter.com",
    icon: <FaTwitter />,
    color: "#1DA1F2",
  },
  {
    path: "/",
    icon: <FaGithub />,
    color: "#171515",
  },
  {
    path: "https://www.instagram.com/robotics.club.wrc/",
    icon: <FaInstagram />,
    color: "#bc2a8d",
  },
  {
    path: "https://mail.google.com/mail/u/0",
    icon: <SiGmail />,
    color: "#D44638",
  },
];

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Box sx={styles.footer}>
            <Text sx={styles.contact.title}>Follow us @</Text>
            <Box sx={styles.social}>
              {social.map((socialItem, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Link href={socialItem.path} color={socialItem.color}>
                    {socialItem.icon}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={styles.footer}>
            <Link path="/">
              <Image src={FooterLogo.src} alt="logo" sx={styles.footer.logo} />
            </Link>
            <nav sx={styles.footer.links}>
              {menuItems.map((item, i) => (
                <Link
                  path={item.path}
                  key={i}
                  label={item.label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box>
          <Box sx={styles.contact}>
            <Text sx={styles.contact.title}>Contact Us</Text>
            <Box sx={styles.contact.info}>
              <Text sx={styles.contact.phone}>+9779846211026</Text>
              <Text sx={styles.contact.subTitle}>Executive Head</Text>
              <Text sx={styles.contact.subTitle}>Shishir Babu Rijal</Text>
            </Box>
          </Box>
        </Box>
        <Text sx={styles.footer.copyright}>
          Copyright by {new Date().getFullYear()}
        </Text>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "1rem",
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },
    links: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      flexDirection: "row",
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
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
    logo: {
      width: "200px",
      height: "75px",
    },
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
      fontSize: 25,
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
  contact: {
    // padding: "1rem",
    // alignItems: "right",
    title: {
      fontSize: [1, "25px"],
      color: "text",
      fontWeight: "500",
      fontFamily: "Roboto,sans-serif",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
    },
    info: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      flexDirection: "column",
    },
    phone: {
      fontSize: [1, "27px"],
      color: "primary",
      fontWeight: "700",
      fontFamily: "Verdana,sans-serif",
      mb: 2,
      cursor: "pointer",
    },
    subTitle: {
      fontSize: [0, "13px", null, "14px"],
      // color: "primary",
      textAlign: "center",
      letterSpacing: ["1.5px", null, "2px"],
      textTransform: "uppercase",
      fontWeight: "600",
      mb: 2,
      lineHeight: 1.5,
    },
  },
};
