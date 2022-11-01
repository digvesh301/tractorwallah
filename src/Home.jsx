import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const [user,setUser] = useState("heell");
  useEffect(()=>{
    fe();
  },[])

  const fe = async()=>{
    console.log("hello");
    const fetchData = await fetch("https://tractorwalla.herokuapp.com/home", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const datas = await fetchData.json();
    
    setUser(datas)
  }
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={false}>This is a success alert — check it out!</Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}
