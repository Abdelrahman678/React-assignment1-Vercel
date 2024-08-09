import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { About } from "./components/About/About";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Contact } from "./components/Contact/Contact";
import { LayOut } from "./components/LayOut/LayOut";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  let browserRouter = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={browserRouter}>
        
      </RouterProvider>
    </>
  );
}

export default App;
