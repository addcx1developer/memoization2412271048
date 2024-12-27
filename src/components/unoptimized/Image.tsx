type ImageProps = {
  title: string;
  likes: number;
  onLike: () => void;
};

export default function Image({ title, likes, onLike }: ImageProps) {
  console.log("Rendering Image Component:", title);
  return (
    <article className="card">
      <h2>{title}</h2>
      <button className="likes" onClick={onLike}>
        {likes} 👍
      </button>
    </article>
  );
}
