import { Home, Contact, Capabilities, Experience } from "../components/pages";
import { Navbar, Footer } from "../components/common";
import { ImpactStrip, Writing, Education } from "../components/sections";
import { ScrollProgress } from "../components/ui";
import Work from "../components/work/Work";

export default function Page() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Home />
      <ImpactStrip />
      <Work />
      <Capabilities />
      <Experience />
      <Education />
      <Writing />
      <Contact />
      <Footer />
    </div>
  )
}
