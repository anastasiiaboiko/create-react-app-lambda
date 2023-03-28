import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="blogs" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <h1>Sample project</h1>
      <p>This project was set up to test ActiveCampaign site tracking via GTM.</p>
    </div>
  )
}

export default App
