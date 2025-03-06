import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuList from '@mui/material/MenuList';
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { Navigate, useNavigate } from "react-router-dom";
import logo from "./resource/QLogo.png"
import { color } from "@mui/system";

const pages = ["Home", "Courses", "Products"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openOrchestraTab, setOpenOrchestraTab] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (pagename) => {
    pagename = pagename.toLowerCase();
    console.log(pagename + "nimama")
    if(pagename=="home"){
      navigate("/")
    }
    else{
    navigate("/" + pagename);
    }
  };

  const handleCloseWhenClickingAway = () => {
    setAnchorElNav(null);
  };

  const handleToggleOrchestraTab = () => {
    setOpenOrchestraTab((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenOrchestraTab(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenOrchestraTab(false);
    } else if (event.key === 'Escape') {
      setOpenOrchestraTab(false);
    }
  }

   // return focus to the button when we transitioned from !open -> open
   const prevOpen = React.useRef(openOrchestraTab);
   React.useEffect(() => {
     if (prevOpen.current === true && openOrchestraTab === false) {
       anchorRef.current.focus();
     }
 
     prevOpen.current = openOrchestraTab;
   }, [openOrchestraTab]);

  return (
    // <AppBar position="static" style={{background:"#282424"}}>
    //Adding position = "static" will cause the appbar to not scale with the screen size
    <AppBar style={{background:"#282424"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} style={{maxWidth:"70px"}}></img>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu 
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseWhenClickingAway}
              sx={{
                mt: "1px", "& .MuiMenu-paper": 
      { backgroundColor: "#302424", }, 
                display: { xs: "block", md: "none" },
              }}
            >

              {/* Page names, use this section for styling the menu item for phone screen */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center" style={{fontFamily:"Edwin" , color:"white"}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={()=>navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} style={{maxWidth:"70px"}}></img>
            {/* LOGO */}
          </Typography>
          {/* This section is for styling menu for big screen  */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                on
                sx={{ my: 2, color: "white", display: "block" , fontFamily:"Edwin"}}
              >
                {page}
              </Button>
            ))}

           <Button
                     ref={anchorRef}
                     id="composition-button"
                     aria-controls={openOrchestraTab ? 'composition-menu' : undefined}
                     aria-expanded={openOrchestraTab ? 'true' : undefined}
                     aria-haspopup="true"
                     onClick={handleToggleOrchestraTab}
                     sx={{ my: 2, color: "white", display: "block" , fontFamily:"Edwin"}}
           >
            Orchestra
           </Button>
           <Popper
          open={openOrchestraTab}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={openOrchestraTab}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    sx={{backgroundColor:"#282424"}}
                  > 
                    <MenuItem onClick={handleClose} sx={{color:"white" , fontFamily:"Edwin"}}>Join our Orchestra</MenuItem>
                    <MenuItem onClick={()=>navigate("/orchestra")} sx={{color:"white" , fontFamily:"Edwin"}}>About us</MenuItem>
                    <MenuItem onClick={handleClose} sx={{color:"white" , fontFamily:"Edwin"}}>Events</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Button variant="contained" color="primary" sx={
          { fontFamily:"Edwin",
            background: '#9b51e0'
           }
        } onClick={()=>navigate("/booktrial")}>BOOK A FREE TRIAL</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
