interface RemoteImageProps {
  imageId: string;
  alt: string;
  className?: string;
  width?: number;
  quality?: number;
}

export function RemoteImage({
  imageId,
  alt,
  className = "",
  width = 900,
  quality = 85,
}: RemoteImageProps) {
  return (
    <img
      src={`https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=${width}&q=${quality}`}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
