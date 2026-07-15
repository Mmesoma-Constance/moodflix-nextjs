import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
// import HeroCarousel from "./HeroCarousel";
import HeroSearch from "./HeroSearch";
import HeroBackground from "./HeroBackground";
import Container from "../layout/Container";

function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "This morning";
  if (hour < 18) return "This afternoon";
  return "Tonight";
}

export default function HeroSection() {
  const greeting = getTimeGreeting();

  return (
    <section className="relative flex min-h-[90vh] items-end overflow-hidden px-6 pb-20 pt-20 md:px-12">
      <HeroBackground />

      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
        {/* <span className="inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
          <Sparkles className="h-4 w-4" />
          {greeting} on MoodFlix
        </span> */}

        <h1 className="font-display text-5xl font-bold leading-[1.05] text-foreground md:text-7xl">
          How do you want to feel {greeting === "Tonight" ? "tonight" : "today"}?
        </h1>

        <p className="max-w-lg text-lg text-muted-foreground">
          Discover stories that match your mood — not just your genre.
        </p>

        <HeroSearch />

        <div className="mt-2 flex flex-col sm:flex-row gap-4">
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-surface-hover cursor-pointer w-fit"
          >
            Take the mood quiz
          </Link>
          <Link
            href="/surprise"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium w-fit text-primary-foreground transition-opacity hover:opacity-90 cursor-pointer"
          >
            <Sparkles className="h-4 w-4" />
            Surprise me
          </Link>
        </div>
      </div>
      </Container>
    </section>
  );
}