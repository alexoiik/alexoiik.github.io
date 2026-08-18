import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
      </main>
    </>
  );
}

export default App;
