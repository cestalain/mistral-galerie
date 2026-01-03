function RecipeLink() {
  const recipes = [
    {
      id: 1,
      name: "Truffade",
      url: "https://www.marmiton.org/recettes/recette_truffade-auvergne-cantal-15_27342.aspx",
    },
    {
      id: 2,
      name: "Aligot",
      url: "https://www.marmiton.org/recettes/recette_aligot-au-cantal_60236.aspx",
    },
    {
      id: 3,
      name: "Potée auvergnate",
      url: "https://www.marmiton.org/recettes/recette_une-potee-auvergnate_221229.aspx",
    },
    {
      id: 4,
      name: "Pounti",
      url: "https://www.marmiton.org/recettes/recette_pounti-auvergnat_112761.aspx",
    },
  ];

  return (
    <div className="recipe-page">
      <h2 className="mb-4">Recettes d'Auvergne</h2>
      <p className="lead mb-4">
        Découvrez les délicieuses spécialités culinaires de l'Auvergne
      </p>

      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">
                  Une recette traditionnelle auvergnate à découvrir.
                </p>
                <a
                  href={recipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Voir la recette
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeLink;
