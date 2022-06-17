import React, {useEffect, useState} from "react";
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import "./read.css"

export default function Read(){
    const [apiData, setApiData] = useState([]);
    useEffect(()=> {
        axios.get(`https://62ac411fbd0e5d29af1e3126.mockapi.io/crud`).then((getData)=>{
            console.log(getData.data)
            setApiData(getData.data)
        })
    })
    return(
        <div>
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
                        {apiData.map((data)=> {
                            return(
                                <Table.Row>
                                    <Table.Cell>{data.id}</Table.Cell>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>
                                        <Button id='update'>Update</Button>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button id='delete'>Delete</Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}
                </Table.Body>
            </Table>
        </div>
    )
}