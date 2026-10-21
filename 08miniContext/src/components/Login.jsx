//iss project hmne ek basic registration page bnaya hai. aab ye kaam to simple ek file se hi ho skta tha but hmara maksad ye sikhna tha ki multiple files(Login, Profilem, UserContextProvider) ko kaise synce kren taki data share kiya jaa ske
import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault() //ye line isliye likhi hai taki form submit hone ke baad page reload na ho jaye. kyuki by default form submit hone ke baad page reload ho jata hai.
        setUser({username, password})
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
            {" "}
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default login;