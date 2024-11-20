export interface PostImage {
  imageUrl: string;
  alternativeText: string;
}

export interface PostStructure {
  id: string;
  title: string;
  imageUrl: string;
  alternativeText: string;
  content: string;
  author: string;
  date: Date;
}
