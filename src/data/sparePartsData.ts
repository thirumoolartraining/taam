import sparePart1 from "@/assets/spare-part1.jpg";
import sparePart2 from "@/assets/spare-part2.jpg";
import sparePart3 from "@/assets/spare-part3.jpg";
import sparePart4 from "@/assets/spare-part4.jpg";
import sparePart5 from "@/assets/spare-part5.jpg";
import sparePart6 from "@/assets/spare-part6.jpg";

export const sparePartsData = [
  {
    id: 1,
    name: "Engine Oil Filter Set",
    type: "Engine Parts",
    price: "₹850",
    originalPrice: "₹1,000",
    image: sparePart1,
    rating: 4.4,
    reviews: 345,
    features: ["Universal Fit", "High Quality", "Long Lasting", "Easy Installation"],
    description: "Premium quality engine oil filter set compatible with most tractor models, ensuring optimal engine performance.",
    specifications: {
      "Compatibility": "Universal Fit",
      "Filter Type": "Spin-on",
      "Material": "High-grade Paper",
      "Thread Size": "3/4-16 UNF",
      "Height": "95mm",
      "Diameter": "76mm"
    },
    popular: false,
    discount: "15%",
    inStock: true
  },
  {
    id: 2,
    name: "Hydraulic Pump Assembly",
    type: "Hydraulic Parts",
    price: "₹12,500",
    originalPrice: "₹14,500",
    image: sparePart2,
    rating: 4.7,
    reviews: 156,
    features: ["High Pressure", "Durable Construction", "Precise Fit", "OEM Quality"],
    description: "High-quality hydraulic pump assembly for tractors. Features durable construction and precise fit for reliable performance.",
    specifications: {
      "Flow Rate": "45 L/min",
      "Maximum Pressure": "210 bar",
      "Mounting Type": "SAE A",
      "Port Size": "1/2 inch",
      "Weight": "8.5 kg",
      "Material": "Cast Iron"
    },
    popular: true,
    discount: "14%",
    inStock: true
  },
  {
    id: 3,
    name: "Air Filter Element",
    type: "Engine Parts",
    price: "₹650",
    originalPrice: "₹800",
    image: sparePart3,
    rating: 4.5,
    reviews: 234,
    features: ["High Filtration", "Dust Protection", "Long Life", "Easy Replacement"],
    description: "High-efficiency air filter element providing excellent dust protection and long service life for your engine.",
    specifications: {
      "Filtration Efficiency": "99.5%",
      "Filter Media": "Pleated Paper",
      "Outer Diameter": "185mm",
      "Inner Diameter": "125mm",
      "Height": "280mm",
      "Service Life": "500 hours"
    },
    popular: true,
    discount: "19%",
    inStock: true
  },
  {
    id: 4,
    name: "Clutch Assembly Kit",
    type: "Transmission Parts",
    price: "₹8,900",
    originalPrice: "₹10,200",
    image: sparePart4,
    rating: 4.6,
    reviews: 89,
    features: ["Complete Kit", "Heavy Duty", "Smooth Operation", "Professional Grade"],
    description: "Complete clutch assembly kit for smooth power transmission. Includes pressure plate, clutch disc, and release bearing.",
    specifications: {
      "Clutch Diameter": "280mm",
      "Spline Count": "21",
      "Pressure Plate Type": "Diaphragm",
      "Torque Capacity": "450 Nm",
      "Weight": "12 kg",
      "Material": "Steel/Ceramic"
    },
    popular: false,
    discount: "13%",
    inStock: true
  },
  {
    id: 5,
    name: "Alternator 12V 65A",
    type: "Electrical Parts",
    price: "₹4,500",
    originalPrice: "₹5,200",
    image: sparePart5,
    rating: 4.3,
    reviews: 167,
    features: ["12V Output", "65A Capacity", "Reliable Performance", "Easy Installation"],
    description: "High-output 12V alternator with 65A capacity. Provides reliable electrical power for all tractor systems.",
    specifications: {
      "Voltage": "12V",
      "Current": "65A",
      "Rotation": "Clockwise",
      "Pulley Type": "V-Belt",
      "Mounting": "Ear Mount",
      "Weight": "5.2 kg"
    },
    popular: false,
    discount: "13%",
    inStock: true
  },
  {
    id: 6,
    name: "Fuel Injection Pump",
    type: "Engine Parts",
    price: "₹18,500",
    originalPrice: "₹21,000",
    image: sparePart6,
    rating: 4.8,
    reviews: 78,
    features: ["Precision Injection", "Fuel Efficient", "Durable Design", "OEM Specification"],
    description: "Precision fuel injection pump designed for optimal fuel delivery and engine efficiency. Built to OEM specifications.",
    specifications: {
      "Injection Pressure": "180 bar",
      "Flow Rate": "120 cc/min",
      "Plunger Diameter": "9mm",
      "Governor Type": "Mechanical",
      "Weight": "6.8 kg",
      "Material": "Hardened Steel"
    },
    popular: true,
    discount: "12%",
    inStock: true
  }
];
