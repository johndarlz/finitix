/**
 * SEO Utilities for Finitix
 * Centralized SEO configuration and helper functions
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export const defaultSEO: SEOConfig = {
  title: "Finitix - Digital Services Platform | Web Development, App Development & AI Solutions",
  description: "Finitix – Friendly digital services platform delivering software, web apps, AI tools, and product solutions for startups and businesses. Expert web development agency, mobile app design, MVP development, and AI automation services.",
  keywords: "finitix, digital services company, web development agency, app development company, startup product development, software solutions provider, AI software development, product-first software company, website design and development, mobile app design company, MVP development services, SaaS solutions, AI automation services, software consulting, custom software solutions",
  canonical: "https://finitix.com/",
  ogImage: "https://finitix.com/og-image.jpg",
  ogType: "website"
};

export const pageSEO = {
  home: {
    title: "Finitix - Digital Services Platform | Web Development, App Development & AI Solutions",
    description: "Finitix – Friendly digital services platform delivering software, web apps, AI tools, and product solutions for startups and businesses. Expert web development agency, mobile app design, MVP development, and AI automation services.",
    keywords: "finitix, digital services company, web development agency, app development company, startup product development, software solutions provider, AI software development",
    canonical: "https://finitix.com/"
  },
  services: {
    title: "Digital Services & Software Solutions | Finitix - Web & App Development",
    description: "Comprehensive web development, mobile app development, AI software development, and software consulting services. Leading digital services company offering custom software solutions, SaaS platforms, and MVP development.",
    keywords: "web development agency, app development company, mobile app design company, AI automation services, SaaS solutions, MVP development services, software consulting, custom software solutions",
    canonical: "https://finitix.com/services"
  },
  about: {
    title: "About Finitix - Product-First Software Company & Digital Services Platform",
    description: "Learn about Finitix, a product-first software company and web development agency dedicated to delivering innovative digital services, custom software solutions, and AI-powered products for startups and businesses.",
    keywords: "product-first software company, digital services company, software solutions provider, web development agency, startup product development",
    canonical: "https://finitix.com/about"
  },
  innovationHub: {
    title: "Innovation Hub - Startup Product Development & Software Consulting | Finitix",
    description: "Join Finitix Innovation Hub for startup product development, software consulting, mentorship, and strategic partnerships. Access expert developers and resources for MVP development and digital transformation.",
    keywords: "startup product development, innovation hub, software consulting, MVP development services, digital transformation, startup mentorship",
    canonical: "https://finitix.com/innovation-hub"
  },
  contact: {
    title: "Contact Finitix - Get Started with Your Digital Project Today",
    description: "Contact Finitix for web development, app development, AI solutions, and software consulting. Schedule a free consultation to discuss your digital transformation and custom software needs.",
    keywords: "contact finitix, web development consultation, app development company, software consulting, digital services",
    canonical: "https://finitix.com/contact"
  }
};

/**
 * Generate structured data for Organization
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://finitix.com/#organization",
  "name": "Finitix",
  "url": "https://finitix.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://finitix.com/logo.png",
    "width": 512,
    "height": 512
  },
  "description": "Finitix is a digital services platform that helps startups, businesses, and individuals create, grow, and optimize digital products and solutions.",
  "slogan": "Beyond Begin - Transforming Ideas Into Digital Reality",
  "foundingDate": "2020",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "hello@finitix.com",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://twitter.com/finitix",
    "https://linkedin.com/company/finitix",
    "https://github.com/finitix"
  ],
  "areaServed": "Worldwide",
  "knowsAbout": [
    "Web Development",
    "Mobile App Development",
    "AI Software Development",
    "SaaS Solutions",
    "MVP Development",
    "Digital Transformation"
  ]
});

/**
 * Generate structured data for Service
 */
export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Software Development",
  "provider": {
    "@id": "https://finitix.com/#organization"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom web application development using modern frameworks"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Native and cross-platform mobile application development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Software Development",
          "description": "AI-powered solutions and automation services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MVP Development",
          "description": "Rapid MVP development for startups and product validation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SaaS Solutions",
          "description": "Custom SaaS platform development and consulting"
        }
      }
    ]
  }
});

/**
 * Generate breadcrumb schema
 */
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

/**
 * Update document title and meta tags
 */
export const updatePageSEO = (config: SEOConfig) => {
  // Update title
  document.title = config.title;

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, isProperty = false) => {
    const attribute = isProperty ? 'property' : 'name';
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    
    element.setAttribute('content', content);
  };

  // Update standard meta tags
  updateMetaTag('description', config.description);
  if (config.keywords) {
    updateMetaTag('keywords', config.keywords);
  }

  // Update Open Graph tags
  updateMetaTag('og:title', config.title, true);
  updateMetaTag('og:description', config.description, true);
  if (config.ogType) {
    updateMetaTag('og:type', config.ogType, true);
  }
  if (config.canonical) {
    updateMetaTag('og:url', config.canonical, true);
  }
  if (config.ogImage) {
    updateMetaTag('og:image', config.ogImage, true);
  }

  // Update Twitter tags
  updateMetaTag('twitter:title', config.title);
  updateMetaTag('twitter:description', config.description);
  if (config.ogImage) {
    updateMetaTag('twitter:image', config.ogImage);
  }

  // Update canonical link
  if (config.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = config.canonical;
  }
};
