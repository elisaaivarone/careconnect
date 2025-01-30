// frontend/auth.ts
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

// Registrar novo usuário
export const register = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Fazer login
export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Fazer logout
export const logout = () => {
  return signOut(auth);
};
