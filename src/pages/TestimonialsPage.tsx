import React, { useState } from 'react';
import { Search, StarIcon, GridIcon, ListIcon, SlidersHorizontal, PlayCircleIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Layout } from '../components/Layout';
type ViewMode = 'grid' | 'list';
type SortOption = 'recent' | 'rating' | 'helpful';
type FilterCategory = 'all' | 'weight-loss' | 'muscle-gain' | 'running' | 'yoga';
export const TestimonialsPage = () => {
  const {
    t,
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('recent');
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // Statistics
  const stats = [{
    label: t('testimonials.stats.totalReviews'),
    value: '2,547'
  }, {
    label: t('testimonials.stats.averageRating'),
    value: '4.8/5'
  }, {
    label: t('testimonials.stats.successRate'),
    value: '94%'
  }, {
    label: t('testimonials.stats.videoTestimonials'),
    value: '150+'
  }];
  // Featured video testimonials
  const videoTestimonials = [{
    name: isRTL ? 'أحمد محمد' : 'John Smith',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    duration: '2:45',
    category: t('testimonials.categories.weightLoss')
  }, {
    name: isRTL ? 'ليلى أحمد' : 'Sarah Williams',
    thumbnail: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    duration: '3:12',
    category: t('testimonials.categories.yoga')
  }];
  // Extended testimonials data
  const testimonials = [{
    name: isRTL ? 'سارة جونسون' : 'Sarah Johnson',
    role: isRTL ? 'متحمسة للياقة البدنية' : 'Fitness Enthusiast',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    quote: isRTL ? 'لقد غير FitTrack رحلتي الرياضية تماماً. ساعدتني خطط التمرين المخصصة وتتبع التغذية على تحقيق نتائج لم أكن أعتقد أنها ممكنة.' : 'FitTrack has completely transformed my fitness journey. The personalized workout plans and nutrition tracking have helped me achieve results I never thought possible.',
    achievement: isRTL ? 'فقدت 9 كيلوجرام في 3 أشهر' : 'Lost 20 lbs in 3 months',
    rating: 5,
    category: 'weight-loss',
    beforeImage: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1581009137042-c552e485697b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    date: '2023-12-01',
    helpfulCount: 156
  }];
  return <Layout>
      <section className="relative overflow-hidden gradient-bg">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-in">
              {t('testimonials.page.title')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 animate-slide-up">
              {t('testimonials.page.subtitle')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-slide-up" style={{
            animationDelay: '200ms'
          }}>
              {stats.map((stat, index) => <div key={index} className="card p-6 hover-lift">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      <div className="container py-12">
        <section className="mb-16 animate-fade-in" style={{
        animationDelay: '400ms'
      }}>
          <h2 className="text-2xl font-bold gradient-text mb-8">
            {t('testimonials.page.featuredVideos')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videoTestimonials.map((video, index) => <div key={index} className="card overflow-hidden hover-lift">
                <div className="aspect-video relative group">
                  <img src={video.thumbnail} alt={video.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="transform transition-transform duration-300 group-hover:scale-110">
                      <PlayCircleIcon className="w-16 h-16 text-white opacity-90 group-hover:opacity-100" />
                    </div>
                  </div>
                  <span className="absolute bottom-4 right-4 bg-black/75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {video.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {video.category}
                  </p>
                </div>
              </div>)}
          </div>
        </section>
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in" style={{
        animationDelay: '600ms'
      }}>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input type="text" placeholder={t('testimonials.search.placeholder')} className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </div>
          <div className="flex gap-4">
            <button onClick={() => setShowFilters(!showFilters)} className="btn-secondary flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              {t('testimonials.filters.label')}
            </button>
            <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <button onClick={() => setViewMode('grid')} className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
                <GridIcon className="w-5 h-5" />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
                <ListIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {showFilters && <div className="card p-6 mb-8 animate-slide-down">
            {/* Filter content here */}
          </div>}
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8 animate-fade-in`} style={{
        animationDelay: '800ms'
      }}>
          {testimonials.map((testimonial, index) => <div key={index} className={`card p-6 hover-lift ${viewMode === 'list' ? 'flex gap-6' : ''}`}>
              {/* Testimonial content here */}
            </div>)}
        </div>
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            <button className="btn-secondary p-2">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {[1, 2, 3].map(page => <button key={page} className={`px-4 py-2 rounded-lg transition-colors ${currentPage === page ? 'bg-primary-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
                  {page}
                </button>)}
            </div>
            <button className="btn-secondary p-2">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Layout>;
};