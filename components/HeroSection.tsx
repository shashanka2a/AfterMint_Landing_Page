import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Wallet, Play, Zap } from 'lucide-react';

export function HeroSection() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleWalletConnect = () => {
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnected(true);
      setIsWalletModalOpen(false);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-flow-subtle" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 1.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-gradient-flow mb-6">
            <Zap className="w-4 h-4 text-[var(--flow-green)]" />
            <span className="text-sm text-muted-foreground">Unlock post-mint rewards</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            AfterMint
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The SDK that unlocks <span className="text-[var(--flow-green)]">post-mint rewards</span> for NFT holders. 
            Connect wallets, listen to mints, and surprise your community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => setIsWalletModalOpen(true)}
            className="gradient-flow text-white hover:opacity-90 transition-opacity px-8 py-3 rounded-xl"
          >
            <Wallet className="w-5 h-5 mr-2" />
            Connect Wallet
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsDemoModalOpen(true)}
            className="border-gradient-flow bg-card/50 backdrop-blur-sm px-8 py-3 rounded-xl"
          >
            <Play className="w-5 h-5 mr-2" />
            View Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-sm text-muted-foreground"
        >
          Trusted by NFT projects on Flow blockchain
        </motion.div>
      </div>

      {/* Wallet Connect Modal */}
      <Dialog open={isWalletModalOpen} onOpenChange={setIsWalletModalOpen}>
        <DialogContent className="bg-card border-gradient-flow">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="text-center text-muted-foreground mb-6">
              Choose your wallet to connect to Flow blockchain
            </div>
            
            {!isConnected ? (
              <div className="space-y-3">
                <Button
                  onClick={handleWalletConnect}
                  className="w-full h-14 gradient-flow text-white justify-start"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 mr-3" />
                  Flow Wallet
                </Button>
                <Button
                  onClick={handleWalletConnect}
                  variant="outline"
                  className="w-full h-14 justify-start"
                >
                  <div className="w-8 h-8 rounded-full bg-muted mr-3" />
                  Blocto
                </Button>
                <Button
                  onClick={handleWalletConnect}
                  variant="outline"
                  className="w-full h-14 justify-start"
                >
                  <div className="w-8 h-8 rounded-full bg-muted mr-3" />
                  Dapper
                </Button>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full gradient-flow mx-auto mb-4 flex items-center justify-center">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg mb-2">Wallet Connected!</h3>
                <p className="text-muted-foreground text-sm">
                  0x1a2b3c4d...ef56
                </p>
              </motion.div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Demo Modal */}
      <Dialog open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen}>
        <DialogContent className="bg-card border-gradient-flow max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              AfterMint Demo
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="aspect-video bg-gradient-flow-subtle rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">Demo video would play here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  See how AfterMint detects NFT mints and triggers rewards
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}