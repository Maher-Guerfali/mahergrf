export interface Experience {
  id: number;
  title: string;
  company: string;
  website?: string;
  period: string;
  description: string;
  icon?: string;
  details: string[];
  screenshots: {
    title: string;
    url: string;
  }[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Game Developer",
    company: "Epic Games",
    period: "2020 - Present",
    description: "Lead developer for multiple AAA game projects, implementing core gameplay mechanics and optimizing performance across platforms.",
    details: [
      "Led a team of 5 developers in creating a next-gen multiplayer experience",
      "Implemented advanced physics systems and character controllers",
      "Optimized rendering pipeline resulting in 40% performance improvement",
      "Developed cross-platform networking solution for seamless multiplayer"
    ],
    screenshots: [
      {
        title: "Game Engine Architecture",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80"
      },
      {
        title: "Multiplayer System",
        url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80"
      },
      {
        title: "Physics Demo",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80"
      }
    ]
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Microsoft",
    period: "2018 - 2020",
    description: "Developed cloud-based solutions for game services, focusing on scalability and real-time multiplayer functionality.",
    details: [
      "Architected and implemented scalable backend services using Azure",
      "Built real-time player matchmaking system handling 100K+ concurrent users",
      "Developed analytics pipeline for player behavior tracking",
      "Created automated deployment pipeline reducing deployment time by 60%"
    ],
    screenshots: [
      {
        title: "System Architecture",
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80"
      },
      {
        title: "Analytics Dashboard",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
      }
    ]
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Independent Studio",
    period: "2016 - 2018",
    description: "Created and launched several successful indie games while managing the entire development pipeline from concept to deployment.",
    details: [
      "Developed and launched 3 successful indie games on Steam and mobile platforms",
      "Implemented custom shader systems for unique visual effects",
      "Created procedural level generation system",
      "Managed community feedback and regular content updates"
    ],
    screenshots: [
      {
        title: "Game Development",
        url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80"
      },
      {
        title: "Visual Effects",
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80"
      }
    ]
  }
];