import { motion } from 'motion/react';
import { Wallet, Zap, Gift } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    title: "Connect Wallet",
    description: "Users connect their Flow wallet to your app using AfterMint's wallet integration.",
    code: "aftermint.connectWallet()",
  },
  {
    icon: Zap,
    title: "Listen for Mints",
    description: "AfterMint monitors the blockchain for new NFT mints from your collection in real-time.",
    code: "aftermint.onMint(callback)",
  },
  {
    icon: Gift,
    title: "Trigger Rewards",
    description: "Automatically present rewards, airdrops, or exclusive content to new NFT holders.",
    code: "aftermint.showReward(data)",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            How it <span className="text-[var(--flow-purple)]">works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to implement post-mint rewards for your NFT collection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[var(--flow-purple)] to-[var(--flow-green)] opacity-30 z-0" />
              )}
              
              <div className="relative z-10 bg-card border border-gradient-flow rounded-2xl p-8 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl gradient-flow flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <h3 className="text-xl mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                <div className="bg-muted/50 rounded-lg p-4 border">
                  <code className="text-[var(--flow-green)] text-sm font-mono">
                    {step.code}
                  </code>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}