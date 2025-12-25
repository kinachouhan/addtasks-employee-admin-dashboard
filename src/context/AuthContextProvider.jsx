import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utilities/LocalStorage";



export const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const { employees, admin } = getLocalStorage()
        setUserData({ employees, admin })
    }, [])
    
   
    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}