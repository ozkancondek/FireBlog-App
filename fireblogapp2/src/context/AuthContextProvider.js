import React, { useContext, createContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../utils/firebaseUtil";
//first we need to configure firebase

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

//children ekleyerek altindaki komponentlere erisim saglayabiliyoruz
//user gibi sürekli degisen, interaktif verilerin state haline gelmesi lazim
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  //firebase apisinin bir methodunu (Authentication ile ilgili herhangi birsey degistiginde) kullandik (firbaseutil de export ertmistik)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  //bilgiyi aldim, sakladim, authcontextprovider unmount oldugunda sende kaldir... return ile

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    auth.signOut();
  }

  function loginWithGoogle() {
    googleProvider.setCustomParameters({ prompt: "select_account" });
    auth.signInWithPopup(googleProvider);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  //diger componentlerde user in giris yapip yapmadini buradan alacagiz
  const values = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updatePassword,
    updateEmail,
    loginWithGoogle,
  };
  // eger yüklenmiyorsa veriyi childrena gönder
  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
