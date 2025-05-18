
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

interface DestinationProps {
  name: string;
  arabicName: string;
  image: string;
  description: string;
  link: string;
}

const Destination: React.FC<DestinationProps> = ({ name, arabicName, image, description, link }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-amr-beige hover:border-amr-gold">
      <Link to={link} className="block">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-amr-green">{name}</h3>
            <span className="text-amr-green font-arabic">{arabicName}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardContent>
      </Link>
    </Card>
  );
};

const FeaturedDestinations: React.FC = () => {
  const destinations = [
    {
      name: "Makkah",
      arabicName: "مكة",
      image: "https://images.unsplash.com/photo-1591457722016-8a58db5d3988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",
      description: "Stay close to the Holy Kaaba with experienced local guides at the heart of Islam.",
      link: "/destination/makkah"
    },
    {
      name: "Madinah",
      arabicName: "المدينة",
      image: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description: "Visit the Prophet's Mosque and explore the spiritual essence of Madinah.",
      link: "/destination/madinah"
    },
    {
      name: "Riyadh",
      arabicName: "الرياض",
      image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description: "Discover luxury stays in the vibrant Saudi capital, blending heritage and modernity.",
      link: "/destination/riyadh"
    },
    {
      name: "Abha",
      arabicName: "أبها",
      image: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description: "Explore the serene mountains and rich heritage of Abha, Saudi Arabia's hidden gem.",
      link: "/destination/abha"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-amr-beige/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-amr-green mb-2">Featured Destinations</h2>
          <p className="text-xl arabic text-amr-green">وجهات مميزة</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Destination
              key={destination.name}
              name={destination.name}
              arabicName={destination.arabicName}
              image={destination.image}
              description={destination.description}
              link={destination.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestinations;
