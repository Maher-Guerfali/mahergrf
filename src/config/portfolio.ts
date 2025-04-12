export const portfolioConfig = {
  // Personal Information
  name: "Maher Guerfali",
  title: "Software Engineer & Game Developer",
  description: "Where Algorithmic Precision Meets Artistic Design.",
  
  // Social & Contact Links (kept unchanged)
  social: {
    email: "maher.guerfali@gmail.com", // Replace with your email
    linkedin: "https://linkedin.com/in/maher-guerfali",
    github: "https://github.com/maher-guerfali",
    telegram: "https://t.me/TEAM_Kappa_1",
    calendly: "https://calendly.com/maher-guerfali/",
    resume: "https://coffee-myrta-36.tiiny.site/",
    buyMeACoffee: "https://www.buymeacoffee.com/elkarrita"
  },
  
  // Education
  education: [
    {
      university: "ESPRIT : Ecole Sup Privée d'Ingénierie et de Technologies",
      degree: "Engineering in Computer Science",
      period: "2018 - 2023",
      icon: "https://media.licdn.com/dms/image/v2/C4D0BAQE5RXDgS-RpXA/company-logo_200_200/company-logo_200_200/0/1630491756929/esprit_2_logo?e=2147483647&v=beta&t=SJN1xDMgxBaRrEIj6VSepEqxNXjOx_aKx5hJH-5uSBc"
    },
    {
      university: "Hammem Sousse High School",
      degree: "Baccalaureate in Mathematics",
      period: "2014 - 2017",
      icon: "https://www.tourismtunisia.com/wp-content/uploads/2013/11/1.gif"
    }
  ],
  
  // Certifications
  certifications: [
    {
      name: "Unity VR Development",
      issuer: "Unity Technologies",
      date: "2023",
      icon: "https://images.credly.com/size/680x680/images/e0d9d005-83fd-404d-816e-9957220f2316/image.png"
    },
    {
      name: "Using AR Foundation in Unity",
      issuer: "Meta",
      date: "2023",
      icon: "https://media.licdn.com/dms/image/v2/C4E0BAQFdNatYGiBelg/company-logo_100_100/company-logo_100_100/0/1636138754252/facebook_logo?e=1749686400&v=beta&t=sF3N3sMSddCxesFFrQwpri4UCr3kxCsF_jubDKrRTMY"
    }
  ],

  // About Images
  aboutImages: [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHoFnyZDolhr7WoC7U8a5FpbVfjndhTol6Q&s",
      title: "University"
    },
    {
      url: "https://i.ibb.co/B5Br3mzW/Screenshot-2025-04-10-at-02-57-01.png",
      title: "6 years old me"
    },
    
    
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Ramzi Mokhtar",
      role: "Technical Team Lead at Brilliant",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFYh76RWGo9_A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709123565129?e=1749686400&v=beta&t=bYQHp9PRvNOfHe8BxMS6bkBltrWhMWGyUMmTG_ygzMs",
      
  "text": "I've had the pleasure of working with Maher at Brilliant, and I can confidently say he is one of the most talented and reliable software engineers I've worked with. Maher brings a rare combination of strong software engineering skills and a deep understanding of AR/VR platforms like Unity. He consistently pushes the boundaries of what's possible—whether it’s building intuitive, real-time interactions or optimizing complex 3D environments for performance across devices. Beyond his technical skills, Maher is a fantastic collaborator. He is always open to new ideas, quick to share knowledge, and incredibly reliable when it comes to delivering on deadlines. His passion for immersive tech is contagious and elevates everyone around him. Any team would be lucky to have Maher on board, and I can't recommend him highly enough."

    },
    {
      id: 2,
      name: "Supreme leader",
      role: "TEAM DAO Leader",
      avatar: "https://images.unspflash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      text: "Maher's contribution to our game development projects was invaluable. His deep understanding of game mechanics and optimization techniques helped us create truly engaging experiences."
    },
  
  ],

  // Featured Games (updated videoUrl fields)
  games: [
    {
      id: 7,
      title: "Pingoos Vs Zombies",
      imageUrl: "https://i.ibb.co/MyKk5x8H/1739981654276-e499fd42-9b9c-4a37-91d8-349f553b5343.png",
      videoUrl: "https://www.youtube.com/embed/CRQHvLcmFMw",
      gameUrl: "https://testflight.apple.com/join/9C15EEV6",
      "duration": "5 Months",
      description: "High-performance mobile endless runner featuring fast-paced action, adaptive difficulty, and full monetization systems. Launched on iOS and Android with online/offline sync, optimized for low-end to high-end devices.",
      fullDescription: "Solo-developed and published 'Pingoos Vs Zombies', a Subway Surfers-inspired endless runner set in a stylized snowy world. The game combines action, survival, and platforming with an evolving difficulty curve and dynamic enemy interactions. Developed with Unity, PlayFab/Firebase backend, and optimized to deliver smooth gameplay on all devices.",
      role: "Lead Developer, Game Designer, Technical Artist",
      challenges: [
        "Reducing on-screen vertices from 1.5M to ~55K via mesh decimation in Blender",
        "Maintaining stable 60 FPS across low-end Android and iOS devices",
        "Building a robust stage-based spawning system with progressive difficulty",
        "Designing immersive gameplay using custom haptics, camera effects, and feedback via the Feel package",
        "Implementing IAPs, Unity Ads, and a real-time leaderboard with PlayFab sync (even offline)"
      ],
      results: [
        "Approved for TestFlight and Google Play launch",
        "Playable demo praised for performance and fluidity by testers",
        "Used as a flagship Web3 title for the Pingoos NFT ecosystem"
      ],
      screenshots: [
        { title: "Gameplay Screenshot 1", url: "https://i.ibb.co/NgjHWFXm/Screenshot-2025-03-15-at-15-15-41.png" },
        { title: "Gameplay Screenshot 2", url: "https://i.ibb.co/ZR7FWHKX/Screenshot-2025-03-14-at-02-48-00.png" }
      ]
    },
    
    {
      "id": 8,
      "title": "VR 360° Streaming Experience",
      "imageUrl": "https://i.ibb.co/gL2bMVVZ/Screenshot-2025-03-30-at-05-05-26.png",
      "videoUrl": "https://www.youtube.com/embed/j_0sB1PP00c",
      "gameUrl": "https://www.youtube.com/embed/j_0sB1PP00c",
      "description": "Immersive 360° VR video streaming application built for Oculus Quest 2, supporting high-quality 4K playback, binary video decoding, and hands-free navigation using pointer UI.",
      "fullDescription": "This VR app delivers cinematic 360° video experiences using internally stored video files, optimized for Quest 2 hardware. Designed for clients in entertainment and training sectors, the application supports smooth 60fps 4K playback, intuitive hands-free controls, and internal storage decoding for large video files.",
      "role": "Solo XR Developer",
      "duration": "3 Weeks",
      "challenges": [
        "Accessing and reading binary video data from internal storage on Oculus Quest 2",
        "Supporting 4K video streaming at stable 60fps on mobile VR hardware",
        "Designing a hands-free interaction system for users without controllers"
      ],
      "results": [
        "Seamless 360° 4K playback on Oculus Quest 2 with optimized memory streaming",
        "Implemented pointer-based UI for complete controller-free interaction",
        "Delivered to a B2B client in the immersive media industry"
      ],
      "screenshots": []
    },
    {
      "id": 77,
      "title": "AI-Powered XR Creator Toolkit",
      "imageUrl": "https://media.licdn.com/dms/image/v2/C4D0BAQEg5WGjmsfrOQ/company-logo_200_200/company-logo_200_200/0/1630462346452/brillaint_logo?e=2147483647&v=beta&t=qQGEaiqxLjPGlRqOw31cfkusd1Oz8C3gOLhbnYr17N0",
      "videoUrl": "https://www.youtube.com/embed/6D_Zuqrsf1I",
      "duration": "4 Weeks",
      "gameUrl": "https://brilliant.net.sa/",
      "role": "Lead XR Developer",
      "description": "XR toolkit for real-time speech-to-3D content creation, enabling presenters and creators to spawn models using voice commands with AI integration.",
      "fullDescription": "Developed in collaboration with AI researchers, designers, and video producers, this government-backed XR project empowers creators and presenters to control 3D content in real-time using natural voice commands. I led Unity development and AI integration, leveraging OpenAI APIs (Whisper, ChatGPT, DALL·E) and external model-generation services like Meshy for speech-to-3D interaction.\n\nUsers can say phrases like 'introduce this car' during a live XR presentation, and the system anchors a 3D car model in their hand — pulled from our optimized model database or generated on-the-fly using AI APIs. Models are then tracked and presented with spatial accuracy using Unity’s XR pipeline.\n\nI engineered a low-latency speech detection pipeline with Whisper activation, integrated a Node.js backend for real-time instruction parsing, and helped design a structured command format (e.g., [action: spawn, object: car, location: left hand]).\n\nThe platform supports both headset and WebGL environments and was used for high-profile creative meetings and interactive content creation in Saudi Arabia.",
      "challenges": [
        "Real-time speech-to-3D object spawning using OpenAI Whisper and Meshy",
        "Synchronizing AI-generated 3D models with body-tracked spatial anchors",
        "Building cross-platform XR support for headset and WebGL use cases"
      ],
      "results": [
        "Delivered the first Saudi AI-powered XR creation toolkit used by content creators",
        "Enabled hands-free 3D storytelling experiences via voice commands",
        "Reduced model generation latency by optimizing API and local fallback strategies"
      ],
      "screenshots": []
    },
    {
      "id": 9,
      "title": "Jet Pack Game",
      "imageUrl": "https://i.ibb.co/8n2GNLhR/Screenshot-2025-03-30-at-02-23-48.png",
      "videoUrl": "https://www.youtube.com/embed/mXN9uUiUl3Y",
      "duration": "2 Days",
      "gameUrl": "https://pingoos.itch.io/pingdash",
      "description": "A fast-paced voxel-style WebGL endless runner with PlayFab leaderboard integration.",
      "fullDescription": "Built in just two days as part of the Pingoos.gg game bundle, this Unity WebGL game features infinite jetpack gameplay set in a voxel-style world inspired by the Pingoos NFT collection. I developed the game solo, focusing on snappy controls, smooth animations, and performance optimization for browser play.\n\nThe game is backed by Azure PlayFab, supporting online leaderboard tracking and player data sync. Optimized to run at 60 FPS in WebGL, it handles resource loading efficiently and uses a lightweight visual style that complements the NFT aesthetic.\n\nThis was one of four games released as part of a crypto-enabled web gaming platform, showcasing tight turnaround development and backend integration under time pressure.",
      "role": "Solo Developer",
      "challenges": [
        "Rapid development cycle under 48 hours",
        "Achieving 60 FPS performance in WebGL builds",
        "PlayFab leaderboard integration for online score tracking"
      ],
      "results": [
        "Delivered on time as part of the 4-game Pingoos.gg bundle",
        "Stable WebGL build with consistent 60 FPS across browsers",
        "Full online leaderboard system live with Azure PlayFab"
      ],
      "screenshots": []
    },
    
    {
      "id": 10,
      "title": "VR First Aid Simulator",
      "imageUrl": "https://i.ibb.co/tMf37w3y/Screenshot-2025-03-30-at-02-46-22.png",
      "videoUrl": "",
      "gameUrl": "",
      "description": "A VR simulation used for emergency first-aid training, developed in partnership with the Red Cross during an engineering internship.",
      "fullDescription": "Developed during my engineering final project at Tadreeex, this VR training simulator helps professionals learn how to respond to industrial workplace accidents in realistic, immersive scenarios. I expanded a basic sample into a full-fledged experience by designing 5 unique emergency sequences, utilizing active ragdoll physics combined with animated transitions for lifelike reactions.\n\nThe system uses Singleton managers for procedural training flow and step validation. I collaborated regularly with Red Cross officials and medical trainers to refine the realism of each scenario, focusing on workplace-specific trauma response.\n\nAn internal backend system was also developed to track each user's completion time and interaction accuracy. This allowed team managers to assess performance and issue Red Cross certifications for employees based on training metrics — merging hands-on simulation with real-world accountability.",
      "role": "VR Developer (Internship Project)",
      "challenges": [
        "Designing lifelike emergency VR scenarios for industrial accidents",
        "Collaborating with Red Cross professionals to validate accuracy",
        "Implementing realistic ragdoll physics with animation blending"
      ],
      "results": [
        "Delivered 5 fully interactive emergency scenarios",
        "Used in real-world Red Cross certification workflow",
        "Backend time tracking for employee performance evaluation"
      ],
      "screenshots": [
        {
          "title": "Screenshot 2",
          "url": "https://i.ibb.co/Pz9CG8qF/Screenshot-2025-03-30-at-02-47-59.png"
        }
      ]
    },
    
    {
      "id": 11,
      "title": "RESET — VR Survival Shooter",
      "imageUrl": "https://i.ibb.co/mC0Lr13H/Screenshot-2025-04-10-at-12-49-24.png",
      "videoUrl": "https://www.youtube.com/embed/vOiVohWd6WY",
      "gameUrl": "",
      "description": "A fast-paced VR survival shooter with custom enemy AI, ragdoll physics, and interactive combat mechanics — built for Oculus Quest 2.",
      "fullDescription": "RESET is a VR survival shooter developed as a commissioned project for Second City Studio (UK) for internal deployment in their VR arcade rooms. Designed from the ground up, the game places players in a closed survival arena with dynamic enemy waves, weapon pickups, hidden items, and an adaptive difficulty system.\n\nUsing PuppetMaster for advanced ragdoll simulation, enemies react to gunfire with full-body physical feedback while navigating realistic AI behaviors such as chasing, attacking, and flanking. I implemented custom recoil handling and damage curves across different ranged weapons, supported by procedural animations and haptics using the Feel package.\n\nThe game features an endless survival mode where players earn ammo and upgrades as they progress. I also built an integrated in-game shop, optimized for Quest 2 performance — reducing draw calls, minimizing texture memory usage, and ensuring stable 60 FPS gameplay even under heavy loads.",
      "role": "Solo Developer & Technical Designer",
      "challenges": [
        "Building fully physical AI characters with PuppetMaster and NavMesh AI",
        "Designing a modular weapon system with recoil, damage types, and upgrades",
        "Maintaining 60 FPS with complex physics and VFX on Quest 2"
      ],
      "results": [
        "Commissioned and deployed for enterprise VR clients",
        "Tested successfully across multiple Quest 2 environments",
        "Received positive internal feedback from employees and management"
      ],
      "screenshots": [
        {
          "title": "Screenshot 1",
          "url": "https://i.ibb.co/4kPm3Wb/Screenshot-2025-03-30-at-03-19-54.png"
        },
        {
          "title": "Screenshot 2",
          "url": "https://i.ibb.co/sptXYWrV/Screenshot-2025-03-30-at-03-20-23.png"
        }
      ]
    }
,    
{
  "id": 12,
  "title": "Fortnite Clone Mobile",
  "imageUrl": "https://d12jofbmgge65s.cloudfront.net/wp-content/uploads/2023/02/tech-guide_header-image-fortnite-1.webp",
  "videoUrl": "https://www.youtube.com/embed/j3Gr4uu2vc0",
  "gameUrl": "",
  "description": "A mobile battle royale game inspired by Fortnite, featuring large-scale multiplayer action with custom playable characters and dynamic map generation.",
  "fullDescription": "This prototype leverages the Photon Fusion Battle Royale template to create a mobile version of Fortnite. It supports room-based battles with up to 100 players and features fully customizable characters. The map is randomly generated in each match, featuring custom buildings and loot positions to ensure a unique experience every game. The game is designed to deliver an engaging multiplayer experience with core battle royale mechanics, dynamic environments, and competitive action.",
  "role": "Lead Developer & Game Designer",
  "challenges": [
    "Optimizing network synchronization for large-scale multiplayer",
    "Balancing game mechanics for a fast-paced battle royale experience",
    "Implementing custom playable characters and player progression systems",
    "Designing and implementing a dynamic, procedurally generated map for every match"
  ],
  "results": [
    "Successfully developed a working prototype featuring 100-player battle royale rooms",
    "Incorporated custom character models and skins into the game",
    "Tested and optimized the game for smooth performance on mobile devices",
    "Implemented a dynamic map system with custom buildings and randomized loot positions"
  ],
  "screenshots": [
    { "title": "Icon", "url": "https://i.ibb.co/NdSvQbVZ/Screenshot-2025-03-30-at-03-39-19.png" }
  ]
}

,
    {
      "id": 13,
      "title": "TeamBoy",
      "imageUrl": "https://i.ibb.co/MysfygzH/Screenshot-2025-03-30-at-05-04-11.png",
      "videoUrl": "https://www.youtube.com/embed/TCxTyu1w8OA",
      "gameUrl": "https://teamboy-pi.vercel.app/",
      "description": "A revolutionary Web3 WebGL game hosted within the Telegram app. Featuring a custom-built Game Boy-like console UI, this retro-style game integrates seamlessly with a cryptocurrency ecosystem. Players earn real crypto funds based on their in-game score, transferred directly to their crypto wallets (MetaMask, Binance API).",
      "fullDescription": "TeamBoy offers a nostalgic gaming experience combined with the power of Web3 technology. Players navigate a retro-inspired game while earning cryptocurrency rewards. The game is fully synchronized with Telegram, allowing easy player sign-in and wallet integration for seamless crypto transactions. Additionally, it includes location tracking and replicates classic arcade games, functioning as an innovative recruitment tool that connects gamers with real-world opportunities.",
      "role": "Lead Developer & Game Designer",
      "challenges": [
        "Designing a Web3-enabled game integrated into the Telegram platform",
        "Optimizing performance for real-time crypto transactions and game data synchronization",
        "Developing a 1:1 replica of classic arcade games with modern tech features",
        "Implementing location-based services and maintaining system synchronization across devices"
      ],
      "results": [
        "Over 1 million downloads and growing",
        "4.8/5 average user rating, reflecting strong player engagement",
        "Featured on Telegram's top app recommendations and widely praised for innovative gameplay"
      ],
      "screenshots": [
        { "title": "Game Interface 1", "url": "https://i.ibb.co/4nySL25B/Screenshot-2025-03-30-at-05-02-10.png" },
        { "title": "Game Interface 2", "url": "https://i.ibb.co/Vpx1ptth/Screenshot-2025-03-30-at-05-02-55.png" }
      ]
    },
    
  ],

  // Web Projects (moved projects from games array to here)
  
    "webProjects": [
      {
        "id": 1,
        "title": "Ferrari 3D Room",
        "imageUrl": "https://i.ibb.co/Xxd5QRqC/Screenshot-2025-03-30-at-01-51-10.png",
        "videoUrl": "",
        "duration": "2 Days",
        "engine": "Needle.js, React",
        "gameUrl": "https://maher-guerfali.github.io/FerrariDao/?Supreme=234435",
        "description": "A 3D interactive room built with React, Unity, Three.js, and Needle.js. It features auto camera movement,VR View, 3D interactable assets, music, and all models and animation costumes created with Blender.",
        "fullDescription": "This project features an immersive 3D Ferrari-themed room, allowing users to explore a garage scene with animations and interactive elements. Built using React and Needle.js for the web framework, with Unity and Three.js handling the 3D rendering, all assets were modeled and animated using Blender. The project also includes a shop scene for the eSports team 'Team Supreme'.",
        "role": "Lead Developer & Game Designer",
        "challenges": [
          "Integrating complex 3D models and animations into the web environment",
          "Ensuring smooth camera transitions and interactions with the 3D elements",
          "VR Ready View buttons ti experience it using VR headset,walkable"
        ],
        "results": [
          "Fully interactive 3D room with Ferrari branding and Team Supreme features",
          "Smooth experience across Web, Mobile, VR, offering an immersive e-commerce and interactive experience"
        ],
        "screenshots": [
          { "title": "Screenshot 1", "url": "https://i.ibb.co/Xxd5QRqC/Screenshot-2025-03-30-at-01-51-10.png" },
          { "title": "Screenshot 2", "url": "https://i.ibb.co/v6TjfZ8v/Screenshot-2025-03-30-at-01-51-14.png" }
        ]
      },
      {
        "id": 4,
        "title": "Ferrari Product Website",
        "imageUrl": "https://i.ibb.co/XfsmTDnh/Screenshot-2025-03-30-at-01-50-44.png",
        "videoUrl": "",
        "duration": "2 Days",
        "engine": "Needle.js, React",
        "gameUrl": "https://ferrariproduct.vercel.app/",
        "description": "A real-life product website developed in collaboration with Ferrari and a gaming company. It showcases an interactive racing car room featuring 3D models and animation for the eSports team 'Team Supreme'.",
        "fullDescription": "This website features a 3D scene showcasing a racing car room designed for the eSports team 'Team Supreme'. It was built with Needle.js and React to ensure a seamless experience, incorporating Blender-modeled assets and animations. The site includes interactive elements for users to explore the products and racing car features.",
        "role": "Lead Developer & Game Designer",
        "challenges": [
          "Creating a fully interactive 3D racing car room that mirrors a real-life showroom",
          "Integrating animations and media for a dynamic user experience",
          "Optimizing the website for high performance across devices"
        ],
        "results": [
          "Engaging racing car room with interactive elements and animations",
          "Responsive design optimized for both desktop and mobile viewing"
        ],
        "screenshots": [
          { "title": "Screenshot", "url": "https://i.ibb.co/XfsmTDnh/Screenshot-2025-03-30-at-01-50-44.png" }
        ],
        "icon": "https://i.ibb.co/2Yg296P4/unnamed.png"
      },
      {
        "id": 6,
        "title": "Pingoos NFT Website",
        "imageUrl": "https://i.ibb.co/svSHWQDy/Screenshot-2025-03-30-at-03-48-41.png",
        "videoUrl": "s",
        "webUrl": "",
        "gameUrl": "https://www.pingoos.gg",
        "description": "Official website for the Pingoos NFT collection, built with Next.js. The site features interactive elements, privacy policy, and responsive design for mobile devices.",
        "fullDescription": "The Pingoos NFT website is a simple yet effective platform to showcase the NFT collection. Built with Next.js, it includes all the necessary features such as a privacy policy for the studio and apps. The website was designed to be responsive, with a focus on mobile users. The design was provided by a UI designer, and the development process took around 4 weeks.",
        "role": "Lead Developer",
        "challenges": [
          "Ensuring mobile responsiveness for all devices",
          "Integrating privacy policy for the studio and apps"
        ],
        "results": [
          "Responsive design optimized for mobile",
          "Successful integration of privacy policy"
        ],
        "screenshots": [
          { "title": "Pingoos Homepage", "url": "https://i.ibb.co/svSHWQDy/Screenshot-2025-03-30-at-03-48-41.png" },
          { "title": "Pingoos Games Section", "url": "https://i.ibb.co/qLyzh6fW/Screenshot-2025-03-30-at-03-49-17.png" }
        ]
      }
,      
      {
        "id": 2,
        "title": "Elkarrita Website",
        "imageUrl": "https://i.ibb.co/TB2Ns0s9/Screenshot-2025-03-30-at-03-54-51.png",
        "videoUrl": "https://www.youtube.com/embed/5ITSExZgL5Q",
        "gameUrl": "https://www.elkarrita.com/",
        "description": "My own small busniss  e-commerce website built with React.js and needlejs AR.",
        "fullDescription": "The Elkarrita website is an e-commerce platform developed with React.js. Real Tryout items with VR ,AR , providing users with a secure and seamless shopping experience. The platform is optimized for fast loading times and smooth transactions.",
        "role": "Main Developer & Web Designer",
        "challenges": [
        
          "Ensuring responsive design across various device types",
          "Optimizing for speed and performance to handle high traffic"
        ],
        "results": [
         
          "Optimized for both desktop and mobile shopping experiences"
        ],
        "screenshots": [
          { "title": "Screenshot", "url": "https://i.ibb.co/pv5X9H1q/Screenshot-2025-03-30-at-03-54-44.png" }
        ]
      },
      {
        "id": 3,
        "title": "Petrie Website",
        "imageUrl": "https://i.ibb.co/35cyYDdp/Screenshot-2025-03-30-at-01-50-58.png",
        "videoUrl": "",
        "gameUrl": "https://sbbrilliant.com/",
        "description": "A quick turnaround website developed for a specific event in Saudi Arabia, showcasing products linked to my company. Built with HTML, CSS, and JavaScript within 20 hours to be ready for the event.",
        "fullDescription": "The Petrie website was developed in under 20 hours to feature a virtual storefront for items being sold at a specific event in Saudi Arabia. As the web developer for the company was absent, I stepped in to create a fully responsive website using HTML, CSS, and JavaScript. The site provides a user-friendly interface for showcasing products, ensuring smooth navigation, and facilitating calls for items the next day. It was developed under intense time pressure to meet the event's needs.",
        "role": "Main Developer",
        "challenges": [
          "Developing the website under tight time constraints (20 hours)",
          "Ensuring the website was ready for immediate calls for items at the event",
          "Creating a responsive design from scratch without a pre-existing framework"
        ],
        "results": [
          "Completed and launched the website within 20 hours",
          "Successfully enabled calls for products starting the next day",
          "Responsive design optimized for various devices"
        ],
        "screenshots": [
          { "title": "Screenshot", "url": "https://i.ibb.co/35cyYDdp/Screenshot-2025-03-30-at-01-50-58.png" }
        ]
      },
      
    ],
  
  
  // Work Experience (updated)
  experiences: [
    {
      "id": 1,
      "title": "Senior XR Developer",
      "company": "Brilliant",
      "website": "https://brilliant.net.sa",
      "period": "October 2024 - Present",
      "description": "Building advanced XR applications with AI integration for a government-focused real-time video editing platform.",
      "icon": "https://i.ibb.co/d4Q97WFp/logo-white.png",
      "details": [
        "Collaborated with in-house AI researchers to integrate custom models into a Unity-based WebXR application",
        "Developed features allowing real-time video editing in XR environments using Unity, ARKit, OpenCV, and Needle Engine",
        "Successfully implemented OpenAI APIs (ChatGPT, Whisper, DALL·E) to drive voice, text, and image-based AR interactions",
        "Created trackable 3D models with AI-driven effects and live video overlays inside Unity",
        "Worked closely with web developers to build complementary Next.js interfaces and integrate with the core XR app"
      ],
      "screenshots": []
    },
    
    {
      "id": 2,
      "title": "Lead Game & Software Engineer",
      "company": "Majin Studios (Pingoos, France)",
      "website": "https://www.pingoos.gg",
      "period": "June 2023 - July 2024",
      "description": "Led development across web, game, and backend systems for the Pingoos NFT ecosystem under Majin Studios.",
      "icon": "https://i.ibb.co/MyKk5x8H/1739981654276-e499fd42-9b9c-4a37-91d8-349f553b5343.png",
      "details": [
        "Spearheaded the creation of the Pingoos.gg platform, handling Web3 integrations, multiplayer systems, and real-time backend features",
        "Designed and solo-developed multiple Unity WebGL games, including the viral *Pingoos vs Zombies* and the endless runner experience",
        "Built and maintained online systems: player profiles, live leaderboards, referral system, and in-game shop",
        "Oversaw project lifecycle from prototyping to deployment, managing occasional external collaborators (3D artists, UI designers)",
        "Ensured performance optimization, visual polish, and stability across mobile and browser platforms"
      ],
      "screenshots": []
    },
    
    {
      "id": 3,
      "title": "XR Developer Intern",
      "company": "Tadreex",
      "website": "https://tadreex.com",
      "period": "January 2023 - June 2023",
      "description": "Contributed to immersive VR training simulations for healthcare and emergency response, collaborating with Red Cross professionals.",
      "icon": "https://media.licdn.com/dms/image/v2/D560BAQH1rqA2uO6jwQ/company-logo_100_100/company-logo_100_100/0/1693578016335/tadreex_logo?e=1749686400&v=beta&t=QiGX5ApOapbMZ0pUbB3VUnnS7-A8k4tvvtkVTk8W4ss",
      "details": [
        "Built and optimized interactive VR scenarios simulating real-world medical emergencies using Unity and Oculus SDK",
        "Integrated gesture-based interactions and real-time feedback systems for procedural training",
        "Worked closely with medical professionals and senior developers to refine the accuracy and realism of simulations",
        "Explored AI-driven feedback and adaptive difficulty systems for improving trainee performance",
        "Contributed to team documentation, agile sprints, and field testing for deployment in healthcare institutions"
      ],
      "screenshots": []
    }
    
  ]
};
