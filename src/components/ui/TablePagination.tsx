import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
export const TablePagination = ({
  currentPage,
  totalPages,
  onPageChange
}: TablePaginationProps) => {
  const pages = Array.from({
    length: totalPages
  }, (_, i) => i + 1);
  return <div className="flex items-center justify-center gap-2 mt-4">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <ChevronLeft className="w-4 h-4" />
      </button>
      {pages.map(page => <button key={page} onClick={() => onPageChange(page)} className={`px-4 py-2 rounded-lg transition-colors ${currentPage === page ? 'bg-primary-500 text-white' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
          {page}
        </button>)}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>;
};