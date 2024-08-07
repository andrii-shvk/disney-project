import { getDiscoverMovies } from "@/lib/getMovies";
import { Movie } from "@/typings";
import CarouselBanner from "./CarouselBanner";

type Props = {
  id?: string;
  keywords?: string;
};

const CarouselBannerWrapper = async ({ id, keywords }: Props) => {
  const discoverMovies: Movie[] = await getDiscoverMovies(id, keywords);
  return <CarouselBanner movies={discoverMovies} />;
};

export default CarouselBannerWrapper;
