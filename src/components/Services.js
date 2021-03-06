import {
  ButtonBase,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import "../styles/Search.css";
import { useDispatch, useSelector } from "react-redux";
import { uptadeServiceList } from "../Redux/UserSlice";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../Firebase/FirebaseUser";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function Services() {
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.user.serviceList);
  const [filter, setFilter] = useState("");

  const getData = useCallback(async () => {
    const servicesCol = collection(db, "services");
    const serviceSnapshot = await getDocs(servicesCol);
    const serviceList = serviceSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    dispatch(uptadeServiceList(serviceList));
  }, [dispatch]);

  useEffect(() => {
    getData(db);
  }, [getData]);

  const searchText = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div style={{ paddingTop: "120px" }}>
      <div
        className="search-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <h1>Search Services:</h1>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          className="search-input"
          style={{ marginLeft: 5, paddingBottom: 10 }}
          value={filter}
          onChange={searchText}
        />
      </div>
      <Grid container>
        {serviceList
          .filter((item) => item.name?.toLowerCase().includes(filter))
          .map((item) => {
            return (
              <Grid item xs={12} md={6} key={item.name}>
                <Paper
                  sx={{
                    p: 2,
                    margin: "70px",
                    maxWidth: 500,
                    flexGrow: 1,
                    backgroundColor: "#b2bcc0",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      style={{ display: "flex", alignItems: "center" }}>
                      <ButtonBase sx={{ width: 128, height: 128 }}>
                        {item.image ? (
                          <Img alt="" src={item.image} />
                        ) : (
                          <ImageNotSupportedIcon
                            style={{ width: 128, height: 128 }}
                          />
                        )}
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Link
                            style={{
                              color: "white",
                              fontSize: 32,
                              fontWeight: "bolder",
                              cursor: "pointer",
                              textDecoration: "none",
                            }}
                            to={`/masters/${item.name}`}>
                            {item.name}
                          </Link>
                          <Typography
                            style={{
                              fontSize: 16,
                              fontWeight: "bolder",
                              marginTop: 25,
                            }}
                            variant="h4"
                            component="h2">
                            {item.description}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default Services;
