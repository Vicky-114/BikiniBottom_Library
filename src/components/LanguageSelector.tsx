import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import languageIcon from '@/assets/language.png';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ru', label: 'Русский' },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block z-50 pointer-events-auto" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center gap-1 px-3 md:px-6 py-2 rounded-full border-2 border-[#002f5a] font-display text-xs md:text-sm text-foreground/75 bg-white hover:bg-white/90 transition-colors shadow-sm whitespace-nowrap"
                aria-label="Select Language"
            >
                <img src={languageIcon} alt="Language" className="w-[26px] h-[26px] object-contain" />
                <span>Language</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white/90 backdrop-blur-md shadow-lg border-2 border-primary overflow-hidden">
                    <ul className="flex flex-col py-1">
                        {languages.map((lng) => (
                            <li key={lng.code}>
                                <button
                                    onClick={() => changeLanguage(lng.code)}
                                    className={`w-full text-left px-4 py-2 font-display text-sm transition-colors hover:bg-primary/10 ${i18n.language === lng.code ? 'text-primary font-bold bg-primary/5' : 'text-ocean-deep'}`}
                                >
                                    {lng.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
