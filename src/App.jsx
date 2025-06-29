import { About, Contact, Home, Skills } from "./components/pages";
import { Navbar } from "./components/common";
import Work from "./components/work/Work";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Analytics />
    </div>
  );
}

export default App;
