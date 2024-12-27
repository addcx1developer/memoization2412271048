import { memo } from "react";

type ImageProps = {
  id: number;
  title: string;
  likes: number;
  onLike: (imageId: number) => void;
};

function ImageComponent({ id, title, likes, onLike }: ImageProps) {
  console.log("Rendering Image Component:", title);
  return (
    <article className="card">
      <h2>{title}</h2>
      <button className="likes" onClick={() => onLike(id)}>
        {likes} 👍
      </button>
    </article>
  );
}

export default memo(ImageComponent);
