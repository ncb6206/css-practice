import React, { Fragment } from "react";
import "./scss/styles.scss";

function App() {
  return (
    <Fragment>
      <header>
        <nav>
          <ul>
            <li>Nail Studios</li>
            <li>Shop Polish</li>
          </ul>
          <ul>
            <li>Journal</li>
          </ul>
        </nav>
      </header>
      <div className="hero">
        <h4>The Uptown Collection</h4>
        <h3>
          Meet our newest nails, designed in collaboration with our friends on the Upper East Side.
        </h3>
        <a href="#">Read More</a>
      </div>
      <section className="under-hero">
        <img src="https://source.unsplash.com/random/820x550/?programming" />
        <div className="under-hero__content">
          <div className="wrapper">
            <h4>The Studio</h4>
            <h3>
              Book a manicure at our Soho flagship studio or our new Uptown studio, 20 East 69th
              Street at Madison Avenue.
            </h3>
            <a href="#">Book a Manicure</a>
          </div>
        </div>
      </section>
      <section className="blog">
        <article className="blog__post">
          <img src="https://source.unsplash.com/random/500x500/?programming" />
          <div className="post__content">
            <span className="post__date">Feb 25, 2020</span>
            <h4>New and Now: The Uptown Collection</h4>
            <a href="#">Read Story</a>
          </div>
        </article>
        <article className="blog__post">
          <img src="https://images.unsplash.com/photo-1583255448430-17c5eda08e5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
          <div className="post__content">
            <span className="post__date">Feb 25, 2020</span>
            <h4>New and Now: The Uptown Collection</h4>
            <a href="#">Read Story</a>
          </div>
        </article>
        <article className="blog__post">
          <img src="https://images.unsplash.com/photo-1583307266943-e0055bb40037?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1421&q=80" />
          <div className="post__content">
            <span className="post__date">Feb 25, 2020</span>
            <h4>New and Now: The Uptown Collection</h4>
            <a href="#">Read Story</a>
          </div>
        </article>
      </section>
      <section className="gallery">
        <div className="gallery__poster">
          <img src="https://source.unsplash.com/random/500x500/?programming" />
        </div>
        <div className="gallery__poster">
          <img src="https://source.unsplash.com/random/500x500/?programming" />
        </div>
        <div className="gallery__poster">
          <img src="https://source.unsplash.com/random/500x500/?programming" />
        </div>
        <div className="gallery__poster">
          <img src="https://source.unsplash.com/random/500x500/?programming" />
        </div>
        <div className="gallery__poster">
          <img src="https://source.unsplash.com/random/500x500/?programming" />
        </div>
        <div className="gallery__poster">
          <img src="https://source.unsplash.com/random/500x500/?programming" />
        </div>
        <div className="gallery__poster">
          <img src="https://source.unsplash.com/random/500x500/?programming" />
        </div>
        <div className="gallery__poster">
          <img src="https://source.unsplash.com/random/500x500/?programming" />
        </div>
      </section>
      <footer className="footer">
        <div className="footer__column">
          <span className="column__title">Support</span>
          <ul>
            <li>F.A.Q.</li>
            <li>Privacy Policu</li>
            <li>Terms and Conditions</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="footer__column">
          <span className="column__title">Follow Us</span>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="footer__column">
          <span className="column__title">Support</span>
          <ul>
            <li>F.A.Q.</li>
            <li>Privacy Policu</li>
            <li>Terms and Conditions</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
