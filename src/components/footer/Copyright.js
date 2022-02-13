/** @jsxImportSource @theme-ui/core */
import { jsx, Box, Container, Image, Text, Heading } from "theme-ui";
import CopyrightLogo from "../../assets/copyright.png";
import Link from "next/link";
export default function Copyright() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.copyright}>
        <Image src={CopyrightLogo.src} alt="copyright" sx={styles.image} />
        <Text sx={styles.text}>Copyright by {new Date().getFullYear()}</Text>
      </Box>
      {/* <hr sx={styles.hr} /> */}
      <Box sx={styles.designer}>
        <Text sx={styles.devName}>
          Frontend dev:
          <Link href="https://www.facebook.com/knight.shah/">Sunil Shah</Link>
        </Text>

        <Text sx={styles.devName}>
          Backend dev:
          <Link href="https://www.facebook.com/roshan.kc.3557440">
            Roshan KC
          </Link>
        </Text>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
    height: "200px",
    backgroundColor: "primary",
  },
  copyright: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: [1, "15px"],
    width: "100%",
    color: "white",
    fontWeight: "400",
    fontFamily: "Verdana,sans-serif",
  },
  image: {
    width: "100px",
    height: "70px",
  },
  designer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "500px",
  },
  devName: {
    fontSize: [1, "15px"],
    width: "100%",
    color: "white",
    fontWeight: "400",
    fontFamily: "Verdana,sans-serif",
    textTransform: "uppercase",
  },
  //   hr: {
  //     width: "40%",
  //     border: "none",
  //     borderTop: "1px solid white",
  //   },
};
