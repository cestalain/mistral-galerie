// src/components/DebugInfo.jsx
function DebugInfo({ imagesData, category, subcategory }) {
  return (
    <div className="debug-info alert alert-info">
      <h5>Informations de débogage :</h5>
      <p>
        <strong>Catégorie :</strong> {category}
      </p>
      <p>
        <strong>Sous-catégorie :</strong> {subcategory}
      </p>
      <p>
        <strong>Images disponibles :</strong>
        {imagesData[category]?.[subcategory]?.length || 0}
      </p>
      <pre className="bg-dark text-light p-3 rounded">
        {JSON.stringify(imagesData[category]?.[subcategory] || [], null, 2)}
      </pre>
    </div>
  );
}

export default DebugInfo;
