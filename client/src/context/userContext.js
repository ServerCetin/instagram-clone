import {createContext, useContext, useEffect, useState} from "react";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import {doc, setDoc, getDoc} from "firebase/firestore";
import toast from "react-hot-toast";
import {auth, db} from "../firebase";

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, async user => {
            if (user) {
                await getDoc(doc(db, "users", user.displayName)).then(fetchedUserData => {
                    let data = {
                        uid: user.uid,
                        fullName: user.displayName,
                        email: user.email,
                        username: auth.currentUser.displayName,
                        emailVerified: user.emailVerified,
                        ...fetchedUserData.data()
                    }
                    setUser(data)
                })
            } else {
                setUser(false)
            }
        })
    }, []);

    const getUserByUsername = async (username) => {
        setIsLoading(true)

        const fetchedUser = await getDoc(doc(db, "users", username))

        if(fetchedUser.exists()){
            setIsLoading(false)
            return fetchedUser.data()
        }else{
            setIsLoading(false)
            toast.error("User not exist!")
            throw new Error("User not exist!")
        }
    }

    const handleLogIn = async (email, password) => {
        setIsLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err) {
            toast.error(err.code)
        }
        setIsLoading(false)
    }

    const handleSignUp = async ({email, password, full_name, username}) => {
        setIsLoading(true)
        try {
            const user = await getDoc(doc(db, "users", username))
            if (user.exists()) {
                toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`)
            } else {
                const response = await createUserWithEmailAndPassword(auth, email, password)
                if (response.user) {

                    await setDoc(doc(db, "users", username), {
                        fullName: full_name,
                        username: username,
                        followers: [],
                        following: [],
                        notifications: []
                    })

                    await updateProfile(auth.currentUser, {
                        displayName: username
                    })

                    return response.user
                }
            }
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
        user, isLoading, handleLogIn, handleLogout, handleSignUp, getUserByUsername
    }
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
