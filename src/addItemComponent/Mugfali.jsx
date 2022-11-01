import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import "./threser.css";
// materail icons
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";

const Mugfali = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();
  const [driverName, setdriverName] = useState();
  const [count, setCount] = useState(0);
  const addItem = async () => {
    const res = await fetch("/mugfali", {
      method:"POST",
        headers:{
            "Content-type":"application/json"
        },
      body: JSON.stringify({
        name: state.user[0].name,
        email: state.user[0].email,
        driverName,
        acer: count,
      }),
    });

    if (res.status === 200) {
      navigate("/addItem");
    }
  };
  return (
    <div>
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
        <div className="Increment">
          <Fab
            style={{ marginRight: "20px" }}
            className="buttonIcon"
            color="secondary"
            onClick={() =>
              setCount(() => {
                if (count > 0) {
                  return count - 1;
                } else {
                  return 0;
                }
              })
            }
          >
            <RemoveIcon />
          </Fab>
          <TextField
            style={{ width: "50%", borderRadius: "10px !important" }}
            label="વિધા"
            color="secondary"
            focused
            value={count}
          />
          <Fab
            className="buttonIcon"
            color="secondary"
            onClick={() => setCount(count + 1)}
          >
            <AddIcon />
          </Fab>
        </div>
        {/* <div>
        <TextField
            id="outlined-select-currency"
            select
            label="અનાજ"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            helperText="અનાજ"
          >
            {state.corp.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div> */}
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
        onClick={() => addItem()}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Mugfali;
