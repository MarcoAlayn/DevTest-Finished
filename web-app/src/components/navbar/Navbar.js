import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleLogout } from "@react-oauth/google"; 
import { CloseSession } from "../../redux/actions/LoginActions";



function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    googleLogout(); 
    dispatch(CloseSession()); 
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ textDecoration: "none", color: "white" }}
        >
          Favorites
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/search"
          style={{ textDecoration: "none", color: "white", marginLeft: "20px" }}
        >
          Search
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/profile"
          style={{ textDecoration: "none", color: "white", marginLeft: "20px" }}
        >
          Profile
        </Typography>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
