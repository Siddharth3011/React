import React from "react";
import UserContext from "../Usercontext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null) //intial value null hoga jab tak login na ho jaye
    return(
        <UserContext.Provider value={{user, setUser}}> {/*yahan humne value me user aur setUser pass kiya hai taki hume login component me setUser mil jaye aur profile component me user mil jaye*/}
            {children} {/*ye children hume app.js me milega jaha humne UserContextProvider ko wrap kiya hai */}
        </UserContext.Provider> //.Provider ek component hai jo hume context me value provide karta hai
    )
}

export default UserContextProvider 