import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../components/ui/reveal";
import { Button } from "../components/ui/button";
import { SEOHead } from "../components/seo-head";

export function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found — White Mask Content"
        description="The page you're looking for doesn't exist. Head back to explore faceless AI video production plans."
        path="/404"
      />
      <section className="flex min-h-[60vh] items-center justify-center px-6 pt-36 pb-24">
        <Reveal className="max-w-lg text-center">
          <span className="font-display text-7xl font-semibold text-signal sm:text-9xl">
            404
          </span>
          <h1 className="mt-4 font-display text-2xl font-semibold text-paper sm:text-3xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-mute">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button as={Link} to="/" size="lg" className="mt-8">
            Back to home <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </section>
    </>
  );
}
