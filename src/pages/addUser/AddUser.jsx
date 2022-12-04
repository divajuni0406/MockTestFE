import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions/homeCRUD";
import "./AddUser.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await dispatch(
      addUser({ username, email, firstname, lastname, fullname, address })
    );
    alert(response.payload.message);
    if (response.payload.statusCode === 200) {
      return navigate("/");
    }
  };

  return (
    <div className="bg-addUser">
      <Navbar />
      <div className="container">
        <form>
          <div className="row justify-content-center pt-4">
            <div className="col-md-3 input-wrapper text-center">
              <label htmlFor="">Username</label> <br />
              <input
                className="mt-2"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-md-3 input-wrapper text-center">
              <label htmlFor="">Email</label> <br />
              <input
                className="mt-2"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-3 input-wrapper text-center">
              <label htmlFor="">Firstname</label> <br />
              <input
                className="mt-2"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="col-md-3 input-wrapper text-center">
              <label htmlFor="">Lastname</label> <br />
              <input
                className="mt-2"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="col-md-3 input-wrapper text-center">
              <label htmlFor="">Fullname</label> <br />
              <input
                className="mt-2"
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="col-md-3 input-wrapper text-center">
              <label htmlFor="">Address</label> <br />
              <input
                className="mt-2"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-md-1 text-center">
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
