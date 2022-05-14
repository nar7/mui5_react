import React from "react";
import { Container, Typography, Box } from "@mui/material";
import image from "../asset/cristiano-pinto-2lWGQ02DGL8-unsplash.jpg";
import ImageCollage from "./ImageCollage";
function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h2" marginY={3}>
        Explore The World in Vegas
      </Typography>
      <Box sx={{ display: "flex" }} marginTop={2}>
        <img src={image} height={325} />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
          sed dolorem repellendus optio doloremque ipsam quo laborum quia
          deleniti, magnam ut adipisci expedita similique praesentium, iure
          minus beatae doloribus nam. Aspernatur libero odio at cum fugiat earum
          culpa voluptatem incidunt atque quas possimus, suscipit dolorum, aut
          nisi officia sequi veritatis repellat eligendi provident soluta! Quam
          corrupti libero molestias cumque non.
        </Typography>
      </Box>
    </Container>
  );
}

export default Tour;
