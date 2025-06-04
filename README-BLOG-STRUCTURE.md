# Blog Structure Documentation

## Overview
The blog system has been refactored from a single large file into a modular structure for better maintainability and easier content management.

## New Directory Structure

```
src/data/blogPosts/
├── types.ts                                          # TypeScript interfaces
├── index.ts                                          # Main export file with utility functions
├── sadan-far-du-mest-muligt-ud-af-din-loen-efter-skat.ts    # Blog post ID: 1
├── sadan-undgar-du-restskat.ts                       # Blog post ID: 2
├── sadan-optimerer-du-din-hverdagsokonomi-efter-skat.ts     # Blog post ID: 3
├── guide-til-at-forstaa-din-lonseddel.ts             # Blog post ID: 4
└── feriebudget-loen-efter-skat-kuffert-guide.ts      # Blog post ID: 5
```

## Blog Post Structure

Each blog post file exports a structured object with:

- **Metadata**: `id`, `slug`, `title`, `date`, `readTime`, `author`
- **Content**: Array of sections with types:
  - `'text'` - Regular paragraph content (supports HTML)
  - `'heading'` - Section headings
  - `'image'` - Images with URL and alt text

### Example Blog Post File

```typescript
import { BlogPost } from './types';

export const myBlogPost: BlogPost = {
  id: 6,
  slug: "my-new-blog-post",
  title: "My New Blog Post Title",
  date: "2025-06-01",
  readTime: "10 min",
  author: "admin",
  sections: [
    {
      type: 'image',
      content: '',
      imageUrl: "https://example.com/image.jpg",
      imageAlt: "Description of the image"
    },
    {
      type: 'heading',
      content: 'Main Section Heading'
    },
    {
      type: 'text',
      content: `This is regular paragraph text. You can include <strong>HTML formatting</strong> and <a href="/">links</a>.`
    }
  ]
};
```

## Adding a New Blog Post

1. **Create the blog post file** in `src/data/blogPosts/` with a descriptive filename
2. **Define the blog post object** following the structure above
3. **Add the export to index.ts**:
   ```typescript
   // Add import
   import { myBlogPost } from './my-new-blog-post';
   
   // Add to allBlogPosts array
   export const allBlogPosts: BlogPost[] = [
     optimizeSalaryBlogPost,
     avoidRestskattBlogPost,
     optimizeDailyFinancesBlogPost,
     understandPayslipBlogPost,
     feriebudgetBlogPost,
     myBlogPost  // Add your new post here
   ];
   ```

## Available Utility Functions

From `src/data/blogPosts/index.ts`:

- `allBlogPosts` - Array of all blog posts
- `getBlogPostById(id)` - Find blog post by ID
- `getBlogPostBySlug(slug)` - Find blog post by slug
- `getBlogPostsSortedByDate()` - Get posts sorted by date (newest first)
- `getRecentBlogPosts(limit)` - Get recent posts with optional limit

## Usage in Components

```typescript
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blogPosts';

// Get a specific blog post
const blogPost = getBlogPostBySlug('my-blog-post-slug');

// Get all blog posts sorted by date
const allPosts = getBlogPostsSortedByDate();
```

## Content Guidelines

- **Danish Content**: All blog posts are in Danish
- **HTML Support**: Text sections support HTML for formatting
- **Images**: Use either Unsplash URLs or local paths in `/Blogpictures/`
- **SEO**: Include relevant keywords and proper headings
- **Links**: Reference the main calculator with `<a href="/">`

## Migration Completed

✅ **Old file deleted**: `src/pages/BlogPost.tsx` (1,788 lines)  
✅ **New structure**: 5 individual blog post files + types + index  
✅ **Updated components**: Both `BlogPost.tsx` and `Blog.tsx` now use modular data  
✅ **Maintained functionality**: All existing blog posts work exactly the same  

## Benefits

- **Easier maintenance**: Edit individual posts without affecting others
- **Better organization**: Clear separation of content and presentation
- **Scalable**: Easy to add new blog posts
- **Type safety**: Full TypeScript support
- **Reusable**: Blog post data can be used in multiple components

## Customer Instructions

When you receive a Word document with a new blog post:

1. Convert the content to our section structure
2. Create a new `.ts` file in `src/data/blogPosts/`
3. Add the export to `index.ts`
4. The blog post will automatically appear on the website

The structure is designed to be flexible and maintainable for long-term content management. 