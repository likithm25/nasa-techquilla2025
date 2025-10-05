import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SearchExplorer = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All', 'Experiments', 'Organisms', 'Missions', 'Publications'
  ];

  const results = [
    {
      title: 'Microgravity Effects on Plant Cell Division',
      type: 'Experiment',
      mission: 'ISS-67',
      date: '2024-09-15',
      tags: ['Plants', 'Cell Biology', 'Microgravity']
    },
    {
      title: 'Tardigrades in Space Environment',
      type: 'Organism',
      mission: 'Artemis-2',
      date: '2024-08-22',
      tags: ['Tardigrades', 'Extremophiles', 'Survival']
    },
    {
      title: 'Protein Crystallization Study',
      type: 'Experiment',
      mission: 'SpaceX-26',
      date: '2024-10-01',
      tags: ['Proteins', 'Crystallization', 'Research']
    },
    {
      title: 'Bacterial Evolution in Zero-G',
      type: 'Publication',
      mission: 'ISS-68',
      date: '2024-09-30',
      tags: ['Bacteria', 'Evolution', 'Microgravity']
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-glow-purple to-glow-pink bg-clip-text text-transparent">
              Explore Research Data
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Search through thousands of space biology experiments and findings
          </p>
        </div>

        <Card className="glass-card border-border mb-8">
          <CardContent className="pt-6">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search experiments, organisms, missions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-muted/30 border-border focus:border-glow-cyan"
                />
              </div>
              <Button variant="outline" className="border-glow-purple text-glow-purple hover:bg-glow-purple/10">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <Badge
                  key={cat}
                  variant="outline"
                  className="cursor-pointer hover:bg-glow-cyan/10 hover:border-glow-cyan transition-colors"
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {results.map((result, i) => (
            <Card key={i} className="glass-card border-border hover-glow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{result.title}</CardTitle>
                    <div className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-glow-cyan">{result.type}</span>
                      <span>•</span>
                      <span>{result.mission}</span>
                      <span>•</span>
                      <span>{result.date}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  {result.tags.map((tag, j) => (
                    <Badge key={j} variant="secondary" className="bg-muted/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchExplorer;
