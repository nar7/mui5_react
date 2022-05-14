import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import image1 from "../asset/cristiano-pinto-2lWGQ02DGL8-unsplash.jpg";
import image2 from "../asset/IMG-20210511-WA0038.jpg";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 300, height: 325, marginLeft: 1 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: image1,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: image2,
    title: "Burger",
  },
  {
    img: image1,
    title: "Camera",
  },
  {
    img: image2,
    title: "Coffee",
    cols: 2,
  },
  {
    img: image2,
    title: "Hats",
    cols: 2,
  },
  {
    img: image1,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: image1,
    title: "Basketball",
  },
  {
    img: image2,
    title: "Fern",
  },
  {
    img: image1,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: image1,
    title: "Tomato basil",
  },
  {
    img: image1,
    title: "Sea star",
  },
  {
    img: image2,
    title: "Bike",
    cols: 2,
  },
];
