import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeContext } from "./ThemeContext";

const GridContent = styled(Grid)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
});

const BoxContact = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  color: "white",
});

function Footer() {
  const { theme } = useContext(ThemeContext);
  const FooterBox = styled(Box)({
    backgroundColor: theme.backgroundColor,
    width: "100%",
    height: "fit-content",
    boxShadow:
      "0px 1px 4px 3px rgb(0 0 0 / 30%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 4px 10px 0px rgb(0 0 0 / 12%)",
  });

  return (
    <FooterBox
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Container>
        <Grid container spacing={2} sx={{ pt: 1, pb: 2 }}>
          <GridContent item xs={12} sm={3} md={4} sx={{ color: "#ff6500" }}>
            <CategoryIcon
              sx={{
                fontSize: "4rem",
                ml: 4,
                color: "cadetblue",
              }}
            />
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                // marginLeft: "",
                fontFamily: "monospace",
                fontSize: "4rem",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "cadetblue",
                textDecoration: "none",
              }}
            >
              PRODUCT
            </Typography>
          </GridContent>
          <Grid item xs={6} sm={6} md={3}>
            <Typography sx={{ color: theme.color, textAlign: "left" }}>
              Contact me:
            </Typography>
            <BoxContact>
              <IconButton sx={{ color: theme.color, textAlign: "center" }}>
                <LocalPostOfficeOutlinedIcon />
              </IconButton>
              <Typography sx={{ color: theme.color, textAlign: "center" }}>
                khoavdse161161@fpt.edu.vn
              </Typography>
            </BoxContact>
            <BoxContact>
              <IconButton sx={{ color: theme.color, textAlign: "center" }}>
                <LocalPostOfficeOutlinedIcon />
              </IconButton>
              <Typography sx={{ color: theme.color, textAlign: "center" }}>
                fer201m@fpt.edu.vn
              </Typography>
            </BoxContact>
          </Grid>
          <Grid item xs={6} sm={12} md={5}>
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={4} md={4}>
                <Box sx={{ pl: 1 }}>
                  <Typography sx={{ color: theme.color }}>
                    Follow me on:
                  </Typography>
                  <Box>
                    <IconButton sx={{ color: theme.icon }}>
                      <FacebookOutlinedIcon />
                    </IconButton>
                    <IconButton sx={{ color: theme.icon }}>
                      <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ color: theme.icon }}>
                      <GitHubIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </FooterBox>
  );
}
export default Footer;
