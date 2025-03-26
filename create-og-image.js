import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get the directory name properly in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure output directory exists
const PUBLIC_DIR = path.join(__dirname, 'public');

async function createOgImage() {
  try {
    // Read the source favicon
    const sourceImage = path.join(PUBLIC_DIR, 'favicon.ico');
    
    // Create a 1200x630 image (recommended OG image size)
    // Use icon-512.png as source since it's larger and already generated
    await sharp(path.join(PUBLIC_DIR, 'icon-512.png'))
      .resize(1200, 630, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFile(path.join(PUBLIC_DIR, 'og-image-new.png'));
    
    console.log('OG image created successfully!');
  } catch (error) {
    console.error('Error creating OG image:', error);
  }
}

createOgImage(); 