import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./threser.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Motor = () => {
  const [driverName, setdriverName] = useState();
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();

  const addMotor = async () => {
    const res = await fetch("/motor", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: state.user[0].email,
        name: state.user[0].name,
        driverName,
      }),
    });

    if (res.status === 200) {
      navigate("/addItem");
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "36.5ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          {state.isUser ? (
            <TextField
              disabled
              id="filled-disabled"
              label="Name"
              defaultValue="Hello World"
              variant="filled"
              value={state.user[0].fullName}
            />
          ) : (
            navigate("/")
          )}
        </div>

        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={driverName}
            onChange={(e) => setdriverName(e.target.value)}
            helperText="ડ્રાઈવરનું નામ "
          >
            {state.OwnerName.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
      <Fab
        className="sticky"
        color="secondary"
        sx={{
          bottom: (theme) => theme.spacing(2),
          right: (theme) => theme.spacing(2),
        }}
        onClick={() => addMotor()}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default Motor;
