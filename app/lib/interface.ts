import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: SanityImageSource;
}
