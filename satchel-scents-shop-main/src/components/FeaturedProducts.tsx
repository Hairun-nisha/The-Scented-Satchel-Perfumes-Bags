import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import perfume1 from "@/assets/perfume-1.jpg";

const products = [
  {
    id: 1,
    name: "Midnight Rose Eau de Parfum",
    category: "Perfumes",
    price: 89.99,
    originalPrice: 120.00,
    image: perfume1,
    rating: 4.8,
    reviews: 324,
    badge: "Best Seller",
    description: "A captivating blend of rose and vanilla with hints of sandalwood",
    stock: 15
  },
  {
    id: 2,
    name: "Vintage Leather Tote",
    category: "Bags",
    price: 299.99,
    originalPrice: 399.99,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 186,
    badge: "Limited Edition",
    description: "Handcrafted Italian leather with gold-plated hardware",
    stock: 8
  },
  {
    id: 3,
    name: "Golden Orchid Fragrance",
    category: "Perfumes", 
    price: 129.99,
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 298,
    badge: "New Arrival",
    description: "Luxurious floral scent with notes of orchid and amber",
    stock: 22
  },
  {
    id: 4,
    name: "Classic Satchel Bag",
    category: "Bags",
    price: 199.99,
    originalPrice: 249.99,
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 142,
    description: "Timeless design with modern functionality",
    stock: 12
  }
];

export const FeaturedProducts = () => {
  const { addItem, openCart } = useCart();

  const handleAddToCart = (product: any) => {
    addItem(product);
    openCart();
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium fragrances and luxury bags, 
            curated for the sophisticated connoisseur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-luxury transition-all duration-300 overflow-hidden border-none bg-gradient-card">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                {product.originalPrice && (
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="destructive">
                      Save ${(product.originalPrice - product.price).toFixed(0)}
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {product.category}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-foreground">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="luxury" 
            size="lg"
            onClick={() => window.location.href = '/products'}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};