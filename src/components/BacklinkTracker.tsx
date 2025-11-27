import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Plus,
  Trash2,
  ExternalLink,
  Calendar,
  TrendingUp,
  Link as LinkIcon,
  CheckCircle,
  Clock,
  XCircle,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

interface Backlink {
  id: string;
  url: string;
  sourceDomain: string;
  targetPage: string;
  anchorText: string;
  status: 'live' | 'pending' | 'lost';
  type: 'guest-post' | 'directory' | 'partner' | 'press' | 'social' | 'other';
  dateAdded: string;
  notes?: string;
}

const backlinkTypeColors = {
  'guest-post': 'border-blue-500 text-blue-500',
  'directory': 'border-green-500 text-green-500',
  'partner': 'border-purple-500 text-purple-500',
  'press': 'border-pink-500 text-pink-500',
  'social': 'border-cyan-500 text-cyan-500',
  'other': 'border-gray-500 text-gray-500',
};

export function BacklinkTracker() {
  const [backlinks, setBacklinks] = useState<Backlink[]>(() => {
    const saved = localStorage.getItem('backlinks');
    return saved ? JSON.parse(saved) : [];
  });
  const [isAddingBacklink, setIsAddingBacklink] = useState(false);
  const [newBacklink, setNewBacklink] = useState({
    sourceDomain: '',
    url: '',
    targetPage: '',
    anchorText: '',
    type: 'guest-post' as Backlink['type'],
    status: 'pending' as Backlink['status'],
    notes: '',
  });

  const saveBacklinks = (updatedBacklinks: Backlink[]) => {
    setBacklinks(updatedBacklinks);
    localStorage.setItem('backlinks', JSON.stringify(updatedBacklinks));
  };

  const addBacklink = () => {
    if (!newBacklink.sourceDomain || !newBacklink.url) return;

    const backlink: Backlink = {
      id: Date.now().toString(),
      ...newBacklink,
      dateAdded: new Date().toISOString().split('T')[0],
    };

    saveBacklinks([...backlinks, backlink]);
    setNewBacklink({
      sourceDomain: '',
      url: '',
      targetPage: '',
      anchorText: '',
      type: 'guest-post',
      status: 'pending',
      notes: '',
    });
    setIsAddingBacklink(false);
  };

  const deleteBacklink = (id: string) => {
    saveBacklinks(backlinks.filter((b) => b.id !== id));
  };

  const updateBacklinkStatus = (id: string, status: Backlink['status']) => {
    saveBacklinks(backlinks.map((b) => (b.id === id ? { ...b, status } : b)));
  };

  const stats = {
    total: backlinks.length,
    live: backlinks.filter((b) => b.status === 'live').length,
    pending: backlinks.filter((b) => b.status === 'pending').length,
    lost: backlinks.filter((b) => b.status === 'lost').length,
  };

  const getStatusIcon = (status: Backlink['status']) => {
    switch (status) {
      case 'live':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'lost':
        return <XCircle className="w-4 h-4 text-red-500" />;
    }
  };

  return (
    <Card className="bg-black border-[#D4AF37]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-[#D4AF37]">Backlink Tracker</CardTitle>
            <CardDescription className="text-gray-400">
              Monitor and manage your backlink building efforts
            </CardDescription>
          </div>
          <Dialog open={isAddingBacklink} onOpenChange={setIsAddingBacklink}>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className="bg-[#D4AF37] text-black hover:bg-[#B8941F]"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Backlink
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black border-[#D4AF37] text-white">
              <DialogHeader>
                <DialogTitle className="text-[#D4AF37]">Add New Backlink</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="sourceDomain" className="text-gray-300">
                    Source Domain *
                  </Label>
                  <Input
                    id="sourceDomain"
                    placeholder="example.com"
                    value={newBacklink.sourceDomain}
                    onChange={(e) =>
                      setNewBacklink({ ...newBacklink, sourceDomain: e.target.value })
                    }
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="url" className="text-gray-300">
                    Full URL *
                  </Label>
                  <Input
                    id="url"
                    placeholder="https://example.com/article"
                    value={newBacklink.url}
                    onChange={(e) =>
                      setNewBacklink({ ...newBacklink, url: e.target.value })
                    }
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="targetPage" className="text-gray-300">
                    Target Page
                  </Label>
                  <Input
                    id="targetPage"
                    placeholder="/msme-loan"
                    value={newBacklink.targetPage}
                    onChange={(e) =>
                      setNewBacklink({ ...newBacklink, targetPage: e.target.value })
                    }
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="anchorText" className="text-gray-300">
                    Anchor Text
                  </Label>
                  <Input
                    id="anchorText"
                    placeholder="MSME Loan Consultancy"
                    value={newBacklink.anchorText}
                    onChange={(e) =>
                      setNewBacklink({ ...newBacklink, anchorText: e.target.value })
                    }
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="type" className="text-gray-300">
                    Backlink Type
                  </Label>
                  <Select
                    value={newBacklink.type}
                    onValueChange={(value: Backlink['type']) =>
                      setNewBacklink({ ...newBacklink, type: value })
                    }
                  >
                    <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      <SelectItem value="guest-post">Guest Post</SelectItem>
                      <SelectItem value="directory">Directory</SelectItem>
                      <SelectItem value="partner">Partner</SelectItem>
                      <SelectItem value="press">Press Release</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="status" className="text-gray-300">
                    Status
                  </Label>
                  <Select
                    value={newBacklink.status}
                    onValueChange={(value: Backlink['status']) =>
                      setNewBacklink({ ...newBacklink, status: value })
                    }
                  >
                    <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="live">Live</SelectItem>
                      <SelectItem value="lost">Lost</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="notes" className="text-gray-300">
                    Notes
                  </Label>
                  <Input
                    id="notes"
                    placeholder="Additional information..."
                    value={newBacklink.notes}
                    onChange={(e) =>
                      setNewBacklink({ ...newBacklink, notes: e.target.value })
                    }
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <Button
                  onClick={addBacklink}
                  className="w-full bg-[#D4AF37] text-black hover:bg-[#B8941F]"
                >
                  Add Backlink
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm text-gray-400">Total</span>
            </div>
            <p className="text-2xl text-white">{stats.total}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-400">Live</span>
            </div>
            <p className="text-2xl text-white">{stats.live}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-gray-400">Pending</span>
            </div>
            <p className="text-2xl text-white">{stats.pending}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="w-4 h-4 text-red-500" />
              <span className="text-sm text-gray-400">Lost</span>
            </div>
            <p className="text-2xl text-white">{stats.lost}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {backlinks.length === 0 ? (
          <div className="text-center py-12">
            <LinkIcon className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 mb-4">No backlinks tracked yet</p>
            <Button
              onClick={() => setIsAddingBacklink(true)}
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Backlink
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {backlinks.map((backlink, index) => (
              <motion.div
                key={backlink.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-[#D4AF37]/30 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-white">{backlink.sourceDomain}</h4>
                      <Badge
                        variant="outline"
                        className={backlinkTypeColors[backlink.type]}
                      >
                        {backlink.type}
                      </Badge>
                      {getStatusIcon(backlink.status)}
                    </div>
                    {backlink.anchorText && (
                      <p className="text-sm text-gray-400 mb-1">
                        Anchor: {backlink.anchorText}
                      </p>
                    )}
                    {backlink.targetPage && (
                      <p className="text-sm text-gray-400 mb-1">
                        Target: {backlink.targetPage}
                      </p>
                    )}
                    {backlink.notes && (
                      <p className="text-sm text-gray-500 italic">{backlink.notes}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-[#D4AF37] hover:text-[#FFD700]"
                      onClick={() => window.open(backlink.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-red-500 hover:text-red-400"
                      onClick={() => deleteBacklink(backlink.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-3 h-3" />
                    {backlink.dateAdded}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className={`h-7 text-xs ${
                        backlink.status === 'pending'
                          ? 'border-yellow-500 text-yellow-500'
                          : 'border-gray-700 text-gray-400'
                      }`}
                      onClick={() => updateBacklinkStatus(backlink.id, 'pending')}
                    >
                      Pending
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className={`h-7 text-xs ${
                        backlink.status === 'live'
                          ? 'border-green-500 text-green-500'
                          : 'border-gray-700 text-gray-400'
                      }`}
                      onClick={() => updateBacklinkStatus(backlink.id, 'live')}
                    >
                      Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className={`h-7 text-xs ${
                        backlink.status === 'lost'
                          ? 'border-red-500 text-red-500'
                          : 'border-gray-700 text-gray-400'
                      }`}
                      onClick={() => updateBacklinkStatus(backlink.id, 'lost')}
                    >
                      Lost
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
