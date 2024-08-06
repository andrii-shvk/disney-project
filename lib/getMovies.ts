import { SearchResults } from "@/typings";
import { AxiosResponse } from "axios";
import axios from "axios";

export const fetchFromTMDB = async (url: URL) => {
  try {
    const options = {
      method: "GET",
      url: url.toString(),
      params: {
        api: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        include_adult: false,
        include_video: false,
        language: "en-US",
        page: 1,
        sort_by: "popularity.desc",
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
      },
    };

    const response: AxiosResponse<SearchResults> = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("Error fetching data", error);
  }
};

export const getUpComingMovies = async (): Promise<any> => {
  const url = new URL(`${process.env.NEXT_PUBLIC_TMDB_API_URL}/movie/upcoming`);
  const data = await fetchFromTMDB(url);
  return data?.results;
};

export const getDiscoverMovies = async (
  id?: string,
  keywords?: string,
): Promise<any> => {
  const url = new URL(`${process.env.NEXT_PUBLIC_TMDB_API_URL}/discover/movie`);

  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_genres", id);

  const data = await fetchFromTMDB(url);
  return data?.results;
};

export const getPopularMovies = async (): Promise<any> => {
  const url = new URL(`${process.env.NEXT_PUBLIC_TMDB_API_URL}/movie/popular`);
  const data = await fetchFromTMDB(url);

  return data?.results;
}

export const getTopRatedMovies = async (): Promise<any> => {
  const url = new URL(`${process.env.NEXT_PUBLIC_TMDB_API_URL}/movie/top_rated`);
  const data = await fetchFromTMDB(url);

  return data?.results;
}

export const searchedMovies = async (term: string): Promise<any> => {
  const url = new URL(`${process.env.NEXT_PUBLIC_TMDB_API_URL}/search/movie`)
  url.searchParams.set("query", term);
  
  const data = await fetchFromTMDB(url);

  return data?.results;
}

export const getGenreMovies = async (): Promise<any> => {
  const url = new URL(`${process.env.NEXT_PUBLIC_TMDB_API_URL}/genre/movie/list`)
  const data = await fetchFromTMDB(url);

  return data?.results;
}