import React, {useEffect} from "react";
import { Table } from 'semantic-ui-react';
import axios from 'axios';

export default function Read(){

    useEffect(()=> {
        axios.get(`https://62ac411fbd0e5d29af1e3126.mockapi.io/crud`).then((getData)=>{
            console.log(getData.data)
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
                <Table.Row>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                        </Table.Row>
            </Table.Body>
            </Table>
        </div>
    )
}