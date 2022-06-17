import React from 'react';


export const LoggedInContext = React.createContext({
    isLoggedIn:false,
    setIsLoggedIn: () =>{},
  });