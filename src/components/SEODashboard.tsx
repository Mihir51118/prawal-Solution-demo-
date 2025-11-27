import { useState } from 'react';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { GoogleSearchConsoleGuide } from './GoogleSearchConsoleGuide';
import { GoogleMyBusinessGuide } from './GoogleMyBusinessGuide';
import { BacklinkTracker } from './BacklinkTracker';
import { ContentCalendar } from './ContentCalendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import {
  Search,
  MapPin,
  Link as LinkIcon,
  Calendar,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function SEODashboard() {
  // Get completion status from localStorage
  const getCompletionStats = () => {
    const gscSteps = localStorage.getItem('gsc-completed-steps');
    const gmbTasks = localStorage.getItem('gmb-completed-tasks');
    const backlinks = localStorage.getItem('backlinks');
    const content = localStorage.getItem('content-calendar');

    const gscCompleted = gscSteps ? JSON.parse(gscSteps).length : 0;
    const gmbCompleted = gmbTasks ? JSON.parse(gmbTasks).length : 0;
    const backlinkCount = backlinks ? JSON.parse(backlinks).length : 0;
    const contentCount = content ? JSON.parse(content).length : 0;

    return {
      gsc: { completed: gscCompleted, total: 8 },
      gmb: { completed: gmbCompleted, total: 16 },
      backlinks: backlinkCount,
      content: contentCount,
    };
  };

  const [stats, setStats] = useState(getCompletionStats());

  const refreshStats = () => {
    setStats(getCompletionStats());
  };

  const gscProgress = Math.round((stats.gsc.completed / stats.gsc.total) * 100);
  const gmbProgress = Math.round((stats.gmb.completed / stats.gmb.total) * 100);

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl mb-4 text-[#D4AF37]">
            SEO Management Dashboard
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Track and manage all your SEO activities in one place. Follow the recommended
            steps to boost your search engine rankings and online visibility.
          </p>
        </motion.div>

        {/* Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-[#D4AF37]">
                <Search className="w-5 h-5" />
                Google Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-2">{gscProgress}%</div>
              <p className="text-sm text-gray-400">
                {stats.gsc.completed}/{stats.gsc.total} steps completed
              </p>
              {gscProgress === 100 ? (
                <Badge variant="outline" className="mt-3 border-green-500 text-green-500">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Complete
                </Badge>
              ) : (
                <Badge variant="outline" className="mt-3 border-yellow-500 text-yellow-500">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  In Progress
                </Badge>
              )}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-[#D4AF37]">
                <MapPin className="w-5 h-5" />
                Google My Business
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-2">{gmbProgress}%</div>
              <p className="text-sm text-gray-400">
                {stats.gmb.completed}/{stats.gmb.total} tasks completed
              </p>
              {gmbProgress === 100 ? (
                <Badge variant="outline" className="mt-3 border-green-500 text-green-500">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Complete
                </Badge>
              ) : (
                <Badge variant="outline" className="mt-3 border-yellow-500 text-yellow-500">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  In Progress
                </Badge>
              )}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-[#D4AF37]">
                <LinkIcon className="w-5 h-5" />
                Backlinks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-2">{stats.backlinks}</div>
              <p className="text-sm text-gray-400">Quality backlinks tracked</p>
              {stats.backlinks >= 10 ? (
                <Badge variant="outline" className="mt-3 border-green-500 text-green-500">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Good Progress
                </Badge>
              ) : (
                <Badge variant="outline" className="mt-3 border-blue-500 text-blue-500">
                  Goal: 10+ backlinks
                </Badge>
              )}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-[#D4AF37]">
                <Calendar className="w-5 h-5" />
                Content Pipeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white mb-2">{stats.content}</div>
              <p className="text-sm text-gray-400">Articles planned/published</p>
              {stats.content >= 5 ? (
                <Badge variant="outline" className="mt-3 border-green-500 text-green-500">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Active Pipeline
                </Badge>
              ) : (
                <Badge variant="outline" className="mt-3 border-blue-500 text-blue-500">
                  Goal: 5+ articles
                </Badge>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="gsc" className="w-full" onValueChange={refreshStats}>
            <TabsList className="grid w-full grid-cols-4 bg-gray-900 border border-[#D4AF37]/30 p-1">
              <TabsTrigger
                value="gsc"
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black"
              >
                <Search className="w-4 h-4 mr-2" />
                Google Search Console
              </TabsTrigger>
              <TabsTrigger
                value="gmb"
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Google My Business
              </TabsTrigger>
              <TabsTrigger
                value="backlinks"
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black"
              >
                <LinkIcon className="w-4 h-4 mr-2" />
                Backlink Builder
              </TabsTrigger>
              <TabsTrigger
                value="content"
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Content Calendar
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gsc" className="mt-6">
              <GoogleSearchConsoleGuide />
            </TabsContent>

            <TabsContent value="gmb" className="mt-6">
              <GoogleMyBusinessGuide />
            </TabsContent>

            <TabsContent value="backlinks" className="mt-6">
              <BacklinkTracker />
              
              {/* Backlink Strategy Tips */}
              <Card className="mt-6 bg-black border-[#D4AF37]/50">
                <CardHeader>
                  <CardTitle className="text-[#D4AF37]">
                    Backlink Building Strategies
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Quick tips to build quality backlinks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                      <h4 className="text-white mb-2">📝 Guest Posting</h4>
                      <p className="text-sm text-gray-400">
                        Write valuable articles for industry blogs and include links back to
                        your website.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                      <h4 className="text-white mb-2">📁 Business Directories</h4>
                      <p className="text-sm text-gray-400">
                        Submit your business to JustDial, IndiaMART, Sulekha, and other
                        reputable directories.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                      <h4 className="text-white mb-2">🤝 Partner Links</h4>
                      <p className="text-sm text-gray-400">
                        Partner with complementary businesses for mutual link exchanges.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                      <h4 className="text-white mb-2">📰 Press Releases</h4>
                      <p className="text-sm text-gray-400">
                        Submit press releases to PR sites when you have newsworthy updates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="content" className="mt-6">
              <ContentCalendar />
              
              {/* Content Ideas */}
              <Card className="mt-6 bg-black border-[#D4AF37]/50">
                <CardHeader>
                  <CardTitle className="text-[#D4AF37]">Content Ideas for Your Blog</CardTitle>
                  <CardDescription className="text-gray-400">
                    Suggested topics to get you started
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      'How to Get MSME Loan in 2025',
                      'Complete Guide to ISO Certification',
                      'Startup India Registration Benefits',
                      'Digital Marketing Tips for SMEs',
                      'GST Registration Step-by-Step',
                      'Financial Planning for Startups',
                      'E-commerce Business Setup Guide',
                      'Tax Exemptions for New Businesses',
                      'GeM Registration Complete Guide',
                    ].map((idea, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-[#D4AF37]/30 transition-all"
                      >
                        <p className="text-sm text-white">{idea}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Quick Action Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-[#D4AF37]">
            <CardHeader>
              <CardTitle className="text-[#D4AF37]">🎯 SEO Action Plan</CardTitle>
              <CardDescription className="text-gray-300">
                Follow this roadmap for the best results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white mb-3">Week 1</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>✓ Complete Google Search Console setup</li>
                    <li>✓ Submit sitemap</li>
                    <li>✓ Start Google My Business profile</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white mb-3">Month 1</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>✓ Complete GMB profile with photos</li>
                    <li>✓ Submit to 10 business directories</li>
                    <li>✓ Publish 2-4 blog posts</li>
                    <li>✓ Get 5 quality backlinks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white mb-3">Month 3+</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>✓ Publish 2 posts/week consistently</li>
                    <li>✓ Build 5-10 backlinks/month</li>
                    <li>✓ Get 10+ GMB reviews</li>
                    <li>✓ Monitor and optimize based on data</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
