import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import Image from "next/image";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="relative flex-shrink-0 inset-0 transform cursor-pointer transition duration-200 ease-out hover:scale-105 hover:drop-shadow-lg">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-bgDark" />

      <Image
        className="h-56 w-fit rounded-sm object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl lg:min-w-[400px]"
        alt={movie.title}
        src={getImagePath(movie.backdrop_path)}
        width={400}
        height={224}
        priority
      />
      <p className="absolute bottom-5 left-5 z-20">{movie.title}</p>
    </div>
  );
};

export default MovieCard;
