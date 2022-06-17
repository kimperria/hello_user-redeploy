import React, {useState, useEffect} from "react";
import {Form, Button} from 'semantic-ui-react';
import axios from 'axios';

export default function Update(){
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [ID, setID] = useState(null);

    const sendDataToAPI = ()=>{
        axios.put(`https://62ac411fbd0e5d29af1e3126.mockapi.io/crud/${ID}`,
        {
            firstName,
            lastName
        })
    }

    useEffect(()=>{
        setFirstName(localStorage.getItem('firstName'));

        setLastName(localStorage.getItem('lastName'));

        setID(localStorage.getItem('ID'))
    }, [])
    return (
        <div>
             <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname" 
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)} 
                    placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                <label>Last Name</label>
                <input name="lname"
                value={lastName} 
                onChange={(e)=> setLastName(e.target.value)} 
                placeholder='Last Name' />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>Update</Button>
            </Form>
        </div>
    );
}