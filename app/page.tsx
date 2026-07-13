import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Press from "./components/Press";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>

      <Intro />


      <main>

        <Navbar />


        <Hero />


        <About />


        <Achievements />


        <Press />


        <Gallery />


        <Contact />


        <Footer />

      </main>

    </>
  );
}