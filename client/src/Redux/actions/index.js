import axios from "axios"
import { ADDNEW_TODO, GETALL_TODO } from "./type";
const API_URL = "http://localhost:8000";

export const addNewTodo = (data) => async(dispatch) =>{

    // Post is used to post a todo 

    try{

      const res = await axios.post(`${API_URL}/todos`,{ data })
      
      dispatch(
        { 
          type : ADDNEW_TODO,
          payload : res.data 
        }
      )
    }catch(error){
        console.log("error in adding new ToDo",error)
    }
}

export const getAllTodos = () => async (dispatch)=>{
  try{

    const res = await axios.get(`${API_URL}/todos`)
    
    dispatch(
      { 
        type : GETALL_TODO,
        payload : res.data 
      }
    )
  }catch(error){
      console.log("error while calling getalltodo api",error)
  }
}
