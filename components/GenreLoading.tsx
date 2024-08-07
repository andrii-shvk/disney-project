"use client";

import MovieCarousel from "@/components/MovieCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";
import { Movie } from "@/typings";
import { useEffect, useState } from "react";

type Props = {
  id: string;
  genre: string;
};

const GenreLoading = async ({ id, genre }: Props) => {
  const [genreMovie, setGenreMovie] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const movie = await getDiscoverMovies(id);
      setGenreMovie(movie);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto flex max-w-5xl flex-col space-y-10">
      <h1 className="text-6xl font-bold">Results for {genre}</h1>
      <MovieCarousel title="Genre" movies={genreMovie} isVertical />
    </div>
  );
};

export default GenreLoading;
