import { motion } from "motion/react";
import { Calendar, Clock, Tag, ArrowLeft, Share2, User } from "lucide-react";
import { blogPosts, type BlogPost } from "../data/blogData";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Separator } from "./ui/separator";

interface BlogPostPageProps {
  slug: string;
  onNavigate: (page: string) => void;
}

export function BlogPostPage({ slug, onNavigate }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl mb-4">Article Not Found</h1>
          <p className="text-xl text-gray-400 mb-8">
            Sorry, we couldn't find the article you're looking for.
          </p>
          <Button
            onClick={() => onNavigate("blog")}
            className="bg-[#D4AF37] hover:bg-[#C4A137] text-black"
          >
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-8">
        <Button
          onClick={() => onNavigate("blog")}
          variant="ghost"
          className="text-[#D4AF37] hover:text-[#C4A137] hover:bg-[#D4AF37]/10 -ml-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
        >
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Category Badge */}
          <Badge className="mb-4 bg-[#D4AF37] text-black border-none">
            {post.category}
          </Badge>

          {/* Title */}
          <h1 className="mb-6">{post.title}</h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <div>
                <p className="text-white">{post.author}</p>
                <p className="text-sm">{post.authorRole}</p>
              </div>
            </div>

            <Separator orientation="vertical" className="h-12 bg-[#D4AF37]/20" />

            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.publishDate}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>

            <Button
              onClick={handleShare}
              variant="ghost"
              size="sm"
              className="ml-auto text-[#D4AF37] hover:text-[#C4A137] hover:bg-[#D4AF37]/10"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </Button>
          </div>

          {/* Excerpt */}
          <div className="bg-[#1a1a1a] border-l-4 border-[#D4AF37] p-6 rounded-r-lg mb-12">
            <p className="text-xl text-gray-300 italic">{post.excerpt}</p>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-[#1a1a1a] border-[#D4AF37]/20 text-gray-300 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          <Separator className="my-12 bg-[#D4AF37]/20" />

          {/* Author Box */}
          <Card className="bg-[#1a1a1a] border-[#D4AF37]/20 mb-12">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-2">{post.author}</h3>
                  <p className="text-[#D4AF37] mb-3">{post.authorRole}</p>
                  <p className="text-gray-400">
                    At Prawal Solution Pvt Ltd, our team of experts brings years of experience
                    in business consultancy, helping entrepreneurs and businesses navigate
                    complex challenges and achieve sustainable growth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-[#D4AF37]/20 mb-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl mb-4">Need Professional Assistance?</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Our experts are ready to help you implement these strategies for your business.
                Get personalized guidance tailored to your specific needs.
              </p>
              <Button
                onClick={() => onNavigate("contact")}
                className="bg-[#D4AF37] hover:bg-[#C4A137] text-black px-8 py-6"
              >
                Schedule Free Consultation
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="bg-[#1a1a1a] border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 group overflow-hidden cursor-pointer"
                  onClick={() => onNavigate(`blog/${relatedPost.slug}`)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <ImageWithFallback
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="mb-2 bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20 text-xs">
                      {relatedPost.category}
                    </Badge>
                    <h4 className="mb-2 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </article>
    </div>
  );
}

// Helper function to format markdown-like content to HTML
function formatContent(content: string): string {
  let html = content;

  // Convert headers
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl mb-6 mt-12 first:mt-0">$1</h1>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl mb-4 mt-10">$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl mb-3 mt-8">$1</h3>');
  html = html.replace(/^#### (.*$)/gim, '<h4 class="text-xl mb-3 mt-6">$1</h4>');

  // Convert bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#D4AF37]">$1</strong>');

  // Convert paragraphs
  html = html.replace(/\n\n/g, '</p><p class="mb-4 text-gray-300 leading-relaxed">');
  html = '<p class="mb-4 text-gray-300 leading-relaxed">' + html + '</p>';

  // Convert lists
  html = html.replace(/^\- (.*$)/gim, '<li class="mb-2 text-gray-300">$1</li>');
  html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside mb-6 space-y-2 ml-4">$1</ul>');

  // Convert numbered lists
  html = html.replace(/^\d+\. (.*$)/gim, '<li class="mb-2 text-gray-300">$1</li>');

  return html;
}
