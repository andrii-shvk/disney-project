import MovieCarousel from "@/components/MovieCarousel";
import { getPopularMovies, searchedMovies } from "@/lib/getMovies";
import { Movie } from "@/typings";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

const SearchPage = async ({ params: { term } }: Props) => {
  if (!term) notFound();
  const termToUse = decodeURI(term);

  const searchMovies: Movie[] = await searchedMovies(termToUse);
  const popMovies: Movie[] = await getPopularMovies();

  return (
    <section className="mt-32">
      <div className="mx-auto flex max-w-5xl flex-col space-y-10">
        <h1 className="text-6xl font-bold">Search results for {termToUse}</h1>

        <MovieCarousel title="Movies" movies={searchMovies} isVertical />
        <MovieCarousel title="You might also like" movies={popMovies} />
      </div>
    </section>
  );
};

export default SearchPage;
