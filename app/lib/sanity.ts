import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: process.env.API_VERSION, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  // stega: {
  //   enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview",
  //   studioUrl: "/studio",
  // },
});

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}