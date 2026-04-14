import { useState, useEffect } from "react";
import { ArrowLeft, Star, StarHalf, MapPin, Target, Users, ThumbsDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import locationsBg from "@/assets/new-locations-bg.jpg";
import map1 from "@/assets/map1.jpg";

const LocationsSection = () => {
  const { t } = useTranslation();
  const [selectedLocName, setSelectedLocName] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowMap(false);
    };
    if (showMap) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showMap]);

  const starRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<StarHalf key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return <div className="flex gap-0.5">{stars}</div>;
  };

  const locations = [
    { 
      name: "SpongeBob’s Pineapple House", 
      description: "A fully furnished pineapple that literally fell off a boat and became a home.", 
      purpose: "Residence of SpongeBob SquarePants and Gary the Snail",
      specificLocation: "124 Conch Street",
      rating: 5,
      visitors: "Patrick, Squidward (unwillingly), Sandy",
      hates: "Squidward (when it gets too loud)",
      icon: "🍍" 
    },
    { 
      name: "Patrick’s Rock", 
      description: "A simple brown rock that opens up on a hinge to reveal a sandy living space.", 
      purpose: "Residence of Patrick Star",
      specificLocation: "120 Conch Street",
      rating: 4,
      visitors: "SpongeBob, The Flying Dutchman",
      hates: "Anyone who tries to clean it",
      icon: "🪨" 
    },
    { 
      name: "Squidward’s Easter Island House", 
      description: "A massive stone moai head reflecting Squidward's sophisticated but grumpy personality.", 
      purpose: "Residence of Squidward Tentacles",
      specificLocation: "122 Conch Street",
      rating: 4.5,
      visitors: "SpongeBob and Patrick (frequent intruders)",
      hates: "SpongeBob and Patrick",
      icon: "🗿" 
    },
    { 
      name: "Krusty Krab", 
      description: "Home of the Krabby Patty and the most successful restaurant in Bikini Bottom.", 
      purpose: "Fast Food Restaurant",
      specificLocation: "831 Conch Street",
      rating: 5,
      visitors: "The entire Bikini Bottom population",
      hates: "Plankton",
      image: "https://media.tenor.com/R90kXB3iBcgAAAAC/bh187-spongebob.gif" 
    },
    { 
      name: "Chum Bucket", 
      description: "Plankton's failing laboratory-themed restaurant shaped like a giant metal bucket.", 
      purpose: "Failed Restaurant & Evil Laboratory",
      specificLocation: "Directly across from the Krusty Krab",
      rating: 0.5,
      visitors: "Plankton, Karen, occasionally a confused tourist",
      hates: "Everyone except Plankton",
      image: "https://media.tenor.com/Dzfb4Z5CaXEAAAAC/spongebob-mr-krabs.gif" 
    },
    { 
      name: "Boating School", 
      description: "Mrs. Puff's academy where residents learn the art of driving boatmobiles.", 
      purpose: "Educational Institution",
      specificLocation: "Bikini Bottom Outskirts",
      rating: 2,
      visitors: "SpongeBob (permanently), Mrs. Puff",
      hates: "SpongeBob (according to Mrs. Puff), Squidward",
      image: "https://media.tenor.com/NBkJlclgORQAAAAC/spongebob-squarepants-patrick-star.gif" 
    },
    { 
      name: "Jellyfish Fields", 
      description: "A vast meadow filled with wild jellyfish. Over 4 million residents!", 
      purpose: "Nature Reserve & Recreational Area",
      specificLocation: "West of Bikini Bottom",
      rating: 5,
      visitors: "SpongeBob, Patrick, Kevin C. Cucumber",
      hates: "People who use improper nets",
      image: "https://media.tenor.com/I6fKCL_Ck5YAAAAC/sppongebob-squarepants-fun-song-f-is-for-friends-who-do-stuff-together-spongebob-squarepants.gif" 
    },
    { 
      name: "Goo Lagoon", 
      description: "A brine-pool beach located underwater. Great for surfing!", 
      purpose: "Beach & Recreational Facility",
      specificLocation: "The Coast of Bikini Bottom",
      rating: 4.5,
      visitors: "Larry the Lobster, Surfers, Muscle Fish",
      hates: "Rainy days (underwater...)",
      image: "https://media.tenor.com/bX_Tt3ZBSPEAAAAC/spongebob-patrick.gif" 
    },
    { 
      name: "Sandy’s Treehouse", 
      description: "A fully developed oak tree growing inside an airtight dome. A slice of Texas!", 
      purpose: "Residence & Laboratory for Sandy Cheeks",
      specificLocation: "Bikini Bottom Residential District",
      rating: 5,
      visitors: "SpongeBob, Patrick (must wear water helmets)",
      hates: "Water leaks",
      icon: "🐿️" 
    },
    { 
      name: "Rock Bottom", 
      description: "A spooky, deep-sea trench at the end of a vertical vertical vertical hill.", 
      purpose: "Deep Sea City",
      specificLocation: "Beneath the main city shelf",
      rating: 3.5,
      visitors: "Strange bioluminescent creatures",
      hates: "Travelers who miss the bus",
      image: "https://media.tenor.com/B1oOvvQ8BLEAAAAC/walking-dead-shane-gillis.gif" 
    },
    { 
      name: "Bikini Bottom Mall", 
      description: "The city's main shopping destination, shaped like a giant ship.", 
      purpose: "Shopping & Entertainment",
      specificLocation: "Downtown Retail District",
      rating: 4,
      visitors: "Pearl Krabs, Teenagers, Shoppers",
      hates: "Mr. Krabs (due to high prices)",
      image: "https://media.tenor.com/Nic4QCLGrgEAAAAC/spongebob-squarepants-spongebob.gif" 
    },
    { 
      name: "King Neptune’s Palace", 
      description: "A massive, golden palace in Atlantis where the god of the sea resides.", 
      purpose: "Royal Residence",
      specificLocation: "Atlantis",
      rating: 5,
      visitors: "Royal Guard, King Neptune, Mindy",
      hates: "Thieves (especially crown thieves!)",
      icon: "👑" 
    },
    { name: "Boating School Library", description: "A quiet place of learning. Rarely visited by SpongeBob.", purpose: "Library", specificLocation: "Inside Boating School", rating: 3, visitors: "Studious fish", hates: "Loud noises", image: "https://media.tenor.com/rU4yq3MjZJoAAAAC/spongebob-patrick.gif" },
    { name: "Bikini Bottom Hospital", description: "Handles everything from 'suds' to 'explosive hiccups'.", purpose: "Medical Center", specificLocation: "Industrial District", rating: 4, visitors: "Injured fish, Dr. Gill Gilliam", hates: "Germs", image: "https://media.tenor.com/n2-FcLJN7T4AAAAC/spongebob-battle-for-bikini-bottom.gif" },
    { name: "Bikini Bottom Police Station", description: "Deals with littering and world-domination attempts.", purpose: "Law Enforcement", specificLocation: "Downtown", rating: 3.5, visitors: "Police officers, criminals", hates: "Lawbreakers", image: "https://media.tenor.com/6xpiDZc5lhgAAAAC/ziarastar.gif" },
    { name: "Bikini Bottom Prison", description: "Where those who break the laws of the sea are sent.", purpose: "High Security Prison", specificLocation: "Outskirts", rating: 1, visitors: "Plankton (frequent guest), Dirty Bubble", hates: "Inmates", image: "https://media.tenor.com/6xpiDZc5lhgAAAAC/ziarastar.gif" },
    { name: "City Hall", description: "The political center where the Mayor handles civic duties.", purpose: "Civic Center", specificLocation: "City Center", rating: 3, visitors: "The Mayor, Citizens", hates: "Protests", image: "https://media.tenor.com/RICCYVztA34AAAAC/this-place-is-the-coolest-spongebob-squarepants.gif" },
    { name: "Goofy Goober Ice Cream Boat", description: "A nautical-themed ice cream parlor and entertainment venue.", purpose: "Party Venue", specificLocation: "Boardwalk", rating: 5, visitors: "SpongeBob, Patrick, Kids", hates: "Grumpy adults", image: "https://media.tenor.com/mU-CJIC74dkAAAAC/spongebob-spongebob-squarepants.gif" },
    { name: "Barg'N-Mart", description: "The local supermarket for canned kelp and bubble soap.", purpose: "Supermarket", specificLocation: "Commercial Zone", rating: 4, visitors: "Everyone needing groceries", hates: "Long lines", image: "https://media.tenor.com/TAViwV4LJl8AAAAC/barg-n-mart-spongebob-squarepants.gif" },
    { name: "Fancy Restaurant", description: "An upscale dining establishment for special occasions.", purpose: "Fine Dining", specificLocation: "Uptown", rating: 4.5, visitors: "Squidward, Pearl, Mr. Krabs (when someone else pays)", hates: "Poor table manners", image: "https://media.tenor.com/WfVPBqIGut8AAAAC/fine-dining-spongebob.gif" },
    { name: "Salty Spitoon", description: "The toughest club in the ocean. No weenies allowed!", purpose: "Tough-Only Club", specificLocation: "The Docks", rating: 4, visitors: "Reg, Muscle Fish, Tough guys", hates: "Weenies", image: "https://media.tenor.com/5nM6mEOgH7cAAAAC/the-salty-spitoon-spongebob.gif" },
    { name: "Weenie Hut Jr", description: "A soft and friendly alternative to the Salty Spitoon.", purpose: "Safe Space for Weenies", specificLocation: "Across from Salty Spitoon", rating: 3, visitors: "The robot waiter, SpongeBob", hates: "Aggression", image: "https://media.tenor.com/MHGf2zvM0iMAAAAC/brandon-flowers-the-killers.gif" },
    { 
      name: "Kelp Shake", 
      description: "A trendy juice bar franchise that once took over the town with its addictive neon-green beverages.", 
      purpose: "Juice Bar Franchise",
      specificLocation: "Various locations across Bikini Bottom",
      rating: 4.5,
      visitors: "Almost everyone in town",
      hates: "Plankton (competition), Health inspectors",
      image: "https://media.tenor.com/USQa-39V_MYAAAAC/spongebob-squarepants-spongebob.gif" 
    },
    { 
      name: "Kelp Forest", 
      description: "A dense, dark underwater jungle where it's easy to get lost or find the Magic Conch.", 
      purpose: "Wilderness & Nature Reserve",
      specificLocation: "Far outskirts of Bikini Bottom",
      rating: 4,
      visitors: "SpongeBob, Patrick, Squidward (accidentally)",
      hates: "Lost travelers, The Flying Dutchman",
      image: "https://media.tenor.com/zcFL7y7LyRwAAAAC/spongebob-spongebob-squarepants.gif" 
    },
    { 
      name: "Coral Forest", 
      description: "A beautiful and vibrant ecosystem filled with various types of bioluminescent coral.", 
      purpose: "Nature Reserve",
      specificLocation: "East of Jellyfish Fields",
      rating: 4.5,
      visitors: "Nature enthusiasts, Tourists",
      hates: "Coral harvesters",
      image: "https://media.tenor.com/bJrE9U1XZWgAAAAC/tiptoeing-spongebob-squarepants.gif" 
    },
    { 
      name: "The Deep Sea", 
      description: "The vast, mysterious regions beyond the city limits where strange creatures roam.", 
      purpose: "Exploration Zone",
      specificLocation: "Beyond the Bikini Bottom shelf",
      rating: 3,
      visitors: "Deep sea monsters, Adventurers",
      hates: "Sunlight lovers",
      image: "https://media.tenor.com/BM9vjRQJhrYAAAAC/defend-the-deep-stop-deep-seabed-mining.gif" 
    },
    { 
      name: "The Abyss", 
      description: "The deepest parts of the ocean floor, where the pressure is immense and the light is scarce.", 
      purpose: "Extreme Depths",
      specificLocation: "The bottom-most point of the trench",
      rating: 2,
      visitors: "Bioluminescent angler fish",
      hates: "Those with claustrophobia",
      image: "https://media.tenor.com/zWE1-Lz8-9gAAAAC/playing-piano-spongebob.gif" 
    },
    { 
      name: "Sandy’s Laboratory", 
      description: "A high-tech research facility located within Sandy's Treedome for complex inventions.", 
      purpose: "Scientific Research & Invention",
      specificLocation: "Inside Sandy's Treedome",
      rating: 5,
      visitors: "Sandy Cheeks, SpongeBob (Assistant)",
      hates: "Anti-science fish, Karate rule-breakers",
      icon: "🧪" 
    },
    { 
      name: "Squilliam Mansion", 
      description: "A luxurious and opulent estate belong to Squidward's incredibly wealthy rival.", 
      purpose: "Elite Residence",
      specificLocation: "The most expensive part of town",
      rating: 4.5,
      visitors: "Squilliam Fancyson, The upper class",
      hates: "Squidward, Mr. Krabs (due to envy)",
      image: "https://media.tenor.com/hUyJ8NHG-ZAAAAAC/spongebob-house-fancy.gif" 
    },
    { 
      name: "Bikini Bottom Cemetery", 
      description: "A quiet and somber resting place, often visited for spooky nighttime adventures.", 
      purpose: "Public Cemetery & Haunted Site",
      specificLocation: "Quiet outskirts of the city",
      rating: 2,
      visitors: "The Flying Dutchman, Mourners, Ghost hunters",
      hates: "Those afraid of the dark",
      image: "https://media.tenor.com/n2-FcLJN7T4AAAAC/spongebob-battle-for-bikini-bottom.gif" 
    },
    { 
      name: "Old Man Jenkins’ House", 
      description: "A modest but well-maintained home belonging to one of Bikini Bottom's oldest and most frequently inconvenienced residents.", 
      purpose: "Residence of Old Man Jenkins",
      specificLocation: "Residential District",
      rating: 4,
      visitors: "SpongeBob (occasionally), Family members",
      hates: "Noisy neighbors, Flying boatmobiles crashing into his yard",
      icon: "🏚️" 
    },
    { 
      name: "The Flying Dutchman’s Ship", 
      description: "A ghostly, green-glowing pirate ship that sails both the sea and the sky. This legendary vessel is inspired by the legendary ghost ship of maritime folklore and has appeared in various films and myths as a symbol of the spectral seas.", 
      purpose: "Residence and vehicle of the Flying Dutchman",
      specificLocation: "Wandering (often found near the Cemetery)",
      rating: 5,
      visitors: "SpongeBob, Patrick (acting as crew), Ghosts",
      hates: "People who don't believe in him, Being 'sold' on eBay",
      icon: "🏴‍☠️" 
    },
  ];

  const selectedLoc = locations.find((l) => l.name === selectedLocName);

  return (
    <>
      <div
        className="fixed inset-0 w-full h-full z-[-1] transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${locationsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
      </div>

      <section className="animate-fade-in-up relative z-10 w-full pt-4">
        {selectedLoc ? (
          <div className="animate-fade-in-up">
            <button
              onClick={() => setSelectedLocName(null)}
              className="flex items-center gap-2 mb-6 px-4 py-2 rounded-xl bg-white/70 hover:bg-white/90 text-ocean-deep font-display text-sm transition-all shadow-sm border-2 border-primary"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('locations.back')}
            </button>
            <div className="rounded-2xl bg-white/80 p-5 md:p-8 border-2 border-primary/50 shadow-lg">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6 text-center md:text-left">
                <span className="text-6xl md:text-7xl drop-shadow-md">{selectedLoc.icon}</span>
                <div className="flex-1 w-full">
                  <h3 className="font-display text-2xl md:text-3xl text-ocean-deep leading-tight mb-2">{selectedLoc.name}</h3>
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    {starRating(selectedLoc.rating)}
                    <span className="text-sm font-bold text-ocean-deep/70">{selectedLoc.rating}/5</span>
                  </div>
                  <div className="w-16 h-1.5 bg-primary/40 rounded-full mx-auto md:mx-0 mb-6"></div>
                  
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-display text-base md:text-lg text-primary flex items-center gap-2 mb-1 justify-center md:justify-start">
                          <Target className="w-4 h-4" /> Purpose
                        </h4>
                        <p className="font-body text-sm md:text-[16px] text-foreground/90 italic">{selectedLoc.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-display text-base md:text-lg text-primary flex items-center gap-2 mb-1 justify-center md:justify-start">
                          <MapPin className="w-4 h-4" /> Location
                        </h4>
                        <p className="font-body text-sm md:text-[16px] text-foreground/90">{selectedLoc.specificLocation}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-display text-base md:text-lg text-primary flex items-center gap-2 mb-1 justify-center md:justify-start">
                          <Users className="w-4 h-4" /> Frequenters / Fans
                        </h4>
                        <p className="font-body text-sm md:text-[16px] text-foreground/90">{selectedLoc.visitors}</p>
                      </div>
                      {selectedLoc.hates && (
                        <div>
                          <h4 className="font-display text-base md:text-lg text-primary flex items-center gap-2 mb-1 justify-center md:justify-start">
                            <ThumbsDown className="w-4 h-4" /> Hated By
                          </h4>
                          <p className="font-body text-sm md:text-[16px] text-foreground/90">{selectedLoc.hates}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-primary/20">
                    <h4 className="font-display text-base md:text-lg text-primary mb-2">Detailed Description</h4>
                    <p className="font-body text-sm md:text-[16px] text-foreground/90 leading-relaxed">
                      {selectedLoc.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="font-display text-3xl text-white drop-shadow-md [-webkit-text-stroke:1px_rgba(0,0,0,0.4)]">
                {t('locations.title')}
              </h2>
              <button 
                onClick={() => setShowMap(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white font-display text-sm hover:scale-105 transition-all shadow-lg active:scale-95"
              >
                <MapPin className="w-4 h-4" />
                View Map
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-4">
              {locations.map((loc) => (
                <button
                  key={loc.name}
                  onClick={() => setSelectedLocName(loc.name)}
                  className="text-left w-full flex flex-col items-center justify-center gap-3 rounded-xl bg-white/70 hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 p-6 border-2 border-primary/40 shadow-sm hover:shadow-md hover:border-primary"
                >
                  <div className="text-5xl drop-shadow-sm mb-1 hover:scale-110 transition-transform">{loc.icon}</div>
                  <h3 className="font-display text-lg text-ocean-deep leading-tight text-center">{loc.name}</h3>
                  <div className="flex flex-col items-center gap-1">
                    {starRating(loc.rating)}
                    <span className="text-[11px] font-body font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-ocean-deep opacity-80 mt-1">
                      {loc.specificLocation}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Full Map Modal */}
      {showMap && (
          <div 
            onClick={() => setShowMap(false)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in cursor-zoom-out"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-7xl h-[85vh] flex flex-col items-center justify-center cursor-default bg-white/5 rounded-3xl p-2 border-4 border-white/20 shadow-2xl"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
                <img 
                  src={map1} 
                  alt="Bikini Bottom Map" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
      )}
    </>
  );
};

export default LocationsSection;
