function Home() {
  return (
    <div className="home-page">
      <div className="jumbotron bg-light p-5 rounded text-center">
        <h1 className="display-4">Bienvenue chez BIBI</h1>
        <p className="lead">
          Découvrez mes collections d'aquarelles, l'univers de la pétanque et la
          beauté de l'Auvergne
        </p>
        <hr className="my-4" />
        <p>
          Naviguez à travers les différentes rubriques pour explorer nos
          contenus.
        </p>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h3 className="card-title">Aquarelles</h3>
              <p className="card-text">
                Découvrez notre collection d'aquarelles classées par thèmes :
                divers, paysages, marine et asiatique.
              </p>
              <a href="/aquarelle" className="btn btn-outline-primary">
                Explorer
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h3 className="card-title">Pétanque</h3>
              <p className="card-text">
                Tout sur l'univers de la pétanque : clubs, règlement et
                résultats.
              </p>
              <a href="/petanque" className="btn btn-outline-primary">
                Explorer
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h3 className="card-title">Auvergne</h3>
              <p className="card-text">
                Découvrez l'Auvergne à travers ses recettes traditionnelles et
                ses plus beaux paysages.
              </p>
              <a href="/auvergne" className="btn btn-outline-primary">
                Explorer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
