import Head from 'next/head'
import { HeroSection } from '../components/HeroSection';
import { HowItWorks } from '../components/HowItWorks';
import { RewardPreview } from '../components/RewardPreview';
import { PoweredBy } from '../components/PoweredBy';
import { SDKExample } from '../components/SDKExample';
import { FinalCTA } from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>AfterMint SDK - Reward your users with NFTs</title>
        <meta name="description" content="AfterMint SDK - Reward your users with NFTs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-flow flex items-center justify-center">
              <span className="text-white font-bold text-sm">AM</span>
            </div>
            <span className="text-lg">AfterMint</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Examples
            </a>
            <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </button>
            <button className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <HeroSection />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="examples">
          <RewardPreview />
        </div>
        <PoweredBy />
        <div id="docs">
          <SDKExample />
        </div>
        <FinalCTA />
      </main>
    </div>
    </>
  );
}