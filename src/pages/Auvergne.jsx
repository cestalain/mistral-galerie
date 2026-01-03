import { Routes, Route, Link, useLocation } from "react-router-dom";
import Gallery from "../components/Gallery";
import RecipeLink from "../components/RecipeLink";

function Auvergne({ imagesData }) {
  const location = useLocation();
  const subcategories = ["RECETTE", "PHOTOS"];

  return (
    <div className="auvergne-page">
      <div className="row">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-header bg-warning text-dark">
              <h5 className="mb-0">Sous-rubriques Auvergne</h5>
            </div>
            <div className="list-group list-group-flush">
              {subcategories.map((subcat) => (
                <Link
                  key={subcat}
                  to={`/auvergne/${subcat.toLowerCase()}`}
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
            <Route path="/recette" element={<RecipeLink />} />
            <Route
              path="/photos"
              element={
                <Gallery
                  images={imagesData.auvergne?.photos || []}
                  subcategory="PHOTOS"
                  category="auvergne"
                />
              }
            />
            <Route
              path="/"
              element={
                <div className="text-center py-5">
                  <h3>Sélectionnez une sous-rubrique sur l'Auvergne</h3>
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

export default Auvergne;
