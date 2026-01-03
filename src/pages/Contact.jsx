import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow">
            <div className="card-header bg-dark text-white">
              <h2 className="mb-0">Contactez-nous</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Envoyer le message
                  </button>
                </div>
              </form>

              <hr className="my-4" />

              <div className="row">
                <div className="col-md-6">
                  <h5>Informations de contact</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-envelope me-2"></i>
                      basictite@gmail.com
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-telephone me-2"></i>
                      +33 6 21 32 65 94
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-geo-alt me-2"></i>5 Rue Berlioz, 47200
                      Marmande
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5>Horaires d'ouverture</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">Lundi - Vendredi: 9h00 - 18h00</li>
                    <li className="mb-2">Samedi: 10h00 - 17h00</li>
                    <li className="mb-2">Dimanche: Fermé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
