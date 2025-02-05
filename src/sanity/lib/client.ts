import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-02-01", // Use a valid API version
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Secure token
});

