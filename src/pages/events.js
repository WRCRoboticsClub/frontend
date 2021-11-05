import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import PreviousEvents from "../components/previousEvents";
export default function Events() {
  return (
    <Box>
      <Box sx={styles.banner} id="events">
        <Container sx={styles.banner.container}>
          <Box sx={styles.banner.contentBox}>
            <Heading as="h1" variant="heroPrimary">
              No any events yet
            </Heading>
            <Text as="p" variant="heroSecondary">
              We are working hard to bring you the best events in the world.
              Please check back soon.
            </Text>
            <Button variant="primary">On the way</Button>
          </Box>
        </Container>
      </Box>
      <Box>
        <PreviousEvents />
      </Box>
    </Box>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    backgroundImage: "linear-gradient(white,white, skyblue)",
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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
      },
    },
  },
};
