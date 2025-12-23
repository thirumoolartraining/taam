import sprayer1 from "@/assets/sprayer1.jpg";
import sprayer2 from "@/assets/sprayer2.jpg";
import sprayer3 from "@/assets/sprayer3.jpg";
import sprayer4 from "@/assets/sprayer4.jpg";
import sprayer5 from "@/assets/sprayer5.jpg";
import sprayer6 from "@/assets/sprayer6.jpg";

export const sprayerModels = [
  {
    id: 1,
    name: "Battery Sprayer 16L",
    type: "Battery Sprayer",
    price: "₹12,500",
    originalPrice: "₹15,000",
    image: sprayer1,
    rating: 4.7,
    reviews: 234,
    features: ["16L Capacity", "12V Battery", "Adjustable Nozzle", "Lightweight"],
    description: "High-performance battery sprayer with 16L capacity, perfect for efficient crop protection and pest control applications.",
    specifications: {
      "Tank Capacity": "16 Liters",
      "Battery Type": "12V Rechargeable",
      "Pressure Range": "0.15-0.4 MPa",
      "Spray Width": "1-3 meters",
      "Runtime": "4-6 hours",
      "Weight": "3.5 kg"
    },
    popular: true,
    discount: "17%",
    inStock: true
  },
  {
    id: 2,
    name: "Manual Knapsack 20L",
    type: "Manual Sprayer",
    price: "₹3,500",
    originalPrice: "₹4,200",
    image: sprayer2,
    rating: 4.3,
    reviews: 189,
    features: ["20L Capacity", "Manual Pump", "Brass Nozzle", "Comfortable Straps"],
    description: "Reliable manual knapsack sprayer with 20L capacity. Features comfortable shoulder straps and durable construction for long-lasting use.",
    specifications: {
      "Tank Capacity": "20 Liters",
      "Pump Type": "Manual Lever",
      "Pressure Range": "0.2-0.6 MPa",
      "Spray Width": "2-4 meters",
      "Material": "HDPE Tank",
      "Weight": "2.8 kg"
    },
    popular: false,
    discount: "17%",
    inStock: true
  },
  {
    id: 3,
    name: "Boom Sprayer 400L",
    type: "Boom Sprayer",
    price: "₹2,85,000",
    originalPrice: "₹3,15,000",
    image: sprayer3,
    rating: 4.9,
    reviews: 67,
    features: ["400L Tank", "12m Boom", "GPS Compatible", "Auto Section Control"],
    description: "Professional boom sprayer with 400L capacity and 12-meter boom width. Features GPS compatibility and automatic section control for precision application.",
    specifications: {
      "Tank Capacity": "400 Liters",
      "Boom Width": "12 meters",
      "Pump Type": "Diaphragm Pump",
      "Flow Rate": "120 L/min",
      "Power Requirement": "45-65 HP",
      "Weight": "850 kg"
    },
    popular: true,
    discount: "10%",
    inStock: true
  },
  {
    id: 4,
    name: "Power Sprayer 100L",
    type: "Power Sprayer",
    price: "₹45,000",
    originalPrice: "₹52,000",
    image: sprayer4,
    rating: 4.6,
    reviews: 123,
    features: ["100L Tank", "Petrol Engine", "High Pressure", "Trolley Mounted"],
    description: "Heavy-duty power sprayer with 100L capacity and petrol engine. Trolley-mounted design for easy transportation and high-pressure application.",
    specifications: {
      "Tank Capacity": "100 Liters",
      "Engine Type": "2-Stroke Petrol",
      "Engine Power": "2.5 HP",
      "Pressure Range": "0.8-3.0 MPa",
      "Flow Rate": "25 L/min",
      "Weight": "45 kg"
    },
    popular: false,
    discount: "13%",
    inStock: true
  },
  {
    id: 5,
    name: "Electric Sprayer 25L",
    type: "Electric Sprayer",
    price: "₹18,500",
    originalPrice: "₹22,000",
    image: sprayer5,
    rating: 4.8,
    reviews: 156,
    features: ["25L Capacity", "Lithium Battery", "Digital Display", "Variable Speed"],
    description: "Advanced electric sprayer with 25L capacity and lithium battery. Features digital display and variable speed control for precise application.",
    specifications: {
      "Tank Capacity": "25 Liters",
      "Battery Type": "Lithium-ion 18V",
      "Pressure Range": "0.2-0.8 MPa",
      "Runtime": "6-8 hours",
      "Charging Time": "2 hours",
      "Weight": "4.2 kg"
    },
    popular: true,
    discount: "16%",
    inStock: true
  },
  {
    id: 6,
    name: "Neptune Simplify Farming NF-02 ",
    type: "Manual Knapsack Sprayer",
    price: "₹2,500",
    originalPrice: "₹3,000",
    image: sprayer6,
    rating: 4.5,
    reviews: 142,
    features: ["16L Tank Capacity", "High-Pressure Pump", "Telescopic Lance", "3 Nozzles Included"],
    description: "Neptune Simplify Farming NF-02 Manual Knapsack Sprayer with hand-operated high-pressure pump and 16L tank capacity. Features telescopic lance with 3 nozzles, ideal for farming, gardening & pesticide spraying.",
    specifications: {
      "Tank Capacity": "16 Liters",
      "Pump Type": "Hand-Operated High-Pressure",
      "Lance Type": "Telescopic",
      "Nozzles Included": "3 Different Types",
      "Material": "HDPE Tank",
      "Weight": "2.2 kg"
    },
    popular: false,
    discount: "17%",
    inStock: true
  }
];
