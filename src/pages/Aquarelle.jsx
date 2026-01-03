import { Routes, Route, Link, useLocation } from "react-router-dom";
import Gallery from "../components/Gallery";

function Aquarelle({ imagesData }) {
  const location = useLocation();
  const subcategories = ["DIVERS", "PAYSAGES", "MARINE", "ASIATIQUE"];

  return (
    <div className="aquarelle-page">
      <div className="row">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0">Sous-rubriques Aquarelle</h5>
            </div>
            <div className="list-group list-group-flush">
              {subcategories.map((subcat) => (
                <Link
                  key={subcat}
                  to={`/aquarelle/${subcat.toLowerCase()}`}
                  className={`list-group-item list-group-item-action ${
                    location.pathname.includes(subcat.toLowerCase())
                      ? "active"
                      : ""
                  }`}
                >
                  {subcat}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <Routes>
            {subcategories.map((subcat) => (
              <Route
                key={subcat}
                path={`/${subcat.toLowerCase()}`}
                element={
                  <Gallery
                    images={imagesData.aquarelle?.[subcat.toLowerCase()] || []}
                    subcategory={subcat}
                    category="aquarelle"
                  />
                }
              />
            ))}
            <Route
              path="/"
              element={
                <div className="text-center py-5">
                  <h3>
                    Sélectionnez une sous-rubrique pour voir les aquarelles
                  </h3>
                  <p className="text-muted">
                    Choisissez une catégorie dans le menu de gauche
                  </p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Aquarelle;
