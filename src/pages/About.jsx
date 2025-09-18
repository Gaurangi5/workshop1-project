import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src="imgs/about.png" alt="About Us" className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h2 className="mb-4 ms-3">About Us</h2>
          <p className="text-muted ms-3">
            At Aurelia, we believe jewelry is more than just an accessory, it's
            a symbol of elegance, individuality, and timeless beauty. Each piece
            is crafted with passion and precision to help you shine in every
            moment of life.
          </p>
          <p className="text-muted ms-3">
            From everyday essentials to statement designs, our collections are
            inspired by modern sophistication and classic charm. With Aurelia,
            you don’t just wear jewelry, you wear a story of grace and
            confidence.
          </p>
          <p className="text-muted ms-3">
            We are committed to offering exceptional quality and unmatched
            service, ensuring every experience with Aurelia feels as special as
            the jewelry itself. Our mission is to make luxury accessible, so you
            can celebrate life’s precious moments with confidence and style.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
