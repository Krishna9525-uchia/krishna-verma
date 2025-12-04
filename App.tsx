
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { CalculatorDef, Category } from './types';
import { calculators, getCalculator } from './data/calculators';
import { getExplanation } from './services/geminiService';

// --- Icons ---
const SunIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const MoonIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
const SearchIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const MenuIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
const ArrowRightIcon = () => <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
const HomeIcon = () => <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// SEO Component to handle Head changes
const SEO: React.FC<{ title: string; description: string; schema?: any }> = ({ title, description, schema }) => {
  useEffect(() => {
    document.title = title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    let scriptSchema = document.getElementById('json-ld-schema');
    if (schema) {
      if (!scriptSchema) {
        scriptSchema = document.createElement('script');
        scriptSchema.id = 'json-ld-schema';
        scriptSchema.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.textContent = JSON.stringify(schema);
    } else if (scriptSchema) {
      scriptSchema.remove();
    }
  }, [title, description, schema]);

  return null;
};

const Header: React.FC<{ darkMode: boolean, setDarkMode: (v: boolean) => void }> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Financial', path: '/category/Financial' },
    { name: 'Health', path: '/category/Health' },
    { name: 'Math', path: '/category/Math' },
    { name: 'Tech', path: '/category/Technical' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
                C
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                CalcMaster<span className="text-blue-600 dark:text-blue-400">Pro</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle Dark Mode"
            >
              <div className={`absolute transition-all duration-300 transform ${darkMode ? 'opacity-100 rotate-0 scale-100 text-yellow-400' : 'opacity-0 -rotate-90 scale-0'}`}>
                <SunIcon />
              </div>
              <div className={`absolute transition-all duration-300 transform ${darkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100 text-slate-500'}`}>
                <MoonIcon />
              </div>
            </button>
            <button 
              className="md:hidden p-2 text-slate-600 dark:text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out origin-top ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-4 space-y-2">
           {['Home', ...navLinks.map(l => l.name), 'Education', 'Miscellaneous'].map((item) => {
             const path = item === 'Home' ? '/' : `/category/${item === 'Tech' ? 'Technical' : item}`;
             return (
              <Link 
                key={item} 
                to={path} 
                className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
             )
           })}
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
               <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">C</div>
               <span className="font-bold text-lg dark:text-white">CalcMaster Pro</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Empowering your decisions with 40+ precision tools. Free, fast, and privacy-focused online calculators for everyone.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Popular Tools</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/calculator/loan-calculator" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Loan Calculator</Link></li>
              <li><Link to="/calculator/bmi-calculator" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">BMI Calculator</Link></li>
              <li><Link to="/calculator/scientific-calculator" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Scientific Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Categories</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/category/Financial" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Financial</Link></li>
              <li><Link to="/category/Health" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Health & Fitness</Link></li>
              <li><Link to="/category/Technical" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Engineering & IT</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Legal & Info</h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/about" className="cursor-pointer hover:text-blue-600">About Us</Link></li>
              <li><span className="cursor-pointer hover:text-blue-600">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:text-blue-600">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-slate-400 dark:text-slate-600 text-center md:text-left">
              © {new Date().getFullYear()} CalcMaster Pro. All rights reserved.
            </p>
        </div>
    </div>
  </footer>
);

const CalculatorCard: React.FC<{ calc: CalculatorDef }> = ({ calc }) => (
  <Link to={`/calculator/${calc.id}`} className="group flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300">
    <div className="flex items-start justify-between mb-4">
       <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-2xl group-hover:scale-110 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-all duration-300">
         {calc.icon}
       </div>
       <div className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">
         <ArrowRightIcon />
       </div>
    </div>
    
    <div className="flex-1">
      <div className="flex items-center space-x-2 mb-2">
         <span className="text-[10px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">{calc.category}</span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {calc.title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
        {calc.description}
      </p>
    </div>
  </Link>
);

// --- Pages ---

const HomePage: React.FC = () => {
  const [search, setSearch] = useState('');
  
  // Enhanced search
  const filtered = useMemo(() => {
    const rawTerm = search.trim().toLowerCase();
    if (!rawTerm) return [];

    const tokens = rawTerm.split(/\s+/).filter(t => t.length > 0);
    return calculators
      .map((calc) => {
        let score = 0;
        const checkField = (text: string, weight: number) => {
           if (!text) return;
           const lower = text.toLowerCase();
           if (lower.includes(rawTerm)) score += weight * 1.5;
           tokens.forEach(token => {
              if (lower.includes(token)) score += weight;
           });
        };
        checkField(calc.title, 10);
        checkField(calc.category, 5);
        checkField(calc.description, 4);
        if (calc.keywords) calc.keywords.forEach(k => checkField(k, 3));
        if (calc.inputs) calc.inputs.forEach(i => checkField(i.label, 2));
        return { calc, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.calc);
  }, [search]);

  const categories: Category[] = ['Financial', 'Math', 'Health', 'Education', 'Technical', 'Miscellaneous'];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <SEO 
        title="CalcMaster Pro - 40+ Free Online Calculators" 
        description="Access over 40 free online calculators for finance, math, health, fitness, and more. Instant results with step-by-step explanations."
      />
      
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
         {/* Background Decoration */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-40 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
         </div>
         
         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wide mb-6 animate-fade-in">
              ✨ 40+ Free Professional Tools
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight animate-slide-up">
              Calculate <span className="text-gradient">Anything.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.1s'}}>
              Precision tools for finance, engineering, health, and everyday math. Fast, free, and AI-powered.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-200"></div>
                <div className="relative flex items-center bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                   <div className="pl-6 text-slate-400">
                     <SearchIcon />
                   </div>
                   <input 
                      type="text" 
                      placeholder="Search for 'Mortgage', 'BMI', or 'Percentage'..." 
                      className="w-full py-5 px-4 text-lg text-slate-900 dark:text-white bg-transparent border-none focus:ring-0 placeholder-slate-400"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    {search && (
                      <button onClick={() => setSearch('')} className="pr-6 text-slate-400 hover:text-slate-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    )}
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        {search ? (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Search Results</h2>
               <span className="text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full">{filtered.length} found</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(c => <CalculatorCard key={c.id} calc={c} />)}
              {filtered.length === 0 && (
                <div className="col-span-full flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-800 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No results found</h3>
                  <p className="text-slate-500 dark:text-slate-400">Try adjusting your search terms or browse categories below.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-20 animate-fade-in" style={{animationDelay: '0.3s'}}>
             {categories.map(cat => {
               const catCalcs = calculators.filter(c => c.category === cat).slice(0, 6);
               if (catCalcs.length === 0) return null;
               return (
                 <div key={cat}>
                    <div className="flex justify-between items-end mb-8">
                      <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{cat}</h2>
                        <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                      </div>
                      <Link to={`/category/${cat}`} className="group flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 transition-colors">
                        View All <ArrowRightIcon />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {catCalcs.map(c => <CalculatorCard key={c.id} calc={c} />)}
                    </div>
                 </div>
               )
             })}
          </div>
        )}
      </div>
      
      {/* Feature Section */}
      <section className="bg-white dark:bg-slate-800 py-24 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 text-center">
               <div className="p-6">
                 <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">⚡</div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Instant Results</h3>
                 <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Lightning fast calculations processed directly in your browser. No server lag, no waiting.</p>
               </div>
               <div className="p-6">
                 <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">🧠</div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">AI Powered Explanations</h3>
                 <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Don't just get the number. Understand what it means with our integrated Gemini AI insights.</p>
               </div>
               <div className="p-6">
                 <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">📱</div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Fully Responsive</h3>
                 <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Optimized for every device. Use our complex financial and math tools on your phone, tablet, or desktop.</p>
               </div>
            </div>
        </div>
      </section>
    </div>
  );
};

const CategoryPage: React.FC = () => {
  const { category } = useParams<{category: string}>();
  const catCalcs = calculators.filter(c => c.category === category);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
      <SEO 
        title={`${category} Calculators - CalcMaster Pro`}
        description={`Explore our collection of free ${category?.toLowerCase()} calculators. accurate, fast, and easy to use.`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-6 transition-colors font-medium">
             <HomeIcon /> Back to Home
          </Link>
          <div className="flex items-center space-x-4">
             <div className="h-10 w-2 bg-blue-600 rounded-full"></div>
             <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">{category} Calculators</h1>
          </div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
             Explore our collection of {catCalcs.length} specialized calculators for {category?.toLowerCase()} purposes.
          </p>
        </div>
        
        {catCalcs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {catCalcs.map(c => <CalculatorCard key={c.id} calc={c} />)}
          </div>
        ) : (
           <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <p className="text-slate-500">No calculators found in this category.</p>
           </div>
        )}
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-20">
      <SEO 
        title="About CalcMaster Pro - The Comprehensive Guide"
        description="Read the full story behind CalcMaster Pro. A detailed look at our mission, technology, AI integration, and commitment to free, private, and accurate online tools."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
           <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold uppercase tracking-wide mb-6">
             Our Story & Vision
           </div>
           <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
             Redefining the Standard for <br/><span className="text-gradient">Online Computation</span>
           </h1>
           <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
             We built CalcMaster Pro to solve a simple problem: the internet lacked a centralized, beautiful, and intelligent hub for everyday calculations. Here is our journey.
           </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-16 shadow-sm border border-slate-200 dark:border-slate-700 space-y-16 animate-slide-up" style={{animationDelay: '0.1s'}}>
          
          <section className="prose prose-slate dark:prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Genesis of CalcMaster Pro</h2>
            <p>
              In the early days of the internet, calculators were among the first utilities to appear online. Yet, two decades later, the landscape had become stagnant. Users searching for a simple "loan calculator" or "BMI checker" were often greeted by sites cluttered with aggressive advertising, outdated layouts reminiscent of the late 90s, and questionable accuracy.
            </p>
            <p>
              We realized that while information was abundant, <strong>insight</strong> was scarce. A calculator might tell you that your monthly mortgage payment is $2,400, but it wouldn't explain <em>why</em> that matters, how it fits into your budget, or what the underlying formula implies about your long-term financial health.
            </p>
            <p>
              CalcMaster Pro was born from a desire to bridge this gap. We set out to create a platform that treats calculation tools with the same design fidelity and engineering rigor as a modern SaaS application. We didn't just want to build calculators; we wanted to build a <strong>computational engine</strong> for the modern web.
            </p>
          </section>

          <section className="prose prose-slate dark:prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Core Philosophy: Precision & Privacy</h2>
            <p>
              Our development philosophy rests on two non-negotiable pillars: absolute mathematical precision and unwavering user privacy.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">1. The Zero-Latency Promise</h3>
            <p>
              Unlike many competitors that send your data to a server for processing—introducing lag and potential privacy risks—CalcMaster Pro utilizes <strong>Client-Side Execution</strong>. Every input you type, every slider you drag, and every formula processed happens directly inside your browser using JavaScript's V8 engine.
            </p>
            <p>
              This architectural choice ensures that results appear instantly. There is no network round-trip. Whether you are calculating a complex IP subnet mask or a 30-year amortization schedule, the answer is rendered in milliseconds.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-3">2. Data Sovereignty</h3>
            <p>
               Because calculations happen locally, your sensitive financial data, health metrics, and business figures never leave your device. We do not store your inputs. We do not track your specific queries. In an age of surveillance capitalism, CalcMaster Pro is a sanctuary of privacy. You can use our tools to calculate your net worth or check your password strength with total peace of mind.
            </p>
          </section>

          <section className="bg-slate-50 dark:bg-slate-700/30 rounded-2xl p-8 border border-slate-100 dark:border-slate-700/50">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
               <span className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mr-4 text-xl">⚡</span>
               Engineering Excellence
             </h2>
             <div className="prose prose-slate dark:prose-invert max-w-none">
               <p>
                 Under the hood, CalcMaster Pro is a showcase of modern web development. We have discarded jQuery and legacy dependencies in favor of a lean, performant stack:
               </p>
               <ul className="grid md:grid-cols-2 gap-4 mt-6">
                 <li className="flex items-start">
                   <span className="text-blue-500 font-bold mr-2">React 18:</span> 
                   <span>For a declarative, component-based UI that manages complex state effortlessly.</span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-blue-500 font-bold mr-2">TypeScript:</span> 
                   <span>Ensuring type safety across our mathematical engines, preventing common floating-point errors and logic bugs.</span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-blue-500 font-bold mr-2">Tailwind CSS:</span> 
                   <span>For a highly responsive, utility-first design system that looks stunning on 4K monitors and mobile screens alike.</span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-blue-500 font-bold mr-2">PWA Architecture:</span> 
                   <span>CalcMaster Pro is installable. You can add it to your home screen and access tools even when offline.</span>
                 </li>
               </ul>
             </div>
          </section>

          <section className="prose prose-slate dark:prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The AI Revolution: Gemini Integration</h2>
            <p>
              The most significant leap forward for CalcMaster Pro is our integration with <strong>Google's Gemini Generative AI</strong>. Traditional calculators are passive; they give you a number and nothing more.
            </p>
            <p>
              We asked ourselves: <em>"What if a calculator could talk?"</em>
            </p>
            <p>
              By weaving Large Language Models (LLMs) into our interface, we transform raw data into actionable advice. When you calculate a BMI of 28, our AI doesn't just label it "Overweight." It explains the nuances of muscle mass versus fat, suggests general lifestyle adjustments, and provides context that a simple algorithm cannot.
            </p>
            <p>
              When you calculate a loan, the AI analyzes your debt-to-income ratio implication. When you solve a quadratic equation, it explains the geometric significance of the roots. This hybrid approach—<strong>Deterministic Math + Probabilistic AI</strong>—represents the future of educational tools.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">A Universe of Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
               <div>
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Financial Mastery</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Money management requires precision. Our financial suite covers everything from simple interest to complex SIP investments. We help you understand the time value of money, the impact of inflation, and the true cost of debt.
                  </p>
               </div>
               <div>
                  <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">Health & Fitness</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Your body is a complex machine. Our health tools (BMI, BMR, TDEE, Body Fat) rely on peer-reviewed formulas like Mifflin-St Jeor and the US Navy Method to give you accurate baselines for your fitness journey.
                  </p>
               </div>
               <div>
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">STEM Education</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    For students and educators, we offer tools that show their work. Our Algebra and Geometry calculators don't just solve for X; they break down the steps, reinforcing learning and conceptual understanding.
                  </p>
               </div>
               <div>
                  <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-2">Developer Utilities</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    For the builders of the web, we provide essential utilities. Subnet calculators, base converters, and bandwidth estimators streamline the daily workflows of IT professionals.
                  </p>
               </div>
            </div>
          </section>

          <section className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
             <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
             <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
               We are constantly evolving. New calculators, deeper AI insights, and improved visualizations are deployed weekly. Thank you for making CalcMaster Pro your trusted computational companion.
             </p>
             <Link to="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
               Start Calculating Now
             </Link>
          </section>

        </div>
      </div>
    </div>
  );
};

const CalculatorDetail: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const calculator = getCalculator(id || '');
  const [inputs, setInputs] = useState<Record<string, any>>({});
  const [results, setResults] = useState<any[]>([]);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    if (calculator) {
      const defaults: Record<string, any> = {};
      calculator.inputs.forEach(inp => defaults[inp.name] = inp.defaultValue);
      setInputs(defaults);
      try {
        setResults(calculator.calculate(defaults));
      } catch (e) { console.error(e); }
      setAiExplanation(null);
      window.scrollTo(0, 0);
    }
  }, [id, calculator]);

  const schema = useMemo(() => {
    if (!calculator) return null;
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": calculator.title,
      "applicationCategory": calculator.category,
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": calculator.article.benefits.join(", "),
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": calculator.article.faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    };
  }, [calculator]);

  const handleInputChange = (name: string, value: any) => {
    const newInputs = { ...inputs, [name]: value };
    setInputs(newInputs);
    if (calculator) {
       try {
         setResults(calculator.calculate(newInputs));
       } catch(e) {}
    }
  };

  const handleAskAI = async () => {
    if (!calculator) return;
    setLoadingAi(true);
    const explanation = await getExplanation(calculator.title, inputs, results);
    setAiExplanation(explanation);
    setLoadingAi(false);
  }

  if (!calculator) return <div className="min-h-screen pt-24 text-center dark:text-white">Calculator not found.</div>;

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pt-20 pb-20">
      <SEO 
        title={calculator.metaTitle} 
        description={calculator.metaDescription} 
        schema={schema}
      />
      
      {/* Breadcrumbs & Title */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
           <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-4">
             <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
             <span>/</span>
             <Link to={`/category/${calculator.category}`} className="hover:text-blue-600 transition-colors">{calculator.category}</Link>
             <span>/</span>
             <span className="text-slate-800 dark:text-slate-200 font-medium">{calculator.title}</span>
           </nav>
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
             <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg shadow-blue-500/30">
                  {calculator.icon}
                </div>
                <div>
                   <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">{calculator.title}</h1>
                   <p className="text-slate-500 dark:text-slate-400 mt-1">{calculator.description}</p>
                </div>
             </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Input & Results */}
        <div className="lg:col-span-7 space-y-6">
          {/* Inputs Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden animate-slide-up">
             <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
               <h3 className="font-bold text-slate-800 dark:text-white flex items-center">
                 <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> Calculate
               </h3>
               <button onClick={() => {
                 const d: any = {};
                 calculator.inputs.forEach(i => d[i.name] = i.defaultValue);
                 setInputs(d);
                 setResults(calculator.calculate(d));
               }} className="text-xs font-semibold text-blue-600 hover:text-blue-800 uppercase tracking-wide">
                 Reset
               </button>
             </div>
             <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
               {calculator.inputs.map(inp => (
                 <div key={inp.name} className={inp.type === 'select' || calculator.inputs.length < 3 ? "col-span-full" : "col-span-1"}>
                   <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{inp.label}</label>
                   <div className="relative group">
                      {inp.type === 'select' ? (
                        <select 
                          className="w-full rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white py-3 px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm"
                          value={inputs[inp.name]}
                          onChange={(e) => handleInputChange(inp.name, e.target.value)}
                        >
                          {inp.options?.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input 
                          type={inp.type}
                          className="w-full rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white py-3 px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm"
                          value={inputs[inp.name]}
                          onChange={(e) => handleInputChange(inp.name, inp.type === 'number' ? Number(e.target.value) : e.target.value)}
                          placeholder={inp.placeholder}
                        />
                      )}
                      {inp.unit && <span className="absolute right-4 top-3.5 text-slate-400 text-sm font-medium pointer-events-none">{inp.unit}</span>}
                   </div>
                   {inp.description && <p className="text-xs text-slate-500 mt-1.5">{inp.description}</p>}
                 </div>
               ))}
             </div>
          </div>
          
          {/* Results Dashboard */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden animate-slide-up" style={{animationDelay: '0.1s'}}>
             <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
               <h3 className="font-bold text-slate-800 dark:text-white flex items-center">
                 <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Results
               </h3>
             </div>
             <div className="p-6 space-y-4">
                 {/* Primary Result */}
                 {results.filter(r => r.isPrimary).map((res, i) => (
                   <div key={i} className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg shadow-blue-500/20">
                      <span className="text-blue-100 text-sm font-medium uppercase tracking-wide">{res.label}</span>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-4xl md:text-5xl font-bold tracking-tight">{res.value}</span>
                        {res.unit && <span className="text-xl text-blue-200">{res.unit}</span>}
                      </div>
                      {res.details && <div className="mt-3 pt-3 border-t border-white/20 text-blue-50 text-sm">{res.details}</div>}
                   </div>
                 ))}

                 {/* Secondary Results Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {results.filter(r => !r.isPrimary).map((res, i) => (
                      <div key={i} className="bg-slate-50 dark:bg-slate-700/30 rounded-xl p-4 border border-slate-100 dark:border-slate-700">
                         <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase">{res.label}</span>
                         <div className="mt-1 flex items-baseline gap-1">
                            <span className="text-xl font-bold text-slate-800 dark:text-slate-100">{res.value}</span>
                            {res.unit && <span className="text-sm text-slate-500">{res.unit}</span>}
                         </div>
                         {res.details && <p className="text-xs text-slate-500 mt-1">{res.details}</p>}
                      </div>
                    ))}
                 </div>
                 
                 {/* AI Explanation Button/Section */}
                 <div className="pt-2">
                   {!aiExplanation ? (
                     <button 
                       onClick={handleAskAI}
                       disabled={loadingAi}
                       className="w-full group relative flex justify-center items-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 transition-all shadow-md overflow-hidden"
                     >
                       <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                       {loadingAi ? (
                         <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                          Thinking...
                         </span>
                       ) : (
                         <span className="flex items-center">
                           ✨ Explain Results with AI
                         </span>
                       )}
                     </button>
                   ) : (
                     <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/50 rounded-2xl p-6 animate-fade-in relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-10">
                          <svg className="w-24 h-24 text-purple-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a1 1 0 0 1 1 1v2.17a7.002 7.002 0 0 1 5.83 5.83h2.17a1 1 0 1 1 0 2h-2.17A7.002 7.002 0 0 1 13 18.83v2.17a1 1 0 1 1-2 0v-2.17A7.002 7.002 0 0 1 5.17 13H3a1 1 0 1 1 0-2h2.17A7.002 7.002 0 0 1 11 5.17V3a1 1 0 0 1 1-1zm0 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>
                       </div>
                       <div className="relative z-10">
                         <div className="flex items-center mb-3">
                           <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">AI Insight</span>
                         </div>
                         <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-sm md:text-base">{aiExplanation}</p>
                       </div>
                     </div>
                   )}
                 </div>
             </div>
          </div>
        </div>

        {/* Right Column: Educational Content */}
        <div className="lg:col-span-5 space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
           <article className="prose prose-slate dark:prose-invert prose-lg max-w-none bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              {/* Introduction */}
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-0">What is the {calculator.title}?</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{calculator.article.intro}</p>
              
              {/* Why Useful */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Why Use This Calculator?</h3>
              <div className="text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">{calculator.article.whyItIsUseful}</div>

              {/* How it Works */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">How It Works</h3>
              <div className="text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">{calculator.article.howItWorks}</div>

              {/* Formula */}
              {calculator.article.formula && (
                <div className="my-8 p-6 bg-slate-900 text-blue-200 rounded-xl font-mono text-sm overflow-x-auto shadow-inner relative whitespace-pre-wrap">
                   <div className="absolute top-2 right-4 text-xs text-slate-500 uppercase font-bold">Formula</div>
                   {calculator.article.formula}
                </div>
              )}

              {/* Real Life Examples */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Real-Life Examples</h3>
              <div className="text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">{calculator.article.realLifeExamples}</div>

              {/* Tips and Mistakes */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Tips & Common Mistakes</h3>
              <div className="text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">{calculator.article.tipsAndMistakes}</div>

              {/* Benefits */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Key Benefits</h3>
              <ul className="grid gap-2">
                {calculator.article.benefits.map((b, i) => (
                  <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                    <span className="mr-2 text-green-500 font-bold">✓</span> {b}
                  </li>
                ))}
              </ul>

              {/* FAQs */}
              <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {calculator.article.faqs.map((faq, i) => (
                    <details key={i} className="group bg-slate-50 dark:bg-slate-700/20 rounded-xl overflow-hidden cursor-pointer transition-colors hover:bg-slate-100 dark:hover:bg-slate-700/40">
                      <summary className="p-4 font-semibold text-slate-900 dark:text-white list-none flex justify-between items-center outline-none">
                        {faq.question}
                        <span className="transition-transform group-open:rotate-180 text-slate-400">
                          <svg fill="none" height="20" width="20" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </span>
                      </summary>
                      <div className="px-4 pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-200/50 dark:border-slate-700/50 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                  {calculator.article.faqs.length === 0 && <p className="text-slate-500 italic">No FAQs available yet.</p>}
                </div>
              </div>

              {/* Conclusion */}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Conclusion</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-2">{calculator.article.conclusion}</p>
              </div>
           </article>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/calculator/:id" element={<CalculatorDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
