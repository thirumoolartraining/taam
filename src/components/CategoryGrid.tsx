import { ArrowRight, Wrench, Truck, Zap, Scissors, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import home1 from "@/assets/home1.jpeg";
import home2 from "@/assets/home2.jpeg";
import home3 from "@/assets/home3.jpg";
import home4 from "@/assets/home4.jpeg";
import home5 from "@/assets/home5.jpg";
import home6 from "@/assets/home6.jpg";

const categories = [
  {
    title: "Tractors",
    description: "Powerful tractors for all farming needs",
    icon: Truck,
    image: home1,
    color: "from-primary/10 to-primary/5",
    cta: "Request Quote",
    type: "machinery",
    route: "/request-quote",
    shopRoute: "/machinery/tractors"
  },
  {
    title: "Tillers",
    description: "Efficient soil preparation equipment",
    icon: Settings,
    image: home2,
    color: "from-accent/10 to-accent/5",
    cta: "Request Quote",
    type: "machinery",
    route: "/request-quote",
    shopRoute: "/machinery/tillers"
  },
  {
    title: "Sprayers",
    description: "Professional crop protection systems",
    icon: Zap,
    image: home3,
    color: "from-cta/10 to-cta/5",
    cta: "Request Quote",
    type: "machinery",
    route: "/request-quote",
    shopRoute: "/machinery/sprayers"
  },
  {
    title: "Harvesters",
    description: "Advanced harvesting solutions",
    icon: Scissors,
    image: home4,
    color: "from-primary/10 to-accent/5",
    cta: "Request Quote",
    type: "machinery",
    route: "/request-quote",
    shopRoute: "/machinery/harvesters"
  },
  {
    title: "Ploughs",
    description: "Heavy-duty ploughing equipment",
    icon: Wrench,
    image: home5,
    color: "from-accent/10 to-primary/5",
    cta: "Request Quote",
    type: "machinery",
    route: "/request-quote",
    shopRoute: "/machinery/ploughs"
  },
  {
    title: "Spare Parts",
    description: "Genuine parts for all machinery",
    icon: Settings,
    image: home6,
    color: "from-cta/10 to-accent/5",
    cta: "Shop Now",
    type: "parts",
    route: "/spare-parts",
    shopRoute: "/spare-parts"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From powerful tractors to precision tillers, we provide complete agricultural solutions 
            with genuine spare parts and expert service support.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <Link
                key={category.title}
                to={category.shopRoute}
                className="category-card group cursor-pointer block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`} />
                  
                  {/* Category Icon */}
                  <div className="absolute top-4 right-4 p-3 bg-background/90 rounded-full">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Category Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-md text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  {/* Category CTA */}
                  <Link to={category.route}>
                    <Button 
                      className={
                        category.type === "parts" 
                          ? "btn-cta w-full" 
                          : "btn-quote w-full"
                      }
                      onClick={(e) => e.stopPropagation()}
                    >
                      {category.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors duration-300" />
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/shop-now">
            <Button variant="outline" className="btn-quote px-8 py-3">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;