import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './components/Home';
import SignInSignUpForm from './components/SignInPage';
// import FormCreate from './components/FormCreate';
// import FormEdit from './components/FormEdit';
// import FormDetails from './components/FormDetails';
import Homepage from './components/Homepage';

function App() {
  return (
   <>
   <Routes>
   <Route path='/' element={<SignInSignUpForm />} />
   <Route path='/homepage' element={<Homepage />} />
    {/* <Route path='/home' element={<Home />} />
    <Route path='/home/employee/create' element={<FormCreate />} />
    <Route path='/home/employee/edit/:id' element={<FormEdit />} />
    <Route path='/home/employee/detail/:id' element={<FormDetails />} /> */}
   </Routes>
   </>
  );
}

export default App;
