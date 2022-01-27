import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { GrRaspberry } from "react-icons/gr";
import { useAuth } from "../context/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    fontFamily: "GRUNJA",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    "& span": {
      fontSize: 30,
      fontWeight: "bolder",
      color: "black",
    },
    "& span:hover": {
      textDecoration: "underline",
    },
  },
  logoSpan: {
    fontSize: 30,
    fontWeight: "bolder",
    color: "#2C2C2C",
    borderBottom: "5px solid #2C2C2C",
  },
  appBar: {
    backgroundColor: "#1E90FF",
  },
  logo: {
    width: 180,
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
  signinSignup: {
    display: "flex",
    flexDirection: "row",
    color: "#2c2c2c",

    fontWeight: "bolder",
  },
  signinsignup: {
    marginLeft: "5px",
    color: "#2c2c2c",
    border: "2px solid #2c2c2c",
    fontWeight: "bolder",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  //materialUi dan gelenler setAnchorEl,
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

  const handleDashboard = () => {
    setAnchorEl(null);
    navigate("/");
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}
        sx={{ maxWidth: "md" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDashboard}
          >
            <GrRaspberry size={70} color="#2C2C2C" />
            <span className={classes.logoSpan}>BlueBerry</span>
          </IconButton>
          <div className={classes.root}>
            <Link to="/" className={classes.login}>
              <Typography variant="h6" className={classes.title}></Typography>
            </Link>
          </div>

          <div>
            {currentUser?.email ? (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle style={{ fontSize: "40px" }} />
                </IconButton>
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
                  open={open}
                  onClose={handleClose}
                >
                  <Link to="/profile" className={classes.linkStyle}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </Link>
                  <Link to="/new-blog" className={classes.linkStyle}>
                    <MenuItem onClick={handleClose}>New Blog</MenuItem>
                  </Link>
                  <Link to="/login" className={classes.linkStyle}>
                    <MenuItem
                      className={classes.linkStyle}
                      onClick={handleLogout}
                    >
                      Logout
                    </MenuItem>
                  </Link>
                </Menu>
              </div>
            ) : (
              <div className={classes.signinSignup}>
                <Link to="/login" className={classes.linkStyle}>
                  <MenuItem className={classes.signinsignup}>Signin</MenuItem>
                </Link>
                <Link to="/register" className={classes.linkStyle}>
                  <MenuItem className={classes.signinsignup}>Signup</MenuItem>
                </Link>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
