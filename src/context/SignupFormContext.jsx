import React, { createContext, useContext, useState } from "react";

export const SignupFormContext = createContext();
export const useSignupForm = () => useContext(SignupFormContext);

export function SignupFormProvider({ children }) {
  const [profile, setProfile] = useState({});

  return (
    <SignupFormContext.Provider value={{ profile, setProfile }}>
      {children}
    </SignupFormContext.Provider>
  );
}
