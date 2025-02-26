// import './App.css'

import { Route, Routes } from "react-router";
import Root from "./Layout/Root";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root></Root>}>
          <Route index element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
