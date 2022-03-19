import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import InitializeAuthentication from "./firebase.initialize";
InitializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
  const auth = getAuth();

  const [newUser, setNewUser] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const [userName, setUserName] = useState("");
  const signInWithGoogle = () => {
    return (
      signInWithPopup(auth, googleProvider)
        // setNewUser(user);
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        })
        .finally(() => setIsLoading(false))
    );
  };

  // New user name

  // Create user with Email and Password

  const createNewUserWithEmailAndPass = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setErrorMsg("");
        setNewUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;

        setErrorMsg(errorMessage);
        console.log(errorMessage);
      });
  };

  // Sign in with email & Password

  const signInWithEmailPass = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setErrorMsg("");
        setNewUser(user);
      })

      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setErrorMsg(errorMessage);
      });
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setNewUser("");
      })
      .catch((error) => {
        setErrorMsg(error);
      })

      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setNewUser(user);
        setIsLoading(false);
      } else {
        setNewUser("");
      }
    });
  });

  return {
    newUser,
    errorMsg,
    signInWithGoogle,
    signInWithEmailPass,
    createNewUserWithEmailAndPass,
    logOut,
    isLoading,
  };
};

export default UseFirebase;
