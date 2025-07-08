import React, { useState, Component } from 'react';
import { Card } from '../ui/Card';
import { User, Mail, Lock, Bell, Layout, Globe, Shield, HelpCircle, CreditCard, Users, Edit, Save, X, Eye, EyeOff, Check, AlertTriangle, RefreshCw, Trash, CreditCard as CreditCardIcon, Calendar, Download, FileText, Building, UserPlus, Briefcase, Phone, MessageSquare, Video, BookOpen, ExternalLink, Clock, DollarSign, BarChart, Filter, Search, Plus, UserCheck, Key, LogOut, Settings, Languages } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
export const SettingsPage = () => {
  const {
    language,
    toggleLanguage
  } = useLanguage();
  const isRTL = language === 'ar';
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
    language: language,
    timezone: 'America/New_York',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12',
    firstDayOfWeek: 'sunday',
    numberFormat: 'en-US',
    privacy: {
      profileVisibility: 'public',
      showOnlineStatus: true,
      allowMessages: 'all',
      shareActivity: true,
      dataUsage: true
    },
    payment: {
      defaultMethod: 'card',
      currency: 'USD',
      autoRenew: true
    },
    teamRole: 'owner'
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
  const handlePrivacyChange = (setting: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [setting]: value
      }
    }));
  };
  const handlePaymentChange = (setting: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      payment: {
        ...prev.payment,
        [setting]: value
      }
    }));
  };
  const handleSave = () => {
    // In a real app, you would save the data to the backend
    console.log('Saving data:', formData);
    // If language was changed, apply it
    if (formData.language !== language) {
      toggleLanguage();
    }
    setIsEditing(false);
  };
  const handleCancel = () => {
    // Reset form data to original values
    setFormData({
      ...formData,
      language: language // Ensure language matches the current UI language
    });
    setIsEditing(false);
  };
  const tabs = [{
    id: 'profile',
    label: isRTL ? 'الملف الشخصي' : 'Profile',
    icon: <User className="w-5 h-5" />
  }, {
    id: 'security',
    label: isRTL ? 'الأمان' : 'Security',
    icon: <Lock className="w-5 h-5" />
  }, {
    id: 'notifications',
    label: isRTL ? 'الإشعارات' : 'Notifications',
    icon: <Bell className="w-5 h-5" />
  }, {
    id: 'appearance',
    label: isRTL ? 'المظهر' : 'Appearance',
    icon: <Layout className="w-5 h-5" />
  }, {
    id: 'language',
    label: isRTL ? 'اللغة والمنطقة' : 'Language & Region',
    icon: <Globe className="w-5 h-5" />
  }, {
    id: 'privacy',
    label: isRTL ? 'الخصوصية' : 'Privacy',
    icon: <Shield className="w-5 h-5" />
  }, {
    id: 'billing',
    label: isRTL ? 'الفواتير' : 'Billing',
    icon: <CreditCard className="w-5 h-5" />
  }, {
    id: 'team',
    label: isRTL ? 'أعضاء الفريق' : 'Team Members',
    icon: <Users className="w-5 h-5" />
  }, {
    id: 'help',
    label: isRTL ? 'المساعدة والدعم' : 'Help & Support',
    icon: <HelpCircle className="w-5 h-5" />
  }];
  return <div className="grid grid-cols-1 md:grid-cols-4 gap-6" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Sidebar */}
      <div className="md:col-span-1">
        <Card className="p-0 overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {isRTL ? 'الإعدادات' : 'Settings'}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isRTL ? 'إدارة إعدادات حسابك' : 'Manage your account settings'}
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
                  {isRTL ? 'معلومات الملف الشخصي' : 'Profile Information'}
                </h2>
                {!isEditing ? <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Edit className="w-4 h-4" />
                    <span>{isRTL ? 'تعديل الملف الشخصي' : 'Edit Profile'}</span>
                  </button> : <div className="flex items-center gap-2">
                    <button onClick={handleCancel} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <X className="w-4 h-4" />
                      <span>{isRTL ? 'إلغاء' : 'Cancel'}</span>
                    </button>
                    <button onClick={handleSave} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                      <Save className="w-4 h-4" />
                      <span>{isRTL ? 'حفظ التغييرات' : 'Save Changes'}</span>
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
                          {isRTL ? 'الاسم الكامل' : 'Full Name'}
                        </label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} disabled={!isEditing} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {isRTL ? 'البريد الإلكتروني' : 'Email Address'}
                        </label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} disabled={!isEditing} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {isRTL ? 'رقم الهاتف' : 'Phone Number'}
                        </label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} disabled={!isEditing} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {isRTL ? 'الدور' : 'Role'}
                        </label>
                        <input type="text" name="role" value={formData.role} onChange={handleInputChange} disabled={true} // Role is always disabled
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {isRTL ? 'نبذة شخصية' : 'Bio'}
                      </label>
                      <textarea name="bio" value={formData.bio} onChange={handleInputChange} disabled={!isEditing} rows={4} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400 resize-none"></textarea>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'معلومات الحساب' : 'Account Information'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">
                          {isRTL ? 'تاريخ إنشاء الحساب:' : 'Account Created:'}
                        </span>{' '}
                        {isRTL ? '١٥ يناير ٢٠٢٤' : 'January 15, 2024'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">
                          {isRTL ? 'آخر تسجيل دخول:' : 'Last Login:'}
                        </span>{' '}
                        {isRTL ? 'اليوم الساعة ٩:٤٢ صباحًا' : 'Today at 9:42 AM'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">
                          {isRTL ? 'حالة الحساب:' : 'Account Status:'}
                        </span>{' '}
                        <span className="text-green-600 dark:text-green-400">
                          {isRTL ? 'نشط' : 'Active'}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">
                          {isRTL ? 'المصادقة الثنائية:' : 'Two-Factor Authentication:'}
                        </span>{' '}
                        <span className="text-red-600 dark:text-red-400">
                          {isRTL ? 'معطلة' : 'Disabled'}
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
                  {isRTL ? 'إعدادات الأمان' : 'Security Settings'}
                </h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'تغيير كلمة المرور' : 'Change Password'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {isRTL ? 'كلمة المرور الحالية' : 'Current Password'}
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
                        {isRTL ? 'كلمة المرور الجديدة' : 'New Password'}
                      </label>
                      <input type="password" name="newPassword" value={formData.newPassword} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {isRTL ? 'تأكيد كلمة المرور الجديدة' : 'Confirm New Password'}
                      </label>
                      <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {isRTL ? 'يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتتضمن أحرفًا كبيرة وصغيرة ورقمًا وحرفًا خاصًا.' : 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.'}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                      {isRTL ? 'تحديث كلمة المرور' : 'Update Password'}
                    </button>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'المصادقة الثنائية' : 'Two-Factor Authentication'}
                  </h3>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/30 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                          {isRTL ? 'المصادقة الثنائية غير مفعلة' : 'Two-factor authentication is not enabled'}
                        </h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-400 mt-1">
                          {isRTL ? 'أضف طبقة إضافية من الأمان إلى حسابك عن طريق تمكين المصادقة الثنائية.' : 'Add an extra layer of security to your account by enabling two-factor authentication.'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                    {isRTL ? 'تفعيل المصادقة الثنائية' : 'Enable Two-Factor Authentication'}
                  </button>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'الجلسات النشطة' : 'Active Sessions'}
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {isRTL ? 'الجلسة الحالية' : 'Current Session'}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {isRTL ? 'كروم على ويندوز • الآي بي: 192.168.1.1 • نشط الآن' : 'Chrome on Windows • IP: 192.168.1.1 • Active now'}
                          </p>
                        </div>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded-full">
                          {isRTL ? 'حالي' : 'Current'}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {isRTL ? 'سفاري على نظام ماك' : 'Safari on MacOS'}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {isRTL ? 'الآي بي: 192.168.1.2 • آخر نشاط: منذ يومين' : 'IP: 192.168.1.2 • Last active: 2 days ago'}
                          </p>
                        </div>
                        <button className="text-red-600 dark:text-red-400 text-sm hover:underline">
                          {isRTL ? 'إلغاء' : 'Revoke'}
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <RefreshCw className="w-4 h-4" />
                    <span>{isRTL ? 'تحديث الجلسات' : 'Refresh Sessions'}</span>
                  </button>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'منطقة الخطر' : 'Danger Zone'}
                  </h3>
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-lg">
                    <h4 className="text-sm font-medium text-red-800 dark:text-red-300 mb-2">
                      {isRTL ? 'حذف الحساب' : 'Delete Account'}
                    </h4>
                    <p className="text-sm text-red-700 dark:text-red-400 mb-4">
                      {isRTL ? 'بمجرد حذف حسابك، لا يمكن التراجع عن ذلك. يرجى التأكد.' : 'Once you delete your account, there is no going back. Please be certain.'}
                    </p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                      <Trash className="w-4 h-4" />
                      <span>{isRTL ? 'حذف الحساب' : 'Delete Account'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>}
          {/* Notifications Settings */}
          {activeTab === 'notifications' && <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {isRTL ? 'تفضيلات الإشعارات' : 'Notification Preferences'}
                </h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'قنوات الإشعارات' : 'Notification Channels'}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {isRTL ? 'إشعارات البريد الإلكتروني' : 'Email Notifications'}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {isRTL ? 'تلقي إشعارات البريد الإلكتروني حول التحديثات المهمة' : 'Receive email notifications about important updates'}
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
                            {isRTL ? 'إشعارات المتصفح' : 'Browser Notifications'}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {isRTL ? 'عرض إشعارات سطح المكتب في متصفحك' : 'Show desktop notifications in your browser'}
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
                            {isRTL ? 'إشعارات الجوال' : 'Mobile Push Notifications'}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {isRTL ? 'تلقي إشعارات على جهازك المحمول' : 'Receive push notifications on your mobile device'}
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
                    {isRTL ? 'أنواع الإشعارات' : 'Notification Types'}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {isRTL ? 'تسجيلات المستخدمين الجدد' : 'New User Registrations'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isRTL ? 'إشعار عند تسجيل مستخدم جديد على المنصة' : 'Notify when a new user registers on the platform'}
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
                          {isRTL ? 'التسجيل في الدورات' : 'Course Enrollments'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isRTL ? 'إشعار عند تسجيل مستخدم في دورة' : 'Notify when a user enrolls in a course'}
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
                          {isRTL ? 'رسائل جديدة' : 'New Messages'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isRTL ? 'إشعار عند استلام رسالة جديدة' : 'Notify when you receive a new message'}
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
                          {isRTL ? 'تحديثات النظام' : 'System Updates'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isRTL ? 'إشعار حول تحديثات النظام والصيانة' : 'Notify about system updates and maintenance'}
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
                      {isRTL ? 'حفظ إعدادات الإشعارات' : 'Save Notification Settings'}
                    </button>
                  </div>
                </div>
              </div>
            </div>}
          {/* Appearance Settings */}
          {activeTab === 'appearance' && <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {isRTL ? 'إعدادات المظهر' : 'Appearance Settings'}
                </h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'السمة' : 'Theme'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.appearance.theme === 'light' ? 'border-primary-500 ring-2 ring-primary-500/30' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}`}>
                      <div className="bg-white border border-gray-200 rounded-md h-24 mb-3 flex items-center justify-center">
                        <Sun className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {isRTL ? 'فاتح' : 'Light'}
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
                          {isRTL ? 'داكن' : 'Dark'}
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
                          {isRTL ? 'النظام' : 'System'}
                        </span>
                        {formData.appearance.theme === 'system' && <Check className="w-5 h-5 text-primary-600 dark:text-primary-400" />}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'خيارات العرض' : 'Display Options'}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {isRTL ? 'الوضع المضغوط' : 'Compact Mode'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isRTL ? 'تقليل المسافات والحشوات في جميع أنحاء الواجهة' : 'Reduce spacing and padding throughout the interface'}
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
                          {isRTL ? 'تمكين الرسوم المتحركة' : 'Enable Animations'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isRTL ? 'إظهار الرسوم المتحركة والانتقالات في جميع أنحاء الواجهة' : 'Show animations and transitions throughout the interface'}
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
                      {isRTL ? 'حفظ إعدادات المظهر' : 'Save Appearance Settings'}
                    </button>
                  </div>
                </div>
              </div>
            </div>}
          {/* Language & Region Settings */}
          {activeTab === 'language' && <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {isRTL ? 'إعدادات اللغة والمنطقة' : 'Language & Region Settings'}
                </h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'لغة الواجهة' : 'Interface Language'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`border rounded-lg p-4 cursor-pointer transition-all flex items-start gap-4 ${formData.language === 'en' ? 'border-primary-500 ring-2 ring-primary-500/30' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}`} onClick={() => setFormData({
                  ...formData,
                  language: 'en'
                })}>
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                        <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            English
                          </span>
                          {formData.language === 'en' && <Check className="w-4 h-4 text-primary-600 dark:text-primary-400" />}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {isRTL ? 'عرض الواجهة باللغة الإنجليزية' : 'Display the interface in English'}
                        </p>
                      </div>
                    </div>
                    <div className={`border rounded-lg p-4 cursor-pointer transition-all flex items-start gap-4 ${formData.language === 'ar' ? 'border-primary-500 ring-2 ring-primary-500/30' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}`} onClick={() => setFormData({
                  ...formData,
                  language: 'ar'
                })}>
                      <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30">
                        <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            العربية (Arabic)
                          </span>
                          {formData.language === 'ar' && <Check className="w-4 h-4 text-primary-600 dark:text-primary-400" />}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right" dir="rtl">
                          عرض الواجهة باللغة العربية
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'المنطقة الزمنية' : 'Time Zone'}
                  </h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {isRTL ? 'اختر المنطقة الزمنية' : 'Select Time Zone'}
                    </label>
                    <select value={formData.timezone} onChange={e => setFormData({
                  ...formData,
                  timezone: e.target.value
                })} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                      <option value="America/New_York">
                        {isRTL ? 'التوقيت الشرقي (الولايات المتحدة وكندا)' : 'Eastern Time (US & Canada)'}
                      </option>
                      <option value="America/Chicago">
                        {isRTL ? 'التوقيت المركزي (الولايات المتحدة وكندا)' : 'Central Time (US & Canada)'}
                      </option>
                      <option value="America/Denver">
                        {isRTL ? 'توقيت الجبال (الولايات المتحدة وكندا)' : 'Mountain Time (US & Canada)'}
                      </option>
                      <option value="America/Los_Angeles">
                        {isRTL ? 'توقيت المحيط الهادئ (الولايات المتحدة وكندا)' : 'Pacific Time (US & Canada)'}
                      </option>
                      <option value="Europe/London">
                        {isRTL ? 'لندن، المملكة المتحدة' : 'London, United Kingdom'}
                      </option>
                      <option value="Europe/Paris">
                        {isRTL ? 'باريس، فرنسا' : 'Paris, France'}
                      </option>
                      <option value="Asia/Dubai">
                        {isRTL ? 'دبي، الإمارات العربية المتحدة' : 'Dubai, UAE'}
                      </option>
                      <option value="Asia/Riyadh">
                        {isRTL ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
                      </option>
                      <option value="Asia/Amman">
                        {isRTL ? 'عمان، الأردن' : 'Amman, Jordan'}
                      </option>
                      <option value="Asia/Tokyo">
                        {isRTL ? 'طوكيو، اليابان' : 'Tokyo, Japan'}
                      </option>
                      <option value="Australia/Sydney">
                        {isRTL ? 'سيدني، أستراليا' : 'Sydney, Australia'}
                      </option>
                    </select>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {isRTL ? 'الوقت المحلي الحالي:' : 'Current local time:'}{' '}
                      {new Date().toLocaleTimeString(formData.language === 'ar' ? 'ar-SA' : 'en-US', {
                    timeZone: formData.timezone
                  })}
                    </p>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'تنسيق التاريخ والوقت' : 'Date & Time Format'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {isRTL ? 'تنسيق التاريخ' : 'Date Format'}
                      </label>
                      <select value={formData.dateFormat || 'MM/DD/YYYY'} onChange={e => setFormData({
                    ...formData,
                    dateFormat: e.target.value
                  })} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                        <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                        <option value="YYYY/MM/DD">YYYY/MM/DD</option>
                        <option value="DD-MMM-YYYY">DD-MMM-YYYY</option>
                      </select>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {isRTL ? 'مثال:' : 'Example:'}{' '}
                        {formatDateExample(new Date(), formData.dateFormat || 'MM/DD/YYYY')}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {isRTL ? 'تنسيق الوقت' : 'Time Format'}
                      </label>
                      <select value={formData.timeFormat || '12'} onChange={e => setFormData({
                    ...formData,
                    timeFormat: e.target.value
                  })} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                        <option value="12">
                          {isRTL ? '12 ساعة (صباحًا/مساءً)' : '12-hour (AM/PM)'}
                        </option>
                        <option value="24">
                          {isRTL ? '24 ساعة' : '24-hour'}
                        </option>
                      </select>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {isRTL ? 'مثال:' : 'Example:'}{' '}
                        {formatTimeExample(new Date(), formData.timeFormat || '12')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'إعدادات المنطقة' : 'Locale Settings'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {isRTL ? 'اليوم الأول من الأسبوع' : 'First Day of Week'}
                      </label>
                      <select value={formData.firstDayOfWeek || 'sunday'} onChange={e => setFormData({
                    ...formData,
                    firstDayOfWeek: e.target.value
                  })} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                        <option value="sunday">
                          {isRTL ? 'الأحد' : 'Sunday'}
                        </option>
                        <option value="monday">
                          {isRTL ? 'الاثنين' : 'Monday'}
                        </option>
                        <option value="saturday">
                          {isRTL ? 'السبت' : 'Saturday'}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {isRTL ? 'تنسيق الأرقام' : 'Number Format'}
                      </label>
                      <select value={formData.numberFormat || 'en-US'} onChange={e => setFormData({
                    ...formData,
                    numberFormat: e.target.value
                  })} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                        <option value="en-US">1,234.56 (US)</option>
                        <option value="en-GB">1,234.56 (UK)</option>
                        <option value="de-DE">1.234,56 (German)</option>
                        <option value="fr-FR">1 234,56 (French)</option>
                        <option value="ar-SA">١٬٢٣٤٫٥٦ (Arabic)</option>
                      </select>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {isRTL ? 'مثال:' : 'Example:'}{' '}
                        {formatNumberExample(1234.56, formData.numberFormat || 'en-US')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-end gap-2">
                    <button onClick={handleCancel} className="px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      {isRTL ? 'إلغاء' : 'Cancel'}
                    </button>
                    <button onClick={handleSave} className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors flex items-center gap-2">
                      <Save className="w-4 h-4" />
                      {isRTL ? 'حفظ الإعدادات' : 'Save Settings'}
                    </button>
                  </div>
                </div>
              </div>
            </div>}
          {/* Privacy Settings */}
          {activeTab === 'privacy' && <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {isRTL ? 'إعدادات الخصوصية' : 'Privacy Settings'}
                </h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'إعدادات الملف الشخصي' : 'Profile Settings'}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {isRTL ? 'رؤية الملف الشخصي' : 'Profile Visibility'}
                      </label>
                      <select value={formData.privacy.profileVisibility} onChange={e => handlePrivacyChange('profileVisibility', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                        <option value="public">
                          {isRTL ? 'عام - يمكن للجميع رؤية ملفك الشخصي' : 'Public - Everyone can see your profile'}
                        </option>
                        <option value="registered">
                          {isRTL ? 'مسجل - يمكن للمستخدمين المسجلين فقط رؤية ملفك الشخصي' : 'Registered - Only registered users can see your profile'}
                        </option>
                        <option value="connections">
                          {isRTL ? 'اتصالات - يمكن لاتصالاتك فقط رؤية ملفك الشخصي' : 'Connections - Only your connections can see your profile'}
                        </option>
                        <option value="private">
                          {isRTL ? 'خاص - لا يمكن لأحد رؤية ملفك الشخصي' : 'Private - No one can see your profile'}
                        </option>
                      </select>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {isRTL ? 'يحدد من يمكنه رؤية معلومات ملفك الشخصي' : 'Determines who can see your profile information'}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {isRTL ? 'إظهار حالة الاتصال' : 'Show Online Status'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isRTL ? 'إظهار متى تكون متصلاً بالمنصة' : 'Show when you are online on the platform'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={formData.privacy.showOnlineStatus} onChange={() => handlePrivacyChange('showOnlineStatus', !formData.privacy.showOnlineStatus)} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'إعدادات الاتصال' : 'Communication Settings'}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {isRTL ? 'السماح بالرسائل من' : 'Allow Messages From'}
                      </label>
                      <select value={formData.privacy.allowMessages} onChange={e => handlePrivacyChange('allowMessages', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                        <option value="all">
                          {isRTL ? 'الجميع' : 'Everyone'}
                        </option>
                        <option value="connections">
                          {isRTL ? 'اتصالاتي فقط' : 'My Connections Only'}
                        </option>
                        <option value="none">
                          {isRTL ? 'لا أحد' : 'No One'}
                        </option>
                      </select>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {isRTL ? 'يحدد من يمكنه إرسال رسائل إليك' : 'Determines who can send you messages'}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {isRTL ? 'مشاركة نشاطك' : 'Share Your Activity'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isRTL ? 'مشاركة نشاطك التعليمي مع اتصالاتك' : 'Share your learning activity with your connections'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={formData.privacy.shareActivity} onChange={() => handlePrivacyChange('shareActivity', !formData.privacy.shareActivity)} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'استخدام البيانات' : 'Data Usage'}
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {isRTL ? 'تحسين المنصة' : 'Platform Improvement'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isRTL ? 'السماح باستخدام بياناتك لتحسين تجربة المنصة' : 'Allow your data to be used to improve platform experience'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={formData.privacy.dataUsage} onChange={() => handlePrivacyChange('dataUsage', !formData.privacy.dataUsage)} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="bg-primary-50 dark:bg-primary-900/30 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-primary-800 dark:text-primary-300">
                          {isRTL ? 'بياناتك محمية' : 'Your Data is Protected'}
                        </h4>
                        <p className="text-sm text-primary-700 dark:text-primary-400 mt-1">
                          {isRTL ? 'نحن نأخذ خصوصيتك على محمل الجد. يمكنك الاطلاع على سياسة الخصوصية الكاملة الخاصة بنا للحصول على مزيد من المعلومات.' : 'We take your privacy seriously. You can view our full privacy policy for more information.'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                      {isRTL ? 'حفظ إعدادات الخصوصية' : 'Save Privacy Settings'}
                    </button>
                  </div>
                </div>
              </div>
            </div>}
          {/* Billing Settings */}
          {activeTab === 'billing' && <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {isRTL ? 'إعدادات الفواتير' : 'Billing Settings'}
                </h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'خطة الاشتراك الحالية' : 'Current Subscription Plan'}
                  </h3>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 rounded-lg p-6 border border-primary-200 dark:border-primary-800/30">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge variant="success" className="text-xs px-2 py-0.5 rounded">
                            {isRTL ? 'نشط' : 'Active'}
                          </Badge>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {isRTL ? 'الخطة الاحترافية' : 'Professional Plan'}
                          </h4>
                        </div>
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                          {isRTL ? 'تجدد في 15 يونيو 2025' : 'Renews on June 15, 2025'}
                        </div>
                        <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                          <p>{isRTL ? 'يشمل:' : 'Includes:'}</p>
                          <ul className="mt-2 space-y-1">
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-green-500" />
                              {isRTL ? 'وصول غير محدود إلى جميع الدورات' : 'Unlimited access to all courses'}
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-green-500" />
                              {isRTL ? 'دعم مخصص' : 'Dedicated support'}
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-green-500" />
                              {isRTL ? 'تحليلات متقدمة' : 'Advanced analytics'}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="text-center md:text-right">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          $49.99
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            /{isRTL ? 'شهر' : 'month'}
                          </span>
                        </div>
                        <div className="mt-4 space-y-2">
                          <button className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                            {isRTL ? 'ترقية الخطة' : 'Upgrade Plan'}
                          </button>
                          <button className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            {isRTL ? 'إلغاء الاشتراك' : 'Cancel Subscription'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'طرق الدفع' : 'Payment Methods'}
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                            <CreditCardIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {isRTL ? 'فيزا' : 'Visa'} •••• 4242
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {isRTL ? 'تنتهي 05/2025' : 'Expires 05/2025'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="primary" size="sm">
                            {isRTL ? 'افتراضي' : 'Default'}
                          </Badge>
                          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/30">
                            <CreditCardIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {isRTL ? 'ماستر كارد' : 'Mastercard'} •••• 5678
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {isRTL ? 'تنتهي 09/2026' : 'Expires 09/2026'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                            <Trash className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors w-full justify-center">
                      <Plus className="w-4 h-4" />
                      <span>
                        {isRTL ? 'إضافة طريقة دفع جديدة' : 'Add New Payment Method'}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'إعدادات الفوترة' : 'Billing Settings'}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {isRTL ? 'طريقة الدفع الافتراضية' : 'Default Payment Method'}
                      </label>
                      <select value={formData.payment.defaultMethod} onChange={e => handlePaymentChange('defaultMethod', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                        <option value="card">
                          {isRTL ? 'فيزا •••• 4242' : 'Visa •••• 4242'}
                        </option>
                        <option value="mastercard">
                          {isRTL ? 'ماستر كارد •••• 5678' : 'Mastercard •••• 5678'}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {isRTL ? 'العملة' : 'Currency'}
                      </label>
                      <select value={formData.payment.currency} onChange={e => handlePaymentChange('currency', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                        <option value="USD">
                          {isRTL ? 'دولار أمريكي (USD)' : 'US Dollar (USD)'}
                        </option>
                        <option value="EUR">
                          {isRTL ? 'يورو (EUR)' : 'Euro (EUR)'}
                        </option>
                        <option value="GBP">
                          {isRTL ? 'جنيه إسترليني (GBP)' : 'British Pound (GBP)'}
                        </option>
                        <option value="JOD">
                          {isRTL ? 'دينار أردني (JOD)' : 'Jordanian Dinar (JOD)'}
                        </option>
                        <option value="SAR">
                          {isRTL ? 'ريال سعودي (SAR)' : 'Saudi Riyal (SAR)'}
                        </option>
                        <option value="AED">
                          {isRTL ? 'درهم إماراتي (AED)' : 'UAE Dirham (AED)'}
                        </option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {isRTL ? 'تجديد تلقائي' : 'Auto-Renew Subscription'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isRTL ? 'تجديد اشتراكك تلقائيًا عند انتهاء صلاحيته' : 'Automatically renew your subscription when it expires'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={formData.payment.autoRenew} onChange={() => handlePaymentChange('autoRenew', !formData.payment.autoRenew)} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'سجل الفواتير' : 'Billing History'}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            {isRTL ? 'التاريخ' : 'Date'}
                          </th>
                          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            {isRTL ? 'الوصف' : 'Description'}
                          </th>
                          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            {isRTL ? 'المبلغ' : 'Amount'}
                          </th>
                          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            {isRTL ? 'الحالة' : 'Status'}
                          </th>
                          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            {isRTL ? 'الفاتورة' : 'Invoice'}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                          <td className="px-2 py-4 text-sm text-gray-900 dark:text-white">
                            {isRTL ? '١٥ مايو ٢٠٢٥' : 'May 15, 2025'}
                          </td>
                          <td className="px-2 py-4 text-sm text-gray-900 dark:text-white">
                            {isRTL ? 'الخطة الاحترافية - اشتراك شهري' : 'Professional Plan - Monthly Subscription'}
                          </td>
                          <td className="px-2 py-4 text-sm text-gray-900 dark:text-white">
                            $49.99
                          </td>
                          <td className="px-2 py-4">
                            <Badge variant="success" size="sm">
                              {isRTL ? 'مدفوع' : 'Paid'}
                            </Badge>
                          </td>
                          <td className="px-2 py-4">
                            <button className="text-primary-600 dark:text-primary-400 hover:underline text-sm flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              {isRTL ? 'تنزيل' : 'Download'}
                            </button>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                          <td className="px-2 py-4 text-sm text-gray-900 dark:text-white">
                            {isRTL ? '١٥ أبريل ٢٠٢٥' : 'April 15, 2025'}
                          </td>
                          <td className="px-2 py-4 text-sm text-gray-900 dark:text-white">
                            {isRTL ? 'الخطة الاحترافية - اشتراك شهري' : 'Professional Plan - Monthly Subscription'}
                          </td>
                          <td className="px-2 py-4 text-sm text-gray-900 dark:text-white">
                            $49.99
                          </td>
                          <td className="px-2 py-4">
                            <Badge variant="success" size="sm">
                              {isRTL ? 'مدفوع' : 'Paid'}
                            </Badge>
                          </td>
                          <td className="px-2 py-4">
                            <button className="text-primary-600 dark:text-primary-400 hover:underline text-sm flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              {isRTL ? 'تنزيل' : 'Download'}
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                          <td className="px-2 py-4 text-sm text-gray-900 dark:text-white">
                            {isRTL ? '١٥ مارس ٢٠٢٥' : 'March 15, 2025'}
                          </td>
                          <td className="px-2 py-4 text-sm text-gray-900 dark:text-white">
                            {isRTL ? 'الخطة الاحترافية - اشتراك شهري' : 'Professional Plan - Monthly Subscription'}
                          </td>
                          <td className="px-2 py-4 text-sm text-gray-900 dark:text-white">
                            $49.99
                          </td>
                          <td className="px-2 py-4">
                            <Badge variant="success" size="sm">
                              {isRTL ? 'مدفوع' : 'Paid'}
                            </Badge>
                          </td>
                          <td className="px-2 py-4">
                            <button className="text-primary-600 dark:text-primary-400 hover:underline text-sm flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              {isRTL ? 'تنزيل' : 'Download'}
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>}
          {/* Team Members Settings */}
          {activeTab === 'team' && <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {isRTL ? 'إدارة أعضاء الفريق' : 'Team Members Management'}
                </h2>
                <button className="flex items-center gap-2 px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                  <UserPlus className="w-4 h-4" />
                  <span>{isRTL ? 'دعوة عضو' : 'Invite Member'}</span>
                </button>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {isRTL ? 'أعضاء الفريق' : 'Team Members'}
                    </h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input type="text" placeholder={isRTL ? 'البحث عن أعضاء...' : 'Search members...'} className="pl-9 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-700 dark:text-primary-400 text-lg font-semibold">
                            AU
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {isRTL ? 'مستخدم المشرف' : 'Admin User'}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              admin@example.com
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <Badge variant="primary" size="sm">
                            {isRTL ? 'مالك' : 'Owner'}
                          </Badge>
                          <div className="flex items-center gap-2 ms-auto">
                            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" disabled>
                              <Trash className="w-4 h-4 opacity-50" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-700 dark:text-green-400 text-lg font-semibold">
                            JS
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {isRTL ? 'جون سميث' : 'John Smith'}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              john@example.com
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <select className="px-2 py-1 text-xs rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" defaultValue="admin">
                            <option value="admin">
                              {isRTL ? 'مشرف' : 'Admin'}
                            </option>
                            <option value="editor">
                              {isRTL ? 'محرر' : 'Editor'}
                            </option>
                            <option value="viewer">
                              {isRTL ? 'مشاهد' : 'Viewer'}
                            </option>
                          </select>
                          <div className="flex items-center gap-2 ms-auto">
                            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                              <Trash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400 text-lg font-semibold">
                            SJ
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {isRTL ? 'سارة جونسون' : 'Sarah Johnson'}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              sarah@example.com
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <select className="px-2 py-1 text-xs rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" defaultValue="editor">
                            <option value="admin">
                              {isRTL ? 'مشرف' : 'Admin'}
                            </option>
                            <option value="editor">
                              {isRTL ? 'محرر' : 'Editor'}
                            </option>
                            <option value="viewer">
                              {isRTL ? 'مشاهد' : 'Viewer'}
                            </option>
                          </select>
                          <div className="flex items-center gap-2 ms-auto">
                            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                              <Trash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg border-dashed">
                      <div className="flex items-center justify-center py-4">
                        <button className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                          <UserPlus className="w-6 h-6" />
                          <span className="text-sm font-medium">
                            {isRTL ? 'دعوة عضو جديد' : 'Invite New Member'}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'دعوات معلقة' : 'Pending Invitations'}
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            michael@example.com
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {isRTL ? 'تم الإرسال: 10 مايو 2025' : 'Sent: May 10, 2025'}{' '}
                            • {isRTL ? 'محرر' : 'Editor'}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="px-3 py-1 text-xs bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                            {isRTL ? 'إعادة إرسال' : 'Resend'}
                          </button>
                          <button className="px-3 py-1 text-xs border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            {isRTL ? 'إلغاء' : 'Cancel'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'إعدادات الفريق' : 'Team Settings'}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {isRTL ? 'اسم الفريق' : 'Team Name'}
                      </label>
                      <input type="text" value="Arabic With English Team" className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {isRTL ? 'السماح بالدعوات من قبل الأعضاء' : 'Allow Member Invitations'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isRTL ? 'السماح لأعضاء الفريق بدعوة أعضاء جدد' : 'Allow team members to invite new members'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                      {isRTL ? 'حفظ إعدادات الفريق' : 'Save Team Settings'}
                    </button>
                  </div>
                </div>
              </div>
            </div>}
          {/* Help & Support Settings */}
          {activeTab === 'help' && <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {isRTL ? 'المساعدة والدعم' : 'Help & Support'}
                </h2>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'مركز المساعدة' : 'Help Center'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                          <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                            {isRTL ? 'مركز المعرفة' : 'Knowledge Base'}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                            {isRTL ? 'استكشف مقالات ودروس تعليمية مفصلة' : 'Explore detailed articles and tutorials'}
                          </p>
                          <a href="#" className="text-xs text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1">
                            {isRTL ? 'استكشاف المقالات' : 'Browse Articles'}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30">
                          <Video className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                            {isRTL ? 'فيديوهات تعليمية' : 'Video Tutorials'}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                            {isRTL ? 'شاهد مقاطع فيديو حول كيفية استخدام المنصة' : 'Watch videos on how to use the platform'}
                          </p>
                          <a href="#" className="text-xs text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1">
                            {isRTL ? 'مشاهدة الفيديوهات' : 'Watch Videos'}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/30">
                          <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                            {isRTL ? 'الدردشة المباشرة' : 'Live Chat'}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                            {isRTL ? 'تحدث مع فريق الدعم لدينا مباشرة' : 'Chat with our support team directly'}
                          </p>
                          <a href="#" className="text-xs text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1">
                            {isRTL ? 'بدء الدردشة' : 'Start Chat'}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/30">
                          <Phone className="w-5 h-5 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                            {isRTL ? 'دعم الهاتف' : 'Phone Support'}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                            {isRTL ? 'اتصل بنا للحصول على مساعدة مباشرة' : 'Call us for direct assistance'}
                          </p>
                          <a href="#" className="text-xs text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1">
                            +1 (555) 123-4567
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        {isRTL ? 'كيف يمكنني تغيير خطة الاشتراك الخاصة بي؟' : 'How can I change my subscription plan?'}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {isRTL ? 'يمكنك تغيير خطة الاشتراك الخاصة بك من خلال الانتقال إلى قسم "الفواتير" في إعدادات حسابك. هناك، ستجد خيارات لترقية أو تخفيض خطتك الحالية.' : 'You can change your subscription plan by navigating to the "Billing" section in your account settings. There, you\'ll find options to upgrade or downgrade your current plan.'}
                      </p>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        {isRTL ? 'كيف يمكنني إضافة أعضاء فريق جدد؟' : 'How do I add new team members?'}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {isRTL ? 'لإضافة أعضاء فريق جدد، انتقل إلى قسم "أعضاء الفريق" في الإعدادات وانقر على زر "دعوة عضو". ستتمكن من إدخال عنوان البريد الإلكتروني للشخص وتعيين دوره.' : 'To add new team members, go to the "Team Members" section in settings and click the "Invite Member" button. You\'ll be able to enter the person\'s email address and assign their role.'}
                      </p>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        {isRTL ? 'كيف يمكنني تصدير بياناتي؟' : 'How can I export my data?'}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {isRTL ? 'يمكنك تصدير بياناتك من خلال قسم "الخصوصية" في إعدادات حسابك. هناك، ستجد خيار "تصدير بياناتي" الذي سيسمح لك بتنزيل نسخة من جميع بياناتك الشخصية والمحتوى الخاص بك.' : 'You can export your data from the "Privacy" section in your account settings. There, you\'ll find an "Export My Data" option that will allow you to download a copy of all your personal data and content.'}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline text-sm inline-flex items-center gap-1">
                      {isRTL ? 'عرض جميع الأسئلة الشائعة' : 'View All FAQs'}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'اتصل بنا' : 'Contact Us'}
                  </h3>
                  <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {isRTL ? 'الموضوع' : 'Subject'}
                        </label>
                        <select className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
                          <option value="">
                            {isRTL ? 'اختر موضوعًا...' : 'Select a subject...'}
                          </option>
                          <option value="billing">
                            {isRTL ? 'استفسار عن الفواتير' : 'Billing Inquiry'}
                          </option>
                          <option value="technical">
                            {isRTL ? 'مشكلة فنية' : 'Technical Issue'}
                          </option>
                          <option value="account">
                            {isRTL ? 'إدارة الحساب' : 'Account Management'}
                          </option>
                          <option value="other">
                            {isRTL ? 'آخر' : 'Other'}
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {isRTL ? 'الرسالة' : 'Message'}
                        </label>
                        <textarea rows={4} placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Type your message here...'} className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"></textarea>
                      </div>
                      <div className="flex justify-end">
                        <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                          {isRTL ? 'إرسال الرسالة' : 'Send Message'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {isRTL ? 'ساعات العمل' : 'Support Hours'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                          <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                            {isRTL ? 'دعم الدردشة' : 'Chat Support'}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {isRTL ? 'الاثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً بتوقيت جرينتش' : 'Monday - Friday: 9:00 AM - 6:00 PM GMT'}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30">
                          <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                            {isRTL ? 'دعم الهاتف' : 'Phone Support'}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {isRTL ? 'الاثنين - الجمعة: 10:00 صباحًا - 4:00 مساءً بتوقيت جرينتش' : 'Monday - Friday: 10:00 AM - 4:00 PM GMT'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </Card>
      </div>
    </div>;
};
// Helper components
const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = ''
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) => {
  const variantClasses = {
    primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400',
    secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    danger: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
  };
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  };
  return <span className={`inline-flex items-center font-medium rounded-full ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </span>;
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
const formatDateExample = (date: Date, format: string) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthName = monthNames[date.getMonth()];
  switch (format) {
    case 'MM/DD/YYYY':
      return `${month}/${day}/${year}`;
    case 'DD/MM/YYYY':
      return `${day}/${month}/${year}`;
    case 'YYYY-MM-DD':
      return `${year}-${month}-${day}`;
    case 'YYYY/MM/DD':
      return `${year}/${month}/${day}`;
    case 'DD-MMM-YYYY':
      return `${day}-${monthName}-${year}`;
    default:
      return `${month}/${day}/${year}`;
  }
};
const formatTimeExample = (date: Date, format: string) => {
  const hours24 = date.getHours();
  const hours12 = hours24 % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours24 >= 12 ? 'PM' : 'AM';
  return format === '24' ? `${hours24}:${minutes}` : `${hours12}:${minutes} ${ampm}`;
};
const formatNumberExample = (number: number, locale: string) => {
  try {
    return new Intl.NumberFormat(locale).format(number);
  } catch (error) {
    return number.toString();
  }
};