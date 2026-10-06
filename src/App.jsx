import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { WhatYouGet } from "./pages/what-you-get";
import { Results } from "./pages/results";
import { Pricing } from "./pages/pricing";
import { NotFound } from "./pages/not-found";
import { Resources } from "./pages/resources";
import { SEOPillarPage } from "./pages/seo-pillar-page";
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
            
            {/* SEO Resources Directory */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/guides" element={<Resources />} />

            {/* 10 Targeted SEO Keyword Landing Pages */}
            <Route
              path="/faceless-youtube-channel"
              element={<SEOPillarPage fixedSlug="faceless-youtube-channel" />}
            />
            <Route
              path="/faceless-youtube"
              element={<SEOPillarPage fixedSlug="faceless-youtube" />}
            />
            <Route
              path="/faceless-youtube-automation"
              element={<SEOPillarPage fixedSlug="faceless-youtube-automation" />}
            />
            <Route
              path="/how-to-make-a-faceless-youtube-channel"
              element={<SEOPillarPage fixedSlug="how-to-make-a-faceless-youtube-channel" />}
            />
            <Route
              path="/how-to-make-faceless-youtube-videos-with-ai"
              element={<SEOPillarPage fixedSlug="how-to-make-faceless-youtube-videos-with-ai" />}
            />
            <Route
              path="/faceless-content-creation"
              element={<SEOPillarPage fixedSlug="faceless-content-creation" />}
            />
            <Route
              path="/faceless-channel"
              element={<SEOPillarPage fixedSlug="faceless-channel" />}
            />
            <Route
              path="/faceless-youtube-videos"
              element={<SEOPillarPage fixedSlug="faceless-youtube-videos" />}
            />
            <Route
              path="/youtube-automation-service"
              element={<SEOPillarPage fixedSlug="youtube-automation-service" />}
            />
            <Route
              path="/done-for-you-youtube-channel"
              element={<SEOPillarPage fixedSlug="done-for-you-youtube-channel" />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <PlanModal />
      </div>
    </PlanModalProvider>
  );
}