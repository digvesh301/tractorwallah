import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Alerts from "./alert/Alerts";

const Credite = () => {
  const notify = () => toast.success("Wow so easy!");

  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();
  const [price, setPrice] = useState(0);
  const [pin, setPin] = useState();
  const addCredite = async () => {
    const res = await fetch("/credit", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        price,
        pin,
        email: state.user[0].email,
        name: state.user[0].name,
      }),
    });

    if (res.status === 200) {
      navigate("/addItem");
    } else {
      // <Alerts />;
    }
  };
  return (
    <div>
      <input
        type="number"
        name="credite"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br></br>
      <input
        type="number"
        name="password"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <br />
      <button onClick={() => addCredite()}>Click here</button>
    </div>
  );
};

export default Credite;
