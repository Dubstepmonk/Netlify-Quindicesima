import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "./resource/QLogo.png";
import { color } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School"; // Example icon for Courses
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Example icon for Products
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // Example icon for Orchestra
import Diversity1Icon from "@mui/icons-material/Diversity1";
import InfoIcon from "@mui/icons-material/Info";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Drawer from "@mui/material/Drawer";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const pages = ["Home", "Courses", "Products"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openOrchestraTab, setOpenOrchestraTab] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [openSubDrawer, setOpenSubDrawer] = React.useState(true);

  const handleClickOpenSubDrawer = () => {
    setOpenSubDrawer(!openSubDrawer);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  const drawerWidth = 240;
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const anchorRef = React.useRef(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (pagename) => {
    pagename = pagename.toLowerCase();
    console.log(pagename + "nimama");
    if (pagename == "home") {
      navigate("/");
    } else {
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
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenOrchestraTab(false);
    } else if (event.key === "Escape") {
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

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {["Home", "Courses", "Products"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => handleCloseNavMenu(text)}
          >
            <ListItemButton>
              <ListItemIcon>
                {/* Assign specific icons based on index */}
                {index === 0 ? (
                  <HomeIcon style={{ color: "#cc7420" }} />
                ) : index === 1 ? (
                  <SchoolIcon style={{ color: "#cc7420" }} />
                ) : index === 2 ? (
                  <ShoppingCartIcon style={{ color: "#cc7420" }} />
                ) : null}
              </ListItemIcon>
              <ListItemText
                style={{ fontFamily: "Edwin" }}
                disableTypography={true}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Drawer Section for ExpandMore Orchestra with subsection Join Our Orchestra, About Us and Events */}
        <ListItemButton onClick={handleClickOpenSubDrawer}>
          <ListItemIcon>
            <MusicNoteIcon style={{ color: "#cc7420" }} />
          </ListItemIcon>
          <ListItemText
            style={{ fontFamily: "Edwin" }}
            disableTypography={true}
            primary="Orchestra"
          />
          {openSubDrawer ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openSubDrawer} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}
             onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScJr80TLJvQOlXpQnBGflr40TJzNwDpu-IMqPrbyWqurRRMzw/viewform", "_blank")}
            >
              <ListItemIcon>
                <Diversity1Icon style={{ color: "#cc7420" }} />
              </ListItemIcon>
              <ListItemText
                style={{ fontFamily: "Edwin" }}
                disableTypography={true}
                primary="Join our Orchestra"
              />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("/orchestra")}
            >
              <ListItemIcon>
                <InfoIcon style={{ color: "#cc7420" }} />
              </ListItemIcon>
              <ListItemText
                style={{ fontFamily: "Edwin" }}
                disableTypography={true}
                primary="About us"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}
              onClick={() => navigate("/events")}
            >
              <ListItemIcon>
                <EventAvailableIcon style={{ color: "#cc7420" }} />
              </ListItemIcon>
              <ListItemText
                style={{ fontFamily: "Edwin" }}
                disableTypography={true}
                primary="Events"
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    // <AppBar position="static" style={{background:"#282424"}}>
    //Adding position = "static" will cause the appbar to not scale with the screen size
    <AppBar style={{ background: "#282424" }}>
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
            <img src={logo} style={{ maxWidth: "70px" }}></img>
          </Typography>

          {/* Drawer Section using hamburger menu icon for mobile device screen */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              container={document.body}
              variant="temporary"
              open={mobileOpen}
              onTransitionEnd={handleDrawerTransitionEnd}
              onClose={handleDrawerClose}
              sx={{
                display: { xs: "block", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              slotProps={{
                root: {
                  keepMounted: true, // Better open performance on mobile.
                },
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "#282424",
                  color: "white",
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          {/* Quindicesima logo for small screen */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate("/")}
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
            <img src={logo} style={{ maxWidth: "70px" }}></img>
            {/* LOGO */}
          </Typography>

          {/* This section is for styling menu for big screen  */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "flex", // Change to flex for better alignment of content
                  alignItems: "center", // Vertically center the text and icon
                  fontFamily: "Edwin",
                }}
              >
                {page}
              </Button>
            ))}

            {/* This section is for the big screen where on pressing Orchestra tab it shows the Join, About Us and Events */}
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={openOrchestraTab ? "composition-menu" : undefined}
              aria-expanded={openOrchestraTab ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggleOrchestraTab}
              sx={{
                my: 2,
                color: "white",
                display: "flex", // Use flex for consistent alignment
                alignItems: "center", // Ensure vertical alignment of text and icon
                fontFamily: "Edwin",
              }}
            >
              Orchestra
              <ExpandMoreIcon />
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
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={openOrchestraTab}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                        sx={{ backgroundColor: "#282424" }}
                      >
                        <MenuItem
                          onClick={() =>  window.open("https://docs.google.com/forms/d/e/1FAIpQLScJr80TLJvQOlXpQnBGflr40TJzNwDpu-IMqPrbyWqurRRMzw/viewform", "_blank")}
                          sx={{ color: "white", fontFamily: "Edwin" }}
                        >
                          Join our Orchestra
                        </MenuItem>
                        <MenuItem
                          onClick={() => navigate("/orchestra")}
                          sx={{ color: "white", fontFamily: "Edwin" }}
                        >
                          About us
                        </MenuItem>
                        <MenuItem
                         onClick={() => navigate("/events")}
                          sx={{ color: "white", fontFamily: "Edwin" }}
                        >
                          Events
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontFamily: "Edwin", background: "#9b51e0" }}
              onClick={() => navigate("/booktrial")}
            >
              BOOK A FREE TRIAL
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
