import React, { useState } from 'react';
import { Search, Download, Trash, User, Mail, Calendar, Filter, Check, X, Code, BookOpen, ArrowUpDown, SendIcon, FileText, PieChart, MessageSquare, Eye, RefreshCw, CheckCircle, AlertCircle, Clock, UserCheck, Users, TabletSmartphone, Inbox } from 'lucide-react';
import { Card } from '../ui/Card';
import { Table, Column } from '../ui/Table';
import { TablePagination } from '../ui/TablePagination';
import { Badge } from '../ui/Badge';
interface WaitlistUser {
  id: string;
  name: string;
  email: string;
  registrationDate: string;
  status: 'pending' | 'approved' | 'rejected';
  sentStatus?: 'sent' | 'opened' | 'completed' | null;
  sentDate?: string;
  referralCode?: string;
  interests?: string;
  notes?: string;
  device?: string;
  source?: string;
}
export const WaitlistPage = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'sent'>('all');
  const [users, setUsers] = useState<WaitlistUser[]>([{
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    registrationDate: '2024-05-20T10:30:00',
    status: 'pending',
    sentStatus: null,
    referralCode: 'FRIEND50',
    interests: 'Business English, Conversation Practice',
    notes: 'Referred by existing user',
    device: 'Mobile',
    source: 'Website'
  }, {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    registrationDate: '2024-05-19T15:45:00',
    status: 'approved',
    sentStatus: 'sent',
    sentDate: '2024-05-20T09:15:00',
    interests: 'Grammar, Academic Writing',
    device: 'Desktop',
    source: 'Facebook Ad'
  }, {
    id: '3',
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    registrationDate: '2024-05-18T14:20:00',
    status: 'pending',
    sentStatus: null,
    referralCode: 'SOCIAL25',
    interests: 'Pronunciation, Speaking Skills',
    device: 'Mobile',
    source: 'Instagram'
  }, {
    id: '4',
    name: 'Emma Rodriguez',
    email: 'emma.rodriguez@example.com',
    registrationDate: '2024-05-17T11:05:00',
    status: 'approved',
    sentStatus: 'opened',
    sentDate: '2024-05-18T11:05:00',
    interests: 'TOEFL Preparation',
    notes: 'Priority access requested',
    device: 'Tablet',
    source: 'Direct'
  }, {
    id: '5',
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    registrationDate: '2024-05-16T16:30:00',
    status: 'rejected',
    sentStatus: null,
    interests: 'General English',
    notes: 'Suspicious activity',
    device: 'Desktop',
    source: 'Google'
  }, {
    id: '6',
    name: 'Lisa Taylor',
    email: 'lisa.taylor@example.com',
    registrationDate: '2024-05-15T09:15:00',
    status: 'approved',
    sentStatus: 'completed',
    sentDate: '2024-05-16T14:30:00',
    referralCode: 'PROMO10',
    interests: 'Business Communication, Interview Preparation',
    device: 'Mobile',
    source: 'Referral'
  }, {
    id: '7',
    name: 'Robert Garcia',
    email: 'robert.garcia@example.com',
    registrationDate: '2024-05-14T13:45:00',
    status: 'approved',
    sentStatus: 'sent',
    sentDate: '2024-05-15T10:20:00',
    interests: 'Vocabulary Building, Reading Comprehension',
    device: 'Desktop',
    source: 'Email Campaign'
  }, {
    id: '8',
    name: 'Jennifer Lee',
    email: 'jennifer.lee@example.com',
    registrationDate: '2024-05-13T11:30:00',
    status: 'approved',
    sentStatus: 'opened',
    sentDate: '2024-05-14T09:15:00',
    interests: 'Grammar, Listening Skills',
    device: 'Mobile',
    source: 'Website'
  }]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string>('registrationDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>('desc');
  const [selectedUser, setSelectedUser] = useState<WaitlistUser | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [sentStatusFilter, setSentStatusFilter] = useState<'all' | 'sent' | 'opened' | 'completed' | 'not-sent'>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<WaitlistUser | null>(null);
  const [message, setMessage] = useState('');
  const itemsPerPage = 5;
  const filteredUsers = users.filter(user => {
    if (activeTab === 'sent' && !user.sentStatus) {
      return false;
    }
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase()) || user.interests && user.interests.toLowerCase().includes(searchQuery.toLowerCase()) || user.referralCode && user.referralCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesSentStatus = sentStatusFilter === 'all' || sentStatusFilter === 'not-sent' && !user.sentStatus || user.sentStatus === sentStatusFilter;
    return matchesSearch && matchesStatus && matchesSentStatus;
  }).sort((a, b) => {
    if (sortColumn === 'registrationDate') {
      return sortDirection === 'asc' ? new Date(a.registrationDate).getTime() - new Date(b.registrationDate).getTime() : new Date(b.registrationDate).getTime() - new Date(a.registrationDate).getTime();
    } else if (sortColumn === 'sentDate' && a.sentDate && b.sentDate) {
      return sortDirection === 'asc' ? new Date(a.sentDate).getTime() - new Date(b.sentDate).getTime() : new Date(b.sentDate).getTime() - new Date(a.sentDate).getTime();
    } else if (sortColumn === 'name') {
      return sortDirection === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortColumn === 'status') {
      return sortDirection === 'asc' ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status);
    } else if (sortColumn === 'sentStatus') {
      const sentStatusA = a.sentStatus || '';
      const sentStatusB = b.sentStatus || '';
      return sortDirection === 'asc' ? sentStatusA.localeCompare(sentStatusB) : sentStatusB.localeCompare(sentStatusA);
    }
    return 0;
  });
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
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
  const handleDeleteUser = (id: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
      if (selectedUser && selectedUser.id === id) {
        setSelectedUser(null);
      }
    }
  };
  const handleUpdateStatus = (id: string, status: 'pending' | 'approved' | 'rejected') => {
    setUsers(users.map(user => user.id === id ? {
      ...user,
      status: status
    } : user));
    if (selectedUser && selectedUser.id === id) {
      setSelectedUser({
        ...selectedUser,
        status: status
      });
    }
  };
  const handleSendInvitation = (id: string) => {
    setUsers(users.map(user => user.id === id ? {
      ...user,
      sentStatus: 'sent',
      sentDate: new Date().toISOString()
    } : user));
    if (selectedUser && selectedUser.id === id) {
      setSelectedUser({
        ...selectedUser,
        sentStatus: 'sent',
        sentDate: new Date().toISOString()
      });
    }
    alert(`Invitation sent to ${users.find(u => u.id === id)?.email}`);
  };
  const handleResendInvitation = (id: string) => {
    setUsers(users.map(user => user.id === id ? {
      ...user,
      sentStatus: 'sent',
      sentDate: new Date().toISOString()
    } : user));
    if (selectedUser && selectedUser.id === id) {
      setSelectedUser({
        ...selectedUser,
        sentStatus: 'sent',
        sentDate: new Date().toISOString()
      });
    }
    alert(`Invitation resent to ${users.find(u => u.id === id)?.email}`);
  };
  const handleSaveUser = () => {
    if (!editedUser) return;
    setUsers(users.map(user => user.id === editedUser.id ? editedUser : user));
    setSelectedUser(editedUser);
    setEditedUser(null);
    setIsEditing(false);
  };
  const handleSendMessage = () => {
    if (!selectedUser || !message.trim()) return;
    alert(`Message sent to ${selectedUser.name} (${selectedUser.email}): ${message}`);
    setMessage('');
  };
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'pending':
        return 'warning';
      case 'approved':
        return 'success';
      case 'rejected':
        return 'danger';
      default:
        return 'secondary';
    }
  };
  const getSentStatusBadgeVariant = (status: string | null) => {
    switch (status) {
      case 'sent':
        return 'info';
      case 'opened':
        return 'warning';
      case 'completed':
        return 'success';
      default:
        return 'secondary';
    }
  };
  const getSentStatusIcon = (status: string | null) => {
    switch (status) {
      case 'sent':
        return <SendIcon className="w-4 h-4" />;
      case 'opened':
        return <Eye className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };
  const stats = [{
    label: 'Total Registrations',
    value: users.length,
    icon: <User className="w-5 h-5 text-primary-500 dark:text-primary-400" />
  }, {
    label: 'Pending Approval',
    value: users.filter(user => user.status === 'pending').length,
    icon: <Calendar className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
  }, {
    label: 'Approved',
    value: users.filter(user => user.status === 'approved').length,
    icon: <Check className="w-5 h-5 text-green-500 dark:text-green-400" />
  }, {
    label: 'Invitations Sent',
    value: users.filter(user => user.sentStatus).length,
    icon: <SendIcon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
  }];
  const sentStats = [{
    label: 'Total Sent',
    value: users.filter(user => user.sentStatus).length,
    icon: <SendIcon className="w-5 h-5 text-primary-500 dark:text-primary-400" />
  }, {
    label: 'Opened',
    value: users.filter(user => user.sentStatus === 'opened').length,
    icon: <Eye className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
  }, {
    label: 'Completed',
    value: users.filter(user => user.sentStatus === 'completed').length,
    icon: <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
  }, {
    label: 'Pending',
    value: users.filter(user => user.sentStatus === 'sent').length,
    icon: <Clock className="w-5 h-5 text-blue-500 dark:text-blue-400" />
  }];
  const columns: Column<WaitlistUser>[] = [{
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
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {user.email}
            </div>
          </div>
        </div>
  }, {
    key: 'registrationDate',
    header: 'Registered',
    sortable: true,
    render: user => <div className="text-sm text-gray-500 dark:text-gray-400">
          {formatDate(user.registrationDate)}
        </div>
  }, {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: user => <Badge variant={getStatusBadgeVariant(user.status)} size="sm">
          {user.status}
        </Badge>
  }, {
    key: 'sentStatus',
    header: 'Invitation',
    sortable: true,
    render: user => user.sentStatus ? <div className="flex flex-col gap-1">
            <Badge variant={getSentStatusBadgeVariant(user.sentStatus)} size="sm" className="flex items-center gap-1">
              {getSentStatusIcon(user.sentStatus)}
              <span>{user.sentStatus}</span>
            </Badge>
            {user.sentDate && <span className="text-xs text-gray-500 dark:text-gray-400">
                {formatDate(user.sentDate)}
              </span>}
          </div> : <span className="text-xs text-gray-500 dark:text-gray-400">
            Not sent
          </span>
  }, {
    key: 'actions',
    header: 'Actions',
    render: user => <div className="flex items-center gap-2">
          <button onClick={() => setSelectedUser(user)} className="p-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" title="View Details">
            <Eye className="w-4 h-4" />
          </button>
          {user.status === 'approved' && !user.sentStatus && <button onClick={() => handleSendInvitation(user.id)} className="p-1 text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300" title="Send Invitation">
              <SendIcon className="w-4 h-4" />
            </button>}
          {user.sentStatus && <button onClick={() => handleResendInvitation(user.id)} className="p-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" title="Resend Invitation">
              <RefreshCw className="w-4 h-4" />
            </button>}
          {user.status === 'pending' && <>
              <button onClick={() => handleUpdateStatus(user.id, 'approved')} className="p-1 text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300" title="Approve">
                <Check className="w-4 h-4" />
              </button>
              <button onClick={() => handleUpdateStatus(user.id, 'rejected')} className="p-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300" title="Reject">
                <X className="w-4 h-4" />
              </button>
            </>}
          <button onClick={() => handleDeleteUser(user.id)} className="p-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300" title="Delete">
            <Trash className="w-4 h-4" />
          </button>
        </div>
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Early Access Waitlist
        </h1>
        <button onClick={() => {
        alert('Downloading waitlist data as CSV...');
      }} className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button onClick={() => setActiveTab('all')} className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${activeTab === 'all' ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}>
          <Users className="w-4 h-4" />
          All Users
        </button>
        <button onClick={() => setActiveTab('sent')} className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${activeTab === 'sent' ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}>
          <SendIcon className="w-4 h-4" />
          Sent Users
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(activeTab === 'all' ? stats : sentStats).map((stat, index) => <Card key={index} className="p-5 flex items-center gap-4">
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
          <input type="text" placeholder="Search users..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
        </div>
        <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </button>
      </div>

      {showFilters && <Card className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status
              </label>
              <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as 'all' | 'pending' | 'approved' | 'rejected')} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Invitation Status
              </label>
              <select value={sentStatusFilter} onChange={e => setSentStatusFilter(e.target.value as 'all' | 'sent' | 'opened' | 'completed' | 'not-sent')} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option value="all">All Invitation Statuses</option>
                <option value="not-sent">Not Sent</option>
                <option value="sent">Sent</option>
                <option value="opened">Opened</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Sort By
              </label>
              <select value={sortColumn} onChange={e => {
            setSortColumn(e.target.value);
            setSortDirection('asc');
          }} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option value="registrationDate">Registration Date</option>
                <option value="sentDate">Sent Date</option>
                <option value="name">Name</option>
                <option value="status">Status</option>
                <option value="sentStatus">Invitation Status</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button onClick={() => {
          setStatusFilter('all');
          setSentStatusFilter('all');
          setSortColumn('registrationDate');
          setSortDirection('desc');
        }} className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Reset Filters
            </button>
          </div>
        </Card>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="p-0 overflow-hidden">
            <div className="overflow-hidden">
              <div className="overflow-x-auto responsive-table-container">
                <Table data={paginatedUsers} columns={columns} emptyMessage={`No ${activeTab === 'sent' ? 'sent ' : ''}waitlist users found`} sortColumn={sortColumn} sortDirection={sortDirection} onSort={handleSort} />
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <TablePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>
            </div>
          </Card>
        </div>
        <div className="md:col-span-1">
          {selectedUser ? <Card className="p-5 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  User Details
                </h2>
                <div className="flex gap-2">
                  {!isEditing ? <button onClick={() => {
                setIsEditing(true);
                setEditedUser(selectedUser);
              }} className="p-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" title="Edit">
                      <ArrowUpDown className="w-4 h-4" />
                    </button> : <button onClick={handleSaveUser} className="p-1 text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300" title="Save">
                      <Check className="w-4 h-4" />
                    </button>}
                  <Badge variant={getStatusBadgeVariant(selectedUser.status)} size="sm">
                    {selectedUser.status}
                  </Badge>
                </div>
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </h3>
                  </div>
                  {isEditing ? <input type="text" value={editedUser?.name || ''} onChange={e => setEditedUser({
                ...editedUser!,
                name: e.target.value
              })} className="w-full px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" /> : <p className="text-gray-900 dark:text-white">
                      {selectedUser.name}
                    </p>}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </h3>
                  </div>
                  {isEditing ? <input type="email" value={editedUser?.email || ''} onChange={e => setEditedUser({
                ...editedUser!,
                email: e.target.value
              })} className="w-full px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" /> : <p className="text-gray-900 dark:text-white">
                      {selectedUser.email}
                    </p>}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Registered Date
                    </h3>
                  </div>
                  <p className="text-gray-900 dark:text-white">
                    {formatDate(selectedUser.registrationDate)}
                  </p>
                </div>
                {selectedUser.sentStatus && <div>
                    <div className="flex items-center gap-2 mb-1">
                      <SendIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Invitation Status
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={getSentStatusBadgeVariant(selectedUser.sentStatus)} size="sm" className="flex items-center gap-1">
                        {getSentStatusIcon(selectedUser.sentStatus)}
                        <span>{selectedUser.sentStatus}</span>
                      </Badge>
                      {selectedUser.sentDate && <span className="text-sm text-gray-500 dark:text-gray-400">
                          {formatDate(selectedUser.sentDate)}
                        </span>}
                    </div>
                  </div>}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <TabletSmartphone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Device
                    </h3>
                  </div>
                  {isEditing ? <input type="text" value={editedUser?.device || ''} onChange={e => setEditedUser({
                ...editedUser!,
                device: e.target.value
              })} className="w-full px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" /> : <p className="text-gray-900 dark:text-white">
                      {selectedUser.device || 'Unknown'}
                    </p>}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Inbox className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Source
                    </h3>
                  </div>
                  {isEditing ? <input type="text" value={editedUser?.source || ''} onChange={e => setEditedUser({
                ...editedUser!,
                source: e.target.value
              })} className="w-full px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" /> : <p className="text-gray-900 dark:text-white">
                      {selectedUser.source || 'Unknown'}
                    </p>}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Code className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Referral Code
                    </h3>
                  </div>
                  {isEditing ? <input type="text" value={editedUser?.referralCode || ''} onChange={e => setEditedUser({
                ...editedUser!,
                referralCode: e.target.value
              })} className="w-full px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" /> : <p className="text-gray-900 dark:text-white">
                      {selectedUser.referralCode || 'None'}
                    </p>}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Learning Interests
                    </h3>
                  </div>
                  {isEditing ? <textarea value={editedUser?.interests || ''} onChange={e => setEditedUser({
                ...editedUser!,
                interests: e.target.value
              })} rows={2} className="w-full px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"></textarea> : <p className="text-gray-900 dark:text-white">
                      {selectedUser.interests || 'None specified'}
                    </p>}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Notes
                    </h3>
                  </div>
                  {isEditing ? <textarea value={editedUser?.notes || ''} onChange={e => setEditedUser({
                ...editedUser!,
                notes: e.target.value
              })} rows={3} className="w-full px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"></textarea> : <p className="text-gray-900 dark:text-white">
                      {selectedUser.notes || 'No notes'}
                    </p>}
                </div>
                {!isEditing && <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Send Message
                      </h3>
                    </div>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} rows={3} className="w-full px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all mb-2" placeholder="Type your message here..."></textarea>
                    <button onClick={handleSendMessage} disabled={!message.trim()} className={`w-full flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg ${message.trim() ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'} transition-colors`}>
                      <SendIcon className="w-4 h-4" />
                      Send Message
                    </button>
                  </div>}
                {!isEditing && selectedUser.status === 'approved' && !selectedUser.sentStatus && <div className="mt-4">
                      <button onClick={() => handleSendInvitation(selectedUser.id)} className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors">
                        <SendIcon className="w-4 h-4" />
                        Send Invitation
                      </button>
                    </div>}
                {!isEditing && selectedUser.sentStatus && <div className="mt-4">
                    <button onClick={() => handleResendInvitation(selectedUser.id)} className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                      <RefreshCw className="w-4 h-4" />
                      Resend Invitation
                    </button>
                  </div>}
              </div>
            </Card> : <Card className="p-5 h-full flex items-center justify-center">
              <div className="text-center">
                <UserCheck className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No user selected
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Select a user from the list to view details
                </p>
              </div>
            </Card>}
        </div>
      </div>
    </div>;
};