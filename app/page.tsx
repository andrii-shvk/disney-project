"use client";

import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCarousel from "@/components/MovieCarousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from "@/lib/getMovies";
import { Movie } from "@/typings";
import { useEffect, useState } from "react";

export default function Home() {
  const [upcomingMovies, setUpComingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const comingMovies = await getUpComingMovies();
      setUpComingMovies(comingMovies);

      const popMovies = await getPopularMovies();
      setPopularMovies(popMovies);

      const topRated = await getTopRatedMovies();
      setTopRatedMovies(topRated);
    };
    fetchData();
  }, []);

  return (
    <main>
      <CarouselBannerWrapper />
      
      <div className="flex flex-col space-y-2 lg:-mt-48">
        <MovieCarousel title="Upcoming" movies={upcomingMovies} />
        <MovieCarousel title="Top rated" movies={popularMovies} />
        <MovieCarousel title="Popular" movies={topRatedMovies} />
      </div>
    </main>
  );
}
