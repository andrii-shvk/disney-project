import { Movie } from "@/typings";
import MovieCard from "./MovieCard";

type Props = {
  title: string;
  movies: Movie[];
  isVertical?: boolean;
};

const MovieCarousel = ({ title, movies, isVertical }: Props) => {
  return (
    // продолжить тут с emblaCarousel
    <div className="z-50">
      <h2 className="px-10 py-2 text-xl font-bold">{title}</h2>
      <div className="scrollbar-hide flex flex-row overflow-scroll p-5 lg:px-10 space-x-4">
        {movies?.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCarousel;
