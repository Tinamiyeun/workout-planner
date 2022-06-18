import { Route, Routes} from 'react-router-dom';
import PageLayout from 'layouts/PageLayout';
import HomePage from 'pages/HomePage';
import AboutUs from './pages/AboutUs';
import { CustomizePlan } from './pages/CustomizePlan';
import {Workout} from './pages/Workout';
import { Register } from 'pages/Register';
import React, {useState} from 'react';
import { Login } from 'pages/Login';
import PostWorkout from './pages/PostWorkout';

export const LoggedInContext = React.createContext({
  isLoggedIn:false,
  setIsLoggedIn: () =>{},
});


function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn];

  const [isVip, setIsVip] = useState(false);
  const vipToProvide = [isVip, setIsVip];

  return (
<>
<Routes>
<Route path="/" element={<PageLayout />}>
<Route index element={<HomePage />} />
<Route path="about" element={<AboutUs />} />
<Route path="customizeplan" element={<CustomizePlan />} />
<Route path="workout" element={<Workout />} />
<Route path="login" element={<Login />} />
<Route path="register" element={<Register />} />
<Route path="postworkout" element={<PostWorkout />} />

</Route>
</Routes>
</>
  );
  }

export default App;
