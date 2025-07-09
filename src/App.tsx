import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ArabicWithEnglishLanding } from './components/ArabicWithEnglishLanding';
import { PolicyPage } from './components/PolicyPage';
import { TermsPage } from './components/TermsPage';
import { ContactPage } from './components/ContactPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { AdminPanel } from './components/admin/AdminPanel';
import './styles/globals.css';
export function App() {
  return <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <PageLayout>
            <Routes>
              <Route path="/" element={<ArabicWithEnglishLanding />} />
              <Route path="/privacy" element={<PolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </PageLayout>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>;
}