import React from "react";
import { Container, Grid, Typography } from "@mui/material/";
import Touch from "./Touch";
import cities from "../data.json";

function Home() {
  return (
    <>
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography variant="h3" marginY={4}>
              {city.name}
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <Touch tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  );
}

export default Home;
