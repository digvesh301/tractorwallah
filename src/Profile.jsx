import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div>
      <div
        class="container rounded bg-white mt-5 mb-5"
        className="Profile__Setting"
      >
        {state.isUser ? (
          <div class="row">
            <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  class="rounded-circle mt-5"
                  width="150px"
                  alt="imag"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <span class="font-weight-bold">{state.user[0].fullName}</span>
                <span class="text-black-50">{state.user[0].email}</span>
              </div>
            </div>

            <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <label class="labels">Name</label>

                    <input
                      type="text"
                      class="form-control"
                      placeholder="first name"
                      value={state.user[0].fullName}
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Surname</label>
                    <input
                      type="text"
                      class="form-control"
                      value={state.user[0].name}
                      placeholder="surname"
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Mobile Number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter phone number"
                      value={state.user[0].phone}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter address line 1"
                      value={state.user[0].address}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Postcode</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter address line 2"
                      value={state.user[0].pincode}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">State</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter address line 2"
                      value={state.user[0].State}
                    />
                  </div>

                  <div class="col-md-12">
                    <label class="labels">Email ID</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="enter email id"
                      value={state.user[0].email}
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="labels">Country</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="country"
                      value="india"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">State/Region</label>
                    <input
                      type="text"
                      class="form-control"
                      value={state.user[0].State}
                      placeholder="state"
                    />
                  </div>
                </div>
                <div class="mt-5 text-center">
                  <button class="btn btn-primary profile-button" type="button">
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience">
                  <span>Edit Experience</span>
                  <span class="border px-3 p-1 add-experience">
                    <i class="fa fa-plus"></i>&nbsp;Experience
                  </span>
                </div>
                <br />
                <div class="col-md-12">
                  <label class="labels">વિધા</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="experience"
                    value={state.user[0].acer}
                  />
                </div>{" "}
                <br />
                <div class="col-md-12">
                  <label class="labels">Additional Details</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="additional details"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          navigate("/")
        )}
      </div>
    </div>
  );
};

export default Profile;
