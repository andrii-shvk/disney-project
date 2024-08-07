import MovieCarousel from "@/components/MovieCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";
import { Movie } from "@/typings";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = async ({
  params: { id },
  searchParams: { genre },
}: Props) => {
  const movie: Movie[] = await getDiscoverMovies(id);

  return (
    <section className="mt-32">
      <div className="mx-auto flex max-w-5xl flex-col space-y-10">
        <h1 className="text-6xl font-bold">Results for {genre}</h1>
        <MovieCarousel title="Genre" movies={movie} isVertical />
      </div>
    </section>
  );
};

export default GenrePage;
