import axios from "axios";

export const GET_DATA = 'GET_DATA';
export const GET_DATA_LOADING = 'GET_DATA_LOADING';

export const getData = (data)=>({type : GET_DATA , payload : data} );
export const getDataLoading = ()=> ({type : GET_DATA_LOADING} ) ;


export const getDataHouse = (request)=>  async (dispatch)=>{
    
    dispatch(getDataLoading());
    const {data} = await axios.get(`http://localhost:5000/houses?${request}`);

    dispatch(getData(data))
}

export const  getCostSort=(elem)=> async(dispatch)=> {
    dispatch(getDataLoading());
    const {data} = await axios.get(`http://localhost:5000/houses/sort/${elem}`);
    dispatch(getData(data));
}

export const  getRatingSort=(elem)=> async(dispatch)=> {
    dispatch(getDataLoading());
    const {data} = await axios.get(`http://localhost:5000/houses/sort/rating/${elem}`);
    dispatch(getData(data));
}

