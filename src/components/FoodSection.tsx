import { useState } from "react";
import { ArrowLeft, Star, StarHalf } from "lucide-react";
import { useTranslation } from "react-i18next";
import foodBg from "@/assets/new-food-bg.jpg";
import realWorldBurger from "@/assets/burger-king-style.png";
import { playBubblePop } from "@/utils/audio";

const foodImages = import.meta.glob<{ default: string }>('@/assets/food/*.png', { eager: true });

const FoodSection = () => {
  const { t } = useTranslation();
  const [selectedFoodName, setSelectedFoodName] = useState<string | null>(null);

  const starRating = (rating: number, max: number = 5) => {
    const stars = [];
    for (let i = 1; i <= max; i++) {
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

  const foodItems = [
    { 
      name: "Krabby Patty", 
      description: "The most famous food in the ocean. Legendary for its secret formula and incredible taste.", 
      ingredients: ["Krabby Patty Bun", "Krabby Patty", "Lettuce", "Cheese", "Onions", "Tomatoes", "Pickles", "Ketchup", "Mustard", "Secret Formula"],
      restaurant: "The Krusty Krab", 
      rating: 10, 
      maxRating: 10, 
      whoLikes: "Everyone, especially SpongeBob and Plankton (his obsession)", 
      realWorld: { name: "Burger King Whopper", image: realWorldBurger, description: "Just like the Krabby Patty is the king of Bikini Bottom, the Whopper is a flame-grilled icon in our world!" } 
    },
    { 
      name: "Krabby Patty Deluxe", 
      description: "A premium version of the classic Krabby Patty with extra toppings and a fluffier bun.", 
      ingredients: ["Premium Brioche Bun", "Double Krabby Patty", "Aged Sea-Cheese", "Caramelized Sea-Onions", "Heirloom Sea-Tomatoes"],
      restaurant: "The Krusty Krab", 
      rating: 9, 
      maxRating: 10, 
      whoLikes: "Gourmet food lovers" 
    },
    { 
      name: "Kelp Shake", 
      description: "A highly addictive, neon-green beverage that temporarily took Bikini Bottom by storm.", 
      ingredients: ["99% Kelp Juice", "1% Secret Addictive Substance", "Green Glow-Agent"],
      restaurant: "Kelp Shake Stores", 
      rating: 4.5, 
      maxRating: 5, 
      whoLikes: "Addictive juice fans",
      realWorld: { name: "Green Smoothie / Matcha Latte", image: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&w=300&q=80", description: "In the real world, kelp shakes are often seen as healthy green smoothies or trendy matcha lattes!" }
    },
    { 
      name: "Chum Burger", 
      description: "Plankton's desperate attempt to replicate the Krabby Patty using his family's 'delicious' chum.", 
      ingredients: ["Cold Chum", "Soggy Bun", "Grease", "Regret"],
      restaurant: "The Chum Bucket", 
      rating: 0.5, 
      maxRating: 5, 
      whoLikes: "Karen (out of obligation)",
      realWorld: { name: "Fisherman's Bait", image: "https://images.unsplash.com/photo-1533150821217-380d0d869279?auto=format&fit=crop&w=300&q=80", description: "In reality, chum is ground fish parts used as bait, explaining why it looks (and smells) so bad!" }
    },
    { 
      name: "Goofy Goober Ice Cream", 
      description: "The most cheerful dessert in the ocean, served by the Goofy Goober himself.", 
      ingredients: ["Sea-Cream", "Sugar", "Happiness", "Berry Swirls"],
      restaurant: "Goofy Goober's", 
      rating: 5, 
      maxRating: 5, 
      whoLikes: "SpongeBob and Patrick",
      realWorld: { name: "Disney World Dole Whip", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80", description: "Captures the same whimsical, child-like joy as specialized theme park treats!" }
    },
    { name: "Double Krabby Patty", description: "Two juicy patties for double the satisfaction.", ingredients: ["Double Patties", "Extra Cheese", "Classic Toppings"], restaurant: "The Krusty Krab", rating: 9.5, maxRating: 10, whoLikes: "Patrick Star" },
    { name: "Triple Krabby Patty", description: "Three patties piled high. A serious challenge.", ingredients: ["Triple Patties", "Massive Bun", "All the Toppings"], restaurant: "The Krusty Krab", rating: 10, maxRating: 10, whoLikes: "Extremely hungry customers" },
    { name: "Krabby Patty with Cheese", description: "The classic patty topped with perfectly melted undersea cheese.", ingredients: ["Krabby Patty", "Sea-Cheese", "Classic Toppings"], restaurant: "The Krusty Krab", rating: 9, maxRating: 10, whoLikes: "Classic burger fans" },
    { name: "Pretty Patty", description: "SpongeBob's colorful invention that comes in various vibrant shades.", ingredients: ["Food Coloring", "Optimism", "Classic Krabby Ingredients"], restaurant: "Pretty Patties (formerly)", rating: 4.5, maxRating: 5, whoLikes: "Fashion-forward fish" },
    { name: "Kelp Fries", description: "The standard crispy side dish. Perfectly salted.", ingredients: ["Fresh Kelp Stripes", "Sea Salt", "Deep Sea Oil"], restaurant: "The Krusty Krab", rating: 4.5, maxRating: 5, whoLikes: "Almost everyone" },
    { name: "Coral Bits", description: "Small, crunchy bits of fried coral. The ultimate undersea snack.", ingredients: ["Shaved Coral", "Spices", "Deep-Fried"], restaurant: "The Krusty Krab", rating: 4, maxRating: 5, whoLikes: "Pearl Krabs" },
    { name: "Goofy Goober Sundae", description: "A massive bowl of ice cream with all the toppings.", ingredients: ["Multiple Scoops", "Sprinkles", "Whipped Sea-Cream", "Cherry"], restaurant: "Goofy Goober's", rating: 5, maxRating: 5, whoLikes: "Goofy Goober fans" },
    { name: "Triple Gooberberry Sunrise", description: "The legendary, massive sundae that fuels wild nights.", ingredients: ["Gooberberries", "Sunrise Syrup", "Magic", "A Lot of Ice Cream"], restaurant: "Goofy Goober's", rating: 5, maxRating: 5, whoLikes: "SpongeBob and Patrick after a long day" },
    { name: "Kelp Nougat Crunch", description: "The best-selling candy bar in Bikini Bottom.", ingredients: ["Kelp Nougat", "Chocolate Shell", "Crunchy Bits"], restaurant: "Barg'N-Mart", rating: 4.5, maxRating: 5, whoLikes: "SpongeBob" },
    { name: "Jellyfish Jelly Sandwich", description: "Two slices of kelp bread with a thick layer of jellyfish jelly.", ingredients: ["Kelp Bread", "Fresh Jellyfish Jelly"], restaurant: "Picnics", rating: 5, maxRating: 5, whoLikes: "SpongeBob" },
    { name: "Colored Krabby Patty", description: "Vibrant iterations of the classic patty, each with a unique visual flair.", restaurant: "The Krusty Krab", rating: 4, maxRating: 5, whoLikes: "Kids and experimental eaters" },
    { name: "Krabby Meal", description: "A balanced meal for the younger residents of Bikini Bottom, complete with a toy (usually a spatula).", restaurant: "The Krusty Krab", rating: 3.5, maxRating: 5, whoLikes: "Bikini Bottom children" },
    { name: "Chum Stick", description: "Chum served on a stick for eating on the go. Tastes exactly like it sounds.", restaurant: "The Chum Bucket", rating: 0.5, maxRating: 5, whoLikes: "Bikini Bottom residents with no taste buds" },
    { name: "Chum Shake", description: "A thick, grey beverage made entirely of chum. It once became a brief sensation due to its addictive properties.", restaurant: "The Chum Bucket", rating: 1, maxRating: 5, whoLikes: "Brainwashed customers" },
    { name: "Chum Pie", description: "A flaky crust filled with lukewarm, seasoned chum. A 'delicacy' according to Plankton.", restaurant: "The Chum Bucket", rating: 0.5, maxRating: 5, whoLikes: "Plankton" },
    { name: "Chum Chili", description: "Spicy chum served in a bowl. It's hot, but definitely not appetizing.", restaurant: "The Chum Bucket", rating: 0.5, maxRating: 5, whoLikes: "Plankton's relatives" },
    { name: "Chum Nuggets", description: "Bite-sized pieces of deep-fried chum. Often used in baiting traps.", restaurant: "The Chum Bucket", rating: 0.5, maxRating: 5, whoLikes: "Nobody really" },
    { name: "Chum Sundae", description: "The low point of culinary history. Chum topped with more chum.", restaurant: "The Chum Bucket", rating: 0, maxRating: 5, whoLikes: "Plankton when he's feeling experimental" },
    { name: "Peanut Parfait", description: "A nutty and sweet layered treat. Keep an eye out for any giant peanuts!", restaurant: "Goofy Goober's", rating: 4.5, maxRating: 5, whoLikes: "Patrick" },
    { name: "Seaweed Snacks", description: "Thin, crispy leaves of seaweed. A healthy and light option for the health-conscious fish.", restaurant: "Barg'N-Mart", rating: 3.5, maxRating: 5, whoLikes: "Sandy Cheeks" },
    { name: "Barnacle Chips", description: "Salty and satisfying chips made from ground barnacles. They are a staple of any Bikini Bottom movie night.", restaurant: "Barg'N-Mart", rating: 4, maxRating: 5, whoLikes: "Moviegoers" },
    { name: "Kelp Chips", description: "The underwater equivalent of potato chips. Crunchy, salty, and highly addictive.", restaurant: "Barg'N-Mart", rating: 4, maxRating: 5, whoLikes: "Everyone" },
    { name: "Jelly Patty", description: "A Krabby Patty topped with fresh, blue jellyfish jelly. A sweet and savory masterpiece.", restaurant: "The Krusty Krab", rating: 5, maxRating: 5, whoLikes: "SpongeBob" },
    { name: "Sea Nut Brittle", description: "A hard, sweet candy filled with crunchy sea nuts. Perfect for those who enjoy a bit of a challenge.", restaurant: "Barg'N-Mart", rating: 3.5, maxRating: 5, whoLikes: "Grandma SquarePants" },
    { name: "Seafoam Soda Crackers", description: "Light and airy crackers that pair perfectly with a nice bowl of kelp soup.", restaurant: "Barg'N-Mart", rating: 3, maxRating: 5, whoLikes: "Squidward" },
    { name: "Seafoam Soda", description: "A fizzy, refreshing drink that tickles the gills.", restaurant: "Various", rating: 4, maxRating: 5, whoLikes: "The whole town" },
    { name: "Kelp Juice", description: "100% pure squeezed kelp. Rich in nutrients and sea minerals.", restaurant: "Healthy Life", rating: 3.5, maxRating: 5, whoLikes: "Sandy" },
    { name: "Kelp Soda", description: "The carbonated version of kelp juice. A bit punchy!", restaurant: "Various", rating: 3.5, maxRating: 5, whoLikes: "Teenagers" },
    { name: "Kelp Smoothie", description: "Blended kelp with sea-fruit. Thick and refreshing.", restaurant: "Smoothee King", rating: 4, maxRating: 5, whoLikes: "Exercise enthusiasts" },
    { name: "Coral Cola", description: "The classic dark soda of the deep sea. Bubbles for days!", restaurant: "The Krusty Krab", rating: 4, maxRating: 5, whoLikes: "All ages" },
    { name: "Root Kelp", description: "A robust, earthy beverage often served in frozen mugs.", restaurant: "Cranky’s", rating: 4, maxRating: 5, whoLikes: "Older fish" },
    { name: "Goo Lagoon Ice Cream", description: "Soft-serve ice cream inspired by the colorful brine of the lagoon.", restaurant: "Beachside Stands", rating: 4.5, maxRating: 5, whoLikes: "Surfers" },
    { name: "Sand Sundae", description: "A textured sundae that Patrick seems to find incredibly delicious, even if others find it a bit... gritty.", restaurant: "Under a Rock", rating: 2, maxRating: 5, whoLikes: "Patrick" },
    { name: "Seafoam Popsicle", description: "Frozen seafoam in various fruit flavors. A summer favorite.", restaurant: "Ice Cream Trucks", rating: 4, maxRating: 5, whoLikes: "Kids" },
    { name: "Kelp Pops", description: "Sweet kelp-syrup frozen on a stick.", restaurant: "Mrs. Puff's Snack Stand", rating: 3.5, maxRating: 5, whoLikes: "Boating school students" },
    { name: "Kelp Pancakes", description: "Fluffy pancakes made with ground kelp flour. Best served with jellyfish jelly.", restaurant: "SpongeBob's Kitchen", rating: 5, maxRating: 5, whoLikes: "SpongeBob and his parents" },
    { name: "Sea Waffles", description: "Crispy waffles with deep pockets for holding sea-syrup.", restaurant: "The Breakfast Nook", rating: 4.5, maxRating: 5, whoLikes: "Breakfast lovers" },
    { name: "Kelp Toast", description: "Perfectly browned kelp bread. A simple start to the day.", restaurant: "Various", rating: 3, maxRating: 5, whoLikes: "Squidward" },
    { name: "Sea Egg Omelet", description: "A fluffy omelet made with the finest sea eggs and sautéed kelp.", restaurant: "The Krusty Krab", rating: 4, maxRating: 5, whoLikes: "Mr. Krabs" },
    { name: "Barnacle Cereal", description: "A crunchy cereal that makes your milk turn sea-green.", restaurant: "Barg'N-Mart", rating: 3.5, maxRating: 5, whoLikes: "SpongeBob" },
    { name: "Pretty Patties", description: "The collective group of vibrant patties that defined a generation of undersea fashion food.", restaurant: "SpongeBob’s Stand", rating: 5, maxRating: 5, whoLikes: "The whole city" },
    { name: "Coral Cake", description: "A celebratory cake with layers of sponge and sea-cream frosting.", restaurant: "Birthday Parties", rating: 4.5, maxRating: 5, whoLikes: "Pearl Krabs" },
    { name: "Sea Cupcakes", description: "Individual portions of joy with colorful coral decorations.", restaurant: "Bake Sales", rating: 4, maxRating: 5, whoLikes: "SpongeBob's friends" },
    { name: "Jellyfish Jelly", description: "The sweet, neon-blue nectar extracted from wild jellyfish. Best when spread on everything!", restaurant: "Nature", rating: 5, maxRating: 5, whoLikes: "Jellyfishing enthusiasts" },
    { name: "Krabby Dog", description: "The Krusty Krab's foray into the hot dog market. It's basically a Krabby Patty in a different shape.", restaurant: "The Krusty Krab", rating: 3.5, maxRating: 5, whoLikes: "Tourists" },
  ];

  
  const selectedFoodBase = foodItems.find((f) => f.name === selectedFoodName);
  const selectedFood = selectedFoodBase ? {
    ...selectedFoodBase,
    image: foodImages[`/src/assets/food/${selectedFoodBase.name.replace(/ /g, '_')}.png`]?.default
  } : null;


  return (
    <>
      {/* Fixed Full-Screen Background */}
      <div
        className="fixed inset-0 w-full h-full z-[-1] transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${foodBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
      </div>

      <section className="animate-fade-in-up relative z-10 w-full pt-4">
        {selectedFood ? (
          <div className="animate-fade-in-up">
            <button
              onClick={() => {
                setSelectedFoodName(null);
                playBubblePop();
              }}
              className="flex items-center gap-2 mb-6 px-4 py-2 rounded-xl bg-white/70 hover:bg-white/90 text-ocean-deep font-display text-sm transition-all shadow-sm border-2 border-primary"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('food.back')}
            </button>
            <div className="rounded-2xl bg-white/80 p-5 md:p-8 border-2 border-primary/50 shadow-lg">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6 text-center md:text-left">
                
                {selectedFood.image ? (
                  <img src={selectedFood.image} alt={selectedFood.name} className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg" />
                ) : (
                  <span className="text-6xl md:text-7xl drop-shadow-md">🍽️</span>
                )}

                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-2">
                    <h3 className="font-display text-2xl md:text-3xl text-ocean-deep leading-tight">{selectedFood.name}</h3>
                    <span className="text-[12px] md:text-[14px] font-body font-semibold px-3 py-1 rounded-full bg-primary/20 text-ocean-deep border border-primary/30 uppercase tracking-wider">{selectedFood.restaurant}</span>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    {starRating(selectedFood.rating, selectedFood.maxRating || 5)}
                    <span className="text-sm font-bold text-ocean-deep/70">{selectedFood.rating}/{selectedFood.maxRating || 5}</span>
                  </div>

                  <div className="w-16 h-1.5 bg-primary/40 rounded-full mx-auto md:mx-0 mb-4 mt-2"></div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display text-base md:text-lg text-primary mb-2">Description</h4>
                      <p className="font-body text-sm md:text-[16px] text-foreground/90 leading-relaxed">
                        {selectedFood.description}
                      </p>
                    </div>

                    {selectedFood.ingredients && (
                      <div>
                        <h4 className="font-display text-base md:text-lg text-primary mb-2">Ingredients</h4>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {selectedFood.ingredients.map((ing, i) => (
                            <span key={i} className="px-3 py-1 bg-white/50 border border-primary/20 rounded-lg text-xs md:text-sm font-body text-ocean-deep italic">
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedFood.whoLikes && (
                      <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                        <span className="font-display text-xs md:text-sm text-primary block mb-1">Fan Favorites:</span>
                        <p className="font-body text-xs md:text-sm text-ocean-deep/80 italic">{selectedFood.whoLikes}</p>
                      </div>
                    )}
                    
                    {selectedFood.realWorld && (
                      <div className="mt-8 pt-6 border-t-2 border-primary/20">
                        <h4 className="font-display text-xl text-ocean-deep mb-3 flex items-center gap-2 justify-center md:justify-start">
                          🌍 Real World Parallel
                        </h4>
                        <div className="flex flex-col md:flex-row gap-5 items-center bg-white/60 p-5 rounded-2xl border border-primary/20 shadow-sm transition-all">
                          <img src={selectedFood.realWorld.image} alt={selectedFood.realWorld.name} className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-xl shadow-md border-2 border-white" />
                          <div className="text-center md:text-left">
                            <p className="font-display text-lg md:text-xl text-primary mb-1">{selectedFood.realWorld.name}</p>
                            <p className="font-body text-sm md:text-[15px] text-foreground/80 leading-relaxed">
                              {selectedFood.realWorld.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-display text-3xl text-primary mb-6">{t('food.title')}</h2>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-4">
              {foodItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setSelectedFoodName(item.name);
                    playBubblePop();
                  }}
                  className="text-left w-full flex flex-col items-center justify-center gap-3 rounded-xl bg-white/70 hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 p-6 border-2 border-primary/40 shadow-sm hover:shadow-md hover:border-primary"
                >
                  
                  <div className="w-20 h-20 md:w-24 md:h-24 mb-2 hover:scale-110 transition-transform flex items-center justify-center">
                    {foodImages[`/src/assets/food/${item.name.replace(/ /g, '_')}.png`]?.default ? (
                      <img src={foodImages[`/src/assets/food/${item.name.replace(/ /g, '_')}.png`].default} alt={item.name} className="w-full h-full object-contain drop-shadow-md" />
                    ) : (
                      <div className="text-5xl drop-shadow-sm mb-1">🍽️</div>
                    )}
                  </div>

                  <h3 className="font-display text-lg text-ocean-deep leading-tight text-center">{item.name}</h3>
                  <div className="flex flex-col items-center gap-1">
                    {starRating(item.rating, item.maxRating || 5)}
                    <span className="text-[11px] font-body font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-ocean-deep opacity-80 mt-1">{item.restaurant}</span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default FoodSection;
