import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

export default function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState(null);

  const sendDataToAPI = () => {
    axios.put(`https://62b2c1f020cad3685c93262c.mockapi.io/users/${ID}`, {
      firstName,
      lastName,
    });
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));

    setLastName(localStorage.getItem("lastName"));

    setID(localStorage.getItem("ID"));
  }, []);
  return (
    <div className="container container-fluid">
      <div className="row mt-5">
        <div className="col-md-5">{/* empty */}</div>

        <div className="col-md-5">
          <div className="card">
            <h5 className="card-header">Update User Information</h5>
            <p className="card-body">
              <Form>
                <Form.Field>
                  <div className="mb-3">
                    <label>First Name</label> <br />
                    <input
                      name="fname"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                    />
                  </div>
                </Form.Field>
                <Form.Field>
                  <div className="mb-3">
                    <label>Last Name</label> <br />
                    <input
                      name="lname"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                    />
                  </div>
                </Form.Field>
                <Button
                  className="btn btn-success"
                  type="submit"
                  onClick={sendDataToAPI}
                >
                  Update
                </Button>
              </Form>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
