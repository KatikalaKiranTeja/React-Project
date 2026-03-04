/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const USERS_KEY = "emart_users";
const CURRENT_USER_KEY = "emart_current_user";

const AuthContext = createContext();

const readUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
};

const readCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(readUsers);
  const [currentUser, setCurrentUser] = useState(readCurrentUser);

  const register = ({ name, email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();
    const emailExists = users.some((user) => user.email.toLowerCase() === normalizedEmail);

    if (emailExists) {
      return { ok: false, message: "Email is already registered. Please sign in." };
    }

    const newUser = { name: name.trim(), email: normalizedEmail, password };
    const nextUsers = [...users, newUser];
    setUsers(nextUsers);
    localStorage.setItem(USERS_KEY, JSON.stringify(nextUsers));
    return { ok: true, message: "Registration successful. Please sign in." };
  };

  const signIn = ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();
    const user = users.find(
      (item) => item.email.toLowerCase() === normalizedEmail && item.password === password
    );

    if (!user) {
      return { ok: false, message: "Invalid email or password." };
    }

    setCurrentUser(user);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    return { ok: true, message: "Signed in successfully." };
  };

  const signOut = () => {
    setCurrentUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  const value = {
    users,
    currentUser,
    register,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
