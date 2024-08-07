"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Genres } from "@/typings";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const GenreDropdown = () => {
  const [genreMovies, setGenreMovies] = useState<Genres>();

  const options: AxiosRequestConfig = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_TMDB_API_URL}/genre/movie/list?language=en`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
    },
  };

  useEffect(() => {
    axios
      .request<Genres>(options)
      .then((res: AxiosResponse<Genres>) => {
        setGenreMovies(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-1 text-white">
        Genre
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {genreMovies?.genres.map((genre) => (
          <DropdownMenuItem key={genre.id}>
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>{genre.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropdown;
