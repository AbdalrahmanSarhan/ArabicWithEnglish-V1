import React, { useState } from 'react';
import { Calendar, TrendingUp, Users, Clock, Book, DollarSign, Activity, BarChart2, PieChart, Download, Filter, ChevronDown, ChevronUp, ArrowRight, Globe, Smartphone, Laptop, Tablet } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
export const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '12m'>('30d');
  const [showFilters, setShowFilters] = useState(false);
  const overviewStats = [{
    label: 'Total Users',
    value: '2,547',
    change: '+12%',
    trend: 'up',
    icon: <Users className="w-5 h-5 text-primary-500 dark:text-primary-400" />
  }, {
    label: 'Active Users',
    value: '1,875',
    change: '+8%',
    trend: 'up',
    icon: <Activity className="w-5 h-5 text-primary-500 dark:text-primary-400" />
  }, {
    label: 'Course Enrollments',
    value: '4,289',
    change: '+15%',
    trend: 'up',
    icon: <Book className="w-5 h-5 text-primary-500 dark:text-primary-400" />
  }, {
    label: 'Revenue',
    value: '$32,580',
    change: '+23%',
    trend: 'up',
    icon: <DollarSign className="w-5 h-5 text-primary-500 dark:text-primary-400" />
  }, {
    label: 'Avg. Session Duration',
    value: '24m 32s',
    change: '+5%',
    trend: 'up',
    icon: <Clock className="w-5 h-5 text-primary-500 dark:text-primary-400" />
  }, {
    label: 'Completion Rate',
    value: '68%',
    change: '+3%',
    trend: 'up',
    icon: <TrendingUp className="w-5 h-5 text-primary-500 dark:text-primary-400" />
  }];
  const topCourses = [{
    title: 'English Grammar Fundamentals',
    students: 1247,
    completion: 85,
    rating: 4.8,
    revenue: '$12,470'
  }, {
    title: 'Business English for Professionals',
    students: 856,
    completion: 92,
    rating: 4.9,
    revenue: '$8,560'
  }, {
    title: 'Conversation Skills: Speaking Naturally',
    students: 1089,
    completion: 78,
    rating: 4.7,
    revenue: '$10,890'
  }, {
    title: 'Academic Writing Excellence',
    students: 742,
    completion: 88,
    rating: 4.6,
    revenue: '$7,420'
  }, {
    title: 'Reading Comprehension Strategies',
    students: 523,
    completion: 81,
    rating: 4.5,
    revenue: '$5,230'
  }];
  const userAcquisition = [{
    source: 'Organic Search',
    value: 35,
    color: 'bg-blue-500'
  }, {
    source: 'Direct',
    value: 25,
    color: 'bg-green-500'
  }, {
    source: 'Social Media',
    value: 20,
    color: 'bg-purple-500'
  }, {
    source: 'Referral',
    value: 15,
    color: 'bg-yellow-500'
  }, {
    source: 'Email',
    value: 5,
    color: 'bg-red-500'
  }];
  const deviceBreakdown = [{
    device: 'Mobile',
    icon: <Smartphone className="w-4 h-4" />,
    value: 45,
    color: 'bg-blue-500'
  }, {
    device: 'Desktop',
    icon: <Laptop className="w-4 h-4" />,
    value: 35,
    color: 'bg-green-500'
  }, {
    device: 'Tablet',
    icon: <Tablet className="w-4 h-4" />,
    value: 20,
    color: 'bg-purple-500'
  }];
  const recentActivity = [{
    user: 'John Smith',
    action: 'enrolled in',
    target: 'English Grammar Fundamentals',
    time: '2 hours ago'
  }, {
    user: 'Sarah Johnson',
    action: 'completed',
    target: 'Business English Module 3',
    time: '4 hours ago'
  }, {
    user: 'Michael Chen',
    action: 'left a review for',
    target: 'Conversation Skills: Speaking Naturally',
    time: '6 hours ago'
  }, {
    user: 'Emma Rodriguez',
    action: 'purchased',
    target: 'Premium Plan Subscription',
    time: '8 hours ago'
  }, {
    user: 'David Wilson',
    action: 'earned certificate for',
    target: 'Academic Writing Excellence',
    time: '10 hours ago'
  }];
  const userRetention = [{
    period: 'Week 1',
    rate: 100
  }, {
    period: 'Week 2',
    rate: 85
  }, {
    period: 'Week 3',
    rate: 75
  }, {
    period: 'Week 4',
    rate: 68
  }, {
    period: 'Week 5',
    rate: 62
  }, {
    period: 'Week 6',
    rate: 58
  }, {
    period: 'Week 7',
    rate: 55
  }, {
    period: 'Week 8',
    rate: 53
  }];
  const timeRangeOptions = [{
    value: '7d',
    label: 'Last 7 days'
  }, {
    value: '30d',
    label: 'Last 30 days'
  }, {
    value: '90d',
    label: 'Last 90 days'
  }, {
    value: '12m',
    label: 'Last 12 months'
  }];
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <select value={timeRange} onChange={e => setTimeRange(e.target.value as any)} className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
            {timeRangeOptions.map(option => <option key={option.value} value={option.value}>
                {option.label}
              </option>)}
          </select>
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
        </div>
      </div>
      {showFilters && <Card className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                User Segment
              </label>
              <select className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option value="all">All Users</option>
                <option value="new">New Users</option>
                <option value="returning">Returning Users</option>
                <option value="premium">Premium Users</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Course Category
              </label>
              <select className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option value="all">All Categories</option>
                <option value="grammar">Grammar</option>
                <option value="vocabulary">Vocabulary</option>
                <option value="speaking">Speaking</option>
                <option value="writing">Writing</option>
                <option value="reading">Reading</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Region
              </label>
              <select className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option value="all">All Regions</option>
                <option value="na">North America</option>
                <option value="eu">Europe</option>
                <option value="asia">Asia</option>
                <option value="mena">Middle East & North Africa</option>
                <option value="latam">Latin America</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Reset Filters
            </button>
          </div>
        </Card>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {overviewStats.map((stat, index) => <Card key={index} className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30">
                {stat.icon}
              </div>
              <Badge variant={stat.trend === 'up' ? 'success' : 'danger'} size="sm" className="flex items-center gap-1">
                {stat.trend === 'up' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                {stat.change}
              </Badge>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </p>
          </Card>)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              User Growth
            </h3>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                New Users
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <span className="w-2 h-2 rounded-full bg-secondary-500"></span>
                Active Users
              </span>
            </div>
          </div>
          <div className="h-64 w-full flex items-end justify-between">
            {Array.from({
            length: 12
          }).map((_, index) => <div key={index} className="flex flex-col items-center gap-1 w-full">
                <div className="w-full flex flex-col items-center">
                  <div className="w-5/6 bg-primary-500 dark:bg-primary-400 rounded-t" style={{
                height: `${30 + Math.random() * 100}px`
              }}></div>
                  <div className="w-5/6 bg-secondary-500 dark:bg-secondary-400 rounded-t mt-1" style={{
                height: `${50 + Math.random() * 80}px`
              }}></div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                </span>
              </div>)}
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              User Retention
            </h3>
            <Badge variant="primary" size="sm">
              Cohort Analysis
            </Badge>
          </div>
          <div className="h-64 w-full flex items-end justify-between">
            {userRetention.map((data, index) => <div key={index} className="flex flex-col items-center gap-1 w-full">
                <div className="w-full flex flex-col items-center">
                  <div className="w-5/6 bg-primary-500 dark:bg-primary-400 rounded-t transition-all duration-500" style={{
                height: `${data.rate / 100 * 200}px`
              }}></div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {data.period}
                </span>
              </div>)}
          </div>
        </Card>
      </div>
      <Card className="p-5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Top Performing Courses
          </h3>
          <button className="text-primary-600 dark:text-primary-400 hover:underline text-sm flex items-center gap-1">
            View All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Course
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 text-right">
                  Students
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 text-right">
                  Completion
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 text-right">
                  Rating
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 text-right">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody>
              {topCourses.map((course, index) => <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 text-sm text-gray-900 dark:text-white">
                    {course.title}
                  </td>
                  <td className="py-3 text-sm text-gray-700 dark:text-gray-300 text-right">
                    {course.students.toLocaleString()}
                  </td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div className="bg-primary-600 dark:bg-primary-400 h-1.5 rounded-full" style={{
                      width: `${course.completion}%`
                    }}></div>
                      </div>
                      <span className="text-xs text-gray-700 dark:text-gray-300">
                        {course.completion}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-gray-700 dark:text-gray-300 text-right">
                    <div className="flex items-center justify-end">
                      <span>{course.rating}</span>
                      <span className="text-yellow-400 ml-1">★</span>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-gray-700 dark:text-gray-300 text-right">
                    {course.revenue}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            User Acquisition
          </h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {userAcquisition.map((item, index) => {
                  const startAngle = userAcquisition.slice(0, index).reduce((sum, curr) => sum + curr.value, 0);
                  const endAngle = startAngle + item.value;
                  const startAngleRad = startAngle / 100 * 2 * Math.PI - Math.PI / 2;
                  const endAngleRad = endAngle / 100 * 2 * Math.PI - Math.PI / 2;
                  const x1 = 50 + 40 * Math.cos(startAngleRad);
                  const y1 = 50 + 40 * Math.sin(startAngleRad);
                  const x2 = 50 + 40 * Math.cos(endAngleRad);
                  const y2 = 50 + 40 * Math.sin(endAngleRad);
                  const largeArcFlag = item.value > 50 ? 1 : 0;
                  return <path key={index} d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`} className={item.color} />;
                })}
                  <circle cx="50" cy="50" r="25" fill="white" className="dark:fill-gray-800" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-900 dark:text-white">
                  100%
                </div>
              </div>
            </div>
            <div className="flex-1">
              <ul className="space-y-3">
                {userAcquisition.map((item, index) => <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {item.source}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.value}%
                    </span>
                  </li>)}
              </ul>
            </div>
          </div>
        </Card>
        <Card className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Device Breakdown
          </h3>
          <div className="space-y-4">
            {deviceBreakdown.map((item, index) => <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white`}>
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.device}
                    </span>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {item.value}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className={`${item.color} h-2 rounded-full`} style={{
                width: `${item.value}%`
              }}></div>
                </div>
              </div>)}
          </div>
          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
              <Globe className="w-5 h-5" />
              <span>Users from 92 countries worldwide</span>
            </div>
          </div>
        </Card>
      </div>
      <Card className="p-5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Activity
          </h3>
          <button className="text-primary-600 dark:text-primary-400 hover:underline text-sm flex items-center gap-1">
            View All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                {activity.user.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {activity.user}
                  </span>{' '}
                  {activity.action}{' '}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {activity.target}
                  </span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>)}
        </div>
      </Card>
    </div>;
};