import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, Heart, ShoppingCart, Search, Filter } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/contexts/CartContext";
import perfume1 from "@/assets/perfume-1.jpg";

const allProducts: Product[] = [
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
  },
  {
    id: 5,
    name: "Ocean Breeze Cologne",
    category: "Perfumes",
    price: 75.99,
    image: "/placeholder.svg",
    rating: 4.5,
    reviews: 89,
    description: "Fresh aquatic scent perfect for summer",
    stock: 18
  },
  {
    id: 6,
    name: "Evening Clutch Bag",
    category: "Bags",
    price: 149.99,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 156,
    badge: "Trending",
    description: "Elegant clutch for special occasions",
    stock: 6
  }
];

export const ProductCatalog = () => {
  const [products, setProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addItem, openCart } = useCart();

  const categories = ["All", "Perfumes", "Bags"];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterProducts(term, selectedCategory);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterProducts(searchTerm, category);
  };

  const filterProducts = (search: string, category: string) => {
    let filtered = allProducts;

    if (category !== "All") {
      filtered = filtered.filter(product => product.category === category);
    }

    if (search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setProducts(filtered);
  };

  const handleAddToCart = (product: Product) => {
    addItem(product);
    openCart();
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our complete selection of luxury items
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryFilter(category)}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-luxury transition-all duration-300 overflow-hidden border-none bg-gradient-card">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  {product.badge && (
                    <Badge className="bg-primary text-primary-foreground">
                      {product.badge}
                    </Badge>
                  )}
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
                      <div className="text-xs text-muted-foreground">
                        Stock: {product.stock}
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};