import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { WhatYouGet } from "./pages/what-you-get";
import { Results } from "./pages/results";
import { Pricing } from "./pages/pricing";
import { NotFound } from "./pages/not-found";
import { PlanModalProvider } from "./context/plan-modal-context";
import { PlanModal } from "./components/plan-modal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <PlanModalProvider>
      <div className="flex min-h-screen flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-you-get" element={<WhatYouGet />} />
            <Route path="/results" element={<Results />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <PlanModal />
      </div>
    </PlanModalProvider>
  );
}