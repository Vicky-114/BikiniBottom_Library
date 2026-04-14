import { useState, useEffect, useMemo } from "react";
import homeIcon from "@/assets/home.png";
import menuIcon from "@/assets/menu.png";
import { useTranslation } from "react-i18next";
import LanguageSelector from "@/components/LanguageSelector";
import homeCover from "@/assets/home-cover.webp";
import logoImage from "@/assets/logo.png";
import BikiniBottomSection from "@/components/BikiniBottomSection";
import CharactersSection from "@/components/CharactersSection";
import LocationsSection from "@/components/LocationsSection";
import FoodSection from "@/components/FoodSection";
import GameSection from "@/components/GameSection";
import CatchKingJ from "@/components/CatchKingJ";
import netIcon from "@/assets/net1.png";

import navFactImg from "@/assets/nav_fact.png";
import navCharacterImg from "@/assets/nav_character.png";
import navLocationImg from "@/assets/nav_location.png";
import navFoodImg from "@/assets/nav_food.png";
import navGameImg from "@/assets/nav_game.png";

const Index = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("intro");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "bikini-bottom", label: t('nav.fact_label'), shortLabel: t('nav.fact_short'), image: navFactImg },
    { id: "characters", label: t('nav.char_label'), shortLabel: t('nav.char_short'), image: navCharacterImg },
    { id: "locations", label: t('nav.loc_label'), shortLabel: t('nav.loc_short'), image: navLocationImg },
    { id: "food", label: t('nav.food_label'), shortLabel: t('nav.food_short'), image: navFoodImg },
    { id: "game", label: t('nav.game_label'), shortLabel: t('nav.game_short'), image: navGameImg },
  ];

  const floatingPos = useMemo(() => {
    // Detect mobile: use smaller spread so icons don't fall off-screen on narrow viewports
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    return navItems.map((_, i) => ({
      // On mobile: tighter vertical band; on desktop: original layout
      top: isMobile
        ? `${40 + (i % 2 === 0 ? 0 : 18) + Math.random() * 4}%`
        : `${30 + (i % 2 === 0 ? 0 : 15) + Math.random() * 3}%`,
      left: isMobile
        ? `${10 + (i * 16) + Math.random() * 4}%`
        : `${18 + (i * 12) + Math.random() * 3}%`,
      delay: (Math.random() * 10) * -1,
      duration: 22 + Math.random() * 12
    }));
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "intro":
        return <CatchKingJ onCatch={() => setActiveSection("home")} />;
      case "home":
        return (
          <div className="fixed inset-0 z-10">
            <img src={homeCover} alt="Bikini Bottom" className="w-full h-full object-cover" />
          </div>
        );
      case "bikini-bottom":
        return <BikiniBottomSection />;
      case "characters":
        return <CharactersSection />;
      case "locations":
        return <LocationsSection />;
      case "food":
        return <FoodSection />;
      case "game":
        return <GameSection />;
      default:
        return null;
    }
  };

  const isHome = activeSection === "home";
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    if (activeSection === 'intro') return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [activeSection]);

  return (
    <div className={`min-h-screen flex flex-col relative ${activeSection !== 'intro' ? 'cursor-none' : ''}`}>
      {/* Global Net Cursor */}
      {activeSection !== 'intro' && (
        <div 
          className="fixed pointer-events-none z-[999999]"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: 'translate(-25%, -35%)', // Adjusted to align the true browser click precisely with the net opening
          }}
        >
          <img 
            src={netIcon} 
            alt="net cursor" 
            className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-md select-none"
            style={{ transform: 'rotate(-15deg)' }}
          />
        </div>
      )}
      {/* Background image for home */}
      {isHome && (
        <div className="fixed inset-0 -z-10">
          <img src={homeCover} alt="Bikini Bottom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/35" />
        </div>
      )}

      <div className={`min-h-screen flex flex-col ${isHome || activeSection === 'intro' || activeSection === 'bikini-bottom' || activeSection === 'characters' || activeSection === 'locations' || activeSection === 'food' || activeSection === 'game' ? '' : 'bg-background'}`}>
        {/* Title - full width, top */}
        {activeSection !== 'intro' && (
          <div className="-mt-8 md:-mt-12 lg:-mt-16">
            <header className={`w-full pt-4 pb-4 px-4 relative z-10 flex flex-col items-center justify-center gap-1 ${isHome ? 'min-h-[40vh] md:min-h-[35vh]' : 'mt-4'}`}>
              {isHome && (
                <div className="absolute top-3 right-3 sm:top-[21vh] sm:right-4 md:right-12 z-50">
                  <LanguageSelector />
                </div>
              )}
            <img src={logoImage} alt="Pattern Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-md animate-bubble" />
            <h1 className="font-display leading-tight text-center tracking-wide text-[#002f5a] [-webkit-text-stroke:1px_rgba(0,255,255,0.9)] md:[-webkit-text-stroke:1.5px_rgba(0,255,255,0.9)] drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] md:drop-shadow-[0_0_12px_rgba(0,255,255,0.8)]">
              {isHome ? (
                <>
                  <span className="text-xl sm:text-2xl md:text-5xl lg:text-6xl">{t('home.title_part1')}</span>
                  <br />
                  <span className="text-xl sm:text-2xl md:text-4xl lg:text-6xl mt-1 sm:mt-2 md:mt-3 block tracking-wider md:tracking-widest">{t('home.title_part2')}</span>
                </>
              ) : (
                <span className="text-xl sm:text-2xl md:text-4xl lg:text-6xl mt-1 sm:mt-2 md:mt-3 block tracking-wider md:tracking-widest whitespace-pre-line">
                  {navItems.find(item => item.id === activeSection)?.label}
                </span>
              )}
            </h1>
          </header>
        </div>
        )}

        {/* Toolbar row: Menu and Language placement */}
        {activeSection !== 'intro' && (
          <div className="w-full px-4 md:px-12 pb-2 relative z-[80] mt-4 md:mt-2 flex items-start justify-between">
            {isHome ? (
              /* Navigation menu: Scattered randomly across the screen */
              <div className="relative w-[100%] h-[75vh] mx-auto pointer-events-none mt-[-5vh]">
                {navItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute pointer-events-auto group animate-drift-${(index % 5) + 1}`}
                    style={{
                      top: floatingPos[index]?.top,
                      left: floatingPos[index]?.left,
                      animationDelay: `${floatingPos[index]?.delay}s`,
                      animationDuration: `${floatingPos[index]?.duration}s`
                    }}
                  >
                    <button
                      onClick={() => setActiveSection(item.id)}
                      className="group relative transition-all duration-300 hover:scale-[1.15] hover:rotate-2 active:scale-95 cursor-none focus:outline-none w-[60px] sm:w-[70px] md:w-[88px] lg:w-[120px] h-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_8px_8px_rgba(0,0,0,0.7)]"
                    >
                      <img 
                        src={item.image} 
                        alt={item.shortLabel} 
                        className="w-full h-auto object-contain pointer-events-none select-none transition-transform" 
                      />
                    </button>
                    {/* Tooltip visible on hover (Desktop only for better UX) */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[100%] mt-[5px] px-4 py-2 bg-black/75 text-white/75 text-sm font-display rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none whitespace-pre-line text-center w-max max-w-[280px] z-50">
                      {item.label}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-[6px] border-transparent border-b-black/75"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Dropdown menu for inner pages — compact horizontal row on all screen sizes */
              <div className="w-full flex justify-between items-center z-[100] mt-2 ml-0 md:ml-4 overflow-visible">
                {/* Left Side: Home + Menu in a horizontal row */}
                <div className="flex flex-row items-center gap-2 relative z-50">
                  <button
                    onClick={() => {
                      setActiveSection("home");
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-1 px-3 md:px-6 py-2 rounded-full border-2 border-[#002f5a] font-display text-xs md:text-sm text-foreground/75 bg-white hover:bg-white/90 transition-colors shadow-sm whitespace-nowrap"
                  >
                    <img src={homeIcon} alt="Home" className="w-[26px] h-[26px] object-contain" />
                    {t('nav.home')}
                  </button>
                  <div className="relative inline-block">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="flex items-center justify-center gap-1 px-3 md:px-6 py-2 rounded-full border-2 border-[#002f5a] font-display text-xs md:text-sm text-foreground/75 bg-white hover:bg-white/90 transition-colors shadow-sm min-w-[70px] md:min-w-[100px]"
                    >
                        <img src={menuIcon} alt="Menu" className="w-[26px] h-[26px] object-contain" />
                      {t('nav.menu')}
                    </button>
                  {isMenuOpen && (
                    <div className="absolute mt-2 left-0 min-w-max border-2 border-primary rounded-xl bg-white/70 backdrop-blur-md shadow-lg overflow-visible">
                      <nav className="flex flex-col">
                        {navItems.map((item) => (
                          <div key={item.id} className="relative group w-full">
                            <button
                              onClick={() => {
                                setActiveSection(item.id);
                                setIsMenuOpen(false);
                              }}
                              className={`w-full px-5 py-3 whitespace-nowrap font-display flex items-center justify-start gap-4 text-sm md:text-base transition-colors border-b last:border-b-0 border-primary/20 hover:bg-primary/10 text-[#002f5a] ${activeSection === item.id ? "bg-primary/20 font-bold" : ""}`}
                            >
                              <div className="w-[30px] flex justify-center">
                                <img src={item.image} alt={item.id} className="w-full h-[30px] object-contain shrink-0" />
                              </div>
                              {item.shortLabel}
                            </button>
                            {/* Tooltip visible on hover */}
                            <div className="hidden lg:block absolute left-full top-0 ml-2 px-4 py-2 bg-black/75 text-white/75 text-sm font-display rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none whitespace-pre-line text-left w-max max-w-[280px] z-50 shadow-lg">
                              {item.label}
                              <div className="absolute -left-2 top-3 border-[6px] border-transparent border-r-black/75"></div>
                            </div>
                          </div>
                        ))}
                      </nav>
                    </div>
                  )}
                </div>
               </div>
               
               {/* Right Side: Language Block */}
               <div className="relative z-50 mr-1 md:mr-8">
                  <LanguageSelector />
               </div>
              </div>
            )}
          </div>
        )}

        {/* Main content area */}
        <main className="flex-1 w-full px-4 md:px-6 pb-10 relative z-0 mt-4 md:mt-0">
          <div className="max-w-5xl mx-auto">
            {renderSection()}
          </div>
        </main>

        {/* Footer bar */}
        <footer className="w-full border-t-2 px-4 mb-6 relative z-10" style={{ borderColor: isHome ? 'rgba(255,255,255,0.3)' : undefined }}>
          <div className="pt-4 text-center">
            <p className={`font-body text-[12px] md:text-sm ${isHome ? 'text-white/70' : 'text-muted-foreground'}`}>
              {t('home.footer')}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
