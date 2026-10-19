//here we learn how to use the api call and show the value on our website.
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom"; //this package is imported to use the Loader function.

function Github(){
    const data = useLoaderData() //here it is created.
    //this take time to load the data so we use loader so we declare a new constant function and export it.
    // const [data, setData] = useState([]) //page mein render krne ke liye ye useState hook use kiya gya hai
    // useState(() =>{
    //     fetch('https://api.github.com/users/siddharth3011') //it fetch the values using api
    //     .then(response => response.json()) //the response came in string formate which will then converted to json formate.
    //     .then(data => {
    //         console.log(data); //it prints the data but we have to use it in our web
    //         setData(data) //so we use setData
            
    //     })
    // }, [])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}  {/* here .followers is a methoid that is used for fetching data */}
       <img src="{https://avatars.githubusercontent.com/u/185775486?v=4}" alt="Git picture" width={300} /> 
        </div>
        
    )
}
export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/siddharth3011')
    return response.json(); //again converting string data to json file
}