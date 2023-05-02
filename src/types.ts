export interface Character {
  _id: string;
  name: string;
  species: string;
  gender: string;
  homeworld: string;
  [key: string]: string; // index signature
}
export type Movie = {
  _id: string;
  name: string;
};

export interface Quote {
  id: string;
  dialog: string;
  character: string;
  movie: string;
}

export interface Book {
  id: string;
  name: string;
  author: string;
  published: string;
}

export interface Data {
  docs: Character[] | Book[] | Movie[] | Quote[];
}

export type Endpoint = "characters" | "books" | "movies" | "quotes";
export type SelectionType = "character" | "book" | "movie" | "quote";
