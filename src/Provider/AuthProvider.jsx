import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

// provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google sign in
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const authInformation = {
    user,
    loading,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
