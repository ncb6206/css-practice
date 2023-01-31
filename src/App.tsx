import "./scss/styles.scss";

function App() {
  return (
    <body>
      <header>
        <nav>
          <ul>
            <li>Products</li>
            <li>Stockists</li>
            <li>About us</li>
          </ul>
        </nav>
        <h1 className="logo">
          T<div>o</div>
          lv
        </h1>
        <span>🔍</span>
      </header>
      <main>
        <div className="hero">
          <div className="hero__img"></div>
          <div className="hero__text">
            <h2>Lift the blind to let in the light. A moment of calm before the day begins.</h2>
            <span>
              Featuring <a href="#">Cherry sofa</a> and
              <a href="#">Kile coffee table</a>
            </span>
          </div>
        </div>
        <div className="banner">
          <h3 className="banner__title">Time for Living</h3>
          <p>
            Take time for life’s little moments. Browsing the news as you eat breakfast. Setting the
            table for hungry guests. Sinking in to your favourite armchair. At Tolv, your daily
            rituals are at the heart of our design. We make furniture to give you your best day,
            every day.
          </p>
          <span>
            Find out more <a href="#">About us</a>
          </span>
        </div>
        <section className="gallery">
          <div className="gallery__item"></div>
          <div className="gallery__item"></div>
          <div className="gallery__item"></div>
          <div className="gallery__item"></div>
          <div className="gallery__item"></div>
          <div className="gallery__item"></div>
          <div className="gallery__item"></div>
          <div className="gallery__item"></div>
          <div className="gallery__item"></div>
          <div className="gallery__item"></div>
          <div className="gallery__item"></div>
          <div className="gallery__item"></div>
        </section>
      </main>
    </body>
  );
}

export default App;
