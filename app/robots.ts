import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

// Paths no crawler needs: API handlers and Next.js internal data routes.
// Static assets under /_next/static stay crawlable so pages render for Google.
const privatePaths = ['/api/', '/_next/data/', '/*.json$']

// AI assistants that fetch pages to answer users and cite sources.
// Allowing them lets KrypDev show up in ChatGPT, Claude, Perplexity etc.
const aiSearchBots = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
]

// Crawlers that collect content for model training, not search.
// Blocking them has no effect on search rankings or AI search citations.
const aiTrainingBots = [
  'GPTBot',
  'ClaudeBot',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'meta-externalagent',
  'Amazonbot',
  'cohere-training-data-crawler',
]

// Third-party SEO scrapers commonly used for competitor research.
const seoScrapers = ['AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot', 'BLEXBot', 'DataForSeoBot']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: privatePaths },
      { userAgent: aiSearchBots, allow: '/', disallow: privatePaths },
      { userAgent: aiTrainingBots, disallow: '/' },
      { userAgent: seoScrapers, disallow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
