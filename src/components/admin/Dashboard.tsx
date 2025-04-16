import React from 'react';
import { Card } from '../ui/Card';
import { UserStats } from './UserStats';
import { UserFilters } from './UserFilters';
import { Users, Star, Clock, BookOpen, User, CheckCircle } from 'lucide-react';
interface DashboardProps {
  stats: {
    icon: React.ReactNode;
    label: string;
    value: string;
    trend: string;
    trendDirection: 'up' | 'down';
  }[];
  users: {
    id: string;
    name: string;
    email: string;
    registeredDate: string;
    status: 'active' | 'pending' | 'blocked';
    referralCode?: string;
    interests?: string;
  }[];
}
export const Dashboard = ({
  stats,
  users
}: DashboardProps) => {
  // Course completion data for chart
  const courseData = [{
    course: 'Grammar Basics',
    completion: 78
  }, {
    course: 'Conversation Skills',
    completion: 65
  }, {
    course: 'Business English',
    completion: 42
  }, {
    course: 'TOEFL Preparation',
    completion: 87
  }];
  // Weekly user activity data
  const weeklyActivity = [{
    day: 'Mon',
    users: 120
  }, {
    day: 'Tue',
    users: 145
  }, {
    day: 'Wed',
    users: 132
  }, {
    day: 'Thu',
    users: 165
  }, {
    day: 'Fri',
    users: 170
  }, {
    day: 'Sat',
    users: 110
  }, {
    day: 'Sun',
    users: 95
  }];
  // Upcoming events
  const upcomingEvents = [{
    title: 'New Course Launch',
    date: 'May 15, 2024',
    description: 'Launch of Advanced Business English course'
  }, {
    title: 'System Maintenance',
    date: 'May 18, 2024',
    description: 'Scheduled downtime for system upgrades (2 hours)'
  }, {
    title: 'Teacher Meeting',
    date: 'May 20, 2024',
    description: 'Quarterly review with all teaching staff'
  }];
  // Recent activities
  const recentActivities = [{
    user: 'John Doe',
    action: 'registered',
    time: '2 hours ago'
  }, {
    user: 'Sarah Smith',
    action: 'updated profile',
    time: '4 hours ago'
  }, {
    user: 'Michael Johnson',
    action: 'completed lesson',
    time: '6 hours ago'
  }, {
    user: 'Emily Brown',
    action: 'sent message',
    time: '8 hours ago'
  }];
  // Weekly activity chart
  const getActivityBarHeight = (users: number) => {
    const max = Math.max(...weeklyActivity.map(day => day.users));
    return `${users / max * 100}%`;
  };
  return <div className="space-y-6">
      <UserStats stats={stats} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Registrations
            </h2>
            <button className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
              View all
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Interests
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {users.slice(0, 5).map(user => <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8">
                          <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                            <span className="text-primary-700 dark:text-primary-400 font-medium text-xs">
                              {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {user.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : user.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {new Date(user.registeredDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {user.interests || '-'}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Activity
            </h2>
            <button className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
              View all
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-primary-700 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-900 dark:text-white">
                    <span className="font-medium">{activity.user}</span>{' '}
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.time}
                  </p>
                </div>
              </div>)}
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Completion Chart */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Course Completion
            </h2>
            <div className="flex items-center gap-2">
              <select className="text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-2 py-1">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last year</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            {courseData.map((course, index) => <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {course.course}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {course.completion}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-primary-600 dark:bg-primary-400 h-2.5 rounded-full" style={{
                width: `${course.completion}%`
              }}></div>
                </div>
              </div>)}
          </div>
        </Card>
        {/* Weekly Activity Chart */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Weekly Activity
            </h2>
          </div>
          <div className="flex items-end justify-between h-32 mt-4 mb-2 px-2">
            {weeklyActivity.map((day, index) => <div key={index} className="flex flex-col items-center w-1/7">
                <div className="relative w-full flex justify-center">
                  <div className="w-6 bg-primary-500/80 dark:bg-primary-400/80 hover:bg-primary-600 dark:hover:bg-primary-500 rounded-t-sm transition-all group cursor-pointer" style={{
                height: getActivityBarHeight(day.users)
              }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {day.users} users
                    </div>
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {day.day}
                </span>
              </div>)}
          </div>
        </Card>
      </div>
      {/* Upcoming Events */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Upcoming Events
          </h2>
          <button className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
            View calendar
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingEvents.map((event, index) => <div key={index} className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                  <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                  <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">
                    {event.date}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </Card>
    </div>;
};