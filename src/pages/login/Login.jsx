import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  userLogin,
  isUserLoggedIn,
  getUserData,
} from "../../redux/actions/login";
import { getCookie, setCookie } from "../../moduleComponents/cookie";
import Navbar from "../../components/Navbar";

const Login = () => {
  const [pinValue, setPinValue] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await dispatch(userLogin({ pinValue }));
    setCookie("userCookie", JSON.stringify(response.payload.sendData), 1);
    alert(response.payload.message);
    dispatch(getUserData(JSON.parse(getCookie("userCookie"))));
    if (response.payload.statusCode === 200) {
      dispatch(isUserLoggedIn(true));
      return navigate("/");
    }
  };

  return (
    <div className="bg-login">
      <Navbar />
      <div className="form-wrapper text-center">
        <p className="mb-2">PIN</p>
        <form action="">
          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            value={pinValue}
            onChange={(e) => setPinValue(e.target.value)}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            required
          />
          <button onClick={handleSubmit}>
            <BsFillArrowLeftSquareFill />
          </button>
        </form>
        <p className="mt-2">Input Your PIN To Login</p>
      </div>
    </div>
  );
};

export default Login;
