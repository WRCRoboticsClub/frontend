/** @jsxImportSource @theme-ui/core */
import { useState, useEffect } from "react";
import { Container } from "theme-ui";

export default function registerForm() {
  const formData = {
    team_name: "",
    bot_name: "",
    institution: "",
    primary_email: "",
    primary_phone: "",
    team_members: {
      member1: "",
      member2: "",
      member3: "",
      member4: "",
    },
    mentor_name: "",
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setFormData({ name: "", email: "", comment: "" });
    console.log("cleared");
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  console.log("drawer", drawerOpen);
  return (
    <section sx={styles.banner} id="register-form">
      {/* <SectionHeader title="Registration for Battle for Speed 2022 is OPEN. HURRY UP!!" /> */}
      <Container sx={styles.banner.container}>
        <div
          class={drawerOpen ? "container right-panel-active" : "container"}
          id="container"
        >
          <div class="form-container sign-up-container">
            <form action="#">
              <h1>Enter your mentor and team member details</h1>
              {/* <span>or use your email for registration</span> */}
              <input type="text" placeholder="Team Mentor" name="m_name"/>
              <input type="text" placeholder="Team Member 1" name="t_name_1" required/>
              <input type="text" placeholder="Team Member 2" name="t_name_2"/>
              <input type="text" placeholder="Team Member 3" name="t_name_3"/>
              <input type="text" placeholder="Team Member 4" name="t_name_4"/>
              <div className="agree">
                <input type="checkbox" className="agreebox"/>
                <label for="agree">
                  I agree to the <a color="blue" href="https://robotics.wrc.edu.np/files/BOS-RuleBook_2022.pdf">rules</a>,terms and conditions of the event.
                  <b>"Battle for speed 2022"</b>.
                </label>
              </div>
              <button>Submit</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form action="#">
              <h1>Register for Battle for Speed 2022</h1>
              <input type="text" placeholder="Team Name" name="team_name" required/>
              <input type="text" placeholder="Robot Name" name="b_name" required/>
              <input type="text" placeholder="Instituion/Organisation" name="clz"/>

              <input type="email" placeholder="Primary Email" name="p_email" required/>
              <input type="phone" placeholder="Primary Phone Number" name="p_contact" required/>

              <button onClick={() => setDrawerOpen(!drawerOpen)}>
                Next page
              </button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Check your team info</h1>
                <p>To see if everything is correct, check your team info</p>
                <button
                  class="ghost"
                  id="signIn"
                  onClick={() => setDrawerOpen(!drawerOpen)}
                >
                  Check Info
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your mentor and team member details </p>
                <button
                  class="ghost"
                  id="signUp"
                  onClick={() => setDrawerOpen(!drawerOpen)}
                >
                  Team Details
                </button>
              </div>
            </div>
          </div>
        </div>
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
