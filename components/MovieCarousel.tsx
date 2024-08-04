import { Movie } from "@/typings";
import MovieCard from "./MovieCard";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselBtn";

type Props = {
  title: string;
  movies: Movie[];
  isVertical?: boolean;
  options?: EmblaOptionsType;
};

const MovieCarousel = ({ title, movies, isVertical, options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="relative z-50">
      <h2 className="pb-5 pl-2 text-xl font-bold">{title}</h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-3">
          {movies?.map((movie, index) => (
            <div className="flex-shrink-0" key={index}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        className="z-70 absolute bottom-[100px] left-5"
      />
      <NextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        className="z-70 absolute bottom-[100px] right-5"
      />
    </section>
  );
};

export default MovieCarousel;
