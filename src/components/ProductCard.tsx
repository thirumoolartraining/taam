import { ArrowRight, Eye, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
  originalPrice?: string;
  badge?: string;
  specifications?: string[];
  type: "machinery" | "parts";
  inStock?: boolean;
}

const ProductCard = ({ 
  title, 
  description, 
  image, 
  price, 
  originalPrice,
  badge,
  specifications = [],
  type,
  inStock = true 
}: ProductCardProps) => {
  const handlePrimaryAction = () => {
    if (type === "machinery") {
      // Open quote request modal or navigate to quote page
      console.log("Request quote for:", title);
    } else {
      // Add to cart for spare parts
      console.log("Add to cart:", title);
    }
  };

  const handleSecondaryAction = () => {
    if (type === "machinery") {
      // Book demo
      console.log("Book demo for:", title);
    } else {
      // Quick buy
      console.log("Quick buy:", title);
    }
  };

  return (
    <div className="product-card group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="product-card-image"
        />
        
        {/* Product Badge */}
        {badge && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            {badge}
          </Badge>
        )}

        {/* Stock Status */}
        {type === "parts" && (
          <Badge 
            className={`absolute top-3 right-3 ${
              inStock 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-destructive text-destructive-foreground'
            }`}
          >
            {inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button size="sm" variant="secondary" className="bg-background hover:bg-background/90">
            <Eye className="h-4 w-4 mr-1" />
            View
          </Button>
          <Button size="sm" variant="secondary" className="bg-background hover:bg-background/90">
            <MessageCircle className="h-4 w-4 mr-1" />
            WhatsApp
          </Button>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-6 space-y-4">
        {/* Title and Description */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        {/* Specifications */}
        {specifications.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {specifications.slice(0, 3).map((spec, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Pricing */}
        {price && type === "parts" && (
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-primary">₹{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice}
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-2 pt-2">
          <Button 
            className={type === "machinery" ? "btn-quote w-full" : "btn-cta w-full"}
            onClick={handlePrimaryAction}
            disabled={type === "parts" && !inStock}
          >
            {type === "machinery" ? "Request Quote" : (inStock ? "Add to Cart" : "Out of Stock")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={handleSecondaryAction}
          >
            {type === "machinery" ? "Book Demo" : "Buy Now"}
          </Button>
        </div>

        {/* Quick Contact for Machinery */}
        {type === "machinery" && (
          <div className="text-center pt-2 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-1">Need help choosing?</p>
            <Button variant="link" size="sm" className="text-primary p-0 h-auto">
              Call Expert: +91 98943 77407
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;