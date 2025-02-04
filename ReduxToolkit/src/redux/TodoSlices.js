import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const TodoSlice = createSlice(
    {
        name : "todos",
        initialState,
        reducers : {
            addTask(state,action){
                const newState = [...state,action.payload]
                return newState
            },
            deleteTask(state,action){
                const newState = state.filter(item => item.id !== action.payload)
                return newState
            },
            editTask(state,action){
                const newState = state.map(item => item.id === action.payload.id ? action.payload : item)
                return newState
            }
        }
    }
)
export default TodoSlice.reducer;
export const {addTask , deleteTask , editTask} = TodoSlice.actions;