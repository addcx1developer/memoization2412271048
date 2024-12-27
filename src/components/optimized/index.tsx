import { useCallback, useMemo, useState } from "react";

import calculateTotalLikes from "@lib/calculateTotalLikes";
import type { Images } from "@lib/types";
import { INITIAL_IMAGES } from "@lib/data";
import Image from "./Image";

export default function OptimizedComponent() {
  const [count, setCount] = useState<number>(0);
  const [images] = useState<Images[]>(INITIAL_IMAGES);

  const handleLike = useCallback((imageId: number) => {
    console.log("Like image:", imageId);
  }, []);

  const imageScore = useMemo(() => calculateTotalLikes(images), [images]);

  return (
    <main>
      <h1>Optimized Component</h1>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      <span className="total-likes">Total Likes: {imageScore}</span>
      <section className="cards">
        {images.map((image) => (
          <Image
            key={image.id}
            id={image.id}
            title={image.title}
            likes={image.likes}
            onLike={handleLike}
          />
        ))}
      </section>
    </main>
  );
}
