import React, { useEffect, useState } from "react";
import "./Currentuser.css";
import { useStateValue } from "./StateProvider";
import { getUserTotal } from "./reducer";
import { useNavigate, Link } from "react-router-dom";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

var Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Current_user = () => {
  const [state, dispatch] = useStateValue();
  const [history, getHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch_data();
  }, []);

  useEffect(() => {
    dispatch({
      type: "ADD_TOTAL_PRICE",
      price: getUserTotal(history),
    });
  }, [history]);

  // console.log(st);

  const fetch_data = async () => {
    const res = await fetch(`/getHistory/${state.user[0].email}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (res.status === 200) {
      const result = await res.json();
      getHistory(result.History.map((data) => data));
    } else {
      navigate("/");
    }
  };

  const pdf = async() => {
    console.log("hello");
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = await new jsPDF(orientation, unit, size);
    
    doc.setFontSize(15);

    const title = "My Awesome Report";
    const headers = [
      [" #", "Item", "Quantity", "Unit Price", " Total Price", "Date"],
    ];

    const data = await history.map((data, id) => [
      id + 1,
      data.name,
      data.corp,
      data.Quantity,
      data.UnitPrice,
      data.TotalPrice,
      data.timeStamps,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };

  return (
    <div class="container bootstrap snippets bootdeys">
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default invoice" id="invoice">
            <div class="panel-body">
              <div class="invoice-ribbon">
                <div class="ribbon-inner">PAID</div>
              </div>
              <div class="row">
                <div class="col-md-6 top-left">
                  <i class="fa fa-rocket"></i>
                </div>

                <div class="col-md-6 top-right">
                  <h3 class="marginright">INVOICE-1234578</h3>
                  <span class="marginright">14 April 2014</span>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-4 from">
                  <p class="lead marginbottom">From : Harsukhbai</p>
                  <p>Kadaya</p>
                  <p>Gujrat, 362245</p>
                  <p>Phone: 9099306082</p>
                  <p>Email: digveshdadhaniya54@gmail.com</p>
                </div>
                {state.isUser ? (
                  <>
                    <div class="col-md-4 to">
                      <p class="lead marginbottom">To : {state.user[0].name}</p>
                      <p>{state.user[0].address}</p>
                      <p>
                        {state.user[0].State} , {state.user[0].pincode}
                      </p>
                      <p>Phone: {state.user[0].phone}</p>
                      <p>Email: {state.user[0].email}</p>
                    </div>
                  </>
                ) : (
                  navigate("/")
                )}

                <div class="col-md-4 text-right payment-details">
                  <p class="lead marginbottom payment-info">Payment details</p>
                  <p>Date: 14 April 2014</p>
                  <p>VAT: DK888-777 </p>
                  <p>Total Amount: ${state.TotalPrice}</p>
                  <p>Account Name: Harsukhbai D</p>
                </div>
              </div>

              <div class="row table-row">
                <table class="table table-striped" id="example">
                  <thead>
                    <tr>
                      <th class="text-center" style={{ width: "5%" }}>
                        #
                      </th>
                      <th style={{ width: "50%" }}>Item</th>
                      <th style={{ width: "10%" }}>Item</th>
                      <th class="text-right" style={{ width: "15%" }}>
                        Quantity
                      </th>
                      <th class="text-right" style={{ width: "15%" }}>
                        Unit Price
                      </th>
                      <th class="text-right" style={{ width: "15%" }}>
                        Total Price
                      </th>
                      <th class="text-right" style={{ width: "15%" }}>
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.length > 0
                      ? history.map((data, id) => {
                          const date = new Date(data.timeStamps);
                          return (
                            <tr key={id}>
                              <td class="text-center">{id + 1}</td>
                              <td>{data.name}</td>
                              <td>{data.corp}</td>
                              <td class="text-right">{data.Quantity}</td>
                              <td class="text-right">{data.UnitPrice}</td>
                              <td class="text-right">{data.TotalPrice}</td>
                              <td class="text-right">
                                {date.getDate()}/{Months[date.getMonth()]}/
                                {date.getFullYear()}
                              </td>
                            </tr>
                          );
                        })
                      : <td>wait</td> / 0}

                    <tr>
                      <td colspan="4"></td>
                      <td class="text-right">
                        <strong>Total</strong>
                      </td>
                      <td class="text-right">
                        <strong>${state.TotalPrice}</strong>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td colspan="4"></td>
                      <td class="text-right">
                        <strong>Taxes</strong>
                      </td>
                      <td class="text-right">
                        <strong>N/A</strong>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="row">
                <div class="col-md-6 margintop mb-5">
                  <p class="lead marginbottom">THANK YOU!</p>

                  <button
                    class="btn btn-success"
                    id="invoice-print"
                    onClick={() => pdf()}
                  >
                    <i class="fa fa-print"></i> Print Invoice
                  </button>
                  <button class="btn btn-danger">
                    <i class="fa fa-envelope-o"></i> Mail Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current_user;
