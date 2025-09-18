import React from "react";

function Services() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="imgs/service.png"
            alt="Our Services"
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <h2 className="mb-3 ms-3">Our Services</h2>
          <p className="text-muted ms-3">
            At Aurelia, we offer more than just jewelry, we offer timeless
            experiences. From personalized designs to aftercare, every service
            is tailored to ensure your jewelry journey is as special as you are.
          </p>
          <p className="text-muted ms-3">
            Our team of artisans and experts are dedicated to providing
            craftsmanship, quality, and care that lasts a lifetime.
          </p>
          <p className="text-muted ms-3">
            Beyond the purchase, Aurelia ensures lasting relationships with
            complimentary cleaning, maintenance, and lifetime support so your
            jewelry always stays as radiant as the day you bought it.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 text-center mb-4">
          <h4>Custom Jewelry Design</h4>
          <p className="text-muted">
            Unique, handcrafted designs tailored to your personal style and
            special occasions.
          </p>
        </div>

        <div className="col-md-4 text-center mb-4">
          <h4>Jewelry Repair & Care</h4>
          <p className="text-muted">
            Professional resizing, cleaning, and repair to keep your jewelry
            shining like new.
          </p>
        </div>

        <div className="col-md-4 text-center mb-4">
          <h4>Engraving Services</h4>
          <p className="text-muted">
            Add a personal touch with custom engravings that make every gift
            memorable.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 text-center mb-4">
          <h4>Secure & Fast Delivery</h4>
          <p className="text-muted">
            Safe, insured, and timely delivery ensuring your treasures reach you
            with care.
          </p>
        </div>

        <div className="col-md-4 text-center mb-4">
          <h4>Luxury Packaging</h4>
          <p className="text-muted">
            Elegant, gift-ready packaging designed to make every purchase
            unforgettable.
          </p>
        </div>

        <div className="col-md-4 text-center mb-4">
          <h4>Jewelry Consultation</h4>
          <p className="text-muted">
            Personalized guidance to help you choose the perfect piece for any
            occasion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
