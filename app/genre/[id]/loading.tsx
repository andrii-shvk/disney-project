"use client";

import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="mt-32">
      <Skeleton className="ml-[92px] h-16 w-[600px] rounded-sm" />
      <div className="mx-auto mt-10 flex max-w-5xl flex-col space-y-10">
        <div className="flex flex-col space-y-10">
          {new Array(4).fill(0).map((_, i) => (
            <div className="flex items-center" key={i}>
            <Skeleton className="h-[224px] w-[400px] rounded-sm" />
              <div className="ml-10">
                <Skeleton className="h-[20px] w-[250px] rounded-sm" />
                <Skeleton className="mt-3 h-24 w-[600px]" />
              </div>
            </div>
          ))}
        </div>

        {/* <MovieCarousel title="Movies" movies={searchMovie} isVertical />
      <MovieCarousel title="You might also like" movies={popularMovies} /> */}
      </div>
    </section>
  );
};

export default Loading;
