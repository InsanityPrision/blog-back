import crypto from "crypto";
import { type PostImage, type PostStructure } from "./types";

class Post implements PostStructure {
  public id: string;
  public date: Date;
  public imageUrl: string;
  public alternativeText: string;

  constructor(
    public title: string,
    public content: string,
    public author: string,
    { imageUrl, alternativeText }: PostImage,
  ) {
    this.id = crypto.randomUUID();

    this.date = new Date(Date.now());

    this.imageUrl = imageUrl;

    this.alternativeText = alternativeText;
  }
}

export default Post;
