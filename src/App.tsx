import "./scss/styles.scss";

function App() {
  return (
    <body>
      <header>
        <h1>
          Donica Ida is an art director and designer working in editorial, identity, and digital
          design.
        </h1>
      </header>
      <div className="works">
        <div className="works__header">
          <span>Year</span>
          <span>Client</span>
          <span>Info</span>
        </div>
        <ul className="works__list">
          <li className="works__work">
            <span>2019</span>
            <span>Huffpost Highline</span>
            <span>Investigative journalism meets digital storytelling.</span>
          </li>
          <li className="works__work">
            <span>2019</span>
            <span>Huffpost Highline</span>
            <span>Investigative journalism meets digital storytelling.</span>
          </li>
          <li className="works__work">
            <span>2019</span>
            <span>Huffpost Highline</span>
            <span>Investigative journalism meets digital storytelling.</span>
          </li>
          <li className="works__work">
            <span>2019</span>
            <span>Huffpost Highline</span>
            <span>Investigative journalism meets digital storytelling.</span>
          </li>
          <li className="works__work">
            <span>2019</span>
            <span>Huffpost Highline</span>
            <span>Investigative journalism meets digital storytelling.</span>
          </li>
          <li className="works__work">
            <span>2019</span>
            <span>Huffpost Highline</span>
            <span>Investigative journalism meets digital storytelling.</span>
          </li>
          <li className="works__work">
            <span>2019</span>
            <span>Huffpost Highline</span>
            <span>Investigative journalism meets digital storytelling.</span>
          </li>
          <li className="works__work">
            <span>2019</span>
            <span>Huffpost Highline</span>
            <span>Investigative journalism meets digital storytelling.</span>
          </li>
          <li className="works__work">
            <span>2019</span>
            <span>Huffpost Highline</span>
            <span>Investigative journalism meets digital storytelling.</span>
          </li>
        </ul>
      </div>
      <div className="cv">
        <span>Education</span> MFA Design Entrepreneurship, School of Visual Arts; BFA Visual
        Communication Design, University of Washington.
        <span>Formerly at</span> HuffPost Highline, Mary Review, Critical Mass, Pentagram.{" "}
        <span>Select clients</span> Airbnb, Condé Nast Traveler, Google, Planned Parenthood.
      </div>
      <div className="about">
        <span>About</span> Donica Ida is a Hawaii-born designer who loves beautiful typography and a
        well-told story. She is the former Creative Director of HuffPost Highline and Design
        Director of Mary Review. Donica lives in Brooklyn with her <a href="#">husband</a> and
        splits her time between freelance work, traveling, hikes, and ramen. She is currently
        available for new opportunities. <span>Connect</span>
        <a href="#">Email</a>, <a href="#">Instagram</a>,<a href="#">LinkedIn</a>,{" "}
        <a href="#">WorkingNotWorking</a>.
      </div>
    </body>
  );
}

export default App;
