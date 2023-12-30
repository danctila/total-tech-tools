import About from "./Components/About";
import Connect from "./Components/Connect";
import DataForm from "./Components/DataForm";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Products from "./Components/Products";
import Work from "./Components/Work";
import { useRef } from "react";

function App() {
  const services = useRef<null | HTMLDivElement>(null);
  const work = useRef<null | HTMLDivElement>(null);
  const about = useRef<null | HTMLDivElement>(null);
  const contact = useRef<null | HTMLDivElement>(null);

  const scrollToServices = () => {
    services.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWork = () => {
    work.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contact.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Nav
        servicesClick={scrollToServices}
        workClick={scrollToWork}
        aboutClick={scrollToAbout}
        contactClick={scrollToContact}
      />
      <Hero />
      <Products reference={services} workClick={scrollToWork} />
      <Work reference={work} />
      <Connect reference={contact} />
      <About reference={about} />
      <DataForm />
      <Footer />
    </>
  );
}

export default App;
