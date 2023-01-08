import React from 'react'
import { TextField, Button, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
const Feild = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);
    const getData = () => {
        name !== "" && email !== "" && setData([...data, { name, email }])
        setName("")
        setEmail("")


    }
    return (
        <div className="container">
            <div className='form'>
                <div className="main">
                    <Stack direction="row" spacing={2}>
                        <TextField className='input' id="outlined-basic" label="name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField className='input' id="outlined-basic" label="Email" value={email} variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                        <Button variant="contained" onClick={getData}><AddIcon /></Button>
                    </Stack>
                </div>
                <div className="main_table">

                    <Table striped>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((ele, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{ele.name}</td>
                                            <td>{ele.email}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Feild