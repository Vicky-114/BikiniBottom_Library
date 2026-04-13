import { useState } from "react";
import { Play } from "lucide-react";
import pageBg from "@/assets/game_bg.jpeg";
import gameScreen from "@/assets/bg_bikini_bottom.jpg";

const GameSection = () => {
    const handlePlayClick = () => {
        window.open('https://vicky-114.github.io/bikini_bottom_residence_test/', '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            {/* Fixed Full-Screen Background */}
            <div
                className="fixed inset-0 w-full h-full z-[-1] transition-opacity duration-1000"
                style={{
                    backgroundImage: `url(${pageBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
            </div>

            <section className="animate-fade-in-up w-full flex flex-col items-center justify-center pt-10 relative z-10 px-4">
                <div className="rounded-3xl bg-white/50 p-6 md:p-10 border-2 border-primary/50 shadow-2xl text-center w-full max-w-5xl mx-auto backdrop-blur-md">
                    
                    {/* External Game Launcher Container */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-black/10 transition-all duration-500 hover:shadow-primary/20">
                        <div 
                            className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer group transition-all duration-500"
                            onClick={handlePlayClick}
                        >
                            {/* Launcher Background */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${gameScreen})` }}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                            
                            {/* Play Button Overlay */}
                            <div className="relative z-30 flex flex-col items-center gap-4 scale-90 group-hover:scale-100 transition-transform duration-500">
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Play className="w-10 h-10 md:w-14 md:h-14 fill-current ml-1" />
                                </div>
                            </div>
                            
                            {/* Pulse Effect */}
                            <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white/50 animate-ping" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GameSection;
