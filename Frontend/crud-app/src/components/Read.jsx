import React, { useEffect, useState } from "react";

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function getData() {
    try {
      const response = await fetch("http://localhost:5000");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-2">
      <h2 className="text-center">All Data</h2>
      {error && <p>{error}</p>}
      <div className="row">
        {data.map((ele) => (
          <div key={ele._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="text-muted">{ele.age}</p>
                <a href="#" className="card-link">
                  Delete
                </a>
                <a href="#" className="card-link">
                  Edit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
