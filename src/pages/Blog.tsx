import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTitle } from "@/components/PageTitle";
import { SEO } from "@/components/SEO";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Define the BlogPost interface
interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  featuredImage: string;
}

// Blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 2,
    slug: "sadan-undgar-du-restskat",
    title: "Sådan undgår du restskat – 7 konkrete metoder til at holde styr på din skat og lønudbetaling",
    date: "2025-04-04",
    readTime: "10 min",
    author: "admin",
    excerpt: "Har du prøvet at få en ærgerlig overraskelse i form af en restskat, når årsopgørelsen rammer din e-Boks? Du er langt fra alene. I dette blogindlæg får du en step-by-step guide til, hvordan du minimerer risikoen for restskat – og samtidig sikrer, at du får mest muligt ud af din løn efter skat.",
    featuredImage: "/Blogpictures/blogpost2pic.png"
  },
  {
    id: 1,
    slug: "sadan-far-du-mest-muligt-ud-af-din-loen-efter-skat",
    title: "Sådan får du mest muligt ud af din løn efter skat – 5 tips til at optimere din privatøkonomi",
    date: "2025-03-29",
    readTime: "12 min",
    author: "admin",
    excerpt: "Har du nogensinde undret dig over, hvordan du kan få mest muligt ud af din løn – når skatten først er trukket? I dette blogindlæg zoomer vi ind på fem konkrete tips, der hjælper dig med at beregne løn efter skat og bruge dine penge optimalt.",
    featuredImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  }
];

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