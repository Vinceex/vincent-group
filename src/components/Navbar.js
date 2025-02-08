/* eslint-disable eol-last */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Button, Typography, Box, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/images/Logo.png"; // Ensure this path is correct

const Navbar = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("username")
    navigate("/auth/login");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Exercises", path: "#exercises" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: "none", padding: "10px 0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="logo" style={{ width: "48px", height: "48px" }} />
        </Link>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: "30px" }}>
          {navItems.map((item) => (
            <Button 
              key={item.name}
              component={Link}
              to={item.path}
              sx={{
                color: "#3A1212",
                fontSize: "18px",
                fontWeight: "600",
                textTransform: "none",
                "&:hover": { color: "#FF2625" },
              }}
            >
              {item.name}
            </Button>
          ))}
          
         {username && (
           <><Typography variant="body1" sx={{ fontSize: "18px", fontWeight: "500", color: "#3A1212" }}>
              Welcome, {username}
            </Typography><Button
              onClick={handleLogout}
              sx={{
                backgroundColor: "#FF2625",
                color: "#fff",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#d91c1c" },
              }}
            >
                Logout
              </Button></>
         )}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "#3A1212" }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <List sx={{ width: "250px", padding: "20px" }}>
            {navItems.map((item) => (
              <ListItem key={item.name} sx={{ padding: "10px 0" }}>
                <Button
                  component={Link}
                  to={item.path}
                  sx={{ color: "#3A1212", fontSize: "18px", width: "100%", textAlign: "left" }}
                  onClick={handleDrawerToggle}
                >
                  {item.name}
                </Button>
              </ListItem>
            ))}

            {username && (
              <><ListItem sx={{ padding: "10px 0" }}>
                <Typography variant="body1" sx={{ fontSize: "18px", fontWeight: "500", color: "#3A1212" }}>
                  Welcome, {username}
                </Typography>
              </ListItem><ListItem sx={{ padding: "10px 0" }}>
                  <Button
                    onClick={handleLogout}
                    sx={{
                      backgroundColor: "#FF2625",
                      color: "#fff",
                      fontSize: "16px",
                      textTransform: "none",
                      width: "100%",
                      "&:hover": { backgroundColor: "#d91c1c" },
                    }}
                  >
                    Logout
                  </Button>
                </ListItem></>
            )}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;