
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const ProviderUserContext = ({children}) => {
    const [currentUser , setCurrentUser] = useState(JSON.parse(localStorage.getItem('user'))  || null);
    const login = (info) => {
        setCurrentUser(info);
    }
    const logout = () => {
        setCurrentUser(null);
    }
    useEffect(() => {
            localStorage.setItem('user' ,JSON.stringify(currentUser) );
    },[currentUser])

    return (
        <UserContext.Provider  value={{login , logout , currentUser}}>
            {children}
        </UserContext.Provider>
    )
}