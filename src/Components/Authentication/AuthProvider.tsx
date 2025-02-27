import { createContext, useEffect, useState, ReactNode } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import auth from "../../firebase.init";

// 1️⃣ Define the context type
interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
  createNewUser: (email: string, password: string) => Promise<any>;
  updateUserProfile: (name: string, photo: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<any>;
  logOut: () => Promise<void>;
  signInWithGoogle: () => Promise<any>;
}

// 2️⃣ Create context with an explicit type
export const AuthContext = createContext<AuthContextType | null>(null);

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name: string, photo: string): Promise<void> => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    }
    return Promise.reject("No user currently signed in");
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo: AuthContextType = {
    user,
    setUser,
    loading,
    createNewUser,
    updateUserProfile,
    signIn,
    logOut,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
