import Logo from "../_assets/images/guitar-logo.svg";

const Landing = () => {
  return (
    <div className="landing-container">
      <header>
        <img src={Logo} alt="#" />
        <h1>BAND POOL</h1>
      </header>
      <main>
        <div>
          <h2 className="sub-title-container">
            take the search out of joining a band
          </h2>
        </div>
        <div className="btn.container">
          <button>sign-up</button>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Landing;
