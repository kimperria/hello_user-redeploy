import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import axios from "axios";
import "./read.css";
import { Link } from "react-router-dom";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62b2c1f020cad3685c93262c.mockapi.io/users`)
      .then((getData) => {
        console.log(getData.data);
        setApiData(getData.data);
      });
  });

//   const setID =(id)=> {
//     console.log(id)
//     localStorage.setItem('ID', id)
//   }

  const setData = (id, firstName, lastName) =>{
    localStorage.setItem('ID', id)
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
  }

  const getData =() =>{
    axios
    .get(`https://62b2c1f020cad3685c93262c.mockapi.io/users`)
    .then((getData) => {
      console.log(getData.data);
      setApiData(getData.data);
    });
  }

  const onDelete =(id) => {
    axios.delete(`https://62b2c1f020cad3685c93262c.mockapi.io/users/${id}`).then(()=>{
      getData();
    })
  }
  return (
    <div  className="container container-fluid">

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button id="update"  onClick={()=> setData(data.id, data.firstName, data.lastName)}>Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                    <Button id="delete" onClick={()=> onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
