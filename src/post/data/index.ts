import Post from "../Post/Post.js";

const post1 = new Post(
  "I like cats",
  "I love cats for their playful spirit, soft purrs, and gentle, mysterious eyes that seem to hold stories of a thousand adventures. They are tiny companions who embody both grace and mischief, leaping effortlessly between moments of serene elegance and sudden bursts of energy. Whether they're curling up for a nap or chasing a flicker of light, their charm is irresistible. There's something endlessly comforting in the way a cat nestles up to you, trusting and warm. To love cats is to appreciate the quiet, beautiful joy they bring into every corner of life. ",
  "LoverCats04",
  {
    imageUrl: "/gato.webp",
    alternativeText: "white cat looking at camera",
  },
);

const post2 = new Post(
  "I hate cats",
  "I have to admit, cats and I don’t always see eye to eye. Sure, they have their moments, but their aloof nature and unpredictable attitudes can be frustrating. Unlike dogs, who greet you with uncontainable excitement and endless loyalty, cats often act like they own the place (and maybe they do). They choose when to give affection and when to ignore you completely, making them hard to read and sometimes cold. Dogs, on the other hand, are warm, loyal, and always eager to be by your side, ready for any adventure or just a cuddle. Dogs bring joy, energy, and an unconditional love that I find unbeatable",
  "HaterCats04",
  { imageUrl: "/perro.webp", alternativeText: "brown dog looking at camera" },
);

const posts: Post[] = [post1, post2];

export default posts;
