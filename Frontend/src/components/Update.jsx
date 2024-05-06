import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const [error, setError] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch single user data
    const getSingleData = async () => {
      try {
        const response = await fetch(`https://crud-app-mern-three.vercel.app/${id}`);
        const result = await response.json();

        if (response.ok) {
          setName(result.name);
          setEmail(result.email);
          setAge(result.age);
        } else {
          setError("Failed to fetch user data");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    // Call the function to fetch single user data
    getSingleData();
  }, [id]); // Dependency array to re-run effect when id changes

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, age };

    try {
      const response = await fetch(`https://crud-app-mern-three.vercel.app/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        navigate("/all");
      } else {
        setError("Failed to update user data");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container my-2">
      <h1 className="h1 text-center">Edit Data</h1>
      {error && <div className="alert alert-danger"> {error} </div>}
      <form className="form" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-info">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
