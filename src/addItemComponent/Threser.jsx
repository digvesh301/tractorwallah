import React from "react";
import "./threser.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

export function Threser() {
  const [driverName, setDriverName] = React.useState();
  const [hours, setHours] = React.useState();
  const [corp, setCorp] = React.useState();
  const [minute, setMinute] = React.useState();
  const [state, dispatch] = useStateValue();

  const navigate = useNavigate();

  const addItem = async () => {
    const res = await fetch("/thresher", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        driverName,
        hours,
        corp,
        minute,
        email: state.user[0].email,
        name:state.user[0].name
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
            label="મિનિટ"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            helperText="મિનિટ "
          >
            {state.hour.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-select-currency"
            select
            label="કલાક"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            helperText="કલાક"
          >
            {state.hours.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
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
          <TextField
            id="outlined-select-currency"
            select
            label="અનાજ"
            value={corp}
            onChange={(e) => setCorp(e.target.value)}
            helperText="અનાજ"
          >
            {state.corp.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          {/* <TextField id="outlined-basic" label="કલાક" variant="outlined" value={} /> */}
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

export default Threser;
