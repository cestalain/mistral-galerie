import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Aquarelle from "./pages/Aquarelle";
import Petanque from "./pages/Petanque";
import Auvergne from "./pages/Auvergne";
import Contact from "./pages/Contact";

function App() {
  const [imagesData, setImagesData] = useState({});

  useEffect(() => {
    // Charger les données d'images depuis le JSON
    import("./data/images.json")
      .then((data) => setImagesData(data.default || data))
      .catch((err) => console.error("Erreur de chargement des images:", err));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/aquarelle/*"
              element={<Aquarelle imagesData={imagesData} />}
            />
            <Route
              path="/petanque/*"
              element={<Petanque imagesData={imagesData} />}
            />
            <Route
              path="/auvergne/*"
              element={<Auvergne imagesData={imagesData} />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
