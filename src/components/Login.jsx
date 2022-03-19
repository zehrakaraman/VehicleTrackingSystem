import React, { useState } from 'react'; 
import Axios from 'axios';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

import loginImg from '../assets/login.jpg'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const navigate = useNavigate();

    var remainingEntry = 3;

    var block = false;

    const validate = (e) => {
        e.preventDefault();
        console.log("Logging in...");
        Axios.post('http://localhost:5000/login', {
            username: username, 
            password: password
        }).then((response) => {
            //console.log(`message: ${response.data.message}`);
            if (response.data.message == "Wrong username/password combination!") {
                //setLoginStatus(response.data.message)
                remainingEntry = remainingEntry - 1;
                if (remainingEntry <= 0) {
                    //alert("VERIFICATION SCREEN..")
                    block = true;
                } else {
                    alert(response.data.message);
                } 
            } else {
                navigate("/dashboard");
                //console.log(response.data)
            } 
        });
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>

            <div className='bg-gray-100 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h2 className='text-4xl font-bold text-center py-6'>VEHICLE TRACKING SYSTEM.</h2>
                    <div className='flex flex-col py-2'>
                        <label>Username</label>
                        <input disabled={true} disabled={false} className='border p-2' type="text" onChange={(e)=> {setUsername(e.target.value)}} />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input className='border p-2' type="password" onChange={(e)=> {setPassword(e.target.value)}}  />
                    </div>
                    <button onClick={validate} disabled={block ? true : false} className='border w-full my-5 py-2 bg-gray-700 hover:bg-sky-800 text-white'>Sign In</button>
                    <div className='flex justify-between'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <p>Create an account</p>
                    </div>
                </form>
                <h2 className='text-1xl font-bold text-center py-6'>{loginStatus}</h2>
            </div>
        </div>
    )
}