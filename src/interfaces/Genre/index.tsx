type Genre = {
  id: number;
  name: string;
};

interface GenreList {
  genres: Genre[];
}

export type { Genre, GenreList };
