import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Microscope, Globe, Satellite } from 'lucide-react';

const DataDashboard = () => {
  const stats = [
    { icon: Microscope, label: 'Experiments', value: '1,247', change: '+12%', color: 'text-glow-cyan' },
    { icon: Globe, label: 'Organisms', value: '3,891', change: '+8%', color: 'text-glow-purple' },
    { icon: Satellite, label: 'Missions', value: '156', change: '+5%', color: 'text-glow-pink' },
    { icon: Activity, label: 'Data Points', value: '2.4M', change: '+18%', color: 'text-glow-cyan' },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-glow-cyan to-glow-purple bg-clip-text text-transparent">
              Research Overview
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-time insights from space biology databases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <Card key={i} className="glass-card border-border hover-glow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <span className="text-sm text-green-400 font-medium">{stat.change}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-card border-border">
            <CardHeader>
              <CardTitle className="text-glow-cyan">Recent Experiments</CardTitle>
              <CardDescription>Latest space biology research</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'Plant Growth in Microgravity', mission: 'ISS-67', status: 'Active' },
                { name: 'Bacterial Evolution Study', mission: 'Artemis-1', status: 'Completed' },
                { name: 'Cell Division Analysis', mission: 'ISS-68', status: 'Active' },
                { name: 'Protein Crystallization', mission: 'SpaceX-25', status: 'Processing' },
              ].map((exp, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-medium">{exp.name}</p>
                    <p className="text-sm text-muted-foreground">{exp.mission}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    exp.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    exp.status === 'Completed' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {exp.status}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card border-border">
            <CardHeader>
              <CardTitle className="text-glow-purple">Active Missions</CardTitle>
              <CardDescription>Ongoing space biology missions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'International Space Station', organisms: 45, duration: '365 days' },
                { name: 'Artemis Lunar Program', organisms: 12, duration: '28 days' },
                { name: 'Mars Sample Return', organisms: 8, duration: 'Ongoing' },
                { name: 'Europa Clipper', organisms: 3, duration: '4 years' },
              ].map((mission, i) => (
                <div key={i} className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">{mission.name}</p>
                    <Satellite className="w-4 h-4 text-glow-purple" />
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{mission.organisms} organisms</span>
                    <span>•</span>
                    <span>{mission.duration}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DataDashboard;
