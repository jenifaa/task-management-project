// import './App.css'

import { Route, Routes } from "react-router";
import Root from "./Layout/Root";
import Home from "./Components/Pages/Home/Home";
import Register from "./Components/Authentication/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root></Root>}>
          <Route index element={<Home></Home>}></Route>
        </Route>
        <Route path="/signup" element={<Register></Register>}></Route>
      </Routes>
    </>
  );
}

export default App;
