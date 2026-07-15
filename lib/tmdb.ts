import type { TMDBMovie, TMDBMovieResponse } from "@/types/tmdb";
import type { Movie } from "@/types/movie";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const API_TOKEN = process.env.TMDB_API_TOKEN;

export function getImageUrl(
  path: string | null,
  size: "w200" | "w342" | "w500" | "w780" | "original" = "w500"
): string | null {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}

function mapTMDBMovieToMovie(tmdbMovie: TMDBMovie): Movie {
  return {
    id: tmdbMovie.id,
    title: tmdbMovie.title,
    overview: tmdbMovie.overview,
    posterUrl: getImageUrl(tmdbMovie.poster_path, "w500"),
    backdropUrl: getImageUrl(tmdbMovie.backdrop_path, "original"),
    releaseYear: tmdbMovie.release_date
      ? new Date(tmdbMovie.release_date).getFullYear()
      : null,
    rating: Math.round(tmdbMovie.vote_average * 10) / 10,
  };
}

export async function getPopularMovies(): Promise<Movie[]> {
  const res = await fetch(
    `${TMDB_BASE_URL}/movie/popular?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch popular movies: ${res.status}`);
  }

  const data: TMDBMovieResponse = await res.json();
  return data.results.map(mapTMDBMovieToMovie);
}