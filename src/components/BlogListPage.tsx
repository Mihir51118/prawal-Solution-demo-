import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Search, Calendar, Clock, Tag, TrendingUp } from "lucide-react";
import { blogPosts, blogCategories, type BlogCategory } from "../data/blogData";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogListPageProps {
  onNavigate: (page: string) => void;
}

export function BlogListPage({ onNavigate }: BlogListPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "All">("All");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="mb-6">
              <span className="text-[#D4AF37]">Business Insights</span> & Expert Advice
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Stay updated with the latest trends, guides, and tips on business consultancy,
              financial services, and digital growth strategies.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 bg-[#1a1a1a] border-[#D4AF37]/20 focus:border-[#D4AF37] text-white placeholder:text-gray-500 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {!searchQuery && selectedCategory === "All" && featuredPosts.length > 0 && (
        <section className="container mx-auto px-4 mb-16">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="text-3xl">Featured Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-[#1a1a1a] border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 group overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#D4AF37] text-black border-none">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.publishDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <Badge className="mb-3 bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20">
                      {post.category}
                    </Badge>

                    <h3 className="text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Button
                      onClick={() => onNavigate(`blog/${post.slug}`)}
                      className="w-full bg-[#D4AF37] hover:bg-[#C4A137] text-black"
                    >
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="container mx-auto px-4 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <Button
            onClick={() => setSelectedCategory("All")}
            variant={selectedCategory === "All" ? "default" : "outline"}
            className={
              selectedCategory === "All"
                ? "bg-[#D4AF37] hover:bg-[#C4A137] text-black border-none"
                : "bg-transparent border-[#D4AF37]/20 text-white hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]"
            }
          >
            All Articles
          </Button>
          {blogCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-[#D4AF37] hover:bg-[#C4A137] text-black border-none whitespace-nowrap"
                  : "bg-transparent border-[#D4AF37]/20 text-white hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] whitespace-nowrap"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl">
            {selectedCategory === "All" ? "All Articles" : selectedCategory}
            <span className="text-gray-400 ml-2">({filteredPosts.length})</span>
          </h2>
        </div>

        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-400">
              No articles found matching your search.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 bg-[#D4AF37] hover:bg-[#C4A137] text-black"
            >
              Clear Filters
            </Button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="bg-[#1a1a1a] border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 group overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.publishDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <Badge className="mb-3 bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20 w-fit">
                      {post.category}
                    </Badge>

                    <h3 className="text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center gap-1 text-xs text-gray-500"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => onNavigate(`blog/${post.slug}`)}
                      className="w-full bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl mb-4">Need Expert Guidance?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Our team of business consultants is ready to help you with personalized
            solutions for your business needs.
          </p>
          <Button
            onClick={() => onNavigate("contact")}
            className="bg-[#D4AF37] hover:bg-[#C4A137] text-black px-8 py-6 text-lg"
          >
            Get Free Consultation
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
