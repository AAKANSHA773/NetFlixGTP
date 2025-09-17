import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSigInFrom, setSignInFrom] = useState(true)

  const toggleSetFrom =()=>{
    setSignInFrom(!isSigInFrom)
  }
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
        <form className="w-3/12 absolute  p-8 bg-black mx-auto text-white my-36 left-0 right-0 bg-opacity-80 rounded">
          <h1 className="font-blod text-3xl py-4 ml-4">{isSigInFrom ? "Sign In" : "Sign Up"}</h1>
         {!isSigInFrom && 
         (<input
            type="text"
            placeholder="Full Name"
            className="p-3 m-4  w-full bg-gray-700 rounded"
          />
          )} 
         <input
            type="text"
            placeholder="Email Address"
            className="p-3 m-4  w-full bg-gray-700 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 m-4 w-full bg-gray-700 rounded"
          />
          <button className="bg-red-700 p-2 m-4 w-full rounded">
            {isSigInFrom ? "Sign In" : "Sign Up"}
          </button>
          <p className="p-3 m-4 cursor-pointer hover:text-red-700" onClick={toggleSetFrom}>
             {isSigInFrom ? "New to NetFlix? Sign Up Now. " : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
