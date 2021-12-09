import { Box, Toolbar, AppBar, Avatar,  InputBase, Typography} from "@mui/material/";
import { styled, alpha } from "@mui/material/styles";
import { LinkedIn,  Home, Sensors, Work, Message, Notifications, AccountCircle, Menu, ArrowDropDown} from "@mui/icons-material/";
import SearchIcon from '@mui/icons-material/Search';
import { setSignOutState } from "../features/user/userSlice";
import { useSelector, useDispatch } from 'react-redux'
import { auth } from "../firebase";
import { Navigate, useNavigate  } from 'react-router-dom'
import React from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#eef3f8',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& > *":{
    color: "rgb(0, 0, 0, 0.9)",
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "rgb(0, 0, 0, 0.9)",
  width: "280px",
  height: "32px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  minWidth: '85px',
  display: 'flex', 
  flexWrap: 'nowrap',
  flexDirection:'column', 
  alignItems:'center',
  justifyContent:'center',
  '& > *':{
    color:'rgb(0, 0, 0, 0.6)'
  },
  '&:last-child': {
    borderLeft: '1px solid rgb(0, 0, 0, 0.1)',
  }
}));

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user.user)
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setSignOutState());
        console.log('sgin out')
      })
      .catch((error) => {
        alert(error.message);
      });
};

  return (
    <Box sx={{ background: "white"}}>
      <AppBar position="static" elevation={0} style={{background:"white", margin: "0 auto", maxWidth:"1128px" }}>
        <Toolbar
          varient="dense"
          style={{
            minHeight: "50px",
            borderBottom: "1px solid rgb(0, 0, 0, 0.08)",
          }}
        >
          <LinkedIn
            color={"primary"}
            style={{ width: "44px", height: "44px" }}
          />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconBox>
              <Home/>  
              <Typography component='span' fontSize='12px' >Home</Typography>
          </IconBox>
          <IconBox>
              <Sensors/>  
              <Typography component='span' fontSize='12px' >My Network</Typography>
          </IconBox>
          <IconBox>
              <Work/>  
              <Typography component='span' fontSize='12px' >Jobs</Typography>
          </IconBox>
          <IconBox>
              <Message/>  
              <Typography component='span' fontSize='12px' >Messaging</Typography>
          </IconBox>
          <IconBox>
              <Notifications/>  
              <Typography component='span' fontSize='12px' >Notificatins</Typography>
          </IconBox>
          <IconBox>
              {!user ? <AccountCircle/> : <Avatar alt="Remy Sharp" src={user.photoURL}  sx={{ width: 24, height: 24 }}/>} 
              <div style={{display:'flex', alignItems:'center'}}> 
              <Typography component='span' fontSize='12px'>{user ? user.displayName : 'Me'}</Typography>
              <ArrowDropDown/> 
              </div>  
          </IconBox>
          <IconBox>
              <Menu/> 
              <div style={{display:'flex', alignItems:'center'}}> 
              <Typography component='span' fontSize='12px' style={{cursor:'pointer'}}  onClick={signOut}>signOut</Typography>
              <ArrowDropDown/> 
              </div>  
          </IconBox>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
