import crypto from "crypto";
import { type PostStructure } from "./types";

class Post implements PostStructure {
  public id: string;
  public date: Date;

  constructor(
    public title: string,
    public imageUrl: string,
    public content: string,
    public author: string,
  ) {
    this.id = crypto.randomUUID();

    this.date = new Date(Date.now());
  }
}

export default Post;
