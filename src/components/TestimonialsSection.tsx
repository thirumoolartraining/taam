import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Raman Krishnan",
    location: "Coimbatore",
    rating: 5,
    text: "Their tractor has been working flawlessly for 3 years. The service team is always available when needed. Best investment for my 20-acre farm.",
    crop: "Cotton & Sugarcane",
    avatar: "RK"
  },
  {
    name: "Murugan Selvam",
    location: "Thanjavur",
    rating: 5,
    text: "Excellent after-sales service! When my sprayer needed repairs during pest season, they fixed it within 24 hours. Truly reliable company.",
    crop: "Paddy Fields",
    avatar: "MS"
  },
  {
    name: "Lakshmi Narayanan",
    location: "Salem",
    rating: 5,
    text: "The power tiller is perfect for my vegetable farming. Easy to operate and maintain. The team provided proper training and ongoing support.",
    crop: "Vegetable Farming",
    avatar: "LN"
  },
  {
    name: "Karthik Subramanian",
    location: "Madurai",
    rating: 5,
    text: "Great machines at honest prices. The harvester increased my productivity by 40%. Spare parts are always available when needed.",
    crop: "Wheat & Corn",
    avatar: "KS"
  },
  {
    name: "Priya Devi",
    location: "Trichy",
    rating: 5,
    text: "As a woman farmer, I appreciate their patient guidance and support. The machinery is user-friendly and the service is exceptional.",
    crop: "Organic Farming",
    avatar: "PD"
  },
  {
    name: "Shankar Pillai",
    location: "Tirunelveli",
    rating: 5,
    text: "Been using their equipment for 5 years. Never had major issues. The maintenance contracts are worth every rupee. Highly recommended!",
    crop: "Mixed Farming",
    avatar: "SP"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            What Our <span className="text-primary">Farmers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from farmers across Tamil Nadu who trust Thiru Annamalaiyar 
            for their agricultural machinery needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-[--shadow-product] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary/20 transform rotate-180" />
              </div>

              {/* Testimonial Text */}
              <div className="mb-6">
                <p className="quote-text text-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                  <div className="text-xs text-primary font-medium mt-1">
                    {testimonial.crop}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 text-center px-4">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 bg-gradient-to-r from-primary/5 via-accent/5 to-cta/5 rounded-2xl sm:rounded-full px-6 sm:px-8 py-6 sm:py-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="text-sm font-medium text-foreground">
              1,000+ Happy Customers
            </div>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="text-sm font-medium text-foreground">
              98% Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;