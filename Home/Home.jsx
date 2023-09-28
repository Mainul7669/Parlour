import Banner from "../Shared/Banner";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
function Home() {
  return (
    <div>
    <Banner/>
    <Services/>
    <Portfolio/>
    <Contact/>
    {/* Rest of your content */}
  </div>
  );
}

export default Home;
