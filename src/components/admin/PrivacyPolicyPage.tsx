import React, { useState } from 'react';
import { Plus, Search, Edit, Trash, Save, X, Eye, ArrowUp, ArrowDown } from 'lucide-react';
import { Card } from '../ui/Card';
import { Table, Column } from '../ui/Table';
import { TablePagination } from '../ui/TablePagination';
import { Badge } from '../ui/Badge';
interface PrivacyPolicySection {
  id: string;
  title: string;
  content: string;
  order: number;
  lastUpdated: string;
  status: 'published' | 'draft';
}
export const PrivacyPolicyPage = () => {
  const [sections, setSections] = useState<PrivacyPolicySection[]>([{
    id: '1',
    title: 'Information Collection',
    content: 'We collect personal information that you voluntarily provide to us when registering on our website, including your name, email address, and learning preferences.',
    order: 1,
    lastUpdated: '2024-05-15',
    status: 'published'
  }, {
    id: '2',
    title: 'Data Protection',
    content: 'We use advanced encryption technologies to protect your personal information and follow industry best practices for security.',
    order: 2,
    lastUpdated: '2024-05-15',
    status: 'published'
  }, {
    id: '3',
    title: 'Information Usage',
    content: 'We use your information to improve your learning experience and customize content according to your needs.',
    order: 3,
    lastUpdated: '2024-05-15',
    status: 'published'
  }, {
    id: '4',
    title: 'Your Rights',
    content: 'You have the right to access, correct, and delete your personal data at any time.',
    order: 4,
    lastUpdated: '2024-05-15',
    status: 'published'
  }, {
    id: '5',
    title: 'Cookies Policy',
    content: 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.',
    order: 5,
    lastUpdated: '2024-05-10',
    status: 'draft'
  }]);
  const [editingSection, setEditingSection] = useState<PrivacyPolicySection | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newSection, setNewSection] = useState<Omit<PrivacyPolicySection, 'id'>>({
    title: '',
    content: '',
    order: sections.length + 1,
    lastUpdated: new Date().toISOString().split('T')[0],
    status: 'draft'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string>('order');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>('asc');
  const itemsPerPage = 5;
  // Filter and sort sections
  const filteredSections = sections.filter(section => section.title.toLowerCase().includes(searchQuery.toLowerCase()) || section.content.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => {
    if (sortColumn === 'order') {
      return sortDirection === 'asc' ? a.order - b.order : b.order - a.order;
    } else if (sortColumn === 'title') {
      return sortDirection === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    } else if (sortColumn === 'lastUpdated') {
      return sortDirection === 'asc' ? new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime() : new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
    }
    return 0;
  });
  const paginatedSections = filteredSections.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredSections.length / itemsPerPage);
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
  const handleAddSection = () => {
    if (newSection.title.trim() === '' || newSection.content.trim() === '') {
      return;
    }
    const newId = (Math.max(...sections.map(s => parseInt(s.id))) + 1).toString();
    setSections([...sections, {
      id: newId,
      ...newSection
    }]);
    setNewSection({
      title: '',
      content: '',
      order: sections.length + 2,
      lastUpdated: new Date().toISOString().split('T')[0],
      status: 'draft'
    });
    setIsAddingNew(false);
  };
  const handleUpdateSection = () => {
    if (!editingSection) return;
    setSections(sections.map(section => section.id === editingSection.id ? {
      ...editingSection,
      lastUpdated: new Date().toISOString().split('T')[0]
    } : section));
    setEditingSection(null);
  };
  const handleDeleteSection = (id: string) => {
    if (window.confirm('Are you sure you want to delete this section?')) {
      setSections(sections.filter(section => section.id !== id));
    }
  };
  const handleMoveUp = (id: string) => {
    const sectionIndex = sections.findIndex(s => s.id === id);
    if (sectionIndex <= 0) return;
    const updatedSections = [...sections];
    const currentOrder = updatedSections[sectionIndex].order;
    const prevOrder = updatedSections[sectionIndex - 1].order;
    updatedSections[sectionIndex].order = prevOrder;
    updatedSections[sectionIndex - 1].order = currentOrder;
    setSections(updatedSections);
  };
  const handleMoveDown = (id: string) => {
    const sectionIndex = sections.findIndex(s => s.id === id);
    if (sectionIndex >= sections.length - 1) return;
    const updatedSections = [...sections];
    const currentOrder = updatedSections[sectionIndex].order;
    const nextOrder = updatedSections[sectionIndex + 1].order;
    updatedSections[sectionIndex].order = nextOrder;
    updatedSections[sectionIndex + 1].order = currentOrder;
    setSections(updatedSections);
  };
  const columns: Column<PrivacyPolicySection>[] = [{
    key: 'order',
    header: '#',
    sortable: true,
    render: section => section.order
  }, {
    key: 'title',
    header: 'Title',
    sortable: true,
    render: section => <div className="font-medium text-gray-900 dark:text-white">
          {section.title}
        </div>
  }, {
    key: 'content',
    header: 'Content',
    render: section => <div className="max-w-md truncate text-gray-600 dark:text-gray-400">
          {section.content}
        </div>
  }, {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: section => <Badge variant={section.status === 'published' ? 'success' : 'secondary'} size="sm">
          {section.status}
        </Badge>
  }, {
    key: 'lastUpdated',
    header: 'Last Updated',
    sortable: true,
    render: section => new Date(section.lastUpdated).toLocaleDateString()
  }, {
    key: 'actions',
    header: 'Actions',
    render: section => <div className="flex items-center gap-2">
          <button onClick={() => handleMoveUp(section.id)} className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" title="Move Up" disabled={section.order === 1}>
            <ArrowUp className="w-4 h-4" />
          </button>
          <button onClick={() => handleMoveDown(section.id)} className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" title="Move Down" disabled={section.order === sections.length}>
            <ArrowDown className="w-4 h-4" />
          </button>
          <button onClick={() => setEditingSection(section)} className="p-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" title="Edit">
            <Edit className="w-4 h-4" />
          </button>
          <button onClick={() => handleDeleteSection(section.id)} className="p-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300" title="Delete">
            <Trash className="w-4 h-4" />
          </button>
        </div>
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Privacy Policy Management
        </h1>
        <button onClick={() => setIsAddingNew(true)} className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          Add Section
        </button>
      </div>
      <Card className="p-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Privacy Policy Sections
          </h2>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input type="text" placeholder="Search sections..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <Table data={paginatedSections} columns={columns} emptyMessage="No privacy policy sections found" sortColumn={sortColumn} sortDirection={sortDirection} onSort={handleSort} />
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <TablePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </div>
      </Card>
      {/* Add New Section Form */}
      {isAddingNew && <Card className="p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add New Section
            </h2>
            <button onClick={() => setIsAddingNew(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Title
              </label>
              <input type="text" value={newSection.title} onChange={e => setNewSection({
            ...newSection,
            title: e.target.value
          })} className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Enter section title" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Content
              </label>
              <textarea value={newSection.content} onChange={e => setNewSection({
            ...newSection,
            content: e.target.value
          })} rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Enter section content"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Order
              </label>
              <input type="number" value={newSection.order} onChange={e => setNewSection({
            ...newSection,
            order: parseInt(e.target.value) || 0
          })} className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status
              </label>
              <select value={newSection.status} onChange={e => setNewSection({
            ...newSection,
            status: e.target.value as 'published' | 'draft'
          })} className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setIsAddingNew(false)} className="px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Cancel
              </button>
              <button onClick={handleAddSection} className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Section
              </button>
            </div>
          </div>
        </Card>}
      {/* Edit Section Form */}
      {editingSection && <Card className="p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Edit Section
            </h2>
            <button onClick={() => setEditingSection(null)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Title
              </label>
              <input type="text" value={editingSection.title} onChange={e => setEditingSection({
            ...editingSection,
            title: e.target.value
          })} className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Content
              </label>
              <textarea value={editingSection.content} onChange={e => setEditingSection({
            ...editingSection,
            content: e.target.value
          })} rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Order
              </label>
              <input type="number" value={editingSection.order} onChange={e => setEditingSection({
            ...editingSection,
            order: parseInt(e.target.value) || 0
          })} className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status
              </label>
              <select value={editingSection.status} onChange={e => setEditingSection({
            ...editingSection,
            status: e.target.value as 'published' | 'draft'
          })} className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setEditingSection(null)} className="px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Cancel
              </button>
              <button onClick={handleUpdateSection} className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors flex items-center gap-2">
                <Save className="w-4 h-4" />
                Update Section
              </button>
            </div>
          </div>
        </Card>}
      {/* Preview Card */}
      <Card className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Preview
          </h2>
          <Badge variant="secondary" size="sm">
            Last Updated: {new Date().toLocaleDateString()}
          </Badge>
        </div>
        <div className="space-y-6">
          {sections.filter(section => section.status === 'published').sort((a, b) => a.order - b.order).map(section => <div key={section.id} className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {section.content}
                </p>
              </div>)}
        </div>
      </Card>
    </div>;
};