import {createContext, useContext, useState} from "react";
import {onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import {doc, setDoc, getDoc} from "firebase/firestore";
import toast from "react-hot-toast";
import {auth, db} from "../firebase";

const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    onAuthStateChanged(auth, async user => {
        if(user){
            await getDoc(doc(db, "users", user.displayName)).then(fetchedUserData => {
                let data = {
                    uid: user.uid,
                    fullName: user.displayName,
                    email: user.email,
                    username: auth.currentUser.displayName,
                    emailVerified: user.emailVerified,
                    ...fetchedUserData.data()
                }
                //setUser(data) // TODO if I use this data, refreshes infinitely
                setUser(user)
            })
        }else{
            setUser(false)
        }
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

    const handleSignUp = async ({email, password, full_name, username}) => {
        setIsLoading(true)

        try {
            const user = await getDoc(doc(db, "users", username))

            if (user.exists()) {
                toast.error(`Username ${username} is already taken. Please try different username`)
            } else {
                createUserWithEmailAndPassword(auth, email, password)
                    .then(async (userCredential) => {
                        if (userCredential.user) {

                            await setDoc(doc(db, "users", username), {
                                fullName: full_name,
                                email: email,
                                followers: [],
                                following: [],
                                notifications: []
                            })

                            await updateProfile(auth.currentUser, {
                                displayName: username
                            })

                            return userCredential.user
                        }
                    }).catch(err =>{
                    toast.error(err.code)
                })
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
        user, isLoading, handleLogIn, handleLogout, handleSignUp
    }
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
