import React, { useState } from "react";
import "./threser.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "@mui/material/Button";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

const Throlley = () => {
  const [state, dispatch] = useStateValue();
  const [transferName, setTransferName] = useState();
  const [driverName, setDriverName] = useState();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const addItem = async () => {
    const res = await fetch("/trolley", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        driverName,
        transferName,
        count,
        email: state.user[0].email,
        name:state.user[0].name
  })
});

  if(res.status === 200){
    navigate("/addItem");
  }

  }
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
              color="secondary"
            />
          ) : (
            navigate("/")
          )}
        </div>
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="ફેરો"
            value={transferName}
            onChange={(e) => setTransferName(e.target.value)}
            helperText="ફેરો "
          >
            {state.trolley.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="Increment">
          <Fab
          style={{marginRight:"20px"}}
            className="buttonIcon"
            color="secondary"
            onClick={() => setCount(()=>{
              if(count>0){
                return count-1;
              }
              else{
                return 0;
              }
            })}
          >
            <RemoveIcon />
          </Fab>
          <TextField
            style={{ width: "50%",borderRadius:"10px !important"}}
            label="Outlined secondary"
            color="secondary"
            focused
            value={count}
          />
          <Fab
            className="buttonIcon"
            color="secondary"
            onClick={() => setCount(count+1)}
          >
            <AddIcon />
          </Fab>
        </div>
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
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
    </>
  );
}


export default Throlley;
