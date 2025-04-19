import React, { useState, Component } from 'react';
import { Search, Mail, ExternalLink, Trash, MessageSquare, User, Calendar, Filter, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Card } from '../ui/Card';
import { Table, Column } from '../ui/Table';
import { TablePagination } from '../ui/TablePagination';
import { Badge } from '../ui/Badge';
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'replied' | 'spam';
  priority: 'high' | 'medium' | 'low';
}
export const ContactSubmissionsPage = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([{
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    subject: 'Question about English Grammar Course',
    message: 'Hello, I have a question about the advanced grammar course. I was wondering if it covers subjunctive mood and conditional sentences in depth?',
    date: '2024-05-20T10:30:00',
    status: 'new',
    priority: 'medium'
  }, {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    subject: 'Technical Issue with Video Playback',
    message: "I'm experiencing issues with the video playback in lesson 3 of the Business English course. The video stops after about 2 minutes and won't continue.",
    date: '2024-05-19T15:45:00',
    status: 'replied',
    priority: 'high'
  }, {
    id: '3',
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    subject: 'New Course Proposal',
    message: "I've attached a proposal for a new course on English for Academic Purposes (EAP) that I believe would be a great addition to your platform.",
    date: '2024-05-18T14:20:00',
    status: 'new',
    priority: 'medium'
  }, {
    id: '4',
    name: 'Emma Rodriguez',
    email: 'emma.rodriguez@example.com',
    subject: 'Course Feedback',
    message: 'I wanted to provide some feedback on the Conversation Skills course. Overall, it was excellent, but I think it could benefit from more interactive exercises.',
    date: '2024-05-17T11:05:00',
    status: 'replied',
    priority: 'low'
  }, {
    id: '5',
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    subject: 'Subscription Inquiry',
    message: 'I would like to know more about your premium subscription options. Do you offer any discounts for students or educational institutions?',
    date: '2024-05-16T16:30:00',
    status: 'new',
    priority: 'medium'
  }, {
    id: '6',
    name: 'Spam Bot',
    email: 'marketing@spam.com',
    subject: 'Increase Your Website Traffic!',
    message: 'We offer the best SEO services to boost your website traffic and rankings! Limited time offer!',
    date: '2024-05-15T09:15:00',
    status: 'spam',
    priority: 'low'
  }]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>('desc');
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'replied' | 'spam'>('all');
  const [priorityFilter, setPriorityFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [replyText, setReplyText] = useState('');
  const itemsPerPage = 5;
  // Filter and sort submissions
  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = submission.name.toLowerCase().includes(searchQuery.toLowerCase()) || submission.email.toLowerCase().includes(searchQuery.toLowerCase()) || submission.subject.toLowerCase().includes(searchQuery.toLowerCase()) || submission.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || submission.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || submission.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  }).sort((a, b) => {
    if (sortColumn === 'date') {
      return sortDirection === 'asc' ? new Date(a.date).getTime() - new Date(b.date).getTime() : new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortColumn === 'name') {
      return sortDirection === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortColumn === 'priority') {
      const priorityValue = {
        high: 3,
        medium: 2,
        low: 1
      };
      return sortDirection === 'asc' ? priorityValue[a.priority] - priorityValue[b.priority] : priorityValue[b.priority] - priorityValue[a.priority];
    }
    return 0;
  });
  const paginatedSubmissions = filteredSubmissions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);
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
  const handleDeleteSubmission = (id: string) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      setSubmissions(submissions.filter(submission => submission.id !== id));
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission(null);
      }
    }
  };
  const handleMarkAsSpam = (id: string) => {
    setSubmissions(submissions.map(submission => submission.id === id ? {
      ...submission,
      status: 'spam'
    } : submission));
  };
  const handleSendReply = () => {
    if (!selectedSubmission || !replyText.trim()) return;
    setSubmissions(submissions.map(submission => submission.id === selectedSubmission.id ? {
      ...submission,
      status: 'replied'
    } : submission));
    setReplyText('');
    alert('Reply sent successfully!');
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
      case 'new':
        return 'warning';
      case 'replied':
        return 'success';
      case 'spam':
        return 'danger';
      default:
        return 'secondary';
    }
  };
  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'danger';
      case 'medium':
        return 'warning';
      case 'low':
        return 'secondary';
      default:
        return 'secondary';
    }
  };
  const columns: Column<ContactSubmission>[] = [{
    key: 'name',
    header: 'Sender',
    sortable: true,
    render: submission => <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <span className="text-primary-700 dark:text-primary-400 font-medium text-sm">
                {submission.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {submission.name}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {submission.email}
            </div>
          </div>
        </div>
  }, {
    key: 'subject',
    header: 'Subject',
    render: submission => <div className="max-w-xs truncate font-medium text-gray-900 dark:text-white">
          {submission.subject}
        </div>
  }, {
    key: 'date',
    header: 'Date',
    sortable: true,
    render: submission => <div className="text-sm text-gray-500 dark:text-gray-400">
          {formatDate(submission.date)}
        </div>
  }, {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: submission => <Badge variant={getStatusBadgeVariant(submission.status)} size="sm">
          {submission.status}
        </Badge>
  }, {
    key: 'priority',
    header: 'Priority',
    sortable: true,
    render: submission => <Badge variant={getPriorityBadgeVariant(submission.priority)} size="sm">
          {submission.priority}
        </Badge>
  }, {
    key: 'actions',
    header: 'Actions',
    render: submission => <div className="flex items-center gap-2">
          <button onClick={() => setSelectedSubmission(submission)} className="p-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" title="View">
            <MessageSquare className="w-4 h-4" />
          </button>
          <button onClick={() => {
        window.location.href = `mailto:${submission.email}?subject=Re: ${submission.subject}`;
      }} className="p-1 text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300" title="Reply via Email">
            <Mail className="w-4 h-4" />
          </button>
          <button onClick={() => handleMarkAsSpam(submission.id)} className="p-1 text-yellow-500 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300" title="Mark as Spam" disabled={submission.status === 'spam'}>
            <XCircle className="w-4 h-4" />
          </button>
          <button onClick={() => handleDeleteSubmission(submission.id)} className="p-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300" title="Delete">
            <Trash className="w-4 h-4" />
          </button>
        </div>
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Contact Form Submissions
        </h1>
        <div className="flex items-center gap-2">
          <Badge variant="success" size="sm" className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            <span>
              {submissions.filter(s => s.status === 'replied').length} Replied
            </span>
          </Badge>
          <Badge variant="warning" size="sm" className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>
              {submissions.filter(s => s.status === 'new').length} New
            </span>
          </Badge>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-auto md:flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input type="text" placeholder="Search submissions..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
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
              <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as 'all' | 'new' | 'replied' | 'spam')} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="replied">Replied</option>
                <option value="spam">Spam</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Priority
              </label>
              <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value as 'all' | 'high' | 'medium' | 'low')} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button onClick={() => {
          setStatusFilter('all');
          setPriorityFilter('all');
        }} className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Reset Filters
            </button>
          </div>
        </Card>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Submissions List */}
        <div className="md:col-span-2">
          <Card className="p-0 overflow-hidden">
            <div className="overflow-hidden">
              <div className="overflow-x-auto">
                <Table data={paginatedSubmissions} columns={columns} emptyMessage="No contact submissions found" sortColumn={sortColumn} sortDirection={sortDirection} onSort={handleSort} />
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <TablePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>
            </div>
          </Card>
        </div>
        {/* Message Details */}
        <div className="md:col-span-1">
          {selectedSubmission ? <Card className="p-5 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Message Details
                </h2>
                <Badge variant={getStatusBadgeVariant(selectedSubmission.status)} size="sm">
                  {selectedSubmission.status}
                </Badge>
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      From
                    </h3>
                  </div>
                  <p className="text-gray-900 dark:text-white">
                    {selectedSubmission.name}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {selectedSubmission.email}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Date
                    </h3>
                  </div>
                  <p className="text-gray-900 dark:text-white">
                    {formatDate(selectedSubmission.date)}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MessageSquare className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </h3>
                  </div>
                  <p className="text-gray-900 dark:text-white">
                    {selectedSubmission.subject}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </h3>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg min-h-[100px] text-gray-900 dark:text-white">
                    {selectedSubmission.message}
                  </div>
                </div>
                {selectedSubmission.status !== 'spam' && <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Reply
                      </h3>
                    </div>
                    <textarea value={replyText} onChange={e => setReplyText(e.target.value)} rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all mb-2" placeholder="Type your reply here..."></textarea>
                    <div className="flex justify-between">
                      <button onClick={() => {
                  window.location.href = `mailto:${selectedSubmission.email}?subject=Re: ${selectedSubmission.subject}&body=${encodeURIComponent(replyText)}`;
                }} className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Reply via Email
                      </button>
                      <button onClick={handleSendReply} disabled={!replyText.trim()} className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg ${replyText.trim() ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'} transition-colors`}>
                        <Mail className="w-4 h-4" />
                        Send Reply
                      </button>
                    </div>
                  </div>}
              </div>
            </Card> : <Card className="p-5 h-full flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No message selected
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Select a message from the list to view details
                </p>
              </div>
            </Card>}
        </div>
      </div>
    </div>;
};