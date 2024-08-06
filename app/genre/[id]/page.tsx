"use client";

import MovieCarousel from "@/components/MovieCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";
import { Movie } from "@/typings";
import { useEffect, useState } from "react";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = ({ params: { id }, searchParams: { genre } }: Props) => {
  const [genreMovie, setGenreMovie] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const movie = await getDiscoverMovies(id);
      setGenreMovie(movie);
    };
    fetchData();
  }, []);
  console.log('genreMovie', genreMovie);

  return (
    <section className="mt-32">
      <div className="mx-auto flex max-w-5xl flex-col space-y-10">
      <h1 className="text-6xl font-bold">Search results for {genre}</h1>
        <MovieCarousel title="Genre" movies={genreMovie} isVertical />
      </div>
    </section>
  );
};

export default GenrePage;
