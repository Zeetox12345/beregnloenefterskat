export { type BlogPost, type BlogPostSection } from './types';
export { optimizeSalaryBlogPost } from './sadan-far-du-mest-muligt-ud-af-din-loen-efter-skat';
export { avoidRestskattBlogPost } from './sadan-undgar-du-restskat';
export { optimizeDailyFinancesBlogPost } from './sadan-optimerer-du-din-hverdagsokonomi-efter-skat';
export { understandPayslipBlogPost } from './guide-til-at-forstaa-din-lonseddel';
export { feriebudgetBlogPost } from './feriebudget-loen-efter-skat-kuffert-guide';
export { investmentBlogPost } from './sadan-far-du-mere-ud-af-din-loen-gennem-investering';
export { gamblingSkatteBlogPost } from './skal-man-betale-skat-af-gevinster-gambling';

import type { BlogPost } from './types';
import { optimizeSalaryBlogPost } from './sadan-far-du-mest-muligt-ud-af-din-loen-efter-skat';
import { avoidRestskattBlogPost } from './sadan-undgar-du-restskat';
import { optimizeDailyFinancesBlogPost } from './sadan-optimerer-du-din-hverdagsokonomi-efter-skat';
import { understandPayslipBlogPost } from './guide-til-at-forstaa-din-lonseddel';
import { feriebudgetBlogPost } from './feriebudget-loen-efter-skat-kuffert-guide';
import { investmentBlogPost } from './sadan-far-du-mere-ud-af-din-loen-gennem-investering';
import { gamblingSkatteBlogPost } from './skal-man-betale-skat-af-gevinster-gambling';

// Array of all blog posts for easy iteration
export const allBlogPosts: BlogPost[] = [
  optimizeSalaryBlogPost,      // ID: 1
  avoidRestskattBlogPost,      // ID: 2
  optimizeDailyFinancesBlogPost, // ID: 3
  understandPayslipBlogPost,   // ID: 4
  feriebudgetBlogPost,         // ID: 5
  investmentBlogPost,          // ID: 6
  gamblingSkatteBlogPost       // ID: 7
];

// Get blog post by ID
export const getBlogPostById = (id: number): BlogPost | undefined => {
  return allBlogPosts.find(post => post.id === id);
};

// Get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return allBlogPosts.find(post => post.slug === slug);
};

// Get all blog posts sorted by date (newest first)
export const getBlogPostsSortedByDate = (): BlogPost[] => {
  return [...allBlogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

// Get recent blog posts (limit can be specified)
export const getRecentBlogPosts = (limit: number = 3): BlogPost[] => {
  return getBlogPostsSortedByDate().slice(0, limit);
}; 