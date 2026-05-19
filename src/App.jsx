import React, { useState } from "react";
import Intro_page from "./components/Intro_page";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import About_page from "./components/About_page";



export default function App() {
  const [page, setPage] = useState(1);

  const renderPage = () => {
    if (page === 1) return <Intro_page />;
    if (page === 2) return <Page1 />;
    if (page === 3) return <Page2 />;
    if (page === 4) return <Page3 />;
    if (page === 5) return <About_page />;
  };

  return (
    <div>
      <nav className="flex justify-center gap-4 p-4 bg-gray-800 text-white">
      <button onClick={() => setPage(1)}>Intro</button>
        <button onClick={() => setPage(2)}>Page 1</button>
        <button onClick={() => setPage(3)}>Page 2</button>
        <button onClick={() => setPage(4)}>Page 3</button>
        <button onClick={() => setPage(5)}>About Us </button>
      </nav>

      {renderPage()}
    </div>
  );
}