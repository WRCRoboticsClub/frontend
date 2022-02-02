import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import PreviousEvents from "../components/previousEvents";
import BannerImg from "../assets/wintersessionposter.jpg";
export default function Events() {
  return (
    <Box>
      <Box sx={styles.banner} id="events">
        <Box sx={styles.backdrop}>
          <Box sx={styles.banner.container}>
            <Box sx={styles.banner.imageBox}>
              <Image src={BannerImg.src} alt="banner" />
            </Box>
            <Box sx={styles.banner.contentBox}>
              <Heading variant="heroPrimary" sx={styles.title}>
                Winter session training 2078
              </Heading>
              <Box sx={styles.banner.descriptions}>
                <Text variant="title">Date : started from poush 1,2078</Text>
                <Text variant="subTitle">Type : physical,learning,open</Text>
                <Text variant="subTitle">
                  A workshop and traning session for 2078 batch first year.
                </Text>
              </Box>

              <Button sx={styles.banner.button} variant="primary">
                Join In
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <PreviousEvents />
      </Box>
      //{" "}
    </Box>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    container: {
      minHeight: "60vh",
      maxHeight: "80vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      // justifyContent: "left",
      display: "flex",
      alignContent: "flex-start",
      objectFit: "cover",
      // width: ["70%", "60%", "535px", null, "67%", "80%", "78%", "70%"],
      maxWidth: "60%",
      // img: {
      //   position: "relative",
      //   height: [100, "auto"],
      // },
    },
    descriptions: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      mb: [3, null, null, null, null, 7],
    },
  },
  backdrop: {
    maxWidth: "100%",
    backgroundImage: "linear-gradient(to right,white, white,skyblue)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  title: {
    fontSize: [0, "20px", null, "25px"],
    color: "#ffffff",
    textAlign: "center",
    letterSpacing: ["1.5px", null, "2px"],
    textTransform: "uppercase",
    fontWeight: "700",
    mb: 2,
    mt: 5,
    lineHeight: 1.5,
  },
};
