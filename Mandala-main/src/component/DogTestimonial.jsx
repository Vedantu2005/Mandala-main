import React from "react";
import { ExternalLink } from "lucide-react";

const DogTestimonial = () => {
  const linkedInUrl = "https://www.linkedin.com/posts/lauren-a-novy_leadership-selfdiscovery-growthmindset-activity-7395188259041091585-5iON/?utm_source=share&utm_medium=member_ios&rcm=ACoAAApDBPkBD4q2rini5bKdP7x-OWEQCtRpJEc";

  return (
    <section className="w-full py-12 bg-transparent">
      <div className="max-w-2xl mx-auto px-4 flex flex-col items-center">
        
        {/* Image Container - Clickable */}
        <a 
          href={linkedInUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <img
            src="/dog.jpg" 
            alt="The Mandala Within Book with a cute dog"
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Optional overlay hint */}
          <div className="absolute inset-0 bg-black/10 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
             <ExternalLink className="text-white opacity-0 group-hover:opacity-80 w-12 h-12 drop-shadow-md transition-opacity duration-300" />
          </div>
        </a>

        {/* Teaser Text */}
        <div className="mt-6 text-center">
          <p className="text-[#664000] font-lato text-lg sm:text-xl leading-relaxed">
            "A year with Clay Boykin gave me those rare leadership 'click' moments that helped me see myself with new clarity."
          </p>
          
          {/* (read more) Link/Button */}
          <div className="mt-6 mb-3">
                    <a href="https://www.linkedin.com/posts/lauren-a-novy_leadership-selfdiscovery-growthmindset-activity-7395188259041091585-5iON/?utm_source=share&utm_medium=member_ios&rcm=ACoAAApDBPkBD4q2rini5bKdP7x-OWEQCtRpJEc" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#CC7A00] hover:bg-[#664000] cursor-pointer text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform  shadow-lg hover:shadow-xl">
                            Read More
                        </button>
                    </a>
                </div>
          
        </div>

      </div>
    </section>
  );
};

export default DogTestimonial;