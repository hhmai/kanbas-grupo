import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlRNcZR0TZolUzwRaMcGC1LgXE4tLwOjc",
  authDomain: "movie-review-site-grupo.firebaseapp.com",
  projectId: "movie-review-site-grupo",
  storageBucket: "movie-review-site-grupo.appspot.com",
  messagingSenderId: "391739233419",
  appId: "1:391739233419:web:bb6b0229528f2906a4f08e",
  measurementId: "G-B4Z1MJLSBV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;