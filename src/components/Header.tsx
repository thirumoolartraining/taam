import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Machinery", path: "/machinery" },
    { name: "Spare Parts", path: "/spare-parts" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Update cart and wishlist counts from localStorage
  const updateCounts = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setCartCount(cart.length);
    setWishlistCount(wishlist.length);
  };

  useEffect(() => {
    updateCounts();
    // Listen for storage changes
    window.addEventListener('storage', updateCounts);
    // Listen for custom events
    window.addEventListener('cartUpdated', updateCounts);
    window.addEventListener('wishlistUpdated', updateCounts);
    
    return () => {
      window.removeEventListener('storage', updateCounts);
      window.removeEventListener('cartUpdated', updateCounts);
      window.removeEventListener('wishlistUpdated', updateCounts);
    };
  }, []);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="text-2xl font-bold text-primary">
            Thiru Annamalaiyar
          </div>
          <div className="hidden text-sm text-muted-foreground md:block">
            Agricultural Machinery
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(item.path) 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Cart and Wishlist Icons */}
          <div className="flex items-center space-x-2">
            <Link to="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="h-5 w-5 text-gray-600" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500">
                  {wishlistCount}
                </Badge>
              )}
            </Link>
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                  {cartCount}
                </Badge>
              )}
            </Link>
          </div>
          
          <Link to="/request-quote">
            <Button size="sm" className="btn-quote">
              <Phone className="mr-2 h-4 w-4" />
              Request Quote
            </Button>
          </Link>
          <Link to="/shop-now">
            <Button className="btn-cta">
              Shop Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive(item.path) 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                {/* Mobile Cart and Wishlist */}
                <div className="flex gap-2 pb-2">
                  <Link to="/wishlist" onClick={() => setIsMenuOpen(false)} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Heart className="mr-2 h-4 w-4" />
                      Wishlist ({wishlistCount})
                    </Button>
                  </Link>
                  <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Cart ({cartCount})
                    </Button>
                  </Link>
                </div>
                
                <Link to="/request-quote" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="btn-quote w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Request Quote
                  </Button>
                </Link>
                <Link to="/shop-now" onClick={() => setIsMenuOpen(false)}>
                  <Button className="btn-cta w-full">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

    </header>
    {/* Spacer for fixed header */}
    <div className="h-16" />
    </>
  );
};

// WhatsApp Floating Button Component - exported separately
export const WhatsAppButton = () => (
  <a 
    href="https://wa.me/919894377407" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full h-14 w-14 shadow-lg flex items-center justify-center transition-all hover:scale-110"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default Header;