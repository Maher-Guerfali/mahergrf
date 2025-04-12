import React, { useState } from 'react';
import { 
  Gamepad2, 
  Code2, 
  Network, 
  Blocks, 
  Coins,
  GitBranch,
  Cloud,
  Braces,
  FileCode,
  Database,
  Wallet,
  CreditCard,
  ShoppingCart,
  Layers,
  Globe,
  Cpu,
  Zap
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    items: string[];
  }[];
}

interface Props {
  theme: 'default' | 'light' | 'dark';
}

const skillCategories: SkillCategory[] = [
  {
    title: "Tools & Engines",
    icon: <Gamepad2 size={24} />,
    skills: [
      { name: "Game Engines", items: ["Unity", "Unreal Engine"] },
      { name: "Version Control", items: ["Git", "Plastic SCM"] },
      { name: "Cloud & Multiplayer", items: ["PlayFab", "Photon", "Firebase"] }
    ]
  },
  {
    title: "Programming",
    icon: <Code2 size={24} />,
    skills: [
      { name: "Languages", items: ["C#", "C++", "JavaScript", "TypeScript"] },
      { name: "Frameworks", items: ["React", "Next.js", "Tailwind", "Three.js", "WebGL", "WebGPU", "Storybook"] }
    ]
  },
  {
    title: "Backend & Networking",
    icon: <Network size={24} />,
    skills: [
      { name: "Cloud Services", items: ["Firebase", "AWS", "PlayFab"] },
      { name: "Databases", items: ["SQL", "MongoDB"] },
      { name: "Networking", items: ["WebSockets", "REST APIs", "GraphQL"] }
    ]
  },
  {
    title: "Web3 & Blockchain",
    icon: <Blocks size={24} />,
    skills: [
      { name: "Crypto Payments", items: ["MetaMask", "WalletConnect"] },
      { name: "Smart Contracts", items: ["Solidity", "Ethereum", "Polygon"] },
      { name: "NFT Integration", items: ["OpenSea API", "Alchemy"] }
    ]
  },
  {
    title: "Monetization",
    icon: <Coins size={24} />,
    skills: [
      { name: "In-App Purchases", items: ["Unity IAP", "Google Play Billing", "Apple StoreKit"] },
      { name: "Web3 Payments", items: ["Crypto Wallets", "Stripe", "Binance Pay"] }
    ]
  }
];

const getIconForSkill = (name: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    // Game Engines & Tools
    "Unity": <Gamepad2 size={20} />,
    "Unreal Engine": <Gamepad2 size={20} />,
    "Git": <GitBranch size={20} />,
    "Plastic SCM": <GitBranch size={20} />,
    "PlayFab": <Cloud size={20} />,
    "Photon": <Zap size={20} />,
    "Firebase": <Database size={20} />,

    // Programming Languages
    "C#": <Braces size={20} />,
    "C++": <FileCode size={20} />,
    "JavaScript": <Globe size={20} />,
    "TypeScript": <Layers size={20} />,

    // Frameworks
    "React": <Code2 size={20} />,
    "Next.js": <Code2 size={20} />,
    "Three.js": <Cpu size={20} />,
    "WebGL": <Cpu size={20} />,
    "WebGPU": <Cpu size={20} />,

    // Web3 & Blockchain
    "MetaMask": <Wallet size={20} />,
    "WalletConnect": <Wallet size={20} />,
    "Solidity": <FileCode size={20} />,
    "Ethereum": <Blocks size={20} />,
    "Polygon": <Blocks size={20} />,

    // Monetization
    "Unity IAP": <ShoppingCart size={20} />,
    "Google Play Billing": <CreditCard size={20} />,
    "Apple StoreKit": <CreditCard size={20} />,
    "Stripe": <CreditCard size={20} />,
    "Binance Pay": <Coins size={20} />
  };

  return iconMap[name] || <Code2 size={20} />;
};

const SkillsSection = ({ theme }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {skillCategories.map((category) => (
          <button
            key={category.title}
            onClick={() => setSelectedCategory(
              selectedCategory === category.title ? null : category.title
            )}
            className={`
              relative p-4 rounded-xl
              ${theme === 'light' 
                ? 'bg-blue-100/80 text-blue-900'
                : 'bg-gray-800/30 text-white'}
              backdrop-blur-sm
              border border-white/10
              transition-all duration-300
              hover:bg-opacity-90
              ${selectedCategory === category.title ? 'ring-2 ring-blue-500' : ''}
            `}
          >
            <div className="flex flex-col items-center gap-2">
              {category.icon}
              <span className="text-sm font-medium text-center">{category.title}</span>
            </div>
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className={`rounded-xl p-6 border border-white/10 ${
          theme === 'light'
            ? 'bg-blue-100/80 text-blue-900'
            : 'bg-gray-800/30 text-white'
        } backdrop-blur-sm`}>
          {skillCategories
            .find(cat => cat.title === selectedCategory)
            ?.skills.map((skillGroup, groupIndex) => (
              <div key={groupIndex} className="mb-8 last:mb-0">
                <h4 className={`text-lg font-medium mb-4 ${
                  theme === 'light' ? 'text-blue-800' : 'text-blue-400'
                }`}>{skillGroup.name}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {skillGroup.items.map((item, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        theme === 'light'
                          ? 'bg-blue-200/50 hover:bg-blue-200/70'
                          : 'bg-gray-800/50 hover:bg-gray-700/50'
                      } transition-colors`}
                    >
                      <div className={theme === 'light' ? 'text-blue-800' : 'text-blue-400'}>
                        {getIconForSkill(item)}
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SkillsSection;