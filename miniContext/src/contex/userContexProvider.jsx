import React, { Children } from "react";
import userContex from "./useContex";

const UseContexProvider = ({Children})=>{
   return (
    <userContex>
    {Children}
    </userContex>
   )
}

export default UseContexProvider;
