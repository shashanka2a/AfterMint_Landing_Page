import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Copy, Check, Play } from 'lucide-react';

const codeExamples = {
  install: `npm install @aftermint/sdk

# or with yarn
yarn add @aftermint/sdk`,
  
  basic: `import { AfterMint } from '@aftermint/sdk';

const aftermint = new AfterMint({
  apiKey: 'your-api-key',
  network: 'mainnet', // or 'testnet'
});

// Connect wallet
await aftermint.connectWallet();

// Listen for new mints
aftermint.onMint((mintData) => {
  console.log('New mint detected:', mintData);
  
  // Show reward popup
  aftermint.showReward({
    type: 'airdrop',
    title: '500 FLOW Tokens',
    description: 'Congratulations on your mint!',
    value: '500 FLOW'
  });
});`,

  advanced: `import { AfterMint, RewardType } from '@aftermint/sdk';

const aftermint = new AfterMint({
  apiKey: process.env.AFTERMINT_API_KEY,
  network: 'mainnet',
  collection: '0x1a2b3c4d5e6f7890',
  theme: {
    primaryColor: '#5A67D8',
    secondaryColor: '#48BB78'
  }
});

// Advanced reward configuration
const rewardConfig = {
  rules: [
    {
      condition: 'first_100_mints',
      reward: {
        type: RewardType.EXCLUSIVE_ACCESS,
        title: 'VIP Discord Access',
        metadata: { invite: 'discord.gg/vip' }
      }
    },
    {
      condition: 'rare_trait',
      traits: ['Golden Eyes', 'Diamond Hands'],
      reward: {
        type: RewardType.TOKEN_AIRDROP,
        amount: 1000,
        token: 'FLOW'
      }
    }
  ]
};

aftermint.configureRewards(rewardConfig);

// Custom reward UI
aftermint.onRewardTriggered((reward) => {
  // Your custom reward presentation logic
  showCustomRewardModal(reward);
});`
};

export function SDKExample() {
  const [copiedCode, setCopiedCode] = useState('');
  const [activeTab, setActiveTab] = useState('install');

  const copyToClipboard = (code: string, tab: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(tab);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Simple <span className="text-[var(--flow-green)]">integration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with AfterMint in minutes. Our SDK makes it easy to add post-mint rewards to your Flow NFT project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="install">Installation</TabsTrigger>
              <TabsTrigger value="basic">Basic Usage</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            {Object.entries(codeExamples).map(([tab, code]) => (
              <TabsContent key={tab} value={tab}>
                <div className="relative">
                  <div className="bg-card border border-gradient-flow rounded-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(code, tab)}
                        >
                          {copiedCode === tab ? (
                            <Check className="w-4 h-4 text-[var(--flow-green)]" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <pre className="text-sm overflow-x-auto">
                        <code className="text-foreground whitespace-pre-wrap">
                          {code}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-flow text-white px-8 py-3 rounded-xl"
              >
                <Play className="w-5 h-5 mr-2" />
                Try Interactive Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gradient-flow bg-card/50 backdrop-blur-sm px-8 py-3 rounded-xl"
              >
                Read Documentation
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}