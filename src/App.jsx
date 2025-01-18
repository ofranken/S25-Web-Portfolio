import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import SplashPage from "./components/SplashPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <SplashPage/>
    </>
  )
}

export default App
