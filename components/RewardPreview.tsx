import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Gift, Coins, Trophy, Star, X } from 'lucide-react';

const rewards = [
  {
    id: 1,
    type: "Airdrop",
    title: "500 FLOW Tokens",
    description: "Congratulations! You've received 500 FLOW tokens for minting our Genesis NFT.",
    icon: Coins,
    value: "500 FLOW",
    rarity: "Common",
    color: "var(--flow-green)",
  },
  {
    id: 2,
    type: "Exclusive Access",
    title: "VIP Discord Channel",
    description: "Welcome to the inner circle! Access our exclusive VIP Discord channel.",
    icon: Star,
    value: "Exclusive",
    rarity: "Rare",
    color: "var(--flow-purple)",
  },
  {
    id: 3,
    type: "Achievement",
    title: "Early Adopter Badge",
    description: "You're one of the first 100 minters! Here's your special badge.",
    icon: Trophy,
    value: "Badge #047",
    rarity: "Legendary",
    color: "#FFD700",
  },
];

export function RewardPreview() {
  const [selectedReward, setSelectedReward] = useState(null);

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
            Reward <span className="text-[var(--flow-green)]">experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create engaging post-mint experiences that delight your community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => setSelectedReward(reward)}
            >
              <div className="bg-card border border-gradient-flow rounded-2xl p-6 h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${reward.color}20` }}
                  >
                    <reward.icon 
                      className="w-6 h-6" 
                      style={{ color: reward.color }}
                    />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {reward.type}
                  </span>
                </div>

                <h3 className="text-lg mb-2">{reward.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {reward.description}
                </p>

                <div className="flex items-center justify-between">
                  <span 
                    className="text-sm px-2 py-1 rounded-full"
                    style={{ 
                      backgroundColor: `${reward.color}10`,
                      color: reward.color 
                    }}
                  >
                    {reward.rarity}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {reward.value}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-gradient-flow bg-card/50 backdrop-blur-sm px-8 py-3 rounded-xl"
          >
            <Gift className="w-5 h-5 mr-2" />
            See All Reward Types
          </Button>
        </motion.div>
      </div>

      {/* Reward Modal */}
      <Dialog 
        open={!!selectedReward} 
        onOpenChange={() => setSelectedReward(null)}
      >
        <DialogContent className="bg-card border-gradient-flow max-w-md">
          {selectedReward && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Gift className="w-5 h-5" />
                    New Reward!
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedReward(null)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </DialogTitle>
              </DialogHeader>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-6"
              >
                <div 
                  className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${selectedReward.color}20` }}
                >
                  <selectedReward.icon 
                    className="w-10 h-10" 
                    style={{ color: selectedReward.color }}
                  />
                </div>
                
                <h3 className="text-xl mb-2">{selectedReward.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {selectedReward.description}
                </p>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span 
                    className="text-sm px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: `${selectedReward.color}10`,
                      color: selectedReward.color 
                    }}
                  >
                    {selectedReward.rarity}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {selectedReward.value}
                  </span>
                </div>
                
                <Button 
                  className="w-full gradient-flow text-white"
                  onClick={() => setSelectedReward(null)}
                >
                  Claim Reward
                </Button>
              </motion.div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}