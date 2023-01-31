import "./scss/styles.scss";

function App() {
  return (
    <body>
      <main>
        <header>
          <h1>
            Canal Street Market is a carefully curated retail market, food hall & community space
            open year-round at 265 Canal Street.
          </h1>
          <div className="header__photo"></div>
        </header>
        <section className="about">
          <h2>A New Kind of Market</h2>
          <div className="about__columns">
            <div className="about__column">
              <div className="img__wrapper">
                <img src="https://source.unsplash.com/random/1" />
              </div>
              <span>
                Merging retail, food, art, and culture, Canal Street Market highlights top retail
                and design concepts, restaurants, and up-and-coming players in the downtown New York
                City community.
              </span>
            </div>
            <div className="about__column">
              <div className="img__wrapper">
                <img src="https://source.unsplash.com/random/2" />
              </div>
              <span>
                Merging retail, food, art, and culture, Canal Street Market highlights top retail
                and design concepts, restaurants, and up-and-coming players in the downtown New York
                City community.
              </span>
            </div>
            <div className="about__column">
              <div className="img__wrapper">
                <img src="https://source.unsplash.com/random/3" />
              </div>
              <span>
                Merging retail, food, art, and culture, Canal Street Market highlights top retail
                and design concepts, restaurants, and up-and-coming players in the downtown New York
                City community.
              </span>
            </div>
          </div>
        </section>
        <section className="events">
          <div className="events__header">
            <span>노마드</span>
            <h4>Market Events</h4>
            <span>코다</span>
          </div>
          <div className="events__list">
            <div className="events__event">
              <span>12/11</span>Korean Wave
            </div>
            <div className="events__event">
              <span>12/11</span>Korean Wave
            </div>
            <div className="events__event">
              <span>12/11</span>Korean Wave
            </div>
          </div>
          <a href="#" className="btn">
            See all
          </a>
        </section>
        <section className="location">
          <div className="location__address">
            <h3>
              265 Canal St. <span>New York, NY</span>
            </h3>
          </div>
          <div className="location__address"></div>
        </section>
        <section className="contact">
          <h4>Interested in becoming a vendor?</h4>
          <a href="#" className="btn">
            Click here
          </a>
        </section>
      </main>
      <nav>
        <ul>
          <li>
            <span>Food</span>
          </li>
          <li>
            <span>Retail</span>
          </li>
          <li>
            <span>Community</span>
          </li>
        </ul>
      </nav>
    </body>
  );
}

export default App;
