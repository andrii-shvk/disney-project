"use client";

import { Movie } from "@/typings";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

Autoplay.globalOptions = { delay: 8000 };

type Props = {
  movies: Movie[];
};

const CarouselBanner = (props: Props) => {
  const { movies } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, duration: 100 },
    [Autoplay()],
  );

  useEffect(() => {
    if (emblaApi) console.log(emblaApi.slideNodes());
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {movies?.map((movie) => (
          <div className="relative min-w-0 flex-full" key={movie.id}>
            <Image
              alt={movie.title}
              src={getImagePath(movie.backdrop_path, true)}
              width={1920}
              height={1080}
              priority
            />
            <div className="absolute left-0 top-0 hidden h-full w-full bg-transparent bg-gradient-to-r from-gray-900/90 via-transparent to-transparent pt-64 lg:inline xl:pt-80">
              <h2 className="max-w-xl text-5xl font-bold">{movie.title}</h2>
              <p className="line-clamp-3 max-w-xl">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;
