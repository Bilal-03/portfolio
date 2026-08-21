import Image from "next/image";

interface ProjectMediaProps {
  poster: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function ProjectMedia({ poster, alt, className = "", priority = false }: ProjectMediaProps) {
  return (
    <div className={`media-frame ${className}`}>
      <Image
        src={poster}
        alt={alt}
        fill
        sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
        className="media-poster"
        priority={priority}
      />
    </div>
  );
}
