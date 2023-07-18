
import React, { useContext, useState } from "react";
// import { useEffect } from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryIcon from '@mui/icons-material/Category';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,  
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
// import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {ThemeContext} from '../components/ThemeContext';

const pages = [
  { title: "Home", icon: <HomeIcon fontSize="medium" />, link: "/" },
  {
    title: "Top News",
    icon: <NewspaperIcon fontSize="medium" />,
    link: "/dashboard",
  },
  {
    title: "Contact",
    icon: <ContactMailIcon fontSize="medium" />,
    link: "/contact",
  },
];

function Navbar() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  // const dispatch = useDispatch();
  // const { isLoading } = useSelector((state) => state.login);
  // const [isLogin, setIsLogin] = useState();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: theme.backgroundColor,
        color: "cadetblue",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CategoryIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontSize: "2rem",
            }}
          />
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
              color: "cadetblue",
              textDecoration: "none",
            }}
          >
            PRODUCT
          </Typography>
         

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="cadetblue"
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                p: 0,
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ backgroundColor: theme.backgroundColor }}
                >
                  <NavLink
                    to={page.link}
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      startIcon={page.icon}
                      onClick={handleCloseNavMenu}
                      className="btn-menu"
                      sx={{ color: theme.color, display: "flex" }}
                    >
                      {page.title}
                    </Button>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CategoryIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              fontSize: "1.5rem",
            }}  
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontSize: "1.5rem",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            STAFF
          </Typography>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, ml: "auto", mr: "auto" }}
          >
            {pages.map((page, index) => (
              <NavLink
                key={index}
                to={page.link}
                className={({ isActive }) => (isActive ? "active" : undefined)}
                style={{ textDecoration: "none" }}
              >
                <Button
                  startIcon={page.icon}
                  onClick={handleCloseNavMenu}
                  className="btn-menu"
                  sx={{ color: theme.color, display: "flex", mr: 2, ml: 2 }}
                >
                  {page.title}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <IconButton onClick={toggle}>
              {!dark ? (
                <DarkModeOutlinedIcon sx={{ color: theme.icon }} />
              ) : (
                <LightModeOutlinedIcon sx={{ color: theme.icon }} />
              )}
            </IconButton>
            {/* {isLogin ? (
              <IconButton
                sx={{ p: 0, ml: 2, mr: 2 }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={(event) => {
                  setAnchorEl(event.currentTarget);
                }}
              >
                <Avatar alt={isLogin.name} src={isLogin.imageUrl} />
              </IconButton>
            ) : (
              <LoginGoogle />
            )} */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
