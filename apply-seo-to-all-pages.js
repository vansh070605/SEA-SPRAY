/**
 * Script to apply SEO optimization to all HTML pages
 * Run this script to automatically add SEO script references to all HTML files
 */

const fs = require('fs');
const path = require('path');

// List of HTML files to update
const htmlFiles = [
    'index.html',
    'about.html',
    'services.html',
    'fleet.html',
    'gallery.html',
    'team.html',
    'testimonials.html',
    'contact.html'
];

// SEO script reference to add
const seoScriptTag = '  <!-- SEO Optimization Script -->\n  <script src="seo-enhancer.js"></script>\n';

function updateHTMLFile(filename) {
    try {
        const filePath = path.join(__dirname, filename);
        
        if (!fs.existsSync(filePath)) {
            console.log(`⚠️  File ${filename} not found, skipping...`);
            return;
        }

        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if SEO script is already present
        if (content.includes('seo-enhancer.js')) {
            console.log(`✅ ${filename} already has SEO script, skipping...`);
            return;
        }

        // Find the closing body tag and insert SEO script before it
        const bodyCloseIndex = content.lastIndexOf('</body>');
        
        if (bodyCloseIndex === -1) {
            console.log(`⚠️  No closing body tag found in ${filename}, skipping...`);
            return;
        }

        // Insert SEO script before closing body tag
        const updatedContent = content.slice(0, bodyCloseIndex) + seoScriptTag + content.slice(bodyCloseIndex);
        
        // Write updated content back to file
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        
        console.log(`✅ Successfully updated ${filename}`);
        
    } catch (error) {
        console.error(`❌ Error updating ${filename}:`, error.message);
    }
}

function updateAllPages() {
    console.log('🚀 Starting SEO optimization for all HTML pages...\n');
    
    htmlFiles.forEach(filename => {
        updateHTMLFile(filename);
    });
    
    console.log('\n🎉 SEO optimization completed for all pages!');
    console.log('\n📋 Next steps:');
    console.log('1. Upload all files to your web server');
    console.log('2. Submit your sitemap.xml to Google Search Console');
    console.log('3. Submit your sitemap.xml to Bing Webmaster Tools');
    console.log('4. Test your structured data using Google\'s Rich Results Test');
    console.log('5. Monitor your search performance in Google Analytics');
}

// Run the script
updateAllPages(); 