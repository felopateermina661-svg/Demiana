
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// استيراد المكونات التي أنشأناها في الخطوات السابقة
import { GravityIntro } from './components/GravityIntro';
import { Home } from './pages/Home';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* المسار الافتراضي (شاشة البداية) */}
        <Route path="/" element={<GravityIntro />} />
        
        {/* مسار الصفحة الرئيسية */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}
