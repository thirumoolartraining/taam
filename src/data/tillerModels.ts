import tiller1 from "@/assets/tiller1.jpg";
import tiller2 from "@/assets/tiller2.jpg";
import tiller3 from "@/assets/tiller3.jpg";
import tiller4 from "@/assets/tiller4.jpg";
import tiller5 from "@/assets/tiller5.jpg";
import tiller6 from "@/assets/tiller6.jpg";

export const tillerModels = [
  {
    id: 1,
    name: "Rotary Tiller 7 Feet",
    type: "Rotary Tiller",
    price: "₹85,000",
    originalPrice: "₹95,000",
    image: tiller1,
    rating: 4.6,
    reviews: 89,
    features: ["7 Feet Width", "Heavy Duty", "Adjustable Depth", "Easy Maintenance"],
    description: "Professional grade rotary tiller designed for efficient soil preparation. Features heavy-duty blades and adjustable depth control for optimal performance.",
    specifications: {
      "Working Width": "7 Feet (2.1m)",
      "Number of Blades": "42 Blades",
      "Depth Range": "6-8 inches",
      "Power Requirement": "45-65 HP",
      "Weight": "580 kg",
      "Blade Material": "Hardened Steel"
    },
    popular: false,
    discount: "10%",
    inStock: true
  },
  {
    id: 2,
    name: "Cultivator 9 Tyne",
    type: "Cultivator",
    price: "₹45,000",
    originalPrice: "₹52,000",
    image: tiller2,
    rating: 4.4,
    reviews: 67,
    features: ["9 Tyne", "Spring Loaded", "Adjustable Width", "Robust Frame"],
    description: "Heavy-duty cultivator with 9 spring-loaded tines for effective soil breaking and weed control. Ideal for secondary tillage operations.",
    specifications: {
      "Working Width": "2.5 meters",
      "Number of Tines": "9 Tines",
      "Depth Range": "4-6 inches",
      "Power Requirement": "35-50 HP",
      "Weight": "320 kg",
      "Frame Material": "High Tensile Steel"
    },
    popular: true,
    discount: "13%",
    inStock: true
  },
  {
    id: 3,
    name: "Power Harrow 6 Feet",
    type: "Power Harrow",
    price: "₹1,25,000",
    originalPrice: "₹1,40,000",
    image: tiller3,
    rating: 4.8,
    reviews: 45,
    features: ["6 Feet Width", "Vertical Tines", "Rear Roller", "PTO Driven"],
    description: "Advanced power harrow for superior seedbed preparation. Creates fine, level seedbed with excellent soil structure for optimal crop establishment.",
    specifications: {
      "Working Width": "6 Feet (1.8m)",
      "Number of Tines": "36 Tines",
      "Depth Range": "3-6 inches",
      "Power Requirement": "50-70 HP",
      "Weight": "750 kg",
      "Roller Type": "Cage Roller"
    },
    popular: true,
    discount: "11%",
    inStock: true
  },
  {
    id: 4,
    name: "Disc Harrow 20 Disc",
    type: "Disc Harrow",
    price: "₹65,000",
    originalPrice: "₹75,000",
    image: tiller4,
    rating: 4.5,
    reviews: 78,
    features: ["20 Disc", "Heavy Duty", "Adjustable Angle", "Grease Fittings"],
    description: "Robust disc harrow with 20 high-quality discs for effective soil cutting and mixing. Perfect for breaking hard soil and crop residue incorporation.",
    specifications: {
      "Working Width": "2.8 meters",
      "Number of Discs": "20 Discs",
      "Disc Size": "22 inches",
      "Power Requirement": "40-60 HP",
      "Weight": "480 kg",
      "Disc Material": "Boron Steel"
    },
    popular: false,
    discount: "13%",
    inStock: true
  },
  {
    id: 5,
    name: "Subsoiler 3 Shank",
    type: "Subsoiler",
    price: "₹38,000",
    originalPrice: "₹42,000",
    image: tiller5,
    rating: 4.6,
    reviews: 56,
    features: ["3 Shank", "Deep Tillage", "Hardpan Breaking", "Soil Decompaction"],
    description: "Heavy-duty subsoiler designed for deep tillage and hardpan breaking. Improves soil structure and water infiltration for better crop growth.",
    specifications: {
      "Working Width": "2.1 meters",
      "Number of Shanks": "3 Shanks",
      "Depth Range": "12-18 inches",
      "Power Requirement": "50-70 HP",
      "Weight": "380 kg",
      "Shank Material": "Spring Steel"
    },
    popular: false,
    discount: "10%",
    inStock: true
  },
  {
    id: 6,
    name: "Spring Tine Cultivator",
    type: "Spring Cultivator",
    price: "₹55,000",
    originalPrice: "₹62,000",
    image: tiller6,
    rating: 4.7,
    reviews: 91,
    features: ["Flexible Tines", "Self-Cleaning", "Adjustable Pressure", "Folding Wings"],
    description: "Versatile spring tine cultivator for stubble cultivation and seedbed preparation. Features flexible tines that adapt to ground contours.",
    specifications: {
      "Working Width": "3.0 meters",
      "Number of Tines": "15 Tines",
      "Depth Range": "2-8 inches",
      "Power Requirement": "35-55 HP",
      "Weight": "420 kg",
      "Tine Material": "Spring Steel"
    },
    popular: true,
    discount: "11%",
    inStock: true
  }
];
