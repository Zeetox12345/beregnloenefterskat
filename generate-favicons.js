import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get the directory name properly in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure output directory exists
const PUBLIC_DIR = path.join(__dirname, 'public');

async function generateFavicons() {
  try {
    // Read the source favicon (assuming it's already an image like PNG)
    // For ICO files, you may need to use a dedicated library
    const sourceImage = path.join(PUBLIC_DIR, 'favicon.ico');
    
    // Create different sized PNGs
    await sharp(sourceImage)
      .resize(16, 16)
      .toFile(path.join(PUBLIC_DIR, 'favicon-16x16.png'));
    
    await sharp(sourceImage)
      .resize(32, 32)
      .toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'));
    
    await sharp(sourceImage)
      .resize(180, 180)
      .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
    
    await sharp(sourceImage)
      .resize(192, 192)
      .toFile(path.join(PUBLIC_DIR, 'icon-192.png'));
    
    await sharp(sourceImage)
      .resize(512, 512)
      .toFile(path.join(PUBLIC_DIR, 'icon-512.png'));
    
    console.log('All favicon variants generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 