import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  border: '1px solid rgb(0, 0, 0, 0.1)',
  borderRadius: '8px'
}));

function Home() {
  return (
    <Container>
    <Grid container columnSpacing={3}>
      <Grid item xs={12}>
        <Item style={{background:'transparent', padding:'30px', border:0}} elevation={0}>
          <h5>
            <a style={{color:'blue'}}>Hiring in a hurry? - </a>
          </h5>
          <p>
            Find talented pros in record time with Upwork and keep business
            moving.
          </p>
        </Item>
      </Grid>
      <Grid item xs={12} md={3}>
        <Item elevation={0}><Leftside/></Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item elevation={0} style={{border:'none', background:'transparent'}}><Main/></Item>
      </Grid>
      <Grid item xs={12} md={3}>
        <Item elevation={0}><Rightside/></Item>
      </Grid>
    </Grid>
    </Container>
  );
}

export default Home;
