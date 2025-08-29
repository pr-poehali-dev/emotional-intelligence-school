import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Results from '@/components/Results';
import Reviews from '@/components/Reviews';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Programs />
      <Results />
      <Reviews />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;