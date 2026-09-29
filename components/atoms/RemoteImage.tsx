interface RemoteImageProps {
  imageId: string;
  alt: string;
  className?: string;
}

export function RemoteImage({ imageId, alt, className = "" }: RemoteImageProps) {
  return (
    <img
      src={`https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=900&q=85`}
      alt={alt}
      className={className}
    />
  );
}
