import harvester1 from "@/assets/harvester1.jpg";
import harvester2 from "@/assets/harvester2.jpg";
import harvester3 from "@/assets/harvester3.jpg";
import harvester4 from "@/assets/harvester4.jpg";
import harvester5 from "@/assets/harvester5.jpg";
import harvester6 from "@/assets/harvester6.jpg";

export const harvesterModels = [
  {
    id: 1,
    name: "Mini Combine Harvester",
    type: "Combine",
    price: "₹15,50,000",
    originalPrice: "₹16,00,000",
    image: harvester1,
    rating: 4.9,
    reviews: 67,
    features: ["Compact Design", "High Efficiency", "Easy Operation", "Low Maintenance"],
    description: "Compact and efficient mini combine harvester designed for small to medium farms with excellent grain quality output.",
    specifications: {
      "Cutting Width": "1.2 meters",
      "Grain Tank": "350 kg",
      "Engine Power": "35 HP Diesel",
      "Productivity": "0.8-1.2 acres/hour",
      "Fuel Tank": "45 Liters",
      "Weight": "2800 kg"
    },
    popular: true,
    discount: "3%",
    inStock: true
  },
  {
    id: 2,
    name: "Paddy Harvester",
    type: "Specialized",
    price: "₹12,75,000",
    originalPrice: "₹14,25,000",
    image: harvester2,
    rating: 4.7,
    reviews: 89,
    features: ["Paddy Specific", "Mud Tracks", "Low Ground Pressure", "Efficient Threshing"],
    description: "Specialized paddy harvester designed for wet field conditions. Features rubber tracks for low ground pressure and efficient threshing system.",
    specifications: {
      "Cutting Width": "1.0 meters",
      "Grain Tank": "300 kg",
      "Engine Power": "28 HP Diesel",
      "Productivity": "0.6-1.0 acres/hour",
      "Track Type": "Rubber Tracks",
      "Weight": "2200 kg"
    },
    popular: false,
    discount: "11%",
    inStock: true
  },
  {
    id: 3,
    name: "Wheat Harvester",
    type: "Combine",
    price: "₹18,50,000",
    originalPrice: "₹20,00,000",
    image: harvester3,
    rating: 4.8,
    reviews: 123,
    features: ["Large Grain Tank", "Advanced Cleaning", "Auto Header Height", "GPS Ready"],
    description: "Advanced wheat harvester with large grain tank and sophisticated cleaning system. Features automatic header height control and GPS compatibility.",
    specifications: {
      "Cutting Width": "1.5 meters",
      "Grain Tank": "500 kg",
      "Engine Power": "45 HP Diesel",
      "Productivity": "1.0-1.5 acres/hour",
      "Fuel Tank": "65 Liters",
      "Weight": "3200 kg"
    },
    popular: true,
    discount: "8%",
    inStock: true
  },
  {
    id: 4,
    name: "Multi Crop Harvester",
    type: "Versatile",
    price: "₹22,00,000",
    originalPrice: "₹24,50,000",
    image: harvester4,
    rating: 4.6,
    reviews: 78,
    features: ["Multiple Crops", "Changeable Sieves", "Variable Speed", "Comfort Cabin"],
    description: "Versatile multi-crop harvester suitable for wheat, rice, barley, and other grains. Features changeable sieves and comfortable operator cabin.",
    specifications: {
      "Cutting Width": "1.8 meters",
      "Grain Tank": "600 kg",
      "Engine Power": "55 HP Diesel",
      "Productivity": "1.2-1.8 acres/hour",
      "Fuel Tank": "80 Liters",
      "Weight": "3800 kg"
    },
    popular: false,
    discount: "10%",
    inStock: true
  },
  {
    id: 5,
    name: "Maize Harvester",
    type: "Specialized",
    price: "₹16,75,000",
    originalPrice: "₹18,25,000",
    image: harvester5,
    rating: 4.5,
    reviews: 56,
    features: ["Corn Specific", "Kernel Processing", "Stalk Chopping", "High Capacity"],
    description: "Specialized maize harvester with kernel processing capability. Features stalk chopping system and high-capacity grain handling.",
    specifications: {
      "Cutting Width": "1.4 meters",
      "Grain Tank": "450 kg",
      "Engine Power": "40 HP Diesel",
      "Productivity": "0.9-1.3 acres/hour",
      "Fuel Tank": "55 Liters",
      "Weight": "3000 kg"
    },
    popular: false,
    discount: "8%",
    inStock: true
  },
  {
    id: 6,
    name: "Self Propelled Reaper",
    type: "Reaper",
    price: "₹8,50,000",
    originalPrice: "₹9,75,000",
    image: harvester6,
    rating: 4.4,
    reviews: 134,
    features: ["Cutting Only", "Windrow Formation", "Fuel Efficient", "Easy Maintenance"],
    description: "Efficient self-propelled reaper for cutting and windrowing crops. Features fuel-efficient operation and easy maintenance design.",
    specifications: {
      "Cutting Width": "1.2 meters",
      "Grain Tank": "N/A",
      "Engine Power": "20 HP Diesel",
      "Productivity": "1.5-2.0 acres/hour",
      "Fuel Tank": "30 Liters",
      "Weight": "1800 kg"
    },
    popular: false,
    discount: "13%",
    inStock: true
  }
];
