import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',  // Applique les règles à tous les robots
        allow: '/',  // Autorise l'accès à toutes les pages
        disallow: '/private/',  // Bloque l'accès à la section /private/
      },
      {
        userAgent: 'Googlebot',  // Spécifie les règles pour Googlebot
        allow: '/',  // Autorise Googlebot à tout parcourir
        disallow: '/private/',  // Bloque l'accès à /private/ pour Googlebot également
      },
      {
        userAgent: ['Applebot', 'Bingbot'],  // Spécifie les règles pour Applebot et Bingbot
        disallow: ['/'],  // Bloque complètement l'accès pour ces bots
      },
    ],
    sitemap: 'https://acme.com/sitemap.xml',  // Spécifie l'URL du sitemap
  }
}
