import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getBlogPostBySlug, getRecentBlogPosts, type BlogPost as BlogPostType } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  
  useEffect(() => {
    if (slug) {
      const post = getBlogPostBySlug(slug);
      if (post) {
        setBlogPost(post);
        // Get other recent posts as related posts (excluding current post)
        const recent = getRecentBlogPosts(4).filter(p => p.slug !== slug).slice(0, 3);
        setRelatedPosts(recent);
      } else {
        // Blog post not found, redirect to blog page
        navigate("/blog");
      }
    }
  }, [slug, navigate]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('da-DK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderHTML = (html: string) => {
    return { __html: html };
  };

  if (!blogPost) {
  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Indlæser...</h1>
            <p className="text-gray-600">Vent venligst, mens vi henter dit blogindlæg.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEO 
        title={`${blogPost.title} | Beregn Løn Efter Skat`}
        description={`${blogPost.title} - Læs mere om løn efter skat, skatteberegning og økonomisk rådgivning på Beregn Løn Efter Skat.`}
        keywords="løn efter skat, skatteberegning, nettoløn, bruttoløn, økonomi, Danmark"
      />
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to blog button */}
          <div className="mb-6">
            <Link 
              to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Tilbage til blog
            </Link>
          </div>
          
        {/* Article header */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 border-b border-gray-200 pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(blogPost.date)}</span>
                </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime}</span>
                </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Af {blogPost.author}</span>
                </div>
              </div>
              
            {/* Article content */}
              <div className="prose prose-lg max-w-none">
              {blogPost.sections.map((section, index) => (
                <div key={index} className="mb-6">
                  {section.type === 'heading' && (
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      {section.content}
                    </h2>
                  )}
                  {section.type === 'text' && (
                    <div 
                      className="text-gray-700 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={renderHTML(section.content)}
                    />
                  )}
                  {section.type === 'image' && section.imageUrl && (
                    <div className="my-8">
                        <img
                          src={section.imageUrl}
                        alt={section.imageAlt || ""}
                        className="w-full h-auto rounded-lg shadow-md"
                        loading="lazy"
                        />
                        {section.imageAlt && (
                        <p className="text-sm text-gray-600 mt-2 text-center italic">
                            {section.imageAlt}
                          </p>
                        )}
                      </div>
                  )}
                </div>
              ))}
              </div>
              </div>
          </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Relaterede artikler</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      <Link to={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
        </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      Læs mere →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost; 