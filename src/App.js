import React from "react";

import Home from "./page/home/Home.jsx";
import About from "./page/about/About.jsx";
import Experience from "./page/experience/Experience.jsx";
import Contact from "./page/contact/Contact.jsx";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/tong-quan" element={<Home />}></Route>
        <Route path="/gioi-thieu" element={<About />}></Route>
        <Route path="/kinh-nghiem" element={<Experience />}></Route>
        <Route path="/lien-he" element={<Contact />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
