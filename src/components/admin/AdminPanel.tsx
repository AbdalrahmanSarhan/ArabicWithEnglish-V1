import React, { useEffect, useState } from 'react';
import { Search, SlidersHorizontal, Download, Users, Star, Clock, Home, Settings, BarChart2, MessageSquare, Book, Bell, HelpCircle, User, LogOut, Mail, Plus, Filter, ArrowUpDown, Menu, X, ChevronRight, Calendar, Layers, BookOpen, FileText, FileTerminal, UserPlus, Moon, Sun, Globe } from 'lucide-react';
import { Section } from '../ui/Section';
import { UserList } from './UserList';
import { UserStats } from './UserStats';
import { Card } from '../ui/Card';
import { UserFilters } from './UserFilters';
import { CoursesPage } from './CoursesPage';
import { MessagesPage } from './MessagesPage';
import { AnalyticsPage } from './AnalyticsPage';
import { SettingsPage } from './SettingsPage';
import { Dashboard } from './Dashboard';
import { UsersPage } from './UsersPage';
import { PrivacyPolicyPage } from './PrivacyPolicyPage';
import { TermsOfServicePage } from './TermsOfServicePage';
import { ContactSubmissionsPage } from './ContactSubmissionsPage';
import { WaitlistPage } from './WaitlistPage';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
interface User {
  id: string;
  name: string;
  email: string;
  registeredDate: string;
  status: 'active' | 'pending' | 'blocked';
  referralCode?: string;
  interests?: string;
}
export const AdminPanel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'status'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const {
    language,
    toggleLanguage
  } = useLanguage();
  const {
    theme,
    toggleTheme
  } = useTheme();
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const users: User[] = [{
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    registeredDate: '2024-01-15',
    status: 'active',
    referralCode: 'REF123',
    interests: 'Grammar, Speaking'
  }, {
    id: '2',
    name: 'Sarah Smith',
    email: 'sarah@example.com',
    registeredDate: '2024-01-14',
    status: 'pending',
    interests: 'Business English'
  }, {
    id: '3',
    name: 'Michael Johnson',
    email: 'michael@example.com',
    registeredDate: '2024-01-12',
    status: 'active',
    interests: 'Vocabulary, Writing'
  }, {
    id: '4',
    name: 'Emily Brown',
    email: 'emily@example.com',
    registeredDate: '2024-01-10',
    status: 'blocked',
    referralCode: 'REF456',
    interests: 'Pronunciation'
  }, {
    id: '5',
    name: 'David Wilson',
    email: 'david@example.com',
    registeredDate: '2024-01-08',
    status: 'active',
    interests: 'Grammar, Reading'
  }, {
    id: '6',
    name: 'Jennifer Lee',
    email: 'jennifer@example.com',
    registeredDate: '2024-01-05',
    status: 'active',
    interests: 'Conversation, Idioms'
  }, {
    id: '7',
    name: 'Robert Garcia',
    email: 'robert@example.com',
    registeredDate: '2024-01-03',
    status: 'pending',
    interests: 'Academic English'
  }, {
    id: '8',
    name: 'Lisa Taylor',
    email: 'lisa@example.com',
    registeredDate: '2023-12-28',
    status: 'active',
    referralCode: 'REF789',
    interests: 'TOEFL Preparation'
  }];
  const stats = [{
    icon: <Users className="w-6 h-6 text-primary-500 dark:text-primary-400" />,
    label: 'Total Users',
    value: '2,547',
    trend: '+12%',
    trendDirection: 'up'
  }, {
    icon: <Star className="w-6 h-6 text-primary-500 dark:text-primary-400" />,
    label: 'Active Users',
    value: '1,875',
    trend: '+8%',
    trendDirection: 'up'
  }, {
    icon: <Clock className="w-6 h-6 text-primary-500 dark:text-primary-400" />,
    label: 'Avg. Response Time',
    value: '2.5h',
    trend: '-15%',
    trendDirection: 'down'
  }];
  const filteredUsers = users.filter(user => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = user.name.toLowerCase().includes(searchLower) || user.email.toLowerCase().includes(searchLower) || user.status.toLowerCase().includes(searchLower);
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === 'date') {
      return sortOrder === 'asc' ? a.registeredDate.localeCompare(b.registeredDate) : b.registeredDate.localeCompare(a.registeredDate);
    }
    if (sortBy === 'name') {
      return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    }
    return sortOrder === 'asc' ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status);
  });
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (windowWidth < 768) {
      setIsMobileMenuOpen(false);
    }
  };
  const sidebarItems = [{
    icon: <Home size={20} />,
    label: 'Dashboard',
    id: 'dashboard'
  }, {
    icon: <Users size={20} />,
    label: 'Users',
    id: 'users'
  }, {
    icon: <Book size={20} />,
    label: 'Courses',
    id: 'courses'
  }, {
    icon: <MessageSquare size={20} />,
    label: 'Messages',
    id: 'messages'
  }, {
    icon: <BarChart2 size={20} />,
    label: 'Analytics',
    id: 'analytics'
  }, {
    icon: <FileText size={20} />,
    label: 'Privacy Policy',
    id: 'privacy'
  }, {
    icon: <FileTerminal size={20} />,
    label: 'Terms of Service',
    id: 'terms'
  }, {
    icon: <Mail size={20} />,
    label: 'Contact Submissions',
    id: 'contact'
  }, {
    icon: <UserPlus size={20} />,
    label: 'Early Access',
    id: 'waitlist'
  }, {
    icon: <Settings size={20} />,
    label: 'Settings',
    id: 'settings'
  }];
  const renderPageContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard stats={stats} users={users} />;
      case 'users':
        return <UsersPage />;
      case 'courses':
        return <CoursesPage />;
      case 'messages':
        return <MessagesPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsOfServicePage />;
      case 'contact':
        return <ContactSubmissionsPage />;
      case 'waitlist':
        return <WaitlistPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard stats={stats} users={users} />;
    }
  };
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true"></div>}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <span className="text-primary-700 dark:text-primary-400 font-medium text-sm">
                A
              </span>
            </div>
            <span className="ml-3 font-semibold text-gray-900 dark:text-white">
              Admin Panel
            </span>
          </div>
          <button onClick={toggleMobileMenu} className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-md md:hidden" aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {sidebarItems.map(item => <button key={item.id} onClick={() => handleTabChange(item.id)} className={`w-full flex items-center px-4 py-3 rounded-lg text-sm transition-colors ${activeTab === item.id ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'}`} aria-current={activeTab === item.id ? 'page' : undefined}>
                <span className="w-5 h-5">{item.icon}</span>
                <span className="ml-3">{item.label}</span>
              </button>)}
          </nav>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Admin User
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  admin@example.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={toggleLanguage} className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}>
                <Globe className="w-5 h-5" />
              </button>
              <button onClick={toggleTheme} className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 mt-4 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-h-screen md:ml-64">
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button onClick={toggleMobileMenu} className="mr-4 p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden" aria-label="Open menu">
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                  {activeTab}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hidden sm:block">
                <HelpCircle className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hidden sm:block">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">{renderPageContent()}</div>
        </main>
      </div>
    </div>;
};