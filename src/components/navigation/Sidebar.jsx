import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/components/resume/resumeData';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { 
  Home, 
  Globe, 
  Palette, 
  Video, 
  Mic,
  Bot, 
  FileText, 
  Mail,
  Menu,
  X,
  ChevronRight,
  Figma
} from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, page: 'Home' },
  { name: 'Web Design', icon: Globe, page: 'WebDesign' },
  { name: 'UI/UX Design', icon: Figma, page: 'UIUXDesign' },
  { name: 'Graphic Design', icon: Palette, page: 'GraphicDesign' },
  { name: 'Video Production', icon: Video, page: 'VideoProduction' },
  { name: 'Podcast', icon: Mic, page: 'Podcast' },
  { name: 'AI Automation', icon: Bot, page: 'AIAutomation' },
  { name: 'Resume', icon: FileText, page: 'Resume' },
  { name: 'Contact', icon: Mail, page: 'Contact' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (page) => {
    const currentPath = location.pathname;
    if (page === 'Home' && currentPath === '/') return true;
    return currentPath.toLowerCase().includes(page.toLowerCase());
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden p-3 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 text-white hover:border-cyan-500/50 transition-all duration-300"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-72 bg-slate-950/95 backdrop-blur-2xl border-r border-slate-800/50 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* Logo Area */}
        <div className="p-8 border-b border-slate-800/50">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  aria-label="Open profile image"
                  className="w-12 h-12 rounded-xl overflow-hidden border border-cyan-500/30 shadow-lg shadow-cyan-500/10 bg-slate-900 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  <img
                    src="/profile/sean-saliva-sidebar.jpg"
                    alt="Sean Saliva"
                    className="w-full h-full object-cover"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 border border-slate-700/50 bg-slate-950/95 overflow-hidden">
                <DialogTitle className="sr-only">Sean Saliva profile photo</DialogTitle>
                <DialogDescription className="sr-only">
                  Expanded profile image preview.
                </DialogDescription>
                <img
                  src="/profile/sean-saliva-sidebar.jpg"
                  alt="Sean Saliva"
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
              </DialogContent>
            </Dialog>
            <Link to={createPageUrl('Home')} onClick={() => setIsOpen(false)} className="min-w-0">
              <h1 className="text-lg font-semibold text-white tracking-tight">{profile.shortName}</h1>
              <p className="text-xs text-slate-400">{profile.tagline}</p>
            </Link>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.page);
            
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={createPageUrl(item.page)}
                  onClick={() => setIsOpen(false)}
                  className={`
                    group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                    ${active 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/30' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 transition-colors duration-300 ${active ? 'text-cyan-400' : 'group-hover:text-cyan-400'}`} />
                  <span className="font-medium text-sm">{item.name}</span>
                  {active && (
                    <ChevronRight className="w-4 h-4 ml-auto text-cyan-400" />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-800/50">
        <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span>25+ Years in Digital Leadership</span>
        </div>
      </div>
    </aside>
    </>
  );
}
