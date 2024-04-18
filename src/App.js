import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import SignInSignUpForm from "./components/crudondiffpage/SignInPage";
import Homepage from "./components/crudonsamepage/Homepage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignInSignUpPage from "./components/crudonsamepage/SignInSignUpPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SignInSignUpPage />} />
        {user ? (
          <Route path="/homepage" element={<Homepage />} />
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </>
  );
}

export default App;
