import React, { useEffect } from "react";
import { getUserData, isUserLoggedIn } from "../redux/actions/login";
import { getCookie, eraseCookie } from "../moduleComponents/cookie";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { userInformation, isLoggedIn } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(isUserLoggedIn(false));
    eraseCookie("userCookie");
  };

  useEffect(() => {
    if (getCookie("userCookie") !== null) {
      dispatch(getUserData(JSON.parse(getCookie("userCookie"))));
      dispatch(isUserLoggedIn(true));
      console.log(userInformation, "aaaaaaaaaaaa");
      return;
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
          </ul>
          <Link
            to={`/user-profile/${userInformation.id}`}
            className="username-text"
          >
            {isLoggedIn ? userInformation.username : ""}
          </Link>
          {isLoggedIn ? (
            <button
              className="ms-4 btn-logout text-center"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"} className="ms-4 login-text text-center">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
