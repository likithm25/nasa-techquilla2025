import { Github, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-glow-cyan to-glow-purple bg-clip-text text-transparent">
              Space Biology Knowledge Engine
            </h3>
            <p className="text-muted-foreground mb-4">
              Advancing space biology research through data aggregation, visualization, and collaboration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <Github className="w-5 h-5 text-glow-cyan" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <Twitter className="w-5 h-5 text-glow-purple" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <Mail className="w-5 h-5 text-glow-pink" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-glow-cyan transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-glow-cyan transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-glow-cyan transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-glow-cyan transition-colors">Research Papers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-glow-cyan transition-colors">Mission</a></li>
              <li><a href="#" className="hover:text-glow-cyan transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-glow-cyan transition-colors">Contributors</a></li>
              <li><a href="#" className="hover:text-glow-cyan transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Space Biology Knowledge Engine. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
