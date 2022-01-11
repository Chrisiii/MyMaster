import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../styles/Footer.css";
import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import ContactUs from "../pages/ContactUs";
import { Route, Routes, Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography style={{ color: "#3b3d3d" }}>Help</Typography>
              <Box pt={3}>
                <Link to="contactus" style={{ color: "white" }}>
                  Contact us
                </Link>
              </Box>
              <Box pt={3}>
                <Link to="/support" color="inherit">
                  Support
                </Link>
              </Box>
              <Box pt={3}>
                <Link to="/privacy" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography style={{ color: "#3b3d3d" }}>Help</Typography>
              <Box pt={3}>
                <Link to="/aboutUs" color="inherit">
                  About us
                </Link>
              </Box>
              <Box pt={3}>
                <Link to="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box pt={3}>
                <Link to="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <Typography>
                  Follow us! <InstagramIcon /> <TwitterIcon />{" "}
                </Typography>
              </Box>
              <Box>
                <Typography align="center">LOGO</Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" />
          <Typography align="center">
            &copy; 2021 mymaster.com All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
