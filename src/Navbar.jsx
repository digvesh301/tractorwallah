import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alerts from "./alert/alert";

const Navbar = () => {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectDate, setSelectData] = useState({});
  useEffect(() => {
    fetch_data();
  }, []);


  
  const onChangeHandler = (e) => {
    const text = e.target.value;
    console.log(text);
    let matches = [];
    if (text.length > 0) {
      matches = data.filter((user) => {
        const regex = new RegExp(`${text}`);
        return user.name.match(regex);
      });
    }
    setText(text);
    setSuggestions(matches);
  };

  const onChangeSuggestion = (name) => {
    setText(name);
    setSuggestions([]);
  };

  const searchButtonClicked = async () => {
    try {
      const res = await fetch(`/user/${text}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        const result = await res.json();
        dispatch({
          type: "SET_USER",
          user: result,
        });
        dispatch({
          type: "IS_USER",
          isUser: true,
        });

        navigate("/addItem");
      } else {
        dispatch({
          type: "IS_USER",
          isUser: false,
        });
       
      Alerts("Please Login first",0);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetch_data = async () => {
    const fetchData = await fetch("/home", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const datas = await fetchData.json();
    setData(datas);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link class="nav-link active" aria-current="page" to="/login">
                  login
                </Link>
              </li>
              {state.isUser ? (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to="/Profile">
                      Profile
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to="/credite"
                    >
                      Credite
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/user">
                      Bill
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/addItem">
                      AddItem
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
            <div class="d-flex" className="nav_serarch">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search User"
                aria-label="Search"
                onChange={onChangeHandler}
                value={text}
              />
              <button
                class="btn btn-outline-dark"
                type="submit"
                onClick={() => searchButtonClicked()}
              >
                Search
              </button>
             
            </div>
          </div>
        </div>
      </nav>
      {suggestions.map((suggestions, i) => {
        return (
          <div
            key={i}
            className="suggestions"
            onClick={() => onChangeSuggestion(suggestions.name)}
          >
            {suggestions.fullName}
          </div>
        );
      })}
      <ToastContainer/>
    </div>
  );
};

export default Navbar;
