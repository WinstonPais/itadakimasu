import React, {useState, useEffect} from "react";
import { auth } from "./../firebase.config";
export const UserContext = React.createContext({
  user: null
});

const UserProvider = ( props ) => {
  const [user, setuser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setuser(user);
    })
  },[])
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  )
}

export default UserProvider;