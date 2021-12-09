import { AppBar, Button, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { Box, height, styled } from "@mui/system";
import React, { useEffect } from "react";
import { setUserLoginDetails } from "../features/user/userSlice";
import { useSelector, useDispatch } from 'react-redux'
import { auth, provider } from "../firebase";
import { Navigate, useNavigate  } from 'react-router-dom'

const Logo = styled("img")(({ theme }) => ({
  width: "130px",
}));

const Item = styled(Paper)(({ theme }) => ({
  background:'transparent',
}));

const Google = styled('button')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#fff',
  alignItems: 'center',
  height: '56px',
  width: '70%',
  marginTop:'40px',
  borderRadius: '28px',
  boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0)",

  verticalAlign: 'middle',
  zIndex: '0',
  transitionDuration: '167ms',
  fontSize: '20px',
  color: 'rgba(0, 0, 0, 0.6)',
  '&:hover': {
    backgroundColor: 'rgba(207, 207, 207, 0.25)',
    color: 'rgba(0, 0, 0, 0.75)',
  }
}));

function Login(props) {
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.user.user)
  const navigate = useNavigate();


  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({user})
    );
  }

  const signIn = () => {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
  };


  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [user]);


  return (
    <div>
      {
        user && <Navigate to = '/home'/>
      }
      <Box sx={{ flexGrow: 1, background: "transparent" }}>
        <AppBar
          position="static"
          elevation={0}
          style={{
            background: "transparent",
            margin: "0 auto",
            maxWidth: "1128px",
            marginTop: "10px",
          }}
        >
          <Toolbar>
            <Logo src="/images/login-logo.svg" alt="" />
            <Box sx={{ flexGrow: 1 }} />
            <Button
              style={{ color: "grey", fontWeight: 600, marginRight: "20px" }}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              style={{
                fontWeight: 600,
                borderRadius: "30px",
                padding: "5px 25px",
              }}
            >
              Sign In
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container mt={3} spacing={4}>
        <Grid item sm={12} md={6}>
          <Item elevation={0} style={{padding:'20px'}}>
          <Typography color='primary' component='b' fontSize='55px'>Welcome to your professional community</Typography>
          <Google onClick={signIn}>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
          </Item>
        </Grid>
        <Grid item sm={12} md={6}>
          <Item elevation={0}>
          <img src="/images/login-hero.svg" alt="" />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}


export default Login;
