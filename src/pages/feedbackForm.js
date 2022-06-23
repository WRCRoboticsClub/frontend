/** @jsxImportSource @theme-ui/core */
import { useState } from "react";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
    Slider,
  } from 'theme-ui';

export default function feedbackForm() {
  const baseurl = 'https://roboticswrc.herokuapp.com/feedback.php';

    const [formData,setFormData] = useState({
        name:'',
        email:'',
        comment:''
    });

  const submitForm = async (e)=>{
    e.preventDefault();

    console.log(formData);
    const response = await fetch(baseurl,{
      method:"POST",
      body:JSON.stringify({data:1, formData}),
      headers:{
        'Content-Type':"application/json",
      }
    });

    console.log('done',response);
  }

  return (
    <section sx={styles.banner} id="form">
      <Container sx={styles.banner.container}>
       <Box as="form" onSubmit={(e) =>submitForm(e)}>
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" mb={5} placeholder="Full Name" onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
        <Label htmlFor="email">Email</Label>
        <Input name="email" id="email" mb={5} placeholder="Email" onChange={(e)=>setFormData({...formData,email:e.target.value})}/>

  
        <Label htmlFor="comment">Provide us any feedback related to Rainy session</Label>
        <Textarea name="comment" id="comment" placeholder="Feedback" rows={6} mb={5} onChange={(e)=>setFormData({...formData,comment:e.target.value})}/>
        
      
        <Button>Submit</Button>
        </Box>
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
