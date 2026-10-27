import { Metadata } from 'next';
import { CLINIC_INFO } from './clinic-data';

const vercelHost = process.env.VERCEL_URL;
const deploymentUrl = vercelHost ? (vercelHost.startsWith('http') ? vercelHost : `https://${vercelHost}`) : 'http://localhost:3000';
const productionSiteUrl = process.env.VERCEL_ENV === 'production' ? 'https://www.robustusroofing.co.nz' : deploymentUrl;
export const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || productionSiteUrl).replace(/\/+$/, '');

export function createMetadata({
  title,
  description,
  pathname,
  image,
}: {
  title: string;
  description: string;
  pathname: string;
  image?: string;
}): Metadata {
  const url = `${BASE_URL}${pathname}`;
  const fullTitle = `${title} | ${CLINIC_INFO.name}`;
  const defaultImage = `${BASE_URL}/images/robustus-roofing-logo.png`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: CLINIC_INFO.name,
      locale: 'en_AU',
      type: 'website',
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image || defaultImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${BASE_URL}/#business`,
    name: CLINIC_INFO.name,
    legalName: CLINIC_INFO.legalName,
    url: BASE_URL,
    telephone: CLINIC_INFO.contact.phone,
    ...(CLINIC_INFO.primaryLocation.city || CLINIC_INFO.primaryLocation.street ? { address: {
      '@type': 'PostalAddress',
      ...(CLINIC_INFO.primaryLocation.street ? { streetAddress: CLINIC_INFO.primaryLocation.street } : {}),
      ...(CLINIC_INFO.primaryLocation.city ? { addressLocality: CLINIC_INFO.primaryLocation.city } : {}),
      ...(CLINIC_INFO.primaryLocation.state ? { addressRegion: CLINIC_INFO.primaryLocation.state } : {}),
      ...(CLINIC_INFO.primaryLocation.postalCode ? { postalCode: CLINIC_INFO.primaryLocation.postalCode } : {}),
      addressCountry: CLINIC_INFO.primaryLocation.country,
    } } : {}),
    ...(CLINIC_INFO.primaryLocation.coordinates ? { geo: {
      '@type': 'GeoCoordinates',
      latitude: CLINIC_INFO.primaryLocation.coordinates.lat,
      longitude: CLINIC_INFO.primaryLocation.coordinates.lng,
    } } : {}),
    openingHours: 'Mo-Su 00:00-23:59',
  };
}

export function generateServiceSchema(serviceName: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    serviceType: 'Roof repairs, roof replacement and new build roofing',
    url: `${BASE_URL}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      name: CLINIC_INFO.name,
    },
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}





