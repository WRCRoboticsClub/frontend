import React from "react";
import { Container } from "theme-ui";

export default function Confirmation() {
  return (
    <section sx={styles.banner} id="register-form">
      <Container sx={styles.banner.container}>
        <div class="container">Confirmation Page for Application</div>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  },
};
