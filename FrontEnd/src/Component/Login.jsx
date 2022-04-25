import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {login} from "../Redux/user/action";

import {  useDispatch } from "react-redux"




export const Login = ()=>{

   const dispatch = useDispatch();


    const navigate = useNavigate();



    const [Data , setData] = useState({
        email : "",
        password : ""
    })


    const handleChange = (e)=>{

        const {id,value} = e.target;

        setData({
            ...Data,
            [id] : value
        })

        
    }
    
    const handleSubmit = ()=>{
        
        axios.post("http://localhost:5000/user/login" , Data ).then(({data})=>{
            

            dispatch(login(data))
            navigate("/")
            
        }).catch((e)=>{
            console.log(e);
        })
        
    }



    return <>

        <h1> Log In  </h1>

        <TextField id="email" onChange={(e)=> handleChange(e) } className='email' label="email"   variant="filled" sx={{marginTop : "50px"}} />
        <br />
        <br />
        <TextField id="password" className='password'  onChange={(e)=> handleChange(e) }  label="password" variant="filled" />
        <br />
        <br />
        <Button variant="contained" onClick={ ()=> handleSubmit() }  > Login </Button>


    
    </>
}