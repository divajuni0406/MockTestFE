import React, { useEffect, useState } from "react";
import { getOneUser, updateUser } from "../../redux/actions/homeCRUD";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateUser.css";
import Navbar from "../../components/Navbar";

const UpdateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const { getUser } = useSelector((state) => state.crud);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchUser = async () => {
    await dispatch(getOneUser({ id }));
  };

  // useEffect(() => {
  //   setUsername(getUser[0].userData[0].username);
  //   setEmail(getUser[0].userData[0].email);
  //   setFirstname(getUser[0].firstname);
  //   setLastname(getUser[0].lastname);
  //   setFullname(getUser[0].fullname);
  //   setAddress(getUser[0].address);
  // }, [getUser]);

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await dispatch(
      updateUser({
        username,
        email,
        firstname,
        lastname,
        fullname,
        address,
        id,
      })
    );
    alert(response.payload.message);
    if (response.payload.statusCode === 200) {
      return navigate("/");
    }
  };

  return (
    <div className="bg-updateUser">
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="col-md-3 input-wrapper text-center">
                <label htmlFor="">Email</label> <br />
                <input
                  className="mt-2"
                  type="text"
                  placeholder={data.userData[0].email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-md-3 input-wrapper text-center">
                <label htmlFor="">Firstname</label> <br />
                <input
                  className="mt-2"
                  type="text"
                  placeholder={data.firstname}
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="col-md-3 input-wrapper text-center">
                <label htmlFor="">Lastname</label> <br />
                <input
                  className="mt-2"
                  type="text"
                  placeholder={data.lastname}
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="col-md-3 input-wrapper text-center">
                <label htmlFor="">Fullname</label> <br />
                <input
                  className="mt-2"
                  type="text"
                  placeholder={data.fullname}
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="col-md-3 input-wrapper text-center">
                <label htmlFor="">Address</label> <br />
                <input
                  className="mt-2"
                  type="text"
                  placeholder={data.address}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-md-1 text-center">
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
