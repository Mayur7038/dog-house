import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {login} from "../Redux/user/action";
import { useSelector , useDispatch } from "react-redux"


export const SignUp = ()=>{

   const dispatch = useDispatch();

   const {user} = useSelector((store)=> store.user)

   
    const navigate = useNavigate();

    const [Data , setData] = useState({
        name : "",
        email : "",
        password : "",
        role : ""

    })

    const handleChange = (e)=>{

        const {id,value} = e.target;

        setData({
            ...Data,
            [id] : value
        })
    }

    const handleSubmit = ()=>{

        axios.post("http://localhost:5000/user/signUp" , Data).then(({data})=>{

          dispatch(login(data))
          navigate("/");

        }).catch((e)=>{
            alert("user already Exist")
        })

        
        
    }

    return <>

        <h1> SignUp  </h1>
        <TextField id="name" onChange={(e)=> handleChange(e) }  label="name"   variant="filled" />
        <br />
        <br />
        <TextField id="email" onChange={(e)=> handleChange(e) }  label="email"   variant="filled"  />

        <br />
        <br />
        <TextField id="password" className='password'  onChange={(e)=> handleChange(e) }  label="password" variant="filled" />
        <br />
        <br />
        <h3> Type Of User </h3>
        <select  id="role" onChange={(e)=> handleChange(e) }  >

            <option value=""> </option>
            <option value="manager"> admin </option>
            <option value="resident"> users </option>

        </select>

        <br />
        <br />


        <Button variant="contained" onClick={ ()=> handleSubmit() }  > Register </Button>

       

    </>

}