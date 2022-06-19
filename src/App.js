import { Route, Routes} from 'react-router-dom';
import PageLayout from 'layouts/PageLayout';
import HomePage from 'pages/HomePage';
import AboutUs from './pages/AboutUs';
import { CustomizePlan } from './pages/CustomizePlan';
import {Workout} from './pages/Workout';
import { Register } from 'pages/Register';
import React, {createContext, useState} from 'react';
import { Login } from 'pages/Login';
import { VipContext } from 'contexts/VipContext';
import { UserNameContext } from 'contexts/UserNameContext';
import PostWorkout from './pages/PostWorkout';
import History from 'pages/History';
import { lightTheme, darkTheme } from 'components/Theme';
import { GlobalStyles } from 'components/Global';
import { ThemeProvider } from 'styled-components';
import Switch from 'react-bootstrap/Switch';
import { Upgrade } from 'pages/Upgrade';

// import { ThemeContext } from 'styled-components';

export const ThemeContext = createContext(null);

export const LoggedInContext = React.createContext({
  isLoggedIn:false,
  setIsLoggedIn: () =>{},
});


function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>{
    if(theme === "light"){
      setTheme('dark')
    }else{
      setTheme('light');
    }
  }
  React.useEffect(() => {

    console.log({theme})
    
    })

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const loggedInValueToProvide = [isLoggedIn, setIsLoggedIn];

  const [isVip, setIsVip] = useState(false);
  const vipToProvide = [isVip, setIsVip];

  const [userName, setUserName] = useState('');
  const userNameToProvide = [userName, setUserName];

  return (
    <ThemeProvider theme={theme ==="light" ? lightTheme : darkTheme}>
      <>
      <GlobalStyles />
      <Switch onChange={toggleTheme} checked={theme === "dark"}/>
    <LoggedInContext.Provider value = {loggedInValueToProvide}>
      <VipContext.Provider value = {vipToProvide}>
        <UserNameContext.Provider value = {userNameToProvide}>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="customizeplan" element={<CustomizePlan />} />
              <Route path="workout" element={<Workout />} />
              <Route path="postworkout" element={<PostWorkout />} />
              <Route path="history" element={<History />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="upgrade" element={<Upgrade />} />
            </Route>
          </Routes>
        </UserNameContext.Provider>
      </VipContext.Provider>
    </LoggedInContext.Provider>
    </>
      {/* </div> */}

    </ThemeProvider>

  );
  }

export default App;
