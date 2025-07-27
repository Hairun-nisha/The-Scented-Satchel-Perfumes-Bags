import { Button } from "@/components/ui/button";
import perfumeHero from "@/assets/perfume-hero.jpg";
import bagHero from "@/assets/bag-hero.jpg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Luxury
                <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                  Redefined
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Discover our exquisite collection of premium perfumes and handcrafted leather bags. 
                Where elegance meets sophistication.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="luxury" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/products')}
              >
                Shop Perfumes
              </Button>
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/products')}
              >
                Browse Bags
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Premium Fragrances</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Luxury Bags</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative group">
                  <img
                    src={perfumeHero}
                    alt="Luxury Perfume"
                    className="w-full h-64 object-cover rounded-2xl shadow-card group-hover:shadow-luxury transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="relative group">
                  <img
                    src={bagHero}
                    alt="Luxury Bag"
                    className="w-full h-64 object-cover rounded-2xl shadow-card group-hover:shadow-luxury transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-8 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};