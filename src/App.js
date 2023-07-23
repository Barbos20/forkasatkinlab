import "./App.css";
import { MainPage } from "./1page/mainPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainPage />

      <Routes>
        <Route path="" element="" />
      </Routes>
    </div>
  );
}

export default App;
