import tractor1 from "@/assets/tractor1.jpg";
import tractor2 from "@/assets/tractor2.jpg";
import tractor3 from "@/assets/tractor3.jpg";
import tractor4 from "@/assets/tractor4.jpg";
import tractor5 from "@/assets/tractor5.jpg";
import tractor6 from "@/assets/tractor6.jpg";

export const tractorModels = [
  {
    id: 1,
    name: "Mahindra 575 DI Tractor",
    type: "Utility Tractor",
    price: "₹8,75,000",
    originalPrice: "₹9,25,000",
    image: tractor1,
    rating: 4.8,
    reviews: 156,
    features: ["75 HP", "4WD", "Power Steering", "Hydraulic Lift"],
    description: "The Mahindra 575 DI is a powerful and reliable tractor designed for modern farming needs. With its robust engine and advanced features, it delivers exceptional performance in all farming operations.",
    specifications: {
      "Engine Power": "75 HP",
      "Drive Type": "4WD",
      "Fuel Tank": "65 Liters",
      "Lifting Capacity": "2000 kg",
      "PTO Power": "63 HP",
      "Gear Box": "12 Forward + 3 Reverse"
    },
    popular: true,
    discount: "5%",
    inStock: true
  },
  {
    id: 2,
    name: "John Deere 5050D",
    type: "Utility Tractor",
    price: "₹7,25,000",
    originalPrice: "₹7,75,000",
    image: tractor2,
    rating: 4.7,
    reviews: 134,
    features: ["50 HP", "2WD", "Mechanical Steering", "Open Station"],
    description: "John Deere 5050D is a reliable and fuel-efficient tractor perfect for small to medium farms. Built with John Deere's legendary quality and durability.",
    specifications: {
      "Engine Power": "50 HP",
      "Drive Type": "2WD",
      "Fuel Tank": "60 Liters",
      "Lifting Capacity": "1500 kg",
      "PTO Power": "42 HP",
      "Gear Box": "9 Forward + 3 Reverse"
    },
    popular: false,
    discount: "6%",
    inStock: true
  },
  {
    id: 3,
    name: "Swaraj 855 FE",
    type: "Utility Tractor",
    price: "₹6,85,000",
    originalPrice: "₹7,35,000",
    image: tractor3,
    rating: 4.6,
    reviews: 98,
    features: ["55 HP", "2WD", "Power Steering", "Dual Clutch"],
    description: "Swaraj 855 FE offers excellent fuel efficiency and robust performance for various agricultural applications. Known for its reliability and low maintenance costs.",
    specifications: {
      "Engine Power": "55 HP",
      "Drive Type": "2WD",
      "Fuel Tank": "55 Liters",
      "Lifting Capacity": "1800 kg",
      "PTO Power": "47 HP",
      "Gear Box": "8 Forward + 2 Reverse"
    },
    popular: true,
    discount: "7%",
    inStock: true
  },
  {
    id: 4,
    name: "New Holland 3630 TX",
    type: "Utility Tractor",
    price: "₹9,15,000",
    originalPrice: "₹9,75,000",
    image: tractor4,
    rating: 4.9,
    reviews: 87,
    features: ["75 HP", "4WD", "Shuttle Shift", "ROPS Cabin"],
    description: "New Holland 3630 TX combines power, comfort, and efficiency. Features advanced hydraulics and ergonomic design for maximum productivity.",
    specifications: {
      "Engine Power": "75 HP",
      "Drive Type": "4WD",
      "Fuel Tank": "70 Liters",
      "Lifting Capacity": "2200 kg",
      "PTO Power": "65 HP",
      "Gear Box": "12 Forward + 12 Reverse"
    },
    popular: true,
    discount: "6%",
    inStock: true
  },
  {
    id: 5,
    name: "Sonalika DI 60 Sikander",
    type: "Utility Tractor",
    price: "₹6,45,000",
    originalPrice: "₹6,95,000",
    image: tractor5,
    rating: 4.5,
    reviews: 112,
    features: ["60 HP", "2WD", "Single Clutch", "Open Station"],
    description: "Sonalika DI 60 Sikander is designed for heavy-duty farming operations. Offers excellent fuel economy and powerful performance at an affordable price.",
    specifications: {
      "Engine Power": "60 HP",
      "Drive Type": "2WD",
      "Fuel Tank": "58 Liters",
      "Lifting Capacity": "1900 kg",
      "PTO Power": "52 HP",
      "Gear Box": "8 Forward + 2 Reverse"
    },
    popular: false,
    discount: "7%",
    inStock: true
  },
  {
    id: 6,
    name: "Massey Ferguson 1035 DI",
    type: "Utility Tractor",
    price: "₹8,95,000",
    originalPrice: "₹9,45,000",
    image: tractor6,
    rating: 4.8,
    reviews: 145,
    features: ["85 HP", "4WD", "Power Steering", "Deluxe Cabin"],
    description: "Massey Ferguson 1035 DI delivers superior performance with advanced technology. Perfect for large-scale farming operations with maximum comfort and efficiency.",
    specifications: {
      "Engine Power": "85 HP",
      "Drive Type": "4WD",
      "Fuel Tank": "75 Liters",
      "Lifting Capacity": "2500 kg",
      "PTO Power": "72 HP",
      "Gear Box": "12 Forward + 4 Reverse"
    },
    popular: true,
    discount: "5%",
    inStock: true
  }
];
