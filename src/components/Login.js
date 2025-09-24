import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USERAVTAR, UserImage } from "../utils/constant";

const Login = () => {
  const [isSigInFrom, setSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return null;
    if (!isSigInFrom) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              USERAVTAR
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL :photoURL,
                })
              );
           
            })
            .catch((error) => {
              setErrorMessage(error.m);
            });
      
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
      
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSetFrom = () => {
    setSignInFrom(!isSigInFrom);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg"
          alt="background"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 absolute  p-8 bg-black mx-auto text-white my-36 left-0 right-0 bg-opacity-80 rounded"
        >
          <h1 className="font-blod text-3xl py-4 ml-4">
            {isSigInFrom ? "Sign In" : "Sign Up"}
          </h1>
          {!isSigInFrom && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 m-4  w-full bg-gray-700 rounded"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-3 m-4  w-full bg-gray-700 rounded"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-3 m-4 w-full bg-gray-700 rounded"
          />
          <p className="font-bold text-red-500 text-lg py-2 mx-4">
            {errorMessage}
          </p>
          <button
            className="bg-red-700 p-2 m-4 w-full rounded"
            onClick={handleButtonClick}
          >
            {isSigInFrom ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="p-3 m-4 cursor-pointer hover:text-red-700"
            onClick={toggleSetFrom}
          >
            {isSigInFrom
              ? "New to NetFlix? Sign Up Now. "
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
