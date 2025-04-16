import React, { useEffect, useState } from 'react';
import { Search, SlidersHorizontal, Download, Users, Star, Clock, Home, Settings, BarChart2, MessageSquare, Book, Bell, HelpCircle, User, LogOut, Mail, Plus, Filter, ArrowUpDown, Menu, X, ChevronRight, Calendar, Layers } from 'lucide-react';
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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
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
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (windowWidth < 768) {
      setMobileMenuOpen(false);
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
    icon: <Settings size={20} />,
    label: 'Settings',
    id: 'settings'
  }];
  const renderPageContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard stats={stats} users={users} />;
      case 'users':
        return <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-auto md:flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type="text" placeholder="Search users..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span className="hidden sm:inline">Filters</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Export</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Add User</span>
                </button>
              </div>
            </div>
            {showFilters && <UserFilters sortBy={sortBy} setSortBy={setSortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} filterStatus={filterStatus} setFilterStatus={setFilterStatus} />}
            <Card className="p-0 overflow-hidden">
              <UserList users={sortedUsers} />
            </Card>
          </div>;
      case 'courses':
        return <CoursesPage />;
      case 'messages':
        return <MessagesPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard stats={stats} users={users} />;
    }
  };
  return <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {mobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)}></div>}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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
          <button onClick={toggleMobileMenu} className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-md">
            <X size={20} />
          </button>
        </div>
        <div className="py-4">
          <nav className="space-y-1">
            {sidebarItems.map(item => <button key={item.id} onClick={() => handleTabChange(item.id)} className={`w-full flex items-center px-4 py-3 ${activeTab === item.id ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border-l-4 border-primary-600 dark:border-primary-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}>
                <span className="w-5 h-5">{item.icon}</span>
                <span className="ml-3">{item.label}</span>
              </button>)}
          </nav>
          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 px-4">
            <div className="flex items-center gap-3 mb-4">
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
            <button className="w-full flex items-center px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
              <LogOut className="w-5 h-5" />
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </div>
      </div>
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 hidden md:block sticky top-0 h-screen z-30`}>
        <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <div className={`flex items-center ${!sidebarOpen && 'justify-center w-full'}`}>
            <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <span className="text-primary-700 dark:text-primary-400 font-medium text-sm">
                A
              </span>
            </div>
            {sidebarOpen && <span className="ml-3 font-semibold text-gray-900 dark:text-white">
                Admin Panel
              </span>}
          </div>
          <button onClick={toggleSidebar} className={`text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 ${!sidebarOpen && 'hidden'}`}>
            <ArrowUpDown className="w-5 h-5" />
          </button>
        </div>
        <div className="py-4 h-[calc(100%-64px)] flex flex-col justify-between">
          <nav>
            {sidebarItems.map(item => <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full flex items-center ${sidebarOpen ? 'px-4' : 'justify-center'} py-3 ${activeTab === item.id ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border-l-4 border-primary-600 dark:border-primary-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'}`} title={!sidebarOpen ? item.label : undefined}>
                <span className="w-5 h-5">{item.icon}</span>
                {sidebarOpen && <span className="ml-3">{item.label}</span>}
              </button>)}
          </nav>
          <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 px-4">
            <div className="flex items-center gap-3 mb-4">
              {sidebarOpen ? <>
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
                </> : <div className="w-10 h-10 mx-auto rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </div>}
            </div>
            {sidebarOpen ? <button className="w-full flex items-center px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                <LogOut className="w-5 h-5" />
                <span className="ml-3">Logout</span>
              </button> : <button className="w-full flex items-center justify-center p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg" title="Logout">
                <LogOut className="w-5 h-5" />
              </button>}
          </div>
        </div>
      </aside>
      <main className={`flex-1 transition-all duration-300 min-h-screen`}>
        <div className="p-4 sm:p-6">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8">
            <div className="flex items-center">
              <button onClick={toggleMobileMenu} className="mr-4 p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 md:hidden">
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {activeTab === 'dashboard' ? 'Dashboard' : activeTab === 'users' ? 'User Management' : activeTab === 'courses' ? 'Course Management' : activeTab === 'messages' ? 'Messages' : activeTab === 'analytics' ? 'Analytics' : 'Settings'}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {activeTab === 'dashboard' ? 'Overview of your platform' : activeTab === 'users' ? 'Monitor and manage registered users' : activeTab === 'courses' ? 'Manage your courses and lessons' : activeTab === 'messages' ? 'User communications' : activeTab === 'analytics' ? 'Platform performance metrics' : 'Configure your platform'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                <HelpCircle className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </header>
          {renderPageContent()}
        </div>
      </main>
    </div>;
};