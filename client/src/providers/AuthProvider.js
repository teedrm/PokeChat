import { createContext, useState } from 'react';
import axios from 'axios';

export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

//   Perform login process for the user & save authID, etc
  const login = function(email, password) {
    setAuth(true);
    axios.post("/login", {email})
    .then (res => {
      console.log("EMAIL",res)
      setUser(res.data);
      
    })
  };

  const logout = function() {
    setAuth(false);
    setUser(null);
  };

  // authContext will expose these items
  const userData = { auth, user, login, logout };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};