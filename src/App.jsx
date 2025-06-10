import { About, Contact, Home, Skills } from "./components/pages";
import { Navbar } from "./components/common";
import Work from "./components/work/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
