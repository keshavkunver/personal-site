import { Home, Contact, Capabilities, Experience } from "../components/pages";
import { Navbar, Footer } from "../components/common";
import { ImpactStrip, WorkWithMe, Writing, Education } from "../components/sections";
import { ScrollProgress } from "../components/ui";
import Work from "../components/work/Work";

export const metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return (
    <div className="bg-dark-bg min-h-screen relative">
      {/* One continuous background canvas: aurora bookends resolve into the
          page base color mid-page, so no section edge ever shows a seam */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[160vh] bg-aurora-top" />
        <div className="absolute inset-x-0 bottom-0 h-[150vh] bg-aurora-bottom" />
        <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-screen" />
      </div>
      <div className="relative">
        <ScrollProgress />
        <Navbar />
        <Home />
        <ImpactStrip />
        <WorkWithMe />
        <Work />
        <Capabilities />
        <Experience />
        <Education />
        <Writing />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
