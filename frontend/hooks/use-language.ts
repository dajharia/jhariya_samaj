"use client"

import { useState, useEffect } from 'react';

export type Language = 'en' | 'hi';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    "History & Culture": "History & Culture",
    "Matrimony": "Matrimony",
    "Events": "Events",
    "Community": "Community",
    "News": "News",
    "Home": "Home",
    "Blog": "Blog",
    "Chat": "Chat",
    "Profile": "Profile",
    "Theme Settings": "Theme Settings",
    "Search": "Search",
    "Chats": "Chats",
    "Jhariya Samaj": "Jhariya Samaj",
    "Admin Dashboard": "Admin Dashboard",
    "Manage Members": "Manage Members",
    "Manage Content": "Manage Content",
    "Logout": "Logout",
    "Connected to Internet": "Connected to Internet",
    "No Internet Connection": "No Internet Connection",
  },
  hi: {
    "History & Culture": "इतिहास और संस्कृति",
    "Matrimony": "विवाह",
    "Events": "कार्यक्रम",
    "Community": "समुदाय",
    "News": "समाचार",
    "Home": "होम",
    "Blog": "ब्लॉग",
    "Chat": "चैट",
    "Profile": "प्रोफ़ाइल",
    "Theme Settings": "थीम सेटिंग्स",
    "Search": "खोजें",
    "Chats": "चैट्स",
    "Jhariya Samaj": "झारिया समाज",
    "Admin Dashboard": "एडमिन डैशबोर्ड",
    "Manage Members": "सदस्यों का प्रबंधन",
    "Manage Content": "कंटेंट प्रबंधन",
    "Logout": "लॉगआउट",
    "Connected to Internet": "इंटरनेट से जुड़ गए हैं",
    "No Internet Connection": "इंटरनेट कनेक्शन नहीं है",
  }
};

// ग्लोबल स्टेट जो बिना Context Provider के काम करेगा
let currentLanguage: Language = 'en';
const listeners = new Set<(lang: Language) => void>();

if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('language') as Language;
  if (stored === 'en' || stored === 'hi') {
    currentLanguage = stored;
  }
}

export const setGlobalLanguage = (lang: Language) => {
  if (currentLanguage === lang) return;
  currentLanguage = lang;
  if (typeof window !== 'undefined') localStorage.setItem('language', lang);
  
  // लूप के बीच में Set के टूटने (Mutate) से बचने के लिए इसे Array में बदलें
  const currentListeners = Array.from(listeners);
  currentListeners.forEach(listener => listener(lang));
};

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(currentLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLanguage(currentLanguage);
    
    const listener = (lang: Language) => setLanguage(lang);
    listeners.add(listener);
    
    return () => {
      listeners.delete(listener);
    };
  }, [language]);

  const t = (key: string) => {
    if (!mounted) return key; // SSR Hydration एरर से बचने के लिए
    return translations[language]?.[key] || key;
  };

  return { language, setLanguage: setGlobalLanguage, t, mounted };
}
