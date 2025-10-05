import Starfield from '@/components/Starfield';
import Hero from '@/components/Hero';
import DataDashboard from '@/components/DataDashboard';
import SearchExplorer from '@/components/SearchExplorer';
import ApiIntegration from '@/components/ApiIntegration';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Hero />
      <DataDashboard />
      <SearchExplorer />
      <ApiIntegration />
      <Footer />
    </div>
  );
};

export default Index;
