import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { makeStyles } from "@mui/styles";
import cwLogo from "../assets/cw.jpeg";

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
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
