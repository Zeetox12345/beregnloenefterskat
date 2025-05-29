# Collaboration Links - Cursor Rules for Salary Pages

## Overview
This document defines the standard implementation for collaboration links on salary/job pages in the beregnloenefterskat.dk project.

## Implementation Template

### Standard Collaboration Section
Place this section **after the conclusion paragraph** and **before the sources section** in all salary pages:

```tsx
<div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 my-8">
  <div className="flex items-center justify-center space-x-2">
    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
    <p className="text-center text-blue-800 font-medium">
      Dette indlæg er udgivet i samarbejde med <a href="[PARTNER_URL]" className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors duration-200" target="_blank" rel="noopener noreferrer">[PARTNER_NAME]</a>
    </p>
  </div>
</div>
```

## Partner Guidelines

### Placeholder Replacements
- `[PARTNER_URL]` - Replace with the full URL including https://
- `[PARTNER_NAME]` - Replace with the partner's display name (e.g., "Aktiebegynder.dk", "Tjekrevisor.dk")

### Partner Examples
```tsx
// For financial/investment content
<a href="https://aktiebegynder.dk/" ... >Aktiebegynder.dk</a>

// For accounting/audit content  
<a href="https://tjekrevisor.dk/" ... >Tjekrevisor.dk</a>

// For legal content
<a href="https://advokatpartner.dk/" ... >AdvokatPartner.dk</a>
```

## Design Requirements

### Visual Elements
- **Background**: Gradient from blue-50 to indigo-50
- **Border**: Blue-200 with rounded corners
- **Padding**: 6 units (p-6)
- **Margin**: 8 units vertical (my-8)
- **Icon**: Code/development SVG icon in blue-600
- **Text**: Blue-800 for main text, blue-600 for link with hover transition to blue-800

### Typography
- **Font weight**: Medium for main text, semibold for partner link
- **Alignment**: Center-aligned
- **Transitions**: Color transition on hover (duration-200)

## Placement Rules

### Required Position
1. **After**: The conclusion paragraph of the article
2. **Before**: The "Kilder" (Sources) section
3. **Structure**:
   ```
   [Article content]
   [Conclusion paragraph]
   [COLLABORATION SECTION] ← Insert here
   [Sources section]
   [Update timestamp]
   ```

### Content Flow Example
```tsx
<h2 className="text-2xl font-semibold mt-8 mb-4">Konklusion</h2>
<p>
  [Conclusion content...]
</p>

{/* COLLABORATION SECTION GOES HERE */}
<div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 my-8">
  <!-- Collaboration content -->
</div>

<h2 className="text-2xl font-semibold mt-8 mb-4">Kilder</h2>
```

## Technical Requirements

### Link Attributes
- `target="_blank"` - Opens in new tab
- `rel="noopener noreferrer"` - Security best practice for external links
- `className` - Must include hover states and transitions

### Accessibility
- Descriptive link text (partner name)
- Proper color contrast ratios
- SVG icon with proper fill attributes

## Quality Checklist

Before implementing, verify:
- [ ] Correct partner URL (including https://)
- [ ] Partner name matches their branding
- [ ] Positioned after conclusion, before sources
- [ ] All CSS classes applied correctly
- [ ] Link opens in new tab with security attributes
- [ ] Visual styling matches the template exactly
- [ ] Icon displays properly in blue-600
- [ ] Hover effects work on both text and link

## Usage Notes

- Only add collaboration sections when there's a genuine partnership
- Partner should be relevant to the job/salary topic
- Use this template consistently across all salary pages
- Do not modify the visual design without updating this template
- Always test the link functionality before publishing 