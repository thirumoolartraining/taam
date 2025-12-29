import plough1 from "@/assets/plough1.jpg";
import plough2 from "@/assets/plough2.jpg";
import plough3 from "@/assets/plough3.jpg";
import plough4 from "@/assets/plough4.jpg";
import plough5 from "@/assets/plough5.jpg";
import plough6 from "@/assets/plough6.jpg";

export const ploughModels = [
  {
    id: 1,
    name: "Disc Plough 3 Furrow",
    type: "Disc Plough",
    price: "₹45,000",
    originalPrice: "₹50,000",
    image: plough1,
    rating: 4.5,
    reviews: 123,
    features: ["3 Furrow", "Heavy Duty Discs", "Adjustable", "Durable Frame"],
    description: "Heavy-duty disc plough with 3 furrows, perfect for primary tillage in hard and dry soil conditions.",
    specifications: {
      "Number of Furrows": "3",
      "Disc Size": "24 inches",
      "Working Width": "90 cm",
      "Power Requirement": "35-45 HP",
      "Weight": "420 kg",
      "Frame Material": "High Tensile Steel"
    },
    popular: true,
    discount: "10%",
    inStock: true
  },
  {
    id: 2,
    name: "Mould Board Plough 2 Furrow",
    type: "Mould Board",
    price: "₹35,000",
    originalPrice: "₹40,000",
    image: plough2,
    rating: 4.4,
    reviews: 98,
    features: ["2 Furrow", "Complete Inversion", "Weed Burial", "Soil Mixing"],
    description: "Traditional mould board plough with 2 furrows for complete soil inversion and effective weed burial.",
    specifications: {
      "Number of Furrows": "2",
      "Furrow Width": "30 cm",
      "Working Width": "60 cm",
      "Power Requirement": "25-35 HP",
      "Weight": "280 kg",
      "Frame Material": "Cast Iron"
    },
    popular: false,
    discount: "13%",
    inStock: true
  },
  {
    id: 3,
    name: "Reversible Plough 4 Furrow",
    type: "Reversible",
    price: "₹85,000",
    originalPrice: "₹95,000",
    image: plough3,
    rating: 4.8,
    reviews: 67,
    features: ["4 Furrow", "Reversible Action", "No Headland", "Efficient Operation"],
    description: "Advanced reversible plough with 4 furrows. Eliminates headland requirements and provides efficient field operation.",
    specifications: {
      "Number of Furrows": "4",
      "Furrow Width": "35 cm",
      "Working Width": "140 cm",
      "Power Requirement": "55-75 HP",
      "Weight": "650 kg",
      "Frame Material": "High Tensile Steel"
    },
    popular: true,
    discount: "11%",
    inStock: true
  },
  {
    id: 4,
    name: "Chisel Plough 7 Tyne",
    type: "Chisel",
    price: "₹28,000",
    originalPrice: "₹32,000",
    image: plough4,
    rating: 4.3,
    reviews: 89,
    features: ["7 Tyne", "Deep Penetration", "Soil Breaking", "Minimal Inversion"],
    description: "Chisel plough with 7 tines for deep soil penetration and breaking without complete inversion. Ideal for conservation tillage.",
    specifications: {
      "Number of Tines": "7",
      "Working Width": "210 cm",
      "Depth Range": "8-12 inches",
      "Power Requirement": "45-60 HP",
      "Weight": "380 kg",
      "Tine Material": "Spring Steel"
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
    image: plough5,
    rating: 4.6,
    reviews: 76,
    features: ["3 Shank", "Deep Tillage", "Hardpan Breaking", "Soil Decompaction"],
    description: "Heavy-duty subsoiler with 3 shanks for deep tillage and hardpan breaking. Improves soil structure and water infiltration.",
    specifications: {
      "Number of Shanks": "3",
      "Working Width": "90 cm",
      "Depth Range": "12-18 inches",
      "Power Requirement": "50-70 HP",
      "Weight": "420 kg",
      "Shank Material": "High Carbon Steel"
    },
    popular: false,
    discount: "10%",
    inStock: true
  },
  {
    id: 6,
    name: "Heavy Duty Disc Plough 5 Furrow",
    type: "Heavy Disc",
    price: "₹75,000",
    originalPrice: "₹85,000",
    image: plough6,
    rating: 4.7,
    reviews: 112,
    features: ["5 Furrow", "Extra Heavy", "Hard Soil", "Commercial Grade"],
    description: "Extra heavy-duty disc plough with 5 furrows designed for commercial farming operations in hard soil conditions.",
    specifications: {
      "Number of Furrows": "5",
      "Disc Size": "26 inches",
      "Working Width": "150 cm",
      "Power Requirement": "65-85 HP",
      "Weight": "720 kg",
      "Frame Material": "Heavy Duty Steel"
    },
    popular: true,
    discount: "12%",
    inStock: true
  }
];
