import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Github, BookOpen, MessageCircle } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-flow opacity-10" />
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Ready to <span className="text-[var(--flow-purple)]">unlock</span><br />
            post-mint magic?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join hundreds of NFT projects using AfterMint to create unforgettable post-mint experiences for their communities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            size="lg"
            className="gradient-flow text-white px-8 py-4 rounded-xl text-lg"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gradient-flow bg-card/50 backdrop-blur-sm px-8 py-4 rounded-xl text-lg"
          >
            Schedule Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          <div className="flex flex-col items-center gap-2">
            <Github className="w-6 h-6 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Open Source</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BookOpen className="w-6 h-6 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Documentation</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MessageCircle className="w-6 h-6 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">24/7 Support</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 AfterMint. Built with ❤️ for the Flow ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}