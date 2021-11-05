/** @jsxImportSource @theme-ui/core */
import { jsx, Container, Heading, Text, Box, Image, Grid } from "theme-ui";
import SectionHeader from "./section-header";
import Avatar1 from "../assets/events/event1.png";
import Avatar2 from "../assets/events/event2.png";
import Avatar3 from "../assets/events/event3.png";
import Avatar4 from "../assets/events/event5.png";

const data = [
  {
    id: 1,
    title: "Robo Rookies",
    description:
      "A workshop for every Robotics Enthusiast including topics like Into to Web Hosting, PCB Designing, IC circuit and Mechanical CAD.",
    avatar: Avatar1,
  },
  {
    id: 2,
    title: "Daily Quiz Series",
    description:
      "Robotics Club proudly presents the Daily Quiz Series.Every Faculty will be given the questions each day for the next 7 days. The winner from every faculty will be rewarded with Rs. 50 recharge every day!",
    avatar: Avatar2,
  },
  {
    id: 3,
    title: "Exploring Nepal - The Next level Robo Race",
    description:
      "Get ready to witness the awesomeness and skills, when two robots will race with each other against time completing the task on the arena. Its a next level Robo-race.",
    avatar: Avatar3,
  },
  {
    id: 4,
    title: "Battle for speed",
    description:
      "Get ready to experience the battle of robots for their speed.",
    avatar: Avatar4,
  },
];
export default function PreviousEvents() {
  return (
    <section id="events" sx={{ variant: "section.events" }}>
      <Container css={{ textAlign: "center" }}>
        <SectionHeader title="Previous Events" />
      </Container>
      <Grid sx={styles.grid}>
        {data.map((item) => (
          <Box sx={styles.reviewCard} key={item.id}>
            <div className="card-event">
              <Image src={item.avatar.src} alt="Client Image" />
            </div>
           
            <Heading as="h3" sx={styles.title}>
              {item.title}
            </Heading>
            <Text sx={styles.description}>{item.description}</Text>
          </Box>
        ))}
      </Grid>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
    ],
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    },

    ".card-event": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      marginBottom: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        border: "2px solid red",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
};
