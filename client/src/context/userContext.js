import {createContext, useContext, useState} from "react";
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import toast from "react-hot-toast";
import {auth} from "../firebase";

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    onAuthStateChanged(auth, user => {
        setUser(user || false)
    })

    const handleLogIn = async (email, password) => {
        setIsLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err) {
            toast.error(err.code)
        }
        setIsLoading(false)
    }

    const handleLogout = async () => {
        setIsLoading(true)
        try {
            await signOut(auth)
        } catch (err) {
            toast.error(err.code)
        }
        setIsLoading(false)
    }

    const values = {
        user, isLoading, handleLogIn, handleLogout
    }
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
