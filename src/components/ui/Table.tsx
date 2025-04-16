import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
}
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  emptyMessage?: string;
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc' | null;
  onSort?: (column: string) => void;
}
export const Table = <T extends {},>({
  data,
  columns,
  emptyMessage = 'No data available',
  sortColumn,
  sortDirection,
  onSort
}: TableProps<T>) => {
  const handleSort = (column: Column<T>) => {
    if (column.sortable && onSort) {
      onSort(column.key);
    }
  };
  const getSortIcon = (column: Column<T>) => {
    if (!column.sortable) return null;
    if (sortColumn !== column.key) return null;
    return sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : sortDirection === 'desc' ? <ChevronDown className="w-4 h-4" /> : null;
  };
  return <table className="w-full">
      <thead>
        <tr className="bg-gray-50 dark:bg-gray-800/50">
          {columns.map(column => <th key={column.key} className={`px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider ${column.sortable ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700/50' : ''}`} onClick={() => handleSort(column)}>
              <div className="flex items-center gap-1">
                {column.header}
                {getSortIcon(column)}
              </div>
            </th>)}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
        {data.length === 0 ? <tr>
            <td colSpan={columns.length} className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
              {emptyMessage}
            </td>
          </tr> : data.map((item, index) => <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              {columns.map(column => <td key={column.key} className="px-4 py-3 whitespace-nowrap">
                  {column.render ? column.render(item) : (item as any)[column.key]}
                </td>)}
            </tr>)}
      </tbody>
    </table>;
};