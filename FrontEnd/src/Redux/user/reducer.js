import {Login} from "./action"

const initState = {
    user : null
}

export const UserReducer = (store = initState , {type , payload})=>{
    
    switch (type){

        case Login : 
          return {...store , user : payload}


        default : 

          return store
    }
}