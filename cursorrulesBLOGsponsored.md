# Cursor Rules for Blog Post Creation

## Project Context
This project uses a modular blog structure where each blog post is a separate TypeScript file in `src/data/blogPosts/`. All blog posts are in Danish and focus on salary calculation, tax, and personal finance topics.

## Blog Post Creation Guidelines

### 1. File Structure
- Create new blog posts in `src/data/blogPosts/`
- Use descriptive kebab-case filenames (e.g., `ny-artikel-om-skat.ts`)
- Always increment the ID number (check existing posts for next available ID)

### 2. Required Template Structure
```typescript
import { BlogPost } from './types';

export const yourBlogPostName: BlogPost = {
  id: [NEXT_AVAILABLE_ID],
  slug: "kebab-case-url-slug",
  title: "Danish Title - Must be SEO Optimized",
  date: "YYYY-MM-DD",
  readTime: "X min",
  author: "admin",
  sections: [
    // Content sections here
  ]
};
```

### 3. Content Section Types
Use these three section types only:

**Sponsored Content Indicator (if applicable):**
```typescript
{
  type: 'text',
  content: `<div style="background-color: #f8f9fa; border-left: 4px solid #ffd700; padding: 12px; margin-bottom: 24px; font-size: 14px; color: #666;">
<strong>Sponsoreret indhold</strong>
</div>`
}
```

**Images:**
```typescript
{
  type: 'image',
  content: '',
  imageUrl: "https://images.unsplash.com/photo-... OR /Blogpictures/filename.png",
  imageAlt: "Danish description of the image"
}
```

**Headings:**
```typescript
{
  type: 'heading',
  content: 'Danish Section Heading'
}
```

**Text Content:**
```typescript
{
  type: 'text',
  content: `Danish paragraph text. Can include <strong>formatting</strong>, <a href="/">links to calculator</a>, and HTML tables/lists.`
}
```

### 4. Content Requirements
- **Language**: All content must be in Danish
- **Topic**: Focus on salary calculation, tax, personal finance, or economic guidance
- **Links**: Always include references to the main calculator with `<a href="/">beregnloenefterskat.dk</a>`
- **SEO**: Include relevant keywords like "løn efter skat", "skatteberegning", "nettoløn", "bruttoløn"
- **Length**: Aim for 8-20 minute read times
- **Structure**: Use clear headings to break up content

### 5. HTML Formatting Guidelines
- Use `<strong>` for bold text
- Use `<ul>` and `<li>` for lists with proper styling:
  ```html
  <ul style="margin: 16px 0; padding-left: 24px;">
  <li style="margin-bottom: 8px;">List item text</li>
  </ul>
  ```
- Use tables for data with proper styling:
  ```html
  <div style="overflow-x: auto; margin: 24px 0;">
  <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <thead>
      <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <th style="padding: 16px; text-align: left; font-weight: 600;">Header</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 16px;">Data</td>
      </tr>
    </tbody>
  </table>
  </div>
  ```

### 6. After Creating Blog Post File

**ALWAYS update the index file:**
1. Add import statement:
   ```typescript
   import { yourBlogPostName } from './your-filename';
   ```

2. Add to allBlogPosts array:
   ```typescript
   export const allBlogPosts: BlogPost[] = [
     optimizeSalaryBlogPost,      // ID: 1
     avoidRestskattBlogPost,      // ID: 2
     optimizeDailyFinancesBlogPost, // ID: 3
     understandPayslipBlogPost,   // ID: 4
     feriebudgetBlogPost,         // ID: 5
     yourBlogPostName            // ID: [NEW_ID]
   ];
   ```

### 7. Image Guidelines
- **Unsplash**: Use high-quality images from Unsplash with proper attribution
- **Local images**: Store in `/public/Blogpictures/` and reference as `/Blogpictures/filename.png`
- **Alt text**: Always provide descriptive Danish alt text
- **Placement**: Usually place a hero image after sponsored content indicator (if any)

### 8. Sponsored Content Rules
- If content is sponsored, ALWAYS include the sponsored content indicator as the first section
- Mention sponsor naturally within content
- Include external links to sponsors when appropriate
- Use `target="_blank" rel="noopener noreferrer"` for external links

### 9. Quality Checklist
Before considering the blog post complete:
- [ ] File created in correct location
- [ ] ID is sequential and unique
- [ ] Slug matches filename
- [ ] Title is SEO-optimized Danish
- [ ] Date is correct format
- [ ] Read time is estimated appropriately
- [ ] At least one reference to main calculator
- [ ] Danish language throughout
- [ ] Proper HTML formatting
- [ ] Images have alt text
- [ ] Index file updated with import and array addition
- [ ] Content provides genuine value to readers

### 10. Common Danish Finance Terms
Use these terms appropriately:
- **løn efter skat** = salary after tax
- **bruttoløn** = gross salary
- **nettoløn** = net salary
- **skatteberegning** = tax calculation
- **restskat** = additional tax
- **fradrag** = deduction
- **trækprocent** = tax percentage
- **AM-bidrag** = labor market contribution
- **forskudsopgørelse** = preliminary tax assessment

## Example Blog Post Creation Process
1. Check existing blog posts to find next available ID
2. Create new file with descriptive name
3. Copy template structure
4. Fill in metadata (id, slug, title, date, readTime)
5. Create sections array with appropriate content
6. Update `src/data/blogPosts/index.ts` with import and array addition
7. Test that blog post appears correctly on website

## Error Prevention
- Never reuse IDs
- Always update index.ts
- Never mix languages
- Always include calculator references
- Maintain consistent styling
- Use proper TypeScript types 