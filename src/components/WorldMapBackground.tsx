import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WorldMapBackground() {
  return (
    <ImageWithFallback
      src="https://images.unsplash.com/photo-1742415105376-43d3a5fd03fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGdvbGRlbiUyMGJsYWNrfGVufDF8fHx8MTc2Mzk5NjkxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      alt="World Map"
      className="w-full h-full object-cover"
    />
  );
}
