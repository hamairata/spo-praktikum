import { useState } from "react";

export default function useToken() {
  const getUser = () => {
    const userString = sessionStorage.getItem("accessToken");
    const userToken = JSON.parse(userString);
    return userToken?.accessToken;
  };

  const [user, setUser] = useState(getUser());

  const saveUser = (userToken) => {
    sessionStorage.setItem("accessToken", JSON.stringify(userToken));
    setUser(userToken.accessToken);
  };

  return {
    setUser: saveUser,
    user,
  };
}
