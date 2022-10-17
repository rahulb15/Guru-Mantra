import React from "react";
import './App.css';
// import DarkMode from "./components/dark-mode/DarkMode";
import MainPage from "./pages/main/Main";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Route, Routes} from 'react-router-dom';
import Table from "./pages/table/Table";
import CakeContainer from "./components/CakeContainer";
import {Provider} from 'react-redux'
import store from "./redux/store";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <Provider store={store}>
//     <div className="App">
//      <CakeContainer/>
//     </div>
//     </Provider>
//   );
// }

// export default App;