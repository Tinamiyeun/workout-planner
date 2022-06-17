import { CustomizePlan } from './pages/CustomizePlan';
import {Route, Routes} from 'react-router-dom';
import {Workout} from './pages/Workout';
import { Register } from 'pages/Register';
import React, {useState} from 'react';



export const VipContext = React.createContext({
  isVip: false,
  setIsVip: () =>{},
});


function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn];

  const [isVip, setIsVip] = useState(false);
  const vipToProvide = [isVip, setIsVip];

  return (
    <Routes>
      <Route path="/customizeplan" element={<CustomizePlan />} />
      <Route path="/workout" element={<Workout />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  );
}

export default App;
