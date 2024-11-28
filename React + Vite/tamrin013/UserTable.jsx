import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import "./UserTable.css";

// Modal
const Modal = ({ isOpen, onClose, user, onSave }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: user,
  });

  const onSubmit = (data) => {
    onSave({ ...user, ...data });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name:
            <Controller
              name="name"
              control={control}
              render={({ field }) => <input {...field} />}
            />
          </label>
          <label>
            Username:
            <Controller
              name="username"
              control={control}
              render={({ field }) => <input {...field} />}
            />
          </label>
          <label>
            Email:
            <Controller
              name="email"
              control={control}
              render={({ field }) => <input {...field} />}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

// User List
const UserTable = () => {
  const [users, setUsers] = useState([]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSave = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  

  return (
    <div className="Wrapper">
      <header className="header">
        <h1>Profile</h1>
      </header>

      <section className="main">
        <div className="sidebar">
          <h4>Sidebar</h4>
          <ul>
            <li>Home</li>
          </ul>
        </div>

        <div className="home">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>

                  <th>UserName</th>

                  <th>Email</th>

                  <th>Edit</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>

                    <td>{user.username}</td>

                    <td>{user.email}</td>

                    <td>
                      <button onClick={() => handleEditClick(user)}>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer>Footer</footer>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
        onSave={handleSave}
      />
    </div>
  );
};

export default UserTable;
