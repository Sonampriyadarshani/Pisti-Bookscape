import { createSlice } from "@reduxjs/toolkit";

// Load logged-in user from localStorage
const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

const initialState = {
  loggedInUser: storedUser || null,
  users: [
    {
      email: "test@example.com",
      password: "123456",
    },
    {
      email: "hello@pisti.com",
      password: "password123",
    },
  ],
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { email } = action.payload;
      const normalizedEmail = email.toLowerCase();

      const userExists = state.users.some(
        (user) => user.email.toLowerCase() === normalizedEmail
      );

      if (!userExists) {
        const newUser = {
          ...action.payload,
          email: normalizedEmail,
        };
        state.users.push(newUser);
        state.loggedInUser = newUser; // Auto-login after registration
        state.error = null;
        localStorage.setItem("loggedInUser", JSON.stringify(newUser)); // Persist login
      } else {
        state.error = "User already exists.";
      }
    },

    logoutUser: (state) => {
      state.loggedInUser = null;
      state.error = null;
      localStorage.removeItem("loggedInUser"); // Remove user from localStorage
    },
  },
});

export const { registerUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
