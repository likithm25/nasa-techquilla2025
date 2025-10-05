import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cloud, Database, Zap, Lock } from 'lucide-react';

const ApiIntegration = () => {
  const integrations = [
    {
      icon: Database,
      name: 'NASA Open Data',
      status: 'Connected',
      endpoints: 5,
      description: 'Access to NASA biological research databases',
      color: 'text-glow-cyan'
    },
    {
      icon: Cloud,
      name: 'ESA Archives',
      status: 'Connected',
      endpoints: 3,
      description: 'European Space Agency biological data',
      color: 'text-glow-purple'
    },
    {
      icon: Zap,
      name: 'PubMed API',
      status: 'Active',
      endpoints: 4,
      description: 'Biomedical literature database',
      color: 'text-glow-pink'
    },
    {
      icon: Lock,
      name: 'OBO Foundry',
      status: 'Connected',
      endpoints: 2,
      description: 'Biological ontologies and relationships',
      color: 'text-glow-cyan'
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-pink bg-clip-text text-transparent">
              API Integrations
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Connected to major space and biological research databases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrations.map((integration, i) => (
            <Card key={i} className="glass-card border-border hover-glow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-muted/30 ${integration.color}`}>
                      <integration.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{integration.name}</CardTitle>
                      <CardDescription>{integration.description}</CardDescription>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${
                      integration.status === 'Connected' ? 'border-green-500 text-green-400' :
                      'border-blue-500 text-blue-400'
                    }`}
                  >
                    {integration.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>{integration.endpoints} active endpoints</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-card border-border mt-8">
          <CardHeader>
            <CardTitle className="text-glow-cyan">API Statistics</CardTitle>
            <CardDescription>Real-time API performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-bold text-glow-cyan">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-glow-purple">142ms</p>
                <p className="text-sm text-muted-foreground">Avg Response</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-glow-pink">1.2M</p>
                <p className="text-sm text-muted-foreground">Requests/Day</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-glow-cyan">14</p>
                <p className="text-sm text-muted-foreground">Data Sources</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ApiIntegration;
