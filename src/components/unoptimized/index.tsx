import { useState } from "react";

import calculateTotalLikes from "@lib/calculateTotalLikes";
import type { Images } from "@lib/types";
import { INITIAL_IMAGES } from "@lib/data";
import Image from "./Image";

export default function UnoptimizedComponent() {
  const [count, setCount] = useState<number>(0);
  const [images] = useState<Images[]>(INITIAL_IMAGES);

  const handleLike = (imageId: number) => {
    console.log("Like image:", imageId);
  };

  const imageScore = calculateTotalLikes(images);

  return (
    <main>
      <h1>Unoptimized Component</h1>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      <span className="total-likes">Total Likes: {imageScore}</span>
      <section className="cards">
        {images.map((image) => (
          <Image
            key={image.id}
            title={image.title}
            likes={image.likes}
            onLike={() => handleLike(image.id)}
          />
        ))}
      </section>
    </main>
  );
}
