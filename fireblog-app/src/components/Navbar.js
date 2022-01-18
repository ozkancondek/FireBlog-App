import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { makeStyles } from "@mui/styles";
import cwLogo from "../assets/cw.jpeg";
import { useAuth } from "../context/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";

//https://mui.com/styles/basics/
const useStyles = makeStyles(() => ({
  menuButton: {},
  title: {
    fontFamily: "Girassol",

    "& span": {
      fontSize: 30,
      color: "wheat",
    },
  },
  toolbar: {
    backgroundColor: "#046582",
  },
  logo: {
    width: 40,
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",
  },

  login: {
    padding: 10,
    fontSize: 20,
    color: "white",
    textDecoration: "none",
  },
}));

export default function Navbar() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { currentUser, logout } = useAuth();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            <img src={cwLogo} alt="logo" className={classes.logo} />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            ──── <span>{"<BlueBerry/>"}</span> BLOG ────
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
              <AccountCircle fontSize="large" />
            </IconButton>
            {false ? (
              <Menu
                id="menu-appbar"
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
                <Link to="/profile" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to="/new-blog" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>New Blog</MenuItem>
                </Link>
                <Link to="/login" className={classes.linkStyle}>
                  <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                </Link>
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
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
                <Link to="/login" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
                <Link to="/register" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>Register</MenuItem>
                </Link>
              </Menu>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
