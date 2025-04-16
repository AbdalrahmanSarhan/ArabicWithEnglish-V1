import React from 'react';
import { Card } from '../ui/Card';
interface UserFiltersProps {
  sortBy: 'date' | 'name' | 'status';
  setSortBy: (sort: 'date' | 'name' | 'status') => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
  filterStatus: string;
  setFilterStatus: (status: string) => void;
}
export const UserFilters = ({
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  filterStatus,
  setFilterStatus
}: UserFiltersProps) => {
  const handleApplyFilters = () => {
    // Additional filter logic can be added here
  };
  return <Card className="p-4 animate-slideDown">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Sort By
          </label>
          <select value={sortBy} onChange={e => setSortBy(e.target.value as 'date' | 'name' | 'status')} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            <option value="date">Registration Date</option>
            <option value="name">Name</option>
            <option value="status">Status</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Order
          </label>
          <select value={sortOrder} onChange={e => setSortOrder(e.target.value as 'asc' | 'desc')} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Status
          </label>
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>
        <div className="flex items-end">
          <button onClick={handleApplyFilters} className="w-full px-3 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
            Apply Filters
          </button>
        </div>
      </div>
      {/* Active Filters Display */}
      <div className="flex flex-wrap gap-2 mt-4">
        {filterStatus !== 'all' && <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-md text-xs">
            Status: {filterStatus}
            <button className="ml-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onClick={() => setFilterStatus('all')}>
              ×
            </button>
          </div>}
        <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-md text-xs">
          Sort: {sortBy} ({sortOrder})
        </div>
      </div>
    </Card>;
};