import { Rocket, Database, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center space-y-8 animate-slide-up">
        <div className="inline-block">
          <Rocket className="w-16 h-16 mx-auto mb-6 text-glow-cyan animate-float" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="glow-text bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-pink bg-clip-text text-transparent">
            Space Biology
          </span>
          <br />
          <span className="text-foreground">Knowledge Engine</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Aggregating, analyzing, and visualizing space biology research data from NASA and space agencies worldwide
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-glow-cyan to-glow-purple hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-[0_0_30px_hsl(var(--glow-cyan)/0.3)] hover:shadow-[0_0_50px_hsl(var(--glow-cyan)/0.5)] transition-all"
          >
            <Database className="mr-2 h-5 w-5" />
            Explore Data
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-glow-cyan text-glow-cyan hover:bg-glow-cyan/10 font-semibold px-8 py-6 text-lg"
          >
            <BarChart3 className="mr-2 h-5 w-5" />
            View Analytics
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          {[
            { icon: Database, title: 'Data Integration', desc: 'Aggregate data from multiple space agencies' },
            { icon: BarChart3, title: 'Visualization', desc: 'Interactive charts and knowledge graphs' },
            { icon: Rocket, title: 'Real-time Updates', desc: 'Live data from ongoing space missions' },
          ].map((feature, i) => (
            <div 
              key={i} 
              className="glass-card p-6 rounded-xl hover-glow"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <feature.icon className="w-10 h-10 text-glow-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
