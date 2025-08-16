import { motion } from 'motion/react';

const technologies = [
  {
    name: "Flow",
    description: "Blockchain platform",
    logo: "🌊",
    color: "var(--flow-purple)",
  },
  {
    name: "Dynamic",
    description: "Wallet infrastructure",
    logo: "⚡",
    color: "var(--flow-green)",
  },
  {
    name: "Walrus",
    description: "Data storage",
    logo: "🐋",
    color: "#FF6B6B",
  },
  {
    name: "Lit Protocol",
    description: "Access control",
    logo: "🔐",
    color: "#FFD93D",
  },
];

export function PoweredBy() {
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
            Powered by the <span className="text-[var(--flow-purple)]">best</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built on top of industry-leading infrastructure and protocols
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-card border border-gradient-flow rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{tech.logo}</div>
              <h3 className="text-lg mb-2">{tech.name}</h3>
              <p className="text-sm text-muted-foreground">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-gradient-flow">
            <span className="text-sm text-muted-foreground">
              Enterprise-grade security and reliability
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}