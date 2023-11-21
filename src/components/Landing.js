import { NavBar } from "./NavBar.js";
import { Home } from "./Home.js";
import { Howitworks } from "./Howitworks.js";
import { Content } from "./Content.js";
import { Partners } from "./Partners.js";

export const Landing = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Howitworks />
      <Content />
      <Partners />
    </div>
  );
};
