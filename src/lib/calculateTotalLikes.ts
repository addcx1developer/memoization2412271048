import type { Images } from "./types";

export default function calculateTotalLikes(images: Images[]) {
  console.log("Calculating total likes...");
  for (let i = 0; i < 1000000000; i++);
  return images.reduce(
    (prevTotalLikes, currenImage) => prevTotalLikes + currenImage.likes,
    0,
  );
}
