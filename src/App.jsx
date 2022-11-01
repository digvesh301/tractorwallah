import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css.map";

import Navbar from "./Navbar";
import Currentuser from "./Currentuser";
import Profile from "./Profile";
import Additem from "./Additem";
import Threser from "./addItemComponent/Threser";
import Throlley from "./addItemComponent/Throlley";
import Dati from "./addItemComponent/Dati";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Rap from "./addItemComponent/Rap";
import Madh from "./addItemComponent/Madh";
import Vavetar from "./addItemComponent/Vavetar";
import Motor from "./addItemComponent/Motor";
import Mugfali from "./addItemComponent/Mugfali";
import Credite from "./Credite";
import Home from "./Home";
import Login from "./login/Login";
// import Alerts from "./alert/Alerts";
function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    // setPrice();
  }, []);

  // const setPrice = async() =>{
  //   const res =await fetch('/getPrice',{
  //     method:"GET",
  //     headers:{
  //       "Content-type":"application/json"
  //     }
  //   })
  //   const result =await res.json();
  //   if(res.status===200){
  //     dispatch({
  //       type:"SET_PRICE",
  //       price:result
  //     })
  //   }
  // }
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/user" element={<Currentuser />} />
        {/* <Route exact path="/al" element={<Alerts />} /> */}
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/addItem" element={<Additem />} />
        <Route exact path="/addToThresher" element={<Threser />} />
        <Route exact path="/addToTrolley" element={<Throlley />} />
        <Route exact path="/addToDati" element={<Dati />} />
        <Route exact path="/addToRap" element={<Rap />} />
        <Route exact path="/addToMadh" element={<Madh />} />
        <Route exact path="/addToVavetar" element={<Vavetar />} />
        <Route exact path="/Motor" element={<Motor />} />
        <Route exact path="/credite" element={<Credite />} />
        <Route exact path="/addToMugfali" element={<Mugfali />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
