import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const [error, setError] = useState("");
  const {id} = useParams();

  const getSingleUser = async () =>{


    const result = await response.json();

    if(!response.ok){
      console.log(result.error);
      setError(result.error);
    }

    if(response.ok){
      setError("");
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);

    }

    useEffect(() =>{
      getSingleUser();
    },[])

    const response = await fetch(`http://localhost:5000/${id}`);

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
  }


  return (
    <div className="container my-2">
      {error && <div class="alert alert-danger">{error}</div>}
      <h2 className="text-center">Edit the data</h2>

      <div className="container">
        <form>
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
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">age</label>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update