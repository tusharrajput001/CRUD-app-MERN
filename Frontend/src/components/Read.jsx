import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function getData() {
    try {
      const response = await fetch("http://localhost:5000");
      const result = await response.json();
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      setData(result);
    } catch (error) {
      setError(error.message);
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error);
      }

      setData(prevData => prevData.filter(item => item._id !== id)); // Update data after deletion
      
      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="container my-2">
      <h2 className="text-center">All Data</h2>
      <div className="row">
        {data.map((ele) => (
          <div key={ele._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="text-muted">{ele.age}</p>
                <a href="#" className="card-link" onClick={() => handleDelete(ele._id)}>
                  Delete
                </a>
                <Link to={`/${ele._id}`} className="card-link">
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
