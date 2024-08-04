"use client";

import { getDiscoverMovies, getUpComingMovies } from "@/lib/getMovies";
import { Movie } from "@/typings";
import { useEffect, useState } from "react";
import CarouselBanner from "./CarouselBanner";

type Props = {
    id?: string;
    keywords?: string;
}

const CarouselBannerWrapper = ({id, keywords}: Props) => {
    const [discoverMovies, setDiscoverMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const movies = await getDiscoverMovies(id, keywords);
            setDiscoverMovies(movies)
        }
        fetchData();
    }, [])

  return <CarouselBanner movies={discoverMovies} />
}

export default CarouselBannerWrapper