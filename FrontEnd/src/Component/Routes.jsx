import {Routes, Route} from "react-router-dom"
import { Create } from "./Create"
import { Details } from "./Detail"
import { Edit } from "./Edit"
import { Home } from "./Home"
import { Login } from "./Login"
import { SignUp } from "./SignUp"


export const Router = ()=>{



    return <>


    <Routes >
        <Route path="/" element={<Home/>}  >   </Route>
        <Route path="/listing/create" element={ <Create/>} >   </Route>
        <Route path="/listing/create/:id" element={ <Details/>} >   </Route>
        <Route path="/listing/edit/:id" element={<Edit/>} ></Route>
        <Route path="/signUP" element={<SignUp/>} ></Route>
        <Route path="/login" element={<Login/> } ></Route>

    </Routes>


        
    
    </>
}