import { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, 
    updateEmail, updateProfile, deleteUser } from "firebase/auth";
import {auth} from "./auth";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function updateUserEmail(email) {
    return updateEmail(auth.currentUser, email);
  }

  function addUserName(userName) {
    return updateProfile(auth.currentUser, {
      displayName: userName,
    });
  }

  function removeUser() {
    return deleteUser(auth.currentUser);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <userAuthContext.Provider value={{ user, logIn, signUp, logOut, updateUserEmail, addUserName, removeUser}}>{children}</userAuthContext.Provider>;
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

