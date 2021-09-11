import React from "react";
import { AuthContextProvider } from "./context/AuthContextThis";
import Routing from "./pages/Routing";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routing />
      </AuthContextProvider>
    </div>
  );
}

export default App;
