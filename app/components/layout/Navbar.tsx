"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Search, Bookmark, Sparkles } from "lucide-react";
import { NAV_LINKS } from "@/constants/nav-links";
import Image from "next/image";
import Container from "./Container";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky font-display top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
     <Link href="/" className="flex items-center gap-2">
  <Image
    src="/logo.png"
    alt="MoodFlix logo"
    width={32}
    height={32}
    priority
  />
  <span className=" text-xl font-bold text-foreground">
    Mood<span className="text-primary">Flix</span>
  </span>
</Link>
        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right-side actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/search" aria-label="Search">
            <Search className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="/surprise" aria-label="Surprise me">
            <Sparkles className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="/watchlist" aria-label="Watchlist">
            <Bookmark className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </Container>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col gap-4 border-t border-border px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}