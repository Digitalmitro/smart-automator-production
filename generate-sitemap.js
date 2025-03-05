const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/aboutus', changefreq: 'weekly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.7 },
  { url: '/pricing-plans', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq', changefreq: 'monthly', priority: 0.6 },
  { url: '/PortfolioGallery', changefreq: 'monthly', priority: 0.6 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms-of-service', changefreq: 'yearly', priority: 0.5 },
];

const stream = new SitemapStream({ hostname: 'https://smartautomator.com' });

links.forEach(link => stream.write(link));
stream.end();

streamToPromise(stream).then(data => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
  console.log('✅ sitemap.xml generated successfully!');
}).catch(err => {
  console.error('❌ Error generating sitemap:', err);
});
