import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Plus,
  Trash2,
  Calendar as CalendarIcon,
  Edit,
  CheckCircle2,
  Clock,
  FileText,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'idea' | 'in-progress' | 'completed' | 'published';
  scheduledDate?: string;
  keywords: string[];
  notes?: string;
}

const categories = [
  'MSME Loans',
  'Financial Planning',
  'Business Setup',
  'Digital Marketing',
  'Legal & Compliance',
  'ISO Certification',
  'E-commerce',
  'Tax & GST',
  'Startup India',
  'General Business',
];

const statusColors = {
  'idea': 'border-gray-500 text-gray-500',
  'in-progress': 'border-blue-500 text-blue-500',
  'completed': 'border-green-500 text-green-500',
  'published': 'border-[#D4AF37] text-[#D4AF37]',
};

export function ContentCalendar() {
  const [contentItems, setContentItems] = useState<ContentItem[]>(() => {
    const saved = localStorage.getItem('content-calendar');
    return saved ? JSON.parse(saved) : [];
  });
  const [isAddingContent, setIsAddingContent] = useState(false);
  const [newContent, setNewContent] = useState({
    title: '',
    description: '',
    category: 'General Business',
    status: 'idea' as ContentItem['status'],
    scheduledDate: '',
    keywords: '',
    notes: '',
  });

  const saveContent = (updatedContent: ContentItem[]) => {
    setContentItems(updatedContent);
    localStorage.setItem('content-calendar', JSON.stringify(updatedContent));
  };

  const addContent = () => {
    if (!newContent.title) return;

    const content: ContentItem = {
      id: Date.now().toString(),
      title: newContent.title,
      description: newContent.description,
      category: newContent.category,
      status: newContent.status,
      scheduledDate: newContent.scheduledDate || undefined,
      keywords: newContent.keywords.split(',').map((k) => k.trim()).filter(Boolean),
      notes: newContent.notes || undefined,
    };

    saveContent([...contentItems, content]);
    setNewContent({
      title: '',
      description: '',
      category: 'General Business',
      status: 'idea',
      scheduledDate: '',
      keywords: '',
      notes: '',
    });
    setIsAddingContent(false);
  };

  const deleteContent = (id: string) => {
    saveContent(contentItems.filter((c) => c.id !== id));
  };

  const updateContentStatus = (id: string, status: ContentItem['status']) => {
    saveContent(contentItems.map((c) => (c.id === id ? { ...c, status } : c)));
  };

  const stats = {
    total: contentItems.length,
    ideas: contentItems.filter((c) => c.status === 'idea').length,
    inProgress: contentItems.filter((c) => c.status === 'in-progress').length,
    completed: contentItems.filter((c) => c.status === 'completed').length,
    published: contentItems.filter((c) => c.status === 'published').length,
  };

  const getStatusIcon = (status: ContentItem['status']) => {
    switch (status) {
      case 'idea':
        return <FileText className="w-4 h-4 text-gray-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'completed':
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'published':
        return <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  // Sort content by scheduled date and status
  const sortedContent = [...contentItems].sort((a, b) => {
    if (a.scheduledDate && b.scheduledDate) {
      return new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime();
    }
    if (a.scheduledDate) return -1;
    if (b.scheduledDate) return 1;
    return 0;
  });

  return (
    <Card className="bg-black border-[#D4AF37]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-[#D4AF37]">Content Marketing Calendar</CardTitle>
            <CardDescription className="text-gray-400">
              Plan and track your blog content strategy
            </CardDescription>
          </div>
          <Dialog open={isAddingContent} onOpenChange={setIsAddingContent}>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className="bg-[#D4AF37] text-black hover:bg-[#B8941F]"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Content
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black border-[#D4AF37] text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-[#D4AF37]">Add New Content Idea</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                <div>
                  <Label htmlFor="title" className="text-gray-300">
                    Title *
                  </Label>
                  <Input
                    id="title"
                    placeholder="How to Get MSME Loan in 2025"
                    value={newContent.title}
                    onChange={(e) =>
                      setNewContent({ ...newContent, title: e.target.value })
                    }
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-gray-300">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Brief overview of what this article will cover..."
                    value={newContent.description}
                    onChange={(e) =>
                      setNewContent({ ...newContent, description: e.target.value })
                    }
                    className="bg-gray-900 border-gray-700 text-white min-h-[100px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category" className="text-gray-300">
                      Category
                    </Label>
                    <Select
                      value={newContent.category}
                      onValueChange={(value) =>
                        setNewContent({ ...newContent, category: value })
                      }
                    >
                      <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700">
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="status" className="text-gray-300">
                      Status
                    </Label>
                    <Select
                      value={newContent.status}
                      onValueChange={(value: ContentItem['status']) =>
                        setNewContent({ ...newContent, status: value })
                      }
                    >
                      <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700">
                        <SelectItem value="idea">Idea</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="scheduledDate" className="text-gray-300">
                    Scheduled Date
                  </Label>
                  <Input
                    id="scheduledDate"
                    type="date"
                    value={newContent.scheduledDate}
                    onChange={(e) =>
                      setNewContent({ ...newContent, scheduledDate: e.target.value })
                    }
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="keywords" className="text-gray-300">
                    Keywords (comma-separated)
                  </Label>
                  <Input
                    id="keywords"
                    placeholder="MSME loan, business finance, startup funding"
                    value={newContent.keywords}
                    onChange={(e) =>
                      setNewContent({ ...newContent, keywords: e.target.value })
                    }
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="notes" className="text-gray-300">
                    Notes
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Additional notes, research links, etc..."
                    value={newContent.notes}
                    onChange={(e) =>
                      setNewContent({ ...newContent, notes: e.target.value })
                    }
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <Button
                  onClick={addContent}
                  className="w-full bg-[#D4AF37] text-black hover:bg-[#B8941F]"
                >
                  Add Content
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-5 gap-3 mt-6">
          <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-1">
              <FileText className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs text-gray-400">Total</span>
            </div>
            <p className="text-xl text-white">{stats.total}</p>
          </div>
          <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-1">
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-400">Ideas</span>
            </div>
            <p className="text-xl text-white">{stats.ideas}</p>
          </div>
          <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-xs text-gray-400">In Progress</span>
            </div>
            <p className="text-xl text-white">{stats.inProgress}</p>
          </div>
          <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-xs text-gray-400">Completed</span>
            </div>
            <p className="text-xl text-white">{stats.completed}</p>
          </div>
          <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs text-gray-400">Published</span>
            </div>
            <p className="text-xl text-white">{stats.published}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {contentItems.length === 0 ? (
          <div className="text-center py-12">
            <CalendarIcon className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 mb-4">No content planned yet</p>
            <Button
              onClick={() => setIsAddingContent(true)}
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
            >
              <Plus className="w-4 h-4 mr-2" />
              Plan Your First Article
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedContent.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-[#D4AF37]/30 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusIcon(content.status)}
                      <h4 className="text-white flex-1">{content.title}</h4>
                      <Badge
                        variant="outline"
                        className={statusColors[content.status]}
                      >
                        {content.status}
                      </Badge>
                    </div>
                    {content.description && (
                      <p className="text-sm text-gray-400 mb-2">
                        {content.description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline" className="border-[#D4AF37] text-[#D4AF37]">
                        {content.category}
                      </Badge>
                      {content.keywords.map((keyword) => (
                        <Badge
                          key={keyword}
                          variant="outline"
                          className="border-gray-700 text-gray-400 text-xs"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    {content.notes && (
                      <p className="text-sm text-gray-500 italic mb-2">
                        {content.notes}
                      </p>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-red-500 hover:text-red-400"
                    onClick={() => deleteContent(content.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  {content.scheduledDate ? (
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CalendarIcon className="w-3 h-3" />
                      Scheduled: {new Date(content.scheduledDate).toLocaleDateString()}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">No date scheduled</div>
                  )}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className={`h-7 text-xs ${
                        content.status === 'idea'
                          ? 'border-gray-500 text-gray-500'
                          : 'border-gray-700 text-gray-600'
                      }`}
                      onClick={() => updateContentStatus(content.id, 'idea')}
                    >
                      Idea
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className={`h-7 text-xs ${
                        content.status === 'in-progress'
                          ? 'border-blue-500 text-blue-500'
                          : 'border-gray-700 text-gray-600'
                      }`}
                      onClick={() => updateContentStatus(content.id, 'in-progress')}
                    >
                      In Progress
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className={`h-7 text-xs ${
                        content.status === 'completed'
                          ? 'border-green-500 text-green-500'
                          : 'border-gray-700 text-gray-600'
                      }`}
                      onClick={() => updateContentStatus(content.id, 'completed')}
                    >
                      Completed
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className={`h-7 text-xs ${
                        content.status === 'published'
                          ? 'border-[#D4AF37] text-[#D4AF37]'
                          : 'border-gray-700 text-gray-600'
                      }`}
                      onClick={() => updateContentStatus(content.id, 'published')}
                    >
                      Published
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
