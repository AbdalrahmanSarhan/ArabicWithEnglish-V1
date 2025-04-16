import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { Card } from '../ui/Card';
interface Stat {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down';
}
interface UserStatsProps {
  stats: Stat[];
}
export const UserStats = ({
  stats
}: UserStatsProps) => {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      {stats.map((stat, index) => <Card key={index} className="p-5 sm:p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1" hoverEffect="lift">
          <div className="flex items-center justify-between">
            <div className="p-2.5 sm:p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30">
              {stat.icon}
            </div>
            <div className={`flex items-center gap-1 text-sm font-medium ${stat.trendDirection === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {stat.trendDirection === 'up' ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
              {stat.trend}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {stat.label}
            </p>
          </div>
          <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
            <div className="bg-primary-600 dark:bg-primary-400 h-1.5 rounded-full transition-all duration-1000 ease-out" style={{
          width: `${index === 0 ? '75%' : index === 1 ? '60%' : '45%'}`,
          animation: 'growWidth 1.5s ease-out'
        }}></div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {index === 0 ? 'Target: 3,000' : index === 1 ? 'Target: 2,500' : 'Target: 2h'}
            </p>
            <p className="text-xs font-medium text-primary-600 dark:text-primary-400">
              {index === 0 ? '75%' : index === 1 ? '60%' : '45%'}
            </p>
          </div>
        </Card>)}
    </div>;
};