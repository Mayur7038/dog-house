import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector , useDispatch } from "react-redux"
import { getDataHouse , getCostSort,getRatingSort } from "../Redux/Data/action"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Loader} from "./Loader"

export const Home = ()=>{


   const dispatch = useDispatch();

   const {data , loading } = useSelector((store)=> store.houses);

   const {user} = useSelector((store)=> store.user)
   
    useEffect(()=>{

        getData()
        
    },[])
    
    const getData = ()=>{

        dispatch(getDataHouse())
    }
    const [Cite , setcite] = useState("");

   let count = 1;

    return loading ? <Loader/>  : <>


    <div className="filters">

        <div>
        <TextField label="City" onChange={(e)=> setcite(e.target.value) }   variant="outlined"/>
        <Button variant="contained" onClick={()=> dispatch(getDataHouse(`City=${Cite}`)) }  sx={{ margin : "10px"  }} > City</Button>

        </div>

        <div><Button variant="contained" onClick={()=> dispatch(getDataHouse(`Verified=Yes`)) } > Only Verified</Button></div>
        <div> 
            <p> Cost Per Day </p>

            <select className="select"  onChange={(e)=> dispatch(getCostSort(e.target.value))  } >

                <option value="">  </option>
                <option value="desc"  > High To Low </option>
                <option value="asc"> Low To High </option>

            </select>
        </div>
        <div>  
        <p> Ratings </p>
            <select className="select" name="Ratings" onChange={(e)=> dispatch(getRatingSort(e.target.value))  } >

                <option value="">  </option>
                <option value="desc"  > High To Low </option>
                <option value="asc"> Low To High </option>

            </select>
        </div>

    </div>

    <table>
        <thead>
            <tr>
                <th> ID </th>
                <th> Name </th>
                <th> City </th>
                <th> Address </th>
                <th> Capacity </th>
                <th> Cost Per Day </th>
                <th> Verified </th>
                <th> Rating </th>
            </tr>

        </thead>
        <tbody>

            

            {

            
                
                data.map((elem)=>{

                   

                    return  <tr key={elem._id}> 

                        <td> {count++} </td>
                     
                        <td> {elem.Name} </td> 
                        <td> {elem.City} </td>
                        <td> {elem.Address} </td>
                        <td> {elem.Capacity} </td>
                        <td> {elem.Cost_per_day} </td>
                        <td> {elem.Verified} </td>
                        <td> {elem.Rating} </td>
                        <td>
                            { user!==null && user.role === "manager" ? <Link to={`/listing/edit/${elem._id}`}> Edit </Link> : "" }
                        </td>
                        <td>
                            
                            <Link to={`/listing/create/${elem._id}`} > More Details</Link>
                        </td>

                       
                    </tr>
                 

                    
                })
            }

        </tbody>
    </table>
    </>
}