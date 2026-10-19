//here we learn how to take dynamic values from the url.
import React from "react";
import { useParams } from "react-router-dom"; //for using hook to take input from the url

function User(){
    const {userid} = useParams()//hook is created here
    return(
    <div className="bg-gray-700 text-white text-3xl p-4">User: {userid}</div>
    )
}

export default User;