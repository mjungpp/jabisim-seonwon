import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SeoHead: React.FC<SeoHeadProps> = ({ title, description, keywords }) => {
  const location = useLocation();
  const currentUrl = `https://mjungpp.github.io/jabisim-seonwon${location.pathname}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    "name": "자비심선원",
    "url": "https://mjungpp.github.io/jabisim-seonwon",
    "logo": "https://mjungpp.github.io/jabisim-seonwon/main.jpeg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "오산로 368번길 25, 2층",
      "addressLocality": "오산시",
      "addressRegion": "경기도",
      "postalCode": "18114",
      "addressCountry": "KR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "contact@jabisim.org"
    },
    "sameAs": [
      "https://pf.kakao.com/_example" 
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://picsum.photos/seed/jabisim/1200/630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://picsum.photos/seed/jabisim/1200/630" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SeoHead;