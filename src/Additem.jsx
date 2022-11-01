import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

import arrayOfImage from "./ImagesArray";
import "./Additem.css";

const Additem = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 145,
          height: 128,
        },
      }}
    >
      {arrayOfImage.map((data) => (
        <Paper elevation={3} onClick={() => navigate(data.goto)}>
          <img src={data.URL} height={100} alt="thresher_img"></img>
        </Paper>
      ))}
    </Box>
  );
};

export default Additem;
