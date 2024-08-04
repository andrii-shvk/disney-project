export type Movie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    postet_path?: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type SearchResults = {
    page: number;
    results: Movie[];
    tota_pages: number;
    total_results: number;
}

export type Genre = {
    id: number;
    name: string;
    // Define properties based on the structure of the movie object from the API response
}

export type Genres = {
    genres: Genre[]; // Assuming the API returns an array of movies under 'results'
}