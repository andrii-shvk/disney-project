import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCarousel from "@/components/MovieCarousel";
import { EmblaOptionsType } from "embla-carousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from "@/lib/getMovies";
import { Movie } from "@/typings";

export default async function Home() {
  const upcomingMovies: Movie[] = await getUpComingMovies();
  const popularMovies: Movie[] = await getPopularMovies();
  const topRatedMovies: Movie[] = await getTopRatedMovies();

  const OPTIONS: EmblaOptionsType = {};

  return (
    <main>
      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 max-md:-mt-32 md:-mt-40 lg:-mt-48">
        <MovieCarousel
          title="Upcoming"
          movies={upcomingMovies}
          options={OPTIONS}
        />
        <MovieCarousel
          title="Top rated"
          movies={popularMovies}
          options={OPTIONS}
        />
        <MovieCarousel
          title="Popular"
          movies={topRatedMovies}
          options={OPTIONS}
        />
      </div>
    </main>
  );
}
