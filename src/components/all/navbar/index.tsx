import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GroupIcon from "@mui/icons-material/Group";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AccountCircle } from "@mui/icons-material";
import {
  Container,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { AppBar, Drawer } from "./style";
import HomeIcon from "@mui/icons-material/Home";
import { useHistory, useLocation } from "react-router-dom";
import { setPath } from "../../../utils/localStorage";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../../../screens/all/signin/redux/signinSlice";

const mdTheme = createTheme();

export const Navbar = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const getPageName = () => {
    let name = location.pathname.substring(1);
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenProfile = () => {
    setPath("/profile");
    history.push("/profile");
    setAnchorEl(null);
  };
  const handleSignout = () => {
    dispatch(signoutSuccess());
    history.push("/signin");
    setAnchorEl(null);
  };
  const handleOnClick = (name: string) => {
    setPath(name);
    history.push(name);
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{ background: "#6868ac" }}>
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {getPageName()}
            </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                sx={{ mt: "30px" }}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleOpenProfile}>Profile</MenuItem>
                <MenuItem onClick={handleSignout}>Signout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{ backgroundColor: "grey" }}
          variant="permanent"
          open={open}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItemButton onClick={() => handleOnClick("/home")}>
              <ListItemIcon sx={{ color: "white" }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary="Home" />
            </ListItemButton>
            <ListItemButton onClick={() => handleOnClick("/score")}>
              <ListItemIcon sx={{ color: "white" }}>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Score" sx={{ color: "white" }} />
            </ListItemButton>
            <ListItemButton onClick={() => handleOnClick("/schedule")}>
              <ListItemIcon sx={{ color: "white" }}>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary="Schedule" sx={{ color: "white" }} />
            </ListItemButton>
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 1, mb: 1 }}>
            {children}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
