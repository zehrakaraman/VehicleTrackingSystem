import * as React from 'react';
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Container = styled.div`
    width: auto;
    margin-left: 96vw;
    position: relative;
`
export default function Exit() {
    const navigate = useNavigate();

    //const currDate = new Date().toLocaleDateString();
    //const currTime = new Date().toLocaleTimeString();

    const exit = (e) => {
        e.preventDefault();
        console.log("Exitting..");
        Axios.post('http://localhost:5000/dashboard')
        .then((response) => {
            navigate('/login');
            console.log(response.data.message);
        });
        
    };

    return (
        <Container>
            <Button onClick={exit} endIcon={<CloseIcon color='action' fontSize='large'/>}></Button>
        </Container>
    )
}