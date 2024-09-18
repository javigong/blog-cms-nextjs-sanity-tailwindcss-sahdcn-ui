import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "next-sanity";

export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: SanityImageSource;
}
export interface blogArticle {
  title: string;
  content: PortableTextBlock;
  currentSlug: string;
  titleImage: SanityImageSource;
}
