import { type PostStructure } from "./types";

class Post implements PostStructure {
  public id: string;
  public date: string;

  constructor(
    public title: string,
    public imageUrl: string,
    public content: string,
    public author: string,
  ) {
    this.id = crypto.randomUUID();

    this.date = Date();
  }
}

export default Post;
