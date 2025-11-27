import { useEffect } from "react";
import type { BlogPost } from "../data/blogData";

interface BlogStructuredDataProps {
  post: BlogPost;
  url: string;
}

export function BlogStructuredData({ post, url }: BlogStructuredDataProps) {
  useEffect(() => {
    // Article structured data
    const articleStructuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "datePublished": new Date(post.publishDate).toISOString(),
      "dateModified": new Date(post.publishDate).toISOString(),
      "author": {
        "@type": "Person",
        "name": post.author,
        "jobTitle": post.authorRole,
      },
      "publisher": {
        "@type": "Organization",
        "name": "Prawal Solution Pvt Ltd",
        "logo": {
          "@type": "ImageObject",
          "url": "https://prawalsolution.com/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "articleSection": post.category,
      "keywords": post.tags.join(", ")
    };

    // BreadcrumbList structured data
    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://prawalsolution.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://prawalsolution.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": url
        }
      ]
    };

    // Create script tags and append to head
    const articleScript = document.createElement("script");
    articleScript.type = "application/ld+json";
    articleScript.text = JSON.stringify(articleStructuredData);
    articleScript.id = "article-structured-data";
    document.head.appendChild(articleScript);

    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.text = JSON.stringify(breadcrumbStructuredData);
    breadcrumbScript.id = "breadcrumb-structured-data";
    document.head.appendChild(breadcrumbScript);

    // Cleanup function
    return () => {
      const existingArticleScript = document.getElementById("article-structured-data");
      const existingBreadcrumbScript = document.getElementById("breadcrumb-structured-data");
      if (existingArticleScript) {
        existingArticleScript.remove();
      }
      if (existingBreadcrumbScript) {
        existingBreadcrumbScript.remove();
      }
    };
  }, [post, url]);

  return null;
}
