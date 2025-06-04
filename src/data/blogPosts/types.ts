// Define interfaces for the content structure
export interface BlogPostSection {
  type: 'text' | 'heading' | 'image';
  content: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  sections: BlogPostSection[];
} 