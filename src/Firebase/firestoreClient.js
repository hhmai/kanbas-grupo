import { collection, addDoc, getDocs, doc, updateDoc } from "firebase/firestore";
import {db} from './auth';

export const addUser = async (email, admin, userName) => {
    try {
        await addDoc(collection(db, "UserData"), {
          email: email,
          admin: admin,
          username: userName,
          movies: [],    
        });
        console.log("Document written");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const getUser = async (email) => {
    try {
        const querySnapshot = await getDocs(collection(db, "UserData"));
        const user = querySnapshot.docs.find(doc => doc.data().email === email);
        if (user) {
            return user.data();
          } else {
            return null; // User not found
          }
      } catch (e) {
        console.error("Error getting document: ", e);
      }
    }

export const getAllUsers = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "UserData"));
        const users = querySnapshot.docs.map(doc => ({username: doc.data().username, email: doc.data().email, movies: doc.data().movies}));
        return users;
      } catch (e) {
        console.error("Error getting documents: ", e);
      }
    }
export const getDoc = async (email) => {
  try {
    const querySnapshot = await getDocs(collection(db, "UserData"));
    const user = querySnapshot.docs.find(doc => doc.data().email === email);
    if (user) {
        return user;
      } else {
        return null; // User not found
      }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
}

export const addMovie = async (email, movie) => {
    try {
        const doc = await getDoc(email);
        const user = doc.data();
        if (user) {
            let movies = user.movies;
            const index = movies.findIndex(m => m.title === movie.title);
            if (index !== -1) {
              movies.splice(index, 1);
              alert("Existing movie review overwritten");
            }
            movies.push(movie);
            console.log(doc.id);
            await updateDoc(doc.ref, {
              movies: movies,
            });
          } else {
            console.error("User not found");
          }
      } catch (e) {
        console.error("Error adding movie: ", e);
      }
    }

export const updateUser = async (emailID, email, username) => {
  try {
    const doc = await getDoc(emailID);
    const user = doc.data();
    if (user) {
        await updateDoc(doc.ref, {
          username: username,
          email: email,
          admin: user.admin,
          movies: user.movies,
        });
      } else {
        console.error("User not found");
      }
  } catch (e) {
    console.error("Error updating user: ", e);
  }
}
