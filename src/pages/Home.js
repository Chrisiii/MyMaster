// import { createTheme, fontStyle, minWidth, ThemeProvider } from "@mui/system"
import React from "react";
import { Grid, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
import YardIcon from "@mui/icons-material/Yard";
import PetsIcon from "@mui/icons-material/Pets";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ overflowX: "hidden", paddingTop: "100px", width: "100%" }}>
      <img
        alt=""
        style={{ opacity: 0.4 }}
        width={"100%"}
        src="https://image.shutterstock.com/image-vector/thank-you-essential-workers-concept-260nw-1713290596.jpg"
      />
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div style={{ paddingTop: 100 }}>
          {" "}
          <h1
            style={{
              //   marginTop:100,
              marginLeft: 100,
              fontStyle: "italic",
            }}>
            Let the Master take the spot!
          </h1>
          <h3 style={{ marginLeft: 100 }}>
            You don't have to do the housework you used to do!
            <div
              style={{
                marginTop: "1em",
                marginBottom: "1em",
                marginLeft: 0,
                marginRight: 0,
              }}>
              {" "}
              Our services will help you with any work you don't feel like
              <div
                style={{
                  marginTop: "1em",
                  marginBottom: "1em",
                  marginLeft: 0,
                  marginRight: 0,
                }}>
                doing at the moment.
              </div>
            </div>
          </h3>
        </div>
        <Grid
          container
          spacing={2}
          style={{
            position: "absolute",
            paddingRight: 310,
            top: 350,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Grid
            onClick={() => navigate("/masters/Home Cleaning")}
            style={{
              width: 90,
              marginLeft: 400,
              marginTop: 100,
              cursor: "pointer",
            }}>
            <Item>
              <HomeIcon sx={{ color: "black" }} />
            </Item>
          </Grid>
          <Grid
            onClick={() => navigate("/masters/Plumber")}
            style={{
              width: 90,
              marginLeft: 50,
              marginTop: 100,
              cursor: "pointer",
            }}>
            <Item>
              <ConstructionIcon sx={{ color: "black" }} />
            </Item>
          </Grid>
          <Grid
            onClick={() => navigate("/masters/Gardening")}
            style={{
              width: 90,
              marginLeft: 50,
              marginTop: 100,
              cursor: "pointer",
            }}>
            <Item>
              <YardIcon sx={{ color: "black" }} />
            </Item>
          </Grid>
          <Grid
            onClick={() => navigate("/masters/Pet Care")}
            style={{
              width: 90,
              marginLeft: 50,
              marginTop: 100,
              cursor: "pointer",
            }}>
            <Item>
              <PetsIcon sx={{ color: "black" }} />
            </Item>
          </Grid>
          <Grid
            onClick={() => navigate("/masters/Garbage Collection")}
            style={{
              width: 90,
              marginLeft: 50,
              marginTop: 100,
              cursor: "pointer",
            }}>
            <Item>
              <DeleteIcon sx={{ color: "black" }} />
            </Item>
          </Grid>
        </Grid>
      </div>
      <div style={{ backgroundColor: "white", height: 280 }}>
        <img
          alt=""
          style={{ float: "right", backgroundColor: "white" }}
          src="https://ec.europa.eu/jrc/sites/default/files/styles/normal-responsive/public/adobestock_354858046.png?itok=pq5p7msK"
          width={500}
        />
        <h1 style={{ marginTop: 60, marginLeft: 100, fontStyle: "italic" }}>
          EVERYDAY LIFE MADE EASIER
        </h1>
        <DoneIcon style={{ color: "green", marginLeft: 100 }} /> Choose your
        Master by reviews, skills and price.
        <p>
          <DoneIcon style={{ color: "green", marginLeft: 100 }} /> The world of
          work made simple.
        </p>
      </div>
    </div>
  );
}

export default Home;
