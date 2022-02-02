import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import LoadingImg from "../assets/loading.gif";
import SessionsImg from "../assets/testimonial/sessions.jpg";
import ShapeLeft from "../assets/shape-left.png";
import ShapeRight from "../assets/shape-right.png";

function SingleAchievement({ infos }) {
  return (
    <>
      <Box sx={styles.banner}>
        <Box sx={styles.backdrop}>
          <Box sx={styles.banner.container}>
            <Box sx={styles.gridContainer}>
              {/* Left Portion */}
              <Box>
                <Heading sx={styles.heading}>{infos.title}</Heading>
                <p style={{ fontSize: "20px", lineHeight: "1.5" }}>
                  Loren ipsun dolor sit anet, consectetur adipisci elit, sed
                  eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut
                  enin ad ninin venian.
                </p>
                <Button>Show Details</Button>
              </Box>
              {/* Right Portion */}
              <Box
                sx={styles.imageBoxContainer}
                style={infos.id % 2 ? { order: 1 } : { order: -1 }}
              >
                <Image src={infos.banner.src} />
                <Image
                  sx={styles.imageBoxContainer.svgImageLeft}
                  src={ShapeLeft.src}
                />
                <Image
                  sx={styles.imageBoxContainer.svgImageRight}
                  src={ShapeRight.src}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SingleAchievement;

const styles = {
  imageBoxContainer: {
    objectFit: "cover",
    position: "relative",
    "@media screen and (max-width:500px)": {
      order: "-10 !important",
    },
    svgImageLeft: {
      position: "absolute",
      bottom: 0,
      height: "30%",
    },
    svgImageRight: {
      position: "absolute",
      left: "-15%",
      zIndex: -1,
      height: "30%",
    },
  },
  imageBoxContainerSM: {
    order: -1,
    objectFit: "cover",
    position: "relative",
    svgImageLeft: {
      position: "absolute",
      bottom: 0,
      height: "30%",
    },
    svgImageRight: {
      position: "absolute",
      // left: "right",
      left: "-15%",
      zIndex: -1,
      height: "30%",
    },
  },
  gridContainer: {
    display: "grid",
    gridGap: 8,
    gridTemplateColumns: ["auto", "auto", " 1fr 1fr"],
    alignItems: "center",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  para: {
    fontSize: "20px",
    padding: "10px 0",
    backgroundColor: "Pink",
  },
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,

    container: {
      minHeight: "inherit",
      padding: "40px",
      maxWidth: "1200px",
      mx: "auto",
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
