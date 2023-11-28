// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const projectsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.array(
      z.object({
        header: z.string(),
        description: z.string(),
        repo: z.string(),
        website: z.string(),
        image: image(),
        skills: z.array(z.string()),
      })
    ),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectsCollection,
};
