import "./scss/styles.scss";

function App() {
  return (
    <body>
      <div className="main">
        <span></span>
        <span></span>
        <span className="menu">Menu</span>
        <div className="number__row">
          <div className="number">#10</div>
          <div className="number">#9</div>
          <div className="number">#8</div>
          <div className="number">#7</div>
          <div className="number">#6</div>
        </div>
        <div className="center-image"></div>
        <div className="number__row">
          <div className="number">#5</div>
          <div className="number">#4</div>
          <div className="number">#3</div>
          <div className="number">#2</div>
          <div className="number">#1</div>
        </div>
        <span></span>
        <div className="scrolling__text">
          <span>This is a very long text that should scroll using CSS3 Animations and not JS</span>
        </div>
        <span></span>
      </div>
    </body>
  );
}

export default App;
