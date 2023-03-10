import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import "slick-carousel/slick/slick.css"; 



export default function Home() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-20">
      
    <Navbar />
  <div className="max-w-screen-xl mx-auto">
    <Banner />
    <Features />
    <Projects />
    <Resume />
    <Testimonial />
    <Contact />
    <Footer />
    <FooterBottom />
  </div>
</div>
  )
}
