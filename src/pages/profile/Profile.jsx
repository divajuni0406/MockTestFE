import React, { useEffect } from "react";
import { getOneUser } from "../../redux/actions/homeCRUD";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Profile.css";
import Navbar from "../../components/Navbar";

const Profile = () => {
  const dispatch = useDispatch();
  const { getUser } = useSelector((state) => state.crud);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneUser({ id }));
  }, []);

  return (
    <div className="bg-profile">
      <Navbar />
      <div className="container">
        <form>
          {getUser.map((data, index) => (
            <div className="row justify-content-center pt-4" key={index}>
              <div className="col-md-3 input-wrapper text-center">
                <label htmlFor="">Username</label> <br />
                <input
                  className="mt-2"
                  type="text"
                  placeholder={data.userData[0].username}
                  readOnly
                />
              </div>
              <div className="col-md-3 input-wrapper text-center">
                <label htmlFor="">Email</label> <br />
                <input
                  className="mt-2"
                  type="text"
                  placeholder={data.userData[0].email}
                  readOnly
                />
              </div>
              <div className="col-md-3 input-wrapper text-center">
                <label htmlFor="">Firstname</label> <br />
                <input
                  className="mt-2"
                  type="text"
                  placeholder={data.firstname}
                  readOnly
                />
              </div>
              <div className="col-md-3 input-wrapper text-center">
                <label htmlFor="">Lastname</label> <br />
                <input
                  className="mt-2"
                  type="text"
                  placeholder={data.lastname}
                  readOnly
                />
              </div>
              <div className="col-md-3 input-wrapper text-center">
                <label htmlFor="">Fullname</label> <br />
                <input
                  className="mt-2"
                  type="text"
                  placeholder={data.fullname}
                  readOnly
                />
              </div>
              <div className="col-md-3 input-wrapper text-center">
                <label htmlFor="">Address</label> <br />
                <input
                  className="mt-2"
                  type="text"
                  placeholder={data.address}
                  readOnly
                />
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Profile;
