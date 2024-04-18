import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

const SignInSignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const firebaseConfig = {
    apiKey: "AIzaSyDPH1WFJ50zzc0UC8nUiJQvUe1HWa1j--Y",
    authDomain: "loginwithemailpassword-47ed9.firebaseapp.com",
    projectId: "loginwithemailpassword-47ed9",
    storageBucket: "loginwithemailpassword-47ed9.appspot.com",
    messagingSenderId: "234919130190",
    appId: "1:234919130190:web:0f601b33086ee341dd7f1f",
    measurementId: "G-KBZZZ879SB",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleSignInSignUp = async (e) => {
    e.preventDefault();
    if (isSignIn) {
      try {
        const userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        if (user) {
          navigate("/homepage");
        }
      } catch (error) {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      try {
        const userCredential = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        if (user) {
          alert("Sign up successful");
          setIsSignIn(true);
          navigate("/homepage");
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };


  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl font-bold mb-4">
        CRUD Application for Employee Table
      </h2>
      <form
        onSubmit={handleSignInSignUp}
        className="w-full mx-8 lg:mx-0 lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-4 text-center">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            className="text-blue-500 ml-2"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignInSignUpPage;
