import React from "react";
import Image from "next/image";
import type { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return React.createElement(
    "div",
    { className: "w-40 flex-shrink-0" },
    React.createElement(
      "div",
      { className: "relative aspect-[2/3] overflow-hidden rounded-lg bg-surface" },
      movie.posterUrl
        ? React.createElement(Image, {
            src: movie.posterUrl,
            alt: movie.title,
            fill: true,
            className: "object-cover transition-transform duration-300 hover:scale-105",
          })
        : null
    ),
    React.createElement(
      "p",
      { className: "mt-2 truncate text-sm font-medium text-foreground" },
      movie.title
    ),
    React.createElement(
      "p",
      { className: "text-xs text-muted-foreground" },
      `${movie.releaseYear} • ${movie.rating}`
    )
  );
}