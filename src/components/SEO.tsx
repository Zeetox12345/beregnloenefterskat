import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
}

export const SEO = ({ 
  title, 
  description, 
  canonicalUrl, 
  keywords 
}: SEOProps) => {
  const [url, setUrl] = useState("");
  
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const finalUrl = canonicalUrl || url;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {finalUrl && <link rel="canonical" href={finalUrl} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {finalUrl && <meta property="og:url" content={finalUrl} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}; 