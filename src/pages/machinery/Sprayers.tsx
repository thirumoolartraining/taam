import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Droplets, Zap, Battery, Gauge, Settings } from "lucide-react";
import { sprayerModels } from "@/data";

// const Sprayers = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
      
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
//         <div className="container mx-auto">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               Advanced Sprayers
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 opacity-90">
//               Professional crop protection systems for efficient and precise application
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/request-quote">
//                 <Button size="lg" variant="secondary" className="text-blue-800">
//                   Get Price Quote
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//               </Link>
//               <Link to="/contact">
//                 <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
//                   Expert Consultation
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Sprayers Grid */}
//       <section className="py-16">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Available Sprayer Models
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Choose from our comprehensive range of sprayers for all your crop protection needs
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {sprayerModels.map((sprayer) => (
//               <Card key={sprayer.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden cursor-pointer">
//                 {sprayer.popular && (
//                   <div className="absolute top-4 left-4 z-10">
//                     <Badge className="bg-orange-500 hover:bg-orange-600">
//                       Popular Choice
//                     </Badge>
//                   </div>
//                 )}
                
//                 <div className="absolute top-4 right-4 z-10">
//                   <Badge variant="secondary" className="bg-white/90">
//                     <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
//                     {sprayer.rating}
//                   </Badge>
//                 </div>

//                 <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
//                   <img
//                     src={sprayer.image}
//                     alt={sprayer.name}
//                     className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
//                     style={{ aspectRatio: '4/3' }}
//                   />
//                 </div>
                
//                 <CardHeader>
//                   <CardTitle className="text-xl font-bold text-gray-900">
//                     {sprayer.name}
//                   </CardTitle>
//                   <CardDescription className="text-blue-600 font-semibold text-lg">
//                     Type: {sprayer.type}
//                   </CardDescription>
//                   <div className="flex items-center gap-2">
//                     <span className="text-2xl font-bold text-blue-600">{sprayer.price}</span>
//                     <span className="text-sm text-gray-500 line-through">{sprayer.originalPrice}</span>
//                   </div>
//                 </CardHeader>
                
//                 <CardContent>
//                   <div className="space-y-4">
//                     {/* Key Features */}
//                     <div className="grid grid-cols-2 gap-2">
//                       {sprayer.features.map((feature, index) => (
//                         <div key={index} className="flex items-center text-sm text-gray-600">
//                           <Droplets className="w-3 h-3 mr-1 text-blue-600" />
//                           {feature}
//                         </div>
//                       ))}
//                     </div>
                    
//                     {/* Specifications */}
//                     <div className="bg-gray-50 p-3 rounded-lg">
//                       <h4 className="font-semibold text-sm mb-2">Specifications:</h4>
//                       <div className="space-y-1 text-xs text-gray-600">
//                         <div className="flex items-center">
//                           <Gauge className="w-3 h-3 mr-1" />
//                           Capacity: {sprayer.specifications["Tank Capacity"]}
//                         </div>
//                         <div className="flex items-center">
//                           <Battery className="w-3 h-3 mr-1" />
//                           Type: {sprayer.specifications["Battery Type"] || sprayer.specifications["Pump Type"] || sprayer.specifications["Engine Type"]}
//                         </div>
//                         <div className="flex items-center">
//                           <Zap className="w-3 h-3 mr-1" />
//                           Pressure: {sprayer.specifications["Pressure Range"]}
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="flex gap-2">
//                       <Link to={`/product/sprayers/${sprayer.id}`} className="flex-1">
//                         <Button className="w-full bg-blue-600 hover:bg-blue-700">
//                           View Details
//                           <ArrowRight className="ml-2 h-4 w-4" />
//                         </Button>
//                       </Link>
//                       <Link to="/request-quote">
//                         <Button variant="outline" size="icon">
//                           <Droplets className="h-4 w-4" />
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Sprayers;

const Sprayers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advanced Sprayers
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Professional crop protection systems for efficient and precise application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" variant="secondary" className="text-blue-800">
                  Get Price Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                  Expert Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sprayers Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Sprayer Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of sprayers for all your crop protection needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sprayerModels.map((sprayer) => (
              <Card key={sprayer.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden cursor-pointer">
                {sprayer.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      Popular Choice
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-white/90">
                    <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {sprayer.rating}
                  </Badge>
                </div>

                <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
                  <img
                    src={sprayer.image}
                    alt={sprayer.name}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {sprayer.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-semibold text-lg">
                    Type: {sprayer.type}
                  </CardDescription>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-600">{sprayer.price}</span>
                    <span className="text-sm text-gray-500 line-through">{sprayer.originalPrice}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Key Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {sprayer.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Droplets className="w-3 h-3 mr-1 text-blue-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Specifications */}
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Specifications:</h4>
                      <div className="space-y-1 text-xs text-gray-600">
                        <div className="flex items-center">
                          <Gauge className="w-3 h-3 mr-1" />
                          Capacity: {sprayer.specifications["Tank Capacity"]}
                        </div>
                        <div className="flex items-center">
                          <Battery className="w-3 h-3 mr-1" />
                          Type: {sprayer.specifications["Battery Type"] || sprayer.specifications["Pump Type"] || sprayer.specifications["Engine Type"]}
                        </div>
                        <div className="flex items-center">
                          <Zap className="w-3 h-3 mr-1" />
                          Pressure: {sprayer.specifications["Pressure Range"]}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link to={`/product/sprayers/${sprayer.id}`} className="flex-1">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to="/request-quote">
                        <Button variant="outline" size="icon">
                          <Droplets className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sprayers;

