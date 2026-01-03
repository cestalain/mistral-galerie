import { useState } from "react";
import Modal from "./Modal";

function Gallery({ images, subcategory, category }) {
  const [selectedImage, setSelectedImage] = useState(null);

  console.log("Gallery props:", { images, subcategory, category });

  if (!images || images.length === 0) {
    return (
      <div className="alert alert-warning mt-4">
        <h5 className="alert-heading">Aucune image disponible</h5>
        <p className="mb-0">
          Aucune image n'est disponible pour "{subcategory}".
        </p>
        <hr />
        <p className="mb-0 small">
          Veuillez ajouter des images dans le dossier :<br />
          <code>
            public/images/{category}/{subcategory.toLowerCase()}/miniatures/
          </code>
        </p>
        <p className="mb-0 small mt-2">
          Puis exécutez : <code>npm run generate-images</code>
        </p>
      </div>
    );
  }

  return (
    <div className="gallery-page">
      <h2 className="mb-4 text-capitalize border-bottom pb-2">{subcategory}</h2>

      <div className="row">
        {images.map((image, index) => {
          const imagePath = `/images/${category}/${subcategory.toLowerCase()}/miniatures/${image}`;
          const originalPath = `/images/${category}/${subcategory.toLowerCase()}/original/${image}`;

          console.log("Image path:", imagePath);

          return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm hover-shadow">
                <div
                  className="card-img-top-container"
                  style={{
                    height: "200px",
                    overflow: "hidden",
                    backgroundColor: "#f8f9fa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={imagePath}
                    alt={`${subcategory} ${index + 1}`}
                    className="img-fluid"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      setSelectedImage({ src: originalPath, alt: image })
                    }
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Erreur de chargement: ${imagePath}`);
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/400x300/3498db/ffffff?text=${encodeURIComponent(
                        subcategory + " " + (index + 1)
                      )}`;
                    }}
                  />
                </div>
                <div className="card-body">
                  <h6 className="card-title text-center">
                    {image.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")}
                  </h6>
                  <p className="card-text text-muted small text-center">
                    Cliquez pour agrandir
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedImage && (
        <Modal
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default Gallery;
