import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, ExternalLink, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface Step {
  id: string;
  title: string;
  description: string;
  link?: string;
  copyText?: string;
}

const steps: Step[] = [
  {
    id: 'step1',
    title: 'Access Google Search Console',
    description: 'Go to Google Search Console and sign in with your Google account.',
    link: 'https://search.google.com/search-console',
  },
  {
    id: 'step2',
    title: 'Add Your Property',
    description: 'Click "Add Property" and enter your website URL: https://prawalsolution.com',
    copyText: 'https://prawalsolution.com',
  },
  {
    id: 'step3',
    title: 'Choose Verification Method',
    description: 'Select HTML tag verification method for the easiest setup.',
  },
  {
    id: 'step4',
    title: 'Add Verification Meta Tag',
    description: 'Copy the meta tag provided by Google and add it to your website\'s <head> section. Contact your developer to implement this.',
  },
  {
    id: 'step5',
    title: 'Verify Ownership',
    description: 'Click "Verify" in Google Search Console after the meta tag is added.',
  },
  {
    id: 'step6',
    title: 'Submit Your Sitemap',
    description: 'After verification, go to "Sitemaps" in the left menu and submit your sitemap URL.',
    copyText: 'https://prawalsolution.com/sitemap.xml',
  },
  {
    id: 'step7',
    title: 'Wait for Indexing',
    description: 'Google will start crawling and indexing your website. This may take a few days.',
  },
  {
    id: 'step8',
    title: 'Monitor Performance',
    description: 'Check the "Performance" tab weekly to monitor clicks, impressions, and rankings.',
  },
];

export function GoogleSearchConsoleGuide() {
  const [completedSteps, setCompletedSteps] = useState<string[]>(() => {
    const saved = localStorage.getItem('gsc-completed-steps');
    return saved ? JSON.parse(saved) : [];
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleStep = (stepId: string) => {
    const newCompleted = completedSteps.includes(stepId)
      ? completedSteps.filter((id) => id !== stepId)
      : [...completedSteps, stepId];
    setCompletedSteps(newCompleted);
    localStorage.setItem('gsc-completed-steps', JSON.stringify(newCompleted));
  };

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const progress = Math.round((completedSteps.length / steps.length) * 100);

  return (
    <Card className="bg-black border-[#D4AF37]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-[#D4AF37]">
              Google Search Console Setup
            </CardTitle>
            <CardDescription className="text-gray-400">
              Follow these steps to submit your website to Google
            </CardDescription>
          </div>
          <Badge variant="outline" className="border-[#D4AF37] text-[#D4AF37]">
            {completedSteps.length}/{steps.length} Complete
          </Badge>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-400">Progress</span>
            <span className="text-sm text-[#D4AF37]">{progress}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step, index) => {
            const isCompleted = completedSteps.includes(step.id);
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg border transition-all ${
                  isCompleted
                    ? 'bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-[#D4AF37]/50'
                    : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => toggleStep(step.id)}
                    className="mt-1 focus:outline-none"
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-600" />
                    )}
                  </button>
                  <div className="flex-1">
                    <h4
                      className={`mb-1 ${
                        isCompleted ? 'text-[#D4AF37]' : 'text-white'
                      }`}
                    >
                      Step {index + 1}: {step.title}
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">
                      {step.description}
                    </p>
                    <div className="flex gap-2">
                      {step.link && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
                          onClick={() => window.open(step.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Open Link
                        </Button>
                      )}
                      {step.copyText && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
                          onClick={() => copyToClipboard(step.copyText!, step.id)}
                        >
                          {copiedId === step.id ? (
                            <>
                              <Check className="w-4 h-4 mr-2" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-2" />
                              Copy URL
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {progress === 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 p-4 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37] rounded-lg"
          >
            <h4 className="text-[#D4AF37] mb-2">🎉 Congratulations!</h4>
            <p className="text-sm text-gray-300">
              You've completed the Google Search Console setup. Your website will
              now be indexed by Google. Check back in 3-7 days to see your first
              data in the Performance report.
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
