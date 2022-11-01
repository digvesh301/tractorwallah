import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Alerts = (props,key) => {

      switch (key) {
        case 0:
          toast.warning(`${props}`, {
            position: toast.POSITION.TOP_RIGHT
        });
          break;
        case 1:
          toast.error(`${props}`, {
            position: toast.POSITION.TOP_RIGHT
        });
          break;
        default:
          break;
      }

      

  };


export default Alerts;
