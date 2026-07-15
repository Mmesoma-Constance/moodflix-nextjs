import { getPopularMovies } from "@/lib/tmdb";
import Container from "@/components/layout/Container";
import MovieCard from "@/components/ui/MovieCard";

export default async function PopularRail() {
  const movies = await getPopularMovies();

  return (
    <section className="py-16">
      <Container>
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
          Popular Right Now
        </h2>

        <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
          {movies.slice(0, 10).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </Container>
    </section>
  );
}