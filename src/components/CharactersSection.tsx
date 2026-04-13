import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import charactersBg from "@/assets/new-characters-bg.jpg";
import CharacterNetwork from "./CharacterNetwork";

const CharactersSection = () => {
  const { t } = useTranslation();
  const [selectedCharName, setSelectedCharName] = useState<string | null>(null);
  const [hoveredChar, setHoveredChar] = useState<string | null>(null);
  const characters = [
    {
            name: "SpongeBob SquarePants",
      symbolism: "Emotional Labor / Optimized Worker Identity",
      symbolismDesc: "Constant enthusiasm and happiness mask repetitive labor and system compliance.",
      mainColor: "Bright Yellow",
      shape: "Rectangular Block",
      designAnalysis: "Stephen Hillenburg chose yellow because it signifies pure joy, optimism, and boundless energy. His rigid, non-organic rectangular shape sharply contrasts with the fluid, organic sea biology around him, underscoring his artificial nature as a modern kitchen sponge.",
      realAnimal: "Sea Sponge",
      personality: "Optimistic, energetic, naive, and incredibly loyal. As a pristine fry cook at the Krusty Krab, he embodies pure innocence. Biologically, real sea sponges are stationary filter feeders without brains, but creator Stephen Hillenburg deliberately drew him as a rectangular synthetic kitchen sponge for comedic effect.",
      relationships: [
        { name: "Patrick Star",
      symbolism: "Anti-Intellectualism / Absurd Freedom",
      symbolismDesc: "His “stupidity” reflects a refusal of societal pressure and a form of freedom from structure.", desc: "Best friend since childhood, they frequently catch jellyfish, blow bubbles, and go on bizarre adventures together." },
        { name: "Squidward Tentacles",
      symbolism: "Alienation / Creative Frustration",
      symbolismDesc: "Trapped between artistic desire and meaningless labor, embodying modern burnout.", desc: "Next-door neighbor and Krusty Krab coworker. SpongeBob views him as a great friend, completely oblivious to Squidward's intense disdain." },
        { name: "Mr. Krabs",
      symbolism: "Capitalism / Profit-Driven Exploitation",
      symbolismDesc: "Obsessive pursuit of money prioritizes profit over ethics, reflecting capitalist logic.", desc: "Boss and ultimate idol. SpongeBob is fiercely loyal to him and the Krusty Krab." },
        { name: "Sandy Cheeks",
      symbolism: "Scientific Rationality / Individualism",
      symbolismDesc: "Embodies logic, discipline, and self-sufficiency within a chaotic world.", desc: "Close friend and regular Karate sparring partner." },
        { name: "Gary the Snail",
      symbolism: "Silent Wisdom / Detached Observation",
      symbolismDesc: "Observes without reacting, suggesting an alternative to emotional over-engagement.", desc: "Beloved pet and surprisingly intelligent companion." },
        { name: "Mermaid Man", desc: "SpongeBob's ultimate superhero idol." },
        { name: "Squidward's Father", desc: "SpongeBob surprisingly gets along beautifully with Squidward's dad and they love to play games together." }
      ],
      image: "https://media.tenor.com/jM39-0F86WcAAAAi/spongebob-spongebob-squarepants.gif",
      color: "border-sponge-yellow",
    },
    {
            name: "Patrick Star",
      mainColor: "Coral Pink",
      shape: "Conic / Star",
      designAnalysis: "His soft pink color reflects his mellow, harmless, and slightly oblivious nature. His simplified, bulky starfish shape emphasizes his raw physical weight and lethargic movement.",
      realAnimal: "Starfish",
      personality: "Dim-witted, lazy, yet fiercely loyal best friend. Patrick spends his days sleeping under a rock. Hillenburg used the real scientific fact that starfish do not possess a central brain as the direct inspiration for Patrick's lack of intelligence.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "Inseparable best friend and partner in crime." },
        { name: "Squidward Tentacles", desc: "Neighbor who Patrick equally annoys, often unintentionally ruining his plans." },
        { name: "Squidward's Father", desc: "Patrick has a mysteriously great relationship with Squidward's father and they have fun playing together." }
      ],
      image: "https://media.tenor.com/B0piVWUiKaUAAAAC/patrick-drooling-patrick-star.gif",
      color: "border-shell-pink",
    },
    {
            name: "Squidward Tentacles",
      mainColor: "Seafoam Green",
      shape: "Bulbous / Vertically Stretched",
      designAnalysis: "His pale, sickly green color represents envy, dreariness, and a lack of vitality. The oversized, drooping nose and huge, heavily lidded eyes emphasize his constant exhaustion, arrogance, and cynicism.",
      realAnimal: "Octopus",
      personality: "Cynical, arrogant, and easily irritated. He constantly dreams of becoming a famous artist and clarinet player. Despite his name ('Squid'ward), he is actually an octopus; animators gave him only 6 tentacles instead of 8 because 8 limbs were too cumbersome to animate.",
      relationships: [
        { name: "SpongeBob & Patrick", desc: "His incredibly annoying neighbors who constantly destroy his peace and quiet." },
        { name: "Squilliam Fancyson", desc: "Wealthy arch-rival from high school band class whom he constantly tries to impress." },
        { name: "Mr. Krabs", desc: "His cheap boss who pays him terribly at a job he despises." }
      ],
      image: "https://media.tenor.com/iJotvW9Mdf4AAAAC/squidward.gif",
      color: "border-ocean-light",
    },
    {
            name: "Mr. Krabs",
      mainColor: "Deep Crimson",
      shape: "Round / Armored",
      designAnalysis: "His deep red hue physically resembles a boiled crab, but symbolically represents his fierce greed, aggressive business tactics, and fiery temper. His jagged shell shape conveys defensiveness and hoarding behavior.",
      realAnimal: "Crab",
      personality: "Penny-pinching, extremely greedy, yet a caring single father to a teenage sperm whale. He runs the Krusty Krab and ruthlessly guards the Krabby Patty secret formula. Like real crabs, he has a tough exterior shell and powerful pincers.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "His most profitable and gullible employee." },
        { name: "Plankton",
      symbolism: "Ambition / Technological Obsession",
      symbolismDesc: "Driven by success and control, often detached from ethical consequences.", desc: "Former childhood best friend turned bitter business rival." },
        { name: "Pearl Krabs", desc: "His teenage whale daughter, whom he frequently embarrasses with his cheapness." }
      ],
      image: "https://media.tenor.com/HWqP72GJvCUAAAAC/mr-krabs-money.gif",
      color: "border-destructive/60",
    },
    {
            name: "Sandy Cheeks",
      mainColor: "White / Brown",
      shape: "Spherical (Helmet) / Agile",
      designAnalysis: "Her stark white diving suit immediately alienates her from the marine environment, highlighting her status as a Texan outsider. The spherical helmet adds a sleek, scientific, and protective element to her agile squirrel physique.",
      realAnimal: "Eastern Gray Squirrel",
      personality: "Smart, athletic thrill-seeker and scientist from Texas. As a land mammal residing underwater, she relies on an oxygen-filled polyurethane Treedome and wears a specialized atmospheric diving suit to survive the crushing ocean depths.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "First real friend in Bikini Bottom, loyal testing subject for her inventions, and Karate buddy." },
        { name: "Patrick Star", desc: "Friend, though often irritated by his extreme stupidity when trying to conduct experiments." }
      ],
      image: "https://media.tenor.com/UNjQtcL5UFgAAAAC/sandy-cheeks-dancing.gif",
      color: "border-sandy-brown",
    },
    {
            name: "Plankton",
      mainColor: "Dark Green",
      shape: "Microscopic Pill",
      designAnalysis: "His tiny, pill-like shape visually reinforces his extreme insignificance in the vast ocean. The solitary, massive cyclops eye represents his singular, unblinking obsession with stealing the Krabby Patty formula.",
      realAnimal: "Copepod",
      personality: "Microscopic, highly intelligent, and relentlessly evil. He obsessively tries to steal the Krabby Patty secret formula to save his failing restaurant, the Chum Bucket. His massive ego heavily compensates for his minuscule size.",
      relationships: [
        { name: "Mr. Krabs", desc: "His arch-nemesis who completely monopolizes the fast-food industry." },
        { name: "Karen Plankton", desc: "His sophisticated computer wife who points out the flaws in all his evil schemes." }
      ],
      image: "https://media.tenor.com/ESEoirTqp6oAAAAC/plankton-sip.gif",
      color: "border-emerald-600",
    },
    {
            name: "Gary the Snail",
      mainColor: "Pink & Blue",
      shape: "Dome / Spiral",
      designAnalysis: "The pastel pink shell with contrasting vivid blue spots mimics the comforting aesthetic of a domestic house cat while translating it into a bizarre marine context.",
      realAnimal: "Sea Snail",
      personality: "SpongeBob's pet snail who meows like a cat. Despite his simple animalistic demeanor, Gary is highly cultured, intellectual, and often proves to be significantly smarter than his owner.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "His loving owner who often misinterprets his complex thoughts as simple meows." }
      ],
      image: "https://media.tenor.com/BMUtJ8tV5Y8AAAAC/gary-gary-the-snail.gif",
      color: "border-pink-300",
    },
    {
            name: "Pearl Krabs",
      mainColor: "Gray",
      shape: "Massive Block",
      designAnalysis: "As a sperm whale, her massive, rectangular gray head with a flat top is profoundly disproportionate to the rest of the cast. The visual joke is her trying to exhibit delicate teenage cheerleader behavior while possessing the sheer weight and square geometry of an industrial vehicle.",
      realAnimal: "Sperm Whale",
      personality: "Mr. Krabs's teenage daughter who loves shopping and pop music. Biologically, she's a massive marine mammal, which humorously contrasts with her tiny crab father.",
      image: "https://media.tenor.com/yFv6lR08yVMAAAAi/pearl-krabs.gif",
      color: "border-pink-400",
      symbolism: "Superficial Consumerism / Generational Disconnect",
      symbolismDesc: "Represents the intense materialistic drive instilled by her father's capitalism, yet fundamentally highlighting the tragic disconnect and pressures of adolescent social conformity.",
    },
    {
            name: "Mrs. Puff",
      mainColor: "Beige & Red",
      shape: "Round / Inflatable",
      designAnalysis: "Designed as a pufferfish, her naturally round, wide shape visually cues her constant underlying stress. When agitated, her sudden expansion mechanics perfectly animate the physical manifestation of panic attacks.",
      realAnimal: "Pufferfish",
      personality: "SpongeBob's paranoid and easily stressed boating school teacher. True to her species, whenever she is startled or crashes due to SpongeBob's reckless driving, she inflates defensively into a large spiky ball.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "Her eternal student who causes her severe psychological trauma and physical injuries." },
        { name: "Mr. Krabs", desc: "Occasionally dates him, though his cheapness often ruins the mood." }
      ],
      image: "https://media.tenor.com/uRXXy1ZJqI0AAAAi/mrs-puff.gif",
      color: "border-yellow-300",
    },
    {
            name: "Larry the Lobster",
      mainColor: "Crimson",
      shape: "Inverted Triangle (V-Taper)",
      designAnalysis: "Although sharing Mr. Krabs' red crustacean coloring, Larry's claws and upper thorax are drawn massively disproportionate to his legs. This exaggerated V-taper specifically parodies the extreme, top-heavy physiques of obsessive bodybuilders.",
      realAnimal: "Lobster",
      personality: "A muscular, extreme sports-loving lifeguard at Goo Lagoon. He represents the stereotypical 'gym bro' beachgoer in the underwater world.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "Considers SpongeBob a weak but likable companion." },
        { name: "Sandy Cheeks", desc: "Fellow fitness enthusiast and lifting partner." },
        { name: "Don the Whale", desc: "Fellow muscular beach regular and lifting competitor." }
      ],
      image: "https://media.tenor.com/xHqNInZkSgcAAAAi/larry.gif",
      color: "border-red-500",
    },
    {
            name: "Karen Plankton",
      mainColor: "Neon Green & Gray",
      shape: "Rigid Rectilinear",
      designAnalysis: "The cold metal chassis and jagged neon green waveform on her screen establish her logical, emotionless, computational nature, sharply contrasting Plankton's erratic, squishy emotional outbursts.",
      realAnimal: "Supercomputer",
      personality: "Plankton's robotic wife and Mark II UNIVAC computer. She is often the brains behind his schemes and possesses far more common sense than her megalomaniacal husband.",
      relationships: [
        { name: "Plankton", desc: "Her husband and creator. She constantly deals with his inadequacies and failures." },
        { name: "Sandy Cheeks", desc: "Mutual respect as fellow women of science." }
      ],
      image: "https://media.tenor.com/0M20k8eP8S4AAAAi/karen-plankton.gif",
      color: "border-green-400",
    },
    {
            name: "Mermaid Man",
      mainColor: "Orange & Green",
      shape: "Sagging / Top-Heavy",
      designAnalysis: "A satirical parody of Aquaman, his retro color scheme is faded, while his shape is deliberately sagging and top-heavy to heavily emphasize his geriatric frailty hidden beneath a skin-tight superhero costume.",
      realAnimal: "Human",
      personality: "An elderly, retired superhero residing in the Shady Shoals Rest Home. He wears a star-shaped starfish on his nose and spoofs classic comic book heroes like Aquaman.",
      relationships: [
        { name: "Barnacle Boy", desc: "His trusty lifelong sidekick who frequently absorbs his senior moments." },
        { name: "SpongeBob & Patrick", desc: "Obsessive fanboys whom he finds both helpful and extremely annoying." },
        { name: "Man Ray", desc: "His frozen arch-nemesis." }
      ],
      image: "https://media.tenor.com/MqUifHLx9gUAAAAC/mermaid-man-donuts.gif",
      color: "border-orange-400",
    },
    {
            name: "Barnacle Boy",
      mainColor: "Red & Black",
      shape: "Gaunt / Angular",
      designAnalysis: "His gaunt, bony, sharply angled frame starkly contrasts Mermaid Man's roundness. His oversized rubber nose and sailor cap characterize his status as an eternal, disrespected 'sidekick' despite his old age.",
      realAnimal: "Human",
      personality: "Mermaid Man's grumpy sidekick who is perpetually treated as an infant despite being a senior citizen. He is a parody of Robin from Batman.",
      relationships: [
        { name: "Mermaid Man", desc: "His mentor who refuses to respect his maturity." },
        { name: "SpongeBob SquarePants", desc: "President of his fan club who irritates him deeply." }
      ],
      image: "https://media.tenor.com/uxV9s8bnXf8AAAAC/barnacle-boy-atomic-flounder.gif",
      color: "border-blue-400",
    },
    {
            name: "Flying Dutchman",
      mainColor: "Ectoplasmic Green",
      shape: "Tapering / Vaporous",
      designAnalysis: "A glowing, translucent green hue universally codes him as supernatural and radioactive. His lack of physical legs grounds his ghostly aura, forcing him to float ethereally rather than walk.",
      realAnimal: "Ghostly Spirit",
      personality: "An irritable, green glowing pirate ghost based on nautical folklore. He roams the oceans collecting souls and constantly looking for his missing dining sock.",
      relationships: [
        { name: "SpongeBob & Patrick", desc: "Have acted as his ghost crew in the past, entirely ruining his scary reputation." },
        { name: "Squidward Tentacles", desc: "Was momentarily dragged to the Fly of Despair due to his skepticism." }
      ],
      image: "https://media.tenor.com/PeWSaX2hosIAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-green-300",
    },
    {
            name: "King Neptune",
      mainColor: "Cyan & Gold",
      shape: "Muscular / Regal",
      designAnalysis: "His design leans heavily into classical Greek mythology, with an imposing, muscular merman build to convey raw authoritarian power, while his overwhelming use of shiny gold visually cements his divine oceanic royalty.",
      realAnimal: "Merman Deity",
      personality: "The god of the sea and tyrannical ruler of Atlantis. He possesses a magical trident and is incredibly sensitive about his creeping baldness.",
      relationships: [
        { name: "Princess Mindy", desc: "His daughter who frequently questions his harsh dictatorial judgements." },
        { name: "SpongeBob SquarePants", desc: "Reclaimed his stolen crown from Shell City." }
      ],
      image: "https://media.tenor.com/IksBlybQnqkAAAAi/king-neptune.gif",
      color: "border-cyan-400",
    },
    {
            name: "Squilliam Fancyson",
      mainColor: "Teal",
      shape: "Slim / Upright",
      designAnalysis: "He is essentially a palette-swapped Squidward, but is drawn with distinctly sleeker, upright posture and a sharp, defining unibrow to exude wealthy arrogance and artistic superiority.",
      realAnimal: "Octopus",
      personality: "Squidward's wealthy, arrogant high school rival. He has a unibrow, a luxurious lifestyle, and everything Squidward desperately wishes he had.",
      relationships: [
        { name: "Squidward Tentacles", desc: "High school band rival whom he loves to humiliate." }
      ],
      image: "https://media.tenor.com/pRE060dn_7IAAAAC/sponge-bob-squillium-returns-spongebob-squarepants.gif",
      color: "border-purple-400",
    },
    {
            name: "Patchy the Pirate",
      mainColor: "Black & Red",
      shape: "Human (Live-Action)",
      designAnalysis: "As a live-action human, his existence completely breaks the fourth wall. The cheap, stereotypical pirate costume emphasizes the low-budget, absurd meta-humor intrinsic to the show's framing narrative.",
      realAnimal: "Human",
      personality: "The live-action president of the SpongeBob fan club. Portrayed by Tom Kenny (SpongeBob's voice actor), he hosts various special episodes from his home in Encino, California.",
      relationships: [
        { name: "Potty the Parrot", desc: "His highly cynical and annoying avian co-host and roommate." },
        { name: "SpongeBob SquarePants", desc: "Patchy's absolute idol. He is the ultimate superfan." }
      ],
      image: "https://media.tenor.com/plC0H_UTuXQAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-red-600",
    },
    {
            name: "Potty the Parrot",
      mainColor: "Varied",
      shape: "Puppet / Strings",
      designAnalysis: "A very badly designed marionette puppet. The visible strings forcefully highlight the show's intentional love of cheap, amateurish physical comedy.",
      realAnimal: "Parrot Puppet",
      personality: "Patchy's cynical wooden puppet sidekick, visible strings and all. He constantly mocks and annoys Patchy during the live-action segments.",
      relationships: [
        { name: "Patchy the Pirate", desc: "His bumbling human companion whom he loves to prank with explosives." }
      ],
      image: "https://media.tenor.com/jc-bKqGdpfMAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-green-500",
    },
    {
            name: "Bubble Buddy",
      mainColor: "Iridescent Transparent",
      shape: "Humanoid Bubble",
      designAnalysis: "His shimmering, translucent soap-bubble design visually demonstrates his extreme fragility, generating comedy purely from the townsfolk treating a delicate membrane as a real, threatening citizen.",
      realAnimal: "Living Soap Bubble",
      personality: "A silent, anthropomorphic bubble blown by SpongeBob out of loneliness. Despite having no mass and being made of soap, he somehow manages to inconvenience the entire town.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "His creator and only initial friend." }
      ],
      image: "https://media.tenor.com/zxovvSb5efMAAAAC/spongebob-yay.gif",
      color: "border-blue-300",
    },
    {
            name: "Fred",
      mainColor: "Brown",
      shape: "Standard Fish",
      designAnalysis: "A painfully average, unremarkable brown fish. His extremely generic, boring design exists purely to make his iconic, agonized 'MY LEG!' scream even funnier through its sudden intensity.",
      realAnimal: "Fish",
      personality: "The most famous background character, universally known for screaming 'My leg!' in moments of mass destruction and chaos across Bikini Bottom.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "Frequently gets his leg broken as collateral damage of SpongeBob's antics." }
      ],
      image: "https://media.tenor.com/nqER1YForhIAAAAC/spongebob-squarepants-fred.gif",
      color: "border-brown-400",
    },
    {
            name: "Bubble Bass",
      mainColor: "Olive Green",
      shape: "Pear-Shaped / Bottom-Heavy",
      designAnalysis: "An incredibly bottom-heavy, pear-like design with a tiny head and thick glasses, intentionally invoking the visual stereotype of an arrogant, obsessive, and immovable basement-dwelling nerd.",
      realAnimal: "Bass Fish",
      personality: "An overweight, nitpicky, and arrogant fast-food critic. He infamously hid the pickles under his tongue to sabotage SpongeBob's fry cook reputation.",
      image: "https://media.tenor.com/dOi172Kvhp0AAAAC/crying-bubble-bass.gif",
      color: "border-olive-500",
      symbolism: "Internet Cynicism / The Malicious Critic",
      symbolismDesc: "The embodiment of the incredibly entitled, hyper-critical consumer—using pedantry (hidden pickles) to manipulate and destroy the honest labor of the working class.",
    },
    {
            name: "Kevin C. Cucumber",
      mainColor: "Sickly Green",
      shape: "Elongated / Bumpy",
      designAnalysis: "His bumpy sea cucumber biology combined with a crown and nasally voice visually and aurally construct the ultimate arrogant, elitist nerd who looks down on others despite being deeply uncool.",
      realAnimal: "Sea Cucumber",
      personality: "The snobby leader of the Jellyspotters jellyfishing club. He wears a crown and acts incredibly elitist towards SpongeBob.",
      image: "https://media.tenor.com/r5JFzNjE8N4AAAAC/kevin-c-cucumber-spongebob.gif",
      color: "border-green-600",
      symbolism: "False Idolatry / The Cult of Personality",
      symbolismDesc: "Demonstrates the cruelty that lies behind celebrity worship, using status strictly to manipulate and mentally destroy his most devoted followers.",
    },
    {
            name: "David Hasselhoff",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Human",
      personality: "The actual actor, appearing in real life during the SpongeBob SquarePants Movie to act as a speedboat, propelling SpongeBob and Patrick back to Bikini Bottom.",
      image: "https://media.tenor.com/pnS3RIa1leIAAAAC/david-hasselhoff-pecs.gif",
      color: "border-red-300",
      symbolism: "Deus Ex Machina / The Mythic Savior",
      symbolismDesc: "A literal god-like entity appearing physically from another dimension (live action) to solve impossible obstacles with terrifying human anatomy.",
    },
    {
            name: "SpongeGar",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Prehistoric Sponge",
      personality: "SpongeBob's caveman ancestor who discovered fire. He communicates only in grunts and primitive language.",
      image: "https://media.tenor.com/CgUsa4JJtrkAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-orange-500",
      symbolism: "Primal Instinct / The State of Nature",
      symbolismDesc: "A representation of Hobbesian humanity—base instincts, chaos, and the primal discovery of fire that sparked both evolution and inevitable destruction.",
    },
    {
            name: "Stanley S. SquarePants",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Sea Sponge",
      personality: "SpongeBob's accident-prone cousin. Unlike SpongeBob, he destroys anything he touches, from cameras to Krabby Patties.",
      image: "https://media.tenor.com/2Ekd1OjkNmgAAAAC/spongebob-stanley-s-squarepants.gif",
      color: "border-gray-400",
      symbolism: "Destructive Incompetence",
      symbolismDesc: "The walking manifestation of entropy, destroying everything he touches regardless of intention, showing that pure innocence can still yield chaotic malice.",
    },
    {
            name: "Grandpa Redbeard",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Crab",
      personality: "Mr. Krabs's tough, pirate grandfather who expected Eugene to carry on the family tradition of piracy, only to learn that capitalist restaurant pricing is the modern form of thievery.",
      image: "https://media.tenor.com/4Wnig_9WkYMAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-red-700",
      symbolism: "The Weight of Ancestral Expectation",
      symbolismDesc: "Emphasizes the burden of inherited legacy and the terrifying lengths capitalism forces individuals to go to hide their true, unglamorous careers from their forebears.",
    },
    {
            name: "Red Mist Squidward",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Octopus",
      personality: "A legendary internet creepypasta involving an alleged lost episode where Squidward descended into madness. The show's creators actually acknowledged the meme by hiding a frame of it in the show.",
      image: "https://media.tenor.com/0Ql4irBFLPAAAAAC/red-mist.gif",
      color: "border-red-800",
      symbolism: "Nihilistic Void / The Creepypasta Metanarrative",
      symbolismDesc: "Represents the ultimate descent into existential despair when artistic meaning is entirely lost, bridging fan-lore horror with the character’s intrinsic tragedy.",
    },
    {
            name: "Jack Kahuna Laguna",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Human/Fish Hybrid",
      personality: "A legendary surfer who rides the biggest waves. He has long blonde hair and approaches surfing like a spiritual philosophy.",
      image: "https://media.tenor.com/W-JKVxiuuHYAAAAC/monyetpisanggoreng.gif",
      color: "border-yellow-400",
      symbolism: "Zen Absurdism / The Surfer Mysticism",
      symbolismDesc: "A spiritual guru trapped within the limits of extreme sports, teaching that enlightenment is found in the heart of the ultimate wave.",
    },
    {
            name: "Giant Eel",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Eel",
      personality: "A massive, terrifying deep-sea creature that preys on smaller fish in the dark trenches surrounding Bikini Bottom.",
      image: "https://media.tenor.com/Srmzm7DDMwsAAAAC/i%27m-a-big-fan-moray-eel.gif",
      color: "border-gray-600",
      symbolism: "The Sublime / Unfathomable Terror",
      symbolismDesc: "A Lovecraftian force of nature living in the deep abyss of the ocean, indifferent to the petty squabbles of Bikini Bottom citizens.",
    },
    {
            name: "Princess Mindy",
      mainColor: "Green / Teal",
      shape: "Slender / Mythological",
      designAnalysis: "Unlike the exaggerated proportions of her father Neptune, Mindy's sleek, traditional mermaid design codes her as sensible, pure-hearted, and classically heroic.",
      realAnimal: "Mermaid",
      personality: "King Neptune's kind-hearted daughter who believes in SpongeBob and Patrick's bravery during their quest to Shell City.",
      image: "https://media.tenor.com/eiB-1QYvu0kAAAAC/patrick-star-spongebob.gif",
      color: "border-pink-300",
      symbolism: "Benevolent Moral Barometer",
      symbolismDesc: "The only voice of compassion within an autocratic regime, replacing her father's tyranny with an empathetic utilization of mermaid magic.",
    },
    {
            name: "Victor Krabs",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Crab",
      personality: "Mr. Krabs's stern father who gifted him a rusty penny, instilling in Eugene his lifelong obsession with money.",
      image: "https://media.tenor.com/zytLw52gsngAAAAC/spongebob-mr-krabs.gif",
      color: "border-yellow-600",
      symbolism: "The Genesis of Greed",
      symbolismDesc: "The root cause of Mr. Krabs’s obsessive wealth hoarding, demonstrating how generational trauma is inherited through financial hardship.",
    },
    {
            name: "Queen Jellyfish",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Jellyfish",
      personality: "The massive, monarchical leader of the jellyfish in Jellyfish Fields. She wields immense power over the swarms.",
      image: "https://media.tenor.com/buOdVaNDBfoAAAAC/kissy-face-spongebob.gif",
      color: "border-pink-500",
      symbolism: "Matriarchal Hive Mind",
      symbolismDesc: "The protective, massive center of an electricity-generating ecosystem defending her swarm from capitalist exploitation.",
    },
    {
            name: "Anchovies",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Anchovy",
      personality: "A massive, chaotic swarm of tiny fish that communicate strictly through the word 'meep' and overrun businesses as a collective hive.",
      image: "https://media.tenor.com/suRsIyzeR3UAAAAC/spongebob-anchovies.gif",
      color: "border-blue-200",
      symbolism: "The Consuming Swarm / Mob Mentality",
      symbolismDesc: "Individually insignificant but collectively terrifying, representing the ravenous, mindless consumption of the masses under capitalistic hunger.",
    },
    {
            name: "Master Udon",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Fish",
      personality: "A muscular martial artist and real estate scammer who operates a shady timeshare business disguised as karate island.",
      image: "https://media.tenor.com/wgAHFIC4GEUAAAAC/shibada-spongebob.gif",
      color: "border-gray-500",
      symbolism: "Predatory Real Estate / The Martial Illusion",
      symbolismDesc: "Exposes how mystical spiritualism is frequently co-opted as a front to execute aggressive financial scams and timeshare traps.",
    },
    {
            name: "Sea Bear",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Bear-Fish",
      personality: "A fearsome wilderness predator possessing elements of a bear and a fish. It attacks anyone who violates absurd rules like wearing a sombrero upside down.",
      image: "https://media.tenor.com/zLEmQ2AYTg4AAAAC/seabear-spongebob.gif",
      color: "border-amber-700",
      symbolism: "Arbitrary Cosmic Punishment",
      symbolismDesc: "A primal beast whose attacks are governed by utterly absurd, nonsensical rules, reflecting the cruel randomness of nature's wrath.",
    },
    {
            name: "Sea Rhinoceros",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Rhinoceros-Fish",
      personality: "An even deadlier predator than the Sea Bear, deterred only by wearing anti-Sea Rhinoceros undergarments.",
      image: "https://media.tenor.com/mRihot_c0WMAAAAC/visualries.gif",
      color: "border-slate-500",
      symbolism: "The Compound Crisis",
      symbolismDesc: "Represents the escalation of disaster when cosmic punishment (the Sea Bear) worsens exponentially into an apocalyptic scenario.",
    },
    {
            name: "Hans",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Human Hand",
      personality: "A literal live-action human hand that occasionally sweeps down into the cartoon world to grab characters.",
      image: "https://media.tenor.com/oizeGRp6p_4AAAAC/milelumax-mileven.gif",
      color: "border-orange-300",
      symbolism: "The Hand of the Creator",
      symbolismDesc: "The literal intervention of the animator breaching the 2D plane, reinforcing the simulation-like absurdity of the cartoon reality.",
    },
    {
            name: "Magic Conch Shell",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Toy Shell",
      personality: "A plastic pull-string toy that SpongeBob and Patrick treat as an omniscient deity, following its random 'yes' or 'no' advice to the absolute letter.",
      image: "https://media.tenor.com/5oeQpHNG2gEAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-purple-300",
      symbolism: "Theocratic Determinism / Blind Faith",
      symbolismDesc: "Illustrates the surrender of free will to an inanimate, randomized plastic toy as a satirical jab at religious dependency.",
    },
    {
            name: "Squilvia",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Octopus",
      personality: "A sophisticated octopus whom Squidward falls in love with. They share a snobby demeanor and mutual disdain for SpongeBob.",
      image: "https://media.tenor.com/ZiWc4QZR2dAAAAAC/nickelodeon-spongebob.gif",
      color: "border-teal-400",
      symbolism: "The Illusion of Romantic Fulfillment",
      symbolismDesc: "An anomaly validating Squidward's deepest desires, existing briefly as proof that true connection requires dropping the cynical facade.",
    },
    {
            name: "Mama Krabs",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Crab",
      personality: "Eugene's overbearing mother who lives in an anchor-shaped house. Keep an eye on her; she once briefly dated Plankton.",
      image: "https://media.tenor.com/uV3DuRw1fl4AAAAC/spongebob-mama-krabs.gif",
      color: "border-pink-600",
      symbolism: "The Authoritarian Matriarch",
      symbolismDesc: "The only force in the universe capable of overriding Mr. Krabs's unyielding greed through sheer psychological authority.",
    },
    {
            name: "Grandma SquarePants",
      mainColor: "Faded Yellow",
      shape: "Shriveled Sponge",
      designAnalysis: "A dried-out, wrinkled kitchen sponge. Her faded yellow coloring perfectly captures the aesthetic of an aging, loving, overly dotting grandmother who refuses to see SpongeBob as an adult.",
      realAnimal: "Sea Sponge",
      personality: "SpongeBob's loving grandmother who treats him like a baby. She bakes legendary cookies and refuses to let SpongeBob grow up completely.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "Her precious, adult-aged grandson whom she loves to swaddle." }
      ],
      image: "https://media.tenor.com/40D_7nWVUzAAAAAC/spongebob-squarepants-grandma-squarepants.gif",
      color: "border-purple-400",
    },
    {
            name: "Harold SquarePants",
      mainColor: "Yellowish Brown",
      shape: "Round / Organic Sponge",
      designAnalysis: "Unlike SpongeBob's synthetic rectangular shape, his parents are drawn as round, organic, natural sea sponges, implying SpongeBob's kitchen-sponge geometry is a bizarre genetic anomaly.",
      realAnimal: "Unknown",
      personality: "Harold SquarePants is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/7EdqeuHWWn8AAAAC/spongebob-squarepants.gif",
      color: "border-orange-400",
      symbolism: "The Oblivious Patriarch",
      symbolismDesc: "A well-meaning but fundamentally disconnected figure observing the sheer chaos of his son's existence with passive bewilderment.",
    },
    {
            name: "Margaret SquarePants",
      mainColor: "Yellowish Tan",
      shape: "Round / Organic Sponge",
      designAnalysis: "Matches Harold's realistic, rounded sea-sponge biology. Her design highlights the surreal irony of naturally round parents giving birth to a perfectly rectangular offspring.",
      realAnimal: "Unknown",
      personality: "Margaret SquarePants is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/I6fKCL_Ck5YAAAAC/sppongebob-squarepants-fun-song-f-is-for-friends-who-do-stuff-together-spongebob-squarepants.gif",
      color: "border-purple-400",
      symbolism: "Maternal Anxiety",
      symbolismDesc: "The grounded, worrying anchor helplessly watching her son continuously defy the logic of biological survival.",
    },
    {
            name: "Man Ray",
      mainColor: "Red & Blue",
      shape: "Sleek / Aerodynamic",
      designAnalysis: "His sleek, muscular, featureless mask design mimics 1960s comic book supervillains. The sharp angles and primary colors make him look inherently threatening yet nostalgically silly.",
      realAnimal: "Unknown",
      personality: "Man Ray is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/JjMLe8gLmacAAAAC/attack-man-ray.gif",
      color: "border-orange-400",
      symbolism: "The Paradox of Evil",
      symbolismDesc: "A pure villain tormented by the introduction of goodness (the Tickle Belt), exploring the struggle between inherent malice and forced rehabilitation.",
    },
    {
            name: "Dirty Bubble",
      mainColor: "Brown",
      shape: "Spherical / Floating",
      designAnalysis: "His perfectly round, transparent shape contradicts his filthy brown coloring and menacing scowl, creating a whimsical juxtapostion of a delicate soap bubble being purely evil.",
      realAnimal: "Unknown",
      personality: "Dirty Bubble is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/Kg6qo3wsvtQAAAAC/spongebob-squarepants-dirty-bubble.gif",
      color: "border-green-400",
      symbolism: "The Fragility of Malice",
      symbolismDesc: "A colossal threat representing pollution and dirt, yet pathetically vulnerable to the sharp point of a simple pencil.",
    },
    {
            name: "Perch Perkins",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Unknown",
      personality: "Perch Perkins is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/7JfWuyCTUcMAAAAC/beat-up-harvey.gif",
      color: "border-blue-400",
      symbolism: "Sensationalist Media / The Spectator",
      symbolismDesc: "Documents the unending chaos of Bikini Bottom with an upbeat delivery, highlighting media normalization of catastrophic events.",
    },
    {
            name: "Old Man Jenkins",
      mainColor: "Wrinkled Green/Blue",
      shape: "Hunched / Frail",
      designAnalysis: "Drawn with extreme wrinkles, a deeply hunched spine, and faded colors to universally represent the ultimate, helpless geriatric citizen of Bikini Bottom, frequently used as a punchline.",
      realAnimal: "Unknown",
      personality: "Old Man Jenkins is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/4Wnig_9WkYMAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-red-400",
      symbolism: "Geriatric Expendability",
      symbolismDesc: "A constantly abused background figure reflecting society's utter indifference and physical disregard for the elderly.",
    },
    {
            name: "Nat Peterson",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Unknown",
      personality: "Nat Peterson is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/Ls3_RQNDtFwAAAAC/eatin-chum-eating-chum.gif",
      color: "border-red-400",
      symbolism: "The Volatile Consumer",
      symbolismDesc: "The average citizen prone to instantaneous, radical mood swings based entirely on minor inconveniences in commercial service.",
    },
    {
            name: "Tom",
      mainColor: "Olive Green",
      shape: "Standard Fish",
      designAnalysis: "An aggressively generic fish design designed to blend into crowds, making his sudden, explosive rage (particularly over chocolate) brutally shocking and hilarious.",
      realAnimal: "Unknown",
      personality: "Tom is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/cCDm-oZovDoAAAAC/i-got-music-for-you-tom-kenny.gif",
      color: "border-orange-400",
      symbolism: "Uncontrollable Urge (Chocolate Guy)",
      symbolismDesc: "The physical manifestation of obsessive addiction, pursuing his desires with terrifying, manic velocity.",
    },
    {
            name: "Nancy",
      mainColor: "Gray & White",
      shape: "Standard Female Fish",
      designAnalysis: "A boilerplate female bystander design used purely as background filler. Her lack of distinguishing features makes her the perfect generic civilian for the main cast to inadvertently terrorize.",
      realAnimal: "Unknown",
      personality: "Nancy is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/QVjR1Iycq3wAAAAC/im-home-here.gif",
      color: "border-blue-400",
      symbolism: "The Bystander Conscience",
      symbolismDesc: "An observer of the city's madness, frequently swept up in the collective hysteria despite attempts at normalcy.",
    },
    {
            name: "Harold",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Unknown",
      personality: "Harold is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/4Sv-UyPp768AAAAC/spongebob-spongebob-meme.gif",
      color: "border-teal-400",
      symbolism: "The Combative Everyman",
      symbolismDesc: "Always ready to instigate a riot or brawl over minor disagreements, proving that civilization is merely a thin veil over primal rage.",
    },
    {
            name: "Scooter",
      mainColor: "Purple",
      shape: "Sleek Surf Fish",
      designAnalysis: "A slender purple fish with stereotypical sunglasses and board shorts. His design perfectly encodes late-90s beach-bum surfer culture.",
      realAnimal: "Unknown",
      personality: "Scooter is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/9WKKjpfgOz4AAAAC/scooter-robux.gif",
      color: "border-purple-400",
      symbolism: "The Transient Hedonist",
      symbolismDesc: "A surfer who floats through life prioritizing vibes, frequently experiencing horrific accidents while maintaining absolute apathy.",
    },
    {
            name: "Flats the Flounder",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Unknown",
      personality: "Flats the Flounder is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/QO0GWfww27cAAAAC/sb-spongebob.gif",
      color: "border-teal-400",
      symbolism: "Irrational Violence",
      symbolismDesc: "The purest form of unprovoked aggression. He has no motive for his brutality other than an innate biological imperative to kick butts.",
    },
    {
            name: "Jellyfish King",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Unknown",
      personality: "Jellyfish King is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/buOdVaNDBfoAAAAC/kissy-face-spongebob.gif",
      color: "border-purple-400",
      symbolism: "The Apex Sovereign",
      symbolismDesc: "A ruling electric monarch who enforces the unspoken laws of nature when industrial hubris goes too far.",
    },
    {
            name: "Dennis",
      mainColor: "Dark Gray",
      shape: "Muscular / Spiky",
      designAnalysis: "A heavily spiked, leather-clad biker aesthetic layered over a massive, muscular frame. He is visually coded as a brutal, pragmatic, and highly lethal hitman counter to the show's typical softness.",
      realAnimal: "Unknown",
      personality: "Dennis is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/veZVj7stgGsAAAAC/drama-spongebob.gif",
      color: "border-purple-400",
      symbolism: "Unstoppable Mortality / The Terminator",
      symbolismDesc: "A relentless, boots-wearing force of death who removes the safety net of cartoon invulnerability, making consequence intensely real.",
    },
    {
            name: "The Cyclops",
      mainColor: "Deep Sea Suit",
      shape: "Towering / Mechanical",
      designAnalysis: "A terrifying, faceless deep-sea diving suit. By obscuring his human face, the design alienates him as an unstoppable, monolithic, apocalyptic monster to the sea creatures.",
      realAnimal: "Unknown",
      personality: "The Cyclops is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/IVQ2OP1WTIYAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-orange-400",
      symbolism: "The Anthropocene Terror",
      symbolismDesc: "To the sea creatures, he is the ultimate cosmic horror: a human diver turning living beings into petrified, commodified trinkets.",
    },
    {
            name: "DoodleBob",
      mainColor: "Black & White",
      shape: "Crude 2D Sketch",
      designAnalysis: "An erratic, jagged, black-and-white sketch hastily dragged into a 3D world. His unrefined, sketchy lines perfectly reflect his chaotic, feral, and aggressively unhinged behavior.",
      realAnimal: "Unknown",
      personality: "DoodleBob is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/2XkmAXc_AugAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-blue-400",
      symbolism: "The Frankenstein Dilemma / Created Chaos",
      symbolismDesc: "A primitive, chaotic reflection of his creator lacking moral boundaries, proving that creation without constraint breeds inevitable linguistic and physical destruction.",
    },
    {
            name: "Don the Whale",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Unknown",
      personality: "Don the Whale is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/AasjZaSXqLkAAAAC/whale-diablo-immortal.gif",
      color: "border-purple-400",
      symbolism: "The Competitive Ego",
      symbolismDesc: "A foil to Larry the Lobster, representing the endless arms race of physical bulk in modern gym culture.",
    },
    {
            name: "Chip",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Unknown",
      personality: "Chip is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/2RX3TS20BAsAAAAC/justalotto.gif",
      color: "border-blue-400",
      symbolism: "The Illusion of Utility",
      symbolismDesc: "A potato chip functioning as an imaginary friend, symbolizing how humans project immense sentimental value onto valueless inanimate objects.",
    },
    {
            name: "Penny",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Unknown",
      personality: "Penny is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/B49R2Vu-wcgAAAAC/spongebob-money.gif",
      color: "border-green-400",
      symbolism: "The Monetary Muse",
      symbolismDesc: "A piece of currency anthropomorphized out of sheer loneliness, revealing the tragic intersection of isolation and capital.",
    },
    {
            name: "Narlene",
      mainColor: "Pink",
      shape: "Slender Narwhal",
      designAnalysis: "Her defining narwhal tusk and backwoods attire instantly communicate an eccentric, hyper-energetic, and slightly feral hillbilly personality distinct from Bikini Bottom.",
      realAnimal: "Unknown",
      personality: "Narlene is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/LN9ocvi3z6UAAAAC/bh187-spongebob.gif",
      color: "border-teal-400",
      symbolism: "Backwoods Escapism",
      symbolismDesc: "Represents camp-based nostalgia and the feral simplicity existing outside the modernized boundaries of the city.",
    },
    {
            name: "Nobby",
      mainColor: "Blue",
      shape: "Squat Narwhal",
      designAnalysis: "A short, incredibly dense, and round narwhal chunk. His shape implies slow, dim-witted brute strength, serving as the hulking, silent counterpart to his manic sister Narlene.",
      realAnimal: "Unknown",
      personality: "Nobby is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/itUK44ktVrkAAAAC/we-are-coming-spongebob-squarepants.gif",
      color: "border-pink-400",
      symbolism: "Feral Innocence",
      symbolismDesc: "The wild, uncorrupted, entirely unintelligible side of childhood wonderment living off the grid.",
    },
    {
            name: "Captain Blue",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Unknown",
      personality: "Captain Blue is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/ztqiZ5K2_dsAAAAC/spongebob.gif",
      color: "border-pink-400",
      symbolism: "The Retired Authority",
      symbolismDesc: "An old, grizzled figure clinging to past authority while ultimately offering guidance through cynical, hard-earned survival mechanisms.",
    },
    {
            name: "Mrs Tentacles",
      mainColor: "Variable",
      shape: "Marine Standard",
      designAnalysis: "A standard Bikini Bottom resident designed to fill out the bustling, vibrant background of the oceanic ecosystem.",
      realAnimal: "Unknown",
      personality: "Mrs Tentacles is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/VrWuyWQVAfsAAAAC/squidward-squidward-tentacles.gif",
      color: "border-blue-400",
      symbolism: "The Unattainable Standard",
      symbolismDesc: "Squidward's elderly mother whose constant disappointment echoes the profound dread of failing to meet parental expectations despite lifelong artistic effort.",
    }
];

  const selectedChar = characters.find((c) => c.name === selectedCharName);

  const getRelatedCharacters = (charName: string) => {
    const mainObj = characters.find(c => c.name === charName);
    if (!mainObj) return [];
    
    const explicit = (mainObj as any).relationships?.map((r: any) => r.name) || [];
    const implicit = characters.filter(c => (c as any).relationships?.some((r: any) => r.name === charName)).map(c => c.name);
    
    // Deduplicate names and fetch character objects
    const uniqueNames = Array.from(new Set([...explicit, ...implicit]));
    return uniqueNames.map(name => characters.find(c => c.name === name)).filter(Boolean);
  };

  const isRelated = (targetName: string, hoveredName: string | null) => {
    if (!hoveredName) return false;
    if (targetName === hoveredName) return true;
    
    const relatedList = getRelatedCharacters(hoveredName);
    return relatedList.some(c => c?.name === targetName);
  };

  return (
    <>
      {/* Fixed Full-Screen Background */}
      <div
        className="fixed inset-0 w-full h-full z-[-1] transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${charactersBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
      </div>

      <section className="animate-fade-in-up relative z-10 w-full pt-4">
        {selectedChar ? (
          <div className="animate-fade-in-up">
            <button
              onClick={() => setSelectedCharName(null)}
              className="flex items-center gap-2 mb-6 px-4 py-2 rounded-xl bg-white/70 hover:bg-white/90 text-ocean-deep font-display text-sm transition-all shadow-sm border-2 border-primary"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('characters.back')}
            </button>
            <div className={`rounded-2xl bg-white/80 p-6 md:p-8 border-2 shadow-lg ${selectedChar.color}`}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6 text-center md:text-left">
                {selectedChar.image ? (
                  <img src={selectedChar.image} alt={selectedChar.name} className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-md" />
                ) : (
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200/50 rounded-full flex items-center justify-center text-4xl text-gray-400">?</div>
                )}
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-ocean-deep leading-tight mb-2">{selectedChar.name}</h3>
                  <p className="font-body text-xs md:text-sm font-semibold text-muted-foreground italic px-3 py-1 bg-black/5 rounded-full inline-block">{selectedChar.realAnimal}</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-display text-xl text-primary border-b-2 border-primary/20 pb-2">{t('characters.personality')}</h4>
                <p className="font-body text-foreground leading-relaxed mb-6">
                  {selectedChar.personality}
                </p>

                {/* @ts-ignore */}
                {(selectedChar as any).designAnalysis && (
                  <div className="mb-6">
                    <h4 className="font-display text-xl text-ocean-deep mb-2">Design Analysis</h4>
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap gap-2 md:gap-4 mb-3 text-xs md:text-sm text-ocean-deep/80 font-bold uppercase tracking-wider">
                        {/* @ts-ignore */}
                        <span className="bg-primary/10 px-2 py-1 rounded">{(selectedChar as any).mainColor}</span>
                        {/* @ts-ignore */}
                        <span className="bg-secondary/20 px-2 py-1 rounded">{(selectedChar as any).shape}</span>
                        <span className="bg-ocean/10 px-2 py-1 rounded">{selectedChar.realAnimal}</span>
                      </div>
                      <p className="font-body text-foreground leading-relaxed text-sm md:text-base">
                        {/* @ts-ignore */}
                        {(selectedChar as any).designAnalysis}
                      </p>
                    </div>
                  </div>
                )}

                {/* @ts-ignore */}
                {(selectedChar as any).symbolism && (
                  <div className="mb-8">
                    <h4 className="font-display text-xl text-[#002f5a] mb-2 flex items-center gap-2">
                       <span className="text-xl">👁️</span> Philosophical Representation
                    </h4>
                    <div className="bg-gradient-to-br from-[#f0f9ff]/80 to-[#e0f2fe]/50 backdrop-blur-md rounded-2xl p-5 md:p-6 border-l-4 border-[#ffb347] shadow-sm hover:shadow-md transition-all">
                      <div className="mb-4">
                        {/* @ts-ignore */}
                        <div className="inline-block font-display text-sm md:text-base font-bold text-[#004b87] bg-white border border-[#bae6fd] px-4 py-2 rounded-xl shadow-sm tracking-wide whitespace-normal">
                           Represents: {(selectedChar as any).symbolism}
                        </div>
                      </div>
                      <p className="font-body text-[#1e293b] leading-relaxed text-sm md:text-base border-l-2 border-[#ffb347]/40 pl-3 italic">
                        {/* @ts-ignore */}
                        "{(selectedChar as any).symbolismDesc}"
                      </p>
                    </div>
                  </div>
                )}

                <h4 className="font-display text-xl text-ocean-deep mb-3">{t('characters.relationships')}</h4>
                {(() => {
                  const explicitRels = (selectedChar as any).relationships || [];
                  const implicitRels = characters.reduce((acc: any[], otherChar: any) => {
                    if (otherChar.name !== selectedChar.name && otherChar.relationships) {
                      const ref = otherChar.relationships.find((r: any) => r.name === selectedChar.name);
                      if (ref && !explicitRels.some((er: any) => er.name === otherChar.name)) {
                        acc.push({ name: otherChar.name, desc: `Linked relationship. (Click to view ${otherChar.name}'s profile to learn more!)` });
                      }
                    }
                    return acc;
                  }, []);
                  
                  const allRels = [...explicitRels, ...implicitRels];
                  
                  if (allRels.length === 0) return null;

                  return (
                    <div className="mt-8 pt-4">
                      <h4 className="font-display text-xl text-primary border-b-2 border-primary/20 pb-2">{t('characters.relationships', 'Known Relationships')}</h4>
                      <ul className="mt-4 space-y-3">
                        {allRels.map((rel: any, idx: number) => {
                          const relCharObj = characters.find(c => c.name === rel.name);
                          return (
                            <li key={idx} className="font-body text-[15px] text-foreground/90 bg-white rounded-xl p-3 border-2 border-primary/10 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                              <button 
                                onClick={() => {
                                  setSelectedCharName(rel.name);
                                  window.scrollTo({ top: 300, behavior: 'smooth' }); // Slightly scroll up so profile is fully visible
                                }}
                                className="flex items-start text-left gap-4 w-full group focus:outline-none"
                              >
                                {relCharObj && (
                                  <div className={`w-12 h-12 shrink-0 rounded-full border-2 ${relCharObj.color} bg-white flex items-center justify-center p-0.5 shadow-sm group-hover:scale-110 transition-transform`}>
                                    {relCharObj.image ? (
                                      <img src={relCharObj.image} alt={relCharObj.name} className="w-full h-full object-cover rounded-full" />
                                    ) : (
                                      <span className="text-sm font-bold text-gray-400">?</span>
                                    )}
                                  </div>
                                )}
                                <div className="flex-1 mt-0.5">
                                  <strong className="text-[#002f5a] font-display block mb-1 text-[15px] group-hover:text-primary transition-colors">{rel.name}</strong> 
                                  <span className="text-gray-600 block text-[14px] leading-snug">{rel.desc}</span>
                                </div>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 px-4 w-full flex justify-center pb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 max-w-7xl">
              {characters.map((char) => {
                const isDimmed = hoveredChar !== null && hoveredChar !== char.name;
                
                return (
                  <button
                    key={char.name}
                    onClick={() => setSelectedCharName(char.name)}
                    onMouseEnter={() => setHoveredChar(char.name)}
                    onMouseLeave={() => setHoveredChar(null)}
                    className={`relative flex flex-col items-center group focus:outline-none transition-all duration-500 ${
                      hoveredChar === char.name ? 'z-50 drop-shadow-[0_0_25px_rgba(255,255,255,1)]' : 
                      isDimmed ? 'opacity-10 scale-95 blur-md pointer-events-none' : 
                      'hover:scale-110 active:scale-95'
                    }`}
                  >
                    
                    {/* Orbiting Relationships Constellation - Fixed CSS Transform Override Bug */}
                    {hoveredChar === char.name && (() => {
                      const orbitingChars = getRelatedCharacters(char.name);
                      if (orbitingChars.length === 0) return null;
                      
                      return (
                        <div className="absolute top-12 sm:top-14 left-1/2 w-0 h-0 pointer-events-none z-[200]">
                          {orbitingChars.map((rel: any, index: number, arr: any[]) => {
                             const maxPerRing = 7;
                             const ringIndex = Math.floor(index / maxPerRing);
                             const itemsInThisRing = ringIndex === Math.floor((arr.length - 1) / maxPerRing) ? (arr.length % maxPerRing) || maxPerRing : maxPerRing;
                             const posInRing = index % maxPerRing;
                             
                             const angle = (Math.PI * 2 * posInRing) / itemsInThisRing;
                             const radius = 130 + (ringIndex * 100); 
                             const x = Math.cos(angle) * radius;
                             const y = Math.sin(angle) * radius;
                             
                             return (
                               // The outer wrapper handles raw position offsets without using 'transform'
                               <div 
                                 key={rel.name}
                                 className="absolute pointer-events-none"
                                 style={{ 
                                    left: `${x}px`,
                                    top: `${y}px`,
                                 }}
                               >
                                 {/* The inner wrapper handles the animation, ensuring negative margins perfectly center the 64px box on the exact coordinate */}
                                 <div 
                                    className={`absolute -left-7 -top-7 md:-left-8 md:-top-8 w-14 h-14 md:w-16 md:h-16 rounded-full border-[3px] ${rel.color} bg-white shadow-xl animate-breathe`}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                 >
                                    {rel.image ? (
                                        <img src={rel.image} className="w-full h-full rounded-full object-cover" alt={rel.name} />
                                    ) : (
                                        <span className="w-full h-full flex items-center justify-center font-bold text-gray-400">?</span>
                                    )}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/80 rounded-md px-2 py-0.5 whitespace-nowrap z-[210]">
                                      <span className="text-[10px] md:text-xs font-bold text-cyan-200 drop-shadow-md">
                                        {rel.name}
                                      </span>
                                    </div>
                                 </div>
                               </div>
                             );
                          })}
                        </div>
                      )
                    })()}

                    <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 overflow-hidden shadow-lg ${char.color} bg-white flex items-center justify-center p-1 transition-all`}>
                      {char.image ? (
                        <img src={char.image} alt={char.name} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <span className="text-3xl font-bold text-gray-400">?</span>
                      )}
                    </div>
                    <div className="mt-3 text-center">
                      <h3 className={`font-display font-bold text-sm md:text-base leading-tight transition-colors ${hoveredChar === char.name ? 'text-primary drop-shadow-[0_0_5px_rgba(255,255,0,1)]' : 'text-[#002f5a] drop-shadow-sm group-hover:text-primary'}`}>
                        {char.name}
                      </h3>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CharactersSection;
