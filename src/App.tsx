import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import ChatWidget from "./components/ChatWidget";
import LogisticsJourney from "./components/LogisticsJourney";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Learn from "./components/Learn";
import Enroll from "./components/Enroll";
import Gallery from "./components/Gallery"; // ✅ FIXED IMPORT
import Contact from "./components/Contact";
import ApplyModal from "./components/ApplyModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden relative">
      {/* Header */}
      <Header />

      {/* Chat Widget */}
      <ChatWidget />

      {/* Routes */}
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <LogisticsJourney />
              <Partners />
              <Testimonials />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/learn" element={<Learn />} />
        <Route path="/enroll" element={<Enroll />} />

        {/* ✅ GALLERY PAGE */}
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Modal */}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedProgram="6 Months Program"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;