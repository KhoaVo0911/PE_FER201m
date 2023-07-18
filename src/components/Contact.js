import { Container, TextField } from "@mui/material";
import React from "react";
import "../App.css";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";


export default function Contact() {
  const { theme } = useContext(ThemeContext)
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
    <Container className="contact-form" sx={{height: "75.5vh"}} style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <h3>Contact Us</h3>
      <form className="form-group" onSubmit={handleSubmit} style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <TextField label="Enter Your Name"/>
        <TextField label="Enter Your Phone" />
        <TextField email label="Enter Your Email" validate />
        <TextField  multiline minRows={4}  label="Send Your Massage" />  
        <button>Submit</button>
      </form>
    </Container>
    </div>
  );
}
