import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInSignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const handleSignInSignUp = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (isSignIn) {
      const user = users.find((u) => u.email === email && u.password === password);
      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        navigate("/home");
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      const existingUser = users.find((u) => u.email === email);
      if (existingUser) {
        alert("This email is already registered. Please use a different email.");
      } else {
        const newUser = { email, password };
        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        alert("Sign up successful");
        setIsSignIn(true);
        navigate("/home");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSignInSignUp} className="w-full mx-8 md:mx-0 md:w-1/3 bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
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
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-4 text-center">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <button type="button" className="text-blue-500 ml-2" onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignInSignUpForm;
