import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import flower1 from "@/assets/flower-1.png";
import flower2 from "@/assets/flower-2.png";
import flower3 from "@/assets/flower-3.png";
import flower4 from "@/assets/flower-4.png";
import flower5 from "@/assets/flower-5.png";
import flower6 from "@/assets/flower-6.png";
import hatIcon from "@/assets/hat.png";
import hat2 from "@/assets/hat2.png";
import hand1 from "@/assets/hand1.png";
import skyFlowersPng from "@/assets/sky-flowers.png";

const BikiniBottomSection = () => {
  const { t } = useTranslation();
  const [bgImage, setBgImage] = useState<string>("");
  const [showAnalysis, setShowAnalysis] = useState(false);

  const flowerImages = useMemo(() => [flower1, flower2, flower3, flower4, flower5, flower5, flower5, flower6], []);

  const floatingFlowers = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      image: flowerImages[Math.floor(Math.random() * flowerImages.length)],
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * -20}s`,
      animationDuration: `${15 + Math.random() * 15}s`,
      animationType: `animate-float-depth-${Math.floor(Math.random() * 3) + 1}`,
      size: `${5 + Math.random() * 6}rem`, // varies between ~80px and ~176px
    }));
  }, [flowerImages]);

  useEffect(() => {
    // Function to pick a new random background from 1 to 8
    const setRandomBg = () => {
      const randomNum = Math.floor(Math.random() * 8) + 1;
      setBgImage((prev) => {
        const nextBg = `${import.meta.env.BASE_URL}images/bikini-bottom-bg/bg${randomNum}.jpg`;
        // Prevent selecting the same background twice in a row if possible
        return prev === nextBg ? `${import.meta.env.BASE_URL}images/bikini-bottom-bg/bg${(randomNum % 8) + 1}.jpg` : nextBg;
      });
    };

    // Set initial background on mount
    setRandomBg();

    // Change background every 7 minutes (7 * 60 * 1000 = 420000 ms)
    const intervalId = setInterval(setRandomBg, 420000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      {/* Fixed Full-Screen Background */}
      <div className="fixed inset-0 w-full h-full z-[-1] bg-black/20">
        {bgImage && (
          <img 
            src={bgImage} 
            alt="Bikini Bottom Background" 
            className="absolute inset-0 w-full h-full object-cover animate-fade-in transition-opacity duration-1000"
          />
        )}
        {/* Dark overlay to ensure text readability against the varied backgrounds */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

        {/* Floating Decorative Elements (Background Layer) */}
        {floatingFlowers.map((flower) => (
          <img
            key={flower.id}
            src={flower.image}
            className={`absolute ${flower.animationType} z-0 pointer-events-none drop-shadow-md`}
            style={{
              width: flower.size,
              height: flower.size,
              top: flower.top,
              left: flower.left,
              animationDelay: flower.animationDelay,
              animationDuration: flower.animationDuration,
            }}
            alt=""
          />
        ))}
      </div>

      <section className="animate-fade-in-up w-full flex flex-col items-center justify-center pt-4 relative z-10">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-white mb-8 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [-webkit-text-stroke:1px_rgba(0,0,0,0.5)] px-4">
            {t('bikini_bottom.title')}
          </h2>

          <div className="flex flex-col items-center max-w-4xl mx-auto relative px-4 text-left gap-8 md:gap-12">
            {/* Bikini Bottom Card */}
            <div className="w-full rounded-2xl bg-[#002f5a]/70 backdrop-blur-md p-6 md:p-8 shadow-2xl border-2 md:border-4 border-[#00e5ff]/50">
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-[#00e5ff] mb-4 drop-shadow-md border-b-2 border-white/20 pb-3">{t('bikini_bottom.bb_title')}</h3>
              <p className="font-body text-white/95 leading-relaxed text-sm md:text-[17px]">
                {t('bikini_bottom.bb_desc')}
              </p>
              <ul className="mt-6 space-y-4 font-body text-white/95 text-sm md:text-[16px]">
                <li className="flex items-start gap-3 md:gap-4"><img src={hatIcon} alt="" className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 drop-shadow-[0_0_8px_gold] -mt-1" /> {t('bikini_bottom.bb_point1')}</li>
                <li className="flex items-start gap-3 md:gap-4"><img src={hatIcon} alt="" className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 drop-shadow-[0_0_8px_cyan] -mt-1" /> {t('bikini_bottom.bb_point2')}</li>
                <li className="flex items-start gap-3 md:gap-4"><img src={hatIcon} alt="" className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 drop-shadow-[0_0_8px_orange] -mt-1" /> {t('bikini_bottom.bb_point3')}</li>
              </ul>
            </div>

            {/* Connection Flow Box */}
            <div className="flex flex-col items-center justify-center relative w-full translate-y-2">
              <div className="w-2 h-10 md:h-16 bg-transparent border-l-4 border-dashed border-[#ff006e] opacity-80 mb-2"></div>
              <div className="relative group flex flex-col items-center w-full max-w-2xl">
                <div className="bg-[#fff9e6]/70 backdrop-blur-md border-4 border-dashed border-[#e85d04] rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <div className="relative z-10 text-center md:text-left">
                    <h4 className="font-display text-2xl md:text-3xl text-[#d00000] mb-3">{t('bikini_bottom.connection_title')}</h4>
                    <p className="font-body text-[#370617] font-semibold leading-relaxed text-sm md:text-[17px]">
                      {t('bikini_bottom.connection_text')}
                    </p>
                  </div>
                </div>
                <img src={skyFlowersPng} className="hidden sm:block w-28 h-28 absolute -top-12 -right-8 animate-[spin_12s_linear_infinite] opacity-90 z-20 pointer-events-none" alt="" />
                <img src={skyFlowersPng} className="hidden sm:block w-24 h-24 absolute -bottom-10 -left-6 animate-[spin_10s_linear_infinite_reverse] opacity-90 z-20 pointer-events-none" alt="" />
              </div>
              <div className="w-2 h-10 md:h-16 bg-transparent border-l-4 border-dashed border-[#ff006e] opacity-80 mt-2"></div>
            </div>

            {/* Bikini Atoll Card */}
            <div className="w-full rounded-2xl bg-[#5a0000]/70 backdrop-blur-md p-6 md:p-8 shadow-2xl border-2 md:border-4 border-[#ff4d4d]/50">
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-[#ff8080] mb-4 drop-shadow-md border-b-2 border-white/20 pb-3">{t('bikini_bottom.ba_title')}</h3>
              <p className="font-body text-white/95 leading-relaxed text-sm md:text-[17px]">
                {t('bikini_bottom.ba_desc')}
              </p>
              <ul className="mt-6 space-y-4 font-body text-white/95 text-sm md:text-[16px]">
                <li className="flex items-start gap-3 md:gap-4"><img src={hat2} alt="" className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 drop-shadow-[0_0_8px_orange] -mt-1" /> {t('bikini_bottom.ba_point1')}</li>
                <li className="flex items-start gap-3 md:gap-4"><img src={hat2} alt="" className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 drop-shadow-[0_0_8px_red] -mt-1" /> {t('bikini_bottom.ba_point2')}</li>
                <li className="flex items-start gap-3 md:gap-4"><img src={hat2} alt="" className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 drop-shadow-[0_0_8px_lightgreen] -mt-1" /> {t('bikini_bottom.ba_point3')}</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 md:mt-12 rounded-2xl bg-black/60 backdrop-blur-md p-6 border-2 border-sponge-yellow/40 shadow-xl max-w-4xl mx-auto px-6">
            <p className="font-body text-sm md:text-[16px] text-white/95 italic flex items-start justify-center gap-3">
              <img src={hand1} alt="Hand" className="w-5 h-5 md:w-6 md:h-6 object-contain flex-shrink-0 mt-1" />
              <span className="text-left leading-relaxed">{t('bikini_bottom.fun_fact').replace('💡 ', '')}</span>
            </p>
          </div>

          <div className="flex justify-center mt-8 md:mt-12 mb-6">
            <button
              onClick={() => setShowAnalysis(!showAnalysis)}
              className="px-6 md:px-8 py-3 rounded-full bg-[#00e5ff] text-[#002f5a] font-display text-base md:text-lg shadow-[0_0_15px_rgba(0,229,255,0.6)] hover:scale-105 transition-all"
            >
              {showAnalysis ? t('bikini_bottom.hide_analysis') : t('bikini_bottom.read_more')}
            </button>
          </div>

          {/* Thesis Content Area */}
          <div className={`transition-all duration-700 overflow-hidden ${showAnalysis ? 'max-h-[5000px] opacity-100 mt-6 md:mt-10 w-full max-w-4xl mx-auto space-y-8 md:space-y-12 pb-16 px-4' : 'max-h-0 opacity-0'}`}>
            <div className="rounded-[2rem] md:rounded-[2.5rem] bg-[#f8f9fa]/95 p-6 md:p-12 border-4 border-[#219ebc] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#8ecae6]/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 text-center md:text-left">
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-[#023047] mb-6 md:mb-8 border-b-4 border-[#ffb703] pb-4 inline-block">{t('bikini_bottom.thesis_statement_title')}</h3>
                <p className="font-body text-lg md:text-xl text-[#1d3557] leading-relaxed font-semibold">
                  {t('bikini_bottom.thesis_statement_text')}
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] md:rounded-[2.5rem] bg-[#0d1b2a]/90 backdrop-blur-xl p-6 md:p-12 border-4 border-[#64dfdf] shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#64dfdf] via-[#7400b8] to-[#5390d9]"></div>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-[#80ffdb] mb-8 md:mb-10 text-center drop-shadow-md">
                {t('bikini_bottom.thesis_proposal_title')}
              </h3>
              <div className="space-y-6 text-[#e0e1dd] font-body text-sm md:text-[17px] leading-7 md:leading-8 text-justify">
                <p className="indent-4 md:indent-8">{t('bikini_bottom.thesis_proposal_p1')}</p>
                <p className="indent-4 md:indent-8">{t('bikini_bottom.thesis_proposal_p2')}</p>
                <p className="indent-4 md:indent-8">{t('bikini_bottom.thesis_proposal_p3')}</p>
                <p className="indent-4 md:indent-8">{t('bikini_bottom.thesis_proposal_p4')}</p>
                <p className="indent-4 md:indent-8">{t('bikini_bottom.thesis_proposal_p5')}</p>
                <p className="indent-4 md:indent-8">{t('bikini_bottom.thesis_proposal_p6')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BikiniBottomSection;
