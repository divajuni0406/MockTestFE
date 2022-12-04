import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../../redux/actions/homeCRUD";
import Navbar from "../../components/Navbar";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { getAllUsers } = useSelector((state) => state.crud);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  getAllUsers.map((data) => {
    console.log(data, "vvvvvvvvvvvvvvvvvvvvvvvvvv");
  });

  const handleDelete = async (id) => {
    await dispatch(deleteUser({ id }));
    await dispatch(getUsers());
  };

  return (
    <div className="bg-home">
      <Navbar />
      <div className="container mt-5">
        <Link to={"/add-user"} className="mb-3">
          <button className="add-btn">Add</button>
        </Link>
        <table className="table table-striped table-bordered table-light text-center">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Fullname</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {getAllUsers.length === 0 && (
              <tr>
                <td colSpan={8}>No Userdata</td>
              </tr>
            )}
            {getAllUsers.map((data, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{data.userData[0].username}</td>
                <td>{data.userData[0].email}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.fullname}</td>
                <td>{data.address}</td>
                <td>
                  <Link to={`/user-profile/${data.userId}`}>
                    <button className="action-btn">Read</button>
                  </Link>
                  <Link
                    to={`/update-user/${data.userId}`}
                    className="ms-3 me-3"
                  >
                    <button className="action-btn">Update</button>
                  </Link>
                  <button
                    className="action-btn"
                    onClick={() => handleDelete(data.userId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
