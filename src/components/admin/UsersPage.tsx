import React, { useState } from 'react';
import { Search, UserPlus, Filter, Mail, User, Calendar, Edit, Trash, Check, X, Shield, Save, MessageSquare, SendIcon } from 'lucide-react';
import { Card } from '../ui/Card';
import { Table, Column } from '../ui/Table';
import { TablePagination } from '../ui/TablePagination';
import { Badge } from '../ui/Badge';
interface UserType {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher' | 'student';
  status: 'active' | 'inactive' | 'suspended';
  joinedDate: string;
  lastActive: string;
  interests?: string;
  notes?: string;
}
export const UsersPage = () => {
  // Sample user data
  const [users, setUsers] = useState<UserType[]>([{
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'student',
    status: 'active',
    joinedDate: '2024-01-15',
    lastActive: '2024-05-20T10:30:00',
    interests: 'Business English, TOEFL Preparation'
  }, {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'teacher',
    status: 'active',
    joinedDate: '2023-12-01',
    lastActive: '2024-05-20T09:15:00',
    notes: 'Expert in Business English'
  }, {
    id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    status: 'active',
    joinedDate: '2023-01-01',
    lastActive: '2024-05-20T11:00:00'
  }]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<UserType | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive' | 'suspended'>('all');
  const [roleFilter, setRoleFilter] = useState<'all' | 'admin' | 'teacher' | 'student'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string>('joinedDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>('desc');
  const [message, setMessage] = useState('');
  const itemsPerPage = 10;
  // Filter and sort users
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesStatus && matchesRole;
  }).sort((a, b) => {
    if (sortDirection === null) return 0;
    const direction = sortDirection === 'asc' ? 1 : -1;
    switch (sortColumn) {
      case 'name':
        return direction * a.name.localeCompare(b.name);
      case 'role':
        return direction * a.role.localeCompare(b.role);
      case 'status':
        return direction * a.status.localeCompare(b.status);
      default:
        return direction * (new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime());
    }
  });
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? null : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  const handleStatusChange = (userId: string, newStatus: UserType['status']) => {
    setUsers(prevUsers => prevUsers.map(user => user.id === userId ? {
      ...user,
      status: newStatus
    } : user));
    if (selectedUser?.id === userId) {
      setSelectedUser(prev => prev ? {
        ...prev,
        status: newStatus
      } : null);
    }
  };
  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      if (selectedUser?.id === userId) {
        setSelectedUser(null);
      }
    }
  };
  const handleSaveUser = () => {
    if (!editedUser) return;
    setUsers(prevUsers => prevUsers.map(user => user.id === editedUser.id ? editedUser : user));
    setSelectedUser(editedUser);
    setIsEditing(false);
  };
  const handleSendMessage = () => {
    if (!selectedUser || !message.trim()) return;
    // Here you would typically implement the message sending logic
    alert(`Message sent to ${selectedUser.name}: ${message}`);
    setMessage('');
  };
  const columns: Column<UserType>[] = [{
    key: 'name',
    header: 'User',
    sortable: true,
    render: user => <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <span className="text-primary-700 dark:text-primary-400 font-medium text-sm">
              {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </span>
          </div>
          <div>
            <div className="font-medium text-gray-900 dark:text-white">
              {user.name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </div>
          </div>
        </div>
  }, {
    key: 'role',
    header: 'Role',
    sortable: true,
    render: user => <Badge variant={user.role === 'admin' ? 'danger' : user.role === 'teacher' ? 'warning' : 'success'} size="sm">
          {user.role}
        </Badge>
  }, {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: user => <Badge variant={user.status === 'active' ? 'success' : user.status === 'inactive' ? 'warning' : 'danger'} size="sm">
          {user.status}
        </Badge>
  }, {
    key: 'lastActive',
    header: 'Last Active',
    sortable: true,
    render: user => <span className="text-sm text-gray-600 dark:text-gray-400">
          {new Date(user.lastActive).toLocaleDateString()}
        </span>
  }, {
    key: 'actions',
    header: 'Actions',
    render: user => <div className="flex items-center gap-2">
          <button onClick={() => setSelectedUser(user)} className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" title="View Details">
            <User className="w-4 h-4" />
          </button>
          <button onClick={() => {
        setIsEditing(true);
        setEditedUser(user);
        setSelectedUser(user);
      }} className="p-1.5 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" title="Edit">
            <Edit className="w-4 h-4" />
          </button>
          <button onClick={() => handleDeleteUser(user.id)} className="p-1.5 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300" title="Delete">
            <Trash className="w-4 h-4" />
          </button>
        </div>
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          User Management
        </h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
          <UserPlus className="w-4 h-4" />
          Add User
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-auto md:flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input type="text" placeholder="Search users..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
        </div>
        <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </button>
      </div>
      {showFilters && <Card className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status
              </label>
              <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as 'all' | 'active' | 'inactive' | 'suspended')} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Role
              </label>
              <select value={roleFilter} onChange={e => setRoleFilter(e.target.value as 'all' | 'admin' | 'teacher' | 'student')} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
            </div>
          </div>
        </Card>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <Table data={paginatedUsers} columns={columns} emptyMessage="No users found" sortColumn={sortColumn} sortDirection={sortDirection} onSort={handleSort} />
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <TablePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
          </Card>
        </div>
        <div>
          {selectedUser ? <Card className="p-5">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  User Details
                </h2>
                <div className="flex gap-2">
                  {!isEditing ? <button onClick={() => {
                setIsEditing(true);
                setEditedUser(selectedUser);
              }} className="p-1.5 text-gray-500 hover:text-gray-700">
                      <Edit className="w-4 h-4" />
                    </button> : <button onClick={handleSaveUser} className="p-1.5 text-green-500 hover:text-green-700">
                      <Save className="w-4 h-4" />
                    </button>}
                </div>
              </div>
              <div className="space-y-4">
                {/* User details form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    {isEditing ? <input type="text" value={editedUser?.name || ''} onChange={e => setEditedUser(editedUser ? {
                  ...editedUser,
                  name: e.target.value
                } : null)} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800" /> : <p className="text-gray-900 dark:text-white">
                        {selectedUser.name}
                      </p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    {isEditing ? <input type="email" value={editedUser?.email || ''} onChange={e => setEditedUser(editedUser ? {
                  ...editedUser,
                  email: e.target.value
                } : null)} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800" /> : <p className="text-gray-900 dark:text-white">
                        {selectedUser.email}
                      </p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Role
                    </label>
                    {isEditing ? <select value={editedUser?.role} onChange={e => setEditedUser(editedUser ? {
                  ...editedUser,
                  role: e.target.value as UserType['role']
                } : null)} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                        <option value="admin">Admin</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                      </select> : <Badge variant={selectedUser.role === 'admin' ? 'danger' : selectedUser.role === 'teacher' ? 'warning' : 'success'}>
                        {selectedUser.role}
                      </Badge>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Status
                    </label>
                    {isEditing ? <select value={editedUser?.status} onChange={e => setEditedUser(editedUser ? {
                  ...editedUser,
                  status: e.target.value as UserType['status']
                } : null)} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="suspended">Suspended</option>
                      </select> : <Badge variant={selectedUser.status === 'active' ? 'success' : selectedUser.status === 'inactive' ? 'warning' : 'danger'}>
                        {selectedUser.status}
                      </Badge>}
                  </div>
                  {/* Message section */}
                  {!isEditing && <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Send Message
                      </label>
                      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Type your message..." rows={3} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 mb-2" />
                      <button onClick={handleSendMessage} disabled={!message.trim()} className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg ${message.trim() ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed'}`}>
                        <SendIcon className="w-4 h-4" />
                        Send Message
                      </button>
                    </div>}
                </div>
              </div>
            </Card> : <Card className="p-5 h-full flex items-center justify-center">
              <div className="text-center">
                <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Select a user to view details
                </p>
              </div>
            </Card>}
        </div>
      </div>
    </div>;
};