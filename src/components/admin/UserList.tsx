import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { MoreHorizontal, Mail, Edit, Trash, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { Table, type Column } from '../ui/Table';
import { TablePagination } from '../ui/TablePagination';
interface User {
  id: string;
  name: string;
  email: string;
  registeredDate: string;
  status: 'active' | 'pending' | 'blocked';
  referralCode?: string;
  interests?: string;
}
interface UserListProps {
  users: User[];
}
export const UserList = ({
  users
}: UserListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string>('registeredDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>('desc');
  const [expandedUser, setExpandedUser] = useState<string | null>(null);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const getStatusColor = (status: 'active' | 'pending' | 'blocked'): BadgeVariant => {
    switch (status) {
      case 'active':
        return 'success';
      case 'pending':
        return 'warning';
      case 'blocked':
        return 'danger';
      default:
        return 'primary';
    }
  };
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? null : 'asc');
      if (sortDirection === null) {
        setSortColumn(column);
      }
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  const toggleUserDetails = (userId: string) => {
    setExpandedUser(expandedUser === userId ? null : userId);
  };
  const columns: Column<User>[] = [{
    key: 'name',
    header: 'User',
    sortable: true,
    render: user => <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <span className="text-primary-700 dark:text-primary-400 font-medium text-sm">
                {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {user.name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </div>
          </div>
        </div>
  }, {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: user => <Badge variant={getStatusColor(user.status)} size="sm">
          {user.status}
        </Badge>
  }, {
    key: 'registeredDate',
    header: 'Registered',
    sortable: true,
    render: user => formatDate(user.registeredDate)
  }, {
    key: 'interests',
    header: 'Interests',
    render: user => <div className="max-w-xs truncate hidden md:block">
          {user.interests || '-'}
        </div>
  }, {
    key: 'actions',
    header: 'Actions',
    render: user => <div className="flex items-center justify-end gap-2">
          <button onClick={() => {
        window.location.href = `mailto:${user.email}`;
      }} className="p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" title="Send Email">
            <Mail className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" title="View Details" onClick={() => toggleUserDetails(user.id)}>
            {expandedUser === user.id ? <ChevronUp className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" title="Edit User">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" title="Delete User">
            <Trash className="w-4 h-4" />
          </button>
        </div>
  }];
  const paginatedUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <Table data={paginatedUsers} columns={columns} emptyMessage="No users found" sortColumn={sortColumn} sortDirection={sortDirection} onSort={handleSort} />
      </div>
      {paginatedUsers.map(user => expandedUser === user.id && <div key={`details-${user.id}`} className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-b border-gray-200 dark:border-gray-700 md:hidden">
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Interests:
                  </span>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {user.interests || '-'}
                  </p>
                </div>
                {user.referralCode && <div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Referral Code:
                    </span>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {user.referralCode}
                    </p>
                  </div>}
                <div className="pt-2 flex justify-end">
                  <button className="text-xs text-primary-600 dark:text-primary-400" onClick={() => setExpandedUser(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>)}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <TablePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>;
};