'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  CheckSquare,
  Calendar,
  BookOpen,
  Link as LinkIcon,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { useChecklist } from '@/contexts/ChecklistContext';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { getProgressPercentage } = useChecklist();

  const progress = getProgressPercentage();

  const navItems = [
    { href: '/dublin-moving-guide', label: 'Home', icon: Home },
    { href: '/dublin-moving-guide/checklist', label: 'Checklist', icon: CheckSquare },
    { href: '/dublin-moving-guide/timeline', label: 'Timeline', icon: Calendar },
    { href: '/dublin-moving-guide/guide', label: 'Guide', icon: BookOpen },
    { href: '/dublin-moving-guide/resources', label: 'Resources', icon: LinkIcon },
  ];

  const isActive = (href: string) => {
    if (href === '/dublin-moving-guide') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <Link href="/dublin-moving-guide" className="flex items-center space-x-2">
              <span className="text-2xl">🇮🇪</span>
              <div>
                <h1 className="text-xl font-bold text-green-700">Dublin Moving Guide</h1>
                <p className="text-xs text-gray-500">For Work Permit Holders</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Progress Badge */}
            {progress > 0 && (
              <div className="ml-4 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                {progress}% Complete
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {progress > 0 && (
              <div className="px-3 py-2">
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold inline-block">
                  {progress}% Complete
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
