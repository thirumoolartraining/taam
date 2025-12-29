import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import AfterSalesSection from "@/components/AfterSalesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

// Import Google Fonts
const GoogleFonts = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;1,400;1,600&display=swap"
      rel="stylesheet"
    />
  </>
);

const Index = () => {
  return (
    <>
      <GoogleFonts />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <CategoryGrid />
          <WhyChooseUs />
          <AfterSalesSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
