import React, { useState, useEffect } from 'react';
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  return (
    <div className="App">
      {isLoading ? <Intro /> : <Navbar />}
    </div>
  );
}

export default App;
