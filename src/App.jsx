import React, { useContext } from "react";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Layout from "./Layouts/Layout";
import {Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path= "/" element={<Home />} />
            <Route path= "/Contacto" element={<Contact />} />
            <Route path= "/dentist/:id" element={<Detail />} />
            <Route path= "/favoritos" element={<Favs />} />   
        </Route>
      </Routes>
    </>
  );
}

export default App;
