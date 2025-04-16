import React, { useState, Component } from 'react';
import { Card } from '../ui/Card';
import { User, Mail, Lock, Bell, Layout, Globe, Shield, HelpCircle, CreditCard, Users, Edit, Save, X, Eye, EyeOff, Check, AlertTriangle, RefreshCw, Trash } from 'lucide-react';
export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    phone: '+1 (555) 123-4567',
    role: 'Administrator',
    bio: 'Platform administrator responsible for managing users, courses, and system settings.',
    password: '••••••••••••',
    newPassword: '',
    confirmPassword: '',
    notifications: {
      email: true,
      browser: true,
      mobile: false,
      userRegistration: true,
      courseEnrollment: true,
      messageReceived: true,
      systemUpdates: true
    },
    appearance: {
      theme: 'system',
      compactMode: false,
      animationsEnabled: true
    },
    language: 'en',
    timezone: 'America/New_York'
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleCheckboxChange = (category: string, setting: string) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: !(prev[category as keyof typeof prev] as any)[setting]
      }
    }));
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        [name]: value
      }
    }));
  };
  const handleSave = () => {
    // In a real app, you would save the data to the backend
    console.log('Saving data:', formData);
    setIsEditing(false);
  };
  const handleCancel = () => {
    // Reset form data to original values
    setFormData({
      name: 'Admin User',
      email: 'admin@example.com',
      phone: '+1 (555) 123-4567',
      role: 'Administrator',
      bio: 'Platform administrator responsible for managing users, courses, and system settings.',
      password: '••••••••••••',
      newPassword: '',
      confirmPassword: '',
      notifications: {
        email: true,
        browser: true,
        mobile: false,
        userRegistration: true,
        courseEnrollment: true,
        messageReceived: true,
        systemUpdates: true
      },
      appearance: {
        theme: 'system',
        compactMode: false,
        animationsEnabled: true
      },
      language: 'en',
      timezone: 'America/New_York'
    });
    setIsEditing(false);
  };
  const tabs = [{
    id: 'profile',
    label: 'Profile',
    icon: <User className="w-5 h-5" />
  }, {
    id: 'security',
    label: 'Security',
    icon: <Lock className="w-5 h-5" />
  }, {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell className="w-5 h-5" />
  }, {
    id: 'appearance',
    label: 'Appearance',
    icon: <Layout className="w-5 h-5" />
  }, {
    id: 'language',
    label: 'Language & Region',
    icon: <Globe className="w-5 h-5" />
  }, {
    id: 'privacy',
    label: 'Privacy',
    icon: <Shield className="w-5 h-5" />
  }, {
    id: 'billing',
    label: 'Billing',
    icon: <CreditCard className="w-5 h-5" />
  }, {
    id: 'team',
    label: 'Team Members',
    icon: <Users className="w-5 h-5" />
  }, {
    id: 'help',
    label: 'Help & Support',
    icon: <HelpCircle className="w-5 h-5" />
  }];
  return <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar */}
      <div className="md:col-span-1">
        <Card className="p-0 overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Settings
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Manage your account settings
            </p>
          </div>
          <nav className="p-2">
            {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === tab.id ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                {tab.icon}
                <span>{tab.label}</span>
              </button>)}
          </nav>
        </Card>
      </div>
      {/* Main Content */}
      <div className="md:col-span-3">
        <Card>
          {/* Profile Settings */}
          {activeTab === 'profile' && <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Profile Information
                </h2>
                {!isEditing ? <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Edit className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button> : <div className="flex items-center gap-2">
                    <button onClick={handleCancel} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <X className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                    <button onClick={handleSave} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                  </div>}
              </div>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-24 h-24 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-700 dark:text-primary-400 text-2xl font-semibold">
                    {formData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Full Name
                        </label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} disabled={!isEditing} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address
                        </label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} disabled={!isEditing} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Phone Number
                        </label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} disabled={!isEditing} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Role
                        </label>
                        <input type="text" name="role" value={formData.role} onChange={handleInputChange} disabled={true} // Role is always disabled
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Bio
                      </label>
                      <textarea name="bio" value={formData.bio} onChange={handleInputChange} disabled={!isEditing} rows={4} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400 resize-none"></textarea>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Account Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Account Created:</span>{' '}
                        January 15, 2024
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Last Login:</span> Today
                        at 9:42 AM
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Account Status:</span>{' '}
                        <span className="text-green-600 dark:text-green-400">
                          Active
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">
                          Two-Factor Authentication:
                        </span>{' '}
                        <span className="text-red-600 dark:text-red-400">
                          Disabled
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {/* Security Settings */}
          {activeTab === 'security' && <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Security Settings
                </h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Change Password
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Current Password
                      </label>
                      <div className="relative">
                        <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white pr-10" />
                        <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        New Password
                      </label>
                      <input type="password" name="newPassword" value={formData.newPassword} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Confirm New Password
                      </label>
                      <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Password must be at least 8 characters long and include
                      uppercase, lowercase, number, and special character.
                    </p>
                  </div>
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                      Update Password
                    </button>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Two-Factor Authentication
                  </h3>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/30 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                          Two-factor authentication is not enabled
                        </h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-400 mt-1">
                          Add an extra layer of security to your account by
                          enabling two-factor authentication.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                    Enable Two-Factor Authentication
                  </button>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Active Sessions
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Current Session
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Chrome on Windows • IP: 192.168.1.1 • Active now
                          </p>
                        </div>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded-full">
                          Current
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Safari on MacOS
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            IP: 192.168.1.2 • Last active: 2 days ago
                          </p>
                        </div>
                        <button className="text-red-600 dark:text-red-400 text-sm hover:underline">
                          Revoke
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <RefreshCw className="w-4 h-4" />
                    <span>Refresh Sessions</span>
                  </button>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Danger Zone
                  </h3>
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-lg">
                    <h4 className="text-sm font-medium text-red-800 dark:text-red-300 mb-2">
                      Delete Account
                    </h4>
                    <p className="text-sm text-red-700 dark:text-red-400 mb-4">
                      Once you delete your account, there is no going back.
                      Please be certain.
                    </p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                      <Trash className="w-4 h-4" />
                      <span>Delete Account</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>}
          {/* Notifications Settings */}
          {activeTab === 'notifications' && <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Notification Preferences
                </h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Notification Channels
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Email Notifications
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Receive email notifications about important updates
                          </p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={formData.notifications.email} onChange={() => handleCheckboxChange('notifications', 'email')} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Browser Notifications
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Show desktop notifications in your browser
                          </p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={formData.notifications.browser} onChange={() => handleCheckboxChange('notifications', 'browser')} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Mobile Push Notifications
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Receive push notifications on your mobile device
                          </p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={formData.notifications.mobile} onChange={() => handleCheckboxChange('notifications', 'mobile')} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Notification Types
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          New User Registrations
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Notify when a new user registers on the platform
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={formData.notifications.userRegistration} onChange={() => handleCheckboxChange('notifications', 'userRegistration')} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Course Enrollments
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Notify when a user enrolls in a course
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={formData.notifications.courseEnrollment} onChange={() => handleCheckboxChange('notifications', 'courseEnrollment')} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          New Messages
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Notify when you receive a new message
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={formData.notifications.messageReceived} onChange={() => handleCheckboxChange('notifications', 'messageReceived')} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          System Updates
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Notify about system updates and maintenance
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={formData.notifications.systemUpdates} onChange={() => handleCheckboxChange('notifications', 'systemUpdates')} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                      Save Notification Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>}
          {/* Appearance Settings */}
          {activeTab === 'appearance' && <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Appearance Settings
                </h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Theme
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.appearance.theme === 'light' ? 'border-primary-500 ring-2 ring-primary-500/30' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}`}>
                      <div className="bg-white border border-gray-200 rounded-md h-24 mb-3 flex items-center justify-center">
                        <Sun className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          Light
                        </span>
                        {formData.appearance.theme === 'light' && <Check className="w-5 h-5 text-primary-600 dark:text-primary-400" />}
                      </div>
                    </div>
                    <div className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.appearance.theme === 'dark' ? 'border-primary-500 ring-2 ring-primary-500/30' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}`}>
                      <div className="bg-gray-900 border border-gray-700 rounded-md h-24 mb-3 flex items-center justify-center">
                        <Moon className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          Dark
                        </span>
                        {formData.appearance.theme === 'dark' && <Check className="w-5 h-5 text-primary-600 dark:text-primary-400" />}
                      </div>
                    </div>
                    <div className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.appearance.theme === 'system' ? 'border-primary-500 ring-2 ring-primary-500/30' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}`}>
                      <div className="bg-gradient-to-r from-white to-gray-900 border border-gray-200 rounded-md h-24 mb-3 flex items-center justify-center">
                        <Computer className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          System
                        </span>
                        {formData.appearance.theme === 'system' && <Check className="w-5 h-5 text-primary-600 dark:text-primary-400" />}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Display Options
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Compact Mode
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Reduce spacing and padding throughout the interface
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={formData.appearance.compactMode} onChange={() => handleCheckboxChange('appearance', 'compactMode')} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Enable Animations
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Show animations and transitions throughout the
                          interface
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={formData.appearance.animationsEnabled} onChange={() => handleCheckboxChange('appearance', 'animationsEnabled')} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                      Save Appearance Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>}
          {/* Show placeholders for other tabs */}
          {(activeTab === 'language' || activeTab === 'privacy' || activeTab === 'billing' || activeTab === 'team' || activeTab === 'help') && <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                {activeTab === 'language' && <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400" />}
                {activeTab === 'privacy' && <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400" />}
                {activeTab === 'billing' && <CreditCard className="w-8 h-8 text-primary-600 dark:text-primary-400" />}
                {activeTab === 'team' && <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />}
                {activeTab === 'help' && <HelpCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />}
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                {activeTab === 'language' && 'Language & Region Settings'}
                {activeTab === 'privacy' && 'Privacy Settings'}
                {activeTab === 'billing' && 'Billing Information'}
                {activeTab === 'team' && 'Team Management'}
                {activeTab === 'help' && 'Help & Support'}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mb-6">
                This section is currently under development. Check back soon for
                updates.
              </p>
              <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                Coming Soon
              </button>
            </div>}
        </Card>
      </div>
    </div>;
};
// Missing Component for Settings Page
const Moon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>;
const Sun = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>;
const Computer = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>;