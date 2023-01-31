import "./scss/styles.scss";

function App() {
  return (
    <body>
      <main>
        <div className="hero">
          <div className="hero__photo"></div>
          <h2>News that lasts.</h2>
          <p>
            <span>About</span> Schwartz Media publishes intelligent news and current affairs that
            breaks the 24-hour news cycle. We offer a nuanced examination of Australia and the
            world, focused on fresh insight and literary expression. Our audience reads to know, not
            just to agree. We invest in long-form journalism where the issues demand it, providing
            writing of a quality that makes difficult topics clear. Schwartz Media publishes
            Australia’s most respected writers across The Saturday Paper, The Monthly magazine and
            the daily podcast 7am, alongside our sister publications, Quarterly Essay and Australian
            Foreign Affairs.
          </p>
        </div>
        <section className="products">
          <article className="product">
            <div>
              <h4 className="product__category">Journalism</h4>
              <p className="product__description">
                Our journalists create in-depth, independent, original public interest reporting,
                focusing on storytelling and insight.
              </p>
              <a href="#" className="btn">
                Learn more
              </a>
            </div>
            <img src="https://source.unsplash.com/random/500x360" />
          </article>
          <article className="product">
            <div>
              <h4 className="product__category">Journalism</h4>
              <p className="product__description">
                Our journalists create in-depth, independent, original public interest reporting,
                focusing on storytelling and insight.
              </p>
              <a href="#" className="btn">
                Learn more
              </a>
              <a href="#" className="btn">
                Learn more
              </a>
            </div>
            <img src="https://source.unsplash.com/random/500x360" />
          </article>
          <article className="product">
            <div>
              <h4 className="product__category">Journalism</h4>
              <p className="product__description">
                Our journalists create in-depth, independent, original public interest reporting,
                focusing on storytelling and insight.
              </p>
              <a href="#" className="btn">
                Learn more
              </a>
            </div>
            <img src="https://source.unsplash.com/random/500x360" />
          </article>
          <article className="product">
            <div>
              <h4 className="product__category">Journalism</h4>
              <p className="product__description">
                Our journalists create in-depth, independent, original public interest reporting,
                focusing on storytelling and insight.
              </p>
              <a href="#" className="btn">
                Learn more
              </a>
            </div>
            <img src="https://source.unsplash.com/random/500x360" />
          </article>
          <div className="line">
            <article className="product">
              <div>
                <h4 className="product__category">Journalism</h4>
                <img src="https://source.unsplash.com/random/500x360" />
                <p className="product__description">
                  Our journalists create in-depth, independent, original public interest reporting,
                  focusing on storytelling and insight.
                </p>
                <a href="#" className="btn">
                  Learn more
                </a>
              </div>
            </article>
            <article className="product">
              <div>
                <h4 className="product__category">Journalism</h4>
                <img src="https://source.unsplash.com/random/500x360" />
                <p className="product__description">
                  Our journalists create in-depth, independent, original public interest reporting,
                  focusing on storytelling and insight.
                </p>
                <a href="#" className="btn">
                  Learn more
                </a>
              </div>
            </article>
          </div>
        </section>
        <div className="links">
          <div className="link">
            <h4>Careers</h4>
            <span>Work at the country’s leading independent publisher. </span>
            <a href="#" className="btn">
              Learn more
            </a>
          </div>
          <div className="link">
            <h4>Careers</h4>
            <span>Work at the country’s leading independent publisher. </span>
            <a href="#" className="btn">
              Learn more
            </a>
          </div>
          <div className="link">
            <h4>Careers</h4>
            <span>Work at the country’s leading independent publisher. </span>
            <a href="#" className="btn">
              Learn more
            </a>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer__top">
          <span>Schwartz</span>
          <ul>
            <li>Schwartz Media</li>
            <li>Schwartz Media</li>
            <li>Schwartz Media</li>
          </ul>
        </div>
      </footer>
    </body>
  );
}

export default App;
