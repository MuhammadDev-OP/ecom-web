import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_ACCESS_TOKEN,
  dataset: "production",
  apiVersion: "v2023-05-28",
  useCdn: true,
});

