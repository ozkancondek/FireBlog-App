import "./App.css";
import Navbar from "./components/Navbar";

import AuthContextProvider from "./context/AuthContextProvider";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
