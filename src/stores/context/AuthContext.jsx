/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CURRENT_USER_KEY = "emart_current_user";
const API_BASE_URL = import.meta.env.VITE_AUTH_API_URL || "http://localhost:3001";
const USERS_ENDPOINT = `${API_BASE_URL}/users`;

const AuthContext = createContext();

const readCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
  } catch {
    return null;
  }
};

const sanitizeUser = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(readCurrentUser);

  const register = async ({ name, email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();

    try {
      const response = await fetch(USERS_ENDPOINT);
      if (!response.ok) {
        return { ok: false, message: "Unable to connect to auth server." };
      }

      const users = await response.json();
      const emailExists = users.some((user) => user.email?.toLowerCase() === normalizedEmail);

      if (emailExists) {
        return { ok: false, message: "Email is already registered. Please sign in." };
      }

      const createResponse = await fetch(USERS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: normalizedEmail,
          password,
        }),
      });

      if (!createResponse.ok) {
        return { ok: false, message: "Registration failed. Please try again." };
      }

      return { ok: true, message: "Registration successful. Please sign in." };
    } catch {
      return { ok: false, message: "Auth server is not running on port 3001." };
    }
  };

  const signIn = async ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();

    try {
      const response = await fetch(USERS_ENDPOINT);
      if (!response.ok) {
        return { ok: false, message: "Unable to connect to auth server." };
      }

      const users = await response.json();
      const user = users.find(
        (item) => item.email?.toLowerCase() === normalizedEmail && item.password === password
      );

      if (!user) {
        return { ok: false, message: "Invalid email or password." };
      }

      const safeUser = sanitizeUser(user);
      setCurrentUser(safeUser);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
      return { ok: true, message: "Signed in successfully." };
    } catch {
      return { ok: false, message: "Auth server is not running on port 3001." };
    }
  };

  const signOut = () => {
    setCurrentUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  const value = {
    currentUser,
    register,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
