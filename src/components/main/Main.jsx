import Hero from "./hero/Hero";
import Highlights from "./highlights/Highlights";
import About from './about/About';
import Testimonials from "./testimonials/Testimonials";

const Main = () => {
  return (
    <main>
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
    </main>
  );
}

export default Main;