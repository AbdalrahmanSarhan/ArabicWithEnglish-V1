import React, { useState } from 'react';
import { Search, ChevronDown, Star, Clock, Filter, Trash, Archive, Mail, Edit, Send, Paperclip, Image, Smile, User, CheckCircle, AlertCircle, HelpCircle, PlusCircle, MoreVertical } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
type MessageType = 'inbox' | 'sent' | 'draft' | 'archived';
type MessagePriority = 'high' | 'medium' | 'low';
interface Message {
  id: string;
  subject: string;
  excerpt: string;
  sender: {
    name: string;
    email: string;
    avatar?: string;
  };
  recipient: {
    name: string;
    email: string;
    avatar?: string;
  };
  date: string;
  read: boolean;
  starred: boolean;
  type: MessageType;
  priority: MessagePriority;
  labels: string[];
  hasAttachments: boolean;
}
interface Conversation {
  id: string;
  messages: {
    id: string;
    sender: {
      name: string;
      email: string;
      avatar?: string;
    };
    content: string;
    date: string;
    attachments?: {
      name: string;
      size: string;
      type: string;
    }[];
  }[];
}
export const MessagesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<MessageType>('inbox');
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [replyText, setReplyText] = useState('');
  const messages: Message[] = [{
    id: '1',
    subject: 'Question about English Grammar Course',
    excerpt: 'Hello, I have a question about the advanced grammar course. I was wondering if it covers subjunctive mood and conditional sentences in depth?',
    sender: {
      name: 'John Smith',
      email: 'john.smith@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
    },
    recipient: {
      name: 'Admin User',
      email: 'admin@example.com'
    },
    date: '2024-01-20T10:30:00',
    read: false,
    starred: false,
    type: 'inbox',
    priority: 'medium',
    labels: ['support', 'course-inquiry'],
    hasAttachments: false
  }, {
    id: '2',
    subject: 'Technical Issue with Video Playback',
    excerpt: "I'm experiencing issues with the video playback in lesson 3 of the Business English course. The video stops after about 2 minutes and won't continue.",
    sender: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
    },
    recipient: {
      name: 'Admin User',
      email: 'admin@example.com'
    },
    date: '2024-01-19T15:45:00',
    read: true,
    starred: true,
    type: 'inbox',
    priority: 'high',
    labels: ['technical', 'urgent'],
    hasAttachments: true
  }, {
    id: '3',
    subject: 'Payment Confirmation',
    excerpt: 'Thank you for your payment. Your subscription to the Premium Plan has been successfully processed. Your subscription is valid until February 19, 2025.',
    sender: {
      name: 'Billing System',
      email: 'billing@arabicwithenglish.com'
    },
    recipient: {
      name: 'Admin User',
      email: 'admin@example.com'
    },
    date: '2024-01-19T09:15:00',
    read: true,
    starred: false,
    type: 'inbox',
    priority: 'low',
    labels: ['billing', 'system'],
    hasAttachments: false
  }, {
    id: '4',
    subject: 'New Course Proposal',
    excerpt: "I've attached a proposal for a new course on English for Academic Purposes (EAP) that I believe would be a great addition to our platform.",
    sender: {
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
    },
    recipient: {
      name: 'Admin User',
      email: 'admin@example.com'
    },
    date: '2024-01-18T14:20:00',
    read: false,
    starred: true,
    type: 'inbox',
    priority: 'medium',
    labels: ['proposal', 'course-development'],
    hasAttachments: true
  }, {
    id: '5',
    subject: 'Course Feedback Response',
    excerpt: 'Thank you for your detailed feedback on the Conversation Skills course. We appreciate your input and will consider your suggestions for future updates.',
    sender: {
      name: 'Admin User',
      email: 'admin@example.com'
    },
    recipient: {
      name: 'Emma Rodriguez',
      email: 'emma.rodriguez@example.com',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
    },
    date: '2024-01-17T11:05:00',
    read: true,
    starred: false,
    type: 'sent',
    priority: 'medium',
    labels: ['feedback', 'follow-up'],
    hasAttachments: false
  }, {
    id: '6',
    subject: 'Draft: Course Update Announcement',
    excerpt: 'We are excited to announce several updates to our English Grammar Fundamentals course. The updates include new video lessons, additional practice exercises...',
    sender: {
      name: 'Admin User',
      email: 'admin@example.com'
    },
    recipient: {
      name: 'All Users',
      email: 'users@arabicwithenglish.com'
    },
    date: '2024-01-16T16:30:00',
    read: true,
    starred: false,
    type: 'draft',
    priority: 'medium',
    labels: ['announcement', 'marketing'],
    hasAttachments: false
  }];
  const conversations: {
    [key: string]: Conversation;
  } = {
    '1': {
      id: '1',
      messages: [{
        id: '1-1',
        sender: {
          name: 'John Smith',
          email: 'john.smith@example.com',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
        },
        content: "Hello, I have a question about the advanced grammar course. I was wondering if it covers subjunctive mood and conditional sentences in depth? I'm particularly interested in understanding the differences between various conditional structures and their practical applications in both written and spoken English.",
        date: '2024-01-20T10:30:00'
      }]
    },
    '2': {
      id: '2',
      messages: [{
        id: '2-1',
        sender: {
          name: 'Sarah Johnson',
          email: 'sarah.johnson@example.com',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
        },
        content: "I'm experiencing issues with the video playback in lesson 3 of the Business English course. The video stops after about 2 minutes and won't continue. I've tried refreshing the page and using different browsers, but the problem persists.",
        date: '2024-01-19T15:45:00',
        attachments: [{
          name: 'error_screenshot.png',
          size: '1.2 MB',
          type: 'image/png'
        }]
      }, {
        id: '2-2',
        sender: {
          name: 'Admin User',
          email: 'admin@example.com'
        },
        content: "Thank you for reporting this issue, Sarah. I'm sorry you're experiencing problems with the video playback. We'll look into this right away. Could you please provide some additional information about your system? What browser and version are you using? Also, does this happen on all devices or just one specific device?",
        date: '2024-01-19T16:20:00'
      }, {
        id: '2-3',
        sender: {
          name: 'Sarah Johnson',
          email: 'sarah.johnson@example.com',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
        },
        content: "I'm using Chrome version 120.0.6099.130 on Windows 10. I've also tried on my iPad with Safari and have the same issue. My internet connection is stable with 100 Mbps download speed.",
        date: '2024-01-19T16:45:00'
      }]
    }
  };
  const filteredMessages = messages.filter(message => {
    const matchesTab = message.type === activeTab;
    const matchesSearch = message.subject.toLowerCase().includes(searchQuery.toLowerCase()) || message.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || message.sender.name.toLowerCase().includes(searchQuery.toLowerCase()) || message.sender.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });
  const getUnreadCount = (type: MessageType) => {
    return messages.filter(m => m.type === type && !m.read).length;
  };
  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    if (diffInDays === 0) {
      return new Date(dateString).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    } else if (diffInDays === 1) {
      return 'Yesterday';
    } else if (diffInDays < 7) {
      return date.toLocaleDateString([], {
        weekday: 'short'
      });
    } else {
      return date.toLocaleDateString([], {
        month: 'short',
        day: 'numeric'
      });
    }
  };
  const toggleStarred = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Toggled star for message ${id}`);
  };
  const handleMessageClick = (id: string) => {
    setSelectedMessage(id === selectedMessage ? null : id);
    console.log(`Marked message ${id} as read`);
  };
  const handleReply = () => {
    if (!replyText.trim() || !selectedMessage) return;
    console.log(`Replied to message ${selectedMessage}: ${replyText}`);
    setReplyText('');
  };
  return <div className="h-[calc(100vh-160px)] flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-full">
        <div className="md:col-span-1 flex flex-col h-full">
          <Card className="p-4 flex-1 flex flex-col overflow-hidden">
            <button className="w-full mb-4 py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
              <Edit className="w-4 h-4" />
              <span>Compose</span>
            </button>
            <div className="space-y-1 mb-4">
              <button onClick={() => setActiveTab('inbox')} className={`w-full flex items-center justify-between px-3 py-2 rounded-lg ${activeTab === 'inbox' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Inbox</span>
                </div>
                {getUnreadCount('inbox') > 0 && <Badge variant="primary" size="sm">
                    {getUnreadCount('inbox')}
                  </Badge>}
              </button>
              <button onClick={() => setActiveTab('sent')} className={`w-full flex items-center justify-between px-3 py-2 rounded-lg ${activeTab === 'sent' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Sent</span>
                </div>
              </button>
              <button onClick={() => setActiveTab('draft')} className={`w-full flex items-center justify-between px-3 py-2 rounded-lg ${activeTab === 'draft' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
                <div className="flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  <span>Drafts</span>
                </div>
                {getUnreadCount('draft') > 0 && <Badge variant="secondary" size="sm">
                    {getUnreadCount('draft')}
                  </Badge>}
              </button>
              <button onClick={() => setActiveTab('archived')} className={`w-full flex items-center justify-between px-3 py-2 rounded-lg ${activeTab === 'archived' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
                <div className="flex items-center gap-2">
                  <Archive className="w-4 h-4" />
                  <span>Archived</span>
                </div>
              </button>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Labels
                </h3>
                <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                  <PlusCircle className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-1">
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>Urgent</span>
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Support</span>
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span>Feedback</span>
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span>Billing</span>
                </button>
              </div>
            </div>
          </Card>
        </div>
        <div className="md:col-span-3 flex flex-col h-full">
          <Card className="p-0 flex-1 flex flex-col overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input type="text" placeholder="Search messages..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setShowFilters(!showFilters)} className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <Filter className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <Archive className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            </div>
            {showFilters && <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Priority
                    </label>
                    <select className="w-full px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                      <option value="all">All Priorities</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Status
                    </label>
                    <select className="w-full px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                      <option value="all">All Status</option>
                      <option value="read">Read</option>
                      <option value="unread">Unread</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Has Attachments
                    </label>
                    <select className="w-full px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                      <option value="all">All Messages</option>
                      <option value="yes">With Attachments</option>
                      <option value="no">Without Attachments</option>
                    </select>
                  </div>
                </div>
              </div>}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              <div className={`border-r border-gray-200 dark:border-gray-700 overflow-y-auto ${selectedMessage ? 'hidden md:block md:w-1/3' : 'w-full'}`}>
                {filteredMessages.length === 0 ? <div className="flex flex-col items-center justify-center h-full p-8">
                    <Mail className="w-12 h-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      No messages found
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      {activeTab === 'inbox' ? 'Your inbox is empty or no messages match your search criteria.' : `No ${activeTab} messages found.`}
                    </p>
                  </div> : filteredMessages.map(message => <div key={message.id} onClick={() => handleMessageClick(message.id)} className={`p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors ${!message.read ? 'bg-primary-50/50 dark:bg-primary-900/10' : ''} ${selectedMessage === message.id ? 'bg-primary-50 dark:bg-primary-900/20' : ''}`}>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          {message.sender.avatar ? <img src={message.sender.avatar} alt={message.sender.name} className="w-10 h-10 rounded-full object-cover" /> : <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                              <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                            </div>}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className={`text-sm font-medium truncate ${!message.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                              {activeTab === 'sent' || activeTab === 'draft' ? message.recipient.name : message.sender.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              {message.hasAttachments && <Paperclip className="w-3.5 h-3.5 text-gray-400" />}
                              <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                {formatRelativeTime(message.date)}
                              </span>
                            </div>
                          </div>
                          <h4 className={`text-sm mb-1 truncate ${!message.read ? 'font-medium text-gray-800 dark:text-gray-200' : 'text-gray-700 dark:text-gray-300'}`}>
                            {message.subject}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                            {message.excerpt}
                          </p>
                          <div className="flex items-center mt-2">
                            <button onClick={e => toggleStarred(message.id, e)} className="text-gray-400 hover:text-yellow-400 dark:hover:text-yellow-300">
                              <Star className={`w-4 h-4 ${message.starred ? 'text-yellow-400 fill-yellow-400 dark:text-yellow-300 dark:fill-yellow-300' : ''}`} />
                            </button>
                            {message.priority === 'high' && <Badge variant="danger" size="sm" className="ml-2">
                                High
                              </Badge>}
                            {message.labels.length > 0 && <div className="ml-2 flex gap-1">
                                {message.labels.slice(0, 2).map((label, index) => <span key={index} className="inline-block w-2 h-2 rounded-full" style={{
                          backgroundColor: label.includes('urgent') ? '#ef4444' : label.includes('support') ? '#3b82f6' : label.includes('feedback') ? '#10b981' : label.includes('billing') ? '#f59e0b' : '#6b7280'
                        }}></span>)}
                                {message.labels.length > 2 && <span className="text-xs text-gray-500 dark:text-gray-400">
                                    +{message.labels.length - 2}
                                  </span>}
                              </div>}
                          </div>
                        </div>
                      </div>
                    </div>)}
              </div>
              <div className={`flex-1 flex flex-col overflow-hidden ${selectedMessage ? 'block' : 'hidden md:block'}`}>
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={() => setSelectedMessage(null)} className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white truncate">
                      {filteredMessages.find(m => m.id === selectedMessage)?.subject}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <Archive className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <Trash className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  {conversations[selectedMessage]?.messages.map((message, index) => <div key={message.id} className="mb-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            {message.sender.avatar ? <img src={message.sender.avatar} alt={message.sender.name} className="w-10 h-10 rounded-full object-cover" /> : <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                              </div>}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                                  {message.sender.name}
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {message.sender.email}
                                </p>
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {new Date(message.date).toLocaleString([], {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                              </p>
                            </div>
                            <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              {message.content}
                            </div>
                            {message.attachments && message.attachments.length > 0 && <div className="mt-4 space-y-2">
                                  <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                    Attachments ({message.attachments.length})
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {message.attachments.map((attachment, i) => <div key={i} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                          {attachment.type.includes('image') ? <Image className="w-4 h-4 text-gray-500 dark:text-gray-400" /> : <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
                                          <div>
                                            <p className="text-xs font-medium text-gray-800 dark:text-gray-200">
                                              {attachment.name}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                              {attachment.size}
                                            </p>
                                          </div>
                                        </div>)}
                                  </div>
                                </div>}
                          </div>
                        </div>
                      </div>)}
                </div>
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="mb-2">
                    <label className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Reply
                    </label>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <textarea value={replyText} onChange={e => setReplyText(e.target.value)} placeholder="Type your reply here..." className="w-full p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm min-h-[100px] resize-none focus:outline-none"></textarea>
                    <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                          <Paperclip className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                          <Image className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                          <Smile className="w-4 h-4" />
                        </button>
                      </div>
                      <button onClick={handleReply} disabled={!replyText.trim()} className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 ${replyText.trim() ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'}`}>
                        <Send className="w-3.5 h-3.5" />
                        <span className="text-sm font-medium">Send</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>;
};