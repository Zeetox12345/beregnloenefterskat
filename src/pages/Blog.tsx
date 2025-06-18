import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getBlogPostsSortedByDate } from "@/data/blogPosts";

const Blog = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('da-DK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get blog posts and create excerpts from first text section
  const blogPosts = getBlogPostsSortedByDate().map(post => {
    // Find the first meaningful text section to create an excerpt
    // Skip sponsored content indicators to avoid showing "Sponsoreret indhold" in previews
    const meaningfulTextSection = post.sections.find(section => 
      section.type === 'text' && 
      section.content.trim() !== '' && 
      !section.content.includes('Sponsoreret indhold') &&
      !section.content.toLowerCase().includes('billedet er genereret af ai')
    );
    
    let excerpt = '';
    
    if (meaningfulTextSection) {
      // Strip HTML tags and get first ~150 characters
      const textContent = meaningfulTextSection.content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
      excerpt = textContent.length > 150 ? textContent.substring(0, 150) + '...' : textContent;
    }

    // Get featured image from first image section
    const firstImageSection = post.sections.find(section => section.type === 'image' && section.imageUrl);
    const featuredImage = firstImageSection?.imageUrl || "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";

    return {
      ...post,
      excerpt,
      featuredImage
    };
  });

  return (
    <>
      <SEO 
        title="Blog Om Løn Efter Skat | Økonomiske Tips & Råd | 2025"
        description="Læs vores seneste artikler om skat, løn og økonomi. Find tips til at optimere din privatøkonomi og få mere ud af din løn efter skat i 2025."
      />
      <Header />
      
      <main className={`container mx-auto px-4 py-8 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <PageTitle title="Blog" />
            <div className="container mx-auto px-4 text-center mt-2">
              <p className="text-gray-600">Læs de nyeste artikler om skat, økonomi og løn</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-primary" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-primary" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <User className="h-4 w-4 mr-1 text-primary" />
                    <span>{post.author}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center mt-auto text-primary font-medium hover:underline"
                  >
                    <span>Læs mere</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Blog;