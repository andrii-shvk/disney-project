"use client";

import MovieCarousel from "@/components/MovieCarousel";
import { getPopularMovies, searchedMovies } from "@/lib/getMovies";
import { Movie } from "@/typings";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  params: {
    term: string;
  };
};

const SearchPage = ({ params: { term } }: Props) => {
  if (!term) notFound();
  const termToUse = decodeURI(term);

  const [searchMovie, setSearchMovie] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const searchMovies = await searchedMovies(termToUse);
      setSearchMovie(searchMovies);

      const popMovies = await getPopularMovies();
      setPopularMovies(popMovies);
    };
    fetchData();
  }, []);

  return (
    <section className="mt-32">
      <div className="mx-auto flex max-w-5xl flex-col space-y-10">
        <h1 className="text-6xl font-bold">Search results for {termToUse}</h1>

        <MovieCarousel title="Movies" movies={searchMovie} isVertical />
        <MovieCarousel title="You might also like" movies={popularMovies} />
      </div>
    </section>
  );
};

export default SearchPage;
