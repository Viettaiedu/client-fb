
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
    const update = (info) => {
        setCurrentUser(info);
    }
    useEffect(() => {
            localStorage.setItem('user' ,JSON.stringify(currentUser) );
            setTimeout(() => {
                setCurrentUser(null);
            },1000 * 60 * 60 * 2);
    },[currentUser])

    return (
        <UserContext.Provider  value={{login , logout ,update, currentUser}}>
            {children}
        </UserContext.Provider>
    )
}