import React from "react";

import { AuthProvider } from "./useAuth";
import { LoadProvider } from "./useLoad";

const AppProvider: React.FC = ({ children }) => {
  return (
  <AuthProvider>
    <LoadProvider>
      {children}
    </LoadProvider>
  </AuthProvider>);
};

export default AppProvider;