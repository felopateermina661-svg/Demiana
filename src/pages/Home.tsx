import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#0b0f19] text-white font-sans selection:bg-[#00ffcc]/30 selection:text-[#00ffcc]"
      dir="rtl"
    >
      {/* الهيدر العلوي */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full px-6 md:px-12 py-5 flex justify-between items-center bg-[#0b0f19]/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800/60"
      >
        <div 
          onClick={() => scrollToSection('home')}
          className="text-lg md:text-xl font-bold tracking-wider text-white flex items-center gap-2 cursor-pointer"
        >
          DEMIANIA <span className="text-[#00ffcc]">MINA</span>
        </div>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-400 items-center">
            <li><button onClick={() => scrollToSection('home')} className="hover:text-[#00ffcc] transition-colors cursor-pointer bg-transparent border-none text-gray-400 font-semibold text-sm">الرئيسية</button></li>
            <li><button onClick={() => scrollToSection('about')} className="hover:text-[#00ffcc] transition-colors cursor-pointer bg-transparent border-none text-gray-400 font-semibold text-sm">عن البروتوكول</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="hover:text-[#00ffcc] transition-colors cursor-pointer bg-transparent border-none text-gray-400 font-semibold text-sm">المهارات</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#00ffcc] transition-colors cursor-pointer bg-transparent border-none text-gray-400 font-semibold text-sm">تواصل معي</button></li>
          </ul>

          <button 
            onClick={() => navigate('/')}
            title="إعادة الانترو السينمائي"
            className="w-10 h-10 rounded-xl bg-[#111827] border border-[#00ffcc]/40 text-[#00ffcc] flex items-center justify-center hover:bg-[#00ffcc]/10 hover:scale-105 transition-all cursor-pointer text-base shadow-[0_0_15px_rgba(0,255,204,0.15)]"
          >
            ⚡
          </button>
        </div>
      </motion.nav>

      {/* قسم الترحيب */}
      <div id="home" className="flex flex-col items-center justify-center pt-24 pb-16 text-center px-4">
        <div className="inline-block px-5 py-2 rounded-full bg-[#00ffcc]/10 text-[#00ffcc] text-sm font-medium mb-6 border border-[#00ffcc]/30 shadow-[0_0_15px_rgba(0,255,204,0.15)]">
          Status: Protocol Active & Online 🚀
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          مرحباً بك في بروتوكول <br/>
          <span className="text-[#00ffcc] drop-shadow-[0_0_20px_rgba(0,255,204,0.4)]">Demiania Mina</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
          مطور واجهات ومحب لبرمجة وتصميم التطبيقات الحديثة بروح سايبربانك ومظهر سينمائي متكامل.
        </p>
      </div>

      {/* قسم عني */}
      <div id="about" className="py-20 px-6 max-w-4xl mx-auto text-center border-t border-gray-800/40">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">عن البروتوكول (About Me) 💡</h2>
        <p className="text-gray-300 text-base md:text-lg leading-loose bg-[#111827] p-8 rounded-3xl border border-gray-800 shadow-xl relative overflow-hidden">
          أنا <span className="text-[#00ffcc] font-bold">دميانة مينا</span>، مطور شغوف ببناء تجارب رقمية استثنائية تجمع بين قوة الأكواد ونظافة التصميم.
        </p>
      </div>

      {/* قسم المهارات */}
      <div className="py-20 border-t border-gray-800/60 bg-[#0e1422]" id="skills">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">لغات البرمجة والتقنيات الأساسية 💻</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'JavaScript / TS', desc: 'لغة البرمجة التفاعلية', icon: '⚡' },
              { name: 'Python', desc: 'الذكاء الاصطناعي والسكربتات', icon: '🐍' },
              { name: 'HTML5 & CSS3', desc: 'هيكلة وتصميم الواجهات', icon: '🌐' },
              { name: 'React & Tailwind', desc: 'بناء المكونات الحديثة', icon: '⚛️' }
            ].map((skill, index) => (
              <div key={index} className="p-6 rounded-2xl bg-[#111827] border border-gray-800 hover:border-[#00ffcc]/50 transition-all text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-[#0b0f19] border border-gray-800 flex items-center justify-center mb-4 text-3xl">{skill.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-gray-400 text-xs">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* قسم التواصل */}
      <div id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#111827] to-[#0e1422] border border-gray-800/80 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">دعنا نبني شيئاً عظيماً معاً 🚀</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a href="mailto:demianiamina@gmail.com" className="px-6 py-3.5 rounded-2xl bg-[#00ffcc] text-[#0b0f19] font-bold text-sm">📧 راسلني عبر البريد</a>
          </div>
        </div>
      </div>

      <footer className="text-center py-8 text-gray-500 text-xs border-t border-gray-900 bg-[#0b0f19]">
         © 2026 Demiania Mina. All Rights Reserved. Protocol v1.0 🚀
      </footer>
    </motion.div>
  );
};
