import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import LoadingImg from "../assets/loading.gif";
export default function Achievements() {
  return (
    <Box sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <h1>This page is in progress.</h1>
          <h2>Catch up with you later.</h2>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={LoadingImg.src} alt="banner" />
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,

    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [200, "auto"],
        // width: [200, "auto"],
      },
    },
  },
};
