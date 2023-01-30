import React, { Fragment } from "react";
import "./scss/styles.scss";

function App() {
  return (
    <Fragment>
      <header>
        <h1>Best Horror Scenes</h1>
        <div className="bottom">
          <h3>An ever growing collection featuring some of the best scenes in horror.</h3>
          <p>
            “Best Horror Scenes” is a collection of scenes I feel are some of the most affecting in
            horror. Some may be simple black cat scares, others may be more subdued or nuanced. Many
            come from films that aren't necessarily “horror” but have elements or threads of horror,
            and all have the same general effect: unease, dread, fear, shock, disgust.
          </p>
          <nav>
            <ul>
              <li>Watch on YouTube</li>
              <li>Suggest a Scene</li>
              <li>Get Episode Notices</li>
              <li>Contact</li>
              <li>RSS</li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="movie">
          <div className="wrapper">
            <div className="movie__header">
              <h4>38. Hereditary (2018)</h4>
              <h5>Directed by Me</h5>
            </div>
            <img src="poster.png" alt="" />
          </div>
        </section>
        <section className="movie">
          <div className="wrapper">
            <div className="movie__header">
              <h4>38. Hereditary (2018)</h4>
              <h5>Directed by Me</h5>
            </div>
            <img src="poster.png" alt="" />
          </div>
        </section>
        <section className="movie">
          <div className="wrapper">
            <div className="movie__header">
              <h4>38. Hereditary (2018)</h4>
              <h5>Directed by Me</h5>
            </div>
            <img src="poster.png" alt="" />
          </div>
        </section>
        <section className="movie">
          <div className="wrapper">
            <div className="movie__header">
              <h4>38. Hereditary (2018)</h4>
              <h5>Directed by Me</h5>
            </div>
            <img src="poster.png" alt="" />
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default App;
