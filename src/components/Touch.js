import React from "react";
import { Paper, Grid, Typography, Box, Rating } from "@mui/material";
import AccessTime from "@mui/icons-material/AccessTime";
import image from "../asset/IMG-20210511-WA0038.jpg";
import { Link } from "react-router-dom";
function Touch({ tour, key }) {
  return (
    <Grid item xs={6} md={3}>
      <Link to={"/" + tour.id}>
        <Paper sx={{ textDecoration: "none" }} elevation={2} square>
          <img className="img" src={image} alt="hello" />
          <Box paddingX={1}>
            <Typography component="h2">{tour.name}</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime fontSize="10" />
              <Typography marginLeft={1}>5 hours</Typography>
            </Box>
            <Box sx={{ display: "flex" }} marginTop={4}>
              <Rating
                value={4.5}
                name="read-only"
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                4.5
              </Typography>
              <Typography variant="body2" component="p" marginLeft={1.5}>
                (655 reviews)
              </Typography>
            </Box>
            <Box>
              <Typography
                fontWeight="bold"
                variant="h6"
                component="h3"
                marginTop={0}
              >
                FROM C $147
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
}

export default Touch;
