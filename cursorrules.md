# Guide for Adding Job-Specific Salary Pages to beregnloenefterskat.dk

This document outlines the process for creating and integrating new job-specific salary pages for the website.

## Overview

Each job page follows the same structure and requires updates to:
1. Create a new TSX component file
2. Add the route to `App.tsx`
3. Update the header navigation in `Header.tsx`
4. Update SEO with an entry in `sitemap.xml`

## Step 1: Create the Component File

Create a new file in `src/pages/` named `[JobTitle]LoenPage.tsx` following the template structure:

```tsx
import { useState, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";

const [JobTitle]LoenPage = () => {
  const [selectedCity, setSelectedCity] = useState("[Default City]");
  
  // City-specific salary data
  const cityData = {
    "[City 1]": { grossSalary: [amount], netMin: [amount], netMax: [amount] },
    "[City 2]": { grossSalary: [amount], netMin: [amount], netMax: [amount] },
    // Add more cities as needed
  };

  // Experience-based salary progression
  const experienceData = [
    { type: "[Experience Level 1]", grossSalary: [amount], netMin: [amount], netMax: [amount] },
    { type: "[Experience Level 2]", grossSalary: [amount], netMin: [amount], netMax: [amount] },
    // Add more experience levels as needed
  ];

  const cityExamples = useMemo(() => {
    return Object.entries(cityData).map(([city, data]) => {
      return {
        city,
        grossSalary: data.grossSalary,
        netMin: data.netMin,
        netMax: data.netMax
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-secondary/20 to-white">
      <SEO 
        title="[SEO Title]"
        description="[SEO Description]"
        keywords="[keyword1], [keyword2], [keyword3]"
      />
      <Header />
      <PageTitle title="[Job Title] Løn Efter Skat 2025" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 prose max-w-none">
            <h1 className="text-3xl font-bold mb-6">[Job Title] Løn Efter Skat 2025 – [Catchy Subtitle] 💰</h1>
            
            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-medium">
                TL;DR – [One-sentence summary with salary range]. Get a quick estimate with <a href="https://www.beregnloenefterskat.dk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">beregn løn efter skat</a>.
              </p>
            </div>

            <!-- Main content sections including:
            1. Introduction/context
            2. Salary tables (by city and experience)
            3. Factors affecting salary
            4. Example calculation
            5. FAQ section
            6. Tips for higher net salary
            7. Conclusion
            8. Sources -->

            <h2 className="text-2xl font-semibold mt-8 mb-4">Typisk [Job Title] Løn – Før & Efter Skat i 2025</h2>

            <!-- City-based salary table -->
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <!-- Table content -->
              </table>
            </div>

            <!-- Experience-based salary table -->
            <h2 className="text-2xl font-semibold mt-8 mb-4">Løntrappe – [Experience Progression Title]</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <!-- Table content -->
              </table>
            </div>

            <!-- Additional sections -->

            <p className="text-sm text-gray-600 italic mt-8">
              Opdateret: [month] 2025.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default [JobTitle]LoenPage;
```

## Step 2: Update App.tsx

Add the new page import and route to `App.tsx`:

```tsx
// Add the import at the top with other page imports
import [JobTitle]LoenPage from "./pages/[JobTitle]LoenPage";

// Add the route within the Routes component
<Route path="/jobs/[job-title]" element={<[JobTitle]LoenPage />} />
```

## Step 3: Update Header.tsx

Add the new job to the appropriate category in the `jobCategories` object in `Header.tsx`:

```tsx
const jobCategories = {
  // Existing categories
  "[Category Name]": [
    // Existing jobs
    { name: "[Job Title]", path: "/jobs/[job-title]" },
    // ...
  ],
  // ...
};
```

Choose the appropriate category:
- "Offentlige Ydelser" (Public Benefits)
- "Sundhed & Omsorg" (Health & Care)
- "Undervisning" (Education)
- "Sikkerhed & Forsvar" (Security & Defense)
- "Handel & Service" (Trade & Service)

## Step 4: Update Sitemap.xml

Add a new entry to `public/sitemap.xml` (and `page-sitemap.xml` if it exists):

```xml
<url>
  <loc>https://beregnloenefterskat.dk/jobs/[job-title]</loc>
  <lastmod>[YYYY-MM-DD]</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

**Note:** Always update both `sitemap.xml` and `page-sitemap.xml` with the new job page entry for SEO.

## URL Naming Conventions

Use kebab-case for job URLs, using only the job title:
- `[job-title]`

Examples:
- `phd`
- `bioanalytiker`
- `elevloen-sosu`
- `taxachauffoer`
- `jurist`
- `arkitekt`

Note: The previous convention of appending "-loen-efter-skat" to URLs is deprecated. All new job pages should use the simpler job title format for better user experience and cleaner URLs.

## Content Guidelines

1. **Research accurate salary data** for different cities and experience levels
2. Include an **interactive table** for cities and experience levels
3. Write **informative sections** covering:
   - Job context and qualifications
   - Factors affecting salary
   - Example calculation
   - Tips for maximizing take-home pay
   - FAQs
4. Use **Danish language** throughout
5. Include **external sources** for authority
6. **IMPORTANT:** All internal links should use the exact anchor text "beregn løn efter skat" for consistency and SEO benefits

## Recent Examples

### Arkitekt (May 2025)

The arkitekt page (`/jobs/arkitekt`) demonstrates best practices:
- Clean URL structure without redundant suffixes
- Interactive city salary table with highlighting
- Comprehensive experience-based progression data
- Well-structured sections including factors affecting salary and tips for higher net pay
- All internal links use "beregn løn efter skat" as anchor text
- Clear emoji usage in title (💰) for visual emphasis

## SEO Guidelines

1. Use descriptive titles: "[Job Title] Løn Efter Skat 2025"
2. Include relevant keywords in meta description
3. Use job-specific terms in heading tags
4. Link to the main calculator using the anchor text: `beregn løn efter skat`
5. Keep content updated annually

## Testing

Before finalizing, verify:
- Component renders correctly
- Navigation links work
- All routes and imports are working
- Tables display correctly on mobile
- SEO tags are properly set 
- All internal links use "beregn løn efter skat" as anchor text 