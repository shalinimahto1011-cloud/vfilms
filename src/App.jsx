/**
 * Project: Varnan Films - Frontend Assignment
 * Candidate: Shalini Mahto
 * Purpose: Submission for Frontend Intern placement at EZ Works
 * Stack: React (Vite) + Tailwind CSS + Axios
 * Date: 9 November 2025
 */

import BubbleBackground from "./components/BubbleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Services from "./components/Services";
import Reel from "./components/Reel";
import Stories from "./components/Stories";
import About from "./components/About";
import Varnan from "./components/Varnan";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <BubbleBackground />
      <Navbar />
      <Hero />
      <Logos />
      <Services />
      <Reel />
      <Stories />
      <About />
      <Varnan />
      <Contact />
      <Footer />
    </>
  );
}
