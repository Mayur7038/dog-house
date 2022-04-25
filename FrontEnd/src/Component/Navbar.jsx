import { Link } from "react-router-dom"
import { useSelector  } from "react-redux"



export const Navbar = ()=>{


   const {user} = useSelector((store)=> store.user);

    return <div className="navbar">


    <Link to={"/"}> Home </Link>
    <Link to={user!==null ? "/listing/create" : "/login" } > Create List  </Link>
    <Link to={"/signUP"} > SignUp </Link>
    <Link to={"/login"}> Login </Link>
    
    </div>
}