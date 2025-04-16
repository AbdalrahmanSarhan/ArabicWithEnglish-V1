import React, { useState } from 'react';
import { Search, Plus, Filter, Download, MoreHorizontal, Edit, Trash, Eye, Book, Video, FileText, Users, Clock, Calendar, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
type CourseStatus = 'published' | 'draft' | 'archived';
type CourseCategory = 'grammar' | 'vocabulary' | 'speaking' | 'writing' | 'reading' | 'business';
interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  status: CourseStatus;
  category: CourseCategory;
  students: number;
  lessons: number;
  duration: string;
  lastUpdated: string;
  thumbnail: string;
  completion: number;
}
export const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState<CourseStatus | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState<CourseCategory | 'all'>('all');
  const courses: Course[] = [{
    id: '1',
    title: 'English Grammar Fundamentals',
    description: 'Master the basics of English grammar with this comprehensive course',
    instructor: 'Sarah Johnson',
    status: 'published',
    category: 'grammar',
    students: 1247,
    lessons: 24,
    duration: '12 hours',
    lastUpdated: '2024-01-15',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    completion: 85
  }, {
    id: '2',
    title: 'Business English for Professionals',
    description: 'Enhance your business communication skills with industry-specific vocabulary',
    instructor: 'Michael Chen',
    status: 'published',
    category: 'business',
    students: 856,
    lessons: 18,
    duration: '9 hours',
    lastUpdated: '2024-01-10',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    completion: 92
  }, {
    id: '3',
    title: 'Conversation Skills: Speaking Naturally',
    description: 'Practice speaking English naturally in everyday situations',
    instructor: 'Emma Rodriguez',
    status: 'published',
    category: 'speaking',
    students: 1089,
    lessons: 20,
    duration: '10 hours',
    lastUpdated: '2024-01-05',
    thumbnail: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    completion: 78
  }, {
    id: '4',
    title: 'Advanced Vocabulary Building',
    description: 'Expand your vocabulary with advanced words and expressions',
    instructor: 'David Wilson',
    status: 'draft',
    category: 'vocabulary',
    students: 0,
    lessons: 15,
    duration: '8 hours',
    lastUpdated: '2024-01-18',
    thumbnail: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    completion: 45
  }, {
    id: '5',
    title: 'Academic Writing Excellence',
    description: 'Learn to write clear, concise, and well-structured academic papers',
    instructor: 'James Wilson',
    status: 'published',
    category: 'writing',
    students: 742,
    lessons: 22,
    duration: '11 hours',
    lastUpdated: '2023-12-28',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    completion: 88
  }, {
    id: '6',
    title: 'Reading Comprehension Strategies',
    description: 'Improve your reading speed and comprehension with proven techniques',
    instructor: 'Lisa Taylor',
    status: 'archived',
    category: 'reading',
    students: 523,
    lessons: 16,
    duration: '8 hours',
    lastUpdated: '2023-12-15',
    thumbnail: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    completion: 100
  }];
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.description.toLowerCase().includes(searchQuery.toLowerCase()) || course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || course.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || course.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });
  const courseStats = [{
    label: 'Total Courses',
    value: courses.length,
    icon: <Book className="w-5 h-5 text-primary-500 dark:text-primary-400" />
  }, {
    label: 'Total Students',
    value: courses.reduce((acc, course) => acc + course.students, 0),
    icon: <Users className="w-5 h-5 text-primary-500 dark:text-primary-400" />
  }, {
    label: 'Total Lessons',
    value: courses.reduce((acc, course) => acc + course.lessons, 0),
    icon: <Video className="w-5 h-5 text-primary-500 dark:text-primary-400" />
  }];
  const statusStyles = {
    published: 'success',
    draft: 'secondary',
    archived: 'danger'
  };
  return <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courseStats.map((stat, index) => <Card key={index} className="p-5 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          </Card>)}
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-auto md:flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input type="text" placeholder="Search courses..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
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
            <span className="hidden sm:inline">Add Course</span>
          </button>
        </div>
      </div>
      {showFilters && <Card className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status
              </label>
              <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as CourseStatus | 'all')} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option value="all">All Statuses</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value as CourseCategory | 'all')} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option value="all">All Categories</option>
                <option value="grammar">Grammar</option>
                <option value="vocabulary">Vocabulary</option>
                <option value="speaking">Speaking</option>
                <option value="writing">Writing</option>
                <option value="reading">Reading</option>
                <option value="business">Business</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button onClick={() => {
          setStatusFilter('all');
          setCategoryFilter('all');
        }} className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Reset Filters
            </button>
          </div>
        </Card>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => <Card key={course.id} className="overflow-hidden flex flex-col">
            <div className="aspect-video w-full overflow-hidden">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <Badge variant={statusStyles[course.status] as any} size="sm">
                  {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                </Badge>
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex-1">
                {course.description.length > 100 ? `${course.description.substring(0, 100)}...` : course.description}
              </p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Video className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(course.lastUpdated).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    Completion
                  </span>
                  <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
                    {course.completion}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-primary-600 dark:bg-primary-400 h-1.5 rounded-full" style={{
                width: `${course.completion}%`
              }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  By {course.instructor}
                </div>
                <div className="flex gap-1">
                  <button className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" title="View">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" title="Edit">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400" title="Delete">
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Card>)}
      </div>
      {filteredCourses.length === 0 && <div className="text-center py-12">
          <FileText className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No courses found
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>}
    </div>;
};