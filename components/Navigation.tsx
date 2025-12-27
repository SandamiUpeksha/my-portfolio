'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Navigation */}
      <nav className="relative px-6 py-6 flex items-center justify-between">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
        <Link href="/" className="text-2xl font-light hover:text-white transition-colors">
          Portfolio
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`hover:text-white transition-colors ${isActive('/') ? 'border-b border-white pb-1' : ''}`}
          >
            HOME
          </Link>
          <Link 
            href="/skills" 
            className={`hover:text-white transition-colors ${isActive('/skills') ? 'border-b border-white pb-1' : ''}`}
          >
            SKILLS
          </Link>
          <Link 
            href="/projects" 
            className={`hover:text-white transition-colors ${isActive('/projects') ? 'border-b border-white pb-1' : ''}`}
          >
            PROJECTS
          </Link>
          <Link 
            href="/achievements" 
            className={`hover:text-white transition-colors ${isActive('/achievements') ? 'border-b border-white pb-1' : ''}`}
          >
            ACHIEVEMENTS
          </Link>
          <Link 
            href="/contact" 
            className={`hover:text-white transition-colors ${isActive('/contact') ? 'border-b border-white pb-1' : ''}`}
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-8 md:hidden">
          <Link href="/" className="text-2xl hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
            HOME
          </Link>
          <Link href="/skills" className="text-2xl hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
            SKILLS
          </Link>
          <Link href="/projects" className="text-2xl hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
            PROJECTS
          </Link>
          <Link href="/achievements" className="text-2xl hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
            ACHIEVEMENTS
          </Link>
          <Link href="/contact" className="text-2xl hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
            CONTACT
          </Link>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-white bg-opacity-0.1 backdrop-blur-md rounded-full border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 shadow-lg shadow-white/10 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </>
  );
}
