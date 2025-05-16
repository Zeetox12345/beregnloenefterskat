import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing the TSX files
const pagesDir = path.join(__dirname, 'src', 'pages');

// Regex pattern to match emoji characters (Unicode ranges for common emojis)
// This pattern covers most emojis including emoticons, symbols, transport symbols, etc.
const emojiPattern = /[\u{1F300}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;

// Get all TSX files in the pages directory
const files = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.tsx'));

console.log(`Found ${files.length} TSX files in pages directory`);

// Process each file
let processedCount = 0;
let modifiedCount = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  
  // Read the file content
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if the file contains emojis
  if (emojiPattern.test(content)) {
    // Save the original content for comparison
    const originalContent = content;
    
    // Replace emojis with empty string
    content = content.replace(emojiPattern, '');
    
    // Write the modified content back to the file
    fs.writeFileSync(filePath, content);
    
    modifiedCount++;
    console.log(`Removed emojis from ${file}`);
  }
  
  processedCount++;
});

console.log(`\nProcessed ${processedCount} files`);
console.log(`Modified ${modifiedCount} files by removing emojis`); 