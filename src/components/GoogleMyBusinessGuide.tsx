import { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  Circle,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  Clock,
  Camera,
  Star,
  MessageSquare,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface Task {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: any;
  link?: string;
  priority: 'high' | 'medium' | 'low';
}

const tasks: Task[] = [
  {
    id: 'gmb1',
    category: 'Setup',
    title: 'Create GMB Account',
    description: 'Visit Google My Business and sign in with your Google account.',
    icon: ExternalLink,
    link: 'https://business.google.com',
    priority: 'high',
  },
  {
    id: 'gmb2',
    category: 'Setup',
    title: 'Add Business Name',
    description: 'Enter "Prawal Solution Pvt Ltd" as your business name.',
    icon: MapPin,
    priority: 'high',
  },
  {
    id: 'gmb3',
    category: 'Setup',
    title: 'Select Business Category',
    description: 'Choose "Business Consulting Agency" as your primary category.',
    icon: MapPin,
    priority: 'high',
  },
  {
    id: 'gmb4',
    category: 'Setup',
    title: 'Add Business Address',
    description: 'Enter your complete business address for local search visibility.',
    icon: MapPin,
    priority: 'high',
  },
  {
    id: 'gmb5',
    category: 'Verification',
    title: 'Request Verification',
    description: 'Request verification postcard from Google (takes 5-7 days).',
    icon: Mail,
    priority: 'high',
  },
  {
    id: 'gmb6',
    category: 'Verification',
    title: 'Enter Verification Code',
    description: 'Enter the code from the postcard to verify your business.',
    icon: CheckCircle2,
    priority: 'high',
  },
  {
    id: 'gmb7',
    category: 'Profile',
    title: 'Add Contact Information',
    description: 'Add phone number, email, and website URL.',
    icon: Phone,
    priority: 'high',
  },
  {
    id: 'gmb8',
    category: 'Profile',
    title: 'Set Business Hours',
    description: 'Configure your operating hours for each day of the week.',
    icon: Clock,
    priority: 'medium',
  },
  {
    id: 'gmb9',
    category: 'Profile',
    title: 'Write Business Description',
    description: 'Write a compelling 750-character description of your services.',
    icon: MessageSquare,
    priority: 'high',
  },
  {
    id: 'gmb10',
    category: 'Media',
    title: 'Upload Logo',
    description: 'Upload square logo (minimum 720x720px).',
    icon: Camera,
    priority: 'high',
  },
  {
    id: 'gmb11',
    category: 'Media',
    title: 'Upload Cover Photo',
    description: 'Upload landscape cover photo (minimum 1024x576px).',
    icon: Camera,
    priority: 'medium',
  },
  {
    id: 'gmb12',
    category: 'Media',
    title: 'Add Business Photos',
    description: 'Upload 5+ photos of office, team, and services.',
    icon: Camera,
    priority: 'medium',
  },
  {
    id: 'gmb13',
    category: 'Services',
    title: 'List All Services',
    description: 'Add all 14 services you offer with descriptions.',
    icon: CheckCircle2,
    priority: 'medium',
  },
  {
    id: 'gmb14',
    category: 'Engagement',
    title: 'Create First Post',
    description: 'Publish your first Google Post to engage customers.',
    icon: MessageSquare,
    priority: 'low',
  },
  {
    id: 'gmb15',
    category: 'Engagement',
    title: 'Enable Messaging',
    description: 'Turn on messaging to let customers contact you directly.',
    icon: MessageSquare,
    priority: 'medium',
  },
  {
    id: 'gmb16',
    category: 'Engagement',
    title: 'Get First Review',
    description: 'Ask satisfied clients to leave reviews on your profile.',
    icon: Star,
    priority: 'medium',
  },
];

export function GoogleMyBusinessGuide() {
  const [completedTasks, setCompletedTasks] = useState<string[]>(() => {
    const saved = localStorage.getItem('gmb-completed-tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleTask = (taskId: string) => {
    const newCompleted = completedTasks.includes(taskId)
      ? completedTasks.filter((id) => id !== taskId)
      : [...completedTasks, taskId];
    setCompletedTasks(newCompleted);
    localStorage.setItem('gmb-completed-tasks', JSON.stringify(newCompleted));
  };

  const categories = ['Setup', 'Verification', 'Profile', 'Media', 'Services', 'Engagement'];
  const progress = Math.round((completedTasks.length / tasks.length) * 100);

  const getCategoryProgress = (category: string) => {
    const categoryTasks = tasks.filter((t) => t.category === category);
    const completed = categoryTasks.filter((t) => completedTasks.includes(t.id)).length;
    return Math.round((completed / categoryTasks.length) * 100);
  };

  return (
    <Card className="bg-black border-[#D4AF37]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-[#D4AF37]">
              Google My Business Setup
            </CardTitle>
            <CardDescription className="text-gray-400">
              Complete your GMB profile for maximum local visibility
            </CardDescription>
          </div>
          <Badge variant="outline" className="border-[#D4AF37] text-[#D4AF37]">
            {completedTasks.length}/{tasks.length} Tasks
          </Badge>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Overall Progress</span>
            <span className="text-sm text-[#D4AF37]">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {categories.map((category) => {
            const categoryTasks = tasks.filter((t) => t.category === category);
            const categoryProgress = getCategoryProgress(category);

            return (
              <div key={category} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-white">{category}</h3>
                  <span className="text-sm text-[#D4AF37]">{categoryProgress}%</span>
                </div>
                <div className="space-y-2">
                  {categoryTasks.map((task, index) => {
                    const isCompleted = completedTasks.includes(task.id);
                    const Icon = task.icon;

                    return (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`p-3 rounded-lg border transition-all ${
                          isCompleted
                            ? 'bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-[#D4AF37]/50'
                            : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => toggleTask(task.id)}
                            className="mt-0.5 focus:outline-none"
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                            ) : (
                              <Circle className="w-5 h-5 text-gray-600" />
                            )}
                          </button>
                          <Icon className="w-5 h-5 text-[#D4AF37] mt-0.5" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4
                                className={`text-sm ${
                                  isCompleted ? 'text-[#D4AF37]' : 'text-white'
                                }`}
                              >
                                {task.title}
                              </h4>
                              <Badge
                                variant="outline"
                                className={`text-xs ${
                                  task.priority === 'high'
                                    ? 'border-red-500 text-red-500'
                                    : task.priority === 'medium'
                                    ? 'border-yellow-500 text-yellow-500'
                                    : 'border-gray-500 text-gray-500'
                                }`}
                              >
                                {task.priority}
                              </Badge>
                            </div>
                            <p className="text-xs text-gray-400 mb-2">
                              {task.description}
                            </p>
                            {task.link && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 text-xs border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
                                onClick={() => window.open(task.link, '_blank')}
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Open
                              </Button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {progress === 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 p-4 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/20 border border-[#D4AF37] rounded-lg"
          >
            <h4 className="text-[#D4AF37] mb-2">🎉 Profile Complete!</h4>
            <p className="text-sm text-gray-300 mb-3">
              Your Google My Business profile is now complete! Remember to:
            </p>
            <ul className="text-sm text-gray-300 space-y-1 ml-4">
              <li>• Post updates 2-3 times per week</li>
              <li>• Respond to reviews within 24 hours</li>
              <li>• Add new photos monthly</li>
              <li>• Monitor insights and adjust strategy</li>
            </ul>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
